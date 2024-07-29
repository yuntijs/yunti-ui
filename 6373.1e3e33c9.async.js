"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6373],{39010:function(L,y,n){var r=n(50959),f=function(v){var g=document.createElement("link");return g.rel="stylesheet",g.href=v,g},b=(0,r.memo)(function(l){var v=l.url,g=(0,r.useRef)(!1);return(0,r.useEffect)(function(){if(!g.current){g.current=!0;var c=f(v);document.head.append(c)}},[]),null});y.Z=b},18117:function(L,y,n){n.d(y,{Z:function(){return gr}});var r=n(12027),f=n(51151),b=n(39265),l=n(26254),v=n(50959),g=n(6530),c=n(39010),o=n(58179),p=n(20369),t=n(5961),m=n(73025),u=n(72614),s=(0,t.z)({appearance:"dark",scale:u._.bnw,type:"Primary"}),i=(0,t.N)({appearance:"dark",scale:u._.gray}),e=(0,t.z)({appearance:"dark",scale:u._.lime,type:"Success"}),k=(0,t.z)({appearance:"dark",scale:u._.gold,type:"Warning"}),E=(0,t.z)({appearance:"dark",scale:u._.red,type:"Error"}),Z=(0,t.z)({appearance:"dark",scale:u._.blue,type:"Info"}),j=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},s),i),e),k),E),Z),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Z.colorInfoText,colorLinkActive:Z.colorInfoTextActive,colorLinkHover:Z.colorInfoTextHover,colorTextLightSolid:i.colorBgLayout}),V=j,M=function(x,h){var S=x.primaryColor,w=x.neutralColor,A={},O={},P=u._[S];P&&(A=(0,t.z)({appearance:"dark",scale:P,type:"Primary"}));var R=m.H[w];return R&&(O=(0,t.N)({appearance:"dark",scale:R})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},h),V),A),O)},I=(0,t.z)({appearance:"light",scale:u._.bnw,type:"Primary"}),D=(0,t.N)({appearance:"light",scale:u._.gray}),U=(0,t.z)({appearance:"light",scale:u._.green,type:"Success"}),F=(0,t.z)({appearance:"light",scale:u._.orange,type:"Warning"}),W=(0,t.z)({appearance:"light",scale:u._.volcano,type:"Error"}),H=(0,t.z)({appearance:"light",scale:u._.geekblue,type:"Info"}),ir=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},I),D),U),F),W),H),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:H.colorInfoText,colorLinkActive:H.colorInfoTextActive,colorLinkHover:H.colorInfoTextHover,colorTextLightSolid:D.colorBgLayout}),cr=ir,Q=function(x,h){var S=x.primaryColor,w=x.neutralColor,A={},O={},P=u._[S];P&&(A=(0,t.z)({appearance:"light",scale:P,type:"Primary"}));var R=m.H[w];return R&&(O=(0,t.N)({appearance:"light",scale:R})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},h),cr),A),O)},Y='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',dr='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',$='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',ur="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",sr={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[dr,$,Y].join(","),fontFamilyCode:[ur,$,Y].join(",")},q=function(x){var h=x.neutralColor,S=x.appearance,w=x.primaryColor,A=S==="dark";return{algorithm:A?M:Q,token:(0,r.Z)((0,r.Z)({},sr),{},{neutralColor:h,primaryColor:w})}},rr=n(88829),z=n(24151),J,nr=function(a){return(0,l.iv)(J||(J=(0,rr.Z)([`
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
`])),a.prefixCls,(0,z.XV)(a.colorPrimary),a.prefixCls,a.prefixCls,(0,z.XV)(a.colorPrimary),(0,z.XV)(a.colorPrimary),(0,z.XV)(a.colorPrimaryActive),a.prefixCls,a.colorBgLayout,a.colorText,a.borderRadiusSM,a.prefixCls,a.colorText,a.prefixCls,a.colorBgContainer,a.prefixCls,a.prefixCls,a.prefixCls,a.stylish.blur,a.borderRadiusLG,(0,z.m4)(a.colorBgMask,.1),a.prefixCls,a.colorBorderSecondary,a.boxShadowSecondary,a.prefixCls,a.colorBorderSecondary,a.borderRadius,a.boxShadowSecondary)},er,ar=function(a){return(0,l.iv)(er||(er=(0,rr.Z)([`
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
`])),a.isDarkMode?"dark":"light",a.fontFamily,a.fontSize,a.colorTextBase,a.colorBgLayout,a.fontFamilyCode,a.fontFamilyCode,a.yellow9,a.colorFill)},br=(0,l.vJ)(function(a){var x=a.theme;return[ar(x),nr(x)]}),or=br,_=n(11527),fr=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],tr=(0,v.memo)(function(a){var x=a.children,h=a.customStylish,S=a.customToken,w=a.enableWebfonts,A=w===void 0?!0:w,O=a.enableGlobalStyle,P=O===void 0?!0:O,R=a.webfonts,X=a.customTheme,N=X===void 0?{}:X,mr=a.className,pr=a.style,vr=(0,f.Z)(a,fr),G=(0,g.nc)(),K=R||[G({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),G({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),G({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),G({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],xr=(0,v.useCallback)(function(T){return(0,r.Z)((0,r.Z)({},(0,o.V)(T)),h==null?void 0:h(T))},[h]),hr=(0,v.useCallback)(function(T){return(0,r.Z)((0,r.Z)({},(0,p.W)(T)),S==null?void 0:S(T))},[S]),yr=(0,v.useCallback)(function(T){return q({appearance:T,neutralColor:N.neutralColor,primaryColor:N.primaryColor})},[N.primaryColor,N.neutralColor]);return(0,_.jsxs)(_.Fragment,{children:[A&&(K==null?void 0:K.length)>0&&K.map(function(T){return(0,_.jsx)(c.Z,{url:T},T)}),(0,_.jsx)(l.V9,{speedy:!0,children:(0,_.jsxs)(l.f6,(0,r.Z)((0,r.Z)({customStylish:xr,customToken:hr},vr),{},{theme:yr,children:[P&&(0,_.jsx)(or,{}),(0,_.jsx)(b.Z,{className:mr,style:(0,r.Z)({minHeight:"inherit",width:"inherit"},pr),children:x})]}))})]})});tr.displayName="LobeThemeProvider";var gr=tr},5961:function(L,y,n){n.d(y,{N:function(){return l},z:function(){return b}});var r=n(32041),f=n(31927),b=function(g){var c=g.type,o=g.scale,p=g.appearance,t=(0,f.Z)(c),m=p==="dark";return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},"color".concat(t,"Bg"),o[p][1]),"color".concat(t,"BgHover"),o[p][2]),"color".concat(t,"Border"),o[p][4]),"color".concat(t,"BorderHover"),o[p][m?5:3]),"color".concat(t,"Hover"),o[p][m?10:8]),"color".concat(t),o[p][9]),"color".concat(t,"Active"),o[p][m?7:10]),"color".concat(t,"TextHover"),o[p][m?10:8]),"color".concat(t,"Text"),o[p][9]),"color".concat(t,"TextActive"),o[p][m?7:10])},l=function(g){var c=g.scale,o=g.appearance;return{colorBgContainer:o==="dark"?c[o][1]:c[o][0],colorBgElevated:o==="dark"?c[o][2]:c[o][0],colorBgLayout:o==="dark"?c[o][0]:c[o][1],colorBgMask:c.lightA[8],colorBgSpotlight:c[o][5],colorBorder:c[o][4],colorBorderSecondary:c[o][3],colorFill:c["".concat(o,"A")][3],colorFillQuaternary:c["".concat(o,"A")][0],colorFillSecondary:c["".concat(o,"A")][2],colorFillTertiary:c["".concat(o,"A")][1],colorText:c[o][12],colorTextQuaternary:c[o][6],colorTextSecondary:c[o][10],colorTextTertiary:c[o][8]}}},73025:function(L,y,n){n.d(y,{H:function(){return r}});var r={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}}},58179:function(L,y,n){n.d(y,{V:function(){return m}});var r=n(88829),f=n(26254),b,l,v,g,c,o,p,t,m=function(s){var i=s.css,e=s.token,k=s.isDarkMode,E=(0,f.F4)(b||(b=(0,r.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:i(l||(l=(0,r.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:i(v||(v=(0,r.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:i(g||(g=(0,r.Z)([`
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
    `])),e.colorFill,e.motionEaseOut),gradientAnimation:i(c||(c=(0,r.Z)([`
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
    `])),e.gold,e.magenta,e.geekblue,e.cyan,E),markdown:i(o||(o=(0,r.Z)([`
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
    `])),e.colorTextSecondary,e.colorTextDescription,e.fontFamilyCode,e.colorFillSecondary,e.colorBorderSecondary,e.borderRadius,e.fontFamily,e.colorBgLayout,k?e.colorText:"#333",k?e.colorTextSecondary:"#000",k?e.colorTextSecondary:"#000",e.colorTextSecondary,e.colorBorder,e.colorBorderSecondary,e.colorFillTertiary,e.colorBorderSecondary,e.borderRadius,e.fontFamily,e.colorTextSecondary,e.colorTextSecondary,e.motionEaseOut,e.colorBorder,e.colorFillTertiary,e.borderRadius,e.colorBorderSecondary,e.colorFillQuaternary,e.colorBorderSecondary,e.fontFamilyCode),noScrollbar:i(p||(p=(0,r.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:i(t||(t=(0,r.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),e.colorTextSecondary,e.colorText)}}},20369:function(L,y,n){n.d(y,{W:function(){return p}});var r=n(17789),f=n(12027),b=n(43773),l=n(32041),v=n(27077),g=n(72614),c=function(m){var u,s=m.name,i=m.scale,e=m.appearance;return u={},(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)(u,"".concat(s,"Bg"),i["".concat(e,"A")][1]),"".concat(s,"BgHover"),i["".concat(e,"A")][2]),"".concat(s,"Border"),i[e][4]),"".concat(s,"BorderSecondary"),i[e][3]),"".concat(s,"BorderHover"),i[e][5]),"".concat(s,"Hover"),i[e][10]),"".concat(s),i[e][9]),"".concat(s,"Active"),i[e][7]),"".concat(s,"TextHover"),i["".concat(e,"A")][10]),"".concat(s,"Text"),i["".concat(e,"A")][9]),(0,l.Z)(u,"".concat(s,"TextActive"),i["".concat(e,"A")][7])},o=function(m){var u=m.name,s=m.scale,i=m.appearance,e={},k=(0,b.Z)(s[i].entries()),E;try{for(k.s();!(E=k.n()).done;){var Z=(0,r.Z)(E.value,2),j=Z[0],V=Z[1];j===0||j===12||(e["".concat(u).concat(j)]=V)}}catch(W){k.e(W)}finally{k.f()}var M=(0,b.Z)(s["".concat(i,"A")].entries()),I;try{for(M.s();!(I=M.n()).done;){var D=(0,r.Z)(I.value,2),U=D[0],F=D[1];U===0||U===12||(e["".concat(u).concat(U,"A")]=F)}}catch(W){M.e(W)}finally{M.f()}return(0,f.Z)((0,f.Z)({},e),c({appearance:i,name:u,scale:s}))},p=function(m){for(var u=m.isDarkMode,s={},i=0,e=Object.entries(g._);i<e.length;i++){var k=(0,r.Z)(e[i],2),E=k[0],Z=k[1];s=(0,f.Z)((0,f.Z)({},s),o({appearance:u?"dark":"light",name:(0,v.Z)(E),scale:Z}))}return s}},3341:function(L){L.exports=function y(n,r){if(n===r)return!0;if(n&&r&&typeof n=="object"&&typeof r=="object"){if(n.constructor!==r.constructor)return!1;var f,b,l;if(Array.isArray(n)){if(f=n.length,f!=r.length)return!1;for(b=f;b--!==0;)if(!y(n[b],r[b]))return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===r.toString();if(l=Object.keys(n),f=l.length,f!==Object.keys(r).length)return!1;for(b=f;b--!==0;)if(!Object.prototype.hasOwnProperty.call(r,l[b]))return!1;for(b=f;b--!==0;){var v=l[b];if(!y(n[v],r[v]))return!1}return!0}return n!==n&&r!==r}},27077:function(L,y,n){n.d(y,{Z:function(){return Ar}});var r=n(31927);function f(d,C,B,Or){var lr=-1,kr=d==null?0:d.length;for(Or&&kr&&(B=d[++lr]);++lr<kr;)B=C(B,d[lr],lr,d);return B}var b=f;function l(d){return function(C){return d==null?void 0:d[C]}}var v=l,g={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},c=v(g),o=c,p=n(99757),t=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,m="\\u0300-\\u036f",u="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",i=m+u+s,e="["+i+"]",k=RegExp(e,"g");function E(d){return d=(0,p.Z)(d),d&&d.replace(t,o).replace(k,"")}var Z=E,j=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function V(d){return d.match(j)||[]}var M=V,I=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function D(d){return I.test(d)}var U=D,F="\\ud800-\\udfff",W="\\u0300-\\u036f",H="\\ufe20-\\ufe2f",ir="\\u20d0-\\u20ff",cr=W+H+ir,Q="\\u2700-\\u27bf",Y="a-z\\xdf-\\xf6\\xf8-\\xff",dr="\\xac\\xb1\\xd7\\xf7",$="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ur="\\u2000-\\u206f",sr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",q="A-Z\\xc0-\\xd6\\xd8-\\xde",rr="\\ufe0e\\ufe0f",z=dr+$+ur+sr,J="['\u2019]",nr="["+z+"]",er="["+cr+"]",ar="\\d+",br="["+Q+"]",or="["+Y+"]",_="[^"+F+z+ar+Q+Y+q+"]",fr="\\ud83c[\\udffb-\\udfff]",tr="(?:"+er+"|"+fr+")",gr="[^"+F+"]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+q+"]",S="\\u200d",w="(?:"+or+"|"+_+")",A="(?:"+h+"|"+_+")",O="(?:"+J+"(?:d|ll|m|re|s|t|ve))?",P="(?:"+J+"(?:D|LL|M|RE|S|T|VE))?",R=tr+"?",X="["+rr+"]?",N="(?:"+S+"(?:"+[gr,a,x].join("|")+")"+X+R+")*",mr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vr=X+R+N,G="(?:"+[br,a,x].join("|")+")"+vr,K=RegExp([h+"?"+or+"+"+O+"(?="+[nr,h,"$"].join("|")+")",A+"+"+P+"(?="+[nr,h+w,"$"].join("|")+")",h+"?"+w+"+"+O,h+"+"+P,pr,mr,ar,G].join("|"),"g");function xr(d){return d.match(K)||[]}var hr=xr;function yr(d,C,B){return d=(0,p.Z)(d),C=B?void 0:C,C===void 0?U(d)?hr(d):M(d):d.match(C)||[]}var T=yr,Cr="['\u2019]",Sr=RegExp(Cr,"g");function Tr(d){return function(C){return b(T(Z(C).replace(Sr,"")),d,"")}}var Zr=Tr,wr=Zr(function(d,C,B){return C=C.toLowerCase(),d+(B?(0,r.Z)(C):C)}),Ar=wr}}]);
