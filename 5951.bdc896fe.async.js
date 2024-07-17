"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[5951],{75951:function(Xl,rn,s){s.r(rn),s.d(rn,{Affix:function(){return el.Z},Alert:function(){return lt},Anchor:function(){return nl.Z},AntdMentions:function(){return tl.Z},App:function(){return ht},AutoComplete:function(){return rl.Z},Avatar:function(){return qe.C},BackTop:function(){return ol.Z},Badge:function(){return Jt.Z},BaseMonacoEditor:function(){return Ue},Breadcrumb:function(){return on.Z},Button:function(){return re.ZP},Calendar:function(){return al.Z},Card:function(){return Ca.Z},Carousel:function(){return il.Z},Cascader:function(){return ll.Z},ChatInputActionBar:function(){return Na.Z},ChatInputArea:function(){return Ma},ChatInputAreaInner:function(){return xt.Z},ChatSendButton:function(){return Za.Z},Checkbox:function(){return sl.Z},Col:function(){return Ve.Z},Collapse:function(){return Ye.Z},CollapseGroup:function(){return Ie},CollapseTable:function(){return Or},ColorPicker:function(){return dl.Z},ConfigContext:function(){return be},ConfigProvider:function(){return zr},DatePicker:function(){return cl.default},Descriptions:function(){return Je},Divider:function(){return Et},DragPanel:function(){return Jr},Drawer:function(){return wa},Dropdown:function(){return $e.Z},Empty:function(){return Tn.Z},Flex:function(){return O.Z},FloatButton:function(){return ul.Z},Form:function(){return wt},FormCollapseList:function(){return Ft},FormHelper:function(){return Ht},Grid:function(){return vl.ZP},HeaderButtonGroup:function(){return Kt},Highlighter:function(){return Gl.ZP},Image:function(){return ml.Z},Input:function(){return pl.Z},InputNumber:function(){return ot.Z},Layout:function(){return fl.Z},List:function(){return hl.Z},Logo:function(){return _r},Markdown:function(){return Ul.Z},Mentions:function(){return $o},Menu:function(){return xl.Z},MobileChatInputArea:function(){return Oa.Z},MobileChatSendButton:function(){return Ea.Z},Modal:function(){return _},MonacoController:function(){return na.Q},MonacoDiffEditor:function(){return aa},MonacoEditor:function(){return oa},NotificationGlobalStyle:function(){return vt},Page:function(){return me},Pagination:function(){return yl.Z},Popconfirm:function(){return bl.Z},Popover:function(){return Cl.Z},ProCard:function(){return Ze},Progress:function(){return Al.Z},QRCode:function(){return Sl.Z},Radio:function(){return Nr},Rate:function(){return jl.Z},Result:function(){return Vt.ZP},Row:function(){return tt.Z},Segmented:function(){return Ll.Z},Select:function(){return Ml.default},Skeleton:function(){return ie.Z},Slider:function(){return rt.Z},SliderInput:function(){return ia},Space:function(){return Ke.Z},Spin:function(){return Nl.Z},Statistic:function(){return Zl.Z},Steps:function(){return Ol.Z},Switch:function(){return El.Z},SyntaxHighlighter:function(){return Vl.Z},Table:function(){return ee},Tabs:function(){return Tl.Z},Tag:function(){return Pl.Z},TimePicker:function(){return Rl.Z},Timeline:function(){return kl.Z},Tooltip:function(){return de.Z},Tour:function(){return Dl.Z},Transfer:function(){return Bl.Z},Tree:function(){return Fl.Z},TreeSelect:function(){return wl.Z},Typography:function(){return je},Upload:function(){return zl.Z},Watermark:function(){return Ql.Z},message:function(){return gl.ZP},notification:function(){return ya},theme:function(){return Il.Z},useAutoFocus:function(){return zt},useCdnFn:function(){return cn},useLink:function(){return un},useResponsive:function(){return Yl.F},useTheme:function(){return P.Fg},useThemeMode:function(){return Xn.r},version:function(){return Hl.Z},withFormHelper:function(){return _a}});var on=s(79318),Tr=s(77117),u=s.n(Tr),Pr=s(95530),L=s.n(Pr),Ir=s(95428),g=s(50959),kr=s(18840),h=s.n(kr),P=s(4377),an,Rr=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(an||(an=h()([`
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
    `])),t.margin,n,t.paddingSM,t.paddingSM,t.paddingSM,t.fontSize,t.padding,t.padding,t.paddingSM,t.paddingSM,t.paddingXS,t.colorBgContainer)}}),l=s(11527),Dr=["className","variant"],Br=Ir.Z.Group,Ie=function(e){var t=e.className,n=e.variant,a=L()(e,Dr),o=Rr(),i=o.styles,d=o.cx;return(0,l.jsx)(Br,u()({className:d(i.root,t),collapsible:n==="pure"?"icon":"header",variant:n},a))},ln=s(56264),Fr="https://unpkg.com",wr="https://registry.npmmirror.com",sn=function(e){var t=e.pkg,n=e.version,a=n===void 0?"latest":n,o=e.path,i=e.proxy;switch(i){case"unpkg":return(0,ln.Z)(Fr,"".concat(t,"@").concat(a),o);default:return(0,ln.Z)(wr,t,a,"files",o)}},be=(0,g.createContext)(null),zr=(0,g.memo)(function(r){var e=r.children,t=r.config;return(0,l.jsx)(be.Provider,{value:t,children:e})}),dn=function(e){var t=e.pkg,n=e.version,a=e.path;return sn({path:a,pkg:t,proxy:"aliyun",version:n})},cn=function(){var e=(0,g.useContext)(be);return e?(e==null?void 0:e.proxy)!=="custom"?function(t){var n=t.pkg,a=t.version,o=t.path;return sn({path:o,pkg:n,proxy:e.proxy,version:a})}:(e==null?void 0:e.customCdnFn)||dn:dn},un=function(){var e=(0,g.useContext)(be);return e==null?void 0:e.Link},Hr=s(28152),k=s.n(Hr),Qr=s(69343),vn=s(61478),O=s(94614),re=s(34309),Gr=s(7681),Ur=s.n(Gr),mn,pn,fn,hn,xn,Vr=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(mn||(mn=h()([`
      overflow: hidden;
    `]))),wrapper:e(pn||(pn=h()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),t.marginLG),content:e(fn||(fn=h()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.borderRadiusLG,t.boxShadowSecondary),dragWrapper:e(hn||(hn=h()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:e(xn||(xn=h()([`
      cursor: move;
    `])))}}),Yr=["title","classNames","defaultPosition","onPositionChange"],Jr=(0,g.memo)(function(r){var e=r.title,t=r.classNames,n=t===void 0?{}:t,a=r.defaultPosition,o=r.onPositionChange,i=L()(r,Yr),d=Vr(),c=d.styles,m=d.cx,p=(0,g.useState)({left:0,top:0,bottom:0,right:0}),v=k()(p,2),f=v[0],x=v[1],y=(0,g.useRef)(null),b=function(C,A){var T,j=window.document.documentElement,I=j.clientWidth,w=j.clientHeight,B=(T=y.current)===null||T===void 0?void 0:T.getBoundingClientRect();B&&x({left:-B.left+A.x,right:I-(B.right-A.x),top:-B.top+A.y,bottom:w-(B.bottom-A.y)})};return(0,l.jsx)(vn.Z,u()(u()({},i),{},{classNames:u()(u()({},n),{},{wrapper:m(c.wrapper,n.wrapper),content:m(c.content,n.content)}),destroyOnClose:!0,drawerRender:function(C){return(0,l.jsx)(Ur(),{bounds:f,defaultPosition:a,handle:".".concat(c.dragHandle),nodeRef:y,onStart:function(T,j){return b(T,j)},onStop:function(T,j){o==null||o({x:j.x,y:j.y})},children:(0,l.jsx)("div",{className:c.dragWrapper,ref:y,children:C})})},mask:!1,rootClassName:c.root,title:(0,l.jsxs)(O.Z,{align:"center",className:c.dragHandle,children:[(0,l.jsx)(O.Z,{flex:2,children:e}),(0,l.jsx)(O.Z,{children:(0,l.jsx)(re.ZP,{className:c.dragHandle,icon:(0,l.jsx)(Qr.Z,{}),type:"text"})})]})}))}),Kr=s(24819),Wr=s(62812),ke=s.n(Wr),Xr=(0,g.memo)(function(r){var e=Object.assign({},(ke()(r),r));return(0,l.jsx)("svg",u()(u()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},e),{},{children:(0,l.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),gn=(0,g.memo)(function(r){var e=Object.assign({},(ke()(r),r));return(0,l.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},e),{},{children:[(0,l.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,l.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,l.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),yn=(0,g.memo)(function(r){var e=Object.assign({},(ke()(r),r));return(0,l.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,l.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,l.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,l.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,l.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,l.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,l.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,l.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),bn,$r=(0,P.kc)(function(r){var e=r.css;return{extraTitle:e(bn||(bn=h()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),qr=["type","size","style","extra","className"],_r=(0,g.memo)(function(r){var e=r.type,t=e===void 0?"img":e,n=r.size,a=n===void 0?32:n,o=r.style,i=r.extra,d=r.className,c=L()(r,qr),m=(0,P.Fg)(),p=$r(),v=p.styles,f;switch(t){case"text":{f=(0,l.jsx)(yn,u()({className:d,height:a,style:o,width:a*2.9375},c));break}case"combine":{f=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(gn,u()({height:a,style:o,width:a},c)),(0,l.jsx)(yn,{style:{height:a,marginLeft:Math.round(a/4),width:"auto"}})]});break}case"img":default:{f=(0,l.jsx)(gn,u()({height:a,style:o,width:a},c));break}}if(!i)return f;var x=Math.round(a/3*1.9);return(0,l.jsxs)(Kr.D,u()(u()({align:"center",className:d,horizontal:!0,style:o},c),{},{children:[f,(0,l.jsx)(Xr,{style:{color:m.colorFill,height:x,width:x}}),(0,l.jsx)("div",{className:v.extraTitle,style:{fontSize:x},children:i})]}))}),eo=s(21320),V=s.n(eo),no=s(41979),to=s(63850),ro=s(62304),oo=s(31463),ao=s(50834),io=s(12922),E=s(65694),lo=s(15033),Re=s.n(lo),so=s(96345),De=s.n(so),co=s(71160),uo=s.n(co),vo=s(41607),mo=s.n(vo),po=s(13762),Be=s.n(po),fo=s(41206),Fe=s.n(fo),Ce=function(r){Be()(t,r);var e=Fe()(t);function t(){return Re()(this,t),e.apply(this,arguments)}return De()(t,[{key:"createDOM",value:function(a){var o=uo()(mo()(t.prototype),"createDOM",this).call(this,a);return o.classList.add("align-middle"),o}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(a){return new t(a.__text,a.__key)}},{key:"importJSON",value:function(a){var o=(0,E.MX)(a.text);return o.setFormat(a.format),o.setDetail(a.detail),o.setMode(a.mode),o.setStyle(a.style),o}}]),t}(E.R2);function $l(r){return new Ce(r)}var oe=s(31692),Ae=s(95138),ho=s(90696),X=s.n(ho),we=s(244),de=s(32588),xo=s(55608),Cn=(0,g.createContext)(null),go=(0,g.memo)(function(r){var e=r.children,t=r.value;return(0,l.jsx)(Cn.Provider,{value:t,children:e})}),yo=function(){var e=(0,g.useContext)(Cn);return e==null?void 0:e.optionsMap},bo=s(457),Co=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,Ao="\\(",So=function(e){return"(?:"+e.join("|")+")"},jo=function(e,t){var n=e.length===0?"":"(?!"+e.join("|")+")";return n+"[^\\s"+t+"]"},Lo=function(e){return"(?:\\.[ |$]|\\s|["+e+"]|)"},Mo=75,No=function(e,t){var n=(0,g.useRef)(null),a=(0,oe.g)(),o=k()(a,1),i=o[0],d=(0,bo.y)(e),c=k()(d,3),m=c[0],p=c[1],v=c[2],f=(0,g.useCallback)(function(y){var b=(0,E.dL)(),S=b==null?void 0:b.getNodes();if(!m&&(S==null?void 0:S.length)===1&&i.dispatchCommand(t,void 0),m&&(0,E.iO)(b)){y.preventDefault();var C=(0,E.gI)(e);if((0,E.k$)(C))return t&&i.dispatchCommand(t,void 0),C.remove(),!0}return!1},[m,e,t,i]),x=(0,g.useCallback)(function(y){y.stopPropagation(),v(),p(!0)},[p,v]);return(0,g.useEffect)(function(){var y=n.current;return y&&y.addEventListener("click",x),function(){y&&y.removeEventListener("click",x)}},[x]),(0,g.useEffect)(function(){return(0,Ae.qV)(i.registerCommand(E.MK,f,E.KB),i.registerCommand(E.aR,f,E.KB))},[i,v,f]),[n,m]},ql=function(){var e=useRef(null),t=useState(!1),n=_slicedToArray(t,2),a=n[0],o=n[1],i=useCallback(function(d){d.stopPropagation(),o(function(c){return!c})},[]);return useEffect(function(){var d=e.current;return d&&d.addEventListener("click",i),function(){d&&d.removeEventListener("click",i)}},[i]),[e,a,o]};function Zo(r,e,t,n){return new RegExp((e?"(^|\\s|".concat(e,")("):"(^|\\s)(")+So(r)+"((?:"+jo(r,t)+(n?Lo(t):"")+"){0,"+Mo+"}))$")}function Oo(r,e,t,n,a){var o=Zo(e,t,n,a).exec(r);if(o!==null){var i=o[1],d=o[2],c=o[3];if(d.length>0)return{leadOffset:o.index+i.length,matchingString:c,replaceableString:d}}return null}var Eo=function(e,t){var n=t.punctuation,a=t.preTriggerChars,o=t.allowSpaces,i=(0,g.useState)(null),d=k()(i,2),c=d[0],m=d[1],p=(0,g.useCallback)(function(v){var f=Oo(v,e,a,n,o);if(f){var x=f.replaceableString,y=f.matchingString,b=x.lastIndexOf(y),S=b===-1?x:x.slice(0,Math.max(0,b))+x.slice(Math.max(0,b+y.length));if(m(S||null),f.replaceableString)return f}else m(null);return null},[a,o,n,e]);return{trigger:c,checkForMentionMatch:p}},An,Sn,jn,To=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.isError,d=function(){return i?o?{background:n.colorErrorBgActive,border:n.colorErrorBorderHover,color:n.colorErrorTextActive}:{background:n.colorErrorBg,border:n.colorErrorBorder,color:n.colorErrorText}:o?{background:n.colorInfoBgHover,border:n.colorInfoBorder,color:n.colorInfoText}:{background:n.colorFillTertiary,border:"transparent",color:n.colorInfoText}},c=d(),m=c.background,p=c.border,v=c.color;return{root:t(An||(An=h()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),n.fontFamilyCode,v,m,p,n.borderRadius),text:t(Sn||(Sn=h()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.colorTextSecondary),error:t(jn||(jn=h()([`
        color: `,`;
      `])),n.colorErrorText)}}),Ln=(0,E.fA)("INSERT_MENTION_COMMAND"),Mn=(0,E.fA)("DELETE_MENTION_COMMAND"),Nn=(0,E.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Zn=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,Po=(0,g.memo)(function(r){var e=r.nodeKey,t=r.variable,n=yo(),a=(0,oe.g)(),o=k()(a,1),i=o[0],d=No(e,Mn),c=k()(d,2),m=c[0],p=c[1],v=n==null?void 0:n[t],f=To({isSelected:p,isError:!v||!!v.error}),x=f.styles;(0,g.useEffect)(function(){if(!i.hasNodes([ce]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[i]);var y=(0,l.jsx)(O.Z,{className:x.root,ref:m,children:(0,l.jsxs)(O.Z,{align:"center",gap:2,children:[(!v||v.error)&&(0,l.jsx)(we.Z,{className:x.error,icon:xo.Z}),(v==null?void 0:v.icon)&&(0,l.jsx)(O.Z,{children:v.icon}),(0,l.jsx)(O.Z,{className:x.text,gap:2,title:(v==null?void 0:v.label)||t,children:(0,l.jsx)("span",{children:(v==null?void 0:v.label)||t})})]})});return v!=null&&v.error?(0,l.jsx)(de.Z,{title:v==null?void 0:v.error,children:y}):y}),ce=function(r){Be()(t,r);var e=Fe()(t);function t(n,a,o){var i;return Re()(this,t),i=e.call(this,o),V()(X()(i),"__variable",void 0),i.__variable=n,i}return De()(t,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var a=document.createElement("div");return a.style.display="inline-flex",a.style.alignItems="center",a.style.verticalAlign="middle",a}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,l.jsx)(Po,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var a=this.getLatest();return a.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(a){return new t(a.__variable)}},{key:"importJSON",value:function(a){var o=ze(a.variable);return o}}]),t}(E.Ij);function ze(r){return new ce(r)}function _l(r){return r instanceof ce}var es=(0,E.fA)("INSERT_MENTION_COMMAND"),ns=(0,E.fA)("DELETE_MENTION_COMMAND"),ts=(0,E.fA)("CLEAR_HIDE_MENU_TIMEOUT"),rs=(0,E.fA)("UPDATE_MENTIONS_OPTIONS"),Io=function(e,t,n){if(e.isSimpleText())for(var a=e.getPreviousSibling(),o=e.getTextContent(),i=e,d;;){d=t(o);var c=d===null?"":o.slice(d.end);if(o=c,c===""){var m=i.getNextSibling();if((0,E.Gg)(m)){c=i.getTextContent()+m.getTextContent();var p=t(c);if(p===null){m.markDirty();return}else if(p.start!==0)return}}else{var v=t(c);if(v!==null&&v.start===0)return}if(d===null)return;if(!(d.start===0&&(0,E.Gg)(a)&&a.isTextEntity())){var f=void 0;if(d.start===0){var x=i.splitText(d.end),y=k()(x,2);f=y[0],i=y[1]}else{var b=i.splitText(d.start,d.end),S=k()(b,3);f=S[1],i=S[2]}var C=n(f);if(f.replace(C),i==null)return}}};function ko(r){var e=r.split(`
`);return JSON.stringify({root:{children:e.map(function(t){return{children:[{detail:0,format:0,mode:"normal",style:"",text:t,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Ro=(0,g.memo)(function(r){var e=r.onInsert,t=(0,oe.g)(),n=k()(t,1),a=n[0];(0,g.useEffect)(function(){if(!a.hasNodes([ce]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[a]);var o=(0,g.useCallback)(function(c){e&&e();var m=c.getTextContent().slice(2,-2);return(0,E.U2)(ze(m))},[e]),i=(0,g.useCallback)(function(c){var m=Zn.exec(c);if(m===null)return null;var p=m.index,v=p+m[0].length;return{end:v,start:p}},[]),d=(0,g.useCallback)(function(c){return Io(c,i,o)},[o,i]);return(0,g.useEffect)(function(){return Zn.lastIndex=0,(0,Ae.qV)(a.registerNodeTransform(Ce,d))},[]),null}),On=(0,g.memo)(function(r){var e=r.onInsert,t=r.onDelete,n=(0,oe.g)(),a=k()(n,1),o=a[0];return(0,g.useEffect)(function(){if(!o.hasNodes([ce]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,Ae.qV)(o.registerCommand(Ln,function(i){o.dispatchCommand(Nn,null);var d=ze(i);return(0,E.od)([d]),e&&e(),!0},E.VN),o.registerCommand(Mn,function(){return t&&t(),!0},E.VN))},[o,e,t]),null});On.displayName="MentionNodePlugin";var En=s(40268),Do=s(10422),Bo=function(r){Be()(t,r);var e=Fe()(t);function t(n,a,o){var i;return Re()(this,t),i=e.call(this,n),V()(X()(i),"label",void 0),V()(X()(i),"value",void 0),V()(X()(i),"icon",void 0),V()(X()(i),"extraElement",void 0),V()(X()(i),"keywords",void 0),V()(X()(i),"keyboardShortcut",void 0),V()(X()(i),"onSelect",void 0),V()(X()(i),"disabled",void 0),V()(X()(i),"data",void 0),i.value=n,i.label=a,i.keywords=o.keywords||[],i.icon=o.icon,i.extraElement=o.extraElement,i.keyboardShortcut=o.keyboardShortcut,i.onSelect=o.onSelect.bind(X()(i)),i.disabled=o.disabled,i.data=o.data,i}return De()(t)}(En.n),Fo=function(e,t){var n=(0,oe.g)(),a=k()(n,1),o=a[0],i=(0,g.useMemo)(function(){var d=e.map(function(m){return new Bo(m.value,m.label,{icon:m.icon,onSelect:function(){o.dispatchCommand(Ln,m.value)},disabled:m.disabled,data:m.data,extraElement:m.extraElement,keywords:m.keywords,keyboardShortcut:m.keyboardShortcut})});if(!t)return d;var c=new RegExp(t,"i");return d.filter(function(m){var p;return c.test(m.label)||((p=m.keywords)===null||p===void 0?void 0:p.some(function(v){return c.test(v)}))})},[e,t,o]);return{options:i}},Tn=s(27387),Se=s(17575),wo=s(5726),ge=s.n(wo),zo=s(92117),Ho=s.n(zo),Qo=s(45832),Go=["time","format","relativeTime","tooltip"];ge().extend(Ho());var je=Se.Z,He=function(e){return ge()(e?new Date(e):new Date).fromNow()},Uo=function(e){var t,n=e.time,a=e.format,o=e.relativeTime,i=o===void 0?!0:o,d=e.tooltip,c=L()(e,Go),m=(0,g.useState)(He(n)),p=k()(m,2),v=p[0],f=p[1],x=(0,g.useCallback)(function(C){var A=ge()(),T=ge()(C),j=A.diff(T);if(j>0&&j<60*60*1e3)return setInterval(function(){f(He(C))},60*1e3)},[]);(0,g.useEffect)(function(){var C;return i&&(C=x(new Date(n))),function(){C&&clearInterval(C)}},[i,x,n]),(0,g.useEffect)(function(){if(i){var C=He(n);C!==v&&(f(C),x(new Date(n)))}},[n,i,v,x]);var y=ge()(n).format(a||"YYYY-MM-DD HH:mm:ss"),b=i?v:y,S=(t=d==null?void 0:d.title)!==null&&t!==void 0?t:i?y:void 0;return S&&(0,Qo.Z)(c,"ellipsis.tooltip.title",void 0),(0,l.jsx)(de.Z,u()(u()({},d||{}),{},{title:S,children:(0,l.jsx)(je.Text,u()(u()({},c),{},{children:b}))}))};je.Time=Uo;var Qe=je,Pn,In,kn,Rn,Dn,Bn,Fn,Ge=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.disabled,d=t(Pn||(Pn=h()([`
      background-color: `,`;
    `])),n.colorFillTertiary);return{anchor:t(In||(In=h()([`
        z-index: 9999;
      `]))),menuEmpty:t(kn||(kn=h()([`
        padding: `,`px;
      `])),n.padding),menuOverlay:t(Rn||(Rn=h()([`
        overflow: auto;

        width: 240px;
        max-height: 320px;
        margin-top: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.marginXXS,n.colorBgElevated,n.borderRadius,n.boxShadow),menuItem:t(Dn||(Dn=h()([`
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
      `])),i?"not-allowed":"pointer",i?"none":"all",n.paddingSM/2,n.paddingSM,n.borderRadius,i?n.colorTextDisabled:n.colorText,n.fontSize,n.lineHeight,o&&d,d),menuItemIcon:t(Bn||(Bn=h()([`
        color: `,`;
      `])),n.colorInfoText),menuItemLabel:t(Fn||(Fn=h()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Vo=Qe.Text,wn=(0,g.memo)(function(r){var e=r.index,t=r.isSelected,n=r.onClick,a=r.onMouseEnter,o=r.option,i=r.queryString,d=Ge({isSelected:t,disabled:o.disabled}),c=d.styles,m=o.label,p=(0,g.useMemo)(function(){var y=m,b="",S="";if(i){var C=new RegExp(i,"i"),A=C.exec(o.label);A&&(y=m.slice(0,Math.max(0,A.index)),b=A[0],S=m.slice(Math.max(0,A.index+A[0].length)))}return{before:y,middle:b,after:S}},[o.label,i,m]),v=p.before,f=p.middle,x=p.after;return(0,l.jsxs)(O.Z,{align:"center",className:c.menuItem,gap:4,onClick:function(){return n(e,o)},onMouseEnter:function(){return a(e,o)},ref:o.setRefElement,tabIndex:-1,children:[(0,l.jsx)(O.Z,{className:c.menuItemIcon,children:o.icon}),(0,l.jsxs)("div",{className:c.menuItemLabel,title:o.label,children:[v,(0,l.jsx)(Vo,{mark:!0,children:f}),x]}),(0,l.jsx)(O.Z,{children:o.extraElement})]},o.key)});wn.displayName="MentionMenuItem";var Yo=(0,g.memo)(function(r){var e=r.selectedIndex,t=r.options,n=r.onClick,a=r.onMouseEnter,o=r.queryString,i=Ge({}),d=i.styles;return(0,l.jsxs)(l.Fragment,{children:[t.length===0&&(0,l.jsx)(Tn.Z,{className:d.menuEmpty}),t.map(function(c,m){return(0,l.jsx)(wn,{index:m,isSelected:e===m,onClick:n,onMouseEnter:a,option:c,queryString:o},c.key)})]})}),Jo=(0,g.memo)(function(r){var e=r.triggers,t=r.options,n=t===void 0?[]:t,a=r.allowSpaces,o=a===void 0?!0:a,i=r.punctuation,d=i===void 0?Co:i,c=r.preTriggerChars,m=c===void 0?Ao:c,p=r.onSelect,v=Ge({}),f=v.styles,x=(0,oe.g)(),y=k()(x,1),b=y[0],S=Eo(e,{punctuation:d,preTriggerChars:m,allowSpaces:o}),C=S.trigger,A=S.checkForMentionMatch,T=(0,g.useState)(null),j=k()(T,2),I=j[0],w=j[1],B=Fo(n,I),U=B.options,Y=(0,g.useCallback)(function(M,Z,H,F){p==null||p(M,C,I),b.update(function(){Z&&M!==null&&M!==void 0&&M.key&&Z.remove(),M!=null&&M.onSelect&&M.onSelect(F),H()})},[b,p,I,C]),G=(0,g.useCallback)(function(M,Z){var H=Z.selectedIndex,F=Z.selectOptionAndCleanUp,K=Z.setHighlightedIndex;return M.current?Do.createPortal((0,l.jsx)("div",{className:f.menuOverlay,role:"menu",children:(0,l.jsx)(Yo,{onClick:function(N,R){R.disabled||(K(N),F(R))},onMouseEnter:function(N,R){R.disabled||K(N)},options:U,queryString:I,selectedIndex:H})}),M.current):null},[U,I,f.menuOverlay]);return(0,l.jsx)(En.HQ,{anchorClassName:f.anchor,menuRenderFn:G,onQueryChange:w,onSelectOption:Y,options:U,triggerFn:A})}),Ko=function(e){var t=e.onBlur,n=e.onFocus,a=(0,oe.g)(),o=k()(a,1),i=o[0],d=(0,g.useRef)(null);return(0,g.useEffect)(function(){return(0,Ae.qV)(i.registerCommand(Nn,function(){return d.current&&(clearTimeout(d.current),d.current=null),!0},E.VN),i.registerCommand(E.Gq,function(){return d.current=setTimeout(function(){i.dispatchCommand(E.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),t&&t(),!0},E.VN),i.registerCommand(E.m$,function(){return n&&n(),!0},E.VN))},[i,t,n]),null},Wo=Ko,zn,Hn,Qn,Gn,Un,Vn,Yn,Jn,Kn=function(e){return 32+Math.max(e-1,0)*22},Xo=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.autoSize;return{wrapper:t(zn||(zn=h()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:t(Hn||(Hn=h()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 4px;
        left: 11px;

        color: `,`;
      `])),n.colorTextPlaceholder),root:t(Qn||(Qn=h()([`
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
      `])),n.colorBorder,n.borderRadius,n.colorText,n.fontSize,n.fontFamily,(o==null?void 0:o.minRows)&&t(Gn||(Gn=h()([`
          min-height: `,`px;
        `])),Kn(o.minRows)),(o==null?void 0:o.maxRows)&&t(Un||(Un=h()([`
          max-height: `,`px;
        `])),Kn(o.maxRows)),n.motionDurationMid,n.colorPrimaryBorder),filled:t(Vn||(Vn=h()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),n.colorFillTertiary,n.colorFillSecondary,n.colorBgBase),borderless:t(Yn||(Yn=h()([`
        background: transparent;
        border: none;
      `]))),disabled:t(Jn||(Jn=h()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),n.colorTextDisabled,n.colorBgContainerDisabled)}}),$o=function(e){var t,n=e.className,a=e.wrapperClassname,o=e.placeholder,i=e.style,d=e.value,c=e.defaultValue,m=e.readOnly,p=m===void 0?!1:m,v=e.disabled,f=v===void 0?!1:v,x=e.onChange,y=e.onBlur,b=e.onFocus,S=e.variant,C=S===void 0?"outlined":S,A=e.options,T=A===void 0?[]:A,j=e.autoSize,I=e.triggers,w=I===void 0?["@"]:I,B=e.allowSpaces,U=e.punctuation,Y=e.preTriggerChars,G=e.onSelect,M=Xo({autoSize:j}),Z=M.styles,H=M.cx,F=!p&&!f,K=(0,g.useMemo)(function(){return{namespace:"mentions",nodes:[Ce,{replace:E.R2,with:function(Q){return new Ce(Q.__text)}},ce],editorState:ko(d||c||""),onError:function(Q){throw Q}}},[]),D=function(Q){var pe=Q.read(function(){return(0,E.Gv)().getTextContent()});x==null||x(pe.replaceAll(`

`,`
`))},N=(0,g.useMemo)(function(){return T.reduce(function(R,Q){return R[Q.value]=Q,R},{})},[T]);return(0,l.jsx)(no.R,{initialConfig:u()(u()({},K),{},{editable:F}),children:(0,l.jsx)(go,{value:{optionsMap:N},children:(0,l.jsxs)("div",{className:H(Z.wrapper,a),children:[(0,l.jsx)(io.B,{ErrorBoundary:ro.g,contentEditable:(0,l.jsx)(to.f,{className:H((t={},V()(t,Z.root,!0),V()(t,Z.filled,C==="filled"),V()(t,Z.borderless,C==="borderless"),V()(t,Z.disabled,f),t),n),style:i||{}}),placeholder:(0,l.jsx)("div",{className:Z.placeholder,children:o||"\u8F93\u5165 ".concat(w.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,l.jsx)(Jo,{allowSpaces:B,onSelect:G,options:T,preTriggerChars:Y,punctuation:U,triggers:w}),(0,l.jsx)(On,{}),(0,l.jsx)(Ro,{}),(0,l.jsx)(oo.e,{}),(0,l.jsx)(ao.$,{onChange:D}),(0,l.jsx)(Wo,{onBlur:y,onFocus:b})]})})})},Wn=s(57613),Xn=s(47590),qo="data:image/png;base64,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",_o="data:image/png;base64,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",$n,qn,_n,et,nt,ea=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=e.minimapEnabled,o=a===void 0?!1:a,i=e.isFullScreen,d=i===void 0?!1:i,c=(0,P.F4)($n||($n=h()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),m=t(qn||(qn=h()([`
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
    `])),o?"64px":"20px",_o,qo);return{base:t(_n||(_n=h()([`
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
      `])),n.colorBorder,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius-1,n.borderRadius-1,m,c),diff:t(et||(et=h()([`
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
      `])),d&&t(nt||(nt=h()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto;
            height: auto;
          `]))),m)}},{hashPriority:"low"}),na=s(67557),ta=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","onChange","className","diffEditorWrapperClassName","supportFullScreen","width","height"],ra=["inlineView","options"],Ue=function(e){var t=e.type,n=t===void 0?"single":t,a=e.editorDidMount,o=e.readOnly,i=o===void 0?!1:o,d=e.lineNumbers,c=d===void 0?"on":d,m=e.wordWrap,p=m===void 0?"off":m,v=e.contextmenu,f=v===void 0?!0:v,x=e.theme,y=e.minimapEnabled,b=y===void 0?!1:y,S=e.version,C=S===void 0?"0.45.0":S,A=e.requireConfig,T=A===void 0?{}:A,j=e.options,I=e.onChange,w=e.className,B=e.diffEditorWrapperClassName,U=e.supportFullScreen,Y=e.width,G=e.height,M=L()(e,ta),Z=(0,Xn.r)(),H=Z.isDarkMode,F=(0,g.useMemo)(function(){return x||(H?"vs-dark":"vs")},[H,x]),K=(0,g.useState)(),D=k()(K,2),N=D[0],R=D[1],Q=function(Oe,Ee){if(R(Ee),a==null||a(Oe,Ee),n==="diff"){var Er=Ee.getModel(),nn=Er.modified;nn.onDidChangeContent(function(ne){I==null||I(nn.getValue(),ne)})}},pe=(0,g.useMemo)(function(){var xe=Object.assign({},j,{readOnly:i,lineNumbers:c,wordWrap:p,contextmenu:f,minimap:b===void 0?j==null?void 0:j.minimap:Object.assign({},j==null?void 0:j.minimap,{enabled:b})});return N==null||N.updateOptions(xe),xe},[j,i,c,p,f,b,N]),z=cn(),ye=(0,g.useMemo)(function(){return Object.assign({},T,{paths:u()({vs:z({path:"min/vs",pkg:"monaco-editor",version:C})},T.paths)})},[z,T,C]),fe=(0,g.useState)(!1),te=k()(fe,2),J=te[0],le=te[1],se=ea({minimapEnabled:b,isFullScreen:J}),he=se.styles,W=se.cx;if(n!=="diff")return(0,l.jsx)(Wn.vg,u()({className:W(he.base,w),editorDidMount:Q,height:G,onChange:I,options:pe,requireConfig:ye,supportFullScreen:N&&U,theme:F,width:Y},M));var _e=function(){le(!J),N==null||N.layout()},en=W({"base-monaco-full-screen-icon":!J,"base-monaco-full-screen-icon-cancel":J});return(0,l.jsxs)("div",{className:W(he.diff,B),children:[(0,l.jsx)(Wn.vg.MonacoDiffEditor,u()({className:W(he.base,w),editorDidMount:Q,height:J?"auto":G,options:pe,requireConfig:ye,theme:F,width:J?"auto":Y},M)),N&&U&&(0,l.jsx)("div",{className:en,onClick:_e})]})},oa=function(e){return(0,l.jsx)(Ue,u()(u()({},e),{},{type:"single"}))},aa=function(e){var t=e.inlineView,n=t===void 0?"off":t,a=e.options,o=L()(e,ra);return(0,l.jsx)(Ue,u()(u()({options:Object.assign({useInlineViewWhenSpaceIsLimited:n==="on"||n==="auto",renderSideBySide:n==="off"||n==="auto"},a)},o),{},{type:"diff"}))},tt=s(6813),Ve=s(54189),rt=s(64337),ot=s(16988),ia=function(e){var t=e.value,n=e.defaultValue,a=e.min,o=a===void 0?0:a,i=e.max,d=e.step,c=e.gutter,m=c===void 0?16:c,p=e.sliderCol,v=p===void 0?{span:12}:p,f=e.inputCol,x=f===void 0?{span:5}:f,y=e.addonAfter,b=e.addonBefore,S=e.placeholder,C=e.onChange,A=e.style,T=e.className,j=e.sliderProps,I=j===void 0?{}:j,w=e.inputProps,B=w===void 0?{}:w,U=(0,g.useState)(),Y=k()(U,2),G=Y[0],M=Y[1],Z=function(F){Number.isNaN(F)||(M(F),C==null||C(F))};return(0,l.jsxs)(tt.Z,{className:T,gutter:m,style:A,children:[(0,l.jsx)(Ve.Z,u()(u()({},v),{},{children:(0,l.jsx)(rt.Z,u()(u()({},I),{},{defaultValue:n,max:i,min:o,onChange:Z,step:d,value:t!=null?t:G}))})),(0,l.jsx)(Ve.Z,u()(u()({},x),{},{children:(0,l.jsx)(ot.Z,u()(u()({},B),{},{addonAfter:y,addonBefore:b,defaultValue:n,max:i,min:o,onChange:Z,placeholder:S,step:d,value:t!=null?t:G}))}))]})},at=s(5654),it,la=(0,P.kc)(function(r,e){var t=r.css,n=e.bordered,a=n===void 0?"dashed":n;return{custom:t(it||(it=h()([`
        border-style: `,` !important;
      `])),a)}},{hashPriority:"low"}),sa=["bordered","className"],lt=function(e){var t=e.bordered,n=t===void 0?"dashed":t,a=e.className,o=L()(e,sa),i=la({bordered:n}),d=i.styles,c=i.cx;return(0,l.jsx)(at.Z,u()(u()({},o),{},{className:c(d.custom,a)}))};lt.ErrorBoundary=at.Z.ErrorBoundary;var os=null,st=s(73320),da=s(38887),Le=s.n(da),dt=s(14171),ct=s(9300),ca=s(64202),Ye=s(99141),Me=s(41075),ut,vt=(0,P.vJ)(ut||(ut=h()([`
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
`])),function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme;return e==null?void 0:e.colorPrimary},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme,t=e||{},n=t.prefixCls;return Me.ZP.config({prefixCls:n}),`
      .`.concat(n,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(n,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)}),ua=["detail","message","description","onClose","className"],va=Ye.Z.Panel,ma=Se.Z.Link,pa=Se.Z.Paragraph,fa=Se.Z.Text,ue={},ha=function(e,t){ue[e]||(ue[e]=[]),ue[e].push(t)},xa=function(e){delete ue[e]},mt=function r(e){var t="";if(typeof e=="string")t=e;else if(typeof e=="number")t=e.toString();else if(Array.isArray(e)){var n=Le()(e),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;t+=r(o)}}catch(i){n.e(i)}finally{n.f()}}else(0,g.isValidElement)(e)&&(t+=r(e.props.children));return t},pt=function(e){var t,n=e.noticeKey,a=e.message,o=((t=ue[n])===null||t===void 0?void 0:t.length)||0;return(0,l.jsxs)(l.Fragment,{children:[a,o>1&&" (".concat(o,")")]})},ga=function(e){var t=e.noticeKey,n=(0,g.useState)(),a=k()(n,2),o=a[0],i=a[1],d={},c=Le()(ue[t]),m;try{for(c.s();!(m=c.n()).done;){var p=m.value,v=mt(p.description);p.descKey=v,d[v]=p}}catch(f){c.e(f)}finally{c.f()}return(0,l.jsx)(Ye.Z,{accordion:!0,activeKey:o,className:"yunti-notification-collapse",expandIcon:function(x){var y=x.isActive;return(0,l.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:y?(0,l.jsx)(ma,{className:"yunti-notification-link",children:(0,l.jsx)(dt.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,l.jsx)(ct.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(x){i(x)},children:Object.values(d).map(function(f){var x=f.descKey,y=f.description,b=f.detail;return(0,l.jsx)(va,{header:(0,l.jsx)(fa,{ellipsis:{tooltip:!1},style:{width:250},children:y}),children:(0,l.jsx)(pa,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(b,null,2)},type:"secondary",children:(0,l.jsx)("pre",{children:JSON.stringify(b,null,2)})})},x)})})},ae=function(e){var t=e.detail,n=e.message,a=e.description,o=e.onClose,i=e.className,d=L()(e,ua),c=mt(n);ha(c,e);var m=function(){o==null||o(),xa(c)};return e.type==="warning"&&!e.icon&&(d.icon=(0,l.jsx)(ca.Z,{style:{color:"#ff7d00"}})),t?Me.ZP.open(u()({key:c,message:(0,l.jsx)(pt,{message:n,noticeKey:c}),description:(0,l.jsx)(ga,{noticeKey:c}),onClose:m,className:"yunti-notification ".concat(i)},d)):Me.ZP.open(u()({key:c,message:(0,l.jsx)(pt,{message:n,noticeKey:c}),description:a,onClose:m,className:"yunti-notification ".concat(i)},d))},ft=function(e){var t;if(((e==null||(t=e.errors)===null||t===void 0?void 0:t.length)||0)>0){e!=null&&e.errors;var n=Le()((e==null?void 0:e.errors)||[]),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;ae(u()(u()({detail:o,description:o.message},e),{},{type:"warning"}))}}catch(i){n.e(i)}finally{n.f()}}else ae(u()(u()({},e),{},{type:"warning"}))},ya=u()(u()({},Me.ZP),{},{success:function(e){return ae(u()(u()({},e),{},{type:"success"}))},info:function(e){return ae(u()(u()({},e),{},{type:"info"}))},warning:function(e){return ae(u()(u()({},e),{},{type:"warning"}))},warn:function(e){return ae(u()(u()({},e),{},{type:"warning"}))},error:function(e){return ae(u()(u()({},e),{},{type:"error"}))},warnings:ft,warns:ft}),as=null,ba=["children"],ht=function(e){var t=e.children,n=L()(e,ba);return(0,l.jsxs)(st.Z,u()(u()({},n),{},{children:[(0,l.jsx)(vt,{}),t]}))};ht.useApp=st.Z.useApp;var is=null,Ca=s(34550),Aa=s(33931),xt=s(56437),Sa=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],gt,yt,bt,ja=(0,P.kc)(function(r){var e=r.css;return{container:e(gt||(gt=h()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:e(yt||(yt=h()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:e(bt||(bt=h()([`
      position: relative;
      flex: 1;
    `])))}}),La=(0,g.forwardRef)(function(r,e){var t=r.className,n=r.style,a=r.classNames,o=r.expand,i=o===void 0?!0:o,d=r.setExpand,c=r.bottomAddons,m=r.topAddons,p=r.onSizeChange,v=r.heights,f=r.onSend,x=L()(r,Sa),y=ja(),b=y.styles;return(0,l.jsx)(Aa.Z,{className:t,classNames:a,fullscreen:i,headerHeight:v==null?void 0:v.headerHeight,maxHeight:v==null?void 0:v.maxHeight,minHeight:v==null?void 0:v.minHeight,onSizeChange:p,placement:"bottom",size:{height:v==null?void 0:v.inputHeight,width:"100%"},style:u()({zIndex:10},n),children:(0,l.jsxs)("section",{className:b.container,style:{minHeight:v==null?void 0:v.minHeight},children:[m,(0,l.jsx)("div",{className:b.textareaContainer,children:(0,l.jsx)(xt.Z,u()({className:b.textarea,onSend:function(){f==null||f(),d==null||d(!1)},ref:e,type:"pure"},x))}),c]})})}),Ma=(0,g.memo)(La),Na=s(86113),Za=s(34362),Oa=s(43789),Ea=s(85015),Ct=s(37032),At,St,jt,Lt,Mt,Nt,Ta=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.borderedBottom,i=e.borderedBottomDashed,d=e.borderedTop,c=e.borderedTopDashed,m=e.size,p={small:"".concat(n.paddingXS,"px ").concat(n.padding,"px"),middle:"".concat(n.padding,"px ").concat(n.paddingLG,"px"),default:"".concat(n.paddingSM,"px ").concat(n.paddingLG,"px")},v=o||i;return{custom:t(At||(At=h()([`
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
      `])),a,a,v&&m&&t(St||(St=h()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),a,a,p[m],a),o&&t(jt||(jt=h()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),a,n.colorSplit),i&&t(Lt||(Lt=h()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),a,n.colorSplit),d&&t(Mt||(Mt=h()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),a,n.colorSplit),c&&t(Nt||(Nt=h()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),a,n.colorSplit))}},{hashPriority:"low"}),Pa=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],Je=function(e){var t=e.className,n=e.borderedBottom,a=e.borderedBottomDashed,o=e.borderedTop,i=e.borderedTopDashed,d=L()(e,Pa),c=Ta({borderedBottom:n,borderedBottomDashed:a,borderedTop:o,borderedTopDashed:i,size:d.size}),m=c.styles,p=c.cx;return(0,l.jsx)(Ct.Z,u()(u()({},d),{},{className:p(m.custom,t)}))},Ia=Je;Je.Item=Ct.Z.Item;var Zt=s(14329),Ke=s(3024),Ot,ka=(0,P.kc)(function(r){var e=r.css,t=r.token;return{custom:e(Ot||(Ot=h()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),t.colorPrimary,t.colorPrimaryHover)}},{hashPriority:"low"}),Ra=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],Et=function(e){var t=e.mode,n=t===void 0?"line":t,a=e.content,o=e.defaultOpen,i=e.iconPlacement,d=i===void 0?"left":i,c=e.openIcon,m=e.closeIcon,p=e.type,v=L()(e,Ra),f=ka({}),x=f.styles,y=n==="expanded",b=(0,g.useState)(o),S=k()(b,2),C=S[0],A=S[1],T=m||(0,l.jsx)(dt.Z,{}),j=c||(0,l.jsx)(ct.Z,{}),I=y&&(0,l.jsx)("span",{children:C?T:j});return n==="line"||p==="vertical"?(0,l.jsx)(Zt.Z,u()({type:p},v)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Zt.Z,u()(u()({type:p},v),{},{children:(0,l.jsx)("span",{className:y?x.custom:"",onClick:function(){A(!C)},children:(0,l.jsxs)(Ke.Z,{size:6,children:[d!=="right"&&I,(0,l.jsx)("span",{children:a}),d==="right"&&I]})})})),y&&(0,l.jsx)("div",{style:{display:C?"block":"none"},children:e.children})]})},Da=Et,Tt,Pt,It,Ba=(0,P.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.closeIcon,o=e.closeIconPlacement,i=e.extra,d=t(Tt||(Tt=h()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),n,n,!(a===null||a===!1)&&t(Pt||(Pt=h()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),n));return{custom:t(It||(It=h()([`
        `,`
      `])),(!o||o==="right"||o==="auto"&&!i)&&d)}},{hashPriority:"low"}),Fa=["className"],wa=function(e){var t=e.className,n=L()(e,Fa),a=Ba(n),o=a.styles,i=a.cx;return(0,l.jsx)(vn.Z,u()(u()({},n),{},{className:i(o.custom,t)}))},ls=null,ve=s(70757),za=s(13448),kt=s.n(za),Ha=s(74815),Qa=s.n(Ha),Ga=s(67855),We=s.n(Ga),Ua=s(37194),$=s(40363),Va=s(92052),Rt,Dt,Bt,Ya=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{empty:e(Rt||(Rt=h()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),t.paddingXS,t.paddingSM,t.colorTextTertiary),list:e(Dt||(Dt=h()([`
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
    `])),n,t.colorTextTertiary,n),noFormItem:e(Bt||(Bt=h()([`
      height: `,`px;
      color: `,`;
    `])),t.controlHeight,t.colorTextTertiary)}}),Ja=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style"],Ka=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width"],Wa=["key","name"],Ft=function(e){var t=e.extra,n=e.expandIcon,a=e.icon,o=e.title,i=e.variant,d=e.defaultActive,c=e.empty,m=c===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":c,p=e.columns,v=p===void 0?[]:p,f=e.disabled,x=e.readOnly,y=e.addOneFieldDefault,b=e.disableRemoveWhenOneField,S=e.maxFileds,C=e.name,A=e.addParams,T=e.className,j=e.onRemove,I=e.fieldRemoveButton,w=I===void 0?!0:I,B=e.style,U=L()(e,Ja),Y=Ya(),G=Y.styles,M=(0,g.useRef)(),Z=ve.Z.useFormInstance(),H=ve.Z.useWatch(C,Z),F=(0,g.useCallback)(function(){if(!A)return[];var D=typeof A=="function"?A():A;return[D.defaultValue,D.insertIndex]},[A]),K=(0,g.useCallback)(function(D){var N=Z.getFieldValue([C,D]);return j==null?void 0:j(N)},[Z,C,j]);return(0,g.useEffect)(function(){var D;if(y&&(!(Z!=null&&Z.getFieldValue(C))||(Z==null||(D=Z.getFieldValue(C))===null||D===void 0?void 0:D.length)===0)){var N;(N=M.current)===null||N===void 0||N.call.apply(N,[M].concat(We()(F())))}},[y,F,Z,C]),(0,l.jsx)(Ie,{extra:t===void 0?C&&!x&&(0,l.jsx)(de.Z,{title:S&&"\u6700\u591A\u6DFB\u52A0 ".concat(S," \u9879"),children:(0,l.jsx)(re.ZP,{disabled:f||!!(S&&(H==null?void 0:H.length)===S),icon:(0,l.jsx)(Ua.Z,{}),onClick:function(N){var R;N.stopPropagation(),(R=M.current)===null||R===void 0||R.call.apply(R,[M].concat(We()(F())))},size:"small",type:"text"})}):t,className:T,expandIcon:n,icon:a,title:o,variant:i,defaultActive:d,style:B,children:C?(0,l.jsx)(ve.Z.List,u()(u()({name:C},U),{},{children:function(N,R){var Q=R.add,pe=R.remove;return M.current=Q,(0,l.jsx)($.Z,{className:G.list,columns:[].concat(We()(v.map(function(z){var ye=z.label,fe=z.name,te=z.render,J=z.dependencies,le=z.rules,se=z.align,he=z.ellipsis,W=z.fixed,_e=z.responsive,en=z.shouldCellUpdate,xe=z.width,Oe=L()(z,Ka);return{title:ye,dataIndex:fe,align:se,ellipsis:he,fixed:W,responsive:_e,shouldCellUpdate:en,width:xe,render:function(Er,nn,ne){var tn=N[ne],Jl=tn.key,Kl=tn.name,Wl=L()(tn,Wa),Te=te==null?void 0:te(N[ne],ne);if(!Te&&!Oe.noStyle)return(0,l.jsx)(O.Z,{align:"center",className:G.noFormItem,children:"\u65E0\u9700\u8BBE\u7F6E"});if(!fe)return(0,l.jsx)(O.Z,{align:"center",className:G.noFormItem,children:Te});var Pe={readOnly:x,disabled:f};return x===!0&&(Pe.showCount=!1,Pe.variant="borderless",Pe.placeholder="-"),(0,l.jsx)(ve.Z.Item,u()(u()(u()({},Wl),{},{dependencies:typeof J=="function"?J(N[ne],ne):J,name:[Kl,fe],rules:typeof le=="function"?le(N[ne],ne):le},Oe),{},{children:Te&&g.cloneElement(Te,Pe)}),Jl)}}})),[!x&&w!==!1&&{title:"",dataIndex:"del",render:function(ye,fe,te){var J=N[te].name;return(0,l.jsx)(ve.Z.Item,{children:(0,l.jsx)(re.ZP,{disabled:f||b&&N.length===1,icon:(0,l.jsx)(we.Z,{icon:Va.Z}),onClick:Qa()(kt()().mark(function le(){var se;return kt()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,K(J);case 2:se=W.sent,se!==!1&&pe(J);case 4:case"end":return W.stop()}},le)})),type:"text"})})}}]).filter(function(z){return!!z}),dataSource:N,locale:{emptyText:m},pagination:!1,rowHoverable:!1,size:"small"})}})):(0,l.jsx)("div",{className:G.empty,children:m})})},wt=ve.Z;wt.CollapseList=Ft;var Xa=function(e){return typeof e=="string"?document.querySelector("#".concat(e)):(e==null?void 0:e.current)||e},Xe=":not([disabled]):not([readonly])",$a=["text","password","search","tel","url","number","email",""].map(function(r){return'input[type="'.concat(r,'"]').concat(Xe)}).join(", ")+", input:not([type])".concat(Xe,", textarea").concat(Xe),qa=function(e){var t,n=Xa(e);if(n){var a=(t=n.querySelector)===null||t===void 0?void 0:t.call(n,$a);if(a!=null&&a.focus)return a.focus(),!0}},zt=function(e){var t=(0,g.useState)(!1),n=k()(t,2),a=n[0],o=n[1];g.useEffect(function(){if(!(a||!e)){var i=qa(e);i&&o(!0)}},[e,a,o])},Ht=function(e){var t,n=e.autoFocus,a=n===void 0?!0:n,o=(0,g.useRef)(null);return zt(a?o:void 0),(0,l.jsx)("div",{className:e.className,id:e.id,ref:o,style:(t=e.style)!==null&&t!==void 0?t:{display:e.className?void 0:"contents"},children:e.children})},_a=function(e){return function(t){var n=function(i){return(0,l.jsx)(Ht,u()(u()({},e||{}),{},{children:(0,l.jsx)(t,u()({},i))}))},a=t.displayName||t.name||"Component";return n.displayName="withFormHelper(".concat(a,")"),n}},q=s(35057),ei="yunti-ui",Qt,Gt,ni=(0,P.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.borderd,o=a===void 0?!0:a,i=e.footer,d=i===null||Array.isArray(i)&&i.length===0,c=t(Qt||(Qt=h()([`
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
    `])),n,n,d?0:"40px",n,d?0:"1px");return{custom:t(Gt||(Gt=h()([`
        `,`
      `])),o&&c)}},{hashPriority:"low"}),ti=["className","borderd"],ri=function(e){var t=e.className,n=e.borderd,a=n===void 0?!0:n,o=L()(e,ti),i=ni(u()({borderd:a},o)),d=i.styles,c=i.cx;return(0,l.jsx)(q.Z,u()(u()({},o),{},{className:c(d.custom,"".concat(ei,"-modal"),t)}))},_=ri;_.useModal=q.Z.useModal,_.destroyAll=q.Z.destroyAll,_.config=q.Z.config,_._InternalPanelDoNotUseOrYouWillBeFired=q.Z._InternalPanelDoNotUseOrYouWillBeFired,_.info=q.Z.info,_.success=q.Z.success,_.error=q.Z.error,_.warning=q.Z.warning,_.warn=q.Z.warn,_.confirm=q.Z.confirm;var ss=null,oi=["to","children"],Ut=function(e){var t=e.to,n=e.children,a=L()(e,oi);return(0,l.jsx)("a",u()(u()({href:"#".concat(t)},a),{},{children:n}))},Ne=(0,g.createContext)({loading:!1,Link:Ut}),ai=["to","Link","children"],ii=function(e){var t=e.to,n=e.Link,a=e.children,o=L()(e,ai);return n?(0,l.jsx)(n,u()(u()({to:t},o),{},{children:a})):(0,l.jsx)("a",u()(u()({href:"#".concat(t)},o),{},{children:a}))},li=function(e){var t=(0,g.useContext)(Ne),n=t.Link,a=t.breadcrumb;(0,g.useEffect)(function(){var i;a==null||(i=a.setItems)===null||i===void 0||i.call(a,e.items)},[a,e.items]);var o=(0,g.useCallback)(function(i,d,c,m){var p,v,f=i.href?i.href===((p=c.at(-1))===null||p===void 0?void 0:p.href):i.path===((v=c.at(-1))===null||v===void 0?void 0:v.path);if(f)return(0,l.jsx)("span",{children:i.title});var x=i.href?i.href:"/".concat(m.join("/"));return(0,l.jsx)(ii,{Link:n,to:x,children:i.title})},[n]);return(0,l.jsx)(on.Z,u()({itemRender:o},e))},Vt=s(19993),ie=s(23806),Yt,si=(0,P.kc)(function(r){var e=r.css,t=r.token;return{root:e(Yt||(Yt=h()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),di=["className","children"],ci={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},ui=function(e){var t=e.className,n=e.children,a=L()(e,di),o=si(),i=o.styles,d=o.cx,c=(0,g.useContext)(Ne),m=c.loading,p=c.breadcrumb,v=c.Link,f=c.status,x=(0,g.useCallback)(function(){if(f){var y;return(0,l.jsx)(Vt.ZP,{extra:(0,l.jsx)(v,{to:p==null||(y=p.items)===null||y===void 0||(y=y[0])===null||y===void 0?void 0:y.path,children:(0,l.jsx)(re.ZP,{type:"primary",children:"Go Back"})}),status:f,subTitle:ci[f],title:f})}return n},[f,n,v,p==null?void 0:p.items]);return m?(0,l.jsx)(ie.Z,{active:!0,className:d(i.root,t)}):(0,l.jsx)(O.Z,u()(u()({className:d(i.root,t),gap:20,vertical:!0},a),{},{children:x()}))},vi=function(){return(0,l.jsx)(l.Fragment,{})},Jt=s(21801),mi=s(3521),pi=s.n(mi),$e=s(43382),fi=["items","onClick"],hi=["key","label"],xi=["key","label"],Kt=function(e){var t=e.items,n=t===void 0?[]:t,a=e.onClick,o=a===void 0?function(){}:a,i=L()(e,fi);if(n.length<=2)return(0,l.jsx)(Ke.Z,u()(u()({align:"end",size:12},i),{},{children:n.map(function(x){var y=x.key,b=x.label,S=L()(x,hi);return(0,l.jsx)(re.ZP,u()(u()({onClick:function(A){return o(y,A)}},S),{},{children:b}),y)})}));var d=pi()(n),c=d[0],m=c.key,p=c.label,v=L()(c,xi),f=d.slice(1);return(0,l.jsx)($e.Z.Button,u()(u()(u()({onClick:function(y){return o(m,y)}},v),{},{menu:{onClick:function(y){var b=y.key,S=y.domEvent;return o(b,S)},items:f.map(function(x){var y=x.key,b=x.label,S=x.icon,C=x.danger,A=x.disabled;return{key:y,label:b,icon:S,danger:C,disabled:A}})},overlayStyle:{minWidth:100}},i),{},{children:p}),m)},qe=s(17823),gi=["shape","size","src"],Wt=function(e){if(typeof e=="number")return e;switch(e){case"small":return 40;case"large":return 88;default:return 64}},yi=function(e){var t=e.shape,n=t===void 0?"square":t,a=e.size,o=e.src,i=L()(e,gi),d=(0,g.useMemo)(function(){return Wt(a)},[a]);return(0,l.jsx)(qe.C,u()({shape:n,size:d,src:o},i))},Xt,$t,qt,_t,er,nr,tr,rr,or,bi=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.bordered,i=o===void 0?!1:o,d=e.divider,c=d===void 0?!0:d;return{root:i?t(Xt||(Xt=h()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),n.marginXS,n.padding,n.colorBgBase,n.borderRadius,n.boxShadowTertiary):t($t||($t=h()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),n.paddingXS,n.marginXS,c&&t(qt||(qt=h()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),n.paddingLG,n.colorSplit)),icon:t(_t||(_t=h()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),a,a,n.colorPrimary,a),titleBox:t(er||(er=h()([`
        margin-bottom: `,`px;
      `])),n.marginSM),subTitle:t(nr||(nr=h()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),n.marginXXS,a,n.fontSize,n.colorTextSecondary),title:t(tr||(tr=h()([`
        font-size: `,`px;
        font-weight: 700;
      `])),n.fontSizeHeading5),descriptions:t(rr||(rr=h()([`
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
      `])),n.marginXXS,n.fontSize,n.colorTextSecondary,a,a,n.fontSize,a,n.fontSize,n.colorTextSecondary),rightButtons:t(or||(or=h()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),Ci=["className","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],Ai=Qe.Paragraph,Si=function(e){var t=e.className,n=e.icon,a=e.title,o=e.titleRender,i=e.subTitle,d=e.status,c=e.descriptions,m=c===void 0?[]:c,p=e.descriptionsRender,v=e.extraContent,f=v===void 0?{}:v,x=e.extraContentRender,y=e.bordered,b=e.divider,S=L()(e,Ci),C=bi({bordered:y,divider:b}),A=C.styles,T=C.cx,j=(0,g.useMemo)(function(){return!n||typeof n=="string"?{src:n,size:i?"large":"default"}:(i&&n.size===void 0&&(n.size="large"),n)},[n,i]),I=(0,g.useMemo)(function(){var M=(0,l.jsx)("span",{className:A.title,children:a});return o?o(M):M},[A.title,a,o]),w=(0,g.useMemo)(function(){var M=[],Z=Le()(m.filter(function(Q){return!!Q}).entries()),H;try{for(Z.s();!(H=Z.n()).done;){var F=k()(H.value,2),K=F[0],D=F[1],N=D.icon,R=D.text;(d||K>=1)&&M.push((0,l.jsx)(Da,{dashed:!1,type:"vertical"},"divider-".concat(K))),M.push((0,l.jsxs)(O.Z,{align:"center",gap:4,children:[N&&(0,l.jsx)(de.Z,{title:N.tooltip,children:N.content}),(0,l.jsx)("span",{children:R})]},"desc-".concat(K)))}}catch(Q){Z.e(Q)}finally{Z.f()}return p?p(M):M},[m,p,d]),B=(0,g.useMemo)(function(){if(!f&&!x)return null;var M=(0,l.jsx)(Kt,u()({className:A.rightButtons},f));return x?x(M):M},[f,x,A.rightButtons]),U=(0,g.useContext)(Ne),Y=U.loading,G=U.status;return Y?(0,l.jsxs)(O.Z,{className:T(A.root,t),gap:20,children:[(0,l.jsx)(O.Z,{children:(0,l.jsx)(ie.Z.Avatar,{active:!0,className:A.icon,shape:j==null?void 0:j.shape,size:Wt(j==null?void 0:j.size)})}),(0,l.jsxs)(O.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)("div",{className:A.titleBox,children:[(0,l.jsx)(ie.Z.Input,{active:!0,size:25}),i&&(0,l.jsx)("div",{className:A.subTitle,children:(0,l.jsx)(ie.Z.Input,{active:!0,size:18})})]}),(0,l.jsx)(ie.Z.Input,{active:!0,size:18})]}),(0,l.jsx)(O.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,l.jsx)(ie.Z.Button,{active:!0})})]}):G?null:(0,l.jsxs)(O.Z,u()(u()({className:T(A.root,t),gap:20},S),{},{children:[j&&(0,l.jsx)(O.Z,{children:(0,l.jsx)(yi,u()({className:A.icon},j))}),(0,l.jsxs)(O.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)(O.Z,{className:A.titleBox,vertical:!0,children:[I,i&&(0,l.jsx)(Ai,{className:A.subTitle,ellipsis:{rows:2},children:i})]}),(0,l.jsxs)(O.Z,{align:"center",className:A.descriptions,gap:4,children:[d&&(0,l.jsx)(Jt.Z,u()({},d)),w]})]}),(0,l.jsx)(O.Z,{align:"center",flex:"1",justify:"flex-end",children:B})]}))},ar,ji=(0,P.kc)(function(r){var e=r.css,t=r.token;return{root:e(ar||(ar=h()([`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: `,"px ","px ",`px;
      `])),t.padding,t.paddingLG,t.paddingXL)}},{hashPriority:"low"}),Li=["loading","className","children","Link","status","gap"],Mi=function(e){var t=un(),n=e.loading,a=e.className,o=e.children,i=e.Link,d=i===void 0?t||Ut:i,c=e.status,m=e.gap,p=m===void 0?16:m,v=L()(e,Li),f=ji(v),x=f.styles,y=f.cx,b=(0,g.useState)([]),S=k()(b,2),C=S[0],A=S[1];return(0,l.jsx)(O.Z,u()(u()({className:y(x.root,a),gap:p,vertical:!0},v),{},{children:(0,l.jsx)(Ne.Provider,{value:{loading:n,Link:d,breadcrumb:{items:C,setItems:A},status:c},children:o})}))},ir,Ni=(0,P.kc)(function(r){var e=r.css,t=r.token;return{root:e(ir||(ir=h()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),t.fontFamily,t.fontWeightStrong,t.lineHeight,t.colorText)}}),Zi=["className"],Oi=function(e){var t=e.className,n=L()(e,Zi),a=Ni(),o=a.cx,i=a.styles;return(0,l.jsx)("h2",u()({className:o(i.root,t)},n))},me=Mi;me.Breadcrumb=li,me.Title=Oi,me.Header=Si,me.Content=ui,me.Footer=vi;var lr,sr,dr,cr,ur,Ei=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(lr||(lr=h()([`
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
    `])),t.colorBorder),hoverable:e(dr||(dr=h()([`
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
    `])),t.colorTextSecondary),error:e(ur||(ur=h()([`
      color: `,`;
    `])),t.colorErrorText)}}),Ti=["className","bordered","hoverable","children"],Pi=function(e){var t=e.className,n=e.bordered,a=n===void 0?!1:n,o=e.hoverable,i=o===void 0?!0:o,d=e.children,c=L()(e,Ti),m=Ei(),p=m.cx,v=m.styles;return(0,l.jsx)("div",u()(u()({className:p(v.root,a&&v.bordered,i&&v.hoverable,t)},c),{},{children:d}))},vr,Ii=(0,P.kc)(function(r){var e=r.css,t=r.token;return{root:e(vr||(vr=h()([`
        padding: 12px 24px 20px;
      `])))}},{hashPriority:"low"}),ki=["className","children"],Ri=function(e){var t=e.className,n=e.children,a=L()(e,ki),o=Ii(),i=o.styles,d=o.cx;return(0,l.jsx)(O.Z,u()(u()({className:d(i.root,t),gap:20,vertical:!0},a),{},{children:n}))},mr,Di=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls,a=70;return{root:e(mr||(mr=h()([`
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
      `])),n,n,n,n,a,n,a)}},{hashPriority:"low"}),Bi=["className","colon","column","size"],Fi=function(e){var t=e.className,n=e.colon,a=n===void 0?!1:n,o=e.column,i=o===void 0?2:o,d=e.size,c=d===void 0?"small":d,m=L()(e,Bi),p=Di(),v=p.cx,f=p.styles;return(0,l.jsx)(Ia,u()({className:v(f.root,t),colon:a,column:i,size:c},m))},wi=s(38377),pr,fr,hr,xr,gr,yr,br,Cr,Ar,zi=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.divider,i=o===void 0?!0:o,d=e.iconBg,c=d===void 0?!0:d;return{root:t(pr||(pr=h()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),i?20:0,i&&t(fr||(fr=h()([`
          border-bottom: 1px solid `,`;
        `])),n.colorSplit)),icon:t(hr||(hr=h()([`
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
      `])),a,n.colorPrimary,c&&t(xr||(xr=h()([`
            background-color: `,`;
          `])),n.colorBgLayout),a),titleBox:t(gr||(gr=h()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),n.marginXXS),title:t(yr||(yr=h()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.fontWeightStrong),description:t(br||(br=h()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),a,n.colorTextSecondary),extra:t(Cr||(Cr=h()([`
        margin-top: -4px;
      `]))),rightButtons:t(Ar||(Ar=h()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),Hi=["className","icon","title","description","extra","divider"],Qi=["className","shape","size"],Gi=["children"],Ui=Qe.Paragraph,Vi=function(e){var t=e.className,n=e.icon,a=e.title,o=e.description,i=e.extra,d=e.divider,c=L()(e,Hi),m=zi({divider:d,iconBg:!(n!=null&&n.src)}),p=m.styles,v=m.cx,f=n||{},x=f.className,y=f.shape,b=y===void 0?"square":y,S=f.size,C=S===void 0?72:S,A=L()(f,Qi),T=i||{},j=T.children,I=L()(T,Gi);return(0,l.jsxs)(O.Z,u()(u()({className:v(p.root,t),gap:20},c),{},{children:[n&&(0,l.jsx)(O.Z,{children:(0,l.jsx)(qe.C,u()({className:v(p.icon,x),shape:b,size:C},A))}),(0,l.jsxs)(O.Z,{flex:"1",vertical:!0,children:[(0,l.jsxs)(O.Z,{className:p.titleBox,gap:4,children:[(0,l.jsx)("div",{className:p.title,children:a}),i&&(0,l.jsx)(O.Z,{align:"flex-start",className:p.extra,justify:"flex-end",onClick:function(B){return B.stopPropagation()},children:(0,l.jsx)($e.Z,u()(u()({},I),{},{children:j||(0,l.jsx)(re.ZP,{icon:(0,l.jsx)(we.Z,{icon:wi.Z}),size:"small",type:"text"})}))})]}),o&&(0,l.jsx)(Ui,{className:p.description,ellipsis:{rows:2},children:o})]})]}))},Ze=Pi;Ze.Header=Vi,Ze.Content=Ri,Ze.Descriptions=Fi;var Yi=s(73239),Ji=s(10714),Sr,jr,Lr,Mr,Ki=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.size,i=e.segmented,d=function(){return i?i!==!0?i.gap:!0:0}(),c=function(){if(i)return i!==!0?i.borderRadius:!0}(),m=function(){var b={small:n.sizeSM,middle:n.size,large:n.sizeLG};return typeof d=="string"?b[d]:d===!0?o?b[o]:b.middle:d||0},p=function(){var b={small:n.controlHeightSM,middle:n.controlHeight,large:n.controlHeightLG};if(c===!0)return o?b[o]:b.middle;if(c||c===0)return c},v=p()&&t(Sr||(Sr=h()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),p()),f=t(jr||(jr=h()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),m()),x=i===!0||i&&!i.bordered;return{custom:t(Lr||(Lr=h()([`
        `,`
        `,`
        `,`
      `])),v,f,x&&t(Mr||(Mr=h()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),a,a,n.colorPrimary))}},{hashPriority:"low"}),Wi=["className"],Nr=Yi.ZP,Xi=function(e){var t=e.className,n=L()(e,Wi);n.segmented&&(n.optionType="button");var a=Ki(n),o=a.styles,i=a.cx;return(0,l.jsx)(Ji.Z,u()(u()({},n),{},{className:i(o.custom,t)}))};Nr.Group=Xi;var ds=null,Zr,$i=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{table:e(Zr||(Zr=h()([`
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
    `])),n,t.colorTextTertiary)}}),qi=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],Or=function(e){var t=e.rootStyle,n=e.rootClassName,a=e.icon,o=e.title,i=e.variant,d=e.defaultActive,c=e.extra,m=e.className,p=L()(e,qi),v=$i(),f=v.cx,x=v.styles;return(0,l.jsx)(Ie,{className:n,style:t,icon:a,title:o,variant:i,defaultActive:d,extra:c,children:(0,l.jsx)($.Z,u()({className:f(x.table,m),pagination:!1,rowHoverable:!1,size:"small"},p))})},_i=["columns"],ee=function(e){var t=e.columns,n=L()(e,_i),a=(0,g.useMemo)(function(){return t==null?void 0:t.map(function(o){if(o.render)return o;if(o.ellipsis&&o.ellipsis!==!0&&o.ellipsis.showTitle||o.ellipsis===!0){var i=o.ellipsis===!0?{}:o.ellipsis;return u()(u()({},o),{},{ellipsis:{showTitle:!1},render:function(c){return c||c===0?(0,l.jsx)(de.Z,u()(u()({},i),{},{placement:"topLeft",title:c,children:c})):"-"}})}return o.render||(o.render=function(d){return d!=null?d:"-"}),o})},[t]);return(0,l.jsx)($.Z,u()(u()({},n),{},{columns:a}))};ee.displayName="Table",ee.SELECTION_COLUMN=$.Z.SELECTION_COLUMN,ee.EXPAND_COLUMN=$.Z.EXPAND_COLUMN,ee.SELECTION_ALL=$.Z.SELECTION_ALL,ee.SELECTION_INVERT=$.Z.SELECTION_INVERT,ee.SELECTION_NONE=$.Z.SELECTION_NONE,ee.Column=$.Z.Column,ee.ColumnGroup=$.Z.ColumnGroup,ee.Summary=$.Z.Summary,ee.Collapse=Or;var cs=null,el=s(79945),nl=s(65130),tl=s(75608),rl=s(74583),ol=s(49409),al=s(17432),il=s(6271),ll=s(89379),sl=s(11310),dl=s(13545),cl=s(3267),ul=s(62977),vl=s(15356),ml=s(32813),pl=s(89915),fl=s(79852),hl=s(39427),xl=s(97257),gl=s(15157),yl=s(86102),bl=s(6663),Cl=s(88492),Al=s(82160),Sl=s(70473),jl=s(50918),Ll=s(4551),Ml=s(38008),Nl=s(99288),Zl=s(43662),Ol=s(87821),El=s(7460),Tl=s(71708),Pl=s(20459),Il=s(5144),kl=s(19333),Rl=s(66838),Dl=s(46489),Bl=s(39426),Fl=s(75185),wl=s(72081),zl=s(44083),Hl=s(10286),Ql=s(33941),Gl=s(47111),Ul=s(56036),Vl=s(43880),Yl=s(97512)}}]);
