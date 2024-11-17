const CACHE_NAME = 'obi-ordu-v1';
const urlsToCache = [
  '/',
  '/assets/css/style.css',
  '/blog',
  '/contact'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
