'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "278db7e57c3aa8a2b99f42ba4319250c",
"assets/AssetManifest.json": "25e46a3928dcbc9669ba6f8c54d9ca87",
"assets/assets/bgservice.jpg": "70dbf54094531e1fb6285a066fe42259",
"assets/assets/images/facility.png": "435add48d1ed5fe10e77e38ec3debff6",
"assets/assets/images/home1.jpeg": "6454eda630de8aa4180b6ec6bbff3ff6",
"assets/assets/images/home2.jpeg": "de2408c6509d6a9fb2cc98189933ae85",
"assets/assets/images/home_protection.png": "a579938fc6c95af211703ca8aab93d1a",
"assets/assets/images/img.png": "fd037e74ea3705363b965886f9e68e31",
"assets/assets/images/img_1.png": "8b5c4ed043f91cd3a23f692e22204dd9",
"assets/assets/images/img_2.png": "b0ece472a6cdd388d5acad21d5238d98",
"assets/assets/images/img_3.png": "de1e3f3c5e07aa4c41f39acd8acc2424",
"assets/assets/images/img_4.png": "d121bc1df56bc6e275e2326332fe3025",
"assets/assets/images/img_5.png": "9b0b673123789abee24b714a2f327bfa",
"assets/assets/images/img_6.png": "43f3e2af79e066038df30eba457502e7",
"assets/assets/images/img_7.png": "44b2006a49cf9f499f2fbbbb6383fceb",
"assets/assets/images/img_8.png": "f16223f5c889d3830d5914601c33444d",
"assets/assets/images/img_9.png": "07b4c700075139df09d1f87a81b545e9",
"assets/assets/images/inspection.png": "d54583edf3d2f43f7f92c95717ab7353",
"assets/assets/images/itandmanf.png": "c81d95a476311c1dd4b14562130b2ae7",
"assets/assets/images/itservices.png": "f6c7c5ea6440bb850b0e743b08b0e15e",
"assets/assets/images/npc-back-logo.jpeg": "fc7677b143b9c7312ad009337b774723",
"assets/assets/images/npclogo-nobg.png": "793e82615a5065c28d6800d829075d60",
"assets/assets/images/npcLogo.jpeg": "f8c3c49ee37b225bce71782965f52b0f",
"assets/assets/images/pestfree.png": "4f3b6e0a397c6a876bb4c9bedf46511b",
"assets/assets/images/pest_control_technician.png": "b894b4b0bad7ad328fc49f3d758847a6",
"assets/assets/images/Pharmacy.jpeg": "7f98c33068bf6945932194020220f2c4",
"assets/assets/images/postconstructions.jpeg": "a861782546c550b1d73ed37b19beac8c",
"assets/assets/images/preconstructions.jpeg": "bab5e295375dd2f31261f0219bb3e21e",
"assets/assets/images/school.png": "f42d0df1d9cb5e63213c4172b1e924bf",
"assets/assets/images/service.png": "0b0d4eb80ea8446ae015f01eeb823b99",
"assets/assets/images/technician_with_customers.png": "8f5290f5f119c26fb886ec3ed1e3f605",
"assets/assets/img.png": "1a8224a88b41f264b7762782b695be6a",
"assets/assets/img_1.png": "b532210dff40491ccb889c4fe4ed0c67",
"assets/assets/img_2.png": "9db8bd33d5b20d26ff3fb36d494b039e",
"assets/assets/img_3.png": "c2a5c0791bd0c19111cd2d678d49bdcf",
"assets/assets/img_4.png": "432c0cf096ea2c2a97f0c61f9146e19a",
"assets/assets/img_5.png": "a823344ddd613715ab248266723c3893",
"assets/assets/img_6.png": "b3cf5250bbe61c9db7f2e817ef63d518",
"assets/assets/img_7.png": "9c4f52ec2f90d4b9a96e5945a88dfb9f",
"assets/assets/img_8.png": "aa579b2ebd0a515f3e807769a35ba8f1",
"assets/assets/img_9.png": "35a859af1a326569166c2398a30b913d",
"assets/assets/location_icon.png": "960eeba9fb5fbce21582a6a3e76d902b",
"assets/assets/npclogo.webp": "10dbc4540fe91ad27391465640b7188d",
"assets/assets/termix.jpg": "6f5e7251824fd57218435cc93cabe9d9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "283aa749e74d22a117f2758527cfcd98",
"assets/NOTICES": "05118de3dc2aef7c1dfa849cb5984073",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14c541b14f622f133aca1a48881026b8",
"/": "14c541b14f622f133aca1a48881026b8",
"main.dart.js": "4a789a46c905602d7dbe26d89c2647e8",
"manifest.json": "36a3035b3156fccde21a9d8fcaccef1b",
"version.json": "81d6af6b0ceb6689d9586a31c62831d9"};
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
