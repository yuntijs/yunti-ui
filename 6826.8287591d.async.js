"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6826],{76826:function(ql,pn,d){d.r(pn),d.d(pn,{Affix:function(){return ol.Z},Alert:function(){return lr},Anchor:function(){return al.Z},AntdMentions:function(){return il.Z},App:function(){return mr},AutoComplete:function(){return sl.Z},Avatar:function(){return _e.C},BackTop:function(){return ll.Z},Badge:function(){return mt.Z},BaseMonacoEditor:function(){return Xe},Breadcrumb:function(){return ut.Z},Button:function(){return oe.ZP},Calendar:function(){return cl.Z},Card:function(){return qi.Z},Carousel:function(){return dl.Z},Cascader:function(){return ul.Z},ChatInputActionBar:function(){return Is.Z},ChatInputArea:function(){return Ps},ChatInputAreaInner:function(){return zr.Z},ChatSendButton:function(){return Ds.Z},Checkbox:function(){return pl.Z},Col:function(){return nn.Z},Collapse:function(){return tn.Z},CollapseGroup:function(){return ze},CollapseTable:function(){return Fr},ColorPicker:function(){return gl.Z},ConfigContext:function(){return je},ConfigProvider:function(){return yo},DatePicker:function(){return fl.default},Descriptions:function(){return en},Divider:function(){return xt},DragPanel:function(){return wo},Drawer:function(){return ns},Dropdown:function(){return kr},Empty:function(){return Hn.Z},Flex:function(){return N.Z},FloatButton:function(){return ml.Z},Form:function(){return Mr},FormCollapseList:function(){return Lr},FormHelper:function(){return Or},FullFeaturedHighlighter:function(){return so},Grid:function(){return vl.ZP},HeaderButtonGroup:function(){return Ct},Highlighter:function(){return rl},Image:function(){return bl.Z},Input:function(){return hl.Z},InputNumber:function(){return ar.Z},Layout:function(){return yl.Z},List:function(){return xl.Z},LogViewer:function(){return Ro},Logo:function(){return Zo},Markdown:function(){return Ul.Z},Mentions:function(){return Pa},Menu:function(){return Cl.Z},MobileChatInputArea:function(){return Rs.Z},MobileChatSendButton:function(){return Bs.Z},Modal:function(){return ee},MonacoController:function(){return Ba.Q},MonacoDiffEditor:function(){return Qa},MonacoEditor:function(){return Ha},NotificationGlobalStyle:function(){return ur},Page:function(){return ge},Pagination:function(){return kl.Z},Popconfirm:function(){return jl.Z},Popover:function(){return Al.Z},ProCard:function(){return Ee},Progress:function(){return wl.Z},QRCode:function(){return Ll.Z},Radio:function(){return Rr},Rate:function(){return Ml.Z},Result:function(){return gt.ZP},Row:function(){return rr.Z},Segmented:function(){return Nl.Z},Select:function(){return Gr.default},Skeleton:function(){return se.Z},Slider:function(){return or.Z},SliderInput:function(){return Bi},Space:function(){return qe.Z},Spin:function(){return Ol.Z},Statistic:function(){return Zl.Z},Steps:function(){return Tl.Z},Switch:function(){return El.Z},SyntaxHighlighter:function(){return Kl.Z},Table:function(){return ne},Tabs:function(){return Pl.Z},Tag:function(){return Il.Z},TimePicker:function(){return Bl.Z},Timeline:function(){return Rl.Z},Tooltip:function(){return ue.Z},Tour:function(){return Fl.Z},Transfer:function(){return zl.Z},Tree:function(){return Hl.Z},TreeSelect:function(){return Ql.Z},Typography:function(){return Ne},Upload:function(){return Jl.Z},Watermark:function(){return Gl.Z},colorScales:function(){return W},colors:function(){return W},generateColorNeutralPalette:function(){return Ws},generateColorPalette:function(){return Ks},message:function(){return Sl.ZP},neutralColorScales:function(){return Ys},notification:function(){return $i},theme:function(){return Dl.Z},useAutoFocus:function(){return Nr},useCdnFn:function(){return bn},useLink:function(){return hn},useResponsive:function(){return Wl.F},useTheme:function(){return Z.Fg},useThemeMode:function(){return $e.r},version:function(){return Vl.Z},withFormHelper:function(){return bs}});var co=d(77117),u=d.n(co),uo=d(95530),A=d.n(uo),po=d(95428),h=d(50959),go=d(18840),v=d.n(go),Z=d(4377),gn,fo=(0,Z.kc)(function(o){var e=o.css,t=o.token,n=o.prefixCls;return{root:e(gn||(gn=v()([`
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
    `])),t.margin,n,t.paddingSM,t.paddingSM,t.paddingSM,t.fontSize,t.padding,t.padding,t.paddingSM,t.paddingSM,t.paddingXS,t.colorBgContainer)}}),s=d(11527),mo=["className","variant"],vo=po.Z.Group,ze=function(e){var t=e.className,n=e.variant,a=A()(e,mo),r=fo(),i=r.styles,l=r.cx;return(0,s.jsx)(vo,u()({className:l(i.root,t),collapsible:n==="pure"?"icon":"header",variant:n},a))},fn=d(56264),bo="https://unpkg.com",ho="https://registry.npmmirror.com",mn=function(e){var t=e.pkg,n=e.version,a=n===void 0?"latest":n,r=e.path,i=e.proxy;switch(i){case"unpkg":return(0,fn.Z)(bo,"".concat(t,"@").concat(a),r);default:return(0,fn.Z)(ho,t,a,"files",r)}},je=(0,h.createContext)(null),yo=(0,h.memo)(function(o){var e=o.children,t=o.config;return(0,s.jsx)(je.Provider,{value:t,children:e})}),vn=function(e){var t=e.pkg,n=e.version,a=e.path;return mn({path:a,pkg:t,proxy:"aliyun",version:n})},bn=function(){var e=(0,h.useContext)(je);return e?(e==null?void 0:e.proxy)!=="custom"?function(t){var n=t.pkg,a=t.version,r=t.path;return mn({path:r,pkg:n,proxy:e.proxy,version:a})}:(e==null?void 0:e.customCdnFn)||vn:vn},hn=function(){var e=(0,h.useContext)(je);return e==null?void 0:e.Link},xo=d(28152),P=d.n(xo),Co=d(69343),yn=d(61478),N=d(94614),oe=d(34309),So=d(7681),ko=d.n(So),xn,Cn,Sn,kn,jn,jo=(0,Z.kc)(function(o){var e=o.css,t=o.token,n=o.prefixCls;return{root:e(xn||(xn=v()([`
      overflow: hidden;
    `]))),wrapper:e(Cn||(Cn=v()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),t.marginLG),content:e(Sn||(Sn=v()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.borderRadiusLG,t.boxShadowSecondary),dragWrapper:e(kn||(kn=v()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:e(jn||(jn=v()([`
      cursor: move;
    `])))}}),Ao=["title","classNames","defaultPosition","onPositionChange"],wo=(0,h.memo)(function(o){var e=o.title,t=o.classNames,n=t===void 0?{}:t,a=o.defaultPosition,r=o.onPositionChange,i=A()(o,Ao),l=jo(),c=l.styles,p=l.cx,f=(0,h.useState)({left:0,top:0,bottom:0,right:0}),g=P()(f,2),m=g[0],b=g[1],y=(0,h.useRef)(null),x=function(C,k){var w,j=window.document.documentElement,E=j.clientWidth,D=j.clientHeight,B=(w=y.current)===null||w===void 0?void 0:w.getBoundingClientRect();B&&b({left:-B.left+k.x,right:E-(B.right-k.x),top:-B.top+k.y,bottom:D-(B.bottom-k.y)})};return(0,s.jsx)(yn.Z,u()(u()({},i),{},{classNames:u()(u()({},n),{},{wrapper:p(c.wrapper,n.wrapper),content:p(c.content,n.content)}),destroyOnClose:!0,drawerRender:function(C){return(0,s.jsx)(ko(),{bounds:m,defaultPosition:a,handle:".".concat(c.dragHandle),nodeRef:y,onStart:function(w,j){return x(w,j)},onStop:function(w,j){r==null||r({x:j.x,y:j.y})},children:(0,s.jsx)("div",{className:c.dragWrapper,ref:y,children:C})})},mask:!1,rootClassName:c.root,title:(0,s.jsxs)(N.Z,{align:"center",className:c.dragHandle,children:[(0,s.jsx)(N.Z,{flex:2,children:e}),(0,s.jsx)(N.Z,{children:(0,s.jsx)(oe.ZP,{className:c.dragHandle,icon:(0,s.jsx)(Co.Z,{}),type:"text"})})]})}))}),Ae=d(24819),Lo=d(62812),He=d.n(Lo),Mo=(0,h.memo)(function(o){var e=Object.assign({},(He()(o),o));return(0,s.jsx)("svg",u()(u()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},e),{},{children:(0,s.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),An=(0,h.memo)(function(o){var e=Object.assign({},(He()(o),o));return(0,s.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},e),{},{children:[(0,s.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,s.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,s.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),wn=(0,h.memo)(function(o){var e=Object.assign({},(He()(o),o));return(0,s.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,s.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,s.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,s.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,s.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,s.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,s.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,s.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),Ln,No=(0,Z.kc)(function(o){var e=o.css;return{extraTitle:e(Ln||(Ln=v()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),Oo=["type","size","style","extra","className"],Zo=(0,h.memo)(function(o){var e=o.type,t=e===void 0?"img":e,n=o.size,a=n===void 0?32:n,r=o.style,i=o.extra,l=o.className,c=A()(o,Oo),p=(0,Z.Fg)(),f=No(),g=f.styles,m;switch(t){case"text":{m=(0,s.jsx)(wn,u()({className:l,height:a,style:r,width:a*2.9375},c));break}case"combine":{m=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(An,u()({height:a,style:r,width:a},c)),(0,s.jsx)(wn,{style:{height:a,marginLeft:Math.round(a/4),width:"auto"}})]});break}case"img":default:{m=(0,s.jsx)(An,u()({height:a,style:r,width:a},c));break}}if(!i)return m;var b=Math.round(a/3*1.9);return(0,s.jsxs)(Ae.D,u()(u()({align:"center",className:l,horizontal:!0,style:r},c),{},{children:[m,(0,s.jsx)(Mo,{style:{color:p.colorFill,height:b,width:b}}),(0,s.jsx)("div",{className:g.extraTitle,style:{fontSize:b},children:i})]}))}),ae=d(244),Mn=d(13135),To=d(79858),Eo=d(54198),Po=d(74611),Nn,On,Io=(0,Z.kc)(function(o){var e=o.css,t=o.token,n="#222222";return{root:e(Nn||(Nn=v()([`
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
      `])),n,t.borderRadiusLG,t.marginXXS,t.paddingXS,n,t.borderRadiusLG,t.borderRadiusLG,t.borderRadius,t.borderRadius,n,t.borderRadiusLG),searchBarIcon:e(On||(On=v()([`
        font-size: 16px;
      `])))}},{hashPriority:"low"}),Do=["className","id","style","height","onScroll"],Ro=function(e){var t=e.className,n=e.id,a=e.style,r=e.height,i=e.onScroll,l=A()(e,Do),c=Io(),p=c.cx,f=c.styles;return(0,s.jsx)("div",{className:p(f.root,t),id:n,style:u()({height:r},a),children:(0,s.jsx)(Mn.Uu,{render:function(m){var b=m.follow,y=m.onScroll;return(0,s.jsx)(Mn.A9,u()(u()({},l),{},{follow:b,height:r,iconFilterLines:(0,s.jsx)(ae.Z,{className:f.searchBarIcon,icon:To.Z}),iconFindNext:(0,s.jsx)(ae.Z,{className:f.searchBarIcon,icon:Eo.Z}),iconFindPrevious:(0,s.jsx)(ae.Z,{className:f.searchBarIcon,icon:Po.Z}),onScroll:function(S){y(S),i==null||i(S)}}))},startFollowing:!0})})},Bo=d(21320),I=d.n(Bo),Fo=d(41979),zo=d(63850),Ho=d(62304),Qo=d(31463),Jo=d(50834),Vo=d(12922),T=d(65694),Go=d(15033),Qe=d.n(Go),Uo=d(96345),Je=d.n(Uo),Ko=d(71160),Wo=d.n(Ko),Yo=d(41607),$o=d.n(Yo),Xo=d(13762),Ve=d.n(Xo),qo=d(41206),Ge=d.n(qo),we=function(o){Ve()(t,o);var e=Ge()(t);function t(){return Qe()(this,t),e.apply(this,arguments)}return Je()(t,[{key:"createDOM",value:function(a){var r=Wo()($o()(t.prototype),"createDOM",this).call(this,a);return r.classList.add("align-middle"),r}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(a){return new t(a.__text,a.__key)}},{key:"importJSON",value:function(a){var r=(0,T.MX)(a.text);return r.setFormat(a.format),r.setDetail(a.detail),r.setMode(a.mode),r.setStyle(a.style),r}}]),t}(T.R2);function _l(o){return new we(o)}var ie=d(31692),Le=d(95138),_o=d(90696),X=d.n(_o),ue=d(32588),ea=d(55608),Zn=(0,h.createContext)(null),na=(0,h.memo)(function(o){var e=o.children,t=o.value;return(0,s.jsx)(Zn.Provider,{value:t,children:e})}),ta=function(){var e=(0,h.useContext)(Zn);return e==null?void 0:e.optionsMap},ra=d(457),oa=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,aa="\\(",ia=function(e){return"(?:"+e.join("|")+")"},sa=function(e,t){var n=e.length===0?"":"(?!"+e.join("|")+")";return n+"[^\\s"+t+"]"},la=function(e){return"(?:\\.[ |$]|\\s|["+e+"]|)"},ca=75,da=function(e,t){var n=(0,h.useRef)(null),a=(0,ie.g)(),r=P()(a,1),i=r[0],l=(0,ra.y)(e),c=P()(l,3),p=c[0],f=c[1],g=c[2],m=(0,h.useCallback)(function(y){var x=(0,T.dL)(),S=x==null?void 0:x.getNodes();if(!p&&(S==null?void 0:S.length)===1&&i.dispatchCommand(t,void 0),p&&(0,T.iO)(x)){y.preventDefault();var C=(0,T.gI)(e);if((0,T.k$)(C))return t&&i.dispatchCommand(t,void 0),C.remove(),!0}return!1},[p,e,t,i]),b=(0,h.useCallback)(function(y){y.stopPropagation(),g(),f(!0)},[f,g]);return(0,h.useEffect)(function(){var y=n.current;return y&&y.addEventListener("click",b),function(){y&&y.removeEventListener("click",b)}},[b]),(0,h.useEffect)(function(){return(0,Le.qV)(i.registerCommand(T.MK,m,T.KB),i.registerCommand(T.aR,m,T.KB))},[i,g,m]),[n,p]},ec=function(){var e=useRef(null),t=useState(!1),n=_slicedToArray(t,2),a=n[0],r=n[1],i=useCallback(function(l){l.stopPropagation(),r(function(c){return!c})},[]);return useEffect(function(){var l=e.current;return l&&l.addEventListener("click",i),function(){l&&l.removeEventListener("click",i)}},[i]),[e,a,r]};function ua(o,e,t,n){return new RegExp((e?"(^|\\s|".concat(e,")("):"(^|\\s)(")+ia(o)+"((?:"+sa(o,t)+(n?la(t):"")+"){0,"+ca+"}))$")}function pa(o,e,t,n,a){var r=ua(e,t,n,a).exec(o);if(r!==null){var i=r[1],l=r[2],c=r[3];if(l.length>0)return{leadOffset:r.index+i.length,matchingString:c,replaceableString:l}}return null}var ga=function(e,t){var n=t.punctuation,a=t.preTriggerChars,r=t.allowSpaces,i=(0,h.useState)(null),l=P()(i,2),c=l[0],p=l[1],f=(0,h.useCallback)(function(g){var m=pa(g,e,a,n,r);if(m){var b=m.replaceableString,y=m.matchingString,x=b.lastIndexOf(y),S=x===-1?b:b.slice(0,Math.max(0,x))+b.slice(Math.max(0,x+y.length));if(p(S||null),m.replaceableString)return m}else p(null);return null},[a,r,n,e]);return{trigger:c,checkForMentionMatch:f}},Tn,En,Pn,fa=(0,Z.kc)(function(o,e){var t=o.css,n=o.token,a=o.prefixCls,r=e.isSelected,i=e.isError,l=function(){return i?r?{background:n.colorErrorBgActive,border:n.colorErrorBorderHover,color:n.colorErrorTextActive}:{background:n.colorErrorBg,border:n.colorErrorBorder,color:n.colorErrorText}:r?{background:n.colorInfoBgHover,border:n.colorInfoBorder,color:n.colorInfoText}:{background:n.colorFillTertiary,border:"transparent",color:n.colorInfoText}},c=l(),p=c.background,f=c.border,g=c.color;return{root:t(Tn||(Tn=v()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),n.fontFamilyCode,g,p,f,n.borderRadius),text:t(En||(En=v()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.colorTextSecondary),error:t(Pn||(Pn=v()([`
        color: `,`;
      `])),n.colorErrorText)}}),In=(0,T.fA)("INSERT_MENTION_COMMAND"),Dn=(0,T.fA)("DELETE_MENTION_COMMAND"),Rn=(0,T.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Bn=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,ma=(0,h.memo)(function(o){var e=o.nodeKey,t=o.variable,n=ta(),a=(0,ie.g)(),r=P()(a,1),i=r[0],l=da(e,Dn),c=P()(l,2),p=c[0],f=c[1],g=n==null?void 0:n[t],m=fa({isSelected:f,isError:!g||!!g.error}),b=m.styles;(0,h.useEffect)(function(){if(!i.hasNodes([pe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[i]);var y=(0,s.jsx)(N.Z,{className:b.root,ref:p,children:(0,s.jsxs)(N.Z,{align:"center",gap:2,children:[(!g||g.error)&&(0,s.jsx)(ae.Z,{className:b.error,icon:ea.Z}),(g==null?void 0:g.icon)&&(0,s.jsx)(N.Z,{children:g.icon}),(0,s.jsx)(N.Z,{className:b.text,gap:2,title:(g==null?void 0:g.label)||t,children:(0,s.jsx)("span",{children:(g==null?void 0:g.label)||t})})]})});return g!=null&&g.error?(0,s.jsx)(ue.Z,{title:g==null?void 0:g.error,children:y}):y}),pe=function(o){Ve()(t,o);var e=Ge()(t);function t(n,a,r){var i;return Qe()(this,t),i=e.call(this,r),I()(X()(i),"__variable",void 0),i.__variable=n,i}return Je()(t,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var a=document.createElement("div");return a.style.display="inline-flex",a.style.alignItems="center",a.style.verticalAlign="middle",a}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,s.jsx)(ma,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var a=this.getLatest();return a.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(a){return new t(a.__variable)}},{key:"importJSON",value:function(a){var r=Ue(a.variable);return r}}]),t}(T.Ij);function Ue(o){return new pe(o)}function nc(o){return o instanceof pe}var tc=(0,T.fA)("INSERT_MENTION_COMMAND"),rc=(0,T.fA)("DELETE_MENTION_COMMAND"),oc=(0,T.fA)("CLEAR_HIDE_MENU_TIMEOUT"),ac=(0,T.fA)("UPDATE_MENTIONS_OPTIONS"),va=function(e,t,n){if(e.isSimpleText())for(var a=e.getPreviousSibling(),r=e.getTextContent(),i=e,l;;){l=t(r);var c=l===null?"":r.slice(l.end);if(r=c,c===""){var p=i.getNextSibling();if((0,T.Gg)(p)){c=i.getTextContent()+p.getTextContent();var f=t(c);if(f===null){p.markDirty();return}else if(f.start!==0)return}}else{var g=t(c);if(g!==null&&g.start===0)return}if(l===null)return;if(!(l.start===0&&(0,T.Gg)(a)&&a.isTextEntity())){var m=void 0;if(l.start===0){var b=i.splitText(l.end),y=P()(b,2);m=y[0],i=y[1]}else{var x=i.splitText(l.start,l.end),S=P()(x,3);m=S[1],i=S[2]}var C=n(m);if(m.replace(C),i==null)return}}};function ba(o){var e=o.split(`
`);return JSON.stringify({root:{children:e.map(function(t){return{children:[{detail:0,format:0,mode:"normal",style:"",text:t,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var ha=(0,h.memo)(function(o){var e=o.onInsert,t=(0,ie.g)(),n=P()(t,1),a=n[0];(0,h.useEffect)(function(){if(!a.hasNodes([pe]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[a]);var r=(0,h.useCallback)(function(c){e&&e();var p=c.getTextContent().slice(2,-2);return(0,T.U2)(Ue(p))},[e]),i=(0,h.useCallback)(function(c){var p=Bn.exec(c);if(p===null)return null;var f=p.index,g=f+p[0].length;return{end:g,start:f}},[]),l=(0,h.useCallback)(function(c){return va(c,i,r)},[r,i]);return(0,h.useEffect)(function(){return Bn.lastIndex=0,(0,Le.qV)(a.registerNodeTransform(we,l))},[]),null}),Fn=(0,h.memo)(function(o){var e=o.onInsert,t=o.onDelete,n=(0,ie.g)(),a=P()(n,1),r=a[0];return(0,h.useEffect)(function(){if(!r.hasNodes([pe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,Le.qV)(r.registerCommand(In,function(i){r.dispatchCommand(Rn,null);var l=Ue(i);return(0,T.od)([l]),e&&e(),!0},T.VN),r.registerCommand(Dn,function(){return t&&t(),!0},T.VN))},[r,e,t]),null});Fn.displayName="MentionNodePlugin";var zn=d(40268),ya=d(10422),xa=function(o){Ve()(t,o);var e=Ge()(t);function t(n,a,r){var i;return Qe()(this,t),i=e.call(this,n),I()(X()(i),"label",void 0),I()(X()(i),"value",void 0),I()(X()(i),"icon",void 0),I()(X()(i),"extraElement",void 0),I()(X()(i),"keywords",void 0),I()(X()(i),"keyboardShortcut",void 0),I()(X()(i),"onSelect",void 0),I()(X()(i),"disabled",void 0),I()(X()(i),"data",void 0),i.value=n,i.label=a,i.keywords=r.keywords||[],i.icon=r.icon,i.extraElement=r.extraElement,i.keyboardShortcut=r.keyboardShortcut,i.onSelect=r.onSelect.bind(X()(i)),i.disabled=r.disabled,i.data=r.data,i}return Je()(t)}(zn.n),Ca=function(e,t){var n=(0,ie.g)(),a=P()(n,1),r=a[0],i=(0,h.useMemo)(function(){var l=e.map(function(p){return new xa(p.value,p.label,{icon:p.icon,onSelect:function(){r.dispatchCommand(In,p.value)},disabled:p.disabled,data:p.data,extraElement:p.extraElement,keywords:p.keywords,keyboardShortcut:p.keyboardShortcut})});if(!t)return l;var c=new RegExp(t,"i");return l.filter(function(p){var f;return c.test(p.label)||((f=p.keywords)===null||f===void 0?void 0:f.some(function(g){return c.test(g)}))})},[e,t,r]);return{options:i}},Hn=d(27387),Me=d(17575),Sa=d(5726),Ce=d.n(Sa),ka=d(92117),ja=d.n(ka),Aa=d(45832),wa=["time","format","relativeTime","tooltip"];Ce().extend(ja());var Ne=Me.Z,Ke=function(e){return Ce()(e?new Date(e):new Date).fromNow()},La=function(e){var t,n=e.time,a=e.format,r=e.relativeTime,i=r===void 0?!0:r,l=e.tooltip,c=A()(e,wa),p=(0,h.useState)(Ke(n)),f=P()(p,2),g=f[0],m=f[1],b=(0,h.useCallback)(function(C){var k=Ce()(),w=Ce()(C),j=k.diff(w);if(j>0&&j<60*60*1e3)return setInterval(function(){m(Ke(C))},60*1e3)},[]);(0,h.useEffect)(function(){var C;return i&&(C=b(new Date(n))),function(){C&&clearInterval(C)}},[i,b,n]),(0,h.useEffect)(function(){if(i){var C=Ke(n);C!==g&&(m(C),b(new Date(n)))}},[n,i,g,b]);var y=Ce()(n).format(a||"YYYY-MM-DD HH:mm:ss"),x=i?g:y,S=(t=l==null?void 0:l.title)!==null&&t!==void 0?t:i?y:void 0;return S&&(0,Aa.Z)(c,"ellipsis.tooltip.title",void 0),(0,s.jsx)(ue.Z,u()(u()({},l||{}),{},{title:S,children:(0,s.jsx)(Ne.Text,u()(u()({},c),{},{children:x}))}))};Ne.Time=La;var We=Ne,Qn,Jn,Vn,Gn,Un,Kn,Wn,Ye=(0,Z.kc)(function(o,e){var t=o.css,n=o.token,a=o.prefixCls,r=e.isSelected,i=e.disabled,l=t(Qn||(Qn=v()([`
      background-color: `,`;
    `])),n.colorFillTertiary);return{anchor:t(Jn||(Jn=v()([`
        z-index: 9999;
      `]))),menuEmpty:t(Vn||(Vn=v()([`
        padding: `,`px;
      `])),n.padding),menuOverlay:t(Gn||(Gn=v()([`
        overflow: auto;

        width: 240px;
        max-height: 320px;
        margin-top: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.marginXXS,n.colorBgElevated,n.borderRadius,n.boxShadow),menuItem:t(Un||(Un=v()([`
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
      `])),i?"not-allowed":"pointer",i?"none":"all",n.paddingSM/2,n.paddingSM,n.borderRadius,i?n.colorTextDisabled:n.colorText,n.fontSize,n.lineHeight,r&&l,l),menuItemIcon:t(Kn||(Kn=v()([`
        color: `,`;
      `])),n.colorInfoText),menuItemLabel:t(Wn||(Wn=v()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Ma=We.Text,Yn=(0,h.memo)(function(o){var e=o.index,t=o.isSelected,n=o.onClick,a=o.onMouseEnter,r=o.option,i=o.queryString,l=Ye({isSelected:t,disabled:r.disabled}),c=l.styles,p=r.label,f=(0,h.useMemo)(function(){var y=p,x="",S="";if(i){var C=new RegExp(i,"i"),k=C.exec(r.label);k&&(y=p.slice(0,Math.max(0,k.index)),x=k[0],S=p.slice(Math.max(0,k.index+k[0].length)))}return{before:y,middle:x,after:S}},[r.label,i,p]),g=f.before,m=f.middle,b=f.after;return(0,s.jsxs)(N.Z,{align:"center",className:c.menuItem,gap:4,onClick:function(){return n(e,r)},onMouseEnter:function(){return a(e,r)},ref:r.setRefElement,tabIndex:-1,children:[(0,s.jsx)(N.Z,{className:c.menuItemIcon,children:r.icon}),(0,s.jsxs)("div",{className:c.menuItemLabel,title:r.label,children:[g,(0,s.jsx)(Ma,{mark:!0,children:m}),b]}),(0,s.jsx)(N.Z,{children:r.extraElement})]},r.key)});Yn.displayName="MentionMenuItem";var Na=(0,h.memo)(function(o){var e=o.selectedIndex,t=o.options,n=o.onClick,a=o.onMouseEnter,r=o.queryString,i=Ye({}),l=i.styles;return(0,s.jsxs)(s.Fragment,{children:[t.length===0&&(0,s.jsx)(Hn.Z,{className:l.menuEmpty}),t.map(function(c,p){return(0,s.jsx)(Yn,{index:p,isSelected:e===p,onClick:n,onMouseEnter:a,option:c,queryString:r},c.key)})]})}),Oa=(0,h.memo)(function(o){var e=o.triggers,t=o.options,n=t===void 0?[]:t,a=o.allowSpaces,r=a===void 0?!0:a,i=o.punctuation,l=i===void 0?oa:i,c=o.preTriggerChars,p=c===void 0?aa:c,f=o.onSelect,g=Ye({}),m=g.styles,b=(0,ie.g)(),y=P()(b,1),x=y[0],S=ga(e,{punctuation:l,preTriggerChars:p,allowSpaces:r}),C=S.trigger,k=S.checkForMentionMatch,w=(0,h.useState)(null),j=P()(w,2),E=j[0],D=j[1],B=Ca(n,E),G=B.options,U=(0,h.useCallback)(function(L,O,Q,z){f==null||f(L,C,E),x.update(function(){O&&L!==null&&L!==void 0&&L.key&&O.remove(),L!=null&&L.onSelect&&L.onSelect(z),Q()})},[x,f,E,C]),V=(0,h.useCallback)(function(L,O){var Q=O.selectedIndex,z=O.selectOptionAndCleanUp,Y=O.setHighlightedIndex;return L.current?ya.createPortal((0,s.jsx)("div",{className:m.menuOverlay,role:"menu",children:(0,s.jsx)(Na,{onClick:function(M,R){R.disabled||(Y(M),z(R))},onMouseEnter:function(M,R){R.disabled||Y(M)},options:G,queryString:E,selectedIndex:Q})}),L.current):null},[G,E,m.menuOverlay]);return(0,s.jsx)(zn.HQ,{anchorClassName:m.anchor,menuRenderFn:V,onQueryChange:D,onSelectOption:U,options:G,triggerFn:k})}),Za=function(e){var t=e.onBlur,n=e.onFocus,a=(0,ie.g)(),r=P()(a,1),i=r[0],l=(0,h.useRef)(null);return(0,h.useEffect)(function(){return(0,Le.qV)(i.registerCommand(Rn,function(){return l.current&&(clearTimeout(l.current),l.current=null),!0},T.VN),i.registerCommand(T.Gq,function(){return l.current=setTimeout(function(){i.dispatchCommand(T.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),t&&t(),!0},T.VN),i.registerCommand(T.m$,function(){return n&&n(),!0},T.VN))},[i,t,n]),null},Ta=Za,$n,Xn,qn,_n,et,nt,tt,rt,ot=function(e){return 32+Math.max(e-1,0)*22},Ea=(0,Z.kc)(function(o,e){var t=o.css,n=o.token,a=o.prefixCls,r=e.autoSize;return{wrapper:t($n||($n=v()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:t(Xn||(Xn=v()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 4px;
        left: 11px;

        color: `,`;
      `])),n.colorTextPlaceholder),root:t(qn||(qn=v()([`
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
        }
      `])),n.colorBorder,n.borderRadius,n.colorText,n.fontSize,n.fontFamily,(r==null?void 0:r.minRows)&&t(_n||(_n=v()([`
          min-height: `,`px;
        `])),ot(r.minRows)),(r==null?void 0:r.maxRows)&&t(et||(et=v()([`
          max-height: `,`px;
        `])),ot(r.maxRows)),n.motionDurationMid,n.colorPrimaryBorder),filled:t(nt||(nt=v()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),n.colorFillTertiary,n.colorFillSecondary,n.colorBgBase),borderless:t(tt||(tt=v()([`
        background: transparent;
        border: none;
      `]))),disabled:t(rt||(rt=v()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),n.colorTextDisabled,n.colorBgContainerDisabled)}}),Pa=function(e){var t,n=e.className,a=e.wrapperClassname,r=e.placeholder,i=e.style,l=e.value,c=e.defaultValue,p=e.readOnly,f=p===void 0?!1:p,g=e.disabled,m=g===void 0?!1:g,b=e.onChange,y=e.onBlur,x=e.onFocus,S=e.variant,C=S===void 0?"outlined":S,k=e.options,w=k===void 0?[]:k,j=e.autoSize,E=e.triggers,D=E===void 0?["@"]:E,B=e.allowSpaces,G=e.punctuation,U=e.preTriggerChars,V=e.onSelect,L=Ea({autoSize:j}),O=L.styles,Q=L.cx,z=!f&&!m,Y=(0,h.useMemo)(function(){return{namespace:"mentions",nodes:[we,{replace:T.R2,with:function(J){return new we(J.__text)}},pe],editorState:ba(l||c||""),onError:function(J){throw J}}},[]),F=function(J){var be=J.read(function(){return(0,T.Gv)().getTextContent()});b==null||b(be.replaceAll(`

`,`
`))},M=(0,h.useMemo)(function(){return w.reduce(function(R,J){return R[J.value]=J,R},{})},[w]);return(0,s.jsx)(Fo.R,{initialConfig:u()(u()({},Y),{},{editable:z}),children:(0,s.jsx)(na,{value:{optionsMap:M},children:(0,s.jsxs)("div",{className:Q(O.wrapper,a),children:[(0,s.jsx)(Vo.B,{ErrorBoundary:Ho.g,contentEditable:(0,s.jsx)(zo.f,{className:Q((t={},I()(t,O.root,!0),I()(t,O.filled,C==="filled"),I()(t,O.borderless,C==="borderless"),I()(t,O.disabled,m),t),n),style:i||{}}),placeholder:(0,s.jsx)("div",{className:O.placeholder,children:r||"\u8F93\u5165 ".concat(D.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,s.jsx)(Oa,{allowSpaces:B,onSelect:V,options:w,preTriggerChars:U,punctuation:G,triggers:D}),(0,s.jsx)(Fn,{}),(0,s.jsx)(ha,{}),(0,s.jsx)(Qo.e,{}),(0,s.jsx)(Jo.$,{onChange:F}),(0,s.jsx)(Ta,{onBlur:y,onFocus:x})]})})})},at=d(57613),$e=d(47590),Ia="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAHj0lEQVR4Ae3B36ulVR3H8fdaZ09mZprmz1InNbXnKX8UCIEzeJP4D7jopqibwgtBQWY/6wFxLuLM9+BFt3ovBM+KQMibxDLORFGYSDVSVAwFYyb0g6yYIfenSxHnnLNm/972fb1wzjnnnHP/fwLufaHrusPAYUl/2NnZ+SOVAm7j9X0/SHqId/x4Mpl0Ozs7JznAFm5jSQrnzp0T0PJuN4YQHjx69Oi3d3d332IfEbeRhmHY6vv+v+zt+slk8g0OEHEb55lnnjn0yiuvnAUi+wghPMgBRriN8sgjj1x0+vTpt4AtDnYzBxjhNsZjjz128UUXXfQPYESFEELhACPcRnj88ccvOXTo0F+BQ9Q5PZlMnuIAI9y+uq47HkJ4ELgBGCQ9a2Yvs0THjh27dGtr6y/AB6gk6ZiZneYAAXdefd9fJ+kM5yHpYTN7miUYj8eXxRhfBy6mkqRkZoUKEXdekp5iDyGEp8bj8V0sWNd1H40xngEuppKkZGaFShG3lwfY24dDCPewQDnnK0MIfwI+RCVJycwKF2CEe4+u6+4HrmJ/N7EgOeergN8Dl1BJUjKzwgWKuLXS9/01wO+AS6kkKZlZYQoj3Nro+/46Sa8BH6GSpGRmhSlF3Fo4fvz49ZJOAZdRSVIys8IMRriVO3bs2CfOnTv3KnA5lSQlMyvMaIRbqfF4fGOM8ReSrqCSpGRmhTkY4Vam67rDMcafS7qSSpKSmRXmZIRbia7rbg4h/FTSx6gkKZlZYY5GuKXruu7WEMJJ4CoqSUpmVpizEW6pcs63AT8CrqGSpGRmhQUY4ZYm53wH8APgWipJSmZWWJARbilyzg3wAnAdlSQlMyssUMRNK1Cp7/vPAN8HrqeSpGRmhQUb4Raq7/s7JX0P+DiVJCUzKyzBCLcwfd/fLek54AYqSUpmVliSEW4h+r7/nKTvAjdSSVIys8ISjXBz13Xd5yV9B7iJSpKSmRWWLOLmquu6e0IIBThMJUnJzAorEHFz0/f93SGEAnySSpKSmRVWJOLmYjwe3yWpALdQSVIys8IKRdzM+r6/M4RQgFupJCmZWWHFIm4m4/H4s5JKCOFTVJKUzKywBiJuak888UQbYxyA26gkKZlZYU1E3NTefvvtAtxBJUnJzAprJOKmEkJ4SNKnqSQpmVlhzUTctBoqSUpmVlhDEbdQkpKZFdZUxC2MpGRmhTUWcQshKZlZYc1F3NxJSmZW2AAj3NyFEIacMwtyBhhCCLa9vf0GM4q4TXM98KikP/d9fzcziriNJemHOeeGGUTcJrtc0r3MIOI23WFmEHHvYWYvAW+yGU4zg4g7rxDC86y/v4cQfsYMtnDntbu7+9yRI0ceAq5mTYUQvnDixIlfMoOA21fXdcdDCLcD17IGQgj/nEwmp2KM39re3n4D55xzzjnnnHPOOeecc8455/YSmIOu6+5nTZjZS7hqgSkdP3788rNnzz4JfAW4gvXxZgjh+e3t7a/hDhSZ0tmzZ/8GPApcwXq5StJXc86/wh1oiyl0XfdkCOF+1tvV9913Xzh58uRLuD1FphBCuJ8NEEK4HbevyHRuYzNci9tXZDoD7n0hMgVJz+LeFyJTMLOXJT0MvIXbaCOmZGZPj8fjn4QQ7gEOc+FEpRDCQ0CLm7sRM9jZ2XkVeJUFyTk3wAC0uIWIrKmccwMMQItbmMgayjk3wAC0uIWKrJmccwMMQItbuMgayTk3wAC0uKWIrImccwMMQItbmsgayDk3wAC0VJKUcDOLrFjOuQEGoKWSpGRmBTezyArlnBtgAFoqSUpmVnBzEVmRnHMDDEBLJUnJzApubiIrkHNugAFoqSQpmVnBzVVkyXLODTAALZUkJTMruLmLLFHOuQEGoKWSpGRmBbcQkSXJOTfAALRUkpTMrOAWJrIEOecGGICWSpKSmRXcQkUWLOfcAAPQUklSMrOCW7jIAuWcG2AAWipJSmZWcEsRWZCccwMMQEslScnMCm5pIguQc26AAWipJCmZWcEtVWTOcs4NMAAtlSQlMyu4pYvMUc65AQagpZKkZGYFtxKROck5N8AAtFSSlMys4FYmMgc55wYYgJZKkpKZFdxKRWaUc26AAWipJCmZWcGtXGQGOecGGICWSpKSmRXcWohMKefcAAPQUklSMrOCWxuRKeScG2AAWipJSmZWcGslcoFyzg0wAC2VJCUzK7i1E7kAOecGGICWSpKSmRXcWopUyjk3wAC0VJKUzKywOGfYh6T/4PYVqZBzboABaKkkKZlZYbEG9hFC+DVuX5ED5JwbYABaKklKZlZYsBCCsY/JZPJN3L622EfOuQEGoKWSpGRmhSXY3d3919GjR58DvgR8kHf8W9IDOzs7v8HtK7CHvu+vkfQi0FJJUjKzwpLlnBtJ9wKHY4y/nUwmr5nZK7gDjdiDpC8DLZUkJTMrrMCJEydOAadwFyyyt6eoJCmZWcFtnMjezlBBUjKzgttIkb29zgEkJTMruI0V2dsL7ENSMrOC22hb7OHkyZMvHjly5BbgLt7ttKSvm1nBbbzAAbqueyCE8MUQwu2TyeQU8LSZncY555xzzjnnnHPObZT/AVyCLhJmYQjcAAAAAElFTkSuQmCC",Da="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAGlElEQVR4Ae3B349cZRnA8e/znLNGVrFqU1EQbUSt0ggRxNQAgYChVIWg4uzyD3CFie3MeXf2xmxiwp4f05JovegdXnWXiUG0qFAVogghTQmKRRGtSkuBQAxNtdF0z/vqlcnSdnranpk9Oz6fD8YYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjBkLgjmjLMs+qKrtEEILuJjRu19Vd3Y6nf3UTDAD7dix45KlpaXDNEAURRva7fYfqZFiBirL8ts0RFmWu6iZYgby3l9Lc9xIzRQzkIhcxBhTzJl8hzGmmIEmJia+CTzLmFLMQFu3bn0ziqLbRWQncJgxI5iR6/V6d3rvFwHlLDnnhBopZqTyPP+q934BUBpAMSNTFMWXgd1AREMoZiSyLLvDe78ATNAgMWbosiy7XUR2A2+jYWLMUOV5/iVgN/B2GkgxQ5Om6ReBBWCSalqMmGKGotfrbVHV3cA7qKblnOszYoqpXa/X2+y93w1cSDUt51yfFaCYWuV5fov3fgFYQzUt51yfFaKY2hRF8XlgN/Buqmk55/qsIMXUoiiKm0IIC8B7qablnOuzwhRz3oqiuDGEsACspZqWc65PAyjmvOR5fkMIYQFYRzUt51yfhlDMOcvz/HpgAbiIalrOuT4NEmPOSZ7n1wILwPupQES+kiTJgzRMjDlrRVF8LoSwCFxMNbclSbKHBooxZyXLsk0hhEXgEirw3t/a7XYfoaFiTGVZln1WRBaAS6lARG7udru/oMFiTCVZln1GRBaBD1OBql7f6XSeoOFizBnleX4VsAispwIR2dTpdJ5mFYgxA83Pz38aeAD4CNVcnSTJM6wSMea00jS9UlUXgcuowHt/RbfbfY5VJMacUpqmn1LVReBjVBBC+ES3232BVSbGnCRN042qughsoIKyLC+bnZ09yPAdoWaKWSZN0y2q+gDwSSqIouhDs7OzB6nP/ZyGiOyjZopZRlW3AJdTzQfa7fYhaqSqBXCAUwghFNRMMW91ExXEcbzWOfcqNet0Os9HUbRFRHYCfxaRf4jIk977651zv6ZmMeat3sMZhBDetW3btmMMSbvdPgR8nRFQzDIi8gADHD9+/IKZmZljjIkYs0wURd9dWlr6Bqewb9++uN/vl4wRwZyk1+td7b2/G7gZWAc84pxrYYwxxhhjjDHGGLOKCWOqKIofhBCu4b9EZF+SJHdgTiKMmbm5OZ2cnCw5BVVd1+l03sD8jzJGdu3aNTE5OVlyGiGEhzDLxIyJHTt2XHD06NHjDHYFZpmYIZifn78xjuNvhRCuDCG8oqqPqmrebrcPMQRzc3PvXFpaOsYZeO+PYJZRapbn+bVRFD0WQrgOuFBEPh5CuKcsy5/0er3LqVmapmsmJyePUYGIPIlZRqmZiCSc2kbv/Rw1uvfee9eq6ptU8zzQxywTUzPv/SYR4TS+Rk2KonhfCOE1qvm9977V7XYPYJaJqZmIXMSQZVl2cQjhZap5wXs/1e12D2BOoqwy27dvv1REXqaaF0Wk1e12n8OckrKK3HfffevLsnyJCkTkT0ArSZLfYk4rZpWYn5//6IkTJ16kghDCQWDKOfcsZqCYVSDLsg0i8geq+UsURa1Op/MM5oxiGi5N040i8juq+ZuqTnU6nf2YSmIarCiKK0IIv6GaQyIy1el09mEqi2moPM+vCiHsp5rDIjKVJMnTmLOiNFCv17sG2E81R6IomkqS5CnMWYtpmO3bt28qy/IpKhCRV8qynHLOPYk5JzENkqbpdWVZ/opqXivLcrrb7T6BOWcxDZHn+Q3A41TzelmW07Ozs7/EnJeYBsiy7GbgZ1TzRghhanZ29nHMeYtZYXme3wI8QjV/DyFMz8zMPIapRcwKyvP8C8DDVPNmCGF6Zmbm55jaKCukKIrbgIep5igwNTMzsxdTK2UF9Hq9O0IIP6SaY8C0c+5RTO1iRizLsju9932q+Scw7Zz7KWYolBETkT7VHAemnXM/xgyN0kAhhH+JyLRzbg9mqJTm+beqTidJ8iPM0CnNckJE7kqS5CHMSCjNUQJ3JUnyIGZklGbwqjrtnPs+ZqRimkG99/08z6nBX0Vkj6rm7Xb7EGYgZfysDyHcU5blg2marsEMpIyvq1U1xwykjLe7MQMp4+0IZiClfo/THM9iBlLqt5WGUNUEM1BEzfbu3fvq5s2b+yGEjcB6RiyE8DrwvYmJiVvb7fZLGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxvwf+A8z3S3ez8xdZQAAAABJRU5ErkJggg==",it,st,lt,ct,dt,Ra=(0,Z.kc)(function(o,e){var t=o.css,n=o.token,a=e.minimapEnabled,r=a===void 0?!1:a,i=e.isFullScreen,l=i===void 0?!1:i,c=(0,Z.F4)(it||(it=v()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),p=t(st||(st=v()([`
      .base-monaco-full-screen-icon,
      .base-monaco-full-screen-icon-cancel {
        cursor: pointer;

        position: absolute;

        width: 20px;
        height: 20px;

        background-size: 20px 20px;
      }

      .base-monaco-full-screen-icon {
        top: 40px;
        right: `,`;
        background-image: url(`,`);
      }

      .base-monaco-full-screen-icon-cancel {
        z-index: 9999;
        top: 10px;
        right: 138px;
        background-image: url(`,`);
      }
    `])),r?"64px":"20px",Da,Ia);return{base:t(lt||(lt=v()([`
        position: relative;

        box-sizing: content-box;
        width: 100%;
        min-height: 100px;

        border: 1px solid `,`;
        border-radius: `,`px;
        &:hover {
          border-color: var(--color-field-border-hover, rgba(31, 56, 88, 0.1));
        }
        &.ve-focused {
          border-color: var(--color-field-border-active, rgba(31, 56, 88, 0.15));
        }
        &.ve-outline {
          border: 1px solid var(--color-field-border, rgba(31, 56, 88, 0.05)) !important;
        }

        .react-monaco-editor-container {
          width: 100%;
          height: 100%;
          min-height: 100px;
          background: transparent;
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

        `,`

        .loading {
          position: absolute;
          inset: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--color-text, rgba(0, 0, 0, 0.3));

          background-color: transparent;

          &::after {
            content: '';
            display: inline;
            animation: `,` steps(3) 1s infinite;
          }
        }

        .syntaxTips {
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
      `])),n.colorBorder,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius-1,n.borderRadius-1,p,c),diff:t(ct||(ct=v()([`
        position: relative;
        box-sizing: content-box;

        .react-monaco-editor-container {
          `,`
        }

        `,`

        .base-monaco-full-screen-icon {
          right: 64px;
        }

        .base-monaco-full-screen-icon-cancel {
          position: fixed;
          right: 64px;
        }
      `])),l&&t(dt||(dt=v()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto;
            height: auto;
          `]))),p)}},{hashPriority:"low"}),Ba=d(67557),Fa=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","onChange","className","diffEditorWrapperClassName","supportFullScreen","width","height"],za=["inlineView","options"],Xe=function(e){var t=e.type,n=t===void 0?"single":t,a=e.editorDidMount,r=e.readOnly,i=r===void 0?!1:r,l=e.lineNumbers,c=l===void 0?"on":l,p=e.wordWrap,f=p===void 0?"off":p,g=e.contextmenu,m=g===void 0?!0:g,b=e.theme,y=e.minimapEnabled,x=y===void 0?!1:y,S=e.version,C=S===void 0?"0.45.0":S,k=e.requireConfig,w=k===void 0?{}:k,j=e.options,E=e.onChange,D=e.className,B=e.diffEditorWrapperClassName,G=e.supportFullScreen,U=e.width,V=e.height,L=A()(e,Fa),O=(0,$e.r)(),Q=O.isDarkMode,z=(0,h.useMemo)(function(){return b||(Q?"vs-dark":"vs")},[Q,b]),Y=(0,h.useState)(),F=P()(Y,2),M=F[0],R=F[1],J=function(De,Re){if(R(Re),a==null||a(De,Re),n==="diff"){var lo=Re.getModel(),dn=lo.modified;dn.onDidChangeContent(function(te){E==null||E(dn.getValue(),te)})}},be=(0,h.useMemo)(function(){var xe=Object.assign({},j,{readOnly:i,lineNumbers:c,wordWrap:f,contextmenu:m,minimap:x===void 0?j==null?void 0:j.minimap:Object.assign({},j==null?void 0:j.minimap,{enabled:x})});return M==null||M.updateOptions(xe),xe},[j,i,c,f,m,x,M]),H=bn(),ke=(0,h.useMemo)(function(){return Object.assign({},w,{paths:u()({vs:H({path:"min/vs",pkg:"monaco-editor",version:C})},w.paths)})},[H,w,C]),he=(0,h.useState)(!1),re=P()(he,2),K=re[0],ce=re[1],de=Ra({minimapEnabled:x,isFullScreen:K}),ye=de.styles,$=de.cx;if(n!=="diff")return(0,s.jsx)(at.vg,u()({className:$(ye.base,D),editorDidMount:J,height:V,onChange:E,options:be,requireConfig:ke,supportFullScreen:M&&G,theme:z,width:U},L));var ln=function(){ce(!K),M==null||M.layout()},cn=$({"base-monaco-full-screen-icon":!K,"base-monaco-full-screen-icon-cancel":K});return(0,s.jsxs)("div",{className:$(ye.diff,B),children:[(0,s.jsx)(at.vg.MonacoDiffEditor,u()({className:$(ye.base,D),editorDidMount:J,height:K?"auto":V,options:be,requireConfig:ke,theme:z,width:K?"auto":U},L)),M&&G&&(0,s.jsx)("div",{className:cn,onClick:ln})]})},Ha=function(e){return(0,s.jsx)(Xe,u()(u()({},e),{},{type:"single"}))},Qa=function(e){var t=e.inlineView,n=t===void 0?"off":t,a=e.options,r=A()(e,za);return(0,s.jsx)(Xe,u()(u()({options:Object.assign({useInlineViewWhenSpaceIsLimited:n==="on"||n==="auto",renderSideBySide:n==="off"||n==="auto"},a)},r),{},{type:"diff"}))},ut=d(79318),Ja=["to","children"],pt=function(e){var t=e.to,n=e.children,a=A()(e,Ja);return(0,s.jsx)("a",u()(u()({href:"#".concat(t)},a),{},{children:n}))},Oe=(0,h.createContext)({loading:!1,Link:pt}),Va=["to","Link","children"],Ga=function(e){var t=e.to,n=e.Link,a=e.children,r=A()(e,Va);return n?(0,s.jsx)(n,u()(u()({to:t},r),{},{children:a})):(0,s.jsx)("a",u()(u()({href:"#".concat(t)},r),{},{children:a}))},Ua=function(e){var t=(0,h.useContext)(Oe),n=t.Link,a=t.breadcrumb;(0,h.useEffect)(function(){var i;a==null||(i=a.setItems)===null||i===void 0||i.call(a,e.items)},[a,e.items]);var r=(0,h.useCallback)(function(i,l,c,p){var f,g,m=i.href?i.href===((f=c.at(-1))===null||f===void 0?void 0:f.href):i.path===((g=c.at(-1))===null||g===void 0?void 0:g.path);if(m)return(0,s.jsx)("span",{children:i.title});var b=i.href?i.href:"/".concat(p.join("/"));return(0,s.jsx)(Ga,{Link:n,to:b,children:i.title})},[n]);return(0,s.jsx)(ut.Z,u()({itemRender:r},e))},gt=d(19993),se=d(23806),ft,Ka=(0,Z.kc)(function(o){var e=o.css,t=o.token;return{root:e(ft||(ft=v()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),Wa=["className","children"],Ya={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},$a=function(e){var t=e.className,n=e.children,a=A()(e,Wa),r=Ka(),i=r.styles,l=r.cx,c=(0,h.useContext)(Oe),p=c.loading,f=c.breadcrumb,g=c.Link,m=c.status,b=(0,h.useCallback)(function(){if(m){var y;return(0,s.jsx)(gt.ZP,{extra:(0,s.jsx)(g,{to:f==null||(y=f.items)===null||y===void 0||(y=y[0])===null||y===void 0?void 0:y.path,children:(0,s.jsx)(oe.ZP,{type:"primary",children:"Go Back"})}),status:m,subTitle:Ya[m],title:m})}return n},[m,n,g,f==null?void 0:f.items]);return p?(0,s.jsx)(se.Z,{active:!0,className:l(i.root,t)}):(0,s.jsx)(N.Z,u()(u()({className:l(i.root,t),gap:20,vertical:!0},a),{},{children:b()}))},Xa=function(){return(0,s.jsx)(s.Fragment,{})},qa=d(38887),Ze=d.n(qa),mt=d(21801),vt=d(14171),bt=d(9300),ht=d(14329),qe=d(3024),yt,_a=(0,Z.kc)(function(o){var e=o.css,t=o.token;return{custom:e(yt||(yt=v()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),t.colorPrimary,t.colorPrimaryHover)}},{hashPriority:"low"}),ei=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],xt=function(e){var t=e.mode,n=t===void 0?"line":t,a=e.content,r=e.defaultOpen,i=e.iconPlacement,l=i===void 0?"left":i,c=e.openIcon,p=e.closeIcon,f=e.type,g=A()(e,ei),m=_a({}),b=m.styles,y=n==="expanded",x=(0,h.useState)(r),S=P()(x,2),C=S[0],k=S[1],w=p||(0,s.jsx)(vt.Z,{}),j=c||(0,s.jsx)(bt.Z,{}),E=y&&(0,s.jsx)("span",{children:C?w:j});return n==="line"||f==="vertical"?(0,s.jsx)(ht.Z,u()({type:f},g)):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ht.Z,u()(u()({type:f},g),{},{children:(0,s.jsx)("span",{className:y?b.custom:"",onClick:function(){k(!C)},children:(0,s.jsxs)(qe.Z,{size:6,children:[l!=="right"&&E,(0,s.jsx)("span",{children:a}),l==="right"&&E]})})})),y&&(0,s.jsx)("div",{style:{display:C?"block":"none"},children:e.children})]})},ni=xt,ti=d(3521),ri=d.n(ti),Te=d(43382),oi=["items","onClick"],ai=["key","label"],ii=["key","label"],Ct=function(e){var t=e.items,n=t===void 0?[]:t,a=e.onClick,r=a===void 0?function(){}:a,i=A()(e,oi);if(n.length<=2)return(0,s.jsx)(qe.Z,u()(u()({align:"end",size:12},i),{},{children:n.map(function(b){var y=b.key,x=b.label,S=A()(b,ai);return(0,s.jsx)(oe.ZP,u()(u()({onClick:function(k){return r(y,k)}},S),{},{children:x}),y)})}));var l=ri()(n),c=l[0],p=c.key,f=c.label,g=A()(c,ii),m=l.slice(1);return(0,s.jsx)(Te.Z.Button,u()(u()(u()({onClick:function(y){return r(p,y)}},g),{},{menu:{onClick:function(y){var x=y.key,S=y.domEvent;return r(x,S)},items:m.map(function(b){var y=b.key,x=b.label,S=b.icon,C=b.danger,k=b.disabled;return{key:y,label:x,icon:S,danger:C,disabled:k}})},overlayStyle:{minWidth:100}},i),{},{children:f}),p)},_e=d(17823),si=["shape","size","src"],St=function(e){if(typeof e=="number")return e;switch(e){case"small":return 40;case"large":return 88;default:return 64}},li=function(e){var t=e.shape,n=t===void 0?"square":t,a=e.size,r=e.src,i=A()(e,si),l=(0,h.useMemo)(function(){return St(a)},[a]);return(0,s.jsx)(_e.C,u()({shape:n,size:l,src:r},i))},kt,jt,At,wt,Lt,Mt,Nt,Ot,Zt,ci=(0,Z.kc)(function(o,e){var t=o.css,n=o.token,a=o.prefixCls,r=e.bordered,i=r===void 0?!1:r,l=e.divider,c=l===void 0?!0:l;return{root:i?t(kt||(kt=v()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),n.marginXS,n.padding,n.colorBgBase,n.borderRadius,n.boxShadowTertiary):t(jt||(jt=v()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),n.paddingXS,n.marginXS,c&&t(At||(At=v()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),n.paddingLG,n.colorSplit)),icon:t(wt||(wt=v()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),a,a,n.colorPrimary,a),titleBox:t(Lt||(Lt=v()([`
        margin-bottom: `,`px;
      `])),n.marginSM),subTitle:t(Mt||(Mt=v()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),n.marginXXS,a,n.fontSize,n.colorTextSecondary),title:t(Nt||(Nt=v()([`
        font-size: `,`px;
        font-weight: 700;
      `])),n.fontSizeHeading5),descriptions:t(Ot||(Ot=v()([`
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
      `])),n.marginXXS,n.fontSize,n.colorTextSecondary,a,a,n.fontSize,a,n.fontSize,n.colorTextSecondary),rightButtons:t(Zt||(Zt=v()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),di=["className","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],ui=We.Paragraph,pi=function(e){var t=e.className,n=e.icon,a=e.title,r=e.titleRender,i=e.subTitle,l=e.status,c=e.descriptions,p=c===void 0?[]:c,f=e.descriptionsRender,g=e.extraContent,m=g===void 0?{}:g,b=e.extraContentRender,y=e.bordered,x=e.divider,S=A()(e,di),C=ci({bordered:y,divider:x}),k=C.styles,w=C.cx,j=(0,h.useMemo)(function(){return!n||typeof n=="string"?{src:n,size:i?"large":"default"}:(i&&n.size===void 0&&(n.size="large"),n)},[n,i]),E=(0,h.useMemo)(function(){var L=(0,s.jsx)("span",{className:k.title,children:a});return r?r(L):L},[k.title,a,r]),D=(0,h.useMemo)(function(){var L=[],O=Ze()(p.filter(function(J){return!!J}).entries()),Q;try{for(O.s();!(Q=O.n()).done;){var z=P()(Q.value,2),Y=z[0],F=z[1],M=F.icon,R=F.text;(l||Y>=1)&&L.push((0,s.jsx)(ni,{dashed:!1,type:"vertical"},"divider-".concat(Y))),L.push((0,s.jsxs)(N.Z,{align:"center",gap:4,children:[M&&(0,s.jsx)(ue.Z,{title:M.tooltip,children:M.content}),(0,s.jsx)("span",{children:R})]},"desc-".concat(Y)))}}catch(J){O.e(J)}finally{O.f()}return f?f(L):L},[p,f,l]),B=(0,h.useMemo)(function(){if(!m&&!b)return null;var L=(0,s.jsx)(Ct,u()({className:k.rightButtons},m));return b?b(L):L},[m,b,k.rightButtons]),G=(0,h.useContext)(Oe),U=G.loading,V=G.status;return U?(0,s.jsxs)(N.Z,{className:w(k.root,t),gap:20,children:[(0,s.jsx)(N.Z,{children:(0,s.jsx)(se.Z.Avatar,{active:!0,className:k.icon,shape:j==null?void 0:j.shape,size:St(j==null?void 0:j.size)})}),(0,s.jsxs)(N.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,s.jsxs)("div",{className:k.titleBox,children:[(0,s.jsx)(se.Z.Input,{active:!0,size:25}),i&&(0,s.jsx)("div",{className:k.subTitle,children:(0,s.jsx)(se.Z.Input,{active:!0,size:18})})]}),(0,s.jsx)(se.Z.Input,{active:!0,size:18})]}),(0,s.jsx)(N.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,s.jsx)(se.Z.Button,{active:!0})})]}):V?null:(0,s.jsxs)(N.Z,u()(u()({className:w(k.root,t),gap:20},S),{},{children:[j&&(0,s.jsx)(N.Z,{children:(0,s.jsx)(li,u()({className:k.icon},j))}),(0,s.jsxs)(N.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,s.jsxs)(N.Z,{className:k.titleBox,vertical:!0,children:[E,i&&(0,s.jsx)(ui,{className:k.subTitle,ellipsis:{rows:2},children:i})]}),(0,s.jsxs)(N.Z,{align:"center",className:k.descriptions,gap:4,children:[l&&(0,s.jsx)(mt.Z,u()({},l)),D]})]}),(0,s.jsx)(N.Z,{align:"center",flex:"1",justify:"flex-end",children:B})]}))},Tt,gi=(0,Z.kc)(function(o){var e=o.css,t=o.token;return{root:e(Tt||(Tt=v()([`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: `,"px ","px ",`px;
      `])),t.padding,t.paddingLG,t.paddingXL)}},{hashPriority:"low"}),fi=["loading","className","children","Link","status","gap"],mi=function(e){var t=hn(),n=e.loading,a=e.className,r=e.children,i=e.Link,l=i===void 0?t||pt:i,c=e.status,p=e.gap,f=p===void 0?16:p,g=A()(e,fi),m=gi(g),b=m.styles,y=m.cx,x=(0,h.useState)([]),S=P()(x,2),C=S[0],k=S[1];return(0,s.jsx)(N.Z,u()(u()({className:y(b.root,a),gap:f,vertical:!0},g),{},{children:(0,s.jsx)(Oe.Provider,{value:{loading:n,Link:l,breadcrumb:{items:C,setItems:k},status:c},children:r})}))},Et,vi=(0,Z.kc)(function(o){var e=o.css,t=o.token;return{root:e(Et||(Et=v()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),t.fontFamily,t.fontWeightStrong,t.lineHeight,t.colorText)}}),bi=["className"],hi=function(e){var t=e.className,n=A()(e,bi),a=vi(),r=a.cx,i=a.styles;return(0,s.jsx)("h2",u()({className:r(i.root,t)},n))},ge=mi;ge.Breadcrumb=Ua,ge.Title=hi,ge.Header=pi,ge.Content=$a,ge.Footer=Xa;var Pt,It,Dt,Rt,Bt,yi=(0,Z.kc)(function(o){var e=o.css,t=o.token,n=o.prefixCls;return{root:e(Pt||(Pt=v()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.fontFamily,t.colorText,t.colorBgContainer,t.borderRadius*2,t.boxShadowTertiary),bordered:e(It||(It=v()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),t.colorBorder),hoverable:e(Dt||(Dt=v()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),t.motionDurationMid,t.motionDurationMid,t.boxShadow),text:e(Rt||(Rt=v()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),t.colorTextSecondary),error:e(Bt||(Bt=v()([`
      color: `,`;
    `])),t.colorErrorText)}}),xi=["className","bordered","hoverable","children"],Ci=function(e){var t=e.className,n=e.bordered,a=n===void 0?!1:n,r=e.hoverable,i=r===void 0?!0:r,l=e.children,c=A()(e,xi),p=yi(),f=p.cx,g=p.styles;return(0,s.jsx)("div",u()(u()({className:f(g.root,a&&g.bordered,i&&g.hoverable,t)},c),{},{children:l}))},Ft,Si=(0,Z.kc)(function(o){var e=o.css,t=o.token;return{root:e(Ft||(Ft=v()([`
        padding: 12px 24px 20px;
      `])))}},{hashPriority:"low"}),ki=["className","children"],ji=function(e){var t=e.className,n=e.children,a=A()(e,ki),r=Si(),i=r.styles,l=r.cx;return(0,s.jsx)(N.Z,u()(u()({className:l(i.root,t),gap:20,vertical:!0},a),{},{children:n}))},zt=d(37032),Ht,Qt,Jt,Vt,Gt,Ut,Ai=(0,Z.kc)(function(o,e){var t=o.css,n=o.token,a=o.prefixCls,r=e.borderedBottom,i=e.borderedBottomDashed,l=e.borderedTop,c=e.borderedTopDashed,p=e.size,f={small:"".concat(n.paddingXS,"px ").concat(n.padding,"px"),middle:"".concat(n.padding,"px ").concat(n.paddingLG,"px"),default:"".concat(n.paddingSM,"px ").concat(n.paddingLG,"px")},g=r||i;return{custom:t(Ht||(Ht=v()([`
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
      `])),a,a,g&&p&&t(Qt||(Qt=v()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),a,a,f[p],a),r&&t(Jt||(Jt=v()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),a,n.colorSplit),i&&t(Vt||(Vt=v()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),a,n.colorSplit),l&&t(Gt||(Gt=v()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),a,n.colorSplit),c&&t(Ut||(Ut=v()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),a,n.colorSplit))}},{hashPriority:"low"}),wi=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],en=function(e){var t=e.className,n=e.borderedBottom,a=e.borderedBottomDashed,r=e.borderedTop,i=e.borderedTopDashed,l=A()(e,wi),c=Ai({borderedBottom:n,borderedBottomDashed:a,borderedTop:r,borderedTopDashed:i,size:l.size}),p=c.styles,f=c.cx;return(0,s.jsx)(zt.Z,u()(u()({},l),{},{className:f(p.custom,t)}))},Li=en;en.Item=zt.Z.Item;var Kt,Mi=(0,Z.kc)(function(o){var e=o.css,t=o.token,n=o.prefixCls,a=70;return{root:e(Kt||(Kt=v()([`
        &.`,`-descriptions {
          .`,`-descriptions-row {
            & > td {
              padding-top: 4px !important;
              padding-bottom: 4px !important;
            }
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
      `])),n,n,n,n,a,n,a)}},{hashPriority:"low"}),Ni=["className","colon","column","size"],Oi=function(e){var t=e.className,n=e.colon,a=n===void 0?!1:n,r=e.column,i=r===void 0?2:r,l=e.size,c=l===void 0?"small":l,p=A()(e,Ni),f=Mi(),g=f.cx,m=f.styles;return(0,s.jsx)(Li,u()({className:g(m.root,t),colon:a,column:i,size:c},p))},Zi=d(38377),Wt,Yt,$t,Xt,qt,_t,er,nr,tr,Ti=(0,Z.kc)(function(o,e){var t=o.css,n=o.token,a=o.prefixCls,r=e.divider,i=r===void 0?!0:r,l=e.iconBg,c=l===void 0?!0:l;return{root:t(Wt||(Wt=v()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),i?20:0,i&&t(Yt||(Yt=v()([`
          border-bottom: 1px solid `,`;
        `])),n.colorSplit)),icon:t($t||($t=v()([`
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
      `])),a,n.colorPrimary,c&&t(Xt||(Xt=v()([`
            background-color: `,`;
          `])),n.colorBgLayout),a),titleBox:t(qt||(qt=v()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),n.marginXXS),title:t(_t||(_t=v()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.fontWeightStrong),description:t(er||(er=v()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),a,n.colorTextSecondary),extra:t(nr||(nr=v()([`
        margin-top: -4px;
      `]))),rightButtons:t(tr||(tr=v()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),Ei=["className","icon","title","description","extra","divider"],Pi=["className","shape","size"],Ii=["children"],Di=We.Paragraph,Ri=function(e){var t=e.className,n=e.icon,a=e.title,r=e.description,i=e.extra,l=e.divider,c=A()(e,Ei),p=Ti({divider:l,iconBg:!(n!=null&&n.src)}),f=p.styles,g=p.cx,m=n||{},b=m.className,y=m.shape,x=y===void 0?"square":y,S=m.size,C=S===void 0?72:S,k=A()(m,Pi),w=i||{},j=w.children,E=A()(w,Ii);return(0,s.jsxs)(N.Z,u()(u()({className:g(f.root,t),gap:20},c),{},{children:[n&&(0,s.jsx)(N.Z,{children:(0,s.jsx)(_e.C,u()({className:g(f.icon,b),shape:x,size:C},k))}),(0,s.jsxs)(N.Z,{flex:"1",vertical:!0,children:[(0,s.jsxs)(N.Z,{className:f.titleBox,gap:4,children:[(0,s.jsx)("div",{className:f.title,children:a}),i&&(0,s.jsx)(N.Z,{align:"flex-start",className:f.extra,justify:"flex-end",onClick:function(B){return B.stopPropagation()},children:(0,s.jsx)(Te.Z,u()(u()({},E),{},{children:j||(0,s.jsx)(oe.ZP,{icon:(0,s.jsx)(ae.Z,{icon:Zi.Z}),size:"small",type:"text"})}))})]}),r&&(0,s.jsx)(Di,{className:f.description,ellipsis:{rows:2},children:r})]})]}))},Ee=Ci;Ee.Header=Ri,Ee.Content=ji,Ee.Descriptions=Oi;var rr=d(6813),nn=d(54189),or=d(64337),ar=d(16988),Bi=function(e){var t=e.value,n=e.defaultValue,a=e.min,r=a===void 0?0:a,i=e.max,l=e.step,c=e.gutter,p=c===void 0?16:c,f=e.sliderCol,g=f===void 0?{span:12}:f,m=e.inputCol,b=m===void 0?{span:5}:m,y=e.addonAfter,x=e.addonBefore,S=e.placeholder,C=e.onChange,k=e.style,w=e.className,j=e.sliderProps,E=j===void 0?{}:j,D=e.inputProps,B=D===void 0?{}:D,G=(0,h.useState)(),U=P()(G,2),V=U[0],L=U[1],O=function(z){Number.isNaN(z)||(L(z),C==null||C(z))};return(0,s.jsxs)(rr.Z,{className:w,gutter:p,style:k,children:[(0,s.jsx)(nn.Z,u()(u()({},g),{},{children:(0,s.jsx)(or.Z,u()(u()({},E),{},{defaultValue:n,max:i,min:r,onChange:O,step:l,value:t!=null?t:V}))})),(0,s.jsx)(nn.Z,u()(u()({},b),{},{children:(0,s.jsx)(ar.Z,u()(u()({},B),{},{addonAfter:y,addonBefore:x,defaultValue:n,max:i,min:r,onChange:O,placeholder:S,step:l,value:t!=null?t:V}))}))]})},ir=d(5654),sr,Fi=(0,Z.kc)(function(o,e){var t=o.css,n=e.bordered,a=n===void 0?"dashed":n;return{custom:t(sr||(sr=v()([`
        border-style: `,` !important;
      `])),a)}},{hashPriority:"low"}),zi=["bordered","className"],lr=function(e){var t=e.bordered,n=t===void 0?"dashed":t,a=e.className,r=A()(e,zi),i=Fi({bordered:n}),l=i.styles,c=i.cx;return(0,s.jsx)(ir.Z,u()(u()({},r),{},{className:c(l.custom,a)}))};lr.ErrorBoundary=ir.Z.ErrorBoundary;var ic=null,cr=d(73320),Hi=d(64202),tn=d(99141),Pe=d(41075),dr,ur=(0,Z.vJ)(dr||(dr=v()([`
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
`])),function(o){var e=o.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(o){var e=o.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(o){var e=o.theme;return e==null?void 0:e.colorPrimary},function(o){var e=o.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(o){var e=o.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(o){var e=o.theme,t=e||{},n=t.prefixCls;return Pe.ZP.config({prefixCls:n}),`
      .`.concat(n,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(n,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)}),Qi=["detail","message","description","onClose","className"],Ji=tn.Z.Panel,Vi=Me.Z.Link,Gi=Me.Z.Paragraph,Ui=Me.Z.Text,fe={},Ki=function(e,t){fe[e]||(fe[e]=[]),fe[e].push(t)},Wi=function(e){delete fe[e]},pr=function o(e){var t="";if(typeof e=="string")t=e;else if(typeof e=="number")t=e.toString();else if(Array.isArray(e)){var n=Ze()(e),a;try{for(n.s();!(a=n.n()).done;){var r=a.value;t+=o(r)}}catch(i){n.e(i)}finally{n.f()}}else(0,h.isValidElement)(e)&&(t+=o(e.props.children));return t},gr=function(e){var t,n=e.noticeKey,a=e.message,r=((t=fe[n])===null||t===void 0?void 0:t.length)||0;return(0,s.jsxs)(s.Fragment,{children:[a,r>1&&" (".concat(r,")")]})},Yi=function(e){var t=e.noticeKey,n=(0,h.useState)(),a=P()(n,2),r=a[0],i=a[1],l={},c=Ze()(fe[t]),p;try{for(c.s();!(p=c.n()).done;){var f=p.value,g=pr(f.description);f.descKey=g,l[g]=f}}catch(m){c.e(m)}finally{c.f()}return(0,s.jsx)(tn.Z,{accordion:!0,activeKey:r,className:"yunti-notification-collapse",expandIcon:function(b){var y=b.isActive;return(0,s.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:y?(0,s.jsx)(Vi,{className:"yunti-notification-link",children:(0,s.jsx)(vt.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,s.jsx)(bt.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(b){i(b)},children:Object.values(l).map(function(m){var b=m.descKey,y=m.description,x=m.detail;return(0,s.jsx)(Ji,{header:(0,s.jsx)(Ui,{ellipsis:{tooltip:!1},style:{width:250},children:y}),children:(0,s.jsx)(Gi,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(x,null,2)},type:"secondary",children:(0,s.jsx)("pre",{children:JSON.stringify(x,null,2)})})},b)})})},le=function(e){var t=e.detail,n=e.message,a=e.description,r=e.onClose,i=e.className,l=A()(e,Qi),c=pr(n);Ki(c,e);var p=function(){r==null||r(),Wi(c)};return e.type==="warning"&&!e.icon&&(l.icon=(0,s.jsx)(Hi.Z,{style:{color:"#ff7d00"}})),t?Pe.ZP.open(u()({key:c,message:(0,s.jsx)(gr,{message:n,noticeKey:c}),description:(0,s.jsx)(Yi,{noticeKey:c}),onClose:p,className:"yunti-notification ".concat(i)},l)):Pe.ZP.open(u()({key:c,message:(0,s.jsx)(gr,{message:n,noticeKey:c}),description:a,onClose:p,className:"yunti-notification ".concat(i)},l))},fr=function(e){var t;if(((e==null||(t=e.errors)===null||t===void 0?void 0:t.length)||0)>0){e!=null&&e.errors;var n=Ze()((e==null?void 0:e.errors)||[]),a;try{for(n.s();!(a=n.n()).done;){var r=a.value;le(u()(u()({detail:r,description:r.message},e),{},{type:"warning"}))}}catch(i){n.e(i)}finally{n.f()}}else le(u()(u()({},e),{},{type:"warning"}))},$i=u()(u()({},Pe.ZP),{},{success:function(e){return le(u()(u()({},e),{},{type:"success"}))},info:function(e){return le(u()(u()({},e),{},{type:"info"}))},warning:function(e){return le(u()(u()({},e),{},{type:"warning"}))},warn:function(e){return le(u()(u()({},e),{},{type:"warning"}))},error:function(e){return le(u()(u()({},e),{},{type:"error"}))},warnings:fr,warns:fr}),sc=null,Xi=["children"],mr=function(e){var t=e.children,n=A()(e,Xi);return(0,s.jsxs)(cr.Z,u()(u()({},n),{},{children:[(0,s.jsx)(ur,{}),t]}))};mr.useApp=cr.Z.useApp;var lc=null,qi=d(34550),vr,br,hr,_i=(0,Z.kc)(function(o,e){var t=o.css,n=o.prefixCls,a=e.closeIcon,r=e.closeIconPlacement,i=e.extra,l=t(vr||(vr=v()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),n,n,!(a===null||a===!1)&&t(br||(br=v()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),n));return{custom:t(hr||(hr=v()([`
        `,`
      `])),(!r||r==="right"||r==="auto"&&!i)&&l)}},{hashPriority:"low"}),es=["className"],ns=function(e){var t=e.className,n=A()(e,es),a=_i(n),r=a.styles,i=a.cx;return(0,s.jsx)(yn.Z,u()(u()({},n),{},{className:i(r.custom,t)}))},cc=null,yr,xr,Cr,Sr,ts=(0,Z.kc)(function(o,e){var t=o.css,n=o.token,a=e.divider,r=e.position;return{menuWrapper:t(yr||(yr=v()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.colorBgElevated,n.borderRadiusLG,n.boxShadowSecondary),menuExtra:t(xr||(xr=v()([`
        padding: 10px 16px 4px;
        `,`
      `])),a&&t(r==="top"?Cr||(Cr=v()([`
              border-bottom: 1px solid `,`;
            `])):Sr||(Sr=v()([`
              border-top: 1px solid `,`;
            `])),n.colorSplit))}},{hashPriority:"low"}),rs=["menuExtra","dropdownRender"],os=function(e){var t=e.menuExtra,n=e.dropdownRender,a=A()(e,rs),r=t||{},i=r.position,l=i===void 0?"top":i,c=r.divider,p=c===void 0?!1:c,f=r.content,g=ts({divider:p,position:l}),m=g.styles,b=(0,h.useCallback)(function(y){var x=h.cloneElement(y,{style:{boxShadow:"none",border:"none"}});if(!f)return n?(0,s.jsx)(N.Z,{className:m.menuWrapper,vertical:!0,children:n(x)}):y;var S=(0,s.jsx)(N.Z,{align:"center",className:m.menuExtra,children:f});return(0,s.jsxs)(N.Z,{className:m.menuWrapper,vertical:!0,children:[l==="top"&&S,x,l==="bottom"&&S]})},[f,n,l,m.menuExtra,m.menuWrapper]);return(0,s.jsx)(Te.Z,u()({dropdownRender:b},a))},kr=os;kr.Button=Te.Z.Button;var me=d(70757),as=d(13448),ve=d.n(as),is=d(74815),rn=d.n(is),ss=d(67855),on=d.n(ss),ls=d(37194),q=d(40363),cs=d(92052),jr,Ar,wr,ds=(0,Z.kc)(function(o){var e=o.css,t=o.token,n=o.prefixCls;return{empty:e(jr||(jr=v()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),t.paddingXS,t.paddingSM,t.colorTextTertiary),list:e(Ar||(Ar=v()([`
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
      .`,`-form {
        &-item {
          margin-bottom: 0;
        }
      }
    `])),n,t.colorTextTertiary,n),noFormItem:e(wr||(wr=v()([`
      height: `,`px;
      color: `,`;
    `])),t.controlHeight,t.colorTextTertiary)}}),us=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style"],ps=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width"],gs=["key","name"],Lr=function(e){var t=e.extra,n=e.expandIcon,a=e.icon,r=e.title,i=e.variant,l=e.defaultActive,c=e.empty,p=c===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":c,f=e.columns,g=f===void 0?[]:f,m=e.disabled,b=e.readOnly,y=e.addOneFieldDefault,x=e.disableRemoveWhenOneField,S=e.maxFileds,C=e.name,k=e.addParams,w=e.className,j=e.onRemove,E=e.fieldRemoveButton,D=E===void 0?!0:E,B=e.style,G=A()(e,us),U=ds(),V=U.styles,L=(0,h.useRef)(),O=me.Z.useFormInstance(),Q=me.Z.useWatch(C,O),z=(0,h.useCallback)(function(){if(!k)return[];var F=typeof k=="function"?k():k;return[F.defaultValue,F.insertIndex]},[k]),Y=(0,h.useCallback)(function(F){var M=O.getFieldValue([C,F]);return j==null?void 0:j(M)},[O,C,j]);return(0,h.useEffect)(function(){var F;if(y&&(!(O!=null&&O.getFieldValue(C))||(O==null||(F=O.getFieldValue(C))===null||F===void 0?void 0:F.length)===0)){var M;(M=L.current)===null||M===void 0||M.call.apply(M,[L].concat(on()(z())))}},[y,z,O,C]),(0,s.jsx)(ze,{extra:t===void 0?C&&!b&&(0,s.jsx)(ue.Z,{title:S&&"\u6700\u591A\u6DFB\u52A0 ".concat(S," \u9879"),children:(0,s.jsx)(oe.ZP,{disabled:m||!!(S&&(Q==null?void 0:Q.length)===S),icon:(0,s.jsx)(ls.Z,{}),onClick:function(M){var R;M.stopPropagation(),(R=L.current)===null||R===void 0||R.call.apply(R,[L].concat(on()(z())))},size:"small",type:"text"})}):t,className:w,expandIcon:n,icon:a,title:r,variant:i,defaultActive:l,style:B,children:C?(0,s.jsx)(me.Z.List,u()(u()({name:C},G),{},{children:function(M,R){var J=R.add,be=R.remove;return L.current=J,(0,s.jsx)(q.Z,{className:V.list,columns:[].concat(on()(g.map(function(H){var ke=H.label,he=H.name,re=H.render,K=H.dependencies,ce=H.rules,de=H.align,ye=H.ellipsis,$=H.fixed,ln=H.responsive,cn=H.shouldCellUpdate,xe=H.width,De=A()(H,ps);return{title:ke,dataIndex:he,align:de,ellipsis:ye,fixed:$,responsive:ln,shouldCellUpdate:cn,width:xe,render:function(lo,dn,te){var un=M[te],Yl=un.key,$l=un.name,Xl=A()(un,gs),Be=re==null?void 0:re(M[te],te);if(!Be&&!De.noStyle)return(0,s.jsx)(N.Z,{align:"center",className:V.noFormItem,children:"\u65E0\u9700\u8BBE\u7F6E"});if(!he)return(0,s.jsx)(N.Z,{align:"center",className:V.noFormItem,children:Be});var Fe={readOnly:b,disabled:m};return b===!0&&(Fe.showCount=!1,Fe.variant="borderless",Fe.placeholder="-"),(0,s.jsx)(me.Z.Item,u()(u()(u()({},Xl),{},{dependencies:typeof K=="function"?K(M[te],te):K,name:[$l,he],rules:typeof ce=="function"?ce(M[te],te):ce},De),{},{children:Be&&h.cloneElement(Be,Fe)}),Yl)}}})),[!b&&D!==!1&&{title:"",dataIndex:"del",render:function(ke,he,re){var K=M[re].name;return(0,s.jsx)(me.Z.Item,{children:(0,s.jsx)(oe.ZP,{disabled:m||x&&M.length===1,icon:(0,s.jsx)(ae.Z,{icon:cs.Z}),onClick:rn()(ve()().mark(function ce(){var de;return ve()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,Y(K);case 2:de=$.sent,de!==!1&&be(K);case 4:case"end":return $.stop()}},ce)})),type:"text"})})}}]).filter(function(H){return!!H}),dataSource:M,locale:{emptyText:p},pagination:!1,rowHoverable:!1,size:"small"})}})):(0,s.jsx)("div",{className:V.empty,children:p})})},Mr=me.Z;Mr.CollapseList=Lr;var fs=function(e){return typeof e=="string"?document.querySelector("#".concat(e)):(e==null?void 0:e.current)||e},an=":not([disabled]):not([readonly])",ms=["text","password","search","tel","url","number","email",""].map(function(o){return'input[type="'.concat(o,'"]').concat(an)}).join(", ")+", input:not([type])".concat(an,", textarea").concat(an),vs=function(e){var t,n=fs(e);if(n){var a=(t=n.querySelector)===null||t===void 0?void 0:t.call(n,ms);if(a!=null&&a.focus)return a.focus(),!0}},Nr=function(e){var t=(0,h.useState)(!1),n=P()(t,2),a=n[0],r=n[1];h.useEffect(function(){if(!(a||!e)){var i=vs(e);i&&r(!0)}},[e,a,r])},Or=function(e){var t,n=e.autoFocus,a=n===void 0?!0:n,r=(0,h.useRef)(null);return Nr(a?r:void 0),(0,s.jsx)("div",{className:e.className,id:e.id,ref:r,style:(t=e.style)!==null&&t!==void 0?t:{display:e.className?void 0:"contents"},children:e.children})},bs=function(e){return function(t){var n=function(i){return(0,s.jsx)(Or,u()(u()({},e||{}),{},{children:(0,s.jsx)(t,u()({},i))}))},a=t.displayName||t.name||"Component";return n.displayName="withFormHelper(".concat(a,")"),n}},_=d(35057),hs="yunti-ui",Zr,Tr,ys=(0,Z.kc)(function(o,e){var t=o.css,n=o.prefixCls,a=e.borderd,r=a===void 0?!0:a,i=e.footer,l=i===null||Array.isArray(i)&&i.length===0,c=t(Zr||(Zr=v()([`
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
    `])),n,n,l?0:"40px",n,l?0:"1px");return{custom:t(Tr||(Tr=v()([`
        `,`
      `])),r&&c)}},{hashPriority:"low"}),xs=["className","borderd"],Cs=function(e){var t=e.className,n=e.borderd,a=n===void 0?!0:n,r=A()(e,xs),i=ys(u()({borderd:a},r)),l=i.styles,c=i.cx;return(0,s.jsx)(_.Z,u()(u()({},r),{},{className:c(l.custom,"".concat(hs,"-modal"),t)}))},ee=Cs;ee.useModal=_.Z.useModal,ee.destroyAll=_.Z.destroyAll,ee.config=_.Z.config,ee._InternalPanelDoNotUseOrYouWillBeFired=_.Z._InternalPanelDoNotUseOrYouWillBeFired,ee.info=_.Z.info,ee.success=_.Z.success,ee.error=_.Z.error,ee.warning=_.Z.warning,ee.warn=_.Z.warn,ee.confirm=_.Z.confirm;var dc=null,Ss=d(73239),ks=d(10714),Er,Pr,Ir,Dr,js=(0,Z.kc)(function(o,e){var t=o.css,n=o.token,a=o.prefixCls,r=e.size,i=e.segmented,l=function(){return i?i!==!0?i.gap:!0:0}(),c=function(){if(i)return i!==!0?i.borderRadius:!0}(),p=function(){var x={small:n.sizeSM,middle:n.size,large:n.sizeLG};return typeof l=="string"?x[l]:l===!0?r?x[r]:x.middle:l||0},f=function(){var x={small:n.controlHeightSM,middle:n.controlHeight,large:n.controlHeightLG};if(c===!0)return r?x[r]:x.middle;if(c||c===0)return c},g=f()&&t(Er||(Er=v()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),f()),m=t(Pr||(Pr=v()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),p()),b=i===!0||i&&!i.bordered;return{custom:t(Ir||(Ir=v()([`
        `,`
        `,`
        `,`
      `])),g,m,b&&t(Dr||(Dr=v()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),a,a,n.colorPrimary))}},{hashPriority:"low"}),As=["className"],Rr=Ss.ZP,ws=function(e){var t=e.className,n=A()(e,As);n.segmented&&(n.optionType="button");var a=js(n),r=a.styles,i=a.cx;return(0,s.jsx)(ks.Z,u()(u()({},n),{},{className:i(r.custom,t)}))};Rr.Group=ws;var uc=null,Br,Ls=(0,Z.kc)(function(o){var e=o.css,t=o.token,n=o.prefixCls;return{table:e(Br||(Br=v()([`
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
    `])),n,t.colorTextTertiary)}}),Ms=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],Fr=function(e){var t=e.rootStyle,n=e.rootClassName,a=e.icon,r=e.title,i=e.variant,l=e.defaultActive,c=e.extra,p=e.className,f=A()(e,Ms),g=Ls(),m=g.cx,b=g.styles;return(0,s.jsx)(ze,{className:n,style:t,icon:a,title:r,variant:i,defaultActive:l,extra:c,children:(0,s.jsx)(q.Z,u()({className:m(b.table,p),pagination:!1,rowHoverable:!1,size:"small"},f))})},Ns=["columns"],ne=function(e){var t=e.columns,n=A()(e,Ns),a=(0,h.useMemo)(function(){return t==null?void 0:t.map(function(r){if(r.render)return r;if(r.ellipsis&&r.ellipsis!==!0&&r.ellipsis.showTitle||r.ellipsis===!0){var i=r.ellipsis===!0?{}:r.ellipsis;return u()(u()({},r),{},{ellipsis:{showTitle:!1},render:function(c){return c||c===0?(0,s.jsx)(ue.Z,u()(u()({},i),{},{placement:"topLeft",title:c,children:c})):"-"}})}return r.render||(r.render=function(l){return l!=null?l:"-"}),r})},[t]);return(0,s.jsx)(q.Z,u()(u()({},n),{},{columns:a}))};ne.displayName="Table",ne.SELECTION_COLUMN=q.Z.SELECTION_COLUMN,ne.EXPAND_COLUMN=q.Z.EXPAND_COLUMN,ne.SELECTION_ALL=q.Z.SELECTION_ALL,ne.SELECTION_INVERT=q.Z.SELECTION_INVERT,ne.SELECTION_NONE=q.Z.SELECTION_NONE,ne.Column=q.Z.Column,ne.ColumnGroup=q.Z.ColumnGroup,ne.Summary=q.Z.Summary,ne.Collapse=Fr;var pc=null,Os=d(6844),zr=d(8999),Zs=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],Hr,Qr,Jr,Ts=(0,Z.kc)(function(o){var e=o.css;return{container:e(Hr||(Hr=v()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:e(Qr||(Qr=v()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:e(Jr||(Jr=v()([`
      position: relative;
      flex: 1;
    `])))}}),Es=(0,h.forwardRef)(function(o,e){var t=o.className,n=o.style,a=o.classNames,r=o.expand,i=r===void 0?!0:r,l=o.setExpand,c=o.bottomAddons,p=o.topAddons,f=o.onSizeChange,g=o.heights,m=o.onSend,b=A()(o,Zs),y=Ts(),x=y.styles;return(0,s.jsx)(Os.Z,{className:t,classNames:a,fullscreen:i,headerHeight:g==null?void 0:g.headerHeight,maxHeight:g==null?void 0:g.maxHeight,minHeight:g==null?void 0:g.minHeight,onSizeChange:f,placement:"bottom",size:{height:g==null?void 0:g.inputHeight,width:"100%"},style:u()({zIndex:10},n),children:(0,s.jsxs)("section",{className:x.container,style:{minHeight:g==null?void 0:g.minHeight},children:[p,(0,s.jsx)("div",{className:x.textareaContainer,children:(0,s.jsx)(zr.Z,u()({className:x.textarea,onSend:function(){m==null||m(),l==null||l(!1)},ref:e,type:"pure"},b))}),c]})})}),Ps=(0,h.memo)(Es),Is=d(86113),Ds=d(34362),Rs=d(43789),Bs=d(85015),Fs=d(48443),Vr=d(19674),zs=d(49559),Hs=d(84041),Gr=d(38008),Qs=d(93992),Js=d(59391),Se=d(59799),Vs=d(21420),Gs=d(73589),W={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}},Us=d(31927),Ks=function(e){var t,n=e.type,a=e.scale,r=e.appearance,i=(0,Us.Z)(n),l=r==="dark";return t={},I()(t,"color".concat(i,"Bg"),a[r][1]),I()(t,"color".concat(i,"BgHover"),a[r][2]),I()(t,"color".concat(i,"Border"),a[r][4]),I()(t,"color".concat(i,"BorderHover"),a[r][l?5:3]),I()(t,"color".concat(i,"Hover"),a[r][l?10:8]),I()(t,"color".concat(i),a[r][9]),I()(t,"color".concat(i,"Active"),a[r][l?7:10]),I()(t,"color".concat(i,"TextHover"),a[r][l?10:8]),I()(t,"color".concat(i,"Text"),a[r][9]),I()(t,"color".concat(i,"TextActive"),a[r][l?7:10]),t},Ws=function(e){var t=e.scale,n=e.appearance;return{colorBgContainer:n==="dark"?t[n][1]:t[n][0],colorBgElevated:n==="dark"?t[n][2]:t[n][0],colorBgLayout:n==="dark"?t[n][0]:t[n][1],colorBgMask:t.lightA[8],colorBgSpotlight:t[n][5],colorBorder:t[n][4],colorBorderSecondary:t[n][3],colorFill:t["".concat(n,"A")][3],colorFillQuaternary:t["".concat(n,"A")][0],colorFillSecondary:t["".concat(n,"A")][2],colorFillTertiary:t["".concat(n,"A")][1],colorText:t[n][12],colorTextQuaternary:t[n][6],colorTextSecondary:t[n][10],colorTextTertiary:t[n][8]}},Ys={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},Ur=function(e){var t=e?"dark":"light",n=W.gray[t][11],a=W.gray[t][7],r=e?W.red[t][9]:W.volcano[t][9],i=e?W.gold[t][9]:W.orange[t][9],l=e?W.lime[t][9]:W.green[t][9],c=e?W.blue[t][9]:W.geekblue[t][9];return{colors:{"editor.foreground":n},name:t,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:l},enumMember:{foreground:c},macro:{foreground:l},"parameter.label:dart":{foreground:a},"property:dart":{foreground:l},tomlArrayKey:{foreground:r},"variable.constant":{foreground:l},"variable.defaultLibrary":{foreground:r},"variable:dart":{foreground:l}},tokenColors:[{scope:"meta.embedded",settings:{foreground:a}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:n}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:c}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:l}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:n}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:a}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:r}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:r}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:a}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:i}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:r}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:n}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:c}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:n}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:c}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:l}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:a}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:a}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:r}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:i}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:l}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:n}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:n}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:a}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:a}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:i}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:r}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:l}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:r}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:r}},{name:"java source",scope:"source.java",settings:{foreground:n}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:a}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:i}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:r}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:c}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:n}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:c}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:c}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:c}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:l}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:c}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:l}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:n}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:l}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:c}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:r}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:r}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:n}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:l}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:c}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:n}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:l}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:i}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:a}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:c}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:c}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:c}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:n}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:c}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:c}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:a}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:c}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:c}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:c}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:l}},{name:"python type",scope:"support.type.python",settings:{foreground:c}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:c}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:l}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:a}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:i}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:l}},{name:"Operators",scope:"keyword.operator",settings:{foreground:a}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:c}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:c}},{name:"Keywords",scope:"keyword",settings:{foreground:c}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:r}},{name:"Variables",scope:"variable",settings:{foreground:n}},{name:"Variables",scope:"variable.c",settings:{foreground:a}},{name:"Language variables",scope:"variable.language",settings:{foreground:r}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:a}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:r}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:c}},{name:"Packages",scope:"token.package",settings:{foreground:a}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:i}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:r}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:r}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:r}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:r}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:n}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:r}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:c}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:l}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:i}},{name:"Storage",scope:"storage",settings:{foreground:c}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:c}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:c}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:r}},{name:"Support",scope:"support.function",settings:{foreground:c}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:n}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:a}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:l}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:a}},{name:"Strings",scope:"string",settings:{foreground:l}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:c}},{name:"Integers",scope:"constant.numeric",settings:{foreground:l}},{name:"Constants",scope:"constant",settings:{foreground:l}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:l}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:n}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:l}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:i}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:l}},{name:"Selector",scope:"meta.selector",settings:{foreground:c}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:r}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:i}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:n}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:l}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:r}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:c}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:n}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:r}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:r}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:r}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:n}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:r}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:r}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:i}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:c}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:c}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:a}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:n}},{name:"Broken",scope:"invalid.broken",settings:{foreground:n}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:n}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:l}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:l}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:n}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:c}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:c}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:r}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:c}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:c}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:a}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:a}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:r}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:r}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:i}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:a}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:l}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:l}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:i}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:c}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:c}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:c}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:c}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:i}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:c}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:a}},{name:"brace function",scope:"function.brace",settings:{foreground:a}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:a}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:c}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:c}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:c}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:l}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:l}},{name:"sass selector",scope:"selector.sass",settings:{foreground:n}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:r}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:a}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:r}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:n}},{scope:"token.info-token",settings:{foreground:i}},{scope:"token.warn-token",settings:{foreground:l}},{scope:"token.error-token",settings:{foreground:r}},{scope:"token.debug-token",settings:{foreground:c}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:c}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:a}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:c}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:i}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:r}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:n}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:n}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:l}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:l}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:l}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:l}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:c}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:r}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:c}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:r}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:c}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:l}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:c}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:n}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:c}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:r}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:n}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:c}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:n}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:l}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:n}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:r}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:r}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:i}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:n}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:l}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:r}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:c}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:n}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:r}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:r}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:c}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:n}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:c}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:c}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:a}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:l}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:a}},{name:"link",scope:["constant.character.xi"],settings:{foreground:i}},{name:"accent",scope:["accent.xi"],settings:{foreground:i}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:l}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:n}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:a}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:r}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:n}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:a}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:a}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:a}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:c}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:r}},{scope:["entity.name.variable.field.cs"],settings:{foreground:n}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:n}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:l}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:r}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:a}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:r}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:n}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:r}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:n}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:a}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:c}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:l}},{scope:["constant.character.escape"],settings:{foreground:c}},{scope:["string.regexp"],settings:{foreground:n}},{scope:["log.info"],settings:{foreground:l}},{scope:["log.warning"],settings:{foreground:r}},{scope:["log.error"],settings:{foreground:n}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:t}},sn=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"],Kr="txt",Ie=[Kr],Wr,$s=function(){var o=rn()(ve()().mark(function e(t){var n,a;return ve()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=Wr,a=t.toLowerCase(),!(n&&Ie.includes(a))){i.next=4;break}return i.abrupt("return",n);case 4:return sn.includes(a)&&!Ie.includes(a)&&Ie.push(a),i.next=7,(0,Vs.e$)({langs:Ie,themes:[Ur(!0),Ur(!1)]});case 7:return n=i.sent,Wr=n,i.abrupt("return",n);case 10:case"end":return i.stop()}},e)}));return function(t){return o.apply(this,arguments)}}(),Xs=function(e,t,n){return(0,Gs.ZP)([t.toLowerCase(),n?"dark":"light",e].join("-"),rn()(ve()().mark(function a(){var r,i,l;return ve()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,r=t.toLowerCase(),p.next=4,$s(r);case 4:return i=p.sent,l=i==null?void 0:i.codeToHtml(e,{lang:sn.includes(r)?r:Kr,theme:n?"dark":"light",transformers:[(0,Se.hu)(),(0,Se.d0)(),(0,Se.dY)(),(0,Se.Eu)(),(0,Se.p4)()]}),p.abrupt("return",l);case 9:return p.prev=9,p.t0=p.catch(0),p.abrupt("return","");case 12:case"end":return p.stop()}},a,null,[[0,9]])})),{revalidateOnFocus:!1})},qs=d(4008),Yr,$r,Xr,_s=(0,Z.kc)(function(o){var e=o.css,t=o.token,n=o.cx,a=o.prefixCls,r=o.stylish,i="".concat(a,"-highlighter");return{loading:n(r.blur,e(Yr||(Yr=v()([`
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
      `])),t.fontFamilyCode,t.colorTextTertiary,t.borderRadius)),shiki:n("".concat(i,"-shiki"),e($r||($r=v()([`
        margin: 0;
        padding: 0;

        .shiki {
          overflow-x: auto;
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
      `])),t.colorFillTertiary,t.colorWarningBg,t.colorErrorBg,t.colorFillTertiary,t.colorBorderSecondary,t.borderRadius,t.colorErrorBg,t.colorErrorText,t.colorSuccessBg,t.colorSuccessText)),unshiki:e(Xr||(Xr=v()([`
      color: `,`;
    `])),t.colorTextDescription)}}),qr=(0,h.memo)(function(o){var e=o.children,t=o.language,n=o.className,a=o.style,r=_s(),i=r.styles,l=r.cx,c=(0,$e.r)(),p=c.isDarkMode,f=Xs(e.trim(),t,p),g=f.data,m=f.isLoading;return(0,s.jsxs)(s.Fragment,{children:[m||!g?(0,s.jsx)("div",{className:l(i.unshiki,n),style:a,children:(0,s.jsx)("pre",{children:(0,s.jsx)("div",{children:e.trim()})})}):(0,s.jsx)("div",{className:l(i.shiki,n),dangerouslySetInnerHTML:{__html:g},style:a}),m&&(0,s.jsx)(Ae.D,{align:"center",className:i.loading,gap:8,horizontal:!0,justify:"center",children:(0,s.jsx)(ae.Z,{icon:qs.Z,spin:!0})})]})}),_r,eo,no,to,ro,oo,ao,io=(0,Z.kc)(function(o,e){var t=o.token,n=o.css,a=o.cx,r=o.prefixCls,i=o.stylish,l="".concat(r,"-highlighter"),c="".concat(l,"-hover-btn"),p="".concat(l,"-hover-lang"),f=n(_r||(_r=v()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),e==="block"?t.colorFillTertiary:"transparent",e==="block"?"transparent":t.colorBorder,e==="block"?t.colorFillTertiary:t.colorFillQuaternary);return{button:a(c,n(eo||(eo=v()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),e==="pure"?0:"8px",e==="pure"?0:"8px")),container:a(l,e!=="pure"&&f,n(no||(no=v()([`
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
        `])),t.borderRadius,t.motionEaseOut,c,p,e==="pure"?0:"16px")),header:n(to||(to=v()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),t.colorFillQuaternary),lang:a(p,i.blur,n(ro||(ro=v()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 8px;
          inset-inline-end: 0;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),t.fontFamilyCode,t.colorTextSecondary)),scroller:n(oo||(oo=v()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:n(ao||(ao=v()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),t.colorTextDescription,r,t.colorTextDescription)}}),el=["children","language","className","style","allowChangeLanguage","fileName","icon"],nl=sn.map(function(o){return{label:o,value:o.toLowerCase()}}),so=(0,h.memo)(function(o){var e=o.children,t=o.language,n=t===void 0?"markdown":t,a=o.className,r=o.style,i=o.allowChangeLanguage,l=i===void 0?!1:i,c=o.fileName,p=o.icon,f=A()(o,el),g=(0,h.useState)(!0),m=P()(g,2),b=m[0],y=m[1],x=(0,h.useState)(n),S=P()(x,2),C=S[0],k=S[1],w=io("block"),j=w.styles,E=w.cx,D=E(j.container,a);return(0,s.jsxs)("div",u()(u()({className:D,"data-code-type":"highlighter",style:r},f),{},{children:[(0,s.jsxs)(Ae.D,{align:"center",className:j.header,horizontal:!0,justify:"space-between",children:[(0,s.jsx)(Hs.Z,{icon:b?Qs.Z:Js.Z,onClick:function(){return y(!b)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),l&&!c?(0,s.jsx)(Gr.default,{className:j.select,onSelect:k,options:nl,size:"small",suffixIcon:!1,value:C.toLowerCase(),variant:"borderless"}):(0,s.jsxs)(Ae.D,{align:"center",className:j.select,gap:2,horizontal:!0,children:[p,(0,s.jsx)("span",{children:c||C})]}),(0,s.jsx)(Vr.Z,{content:e,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,s.jsx)(qr,{language:C==null?void 0:C.toLowerCase(),style:b?{}:{height:0,overflow:"hidden"},children:e})]}))}),tl=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon"],rl=(0,h.memo)(function(o){var e=o.fullFeatured,t=o.copyButtonSize,n=t===void 0?"site":t,a=o.children,r=o.language,i=o.className,l=o.style,c=o.copyable,p=c===void 0?!0:c,f=o.showLanguage,g=f===void 0?!0:f,m=o.type,b=m===void 0?"block":m,y=o.spotlight,x=o.allowChangeLanguage,S=o.fileName,C=o.icon,k=A()(o,tl),w=io(b),j=w.styles,E=w.cx,D=E(j.container,i);return e?(0,s.jsx)(so,u()(u()({allowChangeLanguage:x,className:i,fileName:S,icon:C,language:r,style:l},k),{},{children:a})):(0,s.jsxs)("div",u()(u()({className:D,"data-code-type":"highlighter",style:l},k),{},{children:[y&&(0,s.jsx)(Fs.Z,{size:240}),p&&(0,s.jsx)(Vr.Z,{className:j.button,content:a,placement:"left",size:n}),g&&r&&(0,s.jsx)(zs.Z,{className:j.lang,children:r.toLowerCase()}),(0,s.jsx)("div",{className:j.scroller,children:(0,s.jsx)(qr,{language:r==null?void 0:r.toLowerCase(),children:a})})]}))}),ol=d(79945),al=d(65130),il=d(75608),sl=d(74583),ll=d(49409),cl=d(17432),dl=d(6271),ul=d(89379),pl=d(11310),gl=d(13545),fl=d(3267),ml=d(62977),vl=d(15356),bl=d(32813),hl=d(89915),yl=d(79852),xl=d(39427),Cl=d(97257),Sl=d(15157),kl=d(86102),jl=d(6663),Al=d(88492),wl=d(82160),Ll=d(70473),Ml=d(50918),Nl=d(4551),Ol=d(99288),Zl=d(43662),Tl=d(87821),El=d(7460),Pl=d(71708),Il=d(20459),Dl=d(5144),Rl=d(19333),Bl=d(66838),Fl=d(46489),zl=d(39426),Hl=d(75185),Ql=d(72081),Jl=d(44083),Vl=d(10286),Gl=d(33941),Ul=d(45780),Kl=d(43880),Wl=d(97512)}}]);
