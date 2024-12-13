"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[8584],{83146:function(A,u,e){var n=e(75271),g=function(p){var s=document.createElement("link");return s.rel="stylesheet",s.href=p,s},b=(0,n.memo)(function(i){var p=i.url,s=(0,n.useRef)(!1);return(0,n.useEffect)(function(){if(!s.current){s.current=!0;var c=g(p);document.head.append(c)}},[]),null});u.Z=b},15347:function(A,u,e){e.d(u,{Z:function(){return fn}});var n=e(98037),g=e(58006),b=e(24730),i=e(69049),p=e(1263),s=e(75271),c=e(89124),o=e(83146),m=e(18738),f=e(67296),l=e(46583),v=e(80976),t=e(14203),d=(0,l.z)({appearance:"dark",scale:t._.bnw,type:"Primary"}),r=(0,l.N)({appearance:"dark",scale:t._.gray}),y=(0,l.z)({appearance:"dark",scale:t._.lime,type:"Success"}),S=(0,l.z)({appearance:"dark",scale:t._.gold,type:"Warning"}),M=(0,l.z)({appearance:"dark",scale:t._.red,type:"Error"}),Z=(0,l.z)({appearance:"dark",scale:t._.blue,type:"Info"}),W=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},d),r),y),S),M),Z),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Z.colorInfoText,colorLinkActive:Z.colorInfoTextActive,colorLinkHover:Z.colorInfoTextHover,colorTextLightSolid:r.colorBgLayout}),z=W,D=function(h,x){var k=h.primaryColor,w=h.neutralColor,C={},O={},E=t._[k];E&&(C=(0,l.z)({appearance:"dark",scale:E,type:"Primary"}));var B=v.H[w];return B&&(O=(0,l.N)({appearance:"dark",scale:B})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},x),z),C),O)},I=(0,l.z)({appearance:"light",scale:t._.bnw,type:"Primary"}),F=(0,l.N)({appearance:"light",scale:t._.gray}),K=(0,l.z)({appearance:"light",scale:t._.green,type:"Success"}),j=(0,l.z)({appearance:"light",scale:t._.orange,type:"Warning"}),nn=(0,l.z)({appearance:"light",scale:t._.volcano,type:"Error"}),_=(0,l.z)({appearance:"light",scale:t._.geekblue,type:"Info"}),rn=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},I),F),K),j),nn),_),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:_.colorInfoText,colorLinkActive:_.colorInfoTextActive,colorLinkHover:_.colorInfoTextHover,colorTextLightSolid:F.colorBgLayout}),an=rn,en=function(h,x){var k=h.primaryColor,w=h.neutralColor,C={},O={},E=t._[k];E&&(C=(0,l.z)({appearance:"light",scale:E,type:"Primary"}));var B=v.H[w];return B&&(O=(0,l.N)({appearance:"light",scale:B})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},x),an),C),O)},G='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',on='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',V='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',tn="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",ln={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[on,V,G].join(","),fontFamilyCode:[tn,V,G].join(",")},cn=function(h){var x=h.neutralColor,k=h.appearance,w=h.primaryColor,C=k==="dark";return{algorithm:C?D:en,token:(0,n.Z)((0,n.Z)({},ln),{},{neutralColor:x,primaryColor:w})}},X=e(55354),L=e(24151),Y,dn=function(a){return(0,i.iv)(Y||(Y=(0,X.Z)([`
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
`])),a.prefixCls,(0,L.XV)(a.colorPrimary),a.prefixCls,a.prefixCls,(0,L.XV)(a.colorPrimary),(0,L.XV)(a.colorPrimary),(0,L.XV)(a.colorPrimaryActive),a.prefixCls,a.colorBgLayout,a.colorText,a.borderRadiusSM,a.prefixCls,a.colorText,a.prefixCls,a.colorBgContainer,a.prefixCls,a.prefixCls,a.prefixCls,a.stylish.blur,a.borderRadiusLG,(0,L.m4)(a.colorBgMask,.1),a.prefixCls,a.colorBorderSecondary,a.boxShadowSecondary,a.prefixCls,a.colorBorderSecondary,a.borderRadius,a.boxShadowSecondary)},Q,sn=function(a){return(0,i.iv)(Q||(Q=(0,X.Z)([`
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
`])),a.isDarkMode?"dark":"light",a.fontFamily,a.fontSize,a.colorTextBase,a.colorBgLayout,a.fontFamilyCode,a.fontFamilyCode,a.yellow9,a.colorFill)},bn=(0,i.vJ)(function(a){var h=a.theme;return[sn(h),dn(h)]}),gn=bn,P=e(52676),mn=["children","customStylish","customToken","enableCustomFonts","enableGlobalStyle","customFonts","customTheme","className","style","cache","ssrInline","theme"],J=(0,s.memo)(function(a){var h=a.children,x=a.customStylish,k=a.customToken,w=a.enableCustomFonts,C=w===void 0?!0:w,O=a.enableGlobalStyle,E=O===void 0?!0:O,B=a.customFonts,$=a.customTheme,R=$===void 0?{}:$,pn=a.className,un=a.style,hn=a.cache,vn=a.ssrInline,q=a.theme,H=(0,g.Z)(a,mn),N=(0,c.nc)(),U=B||[N({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),N({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),N({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),N({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],yn=(0,s.useCallback)(function(T){return(0,n.Z)((0,n.Z)({},(0,m.V)(T)),x==null?void 0:x(T))},[x]),xn=(0,s.useCallback)(function(T){return(0,n.Z)((0,n.Z)({},(0,f.W)(T)),k==null?void 0:k(T))},[k]),kn=(0,s.useCallback)(function(T){var Tn=cn({appearance:T,neutralColor:R.neutralColor,primaryColor:R.primaryColor});return(0,p.Z)(Tn,q)},[R.primaryColor,R.neutralColor,q]);return(0,P.jsxs)(P.Fragment,{children:[C&&(U==null?void 0:U.length)>0&&U.map(function(T){return(0,P.jsx)(o.Z,{url:T},T)}),(0,P.jsx)(i.V9,{cache:hn,prefix:H==null?void 0:H.prefixCls,speedy:!0,ssrInline:vn,children:(0,P.jsxs)(i.f6,(0,n.Z)((0,n.Z)({customStylish:yn,customToken:xn,theme:kn},H),{},{children:[E&&(0,P.jsx)(gn,{}),(0,P.jsx)(b.Z,{className:pn,style:(0,n.Z)({minHeight:"inherit",width:"inherit"},un),children:h})]}))})]})});J.displayName="LobeThemeProvider";var fn=J},46583:function(A,u,e){e.d(u,{N:function(){return i},z:function(){return b}});var n=e(57904),g=e(98644),b=function(s){var c=s.type,o=s.scale,m=s.appearance,f=(0,g.Z)(c),l=m==="dark";return(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},"color".concat(f,"Bg"),o[m][1]),"color".concat(f,"BgHover"),o[m][2]),"color".concat(f,"Border"),o[m][4]),"color".concat(f,"BorderHover"),o[m][l?5:3]),"color".concat(f,"Hover"),o[m][l?10:8]),"color".concat(f),o[m][9]),"color".concat(f,"Active"),o[m][l?7:10]),"color".concat(f,"TextHover"),o[m][l?10:8]),"color".concat(f,"Text"),o[m][9]),"color".concat(f,"TextActive"),o[m][l?7:10])},i=function(s){var c=s.scale,o=s.appearance;return{colorBgContainer:o==="dark"?c[o][1]:c[o][0],colorBgElevated:o==="dark"?c[o][2]:c[o][0],colorBgLayout:o==="dark"?c[o][0]:c[o][1],colorBgMask:c.lightA[8],colorBgSpotlight:c[o][5],colorBorder:c[o][4],colorBorderSecondary:c[o][3],colorFill:c["".concat(o,"A")][3],colorFillQuaternary:c["".concat(o,"A")][0],colorFillSecondary:c["".concat(o,"A")][2],colorFillTertiary:c["".concat(o,"A")][1],colorText:c[o][12],colorTextQuaternary:c[o][6],colorTextSecondary:c[o][10],colorTextTertiary:c[o][8]}}},80976:function(A,u,e){e.d(u,{H:function(){return n}});var n={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}}},18738:function(A,u,e){e.d(u,{V:function(){return l}});var n=e(55354),g=e(69049),b,i,p,s,c,o,m,f,l=function(t){var d=t.css,r=t.token,y=t.isDarkMode,S=(0,g.F4)(b||(b=(0,n.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:d(i||(i=(0,n.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:d(p||(p=(0,n.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:d(s||(s=(0,n.Z)([`
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
    `])),r.colorFill,r.motionEaseOut),gradientAnimation:d(c||(c=(0,n.Z)([`
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
    `])),r.gold,r.magenta,r.geekblue,r.cyan,S),markdown:d(o||(o=(0,n.Z)([`
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
    `])),r.colorTextSecondary,r.colorTextDescription,r.fontFamilyCode,r.colorFillSecondary,r.colorBorderSecondary,r.borderRadius,r.fontFamily,r.colorBgLayout,y?r.colorText:"#333",y?r.colorTextSecondary:"#000",y?r.colorTextSecondary:"#000",r.colorTextSecondary,r.colorBorder,r.colorBorderSecondary,r.colorFillTertiary,r.colorBorderSecondary,r.borderRadius,r.fontFamily,r.colorTextSecondary,r.colorTextSecondary,r.motionEaseOut,r.colorBorder,r.colorFillTertiary,r.borderRadius,r.colorBorderSecondary,r.colorFillQuaternary,r.colorBorderSecondary,r.fontFamilyCode),noScrollbar:d(m||(m=(0,n.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:d(f||(f=(0,n.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),r.colorTextSecondary,r.colorText)}}},67296:function(A,u,e){e.d(u,{W:function(){return m}});var n=e(85332),g=e(98037),b=e(58171),i=e(57904),p=e(98937),s=e(14203),c=function(l){var v,t=l.name,d=l.scale,r=l.appearance;return v={},(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)(v,"".concat(t,"Bg"),d["".concat(r,"A")][1]),"".concat(t,"BgHover"),d["".concat(r,"A")][2]),"".concat(t,"Border"),d[r][4]),"".concat(t,"BorderSecondary"),d[r][3]),"".concat(t,"BorderHover"),d[r][5]),"".concat(t,"Hover"),d[r][10]),"".concat(t),d[r][9]),"".concat(t,"Active"),d[r][7]),"".concat(t,"TextHover"),d["".concat(r,"A")][10]),"".concat(t,"Text"),d["".concat(r,"A")][9]),(0,i.Z)(v,"".concat(t,"TextActive"),d["".concat(r,"A")][7])},o=function(l){var v=l.name,t=l.scale,d=l.appearance,r={},y=(0,b.Z)(t[d].entries()),S;try{for(y.s();!(S=y.n()).done;){var M=(0,n.Z)(S.value,2),Z=M[0],W=M[1];Z===0||Z===12||(r["".concat(v).concat(Z)]=W)}}catch(j){y.e(j)}finally{y.f()}var z=(0,b.Z)(t["".concat(d,"A")].entries()),D;try{for(z.s();!(D=z.n()).done;){var I=(0,n.Z)(D.value,2),F=I[0],K=I[1];F===0||F===12||(r["".concat(v).concat(F,"A")]=K)}}catch(j){z.e(j)}finally{z.f()}return(0,g.Z)((0,g.Z)({},r),c({appearance:d,name:v,scale:t}))},m=function(l){for(var v=l.isDarkMode,t={},d=0,r=Object.entries(s._);d<r.length;d++){var y=(0,n.Z)(r[d],2),S=y[0],M=y[1];t=(0,g.Z)((0,g.Z)({},t),o({appearance:v?"dark":"light",name:(0,p.Z)(S),scale:M}))}return t}},3341:function(A){A.exports=function u(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var g,b,i;if(Array.isArray(e)){if(g=e.length,g!=n.length)return!1;for(b=g;b--!==0;)if(!u(e[b],n[b]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(i=Object.keys(e),g=i.length,g!==Object.keys(n).length)return!1;for(b=g;b--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[b]))return!1;for(b=g;b--!==0;){var p=i[b];if(!u(e[p],n[p]))return!1}return!0}return e!==e&&n!==n}}}]);
