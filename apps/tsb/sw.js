/* True Shot Billiards — service worker.
 *
 * Its whole job: make the game open with no signal. There is no API to cache,
 * no user data, no background sync. One HTML file and six icons.
 *
 * The version constant below is stamped by build.js from a hash of the page
 * itself, so a new build gets a new cache and the old one is deleted on
 * activate. Hand-maintaining that number, and forgetting to bump it, is the
 * classic way to strand every installed copy on a build nobody can reproduce.
 */
'use strict';

const VERSION = 'fdeaad4e755c';
const CACHE = 'tsb-' + VERSION;
const ASSETS = [
  "./",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener('install', (e) => {
  // NO skipWaiting. A new worker takes over on the next cold start instead of
  // mid-session, because "mid-session" here can mean mid-match: swapping the
  // page under a live lockstep game desyncs it against the opponent, who is
  // still on the build they started with.
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map((n) => (n !== CACHE && n.startsWith('tsb-')) ? caches.delete(n) : null));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // never touch cross-origin

  // The websocket relay is not a fetch and never reaches here, but any future
  // same-origin API call must not be served from a cache full of a pool game.
  if (url.pathname.endsWith('/healthz')) return;

  // Navigations: cache first, because the entire point is opening with no
  // signal, and the asset is a static build that only changes when the version
  // does. Revalidate in the background so the next cold start gets the update.
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      const cached = await caches.match('./', { ignoreSearch: true });
      const net = fetch(req).then((res) => {
        if (res && res.ok) caches.open(CACHE).then((c) => c.put('./', res.clone()));
        return res;
      }).catch(() => null);
      return cached || (await net) || new Response(
        '<!doctype html><meta charset=utf-8><title>Offline</title>' +
        '<body style="background:#0a0d0b;color:#e4d6b6;font:16px/1.5 system-ui;' +
        'display:grid;place-items:center;height:100vh;margin:0;text-align:center">' +
        '<p>True Shot Billiards isn\'t cached yet.<br>Open it once with a connection.</p>',
        { headers: { 'content-type': 'text/html; charset=utf-8' } });
    })());
    return;
  }

  e.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res && res.ok && res.type === 'basic') {
        const c = await caches.open(CACHE);
        c.put(req, res.clone());
      }
      return res;
    } catch (err) {
      return new Response('', { status: 504, statusText: 'offline' });
    }
  })());
});

// The page asks for this when the player taps "Update" on the ready banner.
self.addEventListener('message', (e) => {
  if (e.data === 'tsb-skip-waiting') self.skipWaiting();
});
