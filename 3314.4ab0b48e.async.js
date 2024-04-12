"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3314],{13314:function(de,T,c){c.d(T,{Z:function(){return Ze}});var w=c(25940),b=c(48385),f=c(50959),A=c(33918),E=c(13795),N="[object Number]";function M(e){return typeof e=="number"||(0,E.Z)(e)&&(0,A.Z)(e)==N}var L=M,v=c(24819),a=c(42804),l=c(54644),y=c(24110),Z,U,H,G,W="hover-card",X=(0,l.kc)(function(e,n){var t=e.css,r=e.responsive,o=e.token,i=e.isDarkMode,d=n.size,p=n.borderRadius;return{container:t(Z||(Z=(0,a.Z)([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),W),content:t(U||(U=(0,a.Z)([`
      z-index: 2;

      flex-grow: 1;

      height: 100%;
      margin: 1px;

      background: `,`;
      border-radius: `,`px;
    `])),o.colorBgContainer,p-1),grid:t(H||(H=(0,a.Z)([`
      display: grid;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),r.mobile),itemContainer:t(G||(G=(0,a.Z)([`
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
    `])),(0,y.m4)(o.colorBorderSecondary,.75),p,d,(0,y.m4)(o.colorTextBase,i?.06:.02),d*.75,(0,y.m4)(o.colorTextBase,i?.4:.2))}}),m=c(11527),pe=["children","className","style","borderRadius","size"];function Y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Y(Object(t),!0).forEach(function(r){(0,w.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ye=(0,f.memo)(function(e){var n=e.children,t=e.className,r=e.style,o=e.borderRadius,i=e.size,d=(0,b.Z)(e,pe),p=X({borderRadius:o,size:i}),s=p.styles,u=p.cx;return(0,m.jsx)(v.D,B(B({className:u(s.itemContainer,t),style:B({borderRadius:o},r)},d),{},{children:(0,m.jsx)(v.D,{className:s.content,children:n})}))}),ge=ye,ve=["items","renderItem","className","columns","gap","style","size","borderRadius","spotlight"];function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?J(Object(t),!0).forEach(function(r){(0,w.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function be(e,n){var t=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=fe(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,d=!1,p;return{s:function(){t=t.call(e)},n:function(){var u=t.next();return i=u.done,u},e:function(u){d=!0,p=u},f:function(){try{!i&&t.return!=null&&t.return()}finally{if(d)throw p}}}}function fe(e,n){if(e){if(typeof e=="string")return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,n)}}function Q(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var Oe=(0,f.memo)(function(e){var n=e.items,t=e.renderItem,r=e.className,o=e.columns,i=o===void 0?3:o,d=e.gap,p=d===void 0?12:d,s=e.style,u=e.size,O=u===void 0?800:u,j=e.borderRadius,x=j===void 0?12:j,P=e.spotlight,h=P===void 0?!0:P,g=(0,b.Z)(e,ve),D=X({borderRadius:x,size:O}),S=D.styles,Ie=D.cx,k=(0,f.useRef)(null),ke=(0,f.useMemo)(function(){return L(i)?Array.from({length:i}).fill("1fr").join(" "):i},[i]);return(0,f.useEffect)(function(){if(k.current&&h){var R=function(le){var z=be(document.querySelectorAll(".".concat(W))),ue;try{for(z.s();!(ue=z.n()).done;){var $=ue.value,me=$.getBoundingClientRect(),Re=le.clientX-me.left,ze=le.clientY-me.top;$.style.setProperty("--mouse-x","".concat(Re,"px")),$.style.setProperty("--mouse-y","".concat(ze,"px"))}}catch(Te){z.e(Te)}finally{z.f()}};return k.current.addEventListener("mousemove",R),function(){var C;(C=k.current)===null||C===void 0||C.removeEventListener("mousemove",R)}}},[]),(0,m.jsx)("div",I(I({className:Ie(S.container,S.grid,r),ref:k,style:I({gap:p,gridTemplateColumns:ke},s)},g),{},{children:n.map(function(R,C){return(0,m.jsx)(ge,{borderRadius:x,className:W,size:O,children:(0,m.jsx)(t,I({},R))},C)})}))}),he=Oe,V=c(81057),je=c(89197),xe=c(34226),q,_,ee,te,ne,re,oe,ae,ie,Pe=(0,l.kc)(function(e,n){var t=e.token,r=e.prefixCls,o=e.css,i=e.cx,d=n.rowNum,p=n.hasLink,s="".concat(r,"-features"),u="".concat(s,"-cover"),O="".concat(s,"-description"),j="".concat(s,"-title"),x="".concat(s,"-img"),P=20,h=function(S){return o(q||(q=(0,a.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),S,S,S*(22/24))},g=o(_||(_=(0,a.Z)([`
      transition: all `," ",`;
    `])),t.motionDurationSlow,t.motionEaseInOutCirc);return{cell:o(ee||(ee=(0,a.Z)([`
        overflow: hidden;
      `]))),container:o(te||(te=(0,a.Z)([`
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
      `])),g,u,P*d,t.colorFillContent,x,h(100),O,j,p?14:20),desc:i(O,g,o(ne||(ne=(0,a.Z)([`
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
        `])),t.colorTextSecondary,t.colorTextDescription)),img:i(x,g,o(re||(re=(0,a.Z)([`
          `,`;
          color: `,`;
        `])),h(20),t.colorText)),imgContainer:i(u,g,o(oe||(oe=(0,a.Z)([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),h(24),t.borderRadius)),link:o(ae||(ae=(0,a.Z)([`
        `,`;
        margin-block-start: 24px;
      `])),g),title:i(j,g,o(ie||(ie=(0,a.Z)([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),t.lineHeightHeading3,t.colorText))}}),we=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"];function se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?se(Object(t),!0).forEach(function(r){(0,w.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Se=(0,f.memo)(function(e){var n=e.image,t=e.className,r=e.title,o=e.style;return n.startsWith("http")?(0,m.jsx)(xe.Z,{alt:r,className:t,src:n,style:o}):(0,m.jsx)(V.Z,{className:t,style:o,children:n})}),Ce=(0,f.memo)(function(e){var n=e.style,t=e.className,r=e.row,o=e.column,i=e.description,d=e.image,p=e.title,s=e.link,u=e.icon,O=e.imageStyle,j=e.openExternal,x=(0,b.Z)(e,we),P=r||7,h=Pe({hasLink:!!s,rowNum:P}),g=h.styles,D=h.cx;return(0,m.jsx)("div",F(F({className:D(g.container,t),style:F({gridColumn:"span ".concat(o||1),gridRow:"span ".concat(P)},n)},x),{},{children:(0,m.jsxs)("div",{className:g.cell,children:[d||u&&(0,m.jsxs)(V.Z,{className:g.imgContainer,style:O,children:[u&&(0,m.jsx)(je.Z,{className:g.img,icon:u}),d&&(0,m.jsx)(Se,{className:g.img,image:d,title:p})]}),p&&(0,m.jsx)(v.D,{align:"center",as:"h3",className:g.title,gap:8,horizontal:!0,children:p}),i&&(0,m.jsx)("p",{className:g.desc,dangerouslySetInnerHTML:{__html:i}}),s&&(0,m.jsx)("div",{className:g.link,children:(0,m.jsx)("a",{href:s,rel:"noreferrer",target:j?"_blank":void 0,children:"Read More"})})]})}))}),Ne=Ce,De=["items","className","itemClassName","itemStyle","maxWidth","style"];function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ce(Object(t),!0).forEach(function(r){(0,w.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ee=(0,f.memo)(function(e){var n=e.items,t=e.className,r=e.itemClassName,o=e.itemStyle,i=e.maxWidth,d=i===void 0?960:i,p=e.style,s=(0,b.Z)(e,De);if(n!=null&&n.length)return(0,m.jsx)(he,K({className:t,items:n,renderItem:function(O){return(0,m.jsx)(Ne,K({className:r,style:o},O),O.title)},style:K({maxWidth:d},p)},s))}),Ze=Ee},34226:function(de,T,c){var w=c(25940),b=c(50959),f=c(94976),A=c(11527);function E(v,a){var l=Object.keys(v);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(v);a&&(y=y.filter(function(Z){return Object.getOwnPropertyDescriptor(v,Z).enumerable})),l.push.apply(l,y)}return l}function N(v){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?E(Object(l),!0).forEach(function(y){(0,w.Z)(v,y,l[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(l)):E(Object(l)).forEach(function(y){Object.defineProperty(v,y,Object.getOwnPropertyDescriptor(l,y))})}return v}var M=function(a){return(0,b.forwardRef)(function(l,y){return(0,b.createElement)(a,N(N({},l),{},{ref:y}))})},L=(0,b.forwardRef)(function(v,a){var l=(0,b.useContext)(f.E_),y=(0,b.useMemo)(function(){return M((l==null?void 0:l.imgAs)||"img")},[l]);return(0,A.jsx)(y,N({ref:a},v))});T.Z=L}}]);
