!(function(){"use strict";var Vr=Object.defineProperty,$r=Object.defineProperties;var Qr=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var xr=Object.prototype.hasOwnProperty,Sr=Object.prototype.propertyIsEnumerable;var yr=(w,f,o)=>f in w?Vr(w,f,{enumerable:!0,configurable:!0,writable:!0,value:o}):w[f]=o,G=(w,f)=>{for(var o in f||(f={}))xr.call(f,o)&&yr(w,o,f[o]);if(Fe)for(var o of Fe(f))Sr.call(f,o)&&yr(w,o,f[o]);return w},tr=(w,f)=>$r(w,Qr(f));var or=(w,f)=>{var o={};for(var a in w)xr.call(w,a)&&f.indexOf(a)<0&&(o[a]=w[a]);if(w!=null&&Fe)for(var a of Fe(w))f.indexOf(a)<0&&Sr.call(w,a)&&(o[a]=w[a]);return o};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2521],{94976:function(w,f,o){o.d(f,{E_:function(){return X},nc:function(){return D}});var a=o(50959),T=o(56264),p="https://unpkg.com",E="https://registry.npmmirror.com",R=function(s){var x=s.pkg,C=s.version,m=C===void 0?"latest":C,j=s.path,y=s.proxy;switch(y){case"unpkg":return(0,T.Z)(p,"".concat(x,"@").concat(m),j);default:return(0,T.Z)(E,x,m,"files",j)}},$=o(11527),X=(0,a.createContext)(null),J=null,V=function(s){var x=s.pkg,C=s.version,m=s.path;return R({path:m,pkg:x,proxy:"aliyun",version:C})},D=function(){var s=(0,a.useContext)(X);return s?(s==null?void 0:s.proxy)!=="custom"?function(x){var C=x.pkg,m=x.version,j=x.path;return R({path:j,pkg:C,proxy:s.proxy,version:m})}:(s==null?void 0:s.customCdnFn)||V:V},F=null},46070:function(w,f,o){o.d(f,{Z:function(){return Xr}});var a=o(25940),T=o(48385),p=o(2431),E=o(62392),R=o(50959),$=o(94976),X=function(t){var n=document.createElement("link");return n.rel="stylesheet",n.href=t,n},J=(0,R.memo)(function(r){var t=r.url,n=(0,R.useRef)(!1);return(0,R.useEffect)(function(){if(!n.current){n.current=!0;var e=X(t);document.head.append(e)}},[]),null}),V=J,D=o(42804),F,H,s,x,C,m,j,y,h,d=function(t){var n=t.css,e=t.token,i=t.isDarkMode,g=(0,E.F4)(F||(F=(0,D.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `]))),L=i?e.cyan9A:e.cyan11A,Y=i?e.cyan2A:e.cyan6A;return{blur:n(H||(H=(0,D.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:n(s||(s=(0,D.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:n(x||(x=(0,D.Z)([`
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
    `])),e.colorFill,e.motionEaseOut),gradientAnimation:n(C||(C=(0,D.Z)([`
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
    `])),e.gold,e.magenta,e.geekblue,e.cyan,g),markdown:n(m||(m=(0,D.Z)([`
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
    `])),e.colorText,e.colorText,e.colorTextDescription,e.colorLink,e.colorLinkHover,e.colorLinkActive,e.borderRadius,e.fontSizeSM,L,Y,i?e.cyan1A:e.cyan6A,e.borderRadiusSM,e.colorBorderSecondary,e.borderRadius,e.colorFillTertiary,e.borderRadius,e.borderRadius,e.borderRadius,e.borderRadius,i?e.cyan9A:e.cyan10A,e.colorTextDescription,e.colorFillTertiary,e.colorBorderSecondary,e.borderRadiusLG,e.motionEaseOut,e.colorBorder),markdownInChat:n(j||(j=(0,D.Z)([`
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
    `]))),noScrollbar:n(y||(y=(0,D.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:n(h||(h=(0,D.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),e.colorTextSecondary,e.colorText)}},l=o(90885),u=o(30994);function c(r,t,n){var e=-1,i=r.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var g=Array(i);++e<i;)g[e]=r[e+t];return g}var Z=c;function _(r,t,n){var e=r.length;return n=n===void 0?e:n,!t&&n>=e?r:Z(r,t,n)}var U=_,I="\\ud800-\\udfff",A="\\u0300-\\u036f",z="\\ufe20-\\ufe2f",B="\\u20d0-\\u20ff",M=A+z+B,W="\\ufe0e\\ufe0f",P="\\u200d",k=RegExp("["+P+I+M+W+"]");function S(r){return k.test(r)}var b=S;function O(r){return r.split("")}var K=O,te="\\ud800-\\udfff",ze="\\u0300-\\u036f",Oe="\\ufe20-\\ufe2f",He="\\u20d0-\\u20ff",_e=ze+Oe+He,je="\\ufe0e\\ufe0f",Be="["+te+"]",pe="["+_e+"]",ge="\\ud83c[\\udffb-\\udfff]",ke="(?:"+pe+"|"+ge+")",me="[^"+te+"]",oe="(?:\\ud83c[\\udde6-\\uddff]){2}",we="[\\ud800-\\udbff][\\udc00-\\udfff]",Te="\\u200d",Ce=ke+"?",ve="["+je+"]?",Ae="(?:"+Te+"(?:"+[me,oe,we].join("|")+")"+ve+Ce+")*",Pe=ve+Ce+Ae,Ee="(?:"+[me+pe+"?",pe,oe,we,Be].join("|")+")",We=RegExp(ge+"(?="+ge+")|"+Ee+Pe,"g");function Ne(r){return r.match(We)||[]}var Je=Ne;function Ge(r){return b(r)?Je(r):K(r)}var Ke=Ge;function Ye(r){return function(t){t=(0,u.Z)(t);var n=b(t)?Ke(t):void 0,e=n?n[0]:t.charAt(0),i=n?U(n,1).join(""):t.slice(1);return e[r]()+i}}var Xe=Ye,Ve=Xe("toUpperCase"),$e=Ve;function Qe(r){return $e((0,u.Z)(r).toLowerCase())}var Re=Qe,qe=o(51741),er=(0,qe.Z)(function(r,t,n){return t=t.toLowerCase(),r+(n?Re(t):t)}),rr=er,v=o(65800);function Q(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function re(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Q(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function De(r,t){var n=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=ue(r))||t&&r&&typeof r.length=="number"){n&&(r=n);var e=0,i=function(){};return{s:i,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(q){throw q},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=!0,L=!1,Y;return{s:function(){n=n.call(r)},n:function(){var q=n.next();return g=q.done,q},e:function(q){L=!0,Y=q},f:function(){try{!g&&n.return!=null&&n.return()}finally{if(L)throw Y}}}}function ue(r,t){if(r){if(typeof r=="string")return he(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(r,t)}}function he(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var Or=function(t){var n,e=t.name,i=t.scale,g=t.appearance;return n={},(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)(n,"".concat(e,"Bg"),i["".concat(g,"A")][1]),"".concat(e,"BgHover"),i["".concat(g,"A")][2]),"".concat(e,"Border"),i[g][4]),"".concat(e,"BorderSecondary"),i[g][3]),"".concat(e,"BorderHover"),i[g][5]),"".concat(e,"Hover"),i[g][10]),"".concat(e),i[g][9]),"".concat(e,"Active"),i[g][7]),"".concat(e,"TextHover"),i["".concat(g,"A")][10]),"".concat(e,"Text"),i["".concat(g,"A")][9]),(0,a.Z)(n,"".concat(e,"TextActive"),i["".concat(g,"A")][7])},_r=function(t){var n=t.name,e=t.scale,i=t.appearance,g={},L=De(e[i].entries()),Y;try{for(L.s();!(Y=L.n()).done;){var N=(0,l.Z)(Y.value,2),q=N[0],fe=N[1];q===0||q===12||(g["".concat(n).concat(q)]=fe)}}catch(Se){L.e(Se)}finally{L.f()}var be=De(e["".concat(i,"A")].entries()),se;try{for(be.s();!(se=be.n()).done;){var le=(0,l.Z)(se.value,2),xe=le[0],nr=le[1];xe===0||xe===12||(g["".concat(n).concat(xe,"A")]=nr)}}catch(Se){be.e(Se)}finally{be.f()}return re(re({},g),Or({appearance:i,name:n,scale:e}))},jr=function(t){for(var n=t.isDarkMode,e={},i=0,g=Object.entries(v._);i<g.length;i++){var L=(0,l.Z)(g[i],2),Y=L[0],N=L[1];e=re(re({},e),_r({appearance:n?"dark":"light",name:rr(Y),scale:N}))}return e},ee=function(t){var n=t.type,e=t.scale,i=t.appearance,g=Re(n),L=i==="dark";return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"color".concat(g,"Bg"),e[i][1]),"color".concat(g,"BgHover"),e[i][2]),"color".concat(g,"Border"),e[i][4]),"color".concat(g,"BorderHover"),e[i][L?5:3]),"color".concat(g,"Hover"),e[i][L?10:8]),"color".concat(g),e[i][9]),"color".concat(g,"Active"),e[i][L?7:10]),"color".concat(g,"TextHover"),e[i][L?10:8]),"color".concat(g,"Text"),e[i][9]),"color".concat(g,"TextActive"),e[i][L?7:10])},Ze=function(t){var n=t.scale,e=t.appearance;return{colorBgContainer:e==="dark"?n[e][1]:n[e][0],colorBgElevated:e==="dark"?n[e][2]:n[e][0],colorBgLayout:e==="dark"?n[e][0]:n[e][1],colorBgMask:n.lightA[8],colorBgSpotlight:n[e][5],colorBorder:n[e][4],colorBorderSecondary:n[e][3],colorFill:n["".concat(e,"A")][3],colorFillQuaternary:n["".concat(e,"A")][0],colorFillSecondary:n["".concat(e,"A")][2],colorFillTertiary:n["".concat(e,"A")][1],colorText:n[e][12],colorTextQuaternary:n[e][6],colorTextSecondary:n[e][10],colorTextTertiary:n[e][8]}},ar={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}};function ir(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function ae(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ir(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):ir(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var kr=ee({appearance:"dark",scale:v._.bnw,type:"Primary"}),cr=Ze({appearance:"dark",scale:v._.gray}),wr=ee({appearance:"dark",scale:v._.lime,type:"Success"}),Tr=ee({appearance:"dark",scale:v._.gold,type:"Warning"}),Cr=ee({appearance:"dark",scale:v._.red,type:"Error"}),Ie=ee({appearance:"dark",scale:v._.blue,type:"Info"}),Ar=ae(ae(ae(ae(ae(ae(ae({},kr),cr),wr),Tr),Cr),Ie),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Ie.colorInfoText,colorLinkActive:Ie.colorInfoTextActive,colorLinkHover:Ie.colorInfoTextHover,colorTextLightSolid:cr.colorBgLayout}),Pr=Ar;function sr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function Le(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):sr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Er=function(t,n){var e=t.primaryColor,i=t.neutralColor,g={},L={},Y=v._[e];Y&&(g=ee({appearance:"dark",scale:Y,type:"Primary"}));var N=ar[i];return N&&(L=Ze({appearance:"dark",scale:N})),Le(Le(Le(Le({},n),Pr),g),L)};function lr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function ie(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):lr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Rr=ee({appearance:"light",scale:v._.bnw,type:"Primary"}),ur=Ze({appearance:"light",scale:v._.gray}),Dr=ee({appearance:"light",scale:v._.green,type:"Success"}),Zr=ee({appearance:"light",scale:v._.orange,type:"Warning"}),Ir=ee({appearance:"light",scale:v._.volcano,type:"Error"}),Me=ee({appearance:"light",scale:v._.geekblue,type:"Info"}),Lr=ie(ie(ie(ie(ie(ie(ie({},Rr),ur),Dr),Zr),Ir),Me),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Me.colorInfoText,colorLinkActive:Me.colorInfoTextActive,colorLinkHover:Me.colorInfoTextHover,colorTextLightSolid:ur.colorBgLayout}),Mr=Lr;function dr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function Ue(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):dr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Ur=function(t,n){var e=t.primaryColor,i=t.neutralColor,g={},L={},Y=v._[e];Y&&(g=ee({appearance:"light",scale:Y,type:"Primary"}));var N=ar[i];return N&&(L=Ze({appearance:"light",scale:N})),Ue(Ue(Ue(Ue({},n),Mr),g),L)},fr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',Fr='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',br='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',zr="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",Hr={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[Fr,br,fr].join(","),fontFamilyCode:[zr,br,fr].join(",")};function pr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function gr(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):pr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Br=function(t){var n=t.neutralColor,e=t.appearance,i=t.primaryColor,g=e==="dark";return{algorithm:g?Er:Ur,token:gr(gr({},Hr),{},{neutralColor:n,primaryColor:i})}},ye=o(24110),mr,Wr=function(r){return(0,E.iv)(mr||(mr=(0,D.Z)([`
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
`])),r.prefixCls,(0,ye.XV)(r.colorPrimary),r.prefixCls,r.prefixCls,(0,ye.XV)(r.colorPrimary),(0,ye.XV)(r.colorPrimary),(0,ye.XV)(r.colorPrimaryActive),r.prefixCls,r.colorBgLayout,r.colorText,r.borderRadiusSM,r.prefixCls,r.colorText,r.prefixCls,r.colorBgContainer,r.prefixCls,r.prefixCls,r.prefixCls,r.stylish.blur,r.borderRadiusLG,(0,ye.m4)(r.colorBgMask,.1),r.prefixCls,r.colorBorderSecondary,r.boxShadowSecondary,r.prefixCls,r.colorBorderSecondary,r.borderRadius,r.boxShadowSecondary,r.prefixCls)},vr,Nr=function(r){return(0,E.iv)(vr||(vr=(0,D.Z)([`
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
`])),r.fontFamily,r.fontSize,r.colorTextBase,r.colorBgLayout,r.fontFamilyCode,r.fontFamilyCode,r.yellow9,r.motionEaseOut,r.colorText,r.colorFill)},Jr=(0,E.vJ)(function(r){var t=r.theme;return[Nr(t),Wr(t)]}),Gr=Jr,ce=o(11527),Kr=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme"];function hr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),n.push.apply(n,e)}return n}function de(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):hr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Yr=(0,R.memo)(function(r){var t=r.children,n=r.customStylish,e=r.customToken,i=r.enableWebfonts,g=i===void 0?!0:i,L=r.enableGlobalStyle,Y=L===void 0?!0:L,N=r.webfonts,q=r.customTheme,fe=q===void 0?{}:q,be=(0,T.Z)(r,Kr),se=(0,$.nc)(),le=N||[se({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"latest"}),se({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"latest"}),se({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"latest"}),se({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],xe=(0,R.useCallback)(function(ne){return de(de({},d(ne)),n==null?void 0:n(ne))},[n]),nr=(0,R.useCallback)(function(ne){return de(de({},jr(ne)),e==null?void 0:e(ne))},[e]),Se=(0,R.useCallback)(function(ne){return Br({appearance:ne,neutralColor:fe.neutralColor,primaryColor:fe.primaryColor})},[fe.primaryColor,fe.neutralColor]);return(0,ce.jsxs)(ce.Fragment,{children:[g&&(le==null?void 0:le.length)>0&&le.map(function(ne){return(0,ce.jsx)(V,{url:ne},ne)}),(0,ce.jsx)(E.V9,{speedy:!0,children:(0,ce.jsxs)(E.f6,de(de({customStylish:xe,customToken:nr},be),{},{theme:Se,children:[Y&&(0,ce.jsx)(Gr,{}),(0,ce.jsx)(p.Z,{style:{minHeight:"inherit",width:"inherit"},children:t})]}))})]})}),Xr=Yr},98853:function(w,f,o){var a=o(30867),T=o(50959),p=o(11527),E=(0,T.memo)(function(){return(0,p.jsxs)(a.ql,{children:[(0,p.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,p.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,p.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,p.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,p.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,p.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,p.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,p.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,p.jsx)("meta",{content:"#000000",name:"theme-color"})]})});f.Z=E},92267:function(w,f,o){o.d(f,{f:function(){return p}});var a=o(47679),T=o(6522),p=(0,a.Ue)()((0,T.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(w){w.exports=function f(o,a){if(o===a)return!0;if(o&&a&&typeof o=="object"&&typeof a=="object"){if(o.constructor!==a.constructor)return!1;var T,p,E;if(Array.isArray(o)){if(T=o.length,T!=a.length)return!1;for(p=T;p--!==0;)if(!f(o[p],a[p]))return!1;return!0}if(o.constructor===RegExp)return o.source===a.source&&o.flags===a.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===a.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===a.toString();if(E=Object.keys(o),T=E.length,T!==Object.keys(a).length)return!1;for(p=T;p--!==0;)if(!Object.prototype.hasOwnProperty.call(a,E[p]))return!1;for(p=T;p--!==0;){var R=E[p];if(!f(o[R],a[R]))return!1}return!0}return o!==o&&a!==a}},2179:function(w,f,o){var a=o(50959),T=o(4322);function p(D,F){return D===F&&(D!==0||1/D===1/F)||D!==D&&F!==F}var E=typeof Object.is=="function"?Object.is:p,R=T.useSyncExternalStore,$=a.useRef,X=a.useEffect,J=a.useMemo,V=a.useDebugValue;f.useSyncExternalStoreWithSelector=function(D,F,H,s,x){var C=$(null);if(C.current===null){var m={hasValue:!1,value:null};C.current=m}else m=C.current;C=J(function(){function y(c){if(!h){if(h=!0,d=c,c=s(c),x!==void 0&&m.hasValue){var Z=m.value;if(x(Z,c))return l=Z}return l=c}if(Z=l,E(d,c))return Z;var _=s(c);return x!==void 0&&x(Z,_)?Z:(d=c,l=_)}var h=!1,d,l,u=H===void 0?null:H;return[function(){return y(F())},u===null?void 0:function(){return y(u())}]},[F,H,s,x]);var j=R(D,C[0],C[1]);return X(function(){m.hasValue=!0,m.value=j},[j]),V(j),j}},7231:function(w,f,o){w.exports=o(2179)},66711:function(w,f,o){var a=o(99615),T=a.Z.Symbol;f.Z=T},28019:function(w,f){function o(a,T){for(var p=-1,E=a==null?0:a.length,R=Array(E);++p<E;)R[p]=T(a[p],p,a);return R}f.Z=o},33918:function(w,f,o){o.d(f,{Z:function(){return m}});var a=o(66711),T=Object.prototype,p=T.hasOwnProperty,E=T.toString,R=a.Z?a.Z.toStringTag:void 0;function $(j){var y=p.call(j,R),h=j[R];try{j[R]=void 0;var d=!0}catch(u){}var l=E.call(j);return d&&(y?j[R]=h:delete j[R]),l}var X=$,J=Object.prototype,V=J.toString;function D(j){return V.call(j)}var F=D,H="[object Null]",s="[object Undefined]",x=a.Z?a.Z.toStringTag:void 0;function C(j){return j==null?j===void 0?s:H:x&&x in Object(j)?X(j):F(j)}var m=C},51741:function(w,f,o){o.d(f,{Z:function(){return rr}});function a(v,Q,re,De){var ue=-1,he=v==null?0:v.length;for(De&&he&&(re=v[++ue]);++ue<he;)re=Q(re,v[ue],ue,v);return re}var T=a;function p(v){return function(Q){return v==null?void 0:v[Q]}}var E=p,R={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},$=E(R),X=$,J=o(30994),V=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,D="\\u0300-\\u036f",F="\\ufe20-\\ufe2f",H="\\u20d0-\\u20ff",s=D+F+H,x="["+s+"]",C=RegExp(x,"g");function m(v){return v=(0,J.Z)(v),v&&v.replace(V,X).replace(C,"")}var j=m,y=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function h(v){return v.match(y)||[]}var d=h,l=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function u(v){return l.test(v)}var c=u,Z="\\ud800-\\udfff",_="\\u0300-\\u036f",U="\\ufe20-\\ufe2f",I="\\u20d0-\\u20ff",A=_+U+I,z="\\u2700-\\u27bf",B="a-z\\xdf-\\xf6\\xf8-\\xff",M="\\xac\\xb1\\xd7\\xf7",W="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",P="\\u2000-\\u206f",k=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",S="A-Z\\xc0-\\xd6\\xd8-\\xde",b="\\ufe0e\\ufe0f",O=M+W+P+k,K="['\u2019]",te="["+O+"]",ze="["+A+"]",Oe="\\d+",He="["+z+"]",_e="["+B+"]",je="[^"+Z+O+Oe+z+B+S+"]",Be="\\ud83c[\\udffb-\\udfff]",pe="(?:"+ze+"|"+Be+")",ge="[^"+Z+"]",ke="(?:\\ud83c[\\udde6-\\uddff]){2}",me="[\\ud800-\\udbff][\\udc00-\\udfff]",oe="["+S+"]",we="\\u200d",Te="(?:"+_e+"|"+je+")",Ce="(?:"+oe+"|"+je+")",ve="(?:"+K+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+K+"(?:D|LL|M|RE|S|T|VE))?",Pe=pe+"?",Ee="["+b+"]?",We="(?:"+we+"(?:"+[ge,ke,me].join("|")+")"+Ee+Pe+")*",Ne="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Je="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ge=Ee+Pe+We,Ke="(?:"+[He,ke,me].join("|")+")"+Ge,Ye=RegExp([oe+"?"+_e+"+"+ve+"(?="+[te,oe,"$"].join("|")+")",Ce+"+"+Ae+"(?="+[te,oe+Te,"$"].join("|")+")",oe+"?"+Te+"+"+ve,oe+"+"+Ae,Je,Ne,Oe,Ke].join("|"),"g");function Xe(v){return v.match(Ye)||[]}var Ve=Xe;function $e(v,Q,re){return v=(0,J.Z)(v),Q=re?void 0:Q,Q===void 0?c(v)?Ve(v):d(v):v.match(Q)||[]}var Qe=$e,Re="['\u2019]",qe=RegExp(Re,"g");function er(v){return function(Q){return T(Qe(j(Q).replace(qe,"")),v,"")}}var rr=er},97889:function(w,f){var o=typeof global=="object"&&global&&global.Object===Object&&global;f.Z=o},99615:function(w,f,o){var a=o(97889),T=typeof self=="object"&&self&&self.Object===Object&&self,p=a.Z||T||Function("return this")();f.Z=p},56052:function(w,f){var o=Array.isArray;f.Z=o},13795:function(w,f){function o(a){return a!=null&&typeof a=="object"}f.Z=o},30994:function(w,f,o){o.d(f,{Z:function(){return C}});var a=o(66711),T=o(28019),p=o(56052),E=o(33918),R=o(13795),$="[object Symbol]";function X(m){return typeof m=="symbol"||(0,R.Z)(m)&&(0,E.Z)(m)==$}var J=X,V=1/0,D=a.Z?a.Z.prototype:void 0,F=D?D.toString:void 0;function H(m){if(typeof m=="string")return m;if((0,p.Z)(m))return(0,T.Z)(m,H)+"";if(J(m))return F?F.call(m):"";var j=m+"";return j=="0"&&1/m==-V?"-0":j}var s=H;function x(m){return m==null?"":s(m)}var C=x},47679:function(w,f,o){o.d(f,{Ue:function(){return F}});const a=s=>{let x;const C=new Set,m=(l,u)=>{const c=typeof l=="function"?l(x):l;if(!Object.is(c,x)){const Z=x;x=(u!=null?u:typeof c!="object"||c===null)?c:Object.assign({},x,c),C.forEach(_=>_(x,Z))}},j=()=>x,d={setState:m,getState:j,subscribe:l=>(C.add(l),()=>C.delete(l)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),C.clear()}};return x=s(m,j,d),d},T=s=>s?a(s):a;var p=s=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),T(s)),E=o(50959),R=o(7231);const{useDebugValue:$}=E,{useSyncExternalStoreWithSelector:X}=R;let J=!1;function V(s,x=s.getState,C){C&&!J&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),J=!0);const m=X(s.subscribe,s.getState,s.getServerState||s.getState,x,C);return $(m),m}const D=s=>{typeof s!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const x=typeof s=="function"?T(s):s,C=(m,j)=>V(x,m,j);return Object.assign(C,x),C},F=s=>s?D(s):D;var H=s=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),F(s))},6522:function(w,f,o){o.d(f,{mW:function(){return X},tJ:function(){return j}});const a=(y,h)=>(d,l,u)=>(u.dispatch=c=>(d(Z=>y(Z,c),!1,c),c),u.dispatchFromDevtools=!0,G({dispatch:(...c)=>u.dispatch(...c)},h)),T=null,p=new Map,E=y=>{const h=p.get(y);return h?Object.fromEntries(Object.entries(h.stores).map(([d,l])=>[d,l.getState()])):{}},R=(y,h,d)=>{if(y===void 0)return{type:"untracked",connection:h.connect(d)};const l=p.get(d.name);if(l)return G({type:"tracked",store:y},l);const u={connection:h.connect(d),stores:{}};return p.set(d.name,u),G({type:"tracked",store:y},u)},X=(y,h={})=>(d,l,u)=>{const P=h,{enabled:c,anonymousActionType:Z,store:_}=P,U=or(P,["enabled","anonymousActionType","store"]);let I;try{I=(c!=null?c:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(S){}if(!I)return c&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),y(d,l,u);const k=R(_,I,U),{connection:A}=k,z=or(k,["connection"]);let B=!0;u.setState=(S,b,O)=>{const K=d(S,b);if(!B)return K;const te=O===void 0?{type:Z||"anonymous"}:typeof O=="string"?{type:O}:O;return _===void 0?(A==null||A.send(te,l()),K):(A==null||A.send(tr(G({},te),{type:`${_}/${te.type}`}),tr(G({},E(U.name)),{[_]:u.getState()})),K)};const M=(...S)=>{const b=B;B=!1,d(...S),B=b},W=y(u.setState,l,u);if(z.type==="untracked"?A==null||A.init(W):(z.stores[z.store]=u,A==null||A.init(Object.fromEntries(Object.entries(z.stores).map(([S,b])=>[S,S===z.store?W:b.getState()])))),u.dispatchFromDevtools&&typeof u.dispatch=="function"){let S=!1;const b=u.dispatch;u.dispatch=(...O)=>{O[0].type==="__setState"&&!S&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),S=!0),b(...O)}}return A.subscribe(S=>{var b;switch(S.type){case"ACTION":if(typeof S.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return J(S.payload,O=>{if(O.type==="__setState"){if(_===void 0){M(O.state);return}Object.keys(O.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const K=O.state[_];if(K==null)return;JSON.stringify(u.getState())!==JSON.stringify(K)&&M(K);return}u.dispatchFromDevtools&&typeof u.dispatch=="function"&&u.dispatch(O)});case"DISPATCH":switch(S.payload.type){case"RESET":return M(W),_===void 0?A==null?void 0:A.init(u.getState()):A==null?void 0:A.init(E(U.name));case"COMMIT":if(_===void 0){A==null||A.init(u.getState());return}return A==null?void 0:A.init(E(U.name));case"ROLLBACK":return J(S.state,O=>{if(_===void 0){M(O),A==null||A.init(u.getState());return}M(O[_]),A==null||A.init(E(U.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return J(S.state,O=>{if(_===void 0){M(O);return}JSON.stringify(u.getState())!==JSON.stringify(O[_])&&M(O[_])});case"IMPORT_STATE":{const{nextLiftedState:O}=S.payload,K=(b=O.computedStates.slice(-1)[0])==null?void 0:b.state;if(!K)return;M(_===void 0?K:K[_]),A==null||A.send(null,O);return}case"PAUSE_RECORDING":return B=!B}return}}),W},J=(y,h)=>{let d;try{d=JSON.parse(y)}catch(l){console.error("[zustand devtools middleware] Could not parse the received json",l)}d!==void 0&&h(d)},V=y=>(h,d,l)=>{const u=l.subscribe;return l.subscribe=(Z,_,U)=>{let I=Z;if(_){const A=(U==null?void 0:U.equalityFn)||Object.is;let z=Z(l.getState());I=B=>{const M=Z(B);if(!A(z,M)){const W=z;_(z=M,W)}},U!=null&&U.fireImmediately&&_(z,z)}return u(I)},y(h,d,l)},D=null,F=(y,h)=>(...d)=>Object.assign({},y,h(...d));function H(y,h){let d;try{d=y()}catch(u){return}return{getItem:u=>{var c;const Z=U=>U===null?null:JSON.parse(U,h==null?void 0:h.reviver),_=(c=d.getItem(u))!=null?c:null;return _ instanceof Promise?_.then(Z):Z(_)},setItem:(u,c)=>d.setItem(u,JSON.stringify(c,h==null?void 0:h.replacer)),removeItem:u=>d.removeItem(u)}}const s=y=>h=>{try{const d=y(h);return d instanceof Promise?d:{then(l){return s(l)(d)},catch(l){return this}}}catch(d){return{then(l){return this},catch(l){return s(l)(d)}}}},x=(y,h)=>(d,l,u)=>{let c=G({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:k=>k,version:0,merge:(k,S)=>G(G({},S),k)},h),Z=!1;const _=new Set,U=new Set;let I;try{I=c.getStorage()}catch(k){}if(!I)return y((...k)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),d(...k)},l,u);const A=s(c.serialize),z=()=>{const k=c.partialize(G({},l()));let S;const b=A({state:k,version:c.version}).then(O=>I.setItem(c.name,O)).catch(O=>{S=O});if(S)throw S;return b},B=u.setState;u.setState=(k,S)=>{B(k,S),z()};const M=y((...k)=>{d(...k),z()},l,u);let W;const P=()=>{var k;if(!I)return;Z=!1,_.forEach(b=>b(l()));const S=((k=c.onRehydrateStorage)==null?void 0:k.call(c,l()))||void 0;return s(I.getItem.bind(I))(c.name).then(b=>{if(b)return c.deserialize(b)}).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==c.version){if(c.migrate)return c.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var O;return W=c.merge(b,(O=l())!=null?O:M),d(W,!0),z()}).then(()=>{S==null||S(W,void 0),Z=!0,U.forEach(b=>b(W))}).catch(b=>{S==null||S(void 0,b)})};return u.persist={setOptions:k=>{c=G(G({},c),k),k.getStorage&&(I=k.getStorage())},clearStorage:()=>{I==null||I.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>P(),hasHydrated:()=>Z,onHydrate:k=>(_.add(k),()=>{_.delete(k)}),onFinishHydration:k=>(U.add(k),()=>{U.delete(k)})},P(),W||M},C=(y,h)=>(d,l,u)=>{let c=G({storage:H(()=>localStorage),partialize:P=>P,version:0,merge:(P,k)=>G(G({},k),P)},h),Z=!1;const _=new Set,U=new Set;let I=c.storage;if(!I)return y((...P)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),d(...P)},l,u);const A=()=>{const P=c.partialize(G({},l()));return I.setItem(c.name,{state:P,version:c.version})},z=u.setState;u.setState=(P,k)=>{z(P,k),A()};const B=y((...P)=>{d(...P),A()},l,u);let M;const W=()=>{var P,k;if(!I)return;Z=!1,_.forEach(b=>{var O;return b((O=l())!=null?O:B)});const S=((k=c.onRehydrateStorage)==null?void 0:k.call(c,(P=l())!=null?P:B))||void 0;return s(I.getItem.bind(I))(c.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==c.version){if(c.migrate)return c.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var O;return M=c.merge(b,(O=l())!=null?O:B),d(M,!0),A()}).then(()=>{S==null||S(M,void 0),M=l(),Z=!0,U.forEach(b=>b(M))}).catch(b=>{S==null||S(void 0,b)})};return u.persist={setOptions:P=>{c=G(G({},c),P),P.storage&&(I=P.storage)},clearStorage:()=>{I==null||I.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>W(),hasHydrated:()=>Z,onHydrate:P=>(_.add(P),()=>{_.delete(P)}),onFinishHydration:P=>(U.add(P),()=>{U.delete(P)})},c.skipHydration||W(),M||B},j=(y,h)=>"getStorage"in h||"serialize"in h||"deserialize"in h?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),x(y,h)):C(y,h)}}]);
}());