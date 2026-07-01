/* Home hero — lightweight animated starfield / drifting particles on <canvas>.
   Vanilla JS, no dependencies. Honours prefers-reduced-motion. */
(function () {
  var canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var stars = [];
  var w = 0, h = 0, raf = null;

  function resize() {
    var rect = canvas.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function seed() {
    var count = Math.round((w * h) / 9000); // density scales with area
    count = Math.max(40, Math.min(220, count));
    stars = [];
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        tw: Math.random() * Math.PI * 2,       // twinkle phase
        tws: Math.random() * 0.02 + 0.005      // twinkle speed
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // connective lines between nearby stars (constellation effect)
    for (var i = 0; i < stars.length; i++) {
      var a = stars[i];
      for (var j = i + 1; j < stars.length; j++) {
        var b = stars[j];
        var dx = a.x - b.x, dy = a.y - b.y;
        var dist = dx * dx + dy * dy;
        if (dist < 12000) {
          var alpha = (1 - dist / 12000) * 0.28;
          ctx.strokeStyle = "rgba(120,170,255," + alpha + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // stars
    for (var k = 0; k < stars.length; k++) {
      var s = stars[k];
      s.tw += s.tws;
      var flicker = 0.55 + Math.sin(s.tw) * 0.45;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(200,225,255," + flicker + ")";
      ctx.fill();

      s.x += s.vx; s.y += s.vy;
      if (s.x < 0) s.x = w; else if (s.x > w) s.x = 0;
      if (s.y < 0) s.y = h; else if (s.y > h) s.y = 0;
    }

    raf = requestAnimationFrame(draw);
  }

  function drawStatic() {
    // reduced-motion: paint a still field once
    ctx.clearRect(0, 0, w, h);
    for (var k = 0; k < stars.length; k++) {
      var s = stars[k];
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(200,225,255,0.8)";
      ctx.fill();
    }
  }

  resize();
  window.addEventListener("resize", function () {
    resize();
    if (reduce) drawStatic();
  });

  if (reduce) {
    drawStatic();
  } else {
    draw();
    // pause the animation when the tab is hidden to save CPU
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { if (raf) cancelAnimationFrame(raf); raf = null; }
      else if (!raf) draw();
    });
  }
})();
