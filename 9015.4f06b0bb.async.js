"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9015],{2290:function(A,v,a){var n=a(75271),g=function(p){var f=document.createElement("link");return f.rel="stylesheet",f.href=p,f},b=(0,n.memo)(function(l){var p=l.url,f=(0,n.useRef)(!1);return(0,n.useEffect)(function(){if(!f.current){f.current=!0;var c=g(p);document.head.append(c)}},[]),null});v.Z=b},19980:function(A,v,a){a.d(v,{Z:function(){return bn}});var n=a(88598),g=a(58424),b=a(15558),l=a(69049),p=a(75271),f=a(91532),c=a(2290),o=a(86424),u=a(74636),t=a(15798),m=a(2790),d=a(99711),s=(0,t.z)({appearance:"dark",scale:d._.bnw,type:"Primary"}),i=(0,t.N)({appearance:"dark",scale:d._.gray}),r=(0,t.z)({appearance:"dark",scale:d._.lime,type:"Success"}),y=(0,t.z)({appearance:"dark",scale:d._.gold,type:"Warning"}),Z=(0,t.z)({appearance:"dark",scale:d._.red,type:"Error"}),S=(0,t.z)({appearance:"dark",scale:d._.blue,type:"Info"}),z=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},s),i),r),y),Z),S),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:S.colorInfoText,colorLinkActive:S.colorInfoTextActive,colorLinkHover:S.colorInfoTextHover,colorTextLightSolid:i.colorBgLayout}),W=z,M=function(h,x){var k=h.primaryColor,w=h.neutralColor,C={},O={},E=d._[k];E&&(C=(0,t.z)({appearance:"dark",scale:E,type:"Primary"}));var B=m.H[w];return B&&(O=(0,t.N)({appearance:"dark",scale:B})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},x),W),C),O)},D=(0,t.z)({appearance:"light",scale:d._.bnw,type:"Primary"}),j=(0,t.N)({appearance:"light",scale:d._.gray}),L=(0,t.z)({appearance:"light",scale:d._.green,type:"Success"}),U=(0,t.z)({appearance:"light",scale:d._.orange,type:"Warning"}),_=(0,t.z)({appearance:"light",scale:d._.volcano,type:"Error"}),R=(0,t.z)({appearance:"light",scale:d._.geekblue,type:"Info"}),$=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},D),j),L),U),_),R),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:R.colorInfoText,colorLinkActive:R.colorInfoTextActive,colorLinkHover:R.colorInfoTextHover,colorTextLightSolid:j.colorBgLayout}),q=$,nn=function(h,x){var k=h.primaryColor,w=h.neutralColor,C={},O={},E=d._[k];E&&(C=(0,t.z)({appearance:"light",scale:E,type:"Primary"}));var B=m.H[w];return B&&(O=(0,t.N)({appearance:"light",scale:B})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},x),q),C),O)},K='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',rn='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',G='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',an="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",en={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[rn,G,K].join(","),fontFamilyCode:[an,G,K].join(",")},on=function(h){var x=h.neutralColor,k=h.appearance,w=h.primaryColor,C=k==="dark";return{algorithm:C?M:nn,token:(0,n.Z)((0,n.Z)({},en),{},{neutralColor:x,primaryColor:w})}},V=a(23755),F=a(24151),X,tn=function(e){return(0,l.iv)(X||(X=(0,V.Z)([`
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
`])),e.prefixCls,(0,F.XV)(e.colorPrimary),e.prefixCls,e.prefixCls,(0,F.XV)(e.colorPrimary),(0,F.XV)(e.colorPrimary),(0,F.XV)(e.colorPrimaryActive),e.prefixCls,e.colorBgLayout,e.colorText,e.borderRadiusSM,e.prefixCls,e.colorText,e.prefixCls,e.colorBgContainer,e.prefixCls,e.prefixCls,e.prefixCls,e.stylish.blur,e.borderRadiusLG,(0,F.m4)(e.colorBgMask,.1),e.prefixCls,e.colorBorderSecondary,e.boxShadowSecondary,e.prefixCls,e.colorBorderSecondary,e.borderRadius,e.boxShadowSecondary)},Y,ln=function(e){return(0,l.iv)(Y||(Y=(0,V.Z)([`
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
`])),e.isDarkMode?"dark":"light",e.fontFamily,e.fontSize,e.colorTextBase,e.colorBgLayout,e.fontFamilyCode,e.fontFamilyCode,e.yellow9,e.colorFill)},cn=(0,l.vJ)(function(e){var h=e.theme;return[ln(h),tn(h)]}),dn=cn,P=a(52676),sn=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],Q=(0,p.memo)(function(e){var h=e.children,x=e.customStylish,k=e.customToken,w=e.enableWebfonts,C=w===void 0?!0:w,O=e.enableGlobalStyle,E=O===void 0?!0:O,B=e.webfonts,J=e.customTheme,I=J===void 0?{}:J,gn=e.className,fn=e.style,mn=(0,g.Z)(e,sn),H=(0,f.nc)(),N=B||[H({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),H({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),H({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),H({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],pn=(0,p.useCallback)(function(T){return(0,n.Z)((0,n.Z)({},(0,o.V)(T)),x==null?void 0:x(T))},[x]),un=(0,p.useCallback)(function(T){return(0,n.Z)((0,n.Z)({},(0,u.W)(T)),k==null?void 0:k(T))},[k]),vn=(0,p.useCallback)(function(T){return on({appearance:T,neutralColor:I.neutralColor,primaryColor:I.primaryColor})},[I.primaryColor,I.neutralColor]);return(0,P.jsxs)(P.Fragment,{children:[C&&(N==null?void 0:N.length)>0&&N.map(function(T){return(0,P.jsx)(c.Z,{url:T},T)}),(0,P.jsx)(l.V9,{speedy:!0,children:(0,P.jsxs)(l.f6,(0,n.Z)((0,n.Z)({customStylish:pn,customToken:un},mn),{},{theme:vn,children:[E&&(0,P.jsx)(dn,{}),(0,P.jsx)(b.Z,{className:gn,style:(0,n.Z)({minHeight:"inherit",width:"inherit"},fn),children:h})]}))})]})});Q.displayName="LobeThemeProvider";var bn=Q},15798:function(A,v,a){a.d(v,{N:function(){return l},z:function(){return b}});var n=a(30985),g=a(31927),b=function(f){var c=f.type,o=f.scale,u=f.appearance,t=(0,g.Z)(c),m=u==="dark";return(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},"color".concat(t,"Bg"),o[u][1]),"color".concat(t,"BgHover"),o[u][2]),"color".concat(t,"Border"),o[u][4]),"color".concat(t,"BorderHover"),o[u][m?5:3]),"color".concat(t,"Hover"),o[u][m?10:8]),"color".concat(t),o[u][9]),"color".concat(t,"Active"),o[u][m?7:10]),"color".concat(t,"TextHover"),o[u][m?10:8]),"color".concat(t,"Text"),o[u][9]),"color".concat(t,"TextActive"),o[u][m?7:10])},l=function(f){var c=f.scale,o=f.appearance;return{colorBgContainer:o==="dark"?c[o][1]:c[o][0],colorBgElevated:o==="dark"?c[o][2]:c[o][0],colorBgLayout:o==="dark"?c[o][0]:c[o][1],colorBgMask:c.lightA[8],colorBgSpotlight:c[o][5],colorBorder:c[o][4],colorBorderSecondary:c[o][3],colorFill:c["".concat(o,"A")][3],colorFillQuaternary:c["".concat(o,"A")][0],colorFillSecondary:c["".concat(o,"A")][2],colorFillTertiary:c["".concat(o,"A")][1],colorText:c[o][12],colorTextQuaternary:c[o][6],colorTextSecondary:c[o][10],colorTextTertiary:c[o][8]}}},2790:function(A,v,a){a.d(v,{H:function(){return n}});var n={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}}},86424:function(A,v,a){a.d(v,{V:function(){return m}});var n=a(23755),g=a(69049),b,l,p,f,c,o,u,t,m=function(s){var i=s.css,r=s.token,y=s.isDarkMode,Z=(0,g.F4)(b||(b=(0,n.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:i(l||(l=(0,n.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:i(p||(p=(0,n.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:i(f||(f=(0,n.Z)([`
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
    `])),r.colorFill,r.motionEaseOut),gradientAnimation:i(c||(c=(0,n.Z)([`
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
    `])),r.gold,r.magenta,r.geekblue,r.cyan,Z),markdown:i(o||(o=(0,n.Z)([`
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
    `])),r.colorTextSecondary,r.colorTextDescription,r.fontFamilyCode,r.colorFillSecondary,r.colorBorderSecondary,r.borderRadius,r.fontFamily,r.colorBgLayout,y?r.colorText:"#333",y?r.colorTextSecondary:"#000",y?r.colorTextSecondary:"#000",r.colorTextSecondary,r.colorBorder,r.colorBorderSecondary,r.colorFillTertiary,r.colorBorderSecondary,r.borderRadius,r.fontFamily,r.colorTextSecondary,r.colorTextSecondary,r.motionEaseOut,r.colorBorder,r.colorFillTertiary,r.borderRadius,r.colorBorderSecondary,r.colorFillQuaternary,r.colorBorderSecondary,r.fontFamilyCode),noScrollbar:i(u||(u=(0,n.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:i(t||(t=(0,n.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),r.colorTextSecondary,r.colorText)}}},74636:function(A,v,a){a.d(v,{W:function(){return u}});var n=a(97171),g=a(88598),b=a(45826),l=a(30985),p=a(27077),f=a(99711),c=function(m){var d,s=m.name,i=m.scale,r=m.appearance;return d={},(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)(d,"".concat(s,"Bg"),i["".concat(r,"A")][1]),"".concat(s,"BgHover"),i["".concat(r,"A")][2]),"".concat(s,"Border"),i[r][4]),"".concat(s,"BorderSecondary"),i[r][3]),"".concat(s,"BorderHover"),i[r][5]),"".concat(s,"Hover"),i[r][10]),"".concat(s),i[r][9]),"".concat(s,"Active"),i[r][7]),"".concat(s,"TextHover"),i["".concat(r,"A")][10]),"".concat(s,"Text"),i["".concat(r,"A")][9]),(0,l.Z)(d,"".concat(s,"TextActive"),i["".concat(r,"A")][7])},o=function(m){var d=m.name,s=m.scale,i=m.appearance,r={},y=(0,b.Z)(s[i].entries()),Z;try{for(y.s();!(Z=y.n()).done;){var S=(0,n.Z)(Z.value,2),z=S[0],W=S[1];z===0||z===12||(r["".concat(d).concat(z)]=W)}}catch(_){y.e(_)}finally{y.f()}var M=(0,b.Z)(s["".concat(i,"A")].entries()),D;try{for(M.s();!(D=M.n()).done;){var j=(0,n.Z)(D.value,2),L=j[0],U=j[1];L===0||L===12||(r["".concat(d).concat(L,"A")]=U)}}catch(_){M.e(_)}finally{M.f()}return(0,g.Z)((0,g.Z)({},r),c({appearance:i,name:d,scale:s}))},u=function(m){for(var d=m.isDarkMode,s={},i=0,r=Object.entries(f._);i<r.length;i++){var y=(0,n.Z)(r[i],2),Z=y[0],S=y[1];s=(0,g.Z)((0,g.Z)({},s),o({appearance:d?"dark":"light",name:(0,p.Z)(Z),scale:S}))}return s}},3341:function(A){A.exports=function v(a,n){if(a===n)return!0;if(a&&n&&typeof a=="object"&&typeof n=="object"){if(a.constructor!==n.constructor)return!1;var g,b,l;if(Array.isArray(a)){if(g=a.length,g!=n.length)return!1;for(b=g;b--!==0;)if(!v(a[b],n[b]))return!1;return!0}if(a.constructor===RegExp)return a.source===n.source&&a.flags===n.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===n.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===n.toString();if(l=Object.keys(a),g=l.length,g!==Object.keys(n).length)return!1;for(b=g;b--!==0;)if(!Object.prototype.hasOwnProperty.call(n,l[b]))return!1;for(b=g;b--!==0;){var p=l[b];if(!v(a[p],n[p]))return!1}return!0}return a!==a&&n!==n}}}]);
