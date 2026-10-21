import{$ as yi,$a as D,$b as Tl,A as Ot,Aa as W,Ab as pt,B as vi,Ba as Bt,Bb as ht,C as sl,Ca as va,Cb as Sl,D as Zt,Da as bl,Db as he,E as ga,Ea as ya,Eb as El,F as _a,Fa as b,Fb as Ci,G as ba,Ga as N,Gb as kl,H as Rr,Ha as v,I as Ie,Ia as re,J as De,Ja as Ee,K as ee,Ka as vl,Kb as gn,L as ll,La as yl,Lb as Dl,M as Ze,Ma as hn,Mb as Z,N as _e,Na as Nr,Nb as fe,O as cl,Oa as xl,Ob as Ol,P as Rt,Pa as Fn,Pb as Nn,Q as C,Qa as H,Qb as zr,R as T,Rb as wi,S as dl,Sa as S,Sb as Rl,T as x,Ta as E,Tb as ge,U as Ir,Ua as Lr,Ub as R,V as l,Va as Vr,Vb as $e,W as ul,Wa as lt,Wb as Il,X as ot,Xa as ct,Xb as Al,Y as at,Ya as w,Yb as Ca,Z as Ce,Za as c,Zb as Pl,_ as we,_a as d,_b as Ln,a as g,aa as ml,ab as Jt,ac as _n,b as K,ba as ie,bb as en,c as Te,ca as ne,cb as It,d as il,da as xi,db as Ge,dc as Le,e as Qt,ea as pl,eb as Fe,ec as Fl,f as M,fa as U,fb as et,fc as Nl,g as qe,ga as z,gb as k,h as We,ha as Ar,hb as y,hc as Ll,i as Be,ia as L,ib as oe,ic as Vl,j as V,ja as pn,jb as j,jc as zl,k as rl,ka as Me,kb as Ne,kc as Bl,l as Sr,la as je,lb as Oe,lc as jl,m as ol,ma as hl,mb as A,mc as Ul,n as J,na as F,nb as P,nc as ke,o as Er,oa as Xt,ob as Cl,oc as jt,p as zt,pa as Pr,pb as wl,pc as Hl,q as ha,qa as fl,qb as xa,qc as Ut,r as kr,ra as Tr,rb as dt,rc as G,s as An,sa as gl,sb as fn,sc as Se,t as al,ta as Fr,tb as O,tc as me,u as Pn,ua as _l,ub as ut,uc as ft,v as xe,va as p,vb as u,vc as ql,w as fa,wa as Xe,wb as $,x as Dr,xa as st,xb as ue,y as Or,ya as Je,yb as Ml,z as Tn,za as de,zb as mt}from"./chunk-O357MV5M.js";var B="primary",Vi=Symbol("RouteTitle"),ka=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function vn(n){return new ka(n)}function wa(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Zl(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let m={},h=n.slice(0,t.length);return wa(t,h,m)?{consumed:h,posParams:m}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!wa(o,n.slice(0,o.length),s)||!wa(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function Wr(n){return new Promise((i,e)=>{n.pipe(Zt()).subscribe({next:t=>i(t),error:t=>e(t)})})}function hm(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!At(n[e],i[e]))return!1;return!0}function At(n,i){let e=n?Da(n):void 0,t=i?Da(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Xl(n[r],i[r]))return!1;return!0}function Da(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Xl(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function fm(n){return n.length>0?n[n.length-1]:null}function Cn(n){return Sr(n)?n:Nr(n)?Be(Promise.resolve(n)):V(n)}function Jl(n){return Sr(n)?Wr(n):Promise.resolve(n)}var gm={exact:tc,subset:nc},ec={exact:_m,subset:bm,ignored:()=>!0},Ua={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Oi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ha(n,i,e){let t=n instanceof Ue?n:i.parseUrl(n);return fe(()=>Oa(i.lastSuccessfulNavigation()?.finalUrl??new Ue,t,g(g({},Oi),e)))}function Oa(n,i,e){return gm[e.paths](n.root,i.root,e.matrixParams)&&ec[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function _m(n,i){return At(n,i)}function tc(n,i,e){if(!bn(n.segments,i.segments)||!Ur(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!tc(n.children[t],i.children[t],e))return!1;return!0}function bm(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Xl(n[e],i[e]))}function nc(n,i,e){return ic(n,i,i.segments,e)}function ic(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!bn(r,e)||i.hasChildren()||!Ur(r,e,t))}else if(n.segments.length===e.length){if(!bn(n.segments,e)||!Ur(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!nc(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!bn(n.segments,r)||!Ur(n.segments,r,t)||!n.children[B]?!1:ic(n.children[B],i,o,t)}}function Ur(n,i,e){return i.every((t,r)=>ec[e](n[r].parameters,t.parameters))}var Ue=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Q([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=vn(this.queryParams),this._queryParamMap}toString(){return xm.serialize(this)}},Q=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Hr(this)}},tn=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=vn(this.parameters),this._parameterMap}toString(){return oc(this)}};function vm(n,i){return bn(n,i)&&n.every((e,t)=>At(e.parameters,i[t].parameters))}function bn(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function ym(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===B&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==B&&(e=e.concat(i(r,t)))}),e}var Gn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>new nn,providedIn:"root"})}return n})(),nn=class{parse(i){let e=new Ia(i);return new Ue(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Mi(i.root,!0)}`,t=Mm(i.queryParams),r=typeof i.fragment=="string"?`#${Cm(i.fragment)}`:"";return`${e}${t}${r}`}},xm=new nn;function Hr(n){return n.segments.map(i=>oc(i)).join("/")}function Mi(n,i){if(!n.hasChildren())return Hr(n);if(i){let e=n.children[B]?Mi(n.children[B],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==B&&t.push(`${r}:${Mi(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=ym(n,(t,r)=>r===B?[Mi(n.children[B],!1)]:[`${r}:${Mi(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[B]!=null?`${Hr(n)}/${e[0]}`:`${Hr(n)}/(${e.join("//")})`}}function rc(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Br(n){return rc(n).replace(/%3B/gi,";")}function Cm(n){return encodeURI(n)}function Ra(n){return rc(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function qr(n){return decodeURIComponent(n)}function Wl(n){return qr(n.replace(/\+/g,"%20"))}function oc(n){return`${Ra(n.path)}${wm(n.parameters)}`}function wm(n){return Object.entries(n).map(([i,e])=>`;${Ra(i)}=${Ra(e)}`).join("")}function Mm(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Br(e)}=${Br(r)}`).join("&"):`${Br(e)}=${Br(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Sm=/^[^\/()?;#]+/;function Ma(n){let i=n.match(Sm);return i?i[0]:""}var Em=/^[^\/()?;=#]+/;function km(n){let i=n.match(Em);return i?i[0]:""}var Dm=/^[^=?&#]+/;function Om(n){let i=n.match(Dm);return i?i[0]:""}var Rm=/^[^&#]+/;function Im(n){let i=n.match(Rm);return i?i[0]:""}var Ia=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new _e(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[B]=new Q(e,t)),r}parseSegment(){let i=Ma(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new _e(4009,!1);return this.capture(i),new tn(qr(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=km(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Ma(this.remaining);r&&(t=r,this.capture(t))}i[qr(e)]=qr(t)}parseQueryParam(i){let e=Om(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Im(this.remaining);a&&(t=a,this.capture(t))}let r=Wl(e),o=Wl(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Ma(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new _e(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=B);let s=this.parseChildren(e+1);t[a??B]=Object.keys(s).length===1&&s[B]?s[B]:new Q([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new _e(4011,!1)}};function ac(n){return n.segments.length>0?new Q([],{[B]:n}):n}function sc(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=sc(r);if(t===B&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new Q(n.segments,i);return Am(e)}function Am(n){if(n.numberOfChildren===1&&n.children[B]){let i=n.children[B];return new Q(n.segments.concat(i.segments),i.children)}return n}function rn(n){return n instanceof Ue}function lc(n,i,e=null,t=null,r=new nn){let o=cc(n);return dc(o,i,e,t,r)}function cc(n){let i;function e(o){let a={};for(let m of o.children){let h=e(m);a[m.outlet]=h}let s=new Q(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=ac(t);return i??r}function dc(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Sa(o,o,o,e,t,r);let a=Pm(i);if(a.toRoot())return Sa(o,o,new Q([],{}),e,t,r);let s=Tm(a,o,n),m=s.processChildren?Ei(s.segmentGroup,s.index,a.commands):mc(s.segmentGroup,s.index,a.commands);return Sa(o,s.segmentGroup,m,e,t,r)}function Gr(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ri(n){return typeof n=="object"&&n!=null&&n.outlets}function Gl(n,i,e){n||="\u0275";let t=new Ue;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Sa(n,i,e,t,r,o){let a={};for(let[h,f]of Object.entries(t??{}))a[h]=Array.isArray(f)?f.map(_=>Gl(h,_,o)):Gl(h,f,o);let s;n===i?s=e:s=uc(n,i,e);let m=ac(sc(s));return new Ue(m,a,r)}function uc(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=uc(o,i,e)}),new Q(n.segments,t)}var $r=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Gr(t[0]))throw new _e(4003,!1);let r=t.find(Ri);if(r&&r!==fm(t))throw new _e(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Pm(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new $r(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([m,h])=>{s[m]=typeof h=="string"?h.split("/"):h}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,m)=>{m==0&&s==="."||(m==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new $r(e,i,t)}var zn=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Tm(n,i,e){if(n.isAbsolute)return new zn(i,!0,0);if(!e)return new zn(i,!1,NaN);if(e.parent===null)return new zn(e,!0,0);let t=Gr(n.commands[0])?0:1,r=e.segments.length-1+t;return Fm(e,r,n.numberOfDoubleDots)}function Fm(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new _e(4005,!1);r=t.segments.length}return new zn(t,!1,r-o)}function Nm(n){return Ri(n[0])?n[0].outlets:{[B]:n}}function mc(n,i,e){if(n??=new Q([],{}),n.segments.length===0&&n.hasChildren())return Ei(n,i,e);let t=Lm(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new Q(n.segments.slice(0,t.pathIndex),{});return o.children[B]=new Q(n.segments.slice(t.pathIndex),n.children),Ei(o,0,r)}else return t.match&&r.length===0?new Q(n.segments,{}):t.match&&!n.hasChildren()?Aa(n,i,e):t.match?Ei(n,0,r):Aa(n,i,e)}function Ei(n,i,e){if(e.length===0)return new Q(n.segments,{});{let t=Nm(e),r={};if(Object.keys(t).some(o=>o!==B)&&n.children[B]&&n.numberOfChildren===1&&n.children[B].segments.length===0){let o=Ei(n.children[B],i,e);return new Q(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=mc(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new Q(n.segments,r)}}function Lm(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if(Ri(s))break;let m=`${s}`,h=t<e.length-1?e[t+1]:null;if(r>0&&m===void 0)break;if(m&&h&&typeof h=="object"&&h.outlets===void 0){if(!Yl(m,h,a))return o;t+=2}else{if(!Yl(m,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Aa(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(Ri(o)){let m=Vm(o.outlets);return new Q(t,m)}if(r===0&&Gr(e[0])){let m=n.segments[i];t.push(new tn(m.path,$l(e[0]))),r++;continue}let a=Ri(o)?o.outlets[B]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Gr(s)?(t.push(new tn(a,$l(s))),r+=2):(t.push(new tn(a,{})),r++)}return new Q(t,{})}function Vm(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=Aa(new Q([],{}),0,t))}),i}function $l(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Yl(n,i,e){return n==e.path&&At(i,e.parameters)}var ki="imperative",Re=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Re||{}),nt=class{id;url;constructor(i,e){this.id=i,this.url=e}},yn=class extends nt{type=Re.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},St=class extends nt{urlAfterRedirects;type=Re.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ve=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Ve||{}),Ii=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Ii||{}),gt=class extends nt{reason;code;type=Re.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function pc(n){return n instanceof gt&&(n.code===Ve.Redirect||n.code===Ve.SupersededByNewNavigation)}var qt=class extends nt{reason;code;type=Re.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},xn=class extends nt{error;target;type=Re.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ai=class extends nt{urlAfterRedirects;state;type=Re.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yr=class extends nt{urlAfterRedirects;state;type=Re.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kr=class extends nt{urlAfterRedirects;state;shouldActivate;type=Re.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Qr=class extends nt{urlAfterRedirects;state;type=Re.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zr=class extends nt{urlAfterRedirects;state;type=Re.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xr=class{route;type=Re.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Jr=class{route;type=Re.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},eo=class{snapshot;type=Re.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},to=class{snapshot;type=Re.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},no=class{snapshot;type=Re.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},io=class{snapshot;type=Re.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var jn=class{},Pi=class{},Un=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function zm(n){return!(n instanceof jn)&&!(n instanceof Un)&&!(n instanceof Pi)}var ro=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new $n(this.rootInjector)}},$n=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new ro(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(Ir(ot))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),oo=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Pa(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Pa(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Ta(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Ta(i,this._root).map(e=>e.value)}};function Pa(n,i){if(n===i.value)return i;for(let e of i.children){let t=Pa(n,e);if(t)return t}return null}function Ta(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Ta(n,e);if(t.length)return t.unshift(i),t}return[]}var tt=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Vn(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Ti=class extends oo{snapshot;constructor(i,e){super(i),this.snapshot=e,Wa(this,i)}toString(){return this.snapshot.toString()}};function hc(n,i){let e=Bm(n,i),t=new qe([new tn("",{})]),r=new qe({}),o=new qe({}),a=new qe({}),s=new qe(""),m=new it(t,r,a,s,o,B,n,e.root);return m.snapshot=e.root,new Ti(new tt(m,[]),e)}function Bm(n,i){let e={},t={},r={},a=new Hn([],e,r,"",t,B,n,null,{},i);return new Fi("",new tt(a,[]))}var it=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,s,m){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=m,this.title=this.dataSubject?.pipe(J(h=>h[Vi]))??V(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(J(i=>vn(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(J(i=>vn(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function qa(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:g(g({},i.params),n.params),data:g(g({},i.data),n.data),resolve:g(g(g(g({},n.data),i.data),r?.data),n._resolvedData)}:t={params:g({},n.params),data:g({},n.data),resolve:g(g({},n.data),n._resolvedData??{})},r&&gc(r)&&(t.resolve[Vi]=r.title),t}var Hn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Vi]}constructor(i,e,t,r,o,a,s,m,h,f){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=m,this._resolve=h,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=vn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=vn(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Fi=class extends oo{url;constructor(i,e){super(e),this.url=i,Wa(this,e)}toString(){return fc(this._root)}};function Wa(n,i){i.value._routerState=n,i.children.forEach(e=>Wa(n,e))}function fc(n){let i=n.children.length>0?` { ${n.children.map(fc).join(", ")} } `:"";return`${n.value}${i}`}function Ea(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,At(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),At(i.params,e.params)||n.paramsSubject.next(e.params),hm(i.url,e.url)||n.urlSubject.next(e.url),At(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Fa(n,i){let e=At(n.params,i.params)&&vm(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Fa(n.parent,i.parent))}function gc(n){return typeof n.title=="string"||n.title===null}var _c=new x(""),zi=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=B;activateEvents=new U;deactivateEvents=new U;attachEvents=new U;detachEvents=new U;routerOutletData=zr();parentContexts=l($n);location=l(Bt);changeDetector=l(ge);inputBinder=l(co,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new _e(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new _e(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new _e(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new _e(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,m=new Na(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:m,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Me]})}return n})(),Na=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===it?this.route:i===$n?this.childContexts:i===_c?this.outletData:this.parent.get(i,e)}},co=new x("");var Ga=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&D(0,"router-outlet")},dependencies:[zi],encapsulation:2})}return n})();function $a(n){let i=n.children&&n.children.map($a),e=i?K(g({},n),{children:i}):g({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==B&&(e.component=Ga),e}function jm(n,i,e){let t=Ni(n,i._root,e?e._root:void 0);return new Ti(t,i)}function Ni(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=Um(n,i,e);return new tt(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>Ni(n,s)),a}}let t=Hm(i.value),r=i.children.map(o=>Ni(n,o));return new tt(t,r)}}function Um(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return Ni(n,t,r);return Ni(n,t)})}function Hm(n){return new it(new qe(n.url),new qe(n.params),new qe(n.queryParams),new qe(n.fragment),new qe(n.data),n.outlet,n.component,n)}var qn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},bc="ngNavigationCancelingError";function ao(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=rn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=vc(!1,Ve.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function vc(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[bc]=!0,e.cancellationCode=i,e}function qm(n){return yc(n)&&rn(n.url)}function yc(n){return!!n&&n[bc]}var La=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Ea(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=Vn(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Vn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Vn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=Vn(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new io(o.value.snapshot))}),i.children.length&&this.forwardEvent(new to(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Ea(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Ea(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},so=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Bn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Wm(n,i,e){let t=n._root,r=i?i._root:null;return Si(t,r,e,[t.value])}function Gm(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Yn(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!dl(n)?n:i.get(n):t}function Si(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Vn(i);return n.children.forEach(a=>{$m(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Di(s,e.getContext(a),r)),r}function $m(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let m=Ym(a,o,o.routeConfig.runGuardsAndResolvers);m?r.canActivateChecks.push(new so(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Si(n,i,s?s.children:null,t,r):Si(n,i,e,t,r),m&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Bn(s.outlet.component,a))}else a&&Di(i,s,r),r.canActivateChecks.push(new so(t)),o.component?Si(n,null,s?s.children:null,t,r):Si(n,null,e,t,r);return r}function Ym(n,i,e){if(typeof e=="function")return at(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!bn(n.url,i.url);case"pathParamsOrQueryParamsChange":return!bn(n.url,i.url)||!At(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Fa(n,i)||!At(n.queryParams,i.queryParams);default:return!Fa(n,i)}}function Di(n,i,e){let t=Vn(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?Di(a,i.children.getContext(o),e):Di(a,null,e):Di(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Bn(i.outlet.component,r)):e.canDeactivateChecks.push(new Bn(null,r)):e.canDeactivateChecks.push(new Bn(null,r))}function Bi(n){return typeof n=="function"}function Km(n){return typeof n=="boolean"}function Qm(n){return n&&Bi(n.canLoad)}function Zm(n){return n&&Bi(n.canActivate)}function Xm(n){return n&&Bi(n.canActivateChild)}function Jm(n){return n&&Bi(n.canDeactivate)}function ep(n){return n&&Bi(n.canMatch)}function xc(n){return n instanceof ol||n?.name==="EmptyError"}var jr=Symbol("INITIAL_VALUE");function Wn(){return De(n=>Er(n.map(i=>i.pipe(Ot(1),Ie(jr)))).pipe(J(i=>{for(let e of i)if(e!==!0){if(e===jr)return jr;if(e===!1||tp(e))return e}return!0}),xe(i=>i!==jr),Ot(1)))}function tp(n){return rn(n)||n instanceof qn}function Cc(n){return n.aborted?V(void 0).pipe(Ot(1)):new Qt(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function wc(n){return ee(Cc(n))}function np(n){return zt(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?V(K(g({},i),{guardsResult:!0})):ip(o,e,t).pipe(zt(a=>a&&Km(a)?rp(e,r,n):V(a)),J(a=>K(g({},i),{guardsResult:a})))})}function ip(n,i,e){return Be(n).pipe(zt(t=>cp(t.component,t.route,e,i)),Zt(t=>t!==!0,!0))}function rp(n,i,e){return Be(i).pipe(Or(t=>kr(ap(t.route.parent,e),op(t.route,e),lp(n,t.path),sp(n,t.route))),Zt(t=>t!==!0,!0))}function op(n,i){return n!==null&&i&&i(new no(n)),V(!0)}function ap(n,i){return n!==null&&i&&i(new eo(n)),V(!0)}function sp(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return V(!0);let t=e.map(r=>An(()=>{let o=i._environmentInjector,a=Yn(r,o),s=Zm(a)?a.canActivate(i,n):at(o,()=>a(i,n));return Cn(s).pipe(Zt())}));return V(t).pipe(Wn())}function lp(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Gm(o)).filter(o=>o!==null).map(o=>An(()=>{let a=o.guards.map(s=>{let m=o.node._environmentInjector,h=Yn(s,m),f=Xm(h)?h.canActivateChild(e,n):at(m,()=>h(e,n));return Cn(f).pipe(Zt())});return V(a).pipe(Wn())}));return V(r).pipe(Wn())}function cp(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return V(!0);let o=r.map(a=>{let s=i._environmentInjector,m=Yn(a,s),h=Jm(m)?m.canDeactivate(n,i,e,t):at(s,()=>m(n,i,e,t));return Cn(h).pipe(Zt())});return V(o).pipe(Wn())}function dp(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return V(!0);let a=o.map(s=>{let m=Yn(s,n),h=Qm(m)?m.canLoad(i,e):at(n,()=>m(i,e)),f=Cn(h);return r?f.pipe(wc(r)):f});return V(a).pipe(Wn(),Mc(t))}function Mc(n){return il(Ze(i=>{if(typeof i!="boolean")throw ao(n,i)}),J(i=>i===!0))}function up(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return V(!0);let s=a.map(m=>{let h=Yn(m,n),f=ep(h)?h.canMatch(i,e,r):at(n,()=>h(i,e,r));return Cn(f).pipe(wc(o))});return V(s).pipe(Wn(),Mc(t))}var Ht=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Li=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function mp(n){throw new _e(4e3,!1)}function pp(n){throw vc(!1,Ve.GuardRejected)}var Va=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[B])throw mp(`${i.redirectTo}`);r=r.children[B]}}async applyRedirectCommands(i,e,t,r,o){let a=await hp(e,r,o);if(a instanceof Ue)throw new Li(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new Li(s);return s}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new Ue(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,m])=>{a[s]=this.createSegmentGroup(i,m,t,r)}),new Q(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new _e(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function hp(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Wr(Cn(at(e,()=>t(i))))}function fp(n,i){return n.providers&&!n._injector&&(n._injector=ya(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Mt(n){return n.outlet||B}function gp(n,i){let e=n.filter(t=>Mt(t)===i);return e.push(...n.filter(t=>Mt(t)!==i)),e}var za={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Sc(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function _p(n,i,e,t,r,o,a){let s=Ec(n,i,e);if(!s.matched)return V(s);let m=Sc(o(s));return t=fp(i,t),up(t,i,e,r,m,a).pipe(J(h=>h===!0?s:g({},za)))}function Ec(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?g({},za):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Zl)(e,n,i);if(!r)return g({},za);let o={};Object.entries(r.posParams??{}).forEach(([s,m])=>{o[s]=m.path});let a=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Kl(n,i,e,t,r){return e.length>0&&yp(n,e,t,r)?{segmentGroup:new Q(i,vp(t,new Q(e,n.children))),slicedSegments:[]}:e.length===0&&xp(n,e,t)?{segmentGroup:new Q(n.segments,bp(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new Q(n.segments,n.children),slicedSegments:e}}function bp(n,i,e,t){let r={};for(let o of e)if(uo(n,i,o)&&!t[Mt(o)]){let a=new Q([],{});r[Mt(o)]=a}return g(g({},t),r)}function vp(n,i){let e={};e[B]=i;for(let t of n)if(t.path===""&&Mt(t)!==B){let r=new Q([],{});e[Mt(t)]=r}return e}function yp(n,i,e,t){return e.some(r=>!uo(n,i,r)||!(Mt(r)!==B)?!1:!(t!==void 0&&Mt(r)===t))}function xp(n,i,e){return e.some(t=>uo(n,i,t))}function uo(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Cp(n,i,e){return i.length===0&&!n.children[e]}var Ba=class{};async function wp(n,i,e,t,r,o,a="emptyOnly",s){return new ja(n,i,e,t,r,a,o,s).recognize()}var Mp=31,ja=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,m){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=m,this.applyRedirects=new Va(this.urlSerializer,this.urlTree)}noMatchError(i){return new _e(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Kl(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new tt(t,e),o=new Fi("",r),a=lc(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new Hn([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),B,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,B,e),rootSnapshot:e}}catch(t){if(t instanceof Li)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Ht?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=await this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof tt?[a]:[]}async processChildren(i,e,t,r){let o=[];for(let m of Object.keys(t.children))m==="primary"?o.unshift(m):o.push(m);let a=[];for(let m of o){let h=t.children[m],f=gp(e,m),_=await this.processSegmentGroup(i,f,h,m,r);a.push(..._)}let s=kc(a);return Sp(s),s}async processSegment(i,e,t,r,o,a,s){for(let m of e)try{return await this.processSegmentAgainstRoute(m._injector??i,e,m,t,r,o,a,s)}catch(h){if(h instanceof Ht||xc(h))continue;throw h}if(Cp(t,r,o))return new Ba;throw new Ht(t)}async processSegmentAgainstRoute(i,e,t,r,o,a,s,m){if(Mt(t)!==a&&(a===B||!uo(r,o,t)))throw new Ht(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,m);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,m);throw new Ht(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){let{matched:m,parameters:h,consumedSegments:f,positionalParamSegments:_,remainingSegments:q}=Ec(e,r,o);if(!m)throw new Ht(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Mp&&(this.allowRedirects=!1));let le=this.createSnapshot(i,r,o,h,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let X=await this.applyRedirects.applyRedirectCommands(f,r.redirectTo,_,Sc(le),i),te=await this.applyRedirects.lineralizeSegments(r,X);return this.processSegment(i,t,e,te.concat(q),a,!1,s)}createSnapshot(i,e,t,r,o){let a=new Hn(t,r,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,kp(e),Mt(e),e.component??e._loadedComponent??null,e,Dp(e),i),s=qa(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=mn=>this.createSnapshot(i,t,mn.consumedSegments,mn.parameters,a),m=await Wr(_p(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!m?.matched)throw new Ht(e);i=t._injector??i;let{routes:h}=await this.getChildConfig(i,t,r),f=t._loadedInjector??i,{parameters:_,consumedSegments:q,remainingSegments:le}=m,X=this.createSnapshot(i,t,q,_,a),{segmentGroup:te,slicedSegments:Qe}=Kl(e,q,le,h,o);if(Qe.length===0&&te.hasChildren()){let mn=await this.processChildren(f,h,te,X);return new tt(X,mn)}if(h.length===0&&Qe.length===0)return new tt(X,[]);let In=Mt(t)===o,Vt=await this.processSegment(f,h,te,Qe,In?B:o,!0,X);return new tt(X,Vt instanceof tt?[Vt]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Wr(dp(i,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw pp(e)}return{routes:[],injector:i}}};function Sp(n){n.sort((i,e)=>i.value.outlet===B?-1:e.value.outlet===B?1:i.value.outlet.localeCompare(e.value.outlet))}function Ep(n){let i=n.value.routeConfig;return i&&i.path===""}function kc(n){let i=[],e=new Set;for(let t of n){if(!Ep(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=kc(t.children);i.push(new tt(t.value,r))}return i.filter(t=>!e.has(t))}function kp(n){return n.data||{}}function Dp(n){return n.resolve||{}}function Op(n,i,e,t,r,o,a){return zt(async s=>{let{state:m,tree:h}=await wp(n,i,e,t,s.extractedUrl,r,o,a);return K(g({},s),{targetSnapshot:m,urlAfterRedirects:h})})}function Rp(n){return zt(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return V(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let m of Dc(s))o.add(m);let a=0;return Be(o).pipe(Or(s=>r.has(s)?Ip(s,e,n):(s.data=qa(s,s.parent,n).resolve,V(void 0))),Ze(()=>a++),ga(1),zt(s=>a===o.size?V(i):We))})}function Dc(n){let i=n.children.map(e=>Dc(e)).flat();return[n,...i]}function Ip(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!gc(t)&&(r[Vi]=t.title),An(()=>(n.data=qa(n,n.parent,e).resolve,Ap(r,n,i).pipe(J(o=>(n._resolvedData=o,n.data=g(g({},n.data),o),null)))))}function Ap(n,i,e){let t=Da(n);if(t.length===0)return V({});let r={};return Be(t).pipe(zt(o=>Pp(n[o],i,e).pipe(Zt(),Ze(a=>{if(a instanceof qn)throw ao(new nn,a);r[o]=a}))),ga(1),J(()=>r),Dr(o=>xc(o)?We:rl(o)))}function Pp(n,i,e){let t=i._environmentInjector,r=Yn(n,t),o=r.resolve?r.resolve(i,e):at(t,()=>r(i,e));return Cn(o)}function Ql(n){return De(i=>{let e=n(i);return e?Be(e).pipe(J(()=>i)):V(i)})}var Ya=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===B);return t}getResolvedTitleForRoute(e){return e.data[Vi]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Oc),providedIn:"root"})}return n})(),Oc=(()=>{class n extends Ya{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(Ir(jl))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kn=new x("",{factory:()=>({})}),ji=new x(""),Rc=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Dl);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Jl(at(e,()=>t.loadComponent())),a=await Pc(Ac(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Ic(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function Ic(n,i,e,t){let r=await Jl(at(e,()=>n.loadChildren())),o=await Pc(Ac(r)),a;o instanceof bl||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),t&&t(n);let s,m,h=!1,f;return Array.isArray(a)?(m=a,h=!0):(s=a.create(e).injector,f=a,m=s.get(ji,[],{optional:!0,self:!0}).flat()),{routes:m.map($a),injector:s,factory:f}}function Tp(n){return n&&typeof n=="object"&&"default"in n}function Ac(n){return Tp(n)?n.default:n}async function Pc(n){return n}var mo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Fp),providedIn:"root"})}return n})(),Fp=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Tc=new x("");var Np=()=>{},Fc=new x(""),Nc=(()=>{class n{currentNavigation=L(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=L(null);events=new M;transitionAbortWithErrorSubject=new M;configLoader=l(Rc);environmentInjector=l(ot);destroyRef=l(xi);urlSerializer=l(Gn);rootContexts=l($n);location=l(Ln);inputBindingEnabled=l(co,{optional:!0})!==null;titleStrategy=l(Ya);options=l(Kn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(mo);createViewTransition=l(Tc,{optional:!0});navigationErrorHandler=l(Fc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>V(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Xr(r)),t=r=>this.events.next(new Jr(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Z(()=>{this.transitions?.next(K(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new qe(null),this.transitions.pipe(xe(t=>t!==null),De(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return V(t).pipe(De(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ve.SupersededByNewNavigation),We;this.currentTransition=t;let m=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:m?K(g({},m),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let h=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!h&&f!=="reload")return this.events.next(new qt(s.id,this.urlSerializer.serialize(s.rawUrl),"",Ii.IgnoredSameUrlNavigation)),s.resolve(!1),We;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return V(s).pipe(De(_=>(this.events.next(new yn(_.id,this.urlSerializer.serialize(_.extractedUrl),_.source,_.restoredState)),_.id!==this.navigationId?We:Promise.resolve(_))),Op(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Ze(_=>{t.targetSnapshot=_.targetSnapshot,t.urlAfterRedirects=_.urlAfterRedirects,this.currentNavigation.update(q=>(q.finalUrl=_.urlAfterRedirects,q)),this.events.next(new Pi)}),De(_=>Be(t.routesRecognizeHandler.deferredHandle??V(void 0)).pipe(J(()=>_))),Ze(()=>{let _=new Ai(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:_,extractedUrl:q,source:le,restoredState:X,extras:te}=s,Qe=new yn(_,this.urlSerializer.serialize(q),le,X);this.events.next(Qe);let In=hc(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=K(g({},s),{targetSnapshot:In,urlAfterRedirects:q,extras:K(g({},te),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Vt=>(Vt.finalUrl=q,Vt)),V(t)}else return this.events.next(new qt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Ii.IgnoredByUrlHandlingStrategy)),s.resolve(!1),We}),J(s=>{let m=new Yr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(m),this.currentTransition=t=K(g({},s),{guards:Wm(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),np(s=>this.events.next(s)),De(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw ao(this.urlSerializer,s.guardsResult);let m=new Kr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(m),!a())return We;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ve.GuardRejected),We;if(s.guards.canActivateChecks.length===0)return V(s);let h=new Qr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(h),!a())return We;let f=!1;return V(s).pipe(Rp(this.paramsInheritanceStrategy),Ze({next:()=>{f=!0;let _=new Zr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)},complete:()=>{f||this.cancelNavigationTransition(s,"",Ve.NoDataFromResolver)}}))}),Ql(s=>{let m=f=>{let _=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let q=f._environmentInjector;_.push(this.configLoader.loadComponent(q,f.routeConfig).then(le=>{f.component=le}))}for(let q of f.children)_.push(...m(q));return _},h=m(s.targetSnapshot.root);return h.length===0?V(s):Be(Promise.all(h).then(()=>s))}),Ql(()=>this.afterPreactivation()),De(()=>{let{currentSnapshot:s,targetSnapshot:m}=t,h=this.createViewTransition?.(this.environmentInjector,s.root,m.root);return h?Be(h).pipe(J(()=>t)):V(t)}),Ot(1),De(s=>{let m=jm(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=K(g({},s),{targetRouterState:m}),this.currentNavigation.update(f=>(f.targetRouterState=m,f)),this.events.next(new jn);let h=t.beforeActivateHandler.deferredHandle;return h?Be(h.then(()=>s)):V(s)}),Ze(s=>{new La(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,m=>this.events.next(m),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(m=>(m.abort=Np,m)),this.lastSuccessfulNavigation.set(Z(this.currentNavigation)),this.events.next(new St(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ee(Cc(o.signal).pipe(xe(()=>!r&&!t.targetRouterState),Ze(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",Ve.Aborted)}))),Ze({complete:()=>{r=!0}}),ee(this.transitionAbortWithErrorSubject.pipe(Ze(s=>{throw s}))),sl(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",Ve.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Dr(s=>{if(r=!0,this.destroyed)return t.resolve(!1),We;if(yc(s))this.events.next(new gt(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),qm(s)?this.events.next(new Un(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let m=new xn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let h=at(this.environmentInjector,()=>this.navigationErrorHandler?.(m));if(h instanceof qn){let{message:f,cancellationCode:_}=ao(this.urlSerializer,h);this.events.next(new gt(t.id,this.urlSerializer.serialize(t.extractedUrl),f,_)),this.events.next(new Un(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(m),s}catch(h){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(h)}}return We}))}))}cancelNavigationTransition(e,t,r){let o=new gt(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Z(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Lp(n){return n!==ki}var Lc=new x("");var Vc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Vp),providedIn:"root"})}return n})(),lo=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Vp=(()=>{class n extends lo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),po=(()=>{class n{urlSerializer=l(Gn);options=l(Kn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Ln);urlHandlingStrategy=l(mo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ue;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof Ue?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=hc(null,l(ot));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(zp),providedIn:"root"})}return n})(),zp=(()=>{class n extends po{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof yn?this.updateStateMemento():e instanceof qt?this.commitTransition(t):e instanceof Ai?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof jn?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof gt&&!pc(e)?this.restoreHistory(t):e instanceof xn?this.restoreHistory(t,!0):e instanceof St&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let m=this.browserPageId,h=g(g({},s),this.generateNgRouterState(o,m,t));this.location.replaceState(e,"",h)}else{let m=g(g({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",m)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):g({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ka(n,i){n.events.pipe(xe(e=>e instanceof St||e instanceof gt||e instanceof xn||e instanceof qt),J(e=>e instanceof St||e instanceof qt?0:(e instanceof gt?e.code===Ve.Redirect||e.code===Ve.SupersededByNewNavigation:!1)?2:1),xe(e=>e!==2),Ot(1)).subscribe(()=>{i()})}var ce=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(yl);stateManager=l(po);options=l(Kn,{optional:!0})||{};pendingTasks=l(pl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Nc);urlSerializer=l(Gn);location=l(Ln);urlHandlingStrategy=l(mo);injector=l(ot);_events=new M;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Vc);injectorCleanup=l(Lc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(ji,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(co,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Te;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Z(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof gt&&t.code!==Ve.Redirect&&t.code!==Ve.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof St)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Un){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),m=g({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Lp(r.source)},a);this.scheduleNavigation(s,ki,null,m,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}zm(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ki,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=K(g({},o),{browserUrl:e})),r){let h=g({},r);delete h.navigationId,delete h.\u0275routerPageId,delete h.\u0275routerUrl,Object.keys(h).length!==0&&(o.state=h)}let m=this.parseUrl(s);this.scheduleNavigation(m,t,a,o).catch(h=>{this.disposed||this.injector.get(Ar)(h)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Z(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map($a),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:m}=t,h=m?this.currentUrlTree.fragment:a,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=o||null}f!==null&&(f=this.removeEmptyProps(f));let _;try{let q=r?r.snapshot:this.routerState.snapshot.root;_=cc(q)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),_=this.currentUrlTree.root}return dc(_,e,f,h??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=rn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ki,null,t)}navigate(e,t={skipLocationChange:!1}){return Bp(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(cl(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=g({},Ua):t===!1?r=g({},Oi):r=g(g({},Oi),t),rn(e))return Oa(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Oa(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,m,h;a?(s=a.resolve,m=a.reject,h=a.promise):h=new Promise((_,q)=>{s=_,m=q});let f=this.pendingTasks.add();return Ka(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:m,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Bp(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new _e(4008,!1)}var Hp=(()=>{class n{router=l(ce);stateManager=l(po);fragment=L("");queryParams=L({});path=L("");serializer=l(Gn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof St&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Ue(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ze=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Nn("href"),{optional:!0});reactiveHref=Ol(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Z(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Z(this._target)}_target=L(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Z(this._queryParams)}_queryParams=L(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Z(this._fragment)}_fragment=L(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Z(this._queryParamsHandling)}_queryParamsHandling=L(void 0);set state(e){this._state.set(e)}get state(){return Z(this._state)}_state=L(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Z(this._info)}_info=L(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Z(this._relativeTo)}_relativeTo=L(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Z(this._preserveFragment)}_preserveFragment=L(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Z(this._skipLocationChange)}_skipLocationChange=L(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Z(this._replaceUrl)}_replaceUrl=L(!1);isAnchorElement;onChanges=new M;applicationErrorHandler=l(Ar);options=l(Kn,{optional:!0});reactiveRouterState=l(Hp);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let m=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=m==="a"||m==="area"||!!(typeof customElements=="object"&&customElements.get(m)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=L(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(rn(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let m={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,m)?.catch(h=>{this.applicationErrorHandler(h)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=fe(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:rn(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return Z(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(W(ce),W(it),hl("tabindex"),W(de),W(F),W(Pl))};static \u0275dir=v({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&k("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&H("href",r.reactiveHref(),_l)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",R],skipLocationChange:[2,"skipLocationChange","skipLocationChange",R],replaceUrl:[2,"replaceUrl","replaceUrl",R],routerLink:"routerLink"},features:[Me]})}return n})(),Qa=(()=>{class n{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new U;link=l(ze,{optional:!0});constructor(e,t,r,o){this.router=e,this.element=t,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof St&&this.update()})}ngAfterContentInit(){V(this.links.changes,V(null)).pipe(ha()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=Be(e).pipe(ha()).subscribe(t=>{this._isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){let t=Array.isArray(e)?e:e.split(" ");this.classes=t.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let t=qp(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?g({},Ua):g({},Oi);return r=>{let o=r.urlTree;return o?Z(Ha(o,e,t)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(t){return new(t||n)(W(ce),W(F),W(de),W(ge))};static \u0275dir=v({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(t,r,o){if(t&1&&Ne(o,ze,5),t&2){let a;A(a=P())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Me]})}return n})();function qp(n){let i=n;return!!(i.paths||i.matrixParams||i.queryParams||i.fragment)}var Wp=new x("");function Za(n,...i){return ul([{provide:ji,multi:!0,useValue:n},[],{provide:it,useFactory:Gp},{provide:xl,multi:!0,useFactory:$p},i.map(e=>e.\u0275providers)])}function Gp(){return l(ce).routerState.root}function $p(){let n=l(ie);return i=>{let e=n.get(Fn);if(i!==e.components[0])return;let t=n.get(ce),r=n.get(Yp);n.get(Kp)===1&&t.initialNavigation(),n.get(Qp,null,{optional:!0})?.setUpPreloading(),n.get(Wp,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Yp=new x("",{factory:()=>new M}),Kp=new x("",{factory:()=>1});var Qp=new x("");var $c=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(W(de),W(F))};static \u0275dir=v({type:n})}return n})(),Xp=(()=>{class n extends $c{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275dir=v({type:n,features:[re]})}return n})(),Ki=new x("");var Jp={provide:Ki,useExisting:Rt(()=>Ye),multi:!0};function eh(){let n=Ca()?Ca().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var th=new x(""),Ye=(()=>{class n extends $c{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!eh())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(W(de),W(F),W(th,8))};static \u0275dir=v({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&k("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[he([Jp]),re]})}return n})();function ts(n){return n==null||ns(n)===0}function ns(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Qi=new x(""),Mo=new x(""),nh=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,be=class{static min(i){return ih(i)}static max(i){return rh(i)}static required(i){return Yc(i)}static requiredTrue(i){return oh(i)}static email(i){return ah(i)}static minLength(i){return sh(i)}static maxLength(i){return lh(i)}static pattern(i){return ch(i)}static nullValidator(i){return fo()}static compose(i){return ed(i)}static composeAsync(i){return td(i)}};function ih(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function rh(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function Yc(n){return ts(n.value)?{required:!0}:null}function oh(n){return n.value===!0?null:{required:!0}}function ah(n){return ts(n.value)||nh.test(n.value)?null:{email:!0}}function sh(n){return i=>{let e=i.value?.length??ns(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function lh(n){return i=>{let e=i.value?.length??ns(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function ch(n){if(!n)return fo;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(ts(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function fo(n){return null}function Kc(n){return n!=null}function Qc(n){return Nr(n)?Be(n):n}function Zc(n){let i={};return n.forEach(e=>{i=e!=null?g(g({},i),e):i}),Object.keys(i).length===0?null:i}function Xc(n,i){return i.map(e=>e(n))}function dh(n){return!n.validate}function Jc(n){return n.map(i=>dh(i)?i:e=>i.validate(e))}function ed(n){if(!n)return null;let i=n.filter(Kc);return i.length==0?null:function(e){return Zc(Xc(e,i))}}function is(n){return n!=null?ed(Jc(n)):null}function td(n){if(!n)return null;let i=n.filter(Kc);return i.length==0?null:function(e){let t=Xc(e,i).map(Qc);return al(t).pipe(J(Zc))}}function rs(n){return n!=null?td(Jc(n)):null}function zc(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function nd(n){return n._rawValidators}function id(n){return n._rawAsyncValidators}function Xa(n){return n?Array.isArray(n)?n:[n]:[]}function go(n,i){return Array.isArray(n)?n.includes(i):n===i}function Bc(n,i){let e=Xa(i);return Xa(n).forEach(r=>{go(e,r)||e.push(r)}),e}function jc(n,i){return Xa(i).filter(e=>!go(n,e))}var _o=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=is(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=rs(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Et=class extends _o{name;get formDirective(){return null}get path(){return null}},kt=class extends _o{_parent=null;name=null;valueAccessor=null},bo=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var _t=(()=>{class n extends bo{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(W(kt,2))};static \u0275dir=v({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&O("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[re]})}return n})(),Pt=(()=>{class n extends bo{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(W(Et,10))};static \u0275dir=v({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&O("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[re]})}return n})();var Ui="VALID",ho="INVALID",Qn="PENDING",Hi="DISABLED",on=class{},vo=class extends on{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Wi=class extends on{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Gi=class extends on{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Zn=class extends on{status;source;constructor(i,e){super(),this.status=i,this.source=e}},yo=class extends on{source;constructor(i){super(),this.source=i}},Yi=class extends on{source;constructor(i){super(),this.source=i}};function os(n){return(So(n)?n.validators:n)||null}function uh(n){return Array.isArray(n)?is(n):n||null}function as(n,i){return(So(i)?i.asyncValidators:n)||null}function mh(n){return Array.isArray(n)?rs(n):n||null}function So(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function rd(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new _e(1e3,"");if(!t[e])throw new _e(1001,"")}function od(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new _e(-1002,"")})}var Xn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Z(this.statusReactive)}set status(i){Z(()=>this.statusReactive.set(i))}_status=fe(()=>this.statusReactive());statusReactive=L(void 0);get valid(){return this.status===Ui}get invalid(){return this.status===ho}get pending(){return this.status===Qn}get disabled(){return this.status===Hi}get enabled(){return this.status!==Hi}errors;get pristine(){return Z(this.pristineReactive)}set pristine(i){Z(()=>this.pristineReactive.set(i))}_pristine=fe(()=>this.pristineReactive());pristineReactive=L(!0);get dirty(){return!this.pristine}get touched(){return Z(this.touchedReactive)}set touched(i){Z(()=>this.touchedReactive.set(i))}_touched=fe(()=>this.touchedReactive());touchedReactive=L(!1);get untouched(){return!this.touched}_events=new M;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Bc(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Bc(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(jc(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(jc(i,this._rawAsyncValidators))}hasValidator(i){return go(this._rawValidators,i)}hasAsyncValidator(i){return go(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(K(g({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Gi(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Gi(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(K(g({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Wi(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Wi(!0,t))}markAsPending(i={}){this.status=Qn;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Zn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(K(g({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Hi,this.errors=null,this._forEachChild(r=>{r.disable(K(g({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new vo(this.value,t)),this._events.next(new Zn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(K(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ui,this._forEachChild(t=>{t.enable(K(g({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(K(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ui||this.status===Qn)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new vo(this.value,e)),this._events.next(new Zn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(K(g({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Hi:Ui}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Qn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Qc(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Zn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new U,this.statusChanges=new U}_calculateStatus(){return this._allControlsDisabled()?Hi:this.errors?ho:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Qn)?Qn:this._anyControlsHaveStatus(ho)?ho:Ui}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Wi(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Gi(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){So(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=uh(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=mh(this._rawAsyncValidators)}},Jn=class extends Xn{constructor(i,e,t){super(os(e),as(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){od(this,!0,i),Object.keys(i).forEach(t=>{rd(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this.controls[t];r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,K(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Yi(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Ja=class extends Jn{};var Zi=new x("",{factory:()=>Eo}),Eo="always";function ad(n,i){return[...i.path,n]}function xo(n,i,e=Eo){ss(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),hh(n,i),gh(n,i),fh(n,i),ph(n,i)}function Uc(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),wo(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Co(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function ph(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function ss(n,i){let e=nd(n);i.validator!==null?n.setValidators(zc(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=id(n);i.asyncValidator!==null?n.setAsyncValidators(zc(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();Co(i._rawValidators,r),Co(i._rawAsyncValidators,r)}function wo(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=nd(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=id(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return Co(i._rawValidators,t),Co(i._rawAsyncValidators,t),e}function hh(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&sd(n,i)})}function fh(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&sd(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function sd(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function gh(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function ld(n,i){n==null,ss(n,i)}function _h(n,i){return wo(n,i)}function cd(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function bh(n){return Object.getPrototypeOf(n.constructor)===Xp}function dd(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function ud(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(o=>{o.constructor===Ye?e=o:bh(o)?t=o:r=o}),r||t||e||null}function vh(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var yh={provide:Et,useExisting:Rt(()=>Dt)},qi=Promise.resolve(),Dt=(()=>{class n extends Et{callSetDisabledState;get submitted(){return Z(this.submittedReactive)}_submitted=fe(()=>this.submittedReactive());submittedReactive=L(!1);_directives=new Set;form;ngSubmit=new U;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Jn({},is(e),rs(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){qi.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),xo(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){qi.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){qi.then(()=>{let t=this._findContainer(e.path),r=new Jn({});ld(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){qi.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){qi.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),dd(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new yo(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(W(Qi,10),W(Mo,10),W(Zi,8))};static \u0275dir=v({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&k("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[he([yh]),re]})}return n})();function Hc(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function qc(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var $i=class extends Xn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(os(e),as(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),So(e)&&(e.nonNullable||e.initialValueIsDefault)&&(qc(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Yi(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Hc(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Hc(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){qc(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var xh=n=>n instanceof $i;var Ch={provide:kt,useExisting:Rt(()=>Wt)},Wc=Promise.resolve(),Wt=(()=>{class n extends kt{_changeDetectorRef;callSetDisabledState;control=new $i;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new U;constructor(e,t,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=ud(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),cd(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){xo(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Wc.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&R(t);Wc.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ad(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(W(Et,9),W(Qi,10),W(Mo,10),W(Ki,10),W(ge,8),W(Zi,8))};static \u0275dir=v({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[he([Ch]),re,Me]})}return n})();var Tt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var es=class extends Xn{constructor(i,e,t){super(os(e),as(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){od(this,!1,i),i.forEach((t,r)=>{rd(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],K(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Yi(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var wh=(()=>{class n extends Et{callSetDisabledState;get submitted(){return Z(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=fe(()=>this._submittedReactive());_submittedReactive=L(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(wo(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return xo(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Uc(e.control||null,e,!1),vh(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,dd(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new yo(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Uc(t||null,e),xh(r)&&(xo(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);ld(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&_h(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ss(this.form,this),this._oldForm&&wo(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(W(Qi,10),W(Mo,10),W(Zi,8))};static \u0275dir=v({type:n,features:[re,Me]})}return n})();var md=new x("");var Mh={provide:kt,useExisting:Rt(()=>Xi)},Xi=(()=>{class n extends kt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new U;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=ud(this,o)}ngOnChanges(e){this._added||this._setUpControl(),cd(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ad(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(W(Et,13),W(Qi,10),W(Mo,10),W(Ki,10),W(md,8))};static \u0275dir=v({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[he([Mh]),re,Me]})}return n})();var Sh={provide:Et,useExisting:Rt(()=>Gt)},Gt=(()=>{class n extends wh{form=null;ngSubmit=new U;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275dir=v({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&k("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[he([Sh]),re]})}return n})();var Eh=(()=>{class n{_validator=fo;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):fo,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,features:[Me]})}return n})();var kh={provide:Qi,useExisting:Rt(()=>wn),multi:!0};var wn=(()=>{class n extends Eh{required;inputName="required";normalizeInput=R;createValidator=e=>Yc;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275dir=v({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&H("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[he([kh]),re]})}return n})();var pd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({})}return n})();function Gc(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var ko=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return Gc(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new Jn(r,o)}record(e,t=null){let r=this._reduceControls(e);return new Ja(r,t)}control(e,t,r){let o={};return this.useNonNullable?(Gc(t)?o=t:(o.validators=t,o.asyncValidators=r),new $i(e,K(g({},o),{nonNullable:!0}))):new $i(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new es(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof $i)return e;if(e instanceof Xn)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var an=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Zi,useValue:e.callSetDisabledState??Eo}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[pd]})}return n})(),Do=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:md,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Zi,useValue:e.callSetDisabledState??Eo}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[pd]})}return n})();function Ji(n){return n.buttons===0||n.detail===0}function er(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var ls;function hd(){if(ls==null){let n=typeof document<"u"?document.head:null;ls=!!(n&&(n.createShadowRoot||n.attachShadow))}return ls}function cs(n){if(hd()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function ds(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Ae(n){return n.composedPath?n.composedPath()[0]:n.target}var us;try{us=typeof Intl<"u"&&Intl.v8BreakIterator}catch{us=!1}var Y=(()=>{class n{_platformId=l(fl);isBrowser=this._platformId?Fl(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||us)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var tr;function fd(){if(tr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>tr=!0}))}finally{tr=tr||!1}return tr}function ti(n){return fd()?n:!!n.capture}function rt(n){return n instanceof F?n.nativeElement:n}var gd=new x("cdk-input-modality-detector-options"),_d={ignoreKeys:[18,17,224,91,16]},bd=650,ms={passive:!0,capture:!0},vd=(()=>{class n{_platform=l(Y);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new qe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ae(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<bd||(this._modality.next(Ji(e)?"keyboard":"mouse"),this._mostRecentTarget=Ae(e))};_onTouchstart=e=>{if(er(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ae(e)};constructor(){let e=l(z),t=l(ne),r=l(gd,{optional:!0});if(this._options=g(g({},_d),r),this.modalityDetected=this._modality.pipe(Rr(1)),this.modalityChanged=this.modalityDetected.pipe(vi()),this._platform.isBrowser){let o=l(Je).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,ms),o.listen(t,"mousedown",this._onMousedown,ms),o.listen(t,"touchstart",this._onTouchstart,ms)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nr=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(nr||{}),yd=new x("cdk-focus-monitor-default-options"),Oo=ti({passive:!0,capture:!0}),Mn=(()=>{class n{_ngZone=l(z);_platform=l(Y);_inputModalityDetector=l(vd);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(ne);_stopInputModalityDetector=new M;constructor(){let e=l(yd,{optional:!0});this._detectionMode=e?.detectionMode||nr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Ae(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=rt(e);if(!this._platform.isBrowser||r.nodeType!==1)return V();let o=cs(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new M,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=rt(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=rt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,m])=>this._originChanged(s,t,m)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===nr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===nr.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?bd:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Ae(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Oo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Oo)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ee(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Oo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Oo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ni(n){return Array.isArray(n)?n:[n]}var xd=new Set,Sn,Ro=(()=>{class n{_platform=l(Y);_nonce=l(gl,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Oh}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Dh(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Dh(n,i){if(!xd.has(n))try{Sn||(Sn=document.createElement("style"),i&&Sn.setAttribute("nonce",i),Sn.setAttribute("type","text/css"),document.head.appendChild(Sn)),Sn.sheet&&(Sn.sheet.insertRule(`@media ${n} {body{ }}`,0),xd.add(n))}catch(e){console.error(e)}}function Oh(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var ir=(()=>{class n{_mediaMatcher=l(Ro);_zone=l(z);_queries=new Map;_destroySubject=new M;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Cd(ni(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Cd(ni(e)).map(a=>this._registerQuery(a).observable),o=Er(r);return o=kr(o.pipe(Ot(1)),o.pipe(Rr(1),Tn(0))),o.pipe(J(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:m,query:h})=>{s.matches=s.matches||m,s.breakpoints[h]=m}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Qt(a=>{let s=m=>this._zone.run(()=>a.next(m));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(Ie(t),J(({matches:a})=>({query:e,matches:a})),ee(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Cd(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var Rh=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Io=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({providers:[Rh]})}return n})();var hs=(()=>{class n{_platform=l(Y);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Ah(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Ih(Bh(e));if(t&&(wd(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=wd(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Vh(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return zh(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ih(n){try{return n.frameElement}catch{return null}}function Ah(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function Ph(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Th(n){return Nh(n)&&n.type=="hidden"}function Fh(n){return Lh(n)&&n.hasAttribute("href")}function Nh(n){return n.nodeName.toLowerCase()=="input"}function Lh(n){return n.nodeName.toLowerCase()=="a"}function Ed(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function wd(n){if(!Ed(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Vh(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function zh(n){return Th(n)?!1:Ph(n)||Fh(n)||n.hasAttribute("contenteditable")||Ed(n)}function Bh(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var kd=new x("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Dd=new x("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),jh=0,rr=(()=>{class n{_ngZone=l(z);_defaultOptions=l(Dd,{optional:!0});_liveElement;_document=l(ne);_sanitizer=l(Ul);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(kd,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Hl(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${jh++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var sn=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(sn||{}),Md="cdk-high-contrast-black-on-white",Sd="cdk-high-contrast-white-on-black",ps="cdk-high-contrast-active",Od=(()=>{class n{_platform=l(Y);_hasCheckedHighContrastMode=!1;_document=l(ne);_breakpointSubscription;constructor(){this._breakpointSubscription=l(ir).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return sn.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return sn.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return sn.BLACK_ON_WHITE}return sn.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(ps,Md,Sd),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===sn.BLACK_ON_WHITE?e.add(ps,Md):t===sn.WHITE_ON_BLACK&&e.add(ps,Sd)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),fs=(()=>{class n{constructor(){l(Od)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[Io]})}return n})();var Uh=200,Ao=class{_letterKeyStream=new M;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new M;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Uh;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Ze(e=>this._pressedLetters.push(e)),Tn(i),xe(()=>this._pressedLetters.length>0),J(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function bt(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var ii=class{_items;_activeItemIndex=L(-1);_activeItem=L(null);_wrap=!1;_typeaheadSubscription=Te.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Xt?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):hn(i)&&(this._effectRef=pn(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new M;change=new M;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ao(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||bt(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return hn(this._items)?this._items():this._items instanceof Xt?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var or=class extends ii{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Po=class extends ii{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var bs={},pe=class n{_appId=l(Pr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),bs.hasOwnProperty(i)||(bs[i]=0),`${i}${e?n._infix+"-":""}${bs[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var Td=" ";function xs(n,i,e){let t=Fo(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(Td)))}function No(n,i,e){let t=Fo(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(Td)):n.removeAttribute(i)}function Fo(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var Fd="cdk-describedby-message",To="cdk-describedby-host",ys=0,Nd=(()=>{class n{_platform=l(Y);_document=l(ne);_messageRegistry=new Map;_messagesContainer=null;_id=`${ys++}`;constructor(){l(ke).load(jt),this._id=l(Pr)+"-"+ys++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=vs(t,r);typeof t!="string"?(Pd(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=vs(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${To}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(To);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");Pd(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(vs(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=Fo(e,"aria-describedby").filter(r=>r.indexOf(Fd)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);xs(e,"aria-describedby",r.messageElement.id),e.setAttribute(To,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,No(e,"aria-describedby",r.messageElement.id),e.removeAttribute(To)}_isElementDescribedByMessage(e,t){let r=Fo(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vs(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Pd(n,i){n.id||(n.id=`${Fd}-${i}-${ys++}`)}function ve(n){return n==null?"":typeof n=="string"?n:`${n}px`}function $t(n){return n!=null&&`${n}`!="false"}var En;function Vd(){if(En==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return En=!1,En;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)En=!0;else{let n=Element.prototype.scrollTo;n?En=!/\{\s*\[native code\]\s*\}/.test(n.toString()):En=!1}}return En}function Cs(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ri,zd=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ws(){if(ri)return ri;if(typeof document!="object"||!document)return ri=new Set(zd),ri;let n=document.createElement("input");return ri=new Set(zd.filter(i=>(n.setAttribute("type",i),n.type===i))),ri}var Ms=class{_box;_destroyed=new M;_resizeSubject=new M;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Qt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(xe(e=>e.some(t=>t.target===i)),ba({bufferSize:1,refCount:!0}),ee(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Bd=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(z);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Ms(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var jd={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Hh=new x("MATERIAL_ANIMATIONS"),Ud=null;function Ss(){return l(Hh,{optional:!0})?.animationsDisabled||l(Tr,{optional:!0})==="NoopAnimations"?"di-disabled":(Ud??=l(Ro).matchMedia("(prefers-reduced-motion)").matches,Ud?"reduced-motion":"enabled")}function ye(){return Ss()!=="enabled"}var qh=["notch"],Wh=["matFormFieldNotchedOutline",""],Gh=["*"],Hd=["iconPrefixContainer"],qd=["textPrefixContainer"],Wd=["iconSuffixContainer"],Gd=["textSuffixContainer"],$h=["textField"],Yh=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Kh=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Qh(n,i){n&1&&D(0,"span",21)}function Zh(n,i){if(n&1&&(c(0,"label",20),j(1,1),S(2,Qh,1,0,"span",21),d()),n&2){let e=y(2);w("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),H("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),E(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Xh(n,i){if(n&1&&S(0,Zh,3,5,"label",20),n&2){let e=y();E(e._hasFloatingLabel()?0:-1)}}function Jh(n,i){n&1&&D(0,"div",7)}function ef(n,i){}function tf(n,i){if(n&1&&Ee(0,ef,0,0,"ng-template",13),n&2){y(2);let e=dt(1);w("ngTemplateOutlet",e)}}function nf(n,i){if(n&1&&(c(0,"div",9),S(1,tf,1,1,null,13),d()),n&2){let e=y();w("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),E(e._forceDisplayInfixLabel()?-1:1)}}function rf(n,i){n&1&&(c(0,"div",10,2),j(2,2),d())}function of(n,i){n&1&&(c(0,"div",11,3),j(2,3),d())}function af(n,i){}function sf(n,i){if(n&1&&Ee(0,af,0,0,"ng-template",13),n&2){y();let e=dt(1);w("ngTemplateOutlet",e)}}function lf(n,i){n&1&&(c(0,"div",14,4),j(2,4),d())}function cf(n,i){n&1&&(c(0,"div",15,5),j(2,5),d())}function df(n,i){n&1&&D(0,"div",16)}function uf(n,i){n&1&&(c(0,"div",18),j(1,6),d())}function mf(n,i){if(n&1&&(c(0,"mat-hint",22),u(1),d()),n&2){let e=y(2);w("id",e._hintLabelId),p(),$(e.hintLabel)}}function pf(n,i){if(n&1&&(c(0,"div",19),S(1,mf,2,2,"mat-hint",22),j(2,7),D(3,"div",23),j(4,8),d()),n&2){let e=y();p(),E(e.hintLabel?1:-1)}}var He=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-label"]]})}return n})(),Jd=new x("MatError"),ar=(()=>{class n{id=l(pe).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&et("id",r.id)},inputs:{id:"id"},features:[he([{provide:Jd,useExisting:n}])]})}return n})(),Es=(()=>{class n{align="start";id=l(pe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(et("id",r.id),H("align",null),O("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),eu=new x("MatPrefix"),ks=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[he([{provide:eu,useExisting:n}])]})}return n})(),tu=new x("MatSuffix"),sr=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[he([{provide:tu,useExisting:n}])]})}return n})(),nu=new x("FloatingLabelParent"),$d=(()=>{class n{_elementRef=l(F);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(Bd);_ngZone=l(z);_parent=l(nu);_resizeSubscription=new Te;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return hf(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&O("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function hf(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Yd="mdc-line-ripple--active",Lo="mdc-line-ripple--deactivating",Kd=(()=>{class n{_elementRef=l(F);_cleanupTransitionEnd;constructor(){let e=l(z),t=l(de);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Lo),e.add(Yd)}deactivate(){this._elementRef.nativeElement.classList.add(Lo)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Lo);e.propertyName==="opacity"&&r&&t.remove(Yd,Lo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Qd=(()=>{class n{_elementRef=l(F);_ngZone=l(z);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Oe(qh,5),t&2){let o;A(o=P())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&O("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Wh,ngContentSelectors:Gh,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(oe(),It(0,"div",1),Jt(1,"div",2,0),j(3),en(),It(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),lr=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n})}return n})();var cr=new x("MatFormField"),ff=new x("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Zd="fill",gf="auto",Xd="fixed",_f="translateY(-50%)",Ke=(()=>{class n{_elementRef=l(F);_changeDetectorRef=l(ge);_platform=l(Y);_idGenerator=l(pe);_ngZone=l(z);_defaults=l(ff,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=wi("iconPrefixContainer");_textPrefixContainerSignal=wi("textPrefixContainer");_iconSuffixContainerSignal=wi("iconSuffixContainer");_textSuffixContainerSignal=wi("textSuffixContainer");_prefixSuffixContainers=fe(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Rl(He);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=$t(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||gf}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Zd;this._appearanceSignal.set(t)}_appearanceSignal=L(Zd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Xd}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Xd}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new M;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ye();constructor(){let e=this._defaults,t=l(Ut);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),pn(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=fe(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ie([void 0,void 0]),J(()=>[t.errorState,t.userAriaDescribedBy]),_a(),xe(([[o,a],[s,m]])=>o!==s||a!==m)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ee(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Pn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Il({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=fe(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,m=r?.getBoundingClientRect().width??0,h=o?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",_=`${a+s}px`,le=`calc(${f} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,X=`var(--mat-mdc-form-field-label-transform, ${_f} translateX(${le}))`,te=a+s+m+h;return[X,te]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Cl(o,r._labelChild,He,5),Ne(o,lr,5)(o,eu,5)(o,tu,5)(o,Jd,5)(o,Es,5)),t&2){xa();let a;A(a=P())&&(r._formFieldControl=a.first),A(a=P())&&(r._prefixChildren=a),A(a=P())&&(r._suffixChildren=a),A(a=P())&&(r._errorChildren=a),A(a=P())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(wl(r._iconPrefixContainerSignal,Hd,5)(r._textPrefixContainerSignal,qd,5)(r._iconSuffixContainerSignal,Wd,5)(r._textSuffixContainerSignal,Gd,5),Oe($h,5)(Hd,5)(qd,5)(Wd,5)(Gd,5)($d,5)(Qd,5)(Kd,5)),t&2){xa(4);let o;A(o=P())&&(r._textField=o.first),A(o=P())&&(r._iconPrefixContainer=o.first),A(o=P())&&(r._textPrefixContainer=o.first),A(o=P())&&(r._iconSuffixContainer=o.first),A(o=P())&&(r._textSuffixContainer=o.first),A(o=P())&&(r._floatingLabel=o.first),A(o=P())&&(r._notchedOutline=o.first),A(o=P())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&O("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[he([{provide:cr,useExisting:n},{provide:nu,useExisting:n}])],ngContentSelectors:Kh,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(oe(Yh),Ee(0,Xh,1,1,"ng-template",null,0,gn),c(2,"div",6,1),k("click",function(a){return r._control.onContainerClick(a)}),S(4,Jh,1,0,"div",7),c(5,"div",8),S(6,nf,2,2,"div",9),S(7,rf,3,0,"div",10),S(8,of,3,0,"div",11),c(9,"div",12),S(10,sf,1,1,null,13),j(11),d(),S(12,lf,3,0,"div",14),S(13,cf,3,0,"div",15),d(),S(14,df,1,0,"div",16),d(),c(15,"div",17),S(16,uf,2,0,"div",18)(17,pf,5,1,"div",19),d()),t&2){let o;p(2),O("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),E(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),E(r._hasOutline()?6:-1),p(),E(r._hasIconPrefix?7:-1),p(),E(r._hasTextPrefix?8:-1),p(2),E(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),E(r._hasTextSuffix?12:-1),p(),E(r._hasIconSuffix?13:-1),p(),E(r._hasOutline()?-1:14),p(),O("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),E((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[$d,Qd,_n,Kd,Es],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var Pe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[Io,Ke,G]})}return n})();var bf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return n})(),vf={passive:!0},iu=(()=>{class n{_platform=l(Y);_ngZone=l(z);_renderer=l(Je).createRenderer(null,null);_styleLoader=l(ke);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return We;this._styleLoader.load(bf);let t=rt(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new M,a="cdk-text-field-autofilled",s=h=>{h.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!0}))):h.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!1})))},m=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,vf)));return this._monitoredElements.set(t,{subject:o,unlisten:m}),o}stopMonitoring(e){let t=rt(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ru=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({})}return n})();var ou=new x("MAT_INPUT_VALUE_ACCESSOR");var ln=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ai=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var yf=["button","checkbox","file","hidden","image","radio","range","reset","submit"],xf=new x("MAT_INPUT_CONFIG"),vt=(()=>{class n{_elementRef=l(F);_platform=l(Y);ngControl=l(kt,{optional:!0,self:!0});_autofillMonitor=l(iu);_ngZone=l(z);_formField=l(cr,{optional:!0});_renderer=l(de);_uid=l(pe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(xf,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new M;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=$t(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(be.required)??!1}set required(e){this._required=$t(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ws().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=$t(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ws().has(e));constructor(){let e=l(Dt,{optional:!0}),t=l(Gt,{optional:!0}),r=l(ln),o=l(ou,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?hn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ai(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&pn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){yf.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&k("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(et("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),H("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),O("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",R]},exportAs:["matInput"],features:[he([{provide:lr,useExisting:n}]),Me]})}return n})(),yt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[Pe,Pe,ru,G]})}return n})();var dr=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new M;constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var Ds=(()=>{class n{_listeners=[];notify(e,t){for(let r of this._listeners)r(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Cf=20,Os=(()=>{class n{_ngZone=l(z);_platform=l(Y);_renderer=l(Je).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new M;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Cf){return this._platform.isBrowser?new Qt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(fa(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):V()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(xe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=rt(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wf=20,kn=(()=>{class n{_platform=l(Y);_listeners;_viewportSize=null;_change=new M;_document=l(ne);constructor(){let e=l(z),t=l(Je).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=wf){return e>0?this._change.pipe(fa(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Vo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({})}return n})(),Rs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[G,Vo,G,Vo]})}return n})();var ur=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},li=class extends ur{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},Yt=class extends ur{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Is=class extends ur{element;constructor(i){super(),this.element=i instanceof F?i.nativeElement:i}},ci=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof li)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Yt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Is)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},zo=class extends ci{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(va,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||ie.NULL,o=r.get(ot,t.injector);e=Al(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var mr=(()=>{class n extends ci{_moduleRef=l(va,{optional:!0});_document=l(ne);_viewContainerRef=l(Bt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new U;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[re]})}return n})(),di=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({})}return n})();var au=Vd();function hu(n){return new Bo(n.get(kn),n.get(ne))}var Bo=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=ve(-this._previousScrollPosition.left),i.style.top=ve(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),au&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),au&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function fu(n,i){return new jo(n.get(Os),n.get(z),n.get(kn),i)}var jo=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(xe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var pr=class{enable(){}disable(){}attach(){}};function As(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return t||r||o||a})}function su(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return t||r||o||a})}function hr(n,i){return new Uo(n.get(Os),n.get(kn),n.get(z),i)}var Uo=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();As(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},gu=(()=>{class n{_injector=l(ie);constructor(){}noop=()=>new pr;close=e=>fu(this._injector,e);block=()=>hu(this._injector);reposition=e=>hr(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),On=class{positionStrategy;scrollStrategy=new pr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Ho=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var _u=(()=>{class n{_attachedOverlays=[];_document=l(ne);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bu=(()=>{class n extends _u{_ngZone=l(z);_renderer=l(Je).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vu=(()=>{class n extends _u{_platform=l(Y);_ngZone=l(z);_renderer=l(Je).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ae(e)};_clickListener=e=>{let t=Ae(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],m=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,m))){if(lu(s.overlayElement,t)||lu(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>m.next(e)):m.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function lu(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var yu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return n})(),xu=(()=>{class n{_platform=l(Y);_containerElement;_document=l(ne);_styleLoader=l(ke);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Cs()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Cs()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(yu)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ps=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ts(n){return n&&n.nodeType===1}var qo=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new M;_attachments=new M;_detachments=new M;_positionStrategy;_scrollStrategy;_locationChanges=Te.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new M;_outsidePointerEvents=new M;_afterNextRenderRef;constructor(i,e,t,r,o,a,s,m,h,f=!1,_,q){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=m,this._outsideClickDispatcher=h,this._animationsDisabled=f,this._injector=_,this._renderer=q,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Xe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=g(g({},this._config),i),this._updateElementSize()}setDirection(i){this._config=K(g({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=ve(this._config.width),i.height=ve(this._config.height),i.minWidth=ve(this._config.minWidth),i.minHeight=ve(this._config.minHeight),i.maxWidth=ve(this._config.maxWidth),i.maxHeight=ve(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ts(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ps(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=ni(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Xe(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},cu="cdk-overlay-connected-position-bounding-box",Mf=/([A-Za-z%]+)$/;function Fs(n,i){return new Wo(i,n.get(kn),n.get(ne),n.get(Y),n.get(xu))}var Wo=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new M;_resizeSubscription=Te.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(cu),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let m=this._getOriginPoint(i,r,s),h=this._getOverlayPoint(m,e,s),f=this._getOverlayFit(h,e,t,s);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,m);return}if(this._canFitWithFlexibleDimensions(f,h,t)){o.push({position:s,origin:m,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(m,s)});continue}(!a||a.overlayFit.visibleArea<f.visibleArea)&&(a={overlayFit:f,overlayPoint:h,originPoint:m,position:s,overlayRect:e})}if(o.length){let s=null,m=-1;for(let h of o){let f=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);f>m&&(m=f,s=h)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Dn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(cu),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof F?this._origin.nativeElement:Ts(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=i.top+i.height/2:o=t.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=uu(e),{x:a,y:s}=i,m=this._getOffset(r,"x"),h=this._getOffset(r,"y");m&&(a+=m),h&&(s+=h);let f=0-a,_=a+o.width-t.width,q=0-s,le=s+o.height-t.height,X=this._subtractOverflows(o.width,f,_),te=this._subtractOverflows(o.height,q,le),Qe=X*te;return{visibleArea:Qe,isCompletelyWithinViewport:o.width*o.height===Qe,fitsInViewportVertically:te===o.height,fitsInViewportHorizontally:X==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=du(this._overlayRef.getConfig().minHeight),s=du(this._overlayRef.getConfig().minWidth),m=i.fitsInViewportVertically||a!=null&&a<=r,h=i.fitsInViewportHorizontally||s!=null&&s<=o;return m&&h}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=uu(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),m=Math.max(o.top-t.top-i.y,0),h=Math.max(o.left-t.left-i.x,0),f=0,_=0;return r.width<=o.width?f=h||-a:f=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?_=m||-s:_=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:f,y:_},{x:i.x+f,y:i.y+_}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Sf(this._lastScrollVisibility,t)){let r=new Ho(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let le=Math.min(t.bottom-i.y+t.top,i.y),X=this._lastBoundingBoxSize.height;o=le*2,a=i.y-le,o>X&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-X/2)}let m=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,h=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,f,_,q;if(h)q=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=i.x-this._getViewportMarginStart();else if(m)_=i.x,f=t.right-i.x-this._getViewportMarginEnd();else{let le=Math.min(t.right-i.x+t.left,i.x),X=this._lastBoundingBoxSize.width;f=le*2,_=i.x-le,f>X&&!this._isInitialRender&&!this._growAfterOpen&&(_=i.x-X/2)}return{top:a,left:_,bottom:s,right:q,width:f,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ve(t.width),r.height=ve(t.height),r.top=ve(t.top)||"auto",r.bottom=ve(t.bottom)||"auto",r.left=ve(t.left)||"auto",r.right=ve(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ve(o)),a&&(r.maxWidth=ve(a))}this._lastBoundingBoxSize=t,Dn(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Dn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Dn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let f=this._viewportRuler.getViewportScrollPosition();Dn(t,this._getExactOverlayY(e,i,f)),Dn(t,this._getExactOverlayX(e,i,f))}else t.position="static";let s="",m=this._getOffset(e,"x"),h=this._getOffset(e,"y");m&&(s+=`translateX(${m}px) `),h&&(s+=`translateY(${h}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=ve(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=ve(a.maxWidth):o&&(t.maxWidth="")),Dn(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ve(o.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ve(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:su(i,t),isOriginOutsideView:As(i,t),isOverlayClipped:su(e,t),isOverlayOutsideView:As(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&ni(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof F)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Dn(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function du(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(Mf);return!e||e==="px"?parseFloat(i):null}return n||null}function uu(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Sf(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var mu="cdk-global-overlay-wrapper";function $o(n){return new Go}var Go=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(mu),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,m=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),h=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),f=this._xPosition,_=this._xOffset,q=this._overlayRef.getConfig().direction==="rtl",le="",X="",te="";m?te="flex-start":f==="center"?(te="center",q?X=_:le=_):q?f==="left"||f==="end"?(te="flex-end",le=_):(f==="right"||f==="start")&&(te="flex-start",X=_):f==="left"||f==="start"?(te="flex-start",le=_):(f==="right"||f==="end")&&(te="flex-end",X=_),i.position=this._cssPosition,i.marginLeft=m?"0":le,i.marginTop=h?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=m?"0":X,e.justifyContent=te,e.alignItems=h?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(mu),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Cu=(()=>{class n{_injector=l(ie);constructor(){}global(){return $o()}flexibleConnectedTo(e){return Fs(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),fr=new x("OVERLAY_DEFAULT_CONFIG");function gr(n,i){n.get(ke).load(yu);let e=n.get(xu),t=n.get(ne),r=n.get(pe),o=n.get(Fn),a=n.get(Ut),s=n.get(de,null,{optional:!0})||n.get(Je).createRenderer(null,null),m=new On(i),h=n.get(fr,null,{optional:!0})?.usePopover??!0;m.direction=m.direction||a.value,"showPopover"in t.body?m.usePopover=i?.usePopover??h:m.usePopover=!1;let f=t.createElement("div"),_=t.createElement("div");f.id=r.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),_.appendChild(f),m.usePopover&&(_.setAttribute("popover","manual"),_.classList.add("cdk-overlay-popover"));let q=m.usePopover?m.positionStrategy?.getPopoverInsertionPoint?.():null;return Ts(q)?q.after(_):q?.type==="parent"?q.element.appendChild(_):e.getContainerElement().appendChild(_),new qo(new zo(f,o,n),_,f,m,n.get(z),n.get(bu),t,n.get(Ln),n.get(vu),i?.disableAnimations??n.get(Tr,null,{optional:!0})==="NoopAnimations",n.get(ot),s)}var wu=(()=>{class n{scrollStrategies=l(gu);_positionBuilder=l(Cu);_injector=l(ie);constructor(){}create(e){return gr(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ef=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],kf=new x("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(ie);return()=>hr(n)}}),ui=(()=>{class n{elementRef=l(F);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),Mu=new x("cdk-connected-overlay-default-config"),Yo=(()=>{class n{_dir=l(Ut,{optional:!0});_injector=l(ie);_overlayRef;_templatePortal;_backdropSubscription=Te.EMPTY;_attachSubscription=Te.EMPTY;_detachSubscription=Te.EMPTY;_positionSubscription=Te.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(kf);_ngZone=l(z);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new U;positionChange=new U;attach=new U;detach=new U;overlayKeydown=new U;overlayOutsideClick=new U;constructor(){let e=l(st),t=l(Bt),r=l(Mu,{optional:!0}),o=l(fr,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Yt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Ef);let e=this._overlayRef=gr(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!bt(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=Ae(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new On({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Fs(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ui?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ui?this.origin.elementRef.nativeElement:this.origin instanceof F?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(ll(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",R],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",R],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",R],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",R],push:[2,"cdkConnectedOverlayPush","push",R],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",R],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",R],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Me]})}return n})(),_r=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({providers:[wu],imports:[G,di,Rs,Rs]})}return n})();var xt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(xt||{}),Ns=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=xt.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Su=ti({passive:!0,capture:!0}),Ls=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Su)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Su)))}_delegateEventHandler=i=>{let e=Ae(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},br={enterDuration:225,exitDuration:150},Df=800,Eu=ti({passive:!0,capture:!0}),ku=["mousedown","touchstart"],Du=["mouseup","mouseleave","touchend","touchcancel"],Of=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),vr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ls;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=rt(t)),o&&o.get(ke).load(Of)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},br),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||Rf(i,e,r),s=i-r.left,m=e-r.top,h=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-a}px`,f.style.top=`${m-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(f);let _=window.getComputedStyle(f),q=_.transitionProperty,le=_.transitionDuration,X=q==="none"||le==="0s"||le==="0s, 0s"||r.width===0&&r.height===0,te=new Ns(this,f,t,X);f.style.transform="scale3d(1, 1, 1)",te.state=xt.FADING_IN,t.persistent||(this._mostRecentTransientRipple=te);let Qe=null;return!X&&(h||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let In=()=>{Qe&&(Qe.fallbackTimer=null),clearTimeout(mn),this._finishRippleTransition(te)},Vt=()=>this._destroyRipple(te),mn=setTimeout(Vt,h+100);f.addEventListener("transitionend",In),f.addEventListener("transitioncancel",Vt),Qe={onTransitionEnd:In,onTransitionCancel:Vt,fallbackTimer:mn}}),this._activeRipples.set(te,Qe),(X||!h)&&this._finishRippleTransition(te),te}fadeOutRipple(i){if(i.state===xt.FADING_OUT||i.state===xt.HIDDEN)return;let e=i.element,t=g(g({},br),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=xt.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=rt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ku.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Du.forEach(e=>{this._triggerElement.addEventListener(e,this,Eu)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===xt.FADING_IN?this._startFadeOutTransition(i):i.state===xt.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=xt.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=xt.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Ji(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Df;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!er(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===xt.VISIBLE||i.config.terminateOnPointerUp&&i.state===xt.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(ku.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Du.forEach(e=>i.removeEventListener(e,this,Eu)),this._pointerUpEventsRegistered=!1))}};function Rf(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Vs=new x("mat-ripple-global-options"),mi=(()=>{class n{_elementRef=l(F);_animationsDisabled=ye();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(z),t=l(Y),r=l(Vs,{optional:!0}),o=l(ie);this._globalOptions=r||{},this._rippleRenderer=new vr(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,g(g({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&O("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Ou=(()=>{class n{_animationsDisabled=ye();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&O("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})();var cn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var If=["text"],Af=[[["mat-icon"]],"*"],Pf=["mat-icon","*"];function Tf(n,i){if(n&1&&D(0,"mat-pseudo-checkbox",1),n&2){let e=y();w("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Ff(n,i){if(n&1&&D(0,"mat-pseudo-checkbox",3),n&2){let e=y();w("disabled",e.disabled)}}function Nf(n,i){if(n&1&&(c(0,"span",4),u(1),d()),n&2){let e=y();p(),ue("(",e.group.label,")")}}var Bs=new x("MAT_OPTION_PARENT_COMPONENT"),js=new x("MatOptgroup");var zs=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},pi=(()=>{class n{_element=l(F);_changeDetectorRef=l(ge);_parent=l(Bs,{optional:!0});group=l(js,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(pe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=L(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new U;_text;_stateChanges=new M;constructor(){let e=l(ke);e.load(cn),e.load(jt),this._signalDisableRipple=!!this._parent&&hn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!bt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new zs(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Oe(If,7),t&2){let o;A(o=P())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&k("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(et("id",r.id),H("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),O("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",R]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Pf,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(oe(Af),S(0,Tf,1,2,"mat-pseudo-checkbox",1),j(1),c(2,"span",2,0),j(4,1),d(),S(5,Ff,1,1,"mat-pseudo-checkbox",3),S(6,Nf,2,1,"span",4),D(7,"div",5)),t&2&&(E(r.multiple?0:-1),p(5),E(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),E(r.group&&r.group._inert?6:-1),p(),w("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Ou,mi],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return n})();function Ru(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function Iu(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var dn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[G]})}return n})();var Au=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[G]})}return n})();var Us=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[dn,Au,pi,G]})}return n})();var Lf=["trigger"],Vf=["panel"],zf=[[["mat-select-trigger"]],"*"],Bf=["mat-select-trigger","*"];function jf(n,i){if(n&1&&(c(0,"span",4),u(1),d()),n&2){let e=y();p(),$(e.placeholder)}}function Uf(n,i){n&1&&j(0)}function Hf(n,i){if(n&1&&(c(0,"span",11),u(1),d()),n&2){let e=y(2);p(),$(e.triggerValue)}}function qf(n,i){if(n&1&&(c(0,"span",5),S(1,Uf,1,0)(2,Hf,2,1,"span",11),d()),n&2){let e=y();p(),E(e.customTrigger?1:2)}}function Wf(n,i){if(n&1){let e=Fe();c(0,"div",12,1),k("keydown",function(r){Ce(e);let o=y();return we(o._handleKeydown(r))}),j(2,1),d()}if(n&2){let e=y();ut(e.panelClass),O("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),H("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Gf=new x("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(ie);return()=>hr(n)}}),$f=new x("MAT_SELECT_CONFIG"),Yf=new x("MatSelectTrigger"),Hs=class{source;value;constructor(i,e){this.source=i,this.value=e}},Pu=(()=>{class n{_viewportRuler=l(kn);_changeDetectorRef=l(ge);_elementRef=l(F);_dir=l(Ut,{optional:!0});_idGenerator=l(pe);_renderer=l(de);_parentFormField=l(cr,{optional:!0});ngControl=l(kt,{self:!0,optional:!0});_liveAnnouncer=l(rr);_defaultOptions=l($f,{optional:!0});_animationsDisabled=ye();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=Ru(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Iu(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Hs(this,e)}_scrollStrategyFactory=l(Gf);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=L(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(be.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=An(()=>{let e=this.options;return e?e.changes.pipe(Ie(e),De(()=>Pn(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(De(()=>this.optionSelectionChanges))});openedChange=new U;_openedStream=this.openedChange.pipe(xe(e=>e),J(()=>{}));_closedStream=this.openedChange.pipe(xe(e=>!e),J(()=>{}));selectionChange=new U;valueChange=new U;constructor(){let e=l(ln),t=l(Dt,{optional:!0}),r=l(Gt,{optional:!0}),o=l(new Nn("tabindex"),{optional:!0}),a=l(fr,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ai(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new dr(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ee(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ee(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ie(null),ee(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ot(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&No(this._trackedModal,"aria-owns",t),xs(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;No(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!bt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let m=this.selected;m&&s!==m&&this._liveAnnouncer.announce(m.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!bt(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(m=>!m.disabled&&!m.selected);this.options.forEach(m=>{m.disabled||(s?m.select():m.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!bt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ui?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new or(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Pn(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ee(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Pn(...this.options.map(t=>t._stateChanges)).pipe(ee(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ae(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,Yf,5)(o,pi,5)(o,js,5),t&2){let a;A(a=P())&&(r.customTrigger=a.first),A(a=P())&&(r.options=a),A(a=P())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&Oe(Lf,5)(Vf,5)(Yo,5),t&2){let o;A(o=P())&&(r.trigger=o.first),A(o=P())&&(r.panel=o.first),A(o=P())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&k("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(H("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),O("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",R],disableRipple:[2,"disableRipple","disableRipple",R],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:$e(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",R],placeholder:"placeholder",required:[2,"required","required",R],multiple:[2,"multiple","multiple",R],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",R],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",$e],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",R]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[he([{provide:lr,useExisting:n},{provide:Bs,useExisting:n}]),Me],ngContentSelectors:Bf,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(oe(zf),c(0,"div",2,0),k("click",function(){return r.open()}),c(3,"div",3),S(4,jf,2,1,"span",4)(5,qf,3,1,"span",5),d(),c(6,"div",6)(7,"div",7),yi(),c(8,"svg",8),D(9,"path",9),d()()()(),Ee(10,Wf,3,16,"ng-template",10),k("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=dt(1);p(3),H("id",r._valueId),p(),E(r.empty?4:5),p(6),w("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[ui,Yo],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return n})();var Tu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[_r,Us,G,Vo,Pe,Us]})}return n})();var Qf={capture:!0},Zf=["focus","mousedown","mouseenter","touchstart"],qs="mat-ripple-loader-uninitialized",Ws="mat-ripple-loader-class-name",Fu="mat-ripple-loader-centered",Ko="mat-ripple-loader-disabled",Nu=(()=>{class n{_document=l(ne);_animationsDisabled=ye();_globalRippleOptions=l(Vs,{optional:!0});_platform=l(Y);_ngZone=l(z);_injector=l(ie);_eventCleanups;_hosts=new Map;constructor(){let e=l(Je).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Zf.map(t=>e.listen(this._document,t,this._onInteraction,Qf)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(qs,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Ws))&&e.setAttribute(Ws,t.className||""),t.centered&&e.setAttribute(Fu,""),t.disabled&&e.setAttribute(Ko,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Ko,""):e.removeAttribute(Ko)}_onInteraction=e=>{let t=Ae(e);if(t instanceof HTMLElement){let r=t.closest(`[${qs}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Ws)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??br.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??br.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Ko),rippleConfig:{centered:e.hasAttribute(Fu),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},m=new vr(s,this._ngZone,t,this._platform,this._injector),h=!s.rippleDisabled;h&&m.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:m,hasSetUpEvents:h}),e.removeAttribute(qs)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Xf=["mat-icon-button",""],Jf=["*"],eg=new x("MAT_BUTTON_CONFIG");function Lu(n){return n==null?void 0:$e(n)}var Gs=(()=>{class n{_elementRef=l(F);_ngZone=l(z);_animationsDisabled=ye();_config=l(eg,{optional:!0});_focusMonitor=l(Mn);_cleanupClick;_renderer=l(de);_rippleLoader=l(Nu);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(ke).load(cn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(H("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),ut(r.color?"mat-"+r.color:""),O("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",R],disabled:[2,"disabled","disabled",R],ariaDisabled:[2,"aria-disabled","ariaDisabled",R],disabledInteractive:[2,"disabledInteractive","disabledInteractive",R],tabIndex:[2,"tabIndex","tabIndex",Lu],_tabindex:[2,"tabindex","_tabindex",Lu]}})}return n})(),Kt=(()=>{class n extends Gs{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[re],attrs:Xf,ngContentSelectors:Jf,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(oe(),It(0,"span",0),j(1),It(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var tg=["matButton",""],ng=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ig=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Vu=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ae=(()=>{class n extends Gs{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=rg(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Vu.get(this._appearance):null,o=Vu.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[re],attrs:tg,ngContentSelectors:ig,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(oe(ng),It(0,"span",0),j(1),Jt(2,"span",1),j(3,1),en(),j(4,2),It(5,"span",2)(6,"span",3)),t&2&&O("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function rg(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var se=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[dn,G]})}return n})();function og(n,i){if(n&1){let e=Fe();c(0,"li",13),k("click",function(){let r=Ce(e).$implicit,o=y(2);return we(o.selectAddress(r))}),c(1,"mat-icon"),u(2,"location_on"),d(),c(3,"span"),u(4),d()()}if(n&2){let e=i.$implicit;p(4),$(e.display_name)}}function ag(n,i){if(n&1&&(c(0,"ul",7),lt(1,og,5,1,"li",null,Lr),d()),n&2){let e=y();p(),ct(e.addressSuggestions)}}var Qo=class n{http=l(Ll);router=l(ce);deliveryAddress="";deliveryOption="now";addressSuggestions=[];searchSubject=new M;constructor(){this.searchSubject.pipe(Tn(300),vi(),De(i=>{if(!i.trim()||i.length<3)return this.addressSuggestions=[],[];let e=`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(i)}&countrycodes=za&limit=5`;return this.http.get(e)})).subscribe(i=>{this.addressSuggestions=i})}onAddressInput(i){let e=i.target.value;this.searchSubject.next(e)}selectAddress(i){this.deliveryAddress=i.display_name,this.addressSuggestions=[]}onFindFood(){this.router.navigate(["/menu"],{queryParams:{search:this.deliveryAddress,option:this.deliveryOption}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-hero"]],decls:25,vars:3,consts:[["id","home",1,"home"],[1,"home-content"],[1,"search-box"],[1,"autocomplete-wrapper"],["appearance","fill",1,"address-field"],["matPrefix",""],["matInput","","placeholder","e.g. 123 Main St","autocomplete","off",3,"ngModelChange","input","ngModel"],[1,"suggestions-list"],["appearance","fill",1,"option-field"],[3,"ngModelChange","ngModel"],["value","now"],["value","schedule"],["mat-flat-button","",1,"find-food-btn",3,"click"],[3,"click"]],template:function(e,t){e&1&&(c(0,"section",0)(1,"div",1)(2,"h1"),u(3,"Order delivery near you"),d(),c(4,"p"),u(5,"Welcome to KwaJozi. Order or come by to visit the best kotas eKasi!."),d(),c(6,"div",2)(7,"div",3)(8,"mat-form-field",4)(9,"mat-label"),u(10,"Enter delivery address"),d(),c(11,"mat-icon",5),u(12,"location_on"),d(),c(13,"input",6),ht("ngModelChange",function(o){return pt(t.deliveryAddress,o)||(t.deliveryAddress=o),o}),k("input",function(o){return t.onAddressInput(o)}),d()(),S(14,ag,3,0,"ul",7),d(),c(15,"mat-form-field",8)(16,"mat-select",9),ht("ngModelChange",function(o){return pt(t.deliveryOption,o)||(t.deliveryOption=o),o}),c(17,"mat-option",10),u(18,"Deliver now"),d(),c(19,"mat-option",11),u(20,"Schedule for delivery"),d()()(),c(21,"button",12),k("click",function(){return t.onFindFood()}),c(22,"mat-icon"),u(23,"search"),d(),u(24," Find Food "),d()()()()),e&2&&(p(13),mt("ngModel",t.deliveryAddress),p(),E(t.addressSuggestions.length>0?14:-1),p(2),mt("ngModel",t.deliveryOption))},dependencies:[Le,an,Ye,_t,Wt,Bl,Pe,Ke,He,ks,yt,vt,Tu,Pu,pi,se,ae,me,Se],styles:["[_nghost-%COMP%]{display:block}.home[_ngcontent-%COMP%]{background:linear-gradient(#000000a6,#000000a6),url(https://images.pexels.com/photos/21821567/pexels-photo-21821567.jpeg);background-repeat:no-repeat;background-size:cover;background-position:center;min-height:75vh;padding:80px 20px;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff}.home-content[_ngcontent-%COMP%]{width:100%;max-width:900px;margin:0 auto}.home-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:52px;margin:0 0 12px;font-weight:800;line-height:1.2;text-shadow:0 2px 6px rgba(0,0,0,.5)}.home-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-style:italic;max-width:650px;margin:0 auto 32px;line-height:1.6}.search-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;gap:12px;flex-wrap:wrap}.autocomplete-wrapper[_ngcontent-%COMP%]{position:relative;width:450px;max-width:100%}.address-field[_ngcontent-%COMP%]{width:100%}.option-field[_ngcontent-%COMP%]{width:220px;max-width:100%}.search-box[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper{background-color:#fff!important;border-radius:8px!important;height:56px!important;padding:0 12px!important}.search-box[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mdc-floating-label{color:#236845!important}.search-box[_ngcontent-%COMP%]     .mat-mdc-form-field .mdc-floating-label{color:#64748b}.search-box[_ngcontent-%COMP%]     .mdc-line-ripple{display:none!important}.search-box[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none!important}.search-box[_ngcontent-%COMP%]     input.mat-mdc-input-element{color:#1a202c!important;font-size:15px!important}.find-food-btn[_ngcontent-%COMP%]{height:56px!important;padding:0 28px!important;font-size:16px!important;font-weight:700!important;border-radius:8px!important;background-color:#236845!important;color:#fff!important;white-space:nowrap}.find-food-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.suggestions-list[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;z-index:1000;background-color:#fff;border-radius:8px;box-shadow:0 8px 24px #00000040;margin:6px 0 0;padding:0;list-style:none;max-height:250px;overflow-y:auto;border:1px solid #cbd5e1}.suggestions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px;color:#1e293b;font-size:14px;font-style:normal;cursor:pointer;border-bottom:1px solid #f1f5f9;text-align:left}.suggestions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.suggestions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f0fdf4;color:#236845}.suggestions-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#236845}@media(max-width:768px){.home-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:34px}.search-box[_ngcontent-%COMP%]{flex-direction:column}.autocomplete-wrapper[_ngcontent-%COMP%], .option-field[_ngcontent-%COMP%], .find-food-btn[_ngcontent-%COMP%]{width:100%!important}}"]})};var sg=["*"];var lg=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],cg=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],dg=new x("MAT_CARD_CONFIG"),Ft=(()=>{class n{appearance;constructor(){let e=l(dg,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&O("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:sg,decls:1,vars:0,template:function(t,r){t&1&&(oe(),j(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return n})(),Zo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var hi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var zu=(()=>{class n{align="start";static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&O("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})(),Xo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:cg,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(oe(lg),j(0),Jt(1,"div",0),j(2,1),en(),j(3,2))},encapsulation:2,changeDetection:0})}return n})();var Bu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return n})();var Nt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[G]})}return n})();function ug(n,i){if(n&1){let e=Fe();c(0,"div",1)(1,"button",2),k("click",function(){Ce(e);let r=y();return we(r.action())}),u(2),d()()}if(n&2){let e=y();p(2),ue(" ",e.data.action," ")}}var mg=["label"];function pg(n,i){}var hg=Math.pow(2,31)-1,wr=class{_overlayRef;instance;containerInstance;_afterDismissed=new M;_afterOpened=new M;_onAction=new M;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,hg))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},ju=new x("MatSnackBarData"),fi=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},fg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),gg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),_g=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Uu=(()=>{class n{snackBarRef=l(wr);data=l(ju);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(c(0,"div",0),u(1),d(),S(2,ug,3,1,"div",1)),t&2&&(p(),ue(" ",r.data.message,`
`),p(),E(r.hasAction?2:-1))},dependencies:[ae,fg,gg,_g],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),$s="_mat-snack-bar-enter",Ys="_mat-snack-bar-exit",bg=(()=>{class n extends ci{_ngZone=l(z);_elementRef=l(F);_changeDetectorRef=l(ge);_platform=l(Y);_animationsDisabled=ye();snackBarConfig=l(fi);_document=l(ne);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(ie);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new M;_onExit=new M;_onEnter=new M;_animationState="void";_live;_label;_role;_liveElementId=l(pe).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Ys?this._completeExit():e===$s&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd($s)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd($s)},200)))}exit(){return this._destroyed?V(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ys)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Ys),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&Oe(mr,7)(mg,7),t&2){let o;A(o=P())&&(r._portalOutlet=o.first),A(o=P())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&k("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),t&2&&O("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[re],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(c(0,"div",1)(1,"div",2,0)(3,"div",3),Ee(4,pg,0,0,"ng-template",4),d(),D(5,"div"),d()()),t&2&&(p(5),H("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[mr],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return n})(),vg=new x("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new fi}),Ks=(()=>{class n{_live=l(rr);_injector=l(ie);_breakpointObserver=l(ir);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(vg);_animationsDisabled=ye();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Uu;snackBarContainerComponent=bg;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=g(g({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=ie.create({parent:r||this._injector,providers:[{provide:fi,useValue:t}]}),a=new li(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=g(g(g({},new fi),this._defaultConfig),t),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new wr(a,o);if(e instanceof st){let m=new Yt(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(m)}else{let m=this._createInjector(r,s),h=new li(e,void 0,m),f=a.attachComponentPortal(h);s.instance=f.instance}return this._breakpointObserver.observe(jd.HandsetPortrait).pipe(ee(o.detachments())).subscribe(m=>{o.overlayElement.classList.toggle(this.handsetCssClass,m.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new On;t.direction=e.direction;let r=$o(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,gr(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ie.create({parent:r||this._injector,providers:[{provide:wr,useValue:t},{provide:ju,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Hu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({providers:[Ks],imports:[_r,di,se,Uu,G]})}return n})();var Lt=class n{cart=L([]);isCartOpen=L(!1);cartItems=this.cart;totalAmount=fe(()=>this.cartTotal());cartCount=fe(()=>this.cart().reduce((i,e)=>i+e.quantity,0));cartTotal=fe(()=>this.cart().reduce((i,e)=>i+e.item.price*e.quantity,0));toggleCart(){this.isCartOpen.update(i=>!i)}addToCart(i){this.cart.update(e=>e.find(r=>r.item.id===i.id)?e.map(r=>r.item.id===i.id?K(g({},r),{quantity:r.quantity+1}):r):[...e,{item:i,quantity:1}])}incrementQuantity(i){this.cart.update(e=>e.map(t=>t.item.id===i?K(g({},t),{quantity:t.quantity+1}):t))}decrementQuantity(i){this.cart.update(e=>e.map(t=>t.item.id===i?K(g({},t),{quantity:t.quantity-1}):t).filter(t=>t.quantity>0))}removeFromCart(i){this.cart.update(e=>e.filter(t=>t.item.id!==i))}clearCart(){this.cart.set([])}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var yg=(n,i)=>i.id;function xg(n,i){if(n&1){let e=Fe();c(0,"mat-card",5)(1,"div",6),D(2,"img",7),c(3,"span",8),u(4),d()(),c(5,"mat-card-header")(6,"mat-card-title",9),u(7),d()(),c(8,"mat-card-content",10)(9,"p",11),u(10),d()(),c(11,"mat-card-actions",12)(12,"button",13),k("click",function(){let r=Ce(e).$implicit,o=y();return we(o.addToCart(r))}),c(13,"mat-icon"),u(14,"add_shopping_cart"),d(),u(15," Add "),d()()()}if(n&2){let e=i.$implicit;p(2),w("src",e.imageUrl,Fr)("alt",e.name),p(2),ue("R",e.price.toFixed(2)),p(3),$(e.name),p(3),$(e.description)}}var Jo=class n{cartService=l(Lt);authService=l(ft);router=l(ce);route=l(it);snackBar=l(Ks);searchQuery="";menuItems=[{id:1,name:"Saucy Kota",description:"It comes with chips, an egg, cheese, vienna ,atchar and variety of sauces",price:53,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcBW3suBpefZUGShItRoDF-Li7AuY1sSeXlBhSd-wxA&s=10"},{id:2,name:"Salad Kota",description:"It comes with chips, an egg, cheese, bacon, lettuce and cucumber",price:55,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAvTfvERYc7EpR6UpprK6FATs4Zm7_JjmqCf1S6OqAw&s=10"},{id:3,name:"Regular Kota",description:"It comes with chips, polony and atchar",price:40,imageUrl:"/number10.png"},{id:4,name:"Pork-rib Kota",description:"It comes with chips, pork-rib, half done egg",price:60,imageUrl:"/number15.png"},{id:5,name:"Classic Special Kota",description:"A quarter loaf packed with chips, polony, cheese, egg, atchar, and special sauce.",price:45,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ25U88J4gnG0rezCmh2wCDtJ6NtDqO_xpyrsO6NJG2Q&s"},{id:6,name:"Chips & Russian",description:"Crispy Russian sausage and chips.",price:40,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ufpf1HeEKImWjpgeJi7lT6MaHnOd4Q6V-9UY5LqBHA&s=10"},{id:7,name:"Family Feast Combo",description:"4 Special Kotas, 3 Large Russian & Chips, plus 2 200ml of Soft Drink.",price:230,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JcujqhWP5wGu6AdxUfYiZVVjKR1S27bW6eSrwsQt_g&s=10"},{id:8,name:"Large Chips with four Russians",description:"Freshly cut, seasoned slap chips and cheese grill viennas",price:140,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5G_znqAA_uzPyzl5K1caXhHkm4kDPTbP1oLgkKpsAg&s=10"}];filteredMenuItems=[];ngOnInit(){this.route.queryParams.subscribe(i=>{this.searchQuery=i.search||"",this.filterMenu()})}filterMenu(){if(!this.searchQuery.trim()){this.filteredMenuItems=[...this.menuItems];return}let i=this.searchQuery.toLowerCase();this.filteredMenuItems=this.menuItems.filter(e=>e.name.toLowerCase().includes(i)||e.description.toLowerCase().includes(i))}addToCart(i){if(!this.authService.isAuthenticated()){this.snackBar.open("Please register or sign in to add items to your cart.","Register Now",{duration:4e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["snack-warning","center-toast-container"]}).onAction().subscribe(()=>{this.router.navigate(["/register"])});return}this.cartService.addToCart(i),this.snackBar.open(`${i.name} added to cart!`,"Close",{duration:2500,horizontalPosition:"center",verticalPosition:"top",panelClass:["snack-success","center-toast-container"]})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-menu"]],decls:9,vars:0,consts:[[1,"menu-section"],[1,"menu-container"],[1,"menu-title"],[1,"menu-subtitle"],[1,"menu-grid"],["appearance","outlined",1,"menu-card"],[1,"card-image-wrapper"],["mat-card-image","",1,"card-img",3,"src","alt"],[1,"price-badge"],[1,"item-name"],[1,"card-content"],[1,"item-description"],["align","end",1,"card-actions"],["mat-raised-button","","color","primary",1,"add-btn",3,"click"]],template:function(e,t){e&1&&(c(0,"section",0)(1,"div",1)(2,"h2",2),u(3,"Our Menu"),d(),c(4,"p",3),u(5,"Freshly prepared kotas made with premium local ingredients."),d(),c(6,"div",4),lt(7,xg,16,5,"mat-card",5,yg),d()()()),e&2&&(p(7),ct(t.menuItems))},dependencies:[Le,Nt,Ft,zu,hi,Xo,Bu,Zo,se,ae,me,Se,Hu],styles:[".menu-section[_ngcontent-%COMP%]{padding:30px 16px;background-color:var(--bg-light)}.menu-container[_ngcontent-%COMP%]{max-width:var(--container-max-width);margin:0 auto}.menu-title[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:var(--primary-color);text-align:center;margin:0 0 4px}.menu-subtitle[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-muted);text-align:center;margin:0 0 24px}.menu-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.menu-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-radius:8px!important;border-color:var(--border-color)!important;background-color:var(--bg-white)!important;box-shadow:0 1px 4px #0000000d!important;overflow:hidden;transition:transform .15s ease,box-shadow .15s ease}.menu-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #00000014!important}.card-image-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:130px;overflow:hidden;background-color:#f0f0f0}.card-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;margin:0!important}.price-badge[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;background-color:var(--primary-color);color:#fff;font-weight:700;font-size:.8rem;padding:3px 8px;border-radius:12px;box-shadow:0 2px 4px #0003}mat-card-header[_ngcontent-%COMP%]{padding:10px 12px 4px!important}.item-name[_ngcontent-%COMP%]{font-size:1rem!important;font-weight:700!important;color:var(--text-dark)}.card-content[_ngcontent-%COMP%]{flex:1;padding:0 12px 8px!important}.item-description[_ngcontent-%COMP%]{margin:0;font-size:.82rem;color:var(--text-muted);line-height:1.4}.card-actions[_ngcontent-%COMP%]{padding:8px 12px 10px!important}.add-btn[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   .add-btn.mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;width:100%;height:34px!important;line-height:34px!important;font-size:.82rem!important;font-weight:600!important;border-radius:6px!important;background-color:#236845!important;color:#fff!important;transition:background-color .15s ease!important}.add-btn[_ngcontent-%COMP%]:hover, .card-actions[_ngcontent-%COMP%]   .add-btn.mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%]:hover, .card-actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.add-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px!important;width:18px!important;height:18px!important;margin-right:4px!important}@media(max-width:500px){.menu-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}.card-image-wrapper[_ngcontent-%COMP%]{height:110px}}"]})};var ea=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-about"]],decls:50,vars:0,consts:[["id","about",1,"about-section"],[1,"about-container"],[1,"about-header"],[1,"about-title"],[1,"about-subtitle"],["appearance","outlined",1,"about-card","main-story"],[1,"story-content"],[1,"values-grid"],["appearance","outlined",1,"value-card"],[1,"value-icon"],[1,"about-cta"],["mat-raised-button","","color","accent","routerLink","/menu",1,"cta-btn"]],template:function(e,t){e&1&&(c(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),u(4,"About KwaJozi"),d(),c(5,"p",4),u(6,"Serving authentic, handcrafted kotas straight to your doorstep."),d()(),c(7,"mat-card",5)(8,"mat-card-content",6)(9,"h3"),u(10,"Our Story"),d(),c(11,"p"),u(12," Established in 2021, "),c(13,"strong"),u(14,"KwaJozi"),d(),u(15," was born out of a deep passion for local street cuisine and a goal to elevate the iconic township kota. What started as a small kitchen experiment quickly grew into a neighborhood favorite. "),d(),c(16,"p"),u(17," We take pride in using only fresh, locally sourced ingredients\u2014from hot crispy chips and classic atchar to premium meats and rich sauces\u2014ensuring every bite delivers maximum flavor and quality. "),d()()(),c(18,"div",7)(19,"mat-card",8)(20,"mat-card-content")(21,"mat-icon",9),u(22,"local_fire_department"),d(),c(23,"h4"),u(24,"Fresh & Hot"),d(),c(25,"p"),u(26,"Every order is prepared fresh on demand using top-grade ingredients to guarantee hot, satisfying meals."),d()()(),c(27,"mat-card",8)(28,"mat-card-content")(29,"mat-icon",9),u(30,"speed"),d(),c(31,"h4"),u(32,"Fast Delivery"),d(),c(33,"p"),u(34,"We know the craving is real! Our efficient kitchen setup and delivery workflow get your order to you quickly."),d()()(),c(35,"mat-card",8)(36,"mat-card-content")(37,"mat-icon",9),u(38,"favorite"),d(),c(39,"h4"),u(40,"Community First"),d(),c(41,"p"),u(42,"Customer satisfaction is at the heart of everything we do. We build lasting relationships with every meal served."),d()()()(),c(43,"div",10)(44,"h3"),u(45,"Ready to satisfy your cravings?"),d(),c(46,"a",11)(47,"mat-icon"),u(48,"restaurant_menu"),d(),u(49," Explore Our Menu "),d()()()())},dependencies:[Le,ze,Nt,Ft,hi,se,ae,me,Se],styles:[".about-section[_ngcontent-%COMP%]{padding:50px 20px;background-color:var(--bg-light)}.about-container[_ngcontent-%COMP%]{max-width:960px;margin:0 auto}.about-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:32px}.about-title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:var(--primary-color);margin:0 0 8px}.about-subtitle[_ngcontent-%COMP%]{font-size:1rem;color:var(--text-muted);margin:0}.main-story[_ngcontent-%COMP%], .value-card[_ngcontent-%COMP%]{border-radius:var(--border-radius-card)!important;border-color:var(--border-color)!important;background-color:var(--bg-white)!important;box-shadow:var(--shadow-sm)!important}.main-story[_ngcontent-%COMP%]{margin-bottom:28px}.story-content[_ngcontent-%COMP%]{padding:24px 28px!important}.story-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700;color:var(--primary-color);margin:0 0 12px}.story-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.6;color:var(--text-dark);margin:0 0 12px}.story-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.values-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-bottom:36px}.value-card[_ngcontent-%COMP%]{text-align:center;padding:12px}.value-icon[_ngcontent-%COMP%]{font-size:32px!important;width:32px!important;height:32px!important;color:var(--primary-color);margin-bottom:8px}.value-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:var(--text-dark);margin:0 0 8px}.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.88rem;color:var(--text-muted);line-height:1.5;margin:0}.about-cta[_ngcontent-%COMP%]{text-align:center;padding:28px 20px;background-color:var(--primary-color);border-radius:var(--border-radius-card);color:#fff}.about-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700;margin:0 0 16px}.cta-btn[_ngcontent-%COMP%], a.cta-btn[mat-raised-button][_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;background-color:#236845!important;color:#fff!important;font-weight:600!important;border-radius:var(--border-radius-btn)!important;padding:0 20px!important;transition:background-color .2s ease!important}.cta-btn[_ngcontent-%COMP%]:hover, a.cta-btn[mat-raised-button][_ngcontent-%COMP%]:hover{background-color:#1b5236!important}@media(max-width:600px){.about-section[_ngcontent-%COMP%]{padding:30px 16px}.about-title[_ngcontent-%COMP%]{font-size:1.75rem}.story-content[_ngcontent-%COMP%]{padding:18px 20px!important}.values-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:14px}}"]})};function Cg(n,i){n&1&&(c(0,"mat-error"),u(1,"Name is required"),d())}function wg(n,i){n&1&&(c(0,"mat-error"),u(1,"Email is required"),d())}function Mg(n,i){n&1&&(c(0,"mat-error"),u(1,"Enter a valid email address"),d())}function Sg(n,i){n&1&&(c(0,"mat-error"),u(1,"Message is required"),d())}var ta=class n{fb=l(ko);contactForm=this.fb.group({name:["",[be.required]],email:["",[be.required,be.email]],message:["",[be.required,be.minLength(10)]]});onSubmit(){this.contactForm.valid&&(console.log("Form Submitted:",this.contactForm.value),this.contactForm.reset())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-contact"]],decls:74,vars:5,consts:[["id","contacts",1,"contacts"],[1,"contacts-container"],[1,"contacts-title"],[1,"contacts-subtitle"],[1,"contacts-grid"],[1,"info-column"],["appearance","outlined",1,"contact-card"],[1,"card-title"],[1,"contact-info"],[1,"info-item"],["href","mailto:info@theeatery.com"],["href","tel:+27123456789"],[1,"hours-info"],[1,"hours-row"],[1,"day"],[1,"time"],["appearance","outlined",1,"contact-card","form-card"],[1,"contact-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","placeholder","Dineo Makofane"],["matInput","","formControlName","email","type","email","placeholder","dineo@gmail.com"],["matInput","","formControlName","message","rows","4","placeholder","How can we help you?"],["mat-raised-button","","color","primary","type","submit",1,"submit-btn",3,"disabled"]],template:function(e,t){if(e&1&&(c(0,"section",0)(1,"div",1)(2,"h2",2),u(3,"Get in Touch"),d(),c(4,"p",3),u(5,"We'd love to hear from you! Send us a message or visit us in Johannesburg."),d(),c(6,"div",4)(7,"div",5)(8,"mat-card",6)(9,"mat-card-header")(10,"mat-card-title",7),u(11,"Contact Information"),d()(),c(12,"mat-card-content",8)(13,"div",9)(14,"mat-icon"),u(15,"email"),d(),c(16,"a",10),u(17,"info@kwaJozi.com"),d()(),c(18,"div",9)(19,"mat-icon"),u(20,"phone"),d(),c(21,"a",11),u(22,"+27 12 345 6789"),d()(),c(23,"div",9)(24,"mat-icon"),u(25,"location_on"),d(),c(26,"span"),u(27,"123 Main Street, Moedi, Tembisa"),d()()()(),c(28,"mat-card",6)(29,"mat-card-header")(30,"mat-card-title",7),u(31,"Operating Hours"),d()(),c(32,"mat-card-content",12)(33,"div",13)(34,"span",14),u(35,"Mon - Thu:"),d(),c(36,"span",15),u(37,"09:00 AM - 07:00 PM"),d()(),c(38,"div",13)(39,"span",14),u(40,"Fri - Sat:"),d(),c(41,"span",15),u(42,"09:00 AM - 09:00 PM"),d()(),c(43,"div",13)(44,"span",14),u(45,"Sunday:"),d(),c(46,"span",15),u(47,"10:00 AM - 05:00 PM"),d()()()()(),c(48,"mat-card",16)(49,"mat-card-header")(50,"mat-card-title",7),u(51,"Send a Message"),d()(),c(52,"mat-card-content")(53,"form",17),k("ngSubmit",function(){return t.onSubmit()}),c(54,"mat-form-field",18)(55,"mat-label"),u(56,"Your Name"),d(),D(57,"input",19),S(58,Cg,2,0,"mat-error"),d(),c(59,"mat-form-field",18)(60,"mat-label"),u(61,"Email Address"),d(),D(62,"input",20),S(63,wg,2,0,"mat-error")(64,Mg,2,0,"mat-error"),d(),c(65,"mat-form-field",18)(66,"mat-label"),u(67,"Message"),d(),D(68,"textarea",21),S(69,Sg,2,0,"mat-error"),d(),c(70,"button",22)(71,"mat-icon"),u(72,"send"),d(),u(73," Send Message "),d()()()()()()()),e&2){let r,o,a;p(53),w("formGroup",t.contactForm),p(5),E((r=t.contactForm.get("name"))!=null&&r.hasError("required")?58:-1),p(5),E((o=t.contactForm.get("email"))!=null&&o.hasError("required")?63:(o=t.contactForm.get("email"))!=null&&o.hasError("email")?64:-1),p(6),E((a=t.contactForm.get("message"))!=null&&a.hasError("required")?69:-1),p(),w("disabled",t.contactForm.invalid)}},dependencies:[Le,Do,Tt,Ye,_t,Pt,Gt,Xi,Nt,Ft,hi,Xo,Zo,me,Se,Pe,Ke,He,ar,yt,vt,se,ae],styles:[".contacts[_ngcontent-%COMP%]{background-color:var(--bg-light);padding:50px 20px}.contacts-container[_ngcontent-%COMP%]{max-width:var(--container-max-width);margin:0 auto}.contacts-title[_ngcontent-%COMP%]{font-size:1.85rem;font-weight:700;color:var(--primary-color);text-align:center;margin:0 0 6px}.contacts-subtitle[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-muted);text-align:center;margin:0 0 32px}.contacts-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}.info-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.contact-card[_ngcontent-%COMP%]{background-color:var(--bg-white)!important;border-radius:var(--border-radius-card, 10px)!important;border-color:var(--border-color)!important;box-shadow:var(--shadow-sm, 0 1px 4px rgba(0, 0, 0, .05))!important;padding:8px}.card-title[_ngcontent-%COMP%]{font-size:1.1rem!important;font-weight:700!important;color:var(--text-dark, #2d3748);margin-bottom:8px}.contact-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.info-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:.9rem;color:var(--text-dark, #2d3748)}.info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-color);font-size:20px;width:20px;height:20px}.info-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-dark, #2d3748);text-decoration:none;font-weight:500;transition:color .15s ease}.info-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-color)}.hours-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;font-size:.88rem}.hours-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px dashed var(--border-color, #e2e8f0);padding-bottom:6px}.hours-row[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}.hours-row[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{font-weight:600;color:var(--text-dark)}.hours-row[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:var(--text-muted)}.contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.full-width[_ngcontent-%COMP%]{width:100%}.submit-btn[_ngcontent-%COMP%]{height:40px!important;border-radius:6px!important;font-weight:600!important;margin-top:8px}.submit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px!important;width:18px!important;height:18px!important;margin-right:4px!important}@media(max-width:768px){.contacts-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.contacts[_ngcontent-%COMP%]{padding:36px 16px}}"]})};function Eg(n,i){if(n&1&&(c(0,"p",1),u(1),d()),n&2){let e=y();p(),$(e.errorMessage)}}var na=class n{constructor(i,e){this.authService=i;this.router=e}authService;router;email="";password="";errorMessage="";hidePassword=!0;onSubmit(){if(!this.email||!this.password){this.errorMessage="Please enter both email and password.";return}this.errorMessage="",this.authService.signin(this.email,this.password).subscribe({next:()=>{this.router.navigate(["/"])},error:i=>{this.errorMessage=i.error?.message||"Invalid email or password."}})}static \u0275fac=function(e){return new(e||n)(W(ft),W(ce))};static \u0275cmp=b({type:n,selectors:[["app-signin"]],decls:25,vars:7,consts:[[1,"auth-container"],[1,"error-text",2,"color","red","margin-bottom","1rem"],[3,"ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","type","email","name","email","required","",3,"ngModelChange","ngModel"],["matInput","","name","password","required","",3,"ngModelChange","type","ngModel"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["mat-raised-button","","type","submit",1,"full-width","auth-btn"],[1,"auth-links"],["routerLink","/forgot-password"],["routerLink","/register"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"h2"),u(2,"Sign In"),d(),S(3,Eg,2,1,"p",1),c(4,"form",2),k("ngSubmit",function(){return t.onSubmit()}),c(5,"mat-form-field",3)(6,"mat-label"),u(7,"Email Address"),d(),c(8,"input",4),ht("ngModelChange",function(o){return pt(t.email,o)||(t.email=o),o}),d()(),c(9,"mat-form-field",3)(10,"mat-label"),u(11,"Password"),d(),c(12,"input",5),ht("ngModelChange",function(o){return pt(t.password,o)||(t.password=o),o}),d(),c(13,"button",6),k("click",function(){return t.hidePassword=!t.hidePassword}),c(14,"mat-icon"),u(15),d()()(),c(16,"button",7),u(17," Sign In "),d()(),c(18,"div",8)(19,"a",9),u(20,"Forgot Password?"),d(),c(21,"p"),u(22,"Don't have an account? "),c(23,"a",10),u(24,"Register here"),d()()()()),e&2&&(p(3),E(t.errorMessage?3:-1),p(5),mt("ngModel",t.email),p(4),w("type",t.hidePassword?"password":"text"),mt("ngModel",t.password),p(),H("aria-label","Hide password")("aria-pressed",t.hidePassword),p(2),$(t.hidePassword?"visibility_off":"visibility"))},dependencies:[an,Tt,Ye,_t,Pt,wn,Wt,Dt,ze,Pe,Ke,He,sr,yt,vt,se,ae,Kt,me,Se],styles:[".auth-container[_ngcontent-%COMP%]{max-width:400px;margin:50px auto;padding:30px;background:#fff;border-radius:8px;box-shadow:0 4px 15px #0000001a}.auth-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#236845;margin-bottom:20px;text-align:center}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.error-text[_ngcontent-%COMP%]{color:#f44336;text-align:center;margin-bottom:15px}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field{--mdc-outlined-text-field-focus-outline-color: #236845;--mdc-outlined-text-field-focus-label-text-color: #236845;--mat-mdc-form-field-floating-label-style-color: #236845}.auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-floating-label, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mat-mdc-floating-label{color:#236845!important}.auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__leading, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__notch, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#236845!important}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-input-element{caret-color:#236845}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-icon-button{color:#236845!important}.auth-btn[_ngcontent-%COMP%], button[mat-raised-button].auth-btn[_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;background-color:#236845!important;color:#fff!important;font-weight:600!important;transition:background-color .2s ease!important}.auth-btn[_ngcontent-%COMP%]:hover, button[mat-raised-button].auth-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.auth-links[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:14px;display:flex;flex-direction:column;gap:10px}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#236845;text-decoration:none;font-weight:700}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1b5236}"]})};function kg(n,i){if(n&1&&(c(0,"p",1),u(1),d()),n&2){let e=y();p(),$(e.errorMessage)}}var ia=class n{authService=l(ft);router=l(ce);fullName="";email="";password="";errorMessage="";hidePassword=!0;onSubmit(){if(!this.fullName||!this.email||!this.password){this.errorMessage="Please fill in all fields.";return}this.errorMessage="",this.authService.register(this.fullName,this.email,this.password).subscribe({next:()=>{this.router.navigate(["/menu"])},error:i=>{this.errorMessage=i.error?.message||"Registration failed. Please try again."}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-register"]],decls:27,vars:8,consts:[[1,"auth-container"],[1,"error-text",2,"color","red","margin-bottom","1rem"],[3,"ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","type","text","name","fullName","required","",3,"ngModelChange","ngModel"],["matInput","","type","email","name","email","required","",3,"ngModelChange","ngModel"],["matInput","","name","password","required","",3,"ngModelChange","type","ngModel"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["mat-raised-button","","type","submit",1,"full-width","register-btn"],[1,"auth-links"],["routerLink","/signin"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"h2"),u(2,"Create an Account"),d(),S(3,kg,2,1,"p",1),c(4,"form",2),k("ngSubmit",function(){return t.onSubmit()}),c(5,"mat-form-field",3)(6,"mat-label"),u(7,"Full Name"),d(),c(8,"input",4),ht("ngModelChange",function(o){return pt(t.fullName,o)||(t.fullName=o),o}),d()(),c(9,"mat-form-field",3)(10,"mat-label"),u(11,"Email Address"),d(),c(12,"input",5),ht("ngModelChange",function(o){return pt(t.email,o)||(t.email=o),o}),d()(),c(13,"mat-form-field",3)(14,"mat-label"),u(15,"Password"),d(),c(16,"input",6),ht("ngModelChange",function(o){return pt(t.password,o)||(t.password=o),o}),d(),c(17,"button",7),k("click",function(){return t.hidePassword=!t.hidePassword}),c(18,"mat-icon"),u(19),d()()(),c(20,"button",8),u(21," Register "),d()(),c(22,"div",9)(23,"p"),u(24,"Already have an account? "),c(25,"a",10),u(26,"Sign In"),d()()()()),e&2&&(p(3),E(t.errorMessage?3:-1),p(5),mt("ngModel",t.fullName),p(4),mt("ngModel",t.email),p(4),w("type",t.hidePassword?"password":"text"),mt("ngModel",t.password),p(),H("aria-label","Hide password")("aria-pressed",t.hidePassword),p(2),$(t.hidePassword?"visibility_off":"visibility"))},dependencies:[an,Tt,Ye,_t,Pt,wn,Wt,Dt,ze,Pe,Ke,He,sr,yt,vt,se,ae,Kt,me,Se],styles:[".auth-container[_ngcontent-%COMP%]{max-width:400px;margin:50px auto;padding:30px;background:#fff;border-radius:8px;box-shadow:0 4px 15px #0000001a}.auth-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#236845;margin-bottom:20px;text-align:center}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.error-text[_ngcontent-%COMP%]{color:#f44336;text-align:center;margin-bottom:15px}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field{--mdc-outlined-text-field-focus-outline-color: #236845;--mdc-outlined-text-field-focus-label-text-color: #236845;--mat-mdc-form-field-floating-label-style-color: #236845}.auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-floating-label, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mat-mdc-floating-label{color:#236845!important}.auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__leading, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__notch, .auth-container[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#236845!important}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-input-element{caret-color:#236845}.auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mdc-floating-label, .auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mat-mdc-floating-label{color:#f44336!important}.auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mdc-notched-outline__leading, .auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mdc-notched-outline__notch, .auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mdc-notched-outline__trailing{border-color:#f44336!important}.auth-container[_ngcontent-%COMP%]     .mat-form-field-invalid .mat-mdc-input-element{caret-color:#f44336}.auth-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-icon-button{color:#236845!important}.register-btn[_ngcontent-%COMP%], button[mat-raised-button].register-btn[_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;background-color:#236845!important;color:#fff!important;font-weight:600!important;transition:background-color .2s ease!important}.register-btn[_ngcontent-%COMP%]:hover, button[mat-raised-button].register-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.auth-links[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:14px}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#236845;text-decoration:none;font-weight:700}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1b5236}"]})};function Dg(n,i){if(n&1){let e=Fe();c(0,"p",4),u(1,"Enter your account email to receive a password reset link."),d(),c(2,"form",5),k("ngSubmit",function(){Ce(e);let r=y();return we(r.onSubmit())}),c(3,"mat-form-field",6)(4,"mat-label"),u(5,"Email Address"),d(),c(6,"input",7),ht("ngModelChange",function(r){Ce(e);let o=y();return pt(o.email,r)||(o.email=r),we(r)}),d()(),c(7,"button",8),u(8,` Send Reset Link
`),d()()}if(n&2){let e=y();p(6),mt("ngModel",e.email)}}function Og(n,i){if(n&1&&(c(0,"div",1)(1,"p"),u(2,"A password reset link has been sent to "),c(3,"strong"),u(4),d(),u(5,"."),d()()),n&2){let e=y();p(4),$(e.email)}}var ra=class n{email="";messageSent=!1;onSubmit(){this.email&&(this.messageSent=!0)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-forgot-password"]],decls:8,vars:1,consts:[[1,"auth-container"],[1,"success-message"],[1,"auth-links"],["routerLink","/signin"],[1,"subtitle"],[3,"ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","type","email","name","email","required","",3,"ngModelChange","ngModel"],["mat-raised-button","","type","submit",1,"full-width","register-btn"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"h2"),u(2,"Reset Password"),d(),S(3,Dg,9,1)(4,Og,6,1,"div",1),c(5,"div",2)(6,"a",3),u(7,"Back to Sign In"),d()()()),e&2&&(p(3),E(t.messageSent?4:3))},dependencies:[an,Tt,Ye,_t,Pt,wn,Wt,Dt,ze,Pe,Ke,He,yt,vt,se,ae],styles:[".auth-container[_ngcontent-%COMP%]{max-width:400px;margin:50px auto;padding:30px;background:#fff;border-radius:8px;box-shadow:0 4px 15px #0000001a}.auth-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#2f855a;margin-bottom:10px;text-align:center}.subtitle[_ngcontent-%COMP%]{color:#555;font-size:14px;margin-bottom:20px;text-align:center}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.success-message[_ngcontent-%COMP%]{background-color:#e6fffa;border:1px solid #38b2ac;padding:15px;border-radius:4px;text-align:center;margin-bottom:20px}.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#234e52;margin:0}.auth-links[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:14px}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#2f855a;text-decoration:none;font-weight:700}.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1b5236}.auth-container[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%], .register-btn[_ngcontent-%COMP%]{--mdc-protected-button-container-color: #236845 !important;--mdc-protected-button-label-text-color: #ffffff !important;background-color:#236845!important;color:#fff!important;font-weight:600!important;transition:background-color .2s ease!important}.auth-container[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]:hover, .register-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}"]})};var Rg=["*"];function Ig(n,i){n&1&&j(0)}var Qs=(()=>{class n{_elementRef=l(F);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),Zs=(()=>{class n{template=l(st);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var Rn={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},Ag=new x("STEPPER_GLOBAL_OPTIONS"),oa=(()=>{class n{_stepperOptions;_stepper=l(gi);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=L(!1);interactedStream=new U;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=L(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=L(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=L(null);index=L(-1);isSelected=fe(()=>this._stepper.selectedIndex===this.index());indicatorType=fe(()=>{let e=this.isSelected(),t=this.completed,r=this._state()??Rn.NUMBER,o=this._editable();return this._showError()&&this.hasError&&!e?Rn.ERROR:this._displayDefaultIndicatorType?!t||e?Rn.NUMBER:o?Rn.EDIT:Rn.DONE:t&&!e?Rn.DONE:t&&e?r:o&&e?Rn.EDIT:r});isNavigable=fe(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=L(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=l(Ag,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["cdk-step"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,Zs,5)(o,Et,5),t&2){let a;A(a=P())&&(r.stepLabel=a.first),A(a=P())&&(r._childForms=a)}},viewQuery:function(t,r){if(t&1&&Oe(st,7),t&2){let o;A(o=P())&&(r.content=o.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",R],optional:[2,"optional","optional",R],completed:[2,"completed","completed",R],hasError:[2,"hasError","hasError",R]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Me],ngContentSelectors:Rg,decls:1,vars:0,template:function(t,r){t&1&&(oe(),vl(0,Ig,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return n})(),gi=(()=>{class n{_dir=l(Ut,{optional:!0});_changeDetectorRef=l(ge);_elementRef=l(F);_destroyed=new M;_keyManager;_steps;steps=new Xt;_stepHeader;_sortedHeaders=new Xt;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=L(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=L(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new U;selectedIndexChange=new U;_groupId=l(pe).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(Ie(this._steps),ee(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,r)=>t.index.set(r)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Ie(this._stepHeader),ee(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,r)=>t._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Po(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:V()).pipe(Ie(this._layoutDirection()),ee(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),r=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:r,selectedStep:t[e],previouslySelectedStep:t[r]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=bt(e),r=e.keyCode,o=this._keyManager;o?.activeItemIndex!=null&&!t&&(r===32||r===13)?(this.selectedIndex=o.activeItemIndex,e.preventDefault()):o?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let r=t.stepControl;return(r?r.invalid||r.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=ds();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,r,o){if(t&1&&Ne(o,oa,5)(o,Qs,5),t&2){let a;A(a=P())&&(r._steps=a),A(a=P())&&(r._stepHeader=a)}},inputs:{linear:[2,"linear","linear",R],selectedIndex:[2,"selectedIndex","selectedIndex",$e],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})(),qu=(()=>{class n{_stepper=l(gi);type="submit";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,r){t&1&&k("click",function(){return r._stepper.next()}),t&2&&et("type",r.type)},inputs:{type:"type"}})}return n})(),Wu=(()=>{class n{_stepper=l(gi);type="button";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,r){t&1&&k("click",function(){return r._stepper.previous()}),t&2&&et("type",r.type)},inputs:{type:"type"}})}return n})(),Gu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[G]})}return n})();var Pg=(n,i,e)=>({index:n,active:i,optional:e});function Tg(n,i){if(n&1&&Ge(0,2),n&2){let e=y();w("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",kl(2,Pg,e.index,e.active,e.optional))}}function Fg(n,i){if(n&1&&(c(0,"span",7),u(1),d()),n&2){let e=y(2);p(),$(e._getDefaultTextForState(e.state))}}function Ng(n,i){if(n&1&&(c(0,"span",8),u(1),d()),n&2){let e=y(3);p(),$(e._intl.completedLabel)}}function Lg(n,i){if(n&1&&(c(0,"span",8),u(1),d()),n&2){let e=y(3);p(),$(e._intl.editableLabel)}}function Vg(n,i){if(n&1&&(S(0,Ng,2,1,"span",8)(1,Lg,2,1,"span",8),c(2,"mat-icon",7),u(3),d()),n&2){let e=y(2);E(e.state==="done"?0:e.state==="edit"?1:-1),p(3),$(e._getDefaultTextForState(e.state))}}function zg(n,i){if(n&1&&S(0,Fg,2,1,"span",7)(1,Vg,4,2),n&2){let e,t=y();E((e=t.state)==="number"?0:1)}}function Bg(n,i){n&1&&(c(0,"div",4),Ge(1,9),d()),n&2&&(p(),w("ngTemplateOutlet",i.template))}function jg(n,i){if(n&1&&(c(0,"div",4),u(1),d()),n&2){let e=y();p(),$(e.label)}}function Ug(n,i){if(n&1&&(c(0,"div",5),u(1),d()),n&2){let e=y();p(),$(e._intl.optionalLabel)}}function Hg(n,i){if(n&1&&(c(0,"div",6),u(1),d()),n&2){let e=y();p(),$(e.errorMessage)}}var $u=["*"];function qg(n,i){}function Wg(n,i){if(n&1&&(j(0),Ee(1,qg,0,0,"ng-template",0)),n&2){let e=y();p(),w("cdkPortalOutlet",e._portal)}}var Gg=["animatedContainer"],Yu=n=>({steps:n}),Ku=n=>({step:n});function $g(n,i){n&1&&j(0)}function Yg(n,i){if(n&1&&(c(0,"div",5),Ge(1,9)(2,6),d()),n&2){let e=y(2),t=dt(6);p(),w("ngTemplateOutlet",e.headerPrefix()),p(),w("ngTemplateOutlet",t)("ngTemplateOutletContext",Ci(3,Yu,e.steps))}}function Kg(n,i){if(n&1&&Ge(0,6),n&2){let e=y(2),t=dt(6);w("ngTemplateOutlet",t)("ngTemplateOutletContext",Ci(2,Yu,e.steps))}}function Qg(n,i){if(n&1&&(c(0,"div",10,2),Ge(2,9),d()),n&2){let e=i.$implicit,t=i.$index,r=y(2);ut("mat-horizontal-stepper-content-"+r._getAnimationDirection(t)),w("id",r._getStepContentId(t)),H("aria-labelledby",r._getStepLabelId(t))("inert",r.selectedIndex===t?null:""),p(2),w("ngTemplateOutlet",e.content)}}function Zg(n,i){if(n&1&&(c(0,"div",3),S(1,Yg,3,5,"div",5)(2,Kg,1,4,"ng-container",6),c(3,"div",7),lt(4,Qg,3,6,"div",8,Vr),d()()),n&2){let e=y();p(),E(e.headerPrefix()?1:2),p(3),ct(e.steps)}}function Xg(n,i){if(n&1&&Ge(0,9),n&2){let e=y(2);w("ngTemplateOutlet",e.headerPrefix())}}function Jg(n,i){if(n&1&&(c(0,"div",11),Ge(1,6),c(2,"div",12,2)(4,"div",13)(5,"div",14),Ge(6,9),d()()()()),n&2){let e=i.$implicit,t=i.$index,r=i.$index,o=i.$count,a=y(2),s=dt(4);p(),w("ngTemplateOutlet",s)("ngTemplateOutletContext",Ci(11,Ku,e)),p(),O("mat-stepper-vertical-line",r!==o-1)("mat-vertical-content-container-active",a.selectedIndex===t),H("inert",a.selectedIndex===t?null:"")("aria-label",a.ariaLabel),p(2),w("id",a._getStepContentId(t)),H("aria-labelledby",a._getStepLabelId(t)),p(2),w("ngTemplateOutlet",e.content)}}function e_(n,i){if(n&1&&(c(0,"div",4),S(1,Xg,1,1,"ng-container",9),lt(2,Jg,7,13,"div",11,Vr),d()),n&2){let e=y();p(),E(e.headerPrefix()?1:-1),p(),ct(e.steps)}}function t_(n,i){if(n&1){let e=Fe();c(0,"mat-step-header",15),k("click",function(){let r=Ce(e).step;return we(r.select())})("keydown",function(r){Ce(e);let o=y();return we(o._onKeydown(r))}),d()}if(n&2){let e=i.step,t=y();O("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),w("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),H("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function n_(n,i){n&1&&D(0,"div",17)}function i_(n,i){if(n&1&&(Ge(0,6),S(1,n_,1,0,"div",17)),n&2){let e=i.$implicit,t=i.$index,r=i.$count;y(2);let o=dt(4);w("ngTemplateOutlet",o)("ngTemplateOutletContext",Ci(3,Ku,e)),p(),E(t!==r-1?1:-1)}}function r_(n,i){if(n&1&&(c(0,"div",16),lt(1,i_,2,5,null,null,Vr),d()),n&2){let e=i.steps,t=y();H("aria-label",t.ariaLabel),p(),ct(e)}}var Mr=(()=>{class n extends Zs{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275dir=v({type:n,selectors:[["","matStepLabel",""]],features:[re]})}return n})(),o_=(()=>{class n{changes=new M;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xs=(()=>{class n extends Qs{_intl=l(o_);_focusMonitor=l(Mn);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=l(ke);e.load(cn),e.load(jt);let t=l(ge);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof Mr?null:this.label}_templateLabel(){return this.label instanceof Mr?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,r){t&2&&(ut("mat-"+(r.color||"primary")),O("mat-step-header-empty-label",r._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[re],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,r){if(t&1&&(D(0,"div",0),c(1,"div")(2,"div",1),S(3,Tg,1,6,"ng-container",2)(4,zg,2,1),d()(),c(5,"div",3),S(6,Bg,2,1,"div",4)(7,jg,2,1,"div",4),S(8,Ug,2,1,"div",5),S(9,Hg,2,1,"div",6),d()),t&2){let o;w("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disableRipple),p(),ut(Sl("mat-step-icon-state-",r.state," mat-step-icon")),O("mat-step-icon-selected",r.selected),p(2),E(r.iconOverrides&&r.iconOverrides[r.state]?3:4),p(2),O("mat-step-label-active",r.active)("mat-step-label-selected",r.selected)("mat-step-label-error",r.state=="error"),p(),E((o=r._templateLabel())?6:r._stringLabel()?7:-1,o),p(2),E(r._hasOptionalLabel()?8:-1),p(),E(r._hasErrorLabel()?9:-1)}},dependencies:[mi,_n,Se],styles:[`.mat-step-header {
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
`],encapsulation:2,changeDetection:0})}return n})(),a_=(()=>{class n{templateRef=l(st);name;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),s_=(()=>{class n{_template=l(st);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),Js=(()=>{class n extends oa{_errorStateMatcher=l(ln,{skipSelf:!0});_viewContainerRef=l(Bt);_isSelected=Te.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(De(()=>this._stepper.selectionChange.pipe(J(e=>e.selectedStep===this),Ie(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new Yt(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let r=this._errorStateMatcher.isErrorState(e,t),o=!!(e&&e.invalid&&this.interacted);return r||o}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275cmp=b({type:n,selectors:[["mat-step"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,Mr,5)(o,s_,5),t&2){let a;A(a=P())&&(r.stepLabel=a.first),A(a=P())&&(r._lazyContent=a.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[he([{provide:ln,useExisting:n},{provide:oa,useExisting:n}]),re],ngContentSelectors:$u,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,r){t&1&&(oe(),Ee(0,Wg,2,1,"ng-template"))},dependencies:[mr],encapsulation:2,changeDetection:0})}return n})(),el=(()=>{class n extends gi{_ngZone=l(z);_renderer=l(de);_animationsDisabled=ye();_cleanupTransition;_isAnimating=L(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Xt;_icons;animationDone=new U;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=zr(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!l(Y).isBrowser;constructor(){super();let t=l(F).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(ee(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(ee(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(Ie(null),ee(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let r=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),o=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(r||o)&&this._animatedContainers.find(s=>s.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,r,o){if(t&1&&Ne(o,Js,5)(o,a_,5),t&2){let a;A(a=P())&&(r._steps=a),A(a=P())&&(r._icons=a)}},viewQuery:function(t,r){if(t&1&&Oe(Xs,5)(Gg,5),t&2){let o;A(o=P())&&(r._stepHeader=o),A(o=P())&&(r._animatedContainers=o)}},hostVars:14,hostBindings:function(t,r){t&2&&(fn("--mat-stepper-animation-duration",r._getAnimationDuration()),O("mat-stepper-horizontal",r.orientation==="horizontal")("mat-stepper-vertical",r.orientation==="vertical")("mat-stepper-label-position-end",r.orientation==="horizontal"&&r.labelPosition=="end")("mat-stepper-label-position-bottom",r.orientation==="horizontal"&&r.labelPosition=="bottom")("mat-stepper-header-position-bottom",r.headerPosition==="bottom")("mat-stepper-animating",r._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[he([{provide:gi,useExisting:n}]),re],ngContentSelectors:$u,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,r){if(t&1&&(oe(),S(0,$g,1,0),S(1,Zg,6,1,"div",3)(2,e_,4,1,"div",4),Ee(3,t_,1,27,"ng-template",null,0,gn)(5,r_,3,1,"ng-template",null,1,gn)),t&2){let o;E(r._isServer?0:-1),p(),E((o=r.orientation)==="horizontal"?1:o==="vertical"?2:-1)}},dependencies:[_n,Xs],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2,changeDetection:0})}return n})(),Qu=(()=>{class n extends qu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275dir=v({type:n,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,r){t&2&&et("type",r.type)},features:[re]})}return n})(),Zu=(()=>{class n extends Wu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275dir=v({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,r){t&2&&et("type",r.type)},features:[re]})}return n})(),Xu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({providers:[ln],imports:[di,Gu,me,dn,el,Xs,G]})}return n})();var c_=["mat-internal-form-field",""],d_=["*"],Ju=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&O("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:c_,ngContentSelectors:d_,decls:1,vars:0,template:function(t,r){t&1&&(oe(),j(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var u_=["input"],m_=["formField"],p_=["*"],aa=class{source;value;constructor(i,e){this.source=i,this.value=e}},h_={provide:Ki,useExisting:Rt(()=>tl),multi:!0},em=new x("MatRadioGroup"),f_=new x("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),tl=(()=>{class n{_changeDetector=l(ge);_value=null;_name=l(pe).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new U;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new aa(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-radio-group"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,sa,5),t&2){let a;A(a=P())&&(r._radios=a)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",R],required:[2,"required","required",R],disabledInteractive:[2,"disabledInteractive","disabledInteractive",R]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[he([h_,{provide:em,useExisting:n}])]})}return n})(),sa=(()=>{class n{_elementRef=l(F);_changeDetector=l(ge);_focusMonitor=l(Mn);_radioDispatcher=l(Ds);_defaultOptions=l(f_,{optional:!0});_ngZone=l(z);_renderer=l(de);_uniqueId=l(pe).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new U;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ye();_injector=l(ie);constructor(){l(ke).load(cn);let e=l(em,{optional:!0}),t=l(new Nn("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=$e(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new aa(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",t+""),this._previousTabIndex=t,Xe(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,r){if(t&1&&Oe(u_,5)(m_,7,F),t&2){let o;A(o=P())&&(r._inputElement=o.first),A(o=P())&&(r._rippleTrigger=o.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,r){t&1&&k("focus",function(){return r._inputElement.nativeElement.focus()}),t&2&&(H("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),O("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",R],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:$e(e)],checked:[2,"checked","checked",R],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",R],required:[2,"required","required",R],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",R]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:p_,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,r){t&1&&(oe(),c(0,"div",2,0)(2,"div",3)(3,"div",4),k("click",function(a){return r._onTouchTargetClick(a)}),d(),c(4,"input",5,1),k("change",function(a){return r._onInputInteraction(a)}),d(),c(6,"div",6),D(7,"div",7)(8,"div",8),d(),c(9,"div",9),D(10,"div",10),d()(),c(11,"label",11),j(12),d()()),t&2&&(w("labelPosition",r.labelPosition),p(2),O("mdc-radio--disabled",r.disabled),p(2),w("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),H("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(5),w("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",!0),p(2),w("for",r.inputId))},dependencies:[mi,Ju],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2,changeDetection:0})}return n})(),tm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[dn,sa,G]})}return n})();var __=["determinateSpinner"];function b_(n,i){if(n&1&&(yi(),c(0,"svg",11),D(1,"circle",12),d()),n&2){let e=y();H("viewBox",e._viewBox()),p(),fn("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),H("r",e._circleRadius())}}var v_=new x("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:nm})}),nm=100,y_=10,im=(()=>{class n{_elementRef=l(F);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(v_),t=Ss(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=nm;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-y_)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&Oe(__,5),t&2){let o;A(o=P())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(H("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),ut("mat-"+r.color),fn("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),O("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",$e],diameter:[2,"diameter","diameter",$e],strokeWidth:[2,"strokeWidth","strokeWidth",$e]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(Ee(0,b_,2,8,"ng-template",null,0,gn),c(2,"div",2,1),yi(),c(4,"svg",3),D(5,"circle",4),d()(),ml(),c(6,"div",5)(7,"div",6)(8,"div",7),Ge(9,8),d(),c(10,"div",9),Ge(11,8),d(),c(12,"div",10),Ge(13,8),d()()()),t&2){let o=dt(1);p(4),H("viewBox",r._viewBox()),p(),fn("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),H("r",r._circleRadius()),p(4),w("ngTemplateOutlet",o),p(2),w("ngTemplateOutlet",o),p(2),w("ngTemplateOutlet",o)}},dependencies:[_n],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2,changeDetection:0})}return n})();var rm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[G]})}return n})();function C_(n,i){n&1&&u(0,"Delivery Address")}function w_(n,i){n&1&&(c(0,"mat-error"),u(1,"Full name is required"),d())}function M_(n,i){n&1&&(c(0,"mat-error"),u(1,"Enter a valid 10-digit phone number"),d())}function S_(n,i){n&1&&(c(0,"mat-error"),u(1,"Delivery address is required"),d())}function E_(n,i){n&1&&u(0,"Payment")}function k_(n,i){n&1&&(c(0,"mat-error"),u(1,"Card number is required"),d())}function D_(n,i){n&1&&(c(0,"mat-error"),u(1,"MM/YY required"),d())}function O_(n,i){n&1&&(c(0,"mat-error"),u(1,"3 digits required"),d())}function R_(n,i){if(n&1&&(c(0,"div",19)(1,"mat-form-field",9)(2,"mat-label"),u(3,"Card Number"),d(),D(4,"input",34),S(5,k_,2,0,"mat-error"),d(),c(6,"div",8)(7,"mat-form-field",35)(8,"mat-label"),u(9,"Expiry Date"),d(),D(10,"input",36),S(11,D_,2,0,"mat-error"),d(),c(12,"mat-form-field",35)(13,"mat-label"),u(14,"CVV"),d(),D(15,"input",37),S(16,O_,2,0,"mat-error"),d()()()),n&2){let e,t,r,o=y();p(5),E((e=o.paymentForm.get("cardNumber"))!=null&&e.invalid&&((e=o.paymentForm.get("cardNumber"))!=null&&e.touched)?5:-1),p(6),E((t=o.paymentForm.get("expiry"))!=null&&t.invalid&&((t=o.paymentForm.get("expiry"))!=null&&t.touched)?11:-1),p(5),E((r=o.paymentForm.get("cvv"))!=null&&r.invalid&&((r=o.paymentForm.get("cvv"))!=null&&r.touched)?16:-1)}}function I_(n,i){n&1&&u(0,"Review")}function A_(n,i){n&1&&D(0,"mat-spinner",38)}function P_(n,i){if(n&1&&(c(0,"div",30)(1,"div")(2,"span",39),u(3),d(),c(4,"span",40),u(5),d()(),c(6,"span",41),u(7),d()()),n&2){let e=i.$implicit;p(3),ue("",e.quantity,"x"),p(2),$(e.item.name),p(2),ue("R",e.item.price*e.quantity)}}var la=class n{fb=l(ko);router=l(ce);cartService=l(Lt);orderService=l(ql);deliveryForm;paymentForm;deliveryFee=25;isSubmitting=!1;ngOnInit(){this.deliveryForm=this.fb.group({fullName:["",be.required],phone:["",[be.required,be.pattern("^[0-9]{10}$")]],address:["",be.required],notes:[""]}),this.paymentForm=this.fb.group({paymentMethod:["card",be.required],cardNumber:[""],expiry:[""],cvv:[""]}),this.paymentForm.get("paymentMethod")?.valueChanges.subscribe(i=>{let e=this.paymentForm.get("cardNumber"),t=this.paymentForm.get("expiry"),r=this.paymentForm.get("cvv");i==="card"?(e?.setValidators([be.required]),t?.setValidators([be.required]),r?.setValidators([be.required])):(e?.clearValidators(),t?.clearValidators(),r?.clearValidators()),e?.updateValueAndValidity(),t?.updateValueAndValidity(),r?.updateValueAndValidity()})}get grandTotal(){return this.cartService.totalAmount()+this.deliveryFee}placeOrder(){if(this.deliveryForm.invalid||this.paymentForm.invalid)return;this.isSubmitting=!0;let i={delivery:this.deliveryForm.value,payment:{paymentMethod:this.paymentForm.value.paymentMethod},items:this.cartService.cartItems(),subtotal:this.cartService.totalAmount(),deliveryFee:this.deliveryFee,total:this.grandTotal};this.orderService.placeOrder(i).subscribe({next:e=>{let t=e.orderId;this.cartService.clearCart(),this.router.navigate(["/order-success"],{state:{orderId:t}})},error:e=>{console.error("Error placing order:",e),alert("Failed to place order. Please try again."),this.isSubmitting=!1}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-checkout"]],decls:97,vars:21,consts:[["stepper",""],[1,"checkout-container"],[1,"checkout-layout"],[1,"stepper-section"],["linear","true"],[3,"stepControl"],["matStepLabel",""],[1,"step-form",3,"formGroup"],[1,"form-row"],["appearance","fill",1,"full-width"],["matInput","","formControlName","fullName","placeholder","e.g. Karabo Molefe"],["matInput","","formControlName","phone","placeholder","e.g. 0821234567"],["matInput","","formControlName","address","rows","2","placeholder","Street, Suburb, House/Unit #"],["matInput","","formControlName","notes","placeholder","e.g. Call when outside"],[1,"stepper-actions"],["type","button","mat-flat-button","","matStepperNext","",1,"action-btn",3,"disabled"],["formControlName","paymentMethod",1,"payment-options"],["value","card"],["value","cash"],[1,"card-details"],["type","button","mat-stroked-button","","matStepperPrevious",""],[1,"review-step"],[1,"review-box"],["type","button","mat-stroked-button","","matStepperPrevious","",3,"disabled"],["type","button","mat-flat-button","",1,"action-btn","place-order-btn",3,"click","disabled"],[1,"btn-content"],["diameter","20","color","accent",4,"ngIf"],[1,"summary-section"],[1,"summary-card"],[1,"items-list"],[1,"summary-item"],[1,"divider"],[1,"totals-row"],[1,"totals-row","grand-total"],["matInput","","formControlName","cardNumber","placeholder","1234 5678 9012 3456"],["appearance","fill",1,"half-width"],["matInput","","formControlName","expiry","placeholder","MM/YY"],["matInput","","formControlName","cvv","placeholder","123"],["diameter","20","color","accent"],[1,"item-qty"],[1,"item-name"],[1,"item-price"]],template:function(e,t){if(e&1&&(c(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2"),u(4,"Complete Your Order"),d(),c(5,"mat-stepper",4,0)(7,"mat-step",5),Ee(8,C_,1,0,"ng-template",6),c(9,"form",7)(10,"div",8)(11,"mat-form-field",9)(12,"mat-label"),u(13,"Full Name"),d(),D(14,"input",10),S(15,w_,2,0,"mat-error"),d(),c(16,"mat-form-field",9)(17,"mat-label"),u(18,"Phone Number"),d(),D(19,"input",11),S(20,M_,2,0,"mat-error"),d()(),c(21,"mat-form-field",9)(22,"mat-label"),u(23,"Delivery Address"),d(),D(24,"textarea",12),S(25,S_,2,0,"mat-error"),d(),c(26,"mat-form-field",9)(27,"mat-label"),u(28,"Delivery Notes / Special Instructions"),d(),D(29,"input",13),d(),c(30,"div",14)(31,"button",15),u(32," Continue to Payment "),d()()()(),c(33,"mat-step",5),Ee(34,E_,1,0,"ng-template",6),c(35,"form",7)(36,"mat-radio-group",16)(37,"mat-radio-button",17),u(38,"Credit / Debit Card (PayFast / Yoco)"),d(),c(39,"mat-radio-button",18),u(40,"Cash on Delivery"),d()(),S(41,R_,17,3,"div",19),c(42,"div",14)(43,"button",20),u(44,"Back"),d(),c(45,"button",15),u(46," Review Order "),d()()()(),c(47,"mat-step"),Ee(48,I_,1,0,"ng-template",6),c(49,"div",21)(50,"h3"),u(51,"Confirm Details"),d(),c(52,"div",22)(53,"p")(54,"strong"),u(55,"Deliver To:"),d(),u(56),d(),c(57,"p")(58,"strong"),u(59,"Address:"),d(),u(60),d(),c(61,"p")(62,"strong"),u(63,"Payment Method:"),d(),u(64),d()(),c(65,"div",14)(66,"button",23),u(67,"Back"),d(),c(68,"button",24),k("click",function(){return t.placeOrder()}),c(69,"div",25),Ee(70,A_,1,0,"mat-spinner",26),c(71,"span"),u(72),d()()()()()()()(),c(73,"div",27)(74,"mat-card",28)(75,"h3"),u(76,"Order Summary"),d(),c(77,"div",29),lt(78,P_,8,3,"div",30,Lr),d(),D(80,"hr",31),c(81,"div",32)(82,"span"),u(83,"Subtotal"),d(),c(84,"span"),u(85),d()(),c(86,"div",32)(87,"span"),u(88,"Delivery Fee"),d(),c(89,"span"),u(90),d()(),D(91,"hr",31),c(92,"div",33)(93,"span"),u(94,"Total"),d(),c(95,"span"),u(96),d()()()()()()),e&2){let r,o,a,s;p(7),w("stepControl",t.deliveryForm),p(2),w("formGroup",t.deliveryForm),p(6),E((r=t.deliveryForm.get("fullName"))!=null&&r.invalid&&((r=t.deliveryForm.get("fullName"))!=null&&r.touched)?15:-1),p(5),E((o=t.deliveryForm.get("phone"))!=null&&o.invalid&&((o=t.deliveryForm.get("phone"))!=null&&o.touched)?20:-1),p(5),E((a=t.deliveryForm.get("address"))!=null&&a.invalid&&((a=t.deliveryForm.get("address"))!=null&&a.touched)?25:-1),p(6),w("disabled",t.deliveryForm.invalid),p(2),w("stepControl",t.paymentForm),p(2),w("formGroup",t.paymentForm),p(6),E(((s=t.paymentForm.get("paymentMethod"))==null?null:s.value)==="card"?41:-1),p(4),w("disabled",t.paymentForm.invalid),p(11),Ml(" ",t.deliveryForm.value.fullName," (",t.deliveryForm.value.phone,")"),p(4),ue(" ",t.deliveryForm.value.address),p(4),ue(" ",t.paymentForm.value.paymentMethod==="card"?"Online Card Payment":"Cash on Delivery"),p(2),w("disabled",t.isSubmitting),p(2),w("disabled",t.isSubmitting||t.deliveryForm.invalid||t.paymentForm.invalid),p(2),w("ngIf",t.isSubmitting),p(2),$(t.isSubmitting?"Placing Order...":"Place Order (R"+t.grandTotal+")"),p(6),ct(t.cartService.cartItems()),p(7),ue("R",t.cartService.totalAmount()),p(5),ue("R",t.deliveryFee),p(6),ue("R",t.grandTotal)}},dependencies:[Le,Tl,Do,Tt,Ye,_t,Pt,Gt,Xi,Xu,Js,Mr,el,Qu,Zu,Pe,Ke,He,ar,yt,vt,se,ae,tm,tl,sa,me,Nt,Ft,rm,im],styles:[".checkout-container[_ngcontent-%COMP%]{max-width:1200px;margin:40px auto;padding:0 20px}.checkout-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 380px;gap:32px}.stepper-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;font-weight:800;color:#1e293b;margin-bottom:24px}  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done{background-color:#236845!important;color:#fff!important}  .mat-mdc-form-field.mat-focused .mdc-floating-label{color:#236845!important}.step-form[_ngcontent-%COMP%]{padding:20px 0;display:flex;flex-direction:column;gap:12px}.form-row[_ngcontent-%COMP%]{display:flex;gap:16px}.full-width[_ngcontent-%COMP%]{width:100%}.half-width[_ngcontent-%COMP%]{flex:1}.payment-options[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}.stepper-actions[_ngcontent-%COMP%]{display:flex;gap:12px;margin-top:24px}.action-btn[_ngcontent-%COMP%]{background-color:#236845!important;color:#fff!important;font-weight:700!important;border-radius:8px!important;height:48px!important;padding:0 24px!important}.action-btn[_ngcontent-%COMP%]:hover{background-color:#1b5236!important}.summary-card[_ngcontent-%COMP%]{padding:24px;border-radius:12px!important;background-color:#f8fafc!important;box-shadow:0 4px 16px #0000000d!important}.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#0f172a;margin-bottom:20px}.summary-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-size:15px}.item-qty[_ngcontent-%COMP%]{font-weight:700;color:#236845;margin-right:8px}.divider[_ngcontent-%COMP%]{border:none;border-top:1px solid #e2e8f0;margin:16px 0}.totals-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:15px;color:#475569;margin-bottom:8px}.grand-total[_ngcontent-%COMP%]{font-size:18px;font-weight:800;color:#0f172a}@media(max-width:900px){.checkout-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}}.btn-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.place-order-btn[_ngcontent-%COMP%]{background-color:#236845!important;color:#fff!important;min-width:180px}.place-order-btn[disabled][_ngcontent-%COMP%]{background-color:#a3c4b2!important;opacity:.7}"]})};var _i=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=$t(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=$t(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(H("aria-orientation",r.vertical?"vertical":"horizontal"),O("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return n})(),bi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[G]})}return n})();var ca=class n{route=l(it);router=l(ce);orderId="";estimatedTime="30 - 45 mins";ngOnInit(){let i=history.state;i&&i.orderId?this.orderId=i.orderId:this.orderId=this.route.snapshot.queryParamMap.get("orderId")||"ORD-"+Math.floor(1e5+Math.random()*9e5)}goToHome(){this.router.navigate(["/"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-order-success"]],decls:31,vars:2,consts:[[1,"success-container"],[1,"success-card"],[1,"icon-header"],[1,"check-circle"],[1,"check-icon"],[1,"sub-heading"],[1,"order-details"],[1,"detail-row"],[1,"detail-label"],[1,"detail-value","order-id"],[1,"detail-value","highlight"],[1,"status-badge"],[1,"card-actions"],["mat-flat-button","",1,"primary-btn",3,"click"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"div",3)(4,"mat-icon",4),u(5,"check_circle"),d()(),c(6,"h2"),u(7,"Order Placed Successfully!"),d(),c(8,"p",5),u(9,"Thank you for your order. We are preparing your kota now."),d()(),D(10,"mat-divider"),c(11,"div",6)(12,"div",7)(13,"span",8),u(14,"Order Number"),d(),c(15,"span",9),u(16),d()(),c(17,"div",7)(18,"span",8),u(19,"Estimated Delivery Time"),d(),c(20,"span",10),u(21),d()(),c(22,"div",7)(23,"span",8),u(24,"Status"),d(),c(25,"span",11),u(26,"Preparing"),d()()(),D(27,"mat-divider"),c(28,"div",12)(29,"button",13),k("click",function(){return t.goToHome()}),u(30," Back to Menu "),d()()()()),e&2&&(p(16),ue("#",t.orderId),p(5),$(t.estimatedTime))},dependencies:[Le,Nt,Ft,se,ae,me,Se,bi,_i],styles:[".success-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:80vh;padding:24px 16px;background-color:#f8f9fa}.success-card[_ngcontent-%COMP%]{max-width:520px;width:100%;padding:32px 24px;text-align:center;border-radius:12px;box-shadow:0 4px 20px #00000014}.icon-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:24px}.check-circle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:72px;height:72px;background-color:#e8f5e9;border-radius:50%;margin-bottom:16px}.check-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:#2e7d32}.icon-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.6rem;font-weight:700;color:#212121}.sub-heading[_ngcontent-%COMP%]{margin:0;color:#666;font-size:.95rem}.order-details[_ngcontent-%COMP%]{padding:24px 0;display:flex;flex-direction:column;gap:16px}.detail-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.detail-label[_ngcontent-%COMP%]{color:#757575;font-size:.95rem}.detail-value[_ngcontent-%COMP%]{font-weight:600;color:#212121}.order-id[_ngcontent-%COMP%]{font-family:monospace;font-size:1rem}.highlight[_ngcontent-%COMP%]{color:#2e7d32}.status-badge[_ngcontent-%COMP%]{background-color:#fff3e0;color:#e65100;padding:4px 12px;border-radius:16px;font-size:.85rem;font-weight:600}.card-actions[_ngcontent-%COMP%]{margin-top:24px;display:flex;justify-content:center}.primary-btn[_ngcontent-%COMP%]{width:70%;padding:22px 0;font-size:1rem;border-radius:8px;background-color:#1b5e20!important;color:#fff!important}.primary-btn[_ngcontent-%COMP%]:hover{background-color:#2e7d32!important}"]})};var om=()=>{let n=l(ft),i=l(ce),e=n.currentUser();return n.isAuthenticated()&&e?.role.toUpperCase()==="ADMIN"?!0:i.createUrlTree([n.isAuthenticated()?"/":"/signin"])};var am=[{path:"",component:Qo},{path:"menu",component:Jo},{path:"about",component:ea},{path:"contact",component:ta},{path:"signin",component:na},{path:"register",component:ia},{path:"forgot-password",component:ra},{path:"checkout",component:la},{path:"order-success",component:ca},{path:"admin",canActivate:[om],loadComponent:()=>import("./chunk-LDCN7TE5.js").then(n=>n.AdminDashboard)},{path:"**",redirectTo:""}];var sm=(n,i)=>{let t=l(ft).getToken();if(t){let r=n.clone({setHeaders:{Authorization:`Bearer ${t}`}});return i(r)}return i(n)};var lm={providers:[Za(am),Vl(zl([sm]))]};var T_=["*",[["mat-toolbar-row"]]],F_=["*","mat-toolbar-row"],N_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),cm=(()=>{class n{_elementRef=l(F);_platform=l(Y);_document=l(ne);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,N_,5),t&2){let a;A(a=P())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(ut(r.color?"mat-"+r.color:""),O("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:F_,decls:2,vars:0,template:function(t,r){t&1&&(oe(T_),j(0),j(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return n})();var dm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[G]})}return n})();var um="mat-badge-content",V_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-badge {
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
`],encapsulation:2,changeDetection:0})}return n})(),mm=(()=>{class n{_ngZone=l(z);_elementRef=l(F);_ariaDescriber=l(Nd);_renderer=l(de);_animationsDisabled=ye();_idGenerator=l(pe);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=l(hs);_document=l(ne);constructor(){let e=l(ke);e.load(V_),e.load(jt)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(um),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${um}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,r){t&2&&O("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",R],disabled:[2,"matBadgeDisabled","disabled",R],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",R]}})}return n})(),pm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=T({imports:[fs,G]})}return n})();var B_=()=>({exact:!0});function j_(n,i){n&1&&(c(0,"a",8),u(1,"Admin"),d())}function U_(n,i){if(n&1){let e=Fe();c(0,"span",12),u(1),d(),c(2,"button",13),k("click",function(){Ce(e);let r=y();return we(r.onLogout())}),c(3,"mat-icon"),u(4,"logout"),d(),c(5,"span"),u(6,"Logout"),d()()}if(n&2){let e,t=y();p(),ue("Hi, ",(e=t.authService.currentUser())==null?null:e.full_name)}}function H_(n,i){n&1&&(c(0,"a",11),u(1,"Sign In"),d())}var da=class n{cartService=l(Lt);authService=l(ft);router=l(ce);onLogout(){this.authService.logout(),this.router.navigate(["/signin"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-navbar"]],decls:19,vars:6,consts:[["color","primary",1,"navbar"],["routerLink","/",1,"logo"],[1,"spacer"],[1,"nav-links"],["mat-button","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["mat-button","","routerLink","/menu","routerLinkActive","active"],["mat-button","","routerLink","/about","routerLinkActive","active"],["mat-button","","routerLink","/contact","routerLinkActive","active"],["mat-button","","routerLink","/admin","routerLinkActive","active"],["mat-icon-button","","aria-label","Open Shopping Cart",3,"click"],["matBadgeColor","accent",3,"matBadge","matBadgeHidden"],["mat-raised-button","","color","accent","routerLink","/signin"],[1,"user-greeting"],["mat-stroked-button","",1,"logout-btn",3,"click"]],template:function(e,t){if(e&1&&(c(0,"mat-toolbar",0)(1,"span",1),u(2,"KwaJozi"),d(),D(3,"span",2),c(4,"nav",3)(5,"a",4),u(6,"Home"),d(),c(7,"a",5),u(8,"Menu"),d(),c(9,"a",6),u(10,"About"),d(),c(11,"a",7),u(12,"Contact"),d(),S(13,j_,2,0,"a",8),c(14,"button",9),k("click",function(){return t.cartService.toggleCart()}),c(15,"mat-icon",10),u(16," shopping_cart "),d()(),S(17,U_,7,1)(18,H_,2,0,"a",11),d()()),e&2){let r;p(5),w("routerLinkActiveOptions",El(5,B_)),p(8),E(((r=t.authService.currentUser())==null||r.role==null?null:r.role.toUpperCase())==="ADMIN"?13:-1),p(2),w("matBadge",t.cartService.cartCount())("matBadgeHidden",t.cartService.cartCount()===0),p(2),E(t.authService.currentUser()?17:18)}},dependencies:[Le,ze,Qa,dm,cm,se,ae,Kt,me,Se,pm,mm],styles:['.navbar[_ngcontent-%COMP%]{background-color:var(--primary-color)!important;color:#fff;position:sticky;top:0;z-index:997;box-shadow:var(--shadow-sm);padding:0 24px;display:flex;align-items:center;height:64px}.logo[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:700;letter-spacing:-.3px;cursor:pointer;color:#fff;-webkit-user-select:none;user-select:none}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.nav-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.nav-links[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]{color:#ffffffe6;font-weight:500;border-radius:var(--border-radius-btn);transition:var(--transition-smooth)}.nav-links[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   a[mat-button].active[_ngcontent-%COMP%]{color:#fff;background-color:#ffffff26}.user-greeting[_ngcontent-%COMP%]{font-size:.95rem;font-weight:500;margin:0 4px;color:#fffffff2}.nav-links[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]{border-color:#ffffff80!important;color:#fff!important;border-radius:var(--border-radius-btn)}.nav-links[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover{background-color:#e53e3e33!important;border-color:var(--accent-color)!important}a[routerLink="/signin"][_ngcontent-%COMP%]{background-color:#236845!important;color:#fff!important}a[routerLink="/signin"][_ngcontent-%COMP%]:hover{background-color:#1b5236!important}@media(max-width:768px){.navbar[_ngcontent-%COMP%]{padding:0 16px}.user-greeting[_ngcontent-%COMP%]{display:none}}.logout-btn[_ngcontent-%COMP%]{background-color:#e53e3e!important;border:none!important;border-radius:6px;transition:all .2s ease-in-out}.logout-btn[_ngcontent-%COMP%]   .mdc-button__label[_ngcontent-%COMP%], .logout-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff!important}.logout-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px!important;width:18px!important;height:18px!important;margin-right:6px!important;vertical-align:middle}.logout-btn[_ngcontent-%COMP%]:hover{background-color:#c53030!important}']})};var q_=(n,i)=>i.item.id;function W_(n,i){n&1&&(c(0,"div",5)(1,"mat-icon",10),u(2,"shopping_cart"),d(),c(3,"p",11),u(4,"Your cart is currently empty."),d()())}function G_(n,i){if(n&1){let e=Fe();c(0,"div",12),D(1,"img",13),c(2,"div",14)(3,"h5",15),u(4),d(),c(5,"p",16),u(6),d(),c(7,"div",17)(8,"button",18),k("click",function(){let r=Ce(e).$implicit,o=y(2);return we(o.cartService.decrementQuantity(r.item.id))}),c(9,"mat-icon"),u(10,"remove_circle_outline"),d()(),c(11,"span",19),u(12),d(),c(13,"button",20),k("click",function(){let r=Ce(e).$implicit,o=y(2);return we(o.cartService.incrementQuantity(r.item.id))}),c(14,"mat-icon"),u(15,"add_circle_outline"),d()()()(),c(16,"button",21),k("click",function(){let r=Ce(e).$implicit,o=y(2);return we(o.cartService.removeFromCart(r.item.id))}),c(17,"mat-icon"),u(18,"delete_outline"),d()()(),D(19,"mat-divider")}if(n&2){let e=i.$implicit;p(),w("src",e.item.imageUrl,Fr)("alt",e.item.name),p(3),$(e.item.name),p(2),ue("R",e.item.price.toFixed(2)),p(6),$(e.quantity)}}function $_(n,i){if(n&1&&lt(0,G_,20,5,null,null,q_),n&2){let e=y();ct(e.cartService.cart())}}var ua=class n{cartService=l(Lt);router=l(ce);onCheckout(){this.cartService.toggleCart(),this.router.navigate(["/checkout"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-cart"]],decls:19,vars:7,consts:[[1,"cart-overlay",3,"click"],[1,"cart-drawer"],[1,"cart-header"],["mat-icon-button","","aria-label","Close cart",3,"click"],[1,"cart-body"],[1,"empty-cart-state"],[1,"cart-footer"],[1,"total-row"],[1,"total-amount"],["mat-raised-button","","color","primary",1,"checkout-btn",3,"click","disabled"],[1,"empty-icon"],[1,"empty-msg"],[1,"cart-item"],[1,"cart-item-img",3,"src","alt"],[1,"item-details"],[1,"item-title"],[1,"item-price"],[1,"quantity-controls"],["mat-icon-button","","color","primary","aria-label","Decrease quantity",1,"qty-btn",3,"click"],[1,"quantity-count"],["mat-icon-button","","color","primary","aria-label","Increase quantity",1,"qty-btn",3,"click"],["mat-icon-button","","color","warn","aria-label","Remove item",3,"click"]],template:function(e,t){e&1&&(c(0,"div",0),k("click",function(){return t.cartService.toggleCart()}),d(),c(1,"div",1)(2,"div",2)(3,"h3"),u(4,"Your Cart"),d(),c(5,"button",3),k("click",function(){return t.cartService.toggleCart()}),c(6,"mat-icon"),u(7,"close"),d()()(),c(8,"div",4),S(9,W_,5,0,"div",5)(10,$_,2,0),d(),c(11,"div",6)(12,"div",7)(13,"span"),u(14,"Total:"),d(),c(15,"span",8),u(16),d()(),c(17,"button",9),k("click",function(){return t.onCheckout()}),u(18," Checkout "),d()()()),e&2&&(O("open",t.cartService.isCartOpen()),p(),O("open",t.cartService.isCartOpen()),p(8),E(t.cartService.cart().length===0?9:10),p(7),ue("R",t.cartService.cartTotal().toFixed(2)),p(),w("disabled",t.cartService.cart().length===0))},dependencies:[Le,se,ae,Kt,me,Se,bi,_i],styles:[".cart-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#00000080;z-index:1999;opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease}.cart-overlay.open[_ngcontent-%COMP%]{opacity:1;visibility:visible}.cart-drawer[_ngcontent-%COMP%]{position:fixed;top:0;right:-400px;width:360px;height:100vh;background-color:#fff;color:#1e293b;box-shadow:-5px 0 15px #0003;z-index:2000;display:flex;flex-direction:column;transition:right .3s ease}.cart-drawer.open[_ngcontent-%COMP%]{right:0}.cart-header[_ngcontent-%COMP%]{padding:16px 20px;background-color:#236845;color:#fff;display:flex;justify-content:space-between;align-items:center}.cart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.2rem;font-weight:700}.cart-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff!important}.cart-body[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:20px}.empty-cart-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#94a3b8}.empty-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:12px}.empty-msg[_ngcontent-%COMP%]{margin:0;font-size:.95rem}.cart-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 0}.cart-item-img[_ngcontent-%COMP%]{width:56px;height:56px;object-fit:cover;border-radius:8px}.item-details[_ngcontent-%COMP%]{flex:1}.item-title[_ngcontent-%COMP%]{margin:0 0 4px;color:#236845;font-size:.95rem;font-weight:600}.item-price[_ngcontent-%COMP%]{margin:0 0 6px;font-weight:700;color:#0f172a}.quantity-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.qty-btn[_ngcontent-%COMP%]{width:32px!important;height:32px!important;color:#236845!important}.quantity-count[_ngcontent-%COMP%]{font-weight:700;padding:0 6px;min-width:20px;text-align:center;color:#1e293b}.cart-footer[_ngcontent-%COMP%]{padding:20px;border-top:1px solid #e2e8f0;background-color:#f8fafc}.total-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:1.1rem;font-weight:700;color:#0f172a;margin-bottom:16px}.total-amount[_ngcontent-%COMP%]{color:#236845;font-weight:800}.checkout-btn[_ngcontent-%COMP%]{width:100%;height:48px!important;background-color:#236845!important;color:#fff!important;font-size:16px!important;font-weight:700!important;border-radius:8px!important;text-transform:uppercase;letter-spacing:.5px;transition:background-color .2s ease}.checkout-btn[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#1b5236!important}.checkout-btn[disabled][_ngcontent-%COMP%]{background-color:#cbd5e1!important;color:#94a3b8!important}"]})};var ma=class n{currentYear=new Date().getFullYear();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-footer"]],decls:33,vars:1,consts:[[1,"footer"],[1,"footer-container"],[1,"footer-section","brand-section"],[1,"footer-section","links-section"],[1,"quick-links"],["mat-button","","routerLink","/"],["mat-button","","routerLink","/menu"],["mat-button","","routerLink","/about"],["mat-button","","routerLink","/contact"],[1,"footer-section","social-section"],[1,"social-links"],["mat-button","","href","https://facebook.com","target","_blank","rel","noopener"],["mat-button","","href","https://instagram.com","target","_blank","rel","noopener"],["mat-button","","href","https://tiktok.com","target","_blank","rel","noopener"],[1,"copyright"]],template:function(e,t){e&1&&(c(0,"footer",0),D(1,"mat-divider"),c(2,"div",1)(3,"div",2)(4,"h3"),u(5,"KwaJozi"),d(),c(6,"p"),u(7,"Feed your kota cravings."),d()(),c(8,"div",3)(9,"h3"),u(10,"Quick Links"),d(),c(11,"nav",4)(12,"a",5),u(13,"Home"),d(),c(14,"a",6),u(15,"Menu"),d(),c(16,"a",7),u(17,"About"),d(),c(18,"a",8),u(19,"Contact"),d()()(),c(20,"div",9)(21,"h3"),u(22,"Follow Us"),d(),c(23,"div",10)(24,"a",11),u(25,"Facebook"),d(),c(26,"a",12),u(27,"Instagram"),d(),c(28,"a",13),u(29,"TikTok"),d()()()(),D(30,"mat-divider"),c(31,"p",14),u(32),d()()),e&2&&(p(32),ue("\xA9 ",t.currentYear," KwaJozi. All Rights Reserved."))},dependencies:[ze,se,ae,bi,_i,me],styles:["[_nghost-%COMP%]{display:block}.footer[_ngcontent-%COMP%]{background-color:var(--primary-color, #2f855a);color:#fff;margin-top:0!important;padding-top:0!important;box-shadow:0 -2px 8px #0000000d}.footer[_ngcontent-%COMP%]     .mat-divider{border-top-color:#fff3!important}.footer-container[_ngcontent-%COMP%]{max-width:var(--container-max-width, 1200px);margin:0 auto;padding:24px 24px 16px;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}.footer-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:1rem;font-weight:700;margin-top:0;margin-bottom:8px;letter-spacing:-.3px}.brand-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#ffffffd9;margin:0;font-size:.85rem;line-height:1.4}.quick-links[_ngcontent-%COMP%], .social-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:2px}.quick-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:2px 6px!important;min-width:unset;color:#ffffffd9!important;font-size:.85rem;font-weight:500;border-radius:var(--border-radius-btn, 6px)!important;transition:var(--transition-smooth, all .2s ease)}.quick-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff!important;background-color:#ffffff26!important}.copyright[_ngcontent-%COMP%]{text-align:center;padding:12px 20px;margin:0;font-size:.78rem;color:#ffffffbf}@media(max-width:600px){.footer-container[_ngcontent-%COMP%]{padding:20px 16px 12px;gap:16px}}"]})};var pa=class n{title="eatery-app";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-root"]],decls:5,vars:0,template:function(e,t){e&1&&(D(0,"app-navbar")(1,"app-cart"),c(2,"main"),D(3,"router-outlet"),d(),D(4,"app-footer"))},dependencies:[zi,da,ua,ma],encapsulation:2})};Nl(pa,lm).catch(n=>console.error(n));
