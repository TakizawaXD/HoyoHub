/**
 * Configuración Principal del Gremio "El Gremio del Viajero"
 * Puedes editar libremente estos datos para personalizar tu clan.
 */
export const CLAN_CONFIG = {
  name: "El Gremio del Viajero",
  tag: "GV",
  motto: "«Hacia las estrellas y los abismos más profundos de Teyvat y el Cosmos»",
  server: "América (Principal) / Europa",
  discordUrl: "https://discord.gg/bYSGHFWvhe",
  level: "Nivel 10 · Abismo 12-3",
  memberCount: "48 / 50",
  recruitmentOpen: true,
  description: "Comunidad hispanohablante de Genshin Impact, Honkai: Star Rail y Zenless Zone Zero. Farmeo cooperativo, optimización de builds del Abismo, Shiyu Defense y Memoria del Caos.",
  
  // Enlaces oficiales de canje de códigos
  redeemUrls: {
    genshin: "https://genshin.hoyoverse.com/es/gift",
    zzz: "https://zenless.hoyoverse.com/redemption",
    hsr: "https://hsr.hoyoverse.com/gift"
  },

  // Miembros destacados del clan con personajes insignia
  members: [
    {
      id: "m1",
      name: "Aetheris",
      role: "Líder Supremo",
      uid: "601248921",
      game: "genshin",
      ar: 60,
      favoriteChar: "Furina",
      element: "hydro",
      avatar: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/9b33a5b6d926613317c2f82ba4e6dafc_813133860086300465.png",
      signature: "«El espectáculo de Fontaine jamás termina»",
      abyssScore: "36 ★",
      showcaseBuild: {
        character: "Furina",
        element: "hydro",
        level: "90/90",
        constellation: "C2",
        weapon: "Fulgor de las Aguas Calmas (R1 · Nv. 90)",
        weaponIcon: "https://enka.network/ui/UI_EquipIcon_Sword_Regalis.png",
        artifactSet: "Compañía Dorada (4 pzas)",
        hp: "42,850",
        atk: "1,240",
        critRate: "78.4%",
        critDmg: "214.2%",
        er: "172.5%"
      }
    },
    {
      id: "m2",
      name: "RaidenKuro",
      role: "Oficial Táctico",
      uid: "614992103",
      game: "genshin",
      ar: 60,
      favoriteChar: "Raiden Shogun",
      element: "electro",
      avatar: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/154fa9157297e68fa79fe5917464167e_5932560888329624546.png",
      signature: "La eternidad es un rayo certero en el Abismo.",
      abyssScore: "36 ★",
      showcaseBuild: {
        character: "Raiden Shogun",
        element: "electro",
        level: "90/90",
        constellation: "C3",
        weapon: "Luz del Segador (R1 · Nv. 90)",
        weaponIcon: "https://enka.network/ui/UI_EquipIcon_Pole_Narukami.png",
        artifactSet: "Emblema del Destino (4 pzas)",
        hp: "19,450",
        atk: "2,080",
        critRate: "68.2%",
        critDmg: "164.5%",
        er: "284.1%"
      }
    },
    {
      id: "m3",
      name: "EllenProxy",
      role: "Oficial ZZZ",
      uid: "100481239",
      game: "zzz",
      ar: 55,
      favoriteChar: "Ellen Joe",
      element: "cryo",
      avatar: "https://fastcdn.hoyoverse.com/content-v2/nap/126955/08f7bfa6d649ae130b92db21ec18991d_4721111667104618210.png",
      signature: "Tiburón en el Shiyu Defense · Nivel 17 S",
      abyssScore: "Shiyu S-Rank",
      showcaseBuild: {
        character: "Ellen Joe",
        element: "cryo",
        level: "60/60",
        constellation: "M1",
        weapon: "Engranaje de Frecuencia Profunda (S-Rank)",
        weaponIcon: "https://fastcdn.hoyoverse.com/content-v2/nap/126955/08f7bfa6d649ae130b92db21ec18991d_4721111667104618210.png",
        artifactSet: "Jazz Polar (4) + Pájaro Carpintero (2)",
        hp: "8,920",
        atk: "3,110",
        critRate: "74.8%",
        critDmg: "182.4%",
        er: "128.0%"
      }
    },
    {
      id: "m4",
      name: "StelleAstral",
      role: "Veterano HSR",
      uid: "600392184",
      game: "hsr",
      ar: 70,
      favoriteChar: "Acheron",
      element: "electro",
      avatar: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/121882/3e5606473551d7c31e67e35b71db3f05_2224883492716301323.png",
      signature: "Memoria del Caos 12 sin sudar.",
      abyssScore: "MOC 12 Full",
      showcaseBuild: {
        character: "Acheron",
        element: "electro",
        level: "80/80",
        constellation: "E2",
        weapon: "A lo largo de la orilla transitoria (Nv. 80)",
        weaponIcon: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/121882/3e5606473551d7c31e67e35b71db3f05_2224883492716301323.png",
        artifactSet: "Buzo Pionero (4) + Izumo (2)",
        hp: "3,650",
        atk: "4,180",
        critRate: "72.4%",
        critDmg: "228.6%",
        er: "100.0%"
      }
    },
    {
      id: "m5",
      name: "NeuvyHydro",
      role: "Veterano",
      uid: "625109844",
      game: "genshin",
      ar: 60,
      favoriteChar: "Neuvillette",
      element: "hydro",
      avatar: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/c1c2ef30aeb6e0be5a1ad3c56314c69d_2159670087140700142.png",
      signature: "El Juicio del Dragón Soberano.",
      abyssScore: "36 ★",
      showcaseBuild: {
        character: "Neuvillette",
        element: "hydro",
        level: "90/90",
        constellation: "C1",
        weapon: "Escrituras del Fluir Sempiterno (R1)",
        weaponIcon: "https://enka.network/ui/UI_EquipIcon_Catalyst_Wheatley.png",
        artifactSet: "Cazador Fantasmal (4 pzas)",
        hp: "41,200",
        atk: "1,110",
        critRate: "64.0%",
        critDmg: "258.4%",
        er: "131.0%"
      }
    },
    {
      id: "m6",
      name: "NahidaArchon",
      role: "Estratega",
      uid: "618392015",
      game: "genshin",
      ar: 59,
      favoriteChar: "Nahida",
      element: "dendro",
      avatar: "https://fastcdn.hoyoverse.com/content-v2/gsp/120287/8446ecbc4d2047ff6ba88f349c25da78_153160867828003666.png",
      signature: "Compartiendo todo el conocimiento del clan.",
      abyssScore: "36 ★",
      showcaseBuild: {
        character: "Nahida",
        element: "dendro",
        level: "90/90",
        constellation: "C2",
        weapon: "Sueños de las Mil Noches (R1)",
        weaponIcon: "https://enka.network/ui/UI_EquipIcon_Catalyst_Ayus.png",
        artifactSet: "Recuerdos del Bosque (4 pzas)",
        hp: "17,800",
        atk: "1,220",
        critRate: "48.2%",
        critDmg: "135.0%",
        er: "140.0%",
        em: "985"
      }
    }
  ]
};
