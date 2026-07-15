/* Blueprint — ambient particle field (Dala-style constellation fragments).
   Tiny outlined triangles drifting on the void, with per-particle scroll
   parallax. Fixed canvas behind all content; respects reduced-motion. */

(() => {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-field';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');

  const COLORS = ['#8052ff', '#ffb829', '#15846e', '#dd90d8', '#00b3dd', '#847dff'];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W = 0, H = 0, dpr = 1, particles = [];

  function rand(a, b) { return a + Math.random() * (b - a); }

  function makeParticle() {
    return {
      x: Math.random(),                    // 0..1 of width
      y: Math.random(),                    // 0..1 of height
      size: rand(2.5, 7),
      color: COLORS[(Math.random() * COLORS.length) | 0],
      rot: rand(0, Math.PI * 2),
      spin: rand(-0.003, 0.003),
      vx: rand(-0.06, 0.06),               // px/frame drift
      vy: rand(-0.04, 0.04),
      depth: rand(0.05, 0.35),             // scroll-parallax factor
      alphaBase: rand(0.12, 0.4),
      twinkle: rand(0.0005, 0.002),
      phase: rand(0, Math.PI * 2),
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(110, Math.round(W * H / 14000));
    particles = Array.from({ length: count }, makeParticle);
  }

  function triangle(x, y, s, rot) {
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const a = rot + i * (Math.PI * 2 / 3);
      const px = x + Math.cos(a) * s, py = y + Math.sin(a) * s;
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.closePath();
  }

  let t = 0;
  function frame() {
    ctx.clearRect(0, 0, W, H);
    const scroll = window.scrollY;
    t++;
    for (const p of particles) {
      if (!reduceMotion) {
        p.x += p.vx / W; p.y += p.vy / H; p.rot += p.spin;
        if (p.x < -0.02) p.x = 1.02; if (p.x > 1.02) p.x = -0.02;
        if (p.y < -0.02) p.y = 1.02; if (p.y > 1.02) p.y = -0.02;
      }
      // parallax: deeper particles trail the scroll more slowly
      const y = ((p.y * H - scroll * p.depth) % (H + 40) + H + 40) % (H + 40) - 20;
      const x = p.x * W;
      const alpha = reduceMotion ? p.alphaBase
        : p.alphaBase * (0.7 + 0.3 * Math.sin(t * p.twinkle * 60 + p.phase));
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1.2;
      triangle(x, y, p.size, p.rot);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  if (reduceMotion) {
    resize(); frame();                      // static field, redraw on scroll only
    window.addEventListener('scroll', frame, { passive: true });
  } else {
    resize(); requestAnimationFrame(frame);
  }
})();
