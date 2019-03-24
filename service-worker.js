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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js");

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
    "url": "assets/favicons/alex-page.jpg",
    "revision": "ad5fe5c24627624282a6cd649c026e5e"
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
    "url": "assets/img/alex-page.jpg",
    "revision": "5f10cdd6e12f1f68e3f66d1c46d4e257"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "dad33d34ebd308c6417893d14557284a"
  },
  {
    "url": "blog/index.html",
    "revision": "3f6b78e52c28514949b584a580b22ddf"
  },
  {
    "url": "index.html",
    "revision": "8ac6c46aa7593fa9b94a1e68c651ba43"
  },
  {
    "url": "projects/a11ycolor/index.html",
    "revision": "92d4dba59b8151ab5b96fd8b1bae58f1"
  },
  {
    "url": "projects/harmonograph/index.html",
    "revision": "751edaf47f930e38f8a1625dd0f1c399"
  },
  {
    "url": "projects/index.html",
    "revision": "d8901cb99f60efe5b761cddf6fcbf7c3"
  },
  {
    "url": "talks/index.html",
    "revision": "8b62442bfdf23f8839f31317c8be7f25"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
