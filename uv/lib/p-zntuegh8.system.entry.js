System.register(["./p-5f711968.system.js","./p-57a0589b.system.js","./p-6a603f00.system.js"],function(e){"use strict";var r,s,t,a,n,i,o;return{setters:[function(e){r=e.r;s=e.i;t=e.f;a=e.h;n=e.H},function(e){i=e.c},function(e){o=e.c}],execute:function(){var u=e("ion_progress_bar",function(){function e(e){r(this,e);this.type="determinate";this.reversed=false;this.value=0;this.buffer=1}e.prototype.render=function(){var e;var r=this,i=r.color,u=r.type,f=r.reversed,v=r.value,p=r.buffer;var d=s.getBoolean("_testing");var b=t(this);return a(n,{role:"progressbar","aria-valuenow":u==="determinate"?v:null,"aria-valuemin":"0","aria-valuemax":"1",class:Object.assign(Object.assign({},o(i)),(e={},e[b]=true,e["progress-bar-"+u]=true,e["progress-paused"]=d,e["progress-bar-reversed"]=document.dir==="rtl"?!f:f,e))},u==="indeterminate"?c():l(v,p))};Object.defineProperty(e,"style",{get:function(){return":host{--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.2);--progress-background:var(--ion-color-primary,#3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}:host(.ion-color){--progress-background:var(--ion-color-base);--buffer-background:rgba(var(--ion-color-base-rgb),0.2)}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.buffer-circles,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress,.progress-buffer-bar,.progress-buffer-bar:before,.progress-indeterminate{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s linear;transition:-webkit-transform .15s linear;transition:transform .15s linear;transition:transform .15s linear,-webkit-transform .15s linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:#fff;z-index:1}.progress-buffer-bar:before{background:var(--buffer-background);content:\"\"}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s linear infinite;animation:primary-indeterminate-translate 2s linear infinite}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s linear infinite;animation:primary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s linear infinite;animation:secondary-indeterminate-translate 2s linear infinite}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s linear infinite;animation:secondary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background:radial-gradient(ellipse at center,var(--buffer-background) 0,var(--buffer-background) 30%,transparent 0) repeat-x 5px;background-size:10px 10px;z-index:0;-webkit-animation:buffering .45s linear infinite;animation:buffering .45s linear infinite}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{-webkit-transform-origin:right top;transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .buffer-circles,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .indeterminate-bar-secondary{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}\@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}\@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}to{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}\@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}to{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}\@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}\@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:3px}"},enumerable:true,configurable:true});return e}());var c=function(){return[a("div",{class:"indeterminate-bar-primary"},a("span",{class:"progress-indeterminate"})),a("div",{class:"indeterminate-bar-secondary"},a("span",{class:"progress-indeterminate"}))]};var l=function(e,r){var s=i(0,e,1);var t=i(0,r,1);return[a("div",{class:"progress",style:{transform:"scaleX("+s+")"}}),t!==1&&a("div",{class:"buffer-circles"}),a("div",{class:"progress-buffer-bar",style:{transform:"scaleX("+t+")"}})]}}}});