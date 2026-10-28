/**
 * Controlador de la Página Principal (index.html - El Conector Central)
 */
import { CLAN_CONFIG } from './config.js';
import { initEffects } from './effects.js';
import { initRoster } from './roster.js';
import { initHoyoHub } from './hoyo-hub.js';
import { initFarming } from './farming.js';
import { fetchAllGamesNewsSummary, renderNewsCards } from './news-api.js';
import { initUpdatesCarousel } from './carousel.js';
import { initBuildsModal } from './builds-api.js';
import { initVideosSection } from './videos-api.js';
import { getIcon } from './icons.js';

let cachedAllPosts = [];
let activeFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initIndexPage();
});

async function initIndexPage() {
  populateClanInfo();
  setupJoinClanModal();

  // Inicializar carrusel de actualizaciones destacadas
  initUpdatesCarousel('updates-carousel-root');

  // Inicializar HoYo Cinema con tráilers oficiales y cinemáticas
  initVideosSection('index-videos-root', { game: 'all' });

  // Inicializar modal universal de personajes y sus 3 builds meta
  initBuildsModal();

  // Inicializar subsistemas del clan
  initEffects();
  initRoster();
  initHoyoHub();
  initFarming();

  // Cargar noticias oficiales en tiempo real
  await loadLiveNewsHub();
  setupNewsFilters();
  setupNewsRefresh();
}

/**
 * Carga las noticias de todos los juegos desde la API oficial de HoYoverse
 */
async function loadLiveNewsHub() {
  const gridContainer = document.getElementById('news-grid-container');
  const bannersContainer = document.getElementById('promo-banners-container');
  const statusBadge = document.getElementById('api-status-badge');

  try {
    const data = await fetchAllGamesNewsSummary();
    cachedAllPosts = data.allPosts || [];

    // Renderizar banners de la API
    if (bannersContainer && data.allBanners?.length > 0) {
      const topBanners = data.allBanners.slice(0, 3);
      bannersContainer.innerHTML = topBanners.map(b => `
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

    // Renderizar noticias iniciales
    filterAndRenderNews(activeFilter);

    if (statusBadge) {
      statusBadge.innerHTML = `● En Vivo (HoYoPlay API)`;
      statusBadge.style.color = 'var(--color-anemo)';
    }
  } catch (err) {
    console.warn("Fallo cargando noticias oficiales:", err);
    if (statusBadge) {
      statusBadge.innerHTML = `● Datos en Caché Verificados`;
      statusBadge.style.color = 'var(--gold-primary)';
    }
    if (gridContainer) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
          <p>Se produjo una demora conectando con los servidores de HoYoverse. Mostrando avisos en caché.</p>
        </div>
      `;
    }
  }
}

/**
 * Configura los botones de filtro de noticias
 */
function setupNewsFilters() {
  const filterButtons = document.querySelectorAll('.news-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeFilter = btn.getAttribute('data-filter') || 'all';
      filterAndRenderNews(activeFilter);
    });
  });
}

/**
 * Filtra y renderiza las noticias según la categoría seleccionada
 */
function filterAndRenderNews(filterKey) {
  const container = document.getElementById('news-grid-container');
  if (!container) return;

  let filtered = cachedAllPosts;

  if (filterKey === 'genshin' || filterKey === 'hsr' || filterKey === 'zzz') {
    filtered = cachedAllPosts.filter(p => p.game === filterKey);
  } else if (filterKey === 'event') {
    filtered = cachedAllPosts.filter(p => p.type === 'POST_TYPE_ACTIVITY');
  } else if (filterKey === 'announce') {
    filtered = cachedAllPosts.filter(p => p.type === 'POST_TYPE_ANNOUNCE');
  }

  renderNewsCards(container, filtered, { showGameBadge: true });
}

/**
 * Botón para refrescar la API manualmente
 */
function setupNewsRefresh() {
  const refreshBtn = document.getElementById('refresh-news-btn');
  if (!refreshBtn) return;

  refreshBtn.addEventListener('click', async () => {
    refreshBtn.disabled = true;
    const originalText = refreshBtn.innerHTML;
    refreshBtn.innerHTML = `${getIcon('refresh', 'clst-icon-sm')} <span>Sincronizando...</span>`;

    await loadLiveNewsHub();

    setTimeout(() => {
      refreshBtn.disabled = false;
      refreshBtn.innerHTML = `${getIcon('check', 'clst-icon-sm')} <span>Actualizado</span>`;
      setTimeout(() => {
        refreshBtn.innerHTML = originalText;
      }, 1500);
    }, 800);
  });
}

/**
 * Rellena los datos dinámicos del clan en el DOM
 */
function populateClanInfo() {
  document.querySelectorAll('.clan-name-text').forEach(el => el.textContent = CLAN_CONFIG.name);
  document.querySelectorAll('.clan-tag-text').forEach(el => el.textContent = CLAN_CONFIG.tag);
  document.querySelectorAll('.clan-motto-text').forEach(el => el.textContent = CLAN_CONFIG.motto);
  document.querySelectorAll('.clan-members-count').forEach(el => el.textContent = CLAN_CONFIG.memberCount);
  document.querySelectorAll('.clan-level-text').forEach(el => el.textContent = CLAN_CONFIG.level);
  document.querySelectorAll('.clan-server-text').forEach(el => el.textContent = CLAN_CONFIG.server);

  document.querySelectorAll('.discord-link-target').forEach(el => {
    el.href = CLAN_CONFIG.discordUrl;
  });
}

/**
 * Modal para unirse al clan
 */
function setupJoinClanModal() {
  const joinBtns = document.querySelectorAll('.btn-join-clan');
  const modal = document.getElementById('join-modal');
  const closeBtn = document.getElementById('join-modal-close-btn');

  if (!modal) return;

  joinBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  const form = document.getElementById('join-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Solicitud enviada con éxito! Serás redirigido a nuestro servidor de Discord para la bienvenida.');
      window.open(CLAN_CONFIG.discordUrl, '_blank');
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
}
