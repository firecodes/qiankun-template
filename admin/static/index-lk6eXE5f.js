import{e as ne,l as L,P as xt,Q as yt,j as d,R as we,S as wt,T as te,U as St,k as Ct,q as Rt,h as X,V as Tt,G as ke,W as zt,X as $t,Y as _t,Z as Pt,c as n,b as l,a as z,d as A,$ as Wt,u as kt,f as Le,a0 as Lt,a1 as Se,a2 as se,a3 as At,y as le,a4 as ee,o as Bt,p as Et,t as j,a5 as jt,a6 as It,a7 as I,a8 as Q,i as Mt,a9 as Ce,aa as de,ab as Z,ac as Ot,ad as Ht,ae as Ft,af as Dt,ag as Nt,ah as Ae,w as Vt,z as V,A as ue,C as B,_ as Xt,v as Ut,L as Gt,ai as Yt,F as Re,I as qt,B as Te,H as Kt,aj as Jt,D as Qt,E as Zt,ak as ea,al as ta}from"./index-B74JimqN.js";import{_ as aa}from"./SideMenu-CME_InYD.js";const na=we(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[we("&::-webkit-scrollbar",{width:0,height:0})]),ra=ne({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=L(null);function o(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const s=xt();return na.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:yt,ssr:s}),Object.assign({selfRef:e,handleWheel:o},{scrollTo(...r){var w;(w=e.value)===null||w===void 0||w.scrollTo(...r)}})},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var oa=/\s/;function ia(e){for(var o=e.length;o--&&oa.test(e.charAt(o)););return o}var sa=/^\s+/;function la(e){return e&&e.slice(0,ia(e)+1).replace(sa,"")}var ze=NaN,da=/^[-+]0x[0-9a-f]+$/i,ca=/^0b[01]+$/i,ba=/^0o[0-7]+$/i,fa=parseInt;function $e(e){if(typeof e=="number")return e;if(wt(e))return ze;if(te(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=te(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=la(e);var s=ca.test(e);return s||ba.test(e)?fa(e.slice(2),s?2:8):da.test(e)?ze:+e}var ce=function(){return St.Date.now()},ua="Expected a function",pa=Math.max,va=Math.min;function ha(e,o,s){var b,r,w,v,p,g,m=0,f=!1,x=!1,C=!0;if(typeof e!="function")throw new TypeError(ua);o=$e(o)||0,te(s)&&(f=!!s.leading,x="maxWait"in s,w=x?pa($e(s.maxWait)||0,o):w,C="trailing"in s?!!s.trailing:C);function S(u){var $=b,F=r;return b=r=void 0,m=u,v=e.apply(F,$),v}function y(u){return m=u,p=setTimeout(W,o),f?S(u):v}function R(u){var $=u-g,F=u-m,U=o-$;return x?va(U,w-F):U}function P(u){var $=u-g,F=u-m;return g===void 0||$>=o||$<0||x&&F>=w}function W(){var u=ce();if(P(u))return _(u);p=setTimeout(W,R(u))}function _(u){return p=void 0,C&&b?S(u):(b=r=void 0,v)}function H(){p!==void 0&&clearTimeout(p),m=0,b=g=r=p=void 0}function k(){return p===void 0?v:_(ce())}function h(){var u=ce(),$=P(u);if(b=arguments,r=this,g=u,$){if(p===void 0)return y(g);if(x)return clearTimeout(p),p=setTimeout(W,o),S(g)}return p===void 0&&(p=setTimeout(W,o)),v}return h.cancel=H,h.flush=k,h}var ga="Expected a function";function be(e,o,s){var b=!0,r=!0;if(typeof e!="function")throw new TypeError(ga);return te(s)&&(b="leading"in s?!!s.leading:b,r="trailing"in s?!!s.trailing:r),ha(e,o,{leading:b,maxWait:o,trailing:r})}const ma=ne({name:"Add",render(){return d("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),Be=Ct("n-tabs"),xa={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ya=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Pt(xa,["displayDirective"])),ae=ne({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ya,setup(e){const{mergedClsPrefixRef:o,valueRef:s,typeRef:b,closableRef:r,tabStyleRef:w,addTabStyleRef:v,tabClassRef:p,addTabClassRef:g,tabChangeIdRef:m,onBeforeLeaveRef:f,triggerRef:x,handleAdd:C,activateTab:S,handleClose:y}=Rt(Be);return{trigger:x,mergedClosable:X(()=>{if(e.internalAddable)return!1;const{closable:R}=e;return R===void 0?r.value:R}),style:w,addStyle:v,tabClass:p,addTabClass:g,clsPrefix:o,value:s,type:b,handleClose(R){R.stopPropagation(),!e.disabled&&y(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){C();return}const{name:R}=e,P=++m.id;if(R!==s.value){const{value:W}=f;W?Promise.resolve(W(e.name,s.value)).then(_=>{_&&m.id===P&&S(R)}):S(R)}}}},render(){const{internalAddable:e,clsPrefix:o,name:s,disabled:b,label:r,tab:w,value:v,mergedClosable:p,trigger:g,$slots:{default:m}}=this,f=r??w;return d("div",{class:`${o}-tabs-tab-wrapper`},this.internalLeftPadded?d("div",{class:`${o}-tabs-tab-pad`}):null,d("div",Object.assign({key:s,"data-name":s,"data-disabled":b?!0:void 0},Tt({class:[`${o}-tabs-tab`,v===s&&`${o}-tabs-tab--active`,b&&`${o}-tabs-tab--disabled`,p&&`${o}-tabs-tab--closable`,e&&`${o}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:g==="click"?this.activateTab:void 0,onMouseenter:g==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),d("span",{class:`${o}-tabs-tab__label`},e?d(ke,null,d("div",{class:`${o}-tabs-tab__height-placeholder`}," "),d(zt,{clsPrefix:o},{default:()=>d(ma,null)})):m?m():typeof f=="object"?f:$t(f??s)),p&&this.type==="card"?d(_t,{clsPrefix:o,class:`${o}-tabs-tab__close`,onClick:this.handleClose,disabled:b}):null))}}),wa=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[l("segment-type",[n("tabs-rail",[z("&.transition-disabled",[n("tabs-capsule",`
 transition: none;
 `)])])]),l("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),l("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),l("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),l("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),l("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),l("flex",[n("tabs-nav",`
 width: 100%;
 position: relative;
 `,[n("tabs-wrapper",`
 width: 100%;
 `,[n("tabs-tab",`
 margin-right: 0;
 `)])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),l("top, bottom",[n("tabs-nav-scroll-wrapper",[z("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),z("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),l("shadow-start",[z("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[z("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),l("left, right",[n("tabs-nav-scroll-content",`
 flex-direction: column;
 `),n("tabs-nav-scroll-wrapper",[z("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),z("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),l("shadow-start",[z("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[z("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[z("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),z("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[l("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[z("&.transition-disabled",`
 transition: none;
 `),l("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[z("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),z("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),z("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),z("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),z("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),l("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[z("&:hover",{color:"var(--n-tab-text-color-hover)"}),l("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),l("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[l("line-type",[l("top",[A("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),l("left",[A("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),l("right",[A("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),l("bottom",[A("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),l("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[l("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Wt("disabled",[z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),l("closable","padding-right: 8px;"),l("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),l("disabled","color: var(--n-tab-text-color-disabled);")]),n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),l("left, right",[n("tabs-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),l("top",[l("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),l("left",[l("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),l("right",[l("card-type",[n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),l("bottom",[l("card-type",[n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Sa=Object.assign(Object.assign({},Le.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ca=ne({name:"Tabs",props:Sa,setup(e,{slots:o}){var s,b,r,w;const{mergedClsPrefixRef:v,inlineThemeDisabled:p}=kt(e),g=Le("Tabs","-tabs",wa,Lt,e,v),m=L(null),f=L(null),x=L(null),C=L(null),S=L(null),y=L(null),R=L(!0),P=L(!0),W=Se(e,["labelSize","size"]),_=Se(e,["activeName","value"]),H=L((b=(s=_.value)!==null&&s!==void 0?s:e.defaultValue)!==null&&b!==void 0?b:o.default?(w=(r=se(o.default())[0])===null||r===void 0?void 0:r.props)===null||w===void 0?void 0:w.name:null),k=At(_,H),h={id:0},u=X(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});le(k,()=>{h.id=0,G(),ve()});function $(){var a;const{value:t}=k;return t===null?null:(a=m.value)===null||a===void 0?void 0:a.querySelector(`[data-name="${t}"]`)}function F(a){if(e.type==="card")return;const{value:t}=f;if(!t)return;const i=t.style.opacity==="0";if(a){const c=`${v.value}-tabs-bar--disabled`,{barWidth:T,placement:M}=e;if(a.dataset.disabled==="true"?t.classList.add(c):t.classList.remove(c),["top","bottom"].includes(M)){if(pe(["top","maxHeight","height"]),typeof T=="number"&&a.offsetWidth>=T){const E=Math.floor((a.offsetWidth-T)/2)+a.offsetLeft;t.style.left=`${E}px`,t.style.maxWidth=`${T}px`}else t.style.left=`${a.offsetLeft}px`,t.style.maxWidth=`${a.offsetWidth}px`;t.style.width="8192px",i&&(t.style.transition="none"),t.offsetWidth,i&&(t.style.transition="",t.style.opacity="1")}else{if(pe(["left","maxWidth","width"]),typeof T=="number"&&a.offsetHeight>=T){const E=Math.floor((a.offsetHeight-T)/2)+a.offsetTop;t.style.top=`${E}px`,t.style.maxHeight=`${T}px`}else t.style.top=`${a.offsetTop}px`,t.style.maxHeight=`${a.offsetHeight}px`;t.style.height="8192px",i&&(t.style.transition="none"),t.offsetHeight,i&&(t.style.transition="",t.style.opacity="1")}}}function U(){if(e.type==="card")return;const{value:a}=f;a&&(a.style.opacity="0")}function pe(a){const{value:t}=f;if(t)for(const i of a)t.style[i]=""}function G(){if(e.type==="card")return;const a=$();a?F(a):U()}function ve(a){var t;const i=(t=S.value)===null||t===void 0?void 0:t.$el;if(!i)return;const c=$();if(!c)return;const{scrollLeft:T,offsetWidth:M}=i,{offsetLeft:E,offsetWidth:K}=c;T>E?i.scrollTo({top:0,left:E,behavior:"smooth"}):E+K>T+M&&i.scrollTo({top:0,left:E+K-M,behavior:"smooth"})}const Y=L(null);let re=0,O=null;function Ee(a){const t=Y.value;if(t){re=a.getBoundingClientRect().height;const i=`${re}px`,c=()=>{t.style.height=i,t.style.maxHeight=i};O?(c(),O(),O=null):O=c}}function je(a){const t=Y.value;if(t){const i=a.getBoundingClientRect().height,c=()=>{document.body.offsetHeight,t.style.maxHeight=`${i}px`,t.style.height=`${Math.max(re,i)}px`};O?(O(),O=null,c()):O=c}}function Ie(){const a=Y.value;if(a){a.style.maxHeight="",a.style.height="";const{paneWrapperStyle:t}=e;if(typeof t=="string")a.style.cssText=t;else if(t){const{maxHeight:i,height:c}=t;i!==void 0&&(a.style.maxHeight=i),c!==void 0&&(a.style.height=c)}}}const he={value:[]},ge=L("next");function Me(a){const t=k.value;let i="next";for(const c of he.value){if(c===t)break;if(c===a){i="prev";break}}ge.value=i,Oe(a)}function Oe(a){const{onActiveNameChange:t,onUpdateValue:i,"onUpdate:value":c}=e;t&&Z(t,a),i&&Z(i,a),c&&Z(c,a),H.value=a}function He(a){const{onClose:t}=e;t&&Z(t,a)}function me(){const{value:a}=f;if(!a)return;const t="transition-disabled";a.classList.add(t),G(),a.classList.remove(t)}const D=L(null);function oe({transitionDisabled:a}){const t=m.value;if(!t)return;a&&t.classList.add("transition-disabled");const i=$();i&&D.value&&(D.value.style.width=`${i.offsetWidth}px`,D.value.style.height=`${i.offsetHeight}px`,D.value.style.transform=`translateX(${i.offsetLeft-t.offsetLeft-Ot(getComputedStyle(t).paddingLeft)}px)`,a&&D.value.offsetWidth),a&&t.classList.remove("transition-disabled")}le([k],()=>{e.type==="segment"&&ee(()=>{oe({transitionDisabled:!1})})}),Bt(()=>{e.type==="segment"&&oe({transitionDisabled:!0})});let xe=0;function Fe(a){var t;if(a.contentRect.width===0&&a.contentRect.height===0||xe===a.contentRect.width)return;xe=a.contentRect.width;const{type:i}=e;if((i==="line"||i==="bar")&&me(),i!=="segment"){const{placement:c}=e;ie((c==="top"||c==="bottom"?(t=S.value)===null||t===void 0?void 0:t.$el:y.value)||null)}}const De=be(Fe,64);le([()=>e.justifyContent,()=>e.size],()=>{ee(()=>{const{type:a}=e;(a==="line"||a==="bar")&&me()})});const q=L(!1);function Ne(a){var t;const{target:i,contentRect:{width:c}}=a,T=i.parentElement.offsetWidth;if(!q.value)T<c&&(q.value=!0);else{const{value:M}=C;if(!M)return;T-c>M.$el.offsetWidth&&(q.value=!1)}ie(((t=S.value)===null||t===void 0?void 0:t.$el)||null)}const Ve=be(Ne,64);function Xe(){const{onAdd:a}=e;a&&a(),ee(()=>{const t=$(),{value:i}=S;!t||!i||i.scrollTo({left:t.offsetLeft,top:0,behavior:"smooth"})})}function ie(a){if(!a)return;const{placement:t}=e;if(t==="top"||t==="bottom"){const{scrollLeft:i,scrollWidth:c,offsetWidth:T}=a;R.value=i<=0,P.value=i+T>=c}else{const{scrollTop:i,scrollHeight:c,offsetHeight:T}=a;R.value=i<=0,P.value=i+T>=c}}const Ue=be(a=>{ie(a.target)},64);Et(Be,{triggerRef:j(e,"trigger"),tabStyleRef:j(e,"tabStyle"),tabClassRef:j(e,"tabClass"),addTabStyleRef:j(e,"addTabStyle"),addTabClassRef:j(e,"addTabClass"),paneClassRef:j(e,"paneClass"),paneStyleRef:j(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:j(e,"type"),closableRef:j(e,"closable"),valueRef:k,tabChangeIdRef:h,onBeforeLeaveRef:j(e,"onBeforeLeave"),activateTab:Me,handleClose:He,handleAdd:Xe}),jt(()=>{G(),ve()}),It(()=>{const{value:a}=x;if(!a)return;const{value:t}=v,i=`${t}-tabs-nav-scroll-wrapper--shadow-start`,c=`${t}-tabs-nav-scroll-wrapper--shadow-end`;R.value?a.classList.remove(i):a.classList.add(i),P.value?a.classList.remove(c):a.classList.add(c)});const Ge={syncBarPosition:()=>{G()}},Ye=()=>{oe({transitionDisabled:!0})},ye=X(()=>{const{value:a}=W,{type:t}=e,i={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[t],c=`${a}${i}`,{self:{barColor:T,closeIconColor:M,closeIconColorHover:E,closeIconColorPressed:K,tabColor:qe,tabBorderColor:Ke,paneTextColor:Je,tabFontWeight:Qe,tabBorderRadius:Ze,tabFontWeightActive:et,colorSegment:tt,fontWeightStrong:at,tabColorSegment:nt,closeSize:rt,closeIconSize:ot,closeColorHover:it,closeColorPressed:st,closeBorderRadius:lt,[I("panePadding",a)]:J,[I("tabPadding",c)]:dt,[I("tabPaddingVertical",c)]:ct,[I("tabGap",c)]:bt,[I("tabGap",`${c}Vertical`)]:ft,[I("tabTextColor",t)]:ut,[I("tabTextColorActive",t)]:pt,[I("tabTextColorHover",t)]:vt,[I("tabTextColorDisabled",t)]:ht,[I("tabFontSize",a)]:gt},common:{cubicBezierEaseInOut:mt}}=g.value;return{"--n-bezier":mt,"--n-color-segment":tt,"--n-bar-color":T,"--n-tab-font-size":gt,"--n-tab-text-color":ut,"--n-tab-text-color-active":pt,"--n-tab-text-color-disabled":ht,"--n-tab-text-color-hover":vt,"--n-pane-text-color":Je,"--n-tab-border-color":Ke,"--n-tab-border-radius":Ze,"--n-close-size":rt,"--n-close-icon-size":ot,"--n-close-color-hover":it,"--n-close-color-pressed":st,"--n-close-border-radius":lt,"--n-close-icon-color":M,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":K,"--n-tab-color":qe,"--n-tab-font-weight":Qe,"--n-tab-font-weight-active":et,"--n-tab-padding":dt,"--n-tab-padding-vertical":ct,"--n-tab-gap":bt,"--n-tab-gap-vertical":ft,"--n-pane-padding-left":Q(J,"left"),"--n-pane-padding-right":Q(J,"right"),"--n-pane-padding-top":Q(J,"top"),"--n-pane-padding-bottom":Q(J,"bottom"),"--n-font-weight-strong":at,"--n-tab-color-segment":nt}}),N=p?Mt("tabs",X(()=>`${W.value[0]}${e.type[0]}`),ye,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:k,renderedNames:new Set,segmentCapsuleElRef:D,tabsPaneWrapperRef:Y,tabsElRef:m,barElRef:f,addTabInstRef:C,xScrollInstRef:S,scrollWrapperElRef:x,addTabFixed:q,tabWrapperStyle:u,handleNavResize:De,mergedSize:W,handleScroll:Ue,handleTabsResize:Ve,cssVars:p?void 0:ye,themeClass:N?.themeClass,animationDirection:ge,renderNameListRef:he,yScrollElRef:y,handleSegmentResize:Ye,onAnimationBeforeLeave:Ee,onAnimationEnter:je,onAnimationAfterEnter:Ie,onRender:N?.onRender},Ge)},render(){const{mergedClsPrefix:e,type:o,placement:s,addTabFixed:b,addable:r,mergedSize:w,renderNameListRef:v,onRender:p,paneWrapperClass:g,paneWrapperStyle:m,$slots:{default:f,prefix:x,suffix:C}}=this;p?.();const S=f?se(f()).filter(h=>h.type.__TAB_PANE__===!0):[],y=f?se(f()).filter(h=>h.type.__TAB__===!0):[],R=!y.length,P=o==="card",W=o==="segment",_=!P&&!W&&this.justifyContent;v.value=[];const H=()=>{const h=d("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},_?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),R?S.map((u,$)=>(v.value.push(u.props.name),fe(d(ae,Object.assign({},u.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0&&(!_||_==="center"||_==="start"||_==="end")}),u.children?{default:u.children.tab}:void 0)))):y.map((u,$)=>(v.value.push(u.props.name),fe($!==0&&!_?We(u):u))),!b&&r&&P?Pe(r,(R?S.length:y.length)!==0):null,_?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return d("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&r?d(de,{onResize:this.handleTabsResize},{default:()=>h}):h,P?d("div",{class:`${e}-tabs-pad`}):null,P?null:d("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},k=W?"top":s;return d("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${o}-type`,`${e}-tabs--${w}-size`,_&&`${e}-tabs--flex`,`${e}-tabs--${k}`],style:this.cssVars},d("div",{class:[`${e}-tabs-nav--${o}-type`,`${e}-tabs-nav--${k}`,`${e}-tabs-nav`]},Ce(x,h=>h&&d("div",{class:`${e}-tabs-nav__prefix`},h)),W?d(de,{onResize:this.handleSegmentResize},{default:()=>d("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},d("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},d("div",{class:`${e}-tabs-wrapper`},d("div",{class:`${e}-tabs-tab`}))),R?S.map((h,u)=>(v.value.push(h.props.name),d(ae,Object.assign({},h.props,{internalCreatedByPane:!0,internalLeftPadded:u!==0}),h.children?{default:h.children.tab}:void 0))):y.map((h,u)=>(v.value.push(h.props.name),u===0?h:We(h))))}):d(de,{onResize:this.handleNavResize},{default:()=>d("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(k)?d(ra,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):d("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},H()))}),b&&r&&P?Pe(r,!0):null,Ce(C,h=>h&&d("div",{class:`${e}-tabs-nav__suffix`},h))),R&&(this.animated&&(k==="top"||k==="bottom")?d("div",{ref:"tabsPaneWrapperRef",style:m,class:[`${e}-tabs-pane-wrapper`,g]},_e(S,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):_e(S,this.mergedValue,this.renderedNames)))}});function _e(e,o,s,b,r,w,v){const p=[];return e.forEach(g=>{const{name:m,displayDirective:f,"display-directive":x}=g.props,C=y=>f===y||x===y,S=o===m;if(g.key!==void 0&&(g.key=m),S||C("show")||C("show:lazy")&&s.has(m)){s.has(m)||s.add(m);const y=!C("if");p.push(y?Ht(g,[[Ft,S]]):g)}}),v?d(Dt,{name:`${v}-transition`,onBeforeLeave:b,onEnter:r,onAfterEnter:w},{default:()=>p}):p}function Pe(e,o){return d(ae,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:o,disabled:typeof e=="object"&&e.disabled})}function We(e){const o=Nt(e);return o.props?o.props.internalLeftPadded=!0:o.props={internalLeftPadded:!0},o}function fe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Ra={__name:"ContextMenu",props:{show:{type:Boolean,default:!1},currentPath:{type:String,default:""},x:{type:Number,default:0},y:{type:Number,default:0}},emits:["update:show"],setup(e,{emit:o}){const s=e,b=o,r=Ae(),w=X(()=>[{label:"关闭",key:"close",disabled:r.tabs.length<=1,icon:()=>d("i",{class:"i-mdi:close text-14"})},{label:"关闭其他",key:"close-other",disabled:r.tabs.length<=1,icon:()=>d("i",{class:"i-mdi:arrow-expand-horizontal text-14"})},{label:"关闭左侧",key:"close-left",disabled:r.tabs.length<=1||s.currentPath===r.tabs[0].path,icon:()=>d("i",{class:"i-mdi:arrow-expand-left text-14"})},{label:"关闭右侧",key:"close-right",disabled:r.tabs.length<=1||s.currentPath===r.tabs[r.tabs.length-1].path,icon:()=>d("i",{class:"i-mdi:arrow-expand-right text-14"})}]),v=Vt(),p=new Map([["reload",()=>{r.reloadTab(v.fullPath,v.meta?.keepAlive)}],["close",()=>{r.removeTab(s.currentPath)}],["close-other",()=>{r.removeOther(s.currentPath)}],["close-left",()=>{r.removeLeft(s.currentPath)}],["close-right",()=>{r.removeRight(s.currentPath)}]]);function g(){b("update:show",!1)}function m(f){const x=p.get(f);x&&x(),g()}return(f,x)=>{const C=aa;return V(),ue(C,{show:e.show,options:B(w),x:e.x,y:e.y,placement:"bottom-start",onClickoutside:g,onSelect:m},null,8,["show","options","x","y"])}}},Ta={class:"flex-tabs-main"},za={__name:"index",setup(e){const o=Ut(),s=Gt(),b=Ae(),r=Yt({show:!1,x:0,y:0,currentPath:""}),w=f=>{b.setActiveTab(f),o.push(f)};function v(){r.show=!0}function p(){r.show=!1}function g(f,x,C){Object.assign(r,{x:f,y:x,currentPath:C})}async function m(f,x){const{clientX:C,clientY:S}=f;p(),g(C,S,x.path),await ee(),v()}return(f,x)=>{const C=ae,S=Ca;return V(),Re("div",Ta,[qt(S,{value:B(b).activeTab,closable:B(b).tabs.length>1,style:ea(`--selected-bg: ${B(s).isDark?"#1b2429":"#eaf0f1"}`),type:"card",onClose:x[0]||(x[0]=y=>B(b).removeTab(y))},{default:Te(()=>[(V(!0),Re(ke,null,Kt(B(b).tabs,y=>(V(),ue(C,{key:y.path,name:y.path,onClick:R=>w(y.path),onContextmenu:Jt(R=>m(R,y),["prevent"])},{default:Te(()=>[Qt(Zt(y.title),1)]),_:2},1032,["name","onClick","onContextmenu"]))),128))]),_:1},8,["value","closable","style"]),B(r).show?(V(),ue(Ra,{key:0,show:B(r).show,"onUpdate:show":x[1]||(x[1]=y=>B(r).show=y),"current-path":B(r).currentPath,x:B(r).x,y:B(r).y},null,8,["show","current-path","x","y"])):ta("",!0)])}}},Pa=Xt(za,[["__scopeId","data-v-825a5b0f"]]);export{Pa as A};
