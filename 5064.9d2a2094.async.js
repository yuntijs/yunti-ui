!(function(){"use strict";var zn=Object.defineProperty,In=Object.defineProperties;var Rn=Object.getOwnPropertyDescriptors;var Ir=Object.getOwnPropertySymbols;var on=Object.prototype.hasOwnProperty,un=Object.prototype.propertyIsEnumerable;var an=(W,R,c)=>R in W?zn(W,R,{enumerable:!0,configurable:!0,writable:!0,value:c}):W[R]=c,le=(W,R)=>{for(var c in R||(R={}))on.call(R,c)&&an(W,c,R[c]);if(Ir)for(var c of Ir(R))un.call(R,c)&&an(W,c,R[c]);return W},Jr=(W,R)=>In(W,Rn(R));var Gr=(W,R)=>{var c={};for(var s in W)on.call(W,s)&&R.indexOf(s)<0&&(c[s]=W[s]);if(W!=null&&Ir)for(var s of Ir(W))R.indexOf(s)<0&&un.call(W,s)&&(c[s]=W[s]);return c};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[5064],{51617:function(W,R,c){c.d(R,{E_:function(){return ce},nc:function(){return U}});var s=c(50959),G=c(56264),S="https://unpkg.com",$="https://registry.npmmirror.com",P=function(g){var j=g.pkg,H=g.version,J=H===void 0?"latest":H,ee=g.path,k=g.proxy;switch(k){case"unpkg":return(0,G.Z)(S,"".concat(j,"@").concat(J),ee);default:return(0,G.Z)($,j,J,"files",ee)}},fe=c(11527),ce=(0,s.createContext)(null),ae=null,ie=function(g){var j=g.pkg,H=g.version,J=g.path;return P({path:J,pkg:j,proxy:"aliyun",version:H})},U=function(){var g=(0,s.useContext)(ce);return g?(g==null?void 0:g.proxy)!=="custom"?function(j){var H=j.pkg,J=j.version,ee=j.path;return P({path:ee,pkg:H,proxy:g.proxy,version:J})}:(g==null?void 0:g.customCdnFn)||ie:ie},X=null},68336:function(W,R,c){c.d(R,{Z:function(){return hr}});var s=c(35194),G=c(50446),S=c(24821),$=c(1226),P=c(50959),fe=c(51617),ce=function(p){var d=document.createElement("link");return d.rel="stylesheet",d.href=p,d},ae=(0,P.memo)(function(l){var p=l.url,d=(0,P.useRef)(!1);return(0,P.useEffect)(function(){if(!d.current){d.current=!0;var i=ce(p);document.head.append(i)}},[]),null}),ie=ae,U=c(86910),X,V,g,j,H,J,ee,k,z=function(p){var d=p.css,i=p.token,m=p.isDarkMode,w=(0,$.F4)(X||(X=(0,U.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:d(V||(V=(0,U.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:d(g||(g=(0,U.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:d(j||(j=(0,U.Z)([`
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
    `])),i.colorFill,i.motionEaseOut),gradientAnimation:d(H||(H=(0,U.Z)([`
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
    `])),i.gold,i.magenta,i.geekblue,i.cyan,w),markdown:d(J||(J=(0,U.Z)([`
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
    `])),i.colorTextSecondary,i.colorTextDescription,i.fontFamilyCode,i.colorFillSecondary,i.colorBorderSecondary,i.borderRadius,i.fontFamily,i.colorBgLayout,m?i.colorText:"#333",m?i.colorTextSecondary:"#000",m?i.colorTextSecondary:"#000",i.colorTextSecondary,i.colorBorder,i.colorBorderSecondary,i.colorFillTertiary,i.colorBorderSecondary,i.borderRadius,i.fontFamily,i.colorTextSecondary,i.colorTextSecondary,i.motionEaseOut,i.colorBorder,i.colorFillTertiary,i.borderRadius,i.colorBorderSecondary,i.colorFillQuaternary,i.colorBorderSecondary,i.fontFamilyCode),noScrollbar:d(ee||(ee=(0,U.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:d(k||(k=(0,U.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),i.colorTextSecondary,i.colorText)}},x=c(30309),v=c(36471),f=c(68185),o=c(99757);function L(l,p,d){var i=-1,m=l.length;p<0&&(p=-p>m?0:m+p),d=d>m?m:d,d<0&&(d+=m),m=p>d?0:d-p>>>0,p>>>=0;for(var w=Array(m);++i<m;)w[i]=l[i+p];return w}var A=L;function Y(l,p,d){var i=l.length;return d=d===void 0?i:d,!p&&d>=i?l:A(l,p,d)}var B=Y,F="\\ud800-\\udfff",re="\\u0300-\\u036f",ne="\\ufe20-\\ufe2f",Q="\\u20d0-\\u20ff",K=re+ne+Q,E="\\ufe0e\\ufe0f",I="\\u200d",T=RegExp("["+I+F+K+E+"]");function h(l){return T.test(l)}var C=h;function oe(l){return l.split("")}var xe=oe,$e="\\ud800-\\udfff",He="\\u0300-\\u036f",vr="\\ufe20-\\ufe2f",Ve="\\u20d0-\\u20ff",Ne=He+vr+Ve,me="\\ufe0e\\ufe0f",qe="["+$e+"]",Ee="["+Ne+"]",Ze="\\ud83c[\\udffb-\\udfff]",er="(?:"+Ee+"|"+Ze+")",we="[^"+$e+"]",rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ie="[\\ud800-\\udbff][\\udc00-\\udfff]",Je="\\u200d",De=er+"?",Ge="["+me+"]?",Ye="(?:"+Je+"(?:"+[we,rr,Ie].join("|")+")"+Ge+De+")*",nr=Ge+De+Ye,tr="(?:"+[we+Ee+"?",Ee,rr,Ie,qe].join("|")+")",yr=RegExp(Ze+"(?="+Ze+")|"+tr+nr,"g");function ar(l){return l.match(yr)||[]}var xr=ar;function _e(l){return C(l)?xr(l):xe(l)}var Sr=_e;function wr(l){return function(p){p=(0,o.Z)(p);var d=C(p)?Sr(p):void 0,i=d?d[0]:p.charAt(0),m=d?B(d,1).join(""):p.slice(1);return i[l]()+m}}var Cr=wr,or=Cr("toUpperCase"),ir=or;function Qe(l){return ir((0,o.Z)(l).toLowerCase())}var ur=Qe,sr=c(51741),lr=(0,sr.Z)(function(l,p,d){return p=p.toLowerCase(),l+(d?ur(p):p)}),D=lr,_=c(41075),Ce=function(p){var d,i=p.name,m=p.scale,w=p.appearance;return d={},(0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)(d,"".concat(i,"Bg"),m["".concat(w,"A")][1]),"".concat(i,"BgHover"),m["".concat(w,"A")][2]),"".concat(i,"Border"),m[w][4]),"".concat(i,"BorderSecondary"),m[w][3]),"".concat(i,"BorderHover"),m[w][5]),"".concat(i,"Hover"),m[w][10]),"".concat(i),m[w][9]),"".concat(i,"Active"),m[w][7]),"".concat(i,"TextHover"),m["".concat(w,"A")][10]),"".concat(i,"Text"),m["".concat(w,"A")][9]),(0,f.Z)(d,"".concat(i,"TextActive"),m["".concat(w,"A")][7])},cr=function(p){var d=p.name,i=p.scale,m=p.appearance,w={},q=(0,v.Z)(i[m].entries()),pe;try{for(q.s();!(pe=q.n()).done;){var be=(0,x.Z)(pe.value,2),Me=be[0],ue=be[1];Me===0||Me===12||(w["".concat(d).concat(Me)]=ue)}}catch(Ke){q.e(Ke)}finally{q.f()}var Oe=(0,v.Z)(i["".concat(m,"A")].entries()),se;try{for(Oe.s();!(se=Oe.n()).done;){var Xe=(0,x.Z)(se.value,2),je=Xe[0],Be=Xe[1];je===0||je===12||(w["".concat(d).concat(je,"A")]=Be)}}catch(Ke){Oe.e(Ke)}finally{Oe.f()}return(0,s.Z)((0,s.Z)({},w),Ce({appearance:m,name:d,scale:i}))},Le=function(p){for(var d=p.isDarkMode,i={},m=0,w=Object.entries(_._);m<w.length;m++){var q=(0,x.Z)(w[m],2),pe=q[0],be=q[1];i=(0,s.Z)((0,s.Z)({},i),cr({appearance:d?"dark":"light",name:D(pe),scale:be}))}return i},de=function(p){var d=p.type,i=p.scale,m=p.appearance,w=ur(d),q=m==="dark";return(0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)({},"color".concat(w,"Bg"),i[m][1]),"color".concat(w,"BgHover"),i[m][2]),"color".concat(w,"Border"),i[m][4]),"color".concat(w,"BorderHover"),i[m][q?5:3]),"color".concat(w,"Hover"),i[m][q?10:8]),"color".concat(w),i[m][9]),"color".concat(w,"Active"),i[m][q?7:10]),"color".concat(w,"TextHover"),i[m][q?10:8]),"color".concat(w,"Text"),i[m][9]),"color".concat(w,"TextActive"),i[m][q?7:10])},dr=function(p){var d=p.scale,i=p.appearance;return{colorBgContainer:i==="dark"?d[i][1]:d[i][0],colorBgElevated:i==="dark"?d[i][2]:d[i][0],colorBgLayout:i==="dark"?d[i][0]:d[i][1],colorBgMask:d.lightA[8],colorBgSpotlight:d[i][5],colorBorder:d[i][4],colorBorderSecondary:d[i][3],colorFill:d["".concat(i,"A")][3],colorFillQuaternary:d["".concat(i,"A")][0],colorFillSecondary:d["".concat(i,"A")][2],colorFillTertiary:d["".concat(i,"A")][1],colorText:d[i][12],colorTextQuaternary:d[i][6],colorTextSecondary:d[i][10],colorTextTertiary:d[i][8]}},Rr={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},Fr=de({appearance:"dark",scale:_._.bnw,type:"Primary"}),fr=dr({appearance:"dark",scale:_._.gray}),Tr=de({appearance:"dark",scale:_._.lime,type:"Success"}),Yr=de({appearance:"dark",scale:_._.gold,type:"Warning"}),_r=de({appearance:"dark",scale:_._.red,type:"Error"}),Ue=de({appearance:"dark",scale:_._.blue,type:"Info"}),Qr=(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},Fr),fr),Tr),Yr),_r),Ue),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Ue.colorInfoText,colorLinkActive:Ue.colorInfoTextActive,colorLinkHover:Ue.colorInfoTextHover,colorTextLightSolid:fr.colorBgLayout}),Xr=Qr,Or=function(p,d){var i=p.primaryColor,m=p.neutralColor,w={},q={},pe=_._[i];pe&&(w=de({appearance:"dark",scale:pe,type:"Primary"}));var be=Rr[m];return be&&(q=dr({appearance:"dark",scale:be})),(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},d),Xr),w),q)},jr=de({appearance:"light",scale:_._.bnw,type:"Primary"}),Er=dr({appearance:"light",scale:_._.gray}),Zr=de({appearance:"light",scale:_._.green,type:"Success"}),Lr=de({appearance:"light",scale:_._.orange,type:"Warning"}),Kr=de({appearance:"light",scale:_._.volcano,type:"Error"}),pr=de({appearance:"light",scale:_._.geekblue,type:"Info"}),br=(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},jr),Er),Zr),Lr),Kr),pr),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:pr.colorInfoText,colorLinkActive:pr.colorInfoTextActive,colorLinkHover:pr.colorInfoTextHover,colorTextLightSolid:Er.colorBgLayout}),Mr=br,We=function(p,d){var i=p.primaryColor,m=p.neutralColor,w={},q={},pe=_._[i];pe&&(w=de({appearance:"light",scale:pe,type:"Primary"}));var be=Rr[m];return be&&(q=dr({appearance:"light",scale:be})),(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},d),Mr),w),q)},mr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',Pr='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',kr='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',Hr="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",Dr={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[Pr,kr,mr].join(","),fontFamilyCode:[Hr,kr,mr].join(",")},Ur=function(p){var d=p.neutralColor,i=p.appearance,m=p.primaryColor,w=i==="dark";return{algorithm:w?Or:We,token:(0,s.Z)((0,s.Z)({},Dr),{},{neutralColor:d,primaryColor:m})}},Re=c(79366),Ar,Wr=function(l){return(0,$.iv)(Ar||(Ar=(0,U.Z)([`
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
`])),l.prefixCls,(0,Re.XV)(l.colorPrimary),l.prefixCls,l.prefixCls,(0,Re.XV)(l.colorPrimary),(0,Re.XV)(l.colorPrimary),(0,Re.XV)(l.colorPrimaryActive),l.prefixCls,l.colorBgLayout,l.colorText,l.borderRadiusSM,l.prefixCls,l.colorText,l.prefixCls,l.colorBgContainer,l.prefixCls,l.prefixCls,l.prefixCls,l.stylish.blur,l.borderRadiusLG,(0,Re.m4)(l.colorBgMask,.1),l.prefixCls,l.colorBorderSecondary,l.boxShadowSecondary,l.prefixCls,l.colorBorderSecondary,l.borderRadius,l.boxShadowSecondary,l.prefixCls)},zr,Te=function(l){return(0,$.iv)(zr||(zr=(0,U.Z)([`
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
`])),l.isDarkMode?"dark":"light",l.fontFamily,l.fontSize,l.colorTextBase,l.colorBgLayout,l.fontFamilyCode,l.fontFamilyCode,l.yellow9,l.colorFill)},Br=(0,$.vJ)(function(l){var p=l.theme;return[Te(p),Wr(p)]}),he=Br,Fe=c(11527),gr=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],ke=(0,P.memo)(function(l){var p=l.children,d=l.customStylish,i=l.customToken,m=l.enableWebfonts,w=m===void 0?!0:m,q=l.enableGlobalStyle,pe=q===void 0?!0:q,be=l.webfonts,Me=l.customTheme,ue=Me===void 0?{}:Me,Oe=l.className,se=l.style,Xe=(0,G.Z)(l,gr),je=(0,fe.nc)(),Be=be||[je({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),je({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),je({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),je({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],Ke=(0,P.useCallback)(function(Se){return(0,s.Z)((0,s.Z)({},z(Se)),d==null?void 0:d(Se))},[d]),Pe=(0,P.useCallback)(function(Se){return(0,s.Z)((0,s.Z)({},Le(Se)),i==null?void 0:i(Se))},[i]),$r=(0,P.useCallback)(function(Se){return Ur({appearance:Se,neutralColor:ue.neutralColor,primaryColor:ue.primaryColor})},[ue.primaryColor,ue.neutralColor]);return(0,Fe.jsxs)(Fe.Fragment,{children:[w&&(Be==null?void 0:Be.length)>0&&Be.map(function(Se){return(0,Fe.jsx)(ie,{url:Se},Se)}),(0,Fe.jsx)($.V9,{speedy:!0,children:(0,Fe.jsxs)($.f6,(0,s.Z)((0,s.Z)({customStylish:Ke,customToken:Pe},Xe),{},{theme:$r,children:[pe&&(0,Fe.jsx)(he,{}),(0,Fe.jsx)(S.Z,{className:Oe,style:(0,s.Z)({minHeight:"inherit",width:"inherit"},se),children:p})]}))})]})});ke.displayName="LobeThemeProvider";var hr=ke},6103:function(W,R,c){var s=c(80349),G=c(50959),S=c(11527),$=(0,G.memo)(function(){return(0,S.jsxs)(s.ql,{children:[(0,S.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,S.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,S.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,S.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,S.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,S.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,S.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,S.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,S.jsx)("meta",{content:"#000000",name:"theme-color"})]})});R.Z=$},69206:function(W,R,c){c.d(R,{f:function(){return S}});var s=c(47679),G=c(6522),S=(0,s.Ue)()((0,G.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(W){W.exports=function R(c,s){if(c===s)return!0;if(c&&s&&typeof c=="object"&&typeof s=="object"){if(c.constructor!==s.constructor)return!1;var G,S,$;if(Array.isArray(c)){if(G=c.length,G!=s.length)return!1;for(S=G;S--!==0;)if(!R(c[S],s[S]))return!1;return!0}if(c.constructor===RegExp)return c.source===s.source&&c.flags===s.flags;if(c.valueOf!==Object.prototype.valueOf)return c.valueOf()===s.valueOf();if(c.toString!==Object.prototype.toString)return c.toString()===s.toString();if($=Object.keys(c),G=$.length,G!==Object.keys(s).length)return!1;for(S=G;S--!==0;)if(!Object.prototype.hasOwnProperty.call(s,$[S]))return!1;for(S=G;S--!==0;){var P=$[S];if(!R(c[P],s[P]))return!1}return!0}return c!==c&&s!==s}},79366:function(W,R,c){c.d(R,{XV:function(){return pn},m4:function(){return w}});var s=c(91010),G=c(50269),S=c(62968);function $(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,(0,S.Z)(e,r)}var P=c(72693);function fe(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch(r){return typeof e=="function"}}var ce=c(22935);function ae(e,r,n){if((0,ce.Z)())return Reflect.construct.apply(null,arguments);var t=[null];t.push.apply(t,r);var a=new(e.bind.apply(e,t));return n&&(0,S.Z)(a,n.prototype),a}function ie(e){var r=typeof Map=="function"?new Map:void 0;return ie=function(t){if(t===null||!fe(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r!="undefined"){if(r.has(t))return r.get(t);r.set(t,a)}function a(){return ae(t,arguments,(0,P.Z)(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),(0,S.Z)(a,t)},ie(e)}function U(){var e;return e=arguments.length-1,e<0||arguments.length<=e?void 0:arguments[e]}function X(e){return-e}function V(e,r){return e+r}function g(e,r){return e-r}function j(e,r){return e*r}function H(e,r){return e/r}function J(){return Math.max.apply(Math,arguments)}function ee(){return Math.min.apply(Math,arguments)}function k(){return Array.of.apply(Array,arguments)}var z={symbols:{"*":{infix:{symbol:"*",f:j,notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"*",regSymbol:"\\*"},"/":{infix:{symbol:"/",f:H,notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"/",regSymbol:"/"},"+":{infix:{symbol:"+",f:V,notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"+",f:U,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"+",regSymbol:"\\+"},"-":{infix:{symbol:"-",f:g,notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"-",f:X,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"-",regSymbol:"-"},",":{infix:{symbol:",",f:k,notation:"infix",precedence:1,rightToLeft:0,argCount:2},symbol:",",regSymbol:","},"(":{prefix:{symbol:"(",f:U,notation:"prefix",precedence:0,rightToLeft:0,argCount:1},symbol:"(",regSymbol:"\\("},")":{postfix:{symbol:")",f:void 0,notation:"postfix",precedence:0,rightToLeft:0,argCount:1},symbol:")",regSymbol:"\\)"},min:{func:{symbol:"min",f:ee,notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"min",regSymbol:"min\\b"},max:{func:{symbol:"max",f:J,notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"max",regSymbol:"max\\b"}}},x=null,v={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

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
`};function f(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=r[0],a=[],u;for(u=1;u<r.length;u+=1)a.push(r[u]);return a.forEach(function(b){t=t.replace(/%[a-z]/,b)}),t}var o=function(e){$(r,e);function r(n){var t;if(!0)t=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this;else var a,u,b;return(0,G.Z)(t)}return r}(ie(Error)),L=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function A(e){var r={};return r.symbols=e?_extends({},x.symbols,e.symbols):_extends({},x.symbols),r}function Y(e,r){var n,t=e.pop();return r.push(t.f.apply(t,(n=[]).concat.apply(n,r.splice(-t.argCount)))),t.precedence}function B(e,r){var n=A(r),t,a=[n.symbols["("].prefix],u=[],b=new RegExp("\\d+(?:\\.\\d+)?|"+Object.keys(n.symbols).map(function(ge){return n.symbols[ge]}).sort(function(ge,ze){return ze.symbol.length-ge.symbol.length}).map(function(ge){return ge.regSymbol}).join("|")+"|(\\S)","g");b.lastIndex=0;var y=!1;do{t=b.exec(e);var O=t||[")",void 0],M=O[0],te=O[1],Z=n.symbols[M],N=Z&&!Z.prefix&&!Z.func,ve=!Z||!Z.postfix&&!Z.infix;if(te||(y?ve:N))throw new o(37,t?t.index:e.length,e);if(y){var ye=Z.postfix||Z.infix;do{var Ae=a[a.length-1];if((ye.precedence-Ae.precedence||Ae.rightToLeft)>0)break}while(Y(a,u));y=ye.notation==="postfix",ye.symbol!==")"&&(a.push(ye),y&&Y(a,u))}else if(Z){if(a.push(Z.prefix||Z.func),Z.func&&(t=b.exec(e),!t||t[0]!=="("))throw new o(38,t?t.index:e.length,e)}else u.push(+M),y=!0}while(t&&a.length);if(a.length)throw new o(39,t?t.index:e.length,e);if(t)throw new o(40,t?t.index:e.length,e);return u.pop()}function F(e){return e.split("").reverse().join("")}function re(e,r){var n=F(e),t=n.match(L);if(t&&!t.every(function(u){return u===t[0]}))throw new o(41);var a=F(n.replace(L,""));return""+B(a,r)+(t?F(t[0]):"")}var ne=/--[\S]*/g;function Q(e,r){if(!e||!e.match(ne))throw new o(73);var n;if(typeof document!="undefined"&&document.documentElement!==null&&(n=getComputedStyle(document.documentElement).getPropertyValue(e)),n)return n.trim();if(r)return r;throw new o(74)}function K(e){return e.charAt(0).toUpperCase()+e.slice(1)}var E=null;function I(e,r){if(!e)return r.toLowerCase();var n=e.split("-");if(n.length>1)return n.splice(1,0,r),n.reduce(function(a,u){return""+a+K(u)});var t=e.replace(/([a-z])([A-Z])/g,"$1"+r+"$2");return e===t?""+e+r:t}function T(e,r){for(var n={},t=0;t<r.length;t+=1)(r[t]||r[t]===0)&&(n[I(e,E[t])]=r[t]);return n}function h(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];var a=n[0],u=n[1],b=u===void 0?a:u,y=n[2],O=y===void 0?a:y,M=n[3],te=M===void 0?b:M,Z=[a,b,O,te];return T(e,Z)}function C(e,r){return e.substr(-r.length)===r}var oe=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function xe(e){if(typeof e!="string")return e;var r=e.match(oe);return r?parseFloat(e):e}var $e=function(r){return function(n,t){t===void 0&&(t="16px");var a=n,u=t;if(typeof n=="string"){if(!C(n,"px"))throw new o(69,r,n);a=xe(n)}if(typeof t=="string"){if(!C(t,"px"))throw new o(70,r,t);u=xe(t)}if(typeof a=="string")throw new o(71,n,r);if(typeof u=="string")throw new o(72,t,r);return""+a/u+r}},He=$e,vr=He("em"),Ve=null,Ne=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function me(e){if(typeof e!="string")return[e,""];var r=e.match(Ne);return r?[parseFloat(e),r[2]]:[e,void 0]}function qe(e,r){if(typeof e!="object"||e===null)throw new o(75,typeof e);var n={};return Object.keys(e).forEach(function(t){typeof e[t]=="object"&&e[t]!==null?n[t]=qe(e[t],r):!r||r&&(r===t||r.indexOf(t)>=0)?n[t]=e[t]+" !important":n[t]=e[t]}),n}var Ee={minorSecond:1.067,majorSecond:1.125,minorThird:1.2,majorThird:1.25,perfectFourth:1.333,augFourth:1.414,perfectFifth:1.5,minorSixth:1.6,goldenSection:1.618,majorSixth:1.667,minorSeventh:1.778,majorSeventh:1.875,octave:2,majorTenth:2.5,majorEleventh:2.667,majorTwelfth:3,doubleOctave:4};function Ze(e){return Ee[e]}function er(e,r,n){if(r===void 0&&(r="1em"),n===void 0&&(n=1.333),typeof e!="number")throw new o(42);if(typeof n=="string"&&!Ee[n])throw new o(43);var t=typeof r=="string"?me(r):[r,""],a=t[0],u=t[1],b=typeof n=="string"?Ze(n):n;if(typeof a=="string")throw new o(44,r);return""+a*Math.pow(b,e)+(u||"")}var we=He("rem"),rr=null,Ie=16;function Je(e){var r=me(e);if(r[1]==="px")return parseFloat(e);if(r[1]==="%")return parseFloat(e)/100*Ie;throw new o(78,r[1])}function De(){if(typeof document!="undefined"&&document.documentElement!==null){var e=getComputedStyle(document.documentElement).fontSize;return e?Je(e):Ie}return Ie}function Ge(e,r){var n=me(e);if(n[1]!=="rem"&&n[1]!=="")throw new o(77,n[1]);var t=r?Je(r):De();return n[0]*t+"px"}var Ye={back:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",circ:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",cubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",expo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",quad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",quart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",quint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",sine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)"};function nr(e){return Ye[e.toLowerCase().trim()]}var tr={back:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",circ:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",cubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",expo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",quad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",quart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",quint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",sine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"};function yr(e){return tr[e.toLowerCase().trim()]}var ar={back:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",cubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",circ:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",expo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",quad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",quart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",quint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",sine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)"};function xr(e){return ar[e.toLowerCase().trim()]}function _e(e,r,n,t){n===void 0&&(n="320px"),t===void 0&&(t="1200px");var a=me(e),u=a[0],b=a[1],y=me(r),O=y[0],M=y[1],te=me(n),Z=te[0],N=te[1],ve=me(t),ye=ve[0],Ae=ve[1];if(typeof Z!="number"||typeof ye!="number"||!N||!Ae||N!==Ae)throw new o(47);if(typeof u!="number"||typeof O!="number"||b!==M)throw new o(48);if(b!==N||M!==Ae)throw new o(76);var ge=(u-O)/(Z-ye),ze=O-ge*ye;return"calc("+ze.toFixed(2)+(b||"")+" + "+(100*ge).toFixed(2)+"vw)"}function Sr(e){var r;e===void 0&&(e="&");var n=e+"::after";return r={},r[n]={clear:"both",content:'""',display:"table"},r}function wr(e){return e===void 0&&(e=0),{position:"absolute",top:e,right:e,bottom:e,left:e}}function Cr(e,r){r===void 0&&(r=1);var n={display:"inline-block",maxWidth:e||"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"};return r>1?_extends({},n,{WebkitBoxOrient:"vertical",WebkitLineClamp:r,display:"-webkit-box",whiteSpace:"normal"}):n}function or(e,r){var n=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=ir(e))||r&&e&&typeof e.length=="number"){n&&(e=n);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e,r){if(e){if(typeof e=="string")return Qe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qe(e,r)}}function Qe(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function ur(e,r,n){if(r===void 0&&(r="320px"),n===void 0&&(n="1200px"),!Array.isArray(e)&&typeof e!="object"||e===null)throw new o(49);if(Array.isArray(e)){for(var t={},a={},u=or(e),b;!(b=u()).done;){var y,O,M=b.value;if(!M.prop||!M.fromSize||!M.toSize)throw new o(50);a[M.prop]=M.fromSize,t["@media (min-width: "+r+")"]=_extends({},t["@media (min-width: "+r+")"],(y={},y[M.prop]=_e(M.fromSize,M.toSize,r,n),y)),t["@media (min-width: "+n+")"]=_extends({},t["@media (min-width: "+n+")"],(O={},O[M.prop]=M.toSize,O))}return _extends({},a,t)}else{var te,Z,N;if(!e.prop||!e.fromSize||!e.toSize)throw new o(51);return N={},N[e.prop]=e.fromSize,N["@media (min-width: "+r+")"]=(te={},te[e.prop]=_e(e.fromSize,e.toSize,r,n),te),N["@media (min-width: "+n+")"]=(Z={},Z[e.prop]=e.toSize,Z),N}}var sr=/^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i,lr={woff:"woff",woff2:"woff2",ttf:"truetype",otf:"opentype",eot:"embedded-opentype",svg:"svg",svgz:"svg"};function D(e,r){return r?' format("'+lr[e]+'")':""}function _(e){return!!e.replace(/\s+/g," ").match(sr)}function Ce(e,r,n){if(_(e))return'url("'+e+'")'+D(r[0],n);var t=r.map(function(a){return'url("'+e+"."+a+'")'+D(a,n)});return t.join(", ")}function cr(e){var r=e.map(function(n){return'local("'+n+'")'});return r.join(", ")}function Le(e,r,n,t){var a=[];return r&&a.push(cr(r)),e&&a.push(Ce(e,n,t)),a.join(", ")}function de(e){var r=e.fontFamily,n=e.fontFilePath,t=e.fontStretch,a=e.fontStyle,u=e.fontVariant,b=e.fontWeight,y=e.fileFormats,O=y===void 0?["eot","woff2","woff","ttf","svg"]:y,M=e.formatHint,te=M===void 0?!1:M,Z=e.localFonts,N=Z===void 0?[r]:Z,ve=e.unicodeRange,ye=e.fontDisplay,Ae=e.fontVariationSettings,ge=e.fontFeatureSettings;if(!r)throw new o(55);if(!n&&!N)throw new o(52);if(N&&!Array.isArray(N))throw new o(53);if(!Array.isArray(O))throw new o(54);var ze={"@font-face":{fontFamily:r,src:Le(n,N,O,te),unicodeRange:ve,fontStretch:t,fontStyle:a,fontVariant:u,fontWeight:b,fontDisplay:ye,fontVariationSettings:Ae,fontFeatureSettings:ge}};return JSON.parse(JSON.stringify(ze))}function dr(){return{textIndent:"101%",overflow:"hidden",whiteSpace:"nowrap"}}function Rr(){return{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}}function Fr(e){return e===void 0&&(e=1.3),`
    @media only screen and (-webkit-min-device-pixel-ratio: `+e+`),
    only screen and (min--moz-device-pixel-ratio: `+e+`),
    only screen and (-o-min-device-pixel-ratio: `+e+`/1),
    only screen and (min-resolution: `+Math.round(e*96)+`dpi),
    only screen and (min-resolution: `+e+`dppx)
  `}function fr(e){for(var r="",n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];for(var u=0;u<e.length;u+=1)if(r+=e[u],u===t.length-1&&t[u]){var b=t.filter(function(y){return!!y});b.length>1?(r=r.slice(0,-1),r+=", "+t[u]):b.length===1&&(r+=""+t[u])}else t[u]&&(r+=t[u]+" ");return r.trim()}var Tr;function Yr(e){var r=e.colorStops,n=e.fallback,t=e.toDirection,a=t===void 0?"":t;if(!r||r.length<2)throw new o(56);return{backgroundColor:n||r[0].replace(/,\s+/g,",").split(" ")[0].replace(/,(?=\S)/g,", "),backgroundImage:fr(Tr||(Tr=_taggedTemplateLiteralLoose(["linear-gradient(","",")"])),a,r.join(", ").replace(/,(?=\S)/g,", "))}}function _r(){var e;return[(e={html:{lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:"0"},main:{display:"block"},h1:{fontSize:"2em",margin:"0.67em 0"},hr:{boxSizing:"content-box",height:"0",overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{backgroundColor:"transparent"},"abbr[title]":{borderBottom:"none",textDecoration:"underline"}},e[`b,
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
    [type="number"]::-webkit-outer-spin-button`]={height:"auto"},e['[type="search"]']={WebkitAppearance:"textfield",outlineOffset:"-2px"},e['[type="search"]::-webkit-search-decoration']={WebkitAppearance:"none"},e["::-webkit-file-upload-button"]={WebkitAppearance:"button",font:"inherit"},e.details={display:"block"},e.summary={display:"list-item"},e.template={display:"none"},e["[hidden]"]={display:"none"},e),{"abbr[title]":{textDecoration:"underline dotted"}}]}var Ue;function Qr(e){var r=e.colorStops,n=e.extent,t=n===void 0?"":n,a=e.fallback,u=e.position,b=u===void 0?"":u,y=e.shape,O=y===void 0?"":y;if(!r||r.length<2)throw new o(57);return{backgroundColor:a||r[0].split(" ")[0],backgroundImage:fr(Ue||(Ue=_taggedTemplateLiteralLoose(["radial-gradient(","","","",")"])),b,O,t,r.join(", "))}}function Xr(e,r,n,t,a){var u;if(n===void 0&&(n="png"),a===void 0&&(a="_2x"),!e)throw new o(58);var b=n.replace(/^\./,""),y=t?t+"."+b:""+e+a+"."+b;return u={backgroundImage:"url("+e+"."+b+")"},u[Fr()]=_extends({backgroundImage:"url("+y+")"},r?{backgroundSize:r}:{}),u}var Or={easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeInCirc:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",easeInCubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",easeInExpo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",easeInQuad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",easeInQuart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)",easeOutBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",easeOutCubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",easeOutCirc:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",easeOutExpo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",easeOutQuad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",easeOutQuart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",easeInOutCirc:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",easeInOutCubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",easeInOutExpo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",easeInOutQuad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",easeInOutQuart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"};function jr(e){return Or[e]}function Er(e){return jr(e)}var Zr=function(r,n,t){var a=""+t[0]+(t[1]||""),u=""+t[0]/2+(t[1]||""),b=""+n[0]+(n[1]||""),y=""+n[0]/2+(n[1]||"");switch(r){case"top":return"0 "+u+" "+b+" "+u;case"topLeft":return a+" "+b+" 0 0";case"left":return y+" "+a+" "+y+" 0";case"bottomLeft":return a+" 0 0 "+b;case"bottom":return b+" "+u+" 0 "+u;case"bottomRight":return"0 0 "+a+" "+b;case"right":return y+" 0 "+y+" "+a;case"topRight":default:return"0 "+a+" "+b+" 0"}},Lr=function(r,n){switch(r){case"top":case"bottomRight":return{borderBottomColor:n};case"right":case"bottomLeft":return{borderLeftColor:n};case"bottom":case"topLeft":return{borderTopColor:n};case"left":case"topRight":return{borderRightColor:n};default:throw new o(59)}};function Kr(e){var r=e.pointingDirection,n=e.height,t=e.width,a=e.foregroundColor,u=e.backgroundColor,b=u===void 0?"transparent":u,y=me(t),O=me(n);if(isNaN(O[0])||isNaN(y[0]))throw new o(60);return _extends({width:"0",height:"0",borderColor:b},Lr(r,a),{borderStyle:"solid",borderWidth:Zr(r,O,y)})}function pr(e){e===void 0&&(e="break-word");var r=e==="break-word"?"break-all":e;return{overflowWrap:e,wordWrap:e,wordBreak:r}}function br(e){return Math.round(e*255)}function Mr(e,r,n){return br(e)+","+br(r)+","+br(n)}function We(e,r,n,t){if(t===void 0&&(t=Mr),r===0)return t(n,n,n);var a=(e%360+360)%360/60,u=(1-Math.abs(2*n-1))*r,b=u*(1-Math.abs(a%2-1)),y=0,O=0,M=0;a>=0&&a<1?(y=u,O=b):a>=1&&a<2?(y=b,O=u):a>=2&&a<3?(O=u,M=b):a>=3&&a<4?(O=b,M=u):a>=4&&a<5?(y=b,M=u):a>=5&&a<6&&(y=u,M=b);var te=n-u/2,Z=y+te,N=O+te,ve=M+te;return t(Z,N,ve)}var mr={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Pr(e){if(typeof e!="string")return e;var r=e.toLowerCase();return mr[r]?"#"+mr[r]:e}var kr=/^#[a-fA-F0-9]{6}$/,Hr=/^#[a-fA-F0-9]{8}$/,Dr=/^#[a-fA-F0-9]{3}$/,Ur=/^#[a-fA-F0-9]{4}$/,Re=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Ar=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Wr=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,zr=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Te(e){if(typeof e!="string")throw new o(3);var r=Pr(e);if(r.match(kr))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(Hr)){var n=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:n}}if(r.match(Dr))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(Ur)){var t=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:t}}var a=Re.exec(r);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var u=Ar.exec(r.substring(0,50));if(u)return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10),alpha:parseFloat(""+u[4])>1?parseFloat(""+u[4])/100:parseFloat(""+u[4])};var b=Wr.exec(r);if(b){var y=parseInt(""+b[1],10),O=parseInt(""+b[2],10)/100,M=parseInt(""+b[3],10)/100,te="rgb("+We(y,O,M)+")",Z=Re.exec(te);if(!Z)throw new o(4,r,te);return{red:parseInt(""+Z[1],10),green:parseInt(""+Z[2],10),blue:parseInt(""+Z[3],10)}}var N=zr.exec(r.substring(0,50));if(N){var ve=parseInt(""+N[1],10),ye=parseInt(""+N[2],10)/100,Ae=parseInt(""+N[3],10)/100,ge="rgb("+We(ve,ye,Ae)+")",ze=Re.exec(ge);if(!ze)throw new o(4,r,ge);return{red:parseInt(""+ze[1],10),green:parseInt(""+ze[2],10),blue:parseInt(""+ze[3],10),alpha:parseFloat(""+N[4])>1?parseFloat(""+N[4])/100:parseFloat(""+N[4])}}throw new o(5)}function Br(e){var r=e.red/255,n=e.green/255,t=e.blue/255,a=Math.max(r,n,t),u=Math.min(r,n,t),b=(a+u)/2;if(a===u)return e.alpha!==void 0?{hue:0,saturation:0,lightness:b,alpha:e.alpha}:{hue:0,saturation:0,lightness:b};var y,O=a-u,M=b>.5?O/(2-a-u):O/(a+u);switch(a){case r:y=(n-t)/O+(n<t?6:0);break;case n:y=(t-r)/O+2;break;default:y=(r-n)/O+4;break}return y*=60,e.alpha!==void 0?{hue:y,saturation:M,lightness:b,alpha:e.alpha}:{hue:y,saturation:M,lightness:b}}function he(e){return Br(Te(e))}var Fe=function(r){return r.length===7&&r[1]===r[2]&&r[3]===r[4]&&r[5]===r[6]?"#"+r[1]+r[3]+r[5]:r},gr=Fe;function ke(e){var r=e.toString(16);return r.length===1?"0"+r:r}function hr(e){return ke(Math.round(e*255))}function l(e,r,n){return gr("#"+hr(e)+hr(r)+hr(n))}function p(e,r,n){return We(e,r,n,l)}function d(e,r,n){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number")return p(e,r,n);if(typeof e=="object"&&r===void 0&&n===void 0)return p(e.hue,e.saturation,e.lightness);throw new o(1)}function i(e,r,n,t){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?p(e,r,n):"rgba("+We(e,r,n)+","+t+")";if(typeof e=="object"&&r===void 0&&n===void 0&&t===void 0)return e.alpha>=1?p(e.hue,e.saturation,e.lightness):"rgba("+We(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new o(2)}function m(e,r,n){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number")return gr("#"+ke(e)+ke(r)+ke(n));if(typeof e=="object"&&r===void 0&&n===void 0)return gr("#"+ke(e.red)+ke(e.green)+ke(e.blue));throw new o(6)}function w(e,r,n,t){if(typeof e=="string"&&typeof r=="number"){var a=Te(e);return"rgba("+a.red+","+a.green+","+a.blue+","+r+")"}else{if(typeof e=="number"&&typeof r=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?m(e,r,n):"rgba("+e+","+r+","+n+","+t+")";if(typeof e=="object"&&r===void 0&&n===void 0&&t===void 0)return e.alpha>=1?m(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new o(7)}var q=function(r){return typeof r.red=="number"&&typeof r.green=="number"&&typeof r.blue=="number"&&(typeof r.alpha!="number"||typeof r.alpha=="undefined")},pe=function(r){return typeof r.red=="number"&&typeof r.green=="number"&&typeof r.blue=="number"&&typeof r.alpha=="number"},be=function(r){return typeof r.hue=="number"&&typeof r.saturation=="number"&&typeof r.lightness=="number"&&(typeof r.alpha!="number"||typeof r.alpha=="undefined")},Me=function(r){return typeof r.hue=="number"&&typeof r.saturation=="number"&&typeof r.lightness=="number"&&typeof r.alpha=="number"};function ue(e){if(typeof e!="object")throw new o(8);if(pe(e))return w(e);if(q(e))return m(e);if(Me(e))return i(e);if(be(e))return d(e);throw new o(8)}function Oe(e,r,n){return function(){var a=n.concat(Array.prototype.slice.call(arguments));return a.length>=r?e.apply(this,a):Oe(e,r,a)}}function se(e){return Oe(e,e.length,[])}function Xe(e,r){if(r==="transparent")return r;var n=he(r);return ue((0,s.Z)({},n,{hue:n.hue+parseFloat(e)}))}var je=se(Xe),Be=null;function Ke(e){if(e==="transparent")return e;var r=he(e);return ue(_extends({},r,{hue:(r.hue+180)%360}))}function Pe(e,r,n){return Math.max(e,Math.min(r,n))}function $r(e,r){if(r==="transparent")return r;var n=he(r);return ue((0,s.Z)({},n,{lightness:Pe(0,1,n.lightness-parseFloat(e))}))}var Se=se($r),Fn=null;function sn(e,r){if(r==="transparent")return r;var n=he(r);return ue((0,s.Z)({},n,{saturation:Pe(0,1,n.saturation-parseFloat(e))}))}var On=se(sn),jn=null;function Nr(e){if(e==="transparent")return 0;var r=Te(e),n=Object.keys(r).map(function(b){var y=r[b]/255;return y<=.03928?y/12.92:Math.pow((y+.055)/1.055,2.4)}),t=n[0],a=n[1],u=n[2];return parseFloat((.2126*t+.7152*a+.0722*u).toFixed(3))}function Vr(e,r){var n=Nr(e),t=Nr(r);return parseFloat((n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)).toFixed(2))}function En(e){return e==="transparent"?e:ue(_extends({},he(e),{saturation:0}))}function Zn(e){if(typeof e=="object"&&typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number")return e.alpha&&typeof e.alpha=="number"?i({hue:e.hue,saturation:e.saturation,lightness:e.lightness,alpha:e.alpha}):d({hue:e.hue,saturation:e.saturation,lightness:e.lightness});throw new o(45)}function Ln(e){if(e==="transparent")return e;var r=Te(e);return ue(_extends({},r,{red:255-r.red,green:255-r.green,blue:255-r.blue}))}function ln(e,r){if(r==="transparent")return r;var n=he(r);return ue((0,s.Z)({},n,{lightness:Pe(0,1,n.lightness+parseFloat(e))}))}var Mn=se(ln),Pn=null;function Hn(e,r){var n=Vr(e,r);return{AA:n>=4.5,AALarge:n>=3,AAA:n>=7,AAALarge:n>=4.5}}function cn(e,r,n){if(r==="transparent")return n;if(n==="transparent")return r;if(e===0)return n;var t=Te(r),a=(0,s.Z)({},t,{alpha:typeof t.alpha=="number"?t.alpha:1}),u=Te(n),b=(0,s.Z)({},u,{alpha:typeof u.alpha=="number"?u.alpha:1}),y=a.alpha-b.alpha,O=parseFloat(e)*2-1,M=O*y===-1?O:O+y,te=1+O*y,Z=(M/te+1)/2,N=1-Z,ve={red:Math.floor(a.red*Z+b.red*N),green:Math.floor(a.green*Z+b.green*N),blue:Math.floor(a.blue*Z+b.blue*N),alpha:a.alpha*parseFloat(e)+b.alpha*(1-parseFloat(e))};return w(ve)}var dn=se(cn),qr=dn;function fn(e,r){if(r==="transparent")return r;var n=Te(r),t=typeof n.alpha=="number"?n.alpha:1,a=(0,s.Z)({},n,{alpha:Pe(0,1,(t*100+parseFloat(e)*100)/100)});return w(a)}var Dn=se(fn),Un=null,en="#000",rn="#fff";function pn(e,r,n,t){r===void 0&&(r=en),n===void 0&&(n=rn),t===void 0&&(t=!0);var a=Nr(e)>.179,u=a?r:n;return!t||Vr(e,u)>=4.5?u:a?en:rn}function Wn(e){if(typeof e=="object"&&typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number")return typeof e.alpha=="number"?w({red:e.red,green:e.green,blue:e.blue,alpha:e.alpha}):m({red:e.red,green:e.green,blue:e.blue});throw new o(46)}function bn(e,r){if(r==="transparent")return r;var n=he(r);return ue((0,s.Z)({},n,{saturation:Pe(0,1,n.saturation+parseFloat(e))}))}var Bn=se(bn),$n=null;function mn(e,r){return r==="transparent"?r:ue((0,s.Z)({},he(r),{hue:parseFloat(e)}))}var Nn=se(mn),Jn=null;function gn(e,r){return r==="transparent"?r:ue((0,s.Z)({},he(r),{lightness:parseFloat(e)}))}var Gn=se(gn),Yn=null;function hn(e,r){return r==="transparent"?r:ue((0,s.Z)({},he(r),{saturation:parseFloat(e)}))}var _n=se(hn),Qn=null;function vn(e,r){return r==="transparent"?r:qr(parseFloat(e),"rgb(0, 0, 0)",r)}var Xn=se(vn),Kn=null;function yn(e,r){return r==="transparent"?r:qr(parseFloat(e),"rgb(255, 255, 255)",r)}var Vn=se(yn),qn=null;function xn(e,r){if(r==="transparent")return r;var n=Te(r),t=typeof n.alpha=="number"?n.alpha:1,a=(0,s.Z)({},n,{alpha:Pe(0,1,+(t*100-parseFloat(e)*100).toFixed(2)/100)});return w(a)}var et=se(xn),rt=null;function nt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=Array.isArray(r[0]);if(!t&&r.length>8)throw new o(64);var a=r.map(function(u){if(t&&!Array.isArray(u)||!t&&Array.isArray(u))throw new o(65);if(Array.isArray(u)&&u.length>8)throw new o(66);return Array.isArray(u)?u.join(" "):u}).join(", ");return{animation:a}}function tt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return{backgroundImage:r.join(", ")}}function at(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return{background:r.join(", ")}}var Sn=null;function ot(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];if(typeof e=="string"&&Sn.indexOf(e)>=0){var a;return a={},a["border"+K(e)+"Width"]=n[0],a["border"+K(e)+"Style"]=n[1],a["border"+K(e)+"Color"]=n[2],a}else return n.unshift(e),{borderWidth:n[0],borderStyle:n[1],borderColor:n[2]}}function it(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return h.apply(void 0,["borderColor"].concat(r))}function ut(e,r){var n=K(e);if(!r&&r!==0)throw new o(62);if(n==="Top"||n==="Bottom"){var t;return t={},t["border"+n+"RightRadius"]=r,t["border"+n+"LeftRadius"]=r,t}if(n==="Left"||n==="Right"){var a;return a={},a["borderTop"+n+"Radius"]=r,a["borderBottom"+n+"Radius"]=r,a}throw new o(63)}function st(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return h.apply(void 0,["borderStyle"].concat(r))}function lt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return h.apply(void 0,["borderWidth"].concat(r))}function nn(e,r){var n=r?":"+r:"";return e(n)}function tn(e,r,n){if(!r)throw new o(67);if(e.length===0)return nn(r,null);for(var t=[],a=0;a<e.length;a+=1){if(n&&n.indexOf(e[a])<0)throw new o(68);t.push(nn(r,e[a]))}return t=t.join(","),t}var wn=null;function Cn(e){return"button"+e+`,
  input[type="button"]`+e+`,
  input[type="reset"]`+e+`,
  input[type="submit"]`+e}function ct(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return tn(r,Cn,wn)}function dt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return h.apply(void 0,["margin"].concat(r))}function ft(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return h.apply(void 0,["padding"].concat(r))}var Tn=null;function pt(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];return Tn.indexOf(e)>=0&&e?_extends({},h.apply(void 0,[""].concat(n)),{position:e}):h.apply(void 0,["",e].concat(n))}function bt(e,r){return r===void 0&&(r=e),{height:e,width:r}}var kn=null;function An(e){return'input[type="color"]'+e+`,
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
    textarea`+e}function mt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return tn(r,An,kn)}function gt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];if(Array.isArray(r[0])&&r.length===2){var t=r[1];if(typeof t!="string")throw new o(61);var a=r[0].map(function(u){return u+" "+t}).join(", ");return{transition:a}}else return{transition:r.join(", ")}}},2179:function(W,R,c){var s=c(50959),G=c(4322);function S(U,X){return U===X&&(U!==0||1/U===1/X)||U!==U&&X!==X}var $=typeof Object.is=="function"?Object.is:S,P=G.useSyncExternalStore,fe=s.useRef,ce=s.useEffect,ae=s.useMemo,ie=s.useDebugValue;R.useSyncExternalStoreWithSelector=function(U,X,V,g,j){var H=fe(null);if(H.current===null){var J={hasValue:!1,value:null};H.current=J}else J=H.current;H=ae(function(){function k(o){if(!z){if(z=!0,x=o,o=g(o),j!==void 0&&J.hasValue){var L=J.value;if(j(L,o))return v=L}return v=o}if(L=v,$(x,o))return L;var A=g(o);return j!==void 0&&j(L,A)?L:(x=o,v=A)}var z=!1,x,v,f=V===void 0?null:V;return[function(){return k(X())},f===null?void 0:function(){return k(f())}]},[X,V,g,j]);var ee=P(U,H[0],H[1]);return ce(function(){J.hasValue=!0,J.value=ee},[ee]),ie(ee),ee}},7231:function(W,R,c){W.exports=c(2179)},36471:function(W,R,c){c.d(R,{Z:function(){return G}});var s=c(50666);function G(S,$){var P=typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(!P){if(Array.isArray(S)||(P=(0,s.Z)(S))||$&&S&&typeof S.length=="number"){P&&(S=P);var fe=0,ce=function(){};return{s:ce,n:function(){return fe>=S.length?{done:!0}:{done:!1,value:S[fe++]}},e:function(V){throw V},f:ce}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ae=!0,ie=!1,U;return{s:function(){P=P.call(S)},n:function(){var V=P.next();return ae=V.done,V},e:function(V){ie=!0,U=V},f:function(){try{!ae&&P.return!=null&&P.return()}finally{if(ie)throw U}}}}},51741:function(W,R,c){c.d(R,{Z:function(){return lr}});function s(D,_,Ce,cr){var Le=-1,de=D==null?0:D.length;for(cr&&de&&(Ce=D[++Le]);++Le<de;)Ce=_(Ce,D[Le],Le,D);return Ce}var G=s;function S(D){return function(_){return D==null?void 0:D[_]}}var $=S,P={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},fe=$(P),ce=fe,ae=c(99757),ie=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,U="\\u0300-\\u036f",X="\\ufe20-\\ufe2f",V="\\u20d0-\\u20ff",g=U+X+V,j="["+g+"]",H=RegExp(j,"g");function J(D){return D=(0,ae.Z)(D),D&&D.replace(ie,ce).replace(H,"")}var ee=J,k=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function z(D){return D.match(k)||[]}var x=z,v=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function f(D){return v.test(D)}var o=f,L="\\ud800-\\udfff",A="\\u0300-\\u036f",Y="\\ufe20-\\ufe2f",B="\\u20d0-\\u20ff",F=A+Y+B,re="\\u2700-\\u27bf",ne="a-z\\xdf-\\xf6\\xf8-\\xff",Q="\\xac\\xb1\\xd7\\xf7",K="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",E="\\u2000-\\u206f",I=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",T="A-Z\\xc0-\\xd6\\xd8-\\xde",h="\\ufe0e\\ufe0f",C=Q+K+E+I,oe="['\u2019]",xe="["+C+"]",$e="["+F+"]",He="\\d+",vr="["+re+"]",Ve="["+ne+"]",Ne="[^"+L+C+He+re+ne+T+"]",me="\\ud83c[\\udffb-\\udfff]",qe="(?:"+$e+"|"+me+")",Ee="[^"+L+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",er="[\\ud800-\\udbff][\\udc00-\\udfff]",we="["+T+"]",rr="\\u200d",Ie="(?:"+Ve+"|"+Ne+")",Je="(?:"+we+"|"+Ne+")",De="(?:"+oe+"(?:d|ll|m|re|s|t|ve))?",Ge="(?:"+oe+"(?:D|LL|M|RE|S|T|VE))?",Ye=qe+"?",nr="["+h+"]?",tr="(?:"+rr+"(?:"+[Ee,Ze,er].join("|")+")"+nr+Ye+")*",yr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ar="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",xr=nr+Ye+tr,_e="(?:"+[vr,Ze,er].join("|")+")"+xr,Sr=RegExp([we+"?"+Ve+"+"+De+"(?="+[xe,we,"$"].join("|")+")",Je+"+"+Ge+"(?="+[xe,we+Ie,"$"].join("|")+")",we+"?"+Ie+"+"+De,we+"+"+Ge,ar,yr,He,_e].join("|"),"g");function wr(D){return D.match(Sr)||[]}var Cr=wr;function or(D,_,Ce){return D=(0,ae.Z)(D),_=Ce?void 0:_,_===void 0?o(D)?Cr(D):x(D):D.match(_)||[]}var ir=or,Qe="['\u2019]",ur=RegExp(Qe,"g");function sr(D){return function(_){return G(ir(ee(_).replace(ur,"")),D,"")}}var lr=sr},47679:function(W,R,c){c.d(R,{Ue:function(){return X}});const s=g=>{let j;const H=new Set,J=(v,f)=>{const o=typeof v=="function"?v(j):v;if(!Object.is(o,j)){const L=j;j=(f!=null?f:typeof o!="object"||o===null)?o:Object.assign({},j,o),H.forEach(A=>A(j,L))}},ee=()=>j,x={setState:J,getState:ee,subscribe:v=>(H.add(v),()=>H.delete(v)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),H.clear()}};return j=g(J,ee,x),x},G=g=>g?s(g):s;var S=g=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),G(g)),$=c(50959),P=c(7231);const{useDebugValue:fe}=$,{useSyncExternalStoreWithSelector:ce}=P;let ae=!1;function ie(g,j=g.getState,H){H&&!ae&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ae=!0);const J=ce(g.subscribe,g.getState,g.getServerState||g.getState,j,H);return fe(J),J}const U=g=>{typeof g!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const j=typeof g=="function"?G(g):g,H=(J,ee)=>ie(j,J,ee);return Object.assign(H,j),H},X=g=>g?U(g):U;var V=g=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),X(g))},6522:function(W,R,c){c.d(R,{mW:function(){return ce},tJ:function(){return ee}});const s=(k,z)=>(x,v,f)=>(f.dispatch=o=>(x(L=>k(L,o),!1,o),o),f.dispatchFromDevtools=!0,le({dispatch:(...o)=>f.dispatch(...o)},z)),G=null,S=new Map,$=k=>{const z=S.get(k);return z?Object.fromEntries(Object.entries(z.stores).map(([x,v])=>[x,v.getState()])):{}},P=(k,z,x)=>{if(k===void 0)return{type:"untracked",connection:z.connect(x)};const v=S.get(x.name);if(v)return le({type:"tracked",store:k},v);const f={connection:z.connect(x),stores:{}};return S.set(x.name,f),le({type:"tracked",store:k},f)},ce=(k,z={})=>(x,v,f)=>{const E=z,{enabled:o,anonymousActionType:L,store:A}=E,Y=Gr(E,["enabled","anonymousActionType","store"]);let B;try{B=(o!=null?o:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(T){}if(!B)return o&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),k(x,v,f);const I=P(A,B,Y),{connection:F}=I,re=Gr(I,["connection"]);let ne=!0;f.setState=(T,h,C)=>{const oe=x(T,h);if(!ne)return oe;const xe=C===void 0?{type:L||"anonymous"}:typeof C=="string"?{type:C}:C;return A===void 0?(F==null||F.send(xe,v()),oe):(F==null||F.send(Jr(le({},xe),{type:`${A}/${xe.type}`}),Jr(le({},$(Y.name)),{[A]:f.getState()})),oe)};const Q=(...T)=>{const h=ne;ne=!1,x(...T),ne=h},K=k(f.setState,v,f);if(re.type==="untracked"?F==null||F.init(K):(re.stores[re.store]=f,F==null||F.init(Object.fromEntries(Object.entries(re.stores).map(([T,h])=>[T,T===re.store?K:h.getState()])))),f.dispatchFromDevtools&&typeof f.dispatch=="function"){let T=!1;const h=f.dispatch;f.dispatch=(...C)=>{C[0].type==="__setState"&&!T&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),T=!0),h(...C)}}return F.subscribe(T=>{var h;switch(T.type){case"ACTION":if(typeof T.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return ae(T.payload,C=>{if(C.type==="__setState"){if(A===void 0){Q(C.state);return}Object.keys(C.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const oe=C.state[A];if(oe==null)return;JSON.stringify(f.getState())!==JSON.stringify(oe)&&Q(oe);return}f.dispatchFromDevtools&&typeof f.dispatch=="function"&&f.dispatch(C)});case"DISPATCH":switch(T.payload.type){case"RESET":return Q(K),A===void 0?F==null?void 0:F.init(f.getState()):F==null?void 0:F.init($(Y.name));case"COMMIT":if(A===void 0){F==null||F.init(f.getState());return}return F==null?void 0:F.init($(Y.name));case"ROLLBACK":return ae(T.state,C=>{if(A===void 0){Q(C),F==null||F.init(f.getState());return}Q(C[A]),F==null||F.init($(Y.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return ae(T.state,C=>{if(A===void 0){Q(C);return}JSON.stringify(f.getState())!==JSON.stringify(C[A])&&Q(C[A])});case"IMPORT_STATE":{const{nextLiftedState:C}=T.payload,oe=(h=C.computedStates.slice(-1)[0])==null?void 0:h.state;if(!oe)return;Q(A===void 0?oe:oe[A]),F==null||F.send(null,C);return}case"PAUSE_RECORDING":return ne=!ne}return}}),K},ae=(k,z)=>{let x;try{x=JSON.parse(k)}catch(v){console.error("[zustand devtools middleware] Could not parse the received json",v)}x!==void 0&&z(x)},ie=k=>(z,x,v)=>{const f=v.subscribe;return v.subscribe=(L,A,Y)=>{let B=L;if(A){const F=(Y==null?void 0:Y.equalityFn)||Object.is;let re=L(v.getState());B=ne=>{const Q=L(ne);if(!F(re,Q)){const K=re;A(re=Q,K)}},Y!=null&&Y.fireImmediately&&A(re,re)}return f(B)},k(z,x,v)},U=null,X=(k,z)=>(...x)=>Object.assign({},k,z(...x));function V(k,z){let x;try{x=k()}catch(f){return}return{getItem:f=>{var o;const L=Y=>Y===null?null:JSON.parse(Y,z==null?void 0:z.reviver),A=(o=x.getItem(f))!=null?o:null;return A instanceof Promise?A.then(L):L(A)},setItem:(f,o)=>x.setItem(f,JSON.stringify(o,z==null?void 0:z.replacer)),removeItem:f=>x.removeItem(f)}}const g=k=>z=>{try{const x=k(z);return x instanceof Promise?x:{then(v){return g(v)(x)},catch(v){return this}}}catch(x){return{then(v){return this},catch(v){return g(v)(x)}}}},j=(k,z)=>(x,v,f)=>{let o=le({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:I=>I,version:0,merge:(I,T)=>le(le({},T),I)},z),L=!1;const A=new Set,Y=new Set;let B;try{B=o.getStorage()}catch(I){}if(!B)return k((...I)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),x(...I)},v,f);const F=g(o.serialize),re=()=>{const I=o.partialize(le({},v()));let T;const h=F({state:I,version:o.version}).then(C=>B.setItem(o.name,C)).catch(C=>{T=C});if(T)throw T;return h},ne=f.setState;f.setState=(I,T)=>{ne(I,T),re()};const Q=k((...I)=>{x(...I),re()},v,f);let K;const E=()=>{var I;if(!B)return;L=!1,A.forEach(h=>h(v()));const T=((I=o.onRehydrateStorage)==null?void 0:I.call(o,v()))||void 0;return g(B.getItem.bind(B))(o.name).then(h=>{if(h)return o.deserialize(h)}).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==o.version){if(o.migrate)return o.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var C;return K=o.merge(h,(C=v())!=null?C:Q),x(K,!0),re()}).then(()=>{T==null||T(K,void 0),L=!0,Y.forEach(h=>h(K))}).catch(h=>{T==null||T(void 0,h)})};return f.persist={setOptions:I=>{o=le(le({},o),I),I.getStorage&&(B=I.getStorage())},clearStorage:()=>{B==null||B.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>E(),hasHydrated:()=>L,onHydrate:I=>(A.add(I),()=>{A.delete(I)}),onFinishHydration:I=>(Y.add(I),()=>{Y.delete(I)})},E(),K||Q},H=(k,z)=>(x,v,f)=>{let o=le({storage:V(()=>localStorage),partialize:E=>E,version:0,merge:(E,I)=>le(le({},I),E)},z),L=!1;const A=new Set,Y=new Set;let B=o.storage;if(!B)return k((...E)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),x(...E)},v,f);const F=()=>{const E=o.partialize(le({},v()));return B.setItem(o.name,{state:E,version:o.version})},re=f.setState;f.setState=(E,I)=>{re(E,I),F()};const ne=k((...E)=>{x(...E),F()},v,f);let Q;const K=()=>{var E,I;if(!B)return;L=!1,A.forEach(h=>{var C;return h((C=v())!=null?C:ne)});const T=((I=o.onRehydrateStorage)==null?void 0:I.call(o,(E=v())!=null?E:ne))||void 0;return g(B.getItem.bind(B))(o.name).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==o.version){if(o.migrate)return o.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var C;return Q=o.merge(h,(C=v())!=null?C:ne),x(Q,!0),F()}).then(()=>{T==null||T(Q,void 0),Q=v(),L=!0,Y.forEach(h=>h(Q))}).catch(h=>{T==null||T(void 0,h)})};return f.persist={setOptions:E=>{o=le(le({},o),E),E.storage&&(B=E.storage)},clearStorage:()=>{B==null||B.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>K(),hasHydrated:()=>L,onHydrate:E=>(A.add(E),()=>{A.delete(E)}),onFinishHydration:E=>(Y.add(E),()=>{Y.delete(E)})},o.skipHydration||K(),Q||ne},ee=(k,z)=>"getStorage"in z||"serialize"in z||"deserialize"in z?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),j(k,z)):H(k,z)}}]);
}());