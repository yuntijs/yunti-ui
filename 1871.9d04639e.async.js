!(function(){"use strict";var zn=Object.defineProperty,On=Object.defineProperties;var jn=Object.getOwnPropertyDescriptors;var Or=Object.getOwnPropertySymbols;var on=Object.prototype.hasOwnProperty,un=Object.prototype.propertyIsEnumerable;var an=(E,w,s)=>w in E?zn(E,w,{enumerable:!0,configurable:!0,writable:!0,value:s}):E[w]=s,de=(E,w)=>{for(var s in w||(w={}))on.call(w,s)&&an(E,s,w[s]);if(Or)for(var s of Or(w))un.call(w,s)&&an(E,s,w[s]);return E},Nr=(E,w)=>On(E,jn(w));var Gr=(E,w)=>{var s={};for(var i in E)on.call(E,i)&&w.indexOf(i)<0&&(s[i]=E[i]);if(E!=null&&Or)for(var i of Or(E))w.indexOf(i)<0&&un.call(E,i)&&(s[i]=E[i]);return s};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1871],{93405:function(E,w,s){s.d(w,{E_:function(){return oe},nc:function(){return D}});var i=s(50959),L=s(56264),m="https://unpkg.com",_="https://registry.npmmirror.com",A=function(g){var O=g.pkg,H=g.version,C=H===void 0?"latest":H,F=g.path,z=g.proxy;switch(z){case"unpkg":return(0,L.Z)(m,"".concat(O,"@").concat(C),F);default:return(0,L.Z)(_,O,C,"files",F)}},se=s(11527),oe=(0,i.createContext)(null),re=null,te=function(g){var O=g.pkg,H=g.version,C=g.path;return A({path:C,pkg:O,proxy:"aliyun",version:H})},D=function(){var g=(0,i.useContext)(oe);return g?(g==null?void 0:g.proxy)!=="custom"?function(O){var H=O.pkg,C=O.version,F=O.path;return A({path:F,pkg:H,proxy:g.proxy,version:C})}:(g==null?void 0:g.customCdnFn)||te:te},G=null},493:function(E,w,s){s.d(w,{Z:function(){return hr}});var i=s(35194),L=s(50446),m=s(24821),_=s(1226),A=s(50959),se=s(93405),oe=function(p){var d=document.createElement("link");return d.rel="stylesheet",d.href=p,d},re=(0,A.memo)(function(c){var p=c.url,d=(0,A.useRef)(!1);return(0,A.useEffect)(function(){if(!d.current){d.current=!0;var u=oe(p);document.head.append(u)}},[]),null}),te=re,D=s(86910),G,Q,g,O,H,C,F,z,j=function(p){var d=p.css,u=p.token,h=p.isDarkMode,T=(0,_.F4)(G||(G=(0,D.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:d(Q||(Q=(0,D.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:d(g||(g=(0,D.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:d(O||(O=(0,D.Z)([`
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
    `])),u.colorFill,u.motionEaseOut),gradientAnimation:d(H||(H=(0,D.Z)([`
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
    `])),u.gold,u.magenta,u.geekblue,u.cyan,T),markdown:d(C||(C=(0,D.Z)([`
      --lobe-markdown-font-size: 16px;
      --lobe-markdown-header-multiple: 1;
      --lobe-markdown-margin-multiple: 1.5;

      position: relative;

      width: 100%;

      font-size: var(--lobe-markdown-font-size);
      line-height: 1.6;
      word-break: break-word;

      p {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        line-height: 1.6;
        letter-spacing: 0.02em;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin-block: max(
          calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.5em),
          var(--lobe-markdown-font-size)
        );
        font-weight: 600;
      }

      h1 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h2 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple))
        );
      }

      h3 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h4 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
        );
      }

      h5 {
        font-size: calc(var(--lobe-markdown-font-size) * 1);
      }

      li {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      ul,
      ol {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline-start: 1em;
        list-style-position: outside;

        li {
          margin-inline-start: 1em;
        }
      }

      ol {
        li {
          &::marker {
            color: `,`;
          }
        }
      }

      ul {
        list-style-type: none;

        li {
          &::before {
            content: '-';
            display: inline-block;
            margin-inline: -1em 0.5em;
            color: `,`;
          }
        }
      }

      strong {
        font-weight: 600;
      }

      code:not(:has(span)) {
        display: inline-block;

        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        line-height: 1;
        word-break: break-word;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      kbd {
        cursor: default;
        user-select: none;

        transform: translateY(-0.2em);

        display: inline-block;

        min-width: 1em;
        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        font-weight: 500;
        line-height: 1;
        color: `,`;
        text-align: center;

        background: `,`;
        border: 1px solid `,`;
        border-radius: 0.25em;
        box-shadow: 0 2px 0 1px `,`;

        &:hover {
          transform: translateY(0);
          box-shadow: none;
        }
      }

      blockquote {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline: 0;
        padding-block: 0;
        padding-inline: 1em;

        color: `,`;

        border-inline-start: solid 4px `,`;
      }

      hr {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);

        border-color: `,`;
        border-style: dashed;
        border-width: 1px;
        border-block-start: none;
        border-inline-start: none;
        border-inline-end: none;
      }

      details {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        padding-block: 0.75em;
        padding-inline: 1em;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        summary {
          cursor: pointer;
          display: flex;
          align-items: center;
          list-style: none;

          &::before {
            content: '';

            position: absolute;
            inset-inline-end: 1.25em;
            transform: rotateZ(-45deg);

            display: block;

            width: 0.4em;
            height: 0.4em;

            font-family: `,`;

            border-block-end: 1.5px solid `,`;
            border-inline-end: 1.5px solid `,`;

            transition: transform 200ms `,`;
          }
        }

        &[open] {
          padding-block-end: 0;

          summary {
            padding-block-end: 12px;
            border-block-end: 1px dashed `,`;

            &::before {
              transform: rotateZ(45deg);
            }
          }
        }
      }

      img,
      video {
        max-width: 100%;
      }

      table {
        overflow: hidden;
        display: table;
        border-spacing: 0;
        border-collapse: collapse;

        box-sizing: border-box;
        width: 100%;
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

        text-align: start;
        overflow-wrap: break-word;

        background: `,`;
        border-radius: `,`px;
        box-shadow: inset 0 0 0 1px `,`;
      }

      thead {
        background: `,`;
      }

      tr {
        box-shadow: inset 0 -1px 0 `,`;
      }

      th,
      td {
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
        vertical-align: top;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;

        > code {
          padding: 0 !important;

          font-family: `,`;
          font-size: 0.875em;
          line-height: 1.6;

          border: none !important;
        }
      }
    `])),u.colorTextSecondary,u.colorTextDescription,u.fontFamilyCode,u.colorFillSecondary,u.colorBorderSecondary,u.borderRadius,u.fontFamily,u.colorBgLayout,h?u.colorText:"#333",h?u.colorTextSecondary:"#000",h?u.colorTextSecondary:"#000",u.colorTextSecondary,u.colorBorder,u.colorBorderSecondary,u.colorFillTertiary,u.colorBorderSecondary,u.borderRadius,u.fontFamily,u.colorTextSecondary,u.colorTextSecondary,u.motionEaseOut,u.colorBorder,u.colorFillTertiary,u.borderRadius,u.colorBorderSecondary,u.colorFillQuaternary,u.colorBorderSecondary,u.fontFamilyCode),noScrollbar:d(F||(F=(0,D.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:d(z||(z=(0,D.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),u.colorTextSecondary,u.colorText)}},y=s(30309),v=s(36471),f=s(68185),o=s(30994);function B(c,p,d){var u=-1,h=c.length;p<0&&(p=-p>h?0:h+p),d=d>h?h:d,d<0&&(d+=h),h=p>d?0:d-p>>>0,p>>>=0;for(var T=Array(h);++u<h;)T[u]=c[u+p];return T}var R=B;function X(c,p,d){var u=c.length;return d=d===void 0?u:d,!p&&d>=u?c:R(c,p,d)}var J=X,P="\\ud800-\\udfff",ne="\\u0300-\\u036f",ae="\\ufe20-\\ufe2f",V="\\u20d0-\\u20ff",q=ne+ae+V,U="\\ufe0e\\ufe0f",Z="\\u200d",I=RegExp("["+Z+P+q+U+"]");function x(c){return I.test(c)}var k=x;function ue(c){return c.split("")}var xe=ue,Be="\\ud800-\\udfff",_e="\\u0300-\\u036f",vr="\\ufe20-\\ufe2f",Ve="\\u20d0-\\u20ff",$e=_e+vr+Ve,me="\\ufe0e\\ufe0f",qe="["+Be+"]",Ze="["+$e+"]",Ee="\\ud83c[\\udffb-\\udfff]",er="(?:"+Ze+"|"+Ee+")",we="[^"+Be+"]",rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Oe="[\\ud800-\\udbff][\\udc00-\\udfff]",Ne="\\u200d",De=er+"?",Ge="["+me+"]?",Je="(?:"+Ne+"(?:"+[we,rr,Oe].join("|")+")"+Ge+De+")*",nr=Ge+De+Je,tr="(?:"+[we+Ze+"?",Ze,rr,Oe,qe].join("|")+")",yr=RegExp(Ee+"(?="+Ee+")|"+tr+nr,"g");function ar(c){return c.match(yr)||[]}var xr=ar;function Ye(c){return k(c)?xr(c):xe(c)}var Sr=Ye;function wr(c){return function(p){p=(0,o.Z)(p);var d=k(p)?Sr(p):void 0,u=d?d[0]:p.charAt(0),h=d?J(d,1).join(""):p.slice(1);return u[c]()+h}}var Tr=wr,or=Tr("toUpperCase"),ir=or;function Qe(c){return ir((0,o.Z)(c).toLowerCase())}var ur=Qe,sr=s(51741),lr=(0,sr.Z)(function(c,p,d){return p=p.toLowerCase(),c+(d?ur(p):p)}),N=lr,K=s(73189),Te=function(p){var d,u=p.name,h=p.scale,T=p.appearance;return d={},(0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)(d,"".concat(u,"Bg"),h["".concat(T,"A")][1]),"".concat(u,"BgHover"),h["".concat(T,"A")][2]),"".concat(u,"Border"),h[T][4]),"".concat(u,"BorderSecondary"),h[T][3]),"".concat(u,"BorderHover"),h[T][5]),"".concat(u,"Hover"),h[T][10]),"".concat(u),h[T][9]),"".concat(u,"Active"),h[T][7]),"".concat(u,"TextHover"),h["".concat(T,"A")][10]),"".concat(u,"Text"),h["".concat(T,"A")][9]),(0,f.Z)(d,"".concat(u,"TextActive"),h["".concat(T,"A")][7])},cr=function(p){var d=p.name,u=p.scale,h=p.appearance,T={},ee=(0,v.Z)(u[h].entries()),pe;try{for(ee.s();!(pe=ee.n()).done;){var be=(0,y.Z)(pe.value,2),Pe=be[0],le=be[1];Pe===0||Pe===12||(T["".concat(d).concat(Pe)]=le)}}catch(Ke){ee.e(Ke)}finally{ee.f()}var Re=(0,v.Z)(u["".concat(h,"A")].entries()),ce;try{for(Re.s();!(ce=Re.n()).done;){var Xe=(0,y.Z)(ce.value,2),Fe=Xe[0],We=Xe[1];Fe===0||Fe===12||(T["".concat(d).concat(Fe,"A")]=We)}}catch(Ke){Re.e(Ke)}finally{Re.f()}return(0,i.Z)((0,i.Z)({},T),Te({appearance:h,name:d,scale:u}))},Le=function(p){for(var d=p.isDarkMode,u={},h=0,T=Object.entries(K._);h<T.length;h++){var ee=(0,y.Z)(T[h],2),pe=ee[0],be=ee[1];u=(0,i.Z)((0,i.Z)({},u),cr({appearance:d?"dark":"light",name:N(pe),scale:be}))}return u},fe=function(p){var d=p.type,u=p.scale,h=p.appearance,T=ur(d),ee=h==="dark";return(0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)({},"color".concat(T,"Bg"),u[h][1]),"color".concat(T,"BgHover"),u[h][2]),"color".concat(T,"Border"),u[h][4]),"color".concat(T,"BorderHover"),u[h][ee?5:3]),"color".concat(T,"Hover"),u[h][ee?10:8]),"color".concat(T),u[h][9]),"color".concat(T,"Active"),u[h][ee?7:10]),"color".concat(T,"TextHover"),u[h][ee?10:8]),"color".concat(T,"Text"),u[h][9]),"color".concat(T,"TextActive"),u[h][ee?7:10])},dr=function(p){var d=p.scale,u=p.appearance;return{colorBgContainer:u==="dark"?d[u][1]:d[u][0],colorBgElevated:u==="dark"?d[u][2]:d[u][0],colorBgLayout:u==="dark"?d[u][0]:d[u][1],colorBgMask:d.lightA[8],colorBgSpotlight:d[u][5],colorBorder:d[u][4],colorBorderSecondary:d[u][3],colorFill:d["".concat(u,"A")][3],colorFillQuaternary:d["".concat(u,"A")][0],colorFillSecondary:d["".concat(u,"A")][2],colorFillTertiary:d["".concat(u,"A")][1],colorText:d[u][12],colorTextQuaternary:d[u][6],colorTextSecondary:d[u][10],colorTextTertiary:d[u][8]}},jr={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},Ir=fe({appearance:"dark",scale:K._.bnw,type:"Primary"}),fr=dr({appearance:"dark",scale:K._.gray}),Cr=fe({appearance:"dark",scale:K._.lime,type:"Success"}),Jr=fe({appearance:"dark",scale:K._.gold,type:"Warning"}),Yr=fe({appearance:"dark",scale:K._.red,type:"Error"}),He=fe({appearance:"dark",scale:K._.blue,type:"Info"}),Qr=(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},Ir),fr),Cr),Jr),Yr),He),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:He.colorInfoText,colorLinkActive:He.colorInfoTextActive,colorLinkHover:He.colorInfoTextHover,colorTextLightSolid:fr.colorBgLayout}),Xr=Qr,Rr=function(p,d){var u=p.primaryColor,h=p.neutralColor,T={},ee={},pe=K._[u];pe&&(T=fe({appearance:"dark",scale:pe,type:"Primary"}));var be=jr[h];return be&&(ee=dr({appearance:"dark",scale:be})),(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},d),Xr),T),ee)},Fr=fe({appearance:"light",scale:K._.bnw,type:"Primary"}),Zr=dr({appearance:"light",scale:K._.gray}),Er=fe({appearance:"light",scale:K._.green,type:"Success"}),Lr=fe({appearance:"light",scale:K._.orange,type:"Warning"}),Kr=fe({appearance:"light",scale:K._.volcano,type:"Error"}),pr=fe({appearance:"light",scale:K._.geekblue,type:"Info"}),br=(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},Fr),Zr),Er),Lr),Kr),pr),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:pr.colorInfoText,colorLinkActive:pr.colorInfoTextActive,colorLinkHover:pr.colorInfoTextHover,colorTextLightSolid:Zr.colorBgLayout}),Pr=br,Ue=function(p,d){var u=p.primaryColor,h=p.neutralColor,T={},ee={},pe=K._[u];pe&&(T=fe({appearance:"light",scale:pe,type:"Primary"}));var be=jr[h];return be&&(ee=dr({appearance:"light",scale:be})),(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},d),Pr),T),ee)},mr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',Mr='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',kr='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',_r="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",Dr={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[Mr,kr,mr].join(","),fontFamilyCode:[_r,kr,mr].join(",")},Hr=function(p){var d=p.neutralColor,u=p.appearance,h=p.primaryColor,T=u==="dark";return{algorithm:T?Rr:Ue,token:(0,i.Z)((0,i.Z)({},Dr),{},{neutralColor:d,primaryColor:h})}},je=s(79366),Ar,Ur=function(c){return(0,_.iv)(Ar||(Ar=(0,D.Z)([`
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
`])),c.prefixCls,(0,je.XV)(c.colorPrimary),c.prefixCls,c.prefixCls,(0,je.XV)(c.colorPrimary),(0,je.XV)(c.colorPrimary),(0,je.XV)(c.colorPrimaryActive),c.prefixCls,c.colorBgLayout,c.colorText,c.borderRadiusSM,c.prefixCls,c.colorText,c.prefixCls,c.colorBgContainer,c.prefixCls,c.prefixCls,c.prefixCls,c.stylish.blur,c.borderRadiusLG,(0,je.m4)(c.colorBgMask,.1),c.prefixCls,c.colorBorderSecondary,c.boxShadowSecondary,c.prefixCls,c.colorBorderSecondary,c.borderRadius,c.boxShadowSecondary,c.prefixCls)},zr,Ce=function(c){return(0,_.iv)(zr||(zr=(0,D.Z)([`
  :root {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;
  }

  html {
    overscroll-behavior: none;
    color-scheme: `,`;
  }

  body {
    overflow: hidden auto;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    word-wrap: break-word;
    vertical-align: baseline;

    background-color: `,`;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    scrollbar-color: `,` transparent;
    scrollbar-width: thin;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`])),c.isDarkMode?"dark":"light",c.fontFamily,c.fontSize,c.colorTextBase,c.colorBgLayout,c.fontFamilyCode,c.fontFamilyCode,c.yellow9,c.colorFill)},Wr=(0,_.vJ)(function(c){var p=c.theme;return[Ce(p),Ur(p)]}),he=Wr,Ie=s(11527),gr=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],ke=(0,A.memo)(function(c){var p=c.children,d=c.customStylish,u=c.customToken,h=c.enableWebfonts,T=h===void 0?!0:h,ee=c.enableGlobalStyle,pe=ee===void 0?!0:ee,be=c.webfonts,Pe=c.customTheme,le=Pe===void 0?{}:Pe,Re=c.className,ce=c.style,Xe=(0,L.Z)(c,gr),Fe=(0,se.nc)(),We=be||[Fe({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),Fe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),Fe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),Fe({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],Ke=(0,A.useCallback)(function(Se){return(0,i.Z)((0,i.Z)({},j(Se)),d==null?void 0:d(Se))},[d]),Me=(0,A.useCallback)(function(Se){return(0,i.Z)((0,i.Z)({},Le(Se)),u==null?void 0:u(Se))},[u]),Br=(0,A.useCallback)(function(Se){return Hr({appearance:Se,neutralColor:le.neutralColor,primaryColor:le.primaryColor})},[le.primaryColor,le.neutralColor]);return(0,Ie.jsxs)(Ie.Fragment,{children:[T&&(We==null?void 0:We.length)>0&&We.map(function(Se){return(0,Ie.jsx)(te,{url:Se},Se)}),(0,Ie.jsx)(_.V9,{speedy:!0,children:(0,Ie.jsxs)(_.f6,(0,i.Z)((0,i.Z)({customStylish:Ke,customToken:Me},Xe),{},{theme:Br,children:[pe&&(0,Ie.jsx)(he,{}),(0,Ie.jsx)(m.Z,{className:Re,style:(0,i.Z)({minHeight:"inherit",width:"inherit"},ce),children:p})]}))})]})});ke.displayName="LobeThemeProvider";var hr=ke},6103:function(E,w,s){var i=s(80349),L=s(50959),m=s(11527),_=(0,L.memo)(function(){return(0,m.jsxs)(i.ql,{children:[(0,m.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,m.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,m.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,m.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,m.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,m.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,m.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,m.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,m.jsx)("meta",{content:"#000000",name:"theme-color"})]})});w.Z=_},69206:function(E,w,s){s.d(w,{f:function(){return m}});var i=s(47679),L=s(6522),m=(0,i.Ue)()((0,L.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(E){E.exports=function w(s,i){if(s===i)return!0;if(s&&i&&typeof s=="object"&&typeof i=="object"){if(s.constructor!==i.constructor)return!1;var L,m,_;if(Array.isArray(s)){if(L=s.length,L!=i.length)return!1;for(m=L;m--!==0;)if(!w(s[m],i[m]))return!1;return!0}if(s.constructor===RegExp)return s.source===i.source&&s.flags===i.flags;if(s.valueOf!==Object.prototype.valueOf)return s.valueOf()===i.valueOf();if(s.toString!==Object.prototype.toString)return s.toString()===i.toString();if(_=Object.keys(s),L=_.length,L!==Object.keys(i).length)return!1;for(m=L;m--!==0;)if(!Object.prototype.hasOwnProperty.call(i,_[m]))return!1;for(m=L;m--!==0;){var A=_[m];if(!w(s[A],i[A]))return!1}return!0}return s!==s&&i!==i}},79366:function(E,w,s){s.d(w,{XV:function(){return pn},m4:function(){return T}});var i=s(91010),L=s(50269),m=s(62968);function _(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,(0,m.Z)(e,r)}var A=s(72693);function se(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch(r){return typeof e=="function"}}var oe=s(22935);function re(e,r,n){if((0,oe.Z)())return Reflect.construct.apply(null,arguments);var t=[null];t.push.apply(t,r);var a=new(e.bind.apply(e,t));return n&&(0,m.Z)(a,n.prototype),a}function te(e){var r=typeof Map=="function"?new Map:void 0;return te=function(t){if(t===null||!se(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r!="undefined"){if(r.has(t))return r.get(t);r.set(t,a)}function a(){return re(t,arguments,(0,A.Z)(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),(0,m.Z)(a,t)},te(e)}function D(){var e;return e=arguments.length-1,e<0||arguments.length<=e?void 0:arguments[e]}function G(e){return-e}function Q(e,r){return e+r}function g(e,r){return e-r}function O(e,r){return e*r}function H(e,r){return e/r}function C(){return Math.max.apply(Math,arguments)}function F(){return Math.min.apply(Math,arguments)}function z(){return Array.of.apply(Array,arguments)}var j={symbols:{"*":{infix:{symbol:"*",f:O,notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"*",regSymbol:"\\*"},"/":{infix:{symbol:"/",f:H,notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"/",regSymbol:"/"},"+":{infix:{symbol:"+",f:Q,notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"+",f:D,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"+",regSymbol:"\\+"},"-":{infix:{symbol:"-",f:g,notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"-",f:G,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"-",regSymbol:"-"},",":{infix:{symbol:",",f:z,notation:"infix",precedence:1,rightToLeft:0,argCount:2},symbol:",",regSymbol:","},"(":{prefix:{symbol:"(",f:D,notation:"prefix",precedence:0,rightToLeft:0,argCount:1},symbol:"(",regSymbol:"\\("},")":{postfix:{symbol:")",f:void 0,notation:"postfix",precedence:0,rightToLeft:0,argCount:1},symbol:")",regSymbol:"\\)"},min:{func:{symbol:"min",f:F,notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"min",regSymbol:"min\\b"},max:{func:{symbol:"max",f:C,notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"max",regSymbol:"max\\b"}}},y=null,v={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function f(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=r[0],a=[],l;for(l=1;l<r.length;l+=1)a.push(r[l]);return a.forEach(function(b){t=t.replace(/%[a-z]/,b)}),t}var o=function(e){_(r,e);function r(n){var t;if(!0)t=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this;else var a,l,b;return(0,L.Z)(t)}return r}(te(Error)),B=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function R(e){var r={};return r.symbols=e?_extends({},y.symbols,e.symbols):_extends({},y.symbols),r}function X(e,r){var n,t=e.pop();return r.push(t.f.apply(t,(n=[]).concat.apply(n,r.splice(-t.argCount)))),t.precedence}function J(e,r){var n=R(r),t,a=[n.symbols["("].prefix],l=[],b=new RegExp("\\d+(?:\\.\\d+)?|"+Object.keys(n.symbols).map(function(ge){return n.symbols[ge]}).sort(function(ge,ze){return ze.symbol.length-ge.symbol.length}).map(function(ge){return ge.regSymbol}).join("|")+"|(\\S)","g");b.lastIndex=0;var S=!1;do{t=b.exec(e);var M=t||[")",void 0],$=M[0],ie=M[1],W=n.symbols[$],Y=W&&!W.prefix&&!W.func,ve=!W||!W.postfix&&!W.infix;if(ie||(S?ve:Y))throw new o(37,t?t.index:e.length,e);if(S){var ye=W.postfix||W.infix;do{var Ae=a[a.length-1];if((ye.precedence-Ae.precedence||Ae.rightToLeft)>0)break}while(X(a,l));S=ye.notation==="postfix",ye.symbol!==")"&&(a.push(ye),S&&X(a,l))}else if(W){if(a.push(W.prefix||W.func),W.func&&(t=b.exec(e),!t||t[0]!=="("))throw new o(38,t?t.index:e.length,e)}else l.push(+$),S=!0}while(t&&a.length);if(a.length)throw new o(39,t?t.index:e.length,e);if(t)throw new o(40,t?t.index:e.length,e);return l.pop()}function P(e){return e.split("").reverse().join("")}function ne(e,r){var n=P(e),t=n.match(B);if(t&&!t.every(function(l){return l===t[0]}))throw new o(41);var a=P(n.replace(B,""));return""+J(a,r)+(t?P(t[0]):"")}var ae=/--[\S]*/g;function V(e,r){if(!e||!e.match(ae))throw new o(73);var n;if(typeof document!="undefined"&&document.documentElement!==null&&(n=getComputedStyle(document.documentElement).getPropertyValue(e)),n)return n.trim();if(r)return r;throw new o(74)}function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}var U=null;function Z(e,r){if(!e)return r.toLowerCase();var n=e.split("-");if(n.length>1)return n.splice(1,0,r),n.reduce(function(a,l){return""+a+q(l)});var t=e.replace(/([a-z])([A-Z])/g,"$1"+r+"$2");return e===t?""+e+r:t}function I(e,r){for(var n={},t=0;t<r.length;t+=1)(r[t]||r[t]===0)&&(n[Z(e,U[t])]=r[t]);return n}function x(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];var a=n[0],l=n[1],b=l===void 0?a:l,S=n[2],M=S===void 0?a:S,$=n[3],ie=$===void 0?b:$,W=[a,b,M,ie];return I(e,W)}function k(e,r){return e.substr(-r.length)===r}var ue=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function xe(e){if(typeof e!="string")return e;var r=e.match(ue);return r?parseFloat(e):e}var Be=function(r){return function(n,t){t===void 0&&(t="16px");var a=n,l=t;if(typeof n=="string"){if(!k(n,"px"))throw new o(69,r,n);a=xe(n)}if(typeof t=="string"){if(!k(t,"px"))throw new o(70,r,t);l=xe(t)}if(typeof a=="string")throw new o(71,n,r);if(typeof l=="string")throw new o(72,t,r);return""+a/l+r}},_e=Be,vr=_e("em"),Ve=null,$e=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function me(e){if(typeof e!="string")return[e,""];var r=e.match($e);return r?[parseFloat(e),r[2]]:[e,void 0]}function qe(e,r){if(typeof e!="object"||e===null)throw new o(75,typeof e);var n={};return Object.keys(e).forEach(function(t){typeof e[t]=="object"&&e[t]!==null?n[t]=qe(e[t],r):!r||r&&(r===t||r.indexOf(t)>=0)?n[t]=e[t]+" !important":n[t]=e[t]}),n}var Ze={minorSecond:1.067,majorSecond:1.125,minorThird:1.2,majorThird:1.25,perfectFourth:1.333,augFourth:1.414,perfectFifth:1.5,minorSixth:1.6,goldenSection:1.618,majorSixth:1.667,minorSeventh:1.778,majorSeventh:1.875,octave:2,majorTenth:2.5,majorEleventh:2.667,majorTwelfth:3,doubleOctave:4};function Ee(e){return Ze[e]}function er(e,r,n){if(r===void 0&&(r="1em"),n===void 0&&(n=1.333),typeof e!="number")throw new o(42);if(typeof n=="string"&&!Ze[n])throw new o(43);var t=typeof r=="string"?me(r):[r,""],a=t[0],l=t[1],b=typeof n=="string"?Ee(n):n;if(typeof a=="string")throw new o(44,r);return""+a*Math.pow(b,e)+(l||"")}var we=_e("rem"),rr=null,Oe=16;function Ne(e){var r=me(e);if(r[1]==="px")return parseFloat(e);if(r[1]==="%")return parseFloat(e)/100*Oe;throw new o(78,r[1])}function De(){if(typeof document!="undefined"&&document.documentElement!==null){var e=getComputedStyle(document.documentElement).fontSize;return e?Ne(e):Oe}return Oe}function Ge(e,r){var n=me(e);if(n[1]!=="rem"&&n[1]!=="")throw new o(77,n[1]);var t=r?Ne(r):De();return n[0]*t+"px"}var Je={back:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",circ:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",cubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",expo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",quad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",quart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",quint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",sine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)"};function nr(e){return Je[e.toLowerCase().trim()]}var tr={back:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",circ:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",cubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",expo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",quad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",quart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",quint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",sine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"};function yr(e){return tr[e.toLowerCase().trim()]}var ar={back:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",cubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",circ:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",expo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",quad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",quart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",quint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",sine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)"};function xr(e){return ar[e.toLowerCase().trim()]}function Ye(e,r,n,t){n===void 0&&(n="320px"),t===void 0&&(t="1200px");var a=me(e),l=a[0],b=a[1],S=me(r),M=S[0],$=S[1],ie=me(n),W=ie[0],Y=ie[1],ve=me(t),ye=ve[0],Ae=ve[1];if(typeof W!="number"||typeof ye!="number"||!Y||!Ae||Y!==Ae)throw new o(47);if(typeof l!="number"||typeof M!="number"||b!==$)throw new o(48);if(b!==Y||$!==Ae)throw new o(76);var ge=(l-M)/(W-ye),ze=M-ge*ye;return"calc("+ze.toFixed(2)+(b||"")+" + "+(100*ge).toFixed(2)+"vw)"}function Sr(e){var r;e===void 0&&(e="&");var n=e+"::after";return r={},r[n]={clear:"both",content:'""',display:"table"},r}function wr(e){return e===void 0&&(e=0),{position:"absolute",top:e,right:e,bottom:e,left:e}}function Tr(e,r){r===void 0&&(r=1);var n={display:"inline-block",maxWidth:e||"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"};return r>1?_extends({},n,{WebkitBoxOrient:"vertical",WebkitLineClamp:r,display:"-webkit-box",whiteSpace:"normal"}):n}function or(e,r){var n=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=ir(e))||r&&e&&typeof e.length=="number"){n&&(e=n);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e,r){if(e){if(typeof e=="string")return Qe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qe(e,r)}}function Qe(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function ur(e,r,n){if(r===void 0&&(r="320px"),n===void 0&&(n="1200px"),!Array.isArray(e)&&typeof e!="object"||e===null)throw new o(49);if(Array.isArray(e)){for(var t={},a={},l=or(e),b;!(b=l()).done;){var S,M,$=b.value;if(!$.prop||!$.fromSize||!$.toSize)throw new o(50);a[$.prop]=$.fromSize,t["@media (min-width: "+r+")"]=_extends({},t["@media (min-width: "+r+")"],(S={},S[$.prop]=Ye($.fromSize,$.toSize,r,n),S)),t["@media (min-width: "+n+")"]=_extends({},t["@media (min-width: "+n+")"],(M={},M[$.prop]=$.toSize,M))}return _extends({},a,t)}else{var ie,W,Y;if(!e.prop||!e.fromSize||!e.toSize)throw new o(51);return Y={},Y[e.prop]=e.fromSize,Y["@media (min-width: "+r+")"]=(ie={},ie[e.prop]=Ye(e.fromSize,e.toSize,r,n),ie),Y["@media (min-width: "+n+")"]=(W={},W[e.prop]=e.toSize,W),Y}}var sr=/^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i,lr={woff:"woff",woff2:"woff2",ttf:"truetype",otf:"opentype",eot:"embedded-opentype",svg:"svg",svgz:"svg"};function N(e,r){return r?' format("'+lr[e]+'")':""}function K(e){return!!e.replace(/\s+/g," ").match(sr)}function Te(e,r,n){if(K(e))return'url("'+e+'")'+N(r[0],n);var t=r.map(function(a){return'url("'+e+"."+a+'")'+N(a,n)});return t.join(", ")}function cr(e){var r=e.map(function(n){return'local("'+n+'")'});return r.join(", ")}function Le(e,r,n,t){var a=[];return r&&a.push(cr(r)),e&&a.push(Te(e,n,t)),a.join(", ")}function fe(e){var r=e.fontFamily,n=e.fontFilePath,t=e.fontStretch,a=e.fontStyle,l=e.fontVariant,b=e.fontWeight,S=e.fileFormats,M=S===void 0?["eot","woff2","woff","ttf","svg"]:S,$=e.formatHint,ie=$===void 0?!1:$,W=e.localFonts,Y=W===void 0?[r]:W,ve=e.unicodeRange,ye=e.fontDisplay,Ae=e.fontVariationSettings,ge=e.fontFeatureSettings;if(!r)throw new o(55);if(!n&&!Y)throw new o(52);if(Y&&!Array.isArray(Y))throw new o(53);if(!Array.isArray(M))throw new o(54);var ze={"@font-face":{fontFamily:r,src:Le(n,Y,M,ie),unicodeRange:ve,fontStretch:t,fontStyle:a,fontVariant:l,fontWeight:b,fontDisplay:ye,fontVariationSettings:Ae,fontFeatureSettings:ge}};return JSON.parse(JSON.stringify(ze))}function dr(){return{textIndent:"101%",overflow:"hidden",whiteSpace:"nowrap"}}function jr(){return{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}}function Ir(e){return e===void 0&&(e=1.3),`
    @media only screen and (-webkit-min-device-pixel-ratio: `+e+`),
    only screen and (min--moz-device-pixel-ratio: `+e+`),
    only screen and (-o-min-device-pixel-ratio: `+e+`/1),
    only screen and (min-resolution: `+Math.round(e*96)+`dpi),
    only screen and (min-resolution: `+e+`dppx)
  `}function fr(e){for(var r="",n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];for(var l=0;l<e.length;l+=1)if(r+=e[l],l===t.length-1&&t[l]){var b=t.filter(function(S){return!!S});b.length>1?(r=r.slice(0,-1),r+=", "+t[l]):b.length===1&&(r+=""+t[l])}else t[l]&&(r+=t[l]+" ");return r.trim()}var Cr;function Jr(e){var r=e.colorStops,n=e.fallback,t=e.toDirection,a=t===void 0?"":t;if(!r||r.length<2)throw new o(56);return{backgroundColor:n||r[0].replace(/,\s+/g,",").split(" ")[0].replace(/,(?=\S)/g,", "),backgroundImage:fr(Cr||(Cr=_taggedTemplateLiteralLoose(["linear-gradient(","",")"])),a,r.join(", ").replace(/,(?=\S)/g,", "))}}function Yr(){var e;return[(e={html:{lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:"0"},main:{display:"block"},h1:{fontSize:"2em",margin:"0.67em 0"},hr:{boxSizing:"content-box",height:"0",overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{backgroundColor:"transparent"},"abbr[title]":{borderBottom:"none",textDecoration:"underline"}},e[`b,
    strong`]={fontWeight:"bolder"},e[`code,
    kbd,
    samp`]={fontFamily:"monospace, monospace",fontSize:"1em"},e.small={fontSize:"80%"},e[`sub,
    sup`]={fontSize:"75%",lineHeight:"0",position:"relative",verticalAlign:"baseline"},e.sub={bottom:"-0.25em"},e.sup={top:"-0.5em"},e.img={borderStyle:"none"},e[`button,
    input,
    optgroup,
    select,
    textarea`]={fontFamily:"inherit",fontSize:"100%",lineHeight:"1.15",margin:"0"},e[`button,
    input`]={overflow:"visible"},e[`button,
    select`]={textTransform:"none"},e[`button,
    html [type="button"],
    [type="reset"],
    [type="submit"]`]={WebkitAppearance:"button"},e[`button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner`]={borderStyle:"none",padding:"0"},e[`button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring`]={outline:"1px dotted ButtonText"},e.fieldset={padding:"0.35em 0.625em 0.75em"},e.legend={boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:"0",whiteSpace:"normal"},e.progress={verticalAlign:"baseline"},e.textarea={overflow:"auto"},e[`[type="checkbox"],
    [type="radio"]`]={boxSizing:"border-box",padding:"0"},e[`[type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button`]={height:"auto"},e['[type="search"]']={WebkitAppearance:"textfield",outlineOffset:"-2px"},e['[type="search"]::-webkit-search-decoration']={WebkitAppearance:"none"},e["::-webkit-file-upload-button"]={WebkitAppearance:"button",font:"inherit"},e.details={display:"block"},e.summary={display:"list-item"},e.template={display:"none"},e["[hidden]"]={display:"none"},e),{"abbr[title]":{textDecoration:"underline dotted"}}]}var He;function Qr(e){var r=e.colorStops,n=e.extent,t=n===void 0?"":n,a=e.fallback,l=e.position,b=l===void 0?"":l,S=e.shape,M=S===void 0?"":S;if(!r||r.length<2)throw new o(57);return{backgroundColor:a||r[0].split(" ")[0],backgroundImage:fr(He||(He=_taggedTemplateLiteralLoose(["radial-gradient(","","","",")"])),b,M,t,r.join(", "))}}function Xr(e,r,n,t,a){var l;if(n===void 0&&(n="png"),a===void 0&&(a="_2x"),!e)throw new o(58);var b=n.replace(/^\./,""),S=t?t+"."+b:""+e+a+"."+b;return l={backgroundImage:"url("+e+"."+b+")"},l[Ir()]=_extends({backgroundImage:"url("+S+")"},r?{backgroundSize:r}:{}),l}var Rr={easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeInCirc:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",easeInCubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",easeInExpo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",easeInQuad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",easeInQuart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)",easeOutBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",easeOutCubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",easeOutCirc:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",easeOutExpo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",easeOutQuad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",easeOutQuart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",easeInOutCirc:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",easeInOutCubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",easeInOutExpo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",easeInOutQuad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",easeInOutQuart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"};function Fr(e){return Rr[e]}function Zr(e){return Fr(e)}var Er=function(r,n,t){var a=""+t[0]+(t[1]||""),l=""+t[0]/2+(t[1]||""),b=""+n[0]+(n[1]||""),S=""+n[0]/2+(n[1]||"");switch(r){case"top":return"0 "+l+" "+b+" "+l;case"topLeft":return a+" "+b+" 0 0";case"left":return S+" "+a+" "+S+" 0";case"bottomLeft":return a+" 0 0 "+b;case"bottom":return b+" "+l+" 0 "+l;case"bottomRight":return"0 0 "+a+" "+b;case"right":return S+" 0 "+S+" "+a;case"topRight":default:return"0 "+a+" "+b+" 0"}},Lr=function(r,n){switch(r){case"top":case"bottomRight":return{borderBottomColor:n};case"right":case"bottomLeft":return{borderLeftColor:n};case"bottom":case"topLeft":return{borderTopColor:n};case"left":case"topRight":return{borderRightColor:n};default:throw new o(59)}};function Kr(e){var r=e.pointingDirection,n=e.height,t=e.width,a=e.foregroundColor,l=e.backgroundColor,b=l===void 0?"transparent":l,S=me(t),M=me(n);if(isNaN(M[0])||isNaN(S[0]))throw new o(60);return _extends({width:"0",height:"0",borderColor:b},Lr(r,a),{borderStyle:"solid",borderWidth:Er(r,M,S)})}function pr(e){e===void 0&&(e="break-word");var r=e==="break-word"?"break-all":e;return{overflowWrap:e,wordWrap:e,wordBreak:r}}function br(e){return Math.round(e*255)}function Pr(e,r,n){return br(e)+","+br(r)+","+br(n)}function Ue(e,r,n,t){if(t===void 0&&(t=Pr),r===0)return t(n,n,n);var a=(e%360+360)%360/60,l=(1-Math.abs(2*n-1))*r,b=l*(1-Math.abs(a%2-1)),S=0,M=0,$=0;a>=0&&a<1?(S=l,M=b):a>=1&&a<2?(S=b,M=l):a>=2&&a<3?(M=l,$=b):a>=3&&a<4?(M=b,$=l):a>=4&&a<5?(S=b,$=l):a>=5&&a<6&&(S=l,$=b);var ie=n-l/2,W=S+ie,Y=M+ie,ve=$+ie;return t(W,Y,ve)}var mr={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Mr(e){if(typeof e!="string")return e;var r=e.toLowerCase();return mr[r]?"#"+mr[r]:e}var kr=/^#[a-fA-F0-9]{6}$/,_r=/^#[a-fA-F0-9]{8}$/,Dr=/^#[a-fA-F0-9]{3}$/,Hr=/^#[a-fA-F0-9]{4}$/,je=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Ar=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Ur=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,zr=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Ce(e){if(typeof e!="string")throw new o(3);var r=Mr(e);if(r.match(kr))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(_r)){var n=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:n}}if(r.match(Dr))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(Hr)){var t=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:t}}var a=je.exec(r);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var l=Ar.exec(r.substring(0,50));if(l)return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10),alpha:parseFloat(""+l[4])>1?parseFloat(""+l[4])/100:parseFloat(""+l[4])};var b=Ur.exec(r);if(b){var S=parseInt(""+b[1],10),M=parseInt(""+b[2],10)/100,$=parseInt(""+b[3],10)/100,ie="rgb("+Ue(S,M,$)+")",W=je.exec(ie);if(!W)throw new o(4,r,ie);return{red:parseInt(""+W[1],10),green:parseInt(""+W[2],10),blue:parseInt(""+W[3],10)}}var Y=zr.exec(r.substring(0,50));if(Y){var ve=parseInt(""+Y[1],10),ye=parseInt(""+Y[2],10)/100,Ae=parseInt(""+Y[3],10)/100,ge="rgb("+Ue(ve,ye,Ae)+")",ze=je.exec(ge);if(!ze)throw new o(4,r,ge);return{red:parseInt(""+ze[1],10),green:parseInt(""+ze[2],10),blue:parseInt(""+ze[3],10),alpha:parseFloat(""+Y[4])>1?parseFloat(""+Y[4])/100:parseFloat(""+Y[4])}}throw new o(5)}function Wr(e){var r=e.red/255,n=e.green/255,t=e.blue/255,a=Math.max(r,n,t),l=Math.min(r,n,t),b=(a+l)/2;if(a===l)return e.alpha!==void 0?{hue:0,saturation:0,lightness:b,alpha:e.alpha}:{hue:0,saturation:0,lightness:b};var S,M=a-l,$=b>.5?M/(2-a-l):M/(a+l);switch(a){case r:S=(n-t)/M+(n<t?6:0);break;case n:S=(t-r)/M+2;break;default:S=(r-n)/M+4;break}return S*=60,e.alpha!==void 0?{hue:S,saturation:$,lightness:b,alpha:e.alpha}:{hue:S,saturation:$,lightness:b}}function he(e){return Wr(Ce(e))}var Ie=function(r){return r.length===7&&r[1]===r[2]&&r[3]===r[4]&&r[5]===r[6]?"#"+r[1]+r[3]+r[5]:r},gr=Ie;function ke(e){var r=e.toString(16);return r.length===1?"0"+r:r}function hr(e){return ke(Math.round(e*255))}function c(e,r,n){return gr("#"+hr(e)+hr(r)+hr(n))}function p(e,r,n){return Ue(e,r,n,c)}function d(e,r,n){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number")return p(e,r,n);if(typeof e=="object"&&r===void 0&&n===void 0)return p(e.hue,e.saturation,e.lightness);throw new o(1)}function u(e,r,n,t){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?p(e,r,n):"rgba("+Ue(e,r,n)+","+t+")";if(typeof e=="object"&&r===void 0&&n===void 0&&t===void 0)return e.alpha>=1?p(e.hue,e.saturation,e.lightness):"rgba("+Ue(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new o(2)}function h(e,r,n){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number")return gr("#"+ke(e)+ke(r)+ke(n));if(typeof e=="object"&&r===void 0&&n===void 0)return gr("#"+ke(e.red)+ke(e.green)+ke(e.blue));throw new o(6)}function T(e,r,n,t){if(typeof e=="string"&&typeof r=="number"){var a=Ce(e);return"rgba("+a.red+","+a.green+","+a.blue+","+r+")"}else{if(typeof e=="number"&&typeof r=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?h(e,r,n):"rgba("+e+","+r+","+n+","+t+")";if(typeof e=="object"&&r===void 0&&n===void 0&&t===void 0)return e.alpha>=1?h(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new o(7)}var ee=function(r){return typeof r.red=="number"&&typeof r.green=="number"&&typeof r.blue=="number"&&(typeof r.alpha!="number"||typeof r.alpha=="undefined")},pe=function(r){return typeof r.red=="number"&&typeof r.green=="number"&&typeof r.blue=="number"&&typeof r.alpha=="number"},be=function(r){return typeof r.hue=="number"&&typeof r.saturation=="number"&&typeof r.lightness=="number"&&(typeof r.alpha!="number"||typeof r.alpha=="undefined")},Pe=function(r){return typeof r.hue=="number"&&typeof r.saturation=="number"&&typeof r.lightness=="number"&&typeof r.alpha=="number"};function le(e){if(typeof e!="object")throw new o(8);if(pe(e))return T(e);if(ee(e))return h(e);if(Pe(e))return u(e);if(be(e))return d(e);throw new o(8)}function Re(e,r,n){return function(){var a=n.concat(Array.prototype.slice.call(arguments));return a.length>=r?e.apply(this,a):Re(e,r,a)}}function ce(e){return Re(e,e.length,[])}function Xe(e,r){if(r==="transparent")return r;var n=he(r);return le((0,i.Z)({},n,{hue:n.hue+parseFloat(e)}))}var Fe=ce(Xe),We=null;function Ke(e){if(e==="transparent")return e;var r=he(e);return le(_extends({},r,{hue:(r.hue+180)%360}))}function Me(e,r,n){return Math.max(e,Math.min(r,n))}function Br(e,r){if(r==="transparent")return r;var n=he(r);return le((0,i.Z)({},n,{lightness:Me(0,1,n.lightness-parseFloat(e))}))}var Se=ce(Br),In=null;function sn(e,r){if(r==="transparent")return r;var n=he(r);return le((0,i.Z)({},n,{saturation:Me(0,1,n.saturation-parseFloat(e))}))}var Rn=ce(sn),Fn=null;function $r(e){if(e==="transparent")return 0;var r=Ce(e),n=Object.keys(r).map(function(b){var S=r[b]/255;return S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)}),t=n[0],a=n[1],l=n[2];return parseFloat((.2126*t+.7152*a+.0722*l).toFixed(3))}function Vr(e,r){var n=$r(e),t=$r(r);return parseFloat((n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)).toFixed(2))}function Zn(e){return e==="transparent"?e:le(_extends({},he(e),{saturation:0}))}function En(e){if(typeof e=="object"&&typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number")return e.alpha&&typeof e.alpha=="number"?u({hue:e.hue,saturation:e.saturation,lightness:e.lightness,alpha:e.alpha}):d({hue:e.hue,saturation:e.saturation,lightness:e.lightness});throw new o(45)}function Ln(e){if(e==="transparent")return e;var r=Ce(e);return le(_extends({},r,{red:255-r.red,green:255-r.green,blue:255-r.blue}))}function ln(e,r){if(r==="transparent")return r;var n=he(r);return le((0,i.Z)({},n,{lightness:Me(0,1,n.lightness+parseFloat(e))}))}var Pn=ce(ln),Mn=null;function _n(e,r){var n=Vr(e,r);return{AA:n>=4.5,AALarge:n>=3,AAA:n>=7,AAALarge:n>=4.5}}function cn(e,r,n){if(r==="transparent")return n;if(n==="transparent")return r;if(e===0)return n;var t=Ce(r),a=(0,i.Z)({},t,{alpha:typeof t.alpha=="number"?t.alpha:1}),l=Ce(n),b=(0,i.Z)({},l,{alpha:typeof l.alpha=="number"?l.alpha:1}),S=a.alpha-b.alpha,M=parseFloat(e)*2-1,$=M*S===-1?M:M+S,ie=1+M*S,W=($/ie+1)/2,Y=1-W,ve={red:Math.floor(a.red*W+b.red*Y),green:Math.floor(a.green*W+b.green*Y),blue:Math.floor(a.blue*W+b.blue*Y),alpha:a.alpha*parseFloat(e)+b.alpha*(1-parseFloat(e))};return T(ve)}var dn=ce(cn),qr=dn;function fn(e,r){if(r==="transparent")return r;var n=Ce(r),t=typeof n.alpha=="number"?n.alpha:1,a=(0,i.Z)({},n,{alpha:Me(0,1,(t*100+parseFloat(e)*100)/100)});return T(a)}var Dn=ce(fn),Hn=null,en="#000",rn="#fff";function pn(e,r,n,t){r===void 0&&(r=en),n===void 0&&(n=rn),t===void 0&&(t=!0);var a=$r(e)>.179,l=a?r:n;return!t||Vr(e,l)>=4.5?l:a?en:rn}function Un(e){if(typeof e=="object"&&typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number")return typeof e.alpha=="number"?T({red:e.red,green:e.green,blue:e.blue,alpha:e.alpha}):h({red:e.red,green:e.green,blue:e.blue});throw new o(46)}function bn(e,r){if(r==="transparent")return r;var n=he(r);return le((0,i.Z)({},n,{saturation:Me(0,1,n.saturation+parseFloat(e))}))}var Wn=ce(bn),Bn=null;function mn(e,r){return r==="transparent"?r:le((0,i.Z)({},he(r),{hue:parseFloat(e)}))}var $n=ce(mn),Nn=null;function gn(e,r){return r==="transparent"?r:le((0,i.Z)({},he(r),{lightness:parseFloat(e)}))}var Gn=ce(gn),Jn=null;function hn(e,r){return r==="transparent"?r:le((0,i.Z)({},he(r),{saturation:parseFloat(e)}))}var Yn=ce(hn),Qn=null;function vn(e,r){return r==="transparent"?r:qr(parseFloat(e),"rgb(0, 0, 0)",r)}var Xn=ce(vn),Kn=null;function yn(e,r){return r==="transparent"?r:qr(parseFloat(e),"rgb(255, 255, 255)",r)}var Vn=ce(yn),qn=null;function xn(e,r){if(r==="transparent")return r;var n=Ce(r),t=typeof n.alpha=="number"?n.alpha:1,a=(0,i.Z)({},n,{alpha:Me(0,1,+(t*100-parseFloat(e)*100).toFixed(2)/100)});return T(a)}var et=ce(xn),rt=null;function nt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=Array.isArray(r[0]);if(!t&&r.length>8)throw new o(64);var a=r.map(function(l){if(t&&!Array.isArray(l)||!t&&Array.isArray(l))throw new o(65);if(Array.isArray(l)&&l.length>8)throw new o(66);return Array.isArray(l)?l.join(" "):l}).join(", ");return{animation:a}}function tt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return{backgroundImage:r.join(", ")}}function at(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return{background:r.join(", ")}}var Sn=null;function ot(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];if(typeof e=="string"&&Sn.indexOf(e)>=0){var a;return a={},a["border"+q(e)+"Width"]=n[0],a["border"+q(e)+"Style"]=n[1],a["border"+q(e)+"Color"]=n[2],a}else return n.unshift(e),{borderWidth:n[0],borderStyle:n[1],borderColor:n[2]}}function it(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return x.apply(void 0,["borderColor"].concat(r))}function ut(e,r){var n=q(e);if(!r&&r!==0)throw new o(62);if(n==="Top"||n==="Bottom"){var t;return t={},t["border"+n+"RightRadius"]=r,t["border"+n+"LeftRadius"]=r,t}if(n==="Left"||n==="Right"){var a;return a={},a["borderTop"+n+"Radius"]=r,a["borderBottom"+n+"Radius"]=r,a}throw new o(63)}function st(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return x.apply(void 0,["borderStyle"].concat(r))}function lt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return x.apply(void 0,["borderWidth"].concat(r))}function nn(e,r){var n=r?":"+r:"";return e(n)}function tn(e,r,n){if(!r)throw new o(67);if(e.length===0)return nn(r,null);for(var t=[],a=0;a<e.length;a+=1){if(n&&n.indexOf(e[a])<0)throw new o(68);t.push(nn(r,e[a]))}return t=t.join(","),t}var wn=null;function Tn(e){return"button"+e+`,
  input[type="button"]`+e+`,
  input[type="reset"]`+e+`,
  input[type="submit"]`+e}function ct(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return tn(r,Tn,wn)}function dt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return x.apply(void 0,["margin"].concat(r))}function ft(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return x.apply(void 0,["padding"].concat(r))}var Cn=null;function pt(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];return Cn.indexOf(e)>=0&&e?_extends({},x.apply(void 0,[""].concat(n)),{position:e}):x.apply(void 0,["",e].concat(n))}function bt(e,r){return r===void 0&&(r=e),{height:e,width:r}}var kn=null;function An(e){return'input[type="color"]'+e+`,
    input[type="date"]`+e+`,
    input[type="datetime"]`+e+`,
    input[type="datetime-local"]`+e+`,
    input[type="email"]`+e+`,
    input[type="month"]`+e+`,
    input[type="number"]`+e+`,
    input[type="password"]`+e+`,
    input[type="search"]`+e+`,
    input[type="tel"]`+e+`,
    input[type="text"]`+e+`,
    input[type="time"]`+e+`,
    input[type="url"]`+e+`,
    input[type="week"]`+e+`,
    input:not([type])`+e+`,
    textarea`+e}function mt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return tn(r,An,kn)}function gt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];if(Array.isArray(r[0])&&r.length===2){var t=r[1];if(typeof t!="string")throw new o(61);var a=r[0].map(function(l){return l+" "+t}).join(", ");return{transition:a}}else return{transition:r.join(", ")}}},2179:function(E,w,s){var i=s(50959),L=s(4322);function m(D,G){return D===G&&(D!==0||1/D===1/G)||D!==D&&G!==G}var _=typeof Object.is=="function"?Object.is:m,A=L.useSyncExternalStore,se=i.useRef,oe=i.useEffect,re=i.useMemo,te=i.useDebugValue;w.useSyncExternalStoreWithSelector=function(D,G,Q,g,O){var H=se(null);if(H.current===null){var C={hasValue:!1,value:null};H.current=C}else C=H.current;H=re(function(){function z(o){if(!j){if(j=!0,y=o,o=g(o),O!==void 0&&C.hasValue){var B=C.value;if(O(B,o))return v=B}return v=o}if(B=v,_(y,o))return B;var R=g(o);return O!==void 0&&O(B,R)?B:(y=o,v=R)}var j=!1,y,v,f=Q===void 0?null:Q;return[function(){return z(G())},f===null?void 0:function(){return z(f())}]},[G,Q,g,O]);var F=A(D,H[0],H[1]);return oe(function(){C.hasValue=!0,C.value=F},[F]),te(F),F}},7231:function(E,w,s){E.exports=s(2179)},36471:function(E,w,s){s.d(w,{Z:function(){return L}});var i=s(50666);function L(m,_){var A=typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(!A){if(Array.isArray(m)||(A=(0,i.Z)(m))||_&&m&&typeof m.length=="number"){A&&(m=A);var se=0,oe=function(){};return{s:oe,n:function(){return se>=m.length?{done:!0}:{done:!1,value:m[se++]}},e:function(Q){throw Q},f:oe}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var re=!0,te=!1,D;return{s:function(){A=A.call(m)},n:function(){var Q=A.next();return re=Q.done,Q},e:function(Q){te=!0,D=Q},f:function(){try{!re&&A.return!=null&&A.return()}finally{if(te)throw D}}}}},66711:function(E,w,s){var i=s(99615),L=i.Z.Symbol;w.Z=L},28019:function(E,w){function s(i,L){for(var m=-1,_=i==null?0:i.length,A=Array(_);++m<_;)A[m]=L(i[m],m,i);return A}w.Z=s},33918:function(E,w,s){s.d(w,{Z:function(){return C}});var i=s(66711),L=Object.prototype,m=L.hasOwnProperty,_=L.toString,A=i.Z?i.Z.toStringTag:void 0;function se(F){var z=m.call(F,A),j=F[A];try{F[A]=void 0;var y=!0}catch(f){}var v=_.call(F);return y&&(z?F[A]=j:delete F[A]),v}var oe=se,re=Object.prototype,te=re.toString;function D(F){return te.call(F)}var G=D,Q="[object Null]",g="[object Undefined]",O=i.Z?i.Z.toStringTag:void 0;function H(F){return F==null?F===void 0?g:Q:O&&O in Object(F)?oe(F):G(F)}var C=H},51741:function(E,w,s){s.d(w,{Z:function(){return lr}});function i(N,K,Te,cr){var Le=-1,fe=N==null?0:N.length;for(cr&&fe&&(Te=N[++Le]);++Le<fe;)Te=K(Te,N[Le],Le,N);return Te}var L=i;function m(N){return function(K){return N==null?void 0:N[K]}}var _=m,A={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},se=_(A),oe=se,re=s(30994),te=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,D="\\u0300-\\u036f",G="\\ufe20-\\ufe2f",Q="\\u20d0-\\u20ff",g=D+G+Q,O="["+g+"]",H=RegExp(O,"g");function C(N){return N=(0,re.Z)(N),N&&N.replace(te,oe).replace(H,"")}var F=C,z=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function j(N){return N.match(z)||[]}var y=j,v=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function f(N){return v.test(N)}var o=f,B="\\ud800-\\udfff",R="\\u0300-\\u036f",X="\\ufe20-\\ufe2f",J="\\u20d0-\\u20ff",P=R+X+J,ne="\\u2700-\\u27bf",ae="a-z\\xdf-\\xf6\\xf8-\\xff",V="\\xac\\xb1\\xd7\\xf7",q="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",U="\\u2000-\\u206f",Z=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",I="A-Z\\xc0-\\xd6\\xd8-\\xde",x="\\ufe0e\\ufe0f",k=V+q+U+Z,ue="['\u2019]",xe="["+k+"]",Be="["+P+"]",_e="\\d+",vr="["+ne+"]",Ve="["+ae+"]",$e="[^"+B+k+_e+ne+ae+I+"]",me="\\ud83c[\\udffb-\\udfff]",qe="(?:"+Be+"|"+me+")",Ze="[^"+B+"]",Ee="(?:\\ud83c[\\udde6-\\uddff]){2}",er="[\\ud800-\\udbff][\\udc00-\\udfff]",we="["+I+"]",rr="\\u200d",Oe="(?:"+Ve+"|"+$e+")",Ne="(?:"+we+"|"+$e+")",De="(?:"+ue+"(?:d|ll|m|re|s|t|ve))?",Ge="(?:"+ue+"(?:D|LL|M|RE|S|T|VE))?",Je=qe+"?",nr="["+x+"]?",tr="(?:"+rr+"(?:"+[Ze,Ee,er].join("|")+")"+nr+Je+")*",yr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ar="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",xr=nr+Je+tr,Ye="(?:"+[vr,Ee,er].join("|")+")"+xr,Sr=RegExp([we+"?"+Ve+"+"+De+"(?="+[xe,we,"$"].join("|")+")",Ne+"+"+Ge+"(?="+[xe,we+Oe,"$"].join("|")+")",we+"?"+Oe+"+"+De,we+"+"+Ge,ar,yr,_e,Ye].join("|"),"g");function wr(N){return N.match(Sr)||[]}var Tr=wr;function or(N,K,Te){return N=(0,re.Z)(N),K=Te?void 0:K,K===void 0?o(N)?Tr(N):y(N):N.match(K)||[]}var ir=or,Qe="['\u2019]",ur=RegExp(Qe,"g");function sr(N){return function(K){return L(ir(F(K).replace(ur,"")),N,"")}}var lr=sr},97889:function(E,w){var s=typeof global=="object"&&global&&global.Object===Object&&global;w.Z=s},99615:function(E,w,s){var i=s(97889),L=typeof self=="object"&&self&&self.Object===Object&&self,m=i.Z||L||Function("return this")();w.Z=m},56052:function(E,w){var s=Array.isArray;w.Z=s},13795:function(E,w){function s(i){return i!=null&&typeof i=="object"}w.Z=s},30994:function(E,w,s){s.d(w,{Z:function(){return H}});var i=s(66711),L=s(28019),m=s(56052),_=s(33918),A=s(13795),se="[object Symbol]";function oe(C){return typeof C=="symbol"||(0,A.Z)(C)&&(0,_.Z)(C)==se}var re=oe,te=1/0,D=i.Z?i.Z.prototype:void 0,G=D?D.toString:void 0;function Q(C){if(typeof C=="string")return C;if((0,m.Z)(C))return(0,L.Z)(C,Q)+"";if(re(C))return G?G.call(C):"";var F=C+"";return F=="0"&&1/C==-te?"-0":F}var g=Q;function O(C){return C==null?"":g(C)}var H=O},47679:function(E,w,s){s.d(w,{Ue:function(){return G}});const i=g=>{let O;const H=new Set,C=(v,f)=>{const o=typeof v=="function"?v(O):v;if(!Object.is(o,O)){const B=O;O=(f!=null?f:typeof o!="object"||o===null)?o:Object.assign({},O,o),H.forEach(R=>R(O,B))}},F=()=>O,y={setState:C,getState:F,subscribe:v=>(H.add(v),()=>H.delete(v)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),H.clear()}};return O=g(C,F,y),y},L=g=>g?i(g):i;var m=g=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),L(g)),_=s(50959),A=s(7231);const{useDebugValue:se}=_,{useSyncExternalStoreWithSelector:oe}=A;let re=!1;function te(g,O=g.getState,H){H&&!re&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),re=!0);const C=oe(g.subscribe,g.getState,g.getServerState||g.getState,O,H);return se(C),C}const D=g=>{typeof g!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const O=typeof g=="function"?L(g):g,H=(C,F)=>te(O,C,F);return Object.assign(H,O),H},G=g=>g?D(g):D;var Q=g=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),G(g))},6522:function(E,w,s){s.d(w,{mW:function(){return oe},tJ:function(){return F}});const i=(z,j)=>(y,v,f)=>(f.dispatch=o=>(y(B=>z(B,o),!1,o),o),f.dispatchFromDevtools=!0,de({dispatch:(...o)=>f.dispatch(...o)},j)),L=null,m=new Map,_=z=>{const j=m.get(z);return j?Object.fromEntries(Object.entries(j.stores).map(([y,v])=>[y,v.getState()])):{}},A=(z,j,y)=>{if(z===void 0)return{type:"untracked",connection:j.connect(y)};const v=m.get(y.name);if(v)return de({type:"tracked",store:z},v);const f={connection:j.connect(y),stores:{}};return m.set(y.name,f),de({type:"tracked",store:z},f)},oe=(z,j={})=>(y,v,f)=>{const U=j,{enabled:o,anonymousActionType:B,store:R}=U,X=Gr(U,["enabled","anonymousActionType","store"]);let J;try{J=(o!=null?o:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(I){}if(!J)return o&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),z(y,v,f);const Z=A(R,J,X),{connection:P}=Z,ne=Gr(Z,["connection"]);let ae=!0;f.setState=(I,x,k)=>{const ue=y(I,x);if(!ae)return ue;const xe=k===void 0?{type:B||"anonymous"}:typeof k=="string"?{type:k}:k;return R===void 0?(P==null||P.send(xe,v()),ue):(P==null||P.send(Nr(de({},xe),{type:`${R}/${xe.type}`}),Nr(de({},_(X.name)),{[R]:f.getState()})),ue)};const V=(...I)=>{const x=ae;ae=!1,y(...I),ae=x},q=z(f.setState,v,f);if(ne.type==="untracked"?P==null||P.init(q):(ne.stores[ne.store]=f,P==null||P.init(Object.fromEntries(Object.entries(ne.stores).map(([I,x])=>[I,I===ne.store?q:x.getState()])))),f.dispatchFromDevtools&&typeof f.dispatch=="function"){let I=!1;const x=f.dispatch;f.dispatch=(...k)=>{k[0].type==="__setState"&&!I&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),I=!0),x(...k)}}return P.subscribe(I=>{var x;switch(I.type){case"ACTION":if(typeof I.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return re(I.payload,k=>{if(k.type==="__setState"){if(R===void 0){V(k.state);return}Object.keys(k.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const ue=k.state[R];if(ue==null)return;JSON.stringify(f.getState())!==JSON.stringify(ue)&&V(ue);return}f.dispatchFromDevtools&&typeof f.dispatch=="function"&&f.dispatch(k)});case"DISPATCH":switch(I.payload.type){case"RESET":return V(q),R===void 0?P==null?void 0:P.init(f.getState()):P==null?void 0:P.init(_(X.name));case"COMMIT":if(R===void 0){P==null||P.init(f.getState());return}return P==null?void 0:P.init(_(X.name));case"ROLLBACK":return re(I.state,k=>{if(R===void 0){V(k),P==null||P.init(f.getState());return}V(k[R]),P==null||P.init(_(X.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return re(I.state,k=>{if(R===void 0){V(k);return}JSON.stringify(f.getState())!==JSON.stringify(k[R])&&V(k[R])});case"IMPORT_STATE":{const{nextLiftedState:k}=I.payload,ue=(x=k.computedStates.slice(-1)[0])==null?void 0:x.state;if(!ue)return;V(R===void 0?ue:ue[R]),P==null||P.send(null,k);return}case"PAUSE_RECORDING":return ae=!ae}return}}),q},re=(z,j)=>{let y;try{y=JSON.parse(z)}catch(v){console.error("[zustand devtools middleware] Could not parse the received json",v)}y!==void 0&&j(y)},te=z=>(j,y,v)=>{const f=v.subscribe;return v.subscribe=(B,R,X)=>{let J=B;if(R){const P=(X==null?void 0:X.equalityFn)||Object.is;let ne=B(v.getState());J=ae=>{const V=B(ae);if(!P(ne,V)){const q=ne;R(ne=V,q)}},X!=null&&X.fireImmediately&&R(ne,ne)}return f(J)},z(j,y,v)},D=null,G=(z,j)=>(...y)=>Object.assign({},z,j(...y));function Q(z,j){let y;try{y=z()}catch(f){return}return{getItem:f=>{var o;const B=X=>X===null?null:JSON.parse(X,j==null?void 0:j.reviver),R=(o=y.getItem(f))!=null?o:null;return R instanceof Promise?R.then(B):B(R)},setItem:(f,o)=>y.setItem(f,JSON.stringify(o,j==null?void 0:j.replacer)),removeItem:f=>y.removeItem(f)}}const g=z=>j=>{try{const y=z(j);return y instanceof Promise?y:{then(v){return g(v)(y)},catch(v){return this}}}catch(y){return{then(v){return this},catch(v){return g(v)(y)}}}},O=(z,j)=>(y,v,f)=>{let o=de({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:Z=>Z,version:0,merge:(Z,I)=>de(de({},I),Z)},j),B=!1;const R=new Set,X=new Set;let J;try{J=o.getStorage()}catch(Z){}if(!J)return z((...Z)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),y(...Z)},v,f);const P=g(o.serialize),ne=()=>{const Z=o.partialize(de({},v()));let I;const x=P({state:Z,version:o.version}).then(k=>J.setItem(o.name,k)).catch(k=>{I=k});if(I)throw I;return x},ae=f.setState;f.setState=(Z,I)=>{ae(Z,I),ne()};const V=z((...Z)=>{y(...Z),ne()},v,f);let q;const U=()=>{var Z;if(!J)return;B=!1,R.forEach(x=>x(v()));const I=((Z=o.onRehydrateStorage)==null?void 0:Z.call(o,v()))||void 0;return g(J.getItem.bind(J))(o.name).then(x=>{if(x)return o.deserialize(x)}).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==o.version){if(o.migrate)return o.migrate(x.state,x.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return x.state}).then(x=>{var k;return q=o.merge(x,(k=v())!=null?k:V),y(q,!0),ne()}).then(()=>{I==null||I(q,void 0),B=!0,X.forEach(x=>x(q))}).catch(x=>{I==null||I(void 0,x)})};return f.persist={setOptions:Z=>{o=de(de({},o),Z),Z.getStorage&&(J=Z.getStorage())},clearStorage:()=>{J==null||J.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>U(),hasHydrated:()=>B,onHydrate:Z=>(R.add(Z),()=>{R.delete(Z)}),onFinishHydration:Z=>(X.add(Z),()=>{X.delete(Z)})},U(),q||V},H=(z,j)=>(y,v,f)=>{let o=de({storage:Q(()=>localStorage),partialize:U=>U,version:0,merge:(U,Z)=>de(de({},Z),U)},j),B=!1;const R=new Set,X=new Set;let J=o.storage;if(!J)return z((...U)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),y(...U)},v,f);const P=()=>{const U=o.partialize(de({},v()));return J.setItem(o.name,{state:U,version:o.version})},ne=f.setState;f.setState=(U,Z)=>{ne(U,Z),P()};const ae=z((...U)=>{y(...U),P()},v,f);let V;const q=()=>{var U,Z;if(!J)return;B=!1,R.forEach(x=>{var k;return x((k=v())!=null?k:ae)});const I=((Z=o.onRehydrateStorage)==null?void 0:Z.call(o,(U=v())!=null?U:ae))||void 0;return g(J.getItem.bind(J))(o.name).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==o.version){if(o.migrate)return o.migrate(x.state,x.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return x.state}).then(x=>{var k;return V=o.merge(x,(k=v())!=null?k:ae),y(V,!0),P()}).then(()=>{I==null||I(V,void 0),V=v(),B=!0,X.forEach(x=>x(V))}).catch(x=>{I==null||I(void 0,x)})};return f.persist={setOptions:U=>{o=de(de({},o),U),U.storage&&(J=U.storage)},clearStorage:()=>{J==null||J.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>q(),hasHydrated:()=>B,onHydrate:U=>(R.add(U),()=>{R.delete(U)}),onFinishHydration:U=>(X.add(U),()=>{X.delete(U)})},o.skipHydration||q(),V||ae},F=(z,j)=>"getStorage"in j||"serialize"in j||"deserialize"in j?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),O(z,j)):H(z,j)}}]);
}());