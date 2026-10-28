/**
 * CELESTIA ORDER - BASE DE DATOS COMPLETA DE PERSONAJES, BUILDS Y GUÍAS DE FARMEO
 * Genshin Impact, Honkai: Star Rail y Zenless Zone Zero
 */

export const CHARACTERS_CATALOG = [
  {
    "id": "furina",
    "name": "Furina",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Espada Ligera",
    "role": "Sub-DPS / Buffer Universal",
    "title": "Directora de Luces · Fontaine",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/9b33a5b6d926613317c2f82ba4e6dafc_813133860086300465.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Fulgor de las Aguas Calmas (5★)",
        "source": "Gachapón Promocional",
        "desc": "Otorga daño elemental masivo y escala con vida al drenar y curar."
      },
      "weaponF2P": {
        "name": "Vado del Río Ceniciento (4★ R5)",
        "source": "Asociación de Pesca de Fontaine (100% Gratis)",
        "desc": "+32% Recarga de Energía y +16% Probabilidad Crítica para la Habilidad Elemental."
      },
      "artifacts": {
        "name": "Compañía Dorada (4 piezas)",
        "bonus": "+70% de daño a la Habilidad Elemental fuera de campo.",
        "domain": "Dominio Fin del Pecado",
        "location": "Fontaine (Región de Belleau)"
      },
      "mainStats": {
        "sands": "Vida% o Recarga (160-180% min)",
        "goblet": "Vida% o Bono Daño Hydro",
        "circlet": "Daño Crítico o Prob. Crítica"
      },
      "substats": "Recarga de Energía (hasta umbral) > Daño Crítico > Probabilidad Crítica > Vida%",
      "bestTeam": {
        "members": [
          "Neuvillette (DPS)",
          "Furina (Buffer)",
          "Kaedehara Kazuha (VV)",
          "Baizhu (Healer)"
        ],
        "synergy": "Neuvillette drena y recupera vida activando instantáneamente el 100% de la Fanfarria de Furina, logrando un bufo global de hasta +75% de daño."
      },
      "talentPriority": "Habilidad Elemental = Habilidad Definitiva > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Gotas de Agua Trascendente",
        "quantity": "46 uds.",
        "boss": "Tulpa de Agua",
        "location": "Fontaine: Camino submarino al oeste del Tribunal"
      },
      "localSpecialty": {
        "name": "Lirio Lumidulce (Lakelight Lily)",
        "quantity": "168 uds.",
        "route": "Bosque Erinnyes y Laguna de Urania (Fontaine)"
      },
      "talentBooks": {
        "name": "Filosofías de la Justicia",
        "domain": "Dominio Gloria Pálida Olvidada",
        "days": "Martes, Viernes y Domingo",
        "location": "Dominio Gloria Pálida Olvidada"
      },
      "weeklyBoss": {
        "name": "Masa Desvanecida (Lightless Mass)",
        "boss": "Narval Devorador",
        "location": "Dominio de la Cruzada: Salacia Plain (Fontaine)"
      },
      "commonDrops": {
        "name": "Néctar de Megaflora",
        "enemy": "Megafloras Pyro/Cryo/Electro",
        "location": "Distribuidas por todo Teyvat"
      },
      "artifactDomain": {
        "name": "Dominio Fin del Pecado",
        "location": "Fontaine (Región de Belleau)"
      }
    }
  },
  {
    "id": "neuvillette",
    "name": "Neuvillette",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Catalizador",
    "role": "Hipercarry Hydro Supremo",
    "title": "Juez Supremo de Fontaine",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/c1c2ef30aeb6e0be5a1ad3c56314c69d_2159670087140700142.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Escrituras del Fluir Sempiterno (5★)",
        "source": "Gachapón Promocional",
        "desc": "+88.2% Daño Crítico y regeneración masiva de energía con daño cargado."
      },
      "weaponF2P": {
        "name": "Prototipo Ámbar (4★ R5)",
        "source": "Forja del Herrero (Totalmente Gratis)",
        "desc": "Escala Vida% y recarga energía para definitivas continuas."
      },
      "artifacts": {
        "name": "Cazador Fantasmal (4 piezas)",
        "bonus": "+36% Probabilidad Crítica automática al fluctuar la vida.",
        "domain": "Dominio Fin del Pecado",
        "location": "Fontaine (Belleau)"
      },
      "mainStats": {
        "sands": "Vida%",
        "goblet": "Bono Daño Hydro o Vida%",
        "circlet": "Daño Crítico"
      },
      "substats": "Daño Crítico > Probabilidad Crítica (tope 64%) > Vida% > Recarga de Energía",
      "bestTeam": {
        "members": [
          "Neuvillette (Hipercarry)",
          "Furina (Buffer)",
          "Kaedehara Kazuha (VV)",
          "Zhongli (Escudo Geo)"
        ],
        "synergy": "Zhongli aporta resistencia a interrupción vital para el rayo cargado, Kazuha tritura 40% Hydro y Furina dispara el daño."
      },
      "talentPriority": "Ataque Normal (Ataque Cargado: Juicio Equitativo) >>> Habilidad Elemental = Definitiva"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Cuerno de Fontemer Sumergido",
        "quantity": "46 uds.",
        "boss": "Corcel de Mar Perlado Milenario",
        "location": "Fontaine: Fosa de Elton (cueva submarina)"
      },
      "localSpecialty": {
        "name": "Luminiespina (Lumitoile)",
        "quantity": "168 uds.",
        "route": "Costas y tuberías submarinas de la Fortaleza Merópide"
      },
      "talentBooks": {
        "name": "Filosofías de la Equidad",
        "domain": "Dominio Gloria Pálida Olvidada",
        "days": "Lunes, Jueves y Domingo",
        "location": "Dominio Gloria Pálida Olvidada"
      },
      "weeklyBoss": {
        "name": "Ojo del Vórtice Primigenio",
        "boss": "Narval Devorador",
        "location": "Dominio de la Cruzada: Mar de Salacia"
      },
      "commonDrops": {
        "name": "Engranajes Mecánicos",
        "enemy": "Mekas y Mecabols",
        "location": "Exteriores del Tribunal de Fontaine y Merópide"
      },
      "artifactDomain": {
        "name": "Dominio Fin del Pecado",
        "location": "Fontaine (Belleau)"
      }
    }
  },
  {
    "id": "mavuika",
    "name": "Mavuika",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Mandoble",
    "role": "Hipercarry Pyro / Arconte de la Guerra",
    "title": "Arconte Pyro de Natlan · Señora del Fuego",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/fa835ec91a0c8684adfa2a3c74900a3e_6527289569263152554.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Fuego Primigenio de Natlan (5★)",
        "source": "Gachapón Promocional",
        "desc": "Escala Ataque y Daño Pyro en modo Motocicleta de Guerra."
      },
      "weaponF2P": {
        "name": "Espada Real de Natlan / Prototipo Arcaico (4★)",
        "source": "Forja de Natlan / Liyue",
        "desc": "Sólido escalado de Ataque base y ráfagas explosivas."
      },
      "artifacts": {
        "name": "Obsidiana del Héroe de la Noche (4 piezas)",
        "bonus": "+40% Probabilidad Crítica al activar estado de Bendición Noctámbula.",
        "domain": "Dominio Santuario de la Noche",
        "location": "Natlan"
      },
      "mainStats": {
        "sands": "Ataque% o Maestría Elemental",
        "goblet": "Bono de Daño Pyro",
        "circlet": "Daño Crítico"
      },
      "substats": "Daño Crítico > Probabilidad Crítica > Ataque% > Maestría Elemental",
      "bestTeam": {
        "members": [
          "Mavuika (DPS)",
          "Xilonen (Trituración)",
          "Bennett (Buffer)",
          "Furina (Vaporizado)"
        ],
        "synergy": "Xilonen reduce resistencias un 36%, Bennett aporta +1200 ATK y Furina permite vaporizados masivos."
      },
      "talentPriority": "Habilidad Definitiva = Habilidad Elemental > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Núcleo de Magma de Natlan",
        "quantity": "46 uds.",
        "boss": "Glotón de Fuego Primordial",
        "location": "Natlan: Fosa del Volcán Sulfuroso"
      },
      "localSpecialty": {
        "name": "Llama de Ceniza de Natlan",
        "quantity": "168 uds.",
        "route": "Laderas volcánicas de Coatepec y Tequemecan (Natlan)"
      },
      "talentBooks": {
        "name": "Filosofías del Conflicto",
        "domain": "Dominio de la Guerra Ancestral",
        "days": "Martes, Viernes y Domingo",
        "location": "Dominio de la Guerra Ancestral"
      },
      "weeklyBoss": {
        "name": "Colmillo del Dragón de las Sombras",
        "boss": "Señor de la Noche Ancestral",
        "location": "Dominio de la Cruzada de Natlan"
      },
      "commonDrops": {
        "name": "Silbatos de Guerrero Natlan",
        "enemy": "Guerreros Tribales y Saurios",
        "location": "Planicies y volcanes de Natlan"
      },
      "artifactDomain": {
        "name": "Dominio Santuario de la Noche",
        "location": "Natlan"
      }
    }
  },
  {
    "id": "raiden",
    "name": "Raiden Shogun",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Electro",
    "weaponType": "Lanza",
    "role": "Sub-DPS / Batería Universal / Hipercarry",
    "title": "Arconte Electro · Narukami Inazuma",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/d43f05f8fc369325983636f3284f181d_5391515252655388034.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Luz del Segador (5★)",
        "source": "Gachapón Promocional",
        "desc": "Convierte la Recarga de Energía en Ataque adicional."
      },
      "weaponF2P": {
        "name": "La Captura (4★ R5)",
        "source": "Asociación de Pesca de Inazuma (100% Gratis)",
        "desc": "+32% de daño y +12% de Prob. Crítica en la Habilidad Definitiva."
      },
      "artifacts": {
        "name": "Emblema del Destino (4 piezas)",
        "bonus": "Hasta +75% de daño a la Definitiva según la Recarga.",
        "domain": "Patio de Momiji",
        "location": "Inazuma (Isla Yashiori)"
      },
      "mainStats": {
        "sands": "Recarga de Energía (250-270% objetivo)",
        "goblet": "Bono Daño Electro o Ataque%",
        "circlet": "Probabilidad Crítica o Daño Crítico"
      },
      "substats": "Prob. Crítica = Daño Crítico > Recarga de Energía > Ataque%",
      "bestTeam": {
        "members": [
          "Raiden Shogun (Batería)",
          "Xiangling (Pyronado)",
          "Xingqiu (Hydro)",
          "Bennett (Buffer)"
        ],
        "synergy": "El mítico Raiden National: recarga infinita de definitivas con sobrecargas, vaporizados y electrocargados continuos."
      },
      "talentPriority": "Habilidad Definitiva >>> Habilidad Elemental > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Abalorio de la Tormenta",
        "quantity": "46 uds.",
        "boss": "Manifestación del Trueno",
        "location": "Inazuma: Isla Seirai (Pico Amakumo)"
      },
      "localSpecialty": {
        "name": "Fruto Amakumo",
        "quantity": "168 uds.",
        "route": "Alrededor del Pico Amakumo en la Isla Seirai"
      },
      "talentBooks": {
        "name": "Filosofías de la Luz",
        "domain": "Jardín de los Pensamientos (Inazuma)",
        "days": "Miércoles, Sábado y Domingo",
        "location": "Jardín de los Pensamientos (Inazuma)"
      },
      "weeklyBoss": {
        "name": "Mudra de la Gran Fiera",
        "boss": "Narukami no Mikoto (Shogun Semanal)",
        "location": "Dominio de la Cruzada: Santuario Narukami"
      },
      "commonDrops": {
        "name": "Guardamanos Célebres",
        "enemy": "Nobushi y Kairagi",
        "location": "Todas las islas de Inazuma"
      },
      "artifactDomain": {
        "name": "Patio de Momiji",
        "location": "Inazuma (Isla Yashiori)"
      }
    }
  },
  {
    "id": "nahida",
    "name": "Nahida",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Dendro",
    "weaponType": "Catalizador",
    "role": "Enabler Dendro Supremo / Buffer EM",
    "title": "Reina Menor Kusanali · Arconte Dendro",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Nahida.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Sueños de las Mil Noches (5★)",
        "source": "Gachapón Promocional",
        "desc": "Aporta hasta 290 de Maestría Elemental y bufo de equipo."
      },
      "weaponF2P": {
        "name": "Memorias del Sacrificio (4★)",
        "source": "Gachapón / Canje",
        "desc": "+221 Maestría Elemental y reinicio de habilidad."
      },
      "artifacts": {
        "name": "Recuerdos del Bosque (4 piezas)",
        "bonus": "-30% Resistencia Dendro al golpear con Habilidad Elemental.",
        "domain": "Aguja de la Iluminación Solitaria",
        "location": "Sumeru (Selva Lokapala)"
      },
      "mainStats": {
        "sands": "Maestría Elemental",
        "goblet": "Maestría Elemental o Bono Dendro",
        "circlet": "Maestría Elemental o Prob. Crítica"
      },
      "substats": "Maestría Elemental (hasta 1000) > Prob. Crítica > Daño Crítico > Recarga",
      "bestTeam": {
        "members": [
          "Alhaitham / Cyno (DPS)",
          "Nahida (Dendro)",
          "Xingqiu / Yelan (Hydro)",
          "Kuki Shinobu (Hiperflorecimiento)"
        ],
        "synergy": "Cadena ininterrumpida de núcleos Dendro con daño automático de 35,000+ por proyectil."
      },
      "talentPriority": "Habilidad Elemental (Esquema Trikarma) > Habilidad Definitiva > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Enredadera Reprimida",
        "quantity": "46 uds.",
        "boss": "Hipóstasis Dendro",
        "location": "Sumeru: Desierto de las Columnatas"
      },
      "localSpecialty": {
        "name": "Loto Kalpalata",
        "quantity": "168 uds.",
        "route": "Acantilados y cascadas de la Selva Lokapala y Vissudha"
      },
      "talentBooks": {
        "name": "Filosofías del Ingenio",
        "domain": "Torre de la Ignorancia (Sumeru)",
        "days": "Martes, Viernes y Domingo",
        "location": "Torre de la Ignorancia (Sumeru)"
      },
      "weeklyBoss": {
        "name": "Hilos del Titiritero",
        "boss": "Shouki no Kami (Scaramouche)",
        "location": "Dominio de la Cruzada: Templo de Chinhat (Sumeru)"
      },
      "commonDrops": {
        "name": "Esporas Fúngicas",
        "enemy": "Hongos elementales de Sumeru",
        "location": "Selvas y desiertos de Sumeru"
      },
      "artifactDomain": {
        "name": "Aguja de la Iluminación Solitaria",
        "location": "Sumeru (Selva Lokapala)"
      }
    }
  },
  {
    "id": "kazuha",
    "name": "Kaedehara Kazuha",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Espada Ligera",
    "role": "Buffer Elemental / Agrupador",
    "title": "Vagabundo de las Hojas de Arce · Inazuma",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Kazuha.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Juramento por la Libertad (5★)",
        "source": "Gachapón Promocional",
        "desc": "+198 Maestría Elemental y bufo masivo de Ataque para el grupo."
      },
      "weaponF2P": {
        "name": "Espada de Favonius / Espada de Hierro (4★)",
        "source": "Forja / Gachapón",
        "desc": "Facilidad extrema de recarga y 165 de Maestría Elemental."
      },
      "artifacts": {
        "name": "Sombra Verde Esmeralda (4 piezas)",
        "bonus": "-40% de Resistencia al elemento absorbido por Torbellino.",
        "domain": "Valle del Recuerdo",
        "location": "Mondstadt"
      },
      "mainStats": {
        "sands": "Maestría Elemental",
        "goblet": "Maestría Elemental",
        "circlet": "Maestría Elemental"
      },
      "substats": "Maestría Elemental (buscar 900+) > Recarga de Energía (160% min) > Prob. Crítica",
      "bestTeam": {
        "members": [
          "Cualquier DPS Pyro/Hydro/Electro/Cryo",
          "Kazuha (Trituración)",
          "Bennett",
          "Sub-DPS"
        ],
        "synergy": "Agrupa a los enemigos al instante y otorga hasta +40% de bono de daño elemental puro."
      },
      "talentPriority": "Habilidad Elemental = Habilidad Definitiva > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Engranaje Marioneta",
        "quantity": "46 uds.",
        "boss": "Espadachín Oni (Maguu Kenki)",
        "location": "Inazuma: Isla Yashiori"
      },
      "localSpecialty": {
        "name": "Hongo Marino",
        "quantity": "168 uds.",
        "route": "Costas y arrecifes de las Islas de Inazuma"
      },
      "talentBooks": {
        "name": "Filosofías de la Diligencia",
        "domain": "Mansión Taishan (Liyue)",
        "days": "Martes, Viernes y Domingo",
        "location": "Mansión Taishan (Liyue)"
      },
      "weeklyBoss": {
        "name": "Escama Dorada",
        "boss": "Azhdaha",
        "location": "Dominio de la Cruzada: Bajo el Dragón (Liyue)"
      },
      "commonDrops": {
        "name": "Insignias de Cuervos Ladrones",
        "enemy": "Ladrones de Tesoros",
        "location": "Liyue e Inazuma"
      },
      "artifactDomain": {
        "name": "Valle del Recuerdo",
        "location": "Mondstadt"
      }
    }
  },
  {
    "id": "zhongli",
    "name": "Zhongli",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Lanza",
    "role": "Escudero Supremo / Reductor de Resistencias",
    "title": "Señor de la Roca · Arconte Geo de Liyue",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Zhongli.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Lanza de Favonius / Lanza Negra (3★)",
        "source": "Gachapón / Cofres de Liyue",
        "desc": "Escala Vida% a bajo costo o abastece partículas de energía."
      },
      "weaponF2P": {
        "name": "Borla Negra (3★ R5)",
        "source": "Cofres de Liyue (100% Gratis)",
        "desc": "+46.9% Vida, convirtiéndolo en un tanque impenetrable."
      },
      "artifacts": {
        "name": "Tenacidad de la Geoarmada (4 piezas)",
        "bonus": "+20% Vida y +20% ATK para todo el equipo continuamente.",
        "domain": "Colina Wuwang",
        "location": "Liyue"
      },
      "mainStats": {
        "sands": "Vida%",
        "goblet": "Vida%",
        "circlet": "Vida%"
      },
      "substats": "Vida% > Vida Plana > Recarga de Energía > Prob. Crítica",
      "bestTeam": {
        "members": [
          "Hu Tao (DPS)",
          "Xingqiu (Hydro)",
          "Yelan (Hydro)",
          "Zhongli (Escudo)"
        ],
        "synergy": "Escudo impenetrable con reducción de 20% de todas las resistencias de los enemigos."
      },
      "talentPriority": "Habilidad Elemental (Dominus Lapidis) >>> Habilidad Definitiva > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Pilar de Basalto",
        "quantity": "46 uds.",
        "boss": "Hipóstasis Geo",
        "location": "Liyue: Bosque de Piedra Guyun"
      },
      "localSpecialty": {
        "name": "Cor Lapis",
        "quantity": "168 uds.",
        "route": "Acantilados y cavernas de Monte Hulao y Guyun"
      },
      "talentBooks": {
        "name": "Filosofías del Oro",
        "domain": "Mansión Taishan (Liyue)",
        "days": "Miércoles, Sábado y Domingo",
        "location": "Mansión Taishan (Liyue)"
      },
      "weeklyBoss": {
        "name": "Cuerno de Monoceros Caeli",
        "boss": "Tartaglia (Childe)",
        "location": "Dominio de la Cruzada: Casa Dorada (Liyue)"
      },
      "commonDrops": {
        "name": "Condensado de Slime",
        "enemy": "Slimes de todos los elementos",
        "location": "Por todo Teyvat"
      },
      "artifactDomain": {
        "name": "Colina Wuwang",
        "location": "Liyue"
      }
    }
  },
  {
    "id": "hutao",
    "name": "Hu Tao",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Lanza",
    "role": "Hipercarry Pyro de Vaporizado",
    "title": "Directora 77.ª de la Funeraria El Camino · Liyue",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Hutao.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Báculo de Homa (5★)",
        "source": "Gachapón Promocional",
        "desc": "+66.2% Daño Crítico y convierte Vida% en un bono titánico de Ataque."
      },
      "weaponF2P": {
        "name": "Perdición del Dragón (4★ R5)",
        "source": "Gachapón de Armas / Permanente",
        "desc": "+221 Maestría Elemental y +36% daño contra enemigos afectados por Hydro."
      },
      "artifacts": {
        "name": "Bruja Carmesí en Llamas o Reminiscencia (4 piezas)",
        "bonus": "+15% Daño Pyro y +15% a las reacciones de Vaporizado.",
        "domain": "Palacio Oculto de la Fórmula Zhou",
        "location": "Liyue (Colina Wuwang)"
      },
      "mainStats": {
        "sands": "Vida% o Maestría Elemental",
        "goblet": "Bono de Daño Pyro",
        "circlet": "Probabilidad Crítica o Daño Crítico"
      },
      "substats": "Prob. Crítica (70%+) > Daño Crítico (200%+) > Maestría Elemental > Vida%",
      "bestTeam": {
        "members": [
          "Hu Tao (DPS)",
          "Xingqiu (Hydro)",
          "Yelan (Hydro)",
          "Zhongli (Escudo)"
        ],
        "synergy": "Doble Hydro aporta +25% Vida Max a Hu Tao mientras aplica agua constante para vaporizados de 100,000+ por golpe cargado."
      },
      "talentPriority": "Ataque Normal (Ataques Cargados) = Habilidad Elemental > Habilidad Definitiva"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Jade Juvenil",
        "quantity": "46 uds.",
        "boss": "Protodragarto Geo",
        "location": "Liyue: Valle Tianqiu"
      },
      "localSpecialty": {
        "name": "Flor de Seda",
        "quantity": "168 uds.",
        "route": "Alrededores del Puerto Liyue y Posada Wangshu"
      },
      "talentBooks": {
        "name": "Filosofías de la Diligencia",
        "domain": "Mansión Taishan (Liyue)",
        "days": "Martes, Viernes y Domingo",
        "location": "Mansión Taishan (Liyue)"
      },
      "weeklyBoss": {
        "name": "Fragmento de Monoceros Caeli",
        "boss": "Tartaglia",
        "location": "Casa Dorada (Liyue)"
      },
      "commonDrops": {
        "name": "Néctar de Megaflora",
        "enemy": "Megafloras",
        "location": "Todo Teyvat"
      },
      "artifactDomain": {
        "name": "Palacio Oculto de la Fórmula Zhou",
        "location": "Liyue (Colina Wuwang)"
      }
    }
  },
  {
    "id": "yelan",
    "name": "Yelan",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Arco",
    "role": "Sub-DPS Hydro / Buffer de Daño Continuo",
    "title": "Propietaria del Salón de Té Yanshang · Liyue",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Yelan.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Aqua Simulacra (5★)",
        "source": "Gachapón Promocional",
        "desc": "+88.2% Daño Crítico y +20% de daño pasivo incondicional."
      },
      "weaponF2P": {
        "name": "Arco de Favonius (4★ R5)",
        "source": "Misiones de Aventura / Gachapón (F2P)",
        "desc": "Soluciona al 100% sus requerimientos de Recarga de Energía."
      },
      "artifacts": {
        "name": "Emblema del Destino (4 piezas)",
        "bonus": "Hasta +75% de daño para los dados de agua de su definitiva.",
        "domain": "Patio de Momiji",
        "location": "Inazuma (Yashiori)"
      },
      "mainStats": {
        "sands": "Vida% o Recarga (180-200% min)",
        "goblet": "Bono Daño Hydro",
        "circlet": "Probabilidad Crítica o Daño Crítico"
      },
      "substats": "Recarga de Energía > Prob. Crítica > Daño Crítico > Vida%",
      "bestTeam": {
        "members": [
          "Hu Tao / Alhaitham / Yoimiya",
          "Yelan (Sub-DPS)",
          "Xingqiu (Hydro)",
          "Zhongli (Escudo)"
        ],
        "synergy": "Su pasiva 'Adaptación Fácil' incrementa el daño del personaje en campo hasta un 50% con el paso de los segundos."
      },
      "talentPriority": "Habilidad Definitiva (Dado de las Profundidades) >>> Habilidad Elemental > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Colmillo Rúnico",
        "quantity": "46 uds.",
        "boss": "Serpiente de las Ruinas",
        "location": "Liyue: Minas Subterráneas de Sima"
      },
      "localSpecialty": {
        "name": "Caracola Estelar",
        "quantity": "168 uds.",
        "route": "Playas de Yaoguang y Bosque de Piedra Guyun"
      },
      "talentBooks": {
        "name": "Filosofías de la Prosperidad",
        "domain": "Mansión Taishan (Liyue)",
        "days": "Lunes, Jueves y Domingo",
        "location": "Mansión Taishan (Liyue)"
      },
      "weeklyBoss": {
        "name": "Escama Dorada",
        "boss": "Azhdaha Semanal",
        "location": "Liyue: Monte Hulao"
      },
      "commonDrops": {
        "name": "Insignias de Fatui",
        "enemy": "Soldados Fatui",
        "location": "Todo Teyvat"
      },
      "artifactDomain": {
        "name": "Patio de Momiji",
        "location": "Inazuma (Yashiori)"
      }
    }
  },
  {
    "id": "arlecchino",
    "name": "Arlecchino (La Sota)",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Lanza",
    "role": "Hipercarry Pyro de Pacto Vital",
    "title": "Cuarta de los Heraldos de Fatui · La Sota",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Arlecchino.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Semblanza de la Luna Carmesí (5★)",
        "source": "Gachapón Promocional",
        "desc": "Otorga Pacto Vital continuo y aumenta todo el daño infringido."
      },
      "weaponF2P": {
        "name": "Borla Blanca (3★ R5) / La Captura (4★)",
        "source": "Cofres de Liyue (100% F2P)",
        "desc": "+48% daño en Ataques Normales (accesible abriendo cofres)."
      },
      "artifacts": {
        "name": "Fragmento de la Armonía Fantástica (4 piezas)",
        "bonus": "Hasta +54% de daño al fluctuar el valor del Pacto Vital.",
        "domain": "Dominio de la Declamación",
        "location": "Fontaine (Petrichor)"
      },
      "mainStats": {
        "sands": "Ataque%",
        "goblet": "Bono de Daño Pyro",
        "circlet": "Probabilidad Crítica o Daño Crítico"
      },
      "substats": "Prob. Crítica > Daño Crítico > Ataque% > Maestría Elemental",
      "bestTeam": {
        "members": [
          "Arlecchino (DPS)",
          "Yelan (Hydro)",
          "Bennett (Buffer)",
          "Kaedehara Kazuha (VV)"
        ],
        "synergy": "Arlecchino consume el Pacto Vital para infligir tajos de fuego que liquidan salas enteras sin necesidad de definitiva."
      },
      "talentPriority": "Ataque Normal >>> Habilidad Elemental > Habilidad Definitiva"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Fragmento de Melodía Dorada",
        "quantity": "46 uds.",
        "boss": "Estatua Legada de Mármol",
        "location": "Fontaine: Mar de Antaño (Petrichor)"
      },
      "localSpecialty": {
        "name": "Rosa Arcoíris (Rainbow Rose)",
        "quantity": "168 uds.",
        "route": "Campos y llanuras de Beryl y Fontaine"
      },
      "talentBooks": {
        "name": "Filosofías del Orden",
        "domain": "Dominio Gloria Pálida Olvidada",
        "days": "Miércoles, Sábado y Domingo",
        "location": "Dominio Gloria Pálida Olvidada"
      },
      "weeklyBoss": {
        "name": "Vela de la Luna Carmesí",
        "boss": "La Sota (Arlecchino Semanal)",
        "location": "Dominio de la Cruzada: Fontaine (Mont Esus)"
      },
      "commonDrops": {
        "name": "Insignias de Fatui",
        "enemy": "Soldados Fatui y Recaudadores",
        "location": "Todo Teyvat"
      },
      "artifactDomain": {
        "name": "Dominio de la Declamación",
        "location": "Fontaine (Petrichor)"
      }
    }
  },
  {
    "id": "xilonen",
    "name": "Xilonen",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Espada Ligera",
    "role": "Buffer Universal / Trituradora de Resistencias",
    "title": "Herrera de los Hijos de los Ecos · Natlan",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Xilonen.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Canción del Amanecer de Natlan (5★)",
        "source": "Gachapón Promocional",
        "desc": "Aumenta la Defensa y otorga daño elemental global."
      },
      "weaponF2P": {
        "name": "Espada de Favonius / Flauta de Ezpitzal (4★)",
        "source": "Forja de Natlan / Gachapón",
        "desc": "Aporta Defensa masiva y recarga para todo el grupo."
      },
      "artifacts": {
        "name": "Pergamino del Héroe de la Ceniza de la Noche (4 piezas)",
        "bonus": "+40% de Bono de Daño Elemental a los elementos reactivos.",
        "domain": "Dominio de Natlan",
        "location": "Natlan"
      },
      "mainStats": {
        "sands": "Defensa% o Recarga de Energía",
        "goblet": "Defensa%",
        "circlet": "Bono de Curación o Defensa%"
      },
      "substats": "Defensa% (3000+ objetivo) > Recarga de Energía > Prob. Crítica",
      "bestTeam": {
        "members": [
          "Mavuika / Neuvillette",
          "Xilonen (Trituración -36% y +40% Daño)",
          "Furina / Bennett",
          "Sub-DPS"
        ],
        "synergy": "La Kazuha Geo de Natlan: basta con activar sus patines para reducir un 36% la resistencia a Hydro, Pyro, Electro y Cryo y curar."
      },
      "talentPriority": "Habilidad Elemental > Habilidad Definitiva > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Núcleo de Jade de Natlan",
        "quantity": "46 uds.",
        "boss": "Gólem de Lava de Natlan",
        "location": "Natlan: Cañón de Tequemecan"
      },
      "localSpecialty": {
        "name": "Cristal de Resonancia",
        "quantity": "168 uds.",
        "route": "Cuevas de los Hijos de los Ecos (Natlan)"
      },
      "talentBooks": {
        "name": "Filosofías del Fuego Tribal",
        "domain": "Dominio de la Guerra Ancestral",
        "days": "Lunes, Jueves y Domingo",
        "location": "Dominio de la Guerra Ancestral"
      },
      "weeklyBoss": {
        "name": "Ojo del Destino Ancestral",
        "boss": "Señor de la Noche de Natlan",
        "location": "Dominio Semanal de Natlan"
      },
      "commonDrops": {
        "name": "Silbatos Tribales",
        "enemy": "Guerreros de Natlan",
        "location": "Natlan"
      },
      "artifactDomain": {
        "name": "Dominio de Natlan",
        "location": "Natlan"
      }
    }
  },
  {
    "id": "bennett",
    "name": "Bennett",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Espada Ligera",
    "role": "Buffer de Ataque Supremo / Sanador",
    "title": "Líder de la Brigada de Benny · Mondstadt",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Bennett.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Hoja Afilada Celestial (5★) / Destello en la Oscuridad (4★)",
        "source": "Gachapón",
        "desc": "Ataque Base altísimo para transferir el máximo bono al equipo."
      },
      "weaponF2P": {
        "name": "Prototipo Rencor (4★) / Espada de Favonius (4★)",
        "source": "Forja del Herrero",
        "desc": "Ataque base 510 accesible desde rango de aventura 10."
      },
      "artifacts": {
        "name": "Ritual Antiguo de la Nobleza (4 piezas)",
        "bonus": "+20% ATK para todo el equipo durante 12s al lanzar Definitiva.",
        "domain": "Estanque de Claro y Aguas Turbias",
        "location": "Liyue (Monte Aozang)"
      },
      "mainStats": {
        "sands": "Recarga de Energía (220% min)",
        "goblet": "Vida%",
        "circlet": "Bono de Curación o Vida%"
      },
      "substats": "Recarga de Energía > Vida% > Vida Plana > Probabilidad Crítica",
      "bestTeam": {
        "members": [
          "Cualquier DPS de Ataque",
          "Xiangling",
          "Xingqiu",
          "Bennett"
        ],
        "synergy": "Aporta +1200 de Ataque dentro de su círculo de Fantástica Aventura y cura 8,000 HP por segundo."
      },
      "talentPriority": "Habilidad Definitiva (Viaje Fantástico) >>> Habilidad Elemental > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Semilla de Fuego Eterno",
        "quantity": "46 uds.",
        "boss": "Regisvid Pyro",
        "location": "Liyue: Pendiente Cuijue"
      },
      "localSpecialty": {
        "name": "Margarita Voladora",
        "quantity": "168 uds.",
        "route": "Alrededor de Levantaviento y Guarida de Stormterror"
      },
      "talentBooks": {
        "name": "Filosofías de la Resistencia",
        "domain": "Cañón Coronabrillante (Mondstadt)",
        "days": "Martes, Viernes y Domingo",
        "location": "Cañón Coronabrillante (Mondstadt)"
      },
      "weeklyBoss": {
        "name": "Pluma de Stormterror",
        "boss": "Dvalin",
        "location": "Dominio de la Cruzada: Guarida de Stormterror"
      },
      "commonDrops": {
        "name": "Insignias de Cuervos Ladrones",
        "enemy": "Ladrones de Tesoros",
        "location": "Mondstadt y Liyue"
      },
      "artifactDomain": {
        "name": "Estanque de Claro y Aguas Turbias",
        "location": "Liyue (Monte Aozang)"
      }
    }
  },
  {
    "id": "xiangling",
    "name": "Xiangling",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Lanza",
    "role": "Sub-DPS Pyro Fuera de Campo",
    "title": "Maestra Chef del Restaurante Wanmin · Liyue",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Xiangling.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Báculo de las Arenas Escarlatas (5★) / La Captura (4★)",
        "source": "Pesca / Gachapón",
        "desc": "Daño crítico y recarga perfecta."
      },
      "weaponF2P": {
        "name": "La Captura (4★ R5)",
        "source": "Asociación de Pesca de Inazuma (100% Gratis)",
        "desc": "+32% Daño a Pyronado y +12% Probabilidad Crítica."
      },
      "artifacts": {
        "name": "Emblema del Destino (4 piezas)",
        "bonus": "Convierte la Recarga de Energía en daño descomunal de Pyronado.",
        "domain": "Patio de Momiji",
        "location": "Inazuma (Yashiori)"
      },
      "mainStats": {
        "sands": "Recarga de Energía o Maestría Elemental",
        "goblet": "Bono de Daño Pyro",
        "circlet": "Probabilidad Crítica o Daño Crítico"
      },
      "substats": "Recarga (180-200% min) > Prob. Crítica > Daño Crítico > Maestría",
      "bestTeam": {
        "members": [
          "Tartaglia / Raiden",
          "Xiangling (Pyronado)",
          "Bennett (Batería)",
          "Kazuha (Agrupador)"
        ],
        "synergy": "Vaporizados inversos continuos de 60,000+ por cada vuelta del Pyronado."
      },
      "talentPriority": "Habilidad Definitiva (Pyronado) >>> Habilidad Elemental (Guoba) > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Semilla de Fuego Eterno",
        "quantity": "46 uds.",
        "boss": "Regisvid Pyro",
        "location": "Liyue: Pendiente Cuijue"
      },
      "localSpecialty": {
        "name": "Chile Jueyun",
        "quantity": "168 uds.",
        "route": "Aldea Chingtsé y Paso Lingju (Liyue)"
      },
      "talentBooks": {
        "name": "Filosofías de la Diligencia",
        "domain": "Mansión Taishan (Liyue)",
        "days": "Martes, Viernes y Domingo",
        "location": "Mansión Taishan (Liyue)"
      },
      "weeklyBoss": {
        "name": "Garra de Dvalin",
        "boss": "Stormterror (Dvalin)",
        "location": "Mondstadt"
      },
      "commonDrops": {
        "name": "Condensado de Slime",
        "enemy": "Slimes",
        "location": "Todo Teyvat"
      },
      "artifactDomain": {
        "name": "Patio de Momiji",
        "location": "Inazuma (Yashiori)"
      }
    }
  },
  {
    "id": "xingqiu",
    "name": "Xingqiu",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 4,
    "element": "Hydro",
    "weaponType": "Espada Ligera",
    "role": "Sub-DPS Hydro / Aplicador / Reductor de Daño",
    "title": "Joven Maestro del Gremio Feiyun · Liyue",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Xingqiu.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Espada de Sacrificio (4★ R5)",
        "source": "Gachapón",
        "desc": "Permite lanzar dos Habilidades Elementales seguidas y recargar toda la definitiva."
      },
      "weaponF2P": {
        "name": "Espada de Favonius (4★)",
        "source": "Gachapón / Historia",
        "desc": "Generación de orbes para el equipo."
      },
      "artifacts": {
        "name": "Emblema del Destino (4 piezas)",
        "bonus": "Hasta +75% de daño con las espadas de lluvia de la definitiva.",
        "domain": "Patio de Momiji",
        "location": "Inazuma"
      },
      "mainStats": {
        "sands": "Ataque% o Recarga de Energía",
        "goblet": "Bono de Daño Hydro",
        "circlet": "Probabilidad Crítica o Daño Crítico"
      },
      "substats": "Recarga de Energía (180-200%) > Prob. Crítica > Daño Crítico > Ataque%",
      "bestTeam": {
        "members": [
          "Hu Tao",
          "Xingqiu",
          "Yelan",
          "Zhongli"
        ],
        "synergy": "Doble Hydro: aplicación inagotable para que Hu Tao vaporice todos sus ataques cargados."
      },
      "talentPriority": "Habilidad Definitiva (Espadas de Lluvia) > Habilidad Elemental > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Corazón Limpio",
        "quantity": "46 uds.",
        "boss": "Oceánida de Qingce",
        "location": "Liyue: Llanura Bishui"
      },
      "localSpecialty": {
        "name": "Flor de Seda",
        "quantity": "168 uds.",
        "route": "Jardín Yujing en Liyue y Posada Wangshu"
      },
      "talentBooks": {
        "name": "Filosofías de la Prosperidad",
        "domain": "Mansión Taishan (Liyue)",
        "days": "Lunes, Jueves y Domingo",
        "location": "Mansión Taishan (Liyue)"
      },
      "weeklyBoss": {
        "name": "Cola de Boreas",
        "boss": "Andrius (Lobo del Norte)",
        "location": "Mondstadt: Reino de los Lobos"
      },
      "commonDrops": {
        "name": "Máscaras Dañadas",
        "enemy": "Hilichurls comunes",
        "location": "Todo Teyvat"
      },
      "artifactDomain": {
        "name": "Patio de Momiji",
        "location": "Inazuma"
      }
    }
  },
  {
    "id": "kuki",
    "name": "Kuki Shinobu",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Espada Ligera",
    "role": "Sanadora / Activadora de Hiperflorecimiento",
    "title": "Lugarteniente de la Banda de Arataki · Inazuma",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Shinobu.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Llave de la Coronación (5★) / Espina de Hierro (4★)",
        "source": "Forja / Gachapón",
        "desc": "Aporta hasta 165 de Maestría Elemental o escala Vida masiva."
      },
      "weaponF2P": {
        "name": "Espina de Hierro / Diluvio Floral (4★)",
        "source": "Forja del Herrero (100% Gratis)",
        "desc": "+165 Maestría Elemental directa para detonaciones de 35,000+."
      },
      "artifacts": {
        "name": "Flor del Paraíso Perdido o Sueños Áureos (4 piezas)",
        "bonus": "+140% daño directo a los proyectiles de Hiperflorecimiento.",
        "domain": "Ciudad de los Retazos",
        "location": "Desierto de Sumeru"
      },
      "mainStats": {
        "sands": "Maestría Elemental (buscar 900+)",
        "goblet": "Maestría Elemental",
        "circlet": "Maestría Elemental"
      },
      "substats": "Maestría Elemental >>> Vida% > Recarga de Energía",
      "bestTeam": {
        "members": [
          "Alhaitham / Nahida",
          "Xingqiu / Yelan",
          "Dendro secundario",
          "Kuki Shinobu (Detonadora)"
        ],
        "synergy": "Activa su anillo eléctrico y camina cerca de los núcleos Dendro para aniquilar enemigos de forma pasiva mientras se auto-cura."
      },
      "talentPriority": "Habilidad Elemental (Anillo Santificador) >>> Habilidad Definitiva > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Engranaje Rúnico",
        "quantity": "46 uds.",
        "boss": "Serpiente de las Ruinas",
        "location": "Liyue: Minas Subterráneas de Sima"
      },
      "localSpecialty": {
        "name": "Percibetormentas",
        "quantity": "168 uds.",
        "route": "Isla Seirai (Inazuma)"
      },
      "talentBooks": {
        "name": "Filosofías de la Elegancia",
        "domain": "Jardín de los Pensamientos",
        "days": "Martes, Viernes y Domingo",
        "location": "Jardín de los Pensamientos"
      },
      "weeklyBoss": {
        "name": "Lágrima de la Diosa de la Calamidad",
        "boss": "Shogun Raiden Semanal",
        "location": "Inazuma"
      },
      "commonDrops": {
        "name": "Caparazones Espectrales",
        "enemy": "Espectros Elementales",
        "location": "Inazuma (Watatsumi y Seirai)"
      },
      "artifactDomain": {
        "name": "Ciudad de los Retazos",
        "location": "Desierto de Sumeru"
      }
    }
  },
  {
    "id": "fischl",
    "name": "Fischl",
    "game": "genshin",
    "gameName": "Genshin Impact",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Arco",
    "role": "Sub-DPS Electro / Ametralladora Oz",
    "title": "Princesa del Juicio · Gremio de Aventureros",
    "avatar": "https://enka.network/ui/UI_AvatarIcon_Fischl.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Estrella Invernal (5★) / Último Acorde (4★)",
        "source": "Gachapón",
        "desc": "+48% de daño a las habilidades con Maestría Elemental."
      },
      "weaponF2P": {
        "name": "Último Acorde (4★) / Cazador del Callejón (4★)",
        "source": "Gachapón / Eventos",
        "desc": "Aumenta directamente el daño de la Habilidad Elemental."
      },
      "artifacts": {
        "name": "Compañía Dorada (4 piezas)",
        "bonus": "+70% Daño de Habilidad Elemental para Oz fuera de campo.",
        "domain": "Dominio Fin del Pecado",
        "location": "Fontaine"
      },
      "mainStats": {
        "sands": "Ataque%",
        "goblet": "Bono Daño Electro",
        "circlet": "Probabilidad Crítica o Daño Crítico"
      },
      "substats": "Prob. Crítica > Daño Crítico > Ataque% > Maestría Elemental",
      "bestTeam": {
        "members": [
          "Keqing / Clorinde",
          "Fischl (Oz)",
          "Nahida / Dendro",
          "Kazuha / Sacarosa"
        ],
        "synergy": "Oz ametralla continuamente a los enemigos disparando el talento pasivo Rayo del Juicio en cada reacción electro."
      },
      "talentPriority": "Habilidad Elemental (Oz) >>> Habilidad Definitiva > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Prisma del Relámpago",
        "quantity": "46 uds.",
        "boss": "Hipóstasis Electro",
        "location": "Mondstadt: Cabo Promesa"
      },
      "localSpecialty": {
        "name": "Hierba Marina Pequeña",
        "quantity": "168 uds.",
        "route": "Susurrante Bosque y Levantaviento"
      },
      "talentBooks": {
        "name": "Filosofías de la Balada",
        "domain": "Cañón Coronabrillante",
        "days": "Miércoles, Sábado y Domingo",
        "location": "Cañón Coronabrillante"
      },
      "weeklyBoss": {
        "name": "Aliento de Stormterror",
        "boss": "Dvalin Semanal",
        "location": "Mondstadt"
      },
      "commonDrops": {
        "name": "Puntas de Flecha de Tirador",
        "enemy": "Hilichurls Ballesteros",
        "location": "Todo Teyvat"
      },
      "artifactDomain": {
        "name": "Dominio Fin del Pecado",
        "location": "Fontaine"
      }
    }
  },
  {
    "id": "acheron",
    "name": "Acheron",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 5,
    "element": "Rayo",
    "weaponType": "Nihilidad",
    "role": "Hipercarry de Daño Masivo",
    "title": "Vigilante de la Galaxia Errante · Nihilidad",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1308.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "A lo Largo de la Orilla Fugaz (5★)",
        "source": "Salto Promocional de Conos",
        "desc": "Aplica estado de Burbuja Carmesí y otorga 36% de Daño Crítico."
      },
      "weaponF2P": {
        "name": "Buenas Noches, Que Duermas Bien (4★ S5)",
        "source": "Saltos de Conos / Tienda",
        "desc": "Hasta +72% de daño directo contra enemigos con 3 debuffs."
      },
      "artifacts": {
        "name": "Buceadora de las Aguas Sombrías (4 piezas) + Izumo Gensei (2 piezas)",
        "bonus": "+24% Daño Crítico y +12% Ataque.",
        "domain": "Caverna de la Corrosión: Senda de los Sueños",
        "location": "Penacony"
      },
      "mainStats": {
        "sands": "Ataque% o Velocidad",
        "goblet": "Ataque% o Bono Daño Rayo",
        "circlet": "Daño Crítico o Prob. Crítica"
      },
      "substats": "Daño Crítico > Probabilidad Crítica > Ataque% > Velocidad",
      "bestTeam": {
        "members": [
          "Acheron (DPS)",
          "Jiaoqiu / Pela (Nihilidad)",
          "Black Swan / Silver Wolf (Debuffer)",
          "Aventurine (Conservación)"
        ],
        "synergy": "Cada debuff aplicado por aliados otorga una carga de Sueño Rajado para disparar la Definitiva cada 1-2 turnos."
      },
      "talentPriority": "Habilidad Definitiva >>> Habilidad Básica > Talento > Ataque Básico"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Instrumento del Juicio Carmesí",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada: Forma del Juicio",
        "location": "Penacony: Hotel Reverie (Paisaje Onírico)"
      },
      "localSpecialty": {
        "name": "Componentes del Paisaje Onírico",
        "quantity": "Materiales de Región",
        "route": "Tienda del relojero y cofres de Penacony"
      },
      "talentBooks": {
        "name": "Boceto Ignoto / Obra Maestra Astral",
        "domain": "Cáliz Carmesí: Senda de la Nihilidad",
        "days": "Todos los días",
        "location": "Cáliz Carmesí: Senda de la Nihilidad"
      },
      "weeklyBoss": {
        "name": "Agravios Pasados de la Devoradora de Planetas",
        "boss": "Eco de la Guerra: Hendidura del Fin",
        "location": "Estación Espacial Herta: Zona de Reclusión"
      },
      "commonDrops": {
        "name": "Núcleo de las Sombras",
        "enemy": "Engendros de la Fragilidad",
        "location": "Penacony y Luofu"
      },
      "artifactDomain": {
        "name": "Caverna de la Corrosión: Senda de los Sueños",
        "location": "Penacony"
      }
    }
  },
  {
    "id": "feixiao",
    "name": "Feixiao",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 5,
    "element": "Viento",
    "weaponType": "Cacería",
    "role": "Hipercarry FUA / General de Xianzhou",
    "title": "General del Viento del Luofu de Xianzhou",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1302.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Me Quedo con la Cacería (5★)",
        "source": "Salto Promocional de Conos",
        "desc": "Ignora el 54% de la defensa y carga la definitiva con ataques adicionales."
      },
      "weaponF2P": {
        "name": "Crucero Estelar (5★ S5)",
        "source": "Tienda de Herta del Universo Simulado (100% Gratis)",
        "desc": "+16% Probabilidad Crítica y +40% Ataque al derrotar enemigos."
      },
      "artifacts": {
        "name": "Valerosa del Viento (4 piezas) + Duran (2 piezas)",
        "bonus": "Hasta +25% de daño a ataques adicionales y definitiva.",
        "domain": "Caverna de la Corrosión de Xianzhou",
        "location": "Luofu de Xianzhou"
      },
      "mainStats": {
        "sands": "Ataque% o Velocidad (134 min)",
        "goblet": "Bono de Daño Viento o Ataque%",
        "circlet": "Daño Crítico"
      },
      "substats": "Daño Crítico > Probabilidad Crítica (80%+) > Velocidad > Ataque%",
      "bestTeam": {
        "members": [
          "Feixiao (Hipercarry)",
          "Robin (Buffer FUA)",
          "Topaz / Moze (Sub-DPS FUA)",
          "Aventurine / Lingsha (Sostén)"
        ],
        "synergy": "El equipo supremo de Ataques Adicionales: cada golpe de Topaz o Aventurine genera cargas de hacha para Feixiao."
      },
      "talentPriority": "Habilidad Definitiva >>> Talento (Ataques Adicionales) > Habilidad Básica > Ataque Básico"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Colmillo de la Bestia Aérea",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada: Forma de la Fiera",
        "location": "Xianzhou: Comisión de Boticarios"
      },
      "localSpecialty": {
        "name": "Brote Inmortal",
        "quantity": "Materiales de Región",
        "route": "Comisión de Artesanía y Adivinación (Luofu)"
      },
      "talentBooks": {
        "name": "Flecha del Asesino de Bestias",
        "domain": "Cáliz Carmesí: Senda de la Cacería",
        "days": "Todos los días",
        "location": "Cáliz Carmesí: Senda de la Cacería"
      },
      "weeklyBoss": {
        "name": "Fruto del Árbol de la Ambrosía",
        "boss": "Fantasma de la Ruina: Phantylia",
        "location": "Eco de la Guerra: Árbol de la Ambrosía"
      },
      "commonDrops": {
        "name": "Fragmentos Mecánicos",
        "enemy": "Soldados Marciales de Xianzhou",
        "location": "Luofu de Xianzhou"
      },
      "artifactDomain": {
        "name": "Caverna de la Corrosión de Xianzhou",
        "location": "Luofu de Xianzhou"
      }
    }
  },
  {
    "id": "firefly",
    "name": "Firefly (SAM)",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 5,
    "element": "Fuego",
    "weaponType": "Destrucción",
    "role": "Hipercarry de Superruptura",
    "title": "Armadura de Combate SAM · Cazadora de Estelaron",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1310.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Hacia Donde las Luces Vuelan (5★)",
        "source": "Salto Promocional de Conos",
        "desc": "+60% Efecto de Ruptura y vulnerabilidad masiva a ruptura."
      },
      "weaponF2P": {
        "name": "Sobre la Caída de un Eón (5★ S5)",
        "source": "Tienda del Universo Simulado (100% Gratis F2P)",
        "desc": "+64% Ataque que se convierte directamente en Efecto de Ruptura."
      },
      "artifacts": {
        "name": "Forja de la Linterna de Hierro (4 piezas) + Kalpagni (2 piezas)",
        "bonus": "Ignora hasta un 25% de la Defensa en daño de Superruptura.",
        "domain": "Caverna de la Corrosión de Penacony",
        "location": "Penacony"
      },
      "mainStats": {
        "sands": "Ataque%",
        "goblet": "Ataque%",
        "circlet": "Ataque% o Probabilidad Crítica"
      },
      "substats": "Efecto de Ruptura (buscar 250-360%+) > Velocidad (150+ para 4 turnos en combustión) > Ataque%",
      "bestTeam": {
        "members": [
          "Firefly (SAM)",
          "Trazacaminos Imaginario (Superruptura)",
          "Ruan Mei (Eficiencia de Ruptura)",
          "Gallagher (Sanador)"
        ],
        "synergy": "El equipo de Ruptura definitivo: Ruan Mei extiende la debilidad enemiga mientras SAM ejecuta 400,000+ de daño de Superruptura por turno."
      },
      "talentPriority": "Habilidad Definitiva (Combustión Completa) > Talento = Habilidad Básica > Ataque Básico"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Corazón de Furia Ardiente",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada: Forma de la Calcinación",
        "location": "Penacony: Paisaje Onírico"
      },
      "localSpecialty": {
        "name": "Engranajes Oníricos",
        "quantity": "Materiales de Región",
        "route": "Horas doradas y Mansión del Rocío (Penacony)"
      },
      "talentBooks": {
        "name": "Dientes de Borisin",
        "domain": "Cáliz Carmesí: Senda de la Destrucción",
        "days": "Todos los días",
        "location": "Cáliz Carmesí: Senda de la Destrucción"
      },
      "weeklyBoss": {
        "name": "Ecos de los Sueños Pasados",
        "boss": "Coro Armónico",
        "location": "Eco de la Guerra: Gran Teatro de Penacony"
      },
      "commonDrops": {
        "name": "Corazones de la Fragilidad",
        "enemy": "Monstruos de la Mente Onírica",
        "location": "Penacony"
      },
      "artifactDomain": {
        "name": "Caverna de la Corrosión de Penacony",
        "location": "Penacony"
      }
    }
  },
  {
    "id": "robin",
    "name": "Robin",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 5,
    "element": "Físico",
    "weaponType": "Armonía",
    "role": "Buffer Universal de Acción Inmediata",
    "title": "Cantante Celestial de Penacony · Armonía",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1309.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Al Amanecer de la Noche (5★)",
        "source": "Salto Promocional de Conos",
        "desc": "Aporta regeneración de energía cada vez que un aliado ataca y +48% Ataque."
      },
      "weaponF2P": {
        "name": "Por el Mañana que Soñamos (4★ S5)",
        "source": "Evento de Penacony / Tienda",
        "desc": "Ataque% y bono de daño general para todo el equipo."
      },
      "artifacts": {
        "name": "Mosquetera del Trigo Silvestre (2) + Prisionero (2) + Vonwacq / Penacony (2)",
        "bonus": "Ataque puro (+24%) y acción adelantada al inicio del combate.",
        "domain": "Caverna de la Corrosión",
        "location": "Espacio exterior"
      },
      "mainStats": {
        "sands": "Ataque%",
        "goblet": "Ataque%",
        "circlet": "Ataque%"
      },
      "substats": "Ataque% (buscar 4000+ ATK) > Velocidad (120 min) > Vida% / Defensa%",
      "bestTeam": {
        "members": [
          "Feixiao / Dr. Ratio",
          "Robin (Concierto)",
          "Topaz / March 7th Cacería",
          "Aventurine"
        ],
        "synergy": "Al activar 'Concierto', adelanta el 100% de las acciones de todo el equipo y añade un golpe de 20,000+ de daño físico en cada ataque de cualquier aliado."
      },
      "talentPriority": "Habilidad Definitiva >>> Habilidad Básica = Talento > Ataque Básico"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Permiso de Entrada Onírico",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada: Forma de la Armonía",
        "location": "Penacony: Frontera del Sueño"
      },
      "localSpecialty": {
        "name": "Viales de Néctar Dulce",
        "quantity": "Materiales de Región",
        "route": "Parques y teatros de Penacony"
      },
      "talentBooks": {
        "name": "Partitura Celestial",
        "domain": "Cáliz Carmesí: Senda de la Armonía",
        "days": "Todos los días",
        "location": "Cáliz Carmesí: Senda de la Armonía"
      },
      "weeklyBoss": {
        "name": "Remordimientos Pasados del Coro",
        "boss": "Coro Armónico",
        "location": "Eco de la Guerra: Gran Teatro"
      },
      "commonDrops": {
        "name": "Piezas Oníricas",
        "enemy": "Bailarines y Arlequines de Penacony",
        "location": "Penacony"
      },
      "artifactDomain": {
        "name": "Caverna de la Corrosión",
        "location": "Espacio exterior"
      }
    }
  },
  {
    "id": "ruanmei",
    "name": "Ruan Mei",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 5,
    "element": "Hielo",
    "weaponType": "Armonía",
    "role": "Buffer Suprema de Ruptura y Velocidad",
    "title": "Miembro N.° 81 de la Sociedad de Genios",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1305.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "El Pasado y el Futuro / Cono Exclusivo de Ruan Mei (5★)",
        "source": "Salto Promocional",
        "desc": "+60% Efecto de Ruptura y recuperación de puntos de habilidad."
      },
      "weaponF2P": {
        "name": "Recuerdos del Pasado (4★ S5) / Ruedas de Engranaje (3★)",
        "source": "Gachapón / Historia",
        "desc": "Regeneración de energía masiva para Definitiva de 3 turnos."
      },
      "artifacts": {
        "name": "Ladrón del Meteoro (2) + Mensajero (2) + Talia / Vonwacq (2)",
        "bonus": "+16% Ruptura y +6% Velocidad.",
        "domain": "Caverna de la Corrosión",
        "location": "Estación Espacial"
      },
      "mainStats": {
        "sands": "Velocidad (145+ min)",
        "goblet": "Vida% o Defensa%",
        "circlet": "Vida% o Defensa%"
      },
      "substats": "Efecto de Ruptura (160-180% min) > Velocidad > Vida% > Defensa%",
      "bestTeam": {
        "members": [
          "Cualquier Equipo (Firefly, Kafka, Jingliu, Feixiao)",
          "Ruan Mei",
          "Sub-DPS / Buffer",
          "Sostén"
        ],
        "synergy": "Aumenta la Eficiencia de Ruptura un 50%, la Velocidad un 10% y penetra un 25% de todas las resistencias."
      },
      "talentPriority": "Habilidad Básica = Habilidad Definitiva > Talento > Ataque Básico"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Hendidura de la Nieve Eterna",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada del Frío",
        "location": "Jarilo-VI: Colina del Siempreinvierno"
      },
      "localSpecialty": {
        "name": "Carcasa de la Criatura Onírica",
        "quantity": "Materiales de Región",
        "route": "Estación Espacial Herta"
      },
      "talentBooks": {
        "name": "Himno Armónico",
        "domain": "Cáliz Carmesí de la Armonía",
        "days": "Todos los días",
        "location": "Cáliz Carmesí de la Armonía"
      },
      "weeklyBoss": {
        "name": "Devoradora de Planetas",
        "boss": "Eco de la Guerra: Hendidura Estelar",
        "location": "Estación Herta"
      },
      "commonDrops": {
        "name": "Componentes de Autómatas",
        "enemy": "Autómatas de Jarilo",
        "location": "Jarilo-VI"
      },
      "artifactDomain": {
        "name": "Caverna de la Corrosión",
        "location": "Estación Espacial"
      }
    }
  },
  {
    "id": "aventurine",
    "name": "Aventurine",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 5,
    "element": "Imaginario",
    "weaponType": "Conservación",
    "role": "Escudero Infranqueable / Sub-DPS FUA",
    "title": "Ejecutivo del Departamento de Inversiones Estratégicas · CPI",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1304.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "El Destino Injusto (5★)",
        "source": "Salto Promocional de Conos",
        "desc": "+40% Defensa y aumenta el daño crítico recibido por los enemigos."
      },
      "weaponF2P": {
        "name": "El Concierto para Dos (4★) / Destino Tejido (4★)",
        "source": "Tienda del Salón Olvidado",
        "desc": "Defensa% masiva que alimenta el escudo de todo el equipo."
      },
      "artifacts": {
        "name": "Palacio de los Caballeros de la Pureza (4 piezas) + Salsotto Inerte (2)",
        "bonus": "+20% fuerza de escudos y +15% Probabilidad Crítica.",
        "domain": "Caverna de la Corrosión",
        "location": "Jarilo-VI"
      },
      "mainStats": {
        "sands": "Defensa% o Velocidad",
        "goblet": "Defensa% o Daño Imaginario",
        "circlet": "Defensa% o Daño Crítico"
      },
      "substats": "Defensa% (alcanzar 4000 DEF para +48% Prob. Crítica) > Daño Crítico > Velocidad",
      "bestTeam": {
        "members": [
          "Feixiao / Acheron / Dr. Ratio",
          "Topaz",
          "Robin",
          "Aventurine (Escudo)"
        ],
        "synergy": "Renueva escudos automáticamente cada vez que los aliados ejecutan ataques adicionales, acumulando dados para su contraataque."
      },
      "talentPriority": "Talento (Escudo Apilado) = Habilidad Básica > Definitiva > Ataque Básico"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Moneda de Oro Onírica",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada de Penacony",
        "location": "Penacony: Parque Temático"
      },
      "localSpecialty": {
        "name": "Ficha de Casino Onírico",
        "quantity": "Materiales de Región",
        "route": "Penacony"
      },
      "talentBooks": {
        "name": "Escudo de la Conservación",
        "domain": "Cáliz Carmesí de la Conservación",
        "days": "Todos los días",
        "location": "Cáliz Carmesí de la Conservación"
      },
      "weeklyBoss": {
        "name": "Eco del Coro Armónico",
        "boss": "Coro Armónico",
        "location": "Gran Teatro de Penacony"
      },
      "commonDrops": {
        "name": "Piezas Mecánicas Oníricas",
        "enemy": "Bailarines de Penacony",
        "location": "Penacony"
      },
      "artifactDomain": {
        "name": "Caverna de la Corrosión",
        "location": "Jarilo-VI"
      }
    }
  },
  {
    "id": "danhengil",
    "name": "Dan Heng · Imbibitor Lunae",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 5,
    "element": "Imaginario",
    "weaponType": "Destrucción",
    "role": "Hipercarry de Explosión de SP",
    "title": "Gran Anciano Vidyadhara · Dragón del Luofu",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1213.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Más Brillante que el Sol (5★)",
        "source": "Salto Promocional",
        "desc": "+18% Prob. Crítica y regeneración de energía con acumulación de Danza del Dragón."
      },
      "weaponF2P": {
        "name": "Sobre la Caída de un Eón (5★ S5)",
        "source": "Tienda del Universo Simulado (100% Gratis)",
        "desc": "+64% Ataque y daño amplificado al romper debilidades."
      },
      "artifacts": {
        "name": "Habitante del Yermo de los Bandidos (4) + Rutilante (2)",
        "bonus": "+10% Daño Imaginario y +20% Daño Crítico.",
        "domain": "Caverna de la Corrosión",
        "location": "Xianzhou Luofu"
      },
      "mainStats": {
        "sands": "Ataque% o Velocidad",
        "goblet": "Bono Daño Imaginario",
        "circlet": "Probabilidad Crítica o Daño Crítico"
      },
      "substats": "Prob. Crítica (70% min para Rutilante) > Daño Crítico > Ataque% > Velocidad",
      "bestTeam": {
        "members": [
          "Dan Heng IL (DPS)",
          "Sparkle (Batería SP)",
          "Tingyun (Energía)",
          "Huohuo / Luocha"
        ],
        "synergy": "Sparkle provee 7 Puntos de Habilidad para que Dan Heng desate 'Salto Fulgurante' de 3 cargas cada turno."
      },
      "talentPriority": "Ataque Básico Potenciado >>> Habilidad Definitiva > Talento > Habilidad Básica"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Edicto de la Pacificación",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada del Dragón",
        "location": "Xianzhou Luofu: Desfiladero de Escamas"
      },
      "localSpecialty": {
        "name": "Escamas Vidyadhara",
        "quantity": "Materiales de Región",
        "route": "Xianzhou Luofu"
      },
      "talentBooks": {
        "name": "Loto Purificador",
        "domain": "Cáliz Carmesí de la Destrucción",
        "days": "Todos los días",
        "location": "Cáliz Carmesí de la Destrucción"
      },
      "weeklyBoss": {
        "name": "Eco de Phantylia",
        "boss": "Phantylia Semanal",
        "location": "Xianzhou Luofu"
      },
      "commonDrops": {
        "name": "Núcleos de Inmortalidad",
        "enemy": "Soldados Inmortales",
        "location": "Luofu"
      },
      "artifactDomain": {
        "name": "Caverna de la Corrosión",
        "location": "Xianzhou Luofu"
      }
    }
  },
  {
    "id": "tingyun",
    "name": "Tingyun",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 4,
    "element": "Rayo",
    "weaponType": "Armonía",
    "role": "Buffer de Ataque & Batería de Energía",
    "title": "Emisaria de la Comisión de Vuelos · Luofu",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1009.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "La Batalla No Ha Terminado (5★)",
        "source": "Tienda de Canje Estelar (100% Gratis)",
        "desc": "Regeneración de energía y +30% de daño al siguiente aliado."
      },
      "weaponF2P": {
        "name": "Ruedas de Engranaje (3★ S5) / El Baile No Para (4★)",
        "source": "Saltos / Historia",
        "desc": "Permite definitivas cada 3 turnos garantizados."
      },
      "artifacts": {
        "name": "Mensajero del Espacio Hackeado (4 piezas) + Quilla Rota (2)",
        "bonus": "+12% Velocidad y +10% Daño Crítico para todo el grupo.",
        "domain": "Caverna de la Comisión",
        "location": "Xianzhou Luofu"
      },
      "mainStats": {
        "sands": "Velocidad (160+ objetivo)",
        "goblet": "Ataque% o Vida%",
        "circlet": "Ataque% o Vida%"
      },
      "substats": "Velocidad > Ataque% (hasta alcanzar 2600 ATK) > Resistencia a Efectos",
      "bestTeam": {
        "members": [
          "Dan Heng IL / Jingliu / Jing Yuan",
          "Tingyun (Batería)",
          "Buffer secundario",
          "Sustento"
        ],
        "synergy": "Otorga +50 de Energía directa y hasta +50% de daño extra con su definitiva."
      },
      "talentPriority": "Habilidad Definitiva = Habilidad Básica > Talento > Ataque Básico"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Corona del Rayo de la Sombra",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada de la Tormenta",
        "location": "Xianzhou Luofu"
      },
      "localSpecialty": {
        "name": "Brotes de Inmortalidad",
        "quantity": "Materiales de Región",
        "route": "Comisión de Vuelos y Puerto"
      },
      "talentBooks": {
        "name": "Himno de la Armonía",
        "domain": "Cáliz Carmesí de la Armonía",
        "days": "Todos los días",
        "location": "Cáliz Carmesí de la Armonía"
      },
      "weeklyBoss": {
        "name": "Huella del Destino / Eco de Phantylia",
        "boss": "Phantylia",
        "location": "Luofu de Xianzhou"
      },
      "commonDrops": {
        "name": "Piezas de Autómatas",
        "enemy": "Soldados Marciales",
        "location": "Luofu"
      },
      "artifactDomain": {
        "name": "Caverna de la Comisión",
        "location": "Xianzhou Luofu"
      }
    }
  },
  {
    "id": "gallagher",
    "name": "Gallagher",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 4,
    "element": "Fuego",
    "weaponType": "Abundancia",
    "role": "Sanador de Ruptura / Batería de SP",
    "title": "Oficial de Seguridad de Penacony · Sabueso",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1301.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Qué Es Real (4★ S5)",
        "source": "Tienda del Salón Olvidado (100% Gratis)",
        "desc": "Aporta +48% Efecto de Ruptura y auto-curación."
      },
      "weaponF2P": {
        "name": "Multiplicación (3★ S5)",
        "source": "Saltos / Misiones",
        "desc": "Adelanta su propia acción un 20% tras ataques básicos, generando SP ilimitado."
      },
      "artifacts": {
        "name": "Ladrón del Meteoro (2) + Mensajero (2) + Kalpagni (2)",
        "bonus": "Efecto de Ruptura y Velocidad extrema.",
        "domain": "Caverna de la Corrosión",
        "location": "Penacony"
      },
      "mainStats": {
        "sands": "Velocidad (145+)",
        "goblet": "Vida% o Defensa%",
        "circlet": "Bono de Curación"
      },
      "substats": "Efecto de Ruptura (150% objetivo) > Velocidad > Resistencia a Efectos",
      "bestTeam": {
        "members": [
          "Firefly (SAM)",
          "Trazacaminos Imaginario",
          "Ruan Mei",
          "Gallagher"
        ],
        "synergy": "Aplica estado de 'Intoxicación' que aumenta el daño de ruptura recibido y cura a cualquier aliado que golpee al objetivo."
      },
      "talentPriority": "Talento (Curación por Golpe) > Habilidad Definitiva > Habilidad Básica > Ataque Básico"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Combustión del Sabueso",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada: Paisaje Onírico",
        "location": "Penacony"
      },
      "localSpecialty": {
        "name": "Viales de Soda Penacony",
        "quantity": "Materiales de Región",
        "route": "Bares y hoteles de Penacony"
      },
      "talentBooks": {
        "name": "Semilla de la Abundancia",
        "domain": "Cáliz Carmesí de la Abundancia",
        "days": "Todos los días",
        "location": "Cáliz Carmesí de la Abundancia"
      },
      "weeklyBoss": {
        "name": "Ecos del Fin del Mundo",
        "boss": "Eco de la Guerra: Gran Teatro",
        "location": "Penacony"
      },
      "commonDrops": {
        "name": "Componentes de la Mente",
        "enemy": "Sombras de Penacony",
        "location": "Penacony"
      },
      "artifactDomain": {
        "name": "Caverna de la Corrosión",
        "location": "Penacony"
      }
    }
  },
  {
    "id": "pela",
    "name": "Pela",
    "game": "hsr",
    "gameName": "Honkai: Star Rail",
    "rarity": 4,
    "element": "Hielo",
    "weaponType": "Nihilidad",
    "role": "Trituradora de Defensa en Área",
    "title": "Oficial de Inteligencia de los Guardias Crinplateada · Belobog",
    "avatar": "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/1105.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Resolución Brillante (4★ S5)",
        "source": "Gachapón",
        "desc": "Aplica un segundo debuff de Enredo que tritura un 16% adicional de Defensa."
      },
      "weaponF2P": {
        "name": "Antes de que Comience la Misión (4★ S5) / Ruedas (3★)",
        "source": "Evento / Gachapón",
        "desc": "Regeneración de energía para Definitiva de 2 turnos."
      },
      "artifacts": {
        "name": "Mensajero (2) + Guardia de la Nieve (2) + Quilla Rota (2)",
        "bonus": "+6% Velocidad y supervivencia para soportar golpes pesados.",
        "domain": "Caverna de la Corrosión",
        "location": "Jarilo-VI"
      },
      "mainStats": {
        "sands": "Velocidad (155+ objetivo)",
        "goblet": "Vida% o Acierto de Efecto",
        "circlet": "Vida% o Defensa%"
      },
      "substats": "Velocidad > Acierto de Efecto (57% min) > Resistencia a Efectos > Vida%",
      "bestTeam": {
        "members": [
          "Acheron / Jingliu / Dr. Ratio",
          "Pela (Trituración AoE -42% DEF)",
          "Buffer secundario",
          "Sustento"
        ],
        "synergy": "Genera 1 Punto de Habilidad cada turno y reduce la defensa de todos los enemigos en el campo con coste de energía mínimo."
      },
      "talentPriority": "Habilidad Definitiva >>> Talento > Habilidad Básica > Ataque Básico"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Nieve Helada de Belobog",
        "quantity": "65 uds.",
        "boss": "Sombra Estancada de Jarilo",
        "location": "Jarilo-VI: Llanuras de Nieve"
      },
      "localSpecialty": {
        "name": "Piezas de Nieve de Belobog",
        "quantity": "Materiales de Región",
        "route": "Jarilo-VI"
      },
      "talentBooks": {
        "name": "Boceto de la Nihilidad",
        "domain": "Cáliz Carmesí de la Nihilidad",
        "days": "Todos los días",
        "location": "Cáliz Carmesí de la Nihilidad"
      },
      "weeklyBoss": {
        "name": "Eco de Cocolia",
        "boss": "Cocolia (Madre del Engaño)",
        "location": "Jarilo-VI: Colina del Siempreinvierno"
      },
      "commonDrops": {
        "name": "Insignias Crinplateada",
        "enemy": "Guardias de Belobog",
        "location": "Jarilo-VI"
      },
      "artifactDomain": {
        "name": "Caverna de la Corrosión",
        "location": "Jarilo-VI"
      }
    }
  },
  {
    "id": "ellen",
    "name": "Ellen Joe",
    "game": "zzz",
    "gameName": "Zenless Zone Zero",
    "rarity": 5,
    "element": "Hielo",
    "weaponType": "Atacante",
    "role": "Hipercarry de Hielo Supremo",
    "title": "Tiburón de Servicio · Victoria Housekeeping",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/nap/111874/8d6c70ea9767ee60fa77cf20fc190532_3075253805904033324.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Visitante del Mar Profundo (S-Rank)",
        "source": "Canal Exclusivo de Motores W",
        "desc": "+24% Probabilidad Crítica y +25% Daño de Hielo al golpear con Tijera."
      },
      "weaponF2P": {
        "name": "Cañón Estelar (A-Rank)",
        "source": "Tienda de Motores / Pase de Batalla",
        "desc": "Excelente escalado de Ataque y Daño Físico/Hielo."
      },
      "artifacts": {
        "name": "Metal Polar (4 piezas) + Pájaro Carpintero (2 piezas)",
        "bonus": "+28% Daño de Hielo y bonificaciones críticas al conectar ataques rápidos.",
        "domain": "Limpieza de Cavidad: Pista Helada",
        "location": "Nueva Eridu: Puesto de Control"
      },
      "mainStats": {
        "sands": "Partición 4: Prob. Crítica / Daño Crítico",
        "goblet": "Partición 5: Daño de Hielo",
        "circlet": "Partición 6: Ataque%"
      },
      "substats": "Daño Crítico > Probabilidad Crítica > Ataque% > Penetración",
      "bestTeam": {
        "members": [
          "Ellen Joe (DPS)",
          "Von Lycaon (Aturdidor)",
          "Soukaku (Buffer)",
          "Bangbú Tiburón (S-Rank)"
        ],
        "synergy": "Lycaon aturde al enemigo en 4 segundos, Soukaku transfiere +1000 ATK de Hielo y Ellen desata ráfagas de 500,000+ de daño."
      },
      "talentPriority": "Ataque Normal (Tijera Cortante) > Habilidad Especial EX > Definitiva > Evasión"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Sello de Cazador Helado",
        "quantity": "30 uds.",
        "boss": "Cazador Notorio de la Cavidad Cero",
        "location": "Nueva Eridu: Cavidad Cero (Sector de Hielo)"
      },
      "localSpecialty": {
        "name": "Baterías de Éter Refinado",
        "quantity": "Materiales de Región",
        "route": "Comisaría de Sexta Calle y Tienda 141"
      },
      "talentBooks": {
        "name": "Chips de Congelación Básicos / Avanzados",
        "domain": "Entrenamiento Táctico de Hielo",
        "days": "Todos los días",
        "location": "Entrenamiento Táctico de Hielo"
      },
      "weeklyBoss": {
        "name": "Núcleo de Marioneta Gemela",
        "boss": "Cazador Notorio: Marionetas Corruptas",
        "location": "Cavidad Cero: Centro de Comando"
      },
      "commonDrops": {
        "name": "Placas de Circuito de Ethereals",
        "enemy": "Ethereals de Cavidad",
        "location": "Todas las comisiones de Nueva Eridu"
      },
      "artifactDomain": {
        "name": "Limpieza de Cavidad: Pista Helada",
        "location": "Nueva Eridu: Puesto de Control"
      }
    }
  },
  {
    "id": "janedoe",
    "name": "Jane Doe",
    "game": "zzz",
    "gameName": "Zenless Zone Zero",
    "rarity": 5,
    "element": "Físico",
    "weaponType": "Anomalía",
    "role": "DPS de Asalto & Evasión Extrema",
    "title": "Especialista en Infiltración · NEPS",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/nap/111874/98436573ae945cb56041ec18386345ec_4282506821868352554.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Afilador Punzante (S-Rank)",
        "source": "Canal Exclusivo de Motores W",
        "desc": "Aumenta la acumulación de Anomalía en un 40% y permite que el Asalto aseste golpes críticos."
      },
      "weaponF2P": {
        "name": "Gemelos Llorones (A-Rank)",
        "source": "Tienda de Gadgets de Box",
        "desc": "Escala Dominio de Anomalía cada vez que un enemigo sufre anomalías."
      },
      "artifacts": {
        "name": "Colmillo Feroz (4 piezas) + Blues Libre (2 piezas)",
        "bonus": "+35% de Daño de Asalto y acumulación récord de Anomalía.",
        "domain": "Limpieza de Cavidad: Vorágine de Sombras",
        "location": "Puesto de Avanzada de Scott"
      },
      "mainStats": {
        "sands": "Partición 4: Dominio de Anomalía",
        "goblet": "Partición 5: Daño Físico",
        "circlet": "Partición 6: Tasa de Anomalía"
      },
      "substats": "Dominio de Anomalía (420+ objetivo) > Ataque% > Penetración > Ataque Plano",
      "bestTeam": {
        "members": [
          "Jane Doe (DPS Anomalía)",
          "Seth Lowell (Buffer Escudo)",
          "Burnice / Grace (Desorden)",
          "Bangbú Policía"
        ],
        "synergy": "Seth transfiere +100 Dominio de Anomalía a Jane, quien entra en estado Pasión y activa golpes de Asalto Crítico continuos."
      },
      "talentPriority": "Habilidad Especial EX > Ataque Normal (Danza de Dagas) > Evasión > Habilidad Definitiva"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Componente de Asalto Pesado",
        "quantity": "30 uds.",
        "boss": "Carnicero de la Cavidad",
        "location": "Nueva Eridu: Distrito de Construcción"
      },
      "localSpecialty": {
        "name": "Cinta Magnética de Seguridad",
        "quantity": "Materiales de Región",
        "route": "Tienda de Videos Random Play y tiendas de conveniencia"
      },
      "talentBooks": {
        "name": "Chips Físicos de Combate",
        "domain": "Entrenamiento Táctico de Asalto",
        "days": "Todos los días",
        "location": "Entrenamiento Táctico de Asalto"
      },
      "weeklyBoss": {
        "name": "Engranaje del Horror Ancestral",
        "boss": "Ethereal Notorio Desconocido",
        "location": "Puesto de Avanzada de Scott"
      },
      "commonDrops": {
        "name": "Fluidos Ethereales Corruptos",
        "enemy": "Ethereals mutantes",
        "location": "Cavidad Cero"
      },
      "artifactDomain": {
        "name": "Limpieza de Cavidad: Vorágine de Sombras",
        "location": "Puesto de Avanzada de Scott"
      }
    }
  },
  {
    "id": "miyabi",
    "name": "Hoshimi Miyabi",
    "game": "zzz",
    "gameName": "Zenless Zone Zero",
    "rarity": 5,
    "element": "Hielo",
    "weaponType": "Anomalía",
    "role": "Hipercarry de Hielo y Corte Espacial",
    "title": "Jefa de la Sección 6 · Hoshimi",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/nap/111874/4c1b9f074d2ce55b8ef109ee7e8c3fc3_2128795555476008638.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Hoja de Nieve Inmortal (S-Rank)",
        "source": "Canal Exclusivo de Motores W",
        "desc": "Corta a través del espacio infligiendo Congelación y Fragmentación inmediata."
      },
      "weaponF2P": {
        "name": "Espada de Electrochoque / Motor de Box (A-Rank)",
        "source": "Tienda de Motores W de la Sexta Calle",
        "desc": "Alternativa sólida para recarga de energía y daño elemental."
      },
      "artifacts": {
        "name": "Metal Polar (4 piezas) + Jazz Caótico (2 piezas)",
        "bonus": "Hasta +30% de daño de Hielo y aceleración de energía EX.",
        "domain": "Limpieza de Cavidad: Cima Nevada",
        "location": "Puesto de Scott"
      },
      "mainStats": {
        "sands": "Partición 4: Daño Crítico o Dominio",
        "goblet": "Partición 5: Daño de Hielo",
        "circlet": "Partición 6: Regeneración de Energía"
      },
      "substats": "Daño Crítico > Probabilidad Crítica > Dominio de Anomalía > Ataque%",
      "bestTeam": {
        "members": [
          "Hoshimi Miyabi (DPS)",
          "Yanagi (Anomalía Eléctrica)",
          "Soukaku (Buffer)",
          "Bangbú Oficial S6"
        ],
        "synergy": "Dúo Sección 6: Congelación y Electroshock activan Desórdenes continuos de más de 800,000 de daño."
      },
      "talentPriority": "Habilidad Especial EX (Danza de las Sombras) = Habilidad Definitiva > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Sello de Oficial de la Sección 6",
        "quantity": "30 uds.",
        "boss": "Guardián de la Cavidad Helada",
        "location": "Nueva Eridu: Perímetro de Contención"
      },
      "localSpecialty": {
        "name": "Incienso Espiritual de Nueva Eridu",
        "quantity": "Materiales de Región",
        "route": "Templo de Lumina y Tienda de Té"
      },
      "talentBooks": {
        "name": "Chips de Katana y Hielo",
        "domain": "Dojo de la Sección 6",
        "days": "Todos los días",
        "location": "Dojo de la Sección 6"
      },
      "weeklyBoss": {
        "name": "Emblema del Vacío Eterno",
        "boss": "Jefe Notorio: Coloso del Vacío",
        "location": "Puesto de Scott"
      },
      "commonDrops": {
        "name": "Núcleos Ethereales Congelados",
        "enemy": "Ethereals de Hielo",
        "location": "Cavidad Cero"
      },
      "artifactDomain": {
        "name": "Limpieza de Cavidad: Cima Nevada",
        "location": "Puesto de Scott"
      }
    }
  },
  {
    "id": "caesar",
    "name": "Caesar King",
    "game": "zzz",
    "gameName": "Zenless Zone Zero",
    "rarity": 5,
    "element": "Físico",
    "weaponType": "Defensivo",
    "role": "Buffer de Ataque Masivo / Escudera Suprema",
    "title": "Líder de los Hijos de Calidón",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/nap/111874/594e9f7eb12ea7d34c1b9f074d2ce55b_2128795555476008638.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Corona de la Gloria (S-Rank)",
        "source": "Canal Exclusivo",
        "desc": "Escudo irrompible y otorga +1000 de Ataque para todo el escuadrón."
      },
      "weaponF2P": {
        "name": "Escudo de Choque (A-Rank)",
        "source": "Tienda de Gadgets de Box",
        "desc": "Aumento del impacto y aturdimiento masivo."
      },
      "artifacts": {
        "name": "Disco Protector (4 piezas) + Shockstar Disco (2 piezas)",
        "bonus": "Escudo para todo el equipo y +6% de Impacto.",
        "domain": "Limpieza de Cavidad: Yermo de Calidón",
        "location": "Las Afueras de Nueva Eridu"
      },
      "mainStats": {
        "sands": "Partición 4: Impacto",
        "goblet": "Partición 5: Ataque% o Daño Físico",
        "circlet": "Partición 6: Ataque%"
      },
      "substats": "Impacto > Ataque% > Probabilidad Crítica > Daño Crítico",
      "bestTeam": {
        "members": [
          "Cualquier Atacante (Ellen / Jane / Zhu Yuan)",
          "Caesar King (Escudo y +1000 ATK)",
          "Burnice / Lucy",
          "Bangbú Calidón"
        ],
        "synergy": "El escudo de Caesar absorbe cualquier impacto letal y aporta un bufo colosal de 1000 de ATK a cualquier personaje en campo."
      },
      "talentPriority": "Habilidad Especial EX (Parry Escudo) > Definitiva > Ataque Normal"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Pistón de Motocicleta Pesada",
        "quantity": "30 uds.",
        "boss": "Líder de los Forajidos del Yermo",
        "location": "Las Afueras: Territorio Calidón"
      },
      "localSpecialty": {
        "name": "Combustible de Éter de Calidón",
        "quantity": "Materiales de Región",
        "route": "Gasolinera de los Hijos de Calidón"
      },
      "talentBooks": {
        "name": "Chips Defensivos de Titanio",
        "domain": "Entrenamiento de Calidón",
        "days": "Todos los días",
        "location": "Entrenamiento de Calidón"
      },
      "weeklyBoss": {
        "name": "Chasis Corrupto Gigante",
        "boss": "Notorio: Máquina Demoledora",
        "location": "Puesto de Scott"
      },
      "commonDrops": {
        "name": "Piezas de Motocicleta",
        "enemy": "Pandilleros del Yermo",
        "location": "Las Afueras"
      },
      "artifactDomain": {
        "name": "Limpieza de Cavidad: Yermo de Calidón",
        "location": "Las Afueras de Nueva Eridu"
      }
    }
  },
  {
    "id": "zhuyuan",
    "name": "Zhu Yuan",
    "game": "zzz",
    "gameName": "Zenless Zone Zero",
    "rarity": 5,
    "element": "Éter",
    "weaponType": "Atacante",
    "role": "Hipercarry Éter de Ráfaga Corta",
    "title": "Capitana de Respuesta Rápida · NEPS",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/nap/111874/4c1b9f074d2ce55b8ef109ee7e8c3fc3_2128795555476008638.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Supresor Antidisturbios N.° VI (S-Rank)",
        "source": "Canal Exclusivo",
        "desc": "+30% Probabilidad Crítica y +80% Daño de Balas de Éter."
      },
      "weaponF2P": {
        "name": "Cañón Estelar (A-Rank S5)",
        "source": "Tienda de Box (F2P)",
        "desc": "Sólido escalado de Ataque y daño en ráfaga."
      },
      "artifacts": {
        "name": "Metal Caótico (4 piezas) + Pájaro Carpintero (2 piezas)",
        "bonus": "+20% Daño de Éter y +28% Daño Crítico a objetivos aturdidos.",
        "domain": "Limpieza de Cavidad: Ballet Twins",
        "location": "Puesto Scott"
      },
      "mainStats": {
        "sands": "Partición 4: Daño Crítico",
        "goblet": "Partición 5: Daño de Éter",
        "circlet": "Partición 6: Ataque%"
      },
      "substats": "Daño Crítico > Probabilidad Crítica > Ataque% > Penetración",
      "bestTeam": {
        "members": [
          "Zhu Yuan (DPS Éter)",
          "Qingyi (Aturdidora)",
          "Nicole (Buffer y Agrupadora)",
          "Bangbú Resonante"
        ],
        "synergy": "Qingyi aturde al jefe y Nicole lanza su agujero negro, momento en que Zhu Yuan gasta sus 9 balas cargadas para evaporar barras de vida."
      },
      "talentPriority": "Ataque Básico (Balas Cargadas) >>> Definitiva > Habilidad Especial EX"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Insignia de Capitán de NEPS",
        "quantity": "30 uds.",
        "boss": "Cazador Notorio de la Comisaría",
        "location": "Nueva Eridu: Lumina Square"
      },
      "localSpecialty": {
        "name": "Raciones Tácticas Policiales",
        "quantity": "Materiales de Región",
        "route": "Comisaría de Policía de Eridu"
      },
      "talentBooks": {
        "name": "Chips de Balas de Éter",
        "domain": "Campo de Tiro de NEPS",
        "days": "Todos los días",
        "location": "Campo de Tiro de NEPS"
      },
      "weeklyBoss": {
        "name": "Núcleo de Marioneta Gigante",
        "boss": "Marionetas Gemelas Notorias",
        "location": "Cavidad Cero"
      },
      "commonDrops": {
        "name": "Placas de Circuitos Policiales",
        "enemy": "Ethereals Urbanos",
        "location": "Lumina Square"
      },
      "artifactDomain": {
        "name": "Limpieza de Cavidad: Ballet Twins",
        "location": "Puesto Scott"
      }
    }
  },
  {
    "id": "nicole",
    "name": "Nicole Demara",
    "game": "zzz",
    "gameName": "Zenless Zone Zero",
    "rarity": 4,
    "element": "Éter",
    "weaponType": "Soporte",
    "role": "Trituradora de Defensa / Agrupadora de Éter",
    "title": "Líder de las Liebres Astutas · Cunning Hares",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/nap/111874/8d6c70ea9767ee60fa77cf20fc190532_3075253805904033324.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Caja Fuerte de la Bóveda (A-Rank S5)",
        "source": "Tienda de Box / Invocaciones",
        "desc": "Generación de energía para disparar agujeros negros continuos."
      },
      "weaponF2P": {
        "name": "Motor de Sonido Éter (A-Rank)",
        "source": "Historia / Misiones",
        "desc": "Regeneración constante de energía EX."
      },
      "artifacts": {
        "name": "Metal Caótico (4 piezas) o Swing Jazz (4 piezas)",
        "bonus": "Reduce hasta un 40% la Defensa de todos los enemigos atrapados.",
        "domain": "Limpieza de Cavidad: Sexta Calle",
        "location": "Puesto Scott"
      },
      "mainStats": {
        "sands": "Partición 4: Dominio de Anomalía o Tasa Crítica",
        "goblet": "Partición 5: Daño de Éter",
        "circlet": "Partición 6: Regeneración de Energía"
      },
      "substats": "Regeneración de Energía > Dominio de Anomalía > Tasa Crítica > Ataque%",
      "bestTeam": {
        "members": [
          "Zhu Yuan (DPS Éter)",
          "Qingyi / Anby (Aturdidor)",
          "Nicole (Trituración)",
          "Bangbú Resonante"
        ],
        "synergy": "El agujero negro de Nicole agrupa a los enemigos y reduce un 40% su defensa para que Zhu Yuan aniquile la sala en segundos."
      },
      "talentPriority": "Habilidad Especial EX (Bala de Éter) > Definitiva > Ataque en Cadena"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Ficha de las Liebres Astutas",
        "quantity": "30 uds.",
        "boss": "Ethereal Áureo de la Sexta Calle",
        "location": "Sexta Calle: Callejón Trasero"
      },
      "localSpecialty": {
        "name": "Discos de Música Retro",
        "quantity": "Materiales de Región",
        "route": "Tienda de Discos de la Sexta Calle"
      },
      "talentBooks": {
        "name": "Chips de Soporte y Éter",
        "domain": "Entrenamiento Táctico de Soporte",
        "days": "Todos los días",
        "location": "Entrenamiento Táctico de Soporte"
      },
      "weeklyBoss": {
        "name": "Ficha Notoria de Cavidad",
        "boss": "Cazador Notorio de la Cavidad Cero",
        "location": "Puesto de Scott"
      },
      "commonDrops": {
        "name": "Circuitos de Ethereals Menores",
        "enemy": "Ethereals",
        "location": "Cavidad Cero"
      },
      "artifactDomain": {
        "name": "Limpieza de Cavidad: Sexta Calle",
        "location": "Puesto Scott"
      }
    }
  },
  {
    "id": "anby",
    "name": "Anby Demara",
    "game": "zzz",
    "gameName": "Zenless Zone Zero",
    "rarity": 4,
    "element": "Eléctrico",
    "weaponType": "Aturdidor",
    "role": "Aturdidora Rápida / Generadora de Desequilibrio",
    "title": "Espadachina Eléctrica de las Liebres Astutas",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/nap/111874/98436573ae945cb56041ec18386345ec_4282506821868352554.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Desmystificador (A-Rank S5)",
        "source": "Tienda de Gadgets de Box",
        "desc": "Aumenta la tasa de Desequilibrio en un 24% tras combo de espada."
      },
      "weaponF2P": {
        "name": "Motor de Impacto Estándar (A-Rank)",
        "source": "Tienda / Historia",
        "desc": "Impacto y aturdimiento accesible F2P."
      },
      "artifacts": {
        "name": "Shockstar Disco (4 piezas) + Swing Jazz (2 piezas)",
        "bonus": "+20% de Impacto y desequilibrio instantáneo en golpes pesados.",
        "domain": "Limpieza de Cavidad",
        "location": "Puesto Scott"
      },
      "mainStats": {
        "sands": "Partición 4: Probabilidad Crítica",
        "goblet": "Partición 5: Daño Eléctrico o Ataque%",
        "circlet": "Partición 6: Impacto (Vital)"
      },
      "substats": "Impacto > Tasa Crítica > Ataque% > Tasa de Recuperación",
      "bestTeam": {
        "members": [
          "Billy / Anton / Corin (DPS)",
          "Anby (Aturdidora)",
          "Nicole (Soporte)",
          "Bangbú Amigo"
        ],
        "synergy": "Combo Básico 3 golpes + Rayo EX desequilibra al enemigo inmediatamente, abriendo el turno para el DPS."
      },
      "talentPriority": "Habilidad Especial EX > Ataque Básico (Combo de Desequilibrio) > Evasión"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Batería de Desequilibrio Rápido",
        "quantity": "30 uds.",
        "boss": "Mecha Eléctrico Rebelde",
        "location": "Sexta Calle"
      },
      "localSpecialty": {
        "name": "Hamburguesas de la Sexta Calle",
        "quantity": "Materiales de Región",
        "route": "Puesto de comida rápida"
      },
      "talentBooks": {
        "name": "Chips Eléctricos de Aturdimiento",
        "domain": "Entrenamiento de Aturdimiento",
        "days": "Todos los días",
        "location": "Entrenamiento de Aturdimiento"
      },
      "weeklyBoss": {
        "name": "Piezas de Marioneta Notoria",
        "boss": "Marionetas Corruptas",
        "location": "Puesto Scott"
      },
      "commonDrops": {
        "name": "Placas de Ethereal",
        "enemy": "Ethereals",
        "location": "Cavidad Cero"
      },
      "artifactDomain": {
        "name": "Limpieza de Cavidad",
        "location": "Puesto Scott"
      }
    }
  },
  {
    "id": "billy",
    "name": "Billy Kid",
    "game": "zzz",
    "gameName": "Zenless Zone Zero",
    "rarity": 4,
    "element": "Físico",
    "weaponType": "Atacante",
    "role": "Pistolero Acrobático a Distancia",
    "title": "Cyborg Fanático de los Caballeros Estelares",
    "avatar": "https://fastcdn.hoyoverse.com/content-v2/nap/111874/8d6c70ea9767ee60fa77cf20fc190532_3075253805904033324.png",
    "optimalBuild": {
      "weaponBiS": {
        "name": "Mirada del Cazador Estelar (A-Rank S5)",
        "source": "Tienda de Box",
        "desc": "Aumenta el daño de disparo a distancia y golpes críticos."
      },
      "weaponF2P": {
        "name": "Revólver Mecánico (A-Rank)",
        "source": "Forja / Historia",
        "desc": "Excelente cadencia y daño de ataque físico."
      },
      "artifacts": {
        "name": "Pájaro Carpintero (4 piezas) + Colmillo Feroz (2 piezas)",
        "bonus": "+12% Probabilidad Crítica y +27% Ataque constante.",
        "domain": "Limpieza de Cavidad",
        "location": "Puesto Scott"
      },
      "mainStats": {
        "sands": "Partición 4: Probabilidad Crítica",
        "goblet": "Partición 5: Daño Físico",
        "circlet": "Partición 6: Ataque%"
      },
      "substats": "Probabilidad Crítica > Daño Crítico > Ataque% > Penetración",
      "bestTeam": {
        "members": [
          "Billy Kid (DPS a Distancia)",
          "Anby (Aturdidora)",
          "Nicole (Agrupadora de Éter)",
          "Bangbú Pistolas"
        ],
        "synergy": "Dispara en 360 grados barriendo oleadas completas de enemigos menores."
      },
      "talentPriority": "Ataque Básico (Modo Francotirador) > Definitiva > Habilidad Especial EX"
    },
    "farmingGuide": {
      "bossMaterial": {
        "name": "Núcleo Cibernético de Billy",
        "quantity": "30 uds.",
        "boss": "Autómatas del Distrito de Obras",
        "location": "Sexta Calle"
      },
      "localSpecialty": {
        "name": "Cómics de los Caballeros Estelares",
        "quantity": "Materiales de Región",
        "route": "Kiosco de Revistas"
      },
      "talentBooks": {
        "name": "Chips Físicos de Pistola",
        "domain": "Entrenamiento de Puntería",
        "days": "Todos los días",
        "location": "Entrenamiento de Puntería"
      },
      "weeklyBoss": {
        "name": "Chasis Notorio",
        "boss": "Marionetas Gemelas",
        "location": "Puesto Scott"
      },
      "commonDrops": {
        "name": "Engranajes de Chatarra",
        "enemy": "Bandidos de Cavidad",
        "location": "Las Afueras"
      },
      "artifactDomain": {
        "name": "Limpieza de Cavidad",
        "location": "Puesto Scott"
      }
    }
  }
];
