// Minimal service worker
self.addEventListener("install", event => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", event => {
  // Just let requests pass through (no caching yet)
});
