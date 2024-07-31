"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3233],{63233:function(Mc,yn,d){d.r(yn),d.d(yn,{Affix:function(){return Pl.Z},Alert:function(){return Nr},Anchor:function(){return Dl.Z},AntdMentions:function(){return Rl.Z},App:function(){return Rr},AutoComplete:function(){return Il.Z},Avatar:function(){return cn.C},BackTop:function(){return Fl.Z},Badge:function(){return Ft.Z},BaseMonacoEditor:function(){return ln},Breadcrumb:function(){return Nt.Z},Button:function(){return se.ZP},Calendar:function(){return Bl.Z},Card:function(){return Os.Z},Carousel:function(){return zl.Z},Cascader:function(){return Hl.Z},ChatInputActionBar:function(){return ul.Z},ChatInputArea:function(){return dl},ChatInputAreaInner:function(){return so.Z},ChatSendButton:function(){return pl.Z},Checkbox:function(){return $l.Z},Col:function(){return un.Z},Collapse:function(){return pn.Z},CollapseGroup:function(){return We},CollapseTable:function(){return io},ColorPicker:function(){return Vl.Z},ConfigContext:function(){return Ae},ConfigProvider:function(){return Bo},DatePicker:function(){return Ql.default},Descriptions:function(){return dn},Divider:function(){return It},DragPanel:function(){return Go},Drawer:function(){return Zs},Dropdown:function(){return Qr},Empty:function(){return Wn.Z},Flex:function(){return P.Z},FloatButton:function(){return Ul.Z},Form:function(){return Kr},FormCollapseList:function(){return Wr},FormHelper:function(){return Yr},FullFeaturedHighlighter:function(){return No},Grid:function(){return Gl.ZP},HeaderButtonGroup:function(){return $t},Highlighter:function(){return Zl},Image:function(){return Jl.Z},Input:function(){return Wl.Z},InputNumber:function(){return Ar.Z},Layout:function(){return Kl.Z},List:function(){return Xl.Z},LogViewer:function(){return ra},Logo:function(){return Yo},Markdown:function(){return Cc.Z},Mentions:function(){return ei},Menu:function(){return Yl.Z},MobileChatInputArea:function(){return fl.Z},MobileChatSendButton:function(){return gl.Z},Modal:function(){return re},MonacoController:function(){return mt},MonacoDiffEditor:function(){return bi},MonacoEditor:function(){return vi},NotificationGlobalStyle:function(){return Tr},Page:function(){return xe},Pagination:function(){return _l.Z},Popconfirm:function(){return ec.Z},Popover:function(){return nc.Z},ProCard:function(){return ze},Progress:function(){return tc.Z},QRCode:function(){return rc.Z},Radio:function(){return oo},Rate:function(){return oc.Z},Result:function(){return Et.ZP},Row:function(){return kr.Z},Segmented:function(){return ac.Z},Select:function(){return fo.default},Skeleton:function(){return fe.Z},Slider:function(){return wr.Z},SliderInput:function(){return vs},Space:function(){return Fe.Z},Spin:function(){return ic.Z},Statistic:function(){return sc.Z},Status:function(){return Ht},Steps:function(){return lc.Z},Switch:function(){return cc.Z},SyntaxHighlighter:function(){return jc.Z},Table:function(){return oe},Tabs:function(){return dc.Z},Tag:function(){return uc.Z},TimePicker:function(){return gc.Z},Timeline:function(){return fc.Z},Tooltip:function(){return pe.Z},Tour:function(){return mc.Z},Transfer:function(){return vc.Z},Tree:function(){return bc.Z},TreeSelect:function(){return hc.Z},Typography:function(){return Ze},Upload:function(){return yc.Z},Watermark:function(){return Sc.Z},colorScales:function(){return _},colors:function(){return _},generateColorNeutralPalette:function(){return kl},generateColorPalette:function(){return jl},message:function(){return ql.ZP},neutralColorScales:function(){return wl},notification:function(){return Ms},theme:function(){return pc.Z},useAutoFocus:function(){return Xr},useCdnFn:function(){return kn},useLink:function(){return wn},useResponsive:function(){return kc.F},useTheme:function(){return I.Fg},useThemeMode:function(){return on.r},version:function(){return xc.Z},withFormHelper:function(){return Js}});var Oo=d(26068),u=d.n(Oo),Eo=d(67825),O=d.n(Eo),To=d(34013),m=d(75271),Zo=d(53649),b=d.n(Zo),I=d(69049),xn,Po=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(xn||(xn=b()([`
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
    `])),t.margin,n,t.paddingSM,t.paddingSM,t.paddingSM,t.fontSize,t.padding,t.padding,t.paddingSM,t.paddingSM,t.paddingXS,t.colorBgContainer)}}),l=d(52676),Do=["className","variant"],Ro=To.Z.Group,We=function(e){var t=e.className,n=e.variant,a=O()(e,Do),o=Po(),i=o.styles,s=o.cx;return(0,l.jsx)(Ro,u()({className:s(i.root,t),collapsible:n==="pure"?"icon":"header",variant:n},a))},Sn=d(56264),Io="https://unpkg.com",Fo="https://registry.npmmirror.com",Cn=function(e){var t=e.pkg,n=e.version,a=n===void 0?"latest":n,o=e.path,i=e.proxy;switch(i){case"unpkg":return(0,Sn.Z)(Io,"".concat(t,"@").concat(a),o);default:return(0,Sn.Z)(Fo,t,a,"files",o)}},Ae=(0,m.createContext)(null),Bo=(0,m.memo)(function(r){var e=r.children,t=r.config;return(0,l.jsx)(Ae.Provider,{value:t,children:e})}),jn=function(e){var t=e.pkg,n=e.version,a=e.path;return Cn({path:a,pkg:t,proxy:"aliyun",version:n})},kn=function(){var e=(0,m.useContext)(Ae);return e?(e==null?void 0:e.proxy)!=="custom"?function(t){var n=t.pkg,a=t.version,o=t.path;return Cn({path:o,pkg:n,proxy:e.proxy,version:a})}:(e==null?void 0:e.customCdnFn)||jn:jn},wn=function(){var e=(0,m.useContext)(Ae);return e==null?void 0:e.Link},zo=d(48305),V=d.n(zo),Ho=d(97157),An=d(85660),P=d(71414),se=d(44295),$o=d(84569),Vo=d.n($o),Ln,Mn,Nn,On,En,Qo=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(Ln||(Ln=b()([`
      overflow: hidden;
    `]))),wrapper:e(Mn||(Mn=b()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),t.marginLG),content:e(Nn||(Nn=b()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.borderRadiusLG,t.boxShadowSecondary),dragWrapper:e(On||(On=b()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:e(En||(En=b()([`
      cursor: move;
    `])))}}),Uo=["title","classNames","defaultPosition","onPositionChange"],Go=(0,m.memo)(function(r){var e=r.title,t=r.classNames,n=t===void 0?{}:t,a=r.defaultPosition,o=r.onPositionChange,i=O()(r,Uo),s=Qo(),c=s.styles,p=s.cx,f=(0,m.useState)({left:0,top:0,bottom:0,right:0}),g=V()(f,2),v=g[0],y=g[1],h=(0,m.useRef)(null),S=function(k,j){var N,A=window.document.documentElement,L=A.clientWidth,$=A.clientHeight,D=(N=h.current)===null||N===void 0?void 0:N.getBoundingClientRect();D&&y({left:-D.left+j.x,right:L-(D.right-j.x),top:-D.top+j.y,bottom:$-(D.bottom-j.y)})};return(0,l.jsx)(An.Z,u()(u()({},i),{},{classNames:u()(u()({},n),{},{wrapper:p(c.wrapper,n.wrapper),content:p(c.content,n.content)}),destroyOnClose:!0,drawerRender:function(k){return(0,l.jsx)(Vo(),{bounds:v,defaultPosition:a,handle:".".concat(c.dragHandle),nodeRef:h,onStart:function(N,A){return S(N,A)},onStop:function(N,A){o==null||o({x:A.x,y:A.y})},children:(0,l.jsx)("div",{className:c.dragWrapper,ref:h,children:k})})},mask:!1,rootClassName:c.root,title:(0,l.jsxs)(P.Z,{align:"center",className:c.dragHandle,children:[(0,l.jsx)(P.Z,{flex:2,children:e}),(0,l.jsx)(P.Z,{children:(0,l.jsx)(se.ZP,{className:c.dragHandle,icon:(0,l.jsx)(Ho.Z,{}),type:"text"})})]})}))}),Le=d(90142),Jo=d(36075),Ke=d.n(Jo),Wo=(0,m.memo)(function(r){var e=Object.assign({},(Ke()(r),r));return(0,l.jsx)("svg",u()(u()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},e),{},{children:(0,l.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),Tn=(0,m.memo)(function(r){var e=Object.assign({},(Ke()(r),r));return(0,l.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},e),{},{children:[(0,l.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,l.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,l.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),Zn=(0,m.memo)(function(r){var e=Object.assign({},(Ke()(r),r));return(0,l.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,l.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,l.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,l.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,l.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,l.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,l.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,l.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),Pn,Ko=(0,I.kc)(function(r){var e=r.css;return{extraTitle:e(Pn||(Pn=b()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),Xo=["type","size","style","extra","className"],Yo=(0,m.memo)(function(r){var e=r.type,t=e===void 0?"img":e,n=r.size,a=n===void 0?32:n,o=r.style,i=r.extra,s=r.className,c=O()(r,Xo),p=(0,I.Fg)(),f=Ko(),g=f.styles,v;switch(t){case"text":{v=(0,l.jsx)(Zn,u()({className:s,height:a,style:o,width:a*2.9375},c));break}case"combine":{v=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Tn,u()({height:a,style:o,width:a},c)),(0,l.jsx)(Zn,{style:{height:a,marginLeft:Math.round(a/4),width:"auto"}})]});break}case"img":default:{v=(0,l.jsx)(Tn,u()({height:a,style:o,width:a},c));break}}if(!i)return v;var y=Math.round(a/3*1.9);return(0,l.jsxs)(Le.D,u()(u()({align:"center",className:s,horizontal:!0,style:o},c),{},{children:[v,(0,l.jsx)(Wo,{style:{color:p.colorFill,height:y,width:y}}),(0,l.jsx)("div",{className:g.extraTitle,style:{fontSize:y},children:i})]}))}),ae=d(71617),Dn=d(50999),qo=d(41117),_o=d(45798),ea=d(3548),Rn,In,na=(0,I.kc)(function(r){var e=r.css,t=r.token,n="#222222";return{root:e(Rn||(Rn=b()([`
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
          background-color: `,`;
          border-radius: `,`px;
          .log-number {
            margin-right: 0;
          }
          .log-content {
            margin-left: 15px;
          }
        }
      `])),n,t.borderRadiusLG,t.marginXXS,t.paddingXS,n,t.borderRadiusLG,t.borderRadiusLG,t.borderRadius,t.borderRadius,n,t.borderRadiusLG),searchBarIcon:e(In||(In=b()([`
        font-size: 16px;
      `])))}},{hashPriority:"low"}),ta=["className","id","style","height","onScroll"],ra=function(e){var t=e.className,n=e.id,a=e.style,o=e.height,i=e.onScroll,s=O()(e,ta),c=na(),p=c.cx,f=c.styles;return(0,l.jsx)("div",{className:p(f.root,t),id:n,style:u()({height:o},a),children:(0,l.jsx)(Dn.Uu,{render:function(v){var y=v.follow,h=v.onScroll;return(0,l.jsx)(Dn.A9,u()(u()({},s),{},{follow:y,height:o,iconFilterLines:(0,l.jsx)(ae.Z,{className:f.searchBarIcon,icon:qo.Z}),iconFindNext:(0,l.jsx)(ae.Z,{className:f.searchBarIcon,icon:_o.Z}),iconFindPrevious:(0,l.jsx)(ae.Z,{className:f.searchBarIcon,icon:ea.Z}),onScroll:function(x){h(x),i==null||i(x)}}))},startFollowing:!0})})},oa=d(82092),H=d.n(oa),aa=d(504),ia=d(22993),sa=d(54397),la=d(69789),ca=d(9668),da=d(67568),z=d(65694),Xe=typeof window!="undefined",ua=d(25298),Me=d.n(ua),pa=d(17069),Ne=d.n(pa),fa=d(9504),ga=d.n(fa),ma=d(38836),va=d.n(ma),ba=d(21742),Ye=d.n(ba),ha=d(83136),qe=d.n(ha),Oe=function(r){Ye()(t,r);var e=qe()(t);function t(){return Me()(this,t),e.apply(this,arguments)}return Ne()(t,[{key:"createDOM",value:function(a){var o=ga()(va()(t.prototype),"createDOM",this).call(this,a);return o.classList.add("align-middle"),o}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(a){return new t(a.__text,a.__key)}},{key:"importJSON",value:function(a){var o=(0,z.MX)(a.text);return o.setFormat(a.format),o.setDetail(a.detail),o.setMode(a.mode),o.setStyle(a.style),o}}]),t}(z.R2);function Nc(r){return new Oe(r)}var ue=d(97780),Ee=d(95138),ya=d(62657),ee=d.n(ya),pe=d(13399),xa=d(69024),Fn=(0,m.createContext)(null),Sa=(0,m.memo)(function(r){var e=r.children,t=r.value;return(0,l.jsx)(Fn.Provider,{value:t,children:e})}),Ca=function(){var e=(0,m.useContext)(Fn);return e==null?void 0:e.optionsMap},ja=d(25272),ka=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,wa="\\(",Aa=function(e){return"(?:"+e.join("|")+")"},La=function(e,t){var n=e.length===0?"":"(?!"+e.join("|")+")";return n+"[^\\s"+t+"]"},Ma=function(e){return"(?:\\.[ |$]|\\s|["+e+"]|)"},Na=75,Oa=function(e,t){var n=(0,m.useRef)(null),a=(0,ue.g)(),o=V()(a,1),i=o[0],s=(0,ja.y)(e),c=V()(s,3),p=c[0],f=c[1],g=c[2],v=(0,m.useCallback)(function(h){var S=(0,z.dL)(),x=S==null?void 0:S.getNodes();if(!p&&(x==null?void 0:x.length)===1&&i.dispatchCommand(t,void 0),p&&(0,z.iO)(S)){h.preventDefault();var k=(0,z.gI)(e);if((0,z.k$)(k))return t&&i.dispatchCommand(t,void 0),k.remove(),!0}return!1},[p,e,t,i]),y=(0,m.useCallback)(function(h){h.stopPropagation(),g(),f(!0)},[f,g]);return(0,m.useEffect)(function(){var h=n.current;return h&&h.addEventListener("click",y),function(){h&&h.removeEventListener("click",y)}},[y]),(0,m.useEffect)(function(){return(0,Ee.qV)(i.registerCommand(z.MK,v,z.KB),i.registerCommand(z.aR,v,z.KB))},[i,g,v]),[n,p]},Oc=function(){var e=useRef(null),t=useState(!1),n=_slicedToArray(t,2),a=n[0],o=n[1],i=useCallback(function(s){s.stopPropagation(),o(function(c){return!c})},[]);return useEffect(function(){var s=e.current;return s&&s.addEventListener("click",i),function(){s&&s.removeEventListener("click",i)}},[i]),[e,a,o]};function Ea(r,e,t,n){return new RegExp((e?"(^|\\s|".concat(e,")("):"(^|\\s)(")+Aa(r)+"((?:"+La(r,t)+(n?Ma(t):"")+"){0,"+Na+"}))$")}function Ta(r,e,t,n,a){var o=Ea(e,t,n,a).exec(r);if(o!==null){var i=o[1],s=o[2],c=o[3];if(s.length>0)return{leadOffset:o.index+i.length,matchingString:c,replaceableString:s}}return null}var Za=function(e,t){var n=t.punctuation,a=t.preTriggerChars,o=t.allowSpaces,i=(0,m.useState)(null),s=V()(i,2),c=s[0],p=s[1],f=(0,m.useCallback)(function(g){var v=Ta(g,e,a,n,o);if(v){var y=v.replaceableString,h=v.matchingString,S=y.lastIndexOf(h),x=S===-1?y:y.slice(0,Math.max(0,S))+y.slice(Math.max(0,S+h.length));if(p(x||null),v.replaceableString)return v}else p(null);return null},[a,o,n,e]);return{trigger:c,checkForMentionMatch:f}},Bn,zn,Hn,Pa=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.isError,s=function(){return i?o?{background:n.colorErrorBgActive,border:n.colorErrorBorderHover,color:n.colorErrorTextActive}:{background:n.colorErrorBg,border:n.colorErrorBorder,color:n.colorErrorText}:o?{background:n.colorInfoBgHover,border:n.colorInfoBorder,color:n.colorInfoText}:{background:n.colorFillTertiary,border:"transparent",color:n.colorInfoText}},c=s(),p=c.background,f=c.border,g=c.color;return{root:t(Bn||(Bn=b()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),n.fontFamilyCode,g,p,f,n.borderRadius),text:t(zn||(zn=b()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.colorTextSecondary),error:t(Hn||(Hn=b()([`
        color: `,`;
      `])),n.colorErrorText)}}),$n=(0,z.fA)("INSERT_MENTION_COMMAND"),Vn=(0,z.fA)("DELETE_MENTION_COMMAND"),Qn=(0,z.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Un=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,Da=(0,m.memo)(function(r){var e=r.nodeKey,t=r.variable,n=Ca(),a=(0,ue.g)(),o=V()(a,1),i=o[0],s=Oa(e,Vn),c=V()(s,2),p=c[0],f=c[1],g=n==null?void 0:n[t],v=Pa({isSelected:f,isError:!g||!!g.error}),y=v.styles;(0,m.useEffect)(function(){if(!i.hasNodes([he]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[i]);var h=(0,l.jsx)(P.Z,{className:y.root,ref:p,children:(0,l.jsxs)(P.Z,{align:"center",gap:2,children:[(!g||g.error)&&(0,l.jsx)(ae.Z,{className:y.error,icon:xa.Z}),(g==null?void 0:g.icon)&&(0,l.jsx)(P.Z,{children:g.icon}),(0,l.jsx)(P.Z,{className:y.text,gap:2,title:(g==null?void 0:g.label)||t,children:(0,l.jsx)("span",{children:(g==null?void 0:g.label)||t})})]})});return g!=null&&g.error?(0,l.jsx)(pe.Z,{title:g==null?void 0:g.error,children:h}):h}),he=function(r){Ye()(t,r);var e=qe()(t);function t(n,a,o){var i;return Me()(this,t),i=e.call(this,o),H()(ee()(i),"__variable",void 0),i.__variable=n,i}return Ne()(t,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var a=document.createElement("div");return a.style.display="inline-flex",a.style.alignItems="center",a.style.verticalAlign="middle",a}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,l.jsx)(Da,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var a=this.getLatest();return a.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(a){return new t(a.__variable)}},{key:"importJSON",value:function(a){var o=_e(a.variable);return o}}]),t}(z.Ij);function _e(r){return new he(r)}function Ec(r){return r instanceof he}var Tc=(0,z.fA)("INSERT_MENTION_COMMAND"),Zc=(0,z.fA)("DELETE_MENTION_COMMAND"),Pc=(0,z.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Dc=(0,z.fA)("UPDATE_MENTIONS_OPTIONS"),Ra=function(e,t,n){if(e.isSimpleText())for(var a=e.getPreviousSibling(),o=e.getTextContent(),i=e,s;;){s=t(o);var c=s===null?"":o.slice(s.end);if(o=c,c===""){var p=i.getNextSibling();if((0,z.Gg)(p)){c=i.getTextContent()+p.getTextContent();var f=t(c);if(f===null){p.markDirty();return}else if(f.start!==0)return}}else{var g=t(c);if(g!==null&&g.start===0)return}if(s===null)return;if(!(s.start===0&&(0,z.Gg)(a)&&a.isTextEntity())){var v=void 0;if(s.start===0){var y=i.splitText(s.end),h=V()(y,2);v=h[0],i=h[1]}else{var S=i.splitText(s.start,s.end),x=V()(S,3);v=x[1],i=x[2]}var k=n(v);if(v.replace(k),i==null)return}}};function Ia(r){var e=r.split(`
`);return JSON.stringify({root:{children:e.map(function(t){return{children:[{detail:0,format:0,mode:"normal",style:"",text:t,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Fa=(0,m.memo)(function(r){var e=r.onInsert,t=(0,ue.g)(),n=V()(t,1),a=n[0];(0,m.useEffect)(function(){if(!a.hasNodes([he]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[a]);var o=(0,m.useCallback)(function(c){e&&e();var p=c.getTextContent().slice(2,-2);return(0,z.U2)(_e(p))},[e]),i=(0,m.useCallback)(function(c){var p=Un.exec(c);if(p===null)return null;var f=p.index,g=f+p[0].length;return{end:g,start:f}},[]),s=(0,m.useCallback)(function(c){return Ra(c,i,o)},[o,i]);return(0,m.useEffect)(function(){return Un.lastIndex=0,(0,Ee.qV)(a.registerNodeTransform(Oe,s))},[]),null}),Gn=(0,m.memo)(function(r){var e=r.onInsert,t=r.onDelete,n=(0,ue.g)(),a=V()(n,1),o=a[0];return(0,m.useEffect)(function(){if(!o.hasNodes([he]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,Ee.qV)(o.registerCommand($n,function(i){o.dispatchCommand(Qn,null);var s=_e(i);return(0,z.od)([s]),e&&e(),!0},z.VN),o.registerCommand(Vn,function(){return t&&t(),!0},z.VN))},[o,e,t]),null});Gn.displayName="MentionNodePlugin";var Jn=d(4337),Ba=d(30967),za=function(r){Ye()(t,r);var e=qe()(t);function t(n,a,o){var i;return Me()(this,t),i=e.call(this,n),H()(ee()(i),"label",void 0),H()(ee()(i),"value",void 0),H()(ee()(i),"icon",void 0),H()(ee()(i),"extraElement",void 0),H()(ee()(i),"keywords",void 0),H()(ee()(i),"keyboardShortcut",void 0),H()(ee()(i),"onSelect",void 0),H()(ee()(i),"disabled",void 0),H()(ee()(i),"data",void 0),i.value=n,i.label=a,i.keywords=o.keywords||[],i.icon=o.icon,i.extraElement=o.extraElement,i.keyboardShortcut=o.keyboardShortcut,i.onSelect=o.onSelect.bind(ee()(i)),i.disabled=o.disabled,i.data=o.data,i}return Ne()(t)}(Jn.n),Ha=function(e,t){var n=(0,ue.g)(),a=V()(n,1),o=a[0],i=(0,m.useMemo)(function(){var s=e.map(function(p){return new za(p.value,p.label,{icon:p.icon,onSelect:function(){o.dispatchCommand($n,p.value)},disabled:p.disabled,data:p.data,extraElement:p.extraElement,keywords:p.keywords,keyboardShortcut:p.keyboardShortcut})});if(!t)return s;var c=new RegExp(t,"i");return s.filter(function(p){var f;return c.test(p.label)||((f=p.keywords)===null||f===void 0?void 0:f.some(function(g){return c.test(g)}))})},[e,t,o]);return{options:i}},Wn=d(53202),Te=d(71076),$a=d(28026),je=d.n($a),Va=d(81792),Qa=d.n(Va),Ua=d(45832),Ga=["time","format","relativeTime","tooltip"];je().extend(Qa());var Ze=Te.Z,en=function(e){return je()(e?new Date(e):new Date).fromNow()},Ja=function(e){var t,n=e.time,a=e.format,o=e.relativeTime,i=o===void 0?!0:o,s=e.tooltip,c=O()(e,Ga),p=(0,m.useState)(en(n)),f=V()(p,2),g=f[0],v=f[1],y=(0,m.useCallback)(function(k){var j=je()(),N=je()(k),A=j.diff(N);if(A>0&&A<60*60*1e3)return setInterval(function(){v(en(k))},60*1e3)},[]);(0,m.useEffect)(function(){var k;return i&&(k=y(new Date(n))),function(){k&&clearInterval(k)}},[i,y,n]),(0,m.useEffect)(function(){if(i){var k=en(n);k!==g&&(v(k),y(new Date(n)))}},[n,i,g,y]);var h=je()(n).format(a||"YYYY-MM-DD HH:mm:ss"),S=i?g:h,x=(t=s==null?void 0:s.title)!==null&&t!==void 0?t:i?h:void 0;return x&&(0,Ua.Z)(c,"ellipsis.tooltip.title",void 0),(0,l.jsx)(pe.Z,u()(u()({},s||{}),{},{title:x,children:(0,l.jsx)(Ze.Text,u()(u()({},c),{},{children:S}))}))};Ze.Time=Ja;var nn=Ze,Kn,Xn,Yn,qn,_n,et,nt,tn=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.disabled,s=t(Kn||(Kn=b()([`
      background-color: `,`;
    `])),n.colorFillTertiary);return{anchor:t(Xn||(Xn=b()([`
        z-index: 9999;
      `]))),menuEmpty:t(Yn||(Yn=b()([`
        padding: `,`px;
      `])),n.padding),menuOverlay:t(qn||(qn=b()([`
        overflow: auto;

        width: 240px;
        max-height: 320px;
        margin-top: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.marginXXS,n.colorBgElevated,n.borderRadius,n.boxShadow),menuItem:t(_n||(_n=b()([`
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
      `])),i?"not-allowed":"pointer",i?"none":"all",n.paddingSM/2,n.paddingSM,n.borderRadius,i?n.colorTextDisabled:n.colorText,n.fontSize,n.lineHeight,o&&s,s),menuItemIcon:t(et||(et=b()([`
        color: `,`;
      `])),n.colorInfoText),menuItemLabel:t(nt||(nt=b()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Wa=nn.Text,tt=(0,m.memo)(function(r){var e=r.index,t=r.isSelected,n=r.onClick,a=r.onMouseEnter,o=r.option,i=r.queryString,s=tn({isSelected:t,disabled:o.disabled}),c=s.styles,p=o.label,f=(0,m.useMemo)(function(){var h=p,S="",x="";if(i){var k=new RegExp(i,"i"),j=k.exec(o.label);j&&(h=p.slice(0,Math.max(0,j.index)),S=j[0],x=p.slice(Math.max(0,j.index+j[0].length)))}return{before:h,middle:S,after:x}},[o.label,i,p]),g=f.before,v=f.middle,y=f.after;return(0,l.jsxs)(P.Z,{align:"center",className:c.menuItem,gap:4,onClick:function(){return n(e,o)},onMouseEnter:function(){return a(e,o)},ref:o.setRefElement,tabIndex:-1,children:[(0,l.jsx)(P.Z,{className:c.menuItemIcon,children:o.icon}),(0,l.jsxs)("div",{className:c.menuItemLabel,title:o.label,children:[g,(0,l.jsx)(Wa,{mark:!0,children:v}),y]}),(0,l.jsx)(P.Z,{children:o.extraElement})]},o.key)});tt.displayName="MentionMenuItem";var Ka=(0,m.memo)(function(r){var e=r.selectedIndex,t=r.options,n=r.onClick,a=r.onMouseEnter,o=r.queryString,i=tn({}),s=i.styles;return(0,l.jsxs)(l.Fragment,{children:[t.length===0&&(0,l.jsx)(Wn.Z,{className:s.menuEmpty}),t.map(function(c,p){return(0,l.jsx)(tt,{index:p,isSelected:e===p,onClick:n,onMouseEnter:a,option:c,queryString:o},c.key)})]})}),Xa=(0,m.memo)(function(r){var e=r.triggers,t=r.options,n=t===void 0?[]:t,a=r.allowSpaces,o=a===void 0?!0:a,i=r.punctuation,s=i===void 0?ka:i,c=r.preTriggerChars,p=c===void 0?wa:c,f=r.onSelect,g=tn({}),v=g.styles,y=(0,ue.g)(),h=V()(y,1),S=h[0],x=Za(e,{punctuation:s,preTriggerChars:p,allowSpaces:o}),k=x.trigger,j=x.checkForMentionMatch,N=(0,m.useState)(null),A=V()(N,2),L=A[0],$=A[1],D=Ha(n,L),Q=D.options,G=(0,m.useCallback)(function(C,w,F,E){f==null||f(C,k,L),S.update(function(){w&&C!==null&&C!==void 0&&C.key&&w.remove(),C!=null&&C.onSelect&&C.onSelect(E),F()})},[S,f,L,k]),M=(0,m.useCallback)(function(C,w){var F=w.selectedIndex,E=w.selectOptionAndCleanUp,J=w.setHighlightedIndex;return C.current?Ba.createPortal((0,l.jsx)("div",{className:v.menuOverlay,role:"menu",children:(0,l.jsx)(Ka,{onClick:function(T,U){U.disabled||(J(T),E(U))},onMouseEnter:function(T,U){U.disabled||J(T)},options:Q,queryString:L,selectedIndex:F})}),C.current):null},[Q,L,v.menuOverlay]);return(0,l.jsx)(Jn.HQ,{anchorClassName:v.anchor,menuRenderFn:M,onQueryChange:$,onSelectOption:G,options:Q,triggerFn:j})}),Ya=function(e){var t=e.onBlur,n=e.onFocus,a=(0,ue.g)(),o=V()(a,1),i=o[0],s=(0,m.useRef)(null);return(0,m.useEffect)(function(){return(0,Ee.qV)(i.registerCommand(Qn,function(){return s.current&&(clearTimeout(s.current),s.current=null),!0},z.VN),i.registerCommand(z.Gq,function(){return s.current=setTimeout(function(){i.dispatchCommand(z.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),t&&t(),!0},z.VN),i.registerCommand(z.m$,function(){return n&&n(),!0},z.VN))},[i,t,n]),null},qa=Ya,rt,ot,at,it,st,lt,ct,dt,rn=32,ut=22,pt=function(e){return rn+Math.max(e-1,0)*ut},_a=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.autoSize;return{wrapper:t(rt||(rt=b()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:t(ot||(ot=b()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),rn,n.fontSize,rn,n.colorTextPlaceholder),root:t(at||(at=b()([`
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
      `])),n.colorBorder,n.borderRadius,n.colorText,n.fontSize,n.fontFamily,(o==null?void 0:o.minRows)&&t(it||(it=b()([`
          min-height: `,`px;
        `])),pt(o.minRows)),(o==null?void 0:o.maxRows)&&t(st||(st=b()([`
          max-height: `,`px;
        `])),pt(o.maxRows)),n.motionDurationMid,n.colorPrimaryBorder,ut),filled:t(lt||(lt=b()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),n.colorFillTertiary,n.colorFillSecondary,n.colorBgBase),borderless:t(ct||(ct=b()([`
        background: transparent;
        border: none;
      `]))),disabled:t(dt||(dt=b()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),n.colorTextDisabled,n.colorBgContainerDisabled)}}),ei=function(e){var t=e.className,n=e.wrapperClassname,a=e.placeholder,o=e.style,i=e.value,s=e.defaultValue,c=e.readOnly,p=c===void 0?!1:c,f=e.disabled,g=f===void 0?!1:f,v=e.onChange,y=e.onBlur,h=e.onFocus,S=e.variant,x=S===void 0?"outlined":S,k=e.options,j=k===void 0?[]:k,N=e.autoSize,A=e.triggers,L=A===void 0?["@"]:A,$=e.allowSpaces,D=e.punctuation,Q=e.preTriggerChars,G=e.onSelect,M=_a({autoSize:N}),C=M.styles,w=M.cx,F=!p&&!g,E=(0,m.useMemo)(function(){return{namespace:"mentions",nodes:[Oe,{replace:z.R2,with:function(U){return new Oe(U.__text)}},he],editorState:Ia(i||s||""),onError:function(U){throw U}}},[]),J=function(U){var Y=U.read(function(){return(0,z.Gv)().getTextContent()});v==null||v(Y.replaceAll(`

`,`
`))},B=(0,m.useMemo)(function(){return j.reduce(function(T,U){return T[U.value]=U,T},{})},[j]);return Xe?(0,l.jsx)(aa.R,{initialConfig:u()(u()({},E),{},{editable:F}),children:(0,l.jsx)(Sa,{value:{optionsMap:B},children:(0,l.jsxs)("div",{className:w(C.wrapper,n),children:[(0,l.jsx)(da.B,{ErrorBoundary:sa.g,contentEditable:(0,l.jsx)(ia.f,{className:w(H()(H()(H()(H()({},C.root,!0),C.filled,x==="filled"),C.borderless,x==="borderless"),C.disabled,g),t),style:o||{}}),placeholder:(0,l.jsx)("div",{className:C.placeholder,children:a||"\u8F93\u5165 ".concat(L.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,l.jsx)(Xa,{allowSpaces:$,onSelect:G,options:j,preTriggerChars:Q,punctuation:D,triggers:L}),(0,l.jsx)(Gn,{}),(0,l.jsx)(Fa,{}),(0,l.jsx)(la.e,{}),(0,l.jsx)(ca.$,{onChange:J}),(0,l.jsx)(qa,{onBlur:y,onFocus:h})]})})}):(0,l.jsxs)("div",{className:w(C.wrapper,n),children:[(0,l.jsx)("div",{className:w(H()(H()(H()(H()({},C.root,!0),C.filled,x==="filled"),C.borderless,x==="borderless"),C.disabled,g),t),style:o||{}}),(0,l.jsx)("div",{className:C.placeholder,children:a||"\u8F93\u5165 ".concat(L.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})},on=d(54106),ft=d(32328),gt=d(87449),ni=d(90228),ce=d.n(ni),ti=d(87999),Pe=d.n(ti),ke=d(97524),ri=d(42482),mt=function(){function r(){Me()(this,r),H()(this,"methodMap",void 0),H()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return Ne()(r,[{key:"registerMethod",value:function(t,n){this.methodMap[t]=n}},{key:"call",value:function(t){for(var n,a,o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];return(n=(a=this.methodMap)[t])===null||n===void 0?void 0:n.call.apply(n,[a].concat(i))}},{key:"updateMeta",value:function(t){Object.assign(this.meta,t)}},{key:"getMeta",value:function(){return Object.freeze(u()({},this.meta))}}]),r}(),an="__base_monaco_editor_controller__",De=Xe&&window;De&&!De[an]&&(De[an]=new mt);var oi=De[an],ai=function(){var r,e;return function(){var t=Pe()(ce()().mark(function n(a){var o;return ce()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(!r||!(0,ri.Z)(e,a))){s.next=7;break}return o=Object.keys(a||{}).length>0,ke.Z.config(o?a:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),s.next=5,ke.Z.init();case 5:r=s.sent,e=a;case 7:return s.abrupt("return",r);case 8:case"end":return s.stop()}},n)}));return function(n){return t.apply(this,arguments)}}()}(),ii=function(e){return e?ke.Z.config(e):ke.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),ke.Z.init()};function si(r){var e=Object.keys(r||{}).length>0,t=e?r:void 0;return oi.getMeta().singleton?ai(t):ii(t)}function Rc(r){controller.updateMeta(r)}var li=Xe&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",vt=li==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",sn={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},ci={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function di(r){var e=(0,m.useRef)();return(0,m.useEffect)(function(){e.current=r},[r]),e.current}function bt(r,e,t,n){if(n){var a=r.editor.getModel(r.Uri.parse(n));if(a)return a}return r.editor.createModel(e,t,n?r.Uri.parse(n):void 0)}var ht=function(e,t){var n=t.editorDidMount,a=t.editorWillMount,o=t.theme,i=t.value,s=t.path,c=t.language,p=t.saveViewState,f=t.defaultValue,g=t.enhancers,v=(0,m.useState)(!1),y=V()(v,2),h=y[0],S=y[1],x=(0,m.useState)(!1),k=V()(x,2),j=k[0],N=k[1],A=(0,m.useState)(!1),L=V()(A,2),$=L[0],D=L[1],Q=(0,m.useRef)(f),G=(0,m.useRef)(i),M=(0,m.useRef)(c||"text"),C=(0,m.useRef)(s),w=di(s),F=(0,m.useRef)(t.requireConfig),E=(0,m.useRef)(t.options),J=(0,m.useRef)(),B=(0,m.useRef)(),T=(0,m.useRef)(),U=(0,m.useRef)(e),Y=(0,m.useRef)(),ie=(0,m.useRef)(),W=(0,m.useRef)(!1),le=(0,m.useRef)(new Map),me=(0,m.useRef)({});(0,m.useEffect)(function(){me.current.enhancers=g},[g]),(0,m.useEffect)(function(){Y.current=n},[n]),(0,m.useEffect)(function(){ie.current=a},[a]),(0,m.useEffect)(function(){G.current=i},[i]),(0,m.useEffect)(function(){M.current=c},[c]),(0,m.useEffect)(function(){Q.current=f},[f]),(0,m.useEffect)(function(){D(!0),si(F.current).then(function(Z){var K;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,J.current=Z;try{var X;(X=ie.current)===null||X===void 0||X.call(ie,Z)}catch(Ue){}if(T.current){var R;if(U.current==="single"){var q,de,vn=bt(Z,(q=(de=G.current)!==null&&de!==void 0?de:Q.current)!==null&&q!==void 0?q:"",M.current,C.current);R=Z.editor.create(T.current,u()(u()({automaticLayout:!0},sn),E.current)),R.setModel(vn)}else{var bn=Z.editor.createModel(G.current,M.current),Ve=Z.editor.createModel(G.current,M.current);R=Z.editor.createDiffEditor(T.current,u()(u()({automaticLayout:!0},ci),E.current)),R.setModel({original:bn,modified:Ve})}B.current=R,(K=me.current.enhancers)===null||K===void 0||K.forEach(function(Ue){return Ue(Z,R)});try{var Qe;(Qe=Y.current)===null||Qe===void 0||Qe.call(Y,Z,R)}catch(Ue){}W.current||S(!0)}}).catch(function(Z){console.error("Monaco Editor Load Error!",Z)}).then(function(){W.current||D(!1)})},[]),(0,m.useEffect)(function(){var Z;h&&((Z=J.current)===null||Z===void 0||Z.editor.setTheme(o))},[h,o]),(0,m.useEffect)(function(){if(h){var Z=e==="diff"?B.current.getModifiedEditor():B.current;Z==null||Z.onDidFocusEditorText(function(){W.current||N(!0)}),Z==null||Z.onDidBlurEditorText(function(){W.current||N(!1)})}},[h,e]),(0,m.useEffect)(function(){return function(){W.current=!0}},[]),(0,m.useEffect)(function(){var Z,K,X;if(h&&!(e!=="diff"&&s)){var R=e==="diff"?B.current.getModifiedEditor():B.current,q=(Z=i!=null?i:Q.current)!==null&&Z!==void 0?Z:"",de=(K=J.current)===null||K===void 0?void 0:K.editor.EditorOption.readOnly;de&&R!==null&&R!==void 0&&(X=R.getOption)!==null&&X!==void 0&&X.call(R,de)?R==null||R.setValue(q):i!==(R==null?void 0:R.getValue())&&(R==null||R.executeEdits("",[{range:R==null?void 0:R.getModel().getFullModelRange(),text:q,forceMoveMarkers:!0}]),R==null||R.pushUndoStop())}},[h,s,e,i]),(0,m.useEffect)(function(){var Z,K;if(h&&e!=="diff"&&s!==w){var X=bt(J.current,(Z=G.current)!==null&&Z!==void 0?Z:Q.current,M.current,s),R=B.current;G.current!==null&&G.current!==void 0&&X.getValue()!==G.current&&X.setValue(G.current),X!==((K=B.current)===null||K===void 0?void 0:K.getModel())&&(p&&le.current.set(w,R.saveViewState()),R.setModel(X),p&&R.restoreViewState(le.current.get(s)))}},[h,i,s,w,e,p]);var ve=B;return{isEditorReady:h,focused:j,loading:$,containerRef:T,monacoRef:J,editorRef:ve,valueRef:G}},yt=function(e){var t=(0,m.useState)(!1),n=V()(t,2),a=n[0],o=n[1],i=function(){if(a){o(!1),e==null||e.updateOptions(u()(u()({},e==null?void 0:e.getOptions()),{},{minimap:{enabled:!1}})),e==null||e.layout();return}o(!0),e==null||e.updateOptions(u()(u()({},e==null?void 0:e.getOptions()),{},{minimap:{enabled:!0}})),e==null||e.layout()};return{isFullScreen:a,fullScreen:i}},xt,St,Ct,jt,kt,wt,At,Lt=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.minimapEnabled,i=o===void 0?!1:o,s=e.isFullScreen,c=s===void 0?!1:s,p=e.diff,f=p===void 0?!1:p,g=(0,I.F4)(xt||(xt=b()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `])));return{base:t(St||(St=b()([`
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
      `])),c&&t(Ct||(Ct=b()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius-1,n.borderRadius-1),fullScreenBtn:t(jt||(jt=b()([`
        &.`,`-btn {
          position: absolute;
          color: `,`;
          top: 20px;
          transition: none;
          `,`
        }
      `])),a,n.colorTextSecondary,c?t(kt||(kt=b()([`
                z-index: 9999;
                right: `,`px;
              `])),f?64:138):t(wt||(wt=b()([`
                right: `,`px;
              `])),i||f?64:20)),loading:t(At||(At=b()([`
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
      `])),n.fontSizeSM,n.colorTextTertiary,g)}},{hashPriority:"low"});function ye(){}var ui=function(e){var t,n=e.onChange,a=e.enableOutline,o=e.width,i=e.height,s=e.language,c=e.supportFullScreen,p=(0,m.useRef)(n),f=ht("single",e),g=f.isEditorReady,v=f.focused,y=f.loading,h=f.containerRef,S=f.monacoRef,x=f.editorRef,k=f.valueRef,j=(0,m.useRef)(),N=yt(x==null?void 0:x.current),A=N.isFullScreen,L=N.fullScreen,$=Lt({isFullScreen:A,minimapEnabled:(t=e.options)===null||t===void 0||(t=t.minimap)===null||t===void 0?void 0:t.enabled}),D=$.cx,Q=$.styles,G=D(Q.base,e.className,{"ve-focused":v,"ve-outline":a}),M=(0,m.useMemo)(function(){return{width:o,height:i}},[o,i]);return(0,m.useEffect)(function(){p.current=n},[n]),(0,m.useEffect)(function(){if(g){var C,w=x.current;(C=j.current)===null||C===void 0||C.dispose(),j.current=w==null?void 0:w.onDidChangeModelContent(function(F){var E,J=w==null||(E=w.getModel())===null||E===void 0?void 0:E.getValue();if(k.current!==J){var B;(B=p.current)===null||B===void 0||B.call(p,J,F)}})}},[x,g,j,k]),(0,m.useEffect)(function(){return function(){var C,w,F,E=x.current;(C=j.current)===null||C===void 0||C.dispose(),E==null||(w=E.getModel())===null||w===void 0||w.dispose(),(F=x.current)===null||F===void 0||F.dispose()}},[x]),(0,m.useEffect)(function(){var C;if(g){var w=(C=x.current)===null||C===void 0?void 0:C.getModel();if(w){var F;(F=S.current)===null||F===void 0||F.editor.setModelLanguage(w,s)}}},[x,g,s,S]),(0,l.jsxs)("div",{className:G,style:e.style,children:[y&&(0,l.jsx)("span",{className:D(Q.loading,"loading"),children:vt}),(0,l.jsx)("div",{className:"react-monaco-editor-container",ref:h,style:M,children:c&&(0,l.jsx)(se.ZP,{className:Q.fullScreenBtn,icon:(0,l.jsx)(ae.Z,{icon:A?ft.Z:gt.Z}),onClick:L,size:"small",type:"text"})})]})},pi=function(e){var t=e.enableOutline,n=e.width,a=e.height,o=e.language,i=e.onChange,s=e.original,c=e.supportFullScreen,p=(0,m.useRef)(i),f=ht("diff",e),g=f.isEditorReady,v=f.focused,y=f.loading,h=f.containerRef,S=f.monacoRef,x=f.editorRef,k=f.valueRef,j=yt(),N=j.isFullScreen,A=j.fullScreen,L=Lt({isFullScreen:N,diff:!0}),$=L.cx,D=L.styles,Q=$(D.base,e.className,{"ve-focused":v,"ve-outline":t}),G=(0,m.useMemo)(function(){return{width:n,height:a}},[n,a]);return(0,m.useEffect)(function(){p.current=i},[i]),(0,m.useEffect)(function(){var M;if(g){(M=x.current.getModel())===null||M===void 0||M.original.setValue(s!=null?s:"");var C=x.current.getModel()||{},w=C.modified;w==null||w.onDidChangeContent(function(F){var E=w.getValue();if(k.current!==E){var J;(J=p.current)===null||J===void 0||J.call(p,E,F)}})}},[x,g,s,k]),(0,m.useEffect)(function(){return function(){var M,C,w;(M=x.current)===null||M===void 0||(M=M.getModel())===null||M===void 0||(M=M.original)===null||M===void 0||M.dispose(),(C=x.current)===null||C===void 0||(C=C.getModel())===null||C===void 0||(C=C.modified)===null||C===void 0||C.dispose(),(w=x.current)===null||w===void 0||w.dispose()}},[x]),(0,m.useEffect)(function(){var M,C,w;if(g){var F=((M=x.current)===null||M===void 0?void 0:M.getModel())||{},E=F.original,J=F.modified;(C=S.current)===null||C===void 0||C.editor.setModelLanguage(E,o),(w=S.current)===null||w===void 0||w.editor.setModelLanguage(J,o)}},[x,g,o,S]),(0,l.jsxs)("div",{className:Q,style:e.style,children:[y&&(0,l.jsx)("span",{className:$(D.loading,"loading"),children:vt}),(0,l.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:h,style:G,children:c&&(0,l.jsx)(se.ZP,{className:D.fullScreenBtn,icon:(0,l.jsx)(ae.Z,{icon:N?ft.Z:gt.Z}),onClick:A,size:"small",type:"text"})})]})},fi=Object.assign(pi,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:sn,editorDidMount:ye,editorWillMount:ye,onChange:ye,requireConfig:{}}}),Mt=Object.assign(ui,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:sn,editorDidMount:ye,editorWillMount:ye,onChange:ye,requireConfig:{}},MonacoDiffEditor:fi}),Ic=null,gi=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],mi=["inlineView","options"],ln=function(e){var t=e.type,n=t===void 0?"single":t,a=e.editorDidMount,o=e.readOnly,i=o===void 0?!1:o,s=e.lineNumbers,c=s===void 0?"on":s,p=e.wordWrap,f=p===void 0?"off":p,g=e.contextmenu,v=g===void 0?!0:g,y=e.theme,h=e.minimapEnabled,S=h===void 0?!1:h,x=e.version,k=x===void 0?"0.45.0":x,j=e.requireConfig,N=j===void 0?{}:j,A=e.options,L=e.className,$=e.supportFullScreen,D=O()(e,gi),Q=(0,m.useRef)(a);(0,m.useEffect)(function(){Q.current=a},[a]);var G=(0,on.r)(),M=G.isDarkMode,C=(0,m.useMemo)(function(){return y||(M?"vs-dark":"vs")},[M,y]),w=(0,m.useState)(),F=V()(w,2),E=F[0],J=F[1],B=(0,m.useCallback)(function(ie,W){var le;J(W),(le=Q.current)===null||le===void 0||le.call(Q,ie,W)},[]),T=(0,m.useMemo)(function(){var ie=Object.assign({},A,{readOnly:i,lineNumbers:c,wordWrap:f,contextmenu:v,minimap:S===void 0?A==null?void 0:A.minimap:Object.assign({},A==null?void 0:A.minimap,{enabled:S})});return E==null||E.updateOptions(ie),ie},[A,i,c,f,v,S,E]),U=kn(),Y=(0,m.useMemo)(function(){return Object.assign({},N,{paths:u()({vs:U({path:"min/vs",pkg:"monaco-editor",version:k})},N.paths)})},[U,N,k]);return n!=="diff"?(0,l.jsx)(Mt,u()({className:L,editorDidMount:B,options:T,requireConfig:Y,supportFullScreen:E&&$,theme:C},D)):(0,l.jsx)(Mt.MonacoDiffEditor,u()({className:L,editorDidMount:B,options:T,requireConfig:Y,supportFullScreen:E&&$,theme:C},D))},vi=function(e){return(0,l.jsx)(ln,u()(u()({},e),{},{type:"single"}))},bi=function(e){var t=e.inlineView,n=t===void 0?"off":t,a=e.options,o=O()(e,mi);return(0,l.jsx)(ln,u()(u()({options:Object.assign({useInlineViewWhenSpaceIsLimited:n==="on"||n==="auto",renderSideBySide:n==="off"||n==="auto"},a)},o),{},{type:"diff"}))},Nt=d(22543),hi=["to","children"],Ot=function(e){var t=e.to,n=e.children,a=O()(e,hi);return(0,l.jsx)("a",u()(u()({href:"#".concat(t)},a),{},{children:n}))},Re=(0,m.createContext)({loading:!1,Link:Ot}),yi=["to","Link","children"],xi=function(e){var t=e.to,n=e.Link,a=e.children,o=O()(e,yi);return n?(0,l.jsx)(n,u()(u()({to:t},o),{},{children:a})):(0,l.jsx)("a",u()(u()({href:"#".concat(t)},o),{},{children:a}))},Si=function(e){var t=(0,m.useContext)(Re),n=t.Link,a=t.breadcrumb;(0,m.useEffect)(function(){var i;a==null||(i=a.setItems)===null||i===void 0||i.call(a,e.items)},[a,e.items]);var o=(0,m.useCallback)(function(i,s,c,p){var f,g,v=i.href?i.href===((f=c.at(-1))===null||f===void 0?void 0:f.href):i.path===((g=c.at(-1))===null||g===void 0?void 0:g.path);if(v)return(0,l.jsx)("span",{children:i.title});var y=i.href?i.href:"/".concat(p.join("/"));return(0,l.jsx)(xi,{Link:n,to:y,children:i.title})},[n]);return(0,l.jsx)(Nt.Z,u()({itemRender:o},e))},Et=d(25081),fe=d(63079),Tt,Ci=(0,I.kc)(function(r){var e=r.css,t=r.token;return{root:e(Tt||(Tt=b()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),ji=["className","children"],ki={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},wi=function(e){var t=e.className,n=e.children,a=O()(e,ji),o=Ci(),i=o.styles,s=o.cx,c=(0,m.useContext)(Re),p=c.loading,f=c.breadcrumb,g=c.Link,v=c.status,y=(0,m.useCallback)(function(){if(v){var h;return(0,l.jsx)(Et.ZP,{extra:(0,l.jsx)(g,{to:f==null||(h=f.items)===null||h===void 0||(h=h[0])===null||h===void 0?void 0:h.path,children:(0,l.jsx)(se.ZP,{type:"primary",children:"Go Back"})}),status:v,subTitle:ki[v],title:v})}return n},[v,n,g,f==null?void 0:f.items]);return p?(0,l.jsx)(fe.Z,{active:!0,className:s(i.root,t)}):(0,l.jsx)(P.Z,u()(u()({className:s(i.root,t),gap:20,vertical:!0},a),{},{children:y()}))},Ai=function(){return(0,l.jsx)(l.Fragment,{})},Li=d(335),Ie=d.n(Li),Zt=d(96726),Pt=d(76116),Dt=d(24230),Fe=d(57179),Rt,Mi=(0,I.kc)(function(r){var e=r.css,t=r.token;return{custom:e(Rt||(Rt=b()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),t.colorPrimary,t.colorPrimaryHover)}},{hashPriority:"low"}),Ni=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],It=function(e){var t=e.mode,n=t===void 0?"line":t,a=e.content,o=e.defaultOpen,i=e.iconPlacement,s=i===void 0?"left":i,c=e.openIcon,p=e.closeIcon,f=e.type,g=O()(e,Ni),v=Mi({}),y=v.styles,h=n==="expanded",S=(0,m.useState)(o),x=V()(S,2),k=x[0],j=x[1],N=p||(0,l.jsx)(Zt.Z,{}),A=c||(0,l.jsx)(Pt.Z,{}),L=h&&(0,l.jsx)("span",{children:k?N:A});return n==="line"||f==="vertical"?(0,l.jsx)(Dt.Z,u()({type:f},g)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Dt.Z,u()(u()({type:f},g),{},{children:(0,l.jsx)("span",{className:h?y.custom:"",onClick:function(){j(!k)},children:(0,l.jsxs)(Fe.Z,{size:6,children:[s!=="right"&&L,(0,l.jsx)("span",{children:a}),s==="right"&&L]})})})),h&&(0,l.jsx)("div",{style:{display:k?"block":"none"},children:e.children})]})},Oi=It,Ft=d(28163),Ei=d(65933),Bt,zt,Ti=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(Bt||(Bt=b()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),n,n,n),tooltip:e(zt||(zt=b()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),t.colorTextTertiary)}},{hashPriority:"low"}),Zi=["tooltip","className","status","text","color"],Ht=function(e){var t=e.tooltip,n=e.className,a=e.status,o=e.text,i=e.color,s=O()(e,Zi),c=Ti(),p=c.cx,f=c.styles;return(0,l.jsxs)(Fe.Z,u()(u()({className:p(f.root,n),size:"small"},s),{},{children:[(0,l.jsx)(Ft.Z,{status:a,text:o,color:i}),t&&(0,l.jsx)(pe.Z,{className:f.tooltip,title:t,children:(0,l.jsx)(ae.Z,{icon:Ei.Z})})]}))},Pi=d(57724),Di=d.n(Pi),Be=d(58615),Ri=["items","onClick"],Ii=["key","label"],Fi=["key","label"],$t=function(e){var t=e.items,n=t===void 0?[]:t,a=e.onClick,o=a===void 0?function(){}:a,i=O()(e,Ri);if(n.length<=2)return(0,l.jsx)(Fe.Z,u()(u()({align:"end",size:12},i),{},{children:n.map(function(y){var h=y.key,S=y.label,x=O()(y,Ii);return(0,l.jsx)(se.ZP,u()(u()({onClick:function(j){return o(h,j)}},x),{},{children:S}),h)})}));var s=Di()(n),c=s[0],p=c.key,f=c.label,g=O()(c,Fi),v=s.slice(1);return(0,l.jsx)(Be.Z.Button,u()(u()(u()({onClick:function(h){return o(p,h)}},g),{},{menu:{onClick:function(h){var S=h.key,x=h.domEvent;return o(S,x)},items:v.map(function(y){var h=y.key,S=y.label,x=y.icon,k=y.danger,j=y.disabled;return{key:h,label:S,icon:x,danger:k,disabled:j}})},overlayStyle:{minWidth:100}},i),{},{children:f}),p)},cn=d(54473),Bi=["shape","size","src"],Vt=function(e){if(typeof e=="number")return e;switch(e){case"small":return 40;case"large":return 88;default:return 64}},zi=function(e){var t=e.shape,n=t===void 0?"square":t,a=e.size,o=e.src,i=O()(e,Bi),s=(0,m.useMemo)(function(){return Vt(a)},[a]);return(0,l.jsx)(cn.C,u()({shape:n,size:s,src:o},i))},Qt,Ut,Gt,Jt,Wt,Kt,Xt,Yt,qt,Hi=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.bordered,i=o===void 0?!1:o,s=e.divider,c=s===void 0?!0:s;return{root:i?t(Qt||(Qt=b()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),n.marginXS,n.padding,n.colorBgBase,n.borderRadius,n.boxShadowTertiary):t(Ut||(Ut=b()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),n.paddingXS,n.marginXS,c&&t(Gt||(Gt=b()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),n.paddingLG,n.colorSplit)),icon:t(Jt||(Jt=b()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),a,a,n.colorPrimary,a),titleBox:t(Wt||(Wt=b()([`
        margin-bottom: `,`px;
      `])),n.marginSM),subTitle:t(Kt||(Kt=b()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),n.marginXXS,a,n.fontSize,n.colorTextSecondary),title:t(Xt||(Xt=b()([`
        font-size: `,`px;
        font-weight: 700;
      `])),n.fontSizeHeading5),descriptions:t(Yt||(Yt=b()([`
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
      `])),n.marginXXS,n.fontSize,n.colorTextSecondary,a,a,n.fontSize,a,n.fontSize,n.colorTextSecondary),rightButtons:t(qt||(qt=b()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),$i=["className","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],Vi=nn.Paragraph,Qi=function(e){var t=e.className,n=e.icon,a=e.title,o=e.titleRender,i=e.subTitle,s=e.status,c=e.descriptions,p=c===void 0?[]:c,f=e.descriptionsRender,g=e.extraContent,v=g===void 0?{}:g,y=e.extraContentRender,h=e.bordered,S=e.divider,x=O()(e,$i),k=Hi({bordered:h,divider:S}),j=k.styles,N=k.cx,A=(0,m.useMemo)(function(){return!n||typeof n=="string"?{src:n,size:i?"large":"default"}:(i&&n.size===void 0&&(n.size="large"),n)},[n,i]),L=(0,m.useMemo)(function(){var C=(0,l.jsx)("span",{className:j.title,children:a});return o?o(C):C},[j.title,a,o]),$=(0,m.useMemo)(function(){var C=[],w=Ie()(p.filter(function(Y){return!!Y}).entries()),F;try{for(w.s();!(F=w.n()).done;){var E=V()(F.value,2),J=E[0],B=E[1],T=B.icon,U=B.text;(s||J>=1)&&C.push((0,l.jsx)(Oi,{dashed:!1,type:"vertical"},"divider-".concat(J))),C.push((0,l.jsxs)(P.Z,{align:"center",gap:4,children:[T&&(0,l.jsx)(pe.Z,{title:T.tooltip,children:T.content}),(0,l.jsx)("span",{children:U})]},"desc-".concat(J)))}}catch(Y){w.e(Y)}finally{w.f()}return f?f(C):C},[p,f,s]),D=(0,m.useMemo)(function(){if(!v&&!y)return null;var C=(0,l.jsx)($t,u()({className:j.rightButtons},v));return y?y(C):C},[v,y,j.rightButtons]),Q=(0,m.useContext)(Re),G=Q.loading,M=Q.status;return G?(0,l.jsxs)(P.Z,{className:N(j.root,t),gap:20,children:[(0,l.jsx)(P.Z,{children:(0,l.jsx)(fe.Z.Avatar,{active:!0,className:j.icon,shape:A==null?void 0:A.shape,size:Vt(A==null?void 0:A.size)})}),(0,l.jsxs)(P.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)("div",{className:j.titleBox,children:[(0,l.jsx)(fe.Z.Input,{active:!0,size:25}),i&&(0,l.jsx)("div",{className:j.subTitle,children:(0,l.jsx)(fe.Z.Input,{active:!0,size:18})})]}),(0,l.jsx)(fe.Z.Input,{active:!0,size:18})]}),(0,l.jsx)(P.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,l.jsx)(fe.Z.Button,{active:!0})})]}):M?null:(0,l.jsxs)(P.Z,u()(u()({className:N(j.root,t),gap:20},x),{},{children:[A&&(0,l.jsx)(P.Z,{children:(0,l.jsx)(zi,u()({className:j.icon},A))}),(0,l.jsxs)(P.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)(P.Z,{className:j.titleBox,vertical:!0,children:[L,i&&(0,l.jsx)(Vi,{className:j.subTitle,ellipsis:{rows:2},children:i})]}),(0,l.jsxs)(P.Z,{align:"center",className:j.descriptions,gap:4,children:[s&&(0,l.jsx)(Ht,u()({},s)),$]})]}),(0,l.jsx)(P.Z,{align:"center",flex:"1",justify:"flex-end",children:D})]}))},_t,Ui=(0,I.kc)(function(r){var e=r.css,t=r.token;return{root:e(_t||(_t=b()([`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: `,"px ","px ",`px;
      `])),t.padding,t.paddingLG,t.paddingXL)}},{hashPriority:"low"}),Gi=["loading","className","children","Link","status","gap"],Ji=function(e){var t=wn(),n=e.loading,a=e.className,o=e.children,i=e.Link,s=i===void 0?t||Ot:i,c=e.status,p=e.gap,f=p===void 0?16:p,g=O()(e,Gi),v=Ui(g),y=v.styles,h=v.cx,S=(0,m.useState)([]),x=V()(S,2),k=x[0],j=x[1];return(0,l.jsx)(P.Z,u()(u()({className:h(y.root,a),gap:f,vertical:!0},g),{},{children:(0,l.jsx)(Re.Provider,{value:{loading:n,Link:s,breadcrumb:{items:k,setItems:j},status:c},children:o})}))},er,Wi=(0,I.kc)(function(r){var e=r.css,t=r.token;return{root:e(er||(er=b()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),t.fontFamily,t.fontWeightStrong,t.lineHeight,t.colorText)}}),Ki=["className"],Xi=function(e){var t=e.className,n=O()(e,Ki),a=Wi(),o=a.cx,i=a.styles;return(0,l.jsx)("h2",u()({className:o(i.root,t)},n))},xe=Ji;xe.Breadcrumb=Si,xe.Title=Xi,xe.Header=Qi,xe.Content=wi,xe.Footer=Ai;var nr,tr,rr,or,ar,Yi=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(nr||(nr=b()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.fontFamily,t.colorText,t.colorBgContainer,t.borderRadius*2,t.boxShadowTertiary),bordered:e(tr||(tr=b()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),t.colorBorder),hoverable:e(rr||(rr=b()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),t.motionDurationMid,t.motionDurationMid,t.boxShadow),text:e(or||(or=b()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),t.colorTextSecondary),error:e(ar||(ar=b()([`
      color: `,`;
    `])),t.colorErrorText)}}),qi=["className","bordered","hoverable","children"],_i=function(e){var t=e.className,n=e.bordered,a=n===void 0?!1:n,o=e.hoverable,i=o===void 0?!0:o,s=e.children,c=O()(e,qi),p=Yi(),f=p.cx,g=p.styles;return(0,l.jsx)("div",u()(u()({className:f(g.root,a&&g.bordered,i&&g.hoverable,t)},c),{},{children:s}))},ir,es=(0,I.kc)(function(r){var e=r.css,t=r.token;return{root:e(ir||(ir=b()([`
        padding: 12px 24px 20px;
      `])))}},{hashPriority:"low"}),ns=["className","children"],ts=function(e){var t=e.className,n=e.children,a=O()(e,ns),o=es(),i=o.styles,s=o.cx;return(0,l.jsx)(P.Z,u()(u()({className:s(i.root,t),gap:20,vertical:!0},a),{},{children:n}))},sr=d(56656),lr,cr,dr,ur,pr,fr,rs=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.borderedBottom,i=e.borderedBottomDashed,s=e.borderedTop,c=e.borderedTopDashed,p=e.size,f={small:"".concat(n.paddingXS,"px ").concat(n.padding,"px"),middle:"".concat(n.padding,"px ").concat(n.paddingLG,"px"),default:"".concat(n.paddingSM,"px ").concat(n.paddingLG,"px")},g=o||i;return{custom:t(lr||(lr=b()([`
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
      `])),a,a,g&&p&&t(cr||(cr=b()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),a,a,f[p],a),o&&t(dr||(dr=b()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),a,n.colorSplit),i&&t(ur||(ur=b()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),a,n.colorSplit),s&&t(pr||(pr=b()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),a,n.colorSplit),c&&t(fr||(fr=b()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),a,n.colorSplit))}},{hashPriority:"low"}),os=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],dn=function(e){var t=e.className,n=e.borderedBottom,a=e.borderedBottomDashed,o=e.borderedTop,i=e.borderedTopDashed,s=O()(e,os),c=rs({borderedBottom:n,borderedBottomDashed:a,borderedTop:o,borderedTopDashed:i,size:s.size}),p=c.styles,f=c.cx;return(0,l.jsx)(sr.Z,u()(u()({},s),{},{className:f(p.custom,t)}))},as=dn;dn.Item=sr.Z.Item;var gr,is=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls,a=70;return{root:e(gr||(gr=b()([`
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
      `])),n,n,n,n,a,n,a)}},{hashPriority:"low"}),ss=["className","colon","column","size"],ls=function(e){var t=e.className,n=e.colon,a=n===void 0?!1:n,o=e.column,i=o===void 0?2:o,s=e.size,c=s===void 0?"small":s,p=O()(e,ss),f=is(),g=f.cx,v=f.styles;return(0,l.jsx)(as,u()({className:g(v.root,t),colon:a,column:i,size:c},p))},cs=d(250),mr,vr,br,hr,yr,xr,Sr,Cr,jr,ds=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.divider,i=o===void 0?!0:o,s=e.iconBg,c=s===void 0?!0:s;return{root:t(mr||(mr=b()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),i?20:0,i&&t(vr||(vr=b()([`
          border-bottom: 1px solid `,`;
        `])),n.colorSplit)),icon:t(br||(br=b()([`
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
      `])),a,n.colorPrimary,c&&t(hr||(hr=b()([`
            background-color: `,`;
          `])),n.colorBgLayout),a),titleBox:t(yr||(yr=b()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),n.marginXXS),title:t(xr||(xr=b()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.fontWeightStrong),description:t(Sr||(Sr=b()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),a,n.colorTextSecondary),extra:t(Cr||(Cr=b()([`
        margin-top: -4px;
      `]))),rightButtons:t(jr||(jr=b()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),us=["className","icon","title","description","extra","divider"],ps=["className","shape","size"],fs=["children"],gs=nn.Paragraph,ms=function(e){var t=e.className,n=e.icon,a=e.title,o=e.description,i=e.extra,s=e.divider,c=O()(e,us),p=ds({divider:s,iconBg:!(n!=null&&n.src)}),f=p.styles,g=p.cx,v=n||{},y=v.className,h=v.shape,S=h===void 0?"square":h,x=v.size,k=x===void 0?72:x,j=O()(v,ps),N=i||{},A=N.children,L=O()(N,fs);return(0,l.jsxs)(P.Z,u()(u()({className:g(f.root,t),gap:20},c),{},{children:[n&&(0,l.jsx)(P.Z,{children:(0,l.jsx)(cn.C,u()({className:g(f.icon,y),shape:S,size:k},j))}),(0,l.jsxs)(P.Z,{flex:"1",vertical:!0,children:[(0,l.jsxs)(P.Z,{className:f.titleBox,gap:4,children:[(0,l.jsx)("div",{className:f.title,children:a}),i&&(0,l.jsx)(P.Z,{align:"flex-start",className:f.extra,justify:"flex-end",onClick:function(D){return D.stopPropagation()},children:(0,l.jsx)(Be.Z,u()(u()({},L),{},{children:A||(0,l.jsx)(se.ZP,{icon:(0,l.jsx)(ae.Z,{icon:cs.Z}),size:"small",type:"text"})}))})]}),o&&(0,l.jsx)(gs,{className:f.description,ellipsis:{rows:2},children:o})]})]}))},ze=_i;ze.Header=ms,ze.Content=ts,ze.Descriptions=ls;var kr=d(38695),un=d(59823),wr=d(99865),Ar=d(7515),vs=function(e){var t=e.value,n=e.defaultValue,a=e.min,o=a===void 0?0:a,i=e.max,s=e.step,c=e.gutter,p=c===void 0?16:c,f=e.sliderCol,g=f===void 0?{span:12}:f,v=e.inputCol,y=v===void 0?{span:5}:v,h=e.addonAfter,S=e.addonBefore,x=e.placeholder,k=e.onChange,j=e.style,N=e.className,A=e.sliderProps,L=A===void 0?{}:A,$=e.inputProps,D=$===void 0?{}:$,Q=(0,m.useState)(),G=V()(Q,2),M=G[0],C=G[1],w=function(E){Number.isNaN(E)||(C(E),k==null||k(E))};return(0,l.jsxs)(kr.Z,{className:N,gutter:p,style:j,children:[(0,l.jsx)(un.Z,u()(u()({},g),{},{children:(0,l.jsx)(wr.Z,u()(u()({},L),{},{defaultValue:n,max:i,min:o,onChange:w,step:s,value:t!=null?t:M}))})),(0,l.jsx)(un.Z,u()(u()({},y),{},{children:(0,l.jsx)(Ar.Z,u()(u()({},D),{},{addonAfter:h,addonBefore:S,defaultValue:n,max:i,min:o,onChange:w,placeholder:x,step:s,value:t!=null?t:M}))}))]})},Lr=d(32142),Mr,bs=(0,I.kc)(function(r,e){var t=r.css,n=e.bordered,a=n===void 0?"dashed":n;return{custom:t(Mr||(Mr=b()([`
        border-style: `,` !important;
      `])),a)}},{hashPriority:"low"}),hs=["bordered","className"],Nr=function(e){var t=e.bordered,n=t===void 0?"dashed":t,a=e.className,o=O()(e,hs),i=bs({bordered:n}),s=i.styles,c=i.cx;return(0,l.jsx)(Lr.Z,u()(u()({},o),{},{className:c(s.custom,a)}))};Nr.ErrorBoundary=Lr.Z.ErrorBoundary;var Fc=null,Or=d(15558),ys=d(372),pn=d(76580),He=d(40097),Er,Tr=(0,I.vJ)(Er||(Er=b()([`
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
`])),function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme;return e==null?void 0:e.colorPrimary},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme,t=e||{},n=t.prefixCls;return He.ZP.config({prefixCls:n}),`
      .`.concat(n,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(n,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)}),xs=["detail","message","description","onClose","className"],Ss=pn.Z.Panel,Cs=Te.Z.Link,js=Te.Z.Paragraph,ks=Te.Z.Text,Se={},ws=function(e,t){Se[e]||(Se[e]=[]),Se[e].push(t)},As=function(e){delete Se[e]},Zr=function r(e){var t="";if(typeof e=="string")t=e;else if(typeof e=="number")t=e.toString();else if(Array.isArray(e)){var n=Ie()(e),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;t+=r(o)}}catch(i){n.e(i)}finally{n.f()}}else(0,m.isValidElement)(e)&&(t+=r(e.props.children));return t},Pr=function(e){var t,n=e.noticeKey,a=e.message,o=((t=Se[n])===null||t===void 0?void 0:t.length)||0;return(0,l.jsxs)(l.Fragment,{children:[a,o>1&&" (".concat(o,")")]})},Ls=function(e){var t=e.noticeKey,n=(0,m.useState)(),a=V()(n,2),o=a[0],i=a[1],s={},c=Ie()(Se[t]),p;try{for(c.s();!(p=c.n()).done;){var f=p.value,g=Zr(f.description);f.descKey=g,s[g]=f}}catch(v){c.e(v)}finally{c.f()}return(0,l.jsx)(pn.Z,{accordion:!0,activeKey:o,className:"yunti-notification-collapse",expandIcon:function(y){var h=y.isActive;return(0,l.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:h?(0,l.jsx)(Cs,{className:"yunti-notification-link",children:(0,l.jsx)(Zt.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,l.jsx)(Pt.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(y){i(y)},children:Object.values(s).map(function(v){var y=v.descKey,h=v.description,S=v.detail;return(0,l.jsx)(Ss,{header:(0,l.jsx)(ks,{ellipsis:{tooltip:!1},style:{width:250},children:h}),children:(0,l.jsx)(js,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(S,null,2)},type:"secondary",children:(0,l.jsx)("pre",{children:JSON.stringify(S,null,2)})})},y)})})},ge=function(e){var t=e.detail,n=e.message,a=e.description,o=e.onClose,i=e.className,s=O()(e,xs),c=Zr(n);ws(c,e);var p=function(){o==null||o(),As(c)};return e.type==="warning"&&!e.icon&&(s.icon=(0,l.jsx)(ys.Z,{style:{color:"#ff7d00"}})),t?He.ZP.open(u()({key:c,message:(0,l.jsx)(Pr,{message:n,noticeKey:c}),description:(0,l.jsx)(Ls,{noticeKey:c}),onClose:p,className:"yunti-notification ".concat(i)},s)):He.ZP.open(u()({key:c,message:(0,l.jsx)(Pr,{message:n,noticeKey:c}),description:a,onClose:p,className:"yunti-notification ".concat(i)},s))},Dr=function(e){var t;if(((e==null||(t=e.errors)===null||t===void 0?void 0:t.length)||0)>0){e!=null&&e.errors;var n=Ie()((e==null?void 0:e.errors)||[]),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;ge(u()(u()({detail:o,description:o.message},e),{},{type:"warning"}))}}catch(i){n.e(i)}finally{n.f()}}else ge(u()(u()({},e),{},{type:"warning"}))},Ms=u()(u()({},He.ZP),{},{success:function(e){return ge(u()(u()({},e),{},{type:"success"}))},info:function(e){return ge(u()(u()({},e),{},{type:"info"}))},warning:function(e){return ge(u()(u()({},e),{},{type:"warning"}))},warn:function(e){return ge(u()(u()({},e),{},{type:"warning"}))},error:function(e){return ge(u()(u()({},e),{},{type:"error"}))},warnings:Dr,warns:Dr}),Bc=null,Ns=["children"],Rr=function(e){var t=e.children,n=O()(e,Ns);return(0,l.jsxs)(Or.Z,u()(u()({},n),{},{children:[(0,l.jsx)(Tr,{}),t]}))};Rr.useApp=Or.Z.useApp;var zc=null,Os=d(54901),Ir,Fr,Br,Es=(0,I.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.closeIcon,o=e.closeIconPlacement,i=e.extra,s=t(Ir||(Ir=b()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),n,n,!(a===null||a===!1)&&t(Fr||(Fr=b()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),n));return{custom:t(Br||(Br=b()([`
        `,`
      `])),(!o||o==="right"||o==="auto"&&!i)&&s)}},{hashPriority:"low"}),Ts=["className"],Zs=function(e){var t=e.className,n=O()(e,Ts),a=Es(n),o=a.styles,i=a.cx;return(0,l.jsx)(An.Z,u()(u()({},n),{},{className:i(o.custom,t)}))},Hc=null,zr,Hr,$r,Vr,Ps=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=e.divider,o=e.position;return{menuWrapper:t(zr||(zr=b()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.colorBgElevated,n.borderRadiusLG,n.boxShadowSecondary),menuExtra:t(Hr||(Hr=b()([`
        padding: 10px 16px 4px;
        `,`
      `])),a&&t(o==="top"?$r||($r=b()([`
              border-bottom: 1px solid `,`;
            `])):Vr||(Vr=b()([`
              border-top: 1px solid `,`;
            `])),n.colorSplit))}},{hashPriority:"low"}),Ds=["menuExtra","dropdownRender"],Rs=function(e){var t=e.menuExtra,n=e.dropdownRender,a=O()(e,Ds),o=t||{},i=o.position,s=i===void 0?"top":i,c=o.divider,p=c===void 0?!1:c,f=o.content,g=Ps({divider:p,position:s}),v=g.styles,y=(0,m.useCallback)(function(h){var S=m.cloneElement(h,{style:{boxShadow:"none",border:"none"}});if(!f)return n?(0,l.jsx)(P.Z,{className:v.menuWrapper,vertical:!0,children:n(S)}):h;var x=(0,l.jsx)(P.Z,{align:"center",className:v.menuExtra,children:f});return(0,l.jsxs)(P.Z,{className:v.menuWrapper,vertical:!0,children:[s==="top"&&x,S,s==="bottom"&&x]})},[f,n,s,v.menuExtra,v.menuWrapper]);return(0,l.jsx)(Be.Z,u()({dropdownRender:y},a))},Qr=Rs;Qr.Button=Be.Z.Button;var Ce=d(68191),Is=d(95469),fn=d.n(Is),Fs=d(41773),ne=d(6183),Bs=d(14539),Ur,Gr,Jr,zs=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{empty:e(Ur||(Ur=b()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),t.paddingXS,t.paddingSM,t.colorTextTertiary),list:e(Gr||(Gr=b()([`
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
    `])),n,n,t.colorTextTertiary,n),noFormItem:e(Jr||(Jr=b()([`
      height: `,`px;
      color: `,`;
    `])),t.controlHeight,t.colorTextTertiary)}}),Hs=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style"],$s=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width"],Vs=["key","name"],Wr=function(e){var t=e.extra,n=e.expandIcon,a=e.icon,o=e.title,i=e.variant,s=e.defaultActive,c=e.empty,p=c===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":c,f=e.columns,g=f===void 0?[]:f,v=e.disabled,y=e.readOnly,h=e.addOneFieldDefault,S=e.disableRemoveWhenOneField,x=e.maxFileds,k=e.name,j=e.addParams,N=e.className,A=e.onRemove,L=e.fieldRemoveButton,$=L===void 0?!0:L,D=e.style,Q=O()(e,Hs),G=zs(),M=G.styles,C=(0,m.useRef)(),w=Ce.Z.useFormInstance(),F=Ce.Z.useWatch(k,w),E=(0,m.useCallback)(function(){if(!j)return[];var B=typeof j=="function"?j():j;return[B.defaultValue,B.insertIndex]},[j]),J=(0,m.useCallback)(function(B){var T=w.getFieldValue([k,B]);return A==null?void 0:A(T)},[w,k,A]);return(0,m.useEffect)(function(){var B;if(h&&(!(w!=null&&w.getFieldValue(k))||(w==null||(B=w.getFieldValue(k))===null||B===void 0?void 0:B.length)===0)){var T;(T=C.current)===null||T===void 0||T.call.apply(T,[C].concat(fn()(E())))}},[h,E,w,k]),(0,l.jsx)(We,{extra:t===void 0?k&&!y&&(0,l.jsx)(pe.Z,{title:x&&"\u6700\u591A\u6DFB\u52A0 ".concat(x," \u9879"),children:(0,l.jsx)(se.ZP,{disabled:v||!!(x&&(F==null?void 0:F.length)===x),icon:(0,l.jsx)(Fs.Z,{}),onClick:function(T){var U;T.stopPropagation(),(U=C.current)===null||U===void 0||U.call.apply(U,[C].concat(fn()(E())))},size:"small",type:"text"})}):t,className:N,expandIcon:n,icon:a,title:o,variant:i,defaultActive:s,style:D,children:k?(0,l.jsx)(Ce.Z.List,u()(u()({name:k},Q),{},{children:function(T,U){var Y=U.add,ie=U.remove;return C.current=Y,(0,l.jsx)(ne.Z,{className:M.list,columns:[].concat(fn()(g.map(function(W){var le=W.label,me=W.name,ve=W.render,Z=W.dependencies,K=W.rules,X=W.align,R=W.ellipsis,q=W.fixed,de=W.responsive,vn=W.shouldCellUpdate,bn=W.width,Ve=O()(W,$s);return{title:le,dataIndex:me,align:X,ellipsis:R,fixed:q,responsive:de,shouldCellUpdate:vn,width:bn,render:function(Ue,Uc,be){var hn=T[be],wc=hn.key,Ac=hn.name,Lc=O()(hn,Vs),Ge=ve==null?void 0:ve(T[be],be);if(!Ge&&!Ve.noStyle)return(0,l.jsx)(P.Z,{align:"center",className:M.noFormItem,children:"\u65E0\u9700\u8BBE\u7F6E"});if(!me)return(0,l.jsx)(P.Z,{align:"center",className:M.noFormItem,children:Ge});var Je={readOnly:y,disabled:v};return y===!0&&(Je.showCount=!1,Je.variant="borderless",Je.placeholder="-"),(0,l.jsx)(Ce.Z.Item,u()(u()(u()({},Lc),{},{dependencies:typeof Z=="function"?Z(T[be],be):Z,name:[Ac,me],rules:typeof K=="function"?K(T[be],be):K},Ve),{},{children:Ge&&m.cloneElement(Ge,Je)}),wc)}}})),[!y&&$!==!1&&{title:"",dataIndex:"del",render:function(le,me,ve){var Z=T[ve].name;return(0,l.jsx)(Ce.Z.Item,{children:(0,l.jsx)(se.ZP,{disabled:v||S&&T.length===1,icon:(0,l.jsx)(ae.Z,{icon:Bs.Z}),onClick:Pe()(ce()().mark(function K(){var X;return ce()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,J(Z);case 2:X=q.sent,X!==!1&&ie(Z);case 4:case"end":return q.stop()}},K)})),type:"text"})})}}]).filter(function(W){return!!W}),dataSource:T,locale:{emptyText:p},pagination:!1,rowHoverable:!1,size:"small"})}})):(0,l.jsx)("div",{className:M.empty,children:p})})},Kr=Ce.Z;Kr.CollapseList=Wr;var Qs=function(e){return typeof e=="string"?document.querySelector("#".concat(e)):(e==null?void 0:e.current)||e},gn=":not([disabled]):not([readonly])",Us=["text","password","search","tel","url","number","email",""].map(function(r){return'input[type="'.concat(r,'"]').concat(gn)}).join(", ")+", input:not([type])".concat(gn,", textarea").concat(gn),Gs=function(e){var t,n=Qs(e);if(n){var a=(t=n.querySelector)===null||t===void 0?void 0:t.call(n,Us);if(a!=null&&a.focus)return a.focus(),!0}},Xr=function(e){var t=(0,m.useState)(!1),n=V()(t,2),a=n[0],o=n[1];m.useEffect(function(){if(!(a||!e)){var i=Gs(e);i&&o(!0)}},[e,a,o])},Yr=function(e){var t,n=e.autoFocus,a=n===void 0?!0:n,o=(0,m.useRef)(null);return Xr(a?o:void 0),(0,l.jsx)("div",{className:e.className,id:e.id,ref:o,style:(t=e.style)!==null&&t!==void 0?t:{display:e.className?void 0:"contents"},children:e.children})},Js=function(e){return function(t){var n=function(i){return(0,l.jsx)(Yr,u()(u()({},e||{}),{},{children:(0,l.jsx)(t,u()({},i))}))},a=t.displayName||t.name||"Component";return n.displayName="withFormHelper(".concat(a,")"),n}},te=d(54381),Ws="yunti-ui",qr,_r,Ks=(0,I.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.borderd,o=a===void 0?!0:a,i=e.footer,s=i===null||Array.isArray(i)&&i.length===0,c=t(qr||(qr=b()([`
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
    `])),n,n,s?0:"40px",n,s?0:"1px");return{custom:t(_r||(_r=b()([`
        `,`
      `])),o&&c)}},{hashPriority:"low"}),Xs=["className","borderd"],Ys=function(e){var t=e.className,n=e.borderd,a=n===void 0?!0:n,o=O()(e,Xs),i=Ks(u()({borderd:a},o)),s=i.styles,c=i.cx;return(0,l.jsx)(te.Z,u()(u()({},o),{},{className:c(s.custom,"".concat(Ws,"-modal"),t)}))},re=Ys;re.useModal=te.Z.useModal,re.destroyAll=te.Z.destroyAll,re.config=te.Z.config,re._InternalPanelDoNotUseOrYouWillBeFired=te.Z._InternalPanelDoNotUseOrYouWillBeFired,re.info=te.Z.info,re.success=te.Z.success,re.error=te.Z.error,re.warning=te.Z.warning,re.warn=te.Z.warn,re.confirm=te.Z.confirm;var $c=null,qs=d(19480),_s=d(37513),eo,no,to,ro,el=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.size,i=e.segmented,s=function(){return i?i!==!0?i.gap:!0:0}(),c=function(){if(i)return i!==!0?i.borderRadius:!0}(),p=function(){var S={small:n.sizeSM,middle:n.size,large:n.sizeLG};return typeof s=="string"?S[s]:s===!0?o?S[o]:S.middle:s||0},f=function(){var S={small:n.controlHeightSM,middle:n.controlHeight,large:n.controlHeightLG};if(c===!0)return o?S[o]:S.middle;if(c||c===0)return c},g=f()&&t(eo||(eo=b()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),f()),v=t(no||(no=b()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),p()),y=i===!0||i&&!i.bordered;return{custom:t(to||(to=b()([`
        `,`
        `,`
        `,`
      `])),g,v,y&&t(ro||(ro=b()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),a,a,n.colorPrimary))}},{hashPriority:"low"}),nl=["className"],oo=qs.ZP,tl=function(e){var t=e.className,n=O()(e,nl);n.segmented&&(n.optionType="button");var a=el(n),o=a.styles,i=a.cx;return(0,l.jsx)(_s.Z,u()(u()({},n),{},{className:i(o.custom,t)}))};oo.Group=tl;var Vc=null,ao,rl=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{table:e(ao||(ao=b()([`
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
    `])),n,t.colorTextTertiary)}}),ol=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],io=function(e){var t=e.rootStyle,n=e.rootClassName,a=e.icon,o=e.title,i=e.variant,s=e.defaultActive,c=e.extra,p=e.className,f=O()(e,ol),g=rl(),v=g.cx,y=g.styles;return(0,l.jsx)(We,{className:n,style:t,icon:a,title:o,variant:i,defaultActive:s,extra:c,children:(0,l.jsx)(ne.Z,u()({className:v(y.table,p),pagination:!1,rowHoverable:!1,size:"small"},f))})},al=["columns"],oe=function(e){var t=e.columns,n=O()(e,al),a=(0,m.useMemo)(function(){return t==null?void 0:t.map(function(o){if(o.render)return o;if(o.ellipsis&&o.ellipsis!==!0&&o.ellipsis.showTitle||o.ellipsis===!0){var i=o.ellipsis===!0?{}:o.ellipsis;return u()(u()({},o),{},{ellipsis:{showTitle:!1},render:function(c){return c||c===0?(0,l.jsx)(pe.Z,u()(u()({},i),{},{placement:"topLeft",title:c,children:c})):"-"}})}return o.render||(o.render=function(s){return s!=null?s:"-"}),o})},[t]);return(0,l.jsx)(ne.Z,u()(u()({},n),{},{columns:a}))};oe.displayName="Table",oe.SELECTION_COLUMN=ne.Z.SELECTION_COLUMN,oe.EXPAND_COLUMN=ne.Z.EXPAND_COLUMN,oe.SELECTION_ALL=ne.Z.SELECTION_ALL,oe.SELECTION_INVERT=ne.Z.SELECTION_INVERT,oe.SELECTION_NONE=ne.Z.SELECTION_NONE,oe.Column=ne.Z.Column,oe.ColumnGroup=ne.Z.ColumnGroup,oe.Summary=ne.Z.Summary,oe.Collapse=io;var Qc=null,il=d(67098),so=d(69032),sl=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],lo,co,uo,ll=(0,I.kc)(function(r){var e=r.css;return{container:e(lo||(lo=b()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:e(co||(co=b()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:e(uo||(uo=b()([`
      position: relative;
      flex: 1;
    `])))}}),cl=(0,m.forwardRef)(function(r,e){var t=r.className,n=r.style,a=r.classNames,o=r.expand,i=o===void 0?!0:o,s=r.setExpand,c=r.bottomAddons,p=r.topAddons,f=r.onSizeChange,g=r.heights,v=r.onSend,y=O()(r,sl),h=ll(),S=h.styles;return(0,l.jsx)(il.Z,{className:t,classNames:a,fullscreen:i,headerHeight:g==null?void 0:g.headerHeight,maxHeight:g==null?void 0:g.maxHeight,minHeight:g==null?void 0:g.minHeight,onSizeChange:f,placement:"bottom",size:{height:g==null?void 0:g.inputHeight,width:"100%"},style:u()({zIndex:10},n),children:(0,l.jsxs)("section",{className:S.container,style:{minHeight:g==null?void 0:g.minHeight},children:[p,(0,l.jsx)("div",{className:S.textareaContainer,children:(0,l.jsx)(so.Z,u()({className:S.textarea,onSend:function(){v==null||v(),s==null||s(!1)},ref:e,type:"pure"},y))}),c]})})}),dl=(0,m.memo)(cl),ul=d(26904),pl=d(48869),fl=d(61760),gl=d(23512),ml=d(74450),po=d(22380),vl=d(64259),bl=d(85081),fo=d(66321),hl=d(97601),yl=d(68537),we=d(38794),xl=d(76940),Sl=d(49505),_={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}},Cl=d(31927),jl=function(e){var t=e.type,n=e.scale,a=e.appearance,o=(0,Cl.Z)(t),i=a==="dark";return H()(H()(H()(H()(H()(H()(H()(H()(H()(H()({},"color".concat(o,"Bg"),n[a][1]),"color".concat(o,"BgHover"),n[a][2]),"color".concat(o,"Border"),n[a][4]),"color".concat(o,"BorderHover"),n[a][i?5:3]),"color".concat(o,"Hover"),n[a][i?10:8]),"color".concat(o),n[a][9]),"color".concat(o,"Active"),n[a][i?7:10]),"color".concat(o,"TextHover"),n[a][i?10:8]),"color".concat(o,"Text"),n[a][9]),"color".concat(o,"TextActive"),n[a][i?7:10])},kl=function(e){var t=e.scale,n=e.appearance;return{colorBgContainer:n==="dark"?t[n][1]:t[n][0],colorBgElevated:n==="dark"?t[n][2]:t[n][0],colorBgLayout:n==="dark"?t[n][0]:t[n][1],colorBgMask:t.lightA[8],colorBgSpotlight:t[n][5],colorBorder:t[n][4],colorBorderSecondary:t[n][3],colorFill:t["".concat(n,"A")][3],colorFillQuaternary:t["".concat(n,"A")][0],colorFillSecondary:t["".concat(n,"A")][2],colorFillTertiary:t["".concat(n,"A")][1],colorText:t[n][12],colorTextQuaternary:t[n][6],colorTextSecondary:t[n][10],colorTextTertiary:t[n][8]}},wl={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},go=function(e){var t=e?"dark":"light",n=_.gray[t][11],a=_.gray[t][7],o=e?_.red[t][9]:_.volcano[t][9],i=e?_.gold[t][9]:_.orange[t][9],s=e?_.lime[t][9]:_.green[t][9],c=e?_.blue[t][9]:_.geekblue[t][9];return{colors:{"editor.foreground":n},name:t,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:s},enumMember:{foreground:c},macro:{foreground:s},"parameter.label:dart":{foreground:a},"property:dart":{foreground:s},tomlArrayKey:{foreground:o},"variable.constant":{foreground:s},"variable.defaultLibrary":{foreground:o},"variable:dart":{foreground:s}},tokenColors:[{scope:"meta.embedded",settings:{foreground:a}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:n}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:c}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:s}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:n}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:a}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:o}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:o}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:a}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:i}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:o}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:n}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:c}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:n}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:c}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:s}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:a}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:a}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:o}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:i}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:s}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:n}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:n}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:a}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:a}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:i}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:o}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:s}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:o}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:o}},{name:"java source",scope:"source.java",settings:{foreground:n}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:a}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:i}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:o}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:c}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:n}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:c}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:c}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:c}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:s}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:c}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:s}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:n}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:s}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:c}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:o}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:o}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:n}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:s}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:c}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:n}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:s}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:i}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:a}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:c}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:c}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:c}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:n}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:c}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:c}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:a}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:c}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:c}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:c}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:s}},{name:"python type",scope:"support.type.python",settings:{foreground:c}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:c}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:s}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:a}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:i}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:s}},{name:"Operators",scope:"keyword.operator",settings:{foreground:a}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:c}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:c}},{name:"Keywords",scope:"keyword",settings:{foreground:c}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:o}},{name:"Variables",scope:"variable",settings:{foreground:n}},{name:"Variables",scope:"variable.c",settings:{foreground:a}},{name:"Language variables",scope:"variable.language",settings:{foreground:o}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:a}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:o}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:c}},{name:"Packages",scope:"token.package",settings:{foreground:a}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:i}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:o}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:o}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:o}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:o}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:n}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:o}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:c}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:s}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:i}},{name:"Storage",scope:"storage",settings:{foreground:c}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:c}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:c}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:o}},{name:"Support",scope:"support.function",settings:{foreground:c}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:n}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:a}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:s}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:a}},{name:"Strings",scope:"string",settings:{foreground:s}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:c}},{name:"Integers",scope:"constant.numeric",settings:{foreground:s}},{name:"Constants",scope:"constant",settings:{foreground:s}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:s}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:n}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:s}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:i}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:s}},{name:"Selector",scope:"meta.selector",settings:{foreground:c}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:o}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:i}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:n}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:s}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:o}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:c}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:n}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:n}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:i}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:c}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:c}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:a}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:n}},{name:"Broken",scope:"invalid.broken",settings:{foreground:n}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:n}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:s}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:s}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:n}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:c}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:c}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:o}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:c}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:c}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:a}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:a}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:o}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:o}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:i}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:a}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:s}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:s}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:i}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:c}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:c}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:c}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:c}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:i}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:c}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:a}},{name:"brace function",scope:"function.brace",settings:{foreground:a}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:a}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:c}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:c}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:c}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:s}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:s}},{name:"sass selector",scope:"selector.sass",settings:{foreground:n}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:o}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:a}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:o}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:n}},{scope:"token.info-token",settings:{foreground:i}},{scope:"token.warn-token",settings:{foreground:s}},{scope:"token.error-token",settings:{foreground:o}},{scope:"token.debug-token",settings:{foreground:c}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:c}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:a}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:c}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:i}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:o}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:n}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:n}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:s}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:s}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:s}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:s}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:c}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:o}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:c}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:o}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:c}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:s}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:c}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:n}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:c}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:o}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:n}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:c}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:n}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:s}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:n}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:o}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:o}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:i}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:n}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:s}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:o}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:c}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:n}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:o}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:o}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:c}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:n}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:c}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:c}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:a}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:s}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:a}},{name:"link",scope:["constant.character.xi"],settings:{foreground:i}},{name:"accent",scope:["accent.xi"],settings:{foreground:i}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:s}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:n}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:a}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:o}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:n}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:a}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:a}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:a}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:c}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:o}},{scope:["entity.name.variable.field.cs"],settings:{foreground:n}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:n}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:s}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:o}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:a}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:o}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:n}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:o}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:n}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:a}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:c}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:s}},{scope:["constant.character.escape"],settings:{foreground:c}},{scope:["string.regexp"],settings:{foreground:n}},{scope:["log.info"],settings:{foreground:s}},{scope:["log.warning"],settings:{foreground:o}},{scope:["log.error"],settings:{foreground:n}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:t}},mn=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"],mo="txt",$e=[mo],vo,Al=function(){var r=Pe()(ce()().mark(function e(t){var n,a;return ce()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=vo,a=t.toLowerCase(),!(n&&$e.includes(a))){i.next=4;break}return i.abrupt("return",n);case 4:return mn.includes(a)&&!$e.includes(a)&&$e.push(a),i.next=7,(0,xl.e$)({langs:$e,themes:[go(!0),go(!1)]});case 7:return n=i.sent,vo=n,i.abrupt("return",n);case 10:case"end":return i.stop()}},e)}));return function(t){return r.apply(this,arguments)}}(),Ll=function(e,t,n){return(0,Sl.ZP)([t==null?void 0:t.toLowerCase(),n?"dark":"light",e].join("-"),Pe()(ce()().mark(function a(){var o,i,s;return ce()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,o=t.toLowerCase(),p.next=4,Al(o);case 4:return i=p.sent,s=i==null?void 0:i.codeToHtml(e,{lang:mn.includes(o)?o:mo,theme:n?"dark":"light",transformers:[(0,we.hu)(),(0,we.d0)(),(0,we.dY)(),(0,we.Eu)(),(0,we.p4)()]}),p.abrupt("return",s);case 9:return p.prev=9,p.t0=p.catch(0),p.abrupt("return","");case 12:case"end":return p.stop()}},a,null,[[0,9]])})),{revalidateOnFocus:!1})},Ml=d(5312),bo,ho,yo,Nl=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.cx,a=r.prefixCls,o=r.stylish,i="".concat(a,"-highlighter");return{loading:n(o.blur,e(bo||(bo=b()([`
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
      `])),t.fontFamilyCode,t.colorTextTertiary,t.borderRadius)),shiki:n("".concat(i,"-shiki"),e(ho||(ho=b()([`
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
      `])),t.colorFillTertiary,t.colorWarningBg,t.colorErrorBg,t.colorFillTertiary,t.colorBorderSecondary,t.borderRadius,t.colorErrorBg,t.colorErrorText,t.colorSuccessBg,t.colorSuccessText)),unshiki:e(yo||(yo=b()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),t.colorTextDescription)}}),xo=(0,m.memo)(function(r){var e=r.children,t=r.language,n=r.className,a=r.style,o=Nl(),i=o.styles,s=o.cx,c=(0,on.r)(),p=c.isDarkMode,f=Ll(e.trim(),t,p),g=f.data,v=f.isLoading;return(0,l.jsxs)(l.Fragment,{children:[v||!g?(0,l.jsx)("div",{className:s(i.unshiki,n),style:a,children:(0,l.jsx)("pre",{children:(0,l.jsx)("div",{children:e.trim()})})}):(0,l.jsx)("div",{className:s(i.shiki,n),dangerouslySetInnerHTML:{__html:g},style:a}),v&&(0,l.jsx)(Le.D,{align:"center",className:i.loading,gap:8,horizontal:!0,justify:"center",children:(0,l.jsx)(ae.Z,{icon:Ml.Z,spin:!0})})]})}),So,Co,jo,ko,wo,Ao,Lo,Mo=(0,I.kc)(function(r,e){var t=r.token,n=r.css,a=r.cx,o=r.prefixCls,i=r.stylish,s="".concat(o,"-highlighter"),c="".concat(s,"-hover-btn"),p="".concat(s,"-hover-lang"),f=n(So||(So=b()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),e==="block"?t.colorFillTertiary:"transparent",e==="block"?"transparent":t.colorBorder,e==="block"?t.colorFillTertiary:t.colorFillQuaternary);return{button:a(c,n(Co||(Co=b()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),e==="pure"?0:"12px",e==="pure"?0:"12px")),container:a(s,e!=="pure"&&f,n(jo||(jo=b()([`
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
            text-wrap: nowrap !important;
            background: transparent !important;
          }
        `])),t.borderRadius,t.motionEaseOut,c,p,e==="pure"?0:"16px")),header:n(ko||(ko=b()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),t.colorFillQuaternary),lang:a(p,i.blur,n(wo||(wo=b()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),t.fontFamilyCode,t.colorTextSecondary)),scroller:n(Ao||(Ao=b()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:n(Lo||(Lo=b()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),t.colorTextDescription,o,t.colorTextDescription)}}),Ol=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],El=mn.map(function(r){return{label:r,value:r.toLowerCase()}}),No=(0,m.memo)(function(r){var e=r.children,t=r.language,n=t===void 0?"markdown":t,a=r.className,o=r.style,i=r.allowChangeLanguage,s=i===void 0?!1:i,c=r.fileName,p=r.icon,f=r.contentStyle,g=O()(r,Ol),v=(0,m.useState)(!0),y=V()(v,2),h=y[0],S=y[1],x=(0,m.useState)(n||"markdown"),k=V()(x,2),j=k[0],N=k[1],A=Mo("block"),L=A.styles,$=A.cx,D=$(L.container,a);return(0,l.jsxs)("div",u()(u()({className:D,"data-code-type":"highlighter",style:o},g),{},{children:[(0,l.jsxs)(Le.D,{align:"center",className:L.header,horizontal:!0,justify:"space-between",children:[(0,l.jsx)(bl.Z,{icon:h?hl.Z:yl.Z,onClick:function(){return S(!h)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),s&&!c?(0,l.jsx)(fo.default,{className:L.select,onSelect:N,options:El,size:"small",suffixIcon:!1,value:j.toLowerCase(),variant:"borderless"}):(0,l.jsxs)(Le.D,{align:"center",className:L.select,gap:2,horizontal:!0,children:[p,(0,l.jsx)("span",{children:c||j})]}),(0,l.jsx)(po.Z,{content:e,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,l.jsx)(xo,{language:j==null?void 0:j.toLowerCase(),style:h?f:u()(u()({},f),{},{height:0,overflow:"hidden"}),children:e})]}))}),Tl=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle"],Zl=(0,m.memo)(function(r){var e=r.fullFeatured,t=r.copyButtonSize,n=t===void 0?"site":t,a=r.children,o=r.language,i=r.className,s=r.style,c=r.copyable,p=c===void 0?!0:c,f=r.showLanguage,g=f===void 0?!0:f,v=r.type,y=v===void 0?"block":v,h=r.spotlight,S=r.allowChangeLanguage,x=r.fileName,k=r.icon,j=r.contentStyle,N=O()(r,Tl),A=Mo(y),L=A.styles,$=A.cx,D=$(L.container,i);return e?(0,l.jsx)(No,u()(u()({allowChangeLanguage:S,className:i,contentStyle:j,fileName:x,icon:k,language:o,style:s},N),{},{children:a})):(0,l.jsxs)("div",u()(u()({className:D,"data-code-type":"highlighter",style:s},N),{},{children:[h&&(0,l.jsx)(ml.Z,{size:240}),p&&(0,l.jsx)(po.Z,{className:L.button,content:a,placement:"left",size:n}),g&&o&&(0,l.jsx)(vl.Z,{className:L.lang,children:o.toLowerCase()}),(0,l.jsx)("div",{className:L.scroller,children:(0,l.jsx)(xo,{language:o==null?void 0:o.toLowerCase(),style:j,children:a})})]}))}),Pl=d(77314),Dl=d(24934),Rl=d(72076),Il=d(52124),Fl=d(34738),Bl=d(14192),zl=d(50658),Hl=d(34817),$l=d(33443),Vl=d(22669),Ql=d(86751),Ul=d(98872),Gl=d(1196),Jl=d(43040),Wl=d(5024),Kl=d(93424),Xl=d(8827),Yl=d(80649),ql=d(53350),_l=d(16642),ec=d(54373),nc=d(46104),tc=d(95935),rc=d(70940),oc=d(14444),ac=d(43869),ic=d(40901),sc=d(3029),lc=d(8561),cc=d(72121),dc=d(45468),uc=d(20449),pc=d(74878),fc=d(93432),gc=d(82028),mc=d(82121),vc=d(25951),bc=d(96753),hc=d(91272),yc=d(99641),xc=d(63605),Sc=d(93793),Cc=d(76079),jc=d(66538),kc=d(70190)}}]);
