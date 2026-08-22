/* STEMCO hero — Three.js scene: the brand icon as floating glossy shapes
   (two rising bars + tapered figure + head) over a constellation of
   subject-colored particles. Degrades to nothing (CSS/SVG fallback shows). */
(function () {
  'use strict';
  var host = document.getElementById('hero3d');
  if (!host || typeof THREE === 'undefined') return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var small = window.innerWidth < 760;
  if (reduced) return; // CSS fallback stays

  var accent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#F4364C';

  var scene = new THREE.Scene();
  var cam = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  cam.position.set(0, 0.4, 9);

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  host.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.75));
  var key = new THREE.DirectionalLight(0xffffff, 0.9); key.position.set(4, 6, 6); scene.add(key);
  var rim = new THREE.DirectionalLight(0xbfe9ff, 0.35); rim.position.set(-5, -2, -4); scene.add(rim);

  /* ---- 3D globe: From Singapore to the World ---- */
  var globe = new THREE.Group();
  var R = 2.3;

  // sphere wireframe shell
  globe.add(new THREE.Mesh(
    new THREE.SphereGeometry(R, 28, 20),
    new THREE.MeshBasicMaterial({ color: 0x36454F, wireframe: true, transparent: true, opacity: 0.14 })
  ));
  // soft inner sphere for body
  globe.add(new THREE.Mesh(
    new THREE.SphereGeometry(R * 0.985, 40, 30),
    new THREE.MeshStandardMaterial({ color: 0xf2f4f4, roughness: 0.9, metalness: 0, transparent: true, opacity: 0.55 })
  ));
  // equator ring
  var eq = new THREE.Mesh(new THREE.TorusGeometry(R * 1.001, 0.012, 8, 90),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(accent), transparent: true, opacity: 0.65 }));
  eq.rotation.x = Math.PI / 2;
  globe.add(eq);
  // tilted orbit ring
  var orbit = new THREE.Mesh(new THREE.TorusGeometry(R * 1.45, 0.02, 8, 90),
    new THREE.MeshBasicMaterial({ color: 0x36454F, transparent: true, opacity: 0.25 }));
  orbit.rotation.x = 1.15; orbit.rotation.y = 0.4;
  globe.add(orbit);
  // satellite on the orbit ring
  var sat = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16),
    new THREE.MeshStandardMaterial({ color: new THREE.Color(accent), roughness: .3 }));
  globe.add(sat);

  function latlon(lat, lon, r) {
    var la = lat * Math.PI / 180, lo = lon * Math.PI / 180;
    return new THREE.Vector3(r * Math.cos(la) * Math.cos(lo), r * Math.sin(la), -r * Math.cos(la) * Math.sin(lo));
  }

  // scattered surface dots (world texture impression)
  (function () {
    var n = 350, p = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      var v = latlon(Math.asin(Math.random() * 2 - 1) * 180 / Math.PI, Math.random() * 360 - 180, R * 1.002);
      p[i * 3] = v.x; p[i * 3 + 1] = v.y; p[i * 3 + 2] = v.z;
    }
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    globe.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0x36454F, size: 0.045, transparent: true, opacity: 0.55 })));
  })();

  // Singapore beacon + flight arcs to partner countries, with traveling pulses
  var SG = latlon(1.35, 103.82, R);
  var sgDot = new THREE.Mesh(new THREE.SphereGeometry(0.085, 16, 16),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(accent) }));
  sgDot.position.copy(SG);
  globe.add(sgDot);

  var DEST = [[48,67],[-6.2,106.8],[13.7,100.5],[47.9,106.9],[16.8,96.2],[9,8.7],[30.4,69.3],
              [14.6,121],[24.7,46.7],[44,21],[38,58],[41.3,69.2],[21,105.8],[3.1,101.7]];
  var ARC_COLORS = ['#F4364C','#26D07C','#FF8200','#D9027D','#0050B5','#FFB81C','#00B5E2'];
  var pulses = [];
  DEST.forEach(function (d, k) {
    var end = latlon(d[0], d[1], R);
    var mid = SG.clone().add(end).multiplyScalar(0.5).normalize()
      .multiplyScalar(R * (1.25 + 0.18 * Math.random()));
    var curve = new THREE.QuadraticBezierCurve3(SG, mid, end);
    var pts = curve.getPoints(48);
    var g = new THREE.BufferGeometry().setFromPoints(pts);
    var col = new THREE.Color(ARC_COLORS[k % ARC_COLORS.length]);
    globe.add(new THREE.Line(g, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.42 })));
    var endDot = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 10), new THREE.MeshBasicMaterial({ color: col }));
    endDot.position.copy(end);
    globe.add(endDot);
    var pulse = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 10),
      new THREE.MeshBasicMaterial({ color: col }));
    pulse.userData = { curve: curve, offset: k / DEST.length };
    globe.add(pulse);
    pulses.push(pulse);
  });

  globe.position.x = small ? 0 : 2.3;
  globe.rotation.z = 0.18;
  if (small) { globe.scale.setScalar(0.78); globe.position.y = -1.1; }
  scene.add(globe);

  /* particles — subject-colored constellation */
  var COLORS = ['#26D07C', '#FF8200', '#D9027D', '#0050B5', '#FFB81C', '#00B5E2', '#F4364C'];
  var N = small ? 60 : 130;
  var pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  var c = new THREE.Color();
  for (var i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 16;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
    pos[i * 3 + 2] = -2 - Math.random() * 6;
    c.set(COLORS[i % COLORS.length]);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  var pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  pg.setAttribute('color', new THREE.BufferAttribute(col, 3));
  var points = new THREE.Points(pg, new THREE.PointsMaterial({
    size: 0.09, vertexColors: true, transparent: true, opacity: 0.75, depthWrite: false
  }));
  scene.add(points);

  // constellation lines between near particles
  var lines = [];
  for (var a = 0; a < N; a++) {
    for (var b = a + 1; b < N; b++) {
      var dx = pos[a * 3] - pos[b * 3], dy = pos[a * 3 + 1] - pos[b * 3 + 1], dz = pos[a * 3 + 2] - pos[b * 3 + 2];
      if (dx * dx + dy * dy + dz * dz < 2.1) { lines.push(pos[a * 3], pos[a * 3 + 1], pos[a * 3 + 2], pos[b * 3], pos[b * 3 + 1], pos[b * 3 + 2]); }
    }
  }
  var lg = new THREE.BufferGeometry();
  lg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(lines), 3));
  scene.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({
    color: 0x36454F, transparent: true, opacity: 0.12
  })));

  /* interaction */
  var mx = 0, my = 0, sx = 0, sy = 0, scrollP = 0;
  window.addEventListener('mousemove', function (e) {
    mx = (e.clientX / window.innerWidth - 0.5);
    my = (e.clientY / window.innerHeight - 0.5);
  }, { passive: true });
  window.addEventListener('scroll', function () {
    scrollP = Math.min(1, window.scrollY / window.innerHeight);
  }, { passive: true });

  function size() {
    var w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h);
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
  }
  size();
  window.addEventListener('resize', size);

  var clock = new THREE.Clock();
  var visible = true;
  new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }, { threshold: 0 }).observe(host);

  (function animate() {
    requestAnimationFrame(animate);
    if (!visible) return;
    var t = clock.getElapsedTime();
    sx += (mx - sx) * 0.05; sy += (my - sy) * 0.05;

    globe.rotation.y = t * 0.14 + sx * 0.5;
    globe.rotation.x = sy * 0.25;
    globe.position.y = Math.sin(t * 0.7) * 0.1 + scrollP * 2.0;
    var oa = t * 0.9;
    sat.position.set(Math.cos(oa) * R * 1.45, Math.sin(oa) * R * 1.45 * Math.sin(1.15), Math.sin(oa) * R * 1.45 * Math.cos(1.15));
    for (var pi = 0; pi < pulses.length; pi++) {
      var pu = pulses[pi];
      var tt = (t * 0.22 + pu.userData.offset) % 1;
      pu.position.copy(pu.userData.curve.getPoint(tt));
      pu.scale.setScalar(0.6 + 0.8 * Math.sin(tt * Math.PI));
    }

    points.rotation.y = t * 0.02 + sx * 0.1;
    points.position.y = scrollP * 1.2;

    renderer.render(scene, cam);
  })();
})();

/* Extra floating 3D objects in the main hero field */
(function () {
  'use strict';
  var host = document.getElementById('hero3d');
  if (!host || typeof THREE === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // piggy-back on the scene the main IIFE created? Scenes are closed over —
  // simplest: a second transparent canvas layered in the same host.
  var scene = new THREE.Scene();
  var cam = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  cam.position.set(0, 0, 9);
  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.cssText = 'position:absolute;inset:0';
  host.appendChild(renderer.domElement);
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  var key = new THREE.DirectionalLight(0xffffff, 0.8); key.position.set(3, 5, 6); scene.add(key);

  function mat(hex, opts) {
    return new THREE.MeshStandardMaterial(Object.assign({ color: new THREE.Color(hex), roughness: .35, metalness: .1 }, opts || {}));
  }
  var objs = [];
  var narrow = window.innerWidth < 760 ? 0.42 : 1;
  function add(mesh, x, y, s, rs) {
    mesh.position.set(x * narrow, y, -1.5 - Math.random() * 2);
    mesh.scale.setScalar(s);
    mesh.userData.rs = rs;
    scene.add(mesh); objs.push(mesh);
  }
  add(new THREE.Mesh(new THREE.TorusGeometry(1, .34, 24, 60), mat('#0050B5')), -4.6, 1.9, .5, .35);
  add(new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), mat('#26D07C', { flatShading: true })), -3.2, -1.8, .55, .5);
  add(new THREE.Mesh(new THREE.TorusKnotGeometry(.8, .26, 90, 14), mat('#00B5E2')), 4.9, -1.6, .48, .4);
  add(new THREE.Mesh(new THREE.OctahedronGeometry(1, 0), mat('#FFB81C', { flatShading: true })), 3.9, 2.3, .5, .6);
  add(new THREE.Mesh(new THREE.ConeGeometry(.8, 1.5, 5), mat('#D9027D', { flatShading: true })), -1.6, 2.6, .45, .45);
  add(new THREE.Mesh(new THREE.TorusGeometry(1, .12, 16, 50), mat('#FF8200')), 1.2, -2.7, .5, .3);

  var mx = 0, my = 0, sx = 0, sy = 0, scrollP = 0;
  window.addEventListener('mousemove', function (e) {
    mx = e.clientX / window.innerWidth - .5; my = e.clientY / window.innerHeight - .5;
  }, { passive: true });
  window.addEventListener('scroll', function () {
    scrollP = Math.min(1, window.scrollY / window.innerHeight);
  }, { passive: true });
  function size() {
    renderer.setSize(host.clientWidth, host.clientHeight);
    cam.aspect = host.clientWidth / host.clientHeight; cam.updateProjectionMatrix();
  }
  size(); window.addEventListener('resize', size);
  var clock = new THREE.Clock(), visible = true;
  new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(host);
  (function anim() {
    requestAnimationFrame(anim);
    if (!visible) return;
    var t = clock.getElapsedTime();
    sx += (mx - sx) * .04; sy += (my - sy) * .04;
    objs.forEach(function (o, i) {
      o.rotation.x = t * o.userData.rs + i;
      o.rotation.y = t * o.userData.rs * 1.3 + i * 2;
      o.position.y += Math.sin(t * .9 + i * 1.7) * .0012;
      o.position.x += Math.cos(t * .7 + i * 1.3) * .0008;
    });
    scene.position.x = sx * .8; scene.position.y = -sy * .5 + scrollP * 1.6;
    renderer.render(scene, cam);
  })();
})();

/* Subject-page mini scene: accent-colored shapes orbiting behind the logo */
(function () {
  'use strict';
  var host = document.getElementById('subj3d');
  if (!host || typeof THREE === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var accent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#F4364C';
  var scene = new THREE.Scene();
  var cam = new THREE.PerspectiveCamera(40, 1, .1, 50);
  cam.position.z = 7;
  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  host.appendChild(renderer.domElement);
  scene.add(new THREE.AmbientLight(0xffffff, .8));
  var key = new THREE.DirectionalLight(0xffffff, .8); key.position.set(3, 4, 5); scene.add(key);
  var m = new THREE.MeshStandardMaterial({ color: new THREE.Color(accent), roughness: .3, metalness: .12 });
  var wire = new THREE.MeshBasicMaterial({ color: new THREE.Color(accent), wireframe: true, transparent: true, opacity: .35 });
  var group = new THREE.Group();
  var ico = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 0), m); ico.position.set(-2.2, 1.5, -1);
  var knot = new THREE.Mesh(new THREE.TorusKnotGeometry(.7, .22, 80, 12), m); knot.position.set(2.4, -1.6, -1);
  var ring = new THREE.Mesh(new THREE.TorusGeometry(2.6, .04, 12, 80), wire); ring.rotation.x = 1.1;
  var oct = new THREE.Mesh(new THREE.OctahedronGeometry(.6, 0), m); oct.position.set(2.3, 1.9, -2);
  group.add(ico, knot, ring, oct);
  scene.add(group);
  var mx = 0, sx = 0;
  window.addEventListener('mousemove', function (e) { mx = e.clientX / window.innerWidth - .5; }, { passive: true });
  function size() {
    renderer.setSize(host.clientWidth, host.clientHeight);
    cam.aspect = host.clientWidth / host.clientHeight; cam.updateProjectionMatrix();
  }
  size(); window.addEventListener('resize', size);
  var clock = new THREE.Clock(), visible = true;
  new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(host);
  (function anim() {
    requestAnimationFrame(anim);
    if (!visible) return;
    var t = clock.getElapsedTime();
    sx += (mx - sx) * .05;
    ico.rotation.set(t * .4, t * .5, 0);
    knot.rotation.set(t * .3, t * .45, 0);
    oct.rotation.set(t * .6, t * .4, 0);
    ring.rotation.z = t * .12;
    group.rotation.y = sx * .5;
    group.position.y = Math.sin(t * .8) * .12;
    renderer.render(scene, cam);
  })();
})();

/* Partners globe — dark glowing world with bright arc network (drag to spin) */
(function () {
  'use strict';
  var host = document.getElementById('partners3d');
  if (!host || typeof THREE === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var small = window.innerWidth < 760;

  var scene = new THREE.Scene();
  var cam = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  cam.position.set(0, 0.35, small ? 11.5 : 9.8);
  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  host.appendChild(renderer.domElement);
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  var key = new THREE.DirectionalLight(0xffffff, 0.7); key.position.set(5, 6, 6); scene.add(key);
  var fill = new THREE.DirectionalLight(0xF4364C, 0.25); fill.position.set(-6, -3, 4); scene.add(fill);

  var COLORS = ['#F4364C', '#26D07C', '#FF8200', '#D9027D', '#4D8DFF', '#FFB81C', '#00B5E2'];
  var R = 3.1;
  var globe = new THREE.Group();

  /* soft radial glow behind the globe (canvas sprite) */
  function glowTexture(hex) {
    var c = document.createElement('canvas'); c.width = c.height = 256;
    var g = c.getContext('2d');
    var grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, hex + 'aa'); grad.addColorStop(0.4, hex + '33'); grad.addColorStop(1, hex + '00');
    g.fillStyle = grad; g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }
  var halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture('#F4364C'), transparent: true, opacity: 0.55, depthWrite: false
  }));
  halo.scale.setScalar(R * 4.4);
  scene.add(halo);

  /* the dark planet */
  globe.add(new THREE.Mesh(new THREE.SphereGeometry(R, 48, 36),
    new THREE.MeshStandardMaterial({ color: 0x27333d, roughness: 0.85, metalness: 0.1 })));
  /* faint longitude/latitude cage just above the surface */
  globe.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.004, 24, 16),
    new THREE.MeshBasicMaterial({ color: 0x8fb0c4, wireframe: true, transparent: true, opacity: 0.10 })));

  function latlon(lat, lon, r) {
    var la = lat * Math.PI / 180, lo = lon * Math.PI / 180;
    return new THREE.Vector3(r * Math.cos(la) * Math.cos(lo), r * Math.sin(la), -r * Math.cos(la) * Math.sin(lo));
  }

  /* glowing city dots on the surface */
  (function () {
    var n = small ? 380 : 650, p = new Float32Array(n * 3), col = new Float32Array(n * 3);
    var c = new THREE.Color();
    for (var i = 0; i < n; i++) {
      var v = latlon(Math.asin(Math.random() * 2 - 1) * 180 / Math.PI, Math.random() * 360 - 180, R * 1.006);
      p[i * 3] = v.x; p[i * 3 + 1] = v.y; p[i * 3 + 2] = v.z;
      c.set(Math.random() < 0.82 ? '#bfd3e0' : COLORS[i % COLORS.length]);
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    globe.add(new THREE.Points(g, new THREE.PointsMaterial({
      size: 0.055, vertexColors: true, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false
    })));
  })();

  /* equator ring + orbiting satellite */
  var eq = new THREE.Mesh(new THREE.TorusGeometry(R * 1.02, 0.014, 8, 100),
    new THREE.MeshBasicMaterial({ color: 0xF4364C, transparent: true, opacity: 0.5 }));
  eq.rotation.x = Math.PI / 2;
  globe.add(eq);
  var orbitR = R * 1.5;
  var orbit = new THREE.Mesh(new THREE.TorusGeometry(orbitR, 0.015, 8, 100),
    new THREE.MeshBasicMaterial({ color: 0xbfd3e0, transparent: true, opacity: 0.28 }));
  orbit.rotation.x = 1.25; orbit.rotation.y = 0.35;
  scene.add(orbit);
  var sat = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 14),
    new THREE.MeshBasicMaterial({ color: 0xFFB81C }));
  scene.add(sat);
  var satGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture('#FFB81C'), transparent: true, opacity: 0.9, depthWrite: false
  }));
  satGlow.scale.setScalar(0.7);
  scene.add(satGlow);

  /* Singapore beacon with pulsing rings */
  var SG = latlon(1.35, 103.82, R);
  var sgDot = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xF4364C }));
  sgDot.position.copy(SG);
  globe.add(sgDot);
  var sgGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture('#F4364C'), transparent: true, opacity: 1, depthWrite: false
  }));
  sgGlow.scale.setScalar(0.9); sgGlow.position.copy(SG.clone().multiplyScalar(1.02));
  globe.add(sgGlow);
  var rings = [];
  for (var ri = 0; ri < 3; ri++) {
    var ring = new THREE.Mesh(new THREE.RingGeometry(0.14, 0.17, 32),
      new THREE.MeshBasicMaterial({ color: 0xF4364C, side: THREE.DoubleSide, transparent: true, opacity: 0.8 }));
    ring.position.copy(SG.clone().multiplyScalar(1.01));
    ring.lookAt(SG.clone().multiplyScalar(3));
    ring.userData.offset = ri / 3;
    globe.add(ring); rings.push(ring);
  }

  /* bright tube arcs to partner countries + glowing pulses */
  var DEST = [[48,67],[-6.2,106.8],[13.7,100.5],[47.9,106.9],[16.8,96.2],[9,8.7],[30.4,69.3],
              [14.6,121],[24.7,46.7],[44,21],[38,58],[41.3,69.2],[21,105.8],[3.1,101.7],
              [22.3,114.2],[41.3,-8.6],[11.5,104.9]];
  var pulses = [];
  DEST.forEach(function (d, k) {
    var end = latlon(d[0], d[1], R);
    var mid = SG.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(R * (1.28 + 0.2 * Math.random()));
    var curve = new THREE.QuadraticBezierCurve3(SG, mid, end);
    var colHex = COLORS[k % COLORS.length];
    var col = new THREE.Color(colHex);
    globe.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.016, 6, false),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.75,
        blending: THREE.AdditiveBlending, depthWrite: false })));
    var ed = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 12), new THREE.MeshBasicMaterial({ color: col }));
    ed.position.copy(end); globe.add(ed);
    var pu = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(colHex), transparent: true, opacity: 1, depthWrite: false
    }));
    pu.scale.setScalar(0.5);
    pu.userData = { curve: curve, offset: k / DEST.length };
    globe.add(pu); pulses.push(pu);
  });

  globe.rotation.z = 0.12;
  scene.add(globe);

  /* starfield around everything */
  (function () {
    var n = 220, p = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      var v = new THREE.Vector3().setFromSphericalCoords(
        R * (1.9 + Math.random() * 2.6), Math.acos(Math.random() * 2 - 1), Math.random() * Math.PI * 2);
      p[i * 3] = v.x; p[i * 3 + 1] = v.y; p[i * 3 + 2] = v.z;
    }
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    scene.add(new THREE.Points(g, new THREE.PointsMaterial({
      color: 0x9fb6c6, size: 0.045, transparent: true, opacity: 0.7,
      blending: THREE.AdditiveBlending, depthWrite: false
    })));
  })();

  /* drag to spin + inertia (touch-friendly) */
  var rotY = -1.2, rotX = -0.08, velY = 0, dragging = false, lx = 0, ly = 0;
  host.addEventListener('pointerdown', function (e) {
    dragging = true; lx = e.clientX; ly = e.clientY;
    host.classList.add('dragging'); host.setPointerCapture(e.pointerId);
  });
  host.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    var dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY;
    rotY += dx * 0.006; velY = dx * 0.0025;
    rotX = Math.max(-0.9, Math.min(0.9, rotX + dy * 0.004));
  });
  ['pointerup', 'pointercancel'].forEach(function (ev) {
    host.addEventListener(ev, function () { dragging = false; host.classList.remove('dragging'); });
  });

  function size() {
    renderer.setSize(host.clientWidth, host.clientHeight);
    cam.aspect = host.clientWidth / host.clientHeight;
    cam.updateProjectionMatrix();
  }
  size(); window.addEventListener('resize', size);

  var clock = new THREE.Clock(), visible = true;
  new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(host);
  (function anim() {
    requestAnimationFrame(anim);
    if (!visible) return;
    var t = clock.getElapsedTime();
    if (!dragging) { rotY += 0.0035 + velY; velY *= 0.95; }
    globe.rotation.y = rotY;
    globe.rotation.x = rotX + Math.sin(t * 0.3) * 0.03;
    var oa = t * 0.55;
    sat.position.set(Math.cos(oa) * orbitR, Math.sin(oa) * orbitR * Math.sin(1.25), Math.sin(oa) * orbitR * Math.cos(1.25));
    satGlow.position.copy(sat.position);
    for (var i = 0; i < pulses.length; i++) {
      var pu = pulses[i];
      var tt = (t * 0.22 + pu.userData.offset) % 1;
      pu.position.copy(pu.userData.curve.getPoint(tt));
      pu.scale.setScalar(0.3 + 0.5 * Math.sin(tt * Math.PI));
    }
    for (var r2 = 0; r2 < rings.length; r2++) {
      var rg = rings[r2];
      var rt = (t * 0.6 + rg.userData.offset) % 1;
      rg.scale.setScalar(1 + rt * 2.6);
      rg.material.opacity = 0.8 * (1 - rt);
    }
    renderer.render(scene, cam);
  })();
})();

/* Stats band — floating wireframe shapes drifting with scroll */
(function () {
  'use strict';
  var host = document.getElementById('stats3d');
  if (!host || typeof THREE === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var scene = new THREE.Scene();
  var cam = new THREE.PerspectiveCamera(35, 1, 0.1, 60);
  cam.position.z = 10;
  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  host.appendChild(renderer.domElement);
  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  var key = new THREE.DirectionalLight(0xffffff, 0.5); key.position.set(3, 5, 6); scene.add(key);

  var COLORS = ['#F4364C', '#0050B5', '#26D07C', '#FF8200', '#00B5E2', '#D9027D', '#FFB81C'];
  var objs = [];
  var narrow = window.innerWidth < 760 ? 0.42 : 1;
  function wire(geo, hex, x, y, z, s) {
    x *= narrow;
    var m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      color: new THREE.Color(hex), wireframe: true, transparent: true, opacity: 0.35
    }));
    m.position.set(x, y, z); m.scale.setScalar(s);
    m.userData.seed = Math.random() * 10;
    scene.add(m); objs.push(m);
  }
  function solid(geo, hex, x, y, z, s) {
    x *= narrow;
    var m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color: new THREE.Color(hex), roughness: .4, metalness: .05, flatShading: true
    }));
    m.position.set(x, y, z); m.scale.setScalar(s);
    m.userData.seed = Math.random() * 10;
    scene.add(m); objs.push(m);
  }
  wire(new THREE.IcosahedronGeometry(1, 0), COLORS[1], -6.4, 1.6, -3, 1.1);
  wire(new THREE.TorusGeometry(1, .3, 10, 40), COLORS[0], 6.6, -1.2, -2.5, .9);
  wire(new THREE.OctahedronGeometry(1, 0), COLORS[4], -3.4, -2.2, -4, .9);
  wire(new THREE.TorusKnotGeometry(.8, .25, 60, 10), COLORS[2], 3.6, 2.4, -4.5, .8);
  solid(new THREE.TetrahedronGeometry(.55, 0), COLORS[3], -1.2, 2.6, -2, 1);
  solid(new THREE.IcosahedronGeometry(.4, 0), COLORS[5], 1.4, -2.6, -1.5, 1);
  solid(new THREE.OctahedronGeometry(.4, 0), COLORS[6], 7.2, 2.2, -3.5, 1);
  solid(new THREE.SphereGeometry(.28, 14, 14), COLORS[0], -7.4, -1.8, -2, 1);

  var scrollV = 0, lastSY = window.scrollY;
  window.addEventListener('scroll', function () {
    scrollV = window.scrollY - lastSY; lastSY = window.scrollY;
  }, { passive: true });

  function size() {
    renderer.setSize(host.clientWidth, host.clientHeight);
    cam.aspect = host.clientWidth / host.clientHeight;
    cam.updateProjectionMatrix();
  }
  size(); window.addEventListener('resize', size);

  var clock = new THREE.Clock(), visible = true, drift = 0;
  new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(host);
  (function anim() {
    requestAnimationFrame(anim);
    if (!visible) return;
    var t = clock.getElapsedTime();
    drift += (scrollV - drift) * 0.06; scrollV *= 0.9;
    objs.forEach(function (o, i) {
      var sd = o.userData.seed;
      o.rotation.x = t * (0.25 + 0.08 * (i % 3)) + sd + drift * 0.006;
      o.rotation.y = t * (0.3 + 0.06 * (i % 4)) + sd;
      o.position.y += Math.sin(t * 0.8 + sd) * 0.0016 - drift * 0.004;
    });
    renderer.render(scene, cam);
  })();
})();
