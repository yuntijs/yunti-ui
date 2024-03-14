!(function(){"use strict";var xn=Object.defineProperty,Sn=Object.defineProperties;var On=Object.getOwnPropertyDescriptors;var We=Object.getOwnPropertySymbols;var _r=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable;var Tr=(k,p,o)=>p in k?xn(k,p,{enumerable:!0,configurable:!0,writable:!0,value:o}):k[p]=o,K=(k,p)=>{for(var o in p||(p={}))_r.call(p,o)&&Tr(k,o,p[o]);if(We)for(var o of We(p))Ar.call(p,o)&&Tr(k,o,p[o]);return k},ar=(k,p)=>Sn(k,On(p));var ir=(k,p)=>{var o={};for(var a in k)_r.call(k,a)&&p.indexOf(a)<0&&(o[a]=k[a]);if(k!=null&&We)for(var a of We(k))p.indexOf(a)<0&&Ar.call(k,a)&&(o[a]=k[a]);return o};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[4752],{94976:function(k,p,o){o.d(p,{E_:function(){return Y},nc:function(){return U}});var a=o(50959),T=o(56264),s="https://unpkg.com",Z="https://registry.npmmirror.com",M=function(l){var O=l.pkg,A=l.version,v=A===void 0?"latest":A,C=l.path,h=l.proxy;switch(h){case"unpkg":return(0,T.Z)(s,"".concat(O,"@").concat(v),C);default:return(0,T.Z)(Z,O,v,"files",C)}},q=o(11527),Y=(0,a.createContext)(null),G=null,X=function(l){var O=l.pkg,A=l.version,v=l.path;return M({path:v,pkg:O,proxy:"aliyun",version:A})},U=function(){var l=(0,a.useContext)(Y);return l?(l==null?void 0:l.proxy)!=="custom"?function(O){var A=O.pkg,v=O.version,C=O.path;return M({path:C,pkg:A,proxy:l.proxy,version:v})}:(l==null?void 0:l.customCdnFn)||X:X},N=null},60895:function(k,p,o){o.d(p,{Z:function(){return bn}});var a=o(25940),T=o(48385),s=o(50959),Z=o(85022),M=o.n(Z),q=o(88069),Y=o(87037),G=o(61644),X=o(72648);const U=s.createContext({});var B=s.createContext({message:{},notification:{},modal:{}}),l=o(75034);const O=r=>{const{componentCls:t,colorText:n,fontSize:e,lineHeight:i,fontFamily:b}=r;return{[t]:{color:n,fontSize:e,lineHeight:i,fontFamily:b}}},A=()=>({});var v=(0,l.I$)("App",O,A);const C=()=>s.useContext(B),h=r=>{const{prefixCls:t,children:n,className:e,rootClassName:i,message:b,notification:D,style:J,component:z="div"}=r,{getPrefixCls:Q}=(0,s.useContext)(q.E_),te=Q("app",t),[ue,oe,ae]=v(te),ge=M()(oe,te,e,i,ae),de=(0,s.useContext)(U),ie=s.useMemo(()=>({message:Object.assign(Object.assign({},de.message),b),notification:Object.assign(Object.assign({},de.notification),D)}),[b,D,de.message,de.notification]),[ee,pn]=(0,Y.Z)(ie.message),[kr,gn]=(0,X.Z)(ie.notification),[wr,mn]=(0,G.Z)(),vn=s.useMemo(()=>({message:ee,notification:kr,modal:wr}),[ee,kr,wr]),hn=z===!1?s.Fragment:z,yn={className:ge,style:J};return ue(s.createElement(B.Provider,{value:vn},s.createElement(U.Provider,{value:ie},s.createElement(hn,Object.assign({},z===!1?void 0:yn),mn,pn,gn,n))))};h.useApp=C;var y=h,u=o(77764),f=o(94976),d=function(t){var n=document.createElement("link");return n.rel="stylesheet",n.href=t,n},c=(0,s.memo)(function(r){var t=r.url,n=(0,s.useRef)(!1);return(0,s.useEffect)(function(){if(!n.current){n.current=!0;var e=d(t);document.head.append(e)}},[]),null}),P=c,m=o(42804),L,E,w,F,H,I,W,_,j,S=function(t){var n=t.css,e=t.token,i=t.isDarkMode,b=(0,u.F4)(L||(L=(0,m.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `]))),D=i?e.cyan9A:e.cyan11A,J=i?e.cyan2A:e.cyan6A;return{blur:n(E||(E=(0,m.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:n(w||(w=(0,m.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:n(F||(F=(0,m.Z)([`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          background-color: `,`;
          border-radius: 4px;
          transition: background-color 500ms `,`;
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `])),e.colorFill,e.motionEaseOut),gradientAnimation:n(H||(H=(0,m.Z)([`
      background-image: linear-gradient(
        -45deg,
        `,`,
        `,`,
        `,`,
        `,`
      );
      background-size: 400% 400%;
      border-radius: inherit;
      animation: 5s `,` 5s ease infinite;
    `])),e.gold,e.magenta,e.geekblue,e.cyan,b),markdown:n(I||(I=(0,m.Z)([`
      color: `,`;

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 600;
      }

      p {
        margin-block: 0 0;
        font-size: 14px;
        line-height: 2;
        color: `,`;

        + * {
          margin-block-end: 1em;
        }

        &:not(:last-child) {
          margin-block-end: 1.5em;
        }
      }

      blockquote {
        margin-block: 16px;
        margin-inline: 0;
        padding-block: 0;
        padding-inline: 12px;

        p {
          font-style: italic;
          color: `,`;
        }
      }

      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;
        border-radius: `,`px;

        > code {
          padding: 0 !important;
          background: unset !important;
          border: none !important;
          border-radius: unset !important;
        }
      }

      *:not([data-code-type='highlighter'], pre) code {
        padding-block: 2px;
        padding-inline: 6px;

        font-size: `,`px;
        color: `,`;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      table {
        border-spacing: 0;

        width: 100%;
        margin-block: 1em 1em;
        margin-inline: 0 0;
        padding: 8px;

        border: 1px solid `,`;
        border-radius: `,`px;

        code {
          display: inline-flex;
        }
      }

      th,
      td {
        padding-block: 10px 10px;
        padding-inline: 16px 16px;
      }

      thead {
        tr {
          th {
            background: `,`;

            &:first-child {
              border-start-start-radius: `,`px;
              border-end-start-radius: `,`px;
            }

            &:last-child {
              border-start-end-radius: `,`px;
              border-end-end-radius: `,`px;
            }
          }
        }
      }

      > ul > li {
        list-style-type: disc;
      }

      > ol,
      > ul {
        > li {
          margin-inline-start: 24px;
          line-height: 1.8;

          &::marker {
            color: `,` !important;
          }
        }
      }

      ol,
      ul {
        > li::marker {
          color: `,`;
        }
      }

      details {
        margin-block-end: 1em;
        padding-block: 12px;
        padding-inline: 16px;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        transition: all 400ms `,`;
      }

      details[open] {
        summary {
          padding-block-end: 12px;
          border-block-end: 1px solid `,`;
        }
      }
    `])),e.colorText,e.colorText,e.colorTextDescription,e.colorLink,e.colorLinkHover,e.colorLinkActive,e.borderRadius,e.fontSizeSM,D,J,i?e.cyan1A:e.cyan6A,e.borderRadiusSM,e.colorBorderSecondary,e.borderRadius,e.colorFillTertiary,e.borderRadius,e.borderRadius,e.borderRadius,e.borderRadius,i?e.cyan9A:e.cyan10A,e.colorTextDescription,e.colorFillTertiary,e.colorBorderSecondary,e.borderRadiusLG,e.motionEaseOut,e.colorBorder),markdownInChat:n(W||(W=(0,m.Z)([`
      h1 {
        margin-block-start: 0;
        font-size: 1.6em;
      }

      h2 {
        margin-block-start: 0;
        font-size: 1.4em;
      }

      h3 {
        margin-block-start: 0;
        font-size: 1.2em;
      }

      h4 {
        margin-block-start: 0;
        font-size: 1.1em;
      }

      h5 {
        margin-block-start: 0;
        font-size: 1em;
      }

      > *:last-child {
        margin-block-end: 0 !important;
      }

      p {
        line-height: 1.8 !important;
        white-space: pre-wrap !important;

        + * {
          margin-block-end: 0.5em !important;
        }

        &:not(:last-child) {
          margin-block-end: 1em !important;
        }
      }
    `]))),noScrollbar:n(_||(_=(0,m.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:n(j||(j=(0,m.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),e.colorTextSecondary,e.colorText)}},g=o(90885),x=o(30994);function V(r,t,n){var e=-1,i=r.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var b=Array(i);++e<i;)b[e]=r[e+t];return b}var ce=V;function Je(r,t,n){var e=r.length;return n=n===void 0?e:n,!t&&n>=e?r:ce(r,t,n)}var Oe=Je,Ge="\\ud800-\\udfff",je="\\u0300-\\u036f",Ce="\\ufe20-\\ufe2f",Ke="\\u20d0-\\u20ff",Ve=je+Ce+Ke,Ye="\\ufe0e\\ufe0f",ke="\\u200d",we=RegExp("["+ke+Ge+Ve+Ye+"]");function se(r){return we.test(r)}var Te=se;function _e(r){return r.split("")}var Xe=_e,he="\\ud800-\\udfff",Ae="\\u0300-\\u036f",Pe="\\ufe20-\\ufe2f",Ee="\\u20d0-\\u20ff",$e=Ae+Pe+Ee,Qe="\\ufe0e\\ufe0f",qe="["+he+"]",ye="["+$e+"]",xe="\\ud83c[\\udffb-\\udfff]",er="(?:"+ye+"|"+xe+")",Re="[^"+he+"]",De="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",rr="\\u200d",Ie=er+"?",Me="["+Qe+"]?",nr="(?:"+rr+"(?:"+[Re,De,Ze].join("|")+")"+Me+Ie+")*",tr=Me+Ie+nr,R="(?:"+[Re+ye+"?",ye,De,Ze,qe].join("|")+")",re=RegExp(xe+"(?="+xe+")|"+R+tr,"g");function le(r){return r.match(re)||[]}var or=le;function me(r){return Te(r)?or(r):Xe(r)}var Le=me;function Pr(r){return function(t){t=(0,x.Z)(t);var n=Te(t)?Le(t):void 0,e=n?n[0]:t.charAt(0),i=n?Oe(n,1).join(""):t.slice(1);return e[r]()+i}}var Er=Pr,Rr=Er("toUpperCase"),Dr=Rr;function Zr(r){return Dr((0,x.Z)(r).toLowerCase())}var cr=Zr,Ir=o(51741),Mr=(0,Ir.Z)(function(r,t,n){return t=t.toLowerCase(),r+(n?cr(t):t)}),Lr=Mr,$=o(65800);function sr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function Ue(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):sr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function lr(r,t){var n=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=Ur(r))||t&&r&&typeof r.length=="number"){n&&(r=n);var e=0,i=function(){};return{s:i,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(Q){throw Q},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b=!0,D=!1,J;return{s:function(){n=n.call(r)},n:function(){var Q=n.next();return b=Q.done,Q},e:function(Q){D=!0,J=Q},f:function(){try{!b&&n.return!=null&&n.return()}finally{if(D)throw J}}}}function Ur(r,t){if(r){if(typeof r=="string")return ur(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ur(r,t)}}function ur(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var Fr=function(t){var n,e=t.name,i=t.scale,b=t.appearance;return n={},(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)(n,"".concat(e,"Bg"),i["".concat(b,"A")][1]),"".concat(e,"BgHover"),i["".concat(b,"A")][2]),"".concat(e,"Border"),i[b][4]),"".concat(e,"BorderSecondary"),i[b][3]),"".concat(e,"BorderHover"),i[b][5]),"".concat(e,"Hover"),i[b][10]),"".concat(e),i[b][9]),"".concat(e,"Active"),i[b][7]),"".concat(e,"TextHover"),i["".concat(b,"A")][10]),"".concat(e,"Text"),i["".concat(b,"A")][9]),(0,a.Z)(n,"".concat(e,"TextActive"),i["".concat(b,"A")][7])},zr=function(t){var n=t.name,e=t.scale,i=t.appearance,b={},D=lr(e[i].entries()),J;try{for(D.s();!(J=D.n()).done;){var z=(0,g.Z)(J.value,2),Q=z[0],te=z[1];Q===0||Q===12||(b["".concat(n).concat(Q)]=te)}}catch(ie){D.e(ie)}finally{D.f()}var ue=lr(e["".concat(i,"A")].entries()),oe;try{for(ue.s();!(oe=ue.n()).done;){var ae=(0,g.Z)(oe.value,2),ge=ae[0],de=ae[1];ge===0||ge===12||(b["".concat(n).concat(ge,"A")]=de)}}catch(ie){ue.e(ie)}finally{ue.f()}return Ue(Ue({},b),Fr({appearance:i,name:n,scale:e}))},Hr=function(t){for(var n=t.isDarkMode,e={},i=0,b=Object.entries($._);i<b.length;i++){var D=(0,g.Z)(b[i],2),J=D[0],z=D[1];e=Ue(Ue({},e),zr({appearance:n?"dark":"light",name:Lr(J),scale:z}))}return e},ne=function(t){var n=t.type,e=t.scale,i=t.appearance,b=cr(n),D=i==="dark";return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"color".concat(b,"Bg"),e[i][1]),"color".concat(b,"BgHover"),e[i][2]),"color".concat(b,"Border"),e[i][4]),"color".concat(b,"BorderHover"),e[i][D?5:3]),"color".concat(b,"Hover"),e[i][D?10:8]),"color".concat(b),e[i][9]),"color".concat(b,"Active"),e[i][D?7:10]),"color".concat(b,"TextHover"),e[i][D?10:8]),"color".concat(b,"Text"),e[i][9]),"color".concat(b,"TextActive"),e[i][D?7:10])},Fe=function(t){var n=t.scale,e=t.appearance;return{colorBgContainer:e==="dark"?n[e][1]:n[e][0],colorBgElevated:e==="dark"?n[e][2]:n[e][0],colorBgLayout:e==="dark"?n[e][0]:n[e][1],colorBgMask:n.lightA[8],colorBgSpotlight:n[e][5],colorBorder:n[e][4],colorBorderSecondary:n[e][3],colorFill:n["".concat(e,"A")][3],colorFillQuaternary:n["".concat(e,"A")][0],colorFillSecondary:n["".concat(e,"A")][2],colorFillTertiary:n["".concat(e,"A")][1],colorText:n[e][12],colorTextQuaternary:n[e][6],colorTextSecondary:n[e][10],colorTextTertiary:n[e][8]}},dr={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}};function fr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function fe(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):fr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Nr=ne({appearance:"dark",scale:$._.bnw,type:"Primary"}),br=Fe({appearance:"dark",scale:$._.gray}),Br=ne({appearance:"dark",scale:$._.lime,type:"Success"}),Wr=ne({appearance:"dark",scale:$._.gold,type:"Warning"}),Jr=ne({appearance:"dark",scale:$._.red,type:"Error"}),ze=ne({appearance:"dark",scale:$._.blue,type:"Info"}),Gr=fe(fe(fe(fe(fe(fe(fe({},Nr),br),Br),Wr),Jr),ze),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:ze.colorInfoText,colorLinkActive:ze.colorInfoTextActive,colorLinkHover:ze.colorInfoTextHover,colorTextLightSolid:br.colorBgLayout}),Kr=Gr;function pr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function He(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):pr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Vr=function(t,n){var e=t.primaryColor,i=t.neutralColor,b={},D={},J=$._[e];J&&(b=ne({appearance:"dark",scale:J,type:"Primary"}));var z=dr[i];return z&&(D=Fe({appearance:"dark",scale:z})),He(He(He(He({},n),Kr),b),D)};function gr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function be(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):gr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Yr=ne({appearance:"light",scale:$._.bnw,type:"Primary"}),mr=Fe({appearance:"light",scale:$._.gray}),Xr=ne({appearance:"light",scale:$._.green,type:"Success"}),$r=ne({appearance:"light",scale:$._.orange,type:"Warning"}),Qr=ne({appearance:"light",scale:$._.volcano,type:"Error"}),Ne=ne({appearance:"light",scale:$._.geekblue,type:"Info"}),qr=be(be(be(be(be(be(be({},Yr),mr),Xr),$r),Qr),Ne),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Ne.colorInfoText,colorLinkActive:Ne.colorInfoTextActive,colorLinkHover:Ne.colorInfoTextHover,colorTextLightSolid:mr.colorBgLayout}),en=qr;function vr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function Be(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):vr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var rn=function(t,n){var e=t.primaryColor,i=t.neutralColor,b={},D={},J=$._[e];J&&(b=ne({appearance:"light",scale:J,type:"Primary"}));var z=dr[i];return z&&(D=Fe({appearance:"light",scale:z})),Be(Be(Be(Be({},n),en),b),D)},hr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',nn='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',yr='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',tn="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",on={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[nn,yr,hr].join(","),fontFamilyCode:[tn,yr,hr].join(",")};function xr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function Sr(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):xr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var an=function(t){var n=t.neutralColor,e=t.appearance,i=t.primaryColor,b=e==="dark";return{algorithm:b?Vr:rn,token:Sr(Sr({},on),{},{neutralColor:n,primaryColor:i})}},Se=o(24110),Or,cn=function(r){return(0,u.iv)(Or||(Or=(0,m.Z)([`
  .`,`-checkbox-inner:after {
    border-color: `,` !important;
  }

  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary:not(:disabled) {
    color: `,` !important;

    &:hover {
      color: `,` !important;
    }

    &:active {
      color: `,` !important;
    }
  }

  .`,`-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding-block: 4px;
    padding-inline: 8px;

    color: `,` !important;

    background-color: `,` !important;
    border-radius: `,`px !important;
  }

  .`,`-tooltip-arrow {
    &::before,
    &::after {
      background: `,` !important;
    }
  }

  .`,`-switch-handle::before {
    background: `,` !important;
  }

  .`,`-image-preview-close,
    .`,"-image-preview-switch-right,.",`-image-preview-switch-left {
    `,`;
    border-radius: `,`px;
    background: `,`;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .`,`-popover-inner {
    border: 1px solid `,`;
    box-shadow: `,`;
  }

  ul.`,`-dropdown-menu {
    border: 1px solid `,`;
    border-radius: `,`px !important;
    box-shadow: `,`;
  }

  @media (max-width: 575px) {
    .`,`-tooltip {
      display: none !important;
    }
  }
`])),r.prefixCls,(0,Se.XV)(r.colorPrimary),r.prefixCls,r.prefixCls,(0,Se.XV)(r.colorPrimary),(0,Se.XV)(r.colorPrimary),(0,Se.XV)(r.colorPrimaryActive),r.prefixCls,r.colorBgLayout,r.colorText,r.borderRadiusSM,r.prefixCls,r.colorText,r.prefixCls,r.colorBgContainer,r.prefixCls,r.prefixCls,r.prefixCls,r.stylish.blur,r.borderRadiusLG,(0,Se.m4)(r.colorBgMask,.1),r.prefixCls,r.colorBorderSecondary,r.boxShadowSecondary,r.prefixCls,r.colorBorderSecondary,r.borderRadius,r.boxShadowSecondary,r.prefixCls)},jr,sn=function(r){return(0,u.iv)(jr||(jr=(0,m.Z)([`
  html,
  body {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;

    overflow: hidden auto;

    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    vertical-align: baseline;

    color-scheme: dark;
    background-color: `,`;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    overflow-x: hidden;
    height: 100dvh;
  }

  #root {
    min-height: 100dvh;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  p {
    word-wrap: break-word;
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    box-sizing: border-box;
    vertical-align: baseline;
  }

  @media only screen and (min-width: 574px) {
    * {
      ::-webkit-scrollbar {
        cursor: pointer;
        width: 4px;
        height: 4px;
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-color: transparent;
        border-radius: 2px;
        transition: background-color 500ms `,`;

        &:hover {
          background-color: `,`;
        }
      }

      ::-webkit-scrollbar-corner {
        display: none;
        width: 0;
        height: 0;
      }

      &:hover {
        ::-webkit-scrollbar-thumb {
          background-color: `,`;
        }
      }
    }
  }
`])),r.fontFamily,r.fontSize,r.colorTextBase,r.colorBgLayout,r.fontFamilyCode,r.fontFamilyCode,r.yellow9,r.motionEaseOut,r.colorText,r.colorFill)},ln=(0,u.vJ)(function(r){var t=r.theme;return[sn(t),cn(t)]}),un=ln,pe=o(11527),dn=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme"];function Cr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function ve(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):Cr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var fn=(0,s.memo)(function(r){var t=r.children,n=r.customStylish,e=r.customToken,i=r.enableWebfonts,b=i===void 0?!0:i,D=r.enableGlobalStyle,J=D===void 0?!0:D,z=r.webfonts,Q=r.customTheme,te=Q===void 0?{}:Q,ue=(0,T.Z)(r,dn),oe=(0,f.nc)(),ae=z||[oe({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"latest"}),oe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"latest"}),oe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"latest"}),oe({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ge=(0,s.useCallback)(function(ee){return ve(ve({},S(ee)),n==null?void 0:n(ee))},[n]),de=(0,s.useCallback)(function(ee){return ve(ve({},Hr(ee)),e==null?void 0:e(ee))},[e]),ie=(0,s.useCallback)(function(ee){return an({appearance:ee,neutralColor:te.neutralColor,primaryColor:te.primaryColor})},[te.primaryColor,te.neutralColor]);return(0,pe.jsxs)(pe.Fragment,{children:[b&&(ae==null?void 0:ae.length)>0&&ae.map(function(ee){return(0,pe.jsx)(P,{url:ee},ee)}),(0,pe.jsx)(u.V9,{speedy:!0,children:(0,pe.jsxs)(u.f6,ve(ve({customStylish:ge,customToken:de},ue),{},{theme:ie,children:[J&&(0,pe.jsx)(un,{}),(0,pe.jsx)(y,{style:{minHeight:"inherit",width:"inherit"},children:t})]}))})]})}),bn=fn},98853:function(k,p,o){var a=o(82936),T=o(50959),s=o(11527),Z=(0,T.memo)(function(){return(0,s.jsxs)(a.ql,{children:[(0,s.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,s.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,s.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,s.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,s.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,s.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,s.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,s.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,s.jsx)("meta",{content:"#000000",name:"theme-color"})]})});p.Z=Z},92267:function(k,p,o){o.d(p,{f:function(){return s}});var a=o(47679),T=o(6522),s=(0,a.Ue)()((0,T.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(k){k.exports=function p(o,a){if(o===a)return!0;if(o&&a&&typeof o=="object"&&typeof a=="object"){if(o.constructor!==a.constructor)return!1;var T,s,Z;if(Array.isArray(o)){if(T=o.length,T!=a.length)return!1;for(s=T;s--!==0;)if(!p(o[s],a[s]))return!1;return!0}if(o.constructor===RegExp)return o.source===a.source&&o.flags===a.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===a.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===a.toString();if(Z=Object.keys(o),T=Z.length,T!==Object.keys(a).length)return!1;for(s=T;s--!==0;)if(!Object.prototype.hasOwnProperty.call(a,Z[s]))return!1;for(s=T;s--!==0;){var M=Z[s];if(!p(o[M],a[M]))return!1}return!0}return o!==o&&a!==a}},2179:function(k,p,o){var a=o(50959),T=o(4322);function s(U,N){return U===N&&(U!==0||1/U===1/N)||U!==U&&N!==N}var Z=typeof Object.is=="function"?Object.is:s,M=T.useSyncExternalStore,q=a.useRef,Y=a.useEffect,G=a.useMemo,X=a.useDebugValue;p.useSyncExternalStoreWithSelector=function(U,N,B,l,O){var A=q(null);if(A.current===null){var v={hasValue:!1,value:null};A.current=v}else v=A.current;A=G(function(){function h(c){if(!y){if(y=!0,u=c,c=l(c),O!==void 0&&v.hasValue){var P=v.value;if(O(P,c))return f=P}return f=c}if(P=f,Z(u,c))return P;var m=l(c);return O!==void 0&&O(P,m)?P:(u=c,f=m)}var y=!1,u,f,d=B===void 0?null:B;return[function(){return h(N())},d===null?void 0:function(){return h(d())}]},[N,B,l,O]);var C=M(U,A[0],A[1]);return Y(function(){v.hasValue=!0,v.value=C},[C]),X(C),C}},7231:function(k,p,o){k.exports=o(2179)},66711:function(k,p,o){var a=o(99615),T=a.Z.Symbol;p.Z=T},28019:function(k,p){function o(a,T){for(var s=-1,Z=a==null?0:a.length,M=Array(Z);++s<Z;)M[s]=T(a[s],s,a);return M}p.Z=o},33918:function(k,p,o){o.d(p,{Z:function(){return v}});var a=o(66711),T=Object.prototype,s=T.hasOwnProperty,Z=T.toString,M=a.Z?a.Z.toStringTag:void 0;function q(C){var h=s.call(C,M),y=C[M];try{C[M]=void 0;var u=!0}catch(d){}var f=Z.call(C);return u&&(h?C[M]=y:delete C[M]),f}var Y=q,G=Object.prototype,X=G.toString;function U(C){return X.call(C)}var N=U,B="[object Null]",l="[object Undefined]",O=a.Z?a.Z.toStringTag:void 0;function A(C){return C==null?C===void 0?l:B:O&&O in Object(C)?Y(C):N(C)}var v=A},51741:function(k,p,o){o.d(p,{Z:function(){return tr}});function a(R,re,le,or){var me=-1,Le=R==null?0:R.length;for(or&&Le&&(le=R[++me]);++me<Le;)le=re(le,R[me],me,R);return le}var T=a;function s(R){return function(re){return R==null?void 0:R[re]}}var Z=s,M={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},q=Z(M),Y=q,G=o(30994),X=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,U="\\u0300-\\u036f",N="\\ufe20-\\ufe2f",B="\\u20d0-\\u20ff",l=U+N+B,O="["+l+"]",A=RegExp(O,"g");function v(R){return R=(0,G.Z)(R),R&&R.replace(X,Y).replace(A,"")}var C=v,h=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function y(R){return R.match(h)||[]}var u=y,f=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function d(R){return f.test(R)}var c=d,P="\\ud800-\\udfff",m="\\u0300-\\u036f",L="\\ufe20-\\ufe2f",E="\\u20d0-\\u20ff",w=m+L+E,F="\\u2700-\\u27bf",H="a-z\\xdf-\\xf6\\xf8-\\xff",I="\\xac\\xb1\\xd7\\xf7",W="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_="\\u2000-\\u206f",j=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",S="A-Z\\xc0-\\xd6\\xd8-\\xde",g="\\ufe0e\\ufe0f",x=I+W+_+j,V="['\u2019]",ce="["+x+"]",Je="["+w+"]",Oe="\\d+",Ge="["+F+"]",je="["+H+"]",Ce="[^"+P+x+Oe+F+H+S+"]",Ke="\\ud83c[\\udffb-\\udfff]",Ve="(?:"+Je+"|"+Ke+")",Ye="[^"+P+"]",ke="(?:\\ud83c[\\udde6-\\uddff]){2}",we="[\\ud800-\\udbff][\\udc00-\\udfff]",se="["+S+"]",Te="\\u200d",_e="(?:"+je+"|"+Ce+")",Xe="(?:"+se+"|"+Ce+")",he="(?:"+V+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+V+"(?:D|LL|M|RE|S|T|VE))?",Pe=Ve+"?",Ee="["+g+"]?",$e="(?:"+Te+"(?:"+[Ye,ke,we].join("|")+")"+Ee+Pe+")*",Qe="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",qe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ye=Ee+Pe+$e,xe="(?:"+[Ge,ke,we].join("|")+")"+ye,er=RegExp([se+"?"+je+"+"+he+"(?="+[ce,se,"$"].join("|")+")",Xe+"+"+Ae+"(?="+[ce,se+_e,"$"].join("|")+")",se+"?"+_e+"+"+he,se+"+"+Ae,qe,Qe,Oe,xe].join("|"),"g");function Re(R){return R.match(er)||[]}var De=Re;function Ze(R,re,le){return R=(0,G.Z)(R),re=le?void 0:re,re===void 0?c(R)?De(R):u(R):R.match(re)||[]}var rr=Ze,Ie="['\u2019]",Me=RegExp(Ie,"g");function nr(R){return function(re){return T(rr(C(re).replace(Me,"")),R,"")}}var tr=nr},97889:function(k,p){var o=typeof global=="object"&&global&&global.Object===Object&&global;p.Z=o},99615:function(k,p,o){var a=o(97889),T=typeof self=="object"&&self&&self.Object===Object&&self,s=a.Z||T||Function("return this")();p.Z=s},56052:function(k,p){var o=Array.isArray;p.Z=o},13795:function(k,p){function o(a){return a!=null&&typeof a=="object"}p.Z=o},30994:function(k,p,o){o.d(p,{Z:function(){return A}});var a=o(66711),T=o(28019),s=o(56052),Z=o(33918),M=o(13795),q="[object Symbol]";function Y(v){return typeof v=="symbol"||(0,M.Z)(v)&&(0,Z.Z)(v)==q}var G=Y,X=1/0,U=a.Z?a.Z.prototype:void 0,N=U?U.toString:void 0;function B(v){if(typeof v=="string")return v;if((0,s.Z)(v))return(0,T.Z)(v,B)+"";if(G(v))return N?N.call(v):"";var C=v+"";return C=="0"&&1/v==-X?"-0":C}var l=B;function O(v){return v==null?"":l(v)}var A=O},47679:function(k,p,o){o.d(p,{Ue:function(){return N}});const a=l=>{let O;const A=new Set,v=(f,d)=>{const c=typeof f=="function"?f(O):f;if(!Object.is(c,O)){const P=O;O=(d!=null?d:typeof c!="object"||c===null)?c:Object.assign({},O,c),A.forEach(m=>m(O,P))}},C=()=>O,u={setState:v,getState:C,subscribe:f=>(A.add(f),()=>A.delete(f)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),A.clear()}};return O=l(v,C,u),u},T=l=>l?a(l):a;var s=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),T(l)),Z=o(50959),M=o(7231);const{useDebugValue:q}=Z,{useSyncExternalStoreWithSelector:Y}=M;let G=!1;function X(l,O=l.getState,A){A&&!G&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),G=!0);const v=Y(l.subscribe,l.getState,l.getServerState||l.getState,O,A);return q(v),v}const U=l=>{typeof l!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const O=typeof l=="function"?T(l):l,A=(v,C)=>X(O,v,C);return Object.assign(A,O),A},N=l=>l?U(l):U;var B=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),N(l))},6522:function(k,p,o){o.d(p,{mW:function(){return Y},tJ:function(){return C}});const a=(h,y)=>(u,f,d)=>(d.dispatch=c=>(u(P=>h(P,c),!1,c),c),d.dispatchFromDevtools=!0,K({dispatch:(...c)=>d.dispatch(...c)},y)),T=null,s=new Map,Z=h=>{const y=s.get(h);return y?Object.fromEntries(Object.entries(y.stores).map(([u,f])=>[u,f.getState()])):{}},M=(h,y,u)=>{if(h===void 0)return{type:"untracked",connection:y.connect(u)};const f=s.get(u.name);if(f)return K({type:"tracked",store:h},f);const d={connection:y.connect(u),stores:{}};return s.set(u.name,d),K({type:"tracked",store:h},d)},Y=(h,y={})=>(u,f,d)=>{const _=y,{enabled:c,anonymousActionType:P,store:m}=_,L=ir(_,["enabled","anonymousActionType","store"]);let E;try{E=(c!=null?c:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(S){}if(!E)return c&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),h(u,f,d);const j=M(m,E,L),{connection:w}=j,F=ir(j,["connection"]);let H=!0;d.setState=(S,g,x)=>{const V=u(S,g);if(!H)return V;const ce=x===void 0?{type:P||"anonymous"}:typeof x=="string"?{type:x}:x;return m===void 0?(w==null||w.send(ce,f()),V):(w==null||w.send(ar(K({},ce),{type:`${m}/${ce.type}`}),ar(K({},Z(L.name)),{[m]:d.getState()})),V)};const I=(...S)=>{const g=H;H=!1,u(...S),H=g},W=h(d.setState,f,d);if(F.type==="untracked"?w==null||w.init(W):(F.stores[F.store]=d,w==null||w.init(Object.fromEntries(Object.entries(F.stores).map(([S,g])=>[S,S===F.store?W:g.getState()])))),d.dispatchFromDevtools&&typeof d.dispatch=="function"){let S=!1;const g=d.dispatch;d.dispatch=(...x)=>{x[0].type==="__setState"&&!S&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),S=!0),g(...x)}}return w.subscribe(S=>{var g;switch(S.type){case"ACTION":if(typeof S.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return G(S.payload,x=>{if(x.type==="__setState"){if(m===void 0){I(x.state);return}Object.keys(x.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const V=x.state[m];if(V==null)return;JSON.stringify(d.getState())!==JSON.stringify(V)&&I(V);return}d.dispatchFromDevtools&&typeof d.dispatch=="function"&&d.dispatch(x)});case"DISPATCH":switch(S.payload.type){case"RESET":return I(W),m===void 0?w==null?void 0:w.init(d.getState()):w==null?void 0:w.init(Z(L.name));case"COMMIT":if(m===void 0){w==null||w.init(d.getState());return}return w==null?void 0:w.init(Z(L.name));case"ROLLBACK":return G(S.state,x=>{if(m===void 0){I(x),w==null||w.init(d.getState());return}I(x[m]),w==null||w.init(Z(L.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return G(S.state,x=>{if(m===void 0){I(x);return}JSON.stringify(d.getState())!==JSON.stringify(x[m])&&I(x[m])});case"IMPORT_STATE":{const{nextLiftedState:x}=S.payload,V=(g=x.computedStates.slice(-1)[0])==null?void 0:g.state;if(!V)return;I(m===void 0?V:V[m]),w==null||w.send(null,x);return}case"PAUSE_RECORDING":return H=!H}return}}),W},G=(h,y)=>{let u;try{u=JSON.parse(h)}catch(f){console.error("[zustand devtools middleware] Could not parse the received json",f)}u!==void 0&&y(u)},X=h=>(y,u,f)=>{const d=f.subscribe;return f.subscribe=(P,m,L)=>{let E=P;if(m){const w=(L==null?void 0:L.equalityFn)||Object.is;let F=P(f.getState());E=H=>{const I=P(H);if(!w(F,I)){const W=F;m(F=I,W)}},L!=null&&L.fireImmediately&&m(F,F)}return d(E)},h(y,u,f)},U=null,N=(h,y)=>(...u)=>Object.assign({},h,y(...u));function B(h,y){let u;try{u=h()}catch(d){return}return{getItem:d=>{var c;const P=L=>L===null?null:JSON.parse(L,y==null?void 0:y.reviver),m=(c=u.getItem(d))!=null?c:null;return m instanceof Promise?m.then(P):P(m)},setItem:(d,c)=>u.setItem(d,JSON.stringify(c,y==null?void 0:y.replacer)),removeItem:d=>u.removeItem(d)}}const l=h=>y=>{try{const u=h(y);return u instanceof Promise?u:{then(f){return l(f)(u)},catch(f){return this}}}catch(u){return{then(f){return this},catch(f){return l(f)(u)}}}},O=(h,y)=>(u,f,d)=>{let c=K({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:j=>j,version:0,merge:(j,S)=>K(K({},S),j)},y),P=!1;const m=new Set,L=new Set;let E;try{E=c.getStorage()}catch(j){}if(!E)return h((...j)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),u(...j)},f,d);const w=l(c.serialize),F=()=>{const j=c.partialize(K({},f()));let S;const g=w({state:j,version:c.version}).then(x=>E.setItem(c.name,x)).catch(x=>{S=x});if(S)throw S;return g},H=d.setState;d.setState=(j,S)=>{H(j,S),F()};const I=h((...j)=>{u(...j),F()},f,d);let W;const _=()=>{var j;if(!E)return;P=!1,m.forEach(g=>g(f()));const S=((j=c.onRehydrateStorage)==null?void 0:j.call(c,f()))||void 0;return l(E.getItem.bind(E))(c.name).then(g=>{if(g)return c.deserialize(g)}).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==c.version){if(c.migrate)return c.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var x;return W=c.merge(g,(x=f())!=null?x:I),u(W,!0),F()}).then(()=>{S==null||S(W,void 0),P=!0,L.forEach(g=>g(W))}).catch(g=>{S==null||S(void 0,g)})};return d.persist={setOptions:j=>{c=K(K({},c),j),j.getStorage&&(E=j.getStorage())},clearStorage:()=>{E==null||E.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>_(),hasHydrated:()=>P,onHydrate:j=>(m.add(j),()=>{m.delete(j)}),onFinishHydration:j=>(L.add(j),()=>{L.delete(j)})},_(),W||I},A=(h,y)=>(u,f,d)=>{let c=K({storage:B(()=>localStorage),partialize:_=>_,version:0,merge:(_,j)=>K(K({},j),_)},y),P=!1;const m=new Set,L=new Set;let E=c.storage;if(!E)return h((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),u(..._)},f,d);const w=()=>{const _=c.partialize(K({},f()));return E.setItem(c.name,{state:_,version:c.version})},F=d.setState;d.setState=(_,j)=>{F(_,j),w()};const H=h((..._)=>{u(..._),w()},f,d);let I;const W=()=>{var _,j;if(!E)return;P=!1,m.forEach(g=>{var x;return g((x=f())!=null?x:H)});const S=((j=c.onRehydrateStorage)==null?void 0:j.call(c,(_=f())!=null?_:H))||void 0;return l(E.getItem.bind(E))(c.name).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==c.version){if(c.migrate)return c.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var x;return I=c.merge(g,(x=f())!=null?x:H),u(I,!0),w()}).then(()=>{S==null||S(I,void 0),I=f(),P=!0,L.forEach(g=>g(I))}).catch(g=>{S==null||S(void 0,g)})};return d.persist={setOptions:_=>{c=K(K({},c),_),_.storage&&(E=_.storage)},clearStorage:()=>{E==null||E.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>W(),hasHydrated:()=>P,onHydrate:_=>(m.add(_),()=>{m.delete(_)}),onFinishHydration:_=>(L.add(_),()=>{L.delete(_)})},c.skipHydration||W(),I||H},C=(h,y)=>"getStorage"in y||"serialize"in y||"deserialize"in y?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),O(h,y)):A(h,y)}}]);
}());