System.register([],function(t){"use strict";return{execute:function(){var e="ion-focused";var n="ion-focusable";var r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"];var o=t("startFocusVisible",function(){var t=[];var o=true;var i=document;var s=function(n){t.forEach(function(t){return t.classList.remove(e)});n.forEach(function(t){return t.classList.add(e)});t=n};var a=function(){o=false;s([])};i.addEventListener("keydown",function(t){o=r.includes(t.key);if(!o){s([])}});i.addEventListener("focusin",function(t){if(o&&t.composedPath){var e=t.composedPath().filter(function(t){if(t.classList){return t.classList.contains(n)}return false});s(e)}});i.addEventListener("focusout",function(){if(i.activeElement===i.body){s([])}});i.addEventListener("touchstart",a);i.addEventListener("mousedown",a)})}}});