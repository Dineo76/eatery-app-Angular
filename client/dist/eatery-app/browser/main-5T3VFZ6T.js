import{A as Po,B as tr,C as ir,D as Fo,E as Ao,F as xe,G as Nt,H as zt,I as Bt,J as _t,K as U,L as Y,M as Ji,a as Xi,b as vo,c as ce,d as We,e as bo,f as yo,g as xo,h as Tt,i as me,j as ui,k as Zi,l as Jn,m as Co,n as Mo,o as wo,p as Ki,q as So,r as nt,s as ko,t as Do,u as ie,v as Eo,w as er,x as Oo,y as ne,z as ut}from"./chunk-XB56FBF6.js";import{$ as te,$a as s,$b as co,A as Ur,Aa as le,Ab as Be,B as Yr,Ba as H,Bb as Le,C as Yn,Ca as Ct,Cb as je,Da as Xn,Db as io,Eb as Q,Fb as no,G as $n,Ga as _,Gb as li,H as Qn,Ha as P,Hb as ro,Ia as b,Ib as di,J as Oe,Ja as $,K as gt,Ka as de,Kb as ci,L as J,La as Zr,Lb as wt,M as $r,Na as Gi,Nb as it,O as ji,Oa as Kr,Ob as Z,Q as Qe,Qa as qi,Qb as Qi,R as W,Ra as I,Rb as oo,S as O,Sb as mi,Ta as h,Tb as ao,U as E,Ua as f,Ub as pe,Va as Ui,Vb as k,W as l,Wa as Yi,Wb as He,Xa as Ve,Xb as so,Y as Hi,Ya as Ne,Yb as lo,Za as v,Zb as Kn,_ as ee,_a as a,a as L,aa as oi,ab as x,ac as mo,b as ae,ba as Qr,bb as Rt,bc as St,c as Ie,ca as se,cb as It,da as he,db as $i,dc as uo,e as Li,eb as Se,ec as ve,f as D,fb as fe,ga as z,gb as Fe,gc as po,h as Hr,ha as j,hb as y,i as Wr,ib as p,ic as ho,j as Ft,ja as G,jb as K,jc as fo,ka as ai,kb as V,kc as go,la as we,lb as ke,lc as _o,ma as Pe,mb as ue,n as dt,nb as C,oa as F,ob as M,oc as Ae,pa as si,pb as Jr,pc as Vt,qb as eo,rb as Zn,rc as mt,s as Gr,sa as Xr,sb as ze,sc as N,t as qr,tb as Mt,tc as oe,ua as Wi,ub as w,uc as X,v as At,vb as tt,vc as ge,w as $e,wa as m,wb as d,wc as Ro,x as Un,xa as et,xb as R,ya as Te,yb as re,za as ct,zb as to}from"./chunk-77UJPO5W.js";var Ho=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(H(le),H(F))};static \u0275dir=b({type:i})}return i})(),As=(()=>{class i extends Ho{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275dir=b({type:i,features:[$]})}return i})(),yi=new E("");var Rs={provide:yi,useExisting:Qe(()=>De),multi:!0};function Is(){let i=Kn()?Kn().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Ts=new E(""),De=(()=>{class i extends Ho{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Is())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(H(le),H(F),H(Ts,8))};static \u0275dir=b({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&y("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},standalone:!1,features:[Q([Rs]),$]})}return i})();function ar(i){return i==null||sr(i)===0}function sr(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Gt=new E(""),mn=new E(""),Vs=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,q=class{static min(n){return Ns(n)}static max(n){return zs(n)}static required(n){return Wo(n)}static requiredTrue(n){return Bs(n)}static email(n){return Ls(n)}static minLength(n){return js(n)}static maxLength(n){return Go(n)}static pattern(n){return Hs(n)}static nullValidator(n){return tn()}static compose(n){return Xo(n)}static composeAsync(n){return Zo(n)}};function Ns(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function zs(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function Wo(i){return ar(i.value)?{required:!0}:null}function Bs(i){return i.value===!0?null:{required:!0}}function Ls(i){return ar(i.value)||Vs.test(i.value)?null:{email:!0}}function js(i){return n=>{let e=n.value?.length??sr(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function Go(i){return n=>{let e=n.value?.length??sr(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function Hs(i){if(!i)return tn;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(ar(t.value))return null;let r=t.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function tn(i){return null}function qo(i){return i!=null}function Uo(i){return Kr(i)?Wr(i):i}function Yo(i){let n={};return i.forEach(e=>{n=e!=null?L(L({},n),e):n}),Object.keys(n).length===0?null:n}function $o(i,n){return n.map(e=>e(i))}function Ws(i){return!i.validate}function Qo(i){return i.map(n=>Ws(n)?n:e=>n.validate(e))}function Xo(i){if(!i)return null;let n=i.filter(qo);return n.length==0?null:function(e){return Yo($o(e,n))}}function lr(i){return i!=null?Xo(Qo(i)):null}function Zo(i){if(!i)return null;let n=i.filter(qo);return n.length==0?null:function(e){let t=$o(e,n).map(Uo);return qr(t).pipe(dt(Yo))}}function dr(i){return i!=null?Zo(Qo(i)):null}function Io(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function Ko(i){return i._rawValidators}function Jo(i){return i._rawAsyncValidators}function nr(i){return i?Array.isArray(i)?i:[i]:[]}function nn(i,n){return Array.isArray(i)?i.includes(n):i===n}function To(i,n){let e=nr(n);return nr(i).forEach(r=>{nn(e,r)||e.push(r)}),e}function Vo(i,n){return nr(n).filter(e=>!nn(i,e))}var rn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=lr(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=dr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Xe=class extends rn{name;get formDirective(){return null}get path(){return null}},Ze=class extends rn{_parent=null;name=null;valueAccessor=null},on=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Ge=(()=>{class i extends on{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(H(Ze,2))};static \u0275dir=b({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&w("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[$]})}return i})(),rt=(()=>{class i extends on{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(H(Xe,10))};static \u0275dir=b({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&w("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[$]})}return i})();var pi="VALID",en="INVALID",Lt="PENDING",hi="DISABLED",vt=class{},an=class extends vt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},gi=class extends vt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},_i=class extends vt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},jt=class extends vt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},sn=class extends vt{source;constructor(n){super(),this.source=n}},bi=class extends vt{source;constructor(n){super(),this.source=n}};function cr(i){return(un(i)?i.validators:i)||null}function Gs(i){return Array.isArray(i)?lr(i):i||null}function mr(i,n){return(un(n)?n.asyncValidators:i)||null}function qs(i){return Array.isArray(i)?dr(i):i||null}function un(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function ea(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new ji(1e3,"");if(!t[e])throw new ji(1001,"")}function ta(i,n,e){i._forEachChild((t,r)=>{if(e[r]===void 0)throw new ji(-1002,"")})}var Ht=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return it(this.statusReactive)}set status(n){it(()=>this.statusReactive.set(n))}_status=Z(()=>this.statusReactive());statusReactive=G(void 0);get valid(){return this.status===pi}get invalid(){return this.status===en}get pending(){return this.status===Lt}get disabled(){return this.status===hi}get enabled(){return this.status!==hi}errors;get pristine(){return it(this.pristineReactive)}set pristine(n){it(()=>this.pristineReactive.set(n))}_pristine=Z(()=>this.pristineReactive());pristineReactive=G(!0);get dirty(){return!this.pristine}get touched(){return it(this.touchedReactive)}set touched(n){it(()=>this.touchedReactive.set(n))}_touched=Z(()=>this.touchedReactive());touchedReactive=G(!1);get untouched(){return!this.touched}_events=new D;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(To(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(To(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Vo(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Vo(n,this._rawAsyncValidators))}hasValidator(n){return nn(this._rawValidators,n)}hasAsyncValidator(n){return nn(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(ae(L({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new _i(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new _i(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(ae(L({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new gi(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new gi(!0,t))}markAsPending(n={}){this.status=Lt;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new jt(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(ae(L({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=hi,this.errors=null,this._forEachChild(r=>{r.disable(ae(L({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new an(this.value,t)),this._events.next(new jt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ae(L({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=pi,this._forEachChild(t=>{t.enable(ae(L({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ae(L({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===pi||this.status===Lt)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new an(this.value,e)),this._events.next(new jt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(ae(L({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?hi:pi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Lt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=Uo(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new jt(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new z,this.statusChanges=new z}_calculateStatus(){return this._allControlsDisabled()?hi:this.errors?en:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Lt)?Lt:this._anyControlsHaveStatus(en)?en:pi}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new gi(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new _i(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){un(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Gs(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=qs(this._rawAsyncValidators)}},Wt=class extends Ht{constructor(n,e,t){super(cr(e),mr(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){ta(this,!0,n),Object.keys(n).forEach(t=>{ea(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let r=this.controls[t];r&&r.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,r)=>{t.reset(n?n[r]:null,ae(L({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new bi(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var rr=class extends Wt{};var xi=new E("",{factory:()=>pn}),pn="always";function ia(i,n){return[...n.path,i]}function ln(i,n,e=pn){ur(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),Ys(i,n),Qs(i,n),$s(i,n),Us(i,n)}function No(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),cn(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function dn(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Us(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function ur(i,n){let e=Ko(i);n.validator!==null?i.setValidators(Io(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=Jo(i);n.asyncValidator!==null?i.setAsyncValidators(Io(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();dn(n._rawValidators,r),dn(n._rawAsyncValidators,r)}function cn(i,n){let e=!1;if(i!==null){if(n.validator!==null){let r=Ko(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==n.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(n.asyncValidator!==null){let r=Jo(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==n.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return dn(n._rawValidators,t),dn(n._rawAsyncValidators,t),e}function Ys(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&na(i,n)})}function $s(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&na(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function na(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Qs(i,n){let e=(t,r)=>{n.valueAccessor.writeValue(t),r&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function ra(i,n){i==null,ur(i,n)}function Xs(i,n){return cn(i,n)}function oa(i,n){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Zs(i){return Object.getPrototypeOf(i.constructor)===As}function aa(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function sa(i,n){if(!n)return null;Array.isArray(n);let e,t,r;return n.forEach(o=>{o.constructor===De?e=o:Zs(o)?t=o:r=o}),r||t||e||null}function Ks(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var Js={provide:Xe,useExisting:Qe(()=>Ke)},fi=Promise.resolve(),Ke=(()=>{class i extends Xe{callSetDisabledState;get submitted(){return it(this.submittedReactive)}_submitted=Z(()=>this.submittedReactive());submittedReactive=G(!1);_directives=new Set;form;ngSubmit=new z;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Wt({},lr(e),dr(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){fi.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),ln(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){fi.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){fi.then(()=>{let t=this._findContainer(e.path),r=new Wt({});ra(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){fi.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){fi.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),aa(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new sn(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(H(Gt,10),H(mn,10),H(xi,8))};static \u0275dir=b({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&y("submit",function(c){return r.onSubmit(c)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Q([Js]),$]})}return i})();function zo(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function Bo(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var vi=class extends Ht{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(cr(e),mr(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),un(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Bo(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new bi(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){zo(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){zo(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Bo(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var el=i=>i instanceof vi;var tl={provide:Ze,useExisting:Qe(()=>pt)},Lo=Promise.resolve(),pt=(()=>{class i extends Ze{_changeDetectorRef;callSetDisabledState;control=new vi;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new z;constructor(e,t,r,o,c,u){super(),this._changeDetectorRef=c,this.callSetDisabledState=u,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=sa(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),oa(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ln(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Lo.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&k(t);Lo.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ia(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(H(Xe,9),H(Gt,10),H(mn,10),H(yi,10),H(pe,8),H(xi,8))};static \u0275dir=b({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Q([tl]),$,we]})}return i})();var ot=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var or=class extends Ht{constructor(n,e,t){super(cr(e),mr(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,t={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(n,e={}){let t=this._adjustIndex(n);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,t={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){ta(this,!1,n),n.forEach((t,r)=>{ea(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((t,r)=>{t.reset(n[r],ae(L({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new bi(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,t)=>{n(e,t)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var il=(()=>{class i extends Xe{callSetDisabledState;get submitted(){return it(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Z(()=>this._submittedReactive());_submittedReactive=G(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(cn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return ln(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){No(e.control||null,e,!1),Ks(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,aa(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new sn(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(No(t||null,e),el(r)&&(ln(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);ra(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Xs(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ur(this.form,this),this._oldForm&&cn(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(H(Gt,10),H(mn,10),H(xi,8))};static \u0275dir=b({type:i,features:[$,we]})}return i})();var la=new E("");var nl={provide:Ze,useExisting:Qe(()=>Ci)},Ci=(()=>{class i extends Ze{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new z;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,c){super(),this._ngModelWarningConfig=c,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=sa(this,o)}ngOnChanges(e){this._added||this._setUpControl(),oa(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ia(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||i)(H(Xe,13),H(Gt,10),H(mn,10),H(yi,10),H(la,8))};static \u0275dir=b({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Q([nl]),$,we]})}return i})();var rl={provide:Xe,useExisting:Qe(()=>ht)},ht=(()=>{class i extends il{form=null;ngSubmit=new z;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275dir=b({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&y("submit",function(c){return r.onSubmit(c)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Q([rl]),$]})}return i})();function ol(i){return typeof i=="number"?i:parseInt(i,10)}var da=(()=>{class i{_validator=tn;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):tn,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,features:[we]})}return i})();var al={provide:Gt,useExisting:Qe(()=>kt),multi:!0};var kt=(()=>{class i extends da{required;inputName="required";normalizeInput=k;createValidator=e=>Wo;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275dir=b({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&I("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Q([al]),$]})}return i})();var sl={provide:Gt,useExisting:Qe(()=>pr),multi:!0},pr=(()=>{class i extends da{maxlength;inputName="maxlength";normalizeInput=e=>ol(e);createValidator=e=>Go(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275dir=b({type:i,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,r){t&2&&I("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[Q([sl]),$]})}return i})();var ca=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({})}return i})();function jo(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var hn=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return jo(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new Wt(r,o)}record(e,t=null){let r=this._reduceControls(e);return new rr(r,t)}control(e,t,r){let o={};return this.useNonNullable?(jo(t)?o=t:(o.validators=t,o.asyncValidators=r),new vi(e,ae(L({},o),{nonNullable:!0}))):new vi(e,t,r)}array(e,t,r){let o=e.map(c=>this._createControl(c));return new or(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof vi)return e;if(e instanceof Ht)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var bt=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:xi,useValue:e.callSetDisabledState??pn}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[ca]})}return i})(),fn=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:la,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:xi,useValue:e.callSetDisabledState??pn}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[ca]})}return i})();var hr=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Li(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe($e(e=>e.some(t=>t.target===n)),Qn({bufferSize:1,refCount:!0}),J(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ma=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=l(j);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new hr(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ll=["notch"],dl=["matFormFieldNotchedOutline",""],cl=["*"],ua=["iconPrefixContainer"],pa=["textPrefixContainer"],ha=["iconSuffixContainer"],fa=["textSuffixContainer"],ml=["textField"],ul=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],pl=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function hl(i,n){i&1&&x(0,"span",21)}function fl(i,n){if(i&1&&(a(0,"label",20),V(1,1),h(2,hl,1,0,"span",21),s()),i&2){let e=p(2);v("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),I("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),f(!e.hideRequiredMarker&&e._control.required?2:-1)}}function gl(i,n){if(i&1&&h(0,fl,3,5,"label",20),i&2){let e=p();f(e._hasFloatingLabel()?0:-1)}}function _l(i,n){i&1&&x(0,"div",7)}function vl(i,n){}function bl(i,n){if(i&1&&de(0,vl,0,0,"ng-template",13),i&2){p(2);let e=ze(1);v("ngTemplateOutlet",e)}}function yl(i,n){if(i&1&&(a(0,"div",9),h(1,bl,1,1,null,13),s()),i&2){let e=p();v("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),f(e._forceDisplayInfixLabel()?-1:1)}}function xl(i,n){i&1&&(a(0,"div",10,2),V(2,2),s())}function Cl(i,n){i&1&&(a(0,"div",11,3),V(2,3),s())}function Ml(i,n){}function wl(i,n){if(i&1&&de(0,Ml,0,0,"ng-template",13),i&2){p();let e=ze(1);v("ngTemplateOutlet",e)}}function Sl(i,n){i&1&&(a(0,"div",14,4),V(2,4),s())}function kl(i,n){i&1&&(a(0,"div",15,5),V(2,5),s())}function Dl(i,n){i&1&&x(0,"div",16)}function El(i,n){i&1&&(a(0,"div",18),V(1,6),s())}function Ol(i,n){if(i&1&&(a(0,"mat-hint",22),d(1),s()),i&2){let e=p(2);v("id",e._hintLabelId),m(),R(e.hintLabel)}}function Pl(i,n){if(i&1&&(a(0,"div",19),h(1,Ol,2,2,"mat-hint",22),V(2,7),x(3,"div",23),V(4,8),s()),i&2){let e=p();m(),f(e.hintLabel?1:-1)}}var Ce=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["mat-label"]]})}return i})(),Ca=new E("MatError"),Mi=(()=>{class i{id=l(ie).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&Fe("id",r.id)},inputs:{id:"id"},features:[Q([{provide:Ca,useExisting:i}])]})}return i})(),fr=(()=>{class i{align="start";id=l(ie).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Fe("id",r.id),I("align",null),w("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Ma=new E("MatPrefix"),gr=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[Q([{provide:Ma,useExisting:i}])]})}return i})(),wa=new E("MatSuffix"),wi=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Q([{provide:wa,useExisting:i}])]})}return i})(),Sa=new E("FloatingLabelParent"),ga=(()=>{class i{_elementRef=l(F);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(ma);_ngZone=l(j);_parent=l(Sa);_resizeSubscription=new Ie;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Fl(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&w("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Fl(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var _a="mdc-line-ripple--active",gn="mdc-line-ripple--deactivating",va=(()=>{class i{_elementRef=l(F);_cleanupTransitionEnd;constructor(){let e=l(j),t=l(le);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(gn),e.add(_a)}deactivate(){this._elementRef.nativeElement.classList.add(gn)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(gn);e.propertyName==="opacity"&&r&&t.remove(_a,gn)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),ba=(()=>{class i{_elementRef=l(F);_ngZone=l(j);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&ue(ll,5),t&2){let o;C(o=M())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&w("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:dl,ngContentSelectors:cl,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(K(),$i(0,"div",1),Rt(1,"div",2,0),V(3),It(),$i(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Si=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i})}return i})();var ki=new E("MatFormField"),Al=new E("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ya="fill",Rl="auto",xa="fixed",Il="translateY(-50%)",Ee=(()=>{class i{_elementRef=l(F);_changeDetectorRef=l(pe);_platform=l(me);_idGenerator=l(ie);_ngZone=l(j);_defaults=l(Al,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=mi("iconPrefixContainer");_textPrefixContainerSignal=mi("textPrefixContainer");_iconSuffixContainerSignal=mi("iconSuffixContainer");_textSuffixContainerSignal=mi("textSuffixContainer");_prefixSuffixContainers=Z(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ao(Ce);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ut(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Rl}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||ya;this._appearanceSignal.set(t)}_appearanceSignal=G(ya);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||xa}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||xa}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=xe();constructor(){let e=this._defaults,t=l(mt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ai(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Z(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Oe([void 0,void 0]),dt(()=>[t.errorState,t.userAriaDescribedBy]),$n(),$e(([[o,c],[u,g]])=>o!==u||c!==g)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(J(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),At(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){so({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Z(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(u=>u.align==="start"):null,c=this._hintChildren?this._hintChildren.find(u=>u.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),c&&e.push(c.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(c=>c&&!o.includes(c)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,c=e?.getBoundingClientRect().width??0,u=t?.getBoundingClientRect().width??0,g=r?.getBoundingClientRect().width??0,T=o?.getBoundingClientRect().width??0,S=this._currentDirection==="rtl"?"-1":"1",B=`${c+u}px`,Me=`calc(${S} * (${B} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ye=`var(--mat-mdc-form-field-label-transform, ${Il} translateX(${Me}))`,Re=c+u+g+T;return[ye,Re]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Jr(o,r._labelChild,Ce,5),ke(o,Si,5)(o,Ma,5)(o,wa,5)(o,Ca,5)(o,fr,5)),t&2){Zn();let c;C(c=M())&&(r._formFieldControl=c.first),C(c=M())&&(r._prefixChildren=c),C(c=M())&&(r._suffixChildren=c),C(c=M())&&(r._errorChildren=c),C(c=M())&&(r._hintChildren=c)}},viewQuery:function(t,r){if(t&1&&(eo(r._iconPrefixContainerSignal,ua,5)(r._textPrefixContainerSignal,pa,5)(r._iconSuffixContainerSignal,ha,5)(r._textSuffixContainerSignal,fa,5),ue(ml,5)(ua,5)(pa,5)(ha,5)(fa,5)(ga,5)(ba,5)(va,5)),t&2){Zn(4);let o;C(o=M())&&(r._textField=o.first),C(o=M())&&(r._iconPrefixContainer=o.first),C(o=M())&&(r._textPrefixContainer=o.first),C(o=M())&&(r._iconSuffixContainer=o.first),C(o=M())&&(r._textSuffixContainer=o.first),C(o=M())&&(r._floatingLabel=o.first),C(o=M())&&(r._notchedOutline=o.first),C(o=M())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&w("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Q([{provide:ki,useExisting:i},{provide:Sa,useExisting:i}])],ngContentSelectors:pl,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(K(ul),de(0,gl,1,1,"ng-template",null,0,wt),a(2,"div",6,1),y("click",function(c){return r._control.onContainerClick(c)}),h(4,_l,1,0,"div",7),a(5,"div",8),h(6,yl,2,2,"div",9),h(7,xl,3,0,"div",10),h(8,Cl,3,0,"div",11),a(9,"div",12),h(10,wl,1,1,null,13),V(11),s(),h(12,Sl,3,0,"div",14),h(13,kl,3,0,"div",15),s(),h(14,Dl,1,0,"div",16),s(),a(15,"div",17),h(16,El,2,0,"div",18)(17,Pl,5,1,"div",19),s()),t&2){let o;m(2),w("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),m(2),f(!r._hasOutline()&&!r._control.disabled?4:-1),m(2),f(r._hasOutline()?6:-1),m(),f(r._hasIconPrefix?7:-1),m(),f(r._hasTextPrefix?8:-1),m(2),f(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),m(2),f(r._hasTextSuffix?12:-1),m(),f(r._hasIconSuffix?13:-1),m(),f(r._hasOutline()?-1:14),m(),w("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let c=r._getSubscriptMessageType();m(),f((o=c)==="error"?16:o==="hint"?17:-1)}},dependencies:[ga,ba,St,va,fr],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var _e=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[Mo,Ee,N]})}return i})();var Vl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),Nl={passive:!0},ka=(()=>{class i{_platform=l(me);_ngZone=l(j);_renderer=l(ct).createRenderer(null,null);_styleLoader=l(Ae);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Hr;this._styleLoader.load(Vl);let t=ui(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new D,c="cdk-text-field-autofilled",u=T=>{T.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(c)?(t.classList.add(c),this._ngZone.run(()=>o.next({target:T.target,isAutofilled:!0}))):T.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(c)&&(t.classList.remove(c),this._ngZone.run(()=>o.next({target:T.target,isAutofilled:!1})))},g=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",u,Nl)));return this._monitoredElements.set(t,{subject:o,unlisten:g}),o}stopMonitoring(e){let t=ui(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Da=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({})}return i})();var Ea=new E("MAT_INPUT_VALUE_ACCESSOR");var yt=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Yt=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var zl=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Bl=new E("MAT_INPUT_CONFIG"),qe=(()=>{class i{_elementRef=l(F);_platform=l(me);ngControl=l(Ze,{optional:!0,self:!0});_autofillMonitor=l(ka);_ngZone=l(j);_formField=l(ki,{optional:!0});_renderer=l(le);_uid=l(ie).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Bl,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new D;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ut(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(q.required)??!1}set required(e){this._required=ut(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ir().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ut(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ir().has(e));constructor(){let e=l(Ke,{optional:!0}),t=l(ht,{optional:!0}),r=l(yt),o=l(Ea,{optional:!0,self:!0}),c=this._elementRef.nativeElement,u=c.nodeName.toLowerCase();o?Gi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=c,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(c,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Yt(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=u==="select",this._isTextarea=u==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=c.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ai(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){zl.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&y("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Fe("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),I("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),w("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",k]},exportAs:["matInput"],features:[Q([{provide:Si,useExisting:i}]),we]})}return i})(),Ue=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[_e,_e,Da,N]})}return i})();var Di=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new D;constructor(n=!1,e,t=!0,r){this._multiple=n,this._emitChanges=t,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var _r=(()=>{class i{_listeners=[];notify(e,t){for(let r of this._listeners)r(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ll=20,vr=(()=>{class i{_ngZone=l(j);_platform=l(me);_renderer=l(ct).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new D;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Ll){return this._platform.isBrowser?new Li(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Un(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ft()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe($e(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=ui(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var jl=20,Dt=(()=>{class i{_platform=l(me);_listeners;_viewportSize=null;_change=new D;_document=l(he);constructor(){let e=l(j),t=l(ct).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),c=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,u=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:c,left:u}}change(e=jl){return e>0?this._change.pipe(Un(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var _n=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({})}return i})(),br=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[N,_n,N,_n]})}return i})();var Ei=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Qt=class extends Ei{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},ft=class extends Ei{templateRef;viewContainerRef;context;injector;constructor(n,e,t,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},yr=class extends Ei{element;constructor(n){super(),this.element=n instanceof F?n.nativeElement:n}},Xt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Qt)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ft)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof yr)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},vn=class extends Xt{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,r=t.get(Xn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=n.injector||this._defaultInjector||se.NULL,o=r.get(Hi,t.injector);e=lo(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Oi=(()=>{class i extends Xt{_moduleRef=l(Xn,{optional:!0});_document=l(he);_viewContainerRef=l(Ct);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new z;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[$]})}return i})(),Zt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({})}return i})();var Oa=Po();function Na(i){return new bn(i.get(Dt),i.get(he))}var bn=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ne(-this._previousScrollPosition.left),n.style.top=ne(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,r=e.style,o=t.scrollBehavior||"",c=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Oa&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Oa&&(t.scrollBehavior=o,r.scrollBehavior=c)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function za(i,n){return new yn(i.get(vr),i.get(j),i.get(Dt),n)}var yn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe($e(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Pi=class{enable(){}disable(){}attach(){}};function xr(i,n){return n.some(e=>{let t=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,c=i.left>e.right;return t||r||o||c})}function Pa(i,n){return n.some(e=>{let t=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,c=i.right>e.right;return t||r||o||c})}function Fi(i,n){return new xn(i.get(vr),i.get(Dt),i.get(j),n)}var xn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();xr(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ba=(()=>{class i{_injector=l(se);constructor(){}noop=()=>new Pi;close=e=>za(this._injector,e);block=()=>Na(this._injector);reposition=e=>Fi(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ot=class{positionStrategy;scrollStrategy=new Pi;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Cn=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var La=(()=>{class i{_attachedOverlays=[];_document=l(he);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ja=(()=>{class i extends La{_ngZone=l(j);_renderer=l(ct).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ha=(()=>{class i extends La{_platform=l(me);_ngZone=l(j);_renderer=l(ct).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Tt(e)};_clickListener=e=>{let t=Tt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let c=o.length-1;c>-1;c--){let u=o[c],g=u._outsidePointerEvents;if(!(!u.hasAttached()||!this.canReceiveEvent(u,e,g))){if(Fa(u.overlayElement,t)||Fa(u.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>g.next(e)):g.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Fa(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Wa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Ga=(()=>{class i{_platform=l(me);_containerElement;_document=l(he);_styleLoader=l(Ae);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||tr()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),tr()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Wa)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Cr=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,r){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Mr(i){return i&&i.nodeType===1}var Mn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=Ie.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(n,e,t,r,o,c,u,g,T,S=!1,B,be){this._portalOutlet=n,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=c,this._document=u,this._location=g,this._outsideClickDispatcher=T,this._animationsDisabled=S,this._injector=B,this._renderer=be,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=et(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=L(L({},this._config),n),this._updateElementSize()}setDirection(n){this._config=ae(L({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ne(this._config.width),n.height=ne(this._config.height),n.minWidth=ne(this._config.minWidth),n.minHeight=ne(this._config.minHeight),n.maxWidth=ne(this._config.maxWidth),n.maxHeight=ne(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Mr(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Cr(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let r=Jn(e||[]).filter(o=>!!o);r.length&&(t?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=et(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Aa="cdk-overlay-connected-position-bounding-box",Hl=/([A-Za-z%]+)$/;function wr(i,n){return new wn(n,i.get(Dt),i.get(he),i.get(me),i.get(Ga))}var wn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new D;_resizeSubscription=Ie.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Aa),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],c;for(let u of this._preferredPositions){let g=this._getOriginPoint(n,r,u),T=this._getOverlayPoint(g,e,u),S=this._getOverlayFit(T,e,t,u);if(S.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(u,g);return}if(this._canFitWithFlexibleDimensions(S,T,t)){o.push({position:u,origin:g,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(g,u)});continue}(!c||c.overlayFit.visibleArea<S.visibleArea)&&(c={overlayFit:S,overlayPoint:T,originPoint:g,position:u,overlayRect:e})}if(o.length){let u=null,g=-1;for(let T of o){let S=T.boundingBoxRect.width*T.boundingBoxRect.height*(T.position.weight||1);S>g&&(g=S,u=T)}this._isPushed=!1,this._applyPosition(u.position,u.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(c.position,c.originPoint);return}this._applyPosition(c.position,c.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Et(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Aa),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof F?this._origin.nativeElement:Mr(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let r;if(t.originX=="center")r=n.left+n.width/2;else{let c=this._isRtl()?n.right:n.left,u=this._isRtl()?n.left:n.right;r=t.originX=="start"?c:u}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,t,r){let o=Ia(e),{x:c,y:u}=n,g=this._getOffset(r,"x"),T=this._getOffset(r,"y");g&&(c+=g),T&&(u+=T);let S=0-c,B=c+o.width-t.width,be=0-u,Me=u+o.height-t.height,ye=this._subtractOverflows(o.width,S,B),Re=this._subtractOverflows(o.height,be,Me),jr=ye*Re;return{visibleArea:jr,isCompletelyWithinViewport:o.width*o.height===jr,fitsInViewportVertically:Re===o.height,fitsInViewportHorizontally:ye==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,c=Ra(this._overlayRef.getConfig().minHeight),u=Ra(this._overlayRef.getConfig().minWidth),g=n.fitsInViewportVertically||c!=null&&c<=r,T=n.fitsInViewportHorizontally||u!=null&&u<=o;return g&&T}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Ia(e),o=this._viewportRect,c=Math.max(n.x+r.width-o.width,0),u=Math.max(n.y+r.height-o.height,0),g=Math.max(o.top-t.top-n.y,0),T=Math.max(o.left-t.left-n.x,0),S=0,B=0;return r.width<=o.width?S=T||-c:S=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,r.height<=o.height?B=g||-u:B=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:S,y:B},{x:n.x+S,y:n.y+B}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Wl(this._lastScrollVisibility,t)){let r=new Cn(n,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,r=this._isRtl(),o,c,u;if(e.overlayY==="top")c=n.y,o=t.height-c+this._getViewportMarginBottom();else if(e.overlayY==="bottom")u=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-u+this._getViewportMarginTop();else{let Me=Math.min(t.bottom-n.y+t.top,n.y),ye=this._lastBoundingBoxSize.height;o=Me*2,c=n.y-Me,o>ye&&!this._isInitialRender&&!this._growAfterOpen&&(c=n.y-ye/2)}let g=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,T=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,S,B,be;if(T)be=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),S=n.x-this._getViewportMarginStart();else if(g)B=n.x,S=t.right-n.x-this._getViewportMarginEnd();else{let Me=Math.min(t.right-n.x+t.left,n.x),ye=this._lastBoundingBoxSize.width;S=Me*2,B=n.x-Me,S>ye&&!this._isInitialRender&&!this._growAfterOpen&&(B=n.x-ye/2)}return{top:c,left:B,bottom:u,right:be,width:S,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,c=this._overlayRef.getConfig().maxWidth;r.width=ne(t.width),r.height=ne(t.height),r.top=ne(t.top)||"auto",r.bottom=ne(t.bottom)||"auto",r.left=ne(t.left)||"auto",r.right=ne(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ne(o)),c&&(r.maxWidth=ne(c))}this._lastBoundingBoxSize=t,Et(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Et(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Et(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,c=this._overlayRef.getConfig();if(r){let S=this._viewportRuler.getViewportScrollPosition();Et(t,this._getExactOverlayY(e,n,S)),Et(t,this._getExactOverlayX(e,n,S))}else t.position="static";let u="",g=this._getOffset(e,"x"),T=this._getOffset(e,"y");g&&(u+=`translateX(${g}px) `),T&&(u+=`translateY(${T}px)`),t.transform=u.trim(),c.maxHeight&&(r?t.maxHeight=ne(c.maxHeight):o&&(t.maxHeight="")),c.maxWidth&&(r?t.maxWidth=ne(c.maxWidth):o&&(t.maxWidth="")),Et(this._pane.style,t)}_getExactOverlayY(n,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let c=this._document.documentElement.clientHeight;r.bottom=`${c-(o.y+this._overlayRect.height)}px`}else r.top=ne(o.y);return r}_getExactOverlayX(n,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let c;if(this._isRtl()?c=n.overlayX==="end"?"left":"right":c=n.overlayX==="end"?"right":"left",c==="right"){let u=this._document.documentElement.clientWidth;r.right=`${u-(o.x+this._overlayRect.width)}px`}else r.left=ne(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Pa(n,t),isOriginOutsideView:xr(n,t),isOverlayClipped:Pa(e,t),isOverlayOutsideView:xr(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,r)=>t-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Jn(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof F)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Et(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function Ra(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(Hl);return!e||e==="px"?parseFloat(n):null}return i||null}function Ia(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Wl(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Ta="cdk-global-overlay-wrapper";function kn(i){return new Sn}var Sn=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Ta),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:c,maxHeight:u}=t,g=(r==="100%"||r==="100vw")&&(!c||c==="100%"||c==="100vw"),T=(o==="100%"||o==="100vh")&&(!u||u==="100%"||u==="100vh"),S=this._xPosition,B=this._xOffset,be=this._overlayRef.getConfig().direction==="rtl",Me="",ye="",Re="";g?Re="flex-start":S==="center"?(Re="center",be?ye=B:Me=B):be?S==="left"||S==="end"?(Re="flex-end",Me=B):(S==="right"||S==="start")&&(Re="flex-start",ye=B):S==="left"||S==="start"?(Re="flex-start",Me=B):(S==="right"||S==="end")&&(Re="flex-end",ye=B),n.position=this._cssPosition,n.marginLeft=g?"0":Me,n.marginTop=T?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=g?"0":ye,e.justifyContent=Re,e.alignItems=T?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Ta),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},qa=(()=>{class i{_injector=l(se);constructor(){}global(){return kn()}flexibleConnectedTo(e){return wr(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ai=new E("OVERLAY_DEFAULT_CONFIG");function Ri(i,n){i.get(Ae).load(Wa);let e=i.get(Ga),t=i.get(he),r=i.get(ie),o=i.get(qi),c=i.get(mt),u=i.get(le,null,{optional:!0})||i.get(ct).createRenderer(null,null),g=new Ot(n),T=i.get(Ai,null,{optional:!0})?.usePopover??!0;g.direction=g.direction||c.value,"showPopover"in t.body?g.usePopover=n?.usePopover??T:g.usePopover=!1;let S=t.createElement("div"),B=t.createElement("div");S.id=r.getId("cdk-overlay-"),S.classList.add("cdk-overlay-pane"),B.appendChild(S),g.usePopover&&(B.setAttribute("popover","manual"),B.classList.add("cdk-overlay-popover"));let be=g.usePopover?g.positionStrategy?.getPopoverInsertionPoint?.():null;return Mr(be)?be.after(B):be?.type==="parent"?be.element.appendChild(B):e.getContainerElement().appendChild(B),new Mn(new vn(S,o,i),B,S,g,i.get(j),i.get(ja),t,i.get(co),i.get(Ha),n?.disableAnimations??i.get(Xr,null,{optional:!0})==="NoopAnimations",i.get(Hi),u)}var Ua=(()=>{class i{scrollStrategies=l(Ba);_positionBuilder=l(qa);_injector=l(se);constructor(){}create(e){return Ri(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Gl=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ql=new E("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(se);return()=>Fi(i)}}),Kt=(()=>{class i{elementRef=l(F);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Ya=new E("cdk-connected-overlay-default-config"),Dn=(()=>{class i{_dir=l(mt,{optional:!0});_injector=l(se);_overlayRef;_templatePortal;_backdropSubscription=Ie.EMPTY;_attachSubscription=Ie.EMPTY;_detachSubscription=Ie.EMPTY;_positionSubscription=Ie.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(ql);_ngZone=l(j);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new z;positionChange=new z;attach=new z;detach=new z;overlayKeydown=new z;overlayOutsideClick=new z;constructor(){let e=l(Te),t=l(Ct),r=l(Ya,{optional:!0}),o=l(Ai,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new ft(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Gl);let e=this._overlayRef=Ri(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!nt(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=Tt(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Ot({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=wr(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Kt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Kt?this.origin.elementRef.nativeElement:this.origin instanceof F?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe($r(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",k],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",k],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",k],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",k],push:[2,"cdkConnectedOverlayPush","push",k],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",k],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",k],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[we]})}return i})(),Ii=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({providers:[Ua],imports:[N,Zt,br,br]})}return i})();var $a=(()=>{class i{_animationsDisabled=xe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&w("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Ul=["text"],Yl=[[["mat-icon"]],"*"],$l=["mat-icon","*"];function Ql(i,n){if(i&1&&x(0,"mat-pseudo-checkbox",1),i&2){let e=p();v("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Xl(i,n){if(i&1&&x(0,"mat-pseudo-checkbox",3),i&2){let e=p();v("disabled",e.disabled)}}function Zl(i,n){if(i&1&&(a(0,"span",4),d(1),s()),i&2){let e=p();m(),re("(",e.group.label,")")}}var kr=new E("MAT_OPTION_PARENT_COMPONENT"),Dr=new E("MatOptgroup");var Sr=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Jt=(()=>{class i{_element=l(F);_changeDetectorRef=l(pe);_parent=l(kr,{optional:!0});group=l(Dr,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(ie).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=G(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new z;_text;_stateChanges=new D;constructor(){let e=l(Ae);e.load(zt),e.load(Vt),this._signalDisableRipple=!!this._parent&&Gi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!nt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Sr(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&ue(Ul,7),t&2){let o;C(o=M())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&y("click",function(){return r._selectViaInteraction()})("keydown",function(c){return r._handleKeydown(c)}),t&2&&(Fe("id",r.id),I("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),w("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",k]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:$l,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(K(Yl),h(0,Ql,1,2,"mat-pseudo-checkbox",1),V(1),a(2,"span",2,0),V(4,1),s(),h(5,Xl,1,1,"mat-pseudo-checkbox",3),h(6,Zl,2,1,"span",4),x(7,"div",5)),t&2&&(f(r.multiple?0:-1),m(5),f(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),m(),f(r.group&&r.group._inert?6:-1),m(),v("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[$a,Nt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function Qa(i,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),o=0;for(let c=0;c<i+1;c++)t[c].group&&t[c].group===r[o]&&o++;return o}return 0}function Xa(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var Za=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[N]})}return i})();var Er=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[Bt,Za,Jt,N]})}return i})();var td=["trigger"],id=["panel"],nd=[[["mat-select-trigger"]],"*"],rd=["mat-select-trigger","*"];function od(i,n){if(i&1&&(a(0,"span",4),d(1),s()),i&2){let e=p();m(),R(e.placeholder)}}function ad(i,n){i&1&&V(0)}function sd(i,n){if(i&1&&(a(0,"span",11),d(1),s()),i&2){let e=p(2);m(),R(e.triggerValue)}}function ld(i,n){if(i&1&&(a(0,"span",5),h(1,ad,1,0)(2,sd,2,1,"span",11),s()),i&2){let e=p();m(),f(e.customTrigger?1:2)}}function dd(i,n){if(i&1){let e=fe();a(0,"div",12,1),y("keydown",function(r){ee(e);let o=p();return te(o._handleKeydown(r))}),V(2,1),s()}if(i&2){let e=p();tt(e.panelClass),w("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),I("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var cd=new E("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(se);return()=>Fi(i)}}),md=new E("MAT_SELECT_CONFIG"),ud=new E("MatSelectTrigger"),Or=class{source;value;constructor(n,e){this.source=n,this.value=e}},es=(()=>{class i{_viewportRuler=l(Dt);_changeDetectorRef=l(pe);_elementRef=l(F);_dir=l(mt,{optional:!0});_idGenerator=l(ie);_renderer=l(le);_parentFormField=l(ki,{optional:!0});ngControl=l(Ze,{self:!0,optional:!0});_liveAnnouncer=l(Ki);_defaultOptions=l(md,{optional:!0});_animationsDisabled=xe();_popoverLocation;_initialized=new D;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=Qa(e,this.options,this.optionGroups),c=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Xa(c.offsetTop,c.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Or(this,e)}_scrollStrategyFactory=l(cd);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new D;_errorStateTracker;stateChanges=new D;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=G(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(q.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Gr(()=>{let e=this.options;return e?e.changes.pipe(Oe(e),gt(()=>At(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(gt(()=>this.optionSelectionChanges))});openedChange=new z;_openedStream=this.openedChange.pipe($e(e=>e),dt(()=>{}));_closedStream=this.openedChange.pipe($e(e=>!e),dt(()=>{}));selectionChange=new z;valueChange=new z;constructor(){let e=l(yt),t=l(Ke,{optional:!0}),r=l(ht,{optional:!0}),o=l(new Qi("tabindex"),{optional:!0}),c=l(Ai,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Yt(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=c?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Di(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(J(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(J(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Oe(null),J(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Yr(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&er(this._trackedModal,"aria-owns",t),Eo(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;er(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,c=this._keyManager;if(!c.isTyping()&&o&&!nt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;c.onKeydown(e);let g=this.selected;g&&u!==g&&this._liveAnnouncer.announce(g.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,c=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!c&&(r===13||r===32)&&t.activeItem&&!nt(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!c&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(g=>!g.disabled&&!g.selected);this.options.forEach(g=>{g.disabled||(u?g.select():g.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!nt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Kt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ko(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=At(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(J(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),At(...this.options.map(t=>t._stateChanges)).pipe(J(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Tt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&ke(o,ud,5)(o,Jt,5)(o,Dr,5),t&2){let c;C(c=M())&&(r.customTrigger=c.first),C(c=M())&&(r.options=c),C(c=M())&&(r.optionGroups=c)}},viewQuery:function(t,r){if(t&1&&ue(td,5)(id,5)(Dn,5),t&2){let o;C(o=M())&&(r.trigger=o.first),C(o=M())&&(r.panel=o.first),C(o=M())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&y("keydown",function(c){return r._handleKeydown(c)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(I("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),w("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",k],disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:He(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",k],placeholder:"placeholder",required:[2,"required","required",k],multiple:[2,"multiple","multiple",k],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",k],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",He],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",k]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Q([{provide:Si,useExisting:i},{provide:kr,useExisting:i}]),we],ngContentSelectors:rd,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(K(nd),a(0,"div",2,0),y("click",function(){return r.open()}),a(3,"div",3),h(4,od,2,1,"span",4)(5,ld,3,1,"span",5),s(),a(6,"div",6)(7,"div",7),oi(),a(8,"svg",8),x(9,"path",9),s()()()(),de(10,dd,3,16,"ng-template",10),y("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(c){return r._handleOverlayKeydown(c)})),t&2){let o=ze(1);m(3),I("id",r._valueId),m(),f(r.empty?4:5),m(6),v("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Kt,Dn],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var ts=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[Ii,Er,N,_n,_e,Er]})}return i})();function hd(i,n){if(i&1){let e=fe();a(0,"li",13),y("click",function(){let r=ee(e).$implicit,o=p(2);return te(o.selectAddress(r))}),a(1,"mat-icon"),d(2,"location_on"),s(),a(3,"span"),d(4),s()()}if(i&2){let e=n.$implicit;m(4),R(e.display_name)}}function fd(i,n){if(i&1&&(a(0,"ul",7),Ve(1,hd,5,1,"li",null,Ui),s()),i&2){let e=p();m(),Ne(e.addressSuggestions)}}var En=class i{http=l(ho);router=l(ce);deliveryAddress="";deliveryOption="now";addressSuggestions=[];searchSubject=new D;constructor(){this.searchSubject.pipe(Ur(300),Yn(),gt(n=>{if(!n.trim()||n.length<3)return this.addressSuggestions=[],[];let e=`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(n)}&countrycodes=za&limit=5`;return this.http.get(e)})).subscribe(n=>{this.addressSuggestions=n})}onAddressInput(n){let e=n.target.value;this.saveDeliveryAddress(e),this.searchSubject.next(e)}selectAddress(n){this.deliveryAddress=n.display_name,this.saveDeliveryAddress(this.deliveryAddress),this.addressSuggestions=[]}onFindFood(){let n=this.deliveryAddress.trim();this.saveDeliveryAddress(n),this.router.navigate(["/menu"],{queryParams:{search:n,option:this.deliveryOption}})}saveDeliveryAddress(n){let e=n.trim();e?sessionStorage.setItem("deliveryAddress",e):sessionStorage.removeItem("deliveryAddress")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-hero"]],decls:25,vars:3,consts:[["id","home",1,"home"],[1,"home-content"],[1,"search-box"],[1,"autocomplete-wrapper"],["appearance","fill",1,"address-field"],["matPrefix",""],["matInput","","placeholder","e.g. 123 Main St","autocomplete","off",3,"ngModelChange","input","ngModel"],[1,"suggestions-list"],["appearance","fill",1,"option-field"],[3,"ngModelChange","ngModel"],["value","now"],["value","schedule"],["mat-flat-button","",1,"find-food-btn",3,"click"],[3,"click"]],template:function(e,t){e&1&&(a(0,"section",0)(1,"div",1)(2,"h1"),d(3,"Order delivery near you"),s(),a(4,"p"),d(5,"Welcome to KwaJozi. Order or come by to visit the best kotas eKasi!."),s(),a(6,"div",2)(7,"div",3)(8,"mat-form-field",4)(9,"mat-label"),d(10,"Enter delivery address"),s(),a(11,"mat-icon",5),d(12,"location_on"),s(),a(13,"input",6),je("ngModelChange",function(o){return Le(t.deliveryAddress,o)||(t.deliveryAddress=o),o}),y("input",function(o){return t.onAddressInput(o)}),s()(),h(14,fd,3,0,"ul",7),s(),a(15,"mat-form-field",8)(16,"mat-select",9),je("ngModelChange",function(o){return Le(t.deliveryOption,o)||(t.deliveryOption=o),o}),a(17,"mat-option",10),d(18,"Deliver now"),s(),a(19,"mat-option",11),d(20,"Schedule for delivery"),s()()(),a(21,"button",12),y("click",function(){return t.onFindFood()}),a(22,"mat-icon"),d(23,"search"),s(),d(24," Find Food "),s()()()()),e&2&&(m(13),Be("ngModel",t.deliveryAddress),m(),f(t.addressSuggestions.length>0?14:-1),m(2),Be("ngModel",t.deliveryOption))},dependencies:[ve,bt,De,Ge,pt,_o,_e,Ee,Ce,gr,Ue,qe,ts,es,Jt,Y,U,X,oe],styles:["[_nghost-%COMP%]{display:block}.home[_ngcontent-%COMP%]{background:linear-gradient(#000000a6,#000000a6),url(https://images.pexels.com/photos/21821567/pexels-photo-21821567.jpeg);background-repeat:no-repeat;background-size:cover;background-position:center;min-height:75vh;padding:80px 20px;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff}.home-content[_ngcontent-%COMP%]{width:100%;max-width:900px;margin:0 auto}.home-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:52px;margin:0 0 12px;font-weight:800;line-height:1.2;text-shadow:0 2px 6px rgba(0,0,0,.5)}.home-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-style:italic;max-width:650px;margin:0 auto 32px;line-height:1.6}.search-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;gap:12px;flex-wrap:wrap}.autocomplete-wrapper[_ngcontent-%COMP%]{position:relative;width:450px;max-width:100%}.address-field[_ngcontent-%COMP%]{width:100%}.option-field[_ngcontent-%COMP%]{width:220px;max-width:100%}.search-box[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper{background-color:#fff!important;border-radius:8px!important;height:56px!important;padding:0 12px!important}.search-box[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mdc-floating-label{color:#236845!important}.search-box[_ngcontent-%COMP%]     .mat-mdc-form-field .mdc-floating-label{color:#64748b}.search-box[_ngcontent-%COMP%]     .mdc-line-ripple{display:none!important}.search-box[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none!important}.search-box[_ngcontent-%COMP%]     input.mat-mdc-input-element{color:#1a202c!important;font-size:15px!important}.find-food-btn[_ngcontent-%COMP%]{height:56px!important;padding:0 28px!important;font-size:16px!important;font-weight:700!important;border-radius:8px!important;background-color:#236845!important;color:#fff!important;white-space:nowrap}.find-food-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.suggestions-list[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;z-index:1000;background-color:#fff;border-radius:8px;box-shadow:0 8px 24px #00000040;margin:6px 0 0;padding:0;list-style:none;max-height:250px;overflow-y:auto;border:1px solid #cbd5e1}.suggestions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px;color:#1e293b;font-size:14px;font-style:normal;cursor:pointer;border-bottom:1px solid #f1f5f9;text-align:left}.suggestions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.suggestions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f0fdf4;color:#236845}.suggestions-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#236845}@media(max-width:768px){.home-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:34px}.search-box[_ngcontent-%COMP%]{flex-direction:column}.autocomplete-wrapper[_ngcontent-%COMP%], .option-field[_ngcontent-%COMP%], .find-food-btn[_ngcontent-%COMP%]{width:100%!important}}"]})};var gd=["*"];var _d=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],vd=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],bd=new E("MAT_CARD_CONFIG"),at=(()=>{class i{appearance;constructor(){let e=l(bd,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&w("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:gd,decls:1,vars:0,template:function(t,r){t&1&&(K(),V(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})(),On=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var ei=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})();var is=(()=>{class i{align="start";static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&w("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return i})(),Pn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:vd,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(K(_d),V(0),Rt(1,"div",0),V(2,1),It(),V(3,2))},encapsulation:2,changeDetection:0})}return i})();var ns=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return i})();var st=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[N]})}return i})();function yd(i,n){if(i&1){let e=fe();a(0,"div",1)(1,"button",2),y("click",function(){ee(e);let r=p();return te(r.action())}),d(2),s()()}if(i&2){let e=p();m(2),re(" ",e.data.action," ")}}var xd=["label"];function Cd(i,n){}var Md=Math.pow(2,31)-1,zi=class{_overlayRef;instance;containerInstance;_afterDismissed=new D;_afterOpened=new D;_onAction=new D;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Md))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},rs=new E("MatSnackBarData"),ti=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},wd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),Sd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),kd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),os=(()=>{class i{snackBarRef=l(zi);data=l(rs);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(a(0,"div",0),d(1),s(),h(2,yd,3,1,"div",1)),t&2&&(m(),re(" ",r.data.message,`
`),m(),f(r.hasAction?2:-1))},dependencies:[U,wd,Sd,kd],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Pr="_mat-snack-bar-enter",Fr="_mat-snack-bar-exit",Dd=(()=>{class i extends Xt{_ngZone=l(j);_elementRef=l(F);_changeDetectorRef=l(pe);_platform=l(me);_animationsDisabled=xe();snackBarConfig=l(ti);_document=l(he);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(se);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new D;_onExit=new D;_onEnter=new D;_animationState="void";_live;_label;_role;_liveElementId=l(ie).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Fr?this._completeExit():e===Pr&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?et(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Pr)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Pr)},200)))}exit(){return this._destroyed?Ft(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?et(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Fr)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Fr),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(c=>e.classList.add(c)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],c=o.getAttribute("aria-owns");this._trackedModals.add(o),c?c.indexOf(e)===-1&&o.setAttribute("aria-owns",c+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&ue(Oi,7)(xd,7),t&2){let o;C(o=M())&&(r._portalOutlet=o.first),C(o=M())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&y("animationend",function(c){return r.onAnimationEnd(c.animationName)})("animationcancel",function(c){return r.onAnimationEnd(c.animationName)}),t&2&&w("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[$],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(a(0,"div",1)(1,"div",2,0)(3,"div",3),de(4,Cd,0,0,"ng-template",4),s(),x(5,"div"),s()()),t&2&&(m(5),I("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Oi],styles:[`@keyframes _mat-snack-bar-enter {
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
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
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
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
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
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return i})(),Ed=new E("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new ti}),Ar=(()=>{class i{_live=l(Ki);_injector=l(se);_breakpointObserver=l(Co);_parentSnackBar=l(i,{optional:!0,skipSelf:!0});_defaultConfig=l(Ed);_animationsDisabled=xe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=os;snackBarContainerComponent=Dd;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=L(L({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=se.create({parent:r||this._injector,providers:[{provide:ti,useValue:t}]}),c=new Qt(this.snackBarContainerComponent,t.viewContainerRef,o),u=e.attach(c);return u.instance.snackBarConfig=t,u.instance}_attach(e,t){let r=L(L(L({},new ti),this._defaultConfig),t),o=this._createOverlay(r),c=this._attachSnackBarContainer(o,r),u=new zi(c,o);if(e instanceof Te){let g=new ft(e,null,{$implicit:r.data,snackBarRef:u});u.instance=c.attachTemplatePortal(g)}else{let g=this._createInjector(r,u),T=new Qt(e,void 0,g),S=c.attachComponentPortal(T);u.instance=S.instance}return this._breakpointObserver.observe(Fo.HandsetPortrait).pipe(J(o.detachments())).subscribe(g=>{o.overlayElement.classList.toggle(this.handsetCssClass,g.matches)}),r.announcementMessage&&c._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(u,r),this._openedSnackBarRef=u,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Ot;t.direction=e.direction;let r=kn(this._injector),o=e.direction==="rtl",c=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,u=!c&&e.horizontalPosition!=="center";return c?r.left("0"):u?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,Ri(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return se.create({parent:r||this._injector,providers:[{provide:zi,useValue:t},{provide:rs,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var as=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({providers:[Ar],imports:[Ii,Zt,Y,os,N]})}return i})();var lt=class i{authService=l(ge);cartsByUser=G({});cart=Z(()=>{let n=this.authService.currentUser()?.id;return n===void 0?[]:this.cartsByUser()[n]??[]});isCartOpen=G(!1);cartItems=this.cart;totalAmount=Z(()=>this.cartTotal());cartCount=Z(()=>this.cart().reduce((n,e)=>n+e.quantity,0));cartTotal=Z(()=>this.cart().reduce((n,e)=>n+e.item.price*e.quantity,0));toggleCart(){this.isCartOpen.update(n=>!n)}addToCart(n){this.updateCurrentUserCart(e=>e.find(r=>r.item.id===n.id)?e.map(r=>r.item.id===n.id?ae(L({},r),{quantity:r.quantity+1}):r):[...e,{item:n,quantity:1}])}incrementQuantity(n){this.updateCurrentUserCart(e=>e.map(t=>t.item.id===n?ae(L({},t),{quantity:t.quantity+1}):t))}decrementQuantity(n){this.updateCurrentUserCart(e=>e.map(t=>t.item.id===n?ae(L({},t),{quantity:t.quantity-1}):t).filter(t=>t.quantity>0))}removeFromCart(n){this.updateCurrentUserCart(e=>e.filter(t=>t.item.id!==n))}clearCart(){this.updateCurrentUserCart(()=>[])}updateCurrentUserCart(n){let e=this.authService.currentUser()?.id;e!==void 0&&this.cartsByUser.update(t=>ae(L({},t),{[e]:n(t[e]??[])}))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})};var Od=(i,n)=>n.id;function Pd(i,n){if(i&1){let e=fe();a(0,"mat-card",5)(1,"div",6),x(2,"img",7),a(3,"span",8),d(4),s()(),a(5,"mat-card-header")(6,"mat-card-title",9),d(7),s()(),a(8,"mat-card-content",10)(9,"p",11),d(10),s()(),a(11,"mat-card-actions",12)(12,"button",13),y("click",function(){let r=ee(e).$implicit,o=p();return te(o.addToCart(r))}),a(13,"mat-icon"),d(14,"add_shopping_cart"),s(),d(15," Add "),s()()()}if(i&2){let e=n.$implicit;m(2),v("src",e.imageUrl,Wi)("alt",e.name),m(2),re("R",e.price.toFixed(2)),m(3),R(e.name),m(3),R(e.description)}}var Fn=class i{cartService=l(lt);authService=l(ge);router=l(ce);route=l(Xi);snackBar=l(Ar);searchQuery="";menuItems=[{id:1,name:"Saucy Kota",description:"It comes with chips, an egg, cheese, vienna ,atchar and variety of sauces",price:53,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcBW3suBpefZUGShItRoDF-Li7AuY1sSeXlBhSd-wxA&s=10"},{id:2,name:"Salad Kota",description:"It comes with chips, an egg, cheese, bacon, lettuce and cucumber",price:55,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAvTfvERYc7EpR6UpprK6FATs4Zm7_JjmqCf1S6OqAw&s=10"},{id:3,name:"Regular Kota",description:"It comes with chips, polony and atchar",price:40,imageUrl:"/number10.png"},{id:4,name:"Pork-rib Kota",description:"It comes with chips, pork-rib, half done egg",price:60,imageUrl:"/number15.png"},{id:5,name:"Classic Special Kota",description:"A quarter loaf packed with chips, polony, cheese, egg, atchar, and special sauce.",price:45,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ25U88J4gnG0rezCmh2wCDtJ6NtDqO_xpyrsO6NJG2Q&s"},{id:6,name:"Chips & Russian",description:"Crispy Russian sausage and chips.",price:40,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ufpf1HeEKImWjpgeJi7lT6MaHnOd4Q6V-9UY5LqBHA&s=10"},{id:7,name:"Family Feast Combo",description:"4 Special Kotas, 3 Large Russian & Chips, plus 2 200ml of Soft Drink.",price:230,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JcujqhWP5wGu6AdxUfYiZVVjKR1S27bW6eSrwsQt_g&s=10"},{id:8,name:"Large Chips with four Russians",description:"Freshly cut, seasoned slap chips and cheese grill viennas",price:140,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5G_znqAA_uzPyzl5K1caXhHkm4kDPTbP1oLgkKpsAg&s=10"}];filteredMenuItems=[];ngOnInit(){this.route.queryParams.subscribe(n=>{this.searchQuery=n.search||"",this.filterMenu()})}filterMenu(){if(!this.searchQuery.trim()){this.filteredMenuItems=[...this.menuItems];return}let n=this.searchQuery.toLowerCase();this.filteredMenuItems=this.menuItems.filter(e=>e.name.toLowerCase().includes(n)||e.description.toLowerCase().includes(n))}addToCart(n){if(!this.authService.isAuthenticated()){this.snackBar.open("Please register or sign in to add items to your cart.","Register Now",{duration:4e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["snack-warning","center-toast-container"]}).onAction().subscribe(()=>{this.router.navigate(["/register"])});return}this.cartService.addToCart(n),this.snackBar.open(`${n.name} added to cart!`,"Close",{duration:2500,horizontalPosition:"center",verticalPosition:"top",panelClass:["snack-success","center-toast-container"]})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-menu"]],decls:9,vars:0,consts:[[1,"menu-section"],[1,"menu-container"],[1,"menu-title"],[1,"menu-subtitle"],[1,"menu-grid"],["appearance","outlined",1,"menu-card"],[1,"card-image-wrapper"],["mat-card-image","",1,"card-img",3,"src","alt"],[1,"price-badge"],[1,"item-name"],[1,"card-content"],[1,"item-description"],["align","end",1,"card-actions"],["mat-raised-button","","color","primary",1,"add-btn",3,"click"]],template:function(e,t){e&1&&(a(0,"section",0)(1,"div",1)(2,"h2",2),d(3,"Our Menu"),s(),a(4,"p",3),d(5,"Freshly prepared kotas made with premium local ingredients."),s(),a(6,"div",4),Ve(7,Pd,16,5,"mat-card",5,Od),s()()()),e&2&&(m(7),Ne(t.menuItems))},dependencies:[ve,st,at,is,ei,Pn,ns,On,Y,U,X,oe,as],styles:[".menu-section[_ngcontent-%COMP%]{padding:30px 16px;background-color:var(--bg-light)}.menu-container[_ngcontent-%COMP%]{max-width:var(--container-max-width);margin:0 auto}.menu-title[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:var(--primary-color);text-align:center;margin:0 0 4px}.menu-subtitle[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-muted);text-align:center;margin:0 0 24px}.menu-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.menu-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-radius:8px!important;border-color:var(--border-color)!important;background-color:var(--bg-white)!important;box-shadow:0 1px 4px #0000000d!important;overflow:hidden;transition:transform .15s ease,box-shadow .15s ease}.menu-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #00000014!important}.card-image-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:130px;overflow:hidden;background-color:#f0f0f0}.card-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;margin:0!important}.price-badge[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;background-color:var(--primary-color);color:#fff;font-weight:700;font-size:.8rem;padding:3px 8px;border-radius:12px;box-shadow:0 2px 4px #0003}mat-card-header[_ngcontent-%COMP%]{padding:10px 12px 4px!important}.item-name[_ngcontent-%COMP%]{font-size:1rem!important;font-weight:700!important;color:var(--text-dark)}.card-content[_ngcontent-%COMP%]{flex:1;padding:0 12px 8px!important}.item-description[_ngcontent-%COMP%]{margin:0;font-size:.82rem;color:var(--text-muted);line-height:1.4}.card-actions[_ngcontent-%COMP%]{padding:8px 12px 10px!important}.add-btn[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   .add-btn.mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;width:100%;height:34px!important;line-height:34px!important;font-size:.82rem!important;font-weight:600!important;border-radius:6px!important;background-color:#236845!important;color:#fff!important;transition:background-color .15s ease!important}.add-btn[_ngcontent-%COMP%]:hover, .card-actions[_ngcontent-%COMP%]   .add-btn.mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%]:hover, .card-actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.add-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px!important;width:18px!important;height:18px!important;margin-right:4px!important}@media(max-width:500px){.menu-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}.card-image-wrapper[_ngcontent-%COMP%]{height:110px}}"]})};var An=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-about"]],decls:50,vars:0,consts:[["id","about",1,"about-section"],[1,"about-container"],[1,"about-header"],[1,"about-title"],[1,"about-subtitle"],["appearance","outlined",1,"about-card","main-story"],[1,"story-content"],[1,"values-grid"],["appearance","outlined",1,"value-card"],[1,"value-icon"],[1,"about-cta"],["mat-raised-button","","color","accent","routerLink","/menu",1,"cta-btn"]],template:function(e,t){e&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),d(4,"About KwaJozi"),s(),a(5,"p",4),d(6,"Serving authentic, handcrafted kotas straight to your doorstep."),s()(),a(7,"mat-card",5)(8,"mat-card-content",6)(9,"h3"),d(10,"Our Story"),s(),a(11,"p"),d(12," Established in 2021, "),a(13,"strong"),d(14,"KwaJozi"),s(),d(15," was born out of a deep passion for local street cuisine and a goal to elevate the iconic township kota. What started as a small kitchen experiment quickly grew into a neighborhood favorite. "),s(),a(16,"p"),d(17," We take pride in using only fresh, locally sourced ingredients\u2014from hot crispy chips and classic atchar to premium meats and rich sauces\u2014ensuring every bite delivers maximum flavor and quality. "),s()()(),a(18,"div",7)(19,"mat-card",8)(20,"mat-card-content")(21,"mat-icon",9),d(22,"local_fire_department"),s(),a(23,"h4"),d(24,"Fresh & Hot"),s(),a(25,"p"),d(26,"Every order is prepared fresh on demand using top-grade ingredients to guarantee hot, satisfying meals."),s()()(),a(27,"mat-card",8)(28,"mat-card-content")(29,"mat-icon",9),d(30,"speed"),s(),a(31,"h4"),d(32,"Fast Delivery"),s(),a(33,"p"),d(34,"We know the craving is real! Our efficient kitchen setup and delivery workflow get your order to you quickly."),s()()(),a(35,"mat-card",8)(36,"mat-card-content")(37,"mat-icon",9),d(38,"favorite"),s(),a(39,"h4"),d(40,"Community First"),s(),a(41,"p"),d(42,"Customer satisfaction is at the heart of everything we do. We build lasting relationships with every meal served."),s()()()(),a(43,"div",10)(44,"h3"),d(45,"Ready to satisfy your cravings?"),s(),a(46,"a",11)(47,"mat-icon"),d(48,"restaurant_menu"),s(),d(49," Explore Our Menu "),s()()()())},dependencies:[ve,We,st,at,ei,Y,U,X,oe],styles:[".about-section[_ngcontent-%COMP%]{padding:50px 20px;background-color:var(--bg-light)}.about-container[_ngcontent-%COMP%]{max-width:960px;margin:0 auto}.about-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:32px}.about-title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:var(--primary-color);margin:0 0 8px}.about-subtitle[_ngcontent-%COMP%]{font-size:1rem;color:var(--text-muted);margin:0}.main-story[_ngcontent-%COMP%], .value-card[_ngcontent-%COMP%]{border-radius:var(--border-radius-card)!important;border-color:var(--border-color)!important;background-color:var(--bg-white)!important;box-shadow:var(--shadow-sm)!important}.main-story[_ngcontent-%COMP%]{margin-bottom:28px}.story-content[_ngcontent-%COMP%]{padding:24px 28px!important}.story-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700;color:var(--primary-color);margin:0 0 12px}.story-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.6;color:var(--text-dark);margin:0 0 12px}.story-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.values-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-bottom:36px}.value-card[_ngcontent-%COMP%]{text-align:center;padding:12px}.value-icon[_ngcontent-%COMP%]{font-size:32px!important;width:32px!important;height:32px!important;color:var(--primary-color);margin-bottom:8px}.value-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:var(--text-dark);margin:0 0 8px}.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.88rem;color:var(--text-muted);line-height:1.5;margin:0}.about-cta[_ngcontent-%COMP%]{text-align:center;padding:28px 20px;background-color:var(--primary-color);border-radius:var(--border-radius-card);color:#fff}.about-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700;margin:0 0 16px}.cta-btn[_ngcontent-%COMP%], a.cta-btn[mat-raised-button][_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;background-color:#236845!important;color:#fff!important;font-weight:600!important;border-radius:var(--border-radius-btn)!important;padding:0 20px!important;transition:background-color .2s ease!important}.cta-btn[_ngcontent-%COMP%]:hover, a.cta-btn[mat-raised-button][_ngcontent-%COMP%]:hover{background-color:#1b5236!important}@media(max-width:600px){.about-section[_ngcontent-%COMP%]{padding:30px 16px}.about-title[_ngcontent-%COMP%]{font-size:1.75rem}.story-content[_ngcontent-%COMP%]{padding:18px 20px!important}.values-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:14px}}"]})};function Fd(i,n){i&1&&(a(0,"mat-error"),d(1,"Name is required"),s())}function Ad(i,n){i&1&&(a(0,"mat-error"),d(1,"Email is required"),s())}function Rd(i,n){i&1&&(a(0,"mat-error"),d(1,"Enter a valid email address"),s())}function Id(i,n){i&1&&(a(0,"mat-error"),d(1,"Message is required"),s())}var Rn=class i{fb=l(hn);contactForm=this.fb.group({name:["",[q.required]],email:["",[q.required,q.email]],message:["",[q.required,q.minLength(10)]]});onSubmit(){this.contactForm.valid&&(console.log("Form Submitted:",this.contactForm.value),this.contactForm.reset())}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-contact"]],decls:74,vars:5,consts:[["id","contacts",1,"contacts"],[1,"contacts-container"],[1,"contacts-title"],[1,"contacts-subtitle"],[1,"contacts-grid"],[1,"info-column"],["appearance","outlined",1,"contact-card"],[1,"card-title"],[1,"contact-info"],[1,"info-item"],["href","mailto:info@theeatery.com"],["href","tel:+27123456789"],[1,"hours-info"],[1,"hours-row"],[1,"day"],[1,"time"],["appearance","outlined",1,"contact-card","form-card"],[1,"contact-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","placeholder","Dineo Makofane"],["matInput","","formControlName","email","type","email","placeholder","dineo@gmail.com"],["matInput","","formControlName","message","rows","4","placeholder","How can we help you?"],["mat-raised-button","","color","primary","type","submit",1,"submit-btn",3,"disabled"]],template:function(e,t){if(e&1&&(a(0,"section",0)(1,"div",1)(2,"h2",2),d(3,"Get in Touch"),s(),a(4,"p",3),d(5,"We'd love to hear from you! Send us a message or visit us in Johannesburg."),s(),a(6,"div",4)(7,"div",5)(8,"mat-card",6)(9,"mat-card-header")(10,"mat-card-title",7),d(11,"Contact Information"),s()(),a(12,"mat-card-content",8)(13,"div",9)(14,"mat-icon"),d(15,"email"),s(),a(16,"a",10),d(17,"info@kwaJozi.com"),s()(),a(18,"div",9)(19,"mat-icon"),d(20,"phone"),s(),a(21,"a",11),d(22,"+27 12 345 6789"),s()(),a(23,"div",9)(24,"mat-icon"),d(25,"location_on"),s(),a(26,"span"),d(27,"123 Main Street, Moedi, Tembisa"),s()()()(),a(28,"mat-card",6)(29,"mat-card-header")(30,"mat-card-title",7),d(31,"Operating Hours"),s()(),a(32,"mat-card-content",12)(33,"div",13)(34,"span",14),d(35,"Mon - Thu:"),s(),a(36,"span",15),d(37,"09:00 AM - 07:00 PM"),s()(),a(38,"div",13)(39,"span",14),d(40,"Fri - Sat:"),s(),a(41,"span",15),d(42,"09:00 AM - 09:00 PM"),s()(),a(43,"div",13)(44,"span",14),d(45,"Sunday:"),s(),a(46,"span",15),d(47,"10:00 AM - 05:00 PM"),s()()()()(),a(48,"mat-card",16)(49,"mat-card-header")(50,"mat-card-title",7),d(51,"Send a Message"),s()(),a(52,"mat-card-content")(53,"form",17),y("ngSubmit",function(){return t.onSubmit()}),a(54,"mat-form-field",18)(55,"mat-label"),d(56,"Your Name"),s(),x(57,"input",19),h(58,Fd,2,0,"mat-error"),s(),a(59,"mat-form-field",18)(60,"mat-label"),d(61,"Email Address"),s(),x(62,"input",20),h(63,Ad,2,0,"mat-error")(64,Rd,2,0,"mat-error"),s(),a(65,"mat-form-field",18)(66,"mat-label"),d(67,"Message"),s(),x(68,"textarea",21),h(69,Id,2,0,"mat-error"),s(),a(70,"button",22)(71,"mat-icon"),d(72,"send"),s(),d(73," Send Message "),s()()()()()()()),e&2){let r,o,c;m(53),v("formGroup",t.contactForm),m(5),f((r=t.contactForm.get("name"))!=null&&r.hasError("required")?58:-1),m(5),f((o=t.contactForm.get("email"))!=null&&o.hasError("required")?63:(o=t.contactForm.get("email"))!=null&&o.hasError("email")?64:-1),m(6),f((c=t.contactForm.get("message"))!=null&&c.hasError("required")?69:-1),m(),v("disabled",t.contactForm.invalid)}},dependencies:[ve,fn,ot,De,Ge,rt,ht,Ci,st,at,ei,Pn,On,X,oe,_e,Ee,Ce,Mi,Ue,qe,Y,U],styles:[".contacts[_ngcontent-%COMP%]{background-color:var(--bg-light);padding:50px 20px}.contacts-container[_ngcontent-%COMP%]{max-width:var(--container-max-width);margin:0 auto}.contacts-title[_ngcontent-%COMP%]{font-size:1.85rem;font-weight:700;color:var(--primary-color);text-align:center;margin:0 0 6px}.contacts-subtitle[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-muted);text-align:center;margin:0 0 32px}.contacts-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}.info-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.contact-card[_ngcontent-%COMP%]{background-color:var(--bg-white)!important;border-radius:var(--border-radius-card, 10px)!important;border-color:var(--border-color)!important;box-shadow:var(--shadow-sm, 0 1px 4px rgba(0, 0, 0, .05))!important;padding:8px}.card-title[_ngcontent-%COMP%]{font-size:1.1rem!important;font-weight:700!important;color:var(--text-dark, #2d3748);margin-bottom:8px}.contact-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.info-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.9rem;color:var(--text-dark, #2d3748)}.info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-color);font-size:20px;width:20px;height:20px}.info-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-dark, #2d3748);text-decoration:none;font-weight:500;transition:color .15s ease}.info-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-color)}.hours-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;font-size:.88rem}.hours-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px dashed var(--border-color, #e2e8f0);padding-bottom:6px}.hours-row[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}.hours-row[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{font-weight:600;color:var(--text-dark)}.hours-row[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:var(--text-muted)}.contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.full-width[_ngcontent-%COMP%]{width:100%}.submit-btn[_ngcontent-%COMP%]{height:40px!important;border-radius:6px!important;font-weight:600!important;margin-top:8px}.submit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px!important;width:18px!important;height:18px!important;margin-right:4px!important}@media(max-width:768px){.contacts-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.contacts[_ngcontent-%COMP%]{padding:36px 16px}}"]})};function Td(i,n){if(i&1&&(a(0,"p",1),d(1),s()),i&2){let e=p();m(),R(e.errorMessage)}}var In=class i{constructor(n,e){this.authService=n;this.router=e}authService;router;email="";password="";errorMessage="";hidePassword=!0;onSubmit(){if(!this.email||!this.password){this.errorMessage="Please enter both email and password.";return}this.errorMessage="",this.authService.signin(this.email,this.password).subscribe({next:n=>{let e=n.user.role?.toUpperCase()==="ADMIN"?"/admin":"/";this.router.navigate([e])},error:n=>{this.errorMessage=n.error?.message||"Invalid email or password."}})}static \u0275fac=function(e){return new(e||i)(H(ge),H(ce))};static \u0275cmp=_({type:i,selectors:[["app-signin"]],decls:25,vars:7,consts:[[1,"auth-container"],[1,"error-text",2,"color","red","margin-bottom","1rem"],["autocomplete","off",3,"ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","type","email","name","email","autocomplete","off","required","",3,"ngModelChange","ngModel"],["matInput","","name","password","autocomplete","new-password","required","",3,"ngModelChange","type","ngModel"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["mat-raised-button","","type","submit",1,"full-width","auth-btn"],[1,"auth-links"],["routerLink","/forgot-password"],["routerLink","/register"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"h2"),d(2,"Sign In"),s(),h(3,Td,2,1,"p",1),a(4,"form",2),y("ngSubmit",function(){return t.onSubmit()}),a(5,"mat-form-field",3)(6,"mat-label"),d(7,"Email Address"),s(),a(8,"input",4),je("ngModelChange",function(o){return Le(t.email,o)||(t.email=o),o}),s()(),a(9,"mat-form-field",3)(10,"mat-label"),d(11,"Password"),s(),a(12,"input",5),je("ngModelChange",function(o){return Le(t.password,o)||(t.password=o),o}),s(),a(13,"button",6),y("click",function(){return t.hidePassword=!t.hidePassword}),a(14,"mat-icon"),d(15),s()()(),a(16,"button",7),d(17," Sign In "),s()(),a(18,"div",8)(19,"a",9),d(20,"Forgot Password?"),s(),a(21,"p"),d(22,"Don't have an account? "),a(23,"a",10),d(24,"Register here"),s()()()()),e&2&&(m(3),f(t.errorMessage?3:-1),m(5),Be("ngModel",t.email),m(4),v("type",t.hidePassword?"password":"text"),Be("ngModel",t.password),m(),I("aria-label","Hide password")("aria-pressed",t.hidePassword),m(2),R(t.hidePassword?"visibility_off":"visibility"))},dependencies:[bt,ot,De,Ge,rt,kt,pt,Ke,We,_e,Ee,Ce,wi,Ue,qe,Y,U,_t,X,oe],styles:[".auth-container[_ngcontent-%COMP%]{max-width:400px;margin:50px auto;padding:30px;background:#fff;border-radius:8px;box-shadow:0 4px 15px #0000001a}.auth-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#236845;margin-bottom:20px;text-align:center}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.error-text[_ngcontent-%COMP%]{color:#f44336;text-align:center;margin-bottom:15px}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field{--mdc-outlined-text-field-focus-outline-color: #236845;--mdc-outlined-text-field-focus-label-text-color: #236845;--mat-mdc-form-field-floating-label-style-color: #236845}.auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-floating-label, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mat-mdc-floating-label{color:#236845!important}.auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__leading, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__notch, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#236845!important}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-input-element{caret-color:#236845}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-icon-button{color:#236845!important}.auth-btn[_ngcontent-%COMP%], button[mat-raised-button].auth-btn[_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;background-color:#236845!important;color:#fff!important;font-weight:600!important;transition:background-color .2s ease!important}.auth-btn[_ngcontent-%COMP%]:hover, button[mat-raised-button].auth-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.auth-links[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:14px;display:flex;flex-direction:column;gap:10px}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#236845;text-decoration:none;font-weight:700}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1b5236}"]})};function Vd(i,n){if(i&1&&(a(0,"p",1),d(1),s()),i&2){let e=p();m(),R(e.errorMessage)}}var Tn=class i{authService=l(ge);router=l(ce);fullName="";email="";password="";errorMessage="";hidePassword=!0;onSubmit(){if(!this.fullName||!this.email||!this.password){this.errorMessage="Please fill in all fields.";return}this.errorMessage="",this.authService.register(this.fullName,this.email,this.password).subscribe({next:()=>{this.router.navigate(["/menu"])},error:n=>{this.errorMessage=n.error?.message||"Registration failed. Please try again."}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-register"]],decls:27,vars:8,consts:[[1,"auth-container"],[1,"error-text",2,"color","red","margin-bottom","1rem"],["autocomplete","off",3,"ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","type","text","name","fullName","autocomplete","off","required","",3,"ngModelChange","ngModel"],["matInput","","type","email","name","email","autocomplete","off","required","",3,"ngModelChange","ngModel"],["matInput","","name","password","autocomplete","new-password","required","",3,"ngModelChange","type","ngModel"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["mat-raised-button","","type","submit",1,"full-width","register-btn"],[1,"auth-links"],["routerLink","/signin"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"h2"),d(2,"Create an Account"),s(),h(3,Vd,2,1,"p",1),a(4,"form",2),y("ngSubmit",function(){return t.onSubmit()}),a(5,"mat-form-field",3)(6,"mat-label"),d(7,"Full Name"),s(),a(8,"input",4),je("ngModelChange",function(o){return Le(t.fullName,o)||(t.fullName=o),o}),s()(),a(9,"mat-form-field",3)(10,"mat-label"),d(11,"Email Address"),s(),a(12,"input",5),je("ngModelChange",function(o){return Le(t.email,o)||(t.email=o),o}),s()(),a(13,"mat-form-field",3)(14,"mat-label"),d(15,"Password"),s(),a(16,"input",6),je("ngModelChange",function(o){return Le(t.password,o)||(t.password=o),o}),s(),a(17,"button",7),y("click",function(){return t.hidePassword=!t.hidePassword}),a(18,"mat-icon"),d(19),s()()(),a(20,"button",8),d(21," Register "),s()(),a(22,"div",9)(23,"p"),d(24,"Already have an account? "),a(25,"a",10),d(26,"Sign In"),s()()()()),e&2&&(m(3),f(t.errorMessage?3:-1),m(5),Be("ngModel",t.fullName),m(4),Be("ngModel",t.email),m(4),v("type",t.hidePassword?"password":"text"),Be("ngModel",t.password),m(),I("aria-label","Hide password")("aria-pressed",t.hidePassword),m(2),R(t.hidePassword?"visibility_off":"visibility"))},dependencies:[bt,ot,De,Ge,rt,kt,pt,Ke,We,_e,Ee,Ce,wi,Ue,qe,Y,U,_t,X,oe],styles:[".auth-container[_ngcontent-%COMP%]{max-width:400px;margin:50px auto;padding:30px;background:#fff;border-radius:8px;box-shadow:0 4px 15px #0000001a}.auth-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#236845;margin-bottom:20px;text-align:center}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.error-text[_ngcontent-%COMP%]{color:#f44336;text-align:center;margin-bottom:15px}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field{--mdc-outlined-text-field-focus-outline-color: #236845;--mdc-outlined-text-field-focus-label-text-color: #236845;--mat-mdc-form-field-floating-label-style-color: #236845}.auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-floating-label, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mat-mdc-floating-label{color:#236845!important}.auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__leading, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__notch, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#236845!important}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-input-element{caret-color:#236845}.auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mdc-floating-label, .auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mat-mdc-floating-label{color:#f44336!important}.auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mdc-notched-outline__leading, .auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mdc-notched-outline__notch, .auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mdc-notched-outline__trailing{border-color:#f44336!important}.auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mat-mdc-input-element{caret-color:#f44336}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-icon-button{color:#236845!important}.register-btn[_ngcontent-%COMP%], button[mat-raised-button].register-btn[_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;background-color:#236845!important;color:#fff!important;font-weight:600!important;transition:background-color .2s ease!important}.register-btn[_ngcontent-%COMP%]:hover, button[mat-raised-button].register-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.auth-links[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:14px}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#236845;text-decoration:none;font-weight:700}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1b5236}"]})};function Nd(i,n){if(i&1){let e=fe();a(0,"p",4),d(1,"Enter your account email to receive a password reset link."),s(),a(2,"form",5),y("ngSubmit",function(){ee(e);let r=p();return te(r.onSubmit())}),a(3,"mat-form-field",6)(4,"mat-label"),d(5,"Email Address"),s(),a(6,"input",7),je("ngModelChange",function(r){ee(e);let o=p();return Le(o.email,r)||(o.email=r),te(r)}),s()(),a(7,"button",8),d(8,` Send Reset Link
`),s()()}if(i&2){let e=p();m(6),Be("ngModel",e.email)}}function zd(i,n){if(i&1&&(a(0,"div",1)(1,"p"),d(2,"A password reset link has been sent to "),a(3,"strong"),d(4),s(),d(5,"."),s()()),i&2){let e=p();m(4),R(e.email)}}var Vn=class i{email="";messageSent=!1;onSubmit(){this.email&&(this.messageSent=!0)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-forgot-password"]],decls:8,vars:1,consts:[[1,"auth-container"],[1,"success-message"],[1,"auth-links"],["routerLink","/signin"],[1,"subtitle"],[3,"ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","type","email","name","email","required","",3,"ngModelChange","ngModel"],["mat-raised-button","","type","submit",1,"full-width","register-btn"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"h2"),d(2,"Reset Password"),s(),h(3,Nd,9,1)(4,zd,6,1,"div",1),a(5,"div",2)(6,"a",3),d(7,"Back to Sign In"),s()()()),e&2&&(m(3),f(t.messageSent?4:3))},dependencies:[bt,ot,De,Ge,rt,kt,pt,Ke,We,_e,Ee,Ce,Ue,qe,Y,U],styles:[".auth-container[_ngcontent-%COMP%]{max-width:400px;margin:50px auto;padding:30px;background:#fff;border-radius:8px;box-shadow:0 4px 15px #0000001a}.auth-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#2f855a;margin-bottom:10px;text-align:center}.subtitle[_ngcontent-%COMP%]{color:#555;font-size:14px;margin-bottom:20px;text-align:center}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.success-message[_ngcontent-%COMP%]{background-color:#e6fffa;border:1px solid #38b2ac;padding:15px;border-radius:4px;text-align:center;margin-bottom:20px}.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#234e52;margin:0}.auth-links[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:14px}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#2f855a;text-decoration:none;font-weight:700}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1b5236}.auth-container[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%], .register-btn[_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;background-color:#236845!important;color:#fff!important;font-weight:600!important;transition:background-color .2s ease!important}.auth-container[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]:hover, .register-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}"]})};var Bd=["*"];function Ld(i,n){i&1&&V(0)}var Rr=(()=>{class i{_elementRef=l(F);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return i})(),Ir=(()=>{class i{template=l(Te);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","cdkStepLabel",""]]})}return i})();var Pt={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},jd=new E("STEPPER_GLOBAL_OPTIONS"),Nn=(()=>{class i{_stepperOptions;_stepper=l(ii);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=G(!1);interactedStream=new z;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=G(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=G(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=G(null);index=G(-1);isSelected=Z(()=>this._stepper.selectedIndex===this.index());indicatorType=Z(()=>{let e=this.isSelected(),t=this.completed,r=this._state()??Pt.NUMBER,o=this._editable();return this._showError()&&this.hasError&&!e?Pt.ERROR:this._displayDefaultIndicatorType?!t||e?Pt.NUMBER:o?Pt.EDIT:Pt.DONE:t&&!e?Pt.DONE:t&&e?r:o&&e?Pt.EDIT:r});isNavigable=Z(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=G(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=l(jd,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["cdk-step"]],contentQueries:function(t,r,o){if(t&1&&ke(o,Ir,5)(o,Xe,5),t&2){let c;C(c=M())&&(r.stepLabel=c.first),C(c=M())&&(r._childForms=c)}},viewQuery:function(t,r){if(t&1&&ue(Te,7),t&2){let o;C(o=M())&&(r.content=o.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",k],optional:[2,"optional","optional",k],completed:[2,"completed","completed",k],hasError:[2,"hasError","hasError",k]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[we],ngContentSelectors:Bd,decls:1,vars:0,template:function(t,r){t&1&&(K(),Zr(0,Ld,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return i})(),ii=(()=>{class i{_dir=l(mt,{optional:!0});_changeDetectorRef=l(pe);_elementRef=l(F);_destroyed=new D;_keyManager;_steps;steps=new si;_stepHeader;_sortedHeaders=new si;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=G(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=G(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new z;selectedIndexChange=new z;_groupId=l(ie).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(Oe(this._steps),J(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,r)=>t.index.set(r)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Oe(this._stepHeader),J(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,r)=>t._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Do(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Ft()).pipe(Oe(this._layoutDirection()),J(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),r=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:r,selectedStep:t[e],previouslySelectedStep:t[r]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=nt(e),r=e.keyCode,o=this._keyManager;o?.activeItemIndex!=null&&!t&&(r===32||r===13)?(this.selectedIndex=o.activeItemIndex,e.preventDefault()):o?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let r=t.stepControl;return(r?r.invalid||r.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=xo();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","cdkStepper",""]],contentQueries:function(t,r,o){if(t&1&&ke(o,Nn,5)(o,Rr,5),t&2){let c;C(c=M())&&(r._steps=c),C(c=M())&&(r._stepHeader=c)}},inputs:{linear:[2,"linear","linear",k],selectedIndex:[2,"selectedIndex","selectedIndex",He],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return i})(),ss=(()=>{class i{_stepper=l(ii);type="submit";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,r){t&1&&y("click",function(){return r._stepper.next()}),t&2&&Fe("type",r.type)},inputs:{type:"type"}})}return i})(),ls=(()=>{class i{_stepper=l(ii);type="button";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,r){t&1&&y("click",function(){return r._stepper.previous()}),t&2&&Fe("type",r.type)},inputs:{type:"type"}})}return i})(),ds=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[N]})}return i})();var Hd=(i,n,e)=>({index:i,active:n,optional:e});function Wd(i,n){if(i&1&&Se(0,2),i&2){let e=p();v("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",ro(2,Hd,e.index,e.active,e.optional))}}function Gd(i,n){if(i&1&&(a(0,"span",7),d(1),s()),i&2){let e=p(2);m(),R(e._getDefaultTextForState(e.state))}}function qd(i,n){if(i&1&&(a(0,"span",8),d(1),s()),i&2){let e=p(3);m(),R(e._intl.completedLabel)}}function Ud(i,n){if(i&1&&(a(0,"span",8),d(1),s()),i&2){let e=p(3);m(),R(e._intl.editableLabel)}}function Yd(i,n){if(i&1&&(h(0,qd,2,1,"span",8)(1,Ud,2,1,"span",8),a(2,"mat-icon",7),d(3),s()),i&2){let e=p(2);f(e.state==="done"?0:e.state==="edit"?1:-1),m(3),R(e._getDefaultTextForState(e.state))}}function $d(i,n){if(i&1&&h(0,Gd,2,1,"span",7)(1,Yd,4,2),i&2){let e,t=p();f((e=t.state)==="number"?0:1)}}function Qd(i,n){i&1&&(a(0,"div",4),Se(1,9),s()),i&2&&(m(),v("ngTemplateOutlet",n.template))}function Xd(i,n){if(i&1&&(a(0,"div",4),d(1),s()),i&2){let e=p();m(),R(e.label)}}function Zd(i,n){if(i&1&&(a(0,"div",5),d(1),s()),i&2){let e=p();m(),R(e._intl.optionalLabel)}}function Kd(i,n){if(i&1&&(a(0,"div",6),d(1),s()),i&2){let e=p();m(),R(e.errorMessage)}}var cs=["*"];function Jd(i,n){}function ec(i,n){if(i&1&&(V(0),de(1,Jd,0,0,"ng-template",0)),i&2){let e=p();m(),v("cdkPortalOutlet",e._portal)}}var tc=["animatedContainer"],ms=i=>({steps:i}),us=i=>({step:i});function ic(i,n){i&1&&V(0)}function nc(i,n){if(i&1&&(a(0,"div",5),Se(1,9)(2,6),s()),i&2){let e=p(2),t=ze(6);m(),v("ngTemplateOutlet",e.headerPrefix()),m(),v("ngTemplateOutlet",t)("ngTemplateOutletContext",li(3,ms,e.steps))}}function rc(i,n){if(i&1&&Se(0,6),i&2){let e=p(2),t=ze(6);v("ngTemplateOutlet",t)("ngTemplateOutletContext",li(2,ms,e.steps))}}function oc(i,n){if(i&1&&(a(0,"div",10,2),Se(2,9),s()),i&2){let e=n.$implicit,t=n.$index,r=p(2);tt("mat-horizontal-stepper-content-"+r._getAnimationDirection(t)),v("id",r._getStepContentId(t)),I("aria-labelledby",r._getStepLabelId(t))("inert",r.selectedIndex===t?null:""),m(2),v("ngTemplateOutlet",e.content)}}function ac(i,n){if(i&1&&(a(0,"div",3),h(1,nc,3,5,"div",5)(2,rc,1,4,"ng-container",6),a(3,"div",7),Ve(4,oc,3,6,"div",8,Yi),s()()),i&2){let e=p();m(),f(e.headerPrefix()?1:2),m(3),Ne(e.steps)}}function sc(i,n){if(i&1&&Se(0,9),i&2){let e=p(2);v("ngTemplateOutlet",e.headerPrefix())}}function lc(i,n){if(i&1&&(a(0,"div",11),Se(1,6),a(2,"div",12,2)(4,"div",13)(5,"div",14),Se(6,9),s()()()()),i&2){let e=n.$implicit,t=n.$index,r=n.$index,o=n.$count,c=p(2),u=ze(4);m(),v("ngTemplateOutlet",u)("ngTemplateOutletContext",li(11,us,e)),m(),w("mat-stepper-vertical-line",r!==o-1)("mat-vertical-content-container-active",c.selectedIndex===t),I("inert",c.selectedIndex===t?null:"")("aria-label",c.ariaLabel),m(2),v("id",c._getStepContentId(t)),I("aria-labelledby",c._getStepLabelId(t)),m(2),v("ngTemplateOutlet",e.content)}}function dc(i,n){if(i&1&&(a(0,"div",4),h(1,sc,1,1,"ng-container",9),Ve(2,lc,7,13,"div",11,Yi),s()),i&2){let e=p();m(),f(e.headerPrefix()?1:-1),m(),Ne(e.steps)}}function cc(i,n){if(i&1){let e=fe();a(0,"mat-step-header",15),y("click",function(){let r=ee(e).step;return te(r.select())})("keydown",function(r){ee(e);let o=p();return te(o._onKeydown(r))}),s()}if(i&2){let e=n.step,t=p();w("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),v("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),I("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function mc(i,n){i&1&&x(0,"div",17)}function uc(i,n){if(i&1&&(Se(0,6),h(1,mc,1,0,"div",17)),i&2){let e=n.$implicit,t=n.$index,r=n.$count;p(2);let o=ze(4);v("ngTemplateOutlet",o)("ngTemplateOutletContext",li(3,us,e)),m(),f(t!==r-1?1:-1)}}function pc(i,n){if(i&1&&(a(0,"div",16),Ve(1,uc,2,5,null,null,Yi),s()),i&2){let e=n.steps,t=p();I("aria-label",t.ariaLabel),m(),Ne(e)}}var Bi=(()=>{class i extends Ir{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275dir=b({type:i,selectors:[["","matStepLabel",""]],features:[$]})}return i})(),hc=(()=>{class i{changes=new D;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Tr=(()=>{class i extends Rr{_intl=l(hc);_focusMonitor=l(Zi);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=l(Ae);e.load(zt),e.load(Vt);let t=l(pe);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof Bi?null:this.label}_templateLabel(){return this.label instanceof Bi?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,r){t&2&&(tt("mat-"+(r.color||"primary")),w("mat-step-header-empty-label",r._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[$],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,r){if(t&1&&(x(0,"div",0),a(1,"div")(2,"div",1),h(3,Wd,1,6,"ng-container",2)(4,$d,2,1),s()(),a(5,"div",3),h(6,Qd,2,1,"div",4)(7,Xd,2,1,"div",4),h(8,Zd,2,1,"div",5),h(9,Kd,2,1,"div",6),s()),t&2){let o;v("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disableRipple),m(),tt(io("mat-step-icon-state-",r.state," mat-step-icon")),w("mat-step-icon-selected",r.selected),m(2),f(r.iconOverrides&&r.iconOverrides[r.state]?3:4),m(2),w("mat-step-label-active",r.active)("mat-step-label-selected",r.selected)("mat-step-label-error",r.state=="error"),m(),f((o=r._templateLabel())?6:r._stringLabel()?7:-1,o),m(2),f(r._hasOptionalLabel()?8:-1),m(),f(r._hasErrorLabel()?9:-1)}},dependencies:[Nt,St,oe],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return i})(),fc=(()=>{class i{templateRef=l(Te);name;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return i})(),gc=(()=>{class i{_template=l(Te);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["ng-template","matStepContent",""]]})}return i})(),Vr=(()=>{class i extends Nn{_errorStateMatcher=l(yt,{skipSelf:!0});_viewContainerRef=l(Ct);_isSelected=Ie.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(gt(()=>this._stepper.selectionChange.pipe(dt(e=>e.selectedStep===this),Oe(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new ft(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let r=this._errorStateMatcher.isErrorState(e,t),o=!!(e&&e.invalid&&this.interacted);return r||o}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275cmp=_({type:i,selectors:[["mat-step"]],contentQueries:function(t,r,o){if(t&1&&ke(o,Bi,5)(o,gc,5),t&2){let c;C(c=M())&&(r.stepLabel=c.first),C(c=M())&&(r._lazyContent=c.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[Q([{provide:yt,useExisting:i},{provide:Nn,useExisting:i}]),$],ngContentSelectors:cs,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,r){t&1&&(K(),de(0,ec,2,1,"ng-template"))},dependencies:[Oi],encapsulation:2,changeDetection:0})}return i})(),Nr=(()=>{class i extends ii{_ngZone=l(j);_renderer=l(le);_animationsDisabled=xe();_cleanupTransition;_isAnimating=G(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new si;_icons;animationDone=new z;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=oo(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!l(me).isBrowser;constructor(){super();let t=l(F).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(J(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(J(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(Oe(null),J(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let r=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),o=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(r||o)&&this._animatedContainers.find(u=>u.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,r,o){if(t&1&&ke(o,Vr,5)(o,fc,5),t&2){let c;C(c=M())&&(r._steps=c),C(c=M())&&(r._icons=c)}},viewQuery:function(t,r){if(t&1&&ue(Tr,5)(tc,5),t&2){let o;C(o=M())&&(r._stepHeader=o),C(o=M())&&(r._animatedContainers=o)}},hostVars:14,hostBindings:function(t,r){t&2&&(Mt("--mat-stepper-animation-duration",r._getAnimationDuration()),w("mat-stepper-horizontal",r.orientation==="horizontal")("mat-stepper-vertical",r.orientation==="vertical")("mat-stepper-label-position-end",r.orientation==="horizontal"&&r.labelPosition=="end")("mat-stepper-label-position-bottom",r.orientation==="horizontal"&&r.labelPosition=="bottom")("mat-stepper-header-position-bottom",r.headerPosition==="bottom")("mat-stepper-animating",r._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[Q([{provide:ii,useExisting:i}]),$],ngContentSelectors:cs,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,r){if(t&1&&(K(),h(0,ic,1,0),h(1,ac,6,1,"div",3)(2,dc,4,1,"div",4),de(3,cc,1,27,"ng-template",null,0,wt)(5,pc,3,1,"ng-template",null,1,wt)),t&2){let o;f(r._isServer?0:-1),m(),f((o=r.orientation)==="horizontal"?1:o==="vertical"?2:-1)}},dependencies:[St,Tr],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return i})(),ps=(()=>{class i extends ss{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275dir=b({type:i,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,r){t&2&&Fe("type",r.type)},features:[$]})}return i})(),hs=(()=>{class i extends ls{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Pe(i)))(r||i)}})();static \u0275dir=b({type:i,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,r){t&2&&Fe("type",r.type)},features:[$]})}return i})(),fs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({providers:[yt],imports:[Zt,ds,X,Bt,Nr,Tr,N]})}return i})();var vc=["mat-internal-form-field",""],bc=["*"],gs=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&w("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:vc,ngContentSelectors:bc,decls:1,vars:0,template:function(t,r){t&1&&(K(),V(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var yc=["input"],xc=["formField"],Cc=["*"],zn=class{source;value;constructor(n,e){this.source=n,this.value=e}},Mc={provide:yi,useExisting:Qe(()=>zr),multi:!0},_s=new E("MatRadioGroup"),wc=new E("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),zr=(()=>{class i{_changeDetector=l(pe);_value=null;_name=l(ie).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new z;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new zn(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["mat-radio-group"]],contentQueries:function(t,r,o){if(t&1&&ke(o,Bn,5),t&2){let c;C(c=M())&&(r._radios=c)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",k],required:[2,"required","required",k],disabledInteractive:[2,"disabledInteractive","disabledInteractive",k]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[Q([Mc,{provide:_s,useExisting:i}])]})}return i})(),Bn=(()=>{class i{_elementRef=l(F);_changeDetector=l(pe);_focusMonitor=l(Zi);_radioDispatcher=l(_r);_defaultOptions=l(wc,{optional:!0});_ngZone=l(j);_renderer=l(le);_uniqueId=l(ie).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new z;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=xe();_injector=l(se);constructor(){l(Ae).load(zt);let e=l(_s,{optional:!0}),t=l(new Qi("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=He(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new zn(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",t+""),this._previousTabIndex=t,et(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-radio-button"]],viewQuery:function(t,r){if(t&1&&ue(yc,5)(xc,7,F),t&2){let o;C(o=M())&&(r._inputElement=o.first),C(o=M())&&(r._rippleTrigger=o.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,r){t&1&&y("focus",function(){return r._inputElement.nativeElement.focus()}),t&2&&(I("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),w("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:He(e)],checked:[2,"checked","checked",k],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",k],required:[2,"required","required",k],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",k]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Cc,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,r){t&1&&(K(),a(0,"div",2,0)(2,"div",3)(3,"div",4),y("click",function(c){return r._onTouchTargetClick(c)}),s(),a(4,"input",5,1),y("change",function(c){return r._onInputInteraction(c)}),s(),a(6,"div",6),x(7,"div",7)(8,"div",8),s(),a(9,"div",9),x(10,"div",10),s()(),a(11,"label",11),V(12),s()()),t&2&&(v("labelPosition",r.labelPosition),m(2),w("mdc-radio--disabled",r.disabled),m(2),v("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),I("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),m(5),v("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",!0),m(2),v("for",r.inputId))},dependencies:[Nt,gs],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),vs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[Bt,Bn,N]})}return i})();var kc=["determinateSpinner"];function Dc(i,n){if(i&1&&(oi(),a(0,"svg",11),x(1,"circle",12),s()),i&2){let e=p();I("viewBox",e._viewBox()),m(),Mt("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),I("r",e._circleRadius())}}var Ec=new E("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:bs})}),bs=100,Oc=10,ys=(()=>{class i{_elementRef=l(F);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(Ec),t=Ao(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=bs;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Oc)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&ue(kc,5),t&2){let o;C(o=M())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(I("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),tt("mat-"+r.color),Mt("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),w("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",He],diameter:[2,"diameter","diameter",He],strokeWidth:[2,"strokeWidth","strokeWidth",He]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(de(0,Dc,2,8,"ng-template",null,0,wt),a(2,"div",2,1),oi(),a(4,"svg",3),x(5,"circle",4),s()(),Qr(),a(6,"div",5)(7,"div",6)(8,"div",7),Se(9,8),s(),a(10,"div",9),Se(11,8),s(),a(12,"div",10),Se(13,8),s()()()),t&2){let o=ze(1);m(4),I("viewBox",r._viewBox()),m(),Mt("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),I("r",r._circleRadius()),m(4),v("ngTemplateOutlet",o),m(2),v("ngTemplateOutlet",o),m(2),v("ngTemplateOutlet",o)}},dependencies:[St],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var xs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[N]})}return i})();function Fc(i,n){i&1&&d(0,"Delivery Address")}function Ac(i,n){i&1&&d(0," Enter your full name. ")}function Rc(i,n){i&1&&d(0," Use letters only in your name. ")}function Ic(i,n){if(i&1&&(a(0,"mat-error"),h(1,Ac,1,0)(2,Rc,1,0),s()),i&2){let e,t=p();m(),f((e=t.deliveryForm.get("fullName"))!=null&&e.hasError("required")?1:2)}}function Tc(i,n){i&1&&d(0," Enter your phone number. ")}function Vc(i,n){i&1&&d(0," Enter 10 digits starting with 0. ")}function Nc(i,n){if(i&1&&(a(0,"mat-error"),h(1,Tc,1,0)(2,Vc,1,0),s()),i&2){let e,t=p();m(),f((e=t.deliveryForm.get("phone"))!=null&&e.hasError("required")?1:2)}}function zc(i,n){i&1&&d(0," Enter your delivery address. ")}function Bc(i,n){i&1&&d(0," Include a house number, street name, suburb, and 4-digit postal code, separated by commas. ")}function Lc(i,n){if(i&1&&(a(0,"mat-error"),h(1,zc,1,0)(2,Bc,1,0),s()),i&2){let e,t=p();m(),f((e=t.deliveryForm.get("address"))!=null&&e.hasError("required")?1:2)}}function jc(i,n){i&1&&d(0,"Payment")}function Hc(i,n){i&1&&d(0," Enter your card number. ")}function Wc(i,n){i&1&&d(0," Enter exactly 10 digits with no spaces or other characters. ")}function Gc(i,n){if(i&1&&(a(0,"mat-error"),h(1,Hc,1,0)(2,Wc,1,0),s()),i&2){let e,t=p(2);m(),f((e=t.paymentForm.get("cardNumber"))!=null&&e.hasError("required")?1:2)}}function qc(i,n){i&1&&d(0," Enter the card expiry date. ")}function Uc(i,n){i&1&&d(0," The expiry year must be 2026 or later. ")}function Yc(i,n){i&1&&d(0," Enter an expiry date that has not passed. ")}function $c(i,n){i&1&&d(0," Enter a valid date in MM/YYYY format. ")}function Qc(i,n){if(i&1&&(a(0,"mat-error"),h(1,qc,1,0)(2,Uc,1,0)(3,Yc,1,0)(4,$c,1,0),s()),i&2){let e,t=p(2);m(),f((e=t.paymentForm.get("expiry"))!=null&&e.hasError("required")?1:(e=t.paymentForm.get("expiry"))!=null&&e.hasError("expiryYear")?2:(e=t.paymentForm.get("expiry"))!=null&&e.hasError("expiryPast")?3:4)}}function Xc(i,n){i&1&&d(0," Enter your CVV. ")}function Zc(i,n){i&1&&d(0," Enter exactly 3 digits with no other characters. ")}function Kc(i,n){if(i&1&&(a(0,"mat-error"),h(1,Xc,1,0)(2,Zc,1,0),s()),i&2){let e,t=p(2);m(),f((e=t.paymentForm.get("cvv"))!=null&&e.hasError("required")?1:2)}}function Jc(i,n){if(i&1&&(a(0,"div",19)(1,"mat-form-field",9)(2,"mat-label"),d(3,"Card Number"),s(),x(4,"input",34),h(5,Gc,3,1,"mat-error"),s(),a(6,"div",8)(7,"mat-form-field",35)(8,"mat-label"),d(9,"Expiry Date"),s(),x(10,"input",36),h(11,Qc,5,1,"mat-error"),s(),a(12,"mat-form-field",35)(13,"mat-label"),d(14,"CVV"),s(),x(15,"input",37),h(16,Kc,3,1,"mat-error"),s()()()),i&2){let e,t,r,o=p();m(5),f((e=o.paymentForm.get("cardNumber"))!=null&&e.invalid&&((e=o.paymentForm.get("cardNumber"))!=null&&e.touched)?5:-1),m(6),f((t=o.paymentForm.get("expiry"))!=null&&t.invalid&&((t=o.paymentForm.get("expiry"))!=null&&t.touched)?11:-1),m(5),f((r=o.paymentForm.get("cvv"))!=null&&r.invalid&&((r=o.paymentForm.get("cvv"))!=null&&r.touched)?16:-1)}}function em(i,n){i&1&&d(0,"Review")}function tm(i,n){i&1&&x(0,"mat-spinner",38)}function im(i,n){if(i&1&&(a(0,"div",30)(1,"div")(2,"span",39),d(3),s(),a(4,"span",40),d(5),s()(),a(6,"span",41),d(7),di(8,"currency"),s()()),i&2){let e=n.$implicit;m(3),re("",e.quantity,"x"),m(2),R(e.item.name),m(2),R(ci(8,3,e.item.price*e.quantity,"ZAR","R","1.2-2"))}}var nm="deliveryAddress";function rm(i){let n=typeof i.value=="string"?i.value.trim():"";if(!n)return null;let e=n.split(",").map(g=>g.trim()),t=e[0]??"",r=(e[1]??"").replace(/\b\d{4}\b/g,"").trim(),o=/^\d+[a-zA-Z]?(?:\s|$)/.test(t),c=t.replace(/^\d+[a-zA-Z]?\s*/,"").trim().length>0,u=e.slice(1).some(g=>/\b\d{4}\b/.test(g));return o&&c&&r&&u?null:{addressFormat:!0}}function om(i){let n=typeof i.value=="string"?i.value:"";if(!n)return null;let e=/^(0[1-9]|1[0-2])\/(\d{4})$/.exec(n);if(!e)return{expiryFormat:!0};let t=Number(e[1]),r=Number(e[2]);if(r<2026)return{expiryYear:!0};let o=new Date;return r<o.getFullYear()||r===o.getFullYear()&&t<o.getMonth()+1?{expiryPast:!0}:null}var Ln=class i{fb=l(hn);router=l(ce);cartService=l(lt);orderService=l(Ro);deliveryForm;paymentForm;deliveryFee=25;isSubmitting=!1;ngOnInit(){this.deliveryForm=this.fb.group({fullName:["",[q.required,q.pattern(/^\s*[\p{L}\p{M}]+(?:(?:\s+|['\u2019-])[\p{L}\p{M}]+)*\s*$/u)]],phone:["",[q.required,q.pattern(/^0\d{9}$/)]],address:[sessionStorage.getItem(nm)??"",[q.required,rm]],notes:[""]}),this.paymentForm=this.fb.group({paymentMethod:["card",q.required],cardNumber:["",[q.required,q.pattern(/^\d{10}$/)]],expiry:["",[q.required,om]],cvv:["",[q.required,q.pattern(/^\d{3}$/)]]}),this.paymentForm.get("paymentMethod")?.valueChanges.subscribe(n=>{let e=this.paymentForm.get("cardNumber"),t=this.paymentForm.get("expiry"),r=this.paymentForm.get("cvv");n==="card"?(e?.setValidators([q.required]),t?.setValidators([q.required]),r?.setValidators([q.required])):(e?.clearValidators(),t?.clearValidators(),r?.clearValidators()),e?.updateValueAndValidity(),t?.updateValueAndValidity(),r?.updateValueAndValidity()})}get grandTotal(){return this.cartService.totalAmount()+this.deliveryFee}placeOrder(){if(this.deliveryForm.invalid||this.paymentForm.invalid)return;this.isSubmitting=!0;let n={delivery:this.deliveryForm.value,payment:{paymentMethod:this.paymentForm.value.paymentMethod},items:this.cartService.cartItems(),subtotal:this.cartService.totalAmount(),deliveryFee:this.deliveryFee,total:this.grandTotal};this.orderService.placeOrder(n).subscribe({next:e=>{let t=e.orderId;this.cartService.clearCart(),this.router.navigate(["/order-success"],{state:{orderId:t}})},error:e=>{console.error("Error placing order:",e),alert("Failed to place order. Please try again."),this.isSubmitting=!1}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-checkout"]],decls:100,vars:36,consts:[["stepper",""],[1,"checkout-container"],[1,"checkout-layout"],[1,"stepper-section"],["linear","true"],[3,"stepControl"],["matStepLabel",""],[1,"step-form",3,"formGroup"],[1,"form-row"],["appearance","fill",1,"full-width"],["matInput","","formControlName","fullName","placeholder","e.g. Karabo Molefe"],["matInput","","type","tel","inputmode","numeric","maxlength","10","formControlName","phone","placeholder","e.g. 0821234567"],["matInput","","formControlName","address","rows","2","placeholder","House number, street name, suburb, postal code"],["matInput","","formControlName","notes","placeholder","e.g. Call when outside"],[1,"stepper-actions"],["type","button","mat-flat-button","","matStepperNext","",1,"action-btn",3,"disabled"],["formControlName","paymentMethod",1,"payment-options"],["value","card"],["value","cash"],[1,"card-details"],["type","button","mat-stroked-button","","matStepperPrevious",""],[1,"review-step"],[1,"review-box"],["type","button","mat-stroked-button","","matStepperPrevious","",3,"disabled"],["type","button","mat-flat-button","",1,"action-btn","place-order-btn",3,"click","disabled"],[1,"btn-content"],["diameter","20","color","accent",4,"ngIf"],[1,"summary-section"],[1,"summary-card"],[1,"items-list"],[1,"summary-item"],[1,"divider"],[1,"totals-row"],[1,"totals-row","grand-total"],["matInput","","type","text","inputmode","numeric","maxlength","10","formControlName","cardNumber","placeholder","10 digits"],["appearance","fill",1,"half-width"],["matInput","","type","text","inputmode","numeric","maxlength","7","formControlName","expiry","placeholder","MM/YYYY"],["matInput","","type","text","inputmode","numeric","maxlength","3","formControlName","cvv","placeholder","123"],["diameter","20","color","accent"],[1,"item-qty"],[1,"item-name"],[1,"item-price"]],template:function(e,t){if(e&1&&(a(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2"),d(4,"Complete Your Order"),s(),a(5,"mat-stepper",4,0)(7,"mat-step",5),de(8,Fc,1,0,"ng-template",6),a(9,"form",7)(10,"div",8)(11,"mat-form-field",9)(12,"mat-label"),d(13,"Full Name"),s(),x(14,"input",10),h(15,Ic,3,1,"mat-error"),s(),a(16,"mat-form-field",9)(17,"mat-label"),d(18,"Phone Number"),s(),x(19,"input",11),h(20,Nc,3,1,"mat-error"),s()(),a(21,"mat-form-field",9)(22,"mat-label"),d(23,"Delivery Address"),s(),x(24,"textarea",12),h(25,Lc,3,1,"mat-error"),s(),a(26,"mat-form-field",9)(27,"mat-label"),d(28,"Delivery Notes / Special Instructions"),s(),x(29,"input",13),s(),a(30,"div",14)(31,"button",15),d(32," Continue to Payment "),s()()()(),a(33,"mat-step",5),de(34,jc,1,0,"ng-template",6),a(35,"form",7)(36,"mat-radio-group",16)(37,"mat-radio-button",17),d(38,"Credit / Debit Card (PayFast / Yoco)"),s(),a(39,"mat-radio-button",18),d(40,"Cash on Delivery"),s()(),h(41,Jc,17,3,"div",19),a(42,"div",14)(43,"button",20),d(44,"Back"),s(),a(45,"button",15),d(46," Review Order "),s()()()(),a(47,"mat-step"),de(48,em,1,0,"ng-template",6),a(49,"div",21)(50,"h3"),d(51,"Confirm Details"),s(),a(52,"div",22)(53,"p")(54,"strong"),d(55,"Deliver To:"),s(),d(56),s(),a(57,"p")(58,"strong"),d(59,"Address:"),s(),d(60),s(),a(61,"p")(62,"strong"),d(63,"Payment Method:"),s(),d(64),s()(),a(65,"div",14)(66,"button",23),d(67,"Back"),s(),a(68,"button",24),y("click",function(){return t.placeOrder()}),a(69,"div",25),de(70,tm,1,0,"mat-spinner",26),a(71,"span"),d(72),s()()()()()()()(),a(73,"div",27)(74,"mat-card",28)(75,"h3"),d(76,"Order Summary"),s(),a(77,"div",29),Ve(78,im,9,8,"div",30,Ui),s(),x(80,"hr",31),a(81,"div",32)(82,"span"),d(83,"Subtotal"),s(),a(84,"span"),d(85),di(86,"currency"),s()(),a(87,"div",32)(88,"span"),d(89,"Delivery Fee"),s(),a(90,"span"),d(91),di(92,"currency"),s()(),x(93,"hr",31),a(94,"div",33)(95,"span"),d(96,"Total"),s(),a(97,"span"),d(98),di(99,"currency"),s()()()()()()),e&2){let r,o,c,u;m(7),v("stepControl",t.deliveryForm),m(2),v("formGroup",t.deliveryForm),m(6),f((r=t.deliveryForm.get("fullName"))!=null&&r.invalid&&((r=t.deliveryForm.get("fullName"))!=null&&r.touched)?15:-1),m(5),f((o=t.deliveryForm.get("phone"))!=null&&o.invalid&&((o=t.deliveryForm.get("phone"))!=null&&o.touched)?20:-1),m(5),f((c=t.deliveryForm.get("address"))!=null&&c.invalid&&((c=t.deliveryForm.get("address"))!=null&&c.touched)?25:-1),m(6),v("disabled",t.deliveryForm.invalid),m(2),v("stepControl",t.paymentForm),m(2),v("formGroup",t.paymentForm),m(6),f(((u=t.paymentForm.get("paymentMethod"))==null?null:u.value)==="card"?41:-1),m(4),v("disabled",t.paymentForm.invalid),m(11),to(" ",t.deliveryForm.value.fullName," (",t.deliveryForm.value.phone,")"),m(4),re(" ",t.deliveryForm.value.address),m(4),re(" ",t.paymentForm.value.paymentMethod==="card"?"Online Card Payment":"Cash on Delivery"),m(2),v("disabled",t.isSubmitting),m(2),v("disabled",t.isSubmitting||t.deliveryForm.invalid||t.paymentForm.invalid),m(2),v("ngIf",t.isSubmitting),m(2),R(t.isSubmitting?"Placing Order...":"Place Order (R"+t.grandTotal+")"),m(6),Ne(t.cartService.cartItems()),m(7),R(ci(86,21,t.cartService.totalAmount(),"ZAR","R","1.2-2")),m(6),R(ci(92,26,t.deliveryFee,"ZAR","R","1.2-2")),m(7),R(ci(99,31,t.grandTotal,"ZAR","R","1.2-2"))}},dependencies:[ve,mo,fn,ot,De,Ge,rt,pr,ht,Ci,fs,Vr,Bi,Nr,ps,hs,_e,Ee,Ce,Mi,Ue,qe,Y,U,vs,zr,Bn,X,st,at,xs,ys,uo],styles:[".checkout-container[_ngcontent-%COMP%]{max-width:1200px;margin:40px auto;padding:0 20px}.checkout-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 380px;gap:32px}.stepper-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;font-weight:800;color:#1e293b;margin-bottom:24px}  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done{background-color:#236845!important;color:#fff!important}  .mat-mdc-form-field.mat-focused .mdc-floating-label{color:#236845!important}.step-form[_ngcontent-%COMP%]{padding:20px 0;display:flex;flex-direction:column;gap:12px}.form-row[_ngcontent-%COMP%]{display:flex;gap:16px}.full-width[_ngcontent-%COMP%]{width:100%}.half-width[_ngcontent-%COMP%]{flex:1}.payment-options[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}.stepper-actions[_ngcontent-%COMP%]{display:flex;gap:12px;margin-top:24px}.action-btn[_ngcontent-%COMP%]{background-color:#236845!important;color:#fff!important;font-weight:700!important;border-radius:8px!important;height:48px!important;padding:0 24px!important}.action-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.summary-card[_ngcontent-%COMP%]{padding:24px;border-radius:12px!important;background-color:#f8fafc!important;box-shadow:0 4px 16px #0000000d!important}.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#0f172a;margin-bottom:20px}.summary-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-size:15px}.item-qty[_ngcontent-%COMP%]{font-weight:700;color:#236845;margin-right:8px}.divider[_ngcontent-%COMP%]{border:none;border-top:1px solid #e2e8f0;margin:16px 0}.totals-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:15px;color:#475569;margin-bottom:8px}.grand-total[_ngcontent-%COMP%]{font-size:18px;font-weight:800;color:#0f172a}@media(max-width:900px){.checkout-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}}.btn-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.place-order-btn[_ngcontent-%COMP%]{background-color:#236845!important;color:#fff!important;min-width:180px}.place-order-btn[disabled][_ngcontent-%COMP%]{background-color:#a3c4b2!important;opacity:.7}"]})};var ni=(()=>{class i{get vertical(){return this._vertical}set vertical(e){this._vertical=ut(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ut(e)}_inset=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(I("aria-orientation",r.vertical?"vertical":"horizontal"),w("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})(),ri=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[N]})}return i})();var jn=class i{route=l(Xi);router=l(ce);orderId="";estimatedTime="30 - 45 mins";ngOnInit(){let n=history.state;n&&n.orderId?this.orderId=n.orderId:this.orderId=this.route.snapshot.queryParamMap.get("orderId")||"ORD-"+Math.floor(1e5+Math.random()*9e5)}goToHome(){this.router.navigate(["/"])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-order-success"]],decls:31,vars:2,consts:[[1,"success-container"],[1,"success-card"],[1,"icon-header"],[1,"check-circle"],[1,"check-icon"],[1,"sub-heading"],[1,"order-details"],[1,"detail-row"],[1,"detail-label"],[1,"detail-value","order-id"],[1,"detail-value","highlight"],[1,"status-badge"],[1,"card-actions"],["mat-flat-button","",1,"primary-btn",3,"click"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"div",3)(4,"mat-icon",4),d(5,"check_circle"),s()(),a(6,"h2"),d(7,"Order Placed Successfully!"),s(),a(8,"p",5),d(9,"Thank you for your order. We are preparing your kota now."),s()(),x(10,"mat-divider"),a(11,"div",6)(12,"div",7)(13,"span",8),d(14,"Order Number"),s(),a(15,"span",9),d(16),s()(),a(17,"div",7)(18,"span",8),d(19,"Estimated Delivery Time"),s(),a(20,"span",10),d(21),s()(),a(22,"div",7)(23,"span",8),d(24,"Status"),s(),a(25,"span",11),d(26,"Preparing"),s()()(),x(27,"mat-divider"),a(28,"div",12)(29,"button",13),y("click",function(){return t.goToHome()}),d(30," Back to Menu "),s()()()()),e&2&&(m(16),re("#",t.orderId),m(5),R(t.estimatedTime))},dependencies:[ve,st,at,Y,U,X,oe,ri,ni],styles:[".success-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:80vh;padding:24px 16px;background-color:#f8f9fa}.success-card[_ngcontent-%COMP%]{max-width:520px;width:100%;padding:32px 24px;text-align:center;border-radius:12px;box-shadow:0 4px 20px #00000014}.icon-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:24px}.check-circle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:72px;height:72px;background-color:#e8f5e9;border-radius:50%;margin-bottom:16px}.check-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:#2e7d32}.icon-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.6rem;font-weight:700;color:#212121}.sub-heading[_ngcontent-%COMP%]{margin:0;color:#666;font-size:.95rem}.order-details[_ngcontent-%COMP%]{padding:24px 0;display:flex;flex-direction:column;gap:16px}.detail-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.detail-label[_ngcontent-%COMP%]{color:#757575;font-size:.95rem}.detail-value[_ngcontent-%COMP%]{font-weight:600;color:#212121}.order-id[_ngcontent-%COMP%]{font-family:monospace;font-size:1rem}.highlight[_ngcontent-%COMP%]{color:#2e7d32}.status-badge[_ngcontent-%COMP%]{background-color:#fff3e0;color:#e65100;padding:4px 12px;border-radius:16px;font-size:.85rem;font-weight:600}.card-actions[_ngcontent-%COMP%]{margin-top:24px;display:flex;justify-content:center}.primary-btn[_ngcontent-%COMP%]{width:70%;padding:22px 0;font-size:1rem;border-radius:8px;background-color:#1b5e20!important;color:#fff!important}.primary-btn[_ngcontent-%COMP%]:hover{background-color:#2e7d32!important}"]})};var Lr=()=>{let i=l(ge),n=l(ce);return i.isAuthenticated()?!0:n.createUrlTree(["/signin"])},Cs=()=>{let i=l(ge),n=l(ce),e=i.currentUser();return i.isAuthenticated()&&e?.role.toUpperCase()==="ADMIN"?!0:n.createUrlTree([i.isAuthenticated()?"/":"/signin"])};var Ms=[{path:"",component:En},{path:"menu",component:Fn},{path:"about",component:An},{path:"contact",component:Rn},{path:"signin",component:In},{path:"register",component:Tn},{path:"forgot-password",component:Vn},{path:"checkout",component:Ln,canActivate:[Lr]},{path:"order-success",component:jn},{path:"dashboard",canActivate:[Lr],loadComponent:()=>import("./chunk-JOKMK2AV.js").then(i=>i.UserDashboard)},{path:"admin",canActivate:[Cs],loadComponent:()=>import("./chunk-G4PEHQNQ.js").then(i=>i.AdminDashboard)},{path:"**",redirectTo:""}];var ws=(i,n)=>{let t=l(ge).getToken();if(t){let r=i.clone({setHeaders:{Authorization:`Bearer ${t}`}});return n(r)}return n(i)};var Ss={providers:[yo(Ms),fo(go([ws]))]};var am=["*",[["mat-toolbar-row"]]],sm=["*","mat-toolbar-row"],lm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),ks=(()=>{class i{_elementRef=l(F);_platform=l(me);_document=l(he);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&ke(o,lm,5),t&2){let c;C(c=M())&&(r._toolbarRows=c)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(tt(r.color?"mat-"+r.color:""),w("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:sm,decls:2,vars:0,template:function(t,r){t&1&&(K(am),V(0),V(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Ds=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[N]})}return i})();var Es="mat-badge-content",cm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return i})(),Os=(()=>{class i{_ngZone=l(j);_elementRef=l(F);_ariaDescriber=l(Oo);_renderer=l(le);_animationsDisabled=xe();_idGenerator=l(ie);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=l(wo);_document=l(he);constructor(){let e=l(Ae);e.load(cm),e.load(Vt)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(Es),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Es}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=b({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,r){t&2&&w("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",k],disabled:[2,"matBadgeDisabled","disabled",k],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",k]}})}return i})(),Ps=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[So,N]})}return i})();var um=()=>({exact:!0});function pm(i,n){i&1&&(a(0,"span",1),d(1,"KwaJozi"),s())}function hm(i,n){i&1&&(a(0,"span",2),d(1,"KwaJozi"),s())}function fm(i,n){i&1&&(a(0,"a",5),d(1,"Home"),s()),i&2&&v("routerLinkActiveOptions",no(1,um))}function gm(i,n){if(i&1&&(a(0,"a",11),d(1," My Orders "),s()),i&2){let e=p(2);v("matBadge",e.orderNotificationService.unreadCount())("matBadgeHidden",e.orderNotificationService.unreadCount()===0)}}function _m(i,n){if(i&1&&(a(0,"a",9),d(1,"About"),s(),a(2,"a",10),d(3,"Contact"),s(),h(4,gm,2,2,"a",11)),i&2){let e=p();m(4),f(e.authService.currentUser()?4:-1)}}function vm(i,n){if(i&1){let e=fe();a(0,"button",12),y("click",function(){ee(e);let r=p();return te(r.cartService.toggleCart())}),a(1,"mat-icon",13),d(2," shopping_cart "),s()()}if(i&2){let e=p();m(),v("matBadge",e.cartService.cartCount())("matBadgeHidden",e.cartService.cartCount()===0)}}function bm(i,n){if(i&1){let e=fe();a(0,"span",14),d(1),s(),a(2,"button",15),y("click",function(){ee(e);let r=p();return te(r.onLogout())}),a(3,"mat-icon"),d(4,"logout"),s()()}if(i&2){let e,t=p();m(),re("Hi, ",(e=t.authService.currentUser())==null?null:e.full_name)}}function ym(i,n){i&1&&(a(0,"a",8),d(1,"Sign In"),s())}var Hn=class i{cartService=l(lt);authService=l(ge);orderNotificationService=l(Ji);router=l(ce);isAdminView=Z(()=>this.authService.currentUser()?.role?.toUpperCase()==="ADMIN");onLogout(){this.authService.logout(),this.router.navigate(["/signin"])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-navbar"]],decls:12,vars:5,consts:[["color","primary",1,"navbar"],[1,"logo"],["routerLink","/",1,"logo"],[1,"spacer"],[1,"nav-links"],["mat-button","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["mat-button","","routerLink","/menu","routerLinkActive","active"],["mat-icon-button","","aria-label","Open Shopping Cart"],["mat-raised-button","","color","accent","routerLink","/signin"],["mat-button","","routerLink","/about","routerLinkActive","active"],["mat-button","","routerLink","/contact","routerLinkActive","active"],["mat-button","","routerLink","/dashboard","routerLinkActive","active","matBadgeColor","accent","aria-label","My Orders, unread updates",3,"matBadge","matBadgeHidden"],["mat-icon-button","","aria-label","Open Shopping Cart",3,"click"],["matBadgeColor","accent",3,"matBadge","matBadgeHidden"],[1,"user-greeting"],["mat-icon-button","","type","button","aria-label","Logout",1,"logout-btn",3,"click"]],template:function(e,t){e&1&&(a(0,"mat-toolbar",0),h(1,pm,2,0,"span",1)(2,hm,2,0,"span",2),x(3,"span",3),a(4,"nav",4),h(5,fm,2,2,"a",5),a(6,"a",6),d(7,"Menu"),s(),h(8,_m,5,1),h(9,vm,3,2,"button",7),h(10,bm,5,1)(11,ym,2,0,"a",8),s()()),e&2&&(m(),f(t.isAdminView()?1:2),m(4),f(t.isAdminView()?-1:5),m(3),f(t.isAdminView()?-1:8),m(),f(t.isAdminView()?-1:9),m(),f(t.authService.currentUser()?10:11))},dependencies:[ve,We,bo,Ds,ks,Y,U,_t,X,oe,Ps,Os],styles:['.navbar[_ngcontent-%COMP%]{background-color:var(--primary-color)!important;color:#fff;position:sticky;top:0;z-index:997;box-shadow:var(--shadow-sm);padding:0 24px;display:flex;align-items:center;height:64px}.logo[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:700;letter-spacing:-.3px;cursor:pointer;color:#fff;-webkit-user-select:none;user-select:none}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.nav-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.nav-links[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]{color:#ffffffe6;font-weight:500;border-radius:var(--border-radius-btn);transition:var(--transition-smooth)}.nav-links[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   a[mat-button].active[_ngcontent-%COMP%]{color:#fff;background-color:#ffffff26}.user-greeting[_ngcontent-%COMP%]{font-size:.95rem;font-weight:500;margin:0 4px;color:#fffffff2}.nav-links[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]{border-color:#ffffff80!important;color:#fff!important;border-radius:var(--border-radius-btn)}.nav-links[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover{background-color:#e53e3e33!important;border-color:var(--accent-color)!important}a[routerLink="/signin"][_ngcontent-%COMP%]{background-color:#236845!important;color:#fff!important}a[routerLink="/signin"][_ngcontent-%COMP%]:hover{background-color:#1b5236!important}@media(max-width:768px){.navbar[_ngcontent-%COMP%]{padding:0 16px}.user-greeting[_ngcontent-%COMP%]{display:none}}.logout-btn[_ngcontent-%COMP%]{color:#e53e3e!important;background-color:transparent!important}.logout-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#e53e3e!important;font-size:20px!important;width:20px!important;height:20px!important}']})};var xm=(i,n)=>n.item.id;function Cm(i,n){i&1&&(a(0,"div",5)(1,"mat-icon",10),d(2,"shopping_cart"),s(),a(3,"p",11),d(4,"Your cart is currently empty."),s()())}function Mm(i,n){if(i&1){let e=fe();a(0,"div",12),x(1,"img",13),a(2,"div",14)(3,"h5",15),d(4),s(),a(5,"p",16),d(6),s(),a(7,"div",17)(8,"button",18),y("click",function(){let r=ee(e).$implicit,o=p(2);return te(o.cartService.decrementQuantity(r.item.id))}),a(9,"mat-icon"),d(10,"remove_circle_outline"),s()(),a(11,"span",19),d(12),s(),a(13,"button",20),y("click",function(){let r=ee(e).$implicit,o=p(2);return te(o.cartService.incrementQuantity(r.item.id))}),a(14,"mat-icon"),d(15,"add_circle_outline"),s()()()(),a(16,"button",21),y("click",function(){let r=ee(e).$implicit,o=p(2);return te(o.cartService.removeFromCart(r.item.id))}),a(17,"mat-icon"),d(18,"delete_outline"),s()()(),x(19,"mat-divider")}if(i&2){let e=n.$implicit;m(),v("src",e.item.imageUrl,Wi)("alt",e.item.name),m(3),R(e.item.name),m(2),re("R",e.item.price.toFixed(2)),m(6),R(e.quantity)}}function wm(i,n){if(i&1&&Ve(0,Mm,20,5,null,null,xm),i&2){let e=p();Ne(e.cartService.cart())}}var Wn=class i{cartService=l(lt);router=l(ce);onCheckout(){this.cartService.toggleCart(),this.router.navigate(["/checkout"])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-cart"]],decls:19,vars:7,consts:[[1,"cart-overlay",3,"click"],[1,"cart-drawer"],[1,"cart-header"],["mat-icon-button","","aria-label","Close cart",3,"click"],[1,"cart-body"],[1,"empty-cart-state"],[1,"cart-footer"],[1,"total-row"],[1,"total-amount"],["mat-raised-button","","color","primary",1,"checkout-btn",3,"click","disabled"],[1,"empty-icon"],[1,"empty-msg"],[1,"cart-item"],[1,"cart-item-img",3,"src","alt"],[1,"item-details"],[1,"item-title"],[1,"item-price"],[1,"quantity-controls"],["mat-icon-button","","color","primary","aria-label","Decrease quantity",1,"qty-btn",3,"click"],[1,"quantity-count"],["mat-icon-button","","color","primary","aria-label","Increase quantity",1,"qty-btn",3,"click"],["mat-icon-button","","color","warn","aria-label","Remove item",3,"click"]],template:function(e,t){e&1&&(a(0,"div",0),y("click",function(){return t.cartService.toggleCart()}),s(),a(1,"div",1)(2,"div",2)(3,"h3"),d(4,"Your Cart"),s(),a(5,"button",3),y("click",function(){return t.cartService.toggleCart()}),a(6,"mat-icon"),d(7,"close"),s()()(),a(8,"div",4),h(9,Cm,5,0,"div",5)(10,wm,2,0),s(),a(11,"div",6)(12,"div",7)(13,"span"),d(14,"Total:"),s(),a(15,"span",8),d(16),s()(),a(17,"button",9),y("click",function(){return t.onCheckout()}),d(18," Checkout "),s()()()),e&2&&(w("open",t.cartService.isCartOpen()),m(),w("open",t.cartService.isCartOpen()),m(8),f(t.cartService.cart().length===0?9:10),m(7),re("R",t.cartService.cartTotal().toFixed(2)),m(),v("disabled",t.cartService.cart().length===0))},dependencies:[ve,Y,U,_t,X,oe,ri,ni],styles:[".cart-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#00000080;z-index:1999;opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease}.cart-overlay.open[_ngcontent-%COMP%]{opacity:1;visibility:visible}.cart-drawer[_ngcontent-%COMP%]{position:fixed;top:0;right:-400px;width:360px;height:100vh;background-color:#fff;color:#1e293b;box-shadow:-5px 0 15px #0003;z-index:2000;display:flex;flex-direction:column;transition:right .3s ease}.cart-drawer.open[_ngcontent-%COMP%]{right:0}.cart-header[_ngcontent-%COMP%]{padding:16px 20px;background-color:#236845;color:#fff;display:flex;justify-content:space-between;align-items:center}.cart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.2rem;font-weight:700}.cart-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff!important}.cart-body[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:20px}.empty-cart-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#94a3b8}.empty-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:12px}.empty-msg[_ngcontent-%COMP%]{margin:0;font-size:.95rem}.cart-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 0}.cart-item-img[_ngcontent-%COMP%]{width:56px;height:56px;object-fit:cover;border-radius:8px}.item-details[_ngcontent-%COMP%]{flex:1}.item-title[_ngcontent-%COMP%]{margin:0 0 4px;color:#236845;font-size:.95rem;font-weight:600}.item-price[_ngcontent-%COMP%]{margin:0 0 6px;font-weight:700;color:#0f172a}.quantity-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.qty-btn[_ngcontent-%COMP%]{width:32px!important;height:32px!important;color:#236845!important}.quantity-count[_ngcontent-%COMP%]{font-weight:700;padding:0 6px;min-width:20px;text-align:center;color:#1e293b}.cart-footer[_ngcontent-%COMP%]{padding:20px;border-top:1px solid #e2e8f0;background-color:#f8fafc}.total-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:1.1rem;font-weight:700;color:#0f172a;margin-bottom:16px}.total-amount[_ngcontent-%COMP%]{color:#236845;font-weight:800}.checkout-btn[_ngcontent-%COMP%]{width:100%;height:48px!important;background-color:#236845!important;color:#fff!important;font-size:16px!important;font-weight:700!important;border-radius:8px!important;text-transform:uppercase;letter-spacing:.5px;transition:background-color .2s ease}.checkout-btn[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#1b5236!important}.checkout-btn[disabled][_ngcontent-%COMP%]{background-color:#cbd5e1!important;color:#94a3b8!important}"]})};var Gn=class i{currentYear=new Date().getFullYear();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-footer"]],decls:33,vars:1,consts:[[1,"footer"],[1,"footer-container"],[1,"footer-section","brand-section"],[1,"footer-section","links-section"],[1,"quick-links"],["mat-button","","routerLink","/"],["mat-button","","routerLink","/menu"],["mat-button","","routerLink","/about"],["mat-button","","routerLink","/contact"],[1,"footer-section","social-section"],[1,"social-links"],["mat-button","","href","https://facebook.com","target","_blank","rel","noopener"],["mat-button","","href","https://instagram.com","target","_blank","rel","noopener"],["mat-button","","href","https://tiktok.com","target","_blank","rel","noopener"],[1,"copyright"]],template:function(e,t){e&1&&(a(0,"footer",0),x(1,"mat-divider"),a(2,"div",1)(3,"div",2)(4,"h3"),d(5,"KwaJozi"),s(),a(6,"p"),d(7,"Feed your kota cravings."),s()(),a(8,"div",3)(9,"h3"),d(10,"Quick Links"),s(),a(11,"nav",4)(12,"a",5),d(13,"Home"),s(),a(14,"a",6),d(15,"Menu"),s(),a(16,"a",7),d(17,"About"),s(),a(18,"a",8),d(19,"Contact"),s()()(),a(20,"div",9)(21,"h3"),d(22,"Follow Us"),s(),a(23,"div",10)(24,"a",11),d(25,"Facebook"),s(),a(26,"a",12),d(27,"Instagram"),s(),a(28,"a",13),d(29,"TikTok"),s()()()(),x(30,"mat-divider"),a(31,"p",14),d(32),s()()),e&2&&(m(32),re("\xA9 ",t.currentYear," KwaJozi. All Rights Reserved."))},dependencies:[We,Y,U,ri,ni,X],styles:["[_nghost-%COMP%]{display:block}.footer[_ngcontent-%COMP%]{background-color:var(--primary-color, #2f855a);color:#fff;margin-top:0!important;padding-top:0!important;box-shadow:0 -2px 8px #0000000d}.footer[_ngcontent-%COMP%]     .mat-divider{border-top-color:#fff3!important}.footer-container[_ngcontent-%COMP%]{max-width:var(--container-max-width, 1200px);margin:0 auto;padding:24px 24px 16px;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}.footer-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:1rem;font-weight:700;margin-top:0;margin-bottom:8px;letter-spacing:-.3px}.brand-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#ffffffd9;margin:0;font-size:.85rem;line-height:1.4}.quick-links[_ngcontent-%COMP%], .social-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:2px}.quick-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:2px 6px!important;min-width:unset;color:#ffffffd9!important;font-size:.85rem;font-weight:500;border-radius:var(--border-radius-btn, 6px)!important;transition:var(--transition-smooth, all .2s ease)}.quick-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff!important;background-color:#ffffff26!important}.copyright[_ngcontent-%COMP%]{text-align:center;padding:12px 20px;margin:0;font-size:.78rem;color:#ffffffbf}@media(max-width:600px){.footer-container[_ngcontent-%COMP%]{padding:20px 16px 12px;gap:16px}}"]})};function Sm(i,n){i&1&&x(0,"app-cart")}function km(i,n){i&1&&x(0,"app-footer")}var qn=class i{authService=l(ge);orderNotificationService=l(Ji);isAdminView=Z(()=>this.authService.currentUser()?.role?.toUpperCase()==="ADMIN");title="eatery-app";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-root"]],decls:5,vars:2,template:function(e,t){e&1&&(x(0,"app-navbar"),h(1,Sm,1,0,"app-cart"),a(2,"main"),x(3,"router-outlet"),s(),h(4,km,1,0,"app-footer")),e&2&&(m(),f(t.isAdminView()?-1:1),m(3),f(t.isAdminView()?-1:4))},dependencies:[vo,Hn,Wn,Gn],encapsulation:2})};po(qn,Ss).catch(i=>console.error(i));
