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
    "revision": "99072a4ba9a44dbc6253e15549efa9c6"
  },
  {
    "url": "about.html",
    "revision": "ada087fd88a7faa00fa4147d96dd2ab3"
  },
  {
    "url": "assets/css/0.styles.a05aacfc.css",
    "revision": "0634eca22a4d18ccd7dc2edb4778af52"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "c920e155b5fd736af5729e5415008ea6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b6100dfc.js",
    "revision": "6d3fe2f22229cd18b519d3cd8961066e"
  },
  {
    "url": "assets/js/11.6c557af9.js",
    "revision": "ca22035da5194a73a03e8250d004b8ad"
  },
  {
    "url": "assets/js/12.354f604d.js",
    "revision": "8411dd9bec3679633d9611df4ce6fc9c"
  },
  {
    "url": "assets/js/13.43e4cb92.js",
    "revision": "b4f7514e1a333c19764d8d1dd527e0bf"
  },
  {
    "url": "assets/js/14.f827c562.js",
    "revision": "bc1ba9b38cbe7de35d94076d327904b0"
  },
  {
    "url": "assets/js/15.b1fba6b9.js",
    "revision": "9345ee56f154ba9fbe5f7590e2b54546"
  },
  {
    "url": "assets/js/16.13f732a0.js",
    "revision": "43d4f0c439db07f2df606dc6a2d8aa43"
  },
  {
    "url": "assets/js/17.b4c1073c.js",
    "revision": "27aa9b7956a9f2ddffc9f0bdcae0538f"
  },
  {
    "url": "assets/js/18.73dde18b.js",
    "revision": "b73de0991d2ab2cc540e3494f0ef078b"
  },
  {
    "url": "assets/js/19.3e45ec66.js",
    "revision": "5f5dd0a9098e7f27081c8153eba58a0b"
  },
  {
    "url": "assets/js/2.af6f6e13.js",
    "revision": "0e1388337091bbe01c0ae2df72608478"
  },
  {
    "url": "assets/js/20.a86ae676.js",
    "revision": "7dbf1f58a63adf128e10ec9027ac8d84"
  },
  {
    "url": "assets/js/21.dee0cec8.js",
    "revision": "8a97934fa382ef310b4d2bcf593df83a"
  },
  {
    "url": "assets/js/22.5182e377.js",
    "revision": "fd3fdc33d4f268c58c5d531f26eb7630"
  },
  {
    "url": "assets/js/23.f0b0387a.js",
    "revision": "6d48103c75380f7527056c386656a040"
  },
  {
    "url": "assets/js/3.7498b1ab.js",
    "revision": "f9902e28c84b0611e727667023dc1991"
  },
  {
    "url": "assets/js/4.ea084a40.js",
    "revision": "cbc4866c10331eeb1365392571ab4e71"
  },
  {
    "url": "assets/js/5.58d05f8c.js",
    "revision": "e7ec1026d1b5c2cd48a9dfce761b0f99"
  },
  {
    "url": "assets/js/6.b8ecd230.js",
    "revision": "d626f77aa9dfa820d72c6cf2f95c88af"
  },
  {
    "url": "assets/js/7.24a79f51.js",
    "revision": "2d2f0e46cb557db47835a7fd66bac932"
  },
  {
    "url": "assets/js/8.14343bf0.js",
    "revision": "37fc8350321aeed64057df8ff28764da"
  },
  {
    "url": "assets/js/9.7fb7fc2c.js",
    "revision": "5a57f81f80857ea6cbbad3407298acaa"
  },
  {
    "url": "assets/js/app.6d97aa47.js",
    "revision": "e2b7fc07d58ec10cccda52caee8f02c8"
  },
  {
    "url": "countUp.html",
    "revision": "9c636b27ff9e37d674b9558faf32db24"
  },
  {
    "url": "css/a.html",
    "revision": "fbf6cd2aea8850d277b4717a5330971a"
  },
  {
    "url": "css/b.html",
    "revision": "6dadb53653fbdd75b86e4f3fd54adb04"
  },
  {
    "url": "css/c.html",
    "revision": "1544ce5f45cc981d601ee1d4f644210e"
  },
  {
    "url": "css/index.html",
    "revision": "9d72ad9726c2a0df6facf0da31d4ac96"
  },
  {
    "url": "favicon.png",
    "revision": "471ac174ec600107ee24c09fdc5b1d6e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "e371ef19572e07e2d0d4fc71f6a8666c"
  },
  {
    "url": "javascript/a.html",
    "revision": "9cc8c0b33c096de7beb02c10004e5eec"
  },
  {
    "url": "javascript/b.html",
    "revision": "5c485430f22a555756f1ef2aa60981ab"
  },
  {
    "url": "javascript/c.html",
    "revision": "6575fb358146d6b36275ce766c23bccc"
  },
  {
    "url": "javascript/index.html",
    "revision": "21e363966b8a253566285ec43b8bef2f"
  },
  {
    "url": "test.html",
    "revision": "56cc343e111bbff0b37aaaa4909eaf4a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
