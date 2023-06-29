'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "794960e966d3516717d37a606fbf6655",
"assets/assets/background.jpg": "52dfea309263baa262b90c32a5db8c50",
"assets/assets/background.png": "4e874c765a0bfc54acf3c19a1c705b81",
"assets/assets/bag_1.png": "b28f3fddf670f9f33dc0fbe685439516",
"assets/assets/bag_10.png": "bd65b1d92b1f02b297748a82ac31dfec",
"assets/assets/bag_2.png": "a9d1f4df6a8ccd9c473b4b3b6059b95d",
"assets/assets/bag_3.png": "aea5b87c1fcd220a5d3d2d2627803e62",
"assets/assets/bag_4.png": "a0b2ac4057d489391e71fc176ef6b1a5",
"assets/assets/bag_5.png": "c2313ed18420a12bf160e7002d407a9f",
"assets/assets/bag_6.png": "c87d93c60e3f457b76bc80851089297b",
"assets/assets/bag_7.png": "e3aef3b140af1abe120adac515c4444e",
"assets/assets/bag_8.png": "3f1577b8b5a545071a24d87fb6c332aa",
"assets/assets/bag_9.png": "14c188978b4c6145ca3f92f75b4e27b8",
"assets/assets/bottom_yellow.png": "cb862b7bfac0db50b9ef6cc0781b2606",
"assets/assets/box.png": "b142fe275cbdf1523025ceaba4355100",
"assets/assets/cap_1.png": "78df6acb8771793fa4d5e2a4e3e10f66",
"assets/assets/cap_10.png": "109ebe91831f7fc5832e90c151b12f8d",
"assets/assets/cap_2.png": "62003c6ed05757e4a896289f9add3574",
"assets/assets/cap_3.png": "9e29119bde7186ba69278f53929e125b",
"assets/assets/cap_4.png": "7334f905bd67d389d9bc9e3cb5f07f8b",
"assets/assets/cap_5.png": "4b2e9dbf66c194c9937d5d79f083aa11",
"assets/assets/cap_6.png": "0d2e43042d7d9ae9b8b9d9eeac6de6eb",
"assets/assets/cap_7.png": "6e27350e269622b4c274fb48c446346e",
"assets/assets/cap_8.png": "7f98e7727ae2e6e7b9d2ec24df845968",
"assets/assets/cap_9.png": "ccbf1cedf3720d45dec6e52b361aeb5d",
"assets/assets/firstScreen.png": "c2527bdadd7e36342c066e2ceaf08bd5",
"assets/assets/Group%2520444.png": "8ed5bfe37741053d9b6b47f5f082140f",
"assets/assets/Hamburger-menu.png": "ccd3246c20c636b83aaf01df2c51899d",
"assets/assets/headphones.png": "d1dbe67e4015613c8ce7c9783f78dc04",
"assets/assets/headphones_2.png": "35f4033166ac9bf9e482d9cf544ce99d",
"assets/assets/headphones_3.png": "79330d1cb373f70f58af098ad01136c2",
"assets/assets/headphones_4.png": "29ab512355e0b92deb505326372f8cae",
"assets/assets/headphone_10.png": "aa75ae52cf4967a6701a08b75f93015f",
"assets/assets/headphone_11.png": "856db608b77bc0f117dc89a2ab56bd0c",
"assets/assets/headphone_12.png": "3922dab5fe3f05bad639ed753121a0ab",
"assets/assets/headphone_13.png": "e218b551e2132a8bb039e7faf1df3c2e",
"assets/assets/headphone_14.png": "b9a1d40587f4cf9b57aaa65aac646a79",
"assets/assets/headphone_5.png": "1439c1d8aca4838b1fe8b9f33b3a415a",
"assets/assets/headphone_6.png": "273bab15652f96f97a9136279cebab34",
"assets/assets/headphone_7.png": "c4ec6822047ebe3e7b8a3e66ebd6d97e",
"assets/assets/headphone_8.png": "40ba518d2bcbc27147a5c5fc2934eee8",
"assets/assets/headphone_9.png": "07c6098f024742100a97d054c16deff3",
"assets/assets/home.png": "2a413e713384308744856dfc17186b41",
"assets/assets/icons/10%2520usd.png": "e75b11052957117a546561ac2db467bc",
"assets/assets/icons/5%2520usd.png": "cd12f5eb7b31d1584f028d9a44efac59",
"assets/assets/icons/about_us.png": "cf6b7b77b9f65829f0842e33781f5cf2",
"assets/assets/icons/address_home.png": "2407083aaa4c91aff12331524944f245",
"assets/assets/icons/address_work.png": "a9ce2d6215a9b06b74c7c8341f732de3",
"assets/assets/icons/card.png": "930f092ed158842899c09064e06d7205",
"assets/assets/icons/cart_icon.svg": "713cd4a6cee495c8d622c9f4209c2afe",
"assets/assets/icons/category_icon.png": "27c80e559a1d656dba8d2cb5d7c52ae1",
"assets/assets/icons/category_icon.svg": "c63922bd638efc0c3e3ee1a8c0be03b9",
"assets/assets/icons/change_pass.png": "cb232504461538343ea3eb49e4a57983",
"assets/assets/icons/comment.png": "5b51faaa28262b7fa7131fe05353adb3",
"assets/assets/icons/contact_us.png": "a2f52507c25b657de308b99b3fe224b4",
"assets/assets/icons/country.png": "617a6499a5c575aa48fcc51f0d00f3b1",
"assets/assets/icons/cut_qr.png": "25df7625505659dc0fd7c839ac28baf3",
"assets/assets/icons/denied_wallet.png": "c58b107648ebdf9d392d120d3a891bdc",
"assets/assets/icons/faq.png": "8f14ac68759b1854a8ee955d911ceaa5",
"assets/assets/icons/home.png": "3c31ff080f6170f11e74526628a8d304",
"assets/assets/icons/home_icon.svg": "3a2929c6102efff30cfe8adeb15270cf",
"assets/assets/icons/language.png": "d5d834765a7d32fd0ca7ab18881938fe",
"assets/assets/icons/legal.png": "bb0e4b908a8467eb92550a1dc7386f9a",
"assets/assets/icons/list.png": "27c80e559a1d656dba8d2cb5d7c52ae1",
"assets/assets/icons/Logos.png": "fdf061a4bb2c9e04c2d7d2f270abecc2",
"assets/assets/icons/notifications.png": "52f2ec1dc6661847645122905d0c8adb",
"assets/assets/icons/package.png": "abfe9ad8bf2d3e71392aa52ea7613b56",
"assets/assets/icons/profile.png": "9958a298e3d30a300cf66aaadbe106d0",
"assets/assets/icons/profile_icon.png": "9958a298e3d30a300cf66aaadbe106d0",
"assets/assets/icons/profile_icon.svg": "c1c87cc0b284bd15d00ec6d52f9f00d3",
"assets/assets/icons/QR_code.png": "3cf880650edd50068db82f07f79de161",
"assets/assets/icons/reload_icon.png": "413b6fc7d36d276f71e13dec4ce0a6d7",
"assets/assets/icons/reload_icon.svg": "db3915edd53d38cafb33e31cfc7a9e70",
"assets/assets/icons/search_icon.svg": "b3f1a6c21c94e65ee935749e4a8059ce",
"assets/assets/icons/settings.png": "c57d55d53a8345bf244c7dd3acbfa83d",
"assets/assets/icons/settings_icon.png": "da4b691736138c6da13f19e9060c1143",
"assets/assets/icons/settings_icon.svg": "ba21c9d1e1495bdbfcfd839774743444",
"assets/assets/icons/shopeLogo.png": "4377d43f275620441494efcc4c89ea4d",
"assets/assets/icons/sign_out.png": "3790a5ec87ab1d91a1aeeac24471a737",
"assets/assets/icons/support.png": "3c4dd1f11cbe87953111243867b42ffb",
"assets/assets/icons/timer.png": "413b6fc7d36d276f71e13dec4ce0a6d7",
"assets/assets/icons/truck.png": "0ec8def3dea85020c840cd13cc45bbb2",
"assets/assets/icons/wallet.png": "866f4e509e9a95fcb117c1353fc4f408",
"assets/assets/jeans_1.png": "7cc41af2feeafd22641cdaeec2d438d8",
"assets/assets/jeans_10.png": "0ca28e147ee446c3af846e5974e0b657",
"assets/assets/jeans_2.png": "9ecf1028450b056de434b4b89ec2c74c",
"assets/assets/jeans_3.png": "395ad3acd5e8df4c05edcb81b2633a59",
"assets/assets/jeans_4.png": "0449edb8a8d763c313dd9a4db17df953",
"assets/assets/jeans_5.png": "11fb0ea51cf6667bc10c6378418aecfd",
"assets/assets/jeans_6.png": "6a82295b3ee242d1e8941c14d157f54e",
"assets/assets/jeans_7.png": "abd5cea07df25dc783b105bd5b7c13e0",
"assets/assets/jeans_8.png": "1bc82227b81e8efe8df80450655342b2",
"assets/assets/jeans_9.png": "460353c14ccdcc674818db4f48fea2df",
"assets/assets/list.png": "14e4e161f98645ac34a114399212b30a",
"assets/assets/logo.png": "8f3b0c0cabc8832e024cd96d91d7ca95",
"assets/assets/profile.png": "7f72d87871fb93d519f4675835abe734",
"assets/assets/red_clear.png": "dc1c8b845ae1b7b498d1c8f0d58ecefd",
"assets/assets/ring_1.png": "d8d17a94921ff3005e65257a29aae5c6",
"assets/assets/ring_10.png": "f5558e2a964f00c8cd5e22a5b811ed19",
"assets/assets/ring_2.png": "b9aff9a517196fd01ae989c966559c8d",
"assets/assets/ring_3.png": "29410e45e6122ab2bedb84a76356c2dc",
"assets/assets/ring_4.png": "b1c6eb1a54a50adfb9acfd7956f35faf",
"assets/assets/ring_5.png": "09ff28a5cd7d4e07d30f11b97b6a28ce",
"assets/assets/ring_6.png": "87cfc7a217cf27c4729a2c146cbbbe6b",
"assets/assets/ring_7.png": "1007e10ac7c2701d96942ddee2d7f825",
"assets/assets/ring_8.png": "40c3be94b3360b8909f9bf82affcbbd0",
"assets/assets/ring_9.png": "1b80295b252407ea198c4d3e9ae4b6bb",
"assets/assets/Search.png": "61fd6a1dae4fcccda77b9880a3f54de2",
"assets/assets/secondScreen.png": "536e65030294830a90dcdd9f1c6b65f7",
"assets/assets/shoeman_1.png": "b8af2c374b1c60b6147af8256dec4fb3",
"assets/assets/shoeman_10.png": "7889367af2734fda7d00022248ee176f",
"assets/assets/shoeman_2.png": "ddf6a7e76a9ca83beba5abd97d736cbb",
"assets/assets/shoeman_3.png": "e4480f6000370a2304b2e721b6e51d50",
"assets/assets/shoeman_4.png": "dca6d822825ff0e2518290654a87dbac",
"assets/assets/shoeman_5.png": "43be0e68e9bf0b3c0ad41a74c46023d9",
"assets/assets/shoeman_6.png": "514981263a3e6bcb77048f9bad173bdb",
"assets/assets/shoeman_7.png": "4073833224e30ef745c6ea9befb9417b",
"assets/assets/shoeman_8.png": "b0f9278cf846d74b8c87d6bc5d18dc13",
"assets/assets/shoeman_9.png": "9a3a93fd3ed1a71b4ef8e38641246789",
"assets/assets/thirdScreen.png": "987f50e01efa2a98bf759c6001c7404c",
"assets/assets/womanshoe_1.png": "ce9cf556ec28cee7cdc2656c644123b4",
"assets/assets/womanshoe_10.png": "fd3ed3a1e221cf0b48367818a7b1fdf3",
"assets/assets/womanshoe_2.png": "c8d60424046075c7a5debf551976d194",
"assets/assets/womanshoe_3.png": "2c95de04d6576b7996809dca5285abab",
"assets/assets/womanshoe_4.png": "993589c54d7df8cc3fb1a11b4e853f81",
"assets/assets/womanshoe_5.png": "f6f57e6a413ec97f6cf724a3c04f36aa",
"assets/assets/womanshoe_6.png": "8d849214def7cb7c2d2c0cf422b3fc93",
"assets/assets/womanshoe_7.png": "ac5fb2d6e57ffff4c52c8ab41015c574",
"assets/assets/womanshoe_8.png": "bb9e11934a27d79d7a34346d2758227d",
"assets/assets/womanshoe_9.png": "8449796960f2a4c768831208b82df224",
"assets/FontManifest.json": "443f000e269a0691f2e1508c14c412ed",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/fonts/NunitoSans-Regular.ttf": "621913f3c27d99ba45817a39036b7cf4",
"assets/NOTICES": "e83caf2d2b39f61fbd312818c0a7122f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5d1c46453e708aa37a648c5edab9a618",
"/": "5d1c46453e708aa37a648c5edab9a618",
"main.dart.js": "a1a0eb58b4b51524da08feb320ebc02d",
"manifest.json": "655a8e78170ecabde7e920e6e30b396c",
"version.json": "6262d49206dcdbc97b004fbc421df097"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
