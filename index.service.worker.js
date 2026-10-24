// Eltavolitja a korabbi service workert es a tarat; a jatek mar worker nelkul fut (tools/export_web.ps1).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
	event.waitUntil(caches.keys()
		.then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
		.then(() => self.registration.unregister())
		.then(() => self.clients.matchAll({ type: 'window' }))
		.then((clients) => clients.forEach((c) => c.navigate(c.url))));
});