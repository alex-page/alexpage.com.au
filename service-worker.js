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
    "revision": "549c25c46c232db4659c4f11a20fe08d"
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
    "revision": "3025beffe20179403dd91266da48a913"
  },
  {
    "url": "blog/index.html",
    "revision": "fdae02c68ebd79bda5f403620f19549f"
  },
  {
    "url": "index.html",
    "revision": "69891feee8c07d0af25b65420a86bf36"
  },
  {
    "url": "projects/a11ycolor/index.html",
    "revision": "8205fd83d76da550208243459bb7f283"
  },
  {
    "url": "projects/auds/index.html",
    "revision": "1235df4f020c83a6cc7c4f0f23a9f4d1"
  },
  {
    "url": "projects/chameleon/index.html",
    "revision": "b8f26db54091cba2acab28dcf9d9a638"
  },
  {
    "url": "projects/furnace/index.html",
    "revision": "cd5af25a55e65a4b0f6ef555f2f0fac3"
  },
  {
    "url": "projects/harmonograph/index.html",
    "revision": "331b01b118f98803c65aa89efb16c10e"
  },
  {
    "url": "projects/index.html",
    "revision": "a4e9eb7520d2d0128c133c469837262e"
  },
  {
    "url": "talks/hard-work-make-simple/index.html",
    "revision": "43a6160f4b0e782f04df0352a163df77"
  },
  {
    "url": "talks/index.html",
    "revision": "0f74891c4f5c6f78f6e3053630936a1b"
  },
  {
    "url": "talks/names-culture/index.html",
    "revision": "a12658133e940855f198c4a84572c826"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
