// sw.js  （全新内容，全部替换）
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

// 关键：不缓存 HTML 和 JS，始终取最新
self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('.html') || 
      event.request.url.endsWith('.js') || 
      event.request.url.includes('index.html')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
    );
  }
});
