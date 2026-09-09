import{$ as PH,$t as ct,Bn as mE,Bt as _g,Ct as Vw,Dn as jg,En as je$1,Fn as lg,N as JD,O as HC,Pt as Yy,Rt as _C,S as Fw,Tt as W,Un as mf,V as L$1,Wn as mg,Yn as nr,Zn as oe,a as $t,an as ee,ar as rC,at as Rg,bt as VC,cn as fg,en as de,et as Pw,f as Cg,fn as g,g as De$1,gr as vw,h as D,hn as gg,k as HE,kt as Ww,ln as fo,lr as sl,lt as Ss,mn as gf,mr as vg,nn as dl,p as Co,qn as nC,rt as Qw,u as Bw,w as G,yr as yg}from"./chunk-B7uNhEpy.js";import{n as L$2}from"./chunk-BStsfNVW.js";import{D as ne,b as ge,d as Pr,f as Ta,i as Ga,t as $a,u as Or,w as ll}from"./chunk-D9yItzDz.js";import{a as We,c as jt,i as T,r as I,s as Zt,t as F,u as st}from"./chunk-FCTeNQ4X.js";var ze=[{value:`ecru_1013`,viewValue:`Ecru 1013`},{value:`beige_1019`,viewValue:`Beige 1019`},{value:`grey_7040`,viewValue:`Grey 7040`},{value:`anthracite_7016`,viewValue:`Anthracite 7016`},{value:`brown_8017`,viewValue:`Brown 8017`},{value:`black_9005`,viewValue:`Black 9005`},{value:`white_9016`,viewValue:`White 9016`},{value:`other`,viewValue:`other_color`}];function Ee(a,i){if(a&1){let e=Ww();Ss(0,`div`,1)(1,`button`,2),Cg(`click`,function(){gf(e);return mf(Qw().action())}),_C(2),sl()()}if(a&2){let e=Qw();HE(2),dl(` `,e.data.action,` `)}}var Me=[`label`];function De(a,i){}var Pe=Math.pow(2,31)-1;var C=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee;_afterOpened=new ee;_onAction=new ee;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Pe))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var xe=new D(`MatSnackBarData`);var v=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Re=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=$t({type:a,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return a})();var Te=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=$t({type:a,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return a})();var Ie=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=$t({type:a,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return a})();var Oe=(()=>{class a{snackBarRef=g(C);data=g(xe);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||a)};static ɵcmp=vw({type:a,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(t,n){t&1&&(Ss(0,`div`,0),_C(1),sl(),Fw(2,Ee,3,1,`div`,1)),t&2&&(HE(),dl(` `,n.data.message,`
`),HE(),Pw(n.hasAction?2:-1))},dependencies:[Ta,Re,Te,Ie],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return a})();var j=`_mat-snack-bar-enter`;var L=`_mat-snack-bar-exit`;var Ne=(()=>{class a extends T{_ngZone=g(W);_elementRef=g(je$1);_changeDetectorRef=g(Co);_platform=g(L$2);_animationsDisabled=ge();snackBarConfig=g(v);_document=g(G);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=g(de);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ee;_onExit=new ee;_onEnter=new ee;_animationState=`void`;_live;_label;_role;_liveElementId=g(ne).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===L?this._completeExit():e===j&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?mE(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(j)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(j)},200)))}exit(){return this._destroyed?ct(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?mE(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(L)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(L),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,o=`mdc-snackbar__label`;n.classList.toggle(o,!n.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let o=t[n],r=o.getAttribute(`aria-owns`);this._trackedModals.add(o),r?r.indexOf(e)===-1&&o.setAttribute(`aria-owns`,r+` `+e):o.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let n=t.replace(this._liveElementId,``).trim();n.length>0?e.setAttribute(`aria-owns`,n):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),n=e.querySelector(`[aria-live]`);if(t&&n){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute(`aria-hidden`),n.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=vw({type:a,selectors:[[`mat-snack-bar-container`]],viewQuery:function(t,n){if(t&1&&_g(We,7)(Me,7),t&2){let o;nC(o=rC())&&(n._portalOutlet=o.first),nC(o=rC())&&(n._label=o.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(t,n){t&1&&Cg(`animationend`,function(r){return n.onAnimationEnd(r.animationName)})(`animationcancel`,function(r){return n.onAnimationEnd(r.animationName)}),t&2&&Rg(`mat-snack-bar-container-enter`,n._animationState===`visible`)(`mat-snack-bar-container-exit`,n._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!n._animationsDisabled)},features:[lg],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&(Ss(0,`div`,1)(1,`div`,2,0)(3,`div`,3),fg(4,De,0,0,`ng-template`,4),sl(),yg(5,`div`),sl()()),t&2&&(HE(5),gg(`aria-live`,n._live)(`role`,n._role)(`id`,n._liveElementId))},dependencies:[We],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return a})();var Ve=new D(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new v});var mt=(()=>{class a{_live=g(Pr);_injector=g(de);_breakpointObserver=g(Or);_parentSnackBar=g(a,{optional:!0,skipSelf:!0});_defaultConfig=g(Ve);_animationsDisabled=ge();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Oe;snackBarContainerComponent=Ne;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,n){let o=L$1(L$1({},this._defaultConfig),n);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=de.create({parent:n||this._injector,providers:[{provide:v,useValue:t}]}),r=new st(this.snackBarContainerComponent,t.viewContainerRef,o),c=e.attach(r);return c.instance.snackBarConfig=t,c.instance}_attach(e,t){let n=L$1(L$1(L$1({},new v),this._defaultConfig),t),o=this._createOverlay(n),r=this._attachSnackBarContainer(o,n),c=new C(r,o);if(e instanceof nr){let g=new F(e,null,{$implicit:n.data,snackBarRef:c});c.instance=r.attachTemplatePortal(g)}else{let Ae=new st(e,void 0,this._createInjector(n,c));c.instance=r.attachComponentPortal(Ae).instance}return this._breakpointObserver.observe(ll.HandsetPortrait).pipe(Yy(o.detachments())).subscribe(g=>{o.overlayElement.classList.toggle(this.handsetCssClass,g.matches)}),n.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(c,n),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new I;t.direction=e.direction;let n=jt(this._injector),o=e.direction===`rtl`,r=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!o||e.horizontalPosition===`end`&&o,c=!r&&e.horizontalPosition!==`center`;return r?n.left(`0`):c?n.right(`0`):n.centerHorizontally(),e.verticalPosition===`top`?n.top(`0`):n.bottom(`0`),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,Zt(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return de.create({parent:n||this._injector,providers:[{provide:C,useValue:t},{provide:xe,useValue:e.data}]})}static ɵfac=function(t){return new(t||a)};static ɵprov=oe({token:a,factory:a.ɵfac})}return a})();var Se=class a{elRef=g(je$1);svgPath=``;fabricColor=`#d5d4af`;fabricElement=null;abortController=null;ngAfterViewInit(){this.loadSvg()}ngOnChanges(i){i.svgPath&&!i.svgPath.firstChange&&this.loadSvg(),i.fabricColor&&this.fabricElement&&this.applyStyles()}ngOnDestroy(){this.abortController?.abort(),this.fabricElement=null}onResize(){this.applyStyles()}loadSvg(){this.svgPath&&(this.abortController?.abort(),this.abortController=new AbortController,fetch(this.svgPath,{signal:this.abortController.signal}).then(i=>i.text()).then(i=>{let e=this.elRef.nativeElement.querySelector(`.svg-container`);e&&(e.innerHTML=i,this.fabricElement=e.querySelector(`#fabric_path`),this.applyStyles())}).catch(i=>{i instanceof DOMException&&i.name===`AbortError`||console.error(`Failed to load SVG asset.`,i)}))}applyStyles(){this.fabricElement&&(this.fabricElement.style.fill=this.fabricColor);let i=this.elRef.nativeElement.querySelector(`#svg1`);if(!i)return;let e=window.innerWidth;i.style.backgroundColor=`white`,e<1175?(i.style.height=`195px`,i.style.width=`auto`,i.style.padding=`0`):e<1300?(i.style.width=`100%`,i.style.maxWidth=`350px`,i.style.height=`auto`,i.style.borderRadius=`6px`,i.style.padding=`32px`):(i.style.width=`100%`,i.style.maxWidth=`450px`,i.style.height=`auto`,i.style.borderRadius=`6px`,i.style.padding=`32px`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=vw({type:a,selectors:[[`app-svg-viewer`]],hostBindings:function(e,t){e&1&&Cg(`resize`,function(){return t.onResize()},JD)},inputs:{svgPath:`svgPath`,fabricColor:`fabricColor`},features:[fo],decls:2,vars:0,consts:[[`svgContainer`,``],[1,`svg-container`]],template:function(e,t){e&1&&vg(0,`div`,1,0)},styles:[`.svg-container[_ngcontent-%COMP%]{margin-bottom:24px}@media(min-width:1175px)and (max-width:1300px){.svg-container[_ngcontent-%COMP%]{max-width:414px}}@media(min-width:1300px){.svg-container[_ngcontent-%COMP%]{max-width:514px}}`],changeDetection:1})};var je=(a,i)=>i.value;function Le(a,i){if(a&1){let e=Ww();Ss(0,`mat-chip-option`,2),Cg(`selectionChange`,function(){let n=gf(e).$implicit;return mf(Qw().onPergolaColorChange(n))}),_C(1),VC(2,`translate`),sl()}if(a&2){let e=i.$implicit,t=Qw();mg(`selected`,t.selectedPergolaColor===e.value)(`selectable`,t.selectedPergolaColor!==e.value),HE(),dl(` `,HC(2,3,`pergola_colors.`+e.viewValue),` `)}}var we=class a{pergolaColorsList=[];selectedPergolaColor=`anthracite_7016`;pergolaColorChange=new De$1;onPergolaColorChange(i){this.pergolaColorChange.emit(i)}static ɵfac=function(e){return new(e||a)};static ɵcmp=vw({type:a,selectors:[[`app-pergola-color-chips`]],inputs:{pergolaColorsList:`pergolaColorsList`,selectedPergolaColor:`selectedPergolaColor`},outputs:{pergolaColorChange:`pergolaColorChange`},decls:7,vars:7,consts:[[1,`field`,3,`hideSingleSelectionIndicator`],[1,`color-chip`,3,`selected`,`selectable`],[1,`color-chip`,3,`selectionChange`,`selected`,`selectable`]],template:function(e,t){e&1&&(Ss(0,`h4`),_C(1),VC(2,`translate`),sl(),Ss(3,`mat-chip-listbox`,0),VC(4,`translate`),Vw(5,Le,3,5,`mat-chip-option`,1,je),sl()),e&2&&(HE(),jg(HC(2,3,`pergola_color`)),HE(2),mg(`hideSingleSelectionIndicator`,!0),gg(`aria-label`,HC(4,5,`pergola_color`)),HE(2),Bw(t.pergolaColorsList))},dependencies:[$a,Ga,PH],encapsulation:2})};export{ze as i,mt as n,we as r,Se as t};