"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3277],{73277:function(wl,rn,s){s.r(rn),s.d(rn,{Affix:function(){return Hi.Z},Alert:function(){return lt},Anchor:function(){return Qi.Z},AntdMentions:function(){return Gi.Z},App:function(){return ht},AutoComplete:function(){return Ui.Z},Avatar:function(){return qe.C},BackTop:function(){return Vi.Z},Badge:function(){return Gt.Z},BaseMonacoEditor:function(){return Ue},Breadcrumb:function(){return on.Z},Button:function(){return re.ZP},Calendar:function(){return Yi.Z},Card:function(){return xa.Z},Carousel:function(){return Ji.Z},Cascader:function(){return Ki.Z},Checkbox:function(){return Wi.Z},Col:function(){return Ve.Z},Collapse:function(){return Ye.Z},CollapseGroup:function(){return Ie},CollapseTable:function(){return jr},ColorPicker:function(){return Xi.Z},ConfigContext:function(){return be},ConfigProvider:function(){return Dr},DatePicker:function(){return $i.default},Descriptions:function(){return Je},Divider:function(){return Mt},DragPanel:function(){return Gr},Drawer:function(){return Ma},Dropdown:function(){return $e.Z},Empty:function(){return Tn.Z},Flex:function(){return O.Z},FloatButton:function(){return qi.Z},Form:function(){return Rt},FormCollapseList:function(){return kt},FormHelper:function(){return wt},Grid:function(){return _i.ZP},HeaderButtonGroup:function(){return Ut},Highlighter:function(){return El.ZP},Image:function(){return el.Z},Input:function(){return nl.Z},InputNumber:function(){return ot.Z},Layout:function(){return tl.Z},List:function(){return rl.Z},Logo:function(){return Wr},Markdown:function(){return Tl.Z},Mentions:function(){return Jo},Menu:function(){return ol.Z},Modal:function(){return _},MonacoController:function(){return $o.Q},MonacoDiffEditor:function(){return na},MonacoEditor:function(){return ea},NotificationGlobalStyle:function(){return vt},Page:function(){return me},Pagination:function(){return il.Z},Popconfirm:function(){return ll.Z},Popover:function(){return sl.Z},ProCard:function(){return Ze},Progress:function(){return cl.Z},QRCode:function(){return dl.Z},Radio:function(){return Sr},Rate:function(){return ul.Z},Result:function(){return Ht.ZP},Row:function(){return tt.Z},Segmented:function(){return vl.Z},Select:function(){return ml.default},Skeleton:function(){return ie.Z},Slider:function(){return rt.Z},SliderInput:function(){return ta},Space:function(){return Ke.Z},Spin:function(){return pl.Z},Statistic:function(){return fl.Z},Steps:function(){return hl.Z},Switch:function(){return xl.Z},SyntaxHighlighter:function(){return Pl.Z},Table:function(){return ee},Tabs:function(){return gl.Z},Tag:function(){return yl.Z},TimePicker:function(){return Al.Z},Timeline:function(){return Cl.Z},Tooltip:function(){return ce.Z},Tour:function(){return Sl.Z},Transfer:function(){return Ll.Z},Tree:function(){return jl.Z},TreeSelect:function(){return Ml.Z},Typography:function(){return Le},Upload:function(){return Nl.Z},Watermark:function(){return Ol.Z},message:function(){return al.ZP},notification:function(){return fa},theme:function(){return bl.Z},useAutoFocus:function(){return Dt},useCdnFn:function(){return dn},useLink:function(){return un},useResponsive:function(){return Il.F},useTheme:function(){return P.Fg},useThemeMode:function(){return Xn.r},version:function(){return Zl.Z},withFormHelper:function(){return za}});var on=s(79318),Nr=s(77117),u=s.n(Nr),Zr=s(95530),N=s.n(Zr),Or=s(95428),g=s(50959),Er=s(18840),x=s.n(Er),P=s(4377),an,Tr=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(an||(an=x()([`
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
    `])),t.margin,n,t.paddingSM,t.paddingSM,t.paddingSM,t.fontSize,t.padding,t.padding,t.paddingSM,t.paddingSM,t.paddingXS,t.colorBgContainer)}}),l=s(11527),Pr=["className","variant"],Ir=Or.Z.Group,Ie=function(e){var t=e.className,n=e.variant,a=N()(e,Pr),o=Tr(),i=o.styles,c=o.cx;return(0,l.jsx)(Ir,u()({className:c(i.root,t),collapsible:n==="pure"?"icon":"header",variant:n},a))},ln=s(56264),kr="https://unpkg.com",Rr="https://registry.npmmirror.com",sn=function(e){var t=e.pkg,n=e.version,a=n===void 0?"latest":n,o=e.path,i=e.proxy;switch(i){case"unpkg":return(0,ln.Z)(kr,"".concat(t,"@").concat(a),o);default:return(0,ln.Z)(Rr,t,a,"files",o)}},be=(0,g.createContext)(null),Dr=(0,g.memo)(function(r){var e=r.children,t=r.config;return(0,l.jsx)(be.Provider,{value:t,children:e})}),cn=function(e){var t=e.pkg,n=e.version,a=e.path;return sn({path:a,pkg:t,proxy:"aliyun",version:n})},dn=function(){var e=(0,g.useContext)(be);return e?(e==null?void 0:e.proxy)!=="custom"?function(t){var n=t.pkg,a=t.version,o=t.path;return sn({path:o,pkg:n,proxy:e.proxy,version:a})}:(e==null?void 0:e.customCdnFn)||cn:cn},un=function(){var e=(0,g.useContext)(be);return e==null?void 0:e.Link},wr=s(28152),k=s.n(wr),Fr=s(69343),vn=s(61478),O=s(94614),re=s(34309),Br=s(7681),zr=s.n(Br),mn,pn,fn,hn,xn,Hr=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(mn||(mn=x()([`
      overflow: hidden;
    `]))),wrapper:e(pn||(pn=x()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),t.marginLG),content:e(fn||(fn=x()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.borderRadiusLG,t.boxShadowSecondary),dragWrapper:e(hn||(hn=x()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:e(xn||(xn=x()([`
      cursor: move;
    `])))}}),Qr=["title","classNames","defaultPosition","onPositionChange"],Gr=(0,g.memo)(function(r){var e=r.title,t=r.classNames,n=t===void 0?{}:t,a=r.defaultPosition,o=r.onPositionChange,i=N()(r,Qr),c=Hr(),d=c.styles,v=c.cx,m=(0,g.useState)({left:0,top:0,bottom:0,right:0}),p=k()(m,2),f=p[0],h=p[1],y=(0,g.useRef)(null),C=function(b,A){var T,L=window.document.documentElement,I=L.clientWidth,B=L.clientHeight,w=(T=y.current)===null||T===void 0?void 0:T.getBoundingClientRect();w&&h({left:-w.left+A.x,right:I-(w.right-A.x),top:-w.top+A.y,bottom:B-(w.bottom-A.y)})};return(0,l.jsx)(vn.Z,u()(u()({},i),{},{classNames:u()(u()({},n),{},{wrapper:v(d.wrapper,n.wrapper),content:v(d.content,n.content)}),destroyOnClose:!0,drawerRender:function(b){return(0,l.jsx)(zr(),{bounds:f,defaultPosition:a,handle:".".concat(d.dragHandle),nodeRef:y,onStart:function(T,L){return C(T,L)},onStop:function(T,L){o==null||o({x:L.x,y:L.y})},children:(0,l.jsx)("div",{className:d.dragWrapper,ref:y,children:b})})},mask:!1,rootClassName:d.root,title:(0,l.jsxs)(O.Z,{align:"center",className:d.dragHandle,children:[(0,l.jsx)(O.Z,{flex:2,children:e}),(0,l.jsx)(O.Z,{children:(0,l.jsx)(re.ZP,{className:d.dragHandle,icon:(0,l.jsx)(Fr.Z,{}),type:"text"})})]})}))}),Ur=s(24819),Vr=s(62812),ke=s.n(Vr),Yr=(0,g.memo)(function(r){var e=Object.assign({},(ke()(r),r));return(0,l.jsx)("svg",u()(u()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},e),{},{children:(0,l.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),gn=(0,g.memo)(function(r){var e=Object.assign({},(ke()(r),r));return(0,l.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},e),{},{children:[(0,l.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,l.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,l.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),yn=(0,g.memo)(function(r){var e=Object.assign({},(ke()(r),r));return(0,l.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,l.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,l.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,l.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,l.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,l.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,l.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,l.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),bn,Jr=(0,P.kc)(function(r){var e=r.css;return{extraTitle:e(bn||(bn=x()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),Kr=["type","size","style","extra","className"],Wr=(0,g.memo)(function(r){var e=r.type,t=e===void 0?"img":e,n=r.size,a=n===void 0?32:n,o=r.style,i=r.extra,c=r.className,d=N()(r,Kr),v=(0,P.Fg)(),m=Jr(),p=m.styles,f;switch(t){case"text":{f=(0,l.jsx)(yn,u()({className:c,height:a,style:o,width:a*2.9375},d));break}case"combine":{f=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(gn,u()({height:a,style:o,width:a},d)),(0,l.jsx)(yn,{style:{height:a,marginLeft:Math.round(a/4),width:"auto"}})]});break}case"img":default:{f=(0,l.jsx)(gn,u()({height:a,style:o,width:a},d));break}}if(!i)return f;var h=Math.round(a/3*1.9);return(0,l.jsxs)(Ur.D,u()(u()({align:"center",className:c,horizontal:!0,style:o},d),{},{children:[f,(0,l.jsx)(Yr,{style:{color:v.colorFill,height:h,width:h}}),(0,l.jsx)("div",{className:p.extraTitle,style:{fontSize:h},children:i})]}))}),Xr=s(21320),V=s.n(Xr),$r=s(41979),qr=s(63850),_r=s(62304),eo=s(31463),no=s(50834),to=s(12922),E=s(65694),ro=s(15033),Re=s.n(ro),oo=s(96345),De=s.n(oo),ao=s(71160),io=s.n(ao),lo=s(41607),so=s.n(lo),co=s(13762),we=s.n(co),uo=s(41206),Fe=s.n(uo),Ce=function(r){we()(t,r);var e=Fe()(t);function t(){return Re()(this,t),e.apply(this,arguments)}return De()(t,[{key:"createDOM",value:function(a){var o=io()(so()(t.prototype),"createDOM",this).call(this,a);return o.classList.add("align-middle"),o}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(a){return new t(a.__text,a.__key)}},{key:"importJSON",value:function(a){var o=(0,E.MX)(a.text);return o.setFormat(a.format),o.setDetail(a.detail),o.setMode(a.mode),o.setStyle(a.style),o}}]),t}(E.R2);function Fl(r){return new Ce(r)}var oe=s(31692),Ae=s(95138),vo=s(90696),X=s.n(vo),Be=s(244),ce=s(32588),mo=s(55608),Cn=(0,g.createContext)(null),po=(0,g.memo)(function(r){var e=r.children,t=r.value;return(0,l.jsx)(Cn.Provider,{value:t,children:e})}),fo=function(){var e=(0,g.useContext)(Cn);return e==null?void 0:e.optionsMap},ho=s(457),xo=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,go="\\(",yo=function(e){return"(?:"+e.join("|")+")"},bo=function(e,t){var n=e.length===0?"":"(?!"+e.join("|")+")";return n+"[^\\s"+t+"]"},Co=function(e){return"(?:\\.[ |$]|\\s|["+e+"]|)"},Ao=75,So=function(e,t){var n=(0,g.useRef)(null),a=(0,oe.g)(),o=k()(a,1),i=o[0],c=(0,ho.y)(e),d=k()(c,3),v=d[0],m=d[1],p=d[2],f=(0,g.useCallback)(function(y){var C=(0,E.dL)(),S=C==null?void 0:C.getNodes();if(!v&&(S==null?void 0:S.length)===1&&i.dispatchCommand(t,void 0),v&&(0,E.iO)(C)){y.preventDefault();var b=(0,E.gI)(e);if((0,E.k$)(b))return t&&i.dispatchCommand(t,void 0),b.remove(),!0}return!1},[v,e,t,i]),h=(0,g.useCallback)(function(y){y.stopPropagation(),p(),m(!0)},[m,p]);return(0,g.useEffect)(function(){var y=n.current;return y&&y.addEventListener("click",h),function(){y&&y.removeEventListener("click",h)}},[h]),(0,g.useEffect)(function(){return(0,Ae.qV)(i.registerCommand(E.MK,f,E.KB),i.registerCommand(E.aR,f,E.KB))},[i,p,f]),[n,v]},Bl=function(){var e=useRef(null),t=useState(!1),n=_slicedToArray(t,2),a=n[0],o=n[1],i=useCallback(function(c){c.stopPropagation(),o(function(d){return!d})},[]);return useEffect(function(){var c=e.current;return c&&c.addEventListener("click",i),function(){c&&c.removeEventListener("click",i)}},[i]),[e,a,o]};function Lo(r,e,t,n){return new RegExp((e?"(^|\\s|".concat(e,")("):"(^|\\s)(")+yo(r)+"((?:"+bo(r,t)+(n?Co(t):"")+"){0,"+Ao+"}))$")}function jo(r,e,t,n,a){var o=Lo(e,t,n,a).exec(r);if(o!==null){var i=o[1],c=o[2],d=o[3];if(c.length>0)return{leadOffset:o.index+i.length,matchingString:d,replaceableString:c}}return null}var Mo=function(e,t){var n=t.punctuation,a=t.preTriggerChars,o=t.allowSpaces,i=(0,g.useState)(null),c=k()(i,2),d=c[0],v=c[1],m=(0,g.useCallback)(function(p){var f=jo(p,e,a,n,o);if(f){var h=f.replaceableString,y=f.matchingString,C=h.lastIndexOf(y),S=C===-1?h:h.slice(0,Math.max(0,C))+h.slice(Math.max(0,C+y.length));if(v(S||null),f.replaceableString)return f}else v(null);return null},[a,o,n,e]);return{trigger:d,checkForMentionMatch:m}},An,Sn,Ln,No=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.isError,c=function(){return i?o?{background:n.colorErrorBgActive,border:n.colorErrorBorderHover,color:n.colorErrorTextActive}:{background:n.colorErrorBg,border:n.colorErrorBorder,color:n.colorErrorText}:o?{background:n.colorInfoBgHover,border:n.colorInfoBorder,color:n.colorInfoText}:{background:n.colorFillTertiary,border:"transparent",color:n.colorInfoText}},d=c(),v=d.background,m=d.border,p=d.color;return{root:t(An||(An=x()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),n.fontFamilyCode,p,v,m,n.borderRadius),text:t(Sn||(Sn=x()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.colorTextSecondary),error:t(Ln||(Ln=x()([`
        color: `,`;
      `])),n.colorErrorText)}}),jn=(0,E.fA)("INSERT_MENTION_COMMAND"),Mn=(0,E.fA)("DELETE_MENTION_COMMAND"),Nn=(0,E.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Zn=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,Zo=(0,g.memo)(function(r){var e=r.nodeKey,t=r.variable,n=fo(),a=(0,oe.g)(),o=k()(a,1),i=o[0],c=So(e,Mn),d=k()(c,2),v=d[0],m=d[1],p=n==null?void 0:n[t],f=No({isSelected:m,isError:!p||!!p.error}),h=f.styles;(0,g.useEffect)(function(){if(!i.hasNodes([de]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[i]);var y=(0,l.jsx)(O.Z,{className:h.root,ref:v,children:(0,l.jsxs)(O.Z,{align:"center",gap:2,children:[(!p||p.error)&&(0,l.jsx)(Be.Z,{className:h.error,icon:mo.Z}),(p==null?void 0:p.icon)&&(0,l.jsx)(O.Z,{children:p.icon}),(0,l.jsx)(O.Z,{className:h.text,gap:2,title:(p==null?void 0:p.label)||t,children:(0,l.jsx)("span",{children:(p==null?void 0:p.label)||t})})]})});return p!=null&&p.error?(0,l.jsx)(ce.Z,{title:p==null?void 0:p.error,children:y}):y}),de=function(r){we()(t,r);var e=Fe()(t);function t(n,a,o){var i;return Re()(this,t),i=e.call(this,o),V()(X()(i),"__variable",void 0),i.__variable=n,i}return De()(t,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var a=document.createElement("div");return a.style.display="inline-flex",a.style.alignItems="center",a.style.verticalAlign="middle",a}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,l.jsx)(Zo,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var a=this.getLatest();return a.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(a){return new t(a.__variable)}},{key:"importJSON",value:function(a){var o=ze(a.variable);return o}}]),t}(E.Ij);function ze(r){return new de(r)}function zl(r){return r instanceof de}var Hl=(0,E.fA)("INSERT_MENTION_COMMAND"),Ql=(0,E.fA)("DELETE_MENTION_COMMAND"),Gl=(0,E.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Ul=(0,E.fA)("UPDATE_MENTIONS_OPTIONS"),Oo=function(e,t,n){if(e.isSimpleText())for(var a=e.getPreviousSibling(),o=e.getTextContent(),i=e,c;;){c=t(o);var d=c===null?"":o.slice(c.end);if(o=d,d===""){var v=i.getNextSibling();if((0,E.Gg)(v)){d=i.getTextContent()+v.getTextContent();var m=t(d);if(m===null){v.markDirty();return}else if(m.start!==0)return}}else{var p=t(d);if(p!==null&&p.start===0)return}if(c===null)return;if(!(c.start===0&&(0,E.Gg)(a)&&a.isTextEntity())){var f=void 0;if(c.start===0){var h=i.splitText(c.end),y=k()(h,2);f=y[0],i=y[1]}else{var C=i.splitText(c.start,c.end),S=k()(C,3);f=S[1],i=S[2]}var b=n(f);if(f.replace(b),i==null)return}}};function Eo(r){var e=r.split(`
`);return JSON.stringify({root:{children:e.map(function(t){return{children:[{detail:0,format:0,mode:"normal",style:"",text:t,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var To=(0,g.memo)(function(r){var e=r.onInsert,t=(0,oe.g)(),n=k()(t,1),a=n[0];(0,g.useEffect)(function(){if(!a.hasNodes([de]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[a]);var o=(0,g.useCallback)(function(d){e&&e();var v=d.getTextContent().slice(2,-2);return(0,E.U2)(ze(v))},[e]),i=(0,g.useCallback)(function(d){var v=Zn.exec(d);if(v===null)return null;var m=v.index,p=m+v[0].length;return{end:p,start:m}},[]),c=(0,g.useCallback)(function(d){return Oo(d,i,o)},[o,i]);return(0,g.useEffect)(function(){return Zn.lastIndex=0,(0,Ae.qV)(a.registerNodeTransform(Ce,c))},[]),null}),On=(0,g.memo)(function(r){var e=r.onInsert,t=r.onDelete,n=(0,oe.g)(),a=k()(n,1),o=a[0];return(0,g.useEffect)(function(){if(!o.hasNodes([de]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,Ae.qV)(o.registerCommand(jn,function(i){o.dispatchCommand(Nn,null);var c=ze(i);return(0,E.od)([c]),e&&e(),!0},E.VN),o.registerCommand(Mn,function(){return t&&t(),!0},E.VN))},[o,e,t]),null});On.displayName="MentionNodePlugin";var En=s(40268),Po=s(10422),Io=function(r){we()(t,r);var e=Fe()(t);function t(n,a,o){var i;return Re()(this,t),i=e.call(this,n),V()(X()(i),"label",void 0),V()(X()(i),"value",void 0),V()(X()(i),"icon",void 0),V()(X()(i),"extraElement",void 0),V()(X()(i),"keywords",void 0),V()(X()(i),"keyboardShortcut",void 0),V()(X()(i),"onSelect",void 0),V()(X()(i),"disabled",void 0),V()(X()(i),"data",void 0),i.value=n,i.label=a,i.keywords=o.keywords||[],i.icon=o.icon,i.extraElement=o.extraElement,i.keyboardShortcut=o.keyboardShortcut,i.onSelect=o.onSelect.bind(X()(i)),i.disabled=o.disabled,i.data=o.data,i}return De()(t)}(En.n),ko=function(e,t){var n=(0,oe.g)(),a=k()(n,1),o=a[0],i=(0,g.useMemo)(function(){var c=e.map(function(v){return new Io(v.value,v.label,{icon:v.icon,onSelect:function(){o.dispatchCommand(jn,v.value)},disabled:v.disabled,data:v.data,extraElement:v.extraElement,keywords:v.keywords,keyboardShortcut:v.keyboardShortcut})});if(!t)return c;var d=new RegExp(t,"i");return c.filter(function(v){var m;return d.test(v.label)||((m=v.keywords)===null||m===void 0?void 0:m.some(function(p){return d.test(p)}))})},[e,t,o]);return{options:i}},Tn=s(27387),Se=s(17575),Ro=s(5726),ge=s.n(Ro),Do=s(92117),wo=s.n(Do),Fo=s(45832),Bo=["time","format","relativeTime","tooltip"];ge().extend(wo());var Le=Se.Z,He=function(e){return ge()(e?new Date(e):new Date).fromNow()},zo=function(e){var t,n=e.time,a=e.format,o=e.relativeTime,i=o===void 0?!0:o,c=e.tooltip,d=N()(e,Bo),v=(0,g.useState)(He(n)),m=k()(v,2),p=m[0],f=m[1],h=(0,g.useCallback)(function(b){var A=ge()(),T=ge()(b),L=A.diff(T);if(L>0&&L<60*60*1e3)return setInterval(function(){f(He(b))},60*1e3)},[]);(0,g.useEffect)(function(){var b;return i&&(b=h(new Date(n))),function(){b&&clearInterval(b)}},[i,h,n]),(0,g.useEffect)(function(){if(i){var b=He(n);b!==p&&(f(b),h(new Date(n)))}},[n,i,p,h]);var y=ge()(n).format(a||"YYYY-MM-DD HH:mm:ss"),C=i?p:y,S=(t=c==null?void 0:c.title)!==null&&t!==void 0?t:i?y:void 0;return S&&(0,Fo.Z)(d,"ellipsis.tooltip.title",void 0),(0,l.jsx)(ce.Z,u()(u()({},c||{}),{},{title:S,children:(0,l.jsx)(Le.Text,u()(u()({},d),{},{children:C}))}))};Le.Time=zo;var Qe=Le,Pn,In,kn,Rn,Dn,wn,Fn,Ge=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.disabled,c=t(Pn||(Pn=x()([`
      background-color: `,`;
    `])),n.colorFillTertiary);return{anchor:t(In||(In=x()([`
        z-index: 9999;
      `]))),menuEmpty:t(kn||(kn=x()([`
        padding: `,`px;
      `])),n.padding),menuOverlay:t(Rn||(Rn=x()([`
        overflow: auto;

        width: 240px;
        max-height: 320px;
        margin-top: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.marginXXS,n.colorBgElevated,n.borderRadius,n.boxShadow),menuItem:t(Dn||(Dn=x()([`
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
      `])),i?"not-allowed":"pointer",i?"none":"all",n.paddingSM/2,n.paddingSM,n.borderRadius,i?n.colorTextDisabled:n.colorText,n.fontSize,n.lineHeight,o&&c,c),menuItemIcon:t(wn||(wn=x()([`
        color: `,`;
      `])),n.colorInfoText),menuItemLabel:t(Fn||(Fn=x()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Ho=Qe.Text,Bn=(0,g.memo)(function(r){var e=r.index,t=r.isSelected,n=r.onClick,a=r.onMouseEnter,o=r.option,i=r.queryString,c=Ge({isSelected:t,disabled:o.disabled}),d=c.styles,v=o.label,m=(0,g.useMemo)(function(){var y=v,C="",S="";if(i){var b=new RegExp(i,"i"),A=b.exec(o.label);A&&(y=v.slice(0,Math.max(0,A.index)),C=A[0],S=v.slice(Math.max(0,A.index+A[0].length)))}return{before:y,middle:C,after:S}},[o.label,i,v]),p=m.before,f=m.middle,h=m.after;return(0,l.jsxs)(O.Z,{align:"center",className:d.menuItem,gap:4,onClick:function(){return n(e,o)},onMouseEnter:function(){return a(e,o)},ref:o.setRefElement,tabIndex:-1,children:[(0,l.jsx)(O.Z,{className:d.menuItemIcon,children:o.icon}),(0,l.jsxs)("div",{className:d.menuItemLabel,title:o.label,children:[p,(0,l.jsx)(Ho,{mark:!0,children:f}),h]}),(0,l.jsx)(O.Z,{children:o.extraElement})]},o.key)});Bn.displayName="MentionMenuItem";var Qo=(0,g.memo)(function(r){var e=r.selectedIndex,t=r.options,n=r.onClick,a=r.onMouseEnter,o=r.queryString,i=Ge({}),c=i.styles;return(0,l.jsxs)(l.Fragment,{children:[t.length===0&&(0,l.jsx)(Tn.Z,{className:c.menuEmpty}),t.map(function(d,v){return(0,l.jsx)(Bn,{index:v,isSelected:e===v,onClick:n,onMouseEnter:a,option:d,queryString:o},d.key)})]})}),Go=(0,g.memo)(function(r){var e=r.triggers,t=r.options,n=t===void 0?[]:t,a=r.allowSpaces,o=a===void 0?!0:a,i=r.punctuation,c=i===void 0?xo:i,d=r.preTriggerChars,v=d===void 0?go:d,m=r.onSelect,p=Ge({}),f=p.styles,h=(0,oe.g)(),y=k()(h,1),C=y[0],S=Mo(e,{punctuation:c,preTriggerChars:v,allowSpaces:o}),b=S.trigger,A=S.checkForMentionMatch,T=(0,g.useState)(null),L=k()(T,2),I=L[0],B=L[1],w=ko(n,I),U=w.options,Y=(0,g.useCallback)(function(j,Z,H,F){m==null||m(j,b,I),C.update(function(){Z&&j!==null&&j!==void 0&&j.key&&Z.remove(),j!=null&&j.onSelect&&j.onSelect(F),H()})},[C,m,I,b]),G=(0,g.useCallback)(function(j,Z){var H=Z.selectedIndex,F=Z.selectOptionAndCleanUp,K=Z.setHighlightedIndex;return j.current?Po.createPortal((0,l.jsx)("div",{className:f.menuOverlay,role:"menu",children:(0,l.jsx)(Qo,{onClick:function(M,R){R.disabled||(K(M),F(R))},onMouseEnter:function(M,R){R.disabled||K(M)},options:U,queryString:I,selectedIndex:H})}),j.current):null},[U,I,f.menuOverlay]);return(0,l.jsx)(En.HQ,{anchorClassName:f.anchor,menuRenderFn:G,onQueryChange:B,onSelectOption:Y,options:U,triggerFn:A})}),Uo=function(e){var t=e.onBlur,n=e.onFocus,a=(0,oe.g)(),o=k()(a,1),i=o[0],c=(0,g.useRef)(null);return(0,g.useEffect)(function(){return(0,Ae.qV)(i.registerCommand(Nn,function(){return c.current&&(clearTimeout(c.current),c.current=null),!0},E.VN),i.registerCommand(E.Gq,function(){return c.current=setTimeout(function(){i.dispatchCommand(E.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),t&&t(),!0},E.VN),i.registerCommand(E.m$,function(){return n&&n(),!0},E.VN))},[i,t,n]),null},Vo=Uo,zn,Hn,Qn,Gn,Un,Vn,Yn,Jn,Kn=function(e){return 32+Math.max(e-1,0)*22},Yo=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.autoSize;return{wrapper:t(zn||(zn=x()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:t(Hn||(Hn=x()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 4px;
        left: 11px;

        color: `,`;
      `])),n.colorTextPlaceholder),root:t(Qn||(Qn=x()([`
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
      `])),n.colorBorder,n.borderRadius,n.colorText,n.fontSize,n.fontFamily,(o==null?void 0:o.minRows)&&t(Gn||(Gn=x()([`
          min-height: `,`px;
        `])),Kn(o.minRows)),(o==null?void 0:o.maxRows)&&t(Un||(Un=x()([`
          max-height: `,`px;
        `])),Kn(o.maxRows)),n.motionDurationMid,n.colorPrimaryBorder),filled:t(Vn||(Vn=x()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),n.colorFillTertiary,n.colorFillSecondary,n.colorBgBase),borderless:t(Yn||(Yn=x()([`
        background: transparent;
        border: none;
      `]))),disabled:t(Jn||(Jn=x()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),n.colorTextDisabled,n.colorBgContainerDisabled)}}),Jo=function(e){var t,n=e.className,a=e.wrapperClassname,o=e.placeholder,i=e.style,c=e.value,d=e.defaultValue,v=e.readOnly,m=v===void 0?!1:v,p=e.disabled,f=p===void 0?!1:p,h=e.onChange,y=e.onBlur,C=e.onFocus,S=e.variant,b=S===void 0?"outlined":S,A=e.options,T=A===void 0?[]:A,L=e.autoSize,I=e.triggers,B=I===void 0?["@"]:I,w=e.allowSpaces,U=e.punctuation,Y=e.preTriggerChars,G=e.onSelect,j=Yo({autoSize:L}),Z=j.styles,H=j.cx,F=!m&&!f,K=(0,g.useMemo)(function(){return{namespace:"mentions",nodes:[Ce,{replace:E.R2,with:function(Q){return new Ce(Q.__text)}},de],editorState:Eo(c||d||""),onError:function(Q){throw Q}}},[]),D=function(Q){var pe=Q.read(function(){return(0,E.Gv)().getTextContent()});h==null||h(pe.replaceAll(`

`,`
`))},M=(0,g.useMemo)(function(){return T.reduce(function(R,Q){return R[Q.value]=Q,R},{})},[T]);return(0,l.jsx)($r.R,{initialConfig:u()(u()({},K),{},{editable:F}),children:(0,l.jsx)(po,{value:{optionsMap:M},children:(0,l.jsxs)("div",{className:H(Z.wrapper,a),children:[(0,l.jsx)(to.B,{ErrorBoundary:_r.g,contentEditable:(0,l.jsx)(qr.f,{className:H((t={},V()(t,Z.root,!0),V()(t,Z.filled,b==="filled"),V()(t,Z.borderless,b==="borderless"),V()(t,Z.disabled,f),t),n),style:i||{}}),placeholder:(0,l.jsx)("div",{className:Z.placeholder,children:o||"\u8F93\u5165 ".concat(B.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,l.jsx)(Go,{allowSpaces:w,onSelect:G,options:T,preTriggerChars:Y,punctuation:U,triggers:B}),(0,l.jsx)(On,{}),(0,l.jsx)(To,{}),(0,l.jsx)(eo.e,{}),(0,l.jsx)(no.$,{onChange:D}),(0,l.jsx)(Vo,{onBlur:y,onFocus:C})]})})})},Wn=s(57613),Xn=s(47590),Ko="data:image/png;base64,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",Wo="data:image/png;base64,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",$n,qn,_n,et,nt,Xo=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=e.minimapEnabled,o=a===void 0?!1:a,i=e.isFullScreen,c=i===void 0?!1:i,d=(0,P.F4)($n||($n=x()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),v=t(qn||(qn=x()([`
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
    `])),o?"64px":"20px",Wo,Ko);return{base:t(_n||(_n=x()([`
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
      `])),n.colorBorder,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius-1,n.borderRadius-1,v,d),diff:t(et||(et=x()([`
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
      `])),c&&t(nt||(nt=x()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto;
            height: auto;
          `]))),v)}},{hashPriority:"low"}),$o=s(67557),qo=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","onChange","className","diffEditorWrapperClassName","supportFullScreen","width","height"],_o=["inlineView","options"],Ue=function(e){var t=e.type,n=t===void 0?"single":t,a=e.editorDidMount,o=e.readOnly,i=o===void 0?!1:o,c=e.lineNumbers,d=c===void 0?"on":c,v=e.wordWrap,m=v===void 0?"off":v,p=e.contextmenu,f=p===void 0?!0:p,h=e.theme,y=e.minimapEnabled,C=y===void 0?!1:y,S=e.version,b=S===void 0?"0.45.0":S,A=e.requireConfig,T=A===void 0?{}:A,L=e.options,I=e.onChange,B=e.className,w=e.diffEditorWrapperClassName,U=e.supportFullScreen,Y=e.width,G=e.height,j=N()(e,qo),Z=(0,Xn.r)(),H=Z.isDarkMode,F=(0,g.useMemo)(function(){return h||(H?"vs-dark":"vs")},[H,h]),K=(0,g.useState)(),D=k()(K,2),M=D[0],R=D[1],Q=function(Oe,Ee){if(R(Ee),a==null||a(Oe,Ee),n==="diff"){var Mr=Ee.getModel(),nn=Mr.modified;nn.onDidChangeContent(function(ne){I==null||I(nn.getValue(),ne)})}},pe=(0,g.useMemo)(function(){var xe=Object.assign({},L,{readOnly:i,lineNumbers:d,wordWrap:m,contextmenu:f,minimap:C===void 0?L==null?void 0:L.minimap:Object.assign({},L==null?void 0:L.minimap,{enabled:C})});return M==null||M.updateOptions(xe),xe},[L,i,d,m,f,C,M]),z=dn(),ye=(0,g.useMemo)(function(){return Object.assign({},T,{paths:u()({vs:z({path:"min/vs",pkg:"monaco-editor",version:b})},T.paths)})},[z,T,b]),fe=(0,g.useState)(!1),te=k()(fe,2),J=te[0],le=te[1],se=Xo({minimapEnabled:C,isFullScreen:J}),he=se.styles,W=se.cx;if(n!=="diff")return(0,l.jsx)(Wn.vg,u()({className:W(he.base,B),editorDidMount:Q,height:G,onChange:I,options:pe,requireConfig:ye,supportFullScreen:M&&U,theme:F,width:Y},j));var _e=function(){le(!J),M==null||M.layout()},en=W({"base-monaco-full-screen-icon":!J,"base-monaco-full-screen-icon-cancel":J});return(0,l.jsxs)("div",{className:W(he.diff,w),children:[(0,l.jsx)(Wn.vg.MonacoDiffEditor,u()({className:W(he.base,B),editorDidMount:Q,height:J?"auto":G,options:pe,requireConfig:ye,theme:F,width:J?"auto":Y},j)),M&&U&&(0,l.jsx)("div",{className:en,onClick:_e})]})},ea=function(e){return(0,l.jsx)(Ue,u()(u()({},e),{},{type:"single"}))},na=function(e){var t=e.inlineView,n=t===void 0?"off":t,a=e.options,o=N()(e,_o);return(0,l.jsx)(Ue,u()(u()({options:Object.assign({useInlineViewWhenSpaceIsLimited:n==="on"||n==="auto",renderSideBySide:n==="off"||n==="auto"},a)},o),{},{type:"diff"}))},tt=s(6813),Ve=s(54189),rt=s(64337),ot=s(16988),ta=function(e){var t=e.value,n=e.defaultValue,a=e.min,o=a===void 0?0:a,i=e.max,c=e.step,d=e.gutter,v=d===void 0?16:d,m=e.sliderCol,p=m===void 0?{span:12}:m,f=e.inputCol,h=f===void 0?{span:5}:f,y=e.addonAfter,C=e.addonBefore,S=e.placeholder,b=e.onChange,A=e.style,T=e.className,L=e.sliderProps,I=L===void 0?{}:L,B=e.inputProps,w=B===void 0?{}:B,U=(0,g.useState)(),Y=k()(U,2),G=Y[0],j=Y[1],Z=function(F){Number.isNaN(F)||(j(F),b==null||b(F))};return(0,l.jsxs)(tt.Z,{className:T,gutter:v,style:A,children:[(0,l.jsx)(Ve.Z,u()(u()({},p),{},{children:(0,l.jsx)(rt.Z,u()(u()({},I),{},{defaultValue:n,max:i,min:o,onChange:Z,step:c,value:t!=null?t:G}))})),(0,l.jsx)(Ve.Z,u()(u()({},h),{},{children:(0,l.jsx)(ot.Z,u()(u()({},w),{},{addonAfter:y,addonBefore:C,defaultValue:n,max:i,min:o,onChange:Z,placeholder:S,step:c,value:t!=null?t:G}))}))]})},at=s(5654),it,ra=(0,P.kc)(function(r,e){var t=r.css,n=e.bordered,a=n===void 0?"dashed":n;return{custom:t(it||(it=x()([`
        border-style: `,` !important;
      `])),a)}},{hashPriority:"low"}),oa=["bordered","className"],lt=function(e){var t=e.bordered,n=t===void 0?"dashed":t,a=e.className,o=N()(e,oa),i=ra({bordered:n}),c=i.styles,d=i.cx;return(0,l.jsx)(at.Z,u()(u()({},o),{},{className:d(c.custom,a)}))};lt.ErrorBoundary=at.Z.ErrorBoundary;var Vl=null,st=s(73320),aa=s(38887),je=s.n(aa),ct=s(14171),dt=s(9300),ia=s(64202),Ye=s(99141),Me=s(41075),ut,vt=(0,P.vJ)(ut||(ut=x()([`
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
    `)}),la=["detail","message","description","onClose","className"],sa=Ye.Z.Panel,ca=Se.Z.Link,da=Se.Z.Paragraph,ua=Se.Z.Text,ue={},va=function(e,t){ue[e]||(ue[e]=[]),ue[e].push(t)},ma=function(e){delete ue[e]},mt=function r(e){var t="";if(typeof e=="string")t=e;else if(typeof e=="number")t=e.toString();else if(Array.isArray(e)){var n=je()(e),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;t+=r(o)}}catch(i){n.e(i)}finally{n.f()}}else(0,g.isValidElement)(e)&&(t+=r(e.props.children));return t},pt=function(e){var t,n=e.noticeKey,a=e.message,o=((t=ue[n])===null||t===void 0?void 0:t.length)||0;return(0,l.jsxs)(l.Fragment,{children:[a,o>1&&" (".concat(o,")")]})},pa=function(e){var t=e.noticeKey,n=(0,g.useState)(),a=k()(n,2),o=a[0],i=a[1],c={},d=je()(ue[t]),v;try{for(d.s();!(v=d.n()).done;){var m=v.value,p=mt(m.description);m.descKey=p,c[p]=m}}catch(f){d.e(f)}finally{d.f()}return(0,l.jsx)(Ye.Z,{accordion:!0,activeKey:o,className:"yunti-notification-collapse",expandIcon:function(h){var y=h.isActive;return(0,l.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:y?(0,l.jsx)(ca,{className:"yunti-notification-link",children:(0,l.jsx)(ct.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,l.jsx)(dt.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(h){i(h)},children:Object.values(c).map(function(f){var h=f.descKey,y=f.description,C=f.detail;return(0,l.jsx)(sa,{header:(0,l.jsx)(ua,{ellipsis:{tooltip:!1},style:{width:250},children:y}),children:(0,l.jsx)(da,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(C,null,2)},type:"secondary",children:(0,l.jsx)("pre",{children:JSON.stringify(C,null,2)})})},h)})})},ae=function(e){var t=e.detail,n=e.message,a=e.description,o=e.onClose,i=e.className,c=N()(e,la),d=mt(n);va(d,e);var v=function(){o==null||o(),ma(d)};return e.type==="warning"&&!e.icon&&(c.icon=(0,l.jsx)(ia.Z,{style:{color:"#ff7d00"}})),t?Me.ZP.open(u()({key:d,message:(0,l.jsx)(pt,{message:n,noticeKey:d}),description:(0,l.jsx)(pa,{noticeKey:d}),onClose:v,className:"yunti-notification ".concat(i)},c)):Me.ZP.open(u()({key:d,message:(0,l.jsx)(pt,{message:n,noticeKey:d}),description:a,onClose:v,className:"yunti-notification ".concat(i)},c))},ft=function(e){var t;if(((e==null||(t=e.errors)===null||t===void 0?void 0:t.length)||0)>0){e!=null&&e.errors;var n=je()((e==null?void 0:e.errors)||[]),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;ae(u()(u()({detail:o,description:o.message},e),{},{type:"warning"}))}}catch(i){n.e(i)}finally{n.f()}}else ae(u()(u()({},e),{},{type:"warning"}))},fa=u()(u()({},Me.ZP),{},{success:function(e){return ae(u()(u()({},e),{},{type:"success"}))},info:function(e){return ae(u()(u()({},e),{},{type:"info"}))},warning:function(e){return ae(u()(u()({},e),{},{type:"warning"}))},warn:function(e){return ae(u()(u()({},e),{},{type:"warning"}))},error:function(e){return ae(u()(u()({},e),{},{type:"error"}))},warnings:ft,warns:ft}),Yl=null,ha=["children"],ht=function(e){var t=e.children,n=N()(e,ha);return(0,l.jsxs)(st.Z,u()(u()({},n),{},{children:[(0,l.jsx)(vt,{}),t]}))};ht.useApp=st.Z.useApp;var Jl=null,xa=s(34550),xt=s(37032),gt,yt,bt,Ct,At,St,ga=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.borderedBottom,i=e.borderedBottomDashed,c=e.borderedTop,d=e.borderedTopDashed,v=e.size,m={small:"".concat(n.paddingXS,"px ").concat(n.padding,"px"),middle:"".concat(n.padding,"px ").concat(n.paddingLG,"px"),default:"".concat(n.paddingSM,"px ").concat(n.paddingLG,"px")},p=o||i;return{custom:t(gt||(gt=x()([`
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
      `])),a,a,p&&v&&t(yt||(yt=x()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),a,a,m[v],a),o&&t(bt||(bt=x()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),a,n.colorSplit),i&&t(Ct||(Ct=x()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),a,n.colorSplit),c&&t(At||(At=x()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),a,n.colorSplit),d&&t(St||(St=x()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),a,n.colorSplit))}},{hashPriority:"low"}),ya=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],Je=function(e){var t=e.className,n=e.borderedBottom,a=e.borderedBottomDashed,o=e.borderedTop,i=e.borderedTopDashed,c=N()(e,ya),d=ga({borderedBottom:n,borderedBottomDashed:a,borderedTop:o,borderedTopDashed:i,size:c.size}),v=d.styles,m=d.cx;return(0,l.jsx)(xt.Z,u()(u()({},c),{},{className:m(v.custom,t)}))},ba=Je;Je.Item=xt.Z.Item;var Lt=s(14329),Ke=s(3024),jt,Ca=(0,P.kc)(function(r){var e=r.css,t=r.token;return{custom:e(jt||(jt=x()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),t.colorPrimary,t.colorPrimaryHover)}},{hashPriority:"low"}),Aa=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],Mt=function(e){var t=e.mode,n=t===void 0?"line":t,a=e.content,o=e.defaultOpen,i=e.iconPlacement,c=i===void 0?"left":i,d=e.openIcon,v=e.closeIcon,m=e.type,p=N()(e,Aa),f=Ca({}),h=f.styles,y=n==="expanded",C=(0,g.useState)(o),S=k()(C,2),b=S[0],A=S[1],T=v||(0,l.jsx)(ct.Z,{}),L=d||(0,l.jsx)(dt.Z,{}),I=y&&(0,l.jsx)("span",{children:b?T:L});return n==="line"||m==="vertical"?(0,l.jsx)(Lt.Z,u()({type:m},p)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Lt.Z,u()(u()({type:m},p),{},{children:(0,l.jsx)("span",{className:y?h.custom:"",onClick:function(){A(!b)},children:(0,l.jsxs)(Ke.Z,{size:6,children:[c!=="right"&&I,(0,l.jsx)("span",{children:a}),c==="right"&&I]})})})),y&&(0,l.jsx)("div",{style:{display:b?"block":"none"},children:e.children})]})},Sa=Mt,Nt,Zt,Ot,La=(0,P.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.closeIcon,o=e.closeIconPlacement,i=e.extra,c=t(Nt||(Nt=x()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),n,n,!(a===null||a===!1)&&t(Zt||(Zt=x()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),n));return{custom:t(Ot||(Ot=x()([`
        `,`
      `])),(!o||o==="right"||o==="auto"&&!i)&&c)}},{hashPriority:"low"}),ja=["className"],Ma=function(e){var t=e.className,n=N()(e,ja),a=La(n),o=a.styles,i=a.cx;return(0,l.jsx)(vn.Z,u()(u()({},n),{},{className:i(o.custom,t)}))},Kl=null,ve=s(70757),Na=s(13448),Et=s.n(Na),Za=s(74815),Oa=s.n(Za),Ea=s(67855),We=s.n(Ea),Ta=s(37194),$=s(40363),Pa=s(92052),Tt,Pt,It,Ia=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{empty:e(Tt||(Tt=x()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),t.paddingXS,t.paddingSM,t.colorTextTertiary),list:e(Pt||(Pt=x()([`
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
    `])),n,t.colorTextTertiary,n),noFormItem:e(It||(It=x()([`
      height: `,`px;
      color: `,`;
    `])),t.controlHeight,t.colorTextTertiary)}}),ka=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style"],Ra=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width"],Da=["key","name"],kt=function(e){var t=e.extra,n=e.expandIcon,a=e.icon,o=e.title,i=e.variant,c=e.defaultActive,d=e.empty,v=d===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":d,m=e.columns,p=m===void 0?[]:m,f=e.disabled,h=e.readOnly,y=e.addOneFieldDefault,C=e.disableRemoveWhenOneField,S=e.maxFileds,b=e.name,A=e.addParams,T=e.className,L=e.onRemove,I=e.fieldRemoveButton,B=I===void 0?!0:I,w=e.style,U=N()(e,ka),Y=Ia(),G=Y.styles,j=(0,g.useRef)(),Z=ve.Z.useFormInstance(),H=ve.Z.useWatch(b,Z),F=(0,g.useCallback)(function(){if(!A)return[];var D=typeof A=="function"?A():A;return[D.defaultValue,D.insertIndex]},[A]),K=(0,g.useCallback)(function(D){var M=Z.getFieldValue([b,D]);return L==null?void 0:L(M)},[Z,b,L]);return(0,g.useEffect)(function(){var D;if(y&&(!(Z!=null&&Z.getFieldValue(b))||(Z==null||(D=Z.getFieldValue(b))===null||D===void 0?void 0:D.length)===0)){var M;(M=j.current)===null||M===void 0||M.call.apply(M,[j].concat(We()(F())))}},[y,F,Z,b]),(0,l.jsx)(Ie,{extra:t===void 0?b&&!h&&(0,l.jsx)(ce.Z,{title:S&&"\u6700\u591A\u6DFB\u52A0 ".concat(S," \u9879"),children:(0,l.jsx)(re.ZP,{disabled:f||!!(S&&(H==null?void 0:H.length)===S),icon:(0,l.jsx)(Ta.Z,{}),onClick:function(M){var R;M.stopPropagation(),(R=j.current)===null||R===void 0||R.call.apply(R,[j].concat(We()(F())))},size:"small",type:"text"})}):t,className:T,expandIcon:n,icon:a,title:o,variant:i,defaultActive:c,style:w,children:b?(0,l.jsx)(ve.Z.List,u()(u()({name:b},U),{},{children:function(M,R){var Q=R.add,pe=R.remove;return j.current=Q,(0,l.jsx)($.Z,{className:G.list,columns:[].concat(We()(p.map(function(z){var ye=z.label,fe=z.name,te=z.render,J=z.dependencies,le=z.rules,se=z.align,he=z.ellipsis,W=z.fixed,_e=z.responsive,en=z.shouldCellUpdate,xe=z.width,Oe=N()(z,Ra);return{title:ye,dataIndex:fe,align:se,ellipsis:he,fixed:W,responsive:_e,shouldCellUpdate:en,width:xe,render:function(Mr,nn,ne){var tn=M[ne],kl=tn.key,Rl=tn.name,Dl=N()(tn,Da),Te=te==null?void 0:te(M[ne],ne);if(!Te&&!Oe.noStyle)return(0,l.jsx)(O.Z,{align:"center",className:G.noFormItem,children:"\u65E0\u9700\u8BBE\u7F6E"});if(!fe)return(0,l.jsx)(O.Z,{align:"center",className:G.noFormItem,children:Te});var Pe={readOnly:h,disabled:f};return h===!0&&(Pe.showCount=!1,Pe.variant="borderless",Pe.placeholder="-"),(0,l.jsx)(ve.Z.Item,u()(u()(u()({},Dl),{},{dependencies:typeof J=="function"?J(M[ne],ne):J,name:[Rl,fe],rules:typeof le=="function"?le(M[ne],ne):le},Oe),{},{children:Te&&g.cloneElement(Te,Pe)}),kl)}}})),[!h&&B!==!1&&{title:"",dataIndex:"del",render:function(ye,fe,te){var J=M[te].name;return(0,l.jsx)(ve.Z.Item,{children:(0,l.jsx)(re.ZP,{disabled:f||C&&M.length===1,icon:(0,l.jsx)(Be.Z,{icon:Pa.Z}),onClick:Oa()(Et()().mark(function le(){var se;return Et()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,K(J);case 2:se=W.sent,se!==!1&&pe(J);case 4:case"end":return W.stop()}},le)})),type:"text"})})}}]).filter(function(z){return!!z}),dataSource:M,locale:{emptyText:v},pagination:!1,rowHoverable:!1,size:"small"})}})):(0,l.jsx)("div",{className:G.empty,children:v})})},Rt=ve.Z;Rt.CollapseList=kt;var wa=function(e){return typeof e=="string"?document.querySelector("#".concat(e)):(e==null?void 0:e.current)||e},Xe=":not([disabled]):not([readonly])",Fa=["text","password","search","tel","url","number","email",""].map(function(r){return'input[type="'.concat(r,'"]').concat(Xe)}).join(", ")+", input:not([type])".concat(Xe,", textarea").concat(Xe),Ba=function(e){var t,n=wa(e);if(n){var a=(t=n.querySelector)===null||t===void 0?void 0:t.call(n,Fa);if(a!=null&&a.focus)return a.focus(),!0}},Dt=function(e){var t=(0,g.useState)(!1),n=k()(t,2),a=n[0],o=n[1];g.useEffect(function(){if(!(a||!e)){var i=Ba(e);i&&o(!0)}},[e,a,o])},wt=function(e){var t,n=e.autoFocus,a=n===void 0?!0:n,o=(0,g.useRef)(null);return Dt(a?o:void 0),(0,l.jsx)("div",{className:e.className,id:e.id,ref:o,style:(t=e.style)!==null&&t!==void 0?t:{display:e.className?void 0:"contents"},children:e.children})},za=function(e){return function(t){var n=function(i){return(0,l.jsx)(wt,u()(u()({},e||{}),{},{children:(0,l.jsx)(t,u()({},i))}))},a=t.displayName||t.name||"Component";return n.displayName="withFormHelper(".concat(a,")"),n}},q=s(35057),Ha="yunti-ui",Ft,Bt,Qa=(0,P.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.borderd,o=a===void 0?!0:a,i=e.footer,c=i===null||Array.isArray(i)&&i.length===0,d=t(Ft||(Ft=x()([`
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
    `])),n,n,c?0:"40px",n,c?0:"1px");return{custom:t(Bt||(Bt=x()([`
        `,`
      `])),o&&d)}},{hashPriority:"low"}),Ga=["className","borderd"],Ua=function(e){var t=e.className,n=e.borderd,a=n===void 0?!0:n,o=N()(e,Ga),i=Qa(u()({borderd:a},o)),c=i.styles,d=i.cx;return(0,l.jsx)(q.Z,u()(u()({},o),{},{className:d(c.custom,"".concat(Ha,"-modal"),t)}))},_=Ua;_.useModal=q.Z.useModal,_.destroyAll=q.Z.destroyAll,_.config=q.Z.config,_._InternalPanelDoNotUseOrYouWillBeFired=q.Z._InternalPanelDoNotUseOrYouWillBeFired,_.info=q.Z.info,_.success=q.Z.success,_.error=q.Z.error,_.warning=q.Z.warning,_.warn=q.Z.warn,_.confirm=q.Z.confirm;var Wl=null,Va=["to","children"],zt=function(e){var t=e.to,n=e.children,a=N()(e,Va);return(0,l.jsx)("a",u()(u()({href:"#".concat(t)},a),{},{children:n}))},Ne=(0,g.createContext)({loading:!1,Link:zt}),Ya=["to","Link","children"],Ja=function(e){var t=e.to,n=e.Link,a=e.children,o=N()(e,Ya);return n?(0,l.jsx)(n,u()(u()({to:t},o),{},{children:a})):(0,l.jsx)("a",u()(u()({href:"#".concat(t)},o),{},{children:a}))},Ka=function(e){var t=(0,g.useContext)(Ne),n=t.Link,a=t.breadcrumb;(0,g.useEffect)(function(){var i;a==null||(i=a.setItems)===null||i===void 0||i.call(a,e.items)},[a,e.items]);var o=(0,g.useCallback)(function(i,c,d,v){var m,p,f=i.href?i.href===((m=d.at(-1))===null||m===void 0?void 0:m.href):i.path===((p=d.at(-1))===null||p===void 0?void 0:p.path);if(f)return(0,l.jsx)("span",{children:i.title});var h=i.href?i.href:"/".concat(v.join("/"));return(0,l.jsx)(Ja,{Link:n,to:h,children:i.title})},[n]);return(0,l.jsx)(on.Z,u()({itemRender:o},e))},Ht=s(19993),ie=s(23806),Qt,Wa=(0,P.kc)(function(r){var e=r.css,t=r.token;return{root:e(Qt||(Qt=x()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),Xa=["className","children"],$a={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},qa=function(e){var t=e.className,n=e.children,a=N()(e,Xa),o=Wa(),i=o.styles,c=o.cx,d=(0,g.useContext)(Ne),v=d.loading,m=d.breadcrumb,p=d.Link,f=d.status,h=(0,g.useCallback)(function(){if(f){var y;return(0,l.jsx)(Ht.ZP,{extra:(0,l.jsx)(p,{to:m==null||(y=m.items)===null||y===void 0||(y=y[0])===null||y===void 0?void 0:y.path,children:(0,l.jsx)(re.ZP,{type:"primary",children:"Go Back"})}),status:f,subTitle:$a[f],title:f})}return n},[f,n,p,m==null?void 0:m.items]);return v?(0,l.jsx)(ie.Z,{active:!0,className:c(i.root,t)}):(0,l.jsx)(O.Z,u()(u()({className:c(i.root,t),gap:20,vertical:!0},a),{},{children:h()}))},_a=function(){return(0,l.jsx)(l.Fragment,{})},Gt=s(21801),ei=s(3521),ni=s.n(ei),$e=s(43382),ti=["items","onClick"],ri=["key","label"],oi=["key","label"],Ut=function(e){var t=e.items,n=t===void 0?[]:t,a=e.onClick,o=a===void 0?function(){}:a,i=N()(e,ti);if(n.length<=2)return(0,l.jsx)(Ke.Z,u()(u()({align:"end",size:12},i),{},{children:n.map(function(h){var y=h.key,C=h.label,S=N()(h,ri);return(0,l.jsx)(re.ZP,u()(u()({onClick:function(A){return o(y,A)}},S),{},{children:C}),y)})}));var c=ni()(n),d=c[0],v=d.key,m=d.label,p=N()(d,oi),f=c.slice(1);return(0,l.jsx)($e.Z.Button,u()(u()(u()({onClick:function(y){return o(v,y)}},p),{},{menu:{onClick:function(y){var C=y.key,S=y.domEvent;return o(C,S)},items:f.map(function(h){var y=h.key,C=h.label,S=h.icon,b=h.danger,A=h.disabled;return{key:y,label:C,icon:S,danger:b,disabled:A}})},overlayStyle:{minWidth:100}},i),{},{children:m}),v)},qe=s(17823),ai=["shape","size","src"],Vt=function(e){if(typeof e=="number")return e;switch(e){case"small":return 40;case"large":return 88;default:return 64}},ii=function(e){var t=e.shape,n=t===void 0?"square":t,a=e.size,o=e.src,i=N()(e,ai),c=(0,g.useMemo)(function(){return Vt(a)},[a]);return(0,l.jsx)(qe.C,u()({shape:n,size:c,src:o},i))},Yt,Jt,Kt,Wt,Xt,$t,qt,_t,er,li=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.bordered,i=o===void 0?!1:o,c=e.divider,d=c===void 0?!0:c;return{root:i?t(Yt||(Yt=x()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),n.marginXS,n.padding,n.colorBgBase,n.borderRadius,n.boxShadowTertiary):t(Jt||(Jt=x()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),n.paddingXS,n.marginXS,d&&t(Kt||(Kt=x()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),n.paddingLG,n.colorSplit)),icon:t(Wt||(Wt=x()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),a,a,n.colorPrimary,a),titleBox:t(Xt||(Xt=x()([`
        margin-bottom: `,`px;
      `])),n.marginSM),subTitle:t($t||($t=x()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),n.marginXXS,a,n.fontSize,n.colorTextSecondary),title:t(qt||(qt=x()([`
        font-size: `,`px;
        font-weight: 700;
      `])),n.fontSizeHeading5),descriptions:t(_t||(_t=x()([`
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
      `])),n.marginXXS,n.fontSize,n.colorTextSecondary,a,a,n.fontSize,a,n.fontSize,n.colorTextSecondary),rightButtons:t(er||(er=x()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),si=["className","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],ci=Qe.Paragraph,di=function(e){var t=e.className,n=e.icon,a=e.title,o=e.titleRender,i=e.subTitle,c=e.status,d=e.descriptions,v=d===void 0?[]:d,m=e.descriptionsRender,p=e.extraContent,f=p===void 0?{}:p,h=e.extraContentRender,y=e.bordered,C=e.divider,S=N()(e,si),b=li({bordered:y,divider:C}),A=b.styles,T=b.cx,L=(0,g.useMemo)(function(){return!n||typeof n=="string"?{src:n,size:i?"large":"default"}:(i&&n.size===void 0&&(n.size="large"),n)},[n,i]),I=(0,g.useMemo)(function(){var j=(0,l.jsx)("span",{className:A.title,children:a});return o?o(j):j},[A.title,a,o]),B=(0,g.useMemo)(function(){var j=[],Z=je()(v.filter(function(Q){return!!Q}).entries()),H;try{for(Z.s();!(H=Z.n()).done;){var F=k()(H.value,2),K=F[0],D=F[1],M=D.icon,R=D.text;(c||K>=1)&&j.push((0,l.jsx)(Sa,{dashed:!1,type:"vertical"},"divider-".concat(K))),j.push((0,l.jsxs)(O.Z,{align:"center",gap:4,children:[M&&(0,l.jsx)(ce.Z,{title:M.tooltip,children:M.content}),(0,l.jsx)("span",{children:R})]},"desc-".concat(K)))}}catch(Q){Z.e(Q)}finally{Z.f()}return m?m(j):j},[v,m,c]),w=(0,g.useMemo)(function(){if(!f&&!h)return null;var j=(0,l.jsx)(Ut,u()({className:A.rightButtons},f));return h?h(j):j},[f,h,A.rightButtons]),U=(0,g.useContext)(Ne),Y=U.loading,G=U.status;return Y?(0,l.jsxs)(O.Z,{className:T(A.root,t),gap:20,children:[(0,l.jsx)(O.Z,{children:(0,l.jsx)(ie.Z.Avatar,{active:!0,className:A.icon,shape:L==null?void 0:L.shape,size:Vt(L==null?void 0:L.size)})}),(0,l.jsxs)(O.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)("div",{className:A.titleBox,children:[(0,l.jsx)(ie.Z.Input,{active:!0,size:25}),i&&(0,l.jsx)("div",{className:A.subTitle,children:(0,l.jsx)(ie.Z.Input,{active:!0,size:18})})]}),(0,l.jsx)(ie.Z.Input,{active:!0,size:18})]}),(0,l.jsx)(O.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,l.jsx)(ie.Z.Button,{active:!0})})]}):G?null:(0,l.jsxs)(O.Z,u()(u()({className:T(A.root,t),gap:20},S),{},{children:[L&&(0,l.jsx)(O.Z,{children:(0,l.jsx)(ii,u()({className:A.icon},L))}),(0,l.jsxs)(O.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)(O.Z,{className:A.titleBox,vertical:!0,children:[I,i&&(0,l.jsx)(ci,{className:A.subTitle,ellipsis:{rows:2},children:i})]}),(0,l.jsxs)(O.Z,{align:"center",className:A.descriptions,gap:4,children:[c&&(0,l.jsx)(Gt.Z,u()({},c)),B]})]}),(0,l.jsx)(O.Z,{align:"center",flex:"1",justify:"flex-end",children:w})]}))},nr,ui=(0,P.kc)(function(r){var e=r.css,t=r.token;return{root:e(nr||(nr=x()([`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: `,"px ","px ",`px;
      `])),t.padding,t.paddingLG,t.paddingXL)}},{hashPriority:"low"}),vi=["loading","className","children","Link","status","gap"],mi=function(e){var t=un(),n=e.loading,a=e.className,o=e.children,i=e.Link,c=i===void 0?t||zt:i,d=e.status,v=e.gap,m=v===void 0?16:v,p=N()(e,vi),f=ui(p),h=f.styles,y=f.cx,C=(0,g.useState)([]),S=k()(C,2),b=S[0],A=S[1];return(0,l.jsx)(O.Z,u()(u()({className:y(h.root,a),gap:m,vertical:!0},p),{},{children:(0,l.jsx)(Ne.Provider,{value:{loading:n,Link:c,breadcrumb:{items:b,setItems:A},status:d},children:o})}))},tr,pi=(0,P.kc)(function(r){var e=r.css,t=r.token;return{root:e(tr||(tr=x()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),t.fontFamily,t.fontWeightStrong,t.lineHeight,t.colorText)}}),fi=["className"],hi=function(e){var t=e.className,n=N()(e,fi),a=pi(),o=a.cx,i=a.styles;return(0,l.jsx)("h2",u()({className:o(i.root,t)},n))},me=mi;me.Breadcrumb=Ka,me.Title=hi,me.Header=di,me.Content=qa,me.Footer=_a;var rr,or,ar,ir,lr,xi=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(rr||(rr=x()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.fontFamily,t.colorText,t.colorBgContainer,t.borderRadius*2,t.boxShadowTertiary),bordered:e(or||(or=x()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),t.colorBorder),hoverable:e(ar||(ar=x()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),t.motionDurationMid,t.motionDurationMid,t.boxShadow),text:e(ir||(ir=x()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),t.colorTextSecondary),error:e(lr||(lr=x()([`
      color: `,`;
    `])),t.colorErrorText)}}),gi=["className","bordered","hoverable","children"],yi=function(e){var t=e.className,n=e.bordered,a=n===void 0?!1:n,o=e.hoverable,i=o===void 0?!0:o,c=e.children,d=N()(e,gi),v=xi(),m=v.cx,p=v.styles;return(0,l.jsx)("div",u()(u()({className:m(p.root,a&&p.bordered,i&&p.hoverable,t)},d),{},{children:c}))},sr,bi=(0,P.kc)(function(r){var e=r.css,t=r.token;return{root:e(sr||(sr=x()([`
        padding: 12px 24px 20px;
      `])))}},{hashPriority:"low"}),Ci=["className","children"],Ai=function(e){var t=e.className,n=e.children,a=N()(e,Ci),o=bi(),i=o.styles,c=o.cx;return(0,l.jsx)(O.Z,u()(u()({className:c(i.root,t),gap:20,vertical:!0},a),{},{children:n}))},cr,Si=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls,a=70;return{root:e(cr||(cr=x()([`
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
      `])),n,n,n,n,a,n,a)}},{hashPriority:"low"}),Li=["className","colon","column","size"],ji=function(e){var t=e.className,n=e.colon,a=n===void 0?!1:n,o=e.column,i=o===void 0?2:o,c=e.size,d=c===void 0?"small":c,v=N()(e,Li),m=Si(),p=m.cx,f=m.styles;return(0,l.jsx)(ba,u()({className:p(f.root,t),colon:a,column:i,size:d},v))},Mi=s(38377),dr,ur,vr,mr,pr,fr,hr,xr,gr,Ni=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.divider,i=o===void 0?!0:o,c=e.iconBg,d=c===void 0?!0:c;return{root:t(dr||(dr=x()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),i?20:0,i&&t(ur||(ur=x()([`
          border-bottom: 1px solid `,`;
        `])),n.colorSplit)),icon:t(vr||(vr=x()([`
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
      `])),a,n.colorPrimary,d&&t(mr||(mr=x()([`
            background-color: `,`;
          `])),n.colorBgLayout),a),titleBox:t(pr||(pr=x()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),n.marginXXS),title:t(fr||(fr=x()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.fontWeightStrong),description:t(hr||(hr=x()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),a,n.colorTextSecondary),extra:t(xr||(xr=x()([`
        margin-top: -4px;
      `]))),rightButtons:t(gr||(gr=x()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),Zi=["className","icon","title","description","extra","divider"],Oi=["className","shape","size"],Ei=["children"],Ti=Qe.Paragraph,Pi=function(e){var t=e.className,n=e.icon,a=e.title,o=e.description,i=e.extra,c=e.divider,d=N()(e,Zi),v=Ni({divider:c,iconBg:!(n!=null&&n.src)}),m=v.styles,p=v.cx,f=n||{},h=f.className,y=f.shape,C=y===void 0?"square":y,S=f.size,b=S===void 0?72:S,A=N()(f,Oi),T=i||{},L=T.children,I=N()(T,Ei);return(0,l.jsxs)(O.Z,u()(u()({className:p(m.root,t),gap:20},d),{},{children:[n&&(0,l.jsx)(O.Z,{children:(0,l.jsx)(qe.C,u()({className:p(m.icon,h),shape:C,size:b},A))}),(0,l.jsxs)(O.Z,{flex:"1",vertical:!0,children:[(0,l.jsxs)(O.Z,{className:m.titleBox,gap:4,children:[(0,l.jsx)("div",{className:m.title,children:a}),i&&(0,l.jsx)(O.Z,{align:"flex-start",className:m.extra,justify:"flex-end",onClick:function(w){return w.stopPropagation()},children:(0,l.jsx)($e.Z,u()(u()({},I),{},{children:L||(0,l.jsx)(re.ZP,{icon:(0,l.jsx)(Be.Z,{icon:Mi.Z}),size:"small",type:"text"})}))})]}),o&&(0,l.jsx)(Ti,{className:m.description,ellipsis:{rows:2},children:o})]})]}))},Ze=yi;Ze.Header=Pi,Ze.Content=Ai,Ze.Descriptions=ji;var Ii=s(73239),ki=s(10714),yr,br,Cr,Ar,Ri=(0,P.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.size,i=e.segmented,c=function(){return i?i!==!0?i.gap:!0:0}(),d=function(){if(i)return i!==!0?i.borderRadius:!0}(),v=function(){var C={small:n.sizeSM,middle:n.size,large:n.sizeLG};return typeof c=="string"?C[c]:c===!0?o?C[o]:C.middle:c||0},m=function(){var C={small:n.controlHeightSM,middle:n.controlHeight,large:n.controlHeightLG};if(d===!0)return o?C[o]:C.middle;if(d||d===0)return d},p=m()&&t(yr||(yr=x()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),m()),f=t(br||(br=x()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),v()),h=i===!0||i&&!i.bordered;return{custom:t(Cr||(Cr=x()([`
        `,`
        `,`
        `,`
      `])),p,f,h&&t(Ar||(Ar=x()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),a,a,n.colorPrimary))}},{hashPriority:"low"}),Di=["className"],Sr=Ii.ZP,wi=function(e){var t=e.className,n=N()(e,Di);n.segmented&&(n.optionType="button");var a=Ri(n),o=a.styles,i=a.cx;return(0,l.jsx)(ki.Z,u()(u()({},n),{},{className:i(o.custom,t)}))};Sr.Group=wi;var Xl=null,Lr,Fi=(0,P.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{table:e(Lr||(Lr=x()([`
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
    `])),n,t.colorTextTertiary)}}),Bi=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],jr=function(e){var t=e.rootStyle,n=e.rootClassName,a=e.icon,o=e.title,i=e.variant,c=e.defaultActive,d=e.extra,v=e.className,m=N()(e,Bi),p=Fi(),f=p.cx,h=p.styles;return(0,l.jsx)(Ie,{className:n,style:t,icon:a,title:o,variant:i,defaultActive:c,extra:d,children:(0,l.jsx)($.Z,u()({className:f(h.table,v),pagination:!1,rowHoverable:!1,size:"small"},m))})},zi=["columns"],ee=function(e){var t=e.columns,n=N()(e,zi),a=(0,g.useMemo)(function(){return t==null?void 0:t.map(function(o){if(o.render)return o;if(o.ellipsis&&o.ellipsis!==!0&&o.ellipsis.showTitle||o.ellipsis===!0){var i=o.ellipsis===!0?{}:o.ellipsis;return u()(u()({},o),{},{ellipsis:{showTitle:!1},render:function(d){return d||d===0?(0,l.jsx)(ce.Z,u()(u()({},i),{},{placement:"topLeft",title:d,children:d})):"-"}})}return o.render||(o.render=function(c){return c!=null?c:"-"}),o})},[t]);return(0,l.jsx)($.Z,u()(u()({},n),{},{columns:a}))};ee.displayName="Table",ee.SELECTION_COLUMN=$.Z.SELECTION_COLUMN,ee.EXPAND_COLUMN=$.Z.EXPAND_COLUMN,ee.SELECTION_ALL=$.Z.SELECTION_ALL,ee.SELECTION_INVERT=$.Z.SELECTION_INVERT,ee.SELECTION_NONE=$.Z.SELECTION_NONE,ee.Column=$.Z.Column,ee.ColumnGroup=$.Z.ColumnGroup,ee.Summary=$.Z.Summary,ee.Collapse=jr;var $l=null,Hi=s(79945),Qi=s(65130),Gi=s(75608),Ui=s(74583),Vi=s(49409),Yi=s(17432),Ji=s(6271),Ki=s(89379),Wi=s(11310),Xi=s(13545),$i=s(3267),qi=s(62977),_i=s(15356),el=s(32813),nl=s(89915),tl=s(79852),rl=s(39427),ol=s(97257),al=s(15157),il=s(86102),ll=s(6663),sl=s(88492),cl=s(82160),dl=s(70473),ul=s(50918),vl=s(4551),ml=s(38008),pl=s(99288),fl=s(43662),hl=s(87821),xl=s(7460),gl=s(71708),yl=s(20459),bl=s(5144),Cl=s(19333),Al=s(66838),Sl=s(46489),Ll=s(39426),jl=s(75185),Ml=s(72081),Nl=s(44083),Zl=s(10286),Ol=s(33941),El=s(47111),Tl=s(56036),Pl=s(43880),Il=s(97512)}}]);
