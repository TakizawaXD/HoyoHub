/**
 * Módulo de Carrusel Interactivo de Actualizaciones Destacadas
 * El Gremio del Viajero - Sistema Vivo de HoYoverse
 * Completamente interactivo, con 8 diapositivas ricas en contenido y sin bordes
 */
import { getIcon } from './icons.js';
import { playCelestialChime } from './effects.js';

export const MAJOR_UPDATES_DATA = [
  {
    id: "update-genshin-natlan",
    game: "genshin",
    gameName: "Genshin Impact",
    versionBadge: "Versión 5.x Natlan",
    statusText: "Expansión en Vivo",
    title: "El Reino del Fuego & Los Guerreros Saurios de Natlan",
    subtitle: "Domina las bendiciones del Espíritu Nocturno, desbloquea los 6 santuarios de la noche y prepárate para la llegada triunfal de Mavuika y Xilonen a Teyvat con mecánicas únicas de exploración.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/9864ca4e249b1a698051e8370e711e57_2843160042726570954.jpg",
    metaChips: [
      { label: "Recompensa", value: "+2400 Protogemas" },
      { label: "Versión", value: "Natlan 5.x" },
      { label: "Nivel", value: "AR 45+" },
      { label: "Duración", value: "Fase Activa" }
    ],
    features: [
      { icon: "gem", text: "2400 Protogemas en exploración y misiones de Arconte Capítulo V" },
      { icon: "swords", text: "Espiral del Abismo 12-3: Bendiciones de Vaporizado y Quemadura" },
      { icon: "star", text: "Banners 5★ Destacados: Mavuika (Pyro Mandoble) y Xilonen (Geo Espada)" },
      { icon: "book", text: "Nuevos Dominios: Pergamino del Héroe y Obsidiana Codificada" },
      { icon: "shield", text: "Jefes Saurios Volcánicos y Materiales de Ascensión Semanales" },
      { icon: "users", text: "3 Builds Meta por Personaje disponibles en El Gremio del Viajero" }
    ],
    primaryAction: {
      text: "Ver 3 Builds de Genshin",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "genshin"
    },
    secondaryAction: {
      text: "Entrar al Portal de Genshin",
      url: "genshin.html",
      icon: "genshin"
    },
    glowColor: "rgba(236, 209, 157, 0.28)"
  },
  {
    id: "update-hsr-amphoreus",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    versionBadge: "Versión 2.7 / 3.0",
    statusText: "Nuevo Arco Astral",
    title: "El Cántico del Juicio Astral & La Ruta hacia Amphoreus",
    subtitle: "El Expreso Astral concluye el viaje en Colonipenal y abre las coordenadas hacia Amphoreus, el mundo eterno sin eones, con el debut de Sunday y Fugue en formaciones de alta sinergia.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/28/3cfdda4cb3f353338597ae0ab2dd2475_5195173576311565590.png",
    metaChips: [
      { label: "Recompensa", value: "+3200 Jade Estelar" },
      { label: "Vía", value: "Armonía / Memoria" },
      { label: "Endgame", value: "MOC 12 & Ficción" },
      { label: "Fase", value: "Salto Activo" }
    ],
    features: [
      { icon: "gem", text: "3200 Jade Estelar + 10 Pases Especiales del Expreso Astral en correo" },
      { icon: "star", text: "Salto de Evento 5★: Sunday (Armonía) y Fugue (Nihilidad Fuego)" },
      { icon: "hsr", text: "Memoria del Caos 12 & Pura Ficción: Bonificación de Ataques Adicionales" },
      { icon: "sparkle", text: "Nueva Vía de la Memoria y Servidores de la Eternidad" },
      { icon: "disc", text: "Conos de Luz Insignia: 'El Juicio de los Cielos' y 'Noche de Paz'" },
      { icon: "users", text: "3 Builds Meta completas para Acheron, Feixiao y Firefly" }
    ],
    primaryAction: {
      text: "Ver 3 Builds de Star Rail",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "hsr"
    },
    secondaryAction: {
      text: "Entrar al Expreso Astral",
      url: "hsr.html",
      icon: "hsr"
    },
    glowColor: "rgba(105, 120, 255, 0.32)"
  },
  {
    id: "update-zzz-section6",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    versionBadge: "Versión 1.3 / 1.4",
    statusText: "Canal Rango S Activo",
    title: "Venganza Virtual & El Filo de Escarcha de la Sección 6",
    subtitle: "Penetra en los Huecos de alta contaminación con la comandante Hoshimi Miyabi y Yanagi, ejecutando devastadoras anomalías de Escarcha y Choque polarizado con tiempos récord.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/3877f3b906d87286d5c488a7c21ca52e_5915130864426814005.jpg",
    metaChips: [
      { label: "Recompensa", value: "+2800 Películas" },
      { label: "Rango", value: "Agentes S de Asalto" },
      { label: "Shiyu", value: "Piso Crítico 17 S" },
      { label: "Estado", value: "Sintonización Activa" }
    ],
    features: [
      { icon: "gem", text: "2800 Películas Policromas + 10 Cintas de Cifrado Maestro gratuitas" },
      { icon: "star", text: "Canal Rango S: Hoshimi Miyabi (Escarcha) y Tsukishiro Yanagi (Eléctrico)" },
      { icon: "swords", text: "Defensa Shiyu Crítica: Desafíos límite con multiplicadores de Trastorno" },
      { icon: "disc", text: "Nuevos Discos de Tracción: Banda del Caos & Metal de la Polaridad" },
      { icon: "film", text: "Modo Cero Hueco Extremo: Resonancias etéreas y Bangbú Rango S" },
      { icon: "users", text: "3 Builds Meta para Ellen Joe, Jane Doe y Hoshimi Miyabi" }
    ],
    primaryAction: {
      text: "Ver 3 Builds de ZZZ",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "zzz"
    },
    secondaryAction: {
      text: "Entrar a Nueva Eridu",
      url: "zzz.html",
      icon: "zzz"
    },
    glowColor: "rgba(232, 83, 205, 0.32)"
  },
  {
    id: "update-abyss-guide",
    game: "genshin",
    gameName: "Genshin Impact",
    versionBadge: "Meta & Rotaciones",
    statusText: "36 Estrellas Garantizadas",
    title: "Espiral del Abismo 12-3: Récords de Sala y Rotaciones",
    subtitle: "Guía táctica para superar el Abismo 12 con 36 estrellas. Composiciones optimizadas para Neuvillette, Furina y Raiden Shogun con cálculo exacto de recarga de energía y daño continuo.",
    image: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/9b33a5b6d926613317c2f82ba4e6dafc_813133860086300465.png",
    metaChips: [
      { label: "Recompensa", value: "800 Protogemas Quincenales" },
      { label: "Rotación", value: "Luna Nueva" },
      { label: "Estrellas", value: "36 / 36" },
      { label: "Sinergia", value: "Hiperbloom / Mono Hydro" }
    ],
    features: [
      { icon: "gem", text: "800 Protogemas quincenales aseguradas con rotaciones limpias" },
      { icon: "swords", text: "Sala 1: Bosses Saurios con mecánicas de absorción Pyro" },
      { icon: "shield", text: "Sala 2: Olas de Élite de Fatui con reducción de resistencia Hydro" },
      { icon: "clock", text: "Rotaciones de 20 segundos sin tiempos muertos de recarga" },
      { icon: "copy", text: "Copia composiciones completas en 1 clic al portapapeles" },
      { icon: "users", text: "Asistencia táctica personalizada en el Discord de El Gremio del Viajero" }
    ],
    primaryAction: {
      text: "Abrir Builds de Abismo",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "genshin"
    },
    secondaryAction: {
      text: "Calendario de Farmeo",
      url: "genshin.html#genshin-farming",
      icon: "book"
    },
    glowColor: "rgba(255, 104, 71, 0.3)"
  },
  {
    id: "update-hsr-endgame",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    versionBadge: "Endgame & Caos 12",
    statusText: "Estrategias de Ciclo Cero",
    title: "Sombra Apocalíptica & Caos 12: Dominio de Ruptura y FUA",
    subtitle: "Maximiza el daño de superruptura de Firefly con el Trazacaminos de la Armonía y explota los ataques adicionales continuos de Feixiao y Robin en ciclos cero sin penalizaciones.",
    image: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/121882/3e5606473551d7c31e67e35b71db3f05_2224883492716301323.png",
    metaChips: [
      { label: "Recompensa", value: "800 Jade Estelar" },
      { label: "Ciclos", value: "0 - 1 Ciclos" },
      { label: "Meta", value: "Superruptura / FUA" },
      { label: "Dificultad", value: "Máxima Élite" }
    ],
    features: [
      { icon: "gem", text: "800 Jade Estelar en Sombra Apocalíptica y Salón del Olvido" },
      { icon: "sword", text: "Firefly Superbreak: Daño absoluto que ignora debilidad con Ruan Mei" },
      { icon: "shield", text: "Acheron Nihilidad: Carga de 9 acumulaciones sin consumo excesivo de SP" },
      { icon: "sparkle", text: "Feixiao FUA Quartet: Coordinación instantánea con Aventurine y Robin" },
      { icon: "disc", text: "Comparativa de Conos de Luz 4★ F2P frente a conos 5★ insignia" },
      { icon: "users", text: "Inspección de artefactos por UID en vivo con Enka.Network" }
    ],
    primaryAction: {
      text: "Ver Builds de Star Rail",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "hsr"
    },
    secondaryAction: {
      text: "Saltos Activos",
      url: "hsr.html#hsr-warps",
      icon: "clock"
    },
    glowColor: "rgba(186, 140, 255, 0.35)"
  },
  {
    id: "update-zzz-hollow",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    versionBadge: "Defensa Shiyu Crítica",
    statusText: "Zona Crítica Nivel 17 S",
    title: "Cero Hueco y Shiyu Defense: Piso Crítico y Rutas de Discos",
    subtitle: "Récords de velocidad en Shiyu Defense con multiplicadores de Aturdimiento del 200%. Domina los parrys perfectos de apoyo defensivo y la gestión eficiente de recursos de éter.",
    image: "https://fastcdn.hoyoverse.com/content-v2/nap/126955/08f7bfa6d649ae130b92db21ec18991d_4721111667104618210.png",
    metaChips: [
      { label: "Recompensa", value: "720 Policromos Quincenales" },
      { label: "Dificultad", value: "Nivel Crítico 17 S" },
      { label: "Mecánica", value: "Aturdimiento 200%" },
      { label: "Bangbú", value: "Rango S" }
    ],
    features: [
      { icon: "gem", text: "720 Películas Policromas quincenales en Zona Crítica" },
      { icon: "sword", text: "Ellen Joe Sharknado: Daño de Hielo con multiplicadores críticos récord" },
      { icon: "disc", text: "Jane Doe Asalto: Acumulación instantánea de Pasión Fanática" },
      { icon: "shield", text: "Parrys de Apoyo Defensivo con rotación de agente sin penalización" },
      { icon: "clock", text: "Ruta diaria de Batería: Optimización de motores W y pistas de audio" },
      { icon: "users", text: "3 Builds Meta completas de ZZZ en nuestro módulo interactivo" }
    ],
    primaryAction: {
      text: "Ver Builds de ZZZ",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "zzz"
    },
    secondaryAction: {
      text: "Códigos de ZZZ",
      url: "zzz.html#zzz-codes",
      icon: "codes"
    },
    glowColor: "rgba(105, 224, 246, 0.32)"
  },
  {
    id: "update-hoyo-vault",
    game: "genshin",
    gameName: "Bóveda HoYoverse",
    versionBadge: "Códigos Verificados",
    statusText: "+15 Códigos Activos",
    title: "Bóveda Central: +15 Códigos de Regalo Verificados Hoy",
    subtitle: "Consigue tiradas gratuitas inmediatas en Genshin Impact, Honkai: Star Rail y Zenless Zone Zero con copia instantánea en un solo clic y enlace directo al canje oficial de HoYoverse.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/12/544bf0d17e4570f886fd1b731a3274da_5003849349598617917.webp",
    metaChips: [
      { label: "Códigos Activos", value: "15 Códigos" },
      { label: "Recompensa Global", value: "+1200 Gemas" },
      { label: "Estado", value: "Verificado Hoy" },
      { label: "Copia", value: "1 Clic" }
    ],
    features: [
      { icon: "checkCircle", text: "Genshin Impact: 5 Códigos activos de protogemas, mora e ingenio" },
      { icon: "checkCircle", text: "Honkai: Star Rail: 5 Códigos de Jade Estelar y créditos de viaje" },
      { icon: "checkCircle", text: "Zenless Zone Zero: 5 Códigos de Policromas y materiales de Bangbú" },
      { icon: "copy", text: "Botón de copia rápida con retroalimentación sonora y visual" },
      { icon: "external", text: "Redirección a páginas oficiales de canje de HoYoverse" },
      { icon: "clock", text: "Monitorización continua de caducidad por la API HoYoPlay" }
    ],
    primaryAction: {
      text: "Ir a la Bóveda de Códigos",
      url: "#hoyo-hub-section",
      icon: "codes"
    },
    secondaryAction: {
      text: "Explorar Portales",
      url: "#portals-section",
      icon: "swords"
    },
    glowColor: "rgba(105, 224, 246, 0.3)"
  },
  {
    id: "update-clan-community",
    game: "genshin",
    gameName: "El Gremio del Viajero",
    versionBadge: "Comunidad Oficial",
    statusText: "Reclutamiento Abierto",
    title: "El Gremio del Viajero: Cooperativo Semanal & Pruebas de Daño",
    subtitle: "Únete a la mayor fraternidad de jugadores hispanohablantes de HoYoverse. Farmeo guiado en cooperativo, revisión personalizada de artefactos y eventos de velocidad en Discord.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/21/94b346207176750fb5ff12cd0bd8d108_4537896671082030891.webp",
    metaChips: [
      { label: "Miembros", value: "48 / 50 Viajeros" },
      { label: "Servidores", value: "América / Europa" },
      { label: "Nivel Clan", value: "Nivel 10 Élite" },
      { label: "Discord", value: "Voz & Guías 24/7" }
    ],
    features: [
      { icon: "users", text: "Canales de voz activos para dominios de artefactos y jefes semanales" },
      { icon: "sword", text: "Canal exclusivo de pruebas de daño y optimización de 3 builds meta" },
      { icon: "calendar", text: "Torneos amistosos de velocidad en Abismo 12-3 y Shiyu Defense" },
      { icon: "gem", text: "Sorteos mensuales de Bendiciones Lunares y Pases del Expreso" },
      { icon: "shield", text: "Asistencia para jugadores principiantes y veteranos del endgame" },
      { icon: "checkCircle", text: "Bot oficial de recordatorios de reinicio diario a las 04:00 AM" }
    ],
    primaryAction: {
      text: "Unirse al Clan en Discord",
      url: "https://discord.gg/bYSGHFWvhe",
      icon: "discord"
    },
    secondaryAction: {
      text: "Ver Compendio de 3 Builds",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "all"
    },
    glowColor: "rgba(236, 209, 157, 0.35)"
  }
];

export const GENSHIN_CAROUSEL_DATA = [
  {
    id: "g-update-1",
    game: "genshin",
    gameName: "Genshin Impact",
    versionBadge: "Versión 5.2 / 5.3",
    statusText: "Expansión en Vivo · Natlan",
    title: "El Reino del Fuego y los Dragones Saurios",
    subtitle: "Explora la nueva región volcánica de Natlan, domina las bendiciones del Espíritu Nocturno y desentraña los misterios de Ochkanatlan.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/9864ca4e249b1a698051e8370e711e57_2843160042726570954.jpg",
    metaChips: [
      { label: "Recompensa", value: "+2400 Protogemas" },
      { label: "Región", value: "Natlan 5.x" },
      { label: "Nivel", value: "AR 45+" },
      { label: "Misión", value: "Capítulo V" }
    ],
    features: [
      { icon: "gem", text: "2400 Protogemas en logros, exploración y cofres saurios" },
      { icon: "swords", text: "Nuevos Dominios de Artefactos: Pergamino del Héroe de la Ciudadela" },
      { icon: "calendar", text: "Misión de Arconte Capítulo V: El Choque de Voluntades Ígneas" },
      { icon: "star", text: "Mavuika y Xilonen con mecánicas exclusivas de combate saurio" },
      { icon: "shield", text: "Jefes Semanales: Dragón Tirano del Fuego y Señor del Abismo" },
      { icon: "users", text: "3 Builds Meta por Personaje en El Gremio del Viajero" }
    ],
    primaryAction: {
      text: "Ver 3 Builds de Genshin",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "genshin"
    },
    secondaryAction: {
      text: "Calendario de Farmeo",
      url: "#genshin-farming",
      icon: "book"
    },
    glowColor: "rgba(236, 209, 157, 0.28)"
  },
  {
    id: "g-update-2",
    game: "genshin",
    gameName: "Genshin Impact",
    versionBadge: "Banners Activos",
    statusText: "Deseos Destacados 5★",
    title: "La Llama Solar: Mavuika & Xilonen",
    subtitle: "Conquista las profundidades del Abismo 12 con los personajes más determinantes del meta actual de Teyvat y sus armas insignia.",
    image: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/9b33a5b6d926613317c2f82ba4e6dafc_813133860086300465.png",
    metaChips: [
      { label: "Banners 5★", value: "Mavuika / Xilonen" },
      { label: "Armas", value: "Mandoble Solar 5★" },
      { label: "Duración", value: "14 Días Restantes" },
      { label: "Pity", value: "Garantizado 90" }
    ],
    features: [
      { icon: "star", text: "Mandoble Insignia Solar 5★ con aumento crítico masivo" },
      { icon: "sparkle", text: "Rerun de Soberano Hydro Neuvillette y Furina Arconte Hydro" },
      { icon: "clock", text: "14 Días Restantes de la fase actual de deseos de evento" },
      { icon: "gem", text: "Evento de prueba de personajes con 80 Protogemas directas" },
      { icon: "swords", text: "Sinergia comprobada para equipos de Reacción Vaporizado" },
      { icon: "users", text: "Revisión de tiradas en nuestro canal de Discord oficial" }
    ],
    primaryAction: {
      text: "Ver Builds de Mavuika",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "genshin"
    },
    secondaryAction: {
      text: "Canjear Códigos",
      url: "#genshin-codes",
      icon: "codes"
    },
    glowColor: "rgba(255, 104, 71, 0.3)"
  },
  {
    id: "g-update-3",
    game: "genshin",
    gameName: "Genshin Impact",
    versionBadge: "El Gremio del Viajero",
    statusText: "Optimización de Recursos",
    title: "Rutas de Farmeo y Talentos Semanales",
    subtitle: "Aprovecha al máximo cada punto de Resina Original con el calendario automatizado por día de la semana y cálculo de talentos.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/12/544bf0d17e4570f886fd1b731a3274da_5003849349598617917.webp",
    metaChips: [
      { label: "Resina Máx", value: "200 Puntos" },
      { label: "Reinicio", value: "04:00 AM" },
      { label: "Cooperativo", value: "Habilitado" },
      { label: "Región", value: "Teyvat Global" }
    ],
    features: [
      { icon: "checkCircle", text: "Materiales de talento sincronizados según el día de la semana" },
      { icon: "users", text: "Sesiones de farmeo cooperativo guiado en nuestro Discord" },
      { icon: "gem", text: "Protogemas gratuitas mediante el canje de códigos verificados" },
      { icon: "book", text: "Cálculo de libros de talento para ascender a nivel 90 y talentos 10/10/10" },
      { icon: "shield", text: "Guía de dominios de armas para optimizar el gasto de resina concentrada" },
      { icon: "copy", text: "UID pública de miembros para visitas y ayuda en el mundo" }
    ],
    primaryAction: {
      text: "Ver Calendario Hoy",
      url: "#genshin-farming",
      icon: "book"
    },
    secondaryAction: {
      text: "Canjear Códigos",
      url: "#genshin-codes",
      icon: "codes"
    },
    glowColor: "rgba(105, 224, 246, 0.28)"
  }
];

export const HSR_CAROUSEL_DATA = [
  {
    id: "hsr-update-1",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    versionBadge: "Versión 2.7 / 3.0",
    statusText: "Nuevo Arco Astral",
    title: "El Cántico del Juicio Astral: Sunday & Fugue",
    subtitle: "El clímax de la sinfonía de Colonipenal abre las puertas al siguiente gran viaje intergaláctico hacia el mundo mítico de Amphoreus.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/28/3cfdda4cb3f353338597ae0ab2dd2475_5195173576311565590.png",
    metaChips: [
      { label: "Recompensa", value: "+3200 Jade" },
      { label: "Pases Especiales", value: "10 Pases" },
      { label: "Vía", value: "Armonía / Memoria" },
      { label: "Destino", value: "Amphoreus" }
    ],
    features: [
      { icon: "gem", text: "3200 Jade Estelar + 10 Pases Especiales del Expreso Astral en correo" },
      { icon: "hsr", text: "Salto Doble 5★: Sunday (Armonía) y Fugue (Nihilidad Fuego)" },
      { icon: "sparkle", text: "Nueva Vía de la Memoria y mecánicas de invocación espiritual" },
      { icon: "disc", text: "Conos de Luz Insignia 5★ con recuperación de puntos de habilidad" },
      { icon: "swords", text: "Memoria del Caos 12 con bonificación a ataques coordinados" },
      { icon: "users", text: "3 Builds Meta por Personaje en El Gremio del Viajero" }
    ],
    primaryAction: {
      text: "Ver 3 Builds de HSR",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "hsr"
    },
    secondaryAction: {
      text: "Ver Saltos de Banner",
      url: "#hsr-warps",
      icon: "clock"
    },
    glowColor: "rgba(105, 120, 255, 0.35)"
  },
  {
    id: "hsr-update-2",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    versionBadge: "Meta MOC & Ficción",
    statusText: "36 Estrellas Garantizadas",
    title: "Dominio FUA & Nihilidad: Feixiao y Acheron",
    subtitle: "Estrategias de ciclo cero para la Memoria del Caos 12 con las formaciones de ataques adicionales más demoledoras del clan.",
    image: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/121882/3e5606473551d7c31e67e35b71db3f05_2224883492716301323.png",
    metaChips: [
      { label: "Récord", value: "0 Ciclos" },
      { label: "MOC", value: "Piso 12" },
      { label: "Sinergia", value: "Feixiao + Robin" },
      { label: "Acheron", value: "9 Cargas" }
    ],
    features: [
      { icon: "sword", text: "Feixiao FUA Quartet: Coordinación letal con Topaz, Aventurine y Robin" },
      { icon: "shield", text: "Acheron Slashed Dream: Carga de definitiva sin depender de energía" },
      { icon: "clock", text: "Turnos adelantados al 100% mediante la habilidad definitiva de Robin" },
      { icon: "disc", text: "Conjunto de Reliquias: Capitán Valeroso y Duran Dinastía de Lobos" },
      { icon: "gem", text: "800 Jade Estelar en Salón del Olvido y Pura Ficción 4" },
      { icon: "users", text: "1-clic para copiar la composición a tu portapapeles" }
    ],
    primaryAction: {
      text: "Ver Builds de Acheron",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "hsr"
    },
    secondaryAction: {
      text: "Códigos de Jade",
      url: "#hsr-codes",
      icon: "codes"
    },
    glowColor: "rgba(186, 140, 255, 0.35)"
  },
  {
    id: "hsr-update-3",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    versionBadge: "Universo Simulado",
    statusText: "Expansión de Mundos",
    title: "El Desastre del Enjambre & Oro y Maquinaria",
    subtitle: "Consigue todas las bendiciones de Eones, fragmentos cósmicos y conéctate con los veteranos de El Gremio del Viajero.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/12/544bf0d17e4570f886fd1b731a3274da_5003849349598617917.webp",
    metaChips: [
      { label: "Jades Acumulables", value: "3000+ Jades" },
      { label: "Vías Eones", value: "8 Vías" },
      { label: "Nivel", value: "Conundrum 12" },
      { label: "UID", value: "Enka Live" }
    ],
    features: [
      { icon: "gem", text: "3000+ Jades acumulables completando el árbol de secretos y bendiciones" },
      { icon: "users", text: "Comunidad hispanohablante activa para pruebas y recomendaciones" },
      { icon: "copy", text: "Sincronización de UID con Enka.Network para ver reliquias equipadas" },
      { icon: "star", text: "Eones recomendados: Erudición para Ultimate spam y Nihilidad para DOTs" },
      { icon: "shield", text: "Estrategias de supervivencia contra jefes de tercer plano" },
      { icon: "checkCircle", text: "Canje inmediato de códigos activos para pases del tren astral" }
    ],
    primaryAction: {
      text: "Consultar UID en Vivo",
      url: "#hsr-uid-search",
      icon: "search"
    },
    secondaryAction: {
      text: "Canjear Códigos HSR",
      url: "#hsr-codes",
      icon: "codes"
    },
    glowColor: "rgba(105, 224, 246, 0.3)"
  }
];

export const ZZZ_CAROUSEL_DATA = [
  {
    id: "zzz-update-1",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    versionBadge: "Versión 1.3 / 1.4",
    statusText: "Sección 6 Desplegada",
    title: "Filo de Escarcha: Hoshimi Miyabi y Yanagi",
    subtitle: "La esperada comandante de la Sección 6 desenvaina su katana en Nueva Eridu con mecánicas revolucionarias de Trastorno y Anomalía Cortante.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/3877f3b906d87286d5c488a7c21ca52e_5915130864426814005.jpg",
    metaChips: [
      { label: "Policromos", value: "+2800 Películas" },
      { label: "Cintas", value: "10 Cifrados" },
      { label: "Atributo", value: "Escarcha / Eléctrico" },
      { label: "Facción", value: "Sección 6" }
    ],
    features: [
      { icon: "gem", text: "2800 Películas Policromas + 10 Cintas de Cifrado Maestro gratuitas" },
      { icon: "disc", text: "Canal Exclusivo de Rango S: Hoshimi Miyabi y Tsukishiro Yanagi" },
      { icon: "sword", text: "Sable de Escarcha Insignia con escalado de daño de corte" },
      { icon: "shield", text: "Mecánica de Trastorno Rápido combinando Escarcha y Choque" },
      { icon: "clock", text: "21 Días de canal exclusivo con pity asegurado a las 90 tiradas" },
      { icon: "users", text: "3 Builds Meta completas de ZZZ disponibles en el compendio" }
    ],
    primaryAction: {
      text: "Ver 3 Builds de ZZZ",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "zzz"
    },
    secondaryAction: {
      text: "Canales de Agente",
      url: "#zzz-channels",
      icon: "film"
    },
    glowColor: "rgba(232, 83, 205, 0.35)"
  },
  {
    id: "zzz-update-2",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    versionBadge: "Defensa Shiyu",
    statusText: "Zona Crítica Nivel 17 S",
    title: "Asalto a los Huecos: Ellen Joe & Jane Doe",
    subtitle: "Récords de velocidad en el Shiyu Defense con las configuraciones de Ataque y Anomalía más letales de El Gremio del Viajero.",
    image: "https://fastcdn.hoyoverse.com/content-v2/nap/126955/08f7bfa6d649ae130b92db21ec18991d_4721111667104618210.png",
    metaChips: [
      { label: "Recompensa", value: "720 Policromos" },
      { label: "Rango", value: "Calificación S" },
      { label: "Ellen Joe", value: "Hielo Crítico" },
      { label: "Jane Doe", value: "Asalto Anómalo" }
    ],
    features: [
      { icon: "star", text: "720 Películas Policromas quincenales alcanzando calificación S" },
      { icon: "sparkle", text: "Trastorno de Choque Crítico con daño que funde barras etéreas" },
      { icon: "disc", text: "Discos de Tracción IV-VI Rango S optimizados en ranuras de impacto" },
      { icon: "sword", text: "Ellen Joe: Rotación de Tijera Helada con recarga instantánea" },
      { icon: "shield", text: "Jane Doe: Acumulación de Pasión Fanática en esquivas perfectas" },
      { icon: "users", text: "Compara tu tiempo y rotación en nuestro Discord oficial" }
    ],
    primaryAction: {
      text: "Ver Builds de Ellen & Jane",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "zzz"
    },
    secondaryAction: {
      text: "Códigos de Policromo",
      url: "#zzz-codes",
      icon: "codes"
    },
    glowColor: "rgba(105, 224, 246, 0.3)"
  },
  {
    id: "zzz-update-3",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    versionBadge: "HoYo-MiX EP",
    statusText: "Banda Sonora Original",
    title: "Frecuencias Urbanas & Cintas de Sintonización",
    subtitle: "Disfruta de las pistas musicales de Nueva Eridu y canjea cintas maestras gratuitas para asegurar a tus agentes favoritos.",
    image: "https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/12/544bf0d17e4570f886fd1b731a3274da_5003849349598617917.webp",
    metaChips: [
      { label: "Álbum", value: "HoYo-MiX" },
      { label: "Códigos", value: "5 Activos Hoy" },
      { label: "Bangbú", value: "Gratuito" },
      { label: "Comunidad", value: "Proxies Hispana" }
    ],
    features: [
      { icon: "checkCircle", text: "Códigos de regalo verificados al 100% con películas y dennies" },
      { icon: "users", text: "Comunidad de Proxies para optimizar rutas de farmeo diario" },
      { icon: "codes", text: "Copia inmediata en un solo clic con retroalimentación sonora" },
      { icon: "disc", text: "Pistas exclusivas de batalla producidas por el estudio de sonido HoYo-MiX" },
      { icon: "gem", text: "Monitoreo continuo de nuevos cupones de regalo de Nueva Eridu" },
      { icon: "shield", text: "Guía de sinergias para Bangbús de Rango S recomendados" }
    ],
    primaryAction: {
      text: "Canjear Códigos ZZZ",
      url: "#zzz-codes",
      icon: "codes"
    },
    secondaryAction: {
      text: "Ver 3 Builds de ZZZ",
      url: "#",
      icon: "sword",
      dataOpenBuilds: true,
      gameFilter: "zzz"
    },
    glowColor: "rgba(255, 133, 203, 0.3)"
  }
];

export class UpdatesCarousel {
  constructor(containerId = 'updates-carousel-root', options = {}) {
    this.container = document.getElementById(containerId);
    this.items = options.items || MAJOR_UPDATES_DATA;
    this.duration = options.duration || 6500; // ms por diapositiva
    this.currentIndex = 0;
    this.timer = null;
    this.isPlaying = true;
    this.touchStartX = 0;
    this.touchEndX = 0;

    if (this.container) {
      this.init();
    }
  }

  init() {
    this.renderSkeleton();
    this.setupEvents();
    this.goToSlide(0);
  }

  renderSkeleton() {
    const total = this.items.length;
    this.container.innerHTML = `
      <div class="carousel-ambient-glow" id="carousel-glow"></div>

      <div class="carousel-track-wrapper" id="carousel-track">
        ${this.items.map((item, idx) => `
          <article class="carousel-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="${item.title}">
            <img src="${item.image}" alt="${item.title}" class="carousel-slide-bg" loading="${idx === 0 ? 'eager' : 'lazy'}" decoding="async" />
            <div class="carousel-slide-overlay"></div>

            <div class="carousel-content-box">
              <div class="carousel-meta-row">
                <span class="carousel-game-badge ${item.game}">
                  ${getIcon(item.game, 'clst-icon-sm')}
                  <span>${item.gameName}</span>
                </span>
                <span class="carousel-version-pill">
                  ${item.versionBadge}
                </span>
                <span class="carousel-status-pill">
                  <span class="carousel-live-dot"></span>
                  <span>${item.statusText}</span>
                </span>
              </div>

              <h2 class="carousel-title">${item.title}</h2>
              <p class="carousel-subtitle">${item.subtitle}</p>

              ${item.metaChips && item.metaChips.length ? `
                <div class="carousel-meta-chips">
                  ${item.metaChips.map(mc => `
                    <div class="carousel-chip-item">
                      <span class="chip-label">${mc.label}:</span>
                      <span class="chip-value">${mc.value}</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <div class="carousel-features-grid">
                ${item.features.map(f => `
                  <div class="carousel-feature-tag">
                    ${getIcon(f.icon, 'clst-icon-sm clst-icon-gold')}
                    <span>${f.text}</span>
                  </div>
                `).join('')}
              </div>

              <div class="carousel-actions">
                <a href="${item.primaryAction.url}" class="btn btn-primary" ${item.primaryAction.dataOpenBuilds ? `data-open-builds data-game="${item.primaryAction.gameFilter || item.game}"` : ''}>
                  ${getIcon(item.primaryAction.icon, 'clst-icon-sm')}
                  <span>${item.primaryAction.text}</span>
                </a>
                <a href="${item.secondaryAction.url}" class="btn btn-secondary" ${item.secondaryAction.dataOpenBuilds ? `data-open-builds data-game="${item.secondaryAction.gameFilter || item.game}"` : ''}>
                  ${getIcon(item.secondaryAction.icon, 'clst-icon-sm')}
                  <span>${item.secondaryAction.text}</span>
                </a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>

      <!-- Botones de Navegación -->
      <button class="carousel-nav-btn prev" id="carousel-prev-btn" aria-label="Diapositiva anterior">
        ${getIcon('chevronLeft', 'clst-icon-md')}
      </button>
      <button class="carousel-nav-btn next" id="carousel-next-btn" aria-label="Siguiente diapositiva">
        ${getIcon('chevronRight', 'clst-icon-md')}
      </button>

      <!-- Barra de Paginación e Indicadores -->
      <div class="carousel-footer-bar">
        <div class="carousel-dots" id="carousel-dots-container">
          ${this.items.map((_, i) => `
            <div class="carousel-dot ${i === 0 ? 'active' : ''}" data-dot-idx="${i}" role="button" aria-label="Ir a diapositiva ${i + 1}">
              <div class="carousel-dot-progress"></div>
            </div>
          `).join('')}
        </div>

        <span class="carousel-counter" id="carousel-counter-text">
          01 / ${total < 10 ? '0' + total : total}
        </span>

        <button class="carousel-play-toggle" id="carousel-play-toggle" title="Pausar o Reanudar auto-reproducción">
          ${getIcon('sparkles', 'clst-icon-sm clst-icon-gold')}
        </button>
      </div>
    `;
  }

  setupEvents() {
    const prevBtn = this.container.querySelector('#carousel-prev-btn');
    const nextBtn = this.container.querySelector('#carousel-next-btn');
    const dotsContainer = this.container.querySelector('#carousel-dots-container');
    const playToggle = this.container.querySelector('#carousel-play-toggle');
    const track = this.container.querySelector('#carousel-track');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.prev();
        this.triggerChime();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.next();
        this.triggerChime();
      });
    }

    if (dotsContainer) {
      dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.carousel-dot');
        if (dot) {
          const idx = parseInt(dot.getAttribute('data-dot-idx'), 10);
          this.goToSlide(idx);
          this.triggerChime();
        }
      });
    }

    if (playToggle) {
      playToggle.addEventListener('click', () => {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
          this.startAutoplay();
          playToggle.style.opacity = '1';
        } else {
          this.stopAutoplay();
          playToggle.style.opacity = '0.5';
        }
      });
    }

    // Pausar en hover para leer con comodidad
    this.container.addEventListener('mouseenter', () => {
      if (this.isPlaying) this.stopAutoplay(false);
    });

    this.container.addEventListener('mouseleave', () => {
      if (this.isPlaying) this.startAutoplay();
    });

    // Gestos táctiles Swipe
    if (track) {
      track.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      track.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      }, { passive: true });
    }

    // Navegación con teclado accesible
    this.container.setAttribute('tabindex', '0');
    this.container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prev();
      } else if (e.key === 'ArrowRight') {
        this.next();
      }
    });
  }

  handleSwipe() {
    const threshold = 40;
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }

  goToSlide(index) {
    const total = this.items.length;
    this.currentIndex = (index + total) % total;

    const slides = this.container.querySelectorAll('.carousel-slide');
    const dots = this.container.querySelectorAll('.carousel-dot');
    const counter = this.container.querySelector('#carousel-counter-text');
    const glow = this.container.querySelector('#carousel-glow');

    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === this.currentIndex);
    });

    dots.forEach((d, idx) => {
      d.classList.toggle('active', idx === this.currentIndex);
      const prog = d.querySelector('.carousel-dot-progress');
      if (prog) {
        prog.style.transition = 'none';
        prog.style.width = '0%';
      }
    });

    if (counter) {
      const curStr = this.currentIndex + 1 < 10 ? `0${this.currentIndex + 1}` : `${this.currentIndex + 1}`;
      const totStr = total < 10 ? `0${total}` : `${total}`;
      counter.textContent = `${curStr} / ${totStr}`;
    }

    // Actualizar brillo ambiental dinámico
    const activeItem = this.items[this.currentIndex];
    if (glow && activeItem?.glowColor) {
      glow.style.background = `radial-gradient(ellipse at center, ${activeItem.glowColor} 0%, transparent 70%)`;
    }

    this.startProgressAnimation();

    if (this.isPlaying) {
      this.resetTimer();
    }
  }

  startProgressAnimation() {
    const activeDot = this.container.querySelector(`.carousel-dot[data-dot-idx="${this.currentIndex}"]`);
    if (!activeDot) return;
    const prog = activeDot.querySelector('.carousel-dot-progress');
    if (!prog) return;

    void prog.offsetWidth;
    prog.style.transition = `width ${this.duration}ms linear`;
    prog.style.width = '100%';
  }

  next() {
    this.goToSlide(this.currentIndex + 1);
  }

  prev() {
    this.goToSlide(this.currentIndex - 1);
  }

  startAutoplay() {
    this.stopAutoplay(false);
    this.timer = setInterval(() => {
      this.next();
    }, this.duration);
    this.startProgressAnimation();
  }

  stopAutoplay(resetProgress = true) {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (resetProgress) {
      const activeDot = this.container.querySelector(`.carousel-dot[data-dot-idx="${this.currentIndex}"]`);
      if (activeDot) {
        const prog = activeDot.querySelector('.carousel-dot-progress');
        if (prog) {
          prog.style.transition = 'none';
          prog.style.width = '0%';
        }
      }
    }
  }

  resetTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.next();
    }, this.duration);
  }

  triggerChime() {
    try {
      playCelestialChime(587.33, 0.15);
    } catch (_) {}
  }
}

export function initUpdatesCarousel(containerId = 'updates-carousel-root', items = null) {
  const container = document.getElementById(containerId);
  if (!container) return null;
  return new UpdatesCarousel(containerId, { items: items || MAJOR_UPDATES_DATA });
}
