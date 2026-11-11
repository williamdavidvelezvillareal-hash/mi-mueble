// Guarda la app en el teléfono para que funcione sin internet.
const V="mueble-modular-1";
const A=["./","index.html","manifest.webmanifest","three.min.js","jspdf.umd.min.js","icon-192.png","icon-512.png","icon-maskable-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;
 if(r.mode==="navigate"){e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put("index.html",c));return res}).catch(()=>caches.match("index.html")));return}
 e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok&&(r.url.startsWith(self.location.origin)||r.url.includes("fonts.g"))){const c=res.clone();caches.open(V).then(x=>x.put(r,c))}return res}).catch(()=>m)))});
