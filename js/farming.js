/**
 * Calendario Interactivo de Farmeo Diario (Talentos, Armas y Chips ZZZ)
 */
import { FARMING_CALENDAR } from './api.js';
import { getIcon } from './icons.js';

export function initFarming() {
  const today = new Date().getDay(); // 0 = Domingo, 1 = Lunes, etc.
  setupDayButtons(today);
  renderDaySchedule(today);
}

function setupDayButtons(initialDay) {
  const container = document.getElementById('day-buttons-bar');
  if (!container) return;

  const daysOrder = [1, 2, 3, 4, 5, 6, 0]; // Lunes a Domingo
  const daysNames = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
    0: 'Domingo'
  };

  container.innerHTML = daysOrder.map(dayNum => {
    const isToday = dayNum === initialDay;
    return `
      <button class="day-btn ${isToday ? 'active' : ''}" data-day="${dayNum}">
        <span>${daysNames[dayNum]}</span>
        ${isToday ? `<span style="font-size: 0.68rem; color: var(--primo-cyan); font-weight: 700; margin-left: 4px;">(Hoy)</span>` : ''}
      </button>
    `;
  }).join('');

  container.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedDay = parseInt(btn.getAttribute('data-day'), 10);
      renderDaySchedule(selectedDay);
    });
  });
}

export function renderDaySchedule(dayNumber) {
  const container = document.getElementById('farming-schedule-container');
  if (!container) return;

  const data = FARMING_CALENDAR.days[dayNumber] || FARMING_CALENDAR.days[1];

  let talentsHtml = '';
  if (Array.isArray(data.genshinTalents)) {
    talentsHtml = data.genshinTalents.map(t => `
      <div class="domain-item">
        <span class="domain-region">${t.region}</span>
        <div class="domain-material">${getIcon('book', 'clst-icon-sm clst-icon-gold')} Libros de ${t.name}</div>
        <div class="domain-chars"><strong>Personajes:</strong> ${t.chars}</div>
      </div>
    `).join('');
  } else {
    talentsHtml = `
      <div class="domain-item" style="grid-column: 1 / -1; border-color: var(--gold-primary);">
        <div class="domain-material" style="color: var(--gold-light); display: flex; align-items: center; gap: 0.5rem;">
          ${getIcon('sparkles', 'clst-icon-gold')} <span>${data.genshinTalents}</span>
        </div>
      </div>
    `;
  }

  let weaponsHtml = '';
  if (Array.isArray(data.genshinWeapons)) {
    weaponsHtml = data.genshinWeapons.map(w => `
      <div class="domain-item">
        <span class="domain-region">${w.region}</span>
        <div class="domain-material">${getIcon('swords', 'clst-icon-sm')} ${w.name}</div>
      </div>
    `).join('');
  } else {
    weaponsHtml = `
      <div class="domain-item" style="grid-column: 1 / -1; border-color: var(--gold-primary);">
        <div class="domain-material" style="color: var(--gold-light); display: flex; align-items: center; gap: 0.5rem;">
          ${getIcon('swords', 'clst-icon-gold')} <span>${data.genshinWeapons}</span>
        </div>
      </div>
    `;
  }

  let zzzHtml = (data.zzzMaterials || []).map(z => `
    <div class="domain-item" style="border-color: rgba(232, 83, 205, 0.4);">
      <span class="domain-region" style="color: var(--color-ether);">Zenless Zone Zero</span>
      <div class="domain-material" style="color: #ffffff;">${getIcon('zzz', 'clst-icon-sm clst-icon-zzz')} ${z.type}</div>
      <div class="domain-chars"><strong>Agentes:</strong> ${z.targets}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <!-- Libros de Talentos -->
    <div style="margin-bottom: 2rem;">
      <h3 style="font-size: 1.15rem; color: var(--gold-light); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
        ${getIcon('book', 'clst-icon-gold')} <span>Libros de Talentos de Personajes</span>
      </h3>
      <div class="farm-domains-list">
        ${talentsHtml}
      </div>
    </div>

    <!-- Materiales de Armas -->
    <div style="margin-bottom: 2rem;">
      <h3 style="font-size: 1.15rem; color: var(--gold-light); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
        ${getIcon('swords', 'clst-icon-gold')} <span>Materiales de Ascensión de Armas</span>
      </h3>
      <div class="farm-domains-list">
        ${weaponsHtml}
      </div>
    </div>

    <!-- Materiales ZZZ -->
    <div>
      <h3 style="font-size: 1.15rem; color: var(--color-ether); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
        ${getIcon('zzz', 'clst-icon-zzz')} <span>Chips Tácticos de Zenless Zone Zero</span>
      </h3>
      <div class="farm-domains-list">
        ${zzzHtml}
      </div>
    </div>
  `;
}
