import{l as D,y as ke,ai as io,am as Po,an as Ao,ao as Ko,ap as ye,aq as $o,ar as xe,e as q,P as Oo,Q as To,o as Fo,a4 as lo,j as f,r as Ho,R as Eo,as as Lo,at as Bo,au as Je,k as ue,av as ao,q as Q,t as Y,a3 as pe,aw as de,u as be,ab as J,c as C,d as x,b as H,a as T,$ as ae,f as fe,p as oe,ax as Mo,h as w,a7 as ie,i as Ie,a2 as Do,ay as jo,a9 as Uo,az as Vo,aA as Go,aB as so,V as Me,aC as co,aD as Wo,aE as qo,aF as Zo,aG as Xo,X as ne,G as Ne,aH as Jo,aI as Qo,aJ as Yo,aK as et,aL as ot,aM as tt,aN as Ce,aO as nt,aP as uo,W as rt,aQ as it,aR as lt,aS as De,aT as at,aU as dt,a6 as Qe,a1 as st,aV as ct,aa as ut,aW as fo,aX as ho,aY as ft,z as se,A as _e,B as le,J as ve,I as ce,D as Ke,C as W,aZ as ht,F as me,H as vt,K as vo,E as ze,a_ as pt,a$ as Fe,b0 as mt,b1 as bt,v as po,x as mo,al as gt,b2 as yt,L as je,_ as xt,b3 as wt,ad as Ct,ae as St,w as _t,b4 as zt}from"./index-B74JimqN.js";import{_ as Rt}from"./Avatar-DDVFINd_.js";function Ye(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function kt(e){return t=>{t?e.value=t.$el:e.value=null}}function It(e,t,o){if(!t)return e;const r=D(e.value);let n=null;return ke(e,l=>{n!==null&&window.clearTimeout(n),l===!0?o&&!o.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function Nt(e={},t){const o=io({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,l=a=>{switch(a.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==a.key)return;const u=r[c];if(typeof u=="function")u(a);else{const{stop:h=!1,prevent:v=!1}=u;h&&a.stopPropagation(),v&&a.preventDefault(),u.handler(a)}})},i=a=>{switch(a.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}n!==void 0&&Object.keys(n).forEach(c=>{if(c!==a.key)return;const u=n[c];if(typeof u=="function")u(a);else{const{stop:h=!1,prevent:v=!1}=u;h&&a.stopPropagation(),v&&a.preventDefault(),u.handler(a)}})},d=()=>{(t===void 0||t.value)&&(xe("keydown",document,l),xe("keyup",document,i)),t!==void 0&&ke(t,a=>{a?(xe("keydown",document,l),xe("keyup",document,i)):(ye("keydown",document,l),ye("keyup",document,i))})};return Po()?(Ao(d),Ko(()=>{(t===void 0||t.value)&&(ye("keydown",document,l),ye("keyup",document,i))})):d(),$o(o)}const re="v-hidden",Pt=Eo("[v-hidden]",{display:"none!important"}),At=q({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const o=D(null),r=D(null);function n(i){const{value:d}=o,{getCounter:a,getTail:c}=e;let u;if(a!==void 0?u=a():u=r.value,!d||!u)return;u.hasAttribute(re)&&u.removeAttribute(re);const{children:h}=d;if(i.showAllItemsBeforeCalculate)for(const S of h)S.hasAttribute(re)&&S.removeAttribute(re);const v=d.offsetWidth,z=[],g=t.tail?c?.():null;let P=g?g.offsetWidth:0,R=!1;const _=d.children.length-(t.tail?1:0);for(let S=0;S<_-1;++S){if(S<0)continue;const m=h[S];if(R){m.hasAttribute(re)||m.setAttribute(re,"");continue}else m.hasAttribute(re)&&m.removeAttribute(re);const b=m.offsetWidth;if(P+=b,z[S]=b,P>v){const{updateCounter:$}=e;for(let O=S;O>=0;--O){const B=_-1-O;$!==void 0?$(B):u.textContent=`${B}`;const j=u.offsetWidth;if(P-=z[O],P+j<=v||O===0){R=!0,S=O-1,g&&(S===-1?(g.style.maxWidth=`${v-j}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:L}=e;L&&L(B);break}}}}const{onUpdateOverflow:K}=e;R?K!==void 0&&K(!0):(K!==void 0&&K(!1),u.setAttribute(re,""))}const l=Oo();return Pt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:To,ssr:l}),Fo(()=>n({showAllItemsBeforeCalculate:!1})),{selfRef:o,counterRef:r,sync:n}},render(){const{$slots:e}=this;return lo(()=>this.sync({showAllItemsBeforeCalculate:!1})),f("div",{class:"v-overflow",ref:"selfRef"},[Ho(e,"default"),e.counter?e.counter():f("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),Kt=q({name:"ChevronRight",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),$t=q({name:"ChevronDownFilled",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function eo(e){return Array.isArray(e)?e:[e]}const He={STOP:"STOP"};function bo(e,t){const o=t(e);e.children!==void 0&&o!==He.STOP&&e.children.forEach(r=>bo(r,t))}function Ot(e,t={}){const{preserveGroup:o=!1}=t,r=[],n=o?i=>{i.isLeaf||(r.push(i.key),l(i.children))}:i=>{i.isLeaf||(i.isGroup||r.push(i.key),l(i.children))};function l(i){i.forEach(n)}return l(e),r}function Tt(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function Ft(e){return e.children}function Ht(e){return e.key}function Et(){return!1}function Lt(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function Bt(e){return e.disabled===!0}function Mt(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function $e(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Oe(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Dt(e,t){const o=new Set(e);return t.forEach(r=>{o.has(r)||o.add(r)}),Array.from(o)}function jt(e,t){const o=new Set(e);return t.forEach(r=>{o.has(r)&&o.delete(r)}),Array.from(o)}function Ut(e){return e?.type==="group"}class Vt extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Gt(e,t,o,r){return Re(t.concat(e),o,r,!1)}function Wt(e,t){const o=new Set;return e.forEach(r=>{const n=t.treeNodeMap.get(r);if(n!==void 0){let l=n.parent;for(;l!==null&&!(l.disabled||o.has(l.key));)o.add(l.key),l=l.parent}}),o}function qt(e,t,o,r){const n=Re(t,o,r,!1),l=Re(e,o,r,!0),i=Wt(e,o),d=[];return n.forEach(a=>{(l.has(a)||i.has(a))&&d.push(a)}),d.forEach(a=>n.delete(a)),n}function Te(e,t){const{checkedKeys:o,keysToCheck:r,keysToUncheck:n,indeterminateKeys:l,cascade:i,leafOnly:d,checkStrategy:a,allowNotLoaded:c}=e;if(!i)return r!==void 0?{checkedKeys:Dt(o,r),indeterminateKeys:Array.from(l)}:n!==void 0?{checkedKeys:jt(o,n),indeterminateKeys:Array.from(l)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(l)};const{levelTreeNodeMap:u}=t;let h;n!==void 0?h=qt(n,o,t,c):r!==void 0?h=Gt(r,o,t,c):h=Re(o,t,c,!1);const v=a==="parent",z=a==="child"||d,g=h,P=new Set,R=Math.max.apply(null,Array.from(u.keys()));for(let _=R;_>=0;_-=1){const K=_===0,S=u.get(_);for(const m of S){if(m.isLeaf)continue;const{key:b,shallowLoaded:$}=m;if(z&&$&&m.children.forEach(L=>{!L.disabled&&!L.isLeaf&&L.shallowLoaded&&g.has(L.key)&&g.delete(L.key)}),m.disabled||!$)continue;let O=!0,B=!1,j=!0;for(const L of m.children){const Z=L.key;if(!L.disabled){if(j&&(j=!1),g.has(Z))B=!0;else if(P.has(Z)){B=!0,O=!1;break}else if(O=!1,B)break}}O&&!j?(v&&m.children.forEach(L=>{!L.disabled&&g.has(L.key)&&g.delete(L.key)}),g.add(b)):B&&P.add(b),K&&z&&g.has(b)&&g.delete(b)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(P)}}function Re(e,t,o,r){const{treeNodeMap:n,getChildren:l}=t,i=new Set,d=new Set(e);return e.forEach(a=>{const c=n.get(a);c!==void 0&&bo(c,u=>{if(u.disabled)return He.STOP;const{key:h}=u;if(!i.has(h)&&(i.add(h),d.add(h),Mt(u.rawNode,l))){if(r)return He.STOP;if(!o)throw new Vt}})}),d}function Zt(e,{includeGroup:t=!1,includeSelf:o=!0},r){var n;const l=r.treeNodeMap;let i=e==null?null:(n=l.get(e))!==null&&n!==void 0?n:null;const d={keyPath:[],treeNodePath:[],treeNode:i};if(i?.ignored)return d.treeNode=null,d;for(;i;)!i.ignored&&(t||!i.isGroup)&&d.treeNodePath.push(i),i=i.parent;return d.treeNodePath.reverse(),o||d.treeNodePath.pop(),d.keyPath=d.treeNodePath.map(a=>a.key),d}function Xt(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Jt(e,t){const o=e.siblings,r=o.length,{index:n}=e;return t?o[(n+1)%r]:n===o.length-1?null:o[n+1]}function oo(e,t,{loop:o=!1,includeDisabled:r=!1}={}){const n=t==="prev"?Qt:Jt,l={reverse:t==="prev"};let i=!1,d=null;function a(c){if(c!==null){if(c===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){d=e;return}}else if((!c.disabled||r)&&!c.ignored&&!c.isGroup){d=c;return}if(c.isGroup){const u=Ue(c,l);u!==null?d=u:a(n(c,o))}else{const u=n(c,!1);if(u!==null)a(u);else{const h=Yt(c);h?.isGroup?a(n(h,o)):o&&a(n(c,!0))}}}}return a(e),d}function Qt(e,t){const o=e.siblings,r=o.length,{index:n}=e;return t?o[(n-1+r)%r]:n===0?null:o[n-1]}function Yt(e){return e.parent}function Ue(e,t={}){const{reverse:o=!1}=t,{children:r}=e;if(r){const{length:n}=r,l=o?n-1:0,i=o?-1:n,d=o?-1:1;for(let a=l;a!==i;a+=d){const c=r[a];if(!c.disabled&&!c.ignored)if(c.isGroup){const u=Ue(c,t);if(u!==null)return u}else return c}}return null}const en={getChild(){return this.ignored?null:Ue(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return oo(this,"next",e)},getPrev(e={}){return oo(this,"prev",e)}};function on(e,t){const o=t?new Set(t):void 0,r=[];function n(l){l.forEach(i=>{r.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||o===void 0||o.has(i.key))&&n(i.children)})}return n(e),r}function tn(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function go(e,t,o,r,n,l=null,i=0){const d=[];return e.forEach((a,c)=>{var u;const h=Object.create(r);if(h.rawNode=a,h.siblings=d,h.level=i,h.index=c,h.isFirstChild=c===0,h.isLastChild=c+1===e.length,h.parent=l,!h.ignored){const v=n(a);Array.isArray(v)&&(h.children=go(v,t,o,r,n,h,i+1))}d.push(h),t.set(h.key,h),o.has(i)||o.set(i,[]),(u=o.get(i))===null||u===void 0||u.push(h)}),d}function Se(e,t={}){var o;const r=new Map,n=new Map,{getDisabled:l=Bt,getIgnored:i=Et,getIsGroup:d=Ut,getKey:a=Ht}=t,c=(o=t.getChildren)!==null&&o!==void 0?o:Ft,u=t.ignoreEmptyChildren?m=>{const b=c(m);return Array.isArray(b)?b.length?b:null:b}:c,h=Object.assign({get key(){return a(this.rawNode)},get disabled(){return l(this.rawNode)},get isGroup(){return d(this.rawNode)},get isLeaf(){return Tt(this.rawNode,u)},get shallowLoaded(){return Lt(this.rawNode,u)},get ignored(){return i(this.rawNode)},contains(m){return tn(this,m)}},en),v=go(e,r,n,h,u);function z(m){if(m==null)return null;const b=r.get(m);return b&&!b.isGroup&&!b.ignored?b:null}function g(m){if(m==null)return null;const b=r.get(m);return b&&!b.ignored?b:null}function P(m,b){const $=g(m);return $?$.getPrev(b):null}function R(m,b){const $=g(m);return $?$.getNext(b):null}function _(m){const b=g(m);return b?b.getParent():null}function K(m){const b=g(m);return b?b.getChild():null}const S={treeNodes:v,treeNodeMap:r,levelTreeNodeMap:n,maxLevel:Math.max(...n.keys()),getChildren:u,getFlattenedNodes(m){return on(v,m)},getNode:z,getPrev:P,getNext:R,getParent:_,getChild:K,getFirstAvailableNode(){return Xt(v)},getPath(m,b={}){return Zt(m,b,S)},getCheckedKeys(m,b={}){const{cascade:$=!0,leafOnly:O=!1,checkStrategy:B="all",allowNotLoaded:j=!1}=b;return Te({checkedKeys:$e(m),indeterminateKeys:Oe(m),cascade:$,leafOnly:O,checkStrategy:B,allowNotLoaded:j},S)},check(m,b,$={}){const{cascade:O=!0,leafOnly:B=!1,checkStrategy:j="all",allowNotLoaded:L=!1}=$;return Te({checkedKeys:$e(b),indeterminateKeys:Oe(b),keysToCheck:m==null?[]:eo(m),cascade:O,leafOnly:B,checkStrategy:j,allowNotLoaded:L},S)},uncheck(m,b,$={}){const{cascade:O=!0,leafOnly:B=!1,checkStrategy:j="all",allowNotLoaded:L=!1}=$;return Te({checkedKeys:$e(b),indeterminateKeys:Oe(b),keysToUncheck:m==null?[]:eo(m),cascade:O,leafOnly:B,checkStrategy:j,allowNotLoaded:L},S)},getNonLeafKeys(m={}){return Ot(v,m)}};return S}const nn=e=>{const{borderColor:t,primaryColor:o,baseColor:r,textColorDisabled:n,inputColorDisabled:l,textColor2:i,opacityDisabled:d,borderRadius:a,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:h,heightSmall:v,heightMedium:z,heightLarge:g,lineHeight:P}=e;return Object.assign(Object.assign({},Bo),{labelLineHeight:P,buttonHeightSmall:v,buttonHeightMedium:z,buttonHeightLarge:g,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:h,boxShadow:`inset 0 0 0 1px ${t}`,boxShadowActive:`inset 0 0 0 1px ${o}`,boxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${Je(o,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${o}`,boxShadowDisabled:`inset 0 0 0 1px ${t}`,color:r,colorDisabled:l,colorActive:"#0000",textColor:i,textColorDisabled:n,dotColorActive:o,dotColorDisabled:t,buttonBorderColor:t,buttonBorderColorActive:o,buttonBorderColorHover:t,buttonColor:r,buttonColorActive:r,buttonTextColor:i,buttonTextColorActive:o,buttonTextColorHover:o,opacityDisabled:d,buttonBoxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${Je(o,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:a})},rn={name:"Radio",common:Lo,self:nn},ln=rn,an={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},yo=ue("n-radio-group");function dn(e){const t=ao(e,{mergedSize(K){const{size:S}=e;if(S!==void 0)return S;if(i){const{mergedSizeRef:{value:m}}=i;if(m!==void 0)return m}return K?K.mergedSize.value:"medium"},mergedDisabled(K){return!!(e.disabled||i?.disabledRef.value||K?.disabled.value)}}),{mergedSizeRef:o,mergedDisabledRef:r}=t,n=D(null),l=D(null),i=Q(yo,null),d=D(e.defaultChecked),a=Y(e,"checked"),c=pe(a,d),u=de(()=>i?i.valueRef.value===e.value:c.value),h=de(()=>{const{name:K}=e;if(K!==void 0)return K;if(i)return i.nameRef.value}),v=D(!1);function z(){if(i){const{doUpdateValue:K}=i,{value:S}=e;J(K,S)}else{const{onUpdateChecked:K,"onUpdate:checked":S}=e,{nTriggerFormInput:m,nTriggerFormChange:b}=t;K&&J(K,!0),S&&J(S,!0),m(),b(),d.value=!0}}function g(){r.value||u.value||z()}function P(){g(),n.value&&(n.value.checked=u.value)}function R(){v.value=!1}function _(){v.value=!0}return{mergedClsPrefix:i?i.mergedClsPrefixRef:be(e).mergedClsPrefixRef,inputRef:n,labelRef:l,mergedName:h,mergedDisabled:r,renderSafeChecked:u,focus:v,mergedSize:o,handleRadioInputChange:P,handleRadioInputBlur:R,handleRadioInputFocus:_}}const sn=C("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[x("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[H("checked",{backgroundColor:"var(--n-button-border-color-active)"}),H("disabled",{opacity:"var(--n-opacity-disabled)"})]),H("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),x("splitor",{height:"var(--n-height)"})]),C("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[C("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),x("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),T("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[x("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),T("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[x("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),ae("disabled",`
 cursor: pointer;
 `,[T("&:hover",[x("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),ae("checked",{color:"var(--n-button-text-color-hover)"})]),H("focus",[T("&:not(:active)",[x("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),H("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),H("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function cn(e,t,o){var r;const n=[];let l=!1;for(let i=0;i<e.length;++i){const d=e[i],a=(r=d.type)===null||r===void 0?void 0:r.name;a==="RadioButton"&&(l=!0);const c=d.props;if(a!=="RadioButton"){n.push(d);continue}if(i===0)n.push(d);else{const u=n[n.length-1].props,h=t===u.value,v=u.disabled,z=t===c.value,g=c.disabled,P=(h?2:0)+(v?0:1),R=(z?2:0)+(g?0:1),_={[`${o}-radio-group__splitor--disabled`]:v,[`${o}-radio-group__splitor--checked`]:h},K={[`${o}-radio-group__splitor--disabled`]:g,[`${o}-radio-group__splitor--checked`]:z},S=P<R?K:_;n.push(f("div",{class:[`${o}-radio-group__splitor`,S]}),d)}}return{children:n,isButtonGroup:l}}const un=Object.assign(Object.assign({},fe.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),fn=q({name:"RadioGroup",props:un,setup(e){const t=D(null),{mergedSizeRef:o,mergedDisabledRef:r,nTriggerFormChange:n,nTriggerFormInput:l,nTriggerFormBlur:i,nTriggerFormFocus:d}=ao(e),{mergedClsPrefixRef:a,inlineThemeDisabled:c,mergedRtlRef:u}=be(e),h=fe("Radio","-radio-group",sn,ln,e,a),v=D(e.defaultValue),z=Y(e,"value"),g=pe(z,v);function P(b){const{onUpdateValue:$,"onUpdate:value":O}=e;$&&J($,b),O&&J(O,b),v.value=b,n(),l()}function R(b){const{value:$}=t;$&&($.contains(b.relatedTarget)||d())}function _(b){const{value:$}=t;$&&($.contains(b.relatedTarget)||i())}oe(yo,{mergedClsPrefixRef:a,nameRef:Y(e,"name"),valueRef:g,disabledRef:r,mergedSizeRef:o,doUpdateValue:P});const K=Mo("Radio",u,a),S=w(()=>{const{value:b}=o,{common:{cubicBezierEaseInOut:$},self:{buttonBorderColor:O,buttonBorderColorActive:B,buttonBorderRadius:j,buttonBoxShadow:L,buttonBoxShadowFocus:Z,buttonBoxShadowHover:k,buttonColor:U,buttonColorActive:F,buttonTextColor:E,buttonTextColorActive:X,buttonTextColorHover:A,opacityDisabled:V,[ie("buttonHeight",b)]:ee,[ie("fontSize",b)]:te}}=h.value;return{"--n-font-size":te,"--n-bezier":$,"--n-button-border-color":O,"--n-button-border-color-active":B,"--n-button-border-radius":j,"--n-button-box-shadow":L,"--n-button-box-shadow-focus":Z,"--n-button-box-shadow-hover":k,"--n-button-color":U,"--n-button-color-active":F,"--n-button-text-color":E,"--n-button-text-color-hover":A,"--n-button-text-color-active":X,"--n-height":ee,"--n-opacity-disabled":V}}),m=c?Ie("radio-group",w(()=>o.value[0]),S,e):void 0;return{selfElRef:t,rtlEnabled:K,mergedClsPrefix:a,mergedValue:g,handleFocusout:_,handleFocusin:R,cssVars:c?void 0:S,themeClass:m?.themeClass,onRender:m?.onRender}},render(){var e;const{mergedValue:t,mergedClsPrefix:o,handleFocusin:r,handleFocusout:n}=this,{children:l,isButtonGroup:i}=cn(Do(jo(this)),t,o);return(e=this.onRender)===null||e===void 0||e.call(this),f("div",{onFocusin:r,onFocusout:n,ref:"selfElRef",class:[`${o}-radio-group`,this.rtlEnabled&&`${o}-radio-group--rtl`,this.themeClass,i&&`${o}-radio-group--button-group`],style:this.cssVars},l)}}),hn=q({name:"RadioButton",props:an,setup:dn,render(){const{mergedClsPrefix:e}=this;return f("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},f("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),f("div",{class:`${e}-radio-button__state-border`}),Uo(this.$slots.default,t=>!t&&!this.label?null:f("div",{ref:"labelRef",class:`${e}-radio__label`},t||this.label)))}}),xo=q({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return f("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),vn=C("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[H("color-transition",{transition:"color .3s var(--n-bezier)"}),H("depth",{color:"var(--n-color)"},[T("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),T("svg",{height:"1em",width:"1em"})]),pn=Object.assign(Object.assign({},fe.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),mn=q({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:pn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=be(e),r=fe("Icon","-icon",vn,Vo,e,t),n=w(()=>{const{depth:i}=e,{common:{cubicBezierEaseInOut:d},self:a}=r.value;if(i!==void 0){const{color:c,[`opacity${i}Depth`]:u}=a;return{"--n-bezier":d,"--n-color":c,"--n-opacity":u}}return{"--n-bezier":d,"--n-color":"","--n-opacity":""}}),l=o?Ie("icon",w(()=>`${e.depth||"d"}`),n,e):void 0;return{mergedClsPrefix:t,mergedStyle:w(()=>{const{size:i,color:d}=e;return{fontSize:Go(i),color:d}}),cssVars:o?void 0:n,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:r,component:n,onRender:l,themeClass:i}=this;return!((e=t?.$options)===null||e===void 0)&&e._n_icon__&&so("icon","don't wrap `n-icon` inside `n-icon`"),l?.(),f("i",Me(this.$attrs,{role:"img",class:[`${r}-icon`,i,{[`${r}-icon--depth`]:o,[`${r}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),n?f(n):this.$slots)}}),Ve=ue("n-dropdown-menu"),Pe=ue("n-dropdown"),to=ue("n-dropdown-option");function Ee(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function bn(e){return e.type==="group"}function wo(e){return e.type==="divider"}function gn(e){return e.type==="render"}const Co=q({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=Q(Pe),{hoverKeyRef:o,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:l,activeKeyPathRef:i,animatedRef:d,mergedShowRef:a,renderLabelRef:c,renderIconRef:u,labelFieldRef:h,childrenFieldRef:v,renderOptionRef:z,nodePropsRef:g,menuPropsRef:P}=t,R=Q(to,null),_=Q(Ve),K=Q(co),S=w(()=>e.tmNode.rawNode),m=w(()=>{const{value:A}=v;return Ee(e.tmNode.rawNode,A)}),b=w(()=>{const{disabled:A}=e.tmNode;return A}),$=w(()=>{if(!m.value)return!1;const{key:A,disabled:V}=e.tmNode;if(V)return!1;const{value:ee}=o,{value:te}=r,{value:y}=n,{value:I}=l;return ee!==null?I.includes(A):te!==null?I.includes(A)&&I[I.length-1]!==A:y!==null?I.includes(A):!1}),O=w(()=>r.value===null&&!d.value),B=It($,300,O),j=w(()=>!!R?.enteringSubmenuRef.value),L=D(!1);oe(to,{enteringSubmenuRef:L});function Z(){L.value=!0}function k(){L.value=!1}function U(){const{parentKey:A,tmNode:V}=e;V.disabled||a.value&&(n.value=A,r.value=null,o.value=V.key)}function F(){const{tmNode:A}=e;A.disabled||a.value&&o.value!==A.key&&U()}function E(A){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:V}=A;V&&!Ye({target:V},"dropdownOption")&&!Ye({target:V},"scrollbarRail")&&(o.value=null)}function X(){const{value:A}=m,{tmNode:V}=e;a.value&&!A&&!V.disabled&&(t.doSelect(V.key,V.rawNode),t.doUpdateShow(!1))}return{labelField:h,renderLabel:c,renderIcon:u,siblingHasIcon:_.showIconRef,siblingHasSubmenu:_.hasSubmenuRef,menuProps:P,popoverBody:K,animated:d,mergedShowSubmenu:w(()=>B.value&&!j.value),rawNode:S,hasSubmenu:m,pending:de(()=>{const{value:A}=l,{key:V}=e.tmNode;return A.includes(V)}),childActive:de(()=>{const{value:A}=i,{key:V}=e.tmNode,ee=A.findIndex(te=>V===te);return ee===-1?!1:ee<A.length-1}),active:de(()=>{const{value:A}=i,{key:V}=e.tmNode,ee=A.findIndex(te=>V===te);return ee===-1?!1:ee===A.length-1}),mergedDisabled:b,renderOption:z,nodeProps:g,handleClick:X,handleMouseMove:F,handleMouseEnter:U,handleMouseLeave:E,handleSubmenuBeforeEnter:Z,handleSubmenuAfterEnter:k}},render(){var e,t;const{animated:o,rawNode:r,mergedShowSubmenu:n,clsPrefix:l,siblingHasIcon:i,siblingHasSubmenu:d,renderLabel:a,renderIcon:c,renderOption:u,nodeProps:h,props:v,scrollable:z}=this;let g=null;if(n){const K=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);g=f(So,Object.assign({},K,{clsPrefix:l,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const P={class:[`${l}-dropdown-option-body`,this.pending&&`${l}-dropdown-option-body--pending`,this.active&&`${l}-dropdown-option-body--active`,this.childActive&&`${l}-dropdown-option-body--child-active`,this.mergedDisabled&&`${l}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},R=h?.(r),_=f("div",Object.assign({class:[`${l}-dropdown-option`,R?.class],"data-dropdown-option":!0},R),f("div",Me(P,v),[f("div",{class:[`${l}-dropdown-option-body__prefix`,i&&`${l}-dropdown-option-body__prefix--show-icon`]},[c?c(r):ne(r.icon)]),f("div",{"data-dropdown-option":!0,class:`${l}-dropdown-option-body__label`},a?a(r):ne((t=r[this.labelField])!==null&&t!==void 0?t:r.title)),f("div",{"data-dropdown-option":!0,class:[`${l}-dropdown-option-body__suffix`,d&&`${l}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?f(mn,null,{default:()=>f(Kt,null)}):null)]),this.hasSubmenu?f(Wo,null,{default:()=>[f(qo,null,{default:()=>f("div",{class:`${l}-dropdown-offset-container`},f(Zo,{show:this.mergedShowSubmenu,placement:this.placement,to:z&&this.popoverBody||void 0,teleportDisabled:!z},{default:()=>f("div",{class:`${l}-dropdown-menu-wrapper`},o?f(Xo,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>g}):g)}))})]}):null);return u?u({node:_,option:r}):_}}),yn=q({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=Q(Ve),{renderLabelRef:o,labelFieldRef:r,nodePropsRef:n,renderOptionRef:l}=Q(Pe);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:n,renderOption:l}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:r,nodeProps:n,renderLabel:l,renderOption:i}=this,{rawNode:d}=this.tmNode,a=f("div",Object.assign({class:`${t}-dropdown-option`},n?.(d)),f("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},f("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,r&&`${t}-dropdown-option-body__prefix--show-icon`]},ne(d.icon)),f("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},l?l(d):ne((e=d.title)!==null&&e!==void 0?e:d[this.labelField])),f("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return i?i({node:a,option:d}):a}}),xn=q({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:r}=e;return f(Ne,null,f(yn,{clsPrefix:o,tmNode:e,key:e.key}),r?.map(n=>{const{rawNode:l}=n;return l.show===!1?null:wo(l)?f(xo,{clsPrefix:o,key:n.key}):n.isGroup?(so("dropdown","`group` node is not allowed to be put in `group` node."),null):f(Co,{clsPrefix:o,tmNode:n,parentKey:t,key:n.key})}))}}),wn=q({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return f("div",t,[e?.()])}}),So=q({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=Q(Pe);oe(Ve,{showIconRef:w(()=>{const n=t.value;return e.tmNodes.some(l=>{var i;if(l.isGroup)return(i=l.children)===null||i===void 0?void 0:i.some(({rawNode:a})=>n?n(a):a.icon);const{rawNode:d}=l;return n?n(d):d.icon})}),hasSubmenuRef:w(()=>{const{value:n}=o;return e.tmNodes.some(l=>{var i;if(l.isGroup)return(i=l.children)===null||i===void 0?void 0:i.some(({rawNode:a})=>Ee(a,n));const{rawNode:d}=l;return Ee(d,n)})})});const r=D(null);return oe(Jo,null),oe(Qo,null),oe(co,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,r=this.tmNodes.map(n=>{const{rawNode:l}=n;return l.show===!1?null:gn(l)?f(wn,{tmNode:n,key:n.key}):wo(l)?f(xo,{clsPrefix:t,key:n.key}):bn(l)?f(xn,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key}):f(Co,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key,props:l.props,scrollable:o})});return f("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?f(et,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Yo({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Cn=C("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ot(),C("dropdown-option",`
 position: relative;
 `,[T("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[T("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),C("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[T("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ae("disabled",[H("pending",`
 color: var(--n-option-text-color-hover);
 `,[x("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),T("&::before","background-color: var(--n-option-color-hover);")]),H("active",`
 color: var(--n-option-text-color-active);
 `,[x("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),T("&::before","background-color: var(--n-option-color-active);")]),H("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[x("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),H("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),H("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[x("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[H("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),x("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[H("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),x("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),x("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[H("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("dropdown-menu","pointer-events: all;")]),C("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),C("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),C("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),T(">",[C("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("scrollable",`
 padding: var(--n-padding);
 `),H("scrollable",[x("content",`
 padding: var(--n-padding);
 `)])]),Sn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},_n=Object.keys(uo),zn=Object.assign(Object.assign(Object.assign({},uo),Sn),fe.props),_o=q({name:"Dropdown",inheritAttrs:!1,props:zn,setup(e){const t=D(!1),o=pe(Y(e,"show"),t),r=w(()=>{const{keyField:k,childrenField:U}=e;return Se(e.options,{getKey(F){return F[k]},getDisabled(F){return F.disabled===!0},getIgnored(F){return F.type==="divider"||F.type==="render"},getChildren(F){return F[U]}})}),n=w(()=>r.value.treeNodes),l=D(null),i=D(null),d=D(null),a=w(()=>{var k,U,F;return(F=(U=(k=l.value)!==null&&k!==void 0?k:i.value)!==null&&U!==void 0?U:d.value)!==null&&F!==void 0?F:null}),c=w(()=>r.value.getPath(a.value).keyPath),u=w(()=>r.value.getPath(e.value).keyPath),h=de(()=>e.keyboard&&o.value);Nt({keydown:{ArrowUp:{prevent:!0,handler:b},ArrowRight:{prevent:!0,handler:m},ArrowDown:{prevent:!0,handler:$},ArrowLeft:{prevent:!0,handler:S},Enter:{prevent:!0,handler:O},Escape:K}},h);const{mergedClsPrefixRef:v,inlineThemeDisabled:z}=be(e),g=fe("Dropdown","-dropdown",Cn,tt,e,v);oe(Pe,{labelFieldRef:Y(e,"labelField"),childrenFieldRef:Y(e,"childrenField"),renderLabelRef:Y(e,"renderLabel"),renderIconRef:Y(e,"renderIcon"),hoverKeyRef:l,keyboardKeyRef:i,lastToggledSubmenuKeyRef:d,pendingKeyPathRef:c,activeKeyPathRef:u,animatedRef:Y(e,"animated"),mergedShowRef:o,nodePropsRef:Y(e,"nodeProps"),renderOptionRef:Y(e,"renderOption"),menuPropsRef:Y(e,"menuProps"),doSelect:P,doUpdateShow:R}),ke(o,k=>{!e.animated&&!k&&_()});function P(k,U){const{onSelect:F}=e;F&&J(F,k,U)}function R(k){const{"onUpdate:show":U,onUpdateShow:F}=e;U&&J(U,k),F&&J(F,k),t.value=k}function _(){l.value=null,i.value=null,d.value=null}function K(){R(!1)}function S(){j("left")}function m(){j("right")}function b(){j("up")}function $(){j("down")}function O(){const k=B();k?.isLeaf&&o.value&&(P(k.key,k.rawNode),R(!1))}function B(){var k;const{value:U}=r,{value:F}=a;return!U||F===null?null:(k=U.getNode(F))!==null&&k!==void 0?k:null}function j(k){const{value:U}=a,{value:{getFirstAvailableNode:F}}=r;let E=null;if(U===null){const X=F();X!==null&&(E=X.key)}else{const X=B();if(X){let A;switch(k){case"down":A=X.getNext();break;case"up":A=X.getPrev();break;case"right":A=X.getChild();break;case"left":A=X.getParent();break}A&&(E=A.key)}}E!==null&&(l.value=null,i.value=E)}const L=w(()=>{const{size:k,inverted:U}=e,{common:{cubicBezierEaseInOut:F},self:E}=g.value,{padding:X,dividerColor:A,borderRadius:V,optionOpacityDisabled:ee,[ie("optionIconSuffixWidth",k)]:te,[ie("optionSuffixWidth",k)]:y,[ie("optionIconPrefixWidth",k)]:I,[ie("optionPrefixWidth",k)]:s,[ie("fontSize",k)]:N,[ie("optionHeight",k)]:M,[ie("optionIconSize",k)]:Ae}=E,G={"--n-bezier":F,"--n-font-size":N,"--n-padding":X,"--n-border-radius":V,"--n-option-height":M,"--n-option-prefix-width":s,"--n-option-icon-prefix-width":I,"--n-option-suffix-width":y,"--n-option-icon-suffix-width":te,"--n-option-icon-size":Ae,"--n-divider-color":A,"--n-option-opacity-disabled":ee};return U?(G["--n-color"]=E.colorInverted,G["--n-option-color-hover"]=E.optionColorHoverInverted,G["--n-option-color-active"]=E.optionColorActiveInverted,G["--n-option-text-color"]=E.optionTextColorInverted,G["--n-option-text-color-hover"]=E.optionTextColorHoverInverted,G["--n-option-text-color-active"]=E.optionTextColorActiveInverted,G["--n-option-text-color-child-active"]=E.optionTextColorChildActiveInverted,G["--n-prefix-color"]=E.prefixColorInverted,G["--n-suffix-color"]=E.suffixColorInverted,G["--n-group-header-text-color"]=E.groupHeaderTextColorInverted):(G["--n-color"]=E.color,G["--n-option-color-hover"]=E.optionColorHover,G["--n-option-color-active"]=E.optionColorActive,G["--n-option-text-color"]=E.optionTextColor,G["--n-option-text-color-hover"]=E.optionTextColorHover,G["--n-option-text-color-active"]=E.optionTextColorActive,G["--n-option-text-color-child-active"]=E.optionTextColorChildActive,G["--n-prefix-color"]=E.prefixColor,G["--n-suffix-color"]=E.suffixColor,G["--n-group-header-text-color"]=E.groupHeaderTextColor),G}),Z=z?Ie("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:v,mergedTheme:g,tmNodes:n,mergedShow:o,handleAfterLeave:()=>{e.animated&&_()},doUpdateShow:R,cssVars:z?void 0:L,themeClass:Z?.themeClass,onRender:Z?.onRender}},render(){const e=(r,n,l,i,d)=>{var a;const{mergedClsPrefix:c,menuProps:u}=this;(a=this.onRender)===null||a===void 0||a.call(this);const h=u?.(void 0,this.tmNodes.map(z=>z.rawNode))||{},v={ref:kt(n),class:[r,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...l,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:d};return f(So,Me(this.$attrs,v,h))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return f(nt,Object.assign({},Ce(this.$props,_n),o),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}}),Rn=ue("n-layout-sider"),ge=ue("n-menu"),Ge=ue("n-submenu"),We=ue("n-menu-item-group"),we=8;function qe(e){const t=Q(ge),{props:o,mergedCollapsedRef:r}=t,n=Q(Ge,null),l=Q(We,null),i=w(()=>o.mode==="horizontal"),d=w(()=>i.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=w(()=>{var v;return Math.max((v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize,o.iconSize)}),c=w(()=>{var v;return!i.value&&e.root&&r.value&&(v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize}),u=w(()=>{if(i.value||i.value)return;const{collapsedWidth:v,indent:z,rootIndent:g}=o,{root:P,isGroup:R}=e,_=g===void 0?z:g;return P?r.value?v/2-a.value/2:_:l&&typeof l.paddingLeftRef.value=="number"?z/2+l.paddingLeftRef.value:n&&typeof n.paddingLeftRef.value=="number"?(R?z/2:z)+n.paddingLeftRef.value:0}),h=w(()=>{const{collapsedWidth:v,indent:z,rootIndent:g}=o,{value:P}=a,{root:R}=e;return i.value||!R||!r.value?we:(g===void 0?z:g)+P+we-(v+P)/2});return{dropdownPlacement:d,activeIconSize:c,maxIconSize:a,paddingLeft:u,iconMarginRight:h,NMenu:t,NSubmenu:n}}const Ze={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},zo=Object.assign(Object.assign({},Ze),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),kn=q({name:"MenuOptionGroup",props:zo,setup(e){oe(Ge,null);const t=qe(e);oe(We,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=Q(ge);return function(){const{value:n}=o,l=t.paddingLeft.value,{nodeProps:i}=r,d=i?.(e.tmNode.rawNode);return f("div",{class:`${n}-menu-item-group`,role:"group"},f("div",Object.assign({},d,{class:[`${n}-menu-item-group-title`,d?.class],style:[d?.style||"",l!==void 0?`padding-left: ${l}px;`:""]}),ne(e.title),e.extra?f(Ne,null," ",ne(e.extra)):null),f("div",null,e.tmNodes.map(a=>Xe(a,r))))}}}),Ro=q({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=Q(ge);return{menuProps:t,style:w(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:w(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:n,expandIcon:l}}=this,i=o?o(t.rawNode):ne(this.icon);return f("div",{onClick:d=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},i&&f("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[i]),f("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):ne(this.title),this.extra||n?f("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(t.rawNode):ne(this.extra)):null),this.showArrow?f(rt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):f($t,null)}):null)}}),ko=Object.assign(Object.assign({},Ze),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Le=q({name:"Submenu",props:ko,setup(e){const t=qe(e),{NMenu:o,NSubmenu:r}=t,{props:n,mergedCollapsedRef:l,mergedThemeRef:i}=o,d=w(()=>{const{disabled:v}=e;return r?.mergedDisabledRef.value||n.disabled?!0:v}),a=D(!1);oe(Ge,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),oe(We,null);function c(){const{onClick:v}=e;v&&v()}function u(){d.value||(l.value||o.toggleExpand(e.internalKey),c())}function h(v){a.value=v}return{menuProps:n,mergedTheme:i,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:de(()=>{var v;return(v=e.virtualChildActive)!==null&&v!==void 0?v:o.activePathRef.value.includes(e.internalKey)}),collapsed:w(()=>n.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:w(()=>!d.value&&(n.mode==="horizontal"||l.value)),handlePopoverShowChange:h,handleClick:u}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,n=()=>{const{isHorizontal:i,paddingLeft:d,collapsed:a,mergedDisabled:c,maxIconSize:u,activeIconSize:h,title:v,childActive:z,icon:g,handleClick:P,menuProps:{nodeProps:R},dropdownShow:_,iconMarginRight:K,tmNode:S,mergedClsPrefix:m,isEllipsisPlaceholder:b,extra:$}=this,O=R?.(S.rawNode);return f("div",Object.assign({},O,{class:[`${m}-menu-item`,O?.class],role:"menuitem"}),f(Ro,{tmNode:S,paddingLeft:d,collapsed:a,disabled:c,iconMarginRight:K,maxIconSize:u,activeIconSize:h,title:v,extra:$,showArrow:!i,childActive:z,clsPrefix:m,icon:g,hover:_,onClick:P,isEllipsisPlaceholder:b}))},l=()=>f(it,null,{default:()=>{const{tmNodes:i,collapsed:d}=this;return d?null:f("div",{class:`${t}-submenu-children`,role:"menu"},i.map(a=>Xe(a,this.menuProps)))}});return this.root?f(_o,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>f("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},n(),this.isHorizontal?null:l())}):f("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},n(),l())}}),Io=Object.assign(Object.assign({},Ze),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),In=q({name:"MenuOption",props:Io,setup(e){const t=qe(e),{NSubmenu:o,NMenu:r}=t,{props:n,mergedClsPrefixRef:l,mergedCollapsedRef:i}=r,d=o?o.mergedDisabledRef:{value:!1},a=w(()=>d.value||e.disabled);function c(h){const{onClick:v}=e;v&&v(h)}function u(h){a.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),c(h))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:n,dropdownEnabled:de(()=>e.root&&i.value&&n.mode!=="horizontal"&&!a.value),selected:de(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:u}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:n}}=this,l=n?.(o.rawNode);return f("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l?.class]}),f(lt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):ne(this.title),trigger:()=>f(Ro,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Nn=q({name:"MenuDivider",setup(){const e=Q(ge),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:f("div",{class:`${t.value}-menu-divider`})}}),Pn=De(zo),An=De(Io),Kn=De(ko);function Be(e){return e.type==="divider"||e.type==="render"}function $n(e){return e.type==="divider"}function Xe(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(Be(o))return $n(o)?f(Nn,Object.assign({key:e.key},o.props)):null;const{labelField:n}=t,{key:l,level:i,isGroup:d}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[n],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:i,root:i===0,isGroup:d});return e.children?e.isGroup?f(kn,Ce(a,Pn,{tmNode:e,tmNodes:e.children,key:l})):f(Le,Ce(a,Kn,{key:l,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):f(In,Ce(a,An,{key:l,tmNode:e}))}const no=[T("&::before","background-color: var(--n-item-color-hover);"),x("arrow",`
 color: var(--n-arrow-color-hover);
 `),x("icon",`
 color: var(--n-item-icon-color-hover);
 `),C("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[T("a",`
 color: var(--n-item-text-color-hover);
 `),x("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ro=[x("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),C("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[T("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),x("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],On=T([C("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[H("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[C("submenu","margin: 0;"),C("menu-item","margin: 0;"),C("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[T("&::before","display: none;"),H("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),C("menu-item-content",[H("selected",[x("icon","color: var(--n-item-icon-color-active-horizontal);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[T("a","color: var(--n-item-text-color-active-horizontal);"),x("extra","color: var(--n-item-text-color-active-horizontal);")])]),H("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[T("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),x("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),x("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ae("disabled",[ae("selected, child-active",[T("&:focus-within",ro)]),H("selected",[he(null,[x("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[T("a","color: var(--n-item-text-color-active-hover-horizontal);"),x("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),H("child-active",[he(null,[x("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[T("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),x("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),he("border-bottom: 2px solid var(--n-border-color-horizontal);",ro)]),C("menu-item-content-header",[T("a","color: var(--n-item-text-color-horizontal);")])])]),ae("responsive",[C("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),H("collapsed",[C("menu-item-content",[H("selected",[T("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),C("menu-item-content-header","opacity: 0;"),x("arrow","opacity: 0;"),x("icon","color: var(--n-item-icon-color-collapsed);")])]),C("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),C("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[T("> *","z-index: 1;"),T("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),H("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),H("collapsed",[x("arrow","transform: rotate(0);")]),H("selected",[T("&::before","background-color: var(--n-item-color-active);"),x("arrow","color: var(--n-arrow-color-active);"),x("icon","color: var(--n-item-icon-color-active);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[T("a","color: var(--n-item-text-color-active);"),x("extra","color: var(--n-item-text-color-active);")])]),H("child-active",[C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[T("a",`
 color: var(--n-item-text-color-child-active);
 `),x("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),x("arrow",`
 color: var(--n-arrow-color-child-active);
 `),x("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ae("disabled",[ae("selected, child-active",[T("&:focus-within",no)]),H("selected",[he(null,[x("arrow","color: var(--n-arrow-color-active-hover);"),x("icon","color: var(--n-item-icon-color-active-hover);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[T("a","color: var(--n-item-text-color-active-hover);"),x("extra","color: var(--n-item-text-color-active-hover);")])])]),H("child-active",[he(null,[x("arrow","color: var(--n-arrow-color-child-active-hover);"),x("icon","color: var(--n-item-icon-color-child-active-hover);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[T("a","color: var(--n-item-text-color-child-active-hover);"),x("extra","color: var(--n-item-text-color-child-active-hover);")])])]),H("selected",[he(null,[T("&::before","background-color: var(--n-item-color-active-hover);")])]),he(null,no)]),x("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),x("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),C("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[T("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[T("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),C("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[C("menu-item-content",`
 height: var(--n-item-height);
 `),C("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[at({duration:".2s"})])]),C("menu-item-group",[C("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),C("menu-tooltip",[T("a",`
 color: inherit;
 text-decoration: none;
 `)]),C("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function he(e,t){return[H("hover",e,t),T("&:hover",e,t)]}const Tn=Object.assign(Object.assign({},fe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Fn=q({name:"Menu",props:Tn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=be(e),r=fe("Menu","-menu",On,dt,e,t),n=Q(Rn,null),l=w(()=>{var y;const{collapsed:I}=e;if(I!==void 0)return I;if(n){const{collapseModeRef:s,collapsedRef:N}=n;if(s.value==="width")return(y=N.value)!==null&&y!==void 0?y:!1}return!1}),i=w(()=>{const{keyField:y,childrenField:I,disabledField:s}=e;return Se(e.items||e.options,{getIgnored(N){return Be(N)},getChildren(N){return N[I]},getDisabled(N){return N[s]},getKey(N){var M;return(M=N[y])!==null&&M!==void 0?M:N.name}})}),d=w(()=>new Set(i.value.treeNodes.map(y=>y.key))),{watchProps:a}=e,c=D(null);a?.includes("defaultValue")?Qe(()=>{c.value=e.defaultValue}):c.value=e.defaultValue;const u=Y(e,"value"),h=pe(u,c),v=D([]),z=()=>{v.value=e.defaultExpandAll?i.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||i.value.getPath(h.value,{includeSelf:!1}).keyPath};a?.includes("defaultExpandedKeys")?Qe(z):z();const g=st(e,["expandedNames","expandedKeys"]),P=pe(g,v),R=w(()=>i.value.treeNodes),_=w(()=>i.value.getPath(h.value).keyPath);oe(ge,{props:e,mergedCollapsedRef:l,mergedThemeRef:r,mergedValueRef:h,mergedExpandedKeysRef:P,activePathRef:_,mergedClsPrefixRef:t,isHorizontalRef:w(()=>e.mode==="horizontal"),invertedRef:Y(e,"inverted"),doSelect:K,toggleExpand:m});function K(y,I){const{"onUpdate:value":s,onUpdateValue:N,onSelect:M}=e;N&&J(N,y,I),s&&J(s,y,I),M&&J(M,y,I),c.value=y}function S(y){const{"onUpdate:expandedKeys":I,onUpdateExpandedKeys:s,onExpandedNamesChange:N,onOpenNamesChange:M}=e;I&&J(I,y),s&&J(s,y),N&&J(N,y),M&&J(M,y),v.value=y}function m(y){const I=Array.from(P.value),s=I.findIndex(N=>N===y);if(~s)I.splice(s,1);else{if(e.accordion&&d.value.has(y)){const N=I.findIndex(M=>d.value.has(M));N>-1&&I.splice(N,1)}I.push(y)}S(I)}const b=y=>{const I=i.value.getPath(y??h.value,{includeSelf:!1}).keyPath;if(!I.length)return;const s=Array.from(P.value),N=new Set([...s,...I]);e.accordion&&d.value.forEach(M=>{N.has(M)&&!I.includes(M)&&N.delete(M)}),S(Array.from(N))},$=w(()=>{const{inverted:y}=e,{common:{cubicBezierEaseInOut:I},self:s}=r.value,{borderRadius:N,borderColorHorizontal:M,fontSize:Ae,itemHeight:G,dividerColor:No}=s,p={"--n-divider-color":No,"--n-bezier":I,"--n-font-size":Ae,"--n-border-color-horizontal":M,"--n-border-radius":N,"--n-item-height":G};return y?(p["--n-group-text-color"]=s.groupTextColorInverted,p["--n-color"]=s.colorInverted,p["--n-item-text-color"]=s.itemTextColorInverted,p["--n-item-text-color-hover"]=s.itemTextColorHoverInverted,p["--n-item-text-color-active"]=s.itemTextColorActiveInverted,p["--n-item-text-color-child-active"]=s.itemTextColorChildActiveInverted,p["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveInverted,p["--n-item-text-color-active-hover"]=s.itemTextColorActiveHoverInverted,p["--n-item-icon-color"]=s.itemIconColorInverted,p["--n-item-icon-color-hover"]=s.itemIconColorHoverInverted,p["--n-item-icon-color-active"]=s.itemIconColorActiveInverted,p["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHoverInverted,p["--n-item-icon-color-child-active"]=s.itemIconColorChildActiveInverted,p["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHoverInverted,p["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsedInverted,p["--n-item-text-color-horizontal"]=s.itemTextColorHorizontalInverted,p["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontalInverted,p["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontalInverted,p["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontalInverted,p["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontalInverted,p["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontalInverted,p["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontalInverted,p["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontalInverted,p["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontalInverted,p["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontalInverted,p["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontalInverted,p["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontalInverted,p["--n-arrow-color"]=s.arrowColorInverted,p["--n-arrow-color-hover"]=s.arrowColorHoverInverted,p["--n-arrow-color-active"]=s.arrowColorActiveInverted,p["--n-arrow-color-active-hover"]=s.arrowColorActiveHoverInverted,p["--n-arrow-color-child-active"]=s.arrowColorChildActiveInverted,p["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHoverInverted,p["--n-item-color-hover"]=s.itemColorHoverInverted,p["--n-item-color-active"]=s.itemColorActiveInverted,p["--n-item-color-active-hover"]=s.itemColorActiveHoverInverted,p["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsedInverted):(p["--n-group-text-color"]=s.groupTextColor,p["--n-color"]=s.color,p["--n-item-text-color"]=s.itemTextColor,p["--n-item-text-color-hover"]=s.itemTextColorHover,p["--n-item-text-color-active"]=s.itemTextColorActive,p["--n-item-text-color-child-active"]=s.itemTextColorChildActive,p["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveHover,p["--n-item-text-color-active-hover"]=s.itemTextColorActiveHover,p["--n-item-icon-color"]=s.itemIconColor,p["--n-item-icon-color-hover"]=s.itemIconColorHover,p["--n-item-icon-color-active"]=s.itemIconColorActive,p["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHover,p["--n-item-icon-color-child-active"]=s.itemIconColorChildActive,p["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHover,p["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsed,p["--n-item-text-color-horizontal"]=s.itemTextColorHorizontal,p["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontal,p["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontal,p["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontal,p["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontal,p["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontal,p["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontal,p["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontal,p["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontal,p["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontal,p["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontal,p["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontal,p["--n-arrow-color"]=s.arrowColor,p["--n-arrow-color-hover"]=s.arrowColorHover,p["--n-arrow-color-active"]=s.arrowColorActive,p["--n-arrow-color-active-hover"]=s.arrowColorActiveHover,p["--n-arrow-color-child-active"]=s.arrowColorChildActive,p["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHover,p["--n-item-color-hover"]=s.itemColorHover,p["--n-item-color-active"]=s.itemColorActive,p["--n-item-color-active-hover"]=s.itemColorActiveHover,p["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsed),p}),O=o?Ie("menu",w(()=>e.inverted?"a":"b"),$,e):void 0,B=ct(),j=D(null),L=D(null);let Z=!0;const k=()=>{var y;Z?Z=!1:(y=j.value)===null||y===void 0||y.sync({showAllItemsBeforeCalculate:!0})};function U(){return document.getElementById(B)}const F=D(-1);function E(y){F.value=e.options.length-y}function X(y){y||(F.value=-1)}const A=w(()=>{const y=F.value;return{children:y===-1?[]:e.options.slice(y)}}),V=w(()=>{const{childrenField:y,disabledField:I,keyField:s}=e;return Se([A.value],{getIgnored(N){return Be(N)},getChildren(N){return N[y]},getDisabled(N){return N[I]},getKey(N){var M;return(M=N[s])!==null&&M!==void 0?M:N.name}})}),ee=w(()=>Se([{}]).treeNodes[0]);function te(){var y;if(F.value===-1)return f(Le,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:ee.value,domId:B,isEllipsisPlaceholder:!0});const I=V.value.treeNodes[0],s=_.value,N=!!(!((y=I.children)===null||y===void 0)&&y.some(M=>s.includes(M.key)));return f(Le,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:N,tmNode:I,domId:B,rawNodes:I.rawNode.children||[],tmNodes:I.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:g,uncontrolledExpanededKeys:v,mergedExpandedKeys:P,uncontrolledValue:c,mergedValue:h,activePath:_,tmNodes:R,mergedTheme:r,mergedCollapsed:l,cssVars:o?void 0:$,themeClass:O?.themeClass,overflowRef:j,counterRef:L,updateCounter:()=>{},onResize:k,onUpdateOverflow:X,onUpdateCount:E,renderCounter:te,getCounter:U,onRender:O?.onRender,showOption:b,deriveResponsiveState:k}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;r?.();const n=()=>this.tmNodes.map(a=>Xe(a,this.$props)),i=t==="horizontal"&&this.responsive,d=()=>f("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,i&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},i?f(At,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:n,counter:this.renderCounter}):n());return i?f(ut,{onResize:this.onResize},{default:d}):d()}}),Hn={class:"flex"},En={__name:"RoleSelect",setup(e,{expose:t}){const o=fo(),r=ho(),n=D(o.roles||[]),l=D(o.currentRole?.code??n.value[0]?.code??""),[i,d]=ft();function a(h){i.value?.open({...h})}async function c(){try{d.value=!0;const{data:h}=await Fe.switchCurrentRole(l.value);await r.switchCurrentRole(h),d.value=!1,$message.success("切换成功"),i.value?.handleOk()}catch(h){return console.error(h),d.value=!1,!1}}async function u(){await Fe.logout(),r.logout(),i.value?.close(),$message.success("已退出登录")}return t({open:a}),(h,v)=>{const z=hn,g=mt,P=fn,R=bt;return se(),_e(W(pt),{ref_key:"modalRef",ref:i,title:"请选择角色",width:"360px",class:"p-12"},{footer:le(()=>[ve("div",Hn,[ce(R,{class:"flex-1",size:"large",onClick:v[1]||(v[1]=_=>u())},{default:le(()=>[Ke("退出登录")]),_:1}),ce(R,{loading:W(d),class:"ml-20 flex-1",type:"primary",size:"large",disabled:W(o).currentRole?.code===W(l),onClick:c},{default:le(()=>[Ke(" 确认 ")]),_:1},8,["loading","disabled"])])]),default:le(()=>[ce(P,{value:W(l),"onUpdate:value":v[0]||(v[0]=_=>ht(l)?l.value=_:null),class:"cus-scroll-y max-h-420 w-full py-16"},{default:le(()=>[ce(g,{vertical:"",size:24,class:"mx-12"},{default:le(()=>[(se(!0),me(Ne,null,vt(W(n),_=>(se(),_e(z,{key:_.id,class:vo(["h-36 w-full text-center text-16 leading-36",{"bg-primary! color-white!":_.code===W(l)}]),value:_.code},{default:le(()=>[Ke(ze(_.name),1)]),_:2},1032,["class","value"]))),128))]),_:1})]),_:1},8,["value"])]),_:1},512)}}},Ln={class:"flex cursor-pointer items-center"},Bn={key:0,class:"ml-12 flex-col flex-shrink-0 items-center"},Mn={class:"text-14"},Dn={class:"text-12 opacity-50"},Qn={__name:"UserAvatar",setup(e){const t=po(),o=fo(),r=ho();mo();const n=io([{label:"One element plus UI页面",key:"oneElementPlus",icon:()=>f("i",{class:"i-basil:exchange-solid text-14"})},{label:"切换角色",key:"toggleRole",icon:()=>f("i",{class:"i-basil:exchange-solid text-14"}),show:w(()=>o.roles.length>1)},{label:"退出登录",key:"logout",icon:()=>f("i",{class:"i-mdi:exit-to-app text-14"})}]),l=D(null);function i(d){switch(d){case"oneElementPlus":window.open("https://firecodes.github.io/qiankun-template/one/");break;case"profile":t.push("/profile");break;case"toggleRole":l.value?.open({onOk(){yt().then(()=>{t.replace("/")})}});break;case"logout":$dialog.confirm({title:"提示",type:"info",content:"确认退出？",async confirm(){try{await Fe.logout()}catch(a){console.error(a)}r.logout(),$message.success("已退出登录")}});break}}return(d,a)=>{const c=Rt,u=_o;return se(),me(Ne,null,[ce(u,{options:W(n),onSelect:i},{default:le(()=>[ve("div",Ln,[ce(c,{round:"",size:36,src:W(o).avatar},null,8,["src"]),W(o).userInfo?(se(),me("div",Bn,[ve("span",Mn,ze(W(o).nickName??W(o).username),1),ve("span",Dn,"["+ze(W(o).currentRole?.name)+"]",1)])):gt("",!0)])]),_:1},8,["options"]),ce(W(En),{ref_key:"roleSelectRef",ref:l},null,512)],64)}}},Yn={__name:"MenuCollapse",setup(e){const t=je();return(o,r)=>(se(),me("div",{class:"f-c-c cursor-pointer rounded-4 p-6 text-22 transition-all-300 auto-bg-hover",onClick:r[0]||(r[0]=(...n)=>W(t).switchCollapsed&&W(t).switchCollapsed(...n))},[ve("i",{class:vo(W(t).collapsed?"i-line-md-menu-unfold-left":"i-line-md-menu-fold-left")},null,2)]))}},jn="/qiankun-template/admin/static/isme-D6AR05SU.png",Un={},Vn={class:"h-40 w-40 rounded-full bg-primary p-1/100"},Gn=ve("img",{src:jn,alt:"Logo"},null,-1),Wn=[Gn];function qn(e,t){return se(),me("div",Vn,Wn)}const Zn=xt(Un,[["render",qn]]),er={__name:"SideLogo",setup(e){const t="Vue Naive Admin",o=je();return(r,n)=>{const l=Zn,i=wt("router-link");return se(),_e(i,{class:"h-60 f-c-c",to:"/"},{default:le(()=>[ce(l,{class:"rounded-8!"}),Ct(ve("h2",{class:"ml-10 max-w-140 flex-shrink-0 text-16 color-primary font-bold"},ze(W(t)),513),[[St,!W(o).collapsed]])]),_:1})}}},or={__name:"SideMenu",setup(e){const t=po(),o=_t(),r=je(),n=mo(),l=w(()=>o.meta?.parentKey||o.name),i=D(null);ke(o,async()=>{await lo(),i.value?.showOption()});function d(a,c){zt(c.originPath)?$dialog.confirm({type:"info",title:"请选择打开方式",positiveText:"外链打开",negativeText:"在本站内嵌打开",confirm(){window.open(c.originPath)},cancel:()=>{t.push(c.path)}}):t.push(c.path)}return(a,c)=>{const u=Fn;return se(),_e(u,{ref_key:"menu",ref:i,class:"side-menu",accordion:"",indent:18,"collapsed-icon-size":22,"collapsed-width":64,collapsed:W(r).collapsed,options:W(n).menus,value:W(l),"onUpdate:value":d},null,8,["collapsed","options","value"])}}};export{_o as _,er as a,or as b,Yn as c,Qn as d};
