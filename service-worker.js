const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/paginas/inicio.html',
  '/paginas/Ejemplo1.html',
  '/paginas/ListaVideos.html',
  '/js/lugares.js',
  '/css/estiloindex.css',
  '/css/estiloMenu.css',
  '/vendor/bootstrap-5.2.3-dist/css/bootstrap.min.css',
  '/js/Ejemplo1.js',
  '/js/listaVideo.js',
  '/img/kirby.jpeg',
  '/img/descarga.jpeg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
    .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
