"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6205],{5407:function(F,m,t){t.d(m,{Z:function(){return Z}});var e=t(52136),d=t(82187),p=t.n(d),C=t(58192),h=t(72306),j=t(52418),y=t(1e3),A=t(71878),o=t(92518),f=t(71288);const S=l=>{const{componentCls:r,colorText:c,fontSize:u,lineHeight:v,fontFamily:i}=l;return{[r]:{color:c,fontSize:u,lineHeight:v,fontFamily:i,[`&${r}-rtl`]:{direction:"rtl"}}}},M=()=>({});var D=(0,f.I$)("App",S,M),O=l=>{const{prefixCls:r,children:c,className:u,rootClassName:v,message:i,notification:P,style:J,component:g="div"}=l,{direction:$,getPrefixCls:b}=(0,e.useContext)(h.E_),T=b("app",r),[B,G,L]=D(T),I=p()(G,T,u,v,L,{[`${T}-rtl`]:$==="rtl"}),x=(0,e.useContext)(o.J),z=e.useMemo(()=>({message:Object.assign(Object.assign({},x.message),i),notification:Object.assign(Object.assign({},x.notification),P)}),[i,P,x.message,x.notification]),[E,R]=(0,j.Z)(z.message),[H,U]=(0,A.Z)(z.notification),[V,W]=(0,y.Z)(),K=e.useMemo(()=>({message:E,notification:H,modal:V}),[E,H,V]);(0,C.ln)("App")(!(L&&g===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const Q=g===!1?e.Fragment:g,X={className:I,style:J};return B(e.createElement(o.Z.Provider,{value:K},e.createElement(o.J.Provider,{value:z},e.createElement(Q,Object.assign({},g===!1?void 0:X),W,R,U,c))))},n=()=>e.useContext(o.Z);const a=O;a.useApp=n;var Z=a},14044:function(F,m,t){t.r(m),t.d(m,{default:function(){return N}});var e=t(35211),d=t(52136),p=t(30145),C=t(22303),h=t(59542),j=t(73718),y=t(5983),A=t(49239),o=t(75555),f;function S(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}var M=(0,o.vJ)(f||(f=S([`
  #root {
    min-height: 100vh;
    background: `,`;
  }

  #nprogress {
    .bar {
      background: `,`;
    }

    .peg {
      display: none !important;
    }

    .spinner {
      display: none;
    }
  }
`])),function(n){var a=n.theme;return a.colorBgContainerSecondary},function(n){var a=n.theme;return a.colorText}),D=M,s=t(69979),O=(0,d.memo)(function(n){var a=n.children,Z=(0,e.useSiteData)(),l=(0,e.useSidebarData)(),r=(0,e.useRouteMeta)(),c=(0,e.useTabMeta)(),u=(0,e.useNavData)(),v=(0,e.useLocation)(),i=(0,e.useLocale)();return(0,s.jsxs)(p.zt,{createStore:function(){return(0,p.MT)({locale:i,location:v,navData:u,routeMeta:r,sidebar:l,siteData:Z,tabMeta:c})},children:[(0,s.jsx)(h.Z,{}),(0,s.jsx)(j.Z,{}),(0,s.jsx)(C.Z,{}),(0,s.jsx)(y.Z,{}),(0,s.jsxs)(A.Z,{children:[(0,s.jsx)(D,{}),a]})]})}),N=(0,d.memo)(function(){var n=(0,e.useOutlet)();return(0,s.jsx)(O,{children:n})})}}]);
