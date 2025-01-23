"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(Rn,J,n){n.d(J,{b:function(){return B}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(21153),U=n(75271),Z=n(53649),r=n.n(Z),T=n(47512),d,E=(0,T.kc)(function(C,b){var h=C.css,R=b.bordered,p=R===void 0?"dashed":R;return{custom:h(d||(d=r()([`
        border-style: `,` !important;
      `])),p)}},{hashPriority:"low"}),u=n(52676),a=["bordered","className"],B=function(b){var h=b.bordered,R=h===void 0?"dashed":h,p=b.className,L=A()(b,a),j=E({bordered:R}),f=j.styles,O=j.cx;return(0,u.jsx)(S.Z,t()(t()({},L),{},{className:O(f.custom,p)}))};B.ErrorBoundary=S.Z.ErrorBoundary;var y=null},5244:function(Rn,J,n){n.d(J,{g:function(){return d}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(23878),U=n(75271),Z=n(55300),r=n(52676),T=["children"],d=function(a){var B=a.children,y=A()(a,T);return(0,r.jsxs)(S.Z,t()(t()({},y),{},{children:[(0,r.jsx)(Z.E,{}),B]}))};d.useApp=S.Z.useApp;var E=null},52412:function(Rn,J,n){var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(53649),U=n.n(S),Z=n(62579),r=n(51874),T=n(47512),d=n(75271),E=n(52676),u=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],a,B,y,C=(0,T.kc)(function(h){var R=h.css;return{container:R(a||(a=U()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:R(B||(B=U()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:R(y||(y=U()([`
      position: relative;
      flex: 1;
    `])))}}),b=(0,d.forwardRef)(function(h,R){var p=h.className,L=h.style,j=h.classNames,f=h.expand,O=f===void 0?!0:f,z=h.setExpand,x=h.bottomAddons,N=h.topAddons,_=h.onSizeChange,Q=h.heights,X=h.onSend,q=A()(h,u),$=C(),F=$.styles;return(0,E.jsx)(Z.Z,{className:p,classNames:j,fullscreen:O,headerHeight:Q==null?void 0:Q.headerHeight,maxHeight:Q==null?void 0:Q.maxHeight,minHeight:Q==null?void 0:Q.minHeight,onSizeChange:_,placement:"bottom",size:{height:Q==null?void 0:Q.inputHeight,width:"100%"},style:t()({zIndex:10},L),children:(0,E.jsxs)("section",{className:F.container,style:{minHeight:Q==null?void 0:Q.minHeight},children:[N,(0,E.jsx)("div",{className:F.textareaContainer,children:(0,E.jsx)(r.Z,t()({className:F.textarea,onSend:function(){X==null||X(),z==null||z(!1)},ref:R,type:"pure"},q))}),x]})})});J.Z=(0,d.memo)(b)},92436:function(Rn,J,n){n.d(J,{z:function(){return En}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(59171),U=n(10581),Z=n(93955),r=n(81262),T=n(9192),d=n(81134),E=n(75271),u=n(90142),a=n(99335),B=n(53649),y=n.n(B),C=n(47512),b,h,R,p,L,j,f,O,z,x,N,_,Q,X,q,$,F,v,I=(0,C.kc)(function(g,Y){var en=g.cx,w=g.css,nn=g.token,In=g.isDarkMode,Mn=g.responsive,On=Y.placement,Bn=Y.type,Qn=Y.title,Pn=Y.primary,Zn=Y.avatarSize,Wn=Y.editing,qn=Y.time,vn=Y.isLatest,Tn=w(b||(b=y()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Pn?In?nn.colorFill:nn.colorBgElevated:In?nn.colorFillSecondary:nn.colorBgContainer,nn.borderRadiusLG,nn.motionEaseOut),cn=w(h||(h=y()([`
      padding-block-start: `,`;
    `])),Qn?0:"6px"),An=w(R||(R=y()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),nn.motionEaseOut),te=Bn==="block"?Tn:cn,re=Wn&&w(p||(p=y()([`
        width: 100%;
      `])));return{actions:en(w(L||(L=y()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),Bn==="block"?"flex-end":On==="left"?"flex-start":"flex-end",On==="left"?"flex-end":"flex-start"),Wn&&w(j||(j=y()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:w(f||(f=y()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),Zn,Zn),avatarGroupContainer:w(O||(O=y()([`
        width: `,`px;
      `])),Zn),container:en(Bn==="pure"&&An,w(z||(z=y()([`
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
            pointer-events: `,`;
            opacity: `,`;
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
        `])),vn?"unset":"none",vn?1:0,nn.motionEaseOut,Mn.mobile,Bn==="pure"?"12px":"6px")),editingContainer:en(re,w(x||(x=y()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),nn.colorBorderSecondary,nn.colorBorder),Bn==="pure"&&w(N||(N=y()([`
            background: `,`;
            border-radius: `,`px;
          `])),nn.colorFillQuaternary,nn.borderRadius)),editingInput:w(_||(_=y()([`
        width: 100%;
      `]))),errorContainer:w(Q||(Q=y()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:w(X||(X=y()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),On==="right"?"-4px":"unset",On==="left"?"-4px":"unset",nn.colorBgLayout,nn.colorPrimary),message:en(te,w(q||(q=y()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),Mn.mobile)),messageContainer:en(re,w($||($=y()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),qn?-16:0,Mn.mobile)),messageContent:en(re,w(F||(F=y()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),Mn.mobile)),messageExtra:en("message-extra"),name:w(v||(v=y()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),nn.colorTextDescription,On==="left"?"left":"right")}}),W=n(52676),an=(0,E.memo)(function(g){var Y=g.editing,en=g.onChange,w=g.onEditingChange,nn=g.text,In=g.message,Mn=g.placement,On=g.messageExtra,Bn=g.renderMessage,Qn=g.type,Pn=g.primary,Zn=g.onDoubleClick,Wn=g.fontSize,qn=g.markdownProps,vn=g.markdownClassname,Tn=I({editing:Y,placement:Mn,primary:Pn,type:Qn}),cn=Tn.cx,An=Tn.styles,te=(0,d.F)(),re=te.mobile,tn=(0,W.jsx)(a.i,{classNames:{input:An.editingInput,markdown:vn},editButtonSize:"small",editing:Y,fontSize:Wn,fullFeaturedCodeBlock:!0,markdownProps:qn,onChange:en,onEditingChange:w,openModal:re?Y:void 0,text:nn,value:In?String(In).trim():""}),Vn=Bn?Bn(tn):tn;return(0,W.jsxs)(u.D,{className:cn(An.message,Y&&An.editingContainer),onDoubleClick:Zn,children:[Vn,On&&!Y?(0,W.jsx)("div",{className:An.messageExtra,children:On}):null]})}),M=an,yn=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest"],on=32,En=(0,E.memo)(function(g){var Y=g.avatarAddon,en=g.onAvatarClick,w=g.avatarProps,nn=g.actions,In=g.className,Mn=g.primary,On=g.loading,Bn=g.message,Qn=g.placement,Pn=Qn===void 0?"left":Qn,Zn=g.type,Wn=Zn===void 0?"block":Zn,qn=g.avatar,vn=g.error,Tn=g.showTitle,cn=g.time,An=g.editing,te=g.onChange,re=g.onEditingChange,tn=g.messageExtra,Vn=g.renderMessage,he=g.text,Ee=g.errorMessage,De=g.onDoubleClick,pe=g.fontSize,je=g.markdownProps,Ue=g.markdownClassname,dn=g.isLatest,m=A()(g,yn),V=(0,d.F)(),D=V.mobile,gn=I({editing:An,placement:Pn,primary:Mn,showTitle:Tn,time:cn,title:qn.title,type:Wn,isLatest:dn}),bn=gn.cx,pn=gn.styles;return(0,W.jsxs)(u.D,t()(t()({className:bn(pn.container,In),direction:Pn==="left"?"horizontal":"horizontal-reverse",gap:D?6:12},m),{},{children:[(0,W.jsx)(U.Z,t()(t()({},w),{},{addon:Y,avatar:qn,loading:On,onClick:en,placement:Pn,size:D?on:void 0})),(0,W.jsxs)(u.D,{align:Pn==="left"?"flex-start":"flex-end",className:pn.messageContainer,children:[(0,W.jsx)(T.Z,{avatar:qn,placement:Pn,showTitle:Tn,time:cn}),(0,W.jsxs)(u.D,{align:Pn==="left"?"flex-start":"flex-end",className:pn.messageContent,direction:Wn==="block"?Pn==="left"?"horizontal":"horizontal-reverse":"vertical",gap:8,children:[vn?(0,W.jsx)(r.Z,{error:vn,message:Ee,placement:Pn}):(0,W.jsx)(M,{editing:An,fontSize:pe,markdownClassname:Ue,markdownProps:je,message:Bn,messageExtra:tn,onChange:te,onDoubleClick:De,onEditingChange:re,placement:Pn,primary:Mn,renderMessage:Vn,text:he,type:Wn}),(0,W.jsx)(S.Z,{actions:nn,editing:An,placement:Pn,type:Wn})]})]}),D&&Wn==="block"&&(0,W.jsx)(Z.Z,{borderSpacing:on})]}))})},13306:function(Rn,J,n){n.d(J,{U:function(){return z}});var k=n(26068),t=n.n(k),G=n(48305),A=n.n(G),S=n(67825),U=n.n(S),Z=n(97157),r=n(86818),T=n(44923),d=n(71170),E=n(75271),u=n(84569),a=n.n(u),B=n(53649),y=n.n(B),C=n(47512),b,h,R,p,L,j=(0,C.kc)(function(x){var N=x.css,_=x.token,Q=x.prefixCls;return{root:N(b||(b=y()([`
      overflow: hidden;
    `]))),wrapper:N(h||(h=y()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),_.marginLG),content:N(R||(R=y()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),_.borderRadiusLG,_.boxShadowSecondary),dragWrapper:N(p||(p=y()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:N(L||(L=y()([`
      cursor: move;
    `])))}}),f=n(52676),O=["title","classNames","defaultPosition","onPositionChange"],z=(0,E.memo)(function(x){var N=x.title,_=x.classNames,Q=_===void 0?{}:_,X=x.defaultPosition,q=x.onPositionChange,$=U()(x,O),F=j(),v=F.styles,I=F.cx,W=(0,E.useState)({left:0,top:0,bottom:0,right:0}),an=A()(W,2),M=an[0],yn=an[1],on=(0,E.useRef)(null),En=function(Y,en){var w,nn=window.document.documentElement,In=nn.clientWidth,Mn=nn.clientHeight,On=(w=on.current)===null||w===void 0?void 0:w.getBoundingClientRect();On&&yn({left:-On.left+en.x,right:In-(On.right-en.x),top:-On.top+en.y,bottom:Mn-(On.bottom-en.y)})};return(0,f.jsx)(r.Z,t()(t()({},$),{},{classNames:t()(t()({},Q),{},{wrapper:I(v.wrapper,Q.wrapper),content:I(v.content,Q.content)}),destroyOnClose:!0,drawerRender:function(Y){return(0,f.jsx)(a(),{bounds:M,defaultPosition:X,handle:".".concat(v.dragHandle),nodeRef:on,onStart:function(w,nn){return En(w,nn)},onStop:function(w,nn){q==null||q({x:nn.x,y:nn.y})},children:(0,f.jsx)("div",{className:v.dragWrapper,ref:on,children:Y})})},mask:!1,rootClassName:v.root,title:(0,f.jsxs)(T.Z,{align:"center",className:v.dragHandle,children:[(0,f.jsx)(T.Z,{flex:2,children:N}),(0,f.jsx)(T.Z,{children:(0,f.jsx)(d.ZP,{className:v.dragHandle,icon:(0,f.jsx)(Z.Z,{}),type:"text"})})]})}))})},5795:function(Rn,J,n){n.d(J,{d:function(){return C}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(86818),U=n(75271),Z=n(53649),r=n.n(Z),T=n(47512),d,E,u,a=(0,T.kc)(function(h,R){var p=h.css,L=h.prefixCls,j=R.closeIcon,f=R.closeIconPlacement,O=R.extra,z=p(d||(d=r()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),L,L,!(j===null||j===!1)&&p(E||(E=r()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),L));return{custom:p(u||(u=r()([`
        `,`
      `])),(!f||f==="right"||f==="auto"&&!O)&&z)}},{hashPriority:"low"}),B=n(52676),y=["className"],C=function(R){var p=R.className,L=A()(R,y),j=a(L),f=j.styles,O=j.cx;return(0,B.jsx)(S.Z,t()(t()({},L),{},{className:O(f.custom,p)}))},b=null},99512:function(Rn,J,n){n.d(J,{L:function(){return R}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(44923),U=n(5053),Z=n(75271),r=n(53649),T=n.n(r),d=n(47512),E,u,a,B,y=(0,d.kc)(function(p,L){var j=p.css,f=p.token,O=L.divider,z=L.position;return{menuWrapper:j(E||(E=T()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),f.colorBgElevated,f.borderRadiusLG,f.boxShadowSecondary),menuExtra:j(u||(u=T()([`
        padding: 10px 16px 4px;
        `,`
      `])),O&&j(z==="top"?a||(a=T()([`
              border-bottom: 1px solid `,`;
            `])):B||(B=T()([`
              border-top: 1px solid `,`;
            `])),f.colorSplit))}}),C=n(52676),b=["menuExtra","dropdownRender"],h=function(L){var j=L.menuExtra,f=L.dropdownRender,O=A()(L,b),z=j||{},x=z.position,N=x===void 0?"top":x,_=z.divider,Q=_===void 0?!1:_,X=z.content,q=y({divider:Q,position:N}),$=q.styles,F=(0,Z.useCallback)(function(v){var I=Z.cloneElement(v,{style:{boxShadow:"none",border:"none"}});if(!X)return f?(0,C.jsx)(S.Z,{className:$.menuWrapper,vertical:!0,children:f(I)}):v;var W=(0,C.jsx)(S.Z,{align:"center",className:$.menuExtra,children:X});return(0,C.jsxs)(S.Z,{className:$.menuWrapper,vertical:!0,children:[N==="top"&&W,I,N==="bottom"&&W]})},[X,f,N,$.menuExtra,$.menuWrapper]);return(0,C.jsx)(U.Z,t()({dropdownRender:F},O))},R=h;R.Button=U.Z.Button},99335:function(Rn,J,n){n.d(J,{i:function(){return E}});var k=n(26068),t=n.n(k),G=n(48305),A=n.n(G),S=n(14252),U=n(85814),Z=n(54285),r=n(75271),T=n(65720),d=n(52676),E=(0,r.memo)(function(u){var a=u.value,B=u.onChange,y=u.classNames,C=y===void 0?{}:y,b=u.onEditingChange,h=u.editing,R=u.openModal,p=u.onOpenChange,L=u.placeholder,j=u.showEditWhenEmpty,f=j===void 0?!1:j,O=u.styles,z=u.height,x=u.inputType,N=u.editButtonSize,_=u.text,Q=u.fullFeaturedCodeBlock,X=u.model,q=u.fontSize,$=u.markdownProps,F=(0,T.Z)(!1,{onChange:b,value:h}),v=A()(F,2),I=v[0],W=v[1],an=(0,T.Z)(!1,{onChange:p,value:R}),M=A()(an,2),yn=M[0],on=M[1],En=z==="auto",g=(0,d.jsx)(S.Z,{className:C==null?void 0:C.input,classNames:{textarea:C==null?void 0:C.textarea},defaultValue:a,editButtonSize:N,height:z,onCancel:function(){return W(!1)},onConfirm:function(en){B==null||B(en),W(!1)},placeholder:L,style:O==null?void 0:O.input,text:_,textareaClassname:C==null?void 0:C.input,type:x});return!a&&f?g:(0,d.jsxs)(d.Fragment,{children:[!yn&&I?g:(0,d.jsx)(U.Z,t()(t()({className:C==null?void 0:C.markdown,fontSize:q,fullFeaturedCodeBlock:Q,style:t()({height:En?"unset":z},O==null?void 0:O.markdown),variant:"chat"},$),{},{children:a||L||""})),yn&&(0,d.jsx)(Z.Z,{editing:I,extra:X==null?void 0:X.extra,footer:X==null?void 0:X.footer,height:z,onChange:B,onEditingChange:W,onOpenChange:function(en){on(en),W(!1)},open:yn,placeholder:L,text:_,value:a})]})})},14866:function(Rn,J,n){n.d(J,{w:function(){return r}});var k=n(48305),t=n.n(k),G=n(75271),A=function(d){return typeof d=="string"?document.querySelector("#".concat(d)):(d==null?void 0:d.current)||d},S=":not([disabled]):not([readonly])",U=["text","password","search","tel","url","number","email",""].map(function(T){return'input[type="'.concat(T,'"]').concat(S)}).join(", ")+", input:not([type])".concat(S,", textarea").concat(S),Z=function(d){var E,u=A(d);if(u){var a=(E=u.querySelector)===null||E===void 0?void 0:E.call(u,U);if(a!=null&&a.focus)return a.focus(),!0}},r=function(d){var E=(0,G.useState)(!1),u=t()(E,2),a=u[0],B=u[1];G.useEffect(function(){if(!(a||!d)){var y=Z(d);y&&B(!0)}},[d,a,B])}},20147:function(Rn,J,n){n.d(J,{MX:function(){return Z},wK:function(){return U},wL:function(){return A.w}});var k=n(26068),t=n.n(k),G=n(75271),A=n(14866),S=n(52676),U=function(T){var d,E=T.autoFocus,u=E===void 0?!0:E,a=(0,G.useRef)(null);return(0,A.w)(u?a:void 0),(0,S.jsx)("div",{className:T.className,id:T.id,ref:a,style:(d=T.style)!==null&&d!==void 0?d:{display:T.className?void 0:"contents"},children:T.children})},Z=function(T){return function(d){var E=function(B){return(0,S.jsx)(U,t()(t()({},T||{}),{},{children:(0,S.jsx)(d,t()({},B))}))},u=d.displayName||d.name||"Component";return E.displayName="withFormHelper(".concat(u,")"),E}}},25969:function(Rn,J,n){n.d(J,{n:function(){return O}});var k=n(26068),t=n.n(k),G=n(48305),A=n.n(G),S=n(67825),U=n.n(S),Z=n(60477),r=n(50999),T=n(41117),d=n(45798),E=n(3548),u=n(5312),a=n(75271),B=n(53649),y=n.n(B),C=n(47512),b,h,R,p,L=(0,C.kc)(function(z){var x=z.css,N=z.token,_="#222222";return{root:x(b||(b=y()([`
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
      `])),_,N.borderRadiusLG,N.marginXXS,N.paddingXS,_,N.borderRadiusLG,N.borderRadiusLG,N.borderRadius,N.borderRadius,_,N.borderRadiusLG,N.fontFamilyCode),searchBarIcon:x(h||(h=y()([`
        font-size: 16px;
      `]))),loaderText:x(R||(R=y()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),N.fontFamilyCode),loaderIcon:x(p||(p=y()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),N.marginSM,N.marginSM)}},{hashPriority:"low"}),j=n(52676),f=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],O=function(x){var N=x.className,_=x.id,Q=x.style,X=x.height,q=x.onScroll,$=x.url,F=x.websocket,v=x.refreshInterval,I=x.onLoad,W=x.onError,an=U()(x,f),M=L(),yn=M.cx,on=M.styles,En=(0,a.useState)(0),g=A()(En,2),Y=g[0],en=g[1],w=(0,a.useState)(!1),nn=A()(w,2),In=nn[0],Mn=nn[1],On=(0,a.useState)(!1),Bn=A()(On,2),Qn=Bn[0],Pn=Bn[1],Zn=(0,a.useRef)(),Wn=(0,a.useRef)();(0,a.useEffect)(function(){return function(){clearTimeout(Zn.current),clearTimeout(Wn.current)}},[]),(0,a.useEffect)(function(){var cn;return $&&!F&&v&&(cn=setInterval(function(){en(function(An){return An+1})},v)),function(){clearInterval(cn)}},[v,$,F]);var qn=(0,a.useMemo)(function(){return $&&(Zn.current=setTimeout(function(){Mn(!0),Zn.current=void 0},50),"".concat($,"#").concat(Y))},[$,Y]),vn=(0,a.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Zn.current),Mn(!1),Pn(!0),Wn.current=setTimeout(function(){return Pn(!1)},100),I==null||I()},[I]),Tn=(0,a.useCallback)(function(cn){Mn(!1),clearTimeout(Zn.current),W==null||W(cn)},[W]);return(0,j.jsxs)("div",{className:yn(on.root,N),id:_,style:t()({height:X},Q),children:[(0,j.jsx)(r.Uu,{render:function(An){var te=An.follow,re=An.onScroll;return(0,j.jsx)(r.A9,t()(t()({url:qn,websocket:F},an),{},{follow:Qn||te,height:X,iconFilterLines:(0,j.jsx)(Z.Z,{className:on.searchBarIcon,icon:T.Z}),iconFindNext:(0,j.jsx)(Z.Z,{className:on.searchBarIcon,icon:d.Z}),iconFindPrevious:(0,j.jsx)(Z.Z,{className:on.searchBarIcon,icon:E.Z}),onError:Tn,onLoad:vn,onScroll:function(Vn){re(Vn),q==null||q(Vn)}}))},startFollowing:!0}),In&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:on.loaderText,children:"loading ..."}),(0,j.jsx)(Z.Z,{className:on.loaderIcon,icon:u.Z,spin:!0})]})]})}},52625:function(Rn,J,n){n.d(J,{T:function(){return R}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(47512),U=n(75271),Z=n(90142),r=n(36075),T=n.n(r),d=n(52676),E=(0,U.memo)(function(p){var L=Object.assign({},(T()(p),p));return(0,d.jsx)("svg",t()(t()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},L),{},{children:(0,d.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),u=(0,U.memo)(function(p){var L=Object.assign({},(T()(p),p));return(0,d.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},L),{},{children:[(0,d.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,d.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,d.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),a=(0,U.memo)(function(p){var L=Object.assign({},(T()(p),p));return(0,d.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},L),{},{children:[(0,d.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,d.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,d.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,d.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,d.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,d.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,d.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),B=n(53649),y=n.n(B),C,b=(0,S.kc)(function(p){var L=p.css;return{extraTitle:L(C||(C=y()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),h=["type","size","style","extra","className"],R=(0,U.memo)(function(p){var L=p.type,j=L===void 0?"img":L,f=p.size,O=f===void 0?32:f,z=p.style,x=p.extra,N=p.className,_=A()(p,h),Q=(0,S.Fg)(),X=b(),q=X.styles,$;switch(j){case"text":{$=(0,d.jsx)(a,t()({className:N,height:O,style:z,width:O*2.9375},_));break}case"combine":{$=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,t()({height:O,style:z,width:O},_)),(0,d.jsx)(a,{style:{height:O,marginLeft:Math.round(O/4),width:"auto"}})]});break}case"img":default:{$=(0,d.jsx)(u,t()({height:O,style:z,width:O},_));break}}if(!x)return $;var F=Math.round(O/3*1.9);return(0,d.jsxs)(Z.D,t()(t()({align:"center",className:N,horizontal:!0,style:z},_),{},{children:[$,(0,d.jsx)(E,{style:{color:Q.colorFill,height:F,width:F}}),(0,d.jsx)("div",{className:q.extraTitle,style:{fontSize:F},children:x})]}))})},48355:function(Rn,J,n){n.d(J,{o:function(){return ue}});var k=n(26068),t=n.n(k),G=n(82092),A=n.n(G),S=n(14837),U=n(64419),Z=n(30924),r=n(6988),T=n(56875),d=n(44250),E=n(66108),u=n(36419),a=n(75271),B=n(28485),y=n(25298),C=n.n(y),b=n(17069),h=n.n(b),R=n(9504),p=n.n(R),L=n(38836),j=n.n(L),f=n(21742),O=n.n(f),z=n(83136),x=n.n(z),N=function(s){O()(o,s);var i=x()(o);function o(){return C()(this,o),i.apply(this,arguments)}return h()(o,[{key:"createDOM",value:function(l){var c=p()(j()(o.prototype),"createDOM",this).call(this,l);return c.classList.add("align-middle"),c}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(l){return new o(l.__text,l.__key)}},{key:"importJSON",value:function(l){var c=(0,u.MX)(l.text);return c.setFormat(l.format),c.setDetail(l.detail),c.setMode(l.mode),c.setStyle(l.style),c}}]),o}(u.R2);function _(s){return new N(s)}var Q=n(62657),X=n.n(Q),q=n(48305),$=n.n(q),F=n(71561),v=n(60477),I=n(44923),W=n(56995),an=n(69024),M=n(52676),yn=(0,a.createContext)(null),on=(0,a.memo)(function(s){var i=s.children,o=s.value;return(0,M.jsx)(yn.Provider,{value:o,children:i})}),En=function(){var i=(0,a.useContext)(yn);return i==null?void 0:i.optionsMap},g=n(33803),Y=n(32199),en=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,w="\\(",nn=function(i){return"(?:"+i.join("|")+")"},In=function(i,o){var e=i.length===0?"":"(?!"+i.join("|")+")";return e+"[^\\s"+o+"]"},Mn=function(i){return"(?:\\.[ |$]|\\s|["+i+"]|)"},On=75,Bn=function(i,o){var e=(0,a.useRef)(null),l=(0,F.g)(),c=$()(l,1),P=c[0],H=(0,g.y)(i),rn=$()(H,3),ln=rn[0],un=rn[1],K=rn[2],Cn=(0,a.useCallback)(function(Sn){var zn=(0,u.dL)(),wn=zn==null?void 0:zn.getNodes();if(!ln&&(wn==null?void 0:wn.length)===1&&P.dispatchCommand(o,void 0),ln&&(0,u.iO)(zn)){Sn.preventDefault();var de=(0,u.gI)(i);if((0,u.k$)(de))return o&&P.dispatchCommand(o,void 0),de.remove(),!0}return!1},[ln,i,o,P]),Dn=(0,a.useCallback)(function(Sn){Sn.stopPropagation(),K(),un(!0)},[un,K]);return(0,a.useEffect)(function(){var Sn=e.current;return Sn&&Sn.addEventListener("click",Dn),function(){Sn&&Sn.removeEventListener("click",Dn)}},[Dn]),(0,a.useEffect)(function(){return(0,Y.qV)(P.registerCommand(u.MK,Cn,u.KB),P.registerCommand(u.aR,Cn,u.KB))},[P,K,Cn]),[e,ln]},Qn=function(){var i=useRef(null),o=useState(!1),e=_slicedToArray(o,2),l=e[0],c=e[1],P=useCallback(function(H){H.stopPropagation(),c(function(rn){return!rn})},[]);return useEffect(function(){var H=i.current;return H&&H.addEventListener("click",P),function(){H&&H.removeEventListener("click",P)}},[P]),[i,l,c]};function Pn(s,i,o,e){return new RegExp((i?"(^|\\s|".concat(i,")("):"(^|\\s)(")+nn(s)+"((?:"+In(s,o)+(e?Mn(o):"")+"){0,"+On+"}))$")}function Zn(s,i,o,e,l){var c=Pn(i,o,e,l).exec(s);if(c!==null){var P=c[1],H=c[2],rn=c[3];if(H.length>0)return{leadOffset:c.index+P.length,matchingString:rn,replaceableString:H}}return null}var Wn=function(i,o){var e=o.punctuation,l=o.preTriggerChars,c=o.allowSpaces,P=(0,a.useState)(null),H=$()(P,2),rn=H[0],ln=H[1],un=(0,a.useCallback)(function(K){var Cn=Zn(K,i,l,e,c);if(Cn){var Dn=Cn.replaceableString,Sn=Cn.matchingString,zn=Dn.lastIndexOf(Sn),wn=zn===-1?Dn:Dn.slice(0,Math.max(0,zn))+Dn.slice(Math.max(0,zn+Sn.length));if(ln(wn||null),Cn.replaceableString)return Cn}else ln(null);return null},[l,c,e,i]);return{trigger:rn,checkForMentionMatch:un}},qn=n(53649),vn=n.n(qn),Tn=n(47512),cn,An,te,re=(0,Tn.kc)(function(s,i){var o=s.css,e=s.token,l=s.prefixCls,c=i.isSelected,P=i.isError,H=function(){return P?c?{background:e.colorErrorBgActive,border:e.colorErrorBorderHover,color:e.colorErrorTextActive}:{background:e.colorErrorBg,border:e.colorErrorBorder,color:e.colorErrorText}:c?{background:e.colorInfoBgHover,border:e.colorInfoBorder,color:e.colorInfoText}:{background:e.colorFillTertiary,border:"transparent",color:e.colorInfoText}},rn=H(),ln=rn.background,un=rn.border,K=rn.color;return{root:o(cn||(cn=vn()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),e.fontFamilyCode,K,ln,un,e.borderRadius),text:o(An||(An=vn()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),e.colorTextSecondary),error:o(te||(te=vn()([`
        color: `,`;
      `])),e.colorErrorText)}}),tn=(0,u.fA)("INSERT_MENTION_COMMAND"),Vn=(0,u.fA)("DELETE_MENTION_COMMAND"),he=(0,u.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Ee=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,De=(0,a.memo)(function(s){var i=s.nodeKey,o=s.variable,e=En(),l=(0,F.g)(),c=$()(l,1),P=c[0],H=Bn(i,Vn),rn=$()(H,2),ln=rn[0],un=rn[1],K=e==null?void 0:e[o],Cn=re({isSelected:un,isError:!K||!!K.error}),Dn=Cn.styles;(0,a.useEffect)(function(){if(!P.hasNodes([pe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[P]);var Sn=(0,M.jsx)(I.Z,{className:Dn.root,ref:ln,children:(0,M.jsxs)(I.Z,{align:"center",gap:2,children:[(!K||K.error)&&(0,M.jsx)(v.Z,{className:Dn.error,icon:an.Z}),(K==null?void 0:K.icon)&&(0,M.jsx)(I.Z,{children:K.icon}),(0,M.jsx)(I.Z,{className:Dn.text,gap:2,title:(K==null?void 0:K.label)||o,children:(0,M.jsx)("span",{children:(K==null?void 0:K.selectedLabel)||(K==null?void 0:K.label)||o})})]})});return K!=null&&K.error?(0,M.jsx)(W.Z,{title:K==null?void 0:K.error,children:Sn}):Sn}),pe=function(s){O()(o,s);var i=x()(o);function o(e,l){var c;return C()(this,o),c=i.call(this,l),A()(X()(c),"__variable",void 0),c.__variable=e,c}return h()(o,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var l=document.createElement("div");return l.style.display="inline-flex",l.style.alignItems="center",l.style.verticalAlign="middle",l}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,M.jsx)(De,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var l=this.getLatest();return l.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(l){return new o(l.__variable,l.__key)}},{key:"importJSON",value:function(l){var c=je(l.variable);return c}}]),o}(u.Ij);function je(s){return new pe(s)}function Ue(s){return s instanceof pe}var dn=(0,a.memo)(function(s){var i=s.onInsert,o=s.onDelete,e=(0,F.g)(),l=$()(e,1),c=l[0];return(0,a.useEffect)(function(){if(!c.hasNodes([pe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,Y.qV)(c.registerCommand(tn,function(P){c.dispatchCommand(he,null);var H=je(P);return(0,u.od)([H]),i&&i(),!0},u.VN),c.registerCommand(Vn,function(){return o&&o(),!0},u.VN))},[c,i,o]),null});dn.displayName="MentionNodePlugin";var m=(0,u.fA)("INSERT_MENTION_COMMAND"),V=(0,u.fA)("DELETE_MENTION_COMMAND"),D=(0,u.fA)("CLEAR_HIDE_MENU_TIMEOUT"),gn=(0,u.fA)("UPDATE_MENTIONS_OPTIONS"),bn=function(i,o,e){if(i.isSimpleText())for(var l=i.getPreviousSibling(),c=i.getTextContent(),P=i,H;;){H=o(c);var rn=H===null?"":c.slice(H.end);if(c=rn,rn===""){var ln=P.getNextSibling();if((0,u.Gg)(ln)){rn=P.getTextContent()+ln.getTextContent();var un=o(rn);if(un===null){ln.markDirty();return}else if(un.start!==0)return}}else{var K=o(rn);if(K!==null&&K.start===0)return}if(H===null)return;if(!(H.start===0&&(0,u.Gg)(l)&&l.isTextEntity())){var Cn=void 0;if(H.start===0){var Dn=P.splitText(H.end),Sn=$()(Dn,2);Cn=Sn[0],P=Sn[1]}else{var zn=P.splitText(H.start,H.end),wn=$()(zn,3);Cn=wn[1],P=wn[2]}var de=e(Cn);if(Cn.replace(de),P==null)return}}};function pn(s){var i=s.split(`
`);return JSON.stringify({root:{children:i.map(function(o){return{children:[{detail:0,format:0,mode:"normal",style:"",text:o,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var sn=(0,a.memo)(function(s){var i=s.onInsert,o=(0,F.g)(),e=$()(o,1),l=e[0];(0,a.useEffect)(function(){if(!l.hasNodes([pe]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[l]);var c=(0,a.useCallback)(function(rn){i&&i();var ln=rn.getTextContent().slice(2,-2);return(0,u.U2)(je(ln))},[i]),P=(0,a.useCallback)(function(rn){var ln=Ee.exec(rn);if(ln===null)return null;var un=ln.index,K=un+ln[0].length;return{end:K,start:un}},[]),H=(0,a.useCallback)(function(rn){return Ee.lastIndex=0,bn(rn,P,c)},[c,P]);return(0,a.useEffect)(function(){return Ee.lastIndex=0,(0,Y.qV)(l.registerNodeTransform(N,H))},[]),null}),kn=n(99934),$n=n(64287),Ln=n(30967),Fn=n(83606),_n=function(s){O()(o,s);var i=x()(o);function o(e){var l,c=e.label,P=e.value,H=e.data,rn=e.icon,ln=e.extraElement,un=e.keywords,K=e.keyboardShortcut,Cn=e.disabled,Dn=e.onSelect,Sn=e.children,zn=e.isChild;return C()(this,o),l=i.call(this,P),A()(X()(l),"label",void 0),A()(X()(l),"value",void 0),A()(X()(l),"title",void 0),A()(X()(l),"key",void 0),A()(X()(l),"icon",void 0),A()(X()(l),"extraElement",void 0),A()(X()(l),"keywords",void 0),A()(X()(l),"keyboardShortcut",void 0),A()(X()(l),"onSelect",void 0),A()(X()(l),"disabled",void 0),A()(X()(l),"data",void 0),A()(X()(l),"children",void 0),A()(X()(l),"isChild",void 0),l.value=P,l.label=c,l.title=c,l.key=P,l.keywords=un||[],l.icon=rn,l.extraElement=ln,l.keyboardShortcut=K,l.onSelect=Dn.bind(X()(l)),l.disabled=Cn,l.data=H,l.isChild=zn!=null?zn:!1,l.children=Sn==null?void 0:Sn.map(function(wn){return new o(t()(t()({},wn),{},{isChild:!0}))}),l}return h()(o)}(kn.n),le=function s(i,o){var e;return i.children=(e=i.children)===null||e===void 0?void 0:e.filter(function(l){if(!l.children)return o(l);var c=s(l,o);return o(l)||(c.children||[]).length>0}),i},Kn=function(i,o){var e=(0,F.g)(),l=$()(e,1),c=l[0],P=(0,a.useCallback)(function(rn){var ln,un=new RegExp((0,Fn.Z)(o),"i");return un.test(rn.label)||((ln=rn.keywords)===null||ln===void 0?void 0:ln.some(function(K){return un.test(K)}))||!1},[o]),H=(0,a.useMemo)(function(){var rn=function un(K){var Cn=t()(t()({},K),{},{children:void 0,onSelect:function(){c.dispatchCommand(tn,K.value)}});return K.children&&(Cn.children=K.children.map(function(Dn){return un(Dn)})),Cn},ln=i.map(function(un){return new _n(rn(un))});return o?ln.map(function(un){return un.children?le(un,P):un}).filter(function(un){return P(un)||(un.children||[]).length>0}):ln},[i,o,c,P]);return{options:H}},ne=n(78962),jn=n(94729),se,oe,ae,Gn,ce,ve,ie,Xn=(0,Tn.kc)(function(s,i){var o=s.css,e=s.token,l=s.prefixCls,c=i.isSelected,P=i.disabled,H=o(se||(se=vn()([`
      background-color: `,`;
    `])),e.colorFillSecondary);return{anchor:o(oe||(oe=vn()([`
        z-index: 9999;
      `]))),menuEmpty:o(ae||(ae=vn()([`
        padding: `,`px;
      `])),e.padding),menuOverlay:o(Gn||(Gn=vn()([`
        overflow: auto;

        width: 260px;
        max-height: 360px;
        margin-top: `,`px;
        padding: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
        .`,`-tree {
          &-switcher {
            margin: 2px 0;
          }
        }
      `])),e.marginXXS,e.paddingXXS,e.colorBgElevated,e.borderRadius,e.boxShadow,l),menuItem:o(ce||(ce=vn()([`
        cursor: `,`;
        pointer-events: `,`;

        padding: 0 `,`px;
        margin: 2px;

        position: relative;

        border-radius: `,`px;

        color: `,`;
        font-size: `,`px;
        line-height: 32px;
        `,`
        &:hover {
          `,`
        }
      `])),P?"not-allowed":"pointer",P?"none":"all",e.paddingXS,e.borderRadius,P?e.colorTextDisabled:e.colorText,e.fontSize,c&&H,H),menuItemIcon:o(ve||(ve=vn()([`
        color: `,`;
      `])),e.colorInfoText),menuItemLabel:o(ie||(ie=vn()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Yn=jn.C.Text,xn=(0,a.memo)(function(s){var i=s.index,o=s.isSelected,e=s.onClick,l=s.onMouseEnter,c=s.option,P=s.queryString,H=s.showIcon,rn=H===void 0?!0:H,ln=Xn({isSelected:o,disabled:c.disabled}),un=ln.styles,K=c.label,Cn=(0,a.useMemo)(function(){var wn=K,de="",Be="";if(P){var We=new RegExp((0,Fn.Z)(P),"i"),Se=We.exec(c.label);Se&&(wn=K.slice(0,Math.max(0,Se.index)),de=Se[0],Be=K.slice(Math.max(0,Se.index+Se[0].length)))}return{before:wn,middle:de,after:Be}},[c.label,P,K]),Dn=Cn.before,Sn=Cn.middle,zn=Cn.after;return(0,M.jsxs)(I.Z,{align:"center",className:un.menuItem,gap:4,onClick:function(){return e==null?void 0:e(i,c)},onMouseEnter:function(){return l==null?void 0:l(i,c)},ref:c.setRefElement,tabIndex:-1,children:[rn&&(0,M.jsx)(I.Z,{className:un.menuItemIcon,children:c.icon}),(0,M.jsxs)("div",{className:un.menuItemLabel,title:c.label,children:[Dn,(0,M.jsx)(Yn,{mark:!0,children:Sn}),zn]}),(0,M.jsx)(I.Z,{children:c.extraElement})]},c.key)});xn.displayName="MentionMenuItem";var mn=(0,a.memo)(function(s){var i=s.selectedIndex,o=s.options,e=s.onClick,l=s.onMouseEnter,c=s.queryString,P=Xn({}),H=P.styles;return(0,M.jsxs)(M.Fragment,{children:[o.length===0&&(0,M.jsx)(ne.Z,{className:H.menuEmpty,image:ne.Z.PRESENTED_IMAGE_SIMPLE}),o.map(function(rn,ln){return(0,M.jsx)(xn,{index:ln,isSelected:i===ln,onClick:e,onMouseEnter:l,option:rn,queryString:c},rn.key)})]})}),fn=(0,a.memo)(function(s){var i=s.overlayClassName,o=s.triggers,e=s.options,l=e===void 0?[]:e,c=s.allowSpaces,P=c===void 0?!0:c,H=s.punctuation,rn=H===void 0?en:H,ln=s.preTriggerChars,un=ln===void 0?w:ln,K=s.onSelect,Cn=Xn({}),Dn=Cn.cx,Sn=Cn.styles,zn=(0,F.g)(),wn=$()(zn,1),de=wn[0],Be=Wn(o,{punctuation:rn,preTriggerChars:un,allowSpaces:P}),We=Be.trigger,Se=Be.checkForMentionMatch,Xe=(0,a.useState)(null),Ve=$()(Xe,2),Pe=Ve[0],Ye=Ve[1],Je=Kn(l,Pe),Te=Je.options,Ge=(0,a.useCallback)(function(ee,Le,Qe,Ie){K==null||K(ee,We,Pe),de.update(function(){Le&&ee!==null&&ee!==void 0&&ee.key&&Le.remove(),ee!=null&&ee.onSelect&&ee.onSelect(Ie),Qe()})},[de,K,Pe,We]),fe=(0,a.useCallback)(function(ee){var Le=ee.selectedIndex,Qe=ee.selectOptionAndCleanUp;return(0,M.jsx)(E.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,M.jsx)($n.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Ne,ge){var be=ge.nativeEvent;be.stopPropagation(),de.dispatchCommand(he,{})},onSelect:function(Ne,ge){Qe(ge.node)},titleRender:function(Ne){var ge;return(0,M.jsx)(xn,{isSelected:((ge=Te[Le])===null||ge===void 0?void 0:ge.value)===Ne.value,option:Ne,queryString:Pe,showIcon:!Ne.isChild})},treeData:Te})})},[Te,de,Pe]),Ke=(0,a.useCallback)(function(ee,Le,Qe){var Ie=Le.selectedIndex,Ne=Le.selectOptionAndCleanUp,ge=Le.setHighlightedIndex;return ee.current?Ln.createPortal((0,M.jsx)("div",{className:Dn(Sn.menuOverlay,i),role:"menu",children:Te.some(function(be){return(be.children||[]).length>0})?fe(Le):(0,M.jsx)(mn,{onClick:function(Fe,$e){$e.disabled||(ge(Fe),Ne($e))},onMouseEnter:function(Fe,$e){$e.disabled||ge(Fe)},options:Te,queryString:Pe,selectedIndex:Ie})}),ee.current):null},[Dn,Te,i,Pe,fe,Sn.menuOverlay]);return(0,M.jsx)(kn.HQ,{anchorClassName:Sn.anchor,menuRenderFn:Ke,onQueryChange:Ye,onSelectOption:Ge,options:Te,triggerFn:Se})}),Un=function(i){var o=i.onBlur,e=i.onFocus,l=(0,F.g)(),c=$()(l,1),P=c[0],H=(0,a.useRef)(null);return(0,a.useEffect)(function(){return(0,Y.qV)(P.registerCommand(he,function(){return H.current&&(clearTimeout(H.current),H.current=null),!0},u.VN),P.registerCommand(u.Gq,function(rn,ln){return H.current=setTimeout(function(){P.dispatchCommand(u.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),o&&o(),!0},u.VN),P.registerCommand(u.m$,function(){return e&&e(),!0},u.VN))},[P,o,e]),null},Nn=Un,Hn,Jn,Ce,Oe,Me,xe,ye,Ae,Re=32,ze=22,hn=function(i){return Re+Math.max(i-1,0)*ze},me=(0,Tn.kc)(function(s,i){var o=s.css,e=s.token,l=s.prefixCls,c=i.autoSize;return{wrapper:o(Hn||(Hn=vn()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:o(Jn||(Jn=vn()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Re,e.fontSize,Re,e.colorTextPlaceholder),root:o(Ce||(Ce=vn()([`
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
      `])),e.colorBorder,e.borderRadius,e.colorText,e.fontSize,e.fontFamily,(c==null?void 0:c.minRows)&&o(Oe||(Oe=vn()([`
          min-height: `,`px;
        `])),hn(c.minRows)),(c==null?void 0:c.maxRows)&&o(Me||(Me=vn()([`
          max-height: `,`px;
        `])),hn(c.maxRows)),e.motionDurationMid,e.colorPrimaryBorder,ze),filled:o(xe||(xe=vn()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),e.colorFillTertiary,e.colorFillSecondary,e.colorBgBase),borderless:o(ye||(ye=vn()([`
        background: transparent;
        border: none;
      `]))),disabled:o(Ae||(Ae=vn()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),e.colorTextDisabled,e.colorBgContainerDisabled)}}),ue=function(i){var o=i.className,e=i.classNames,l=i.placeholder,c=i.style,P=i.value,H=i.defaultValue,rn=i.readOnly,ln=rn===void 0?!1:rn,un=i.disabled,K=i.onChange,Cn=i.onBlur,Dn=i.onFocus,Sn=i.variant,zn=Sn===void 0?"outlined":Sn,wn=i.options,de=wn===void 0?[]:wn,Be=i.autoSize,We=i.triggers,Se=We===void 0?["@"]:We,Xe=i.allowSpaces,Ve=i.punctuation,Pe=i.preTriggerChars,Ye=i.onSelect,Je=E.ZP.useConfig(),Te=Je.componentDisabled,Ge=me({autoSize:Be}),fe=Ge.styles,Ke=Ge.cx,ee=un!=null?un:Te,Le=!ln&&!ee,Qe=(0,a.useMemo)(function(){return{namespace:"mentions",nodes:[N,{replace:u.R2,with:function(be){return new N(be.__text)}},pe],editorState:pn(P||H||""),onError:function(be){throw be}}},[]),Ie=function(be){var Fe=be.read(function(){return(0,u.Gv)().getTextContent()});K==null||K(Fe.replaceAll(`

`,`
`))},Ne=(0,a.useMemo)(function(){var ge=function be(Fe,$e){return Fe.reduce(function(He,Ze){if(He[Ze.value]=Ze,He[Ze.value].icon||(He[Ze.value].icon=$e),Ze.children&&Ze.children.length>0){var we=be(Ze.children,Ze.icon);Object.assign(He,we)}return He},{})};return ge(de)},[de]);return B.j?(0,M.jsx)(S.R,{initialConfig:t()(t()({},Qe),{},{editable:Le}),children:(0,M.jsx)(on,{value:{optionsMap:Ne},children:(0,M.jsxs)("div",{className:Ke(fe.wrapper,e==null?void 0:e.wrapper),children:[(0,M.jsx)(d.B,{ErrorBoundary:Z.g,contentEditable:(0,M.jsx)(U.f,{className:Ke(A()(A()(A()(A()({},fe.root,!0),fe.filled,zn==="filled"),fe.borderless,zn==="borderless"),fe.disabled,ee),o),style:c||{}}),placeholder:(0,M.jsx)("div",{className:fe.placeholder,children:l||"\u8F93\u5165 ".concat(Se.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,M.jsx)(fn,{allowSpaces:Xe,onSelect:Ye,options:de,overlayClassName:e==null?void 0:e.menuOverlay,preTriggerChars:Pe,punctuation:Ve,triggers:Se}),(0,M.jsx)(dn,{}),(0,M.jsx)(sn,{}),(0,M.jsx)(r.e,{}),(0,M.jsx)(T.$,{onChange:Ie}),(0,M.jsx)(Nn,{onBlur:Cn,onFocus:Dn})]})})}):(0,M.jsxs)("div",{className:Ke(fe.wrapper,e==null?void 0:e.wrapper),children:[(0,M.jsx)("div",{className:Ke(A()(A()(A()(A()({},fe.root,!0),fe.filled,zn==="filled"),fe.borderless,zn==="borderless"),fe.disabled,ee),o),style:c||{}}),(0,M.jsx)("div",{className:fe.placeholder,children:l||"\u8F93\u5165 ".concat(Se.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(Rn,J,n){n.d(J,{u:function(){return b}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(51697),U=n(75271),Z="yunti-ui",r=n(53649),T=n.n(r),d=n(47512),E,u,a=(0,d.kc)(function(R,p){var L=R.css,j=R.prefixCls,f=p.borderd,O=f===void 0?!0:f,z=p.footer,x=z===null||Array.isArray(z)&&z.length===0,N=L(E||(E=T()([`
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
    `])),j,j,x?0:"40px",j,x?0:"1px");return{custom:L(u||(u=T()([`
        `,`
      `])),O&&N)}},{hashPriority:"low"}),B=n(52676),y=["className","borderd"],C=function(p){var L=p.className,j=p.borderd,f=j===void 0?!0:j,O=A()(p,y),z=a(t()({borderd:f},O)),x=z.styles,N=z.cx;return(0,B.jsx)(S.Z,t()(t()({},O),{},{className:N(x.custom,"".concat(Z,"-modal"),L)}))},b=C;b.useModal=S.Z.useModal,b.destroyAll=S.Z.destroyAll,b.config=S.Z.config,b._InternalPanelDoNotUseOrYouWillBeFired=S.Z._InternalPanelDoNotUseOrYouWillBeFired,b.info=S.Z.info,b.success=S.Z.success,b.error=S.Z.error,b.warning=S.Z.warning,b.warn=S.Z.warn,b.confirm=S.Z.confirm;var h=null},81321:function(Rn,J,n){n.d(J,{ZM:function(){return pe},Hu:function(){return N},Xq:function(){return Ue},rE:function(){return je}});var k=n(26068),t=n.n(k),G=n(48305),A=n.n(G),S=n(67825),U=n.n(S),Z=n(33592),r=n(75271),T=n(94456),d=n(60477),E=n(71170),u=n(32328),a=n(87449),B=n(28485),y=n(90228),C=n.n(y),b=n(87999),h=n.n(b),R=n(97524),p=n(50279),L=n(25298),j=n.n(L),f=n(17069),O=n.n(f),z=n(82092),x=n.n(z),N=function(){function dn(){j()(this,dn),x()(this,"methodMap",void 0),x()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return O()(dn,[{key:"registerMethod",value:function(V,D){this.methodMap[V]=D}},{key:"call",value:function(V){for(var D,gn,bn=arguments.length,pn=new Array(bn>1?bn-1:0),sn=1;sn<bn;sn++)pn[sn-1]=arguments[sn];return(D=(gn=this.methodMap)[V])===null||D===void 0?void 0:D.call.apply(D,[gn].concat(pn))}},{key:"updateMeta",value:function(V){Object.assign(this.meta,V)}},{key:"getMeta",value:function(){return Object.freeze(t()({},this.meta))}}]),dn}(),_="__base_monaco_editor_controller__",Q=B.j&&window;Q&&!Q[_]&&(Q[_]=new N);var X=Q[_],q=function(){var dn,m;return function(){var V=h()(C()().mark(function D(gn){var bn;return C()().wrap(function(sn){for(;;)switch(sn.prev=sn.next){case 0:if(!(!dn||!(0,p.Z)(m,gn))){sn.next=7;break}return bn=Object.keys(gn||{}).length>0,R.Z.config(bn?gn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),sn.next=5,R.Z.init();case 5:dn=sn.sent,m=gn;case 7:return sn.abrupt("return",dn);case 8:case"end":return sn.stop()}},D)}));return function(D){return V.apply(this,arguments)}}()}(),$=function(m){return m?R.Z.config(m):R.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),R.Z.init()};function F(dn){var m=Object.keys(dn||{}).length>0,V=m?dn:void 0;return X.getMeta().singleton?q(V):$(V)}function v(dn){controller.updateMeta(dn)}var I=B.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",W=I==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",an={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},M={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function yn(dn){var m=(0,r.useRef)();return(0,r.useEffect)(function(){m.current=dn},[dn]),m.current}function on(dn,m,V,D){if(D){var gn=dn.editor.getModel(dn.Uri.parse(D));if(gn)return gn}return dn.editor.createModel(m,V,D?dn.Uri.parse(D):void 0)}var En=function(m,V){var D=V.editorDidMount,gn=V.editorWillMount,bn=V.theme,pn=V.value,sn=V.path,kn=V.language,$n=V.saveViewState,Ln=V.defaultValue,Fn=V.enhancers,_n=(0,r.useState)(!1),le=A()(_n,2),Kn=le[0],ne=le[1],jn=(0,r.useState)(!1),se=A()(jn,2),oe=se[0],ae=se[1],Gn=(0,r.useState)(!1),ce=A()(Gn,2),ve=ce[0],ie=ce[1],Xn=(0,r.useRef)(Ln),Yn=(0,r.useRef)(pn),xn=(0,r.useRef)(kn||"text"),mn=(0,r.useRef)(sn),fn=yn(sn),Un=(0,r.useRef)(V.requireConfig),Nn=(0,r.useRef)(V.options),Hn=(0,r.useRef)(),Jn=(0,r.useRef)(),Ce=(0,r.useRef)(),Oe=(0,r.useRef)(m),Me=(0,r.useRef)(),xe=(0,r.useRef)(),ye=(0,r.useRef)(!1),Ae=(0,r.useRef)(new Map),Re=(0,r.useRef)({});(0,r.useEffect)(function(){Re.current.enhancers=Fn},[Fn]),(0,r.useEffect)(function(){Me.current=D},[D]),(0,r.useEffect)(function(){xe.current=gn},[gn]),(0,r.useEffect)(function(){Yn.current=pn},[pn]),(0,r.useEffect)(function(){xn.current=kn},[kn]),(0,r.useEffect)(function(){Xn.current=Ln},[Ln]),(0,r.useEffect)(function(){ie(!0),F(Un.current).then(function(hn){var me;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Hn.current=hn;try{var ue;(ue=xe.current)===null||ue===void 0||ue.call(xe,hn)}catch(H){}if(Ce.current){var s;if(Oe.current==="single"){var i,o,e=on(hn,(i=(o=Yn.current)!==null&&o!==void 0?o:Xn.current)!==null&&i!==void 0?i:"",xn.current,mn.current);s=hn.editor.create(Ce.current,t()(t()({automaticLayout:!0},an),Nn.current)),s.setModel(e)}else{var l=hn.editor.createModel(Yn.current,xn.current),c=hn.editor.createModel(Yn.current,xn.current);s=hn.editor.createDiffEditor(Ce.current,t()(t()({automaticLayout:!0},M),Nn.current)),s.setModel({original:l,modified:c})}Jn.current=s,(me=Re.current.enhancers)===null||me===void 0||me.forEach(function(H){return H(hn,s)});try{var P;(P=Me.current)===null||P===void 0||P.call(Me,hn,s)}catch(H){}ye.current||ne(!0)}}).catch(function(hn){console.error("Monaco Editor Load Error!",hn)}).then(function(){ye.current||ie(!1)})},[]),(0,r.useEffect)(function(){var hn;Kn&&((hn=Hn.current)===null||hn===void 0||hn.editor.setTheme(bn))},[Kn,bn]),(0,r.useEffect)(function(){if(Kn){var hn=m==="diff"?Jn.current.getModifiedEditor():Jn.current;hn==null||hn.onDidFocusEditorText(function(){ye.current||ae(!0)}),hn==null||hn.onDidBlurEditorText(function(){ye.current||ae(!1)})}},[Kn,m]),(0,r.useEffect)(function(){return function(){ye.current=!0}},[]),(0,r.useEffect)(function(){var hn,me,ue;if(Kn&&!(m!=="diff"&&sn)){var s=m==="diff"?Jn.current.getModifiedEditor():Jn.current,i=(hn=pn!=null?pn:Xn.current)!==null&&hn!==void 0?hn:"",o=(me=Hn.current)===null||me===void 0?void 0:me.editor.EditorOption.readOnly;o&&s!==null&&s!==void 0&&(ue=s.getOption)!==null&&ue!==void 0&&ue.call(s,o)?s==null||s.setValue(i):pn!==(s==null?void 0:s.getValue())&&(s==null||s.executeEdits("",[{range:s==null?void 0:s.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),s==null||s.pushUndoStop())}},[Kn,sn,m,pn]),(0,r.useEffect)(function(){var hn,me;if(Kn&&m!=="diff"&&sn!==fn){var ue=on(Hn.current,(hn=Yn.current)!==null&&hn!==void 0?hn:Xn.current,xn.current,sn),s=Jn.current;Yn.current!==null&&Yn.current!==void 0&&ue.getValue()!==Yn.current&&ue.setValue(Yn.current),ue!==((me=Jn.current)===null||me===void 0?void 0:me.getModel())&&($n&&Ae.current.set(fn,s.saveViewState()),s.setModel(ue),$n&&s.restoreViewState(Ae.current.get(sn)))}},[Kn,pn,sn,fn,m,$n]);var ze=Jn;return{isEditorReady:Kn,focused:oe,loading:ve,containerRef:Ce,monacoRef:Hn,editorRef:ze,valueRef:Yn}},g=function(m){var V=(0,r.useState)(!1),D=A()(V,2),gn=D[0],bn=D[1],pn=function(){if(gn){bn(!1),m==null||m.updateOptions(t()(t()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!1}})),m==null||m.layout();return}bn(!0),m==null||m.updateOptions(t()(t()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!0}})),m==null||m.layout()};return{isFullScreen:gn,fullScreen:pn}},Y=n(53649),en=n.n(Y),w=n(47512),nn,In,Mn,On,Bn,Qn,Pn,Zn,Wn,qn,vn,Tn=(0,w.kc)(function(dn,m){var V=dn.css,D=dn.token,gn=dn.prefixCls,bn=m.minimapEnabled,pn=bn===void 0?!1:bn,sn=m.isFullScreen,kn=sn===void 0?!1:sn,$n=m.diff,Ln=$n===void 0?!1:$n,Fn=m.variant,_n=Fn===void 0?"outlined":Fn,le=(0,w.F4)(nn||(nn=en()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),Kn=function(){switch(_n){case"outlined":return D.colorBgBase;case"filled":return D.colorFillTertiary;default:return"transparent"}};return{base:V(In||(In=en()([`
        position: relative;

        box-sizing: content-box;
        min-height: 100px;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
        &:hover {
          border-color: `,`;
          `,`
        }

        &.ve-focused {
          `,`
          `,`
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

          .monaco-editor,
          .monaco-editor-background,
          .monaco-editor .inputarea.ime-input,
          .monaco-editor .margin {
            `,`
          }

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

        .syntaxTips {
          position: absolute;
          bottom: 0;
          left: 0;

          box-sizing: border-box;
          width: 100%;
          max-height: 0;
          margin: 0;
          padding: 10px 30px;

          color: `,`;

          background: `,`;

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
      `])),Kn(),_n==="outlined"?D.colorBorder:"transparent",D.borderRadius,_n==="outlined"?D.colorPrimaryHover:"transparent",_n==="filled"&&V(Mn||(Mn=en()([`
            background-color: `,`;
          `])),D.colorFillSecondary),_n==="filled"&&V(On||(On=en()([`
            background-color: `,`;
          `])),D.colorBgBase),_n!=="borderless"&&V(Bn||(Bn=en()([`
            border-color: `,`;
          `])),D.colorPrimaryActive),kn&&V(Qn||(Qn=en()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!kn&&V(Pn||(Pn=en()([`
              background-color: transparent;
            `]))),D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius-1,D.borderRadius-1,D.colorErrorText,D.colorErrorBg),fullScreenBtn:V(Zn||(Zn=en()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),gn,D.colorTextSecondary,kn?V(Wn||(Wn=en()([`
                z-index: 9999;
                right: `,`px;
              `])),Ln?64:138):V(qn||(qn=en()([`
                right: `,`px;
              `])),pn||Ln?64:20)),loading:V(vn||(vn=en()([`
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
          width: 16px;
          /* display: inline; */
          animation: `,` steps(3) 1s infinite;
        }
      `])),D.fontSizeSM,D.colorTextTertiary,le)}},{hashPriority:"low"}),cn=n(52676);function An(){}var te=function(m){var V,D=m.onChange,gn=m.enableOutline,bn=m.width,pn=m.height,sn=m.language,kn=m.supportFullScreen,$n=(0,r.useRef)(D),Ln=En("single",m),Fn=Ln.isEditorReady,_n=Ln.focused,le=Ln.loading,Kn=Ln.containerRef,ne=Ln.monacoRef,jn=Ln.editorRef,se=Ln.valueRef,oe=(0,r.useRef)(),ae=g(jn==null?void 0:jn.current),Gn=ae.isFullScreen,ce=ae.fullScreen,ve=Tn({isFullScreen:Gn,minimapEnabled:(V=m.options)===null||V===void 0||(V=V.minimap)===null||V===void 0?void 0:V.enabled,variant:m.variant}),ie=ve.cx,Xn=ve.styles,Yn=ie(Xn.base,m.className,{"ve-focused":_n,"ve-outline":gn}),xn=(0,r.useMemo)(function(){return{width:bn,height:pn}},[bn,pn]);return(0,r.useEffect)(function(){$n.current=D},[D]),(0,r.useEffect)(function(){if(Fn){var mn,fn=jn.current;(mn=oe.current)===null||mn===void 0||mn.dispose(),oe.current=fn==null?void 0:fn.onDidChangeModelContent(function(Un){var Nn,Hn=fn==null||(Nn=fn.getModel())===null||Nn===void 0?void 0:Nn.getValue();if(se.current!==Hn){var Jn;(Jn=$n.current)===null||Jn===void 0||Jn.call($n,Hn,Un)}})}},[jn,Fn,oe,se]),(0,r.useEffect)(function(){return function(){var mn,fn,Un,Nn=jn.current;(mn=oe.current)===null||mn===void 0||mn.dispose(),Nn==null||(fn=Nn.getModel())===null||fn===void 0||fn.dispose(),(Un=jn.current)===null||Un===void 0||Un.dispose()}},[jn]),(0,r.useEffect)(function(){var mn;if(Fn){var fn=(mn=jn.current)===null||mn===void 0?void 0:mn.getModel();if(fn){var Un;(Un=ne.current)===null||Un===void 0||Un.editor.setModelLanguage(fn,sn)}}},[jn,Fn,sn,ne]),(0,cn.jsxs)("div",{className:Yn,style:m.style,children:[le&&(0,cn.jsx)("span",{className:ie(Xn.loading,"loading"),children:W}),(0,cn.jsx)("div",{className:"react-monaco-editor-container",ref:Kn,style:xn,children:kn&&(0,cn.jsx)(E.ZP,{className:Xn.fullScreenBtn,icon:(0,cn.jsx)(d.Z,{icon:Gn?u.Z:a.Z}),onClick:ce,size:"small",type:"text"})})]})},re=function(m){var V=m.enableOutline,D=m.width,gn=m.height,bn=m.language,pn=m.onChange,sn=m.original,kn=m.supportFullScreen,$n=(0,r.useRef)(pn),Ln=En("diff",m),Fn=Ln.isEditorReady,_n=Ln.focused,le=Ln.loading,Kn=Ln.containerRef,ne=Ln.monacoRef,jn=Ln.editorRef,se=Ln.valueRef,oe=g(),ae=oe.isFullScreen,Gn=oe.fullScreen,ce=Tn({isFullScreen:ae,diff:!0,variant:m.variant}),ve=ce.cx,ie=ce.styles,Xn=ve(ie.base,m.className,{"ve-focused":_n,"ve-outline":V}),Yn=(0,r.useMemo)(function(){return{width:D,height:gn}},[D,gn]);return(0,r.useEffect)(function(){$n.current=pn},[pn]),(0,r.useEffect)(function(){var xn;if(Fn){(xn=jn.current.getModel())===null||xn===void 0||xn.original.setValue(sn!=null?sn:"");var mn=jn.current.getModel()||{},fn=mn.modified;fn==null||fn.onDidChangeContent(function(Un){var Nn=fn.getValue();if(se.current!==Nn){var Hn;(Hn=$n.current)===null||Hn===void 0||Hn.call($n,Nn,Un)}})}},[jn,Fn,sn,se]),(0,r.useEffect)(function(){return function(){var xn,mn,fn;(xn=jn.current)===null||xn===void 0||(xn=xn.getModel())===null||xn===void 0||(xn=xn.original)===null||xn===void 0||xn.dispose(),(mn=jn.current)===null||mn===void 0||(mn=mn.getModel())===null||mn===void 0||(mn=mn.modified)===null||mn===void 0||mn.dispose(),(fn=jn.current)===null||fn===void 0||fn.dispose()}},[jn]),(0,r.useEffect)(function(){var xn,mn,fn;if(Fn){var Un=((xn=jn.current)===null||xn===void 0?void 0:xn.getModel())||{},Nn=Un.original,Hn=Un.modified;(mn=ne.current)===null||mn===void 0||mn.editor.setModelLanguage(Nn,bn),(fn=ne.current)===null||fn===void 0||fn.editor.setModelLanguage(Hn,bn)}},[jn,Fn,bn,ne]),(0,cn.jsxs)("div",{className:Xn,style:m.style,children:[le&&(0,cn.jsx)("span",{className:ve(ie.loading,"loading"),children:W}),(0,cn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Kn,style:Yn,children:kn&&(0,cn.jsx)(E.ZP,{className:ie.fullScreenBtn,icon:(0,cn.jsx)(d.Z,{icon:ae?u.Z:a.Z}),onClick:Gn,size:"small",type:"text"})})]})},tn=Object.assign(re,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:an,editorDidMount:An,editorWillMount:An,onChange:An,requireConfig:{}}}),Vn=Object.assign(te,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:an,editorDidMount:An,editorWillMount:An,onChange:An,requireConfig:{}},MonacoDiffEditor:tn}),he=null,Ee=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],De=["inlineView","options"],pe=function(m){var V=m.type,D=V===void 0?"single":V,gn=m.editorDidMount,bn=m.readOnly,pn=bn===void 0?!1:bn,sn=m.lineNumbers,kn=sn===void 0?"on":sn,$n=m.wordWrap,Ln=$n===void 0?"off":$n,Fn=m.contextmenu,_n=Fn===void 0?!0:Fn,le=m.theme,Kn=m.minimapEnabled,ne=Kn===void 0?!1:Kn,jn=m.version,se=jn===void 0?"0.45.0":jn,oe=m.requireConfig,ae=oe===void 0?{}:oe,Gn=m.options,ce=m.className,ve=m.supportFullScreen,ie=U()(m,Ee),Xn=(0,r.useRef)(gn);(0,r.useEffect)(function(){Xn.current=gn},[gn]);var Yn=(0,Z.r)(),xn=Yn.isDarkMode,mn=(0,r.useMemo)(function(){return le||(xn?"vs-dark":"vs")},[xn,le]),fn=(0,r.useState)(),Un=A()(fn,2),Nn=Un[0],Hn=Un[1],Jn=(0,r.useCallback)(function(xe,ye){var Ae;Hn(ye),(Ae=Xn.current)===null||Ae===void 0||Ae.call(Xn,xe,ye)},[]),Ce=(0,r.useMemo)(function(){var xe=Object.assign({},Gn,{readOnly:pn,lineNumbers:kn,wordWrap:Ln,contextmenu:_n,minimap:ne===void 0?Gn==null?void 0:Gn.minimap:Object.assign({},Gn==null?void 0:Gn.minimap,{enabled:ne})});return Nn==null||Nn.updateOptions(xe),xe},[Gn,pn,kn,Ln,_n,ne,Nn]),Oe=(0,T.nc)(),Me=(0,r.useMemo)(function(){return Object.assign({},ae,{paths:t()({vs:Oe({path:"min/vs",pkg:"monaco-editor",version:se})},ae.paths)})},[Oe,ae,se]);return D!=="diff"?(0,cn.jsx)(Vn,t()({className:ce,editorDidMount:Jn,options:Ce,requireConfig:Me,supportFullScreen:Nn&&ve,theme:mn},ie)):(0,cn.jsx)(Vn.MonacoDiffEditor,t()({className:ce,editorDidMount:Jn,options:Ce,requireConfig:Me,supportFullScreen:Nn&&ve,theme:mn},ie))},je=function(m){return(0,cn.jsx)(pe,t()(t()({},m),{},{type:"single"}))},Ue=function(m){var V=m.inlineView,D=V===void 0?"off":V,gn=m.options,bn=U()(m,De);return(0,cn.jsx)(pe,t()(t()({options:Object.assign({useInlineViewWhenSpaceIsLimited:D==="on"||D==="auto",renderSideBySide:D==="off"||D==="auto"},gn)},bn),{},{type:"diff"}))}},64521:function(Rn,J,n){n.d(J,{Y:function(){return b}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(20219),U=n(75271),Z=n(53649),r=n.n(Z),T=n(47512),d,E,u,a,B=(0,T.kc)(function(p,L){var j=p.css,f=p.token,O=p.prefixCls,z=L.size,x=L.segmented,N=function(){return x?x!==!0?x.gap:!0:0}(),_=function(){if(x)return x!==!0?x.borderRadius:!0}(),Q=function(){var I={small:f.sizeSM,middle:f.size,large:f.sizeLG};return typeof N=="string"?I[N]:N===!0?z?I[z]:I.middle:N||0},X=function(){var I={small:f.controlHeightSM,middle:f.controlHeight,large:f.controlHeightLG};if(_===!0)return z?I[z]:I.middle;if(_||_===0)return _},q=X()&&j(d||(d=r()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),X()),$=j(E||(E=r()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),Q()),F=x===!0||x&&!x.bordered;return{custom:j(u||(u=r()([`
        `,`
        `,`
        `,`
      `])),q,$,F&&j(a||(a=r()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),O,O,f.colorPrimary))}},{hashPriority:"low"}),y=n(52676),C=["className"],b=S.ZP,h=function(L){var j=L.className,f=A()(L,C);f.segmented&&(f.optionType="button");var O=B(f),z=O.styles,x=O.cx;return(0,y.jsx)(S.ZP.Group,t()(t()({},f),{},{className:x(z.custom,j)}))};b.Group=h;var R=null},25777:function(Rn,J,n){n.d(J,{W:function(){return X}});var k=n(26068),t=n.n(k),G=n(15558),A=n.n(G),S=n(48305),U=n.n(S),Z=n(67825),r=n.n(Z),T=n(60477),d=n(83293),E=n(44923),u=n(46847),a=n(82338),B=n(2405),y=n(75271),C=n(53649),b=n.n(C),h=n(47512),R,p,L,j,f,O=function($){switch($){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},z=(0,h.kc)(function(q,$){var F=q.css,v=q.token,I=q.prefixCls,W=$.disabled,an=$.size,M=O(an),yn=M.cardWidth;return{option:F(R||(R=b()([`
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
      `])),v.colorBorder,v.borderRadius,W?"not-allowed":"pointer",v.padding,v.motionDurationFast,yn,W&&F(p||(p=b()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),v.colorBgContainerDisabled,I,v.colorTextDisabled,I,v.colorTextDisabled),!W&&F(L||(L=b()([`
          &:hover {
            border-color: `,`;
          }
        `])),v.colorPrimaryBorderHover),I),optionSelected:F(j||(j=b()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),v.colorPrimary,v.colorPrimaryActive),check:F(f||(f=b()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),v.marginXS,v.marginXS,v.colorPrimary)}}),x=n(52676),N=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],_=d.Z.Text,Q=d.Z.Paragraph,X=y.forwardRef(function(q,$){var F=q.defaultValue,v=q.value,I=q.onChange,W=q.multiple,an=W===void 0?!1:W,M=q.disabled,yn=M===void 0?!1:M,on=q.options,En=on===void 0?[]:on,g=q.classNames,Y=q.styles,en=q.size,w=en===void 0?"middle":en,nn=q.optionRender,In=r()(q,N),Mn=(0,y.useMemo)(function(){return En.some(function(tn){return!!tn.img||!!tn.icon})},[En]),On=z({disabled:yn,size:w}),Bn=On.cx,Qn=On.styles,Pn=(0,y.useMemo)(function(){return O(w)},[w]),Zn=Pn.imgHeight,Wn=(0,y.useCallback)(function(tn){return!an||Array.isArray(tn)?tn:tn===void 0?[]:[tn]},[an]),qn=(0,B.C8)(Wn(F),{defaultValue:Wn(F),value:v,onChange:I}),vn=U()(qn,2),Tn=vn[0],cn=vn[1],An=(0,y.useCallback)(function(tn){if(!yn){if(!an){cn(tn);return}if(Tn.includes(tn)){cn(Tn.filter(function(Vn){return Vn!==tn}));return}cn([].concat(A()(Tn),[tn]))}},[Tn,yn,an,cn]),te=(0,y.useCallback)(function(tn){return an?Tn.includes(tn):Tn===tn},[Tn,an]),re=(0,y.useCallback)(function(tn,Vn){var he=te(tn.value),Ee=(0,x.jsxs)(E.Z,{align:Mn?"center":"flex-start",className:Bn(Qn.option,he&&Qn.optionSelected,g==null?void 0:g.card),gap:"small",onClick:function(){return An(tn.value)},style:t()(t()({},Y==null?void 0:Y.card),tn.style),vertical:!0,children:[Mn&&(0,x.jsx)(u.C,{className:g==null?void 0:g.icon,icon:tn.icon,shape:"square",size:Zn,src:tn.img,style:t()(t()({},Y==null?void 0:Y.icon),tn.iconStyle)}),tn.label&&he&&(0,x.jsx)(_,{ellipsis:!0,strong:!0,children:tn.label}),tn.label&&!he&&(0,x.jsx)(_,{ellipsis:!0,children:tn.label}),!Mn&&tn.description&&(0,x.jsx)(Q,{ellipsis:{rows:2},type:"secondary",children:tn.description}),he&&(0,x.jsx)(T.Z,{className:Qn.check,icon:a.Z})]},tn.value);return nn?nn(Ee,tn,Vn):Ee},[g==null?void 0:g.card,g==null?void 0:g.icon,Bn,Zn,Mn,te,An,nn,Qn.check,Qn.option,Qn.optionSelected,Y==null?void 0:Y.card,Y==null?void 0:Y.icon]);return(0,x.jsx)(E.Z,t()(t()({gap:"large",ref:$,wrap:!0},In),{},{children:En.map(function(tn,Vn){return re(tn,Vn)})}))})},66269:function(Rn,J,n){n.d(J,{a:function(){return E}});var k=n(26068),t=n.n(k),G=n(48305),A=n.n(G),S=n(26582),U=n(68526),Z=n(27896),r=n(96965),T=n(75271),d=n(52676),E=function(a){var B=a.value,y=a.defaultValue,C=a.min,b=C===void 0?0:C,h=a.max,R=a.step,p=a.gutter,L=p===void 0?16:p,j=a.sliderCol,f=j===void 0?{span:12}:j,O=a.inputCol,z=O===void 0?{span:5}:O,x=a.addonAfter,N=a.addonBefore,_=a.placeholder,Q=a.onChange,X=a.style,q=a.className,$=a.sliderProps,F=$===void 0?{}:$,v=a.inputProps,I=v===void 0?{}:v,W=(0,T.useState)(),an=A()(W,2),M=an[0],yn=an[1],on=function(g){Number.isNaN(g)||(yn(g),Q==null||Q(g))};return(0,d.jsxs)(S.Z,{className:q,gutter:L,style:X,children:[(0,d.jsx)(U.Z,t()(t()({},f),{},{children:(0,d.jsx)(Z.Z,t()(t()({},F),{},{defaultValue:y,max:h,min:b,onChange:on,step:R,value:B!=null?B:M}))})),(0,d.jsx)(U.Z,t()(t()({},z),{},{children:(0,d.jsx)(r.Z,t()(t()({},I),{},{addonAfter:x,addonBefore:N,defaultValue:y,max:h,min:b,onChange:on,placeholder:_,step:R,value:B!=null?B:M}))}))]})}},56482:function(Rn,J,n){n.d(J,{N:function(){return y}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(97912),U=n(75271),Z=n(79213),r=n(53649),T=n.n(r),d=n(47512),E,u=(0,d.kc)(function(C){var b=C.css,h=C.token,R=C.prefixCls;return{table:b(E||(E=T()([`
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
    `])),R,h.colorTextTertiary)}}),a=n(52676),B=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],y=function(b){var h=b.rootStyle,R=b.rootClassName,p=b.icon,L=b.title,j=b.variant,f=b.defaultActive,O=b.extra,z=b.className,x=A()(b,B),N=u(),_=N.cx,Q=N.styles;return(0,a.jsx)(Z.w,{className:R,style:h,icon:p,title:L,variant:j,defaultActive:f,extra:O,children:(0,a.jsx)(S.Z,t()({className:_(Q.table,z),pagination:!1,rowHoverable:!1,size:"small"},x))})}},11546:function(Rn,J,n){n.d(J,{NU:function(){return r.N},iA:function(){return E}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(56995),U=n(97912),Z=n(75271),r=n(56482),T=n(52676),d=["columns"],E=function(B){var y=B.columns,C=A()(B,d),b=(0,Z.useMemo)(function(){return y==null?void 0:y.map(function(h){if(h.render)return h;if(h.ellipsis&&h.ellipsis!==!0&&h.ellipsis.showTitle||h.ellipsis===!0){var R=h.ellipsis===!0?{}:h.ellipsis;return t()(t()({},h),{},{ellipsis:{showTitle:!1},render:function(L){return L||L===0?(0,T.jsx)(S.Z,t()(t()({},R),{},{placement:"topLeft",title:L,children:L})):"-"}})}return h.render||(h.render=function(p){return p!=null?p:"-"}),h})},[y]);return(0,T.jsx)(U.Z,t()(t()({},C),{},{columns:b}))};E.displayName="Table",E.SELECTION_COLUMN=U.Z.SELECTION_COLUMN,E.EXPAND_COLUMN=U.Z.EXPAND_COLUMN,E.SELECTION_ALL=U.Z.SELECTION_ALL,E.SELECTION_INVERT=U.Z.SELECTION_INVERT,E.SELECTION_NONE=U.Z.SELECTION_NONE,E.Column=U.Z.Column,E.ColumnGroup=U.Z.ColumnGroup,E.Summary=U.Z.Summary,E.Collapse=r.N;var u=null},8559:function(Rn,J,n){n.d(J,{G:function(){return y}});var k=n(53649),t=n.n(k),G=n(47512),A=n(75271),S=n(52676),U,Z,r,T,d,E,u,a,B=(0,G.kc)(function(C,b){var h=C.css,R=(0,G.F4)(U||(U=t()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),p=(0,G.F4)(Z||(Z=t()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),L=(0,G.F4)(r||(r=t()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:h(T||(T=t()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),b.width||34,b.height||22,b.bgColor||"transparent"),line:h(d||(d=t()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),b.lineColor||"#000"),animate1:h(E||(E=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),R),animate2:h(u||(u=t()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),p),animate3:h(a||(a=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),L)}}),y=function(b){var h=b.height,R=b.width,p=b.lineColor,L=b.bgColor,j=B({height:h,width:R,lineColor:p,bgColor:L}),f=j.styles,O=j.cx;return(0,S.jsxs)("div",{className:f.box,children:[(0,S.jsx)("div",{className:O(f.line,f.animate1)}),(0,S.jsx)("div",{className:O(f.line,f.animate2)}),(0,S.jsx)("div",{className:O(f.line,f.animate3)}),(0,S.jsx)("div",{className:O(f.line,f.animate2)}),(0,S.jsx)("div",{className:O(f.line,f.animate1)}),(0,S.jsx)("div",{className:O(f.line,f.animate2)}),(0,S.jsx)("div",{className:O(f.line,f.animate1)})]})}},71983:function(Rn,J,n){n.r(J),n.d(J,{Affix:function(){return In.Z},Alert:function(){return B.b},Anchor:function(){return Mn.Z},AntdMentions:function(){return On.Z},App:function(){return y.g},AudioPlayer:function(){return Ae.Z},AutoComplete:function(){return Bn.Z},Avatar:function(){return Qn.C},BackTop:function(){return Pn.Z},Badge:function(){return Zn.Z},BaseMonacoEditor:function(){return r.ZM},Breadcrumb:function(){return C.Z},Button:function(){return Wn.ZP},ButtonGroup:function(){return k.h},Calendar:function(){return qn.Z},Card:function(){return b.Z},Carousel:function(){return vn.Z},Cascader:function(){return Tn.Z},ChatInputActionBar:function(){return X.Z},ChatInputArea:function(){return Q.Z},ChatInputAreaInner:function(){return q.Z},ChatItem:function(){return I.z},ChatSendButton:function(){return $.Z},Checkbox:function(){return cn.Z},Col:function(){return An.Z},Collapse:function(){return te.Z},CollapseGroup:function(){return t.w},CollapseTable:function(){return N.NU},ColorPicker:function(){return re.Z},ConfigContext:function(){return G.E_},ConfigProvider:function(){return G.iV},CopyButton:function(){return Oe.Z},DatePicker:function(){return tn.default},Descriptions:function(){return h.w},Divider:function(){return R.i},DragPanel:function(){return A.U},Drawer:function(){return p.d},Dropdown:function(){return L.L},EditableMessage:function(){return W.i},Empty:function(){return Vn.Z},Flex:function(){return he.Z},FloatButton:function(){return Ee.Z},Form:function(){return j.l},FormCollapseList:function(){return j.E},FormHelper:function(){return f.wK},FullFeaturedHighlighter:function(){return an.EL},Grid:function(){return De.ZP},Highlighter:function(){return an.oP},Image:function(){return pe.Z},Input:function(){return je.Z},InputNumber:function(){return Ue.Z},Layout:function(){return dn.Z},List:function(){return m.Z},LogViewer:function(){return U.n},Logo:function(){return S.T},Markdown:function(){return Me.Z},Mentions:function(){return Z.o},Menu:function(){return V.Z},MobileChatInputArea:function(){return F.Z},MobileChatSendButton:function(){return v.Z},Modal:function(){return O.u},MonacoController:function(){return r.Hu},MonacoDiffEditor:function(){return r.Xq},MonacoEditor:function(){return r.rE},NotificationGlobalStyle:function(){return z.EZ},Page:function(){return T.T},Pagination:function(){return gn.Z},Popconfirm:function(){return bn.Z},Popover:function(){return pn.Z},ProCard:function(){return d.Q},Progress:function(){return sn.Z},QRCode:function(){return kn.Z},Radio:function(){return x.Y},Rate:function(){return $n.Z},Result:function(){return Ln.ZP},Row:function(){return Fn.Z},Segmented:function(){return _n.Z},Select:function(){return le.default},SelectCard:function(){return E.W},Skeleton:function(){return Kn.Z},Slider:function(){return ne.Z},SliderInput:function(){return u.a},Space:function(){return jn.Z},SpeechSynthesisTTS:function(){return ye.H},Spin:function(){return se.Z},Statistic:function(){return oe.Z},Status:function(){return a.q},Steps:function(){return ae.Z},Switch:function(){return Gn.Z},SyntaxHighlighter:function(){return xe.Z},Table:function(){return N.iA},Tabs:function(){return ce.Z},Tag:function(){return ve.Z},TimePicker:function(){return Yn.Z},Timeline:function(){return Xn.Z},Tooltip:function(){return xn.Z},Tour:function(){return mn.Z},Transfer:function(){return fn.Z},Tree:function(){return Un.Z},TreeSelect:function(){return Nn.Z},Typography:function(){return _.Z},Upload:function(){return Hn.Z},Watermark:function(){return Ce.Z},WaveformIcon:function(){return nn.G},colorScales:function(){return M._},colors:function(){return M._},generateColorNeutralPalette:function(){return Y},generateColorPalette:function(){return g},message:function(){return D.ZP},neutralColorScales:function(){return en},notification:function(){return z.t6},theme:function(){return ie.Z},useAudioPlayer:function(){return Re.x},useAutoFocus:function(){return f.wL},useCdnFn:function(){return G.nc},useLink:function(){return G.nB},useResponsive:function(){return hn.F},useSpeechRecognition:function(){return ze.x},useSpeechSynthes:function(){return w.J},useTheme:function(){return me.Fg},useThemeMode:function(){return ue.r},version:function(){return Jn.Z},withFormHelper:function(){return f.MX}});var k=n(12644),t=n(79213),G=n(94456),A=n(13306),S=n(52625),U=n(25969),Z=n(48355),r=n(81321),T=n(40305),d=n(86346),E=n(25777),u=n(66269),a=n(46119),B=n(58479),y=n(5244),C=n(77789),b=n(39824),h=n(26345),R=n(82227),p=n(5795),L=n(99512),j=n(62719),f=n(20147),O=n(97527),z=n(40130),x=n(64521),N=n(11546),_=n(94729),Q=n(52412),X=n(65059),q=n(51874),$=n(62999),F=n(82367),v=n(65677),I=n(92436),W=n(99335),an=n(17853),M=n(15094),yn=n(82092),on=n.n(yn),En=n(98644),g=function(i){var o=i.type,e=i.scale,l=i.appearance,c=(0,En.Z)(o),P=l==="dark";return on()(on()(on()(on()(on()(on()(on()(on()(on()(on()({},"color".concat(c,"Bg"),e[l][1]),"color".concat(c,"BgHover"),e[l][2]),"color".concat(c,"Border"),e[l][4]),"color".concat(c,"BorderHover"),e[l][P?5:3]),"color".concat(c,"Hover"),e[l][P?10:8]),"color".concat(c),e[l][9]),"color".concat(c,"Active"),e[l][P?7:10]),"color".concat(c,"TextHover"),e[l][P?10:8]),"color".concat(c,"Text"),e[l][9]),"color".concat(c,"TextActive"),e[l][P?7:10])},Y=function(i){var o=i.scale,e=i.appearance;return{colorBgContainer:e==="dark"?o[e][1]:o[e][0],colorBgElevated:e==="dark"?o[e][2]:o[e][0],colorBgLayout:e==="dark"?o[e][0]:o[e][1],colorBgMask:o.lightA[8],colorBgSpotlight:o[e][5],colorBorder:o[e][4],colorBorderSecondary:o[e][3],colorFill:o["".concat(e,"A")][3],colorFillQuaternary:o["".concat(e,"A")][0],colorFillSecondary:o["".concat(e,"A")][2],colorFillTertiary:o["".concat(e,"A")][1],colorText:o[e][12],colorTextQuaternary:o[e][6],colorTextSecondary:o[e][10],colorTextTertiary:o[e][8]}},en={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},w=n(82846),nn=n(8559),In=n(7904),Mn=n(58190),On=n(46621),Bn=n(85958),Qn=n(46847),Pn=n(66075),Zn=n(1088),Wn=n(71170),qn=n(3957),vn=n(57512),Tn=n(52279),cn=n(43584),An=n(68526),te=n(90026),re=n(64479),tn=n(1409),Vn=n(78962),he=n(44923),Ee=n(6697),De=n(82366),pe=n(69414),je=n(99707),Ue=n(96965),dn=n(93702),m=n(78104),V=n(74032),D=n(57939),gn=n(4211),bn=n(45590),pn=n(31997),sn=n(35357),kn=n(82830),$n=n(76177),Ln=n(46504),Fn=n(26582),_n=n(13927),le=n(35092),Kn=n(99021),ne=n(27896),jn=n(43356),se=n(49553),oe=n(43954),ae=n(59470),Gn=n(74798),ce=n(60756),ve=n(53453),ie=n(22972),Xn=n(46141),Yn=n(20907),xn=n(56995),mn=n(33858),fn=n(96208),Un=n(64287),Nn=n(6036),Hn=n(72023),Jn=n(38208),Ce=n(55366),Oe=n(81107),Me=n(85814),xe=n(74974),ye=n(49724),Ae=n(83595),Re=n(61984),ze=n(8281),hn=n(81134),me=n(47512),ue=n(33592)},40130:function(Rn,J,n){n.d(J,{EZ:function(){return b.E},t6:function(){return q}});var k=n(26068),t=n.n(k),G=n(67825),A=n.n(G),S=n(48305),U=n.n(S),Z=n(335),r=n.n(Z),T=n(30657),d=n(19728),E=n(22620),u=n(90026),a=n(83293),B=n(98943),y=n(75271),C=n(52676),b=n(55300),h=["detail","message","description","onClose","className"],R=u.Z.Panel,p=a.Z.Link,L=a.Z.Paragraph,j=a.Z.Text,f={},O=function(v,I){f[v]||(f[v]=[]),f[v].push(I)},z=function(v){delete f[v]},x=function F(v){var I="";if(typeof v=="string")I=v;else if(typeof v=="number")I=v.toString();else if(Array.isArray(v)){var W=r()(v),an;try{for(W.s();!(an=W.n()).done;){var M=an.value;I+=F(M)}}catch(yn){W.e(yn)}finally{W.f()}}else(0,y.isValidElement)(v)&&(I+=F(v.props.children));return I},N=function(v){var I,W=v.noticeKey,an=v.message,M=((I=f[W])===null||I===void 0?void 0:I.length)||0;return(0,C.jsxs)(C.Fragment,{children:[an,M>1&&" (".concat(M,")")]})},_=function(v){var I=v.noticeKey,W=(0,y.useState)(),an=U()(W,2),M=an[0],yn=an[1],on={},En=r()(f[I]),g;try{for(En.s();!(g=En.n()).done;){var Y=g.value,en=x(Y.description);Y.descKey=en,on[en]=Y}}catch(w){En.e(w)}finally{En.f()}return(0,C.jsx)(u.Z,{accordion:!0,activeKey:M,className:"yunti-notification-collapse",expandIcon:function(nn){var In=nn.isActive;return(0,C.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:In?(0,C.jsx)(p,{className:"yunti-notification-link",children:(0,C.jsx)(T.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,C.jsx)(d.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(nn){yn(nn)},children:Object.values(on).map(function(w){var nn=w.descKey,In=w.description,Mn=w.detail;return(0,C.jsx)(R,{header:(0,C.jsx)(j,{ellipsis:{tooltip:!1},style:{width:250},children:In}),children:(0,C.jsx)(L,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(Mn,null,2)},type:"secondary",children:(0,C.jsx)("pre",{children:JSON.stringify(Mn,null,2)})})},nn)})})},Q=function(v){var I=v.detail,W=v.message,an=v.description,M=v.onClose,yn=v.className,on=A()(v,h),En=x(W);O(En,v);var g=function(){M==null||M(),z(En)};return v.type==="warning"&&!v.icon&&(on.icon=(0,C.jsx)(E.Z,{style:{color:"#ff7d00"}})),I?B.ZP.open(t()({key:En,message:(0,C.jsx)(N,{message:W,noticeKey:En}),description:(0,C.jsx)(_,{noticeKey:En}),onClose:g,className:"yunti-notification ".concat(yn)},on)):B.ZP.open(t()({key:En,message:(0,C.jsx)(N,{message:W,noticeKey:En}),description:an,onClose:g,className:"yunti-notification ".concat(yn)},on))},X=function(v){var I;if(((v==null||(I=v.errors)===null||I===void 0?void 0:I.length)||0)>0){v!=null&&v.errors;var W=r()((v==null?void 0:v.errors)||[]),an;try{for(W.s();!(an=W.n()).done;){var M=an.value;Q(t()(t()({detail:M,description:M.message},v),{},{type:"warning"}))}}catch(yn){W.e(yn)}finally{W.f()}}else Q(t()(t()({},v),{},{type:"warning"}))},q=t()(t()({},B.ZP),{},{success:function(v){return Q(t()(t()({},v),{},{type:"success"}))},info:function(v){return Q(t()(t()({},v),{},{type:"info"}))},warning:function(v){return Q(t()(t()({},v),{},{type:"warning"}))},warn:function(v){return Q(t()(t()({},v),{},{type:"warning"}))},error:function(v){return Q(t()(t()({},v),{},{type:"error"}))},warnings:X,warns:X}),$=null},55300:function(Rn,J,n){n.d(J,{E:function(){return U}});var k=n(53649),t=n.n(k),G=n(98943),A=n(47512),S,U=(0,A.vJ)(S||(S=t()([`
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
`])),function(Z){var r=Z.theme;return"".concat(r==null?void 0:r.colorPrimary," !important")},function(Z){var r=Z.theme;return"".concat(r==null?void 0:r.colorPrimaryHover," !important")},function(Z){var r=Z.theme;return r==null?void 0:r.colorPrimary},function(Z){var r=Z.theme;return"".concat(r==null?void 0:r.colorPrimary," !important")},function(Z){var r=Z.theme;return"".concat(r==null?void 0:r.colorPrimaryHover," !important")},function(Z){var r=Z.theme,T=r||{},d=T.prefixCls;return G.ZP.config({prefixCls:d}),`
      .`.concat(d,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(d,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(Rn,J,n){n.d(J,{j:function(){return k}});var k=typeof window!="undefined"}}]);
