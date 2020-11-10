// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'akhyarrh',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `NetworkFirst` strategy for html
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.NetworkFirst()
);

// use `NetworkFirst` strategy for css and js
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.NetworkFirst()
);

// use `CacheFirst` strategy for images
workbox.routing.registerRoute(
    /\.(?:ico|jpg|jpeg|png|svg|webp)$/,
    new workbox.strategies.CacheFirst()
);

// use `StaleWhileRevalidate` third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.statically.io/,
    new workbox.strategies.StaleWhileRevalidate()
);

// use `CacheFirst` for Unsplash random image
workbox.routing.registerRoute(
    /^https?:\/\/source.unsplash.com/,
    new workbox.strategies.CacheFirst()
);
