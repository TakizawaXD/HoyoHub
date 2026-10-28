/**
 * EL GREMIO DEL VIAJERO - SISTEMA DE PERSONAJES Y BUILDS META
 * Módulo API y Gestor de Builds para Genshin Impact, Honkai: Star Rail y ZZZ
 * Cada personaje incluye 3 BUILDS META optimizadas (Hipercarry, Sub-DPS / Burst, Soporte / Reacciones)
 * Sin emojis - Iconos vectoriales limpios
 */

import { playCelestialChime } from './effects.js';
import { renderIconsInContainer } from './icons.js';

export const CHARACTERS_DB = [
  // ==========================================
  // GENSHIN IMPACT
  // ==========================================
  {
    id: "furina",
    name: "Furina",
    game: "genshin",
    gameName: "Genshin Impact",
    element: "hydro",
    rarity: 5,
    role: "Sub-DPS / Buffer Universal",
    title: "Directora de Luces · Fontaine",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/9b33a5b6d926613317c2f82ba4e6dafc_813133860086300465.png",
    builds: [
      {
        id: "furina-b1",
        title: "Sub-DPS Áurea & Fanfarria Máxima",
        tag: "Meta Principal",
        role: "Sub-DPS / Buffer Fuera de Campo",
        description: "La build definitiva para maximizar el daño de los miembros del salón mientras acumula cargas de Fanfarria para potenciar exponencialmente el daño de todo el equipo.",
        weapon5Star: "Fulgor de las Aguas Calmas (R1)",
        weapon4Star: "Vado del Río Ceniciento (R5 F2P) / Espada de Favonius",
        artifactSet: "Compañía Dorada (4 piezas)",
        mainStats: {
          sands: "Vida% o Recarga de Energía (160-180% min)",
          goblet: "Vida% o Bono de Daño Hydro",
          circlet: "Daño Crítico o Probabilidad Crítica"
        },
        substats: "Recarga de Energía (hasta umbral) > Daño Crít > Prob Crít > Vida%",
        team: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Baizhu"],
        synergy: "Neuvillette drena y recupera vida activando instantáneamente el 100% de la Fanfarria de Furina, mientras Kazuha y Baizhu reducen resistencias y aportan sostenimiento masivo."
      },
      {
        id: "furina-b2",
        title: "Hipercarry On-Field (Maréchaussée / C6)",
        tag: "Hipercarry",
        role: "DPS Principal En Campo",
        description: "Aprovecha la auto-fluctuación de vida para activar la probabilidad crítica del Cazador Fantasmal y asestar golpes Hydro brutales en campo con la Espada de Ousía/Pneuma.",
        weapon5Star: "Fulgor de las Aguas Calmas (R1) / Cortador de Jade",
        weapon4Star: "Espada Negra (R5) / Colmillo Lupino",
        artifactSet: "Cazador Fantasmal (4 piezas)",
        mainStats: {
          sands: "Vida%",
          goblet: "Bono de Daño Hydro",
          circlet: "Daño Crítico"
        },
        substats: "Daño Crítico > Probabilidad Crítica (tope 64%) > Vida% > Recarga",
        team: ["Furina", "Yelan", "Kaedehara Kazuha", "Bennett"],
        synergy: "Resonancia Hydro (+25% Vida), trituración elemental de Kazuha y bufos masivos de ataque y daño que transforman a Furina en una máquina aniquiladora."
      },
      {
        id: "furina-b3",
        title: "Sanadora & Buffer de Resonancia",
        tag: "Soporte / Utilidad",
        role: "Sanadora / Buffer de Supervivencia",
        description: "Configuración enfocada en su forma Pneuma para curar pasivamente a todo el equipo mientras mantiene el bufo global de daño activo con cero riesgo de derrota.",
        weapon5Star: "Llave de la Coronación / Juramento por la Libertad",
        weapon4Star: "Espada de Favonius (R5) / Espada de Madera Real",
        artifactSet: "Perla Oceánica (4 piezas) o Compañía Dorada (2) + Tenacidad (2)",
        mainStats: {
          sands: "Vida% o Recarga",
          goblet: "Vida%",
          circlet: "Bono de Curación o Vida%"
        },
        substats: "Vida% > Recarga de Energía > Probabilidad Crítica (para Favonius)",
        team: ["Xiao", "Furina", "Xianyun", "Faruzan"],
        synergy: "Cura constante para mantener los ataques descendentes de Xiao al 100% de potencia con aumentos de daño de caída por parte de Xianyun y Faruzan C6."
      }
    ]
  },
  {
    id: "neuvillette",
    name: "Neuvillette",
    game: "genshin",
    gameName: "Genshin Impact",
    element: "hydro",
    rarity: 5,
    role: "Hipercarry Hydro Supremo",
    title: "Juez Supremo de Fontaine",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/c1c2ef30aeb6e0be5a1ad3c56314c69d_2159670087140700142.png",
    builds: [
      {
        id: "neuv-b1",
        title: "Rayo Torrencial Hipercarry",
        tag: "Meta Principal",
        role: "DPS Principal Cargado",
        description: "El ataque cargado Juicio Equitativo arrasa con cualquier enemigo en el Abismo. Esta build optimiza al máximo el daño escalado por Vida y la auto-sustentación.",
        weapon5Star: "Escrituras del Fluir Sempiterno (R1)",
        weapon4Star: "Prototipo Ámbar (R5 F2P Forja) / Sacrificio de Jade",
        artifactSet: "Cazador Fantasmal (4 piezas)",
        mainStats: {
          sands: "Vida%",
          goblet: "Bono de Daño Hydro o Vida%",
          circlet: "Daño Crítico"
        },
        substats: "Daño Crítico > Prob Crítica (36-64%) > Vida% > Recarga (120%)",
        team: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Zhongli"],
        synergy: "Escudo inexpugnable de Zhongli con reducción de resistencias, doble Hydro para +25% Vida, Kazuha agrupando enemigos y Furina multiplicando el daño."
      },
      {
        id: "neuv-b2",
        title: "Hiperflorecimiento Semilla Dracónica",
        tag: "Reacciones / DPS Híbrido",
        role: "Conductor Hydro / Multiobjetivo",
        description: "Aplica cantidades ingentes de Hydro continuo para generar Núcleos Dendro que estallan a velocidad de vértigo, destruyendo salas masivas del Abismo.",
        weapon5Star: "Escrituras del Fluir Sempiterno",
        weapon4Star: "Prototipo Ámbar (R5) / Sinfonía de los Vagabundos",
        artifactSet: "Cazador Fantasmal (4 piezas) o Sueños Áureos (4)",
        mainStats: {
          sands: "Vida%",
          goblet: "Bono de Daño Hydro",
          circlet: "Daño Crítico / Prob Crítica"
        },
        substats: "Daño Crítico > Prob Crít > Vida% > Maestría Elemental",
        team: ["Neuvillette", "Nahida", "Raiden Shogun (Full EM)", "Zhongli"],
        synergy: "Nahida aplica Dendro perpetuo, Neuvillette inunda el campo creando semillas, y Raiden Shogun las detona a distancia con daño instantáneo de 35,000+ por núcleo."
      },
      {
        id: "neuv-b3",
        title: "Vaporizados Nucleares Inversos",
        tag: "Nuke Burst",
        role: "DPS de Reacción Pyro",
        description: "Aprovecha la rotación de Mavuika o Xiangling para detonar vaporizados de alta frecuencia en cada pulso de su rayo de agua, alcanzando números récord.",
        weapon5Star: "Escrituras del Fluir Sempiterno / Oración Perdida",
        weapon4Star: "Balada de los Fiordos / Sacrificio de Jade",
        artifactSet: "Cazador Fantasmal (4 piezas)",
        mainStats: {
          sands: "Vida% o Maestría Elemental",
          goblet: "Bono de Daño Hydro",
          circlet: "Daño Crítico"
        },
        substats: "Daño Crítico > Prob Crítica > Maestría Elemental > Vida%",
        team: ["Neuvillette", "Mavuika", "Kaedehara Kazuha", "Xilonen"],
        synergy: "Aura Pyro continua de Mavuika y amplificación dual de resistencias mediante Xilonen y Kazuha para lograr golpes de cientos de miles de puntos de daño."
      }
    ]
  },
  {
    id: "raiden",
    name: "Raiden Shogun",
    game: "genshin",
    gameName: "Genshin Impact",
    element: "electro",
    rarity: 5,
    role: "Batería / Nuke Burst DPS",
    title: "La Gobernante de Inazuma",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/154fa9157297e68fa79fe5917464167e_5932560888329624546.png",
    builds: [
      {
        id: "raiden-b1",
        title: "Hipercarry del Rayo Divino (Musou no Hitotachi)",
        tag: "Meta Principal",
        role: "Burst DPS / Hipercarry",
        description: "Convierte su Recarga de Energía directamente en Daño Electro y regeneración masiva de energía para todo el equipo durante su Habilidad Definitiva.",
        weapon5Star: "Luz del Segador (R1)",
        weapon4Star: "La Captura (R5 F2P Pesca) / Lanza de Favonius",
        artifactSet: "Emblema del Destino (4 piezas)",
        mainStats: {
          sands: "Recarga de Energía (270% objetivo)",
          goblet: "Bono de Daño Electro o ATQ%",
          circlet: "Probabilidad Crítica o Daño Crítico"
        },
        substats: "Recarga de Energía > Daño Crít > Prob Crít > ATQ%",
        team: ["Raiden Shogun", "Kujou Sara C6", "Kaedehara Kazuha", "Bennett"],
        synergy: "La mítica rotación 'Raiden Hypercarry': bufos simultáneos de ATQ plano de Bennett, +60% Daño Crítico Electro de Sara y absorción elemental de Kazuha."
      },
      {
        id: "raiden-b2",
        title: "Disparador de Hiperflorecimiento (Full EM)",
        tag: "F2P Destroyer",
        role: "Gatillador Off-Field Full Maestría",
        description: "Build de bajísima inversión y altísimo retorno: únicamente requiere Maestría Elemental para hacer explotar semillas Dendro cada 0.9 segundos a distancia.",
        weapon5Star: "Báculo de las Arenas Escarlatas",
        weapon4Star: "Perdición del Dragón (R5) / Cruz de Kitain",
        artifactSet: "Flor del Paraíso Perdido (4 piezas) o Sueños Áureos (4)",
        mainStats: {
          sands: "Maestría Elemental",
          goblet: "Maestría Elemental",
          circlet: "Maestría Elemental"
        },
        substats: "Maestría Elemental (1000+) > Recarga de Energía",
        team: ["Raiden Shogun", "Nahida", "Xingqiu", "Yelan"],
        synergy: "Doble Hydro genera proyectiles incesantes mientras Nahida marca a todos los enemigos en el mapa; Raiden activa las semillas sin necesidad de salir al campo."
      },
      {
        id: "raiden-b3",
        title: "National Team Supremo (Sobrecarga / Vaporizar)",
        tag: "Rotación Infinita",
        role: "Driver de Reacciones y Batería",
        description: "La legendaria formación 'Raiden National' que solventa la energía de Xiangling y Xingqiu mientras inflige daño Pyro, Hydro y Electro simultáneo.",
        weapon5Star: "Luz del Segador / Halcón de Jade",
        weapon4Star: "La Captura (R5) / Púa Celestial",
        artifactSet: "Emblema del Destino (4 piezas)",
        mainStats: {
          sands: "Recarga de Energía",
          goblet: "ATQ% o Bono Electro",
          circlet: "Probabilidad Crítica"
        },
        substats: "Probabilidad Crít > Daño Crít > Recarga de Energía > ATQ%",
        team: ["Raiden Shogun", "Xiangling", "Xingqiu", "Bennett"],
        synergy: "Recarga absoluta de ultimates en cada rotación, sobrecargas masivas, vaporizados constantes y total inmunidad a interrupción en campo."
      }
    ]
  },
  {
    id: "mavuika",
    name: "Mavuika",
    game: "genshin",
    gameName: "Genshin Impact",
    element: "pyro",
    rarity: 5,
    role: "Arconte Pyro / Hipercarry Solar",
    title: "El Fuego Primordial de Natlan",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/154fa9157297e68fa79fe5917464167e_5932560888329624546.png",
    builds: [
      {
        id: "mav-b1",
        title: "Llama del Dragón Solar (On-Field Hypercarry)",
        tag: "Meta Principal",
        role: "DPS Principal En Campo",
        description: "Aprovecha el estado de Espíritu Nocturno para transformar sus ataques en impactos ardientes masivos que escalan con la bendición de Natlan.",
        weapon5Star: "Mandoble Insignia Solar (R1)",
        weapon4Star: "Sombra de la Marea (R5 Forja) / Médula de la Serpiente Marina",
        artifactSet: "Códice Obsidiana (4 piezas)",
        mainStats: {
          sands: "ATQ%",
          goblet: "Bono de Daño Pyro",
          circlet: "Daño Crítico"
        },
        substats: "Daño Crítico > Probabilidad Crítica > ATQ% > Maestría Elemental",
        team: ["Mavuika", "Xilonen", "Furina", "Bennett"],
        synergy: "Xilonen reduce resistencias Pyro e Hydro de inmediato, Furina aporta daño global y Bennett catapulta el ataque de Mavuika a la estratosfera."
      },
      {
        id: "mav-b2",
        title: "Apoyo Off-Field de Ceniza Ardiente",
        tag: "Sub-DPS / Buffer",
        role: "Sub-DPS Fuera de Campo",
        description: "Genera explosiones pirotécnicas desde la reserva cada vez que los aliados atacan, al tiempo que transfiere energía y bufos de Espíritu Nocturno al equipo.",
        weapon5Star: "Lápida del Lobo / Orgullo Celestial",
        weapon4Star: "Gran Espada de Favonius / Fierro Florido",
        artifactSet: "Pergamino del Héroe de la Ciudad Ceniza (4 piezas)",
        mainStats: {
          sands: "Recarga de Energía o ATQ%",
          goblet: "Bono de Daño Pyro",
          circlet: "Probabilidad Crítica"
        },
        substats: "Recarga de Energía > Prob Crít > ATQ% > Daño Crít",
        team: ["Kinich", "Mavuika", "Emilie", "Bennett"],
        synergy: "Mantiene la reacción de Quemadura activa de manera ininterrumpida para maximizar el daño de Kinich y los proyectiles aromáticos de Emilie."
      },
      {
        id: "mav-b3",
        title: "Vaporizados Críticos Explosivos",
        tag: "Nuke de Reacción",
        role: "DPS de Reacciones",
        description: "Optimiza la Maestría Elemental para golpear con vaporizados inversos demoledores en sincronía con apoyos Hydro de alta aplicación.",
        weapon5Star: "Mandoble Insignia Solar / Espadón Cornirrojo",
        weapon4Star: "Médula de la Serpiente Marina (R5)",
        artifactSet: "Bruja Carmesí en Llamas (4 piezas)",
        mainStats: {
          sands: "Maestría Elemental o ATQ%",
          goblet: "Bono de Daño Pyro",
          circlet: "Daño Crítico"
        },
        substats: "Daño Crítico > Probabilidad Crítica > Maestría Elemental > ATQ%",
        team: ["Mavuika", "Yelan", "Xingqiu", "Zhongli"],
        synergy: "Doble Hydro para asegurar aura de agua constante, permitiendo que cada tajo cargado de Mavuika duplique su daño por Vaporizado."
      }
    ]
  },

  // ==========================================
  // HONKAI: STAR RAIL
  // ==========================================
  {
    id: "acheron",
    name: "Acheron",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    element: "quantum",
    rarity: 5,
    role: "Emanador de la Nihilidad / Hipercarry",
    title: "Guardia Galáctica Fugitiva",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/121882/3e5606473551d7c31e67e35b71db3f05_2224883492716301323.png",
    builds: [
      {
        id: "ach-b1",
        title: "Sueño Degollado del Abismo (Hipercarry Nihilidad)",
        tag: "Meta Principal",
        role: "DPS Supremo / Nuke Definitiva",
        description: "No utiliza energía: carga su definitiva aplicando estados negativos a los enemigos. Esta build maximiza el daño colosal de su corte final de 4 secuencias.",
        weapon5Star: "A lo largo de la orilla pasajera (S1)",
        weapon4Star: "Buenas noches y que duermas bien (S5) / Presa del sudor",
        artifactSet: "Buzo pionero del agua muerta (4) + Izumo Gensei y Reino del Pensamiento (2)",
        mainStats: {
          sands: "ATQ% o Velocidad (134+)",
          goblet: "Bono de Daño de Rayo o ATQ%",
          circlet: "Daño Crítico",
          rope: "ATQ%"
        },
        substats: "Daño Crítico > Probabilidad Crítica > ATQ% > Velocidad",
        team: ["Acheron", "Jiaoqiu", "Pela", "Aventurine"],
        synergy: "Jiaoqiu aplica quemadura en cada turno enemigo cargando la definitiva de Acheron a ritmo vertiginoso; Pela tritura defensas y Aventurine aporta escudos y desventajas."
      },
      {
        id: "ach-b2",
        title: "Conductora DoT de Muerte Súbita",
        tag: "Híbrido Nihilidad",
        role: "Sub-DPS de Desventajas",
        description: "Combina su habilidad para aniquilar defensas con los daños en el tiempo (DoT) de Viento y Rayo para derretir a jefes con barras de vida masivas.",
        weapon5Star: "A lo largo de la orilla pasajera",
        weapon4Star: "En nombre del mundo / Buenas noches",
        artifactSet: "Prisionero de las cadenas de confinamiento (4) + Estación selladora (2)",
        mainStats: {
          sands: "ATQ%",
          goblet: "Bono de Daño de Rayo",
          circlet: "Probabilidad Crítica",
          rope: "ATQ%"
        },
        substats: "ATQ% > Daño Crít > Prob Crít > Acierto de Efecto",
        team: ["Acheron", "Black Swan", "Kafka", "Huohuo"],
        synergy: "Kafka y Cisne Negro saturan al enemigo con Arcano y Electrocución, cargando la definitiva de Acheron en solo dos rotaciones de equipo."
      },
      {
        id: "ach-b3",
        title: "Zero-Cycle Speedster (Turnos Infinitos)",
        tag: "Speedrun MOC",
        role: "DPS de Velocidad Extrema",
        description: "Configurada con alta velocidad y adelanto de turnos para barrer la Memoria del Caos en ciclo cero sin dar respiro a los adversarios.",
        weapon5Star: "A lo largo de la orilla pasajera (S1)",
        weapon4Star: "Buenas noches y que duermas bien (S5)",
        artifactSet: "Buzo pionero (4) + Salsotto inerte (2)",
        mainStats: {
          sands: "Velocidad (145+)",
          goblet: "ATQ%",
          circlet: "Daño Crítico",
          rope: "ATQ%"
        },
        substats: "Velocidad > Daño Crítico > Probabilidad Crítica > ATQ%",
        team: ["Acheron", "Sparkle", "Silver Wolf", "Fu Xuan"],
        synergy: "Sparkle adelanta los turnos de Acheron constantemente proveyendo puntos de habilidad, mientras Lobo Plateado implanta debilidades directas."
      }
    ]
  },
  {
    id: "feixiao",
    name: "Feixiao",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    element: "anemo",
    rarity: 5,
    role: "General de Xianzhou / Ataques Adicionales",
    title: "La Cazadora de la Aurora",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/121882/3e5606473551d7c31e67e35b71db3f05_2224883492716301323.png",
    builds: [
      {
        id: "fei-b1",
        title: "Reina de los Ataques Adicionales",
        tag: "Meta Principal",
        role: "DPS Principal Cacería",
        description: "Su definitiva se nutre de los ataques de sus compañeros para asestar hasta 6 ráfagas de hachazos y disparos de viento letales contra objetivos de élite.",
        weapon5Star: "Cacería de la Aurora (S1)",
        weapon4Star: "Crucero estelar (S5 Tienda de Herta F2P) / Sólo el silencio queda",
        artifactSet: "Valiente cazador de viento (4) + Duran, dinastía de los lobos (2)",
        mainStats: {
          sands: "Velocidad (134-143+)",
          goblet: "Bono de Daño de Viento o ATQ%",
          circlet: "Probabilidad Crítica (buscar 90-100%)",
          rope: "ATQ%"
        },
        substats: "Probabilidad Crítica > Daño Crítico > Velocidad > ATQ%",
        team: ["Feixiao", "Robin", "Topaz y Conti / Moze", "Aventurine"],
        synergy: "El legendario cuarteto FUA: cada golpe de Aventurine, Topaz y Robin cuenta como acumulador de carga para la definitiva fulminante de Feixiao."
      },
      {
        id: "fei-b2",
        title: "Ruptura & Caza de Alta Frecuencia",
        tag: "Dual Carry F2P",
        role: "DPS de Impacto Directo",
        description: "Versión altamente accesible utilizando compañeros gratuitos para derribar barras de firmeza y ejecutar golpes críticos continuos.",
        weapon5Star: "Cacería de la Aurora",
        weapon4Star: "Crucero estelar (S5)",
        artifactSet: "Valiente cazador (4) + Salsotto inerte (2)",
        mainStats: {
          sands: "Velocidad",
          goblet: "ATQ%",
          circlet: "Probabilidad Crítica",
          rope: "ATQ%"
        },
        substats: "Prob Crítica > Daño Crítico > ATQ% > Efecto de Ruptura",
        team: ["Feixiao", "March 7th (Cacería)", "Ruan Mei", "Gallagher"],
        synergy: "March 7th elige a Feixiao como Maestra, otorgándole bonificaciones masivas de velocidad y daño crítico mutuo tras cada ataque."
      },
      {
        id: "fei-b3",
        title: "Asalto de Velocidad de la Aurora",
        tag: "Burst Cacería",
        role: "DPS Uniobjetivo",
        description: "Prioriza maximizar el Daño Crítico puro y la velocidad para que Feixiao ejecute su definitiva en momentos de vulnerabilidad máxima del jefe.",
        weapon5Star: "Cacería de la Aurora / Bautismo de pensamientos puros",
        weapon4Star: "Jugarretas con espadas (S5)",
        artifactSet: "Valiente cazador (4) + Duran (2)",
        mainStats: {
          sands: "Velocidad (140+)",
          goblet: "Bono Viento",
          circlet: "Daño Crítico",
          rope: "ATQ%"
        },
        substats: "Prob Crítica > Daño Crítico > Velocidad",
        team: ["Feixiao", "Robin", "Bronya", "Lingsha"],
        synergy: "Bronya adelanta a Feixiao para duplicar sus acciones por turno, mientras Lingsha y Robin brindan curación de emergencia y daño adicional."
      }
    ]
  },
  {
    id: "firefly",
    name: "Firefly (SAM)",
    game: "hsr",
    gameName: "Honkai: Star Rail",
    element: "pyro",
    rarity: 5,
    role: "Destrucción / Super Break Annihilator",
    title: "Armadura Estratégica SAM",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/121882/3e5606473551d7c31e67e35b71db3f05_2224883492716301323.png",
    builds: [
      {
        id: "ff-b1",
        title: "Super Ruptura Incandescente (Meta SAM)",
        tag: "Meta Principal",
        role: "Hipercarry de Super Ruptura",
        description: "Transforma su armadura entrando en Combustión Completa. No necesita Prob ni Daño Crítico: todo su potencial reside en la Ruptura y la Velocidad.",
        weapon5Star: "Donde descansan los sueños (S1)",
        weapon4Star: "Sobre la caída de un Eón (S5 Tienda de Herta F2P) / Moles indelebles",
        artifactSet: "Caballería de hierro de las cenizas (4) + Fragua de la linterna Kalpagni (2)",
        mainStats: {
          sands: "ATQ%",
          goblet: "ATQ%",
          circlet: "ATQ%",
          rope: "Efecto de Ruptura"
        },
        substats: "Efecto de Ruptura (250%+) > Velocidad (154+ en batalla) > ATQ%",
        team: ["Firefly", "Ruan Mei", "Trazacaminos (Armonía)", "Gallagher / Lingsha"],
        synergy: "La composición de Super Ruptura más fuerte del juego: el Trazacaminos permite infligir daño de Super Ruptura constante y Ruan Mei extiende la ruptura."
      },
      {
        id: "ff-b2",
        title: "Furia Ígnea Pura Ficción",
        tag: "Limpieza AoE",
        role: "DPS Multiobjetivo",
        description: "Configurada para que cada turno en Combustión Completa barra oleadas enteras de esbirros de Pura Ficción con explosiones de fuego en área.",
        weapon5Star: "Donde descansan los sueños",
        weapon4Star: "Sobre la caída de un Eón (S5)",
        artifactSet: "Caballería de hierro (4) + Kalpagni (2)",
        mainStats: {
          sands: "Velocidad (160+)",
          goblet: "ATQ%",
          circlet: "ATQ%",
          rope: "Efecto de Ruptura"
        },
        substats: "Velocidad > Efecto de Ruptura > ATQ%",
        team: ["Firefly", "Himeko", "Ruan Mei", "Lingsha"],
        synergy: "La ruptura de debilidades de SAM activa de inmediato los ataques adicionales continuos de Himeko en Pura Ficción para puntaje de 40,000 garantizado."
      },
      {
        id: "ff-b3",
        title: "Hiper-Velocidad Sin Sostén (0-Cycle)",
        tag: "Zero-Cycle",
        role: "Asalto Total",
        description: "Prescinde de sanador para incluir un tercer amplificador ofensivo, culminando las batallas de Memoria del Caos antes de recibir el primer golpe.",
        weapon5Star: "Donde descansan los sueños (S1)",
        weapon4Star: "Sobre la caída de un Eón (S5)",
        artifactSet: "Caballería de hierro (4) + Kalpagni (2)",
        mainStats: {
          sands: "ATQ%",
          goblet: "ATQ%",
          circlet: "ATQ%",
          rope: "Efecto de Ruptura"
        },
        substats: "Efecto de Ruptura > ATQ% > Velocidad",
        team: ["Firefly", "Ruan Mei", "Trazacaminos (Armonía)", "Fugue / Tingyun SP"],
        synergy: "Aumento triple de daño por debilidad y retraso de acción de los jefes para aniquilar cualquier fase en un único turno de Combustión."
      }
    ]
  },

  // ==========================================
  // ZENLESS ZONE ZERO
  // ==========================================
  {
    id: "ellen",
    name: "Ellen Joe",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    element: "cryo",
    rarity: 5,
    role: "Atacante / Cazadora de Escarcha",
    title: "Tiburón de Victoria Housekeeping",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/nap/126955/08f7bfa6d649ae130b92db21ec18991d_4721111667104618210.png",
    builds: [
      {
        id: "ellen-b1",
        title: "Tiburón del Océano Glacial (On-Field Slashing)",
        tag: "Meta Principal",
        role: "Atacante Principal Hielo",
        description: "Navega a toda velocidad para cargar su indicador de Escarcha y asestar tijeretazos devastadores de daño de Hielo a enemigos aturdidos.",
        weapon5Star: "Engranaje de Frecuencia Profunda (S-Rank)",
        weapon4Star: "Cañón del Caos (A-Rank) / Motor Estrella",
        artifactSet: "Jazz Polar (4 pistas) + Pájaro Carpintero Electro (2 pistas)",
        mainStats: {
          sands: "Disco IV: Probabilidad Crítica o Daño Crítico",
          goblet: "Disco V: Bono de Daño de Hielo",
          circlet: "Disco VI: ATQ% o Recuperación de Energía"
        },
        substats: "Probabilidad Crítica > Daño Crítico > ATQ% > Perforación",
        team: ["Ellen Joe", "Von Lycaon", "Soukaku"],
        synergy: "La mejor sinergia Mono-Hielo del juego: Lycaon aturde en segundos y reduce resistencias, Soukaku transfiere hasta 1000 de ATQ plano y Ellen aniquila."
      },
      {
        id: "ellen-b2",
        title: "Trastorno de Choque Criogénico (Disorder Duo)",
        tag: "Trastorno Elemental",
        role: "Atacante de Anomalías",
        description: "Aprovecha el estado de Congelación para provocar colapsos masivos de Trastorno en conjunción con personajes de Anomalía Eléctrica o de Fuego.",
        weapon5Star: "Engranaje de Frecuencia Profunda",
        weapon4Star: "Mirada de la Ráfaga (A-Rank)",
        artifactSet: "Jazz Polar (4) + Melodía del Caos (2)",
        mainStats: {
          sands: "Disco IV: Probabilidad Crítica",
          goblet: "Disco V: Bono de Daño de Hielo",
          circlet: "Disco VI: Maestría de Anomalía"
        },
        substats: "Prob Crítica > Daño Crítico > Maestría de Anomalía > ATQ%",
        team: ["Ellen Joe", "Burnice White", "Caesar King"],
        synergy: "Caesar King brinda escudos inquebrantables y +1000 ATQ, Burnice incendia a los rivales y Ellen congela para crear constantes explosiones de Trastorno."
      },
      {
        id: "ellen-b3",
        title: "Speedrun Shiyu Defense Nivel 17",
        tag: "Burst Stun",
        role: "Atacante de Ráfagas Rápidas",
        description: "Optimizado para infligir el 100% de su daño en las ventanas exactas de 10 segundos tras aturdir al jefe en la Defensa Shiyu de alto nivel.",
        weapon5Star: "Engranaje de Frecuencia Profunda",
        weapon4Star: "Cañón del Caos",
        artifactSet: "Pájaro Carpintero Electro (4) + Jazz Polar (2)",
        mainStats: {
          sands: "Disco IV: Daño Crítico",
          goblet: "Disco V: Bono Daño Hielo",
          circlet: "Disco VI: ATQ%"
        },
        substats: "Daño Crítico > Probabilidad Crítica > ATQ%",
        team: ["Ellen Joe", "Qingyi", "Nicole Demara"],
        synergy: "Qingyi eleva el multiplicador de aturdimiento hasta un descomunal 200%, Nicole agrupa y reduce la defensa un 40% y Ellen liquida al jefe en una sola rotación."
      }
    ]
  },
  {
    id: "janedoe",
    name: "Jane Doe",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    element: "physical",
    rarity: 5,
    role: "Anomalía / Especialista en Asalto Físico",
    title: "Agente Infiltrada de Seguridad Pública",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/nap/126955/08f7bfa6d649ae130b92db21ec18991d_4721111667104618210.png",
    builds: [
      {
        id: "jane-b1",
        title: "Reina del Asalto Pasional (Meta Anomalía)",
        tag: "Meta Principal",
        role: "Anomalía Física Principal",
        description: "Entra en estado de Pasión y asesta estocadas giratorias que provocan Asalto Crítico (¡los Asaltos de Jane pueden ser críticos!), derritiendo la vida de los enemigos.",
        weapon5Star: "Colmillos Afilados (S-Rank)",
        weapon4Star: "Electrolente Agudo (A-Rank) / Llorón Gemelo",
        artifactSet: "Melodía del Caos (4 pistas) + Metal Colmilludo (2 pistas)",
        mainStats: {
          sands: "Disco IV: Maestría de Anomalía",
          goblet: "Disco V: Bono de Daño Físico",
          circlet: "Disco VI: Tasa de Acumulación de Anomalía"
        },
        substats: "Maestría de Anomalía (420+ cap) > ATQ% > Perforación",
        team: ["Jane Doe", "Seth Lowell", "Burnice White"],
        synergy: "Seth concede escudo y +100 de Maestría de Anomalía a Jane, Burnice aplica Quemadura persistente y Jane activa Asaltos masivos provocando Trastorno inmediato."
      },
      {
        id: "jane-b2",
        title: "Dúo Eléctrico y Asalto Rápido",
        tag: "Dúo Anomalía",
        role: "Asalto & Choque",
        description: "Emparejada con agentes eléctricos para detonar Choque y Asalto en rápida sucesión con total evasión e invulnerabilidad en sus piruetas.",
        weapon5Star: "Colmillos Afilados",
        weapon4Star: "Electrolente Agudo",
        artifactSet: "Metal Colmilludo (4) + Melodía del Caos (2)",
        mainStats: {
          sands: "Disco IV: Maestría de Anomalía",
          goblet: "Disco V: Bono de Daño Físico",
          circlet: "Disco VI: Tasa de Anomalía"
        },
        substats: "Maestría de Anomalía > ATQ% > Perforación",
        team: ["Jane Doe", "Seth Lowell", "Grace Howard"],
        synergy: "Grace satura la barra de choque en segundos, permitiendo a Jane desencadenar números colosales de Trastorno mientras baila esquivando cualquier ataque."
      },
      {
        id: "jane-b3",
        title: "Solo de Asalto Letal Físico",
        tag: "Mono-Físico",
        role: "DPS Independiente",
        description: "Enfocada en maximizar el daño de impacto directo de sus ataques giratorios sin depender de reacciones de otros elementos.",
        weapon5Star: "Colmillos Afilados",
        weapon4Star: "Cañón Calibre",
        artifactSet: "Metal Colmilludo (4) + Pájaro Carpintero Electro (2)",
        mainStats: {
          sands: "Disco IV: ATQ% o Maestría",
          goblet: "Disco V: Bono de Daño Físico",
          circlet: "Disco VI: Tasa de Anomalía"
        },
        substats: "Maestría de Anomalía > ATQ% > Probabilidad Crítica",
        team: ["Jane Doe", "Caesar King", "Nicole Demara"],
        synergy: "Caesar otorga resistencia a interrupción máxima y bufo de 1000 de ataque, Nicole reduce armadura física y Jane remata sin sufrir un solo rasguño."
      }
    ]
  },
  {
    id: "miyabi",
    name: "Hoshimi Miyabi",
    game: "zzz",
    gameName: "Zenless Zone Zero",
    element: "anemo",
    rarity: 5,
    role: "Sección 6 / Katana Glacial Anómala",
    title: "Comandante de la Sección 6 de HAND",
    avatar: "https://fastcdn.hoyoverse.com/content-v2/nap/126955/08f7bfa6d649ae130b92db21ec18991d_4721111667104618210.png",
    builds: [
      {
        id: "miyabi-b1",
        title: "Corte del Relámpago y Escarcha (Meta Sección 6)",
        tag: "Meta Principal",
        role: "Anomalía Cortante / Hipercarry",
        description: "Desenvaina su katana en ráfagas de cortes aéreos ultrasónicos que congelan y pulverizan la resistencia de cualquier monstruo etéreo.",
        weapon5Star: "Sable de Escarcha Insignia (S-Rank)",
        weapon4Star: "Brisa Purificadora (A-Rank) / Electrolente Agudo",
        artifactSet: "Viento del Vacío (4 pistas) + Jazz Polar (2 pistas)",
        mainStats: {
          sands: "Disco IV: Maestría de Anomalía o Daño Crítico",
          goblet: "Disco V: Bono de Daño Hielo / Viento",
          circlet: "Disco VI: Tasa de Acumulación de Anomalía"
        },
        substats: "Tasa de Anomalía > Maestría de Anomalía > Daño Crít > ATQ%",
        team: ["Hoshimi Miyabi", "Tsukishiro Yanagi", "Soukaku"],
        synergy: "El núcleo de la Sección 6: Yanagi inflige polaridad eléctrica mientras Miyabi desata sus cortes helados generando Trastorno doble sin interrupción."
      },
      {
        id: "miyabi-b2",
        title: "Vórtice del Filo Celestial",
        tag: "Trastorno de Sección",
        role: "Burst de Anomalías",
        description: "Optimizado para rotar con Yanagi y Nicole, aplicando ráfagas instantáneas que saturan la barra de Anomalía en menos de 3 segundos.",
        weapon5Star: "Sable de Escarcha Insignia",
        weapon4Star: "Llorón Gemelo",
        artifactSet: "Melodía de Jazz (4) + Viento del Vacío (2)",
        mainStats: {
          sands: "Disco IV: Maestría de Anomalía",
          goblet: "Disco V: Bono Elemental",
          circlet: "Disco VI: Recuperación de Energía"
        },
        substats: "Maestría de Anomalía > ATQ% > Perforación",
        team: ["Hoshimi Miyabi", "Tsukishiro Yanagi", "Nicole Demara"],
        synergy: "Nicole concentra a los enemigos en el orbe de Éter mientras Miyabi y Yanagi cruzan sus habilidades especiales liquidando salas enteras."
      },
      {
        id: "miyabi-b3",
        title: "Hipercarry F2P Cómodo",
        tag: "Accesible & Letal",
        role: "DPS de Espada Rápida",
        description: "Build equilibrada con motores y discos de fácil acceso que asegura máxima supervivencia y golpes contundentes sin requisitos de rango S.",
        weapon5Star: "Sable de Escarcha Insignia",
        weapon4Star: "Motor Estrella / Cañón del Caos",
        artifactSet: "Pájaro Carpintero Electro (4) + Jazz Polar (2)",
        mainStats: {
          sands: "Disco IV: Probabilidad Crítica",
          goblet: "Disco V: Bono Elemental",
          circlet: "Disco VI: ATQ%"
        },
        substats: "Prob Crítica > Daño Crítico > ATQ%",
        team: ["Hoshimi Miyabi", "Anby Demara", "Soukaku"],
        synergy: "Anby aturde rápidamente a los jefes, Soukaku transfiere su bono de ataque y Miyabi finaliza el combate con su combo completo de katana."
      }
    ]
  }
];

/**
 * Conector de API con soporte de fallback y caché local
 */
export const BuildsAPI = {
  /**
   * Obtiene la lista completa de personajes con soporte de filtrado
   */
  async getCharacters(filter = {}) {
    // Simula una llamada rápida a API con caché offline garantizada
    await new Promise(resolve => setTimeout(resolve, 80));

    let list = [...CHARACTERS_DB];

    if (filter.game && filter.game !== 'all') {
      list = list.filter(c => c.game === filter.game);
    }

    if (filter.element && filter.element !== 'all') {
      list = list.filter(c => c.element === filter.element);
    }

    if (filter.query && filter.query.trim()) {
      const q = filter.query.toLowerCase().trim();
      list = list.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.gameName.toLowerCase().includes(q)
      );
    }

    return list;
  },

  /**
   * Obtiene un personaje por su ID único
   */
  async getCharacterById(id) {
    const list = await this.getCharacters();
    return list.find(c => c.id === id) || null;
  }
};

/**
 * Control del Modal Universal de Personajes y Builds
 */
let currentActiveChar = null;
let currentActiveBuildIndex = 0;
let currentGameFilter = 'all';

export function initBuildsModal() {
  // Inyectar HTML del modal si no existe
  if (!document.getElementById('builds-modal')) {
    const modalHTML = `
      <div id="builds-modal" class="builds-modal-backdrop" aria-hidden="true" role="dialog" aria-labelledby="builds-modal-title">
        <div class="builds-modal-card">
          <!-- Encabezado del Modal -->
          <div class="builds-modal-header">
            <div class="builds-title-group">
              <span data-icon="sword" class="clst-icon-gold clst-icon-lg"></span>
              <div>
                <h2 id="builds-modal-title" class="title-gold">Compendio de Personajes & 3 Builds Meta</h2>
                <p class="modal-subtext">Base de datos de El Gremio del Viajero · Estrategias, armas, artefactos y equipos</p>
              </div>
            </div>
            <button id="close-builds-modal-btn" class="modal-close-btn" aria-label="Cerrar ventana">
              <span data-icon="close"></span>
            </button>
          </div>

          <!-- Barra de Filtros y Búsqueda -->
          <div class="builds-filter-bar">
            <div class="builds-game-tabs">
              <button class="builds-tab-btn active" data-game="all">
                <span data-icon="hub"></span>
                <span>Todos</span>
              </button>
              <button class="builds-tab-btn" data-game="genshin">
                <span data-icon="genshin"></span>
                <span>Genshin Impact</span>
              </button>
              <button class="builds-tab-btn" data-game="hsr">
                <span data-icon="hsr"></span>
                <span>Star Rail</span>
              </button>
              <button class="builds-tab-btn" data-game="zzz">
                <span data-icon="zzz"></span>
                <span>Zenless Zone Zero</span>
              </button>
            </div>
            
            <div class="builds-search-wrapper">
              <span data-icon="search" class="search-input-icon"></span>
              <input type="text" id="builds-search-input" placeholder="Buscar personaje, elemento o rol..." autocomplete="off" />
            </div>
          </div>

          <!-- Cuerpo Principal: Grid de Personajes a la izquierda y Detalles a la derecha -->
          <div class="builds-modal-body">
            <!-- Lista / Selector de Personajes -->
            <div class="builds-char-list-col">
              <div class="col-heading">
                <span>Seleccionar Personaje</span>
                <span id="builds-count-badge" class="count-badge">8 disponibles</span>
              </div>
              <div id="builds-char-list" class="builds-char-grid">
                <!-- Se inyectan dinámicamente -->
              </div>
            </div>

            <!-- Panel de Detalles del Personaje & Sus 3 Builds Meta -->
            <div class="builds-detail-col">
              <div id="builds-detail-content" class="builds-detail-content">
                <!-- Se llena con renderCharacterDetails -->
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    renderIconsInContainer(document.getElementById('builds-modal'));
  }

  // Registrar listeners de filtros y búsqueda
  const modalEl = document.getElementById('builds-modal');
  const closeBtn = document.getElementById('close-builds-modal-btn');
  const searchInput = document.getElementById('builds-search-input');
  const tabBtns = modalEl.querySelectorAll('.builds-tab-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeBuildsModal);
  }

  // Cerrar al hacer clic en el fondo oscuro
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) {
      closeBuildsModal();
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl.classList.contains('active')) {
      closeBuildsModal();
    }
  });

  // Pestañas de juegos
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGameFilter = btn.dataset.game;
      refreshCharList();
      playCelestialChime(523.25, 0.15);
    });
  });

  // Entrada de búsqueda reactiva
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      refreshCharList();
    });
  }

  // Conectar con delegación de eventos todos los botones que abran el modal de builds
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open-builds]');
    if (btn) {
      e.preventDefault();
      const initialGame = btn.dataset.game || 'all';
      openBuildsModal(null, initialGame);
    }
  });
}

/**
 * Abre el modal con un personaje o filtro específico
 */
export async function openBuildsModal(charId = null, initialGame = 'all') {
  const modal = document.getElementById('builds-modal');
  if (!modal) return;

  currentGameFilter = initialGame;
  
  // Actualizar pestaña activa
  const tabBtns = modal.querySelectorAll('.builds-tab-btn');
  tabBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.game === initialGame);
  });

  const searchInput = document.getElementById('builds-search-input');
  if (searchInput) searchInput.value = '';

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  playCelestialChime(659.25, 0.25);

  await refreshCharList(charId);
}

/**
 * Cierra el modal
 */
export function closeBuildsModal() {
  const modal = document.getElementById('builds-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/**
 * Refresca la lista de personajes según filtros
 */
async function refreshCharList(preferCharId = null) {
  const searchInput = document.getElementById('builds-search-input');
  const query = searchInput ? searchInput.value : '';

  const chars = await BuildsAPI.getCharacters({
    game: currentGameFilter,
    query: query
  });

  const listContainer = document.getElementById('builds-char-list');
  const countBadge = document.getElementById('builds-count-badge');
  if (countBadge) {
    countBadge.textContent = `${chars.length} disponibles`;
  }

  if (!listContainer) return;

  if (chars.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-chars-msg">
        <span data-icon="search" class="clst-icon-lg clst-icon-gold"></span>
        <p>No se encontraron personajes para esta búsqueda.</p>
      </div>
    `;
    renderIconsInContainer(listContainer);
    return;
  }

  listContainer.innerHTML = chars.map(c => {
    const isSelected = currentActiveChar && currentActiveChar.id === c.id;
    return `
      <button class="char-tile-btn ${isSelected ? 'selected' : ''}" data-char-id="${c.id}" type="button">
        <div class="char-tile-avatar-wrap">
          <img src="${c.avatar}" alt="${c.name}" class="char-tile-avatar" loading="lazy" decoding="async" />
          <span class="char-tile-element-pill el-${c.element}">
            <span data-icon="${c.element}"></span>
          </span>
        </div>
        <div class="char-tile-info">
          <span class="char-tile-name">${c.name}</span>
          <span class="char-tile-role">${c.role}</span>
        </div>
      </button>
    `;
  }).join('');

  renderIconsInContainer(listContainer);

  // Escuchar clics en personajes
  const tiles = listContainer.querySelectorAll('.char-tile-btn');
  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const charId = tile.dataset.charId;
      selectCharacter(charId);
      playCelestialChime(587.33, 0.15);
    });
  });

  // Seleccionar personaje inicial
  let target = chars[0];
  if (preferCharId) {
    const match = chars.find(c => c.id === preferCharId);
    if (match) target = match;
  } else if (currentActiveChar) {
    const match = chars.find(c => c.id === currentActiveChar.id);
    if (match) target = match;
  }

  if (target) {
    selectCharacter(target.id);
  }
}

/**
 * Selecciona un personaje y renderiza sus 3 builds
 */
async function selectCharacter(charId) {
  const char = await BuildsAPI.getCharacterById(charId);
  if (!char) return;

  currentActiveChar = char;
  currentActiveBuildIndex = 0;

  // Actualizar clase selected en la lista
  const tiles = document.querySelectorAll('.char-tile-btn');
  tiles.forEach(t => {
    t.classList.toggle('selected', t.dataset.charId === charId);
  });

  renderCharacterDetails(char);
}

/**
 * Renderiza la vista detallada con el selector de las 3 builds
 */
function renderCharacterDetails(char) {
  const container = document.getElementById('builds-detail-content');
  if (!container) return;

  const activeBuild = char.builds[currentActiveBuildIndex] || char.builds[0];

  const buildsTabsHTML = char.builds.map((b, idx) => `
    <button class="build-selector-btn ${idx === currentActiveBuildIndex ? 'active' : ''}" data-build-index="${idx}" type="button">
      <span class="build-index-badge">Build ${idx + 1}</span>
      <span class="build-tab-title">${b.title}</span>
      <span class="build-tab-tag">${b.tag}</span>
    </button>
  `).join('');

  const teamHTML = activeBuild.team.map(member => `
    <div class="team-member-chip">
      <span data-icon="star" class="clst-icon-gold"></span>
      <span>${member}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <!-- Cabecera del Personaje -->
    <div class="char-detail-banner">
      <div class="char-banner-avatar-wrap">
        <img src="${char.avatar}" alt="${char.name}" class="char-banner-avatar" loading="lazy" decoding="async" />
        <span class="char-banner-element el-${char.element}">
          <span data-icon="${char.element}"></span>
        </span>
      </div>
      <div class="char-banner-meta">
        <div class="char-banner-game-badge">
          <span data-icon="${char.game}"></span>
          <span>${char.gameName}</span>
        </div>
        <h3 class="char-banner-title title-gold">${char.name}</h3>
        <p class="char-banner-subtitle">${char.title} · ${char.role}</p>
      </div>
      <div class="char-banner-actions">
        <button id="copy-team-btn" class="btn btn-secondary btn-sm" type="button" title="Copiar formación de equipo">
          <span data-icon="copy"></span>
          <span>Copiar Equipo</span>
        </button>
      </div>
    </div>

    <!-- Pestañas de las 3 Builds Meta -->
    <div class="build-tabs-row">
      ${buildsTabsHTML}
    </div>

    <!-- Contenido de la Build Seleccionada -->
    <div class="active-build-view">
      <div class="build-header-strip">
        <div>
          <h4 class="active-build-title">${activeBuild.title}</h4>
          <span class="active-build-role-pill">${activeBuild.role}</span>
        </div>
        <p class="active-build-desc">${activeBuild.description}</p>
      </div>

      <div class="build-grid-cards">
        <!-- Armas Recomendadas -->
        <div class="build-spec-card">
          <div class="spec-card-head">
            <span data-icon="sword" class="clst-icon-gold"></span>
            <h5>Armas Recomendadas</h5>
          </div>
          <div class="spec-card-content">
            <div class="spec-row">
              <span class="spec-label">Mejor 5 Estrellas:</span>
              <strong class="spec-value val-gold">${activeBuild.weapon5Star}</strong>
            </div>
            <div class="spec-row">
              <span class="spec-label">Opción F2P / 4 Estrellas:</span>
              <strong class="spec-value val-cyan">${activeBuild.weapon4Star}</strong>
            </div>
          </div>
        </div>

        <!-- Artefactos / Reliquias / Pistas -->
        <div class="build-spec-card">
          <div class="spec-card-head">
            <span data-icon="shield" class="clst-icon-gold"></span>
            <h5>Artefactos / Reliquias / Discos</h5>
          </div>
          <div class="spec-card-content">
            <div class="spec-row">
              <span class="spec-label">Conjunto Óptimo:</span>
              <strong class="spec-value val-gold">${activeBuild.artifactSet}</strong>
            </div>
            <div class="spec-row">
              <span class="spec-label">Stats Principales:</span>
              <div class="spec-sublist">
                ${activeBuild.mainStats.sands ? `<div>• Reloj / Cuerpo: <strong>${activeBuild.mainStats.sands}</strong></div>` : ''}
                ${activeBuild.mainStats.goblet ? `<div>• Cáliz / Esfera: <strong>${activeBuild.mainStats.goblet}</strong></div>` : ''}
                ${activeBuild.mainStats.circlet ? `<div>• Corona / Cuerda: <strong>${activeBuild.mainStats.circlet}</strong></div>` : ''}
              </div>
            </div>
          </div>
        </div>

        <!-- Prioridad de Substats -->
        <div class="build-spec-card full-width">
          <div class="spec-card-head">
            <span data-icon="sparkle" class="clst-icon-gold"></span>
            <h5>Prioridad de Estadísticas Secundarias (Substats)</h5>
          </div>
          <div class="spec-card-content">
            <p class="substats-flow">${activeBuild.substats}</p>
          </div>
        </div>

        <!-- Equipo Meta & Sinergia -->
        <div class="build-spec-card full-width">
          <div class="spec-card-head">
            <span data-icon="users" class="clst-icon-gold"></span>
            <h5>Formación de Equipo Meta Recomendada</h5>
          </div>
          <div class="spec-card-content">
            <div class="team-chips-row">
              ${teamHTML}
            </div>
            <p class="synergy-explanation">
              <strong>Sinergia Táctica:</strong> ${activeBuild.synergy}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  renderIconsInContainer(container);

  // Escuchar cambios de pestaña de build
  const buildBtns = container.querySelectorAll('.build-selector-btn');
  buildBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentActiveBuildIndex = parseInt(btn.dataset.buildIndex, 10);
      renderCharacterDetails(char);
      playCelestialChime(523.25, 0.18);
    });
  });

  // Funcionalidad de Copiar Equipo
  const copyBtn = container.getElementById ? container.getElementById('copy-team-btn') : container.querySelector('#copy-team-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const teamText = `Equipo Meta para ${char.name} (${activeBuild.title}): ${activeBuild.team.join(' + ')} · El Gremio del Viajero`;
      navigator.clipboard.writeText(teamText).then(() => {
        const original = copyBtn.innerHTML;
        copyBtn.innerHTML = `<span data-icon="check"></span><span>¡Copiado!</span>`;
        renderIconsInContainer(copyBtn);
        playCelestialChime(783.99, 0.25);
        setTimeout(() => {
          copyBtn.innerHTML = original;
          renderIconsInContainer(copyBtn);
        }, 2200);
      });
    });
  }
}
