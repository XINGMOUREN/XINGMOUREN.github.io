(()=>{const e="HappyKingBlogCache",t="https://id.v3/";self.addEventListener("install",(()=>self.skipWaiting()));const n={happyking:{clean:!0,match:e=>"blog.happyking.top"===e.hostname&&e.pathname.match(/\.(woff2|woff|ttf|cur|js|css|png|mp3|svg|webp|jpg|jpeg|html)$/)},page:{clean:!0,match:e=>"blog.happyking.top"===e.hostname&&e.pathname.match(/\/$/)},imm:{clean:!0,match:e=>"imm.happyking.top"===e.hostname&&e.pathname.match(/\.(png|webp|jpg|jpeg)$/)}};self.addEventListener("fetch",(t=>{const n=t.request;if("GET"!==n.method)return;const r=(e=>{const t=e.url,n="//cdn.jsdelivr.net/";if(t.includes(n))return e.url=t.replace(n,"//cdn1.tianli0.top/"),!0})(n),c=new URL(n.url);if(a(c)){const a=`${c.protocol}//${c.host}${c.pathname}`;t.respondWith(caches.match(a).then((t=>t||s(n).then((t=>{if(t.ok){const n=t.clone();caches.open(e).then((e=>e.put(a,n)))}return t})))))}else r&&t.respondWith(fetch(n))})),self.addEventListener("message",(n=>{"update"===n.data&&function(){const n=(e,t,n)=>{for(let s of t){const{version:t,change:a}=s;if(t===n)return!1;if(a)for(let t of a)e.push(new c(t))}return!0},a=s=>{const a={write:n=>caches.open(e).then((e=>e.put(t,new Response(JSON.stringify(n))))),read:()=>caches.match(t).then((e=>e?.json()))};let h=new r;return a.read().then((e=>{const{info:t,global:r}=s,o=0,i={global:r,local:t[0].version,escape:o};if(!e)return a.write(i),i;let l=0!==o&&o!==e.escape||n(h,t,e.local);return a.write(i),l&&(r===e.global?h.clean(new c({flag:"all"})):h.refresh=!0),{list:h,version:i}}))};return s("/update.json").then((n=>{if(n.ok||301===n.status||302===n.status)return n.json().then((n=>a(n).then((n=>{return n.list?(s=n.list,caches.open(e).then((e=>e.keys().then((n=>Promise.all(n.map((async n=>{const a=n.url;return a!==t&&s.match(a)?(e.delete(n),a):null}))))).then((e=>e.filter((e=>e))))))).then((e=>({list:e,version:n.version}))):{version:n};var s}))));throw`加载 update.json 时遇到异常，状态码：${n.status}`}))}().then((e=>n.source.postMessage({type:"update",update:e.list,version:e.version})))}));const s=e=>fetch(e,{cache:"no-store"});function a(e){for(let t in n){const s=n[t];if(s.match(e))return s}return null}function r(){const e=[];this.push=t=>{e.push(t)},this.clean=t=>{e.length=0,t||this.push(t)},this.match=t=>{for(let n of e)if(n.match(t))return!0;return!1}}function c(e){const t=e=>{const t=a(new URL(e));return!t||t.clean},n=t=>{const n=e.value;if(Array.isArray(n)){for(let e of n)if(t(e))return!0;return!1}return t(n)};switch(e.flag){case"all":this.match=t;break;case"html":this.match=e=>e.match(/(\/|\/index\.html)$/);break;case"page":this.match=e=>n((t=>e.endsWith(`/${t}/`)||e.endsWith(`/${t}/index.html`)));break;case"file":this.match=e=>n((t=>e.endsWith(t)));break;case"str":this.match=e=>n((t=>e.includes(t)));break;case"reg":this.match=e=>n((t=>e.match(new RegExp(t,"i"))));break;default:throw`未知表达式：${JSON.stringify(e)}`}}})();