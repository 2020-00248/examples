System.register(["./p-5f711968.system.js","./p-6a603f00.system.js"],function(t){"use strict";var e,n,i,r,u,a,s;return{setters:[function(t){e=t.r;n=t.i;i=t.f;r=t.h;u=t.H;a=t.d},function(t){s=t.h}],execute:function(){var o=t("ion_skeleton_text",function(){function t(t){e(this,t);this.animated=false}t.prototype.calculateWidth=function(){if(this.width!==undefined){return{style:{width:this.width}}}return};t.prototype.render=function(){var t;var e=this.animated&&n.getBoolean("animated",true);var a=s("ion-avatar",this.el)||s("ion-thumbnail",this.el);var o=i(this);return r(u,Object.assign({class:(t={},t[o]=true,t["skeleton-text-animated"]=e,t["in-media"]=a,t)},this.calculateWidth()),r("span",null," "))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--background:rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),0.065);border-radius:var(--border-radius,inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}span{display:inline-block}:host(.in-media){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}:host(.skeleton-text-animated){position:relative;background:-webkit-gradient(linear,left top,right top,color-stop(8%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065)),color-stop(18%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.135)),color-stop(33%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065)));background:linear-gradient(90deg,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065) 8%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.135) 18%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065) 33%);background-size:800px 104px;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:shimmer;animation-name:shimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear}\@-webkit-keyframes shimmer{0%{background-position:-468px 0}to{background-position:468px 0}}\@keyframes shimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"},enumerable:true,configurable:true});return t}())}}});