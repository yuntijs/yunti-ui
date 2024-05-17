"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1253],{4578:function(O,k,e){var r=e(75271),p=function(u){var g=document.createElement("link");return g.rel="stylesheet",g.href=u,g},i=(0,r.memo)(function(c){var u=c.url,g=(0,r.useRef)(!1);return(0,r.useEffect)(function(){if(!g.current){g.current=!0;var d=p(u);document.head.append(d)}},[]),null});k.Z=i},63556:function(O,k,e){e.d(k,{Z:function(){return x}});var r=e(28484),p=e(46060),i=e(72320),c=e(92462),u=e(75271),g=e(19634),d=e(4578),o=e(94834),h=e(68389),t=e(32450),b=e(54526),s=e(41626),m=(0,t.z)({appearance:"dark",scale:s._.bnw,type:"Primary"}),f=(0,t.N)({appearance:"dark",scale:s._.gray}),a=(0,t.z)({appearance:"dark",scale:s._.lime,type:"Success"}),C=(0,t.z)({appearance:"dark",scale:s._.gold,type:"Warning"}),Z=(0,t.z)({appearance:"dark",scale:s._.red,type:"Error"}),T=(0,t.z)({appearance:"dark",scale:s._.blue,type:"Info"}),U=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},m),f),a),C),Z),T),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:T.colorInfoText,colorLinkActive:T.colorInfoTextActive,colorLinkHover:T.colorInfoTextHover,colorTextLightSolid:f.colorBgLayout}),N=U,P=function(l,_){var y=l.primaryColor,S=l.neutralColor,A={},M={},B=s._[y];B&&(A=(0,t.z)({appearance:"dark",scale:B,type:"Primary"}));var j=b.H[S];return j&&(M=(0,t.N)({appearance:"dark",scale:j})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},_),N),A),M)},F=(0,t.z)({appearance:"light",scale:s._.bnw,type:"Primary"}),I=(0,t.N)({appearance:"light",scale:s._.gray}),L=(0,t.z)({appearance:"light",scale:s._.green,type:"Success"}),W=(0,t.z)({appearance:"light",scale:s._.orange,type:"Warning"}),E=(0,t.z)({appearance:"light",scale:s._.volcano,type:"Error"}),H=(0,t.z)({appearance:"light",scale:s._.geekblue,type:"Info"}),Q=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},F),I),L),W),E),H),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:H.colorInfoText,colorLinkActive:H.colorInfoTextActive,colorLinkHover:H.colorInfoTextHover,colorTextLightSolid:I.colorBgLayout}),K=Q,G=function(l,_){var y=l.primaryColor,S=l.neutralColor,A={},M={},B=s._[y];B&&(A=(0,t.z)({appearance:"light",scale:B,type:"Primary"}));var j=b.H[S];return j&&(M=(0,t.N)({appearance:"light",scale:j})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},_),K),A),M)},$='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',q='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',V='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',cr="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",rr={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[q,V,$].join(","),fontFamilyCode:[cr,V,$].join(",")},ur=function(l){var _=l.neutralColor,y=l.appearance,S=l.primaryColor,A=y==="dark";return{algorithm:A?P:G,token:(0,r.Z)((0,r.Z)({},rr),{},{neutralColor:_,primaryColor:S})}},J=e(62504),z=e(31573),Y,dr=function(n){return(0,c.iv)(Y||(Y=(0,J.Z)([`
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
`])),n.prefixCls,(0,z.XV)(n.colorPrimary),n.prefixCls,n.prefixCls,(0,z.XV)(n.colorPrimary),(0,z.XV)(n.colorPrimary),(0,z.XV)(n.colorPrimaryActive),n.prefixCls,n.colorBgLayout,n.colorText,n.borderRadiusSM,n.prefixCls,n.colorText,n.prefixCls,n.colorBgContainer,n.prefixCls,n.prefixCls,n.prefixCls,n.stylish.blur,n.borderRadiusLG,(0,z.m4)(n.colorBgMask,.1),n.prefixCls,n.colorBorderSecondary,n.boxShadowSecondary,n.prefixCls,n.colorBorderSecondary,n.borderRadius,n.boxShadowSecondary,n.prefixCls)},X,sr=function(n){return(0,c.iv)(X||(X=(0,J.Z)([`
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
`])),n.isDarkMode?"dark":"light",n.fontFamily,n.fontSize,n.colorTextBase,n.colorBgLayout,n.fontFamilyCode,n.fontFamilyCode,n.yellow9,n.colorFill)},nr=(0,c.vJ)(function(n){var l=n.theme;return[sr(l),dr(l)]}),er=nr,R=e(52676),fr=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],ar=(0,u.memo)(function(n){var l=n.children,_=n.customStylish,y=n.customToken,S=n.enableWebfonts,A=S===void 0?!0:S,M=n.enableGlobalStyle,B=M===void 0?!0:M,j=n.webfonts,br=n.customTheme,or=br===void 0?{}:br,mr=n.className,pr=n.style,vr=(0,p.Z)(n,fr),tr=(0,g.nc)(),lr=j||[tr({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),tr({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),tr({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),tr({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],hr=(0,u.useCallback)(function(w){return(0,r.Z)((0,r.Z)({},(0,o.V)(w)),_==null?void 0:_(w))},[_]),xr=(0,u.useCallback)(function(w){return(0,r.Z)((0,r.Z)({},(0,h.W)(w)),y==null?void 0:y(w))},[y]),yr=(0,u.useCallback)(function(w){return ur({appearance:w,neutralColor:or.neutralColor,primaryColor:or.primaryColor})},[or.primaryColor,or.neutralColor]);return(0,R.jsxs)(R.Fragment,{children:[A&&(lr==null?void 0:lr.length)>0&&lr.map(function(w){return(0,R.jsx)(d.Z,{url:w},w)}),(0,R.jsx)(c.V9,{speedy:!0,children:(0,R.jsxs)(c.f6,(0,r.Z)((0,r.Z)({customStylish:hr,customToken:xr},vr),{},{theme:yr,children:[B&&(0,R.jsx)(er,{}),(0,R.jsx)(i.Z,{className:mr,style:(0,r.Z)({minHeight:"inherit",width:"inherit"},pr),children:l})]}))})]})});ar.displayName="LobeThemeProvider";var x=ar},32450:function(O,k,e){e.d(k,{N:function(){return c},z:function(){return i}});var r=e(55250),p=e(31927),i=function(g){var d=g.type,o=g.scale,h=g.appearance,t=(0,p.Z)(d),b=h==="dark";return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},"color".concat(t,"Bg"),o[h][1]),"color".concat(t,"BgHover"),o[h][2]),"color".concat(t,"Border"),o[h][4]),"color".concat(t,"BorderHover"),o[h][b?5:3]),"color".concat(t,"Hover"),o[h][b?10:8]),"color".concat(t),o[h][9]),"color".concat(t,"Active"),o[h][b?7:10]),"color".concat(t,"TextHover"),o[h][b?10:8]),"color".concat(t,"Text"),o[h][9]),"color".concat(t,"TextActive"),o[h][b?7:10])},c=function(g){var d=g.scale,o=g.appearance;return{colorBgContainer:o==="dark"?d[o][1]:d[o][0],colorBgElevated:o==="dark"?d[o][2]:d[o][0],colorBgLayout:o==="dark"?d[o][0]:d[o][1],colorBgMask:d.lightA[8],colorBgSpotlight:d[o][5],colorBorder:d[o][4],colorBorderSecondary:d[o][3],colorFill:d["".concat(o,"A")][3],colorFillQuaternary:d["".concat(o,"A")][0],colorFillSecondary:d["".concat(o,"A")][2],colorFillTertiary:d["".concat(o,"A")][1],colorText:d[o][12],colorTextQuaternary:d[o][6],colorTextSecondary:d[o][10],colorTextTertiary:d[o][8]}}},54526:function(O,k,e){e.d(k,{H:function(){return r}});var r={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}}},94834:function(O,k,e){e.d(k,{V:function(){return b}});var r=e(62504),p=e(92462),i,c,u,g,d,o,h,t,b=function(m){var f=m.css,a=m.token,C=m.isDarkMode,Z=(0,p.F4)(i||(i=(0,r.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:f(c||(c=(0,r.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:f(u||(u=(0,r.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:f(g||(g=(0,r.Z)([`
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
    `])),a.colorFill,a.motionEaseOut),gradientAnimation:f(d||(d=(0,r.Z)([`
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
    `])),a.gold,a.magenta,a.geekblue,a.cyan,Z),markdown:f(o||(o=(0,r.Z)([`
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
    `])),a.colorTextSecondary,a.colorTextDescription,a.fontFamilyCode,a.colorFillSecondary,a.colorBorderSecondary,a.borderRadius,a.fontFamily,a.colorBgLayout,C?a.colorText:"#333",C?a.colorTextSecondary:"#000",C?a.colorTextSecondary:"#000",a.colorTextSecondary,a.colorBorder,a.colorBorderSecondary,a.colorFillTertiary,a.colorBorderSecondary,a.borderRadius,a.fontFamily,a.colorTextSecondary,a.colorTextSecondary,a.motionEaseOut,a.colorBorder,a.colorFillTertiary,a.borderRadius,a.colorBorderSecondary,a.colorFillQuaternary,a.colorBorderSecondary,a.fontFamilyCode),noScrollbar:f(h||(h=(0,r.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:f(t||(t=(0,r.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),a.colorTextSecondary,a.colorText)}}},68389:function(O,k,e){e.d(k,{W:function(){return h}});var r=e(3392),p=e(28484),i=e(5552),c=e(55250),u=e(19457),g=e(41626),d=function(b){var s,m=b.name,f=b.scale,a=b.appearance;return s={},(0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)(s,"".concat(m,"Bg"),f["".concat(a,"A")][1]),"".concat(m,"BgHover"),f["".concat(a,"A")][2]),"".concat(m,"Border"),f[a][4]),"".concat(m,"BorderSecondary"),f[a][3]),"".concat(m,"BorderHover"),f[a][5]),"".concat(m,"Hover"),f[a][10]),"".concat(m),f[a][9]),"".concat(m,"Active"),f[a][7]),"".concat(m,"TextHover"),f["".concat(a,"A")][10]),"".concat(m,"Text"),f["".concat(a,"A")][9]),(0,c.Z)(s,"".concat(m,"TextActive"),f["".concat(a,"A")][7])},o=function(b){var s=b.name,m=b.scale,f=b.appearance,a={},C=(0,i.Z)(m[f].entries()),Z;try{for(C.s();!(Z=C.n()).done;){var T=(0,r.Z)(Z.value,2),U=T[0],N=T[1];U===0||U===12||(a["".concat(s).concat(U)]=N)}}catch(E){C.e(E)}finally{C.f()}var P=(0,i.Z)(m["".concat(f,"A")].entries()),F;try{for(P.s();!(F=P.n()).done;){var I=(0,r.Z)(F.value,2),L=I[0],W=I[1];L===0||L===12||(a["".concat(s).concat(L,"A")]=W)}}catch(E){P.e(E)}finally{P.f()}return(0,p.Z)((0,p.Z)({},a),d({appearance:f,name:s,scale:m}))},h=function(b){for(var s=b.isDarkMode,m={},f=0,a=Object.entries(g._);f<a.length;f++){var C=(0,r.Z)(a[f],2),Z=C[0],T=C[1];m=(0,p.Z)((0,p.Z)({},m),o({appearance:s?"dark":"light",name:(0,u.Z)(Z),scale:T}))}return m}},3341:function(O){O.exports=function k(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var p,i,c;if(Array.isArray(e)){if(p=e.length,p!=r.length)return!1;for(i=p;i--!==0;)if(!k(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(c=Object.keys(e),p=c.length,p!==Object.keys(r).length)return!1;for(i=p;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,c[i]))return!1;for(i=p;i--!==0;){var u=c[i];if(!k(e[u],r[u]))return!1}return!0}return e!==e&&r!==r}},5552:function(O,k,e){e.d(k,{Z:function(){return p}});var r=e(17229);function p(i,c){var u=typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(!u){if(Array.isArray(i)||(u=(0,r.Z)(i))||c&&i&&typeof i.length=="number"){u&&(i=u);var g=0,d=function(){};return{s:d,n:function(){return g>=i.length?{done:!0}:{done:!1,value:i[g++]}},e:function(s){throw s},f:d}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,h=!1,t;return{s:function(){u=u.call(i)},n:function(){var s=u.next();return o=s.done,s},e:function(s){h=!0,t=s},f:function(){try{!o&&u.return!=null&&u.return()}finally{if(h)throw t}}}}},51741:function(O,k,e){e.d(k,{Z:function(){return Tr}});function r(v,D,ir,Sr){var gr=-1,kr=v==null?0:v.length;for(Sr&&kr&&(ir=v[++gr]);++gr<kr;)ir=D(ir,v[gr],gr,v);return ir}var p=r;function i(v){return function(D){return v==null?void 0:v[D]}}var c=i,u={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},g=c(u),d=g,o=e(99757),h=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,t="\\u0300-\\u036f",b="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",m=t+b+s,f="["+m+"]",a=RegExp(f,"g");function C(v){return v=(0,o.Z)(v),v&&v.replace(h,d).replace(a,"")}var Z=C,T=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function U(v){return v.match(T)||[]}var N=U,P=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function F(v){return P.test(v)}var I=F,L="\\ud800-\\udfff",W="\\u0300-\\u036f",E="\\ufe20-\\ufe2f",H="\\u20d0-\\u20ff",Q=W+E+H,K="\\u2700-\\u27bf",G="a-z\\xdf-\\xf6\\xf8-\\xff",$="\\xac\\xb1\\xd7\\xf7",q="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",V="\\u2000-\\u206f",cr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rr="A-Z\\xc0-\\xd6\\xd8-\\xde",ur="\\ufe0e\\ufe0f",J=$+q+V+cr,z="['\u2019]",Y="["+J+"]",dr="["+Q+"]",X="\\d+",sr="["+K+"]",nr="["+G+"]",er="[^"+L+J+X+K+G+rr+"]",R="\\ud83c[\\udffb-\\udfff]",fr="(?:"+dr+"|"+R+")",ar="[^"+L+"]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",n="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+rr+"]",_="\\u200d",y="(?:"+nr+"|"+er+")",S="(?:"+l+"|"+er+")",A="(?:"+z+"(?:d|ll|m|re|s|t|ve))?",M="(?:"+z+"(?:D|LL|M|RE|S|T|VE))?",B=fr+"?",j="["+ur+"]?",br="(?:"+_+"(?:"+[ar,x,n].join("|")+")"+j+B+")*",or="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",mr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",pr=j+B+br,vr="(?:"+[sr,x,n].join("|")+")"+pr,tr=RegExp([l+"?"+nr+"+"+A+"(?="+[Y,l,"$"].join("|")+")",S+"+"+M+"(?="+[Y,l+y,"$"].join("|")+")",l+"?"+y+"+"+A,l+"+"+M,mr,or,X,vr].join("|"),"g");function lr(v){return v.match(tr)||[]}var hr=lr;function xr(v,D,ir){return v=(0,o.Z)(v),D=ir?void 0:D,D===void 0?I(v)?hr(v):N(v):v.match(D)||[]}var yr=xr,w="['\u2019]",_r=RegExp(w,"g");function Cr(v){return function(D){return p(yr(Z(D).replace(_r,"")),v,"")}}var Tr=Cr},19457:function(O,k,e){var r=e(31927),p=e(51741),i=(0,p.Z)(function(c,u,g){return u=u.toLowerCase(),c+(g?(0,r.Z)(u):u)});k.Z=i},31927:function(O,k,e){e.d(k,{Z:function(){return ar}});var r=e(99757);function p(x,n,l){var _=-1,y=x.length;n<0&&(n=-n>y?0:y+n),l=l>y?y:l,l<0&&(l+=y),y=n>l?0:l-n>>>0,n>>>=0;for(var S=Array(y);++_<y;)S[_]=x[_+n];return S}var i=p;function c(x,n,l){var _=x.length;return l=l===void 0?_:l,!n&&l>=_?x:i(x,n,l)}var u=c,g="\\ud800-\\udfff",d="\\u0300-\\u036f",o="\\ufe20-\\ufe2f",h="\\u20d0-\\u20ff",t=d+o+h,b="\\ufe0e\\ufe0f",s="\\u200d",m=RegExp("["+s+g+t+b+"]");function f(x){return m.test(x)}var a=f;function C(x){return x.split("")}var Z=C,T="\\ud800-\\udfff",U="\\u0300-\\u036f",N="\\ufe20-\\ufe2f",P="\\u20d0-\\u20ff",F=U+N+P,I="\\ufe0e\\ufe0f",L="["+T+"]",W="["+F+"]",E="\\ud83c[\\udffb-\\udfff]",H="(?:"+W+"|"+E+")",Q="[^"+T+"]",K="(?:\\ud83c[\\udde6-\\uddff]){2}",G="[\\ud800-\\udbff][\\udc00-\\udfff]",$="\\u200d",q=H+"?",V="["+I+"]?",cr="(?:"+$+"(?:"+[Q,K,G].join("|")+")"+V+q+")*",rr=V+q+cr,ur="(?:"+[Q+W+"?",W,K,G,L].join("|")+")",J=RegExp(E+"(?="+E+")|"+ur+rr,"g");function z(x){return x.match(J)||[]}var Y=z;function dr(x){return a(x)?Y(x):Z(x)}var X=dr;function sr(x){return function(n){n=(0,r.Z)(n);var l=a(n)?X(n):void 0,_=l?l[0]:n.charAt(0),y=l?u(l,1).join(""):n.slice(1);return _[x]()+y}}var nr=sr,er=nr("toUpperCase"),R=er;function fr(x){return R((0,r.Z)(x).toLowerCase())}var ar=fr}}]);
