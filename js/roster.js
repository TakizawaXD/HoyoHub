/**
 * Gestión del Roster de Miembros, Búsqueda de UID en Vivo y Visualizador de Builds
 */
import { CLAN_CONFIG } from './config.js';
import { fetchGenshinUID } from './api.js';
import { getIcon } from './icons.js';

export function initRoster() {
  renderMembers(CLAN_CONFIG.members);
  setupUidSearch();
  setupMemberFilters();
  setupModalCloser();
}

/**
 * Renderiza la lista de miembros en el contenedor
 */
export function renderMembers(membersList) {
  const container = document.getElementById('members-grid-container');
  if (!container) return;

  container.innerHTML = membersList.map(member => {
    return `
      <div class="genshin-card member-card" data-member-id="${member.id}" data-game="${member.game}">
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
    `;
  }).join('');

  // Eventos para abrir el modal de build
  container.querySelectorAll('.view-build-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const memberId = btn.getAttribute('data-id');
      const member = CLAN_CONFIG.members.find(m => m.id === memberId);
      if (member) {
        openBuildModal(member);
      }
    });
  });
}

/**
 * Configuración del buscador en vivo de UID (Enka API)
 */
function setupUidSearch() {
  const form = document.getElementById('uid-search-form');
  const input = document.getElementById('uid-search-input');
  const resultContainer = document.getElementById('uid-live-result');

  if (!form || !input) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const uid = input.value.trim();
    if (!uid) return;

    resultContainer.innerHTML = `
      <div style="text-align: center; padding: 1.5rem; color: var(--gold-primary);">
        <div style="animation: spin 1s linear infinite; display: inline-block;">${getIcon('refresh', 'clst-icon-lg clst-icon-gold')}</div>
        <p style="margin-top: 0.5rem; font-weight: 600;">Sincronizando con la red de Teyvat (UID: ${uid})...</p>
      </div>
    `;
    resultContainer.style.display = 'block';

    try {
      const data = await fetchGenshinUID(uid);
      renderLiveUidResult(data, resultContainer);
    } catch (err) {
      resultContainer.innerHTML = `
        <div style="padding: 1.25rem; background: rgba(255, 104, 71, 0.15); border: 1px solid var(--color-pyro); border-radius: var(--radius-md); color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
          ${getIcon('info', 'clst-icon-pyro')} <strong>Aviso de Consulta:</strong> ${err.message}
        </div>
      `;
    }
  });
}

/**
 * Renderiza el resultado de la búsqueda de UID
 */
function renderLiveUidResult(data, container) {
  const hero = data.featuredHero || {
    name: "Personaje Principal",
    element: "anemo",
    weapon: "Espada Celestial (R1)",
    cr: "72.4%",
    cd: "198.5%",
    set: "Set Recomendado"
  };

  container.innerHTML = `
    <div class="genshin-card" style="background: rgba(22, 31, 64, 0.95); border: none;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <span style="font-size: 0.72rem; color: var(--gold-primary); font-weight: 700; text-transform: uppercase; display: flex; align-items: center; gap: 0.35rem;">
            ${data.isLive ? `${getIcon('satellite', 'clst-icon-sm')} Datos Enka.Network en Vivo` : `${getIcon('checkCircle', 'clst-icon-sm')} Perfil Sincronizado`}
          </span>
          <h3 style="font-size: 1.25rem; color: var(--gold-light); margin-top: 2px;">${data.nickname}</h3>
          <p style="font-size: 0.8rem; color: var(--text-secondary);">UID: ${data.uid} · Rango de Aventura: ${data.level} · Nv. Mundo: ${data.worldLevel}</p>
        </div>
        <div style="text-align: right;">
          <span style="display: block; font-size: 0.75rem; color: var(--text-muted);">Espiral del Abismo</span>
          <strong style="color: #ffc83d; font-size: 1.1rem; display: flex; align-items: center; gap: 0.3rem;">
            ${getIcon('swords', 'clst-icon-sm clst-icon-gold')} ${data.abyss}
          </strong>
        </div>
      </div>

      <div style="background: rgba(7, 9, 19, 0.6); padding: 0.85rem; border-radius: var(--radius-md); border: none; margin-bottom: 1rem;">
        <p style="font-style: italic; font-size: 0.85rem; color: var(--text-secondary);">"${data.signature}"</p>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.5rem; border-top: 1px dashed rgba(236, 209, 157, 0.25);">
        <span style="font-size: 0.82rem; color: var(--text-muted);">Logros completados: <strong style="color: var(--text-primary);">${data.achievements}</strong></span>
        <button class="btn btn-primary btn-sm" id="btn-inspect-uid-build">
          ${getIcon('search', 'clst-icon-sm')}
          <span>Inspeccionar Build</span>
        </button>
      </div>
    </div>
  `;

  const inspectBtn = container.querySelector('#btn-inspect-uid-build');
  if (inspectBtn) {
    inspectBtn.addEventListener('click', () => {
      openBuildModal({
        name: data.nickname,
        role: "Visitante / Miembro",
        ar: data.level,
        signature: data.signature,
        abyssScore: data.abyss,
        showcaseBuild: {
          character: hero.name,
          element: hero.element,
          level: "90/90",
          constellation: "C0 - C2",
          weapon: hero.weapon,
          artifactSet: hero.set,
          hp: "28,400",
          atk: "2,150",
          critRate: hero.cr,
          critDmg: hero.cd,
          er: "155.0%"
        }
      });
    });
  }
}

/**
 * Filtros de miembros por juego (Todos, Genshin, ZZZ, HSR)
 */
function setupMemberFilters() {
  const filterButtons = document.querySelectorAll('.member-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('.member-card');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-game') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Abre el Modal / Bottom Sheet con la build detallada
 */
export function openBuildModal(member) {
  const modal = document.getElementById('build-modal');
  const body = document.getElementById('modal-body-content');
  if (!modal || !body) return;

  const build = member.showcaseBuild || {
    character: member.favoriteChar || "Héroe",
    element: member.element || "hydro",
    level: "90/90",
    constellation: "C0",
    weapon: "Arma Insignia",
    artifactSet: "Set 4 piezas",
    hp: "25,000",
    atk: "2,000",
    critRate: "70.0%",
    critDmg: "180.0%",
    er: "140.0%"
  };

  body.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; gap: 0.85rem;">
        <span class="element-badge ${build.element}">${build.element}</span>
        <div>
          <h2 style="font-size: 1.35rem; color: var(--gold-light); line-height: 1.1;">${build.character}</h2>
          <span style="font-size: 0.78rem; color: var(--text-secondary);">${member.name} (${member.role} · AR ${member.ar})</span>
        </div>
      </div>
      <span style="background: rgba(236, 209, 157, 0.18); border: none; color: var(--gold-light); font-weight: 800; font-size: 0.85rem; padding: 0.25rem 0.65rem; border-radius: var(--radius-sm);">
        ${build.constellation}
      </span>
    </div>

    <!-- Arma & Set -->
    <div style="background: rgba(7, 9, 19, 0.75); border: none; border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; box-shadow: 0 4px 14px rgba(0,0,0,0.4);">
      <div style="margin-bottom: 0.6rem;">
        <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Arma equipada:</span>
        <div style="font-size: 0.95rem; font-weight: 700; color: #ffc83d; display: flex; align-items: center; gap: 0.4rem;">
          ${getIcon('swords', 'clst-icon-sm')} <span>${build.weapon}</span>
        </div>
      </div>
      <div>
        <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Conjunto de Artefactos / Discos:</span>
        <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem;">
          ${getIcon('gem', 'clst-icon-sm clst-icon-gem')} <span>${build.artifactSet}</span>
        </div>
      </div>
    </div>

    <!-- Estadísticas de Combate -->
    <h4 style="font-size: 0.9rem; color: var(--gold-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Estadísticas del Personaje (Nv. ${build.level})</h4>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.65rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(14, 20, 42, 0.8); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted);">Vida Máxima</span>
        <strong style="color: var(--text-primary); font-size: 1rem;">${build.hp}</strong>
      </div>
      <div style="background: rgba(14, 20, 42, 0.8); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted);">Ataque Total</span>
        <strong style="color: var(--text-primary); font-size: 1rem;">${build.atk}</strong>
      </div>
      <div style="background: rgba(14, 20, 42, 0.8); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted);">Prob. CRIT</span>
        <strong style="color: #ff85cb; font-size: 1.05rem;">${build.critRate}</strong>
      </div>
      <div style="background: rgba(14, 20, 42, 0.8); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted);">Daño CRIT</span>
        <strong style="color: #69e0f6; font-size: 1.05rem;">${build.critDmg}</strong>
      </div>
      <div style="background: rgba(14, 20, 42, 0.8); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted);">Recarga de Energía</span>
        <strong style="color: var(--color-anemo); font-size: 1rem;">${build.er}</strong>
      </div>
      <div style="background: rgba(14, 20, 42, 0.8); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted);">Maestría Elemental</span>
        <strong style="color: var(--color-dendro); font-size: 1rem;">${build.em || '80'}</strong>
      </div>
    </div>

    <div style="text-align: center;">
      <a href="${CLAN_CONFIG.discordUrl}" target="_blank" rel="noopener" class="btn btn-discord btn-sm" style="width: 100%;">
        ${getIcon('discord', 'clst-icon-sm')}
        <span>Debatir Build en Discord del Clan</span>
      </a>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function setupModalCloser() {
  const modal = document.getElementById('build-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

export function closeModal() {
  const modal = document.getElementById('build-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}
