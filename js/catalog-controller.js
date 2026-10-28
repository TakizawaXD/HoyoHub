/**
 * Controlador de la Página Dedicada del Catálogo (catalogo.html)
 * El Gremio del Viajero - Base de Datos de Personajes, 3 Builds Meta y Farmeo
 */
import { CLAN_CONFIG } from './config.js';
import { initEffects } from './effects.js';
import { initCharacterCatalog, setCatalogActiveGame } from './character-catalog.js';
import { initBuildsModal } from './builds-api.js';
import { getIcon } from './icons.js';

document.addEventListener('DOMContentLoaded', () => {
  initCatalogPage();
});

function initCatalogPage() {
  populateClanInfo();

  // Detectar juego inicial desde parámetros URL (?game=genshin / hsr / zzz / all)
  const urlParams = new URLSearchParams(window.location.search);
  const gameParam = urlParams.get('game') || 'all';

  // Sincronizar switcher de juego en el banner del catálogo
  setupCatalogGameSwitcher(gameParam);

  // Inicializar el catálogo completo en su contenedor dedicado
  initCharacterCatalog('dedicated-catalog-root', { game: gameParam });

  // Inicializar modal universal de 3 builds meta
  initBuildsModal();

  // Inicializar efectos de audio y canvas cósmico
  initEffects();
}

/**
 * Configura los botones de selección rápida de juego en la cabecera del catálogo
 */
function setupCatalogGameSwitcher(currentGame) {
  const switchers = document.querySelectorAll('.catalog-game-tab');
  switchers.forEach(tab => {
    const tabGame = tab.getAttribute('data-game');
    if (tabGame === currentGame) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }

    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetGame = tab.getAttribute('data-game');
      
      // Actualizar URL sin recargar la página completa
      const newUrl = targetGame === 'all' 
        ? window.location.pathname 
        : `${window.location.pathname}?game=${targetGame}`;
      window.history.pushState({ game: targetGame }, '', newUrl);

      // Sincronizar estado del catálogo de manera reactiva
      const catalogRoot = document.getElementById('dedicated-catalog-root');
      setCatalogActiveGame(targetGame, catalogRoot);
    });
  });

  // Manejar botón Atrás/Adelante del navegador
  window.addEventListener('popstate', (e) => {
    const targetGame = (e.state && e.state.game) || 'all';
    const catalogRoot = document.getElementById('dedicated-catalog-root');
    setCatalogActiveGame(targetGame, catalogRoot);
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
