"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7581],{39265:function(I,p,n){n.d(p,{Z:function(){return e}});var s=n(50959),C=n(82187),m=n.n(C),h=n(85930),A=n(21194),u=n(63065),T=n(95213),O=n(61123),y=n(2253),E=n(5793);const x=r=>{const{componentCls:c,colorText:f,fontSize:i,lineHeight:l,fontFamily:o}=r;return{[c]:{color:f,fontSize:i,lineHeight:l,fontFamily:o}}},P=()=>({});var j=(0,E.I$)("App",x,P);const t=()=>s.useContext(y.Z),a=r=>{const{prefixCls:c,children:f,className:i,rootClassName:l,message:o,notification:v,style:g,component:d="div"}=r,{getPrefixCls:B}=(0,s.useContext)(A.E_),D=B("app",c),[K,U,L]=j(D),b=m()(U,D,i,l,L),M=(0,s.useContext)(y.J),S=s.useMemo(()=>({message:Object.assign(Object.assign({},M.message),o),notification:Object.assign(Object.assign({},M.notification),v)}),[o,v,M.message,M.notification]),[R,N]=(0,u.Z)(S.message),[H,Z]=(0,O.Z)(S.notification),[W,V]=(0,T.Z)(),$=s.useMemo(()=>({message:R,notification:H,modal:W}),[R,H,W]);(0,h.ln)("App")(!(L&&d===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const z=d===!1?s.Fragment:d,F={className:b,style:g};return K(s.createElement(y.Z.Provider,{value:$},s.createElement(y.J.Provider,{value:S},s.createElement(z,Object.assign({},d===!1?void 0:F),V,N,Z,f))))};a.useApp=t;var e=a},64858:function(I,p,n){n.d(p,{v:function(){return C}});var s=n(7687),C=function(){var h=(0,s.useSiteData)(),A=h.themeConfig,u=A;return u}},39263:function(I,p,n){n.r(p);var s=n(49225),C=n(39265),m=n(7687),h=n(50959),A=n(64858),u=n(11527);function T(t,a){return P(t)||x(t,a)||y(t,a)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(t,a){if(t){if(typeof t=="string")return E(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return E(t,a)}}function E(t,a){(a==null||a>t.length)&&(a=t.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=t[e];return r}function x(t,a){var e=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r,c,f,i,l=[],o=!0,v=!1;try{if(f=(e=e.call(t)).next,a===0){if(Object(e)!==e)return;o=!1}else for(;!(o=(r=f.call(e)).done)&&(l.push(r.value),l.length!==a);o=!0);}catch(g){v=!0,c=g}finally{try{if(!o&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(v)throw c}}return l}}function P(t){if(Array.isArray(t))return t}var j=function(){var a=(0,m.useLocation)(),e=a.pathname,r=(0,m.useOutlet)(),c=(0,A.v)(),f=c.ssr,i=h.useState(function(){return(0,s.Df)()}),l=T(i,1),o=l[0];(0,m.useServerInsertedHTML)(function(){var d=(0,s.EN)(o,{plain:!0,types:"style"});return(0,u.jsx)("style",{dangerouslySetInnerHTML:{__html:d},"data-type":"antd-cssinjs"})}),(0,m.useServerInsertedHTML)(function(){var d=(0,s.EN)(o,{plain:!0,types:["cssVar","token"]});return(0,u.jsx)("style",{dangerouslySetInnerHTML:{__html:d},"data-rc-order":"prepend","data-rc-priority":"-9999","data-type":"antd-css-var"})});var v=e.startsWith("/~demos"),g=r;return v||(g=(0,u.jsx)(C.Z,{children:r})),f&&(n.g.styleCache=o),(0,u.jsx)(s.V9,{cache:o,linters:[s.nc,s.Ke,s.rA],children:g})};p.default=j}}]);
