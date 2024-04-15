!(function(){"use strict";var at=Object.defineProperty,it=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var xe=(p,s,o)=>s in p?at(p,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[s]=o,ne=(p,s)=>{for(var o in s||(s={}))we.call(s,o)&&xe(p,o,s[o]);if(G)for(var o of G(s))Pe.call(s,o)&&xe(p,o,s[o]);return p},Ce=(p,s)=>it(p,st(s));var Se=(p,s)=>{var o={};for(var d in p)we.call(p,d)&&s.indexOf(d)<0&&(o[d]=p[d]);if(p!=null&&G)for(var d of G(p))s.indexOf(d)<0&&Pe.call(p,d)&&(o[d]=p[d]);return o};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2433],{79204:function(p,s,o){o.r(s),o.d(s,{default:function(){return qe}});var d=o(6989),x=o(25940),P=o(48385),m=o(50959),k=o(33918),A=o(13795),L="[object Number]";function T(e){return typeof e=="number"||(0,A.Z)(e)&&(0,k.Z)(e)==L}var Z=T,D=o(24819),c=o(42804),O=o(1226),b=o(24110),v,N,I,h,z="hover-card",F=(0,O.kc)(function(e,n){var t=e.css,r=e.responsive,a=e.token,l=e.isDarkMode,f=n.size,y=n.borderRadius;return{container:t(v||(v=(0,c.Z)([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),z),content:t(N||(N=(0,c.Z)([`
      z-index: 2;

      flex-grow: 1;

      height: 100%;
      margin: 1px;

      background: `,`;
      border-radius: `,`px;
    `])),a.colorBgContainer,y-1),grid:t(I||(I=(0,c.Z)([`
      display: grid;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),r.mobile),itemContainer:t(h||(h=(0,c.Z)([`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;

      background: `,`;
      border-radius: `,`px;

      &::before,
      &::after {
        content: '';

        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;

        width: 100%;
        height: 100%;

        opacity: 0;
        border-radius: inherit;

        transition: opacity 500ms;
      }

      &::before {
        pointer-events: none;
        user-select: none;
        z-index: 3;
        background: radial-gradient(
          `,`px circle at var(--mouse-x) var(--mouse-y),
          `,`,
          transparent 40%
        );
      }

      &::after {
        z-index: 1;
        background: radial-gradient(
          `,`px circle at var(--mouse-x) var(--mouse-y),
          `,`,
          transparent 40%
        );
      }

      :hover::before {
        opacity: 1;
      }
    `])),(0,b.m4)(a.colorBorderSecondary,.75),y,f,(0,b.m4)(a.colorTextBase,l?.06:.02),f*.75,(0,b.m4)(a.colorTextBase,l?.4:.2))}}),i=o(11527),Y=["children","className","style","borderRadius","size"];function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?J(Object(t),!0).forEach(function(r){(0,x.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ke=(0,m.memo)(function(e){var n=e.children,t=e.className,r=e.style,a=e.borderRadius,l=e.size,f=(0,P.Z)(e,Y),y=F({borderRadius:a,size:l}),u=y.styles,g=y.cx;return(0,i.jsx)(D.D,X(X({className:g(u.itemContainer,t),style:X({borderRadius:a},r)},f),{},{children:(0,i.jsx)(D.D,{className:u.content,children:n})}))}),_e=ke,Ne=["items","renderItem","className","columns","gap","style","size","borderRadius","spotlight"];function re(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?re(Object(t),!0).forEach(function(r){(0,x.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ee(e,n){var t=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=De(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(g){throw g},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,f=!1,y;return{s:function(){t=t.call(e)},n:function(){var g=t.next();return l=g.done,g},e:function(g){f=!0,y=g},f:function(){try{!l&&t.return!=null&&t.return()}finally{if(f)throw y}}}}function De(e,n){if(e){if(typeof e=="string")return oe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return oe(e,n)}}function oe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var Te=(0,m.memo)(function(e){var n=e.items,t=e.renderItem,r=e.className,a=e.columns,l=a===void 0?3:a,f=e.gap,y=f===void 0?12:f,u=e.style,g=e.size,w=g===void 0?800:g,E=e.borderRadius,C=E===void 0?12:E,_=e.spotlight,S=_===void 0?!0:_,j=(0,P.Z)(e,Ne),B=F({borderRadius:C,size:w}),R=B.styles,et=B.cx,K=(0,m.useRef)(null),tt=(0,m.useMemo)(function(){return Z(l)?Array.from({length:l}).fill("1fr").join(" "):l},[l]);return(0,m.useEffect)(function(){if(K.current&&S){var $=function(he){var H=Ee(document.querySelectorAll(".".concat(z))),je;try{for(H.s();!(je=H.n()).done;){var te=je.value,Oe=te.getBoundingClientRect(),nt=he.clientX-Oe.left,rt=he.clientY-Oe.top;te.style.setProperty("--mouse-x","".concat(nt,"px")),te.style.setProperty("--mouse-y","".concat(rt,"px"))}}catch(ot){H.e(ot)}finally{H.f()}};return K.current.addEventListener("mousemove",$),function(){var M;(M=K.current)===null||M===void 0||M.removeEventListener("mousemove",$)}}},[]),(0,i.jsx)("div",U(U({className:et(R.container,R.grid,r),ref:K,style:U({gap:y,gridTemplateColumns:tt},u)},j),{},{children:n.map(function($,M){return(0,i.jsx)(_e,{borderRadius:C,className:z,size:w,children:(0,i.jsx)(t,U({},$))},M)})}))}),Ze=Te,W=o(81057),Ie=o(29272),ae=(0,m.createContext)(null),ct=null,ie=function(n){var t=n.pkg,r=n.version,a=n.path;return genCdnUrl({path:a,pkg:t,proxy:"aliyun",version:r})},lt=function(){var n=useContext(ae);return n?(n==null?void 0:n.proxy)!=="custom"?function(t){var r=t.pkg,a=t.version,l=t.path;return genCdnUrl({path:l,pkg:r,proxy:n.proxy,version:a})}:(n==null?void 0:n.customCdnFn)||ie:ie},ut=null;function se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?se(Object(t),!0).forEach(function(r){(0,x.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Re=function(n){return(0,m.forwardRef)(function(t,r){return(0,m.createElement)(n,Q(Q({},t),{},{ref:r}))})},Me=(0,m.forwardRef)(function(e,n){var t=(0,m.useContext)(ae),r=(0,m.useMemo)(function(){return Re((t==null?void 0:t.imgAs)||"img")},[t]);return(0,i.jsx)(r,Q({ref:n},e))}),Ae=Me,ce,le,ue,de,pe,me,ge,fe,ye,Le=(0,O.kc)(function(e,n){var t=e.token,r=e.prefixCls,a=e.css,l=e.cx,f=n.rowNum,y=n.hasLink,u="".concat(r,"-features"),g="".concat(u,"-cover"),w="".concat(u,"-description"),E="".concat(u,"-title"),C="".concat(u,"-img"),_=20,S=function(R){return a(ce||(ce=(0,c.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),R,R,R*(22/24))},j=a(le||(le=(0,c.Z)([`
      transition: all `," ",`;
    `])),t.motionDurationSlow,t.motionEaseInOutCirc);return{cell:a(ue||(ue=(0,c.Z)([`
        overflow: hidden;
      `]))),container:a(de||(de=(0,c.Z)([`
        `,`;
        position: relative;
        z-index: 1;

        padding: 24px;
        height: 228px;
        max-height: 228px;

        overflow: hidden;

        p {
          font-size: 16px;
          line-height: 1.2;
          text-align: start;
          word-break: break-word;
        }

        &:hover {
          .`,` {
            width: 100%;
            height: `,`px;
            padding: 0;
            background: `,`;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),j,g,_*f,t.colorFillContent,C,S(100),w,E,y?14:20),desc:l(w,j,a(pe||(pe=(0,c.Z)([`
          pointer-events: none;
          color: `,`;

          quotient {
            position: relative;

            display: block;

            margin-block: 12px;
            margin-inline: 0;
            padding-inline-start: 12px;

            color: `,`;
          }
        `])),t.colorTextSecondary,t.colorTextDescription)),img:l(C,j,a(me||(me=(0,c.Z)([`
          `,`;
          color: `,`;
        `])),S(20),t.colorText)),imgContainer:l(g,j,a(ge||(ge=(0,c.Z)([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),S(24),t.borderRadius)),link:a(fe||(fe=(0,c.Z)([`
        `,`;
        margin-block-start: 24px;
      `])),j),title:l(E,j,a(ye||(ye=(0,c.Z)([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),t.lineHeightHeading3,t.colorText))}}),ze=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"];function be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?be(Object(t),!0).forEach(function(r){(0,x.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Be=(0,m.memo)(function(e){var n=e.image,t=e.className,r=e.title,a=e.style;return n.startsWith("http")?(0,i.jsx)(Ae,{alt:r,className:t,src:n,style:a}):(0,i.jsx)(W.Z,{className:t,style:a,children:n})}),Fe=(0,m.memo)(function(e){var n=e.style,t=e.className,r=e.row,a=e.column,l=e.description,f=e.image,y=e.title,u=e.link,g=e.icon,w=e.imageStyle,E=e.openExternal,C=(0,P.Z)(e,ze),_=r||7,S=Le({hasLink:!!u,rowNum:_}),j=S.styles,B=S.cx;return(0,i.jsx)("div",V(V({className:B(j.container,t),style:V({gridColumn:"span ".concat(a||1),gridRow:"span ".concat(_)},n)},C),{},{children:(0,i.jsxs)("div",{className:j.cell,children:[f||g&&(0,i.jsxs)(W.Z,{className:j.imgContainer,style:w,children:[g&&(0,i.jsx)(Ie.Z,{className:j.img,icon:g}),f&&(0,i.jsx)(Be,{className:j.img,image:f,title:y})]}),y&&(0,i.jsx)(D.D,{align:"center",as:"h3",className:j.title,gap:8,horizontal:!0,children:y}),l&&(0,i.jsx)("p",{className:j.desc,dangerouslySetInnerHTML:{__html:l}}),u&&(0,i.jsx)("div",{className:j.link,children:(0,i.jsx)("a",{href:u,rel:"noreferrer",target:E?"_blank":void 0,children:"Read More"})})]})}))}),Ue=Fe,We=["items","className","itemClassName","itemStyle","maxWidth","style"];function ve(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ve(Object(t),!0).forEach(function(r){(0,x.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ve(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ke=(0,m.memo)(function(e){var n=e.items,t=e.className,r=e.itemClassName,a=e.itemStyle,l=e.maxWidth,f=l===void 0?960:l,y=e.style,u=(0,P.Z)(e,We);if(n!=null&&n.length)return(0,i.jsx)(Ze,q({className:t,items:n,renderItem:function(w){return(0,i.jsx)(Ue,q({className:r,style:a},w),w.title)},style:q({maxWidth:f},y)},u))}),$e=Ke;var He={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ge=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ee=(e,n)=>{const t=(0,m.forwardRef)((E,w)=>{var C=E,{color:r="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:f,className:y="",children:u}=C,g=Se(C,["color","size","strokeWidth","absoluteStrokeWidth","className","children"]);return(0,m.createElement)("svg",ne(Ce(ne({ref:w},He),{width:a,height:a,stroke:r,strokeWidth:f?Number(l)*24/Number(a):l,className:["lucide",`lucide-${Ge(e)}`,y].join(" ")}),g),[...n.map(([_,S])=>(0,m.createElement)(_,S)),...Array.isArray(u)?u:[u]])});return t.displayName=`${e}`,t};const Ye=ee("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);const Je=ee("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);const Xe=ee("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]);var Qe=[{description:"Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.",icon:Ye,title:"Themeable"},{description:"voids unnecessary styles props at runtime, making it more performant than other UI libraries.",icon:Je,title:"Fast"},{description:"Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.",icon:Xe,title:"Light & Dark UI"}],Ve=`import { ThemeProvider, Button } from '@yuntijs/ui'

export default () => (
  <ThemeProvider>
    <Button>Hello YuntiJS</Button>
  </ThemeProvider>
)`,qe=function(){var e=(0,O.Fg)();return(0,i.jsxs)(W.Z,{gap:16,children:[(0,i.jsxs)(W.Z,{children:[(0,i.jsx)("h2",{style:{fontSize:20},children:"\u2601\uFE0F Start building your CloudNative web app now"}),(0,i.jsxs)("div",{style:{color:e.colorTextDescription,textAlign:"center"},children:["The YuntiUI components are inspired by"," ",(0,i.jsx)("a",{href:"(https://ui.lobehub.com",rel:"noreferrer",target:"_blank",children:"LobeUI"})," ","and developed based on"," ",(0,i.jsx)("a",{href:"https://ant.design/components/overview",rel:"noreferrer",target:"_blank",children:"Antd components"}),", fully compatible with Antd components, ",(0,i.jsx)("br",{}),"and it is recommended to use"," ",(0,i.jsx)("a",{href:"https://ant-design.github.io/antd-style",rel:"noreferrer",target:"_blank",children:"antd-style"})," ","as the default css-in-js styling solution."]})]}),(0,i.jsx)(d.ZP,{language:"tsx",style:{width:"100%"},type:"ghost",children:Ve}),(0,i.jsx)($e,{items:Qe})]})}},81057:function(p,s,o){var d=o(25940),x=o(48385),P=o(80632),m=o(79086),k=o(50959),A=o(11527),L=["children","className","prefixCls"];function T(c,O){var b=Object.keys(c);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(c);O&&(v=v.filter(function(N){return Object.getOwnPropertyDescriptor(c,N).enumerable})),b.push.apply(b,v)}return b}function Z(c){for(var O=1;O<arguments.length;O++){var b=arguments[O]!=null?arguments[O]:{};O%2?T(Object(b),!0).forEach(function(v){(0,d.Z)(c,v,b[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):T(Object(b)).forEach(function(v){Object.defineProperty(c,v,Object.getOwnPropertyDescriptor(b,v))})}return c}var D=(0,k.forwardRef)(function(c,O){var b=c.children,v=c.className,N=c.prefixCls,I=(0,x.Z)(c,L);return(0,A.jsx)(P.Z,Z(Z({ref:O,internalClassName:"".concat((0,m.Gn)(N),"-center"),className:v},I),{},{align:"center",justify:"center",children:b}))});s.Z=D},66711:function(p,s,o){var d=o(99615),x=d.Z.Symbol;s.Z=x},33918:function(p,s,o){o.d(s,{Z:function(){return I}});var d=o(66711),x=Object.prototype,P=x.hasOwnProperty,m=x.toString,k=d.Z?d.Z.toStringTag:void 0;function A(h){var z=P.call(h,k),F=h[k];try{h[k]=void 0;var i=!0}catch(J){}var Y=m.call(h);return i&&(z?h[k]=F:delete h[k]),Y}var L=A,T=Object.prototype,Z=T.toString;function D(h){return Z.call(h)}var c=D,O="[object Null]",b="[object Undefined]",v=d.Z?d.Z.toStringTag:void 0;function N(h){return h==null?h===void 0?b:O:v&&v in Object(h)?L(h):c(h)}var I=N},97889:function(p,s){var o=typeof global=="object"&&global&&global.Object===Object&&global;s.Z=o},99615:function(p,s,o){var d=o(97889),x=typeof self=="object"&&self&&self.Object===Object&&self,P=d.Z||x||Function("return this")();s.Z=P},13795:function(p,s){function o(d){return d!=null&&typeof d=="object"}s.Z=o}}]);
}());