/**
 * Efectos visuales de fondo (Partículas celestiales, estrellas fugaces) y música oficial de HoYoverse
 */
import { getIcon } from './icons.js';
import { initHoYoMusic, playCelestialChime as playPlayerChime } from './audio-player.js';

export function initEffects() {
  initStarryCanvas();
  initClickSparkles();
  initHoYoMusic();
}

/**
 * Generador de partículas de polvo estelar, constelaciones y estrellas fugaces en Canvas
 */
function initStarryCanvas() {
  const canvas = document.getElementById('celestial-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const starsCount = Math.floor(Math.min(width, 1400) / 18);
  const stars = [];
  const shootingStars = [];

  const colors = [
    'rgba(236, 209, 157, 0.8)', // Gold
    'rgba(105, 224, 246, 0.8)', // Cyan Primogem
    'rgba(186, 140, 255, 0.7)', // Purple Primogem
    'rgba(255, 255, 255, 0.9)'  // White star
  ];

  for (let i = 0; i < starsCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      pulse: Math.random() * Math.PI
    });
  }

  // Generador de estrellas fugaces (Deseos de Teyvat)
  function maybeSpawnShootingStar() {
    if (shootingStars.length < 2 && Math.random() < 0.012) {
      const isGold = Math.random() < 0.35;
      shootingStars.push({
        x: Math.random() * (width * 0.8),
        y: Math.random() * (height * 0.4),
        len: Math.random() * 80 + 60,
        speed: Math.random() * 6 + 7,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        opacity: 1,
        color: isGold ? '#ecd19d' : '#69e0f6'
      });
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Renderizar estrellas y constelaciones
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.x += s.vx;
      s.y += s.vy;
      s.pulse += 0.025;

      if (s.x < 0) s.x = width;
      if (s.x > width) s.x = 0;
      if (s.y < 0) s.y = height;
      if (s.y > height) s.y = 0;

      const alpha = 0.4 + Math.sin(s.pulse) * 0.35;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color.replace('0.8', alpha.toFixed(2)).replace('0.7', alpha.toFixed(2));
      ctx.fill();

      // Conectar estrellas cercanas sutilmente
      for (let j = i + 1; j < stars.length; j++) {
        const s2 = stars[j];
        const dist = Math.hypot(s.x - s2.x, s.y - s2.y);
        if (dist < 75) {
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s2.x, s2.y);
          ctx.strokeStyle = `rgba(236, 209, 157, ${(0.15 * (1 - dist / 75)).toFixed(3)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Renderizar estrellas fugaces
    maybeSpawnShootingStar();
    for (let k = shootingStars.length - 1; k >= 0; k--) {
      const ss = shootingStars[k];
      const tailX = ss.x - Math.cos(ss.angle) * ss.len;
      const tailY = ss.y - Math.sin(ss.angle) * ss.len;

      const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      grad.addColorStop(1, ss.color);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(ss.x, ss.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Cabeza brillante
      ctx.beginPath();
      ctx.arc(ss.x, ss.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.opacity -= 0.015;

      if (ss.opacity <= 0 || ss.x > width + 100 || ss.y > height + 100) {
        shootingStars.splice(k, 1);
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/**
 * Efecto de micro-destellos interactivos al hacer clic en cualquier parte de la UI
 */
function initClickSparkles() {
  document.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const count = 5;
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'click-sparkle-particle';
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 26 + 14;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;

      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.setProperty('--dx', `${dx}px`);
      sparkle.style.setProperty('--dy', `${dy}px`);

      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 600);
    }
  });
}

/**
 * Campana celestial con armónicos estilo Genshin
 */
export function playCelestialChime(freq = 587.33, duration = 0.2) {
  playPlayerChime(freq, duration);
}
