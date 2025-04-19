const CACHE_NAME = 'raining game-v1';
const urlsToCache = [
    '/first_program/',
    '/first_program/index.html',
    '/first_program/manifest.json',
    'https://i.ibb.co/j9VZdRcc/maskable-icon-x192.png'
    'https://i.ibb.co/j9VZdRcc/maskable-icon-x192.png'
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
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});
