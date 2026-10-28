/**
 * Controlador de la Página Dedicada de Genshin Impact (genshin.html)
 */
import { CLAN_CONFIG } from './config.js';
import { initEffects } from './effects.js';
import { fetchGameNews, renderNewsCards } from './news-api.js';
import { initFarming } from './farming.js';
import { HOYO_CODES } from './api.js';
import { copyToClipboard } from './hoyo-hub.js';
import { fetchGenshinUID, HOYO_BANNERS } from './api.js';
import { openBuildModal } from './roster.js';
import { initBuildsModal } from './builds-api.js';
import { initUpdatesCarousel, GENSHIN_CAROUSEL_DATA } from './carousel.js';
import { initVideosSection } from './videos-api.js';
import { getIcon } from './icons.js';

let genshinPosts = [];
let activeNewsFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initGenshinPage();
});

async function initGenshinPage() {
  initEffects();
  initBuildsModal();
  initUpdatesCarousel('genshin-carousel-root', GENSHIN_CAROUSEL_DATA);
  initVideosSection('genshin-videos-root', { game: 'genshin' });
  initFarming();
  renderGenshinCodes();
  renderGenshinBanners();
  renderGenshinMembers();
  setupUidSearch();
  setupServerReset();

  await loadGenshinLiveNews();
  setupNewsFilterButtons();
  setupRefreshButton();
}

/**
 * Carga noticias y banners oficiales de Genshin Impact desde la API HoYoPlay
 */
async function loadGenshinLiveNews() {
  const newsContainer = document.getElementById('genshin-news-grid');
  const bannersContainer = document.getElementById('genshin-banners-container');
  const statusEl = document.getElementById('genshin-api-status');

  try {
    const data = await fetchGameNews('genshin');
    genshinPosts = data.posts || [];

    // Renderizar banners oficiales
    if (bannersContainer && data.banners?.length > 0) {
      bannersContainer.innerHTML = data.banners.slice(0, 3).map(b => `
        <a href="${b.link}" target="_blank" rel="noopener" class="promo-banner-card" title="${b.title}">
          <img src="${b.image}" alt="${b.title}" loading="lazy" />
          <div class="promo-banner-overlay">
            <span class="promo-banner-title">
              ${getIcon('sparkles', 'clst-icon-sm clst-icon-gold')}
              <span>${b.title}</span>
              ${getIcon('external', 'clst-icon-sm')}
            </span>
          </div>
        </a>
      `).join('');
    }

    // Renderizar noticias filtradas
    filterAndRender(activeNewsFilter);

    if (statusEl) {
      statusEl.textContent = data.isLive ? '● En Vivo (HoYoPlay API)' : '● Caché Verificado';
      statusEl.style.color = data.isLive ? 'var(--color-anemo)' : 'var(--gold-primary)';
    }
  } catch (err) {
    console.warn("Fallo cargando noticias de Genshin:", err);
    if (newsContainer) {
      newsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
          <p>No se pudo sincronizar en vivo con la API. Mostrando avisos disponibles.</p>
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
  const container = document.getElementById('genshin-news-grid');
  if (!container) return;

  let filtered = genshinPosts;
  if (filterKey === 'event') {
    filtered = genshinPosts.filter(p => p.type === 'POST_TYPE_ACTIVITY');
  } else if (filterKey === 'announce') {
    filtered = genshinPosts.filter(p => p.type === 'POST_TYPE_ANNOUNCE');
  } else if (filterKey === 'info') {
    filtered = genshinPosts.filter(p => p.type === 'POST_TYPE_INFO');
  }

  renderNewsCards(container, filtered, { showGameBadge: false });
}

function setupRefreshButton() {
  const btn = document.getElementById('refresh-genshin-news');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    btn.disabled = true;
    const oldHtml = btn.innerHTML;
    btn.innerHTML = `${getIcon('refresh', 'clst-icon-sm')} <span>Sincronizando...</span>`;

    await loadGenshinLiveNews();

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = `${getIcon('check', 'clst-icon-sm')} <span>Actualizado</span>`;
      setTimeout(() => { btn.innerHTML = oldHtml; }, 1500);
    }, 800);
  });
}

/**
 * Renderiza los códigos de canje de Genshin
 */
function renderGenshinCodes() {
  const container = document.getElementById('genshin-codes-grid');
  if (!container) return;

  const codes = HOYO_CODES.genshin || [];
  const redeemUrl = CLAN_CONFIG.redeemUrls.genshin;

  container.innerHTML = codes.map(item => `
    <div class="genshin-card code-card">
      <div class="code-header">
        <span class="code-badge-verified">
          ${getIcon('checkCircle', 'clst-icon-sm')} Verificado
        </span>
        <span style="font-size: 0.72rem; color: var(--gold-primary); font-weight: 600;">${item.status}</span>
      </div>

      <div class="code-string-box">
        <span>${item.code}</span>
        <button class="code-copy-inline-btn" data-code="${item.code}" title="Copiar código" style="background:none;border:none;color:var(--gold-primary);cursor:pointer;display:flex;align-items:center;">
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
 * Renderiza banners de Genshin y contadores
 */
function renderGenshinBanners() {
  const container = document.getElementById('hoyo-banners-container');
  if (!container) return;

  const genshinBanners = HOYO_BANNERS.filter(b => b.game === 'genshin');

  container.innerHTML = genshinBanners.map((banner, idx) => `
    <div class="genshin-card banner-card">
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
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.2rem;">
          Tiempo restante del Evento:
        </span>
        <div class="countdown-digits" id="genshin-banner-timer-${idx}">
          Calculando...
        </div>
      </div>
    </div>
  `).join('');

  startGenshinBannerCountdown(genshinBanners);
}

function startGenshinBannerCountdown(banners) {
  function update() {
    const now = new Date().getTime();
    banners.forEach((b, idx) => {
      const el = document.getElementById(`genshin-banner-timer-${idx}`);
      if (!el) return;

      const target = new Date(b.endDate).getTime();
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
  update();
  setInterval(update, 1000);
}

/**
 * Renderiza los miembros especialistas en Genshin
 */
function renderGenshinMembers() {
  const container = document.getElementById('genshin-members-grid');
  if (!container) return;

  const genshinMembers = CLAN_CONFIG.members.filter(m => m.game === 'genshin');

  container.innerHTML = genshinMembers.map(member => `
    <div class="genshin-card member-card">
      <div class="member-header">
        <div class="member-avatar-wrap">
          <img class="member-avatar" src="${member.avatar}" alt="${member.name}" loading="lazy" onerror="this.src='assets/clan_emblem.jpg'" />
          <span class="member-ar-tag">AR ${member.ar}</span>
        </div>
        <div class="member-meta">
          <h3>${member.name}</h3>
          <span class="member-role">${member.role}</span>
        </div>
      </div>

      <div class="member-signature">
        "${member.signature}"
      </div>

      <div class="member-stats-row">
        <div>
          <span class="element-badge ${member.element}">${member.favoriteChar}</span>
        </div>
        <div style="font-weight: 700; color: var(--gold-light); display: flex; align-items: center; gap: 0.35rem;">
          ${getIcon('shield', 'clst-icon-sm clst-icon-gold')}
          <span>${member.abyssScore}</span>
        </div>
      </div>

      <button class="btn btn-secondary btn-sm view-build-btn" data-id="${member.id}" style="width: 100%; margin-top: 0.25rem;">
        ${getIcon('swords', 'clst-icon-sm')}
        <span>Ver Build Destacada</span>
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

  // Listener para cerrar modal
  const modal = document.getElementById('build-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (modal && closeBtn) {
    closeBtn.onclick = () => modal.classList.remove('open');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('open'); };
  }
}

/**
 * Buscador de UID en vivo
 */
function setupUidSearch() {
  const form = document.getElementById('uid-search-form');
  const input = document.getElementById('uid-search-input');
  const container = document.getElementById('uid-live-result');

  if (!form || !input || !container) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const uid = input.value.trim();
    if (!uid) return;

    container.innerHTML = `
      <div style="text-align: center; padding: 1.5rem; color: var(--gold-primary);">
        <div style="animation: spin 1s linear infinite; display: inline-block;">${getIcon('refresh', 'clst-icon-lg clst-icon-gold')}</div>
        <p style="margin-top: 0.5rem; font-weight: 600;">Sincronizando con Enka.Network (UID: ${uid})...</p>
      </div>
    `;
    container.style.display = 'block';

    try {
      const data = await fetchGenshinUID(uid);
      container.innerHTML = `
        <div class="genshin-card" style="border-color: var(--gold-primary); background: rgba(22, 31, 64, 0.95);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="font-size: 0.72rem; color: var(--gold-primary); font-weight: 700; display: flex; align-items: center; gap: 0.35rem;">
                ${data.isLive ? `${getIcon('satellite', 'clst-icon-sm')} Enka.Network en Vivo` : `${getIcon('checkCircle', 'clst-icon-sm')} Perfil Sincronizado`}
              </span>
              <h3 style="font-size: 1.25rem; color: var(--gold-light);">${data.nickname}</h3>
              <p style="font-size: 0.8rem; color: var(--text-secondary);">UID: ${data.uid} · AR ${data.level} · Nivel de Mundo ${data.worldLevel}</p>
            </div>
            <div style="text-align: right;">
              <span style="display: block; font-size: 0.75rem; color: var(--text-muted);">Abismo</span>
              <strong style="color: #ffc83d; font-size: 1.1rem; display: flex; align-items: center; gap: 0.3rem;">
                ${getIcon('swords', 'clst-icon-sm clst-icon-gold')} ${data.abyss}
              </strong>
            </div>
          </div>
          <p style="font-style: italic; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">"${data.signature}"</p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.8rem; color: var(--text-muted);">Logros: <strong>${data.achievements}</strong></span>
            <button class="btn btn-primary btn-sm" id="btn-inspect-enka">
              ${getIcon('search', 'clst-icon-sm')}
              <span>Ver Build Completa</span>
            </button>
          </div>
        </div>
      `;

      const inspectBtn = container.querySelector('#btn-inspect-enka');
      if (inspectBtn) {
        inspectBtn.onclick = () => {
          openBuildModal({
            name: data.nickname,
            role: "Viajero UID",
            ar: data.level,
            signature: data.signature,
            abyssScore: data.abyss,
            showcaseBuild: {
              character: data.featuredHero?.name || "Personaje Destacado",
              element: data.featuredHero?.element || "hydro",
              level: "90/90",
              constellation: "C1",
              weapon: data.featuredHero?.weapon || "Arma 5★",
              artifactSet: data.featuredHero?.set || "Set 4 piezas",
              hp: "38,500",
              atk: "1,850",
              critRate: data.featuredHero?.cr || "74.2%",
              critDmg: data.featuredHero?.cd || "218.4%",
              er: "165.0%"
            }
          });
        };
      }
    } catch (err) {
      container.innerHTML = `
        <div style="padding: 1rem; background: rgba(255, 104, 71, 0.15); border: 1px solid var(--color-pyro); border-radius: var(--radius-md); display: flex; align-items: center; gap: 0.5rem;">
          ${getIcon('info', 'clst-icon-pyro')} <strong>Aviso:</strong> ${err.message}
        </div>
      `;
    }
  });
}

function setupServerReset() {
  const el = document.getElementById('server-reset-timer');
  if (!el) return;

  function update() {
    const now = new Date();
    const reset = new Date();
    reset.setHours(4, 0, 0, 0);
    if (now >= reset) reset.setDate(reset.getDate() + 1);

    const diff = reset - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    el.textContent = `${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
  }
  update();
  setInterval(update, 1000);
}
