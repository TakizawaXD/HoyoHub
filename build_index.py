import os

html_content = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Celestia Order | Clan de Genshin Impact & HoYoverse</title>
  <meta name="description" content="Portal oficial del clan Celestia Order. Conexión en vivo con APIs de Genshin Impact, Zenless Zone Zero y Star Rail: builds por UID, códigos de regalo, banners y farmeo diario." />
  <meta name="theme-color" content="#070913" />

  <!-- PWA Manifest & Favicon -->
  <link rel="manifest" href="manifest.json" />
  <link rel="icon" type="image/jpeg" href="assets/clan_emblem.jpg" />

  <!-- Estilos CSS Modulares y Responsivos -->
  <link rel="stylesheet" href="css/base.css" />
  <link rel="stylesheet" href="css/layout.css" />
  <link rel="stylesheet" href="css/components.css" />
  <link rel="stylesheet" href="css/mobile.css" />
</head>
<body>

  <!-- Canvas con partículas de constelaciones y estrellas -->
  <canvas id="celestial-canvas"></canvas>
  <div class="celestial-nebula-bg"></div>

  <div class="app-wrapper">

    <!-- ============================================================
         HEADER PRINCIPAL
         ============================================================ -->
    <header class="site-header">
      <div class="header-container">
        <a class="header-brand" data-goto-tab="home" href="#home" title="Ir al Inicio">
          <img src="assets/clan_emblem.jpg" alt="Emblema Celestia Order" class="brand-emblem" />
          <div class="brand-text">
            <h1><span class="clan-name-text title-gold">Celestia Order</span> <span class="brand-tag clan-tag-text">CLST</span></h1>
            <p class="brand-sub clan-motto-text">Hacia las estrellas y los abismos de Teyvat</p>
          </div>
        </a>

        <!-- Navegación Desktop -->
        <nav class="desktop-nav" aria-label="Navegación Principal">
          <button class="nav-link active" data-tab="home"><span>🏛️</span> Inicio</button>
          <button class="nav-link" data-tab="roster"><span>⚔️</span> Miembros & UID</button>
          <button class="nav-link" data-tab="hoyo"><span>💎</span> HoYo Multi-Hub</button>
          <button class="nav-link" data-tab="farming"><span>📜</span> Farmeo Diario</button>
          <button class="nav-link" data-tab="clan"><span>🛡️</span> El Clan</button>
        </nav>

        <!-- Acciones del Header -->
        <div class="header-actions">
          <button id="sound-toggle-btn" class="btn btn-secondary btn-sm" title="Efectos de audio celestiales">
            <span class="sound-icon">🔕</span>
          </button>
          <a href="https://discord.gg/genshin" target="_blank" rel="noopener" class="btn btn-discord btn-sm discord-link-target">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.894a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span class="btn-text-desktop">Discord</span>
          </a>
        </div>
      </div>
    </header>

    <!-- ============================================================
         CONTENIDO PRINCIPAL
         ============================================================ -->
    <main class="main-content">

      <!-- HERO BANNER CELESTIAL -->
      <section class="clan-hero">
        <img src="assets/clan_banner.jpg" alt="Celestia Clan Banner" class="hero-background-img" />
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <img src="assets/clan_emblem.jpg" alt="Insignia Celestia" class="hero-crest-badge" />
          <h2 class="hero-title"><span class="title-gold clan-name-text">Celestia Order</span></h2>
          <p class="hero-motto clan-motto-text">«Hacia las estrellas y los abismos más profundos de Teyvat»</p>

          <div class="hero-stats-bar">
            <div class="stat-item">
              <span class="label">Miembros:</span>
              <span class="value clan-members-count">48 / 50</span>
            </div>
            <div class="stat-item">
              <span class="label">Rango:</span>
              <span class="value clan-level-text">Nivel 10 · Abismo 12-3</span>
            </div>
            <div class="stat-item">
              <span class="label">Servidor:</span>
              <span class="value clan-server-text">América / Europa</span>
            </div>
            <div class="stat-item">
              <span class="label">Reclutamiento:</span>
              <span class="value" style="color: var(--color-anemo);">🟢 Abierto</span>
            </div>
          </div>

          <div class="hero-ctas">
            <button class="btn btn-primary" data-goto-tab="roster">
              <span>⚔️ Explorar Miembros & Builds</span>
            </button>
            <button class="btn btn-secondary" data-goto-tab="hoyo">
              <span>💎 Códigos & Banners HoYo</span>
            </button>
            <button class="btn btn-discord btn-join-clan">
              <span>🛡️ Solicitar Ingreso</span>
            </button>
          </div>
        </div>
      </section>

      <!-- BARRA DE ESTADO EN TIEMPO REAL (TICKER) -->
      <div class="live-tracker-bar">
        <div class="tracker-card">
          <div class="tracker-icon-box">⏳</div>
          <div class="tracker-info">
            <span class="tracker-label">Reinicio Servidor (04:00 AM)</span>
            <span class="tracker-value" id="server-reset-timer">Calculando...</span>
          </div>
        </div>

        <div class="tracker-card">
          <div class="tracker-icon-box">🎁</div>
          <div class="tracker-info">
            <span class="tracker-label">Códigos Activos Verificados</span>
            <span class="tracker-value">11 Códigos Disponibles</span>
          </div>
        </div>

        <div class="tracker-card">
          <div class="tracker-icon-box">⭐</div>
          <div class="tracker-info">
            <span class="tracker-label">Espiral del Abismo & Shiyu</span>
            <span class="tracker-value">Fase 12-3 · 36★ Activa</span>
          </div>
        </div>
      </div>

      <!-- ============================================================
           TAB 1: INICIO (PORTADA)
           ============================================================ -->
      <section id="tab-home" class="tab-content active">
        <div class="section-header">
          <div>
            <h2 class="section-title"><span class="title-gold">Centro de Operaciones</span></h2>
            <p class="section-desc">Bienvenido al portal del clan. Consulta las últimas actividades, banners y códigos activos.</p>
          </div>
          <button class="btn btn-primary btn-sm" data-goto-tab="roster">
            <span>Ver Roster Completo →</span>
          </button>
        </div>

        <!-- Banners en Vivo Preview -->
        <h3 style="font-size: 1.15rem; color: var(--gold-light); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🎯</span> Banners de Deseos y Salto en Vivo
        </h3>
        <div id="hoyo-banners-container" class="banners-grid" style="margin-bottom: 2.5rem;">
          <!-- Inyectado por JS -->
        </div>

        <!-- Anuncios y Eventos del Clan -->
        <div class="section-header">
          <h2 class="section-title"><span class="title-gold">Actividades y Eventos del Clan</span></h2>
        </div>
        <div class="members-grid" style="margin-bottom: 2rem;">
          <div class="genshin-card">
            <span class="element-badge hydro">Genshin Impact</span>
            <h3 style="margin: 0.5rem 0 0.3rem; color: var(--gold-light);">Noche de Cooperativo: Farmeo de Jefes</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
              Todos los viernes a las 21:00 (Hora Servidor). Ayudamos a miembros nuevos a farmear materiales de ascensión y artefactos 5★.
            </p>
            <span style="font-size: 0.78rem; color: var(--gold-primary); font-weight: 700;">📍 Canal de Voz en Discord</span>
          </div>

          <div class="genshin-card">
            <span class="element-badge electro">Zenless Zone Zero</span>
            <h3 style="margin: 0.5rem 0 0.3rem; color: var(--gold-light);">Torneo Shiyu Defense: Speedrun</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
              Desafío mensual de clasificación rápida en la Frontera Crítica. Premios en bendiciones y pases lunares.
            </p>
            <span style="font-size: 0.78rem; color: var(--color-ether); font-weight: 700;">🏆 Inscripciones en Discord</span>
          </div>

          <div class="genshin-card">
            <span class="element-badge dendro">Honkai: Star Rail</span>
            <h3 style="margin: 0.5rem 0 0.3rem; color: var(--gold-light);">Optimización de Builds & MOC 12</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
              Revisión de reliquias y rotaciones de equipo por los veteranos del clan para limpiar la Memoria del Caos con 3 estrellas.
            </p>
            <span style="font-size: 0.78rem; color: var(--color-anemo); font-weight: 700;">📊 Canal #guias-hsr</span>
          </div>
        </div>
      </section>

      <!-- ============================================================
           TAB 2: MIEMBROS & BUSCADOR UID EN VIVO (ENKA API)
           ============================================================ -->
      <section id="tab-roster" class="tab-content">
        <div class="section-header">
          <div>
            <h2 class="section-title"><span class="title-gold">Salón de Miembros & Inspección UID</span></h2>
            <p class="section-desc">Inspecciona las builds reales de los miembros o consulta cualquier cuenta de Genshin en vivo.</p>
          </div>
        </div>

        <!-- Buscador en Vivo por UID -->
        <div class="uid-search-box">
          <div class="uid-search-header">
            <div>
              <h3 style="font-size: 1.1rem; color: var(--gold-light); display: flex; align-items: center; gap: 0.4rem;">
                <span>✨</span> Consultar Jugador en Vivo (Enka.Network API)
              </h3>
              <p style="font-size: 0.8rem; color: var(--text-secondary);">Ingresa el UID de cualquier viajero para consultar su nivel, logros y personaje insignia.</p>
            </div>
            <span style="font-size: 0.75rem; color: var(--color-anemo); background: rgba(74, 229, 190, 0.15); padding: 0.2rem 0.6rem; border-radius: var(--radius-pill); border: 1px solid var(--color-anemo);">
              API en Vivo Conectada
            </span>
          </div>

          <form id="uid-search-form" class="uid-search-form">
            <div class="uid-input-wrapper">
              <span class="uid-input-icon">🔍</span>
              <input type="text" id="uid-search-input" class="uid-input" placeholder="Ejemplo: 601248921 (UID de 9 a 10 dígitos)" maxlength="10" required />
            </div>
            <button type="submit" class="btn btn-primary">
              <span>Sincronizar UID</span>
            </button>
          </form>

          <div id="uid-live-result" style="margin-top: 1.25rem; display: none;"></div>
        </div>

        <!-- Filtros de miembros -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; overflow-x: auto; padding-bottom: 0.4rem;">
          <button class="game-tab-btn member-filter-btn active" data-filter="all">🌟 Todos</button>
          <button class="game-tab-btn member-filter-btn" data-filter="genshin">✨ Genshin Impact</button>
          <button class="game-tab-btn member-filter-btn" data-filter="zzz">⚡ Zenless Zone Zero</button>
          <button class="game-tab-btn member-filter-btn" data-filter="hsr">🚂 Honkai: Star Rail</button>
        </div>

        <!-- Grid de miembros -->
        <div id="members-grid-container" class="members-grid">
          <!-- Inyectado por JS -->
        </div>
      </section>

      <!-- ============================================================
           TAB 3: HOYO MULTI-HUB (CÓDIGOS & BANNERS)
           ============================================================ -->
      <section id="tab-hoyo" class="tab-content">
        <div class="section-header">
          <div>
            <h2 class="section-title"><span class="title-gold">HoYoverse Multi-Hub</span></h2>
            <p class="section-desc">Códigos de canje activos con copia en 1 clic y enlaces oficiales para Genshin, ZZZ y Star Rail.</p>
          </div>
        </div>

        <!-- Selector de juego -->
        <div class="game-tabs" aria-label="Selector de Juego">
          <button class="game-tab-btn active" data-game="genshin">
            <span>✨</span> Genshin Impact
          </button>
          <button class="game-tab-btn" data-game="zzz">
            <span>⚡</span> Zenless Zone Zero
          </button>
          <button class="game-tab-btn" data-game="hsr">
            <span>🚂</span> Honkai: Star Rail
          </button>
        </div>

        <!-- Grid de Códigos -->
        <h3 style="font-size: 1.15rem; color: var(--gold-light); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🎁</span> Códigos de Regalo Activos (Copiar y Canjear)
        </h3>
        <div id="hoyo-codes-container" class="codes-grid">
          <!-- Inyectado por JS -->
        </div>
      </section>

      <!-- ============================================================
           TAB 4: CALENDARIO DE FARMEO DIARIO
           ============================================================ -->
      <section id="tab-farming" class="tab-content">
        <div class="section-header">
          <div>
            <h2 class="section-title"><span class="title-gold">Calendario de Dominios & Materiales</span></h2>
            <p class="section-desc">Selecciona el día de la semana para ver qué libros de talentos, materiales de armas y chips están disponibles hoy.</p>
          </div>
        </div>

        <!-- Selector de día de la semana -->
        <div id="day-buttons-bar" class="day-selector-bar">
          <!-- Inyectado por JS -->
        </div>

        <!-- Contenedor de Horarios -->
        <div id="farming-schedule-container">
          <!-- Inyectado por JS -->
        </div>
      </section>

      <!-- ============================================================
           TAB 5: EL CLAN (REGLAS Y RECLUTAMIENTO)
           ============================================================ -->
      <section id="tab-clan" class="tab-content">
        <div class="section-header">
          <div>
            <h2 class="section-title"><span class="title-gold">Sobre Celestia Order</span></h2>
            <p class="section-desc">Conoce nuestra filosofía, requisitos de ingreso y cómo formar parte de la comunidad.</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          <div class="genshin-card">
            <h3 style="color: var(--gold-light); margin-bottom: 0.85rem;">🏛️ Nuestra Misión</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              Celestia Order nació como un refugio para jugadores hispanohablantes dedicados a la exploración profunda de los títulos de HoYoverse. Buscamos el equilibrio entre la diversión comunitaria, la ayuda en cooperativo y el dominio competitivo del Abismo y Shiyu Defense.
            </p>
            <div style="padding: 0.75rem; background: rgba(7, 9, 19, 0.5); border-radius: var(--radius-sm); border-left: 3px solid var(--gold-primary);">
              <em style="color: var(--gold-light); font-size: 0.85rem;">«Ningún miembro se queda sin completar sus eventos ni sin sus 36 estrellas.»</em>
            </div>
          </div>

          <div class="genshin-card">
            <h3 style="color: var(--gold-light); margin-bottom: 0.85rem;">📜 Requisitos de Ingreso</h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.86rem; color: var(--text-secondary);">
              <li style="display: flex; gap: 0.5rem; align-items: center;">
                <span style="color: var(--color-anemo); font-weight: 800;">✓</span> Rango de Aventura mínimo AR 45+ en Genshin o Nivel de Interludio 40+ en ZZZ.
              </li>
              <li style="display: flex; gap: 0.5rem; align-items: center;">
                <span style="color: var(--color-anemo); font-weight: 800;">✓</span> Actividad regular (no más de 7 días de inactividad sin aviso previo).
              </li>
              <li style="display: flex; gap: 0.5rem; align-items: center;">
                <span style="color: var(--color-anemo); font-weight: 800;">✓</span> Respeto total hacia todos los compañeros en canales de texto y voz.
              </li>
              <li style="display: flex; gap: 0.5rem; align-items: center;">
                <span style="color: var(--color-anemo); font-weight: 800;">✓</span> Disposición para cooperativo y eventos de clan semanales.
              </li>
            </ul>

            <button class="btn btn-primary btn-join-clan" style="width: 100%; margin-top: 1.5rem;">
              <span>🛡️ Solicitar Ingreso al Clan</span>
            </button>
          </div>
        </div>
      </section>

    </main>

    <!-- ============================================================
         FOOTER
         ============================================================ -->
    <footer class="site-footer">
      <div class="footer-inner">
        <p><strong class="clan-name-text title-gold">Celestia Order</strong> · Clan Comunitario para Genshin Impact, Zenless Zone Zero & Honkai: Star Rail</p>
        <p style="font-size: 0.75rem; color: var(--text-muted); max-width: 600px;">
          Este sitio es un proyecto comunitario creado por y para fans. Todos los derechos, personajes, nombres, imágenes y marcas de Genshin Impact, Zenless Zone Zero y Honkai: Star Rail pertenecen a HoYoverse (COGNOSPHERE PTE. LTD.).
        </p>
      </div>
    </footer>

    <!-- ============================================================
         DOCK DE NAVEGACIÓN MÓVIL (NATIVE PHONE EXPERIENCE)
         ============================================================ -->
    <nav class="mobile-bottom-dock" aria-label="Navegación Móvil">
      <div class="dock-container">
        <button class="dock-item active" data-tab="home">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          <span>Inicio</span>
        </button>

        <button class="dock-item" data-tab="roster">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span>Miembros</span>
        </button>

        <button class="dock-item" data-tab="hoyo">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>HoYo Hub</span>
        </button>

        <button class="dock-item" data-tab="farming">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
          <span>Farmeo</span>
        </button>

        <button class="dock-item" data-tab="clan">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
          </svg>
          <span>El Clan</span>
        </button>
      </div>
    </nav>

  </div>

  <!-- ============================================================
       MODAL / BOTTOM SHEET DE BUILD
       ============================================================ -->
  <div id="build-modal" class="modal-backdrop" role="dialog" aria-modal="true">
    <div class="modal-window">
      <button id="modal-close-btn" class="modal-close-btn" aria-label="Cerrar ventana">✕</button>
      <div id="modal-body-content">
        <!-- Rellenado dinámicamente -->
      </div>
    </div>
  </div>

  <!-- ============================================================
       MODAL DE SOLICITUD DE INGRESO AL CLAN
       ============================================================ -->
  <div id="join-modal" class="modal-backdrop" role="dialog" aria-modal="true">
    <div class="modal-window" style="max-width: 480px;">
      <button id="join-modal-close-btn" class="modal-close-btn" aria-label="Cerrar">✕</button>
      <div style="text-align: center; margin-bottom: 1.25rem;">
        <span style="font-size: 2.2rem;">🛡️</span>
        <h2 style="font-size: 1.35rem; color: var(--gold-light); margin-top: 0.35rem;">Únete a Celestia Order</h2>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">Completa tus datos para enviarte la invitación y rol en Discord.</p>
      </div>

      <form id="join-form" style="display: flex; flex-direction: column; gap: 0.9rem;">
        <div>
          <label style="display: block; font-size: 0.78rem; color: var(--gold-primary); margin-bottom: 0.35rem;">Tu Nombre de Viajero / Proxy</label>
          <input type="text" class="uid-input" style="padding-left: 1rem;" placeholder="Ej: LumineStar" required />
        </div>
        <div>
          <label style="display: block; font-size: 0.78rem; color: var(--gold-primary); margin-bottom: 0.35rem;">Tu UID Principal de Genshin o ZZZ</label>
          <input type="text" class="uid-input" style="padding-left: 1rem;" placeholder="Ej: 601248921" maxlength="10" required />
        </div>
        <div>
          <label style="display: block; font-size: 0.78rem; color: var(--gold-primary); margin-bottom: 0.35rem;">Servidor en el que juegas</label>
          <select class="uid-input" style="padding-left: 1rem; background: #0a0d1a;">
            <option value="america">América</option>
            <option value="europe">Europa</option>
            <option value="asia">Asia</option>
          </select>
        </div>
        <div>
          <label style="display: block; font-size: 0.78rem; color: var(--gold-primary); margin-bottom: 0.35rem;">Usuario de Discord</label>
          <input type="text" class="uid-input" style="padding-left: 1rem;" placeholder="Ej: viajero#1234" required />
        </div>

        <button type="submit" class="btn btn-primary" style="margin-top: 0.5rem; width: 100%;">
          <span>Enviar Solicitud y Entrar a Discord</span>
        </button>
      </form>
    </div>
  </div>

  <!-- Controlador JS Modular -->
  <script type="module" src="js/app.js"></script>
</body>
</html>
"""

with open("G:/Proyectos/Genshin/index.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Successfully generated index.html with size {len(html_content)} characters.")
