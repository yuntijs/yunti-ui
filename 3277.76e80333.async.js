"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3277],{73277:function(Pl,en,s){s.r(en),s.d(en,{Affix:function(){return Bi.Z},Alert:function(){return at},Anchor:function(){return zi.Z},AntdMentions:function(){return Hi.Z},App:function(){return pt},AutoComplete:function(){return Qi.Z},Avatar:function(){return Xe.C},BackTop:function(){return Gi.Z},Badge:function(){return Ht.Z},BaseMonacoEditor:function(){return Qe},Breadcrumb:function(){return nn.Z},Button:function(){return re.ZP},Calendar:function(){return Ui.Z},Card:function(){return fa.Z},Carousel:function(){return Vi.Z},Cascader:function(){return Yi.Z},Checkbox:function(){return Ji.Z},Col:function(){return Ge.Z},Collapse:function(){return Ue.Z},CollapseGroup:function(){return Pe},CollapseTable:function(){return Ar},ColorPicker:function(){return Ki.Z},ConfigContext:function(){return ye},ConfigProvider:function(){return kr},DatePicker:function(){return Wi.default},Descriptions:function(){return Ve},Divider:function(){return Lt},DragPanel:function(){return Hr},Drawer:function(){return La},Dropdown:function(){return We.Z},Empty:function(){return On.Z},Flex:function(){return Z.Z},FloatButton:function(){return Xi.Z},Form:function(){return It},FormCollapseList:function(){return Pt},FormHelper:function(){return Dt},Grid:function(){return $i.ZP},HeaderButtonGroup:function(){return Qt},Highlighter:function(){return Zl.ZP},Image:function(){return qi.Z},Input:function(){return _i.Z},InputNumber:function(){return tt.Z},Layout:function(){return el.Z},List:function(){return nl.Z},Logo:function(){return Jr},Markdown:function(){return Ol.Z},Mentions:function(){return Vo},Menu:function(){return tl.Z},Modal:function(){return X},MonacoController:function(){return Wo.Q},MonacoDiffEditor:function(){return _o},MonacoEditor:function(){return qo},NotificationGlobalStyle:function(){return dt},Page:function(){return me},Pagination:function(){return ol.Z},Popconfirm:function(){return al.Z},Popover:function(){return il.Z},ProCard:function(){return Ne},Progress:function(){return ll.Z},QRCode:function(){return sl.Z},Radio:function(){return br},Rate:function(){return cl.Z},Result:function(){return Bt.ZP},Row:function(){return et.Z},Segmented:function(){return dl.Z},Select:function(){return ul.default},Skeleton:function(){return ie.Z},Slider:function(){return nt.Z},SliderInput:function(){return ea},Space:function(){return Ye.Z},Spin:function(){return vl.Z},Statistic:function(){return ml.Z},Steps:function(){return pl.Z},Switch:function(){return fl.Z},SyntaxHighlighter:function(){return El.Z},Table:function(){return $},Tabs:function(){return hl.Z},Tag:function(){return xl.Z},TimePicker:function(){return bl.Z},Timeline:function(){return yl.Z},Tooltip:function(){return ce.Z},Tour:function(){return Cl.Z},Transfer:function(){return Al.Z},Tree:function(){return Sl.Z},TreeSelect:function(){return Ll.Z},Typography:function(){return Se},Upload:function(){return jl.Z},Watermark:function(){return Nl.Z},message:function(){return rl.ZP},notification:function(){return ma},theme:function(){return gl.Z},useAutoFocus:function(){return kt},useCdnFn:function(){return ln},useLink:function(){return sn},useResponsive:function(){return Tl.F},useTheme:function(){return I.Fg},useThemeMode:function(){return Kn.r},version:function(){return Ml.Z},withFormHelper:function(){return wa}});var nn=s(79318),jr=s(77117),u=s.n(jr),Mr=s(95530),j=s.n(Mr),Nr=s(95428),x=s(50959),Zr=s(18840),h=s.n(Zr),I=s(4377),tn,Or=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(tn||(tn=h()([`
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
    `])),t.margin,n,t.paddingSM,t.paddingSM,t.paddingSM,t.fontSize,t.padding,t.padding,t.paddingSM,t.paddingSM,t.paddingXS,t.colorBgContainer)}}),l=s(11527),Er=["className","variant"],Tr=Nr.Z.Group,Pe=function(e){var t=e.className,n=e.variant,a=j()(e,Er),o=Or(),i=o.styles,c=o.cx;return(0,l.jsx)(Tr,u()({className:c(i.root,t),collapsible:n==="pure"?"icon":"header",variant:n},a))},rn=s(56264),Pr="https://unpkg.com",Ir="https://registry.npmmirror.com",on=function(e){var t=e.pkg,n=e.version,a=n===void 0?"latest":n,o=e.path,i=e.proxy;switch(i){case"unpkg":return(0,rn.Z)(Pr,"".concat(t,"@").concat(a),o);default:return(0,rn.Z)(Ir,t,a,"files",o)}},ye=(0,x.createContext)(null),kr=(0,x.memo)(function(r){var e=r.children,t=r.config;return(0,l.jsx)(ye.Provider,{value:t,children:e})}),an=function(e){var t=e.pkg,n=e.version,a=e.path;return on({path:a,pkg:t,proxy:"aliyun",version:n})},ln=function(){var e=(0,x.useContext)(ye);return e?(e==null?void 0:e.proxy)!=="custom"?function(t){var n=t.pkg,a=t.version,o=t.path;return on({path:o,pkg:n,proxy:e.proxy,version:a})}:(e==null?void 0:e.customCdnFn)||an:an},sn=function(){var e=(0,x.useContext)(ye);return e==null?void 0:e.Link},Dr=s(28152),R=s.n(Dr),Rr=s(69343),cn=s(61478),Z=s(94614),re=s(34309),Fr=s(7681),wr=s.n(Fr),dn,un,vn,mn,pn,Br=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(dn||(dn=h()([`
      overflow: hidden;
    `]))),wrapper:e(un||(un=h()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),t.marginLG),content:e(vn||(vn=h()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.borderRadiusLG,t.boxShadowSecondary),dragWrapper:e(mn||(mn=h()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:e(pn||(pn=h()([`
      cursor: move;
    `])))}}),zr=["title","classNames","defaultPosition","onPositionChange"],Hr=(0,x.memo)(function(r){var e=r.title,t=r.classNames,n=t===void 0?{}:t,a=r.defaultPosition,o=r.onPositionChange,i=j()(r,zr),c=Br(),d=c.styles,v=c.cx,p=(0,x.useState)({left:0,top:0,bottom:0,right:0}),m=R()(p,2),f=m[0],g=m[1],y=(0,x.useRef)(null),b=function(S,C){var T,L=window.document.documentElement,k=L.clientWidth,B=L.clientHeight,w=(T=y.current)===null||T===void 0?void 0:T.getBoundingClientRect();w&&g({left:-w.left+C.x,right:k-(w.right-C.x),top:-w.top+C.y,bottom:B-(w.bottom-C.y)})};return(0,l.jsx)(cn.Z,u()(u()({},i),{},{classNames:u()(u()({},n),{},{wrapper:v(d.wrapper,n.wrapper),content:v(d.content,n.content)}),destroyOnClose:!0,drawerRender:function(S){return(0,l.jsx)(wr(),{bounds:f,defaultPosition:a,handle:".".concat(d.dragHandle),nodeRef:y,onStart:function(T,L){return b(T,L)},onStop:function(T,L){o==null||o({x:L.x,y:L.y})},children:(0,l.jsx)("div",{className:d.dragWrapper,ref:y,children:S})})},mask:!1,rootClassName:d.root,title:(0,l.jsxs)(Z.Z,{align:"center",className:d.dragHandle,children:[(0,l.jsx)(Z.Z,{flex:2,children:e}),(0,l.jsx)(Z.Z,{children:(0,l.jsx)(re.ZP,{className:d.dragHandle,icon:(0,l.jsx)(Rr.Z,{}),type:"text"})})]})}))}),Qr=s(24819),Gr=s(62812),Ie=s.n(Gr),Ur=(0,x.memo)(function(r){var e=Object.assign({},(Ie()(r),r));return(0,l.jsx)("svg",u()(u()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},e),{},{children:(0,l.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),fn=(0,x.memo)(function(r){var e=Object.assign({},(Ie()(r),r));return(0,l.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},e),{},{children:[(0,l.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,l.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,l.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),hn=(0,x.memo)(function(r){var e=Object.assign({},(Ie()(r),r));return(0,l.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,l.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,l.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,l.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,l.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,l.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,l.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,l.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),xn,Vr=(0,I.kc)(function(r){var e=r.css;return{extraTitle:e(xn||(xn=h()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),Yr=["type","size","style","extra","className"],Jr=(0,x.memo)(function(r){var e=r.type,t=e===void 0?"img":e,n=r.size,a=n===void 0?32:n,o=r.style,i=r.extra,c=r.className,d=j()(r,Yr),v=(0,I.Fg)(),p=Vr(),m=p.styles,f;switch(t){case"text":{f=(0,l.jsx)(hn,u()({className:c,height:a,style:o,width:a*2.9375},d));break}case"combine":{f=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(fn,u()({height:a,style:o,width:a},d)),(0,l.jsx)(hn,{style:{height:a,marginLeft:Math.round(a/4),width:"auto"}})]});break}case"img":default:{f=(0,l.jsx)(fn,u()({height:a,style:o,width:a},d));break}}if(!i)return f;var g=Math.round(a/3*1.9);return(0,l.jsxs)(Qr.D,u()(u()({align:"center",className:c,horizontal:!0,style:o},d),{},{children:[f,(0,l.jsx)(Ur,{style:{color:v.colorFill,height:g,width:g}}),(0,l.jsx)("div",{className:m.extraTitle,style:{fontSize:g},children:i})]}))}),Kr=s(21320),U=s.n(Kr),Wr=s(41979),Xr=s(63850),$r=s(62304),qr=s(31463),_r=s(50834),eo=s(12922),O=s(65694),no=s(15033),ke=s.n(no),to=s(96345),De=s.n(to),ro=s(71160),oo=s.n(ro),ao=s(41607),io=s.n(ao),lo=s(13762),Re=s.n(lo),so=s(41206),Fe=s.n(so),be=function(r){Re()(t,r);var e=Fe()(t);function t(){return ke()(this,t),e.apply(this,arguments)}return De()(t,[{key:"createDOM",value:function(a){var o=oo()(io()(t.prototype),"createDOM",this).call(this,a);return o.classList.add("align-middle"),o}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(a){return new t(a.__text,a.__key)}},{key:"importJSON",value:function(a){var o=(0,O.MX)(a.text);return o.setFormat(a.format),o.setDetail(a.detail),o.setMode(a.mode),o.setStyle(a.style),o}}]),t}(O.R2);function Il(r){return new be(r)}var oe=s(31692),Ce=s(95138),co=s(90696),J=s.n(co),gn=s(244),ce=s(32588),uo=s(55608),yn=(0,x.createContext)(null),vo=(0,x.memo)(function(r){var e=r.children,t=r.value;return(0,l.jsx)(yn.Provider,{value:t,children:e})}),mo=function(){var e=(0,x.useContext)(yn);return e==null?void 0:e.optionsMap},po=s(457),fo=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,ho="\\(",xo=function(e){return"(?:"+e.join("|")+")"},go=function(e,t){var n=e.length===0?"":"(?!"+e.join("|")+")";return n+"[^\\s"+t+"]"},yo=function(e){return"(?:\\.[ |$]|\\s|["+e+"]|)"},bo=75,Co=function(e,t){var n=(0,x.useRef)(null),a=(0,oe.g)(),o=R()(a,1),i=o[0],c=(0,po.y)(e),d=R()(c,3),v=d[0],p=d[1],m=d[2],f=(0,x.useCallback)(function(y){var b=(0,O.dL)(),A=b==null?void 0:b.getNodes();if(!v&&(A==null?void 0:A.length)===1&&i.dispatchCommand(t,void 0),v&&(0,O.iO)(b)){y.preventDefault();var S=(0,O.gI)(e);if((0,O.k$)(S))return t&&i.dispatchCommand(t,void 0),S.remove(),!0}return!1},[v,e,t,i]),g=(0,x.useCallback)(function(y){y.stopPropagation(),m(),p(!0)},[p,m]);return(0,x.useEffect)(function(){var y=n.current;return y&&y.addEventListener("click",g),function(){y&&y.removeEventListener("click",g)}},[g]),(0,x.useEffect)(function(){return(0,Ce.qV)(i.registerCommand(O.MK,f,O.KB),i.registerCommand(O.aR,f,O.KB))},[i,m,f]),[n,v]},kl=function(){var e=useRef(null),t=useState(!1),n=_slicedToArray(t,2),a=n[0],o=n[1],i=useCallback(function(c){c.stopPropagation(),o(function(d){return!d})},[]);return useEffect(function(){var c=e.current;return c&&c.addEventListener("click",i),function(){c&&c.removeEventListener("click",i)}},[i]),[e,a,o]};function Ao(r,e,t,n){return new RegExp((e?"(^|\\s|".concat(e,")("):"(^|\\s)(")+xo(r)+"((?:"+go(r,t)+(n?yo(t):"")+"){0,"+bo+"}))$")}function So(r,e,t,n,a){var o=Ao(e,t,n,a).exec(r);if(o!==null){var i=o[1],c=o[2],d=o[3];if(c.length>0)return{leadOffset:o.index+i.length,matchingString:d,replaceableString:c}}return null}var Lo=function(e,t){var n=t.punctuation,a=t.preTriggerChars,o=t.allowSpaces,i=(0,x.useState)(null),c=R()(i,2),d=c[0],v=c[1],p=(0,x.useCallback)(function(m){var f=So(m,e,a,n,o);if(f){var g=f.replaceableString,y=f.matchingString,b=g.lastIndexOf(y),A=b===-1?g:g.slice(0,Math.max(0,b))+g.slice(Math.max(0,b+y.length));if(v(A||null),f.replaceableString)return f}else v(null);return null},[a,o,n,e]);return{trigger:d,checkForMentionMatch:p}},bn,Cn,An,jo=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.isError,c=function(){return i?o?{background:n.colorErrorBgActive,border:n.colorErrorBorderHover,color:n.colorErrorTextActive}:{background:n.colorErrorBg,border:n.colorErrorBorder,color:n.colorErrorText}:o?{background:n.colorInfoBgHover,border:n.colorInfoBorder,color:n.colorInfoText}:{background:n.colorFillTertiary,border:"transparent",color:n.colorInfoText}},d=c(),v=d.background,p=d.border,m=d.color;return{root:t(bn||(bn=h()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),n.fontFamilyCode,m,v,p,n.borderRadius),text:t(Cn||(Cn=h()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.colorTextSecondary),error:t(An||(An=h()([`
        color: `,`;
      `])),n.colorErrorText)}}),Sn=(0,O.fA)("INSERT_MENTION_COMMAND"),Ln=(0,O.fA)("DELETE_MENTION_COMMAND"),jn=(0,O.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Mn=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,Mo=(0,x.memo)(function(r){var e=r.nodeKey,t=r.variable,n=mo(),a=(0,oe.g)(),o=R()(a,1),i=o[0],c=Co(e,Ln),d=R()(c,2),v=d[0],p=d[1],m=n==null?void 0:n[t],f=jo({isSelected:p,isError:!m||!!m.error}),g=f.styles;(0,x.useEffect)(function(){if(!i.hasNodes([de]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[i]);var y=(0,l.jsx)(Z.Z,{className:g.root,ref:v,children:(0,l.jsxs)(Z.Z,{align:"center",gap:2,children:[(!m||m.error)&&(0,l.jsx)(gn.Z,{className:g.error,icon:uo.Z}),(m==null?void 0:m.icon)&&(0,l.jsx)(Z.Z,{children:m.icon}),(0,l.jsx)(Z.Z,{className:g.text,gap:2,title:(m==null?void 0:m.label)||t,children:(0,l.jsx)("span",{children:(m==null?void 0:m.label)||t})})]})});return m!=null&&m.error?(0,l.jsx)(ce.Z,{title:m==null?void 0:m.error,children:y}):y}),de=function(r){Re()(t,r);var e=Fe()(t);function t(n,a,o){var i;return ke()(this,t),i=e.call(this,o),U()(J()(i),"__variable",void 0),i.__variable=n,i}return De()(t,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var a=document.createElement("div");return a.style.display="inline-flex",a.style.alignItems="center",a.style.verticalAlign="middle",a}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,l.jsx)(Mo,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var a=this.getLatest();return a.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(a){return new t(a.__variable)}},{key:"importJSON",value:function(a){var o=we(a.variable);return o}}]),t}(O.Ij);function we(r){return new de(r)}function Dl(r){return r instanceof de}var Rl=(0,O.fA)("INSERT_MENTION_COMMAND"),Fl=(0,O.fA)("DELETE_MENTION_COMMAND"),wl=(0,O.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Bl=(0,O.fA)("UPDATE_MENTIONS_OPTIONS"),No=function(e,t,n){if(e.isSimpleText())for(var a=e.getPreviousSibling(),o=e.getTextContent(),i=e,c;;){c=t(o);var d=c===null?"":o.slice(c.end);if(o=d,d===""){var v=i.getNextSibling();if((0,O.Gg)(v)){d=i.getTextContent()+v.getTextContent();var p=t(d);if(p===null){v.markDirty();return}else if(p.start!==0)return}}else{var m=t(d);if(m!==null&&m.start===0)return}if(c===null)return;if(!(c.start===0&&(0,O.Gg)(a)&&a.isTextEntity())){var f=void 0;if(c.start===0){var g=i.splitText(c.end),y=R()(g,2);f=y[0],i=y[1]}else{var b=i.splitText(c.start,c.end),A=R()(b,3);f=A[1],i=A[2]}var S=n(f);if(f.replace(S),i==null)return}}};function Zo(r){var e=r.split(`
`);return JSON.stringify({root:{children:e.map(function(t){return{children:[{detail:0,format:0,mode:"normal",style:"",text:t,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Oo=(0,x.memo)(function(r){var e=r.onInsert,t=(0,oe.g)(),n=R()(t,1),a=n[0];(0,x.useEffect)(function(){if(!a.hasNodes([de]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[a]);var o=(0,x.useCallback)(function(d){e&&e();var v=d.getTextContent().slice(2,-2);return(0,O.U2)(we(v))},[e]),i=(0,x.useCallback)(function(d){var v=Mn.exec(d);if(v===null)return null;var p=v.index,m=p+v[0].length;return{end:m,start:p}},[]),c=(0,x.useCallback)(function(d){return No(d,i,o)},[o,i]);return(0,x.useEffect)(function(){return Mn.lastIndex=0,(0,Ce.qV)(a.registerNodeTransform(be,c))},[]),null}),Nn=(0,x.memo)(function(r){var e=r.onInsert,t=r.onDelete,n=(0,oe.g)(),a=R()(n,1),o=a[0];return(0,x.useEffect)(function(){if(!o.hasNodes([de]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,Ce.qV)(o.registerCommand(Sn,function(i){o.dispatchCommand(jn,null);var c=we(i);return(0,O.od)([c]),e&&e(),!0},O.VN),o.registerCommand(Ln,function(){return t&&t(),!0},O.VN))},[o,e,t]),null});Nn.displayName="MentionNodePlugin";var Zn=s(40268),Eo=s(10422),To=function(r){Re()(t,r);var e=Fe()(t);function t(n,a,o){var i;return ke()(this,t),i=e.call(this,n),U()(J()(i),"label",void 0),U()(J()(i),"value",void 0),U()(J()(i),"icon",void 0),U()(J()(i),"extraElement",void 0),U()(J()(i),"keywords",void 0),U()(J()(i),"keyboardShortcut",void 0),U()(J()(i),"onSelect",void 0),U()(J()(i),"disabled",void 0),U()(J()(i),"data",void 0),i.value=n,i.label=a,i.keywords=o.keywords||[],i.icon=o.icon,i.extraElement=o.extraElement,i.keyboardShortcut=o.keyboardShortcut,i.onSelect=o.onSelect.bind(J()(i)),i.disabled=o.disabled,i.data=o.data,i}return De()(t)}(Zn.n),Po=function(e,t){var n=(0,oe.g)(),a=R()(n,1),o=a[0],i=(0,x.useMemo)(function(){var c=e.map(function(v){return new To(v.value,v.label,{icon:v.icon,onSelect:function(){o.dispatchCommand(Sn,v.value)},disabled:v.disabled,data:v.data,extraElement:v.extraElement,keywords:v.keywords,keyboardShortcut:v.keyboardShortcut})});if(!t)return c;var d=new RegExp(t,"i");return c.filter(function(v){var p;return d.test(v.label)||((p=v.keywords)===null||p===void 0?void 0:p.some(function(m){return d.test(m)}))})},[e,t,o]);return{options:i}},On=s(27387),Ae=s(17575),Io=s(5726),fe=s.n(Io),ko=s(92117),Do=s.n(ko),Ro=s(45832),Fo=["time","format","relativeTime","tooltip"];fe().extend(Do());var Se=Ae.Z,Be=function(e){return fe()(e?new Date(e):new Date).fromNow()},wo=function(e){var t,n=e.time,a=e.format,o=e.relativeTime,i=o===void 0?!0:o,c=e.tooltip,d=j()(e,Fo),v=(0,x.useState)(Be(n)),p=R()(v,2),m=p[0],f=p[1],g=(0,x.useCallback)(function(S){var C=fe()(),T=fe()(S),L=C.diff(T);if(L>0&&L<60*60*1e3)return setInterval(function(){f(Be(S))},60*1e3)},[]);(0,x.useEffect)(function(){var S;return i&&(S=g(new Date(n))),function(){S&&clearInterval(S)}},[i,g,n]),(0,x.useEffect)(function(){if(i){var S=Be(n);S!==m&&(f(S),g(new Date(n)))}},[n,i,m,g]);var y=fe()(n).format(a||"YYYY-MM-DD HH:mm:ss"),b=i?m:y,A=(t=c==null?void 0:c.title)!==null&&t!==void 0?t:i?y:void 0;return A&&(0,Ro.Z)(d,"ellipsis.tooltip.title",void 0),(0,l.jsx)(ce.Z,u()(u()({},c||{}),{},{title:A,children:(0,l.jsx)(Se.Text,u()(u()({},d),{},{children:b}))}))};Se.Time=wo;var ze=Se,En,Tn,Pn,In,kn,Dn,Rn,He=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.disabled,c=t(En||(En=h()([`
      background-color: `,`;
    `])),n.colorFillTertiary);return{anchor:t(Tn||(Tn=h()([`
        z-index: 9999;
      `]))),menuEmpty:t(Pn||(Pn=h()([`
        padding: `,`px;
      `])),n.padding),menuOverlay:t(In||(In=h()([`
        overflow: auto;

        width: 240px;
        max-height: 320px;
        margin-top: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.marginXXS,n.colorBgElevated,n.borderRadius,n.boxShadow),menuItem:t(kn||(kn=h()([`
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
      `])),i?"not-allowed":"pointer",i?"none":"all",n.paddingSM/2,n.paddingSM,n.borderRadius,i?n.colorTextDisabled:n.colorText,n.fontSize,n.lineHeight,o&&c,c),menuItemIcon:t(Dn||(Dn=h()([`
        color: `,`;
      `])),n.colorInfoText),menuItemLabel:t(Rn||(Rn=h()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Bo=ze.Text,Fn=(0,x.memo)(function(r){var e=r.index,t=r.isSelected,n=r.onClick,a=r.onMouseEnter,o=r.option,i=r.queryString,c=He({isSelected:t,disabled:o.disabled}),d=c.styles,v=o.label,p=(0,x.useMemo)(function(){var y=v,b="",A="";if(i){var S=new RegExp(i,"i"),C=S.exec(o.label);C&&(y=v.slice(0,Math.max(0,C.index)),b=C[0],A=v.slice(Math.max(0,C.index+C[0].length)))}return{before:y,middle:b,after:A}},[o.label,i,v]),m=p.before,f=p.middle,g=p.after;return(0,l.jsxs)(Z.Z,{align:"center",className:d.menuItem,gap:4,onClick:function(){return n(e,o)},onMouseEnter:function(){return a(e,o)},ref:o.setRefElement,tabIndex:-1,children:[(0,l.jsx)(Z.Z,{className:d.menuItemIcon,children:o.icon}),(0,l.jsxs)("div",{className:d.menuItemLabel,title:o.label,children:[m,(0,l.jsx)(Bo,{mark:!0,children:f}),g]}),(0,l.jsx)(Z.Z,{children:o.extraElement})]},o.key)});Fn.displayName="MentionMenuItem";var zo=(0,x.memo)(function(r){var e=r.selectedIndex,t=r.options,n=r.onClick,a=r.onMouseEnter,o=r.queryString,i=He({}),c=i.styles;return(0,l.jsxs)(l.Fragment,{children:[t.length===0&&(0,l.jsx)(On.Z,{className:c.menuEmpty}),t.map(function(d,v){return(0,l.jsx)(Fn,{index:v,isSelected:e===v,onClick:n,onMouseEnter:a,option:d,queryString:o},d.key)})]})}),Ho=(0,x.memo)(function(r){var e=r.triggers,t=r.options,n=t===void 0?[]:t,a=r.allowSpaces,o=a===void 0?!0:a,i=r.punctuation,c=i===void 0?fo:i,d=r.preTriggerChars,v=d===void 0?ho:d,p=r.onSelect,m=He({}),f=m.styles,g=(0,oe.g)(),y=R()(g,1),b=y[0],A=Lo(e,{punctuation:c,preTriggerChars:v,allowSpaces:o}),S=A.trigger,C=A.checkForMentionMatch,T=(0,x.useState)(null),L=R()(T,2),k=L[0],B=L[1],w=Po(n,k),D=w.options,Q=(0,x.useCallback)(function(E,M,P,F){p==null||p(E,S,k),b.update(function(){M&&E!==null&&E!==void 0&&E.key&&M.remove(),E!=null&&E.onSelect&&E.onSelect(F),P()})},[b,p,k,S]),G=(0,x.useCallback)(function(E,M){var P=M.selectedIndex,F=M.selectOptionAndCleanUp,Y=M.setHighlightedIndex;return E.current?Eo.createPortal((0,l.jsx)("div",{className:f.menuOverlay,role:"menu",children:(0,l.jsx)(zo,{onClick:function(N,H){H.disabled||(Y(N),F(H))},onMouseEnter:function(N,H){H.disabled||Y(N)},options:D,queryString:k,selectedIndex:P})}),E.current):null},[D,k,f.menuOverlay]);return(0,l.jsx)(Zn.HQ,{anchorClassName:f.anchor,menuRenderFn:G,onQueryChange:B,onSelectOption:Q,options:D,triggerFn:C})}),Qo=function(e){var t=e.onBlur,n=e.onFocus,a=(0,oe.g)(),o=R()(a,1),i=o[0],c=(0,x.useRef)(null);return(0,x.useEffect)(function(){return(0,Ce.qV)(i.registerCommand(jn,function(){return c.current&&(clearTimeout(c.current),c.current=null),!0},O.VN),i.registerCommand(O.Gq,function(){return c.current=setTimeout(function(){i.dispatchCommand(O.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),t&&t(),!0},O.VN),i.registerCommand(O.m$,function(){return n&&n(),!0},O.VN))},[i,t,n]),null},Go=Qo,wn,Bn,zn,Hn,Qn,Gn,Un,Vn,Yn=function(e){return 32+Math.max(e-1,0)*22},Uo=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.autoSize;return{wrapper:t(wn||(wn=h()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:t(Bn||(Bn=h()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 4px;
        left: 11px;

        color: `,`;
      `])),n.colorTextPlaceholder),root:t(zn||(zn=h()([`
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
      `])),n.colorBorder,n.borderRadius,n.colorText,n.fontSize,n.fontFamily,(o==null?void 0:o.minRows)&&t(Hn||(Hn=h()([`
          min-height: `,`px;
        `])),Yn(o.minRows)),(o==null?void 0:o.maxRows)&&t(Qn||(Qn=h()([`
          max-height: `,`px;
        `])),Yn(o.maxRows)),n.motionDurationMid,n.colorPrimaryBorder),filled:t(Gn||(Gn=h()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),n.colorFillTertiary,n.colorFillSecondary,n.colorBgBase),borderless:t(Un||(Un=h()([`
        background: transparent;
        border: none;
      `]))),disabled:t(Vn||(Vn=h()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),n.colorTextDisabled,n.colorBgContainerDisabled)}}),Vo=function(e){var t,n=e.className,a=e.wrapperClassname,o=e.placeholder,i=e.style,c=e.value,d=e.defaultValue,v=e.readOnly,p=v===void 0?!1:v,m=e.disabled,f=m===void 0?!1:m,g=e.onChange,y=e.onBlur,b=e.onFocus,A=e.variant,S=A===void 0?"outlined":A,C=e.options,T=C===void 0?[]:C,L=e.autoSize,k=e.triggers,B=k===void 0?["@"]:k,w=e.allowSpaces,D=e.punctuation,Q=e.preTriggerChars,G=e.onSelect,E=Uo({autoSize:L}),M=E.styles,P=E.cx,F=!p&&!f,Y=(0,x.useMemo)(function(){return{namespace:"mentions",nodes:[be,{replace:O.R2,with:function(z){return new be(z.__text)}},de],editorState:Zo(c||d||""),onError:function(z){throw z}}},[]),q=function(z){var _=z.read(function(){return(0,O.Gv)().getTextContent()});g==null||g(_.replaceAll(`

`,`
`))},N=(0,x.useMemo)(function(){return T.reduce(function(H,z){return H[z.value]=z,H},{})},[T]);return(0,l.jsx)(Wr.R,{initialConfig:u()(u()({},Y),{},{editable:F}),children:(0,l.jsx)(vo,{value:{optionsMap:N},children:(0,l.jsxs)("div",{className:P(M.wrapper,a),children:[(0,l.jsx)(eo.B,{ErrorBoundary:$r.g,contentEditable:(0,l.jsx)(Xr.f,{className:P((t={},U()(t,M.root,!0),U()(t,M.filled,S==="filled"),U()(t,M.borderless,S==="borderless"),U()(t,M.disabled,f),t),n),style:i||{}}),placeholder:(0,l.jsx)("div",{className:M.placeholder,children:o||"\u8F93\u5165 ".concat(B.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,l.jsx)(Ho,{allowSpaces:w,onSelect:G,options:T,preTriggerChars:Q,punctuation:D,triggers:B}),(0,l.jsx)(Nn,{}),(0,l.jsx)(Oo,{}),(0,l.jsx)(qr.e,{}),(0,l.jsx)(_r.$,{onChange:q}),(0,l.jsx)(Go,{onBlur:y,onFocus:b})]})})})},Jn=s(57613),Kn=s(47590),Yo="data:image/png;base64,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",Jo="data:image/png;base64,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",Wn,Xn,$n,qn,_n,Ko=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=e.minimapEnabled,o=a===void 0?!1:a,i=e.isFullScreen,c=i===void 0?!1:i,d=(0,I.F4)(Wn||(Wn=h()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),v=t(Xn||(Xn=h()([`
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
    `])),o?"64px":"20px",Jo,Yo);return{base:t($n||($n=h()([`
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
      `])),n.colorBorder,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius-1,n.borderRadius-1,v,d),diff:t(qn||(qn=h()([`
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
      `])),c&&t(_n||(_n=h()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto;
            height: auto;
          `]))),v)}},{hashPriority:"low"}),Wo=s(67557),Xo=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","onChange","className","diffEditorWrapperClassName","supportFullScreen","width","height"],$o=["inlineView","options"],Qe=function(e){var t=e.type,n=t===void 0?"single":t,a=e.editorDidMount,o=e.readOnly,i=o===void 0?!1:o,c=e.lineNumbers,d=c===void 0?"on":c,v=e.wordWrap,p=v===void 0?"off":v,m=e.contextmenu,f=m===void 0?!0:m,g=e.theme,y=e.minimapEnabled,b=y===void 0?!1:y,A=e.version,S=A===void 0?"0.45.0":A,C=e.requireConfig,T=C===void 0?{}:C,L=e.options,k=e.onChange,B=e.className,w=e.diffEditorWrapperClassName,D=e.supportFullScreen,Q=e.width,G=e.height,E=j()(e,Xo),M=(0,Kn.r)(),P=M.isDarkMode,F=(0,x.useMemo)(function(){return g||(P?"vs-dark":"vs")},[P,g]),Y=(0,x.useState)(),q=R()(Y,2),N=q[0],H=q[1],z=function(ne,se){if(H(se),a==null||a(ne,se),n==="diff"){var qe=se.getModel(),Oe=qe.modified;Oe.onDidChangeContent(function(_e){k==null||k(Oe.getValue(),_e)})}},_=(0,x.useMemo)(function(){var ge=Object.assign({},L,{readOnly:i,lineNumbers:d,wordWrap:p,contextmenu:f,minimap:b===void 0?L==null?void 0:L.minimap:Object.assign({},L==null?void 0:L.minimap,{enabled:b})});return N==null||N.updateOptions(ge),ge},[L,i,d,p,f,b,N]),ee=ln(),te=(0,x.useMemo)(function(){return Object.assign({},T,{paths:u()({vs:ee({path:"min/vs",pkg:"monaco-editor",version:S})},T.paths)})},[ee,T,S]),pe=(0,x.useState)(!1),he=R()(pe,2),V=he[0],$e=he[1],Ze=Ko({minimapEnabled:b,isFullScreen:V}),xe=Ze.styles,le=Ze.cx;if(n!=="diff")return(0,l.jsx)(Jn.vg,u()({className:le(xe.base,B),editorDidMount:z,height:G,onChange:k,options:_,requireConfig:te,supportFullScreen:N&&D,theme:F,width:Q},E));var Sr=function(){$e(!V),N==null||N.layout()},Lr=le({"base-monaco-full-screen-icon":!V,"base-monaco-full-screen-icon-cancel":V});return(0,l.jsxs)("div",{className:le(xe.diff,w),children:[(0,l.jsx)(Jn.vg.MonacoDiffEditor,u()({className:le(xe.base,B),editorDidMount:z,height:V?"auto":G,options:_,requireConfig:te,theme:F,width:V?"auto":Q},E)),N&&D&&(0,l.jsx)("div",{className:Lr,onClick:Sr})]})},qo=function(e){return(0,l.jsx)(Qe,u()(u()({},e),{},{type:"single"}))},_o=function(e){var t=e.inlineView,n=t===void 0?"off":t,a=e.options,o=j()(e,$o);return(0,l.jsx)(Qe,u()(u()({options:Object.assign({useInlineViewWhenSpaceIsLimited:n==="on"||n==="auto",renderSideBySide:n==="off"||n==="auto"},a)},o),{},{type:"diff"}))},et=s(6813),Ge=s(54189),nt=s(64337),tt=s(16988),ea=function(e){var t=e.value,n=e.defaultValue,a=e.min,o=a===void 0?0:a,i=e.max,c=e.step,d=e.gutter,v=d===void 0?16:d,p=e.sliderCol,m=p===void 0?{span:12}:p,f=e.inputCol,g=f===void 0?{span:5}:f,y=e.addonAfter,b=e.addonBefore,A=e.placeholder,S=e.onChange,C=e.style,T=e.className,L=e.sliderProps,k=L===void 0?{}:L,B=e.inputProps,w=B===void 0?{}:B,D=(0,x.useState)(),Q=R()(D,2),G=Q[0],E=Q[1],M=function(F){Number.isNaN(F)||(E(F),S==null||S(F))};return(0,l.jsxs)(et.Z,{className:T,gutter:v,style:C,children:[(0,l.jsx)(Ge.Z,u()(u()({},m),{},{children:(0,l.jsx)(nt.Z,u()(u()({},k),{},{defaultValue:n,max:i,min:o,onChange:M,step:c,value:t||G}))})),(0,l.jsx)(Ge.Z,u()(u()({},g),{},{children:(0,l.jsx)(tt.Z,u()(u()({},w),{},{addonAfter:y,addonBefore:b,defaultValue:n,max:i,min:o,onChange:M,placeholder:A,step:c,value:t||G}))}))]})},rt=s(5654),ot,na=(0,I.kc)(function(r,e){var t=r.css,n=e.bordered,a=n===void 0?"dashed":n;return{custom:t(ot||(ot=h()([`
        border-style: `,` !important;
      `])),a)}},{hashPriority:"low"}),ta=["bordered","className"],at=function(e){var t=e.bordered,n=t===void 0?"dashed":t,a=e.className,o=j()(e,ta),i=na({bordered:n}),c=i.styles,d=i.cx;return(0,l.jsx)(rt.Z,u()(u()({},o),{},{className:d(c.custom,a)}))};at.ErrorBoundary=rt.Z.ErrorBoundary;var zl=null,it=s(73320),ra=s(38887),Le=s.n(ra),lt=s(14171),st=s(9300),oa=s(64202),Ue=s(99141),je=s(41075),ct,dt=(0,I.vJ)(ct||(ct=h()([`
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
`])),function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme;return e==null?void 0:e.colorPrimary},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme,t=e||{},n=t.prefixCls;return je.ZP.config({prefixCls:n}),`
      .`.concat(n,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(n,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)}),aa=["detail","message","description","onClose","className"],ia=Ue.Z.Panel,la=Ae.Z.Link,sa=Ae.Z.Paragraph,ca=Ae.Z.Text,ue={},da=function(e,t){ue[e]||(ue[e]=[]),ue[e].push(t)},ua=function(e){delete ue[e]},ut=function r(e){var t="";if(typeof e=="string")t=e;else if(typeof e=="number")t=e.toString();else if(Array.isArray(e)){var n=Le()(e),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;t+=r(o)}}catch(i){n.e(i)}finally{n.f()}}else(0,x.isValidElement)(e)&&(t+=r(e.props.children));return t},vt=function(e){var t,n=e.noticeKey,a=e.message,o=((t=ue[n])===null||t===void 0?void 0:t.length)||0;return(0,l.jsxs)(l.Fragment,{children:[a,o>1&&" (".concat(o,")")]})},va=function(e){var t=e.noticeKey,n=(0,x.useState)(),a=R()(n,2),o=a[0],i=a[1],c={},d=Le()(ue[t]),v;try{for(d.s();!(v=d.n()).done;){var p=v.value,m=ut(p.description);p.descKey=m,c[m]=p}}catch(f){d.e(f)}finally{d.f()}return(0,l.jsx)(Ue.Z,{accordion:!0,activeKey:o,className:"yunti-notification-collapse",expandIcon:function(g){var y=g.isActive;return(0,l.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:y?(0,l.jsx)(la,{className:"yunti-notification-link",children:(0,l.jsx)(lt.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,l.jsx)(st.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(g){i(g)},children:Object.values(c).map(function(f){var g=f.descKey,y=f.description,b=f.detail;return(0,l.jsx)(ia,{header:(0,l.jsx)(ca,{ellipsis:{tooltip:!1},style:{width:250},children:y}),children:(0,l.jsx)(sa,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(b,null,2)},type:"secondary",children:(0,l.jsx)("pre",{children:JSON.stringify(b,null,2)})})},g)})})},ae=function(e){var t=e.detail,n=e.message,a=e.description,o=e.onClose,i=e.className,c=j()(e,aa),d=ut(n);da(d,e);var v=function(){o==null||o(),ua(d)};return e.type==="warning"&&!e.icon&&(c.icon=(0,l.jsx)(oa.Z,{style:{color:"#ff7d00"}})),t?je.ZP.open(u()({key:d,message:(0,l.jsx)(vt,{message:n,noticeKey:d}),description:(0,l.jsx)(va,{noticeKey:d}),onClose:v,className:"yunti-notification ".concat(i)},c)):je.ZP.open(u()({key:d,message:(0,l.jsx)(vt,{message:n,noticeKey:d}),description:a,onClose:v,className:"yunti-notification ".concat(i)},c))},mt=function(e){var t;if(((e==null||(t=e.errors)===null||t===void 0?void 0:t.length)||0)>0){e!=null&&e.errors;var n=Le()((e==null?void 0:e.errors)||[]),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;ae(u()(u()({detail:o,description:o.message},e),{},{type:"warning"}))}}catch(i){n.e(i)}finally{n.f()}}else ae(u()(u()({},e),{},{type:"warning"}))},ma=u()(u()({},je.ZP),{},{success:function(e){return ae(u()(u()({},e),{},{type:"success"}))},info:function(e){return ae(u()(u()({},e),{},{type:"info"}))},warning:function(e){return ae(u()(u()({},e),{},{type:"warning"}))},warn:function(e){return ae(u()(u()({},e),{},{type:"warning"}))},error:function(e){return ae(u()(u()({},e),{},{type:"error"}))},warnings:mt,warns:mt}),Hl=null,pa=["children"],pt=function(e){var t=e.children,n=j()(e,pa);return(0,l.jsxs)(it.Z,u()(u()({},n),{},{children:[(0,l.jsx)(dt,{}),t]}))};pt.useApp=it.Z.useApp;var Ql=null,fa=s(34550),ft=s(37032),ht,xt,gt,yt,bt,Ct,ha=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.borderedBottom,i=e.borderedBottomDashed,c=e.borderedTop,d=e.borderedTopDashed,v=e.size,p={small:"".concat(n.paddingXS,"px ").concat(n.padding,"px"),middle:"".concat(n.padding,"px ").concat(n.paddingLG,"px"),default:"".concat(n.paddingSM,"px ").concat(n.paddingLG,"px")},m=o||i;return{custom:t(ht||(ht=h()([`
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
      `])),a,a,m&&v&&t(xt||(xt=h()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),a,a,p[v],a),o&&t(gt||(gt=h()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),a,n.colorSplit),i&&t(yt||(yt=h()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),a,n.colorSplit),c&&t(bt||(bt=h()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),a,n.colorSplit),d&&t(Ct||(Ct=h()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),a,n.colorSplit))}},{hashPriority:"low"}),xa=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],Ve=function(e){var t=e.className,n=e.borderedBottom,a=e.borderedBottomDashed,o=e.borderedTop,i=e.borderedTopDashed,c=j()(e,xa),d=ha({borderedBottom:n,borderedBottomDashed:a,borderedTop:o,borderedTopDashed:i,size:c.size}),v=d.styles,p=d.cx;return(0,l.jsx)(ft.Z,u()(u()({},c),{},{className:p(v.custom,t)}))},ga=Ve;Ve.Item=ft.Z.Item;var At=s(14329),Ye=s(3024),St,ya=(0,I.kc)(function(r){var e=r.css,t=r.token;return{custom:e(St||(St=h()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),t.colorPrimary,t.colorPrimaryHover)}},{hashPriority:"low"}),ba=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],Lt=function(e){var t=e.mode,n=t===void 0?"line":t,a=e.content,o=e.defaultOpen,i=e.iconPlacement,c=i===void 0?"left":i,d=e.openIcon,v=e.closeIcon,p=e.type,m=j()(e,ba),f=ya({}),g=f.styles,y=n==="expanded",b=(0,x.useState)(o),A=R()(b,2),S=A[0],C=A[1],T=v||(0,l.jsx)(lt.Z,{}),L=d||(0,l.jsx)(st.Z,{}),k=y&&(0,l.jsx)("span",{children:S?T:L});return n==="line"||p==="vertical"?(0,l.jsx)(At.Z,u()({type:p},m)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(At.Z,u()(u()({type:p},m),{},{children:(0,l.jsx)("span",{className:y?g.custom:"",onClick:function(){C(!S)},children:(0,l.jsxs)(Ye.Z,{size:6,children:[c!=="right"&&k,(0,l.jsx)("span",{children:a}),c==="right"&&k]})})})),y&&(0,l.jsx)("div",{style:{display:S?"block":"none"},children:e.children})]})},Ca=Lt,jt,Mt,Nt,Aa=(0,I.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.closeIcon,o=e.closeIconPlacement,i=e.extra,c=t(jt||(jt=h()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),n,n,!(a===null||a===!1)&&t(Mt||(Mt=h()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),n));return{custom:t(Nt||(Nt=h()([`
        `,`
      `])),(!o||o==="right"||o==="auto"&&!i)&&c)}},{hashPriority:"low"}),Sa=["className"],La=function(e){var t=e.className,n=j()(e,Sa),a=Aa(n),o=a.styles,i=a.cx;return(0,l.jsx)(cn.Z,u()(u()({},n),{},{className:i(o.custom,t)}))},Gl=null,ve=s(70757),ja=s(13448),Zt=s.n(ja),Ma=s(74815),Na=s.n(Ma),Za=s(67855),Je=s.n(Za),Oa=s(37194),K=s(40363),Ea=s(92052),Ot,Et,Tt,Ta=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{empty:e(Ot||(Ot=h()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),t.paddingXS,t.paddingSM,t.colorTextTertiary),list:e(Et||(Et=h()([`
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
    `])),n,t.colorTextTertiary,n),noFormItem:e(Tt||(Tt=h()([`
      height: `,`px;
      color: `,`;
    `])),t.controlHeight,t.colorTextTertiary)}}),Pa=["icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","style"],Ia=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width"],ka=["key","name"],Pt=function(e){var t=e.icon,n=e.title,a=e.variant,o=e.defaultActive,i=e.empty,c=i===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":i,d=e.columns,v=d===void 0?[]:d,p=e.disabled,m=e.readOnly,f=e.addOneFieldDefault,g=e.disableRemoveWhenOneField,y=e.maxFileds,b=e.name,A=e.addParams,S=e.className,C=e.onRemove,T=e.style,L=j()(e,Pa),k=Ta(),B=k.styles,w=(0,x.useRef)(),D=ve.Z.useFormInstance(),Q=ve.Z.useWatch(b,D),G=(0,x.useCallback)(function(){if(!A)return[];var M=typeof A=="function"?A():A;return[M.defaultValue,M.insertIndex]},[A]),E=(0,x.useCallback)(function(M){var P=D.getFieldValue([b,M]);return C==null?void 0:C(P)},[D,b,C]);return(0,x.useEffect)(function(){var M;if(f&&(!(D!=null&&D.getFieldValue(b))||(D==null||(M=D.getFieldValue(b))===null||M===void 0?void 0:M.length)===0)){var P;(P=w.current)===null||P===void 0||P.call.apply(P,[w].concat(Je()(G())))}},[f,G,D,b]),(0,l.jsx)(Pe,{extra:b&&!m&&(0,l.jsx)(ce.Z,{title:y&&"\u6700\u591A\u6DFB\u52A0 ".concat(y," \u9879"),children:(0,l.jsx)(re.ZP,{disabled:p||!!(y&&(Q==null?void 0:Q.length)===y),icon:(0,l.jsx)(Oa.Z,{}),onClick:function(P){var F;P.stopPropagation(),(F=w.current)===null||F===void 0||F.call.apply(F,[w].concat(Je()(G())))},size:"small",type:"text"})}),className:S,icon:t,title:n,variant:a,defaultActive:o,style:T,children:b?(0,l.jsx)(ve.Z.List,u()(u()({name:b},L),{},{children:function(P,F){var Y=F.add,q=F.remove;return w.current=Y,(0,l.jsx)(K.Z,{className:B.list,columns:[].concat(Je()(v.map(function(N){var H=N.label,z=N.name,_=N.render,ee=N.dependencies,te=N.rules,pe=N.align,he=N.ellipsis,V=N.fixed,$e=N.responsive,Ze=N.shouldCellUpdate,xe=N.width,le=j()(N,Ia);return{title:H,dataIndex:z,align:pe,ellipsis:he,fixed:V,responsive:$e,shouldCellUpdate:Ze,width:xe,render:function(Lr,ge,ne){var se=P[ne],qe=se.key,Oe=se.name,_e=j()(se,ka),Ee=_==null?void 0:_(P[ne],ne);if(!Ee&&!le.noStyle)return(0,l.jsx)(Z.Z,{align:"center",className:B.noFormItem,children:"\u65E0\u9700\u8BBE\u7F6E"});if(!z)return(0,l.jsx)(Z.Z,{align:"center",className:B.noFormItem,children:Ee});var Te={readOnly:m,disabled:p};return m===!0&&(Te.showCount=!1,Te.variant="borderless",Te.placeholder="-"),(0,l.jsx)(ve.Z.Item,u()(u()(u()({},_e),{},{dependencies:typeof ee=="function"?ee(P[ne],ne):ee,name:[Oe,z],rules:typeof te=="function"?te(P[ne],ne):te},le),{},{children:Ee&&x.cloneElement(Ee,Te)}),qe)}}})),[{title:"",dataIndex:"del",render:function(H,z,_){if(!m){var ee=P[_].name;return(0,l.jsx)(ve.Z.Item,{children:(0,l.jsx)(re.ZP,{disabled:p||g&&P.length===1,icon:(0,l.jsx)(gn.Z,{icon:Ea.Z}),onClick:Na()(Zt()().mark(function te(){var pe;return Zt()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,E(ee);case 2:pe=V.sent,pe!==!1&&q(ee);case 4:case"end":return V.stop()}},te)})),type:"text"})})}}}]),dataSource:P,locale:{emptyText:c},pagination:!1,rowHoverable:!1,size:"small"})}})):(0,l.jsx)("div",{className:B.empty,children:c})})},It=ve.Z;It.CollapseList=Pt;var Da=function(e){return typeof e=="string"?document.querySelector("#".concat(e)):(e==null?void 0:e.current)||e},Ke=":not([disabled]):not([readonly])",Ra=["text","password","search","tel","url","number","email",""].map(function(r){return'input[type="'.concat(r,'"]').concat(Ke)}).join(", ")+", input:not([type])".concat(Ke,", textarea").concat(Ke),Fa=function(e){var t,n=Da(e);if(n){var a=(t=n.querySelector)===null||t===void 0?void 0:t.call(n,Ra);if(a!=null&&a.focus)return a.focus(),!0}},kt=function(e){var t=(0,x.useState)(!1),n=R()(t,2),a=n[0],o=n[1];x.useEffect(function(){if(!(a||!e)){var i=Fa(e);i&&o(!0)}},[e,a,o])},Dt=function(e){var t,n=e.autoFocus,a=n===void 0?!0:n,o=(0,x.useRef)(null);return kt(a?o:void 0),(0,l.jsx)("div",{className:e.className,id:e.id,ref:o,style:(t=e.style)!==null&&t!==void 0?t:{display:e.className?void 0:"contents"},children:e.children})},wa=function(e){return function(t){var n=function(i){return(0,l.jsx)(Dt,u()(u()({},e||{}),{},{children:(0,l.jsx)(t,u()({},i))}))},a=t.displayName||t.name||"Component";return n.displayName="withFormHelper(".concat(a,")"),n}},W=s(35057),Ba="yunti-ui",Rt,Ft,za=(0,I.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.borderd,o=a===void 0?!0:a,i=e.footer,c=i===null||Array.isArray(i)&&i.length===0,d=t(Rt||(Rt=h()([`
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
    `])),n,n,c?0:"40px",n,c?0:"1px");return{custom:t(Ft||(Ft=h()([`
        `,`
      `])),o&&d)}},{hashPriority:"low"}),Ha=["className","borderd"],Qa=function(e){var t=e.className,n=e.borderd,a=n===void 0?!0:n,o=j()(e,Ha),i=za(u()({borderd:a},o)),c=i.styles,d=i.cx;return(0,l.jsx)(W.Z,u()(u()({},o),{},{className:d(c.custom,"".concat(Ba,"-modal"),t)}))},X=Qa;X.useModal=W.Z.useModal,X.destroyAll=W.Z.destroyAll,X.config=W.Z.config,X._InternalPanelDoNotUseOrYouWillBeFired=W.Z._InternalPanelDoNotUseOrYouWillBeFired,X.info=W.Z.info,X.success=W.Z.success,X.error=W.Z.error,X.warning=W.Z.warning,X.warn=W.Z.warn,X.confirm=W.Z.confirm;var Ul=null,Ga=["to","children"],wt=function(e){var t=e.to,n=e.children,a=j()(e,Ga);return(0,l.jsx)("a",u()(u()({href:"#".concat(t)},a),{},{children:n}))},Me=(0,x.createContext)({loading:!1,Link:wt}),Ua=["to","Link","children"],Va=function(e){var t=e.to,n=e.Link,a=e.children,o=j()(e,Ua);return n?(0,l.jsx)(n,u()(u()({to:t},o),{},{children:a})):(0,l.jsx)("a",u()(u()({href:"#".concat(t)},o),{},{children:a}))},Ya=function(e){var t=(0,x.useContext)(Me),n=t.Link,a=t.breadcrumb;(0,x.useEffect)(function(){var i;a==null||(i=a.setItems)===null||i===void 0||i.call(a,e.items)},[a,e.items]);var o=(0,x.useCallback)(function(i,c,d,v){var p,m,f=i.href?i.href===((p=d.at(-1))===null||p===void 0?void 0:p.href):i.path===((m=d.at(-1))===null||m===void 0?void 0:m.path);if(f)return(0,l.jsx)("span",{children:i.title});var g=i.href?i.href:"/".concat(v.join("/"));return(0,l.jsx)(Va,{Link:n,to:g,children:i.title})},[n]);return(0,l.jsx)(nn.Z,u()({itemRender:o},e))},Bt=s(19993),ie=s(23806),zt,Ja=(0,I.kc)(function(r){var e=r.css,t=r.token;return{root:e(zt||(zt=h()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),Ka=["className","children"],Wa={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},Xa=function(e){var t=e.className,n=e.children,a=j()(e,Ka),o=Ja(),i=o.styles,c=o.cx,d=(0,x.useContext)(Me),v=d.loading,p=d.breadcrumb,m=d.Link,f=d.status,g=(0,x.useCallback)(function(){if(f){var y;return(0,l.jsx)(Bt.ZP,{extra:(0,l.jsx)(m,{to:p==null||(y=p.items)===null||y===void 0||(y=y[0])===null||y===void 0?void 0:y.path,children:(0,l.jsx)(re.ZP,{type:"primary",children:"Go Back"})}),status:f,subTitle:Wa[f],title:f})}return n},[f,n,m,p==null?void 0:p.items]);return v?(0,l.jsx)(ie.Z,{active:!0,className:c(i.root,t)}):(0,l.jsx)(Z.Z,u()(u()({className:c(i.root,t),gap:20,vertical:!0},a),{},{children:g()}))},$a=function(){return(0,l.jsx)(l.Fragment,{})},Ht=s(21801),qa=s(3521),_a=s.n(qa),We=s(43382),ei=["items","onClick"],ni=["key","label"],ti=["key","label"],Qt=function(e){var t=e.items,n=t===void 0?[]:t,a=e.onClick,o=a===void 0?function(){}:a,i=j()(e,ei);if(n.length<=2)return(0,l.jsx)(Ye.Z,u()(u()({align:"end",size:12},i),{},{children:n.map(function(g){var y=g.key,b=g.label,A=j()(g,ni);return(0,l.jsx)(re.ZP,u()(u()({onClick:function(C){return o(y,C)}},A),{},{children:b}),y)})}));var c=_a()(n),d=c[0],v=d.key,p=d.label,m=j()(d,ti),f=c.slice(1);return(0,l.jsx)(We.Z.Button,u()(u()(u()({onClick:function(y){return o(v,y)}},m),{},{menu:{onClick:function(y){var b=y.key,A=y.domEvent;return o(b,A)},items:f.map(function(g){var y=g.key,b=g.label,A=g.icon,S=g.danger,C=g.disabled;return{key:y,label:b,icon:A,danger:S,disabled:C}})},overlayStyle:{minWidth:100}},i),{},{children:p}),v)},Xe=s(17823),ri=["shape","size","src"],Gt=function(e){if(typeof e=="number")return e;switch(e){case"small":return 40;case"large":return 88;default:return 64}},oi=function(e){var t=e.shape,n=t===void 0?"square":t,a=e.size,o=e.src,i=j()(e,ri),c=(0,x.useMemo)(function(){return Gt(a)},[a]);return(0,l.jsx)(Xe.C,u()({shape:n,size:c,src:o},i))},Ut,Vt,Yt,Jt,Kt,Wt,Xt,$t,qt,ai=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.bordered,i=o===void 0?!1:o,c=e.divider,d=c===void 0?!0:c;return{root:i?t(Ut||(Ut=h()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),n.marginXS,n.padding,n.colorBgBase,n.borderRadius,n.boxShadowTertiary):t(Vt||(Vt=h()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),n.paddingXS,n.marginXS,d&&t(Yt||(Yt=h()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),n.paddingLG,n.colorSplit)),icon:t(Jt||(Jt=h()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),a,a,n.colorPrimary,a),titleBox:t(Kt||(Kt=h()([`
        margin-bottom: `,`px;
      `])),n.marginSM),subTitle:t(Wt||(Wt=h()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),n.marginXXS,a,n.fontSize,n.colorTextSecondary),title:t(Xt||(Xt=h()([`
        font-size: `,`px;
        font-weight: 700;
      `])),n.fontSizeHeading5),descriptions:t($t||($t=h()([`
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
      `])),n.marginXXS,n.fontSize,n.colorTextSecondary,a,a,n.fontSize,a,n.fontSize,n.colorTextSecondary),rightButtons:t(qt||(qt=h()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),ii=["className","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],li=ze.Paragraph,si=function(e){var t=e.className,n=e.icon,a=e.title,o=e.titleRender,i=e.subTitle,c=e.status,d=e.descriptions,v=d===void 0?[]:d,p=e.descriptionsRender,m=e.extraContent,f=m===void 0?{}:m,g=e.extraContentRender,y=e.bordered,b=e.divider,A=j()(e,ii),S=ai({bordered:y,divider:b}),C=S.styles,T=S.cx,L=(0,x.useMemo)(function(){return!n||typeof n=="string"?{src:n,size:i?"large":"default"}:(i&&n.size===void 0&&(n.size="large"),n)},[n,i]),k=(0,x.useMemo)(function(){var E=(0,l.jsx)("span",{className:C.title,children:a});return o?o(E):E},[C.title,a,o]),B=(0,x.useMemo)(function(){var E=[],M=Le()(v.filter(function(z){return!!z}).entries()),P;try{for(M.s();!(P=M.n()).done;){var F=R()(P.value,2),Y=F[0],q=F[1],N=q.icon,H=q.text;(c||Y>=1)&&E.push((0,l.jsx)(Ca,{dashed:!1,type:"vertical"},"divider-".concat(Y))),E.push((0,l.jsxs)(Z.Z,{align:"center",gap:4,children:[N&&(0,l.jsx)(ce.Z,{title:N.tooltip,children:N.content}),(0,l.jsx)("span",{children:H})]},"desc-".concat(Y)))}}catch(z){M.e(z)}finally{M.f()}return p?p(E):E},[v,p,c]),w=(0,x.useMemo)(function(){if(!f&&!g)return null;var E=(0,l.jsx)(Qt,u()({className:C.rightButtons},f));return g?g(E):E},[f,g,C.rightButtons]),D=(0,x.useContext)(Me),Q=D.loading,G=D.status;return Q?(0,l.jsxs)(Z.Z,{className:T(C.root,t),gap:20,children:[(0,l.jsx)(Z.Z,{children:(0,l.jsx)(ie.Z.Avatar,{active:!0,className:C.icon,shape:L==null?void 0:L.shape,size:Gt(L==null?void 0:L.size)})}),(0,l.jsxs)(Z.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)("div",{className:C.titleBox,children:[(0,l.jsx)(ie.Z.Input,{active:!0,size:25}),i&&(0,l.jsx)("div",{className:C.subTitle,children:(0,l.jsx)(ie.Z.Input,{active:!0,size:18})})]}),(0,l.jsx)(ie.Z.Input,{active:!0,size:18})]}),(0,l.jsx)(Z.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,l.jsx)(ie.Z.Button,{active:!0})})]}):G?null:(0,l.jsxs)(Z.Z,u()(u()({className:T(C.root,t),gap:20},A),{},{children:[L&&(0,l.jsx)(Z.Z,{children:(0,l.jsx)(oi,u()({className:C.icon},L))}),(0,l.jsxs)(Z.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,l.jsxs)(Z.Z,{className:C.titleBox,vertical:!0,children:[k,i&&(0,l.jsx)(li,{className:C.subTitle,ellipsis:{rows:2},children:i})]}),(0,l.jsxs)(Z.Z,{align:"center",className:C.descriptions,gap:4,children:[c&&(0,l.jsx)(Ht.Z,u()({},c)),B]})]}),(0,l.jsx)(Z.Z,{align:"center",flex:"1",justify:"flex-end",children:w})]}))},_t,ci=(0,I.kc)(function(r){var e=r.css,t=r.token;return{root:e(_t||(_t=h()([`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: `,"px ","px ",`px;
      `])),t.padding,t.paddingLG,t.paddingXL)}},{hashPriority:"low"}),di=["loading","className","children","Link","status","gap"],ui=function(e){var t=sn(),n=e.loading,a=e.className,o=e.children,i=e.Link,c=i===void 0?t||wt:i,d=e.status,v=e.gap,p=v===void 0?16:v,m=j()(e,di),f=ci(m),g=f.styles,y=f.cx,b=(0,x.useState)([]),A=R()(b,2),S=A[0],C=A[1];return(0,l.jsx)(Z.Z,u()(u()({className:y(g.root,a),gap:p,vertical:!0},m),{},{children:(0,l.jsx)(Me.Provider,{value:{loading:n,Link:c,breadcrumb:{items:S,setItems:C},status:d},children:o})}))},er,vi=(0,I.kc)(function(r){var e=r.css,t=r.token;return{root:e(er||(er=h()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),t.fontFamily,t.fontWeightStrong,t.lineHeight,t.colorText)}}),mi=["className"],pi=function(e){var t=e.className,n=j()(e,mi),a=vi(),o=a.cx,i=a.styles;return(0,l.jsx)("h2",u()({className:o(i.root,t)},n))},me=ui;me.Breadcrumb=Ya,me.Title=pi,me.Header=si,me.Content=Xa,me.Footer=$a;var nr,tr,rr,or,ar,fi=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(nr||(nr=h()([`
      position: relative;

      min-width: 320px;
      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.fontFamily,t.colorText,t.colorBgContainer,t.borderRadiusLG,t.boxShadowTertiary),bordered:e(tr||(tr=h()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),t.colorBorder),hoverable:e(rr||(rr=h()([`
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),t.boxShadow),text:e(or||(or=h()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),t.colorTextSecondary),error:e(ar||(ar=h()([`
      color: `,`;
    `])),t.colorErrorText)}}),hi=["className","bordered","hoverable","children"],xi=function(e){var t=e.className,n=e.bordered,a=n===void 0?!1:n,o=e.hoverable,i=o===void 0?!0:o,c=e.children,d=j()(e,hi),v=fi(),p=v.cx,m=v.styles;return(0,l.jsx)("div",u()(u()({className:p(m.root,a&&m.bordered,i&&m.hoverable,t)},d),{},{children:c}))},ir,gi=(0,I.kc)(function(r){var e=r.css,t=r.token;return{root:e(ir||(ir=h()([`
        padding: 12px 24px 20px;
      `])))}},{hashPriority:"low"}),yi=["className","children"],bi=function(e){var t=e.className,n=e.children,a=j()(e,yi),o=gi(),i=o.styles,c=o.cx;return(0,l.jsx)(Z.Z,u()(u()({className:c(i.root,t),gap:20,vertical:!0},a),{},{children:n}))},lr,Ci=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls,a=70;return{root:e(lr||(lr=h()([`
        &.`,`-descriptions {
          /* .`,`-descriptions-row {
            border-bottom: 1px dashed `,`;
          } */
          .`,`-descriptions-item {
            &-container {
              .`,`-descriptions-item-label {
                width: `,`px;
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
      `])),n,n,t.colorSplit,n,n,a,n,a)}},{hashPriority:"low"}),Ai=["className","colon","column","size"],Si=function(e){var t=e.className,n=e.colon,a=n===void 0?!1:n,o=e.column,i=o===void 0?2:o,c=e.size,d=c===void 0?"small":c,v=j()(e,Ai),p=Ci(),m=p.cx,f=p.styles;return(0,l.jsx)(ga,u()({className:m(f.root,t),colon:a,column:i,size:d},v))},Li=s(44529),sr,cr,dr,ur,vr,mr,pr,fr,ji=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.divider,i=o===void 0?!0:o;return{root:t(sr||(sr=h()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),i?20:0,i&&t(cr||(cr=h()([`
          border-bottom: 1px solid `,`;
        `])),n.colorSplit)),icon:t(dr||(dr=h()([`
        &.`,`-avatar {
          color: `,`;
          background-color: `,`;
          .anticon {
            font-size: 40px;
          }
        }
      `])),a,n.colorPrimary,n.colorPrimaryBgHover),titleBox:t(ur||(ur=h()([`
        margin-right: 4px;
      `]))),title:t(vr||(vr=h()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;
        margin-bottom: `,`px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.marginXS,n.fontWeightStrong),description:t(mr||(mr=h()([`
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),a,n.colorTextSecondary),extra:t(pr||(pr=h()([`
        margin-top: -4px;
      `]))),rightButtons:t(fr||(fr=h()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),Mi=["className","icon","title","description","extra","divider"],Ni=["className","shape","size"],Zi=["children"],Oi=ze.Paragraph,Ei=function(e){var t=e.className,n=e.icon,a=e.title,o=e.description,i=e.extra,c=e.divider,d=j()(e,Mi),v=ji({divider:c}),p=v.styles,m=v.cx,f=n||{},g=f.className,y=f.shape,b=y===void 0?"square":y,A=f.size,S=A===void 0?72:A,C=j()(f,Ni),T=i||{},L=T.children,k=j()(T,Zi);return(0,l.jsxs)(Z.Z,u()(u()({className:m(p.root,t),gap:20},d),{},{children:[n&&(0,l.jsx)(Z.Z,{children:(0,l.jsx)(Xe.C,u()({className:m(p.icon,g),shape:b,size:S},C))}),(0,l.jsxs)(Z.Z,{className:p.titleBox,flex:"1",vertical:!0,children:[(0,l.jsxs)(Z.Z,{gap:4,children:[(0,l.jsx)("div",{className:p.title,children:a}),i&&(0,l.jsx)(Z.Z,{align:"flex-start",className:p.extra,justify:"flex-end",children:(0,l.jsx)(We.Z,u()(u()({},k),{},{children:L||(0,l.jsx)(re.ZP,{icon:(0,l.jsx)(Li.Z,{}),size:"small",type:"text"})}))})]}),o&&(0,l.jsx)(Oi,{className:p.description,ellipsis:{rows:2},children:o})]})]}))},Ne=xi;Ne.Header=Ei,Ne.Content=bi,Ne.Descriptions=Si;var Ti=s(73239),Pi=s(10714),hr,xr,gr,yr,Ii=(0,I.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.size,i=e.segmented,c=function(){return i?i!==!0?i.gap:!0:0}(),d=function(){if(i)return i!==!0?i.borderRadius:!0}(),v=function(){var b={small:n.sizeSM,middle:n.size,large:n.sizeLG};return typeof c=="string"?b[c]:c===!0?o?b[o]:b.middle:c||0},p=function(){var b={small:n.controlHeightSM,middle:n.controlHeight,large:n.controlHeightLG};if(d===!0)return o?b[o]:b.middle;if(d||d===0)return d},m=p()&&t(hr||(hr=h()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),p()),f=t(xr||(xr=h()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),v()),g=i===!0||i&&!i.bordered;return{custom:t(gr||(gr=h()([`
        `,`
        `,`
        `,`
      `])),m,f,g&&t(yr||(yr=h()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),a,a,n.colorPrimary))}},{hashPriority:"low"}),ki=["className"],br=Ti.ZP,Di=function(e){var t=e.className,n=j()(e,ki);n.segmented&&(n.optionType="button");var a=Ii(n),o=a.styles,i=a.cx;return(0,l.jsx)(Pi.Z,u()(u()({},n),{},{className:i(o.custom,t)}))};br.Group=Di;var Vl=null,Cr,Ri=(0,I.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{table:e(Cr||(Cr=h()([`
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
    `])),n,t.colorTextTertiary)}}),Fi=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],Ar=function(e){var t=e.rootStyle,n=e.rootClassName,a=e.icon,o=e.title,i=e.variant,c=e.defaultActive,d=e.extra,v=e.className,p=j()(e,Fi),m=Ri(),f=m.cx,g=m.styles;return(0,l.jsx)(Pe,{className:n,style:t,icon:a,title:o,variant:i,defaultActive:c,extra:d,children:(0,l.jsx)(K.Z,u()({className:f(g.table,v),pagination:!1,rowHoverable:!1,size:"small"},p))})},wi=["columns"],$=function(e){var t=e.columns,n=j()(e,wi),a=(0,x.useMemo)(function(){return t==null?void 0:t.map(function(o){if(o.render)return o;if(o.ellipsis&&o.ellipsis!==!0&&o.ellipsis.showTitle||o.ellipsis===!0){var i=o.ellipsis===!0?{}:o.ellipsis;return u()(u()({},o),{},{ellipsis:{showTitle:!1},render:function(d){return d||d===0?(0,l.jsx)(ce.Z,u()(u()({},i),{},{placement:"topLeft",title:d,children:d})):"-"}})}return o.render||(o.render=function(c){return c!=null?c:"-"}),o})},[t]);return(0,l.jsx)(K.Z,u()(u()({},n),{},{columns:a}))};$.displayName="Table",$.SELECTION_COLUMN=K.Z.SELECTION_COLUMN,$.EXPAND_COLUMN=K.Z.EXPAND_COLUMN,$.SELECTION_ALL=K.Z.SELECTION_ALL,$.SELECTION_INVERT=K.Z.SELECTION_INVERT,$.SELECTION_NONE=K.Z.SELECTION_NONE,$.Column=K.Z.Column,$.ColumnGroup=K.Z.ColumnGroup,$.Summary=K.Z.Summary,$.Collapse=Ar;var Yl=null,Bi=s(79945),zi=s(65130),Hi=s(75608),Qi=s(74583),Gi=s(49409),Ui=s(17432),Vi=s(6271),Yi=s(89379),Ji=s(11310),Ki=s(13545),Wi=s(3267),Xi=s(62977),$i=s(15356),qi=s(32813),_i=s(89915),el=s(79852),nl=s(39427),tl=s(97257),rl=s(15157),ol=s(86102),al=s(6663),il=s(88492),ll=s(82160),sl=s(70473),cl=s(50918),dl=s(4551),ul=s(38008),vl=s(99288),ml=s(43662),pl=s(87821),fl=s(7460),hl=s(71708),xl=s(20459),gl=s(5144),yl=s(19333),bl=s(66838),Cl=s(46489),Al=s(39426),Sl=s(75185),Ll=s(72081),jl=s(44083),Ml=s(10286),Nl=s(33941),Zl=s(47111),Ol=s(56036),El=s(43880),Tl=s(97512)}}]);
