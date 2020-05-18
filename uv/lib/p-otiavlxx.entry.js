import{r as t,c as e,f as i,i as s,h as r,d as n}from"./p-62ed6059.js";import{e as o}from"./p-c01667ee.js";import{a}from"./p-8aba239f.js";import{g as h,P as c}from"./p-287346e4.js";import{l as d,t as u,s as v,L as l,a as m,b as w}from"./p-c9b09b14.js";const f=1,p=2,g=3;class b{constructor(t,e){this.component=t,this.params=e,this.state=f}async init(t){if(this.state=p,!this.element){const e=this.component;this.element=await a(this.delegate,t,e,["ion-page","ion-page-invisible"],this.params)}}_destroy(){o(this.state!==g,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=g}}const y=(t,e,i)=>{if(!t)return!1;if(t.component!==e)return!1;const s=t.params;if(s===i)return!0;if(!s&&!i)return!0;if(!s||!i)return!1;const r=Object.keys(s),n=Object.keys(i);if(r.length!==n.length)return!1;for(const t of r)if(s[t]!==i[t])return!1;return!0},C=(t,e)=>t?t instanceof b?t:new b(t,e):null,k=class{constructor(i){t(this,i),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=e(this,"ionNavWillLoad",7),this.ionNavWillChange=e(this,"ionNavWillChange",3),this.ionNavDidChange=e(this,"ionNavDidChange",3)}swipeGestureChanged(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const t=i(this);this.swipeGesture=s.getBoolean("swipeBackEnabled","ios"===t)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await __sc_import_aleph("./p-5ccee2ef.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}componentDidUnload(){for(const t of this.views)d(t.element,l),t._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(t,e,i,s){return this.queueTrns({insertStart:-1,insertViews:[{page:t,params:e}],opts:i},s)}insert(t,e,i,s,r){return this.queueTrns({insertStart:t,insertViews:[{page:e,params:i}],opts:s},r)}insertPages(t,e,i,s){return this.queueTrns({insertStart:t,insertViews:e,opts:i},s)}pop(t,e){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},e)}popTo(t,e,i){const s={removeStart:-1,removeCount:-1,opts:e};return"object"==typeof t&&t.component?(s.removeView=t,s.removeStart=1):"number"==typeof t&&(s.removeStart=t+1),this.queueTrns(s,i)}popToRoot(t,e){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},e)}removeIndex(t,e=1,i,s){return this.queueTrns({removeStart:t,removeCount:e,opts:i},s)}setRoot(t,e,i,s){return this.setPages([{page:t,params:e}],i,s)}setPages(t,e,i){return null==e&&(e={}),!0!==e.animated&&(e.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:e},i)}setRouteId(t,e,i){const s=this.getActiveSync();if(y(s,t,e))return Promise.resolve({changed:!1,element:s.element});let r;const n=new Promise(t=>r=t);let o;const a={updateURL:!1,viewIsReady:t=>{let e;const i=new Promise(t=>e=t);return r({changed:!0,element:t,markVisible:async()=>{e(),await o}}),i}};if("root"===i)o=this.setRoot(t,e,a);else{const s=this.views.find(i=>y(i,t,e));s?o=this.popTo(s,Object.assign(Object.assign({},a),{direction:"back"})):"forward"===i?o=this.push(t,e,a):"back"===i&&(o=this.setRoot(t,e,Object.assign(Object.assign({},a),{direction:"back",animated:!0})))}return n}async getRouteId(){const t=this.getActiveSync();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(t){return Promise.resolve(this.views[t])}canGoBack(t){return Promise.resolve(this.canGoBackSync(t))}getPrevious(t){return Promise.resolve(this.getPreviousSync(t))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const e=this.views,i=e.indexOf(t);return i>0?e[i-1]:void 0}queueTrns(t,e){if(this.isTransitioning&&null!=t.opts&&t.opts.skipIfBusy)return Promise.resolve(!1);const i=new Promise((e,i)=>{t.resolve=e,t.reject=i});return t.done=e,t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),i}success(t,e){if(this.destroyed)this.fireError("nav controller was destroyed",e);else if(e.done&&e.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),e.resolve(t.hasCompleted),!1!==e.opts.updateURL&&this.useRouter){const e=document.querySelector("ion-router");e&&e.navChanged("back"===t.direction?"back":"forward")}}failed(t,e){this.destroyed?this.fireError("nav controller was destroyed",e):(this.transInstr.length=0,this.fireError(t,e))}fireError(t,e){e.done&&e.done(!1,!1,t),e.reject&&!this.destroyed?e.reject(t):e.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const e=this.getActiveSync(),i=this.getEnteringView(t,e);if(!e&&!i)throw new Error("no views in the stack to be removed");i&&i.state===f&&await i.init(this.el),this.postViewInit(i,e,t);const s=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&i!==e?await this.transition(i,e,t):{hasCompleted:!0,requiresTransition:!1};this.success(s,t),this.ionNavDidChange.emit()}catch(e){this.failed(e,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){const e=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),void 0!==t.removeView){o(void 0!==t.removeStart,"removeView needs removeStart"),o(void 0!==t.removeCount,"removeView needs removeCount");const e=this.views.indexOf(t.removeView);if(e<0)throw new Error("removeView was not found");t.removeStart+=e}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=e-1),t.removeCount<0&&(t.removeCount=e-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===e),t.insertViews&&((t.insertStart<0||t.insertStart>e)&&(t.insertStart=e),t.enteringRequiresTransition=t.insertStart===e);const i=t.insertViews;if(!i)return;o(i.length>0,"length can not be zero");const s=(t=>t.map(t=>t instanceof b?t:"page"in t?C(t.page,t.params):C(t,void 0)).filter(t=>null!==t))(i);if(0===s.length)throw new Error("invalid views to insert");for(const e of s){e.delegate=t.opts.delegate;const i=e.nav;if(i&&i!==this)throw new Error("inserted view was already inserted");if(e.state===g)throw new Error("inserted view was already destroyed")}t.insertViews=s}getEnteringView(t,e){const i=t.insertViews;if(void 0!==i)return i[i.length-1];const s=t.removeStart;if(void 0!==s){const i=this.views,r=s+t.removeCount;for(let t=i.length-1;t>=0;t--){const n=i[t];if((t<s||t>=r)&&n!==e)return n}}}postViewInit(t,e,i){o(e||t,"Both leavingView and enteringView are null"),o(i.resolve,"resolve must be valid"),o(i.reject,"reject must be valid");const s=i.opts,r=i.insertViews,n=i.removeStart,a=i.removeCount;let h;if(void 0!==n&&void 0!==a){o(n>=0,"removeStart can not be negative"),o(a>=0,"removeCount can not be negative"),h=[];for(let i=0;i<a;i++){const s=this.views[i+n];s&&s!==t&&s!==e&&h.push(s)}s.direction=s.direction||"back"}const c=this.views.length+(void 0!==r?r.length:0)-(void 0!==a?a:0);if(o(c>=0,"final balance can not be negative"),0===c)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(r){let t=i.insertStart;for(const e of r)this.insertViewAt(e,t),t++;i.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(h&&h.length>0){for(const t of h)d(t.element,m),d(t.element,w),d(t.element,l);for(const t of h)this.destroyView(t)}}async transition(t,e,r){const n=r.opts,o=n.progressAnimation?t=>this.sbAni=t:void 0,a=i(this),h=t.element,c=e&&e.element,d=Object.assign({mode:a,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||n.animationBuilder||s.get("navAnimation"),progressCallback:o,animated:this.animated&&s.getBoolean("animated",!0),enteringEl:h,leavingEl:c},n),{hasCompleted:v}=await u(d);return this.transitionFinish(v,t,e,n)}transitionFinish(t,e,i,s){const r=t?e:i;return r&&this.cleanup(r),{hasCompleted:t,requiresTransition:!0,enteringView:e,leavingView:i,direction:s.direction}}insertViewAt(t,e){const i=this.views,s=i.indexOf(t);s>-1?(o(t.nav===this,"view is not part of the nav"),i.splice(e,0,i.splice(s,1)[0])):(o(!t.nav,"nav is used"),t.nav=this,i.splice(e,0,t))}removeView(t){o(t.state===p||t.state===g,"view state should be loaded or destroyed");const e=this.views,i=e.indexOf(t);o(i>-1,"view must be part of the stack"),i>=0&&e.splice(i,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const e=this.views,i=e.indexOf(t);for(let t=e.length-1;t>=0;t--){const s=e[t],r=s.element;t>i?(d(r,l),this.destroyView(s)):t<i&&v(r,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(t){this.sbAni&&this.sbAni.progressStep(t)}onEnd(t,e,i){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let s=t?-.001:.001;t?s+=h(new c(0,0),new c(.32,.72),new c(0,1),new c(1,1),e):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=h(new c(0,0),new c(1,0),new c(.68,.28),new c(1,1),e)),this.sbAni.progressEnd(t?1:0,s,i)}}render(){return r("slot",null)}get el(){return n(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}};export{k as ion_nav};