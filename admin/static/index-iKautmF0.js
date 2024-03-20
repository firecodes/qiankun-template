import{c as x,a as b,b as F,d as C,e as P,u as H,f as D,g as N,p as O,t as M,h as z,i as q,j as k,k as K,l as E,o as G,m as J,n as U,q as Q,s as X,v as Y,w as Z,x as W,y as ee,z as v,A as B,B as $,C as i,D as L,E as T,F as R,G as I,H as re,I as h,J as p,K as w,L as A,M as te,N as oe,O as ne,r as se}from"./index-B74JimqN.js";import{A as ae}from"./index-lk6eXE5f.js";import{_ as ie,a as le,b as ce,c as ue,d as de}from"./SideMenu-CME_InYD.js";import{_ as me}from"./AppCard-dtGX4qK2.js";import"./Avatar-DDVFINd_.js";const pe=x("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[b("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),b("a",`
 color: inherit;
 text-decoration: inherit;
 `),x("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[x("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),b("&:not(:last-child)",[F("clickable",[C("link",`
 cursor: pointer;
 `,[b("&:hover",`
 background-color: var(--n-item-color-hover);
 `),b("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),C("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[b("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[x("icon",`
 color: var(--n-item-text-color-hover);
 `)]),b("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[x("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),C("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),b("&:last-child",[C("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[x("icon",`
 color: var(--n-item-text-color-active);
 `)]),C("separator",`
 display: none;
 `)])])]),j=K("n-breadcrumb"),fe=Object.assign(Object.assign({},D.props),{separator:{type:String,default:"/"}}),he=P({name:"Breadcrumb",props:fe,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=H(e),c=D("Breadcrumb","-breadcrumb",pe,N,e,o);O(j,{separatorRef:M(e,"separator"),mergedClsPrefixRef:o});const l=z(()=>{const{common:{cubicBezierEaseInOut:d},self:{separatorColor:m,itemTextColor:n,itemTextColorHover:r,itemTextColorPressed:s,itemTextColorActive:f,fontSize:u,fontWeightActive:g,itemBorderRadius:_,itemColorHover:y,itemColorPressed:S,itemLineHeight:V}}=c.value;return{"--n-font-size":u,"--n-bezier":d,"--n-item-text-color":n,"--n-item-text-color-hover":r,"--n-item-text-color-pressed":s,"--n-item-text-color-active":f,"--n-separator-color":m,"--n-item-color-hover":y,"--n-item-color-pressed":S,"--n-item-border-radius":_,"--n-font-weight-active":g,"--n-item-line-height":V}}),a=t?q("breadcrumb",void 0,l,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:l,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),k("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},k("ul",null,this.$slots))}}),_e=(e=U?window:null)=>{const o=()=>{const{hash:l,host:a,hostname:d,href:m,origin:n,pathname:r,port:s,protocol:f,search:u}=e?.location||{};return{hash:l,host:a,hostname:d,href:m,origin:n,pathname:r,port:s,protocol:f,search:u}},t=()=>{c.value=o()},c=E(o());return G(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),J(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),c},be={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},ve=P({name:"BreadcrumbItem",props:be,setup(e,{slots:o}){const t=Q(j,null);if(!t)return()=>null;const{separatorRef:c,mergedClsPrefixRef:l}=t,a=_e(),d=z(()=>e.href?"a":"span"),m=z(()=>a.value.href===e.href?"location":null);return()=>{const{value:n}=l;return k("li",{class:[`${n}-breadcrumb-item`,e.clickable&&`${n}-breadcrumb-item--clickable`]},k(d.value,{class:`${n}-breadcrumb-item__link`,"aria-current":m.value,href:e.href,onClick:e.onClick},o),k("span",{class:`${n}-breadcrumb-item__separator`,"aria-hidden":"true"},X(o.separator,()=>{var r;return[(r=e.separator)!==null&&r!==void 0?r:c.value]})))}}}),ge={class:"flex items-center"},xe={__name:"BreadCrumb",setup(e){const o=Y(),t=Z(),c=W(),l=E([]);ee(()=>t.name,r=>{l.value=a(c.permissions,r)},{immediate:!0});function a(r,s,f=[]){for(const u of r){if(u.code===s)return[...f,u];if(u.children?.length){const g=a(u.children,s,[...f,u]);if(g)return g}}return null}function d(r){r.path&&r.code!==t.name&&o.push(r.path)}function m(r=[]){return r.filter(s=>s.show).map(s=>({label:s.name,key:s.code,icon:()=>k("i",{class:s.icon})}))}function n(r){r&&r!==t.name&&o.push({name:r})}return(r,s)=>{const f=ve,u=ie,g=he;return v(),B(g,null,{default:$(()=>[i(l)?.length?(v(!0),R(I,{key:1},re(i(l),(_,y)=>(v(),B(f,{key:_.code,clickable:!!_.path,onClick:S=>d(_)},{default:$(()=>[h(u,{options:y<i(l).length-1?m(_.children):[],onSelect:n},{default:$(()=>[p("div",ge,[p("i",{class:w([_.icon,"mr-8"])},null,2),L(" "+T(_.name),1)])]),_:2},1032,["options"])]),_:2},1032,["clickable","onClick"]))),128)):(v(),B(f,{key:0,clickable:!1},{default:$(()=>[L(T(i(t).meta.title),1)]),_:1}))]),_:1})}}},ke={__name:"index",setup(e){return(o,t)=>(v(),R(I,null,[h(i(le),{"border-b":"1px solid light_border dark:dark_border"}),h(i(ce),{class:"cus-scroll-y mt-4 h-0 flex-1"})],64))}},Ce={class:"ml-auto flex flex-shrink-0 items-center px-12 text-18"},$e={__name:"index",setup(e){const o=A(),t=te(),c=()=>{o.toggleDark(),ne(t)()},{isFullscreen:l,toggle:a}=oe();function d(m){window.open(m)}return(m,n)=>{const r=me;return v(),B(r,{class:"flex items-center px-12","border-b":"1px solid light_border dark:dark_border"},{default:$(()=>[h(i(ue)),h(i(xe)),p("div",Ce,[p("i",{class:w(["mr-16 cursor-pointer",i(t)?"i-fe:moon":"i-fe:sun"]),onClick:c},null,2),p("i",{class:w(["mr-16 cursor-pointer",i(l)?"i-fe:minimize":"i-fe:maximize"]),onClick:n[0]||(n[0]=(...s)=>i(a)&&i(a)(...s))},null,2),p("i",{class:"i-fe:github mr-16 cursor-pointer",onClick:n[1]||(n[1]=s=>d("https://github.com/firecodes/qiankun-template"))}),p("i",{class:"i-fe:github mr-16 cursor-pointer",onClick:n[2]||(n[2]=s=>d("https://firecodes.github.io/qiankun-template/"))}),h(i(de))])]),_:1})}}},Be={class:"wh-full flex"},we={class:"w-0 flex-col flex-1"},ye={class:"p-12","border-b":"1px solid light_border dark:dark_border"},Pe={__name:"index",setup(e){const o=A();return(t,c)=>(v(),R("div",Be,[p("aside",{class:w(["flex-col flex-shrink-0 transition-width-300",i(o).collapsed?"w-64":"w-220"]),"border-r":"1px solid light_border dark:dark_border"},[h(ke)],2),p("article",we,[h($e,{class:"h-60 flex-shrink-0"}),p("div",ye,[h(i(ae),{class:"flex-shrink-0"})]),se(t.$slots,"default")])]))}};export{Pe as default};
