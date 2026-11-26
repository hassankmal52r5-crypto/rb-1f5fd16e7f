const V="rb-v2",F=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-512-maskable.png", "p0.txt", "p1.txt", "p2.txt", "p3.txt", "p4.txt", "p5.txt", "p6.txt", "p7.txt", "p8.txt", "p9.txt"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).catch(()=>caches.match("index.html"))))});
