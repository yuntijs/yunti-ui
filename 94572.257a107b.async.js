"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[94572],{94572:function(Ud,Sn,d){d.r(Sn),d.d(Sn,{Affix:function(){return Kc.Z},Alert:function(){return Br},Anchor:function(){return Xc.Z},AntdMentions:function(){return Yc.Z},App:function(){return Wr},AudioPlayer:function(){return zd.Z},AutoComplete:function(){return qc.Z},Avatar:function(){return He.C},BackTop:function(){return _c.Z},Badge:function(){return Vt.Z},BaseMonacoEditor:function(){return un},Breadcrumb:function(){return Pt.Z},Button:function(){return ce.ZP},Calendar:function(){return ed.Z},Card:function(){return Ml.Z},Carousel:function(){return nd.Z},Cascader:function(){return td.Z},ChatInputActionBar:function(){return sc.Z},ChatInputArea:function(){return ic},ChatInputAreaInner:function(){return yo.Z},ChatItem:function(){return jc},ChatSendButton:function(){return lc.Z},Checkbox:function(){return rd.Z},Col:function(){return gn.Z},Collapse:function(){return fn.Z},CollapseGroup:function(){return Ye},CollapseTable:function(){return bo},ColorPicker:function(){return od.Z},ConfigContext:function(){return Le},ConfigProvider:function(){return Na},DatePicker:function(){return ad.default},Descriptions:function(){return pn},Divider:function(){return $t},DragPanel:function(){return Ia},Drawer:function(){return Ol},Dropdown:function(){return no},EditableMessage:function(){return wo},Empty:function(){return _n.Z},Flex:function(){return V.Z},FloatButton:function(){return id.Z},Form:function(){return io},FormCollapseList:function(){return ao},FormHelper:function(){return lo},FullFeaturedHighlighter:function(){return ca},Grid:function(){return sd.ZP},HeaderButtonGroup:function(){return Wt},Highlighter:function(){return Hc},Image:function(){return ld.Z},Input:function(){return cd.Z},InputNumber:function(){return Dr.Z},Layout:function(){return dd.Z},List:function(){return ud.Z},LogViewer:function(){return Ga},Logo:function(){return Ba},Markdown:function(){return jo.Z},Mentions:function(){return Vi},Menu:function(){return pd.Z},MobileChatInputArea:function(){return cc.Z},MobileChatSendButton:function(){return dc.Z},Modal:function(){return se},MonacoController:function(){return xt},MonacoDiffEditor:function(){return is},MonacoEditor:function(){return as},NotificationGlobalStyle:function(){return Vr},Page:function(){return je},Pagination:function(){return fd.Z},Popconfirm:function(){return md.Z},Popover:function(){return vd.Z},ProCard:function(){return $e},Progress:function(){return hd.Z},QRCode:function(){return bd.Z},Radio:function(){return vo},Rate:function(){return yd.Z},Result:function(){return Rt.ZP},Row:function(){return Ir.Z},Segmented:function(){return xd.Z},Select:function(){return Go.default},SelectCard:function(){return pl},Skeleton:function(){return me.Z},Slider:function(){return Rr.Z},SliderInput:function(){return gl},Space:function(){return ze.Z},SpeechSynthesisTTS:function(){return Fd.H},Spin:function(){return Sd.Z},Statistic:function(){return Cd.Z},Status:function(){return Gt},Steps:function(){return jd.Z},Switch:function(){return kd.Z},SyntaxHighlighter:function(){return Dd.Z},Table:function(){return le},Tabs:function(){return wd.Z},Tag:function(){return Ad.Z},TimePicker:function(){return Ld.Z},Timeline:function(){return Nd.Z},Tooltip:function(){return fe.Z},Tour:function(){return Od.Z},Transfer:function(){return Ed.Z},Tree:function(){return Td.Z},TreeSelect:function(){return Zd.Z},Typography:function(){return Pe},Upload:function(){return Pd.Z},Watermark:function(){return Rd.Z},WaveformIcon:function(){return Jc},colorScales:function(){return te},colors:function(){return te},generateColorNeutralPalette:function(){return Zc},generateColorPalette:function(){return Tc},message:function(){return gd.ZP},neutralColorScales:function(){return Pc},notification:function(){return wl},theme:function(){return Md.Z},useAudioPlayer:function(){return Bd.x},useAutoFocus:function(){return so},useCdnFn:function(){return An},useLink:function(){return Mn},useResponsive:function(){return vn.F},useSpeechRecognition:function(){return Hd.x},useSpeechSynthes:function(){return Gc},useTheme:function(){return z.Fg},useThemeMode:function(){return ln.r},version:function(){return Id.Z},withFormHelper:function(){return Vl}});var ya=d(26068),m=d.n(ya),xa=d(67825),D=d.n(xa),Sa=d(89386),f=d(75271),Ca=d(53649),h=d.n(Ca),z=d(69049),Cn,ja=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(Cn||(Cn=h()([`
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
    `])),t.margin,n,t.paddingSM,t.paddingSM,t.paddingSM,t.fontSize,t.padding,t.padding,t.paddingSM,t.paddingSM,t.paddingXS,t.colorBgContainer)}}),l=d(52676),ka=["className","variant"],wa=Sa.Z.Group,Ye=function(e){var t=e.className,n=e.variant,o=D()(e,ka),a=ja(),i=a.styles,s=a.cx;return(0,l.jsx)(wa,m()({className:s(i.root,t),collapsible:n==="pure"?"icon":"header",variant:n},o))},jn=d(56264),Aa="https://unpkg.com",Ma="https://registry.npmmirror.com",kn=function(e){var t=e.pkg,n=e.version,o=n===void 0?"latest":n,a=e.path,i=e.proxy;switch(i){case"unpkg":return(0,jn.Z)(Aa,"".concat(t,"@").concat(o),a);default:return(0,jn.Z)(Ma,t,o,"files",a)}},Le=(0,f.createContext)(null),Na=(0,f.memo)(function(r){var e=r.children,t=r.config;return(0,l.jsx)(Le.Provider,{value:t,children:e})}),wn=function(e){var t=e.pkg,n=e.version,o=e.path;return kn({path:o,pkg:t,proxy:"aliyun",version:n})},An=function(){var e=(0,f.useContext)(Le);return e?(e==null?void 0:e.proxy)!=="custom"?function(t){var n=t.pkg,o=t.version,a=t.path;return kn({path:a,pkg:n,proxy:e.proxy,version:o})}:(e==null?void 0:e.customCdnFn)||wn:wn},Mn=function(){var e=(0,f.useContext)(Le);return e==null?void 0:e.Link},La=d(48305),$=d.n(La),Oa=d(97157),Nn=d(85660),V=d(71414),ce=d(44295),Ea=d(84569),Ta=d.n(Ea),Ln,On,En,Tn,Zn,Za=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(Ln||(Ln=h()([`
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
    `])))}}),Pa=["title","classNames","defaultPosition","onPositionChange"],Ia=(0,f.memo)(function(r){var e=r.title,t=r.classNames,n=t===void 0?{}:t,o=r.defaultPosition,a=r.onPositionChange,i=D()(r,Pa),s=Za(),c=s.styles,g=s.cx,p=(0,f.useState)({left:0,top:0,bottom:0,right:0}),u=$()(p,2),v=u[0],y=u[1],b=(0,f.useRef)(null),S=function(C,j){var M,A=window.document.documentElement,L=A.clientWidth,O=A.clientHeight,T=(M=b.current)===null||M===void 0?void 0:M.getBoundingClientRect();T&&y({left:-T.left+j.x,right:L-(T.right-j.x),top:-T.top+j.y,bottom:O-(T.bottom-j.y)})};return(0,l.jsx)(Nn.Z,m()(m()({},i),{},{classNames:m()(m()({},n),{},{wrapper:g(c.wrapper,n.wrapper),content:g(c.content,n.content)}),destroyOnClose:!0,drawerRender:function(C){return(0,l.jsx)(Ta(),{bounds:v,defaultPosition:o,handle:".".concat(c.dragHandle),nodeRef:b,onStart:function(M,A){return S(M,A)},onStop:function(M,A){a==null||a({x:A.x,y:A.y})},children:(0,l.jsx)("div",{className:c.dragWrapper,ref:b,children:C})})},mask:!1,rootClassName:c.root,title:(0,l.jsxs)(V.Z,{align:"center",className:c.dragHandle,children:[(0,l.jsx)(V.Z,{flex:2,children:e}),(0,l.jsx)(V.Z,{children:(0,l.jsx)(ce.ZP,{className:c.dragHandle,icon:(0,l.jsx)(Oa.Z,{}),type:"text"})})]})}))}),de=d(90142),Ra=d(36075),qe=d.n(Ra),Da=(0,f.memo)(function(r){var e=Object.assign({},(qe()(r),r));return(0,l.jsx)("svg",m()(m()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},e),{},{children:(0,l.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),Pn=(0,f.memo)(function(r){var e=Object.assign({},(qe()(r),r));return(0,l.jsxs)("svg",m()(m()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},e),{},{children:[(0,l.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,l.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,l.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),In=(0,f.memo)(function(r){var e=Object.assign({},(qe()(r),r));return(0,l.jsxs)("svg",m()(m()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,l.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,l.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,l.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,l.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,l.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,l.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,l.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),Rn,Fa=(0,z.kc)(function(r){var e=r.css;return{extraTitle:e(Rn||(Rn=h()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),za=["type","size","style","extra","className"],Ba=(0,f.memo)(function(r){var e=r.type,t=e===void 0?"img":e,n=r.size,o=n===void 0?32:n,a=r.style,i=r.extra,s=r.className,c=D()(r,za),g=(0,z.Fg)(),p=Fa(),u=p.styles,v;switch(t){case"text":{v=(0,l.jsx)(In,m()({className:s,height:o,style:a,width:o*2.9375},c));break}case"combine":{v=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Pn,m()({height:o,style:a,width:o},c)),(0,l.jsx)(In,{style:{height:o,marginLeft:Math.round(o/4),width:"auto"}})]});break}case"img":default:{v=(0,l.jsx)(Pn,m()({height:o,style:a,width:o},c));break}}if(!i)return v;var y=Math.round(o/3*1.9);return(0,l.jsxs)(de.D,m()(m()({align:"center",className:s,horizontal:!0,style:a},c),{},{children:[v,(0,l.jsx)(Da,{style:{color:g.colorFill,height:y,width:y}}),(0,l.jsx)("div",{className:u.extraTitle,style:{fontSize:y},children:i})]}))}),ne=d(89257),Dn=d(50999),Ha=d(41117),$a=d(45798),Va=d(3548),Fn=d(5312),zn,Bn,Hn,$n,Qa=(0,z.kc)(function(r){var e=r.css,t=r.token,n="#222222";return{root:e(zn||(zn=h()([`
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
      `])),t.marginSM,t.marginSM)}},{hashPriority:"low"}),Ua=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],Ga=function(e){var t=e.className,n=e.id,o=e.style,a=e.height,i=e.onScroll,s=e.url,c=e.websocket,g=e.refreshInterval,p=e.onLoad,u=e.onError,v=D()(e,Ua),y=Qa(),b=y.cx,S=y.styles,x=(0,f.useState)(0),C=$()(x,2),j=C[0],M=C[1],A=(0,f.useState)(!1),L=$()(A,2),O=L[0],T=L[1],F=(0,f.useState)(!1),B=$()(F,2),E=B[0],w=B[1],k=(0,f.useRef)(),R=(0,f.useRef)();(0,f.useEffect)(function(){return function(){clearTimeout(k.current),clearTimeout(R.current)}},[]),(0,f.useEffect)(function(){var P;return s&&!c&&g&&(P=setInterval(function(){M(function(H){return H+1})},g)),function(){clearInterval(P)}},[g,s,c]);var Z=(0,f.useMemo)(function(){return s&&(k.current=setTimeout(function(){T(!0),k.current=void 0},50),"".concat(s,"#").concat(j))},[s,j]),N=(0,f.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(k.current),T(!1),w(!0),R.current=setTimeout(function(){return w(!1)},100),p==null||p()},[p]),I=(0,f.useCallback)(function(P){T(!1),clearTimeout(k.current),u==null||u(P)},[u]);return(0,l.jsxs)("div",{className:b(S.root,t),id:n,style:m()({height:a},o),children:[(0,l.jsx)(Dn.Uu,{render:function(H){var q=H.follow,Y=H.onScroll;return(0,l.jsx)(Dn.A9,m()(m()({url:Z,websocket:c},v),{},{follow:E||q,height:a,iconFilterLines:(0,l.jsx)(ne.Z,{className:S.searchBarIcon,icon:Ha.Z}),iconFindNext:(0,l.jsx)(ne.Z,{className:S.searchBarIcon,icon:$a.Z}),iconFindPrevious:(0,l.jsx)(ne.Z,{className:S.searchBarIcon,icon:Va.Z}),onError:I,onLoad:N,onScroll:function(re){Y(re),i==null||i(re)}}))},startFollowing:!0}),O&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:S.loaderText,children:"loading ..."}),(0,l.jsx)(ne.Z,{className:S.loaderIcon,icon:Fn.Z,spin:!0})]})]})},Wa=d(82092),W=d.n(Wa),Ja=d(504),Ka=d(22993),Xa=d(54397),Ya=d(69789),qa=d(9668),_a=d(67568),G=d(65694),_e=typeof window!="undefined",ei=d(25298),Oe=d.n(ei),ni=d(17069),Ee=d.n(ni),ti=d(9504),ri=d.n(ti),oi=d(38836),ai=d.n(oi),ii=d(21742),en=d.n(ii),si=d(83136),nn=d.n(si),Te=function(r){en()(t,r);var e=nn()(t);function t(){return Oe()(this,t),e.apply(this,arguments)}return Ee()(t,[{key:"createDOM",value:function(o){var a=ri()(ai()(t.prototype),"createDOM",this).call(this,o);return a.classList.add("align-middle"),a}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(o){return new t(o.__text,o.__key)}},{key:"importJSON",value:function(o){var a=(0,G.MX)(o.text);return a.setFormat(o.format),a.setDetail(o.detail),a.setMode(o.mode),a.setStyle(o.style),a}}]),t}(G.R2);function Gd(r){return new Te(r)}var ge=d(97780),Ze=d(95138),li=d(62657),oe=d.n(li),fe=d(13399),ci=d(69024),Vn=(0,f.createContext)(null),di=(0,f.memo)(function(r){var e=r.children,t=r.value;return(0,l.jsx)(Vn.Provider,{value:t,children:e})}),ui=function(){var e=(0,f.useContext)(Vn);return e==null?void 0:e.optionsMap},pi=d(25272),gi=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,fi="\\(",mi=function(e){return"(?:"+e.join("|")+")"},vi=function(e,t){var n=e.length===0?"":"(?!"+e.join("|")+")";return n+"[^\\s"+t+"]"},hi=function(e){return"(?:\\.[ |$]|\\s|["+e+"]|)"},bi=75,yi=function(e,t){var n=(0,f.useRef)(null),o=(0,ge.g)(),a=$()(o,1),i=a[0],s=(0,pi.y)(e),c=$()(s,3),g=c[0],p=c[1],u=c[2],v=(0,f.useCallback)(function(b){var S=(0,G.dL)(),x=S==null?void 0:S.getNodes();if(!g&&(x==null?void 0:x.length)===1&&i.dispatchCommand(t,void 0),g&&(0,G.iO)(S)){b.preventDefault();var C=(0,G.gI)(e);if((0,G.k$)(C))return t&&i.dispatchCommand(t,void 0),C.remove(),!0}return!1},[g,e,t,i]),y=(0,f.useCallback)(function(b){b.stopPropagation(),u(),p(!0)},[p,u]);return(0,f.useEffect)(function(){var b=n.current;return b&&b.addEventListener("click",y),function(){b&&b.removeEventListener("click",y)}},[y]),(0,f.useEffect)(function(){return(0,Ze.qV)(i.registerCommand(G.MK,v,G.KB),i.registerCommand(G.aR,v,G.KB))},[i,u,v]),[n,g]},Wd=function(){var e=useRef(null),t=useState(!1),n=_slicedToArray(t,2),o=n[0],a=n[1],i=useCallback(function(s){s.stopPropagation(),a(function(c){return!c})},[]);return useEffect(function(){var s=e.current;return s&&s.addEventListener("click",i),function(){s&&s.removeEventListener("click",i)}},[i]),[e,o,a]};function xi(r,e,t,n){return new RegExp((e?"(^|\\s|".concat(e,")("):"(^|\\s)(")+mi(r)+"((?:"+vi(r,t)+(n?hi(t):"")+"){0,"+bi+"}))$")}function Si(r,e,t,n,o){var a=xi(e,t,n,o).exec(r);if(a!==null){var i=a[1],s=a[2],c=a[3];if(s.length>0)return{leadOffset:a.index+i.length,matchingString:c,replaceableString:s}}return null}var Ci=function(e,t){var n=t.punctuation,o=t.preTriggerChars,a=t.allowSpaces,i=(0,f.useState)(null),s=$()(i,2),c=s[0],g=s[1],p=(0,f.useCallback)(function(u){var v=Si(u,e,o,n,a);if(v){var y=v.replaceableString,b=v.matchingString,S=y.lastIndexOf(b),x=S===-1?y:y.slice(0,Math.max(0,S))+y.slice(Math.max(0,S+b.length));if(g(x||null),v.replaceableString)return v}else g(null);return null},[o,a,n,e]);return{trigger:c,checkForMentionMatch:p}},Qn,Un,Gn,ji=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=r.prefixCls,a=e.isSelected,i=e.isError,s=function(){return i?a?{background:n.colorErrorBgActive,border:n.colorErrorBorderHover,color:n.colorErrorTextActive}:{background:n.colorErrorBg,border:n.colorErrorBorder,color:n.colorErrorText}:a?{background:n.colorInfoBgHover,border:n.colorInfoBorder,color:n.colorInfoText}:{background:n.colorFillTertiary,border:"transparent",color:n.colorInfoText}},c=s(),g=c.background,p=c.border,u=c.color;return{root:t(Qn||(Qn=h()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),n.fontFamilyCode,u,g,p,n.borderRadius),text:t(Un||(Un=h()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.colorTextSecondary),error:t(Gn||(Gn=h()([`
        color: `,`;
      `])),n.colorErrorText)}}),Wn=(0,G.fA)("INSERT_MENTION_COMMAND"),Jn=(0,G.fA)("DELETE_MENTION_COMMAND"),Kn=(0,G.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Xn=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,ki=(0,f.memo)(function(r){var e=r.nodeKey,t=r.variable,n=ui(),o=(0,ge.g)(),a=$()(o,1),i=a[0],s=yi(e,Jn),c=$()(s,2),g=c[0],p=c[1],u=n==null?void 0:n[t],v=ji({isSelected:p,isError:!u||!!u.error}),y=v.styles;(0,f.useEffect)(function(){if(!i.hasNodes([xe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[i]);var b=(0,l.jsx)(V.Z,{className:y.root,ref:g,children:(0,l.jsxs)(V.Z,{align:"center",gap:2,children:[(!u||u.error)&&(0,l.jsx)(ne.Z,{className:y.error,icon:ci.Z}),(u==null?void 0:u.icon)&&(0,l.jsx)(V.Z,{children:u.icon}),(0,l.jsx)(V.Z,{className:y.text,gap:2,title:(u==null?void 0:u.label)||t,children:(0,l.jsx)("span",{children:(u==null?void 0:u.label)||t})})]})});return u!=null&&u.error?(0,l.jsx)(fe.Z,{title:u==null?void 0:u.error,children:b}):b}),xe=function(r){en()(t,r);var e=nn()(t);function t(n,o,a){var i;return Oe()(this,t),i=e.call(this,a),W()(oe()(i),"__variable",void 0),i.__variable=n,i}return Ee()(t,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var o=document.createElement("div");return o.style.display="inline-flex",o.style.alignItems="center",o.style.verticalAlign="middle",o}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,l.jsx)(ki,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var o=this.getLatest();return o.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(o){return new t(o.__variable)}},{key:"importJSON",value:function(o){var a=tn(o.variable);return a}}]),t}(G.Ij);function tn(r){return new xe(r)}function Jd(r){return r instanceof xe}var Kd=(0,G.fA)("INSERT_MENTION_COMMAND"),Xd=(0,G.fA)("DELETE_MENTION_COMMAND"),Yd=(0,G.fA)("CLEAR_HIDE_MENU_TIMEOUT"),qd=(0,G.fA)("UPDATE_MENTIONS_OPTIONS"),wi=function(e,t,n){if(e.isSimpleText())for(var o=e.getPreviousSibling(),a=e.getTextContent(),i=e,s;;){s=t(a);var c=s===null?"":a.slice(s.end);if(a=c,c===""){var g=i.getNextSibling();if((0,G.Gg)(g)){c=i.getTextContent()+g.getTextContent();var p=t(c);if(p===null){g.markDirty();return}else if(p.start!==0)return}}else{var u=t(c);if(u!==null&&u.start===0)return}if(s===null)return;if(!(s.start===0&&(0,G.Gg)(o)&&o.isTextEntity())){var v=void 0;if(s.start===0){var y=i.splitText(s.end),b=$()(y,2);v=b[0],i=b[1]}else{var S=i.splitText(s.start,s.end),x=$()(S,3);v=x[1],i=x[2]}var C=n(v);if(v.replace(C),i==null)return}}};function Ai(r){var e=r.split(`
`);return JSON.stringify({root:{children:e.map(function(t){return{children:[{detail:0,format:0,mode:"normal",style:"",text:t,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Mi=(0,f.memo)(function(r){var e=r.onInsert,t=(0,ge.g)(),n=$()(t,1),o=n[0];(0,f.useEffect)(function(){if(!o.hasNodes([xe]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[o]);var a=(0,f.useCallback)(function(c){e&&e();var g=c.getTextContent().slice(2,-2);return(0,G.U2)(tn(g))},[e]),i=(0,f.useCallback)(function(c){var g=Xn.exec(c);if(g===null)return null;var p=g.index,u=p+g[0].length;return{end:u,start:p}},[]),s=(0,f.useCallback)(function(c){return wi(c,i,a)},[a,i]);return(0,f.useEffect)(function(){return Xn.lastIndex=0,(0,Ze.qV)(o.registerNodeTransform(Te,s))},[]),null}),Yn=(0,f.memo)(function(r){var e=r.onInsert,t=r.onDelete,n=(0,ge.g)(),o=$()(n,1),a=o[0];return(0,f.useEffect)(function(){if(!a.hasNodes([xe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,Ze.qV)(a.registerCommand(Wn,function(i){a.dispatchCommand(Kn,null);var s=tn(i);return(0,G.od)([s]),e&&e(),!0},G.VN),a.registerCommand(Jn,function(){return t&&t(),!0},G.VN))},[a,e,t]),null});Yn.displayName="MentionNodePlugin";var qn=d(4337),Ni=d(30967),Li=function(r){en()(t,r);var e=nn()(t);function t(n,o,a){var i;return Oe()(this,t),i=e.call(this,n),W()(oe()(i),"label",void 0),W()(oe()(i),"value",void 0),W()(oe()(i),"icon",void 0),W()(oe()(i),"extraElement",void 0),W()(oe()(i),"keywords",void 0),W()(oe()(i),"keyboardShortcut",void 0),W()(oe()(i),"onSelect",void 0),W()(oe()(i),"disabled",void 0),W()(oe()(i),"data",void 0),i.value=n,i.label=o,i.keywords=a.keywords||[],i.icon=a.icon,i.extraElement=a.extraElement,i.keyboardShortcut=a.keyboardShortcut,i.onSelect=a.onSelect.bind(oe()(i)),i.disabled=a.disabled,i.data=a.data,i}return Ee()(t)}(qn.n),Oi=function(e,t){var n=(0,ge.g)(),o=$()(n,1),a=o[0],i=(0,f.useMemo)(function(){var s=e.map(function(g){return new Li(g.value,g.label,{icon:g.icon,onSelect:function(){a.dispatchCommand(Wn,g.value)},disabled:g.disabled,data:g.data,extraElement:g.extraElement,keywords:g.keywords,keyboardShortcut:g.keyboardShortcut})});if(!t)return s;var c=new RegExp(t,"i");return s.filter(function(g){var p;return c.test(g.label)||((p=g.keywords)===null||p===void 0?void 0:p.some(function(u){return c.test(u)}))})},[e,t,a]);return{options:i}},_n=d(53202),Se=d(71076),Ei=d(28026),Ae=d.n(Ei),Ti=d(81792),Zi=d.n(Ti),Pi=d(18342),Ii=["time","format","relativeTime","tooltip"];Ae().extend(Zi());var Pe=Se.Z,rn=function(e){return Ae()(e?new Date(e):new Date).fromNow()},Ri=function(e){var t,n=e.time,o=e.format,a=e.relativeTime,i=a===void 0?!0:a,s=e.tooltip,c=D()(e,Ii),g=(0,f.useState)(rn(n)),p=$()(g,2),u=p[0],v=p[1],y=(0,f.useCallback)(function(C){var j=Ae()(),M=Ae()(C),A=j.diff(M);if(A>0&&A<60*60*1e3)return setInterval(function(){v(rn(C))},60*1e3)},[]);(0,f.useEffect)(function(){var C;return i&&(C=y(new Date(n))),function(){C&&clearInterval(C)}},[i,y,n]),(0,f.useEffect)(function(){if(i){var C=rn(n);C!==u&&(v(C),y(new Date(n)))}},[n,i,u,y]);var b=Ae()(n).format(o||"YYYY-MM-DD HH:mm:ss"),S=i?u:b,x=(t=s==null?void 0:s.title)!==null&&t!==void 0?t:i?b:void 0;return x&&(0,Pi.Z)(c,"ellipsis.tooltip.title",void 0),(0,l.jsx)(fe.Z,m()(m()({},s||{}),{},{title:x,children:(0,l.jsx)(Pe.Text,m()(m()({},c),{},{children:S}))}))};Pe.Time=Ri;var on=Pe,et,nt,tt,rt,ot,at,it,an=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=r.prefixCls,a=e.isSelected,i=e.disabled,s=t(et||(et=h()([`
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
      `])),i?"not-allowed":"pointer",i?"none":"all",n.paddingSM/2,n.paddingSM,n.borderRadius,i?n.colorTextDisabled:n.colorText,n.fontSize,n.lineHeight,a&&s,s),menuItemIcon:t(at||(at=h()([`
        color: `,`;
      `])),n.colorInfoText),menuItemLabel:t(it||(it=h()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Di=on.Text,st=(0,f.memo)(function(r){var e=r.index,t=r.isSelected,n=r.onClick,o=r.onMouseEnter,a=r.option,i=r.queryString,s=an({isSelected:t,disabled:a.disabled}),c=s.styles,g=a.label,p=(0,f.useMemo)(function(){var b=g,S="",x="";if(i){var C=new RegExp(i,"i"),j=C.exec(a.label);j&&(b=g.slice(0,Math.max(0,j.index)),S=j[0],x=g.slice(Math.max(0,j.index+j[0].length)))}return{before:b,middle:S,after:x}},[a.label,i,g]),u=p.before,v=p.middle,y=p.after;return(0,l.jsxs)(V.Z,{align:"center",className:c.menuItem,gap:4,onClick:function(){return n(e,a)},onMouseEnter:function(){return o(e,a)},ref:a.setRefElement,tabIndex:-1,children:[(0,l.jsx)(V.Z,{className:c.menuItemIcon,children:a.icon}),(0,l.jsxs)("div",{className:c.menuItemLabel,title:a.label,children:[u,(0,l.jsx)(Di,{mark:!0,children:v}),y]}),(0,l.jsx)(V.Z,{children:a.extraElement})]},a.key)});st.displayName="MentionMenuItem";var Fi=(0,f.memo)(function(r){var e=r.selectedIndex,t=r.options,n=r.onClick,o=r.onMouseEnter,a=r.queryString,i=an({}),s=i.styles;return(0,l.jsxs)(l.Fragment,{children:[t.length===0&&(0,l.jsx)(_n.Z,{className:s.menuEmpty}),t.map(function(c,g){return(0,l.jsx)(st,{index:g,isSelected:e===g,onClick:n,onMouseEnter:o,option:c,queryString:a},c.key)})]})}),zi=(0,f.memo)(function(r){var e=r.triggers,t=r.options,n=t===void 0?[]:t,o=r.allowSpaces,a=o===void 0?!0:o,i=r.punctuation,s=i===void 0?gi:i,c=r.preTriggerChars,g=c===void 0?fi:c,p=r.onSelect,u=an({}),v=u.styles,y=(0,ge.g)(),b=$()(y,1),S=b[0],x=Ci(e,{punctuation:s,preTriggerChars:g,allowSpaces:a}),C=x.trigger,j=x.checkForMentionMatch,M=(0,f.useState)(null),A=$()(M,2),L=A[0],O=A[1],T=Oi(n,L),F=T.options,B=(0,f.useCallback)(function(w,k,R,Z){p==null||p(w,C,L),S.update(function(){k&&w!==null&&w!==void 0&&w.key&&k.remove(),w!=null&&w.onSelect&&w.onSelect(Z),R()})},[S,p,L,C]),E=(0,f.useCallback)(function(w,k){var R=k.selectedIndex,Z=k.selectOptionAndCleanUp,N=k.setHighlightedIndex;return w.current?Ni.createPortal((0,l.jsx)("div",{className:v.menuOverlay,role:"menu",children:(0,l.jsx)(Fi,{onClick:function(P,H){H.disabled||(N(P),Z(H))},onMouseEnter:function(P,H){H.disabled||N(P)},options:F,queryString:L,selectedIndex:R})}),w.current):null},[F,L,v.menuOverlay]);return(0,l.jsx)(qn.HQ,{anchorClassName:v.anchor,menuRenderFn:E,onQueryChange:O,onSelectOption:B,options:F,triggerFn:j})}),Bi=function(e){var t=e.onBlur,n=e.onFocus,o=(0,ge.g)(),a=$()(o,1),i=a[0],s=(0,f.useRef)(null);return(0,f.useEffect)(function(){return(0,Ze.qV)(i.registerCommand(Kn,function(){return s.current&&(clearTimeout(s.current),s.current=null),!0},G.VN),i.registerCommand(G.Gq,function(){return s.current=setTimeout(function(){i.dispatchCommand(G.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),t&&t(),!0},G.VN),i.registerCommand(G.m$,function(){return n&&n(),!0},G.VN))},[i,t,n]),null},Hi=Bi,lt,ct,dt,ut,pt,gt,ft,mt,sn=32,vt=22,ht=function(e){return sn+Math.max(e-1,0)*vt},$i=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=r.prefixCls,a=e.autoSize;return{wrapper:t(lt||(lt=h()([`
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
      `])),n.colorBorder,n.borderRadius,n.colorText,n.fontSize,n.fontFamily,(a==null?void 0:a.minRows)&&t(ut||(ut=h()([`
          min-height: `,`px;
        `])),ht(a.minRows)),(a==null?void 0:a.maxRows)&&t(pt||(pt=h()([`
          max-height: `,`px;
        `])),ht(a.maxRows)),n.motionDurationMid,n.colorPrimaryBorder,vt),filled:t(gt||(gt=h()([`
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
      `])),n.colorTextDisabled,n.colorBgContainerDisabled)}}),Vi=function(e){var t=e.className,n=e.wrapperClassname,o=e.placeholder,a=e.style,i=e.value,s=e.defaultValue,c=e.readOnly,g=c===void 0?!1:c,p=e.disabled,u=p===void 0?!1:p,v=e.onChange,y=e.onBlur,b=e.onFocus,S=e.variant,x=S===void 0?"outlined":S,C=e.options,j=C===void 0?[]:C,M=e.autoSize,A=e.triggers,L=A===void 0?["@"]:A,O=e.allowSpaces,T=e.punctuation,F=e.preTriggerChars,B=e.onSelect,E=$i({autoSize:M}),w=E.styles,k=E.cx,R=!g&&!u,Z=(0,f.useMemo)(function(){return{namespace:"mentions",nodes:[Te,{replace:G.R2,with:function(H){return new Te(H.__text)}},xe],editorState:Ai(i||s||""),onError:function(H){throw H}}},[]),N=function(H){var q=H.read(function(){return(0,G.Gv)().getTextContent()});v==null||v(q.replaceAll(`

`,`
`))},I=(0,f.useMemo)(function(){return j.reduce(function(P,H){return P[H.value]=H,P},{})},[j]);return _e?(0,l.jsx)(Ja.R,{initialConfig:m()(m()({},Z),{},{editable:R}),children:(0,l.jsx)(di,{value:{optionsMap:I},children:(0,l.jsxs)("div",{className:k(w.wrapper,n),children:[(0,l.jsx)(_a.B,{ErrorBoundary:Xa.g,contentEditable:(0,l.jsx)(Ka.f,{className:k(W()(W()(W()(W()({},w.root,!0),w.filled,x==="filled"),w.borderless,x==="borderless"),w.disabled,u),t),style:a||{}}),placeholder:(0,l.jsx)("div",{className:w.placeholder,children:o||"\u8F93\u5165 ".concat(L.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,l.jsx)(zi,{allowSpaces:O,onSelect:B,options:j,preTriggerChars:F,punctuation:T,triggers:L}),(0,l.jsx)(Yn,{}),(0,l.jsx)(Mi,{}),(0,l.jsx)(Ya.e,{}),(0,l.jsx)(qa.$,{onChange:N}),(0,l.jsx)(Hi,{onBlur:y,onFocus:b})]})})}):(0,l.jsxs)("div",{className:k(w.wrapper,n),children:[(0,l.jsx)("div",{className:k(W()(W()(W()(W()({},w.root,!0),w.filled,x==="filled"),w.borderless,x==="borderless"),w.disabled,u),t),style:a||{}}),(0,l.jsx)("div",{className:w.placeholder,children:o||"\u8F93\u5165 ".concat(L.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})},ln=d(54106),bt=d(32328),yt=d(87449),Qi=d(90228),ue=d.n(Qi),Ui=d(87999),Ie=d.n(Ui),Me=d(97524),Gi=d(50279),xt=function(){function r(){Oe()(this,r),W()(this,"methodMap",void 0),W()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return Ee()(r,[{key:"registerMethod",value:function(t,n){this.methodMap[t]=n}},{key:"call",value:function(t){for(var n,o,a=arguments.length,i=new Array(a>1?a-1:0),s=1;s<a;s++)i[s-1]=arguments[s];return(n=(o=this.methodMap)[t])===null||n===void 0?void 0:n.call.apply(n,[o].concat(i))}},{key:"updateMeta",value:function(t){Object.assign(this.meta,t)}},{key:"getMeta",value:function(){return Object.freeze(m()({},this.meta))}}]),r}(),cn="__base_monaco_editor_controller__",Re=_e&&window;Re&&!Re[cn]&&(Re[cn]=new xt);var Wi=Re[cn],Ji=function(){var r,e;return function(){var t=Ie()(ue()().mark(function n(o){var a;return ue()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(!r||!(0,Gi.Z)(e,o))){s.next=7;break}return a=Object.keys(o||{}).length>0,Me.Z.config(a?o:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),s.next=5,Me.Z.init();case 5:r=s.sent,e=o;case 7:return s.abrupt("return",r);case 8:case"end":return s.stop()}},n)}));return function(n){return t.apply(this,arguments)}}()}(),Ki=function(e){return e?Me.Z.config(e):Me.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),Me.Z.init()};function Xi(r){var e=Object.keys(r||{}).length>0,t=e?r:void 0;return Wi.getMeta().singleton?Ji(t):Ki(t)}function _d(r){controller.updateMeta(r)}var Yi=_e&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",St=Yi==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",dn={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},qi={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function _i(r){var e=(0,f.useRef)();return(0,f.useEffect)(function(){e.current=r},[r]),e.current}function Ct(r,e,t,n){if(n){var o=r.editor.getModel(r.Uri.parse(n));if(o)return o}return r.editor.createModel(e,t,n?r.Uri.parse(n):void 0)}var jt=function(e,t){var n=t.editorDidMount,o=t.editorWillMount,a=t.theme,i=t.value,s=t.path,c=t.language,g=t.saveViewState,p=t.defaultValue,u=t.enhancers,v=(0,f.useState)(!1),y=$()(v,2),b=y[0],S=y[1],x=(0,f.useState)(!1),C=$()(x,2),j=C[0],M=C[1],A=(0,f.useState)(!1),L=$()(A,2),O=L[0],T=L[1],F=(0,f.useRef)(p),B=(0,f.useRef)(i),E=(0,f.useRef)(c||"text"),w=(0,f.useRef)(s),k=_i(s),R=(0,f.useRef)(t.requireConfig),Z=(0,f.useRef)(t.options),N=(0,f.useRef)(),I=(0,f.useRef)(),P=(0,f.useRef)(),H=(0,f.useRef)(e),q=(0,f.useRef)(),Y=(0,f.useRef)(),J=(0,f.useRef)(!1),re=(0,f.useRef)(new Map),he=(0,f.useRef)({});(0,f.useEffect)(function(){he.current.enhancers=u},[u]),(0,f.useEffect)(function(){q.current=n},[n]),(0,f.useEffect)(function(){Y.current=o},[o]),(0,f.useEffect)(function(){B.current=i},[i]),(0,f.useEffect)(function(){E.current=c},[c]),(0,f.useEffect)(function(){F.current=p},[p]),(0,f.useEffect)(function(){T(!0),Xi(R.current).then(function(Q){var K;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,N.current=Q;try{var X;(X=Y.current)===null||X===void 0||X.call(Y,Q)}catch(Je){}if(P.current){var U;if(H.current==="single"){var _,pe,bn=Ct(Q,(_=(pe=B.current)!==null&&pe!==void 0?pe:F.current)!==null&&_!==void 0?_:"",E.current,w.current);U=Q.editor.create(P.current,m()(m()({automaticLayout:!0},dn),Z.current)),U.setModel(bn)}else{var yn=Q.editor.createModel(B.current,E.current),Ge=Q.editor.createModel(B.current,E.current);U=Q.editor.createDiffEditor(P.current,m()(m()({automaticLayout:!0},qi),Z.current)),U.setModel({original:yn,modified:Ge})}I.current=U,(K=he.current.enhancers)===null||K===void 0||K.forEach(function(Je){return Je(Q,U)});try{var We;(We=q.current)===null||We===void 0||We.call(q,Q,U)}catch(Je){}J.current||S(!0)}}).catch(function(Q){console.error("Monaco Editor Load Error!",Q)}).then(function(){J.current||T(!1)})},[]),(0,f.useEffect)(function(){var Q;b&&((Q=N.current)===null||Q===void 0||Q.editor.setTheme(a))},[b,a]),(0,f.useEffect)(function(){if(b){var Q=e==="diff"?I.current.getModifiedEditor():I.current;Q==null||Q.onDidFocusEditorText(function(){J.current||M(!0)}),Q==null||Q.onDidBlurEditorText(function(){J.current||M(!1)})}},[b,e]),(0,f.useEffect)(function(){return function(){J.current=!0}},[]),(0,f.useEffect)(function(){var Q,K,X;if(b&&!(e!=="diff"&&s)){var U=e==="diff"?I.current.getModifiedEditor():I.current,_=(Q=i!=null?i:F.current)!==null&&Q!==void 0?Q:"",pe=(K=N.current)===null||K===void 0?void 0:K.editor.EditorOption.readOnly;pe&&U!==null&&U!==void 0&&(X=U.getOption)!==null&&X!==void 0&&X.call(U,pe)?U==null||U.setValue(_):i!==(U==null?void 0:U.getValue())&&(U==null||U.executeEdits("",[{range:U==null?void 0:U.getModel().getFullModelRange(),text:_,forceMoveMarkers:!0}]),U==null||U.pushUndoStop())}},[b,s,e,i]),(0,f.useEffect)(function(){var Q,K;if(b&&e!=="diff"&&s!==k){var X=Ct(N.current,(Q=B.current)!==null&&Q!==void 0?Q:F.current,E.current,s),U=I.current;B.current!==null&&B.current!==void 0&&X.getValue()!==B.current&&X.setValue(B.current),X!==((K=I.current)===null||K===void 0?void 0:K.getModel())&&(g&&re.current.set(k,U.saveViewState()),U.setModel(X),g&&U.restoreViewState(re.current.get(s)))}},[b,i,s,k,e,g]);var be=I;return{isEditorReady:b,focused:j,loading:O,containerRef:P,monacoRef:N,editorRef:be,valueRef:B}},kt=function(e){var t=(0,f.useState)(!1),n=$()(t,2),o=n[0],a=n[1],i=function(){if(o){a(!1),e==null||e.updateOptions(m()(m()({},e==null?void 0:e.getOptions()),{},{minimap:{enabled:!1}})),e==null||e.layout();return}a(!0),e==null||e.updateOptions(m()(m()({},e==null?void 0:e.getOptions()),{},{minimap:{enabled:!0}})),e==null||e.layout()};return{isFullScreen:o,fullScreen:i}},wt,At,Mt,Nt,Lt,Ot,Et,Tt=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=r.prefixCls,a=e.minimapEnabled,i=a===void 0?!1:a,s=e.isFullScreen,c=s===void 0?!1:s,g=e.diff,p=g===void 0?!1:g,u=(0,z.F4)(wt||(wt=h()([`
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
          `]))),n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius-1,n.borderRadius-1),fullScreenBtn:t(Nt||(Nt=h()([`
        &.`,`-btn {
          position: absolute;
          color: `,`;
          top: 20px;
          transition: none;
          `,`
        }
      `])),o,n.colorTextSecondary,c?t(Lt||(Lt=h()([`
                z-index: 9999;
                right: `,`px;
              `])),p?64:138):t(Ot||(Ot=h()([`
                right: `,`px;
              `])),i||p?64:20)),loading:t(Et||(Et=h()([`
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
      `])),n.fontSizeSM,n.colorTextTertiary,u)}},{hashPriority:"low"});function Ce(){}var es=function(e){var t,n=e.onChange,o=e.enableOutline,a=e.width,i=e.height,s=e.language,c=e.supportFullScreen,g=(0,f.useRef)(n),p=jt("single",e),u=p.isEditorReady,v=p.focused,y=p.loading,b=p.containerRef,S=p.monacoRef,x=p.editorRef,C=p.valueRef,j=(0,f.useRef)(),M=kt(x==null?void 0:x.current),A=M.isFullScreen,L=M.fullScreen,O=Tt({isFullScreen:A,minimapEnabled:(t=e.options)===null||t===void 0||(t=t.minimap)===null||t===void 0?void 0:t.enabled}),T=O.cx,F=O.styles,B=T(F.base,e.className,{"ve-focused":v,"ve-outline":o}),E=(0,f.useMemo)(function(){return{width:a,height:i}},[a,i]);return(0,f.useEffect)(function(){g.current=n},[n]),(0,f.useEffect)(function(){if(u){var w,k=x.current;(w=j.current)===null||w===void 0||w.dispose(),j.current=k==null?void 0:k.onDidChangeModelContent(function(R){var Z,N=k==null||(Z=k.getModel())===null||Z===void 0?void 0:Z.getValue();if(C.current!==N){var I;(I=g.current)===null||I===void 0||I.call(g,N,R)}})}},[x,u,j,C]),(0,f.useEffect)(function(){return function(){var w,k,R,Z=x.current;(w=j.current)===null||w===void 0||w.dispose(),Z==null||(k=Z.getModel())===null||k===void 0||k.dispose(),(R=x.current)===null||R===void 0||R.dispose()}},[x]),(0,f.useEffect)(function(){var w;if(u){var k=(w=x.current)===null||w===void 0?void 0:w.getModel();if(k){var R;(R=S.current)===null||R===void 0||R.editor.setModelLanguage(k,s)}}},[x,u,s,S]),(0,l.jsxs)("div",{className:B,style:e.style,children:[y&&(0,l.jsx)("span",{className:T(F.loading,"loading"),children:St}),(0,l.jsx)("div",{className:"react-monaco-editor-container",ref:b,style:E,children:c&&(0,l.jsx)(ce.ZP,{className:F.fullScreenBtn,icon:(0,l.jsx)(ne.Z,{icon:A?bt.Z:yt.Z}),onClick:L,size:"small",type:"text"})})]})},ns=function(e){var t=e.enableOutline,n=e.width,o=e.height,a=e.language,i=e.onChange,s=e.original,c=e.supportFullScreen,g=(0,f.useRef)(i),p=jt("diff",e),u=p.isEditorReady,v=p.focused,y=p.loading,b=p.containerRef,S=p.monacoRef,x=p.editorRef,C=p.valueRef,j=kt(),M=j.isFullScreen,A=j.fullScreen,L=Tt({isFullScreen:M,diff:!0}),O=L.cx,T=L.styles,F=O(T.base,e.className,{"ve-focused":v,"ve-outline":t}),B=(0,f.useMemo)(function(){return{width:n,height:o}},[n,o]);return(0,f.useEffect)(function(){g.current=i},[i]),(0,f.useEffect)(function(){var E;if(u){(E=x.current.getModel())===null||E===void 0||E.original.setValue(s!=null?s:"");var w=x.current.getModel()||{},k=w.modified;k==null||k.onDidChangeContent(function(R){var Z=k.getValue();if(C.current!==Z){var N;(N=g.current)===null||N===void 0||N.call(g,Z,R)}})}},[x,u,s,C]),(0,f.useEffect)(function(){return function(){var E,w,k;(E=x.current)===null||E===void 0||(E=E.getModel())===null||E===void 0||(E=E.original)===null||E===void 0||E.dispose(),(w=x.current)===null||w===void 0||(w=w.getModel())===null||w===void 0||(w=w.modified)===null||w===void 0||w.dispose(),(k=x.current)===null||k===void 0||k.dispose()}},[x]),(0,f.useEffect)(function(){var E,w,k;if(u){var R=((E=x.current)===null||E===void 0?void 0:E.getModel())||{},Z=R.original,N=R.modified;(w=S.current)===null||w===void 0||w.editor.setModelLanguage(Z,a),(k=S.current)===null||k===void 0||k.editor.setModelLanguage(N,a)}},[x,u,a,S]),(0,l.jsxs)("div",{className:F,style:e.style,children:[y&&(0,l.jsx)("span",{className:O(T.loading,"loading"),children:St}),(0,l.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:b,style:B,children:c&&(0,l.jsx)(ce.ZP,{className:T.fullScreenBtn,icon:(0,l.jsx)(ne.Z,{icon:M?bt.Z:yt.Z}),onClick:A,size:"small",type:"text"})})]})},ts=Object.assign(ns,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:dn,editorDidMount:Ce,editorWillMount:Ce,onChange:Ce,requireConfig:{}}}),Zt=Object.assign(es,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:dn,editorDidMount:Ce,editorWillMount:Ce,onChange:Ce,requireConfig:{}},MonacoDiffEditor:ts}),eu=null,rs=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],os=["inlineView","options"],un=function(e){var t=e.type,n=t===void 0?"single":t,o=e.editorDidMount,a=e.readOnly,i=a===void 0?!1:a,s=e.lineNumbers,c=s===void 0?"on":s,g=e.wordWrap,p=g===void 0?"off":g,u=e.contextmenu,v=u===void 0?!0:u,y=e.theme,b=e.minimapEnabled,S=b===void 0?!1:b,x=e.version,C=x===void 0?"0.45.0":x,j=e.requireConfig,M=j===void 0?{}:j,A=e.options,L=e.className,O=e.supportFullScreen,T=D()(e,rs),F=(0,f.useRef)(o);(0,f.useEffect)(function(){F.current=o},[o]);var B=(0,ln.r)(),E=B.isDarkMode,w=(0,f.useMemo)(function(){return y||(E?"vs-dark":"vs")},[E,y]),k=(0,f.useState)(),R=$()(k,2),Z=R[0],N=R[1],I=(0,f.useCallback)(function(Y,J){var re;N(J),(re=F.current)===null||re===void 0||re.call(F,Y,J)},[]),P=(0,f.useMemo)(function(){var Y=Object.assign({},A,{readOnly:i,lineNumbers:c,wordWrap:p,contextmenu:v,minimap:S===void 0?A==null?void 0:A.minimap:Object.assign({},A==null?void 0:A.minimap,{enabled:S})});return Z==null||Z.updateOptions(Y),Y},[A,i,c,p,v,S,Z]),H=An(),q=(0,f.useMemo)(function(){return Object.assign({},M,{paths:m()({vs:H({path:"min/vs",pkg:"monaco-editor",version:C})},M.paths)})},[H,M,C]);return n!=="diff"?(0,l.jsx)(Zt,m()({className:L,editorDidMount:I,options:P,requireConfig:q,supportFullScreen:Z&&O,theme:w},T)):(0,l.jsx)(Zt.MonacoDiffEditor,m()({className:L,editorDidMount:I,options:P,requireConfig:q,supportFullScreen:Z&&O,theme:w},T))},as=function(e){return(0,l.jsx)(un,m()(m()({},e),{},{type:"single"}))},is=function(e){var t=e.inlineView,n=t===void 0?"off":t,o=e.options,a=D()(e,os);return(0,l.jsx)(un,m()(m()({options:Object.assign({useInlineViewWhenSpaceIsLimited:n==="on"||n==="auto",renderSideBySide:n==="off"||n==="auto"},o)},a),{},{type:"diff"}))},Pt=d(22543),ss=["to","children"],It=function(e){var t=e.to,n=e.children,o=D()(e,ss);return(0,l.jsx)("a",m()(m()({href:"#".concat(t)},o),{},{children:n}))},De=(0,f.createContext)({loading:!1,Link:It}),ls=["to","Link","children"],cs=function(e){var t=e.to,n=e.Link,o=e.children,a=D()(e,ls);return n?(0,l.jsx)(n,m()(m()({to:t},a),{},{children:o})):(0,l.jsx)("a",m()(m()({href:"#".concat(t)},a),{},{children:o}))},ds=function(e){var t=(0,f.useContext)(De),n=t.Link,o=t.breadcrumb;(0,f.useEffect)(function(){var i;o==null||(i=o.setItems)===null||i===void 0||i.call(o,e.items)},[o,e.items]);var a=(0,f.useCallback)(function(i,s,c,g){var p,u,v=i.href?i.href===((p=c.at(-1))===null||p===void 0?void 0:p.href):i.path===((u=c.at(-1))===null||u===void 0?void 0:u.path);if(v)return(0,l.jsx)("span",{children:i.title});var y=i.href?i.href:"/".concat(g.join("/"));return(0,l.jsx)(cs,{Link:n,to:y,children:i.title})},[n]);return(0,l.jsx)(Pt.Z,m()({itemRender:a},e))},Rt=d(25081),me=d(63079),Dt,us=(0,z.kc)(function(r){var e=r.css,t=r.token;return{root:e(Dt||(Dt=h()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),ps=["className","children"],gs={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},fs=function(e){var t=e.className,n=e.children,o=D()(e,ps),a=us(),i=a.styles,s=a.cx,c=(0,f.useContext)(De),g=c.loading,p=c.breadcrumb,u=c.Link,v=c.status,y=(0,f.useCallback)(function(){if(v){var b;return(0,l.jsx)(Rt.ZP,{extra:(0,l.jsx)(u,{to:p==null||(b=p.items)===null||b===void 0||(b=b[0])===null||b===void 0?void 0:b.path,children:(0,l.jsx)(ce.ZP,{type:"primary",children:"Go Back"})}),status:v,subTitle:gs[v],title:v})}return n},[v,n,u,p==null?void 0:p.items]);return g?(0,l.jsx)(me.Z,{active:!0,className:s(i.root,t)}):(0,l.jsx)(V.Z,m()(m()({className:s(i.root,t),gap:20,vertical:!0},o),{},{children:y()}))},ms=function(){return(0,l.jsx)(l.Fragment,{})},vs=d(335),Fe=d.n(vs),Ft=d(96726),zt=d(76116),Bt=d(24230),ze=d(57179),Ht,hs=(0,z.kc)(function(r){var e=r.css,t=r.token;return{custom:e(Ht||(Ht=h()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),t.colorPrimary,t.colorPrimaryHover)}},{hashPriority:"low"}),bs=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],$t=function(e){var t=e.mode,n=t===void 0?"line":t,o=e.content,a=e.defaultOpen,i=e.iconPlacement,s=i===void 0?"left":i,c=e.openIcon,g=e.closeIcon,p=e.type,u=D()(e,bs),v=hs({}),y=v.styles,b=n==="expanded",S=(0,f.useState)(a),x=$()(S,2),C=x[0],j=x[1],M=g||(0,l.jsx)(Ft.Z,{}),A=c||(0,l.jsx)(zt.Z,{}),L=b&&(0,l.jsx)("span",{children:C?M:A});return n==="line"||p==="vertical"?(0,l.jsx)(Bt.Z,m()({type:p},u)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Bt.Z,m()(m()({type:p},u),{},{children:(0,l.jsx)("span",{className:b?y.custom:"",onClick:function(){j(!C)},children:(0,l.jsxs)(ze.Z,{size:6,children:[s!=="right"&&L,(0,l.jsx)("span",{children:o}),s==="right"&&L]})})})),b&&(0,l.jsx)("div",{style:{display:C?"block":"none"},children:e.children})]})},ys=$t,Vt=d(28163),xs=d(65933),Qt,Ut,Ss=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(Qt||(Qt=h()([`
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
      `])),t.colorTextTertiary)}},{hashPriority:"low"}),Cs=["tooltip","className","status","text","color"],Gt=function(e){var t=e.tooltip,n=e.className,o=e.status,a=e.text,i=e.color,s=D()(e,Cs),c=Ss(),g=c.cx,p=c.styles;return(0,l.jsxs)(ze.Z,m()(m()({className:g(p.root,n),size:"small"},s),{},{children:[(0,l.jsx)(Vt.Z,{status:o,text:a,color:i}),t&&(0,l.jsx)(fe.Z,{className:p.tooltip,title:t,children:(0,l.jsx)(ne.Z,{icon:xs.Z})})]}))},js=d(57724),ks=d.n(js),Be=d(58615),ws=["items","onClick"],As=["key","label"],Ms=["key","label"],Wt=function(e){var t=e.items,n=t===void 0?[]:t,o=e.onClick,a=o===void 0?function(){}:o,i=D()(e,ws);if(n.length<=2)return(0,l.jsx)(ze.Z,m()(m()({align:"end",size:12},i),{},{children:n.map(function(y){var b=y.key,S=y.label,x=D()(y,As);return(0,l.jsx)(ce.ZP,m()(m()({onClick:function(j){return a(b,j)}},x),{},{children:S}),b)})}));var s=ks()(n),c=s[0],g=c.key,p=c.label,u=D()(c,Ms),v=s.slice(1);return(0,l.jsx)(Be.Z.Button,m()(m()(m()({onClick:function(b){return a(g,b)}},u),{},{menu:{onClick:function(b){var S=b.key,x=b.domEvent;return a(S,x)},items:v.map(function(y){var b=y.key,S=y.label,x=y.icon,C=y.danger,j=y.disabled;return{key:b,label:S,icon:x,danger:C,disabled:j}})},overlayStyle:{minWidth:100}},i),{},{children:p}),g)},He=d(54473),Ns=["shape","size","src"],Jt=function(e){if(typeof e=="number")return e;switch(e){case"small":return 40;case"large":return 88;default:return 64}},Ls=function(e){var t=e.shape,n=t===void 0?"square":t,o=e.size,a=e.src,i=D()(e,Ns),s=(0,f.useMemo)(function(){return Jt(o)},[o]);return(0,l.jsx)(He.C,m()({shape:n,size:s,src:a},i))},Kt,Xt,Yt,qt,_t,er,nr,tr,rr,Os=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=r.prefixCls,a=e.bordered,i=a===void 0?!1:a,s=e.divider,c=s===void 0?!0:s;return{root:i?t(Kt||(Kt=h()([`
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
      `])),o,o,n.colorPrimary,o),titleBox:t(_t||(_t=h()([`
        margin-bottom: `,`px;
      `])),n.marginSM),subTitle:t(er||(er=h()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),n.marginXXS,o,n.fontSize,n.colorTextSecondary),title:t(nr||(nr=h()([`
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
      `])),n.marginXXS,n.fontSize,n.colorTextSecondary,o,o,n.fontSize,o,n.fontSize,n.colorTextSecondary),rightButtons:t(rr||(rr=h()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),Es=["className","classNames","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],Ts=on.Paragraph,Zs=function(e){var t=e.className,n=e.classNames,o=e.icon,a=e.title,i=e.titleRender,s=e.subTitle,c=e.status,g=e.descriptions,p=g===void 0?[]:g,u=e.descriptionsRender,v=e.extraContent,y=v===void 0?{}:v,b=e.extraContentRender,S=e.bordered,x=e.divider,C=D()(e,Es),j=Os({bordered:S,divider:x}),M=j.styles,A=j.cx,L=(0,f.useMemo)(function(){return!o||typeof o=="string"?{src:o,size:s?"large":"default"}:(s&&o.size===void 0&&(o.size="large"),o)},[o,s]),O=(0,f.useMemo)(function(){var k=(0,l.jsx)("span",{className:A(M.title,n==null?void 0:n.title),children:a});return i?i(k):k},[n==null?void 0:n.title,A,M.title,a,i]),T=(0,f.useMemo)(function(){var k=[],R=Fe()(p.filter(function(Y){return!!Y}).entries()),Z;try{for(R.s();!(Z=R.n()).done;){var N=$()(Z.value,2),I=N[0],P=N[1],H=P.icon,q=P.text;(c||I>=1)&&k.push((0,l.jsx)(ys,{dashed:!1,type:"vertical"},"divider-".concat(I))),k.push((0,l.jsxs)(V.Z,{align:"center",gap:4,children:[H&&(0,l.jsx)(fe.Z,{title:H.tooltip,children:H.content}),(0,l.jsx)("span",{children:q})]},"desc-".concat(I)))}}catch(Y){R.e(Y)}finally{R.f()}return u?u(k):k},[p,u,c]),F=(0,f.useMemo)(function(){if(!y&&!b)return null;var k=(0,l.jsx)(Wt,m()({className:M.rightButtons},y));return b?b(k):k},[y,b,M.rightButtons]),B=(0,f.useContext)(De),E=B.loading,w=B.status;return E?(0,l.jsxs)(V.Z,{className:A(M.root,t),gap:20,children:[(0,l.jsx)(V.Z,{children:(0,l.jsx)(me.Z.Avatar,{active:!0,className:M.icon,shape:L==null?void 0:L.shape,size:Jt(L==null?void 0:L.size)})}),(0,l.jsxs)(V.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)("div",{className:M.titleBox,children:[(0,l.jsx)(me.Z.Input,{active:!0,size:25}),s&&(0,l.jsx)("div",{className:A(M.subTitle,t),children:(0,l.jsx)(me.Z.Input,{active:!0,size:18})})]}),(0,l.jsx)(me.Z.Input,{active:!0,size:18})]}),(0,l.jsx)(V.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,l.jsx)(me.Z.Button,{active:!0})})]}):w?null:(0,l.jsxs)(V.Z,m()(m()({className:A(M.root,t),gap:20},C),{},{children:[L&&(0,l.jsx)(V.Z,{children:(0,l.jsx)(Ls,m()({className:M.icon},L))}),(0,l.jsxs)(V.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)(V.Z,{className:A(M.titleBox,n==null?void 0:n.titleWrapper),vertical:!0,children:[O,s&&(0,l.jsx)(Ts,{className:A(M.subTitle,n==null?void 0:n.subTitle),ellipsis:{rows:2},children:s})]}),(0,l.jsxs)(V.Z,{align:"center",className:A(M.descriptions,n==null?void 0:n.descriptions),gap:4,children:[c&&(0,l.jsx)(Gt,m()({},c)),T]})]}),(0,l.jsx)(V.Z,{align:"center",className:n==null?void 0:n.extraContent,flex:"1",justify:"flex-end",children:F})]}))},or,Ps=(0,z.kc)(function(r){var e=r.css,t=r.token;return{root:e(or||(or=h()([`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: `,"px ","px ",`px;
      `])),t.padding,t.paddingLG,t.paddingXL)}},{hashPriority:"low"}),Is=["loading","className","children","Link","status","gap"],Rs=function(e){var t=Mn(),n=e.loading,o=e.className,a=e.children,i=e.Link,s=i===void 0?t||It:i,c=e.status,g=e.gap,p=g===void 0?16:g,u=D()(e,Is),v=Ps(u),y=v.styles,b=v.cx,S=(0,f.useState)([]),x=$()(S,2),C=x[0],j=x[1];return(0,l.jsx)(V.Z,m()(m()({className:b(y.root,o),gap:p,vertical:!0},u),{},{children:(0,l.jsx)(De.Provider,{value:{loading:n,Link:s,breadcrumb:{items:C,setItems:j},status:c},children:a})}))},ar,Ds=(0,z.kc)(function(r){var e=r.css,t=r.token;return{root:e(ar||(ar=h()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),t.fontFamily,t.fontWeightStrong,t.lineHeight,t.colorText)}}),Fs=["className"],zs=function(e){var t=e.className,n=D()(e,Fs),o=Ds(),a=o.cx,i=o.styles;return(0,l.jsx)("h2",m()({className:a(i.root,t)},n))},je=Rs;je.Breadcrumb=ds,je.Title=zs,je.Header=Zs,je.Content=fs,je.Footer=ms;var ir,sr,lr,cr,dr,Bs=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(ir||(ir=h()([`
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
    `])),t.colorErrorText)}}),Hs=["className","bordered","hoverable","children"],$s=function(e){var t=e.className,n=e.bordered,o=n===void 0?!1:n,a=e.hoverable,i=a===void 0?!0:a,s=e.children,c=D()(e,Hs),g=Bs(),p=g.cx,u=g.styles;return(0,l.jsx)("div",m()(m()({className:p(u.root,o&&u.bordered,i&&u.hoverable,t)},c),{},{children:s}))},ur,Vs=(0,z.kc)(function(r){var e=r.css,t=r.token;return{root:e(ur||(ur=h()([`
        padding: 12px 24px 20px;
      `])))}},{hashPriority:"low"}),Qs=["className","children"],Us=function(e){var t=e.className,n=e.children,o=D()(e,Qs),a=Vs(),i=a.styles,s=a.cx;return(0,l.jsx)(V.Z,m()(m()({className:s(i.root,t),gap:20,vertical:!0},o),{},{children:n}))},pr=d(56656),gr,fr,mr,vr,hr,br,Gs=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=r.prefixCls,a=e.borderedBottom,i=e.borderedBottomDashed,s=e.borderedTop,c=e.borderedTopDashed,g=e.size,p={small:"".concat(n.paddingXS,"px ").concat(n.padding,"px"),middle:"".concat(n.padding,"px ").concat(n.paddingLG,"px"),default:"".concat(n.paddingSM,"px ").concat(n.paddingLG,"px")},u=a||i;return{custom:t(gr||(gr=h()([`
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
      `])),o,o,u&&g&&t(fr||(fr=h()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),o,o,p[g],o),a&&t(mr||(mr=h()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),o,n.colorSplit),i&&t(vr||(vr=h()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),o,n.colorSplit),s&&t(hr||(hr=h()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),o,n.colorSplit),c&&t(br||(br=h()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),o,n.colorSplit))}},{hashPriority:"low"}),Ws=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],pn=function(e){var t=e.className,n=e.borderedBottom,o=e.borderedBottomDashed,a=e.borderedTop,i=e.borderedTopDashed,s=D()(e,Ws),c=Gs({borderedBottom:n,borderedBottomDashed:o,borderedTop:a,borderedTopDashed:i,size:s.size}),g=c.styles,p=c.cx;return(0,l.jsx)(pr.Z,m()(m()({},s),{},{className:p(g.custom,t)}))},Js=pn;pn.Item=pr.Z.Item;var yr,Ks=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls,o=70;return{root:e(yr||(yr=h()([`
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
      `])),n,n,n,n,o,n,o)}},{hashPriority:"low"}),Xs=["className","colon","column","size"],Ys=function(e){var t=e.className,n=e.colon,o=n===void 0?!1:n,a=e.column,i=a===void 0?2:a,s=e.size,c=s===void 0?"small":s,g=D()(e,Xs),p=Ks(),u=p.cx,v=p.styles;return(0,l.jsx)(Js,m()({className:u(v.root,t),colon:o,column:i,size:c},g))},qs=d(250),xr,Sr,Cr,jr,kr,wr,Ar,Mr,Nr,_s=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=r.prefixCls,a=e.divider,i=a===void 0?!0:a,s=e.iconBg,c=s===void 0?!0:s;return{root:t(xr||(xr=h()([`
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
      `])),o,n.colorPrimary,c&&t(jr||(jr=h()([`
            background-color: `,`;
          `])),n.colorBgLayout),o),titleBox:t(kr||(kr=h()([`
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
      `])),o,n.colorTextSecondary),extra:t(Mr||(Mr=h()([`
        margin-top: -4px;
      `]))),rightButtons:t(Nr||(Nr=h()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),el=["className","icon","title","description","extra","divider"],nl=["className","shape","size"],tl=["children"],rl=on.Paragraph,ol=function(e){var t=e.className,n=e.icon,o=e.title,a=e.description,i=e.extra,s=e.divider,c=D()(e,el),g=_s({divider:s,iconBg:!(n!=null&&n.src)}),p=g.styles,u=g.cx,v=n||{},y=v.className,b=v.shape,S=b===void 0?"square":b,x=v.size,C=x===void 0?72:x,j=D()(v,nl),M=i||{},A=M.children,L=D()(M,tl);return(0,l.jsxs)(V.Z,m()(m()({className:u(p.root,t),gap:20},c),{},{children:[n&&(0,l.jsx)(V.Z,{children:(0,l.jsx)(He.C,m()({className:u(p.icon,y),shape:S,size:C},j))}),(0,l.jsxs)(V.Z,{flex:"1",vertical:!0,children:[(0,l.jsxs)(V.Z,{className:p.titleBox,gap:4,children:[(0,l.jsx)("div",{className:p.title,children:o}),i&&(0,l.jsx)(V.Z,{align:"flex-start",className:p.extra,justify:"flex-end",onClick:function(T){return T.stopPropagation()},children:(0,l.jsx)(Be.Z,m()(m()({},L),{},{children:A||(0,l.jsx)(ce.ZP,{icon:(0,l.jsx)(ne.Z,{icon:qs.Z}),size:"small",type:"text"})}))})]}),a&&(0,l.jsx)(rl,{className:p.description,ellipsis:{rows:2},children:a})]})]}))},$e=$s;$e.Header=ol,$e.Content=Us,$e.Descriptions=Ys;var al=d(15558),Ve=d.n(al),il=d(82338),sl=d(94269),Lr,Or,Er,Tr,Zr,Pr=function(e){switch(e){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},ll=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=r.prefixCls,a=e.disabled,i=e.size,s=Pr(i),c=s.cardWidth;return{option:t(Lr||(Lr=h()([`
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
      `])),n.colorBorder,n.borderRadius,a?"not-allowed":"pointer",n.padding,n.motionDurationFast,c,a&&t(Or||(Or=h()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),n.colorBgContainerDisabled,o,n.colorTextDisabled,o,n.colorTextDisabled),!a&&t(Er||(Er=h()([`
          &:hover {
            border-color: `,`;
          }
        `])),n.colorPrimaryBorderHover),o),optionSelected:t(Tr||(Tr=h()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),n.colorPrimary,n.colorPrimaryActive),check:t(Zr||(Zr=h()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),n.marginXS,n.marginXS,n.colorPrimary)}}),cl=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],dl=Se.Z.Text,ul=Se.Z.Paragraph,pl=f.forwardRef(function(r,e){var t=r.defaultValue,n=r.value,o=r.onChange,a=r.multiple,i=a===void 0?!1:a,s=r.disabled,c=s===void 0?!1:s,g=r.options,p=g===void 0?[]:g,u=r.classNames,v=r.styles,y=r.size,b=y===void 0?"middle":y,S=r.optionRender,x=D()(r,cl),C=(0,f.useMemo)(function(){return p.some(function(N){return!!N.img||!!N.icon})},[p]),j=ll({disabled:c,size:b}),M=j.cx,A=j.styles,L=(0,f.useMemo)(function(){return Pr(b)},[b]),O=L.imgHeight,T=(0,f.useCallback)(function(N){return!i||Array.isArray(N)?N:N===void 0?[]:[N]},[i]),F=(0,sl.C8)(T(t),{defaultValue:T(t),value:n,onChange:o}),B=$()(F,2),E=B[0],w=B[1],k=(0,f.useCallback)(function(N){if(!c){if(!i){w(N);return}if(E.includes(N)){w(E.filter(function(I){return I!==N}));return}w([].concat(Ve()(E),[N]))}},[E,c,i,w]),R=(0,f.useCallback)(function(N){return i?E.includes(N):E===N},[E,i]),Z=(0,f.useCallback)(function(N,I){var P=R(N.value),H=(0,l.jsxs)(V.Z,{align:C?"center":"flex-start",className:M(A.option,P&&A.optionSelected,u==null?void 0:u.card),gap:"small",onClick:function(){return k(N.value)},style:m()(m()({},v==null?void 0:v.card),N.style),vertical:!0,children:[C&&(0,l.jsx)(He.C,{className:u==null?void 0:u.icon,icon:N.icon,shape:"square",size:O,src:N.img,style:m()(m()({},v==null?void 0:v.icon),N.iconStyle)}),N.label&&(0,l.jsx)(dl,{ellipsis:!0,strong:!0,children:N.label}),!C&&N.description&&(0,l.jsx)(ul,{ellipsis:{rows:2},type:"secondary",children:N.description}),i&&P&&(0,l.jsx)(ne.Z,{className:A.check,icon:il.Z})]},N.value);return S?S(H,N,I):H},[u==null?void 0:u.card,u==null?void 0:u.icon,M,O,C,R,i,k,S,A.check,A.option,A.optionSelected,v==null?void 0:v.card,v==null?void 0:v.icon]);return(0,l.jsx)(V.Z,m()(m()({gap:"large",ref:e,wrap:!0},x),{},{children:p.map(function(N,I){return Z(N,I)})}))}),Ir=d(38695),gn=d(59823),Rr=d(99865),Dr=d(7515),gl=function(e){var t=e.value,n=e.defaultValue,o=e.min,a=o===void 0?0:o,i=e.max,s=e.step,c=e.gutter,g=c===void 0?16:c,p=e.sliderCol,u=p===void 0?{span:12}:p,v=e.inputCol,y=v===void 0?{span:5}:v,b=e.addonAfter,S=e.addonBefore,x=e.placeholder,C=e.onChange,j=e.style,M=e.className,A=e.sliderProps,L=A===void 0?{}:A,O=e.inputProps,T=O===void 0?{}:O,F=(0,f.useState)(),B=$()(F,2),E=B[0],w=B[1],k=function(Z){Number.isNaN(Z)||(w(Z),C==null||C(Z))};return(0,l.jsxs)(Ir.Z,{className:M,gutter:g,style:j,children:[(0,l.jsx)(gn.Z,m()(m()({},u),{},{children:(0,l.jsx)(Rr.Z,m()(m()({},L),{},{defaultValue:n,max:i,min:a,onChange:k,step:s,value:t!=null?t:E}))})),(0,l.jsx)(gn.Z,m()(m()({},y),{},{children:(0,l.jsx)(Dr.Z,m()(m()({},T),{},{addonAfter:b,addonBefore:S,defaultValue:n,max:i,min:a,onChange:k,placeholder:x,step:s,value:t!=null?t:E}))}))]})},Fr=d(32142),zr,fl=(0,z.kc)(function(r,e){var t=r.css,n=e.bordered,o=n===void 0?"dashed":n;return{custom:t(zr||(zr=h()([`
        border-style: `,` !important;
      `])),o)}},{hashPriority:"low"}),ml=["bordered","className"],Br=function(e){var t=e.bordered,n=t===void 0?"dashed":t,o=e.className,a=D()(e,ml),i=fl({bordered:n}),s=i.styles,c=i.cx;return(0,l.jsx)(Fr.Z,m()(m()({},a),{},{className:c(s.custom,o)}))};Br.ErrorBoundary=Fr.Z.ErrorBoundary;var nu=null,Hr=d(24730),vl=d(372),fn=d(76580),Qe=d(40097),$r,Vr=(0,z.vJ)($r||($r=h()([`
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
    `)}),hl=["detail","message","description","onClose","className"],bl=fn.Z.Panel,yl=Se.Z.Link,xl=Se.Z.Paragraph,Sl=Se.Z.Text,ke={},Cl=function(e,t){ke[e]||(ke[e]=[]),ke[e].push(t)},jl=function(e){delete ke[e]},Qr=function r(e){var t="";if(typeof e=="string")t=e;else if(typeof e=="number")t=e.toString();else if(Array.isArray(e)){var n=Fe()(e),o;try{for(n.s();!(o=n.n()).done;){var a=o.value;t+=r(a)}}catch(i){n.e(i)}finally{n.f()}}else(0,f.isValidElement)(e)&&(t+=r(e.props.children));return t},Ur=function(e){var t,n=e.noticeKey,o=e.message,a=((t=ke[n])===null||t===void 0?void 0:t.length)||0;return(0,l.jsxs)(l.Fragment,{children:[o,a>1&&" (".concat(a,")")]})},kl=function(e){var t=e.noticeKey,n=(0,f.useState)(),o=$()(n,2),a=o[0],i=o[1],s={},c=Fe()(ke[t]),g;try{for(c.s();!(g=c.n()).done;){var p=g.value,u=Qr(p.description);p.descKey=u,s[u]=p}}catch(v){c.e(v)}finally{c.f()}return(0,l.jsx)(fn.Z,{accordion:!0,activeKey:a,className:"yunti-notification-collapse",expandIcon:function(y){var b=y.isActive;return(0,l.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:b?(0,l.jsx)(yl,{className:"yunti-notification-link",children:(0,l.jsx)(Ft.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,l.jsx)(zt.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(y){i(y)},children:Object.values(s).map(function(v){var y=v.descKey,b=v.description,S=v.detail;return(0,l.jsx)(bl,{header:(0,l.jsx)(Sl,{ellipsis:{tooltip:!1},style:{width:250},children:b}),children:(0,l.jsx)(xl,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(S,null,2)},type:"secondary",children:(0,l.jsx)("pre",{children:JSON.stringify(S,null,2)})})},y)})})},ve=function(e){var t=e.detail,n=e.message,o=e.description,a=e.onClose,i=e.className,s=D()(e,hl),c=Qr(n);Cl(c,e);var g=function(){a==null||a(),jl(c)};return e.type==="warning"&&!e.icon&&(s.icon=(0,l.jsx)(vl.Z,{style:{color:"#ff7d00"}})),t?Qe.ZP.open(m()({key:c,message:(0,l.jsx)(Ur,{message:n,noticeKey:c}),description:(0,l.jsx)(kl,{noticeKey:c}),onClose:g,className:"yunti-notification ".concat(i)},s)):Qe.ZP.open(m()({key:c,message:(0,l.jsx)(Ur,{message:n,noticeKey:c}),description:o,onClose:g,className:"yunti-notification ".concat(i)},s))},Gr=function(e){var t;if(((e==null||(t=e.errors)===null||t===void 0?void 0:t.length)||0)>0){e!=null&&e.errors;var n=Fe()((e==null?void 0:e.errors)||[]),o;try{for(n.s();!(o=n.n()).done;){var a=o.value;ve(m()(m()({detail:a,description:a.message},e),{},{type:"warning"}))}}catch(i){n.e(i)}finally{n.f()}}else ve(m()(m()({},e),{},{type:"warning"}))},wl=m()(m()({},Qe.ZP),{},{success:function(e){return ve(m()(m()({},e),{},{type:"success"}))},info:function(e){return ve(m()(m()({},e),{},{type:"info"}))},warning:function(e){return ve(m()(m()({},e),{},{type:"warning"}))},warn:function(e){return ve(m()(m()({},e),{},{type:"warning"}))},error:function(e){return ve(m()(m()({},e),{},{type:"error"}))},warnings:Gr,warns:Gr}),tu=null,Al=["children"],Wr=function(e){var t=e.children,n=D()(e,Al);return(0,l.jsxs)(Hr.Z,m()(m()({},n),{},{children:[(0,l.jsx)(Vr,{}),t]}))};Wr.useApp=Hr.Z.useApp;var ru=null,Ml=d(54901),Jr,Kr,Xr,Nl=(0,z.kc)(function(r,e){var t=r.css,n=r.prefixCls,o=e.closeIcon,a=e.closeIconPlacement,i=e.extra,s=t(Jr||(Jr=h()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),n,n,!(o===null||o===!1)&&t(Kr||(Kr=h()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),n));return{custom:t(Xr||(Xr=h()([`
        `,`
      `])),(!a||a==="right"||a==="auto"&&!i)&&s)}},{hashPriority:"low"}),Ll=["className"],Ol=function(e){var t=e.className,n=D()(e,Ll),o=Nl(n),a=o.styles,i=o.cx;return(0,l.jsx)(Nn.Z,m()(m()({},n),{},{className:i(a.custom,t)}))},ou=null,Yr,qr,_r,eo,El=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=e.divider,a=e.position;return{menuWrapper:t(Yr||(Yr=h()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.colorBgElevated,n.borderRadiusLG,n.boxShadowSecondary),menuExtra:t(qr||(qr=h()([`
        padding: 10px 16px 4px;
        `,`
      `])),o&&t(a==="top"?_r||(_r=h()([`
              border-bottom: 1px solid `,`;
            `])):eo||(eo=h()([`
              border-top: 1px solid `,`;
            `])),n.colorSplit))}},{hashPriority:"low"}),Tl=["menuExtra","dropdownRender"],Zl=function(e){var t=e.menuExtra,n=e.dropdownRender,o=D()(e,Tl),a=t||{},i=a.position,s=i===void 0?"top":i,c=a.divider,g=c===void 0?!1:c,p=a.content,u=El({divider:g,position:s}),v=u.styles,y=(0,f.useCallback)(function(b){var S=f.cloneElement(b,{style:{boxShadow:"none",border:"none"}});if(!p)return n?(0,l.jsx)(V.Z,{className:v.menuWrapper,vertical:!0,children:n(S)}):b;var x=(0,l.jsx)(V.Z,{align:"center",className:v.menuExtra,children:p});return(0,l.jsxs)(V.Z,{className:v.menuWrapper,vertical:!0,children:[s==="top"&&x,S,s==="bottom"&&x]})},[p,n,s,v.menuExtra,v.menuWrapper]);return(0,l.jsx)(Be.Z,m()({dropdownRender:y},o))},no=Zl;no.Button=Be.Z.Button;var we=d(68191),Pl=d(41773),ae=d(6183),Il=d(14539),to,ro,oo,Rl=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{empty:e(to||(to=h()([`
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
    `])),t.controlHeight,t.colorTextTertiary)}}),Dl=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style"],Fl=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width"],zl=["key","name"],ao=function(e){var t=e.extra,n=e.expandIcon,o=e.icon,a=e.title,i=e.variant,s=e.defaultActive,c=e.empty,g=c===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":c,p=e.columns,u=p===void 0?[]:p,v=e.disabled,y=e.readOnly,b=e.addOneFieldDefault,S=e.disableRemoveWhenOneField,x=e.maxFileds,C=e.name,j=e.addParams,M=e.className,A=e.onRemove,L=e.fieldRemoveButton,O=L===void 0?!0:L,T=e.style,F=D()(e,Dl),B=Rl(),E=B.styles,w=(0,f.useRef)(),k=we.Z.useFormInstance(),R=we.Z.useWatch(C,k),Z=(0,f.useCallback)(function(){if(!j)return[];var I=typeof j=="function"?j():j;return[I.defaultValue,I.insertIndex]},[j]),N=(0,f.useCallback)(function(I){var P=k.getFieldValue([C,I]);return A==null?void 0:A(P)},[k,C,A]);return(0,f.useEffect)(function(){var I;if(b&&(!(k!=null&&k.getFieldValue(C))||(k==null||(I=k.getFieldValue(C))===null||I===void 0?void 0:I.length)===0)){var P;(P=w.current)===null||P===void 0||P.call.apply(P,[w].concat(Ve()(Z())))}},[b,Z,k,C]),(0,l.jsx)(Ye,{extra:t===void 0?C&&!y&&(0,l.jsx)(fe.Z,{title:x&&"\u6700\u591A\u6DFB\u52A0 ".concat(x," \u9879"),children:(0,l.jsx)(ce.ZP,{disabled:v||!!(x&&(R==null?void 0:R.length)===x),icon:(0,l.jsx)(Pl.Z,{}),onClick:function(P){var H;P.stopPropagation(),(H=w.current)===null||H===void 0||H.call.apply(H,[w].concat(Ve()(Z())))},size:"small",type:"text"})}):t,className:M,expandIcon:n,icon:o,title:a,variant:i,defaultActive:s,style:T,children:C?(0,l.jsx)(we.Z.List,m()(m()({name:C},F),{},{children:function(P,H){var q=H.add,Y=H.remove;return w.current=q,(0,l.jsx)(ae.Z,{className:E.list,columns:[].concat(Ve()(u.map(function(J){var re=J.label,he=J.name,be=J.render,Q=J.dependencies,K=J.rules,X=J.align,U=J.ellipsis,_=J.fixed,pe=J.responsive,bn=J.shouldCellUpdate,yn=J.width,Ge=D()(J,Fl);return{title:re,dataIndex:he,align:X,ellipsis:U,fixed:_,responsive:pe,shouldCellUpdate:bn,width:yn,render:function(Je,du,ye){var xn=P[ye],$d=xn.key,Vd=xn.name,Qd=D()(xn,zl),Ke=be==null?void 0:be(P[ye],ye);if(!Ke&&!Ge.noStyle)return(0,l.jsx)(V.Z,{align:"center",className:E.noFormItem,children:"\u65E0\u9700\u8BBE\u7F6E"});if(!he)return(0,l.jsx)(V.Z,{align:"center",className:E.noFormItem,children:Ke});var Xe={readOnly:y,disabled:v};return y===!0&&(Xe.showCount=!1,Xe.variant="borderless",Xe.placeholder="-"),(0,l.jsx)(we.Z.Item,m()(m()(m()({},Qd),{},{dependencies:typeof Q=="function"?Q(P[ye],ye):Q,name:[Vd,he],rules:typeof K=="function"?K(P[ye],ye):K},Ge),{},{children:Ke&&f.cloneElement(Ke,Xe)}),$d)}}})),[!y&&O!==!1&&{title:"",dataIndex:"del",render:function(re,he,be){var Q=P[be].name;return(0,l.jsx)(we.Z.Item,{children:(0,l.jsx)(ce.ZP,{disabled:v||S&&P.length===1,icon:(0,l.jsx)(ne.Z,{icon:Il.Z}),onClick:Ie()(ue()().mark(function K(){var X;return ue()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,N(Q);case 2:X=_.sent,X!==!1&&Y(Q);case 4:case"end":return _.stop()}},K)})),type:"text"})})}}]).filter(function(J){return!!J}),dataSource:P,locale:{emptyText:g},pagination:!1,rowHoverable:!1,size:"small"})}})):(0,l.jsx)("div",{className:E.empty,children:g})})},io=we.Z;io.CollapseList=ao;var Bl=function(e){return typeof e=="string"?document.querySelector("#".concat(e)):(e==null?void 0:e.current)||e},mn=":not([disabled]):not([readonly])",Hl=["text","password","search","tel","url","number","email",""].map(function(r){return'input[type="'.concat(r,'"]').concat(mn)}).join(", ")+", input:not([type])".concat(mn,", textarea").concat(mn),$l=function(e){var t,n=Bl(e);if(n){var o=(t=n.querySelector)===null||t===void 0?void 0:t.call(n,Hl);if(o!=null&&o.focus)return o.focus(),!0}},so=function(e){var t=(0,f.useState)(!1),n=$()(t,2),o=n[0],a=n[1];f.useEffect(function(){if(!(o||!e)){var i=$l(e);i&&a(!0)}},[e,o,a])},lo=function(e){var t,n=e.autoFocus,o=n===void 0?!0:n,a=(0,f.useRef)(null);return so(o?a:void 0),(0,l.jsx)("div",{className:e.className,id:e.id,ref:a,style:(t=e.style)!==null&&t!==void 0?t:{display:e.className?void 0:"contents"},children:e.children})},Vl=function(e){return function(t){var n=function(i){return(0,l.jsx)(lo,m()(m()({},e||{}),{},{children:(0,l.jsx)(t,m()({},i))}))},o=t.displayName||t.name||"Component";return n.displayName="withFormHelper(".concat(o,")"),n}},ie=d(54381),Ql="yunti-ui",co,uo,Ul=(0,z.kc)(function(r,e){var t=r.css,n=r.prefixCls,o=e.borderd,a=o===void 0?!0:o,i=e.footer,s=i===null||Array.isArray(i)&&i.length===0,c=t(co||(co=h()([`
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
      `])),a&&c)}},{hashPriority:"low"}),Gl=["className","borderd"],Wl=function(e){var t=e.className,n=e.borderd,o=n===void 0?!0:n,a=D()(e,Gl),i=Ul(m()({borderd:o},a)),s=i.styles,c=i.cx;return(0,l.jsx)(ie.Z,m()(m()({},a),{},{className:c(s.custom,"".concat(Ql,"-modal"),t)}))},se=Wl;se.useModal=ie.Z.useModal,se.destroyAll=ie.Z.destroyAll,se.config=ie.Z.config,se._InternalPanelDoNotUseOrYouWillBeFired=ie.Z._InternalPanelDoNotUseOrYouWillBeFired,se.info=ie.Z.info,se.success=ie.Z.success,se.error=ie.Z.error,se.warning=ie.Z.warning,se.warn=ie.Z.warn,se.confirm=ie.Z.confirm;var au=null,Jl=d(19480),Kl=d(37513),po,go,fo,mo,Xl=(0,z.kc)(function(r,e){var t=r.css,n=r.token,o=r.prefixCls,a=e.size,i=e.segmented,s=function(){return i?i!==!0?i.gap:!0:0}(),c=function(){if(i)return i!==!0?i.borderRadius:!0}(),g=function(){var S={small:n.sizeSM,middle:n.size,large:n.sizeLG};return typeof s=="string"?S[s]:s===!0?a?S[a]:S.middle:s||0},p=function(){var S={small:n.controlHeightSM,middle:n.controlHeight,large:n.controlHeightLG};if(c===!0)return a?S[a]:S.middle;if(c||c===0)return c},u=p()&&t(po||(po=h()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),p()),v=t(go||(go=h()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),g()),y=i===!0||i&&!i.bordered;return{custom:t(fo||(fo=h()([`
        `,`
        `,`
        `,`
      `])),u,v,y&&t(mo||(mo=h()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),o,o,n.colorPrimary))}},{hashPriority:"low"}),Yl=["className"],vo=Jl.ZP,ql=function(e){var t=e.className,n=D()(e,Yl);n.segmented&&(n.optionType="button");var o=Xl(n),a=o.styles,i=o.cx;return(0,l.jsx)(Kl.Z,m()(m()({},n),{},{className:i(a.custom,t)}))};vo.Group=ql;var iu=null,ho,_l=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{table:e(ho||(ho=h()([`
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
    `])),n,t.colorTextTertiary)}}),ec=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],bo=function(e){var t=e.rootStyle,n=e.rootClassName,o=e.icon,a=e.title,i=e.variant,s=e.defaultActive,c=e.extra,g=e.className,p=D()(e,ec),u=_l(),v=u.cx,y=u.styles;return(0,l.jsx)(Ye,{className:n,style:t,icon:o,title:a,variant:i,defaultActive:s,extra:c,children:(0,l.jsx)(ae.Z,m()({className:v(y.table,g),pagination:!1,rowHoverable:!1,size:"small"},p))})},nc=["columns"],le=function(e){var t=e.columns,n=D()(e,nc),o=(0,f.useMemo)(function(){return t==null?void 0:t.map(function(a){if(a.render)return a;if(a.ellipsis&&a.ellipsis!==!0&&a.ellipsis.showTitle||a.ellipsis===!0){var i=a.ellipsis===!0?{}:a.ellipsis;return m()(m()({},a),{},{ellipsis:{showTitle:!1},render:function(c){return c||c===0?(0,l.jsx)(fe.Z,m()(m()({},i),{},{placement:"topLeft",title:c,children:c})):"-"}})}return a.render||(a.render=function(s){return s!=null?s:"-"}),a})},[t]);return(0,l.jsx)(ae.Z,m()(m()({},n),{},{columns:o}))};le.displayName="Table",le.SELECTION_COLUMN=ae.Z.SELECTION_COLUMN,le.EXPAND_COLUMN=ae.Z.EXPAND_COLUMN,le.SELECTION_ALL=ae.Z.SELECTION_ALL,le.SELECTION_INVERT=ae.Z.SELECTION_INVERT,le.SELECTION_NONE=ae.Z.SELECTION_NONE,le.Column=ae.Z.Column,le.ColumnGroup=ae.Z.ColumnGroup,le.Summary=ae.Z.Summary,le.Collapse=bo;var su=null,tc=d(47021),yo=d(79950),rc=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],xo,So,Co,oc=(0,z.kc)(function(r){var e=r.css;return{container:e(xo||(xo=h()([`
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
    `])))}}),ac=(0,f.forwardRef)(function(r,e){var t=r.className,n=r.style,o=r.classNames,a=r.expand,i=a===void 0?!0:a,s=r.setExpand,c=r.bottomAddons,g=r.topAddons,p=r.onSizeChange,u=r.heights,v=r.onSend,y=D()(r,rc),b=oc(),S=b.styles;return(0,l.jsx)(tc.Z,{className:t,classNames:o,fullscreen:i,headerHeight:u==null?void 0:u.headerHeight,maxHeight:u==null?void 0:u.maxHeight,minHeight:u==null?void 0:u.minHeight,onSizeChange:p,placement:"bottom",size:{height:u==null?void 0:u.inputHeight,width:"100%"},style:m()({zIndex:10},n),children:(0,l.jsxs)("section",{className:S.container,style:{minHeight:u==null?void 0:u.minHeight},children:[g,(0,l.jsx)("div",{className:S.textareaContainer,children:(0,l.jsx)(yo.Z,m()({className:S.textarea,onSend:function(){v==null||v(),s==null||s(!1)},ref:e,type:"pure"},y))}),c]})})}),ic=(0,f.memo)(ac),sc=d(33190),lc=d(71496),cc=d(47876),dc=d(85704),uc=d(65027),pc=d(98202),gc=d(83593),fc=d(71375),mc=d(21338),vc=d(82877),vn=d(70190),hc=d(37880),jo=d(6335),bc=d(45122),ko=d(65720),wo=(0,f.memo)(function(r){var e=r.value,t=r.onChange,n=r.classNames,o=n===void 0?{}:n,a=r.onEditingChange,i=r.editing,s=r.openModal,c=r.onOpenChange,g=r.placeholder,p=r.showEditWhenEmpty,u=p===void 0?!1:p,v=r.styles,y=r.height,b=r.inputType,S=r.editButtonSize,x=r.text,C=r.fullFeaturedCodeBlock,j=r.model,M=r.fontSize,A=r.markdownProps,L=(0,ko.Z)(!1,{onChange:a,value:i}),O=$()(L,2),T=O[0],F=O[1],B=(0,ko.Z)(!1,{onChange:c,value:s}),E=$()(B,2),w=E[0],k=E[1],R=y==="auto",Z=(0,l.jsx)(hc.Z,{className:o==null?void 0:o.input,classNames:{textarea:o==null?void 0:o.textarea},defaultValue:e,editButtonSize:S,height:y,onCancel:function(){return F(!1)},onConfirm:function(I){t==null||t(I),F(!1)},placeholder:g,style:v==null?void 0:v.input,text:x,textareaClassname:o==null?void 0:o.input,type:b});return!e&&u?Z:(0,l.jsxs)(l.Fragment,{children:[!w&&T?Z:(0,l.jsx)(jo.Z,m()(m()({className:o==null?void 0:o.markdown,fontSize:M,fullFeaturedCodeBlock:C,style:m()({height:R?"unset":y},v==null?void 0:v.markdown),variant:"chat"},A),{},{children:e||g||""})),w&&(0,l.jsx)(bc.Z,{editing:T,extra:j==null?void 0:j.extra,footer:j==null?void 0:j.footer,height:y,onChange:t,onEditingChange:F,onOpenChange:function(I){k(I),F(!1)},open:w,placeholder:g,text:x,value:e})]})}),Ao,Mo,No,Lo,Oo,Eo,To,Zo,Po,Io,Ro,Do,Fo,zo,Bo,Ho,$o,Vo,yc=(0,z.kc)(function(r,e){var t=r.cx,n=r.css,o=r.token,a=r.isDarkMode,i=r.responsive,s=e.placement,c=e.type,g=e.title,p=e.primary,u=e.avatarSize,v=e.editing,y=e.time,b=n(Ao||(Ao=h()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),p?a?o.colorFill:o.colorBgElevated:a?o.colorFillSecondary:o.colorBgContainer,o.borderRadiusLG,o.motionEaseOut),S=n(Mo||(Mo=h()([`
      padding-block-start: `,`;
    `])),g?0:"6px"),x=n(No||(No=h()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),o.motionEaseOut),C=c==="block"?b:S,j=v&&n(Lo||(Lo=h()([`
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
      `])),u,u),avatarGroupContainer:n(Zo||(Zo=h()([`
        width: `,`px;
      `])),u),container:t(c==="pure"&&x,n(Po||(Po=h()([`
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
        `])),o.motionEaseOut,i.mobile,c==="pure"?"12px":"6px")),editingContainer:t(j,n(Io||(Io=h()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),o.colorBorderSecondary,o.colorBorder),c==="pure"&&n(Ro||(Ro=h()([`
            background: `,`;
            border-radius: `,`px;
          `])),o.colorFillQuaternary,o.borderRadius)),editingInput:n(Do||(Do=h()([`
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
      `])),s==="right"?"-4px":"unset",s==="left"?"-4px":"unset",o.colorBgLayout,o.colorPrimary),message:t(C,n(Bo||(Bo=h()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),i.mobile)),messageContainer:t(j,n(Ho||(Ho=h()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),y?-16:0,i.mobile)),messageContent:t(j,n($o||($o=h()([`
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
      `])),o.colorTextDescription,s==="left"?"left":"right")}}),xc=(0,f.memo)(function(r){var e=r.editing,t=r.onChange,n=r.onEditingChange,o=r.text,a=r.message,i=r.placement,s=r.messageExtra,c=r.renderMessage,g=r.type,p=r.primary,u=r.onDoubleClick,v=r.fontSize,y=r.markdownProps,b=r.markdownClassname,S=yc({editing:e,placement:i,primary:p,type:g}),x=S.cx,C=S.styles,j=(0,vn.F)(),M=j.mobile,A=(0,l.jsx)(wo,{classNames:{input:C.editingInput,markdown:b},editButtonSize:"small",editing:e,fontSize:v,fullFeaturedCodeBlock:!0,markdownProps:y,onChange:t,onEditingChange:n,openModal:M?e:void 0,text:o,value:a?String(a).trim():""}),L=c?c(A):A;return(0,l.jsxs)(de.D,{className:x(C.message,e&&C.editingContainer),onDoubleClick:u,children:[L,s&&!e?(0,l.jsx)("div",{className:C.messageExtra,children:s}):null]})}),Sc=xc,Cc=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname"],Qo=32,jc=(0,f.memo)(function(r){var e=r.avatarAddon,t=r.onAvatarClick,n=r.avatarProps,o=r.actions,a=r.className,i=r.primary,s=r.loading,c=r.message,g=r.placement,p=g===void 0?"left":g,u=r.type,v=u===void 0?"block":u,y=r.avatar,b=r.error,S=r.showTitle,x=r.time,C=r.editing,j=r.onChange,M=r.onEditingChange,A=r.messageExtra,L=r.renderMessage,O=r.text,T=r.errorMessage,F=r.onDoubleClick,B=r.fontSize,E=r.markdownProps,w=r.markdownClassname,k=D()(r,Cc),R=(0,vn.F)(),Z=R.mobile,N=(0,vc.y)({editing:C,placement:p,primary:i,showTitle:S,time:x,title:y.title,type:v}),I=N.cx,P=N.styles;return(0,l.jsxs)(de.D,m()(m()({className:I(P.container,a),direction:p==="left"?"horizontal":"horizontal-reverse",gap:Z?6:12},k),{},{children:[(0,l.jsx)(pc.Z,m()(m()({},n),{},{addon:e,avatar:y,loading:s,onClick:t,placement:p,size:Z?Qo:void 0})),(0,l.jsxs)(de.D,{align:p==="left"?"flex-start":"flex-end",className:P.messageContainer,children:[(0,l.jsx)(mc.Z,{avatar:y,placement:p,showTitle:S,time:x}),(0,l.jsxs)(de.D,{align:p==="left"?"flex-start":"flex-end",className:P.messageContent,direction:v==="block"?p==="left"?"horizontal":"horizontal-reverse":"vertical",gap:8,children:[b?(0,l.jsx)(fc.Z,{error:b,message:T,placement:p}):(0,l.jsx)(Sc,{editing:C,fontSize:B,markdownClassname:w,markdownProps:E,message:c,messageExtra:A,onChange:j,onDoubleClick:F,onEditingChange:M,placement:p,primary:i,renderMessage:L,text:O,type:v}),(0,l.jsx)(uc.Z,{actions:o,editing:C,placement:p,type:v})]})]}),Z&&v==="block"&&(0,l.jsx)(gc.Z,{borderSpacing:Qo})]}))}),kc=d(53913),Uo=d(7947),wc=d(62738),Ac=d(8933),Go=d(66321),Mc=d(97601),Nc=d(68537),Ne=d(38794),Lc=d(76940),Oc=d(49505),te={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}},Ec=d(98644),Tc=function(e){var t=e.type,n=e.scale,o=e.appearance,a=(0,Ec.Z)(t),i=o==="dark";return W()(W()(W()(W()(W()(W()(W()(W()(W()(W()({},"color".concat(a,"Bg"),n[o][1]),"color".concat(a,"BgHover"),n[o][2]),"color".concat(a,"Border"),n[o][4]),"color".concat(a,"BorderHover"),n[o][i?5:3]),"color".concat(a,"Hover"),n[o][i?10:8]),"color".concat(a),n[o][9]),"color".concat(a,"Active"),n[o][i?7:10]),"color".concat(a,"TextHover"),n[o][i?10:8]),"color".concat(a,"Text"),n[o][9]),"color".concat(a,"TextActive"),n[o][i?7:10])},Zc=function(e){var t=e.scale,n=e.appearance;return{colorBgContainer:n==="dark"?t[n][1]:t[n][0],colorBgElevated:n==="dark"?t[n][2]:t[n][0],colorBgLayout:n==="dark"?t[n][0]:t[n][1],colorBgMask:t.lightA[8],colorBgSpotlight:t[n][5],colorBorder:t[n][4],colorBorderSecondary:t[n][3],colorFill:t["".concat(n,"A")][3],colorFillQuaternary:t["".concat(n,"A")][0],colorFillSecondary:t["".concat(n,"A")][2],colorFillTertiary:t["".concat(n,"A")][1],colorText:t[n][12],colorTextQuaternary:t[n][6],colorTextSecondary:t[n][10],colorTextTertiary:t[n][8]}},Pc={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},Wo=function(e){var t=e?"dark":"light",n=te.gray[t][11],o=te.gray[t][7],a=e?te.red[t][9]:te.volcano[t][9],i=e?te.gold[t][9]:te.orange[t][9],s=e?te.lime[t][9]:te.green[t][9],c=e?te.blue[t][9]:te.geekblue[t][9];return{colors:{"editor.foreground":n},name:t,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:s},enumMember:{foreground:c},macro:{foreground:s},"parameter.label:dart":{foreground:o},"property:dart":{foreground:s},tomlArrayKey:{foreground:a},"variable.constant":{foreground:s},"variable.defaultLibrary":{foreground:a},"variable:dart":{foreground:s}},tokenColors:[{scope:"meta.embedded",settings:{foreground:o}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:n}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:c}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:s}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:n}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:o}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:a}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:a}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:o}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:i}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:a}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:n}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:c}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:n}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:c}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:s}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:o}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:o}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:a}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:i}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:s}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:n}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:n}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:o}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:o}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:i}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:a}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:s}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:a}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:a}},{name:"java source",scope:"source.java",settings:{foreground:n}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:o}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:i}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:a}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:c}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:n}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:c}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:c}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:c}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:s}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:c}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:s}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:n}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:s}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:c}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:a}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:a}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:n}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:s}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:c}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:n}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:s}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:i}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:o}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:c}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:c}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:c}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:n}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:c}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:c}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:o}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:c}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:c}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:c}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:s}},{name:"python type",scope:"support.type.python",settings:{foreground:c}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:c}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:s}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:o}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:i}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:s}},{name:"Operators",scope:"keyword.operator",settings:{foreground:o}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:c}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:c}},{name:"Keywords",scope:"keyword",settings:{foreground:c}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:a}},{name:"Variables",scope:"variable",settings:{foreground:n}},{name:"Variables",scope:"variable.c",settings:{foreground:o}},{name:"Language variables",scope:"variable.language",settings:{foreground:a}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:o}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:a}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:c}},{name:"Packages",scope:"token.package",settings:{foreground:o}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:i}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:a}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:a}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:a}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:a}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:n}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:a}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:c}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:s}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:i}},{name:"Storage",scope:"storage",settings:{foreground:c}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:c}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:c}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:a}},{name:"Support",scope:"support.function",settings:{foreground:c}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:n}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:o}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:s}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:o}},{name:"Strings",scope:"string",settings:{foreground:s}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:c}},{name:"Integers",scope:"constant.numeric",settings:{foreground:s}},{name:"Constants",scope:"constant",settings:{foreground:s}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:s}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:n}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:s}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:i}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:s}},{name:"Selector",scope:"meta.selector",settings:{foreground:c}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:a}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:i}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:n}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:s}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:a}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:c}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:n}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:n}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:i}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:c}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:c}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:o}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:n}},{name:"Broken",scope:"invalid.broken",settings:{foreground:n}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:n}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:s}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:s}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:n}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:c}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:c}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:a}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:c}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:c}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:o}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:o}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:a}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:a}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:i}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:o}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:s}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:s}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:i}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:c}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:c}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:c}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:c}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:i}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:c}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:o}},{name:"brace function",scope:"function.brace",settings:{foreground:o}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:o}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:c}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:c}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:c}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:s}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:s}},{name:"sass selector",scope:"selector.sass",settings:{foreground:n}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:a}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:o}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:a}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:n}},{scope:"token.info-token",settings:{foreground:i}},{scope:"token.warn-token",settings:{foreground:s}},{scope:"token.error-token",settings:{foreground:a}},{scope:"token.debug-token",settings:{foreground:c}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:c}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:o}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:c}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:i}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:a}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:n}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:n}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:s}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:s}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:s}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:s}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:c}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:a}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:c}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:a}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:c}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:s}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:c}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:n}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:c}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:a}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:n}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:c}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:n}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:s}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:n}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:a}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:a}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:i}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:n}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:s}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:a}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:c}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:n}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:a}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:a}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:c}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:n}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:c}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:c}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:o}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:s}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:o}},{name:"link",scope:["constant.character.xi"],settings:{foreground:i}},{name:"accent",scope:["accent.xi"],settings:{foreground:i}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:s}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:n}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:o}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:a}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:n}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:o}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:o}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:o}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:c}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:a}},{scope:["entity.name.variable.field.cs"],settings:{foreground:n}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:n}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:s}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:a}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:o}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:a}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:n}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:a}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:n}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:o}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:c}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:s}},{scope:["constant.character.escape"],settings:{foreground:c}},{scope:["string.regexp"],settings:{foreground:n}},{scope:["log.info"],settings:{foreground:s}},{scope:["log.warning"],settings:{foreground:a}},{scope:["log.error"],settings:{foreground:n}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:t}},hn=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"],Jo="txt",Ue=[Jo],Ko,Ic=function(){var r=Ie()(ue()().mark(function e(t){var n,o;return ue()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=Ko,o=t.toLowerCase(),!(n&&Ue.includes(o))){i.next=4;break}return i.abrupt("return",n);case 4:return hn.includes(o)&&!Ue.includes(o)&&Ue.push(o),i.next=7,(0,Lc.e$)({langs:Ue,themes:[Wo(!0),Wo(!1)]});case 7:return n=i.sent,Ko=n,i.abrupt("return",n);case 10:case"end":return i.stop()}},e)}));return function(t){return r.apply(this,arguments)}}(),Rc=function(e,t,n){return(0,Oc.ZP)([t==null?void 0:t.toLowerCase(),n?"dark":"light",e].join("-"),Ie()(ue()().mark(function o(){var a,i,s;return ue()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,a=t.toLowerCase(),g.next=4,Ic(a);case 4:return i=g.sent,s=i==null?void 0:i.codeToHtml(e,{lang:hn.includes(a)?a:Jo,theme:n?"dark":"light",transformers:[(0,Ne.hu)(),(0,Ne.d0)(),(0,Ne.dY)(),(0,Ne.Eu)(),(0,Ne.p4)()]}),g.abrupt("return",s);case 9:return g.prev=9,g.t0=g.catch(0),g.abrupt("return","");case 12:case"end":return g.stop()}},o,null,[[0,9]])})),{revalidateOnFocus:!1})},Xo,Yo,qo,Dc=(0,z.kc)(function(r){var e=r.css,t=r.token,n=r.cx,o=r.prefixCls,a=r.stylish,i="".concat(o,"-highlighter");return{loading:n(a.blur,e(Xo||(Xo=h()([`
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
    `])),t.colorTextDescription)}}),_o=(0,f.memo)(function(r){var e=r.children,t=r.language,n=r.className,o=r.style,a=Dc(),i=a.styles,s=a.cx,c=(0,ln.r)(),g=c.isDarkMode,p=Rc(e.trim(),t,g),u=p.data,v=p.isLoading;return(0,l.jsxs)(l.Fragment,{children:[v||!u?(0,l.jsx)("div",{className:s(i.unshiki,n),style:o,children:(0,l.jsx)("pre",{children:(0,l.jsx)("div",{children:e.trim()})})}):(0,l.jsx)("div",{className:s(i.shiki,n),dangerouslySetInnerHTML:{__html:u},style:o}),v&&(0,l.jsx)(de.D,{align:"center",className:i.loading,gap:8,horizontal:!0,justify:"center",children:(0,l.jsx)(ne.Z,{icon:Fn.Z,spin:!0})})]})}),ea,na,ta,ra,oa,aa,ia,sa,la=(0,z.kc)(function(r,e){var t=r.token,n=r.css,o=r.cx,a=r.prefixCls,i=r.stylish,s="".concat(a,"-highlighter"),c="".concat(s,"-hover-btn"),g="".concat(s,"-hover-lang"),p=n(ea||(ea=h()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),e==="block"?t.colorFillTertiary:"transparent",e==="block"?"transparent":t.colorBorder,e==="block"?t.colorFillTertiary:t.colorFillQuaternary);return{button:o(c,n(na||(na=h()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),e==="pure"?0:"12px",e==="pure"?0:"12px")),container:o(s,e!=="pure"&&p,n(ta||(ta=h()([`
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
      `])),t.colorFillQuaternary),lang:o(g,i.blur,n(oa||(oa=h()([`
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
      `])),t.colorTextDescription,a,t.colorTextDescription)}}),Fc=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],zc=hn.map(function(r){return{label:r,value:r.toLowerCase()}}),ca=(0,f.memo)(function(r){var e=r.children,t=r.language,n=t===void 0?"markdown":t,o=r.className,a=r.style,i=r.allowChangeLanguage,s=i===void 0?!1:i,c=r.fileName,g=r.icon,p=r.contentStyle,u=D()(r,Fc),v=(0,f.useState)(!0),y=$()(v,2),b=y[0],S=y[1],x=(0,f.useState)(n||"markdown"),C=$()(x,2),j=C[0],M=C[1],A=la("block"),L=A.styles,O=A.cx,T=O(L.container,o);return(0,l.jsxs)("div",m()(m()({className:T,"data-code-type":"highlighter",style:a},u),{},{children:[(0,l.jsxs)(de.D,{align:"center",className:L.header,horizontal:!0,justify:"space-between",children:[(0,l.jsx)(Ac.Z,{icon:b?Mc.Z:Nc.Z,onClick:function(){return S(!b)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),s&&!c?(0,l.jsx)(Go.default,{className:L.select,onSelect:M,options:zc,size:"small",suffixIcon:!1,value:j.toLowerCase(),variant:"borderless"}):(0,l.jsxs)(de.D,{align:"center",className:L.select,gap:2,horizontal:!0,children:[g,(0,l.jsx)("span",{children:c||j})]}),(0,l.jsx)(Uo.Z,{content:e,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,l.jsx)(_o,{language:j==null?void 0:j.toLowerCase(),style:b?p:m()(m()({},p),{},{height:0,overflow:"hidden"}),children:e})]}))}),Bc=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap"],Hc=(0,f.memo)(function(r){var e=r.fullFeatured,t=r.copyButtonSize,n=t===void 0?"site":t,o=r.children,a=r.language,i=r.className,s=r.style,c=r.copyable,g=c===void 0?!0:c,p=r.showLanguage,u=p===void 0?!0:p,v=r.type,y=v===void 0?"block":v,b=r.spotlight,S=r.allowChangeLanguage,x=r.fileName,C=r.icon,j=r.contentStyle,M=r.wrap,A=D()(r,Bc),L=la(y),O=L.styles,T=L.cx,F=T(O.container,!M&&O.nowrap,i);return e?(0,l.jsx)(ca,m()(m()({allowChangeLanguage:S,className:i,contentStyle:j,fileName:x,icon:C,language:a,style:s},A),{},{children:o})):(0,l.jsxs)("div",m()(m()({className:F,"data-code-type":"highlighter",style:s},A),{},{children:[b&&(0,l.jsx)(kc.Z,{size:240}),g&&(0,l.jsx)(Uo.Z,{className:O.button,content:o,placement:"left",size:n}),u&&a&&(0,l.jsx)(wc.Z,{className:O.lang,children:a.toLowerCase()}),(0,l.jsx)("div",{className:O.scroller,children:(0,l.jsx)(_o,{language:a==null?void 0:a.toLowerCase(),style:j,children:o})})]}))}),$c=function(){try{var e,t;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((e=window)===null||e===void 0?void 0:e.SpeechRecognition)||((t=window)===null||t===void 0?void 0:t.webkitSpeechRecognition)}catch(n){}},Vc=function(){try{var e,t;return(globalThis==null?void 0:globalThis.speechSynthesis)||((e=window)===null||e===void 0?void 0:e.speechSynthesis)||((t=window)===null||t===void 0?void 0:t.webkitSpeechSynthesis)}catch(n){}},Qc=function(){try{var e,t;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((e=window)===null||e===void 0?void 0:e.SpeechSynthesisUtterance)||((t=window)===null||t===void 0?void 0:t.webkitSpeechSynthesisUtterance)}catch(n){}},lu=$c(),ee=Vc(),da=Qc(),Uc=["voice","rate","pitch"],Gc=function(e,t){var n=t.voice,o=t.rate,a=t.pitch,i=D()(t,Uc),s=(0,f.useState)(ee==null?void 0:ee.getVoices()),c=$()(s,2),g=c[0],p=c[1],u=(0,f.useState)(e),v=$()(u,2),y=v[0],b=v[1],S=(0,f.useState)(!1),x=$()(S,2),C=x[0],j=x[1],M=(0,f.useMemo)(function(){if(da){var O=new da(y);return O.voice=g.find(function(T){return T.name===n}),O.onstart=function(){return j(!0)},O.onend=function(){return j(!1)},a&&(O.pitch=a*10),o&&(O.rate=o*10),O}},[y,g,o,a,n]);(0,f.useEffect)(function(){ee&&(ee.onvoiceschanged=function(){p(ee==null?void 0:ee.getVoices())},ee.onstart=function(){return j(!0)},ee.onend=function(){return j(!1)})},[]);var A=(0,f.useCallback)(function(){var O;i==null||(O=i.onStart)===null||O===void 0||O.call(i),ee==null||ee.speak(M)},[i,M]),L=(0,f.useCallback)(function(){var O,T;i==null||(O=i.onStop)===null||O===void 0||O.call(i),(T=speechSynthesis)===null||T===void 0||T.cancel(),j(!1)},[i]);return{isLoading:C,setText:b,start:A,stop:L}},cu=null,ua,pa,ga,fa,ma,va,ha,ba,Wc=(0,z.kc)(function(r,e){var t=r.css,n=(0,z.F4)(ua||(ua=h()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),o=(0,z.F4)(pa||(pa=h()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),a=(0,z.F4)(ga||(ga=h()([`
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
    `])),o),animate3:t(ba||(ba=h()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),a)}}),Jc=function(e){var t=e.height,n=e.width,o=e.lineColor,a=e.bgColor,i=Wc({height:t,width:n,lineColor:o,bgColor:a}),s=i.styles,c=i.cx;return(0,l.jsxs)("div",{className:s.box,children:[(0,l.jsx)("div",{className:c(s.line,s.animate1)}),(0,l.jsx)("div",{className:c(s.line,s.animate2)}),(0,l.jsx)("div",{className:c(s.line,s.animate3)}),(0,l.jsx)("div",{className:c(s.line,s.animate2)}),(0,l.jsx)("div",{className:c(s.line,s.animate1)}),(0,l.jsx)("div",{className:c(s.line,s.animate2)}),(0,l.jsx)("div",{className:c(s.line,s.animate1)})]})},Kc=d(77314),Xc=d(24934),Yc=d(72076),qc=d(52124),_c=d(34738),ed=d(14192),nd=d(50658),td=d(34817),rd=d(33443),od=d(22669),ad=d(86751),id=d(98872),sd=d(1196),ld=d(43040),cd=d(5024),dd=d(93424),ud=d(8827),pd=d(80649),gd=d(53350),fd=d(54887),md=d(25600),vd=d(46104),hd=d(95935),bd=d(70940),yd=d(14444),xd=d(43869),Sd=d(40901),Cd=d(3029),jd=d(8561),kd=d(72121),wd=d(45468),Ad=d(20449),Md=d(74878),Nd=d(7448),Ld=d(82028),Od=d(82121),Ed=d(25951),Td=d(96753),Zd=d(91272),Pd=d(99641),Id=d(63605),Rd=d(93793),Dd=d(49293),Fd=d(43043),zd=d(31273),Bd=d(23293),Hd=d(28519)}}]);
