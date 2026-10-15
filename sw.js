/* Registo de Jogos — PWA cache versionada */
const VERSION='v2.0.0';
const CACHE='registo-jogos-'+VERSION;
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)))});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('registo-jogos-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 if(req.mode==='navigate') {event.respondWith((async()=>{try{const resp=await fetch(req,{cache:'no-store'});if(resp.ok){const cache=await caches.open(CACHE);await cache.put('./index.html',resp.clone())}return resp}catch{return await caches.match('./index.html')||Response.error()}})());return}
 event.respondWith(caches.match(req).then(saved=>saved||fetch(req)));
});
