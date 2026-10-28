/**
 * Controlador Principal de la Aplicación del Clan
 */
import { CLAN_CONFIG } from './config.js';
import { initEffects } from './effects.js';
import { initRoster } from './roster.js';
import { initHoyoHub } from './hoyo-hub.js';
import { initFarming } from './farming.js';
import { initBuildsModal } from './builds-api.js';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  populateClanInfo();
  setupTabRouting();
  setupJoinClanModal();

  // Inicializar subsistemas
  initBuildsModal();
  initEffects();
  initRoster();
  initHoyoHub();
  initFarming();
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

  // Enlaces de Discord
  document.querySelectorAll('.discord-link-target').forEach(el => {
    el.href = CLAN_CONFIG.discordUrl;
  });
}

/**
 * Enrutamiento de pestañas sincronizado entre Header Desktop y Dock Móvil
 */
function setupTabRouting() {
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const dockItems = document.querySelectorAll('.mobile-bottom-dock .dock-item');
  const sections = document.querySelectorAll('.tab-content');

  function switchTab(targetId) {
    // Actualizar secciones
    sections.forEach(sec => {
      sec.classList.remove('active');
      if (sec.id === `tab-${targetId}`) {
        sec.classList.add('active');
      }
    });

    // Sincronizar desktop
    desktopLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-tab') === targetId);
    });

    // Sincronizar dock móvil
    dockItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-tab') === targetId);
    });

    // Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  desktopLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = link.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  dockItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = item.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // Botones de acción rápida dentro del contenido que cambian de pestaña
  document.querySelectorAll('[data-goto-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-goto-tab');
      switchTab(tab);
    });
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
