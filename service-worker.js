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
    "url": "404.html",
    "revision": "97bfe664e8deb82bd4d1c84b84ac87d7"
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
    "url": "assets/icons/download.svg",
    "revision": "570ee436fd7854a48fe3dca8db3690ee"
  },
  {
    "url": "assets/icons/github.svg",
    "revision": "312721152592a190b4bc1de83a57daf9"
  },
  {
    "url": "assets/icons/mail.svg",
    "revision": "733b40cb4c31a8602d8d143c58ff703e"
  },
  {
    "url": "assets/icons/star.svg",
    "revision": "31e079da8dc8a8225253592e5e596e9d"
  },
  {
    "url": "assets/icons/twitter.svg",
    "revision": "b4d65fd0a18509864065499fd3d7e08d"
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
    "revision": "251a937a8c95a879834b2d8fb2295479"
  },
  {
    "url": "blog/index.html",
    "revision": "9d953f996f05aab94235f790cc5e6526"
  },
  {
    "url": "index.html",
    "revision": "56b4afb67aaebf4ecfb8ba952997e6ad"
  },
  {
    "url": "projects/a11ycolor/index.html",
    "revision": "3223a496b6266eb3c810b569c2a8d1f8"
  },
  {
    "url": "projects/auds/index.html",
    "revision": "67a28a433724c5f1151fe94c897961da"
  },
  {
    "url": "projects/chameleon/index.html",
    "revision": "6a85183a886ed9aa1dc070509b6890d6"
  },
  {
    "url": "projects/furnace/index.html",
    "revision": "67a4897b21d7737a9fcc6b1bf261303b"
  },
  {
    "url": "projects/harmonograph/index.html",
    "revision": "1a00713a266077cc684bcfd526342f27"
  },
  {
    "url": "projects/index.html",
    "revision": "00e29095074ccc63be0ad12422fda9b9"
  },
  {
    "url": "talks/hard-work-make-simple/index.html",
    "revision": "4981c483f5f697bd5efbcc5b4f671878"
  },
  {
    "url": "talks/index.html",
    "revision": "da9a92c6bbbc42870a828519169996e6"
  },
  {
    "url": "talks/names-culture/index.html",
    "revision": "c0fbfb23f30550f7b326bd2e495081ae"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
