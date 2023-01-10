(()=>{const t="kmarBlogCache",e="https://id.v3/";self.addEventListener("install",(()=>self.skipWaiting()));const n={happyking:{clean:!0,match:t=>"blog.happyking.top"===t.hostname&&t.pathname.match(/\.(woff2|woff|ttf|cur|js|css|png|mp3|svg|webp)$/)},page:{clean:!0,match:t=>"blog.happyking.top"===t.hostname&&t.pathname.match(/\/$/)},fonts:{clean:!0,match:t=>"www.happyking.top"===t.hostname&&t.pathname.match(/\.(woff2|woff)$/)}},s={jsd:{source:["//cdn.jsdelivr.net"],dist:"//cdn1.tianli0.top"}};self.addEventListener("fetch",(e=>{const n=e.request;if("GET"!==n.method)return;const o=function(t){let e=!1;for(let n in s){const a=s[n];for(let n of a.source)t.url.match(n)&&(t.url=t.url.replace(n,a.dist),e=!0)}return e}(n),c=new URL(n.url);if(r(c)){const s=`${c.protocol}//${c.host}${c.pathname}`;e.respondWith(caches.match(s).then((e=>e||a(n).then((e=>{if(e.ok){const n=e.clone();caches.open(t).then((t=>t.put(s,n)))}return e})))))}else o&&e.respondWith(fetch(n))})),self.addEventListener("message",(n=>{"update"===n.data&&function(){const n=(t,e,n)=>{for(let s of e){const{version:e,change:a}=s;if(e===n)return!1;if(a)for(let e of a)t.push(new c(e))}return!0},s=s=>{const a={write:n=>caches.open(t).then((t=>t.put(e,new Response(JSON.stringify(n))))),read:()=>caches.match(e).then((t=>t?.json()))};let r=new o;return a.read().then((t=>{const{info:e,global:o}=s,h=0,i={global:o,local:e[0].version,escape:h};if(!t)return a.write(i),i;let l=0!==h&&h!==t.escape||n(r,e,t.local);return a.write(i),l&&(o===t.global?r.clean(new c({flag:"all"})):r.refresh=!0),{list:r,version:i}}))};return a("/update.json").then((n=>{if(n.ok||301===n.status||302===n.status)return n.json().then((n=>s(n).then((n=>{return n.list?(s=n.list,caches.open(t).then((t=>t.keys().then((n=>Promise.all(n.map((async n=>{const a=n.url;return a!==e&&s.match(a)?(t.delete(n),a):null}))))).then((t=>t.filter((t=>t))))))).then((t=>({list:t,version:n.version}))):{version:n};var s}))));throw`加载 update.json 时遇到异常，状态码：${n.status}`}))}().then((t=>n.source.postMessage({type:"update",update:t.list,version:t.version})))}));const a=t=>fetch(t,{cache:"no-store"});function r(t){for(let e in n){const s=n[e];if(s.match(t))return s}return null}function o(){const t=[];this.push=e=>{t.push(e)},this.clean=e=>{t.length=0,e||this.push(e)},this.match=e=>{for(let n of t)if(n.match(e))return!0;return!1}}function c(t){const e=t=>{const e=r(new URL(t));return!e||e.clean},n=e=>{const n=t.value;if(Array.isArray(n)){for(let t of n)if(e(t))return!0;return!1}return e(n)};switch(t.flag){case"all":this.match=e;break;case"html":this.match=t=>t.match(/(\/|\/index\.html)$/);break;case"page":this.match=t=>n((e=>t.endsWith(`/${e}/`)||t.endsWith(`/${e}/index.html`)));break;case"file":this.match=t=>n((e=>t.endsWith(e)));break;case"str":this.match=t=>n((e=>t.includes(e)));break;case"reg":this.match=t=>n((e=>t.match(new RegExp(e,"i"))));break;default:throw`未知表达式：${JSON.stringify(t)}`}}})();