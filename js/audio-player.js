/**
 * Módulo de Audio y Jukebox / Reproductor de Música Oficial de HoYoverse
 * El Gremio del Viajero
 * Música oficial de alta calidad: Genshin Impact, Honkai: Star Rail, Zenless Zone Zero y Honkai Impact 3rd
 * Portadas completas en alta resolución, selector de pistas por juego, buscador, control de volumen y progreso
 */
import { getIcon } from './icons.js';

export const GAME_TRACKS = [
  // --- GENSHIN IMPACT ---
  {
    id: 'genshin-liyue',
    game: 'genshin',
    title: 'Liyue Harbor Theme',
    gameName: 'Genshin Impact',
    album: 'Jade Moon Upon a Sea of Clouds (Liyue OST)',
    composer: 'Yu-Peng Chen / HoYo-MiX',
    duration: '4:35',
    src: 'assets/audio/genshin_liyue.mp3',
    fallbackSrc: 'assets/audio/genshin_liyue.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/12/544bf0d17e4570f886fd1b731a3274da_5003849349598617917.webp',
    glowColor: 'rgba(212, 175, 55, 0.45)'
  },
  {
    id: 'genshin-fontaine',
    game: 'genshin',
    title: 'Fontaine: Symphony of Boreal and Frost',
    gameName: 'Genshin Impact',
    album: 'Pelagic Primaevality (Fontaine OST)',
    composer: 'HoYo-MiX',
    duration: '3:50',
    src: 'assets/audio/genshin_liyue.mp3',
    fallbackSrc: 'assets/audio/genshin_liyue.mp3',
    cover: 'https://fastcdn.hoyoverse.com/content-v2/gsp/120287/9b33a5b6d926613317c2f82ba4e6dafc_813133860086300465.png',
    glowColor: 'rgba(0, 195, 255, 0.45)'
  },
  {
    id: 'genshin-port-ormos',
    game: 'genshin',
    title: 'Hustle and Bustle of Ormos',
    gameName: 'Genshin Impact',
    album: 'Forest of Jnana and Vidya (Sumeru OST)',
    composer: 'HoYo-MiX',
    duration: '3:40',
    src: 'assets/audio/genshin_liyue.mp3',
    fallbackSrc: 'assets/audio/genshin_liyue.mp3',
    cover: 'https://fastcdn.hoyoverse.com/content-v2/gsp/120287/d43f05f8fc369325983636f3284f181d_5391515252655388034.png',
    glowColor: 'rgba(128, 230, 38, 0.45)'
  },
  {
    id: 'genshin-rex-incognito',
    game: 'genshin',
    title: 'Rex Incognito (Zhongli Theme)',
    gameName: 'Genshin Impact',
    album: 'The Stellar Moments Vol. 1',
    composer: 'Yu-Peng Chen / HoYo-MiX',
    duration: '1:54',
    src: 'assets/audio/genshin_liyue.mp3',
    fallbackSrc: 'assets/audio/genshin_liyue.mp3',
    cover: 'https://fastcdn.hoyoverse.com/content-v2/gsp/120287/8446ecbc4d2047ff6ba88f349c25da78_153160867828003666.png',
    glowColor: 'rgba(245, 176, 65, 0.45)'
  },
  {
    id: 'genshin-natlan',
    game: 'genshin',
    title: 'Land of Tona (Natlan Battle Theme)',
    gameName: 'Genshin Impact',
    album: 'Land of Tona (Natlan Chapter)',
    composer: 'HoYo-MiX',
    duration: '3:15',
    src: 'assets/audio/genshin_liyue.mp3',
    fallbackSrc: 'assets/audio/genshin_liyue.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/9864ca4e249b1a698051e8370e711e57_2843160042726570954.jpg',
    glowColor: 'rgba(255, 90, 54, 0.45)'
  },
  {
    id: 'genshin-dawn-winery',
    game: 'genshin',
    title: 'Dawn Winery Theme',
    gameName: 'Genshin Impact',
    album: 'City of Winds and Idylls (Mondstadt OST)',
    composer: 'Yu-Peng Chen / HoYo-MiX',
    duration: '4:10',
    src: 'assets/audio/genshin_liyue.mp3',
    fallbackSrc: 'assets/audio/genshin_liyue.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/21/94b346207176750fb5ff12cd0bd8d108_4537896671082030891.webp',
    glowColor: 'rgba(63, 224, 166, 0.45)'
  },

  // --- HONKAI: STAR RAIL ---
  {
    id: 'hsr-robin-heart',
    game: 'hsr',
    title: 'If I Can Stop One Heart From Breaking',
    gameName: 'Honkai: Star Rail',
    album: 'Inside · Robin (Colonipenal Penacony)',
    composer: 'Chevy / HoYo-MiX',
    duration: '3:45',
    src: 'assets/audio/hsr_robin.mp3',
    fallbackSrc: 'assets/audio/hsr_robin.mp3',
    cover: 'https://fastcdn.hoyoverse.com/content-v2/hkrpg/121882/3e5606473551d7c31e67e35b71db3f05_2224883492716301323.png',
    glowColor: 'rgba(105, 120, 255, 0.45)'
  },
  {
    id: 'hsr-robin-sway',
    game: 'hsr',
    title: 'Sway to My Beat in Cosmos',
    gameName: 'Honkai: Star Rail',
    album: 'Inside · Robin (Fiesta de Colonipenal)',
    composer: 'Chevy / HoYo-MiX',
    duration: '3:18',
    src: 'assets/audio/hsr_sway.mp3',
    fallbackSrc: 'assets/audio/hsr_sway.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/28/3cfdda4cb3f353338597ae0ab2dd2475_5195173576311565590.png',
    glowColor: 'rgba(186, 140, 255, 0.45)'
  },
  {
    id: 'hsr-white-night',
    game: 'hsr',
    title: 'White Night (Penacony Opening Theme)',
    gameName: 'Honkai: Star Rail',
    album: 'White Night (Penacony Chapter)',
    composer: 'Jake Miller / HoYo-MiX',
    duration: '2:20',
    src: 'assets/audio/hsr_sway.mp3',
    fallbackSrc: 'assets/audio/hsr_sway.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/26/27ba575abdcc85817b1896f3d45c63b4_9191420545353745757.png',
    glowColor: 'rgba(234, 179, 8, 0.45)'
  },
  {
    id: 'hsr-wildfire',
    game: 'hsr',
    title: 'Wildfire (Cocolia Boss Climax)',
    gameName: 'Honkai: Star Rail',
    album: 'Out of Control (Jarilo-VI OST)',
    composer: 'Jonathan Steingard / HoYo-MiX',
    duration: '3:35',
    src: 'assets/audio/hsr_sway.mp3',
    fallbackSrc: 'assets/audio/hsr_sway.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/09/27/24bf50b9af5d40af1792fd3f75513c7f_6071792735752385060.jpg',
    glowColor: 'rgba(255, 75, 43, 0.45)'
  },
  {
    id: 'hsr-hope-feathers',
    game: 'hsr',
    title: 'Hope Is the Thing With Feathers',
    gameName: 'Honkai: Star Rail',
    album: 'Inside · Robin (Gran Concierto)',
    composer: 'Chevy / HoYo-MiX',
    duration: '3:52',
    src: 'assets/audio/hsr_robin.mp3',
    fallbackSrc: 'assets/audio/hsr_robin.mp3',
    cover: 'https://fastcdn.hoyoverse.com/content-v2/hkrpg/121882/3e5606473551d7c31e67e35b71db3f05_2224883492716301323.png',
    glowColor: 'rgba(139, 92, 246, 0.45)'
  },
  {
    id: 'hsr-space-walk',
    game: 'hsr',
    title: 'Space Walk (Herta Space Station)',
    gameName: 'Honkai: Star Rail',
    album: 'Out of Control (Estación Espacial)',
    composer: 'HoYo-MiX',
    duration: '2:40',
    src: 'assets/audio/hsr_robin.mp3',
    fallbackSrc: 'assets/audio/hsr_robin.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/26/27ba575abdcc85817b1896f3d45c63b4_9191420545353745757.png',
    glowColor: 'rgba(105, 120, 255, 0.45)'
  },

  // --- ZENLESS ZONE ZERO ---
  {
    id: 'zzz-caesar-pinking',
    game: 'zzz',
    title: 'pinKing (Hijos de Calidón)',
    gameName: 'Zenless Zone Zero',
    album: 'EP Caesar King · Outer Ring',
    composer: 'HoYo-MiX',
    duration: '3:05',
    src: 'assets/audio/zzz_caesar.mp3',
    fallbackSrc: 'assets/audio/zzz_caesar.mp3',
    cover: 'https://fastcdn.hoyoverse.com/content-v2/nap/126955/08f7bfa6d649ae130b92db21ec18991d_4721111667104618210.png',
    glowColor: 'rgba(232, 83, 205, 0.45)'
  },
  {
    id: 'zzz-biting-ridges',
    game: 'zzz',
    title: 'Biting Ridges (Miyabi Combat Theme)',
    gameName: 'Zenless Zone Zero',
    album: 'Section 6: Hollow Investigations',
    composer: 'HoYo-MiX',
    duration: '3:25',
    src: 'assets/audio/zzz_caesar.mp3',
    fallbackSrc: 'assets/audio/zzz_caesar.mp3',
    cover: 'https://fastcdn.hoyoverse.com/content-v2/nap/111874/8d6c70ea9767ee60fa77cf20fc190532_3075253805904033324.png',
    glowColor: 'rgba(0, 229, 255, 0.45)'
  },
  {
    id: 'zzz-dazzling-stage',
    game: 'zzz',
    title: 'Dazzling Stage (New Eridu Pop)',
    gameName: 'Zenless Zone Zero',
    album: 'Welcome to New Eridu OST',
    composer: 'HoYo-MiX',
    duration: '2:50',
    src: 'assets/audio/zzz_caesar.mp3',
    fallbackSrc: 'assets/audio/zzz_caesar.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/3877f3b906d87286d5c488a7c21ca52e_5915130864426814005.jpg',
    glowColor: 'rgba(244, 63, 94, 0.45)'
  },
  {
    id: 'zzz-daily-groove',
    game: 'zzz',
    title: '60% Daily (Sixth Street Daytime)',
    gameName: 'Zenless Zone Zero',
    album: 'Sixth Street Vibes Vol. 1',
    composer: 'HoYo-MiX',
    duration: '3:12',
    src: 'assets/audio/zzz_caesar.mp3',
    fallbackSrc: 'assets/audio/zzz_caesar.mp3',
    cover: 'https://fastcdn.hoyoverse.com/content-v2/nap/111874/98436573ae945cb56041ec18386345ec_4282506821868352554.png',
    glowColor: 'rgba(250, 204, 21, 0.45)'
  },
  {
    id: 'zzz-cunning-hares',
    game: 'zzz',
    title: 'Liebres Astutas: Early Riser',
    gameName: 'Zenless Zone Zero',
    album: 'Cunning Hares Faction OST',
    composer: 'HoYo-MiX',
    duration: '2:45',
    src: 'assets/audio/zzz_caesar.mp3',
    fallbackSrc: 'assets/audio/zzz_caesar.mp3',
    cover: 'https://fastcdn.hoyoverse.com/content-v2/nap/111874/4c1b9f074d2ce55b8ef109ee7e8c3fc3_2128795555476008638.png',
    glowColor: 'rgba(168, 85, 247, 0.45)'
  },

  // --- HONKAI IMPACT 3RD ---
  {
    id: 'hi3-rubia',
    game: 'hi3',
    title: 'Rubia (Taixuan Mountain Climax)',
    gameName: 'Honkai Impact 3rd',
    album: 'Shattered Samsara · Fu Hua',
    composer: 'Zhou Shen / HoYo-MiX',
    duration: '3:20',
    src: 'assets/audio/genshin_liyue.mp3',
    fallbackSrc: 'assets/audio/genshin_liyue.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/22/30848ea9bc76a18f4967a135a4761de0_1366505599196670496.jpg',
    glowColor: 'rgba(255, 71, 87, 0.45)'
  },
  {
    id: 'hi3-moon-halo',
    game: 'hi3',
    title: 'Moon Halo (Herrscher of Flamescion)',
    gameName: 'Honkai Impact 3rd',
    album: 'Everlasting Flames · Kiana Climax',
    composer: 'TetraCalyx / Hanser / Mika / HoYo-MiX',
    duration: '3:55',
    src: 'assets/audio/hsr_sway.mp3',
    fallbackSrc: 'assets/audio/hsr_sway.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/08/8cd58fb514cfa711b736ed8e21ac9009_7364048553854147140.jpg',
    glowColor: 'rgba(255, 107, 129, 0.45)'
  },
  {
    id: 'hi3-da-capo',
    game: 'hi3',
    title: 'Da Capo (Graduation Trip Theme)',
    gameName: 'Honkai Impact 3rd',
    album: 'Graduation Trip · Kiana Kaslana',
    composer: 'Hanser / HoYo-MiX',
    duration: '4:15',
    src: 'assets/audio/hsr_robin.mp3',
    fallbackSrc: 'assets/audio/hsr_robin.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/16/bca19f05a213ae991b0e45a8e83b391a_748932879298524692.webp',
    glowColor: 'rgba(255, 159, 243, 0.45)'
  },
  {
    id: 'hi3-true',
    game: 'hi3',
    title: 'TruE (Elysia Realm Climax)',
    gameName: 'Honkai Impact 3rd',
    album: 'Because of You · Elysia Realm',
    composer: 'Yellow Zero / HoYo-MiX',
    duration: '3:30',
    src: 'assets/audio/hsr_robin.mp3',
    fallbackSrc: 'assets/audio/hsr_robin.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/23/3ea6fce07c85bd6fbb046ba22e14414b_550168469254102547.jpg',
    glowColor: 'rgba(253, 121, 168, 0.45)'
  },
  {
    id: 'hi3-starfall',
    game: 'hi3',
    title: 'Starfall (Meteoric Salvation)',
    gameName: 'Honkai Impact 3rd',
    album: 'Meteoric Salvation · Void Drifter',
    composer: 'Tia Ray / HoYo-MiX',
    duration: '3:40',
    src: 'assets/audio/hsr_sway.mp3',
    fallbackSrc: 'assets/audio/hsr_sway.mp3',
    cover: 'https://fastcdn.hoyoverse.com/static-resource-v2/2026/10/16/141cd2cfc518e5459271922cdf5d5f21_4713343612652982798.png',
    glowColor: 'rgba(255, 121, 63, 0.45)'
  }
];

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

class HoYoAudioPlayer {
  constructor() {
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.loop = false;
    this.audio.volume = 0.45;

    this.currentTrackIndex = this.getInitialTrackIndex();
    this.isPlaying = false;
    this.isMuted = false;
    this.isShuffled = false;
    this.repeatMode = 'all'; // 'off' | 'all' | 'one'
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.isModalOpen = false;
    this.audioCtx = null;
    this.wasPlayingBeforeVideo = false;

    this.initAudio();
    this.renderWidget();
    this.renderMusicModal();
    this.renderCoverLightbox();
    this.setupListeners();
    this.setupAutoplayOnGesture();
  }

  getInitialTrackIndex() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('genshin.html')) return 0; // Liyue
    if (path.includes('hsr.html')) return 6; // Robin (HSR)
    if (path.includes('zzz.html')) return 12; // Caesar King (ZZZ)
    return 0;
  }

  initAudio() {
    this.loadTrack(this.currentTrackIndex, false);

    this.audio.addEventListener('ended', () => {
      if (this.repeatMode === 'one') {
        this.audio.currentTime = 0;
        this.play();
      } else {
        this.nextTrack(true);
      }
    });

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateUI();
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updateUI();
    });

    this.audio.addEventListener('timeupdate', () => {
      this.onTimeUpdate();
    });

    this.audio.addEventListener('loadedmetadata', () => {
      this.onLoadedMetadata();
    });

    this.audio.addEventListener('error', () => {
      const track = GAME_TRACKS[this.currentTrackIndex];
      if (track && track.fallbackSrc && this.audio.src !== track.fallbackSrc) {
        console.warn(`Error al reproducir ${track.title}, usando pista de respaldo segura`);
        this.audio.src = track.fallbackSrc;
        if (this.isPlaying) {
          this.audio.play().catch(() => {});
        }
      }
    });
  }

  loadTrack(index, autoPlay = true) {
    if (index < 0) index = GAME_TRACKS.length - 1;
    if (index >= GAME_TRACKS.length) index = 0;

    this.currentTrackIndex = index;
    const track = GAME_TRACKS[this.currentTrackIndex];
    this.audio.src = track.src;

    this.updateTrackInfo();
    this.updateModalActiveCard();

    if (autoPlay && !this.isMuted) {
      this.play();
    }
  }

  play() {
    if (this.isMuted) {
      this.isMuted = false;
      this.audio.muted = false;
    }

    const promise = this.audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          this.isPlaying = true;
          this.updateUI();
        })
        .catch((err) => {
          this.isPlaying = false;
          this.updateUI();
          console.debug('Autoplay bloqueado por el navegador; esperando toque del usuario:', err);
        });
    }
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updateUI();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  nextTrack(autoPlay = true) {
    if (this.isShuffled) {
      const nextIndex = Math.floor(Math.random() * GAME_TRACKS.length);
      this.loadTrack(nextIndex, autoPlay);
    } else {
      this.loadTrack(this.currentTrackIndex + 1, autoPlay);
    }
    this.playChime(659.25, 0.12);
  }

  prevTrack(autoPlay = true) {
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
      return;
    }
    this.loadTrack(this.currentTrackIndex - 1, autoPlay);
    this.playChime(523.25, 0.12);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
    if (!this.isMuted && !this.isPlaying) {
      this.play();
    }
    this.updateUI();
  }

  setVolume(percent) {
    const val = Math.max(0, Math.min(100, percent));
    this.audio.volume = val / 100;
    if (this.audio.volume > 0 && this.isMuted) {
      this.isMuted = false;
      this.audio.muted = false;
    }
    this.updateUI();
  }

  toggleShuffle() {
    this.isShuffled = !this.isShuffled;
    const btn = document.getElementById('player-shuffle-btn');
    if (btn) btn.classList.toggle('active', this.isShuffled);
  }

  toggleRepeat() {
    if (this.repeatMode === 'all') {
      this.repeatMode = 'one';
    } else if (this.repeatMode === 'one') {
      this.repeatMode = 'off';
    } else {
      this.repeatMode = 'all';
    }

    const btn = document.getElementById('player-repeat-btn');
    if (btn) {
      btn.classList.toggle('active', this.repeatMode !== 'off');
      btn.classList.toggle('repeat-one', this.repeatMode === 'one');
      btn.title = `Repetición: ${this.repeatMode === 'one' ? 'Una sola canción' : this.repeatMode === 'all' ? 'Todas' : 'Desactivado'}`;
    }
  }

  seek(ratio) {
    if (this.audio.duration && !isNaN(this.audio.duration)) {
      this.audio.currentTime = this.audio.duration * Math.max(0, Math.min(1, ratio));
    }
  }

  onTimeUpdate() {
    const curTime = this.audio.currentTime || 0;
    const durTime = this.audio.duration || 0;

    const curLabel = document.getElementById('player-current-time');
    const durLabel = document.getElementById('player-total-duration');
    const fill = document.getElementById('player-progress-fill');
    const scrubber = document.getElementById('player-progress-scrubber');

    if (curLabel) curLabel.textContent = formatTime(curTime);
    if (durLabel && durTime) durLabel.textContent = formatTime(durTime);

    if (durTime > 0) {
      const pct = (curTime / durTime) * 100;
      if (fill) fill.style.width = `${pct}%`;
      if (scrubber) scrubber.style.left = `${pct}%`;
    }
  }

  onLoadedMetadata() {
    const durLabel = document.getElementById('player-total-duration');
    if (durLabel && this.audio.duration) {
      durLabel.textContent = formatTime(this.audio.duration);
    }
  }

  setupAutoplayOnGesture() {
    this.play();

    const startAudio = () => {
      if (!this.isPlaying && !this.isMuted) {
        this.play();
      }
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('keydown', startAudio);
    };

    window.addEventListener('click', startAudio, { passive: true });
    window.addEventListener('touchstart', startAudio, { passive: true });
    window.addEventListener('keydown', startAudio, { passive: true });
  }

  /**
   * Renderiza el mini-player flotante de acceso rápido
   */
  renderWidget() {
    if (document.getElementById('celestial-music-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'celestial-music-widget';
    widget.className = 'celestial-music-widget';
    widget.setAttribute('aria-label', 'Reproductor y Menú de Música HoYoverse');

    const track = GAME_TRACKS[this.currentTrackIndex];

    widget.innerHTML = `
      <div class="music-game-avatar-wrap" id="music-widget-avatar-wrap" title="Haz clic para abrir el Menú de Música Completo">
        <img src="${track.cover}" alt="${track.title}" class="widget-cover-thumb" id="widget-cover-thumb" onerror="this.src='assets/clan_emblem.jpg'" />
        <div class="widget-disc-overlay"></div>
      </div>

      <div class="music-track-info" id="music-widget-info-btn" title="Haz clic para abrir el Menú de Música">
        <span class="music-track-title" id="music-track-title-text">${track.title}</span>
        <span class="music-track-game" id="music-track-game-text">${track.gameName}</span>
      </div>

      <div class="music-wave-bars" id="music-wave-bars">
        <span class="bar bar-1"></span>
        <span class="bar bar-2"></span>
        <span class="bar bar-3"></span>
        <span class="bar bar-4"></span>
      </div>

      <div class="music-controls">
        <button class="music-ctrl-btn" id="music-prev-btn" title="Pista anterior" aria-label="Pista anterior">
          ${getIcon('skipBack', 'clst-icon-sm')}
        </button>
        <button class="music-ctrl-btn play-btn" id="music-play-btn" title="Reproducir / Pausar" aria-label="Reproducir / Pausar">
          ${getIcon(this.isPlaying ? 'pause' : 'play', 'clst-icon-sm')}
        </button>
        <button class="music-ctrl-btn" id="music-next-btn" title="Siguiente pista" aria-label="Siguiente pista">
          ${getIcon('skipForward', 'clst-icon-sm')}
        </button>
        <button class="music-ctrl-btn menu-trigger-btn" id="music-open-menu-btn" title="Abrir Menú de Selección de Música">
          ${getIcon('music', 'clst-icon-sm')}
        </button>
      </div>
    `;

    document.body.appendChild(widget);
  }

  /**
   * Renderiza el Menú / Jukebox Modal Completo
   */
  renderMusicModal() {
    if (document.getElementById('celestial-music-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'celestial-music-modal';
    modal.className = 'clst-music-modal-backdrop';
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');

    modal.innerHTML = `
      <div class="clst-music-modal-window">
        <!-- Cabecera del Menú -->
        <header class="clst-music-modal-header">
          <div class="music-header-title-wrap">
            <span class="music-header-badge">
              ${getIcon('disc', 'icon-gold icon-xs')}
              <span>Jukebox Oficial · HOYO-MiX</span>
            </span>
            <h2 class="music-modal-title">Biblioteca Musical de HoYoverse</h2>
            <p class="music-modal-desc">
              Selecciona y reproduce los temas icónicos con portadas completas en alta definición de <strong>Genshin Impact</strong>, <strong>Honkai: Star Rail</strong>, <strong>Zenless Zone Zero</strong> y <strong>Honkai Impact 3rd</strong>.
            </p>
          </div>

          <button id="music-modal-close-btn" class="music-modal-close-btn" aria-label="Cerrar reproductor">
            ${getIcon('close', 'clst-icon-sm')}
          </button>
        </header>

        <!-- Barra de Filtros interactiva y Buscador -->
        <div class="clst-music-toolbar">
          <div class="music-search-box">
            ${getIcon('search', 'clst-icon-sm search-icon')}
            <input type="text" id="music-search-input" placeholder="Buscar por canción, álbum, juego o compositor..." autocomplete="off" />
            <button id="music-clear-search-btn" class="music-clear-btn" style="display:none;" title="Limpiar búsqueda">
              ${getIcon('close', 'icon-xs')}
            </button>
          </div>

          <div class="music-game-filter-pills" id="music-game-filter-pills">
            <button class="music-pill active" data-music-game="all">
              ${getIcon('hub', 'icon-xs')}
              <span>Todos (${GAME_TRACKS.length})</span>
            </button>
            <button class="music-pill pill-genshin" data-music-game="genshin">
              ${getIcon('genshin', 'icon-xs')}
              <span>Genshin Impact</span>
            </button>
            <button class="music-pill pill-hsr" data-music-game="hsr">
              ${getIcon('hsr', 'icon-xs')}
              <span>Honkai: Star Rail</span>
            </button>
            <button class="music-pill pill-zzz" data-music-game="zzz">
              ${getIcon('zzz', 'icon-xs')}
              <span>Zenless Zone Zero</span>
            </button>
            <button class="music-pill pill-hi3" data-music-game="hi3">
              ${getIcon('hi3', 'icon-xs')}
              <span>Honkai Impact 3rd</span>
            </button>
          </div>
        </div>

        <!-- Contenedor con cuadrícula de tarjetas de canciones -->
        <div class="clst-music-cards-container" id="music-cards-container">
          <!-- Renderizado dinámicamente -->
        </div>

        <!-- Barra de Control Inferior Maestra -->
        <footer class="clst-music-player-bar" id="music-player-bar">
          <!-- Info de la pista actual con Portada Completa -->
          <div class="current-track-card" id="player-current-track-wrap">
            <div class="current-track-cover-wrap" id="player-current-cover-wrap" title="Clic para ver portada completa">
              <img id="player-current-cover-img" src="" alt="Portada del Álbum" class="player-cover-thumb" onerror="this.src='assets/clan_emblem.jpg'" />
              <div class="playing-disc-spinner" id="player-disc-spinner"></div>
            </div>
            <div class="current-track-texts">
              <span class="player-track-title" id="player-track-title">Cargando...</span>
              <span class="player-track-meta" id="player-track-meta">HOYO-MiX</span>
            </div>
          </div>

          <!-- Controles Centrales & Barra de Progreso Interactiva -->
          <div class="player-center-controls">
            <div class="player-buttons-row">
              <button class="player-btn btn-shuffle" id="player-shuffle-btn" title="Modo Aleatorio">
                ${getIcon('shuffle', 'icon-xs')}
              </button>
              <button class="player-btn" id="player-prev-btn" title="Pista Anterior">
                ${getIcon('skipBack', 'clst-icon-sm')}
              </button>
              <button class="player-btn btn-master-play" id="player-master-play-btn" title="Reproducir / Pausar">
                ${getIcon('play', 'clst-icon-sm')}
              </button>
              <button class="player-btn" id="player-next-btn" title="Pista Siguiente">
                ${getIcon('skipForward', 'clst-icon-sm')}
              </button>
              <button class="player-btn btn-repeat active" id="player-repeat-btn" title="Repetición: Todas">
                ${getIcon('repeat', 'icon-xs')}
              </button>
            </div>

            <div class="player-progress-row">
              <span class="time-label" id="player-current-time">0:00</span>
              <div class="progress-bar-wrap" id="player-progress-bar-wrap">
                <div class="progress-bar-fill" id="player-progress-fill" style="width: 0%;"></div>
                <div class="progress-scrubber" id="player-progress-scrubber" style="left: 0%;"></div>
              </div>
              <span class="time-label" id="player-total-duration">0:00</span>
            </div>
          </div>

          <!-- Controles de Volumen y Acción de Minimizar -->
          <div class="player-right-controls">
            <div class="volume-control-wrap">
              <button class="player-btn btn-volume" id="player-volume-btn" title="Silenciar / Activar sonido">
                ${getIcon('volume', 'clst-icon-sm')}
              </button>
              <input type="range" id="player-volume-slider" min="0" max="100" value="45" class="player-volume-slider" title="Ajustar volumen" />
            </div>
            <button class="player-minimize-btn" id="player-minimize-btn" title="Minimizar reproductor y seguir navegando con música">
              <span>Minimizar</span>
              ${getIcon('arrowRight', 'icon-xs')}
            </button>
          </div>
        </footer>
      </div>
    `;

    document.body.appendChild(modal);
    this.renderTracks();
  }

  /**
   * Renderiza el visor en tamaño completo de portadas
   */
  renderCoverLightbox() {
    if (document.getElementById('music-cover-lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'music-cover-lightbox';
    lightbox.className = 'music-cover-lightbox';
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');

    lightbox.innerHTML = `
      <div class="cover-lightbox-content">
        <button id="cover-lightbox-close" class="cover-lightbox-close" aria-label="Cerrar visor de portada">&times;</button>
        <div class="cover-lightbox-img-wrap">
          <img id="cover-lightbox-img" src="" alt="Portada Oficial Completa" class="cover-lightbox-full-img" />
        </div>
        <div class="cover-lightbox-caption">
          <span class="lightbox-game-tag" id="cover-lightbox-game">Juego</span>
          <h3 id="cover-lightbox-title" class="lightbox-title">Título del Álbum</h3>
          <p id="cover-lightbox-sub" class="lightbox-sub">HOYO-MiX · Álbum Oficial</p>
        </div>
      </div>
    `;

    document.body.appendChild(lightbox);
  }

  /**
   * Renderiza las tarjetas de canciones en el contenedor del modal
   */
  renderTracks() {
    const container = document.getElementById('music-cards-container');
    if (!container) return;

    let filtered = GAME_TRACKS;

    // Filtro por juego
    if (this.activeFilter !== 'all') {
      filtered = filtered.filter(t => t.game === this.activeFilter);
    }

    // Filtro por búsqueda
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(t => 
        t.title.toLowerCase().includes(q) ||
        t.album.toLowerCase().includes(q) ||
        t.gameName.toLowerCase().includes(q) ||
        t.composer.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="music-empty-state">
          <div class="empty-icon">${getIcon('search', 'icon-xl')}</div>
          <h3>No se encontraron canciones</h3>
          <p>Intenta con otro término o selecciona "Todos los Juegos".</p>
          <button class="music-reset-filter-btn" id="music-reset-filter-btn">
            ${getIcon('refresh', 'icon-xs')} Restablecer filtros
          </button>
        </div>
      `;
      const resetBtn = container.querySelector('#music-reset-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.activeFilter = 'all';
          this.searchQuery = '';
          const searchInput = document.getElementById('music-search-input');
          if (searchInput) searchInput.value = '';
          document.querySelectorAll('.music-pill').forEach(p => p.classList.toggle('active', p.getAttribute('data-music-game') === 'all'));
          this.renderTracks();
        });
      }
      return;
    }

    container.innerHTML = filtered.map(t => {
      const isCurrent = GAME_TRACKS[this.currentTrackIndex]?.id === t.id;
      const isPlayingCurrent = isCurrent && this.isPlaying;

      return `
        <article class="music-track-card ${isCurrent ? 'active-track' : ''} ${isPlayingCurrent ? 'is-playing' : ''}" 
                 data-track-id="${t.id}" 
                 style="--track-accent: ${t.glowColor}">
          <div class="track-cover-container">
            <img src="${t.cover}" alt="${t.title}" class="track-cover-img" loading="lazy" onerror="this.src='assets/clan_emblem.jpg'" />
            
            <div class="track-cover-overlay">
              <button class="track-play-trigger-btn" data-play-track="${t.id}" title="${isPlayingCurrent ? 'Pausar' : 'Reproducir'} ${t.title}">
                ${getIcon(isPlayingCurrent ? 'pause' : 'play', 'icon-play-overlay')}
              </button>
              <button class="track-zoom-cover-btn" data-zoom-cover="${t.id}" title="Ver Portada Completa en Alta Resolución">
                ${getIcon('maximize', 'icon-xs')}
              </button>
            </div>

            <div class="track-game-tag">
              ${getIcon(t.game, 'icon-xs')}
              <span>${t.gameName.split(' ')[0]}</span>
            </div>

            ${isPlayingCurrent ? `
              <div class="card-playing-indicator">
                <span class="bar bar-1"></span>
                <span class="bar bar-2"></span>
                <span class="bar bar-3"></span>
              </div>
            ` : ''}
          </div>

          <div class="track-card-body">
            <div class="track-card-header">
              <span class="track-composer">${t.composer}</span>
              <span class="track-duration">${t.duration}</span>
            </div>

            <h3 class="track-title" title="${t.title}">${t.title}</h3>
            <p class="track-album" title="${t.album}">${t.album}</p>

            <div class="track-card-footer">
              <span class="track-game-badge">${t.gameName}</span>
              <button class="track-select-play-btn" data-play-track="${t.id}">
                <span>${isPlayingCurrent ? 'Pausar' : 'Reproducir'}</span>
                ${getIcon(isPlayingCurrent ? 'pause' : 'play', 'icon-xs')}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Vincular clics de selección de pista
    container.querySelectorAll('[data-play-track]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const trackId = btn.getAttribute('data-play-track');
        const trackIdx = GAME_TRACKS.findIndex(t => t.id === trackId);
        if (trackIdx !== -1) {
          if (this.currentTrackIndex === trackIdx) {
            this.togglePlay();
          } else {
            this.loadTrack(trackIdx, true);
          }
        }
      });
    });

    // Vincular clic completo en la tarjeta
    container.querySelectorAll('.music-track-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-zoom-cover]')) return;
        const trackId = card.getAttribute('data-track-id');
        const trackIdx = GAME_TRACKS.findIndex(t => t.id === trackId);
        if (trackIdx !== -1) {
          if (this.currentTrackIndex === trackIdx) {
            this.togglePlay();
          } else {
            this.loadTrack(trackIdx, true);
          }
        }
      });
    });

    // Vincular botón de zoom de portada
    container.querySelectorAll('[data-zoom-cover]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const trackId = btn.getAttribute('data-zoom-cover');
        this.openCoverLightbox(trackId);
      });
    });
  }

  updateModalActiveCard() {
    const currentTrack = GAME_TRACKS[this.currentTrackIndex];
    if (!currentTrack) return;

    document.querySelectorAll('.music-track-card').forEach(card => {
      const isCurrent = card.getAttribute('data-track-id') === currentTrack.id;
      const isPlayingCurrent = isCurrent && this.isPlaying;
      card.classList.toggle('active-track', isCurrent);
      card.classList.toggle('is-playing', isPlayingCurrent);

      const playBtn = card.querySelector('.track-select-play-btn');
      if (playBtn) {
        playBtn.innerHTML = `
          <span>${isPlayingCurrent ? 'Pausar' : 'Reproducir'}</span>
          ${getIcon(isPlayingCurrent ? 'pause' : 'play', 'icon-xs')}
        `;
      }

      const overlayBtn = card.querySelector('.track-play-trigger-btn');
      if (overlayBtn) {
        overlayBtn.innerHTML = getIcon(isPlayingCurrent ? 'pause' : 'play', 'icon-play-overlay');
      }
    });
  }

  openCoverLightbox(trackId) {
    const track = GAME_TRACKS.find(t => t.id === trackId) || GAME_TRACKS[this.currentTrackIndex];
    if (!track) return;

    const lightbox = document.getElementById('music-cover-lightbox');
    const img = document.getElementById('cover-lightbox-img');
    const title = document.getElementById('cover-lightbox-title');
    const sub = document.getElementById('cover-lightbox-sub');
    const game = document.getElementById('cover-lightbox-game');

    if (img) img.src = track.cover;
    if (title) title.textContent = track.title;
    if (sub) sub.textContent = `${track.album} · ${track.composer}`;
    if (game) {
      game.textContent = track.gameName;
      game.style.background = track.glowColor;
    }

    if (lightbox) {
      lightbox.style.display = 'flex';
      requestAnimationFrame(() => lightbox.classList.add('active'));
    }
  }

  closeCoverLightbox() {
    const lightbox = document.getElementById('music-cover-lightbox');
    if (lightbox) {
      lightbox.classList.remove('active');
      setTimeout(() => {
        lightbox.style.display = 'none';
      }, 250);
    }
  }

  openMusicModal() {
    const modal = document.getElementById('celestial-music-modal');
    if (!modal) return;
    this.isModalOpen = true;
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
      modal.classList.add('active');
    });
    this.renderTracks();
    this.updateTrackInfo();
  }

  closeMusicModal() {
    const modal = document.getElementById('celestial-music-modal');
    if (!modal) return;
    this.isModalOpen = false;
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 280);
  }

  setupListeners() {
    // Mini-player buttons
    const playBtn = document.getElementById('music-play-btn');
    const prevBtn = document.getElementById('music-prev-btn');
    const nextBtn = document.getElementById('music-next-btn');
    const menuBtn = document.getElementById('music-open-menu-btn');
    const avatarWrap = document.getElementById('music-widget-avatar-wrap');
    const infoWrap = document.getElementById('music-widget-info-btn');

    if (playBtn) playBtn.addEventListener('click', (e) => { e.stopPropagation(); this.togglePlay(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); this.prevTrack(true); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); this.nextTrack(true); });
    if (menuBtn) menuBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openMusicModal(); });
    if (avatarWrap) avatarWrap.addEventListener('click', (e) => { e.stopPropagation(); this.openMusicModal(); });
    if (infoWrap) infoWrap.addEventListener('click', (e) => { e.stopPropagation(); this.openMusicModal(); });

    // Header Sound button
    const headerSoundBtn = document.getElementById('sound-toggle-btn');
    if (headerSoundBtn) {
      headerSoundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlay();
      });
      headerSoundBtn.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        this.openMusicModal();
      });
    }

    // Disparadores adicionales de apertura de Jukebox
    document.querySelectorAll('.music-modal-trigger, [data-action="open-music-modal"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openMusicModal();
      });
    });

    // Modal close & minimize
    const modalCloseBtn = document.getElementById('music-modal-close-btn');
    const modalMinimizeBtn = document.getElementById('player-minimize-btn');
    const modalBackdrop = document.getElementById('celestial-music-modal');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => this.closeMusicModal());
    if (modalMinimizeBtn) modalMinimizeBtn.addEventListener('click', () => this.closeMusicModal());
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) this.closeMusicModal();
      });
    }

    // Modal master player controls
    const masterPlayBtn = document.getElementById('player-master-play-btn');
    const masterPrevBtn = document.getElementById('player-prev-btn');
    const masterNextBtn = document.getElementById('player-next-btn');
    const shuffleBtn = document.getElementById('player-shuffle-btn');
    const repeatBtn = document.getElementById('player-repeat-btn');
    const volumeBtn = document.getElementById('player-volume-btn');
    const volumeSlider = document.getElementById('player-volume-slider');
    const progressBarWrap = document.getElementById('player-progress-bar-wrap');
    const currentCoverWrap = document.getElementById('player-current-cover-wrap');

    if (masterPlayBtn) masterPlayBtn.addEventListener('click', () => this.togglePlay());
    if (masterPrevBtn) masterPrevBtn.addEventListener('click', () => this.prevTrack(true));
    if (masterNextBtn) masterNextBtn.addEventListener('click', () => this.nextTrack(true));
    if (shuffleBtn) shuffleBtn.addEventListener('click', () => this.toggleShuffle());
    if (repeatBtn) repeatBtn.addEventListener('click', () => this.toggleRepeat());
    if (volumeBtn) volumeBtn.addEventListener('click', () => this.toggleMute());
    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => {
        this.setVolume(e.target.value);
      });
    }

    if (progressBarWrap) {
      const handleSeek = (e) => {
        const rect = progressBarWrap.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const ratio = clickX / rect.width;
        this.seek(ratio);
      };

      progressBarWrap.addEventListener('click', handleSeek);
    }

    if (currentCoverWrap) {
      currentCoverWrap.addEventListener('click', () => {
        const currentTrack = GAME_TRACKS[this.currentTrackIndex];
        if (currentTrack) this.openCoverLightbox(currentTrack.id);
      });
    }

    // Lightbox close
    const lightboxClose = document.getElementById('cover-lightbox-close');
    const lightbox = document.getElementById('music-cover-lightbox');
    if (lightboxClose) lightboxClose.addEventListener('click', () => this.closeCoverLightbox());
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) this.closeCoverLightbox();
      });
    }

    // Keyboard shortcuts (Escape closes modals)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (lightbox && lightbox.classList.contains('active')) {
          this.closeCoverLightbox();
        } else if (this.isModalOpen) {
          this.closeMusicModal();
        }
      }
    });

    // Filtros por juego en el modal
    const filterPills = document.querySelectorAll('.music-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeFilter = pill.getAttribute('data-music-game') || 'all';
        this.renderTracks();
      });
    });

    // Buscador interactivo
    const searchInput = document.getElementById('music-search-input');
    const clearBtn = document.getElementById('music-clear-search-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        if (clearBtn) clearBtn.style.display = this.searchQuery ? 'inline-flex' : 'none';
        this.renderTracks();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          this.searchQuery = '';
          clearBtn.style.display = 'none';
          this.renderTracks();
          searchInput.focus();
        }
      });
    }

    // Clicks en botones reproducen sutil chime celestial
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.btn, .dock-item, .nav-link, .game-tab-btn, .day-btn, .carousel-nav-btn, .carousel-dot');
      if (target && !this.isMuted) {
        this.playChime(587.33, 0.12);
      }
    });
  }

  updateTrackInfo() {
    const track = GAME_TRACKS[this.currentTrackIndex];
    if (!track) return;

    // Mini-widget
    const widgetTitle = document.getElementById('music-track-title-text');
    const widgetGame = document.getElementById('music-track-game-text');
    const widgetCover = document.getElementById('widget-cover-thumb');

    if (widgetTitle) widgetTitle.textContent = track.title;
    if (widgetGame) widgetGame.textContent = track.gameName;
    if (widgetCover) widgetCover.src = track.cover;

    // Modal master player bar
    const playerTitle = document.getElementById('player-track-title');
    const playerMeta = document.getElementById('player-track-meta');
    const playerCover = document.getElementById('player-current-cover-img');
    const playerDuration = document.getElementById('player-total-duration');

    if (playerTitle) playerTitle.textContent = track.title;
    if (playerMeta) playerMeta.textContent = `${track.gameName} · ${track.composer}`;
    if (playerCover) playerCover.src = track.cover;
    if (playerDuration) playerDuration.textContent = track.duration;

    this.updateModalActiveCard();
  }

  updateUI() {
    const widget = document.getElementById('celestial-music-widget');
    const playBtn = document.getElementById('music-play-btn');
    const masterPlayBtn = document.getElementById('player-master-play-btn');
    const headerSoundBtn = document.getElementById('sound-toggle-btn');
    const volumeBtn = document.getElementById('player-volume-btn');
    const discSpinner = document.getElementById('player-disc-spinner');
    const currentTrack = GAME_TRACKS[this.currentTrackIndex];

    const active = this.isPlaying && !this.isMuted;

    if (widget) widget.classList.toggle('playing', active);
    if (discSpinner) discSpinner.classList.toggle('spinning', active);

    if (playBtn) {
      playBtn.innerHTML = getIcon(active ? 'pause' : 'play', 'clst-icon-sm');
      playBtn.title = active ? 'Pausar Música' : 'Reproducir Música';
    }

    if (masterPlayBtn) {
      masterPlayBtn.innerHTML = getIcon(active ? 'pause' : 'play', 'clst-icon-sm');
      masterPlayBtn.title = active ? 'Pausar' : 'Reproducir';
    }

    if (volumeBtn) {
      volumeBtn.innerHTML = getIcon(this.isMuted || this.audio.volume === 0 ? 'volumeMute' : 'volume', 'clst-icon-sm');
    }

    if (headerSoundBtn && currentTrack) {
      headerSoundBtn.classList.toggle('active', active);
      headerSoundBtn.title = active
        ? `Música Sonando: ${currentTrack.gameName} · ${currentTrack.title} (Clic para silenciar / pausar)`
        : 'Música Pausada (Clic para reproducir)';

      const soundIcon = headerSoundBtn.querySelector('.sound-icon');
      if (soundIcon) {
        soundIcon.innerHTML = getIcon(active ? 'soundOn' : 'soundOff');
      }
    }

    this.updateModalActiveCard();
  }

  playChime(freq = 587.33, duration = 0.15) {
    if (this.isMuted) return;
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const t = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(t);
      osc.stop(t + duration);
    } catch (_) {}
  }
}

let playerInstance = null;

export function initHoYoMusic() {
  if (!playerInstance) {
    playerInstance = new HoYoAudioPlayer();
  }
  return playerInstance;
}

export function openHoYoMusicModal() {
  if (playerInstance) {
    playerInstance.openMusicModal();
  }
}

export function playCelestialChime(freq = 587.33, duration = 0.2) {
  if (playerInstance) {
    playerInstance.playChime(freq, duration);
  }
}

export function pauseBackgroundMusic() {
  if (playerInstance && playerInstance.audio && playerInstance.isPlaying) {
    playerInstance.wasPlayingBeforeVideo = true;
    playerInstance.audio.pause();
  }
}

export function resumeBackgroundMusic() {
  if (playerInstance && playerInstance.audio && playerInstance.wasPlayingBeforeVideo) {
    playerInstance.wasPlayingBeforeVideo = false;
    playerInstance.audio.play().catch(() => {});
  }
}

// Exponer en window para integración con botones de la interfaz
if (typeof window !== 'undefined') {
  window.openHoYoMusicModal = openHoYoMusicModal;
}
