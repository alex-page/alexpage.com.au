/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "alex-page"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "862b1bad1246cca92f55ea042f236351"
  },
  {
    "url": "assets/blog/actions.jpg",
    "revision": "bd92975eae17f4058c3ee93f8f6ea165"
  },
  {
    "url": "assets/blog/gh-actions.jpg",
    "revision": "668179f9dce00dcfe97ee0372d8a3cfc"
  },
  {
    "url": "assets/blog/workflow.jpg",
    "revision": "83b9342473acd69eeb89e14dc8b4be23"
  },
  {
    "url": "assets/favicons/alex-page.jpg",
    "revision": "3a6795ab492eed9afdd31f60905749cb"
  },
  {
    "url": "assets/favicons/apple-touch-icon.png",
    "revision": "3748c3e5a5053b42ca0d73921cf0d575"
  },
  {
    "url": "assets/favicons/favicon-16x16.png",
    "revision": "6b633b08046cb9fe1c721c564ff9d470"
  },
  {
    "url": "assets/favicons/favicon-32x32.png",
    "revision": "e83efafb8239f8d71de5d11e60845b84"
  },
  {
    "url": "assets/favicons/favicon.ico",
    "revision": "f3f3911092cf9903a257a9ccf1a446b5"
  },
  {
    "url": "assets/favicons/icon-192.png",
    "revision": "93fdadc2c2b1a0f322280fea0a6b8bba"
  },
  {
    "url": "assets/favicons/icon-512.png",
    "revision": "a82c53a9b5ed34f65d97abd0454e3969"
  },
  {
    "url": "assets/favicons/mstile-150x150.png",
    "revision": "44e9c875c20dc554b74e7d5954d38bee"
  },
  {
    "url": "assets/favicons/safari-pinned-tab.svg",
    "revision": "bd2022f41a6e2aa0028836a508aa906e"
  },
  {
    "url": "assets/img/alex-page.png",
    "revision": "597889adb823c5026fd89a4d212252bd"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "dad33d34ebd308c6417893d14557284a"
  },
  {
    "url": "blog/github-actions-npm/index.html",
    "revision": "ea3d08cd3c42fea5d66fb961fe767e4a"
  },
  {
    "url": "blog/index.html",
    "revision": "f09989ece028f02ffcac9d9a22b39ee8"
  },
  {
    "url": "index.html",
    "revision": "4a604940e61207714c583b78f40ffd27"
  },
  {
    "url": "projects/a11ycolor/index.html",
    "revision": "08a80724087f87d5012ff3e74f884cf0"
  },
  {
    "url": "projects/auds/index.html",
    "revision": "2fa1f7eac242d560225b1b2222b02752"
  },
  {
    "url": "projects/chameleon/index.html",
    "revision": "f282c60b1e61b1e0ca804610ad4b5e4e"
  },
  {
    "url": "projects/furnace/index.html",
    "revision": "1a13a890a6cada26de277413ba0684fc"
  },
  {
    "url": "projects/harmonograph/index.html",
    "revision": "5d294fd1d4b1093e88896a80c489cba0"
  },
  {
    "url": "projects/index.html",
    "revision": "c93feadc447efd65a64d174b2a9a03a6"
  },
  {
    "url": "talks/hard-work-make-simple/index.html",
    "revision": "3c293e41b6f452ce9c0f89c84a822870"
  },
  {
    "url": "talks/index.html",
    "revision": "926c482a2081f16a39de10e0319b2269"
  },
  {
    "url": "talks/names-culture/index.html",
    "revision": "beb71125bf4a4e456c7ae20d6a5fa9ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
