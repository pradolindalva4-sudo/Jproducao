const CACHE_NAME = 'dony-v24';
const assets = ['./', './index.html', './manifest.json', 'https://i.ibb.co/vzNfVfM/dony-logo.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
