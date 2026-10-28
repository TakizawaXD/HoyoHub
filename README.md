# 🌟 El Gremio del Viajero — HoyoHub

Portal oficial y conector central de la comunidad **El Gremio del Viajero** para jugadores de **Genshin Impact, Honkai: Star Rail y Zenless Zone Zero**. 

Diseñado con estética dark glassmorphism, partículas celestiales en Canvas, arquitectura **Mobile-First** (experiencia nativa táctil en smartphones) y soporte PWA offline.

---

## ✨ Características Principales

1. **🗡️ Catálogo Maestro de Personajes & 3 Builds Meta (`catalogo.html`)**:
   - Catálogo segmentado por juego: **Genshin Impact**, **Honkai: Star Rail** y **Zenless Zone Zero**.
   - Filtros avanzados por rareza (5★, 4★, 3★/Rango S, A, B), elemento y buscador en tiempo real.
   - Modal interactivo con **3 builds óptimas por personaje** (mejores armas, artefactos/discos, estadísticas prioritarias y rutas de farmeo de materiales).

2. **🎵 HoYo Jukebox & Menú Musical (`js/audio-player.js`)**:
   - Reproductor flotante integrado en todas las páginas con 22 temas oficiales de HoYoverse (*Genshin Impact, Star Rail, ZZZ y Honkai Impact 3rd*).
   - Menú de selección musical con portadas oficiales HD 1:1, visor Lightbox a pantalla completa, barra de progreso, volumen, modo aleatorio (Shuffle) y repetición en bucle.

3. **🏛️ Portales Dedicados por Juego**:
   - **Genshin Impact** (`genshin.html`): Banners activos con temporizador en cuenta regresiva, noticias en vivo, selector de videos de la comunidad y calendario de talentos.
   - **Honkai: Star Rail** (`hsr.html`): Saltos de evento activos, noticias oficiales HoYoPlay y guías del Expreso Astral.
   - **Zenless Zone Zero** (`zzz.html`): Canales de sintonización de agentes, amplificadores de motor y Shiyu Defense.

4. **⚔️ Sincronización en Vivo por UID (Enka.Network API)**:
   - Consulta de aventureros por UID en tiempo real con estadísticas y avatares directamente de la API pública.

5. **📱 PWA & Resiliencia Offline Completa**:
   - `sw.js` (Service Worker): Caché local inteligente de activos estáticos.
   - `offline.html`: Modo fuera de línea con detección automática de reconexión.
   - `404.html`: Página de error temática con rescate de navegación y reproductor de música.
   - `assets/og_banner.jpg`: Banner de previsualización para redes sociales (Discord, WhatsApp, Twitter).

---

## 🚀 Cómo Iniciar en Local

### Opción 1: Con doble clic en Windows
Haz doble clic sobre el archivo `iniciar_servidor.bat`. Se abrirá automáticamente tu navegador en `http://localhost:8080`.

### Opción 2: Desde la terminal
```bash
# Con Python
python -m http.server 8080

# O con Node.js
npx serve -l 8080
```

---

## ⚙️ Configuración del Clan

Toda la configuración del clan se encuentra centralizada en [`js/config.js`](js/config.js):

- `name`: "El Gremio del Viajero"
- `tag`: "GV"
- `motto`: "Unidos por las Estrellas"
- `discordUrl`: https://discord.gg/bYSGHFWvhe
- `server`: América / Multiregión
