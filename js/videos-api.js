/**
 * CELESTIA ORDER - MÓDULO DE VIDEOS Y CINE HOYOVERSE (YOUTUBE API INTEGRATION)
 * Sincroniza tráilers oficiales, demos de personajes y cortos animados en 4K/1080p
 */

import { ICONS, getIcon } from './icons.js';
import { pauseBackgroundMusic, resumeBackgroundMusic } from './audio-player.js';

export const OFFICIAL_VIDEOS_DATA = [
  // ==========================================
  // GENSHIN IMPACT
  // ==========================================
  {
    id: "O2ATH__rtQo",
    game: "genshin",
    gameName: "Genshin Impact",
    category: "trailer",
    categoryName: "Tráiler Oficial",
    title: "Ignition Teaser: A Name Forged in Flames (Natlan 5.0)",
    subtitle: "El teaser oficial del Reino de la Noche y los guerreros saurios de Natlan.",
    duration: "4:05",
    accentColor: "#ff5a36",
    badge: "Versión 5.0 Natlan",
    publishedAt: "2024"
  },
  {
    id: "EN79SfbcvIE",
    game: "genshin",
    gameName: "Genshin Impact",
    category: "demo",
    categoryName: "Demo de Personaje",
    title: "Furina: All the World's a Stage (Demo Oficial)",
    subtitle: "La exhibición de combate y el número musical de la Arconte Hydro Furina.",
    duration: "3:24",
    accentColor: "#00c3ff",
    badge: "5★ Hydro · Fontaine",
    publishedAt: "2024"
  },
  {
    id: "tN5JACOEJFM",
    game: "genshin",
    gameName: "Genshin Impact",
    category: "short",
    categoryName: "Corto Animado",
    title: "The Song Burning in the Embers (Arlecchino)",
    subtitle: "El aclamado corto animado sobre el pasado de la Sota y la Casa de la Hoguera.",
    duration: "7:10",
    accentColor: "#ef4444",
    badge: "Corto Animado Oficial",
    publishedAt: "2024"
  },
  {
    id: "4oBpaBfbVmg",
    game: "genshin",
    gameName: "Genshin Impact",
    category: "demo",
    categoryName: "Demo de Personaje",
    title: "Zhongli: The Listener (Demo Legendaria)",
    subtitle: "La mítica demostración de combate del Arconte Geo con la música icónica de HoYo-MiX.",
    duration: "2:08",
    accentColor: "#f5b041",
    badge: "5★ Geo · Liyue",
    publishedAt: "HoYo Clásico"
  },
  {
    id: "mvrW4aKwAXw",
    game: "genshin",
    gameName: "Genshin Impact",
    category: "demo",
    categoryName: "Demo de Personaje",
    title: "Raiden Shogun: Nightmare (Demo Oficial)",
    subtitle: "El corte celestial de la espada Musou no Hitotachi de la Shogun Raiden.",
    duration: "2:32",
    accentColor: "#b366ff",
    badge: "5★ Electro · Inazuma",
    publishedAt: "HoYo Clásico"
  },

  // ==========================================
  // HONKAI: STAR RAIL
  // ==========================================
  {
    id: "pdiwGOicQVs",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    category: "short",
    categoryName: "Corto Animado",
    title: "The Embers of Glamoth (Firefly / Armadura SAM)",
    subtitle: "La caída de la República de Glamoth contra la Plaga y el origen de SAM.",
    duration: "5:32",
    accentColor: "#38bdf8",
    badge: "Corto Animado Oficial",
    publishedAt: "2024"
  },
  {
    id: "IQQPDPAvxTg",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    category: "demo",
    categoryName: "Tráiler Oficial",
    title: "Acheron Trailer — «Your Color»",
    subtitle: "La manifestación del corte de la Nihilidad y la danza de espadas de Acheron.",
    duration: "3:45",
    accentColor: "#ba8cff",
    badge: "5★ Nihilidad · Penacony",
    publishedAt: "2024"
  },
  {
    id: "8vXYSkgzCek",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    category: "short",
    categoryName: "Corto Animado",
    title: "A Flash (Dan Heng · Imbibitor Lunae)",
    subtitle: "El despertar del Dragón del Luofu y la memoria milenaria de los Vidyadhara.",
    duration: "4:18",
    accentColor: "#6978ff",
    badge: "Corto Animado Oficial",
    publishedAt: "Xianzhou"
  },
  {
    id: "X2K5p326W04",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    category: "music",
    categoryName: "HoYo-MiX Musical",
    title: "Robin — «Hope Is the Thing With Feathers»",
    subtitle: "Videoclip musical oficial interpretado por Chevy en el Gran Teatro de Penacony.",
    duration: "3:30",
    accentColor: "#ffd700",
    badge: "HoYo-MiX Original",
    publishedAt: "2024"
  },

  // ==========================================
  // ZENLESS ZONE ZERO
  // ==========================================
  {
    id: "KGOynaQoofc",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    category: "trailer",
    categoryName: "Tráiler Oficial",
    title: "Welcome to New Eridu (Lanzamiento Global)",
    subtitle: "La presentación oficial del universo urbano, las Cavidades y las facciones de Eridu.",
    duration: "3:15",
    accentColor: "#e853cd",
    badge: "Tráiler Global",
    publishedAt: "2024"
  },
  {
    id: "5WCl2mtL4eE",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    category: "demo",
    categoryName: "Demo de Agente",
    title: "Jane Doe: Deadly Interrogation (Demo Oficial)",
    subtitle: "Infiltración criminal, esquivas milimétricas y combate de Asalto físico.",
    duration: "3:48",
    accentColor: "#ff4d6d",
    badge: "Rango S · NEPS",
    publishedAt: "2024"
  },
  {
    id: "iOW8XhUce38",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    category: "demo",
    categoryName: "Demo de Agente",
    title: "Ellen Joe: Uniform, Shark Tail, Scissors",
    subtitle: "La cazadora de servicio de Victoria Housekeeping con tijeras de hielo.",
    duration: "3:10",
    accentColor: "#00f0ff",
    badge: "Rango S · Victoria",
    publishedAt: "2024"
  }
];

let activeVideoGameFilter = 'all';
let activeVideoCategoryFilter = 'all';

/**
 * Inicializa la sección de Cine y Videos Oficiales
 */
export function initVideosSection(containerId = 'videos-root', options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  activeVideoGameFilter = options.game || 'all';
  activeVideoCategoryFilter = 'all';

  renderVideosUI(container, options);
  attachVideoEvents(container, options);
  ensureCinemaModalExists();
}

/**
 * Renderiza la interfaz del hub de videos
 */
function renderVideosUI(container, options) {
  const isHub = !options.game || options.game === 'all';
  const filtered = getFilteredVideos(options.game);

  container.innerHTML = `
    <div class="clst-videos-wrapper">
      <div class="clst-videos-header">
        <div class="clst-videos-title-group">
          <span class="clst-videos-badge">
            ${getIcon('film', 'icon-gold')}
            <span>HoYo Cinema & YouTube API</span>
          </span>
          <h2 class="clst-videos-title">Cine Oficial HoYoverse: Tráilers & Cinemáticas</h2>
          <p class="clst-videos-subtitle">
            Transmisiones oficiales en <strong>1080p y 4K</strong> directamente desde los canales de YouTube de HoYoverse. Toca cualquier video para abrir el <strong>Modo Cine</strong> con sonido envolvente.
          </p>
        </div>

        <!-- Filtros de categoría -->
        <div class="clst-video-filters-row">
          ${isHub ? `
            <div class="video-filter-pills" id="video-game-pills">
              <button class="clst-pill active" data-vgame="all">Todos los Juegos</button>
              <button class="clst-pill" data-vgame="genshin">Genshin</button>
              <button class="clst-pill" data-vgame="hsr">Star Rail</button>
              <button class="clst-pill" data-vgame="zzz">ZZZ</button>
            </div>
          ` : ''}

          <div class="video-filter-pills" id="video-cat-pills">
            <button class="clst-pill active" data-vcat="all">Todos los Contenidos</button>
            <button class="clst-pill" data-vcat="trailer">Tráilers de Versión</button>
            <button class="clst-pill" data-vcat="demo">Demos de Personaje</button>
            <button class="clst-pill" data-vcat="short">Cortos Animados</button>
          </div>
        </div>
      </div>

      <!-- Cuadrícula de Tarjetas de Video -->
      <div id="videos-cards-grid" class="clst-videos-grid">
        ${renderVideoCardsHtml(filtered)}
      </div>
    </div>
  `;
}

/**
 * Obtiene los videos filtrados
 */
function getFilteredVideos(pageGame = null) {
  return OFFICIAL_VIDEOS_DATA.filter(v => {
    if (pageGame && pageGame !== 'all' && v.game !== pageGame) return false;
    if (!pageGame && activeVideoGameFilter !== 'all' && v.game !== activeVideoGameFilter) return false;
    if (activeVideoCategoryFilter !== 'all' && v.category !== activeVideoCategoryFilter) return false;
    return true;
  });
}

/**
 * Genera el HTML de las tarjetas de video
 */
function renderVideoCardsHtml(videos) {
  if (videos.length === 0) {
    return `
      <div class="clst-videos-empty">
        <p>No se encontraron videos para esta categoría.</p>
      </div>
    `;
  }

  return videos.map(v => `
    <article class="clst-video-card" data-video-id="${v.id}" data-video-title="${v.title}" data-video-game="${v.game}" style="--v-accent: ${v.accentColor}">
      <div class="video-thumb-wrap">
        <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" 
             alt="${v.title}" 
             class="video-thumb-img" 
             loading="lazy" />
        <div class="video-thumb-overlay"></div>
        <div class="video-play-btn" title="Reproducir en Modo Cine">
          ${getIcon('play', 'play-icon')}
        </div>
        <span class="video-duration-badge">${v.duration}</span>
        <span class="video-game-badge ${v.game}">${v.gameName}</span>
      </div>

      <div class="video-card-info">
        <div class="video-category-tag" style="color: ${v.accentColor}">
          <span>${v.categoryName}</span>
          <span class="dot-separator">•</span>
          <span>${v.badge}</span>
        </div>
        <h3 class="video-title">${v.title}</h3>
        <p class="video-subtitle">${v.subtitle}</p>
      </div>
    </article>
  `).join('');
}

/**
 * Vincula los eventos de clic y filtrado
 */
function attachVideoEvents(container, options) {
  // Filtros de juego
  const gamePills = container.querySelectorAll('[data-vgame]');
  gamePills.forEach(pill => {
    pill.addEventListener('click', () => {
      gamePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeVideoGameFilter = pill.getAttribute('data-vgame');
      refreshVideosGrid(container, options);
    });
  });

  // Filtros de categoría
  const catPills = container.querySelectorAll('[data-vcat]');
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeVideoCategoryFilter = pill.getAttribute('data-vcat');
      refreshVideosGrid(container, options);
    });
  });

  bindVideoCardClicks(container);
}

function refreshVideosGrid(container, options) {
  const grid = container.querySelector('#videos-cards-grid');
  if (!grid) return;
  const filtered = getFilteredVideos(options.game);
  grid.innerHTML = renderVideoCardsHtml(filtered);
  bindVideoCardClicks(container);
}

function bindVideoCardClicks(container) {
  const cards = container.querySelectorAll('.clst-video-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const vidId = card.getAttribute('data-video-id');
      const title = card.getAttribute('data-video-title');
      const game = card.getAttribute('data-video-game');
      if (vidId) {
        openCinemaTheater(vidId, title, game);
      }
    });
  });
}

/**
 * Asegura la existencia del modal de cine
 */
function ensureCinemaModalExists() {
  if (document.getElementById('clst-cinema-modal')) return;

  const modalHtml = `
    <div id="clst-cinema-modal" class="clst-cinema-backdrop" style="display:none;" aria-hidden="true" role="dialog">
      <div class="clst-cinema-window">
        <div class="cinema-top-bar">
          <div class="cinema-header-info">
            <span class="cinema-live-indicator"></span>
            <span id="cinema-video-title" class="cinema-title">Reproductor HoYo Cinema</span>
          </div>
          <button id="cinema-close-btn" class="cinema-close-btn" aria-label="Cerrar reproductor">
            ${getIcon('close', 'icon-md')}
          </button>
        </div>
        <div class="cinema-player-box">
          <div id="cinema-iframe-container" class="cinema-iframe-wrapper">
            <!-- Iframe inyectado dinámicamente -->
          </div>
        </div>
        <div class="cinema-bottom-bar">
          <span class="cinema-tip">
            ${getIcon('info', 'icon-xs')}
            <span>La música de fondo se ha silenciado automáticamente mientras disfrutas del video.</span>
          </span>
          <a id="cinema-youtube-external-link" href="#" target="_blank" rel="noopener" class="cinema-yt-btn">
            ${getIcon('external', 'icon-xs')}
            <span>Abrir en YouTube Oficial</span>
          </a>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const backdrop = document.getElementById('clst-cinema-modal');
  const closeBtn = document.getElementById('cinema-close-btn');

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeCinemaTheater();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCinemaTheater);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop && backdrop.style.display !== 'none') {
      closeCinemaTheater();
    }
  });
}

/**
 * Abre el reproductor de cine en pantalla completa
 */
export function openCinemaTheater(videoId, title = '', game = 'genshin') {
  ensureCinemaModalExists();
  const backdrop = document.getElementById('clst-cinema-modal');
  const iframeContainer = document.getElementById('cinema-iframe-container');
  const titleEl = document.getElementById('cinema-video-title');
  const ytLink = document.getElementById('cinema-youtube-external-link');

  if (!backdrop || !iframeContainer) return;

  if (titleEl) titleEl.textContent = title || 'Reproductor Oficial HoYoverse';
  if (ytLink) ytLink.href = `https://www.youtube.com/watch?v=${videoId}`;

  // Pausar la música de fondo para no solapar audios
  try {
    pauseBackgroundMusic();
  } catch (_) {}

  // Inyectar el reproductor con iframe oficial de YouTube seguro
  iframeContainer.innerHTML = `
    <iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1" 
            title="${title}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen 
            class="cinema-active-iframe">
    </iframe>
  `;

  backdrop.style.display = 'flex';
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el reproductor de cine
 */
export function closeCinemaTheater() {
  const backdrop = document.getElementById('clst-cinema-modal');
  const iframeContainer = document.getElementById('cinema-iframe-container');

  if (iframeContainer) {
    iframeContainer.innerHTML = ''; // Detener video inmediatamente
  }

  if (backdrop) {
    backdrop.style.display = 'none';
    backdrop.setAttribute('aria-hidden', 'true');
  }

  document.body.style.overflow = '';

  // Reanudar suavemente la música de fondo
  try {
    resumeBackgroundMusic();
  } catch (_) {}
}

// Exponer globalmente
if (typeof window !== 'undefined') {
  window.initVideosSection = initVideosSection;
  window.openCinemaTheater = openCinemaTheater;
  window.closeCinemaTheater = closeCinemaTheater;
}
