/**
 * Service Worker Oficial de El Gremio del Viajero
 * Proporciona soporte offline, caché de recursos estáticos y fallback a offline.html
 */

const CACHE_NAME = 'gremio-viajero-v1';

const STATIC_PRECACHE = [
  './',
  './index.html',
  './catalogo.html',
  './catalog.html',
  './genshin.html',
  './hsr.html',
  './zzz.html',
  './404.html',
  './offline.html',
  './favicon.ico',
  './manifest.json',
  './assets/clan_emblem.jpg',
  './assets/og_banner.jpg',
  './css/base.css',
  './css/layout.css',
  './css/components.css',
  './css/mobile.css',
  './js/icons.js',
  './js/audio-player.js',
  './js/effects.js',
  './js/character-catalog-data.js'
];

// Instalación: precachear recursos base
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_PRECACHE).catch((err) => {
        console.warn('[SW] Algunos recursos no pudieron precachearse:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activación: limpiar cachés obsoletas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Intercepción de peticiones (Fetch)
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Solo gestionar peticiones GET
  if (request.method !== 'GET') return;

  // 1. Peticiones de Navegación (HTML): Network first, luego Caché, luego offline.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => {
          return caches.match(request).then((cached) => {
            return cached || caches.match('./offline.html');
          });
        })
    );
    return;
  }

  // 2. Recursos estáticos locales: Cache First, fallback a Network
  const url = new URL(request.url);
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        });
      })
    );
    return;
  }

  // 3. Recursos externos (APIs, CDNs): Network normal con manejo de error
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});
