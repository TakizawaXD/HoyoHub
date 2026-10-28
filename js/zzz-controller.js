/**
 * Controlador de la Página Dedicada de Zenless Zone Zero (zzz.html)
 */
import { CLAN_CONFIG } from './config.js';
import { initEffects } from './effects.js';
import { fetchGameNews, renderNewsCards } from './news-api.js';
import { HOYO_CODES, HOYO_BANNERS } from './api.js';
import { copyToClipboard } from './hoyo-hub.js';
import { openBuildModal } from './roster.js';
import { initBuildsModal } from './builds-api.js';
import { initUpdatesCarousel, ZZZ_CAROUSEL_DATA } from './carousel.js';
import { initVideosSection } from './videos-api.js';
import { getIcon } from './icons.js';

let zzzPosts = [];
let activeNewsFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initZzzPage();
});

async function initZzzPage() {
  initEffects();
  initBuildsModal();
  initUpdatesCarousel('zzz-carousel-root', ZZZ_CAROUSEL_DATA);
  initVideosSection('zzz-videos-root', { game: 'zzz' });
  renderZzzCodes();
  renderZzzChannels();
  renderZzzMembers();

  await loadZzzLiveNews();
  setupNewsFilterButtons();
  setupRefreshButton();
}

/**
 * Carga noticias y banners de Zenless Zone Zero desde la API HoYoPlay
 */
async function loadZzzLiveNews() {
  const newsContainer = document.getElementById('zzz-news-grid');
  const bannersContainer = document.getElementById('zzz-banners-container');
  const statusEl = document.getElementById('zzz-api-status');

  try {
    const data = await fetchGameNews('zzz');
    zzzPosts = data.posts || [];

    // Renderizar banners oficiales
    if (bannersContainer && data.banners?.length > 0) {
      bannersContainer.innerHTML = data.banners.slice(0, 3).map(b => `
        <a href="${b.link}" target="_blank" rel="noopener" class="promo-banner-card" title="${b.title}" style="border-color: rgba(232, 83, 205, 0.4);">
          <img src="${b.image}" alt="${b.title}" loading="lazy" />
          <div class="promo-banner-overlay">
            <span class="promo-banner-title" style="color: #ffffff;">
              ${getIcon('zzz', 'clst-icon-sm')}
              <span>${b.title}</span>
              ${getIcon('external', 'clst-icon-sm')}
            </span>
          </div>
        </a>
      `).join('');
    }

    filterAndRender(activeNewsFilter);

    if (statusEl) {
      statusEl.textContent = data.isLive ? '● En Vivo (HoYoPlay API)' : '● Caché Verificado';
      statusEl.style.color = data.isLive ? 'var(--color-anemo)' : 'var(--gold-primary)';
    }
  } catch (err) {
    console.warn("Fallo cargando noticias de ZZZ:", err);
    if (newsContainer) {
      newsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
          <p>Se produjo una demora conectando con los servidores de HoYoverse. Mostrando avisos disponibles.</p>
        </div>
      `;
    }
  }
}

function setupNewsFilterButtons() {
  const buttons = document.querySelectorAll('.news-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeNewsFilter = btn.getAttribute('data-filter') || 'all';
      filterAndRender(activeNewsFilter);
    });
  });
}

function filterAndRender(filterKey) {
  const container = document.getElementById('zzz-news-grid');
  if (!container) return;

  let filtered = zzzPosts;
  if (filterKey === 'announce') {
    filtered = zzzPosts.filter(p => p.type === 'POST_TYPE_ANNOUNCE');
  } else if (filterKey === 'event') {
    filtered = zzzPosts.filter(p => p.type === 'POST_TYPE_ACTIVITY');
  } else if (filterKey === 'info') {
    filtered = zzzPosts.filter(p => p.type === 'POST_TYPE_INFO');
  }

  renderNewsCards(container, filtered, { showGameBadge: false });
}

function setupRefreshButton() {
  const btn = document.getElementById('refresh-zzz-news');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    btn.disabled = true;
    const oldHtml = btn.innerHTML;
    btn.innerHTML = `${getIcon('refresh', 'clst-icon-sm')} <span>Sincronizando...</span>`;

    await loadZzzLiveNews();

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = `${getIcon('check', 'clst-icon-sm')} <span>Actualizado</span>`;
      setTimeout(() => { btn.innerHTML = oldHtml; }, 1500);
    }, 800);
  });
}

/**
 * Renderiza los códigos de canje de ZZZ
 */
function renderZzzCodes() {
  const container = document.getElementById('zzz-codes-grid');
  if (!container) return;

  const codes = HOYO_CODES.zzz || [];
  const redeemUrl = CLAN_CONFIG.redeemUrls.zzz;

  container.innerHTML = codes.map(item => `
    <div class="genshin-card code-card" style="border-color: rgba(232, 83, 205, 0.35);">
      <div class="code-header">
        <span class="code-badge-verified" style="background: rgba(232, 83, 205, 0.15); color: #e853cd; border-color: #e853cd;">
          ${getIcon('checkCircle', 'clst-icon-sm')} Verificado
        </span>
        <span style="font-size: 0.72rem; color: #ffc83d; font-weight: 600;">${item.status}</span>
      </div>

      <div class="code-string-box" style="border-color: rgba(232, 83, 205, 0.4);">
        <span style="color: #ffffff;">${item.code}</span>
        <button class="code-copy-inline-btn" data-code="${item.code}" title="Copiar código" style="background:none;border:none;color:#e853cd;cursor:pointer;display:flex;align-items:center;">
          ${getIcon('copy', 'clst-icon-sm')}
        </button>
      </div>

      <p class="code-rewards-text">
        ${getIcon('gem', 'clst-icon-sm clst-icon-zzz')} <strong>Recompensas:</strong> ${item.rewards}
      </p>

      <div class="code-actions">
        <button class="btn btn-primary btn-sm copy-code-btn" data-code="${item.code}" style="flex: 1; background: linear-gradient(135deg, #e853cd, #ffc83d); color: #070913;">
          ${getIcon('copy', 'clst-icon-sm')}
          <span>Copiar Código</span>
        </button>
        <a href="${redeemUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" title="Ir al canje oficial">
          <span>Canjear</span>
          ${getIcon('external', 'clst-icon-sm')}
        </a>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.copy-code-btn, .code-copy-inline-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      copyToClipboard(code, btn.classList.contains('copy-code-btn') ? btn : null);
    });
  });
}

/**
 * Renderiza los canales exclusivos de ZZZ con cuenta regresiva
 */
function renderZzzChannels() {
  const container = document.getElementById('zzz-channels-container');
  if (!container) return;

  const zzzBanners = HOYO_BANNERS.filter(b => b.game === 'zzz');

  container.innerHTML = zzzBanners.map((banner, idx) => `
    <div class="genshin-card banner-card" style="border-color: rgba(232, 83, 205, 0.4);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
        <div>
          <span style="font-size: 0.72rem; color: #e853cd; text-transform: uppercase; font-weight: 700;">
            ${banner.gameTitle} · ${banner.version}
          </span>
          <h3 style="font-size: 1.25rem; color: #ffffff; margin-top: 2px;">${banner.characterName}</h3>
        </div>
        <span class="banner-rarity-stars" style="color: #ffc83d;">★★★★★</span>
      </div>

      <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
        ${banner.bannerType} · Aumento de probabilidad: <em>${banner.rateUp4Stars.join(', ')}</em>
      </p>

      <div class="banner-timer-box" style="border-color: #e853cd;">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.2rem;">
          Tiempo restante del Canal:
        </span>
        <div class="countdown-digits" id="zzz-banner-timer-${idx}" style="color: #ffffff; text-shadow: 0 0 12px rgba(232, 83, 205, 0.6);">
          Calculando...
        </div>
      </div>
    </div>
  `).join('');

  function update() {
    const now = Date.now();
    zzzBanners.forEach((b, idx) => {
      const el = document.getElementById(`zzz-banner-timer-${idx}`);
      if (!el) return;

      const target = new Date(b.endDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        el.textContent = "¡Canal Finalizado!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      el.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
    });
  }
  update();
  setInterval(update, 1000);
}

/**
 * Renderiza los proxies destacados en ZZZ
 */
function renderZzzMembers() {
  const container = document.getElementById('zzz-members-grid');
  if (!container) return;

  const zzzMembers = CLAN_CONFIG.members.filter(m => m.game === 'zzz');

  container.innerHTML = zzzMembers.map(member => `
    <div class="genshin-card member-card" style="border-color: rgba(232, 83, 205, 0.35);">
      <div class="member-header">
        <div class="member-avatar-wrap">
          <img class="member-avatar" src="${member.avatar}" alt="${member.name}" loading="lazy" style="border-color: #e853cd;" onerror="this.src='assets/clan_emblem.jpg'" />
          <span class="member-ar-tag" style="background: linear-gradient(135deg, #e853cd, #ffc83d);">Nv. ${member.ar}</span>
        </div>
        <div class="member-meta">
          <h3>${member.name}</h3>
          <span class="member-role" style="color: #e853cd;">${member.role}</span>
        </div>
      </div>

      <div class="member-signature">
        "${member.signature}"
      </div>

      <div class="member-stats-row">
        <div>
          <span class="element-badge cryo">${member.favoriteChar}</span>
        </div>
        <div style="font-weight: 700; color: #ffc83d; display: flex; align-items: center; gap: 0.35rem;">
          ${getIcon('shield', 'clst-icon-sm clst-icon-zzz')}
          <span>${member.abyssScore}</span>
        </div>
      </div>

      <button class="btn btn-secondary btn-sm view-build-btn" data-id="${member.id}" style="width: 100%; margin-top: 0.25rem; border-color: rgba(232, 83, 205, 0.4);">
        ${getIcon('zzz', 'clst-icon-sm')}
        <span>Ver Build de Agente</span>
      </button>
    </div>
  `).join('');

  container.querySelectorAll('.view-build-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const m = CLAN_CONFIG.members.find(x => x.id === id);
      if (m) openBuildModal(m);
    });
  });

  const modal = document.getElementById('build-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (modal && closeBtn) {
    closeBtn.onclick = () => modal.classList.remove('open');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('open'); };
  }
}
