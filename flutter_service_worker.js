'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "4a27b426137a42ba2a3b56d8e63d2e96",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "9a161ec910d541adf076ab8e43cb19f1",
"assets/fonts/MaterialIcons-Regular.otf": "adda508ac94934d49ba517ad5b04490a",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"README.md": "22238f0ac7c864c9f9bfc8003a250300",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/refs/remotes/origin/main": "9356e762d803234ff87bb9620240a113",
".git/refs/heads/main": "9356e762d803234ff87bb9620240a113",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "00258c143a45b70239b63609af9792e5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/COMMIT_EDITMSG": "46db34578445af7accc03362408e4c2e",
".git/objects/48/29b80d82c7b5c8a620d2fda3ec81152877ccfa": "4ecabd8095aeefabddc2302658b99396",
".git/objects/e4/3f0b00488e3eff767ec809f96d8063b742cb52": "2e06afc30245b200a332ab95318080c3",
".git/objects/a4/7e7a0f39c3c506273306a68f25f378f0fab1e6": "9f75421b4111b81d44dfabcf853d83c6",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/bd/8c4b7fb3d3b2357f0c49af8ef9ab96fe402158": "9283434aa9c5ad484f670168b722a2c9",
".git/objects/8c/29599e33da50fab9549ca53dda661fe604f931": "ba35fb15f8333535a1843aaa4acd98a5",
".git/objects/5f/77929bbdb169b052f88610606581f610f64d7a": "1755b5a1ada0f79fd9eb99a7f1145c9b",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/2a/fa44565122a2d30532986244ecec1db8da89c2": "bc59cad8bd125e76821fd28469c7c1a9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/fc/267897b357a1bfee6cb13c46a2d003f3a9fe09": "24f94f24d0208d314c85eeb3903d38e3",
".git/objects/fc/ea17f439b210bd7d4eb665635b85fa3d418dac": "34f48c343e54251db1e7d278cb162c54",
".git/objects/ce/93d20fbd84f7d8508f7e255b010868fef32bfb": "220e1c7156e41d96366ecb4be4372877",
".git/objects/30/b21d16f4676f7e1ebffdb172ae3f5945304855": "9c585044e3a5c2c3b109ec8edf6b7552",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/77/8377321525d821d63119628f7c699b0406b01b": "cc9e938077372b9ee7b99b7607fc5b56",
".git/objects/80/e9537a3fe23664babd5b199ed8d6e323af812f": "d467d016736962cb40d5623a044eb496",
".git/objects/88/c632d2aba139ade18229e5889d4ea1058c857d": "d1fdda786de6bb9ebc80ad819f7f122c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ff/81eec1b0618c72642f8dce007b41bdf9c470ba": "64d482142aa3c0c2ecd82072fa3dbd53",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/74/842d938824d1139b11c17539551a4b080cb1e9": "90a7d47339c13084208e1eb9bb10c00a",
".git/objects/df/8fc292cecb8caa503603562c673231c5236fc6": "60d4c2a41d120d5dfb838c68e24f0300",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/68/6726108471ab331c5e3a133a8b57ec834acc4a": "aab016e6bbb7b596b3eba871cd034ade",
".git/objects/23/896051d9c0d7ebd7dcae84941043b216a07f5c": "3df1dd3ec0595b65e7661fe5f329d352",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/b6/c913cb67c52e22484b4cc4393c3cc95a4ac552": "431982e080a8d4cf2e6b844a0e64dbbe",
".git/objects/b0/eedcf4aba85c3f137f3ddabf69e8253b07be00": "7015c6d776ba5c99e3d002606b020574",
".git/objects/f3/2e28d4bf3cbd6c7041a6a8a03203291f13c934": "4c44b1d4443187915e73b3a46b692271",
".git/objects/1a/27c96ef5052cc3d85babf64d166ff259ce187a": "3d2bf49e102f78da23f75ded904f4c66",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ee/89fcc217ed97972ff15e9266cb400c8dc3ac55": "9f4751edcbee8de96b5ab207dcfbf57a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/60/e417d224784e44da6f12598ef0870965f67085": "f15e47e5f90e125c483a410ef0bc1385",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4a/cef1eeb499f318d731baf19c323903b7bd8735": "bfa692b92bca0013d9c35d3609434d10",
".git/objects/9e/1f78c4d4a37898226fd068051d069357f05b8e": "51b0c925a63f2bcc033d62d089c2d05f",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/7d/5b8520aa0a5e7895661648649bf3fea9bcfe6f": "635e987b0897eef75cfbecabd7d6f13c",
".git/objects/9d/57b5310a8cfaae24fb7bb7399fd792b1dbdc90": "5267d0f2a6b710bc0deb419688e5b5f7",
".git/objects/63/5caf65a0252677895ea1ffb061c97d5e7b17f4": "fb14a95bce6ae375b2cc088f31a68ac1",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/85d863103b0ee483381690b7157706ad6174f6": "e0fef8416bfc99ca9df6922c0e579ee5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/a3b491cb89fc6218a79e643deda045af074e27": "39b33b1826fca7a0ef2cac3111bf024f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/f68423c87823b4dc538f47451899b5ad9cc547": "eabe89c947c171b6d4e22ffa8bf18765",
".git/objects/a3/08652558d6797b6984b5e530a7b6748d20da7a": "f596ff3a0c1f3bc3acb58ef8aa2bbae2",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/86/2961e9bc2da96a216f941df009b7e622646593": "d8572b0b89d5390cb35d8be1b02a6c4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "e9e22888daf8f5406a6e2c8f0ed6201d",
".git/logs/refs/heads/main": "c33ac605a817cafd198209e602fd2605",
".git/logs/HEAD": "e9cc020fb11c4f448222b763827bd21a",
".git/index": "0dee5d452351a28eecde21ca775a5fc1",
"main.dart.js": "d1cce2a7f6f307f6f0dc5359a6c7c99e",
"manifest.json": "fe66e377d1756dd12db086143e4d4e7e",
"index.html": "b892675f20b2f7c3fcf65ca3cb712d53",
"/": "b892675f20b2f7c3fcf65ca3cb712d53",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8"};
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
