// ══════════════════════════════════════════
// Service Worker - 社區智慧通報系統
// 版本更新：改 CACHE_NAME 版本號可清除舊快取
// ══════════════════════════════════════════
const CACHE_NAME = 'smart-community-v1';

const CACHE_FILES = [
  './',
  './index.html',
  './admin.html',
  './config.js',
  './icons/icon-admin-192.png',
  './icons/icon-admin-512.png',
  './manifest-admin.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // GAS / Line 請求不快取
  if (event.request.url.includes('script.google.com') ||
      event.request.url.includes('googleapis.com') ||
      event.request.url.includes('line.me')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request)
        .then(cached => cached || new Response(
          '<div style="text-align:center;padding:40px;font-family:sans-serif">' +
          '<h2>📶 目前無網路連線</h2><p>請連線後重新整理</p></div>',
          { headers: { 'Content-Type': 'text/html;charset=utf-8' } }
        ))
      )
  );
});
