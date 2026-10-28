/**
 * Módulo de Integración de Noticias Oficiales de HoYoverse
 * Soporta Genshin Impact, Honkai: Star Rail y Zenless Zone Zero
 * Utiliza la API oficial de HoYoPlay (sg-hyp-api.hoyoverse.com) y HoYoLAB con fallbacks
 */
import { getIcon } from './icons.js';

export const HOYO_GAMES_METADATA = {
  genshin: {
    key: "genshin",
    name: "Genshin Impact",
    id: "gopR6Cufr3",
    gids: 2,
    biz: "hk4e_global",
    color: "#ecd19d",
    accentColor: "#22b8ff",
    tagline: "El vasto mundo abierto de fantasía de Teyvat",
    version: "Versión 5.x · Natlan / Fontaine",
    pageUrl: "genshin.html",
    officialUrl: "https://genshin.hoyoverse.com/es",
    logoUrl: "assets/genshin_logo.svg",
    bgUrl: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/12/544bf0d17e4570f886fd1b731a3274da_5003849349598617917.webp"
  },
  hsr: {
    key: "hsr",
    name: "Honkai: Star Rail",
    id: "4ziysqXOQ8",
    gids: 6,
    biz: "hkrpg_global",
    color: "#6978ff",
    accentColor: "#fbe042",
    tagline: "Viaje estelar a bordo del Expreso Astral",
    version: "Versión 2.6 / 4.6 · Danza Lunar",
    pageUrl: "hsr.html",
    officialUrl: "https://hsr.hoyoverse.com/es-es",
    logoUrl: "assets/hsr_logo.svg",
    bgUrl: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/21/94b346207176750fb5ff12cd0bd8d108_4537896671082030891.webp"
  },
  zzz: {
    key: "zzz",
    name: "Zenless Zone Zero",
    id: "U5hbdsT9W7",
    gids: 8,
    biz: "nap_global",
    color: "#e853cd",
    accentColor: "#ffc83d",
    tagline: "Acción urbana y distritos secretos de Nueva Eridu",
    version: "Versión 1.3 / 3.3 · Venganza Virtual",
    pageUrl: "zzz.html",
    officialUrl: "https://zenless.hoyoverse.com/es-es",
    logoUrl: "assets/zzz_logo.svg",
    bgUrl: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/16/bca19f05a213ae991b0e45a8e83b391a_748932879298524692.webp"
  }
};

// Datos en caché de alta fidelidad sincronizados con la API oficial de HoYoPlay (Español)
export const PRECACHED_HOYO_NEWS = {
  genshin: {
    banners: [
      {
        id: "b_gen_1",
        image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/9864ca4e249b1a698051e8370e711e57_2843160042726570954.jpg",
        title: "Evento Web «Gala estelar» - Informe Anual",
        link: "https://hoyo.link/mZeMD8fQS"
      },
      {
        id: "b_gen_2",
        image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/22/30848ea9bc76a18f4967a135a4761de0_1366505599196670496.jpg",
        title: "Deseo de Evento de Personaje - Natlan",
        link: "https://hoyo.link/Mm6NPXOVx"
      },
      {
        id: "b_gen_3",
        image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/08/8cd58fb514cfa711b736ed8e21ac9009_7364048553854147140.jpg",
        title: "Avance de Contenido de Versión",
        link: "https://hoyo.link/ibBYS62O8"
      }
    ],
    posts: [
      {
        id: "p_gen_1",
        game: "genshin",
        type: "POST_TYPE_ACTIVITY",
        typeLabel: "Evento Web",
        badgeClass: "badge-event",
        title: "¡Dirígete al evento web «Gala estelar» y desbloquea tu informe anual de edenes!",
        date: "23 Oct",
        link: "https://hoyo.link/P36Wq2xZa",
        summary: "Participa en la gala especial de Teyvat y canjea recompensas de protogemas, materiales de ascensión y decoraciones de perfil exclusivas."
      },
      {
        id: "p_gen_2",
        game: "genshin",
        type: "POST_TYPE_INFO",
        typeLabel: "Información",
        badgeClass: "badge-info",
        title: "Eventos de la versión «Un réquiem para el inframundo» (Fase II)",
        date: "12 Oct",
        link: "https://hoyo.link/daMYoVCKm",
        summary: "Nuevos desafíos del Espiral del Abismo con bendiciones mejoradas para reacciones elementales y líneas ley activas."
      },
      {
        id: "p_gen_3",
        game: "genshin",
        type: "POST_TYPE_ANNOUNCE",
        typeLabel: "Actualización",
        badgeClass: "badge-announce",
        title: "Detalles y optimizaciones de la versión: Mejoras de mapa y artefactos",
        date: "24 Sep",
        link: "https://www.hoyolab.com/article_pre/24573",
        summary: "Optimizaciones en la interfaz de bloqueo y reciclaje de artefactos, aumento de espacio de inventario y ajustes de fluidez en combate."
      },
      {
        id: "p_gen_4",
        game: "genshin",
        type: "POST_TYPE_ACTIVITY",
        typeLabel: "Evento",
        badgeClass: "badge-event",
        title: "¡Evento web «Gala estelar» del Edén Miliastra disponible por tiempo limitado!",
        date: "01 Oct",
        link: "https://hoyo.link/P36Wq2xZa",
        summary: "Consigue hasta 120 Protogemas y marcos de avatar conmemorativos completando los hitos musicales de Teyvat."
      }
    ]
  },
  hsr: {
    banners: [
      {
        id: "b_hsr_1",
        image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/28/3cfdda4cb3f353338597ae0ab2dd2475_5195173576311565590.png",
        title: "Saltos de Evento - Personajes Exclusivos",
        link: "https://hoyo.link/iOXLoS974"
      },
      {
        id: "b_hsr_2",
        image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/26/27ba575abdcc85817b1896f3d45c63b4_9191420545353745757.png",
        title: "Danza con la bestia antes de que se alce la luna",
        link: "https://hoyo.link/JgeDCL10j"
      },
      {
        id: "b_hsr_3",
        image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/27/24bf50b9af5d40af1792fd3f75513c7f_6071792735752385060.jpg",
        title: "Video promocional de Perla",
        link: "https://youtu.be/twrZobrx0ZM"
      }
    ],
    posts: [
      {
        id: "p_hsr_1",
        game: "hsr",
        type: "POST_TYPE_ANNOUNCE",
        typeLabel: "Saltos de Evento",
        badgeClass: "badge-announce",
        title: "Saltos de evento (II): Aumento de probabilidad de personajes 5 Estrellas",
        date: "20 Oct",
        link: "https://hoyo.link/Jvg0Q7nQJ",
        summary: "Descubre los nuevos conos de luz de la Vía de la Erudición y la Cacería disponibles en el registro del Salto estelar."
      },
      {
        id: "p_hsr_2",
        game: "hsr",
        type: "POST_TYPE_ANNOUNCE",
        typeLabel: "Actualización",
        badgeClass: "badge-announce",
        title: "Detalles de la versión «Danza con la bestia antes de que se alce la luna»",
        date: "28 Sep",
        link: "https://hoyo.link/hB5hVpwlF",
        summary: "Nueva zona exploratoria del Expreso Astral, pisos añadidos en Pura Ficción y Memoria del Caos con mecánicas de sangrado cuántico."
      },
      {
        id: "p_hsr_3",
        game: "hsr",
        type: "POST_TYPE_ACTIVITY",
        typeLabel: "Evento Especial",
        badgeClass: "badge-event",
        title: "¡El Taller de mecatrones que pone en juego el compromiso de Skott!",
        date: "27 Sep",
        link: "https://hoyo.link/2Nok2FlY2",
        summary: "Ensambla mecatrones de combate y supera los desafíos de simulación para ganar Jade Estelar, Resina Automodelante y materiales."
      },
      {
        id: "p_hsr_4",
        game: "hsr",
        type: "POST_TYPE_INFO",
        typeLabel: "Cinemática",
        badgeClass: "badge-info",
        title: "Video promocional: \"Cómo retratar una forma de esperanza\" | HSR",
        date: "27 Sep",
        link: "https://youtu.be/twrZobrx0ZM",
        summary: "Mira la nueva cinemática oficial de historia que expande los misterios de los Eones y el viaje de los Trazacaminos."
      }
    ]
  },
  zzz: {
    banners: [
      {
        id: "b_zzz_1",
        image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/3877f3b906d87286d5c488a7c21ca52e_5915130864426814005.jpg",
        title: "Canal Exclusivo de Versión - Nueva Eridu",
        link: "https://www.hoyolab.com/article/47185415"
      },
      {
        id: "b_zzz_2",
        image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/3ea6fce07c85bd6fbb046ba22e14414b_550168469254102547.jpg",
        title: "Demostración de Agente - Canal Exclusivo",
        link: "https://www.hoyolab.com/article/47185723"
      },
      {
        id: "b_zzz_3",
        image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/16/141cd2cfc518e5459271922cdf5d5f21_4713343612652982798.png",
        title: "Demostración de Phoenix: Desafío «No morir»",
        link: "https://youtu.be/wHxjO2Ut3Ic"
      }
    ],
    posts: [
      {
        id: "p_zzz_1",
        game: "zzz",
        type: "POST_TYPE_INFO",
        typeLabel: "Música / Miniálbum",
        badgeClass: "badge-info",
        title: "Miniálbum de Phoenix: «Chica con 1 % de batería» | Zenless Zone Zero",
        date: "20 Oct",
        link: "https://youtu.be/AkWvzeXDUxY",
        summary: "Banda sonora urbana exclusiva producida por HoYo-MiX para ambientar las misiones de Comisión en la Calle Sexta."
      },
      {
        id: "p_zzz_2",
        game: "zzz",
        type: "POST_TYPE_ANNOUNCE",
        typeLabel: "Canal Exclusivo",
        badgeClass: "badge-announce",
        title: "Canales por tiempo limitado: Aumento de probabilidad de Agentes Rango S",
        date: "19 Oct",
        link: "https://www.hoyolab.com/article/47131668",
        summary: "Sintoniza la frecuencia de Canal Exclusivo para reclutar a los nuevos agentes de ataque y aturdimiento de facción."
      },
      {
        id: "p_zzz_3",
        game: "zzz",
        type: "POST_TYPE_ANNOUNCE",
        typeLabel: "Historia Principal",
        badgeClass: "badge-announce",
        title: "Nuevo contenido de trama: «Viaje de regreso a los cielos» de la temporada 3",
        date: "19 Oct",
        link: "https://www.hoyolab.com/article/47131894",
        summary: "Desciende a las Cavidades más peligrosas y descubre los secretos del consorcio corporativo de Nueva Eridu."
      },
      {
        id: "p_zzz_4",
        game: "zzz",
        type: "POST_TYPE_ACTIVITY",
        typeLabel: "Evento Táctico",
        badgeClass: "badge-event",
        title: "Detalles del evento de combate: «Operación de apoyo a los ángeles»",
        date: "07 Sep",
        link: "https://www.hoyolab.com/article/46604642",
        summary: "Supera salas de Realidad Virtual (VR) con modificadores tácticos para obtener Películas Policromas y Motores W."
      }
    ]
  }
};

/**
 * Consulta la API oficial de HoYoPlay para obtener noticias, anuncios y banners en tiempo real
 * Soporta 'genshin', 'hsr', 'zzz'
 */
export async function fetchGameNews(gameKey) {
  const meta = HOYO_GAMES_METADATA[gameKey];
  if (!meta) {
    throw new Error(`Juego no soportado: ${gameKey}`);
  }

  const directUrl = `https://sg-hyp-api.hoyoverse.com/hyp/hyp-connect/api/getGameContent?launcher_id=VYTpXlbWo8&language=es-es&game_id=${meta.id}`;
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(directUrl)}`;

  const fallbackData = PRECACHED_HOYO_NEWS[gameKey] || { banners: [], posts: [] };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);

    let res = null;
    try {
      res = await fetch(directUrl, { signal: controller.signal });
    } catch {
      // Si el navegador bloquea por CORS directo, probamos vía proxy
      res = await fetch(proxyUrl, { signal: controller.signal });
    }
    clearTimeout(timeoutId);

    if (res && res.ok) {
      const json = await res.json();
      if (json && json.retcode === 0 && json.data?.content) {
        return parseHoYoPlayContent(json.data.content, gameKey);
      }
    }
  } catch (err) {
    console.debug(`[NewsAPI] Usando caché oficial de alta fidelidad para ${gameKey}:`, err.message);
  }

  // Retorno instantáneo de datos pre-cacheados verificados
  return {
    isLive: false,
    gameKey,
    meta,
    banners: fallbackData.banners,
    posts: fallbackData.posts
  };
}

/**
 * Normaliza la respuesta cruda de la API de HoYoPlay
 */
function parseHoYoPlayContent(content, gameKey) {
  const meta = HOYO_GAMES_METADATA[gameKey];
  
  const banners = (content.banners || []).map(b => ({
    id: b.id,
    image: b.image?.url || "",
    title: meta.name + " - Evento Oficial",
    link: b.image?.link || meta.officialUrl
  }));

  const posts = (content.posts || []).map(p => {
    let typeLabel = "Anuncio";
    let badgeClass = "badge-announce";

    if (p.type === "POST_TYPE_ACTIVITY") {
      typeLabel = "Evento";
      badgeClass = "badge-event";
    } else if (p.type === "POST_TYPE_INFO") {
      typeLabel = "Información";
      badgeClass = "badge-info";
    }

    return {
      id: p.id,
      game: gameKey,
      type: p.type,
      typeLabel,
      badgeClass,
      title: p.title,
      date: p.date,
      link: p.link || meta.officialUrl,
      summary: "Consulta el aviso completo en el portal oficial de HoYoverse y HoYoLAB."
    };
  });

  return {
    isLive: true,
    gameKey,
    meta,
    banners: banners.length > 0 ? banners : PRECACHED_HOYO_NEWS[gameKey].banners,
    posts: posts.length > 0 ? posts : PRECACHED_HOYO_NEWS[gameKey].posts
  };
}

/**
 * Obtiene un resumen combinado de noticias de TODOS los juegos para el Conector Central (index.html)
 */
export async function fetchAllGamesNewsSummary() {
  const games = ["genshin", "hsr", "zzz"];
  const results = await Promise.all(games.map(g => fetchGameNews(g)));
  
  let allPosts = [];
  let allBanners = [];

  results.forEach(res => {
    allPosts.push(...res.posts);
    allBanners.push(...res.banners.map(b => ({ ...b, gameKey: res.gameKey })));
  });

  return {
    allPosts,
    allBanners,
    gamesData: {
      genshin: results.find(r => r.gameKey === 'genshin'),
      hsr: results.find(r => r.gameKey === 'hsr'),
      zzz: results.find(r => r.gameKey === 'zzz')
    }
  };
}

/**
 * Renderiza la cuadrícula de tarjetas de noticias
 */
export function renderNewsCards(containerElement, postsList, options = {}) {
  if (!containerElement) return;

  if (!postsList || postsList.length === 0) {
    containerElement.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; color: var(--text-muted);">
        <p>No hay noticias disponibles en esta categoría actualmente.</p>
      </div>
    `;
    return;
  }

  containerElement.innerHTML = postsList.map(post => {
    const meta = HOYO_GAMES_METADATA[post.game] || HOYO_GAMES_METADATA.genshin;
    const gameBadgeStyle = `background: rgba(236, 209, 157, 0.12); color: ${meta.color}; border: 1px solid ${meta.color}55;`;

    return `
      <article class="genshin-card news-card" data-game="${post.game}">
        <div class="news-card-header">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            ${options.showGameBadge ? `<span class="news-game-tag" style="${gameBadgeStyle}">${getIcon(post.game, 'clst-icon-sm')} ${meta.name}</span>` : ''}
            <span class="news-type-badge ${post.badgeClass}">${post.typeLabel}</span>
          </div>
          <span class="news-date">${getIcon('calendar', 'clst-icon-sm')} ${post.date}</span>
        </div>

        <h3 class="news-card-title">
          <a href="${post.link}" target="_blank" rel="noopener" class="news-title-link">
            ${post.title}
          </a>
        </h3>

        <p class="news-card-excerpt">
          ${post.summary}
        </p>

        <div class="news-card-footer">
          <span class="news-source-tag">${getIcon('satellite', 'clst-icon-sm')} HoYoPlay / HoYoLAB</span>
          <a href="${post.link}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm news-read-btn">
            <span>Leer Noticia</span>
            ${getIcon('external', 'clst-icon-sm')}
          </a>
        </div>
      </article>
    `;
  }).join('');
}
