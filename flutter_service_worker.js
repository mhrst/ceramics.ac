'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "93b56cf3f57134cc1c91b4a7c311d66e",
"index.html": "48723b933ff22526a5445e6a36bc4a44",
"/": "48723b933ff22526a5445e6a36bc4a44",
"styles.css": "391c6bdef4787b452a143d0dd742b533",
"main.dart.js": "123cc6c481965ce57f4a563ce2f64ba3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c0486aea0af4761c19e2262ff6380e7e",
"assets/AssetManifest.json": "636850e64848da9334835c3a28c8ee97",
"assets/NOTICES": "d8876508d2572f13a46dc7cd2d5aaf13",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/qrl_common/assets/images/appleid_button_white_outline.png": "8e5d6cbbf6f3507efdc71a89ef53d928",
"assets/packages/qrl_common/assets/images/appleid_button_black.png": "edf71a70ab2a1523f54bc04b1becef5e",
"assets/packages/qrl_common/assets/images/2.0x/appleid_button_white_outline.png": "79952281bf401f1ab590e944dcd02ab6",
"assets/packages/qrl_common/assets/images/2.0x/appleid_button_black.png": "ba3cfd534837f1d143852c08cd6f21e0",
"assets/packages/qrl_common/assets/images/2.0x/btn_google_signin_light_normal_ios.png": "db2c4e5abcb54580e2c5698b13e9de78",
"assets/packages/qrl_common/assets/images/2.0x/btn_google_dark_normal_ios.png": "5ea8850f2b12ccf4e19ed24a334a7774",
"assets/packages/qrl_common/assets/images/2.0x/btn_google_signin_dark_normal_ios.png": "d3d8c8f5936e2d34b9bab3ed71b28840",
"assets/packages/qrl_common/assets/images/2.0x/appleid_button_white.png": "2a9c9125dc7ae5cbe3f735c8b48c4451",
"assets/packages/qrl_common/assets/images/2.0x/btn_google_light_normal_ios.png": "a18b3bf3426bffec091e03aba893083d",
"assets/packages/qrl_common/assets/images/btn_google_signin_light_normal_ios.png": "da1d1eed1d36a54eb47f7daad3822630",
"assets/packages/qrl_common/assets/images/btn_google_dark_normal_ios.png": "591288cdf171ba74efc873a8d7fb4afe",
"assets/packages/qrl_common/assets/images/3.0x/appleid_button_white_outline.png": "f8f07af511fb0a2be265d4b76710b06f",
"assets/packages/qrl_common/assets/images/3.0x/appleid_button_black.png": "59516ee4688a9f3127d4df332ac75614",
"assets/packages/qrl_common/assets/images/3.0x/btn_google_signin_light_normal_ios.png": "34d3456f2dbcb4b946a94a5539cb2e3f",
"assets/packages/qrl_common/assets/images/3.0x/btn_google_dark_normal_ios.png": "94f9827a83cbc196fa58175b2974b3c1",
"assets/packages/qrl_common/assets/images/3.0x/btn_google_signin_dark_normal_ios.png": "e08c6eece90b445271a9a7ff16dc1988",
"assets/packages/qrl_common/assets/images/3.0x/appleid_button_white.png": "25059dc300bf48b9cc66469dc53cd4a8",
"assets/packages/qrl_common/assets/images/3.0x/btn_google_light_normal_ios.png": "6283a0d0b9f95ea24a19d9f9e59e57d8",
"assets/packages/qrl_common/assets/images/btn_google_signin_dark_normal_ios.png": "0ef589fcd925493cf8abfe9006bd0013",
"assets/packages/qrl_common/assets/images/appleid_button_white.png": "f57a90c2dd821e9db707c735f2c988fc",
"assets/packages/qrl_common/assets/images/btn_google_light_normal_ios.png": "e9ed8eb5bb7fb3e38dd72e93e437d0e1",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "14418a1e977b63b2aa50aea12e4b99dd",
"assets/fonts/MaterialIcons-Regular.otf": "c4d8c395721cbdc52d5f040e3d08e5b8",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/moon_jar.png": "4cd0f03d4dd836ea4d65abc4087b9701",
"assets/assets/images/mug_8oz.png": "97e2bf08784f72a4c53e281fda42728c",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/mug_12oz.png": "4c03ad58f8481f936bdbcf942828854e",
"assets/assets/images/mug_6oz2.png": "ebb19c3ba00579655ad9f0e929fa517a",
"assets/assets/images/mug_12oz2.png": "be6c3b30522458f41bcbc96c1e0d3a93",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/2_set_mug_8oz.png": "e456aa54f65a8bcaf02de6c026c10c91",
"assets/assets/images/mug_6oz.png": "a32e42ac81b4b8f06e9e0f34ea65a7a6",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
