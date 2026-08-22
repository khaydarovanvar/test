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

  var mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(accent), roughness: 0.32, metalness: 0.08 });

  var icon = new THREE.Group();

  function bar(w, h, x, y) {
    var g = new THREE.BoxGeometry(w, h, w, 2, 2, 2);
    var m = new THREE.Mesh(g, mat);
    m.position.set(x, y, 0);
    return m;
  }
  icon.add(bar(0.62, 0.95, -2.35, -1.5));   // small bar
  icon.add(bar(0.78, 1.65, -1.15, -1.15));  // medium bar

  // figure body: tapered cone, narrow at bottom
  var body = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.16, 2.6, 40), mat);
  body.position.set(0.45, -0.7, 0);
  body.rotation.z = -0.06;
  icon.add(body);

  var head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 40, 40), mat);
  head.position.set(0.45, 1.1, 0);
  icon.add(head);

  // raised arm tip
  var arm = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.3, 1.15, 24), mat);
  arm.position.set(1.15, 0.75, 0);
  arm.rotation.z = -0.7;
  icon.add(arm);

  icon.position.x = small ? 0 : 2.1;
  icon.rotation.y = -0.35;
  scene.add(icon);

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

    icon.rotation.y = -0.35 + sx * 0.55 + t * 0.08;
    icon.rotation.x = sy * 0.3;
    icon.position.y = Math.sin(t * 0.8) * 0.12 + scrollP * 2.2;
    icon.children.forEach(function (m, i) {
      m.position.z = Math.sin(t * 0.7 + i) * 0.08 + scrollP * (i - 2) * 1.4;
    });

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
  function add(mesh, x, y, s, rs) {
    mesh.position.set(x, y, -1.5 - Math.random() * 2);
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
