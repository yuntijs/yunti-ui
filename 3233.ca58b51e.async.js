"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3233],{45791:function(un,le,d){d.r(le);var Te=d(70190),u=d(75271),De=d(90142),L=d(99335),Ee=d(69714),p=d(52676),Le=(0,u.memo)(function(v){var O=v.editing,ae=v.onChange,Oe=v.onEditingChange,s=v.text,oe=v.message,pe=v.placement,q=v.messageExtra,Y=v.renderMessage,xe=v.type,Ne=v.primary,R=v.onDoubleClick,ge=v.fontSize,me=v.markdownProps,Ce=v.markdownClassname,ie=(0,Ee.useStyles)({editing:O,placement:pe,primary:Ne,type:xe}),ne=ie.cx,ee=ie.styles,E=(0,Te.F)(),_=E.mobile,ce=(0,p.jsx)(L.default,{classNames:{input:ee.editingInput,markdown:Ce},editButtonSize:"small",editing:O,fontSize:ge,fullFeaturedCodeBlock:!0,markdownProps:me,onChange:ae,onEditingChange:Oe,openModal:_?O:void 0,text:s,value:oe?String(oe).trim():""}),w=Y?Y(ce):ce;return(0,p.jsxs)(De.D,{className:ne(ee.message,O&&ee.editingContainer),onDoubleClick:R,children:[w,q&&!O?(0,p.jsx)("div",{className:ee.messageExtra,children:q}):null]})});le.default=Le},48009:function(un,le,d){d.r(le);var Te=d(26068),u=d.n(Te),De=d(67825),L=d.n(De),Ee=d(62231),p=d(17757),Le=d(22809),v=d(90462),O=d(61397),ae=d(15708),Oe=d(70190),s=d(75271),oe=d(90142),pe=d(45791),q=d(52676),Y=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname"],xe=32,Ne=(0,s.memo)(function(R){var ge=R.avatarAddon,me=R.onAvatarClick,Ce=R.avatarProps,ie=R.actions,ne=R.className,ee=R.primary,E=R.loading,_=R.message,ce=R.placement,w=ce===void 0?"left":ce,J=R.type,se=J===void 0?"block":J,Ze=R.avatar,Ie=R.error,ve=R.showTitle,Se=R.time,fe=R.editing,Fe=R.onChange,ze=R.onEditingChange,Re=R.messageExtra,Ve=R.renderMessage,be=R.text,qe=R.errorMessage,He=R.onDoubleClick,Qe=R.fontSize,pn=R.markdownProps,gn=R.markdownClassname,fn=L()(R,Y),In=(0,Oe.F)(),sn=In.mobile,mn=(0,ae.useStyles)({editing:fe,placement:w,primary:ee,showTitle:ve,time:Se,title:Ze.title,type:se}),he=mn.cx,en=mn.styles;return(0,q.jsxs)(oe.D,u()(u()({className:he(en.container,ne),direction:w==="left"?"horizontal":"horizontal-reverse",gap:sn?6:12},fn),{},{children:[(0,q.jsx)(p.default,u()(u()({},Ce),{},{addon:ge,avatar:Ze,loading:E,onClick:me,placement:w,size:sn?xe:void 0})),(0,q.jsxs)(oe.D,{align:w==="left"?"flex-start":"flex-end",className:en.messageContainer,children:[(0,q.jsx)(O.default,{avatar:Ze,placement:w,showTitle:ve,time:Se}),(0,q.jsxs)(oe.D,{align:w==="left"?"flex-start":"flex-end",className:en.messageContent,direction:se==="block"?w==="left"?"horizontal":"horizontal-reverse":"vertical",gap:8,children:[Ie?(0,q.jsx)(v.default,{error:Ie,message:qe,placement:w}):(0,q.jsx)(pe.default,{editing:fe,fontSize:Qe,markdownClassname:gn,markdownProps:pn,message:_,messageExtra:Re,onChange:Fe,onDoubleClick:He,onEditingChange:ze,placement:w,primary:ee,renderMessage:Ve,text:be,type:se}),(0,q.jsx)(Ee.default,{actions:ie,editing:fe,placement:w,type:se})]})]}),sn&&se==="block"&&(0,q.jsx)(Le.default,{borderSpacing:xe})]}))});le.default=Ne},69714:function(un,le,d){d.r(le),d.d(le,{useStyles:function(){return Ce}});var Te=d(53649),u=d.n(Te),De=d(69049),L,Ee,p,Le,v,O,ae,Oe,s,oe,pe,q,Y,xe,Ne,R,ge,me,Ce=(0,De.kc)(function(ie,ne){var ee=ie.cx,E=ie.css,_=ie.token,ce=ie.isDarkMode,w=ie.responsive,J=ne.placement,se=ne.type,Ze=ne.title,Ie=ne.primary,ve=ne.avatarSize,Se=ne.editing,fe=ne.time,Fe=E(L||(L=u()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Ie?ce?_.colorFill:_.colorBgElevated:ce?_.colorFillSecondary:_.colorBgContainer,_.borderRadiusLG,_.motionEaseOut),ze=E(Ee||(Ee=u()([`
      padding-block-start: `,`;
    `])),Ze?0:"6px"),Re=E(p||(p=u()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),_.motionEaseOut),Ve=se==="block"?Fe:ze,be=Se&&E(Le||(Le=u()([`
        width: 100%;
      `])));return{actions:ee(E(v||(v=u()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),se==="block"?"flex-end":J==="left"?"flex-start":"flex-end",J==="left"?"flex-end":"flex-start"),Se&&E(O||(O=u()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:E(ae||(ae=u()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),ve,ve),avatarGroupContainer:E(Oe||(Oe=u()([`
        width: `,`px;
      `])),ve),container:ee(se==="pure"&&Re,E(s||(s=u()([`
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
        `])),_.motionEaseOut,w.mobile,se==="pure"?"12px":"6px")),editingContainer:ee(be,E(oe||(oe=u()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),_.colorBorderSecondary,_.colorBorder),se==="pure"&&E(pe||(pe=u()([`
            background: `,`;
            border-radius: `,`px;
          `])),_.colorFillQuaternary,_.borderRadius)),editingInput:E(q||(q=u()([`
        width: 100%;
      `]))),errorContainer:E(Y||(Y=u()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:E(xe||(xe=u()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),J==="right"?"-4px":"unset",J==="left"?"-4px":"unset",_.colorBgLayout,_.colorPrimary),message:ee(Ve,E(Ne||(Ne=u()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),w.mobile)),messageContainer:ee(be,E(R||(R=u()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),fe?-16:0,w.mobile)),messageContent:ee(be,E(ge||(ge=u()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),w.mobile)),messageExtra:ee("message-extra"),name:E(me||(me=u()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),_.colorTextDescription,J==="left"?"left":"right")}})},99335:function(un,le,d){d.r(le);var Te=d(26068),u=d.n(Te),De=d(48305),L=d.n(De),Ee=d(50119),p=d(76079),Le=d(72566),v=d(75271),O=d(65720),ae=d(52676),Oe=(0,v.memo)(function(s){var oe=s.value,pe=s.onChange,q=s.classNames,Y=q===void 0?{}:q,xe=s.onEditingChange,Ne=s.editing,R=s.openModal,ge=s.onOpenChange,me=s.placeholder,Ce=s.showEditWhenEmpty,ie=Ce===void 0?!1:Ce,ne=s.styles,ee=s.height,E=s.inputType,_=s.editButtonSize,ce=s.text,w=s.fullFeaturedCodeBlock,J=s.model,se=s.fontSize,Ze=s.markdownProps,Ie=(0,O.default)(!1,{onChange:xe,value:Ne}),ve=L()(Ie,2),Se=ve[0],fe=ve[1],Fe=(0,O.default)(!1,{onChange:ge,value:R}),ze=L()(Fe,2),Re=ze[0],Ve=ze[1],be=ee==="auto",qe=(0,ae.jsx)(Ee.Z,{className:Y==null?void 0:Y.input,classNames:{textarea:Y==null?void 0:Y.textarea},defaultValue:oe,editButtonSize:_,height:ee,onCancel:function(){return fe(!1)},onConfirm:function(Qe){pe==null||pe(Qe),fe(!1)},placeholder:me,style:ne==null?void 0:ne.input,text:ce,textareaClassname:Y==null?void 0:Y.input,type:E});return!oe&&ie?qe:(0,ae.jsxs)(ae.Fragment,{children:[!Re&&Se?qe:(0,ae.jsx)(p.Z,u()(u()({className:Y==null?void 0:Y.markdown,fontSize:se,fullFeaturedCodeBlock:w,style:u()({height:be?"unset":ee},ne==null?void 0:ne.markdown),variant:"chat"},Ze),{},{children:oe||me||""})),Re&&(0,ae.jsx)(Le.Z,{editing:Se,extra:J==null?void 0:J.extra,footer:J==null?void 0:J.footer,height:ee,onChange:pe,onEditingChange:fe,onOpenChange:function(Qe){Ve(Qe),fe(!1)},open:Re,placeholder:me,text:ce,value:oe})]})});le.default=Oe},63233:function(un,le,d){d.r(le),d.d(le,{Affix:function(){return Zl.Z},Alert:function(){return _r},Anchor:function(){return Il.Z},AntdMentions:function(){return Rl.Z},App:function(){return ao},AutoComplete:function(){return Bl.Z},Avatar:function(){return Jn.C},BackTop:function(){return Fl.Z},Badge:function(){return sr.Z},BaseMonacoEditor:function(){return Gn},Breadcrumb:function(){return _t.Z},Button:function(){return J.ZP},Calendar:function(){return zl.Z},Card:function(){return Ns.Z},Carousel:function(){return Hl.Z},Cascader:function(){return $l.Z},ChatInputActionBar:function(){return pl.Z},ChatInputArea:function(){return ul},ChatInputAreaInner:function(){return No.Z},ChatSendButton:function(){return gl.Z},Checkbox:function(){return Ul.Z},Col:function(){return Yn.Z},Collapse:function(){return _n.Z},CollapseGroup:function(){return q},CollapseTable:function(){return Oo},ColorPicker:function(){return Vl.Z},ConfigContext:function(){return ge},ConfigProvider:function(){return me},DatePicker:function(){return Ql.default},Descriptions:function(){return Xn},Divider:function(){return ir},DragPanel:function(){return Ve},Drawer:function(){return Ds},Dropdown:function(){return fo},Empty:function(){return bt.Z},Flex:function(){return w.Z},FloatButton:function(){return Wl.Z},Form:function(){return yo},FormCollapseList:function(){return ho},FormHelper:function(){return Co},FullFeaturedHighlighter:function(){return _o},Grid:function(){return Kl.ZP},HeaderButtonGroup:function(){return ur},Highlighter:function(){return Dl},Image:function(){return Gl.Z},Input:function(){return Jl.Z},InputNumber:function(){return Jr.Z},Layout:function(){return Xl.Z},List:function(){return Yl.Z},LogViewer:function(){return oa},Logo:function(){return mn},Markdown:function(){return jc.Z},Mentions:function(){return ni},Menu:function(){return _l.Z},MobileChatInputArea:function(){return fl.Z},MobileChatSendButton:function(){return ml.Z},Modal:function(){return Ae},MonacoController:function(){return Bt},MonacoDiffEditor:function(){return hi},MonacoEditor:function(){return bi},NotificationGlobalStyle:function(){return no},Page:function(){return rn},Pagination:function(){return ec.Z},Popconfirm:function(){return nc.Z},Popover:function(){return tc.Z},ProCard:function(){return En},Progress:function(){return rc.Z},QRCode:function(){return oc.Z},Radio:function(){return Eo},Rate:function(){return ac.Z},Result:function(){return er.ZP},Row:function(){return Kr.Z},Segmented:function(){return ic.Z},Select:function(){return Io.default},Skeleton:function(){return Ge.Z},Slider:function(){return Gr.Z},SliderInput:function(){return bs},Space:function(){return An.Z},Spin:function(){return sc.Z},Statistic:function(){return lc.Z},Status:function(){return dr},Steps:function(){return cc.Z},Switch:function(){return dc.Z},SyntaxHighlighter:function(){return kc.Z},Table:function(){return we},Tabs:function(){return uc.Z},Tag:function(){return pc.Z},TimePicker:function(){return mc.Z},Timeline:function(){return fc.Z},Tooltip:function(){return Ke.Z},Tour:function(){return vc.Z},Transfer:function(){return bc.Z},Tree:function(){return hc.Z},TreeSelect:function(){return yc.Z},Typography:function(){return Cn},Upload:function(){return xc.Z},Watermark:function(){return Sc.Z},colorScales:function(){return ye},colors:function(){return ye},generateColorNeutralPalette:function(){return Ml},generateColorPalette:function(){return kl},message:function(){return ql.ZP},neutralColorScales:function(){return Al},notification:function(){return Ls},theme:function(){return gc.Z},useAutoFocus:function(){return xo},useCdnFn:function(){return ie},useLink:function(){return ne},useResponsive:function(){return Mc.F},useTheme:function(){return O.Fg},useThemeMode:function(){return Qn.r},version:function(){return Cc.Z},withFormHelper:function(){return Gs}});var Te=d(26068),u=d.n(Te),De=d(67825),L=d.n(De),Ee=d(34013),p=d(75271),Le=d(53649),v=d.n(Le),O=d(69049),ae,Oe=(0,O.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(ae||(ae=v()([`
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
    `])),t.margin,n,t.paddingSM,t.paddingSM,t.paddingSM,t.fontSize,t.padding,t.padding,t.paddingSM,t.paddingSM,t.paddingXS,t.colorBgContainer)}}),s=d(52676),oe=["className","variant"],pe=Ee.Z.Group,q=function(e){var t=e.className,n=e.variant,a=L()(e,oe),o=Oe(),i=o.styles,l=o.cx;return(0,s.jsx)(pe,u()({className:l(i.root,t),collapsible:n==="pure"?"icon":"header",variant:n},a))},Y=d(56264),xe="https://unpkg.com",Ne="https://registry.npmmirror.com",R=function(e){var t=e.pkg,n=e.version,a=n===void 0?"latest":n,o=e.path,i=e.proxy;switch(i){case"unpkg":return(0,Y.Z)(xe,"".concat(t,"@").concat(a),o);default:return(0,Y.Z)(Ne,t,a,"files",o)}},ge=(0,p.createContext)(null),me=(0,p.memo)(function(r){var e=r.children,t=r.config;return(0,s.jsx)(ge.Provider,{value:t,children:e})}),Ce=function(e){var t=e.pkg,n=e.version,a=e.path;return R({path:a,pkg:t,proxy:"aliyun",version:n})},ie=function(){var e=(0,p.useContext)(ge);return e?(e==null?void 0:e.proxy)!=="custom"?function(t){var n=t.pkg,a=t.version,o=t.path;return R({path:o,pkg:n,proxy:e.proxy,version:a})}:(e==null?void 0:e.customCdnFn)||Ce:Ce},ne=function(){var e=(0,p.useContext)(ge);return e==null?void 0:e.Link},ee=d(48305),E=d.n(ee),_=d(97157),ce=d(85660),w=d(71414),J=d(44295),se=d(84569),Ze=d.n(se),Ie,ve,Se,fe,Fe,ze=(0,O.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(Ie||(Ie=v()([`
      overflow: hidden;
    `]))),wrapper:e(ve||(ve=v()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),t.marginLG),content:e(Se||(Se=v()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.borderRadiusLG,t.boxShadowSecondary),dragWrapper:e(fe||(fe=v()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:e(Fe||(Fe=v()([`
      cursor: move;
    `])))}}),Re=["title","classNames","defaultPosition","onPositionChange"],Ve=(0,p.memo)(function(r){var e=r.title,t=r.classNames,n=t===void 0?{}:t,a=r.defaultPosition,o=r.onPositionChange,i=L()(r,Re),l=ze(),c=l.styles,g=l.cx,f=(0,p.useState)({left:0,top:0,bottom:0,right:0}),m=E()(f,2),b=m[0],y=m[1],h=(0,p.useRef)(null),C=function(k,j){var T,A=window.document.documentElement,N=A.clientWidth,V=A.clientHeight,B=(T=h.current)===null||T===void 0?void 0:T.getBoundingClientRect();B&&y({left:-B.left+j.x,right:N-(B.right-j.x),top:-B.top+j.y,bottom:V-(B.bottom-j.y)})};return(0,s.jsx)(ce.Z,u()(u()({},i),{},{classNames:u()(u()({},n),{},{wrapper:g(c.wrapper,n.wrapper),content:g(c.content,n.content)}),destroyOnClose:!0,drawerRender:function(k){return(0,s.jsx)(Ze(),{bounds:b,defaultPosition:a,handle:".".concat(c.dragHandle),nodeRef:h,onStart:function(T,A){return C(T,A)},onStop:function(T,A){o==null||o({x:A.x,y:A.y})},children:(0,s.jsx)("div",{className:c.dragWrapper,ref:h,children:k})})},mask:!1,rootClassName:c.root,title:(0,s.jsxs)(w.Z,{align:"center",className:c.dragHandle,children:[(0,s.jsx)(w.Z,{flex:2,children:e}),(0,s.jsx)(w.Z,{children:(0,s.jsx)(J.ZP,{className:c.dragHandle,icon:(0,s.jsx)(_.Z,{}),type:"text"})})]})}))}),be=d(90142),qe=d(36075),He=d.n(qe),Qe=(0,p.memo)(function(r){var e=Object.assign({},(He()(r),r));return(0,s.jsx)("svg",u()(u()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},e),{},{children:(0,s.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),pn=(0,p.memo)(function(r){var e=Object.assign({},(He()(r),r));return(0,s.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},e),{},{children:[(0,s.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,s.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,s.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),gn=(0,p.memo)(function(r){var e=Object.assign({},(He()(r),r));return(0,s.jsxs)("svg",u()(u()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,s.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,s.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,s.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,s.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,s.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,s.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,s.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),fn,In=(0,O.kc)(function(r){var e=r.css;return{extraTitle:e(fn||(fn=v()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),sn=["type","size","style","extra","className"],mn=(0,p.memo)(function(r){var e=r.type,t=e===void 0?"img":e,n=r.size,a=n===void 0?32:n,o=r.style,i=r.extra,l=r.className,c=L()(r,sn),g=(0,O.Fg)(),f=In(),m=f.styles,b;switch(t){case"text":{b=(0,s.jsx)(gn,u()({className:l,height:a,style:o,width:a*2.9375},c));break}case"combine":{b=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(pn,u()({height:a,style:o,width:a},c)),(0,s.jsx)(gn,{style:{height:a,marginLeft:Math.round(a/4),width:"auto"}})]});break}case"img":default:{b=(0,s.jsx)(pn,u()({height:a,style:o,width:a},c));break}}if(!i)return b;var y=Math.round(a/3*1.9);return(0,s.jsxs)(be.D,u()(u()({align:"center",className:l,horizontal:!0,style:o},c),{},{children:[b,(0,s.jsx)(Qe,{style:{color:g.colorFill,height:y,width:y}}),(0,s.jsx)("div",{className:m.extraTitle,style:{fontSize:y},children:i})]}))}),he=d(71617),en=d(50999),qo=d(41117),ea=d(45798),na=d(3548),at,it,ta=(0,O.kc)(function(r){var e=r.css,t=r.token,n="#222222";return{root:e(at||(at=v()([`
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
      `])),n,t.borderRadiusLG,t.marginXXS,t.paddingXS,n,t.borderRadiusLG,t.borderRadiusLG,t.borderRadius,t.borderRadius,n,t.borderRadiusLG),searchBarIcon:e(it||(it=v()([`
        font-size: 16px;
      `])))}},{hashPriority:"low"}),ra=["className","id","style","height","onScroll"],oa=function(e){var t=e.className,n=e.id,a=e.style,o=e.height,i=e.onScroll,l=L()(e,ra),c=ta(),g=c.cx,f=c.styles;return(0,s.jsx)("div",{className:g(f.root,t),id:n,style:u()({height:o},a),children:(0,s.jsx)(en.Uu,{render:function(b){var y=b.follow,h=b.onScroll;return(0,s.jsx)(en.A9,u()(u()({},l),{},{follow:y,height:o,iconFilterLines:(0,s.jsx)(he.Z,{className:f.searchBarIcon,icon:qo.Z}),iconFindNext:(0,s.jsx)(he.Z,{className:f.searchBarIcon,icon:ea.Z}),iconFindPrevious:(0,s.jsx)(he.Z,{className:f.searchBarIcon,icon:na.Z}),onScroll:function(x){h(x),i==null||i(x)}}))},startFollowing:!0})})},aa=d(82092),U=d.n(aa),ia=d(504),sa=d(22993),la=d(54397),ca=d(69789),da=d(9668),ua=d(67568),$=d(65694),Rn=typeof window!="undefined",pa=d(25298),vn=d.n(pa),ga=d(17069),bn=d.n(ga),fa=d(9504),ma=d.n(fa),va=d(38836),ba=d.n(va),ha=d(21742),Bn=d.n(ha),ya=d(83136),Fn=d.n(ya),hn=function(r){Bn()(t,r);var e=Fn()(t);function t(){return vn()(this,t),e.apply(this,arguments)}return bn()(t,[{key:"createDOM",value:function(a){var o=ma()(ba()(t.prototype),"createDOM",this).call(this,a);return o.classList.add("align-middle"),o}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(a){return new t(a.__text,a.__key)}},{key:"importJSON",value:function(a){var o=(0,$.MX)(a.text);return o.setFormat(a.format),o.setDetail(a.detail),o.setMode(a.mode),o.setStyle(a.style),o}}]),t}($.R2);function Lc(r){return new hn(r)}var We=d(97780),yn=d(95138),xa=d(62657),je=d.n(xa),Ke=d(13399),Ca=d(69024),st=(0,p.createContext)(null),Sa=(0,p.memo)(function(r){var e=r.children,t=r.value;return(0,s.jsx)(st.Provider,{value:t,children:e})}),ja=function(){var e=(0,p.useContext)(st);return e==null?void 0:e.optionsMap},ka=d(25272),Ma=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,Aa="\\(",wa=function(e){return"(?:"+e.join("|")+")"},Ea=function(e,t){var n=e.length===0?"":"(?!"+e.join("|")+")";return n+"[^\\s"+t+"]"},La=function(e){return"(?:\\.[ |$]|\\s|["+e+"]|)"},Oa=75,Na=function(e,t){var n=(0,p.useRef)(null),a=(0,We.g)(),o=E()(a,1),i=o[0],l=(0,ka.y)(e),c=E()(l,3),g=c[0],f=c[1],m=c[2],b=(0,p.useCallback)(function(h){var C=(0,$.dL)(),x=C==null?void 0:C.getNodes();if(!g&&(x==null?void 0:x.length)===1&&i.dispatchCommand(t,void 0),g&&(0,$.iO)(C)){h.preventDefault();var k=(0,$.gI)(e);if((0,$.k$)(k))return t&&i.dispatchCommand(t,void 0),k.remove(),!0}return!1},[g,e,t,i]),y=(0,p.useCallback)(function(h){h.stopPropagation(),m(),f(!0)},[f,m]);return(0,p.useEffect)(function(){var h=n.current;return h&&h.addEventListener("click",y),function(){h&&h.removeEventListener("click",y)}},[y]),(0,p.useEffect)(function(){return(0,yn.qV)(i.registerCommand($.MK,b,$.KB),i.registerCommand($.aR,b,$.KB))},[i,m,b]),[n,g]},Oc=function(){var e=useRef(null),t=useState(!1),n=_slicedToArray(t,2),a=n[0],o=n[1],i=useCallback(function(l){l.stopPropagation(),o(function(c){return!c})},[]);return useEffect(function(){var l=e.current;return l&&l.addEventListener("click",i),function(){l&&l.removeEventListener("click",i)}},[i]),[e,a,o]};function Pa(r,e,t,n){return new RegExp((e?"(^|\\s|".concat(e,")("):"(^|\\s)(")+wa(r)+"((?:"+Ea(r,t)+(n?La(t):"")+"){0,"+Oa+"}))$")}function Ta(r,e,t,n,a){var o=Pa(e,t,n,a).exec(r);if(o!==null){var i=o[1],l=o[2],c=o[3];if(l.length>0)return{leadOffset:o.index+i.length,matchingString:c,replaceableString:l}}return null}var Da=function(e,t){var n=t.punctuation,a=t.preTriggerChars,o=t.allowSpaces,i=(0,p.useState)(null),l=E()(i,2),c=l[0],g=l[1],f=(0,p.useCallback)(function(m){var b=Ta(m,e,a,n,o);if(b){var y=b.replaceableString,h=b.matchingString,C=y.lastIndexOf(h),x=C===-1?y:y.slice(0,Math.max(0,C))+y.slice(Math.max(0,C+h.length));if(g(x||null),b.replaceableString)return b}else g(null);return null},[a,o,n,e]);return{trigger:c,checkForMentionMatch:f}},lt,ct,dt,Za=(0,O.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.isError,l=function(){return i?o?{background:n.colorErrorBgActive,border:n.colorErrorBorderHover,color:n.colorErrorTextActive}:{background:n.colorErrorBg,border:n.colorErrorBorder,color:n.colorErrorText}:o?{background:n.colorInfoBgHover,border:n.colorInfoBorder,color:n.colorInfoText}:{background:n.colorFillTertiary,border:"transparent",color:n.colorInfoText}},c=l(),g=c.background,f=c.border,m=c.color;return{root:t(lt||(lt=v()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),n.fontFamilyCode,m,g,f,n.borderRadius),text:t(ct||(ct=v()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.colorTextSecondary),error:t(dt||(dt=v()([`
        color: `,`;
      `])),n.colorErrorText)}}),ut=(0,$.fA)("INSERT_MENTION_COMMAND"),pt=(0,$.fA)("DELETE_MENTION_COMMAND"),gt=(0,$.fA)("CLEAR_HIDE_MENU_TIMEOUT"),ft=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,Ia=(0,p.memo)(function(r){var e=r.nodeKey,t=r.variable,n=ja(),a=(0,We.g)(),o=E()(a,1),i=o[0],l=Na(e,pt),c=E()(l,2),g=c[0],f=c[1],m=n==null?void 0:n[t],b=Za({isSelected:f,isError:!m||!!m.error}),y=b.styles;(0,p.useEffect)(function(){if(!i.hasNodes([nn]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[i]);var h=(0,s.jsx)(w.Z,{className:y.root,ref:g,children:(0,s.jsxs)(w.Z,{align:"center",gap:2,children:[(!m||m.error)&&(0,s.jsx)(he.Z,{className:y.error,icon:Ca.Z}),(m==null?void 0:m.icon)&&(0,s.jsx)(w.Z,{children:m.icon}),(0,s.jsx)(w.Z,{className:y.text,gap:2,title:(m==null?void 0:m.label)||t,children:(0,s.jsx)("span",{children:(m==null?void 0:m.label)||t})})]})});return m!=null&&m.error?(0,s.jsx)(Ke.Z,{title:m==null?void 0:m.error,children:h}):h}),nn=function(r){Bn()(t,r);var e=Fn()(t);function t(n,a,o){var i;return vn()(this,t),i=e.call(this,o),U()(je()(i),"__variable",void 0),i.__variable=n,i}return bn()(t,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var a=document.createElement("div");return a.style.display="inline-flex",a.style.alignItems="center",a.style.verticalAlign="middle",a}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,s.jsx)(Ia,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var a=this.getLatest();return a.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(a){return new t(a.__variable)}},{key:"importJSON",value:function(a){var o=zn(a.variable);return o}}]),t}($.Ij);function zn(r){return new nn(r)}function Nc(r){return r instanceof nn}var Pc=(0,$.fA)("INSERT_MENTION_COMMAND"),Tc=(0,$.fA)("DELETE_MENTION_COMMAND"),Dc=(0,$.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Zc=(0,$.fA)("UPDATE_MENTIONS_OPTIONS"),Ra=function(e,t,n){if(e.isSimpleText())for(var a=e.getPreviousSibling(),o=e.getTextContent(),i=e,l;;){l=t(o);var c=l===null?"":o.slice(l.end);if(o=c,c===""){var g=i.getNextSibling();if((0,$.Gg)(g)){c=i.getTextContent()+g.getTextContent();var f=t(c);if(f===null){g.markDirty();return}else if(f.start!==0)return}}else{var m=t(c);if(m!==null&&m.start===0)return}if(l===null)return;if(!(l.start===0&&(0,$.Gg)(a)&&a.isTextEntity())){var b=void 0;if(l.start===0){var y=i.splitText(l.end),h=E()(y,2);b=h[0],i=h[1]}else{var C=i.splitText(l.start,l.end),x=E()(C,3);b=x[1],i=x[2]}var k=n(b);if(b.replace(k),i==null)return}}};function Ba(r){var e=r.split(`
`);return JSON.stringify({root:{children:e.map(function(t){return{children:[{detail:0,format:0,mode:"normal",style:"",text:t,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Fa=(0,p.memo)(function(r){var e=r.onInsert,t=(0,We.g)(),n=E()(t,1),a=n[0];(0,p.useEffect)(function(){if(!a.hasNodes([nn]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[a]);var o=(0,p.useCallback)(function(c){e&&e();var g=c.getTextContent().slice(2,-2);return(0,$.U2)(zn(g))},[e]),i=(0,p.useCallback)(function(c){var g=ft.exec(c);if(g===null)return null;var f=g.index,m=f+g[0].length;return{end:m,start:f}},[]),l=(0,p.useCallback)(function(c){return Ra(c,i,o)},[o,i]);return(0,p.useEffect)(function(){return ft.lastIndex=0,(0,yn.qV)(a.registerNodeTransform(hn,l))},[]),null}),mt=(0,p.memo)(function(r){var e=r.onInsert,t=r.onDelete,n=(0,We.g)(),a=E()(n,1),o=a[0];return(0,p.useEffect)(function(){if(!o.hasNodes([nn]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,yn.qV)(o.registerCommand(ut,function(i){o.dispatchCommand(gt,null);var l=zn(i);return(0,$.od)([l]),e&&e(),!0},$.VN),o.registerCommand(pt,function(){return t&&t(),!0},$.VN))},[o,e,t]),null});mt.displayName="MentionNodePlugin";var vt=d(4337),za=d(30967),Ha=function(r){Bn()(t,r);var e=Fn()(t);function t(n,a,o){var i;return vn()(this,t),i=e.call(this,n),U()(je()(i),"label",void 0),U()(je()(i),"value",void 0),U()(je()(i),"icon",void 0),U()(je()(i),"extraElement",void 0),U()(je()(i),"keywords",void 0),U()(je()(i),"keyboardShortcut",void 0),U()(je()(i),"onSelect",void 0),U()(je()(i),"disabled",void 0),U()(je()(i),"data",void 0),i.value=n,i.label=a,i.keywords=o.keywords||[],i.icon=o.icon,i.extraElement=o.extraElement,i.keyboardShortcut=o.keyboardShortcut,i.onSelect=o.onSelect.bind(je()(i)),i.disabled=o.disabled,i.data=o.data,i}return bn()(t)}(vt.n),$a=function(e,t){var n=(0,We.g)(),a=E()(n,1),o=a[0],i=(0,p.useMemo)(function(){var l=e.map(function(g){return new Ha(g.value,g.label,{icon:g.icon,onSelect:function(){o.dispatchCommand(ut,g.value)},disabled:g.disabled,data:g.data,extraElement:g.extraElement,keywords:g.keywords,keyboardShortcut:g.keyboardShortcut})});if(!t)return l;var c=new RegExp(t,"i");return l.filter(function(g){var f;return c.test(g.label)||((f=g.keywords)===null||f===void 0?void 0:f.some(function(m){return c.test(m)}))})},[e,t,o]);return{options:i}},bt=d(53202),xn=d(71076),Ua=d(28026),ln=d.n(Ua),Va=d(81792),Qa=d.n(Va),Wa=d(45832),Ka=["time","format","relativeTime","tooltip"];ln().extend(Qa());var Cn=xn.Z,Hn=function(e){return ln()(e?new Date(e):new Date).fromNow()},Ga=function(e){var t,n=e.time,a=e.format,o=e.relativeTime,i=o===void 0?!0:o,l=e.tooltip,c=L()(e,Ka),g=(0,p.useState)(Hn(n)),f=E()(g,2),m=f[0],b=f[1],y=(0,p.useCallback)(function(k){var j=ln()(),T=ln()(k),A=j.diff(T);if(A>0&&A<60*60*1e3)return setInterval(function(){b(Hn(k))},60*1e3)},[]);(0,p.useEffect)(function(){var k;return i&&(k=y(new Date(n))),function(){k&&clearInterval(k)}},[i,y,n]),(0,p.useEffect)(function(){if(i){var k=Hn(n);k!==m&&(b(k),y(new Date(n)))}},[n,i,m,y]);var h=ln()(n).format(a||"YYYY-MM-DD HH:mm:ss"),C=i?m:h,x=(t=l==null?void 0:l.title)!==null&&t!==void 0?t:i?h:void 0;return x&&(0,Wa.Z)(c,"ellipsis.tooltip.title",void 0),(0,s.jsx)(Ke.Z,u()(u()({},l||{}),{},{title:x,children:(0,s.jsx)(Cn.Text,u()(u()({},c),{},{children:C}))}))};Cn.Time=Ga;var $n=Cn,ht,yt,xt,Ct,St,jt,kt,Un=(0,O.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.isSelected,i=e.disabled,l=t(ht||(ht=v()([`
      background-color: `,`;
    `])),n.colorFillTertiary);return{anchor:t(yt||(yt=v()([`
        z-index: 9999;
      `]))),menuEmpty:t(xt||(xt=v()([`
        padding: `,`px;
      `])),n.padding),menuOverlay:t(Ct||(Ct=v()([`
        overflow: auto;

        width: 240px;
        max-height: 320px;
        margin-top: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.marginXXS,n.colorBgElevated,n.borderRadius,n.boxShadow),menuItem:t(St||(St=v()([`
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
      `])),i?"not-allowed":"pointer",i?"none":"all",n.paddingSM/2,n.paddingSM,n.borderRadius,i?n.colorTextDisabled:n.colorText,n.fontSize,n.lineHeight,o&&l,l),menuItemIcon:t(jt||(jt=v()([`
        color: `,`;
      `])),n.colorInfoText),menuItemLabel:t(kt||(kt=v()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Ja=$n.Text,Mt=(0,p.memo)(function(r){var e=r.index,t=r.isSelected,n=r.onClick,a=r.onMouseEnter,o=r.option,i=r.queryString,l=Un({isSelected:t,disabled:o.disabled}),c=l.styles,g=o.label,f=(0,p.useMemo)(function(){var h=g,C="",x="";if(i){var k=new RegExp(i,"i"),j=k.exec(o.label);j&&(h=g.slice(0,Math.max(0,j.index)),C=j[0],x=g.slice(Math.max(0,j.index+j[0].length)))}return{before:h,middle:C,after:x}},[o.label,i,g]),m=f.before,b=f.middle,y=f.after;return(0,s.jsxs)(w.Z,{align:"center",className:c.menuItem,gap:4,onClick:function(){return n(e,o)},onMouseEnter:function(){return a(e,o)},ref:o.setRefElement,tabIndex:-1,children:[(0,s.jsx)(w.Z,{className:c.menuItemIcon,children:o.icon}),(0,s.jsxs)("div",{className:c.menuItemLabel,title:o.label,children:[m,(0,s.jsx)(Ja,{mark:!0,children:b}),y]}),(0,s.jsx)(w.Z,{children:o.extraElement})]},o.key)});Mt.displayName="MentionMenuItem";var Xa=(0,p.memo)(function(r){var e=r.selectedIndex,t=r.options,n=r.onClick,a=r.onMouseEnter,o=r.queryString,i=Un({}),l=i.styles;return(0,s.jsxs)(s.Fragment,{children:[t.length===0&&(0,s.jsx)(bt.Z,{className:l.menuEmpty}),t.map(function(c,g){return(0,s.jsx)(Mt,{index:g,isSelected:e===g,onClick:n,onMouseEnter:a,option:c,queryString:o},c.key)})]})}),Ya=(0,p.memo)(function(r){var e=r.triggers,t=r.options,n=t===void 0?[]:t,a=r.allowSpaces,o=a===void 0?!0:a,i=r.punctuation,l=i===void 0?Ma:i,c=r.preTriggerChars,g=c===void 0?Aa:c,f=r.onSelect,m=Un({}),b=m.styles,y=(0,We.g)(),h=E()(y,1),C=h[0],x=Da(e,{punctuation:l,preTriggerChars:g,allowSpaces:o}),k=x.trigger,j=x.checkForMentionMatch,T=(0,p.useState)(null),A=E()(T,2),N=A[0],V=A[1],B=$a(n,N),Q=B.options,K=(0,p.useCallback)(function(S,M,z,D){f==null||f(S,k,N),C.update(function(){M&&S!==null&&S!==void 0&&S.key&&M.remove(),S!=null&&S.onSelect&&S.onSelect(D),z()})},[C,f,N,k]),P=(0,p.useCallback)(function(S,M){var z=M.selectedIndex,D=M.selectOptionAndCleanUp,G=M.setHighlightedIndex;return S.current?za.createPortal((0,s.jsx)("div",{className:b.menuOverlay,role:"menu",children:(0,s.jsx)(Xa,{onClick:function(Z,W){W.disabled||(G(Z),D(W))},onMouseEnter:function(Z,W){W.disabled||G(Z)},options:Q,queryString:N,selectedIndex:z})}),S.current):null},[Q,N,b.menuOverlay]);return(0,s.jsx)(vt.HQ,{anchorClassName:b.anchor,menuRenderFn:P,onQueryChange:V,onSelectOption:K,options:Q,triggerFn:j})}),_a=function(e){var t=e.onBlur,n=e.onFocus,a=(0,We.g)(),o=E()(a,1),i=o[0],l=(0,p.useRef)(null);return(0,p.useEffect)(function(){return(0,yn.qV)(i.registerCommand(gt,function(){return l.current&&(clearTimeout(l.current),l.current=null),!0},$.VN),i.registerCommand($.Gq,function(){return l.current=setTimeout(function(){i.dispatchCommand($.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),t&&t(),!0},$.VN),i.registerCommand($.m$,function(){return n&&n(),!0},$.VN))},[i,t,n]),null},qa=_a,At,wt,Et,Lt,Ot,Nt,Pt,Tt,Vn=32,Dt=22,Zt=function(e){return Vn+Math.max(e-1,0)*Dt},ei=(0,O.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.autoSize;return{wrapper:t(At||(At=v()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:t(wt||(wt=v()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Vn,n.fontSize,Vn,n.colorTextPlaceholder),root:t(Et||(Et=v()([`
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
      `])),n.colorBorder,n.borderRadius,n.colorText,n.fontSize,n.fontFamily,(o==null?void 0:o.minRows)&&t(Lt||(Lt=v()([`
          min-height: `,`px;
        `])),Zt(o.minRows)),(o==null?void 0:o.maxRows)&&t(Ot||(Ot=v()([`
          max-height: `,`px;
        `])),Zt(o.maxRows)),n.motionDurationMid,n.colorPrimaryBorder,Dt),filled:t(Nt||(Nt=v()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),n.colorFillTertiary,n.colorFillSecondary,n.colorBgBase),borderless:t(Pt||(Pt=v()([`
        background: transparent;
        border: none;
      `]))),disabled:t(Tt||(Tt=v()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),n.colorTextDisabled,n.colorBgContainerDisabled)}}),ni=function(e){var t=e.className,n=e.wrapperClassname,a=e.placeholder,o=e.style,i=e.value,l=e.defaultValue,c=e.readOnly,g=c===void 0?!1:c,f=e.disabled,m=f===void 0?!1:f,b=e.onChange,y=e.onBlur,h=e.onFocus,C=e.variant,x=C===void 0?"outlined":C,k=e.options,j=k===void 0?[]:k,T=e.autoSize,A=e.triggers,N=A===void 0?["@"]:A,V=e.allowSpaces,B=e.punctuation,Q=e.preTriggerChars,K=e.onSelect,P=ei({autoSize:T}),S=P.styles,M=P.cx,z=!g&&!m,D=(0,p.useMemo)(function(){return{namespace:"mentions",nodes:[hn,{replace:$.R2,with:function(W){return new hn(W.__text)}},nn],editorState:Ba(i||l||""),onError:function(W){throw W}}},[]),G=function(W){var de=W.read(function(){return(0,$.Gv)().getTextContent()});b==null||b(de.replaceAll(`

`,`
`))},H=(0,p.useMemo)(function(){return j.reduce(function(Z,W){return Z[W.value]=W,Z},{})},[j]);return Rn?(0,s.jsx)(ia.R,{initialConfig:u()(u()({},D),{},{editable:z}),children:(0,s.jsx)(Sa,{value:{optionsMap:H},children:(0,s.jsxs)("div",{className:M(S.wrapper,n),children:[(0,s.jsx)(ua.B,{ErrorBoundary:la.g,contentEditable:(0,s.jsx)(sa.f,{className:M(U()(U()(U()(U()({},S.root,!0),S.filled,x==="filled"),S.borderless,x==="borderless"),S.disabled,m),t),style:o||{}}),placeholder:(0,s.jsx)("div",{className:S.placeholder,children:a||"\u8F93\u5165 ".concat(N.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,s.jsx)(Ya,{allowSpaces:V,onSelect:K,options:j,preTriggerChars:Q,punctuation:B,triggers:N}),(0,s.jsx)(mt,{}),(0,s.jsx)(Fa,{}),(0,s.jsx)(ca.e,{}),(0,s.jsx)(da.$,{onChange:G}),(0,s.jsx)(qa,{onBlur:y,onFocus:h})]})})}):(0,s.jsxs)("div",{className:M(S.wrapper,n),children:[(0,s.jsx)("div",{className:M(U()(U()(U()(U()({},S.root,!0),S.filled,x==="filled"),S.borderless,x==="borderless"),S.disabled,m),t),style:o||{}}),(0,s.jsx)("div",{className:S.placeholder,children:a||"\u8F93\u5165 ".concat(N.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})},Qn=d(54106),It=d(32328),Rt=d(87449),ti=d(90228),$e=d.n(ti),ri=d(87999),Sn=d.n(ri),cn=d(97524),oi=d(42482),Bt=function(){function r(){vn()(this,r),U()(this,"methodMap",void 0),U()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return bn()(r,[{key:"registerMethod",value:function(t,n){this.methodMap[t]=n}},{key:"call",value:function(t){for(var n,a,o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return(n=(a=this.methodMap)[t])===null||n===void 0?void 0:n.call.apply(n,[a].concat(i))}},{key:"updateMeta",value:function(t){Object.assign(this.meta,t)}},{key:"getMeta",value:function(){return Object.freeze(u()({},this.meta))}}]),r}(),Wn="__base_monaco_editor_controller__",jn=Rn&&window;jn&&!jn[Wn]&&(jn[Wn]=new Bt);var ai=jn[Wn],ii=function(){var r,e;return function(){var t=Sn()($e()().mark(function n(a){var o;return $e()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(!r||!(0,oi.Z)(e,a))){l.next=7;break}return o=Object.keys(a||{}).length>0,cn.Z.config(o?a:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),l.next=5,cn.Z.init();case 5:r=l.sent,e=a;case 7:return l.abrupt("return",r);case 8:case"end":return l.stop()}},n)}));return function(n){return t.apply(this,arguments)}}()}(),si=function(e){return e?cn.Z.config(e):cn.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),cn.Z.init()};function li(r){var e=Object.keys(r||{}).length>0,t=e?r:void 0;return ai.getMeta().singleton?ii(t):si(t)}function Ic(r){controller.updateMeta(r)}var ci=Rn&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",Ft=ci==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",Kn={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},di={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function ui(r){var e=(0,p.useRef)();return(0,p.useEffect)(function(){e.current=r},[r]),e.current}function zt(r,e,t,n){if(n){var a=r.editor.getModel(r.Uri.parse(n));if(a)return a}return r.editor.createModel(e,t,n?r.Uri.parse(n):void 0)}var Ht=function(e,t){var n=t.editorDidMount,a=t.editorWillMount,o=t.theme,i=t.value,l=t.path,c=t.language,g=t.saveViewState,f=t.defaultValue,m=t.enhancers,b=(0,p.useState)(!1),y=E()(b,2),h=y[0],C=y[1],x=(0,p.useState)(!1),k=E()(x,2),j=k[0],T=k[1],A=(0,p.useState)(!1),N=E()(A,2),V=N[0],B=N[1],Q=(0,p.useRef)(f),K=(0,p.useRef)(i),P=(0,p.useRef)(c||"text"),S=(0,p.useRef)(l),M=ui(l),z=(0,p.useRef)(t.requireConfig),D=(0,p.useRef)(t.options),G=(0,p.useRef)(),H=(0,p.useRef)(),Z=(0,p.useRef)(),W=(0,p.useRef)(e),de=(0,p.useRef)(),Pe=(0,p.useRef)(),X=(0,p.useRef)(!1),Be=(0,p.useRef)(new Map),Xe=(0,p.useRef)({});(0,p.useEffect)(function(){Xe.current.enhancers=m},[m]),(0,p.useEffect)(function(){de.current=n},[n]),(0,p.useEffect)(function(){Pe.current=a},[a]),(0,p.useEffect)(function(){K.current=i},[i]),(0,p.useEffect)(function(){P.current=c},[c]),(0,p.useEffect)(function(){Q.current=f},[f]),(0,p.useEffect)(function(){B(!0),li(z.current).then(function(I){var te;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,G.current=I;try{var re;(re=Pe.current)===null||re===void 0||re.call(Pe,I)}catch(Tn){}if(Z.current){var F;if(W.current==="single"){var ue,Ue,tt=zt(I,(ue=(Ue=K.current)!==null&&Ue!==void 0?Ue:Q.current)!==null&&ue!==void 0?ue:"",P.current,S.current);F=I.editor.create(Z.current,u()(u()({automaticLayout:!0},Kn),D.current)),F.setModel(tt)}else{var rt=I.editor.createModel(K.current,P.current),Nn=I.editor.createModel(K.current,P.current);F=I.editor.createDiffEditor(Z.current,u()(u()({automaticLayout:!0},di),D.current)),F.setModel({original:rt,modified:Nn})}H.current=F,(te=Xe.current.enhancers)===null||te===void 0||te.forEach(function(Tn){return Tn(I,F)});try{var Pn;(Pn=de.current)===null||Pn===void 0||Pn.call(de,I,F)}catch(Tn){}X.current||C(!0)}}).catch(function(I){console.error("Monaco Editor Load Error!",I)}).then(function(){X.current||B(!1)})},[]),(0,p.useEffect)(function(){var I;h&&((I=G.current)===null||I===void 0||I.editor.setTheme(o))},[h,o]),(0,p.useEffect)(function(){if(h){var I=e==="diff"?H.current.getModifiedEditor():H.current;I==null||I.onDidFocusEditorText(function(){X.current||T(!0)}),I==null||I.onDidBlurEditorText(function(){X.current||T(!1)})}},[h,e]),(0,p.useEffect)(function(){return function(){X.current=!0}},[]),(0,p.useEffect)(function(){var I,te,re;if(h&&!(e!=="diff"&&l)){var F=e==="diff"?H.current.getModifiedEditor():H.current,ue=(I=i!=null?i:Q.current)!==null&&I!==void 0?I:"",Ue=(te=G.current)===null||te===void 0?void 0:te.editor.EditorOption.readOnly;Ue&&F!==null&&F!==void 0&&(re=F.getOption)!==null&&re!==void 0&&re.call(F,Ue)?F==null||F.setValue(ue):i!==(F==null?void 0:F.getValue())&&(F==null||F.executeEdits("",[{range:F==null?void 0:F.getModel().getFullModelRange(),text:ue,forceMoveMarkers:!0}]),F==null||F.pushUndoStop())}},[h,l,e,i]),(0,p.useEffect)(function(){var I,te;if(h&&e!=="diff"&&l!==M){var re=zt(G.current,(I=K.current)!==null&&I!==void 0?I:Q.current,P.current,l),F=H.current;K.current!==null&&K.current!==void 0&&re.getValue()!==K.current&&re.setValue(K.current),re!==((te=H.current)===null||te===void 0?void 0:te.getModel())&&(g&&Be.current.set(M,F.saveViewState()),F.setModel(re),g&&F.restoreViewState(Be.current.get(l)))}},[h,i,l,M,e,g]);var Ye=H;return{isEditorReady:h,focused:j,loading:V,containerRef:Z,monacoRef:G,editorRef:Ye,valueRef:K}},$t=function(e){var t=(0,p.useState)(!1),n=E()(t,2),a=n[0],o=n[1],i=function(){if(a){o(!1),e==null||e.updateOptions(u()(u()({},e==null?void 0:e.getOptions()),{},{minimap:{enabled:!1}})),e==null||e.layout();return}o(!0),e==null||e.updateOptions(u()(u()({},e==null?void 0:e.getOptions()),{},{minimap:{enabled:!0}})),e==null||e.layout()};return{isFullScreen:a,fullScreen:i}},Ut,Vt,Qt,Wt,Kt,Gt,Jt,Xt=(0,O.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.minimapEnabled,i=o===void 0?!1:o,l=e.isFullScreen,c=l===void 0?!1:l,g=e.diff,f=g===void 0?!1:g,m=(0,O.F4)(Ut||(Ut=v()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `])));return{base:t(Vt||(Vt=v()([`
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
      `])),c&&t(Qt||(Qt=v()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius,n.borderRadius-1,n.borderRadius-1),fullScreenBtn:t(Wt||(Wt=v()([`
        &.`,`-btn {
          position: absolute;
          color: `,`;
          top: 20px;
          transition: none;
          `,`
        }
      `])),a,n.colorTextSecondary,c?t(Kt||(Kt=v()([`
                z-index: 9999;
                right: `,`px;
              `])),f?64:138):t(Gt||(Gt=v()([`
                right: `,`px;
              `])),i||f?64:20)),loading:t(Jt||(Jt=v()([`
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
      `])),n.fontSizeSM,n.colorTextTertiary,m)}},{hashPriority:"low"});function tn(){}var pi=function(e){var t,n=e.onChange,a=e.enableOutline,o=e.width,i=e.height,l=e.language,c=e.supportFullScreen,g=(0,p.useRef)(n),f=Ht("single",e),m=f.isEditorReady,b=f.focused,y=f.loading,h=f.containerRef,C=f.monacoRef,x=f.editorRef,k=f.valueRef,j=(0,p.useRef)(),T=$t(x==null?void 0:x.current),A=T.isFullScreen,N=T.fullScreen,V=Xt({isFullScreen:A,minimapEnabled:(t=e.options)===null||t===void 0||(t=t.minimap)===null||t===void 0?void 0:t.enabled}),B=V.cx,Q=V.styles,K=B(Q.base,e.className,{"ve-focused":b,"ve-outline":a}),P=(0,p.useMemo)(function(){return{width:o,height:i}},[o,i]);return(0,p.useEffect)(function(){g.current=n},[n]),(0,p.useEffect)(function(){if(m){var S,M=x.current;(S=j.current)===null||S===void 0||S.dispose(),j.current=M==null?void 0:M.onDidChangeModelContent(function(z){var D,G=M==null||(D=M.getModel())===null||D===void 0?void 0:D.getValue();if(k.current!==G){var H;(H=g.current)===null||H===void 0||H.call(g,G,z)}})}},[x,m,j,k]),(0,p.useEffect)(function(){return function(){var S,M,z,D=x.current;(S=j.current)===null||S===void 0||S.dispose(),D==null||(M=D.getModel())===null||M===void 0||M.dispose(),(z=x.current)===null||z===void 0||z.dispose()}},[x]),(0,p.useEffect)(function(){var S;if(m){var M=(S=x.current)===null||S===void 0?void 0:S.getModel();if(M){var z;(z=C.current)===null||z===void 0||z.editor.setModelLanguage(M,l)}}},[x,m,l,C]),(0,s.jsxs)("div",{className:K,style:e.style,children:[y&&(0,s.jsx)("span",{className:B(Q.loading,"loading"),children:Ft}),(0,s.jsx)("div",{className:"react-monaco-editor-container",ref:h,style:P,children:c&&(0,s.jsx)(J.ZP,{className:Q.fullScreenBtn,icon:(0,s.jsx)(he.Z,{icon:A?It.Z:Rt.Z}),onClick:N,size:"small",type:"text"})})]})},gi=function(e){var t=e.enableOutline,n=e.width,a=e.height,o=e.language,i=e.onChange,l=e.original,c=e.supportFullScreen,g=(0,p.useRef)(i),f=Ht("diff",e),m=f.isEditorReady,b=f.focused,y=f.loading,h=f.containerRef,C=f.monacoRef,x=f.editorRef,k=f.valueRef,j=$t(),T=j.isFullScreen,A=j.fullScreen,N=Xt({isFullScreen:T,diff:!0}),V=N.cx,B=N.styles,Q=V(B.base,e.className,{"ve-focused":b,"ve-outline":t}),K=(0,p.useMemo)(function(){return{width:n,height:a}},[n,a]);return(0,p.useEffect)(function(){g.current=i},[i]),(0,p.useEffect)(function(){var P;if(m){(P=x.current.getModel())===null||P===void 0||P.original.setValue(l!=null?l:"");var S=x.current.getModel()||{},M=S.modified;M==null||M.onDidChangeContent(function(z){var D=M.getValue();if(k.current!==D){var G;(G=g.current)===null||G===void 0||G.call(g,D,z)}})}},[x,m,l,k]),(0,p.useEffect)(function(){return function(){var P,S,M;(P=x.current)===null||P===void 0||(P=P.getModel())===null||P===void 0||(P=P.original)===null||P===void 0||P.dispose(),(S=x.current)===null||S===void 0||(S=S.getModel())===null||S===void 0||(S=S.modified)===null||S===void 0||S.dispose(),(M=x.current)===null||M===void 0||M.dispose()}},[x]),(0,p.useEffect)(function(){var P,S,M;if(m){var z=((P=x.current)===null||P===void 0?void 0:P.getModel())||{},D=z.original,G=z.modified;(S=C.current)===null||S===void 0||S.editor.setModelLanguage(D,o),(M=C.current)===null||M===void 0||M.editor.setModelLanguage(G,o)}},[x,m,o,C]),(0,s.jsxs)("div",{className:Q,style:e.style,children:[y&&(0,s.jsx)("span",{className:V(B.loading,"loading"),children:Ft}),(0,s.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:h,style:K,children:c&&(0,s.jsx)(J.ZP,{className:B.fullScreenBtn,icon:(0,s.jsx)(he.Z,{icon:T?It.Z:Rt.Z}),onClick:A,size:"small",type:"text"})})]})},fi=Object.assign(gi,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:Kn,editorDidMount:tn,editorWillMount:tn,onChange:tn,requireConfig:{}}}),Yt=Object.assign(pi,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:Kn,editorDidMount:tn,editorWillMount:tn,onChange:tn,requireConfig:{}},MonacoDiffEditor:fi}),Rc=null,mi=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],vi=["inlineView","options"],Gn=function(e){var t=e.type,n=t===void 0?"single":t,a=e.editorDidMount,o=e.readOnly,i=o===void 0?!1:o,l=e.lineNumbers,c=l===void 0?"on":l,g=e.wordWrap,f=g===void 0?"off":g,m=e.contextmenu,b=m===void 0?!0:m,y=e.theme,h=e.minimapEnabled,C=h===void 0?!1:h,x=e.version,k=x===void 0?"0.45.0":x,j=e.requireConfig,T=j===void 0?{}:j,A=e.options,N=e.className,V=e.supportFullScreen,B=L()(e,mi),Q=(0,p.useRef)(a);(0,p.useEffect)(function(){Q.current=a},[a]);var K=(0,Qn.r)(),P=K.isDarkMode,S=(0,p.useMemo)(function(){return y||(P?"vs-dark":"vs")},[P,y]),M=(0,p.useState)(),z=E()(M,2),D=z[0],G=z[1],H=(0,p.useCallback)(function(Pe,X){var Be;G(X),(Be=Q.current)===null||Be===void 0||Be.call(Q,Pe,X)},[]),Z=(0,p.useMemo)(function(){var Pe=Object.assign({},A,{readOnly:i,lineNumbers:c,wordWrap:f,contextmenu:b,minimap:C===void 0?A==null?void 0:A.minimap:Object.assign({},A==null?void 0:A.minimap,{enabled:C})});return D==null||D.updateOptions(Pe),Pe},[A,i,c,f,b,C,D]),W=ie(),de=(0,p.useMemo)(function(){return Object.assign({},T,{paths:u()({vs:W({path:"min/vs",pkg:"monaco-editor",version:k})},T.paths)})},[W,T,k]);return n!=="diff"?(0,s.jsx)(Yt,u()({className:N,editorDidMount:H,options:Z,requireConfig:de,supportFullScreen:D&&V,theme:S},B)):(0,s.jsx)(Yt.MonacoDiffEditor,u()({className:N,editorDidMount:H,options:Z,requireConfig:de,supportFullScreen:D&&V,theme:S},B))},bi=function(e){return(0,s.jsx)(Gn,u()(u()({},e),{},{type:"single"}))},hi=function(e){var t=e.inlineView,n=t===void 0?"off":t,a=e.options,o=L()(e,vi);return(0,s.jsx)(Gn,u()(u()({options:Object.assign({useInlineViewWhenSpaceIsLimited:n==="on"||n==="auto",renderSideBySide:n==="off"||n==="auto"},a)},o),{},{type:"diff"}))},_t=d(22543),yi=["to","children"],qt=function(e){var t=e.to,n=e.children,a=L()(e,yi);return(0,s.jsx)("a",u()(u()({href:"#".concat(t)},a),{},{children:n}))},kn=(0,p.createContext)({loading:!1,Link:qt}),xi=["to","Link","children"],Ci=function(e){var t=e.to,n=e.Link,a=e.children,o=L()(e,xi);return n?(0,s.jsx)(n,u()(u()({to:t},o),{},{children:a})):(0,s.jsx)("a",u()(u()({href:"#".concat(t)},o),{},{children:a}))},Si=function(e){var t=(0,p.useContext)(kn),n=t.Link,a=t.breadcrumb;(0,p.useEffect)(function(){var i;a==null||(i=a.setItems)===null||i===void 0||i.call(a,e.items)},[a,e.items]);var o=(0,p.useCallback)(function(i,l,c,g){var f,m,b=i.href?i.href===((f=c.at(-1))===null||f===void 0?void 0:f.href):i.path===((m=c.at(-1))===null||m===void 0?void 0:m.path);if(b)return(0,s.jsx)("span",{children:i.title});var y=i.href?i.href:"/".concat(g.join("/"));return(0,s.jsx)(Ci,{Link:n,to:y,children:i.title})},[n]);return(0,s.jsx)(_t.Z,u()({itemRender:o},e))},er=d(25081),Ge=d(63079),nr,ji=(0,O.kc)(function(r){var e=r.css,t=r.token;return{root:e(nr||(nr=v()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),ki=["className","children"],Mi={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},Ai=function(e){var t=e.className,n=e.children,a=L()(e,ki),o=ji(),i=o.styles,l=o.cx,c=(0,p.useContext)(kn),g=c.loading,f=c.breadcrumb,m=c.Link,b=c.status,y=(0,p.useCallback)(function(){if(b){var h;return(0,s.jsx)(er.ZP,{extra:(0,s.jsx)(m,{to:f==null||(h=f.items)===null||h===void 0||(h=h[0])===null||h===void 0?void 0:h.path,children:(0,s.jsx)(J.ZP,{type:"primary",children:"Go Back"})}),status:b,subTitle:Mi[b],title:b})}return n},[b,n,m,f==null?void 0:f.items]);return g?(0,s.jsx)(Ge.Z,{active:!0,className:l(i.root,t)}):(0,s.jsx)(w.Z,u()(u()({className:l(i.root,t),gap:20,vertical:!0},a),{},{children:y()}))},wi=function(){return(0,s.jsx)(s.Fragment,{})},Ei=d(335),Mn=d.n(Ei),tr=d(96726),rr=d(76116),or=d(24230),An=d(57179),ar,Li=(0,O.kc)(function(r){var e=r.css,t=r.token;return{custom:e(ar||(ar=v()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),t.colorPrimary,t.colorPrimaryHover)}},{hashPriority:"low"}),Oi=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],ir=function(e){var t=e.mode,n=t===void 0?"line":t,a=e.content,o=e.defaultOpen,i=e.iconPlacement,l=i===void 0?"left":i,c=e.openIcon,g=e.closeIcon,f=e.type,m=L()(e,Oi),b=Li({}),y=b.styles,h=n==="expanded",C=(0,p.useState)(o),x=E()(C,2),k=x[0],j=x[1],T=g||(0,s.jsx)(tr.Z,{}),A=c||(0,s.jsx)(rr.Z,{}),N=h&&(0,s.jsx)("span",{children:k?T:A});return n==="line"||f==="vertical"?(0,s.jsx)(or.Z,u()({type:f},m)):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(or.Z,u()(u()({type:f},m),{},{children:(0,s.jsx)("span",{className:h?y.custom:"",onClick:function(){j(!k)},children:(0,s.jsxs)(An.Z,{size:6,children:[l!=="right"&&N,(0,s.jsx)("span",{children:a}),l==="right"&&N]})})})),h&&(0,s.jsx)("div",{style:{display:k?"block":"none"},children:e.children})]})},Ni=ir,sr=d(28163),Pi=d(65933),lr,cr,Ti=(0,O.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(lr||(lr=v()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),n,n,n),tooltip:e(cr||(cr=v()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),t.colorTextTertiary)}},{hashPriority:"low"}),Di=["tooltip","className","status","text","color"],dr=function(e){var t=e.tooltip,n=e.className,a=e.status,o=e.text,i=e.color,l=L()(e,Di),c=Ti(),g=c.cx,f=c.styles;return(0,s.jsxs)(An.Z,u()(u()({className:g(f.root,n),size:"small"},l),{},{children:[(0,s.jsx)(sr.Z,{status:a,text:o,color:i}),t&&(0,s.jsx)(Ke.Z,{className:f.tooltip,title:t,children:(0,s.jsx)(he.Z,{icon:Pi.Z})})]}))},Zi=d(57724),Ii=d.n(Zi),wn=d(58615),Ri=["items","onClick"],Bi=["key","label"],Fi=["key","label"],ur=function(e){var t=e.items,n=t===void 0?[]:t,a=e.onClick,o=a===void 0?function(){}:a,i=L()(e,Ri);if(n.length<=2)return(0,s.jsx)(An.Z,u()(u()({align:"end",size:12},i),{},{children:n.map(function(y){var h=y.key,C=y.label,x=L()(y,Bi);return(0,s.jsx)(J.ZP,u()(u()({onClick:function(j){return o(h,j)}},x),{},{children:C}),h)})}));var l=Ii()(n),c=l[0],g=c.key,f=c.label,m=L()(c,Fi),b=l.slice(1);return(0,s.jsx)(wn.Z.Button,u()(u()(u()({onClick:function(h){return o(g,h)}},m),{},{menu:{onClick:function(h){var C=h.key,x=h.domEvent;return o(C,x)},items:b.map(function(y){var h=y.key,C=y.label,x=y.icon,k=y.danger,j=y.disabled;return{key:h,label:C,icon:x,danger:k,disabled:j}})},overlayStyle:{minWidth:100}},i),{},{children:f}),g)},Jn=d(54473),zi=["shape","size","src"],pr=function(e){if(typeof e=="number")return e;switch(e){case"small":return 40;case"large":return 88;default:return 64}},Hi=function(e){var t=e.shape,n=t===void 0?"square":t,a=e.size,o=e.src,i=L()(e,zi),l=(0,p.useMemo)(function(){return pr(a)},[a]);return(0,s.jsx)(Jn.C,u()({shape:n,size:l,src:o},i))},gr,fr,mr,vr,br,hr,yr,xr,Cr,$i=(0,O.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.bordered,i=o===void 0?!1:o,l=e.divider,c=l===void 0?!0:l;return{root:i?t(gr||(gr=v()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),n.marginXS,n.padding,n.colorBgBase,n.borderRadius,n.boxShadowTertiary):t(fr||(fr=v()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),n.paddingXS,n.marginXS,c&&t(mr||(mr=v()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),n.paddingLG,n.colorSplit)),icon:t(vr||(vr=v()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),a,a,n.colorPrimary,a),titleBox:t(br||(br=v()([`
        margin-bottom: `,`px;
      `])),n.marginSM),subTitle:t(hr||(hr=v()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),n.marginXXS,a,n.fontSize,n.colorTextSecondary),title:t(yr||(yr=v()([`
        font-size: `,`px;
        font-weight: 700;
      `])),n.fontSizeHeading5),descriptions:t(xr||(xr=v()([`
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
      `])),n.marginXXS,n.fontSize,n.colorTextSecondary,a,a,n.fontSize,a,n.fontSize,n.colorTextSecondary),rightButtons:t(Cr||(Cr=v()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),Ui=["className","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],Vi=$n.Paragraph,Qi=function(e){var t=e.className,n=e.icon,a=e.title,o=e.titleRender,i=e.subTitle,l=e.status,c=e.descriptions,g=c===void 0?[]:c,f=e.descriptionsRender,m=e.extraContent,b=m===void 0?{}:m,y=e.extraContentRender,h=e.bordered,C=e.divider,x=L()(e,Ui),k=$i({bordered:h,divider:C}),j=k.styles,T=k.cx,A=(0,p.useMemo)(function(){return!n||typeof n=="string"?{src:n,size:i?"large":"default"}:(i&&n.size===void 0&&(n.size="large"),n)},[n,i]),N=(0,p.useMemo)(function(){var S=(0,s.jsx)("span",{className:j.title,children:a});return o?o(S):S},[j.title,a,o]),V=(0,p.useMemo)(function(){var S=[],M=Mn()(g.filter(function(de){return!!de}).entries()),z;try{for(M.s();!(z=M.n()).done;){var D=E()(z.value,2),G=D[0],H=D[1],Z=H.icon,W=H.text;(l||G>=1)&&S.push((0,s.jsx)(Ni,{dashed:!1,type:"vertical"},"divider-".concat(G))),S.push((0,s.jsxs)(w.Z,{align:"center",gap:4,children:[Z&&(0,s.jsx)(Ke.Z,{title:Z.tooltip,children:Z.content}),(0,s.jsx)("span",{children:W})]},"desc-".concat(G)))}}catch(de){M.e(de)}finally{M.f()}return f?f(S):S},[g,f,l]),B=(0,p.useMemo)(function(){if(!b&&!y)return null;var S=(0,s.jsx)(ur,u()({className:j.rightButtons},b));return y?y(S):S},[b,y,j.rightButtons]),Q=(0,p.useContext)(kn),K=Q.loading,P=Q.status;return K?(0,s.jsxs)(w.Z,{className:T(j.root,t),gap:20,children:[(0,s.jsx)(w.Z,{children:(0,s.jsx)(Ge.Z.Avatar,{active:!0,className:j.icon,shape:A==null?void 0:A.shape,size:pr(A==null?void 0:A.size)})}),(0,s.jsxs)(w.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,s.jsxs)("div",{className:j.titleBox,children:[(0,s.jsx)(Ge.Z.Input,{active:!0,size:25}),i&&(0,s.jsx)("div",{className:j.subTitle,children:(0,s.jsx)(Ge.Z.Input,{active:!0,size:18})})]}),(0,s.jsx)(Ge.Z.Input,{active:!0,size:18})]}),(0,s.jsx)(w.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,s.jsx)(Ge.Z.Button,{active:!0})})]}):P?null:(0,s.jsxs)(w.Z,u()(u()({className:T(j.root,t),gap:20},x),{},{children:[A&&(0,s.jsx)(w.Z,{children:(0,s.jsx)(Hi,u()({className:j.icon},A))}),(0,s.jsxs)(w.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,s.jsxs)(w.Z,{className:j.titleBox,vertical:!0,children:[N,i&&(0,s.jsx)(Vi,{className:j.subTitle,ellipsis:{rows:2},children:i})]}),(0,s.jsxs)(w.Z,{align:"center",className:j.descriptions,gap:4,children:[l&&(0,s.jsx)(dr,u()({},l)),V]})]}),(0,s.jsx)(w.Z,{align:"center",flex:"1",justify:"flex-end",children:B})]}))},Sr,Wi=(0,O.kc)(function(r){var e=r.css,t=r.token;return{root:e(Sr||(Sr=v()([`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: `,"px ","px ",`px;
      `])),t.padding,t.paddingLG,t.paddingXL)}},{hashPriority:"low"}),Ki=["loading","className","children","Link","status","gap"],Gi=function(e){var t=ne(),n=e.loading,a=e.className,o=e.children,i=e.Link,l=i===void 0?t||qt:i,c=e.status,g=e.gap,f=g===void 0?16:g,m=L()(e,Ki),b=Wi(m),y=b.styles,h=b.cx,C=(0,p.useState)([]),x=E()(C,2),k=x[0],j=x[1];return(0,s.jsx)(w.Z,u()(u()({className:h(y.root,a),gap:f,vertical:!0},m),{},{children:(0,s.jsx)(kn.Provider,{value:{loading:n,Link:l,breadcrumb:{items:k,setItems:j},status:c},children:o})}))},jr,Ji=(0,O.kc)(function(r){var e=r.css,t=r.token;return{root:e(jr||(jr=v()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),t.fontFamily,t.fontWeightStrong,t.lineHeight,t.colorText)}}),Xi=["className"],Yi=function(e){var t=e.className,n=L()(e,Xi),a=Ji(),o=a.cx,i=a.styles;return(0,s.jsx)("h2",u()({className:o(i.root,t)},n))},rn=Gi;rn.Breadcrumb=Si,rn.Title=Yi,rn.Header=Qi,rn.Content=Ai,rn.Footer=wi;var kr,Mr,Ar,wr,Er,_i=(0,O.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{root:e(kr||(kr=v()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),t.fontFamily,t.colorText,t.colorBgContainer,t.borderRadius*2,t.boxShadowTertiary),bordered:e(Mr||(Mr=v()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),t.colorBorder),hoverable:e(Ar||(Ar=v()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),t.motionDurationMid,t.motionDurationMid,t.boxShadow),text:e(wr||(wr=v()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),t.colorTextSecondary),error:e(Er||(Er=v()([`
      color: `,`;
    `])),t.colorErrorText)}}),qi=["className","bordered","hoverable","children"],es=function(e){var t=e.className,n=e.bordered,a=n===void 0?!1:n,o=e.hoverable,i=o===void 0?!0:o,l=e.children,c=L()(e,qi),g=_i(),f=g.cx,m=g.styles;return(0,s.jsx)("div",u()(u()({className:f(m.root,a&&m.bordered,i&&m.hoverable,t)},c),{},{children:l}))},Lr,ns=(0,O.kc)(function(r){var e=r.css,t=r.token;return{root:e(Lr||(Lr=v()([`
        padding: 12px 24px 20px;
      `])))}},{hashPriority:"low"}),ts=["className","children"],rs=function(e){var t=e.className,n=e.children,a=L()(e,ts),o=ns(),i=o.styles,l=o.cx;return(0,s.jsx)(w.Z,u()(u()({className:l(i.root,t),gap:20,vertical:!0},a),{},{children:n}))},Or=d(56656),Nr,Pr,Tr,Dr,Zr,Ir,os=(0,O.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.borderedBottom,i=e.borderedBottomDashed,l=e.borderedTop,c=e.borderedTopDashed,g=e.size,f={small:"".concat(n.paddingXS,"px ").concat(n.padding,"px"),middle:"".concat(n.padding,"px ").concat(n.paddingLG,"px"),default:"".concat(n.paddingSM,"px ").concat(n.paddingLG,"px")},m=o||i;return{custom:t(Nr||(Nr=v()([`
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
      `])),a,a,m&&g&&t(Pr||(Pr=v()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),a,a,f[g],a),o&&t(Tr||(Tr=v()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),a,n.colorSplit),i&&t(Dr||(Dr=v()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),a,n.colorSplit),l&&t(Zr||(Zr=v()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),a,n.colorSplit),c&&t(Ir||(Ir=v()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),a,n.colorSplit))}},{hashPriority:"low"}),as=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],Xn=function(e){var t=e.className,n=e.borderedBottom,a=e.borderedBottomDashed,o=e.borderedTop,i=e.borderedTopDashed,l=L()(e,as),c=os({borderedBottom:n,borderedBottomDashed:a,borderedTop:o,borderedTopDashed:i,size:l.size}),g=c.styles,f=c.cx;return(0,s.jsx)(Or.Z,u()(u()({},l),{},{className:f(g.custom,t)}))},is=Xn;Xn.Item=Or.Z.Item;var Rr,ss=(0,O.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls,a=70;return{root:e(Rr||(Rr=v()([`
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
      `])),n,n,n,n,a,n,a)}},{hashPriority:"low"}),ls=["className","colon","column","size"],cs=function(e){var t=e.className,n=e.colon,a=n===void 0?!1:n,o=e.column,i=o===void 0?2:o,l=e.size,c=l===void 0?"small":l,g=L()(e,ls),f=ss(),m=f.cx,b=f.styles;return(0,s.jsx)(is,u()({className:m(b.root,t),colon:a,column:i,size:c},g))},ds=d(250),Br,Fr,zr,Hr,$r,Ur,Vr,Qr,Wr,us=(0,O.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.divider,i=o===void 0?!0:o,l=e.iconBg,c=l===void 0?!0:l;return{root:t(Br||(Br=v()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),i?20:0,i&&t(Fr||(Fr=v()([`
          border-bottom: 1px solid `,`;
        `])),n.colorSplit)),icon:t(zr||(zr=v()([`
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
      `])),a,n.colorPrimary,c&&t(Hr||(Hr=v()([`
            background-color: `,`;
          `])),n.colorBgLayout),a),titleBox:t($r||($r=v()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),n.marginXXS),title:t(Ur||(Ur=v()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),n.fontWeightStrong),description:t(Vr||(Vr=v()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),a,n.colorTextSecondary),extra:t(Qr||(Qr=v()([`
        margin-top: -4px;
      `]))),rightButtons:t(Wr||(Wr=v()([`
        justify-content: flex-end;
      `])))}},{hashPriority:"low"}),ps=["className","icon","title","description","extra","divider"],gs=["className","shape","size"],fs=["children"],ms=$n.Paragraph,vs=function(e){var t=e.className,n=e.icon,a=e.title,o=e.description,i=e.extra,l=e.divider,c=L()(e,ps),g=us({divider:l,iconBg:!(n!=null&&n.src)}),f=g.styles,m=g.cx,b=n||{},y=b.className,h=b.shape,C=h===void 0?"square":h,x=b.size,k=x===void 0?72:x,j=L()(b,gs),T=i||{},A=T.children,N=L()(T,fs);return(0,s.jsxs)(w.Z,u()(u()({className:m(f.root,t),gap:20},c),{},{children:[n&&(0,s.jsx)(w.Z,{children:(0,s.jsx)(Jn.C,u()({className:m(f.icon,y),shape:C,size:k},j))}),(0,s.jsxs)(w.Z,{flex:"1",vertical:!0,children:[(0,s.jsxs)(w.Z,{className:f.titleBox,gap:4,children:[(0,s.jsx)("div",{className:f.title,children:a}),i&&(0,s.jsx)(w.Z,{align:"flex-start",className:f.extra,justify:"flex-end",onClick:function(B){return B.stopPropagation()},children:(0,s.jsx)(wn.Z,u()(u()({},N),{},{children:A||(0,s.jsx)(J.ZP,{icon:(0,s.jsx)(he.Z,{icon:ds.Z}),size:"small",type:"text"})}))})]}),o&&(0,s.jsx)(ms,{className:f.description,ellipsis:{rows:2},children:o})]})]}))},En=es;En.Header=vs,En.Content=rs,En.Descriptions=cs;var Kr=d(38695),Yn=d(59823),Gr=d(99865),Jr=d(7515),bs=function(e){var t=e.value,n=e.defaultValue,a=e.min,o=a===void 0?0:a,i=e.max,l=e.step,c=e.gutter,g=c===void 0?16:c,f=e.sliderCol,m=f===void 0?{span:12}:f,b=e.inputCol,y=b===void 0?{span:5}:b,h=e.addonAfter,C=e.addonBefore,x=e.placeholder,k=e.onChange,j=e.style,T=e.className,A=e.sliderProps,N=A===void 0?{}:A,V=e.inputProps,B=V===void 0?{}:V,Q=(0,p.useState)(),K=E()(Q,2),P=K[0],S=K[1],M=function(D){Number.isNaN(D)||(S(D),k==null||k(D))};return(0,s.jsxs)(Kr.Z,{className:T,gutter:g,style:j,children:[(0,s.jsx)(Yn.Z,u()(u()({},m),{},{children:(0,s.jsx)(Gr.Z,u()(u()({},N),{},{defaultValue:n,max:i,min:o,onChange:M,step:l,value:t!=null?t:P}))})),(0,s.jsx)(Yn.Z,u()(u()({},y),{},{children:(0,s.jsx)(Jr.Z,u()(u()({},B),{},{addonAfter:h,addonBefore:C,defaultValue:n,max:i,min:o,onChange:M,placeholder:x,step:l,value:t!=null?t:P}))}))]})},Xr=d(32142),Yr,hs=(0,O.kc)(function(r,e){var t=r.css,n=e.bordered,a=n===void 0?"dashed":n;return{custom:t(Yr||(Yr=v()([`
        border-style: `,` !important;
      `])),a)}},{hashPriority:"low"}),ys=["bordered","className"],_r=function(e){var t=e.bordered,n=t===void 0?"dashed":t,a=e.className,o=L()(e,ys),i=hs({bordered:n}),l=i.styles,c=i.cx;return(0,s.jsx)(Xr.Z,u()(u()({},o),{},{className:c(l.custom,a)}))};_r.ErrorBoundary=Xr.Z.ErrorBoundary;var Bc=null,qr=d(15558),xs=d(372),_n=d(76580),Ln=d(40097),eo,no=(0,O.vJ)(eo||(eo=v()([`
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
`])),function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme;return e==null?void 0:e.colorPrimary},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimary," !important")},function(r){var e=r.theme;return"".concat(e==null?void 0:e.colorPrimaryHover," !important")},function(r){var e=r.theme,t=e||{},n=t.prefixCls;return Ln.ZP.config({prefixCls:n}),`
      .`.concat(n,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(n,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)}),Cs=["detail","message","description","onClose","className"],Ss=_n.Z.Panel,js=xn.Z.Link,ks=xn.Z.Paragraph,Ms=xn.Z.Text,on={},As=function(e,t){on[e]||(on[e]=[]),on[e].push(t)},ws=function(e){delete on[e]},to=function r(e){var t="";if(typeof e=="string")t=e;else if(typeof e=="number")t=e.toString();else if(Array.isArray(e)){var n=Mn()(e),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;t+=r(o)}}catch(i){n.e(i)}finally{n.f()}}else(0,p.isValidElement)(e)&&(t+=r(e.props.children));return t},ro=function(e){var t,n=e.noticeKey,a=e.message,o=((t=on[n])===null||t===void 0?void 0:t.length)||0;return(0,s.jsxs)(s.Fragment,{children:[a,o>1&&" (".concat(o,")")]})},Es=function(e){var t=e.noticeKey,n=(0,p.useState)(),a=E()(n,2),o=a[0],i=a[1],l={},c=Mn()(on[t]),g;try{for(c.s();!(g=c.n()).done;){var f=g.value,m=to(f.description);f.descKey=m,l[m]=f}}catch(b){c.e(b)}finally{c.f()}return(0,s.jsx)(_n.Z,{accordion:!0,activeKey:o,className:"yunti-notification-collapse",expandIcon:function(y){var h=y.isActive;return(0,s.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:h?(0,s.jsx)(js,{className:"yunti-notification-link",children:(0,s.jsx)(tr.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,s.jsx)(rr.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(y){i(y)},children:Object.values(l).map(function(b){var y=b.descKey,h=b.description,C=b.detail;return(0,s.jsx)(Ss,{header:(0,s.jsx)(Ms,{ellipsis:{tooltip:!1},style:{width:250},children:h}),children:(0,s.jsx)(ks,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(C,null,2)},type:"secondary",children:(0,s.jsx)("pre",{children:JSON.stringify(C,null,2)})})},y)})})},Je=function(e){var t=e.detail,n=e.message,a=e.description,o=e.onClose,i=e.className,l=L()(e,Cs),c=to(n);As(c,e);var g=function(){o==null||o(),ws(c)};return e.type==="warning"&&!e.icon&&(l.icon=(0,s.jsx)(xs.Z,{style:{color:"#ff7d00"}})),t?Ln.ZP.open(u()({key:c,message:(0,s.jsx)(ro,{message:n,noticeKey:c}),description:(0,s.jsx)(Es,{noticeKey:c}),onClose:g,className:"yunti-notification ".concat(i)},l)):Ln.ZP.open(u()({key:c,message:(0,s.jsx)(ro,{message:n,noticeKey:c}),description:a,onClose:g,className:"yunti-notification ".concat(i)},l))},oo=function(e){var t;if(((e==null||(t=e.errors)===null||t===void 0?void 0:t.length)||0)>0){e!=null&&e.errors;var n=Mn()((e==null?void 0:e.errors)||[]),a;try{for(n.s();!(a=n.n()).done;){var o=a.value;Je(u()(u()({detail:o,description:o.message},e),{},{type:"warning"}))}}catch(i){n.e(i)}finally{n.f()}}else Je(u()(u()({},e),{},{type:"warning"}))},Ls=u()(u()({},Ln.ZP),{},{success:function(e){return Je(u()(u()({},e),{},{type:"success"}))},info:function(e){return Je(u()(u()({},e),{},{type:"info"}))},warning:function(e){return Je(u()(u()({},e),{},{type:"warning"}))},warn:function(e){return Je(u()(u()({},e),{},{type:"warning"}))},error:function(e){return Je(u()(u()({},e),{},{type:"error"}))},warnings:oo,warns:oo}),Fc=null,Os=["children"],ao=function(e){var t=e.children,n=L()(e,Os);return(0,s.jsxs)(qr.Z,u()(u()({},n),{},{children:[(0,s.jsx)(no,{}),t]}))};ao.useApp=qr.Z.useApp;var zc=null,Ns=d(54901),io,so,lo,Ps=(0,O.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.closeIcon,o=e.closeIconPlacement,i=e.extra,l=t(io||(io=v()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),n,n,!(a===null||a===!1)&&t(so||(so=v()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),n));return{custom:t(lo||(lo=v()([`
        `,`
      `])),(!o||o==="right"||o==="auto"&&!i)&&l)}},{hashPriority:"low"}),Ts=["className"],Ds=function(e){var t=e.className,n=L()(e,Ts),a=Ps(n),o=a.styles,i=a.cx;return(0,s.jsx)(ce.Z,u()(u()({},n),{},{className:i(o.custom,t)}))},Hc=null,co,uo,po,go,Zs=(0,O.kc)(function(r,e){var t=r.css,n=r.token,a=e.divider,o=e.position;return{menuWrapper:t(co||(co=v()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),n.colorBgElevated,n.borderRadiusLG,n.boxShadowSecondary),menuExtra:t(uo||(uo=v()([`
        padding: 10px 16px 4px;
        `,`
      `])),a&&t(o==="top"?po||(po=v()([`
              border-bottom: 1px solid `,`;
            `])):go||(go=v()([`
              border-top: 1px solid `,`;
            `])),n.colorSplit))}},{hashPriority:"low"}),Is=["menuExtra","dropdownRender"],Rs=function(e){var t=e.menuExtra,n=e.dropdownRender,a=L()(e,Is),o=t||{},i=o.position,l=i===void 0?"top":i,c=o.divider,g=c===void 0?!1:c,f=o.content,m=Zs({divider:g,position:l}),b=m.styles,y=(0,p.useCallback)(function(h){var C=p.cloneElement(h,{style:{boxShadow:"none",border:"none"}});if(!f)return n?(0,s.jsx)(w.Z,{className:b.menuWrapper,vertical:!0,children:n(C)}):h;var x=(0,s.jsx)(w.Z,{align:"center",className:b.menuExtra,children:f});return(0,s.jsxs)(w.Z,{className:b.menuWrapper,vertical:!0,children:[l==="top"&&x,C,l==="bottom"&&x]})},[f,n,l,b.menuExtra,b.menuWrapper]);return(0,s.jsx)(wn.Z,u()({dropdownRender:y},a))},fo=Rs;fo.Button=wn.Z.Button;var an=d(68191),Bs=d(95469),qn=d.n(Bs),Fs=d(41773),ke=d(6183),zs=d(14539),mo,vo,bo,Hs=(0,O.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{empty:e(mo||(mo=v()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),t.paddingXS,t.paddingSM,t.colorTextTertiary),list:e(vo||(vo=v()([`
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
    `])),n,n,t.colorTextTertiary,n),noFormItem:e(bo||(bo=v()([`
      height: `,`px;
      color: `,`;
    `])),t.controlHeight,t.colorTextTertiary)}}),$s=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style"],Us=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width"],Vs=["key","name"],ho=function(e){var t=e.extra,n=e.expandIcon,a=e.icon,o=e.title,i=e.variant,l=e.defaultActive,c=e.empty,g=c===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":c,f=e.columns,m=f===void 0?[]:f,b=e.disabled,y=e.readOnly,h=e.addOneFieldDefault,C=e.disableRemoveWhenOneField,x=e.maxFileds,k=e.name,j=e.addParams,T=e.className,A=e.onRemove,N=e.fieldRemoveButton,V=N===void 0?!0:N,B=e.style,Q=L()(e,$s),K=Hs(),P=K.styles,S=(0,p.useRef)(),M=an.Z.useFormInstance(),z=an.Z.useWatch(k,M),D=(0,p.useCallback)(function(){if(!j)return[];var H=typeof j=="function"?j():j;return[H.defaultValue,H.insertIndex]},[j]),G=(0,p.useCallback)(function(H){var Z=M.getFieldValue([k,H]);return A==null?void 0:A(Z)},[M,k,A]);return(0,p.useEffect)(function(){var H;if(h&&(!(M!=null&&M.getFieldValue(k))||(M==null||(H=M.getFieldValue(k))===null||H===void 0?void 0:H.length)===0)){var Z;(Z=S.current)===null||Z===void 0||Z.call.apply(Z,[S].concat(qn()(D())))}},[h,D,M,k]),(0,s.jsx)(q,{extra:t===void 0?k&&!y&&(0,s.jsx)(Ke.Z,{title:x&&"\u6700\u591A\u6DFB\u52A0 ".concat(x," \u9879"),children:(0,s.jsx)(J.ZP,{disabled:b||!!(x&&(z==null?void 0:z.length)===x),icon:(0,s.jsx)(Fs.Z,{}),onClick:function(Z){var W;Z.stopPropagation(),(W=S.current)===null||W===void 0||W.call.apply(W,[S].concat(qn()(D())))},size:"small",type:"text"})}):t,className:T,expandIcon:n,icon:a,title:o,variant:i,defaultActive:l,style:B,children:k?(0,s.jsx)(an.Z.List,u()(u()({name:k},Q),{},{children:function(Z,W){var de=W.add,Pe=W.remove;return S.current=de,(0,s.jsx)(ke.Z,{className:P.list,columns:[].concat(qn()(m.map(function(X){var Be=X.label,Xe=X.name,Ye=X.render,I=X.dependencies,te=X.rules,re=X.align,F=X.ellipsis,ue=X.fixed,Ue=X.responsive,tt=X.shouldCellUpdate,rt=X.width,Nn=L()(X,Us);return{title:Be,dataIndex:Xe,align:re,ellipsis:F,fixed:ue,responsive:Ue,shouldCellUpdate:tt,width:rt,render:function(Tn,Kc,_e){var ot=Z[_e],Ac=ot.key,wc=ot.name,Ec=L()(ot,Vs),Dn=Ye==null?void 0:Ye(Z[_e],_e);if(!Dn&&!Nn.noStyle)return(0,s.jsx)(w.Z,{align:"center",className:P.noFormItem,children:"\u65E0\u9700\u8BBE\u7F6E"});if(!Xe)return(0,s.jsx)(w.Z,{align:"center",className:P.noFormItem,children:Dn});var Zn={readOnly:y,disabled:b};return y===!0&&(Zn.showCount=!1,Zn.variant="borderless",Zn.placeholder="-"),(0,s.jsx)(an.Z.Item,u()(u()(u()({},Ec),{},{dependencies:typeof I=="function"?I(Z[_e],_e):I,name:[wc,Xe],rules:typeof te=="function"?te(Z[_e],_e):te},Nn),{},{children:Dn&&p.cloneElement(Dn,Zn)}),Ac)}}})),[!y&&V!==!1&&{title:"",dataIndex:"del",render:function(Be,Xe,Ye){var I=Z[Ye].name;return(0,s.jsx)(an.Z.Item,{children:(0,s.jsx)(J.ZP,{disabled:b||C&&Z.length===1,icon:(0,s.jsx)(he.Z,{icon:zs.Z}),onClick:Sn()($e()().mark(function te(){var re;return $e()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,G(I);case 2:re=ue.sent,re!==!1&&Pe(I);case 4:case"end":return ue.stop()}},te)})),type:"text"})})}}]).filter(function(X){return!!X}),dataSource:Z,locale:{emptyText:g},pagination:!1,rowHoverable:!1,size:"small"})}})):(0,s.jsx)("div",{className:P.empty,children:g})})},yo=an.Z;yo.CollapseList=ho;var Qs=function(e){return typeof e=="string"?document.querySelector("#".concat(e)):(e==null?void 0:e.current)||e},et=":not([disabled]):not([readonly])",Ws=["text","password","search","tel","url","number","email",""].map(function(r){return'input[type="'.concat(r,'"]').concat(et)}).join(", ")+", input:not([type])".concat(et,", textarea").concat(et),Ks=function(e){var t,n=Qs(e);if(n){var a=(t=n.querySelector)===null||t===void 0?void 0:t.call(n,Ws);if(a!=null&&a.focus)return a.focus(),!0}},xo=function(e){var t=(0,p.useState)(!1),n=E()(t,2),a=n[0],o=n[1];p.useEffect(function(){if(!(a||!e)){var i=Ks(e);i&&o(!0)}},[e,a,o])},Co=function(e){var t,n=e.autoFocus,a=n===void 0?!0:n,o=(0,p.useRef)(null);return xo(a?o:void 0),(0,s.jsx)("div",{className:e.className,id:e.id,ref:o,style:(t=e.style)!==null&&t!==void 0?t:{display:e.className?void 0:"contents"},children:e.children})},Gs=function(e){return function(t){var n=function(i){return(0,s.jsx)(Co,u()(u()({},e||{}),{},{children:(0,s.jsx)(t,u()({},i))}))},a=t.displayName||t.name||"Component";return n.displayName="withFormHelper(".concat(a,")"),n}},Me=d(54381),Js="yunti-ui",So,jo,Xs=(0,O.kc)(function(r,e){var t=r.css,n=r.prefixCls,a=e.borderd,o=a===void 0?!0:a,i=e.footer,l=i===null||Array.isArray(i)&&i.length===0,c=t(So||(So=v()([`
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
    `])),n,n,l?0:"40px",n,l?0:"1px");return{custom:t(jo||(jo=v()([`
        `,`
      `])),o&&c)}},{hashPriority:"low"}),Ys=["className","borderd"],_s=function(e){var t=e.className,n=e.borderd,a=n===void 0?!0:n,o=L()(e,Ys),i=Xs(u()({borderd:a},o)),l=i.styles,c=i.cx;return(0,s.jsx)(Me.Z,u()(u()({},o),{},{className:c(l.custom,"".concat(Js,"-modal"),t)}))},Ae=_s;Ae.useModal=Me.Z.useModal,Ae.destroyAll=Me.Z.destroyAll,Ae.config=Me.Z.config,Ae._InternalPanelDoNotUseOrYouWillBeFired=Me.Z._InternalPanelDoNotUseOrYouWillBeFired,Ae.info=Me.Z.info,Ae.success=Me.Z.success,Ae.error=Me.Z.error,Ae.warning=Me.Z.warning,Ae.warn=Me.Z.warn,Ae.confirm=Me.Z.confirm;var $c=null,qs=d(19480),el=d(37513),ko,Mo,Ao,wo,nl=(0,O.kc)(function(r,e){var t=r.css,n=r.token,a=r.prefixCls,o=e.size,i=e.segmented,l=function(){return i?i!==!0?i.gap:!0:0}(),c=function(){if(i)return i!==!0?i.borderRadius:!0}(),g=function(){var C={small:n.sizeSM,middle:n.size,large:n.sizeLG};return typeof l=="string"?C[l]:l===!0?o?C[o]:C.middle:l||0},f=function(){var C={small:n.controlHeightSM,middle:n.controlHeight,large:n.controlHeightLG};if(c===!0)return o?C[o]:C.middle;if(c||c===0)return c},m=f()&&t(ko||(ko=v()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),f()),b=t(Mo||(Mo=v()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),g()),y=i===!0||i&&!i.bordered;return{custom:t(Ao||(Ao=v()([`
        `,`
        `,`
        `,`
      `])),m,b,y&&t(wo||(wo=v()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),a,a,n.colorPrimary))}},{hashPriority:"low"}),tl=["className"],Eo=qs.ZP,rl=function(e){var t=e.className,n=L()(e,tl);n.segmented&&(n.optionType="button");var a=nl(n),o=a.styles,i=a.cx;return(0,s.jsx)(el.Z,u()(u()({},n),{},{className:i(o.custom,t)}))};Eo.Group=rl;var Uc=null,Lo,ol=(0,O.kc)(function(r){var e=r.css,t=r.token,n=r.prefixCls;return{table:e(Lo||(Lo=v()([`
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
    `])),n,t.colorTextTertiary)}}),al=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],Oo=function(e){var t=e.rootStyle,n=e.rootClassName,a=e.icon,o=e.title,i=e.variant,l=e.defaultActive,c=e.extra,g=e.className,f=L()(e,al),m=ol(),b=m.cx,y=m.styles;return(0,s.jsx)(q,{className:n,style:t,icon:a,title:o,variant:i,defaultActive:l,extra:c,children:(0,s.jsx)(ke.Z,u()({className:b(y.table,g),pagination:!1,rowHoverable:!1,size:"small"},f))})},il=["columns"],we=function(e){var t=e.columns,n=L()(e,il),a=(0,p.useMemo)(function(){return t==null?void 0:t.map(function(o){if(o.render)return o;if(o.ellipsis&&o.ellipsis!==!0&&o.ellipsis.showTitle||o.ellipsis===!0){var i=o.ellipsis===!0?{}:o.ellipsis;return u()(u()({},o),{},{ellipsis:{showTitle:!1},render:function(c){return c||c===0?(0,s.jsx)(Ke.Z,u()(u()({},i),{},{placement:"topLeft",title:c,children:c})):"-"}})}return o.render||(o.render=function(l){return l!=null?l:"-"}),o})},[t]);return(0,s.jsx)(ke.Z,u()(u()({},n),{},{columns:a}))};we.displayName="Table",we.SELECTION_COLUMN=ke.Z.SELECTION_COLUMN,we.EXPAND_COLUMN=ke.Z.EXPAND_COLUMN,we.SELECTION_ALL=ke.Z.SELECTION_ALL,we.SELECTION_INVERT=ke.Z.SELECTION_INVERT,we.SELECTION_NONE=ke.Z.SELECTION_NONE,we.Column=ke.Z.Column,we.ColumnGroup=ke.Z.ColumnGroup,we.Summary=ke.Z.Summary,we.Collapse=Oo;var Vc=null,sl=d(67098),No=d(69032),ll=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],Po,To,Do,cl=(0,O.kc)(function(r){var e=r.css;return{container:e(Po||(Po=v()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:e(To||(To=v()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:e(Do||(Do=v()([`
      position: relative;
      flex: 1;
    `])))}}),dl=(0,p.forwardRef)(function(r,e){var t=r.className,n=r.style,a=r.classNames,o=r.expand,i=o===void 0?!0:o,l=r.setExpand,c=r.bottomAddons,g=r.topAddons,f=r.onSizeChange,m=r.heights,b=r.onSend,y=L()(r,ll),h=cl(),C=h.styles;return(0,s.jsx)(sl.Z,{className:t,classNames:a,fullscreen:i,headerHeight:m==null?void 0:m.headerHeight,maxHeight:m==null?void 0:m.maxHeight,minHeight:m==null?void 0:m.minHeight,onSizeChange:f,placement:"bottom",size:{height:m==null?void 0:m.inputHeight,width:"100%"},style:u()({zIndex:10},n),children:(0,s.jsxs)("section",{className:C.container,style:{minHeight:m==null?void 0:m.minHeight},children:[g,(0,s.jsx)("div",{className:C.textareaContainer,children:(0,s.jsx)(No.Z,u()({className:C.textarea,onSend:function(){b==null||b(),l==null||l(!1)},ref:e,type:"pure"},y))}),c]})})}),ul=(0,p.memo)(dl),pl=d(26904),gl=d(48869),fl=d(61760),ml=d(23512),Qc=d(48009),Wc=d(99335),vl=d(74450),Zo=d(22380),bl=d(64259),hl=d(85081),Io=d(66321),yl=d(97601),xl=d(68537),dn=d(38794),Cl=d(76940),Sl=d(49505),ye={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}},jl=d(31927),kl=function(e){var t=e.type,n=e.scale,a=e.appearance,o=(0,jl.Z)(t),i=a==="dark";return U()(U()(U()(U()(U()(U()(U()(U()(U()(U()({},"color".concat(o,"Bg"),n[a][1]),"color".concat(o,"BgHover"),n[a][2]),"color".concat(o,"Border"),n[a][4]),"color".concat(o,"BorderHover"),n[a][i?5:3]),"color".concat(o,"Hover"),n[a][i?10:8]),"color".concat(o),n[a][9]),"color".concat(o,"Active"),n[a][i?7:10]),"color".concat(o,"TextHover"),n[a][i?10:8]),"color".concat(o,"Text"),n[a][9]),"color".concat(o,"TextActive"),n[a][i?7:10])},Ml=function(e){var t=e.scale,n=e.appearance;return{colorBgContainer:n==="dark"?t[n][1]:t[n][0],colorBgElevated:n==="dark"?t[n][2]:t[n][0],colorBgLayout:n==="dark"?t[n][0]:t[n][1],colorBgMask:t.lightA[8],colorBgSpotlight:t[n][5],colorBorder:t[n][4],colorBorderSecondary:t[n][3],colorFill:t["".concat(n,"A")][3],colorFillQuaternary:t["".concat(n,"A")][0],colorFillSecondary:t["".concat(n,"A")][2],colorFillTertiary:t["".concat(n,"A")][1],colorText:t[n][12],colorTextQuaternary:t[n][6],colorTextSecondary:t[n][10],colorTextTertiary:t[n][8]}},Al={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},Ro=function(e){var t=e?"dark":"light",n=ye.gray[t][11],a=ye.gray[t][7],o=e?ye.red[t][9]:ye.volcano[t][9],i=e?ye.gold[t][9]:ye.orange[t][9],l=e?ye.lime[t][9]:ye.green[t][9],c=e?ye.blue[t][9]:ye.geekblue[t][9];return{colors:{"editor.foreground":n},name:t,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:l},enumMember:{foreground:c},macro:{foreground:l},"parameter.label:dart":{foreground:a},"property:dart":{foreground:l},tomlArrayKey:{foreground:o},"variable.constant":{foreground:l},"variable.defaultLibrary":{foreground:o},"variable:dart":{foreground:l}},tokenColors:[{scope:"meta.embedded",settings:{foreground:a}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:n}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:c}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:l}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:n}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:a}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:o}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:o}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:a}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:i}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:o}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:n}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:c}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:n}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:c}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:l}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:a}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:a}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:o}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:i}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:l}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:n}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:n}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:a}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:a}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:i}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:o}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:l}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:o}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:o}},{name:"java source",scope:"source.java",settings:{foreground:n}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:a}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:i}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:o}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:c}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:n}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:c}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:c}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:c}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:l}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:c}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:l}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:n}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:l}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:c}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:o}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:o}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:n}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:l}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:c}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:n}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:l}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:i}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:a}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:c}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:c}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:c}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:n}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:c}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:c}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:a}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:c}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:c}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:c}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:l}},{name:"python type",scope:"support.type.python",settings:{foreground:c}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:c}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:l}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:a}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:i}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:l}},{name:"Operators",scope:"keyword.operator",settings:{foreground:a}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:c}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:c}},{name:"Keywords",scope:"keyword",settings:{foreground:c}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:o}},{name:"Variables",scope:"variable",settings:{foreground:n}},{name:"Variables",scope:"variable.c",settings:{foreground:a}},{name:"Language variables",scope:"variable.language",settings:{foreground:o}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:a}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:o}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:c}},{name:"Packages",scope:"token.package",settings:{foreground:a}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:i}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:o}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:o}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:o}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:o}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:n}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:o}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:c}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:l}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:i}},{name:"Storage",scope:"storage",settings:{foreground:c}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:c}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:c}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:o}},{name:"Support",scope:"support.function",settings:{foreground:c}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:n}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:a}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:l}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:a}},{name:"Strings",scope:"string",settings:{foreground:l}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:c}},{name:"Integers",scope:"constant.numeric",settings:{foreground:l}},{name:"Constants",scope:"constant",settings:{foreground:l}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:l}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:n}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:l}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:i}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:l}},{name:"Selector",scope:"meta.selector",settings:{foreground:c}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:o}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:i}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:n}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:l}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:o}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:c}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:n}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:n}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:i}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:c}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:c}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:a}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:n}},{name:"Broken",scope:"invalid.broken",settings:{foreground:n}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:n}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:l}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:l}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:n}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:c}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:c}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:o}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:c}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:c}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:a}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:a}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:o}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:o}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:i}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:a}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:l}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:l}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:i}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:c}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:c}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:c}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:c}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:i}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:c}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:a}},{name:"brace function",scope:"function.brace",settings:{foreground:a}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:a}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:c}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:c}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:c}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:l}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:l}},{name:"sass selector",scope:"selector.sass",settings:{foreground:n}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:o}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:a}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:o}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:n}},{scope:"token.info-token",settings:{foreground:i}},{scope:"token.warn-token",settings:{foreground:l}},{scope:"token.error-token",settings:{foreground:o}},{scope:"token.debug-token",settings:{foreground:c}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:c}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:a}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:c}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:i}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:o}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:n}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:n}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:l}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:l}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:l}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:l}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:c}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:o}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:c}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:o}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:c}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:l}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:c}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:n}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:c}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:o}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:n}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:c}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:n}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:l}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:n}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:o}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:o}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:i}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:n}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:l}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:o}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:c}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:n}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:o}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:o}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:c}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:n}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:c}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:c}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:a}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:l}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:a}},{name:"link",scope:["constant.character.xi"],settings:{foreground:i}},{name:"accent",scope:["accent.xi"],settings:{foreground:i}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:l}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:n}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:a}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:o}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:n}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:a}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:a}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:a}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:c}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:o}},{scope:["entity.name.variable.field.cs"],settings:{foreground:n}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:n}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:l}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:o}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:a}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:o}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:n}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:o}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:n}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:a}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:c}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:l}},{scope:["constant.character.escape"],settings:{foreground:c}},{scope:["string.regexp"],settings:{foreground:n}},{scope:["log.info"],settings:{foreground:l}},{scope:["log.warning"],settings:{foreground:o}},{scope:["log.error"],settings:{foreground:n}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:t}},nt=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"],Bo="txt",On=[Bo],Fo,wl=function(){var r=Sn()($e()().mark(function e(t){var n,a;return $e()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=Fo,a=t.toLowerCase(),!(n&&On.includes(a))){i.next=4;break}return i.abrupt("return",n);case 4:return nt.includes(a)&&!On.includes(a)&&On.push(a),i.next=7,(0,Cl.e$)({langs:On,themes:[Ro(!0),Ro(!1)]});case 7:return n=i.sent,Fo=n,i.abrupt("return",n);case 10:case"end":return i.stop()}},e)}));return function(t){return r.apply(this,arguments)}}(),El=function(e,t,n){return(0,Sl.ZP)([t==null?void 0:t.toLowerCase(),n?"dark":"light",e].join("-"),Sn()($e()().mark(function a(){var o,i,l;return $e()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,o=t.toLowerCase(),g.next=4,wl(o);case 4:return i=g.sent,l=i==null?void 0:i.codeToHtml(e,{lang:nt.includes(o)?o:Bo,theme:n?"dark":"light",transformers:[(0,dn.hu)(),(0,dn.d0)(),(0,dn.dY)(),(0,dn.Eu)(),(0,dn.p4)()]}),g.abrupt("return",l);case 9:return g.prev=9,g.t0=g.catch(0),g.abrupt("return","");case 12:case"end":return g.stop()}},a,null,[[0,9]])})),{revalidateOnFocus:!1})},Ll=d(5312),zo,Ho,$o,Ol=(0,O.kc)(function(r){var e=r.css,t=r.token,n=r.cx,a=r.prefixCls,o=r.stylish,i="".concat(a,"-highlighter");return{loading:n(o.blur,e(zo||(zo=v()([`
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
      `])),t.fontFamilyCode,t.colorTextTertiary,t.borderRadius)),shiki:n("".concat(i,"-shiki"),e(Ho||(Ho=v()([`
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
      `])),t.colorFillTertiary,t.colorWarningBg,t.colorErrorBg,t.colorFillTertiary,t.colorBorderSecondary,t.borderRadius,t.colorErrorBg,t.colorErrorText,t.colorSuccessBg,t.colorSuccessText)),unshiki:e($o||($o=v()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),t.colorTextDescription)}}),Uo=(0,p.memo)(function(r){var e=r.children,t=r.language,n=r.className,a=r.style,o=Ol(),i=o.styles,l=o.cx,c=(0,Qn.r)(),g=c.isDarkMode,f=El(e.trim(),t,g),m=f.data,b=f.isLoading;return(0,s.jsxs)(s.Fragment,{children:[b||!m?(0,s.jsx)("div",{className:l(i.unshiki,n),style:a,children:(0,s.jsx)("pre",{children:(0,s.jsx)("div",{children:e.trim()})})}):(0,s.jsx)("div",{className:l(i.shiki,n),dangerouslySetInnerHTML:{__html:m},style:a}),b&&(0,s.jsx)(be.D,{align:"center",className:i.loading,gap:8,horizontal:!0,justify:"center",children:(0,s.jsx)(he.Z,{icon:Ll.Z,spin:!0})})]})}),Vo,Qo,Wo,Ko,Go,Jo,Xo,Yo=(0,O.kc)(function(r,e){var t=r.token,n=r.css,a=r.cx,o=r.prefixCls,i=r.stylish,l="".concat(o,"-highlighter"),c="".concat(l,"-hover-btn"),g="".concat(l,"-hover-lang"),f=n(Vo||(Vo=v()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),e==="block"?t.colorFillTertiary:"transparent",e==="block"?"transparent":t.colorBorder,e==="block"?t.colorFillTertiary:t.colorFillQuaternary);return{button:a(c,n(Qo||(Qo=v()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),e==="pure"?0:"12px",e==="pure"?0:"12px")),container:a(l,e!=="pure"&&f,n(Wo||(Wo=v()([`
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
        `])),t.borderRadius,t.motionEaseOut,c,g,e==="pure"?0:"16px")),header:n(Ko||(Ko=v()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),t.colorFillQuaternary),lang:a(g,i.blur,n(Go||(Go=v()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),t.fontFamilyCode,t.colorTextSecondary)),scroller:n(Jo||(Jo=v()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:n(Xo||(Xo=v()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),t.colorTextDescription,o,t.colorTextDescription)}}),Nl=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],Pl=nt.map(function(r){return{label:r,value:r.toLowerCase()}}),_o=(0,p.memo)(function(r){var e=r.children,t=r.language,n=t===void 0?"markdown":t,a=r.className,o=r.style,i=r.allowChangeLanguage,l=i===void 0?!1:i,c=r.fileName,g=r.icon,f=r.contentStyle,m=L()(r,Nl),b=(0,p.useState)(!0),y=E()(b,2),h=y[0],C=y[1],x=(0,p.useState)(n||"markdown"),k=E()(x,2),j=k[0],T=k[1],A=Yo("block"),N=A.styles,V=A.cx,B=V(N.container,a);return(0,s.jsxs)("div",u()(u()({className:B,"data-code-type":"highlighter",style:o},m),{},{children:[(0,s.jsxs)(be.D,{align:"center",className:N.header,horizontal:!0,justify:"space-between",children:[(0,s.jsx)(hl.Z,{icon:h?yl.Z:xl.Z,onClick:function(){return C(!h)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),l&&!c?(0,s.jsx)(Io.default,{className:N.select,onSelect:T,options:Pl,size:"small",suffixIcon:!1,value:j.toLowerCase(),variant:"borderless"}):(0,s.jsxs)(be.D,{align:"center",className:N.select,gap:2,horizontal:!0,children:[g,(0,s.jsx)("span",{children:c||j})]}),(0,s.jsx)(Zo.Z,{content:e,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,s.jsx)(Uo,{language:j==null?void 0:j.toLowerCase(),style:h?f:u()(u()({},f),{},{height:0,overflow:"hidden"}),children:e})]}))}),Tl=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle"],Dl=(0,p.memo)(function(r){var e=r.fullFeatured,t=r.copyButtonSize,n=t===void 0?"site":t,a=r.children,o=r.language,i=r.className,l=r.style,c=r.copyable,g=c===void 0?!0:c,f=r.showLanguage,m=f===void 0?!0:f,b=r.type,y=b===void 0?"block":b,h=r.spotlight,C=r.allowChangeLanguage,x=r.fileName,k=r.icon,j=r.contentStyle,T=L()(r,Tl),A=Yo(y),N=A.styles,V=A.cx,B=V(N.container,i);return e?(0,s.jsx)(_o,u()(u()({allowChangeLanguage:C,className:i,contentStyle:j,fileName:x,icon:k,language:o,style:l},T),{},{children:a})):(0,s.jsxs)("div",u()(u()({className:B,"data-code-type":"highlighter",style:l},T),{},{children:[h&&(0,s.jsx)(vl.Z,{size:240}),g&&(0,s.jsx)(Zo.Z,{className:N.button,content:a,placement:"left",size:n}),m&&o&&(0,s.jsx)(bl.Z,{className:N.lang,children:o.toLowerCase()}),(0,s.jsx)("div",{className:N.scroller,children:(0,s.jsx)(Uo,{language:o==null?void 0:o.toLowerCase(),style:j,children:a})})]}))}),Zl=d(77314),Il=d(24934),Rl=d(72076),Bl=d(52124),Fl=d(34738),zl=d(14192),Hl=d(50658),$l=d(34817),Ul=d(33443),Vl=d(22669),Ql=d(86751),Wl=d(98872),Kl=d(1196),Gl=d(43040),Jl=d(5024),Xl=d(93424),Yl=d(8827),_l=d(80649),ql=d(53350),ec=d(16642),nc=d(54373),tc=d(46104),rc=d(95935),oc=d(70940),ac=d(14444),ic=d(43869),sc=d(40901),lc=d(3029),cc=d(8561),dc=d(72121),uc=d(45468),pc=d(20449),gc=d(74878),fc=d(93432),mc=d(82028),vc=d(82121),bc=d(25951),hc=d(96753),yc=d(91272),xc=d(99641),Cc=d(63605),Sc=d(93793),jc=d(76079),kc=d(66538),Mc=d(70190)}}]);
