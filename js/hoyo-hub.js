/**
 * Módulo HoYoverse Multi-Hub: Códigos de regalo, Banners y Cuentas regresivas
 */
import { HOYO_CODES, HOYO_BANNERS } from './api.js';
import { CLAN_CONFIG } from './config.js';
import { getIcon } from './icons.js';

let activeGame = 'genshin';
let countdownInterval = null;

export function initHoyoHub() {
  setupGameTabs();
  renderCodes(activeGame);
  renderBanners();
  startBannerCountdown();
  startServerResetTimer();
}

/**
 * Pestañas para cambiar entre Genshin, ZZZ y Star Rail
 */
function setupGameTabs() {
  const tabs = document.querySelectorAll('.game-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeGame = tab.getAttribute('data-game');
      renderCodes(activeGame);
    });
  });
}

/**
 * Renderiza los códigos promocionales del juego seleccionado
 */
export function renderCodes(gameKey) {
  const container = document.getElementById('hoyo-codes-container');
  if (!container) return;

  const codes = HOYO_CODES[gameKey] || [];
  const redeemUrl = CLAN_CONFIG.redeemUrls[gameKey] || CLAN_CONFIG.redeemUrls.genshin;

  container.innerHTML = codes.map(item => {
    return `
      <div class="genshin-card code-card">
        <div class="code-header">
          <span class="code-badge-verified">
            ${getIcon('checkCircle', 'clst-icon-sm')} Verificado
          </span>
          <span style="font-size: 0.72rem; color: var(--gold-primary); font-weight: 600;">${item.status}</span>
        </div>

        <div class="code-string-box">
          <span>${item.code}</span>
          <button class="code-copy-inline-btn" data-code="${item.code}" title="Copiar código al portapapeles" style="background: none; border: none; color: var(--gold-primary); cursor: pointer; display: flex; align-items: center;">
            ${getIcon('copy', 'clst-icon-sm')}
          </button>
        </div>

        <p class="code-rewards-text">
          ${getIcon('gem', 'clst-icon-sm clst-icon-gem')} <strong>Recompensas:</strong> ${item.rewards}
        </p>

        <div class="code-actions">
          <button class="btn btn-primary btn-sm copy-code-btn" data-code="${item.code}" style="flex: 1;">
            ${getIcon('copy', 'clst-icon-sm')}
            <span>Copiar Código</span>
          </button>
          <a href="${redeemUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" title="Ir al canje oficial de HoYoverse" style="flex-shrink: 0;">
            <span>Canjear</span>
            ${getIcon('external', 'clst-icon-sm')}
          </a>
        </div>
      </div>
    `;
  }).join('');

  // Eventos para copiar código
  container.querySelectorAll('.copy-code-btn, .code-copy-inline-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      copyToClipboard(code, btn.classList.contains('copy-code-btn') ? btn : null);
    });
  });
}

/**
 * Copia un código al portapapeles y ofrece retroalimentación táctil/visual
 */
export async function copyToClipboard(text, btnElement) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback tradicional
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

  // Vibración háptica en teléfonos si está disponible
  if (navigator.vibrate) {
    try { navigator.vibrate(45); } catch {}
  }

  if (btnElement) {
    const originalContent = btnElement.innerHTML;
    btnElement.innerHTML = `${getIcon('check', 'clst-icon-sm')} <span>¡Copiado!</span>`;
    btnElement.style.background = 'var(--color-anemo)';
    btnElement.style.color = '#0b0e1a';

    setTimeout(() => {
      btnElement.innerHTML = originalContent;
      btnElement.style.background = '';
      btnElement.style.color = '';
    }, 2000);
  }

  showToast(`¡Código ${text} copiado al portapapeles!`);
}

/**
 * Muestra notificación flotante Toast
 */
export function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `${getIcon('sparkles', 'clst-icon-sm clst-icon-gold')} <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/**
 * Renderiza los banners y sus contadores
 */
function renderBanners() {
  const container = document.getElementById('hoyo-banners-container');
  if (!container) return;

  container.innerHTML = HOYO_BANNERS.map((banner, idx) => {
    return `
      <div class="genshin-card banner-card" data-banner-idx="${idx}">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
          <div>
            <span style="font-size: 0.72rem; color: var(--gold-primary); text-transform: uppercase; font-weight: 700;">
              ${banner.gameTitle} · ${banner.version}
            </span>
            <h3 style="font-size: 1.25rem; color: var(--gold-light); margin-top: 2px;">${banner.characterName}</h3>
          </div>
          <span class="banner-rarity-stars">★★★★★</span>
        </div>

        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
          ${banner.bannerType} · Aumento de probabilidad: <em>${banner.rateUp4Stars.join(', ')}</em>
        </p>

        <div class="banner-timer-box">
          <span style="display: block; font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem;">
            Tiempo restante del Evento:
          </span>
          <div class="countdown-digits" id="banner-timer-${idx}">
            Calculando...
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Inicia el temporizador de banners por segundo
 */
function startBannerCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);

  function updateTimers() {
    const now = new Date().getTime();

    HOYO_BANNERS.forEach((banner, idx) => {
      const el = document.getElementById(`banner-timer-${idx}`);
      if (!el) return;

      const target = new Date(banner.endDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        el.textContent = "¡Banner Finalizado!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      el.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
  }

  updateTimers();
  countdownInterval = setInterval(updateTimers, 1000);
}

/**
 * Temporizador de reinicio diario del servidor de Teyvat (04:00 AM)
 */
function startServerResetTimer() {
  const el = document.getElementById('server-reset-timer');
  if (!el) return;

  function updateReset() {
    const now = new Date();
    const resetTime = new Date();
    resetTime.setHours(4, 0, 0, 0);

    if (now >= resetTime) {
      resetTime.setDate(resetTime.getDate() + 1);
    }

    const diff = resetTime.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    el.textContent = `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
  }

  updateReset();
  setInterval(updateReset, 1000);
}
