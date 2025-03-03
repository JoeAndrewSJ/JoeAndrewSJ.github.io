'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7e1e957cb51b4c16de6e154c09cdb7c1",
".git/config": "1174186dcb2e6eeca4189c4fa3e29ef8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2bc601d891b1980fef31069a9681e6b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ec217c531de0409aaae1c1ba3b0b7f3",
".git/logs/refs/heads/main": "12d6ebb5ccbf4308f92d720e5a57292b",
".git/logs/refs/heads/master": "5f00f20b910a1beed21785db574b91c3",
".git/logs/refs/remotes/origin/main": "ba6369cae6bc88a9b90dff06a49a4619",
".git/objects/00/b1e9ca6df6db52bd547034972a179c6487417f": "8a97980b997a50332229ea3ab4301f46",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/f19bf9e1cc7d3495fd7dd83f73590bdabe9b8d": "d920e5afccd70f3712f4cc3f4e21f08a",
".git/objects/0c/03a266c864415037e438b398183b9ebff677c3": "e9e59c3121c5be673cc02258492bd0b3",
".git/objects/0f/64f7c034dbfc04043daf4ecfed4bccb1753a0c": "a648a4076edaacedea503e92eac0b1e1",
".git/objects/12/687d45025dc96f8c87a6d4b28d67590511e9bd": "33e8886328e7cee29981e2ed05a342d2",
".git/objects/16/6844e0381b8ef50ff1a1424dd0810d3c7667e4": "c028491915c8a548aa4a37b602981324",
".git/objects/1c/c8961fa2b27b2184c1334079227bebd86aaa79": "70ff4a778ed4d3d4654ba96f4cbeea0c",
".git/objects/1e/dbec47755f507a74fdf6d50a4dde4ede28fcd6": "522b820adfe870b6f017af74539a4e6c",
".git/objects/1e/e2534fd053116689c19a26927ac1fd50843733": "cfb0d68d766461956f39ec4aff25dca4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/94e0305bbe2ccc4ce62d82cabed9dda6640e32": "d3d8e5fa6718e55f7afd03bce7aa83e5",
".git/objects/23/a3d948fa10b96be6149073a59e980043d6023b": "17321c8c1a4f1796d95f04ca66cb5a15",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/ea02ae00bc2789edd2676210dc429ca11aaffc": "812c1657622740257b2a89b96df108ee",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/7b0604fe0a856492e18f06865766d27f1c19c6": "a7dd461791730233e2cae45c75b21443",
".git/objects/33/fbba08e49ebf80554ca4b77e9f03588c1c5802": "3abc60324c8e21e4737b198e368d0813",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/272491b092a8c887da832ee032cd16a108d141": "83ffe7213e5cc9db562d9cc59cdc5253",
".git/objects/43/213ad87c60803e03e7d2942a6db70a12769a68": "e07d00ac247095718ff86d5f8273b92b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/51/a64fde36221307fcb29f970b5ef9a8ae9d4dc9": "f78de0288c1d80ef96834035261f538d",
".git/objects/53/259655814ed6e497bf95aea54797368a261428": "5bb5e79a1a6343a71b05486b832b7d65",
".git/objects/54/f26a6073ea8ee51589839cb1305d12c847f5b2": "a913a77668656e8703a9159af545d3fe",
".git/objects/5a/6412edcc35764aff57dea2dbc5c67044eddf98": "972a6e3677f2b6986c5c8fa007aeddc1",
".git/objects/5e/111e769f988a2ca0a9ceec34a1e6cbfdd8f599": "63c5c5cff40961f6ed795e04b9b4851d",
".git/objects/5f/bbb845a551d2ee0c7a47d693105c3abb5db010": "6207f669624eacd436d00d9b996c78bc",
".git/objects/66/04a96c683b3eb61b7ff07260fe228d09932de9": "a2c8285c0d9ecff4b0761d9afd8e2c3a",
".git/objects/6e/abf1c5050d561d2c2c3cf83f504d1b1af6b2de": "31be748563a606ebd4b263b7cb9936f7",
".git/objects/74/c577bac8c346750a3130e4cce4c793ef2226d3": "5229a545a8906187c015338037a0a754",
".git/objects/76/61d4d461b95b882fae02bbea27eb31edff279f": "ecac1e0dc5866e34d84a0e29db1931cf",
".git/objects/7a/c94a4eb2e036ae5d6a07ba7a7b10e1b0ff775f": "1f21272b45fd5d7ad077673941b666f0",
".git/objects/7c/00aa2ad9cd056abfaccaea1135e29a98206cb6": "280bdcee2118784f68546f226bfcff4c",
".git/objects/7c/8665c55b45c0823198c3880ef1af8e006f87d0": "0f3268e2e6dafc05591b2df1d63d652b",
".git/objects/7c/e252d30152aee72e2c3cb2a63e1779a1e1393d": "05f5dcd10ff9c551de0dab3ba00d4993",
".git/objects/7f/3d165cf8d4ef369e2427eca6bc370915174901": "88d9aab6503c284f76e2d4b3b33727a2",
".git/objects/82/260abfc4e236272863dada3cbc10397b5f2d0e": "f69bb964b617bfa4639e2a466c71cee7",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/990dd7b4dc8c4a03e7ac115620011b56cba46e": "159a1b616239fd62fe78adeec2e90417",
".git/objects/8f/aa3abf99e3a1efa3c6c02c3146612b62eec2a3": "0f82739a318c9c851b0e15fce9755bae",
".git/objects/93/e53023bdcce9fe1e01918de8126235dff4d040": "e74e872addfbc40a8fe6d65846cfdd03",
".git/objects/95/9e7d78a141deb1ffba9e9d88ce2574d1e31546": "01552b96b2ce5c8baeda4ebc25f1e319",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9c/002af5f2d8e883194ea77bfb7c1986ffc0872e": "e6a69c9415e349dc61ce033375a6cbe2",
".git/objects/9c/982a3266b61eb1b9db4c15387d49fd3a9dfa8b": "c80dc794a485b812601bdc1779e3e71b",
".git/objects/9d/be1c5a43e3e6925bfbd74706b62cd29dd9a13b": "5f644417258189726139ccce13d255f6",
".git/objects/9d/cd7a4dde2ee59227065173f6cda7b4204d9d7a": "9cc76c2f85ccd6549a74103d8738d79e",
".git/objects/9e/a4779b14e4d9459c93ed35d16314d3fc1b5579": "9ae38f2eae203ff0a028df09a1ceab33",
".git/objects/a2/c2ffb417bd8d2aa3be486b327382a1935211bc": "d573bd284b03fd6b3e9c2e24c31df939",
".git/objects/a3/86b5c4446319779813b965d5dccc14df3e05bb": "6b2e0d621883560344205ff545723d71",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/e48b3aa987574622d21c857532183e4d843fe2": "c461f8aca99d178b8c86f28b92c86f12",
".git/objects/ae/3f8e2cd224d4597c8f3a1f73c92325dd15328c": "2112ac8e7aa7352f6b92ffacede1f32f",
".git/objects/b6/205f01f13714a7169bc17bec4718b90a9e3037": "6f7a56b8bc380e7b9a47fcfb044348d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2527b5b54c1dc9b7ffa45db7657035cd08ea13": "d212427dd7f5ff13c0f430d375e4d60c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/3dad450d1a23bfc2cbfbcdbe0f371b5bc07338": "b4588da81e21b9cc835734295a63acf7",
".git/objects/c3/23e36b3dcc17a89043927c71889a35924d33d4": "320bd98b7e2c89c8137f41cad22698f4",
".git/objects/c8/e8e4c22a46f326f51142a9ea5dd87b5ad8d6c5": "77c06166f6811805e262d4d7e41fb3c3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c3e2595ab3a9f6595d69bfd4cd80cc0851de19": "dd0db4257746858bb686e449ac11c864",
".git/objects/de/23b3066c376904f24e6d8abcd1be95000ce58c": "eaa93805a08ea87947a25d36ea66709f",
".git/objects/e4/ffda3585a1d9aeabad11b8dcca7b03872812cb": "106f3ea911f9761fb22fc765ebb72d5e",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/895519562f9e3054fa8529b9fd806f3bfd6e11": "70286733b5ec81fc5087fd927289c32a",
".git/objects/ea/8d776a8c53c39532f1758f715ce48271e6883e": "43d201b4c641c28e56c681d6263ed0d2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a39080de4ce8dd3bb00f2fb8fa4d7227b24a18": "7e115c92ec1275268bf91b2c2b0e7fd2",
".git/objects/ef/e47050aaf93dcb7360812ca6d777a3a8e09207": "d034b31413cc001428ce5acaaa034e0d",
".git/objects/f2/75b9f90fb50ae34cb0575dca272cd50f61e4ad": "b2738f550bf8f8464a0d12b8e1128704",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "90ddd365f79f77441512b9b0da26010f",
".git/refs/heads/master": "90ddd365f79f77441512b9b0da26010f",
".git/refs/remotes/origin/main": "90ddd365f79f77441512b9b0da26010f",
"assets/AssetManifest.bin": "278db7e57c3aa8a2b99f42ba4319250c",
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
"index.html": "167cb7dc449195c4e03f457a4cb2f038",
"/": "167cb7dc449195c4e03f457a4cb2f038",
"main.dart.js": "a644addcbf7fc7301874eff9584297e8",
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
