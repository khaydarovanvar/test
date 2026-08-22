/* STEMCO — motion & interaction layer
   Requires (CDN, loaded before this file): gsap + ScrollTrigger, Lenis.
   Everything degrades: no lib / reduced motion → content simply shows. */
(function () {
  'use strict';

  var doc = document.documentElement;
  doc.classList.remove('no-js');

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    /[?&]noanim/.test(location.search);
  var touch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  var hasGsap = typeof window.gsap !== 'undefined';
  if (reduced) doc.classList.add('reduced');

  if (hasGsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ---------------- smooth scroll ---------------- */
  var lenis = null;
  if (!reduced && !touch && typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (hasGsap && window.ScrollTrigger) lenis.on('scroll', ScrollTrigger.update);
  }
  function scrollTo(target) {
    if (lenis) lenis.scrollTo(target, { offset: -70 });
    else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  }

  /* ---------------- preloader ---------------- */
  var pre = document.querySelector('.preloader');
  var firstVisit = !sessionStorage.getItem('stemco-seen');
  function releasePreloader() {
    if (!pre) return;
    pre.classList.add('done');
    sessionStorage.setItem('stemco-seen', '1');
    document.body.style.overflow = '';
    setTimeout(function () { pre.remove(); }, 1000);
  }
  if (pre) {
    if (reduced || !hasGsap || !firstVisit) {
      releasePreloader();
    } else {
      document.body.style.overflow = 'hidden';
      var n = { v: 0 };
      var numEl = pre.querySelector('.n');
      var tl = gsap.timeline({ onComplete: releasePreloader });
      tl.from('.preloader .bar-s', { scaleY: 0, duration: .5, ease: 'power3.out' }, 0)
        .from('.preloader .bar-m', { scaleY: 0, duration: .5, ease: 'power3.out' }, .15)
        .from('.preloader .fig',   { scaleY: 0, duration: .55, ease: 'power3.out' }, .3)
        .from('.preloader .head',  { scale: 0, transformOrigin: 'center', duration: .6, ease: 'elastic.out(1,.45)' }, .55)
        .to(n, {
          v: 100, duration: 1.15, ease: 'power2.inOut',
          onUpdate: function () { if (numEl) numEl.textContent = Math.round(n.v); }
        }, 0);
    }
  }

  /* ---------------- custom cursor ---------------- */
  if (!touch && !reduced) {
    var dot = document.createElement('div'); dot.className = 'cursor';
    var ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.appendChild(dot); document.body.appendChild(ring);
    var mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', function (e) {
      var t = e.target.closest('[data-cursor], a, button, summary');
      ring.className = 'cursor-ring';
      if (!t) return;
      var kind = t.getAttribute && t.getAttribute('data-cursor');
      if (kind === 'drag') ring.classList.add('is-drag');
      else if (kind === 'play') ring.classList.add('is-play');
      else ring.classList.add('is-link');
    });
  }

  /* ---------------- nav ---------------- */
  var nav = document.querySelector('.nav');
  var lastY = 0;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (nav) {
      nav.classList.toggle('scrolled', y > 30);
      nav.classList.toggle('hidden', y > 400 && y > lastY);
    }
    lastY = y;
  }, { passive: true });

  var burger = document.querySelector('.burger');
  var overlay = document.querySelector('.menu-overlay');
  if (burger && overlay) {
    function setMenu(open) {
      overlay.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    }
    burger.addEventListener('click', function () {
      setMenu(!overlay.classList.contains('open'));
    });
    overlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) setMenu(false);
    });
  }

  /* anchor links → lenis */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      scrollTo(el);
    });
  });

  /* ---------------- page transition wipe ---------------- */
  var wipe = document.createElement('div');
  wipe.className = 'wipe';
  wipe.innerHTML = '<img class="wipe-icon" src="' + (document.body.dataset.root || '') + 'assets/img/logo/icon_stemco_128x128.png" alt="">';
  document.body.appendChild(wipe);
  document.querySelectorAll('a[data-transition]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (reduced || !hasGsap || e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      var href = a.getAttribute('href');
      var color = a.getAttribute('data-transition');
      if (color) wipe.style.background = color;
      gsap.timeline({ onComplete: function () { window.location.href = href; } })
        .to(wipe, { y: '0%', duration: .55, ease: 'power3.inOut', startAt: { y: '101%' } })
        .to('.wipe-icon', { opacity: 1, duration: .2 }, '-=.2');
    });
  });

  /* ---------------- split text ---------------- */
  document.querySelectorAll('[data-split]').forEach(function (el) {
    if (reduced || !hasGsap) return;
    var out = [];
    el.textContent.split(' ').forEach(function (word) {
      var chars = word.split('').map(function (c) { return '<span class="c">' + c + '</span>'; }).join('');
      out.push('<span class="w">' + chars + '</span>');
    });
    el.classList.add('split');
    el.innerHTML = out.join(' ');
    gsap.to(el.querySelectorAll('.c'), {
      y: 0, duration: .9, ease: 'power4.out', stagger: .022,
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  /* ---------------- reveals ---------------- */
  if (hasGsap && !reduced) {
    document.querySelectorAll('[data-reveal]').forEach(function (el, i) {
      gsap.to(el, {
        opacity: 1, y: 0, duration: .9, ease: 'power3.out',
        delay: (el.dataset.reveal | 0) * 0.09,
        scrollTrigger: { trigger: el, start: 'top 90%' }
      });
    });
    document.querySelectorAll('[data-img-reveal] img').forEach(function (img) {
      gsap.to(img, {
        scale: 1, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: img, start: 'top 85%' }
      });
    });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.style.opacity = 1; el.style.transform = 'none'; });
  }

  /* ---------------- counters ---------------- */
  document.querySelectorAll('[data-counter]').forEach(function (el) {
    var end = parseFloat(el.dataset.counter);
    if (reduced || !hasGsap) { el.textContent = end.toLocaleString('en-US'); return; }
    var o = { v: 0 };
    gsap.to(o, {
      v: end, duration: 1.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
      onUpdate: function () { el.textContent = Math.round(o.v).toLocaleString('en-US'); }
    });
  });

  /* ---------------- milestones horizontal scrub ---------------- */
  var mileTrack = document.querySelector('.milestones-track');
  if (mileTrack && hasGsap && !reduced && window.innerWidth > 860) {
    var wrap = mileTrack.closest('.milestones');
    var getX = function () { return -(mileTrack.scrollWidth - wrap.offsetWidth + 40); };
    gsap.to(mileTrack, {
      x: getX, ease: 'none',
      scrollTrigger: {
        trigger: wrap, start: 'top 18%', end: function () { return '+=' + (-getX()); },
        pin: true, scrub: 0.6, invalidateOnRefresh: true
      }
    });
  } else if (mileTrack) {
    mileTrack.parentElement.style.overflowX = 'auto';
  }

  /* ---------------- magnetic buttons ---------------- */
  if (!touch && !reduced && hasGsap) {
    document.querySelectorAll('.btn, .magnetic').forEach(function (b) {
      b.addEventListener('mousemove', function (e) {
        var r = b.getBoundingClientRect();
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .25, y: (e.clientY - r.top - r.height / 2) * .35, duration: .4 });
      });
      b.addEventListener('mouseleave', function () {
        gsap.to(b, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.4)' });
      });
    });
  }

  /* ---------------- tilt cards ---------------- */
  if (!touch && !reduced) {
    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - .5;
        var py = (e.clientY - r.top) / r.height - .5;
        card.style.transform = 'perspective(800px) rotateY(' + px * 7 + 'deg) rotateX(' + -py * 7 + 'deg) translateY(-8px)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
  }

  /* ---------------- 3D ring gallery: infinite loop + momentum ---------------- */
  var gallery = document.querySelector('.gallery');
  if (gallery) {
    var stage = gallery.querySelector('.gallery-stage');
    var cards = [].slice.call(gallery.querySelectorAll('.g-card'));
    var count = cards.length;
    var step = 360 / count;
    var rot = 0, targetRot = 0, vel = 0;
    var dragging = false, lastX = 0, movedPx = 0;
    var idleSpin = reduced ? 0 : -0.045;   // slow endless loop
    var radius = 500;

    function measure() {
      var cardW = cards[0].offsetWidth || 320;
      // ring radius so cards don't overlap: circumference ≈ count * (cardW * 1.15)
      radius = Math.max((count * cardW * 1.12) / (2 * Math.PI), cardW * 1.05);
      gallery.style.perspective = Math.round(radius * 3.2) + 'px';
    }
    measure();

    function layout() {
      for (var i = 0; i < count; i++) {
        var a = i * step + rot;                       // degrees
        var rad = a * Math.PI / 180;
        var depth = Math.cos(rad);                    // 1 = front, -1 = back
        cards[i].style.transform =
          'translate(-50%,-50%) rotateY(' + a + 'deg) translateZ(' + radius + 'px)';
        cards[i].style.opacity = depth < -0.35 ? 0 : 0.35 + 0.65 * (depth + 0.35) / 1.35;
        cards[i].style.zIndex = Math.round(100 + depth * 100);
        cards[i].style.setProperty('--dim', String(Math.max(0, (1 - depth) * 0.28)));
      }
    }

    (function tick() {
      if (!dragging) {
        targetRot += idleSpin + vel;
        vel *= 0.94;                                   // momentum decay
        if (Math.abs(vel) < 0.002) vel = 0;
      }
      rot += (targetRot - rot) * (reduced ? 1 : 0.12);
      layout();
      requestAnimationFrame(tick);
    })();

    gallery.addEventListener('pointerdown', function (e) {
      dragging = true; lastX = e.clientX; movedPx = 0; vel = 0;
      gallery.classList.add('dragging');
      gallery.setPointerCapture(e.pointerId);
    });
    gallery.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - lastX; lastX = e.clientX; movedPx += Math.abs(dx);
      targetRot += dx * 0.22;
      vel = dx * 0.09;                                 // carry into momentum
    });
    ['pointerup', 'pointercancel'].forEach(function (ev) {
      gallery.addEventListener(ev, function () {
        dragging = false;
        gallery.classList.remove('dragging');
      });
    });
    gallery.addEventListener('wheel', function (e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        targetRot -= e.deltaX * 0.12;
      }
    }, { passive: false });
    document.querySelectorAll('[data-gallery-prev]').forEach(function (b) {
      b.addEventListener('click', function () { targetRot += step; vel = 0; });
    });
    document.querySelectorAll('[data-gallery-next]').forEach(function (b) {
      b.addEventListener('click', function () { targetRot -= step; vel = 0; });
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') targetRot += step;
      if (e.key === 'ArrowRight') targetRot -= step;
    });
    window.addEventListener('resize', function () { measure(); });
  }

  /* ---------------- video lightbox ---------------- */
  var lb = document.querySelector('.lightbox');
  if (lb) {
    var frame = lb.querySelector('.frame');
    document.querySelectorAll('[data-video]').forEach(function (v) {
      v.addEventListener('click', function () {
        var id = v.getAttribute('data-video');
        frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
          '?autoplay=1&rel=0" title="STEMCO video" allow="autoplay; fullscreen" allowfullscreen></iframe>';
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    function closeLb() {
      lb.classList.remove('open');
      frame.innerHTML = '';
      document.body.style.overflow = '';
    }
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.closest('.close')) closeLb(); });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  }

  /* ---------------- footer sign underline ---------------- */
  var sign = document.querySelector('.footer .sign path');
  if (sign && hasGsap && !reduced) {
    var len = sign.getTotalLength();
    gsap.set(sign, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(sign, {
      strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut',
      scrollTrigger: { trigger: '.footer .sign', start: 'top 92%' }
    });
  }

  /* ---------------- rules sticky nav ---------------- */
  var ruleLinks = document.querySelectorAll('.rules-nav a');
  if (ruleLinks.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          ruleLinks.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('.rules-body h2[id]').forEach(function (h) { obs.observe(h); });
  }

  /* ---------------- HubSpot forms ----------------
     Configure these two constants with the STEMCO HubSpot account values
     (HubSpot → Marketing → Forms → your form → Share → Embed code). */
  var HUBSPOT_PORTAL_ID = 'YOUR_PORTAL_ID';   // e.g. '143912345'
  var HUBSPOT_FORM_GUID = {                    // one GUID per form
    register: 'YOUR_REGISTER_FORM_GUID',
    partner: 'YOUR_PARTNER_FORM_GUID'
  };

  document.querySelectorAll('form[data-hubspot]').forEach(function (form) {
    // floating labels for selects
    form.querySelectorAll('select').forEach(function (s) {
      s.addEventListener('change', function () { s.classList.toggle('has-value', !!s.value); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // honeypot
      var hp = form.querySelector('.hp input');
      if (hp && hp.value) return;
      // validation
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (input) {
        var f = input.closest('.field');
        var bad = !input.value.trim() ||
          (input.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value));
        if (f) f.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      if (!ok) return;

      var kind = form.getAttribute('data-hubspot');
      var guid = HUBSPOT_FORM_GUID[kind];
      var btn = form.querySelector('[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      var fields = [].slice.call(form.querySelectorAll('input[name], select[name], textarea[name]'))
        .filter(function (i) { return !i.closest('.hp'); })
        .map(function (i) { return { name: i.name, value: i.value }; });

      var payload = {
        fields: fields,
        context: { pageUri: location.href, pageName: document.title }
      };

      function succeed() {
        form.style.display = 'none';
        var s = form.parentElement.querySelector('.form-success');
        if (s) { s.classList.add('show'); confetti(s); }
      }
      function fail() {
        if (btn) { btn.disabled = false; btn.textContent = btn.getAttribute('data-label') || 'Submit'; }
        alert('Could not submit right now. Please email bestyourself@stemco.org');
      }

      if (!guid || guid.indexOf('YOUR_') === 0 || HUBSPOT_PORTAL_ID.indexOf('YOUR_') === 0) {
        // HubSpot not configured yet — show success state so the site is demoable,
        // and log a loud warning for the developer.
        console.warn('[STEMCO] HubSpot PORTAL_ID / FORM_GUID not configured — form data not sent.', payload);
        succeed();
        return;
      }

      fetch('https://api.hsforms.com/submissions/v3/integration/submit/' + HUBSPOT_PORTAL_ID + '/' + guid, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (r) { r.ok ? succeed() : fail(); }).catch(fail);
    });
  });

  /* confetti burst in brand colors */
  function confetti(anchor) {
    if (reduced) return;
    var colors = ['#F4364C', '#26D07C', '#FF8200', '#D9027D', '#0050B5', '#FFB81C', '#00B5E2'];
    var r = anchor.getBoundingClientRect();
    for (var i = 0; i < 60; i++) {
      var p = document.createElement('div');
      p.style.cssText = 'position:fixed;z-index:500;width:9px;height:13px;pointer-events:none;' +
        'left:' + (r.left + r.width / 2) + 'px;top:' + (r.top + 40) + 'px;' +
        'background:' + colors[i % colors.length] + ';border-radius:2px;';
      document.body.appendChild(p);
      var ang = Math.random() * Math.PI * 2, v = 5 + Math.random() * 9;
      var vx = Math.cos(ang) * v, vy = Math.sin(ang) * v - 7;
      (function (p, vx, vy) {
        var x = 0, y = 0, rot = Math.random() * 360, life = 0;
        (function fall() {
          x += vx; y += vy; vy += .45; rot += vx * 2; life++;
          p.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + rot + 'deg)';
          p.style.opacity = Math.max(0, 1 - life / 90);
          if (life < 95) requestAnimationFrame(fall); else p.remove();
        })();
      })(p, vx, vy);
    }
  }
})();
