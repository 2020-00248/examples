var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-5f711968.system.js","./p-57a0589b.system.js","./p-6a603f00.system.js","./p-3256323e.system.js","./p-c142beaf.system.js"],function(t){"use strict";var e,n,r,i,o,a,s,c,u,l,d,f,h,p,b;return{setters:[function(t){e=t.r;n=t.f;r=t.c;i=t.h;o=t.H;a=t.d},function(){},function(t){s=t.g},function(t){c=t.B;u=t.j;l=t.e;d=t.f;f=t.h;h=t.i;p=t.s},function(t){b=t.c}],execute:function(){var m=function(t){var e=b();var n=b();var r=b();n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.4);r.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([n,r])};var v=function(t){var e=b();var n=b();var r=b();n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.4,0);r.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([n,r])};var y=function(t){var e=b();var n=b();var r=b();n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.32);r.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([n,r])};var g=function(t){var e=b();var n=b();var r=b();n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.32,0);r.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([n,r])};var w=t("ion_action_sheet",function(){function t(t){var i=this;e(this,t);this.presented=false;this.mode=n(this);this.keyboardClose=true;this.buttons=[];this.backdropDismiss=true;this.translucent=false;this.animated=true;this.onBackdropTap=function(){i.dismiss(undefined,c)};this.dispatchCancelHandler=function(t){var e=t.detail.role;if(u(e)){var n=i.getButtons().find(function(t){return t.role==="cancel"});i.callButtonHandler(n)}};l(this.el);this.didPresent=r(this,"ionActionSheetDidPresent",7);this.willPresent=r(this,"ionActionSheetWillPresent",7);this.willDismiss=r(this,"ionActionSheetWillDismiss",7);this.didDismiss=r(this,"ionActionSheetDidDismiss",7)}t.prototype.present=function(){return d(this,"actionSheetEnter",m,y)};t.prototype.dismiss=function(t,e){return f(this,t,e,"actionSheetLeave",v,g)};t.prototype.onDidDismiss=function(){return h(this.el,"ionActionSheetDidDismiss")};t.prototype.onWillDismiss=function(){return h(this.el,"ionActionSheetWillDismiss")};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:e=t.role;if(u(e)){return[2,this.dismiss(undefined,e)]}return[4,this.callButtonHandler(t)];case 1:n=r.sent();if(n){return[2,this.dismiss(undefined,t.role)]}return[2,Promise.resolve()]}})})};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:if(!t)return[3,2];return[4,p(t.handler)];case 1:e=n.sent();if(e===false){return[2,false]}n.label=2;case 2:return[2,true]}})})};t.prototype.getButtons=function(){return this.buttons.map(function(t){return typeof t==="string"?{text:t}:t})};t.prototype.render=function(){var t;var e=this;var r=n(this);var a=this.getButtons();var c=a.find(function(t){return t.role==="cancel"});var u=a.filter(function(t){return t.role!=="cancel"});return i(o,{role:"dialog","aria-modal":"true",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign((t={},t[r]=true,t),s(this.cssClass)),{"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap},i("ion-backdrop",{tappable:this.backdropDismiss}),i("div",{class:"action-sheet-wrapper",role:"dialog"},i("div",{class:"action-sheet-container"},i("div",{class:"action-sheet-group"},this.header!==undefined&&i("div",{class:"action-sheet-title"},this.header,this.subHeader&&i("div",{class:"action-sheet-sub-title"},this.subHeader)),u.map(function(t){return i("button",{type:"button","ion-activatable":true,class:S(t),onClick:function(){return e.buttonClick(t)}},i("span",{class:"action-sheet-button-inner"},t.icon&&i("ion-icon",{icon:t.icon,lazy:false,class:"action-sheet-icon"}),t.text),r==="md"&&i("ion-ripple-effect",null))})),c&&i("div",{class:"action-sheet-group action-sheet-group-cancel"},i("button",{type:"button",class:S(c),onClick:function(){return e.buttonClick(c)}},i("span",{class:"action-sheet-button-inner"},c.icon&&i("ion-icon",{icon:c.icon,lazy:false,class:"action-sheet-icon"}),c.text))))))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".sc-ion-action-sheet-md-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-md{background:var(--background-selected)}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color,var(--ion-background-color,#fff));--background-selected:var(--background,);--background-activated:var(--background)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:16px;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;background:transparent;color:var(--color,var(--ion-color-step-850,#262626));font-size:16px;text-align:start;contain:strict;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}"},enumerable:true,configurable:true});return t}());var S=function(t){var e;return Object.assign((e={"action-sheet-button":true,"ion-activatable":true},e["action-sheet-"+t.role]=t.role!==undefined,e),s(t.cssClass))}}}});