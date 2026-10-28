/**
 * EL GREMIO DEL VIAJERO - MÓDULO DE CATÁLOGO DE PERSONAJES, BUILDS Y GUÍA DE FARMEO
 * Proporciona el catálogo interactivo para Genshin Impact, Honkai: Star Rail y Zenless Zone Zero.
 */

import { CHARACTERS_CATALOG } from './character-catalog-data.js';
import { ICONS, getIcon } from './icons.js';

let activeCatalogGame = null;
let activeSearchQuery = '';
let activeRarityFilter = 'all';
let activeElementFilter = 'all';
let activeModalChar = null;
let activeModalTab = 'build'; // 'build' | 'farming'

/**
 * Obtiene el color de acento según el elemento
 */
function getElementColor(element) {
  const map = {
    'Pyro': '#ff5a36',
    'Fuego': '#ff5a36',
    'Hydro': '#00c3ff',
    'Anemo': '#3fe0a6',
    'Viento': '#3fe0a6',
    'Electro': '#b366ff',
    'Rayo': '#b366ff',
    'Eléctrico': '#b366ff',
    'Dendro': '#80e626',
    'Cryo': '#99e6ff',
    'Hielo': '#99e6ff',
    'Geo': '#f5b041',
    'Físico': '#cbd5e1',
    'Cuántico': '#8b5cf6',
    'Imaginario': '#facc15',
    'Éter': '#f43f5e'
  };
  return map[element] || '#d4af37';
}

/**
 * Renderiza los iconos de estrellas según la rareza
 */
function renderStars(rarity) {
  const starSvg = `<svg class="clst-icon star-icon" viewBox="0 0 24 24" fill="#ffd700" stroke="#b8860b" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  return Array(rarity).fill(starSvg).join('');
}

/**
 * Filtra los personajes según los criterios activos
 */
export function getFilteredCharacters(gameFilter = null) {
  return CHARACTERS_CATALOG.filter(c => {
    // Filtro por juego
    if (gameFilter && gameFilter !== 'all' && c.game !== gameFilter) return false;
    if (!gameFilter && activeCatalogGame && activeCatalogGame !== 'all' && c.game !== activeCatalogGame) return false;

    // Filtro por rareza
    if (activeRarityFilter !== 'all') {
      const targetRarity = parseInt(activeRarityFilter, 10);
      if (c.rarity !== targetRarity) return false;
    }

    // Filtro por elemento
    if (activeElementFilter !== 'all' && c.element.toLowerCase() !== activeElementFilter.toLowerCase()) {
      return false;
    }

    // Filtro por búsqueda
    if (activeSearchQuery.trim()) {
      const q = activeSearchQuery.toLowerCase();
      const matchName = c.name.toLowerCase().includes(q);
      const matchTitle = c.title.toLowerCase().includes(q);
      const matchElement = c.element.toLowerCase().includes(q);
      const matchRole = c.role.toLowerCase().includes(q);
      const matchWeapon = c.weaponType.toLowerCase().includes(q);
      if (!matchName && !matchTitle && !matchElement && !matchRole && !matchWeapon) return false;
    }

    return true;
  });
}

/**
 * Configuración de secciones de juego para el catálogo separado
 */
export const GAME_SECTIONS_CONFIG = [
  {
    id: 'genshin',
    name: 'Genshin Impact',
    badge: 'Teyvat Hub',
    subtitle: 'Mondstadt · Liyue · Inazuma · Sumeru · Fontaine · Natlan',
    icon: 'genshin',
    accentColor: '#d4af37',
    glowColor: 'rgba(212, 175, 55, 0.22)',
    portalUrl: 'genshin.html',
    portalName: 'Genshin'
  },
  {
    id: 'hsr',
    name: 'Honkai: Star Rail',
    badge: 'Expreso Astral',
    subtitle: 'Herta · Jarilo-VI · Luofu · Colonipenal · Amphoreus',
    icon: 'hsr',
    accentColor: '#6978ff',
    glowColor: 'rgba(105, 120, 255, 0.22)',
    portalUrl: 'hsr.html',
    portalName: 'Star Rail'
  },
  {
    id: 'zzz',
    name: 'Zenless Zone Zero',
    badge: 'Nueva Eridu',
    subtitle: 'Liebres Astutas · Belobog · Victoria Housekeeping · Sección 6 · Hijos de Calidón',
    icon: 'zzz',
    accentColor: '#e853cd',
    glowColor: 'rgba(232, 83, 205, 0.22)',
    portalUrl: 'zzz.html',
    portalName: 'ZZZ'
  }
];

/**
 * Filtra los personajes exclusivamente para un juego específico
 */
export function getFilteredCharactersForGame(gameKey) {
  return CHARACTERS_CATALOG.filter(c => {
    if (c.game !== gameKey) return false;

    // Filtro por rareza
    if (activeRarityFilter !== 'all') {
      const targetRarity = parseInt(activeRarityFilter, 10);
      if (c.rarity !== targetRarity) return false;
    }

    // Filtro por elemento
    if (activeElementFilter !== 'all' && c.element.toLowerCase() !== activeElementFilter.toLowerCase()) {
      return false;
    }

    // Filtro por búsqueda en vivo
    if (activeSearchQuery.trim()) {
      const q = activeSearchQuery.toLowerCase();
      const matchName = c.name.toLowerCase().includes(q);
      const matchTitle = c.title.toLowerCase().includes(q);
      const matchElement = c.element.toLowerCase().includes(q);
      const matchRole = c.role.toLowerCase().includes(q);
      const matchWeapon = c.weaponType.toLowerCase().includes(q);
      if (!matchName && !matchTitle && !matchElement && !matchRole && !matchWeapon) return false;
    }

    return true;
  });
}

/**
 * Inicializa el catálogo en un contenedor DOM
 */
export function initCharacterCatalog(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  activeCatalogGame = options.game || 'all'; // 'genshin' | 'hsr' | 'zzz' | 'all'
  activeRarityFilter = 'all';
  activeElementFilter = 'all';
  activeSearchQuery = '';

  renderCatalogStructure(container, options);
  attachCatalogEvents(container, options);
  updateCatalogGrid(container, options);
  ensureModalExists();
}

/**
 * Permite cambiar el juego activo de forma reactiva y sincronizada
 */
export function setCatalogActiveGame(gameKey, container = null, options = {}) {
  activeCatalogGame = gameKey || 'all';
  const targetContainer = container || document.getElementById('dedicated-catalog-root');

  if (targetContainer) {
    // Sincronizar botones de la barra de herramientas del catálogo
    const gamePills = targetContainer.querySelectorAll('[data-filter-game]');
    gamePills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-filter-game') === activeCatalogGame);
    });

    // Actualizar enlaces de salto rápido si estamos en Todos
    const quickNav = targetContainer.querySelector('#catalog-quick-nav');
    if (quickNav) {
      quickNav.style.display = (!activeCatalogGame || activeCatalogGame === 'all') ? 'flex' : 'none';
    }

    refreshElementPills(targetContainer);
    updateCatalogGrid(targetContainer, options);
  }

  // Sincronizar switchers externos en la cabecera si existen
  document.querySelectorAll('.catalog-game-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-game') === activeCatalogGame);
  });
}

/**
 * Construye el esqueleto del catálogo (buscador, barra de filtros, grid)
 */
function renderCatalogStructure(container, options) {
  const currentGame = activeCatalogGame || options.game || 'all';
  const elements = getUniqueElements(currentGame);

  container.innerHTML = `
    <div class="clst-catalog-wrapper">
      <!-- Encabezado de la sección -->
      <div class="clst-catalog-header">
        <div class="clst-catalog-title-group">
          <span class="clst-catalog-badge">
            ${getIcon('swords', 'icon-gold')}
            <span>Base de Datos Oficial</span>
          </span>
          <h2 class="clst-catalog-title">Catálogo de Personajes & Builds Óptimas</h2>
          <p class="clst-catalog-subtitle">
            Selecciona cualquier personaje para inspeccionar sus <strong>3 Builds Más Fuertes (Meta)</strong>, armas recomendadas y la <strong>Guía Completa de Farmeo</strong> con ubicaciones exactas.
          </p>
        </div>

        <!-- Buscador en tiempo real -->
        <div class="clst-catalog-search-wrap">
          <div class="clst-catalog-search-box">
            ${getIcon('search', 'search-icon')}
            <input type="text" 
                   id="catalog-search-input" 
                   class="catalog-search-input" 
                   placeholder="Buscar por personaje, elemento, arma o rol..."
                   autocomplete="off" />
            <button id="catalog-clear-search" class="catalog-clear-btn" style="display:none;" title="Limpiar búsqueda">
              ${getIcon('close', 'icon-sm')}
            </button>
          </div>
        </div>
      </div>

      <!-- Barra de Filtros interactiva -->
      <div class="clst-catalog-toolbar">
        <!-- Selector de Juego (Separados por Juego o Aislados) -->
        <div class="clst-filter-group game-switcher">
          <span class="clst-filter-label">Juego:</span>
          <div class="clst-filter-pills" id="catalog-game-pills">
            <button class="clst-pill ${(!currentGame || currentGame === 'all') ? 'active' : ''}" data-filter-game="all">
              ${getIcon('hub', 'icon-xs')}
              <span>Todos (Separados por Juego)</span>
            </button>
            <button class="clst-pill ${currentGame === 'genshin' ? 'active' : ''}" data-filter-game="genshin">
              ${getIcon('genshin', 'icon-xs')}
              <span>Genshin Impact</span>
            </button>
            <button class="clst-pill ${currentGame === 'hsr' ? 'active' : ''}" data-filter-game="hsr">
              ${getIcon('hsr', 'icon-xs')}
              <span>Honkai: Star Rail</span>
            </button>
            <button class="clst-pill ${currentGame === 'zzz' ? 'active' : ''}" data-filter-game="zzz">
              ${getIcon('zzz', 'icon-xs')}
              <span>Zenless Zone Zero</span>
            </button>
          </div>
        </div>

        <!-- Filtro de Rareza -->
        <div class="clst-filter-group">
          <span class="clst-filter-label">Rareza:</span>
          <div class="clst-filter-pills" id="catalog-rarity-pills">
            <button class="clst-pill active" data-filter-rarity="all">Todos</button>
            <button class="clst-pill pill-gold" data-filter-rarity="5">
              ${currentGame === 'zzz' ? 'Rango S (5★)' : '5 Estrellas (5★)'}
            </button>
            <button class="clst-pill pill-purple" data-filter-rarity="4">
              ${currentGame === 'zzz' ? 'Rango A (4★)' : '4 Estrellas (4★)'}
            </button>
          </div>
        </div>

        <!-- Filtro por Elemento -->
        <div class="clst-filter-group">
          <span class="clst-filter-label">Elemento:</span>
          <div class="clst-filter-pills clst-element-pills" id="catalog-element-pills">
            <button class="clst-pill active" data-filter-element="all">Todos</button>
            ${elements.map(el => `
              <button class="clst-pill pill-element" data-filter-element="${el}" style="--el-color: ${getElementColor(el)}">
                <span class="element-dot" style="background: ${getElementColor(el)}"></span>
                <span>${el}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Barra de Salto Rápido entre Secciones (Solo cuando se muestran todos) -->
      <div class="clst-catalog-quick-nav" id="catalog-quick-nav" style="${(!currentGame || currentGame === 'all') ? 'display:flex;' : 'display:none;'}">
        <span class="clst-quick-nav-label">Saltar a sección:</span>
        <a href="#section-genshin" class="clst-jump-anchor-pill">
          ${getIcon('genshin', 'icon-xs')}
          <span>Genshin Impact</span>
        </a>
        <a href="#section-hsr" class="clst-jump-anchor-pill">
          ${getIcon('hsr', 'icon-xs')}
          <span>Honkai: Star Rail</span>
        </a>
        <a href="#section-zzz" class="clst-jump-anchor-pill">
          ${getIcon('zzz', 'icon-xs')}
          <span>Zenless Zone Zero</span>
        </a>
      </div>

      <!-- Contador de resultados -->
      <div class="clst-catalog-status">
        <span id="catalog-counter-text" class="catalog-counter-text">Cargando personajes...</span>
      </div>

      <!-- Contenedor de Secciones Separadas por Juego -->
      <div id="catalog-cards-grid" class="clst-catalog-sections-wrap">
        <!-- Renderizado dinámicamente con secciones separadas para cada juego -->
      </div>
    </div>
  `;
}

/**
 * Obtiene los elementos disponibles según el juego
 */
function getUniqueElements(game) {
  const chars = game && game !== 'all' 
    ? CHARACTERS_CATALOG.filter(c => c.game === game)
    : CHARACTERS_CATALOG;
  const set = new Set();
  chars.forEach(c => set.add(c.element));
  return Array.from(set);
}

/**
 * Vincula los eventos de búsqueda y filtros
 */
function attachCatalogEvents(container, options) {
  const searchInput = container.querySelector('#catalog-search-input');
  const clearBtn = container.querySelector('#catalog-clear-search');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = activeSearchQuery ? 'inline-flex' : 'none';
      updateCatalogGrid(container, options);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        activeSearchQuery = '';
        clearBtn.style.display = 'none';
        updateCatalogGrid(container, options);
        searchInput.focus();
      }
    });
  }

  // Filtros de Juego
  const gamePills = container.querySelectorAll('[data-filter-game]');
  gamePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const targetGame = pill.getAttribute('data-filter-game');
      setCatalogActiveGame(targetGame, container, options);
      if (typeof window !== 'undefined' && window.history) {
        const newUrl = targetGame === 'all'
          ? window.location.pathname
          : `${window.location.pathname}?game=${targetGame}`;
        window.history.pushState({ game: targetGame }, '', newUrl);
      }
    });
  });

  // Filtros de Rareza
  const rarityPills = container.querySelectorAll('[data-filter-rarity]');
  rarityPills.forEach(pill => {
    pill.addEventListener('click', () => {
      rarityPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeRarityFilter = pill.getAttribute('data-filter-rarity');
      updateCatalogGrid(container, options);
    });
  });

  // Filtros de Elemento
  bindElementPillsEvents(container, options);
}

function bindElementPillsEvents(container, options) {
  const elementPills = container.querySelectorAll('[data-filter-element]');
  elementPills.forEach(pill => {
    pill.addEventListener('click', () => {
      elementPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeElementFilter = pill.getAttribute('data-filter-element');
      updateCatalogGrid(container, options);
    });
  });
}

function refreshElementPills(container) {
  const wrapper = container.querySelector('#catalog-element-pills');
  if (!wrapper) return;
  const elements = getUniqueElements(activeCatalogGame);
  wrapper.innerHTML = `
    <button class="clst-pill active" data-filter-element="all">Todos</button>
    ${elements.map(el => `
      <button class="clst-pill pill-element" data-filter-element="${el}" style="--el-color: ${getElementColor(el)}">
        <span class="element-dot" style="background: ${getElementColor(el)}"></span>
        <span>${el}</span>
      </button>
    `).join('')}
  `;
  activeElementFilter = 'all';
  bindElementPillsEvents(container, {});
}

/**
 * Renderiza la tarjeta de un personaje individual
 */
function renderCharacterCard(c) {
  const elColor = getElementColor(c.element);
  const rarityClass = c.rarity === 5 ? 'rarity-5' : 'rarity-4';
  const rarityLabel = c.game === 'zzz' 
    ? (c.rarity === 5 ? 'Rango S' : 'Rango A')
    : `${c.rarity}★`;

  return `
    <article class="clst-character-card ${rarityClass}" 
             data-char-id="${c.id}" 
             style="--card-accent: ${elColor}">
      <!-- Glow de fondo suave -->
      <div class="card-ambient-glow" style="background: radial-gradient(circle at 50% 30%, ${elColor}33, transparent 70%);"></div>

      <!-- Cabecera de la tarjeta con imagen -->
      <div class="card-avatar-wrap">
        <img src="${c.avatar}" 
             alt="${c.name}" 
             class="card-avatar-img"
             loading="lazy" 
             onerror="this.src='assets/clan_emblem.jpg'" />
        <div class="card-rarity-badge ${rarityClass}">
          <span>${rarityLabel}</span>
        </div>
        <div class="card-element-badge" style="background: ${elColor}26; color: ${elColor};">
          <span class="element-indicator" style="background: ${elColor}"></span>
          <span>${c.element}</span>
        </div>
      </div>

      <!-- Información del personaje -->
      <div class="card-content">
        <div class="card-stars">
          ${renderStars(c.rarity)}
        </div>
        <h3 class="card-name">${c.name}</h3>
        <p class="card-title">${c.title}</p>

        <div class="card-meta-tags">
          <span class="meta-tag weapon-tag">
            ${getIcon('swords', 'icon-xs')}
            <span>${c.weaponType}</span>
          </span>
          <span class="meta-tag role-tag">
            <span>${c.role.split('/')[0].trim()}</span>
          </span>
        </div>

        <!-- Botón de Inspección de Build y Farmeo -->
        <button class="clst-card-action-btn" data-char-id="${c.id}">
          <span>Ver Build & Farmeo</span>
          ${getIcon('arrowRight', 'icon-xs')}
        </button>
      </div>
    </article>
  `;
}

/**
 * Actualiza la vista del catálogo separando cada juego en su propia sección
 */
function updateCatalogGrid(container, options) {
  const grid = container.querySelector('#catalog-cards-grid');
  const counterText = container.querySelector('#catalog-counter-text');
  if (!grid) return;

  const currentGame = activeCatalogGame || options.game || 'all';

  // Determinar qué secciones de juego se mostrarán
  const targetSections = currentGame === 'all'
    ? GAME_SECTIONS_CONFIG
    : GAME_SECTIONS_CONFIG.filter(g => g.id === currentGame);

  // Filtrar personajes por cada juego correspondiente
  const sectionResults = targetSections.map(g => {
    const chars = getFilteredCharactersForGame(g.id);
    return { config: g, chars };
  });

  const totalCount = sectionResults.reduce((acc, curr) => acc + curr.chars.length, 0);

  if (counterText) {
    if (currentGame === 'all') {
      const activeGamesCount = sectionResults.filter(r => r.chars.length > 0).length;
      counterText.innerHTML = `${getIcon('roster', 'icon-gold icon-sm')} Mostrando <strong>${totalCount}</strong> personajes separados en <strong>${activeGamesCount}</strong> juegos`;
    } else {
      const currentConfig = GAME_SECTIONS_CONFIG.find(g => g.id === currentGame);
      const gameLabel = currentConfig ? currentConfig.name : currentGame;
      counterText.innerHTML = `${getIcon('roster', 'icon-gold icon-sm')} Mostrando <strong>${totalCount}</strong> personajes de <strong>${gameLabel}</strong>`;
    }
  }

  // Si no se encontró ningún personaje
  if (totalCount === 0) {
    grid.innerHTML = `
      <div class="clst-catalog-empty">
        <div class="empty-icon">${getIcon('search', 'icon-xl')}</div>
        <h3>No se encontraron personajes</h3>
        <p>Intenta ajustar tus filtros de búsqueda, elemento o rareza.</p>
        <button class="clst-btn-reset-filters" id="btn-reset-catalog-filters">
          ${getIcon('refresh', 'icon-sm')} Restablecer filtros
        </button>
      </div>
    `;
    const resetBtn = grid.querySelector('#btn-reset-catalog-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        activeSearchQuery = '';
        activeRarityFilter = 'all';
        activeElementFilter = 'all';
        activeCatalogGame = 'all';
        const searchInput = container.querySelector('#catalog-search-input');
        if (searchInput) searchInput.value = '';
        container.querySelectorAll('.clst-pill').forEach(p => p.classList.remove('active'));
        container.querySelectorAll('[data-filter-rarity="all"], [data-filter-element="all"], [data-filter-game="all"]').forEach(p => p.classList.add('active'));
        document.querySelectorAll('.catalog-game-tab').forEach(t => {
          t.classList.toggle('active', t.getAttribute('data-game') === 'all');
        });
        refreshElementPills(container);
        updateCatalogGrid(container, options);
      });
    }
    return;
  }

  // Renderizar las secciones limpiamente separadas por juego
  grid.innerHTML = sectionResults
    .filter(r => r.chars.length > 0)
    .map(({ config: g, chars }) => `
      <section class="clst-game-section" data-game-section="${g.id}" id="section-${g.id}">
        <!-- Cabecera de la sección exclusiva del juego -->
        <header class="clst-game-section-header" style="--game-accent: ${g.accentColor}; --game-glow: ${g.glowColor};">
          <div class="clst-game-section-glow"></div>
          <div class="clst-game-header-main">
            <div class="clst-game-icon-box" style="background: ${g.glowColor}; color: ${g.accentColor};">
              ${getIcon(g.icon, 'clst-game-icon-svg')}
            </div>
            <div class="clst-game-header-info">
              <div class="clst-game-header-badges">
                <span class="clst-game-tag" style="background: ${g.glowColor}; color: ${g.accentColor};">
                  ${g.badge}
                </span>
                <span class="clst-game-count-badge">
                  ${chars.length} ${chars.length === 1 ? 'personaje' : 'personajes'}
                </span>
              </div>
              <h3 class="clst-game-title">
                <span>${g.name}</span>
              </h3>
              <p class="clst-game-subtitle">${g.subtitle}</p>
            </div>
          </div>

          <div class="clst-game-header-actions">
            ${currentGame === 'all' ? `
              <button class="clst-game-action-btn btn-isolate" data-isolate-game="${g.id}" title="Filtrar y ver solo ${g.name}">
                <span>Ver solo ${g.portalName}</span>
                ${getIcon('arrowRight', 'icon-xs')}
              </button>
            ` : `
              <button class="clst-game-action-btn btn-show-all" data-isolate-game="all" title="Ver todos los juegos separados">
                <span>Ver todos los juegos</span>
                ${getIcon('refresh', 'icon-xs')}
              </button>
            `}
            <a href="${g.portalUrl}" class="clst-game-portal-link" title="Ir al Portal Oficial de ${g.name}">
              <span>Portal</span>
              ${getIcon('external', 'icon-xs')}
            </a>
          </div>
        </header>

        <!-- Cuadrícula exclusiva de personajes de este juego -->
        <div class="clst-catalog-grid">
          ${chars.map(c => renderCharacterCard(c)).join('')}
        </div>
      </section>
    `).join('');

  // Vincular eventos de clic en las tarjetas de personajes para abrir el modal
  grid.querySelectorAll('[data-char-id]').forEach(card => {
    card.addEventListener('click', () => {
      const charId = card.getAttribute('data-char-id');
      if (charId) {
        openCharacterFarmingModal(charId);
      }
    });
  });

  // Vincular eventos de aislamiento de juego ("Ver solo este juego" o "Ver todos")
  grid.querySelectorAll('[data-isolate-game]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = btn.getAttribute('data-isolate-game');
      setCatalogActiveGame(target, container, options);
      if (typeof window !== 'undefined' && window.history) {
        const newUrl = target === 'all'
          ? window.location.pathname
          : `${window.location.pathname}?game=${target}`;
        window.history.pushState({ game: target }, '', newUrl);
      }
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/**
 * Crea el contenedor del modal si aún no existe en el documento
 */
function ensureModalExists() {
  if (document.getElementById('clst-character-detail-modal')) return;

  const modalHtml = `
    <div id="clst-character-detail-modal" class="clst-modal-backdrop" style="display:none;" aria-hidden="true" role="dialog">
      <div class="clst-modal-container" id="clst-modal-content">
        <!-- Renderizado dinámico en openCharacterFarmingModal -->
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const backdrop = document.getElementById('clst-character-detail-modal');
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeCharacterModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCharacterModal();
    }
  });
}

/**
 * Abre el modal interactivo con la build más óptima y la guía de farmeo
 */
export function openCharacterFarmingModal(charId) {
  const character = CHARACTERS_CATALOG.find(c => c.id === charId);
  if (!character) return;

  activeModalChar = character;
  activeModalTab = 'build'; // Por defecto muestra la build óptima

  ensureModalExists();
  const backdrop = document.getElementById('clst-character-detail-modal');
  const content = document.getElementById('clst-modal-content');
  if (!backdrop || !content) return;

  renderModalContent(content, character);

  backdrop.style.display = 'flex';
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
}

/**
 * Cierra el modal de detalle
 */
export function closeCharacterModal() {
  const backdrop = document.getElementById('clst-character-detail-modal');
  if (backdrop) {
    backdrop.style.display = 'none';
    backdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
  activeModalChar = null;
}

/**
 * Renderiza el contenido interno del modal
 */
function renderModalContent(container, c) {
  const elColor = getElementColor(c.element);
  const rarityClass = c.rarity === 5 ? 'rarity-5' : 'rarity-4';
  const rarityLabel = c.game === 'zzz' 
    ? (c.rarity === 5 ? 'Rango S' : 'Rango A')
    : `${c.rarity} Estrellas (Tier S)`;

  container.innerHTML = `
    <!-- Barra superior con botón de cerrar -->
    <div class="clst-modal-header" style="--modal-accent: ${elColor}">
      <div class="modal-char-preview">
        <div class="modal-avatar-frame ${rarityClass}">
          <img src="${c.avatar}" alt="${c.name}" onerror="this.src='assets/clan_emblem.jpg'" />
        </div>
        <div class="modal-char-info">
          <div class="modal-badges-row">
            <span class="game-tag">${c.gameName}</span>
            <span class="rarity-tag ${rarityClass}">${rarityLabel}</span>
            <span class="element-tag" style="background:${elColor}25; color:${elColor}; border-color:${elColor}60;">
              ${c.element}
            </span>
          </div>
          <h2 class="modal-char-name">${c.name}</h2>
          <p class="modal-char-title">${c.title}</p>
          <div class="modal-char-substats">
            <span><strong>Tipo de Arma / Vía:</strong> ${c.weaponType}</span>
            <span>•</span>
            <span><strong>Rol en Escuadrón:</strong> ${c.role}</span>
          </div>
        </div>
      </div>
      <button class="clst-modal-close-btn" id="modal-close-btn" aria-label="Cerrar ventana">
        ${getIcon('close', 'icon-md')}
      </button>
    </div>

    <!-- Pestañas de Navegación del Modal -->
    <div class="clst-modal-tabs">
      <button class="modal-tab-btn ${activeModalTab === 'build' ? 'active' : ''}" data-tab="build">
        ${getIcon('swords', 'icon-sm')}
        <span>Build Más Óptima (Meta)</span>
      </button>
      <button class="modal-tab-btn ${activeModalTab === 'farming' ? 'active' : ''}" data-tab="farming">
        ${getIcon('satellite', 'icon-sm')}
        <span>Dónde Conseguir las Cosas (Farmeo)</span>
      </button>
    </div>

    <!-- Cuerpo del Modal -->
    <div class="clst-modal-body">
      ${activeModalTab === 'build' ? renderBuildTab(c, elColor) : renderFarmingTab(c, elColor)}
    </div>

    <!-- Barra de acciones inferior -->
    <div class="clst-modal-footer">
      <button class="clst-copy-build-btn" id="modal-copy-build-btn">
        ${getIcon('copy', 'icon-sm')}
        <span>Copiar Ficha de Build para Discord</span>
      </button>
      <button class="clst-modal-secondary-btn" id="modal-footer-close-btn">
        Cerrar
      </button>
    </div>
  `;

  // Eventos de botones internos
  container.querySelector('#modal-close-btn').addEventListener('click', closeCharacterModal);
  container.querySelector('#modal-footer-close-btn').addEventListener('click', closeCharacterModal);

  // Selector de pestañas
  container.querySelectorAll('.modal-tab-btn').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      activeModalTab = tabBtn.getAttribute('data-tab');
      renderModalContent(container, c);
    });
  });

  // Copiar resumen al portapapeles
  const copyBtn = container.querySelector('#modal-copy-build-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyBuildToClipboard(c);
      copyBtn.innerHTML = `${getIcon('checkCircle', 'icon-sm')} <span>¡Copiado al Portapapeles!</span>`;
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.innerHTML = `${getIcon('copy', 'icon-sm')} <span>Copiar Ficha de Build para Discord</span>`;
        copyBtn.classList.remove('copied');
      }, 2500);
    });
  }
}

/**
 * Renderiza la pestaña 1: Build Más Óptima
 */
function renderBuildTab(c, accentColor) {
  const b = c.optimalBuild;

  return `
    <div class="build-tab-layout">
      <!-- Sección de Armamento -->
      <div class="build-section">
        <h3 class="section-title">
          ${getIcon('swords', 'icon-gold icon-sm')}
          <span>Armamento Recomendado (BiS & F2P)</span>
        </h3>
        <div class="weapons-grid">
          <!-- Arma BiS 5★ -->
          <div class="weapon-card bis-card">
            <div class="weapon-badge bis-badge">Mejor en Ranura (BiS)</div>
            <h4 class="weapon-title">${b.weaponBiS.name}</h4>
            <div class="weapon-source">${getIcon('gem', 'icon-xs')} <strong>Obtención:</strong> ${b.weaponBiS.source}</div>
            <p class="weapon-desc">${b.weaponBiS.desc}</p>
          </div>

          <!-- Arma F2P 4★ / 3★ -->
          <div class="weapon-card f2p-card">
            <div class="weapon-badge f2p-badge">Opción F2P Accesible</div>
            <h4 class="weapon-title">${b.weaponF2P.name}</h4>
            <div class="weapon-source">${getIcon('check', 'icon-xs')} <strong>Obtención:</strong> ${b.weaponF2P.source}</div>
            <p class="weapon-desc">${b.weaponF2P.desc}</p>
          </div>
        </div>
      </div>

      <!-- Sección de Artefactos / Reliquias / Discos -->
      <div class="build-section">
        <h3 class="section-title">
          ${getIcon('disc', 'icon-gold icon-sm')}
          <span>Conjunto de Artefactos / Reliquias / Discos</span>
        </h3>
        <div class="artifacts-box">
          <div class="art-header">
            <h4 class="art-name">${b.artifacts.name}</h4>
            <span class="art-location">${getIcon('temple', 'icon-xs')} Dominio: <strong>${b.artifacts.domain}</strong> (${b.artifacts.location})</span>
          </div>
          <p class="art-bonus">${b.artifacts.bonus}</p>
        </div>
      </div>

      <!-- Estadísticas Principales (Main Stats) -->
      <div class="build-section">
        <h3 class="section-title">
          ${getIcon('hourglass', 'icon-gold icon-sm')}
          <span>Estadísticas Principales Óptimas (Main Stats)</span>
        </h3>
        <div class="main-stats-grid">
          <div class="stat-card">
            <span class="stat-piece">${c.game === 'zzz' ? 'Partición 4' : (c.game === 'hsr' ? 'Cuerpo' : 'Reloj')}</span>
            <strong class="stat-value">${b.mainStats.sands}</strong>
          </div>
          <div class="stat-card">
            <span class="stat-piece">${c.game === 'zzz' ? 'Partición 5' : (c.game === 'hsr' ? 'Esfera' : 'Cáliz')}</span>
            <strong class="stat-value">${b.mainStats.goblet}</strong>
          </div>
          <div class="stat-card">
            <span class="stat-piece">${c.game === 'zzz' ? 'Partición 6' : (c.game === 'hsr' ? 'Cuerda' : 'Corona')}</span>
            <strong class="stat-value">${b.mainStats.circlet}</strong>
          </div>
        </div>
      </div>

      <!-- Prioridad de Sub-estadísticas -->
      <div class="build-section">
        <h3 class="section-title">
          ${getIcon('sparkles', 'icon-gold icon-sm')}
          <span>Prioridad de Sub-Estadísticas (Substats)</span>
        </h3>
        <div class="substats-box">
          <p class="substats-priority-text">${b.substats}</p>
        </div>
      </div>

      <!-- Mejor Composición de Equipo (Team Synergy) -->
      <div class="build-section">
        <h3 class="section-title">
          ${getIcon('roster', 'icon-gold icon-sm')}
          <span>Mejor Composición de Equipo (Meta S-Tier)</span>
        </h3>
        <div class="team-synergy-box">
          <div class="team-members-chips">
            ${b.bestTeam.members.map((member, i) => `
              <div class="team-member-chip">
                <span class="member-index">${i + 1}</span>
                <span class="member-name">${member}</span>
              </div>
            `).join('')}
          </div>
          <p class="team-explanation">
            <strong>Sinergia Táctica:</strong> ${b.bestTeam.synergy}
          </p>
        </div>
      </div>

      <!-- Prioridad de Talentos / Rastros -->
      <div class="build-section">
        <h3 class="section-title">
          ${getIcon('book', 'icon-gold icon-sm')}
          <span>Prioridad de Subida de Talentos / Habilidades</span>
        </h3>
        <div class="talent-priority-box">
          <p>${b.talentPriority}</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renderiza la pestaña 2: Dónde Conseguir las Cosas (Guía de Farmeo)
 */
function renderFarmingTab(c, accentColor) {
  const f = c.farmingGuide;

  return `
    <div class="farming-tab-layout">
      <!-- Banner informativo -->
      <div class="farming-intro-alert">
        <div class="intro-icon">${getIcon('info', 'icon-gold')}</div>
        <div class="intro-text">
          <strong>Ruta de Recolección Rápida:</strong> A continuación tienes la lista exacta de materiales de ascensión, libros de talento con sus días de apertura y ubicación de jefes para farmear a <strong>${c.name}</strong> sin perder resina.
        </div>
      </div>

      <div class="farming-cards-grid">
        <!-- 1. Jefe de Ascensión -->
        <div class="farm-card">
          <div class="farm-card-header">
            <span class="farm-icon-pill icon-boss">
              ${getIcon('swords', 'icon-sm')}
            </span>
            <div>
              <h4 class="farm-item-title">Material de Jefe de Ascensión</h4>
              <span class="farm-qty-badge">Necesitas: ${f.bossMaterial.quantity}</span>
            </div>
          </div>
          <div class="farm-card-content">
            <div class="farm-detail-row">
              <span class="detail-label">Material:</span>
              <strong class="detail-val highlight-gold">${f.bossMaterial.name}</strong>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Jefe a Derrotar:</span>
              <span class="detail-val">${f.bossMaterial.boss}</span>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Ubicación en Mapa:</span>
              <span class="detail-val location-val">${f.bossMaterial.location}</span>
            </div>
          </div>
        </div>

        <!-- 2. Especialidad Regional / Flores / Minerales -->
        <div class="farm-card">
          <div class="farm-card-header">
            <span class="farm-icon-pill icon-spec">
              ${getIcon('gem', 'icon-sm')}
            </span>
            <div>
              <h4 class="farm-item-title">Especialidad Local de Región</h4>
              <span class="farm-qty-badge">Necesitas: ${f.localSpecialty.quantity}</span>
            </div>
          </div>
          <div class="farm-card-content">
            <div class="farm-detail-row">
              <span class="detail-label">Especialidad:</span>
              <strong class="detail-val highlight-green">${f.localSpecialty.name}</strong>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Rutas de Recolección:</span>
              <span class="detail-val location-val">${f.localSpecialty.route}</span>
            </div>
          </div>
        </div>

        <!-- 3. Libros de Talento / Rastros -->
        <div class="farm-card highlight-card">
          <div class="farm-card-header">
            <span class="farm-icon-pill icon-talent">
              ${getIcon('book', 'icon-sm')}
            </span>
            <div>
              <h4 class="farm-item-title">Libros de Talento / Rastros</h4>
              <span class="farm-days-badge">${getIcon('calendar', 'icon-xs')} ${f.talentBooks.days}</span>
            </div>
          </div>
          <div class="farm-card-content">
            <div class="farm-detail-row">
              <span class="detail-label">Libro / Material:</span>
              <strong class="detail-val highlight-blue">${f.talentBooks.name}</strong>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Dominio / Cáliz:</span>
              <span class="detail-val">${f.talentBooks.domain}</span>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Días Activo:</span>
              <strong class="detail-val highlight-gold">${f.talentBooks.days}</strong>
            </div>
          </div>
        </div>

        <!-- 4. Jefe Semanal (Weekly Boss) -->
        <div class="farm-card">
          <div class="farm-card-header">
            <span class="farm-icon-pill icon-weekly">
              ${getIcon('shield', 'icon-sm')}
            </span>
            <div>
              <h4 class="farm-item-title">Jefe Semanal (Dominio de la Cruzada)</h4>
              <span class="farm-qty-badge">18 uds. para coronas máx</span>
            </div>
          </div>
          <div class="farm-card-content">
            <div class="farm-detail-row">
              <span class="detail-label">Drop Semanal:</span>
              <strong class="detail-val highlight-purple">${f.weeklyBoss.name}</strong>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Jefe Semanal:</span>
              <span class="detail-val">${f.weeklyBoss.boss}</span>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Dominio:</span>
              <span class="detail-val location-val">${f.weeklyBoss.location}</span>
            </div>
          </div>
        </div>

        <!-- 5. Materiales de Enemigos Comunes -->
        <div class="farm-card">
          <div class="farm-card-header">
            <span class="farm-icon-pill icon-enemies">
              ${getIcon('swords', 'icon-sm')}
            </span>
            <div>
              <h4 class="farm-item-title">Gotas de Enemigos Comunes</h4>
              <span class="farm-qty-badge">Fácil farmeo abierto</span>
            </div>
          </div>
          <div class="farm-card-content">
            <div class="farm-detail-row">
              <span class="detail-label">Materiales:</span>
              <strong class="detail-val">${f.commonDrops.name}</strong>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Enemigos:</span>
              <span class="detail-val">${f.commonDrops.enemy}</span>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Zonas de Caza:</span>
              <span class="detail-val location-val">${f.commonDrops.location}</span>
            </div>
          </div>
        </div>

        <!-- 6. Dominio de Artefactos / Reliquias -->
        <div class="farm-card">
          <div class="farm-card-header">
            <span class="farm-icon-pill icon-domain">
              ${getIcon('temple', 'icon-sm')}
            </span>
            <div>
              <h4 class="farm-item-title">Dominio de Artefactos Óptimos</h4>
              <span class="farm-qty-badge">Resina / Batería</span>
            </div>
          </div>
          <div class="farm-card-content">
            <div class="farm-detail-row">
              <span class="detail-label">Nombre del Dominio:</span>
              <strong class="detail-val highlight-gold">${f.artifactDomain.name}</strong>
            </div>
            <div class="farm-detail-row">
              <span class="detail-label">Ubicación:</span>
              <span class="detail-val location-val">${f.artifactDomain.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Copia el resumen de la build al portapapeles formateado para Discord
 */
function copyBuildToClipboard(c) {
  const b = c.optimalBuild;
  const f = c.farmingGuide;
  const text = `
✨ **GUÍA OFICIAL EL GREMIO DEL VIAJERO: ${c.name.toUpperCase()}** (${c.gameName}) ✨
⭐ Rareza: ${c.rarity}★ | Elemento: ${c.element} | Rol: ${c.role}

⚔️ **ARMAMENTO ÓPTIMO:**
• BiS (5★): ${b.weaponBiS.name} (${b.weaponBiS.source})
• F2P (4★): ${b.weaponF2P.name} (${b.weaponF2P.source})

🛡️ **ARTEFACTOS / RELIQUIAS:**
• Set: ${b.artifacts.name} (${b.artifacts.domain})
• Stats: ${b.mainStats.sands} | ${b.mainStats.goblet} | ${b.mainStats.circlet}
• Substats: ${b.substats}

👥 **MEJOR EQUIPO META:**
• ${b.bestTeam.members.join(' + ')}
• Sinergia: ${b.bestTeam.synergy}

🗺️ **DÓNDE CONSEGUIR MATERIALES (FARMEO):**
• Jefe: ${f.bossMaterial.name} (${f.bossMaterial.boss} - ${f.bossMaterial.location})
• Especialidad: ${f.localSpecialty.name} (${f.localSpecialty.route})
• Libros de Talento: ${f.talentBooks.name} [${f.talentBooks.days}] en ${f.talentBooks.domain}
• Jefe Semanal: ${f.weeklyBoss.name} (${f.weeklyBoss.boss})

Únete al Clan: https://discord.gg/bYSGHFWvhe
`.trim();

  navigator.clipboard.writeText(text).catch(err => {
    console.error('Error al copiar al portapapeles:', err);
  });
}

// Exponer globalmente en window
if (typeof window !== 'undefined') {
  window.initCharacterCatalog = initCharacterCatalog;
  window.openCharacterFarmingModal = openCharacterFarmingModal;
  window.closeCharacterModal = closeCharacterModal;
}
