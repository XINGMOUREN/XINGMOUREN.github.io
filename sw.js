(()=>{const t="kmarBlogCache",e="https://id.v3/";self.addEventListener("install",(()=>self.skipWaiting()));const n={happyking:{clean:!0,match:t=>"blog.happyking.top"===t.hostname&&t.pathname.match(/\.(woff2|woff|ttf|cur|js|css|png|mp3|svg|webp|jpg|jpeg|html)$/)},page:{clean:!0,match:t=>"blog.happyking.top"===t.hostname&&t.pathname.match(/\/$/)},tianli:{clean:!0,match:t=>"cdn1.tianli0.top"===t.hostname&&t.pathname.match(/\.(js|css|png|svg|webp|jpg|jpeg)$/)}};self.addEventListener("fetch",(e=>{const n=e.request;if("GET"!==n.method)return;const r=(t=>{const e=t.url,n="//cdn.jsdelivr.net";if(e.includes(n))return t.url=e.replace(n,"//cdn1.tianli0.top"),!0})(n),c=new URL(n.url);if(a(c)){const a=`${c.protocol}//${c.host}${c.pathname}`;e.respondWith(caches.match(a).then((e=>e||s(n).then((e=>{if(e.ok){const n=e.clone();caches.open(t).then((t=>t.put(a,n)))}return e})))))}else r&&e.respondWith(fetch(n))})),self.addEventListener("message",(n=>{"update"===n.data&&function(){const n=(t,e,n)=>{for(let s of e){const{version:e,change:a}=s;if(e===n)return!1;if(a)for(let e of a)t.push(new c(e))}return!0},a=s=>{const a={write:n=>caches.open(t).then((t=>t.put(e,new Response(JSON.stringify(n))))),read:()=>caches.match(e).then((t=>t?.json()))};let h=new r;return a.read().then((t=>{const{info:e,global:r}=s,o=0,i={global:r,local:e[0].version,escape:o};if(!t)return a.write(i),i;let l=0!==o&&o!==t.escape||n(h,e,t.local);return a.write(i),l&&(r===t.global?h.clean(new c({flag:"all"})):h.refresh=!0),{list:h,version:i}}))};return s("/update.json").then((n=>{if(n.ok||301===n.status||302===n.status)return n.json().then((n=>a(n).then((n=>{return n.list?(s=n.list,caches.open(t).then((t=>t.keys().then((n=>Promise.all(n.map((async n=>{const a=n.url;return a!==e&&s.match(a)?(t.delete(n),a):null}))))).then((t=>t.filter((t=>t))))))).then((t=>({list:t,version:n.version}))):{version:n};var s}))));throw`加载 update.json 时遇到异常，状态码：${n.status}`}))}().then((t=>n.source.postMessage({type:"update",update:t.list,version:t.version})))}));const s=t=>fetch(t,{cache:"no-store"});function a(t){for(let e in n){const s=n[e];if(s.match(t))return s}return null}function r(){const t=[];this.push=e=>{t.push(e)},this.clean=e=>{t.length=0,e||this.push(e)},this.match=e=>{for(let n of t)if(n.match(e))return!0;return!1}}function c(t){const e=t=>{const e=a(new URL(t));return!e||e.clean},n=e=>{const n=t.value;if(Array.isArray(n)){for(let t of n)if(e(t))return!0;return!1}return e(n)};switch(t.flag){case"all":this.match=e;break;case"html":this.match=t=>t.match(/(\/|\/index\.html)$/);break;case"page":this.match=t=>n((e=>t.endsWith(`/${e}/`)||t.endsWith(`/${e}/index.html`)));break;case"file":this.match=t=>n((e=>t.endsWith(e)));break;case"str":this.match=t=>n((e=>t.includes(e)));break;case"reg":this.match=t=>n((e=>t.match(new RegExp(e,"i"))));break;default:throw`未知表达式：${JSON.stringify(t)}`}}})();