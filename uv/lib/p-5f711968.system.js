var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function o(e){try{f(n.next(e))}catch(e){i(e)}}function s(e){try{f(n["throw"](e))}catch(e){i(e)}}function f(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(o,s)}f((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return f([e,t])}}function f(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="aleph";var a=0;var i=false;var o;var s;var f;var u=false;var l=false;var c=false;var $=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var m=function(){return!!d.documentElement.attachShadow}();var g=function(){var e=false;try{d.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(e){}return e}();var p=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y={};var b=new WeakMap;var w=function(e){return b.get(e)};var N=e("r",function(e,t){return b.set(t.$lazyInstance$=e,t)});var S=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return b.set(e,t)}};var R=function(e,t){return t in e};var E=function(e){return console.error(e)};var x=new Map;var _=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=typeof e.$lazyBundleIds$!=="string"?e.$lazyBundleIds$[r.$modeName$]:e.$lazyBundleIds$;var o=x.get(i);if(o){return o[a]}return t.import("./"+i+".entry.js"+"").then(function(e){{x.set(i,e)}return e[a]},E)};var j=new Map;var k=function(){return v.__stencil_cssshim}();var L=[];var C=[];var T=[];var O=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&h.$flags$&4){M(A)}else{h.raf(A)}}}};var I=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){E(e)}}e.length=0};var P=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){E(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var A=function(){a++;I(L);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;P(C,e);P(T,e);if(C.length>0){T.push.apply(T,C);C.length=0}if(i=L.length+C.length+T.length>0){h.raf(A)}else{a=0}};var M=function(e){return Promise.resolve().then(e)};var U=e("m",O(L,false));var B=e("w",O(C,true));var z={};var q="http://www.w3.org/2000/svg";var H=function(e){return e!=null};var W=function(e){return e.toLowerCase()};var V=function(e){e=typeof e;return e==="object"||e==="function"};var D=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var F=e("a",function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-dac3e2f0.system.js")}return Promise.resolve()});var G=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,a,i,o;return __generator(this,function(s){switch(s.label){case 0:e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find(function(e){return r.test(e.src)||e.getAttribute("data-namespace")===n});i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign({},i,{resourcesUrl:new URL(".",e).href})];case 1:o=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));J(o.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-bcae8885.system.js")];case 2:s.sent();s.label=3;case 3:return[2,Object.assign({},i,{resourcesUrl:o.href})]}})})});var J=function(e){var t=D(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(n){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var o=d.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise(function(e){o.onload=function(){e(v[t].m);o.remove()}});r.set(a,i);d.head.appendChild(o)}return i}}};var Q=function(e,t){if(e!=null&&!V(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var K="hydrated";var X="http://www.w3.org/1999/xlink";var Y=new WeakMap;var Z=function(e,t,r){var n=j.get(e);if(p&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}j.set(e,n)};var ee=function(e,t,r,n){var a=re(t.$tagName$,r);var i=j.get(a);e=e.nodeType===11?e:d;if(!i){a=re(t.$tagName$);i=j.get(a)}if(i){if(typeof i==="string"){e=e.head||e;var o=Y.get(e);var s=void 0;if(!o){Y.set(e,o=new Set)}if(!o.has(a)){{if(k){s=k.createHostStyle(n,a,i,!!(t.$flags$&10));var f=s["s-sc"];if(f){a=f;o=null}}else{s=d.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var te=function(e,t,r){var n=ee(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h");if(t.$flags$&2){e.classList.add(n+"-s")}}};var re=function(e,t){return"sc-"+(t?e+"-"+t:e)};var ne=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var s;var f;var u=[];var l=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!V(a)){a=String(a)}if(i&&o){u[u.length-1].$text$+=a}else{u.push(i?{$flags$:0,$text$:a}:a)}o=i}}};l(r);if(t){{s=t.key||undefined}{f=t.name}{var c=t.className||t.class;if(c){t.class=typeof c!=="object"?c:Object.keys(c).filter(function(e){return c[e]}).join(" ")}}}if(typeof e==="function"){return e(t,u,oe)}var $={$flags$:0,$tag$:e,$children$:u.length>0?u:null,$elm$:undefined,$attrs$:t};{$.$key$=s}{$.$name$=f}return $});var ae=e("H",{});var ie=function(e){return e&&e.$tag$===ae};var oe={forEach:function(e,t){return e.map(se).forEach(t)},map:function(e,t){return e.map(se).map(t).map(fe)}};var se=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var fe=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var ue=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"){var o=e.classList;le(r).forEach(function(e){return o.remove(e)});le(n).forEach(function(e){return o.add(e)})}else if(t==="style"){{for(var s in r){if(!n||n[s]==null){if(s.includes("-")){e.style.removeProperty(s)}else{e.style[s]=""}}}}for(var s in n){if(!r||n[s]!==r[s]){if(s.includes("-")){e.style.setProperty(s,n[s])}else{e.style[s]=n[s]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!R(e,t)){if(R(e,W(t))){t=W(t.substring(2))}else{t=W(t[2])+t.substring(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var f=R(e,t);var u=V(n);if((f||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var l=n==null?"":n;if(e[t]!==l){e[t]=l}}else{e[t]=n}}catch(e){}}var c=a&&t!==(t=t.replace(/^xlink\:?/,""))?true:false;if(n==null||n===false){if(c){e.removeAttributeNS(X,W(t))}else{e.removeAttribute(t)}}else if((!f||i&4||a)&&!u){n=n===true?"":n.toString();if(c){e.setAttributeNS(X,W(t),n)}else{e.setAttribute(t,n)}}}};var le=function(e){return!e?[]:e.split(/\s+/).filter(function(e){return e})};var ce=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||z;var o=t.$attrs$||z;{for(n in i){if(!(n in o)){ue(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){ue(a,n,i[n],o[n],r,t.$flags$)}};var $e=function(e,t,r,n){var a=t.$children$[r];var i=0;var l;var v;var h;if(!u){c=true;if(a.$tag$==="slot"){if(o){n.classList.add(o+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(H(a.$text$)){a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=d.createTextNode("")}else{l=a.$elm$=$||a.$tag$==="svg"?d.createElementNS(q,a.$tag$):d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{$=a.$tag$==="svg"?true:a.$tag$==="foreignObject"?false:$}{ce(null,a,$)}if(H(o)&&l["s-si"]!==o){l.classList.add(l["s-si"]=o)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=$e(e,a,i,l);if(v){l.appendChild(v)}}}{if(a.$tag$==="svg"){$=false}else if(a.$elm$.tagName==="foreignObject"){$=true}}}{a.$elm$["s-hn"]=f;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=s;a.$elm$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){ve(e.$elm$,false)}}}return a.$elm$};var ve=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==f&&a["s-ol"]){ye(a).insertBefore(a,pe(a));a["s-ol"].remove();a["s-ol"]=undefined;c=true}if(t){ve(a,t)}}h.$flags$&=~1};var de=function(e,t,r,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var s;if(o.shadowRoot&&W(o.tagName)===f){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){s=$e(null,r,a,e);if(s){n[a].$elm$=s;o.insertBefore(s,pe(t))}}}};var he=function(e,t,r,n){for(;t<=r;++t){if(H(e[t])){n=e[t].$elm$;Re(e[t],true);{l=true;if(n["s-ol"]){n["s-ol"].remove()}else{ve(n,true)}}n.remove()}}};var me=function(e,t,r,n){var a=0;var i=0;var o=0;var s=0;var f=t.length-1;var u=t[0];var l=t[f];var c=n.length-1;var $=n[0];var v=n[c];var d;var h;while(a<=f&&i<=c){if(u==null){u=t[++a]}else if(l==null){l=t[--f]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(ge(u,$)){be(u,$);u=t[++a];$=n[++i]}else if(ge(l,v)){be(l,v);l=t[--f];v=n[--c]}else if(ge(u,v)){if(u.$tag$==="slot"||v.$tag$==="slot"){ve(u.$elm$.parentNode,false)}be(u,v);e.insertBefore(u.$elm$,l.$elm$.nextSibling);u=t[++a];v=n[--c]}else if(ge(l,$)){if(u.$tag$==="slot"||v.$tag$==="slot"){ve(l.$elm$.parentNode,false)}be(l,$);e.insertBefore(l.$elm$,u.$elm$);l=t[--f];$=n[++i]}else{o=-1;{for(s=a;s<=f;++s){if(t[s]&&H(t[s].$key$)&&t[s].$key$===$.$key$){o=s;break}}}if(o>=0){h=t[o];if(h.$tag$!==$.$tag$){d=$e(t&&t[i],r,o,e)}else{be(h,$);t[o]=undefined;d=h.$elm$}$=n[++i]}else{d=$e(t&&t[i],r,i,e);$=n[++i]}if(d){{ye(u.$elm$).insertBefore(d,pe(u.$elm$))}}}}if(a>f){de(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){he(t,a,f)}};var ge=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var pe=function(e){return e&&e["s-ol"]||e};var ye=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var be=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;{$=r&&H(r.parentNode)&&r.ownerSVGElement!==undefined;$=t.$tag$==="svg"?true:t.$tag$==="foreignObject"?false:$}if(!H(t.$text$)){{if(t.$tag$==="slot");else{ce(e,t,$)}}if(H(n)&&H(a)){me(r,n,t,a)}else if(H(a)){if(H(e.$text$)){r.textContent=""}de(r,null,t,a,0,a.length-1)}else if(H(n)){he(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}if($&&t.$tag$==="svg"){$=false}};var we=function(e,t,r,n,a,i,o,s){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){o=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){s=r[i].nodeType;if(o!==""){if(s===1&&o===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(s===1||s===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}we(t)}}};var Ne=[];var Se=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var o;var s;var f;var u;for(r=t.length;n<r;n++){o=t[n];if(o["s-sr"]&&(s=o["s-cr"])){f=s.parentNode.childNodes;u=o["s-sn"];for(a=f.length-1;a>=0;a--){s=f[a];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==o["s-hn"]){i=s.nodeType;if((i===3||i===8)&&u===""||i===1&&s.getAttribute("slot")===null&&u===""||i===1&&s.getAttribute("slot")===u){if(!Ne.some(function(e){return e.$nodeToRelocate$===s})){l=true;s["s-sn"]=u;Ne.push({$slotRefNode$:o,$nodeToRelocate$:s})}}}}}if(o.nodeType===1){Se(o)}}};var Re=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){Re(e,t)})}};var Ee=function(e,t,r,n){f=W(e.tagName);var a=t.$vnode$||{$flags$:0};var i=ie(n)?n:ne(null,null,n);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.forEach(function(t){var r=t[0],n=t[1];return i.$attrs$[n]=e[r]})}i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{o=e["s-sc"]}{s=e["s-cr"];u=m&&(r.$flags$&1)!==0;c=l=false}be(a,i);{if(c){Se(i.$elm$);for(var $=0;$<Ne.length;$++){var v=Ne[$];if(!v.$nodeToRelocate$["s-ol"]){var g=d.createTextNode("");g["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=g,v.$nodeToRelocate$)}}h.$flags$|=1;for(var $=0;$<Ne.length;$++){var v=Ne[$];var p=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var g=v.$nodeToRelocate$["s-ol"];while(g=g.previousSibling){var b=g["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&p!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){p.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if(l){we(i.$elm$)}Ne.length=0}};var xe=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i=function(){return _e(e,t,r,a,n)};var o;if(n){{t.$flags$|=256}if(t.$queuedListeners$){t.$queuedListeners$.forEach(function(e){var t=e[0],r=e[1];return Ce(a,t,r)});t.$queuedListeners$=null}{o=Ce(a,"componentWillLoad")}}{o=Te(o,function(){return Ce(a,"componentWillRender")})}return Te(o,function(){return B(i)})};var _e=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){te(e,r,t.$modeName$)}{{t.$flags$|=4;try{Ee(e,t,r,n.render&&n.render())}catch(e){E(e)}t.$flags$&=~4}}if(k){k.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}je(e,t)};var je=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(K)}{Ce(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){Le()}}else{{Ce(n,"componentDidUpdate")}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var ke=function(e,t){{var r=w(e);if(r.$flags$&2){xe(e,r,t,false)}}};var Le=function(){{d.documentElement.classList.add(K)}{h.$flags$|=2}};var Ce=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){E(e)}}return undefined};var Te=function(e,t){return e&&e.then?e.then(t):t()};var Oe=function(e,t){return w(e).$instanceValues$.get(t)};var Ie=function(e,t,r,n){var a=w(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(t);var s=a.$flags$;r=Q(r,n.$members$[t][0]);if(r!==o&&(!(s&8)||o===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if(n.$watchers$&&s&128){var f=n.$watchers$[t];if(f){f.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,r,o,t)}catch(e){E(e)}})}}if((s&(4|2|16))===2){xe(i,a,n,false)}}}};var Pe=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Oe(this,n)},set:function(e){Ie(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=w(this);return r.$onReadyPromise$.then(function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)})}})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp(function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r})};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a})}}return e};var Ae=function(e,t,r){t.$queuedListeners$=t.$queuedListeners$||[];var n=r.map(function(r){var n=r[0],a=r[1],i=r[2];var o=Ue(e,n);var s=Me(t,i);var f=Be(n);h.ael(o,a,s,f);return function(){return h.rel(o,a,s,f)}});return function(){return n.forEach(function(e){return e()})}};var Me=function(e,t){return function(r){{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{e.$queuedListeners$.push([t,r])}}}};var Ue=function(e,t){if(t&4)return d;if(t&8)return v;if(t&32)return d.body;if(t&16)return e.parentElement;return e};var Be=function(e){return g?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var ze=[];var qe=function(e){return ze.map(function(t){return t(e)}).find(function(e){return!!e})};var He=function(e){return ze.push(e)};var We=e("l",function(e){return w(e).$modeName$});var Ve=function(e,n,a,i,o){return __awaiter(r,void 0,void 0,function(){var r,i,s,f;return __generator(this,function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;if(n.$modeName$==null){n.$modeName$=typeof a.$lazyBundleIds$!=="string"?qe(e):""}o=_(a,n);if(!o.then)return[3,2];return[4,o];case 1:o=u.sent();u.label=2;case 2:if(!o.isProxied){{a.$watchers$=o.watchers}Pe(o,a,2);o.isProxied=true}{n.$flags$|=8}try{new o(n)}catch(e){E(e)}{n.$flags$&=~8}{n.$flags$|=128}De(n.$lazyInstance$);r=re(a.$tagName$,n.$modeName$);if(!(!j.has(r)&&o.style))return[3,5];i=o.style;if(typeof i!=="string"){i=i[n.$modeName$]}if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-8b2adfa7.system.js").then(function(e){return e.scopeCss(i,r,false)})];case 3:i=u.sent();u.label=4;case 4:Z(r,i,!!(a.$flags$&1));u.label=5;case 5:s=n.$ancestorComponent$;f=function(){return xe(e,n,a,true)};if(s&&s["s-lr"]===false&&s["s-rc"]){s["s-rc"].push(f)}else{f()}return[2]}})})};var De=function(e){{Ce(e,"connectedCallback")}};var Fe=function(e,t){if((h.$flags$&1)===0){var r=w(e);if(t.$listeners$){r.$rmListeners$=Ae(e,r,t.$listeners$)}if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Ge(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&a["s-lr"]===false){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{M(function(){return Ve(e,r,t)})}}De(r.$lazyInstance$)}};var Ge=function(e,t){t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Je=function(e){if((h.$flags$&1)===0){var t=w(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$();t.$rmListeners$=undefined}}if(k){k.removeHost(e)}{Ce(r,"disconnectedCallback")}{Ce(r,"componentDidUnload")}}};var Qe=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=d.head;var i=v.customElements;var o=a.querySelector("meta[charset]");var s=d.createElement("style");var f;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){h.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$attrsToReflect$=[]}{a.$watchers$={}}if(!m&&a.$flags$&1){a.$flags$|=8}var o=a.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}S(t);if(a.$flags$&1){if(m){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}h.jmp(function(){return Fe(e,a)})};t.prototype.disconnectedCallback=function(){var e=this;h.jmp(function(){return Je(e)})};t.prototype["s-init"]=function(){var e=w(this);if(e.$lazyInstance$){je(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){ke(this,a)};t.prototype.componentOnReady=function(){return w(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(o)&&!i.get(o)){r.push(o);i.define(o,Pe(s,a,1))}})});s.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";s.setAttribute("data-styles","");a.insertBefore(s,o?o.nextSibling:a.firstChild);h.jmp(function(){return f=setTimeout(Le,30)})});var Ke=e("c",function(e,t,r){var n=Ze(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}});var Xe=e("k",function(e){var t=new URL(e,h.$resourcesUrl$);return t.origin!==v.location.origin?t.href:t.pathname});var Ye=e("e",function(e,t){if(t in y){return y[t]}else if(t==="window"){return v}else if(t==="document"){return d}else if(t==="isServer"||t==="isPrerender"){return false}else if(t==="isClient"){return true}else if(t==="resourcesUrl"||t==="publicPath"){return Xe(".")}else if(t==="queue"){return{write:B,read:U,tick:{then:function(e){return M(e)}}}}return undefined});var Ze=e("d",function(e){return w(e).$hostElement$});var et=function(){y.store=function(){var e;var t=function(t){e=t};var r=function(){return e&&e.getState()};var n=function(){return e};var a=function(t,r){Object.keys(r).forEach(function(n){var a=r[n];Object.defineProperty(t,n,{get:function(){return function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}return e.dispatch(a.apply(void 0,t))}},configurable:true,enumerable:true})})};var i=function(t,r){var n=function(n,a){var i=r(e.getState());Object.keys(i).forEach(function(e){var r=i[e];t[e]=r})};var a=e.subscribe(function(){return n()});n();return a};return{getStore:n,setStore:t,getState:r,mapDispatchToProps:a,mapStateToProps:i}}()};var tt=function(e){return nt(e)};var rt=e("j",function(e,t){if(typeof e==="string"){t=e;e=undefined}return tt(e).includes(t)});var nt=function(e){if(e===void 0){e=window}e.Ionic=e.Ionic||{};var t=e.Ionic.platforms;if(t==null){t=e.Ionic.platforms=at(e);t.forEach(function(t){return e.document.documentElement.classList.add("plt-"+t)})}return t};var at=function(e){return Object.keys(Nt).filter(function(t){return Nt[t](e)})};var it=function(e){return vt(e)&&!ht(e)};var ot=function(e){if(bt(e,/iPad/i)){return true}if(bt(e,/Macintosh/i)&&vt(e)){return true}return false};var st=function(e){return bt(e,/iPhone/i)};var ft=function(e){return bt(e,/iPhone|iPod/i)||ot(e)};var ut=function(e){return bt(e,/android|sink/i)};var lt=function(e){return ut(e)&&!bt(e,/mobile/i)};var ct=function(e){var t=e.innerWidth;var r=e.innerHeight;var n=Math.min(t,r);var a=Math.max(t,r);return n>390&&n<520&&(a>620&&a<800)};var $t=function(e){var t=e.innerWidth;var r=e.innerHeight;var n=Math.min(t,r);var a=Math.max(t,r);return ot(e)||lt(e)||n>460&&n<820&&(a>780&&a<1400)};var vt=function(e){return wt(e,"(any-pointer:coarse)")};var dt=function(e){return!vt(e)};var ht=function(e){return mt(e)||gt(e)};var mt=function(e){return!!(e["cordova"]||e["phonegap"]||e["PhoneGap"])};var gt=function(e){var t=e["Capacitor"];return!!(t&&t.isNative)};var pt=function(e){return bt(e,/electron/i)};var yt=function(e){return!!(e.matchMedia("(display-mode: standalone)").matches||e.navigator.standalone)};var bt=function(e,t){return t.test(e.navigator.userAgent)};var wt=function(e,t){return e.matchMedia(t).matches};var Nt={ipad:ot,iphone:st,ios:ft,android:ut,phablet:ct,tablet:$t,cordova:mt,capacitor:gt,electron:pt,pwa:yt,mobile:vt,mobileweb:it,desktop:dt,hybrid:ht};var St=function(){function e(){this.m=new Map}e.prototype.reset=function(e){this.m=new Map(Object.entries(e))};e.prototype.get=function(e,t){var r=this.m.get(e);return r!==undefined?r:t};e.prototype.getBoolean=function(e,t){if(t===void 0){t=false}var r=this.m.get(e);if(r===undefined){return t}if(typeof r==="string"){return r==="true"}return!!r};e.prototype.getNumber=function(e,t){var r=parseFloat(this.m.get(e));return isNaN(r)?t!==undefined?t:NaN:r};e.prototype.set=function(e,t){this.m.set(e,t)};return e}();var Rt=e("i",new St);var Et=function(e){try{var t=e.sessionStorage.getItem(Lt);return t!==null?JSON.parse(t):{}}catch(e){return{}}};var xt=function(e,t){try{e.sessionStorage.setItem(Lt,JSON.stringify(t))}catch(e){return}};var _t=function(e){var t={};e.location.search.slice(1).split("&").map(function(e){return e.split("=")}).map(function(e){var t=e[0],r=e[1];return[decodeURIComponent(t),decodeURIComponent(r)]}).filter(function(e){var t=e[0];return jt(t,kt)}).map(function(e){var t=e[0],r=e[1];return[t.slice(kt.length),r]}).forEach(function(e){var r=e[0],n=e[1];t[r]=n});return t};var jt=function(e,t){return e.substr(0,t.length)===t};var kt="ionic:";var Lt="ionic-persist-config";var Ct;var Tt=e("f",function(e){return e&&We(e)||Ct});var Ot=function(){var e=document;var t=window;y.config=Rt;var r=t.Ionic=t.Ionic||{};nt(t);var n=Object.assign(Object.assign(Object.assign(Object.assign({},Et(t)),{persistConfig:false}),r.config),_t(t));Rt.reset(n);if(Rt.getBoolean("persistConfig")){xt(t,n)}r.config=Rt;r.mode=Ct=Rt.get("mode",e.documentElement.getAttribute("mode")||(rt(t,"ios")?"ios":"md"));Rt.set("mode",Ct);e.documentElement.setAttribute("mode",Ct);e.documentElement.classList.add(Ct);if(Rt.getBoolean("_testing")){Rt.set("animated",false)}He(function(e){return e.mode=e.mode||e.getAttribute("mode")||Ct})};var It=function(){He(function(e){return e.tagName==="ION-ICON"?e.mode||e.getAttribute("mode"):null})};var Pt=function(){et();Ot();It()};e("g",Pt)}}});