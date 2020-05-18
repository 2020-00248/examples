import{r as t,f as i,c as s,i as e,h,H as n,d as o}from"./p-62ed6059.js";import{i as a,e as r,c as d}from"./p-c01667ee.js";import"./p-dce5c027.js";import{g as c,P as l}from"./p-287346e4.js";import{GESTURE_CONTROLLER as m}from"./p-14bae62d.js";import{m as u}from"./p-d860aff9.js";const p=class{constructor(e){t(this,e),this.lastOnEnd=0,this.blocker=m.createBlocker({disableScroll:!0}),this.mode=i(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=s(this,"ionWillOpen",7),this.ionWillClose=s(this,"ionWillClose",7),this.ionDidOpen=s(this,"ionDidOpen",7),this.ionDidClose=s(this,"ionDidClose",7),this.ionMenuChange=s(this,"ionMenuChange",7)}typeChanged(t,i){const s=this.contentEl;s&&(void 0!==i&&s.classList.remove(`menu-content-${i}`),s.classList.add(`menu-content-${t}`),s.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=a(this.side)}swipeGestureChanged(){this.updateState()}async connectedCallback(){void 0===this.type&&(this.type=e.get("menuType","ios"===this.mode?"reveal":"overlay"));const t=this.el.parentNode;void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="my-content"></ion-menu>\n  <div id="my-content">...</div>\n');const i=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");i&&i.tagName?(this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),u._register(this),this.gesture=(await __sc_import_aleph("./p-14bae62d.js")).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}async componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}disconnectedCallback(){this.blocker.destroy(),u._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,i=!0){return u._setOpen(this,t,i)}async _setOpen(t,i=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,i),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await u._createAnimation(this.type,this),e.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"))}async startAnimation(t,i){const s=!t,e=this.animation.direction(s?"reverse":"normal").easing(s?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)");i?await e.playAsync():e.playSync()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!u._getOpenSync()&&v(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):r(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void r(!1,"isAnimating has to be true");const i=b(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(i/this.width)}onEnd(t){if(!this.isAnimating||!this.animation)return void r(!1,"isAnimating has to be true");const i=this._isOpen,s=this.isEndSide,e=b(t.deltaX,i,s),h=this.width,n=e/h,o=t.velocityX,a=h/2,m=o>=0&&(o>.2||t.deltaX>a),u=o<=0&&(o<-.2||t.deltaX<-a),p=i?s?m:u:s?u:m;let v=!i&&p;i&&!p&&(v=!0),this.lastOnEnd=t.timeStamp;let g=p?.001:-.001;const w=n<=0?.01:n;g+=c(new l(0,0),new l(.4,0),new l(.6,1),new l(1,1),d(0,w,1)),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(v),{oneTimeCallback:!0}).progressEnd(p?1:0,g,300)}beforeAnimation(t){r(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(g),this.backdropEl&&this.backdropEl.classList.add(w),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){r(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(y),this.ionDidOpen.emit()):(this.el.classList.remove(g),this.contentEl&&this.contentEl.classList.remove(y),this.backdropEl&&this.backdropEl.classList.remove(w),this.animation&&this.animation.stop(),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||u._setActiveMenu(this),r(!this.isAnimating,"can not be animating")}forceClosing(){r(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").playSync(),this.afterAnimation(!1)}render(){const{isEndSide:t,type:i,disabled:s,mode:e,isPaneVisible:o}=this;return h(n,{role:"navigation",class:{[e]:!0,[`menu-type-${i}`]:!0,"menu-enabled":!s,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":o}},h("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},h("slot",null)),h("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}get el(){return o(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}static get style(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"}},b=(t,i,s)=>Math.max(0,i!==s?-t:t),v=(t,i,s,e)=>s?i>=t.innerWidth-e:i<=e,g="show-menu",w="show-backdrop",y="menu-content-open";export{p as ion_menu};