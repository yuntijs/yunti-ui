"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[94572],{94572:function(Ud,Sn,d){d.r(Sn),d.d(Sn,{Affix:function(){return Kc.Z},Alert:function(){return Br},Anchor:function(){return Xc.Z},AntdMentions:function(){return Yc.Z},App:function(){return Wr},AudioPlayer:function(){return zd.Z},AutoComplete:function(){return qc.Z},Avatar:function(){return He.C},BackTop:function(){return _c.Z},Badge:function(){return Vt.Z},BaseMonacoEditor:function(){return un},Breadcrumb:function(){return Pt.Z},Button:function(){return ce.ZP},Calendar:function(){return ed.Z},Card:function(){return Ml.Z},Carousel:function(){return nd.Z},Cascader:function(){return td.Z},ChatInputActionBar:function(){return sc.Z},ChatInputArea:function(){return ic},ChatInputAreaInner:function(){return yo.Z},ChatItem:function(){return jc},ChatSendButton:function(){return lc.Z},Checkbox:function(){return rd.Z},Col:function(){return gn.Z},Collapse:function(){return fn.Z},CollapseGroup:function(){return Ye},CollapseTable:function(){return bo},ColorPicker:function(){return od.Z},ConfigContext:function(){return Ne},ConfigProvider:function(){return La},DatePicker:function(){return ad.default},Descriptions:function(){return pn},Divider:function(){return $t},DragPanel:function(){return Ia},Drawer:function(){return Ol},Dropdown:function(){return no},EditableMessage:function(){return wo},Empty:function(){return _n.Z},Flex:function(){return H.Z},FloatButton:function(){return id.Z},Form:function(){return io},FormCollapseList:function(){return ao},FormHelper:function(){return lo},FullFeaturedHighlighter:function(){return ca},Grid:function(){return sd.ZP},HeaderButtonGroup:function(){return Wt},Highlighter:function(){return Hc},Image:function(){return ld.Z},Input:function(){return cd.Z},InputNumber:function(){return Dr.Z},Layout:function(){return dd.Z},List:function(){return ud.Z},LogViewer:function(){return Ga},Logo:function(){return Ba},Markdown:function(){return jo.Z},Mentions:function(){return Vi},Menu:function(){return pd.Z},MobileChatInputArea:function(){return cc.Z},MobileChatSendButton:function(){return dc.Z},Modal:function(){return se},MonacoController:function(){return xt},MonacoDiffEditor:function(){return is},MonacoEditor:function(){return as},NotificationGlobalStyle:function(){return Vr},Page:function(){return je},Pagination:function(){return fd.Z},Popconfirm:function(){return md.Z},Popover:function(){return vd.Z},ProCard:function(){return $e},Progress:function(){return hd.Z},QRCode:function(){return bd.Z},Radio:function(){return vo},Rate:function(){return yd.Z},Result:function(){return Rt.ZP},Row:function(){return Ir.Z},Segmented:function(){return xd.Z},Select:function(){return Go.default},SelectCard:function(){return pl},Skeleton:function(){return me.Z},Slider:function(){return Rr.Z},SliderInput:function(){return gl},Space:function(){return ze.Z},SpeechSynthesisTTS:function(){return Fd.H},Spin:function(){return Sd.Z},Statistic:function(){return Cd.Z},Status:function(){return Gt},Steps:function(){return jd.Z},Switch:function(){return kd.Z},SyntaxHighlighter:function(){return Dd.Z},Table:function(){return le},Tabs:function(){return wd.Z},Tag:function(){return Ad.Z},TimePicker:function(){return Nd.Z},Timeline:function(){return Ld.Z},Tooltip:function(){return fe.Z},Tour:function(){return Od.Z},Transfer:function(){return Ed.Z},Tree:function(){return Td.Z},TreeSelect:function(){return Zd.Z},Typography:function(){return Pe},Upload:function(){return Pd.Z},Watermark:function(){return Rd.Z},WaveformIcon:function(){return Jc},colorScales:function(){return ne},colors:function(){return ne},generateColorNeutralPalette:function(){return Zc},generateColorPalette:function(){return Tc},message:function(){return gd.ZP},neutralColorScales:function(){return Pc},notification:function(){return wl},theme:function(){return Md.Z},useAudioPlayer:function(){return Bd.x},useAutoFocus:function(){return so},useCdnFn:function(){return An},useLink:function(){return Mn},useResponsive:function(){return vn.F},useSpeechRecognition:function(){return Hd.x},useSpeechSynthes:function(){return Gc},useTheme:function(){return z.Fg},useThemeMode:function(){return ln.r},version:function(){return Id.Z},withFormHelper:function(){return Vl}});var ya=d(26068),m=d.n(ya),xa=d(67825),R=d.n(xa),Sa=d(89386),f=d(75271),Ca=d(53649),h=d.n(Ca),z=d(69049),Cn,ja=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(Cn||(Cn=h()([`
      margin-bottom: `,`px;
      .`,`-collapse {
        &-header {
          padding: 0 !important;
          &-text {
            padding: `,"px ","px ",`px 0;
            & > * {
              font-size: `,`px;
              /* font-weight: unset; */
            }
          }
        }
        &-expand-icon {
          padding: `,"px 0 ","px ",`px;
        }
        &-extra {
          padding-right: `,`px;
        }
        &-content {
          padding: `,`px 0;
          background-color: `,`;
        }
      }
    `])),t.margin,n,t.paddingSM,t.paddingSM,t.paddingSM,t.fontSize,t.padding,t.padding,t.paddingSM,t.paddingSM,t.paddingXS,t.colorBgContainer)}}),l=d(52676),ka=["className","variant"],wa=Sa.Z.Group,Ye=function(e){var t=e.className,n=e.variant,a=R()(e,ka),o=ja(),i=o.styles,s=o.cx;return(0,l.jsx)(wa,m()({className:s(i.root,t),collapsible:n==="pure"?"icon":"header",variant:n},a))},jn=d(56264),Aa="https://unpkg.com",Ma="https://registry.npmmirror.com",kn=function(e){var t=e.pkg,n=e.version,a=n===void 0?"latest":n,o=e.path,i=e.proxy;switch(i){case"unpkg":return(0,jn.Z)(Aa,"".concat(t,"@").concat(a),o);default:return(0,jn.Z)(Ma,t,a,"files",o)}},Ne=(0,f.createContext)(null),La=(0,f.memo)(function(r){var e=r.children,t=r.config;return(0,l.jsx)(Ne.Provider,{value:t,children:e})}),wn=function(e){var t=e.pkg,n=e.version,a=e.path;return kn({path:a,pkg:t,proxy:"aliyun",version:n})},An=function(){var e=(0,f.useContext)(Ne);return e?(e==null?void 0:e.proxy)!=="custom"?function(t){var n=t.pkg,a=t.version,o=t.path;return kn({path:o,pkg:n,proxy:e.proxy,version:a})}:(e==null?void 0:e.customCdnFn)||wn:wn},Mn=function(){var e=(0,f.useContext)(Ne);return e==null?void 0:e.Link},Na=d(48305),B=d.n(Na),Oa=d(97157),Ln=d(85660),H=d(71414),ce=d(44295),Ea=d(84569),Ta=d.n(Ea),Nn,On,En,Tn,Zn,Za=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(Nn||(Nn=h()([`
      overflow: hidden;
    `]))),wrapper:e(On||(On=h()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),t.marginLG),content:e(En||(En=h()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.borderRadiusLG,t.boxShadowSecondary),dragWrapper:e(Tn||(Tn=h()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:e(Zn||(Zn=h()([`
      cursor: move;
    `])))}}),Pa=["title","classNames","defaultPosition","onPositionChange"],Ia=(0,f.memo)(function(r){var e=r.title,t=r.classNames,n=t===void 0?{}:t,a=r.defaultPosition,o=r.onPositionChange,i=R()(r,Pa),s=Za(),c=s.styles,g=s.cx,u=(0,f.useState)({left:0,top:0,bottom:0,right:0}),p=B()(u,2),v=p[0],b=p[1],y=(0,f.useRef)(null),C=function(j,x){var O,w=window.document.documentElement,E=w.clientWidth,L=w.clientHeight,T=(O=y.current)===null||O===void 0?void 0:O.getBoundingClientRect();T&&b({left:-T.left+x.x,right:E-(T.right-x.x),top:-T.top+x.y,bottom:L-(T.bottom-x.y)})};return(0,l.jsx)(Ln.Z,m()(m()({},i),{},{classNames:m()(m()({},n),{},{wrapper:g(c.wrapper,n.wrapper),content:g(c.content,n.content)}),destroyOnClose:!0,drawerRender:function(j){return(0,l.jsx)(Ta(),{bounds:v,defaultPosition:a,handle:".".concat(c.dragHandle),nodeRef:y,onStart:function(O,w){return C(O,w)},onStop:function(O,w){o==null||o({x:w.x,y:w.y})},children:(0,l.jsx)("div",{className:c.dragWrapper,ref:y,children:j})})},mask:!1,rootClassName:c.root,title:(0,l.jsxs)(H.Z,{align:"center",className:c.dragHandle,children:[(0,l.jsx)(H.Z,{flex:2,children:e}),(0,l.jsx)(H.Z,{children:(0,l.jsx)(ce.ZP,{className:c.dragHandle,icon:(0,l.jsx)(Oa.Z,{}),type:"text"})})]})}))}),de=d(90142),Ra=d(36075),qe=d.n(Ra),Da=(0,f.memo)(function(r){var e=Object.assign({},(qe()(r),r));return(0,l.jsx)("svg",m()(m()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},e),{},{children:(0,l.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),Pn=(0,f.memo)(function(r){var e=Object.assign({},(qe()(r),r));return(0,l.jsxs)("svg",m()(m()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},e),{},{children:[(0,l.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,l.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,l.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),In=(0,f.memo)(function(r){var e=Object.assign({},(qe()(r),r));return(0,l.jsxs)("svg",m()(m()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,l.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,l.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,l.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,l.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,l.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,l.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,l.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),Rn,Fa=(0,z.kc)(function(r){var e=r.css;return{extraTitle:e(Rn||(Rn=h()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),za=["type","size","style","extra","className"],Ba=(0,f.memo)(function(r){var e=r.type,t=e===void 0?"img":e,n=r.size,a=n===void 0?32:n,o=r.style,i=r.extra,s=r.className,c=R()(r,za),g=(0,z.Fg)(),u=Fa(),p=u.styles,v;switch(t){case"text":{v=(0,l.jsx)(In,m()({className:s,height:a,style:o,width:a*2.9375},c));break}case"combine":{v=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Pn,m()({height:a,style:o,width:a},c)),(0,l.jsx)(In,{style:{height:a,marginLeft:Math.round(a/4),width:"auto"}})]});break}case"img":default:{v=(0,l.jsx)(Pn,m()({height:a,style:o,width:a},c));break}}if(!i)return v;var b=Math.round(a/3*1.9);return(0,l.jsxs)(de.D,m()(m()({align:"center",className:s,horizontal:!0,style:o},c),{},{children:[v,(0,l.jsx)(Da,{style:{color:g.colorFill,height:b,width:b}}),(0,l.jsx)("div",{className:p.extraTitle,style:{fontSize:b},children:i})]}))}),ee=d(89257),Dn=d(50999),Ha=d(41117),$a=d(45798),Va=d(3548),Fn=d(5312),zn,Bn,Hn,$n,Qa=(0,z.kc)(function(r){var e=r.css,t=r.token,n="#222222";return{root:e(zn||(zn=h()([`
        position: relative;
        background-color: `,`;
        border-radius: `,`px;

        .react-lazylog-searchbar {
          margin-bottom: `,`px;
          padding: `,`px;

          background-color: `,`;
          border-bottom: 1px solid #2d2d2d;
          border-top-left-radius: `,`px;
          border-top-right-radius: `,`px;
          & > input {
            border-radius: `,`px;
          }
          & > button {
            cursor: pointer;
            padding: 2px 6px;
            border-radius: `,`px;
          }
          &-up-arrow {
            margin-right: 0;
          }
        }
        .react-lazylog {
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
          scrollbar-width: auto;
          background-color: `,`;
          border-radius: `,`px;

          .log-number {
            margin-right: 0;
          }
          .log-content {
            margin-left: 15px;
            font-family: `,`;
          }
        }
      `])),n,t.borderRadiusLG,t.marginXXS,t.paddingXS,n,t.borderRadiusLG,t.borderRadiusLG,t.borderRadius,t.borderRadius,n,t.borderRadiusLG,t.fontFamilyCode),searchBarIcon:e(Bn||(Bn=h()([`
        font-size: 16px;
      `]))),loaderText:e(Hn||(Hn=h()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),t.fontFamilyCode),loaderIcon:e($n||($n=h()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),t.marginSM,t.marginSM)}},{hashPriority:"low"}),Ua=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],Ga=function(e){var t=e.className,n=e.id,a=e.style,o=e.height,i=e.onScroll,s=e.url,c=e.websocket,g=e.refreshInterval,u=e.onLoad,p=e.onError,v=R()(e,Ua),b=Qa(),y=b.cx,C=b.styles,S=(0,f.useState)(0),j=B()(S,2),x=j[0],O=j[1],w=(0,f.useState)(!1),E=B()(w,2),L=E[0],T=E[1],F=(0,f.useState)(!1),$=B()(F,2),N=$[0],k=$[1],A=(0,f.useRef)(),D=(0,f.useRef)();(0,f.useEffect)(function(){return function(){clearTimeout(A.current),clearTimeout(D.current)}},[]),(0,f.useEffect)(function(){var Z;return s&&!c&&g&&(Z=setInterval(function(){O(function(Q){return Q+1})},g)),function(){clearInterval(Z)}},[g,s,c]);var P=(0,f.useMemo)(function(){return s&&(A.current=setTimeout(function(){T(!0),A.current=void 0},50),"".concat(s,"#").concat(x))},[s,x]),M=(0,f.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(A.current),T(!1),k(!0),D.current=setTimeout(function(){return k(!1)},100),u==null||u()},[u]),I=(0,f.useCallback)(function(Z){T(!1),clearTimeout(A.current),p==null||p(Z)},[p]);return(0,l.jsxs)("div",{className:y(C.root,t),id:n,style:m()({height:o},a),children:[(0,l.jsx)(Dn.Uu,{render:function(Q){var K=Q.follow,te=Q.onScroll;return(0,l.jsx)(Dn.A9,m()(m()({url:P,websocket:c},v),{},{follow:N||K,height:o,iconFilterLines:(0,l.jsx)(ee.Z,{className:C.searchBarIcon,icon:Ha.Z}),iconFindNext:(0,l.jsx)(ee.Z,{className:C.searchBarIcon,icon:$a.Z}),iconFindPrevious:(0,l.jsx)(ee.Z,{className:C.searchBarIcon,icon:Va.Z}),onError:I,onLoad:M,onScroll:function(re){te(re),i==null||i(re)}}))},startFollowing:!0}),L&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:C.loaderText,children:"loading ..."}),(0,l.jsx)(ee.Z,{className:C.loaderIcon,icon:Fn.Z,spin:!0})]})]})},Wa=d(82092),W=d.n(Wa),Ja=d(504),Ka=d(22993),Xa=d(54397),Ya=d(69789),qa=d(9668),_a=d(67568),G=d(65694),_e=typeof window!="undefined",ei=d(25298),Oe=d.n(ei),ni=d(17069),Ee=d.n(ni),ti=d(9504),ri=d.n(ti),oi=d(38836),ai=d.n(oi),ii=d(21742),en=d.n(ii),si=d(83136),nn=d.n(si),Te=function(r){en()(t,r);var e=nn()(t);function t(){return Oe()(this,t),e.apply(this,arguments)}return Ee()(t,[{key:"createDOM",value:function(a){var o=ri()(ai()(t.prototype),"createDOM",this).call(this,a);return o.classList.add("align-middle"),o}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(a){return new t(a.__text,a.__key)}},{key:"importJSON",value:function(a){var o=(0,G.MX)(a.text);return o.setFormat(a.format),o.setDetail(a.detail),o.setMode(a.mode),o.setStyle(a.style),o}}]),t}(G.R2);function Gd(r){return new Te(r)}var ge=d(97780),Ze=d(95138),li=d(62657),oe=d.n(li),fe=d(13399),ci=d(69024),Vn=(0,f.createContext)(null),di=(0,f.memo)(function(r){var e=r.children,t=r.value;return(0,l.jsx)(Vn.Provider,{value:t,children:e})}),ui=function(){var e=(0,f.useContext)(Vn);return e==null?void 0:e.optionsMap},pi=d(25272),gi=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,fi="\\(",mi=function(e){return"(?:"+e.join("|")+")"},vi=function(e,t){var n=e.length===0?"":"(?!"+e.join("|")+")";return n+"[^\\s"+t+"]"},hi=function(e){return"(?:\\.[ |$]|\\s|["+e+"]|)"},bi=75,yi=function(e,t){var n=(0,f.useRef)(null),a=(0,ge.g)(),o=B()(a,1),i=o[0],s=(0,pi.y)(e),c=B()(s,3),g=c[0],u=c[1],p=c[2],v=(0,f.useCallback)(function(y){var C=(0,G.dL)(),S=C==null?void 0:C.getNodes();if(!g&&(S==null?void 0:S.length)===1&&i.dispatchCommand(t,void 0),g&&(0,G.iO)(C)){y.preventDefault();var j=(0,G.gI)(e);if((0,G.k$)(j))return t&&i.dispatchCommand(t,void 0),j.remove(),!0}return!1},[g,e,t,i]),b=(0,f.useCallback)(function(y){y.stopPropagation(),p(),u(!0)},[u,p]);return(0,f.useEffect)(function(){var y=n.current;return y&&y.addEventListener("click",b),function(){y&&y.removeEventListener("click",b)}},[b]),(0,f.useEffect)(function(){return(0,Ze.qV)(i.registerCommand(G.MK,v,G.KB),i.registerCommand(G.aR,v,G.KB))},[i,p,v]),[n,g]},Wd=function(){var e=useRef(null),t=useState(!1),n=_slicedToArray(t,2),a=n[0],o=n[1],i=useCallback(function(s){s.stopPropagation(),o(function(c){return!c})},[]);return useEffect(function(){var s=e.current;return s&&s.addEventListener("click",i),function(){s&&s.removeEventListener("click",i)}},[i]),[e,a,o]};function xi(r,e,t,n){return new RegExp((e?"(^|\\s|".concat(e,")("):"(^|\\s)(")+mi(r)+"((?:"+vi(r,t)+(n?hi(t):"")+"){0,"+bi+"}))$")}function Si(r,e,t,n,a){var o=xi(e,t,n,a).exec(r);if(o!==null){var i=o[1],s=o[2],c=o[3];if(s.length>0)return{leadOffset:o.index+i.length,matchingString:c,replaceableString:s}}return null}var Ci=function(e,t){var n=t.punctuation,a=t.preTriggerChars,o=t.allowSpaces,i=(0,f.useState)(null),s=B()(i,2),c=s[0],g=s[1],u=(0,f.useCallback)(function(p){var v=Si(p,e,a,n,o);if(v){var b=v.replaceableString,y=v.matchingString,C=b.lastIndexOf(y),S=C===-1?b:b.slice(0,Math.max(0,C))+b.slice(Math.max(0,C+y.length));if(g(S||null),v.replaceableString)return v}else g(null);return null},[a,o,n,e]);return{trigger:c,checkForMentionMatch:u}},Qn,Un,Gn,ji=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.isError,s=function(){return i?o?{background:n.colorErrorBgActive,border:n.colorErrorBorderHover,color:n.colorErrorTextActive}:{background:n.colorErrorBg,border:n.colorErrorBorder,color:n.colorErrorText}:o?{background:n.colorInfoBgHover,border:n.colorInfoBorder,color:n.colorInfoText}:{background:n.colorFillTertiary,border:"transparent",color:n.colorInfoText}},c=s(),g=c.background,u=c.border,p=c.color;return{root:t(Qn||(Qn=h()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),n.fontFamilyCode,p,g,u,n.borderRadius),text:t(Un||(Un=h()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.colorTextSecondary),error:t(Gn||(Gn=h()([`
        color: `,`;
      `])),n.colorErrorText)}}),Wn=(0,G.fA)("INSERT_MENTION_COMMAND"),Jn=(0,G.fA)("DELETE_MENTION_COMMAND"),Kn=(0,G.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Xn=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,ki=(0,f.memo)(function(r){var e=r.nodeKey,t=r.variable,n=ui(),a=(0,ge.g)(),o=B()(a,1),i=o[0],s=yi(e,Jn),c=B()(s,2),g=c[0],u=c[1],p=n==null?void 0:n[t],v=ji({isSelected:u,isError:!p||!!p.error}),b=v.styles;(0,f.useEffect)(function(){if(!i.hasNodes([xe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[i]);var y=(0,l.jsx)(H.Z,{className:b.root,ref:g,children:(0,l.jsxs)(H.Z,{align:"center",gap:2,children:[(!p||p.error)&&(0,l.jsx)(ee.Z,{className:b.error,icon:ci.Z}),(p==null?void 0:p.icon)&&(0,l.jsx)(H.Z,{children:p.icon}),(0,l.jsx)(H.Z,{className:b.text,gap:2,title:(p==null?void 0:p.label)||t,children:(0,l.jsx)("span",{children:(p==null?void 0:p.label)||t})})]})});return p!=null&&p.error?(0,l.jsx)(fe.Z,{title:p==null?void 0:p.error,children:y}):y}),xe=function(r){en()(t,r);var e=nn()(t);function t(n,a,o){var i;return Oe()(this,t),i=e.call(this,o),W()(oe()(i),"__variable",void 0),i.__variable=n,i}return Ee()(t,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var a=document.createElement("div");return a.style.display="inline-flex",a.style.alignItems="center",a.style.verticalAlign="middle",a}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,l.jsx)(ki,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var a=this.getLatest();return a.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(a){return new t(a.__variable)}},{key:"importJSON",value:function(a){var o=tn(a.variable);return o}}]),t}(G.Ij);function tn(r){return new xe(r)}function Jd(r){return r instanceof xe}var Kd=(0,G.fA)("INSERT_MENTION_COMMAND"),Xd=(0,G.fA)("DELETE_MENTION_COMMAND"),Yd=(0,G.fA)("CLEAR_HIDE_MENU_TIMEOUT"),qd=(0,G.fA)("UPDATE_MENTIONS_OPTIONS"),wi=function(e,t,n){if(e.isSimpleText())for(var a=e.getPreviousSibling(),o=e.getTextContent(),i=e,s;;){s=t(o);var c=s===null?"":o.slice(s.end);if(o=c,c===""){var g=i.getNextSibling();if((0,G.Gg)(g)){c=i.getTextContent()+g.getTextContent();var u=t(c);if(u===null){g.markDirty();return}else if(u.start!==0)return}}else{var p=t(c);if(p!==null&&p.start===0)return}if(s===null)return;if(!(s.start===0&&(0,G.Gg)(a)&&a.isTextEntity())){var v=void 0;if(s.start===0){var b=i.splitText(s.end),y=B()(b,2);v=y[0],i=y[1]}else{var C=i.splitText(s.start,s.end),S=B()(C,3);v=S[1],i=S[2]}var j=n(v);if(v.replace(j),i==null)return}}};function Ai(r){var e=r.split(`
`);return JSON.stringify({root:{children:e.map(function(t){return{children:[{detail:0,format:0,mode:"normal",style:"",text:t,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Mi=(0,f.memo)(function(r){var e=r.onInsert,t=(0,ge.g)(),n=B()(t,1),a=n[0];(0,f.useEffect)(function(){if(!a.hasNodes([xe]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[a]);var o=(0,f.useCallback)(function(c){e&&e();var g=c.getTextContent().slice(2,-2);return(0,G.U2)(tn(g))},[e]),i=(0,f.useCallback)(function(c){var g=Xn.exec(c);if(g===null)return null;var u=g.index,p=u+g[0].length;return{end:p,start:u}},[]),s=(0,f.useCallback)(function(c){return wi(c,i,o)},[o,i]);return(0,f.useEffect)(function(){return Xn.lastIndex=0,(0,Ze.qV)(a.registerNodeTransform(Te,s))},[]),null}),Yn=(0,f.memo)(function(r){var e=r.onInsert,t=r.onDelete,n=(0,ge.g)(),a=B()(n,1),o=a[0];return(0,f.useEffect)(function(){if(!o.hasNodes([xe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,Ze.qV)(o.registerCommand(Wn,function(i){o.dispatchCommand(Kn,null);var s=tn(i);return(0,G.od)([s]),e&&e(),!0},G.VN),o.registerCommand(Jn,function(){return t&&t(),!0},G.VN))},[o,e,t]),null});Yn.displayName="MentionNodePlugin";var qn=d(4337),Li=d(30967),Ni=function(r){en()(t,r);var e=nn()(t);function t(n,a,o){var i;return Oe()(this,t),i=e.call(this,n),W()(oe()(i),"label",void 0),W()(oe()(i),"value",void 0),W()(oe()(i),"icon",void 0),W()(oe()(i),"extraElement",void 0),W()(oe()(i),"keywords",void 0),W()(oe()(i),"keyboardShortcut",void 0),W()(oe()(i),"onSelect",void 0),W()(oe()(i),"disabled",void 0),W()(oe()(i),"data",void 0),i.value=n,i.label=a,i.keywords=o.keywords||[],i.icon=o.icon,i.extraElement=o.extraElement,i.keyboardShortcut=o.keyboardShortcut,i.onSelect=o.onSelect.bind(oe()(i)),i.disabled=o.disabled,i.data=o.data,i}return Ee()(t)}(qn.n),Oi=function(e,t){var n=(0,ge.g)(),a=B()(n,1),o=a[0],i=(0,f.useMemo)(function(){var s=e.map(function(g){return new Ni(g.value,g.label,{icon:g.icon,onSelect:function(){o.dispatchCommand(Wn,g.value)},disabled:g.disabled,data:g.data,extraElement:g.extraElement,keywords:g.keywords,keyboardShortcut:g.keyboardShortcut})});if(!t)return s;var c=new RegExp(t,"i");return s.filter(function(g){var u;return c.test(g.label)||((u=g.keywords)===null||u===void 0?void 0:u.some(function(p){return c.test(p)}))})},[e,t,o]);return{options:i}},_n=d(53202),Se=d(71076),Ei=d(28026),Ae=d.n(Ei),Ti=d(81792),Zi=d.n(Ti),Pi=d(18342),Ii=["time","format","relativeTime","tooltip"];Ae().extend(Zi());var Pe=Se.Z,rn=function(e){return Ae()(e?new Date(e):new Date).fromNow()},Ri=function(e){var t,n=e.time,a=e.format,o=e.relativeTime,i=o===void 0?!0:o,s=e.tooltip,c=R()(e,Ii),g=(0,f.useState)(rn(n)),u=B()(g,2),p=u[0],v=u[1],b=(0,f.useCallback)(function(j){var x=Ae()(),O=Ae()(j),w=x.diff(O);if(w>0&&w<60*60*1e3)return setInterval(function(){v(rn(j))},60*1e3)},[]);(0,f.useEffect)(function(){var j;return i&&(j=b(new Date(n))),function(){j&&clearInterval(j)}},[i,b,n]),(0,f.useEffect)(function(){if(i){var j=rn(n);j!==p&&(v(j),b(new Date(n)))}},[n,i,p,b]);var y=Ae()(n).format(a||"YYYY-MM-DD HH:mm:ss"),C=i?p:y,S=(t=s==null?void 0:s.title)!==null&&t!==void 0?t:i?y:void 0;return S&&(0,Pi.Z)(c,"ellipsis.tooltip.title",void 0),(0,l.jsx)(fe.Z,m()(m()({},s||{}),{},{title:S,children:(0,l.jsx)(Pe.Text,m()(m()({},c),{},{children:C}))}))};Pe.Time=Ri;var on=Pe,et,nt,tt,rt,ot,at,it,an=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.disabled,s=t(et||(et=h()([`
      background-color: `,`;
    `])),n.colorFillTertiary);return{anchor:t(nt||(nt=h()([`
        z-index: 9999;
      `]))),menuEmpty:t(tt||(tt=h()([`
        padding: `,`px;
      `])),n.padding),menuOverlay:t(rt||(rt=h()([`
        overflow: auto;

        width: 240px;
        max-height: 320px;
        margin-top: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.marginXXS,n.colorBgElevated,n.borderRadius,n.boxShadow),menuItem:t(ot||(ot=h()([`
        cursor: `,`;
        pointer-events: `,`;

        padding: `,"px ",`px;

        position: relative;

        border-radius: `,`px;

        color: `,`;
        font-size: `,`px;
        line-height: `,`;
        `,`
        &:hover {
          `,`
        }
      `])),i?"not-allowed":"pointer",i?"none":"all",n.paddingSM/2,n.paddingSM,n.borderRadius,i?n.colorTextDisabled:n.colorText,n.fontSize,n.lineHeight,o&&s,s),menuItemIcon:t(at||(at=h()([`
        color: `,`;
      `])),n.colorInfoText),menuItemLabel:t(it||(it=h()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Di=on.Text,st=(0,f.memo)(function(r){var e=r.index,t=r.isSelected,n=r.onClick,a=r.onMouseEnter,o=r.option,i=r.queryString,s=an({isSelected:t,disabled:o.disabled}),c=s.styles,g=o.label,u=(0,f.useMemo)(function(){var y=g,C="",S="";if(i){var j=new RegExp(i,"i"),x=j.exec(o.label);x&&(y=g.slice(0,Math.max(0,x.index)),C=x[0],S=g.slice(Math.max(0,x.index+x[0].length)))}return{before:y,middle:C,after:S}},[o.label,i,g]),p=u.before,v=u.middle,b=u.after;return(0,l.jsxs)(H.Z,{align:"center",className:c.menuItem,gap:4,onClick:function(){return n(e,o)},onMouseEnter:function(){return a(e,o)},ref:o.setRefElement,tabIndex:-1,children:[(0,l.jsx)(H.Z,{className:c.menuItemIcon,children:o.icon}),(0,l.jsxs)("div",{className:c.menuItemLabel,title:o.label,children:[p,(0,l.jsx)(Di,{mark:!0,children:v}),b]}),(0,l.jsx)(H.Z,{children:o.extraElement})]},o.key)});st.displayName="MentionMenuItem";var Fi=(0,f.memo)(function(r){var e=r.selectedIndex,t=r.options,n=r.onClick,a=r.onMouseEnter,o=r.queryString,i=an({}),s=i.styles;return(0,l.jsxs)(l.Fragment,{children:[t.length===0&&(0,l.jsx)(_n.Z,{className:s.menuEmpty}),t.map(function(c,g){return(0,l.jsx)(st,{index:g,isSelected:e===g,onClick:n,onMouseEnter:a,option:c,queryString:o},c.key)})]})}),zi=(0,f.memo)(function(r){var e=r.triggers,t=r.options,n=t===void 0?[]:t,a=r.allowSpaces,o=a===void 0?!0:a,i=r.punctuation,s=i===void 0?gi:i,c=r.preTriggerChars,g=c===void 0?fi:c,u=r.onSelect,p=an({}),v=p.styles,b=(0,ge.g)(),y=B()(b,1),C=y[0],S=Ci(e,{punctuation:s,preTriggerChars:g,allowSpaces:o}),j=S.trigger,x=S.checkForMentionMatch,O=(0,f.useState)(null),w=B()(O,2),E=w[0],L=w[1],T=Oi(n,E),F=T.options,$=(0,f.useCallback)(function(k,A,D,P){u==null||u(k,j,E),C.update(function(){A&&k!==null&&k!==void 0&&k.key&&A.remove(),k!=null&&k.onSelect&&k.onSelect(P),D()})},[C,u,E,j]),N=(0,f.useCallback)(function(k,A){var D=A.selectedIndex,P=A.selectOptionAndCleanUp,M=A.setHighlightedIndex;return k.current?Li.createPortal((0,l.jsx)("div",{className:v.menuOverlay,role:"menu",children:(0,l.jsx)(Fi,{onClick:function(Z,Q){Q.disabled||(M(Z),P(Q))},onMouseEnter:function(Z,Q){Q.disabled||M(Z)},options:F,queryString:E,selectedIndex:D})}),k.current):null},[F,E,v.menuOverlay]);return(0,l.jsx)(qn.HQ,{anchorClassName:v.anchor,menuRenderFn:N,onQueryChange:L,onSelectOption:$,options:F,triggerFn:x})}),Bi=function(e){var t=e.onBlur,n=e.onFocus,a=(0,ge.g)(),o=B()(a,1),i=o[0],s=(0,f.useRef)(null);return(0,f.useEffect)(function(){return(0,Ze.qV)(i.registerCommand(Kn,function(){return s.current&&(clearTimeout(s.current),s.current=null),!0},G.VN),i.registerCommand(G.Gq,function(){return s.current=setTimeout(function(){i.dispatchCommand(G.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),t&&t(),!0},G.VN),i.registerCommand(G.m$,function(){return n&&n(),!0},G.VN))},[i,t,n]),null},Hi=Bi,lt,ct,dt,ut,pt,gt,ft,mt,sn=32,vt=22,ht=function(e){return sn+Math.max(e-1,0)*vt},$i=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.autoSize;return{wrapper:t(lt||(lt=h()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:t(ct||(ct=h()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),sn,n.fontSize,sn,n.colorTextPlaceholder),root:t(dt||(dt=h()([`
        outline: none;
        border: 1px solid `,`;
        border-radius: `,`px;

        margin: 0;
        padding: 4px 11px;

        color: `,`;
        font-size: `,`px;
        font-family: `,`;

        display: inline-block;

        width: 100%;
        min-width: 0;

        `,`
        `,`
        overflow: auto;

        transition: all `,`;
        &:focus {
          border-color: `,`;
        }
        p {
          margin-bottom: 0;
          margin-block: 0 0;
          line-height: `,`px;
        }
      `])),n.colorBorder,n.borderRadius,n.colorText,n.fontSize,n.fontFamily,(o==null?void 0:o.minRows)&&t(ut||(ut=h()([`
          min-height: `,`px;
        `])),ht(o.minRows)),(o==null?void 0:o.maxRows)&&t(pt||(pt=h()([`
          max-height: `,`px;
        `])),ht(o.maxRows)),n.motionDurationMid,n.colorPrimaryBorder,vt),filled:t(gt||(gt=h()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),n.colorFillTertiary,n.colorFillSecondary,n.colorBgBase),borderless:t(ft||(ft=h()([`
        background: transparent;
        border: none;
      `]))),disabled:t(mt||(mt=h()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),n.colorTextDisabled,n.colorBgContainerDisabled)}}),Vi=function(e){var t=e.className,n=e.wrapperClassname,a=e.placeholder,o=e.style,i=e.value,s=e.defaultValue,c=e.readOnly,g=c===void 0?!1:c,u=e.disabled,p=u===void 0?!1:u,v=e.onChange,b=e.onBlur,y=e.onFocus,C=e.variant,S=C===void 0?"outlined":C,j=e.options,x=j===void 0?[]:j,O=e.autoSize,w=e.triggers,E=w===void 0?["@"]:w,L=e.allowSpaces,T=e.punctuation,F=e.preTriggerChars,$=e.onSelect,N=$i({autoSize:O}),k=N.styles,A=N.cx,D=!g&&!p,P=(0,f.useMemo)(function(){return{namespace:"mentions",nodes:[Te,{replace:G.R2,with:function(Q){return new Te(Q.__text)}},xe],editorState:Ai(i||s||""),onError:function(Q){throw Q}}},[]),M=function(Q){var K=Q.read(function(){return(0,G.Gv)().getTextContent()});v==null||v(K.replaceAll(`

`,`
`))},I=(0,f.useMemo)(function(){return x.reduce(function(Z,Q){return Z[Q.value]=Q,Z},{})},[x]);return _e?(0,l.jsx)(Ja.R,{initialConfig:m()(m()({},P),{},{editable:D}),children:(0,l.jsx)(di,{value:{optionsMap:I},children:(0,l.jsxs)("div",{className:A(k.wrapper,n),children:[(0,l.jsx)(_a.B,{ErrorBoundary:Xa.g,contentEditable:(0,l.jsx)(Ka.f,{className:A(W()(W()(W()(W()({},k.root,!0),k.filled,S==="filled"),k.borderless,S==="borderless"),k.disabled,p),t),style:o||{}}),placeholder:(0,l.jsx)("div",{className:k.placeholder,children:a||"\u8F93\u5165 ".concat(E.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,l.jsx)(zi,{allowSpaces:L,onSelect:$,options:x,preTriggerChars:F,punctuation:T,triggers:E}),(0,l.jsx)(Yn,{}),(0,l.jsx)(Mi,{}),(0,l.jsx)(Ya.e,{}),(0,l.jsx)(qa.$,{onChange:M}),(0,l.jsx)(Hi,{onBlur:b,onFocus:y})]})})}):(0,l.jsxs)("div",{className:A(k.wrapper,n),children:[(0,l.jsx)("div",{className:A(W()(W()(W()(W()({},k.root,!0),k.filled,S==="filled"),k.borderless,S==="borderless"),k.disabled,p),t),style:o||{}}),(0,l.jsx)("div",{className:k.placeholder,children:a||"\u8F93\u5165 ".concat(E.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})},ln=d(54106),bt=d(32328),yt=d(87449),Qi=d(90228),ue=d.n(Qi),Ui=d(87999),Ie=d.n(Ui),Me=d(97524),Gi=d(50279),xt=function(){function r(){Oe()(this,r),W()(this,"methodMap",void 0),W()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return Ee()(r,[{key:"registerMethod",value:function(t,n){this.methodMap[t]=n}},{key:"call",value:function(t){for(var n,a,o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];return(n=(a=this.methodMap)[t])===null||n===void 0?void 0:n.call.apply(n,[a].concat(i))}},{key:"updateMeta",value:function(t){Object.assign(this.meta,t)}},{key:"getMeta",value:function(){return Object.freeze(m()({},this.meta))}}]),r}(),cn="__base_monaco_editor_controller__",Re=_e&&window;Re&&!Re[cn]&&(Re[cn]=new xt);var Wi=Re[cn],Ji=function(){var r,e;return function(){var t=Ie()(ue()().mark(function n(a){var o;return ue()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(!r||!(0,Gi.Z)(e,a))){s.next=7;break}return o=Object.keys(a||{}).length>0,Me.Z.config(o?a:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),s.next=5,Me.Z.init();case 5:r=s.sent,e=a;case 7:return s.abrupt("return",r);case 8:case"end":return s.stop()}},n)}));return function(n){return t.apply(this,arguments)}}()}(),Ki=function(e){return e?Me.Z.config(e):Me.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),Me.Z.init()};function Xi(r){var e=Object.keys(r||{}).length>0,t=e?r:void 0;return Wi.getMeta().singleton?Ji(t):Ki(t)}function _d(r){controller.updateMeta(r)}var Yi=_e&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",St=Yi==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",dn={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},qi={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function _i(r){var e=(0,f.useRef)();return(0,f.useEffect)(function(){e.current=r},[r]),e.current}function Ct(r,e,t,n){if(n){var a=r.editor.getModel(r.Uri.parse(n));if(a)return a}return r.editor.createModel(e,t,n?r.Uri.parse(n):void 0)}var jt=function(e,t){var n=t.editorDidMount,a=t.editorWillMount,o=t.theme,i=t.value,s=t.path,c=t.language,g=t.saveViewState,u=t.defaultValue,p=t.enhancers,v=(0,f.useState)(!1),b=B()(v,2),y=b[0],C=b[1],S=(0,f.useState)(!1),j=B()(S,2),x=j[0],O=j[1],w=(0,f.useState)(!1),E=B()(w,2),L=E[0],T=E[1],F=(0,f.useRef)(u),$=(0,f.useRef)(i),N=(0,f.useRef)(c||"text"),k=(0,f.useRef)(s),A=_i(s),D=(0,f.useRef)(t.requireConfig),P=(0,f.useRef)(t.options),M=(0,f.useRef)(),I=(0,f.useRef)(),Z=(0,f.useRef)(),Q=(0,f.useRef)(e),K=(0,f.useRef)(),te=(0,f.useRef)(),J=(0,f.useRef)(!1),re=(0,f.useRef)(new Map),he=(0,f.useRef)({});(0,f.useEffect)(function(){he.current.enhancers=p},[p]),(0,f.useEffect)(function(){K.current=n},[n]),(0,f.useEffect)(function(){te.current=a},[a]),(0,f.useEffect)(function(){$.current=i},[i]),(0,f.useEffect)(function(){N.current=c},[c]),(0,f.useEffect)(function(){F.current=u},[u]),(0,f.useEffect)(function(){T(!0),Xi(D.current).then(function(V){var X;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,M.current=V;try{var Y;(Y=te.current)===null||Y===void 0||Y.call(te,V)}catch(Je){}if(Z.current){var U;if(Q.current==="single"){var q,pe,bn=Ct(V,(q=(pe=$.current)!==null&&pe!==void 0?pe:F.current)!==null&&q!==void 0?q:"",N.current,k.current);U=V.editor.create(Z.current,m()(m()({automaticLayout:!0},dn),P.current)),U.setModel(bn)}else{var yn=V.editor.createModel($.current,N.current),Ge=V.editor.createModel($.current,N.current);U=V.editor.createDiffEditor(Z.current,m()(m()({automaticLayout:!0},qi),P.current)),U.setModel({original:yn,modified:Ge})}I.current=U,(X=he.current.enhancers)===null||X===void 0||X.forEach(function(Je){return Je(V,U)});try{var We;(We=K.current)===null||We===void 0||We.call(K,V,U)}catch(Je){}J.current||C(!0)}}).catch(function(V){console.error("Monaco Editor Load Error!",V)}).then(function(){J.current||T(!1)})},[]),(0,f.useEffect)(function(){var V;y&&((V=M.current)===null||V===void 0||V.editor.setTheme(o))},[y,o]),(0,f.useEffect)(function(){if(y){var V=e==="diff"?I.current.getModifiedEditor():I.current;V==null||V.onDidFocusEditorText(function(){J.current||O(!0)}),V==null||V.onDidBlurEditorText(function(){J.current||O(!1)})}},[y,e]),(0,f.useEffect)(function(){return function(){J.current=!0}},[]),(0,f.useEffect)(function(){var V,X,Y;if(y&&!(e!=="diff"&&s)){var U=e==="diff"?I.current.getModifiedEditor():I.current,q=(V=i!=null?i:F.current)!==null&&V!==void 0?V:"",pe=(X=M.current)===null||X===void 0?void 0:X.editor.EditorOption.readOnly;pe&&U!==null&&U!==void 0&&(Y=U.getOption)!==null&&Y!==void 0&&Y.call(U,pe)?U==null||U.setValue(q):i!==(U==null?void 0:U.getValue())&&(U==null||U.executeEdits("",[{range:U==null?void 0:U.getModel().getFullModelRange(),text:q,forceMoveMarkers:!0}]),U==null||U.pushUndoStop())}},[y,s,e,i]),(0,f.useEffect)(function(){var V,X;if(y&&e!=="diff"&&s!==A){var Y=Ct(M.current,(V=$.current)!==null&&V!==void 0?V:F.current,N.current,s),U=I.current;$.current!==null&&$.current!==void 0&&Y.getValue()!==$.current&&Y.setValue($.current),Y!==((X=I.current)===null||X===void 0?void 0:X.getModel())&&(g&&re.current.set(A,U.saveViewState()),U.setModel(Y),g&&U.restoreViewState(re.current.get(s)))}},[y,i,s,A,e,g]);var be=I;return{isEditorReady:y,focused:x,loading:L,containerRef:Z,monacoRef:M,editorRef:be,valueRef:$}},kt=function(e){var t=(0,f.useState)(!1),n=B()(t,2),a=n[0],o=n[1],i=function(){if(a){o(!1),e==null||e.updateOptions(m()(m()({},e==null?void 0:e.getOptions()),{},{minimap:{enabled:!1}})),e==null||e.layout();return}o(!0),e==null||e.updateOptions(m()(m()({},e==null?void 0:e.getOptions()),{},{minimap:{enabled:!0}})),e==null||e.layout()};return{isFullScreen:a,fullScreen:i}},wt,At,Mt,Lt,Nt,Ot,Et,Tt=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.minimapEnabled,i=o===void 0?!1:o,s=e.isFullScreen,c=s===void 0?!1:s,g=e.diff,u=g===void 0?!1:g,p=(0,z.F4)(wt||(wt=h()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `])));return{base:t(At||(At=h()([`
        position: relative;

        box-sizing: content-box;
        min-height: 100px;

        border: 1px solid transparent;
        border-radius: 3px;
        &:hover {
          border-color: var(--color-field-border-hover, rgba(31, 56, 88, 0.1));
        }

        &.ve-focused {
          border-color: var(--color-field-border-active, rgba(31, 56, 88, 0.15));
        }

        &.ve-outline {
          border: 1px solid var(--color-field-border, rgba(31, 56, 88, 0.05)) !important;
        }

        & > .react-monaco-editor-container {
          width: 100%;
          height: 100%;
          min-height: 100px;
          background: transparent;

          `,`

          & > .monaco-editor {
            border-radius: `,`px;
            .overflow-guard,
            .margin {
              border-top-left-radius: `,`px;
              border-bottom-left-radius: `,`px;
            }
            .monaco-scrollable-element {
              border-top-right-radius: `,`px;
              border-bottom-right-radius: `,`px;
            }
          }
          .monaco-diff-editor {
            border-radius: `,`px;
            & > .original > .monaco-editor {
              border-top-left-radius: `,`px;
              border-bottom-left-radius: `,`px;
              .overflow-guard,
              .margin {
                border-top-left-radius: `,`px;
                border-bottom-left-radius: `,`px;
              }
            }
            .diffViewport {
              border-top-right-radius: `,`px;
              border-bottom-right-radius: `,`px;
            }
          }
        }

        ..syntaxTips {
          position: absolute;
          bottom: 0;
          left: 0;

          box-sizing: border-box;
          width: 100%;
          max-height: 0;
          margin: 0;
          padding: 10px 30px;

          color: red;

          background: rgba(255, 234, 234, 0.8);

          transition: 0.2s ease max-height;
        }

        .syntaxTips:hover {
          overflow: auto;
          max-height: 50%;
        }

        .syntaxTips .infoIcon {
          position: absolute;
          top: 2px;
          right: 5px;
          transform: rotateY(180deg);

          width: 20px;
          height: 16px;
        }
      `])),c&&t(Mt||(Mt=h()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius-1,n.borderRadius-1),fullScreenBtn:t(Lt||(Lt=h()([`
        &.`,`-btn {
          position: absolute;
          color: `,`;
          top: 20px;
          transition: none;
          `,`
        }
      `])),a,n.colorTextSecondary,c?t(Nt||(Nt=h()([`
                z-index: 9999;
                right: `,`px;
              `])),u?64:138):t(Ot||(Ot=h()([`
                right: `,`px;
              `])),i||u?64:20)),loading:t(Et||(Et=h()([`
        position: absolute;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: `,`px;
        color: `,`;

        background-color: transparent;

        &::after {
          content: '';
          /* width: 20px; */
          display: inline;
          animation: `,` steps(3) 1s infinite;
        }
      `])),n.fontSizeSM,n.colorTextTertiary,p)}},{hashPriority:"low"});function Ce(){}var es=function(e){var t,n=e.onChange,a=e.enableOutline,o=e.width,i=e.height,s=e.language,c=e.supportFullScreen,g=(0,f.useRef)(n),u=jt("single",e),p=u.isEditorReady,v=u.focused,b=u.loading,y=u.containerRef,C=u.monacoRef,S=u.editorRef,j=u.valueRef,x=(0,f.useRef)(),O=kt(S==null?void 0:S.current),w=O.isFullScreen,E=O.fullScreen,L=Tt({isFullScreen:w,minimapEnabled:(t=e.options)===null||t===void 0||(t=t.minimap)===null||t===void 0?void 0:t.enabled}),T=L.cx,F=L.styles,$=T(F.base,e.className,{"ve-focused":v,"ve-outline":a}),N=(0,f.useMemo)(function(){return{width:o,height:i}},[o,i]);return(0,f.useEffect)(function(){g.current=n},[n]),(0,f.useEffect)(function(){if(p){var k,A=S.current;(k=x.current)===null||k===void 0||k.dispose(),x.current=A==null?void 0:A.onDidChangeModelContent(function(D){var P,M=A==null||(P=A.getModel())===null||P===void 0?void 0:P.getValue();if(j.current!==M){var I;(I=g.current)===null||I===void 0||I.call(g,M,D)}})}},[S,p,x,j]),(0,f.useEffect)(function(){return function(){var k,A,D,P=S.current;(k=x.current)===null||k===void 0||k.dispose(),P==null||(A=P.getModel())===null||A===void 0||A.dispose(),(D=S.current)===null||D===void 0||D.dispose()}},[S]),(0,f.useEffect)(function(){var k;if(p){var A=(k=S.current)===null||k===void 0?void 0:k.getModel();if(A){var D;(D=C.current)===null||D===void 0||D.editor.setModelLanguage(A,s)}}},[S,p,s,C]),(0,l.jsxs)("div",{className:$,style:e.style,children:[b&&(0,l.jsx)("span",{className:T(F.loading,"loading"),children:St}),(0,l.jsx)("div",{className:"react-monaco-editor-container",ref:y,style:N,children:c&&(0,l.jsx)(ce.ZP,{className:F.fullScreenBtn,icon:(0,l.jsx)(ee.Z,{icon:w?bt.Z:yt.Z}),onClick:E,size:"small",type:"text"})})]})},ns=function(e){var t=e.enableOutline,n=e.width,a=e.height,o=e.language,i=e.onChange,s=e.original,c=e.supportFullScreen,g=(0,f.useRef)(i),u=jt("diff",e),p=u.isEditorReady,v=u.focused,b=u.loading,y=u.containerRef,C=u.monacoRef,S=u.editorRef,j=u.valueRef,x=kt(),O=x.isFullScreen,w=x.fullScreen,E=Tt({isFullScreen:O,diff:!0}),L=E.cx,T=E.styles,F=L(T.base,e.className,{"ve-focused":v,"ve-outline":t}),$=(0,f.useMemo)(function(){return{width:n,height:a}},[n,a]);return(0,f.useEffect)(function(){g.current=i},[i]),(0,f.useEffect)(function(){var N;if(p){(N=S.current.getModel())===null||N===void 0||N.original.setValue(s!=null?s:"");var k=S.current.getModel()||{},A=k.modified;A==null||A.onDidChangeContent(function(D){var P=A.getValue();if(j.current!==P){var M;(M=g.current)===null||M===void 0||M.call(g,P,D)}})}},[S,p,s,j]),(0,f.useEffect)(function(){return function(){var N,k,A;(N=S.current)===null||N===void 0||(N=N.getModel())===null||N===void 0||(N=N.original)===null||N===void 0||N.dispose(),(k=S.current)===null||k===void 0||(k=k.getModel())===null||k===void 0||(k=k.modified)===null||k===void 0||k.dispose(),(A=S.current)===null||A===void 0||A.dispose()}},[S]),(0,f.useEffect)(function(){var N,k,A;if(p){var D=((N=S.current)===null||N===void 0?void 0:N.getModel())||{},P=D.original,M=D.modified;(k=C.current)===null||k===void 0||k.editor.setModelLanguage(P,o),(A=C.current)===null||A===void 0||A.editor.setModelLanguage(M,o)}},[S,p,o,C]),(0,l.jsxs)("div",{className:F,style:e.style,children:[b&&(0,l.jsx)("span",{className:L(T.loading,"loading"),children:St}),(0,l.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:y,style:$,children:c&&(0,l.jsx)(ce.ZP,{className:T.fullScreenBtn,icon:(0,l.jsx)(ee.Z,{icon:O?bt.Z:yt.Z}),onClick:w,size:"small",type:"text"})})]})},ts=Object.assign(ns,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:dn,editorDidMount:Ce,editorWillMount:Ce,onChange:Ce,requireConfig:{}}}),Zt=Object.assign(es,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:dn,editorDidMount:Ce,editorWillMount:Ce,onChange:Ce,requireConfig:{}},MonacoDiffEditor:ts}),eu=null,rs=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],os=["inlineView","options"],un=function(e){var t=e.type,n=t===void 0?"single":t,a=e.editorDidMount,o=e.readOnly,i=o===void 0?!1:o,s=e.lineNumbers,c=s===void 0?"on":s,g=e.wordWrap,u=g===void 0?"off":g,p=e.contextmenu,v=p===void 0?!0:p,b=e.theme,y=e.minimapEnabled,C=y===void 0?!1:y,S=e.version,j=S===void 0?"0.45.0":S,x=e.requireConfig,O=x===void 0?{}:x,w=e.options,E=e.className,L=e.supportFullScreen,T=R()(e,rs),F=(0,f.useRef)(a);(0,f.useEffect)(function(){F.current=a},[a]);var $=(0,ln.r)(),N=$.isDarkMode,k=(0,f.useMemo)(function(){return b||(N?"vs-dark":"vs")},[N,b]),A=(0,f.useState)(),D=B()(A,2),P=D[0],M=D[1],I=(0,f.useCallback)(function(te,J){var re;M(J),(re=F.current)===null||re===void 0||re.call(F,te,J)},[]),Z=(0,f.useMemo)(function(){var te=Object.assign({},w,{readOnly:i,lineNumbers:c,wordWrap:u,contextmenu:v,minimap:C===void 0?w==null?void 0:w.minimap:Object.assign({},w==null?void 0:w.minimap,{enabled:C})});return P==null||P.updateOptions(te),te},[w,i,c,u,v,C,P]),Q=An(),K=(0,f.useMemo)(function(){return Object.assign({},O,{paths:m()({vs:Q({path:"min/vs",pkg:"monaco-editor",version:j})},O.paths)})},[Q,O,j]);return n!=="diff"?(0,l.jsx)(Zt,m()({className:E,editorDidMount:I,options:Z,requireConfig:K,supportFullScreen:P&&L,theme:k},T)):(0,l.jsx)(Zt.MonacoDiffEditor,m()({className:E,editorDidMount:I,options:Z,requireConfig:K,supportFullScreen:P&&L,theme:k},T))},as=function(e){return(0,l.jsx)(un,m()(m()({},e),{},{type:"single"}))},is=function(e){var t=e.inlineView,n=t===void 0?"off":t,a=e.options,o=R()(e,os);return(0,l.jsx)(un,m()(m()({options:Object.assign({useInlineViewWhenSpaceIsLimited:n==="on"||n==="auto",renderSideBySide:n==="off"||n==="auto"},a)},o),{},{type:"diff"}))},Pt=d(22543),ss=["to","children"],It=function(e){var t=e.to,n=e.children,a=R()(e,ss);return(0,l.jsx)("a",m()(m()({href:"#".concat(t)},a),{},{children:n}))},De=(0,f.createContext)({loading:!1,Link:It}),ls=["to","Link","children"],cs=function(e){var t=e.to,n=e.Link,a=e.children,o=R()(e,ls);return n?(0,l.jsx)(n,m()(m()({to:t},o),{},{children:a})):(0,l.jsx)("a",m()(m()({href:"#".concat(t)},o),{},{children:a}))},ds=function(e){var t=(0,f.useContext)(De),n=t.Link,a=t.breadcrumb;(0,f.useEffect)(function(){var i;a==null||(i=a.setItems)===null||i===void 0||i.call(a,e.items)},[a,e.items]);var o=(0,f.useCallback)(function(i,s,c,g){var u,p,v=i.href?i.href===((u=c.at(-1))===null||u===void 0?void 0:u.href):i.path===((p=c.at(-1))===null||p===void 0?void 0:p.path);if(v)return(0,l.jsx)("span",{children:i.title});var b=i.href?i.href:"/".concat(g.join("/"));return(0,l.jsx)(cs,{Link:n,to:b,children:i.title})},[n]);return(0,l.jsx)(Pt.Z,m()({itemRender:o},e))},Rt=d(25081),me=d(63079),Dt,us=(0,z.kc)(function(r){var e=r.css,t=r.token;return{root:e(Dt||(Dt=h()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),ps=["className","children"],gs={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},fs=function(e){var t=e.className,n=e.children,a=R()(e,ps),o=us(),i=o.styles,s=o.cx,c=(0,f.useContext)(De),g=c.loading,u=c.breadcrumb,p=c.Link,v=c.status,b=(0,f.useCallback)(function(){if(v){var y;return(0,l.jsx)(Rt.ZP,{extra:(0,l.jsx)(p,{to:u==null||(y=u.items)===null||y===void 0||(y=y[0])===null||y===void 0?void 0:y.path,children:(0,l.jsx)(ce.ZP,{type:"primary",children:"Go Back"})}),status:v,subTitle:gs[v],title:v})}return n},[v,n,p,u==null?void 0:u.items]);return g?(0,l.jsx)(me.Z,{active:!0,className:s(i.root,t)}):(0,l.jsx)(H.Z,m()(m()({className:s(i.root,t),gap:20,vertical:!0},a),{},{children:b()}))},ms=function(){return(0,l.jsx)(l.Fragment,{})},vs=d(335),Fe=d.n(vs),Ft=d(96726),zt=d(76116),Bt=d(24230),ze=d(57179),Ht,hs=(0,z.kc)(function(r){var e=r.css,t=r.token;return{custom:e(Ht||(Ht=h()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),t.colorPrimary,t.colorPrimaryHover)}},{hashPriority:"low"}),bs=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],$t=function(e){var t=e.mode,n=t===void 0?"line":t,a=e.content,o=e.defaultOpen,i=e.iconPlacement,s=i===void 0?"left":i,c=e.openIcon,g=e.closeIcon,u=e.type,p=R()(e,bs),v=hs({}),b=v.styles,y=n==="expanded",C=(0,f.useState)(o),S=B()(C,2),j=S[0],x=S[1],O=g||(0,l.jsx)(Ft.Z,{}),w=c||(0,l.jsx)(zt.Z,{}),E=y&&(0,l.jsx)("span",{children:j?O:w});return n==="line"||u==="vertical"?(0,l.jsx)(Bt.Z,m()({type:u},p)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Bt.Z,m()(m()({type:u},p),{},{children:(0,l.jsx)("span",{className:y?b.custom:"",onClick:function(){x(!j)},children:(0,l.jsxs)(ze.Z,{size:6,children:[s!=="right"&&E,(0,l.jsx)("span",{children:a}),s==="right"&&E]})})})),y&&(0,l.jsx)("div",{style:{display:j?"block":"none"},children:e.children})]})},ys=$t,Vt=d(28163),xs=d(65933),Qt,Ut,Ss=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(Qt||(Qt=h()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),n,n,n),tooltip:e(Ut||(Ut=h()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),t.colorTextTertiary)}},{hashPriority:"low"}),Cs=["tooltip","className","status","text","color"],Gt=function(e){var t=e.tooltip,n=e.className,a=e.status,o=e.text,i=e.color,s=R()(e,Cs),c=Ss(),g=c.cx,u=c.styles;return(0,l.jsxs)(ze.Z,m()(m()({className:g(u.root,n),size:"small"},s),{},{children:[(0,l.jsx)(Vt.Z,{status:a,text:o,color:i}),t&&(0,l.jsx)(fe.Z,{className:u.tooltip,title:t,children:(0,l.jsx)(ee.Z,{icon:xs.Z})})]}))},js=d(57724),ks=d.n(js),Be=d(58615),ws=["items","onClick"],As=["key","label"],Ms=["key","label"],Wt=function(e){var t=e.items,n=t===void 0?[]:t,a=e.onClick,o=a===void 0?function(){}:a,i=R()(e,ws);if(n.length<=2)return(0,l.jsx)(ze.Z,m()(m()({align:"end",size:12},i),{},{children:n.map(function(b){var y=b.key,C=b.label,S=R()(b,As);return(0,l.jsx)(ce.ZP,m()(m()({onClick:function(x){return o(y,x)}},S),{},{children:C}),y)})}));var s=ks()(n),c=s[0],g=c.key,u=c.label,p=R()(c,Ms),v=s.slice(1);return(0,l.jsx)(Be.Z.Button,m()(m()(m()({onClick:function(y){return o(g,y)}},p),{},{menu:{onClick:function(y){var C=y.key,S=y.domEvent;return o(C,S)},items:v.map(function(b){var y=b.key,C=b.label,S=b.icon,j=b.danger,x=b.disabled;return{key:y,label:C,icon:S,danger:j,disabled:x}})},overlayStyle:{minWidth:100}},i),{},{children:u}),g)},He=d(54473),Ls=["shape","size","src"],Jt=function(e){if(typeof e=="number")return e;switch(e){case"small":return 40;case"large":return 88;default:return 64}},Ns=function(e){var t=e.shape,n=t===void 0?"square":t,a=e.size,o=e.src,i=R()(e,Ls),s=(0,f.useMemo)(function(){return Jt(a)},[a]);return(0,l.jsx)(He.C,m()({shape:n,size:s,src:o},i))},Kt,Xt,Yt,qt,_t,er,nr,tr,rr,Os=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.bordered,i=o===void 0?!1:o,s=e.divider,c=s===void 0?!0:s;return{root:i?t(Kt||(Kt=h()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),n.marginXS,n.padding,n.colorBgBase,n.borderRadius,n.boxShadowTertiary):t(Xt||(Xt=h()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),n.paddingXS,n.marginXS,c&&t(Yt||(Yt=h()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),n.paddingLG,n.colorSplit)),icon:t(qt||(qt=h()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),a,a,n.colorPrimary,a),titleBox:t(_t||(_t=h()([`
        margin-bottom: `,`px;
      `])),n.marginSM),subTitle:t(er||(er=h()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),n.marginXXS,a,n.fontSize,n.colorTextSecondary),title:t(nr||(nr=h()([`
        font-size: `,`px;
        font-weight: 700;
      `])),n.fontSizeHeading5),descriptions:t(tr||(tr=h()([`
        margin-bottom: `,`px;
        font-size: `,`px;
        color: `,`;
        .`,"-badge.",`-badge-status {
          font-size: `,`px;
          & > .`,`-badge-status-text {
            font-size: `,`px;
            color: `,`;
          }
        }
      `])),n.marginXXS,n.fontSize,n.colorTextSecondary,a,a,n.fontSize,a,n.fontSize,n.colorTextSecondary),rightButtons:t(rr||(rr=h()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),Es=["className","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],Ts=on.Paragraph,Zs=function(e){var t=e.className,n=e.icon,a=e.title,o=e.titleRender,i=e.subTitle,s=e.status,c=e.descriptions,g=c===void 0?[]:c,u=e.descriptionsRender,p=e.extraContent,v=p===void 0?{}:p,b=e.extraContentRender,y=e.bordered,C=e.divider,S=R()(e,Es),j=Os({bordered:y,divider:C}),x=j.styles,O=j.cx,w=(0,f.useMemo)(function(){return!n||typeof n=="string"?{src:n,size:i?"large":"default"}:(i&&n.size===void 0&&(n.size="large"),n)},[n,i]),E=(0,f.useMemo)(function(){var k=(0,l.jsx)("span",{className:x.title,children:a});return o?o(k):k},[x.title,a,o]),L=(0,f.useMemo)(function(){var k=[],A=Fe()(g.filter(function(K){return!!K}).entries()),D;try{for(A.s();!(D=A.n()).done;){var P=B()(D.value,2),M=P[0],I=P[1],Z=I.icon,Q=I.text;(s||M>=1)&&k.push((0,l.jsx)(ys,{dashed:!1,type:"vertical"},"divider-".concat(M))),k.push((0,l.jsxs)(H.Z,{align:"center",gap:4,children:[Z&&(0,l.jsx)(fe.Z,{title:Z.tooltip,children:Z.content}),(0,l.jsx)("span",{children:Q})]},"desc-".concat(M)))}}catch(K){A.e(K)}finally{A.f()}return u?u(k):k},[g,u,s]),T=(0,f.useMemo)(function(){if(!v&&!b)return null;var k=(0,l.jsx)(Wt,m()({className:x.rightButtons},v));return b?b(k):k},[v,b,x.rightButtons]),F=(0,f.useContext)(De),$=F.loading,N=F.status;return $?(0,l.jsxs)(H.Z,{className:O(x.root,t),gap:20,children:[(0,l.jsx)(H.Z,{children:(0,l.jsx)(me.Z.Avatar,{active:!0,className:x.icon,shape:w==null?void 0:w.shape,size:Jt(w==null?void 0:w.size)})}),(0,l.jsxs)(H.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)("div",{className:x.titleBox,children:[(0,l.jsx)(me.Z.Input,{active:!0,size:25}),i&&(0,l.jsx)("div",{className:x.subTitle,children:(0,l.jsx)(me.Z.Input,{active:!0,size:18})})]}),(0,l.jsx)(me.Z.Input,{active:!0,size:18})]}),(0,l.jsx)(H.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,l.jsx)(me.Z.Button,{active:!0})})]}):N?null:(0,l.jsxs)(H.Z,m()(m()({className:O(x.root,t),gap:20},S),{},{children:[w&&(0,l.jsx)(H.Z,{children:(0,l.jsx)(Ns,m()({className:x.icon},w))}),(0,l.jsxs)(H.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)(H.Z,{className:x.titleBox,vertical:!0,children:[E,i&&(0,l.jsx)(Ts,{className:x.subTitle,ellipsis:{rows:2},children:i})]}),(0,l.jsxs)(H.Z,{align:"center",className:x.descriptions,gap:4,children:[s&&(0,l.jsx)(Gt,m()({},s)),L]})]}),(0,l.jsx)(H.Z,{align:"center",flex:"1",justify:"flex-end",children:T})]}))},or,Ps=(0,z.kc)(function(r){var e=r.css,t=r.token;return{root:e(or||(or=h()([`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: `,"px ","px ",`px;
      `])),t.padding,t.paddingLG,t.paddingXL)}},{hashPriority:"low"}),Is=["loading","className","children","Link","status","gap"],Rs=function(e){var t=Mn(),n=e.loading,a=e.className,o=e.children,i=e.Link,s=i===void 0?t||It:i,c=e.status,g=e.gap,u=g===void 0?16:g,p=R()(e,Is),v=Ps(p),b=v.styles,y=v.cx,C=(0,f.useState)([]),S=B()(C,2),j=S[0],x=S[1];return(0,l.jsx)(H.Z,m()(m()({className:y(b.root,a),gap:u,vertical:!0},p),{},{children:(0,l.jsx)(De.Provider,{value:{loading:n,Link:s,breadcrumb:{items:j,setItems:x},status:c},children:o})}))},ar,Ds=(0,z.kc)(function(r){var e=r.css,t=r.token;return{root:e(ar||(ar=h()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),t.fontFamily,t.fontWeightStrong,t.lineHeight,t.colorText)}}),Fs=["className"],zs=function(e){var t=e.className,n=R()(e,Fs),a=Ds(),o=a.cx,i=a.styles;return(0,l.jsx)("h2",m()({className:o(i.root,t)},n))},je=Rs;je.Breadcrumb=ds,je.Title=zs,je.Header=Zs,je.Content=fs,je.Footer=ms;var ir,sr,lr,cr,dr,Bs=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(ir||(ir=h()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.fontFamily,t.colorText,t.colorBgContainer,t.borderRadius*2,t.boxShadowTertiary),bordered:e(sr||(sr=h()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),t.colorBorder),hoverable:e(lr||(lr=h()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),t.motionDurationMid,t.motionDurationMid,t.boxShadow),text:e(cr||(cr=h()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),t.colorTextSecondary),error:e(dr||(dr=h()([`
      color: `,`;
    `])),t.colorErrorText)}}),Hs=["className","bordered","hoverable","children"],$s=function(e){var t=e.className,n=e.bordered,a=n===void 0?!1:n,o=e.hoverable,i=o===void 0?!0:o,s=e.children,c=R()(e,Hs),g=Bs(),u=g.cx,p=g.styles;return(0,l.jsx)("div",m()(m()({className:u(p.root,a&&p.bordered,i&&p.hoverable,t)},c),{},{children:s}))},ur,Vs=(0,z.kc)(function(r){var e=r.css,t=r.token;return{root:e(ur||(ur=h()([`
        padding: 12px 24px 20px;
      `])))}},{hashPriority:"low"}),Qs=["className","children"],Us=function(e){var t=e.className,n=e.children,a=R()(e,Qs),o=Vs(),i=o.styles,s=o.cx;return(0,l.jsx)(H.Z,m()(m()({className:s(i.root,t),gap:20,vertical:!0},a),{},{children:n}))},pr=d(56656),gr,fr,mr,vr,hr,br,Gs=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.borderedBottom,i=e.borderedBottomDashed,s=e.borderedTop,c=e.borderedTopDashed,g=e.size,u={small:"".concat(n.paddingXS,"px ").concat(n.padding,"px"),middle:"".concat(n.padding,"px ").concat(n.paddingLG,"px"),default:"".concat(n.paddingSM,"px ").concat(n.paddingLG,"px")},p=o||i;return{custom:t(gr||(gr=h()([`
        .`,`-descriptions-item-content {
          align-items: center !important;
        }
        .`,`-descriptions-row > td {
          padding-top: 8px !important;
          padding-bottom: 8px !important;
        }
        `,`
        `,`
        `,`
        `,`
        `,`
      `])),a,a,p&&g&&t(fr||(fr=h()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),a,a,u[g],a),o&&t(mr||(mr=h()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),a,n.colorSplit),i&&t(vr||(vr=h()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),a,n.colorSplit),s&&t(hr||(hr=h()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),a,n.colorSplit),c&&t(br||(br=h()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),a,n.colorSplit))}},{hashPriority:"low"}),Ws=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],pn=function(e){var t=e.className,n=e.borderedBottom,a=e.borderedBottomDashed,o=e.borderedTop,i=e.borderedTopDashed,s=R()(e,Ws),c=Gs({borderedBottom:n,borderedBottomDashed:a,borderedTop:o,borderedTopDashed:i,size:s.size}),g=c.styles,u=c.cx;return(0,l.jsx)(pr.Z,m()(m()({},s),{},{className:u(g.custom,t)}))},Js=pn;pn.Item=pr.Z.Item;var yr,Ks=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls,a=70;return{root:e(yr||(yr=h()([`
        &.`,`-descriptions {
          .`,`-descriptions-row {
            & > td {
              padding-top: 4px !important;
              padding-bottom: 4px !important;
            }
            .`,`-descriptions-item {
              &-container {
                .`,`-descriptions-item-label {
                  overflow: hidden;
                  width: `,`px;
                  white-space: nowrap;
                }
                .`,`-descriptions-item-content {
                  overflow: hidden;
                  display: inline-block;

                  width: calc(100% - `,`px);

                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      `])),n,n,n,n,a,n,a)}},{hashPriority:"low"}),Xs=["className","colon","column","size"],Ys=function(e){var t=e.className,n=e.colon,a=n===void 0?!1:n,o=e.column,i=o===void 0?2:o,s=e.size,c=s===void 0?"small":s,g=R()(e,Xs),u=Ks(),p=u.cx,v=u.styles;return(0,l.jsx)(Js,m()({className:p(v.root,t),colon:a,column:i,size:c},g))},qs=d(250),xr,Sr,Cr,jr,kr,wr,Ar,Mr,Lr,_s=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.divider,i=o===void 0?!0:o,s=e.iconBg,c=s===void 0?!0:s;return{root:t(xr||(xr=h()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),i?20:0,i&&t(Sr||(Sr=h()([`
          border-bottom: 1px solid `,`;
        `])),n.colorSplit)),icon:t(Cr||(Cr=h()([`
        &.`,`-avatar {
          color: `,`;
          `,`
          &.`,`-avatar-square {
            border-radius: 10px;
          }
          .anticon {
            font-size: 40px;
          }
        }
      `])),a,n.colorPrimary,c&&t(jr||(jr=h()([`
            background-color: `,`;
          `])),n.colorBgLayout),a),titleBox:t(kr||(kr=h()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),n.marginXXS),title:t(wr||(wr=h()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.fontWeightStrong),description:t(Ar||(Ar=h()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),a,n.colorTextSecondary),extra:t(Mr||(Mr=h()([`
        margin-top: -4px;
      `]))),rightButtons:t(Lr||(Lr=h()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),el=["className","icon","title","description","extra","divider"],nl=["className","shape","size"],tl=["children"],rl=on.Paragraph,ol=function(e){var t=e.className,n=e.icon,a=e.title,o=e.description,i=e.extra,s=e.divider,c=R()(e,el),g=_s({divider:s,iconBg:!(n!=null&&n.src)}),u=g.styles,p=g.cx,v=n||{},b=v.className,y=v.shape,C=y===void 0?"square":y,S=v.size,j=S===void 0?72:S,x=R()(v,nl),O=i||{},w=O.children,E=R()(O,tl);return(0,l.jsxs)(H.Z,m()(m()({className:p(u.root,t),gap:20},c),{},{children:[n&&(0,l.jsx)(H.Z,{children:(0,l.jsx)(He.C,m()({className:p(u.icon,b),shape:C,size:j},x))}),(0,l.jsxs)(H.Z,{flex:"1",vertical:!0,children:[(0,l.jsxs)(H.Z,{className:u.titleBox,gap:4,children:[(0,l.jsx)("div",{className:u.title,children:a}),i&&(0,l.jsx)(H.Z,{align:"flex-start",className:u.extra,justify:"flex-end",onClick:function(T){return T.stopPropagation()},children:(0,l.jsx)(Be.Z,m()(m()({},E),{},{children:w||(0,l.jsx)(ce.ZP,{icon:(0,l.jsx)(ee.Z,{icon:qs.Z}),size:"small",type:"text"})}))})]}),o&&(0,l.jsx)(rl,{className:u.description,ellipsis:{rows:2},children:o})]})]}))},$e=$s;$e.Header=ol,$e.Content=Us,$e.Descriptions=Ys;var al=d(15558),Ve=d.n(al),il=d(82338),sl=d(94269),Nr,Or,Er,Tr,Zr,Pr=function(e){switch(e){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},ll=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.disabled,i=e.size,s=Pr(i),c=s.cardWidth;return{option:t(Nr||(Nr=h()([`
        position: relative;

        border: 1px solid `,`;
        border-radius: `,`px;

        cursor: `,`;

        padding: `,`px;

        transition: all `,`;

        width: `,`px;
        min-height: 108px;

        `,`

        `,`

        div.`,`-typography {
          margin-bottom: 0;
        }
      `])),n.colorBorder,n.borderRadius,o?"not-allowed":"pointer",n.padding,n.motionDurationFast,c,o&&t(Or||(Or=h()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),n.colorBgContainerDisabled,a,n.colorTextDisabled,a,n.colorTextDisabled),!o&&t(Er||(Er=h()([`
          &:hover {
            border-color: `,`;
          }
        `])),n.colorPrimaryBorderHover),a),optionSelected:t(Tr||(Tr=h()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),n.colorPrimary,n.colorPrimaryActive),check:t(Zr||(Zr=h()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),n.marginXS,n.marginXS,n.colorPrimary)}}),cl=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],dl=Se.Z.Text,ul=Se.Z.Paragraph,pl=f.forwardRef(function(r,e){var t=r.defaultValue,n=r.value,a=r.onChange,o=r.multiple,i=o===void 0?!1:o,s=r.disabled,c=s===void 0?!1:s,g=r.options,u=g===void 0?[]:g,p=r.classNames,v=r.styles,b=r.size,y=b===void 0?"middle":b,C=r.optionRender,S=R()(r,cl),j=(0,f.useMemo)(function(){return u.some(function(M){return!!M.img||!!M.icon})},[u]),x=ll({disabled:c,size:y}),O=x.cx,w=x.styles,E=(0,f.useMemo)(function(){return Pr(y)},[y]),L=E.imgHeight,T=(0,f.useCallback)(function(M){return!i||Array.isArray(M)?M:M===void 0?[]:[M]},[i]),F=(0,sl.C8)(T(t),{defaultValue:T(t),value:n,onChange:a}),$=B()(F,2),N=$[0],k=$[1],A=(0,f.useCallback)(function(M){if(!c){if(!i){k(M);return}if(N.includes(M)){k(N.filter(function(I){return I!==M}));return}k([].concat(Ve()(N),[M]))}},[N,c,i,k]),D=(0,f.useCallback)(function(M){return i?N.includes(M):N===M},[N,i]),P=(0,f.useCallback)(function(M,I){var Z=D(M.value),Q=(0,l.jsxs)(H.Z,{align:j?"center":"flex-start",className:O(w.option,Z&&w.optionSelected,p==null?void 0:p.card),gap:"small",onClick:function(){return A(M.value)},style:m()(m()({},v==null?void 0:v.card),M.style),vertical:!0,children:[j&&(0,l.jsx)(He.C,{className:p==null?void 0:p.icon,icon:M.icon,shape:"square",size:L,src:M.img,style:m()(m()({},v==null?void 0:v.icon),M.iconStyle)}),M.label&&(0,l.jsx)(dl,{ellipsis:!0,strong:!0,children:M.label}),!j&&M.description&&(0,l.jsx)(ul,{ellipsis:{rows:2},type:"secondary",children:M.description}),i&&Z&&(0,l.jsx)(ee.Z,{className:w.check,icon:il.Z})]},M.value);return C?C(Q,M,I):Q},[p==null?void 0:p.card,p==null?void 0:p.icon,O,L,j,D,i,A,C,w.check,w.option,w.optionSelected,v==null?void 0:v.card,v==null?void 0:v.icon]);return(0,l.jsx)(H.Z,m()(m()({gap:"large",ref:e,wrap:!0},S),{},{children:u.map(function(M,I){return P(M,I)})}))}),Ir=d(38695),gn=d(59823),Rr=d(99865),Dr=d(7515),gl=function(e){var t=e.value,n=e.defaultValue,a=e.min,o=a===void 0?0:a,i=e.max,s=e.step,c=e.gutter,g=c===void 0?16:c,u=e.sliderCol,p=u===void 0?{span:12}:u,v=e.inputCol,b=v===void 0?{span:5}:v,y=e.addonAfter,C=e.addonBefore,S=e.placeholder,j=e.onChange,x=e.style,O=e.className,w=e.sliderProps,E=w===void 0?{}:w,L=e.inputProps,T=L===void 0?{}:L,F=(0,f.useState)(),$=B()(F,2),N=$[0],k=$[1],A=function(P){Number.isNaN(P)||(k(P),j==null||j(P))};return(0,l.jsxs)(Ir.Z,{className:O,gutter:g,style:x,children:[(0,l.jsx)(gn.Z,m()(m()({},p),{},{children:(0,l.jsx)(Rr.Z,m()(m()({},E),{},{defaultValue:n,max:i,min:o,onChange:A,step:s,value:t!=null?t:N}))})),(0,l.jsx)(gn.Z,m()(m()({},b),{},{children:(0,l.jsx)(Dr.Z,m()(m()({},T),{},{addonAfter:y,addonBefore:C,defaultValue:n,max:i,min:o,onChange:A,placeholder:S,step:s,value:t!=null?t:N}))}))]})},Fr=d(32142),zr,fl=(0,z.kc)(function(r,e){var t=r.css,n=e.bordered,a=n===void 0?"dashed":n;return{custom:t(zr||(zr=h()([`
        border-style: `,` !important;
      `])),a)}},{hashPriority:"low"}),ml=["bordered","className"],Br=function(e){var t=e.bordered,n=t===void 0?"dashed":t,a=e.className,o=R()(e,ml),i=fl({bordered:n}),s=i.styles,c=i.cx;return(0,l.jsx)(Fr.Z,m()(m()({},o),{},{className:c(s.custom,a)}))};Br.ErrorBoundary=Fr.Z.ErrorBoundary;var nu=null,Hr=d(24730),vl=d(372),fn=d(76580),Qe=d(40097),$r,Vr=(0,z.vJ)($r||($r=h()([`
.yunti-notification {
  width: auto;
  min-width: 360px;
  max-width: 520px;
  &-link {
    color: `,`;
  }
  &-link:hover {
    color: `,`;
  }
  &-collapse {
    &-expand-icon {
      font-size: 14px !important;
    }
    &.ant-collapse > .ant-collapse-item {
      & > .ant-collapse-header {
        padding: 6px 16px 6px 24px;
        & > span {
          color: rgba(0, 0, 0, 0.7);
        }
        &:hover {
          .yunti-notification-collapse-expand-icon {
            color: `,`;
          }
        }
        .ant-collapse-expand-icon {
          position: absolute;
          top: 3.429px;
          left: 0%;
        }

        .ant-collapse-arrow {
          position: relative;
          top: 3.429px;

          display: inline-block;

          padding: 6px 0;

          line-height: 0;
          text-align: center;
          text-transform: none;
          text-rendering: optimizelegibility;
          vertical-align: -0.125em;
        }
        & > .ant-collapse-header-text {
          width: 100%;
        }
      }
      & > .ant-collapse-content > .ant-collapse-content-box {
        padding: 0;
      }
    }
    &-content-p {
      position: relative;
      & > pre {
        overflow: auto;
        height: 166px;
        margin: 0;
        padding-right: 24px;
      }
      & > .ant-typography-copy {
        position: absolute;
        right: 16px;
        bottom: 8px;

        font-size: 14px;
        color:`,`;
      }

      & > .ant-typography-copy:hover {
        color:`,`;
      }
    }
  }
  `,`
}
`])),function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme;return e==null?void 0:e.colorPrimary},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme,t=e||{},n=t.prefixCls;return Qe.ZP.config({prefixCls:n}),`
      .`.concat(n,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(n,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)}),hl=["detail","message","description","onClose","className"],bl=fn.Z.Panel,yl=Se.Z.Link,xl=Se.Z.Paragraph,Sl=Se.Z.Text,ke={},Cl=function(e,t){ke[e]||(ke[e]=[]),ke[e].push(t)},jl=function(e){delete ke[e]},Qr=function r(e){var t="";if(typeof e=="string")t=e;else if(typeof e=="number")t=e.toString();else if(Array.isArray(e)){var n=Fe()(e),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;t+=r(o)}}catch(i){n.e(i)}finally{n.f()}}else(0,f.isValidElement)(e)&&(t+=r(e.props.children));return t},Ur=function(e){var t,n=e.noticeKey,a=e.message,o=((t=ke[n])===null||t===void 0?void 0:t.length)||0;return(0,l.jsxs)(l.Fragment,{children:[a,o>1&&" (".concat(o,")")]})},kl=function(e){var t=e.noticeKey,n=(0,f.useState)(),a=B()(n,2),o=a[0],i=a[1],s={},c=Fe()(ke[t]),g;try{for(c.s();!(g=c.n()).done;){var u=g.value,p=Qr(u.description);u.descKey=p,s[p]=u}}catch(v){c.e(v)}finally{c.f()}return(0,l.jsx)(fn.Z,{accordion:!0,activeKey:o,className:"yunti-notification-collapse",expandIcon:function(b){var y=b.isActive;return(0,l.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:y?(0,l.jsx)(yl,{className:"yunti-notification-link",children:(0,l.jsx)(Ft.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,l.jsx)(zt.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(b){i(b)},children:Object.values(s).map(function(v){var b=v.descKey,y=v.description,C=v.detail;return(0,l.jsx)(bl,{header:(0,l.jsx)(Sl,{ellipsis:{tooltip:!1},style:{width:250},children:y}),children:(0,l.jsx)(xl,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(C,null,2)},type:"secondary",children:(0,l.jsx)("pre",{children:JSON.stringify(C,null,2)})})},b)})})},ve=function(e){var t=e.detail,n=e.message,a=e.description,o=e.onClose,i=e.className,s=R()(e,hl),c=Qr(n);Cl(c,e);var g=function(){o==null||o(),jl(c)};return e.type==="warning"&&!e.icon&&(s.icon=(0,l.jsx)(vl.Z,{style:{color:"#ff7d00"}})),t?Qe.ZP.open(m()({key:c,message:(0,l.jsx)(Ur,{message:n,noticeKey:c}),description:(0,l.jsx)(kl,{noticeKey:c}),onClose:g,className:"yunti-notification ".concat(i)},s)):Qe.ZP.open(m()({key:c,message:(0,l.jsx)(Ur,{message:n,noticeKey:c}),description:a,onClose:g,className:"yunti-notification ".concat(i)},s))},Gr=function(e){var t;if(((e==null||(t=e.errors)===null||t===void 0?void 0:t.length)||0)>0){e!=null&&e.errors;var n=Fe()((e==null?void 0:e.errors)||[]),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;ve(m()(m()({detail:o,description:o.message},e),{},{type:"warning"}))}}catch(i){n.e(i)}finally{n.f()}}else ve(m()(m()({},e),{},{type:"warning"}))},wl=m()(m()({},Qe.ZP),{},{success:function(e){return ve(m()(m()({},e),{},{type:"success"}))},info:function(e){return ve(m()(m()({},e),{},{type:"info"}))},warning:function(e){return ve(m()(m()({},e),{},{type:"warning"}))},warn:function(e){return ve(m()(m()({},e),{},{type:"warning"}))},error:function(e){return ve(m()(m()({},e),{},{type:"error"}))},warnings:Gr,warns:Gr}),tu=null,Al=["children"],Wr=function(e){var t=e.children,n=R()(e,Al);return(0,l.jsxs)(Hr.Z,m()(m()({},n),{},{children:[(0,l.jsx)(Vr,{}),t]}))};Wr.useApp=Hr.Z.useApp;var ru=null,Ml=d(54901),Jr,Kr,Xr,Ll=(0,z.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.closeIcon,o=e.closeIconPlacement,i=e.extra,s=t(Jr||(Jr=h()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),n,n,!(a===null||a===!1)&&t(Kr||(Kr=h()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),n));return{custom:t(Xr||(Xr=h()([`
        `,`
      `])),(!o||o==="right"||o==="auto"&&!i)&&s)}},{hashPriority:"low"}),Nl=["className"],Ol=function(e){var t=e.className,n=R()(e,Nl),a=Ll(n),o=a.styles,i=a.cx;return(0,l.jsx)(Ln.Z,m()(m()({},n),{},{className:i(o.custom,t)}))},ou=null,Yr,qr,_r,eo,El=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=e.divider,o=e.position;return{menuWrapper:t(Yr||(Yr=h()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.colorBgElevated,n.borderRadiusLG,n.boxShadowSecondary),menuExtra:t(qr||(qr=h()([`
        padding: 10px 16px 4px;
        `,`
      `])),a&&t(o==="top"?_r||(_r=h()([`
              border-bottom: 1px solid `,`;
            `])):eo||(eo=h()([`
              border-top: 1px solid `,`;
            `])),n.colorSplit))}},{hashPriority:"low"}),Tl=["menuExtra","dropdownRender"],Zl=function(e){var t=e.menuExtra,n=e.dropdownRender,a=R()(e,Tl),o=t||{},i=o.position,s=i===void 0?"top":i,c=o.divider,g=c===void 0?!1:c,u=o.content,p=El({divider:g,position:s}),v=p.styles,b=(0,f.useCallback)(function(y){var C=f.cloneElement(y,{style:{boxShadow:"none",border:"none"}});if(!u)return n?(0,l.jsx)(H.Z,{className:v.menuWrapper,vertical:!0,children:n(C)}):y;var S=(0,l.jsx)(H.Z,{align:"center",className:v.menuExtra,children:u});return(0,l.jsxs)(H.Z,{className:v.menuWrapper,vertical:!0,children:[s==="top"&&S,C,s==="bottom"&&S]})},[u,n,s,v.menuExtra,v.menuWrapper]);return(0,l.jsx)(Be.Z,m()({dropdownRender:b},a))},no=Zl;no.Button=Be.Z.Button;var we=d(68191),Pl=d(41773),ae=d(6183),Il=d(14539),to,ro,oo,Rl=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{empty:e(to||(to=h()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),t.paddingXS,t.paddingSM,t.colorTextTertiary),list:e(ro||(ro=h()([`
      &.`,`-table-wrapper {
        .`,`-table {
          &-thead {
            & > tr > th {
              font-weight: normal;
              color: `,`;
              background-color: unset;
              &::before {
                display: none;
              }
            }
          }
          &-tbody {
            & > tr:last-child {
              & > td {
                border-bottom-color: transparent;
              }
            }
          }
          &-cell {
            vertical-align: top;
          }
        }
      }
      .`,`-form {
        &-item {
          margin-bottom: 0;
        }
      }
    `])),n,n,t.colorTextTertiary,n),noFormItem:e(oo||(oo=h()([`
      height: `,`px;
      color: `,`;
    `])),t.controlHeight,t.colorTextTertiary)}}),Dl=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style"],Fl=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width"],zl=["key","name"],ao=function(e){var t=e.extra,n=e.expandIcon,a=e.icon,o=e.title,i=e.variant,s=e.defaultActive,c=e.empty,g=c===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":c,u=e.columns,p=u===void 0?[]:u,v=e.disabled,b=e.readOnly,y=e.addOneFieldDefault,C=e.disableRemoveWhenOneField,S=e.maxFileds,j=e.name,x=e.addParams,O=e.className,w=e.onRemove,E=e.fieldRemoveButton,L=E===void 0?!0:E,T=e.style,F=R()(e,Dl),$=Rl(),N=$.styles,k=(0,f.useRef)(),A=we.Z.useFormInstance(),D=we.Z.useWatch(j,A),P=(0,f.useCallback)(function(){if(!x)return[];var I=typeof x=="function"?x():x;return[I.defaultValue,I.insertIndex]},[x]),M=(0,f.useCallback)(function(I){var Z=A.getFieldValue([j,I]);return w==null?void 0:w(Z)},[A,j,w]);return(0,f.useEffect)(function(){var I;if(y&&(!(A!=null&&A.getFieldValue(j))||(A==null||(I=A.getFieldValue(j))===null||I===void 0?void 0:I.length)===0)){var Z;(Z=k.current)===null||Z===void 0||Z.call.apply(Z,[k].concat(Ve()(P())))}},[y,P,A,j]),(0,l.jsx)(Ye,{extra:t===void 0?j&&!b&&(0,l.jsx)(fe.Z,{title:S&&"\u6700\u591A\u6DFB\u52A0 ".concat(S," \u9879"),children:(0,l.jsx)(ce.ZP,{disabled:v||!!(S&&(D==null?void 0:D.length)===S),icon:(0,l.jsx)(Pl.Z,{}),onClick:function(Z){var Q;Z.stopPropagation(),(Q=k.current)===null||Q===void 0||Q.call.apply(Q,[k].concat(Ve()(P())))},size:"small",type:"text"})}):t,className:O,expandIcon:n,icon:a,title:o,variant:i,defaultActive:s,style:T,children:j?(0,l.jsx)(we.Z.List,m()(m()({name:j},F),{},{children:function(Z,Q){var K=Q.add,te=Q.remove;return k.current=K,(0,l.jsx)(ae.Z,{className:N.list,columns:[].concat(Ve()(p.map(function(J){var re=J.label,he=J.name,be=J.render,V=J.dependencies,X=J.rules,Y=J.align,U=J.ellipsis,q=J.fixed,pe=J.responsive,bn=J.shouldCellUpdate,yn=J.width,Ge=R()(J,Fl);return{title:re,dataIndex:he,align:Y,ellipsis:U,fixed:q,responsive:pe,shouldCellUpdate:bn,width:yn,render:function(Je,du,ye){var xn=Z[ye],$d=xn.key,Vd=xn.name,Qd=R()(xn,zl),Ke=be==null?void 0:be(Z[ye],ye);if(!Ke&&!Ge.noStyle)return(0,l.jsx)(H.Z,{align:"center",className:N.noFormItem,children:"\u65E0\u9700\u8BBE\u7F6E"});if(!he)return(0,l.jsx)(H.Z,{align:"center",className:N.noFormItem,children:Ke});var Xe={readOnly:b,disabled:v};return b===!0&&(Xe.showCount=!1,Xe.variant="borderless",Xe.placeholder="-"),(0,l.jsx)(we.Z.Item,m()(m()(m()({},Qd),{},{dependencies:typeof V=="function"?V(Z[ye],ye):V,name:[Vd,he],rules:typeof X=="function"?X(Z[ye],ye):X},Ge),{},{children:Ke&&f.cloneElement(Ke,Xe)}),$d)}}})),[!b&&L!==!1&&{title:"",dataIndex:"del",render:function(re,he,be){var V=Z[be].name;return(0,l.jsx)(we.Z.Item,{children:(0,l.jsx)(ce.ZP,{disabled:v||C&&Z.length===1,icon:(0,l.jsx)(ee.Z,{icon:Il.Z}),onClick:Ie()(ue()().mark(function X(){var Y;return ue()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,M(V);case 2:Y=q.sent,Y!==!1&&te(V);case 4:case"end":return q.stop()}},X)})),type:"text"})})}}]).filter(function(J){return!!J}),dataSource:Z,locale:{emptyText:g},pagination:!1,rowHoverable:!1,size:"small"})}})):(0,l.jsx)("div",{className:N.empty,children:g})})},io=we.Z;io.CollapseList=ao;var Bl=function(e){return typeof e=="string"?document.querySelector("#".concat(e)):(e==null?void 0:e.current)||e},mn=":not([disabled]):not([readonly])",Hl=["text","password","search","tel","url","number","email",""].map(function(r){return'input[type="'.concat(r,'"]').concat(mn)}).join(", ")+", input:not([type])".concat(mn,", textarea").concat(mn),$l=function(e){var t,n=Bl(e);if(n){var a=(t=n.querySelector)===null||t===void 0?void 0:t.call(n,Hl);if(a!=null&&a.focus)return a.focus(),!0}},so=function(e){var t=(0,f.useState)(!1),n=B()(t,2),a=n[0],o=n[1];f.useEffect(function(){if(!(a||!e)){var i=$l(e);i&&o(!0)}},[e,a,o])},lo=function(e){var t,n=e.autoFocus,a=n===void 0?!0:n,o=(0,f.useRef)(null);return so(a?o:void 0),(0,l.jsx)("div",{className:e.className,id:e.id,ref:o,style:(t=e.style)!==null&&t!==void 0?t:{display:e.className?void 0:"contents"},children:e.children})},Vl=function(e){return function(t){var n=function(i){return(0,l.jsx)(lo,m()(m()({},e||{}),{},{children:(0,l.jsx)(t,m()({},i))}))},a=t.displayName||t.name||"Component";return n.displayName="withFormHelper(".concat(a,")"),n}},ie=d(54381),Ql="yunti-ui",co,uo,Ul=(0,z.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.borderd,o=a===void 0?!0:a,i=e.footer,s=i===null||Array.isArray(i)&&i.length===0,c=t(co||(co=h()([`
      .`,`-modal-header::after {
        content: ' ';

        position: absolute;
        top: 56px;
        left: 0;

        width: 100%;
        height: 1px;

        background: rgba(5, 5, 5, 0.06);
      }
      .`,`-modal-body {
        margin-top: 40px;
        margin-bottom: `,`;
      }
      .`,`-modal-body::after {
        content: ' ';

        position: absolute;
        bottom: 72px;
        left: 0;

        width: 100%;
        height: `,`;

        background: rgba(5, 5, 5, 0.06);
      }
    `])),n,n,s?0:"40px",n,s?0:"1px");return{custom:t(uo||(uo=h()([`
        `,`
      `])),o&&c)}},{hashPriority:"low"}),Gl=["className","borderd"],Wl=function(e){var t=e.className,n=e.borderd,a=n===void 0?!0:n,o=R()(e,Gl),i=Ul(m()({borderd:a},o)),s=i.styles,c=i.cx;return(0,l.jsx)(ie.Z,m()(m()({},o),{},{className:c(s.custom,"".concat(Ql,"-modal"),t)}))},se=Wl;se.useModal=ie.Z.useModal,se.destroyAll=ie.Z.destroyAll,se.config=ie.Z.config,se._InternalPanelDoNotUseOrYouWillBeFired=ie.Z._InternalPanelDoNotUseOrYouWillBeFired,se.info=ie.Z.info,se.success=ie.Z.success,se.error=ie.Z.error,se.warning=ie.Z.warning,se.warn=ie.Z.warn,se.confirm=ie.Z.confirm;var au=null,Jl=d(19480),Kl=d(37513),po,go,fo,mo,Xl=(0,z.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.size,i=e.segmented,s=function(){return i?i!==!0?i.gap:!0:0}(),c=function(){if(i)return i!==!0?i.borderRadius:!0}(),g=function(){var C={small:n.sizeSM,middle:n.size,large:n.sizeLG};return typeof s=="string"?C[s]:s===!0?o?C[o]:C.middle:s||0},u=function(){var C={small:n.controlHeightSM,middle:n.controlHeight,large:n.controlHeightLG};if(c===!0)return o?C[o]:C.middle;if(c||c===0)return c},p=u()&&t(po||(po=h()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),u()),v=t(go||(go=h()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),g()),b=i===!0||i&&!i.bordered;return{custom:t(fo||(fo=h()([`
        `,`
        `,`
        `,`
      `])),p,v,b&&t(mo||(mo=h()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),a,a,n.colorPrimary))}},{hashPriority:"low"}),Yl=["className"],vo=Jl.ZP,ql=function(e){var t=e.className,n=R()(e,Yl);n.segmented&&(n.optionType="button");var a=Xl(n),o=a.styles,i=a.cx;return(0,l.jsx)(Kl.Z,m()(m()({},n),{},{className:i(o.custom,t)}))};vo.Group=ql;var iu=null,ho,_l=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{table:e(ho||(ho=h()([`
      .`,`-table {
        &-thead {
          & > tr > th {
            font-weight: normal;
            color: `,`;
            background-color: unset;
            &::before {
              display: none;
            }
          }
        }
        &-tbody {
          & > tr:last-child {
            & > td {
              border-bottom-color: transparent;
            }
          }
        }
        &-cell {
          vertical-align: top;
        }
      }
    `])),n,t.colorTextTertiary)}}),ec=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],bo=function(e){var t=e.rootStyle,n=e.rootClassName,a=e.icon,o=e.title,i=e.variant,s=e.defaultActive,c=e.extra,g=e.className,u=R()(e,ec),p=_l(),v=p.cx,b=p.styles;return(0,l.jsx)(Ye,{className:n,style:t,icon:a,title:o,variant:i,defaultActive:s,extra:c,children:(0,l.jsx)(ae.Z,m()({className:v(b.table,g),pagination:!1,rowHoverable:!1,size:"small"},u))})},nc=["columns"],le=function(e){var t=e.columns,n=R()(e,nc),a=(0,f.useMemo)(function(){return t==null?void 0:t.map(function(o){if(o.render)return o;if(o.ellipsis&&o.ellipsis!==!0&&o.ellipsis.showTitle||o.ellipsis===!0){var i=o.ellipsis===!0?{}:o.ellipsis;return m()(m()({},o),{},{ellipsis:{showTitle:!1},render:function(c){return c||c===0?(0,l.jsx)(fe.Z,m()(m()({},i),{},{placement:"topLeft",title:c,children:c})):"-"}})}return o.render||(o.render=function(s){return s!=null?s:"-"}),o})},[t]);return(0,l.jsx)(ae.Z,m()(m()({},n),{},{columns:a}))};le.displayName="Table",le.SELECTION_COLUMN=ae.Z.SELECTION_COLUMN,le.EXPAND_COLUMN=ae.Z.EXPAND_COLUMN,le.SELECTION_ALL=ae.Z.SELECTION_ALL,le.SELECTION_INVERT=ae.Z.SELECTION_INVERT,le.SELECTION_NONE=ae.Z.SELECTION_NONE,le.Column=ae.Z.Column,le.ColumnGroup=ae.Z.ColumnGroup,le.Summary=ae.Z.Summary,le.Collapse=bo;var su=null,tc=d(47021),yo=d(79950),rc=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],xo,So,Co,oc=(0,z.kc)(function(r){var e=r.css;return{container:e(xo||(xo=h()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:e(So||(So=h()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:e(Co||(Co=h()([`
      position: relative;
      flex: 1;
    `])))}}),ac=(0,f.forwardRef)(function(r,e){var t=r.className,n=r.style,a=r.classNames,o=r.expand,i=o===void 0?!0:o,s=r.setExpand,c=r.bottomAddons,g=r.topAddons,u=r.onSizeChange,p=r.heights,v=r.onSend,b=R()(r,rc),y=oc(),C=y.styles;return(0,l.jsx)(tc.Z,{className:t,classNames:a,fullscreen:i,headerHeight:p==null?void 0:p.headerHeight,maxHeight:p==null?void 0:p.maxHeight,minHeight:p==null?void 0:p.minHeight,onSizeChange:u,placement:"bottom",size:{height:p==null?void 0:p.inputHeight,width:"100%"},style:m()({zIndex:10},n),children:(0,l.jsxs)("section",{className:C.container,style:{minHeight:p==null?void 0:p.minHeight},children:[g,(0,l.jsx)("div",{className:C.textareaContainer,children:(0,l.jsx)(yo.Z,m()({className:C.textarea,onSend:function(){v==null||v(),s==null||s(!1)},ref:e,type:"pure"},b))}),c]})})}),ic=(0,f.memo)(ac),sc=d(33190),lc=d(71496),cc=d(47876),dc=d(85704),uc=d(65027),pc=d(98202),gc=d(83593),fc=d(71375),mc=d(21338),vc=d(82877),vn=d(70190),hc=d(37880),jo=d(6335),bc=d(45122),ko=d(65720),wo=(0,f.memo)(function(r){var e=r.value,t=r.onChange,n=r.classNames,a=n===void 0?{}:n,o=r.onEditingChange,i=r.editing,s=r.openModal,c=r.onOpenChange,g=r.placeholder,u=r.showEditWhenEmpty,p=u===void 0?!1:u,v=r.styles,b=r.height,y=r.inputType,C=r.editButtonSize,S=r.text,j=r.fullFeaturedCodeBlock,x=r.model,O=r.fontSize,w=r.markdownProps,E=(0,ko.Z)(!1,{onChange:o,value:i}),L=B()(E,2),T=L[0],F=L[1],$=(0,ko.Z)(!1,{onChange:c,value:s}),N=B()($,2),k=N[0],A=N[1],D=b==="auto",P=(0,l.jsx)(hc.Z,{className:a==null?void 0:a.input,classNames:{textarea:a==null?void 0:a.textarea},defaultValue:e,editButtonSize:C,height:b,onCancel:function(){return F(!1)},onConfirm:function(I){t==null||t(I),F(!1)},placeholder:g,style:v==null?void 0:v.input,text:S,textareaClassname:a==null?void 0:a.input,type:y});return!e&&p?P:(0,l.jsxs)(l.Fragment,{children:[!k&&T?P:(0,l.jsx)(jo.Z,m()(m()({className:a==null?void 0:a.markdown,fontSize:O,fullFeaturedCodeBlock:j,style:m()({height:D?"unset":b},v==null?void 0:v.markdown),variant:"chat"},w),{},{children:e||g||""})),k&&(0,l.jsx)(bc.Z,{editing:T,extra:x==null?void 0:x.extra,footer:x==null?void 0:x.footer,height:b,onChange:t,onEditingChange:F,onOpenChange:function(I){A(I),F(!1)},open:k,placeholder:g,text:S,value:e})]})}),Ao,Mo,Lo,No,Oo,Eo,To,Zo,Po,Io,Ro,Do,Fo,zo,Bo,Ho,$o,Vo,yc=(0,z.kc)(function(r,e){var t=r.cx,n=r.css,a=r.token,o=r.isDarkMode,i=r.responsive,s=e.placement,c=e.type,g=e.title,u=e.primary,p=e.avatarSize,v=e.editing,b=e.time,y=n(Ao||(Ao=h()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),u?o?a.colorFill:a.colorBgElevated:o?a.colorFillSecondary:a.colorBgContainer,a.borderRadiusLG,a.motionEaseOut),C=n(Mo||(Mo=h()([`
      padding-block-start: `,`;
    `])),g?0:"6px"),S=n(Lo||(Lo=h()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),a.motionEaseOut),j=c==="block"?y:C,x=v&&n(No||(No=h()([`
        width: 100%;
      `])));return{actions:t(n(Oo||(Oo=h()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),c==="block"?"flex-end":s==="left"?"flex-start":"flex-end",s==="left"?"flex-end":"flex-start"),v&&n(Eo||(Eo=h()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:n(To||(To=h()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),p,p),avatarGroupContainer:n(Zo||(Zo=h()([`
        width: `,`px;
      `])),p),container:t(c==="pure"&&S,n(Po||(Po=h()([`
          position: relative;
          width: 100%;
          max-width: 100vw;
          padding: 16px;

          time {
            display: inline-block;
            white-space: nowrap;
          }

          div[role='menubar'] {
            display: flex;
          }

          time,
          div[role='menubar'] {
            pointer-events: none;
            opacity: 0;
            transition: opacity 200ms `,`;
          }

          &:hover {
            time,
            div[role='menubar'] {
              pointer-events: unset;
              opacity: 1;
            }
          }

          `,` {
            padding-block: `,`;
            padding-inline: 8px;
          }
        `])),a.motionEaseOut,i.mobile,c==="pure"?"12px":"6px")),editingContainer:t(x,n(Io||(Io=h()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),a.colorBorderSecondary,a.colorBorder),c==="pure"&&n(Ro||(Ro=h()([`
            background: `,`;
            border-radius: `,`px;
          `])),a.colorFillQuaternary,a.borderRadius)),editingInput:n(Do||(Do=h()([`
        width: 100%;
      `]))),errorContainer:n(Fo||(Fo=h()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:n(zo||(zo=h()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),s==="right"?"-4px":"unset",s==="left"?"-4px":"unset",a.colorBgLayout,a.colorPrimary),message:t(j,n(Bo||(Bo=h()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),i.mobile)),messageContainer:t(x,n(Ho||(Ho=h()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),b?-16:0,i.mobile)),messageContent:t(x,n($o||($o=h()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),i.mobile)),messageExtra:t("message-extra"),name:n(Vo||(Vo=h()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),a.colorTextDescription,s==="left"?"left":"right")}}),xc=(0,f.memo)(function(r){var e=r.editing,t=r.onChange,n=r.onEditingChange,a=r.text,o=r.message,i=r.placement,s=r.messageExtra,c=r.renderMessage,g=r.type,u=r.primary,p=r.onDoubleClick,v=r.fontSize,b=r.markdownProps,y=r.markdownClassname,C=yc({editing:e,placement:i,primary:u,type:g}),S=C.cx,j=C.styles,x=(0,vn.F)(),O=x.mobile,w=(0,l.jsx)(wo,{classNames:{input:j.editingInput,markdown:y},editButtonSize:"small",editing:e,fontSize:v,fullFeaturedCodeBlock:!0,markdownProps:b,onChange:t,onEditingChange:n,openModal:O?e:void 0,text:a,value:o?String(o).trim():""}),E=c?c(w):w;return(0,l.jsxs)(de.D,{className:S(j.message,e&&j.editingContainer),onDoubleClick:p,children:[E,s&&!e?(0,l.jsx)("div",{className:j.messageExtra,children:s}):null]})}),Sc=xc,Cc=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname"],Qo=32,jc=(0,f.memo)(function(r){var e=r.avatarAddon,t=r.onAvatarClick,n=r.avatarProps,a=r.actions,o=r.className,i=r.primary,s=r.loading,c=r.message,g=r.placement,u=g===void 0?"left":g,p=r.type,v=p===void 0?"block":p,b=r.avatar,y=r.error,C=r.showTitle,S=r.time,j=r.editing,x=r.onChange,O=r.onEditingChange,w=r.messageExtra,E=r.renderMessage,L=r.text,T=r.errorMessage,F=r.onDoubleClick,$=r.fontSize,N=r.markdownProps,k=r.markdownClassname,A=R()(r,Cc),D=(0,vn.F)(),P=D.mobile,M=(0,vc.y)({editing:j,placement:u,primary:i,showTitle:C,time:S,title:b.title,type:v}),I=M.cx,Z=M.styles;return(0,l.jsxs)(de.D,m()(m()({className:I(Z.container,o),direction:u==="left"?"horizontal":"horizontal-reverse",gap:P?6:12},A),{},{children:[(0,l.jsx)(pc.Z,m()(m()({},n),{},{addon:e,avatar:b,loading:s,onClick:t,placement:u,size:P?Qo:void 0})),(0,l.jsxs)(de.D,{align:u==="left"?"flex-start":"flex-end",className:Z.messageContainer,children:[(0,l.jsx)(mc.Z,{avatar:b,placement:u,showTitle:C,time:S}),(0,l.jsxs)(de.D,{align:u==="left"?"flex-start":"flex-end",className:Z.messageContent,direction:v==="block"?u==="left"?"horizontal":"horizontal-reverse":"vertical",gap:8,children:[y?(0,l.jsx)(fc.Z,{error:y,message:T,placement:u}):(0,l.jsx)(Sc,{editing:j,fontSize:$,markdownClassname:k,markdownProps:N,message:c,messageExtra:w,onChange:x,onDoubleClick:F,onEditingChange:O,placement:u,primary:i,renderMessage:E,text:L,type:v}),(0,l.jsx)(uc.Z,{actions:a,editing:j,placement:u,type:v})]})]}),P&&v==="block"&&(0,l.jsx)(gc.Z,{borderSpacing:Qo})]}))}),kc=d(53913),Uo=d(7947),wc=d(62738),Ac=d(8933),Go=d(66321),Mc=d(97601),Lc=d(68537),Le=d(38794),Nc=d(76940),Oc=d(49505),ne={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}},Ec=d(98644),Tc=function(e){var t=e.type,n=e.scale,a=e.appearance,o=(0,Ec.Z)(t),i=a==="dark";return W()(W()(W()(W()(W()(W()(W()(W()(W()(W()({},"color".concat(o,"Bg"),n[a][1]),"color".concat(o,"BgHover"),n[a][2]),"color".concat(o,"Border"),n[a][4]),"color".concat(o,"BorderHover"),n[a][i?5:3]),"color".concat(o,"Hover"),n[a][i?10:8]),"color".concat(o),n[a][9]),"color".concat(o,"Active"),n[a][i?7:10]),"color".concat(o,"TextHover"),n[a][i?10:8]),"color".concat(o,"Text"),n[a][9]),"color".concat(o,"TextActive"),n[a][i?7:10])},Zc=function(e){var t=e.scale,n=e.appearance;return{colorBgContainer:n==="dark"?t[n][1]:t[n][0],colorBgElevated:n==="dark"?t[n][2]:t[n][0],colorBgLayout:n==="dark"?t[n][0]:t[n][1],colorBgMask:t.lightA[8],colorBgSpotlight:t[n][5],colorBorder:t[n][4],colorBorderSecondary:t[n][3],colorFill:t["".concat(n,"A")][3],colorFillQuaternary:t["".concat(n,"A")][0],colorFillSecondary:t["".concat(n,"A")][2],colorFillTertiary:t["".concat(n,"A")][1],colorText:t[n][12],colorTextQuaternary:t[n][6],colorTextSecondary:t[n][10],colorTextTertiary:t[n][8]}},Pc={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},Wo=function(e){var t=e?"dark":"light",n=ne.gray[t][11],a=ne.gray[t][7],o=e?ne.red[t][9]:ne.volcano[t][9],i=e?ne.gold[t][9]:ne.orange[t][9],s=e?ne.lime[t][9]:ne.green[t][9],c=e?ne.blue[t][9]:ne.geekblue[t][9];return{colors:{"editor.foreground":n},name:t,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:s},enumMember:{foreground:c},macro:{foreground:s},"parameter.label:dart":{foreground:a},"property:dart":{foreground:s},tomlArrayKey:{foreground:o},"variable.constant":{foreground:s},"variable.defaultLibrary":{foreground:o},"variable:dart":{foreground:s}},tokenColors:[{scope:"meta.embedded",settings:{foreground:a}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:n}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:c}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:s}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:n}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:a}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:o}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:o}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:a}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:i}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:o}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:n}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:c}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:n}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:c}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:s}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:a}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:a}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:o}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:i}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:s}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:n}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:n}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:a}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:a}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:i}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:o}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:s}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:o}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:o}},{name:"java source",scope:"source.java",settings:{foreground:n}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:a}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:i}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:o}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:c}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:n}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:c}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:c}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:c}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:s}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:c}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:s}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:n}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:s}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:c}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:o}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:o}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:n}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:s}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:c}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:n}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:s}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:i}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:a}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:c}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:c}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:c}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:n}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:c}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:c}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:a}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:c}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:c}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:c}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:s}},{name:"python type",scope:"support.type.python",settings:{foreground:c}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:c}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:s}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:a}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:i}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:s}},{name:"Operators",scope:"keyword.operator",settings:{foreground:a}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:c}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:c}},{name:"Keywords",scope:"keyword",settings:{foreground:c}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:o}},{name:"Variables",scope:"variable",settings:{foreground:n}},{name:"Variables",scope:"variable.c",settings:{foreground:a}},{name:"Language variables",scope:"variable.language",settings:{foreground:o}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:a}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:o}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:c}},{name:"Packages",scope:"token.package",settings:{foreground:a}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:i}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:o}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:o}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:o}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:o}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:n}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:o}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:c}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:s}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:i}},{name:"Storage",scope:"storage",settings:{foreground:c}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:c}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:c}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:o}},{name:"Support",scope:"support.function",settings:{foreground:c}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:n}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:a}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:s}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:a}},{name:"Strings",scope:"string",settings:{foreground:s}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:c}},{name:"Integers",scope:"constant.numeric",settings:{foreground:s}},{name:"Constants",scope:"constant",settings:{foreground:s}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:s}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:n}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:s}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:i}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:s}},{name:"Selector",scope:"meta.selector",settings:{foreground:c}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:o}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:i}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:n}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:s}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:o}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:c}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:n}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:n}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:i}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:c}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:c}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:a}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:n}},{name:"Broken",scope:"invalid.broken",settings:{foreground:n}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:n}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:s}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:s}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:n}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:c}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:c}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:o}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:c}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:c}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:a}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:a}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:o}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:o}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:i}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:a}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:s}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:s}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:i}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:c}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:c}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:c}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:c}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:i}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:c}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:a}},{name:"brace function",scope:"function.brace",settings:{foreground:a}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:a}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:c}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:c}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:c}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:s}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:s}},{name:"sass selector",scope:"selector.sass",settings:{foreground:n}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:o}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:a}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:o}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:n}},{scope:"token.info-token",settings:{foreground:i}},{scope:"token.warn-token",settings:{foreground:s}},{scope:"token.error-token",settings:{foreground:o}},{scope:"token.debug-token",settings:{foreground:c}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:c}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:a}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:c}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:i}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:o}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:n}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:n}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:s}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:s}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:s}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:s}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:c}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:o}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:c}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:o}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:c}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:s}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:c}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:n}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:c}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:o}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:n}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:c}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:n}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:s}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:n}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:o}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:o}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:i}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:n}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:s}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:o}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:c}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:n}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:o}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:o}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:c}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:n}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:c}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:c}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:a}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:s}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:a}},{name:"link",scope:["constant.character.xi"],settings:{foreground:i}},{name:"accent",scope:["accent.xi"],settings:{foreground:i}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:s}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:n}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:a}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:o}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:n}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:a}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:a}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:a}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:c}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:o}},{scope:["entity.name.variable.field.cs"],settings:{foreground:n}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:n}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:s}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:o}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:a}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:o}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:n}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:o}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:n}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:a}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:c}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:s}},{scope:["constant.character.escape"],settings:{foreground:c}},{scope:["string.regexp"],settings:{foreground:n}},{scope:["log.info"],settings:{foreground:s}},{scope:["log.warning"],settings:{foreground:o}},{scope:["log.error"],settings:{foreground:n}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:t}},hn=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"],Jo="txt",Ue=[Jo],Ko,Ic=function(){var r=Ie()(ue()().mark(function e(t){var n,a;return ue()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=Ko,a=t.toLowerCase(),!(n&&Ue.includes(a))){i.next=4;break}return i.abrupt("return",n);case 4:return hn.includes(a)&&!Ue.includes(a)&&Ue.push(a),i.next=7,(0,Nc.e$)({langs:Ue,themes:[Wo(!0),Wo(!1)]});case 7:return n=i.sent,Ko=n,i.abrupt("return",n);case 10:case"end":return i.stop()}},e)}));return function(t){return r.apply(this,arguments)}}(),Rc=function(e,t,n){return(0,Oc.ZP)([t==null?void 0:t.toLowerCase(),n?"dark":"light",e].join("-"),Ie()(ue()().mark(function a(){var o,i,s;return ue()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,o=t.toLowerCase(),g.next=4,Ic(o);case 4:return i=g.sent,s=i==null?void 0:i.codeToHtml(e,{lang:hn.includes(o)?o:Jo,theme:n?"dark":"light",transformers:[(0,Le.hu)(),(0,Le.d0)(),(0,Le.dY)(),(0,Le.Eu)(),(0,Le.p4)()]}),g.abrupt("return",s);case 9:return g.prev=9,g.t0=g.catch(0),g.abrupt("return","");case 12:case"end":return g.stop()}},a,null,[[0,9]])})),{revalidateOnFocus:!1})},Xo,Yo,qo,Dc=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.cx,a=r.prefixCls,o=r.stylish,i="".concat(a,"-highlighter");return{loading:n(o.blur,e(Xo||(Xo=h()([`
        position: absolute;
        z-index: 10;
        inset-block-start: 0;
        inset-inline-end: 0;

        height: 34px;
        padding-block: 0;
        padding-inline: 8px;

        font-family: `,`;
        color: `,`;

        border-radius: `,`;
      `])),t.fontFamilyCode,t.colorTextTertiary,t.borderRadius)),shiki:n("".concat(i,"-shiki"),e(Yo||(Yo=h()([`
        overflow: auto;
        margin: 0;
        padding: 0;

        .shiki {
          overflow: unset;
          margin: 0;
          padding: 0;
          background: none !important;

          code {
            display: block;

            .line {
              display: inline-block;

              width: calc(100% + 32px);
              margin-block: 0;
              margin-inline: -16px;
              padding-block: 0;
              padding-inline: 16px;
            }
          }

          &.has-focused {
            .line:not(.focused) {
              opacity: 0.5;
            }
          }

          .highlighted {
            background: `,`;

            &.warning {
              background: `,`;
            }

            &.error {
              background: `,`;
            }
          }

          .highlighted-word {
            padding-block: 0.1em;
            padding-inline: 0.2em;

            background: `,`;
            border: 1px solid `,`;
            border-radius: `,`px;
          }

          .diff {
            &.remove {
              background: `,`;

              &::before {
                content: '-';

                position: absolute;
                inset-inline-start: 4px;

                display: inline-block;

                color: `,`;
              }
            }

            &.add {
              background: `,`;

              &::before {
                content: '+';

                position: absolute;
                inset-inline-start: 4px;

                display: inline-block;

                color: `,`;
              }
            }
          }
        }
      `])),t.colorFillTertiary,t.colorWarningBg,t.colorErrorBg,t.colorFillTertiary,t.colorBorderSecondary,t.borderRadius,t.colorErrorBg,t.colorErrorText,t.colorSuccessBg,t.colorSuccessText)),unshiki:e(qo||(qo=h()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),t.colorTextDescription)}}),_o=(0,f.memo)(function(r){var e=r.children,t=r.language,n=r.className,a=r.style,o=Dc(),i=o.styles,s=o.cx,c=(0,ln.r)(),g=c.isDarkMode,u=Rc(e.trim(),t,g),p=u.data,v=u.isLoading;return(0,l.jsxs)(l.Fragment,{children:[v||!p?(0,l.jsx)("div",{className:s(i.unshiki,n),style:a,children:(0,l.jsx)("pre",{children:(0,l.jsx)("div",{children:e.trim()})})}):(0,l.jsx)("div",{className:s(i.shiki,n),dangerouslySetInnerHTML:{__html:p},style:a}),v&&(0,l.jsx)(de.D,{align:"center",className:i.loading,gap:8,horizontal:!0,justify:"center",children:(0,l.jsx)(ee.Z,{icon:Fn.Z,spin:!0})})]})}),ea,na,ta,ra,oa,aa,ia,sa,la=(0,z.kc)(function(r,e){var t=r.token,n=r.css,a=r.cx,o=r.prefixCls,i=r.stylish,s="".concat(o,"-highlighter"),c="".concat(s,"-hover-btn"),g="".concat(s,"-hover-lang"),u=n(ea||(ea=h()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),e==="block"?t.colorFillTertiary:"transparent",e==="block"?"transparent":t.colorBorder,e==="block"?t.colorFillTertiary:t.colorFillQuaternary);return{button:a(c,n(na||(na=h()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),e==="pure"?0:"12px",e==="pure"?0:"12px")),container:a(s,e!=="pure"&&u,n(ta||(ta=h()([`
          position: relative;
          overflow: hidden;
          border-radius: `,`px;
          transition: background-color 100ms `,`;

          &:hover {
            .`,` {
              opacity: 1;
            }

            .`,` {
              opacity: 1;
            }
          }

          .prism-code {
            background: none !important;
          }

          pre {
            overflow: auto hidden;

            margin: 0 !important;
            padding: `,` !important;

            white-space: break-spaces;

            background: none !important;
          }

          code {
            background: transparent !important;
          }
        `])),t.borderRadius,t.motionEaseOut,c,g,e==="pure"?0:"16px")),header:n(ra||(ra=h()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),t.colorFillQuaternary),lang:a(g,i.blur,n(oa||(oa=h()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),t.fontFamilyCode,t.colorTextSecondary)),nowrap:n(aa||(aa=h()([`
        code {
          text-wrap: nowrap !important;
        }
      `]))),scroller:n(ia||(ia=h()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:n(sa||(sa=h()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),t.colorTextDescription,o,t.colorTextDescription)}}),Fc=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],zc=hn.map(function(r){return{label:r,value:r.toLowerCase()}}),ca=(0,f.memo)(function(r){var e=r.children,t=r.language,n=t===void 0?"markdown":t,a=r.className,o=r.style,i=r.allowChangeLanguage,s=i===void 0?!1:i,c=r.fileName,g=r.icon,u=r.contentStyle,p=R()(r,Fc),v=(0,f.useState)(!0),b=B()(v,2),y=b[0],C=b[1],S=(0,f.useState)(n||"markdown"),j=B()(S,2),x=j[0],O=j[1],w=la("block"),E=w.styles,L=w.cx,T=L(E.container,a);return(0,l.jsxs)("div",m()(m()({className:T,"data-code-type":"highlighter",style:o},p),{},{children:[(0,l.jsxs)(de.D,{align:"center",className:E.header,horizontal:!0,justify:"space-between",children:[(0,l.jsx)(Ac.Z,{icon:y?Mc.Z:Lc.Z,onClick:function(){return C(!y)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),s&&!c?(0,l.jsx)(Go.default,{className:E.select,onSelect:O,options:zc,size:"small",suffixIcon:!1,value:x.toLowerCase(),variant:"borderless"}):(0,l.jsxs)(de.D,{align:"center",className:E.select,gap:2,horizontal:!0,children:[g,(0,l.jsx)("span",{children:c||x})]}),(0,l.jsx)(Uo.Z,{content:e,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,l.jsx)(_o,{language:x==null?void 0:x.toLowerCase(),style:y?u:m()(m()({},u),{},{height:0,overflow:"hidden"}),children:e})]}))}),Bc=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap"],Hc=(0,f.memo)(function(r){var e=r.fullFeatured,t=r.copyButtonSize,n=t===void 0?"site":t,a=r.children,o=r.language,i=r.className,s=r.style,c=r.copyable,g=c===void 0?!0:c,u=r.showLanguage,p=u===void 0?!0:u,v=r.type,b=v===void 0?"block":v,y=r.spotlight,C=r.allowChangeLanguage,S=r.fileName,j=r.icon,x=r.contentStyle,O=r.wrap,w=R()(r,Bc),E=la(b),L=E.styles,T=E.cx,F=T(L.container,!O&&L.nowrap,i);return e?(0,l.jsx)(ca,m()(m()({allowChangeLanguage:C,className:i,contentStyle:x,fileName:S,icon:j,language:o,style:s},w),{},{children:a})):(0,l.jsxs)("div",m()(m()({className:F,"data-code-type":"highlighter",style:s},w),{},{children:[y&&(0,l.jsx)(kc.Z,{size:240}),g&&(0,l.jsx)(Uo.Z,{className:L.button,content:a,placement:"left",size:n}),p&&o&&(0,l.jsx)(wc.Z,{className:L.lang,children:o.toLowerCase()}),(0,l.jsx)("div",{className:L.scroller,children:(0,l.jsx)(_o,{language:o==null?void 0:o.toLowerCase(),style:x,children:a})})]}))}),$c=function(){try{var e,t;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((e=window)===null||e===void 0?void 0:e.SpeechRecognition)||((t=window)===null||t===void 0?void 0:t.webkitSpeechRecognition)}catch(n){}},Vc=function(){try{var e,t;return(globalThis==null?void 0:globalThis.speechSynthesis)||((e=window)===null||e===void 0?void 0:e.speechSynthesis)||((t=window)===null||t===void 0?void 0:t.webkitSpeechSynthesis)}catch(n){}},Qc=function(){try{var e,t;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((e=window)===null||e===void 0?void 0:e.SpeechSynthesisUtterance)||((t=window)===null||t===void 0?void 0:t.webkitSpeechSynthesisUtterance)}catch(n){}},lu=$c(),_=Vc(),da=Qc(),Uc=["voice","rate","pitch"],Gc=function(e,t){var n=t.voice,a=t.rate,o=t.pitch,i=R()(t,Uc),s=(0,f.useState)(_==null?void 0:_.getVoices()),c=B()(s,2),g=c[0],u=c[1],p=(0,f.useState)(e),v=B()(p,2),b=v[0],y=v[1],C=(0,f.useState)(!1),S=B()(C,2),j=S[0],x=S[1],O=(0,f.useMemo)(function(){if(da){var L=new da(b);return L.voice=g.find(function(T){return T.name===n}),L.onstart=function(){return x(!0)},L.onend=function(){return x(!1)},o&&(L.pitch=o*10),a&&(L.rate=a*10),L}},[b,g,a,o,n]);(0,f.useEffect)(function(){_&&(_.onvoiceschanged=function(){u(_==null?void 0:_.getVoices())},_.onstart=function(){return x(!0)},_.onend=function(){return x(!1)})},[]);var w=(0,f.useCallback)(function(){var L;i==null||(L=i.onStart)===null||L===void 0||L.call(i),_==null||_.speak(O)},[i,O]),E=(0,f.useCallback)(function(){var L,T;i==null||(L=i.onStop)===null||L===void 0||L.call(i),(T=speechSynthesis)===null||T===void 0||T.cancel(),x(!1)},[i]);return{isLoading:j,setText:y,start:w,stop:E}},cu=null,ua,pa,ga,fa,ma,va,ha,ba,Wc=(0,z.kc)(function(r,e){var t=r.css,n=(0,z.F4)(ua||(ua=h()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),a=(0,z.F4)(pa||(pa=h()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),o=(0,z.F4)(ga||(ga=h()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:t(fa||(fa=h()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),e.width||34,e.height||22,e.bgColor||"transparent"),line:t(ma||(ma=h()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),e.lineColor||"#000"),animate1:t(va||(va=h()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),n),animate2:t(ha||(ha=h()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),a),animate3:t(ba||(ba=h()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),o)}}),Jc=function(e){var t=e.height,n=e.width,a=e.lineColor,o=e.bgColor,i=Wc({height:t,width:n,lineColor:a,bgColor:o}),s=i.styles,c=i.cx;return(0,l.jsxs)("div",{className:s.box,children:[(0,l.jsx)("div",{className:c(s.line,s.animate1)}),(0,l.jsx)("div",{className:c(s.line,s.animate2)}),(0,l.jsx)("div",{className:c(s.line,s.animate3)}),(0,l.jsx)("div",{className:c(s.line,s.animate2)}),(0,l.jsx)("div",{className:c(s.line,s.animate1)}),(0,l.jsx)("div",{className:c(s.line,s.animate2)}),(0,l.jsx)("div",{className:c(s.line,s.animate1)})]})},Kc=d(77314),Xc=d(24934),Yc=d(72076),qc=d(52124),_c=d(34738),ed=d(14192),nd=d(50658),td=d(34817),rd=d(33443),od=d(22669),ad=d(86751),id=d(98872),sd=d(1196),ld=d(43040),cd=d(5024),dd=d(93424),ud=d(8827),pd=d(80649),gd=d(53350),fd=d(54887),md=d(25600),vd=d(46104),hd=d(95935),bd=d(70940),yd=d(14444),xd=d(43869),Sd=d(40901),Cd=d(3029),jd=d(8561),kd=d(72121),wd=d(45468),Ad=d(20449),Md=d(74878),Ld=d(7448),Nd=d(82028),Od=d(82121),Ed=d(25951),Td=d(96753),Zd=d(91272),Pd=d(99641),Id=d(63605),Rd=d(93793),Dd=d(49293),Fd=d(43043),zd=d(31273),Bd=d(23293),Hd=d(28519)}}]);
