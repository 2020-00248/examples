var __awaiter=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))(function(n,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function l(t){try{a(r["throw"](t))}catch(t){o(t)}}function a(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(s,l)}a((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,n,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(t){return function(e){return a([t,e])}}function a(s){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,n&&(o=s[0]&2?n["return"]:s[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;if(n=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;n=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(s[0]===6&&i.label<o[1]){i.label=o[1];o=s;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(s);break}if(o[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t];n=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-5f711968.system.js"],function(t){"use strict";var e,i,r,n,o,s,l,a;return{setters:[function(t){e=t.r;i=t.c;r=t.w;n=t.m;o=t.f;s=t.h;l=t.d;a=t.H}],execute:function(){var c=t("ion_infinite_scroll",function(){function t(t){var r=this;e(this,t);this.thrPx=0;this.thrPc=0;this.didFire=false;this.isBusy=false;this.isLoading=false;this.threshold="15%";this.disabled=false;this.position="bottom";this.onScroll=function(){var t=r.scrollEl;if(!t||!r.canStart()){return 1}var e=r.el.offsetHeight;if(e===0){return 2}var i=t.scrollTop;var n=t.scrollHeight;var o=t.offsetHeight;var s=r.thrPc!==0?o*r.thrPc:r.thrPx;var l=r.position==="bottom"?n-e-i-s-o:i-e-s;if(l<0){if(!r.didFire){r.isLoading=true;r.didFire=true;r.ionInfinite.emit();return 3}}else{r.didFire=false}return 4};this.ionInfinite=i(this,"ionInfinite",7)}t.prototype.thresholdChanged=function(){var t=this.threshold;if(t.lastIndexOf("%")>-1){this.thrPx=0;this.thrPc=parseFloat(t)/100}else{this.thrPx=parseFloat(t);this.thrPc=0}};t.prototype.disabledChanged=function(){var t=this.disabled;if(t){this.isLoading=false;this.isBusy=false}this.enableScrollEvents(!t)};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,function(){var t,e;var i=this;return __generator(this,function(n){switch(n.label){case 0:t=this.el.closest("ion-content");if(!t){console.error("<ion-infinite-scroll> must be used inside an <ion-content>");return[2]}e=this;return[4,t.getScrollElement()];case 1:e.scrollEl=n.sent();this.thresholdChanged();this.disabledChanged();if(this.position==="top"){r(function(){if(i.scrollEl){i.scrollEl.scrollTop=i.scrollEl.scrollHeight-i.scrollEl.clientHeight}})}return[2]}})})};t.prototype.disconnectedCallback=function(){this.enableScrollEvents(false);this.scrollEl=undefined};t.prototype.complete=function(){return __awaiter(this,void 0,void 0,function(){var t,e;var i=this;return __generator(this,function(o){t=this.scrollEl;if(!this.isLoading||!t){return[2]}this.isLoading=false;if(this.position==="top"){this.isBusy=true;e=t.scrollHeight-t.scrollTop;requestAnimationFrame(function(){n(function(){var n=t.scrollHeight;var o=n-e;requestAnimationFrame(function(){r(function(){t.scrollTop=o;i.isBusy=false})})})})}return[2]})})};t.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading};t.prototype.enableScrollEvents=function(t){if(this.scrollEl){if(t){this.scrollEl.addEventListener("scroll",this.onScroll)}else{this.scrollEl.removeEventListener("scroll",this.onScroll)}}};t.prototype.render=function(){var t;var e=o(this);var i=this.disabled;return s(a,{class:(t={},t[e]=true,t["infinite-scroll-loading"]=this.isLoading,t["infinite-scroll-enabled"]=!i,t)})};Object.defineProperty(t.prototype,"el",{get:function(){return l(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:true,configurable:true});return t}())}}});