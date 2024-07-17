var Z=Object.defineProperty;var z=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var I=(e,t,n)=>z(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function x(){}function J(e){return e()}function U(){return Object.create(null)}function C(e){e.forEach(J)}function Q(e){return typeof e=="function"}function ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function te(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function P(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function B(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function O(){return R(" ")}function ne(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function S(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}function ce(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let F;function A(e){F=e}const v=[],T=[];let w=[];const V=[],oe=Promise.resolve();let H=!1;function ie(){H||(H=!0,oe.then(X))}function M(e){w.push(e)}const j=new Set;let y=0;function X(){if(y!==0)return;const e=F;do{try{for(;y<v.length;){const t=v[y];y++,A(t),fe(t.$$)}}catch(t){throw v.length=0,y=0,t}for(A(null),v.length=0,y=0;T.length;)T.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];j.has(n)||(j.add(n),n())}w.length=0}while(v.length);for(;V.length;)V.pop()();H=!1,j.clear(),A(e)}function fe(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function ue(e){const t=[],n=[];w.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),w=t}const se=new Set;function de(e,t){e&&e.i&&(se.delete(e),e.i(t))}function k(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ae(e,t,n){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),M(()=>{const c=e.$$.on_mount.map(J).filter(Q);e.$$.on_destroy?e.$$.on_destroy.push(...c):C(c),e.$$.on_mount=[]}),r.forEach(M)}function he(e,t){const n=e.$$;n.fragment!==null&&(ue(n.after_update),C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(v.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,l,r,c,d=null,a=[-1]){const f=F;A(e);const o=e.$$={fragment:null,ctx:[],props:c,update:x,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:U(),dirty:a,skip_bound:!1,root:t.target||f.$$.root};d&&d(o.root);let g=!1;if(o.ctx=n?n(e,t.props||{},(i,$,...E)=>{const m=E.length?E[0]:$;return o.ctx&&r(o.ctx[i],o.ctx[i]=m)&&(!o.skip_bound&&o.bound[i]&&o.bound[i](m),g&&_e(e,i)),$}):[],o.update(),g=!0,C(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){const i=le(t.target);o.fragment&&o.fragment.l(i),i.forEach(L)}else o.fragment&&o.fragment.c();t.intro&&de(e.$$.fragment),ae(e,t.target,t.anchor),X()}A(f)}class pe{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){he(this,1),this.$destroy=x}$on(t,n){if(!Q(n))return x;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const me="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(me);function W(e,t,n){const l=e.slice();return l[5]=t[n],l[7]=n,l}function q(e,t,n){const l=e.slice();return l[8]=t[n],l[10]=n,l}function $e(e,t,n){const l=e.slice();return l[11]=t[n],l[7]=n,l}function be(e){let t;return{c(){t=p("th"),t.textContent=`${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e[7]]}`},m(n,l){P(n,t,l)},p:x,d(n){n&&L(t)}}}function D(e){let t,n=e[8]+"",l;return{c(){t=p("td"),l=R(n),S(t,"contenteditable","true")},m(r,c){P(r,t,c),_(t,l)},p(r,c){c&1&&n!==(n=r[8]+"")&&ce(l,n)},d(r){r&&L(t)}}}function G(e){let t,n,l=e[5].id+"",r,c,d,a=k(e[5].cells),f=[];for(let o=0;o<a.length;o+=1)f[o]=D(q(e,a,o));return{c(){t=p("tr"),n=p("th"),r=R(l),c=O();for(let o=0;o<f.length;o+=1)f[o].c();d=O()},m(o,g){P(o,t,g),_(t,n),_(n,r),_(t,c);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(t,null);_(t,d)},p(o,g){if(g&1&&l!==(l=o[5].id+"")&&re(r,l),g&1){a=k(o[5].cells);let i;for(i=0;i<a.length;i+=1){const $=q(o,a,i);f[i]?f[i].p($,g):(f[i]=D($),f[i].c(),f[i].m(t,d))}for(;i<f.length;i+=1)f[i].d(1);f.length=a.length}},d(o){o&&L(t),B(f,o)}}}function ye(e){let t,n,l,r,c,d,a,f,o,g,i,$,E=k(Array(Y)),m=[];for(let u=0;u<E.length;u+=1)m[u]=be($e(e,E,u));let b=k(e[0]),h=[];for(let u=0;u<b.length;u+=1)h[u]=G(W(e,b,u));return{c(){t=p("div"),n=p("div"),l=p("h1"),l.textContent="Web Spreadsheet",r=O(),c=p("div"),d=p("table"),a=p("tr"),f=p("th"),o=O();for(let u=0;u<m.length;u+=1)m[u].c();g=O();for(let u=0;u<h.length;u+=1)h[u].c();S(c,"id","spreadsheet"),S(n,"class","container"),S(t,"id","wrapper")},m(u,N){P(u,t,N),_(t,n),_(n,l),_(n,r),_(n,c),_(c,d),_(d,a),_(a,f),_(a,o);for(let s=0;s<m.length;s+=1)m[s]&&m[s].m(a,null);_(d,g);for(let s=0;s<h.length;s+=1)h[s]&&h[s].m(d,null);e[3](c),i||($=ne(c,"scroll",e[2]),i=!0)},p(u,[N]){if(N&1){b=k(u[0]);let s;for(s=0;s<b.length;s+=1){const K=W(u,b,s);h[s]?h[s].p(K,N):(h[s]=G(K),h[s].c(),h[s].m(d,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=b.length}},i:x,o:x,d(u){u&&L(t),B(m,u),B(h,u),e[3](null),i=!1,$()}}}let Y=26;function ve(e,t,n){let l=[];function r(){n(0,l=[...l,{id:l.length+1,cells:Array(Y).fill("")}])}let c;function d(){c.scrollHeight-c.scrollTop>c.clientHeight-50&&r()}for(let f=0;f<50;f++)r();function a(f){T[f?"unshift":"push"](()=>{c=f,n(1,c)})}return[l,c,d,a]}class we extends pe{constructor(t){super(),ge(this,t,ve,ye,ee,{})}}new we({target:document.getElementById("app")});