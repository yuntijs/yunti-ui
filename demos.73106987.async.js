!(function(){"use strict";var it=Object.defineProperty,at=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var Ne=(f,c,o)=>c in f?it(f,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):f[c]=o,me=(f,c)=>{for(var o in c||(c={}))Te.call(c,o)&&Ne(f,o,c[o]);if(te)for(var o of te(c))ke.call(c,o)&&Ne(f,o,c[o]);return f},Me=(f,c)=>at(f,st(c));var Ze=(f,c)=>{var o={};for(var d in f)Te.call(f,d)&&c.indexOf(d)<0&&(o[d]=f[d]);if(f!=null&&te)for(var d of te(f))c.indexOf(d)<0&&ke.call(f,d)&&(o[d]=f[d]);return o};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2433],{79204:function(f,c,o){o.r(c),o.d(c,{default:function(){return qe}});var d=o(6989),h=o(25940),P=o(48385),l=o(50959),D=o(33918),S=o(13795),N="[object Number]";function g(e){return typeof e=="number"||(0,S.Z)(e)&&(0,D.Z)(e)==N}var C=g,T=o(24819),a=o(42804),b=o(1226),p=o(24110),i,O,j,m,I="hover-card",A=(0,b.kc)(function(e,n){var t=e.css,r=e.responsive,s=e.token,v=e.isDarkMode,_=n.size,w=n.borderRadius;return{container:t(i||(i=(0,a.Z)([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),I),content:t(O||(O=(0,a.Z)([`
      z-index: 2;

      flex-grow: 1;

      height: 100%;
      margin: 1px;

      background: `,`;
      border-radius: `,`px;
    `])),s.colorBgContainer,w-1),grid:t(j||(j=(0,a.Z)([`
      display: grid;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),r.mobile),itemContainer:t(m||(m=(0,a.Z)([`
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
    `])),(0,p.m4)(s.colorBorderSecondary,.75),w,_,(0,p.m4)(s.colorTextBase,v?.06:.02),_*.75,(0,p.m4)(s.colorTextBase,v?.4:.2))}}),u=o(11527),U=["children","className","style","borderRadius","size"];function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?F(Object(t),!0).forEach(function(r){(0,h.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ne=(0,l.memo)(function(e){var n=e.children,t=e.className,r=e.style,s=e.borderRadius,v=e.size,_=(0,P.Z)(e,U),w=A({borderRadius:s,size:v}),y=w.styles,x=w.cx;return(0,u.jsx)(T.D,$($({className:x(y.itemContainer,t),style:$({borderRadius:s},r)},_),{},{children:(0,u.jsx)(T.D,{className:y.content,children:n})}))}),H=ne,re=["items","renderItem","className","columns","gap","style","size","borderRadius","spotlight"];function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?G(Object(t),!0).forEach(function(r){(0,h.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function V(e,n){var t=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=oe(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var r=0,s=function(){};return{s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(x){throw x},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var v=!0,_=!1,w;return{s:function(){t=t.call(e)},n:function(){var x=t.next();return v=x.done,x},e:function(x){_=!0,w=x},f:function(){try{!v&&t.return!=null&&t.return()}finally{if(_)throw w}}}}function oe(e,n){if(e){if(typeof e=="string")return J(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(e,n)}}function J(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var ie=(0,l.memo)(function(e){var n=e.items,t=e.renderItem,r=e.className,s=e.columns,v=s===void 0?3:s,_=e.gap,w=_===void 0?12:_,y=e.style,x=e.size,k=x===void 0?800:x,B=e.borderRadius,M=B===void 0?12:B,R=e.spotlight,Z=R===void 0?!0:R,E=(0,P.Z)(e,re),Y=A({borderRadius:M,size:k}),z=Y.styles,et=Y.cx,Q=(0,l.useRef)(null),tt=(0,l.useMemo)(function(){return C(v)?Array.from({length:v}).fill("1fr").join(" "):v},[v]);return(0,l.useEffect)(function(){if(Q.current&&Z){var q=function(Ee){var ee=V(document.querySelectorAll(".".concat(I))),De;try{for(ee.s();!(De=ee.n()).done;){var pe=De.value,Se=pe.getBoundingClientRect(),nt=Ee.clientX-Se.left,rt=Ee.clientY-Se.top;pe.style.setProperty("--mouse-x","".concat(nt,"px")),pe.style.setProperty("--mouse-y","".concat(rt,"px"))}}catch(ot){ee.e(ot)}finally{ee.f()}};return Q.current.addEventListener("mousemove",q),function(){var K;(K=Q.current)===null||K===void 0||K.removeEventListener("mousemove",q)}}},[]),(0,u.jsx)("div",W(W({className:et(z.container,z.grid,r),ref:Q,style:W({gap:w,gridTemplateColumns:tt},y)},E),{},{children:n.map(function(q,K){return(0,u.jsx)(H,{borderRadius:M,className:I,size:k,children:(0,u.jsx)(t,W({},q))},K)})}))}),ae=ie,L=o(81057),se=o(29272),X=(0,l.createContext)(null),ct=null,fe=function(n){var t=n.pkg,r=n.version,s=n.path;return genCdnUrl({path:s,pkg:t,proxy:"aliyun",version:r})},lt=function(){var n=useContext(X);return n?(n==null?void 0:n.proxy)!=="custom"?function(t){var r=t.pkg,s=t.version,v=t.path;return genCdnUrl({path:v,pkg:r,proxy:n.proxy,version:s})}:(n==null?void 0:n.customCdnFn)||fe:fe},ut=null;function ge(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function ce(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ge(Object(t),!0).forEach(function(r){(0,h.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ge(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ie=function(n){return(0,l.forwardRef)(function(t,r){return(0,l.createElement)(n,ce(ce({},t),{},{ref:r}))})},Re=(0,l.forwardRef)(function(e,n){var t=(0,l.useContext)(X),r=(0,l.useMemo)(function(){return Ie((t==null?void 0:t.imgAs)||"img")},[t]);return(0,u.jsx)(r,ce({ref:n},e))}),Ae=Re,ve,be,ye,he,Oe,je,xe,Pe,_e,Le=(0,b.kc)(function(e,n){var t=e.token,r=e.prefixCls,s=e.css,v=e.cx,_=n.rowNum,w=n.hasLink,y="".concat(r,"-features"),x="".concat(y,"-cover"),k="".concat(y,"-description"),B="".concat(y,"-title"),M="".concat(y,"-img"),R=20,Z=function(z){return s(ve||(ve=(0,a.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),z,z,z*(22/24))},E=s(be||(be=(0,a.Z)([`
      transition: all `," ",`;
    `])),t.motionDurationSlow,t.motionEaseInOutCirc);return{cell:s(ye||(ye=(0,a.Z)([`
        overflow: hidden;
      `]))),container:s(he||(he=(0,a.Z)([`
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
      `])),E,x,R*_,t.colorFillContent,M,Z(100),k,B,w?14:20),desc:v(k,E,s(Oe||(Oe=(0,a.Z)([`
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
        `])),t.colorTextSecondary,t.colorTextDescription)),img:v(M,E,s(je||(je=(0,a.Z)([`
          `,`;
          color: `,`;
        `])),Z(20),t.colorText)),imgContainer:v(x,E,s(xe||(xe=(0,a.Z)([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),Z(24),t.borderRadius)),link:s(Pe||(Pe=(0,a.Z)([`
        `,`;
        margin-block-start: 24px;
      `])),E),title:v(B,E,s(_e||(_e=(0,a.Z)([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),t.lineHeightHeading3,t.colorText))}}),Be=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"];function we(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function le(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?we(Object(t),!0).forEach(function(r){(0,h.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var We=(0,l.memo)(function(e){var n=e.image,t=e.className,r=e.title,s=e.style;return n.startsWith("http")?(0,u.jsx)(Ae,{alt:r,className:t,src:n,style:s}):(0,u.jsx)(L.Z,{className:t,style:s,children:n})}),ze=(0,l.memo)(function(e){var n=e.style,t=e.className,r=e.row,s=e.column,v=e.description,_=e.image,w=e.title,y=e.link,x=e.icon,k=e.imageStyle,B=e.openExternal,M=(0,P.Z)(e,Be),R=r||7,Z=Le({hasLink:!!y,rowNum:R}),E=Z.styles,Y=Z.cx;return(0,u.jsx)("div",le(le({className:Y(E.container,t),style:le({gridColumn:"span ".concat(s||1),gridRow:"span ".concat(R)},n)},M),{},{children:(0,u.jsxs)("div",{className:E.cell,children:[_||x&&(0,u.jsxs)(L.Z,{className:E.imgContainer,style:k,children:[x&&(0,u.jsx)(se.Z,{className:E.img,icon:x}),_&&(0,u.jsx)(We,{className:E.img,image:_,title:w})]}),w&&(0,u.jsx)(T.D,{align:"center",as:"h3",className:E.title,gap:8,horizontal:!0,children:w}),v&&(0,u.jsx)("p",{className:E.desc,dangerouslySetInnerHTML:{__html:v}}),y&&(0,u.jsx)("div",{className:E.link,children:(0,u.jsx)("a",{href:y,rel:"noreferrer",target:B?"_blank":void 0,children:"Read More"})})]})}))}),Ke=ze,Ue=["items","className","itemClassName","itemStyle","maxWidth","style"];function Ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ce(Object(t),!0).forEach(function(r){(0,h.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ce(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Fe=(0,l.memo)(function(e){var n=e.items,t=e.className,r=e.itemClassName,s=e.itemStyle,v=e.maxWidth,_=v===void 0?960:v,w=e.style,y=(0,P.Z)(e,Ue);if(n!=null&&n.length)return(0,u.jsx)(ae,ue({className:t,items:n,renderItem:function(k){return(0,u.jsx)(Ke,ue({className:r,style:s},k),k.title)},style:ue({maxWidth:_},w)},y))}),$e=Fe;var He={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ye=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),de=(e,n)=>{const t=(0,l.forwardRef)((B,k)=>{var M=B,{color:r="currentColor",size:s=24,strokeWidth:v=2,absoluteStrokeWidth:_,className:w="",children:y}=M,x=Ze(M,["color","size","strokeWidth","absoluteStrokeWidth","className","children"]);return(0,l.createElement)("svg",me(Me(me({ref:k},He),{width:s,height:s,stroke:r,strokeWidth:_?Number(v)*24/Number(s):v,className:["lucide",`lucide-${Ye(e)}`,w].join(" ")}),x),[...n.map(([R,Z])=>(0,l.createElement)(R,Z)),...Array.isArray(y)?y:[y]])});return t.displayName=`${e}`,t};const Ge=de("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);const Ve=de("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);const Je=de("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]);var Xe=[{description:"Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.",icon:Ge,title:"Themeable"},{description:"voids unnecessary styles props at runtime, making it more performant than other UI libraries.",icon:Ve,title:"Fast"},{description:"Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.",icon:Je,title:"Light & Dark UI"}],Qe=`import { ThemeProvider, Button } from '@yuntijs/ui'

export default () => (
  <ThemeProvider>
    <Button>Hello YuntiJS</Button>
  </ThemeProvider>
)`,qe=function(){var e=(0,b.Fg)();return(0,u.jsxs)(L.Z,{gap:16,children:[(0,u.jsxs)(L.Z,{children:[(0,u.jsx)("h2",{style:{fontSize:20},children:"\u2601\uFE0F Start building your CloudNative web app now"}),(0,u.jsxs)("div",{style:{color:e.colorTextDescription,textAlign:"center"},children:["The YuntiUI components are inspired by"," ",(0,u.jsx)("a",{href:"(https://ui.lobehub.com",rel:"noreferrer",target:"_blank",children:"LobeUI"})," ","and developed based on"," ",(0,u.jsx)("a",{href:"https://ant.design/components/overview",rel:"noreferrer",target:"_blank",children:"Antd components"}),", fully compatible with Antd components, ",(0,u.jsx)("br",{}),"and it is recommended to use"," ",(0,u.jsx)("a",{href:"https://ant-design.github.io/antd-style",rel:"noreferrer",target:"_blank",children:"antd-style"})," ","as the default css-in-js styling solution."]})]}),(0,u.jsx)(d.ZP,{language:"tsx",style:{width:"100%"},type:"ghost",children:Qe}),(0,u.jsx)($e,{items:Xe})]})}},81057:function(f,c,o){var d=o(25940),h=o(48385),P=o(80632),l=o(79086),D=o(50959),S=o(11527),N=["children","className","prefixCls"];function g(a,b){var p=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);b&&(i=i.filter(function(O){return Object.getOwnPropertyDescriptor(a,O).enumerable})),p.push.apply(p,i)}return p}function C(a){for(var b=1;b<arguments.length;b++){var p=arguments[b]!=null?arguments[b]:{};b%2?g(Object(p),!0).forEach(function(i){(0,d.Z)(a,i,p[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(p)):g(Object(p)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(p,i))})}return a}var T=(0,D.forwardRef)(function(a,b){var p=a.children,i=a.className,O=a.prefixCls,j=(0,h.Z)(a,N);return(0,S.jsx)(P.Z,C(C({ref:b,internalClassName:"".concat((0,l.Gn)(O),"-center"),className:i},j),{},{align:"center",justify:"center",children:p}))});c.Z=T},80632:function(f,c,o){var d=o(42804),h=o(48385),P=o(25940),l=o(79086),D=o(55687),S=o(50959),N=o(11527),g,C=["visible","flex","gap","direction","horizontal","align","justify","distribution","height","width","padding","paddingInline","paddingBlock","as","internalClassName","className","children"];function T(i,O){var j=Object.keys(i);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);O&&(m=m.filter(function(I){return Object.getOwnPropertyDescriptor(i,I).enumerable})),j.push.apply(j,m)}return j}function a(i){for(var O=1;O<arguments.length;O++){var j=arguments[O]!=null?arguments[O]:{};O%2?T(Object(j),!0).forEach(function(m){(0,P.Z)(i,m,j[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(j)):T(Object(j)).forEach(function(m){Object.defineProperty(i,m,Object.getOwnPropertyDescriptor(j,m))})}return i}var b=function(O){return(0,S.forwardRef)(function(j,m){return(0,S.createElement)(O,a(a({},j),{},{ref:m}))})},p=(0,S.forwardRef)(function(i,O){var j=i.visible,m=i.flex,I=i.gap,A=i.direction,u=i.horizontal,U=i.align,F=i.justify,$=i.distribution,ne=i.height,H=i.width,re=i.padding,G=i.paddingInline,W=i.paddingBlock,V=i.as,oe=i.internalClassName,J=i.className,ie=i.children,ae=(0,h.Z)(i,C),L=F||$,se=(0,S.useMemo)(function(){return(0,l.wE)(A,u)&&!H&&(0,l.WK)(L)?"100%":(0,l.uY)(H)},[A,u,L,H]),X=(0,S.useMemo)(function(){return b(V||"div")},[V]);return(0,N.jsx)(X,a(a({ref:O},ae),{},{className:(0,D.cx)(oe,(0,D.iv)(g||(g=(0,d.Z)([`
            // \u662F\u5426\u663E\u793A
            display: `,`;

            flex: `,`;

            flex-direction: `,`;
            justify-content: `,`;
            align-items: `,`;

            width: `,`;
            height: `,`;

            padding: `,`;

            padding-inline: `,`;
            padding-block: `,`;

            gap: `,`;
          `])),j===!1?"none":"flex",m,(0,l.kt)(A,u),L,U,se,(0,l.uY)(ne),(0,l.uY)(re),(0,l.uY)(G),(0,l.uY)(W),(0,l.uY)(I)),J),children:ie}))});c.Z=p},24819:function(f,c,o){o.d(c,{D:function(){return T}});var d=o(25940),h=o(48385),P=o(50959),l=o(80632),D=o(79086),S=o(11527),N=["className","prefixCls","children"];function g(a,b){var p=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);b&&(i=i.filter(function(O){return Object.getOwnPropertyDescriptor(a,O).enumerable})),p.push.apply(p,i)}return p}function C(a){for(var b=1;b<arguments.length;b++){var p=arguments[b]!=null?arguments[b]:{};b%2?g(Object(p),!0).forEach(function(i){(0,d.Z)(a,i,p[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(p)):g(Object(p)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(p,i))})}return a}var T=(0,P.forwardRef)(function(a,b){var p=a.className,i=a.prefixCls,O=a.children,j=(0,h.Z)(a,N);return(0,S.jsx)(l.Z,C(C({ref:b},j),{},{internalClassName:"".concat((0,D.Gn)(i),"-flexbox"),className:p,children:O}))})},79086:function(f,c,o){o.d(c,{Gn:function(){return d},WK:function(){return P},kt:function(){return h},uY:function(){return S},wE:function(){return l}});var d=function(g){return g||"layoutkit"},h=function(g,C){if(C)return"row";switch(g){case"horizontal":return"row";case"horizontal-reverse":return"row-reverse";case"vertical":default:return"column";case"vertical-reverse":return"column-reverse"}},P=function(g){if(g)return["space-between","space-around","space-evenly"].includes(g)},l=function(g,C){return h(g,C)==="row"},D=function(g,C){return h(g,C)==="column"},S=function(g){return typeof g=="number"?"".concat(g,"px"):g}},42804:function(f,c,o){o.d(c,{Z:function(){return d}});function d(h,P){return P||(P=h.slice(0)),Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(P)}}))}},66711:function(f,c,o){var d=o(99615),h=d.Z.Symbol;c.Z=h},33918:function(f,c,o){o.d(c,{Z:function(){return j}});var d=o(66711),h=Object.prototype,P=h.hasOwnProperty,l=h.toString,D=d.Z?d.Z.toStringTag:void 0;function S(m){var I=P.call(m,D),A=m[D];try{m[D]=void 0;var u=!0}catch(F){}var U=l.call(m);return u&&(I?m[D]=A:delete m[D]),U}var N=S,g=Object.prototype,C=g.toString;function T(m){return C.call(m)}var a=T,b="[object Null]",p="[object Undefined]",i=d.Z?d.Z.toStringTag:void 0;function O(m){return m==null?m===void 0?p:b:i&&i in Object(m)?N(m):a(m)}var j=O},97889:function(f,c){var o=typeof global=="object"&&global&&global.Object===Object&&global;c.Z=o},99615:function(f,c,o){var d=o(97889),h=typeof self=="object"&&self&&self.Object===Object&&self,P=d.Z||h||Function("return this")();c.Z=P},13795:function(f,c){function o(d){return d!=null&&typeof d=="object"}c.Z=o}}]);
}());