"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(In,Y,n){n.d(Y,{b:function(){return I}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(21153),W=n(75271),B=n(53649),t=n.n(B),O=n(47512),s,a=(0,O.kc)(function(f,b){var E=f.css,D=b.bordered,C=D===void 0?"dashed":D;return{custom:E(s||(s=t()([`
        border-style: `,` !important;
      `])),C)}},{hashPriority:"low"}),i=n(52676),m=["bordered","className"],I=function(b){var E=b.bordered,D=E===void 0?"dashed":E,C=b.className,L=j()(b,m),P=a({bordered:D}),g=P.styles,M=P.cx;return(0,i.jsx)(S.Z,e()(e()({},L),{},{className:M(g.custom,C)}))};I.ErrorBoundary=S.Z.ErrorBoundary;var R=null},5244:function(In,Y,n){n.d(Y,{g:function(){return s}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(23878),W=n(75271),B=n(55300),t=n(52676),O=["children"],s=function(m){var I=m.children,R=j()(m,O);return(0,t.jsxs)(S.Z,e()(e()({},R),{},{children:[(0,t.jsx)(B.E,{}),I]}))};s.useApp=S.Z.useApp;var a=null},52412:function(In,Y,n){var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(53649),W=n.n(S),B=n(16853),t=n(9130),O=n(47512),s=n(75271),a=n(52676),i=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],m,I,R,f=(0,O.kc)(function(E){var D=E.css;return{container:D(m||(m=W()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:D(I||(I=W()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:D(R||(R=W()([`
      position: relative;
      flex: 1;
    `])))}}),b=(0,s.forwardRef)(function(E,D){var C=E.className,L=E.style,P=E.classNames,g=E.expand,M=g===void 0?!0:g,F=E.setExpand,A=E.bottomAddons,N=E.topAddons,X=E.onSizeChange,T=E.heights,sn=E.onSend,U=j()(E,i),V=f(),H=V.styles;return(0,a.jsx)(B.Z,{className:C,classNames:P,fullscreen:M,headerHeight:T==null?void 0:T.headerHeight,maxHeight:T==null?void 0:T.maxHeight,minHeight:T==null?void 0:T.minHeight,onSizeChange:X,placement:"bottom",size:{height:T==null?void 0:T.inputHeight,width:"100%"},style:e()({zIndex:10},L),children:(0,a.jsxs)("section",{className:H.container,style:{minHeight:T==null?void 0:T.minHeight},children:[N,(0,a.jsx)("div",{className:H.textareaContainer,children:(0,a.jsx)(t.Z,e()({className:H.textarea,onSend:function(){sn==null||sn(),F==null||F(!1)},ref:D,type:"pure"},U))}),A]})})});Y.Z=(0,s.memo)(b)},92436:function(In,Y,n){n.d(Y,{z:function(){return an}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(43398),W=n(10287),B=n(20149),t=n(36383),O=n(20936),s=n(97697),a=n(81134),i=n(75271),m=n(90142),I=n(99335),R=n(53649),f=n.n(R),b=n(47512),E,D,C,L,P,g,M,F,A,N,X,T,sn,U,V,H,l,G,z=(0,b.kc)(function(y,_){var dn=y.cx,J=y.css,vn=y.token,jn=y.isDarkMode,On=y.responsive,Un=_.placement,Tn=_.type,ee=_.title,Sn=_.primary,xn=_.avatarSize,ln=_.editing,$n=_.time,Bn=J(E||(E=f()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Sn?jn?vn.colorFill:vn.colorBgElevated:jn?vn.colorFillSecondary:vn.colorBgContainer,vn.borderRadiusLG,vn.motionEaseOut),Rn=J(D||(D=f()([`
      padding-block-start: `,`;
    `])),ee?0:"6px"),zn=J(C||(C=f()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),vn.motionEaseOut),Vn=Tn==="block"?Bn:Rn,te=ln&&J(L||(L=f()([`
        width: 100%;
      `])));return{actions:dn(J(P||(P=f()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),Tn==="block"?"flex-end":Un==="left"?"flex-start":"flex-end",Un==="left"?"flex-end":"flex-start"),ln&&J(g||(g=f()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:J(M||(M=f()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),xn,xn),avatarGroupContainer:J(F||(F=f()([`
        width: `,`px;
      `])),xn),container:dn(Tn==="pure"&&zn,J(A||(A=f()([`
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
        `])),vn.motionEaseOut,On.mobile,Tn==="pure"?"12px":"6px")),editingContainer:dn(te,J(N||(N=f()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),vn.colorBorderSecondary,vn.colorBorder),Tn==="pure"&&J(X||(X=f()([`
            background: `,`;
            border-radius: `,`px;
          `])),vn.colorFillQuaternary,vn.borderRadius)),editingInput:J(T||(T=f()([`
        width: 100%;
      `]))),errorContainer:J(sn||(sn=f()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:J(U||(U=f()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),Un==="right"?"-4px":"unset",Un==="left"?"-4px":"unset",vn.colorBgLayout,vn.colorPrimary),message:dn(Vn,J(V||(V=f()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),On.mobile)),messageContainer:dn(te,J(H||(H=f()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),$n?-16:0,On.mobile)),messageContent:dn(te,J(l||(l=f()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),On.mobile)),messageExtra:dn("message-extra"),name:J(G||(G=f()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),vn.colorTextDescription,Un==="left"?"left":"right")}}),p=n(52676),un=(0,i.memo)(function(y){var _=y.editing,dn=y.onChange,J=y.onEditingChange,vn=y.text,jn=y.message,On=y.placement,Un=y.messageExtra,Tn=y.renderMessage,ee=y.type,Sn=y.primary,xn=y.onDoubleClick,ln=y.fontSize,$n=y.markdownProps,Bn=y.markdownClassname,Rn=z({editing:_,placement:On,primary:Sn,type:ee}),zn=Rn.cx,Vn=Rn.styles,te=(0,a.F)(),nn=te.mobile,Kn=(0,p.jsx)(I.i,{classNames:{input:Vn.editingInput,markdown:Bn},editButtonSize:"small",editing:_,fontSize:ln,fullFeaturedCodeBlock:!0,markdownProps:$n,onChange:dn,onEditingChange:J,openModal:nn?_:void 0,text:vn,value:jn?String(jn).trim():""}),ue=Tn?Tn(Kn):Kn;return(0,p.jsxs)(m.D,{className:zn(Vn.message,_&&Vn.editingContainer),onDoubleClick:xn,children:[ue,Un&&!_?(0,p.jsx)("div",{className:Vn.messageExtra,children:Un}):null]})}),bn=un,tn=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname"],hn=32,an=(0,i.memo)(function(y){var _=y.avatarAddon,dn=y.onAvatarClick,J=y.avatarProps,vn=y.actions,jn=y.className,On=y.primary,Un=y.loading,Tn=y.message,ee=y.placement,Sn=ee===void 0?"left":ee,xn=y.type,ln=xn===void 0?"block":xn,$n=y.avatar,Bn=y.error,Rn=y.showTitle,zn=y.time,Vn=y.editing,te=y.onChange,nn=y.onEditingChange,Kn=y.messageExtra,ue=y.renderMessage,Ae=y.text,en=y.errorMessage,d=y.onDoubleClick,$=y.fontSize,K=y.markdownProps,pn=y.markdownClassname,En=j()(y,tn),Cn=(0,a.F)(),rn=Cn.mobile,Gn=(0,s.y)({editing:Vn,placement:Sn,primary:On,showTitle:Rn,time:zn,title:$n.title,type:ln}),Wn=Gn.cx,yn=Gn.styles;return(0,p.jsxs)(m.D,e()(e()({className:Wn(yn.container,jn),direction:Sn==="left"?"horizontal":"horizontal-reverse",gap:rn?6:12},En),{},{children:[(0,p.jsx)(W.Z,e()(e()({},J),{},{addon:_,avatar:$n,loading:Un,onClick:dn,placement:Sn,size:rn?hn:void 0})),(0,p.jsxs)(m.D,{align:Sn==="left"?"flex-start":"flex-end",className:yn.messageContainer,children:[(0,p.jsx)(O.Z,{avatar:$n,placement:Sn,showTitle:Rn,time:zn}),(0,p.jsxs)(m.D,{align:Sn==="left"?"flex-start":"flex-end",className:yn.messageContent,direction:ln==="block"?Sn==="left"?"horizontal":"horizontal-reverse":"vertical",gap:8,children:[Bn?(0,p.jsx)(t.Z,{error:Bn,message:en,placement:Sn}):(0,p.jsx)(bn,{editing:Vn,fontSize:$,markdownClassname:pn,markdownProps:K,message:Tn,messageExtra:Kn,onChange:te,onDoubleClick:d,onEditingChange:nn,placement:Sn,primary:On,renderMessage:ue,text:Ae,type:ln}),(0,p.jsx)(S.Z,{actions:vn,editing:Vn,placement:Sn,type:ln})]})]}),rn&&ln==="block"&&(0,p.jsx)(B.Z,{borderSpacing:hn})]}))})},13306:function(In,Y,n){n.d(Y,{U:function(){return F}});var k=n(26068),e=n.n(k),Q=n(48305),j=n.n(Q),S=n(67825),W=n.n(S),B=n(97157),t=n(86818),O=n(44923),s=n(71170),a=n(75271),i=n(84569),m=n.n(i),I=n(53649),R=n.n(I),f=n(47512),b,E,D,C,L,P=(0,f.kc)(function(A){var N=A.css,X=A.token,T=A.prefixCls;return{root:N(b||(b=R()([`
      overflow: hidden;
    `]))),wrapper:N(E||(E=R()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),X.marginLG),content:N(D||(D=R()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),X.borderRadiusLG,X.boxShadowSecondary),dragWrapper:N(C||(C=R()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:N(L||(L=R()([`
      cursor: move;
    `])))}}),g=n(52676),M=["title","classNames","defaultPosition","onPositionChange"],F=(0,a.memo)(function(A){var N=A.title,X=A.classNames,T=X===void 0?{}:X,sn=A.defaultPosition,U=A.onPositionChange,V=W()(A,M),H=P(),l=H.styles,G=H.cx,z=(0,a.useState)({left:0,top:0,bottom:0,right:0}),p=j()(z,2),un=p[0],bn=p[1],tn=(0,a.useRef)(null),hn=function(y,_){var dn,J=window.document.documentElement,vn=J.clientWidth,jn=J.clientHeight,On=(dn=tn.current)===null||dn===void 0?void 0:dn.getBoundingClientRect();On&&bn({left:-On.left+_.x,right:vn-(On.right-_.x),top:-On.top+_.y,bottom:jn-(On.bottom-_.y)})};return(0,g.jsx)(t.Z,e()(e()({},V),{},{classNames:e()(e()({},T),{},{wrapper:G(l.wrapper,T.wrapper),content:G(l.content,T.content)}),destroyOnClose:!0,drawerRender:function(y){return(0,g.jsx)(m(),{bounds:un,defaultPosition:sn,handle:".".concat(l.dragHandle),nodeRef:tn,onStart:function(dn,J){return hn(dn,J)},onStop:function(dn,J){U==null||U({x:J.x,y:J.y})},children:(0,g.jsx)("div",{className:l.dragWrapper,ref:tn,children:y})})},mask:!1,rootClassName:l.root,title:(0,g.jsxs)(O.Z,{align:"center",className:l.dragHandle,children:[(0,g.jsx)(O.Z,{flex:2,children:N}),(0,g.jsx)(O.Z,{children:(0,g.jsx)(s.ZP,{className:l.dragHandle,icon:(0,g.jsx)(B.Z,{}),type:"text"})})]})}))})},5795:function(In,Y,n){n.d(Y,{d:function(){return f}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(86818),W=n(75271),B=n(53649),t=n.n(B),O=n(47512),s,a,i,m=(0,O.kc)(function(E,D){var C=E.css,L=E.prefixCls,P=D.closeIcon,g=D.closeIconPlacement,M=D.extra,F=C(s||(s=t()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),L,L,!(P===null||P===!1)&&C(a||(a=t()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),L));return{custom:C(i||(i=t()([`
        `,`
      `])),(!g||g==="right"||g==="auto"&&!M)&&F)}},{hashPriority:"low"}),I=n(52676),R=["className"],f=function(D){var C=D.className,L=j()(D,R),P=m(L),g=P.styles,M=P.cx;return(0,I.jsx)(S.Z,e()(e()({},L),{},{className:M(g.custom,C)}))},b=null},99512:function(In,Y,n){n.d(Y,{L:function(){return D}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(44923),W=n(5053),B=n(75271),t=n(53649),O=n.n(t),s=n(47512),a,i,m,I,R=(0,s.kc)(function(C,L){var P=C.css,g=C.token,M=L.divider,F=L.position;return{menuWrapper:P(a||(a=O()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),g.colorBgElevated,g.borderRadiusLG,g.boxShadowSecondary),menuExtra:P(i||(i=O()([`
        padding: 10px 16px 4px;
        `,`
      `])),M&&P(F==="top"?m||(m=O()([`
              border-bottom: 1px solid `,`;
            `])):I||(I=O()([`
              border-top: 1px solid `,`;
            `])),g.colorSplit))}}),f=n(52676),b=["menuExtra","dropdownRender"],E=function(L){var P=L.menuExtra,g=L.dropdownRender,M=j()(L,b),F=P||{},A=F.position,N=A===void 0?"top":A,X=F.divider,T=X===void 0?!1:X,sn=F.content,U=R({divider:T,position:N}),V=U.styles,H=(0,B.useCallback)(function(l){var G=B.cloneElement(l,{style:{boxShadow:"none",border:"none"}});if(!sn)return g?(0,f.jsx)(S.Z,{className:V.menuWrapper,vertical:!0,children:g(G)}):l;var z=(0,f.jsx)(S.Z,{align:"center",className:V.menuExtra,children:sn});return(0,f.jsxs)(S.Z,{className:V.menuWrapper,vertical:!0,children:[N==="top"&&z,G,N==="bottom"&&z]})},[sn,g,N,V.menuExtra,V.menuWrapper]);return(0,f.jsx)(W.Z,e()({dropdownRender:H},M))},D=E;D.Button=W.Z.Button},99335:function(In,Y,n){n.d(Y,{i:function(){return a}});var k=n(26068),e=n.n(k),Q=n(48305),j=n.n(Q),S=n(72545),W=n(87803),B=n(980),t=n(75271),O=n(65720),s=n(52676),a=(0,t.memo)(function(i){var m=i.value,I=i.onChange,R=i.classNames,f=R===void 0?{}:R,b=i.onEditingChange,E=i.editing,D=i.openModal,C=i.onOpenChange,L=i.placeholder,P=i.showEditWhenEmpty,g=P===void 0?!1:P,M=i.styles,F=i.height,A=i.inputType,N=i.editButtonSize,X=i.text,T=i.fullFeaturedCodeBlock,sn=i.model,U=i.fontSize,V=i.markdownProps,H=(0,O.Z)(!1,{onChange:b,value:E}),l=j()(H,2),G=l[0],z=l[1],p=(0,O.Z)(!1,{onChange:C,value:D}),un=j()(p,2),bn=un[0],tn=un[1],hn=F==="auto",an=(0,s.jsx)(S.Z,{className:f==null?void 0:f.input,classNames:{textarea:f==null?void 0:f.textarea},defaultValue:m,editButtonSize:N,height:F,onCancel:function(){return z(!1)},onConfirm:function(_){I==null||I(_),z(!1)},placeholder:L,style:M==null?void 0:M.input,text:X,textareaClassname:f==null?void 0:f.input,type:A});return!m&&g?an:(0,s.jsxs)(s.Fragment,{children:[!bn&&G?an:(0,s.jsx)(W.Z,e()(e()({className:f==null?void 0:f.markdown,fontSize:U,fullFeaturedCodeBlock:T,style:e()({height:hn?"unset":F},M==null?void 0:M.markdown),variant:"chat"},V),{},{children:m||L||""})),bn&&(0,s.jsx)(B.Z,{editing:G,extra:sn==null?void 0:sn.extra,footer:sn==null?void 0:sn.footer,height:F,onChange:I,onEditingChange:z,onOpenChange:function(_){tn(_),z(!1)},open:bn,placeholder:L,text:X,value:m})]})})},14866:function(In,Y,n){n.d(Y,{w:function(){return t}});var k=n(48305),e=n.n(k),Q=n(75271),j=function(s){return typeof s=="string"?document.querySelector("#".concat(s)):(s==null?void 0:s.current)||s},S=":not([disabled]):not([readonly])",W=["text","password","search","tel","url","number","email",""].map(function(O){return'input[type="'.concat(O,'"]').concat(S)}).join(", ")+", input:not([type])".concat(S,", textarea").concat(S),B=function(s){var a,i=j(s);if(i){var m=(a=i.querySelector)===null||a===void 0?void 0:a.call(i,W);if(m!=null&&m.focus)return m.focus(),!0}},t=function(s){var a=(0,Q.useState)(!1),i=e()(a,2),m=i[0],I=i[1];Q.useEffect(function(){if(!(m||!s)){var R=B(s);R&&I(!0)}},[s,m,I])}},20147:function(In,Y,n){n.d(Y,{MX:function(){return B},wK:function(){return W},wL:function(){return j.w}});var k=n(26068),e=n.n(k),Q=n(75271),j=n(14866),S=n(52676),W=function(O){var s,a=O.autoFocus,i=a===void 0?!0:a,m=(0,Q.useRef)(null);return(0,j.w)(i?m:void 0),(0,S.jsx)("div",{className:O.className,id:O.id,ref:m,style:(s=O.style)!==null&&s!==void 0?s:{display:O.className?void 0:"contents"},children:O.children})},B=function(O){return function(s){var a=function(I){return(0,S.jsx)(W,e()(e()({},O||{}),{},{children:(0,S.jsx)(s,e()({},I))}))},i=s.displayName||s.name||"Component";return a.displayName="withFormHelper(".concat(i,")"),a}}},25969:function(In,Y,n){n.d(Y,{n:function(){return M}});var k=n(26068),e=n.n(k),Q=n(48305),j=n.n(Q),S=n(67825),W=n.n(S),B=n(80405),t=n(50999),O=n(41117),s=n(45798),a=n(3548),i=n(5312),m=n(75271),I=n(53649),R=n.n(I),f=n(47512),b,E,D,C,L=(0,f.kc)(function(F){var A=F.css,N=F.token,X="#222222";return{root:A(b||(b=R()([`
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
      `])),X,N.borderRadiusLG,N.marginXXS,N.paddingXS,X,N.borderRadiusLG,N.borderRadiusLG,N.borderRadius,N.borderRadius,X,N.borderRadiusLG,N.fontFamilyCode),searchBarIcon:A(E||(E=R()([`
        font-size: 16px;
      `]))),loaderText:A(D||(D=R()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),N.fontFamilyCode),loaderIcon:A(C||(C=R()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),N.marginSM,N.marginSM)}},{hashPriority:"low"}),P=n(52676),g=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],M=function(A){var N=A.className,X=A.id,T=A.style,sn=A.height,U=A.onScroll,V=A.url,H=A.websocket,l=A.refreshInterval,G=A.onLoad,z=A.onError,p=W()(A,g),un=L(),bn=un.cx,tn=un.styles,hn=(0,m.useState)(0),an=j()(hn,2),y=an[0],_=an[1],dn=(0,m.useState)(!1),J=j()(dn,2),vn=J[0],jn=J[1],On=(0,m.useState)(!1),Un=j()(On,2),Tn=Un[0],ee=Un[1],Sn=(0,m.useRef)(),xn=(0,m.useRef)();(0,m.useEffect)(function(){return function(){clearTimeout(Sn.current),clearTimeout(xn.current)}},[]),(0,m.useEffect)(function(){var Rn;return V&&!H&&l&&(Rn=setInterval(function(){_(function(zn){return zn+1})},l)),function(){clearInterval(Rn)}},[l,V,H]);var ln=(0,m.useMemo)(function(){return V&&(Sn.current=setTimeout(function(){jn(!0),Sn.current=void 0},50),"".concat(V,"#").concat(y))},[V,y]),$n=(0,m.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Sn.current),jn(!1),ee(!0),xn.current=setTimeout(function(){return ee(!1)},100),G==null||G()},[G]),Bn=(0,m.useCallback)(function(Rn){jn(!1),clearTimeout(Sn.current),z==null||z(Rn)},[z]);return(0,P.jsxs)("div",{className:bn(tn.root,N),id:X,style:e()({height:sn},T),children:[(0,P.jsx)(t.Uu,{render:function(zn){var Vn=zn.follow,te=zn.onScroll;return(0,P.jsx)(t.A9,e()(e()({url:ln,websocket:H},p),{},{follow:Tn||Vn,height:sn,iconFilterLines:(0,P.jsx)(B.Z,{className:tn.searchBarIcon,icon:O.Z}),iconFindNext:(0,P.jsx)(B.Z,{className:tn.searchBarIcon,icon:s.Z}),iconFindPrevious:(0,P.jsx)(B.Z,{className:tn.searchBarIcon,icon:a.Z}),onError:Bn,onLoad:$n,onScroll:function(Kn){te(Kn),U==null||U(Kn)}}))},startFollowing:!0}),vn&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:tn.loaderText,children:"loading ..."}),(0,P.jsx)(B.Z,{className:tn.loaderIcon,icon:i.Z,spin:!0})]})]})}},52625:function(In,Y,n){n.d(Y,{T:function(){return D}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(47512),W=n(75271),B=n(90142),t=n(36075),O=n.n(t),s=n(52676),a=(0,W.memo)(function(C){var L=Object.assign({},(O()(C),C));return(0,s.jsx)("svg",e()(e()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},L),{},{children:(0,s.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),i=(0,W.memo)(function(C){var L=Object.assign({},(O()(C),C));return(0,s.jsxs)("svg",e()(e()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},L),{},{children:[(0,s.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,s.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,s.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),m=(0,W.memo)(function(C){var L=Object.assign({},(O()(C),C));return(0,s.jsxs)("svg",e()(e()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},L),{},{children:[(0,s.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,s.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,s.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,s.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,s.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,s.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,s.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),I=n(53649),R=n.n(I),f,b=(0,S.kc)(function(C){var L=C.css;return{extraTitle:L(f||(f=R()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),E=["type","size","style","extra","className"],D=(0,W.memo)(function(C){var L=C.type,P=L===void 0?"img":L,g=C.size,M=g===void 0?32:g,F=C.style,A=C.extra,N=C.className,X=j()(C,E),T=(0,S.Fg)(),sn=b(),U=sn.styles,V;switch(P){case"text":{V=(0,s.jsx)(m,e()({className:N,height:M,style:F,width:M*2.9375},X));break}case"combine":{V=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,e()({height:M,style:F,width:M},X)),(0,s.jsx)(m,{style:{height:M,marginLeft:Math.round(M/4),width:"auto"}})]});break}case"img":default:{V=(0,s.jsx)(i,e()({height:M,style:F,width:M},X));break}}if(!A)return V;var H=Math.round(M/3*1.9);return(0,s.jsxs)(B.D,e()(e()({align:"center",className:N,horizontal:!0,style:F},X),{},{children:[V,(0,s.jsx)(a,{style:{color:T.colorFill,height:H,width:H}}),(0,s.jsx)("div",{className:U.extraTitle,style:{fontSize:H},children:A})]}))})},48355:function(In,Y,n){n.d(Y,{o:function(){return gn}});var k=n(26068),e=n.n(k),Q=n(82092),j=n.n(Q),S=n(504),W=n(22993),B=n(54397),t=n(69789),O=n(9668),s=n(67568),a=n(65694),i=n(75271),m=n(28485),I=n(25298),R=n.n(I),f=n(17069),b=n.n(f),E=n(9504),D=n.n(E),C=n(38836),L=n.n(C),P=n(21742),g=n.n(P),M=n(83136),F=n.n(M),A=function(x){g()(c,x);var u=F()(c);function c(){return R()(this,c),u.apply(this,arguments)}return b()(c,[{key:"createDOM",value:function(h){var r=D()(L()(c.prototype),"createDOM",this).call(this,h);return r.classList.add("align-middle"),r}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(h){return new c(h.__text,h.__key)}},{key:"importJSON",value:function(h){var r=(0,a.MX)(h.text);return r.setFormat(h.format),r.setDetail(h.detail),r.setMode(h.mode),r.setStyle(h.style),r}}]),c}(a.R2);function N(x){return new A(x)}var X=n(62657),T=n.n(X),sn=n(48305),U=n.n(sn),V=n(97780),H=n(80405),l=n(44923),G=n(56995),z=n(69024),p=n(52676),un=(0,i.createContext)(null),bn=(0,i.memo)(function(x){var u=x.children,c=x.value;return(0,p.jsx)(un.Provider,{value:c,children:u})}),tn=function(){var u=(0,i.useContext)(un);return u==null?void 0:u.optionsMap},hn=n(25272),an=n(95138),y=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,_="\\(",dn=function(u){return"(?:"+u.join("|")+")"},J=function(u,c){var o=u.length===0?"":"(?!"+u.join("|")+")";return o+"[^\\s"+c+"]"},vn=function(u){return"(?:\\.[ |$]|\\s|["+u+"]|)"},jn=75,On=function(u,c){var o=(0,i.useRef)(null),h=(0,V.g)(),r=U()(h,1),v=r[0],Z=(0,hn.y)(u),w=U()(Z,3),q=w[0],An=w[1],on=w[2],Pn=(0,i.useCallback)(function(Dn){var qn=(0,a.dL)(),ne=qn==null?void 0:qn.getNodes();if(!q&&(ne==null?void 0:ne.length)===1&&v.dispatchCommand(c,void 0),q&&(0,a.iO)(qn)){Dn.preventDefault();var ye=(0,a.gI)(u);if((0,a.k$)(ye))return c&&v.dispatchCommand(c,void 0),ye.remove(),!0}return!1},[q,u,c,v]),kn=(0,i.useCallback)(function(Dn){Dn.stopPropagation(),on(),An(!0)},[An,on]);return(0,i.useEffect)(function(){var Dn=o.current;return Dn&&Dn.addEventListener("click",kn),function(){Dn&&Dn.removeEventListener("click",kn)}},[kn]),(0,i.useEffect)(function(){return(0,an.qV)(v.registerCommand(a.MK,Pn,a.KB),v.registerCommand(a.aR,Pn,a.KB))},[v,on,Pn]),[o,q]},Un=function(){var u=useRef(null),c=useState(!1),o=_slicedToArray(c,2),h=o[0],r=o[1],v=useCallback(function(Z){Z.stopPropagation(),r(function(w){return!w})},[]);return useEffect(function(){var Z=u.current;return Z&&Z.addEventListener("click",v),function(){Z&&Z.removeEventListener("click",v)}},[v]),[u,h,r]};function Tn(x,u,c,o){return new RegExp((u?"(^|\\s|".concat(u,")("):"(^|\\s)(")+dn(x)+"((?:"+J(x,c)+(o?vn(c):"")+"){0,"+jn+"}))$")}function ee(x,u,c,o,h){var r=Tn(u,c,o,h).exec(x);if(r!==null){var v=r[1],Z=r[2],w=r[3];if(Z.length>0)return{leadOffset:r.index+v.length,matchingString:w,replaceableString:Z}}return null}var Sn=function(u,c){var o=c.punctuation,h=c.preTriggerChars,r=c.allowSpaces,v=(0,i.useState)(null),Z=U()(v,2),w=Z[0],q=Z[1],An=(0,i.useCallback)(function(on){var Pn=ee(on,u,h,o,r);if(Pn){var kn=Pn.replaceableString,Dn=Pn.matchingString,qn=kn.lastIndexOf(Dn),ne=qn===-1?kn:kn.slice(0,Math.max(0,qn))+kn.slice(Math.max(0,qn+Dn.length));if(q(ne||null),Pn.replaceableString)return Pn}else q(null);return null},[h,r,o,u]);return{trigger:w,checkForMentionMatch:An}},xn=n(53649),ln=n.n(xn),$n=n(47512),Bn,Rn,zn,Vn=(0,$n.kc)(function(x,u){var c=x.css,o=x.token,h=x.prefixCls,r=u.isSelected,v=u.isError,Z=function(){return v?r?{background:o.colorErrorBgActive,border:o.colorErrorBorderHover,color:o.colorErrorTextActive}:{background:o.colorErrorBg,border:o.colorErrorBorder,color:o.colorErrorText}:r?{background:o.colorInfoBgHover,border:o.colorInfoBorder,color:o.colorInfoText}:{background:o.colorFillTertiary,border:"transparent",color:o.colorInfoText}},w=Z(),q=w.background,An=w.border,on=w.color;return{root:c(Bn||(Bn=ln()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),o.fontFamilyCode,on,q,An,o.borderRadius),text:c(Rn||(Rn=ln()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),o.colorTextSecondary),error:c(zn||(zn=ln()([`
        color: `,`;
      `])),o.colorErrorText)}}),te=(0,a.fA)("INSERT_MENTION_COMMAND"),nn=(0,a.fA)("DELETE_MENTION_COMMAND"),Kn=(0,a.fA)("CLEAR_HIDE_MENU_TIMEOUT"),ue=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,Ae=(0,i.memo)(function(x){var u=x.nodeKey,c=x.variable,o=tn(),h=(0,V.g)(),r=U()(h,1),v=r[0],Z=On(u,nn),w=U()(Z,2),q=w[0],An=w[1],on=o==null?void 0:o[c],Pn=Vn({isSelected:An,isError:!on||!!on.error}),kn=Pn.styles;(0,i.useEffect)(function(){if(!v.hasNodes([en]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[v]);var Dn=(0,p.jsx)(l.Z,{className:kn.root,ref:q,children:(0,p.jsxs)(l.Z,{align:"center",gap:2,children:[(!on||on.error)&&(0,p.jsx)(H.Z,{className:kn.error,icon:z.Z}),(on==null?void 0:on.icon)&&(0,p.jsx)(l.Z,{children:on.icon}),(0,p.jsx)(l.Z,{className:kn.text,gap:2,title:(on==null?void 0:on.label)||c,children:(0,p.jsx)("span",{children:(on==null?void 0:on.label)||c})})]})});return on!=null&&on.error?(0,p.jsx)(G.Z,{title:on==null?void 0:on.error,children:Dn}):Dn}),en=function(x){g()(c,x);var u=F()(c);function c(o,h,r){var v;return R()(this,c),v=u.call(this,r),j()(T()(v),"__variable",void 0),v.__variable=o,v}return b()(c,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var h=document.createElement("div");return h.style.display="inline-flex",h.style.alignItems="center",h.style.verticalAlign="middle",h}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,p.jsx)(Ae,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var h=this.getLatest();return h.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(h){return new c(h.__variable)}},{key:"importJSON",value:function(h){var r=d(h.variable);return r}}]),c}(a.Ij);function d(x){return new en(x)}function $(x){return x instanceof en}var K=(0,i.memo)(function(x){var u=x.onInsert,c=x.onDelete,o=(0,V.g)(),h=U()(o,1),r=h[0];return(0,i.useEffect)(function(){if(!r.hasNodes([en]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,an.qV)(r.registerCommand(te,function(v){r.dispatchCommand(Kn,null);var Z=d(v);return(0,a.od)([Z]),u&&u(),!0},a.VN),r.registerCommand(nn,function(){return c&&c(),!0},a.VN))},[r,u,c]),null});K.displayName="MentionNodePlugin";var pn=(0,a.fA)("INSERT_MENTION_COMMAND"),En=(0,a.fA)("DELETE_MENTION_COMMAND"),Cn=(0,a.fA)("CLEAR_HIDE_MENU_TIMEOUT"),rn=(0,a.fA)("UPDATE_MENTIONS_OPTIONS"),Gn=function(u,c,o){if(u.isSimpleText())for(var h=u.getPreviousSibling(),r=u.getTextContent(),v=u,Z;;){Z=c(r);var w=Z===null?"":r.slice(Z.end);if(r=w,w===""){var q=v.getNextSibling();if((0,a.Gg)(q)){w=v.getTextContent()+q.getTextContent();var An=c(w);if(An===null){q.markDirty();return}else if(An.start!==0)return}}else{var on=c(w);if(on!==null&&on.start===0)return}if(Z===null)return;if(!(Z.start===0&&(0,a.Gg)(h)&&h.isTextEntity())){var Pn=void 0;if(Z.start===0){var kn=v.splitText(Z.end),Dn=U()(kn,2);Pn=Dn[0],v=Dn[1]}else{var qn=v.splitText(Z.start,Z.end),ne=U()(qn,3);Pn=ne[1],v=ne[2]}var ye=o(Pn);if(Pn.replace(ye),v==null)return}}};function Wn(x){var u=x.split(`
`);return JSON.stringify({root:{children:u.map(function(c){return{children:[{detail:0,format:0,mode:"normal",style:"",text:c,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var yn=(0,i.memo)(function(x){var u=x.onInsert,c=(0,V.g)(),o=U()(c,1),h=o[0];(0,i.useEffect)(function(){if(!h.hasNodes([en]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[h]);var r=(0,i.useCallback)(function(w){u&&u();var q=w.getTextContent().slice(2,-2);return(0,a.U2)(d(q))},[u]),v=(0,i.useCallback)(function(w){var q=ue.exec(w);if(q===null)return null;var An=q.index,on=An+q[0].length;return{end:on,start:An}},[]),Z=(0,i.useCallback)(function(w){return Gn(w,v,r)},[r,v]);return(0,i.useEffect)(function(){return ue.lastIndex=0,(0,an.qV)(h.registerNodeTransform(A,Z))},[]),null}),Qn=n(4337),he=n(30967),de=n(83606),Xn=function(x){g()(c,x);var u=F()(c);function c(o,h,r){var v;return R()(this,c),v=u.call(this,o),j()(T()(v),"label",void 0),j()(T()(v),"value",void 0),j()(T()(v),"icon",void 0),j()(T()(v),"extraElement",void 0),j()(T()(v),"keywords",void 0),j()(T()(v),"keyboardShortcut",void 0),j()(T()(v),"onSelect",void 0),j()(T()(v),"disabled",void 0),j()(T()(v),"data",void 0),v.value=o,v.label=h,v.keywords=r.keywords||[],v.icon=r.icon,v.extraElement=r.extraElement,v.keyboardShortcut=r.keyboardShortcut,v.onSelect=r.onSelect.bind(T()(v)),v.disabled=r.disabled,v.data=r.data,v}return b()(c)}(Qn.n),ie=function(u,c){var o=(0,V.g)(),h=U()(o,1),r=h[0],v=(0,i.useMemo)(function(){var Z=u.map(function(q){return new Xn(q.value,q.label,{icon:q.icon,onSelect:function(){r.dispatchCommand(te,q.value)},disabled:q.disabled,data:q.data,extraElement:q.extraElement,keywords:q.keywords,keyboardShortcut:q.keyboardShortcut})});if(!c)return Z;var w=new RegExp((0,de.Z)(c),"i");return Z.filter(function(q){var An;return w.test(q.label)||((An=q.keywords)===null||An===void 0?void 0:An.some(function(on){return w.test(on)}))})},[u,c,r]);return{options:v}},Ln=n(78962),ce=n(94729),re,oe,Yn,ve,me,ae,_n,Hn=(0,$n.kc)(function(x,u){var c=x.css,o=x.token,h=x.prefixCls,r=u.isSelected,v=u.disabled,Z=c(re||(re=ln()([`
      background-color: `,`;
    `])),o.colorFillTertiary);return{anchor:c(oe||(oe=ln()([`
        z-index: 9999;
      `]))),menuEmpty:c(Yn||(Yn=ln()([`
        padding: `,`px;
      `])),o.padding),menuOverlay:c(ve||(ve=ln()([`
        overflow: auto;

        width: 240px;
        max-height: 320px;
        margin-top: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),o.marginXXS,o.colorBgElevated,o.borderRadius,o.boxShadow),menuItem:c(me||(me=ln()([`
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
      `])),v?"not-allowed":"pointer",v?"none":"all",o.paddingSM/2,o.paddingSM,o.borderRadius,v?o.colorTextDisabled:o.colorText,o.fontSize,o.lineHeight,r&&Z,Z),menuItemIcon:c(ae||(ae=ln()([`
        color: `,`;
      `])),o.colorInfoText),menuItemLabel:c(_n||(_n=ln()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Mn=ce.C.Text,cn=(0,i.memo)(function(x){var u=x.index,c=x.isSelected,o=x.onClick,h=x.onMouseEnter,r=x.option,v=x.queryString,Z=Hn({isSelected:c,disabled:r.disabled}),w=Z.styles,q=r.label,An=(0,i.useMemo)(function(){var Dn=q,qn="",ne="";if(v){var ye=new RegExp((0,de.Z)(v),"i"),Ce=ye.exec(r.label);Ce&&(Dn=q.slice(0,Math.max(0,Ce.index)),qn=Ce[0],ne=q.slice(Math.max(0,Ce.index+Ce[0].length)))}return{before:Dn,middle:qn,after:ne}},[r.label,v,q]),on=An.before,Pn=An.middle,kn=An.after;return(0,p.jsxs)(l.Z,{align:"center",className:w.menuItem,gap:4,onClick:function(){return o(u,r)},onMouseEnter:function(){return h(u,r)},ref:r.setRefElement,tabIndex:-1,children:[(0,p.jsx)(l.Z,{className:w.menuItemIcon,children:r.icon}),(0,p.jsxs)("div",{className:w.menuItemLabel,title:r.label,children:[on,(0,p.jsx)(Mn,{mark:!0,children:Pn}),kn]}),(0,p.jsx)(l.Z,{children:r.extraElement})]},r.key)});cn.displayName="MentionMenuItem";var mn=(0,i.memo)(function(x){var u=x.selectedIndex,c=x.options,o=x.onClick,h=x.onMouseEnter,r=x.queryString,v=Hn({}),Z=v.styles;return(0,p.jsxs)(p.Fragment,{children:[c.length===0&&(0,p.jsx)(Ln.Z,{className:Z.menuEmpty}),c.map(function(w,q){return(0,p.jsx)(cn,{index:q,isSelected:u===q,onClick:o,onMouseEnter:h,option:w,queryString:r},w.key)})]})}),Fn=(0,i.memo)(function(x){var u=x.triggers,c=x.options,o=c===void 0?[]:c,h=x.allowSpaces,r=h===void 0?!0:h,v=x.punctuation,Z=v===void 0?y:v,w=x.preTriggerChars,q=w===void 0?_:w,An=x.onSelect,on=Hn({}),Pn=on.styles,kn=(0,V.g)(),Dn=U()(kn,1),qn=Dn[0],ne=Sn(u,{punctuation:Z,preTriggerChars:q,allowSpaces:r}),ye=ne.trigger,Ce=ne.checkForMentionMatch,Be=(0,i.useState)(null),Te=U()(Be,2),Le=Te[0],We=Te[1],Fe=ie(o,Le),Ne=Fe.options,Ue=(0,i.useCallback)(function(Zn,Me,De,Re){An==null||An(Zn,ye,Le),qn.update(function(){Me&&Zn!==null&&Zn!==void 0&&Zn.key&&Me.remove(),Zn!=null&&Zn.onSelect&&Zn.onSelect(Re),De()})},[qn,An,Le,ye]),Ie=(0,i.useCallback)(function(Zn,Me){var De=Me.selectedIndex,Re=Me.selectOptionAndCleanUp,Ze=Me.setHighlightedIndex;return Zn.current?he.createPortal((0,p.jsx)("div",{className:Pn.menuOverlay,role:"menu",children:(0,p.jsx)(mn,{onClick:function(je,pe){pe.disabled||(Ze(je),Re(pe))},onMouseEnter:function(je,pe){pe.disabled||Ze(je)},options:Ne,queryString:Le,selectedIndex:De})}),Zn.current):null},[Ne,Le,Pn.menuOverlay]);return(0,p.jsx)(Qn.HQ,{anchorClassName:Pn.anchor,menuRenderFn:Ie,onQueryChange:We,onSelectOption:Ue,options:Ne,triggerFn:Ce})}),Nn=function(u){var c=u.onBlur,o=u.onFocus,h=(0,V.g)(),r=U()(h,1),v=r[0],Z=(0,i.useRef)(null);return(0,i.useEffect)(function(){return(0,an.qV)(v.registerCommand(Kn,function(){return Z.current&&(clearTimeout(Z.current),Z.current=null),!0},a.VN),v.registerCommand(a.Gq,function(){return Z.current=setTimeout(function(){v.dispatchCommand(a.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),c&&c(),!0},a.VN),v.registerCommand(a.m$,function(){return o&&o(),!0},a.VN))},[v,c,o]),null},Jn=Nn,wn,xe,Se,be,fe,ge,Ee,Oe,Pe=32,fn=22,le=function(u){return Pe+Math.max(u-1,0)*fn},se=(0,$n.kc)(function(x,u){var c=x.css,o=x.token,h=x.prefixCls,r=u.autoSize;return{wrapper:c(wn||(wn=ln()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:c(xe||(xe=ln()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Pe,o.fontSize,Pe,o.colorTextPlaceholder),root:c(Se||(Se=ln()([`
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
      `])),o.colorBorder,o.borderRadius,o.colorText,o.fontSize,o.fontFamily,(r==null?void 0:r.minRows)&&c(be||(be=ln()([`
          min-height: `,`px;
        `])),le(r.minRows)),(r==null?void 0:r.maxRows)&&c(fe||(fe=ln()([`
          max-height: `,`px;
        `])),le(r.maxRows)),o.motionDurationMid,o.colorPrimaryBorder,fn),filled:c(ge||(ge=ln()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),o.colorFillTertiary,o.colorFillSecondary,o.colorBgBase),borderless:c(Ee||(Ee=ln()([`
        background: transparent;
        border: none;
      `]))),disabled:c(Oe||(Oe=ln()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),o.colorTextDisabled,o.colorBgContainerDisabled)}}),gn=function(u){var c=u.className,o=u.wrapperClassname,h=u.placeholder,r=u.style,v=u.value,Z=u.defaultValue,w=u.readOnly,q=w===void 0?!1:w,An=u.disabled,on=An===void 0?!1:An,Pn=u.onChange,kn=u.onBlur,Dn=u.onFocus,qn=u.variant,ne=qn===void 0?"outlined":qn,ye=u.options,Ce=ye===void 0?[]:ye,Be=u.autoSize,Te=u.triggers,Le=Te===void 0?["@"]:Te,We=u.allowSpaces,Fe=u.punctuation,Ne=u.preTriggerChars,Ue=u.onSelect,Ie=se({autoSize:Be}),Zn=Ie.styles,Me=Ie.cx,De=!q&&!on,Re=(0,i.useMemo)(function(){return{namespace:"mentions",nodes:[A,{replace:a.R2,with:function(pe){return new A(pe.__text)}},en],editorState:Wn(v||Z||""),onError:function(pe){throw pe}}},[]),Ze=function(pe){var Ke=pe.read(function(){return(0,a.Gv)().getTextContent()});Pn==null||Pn(Ke.replaceAll(`

`,`
`))},ze=(0,i.useMemo)(function(){return Ce.reduce(function(je,pe){return je[pe.value]=pe,je},{})},[Ce]);return m.j?(0,p.jsx)(S.R,{initialConfig:e()(e()({},Re),{},{editable:De}),children:(0,p.jsx)(bn,{value:{optionsMap:ze},children:(0,p.jsxs)("div",{className:Me(Zn.wrapper,o),children:[(0,p.jsx)(s.B,{ErrorBoundary:B.g,contentEditable:(0,p.jsx)(W.f,{className:Me(j()(j()(j()(j()({},Zn.root,!0),Zn.filled,ne==="filled"),Zn.borderless,ne==="borderless"),Zn.disabled,on),c),style:r||{}}),placeholder:(0,p.jsx)("div",{className:Zn.placeholder,children:h||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,p.jsx)(Fn,{allowSpaces:We,onSelect:Ue,options:Ce,preTriggerChars:Ne,punctuation:Fe,triggers:Le}),(0,p.jsx)(K,{}),(0,p.jsx)(yn,{}),(0,p.jsx)(t.e,{}),(0,p.jsx)(O.$,{onChange:Ze}),(0,p.jsx)(Jn,{onBlur:kn,onFocus:Dn})]})})}):(0,p.jsxs)("div",{className:Me(Zn.wrapper,o),children:[(0,p.jsx)("div",{className:Me(j()(j()(j()(j()({},Zn.root,!0),Zn.filled,ne==="filled"),Zn.borderless,ne==="borderless"),Zn.disabled,on),c),style:r||{}}),(0,p.jsx)("div",{className:Zn.placeholder,children:h||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(In,Y,n){n.d(Y,{u:function(){return b}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(51697),W=n(75271),B="yunti-ui",t=n(53649),O=n.n(t),s=n(47512),a,i,m=(0,s.kc)(function(D,C){var L=D.css,P=D.prefixCls,g=C.borderd,M=g===void 0?!0:g,F=C.footer,A=F===null||Array.isArray(F)&&F.length===0,N=L(a||(a=O()([`
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
    `])),P,P,A?0:"40px",P,A?0:"1px");return{custom:L(i||(i=O()([`
        `,`
      `])),M&&N)}},{hashPriority:"low"}),I=n(52676),R=["className","borderd"],f=function(C){var L=C.className,P=C.borderd,g=P===void 0?!0:P,M=j()(C,R),F=m(e()({borderd:g},M)),A=F.styles,N=F.cx;return(0,I.jsx)(S.Z,e()(e()({},M),{},{className:N(A.custom,"".concat(B,"-modal"),L)}))},b=f;b.useModal=S.Z.useModal,b.destroyAll=S.Z.destroyAll,b.config=S.Z.config,b._InternalPanelDoNotUseOrYouWillBeFired=S.Z._InternalPanelDoNotUseOrYouWillBeFired,b.info=S.Z.info,b.success=S.Z.success,b.error=S.Z.error,b.warning=S.Z.warning,b.warn=S.Z.warn,b.confirm=S.Z.confirm;var E=null},81321:function(In,Y,n){n.d(Y,{ZM:function(){return Kn},Hu:function(){return N},Xq:function(){return Ae},rE:function(){return ue}});var k=n(26068),e=n.n(k),Q=n(48305),j=n.n(Q),S=n(67825),W=n.n(S),B=n(33592),t=n(75271),O=n(94456),s=n(80405),a=n(71170),i=n(32328),m=n(87449),I=n(28485),R=n(90228),f=n.n(R),b=n(87999),E=n.n(b),D=n(97524),C=n(50279),L=n(25298),P=n.n(L),g=n(17069),M=n.n(g),F=n(82092),A=n.n(F),N=function(){function en(){P()(this,en),A()(this,"methodMap",void 0),A()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return M()(en,[{key:"registerMethod",value:function($,K){this.methodMap[$]=K}},{key:"call",value:function($){for(var K,pn,En=arguments.length,Cn=new Array(En>1?En-1:0),rn=1;rn<En;rn++)Cn[rn-1]=arguments[rn];return(K=(pn=this.methodMap)[$])===null||K===void 0?void 0:K.call.apply(K,[pn].concat(Cn))}},{key:"updateMeta",value:function($){Object.assign(this.meta,$)}},{key:"getMeta",value:function(){return Object.freeze(e()({},this.meta))}}]),en}(),X="__base_monaco_editor_controller__",T=I.j&&window;T&&!T[X]&&(T[X]=new N);var sn=T[X],U=function(){var en,d;return function(){var $=E()(f()().mark(function K(pn){var En;return f()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!en||!(0,C.Z)(d,pn))){rn.next=7;break}return En=Object.keys(pn||{}).length>0,D.Z.config(En?pn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),rn.next=5,D.Z.init();case 5:en=rn.sent,d=pn;case 7:return rn.abrupt("return",en);case 8:case"end":return rn.stop()}},K)}));return function(K){return $.apply(this,arguments)}}()}(),V=function(d){return d?D.Z.config(d):D.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),D.Z.init()};function H(en){var d=Object.keys(en||{}).length>0,$=d?en:void 0;return sn.getMeta().singleton?U($):V($)}function l(en){controller.updateMeta(en)}var G=I.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",z=G==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",p={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},un={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function bn(en){var d=(0,t.useRef)();return(0,t.useEffect)(function(){d.current=en},[en]),d.current}function tn(en,d,$,K){if(K){var pn=en.editor.getModel(en.Uri.parse(K));if(pn)return pn}return en.editor.createModel(d,$,K?en.Uri.parse(K):void 0)}var hn=function(d,$){var K=$.editorDidMount,pn=$.editorWillMount,En=$.theme,Cn=$.value,rn=$.path,Gn=$.language,Wn=$.saveViewState,yn=$.defaultValue,Qn=$.enhancers,he=(0,t.useState)(!1),de=j()(he,2),Xn=de[0],ie=de[1],Ln=(0,t.useState)(!1),ce=j()(Ln,2),re=ce[0],oe=ce[1],Yn=(0,t.useState)(!1),ve=j()(Yn,2),me=ve[0],ae=ve[1],_n=(0,t.useRef)(yn),Hn=(0,t.useRef)(Cn),Mn=(0,t.useRef)(Gn||"text"),cn=(0,t.useRef)(rn),mn=bn(rn),Fn=(0,t.useRef)($.requireConfig),Nn=(0,t.useRef)($.options),Jn=(0,t.useRef)(),wn=(0,t.useRef)(),xe=(0,t.useRef)(),Se=(0,t.useRef)(d),be=(0,t.useRef)(),fe=(0,t.useRef)(),ge=(0,t.useRef)(!1),Ee=(0,t.useRef)(new Map),Oe=(0,t.useRef)({});(0,t.useEffect)(function(){Oe.current.enhancers=Qn},[Qn]),(0,t.useEffect)(function(){be.current=K},[K]),(0,t.useEffect)(function(){fe.current=pn},[pn]),(0,t.useEffect)(function(){Hn.current=Cn},[Cn]),(0,t.useEffect)(function(){Mn.current=Gn},[Gn]),(0,t.useEffect)(function(){_n.current=yn},[yn]),(0,t.useEffect)(function(){ae(!0),H(Fn.current).then(function(fn){var le;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Jn.current=fn;try{var se;(se=fe.current)===null||se===void 0||se.call(fe,fn)}catch(v){}if(xe.current){var gn;if(Se.current==="single"){var x,u,c=tn(fn,(x=(u=Hn.current)!==null&&u!==void 0?u:_n.current)!==null&&x!==void 0?x:"",Mn.current,cn.current);gn=fn.editor.create(xe.current,e()(e()({automaticLayout:!0},p),Nn.current)),gn.setModel(c)}else{var o=fn.editor.createModel(Hn.current,Mn.current),h=fn.editor.createModel(Hn.current,Mn.current);gn=fn.editor.createDiffEditor(xe.current,e()(e()({automaticLayout:!0},un),Nn.current)),gn.setModel({original:o,modified:h})}wn.current=gn,(le=Oe.current.enhancers)===null||le===void 0||le.forEach(function(v){return v(fn,gn)});try{var r;(r=be.current)===null||r===void 0||r.call(be,fn,gn)}catch(v){}ge.current||ie(!0)}}).catch(function(fn){console.error("Monaco Editor Load Error!",fn)}).then(function(){ge.current||ae(!1)})},[]),(0,t.useEffect)(function(){var fn;Xn&&((fn=Jn.current)===null||fn===void 0||fn.editor.setTheme(En))},[Xn,En]),(0,t.useEffect)(function(){if(Xn){var fn=d==="diff"?wn.current.getModifiedEditor():wn.current;fn==null||fn.onDidFocusEditorText(function(){ge.current||oe(!0)}),fn==null||fn.onDidBlurEditorText(function(){ge.current||oe(!1)})}},[Xn,d]),(0,t.useEffect)(function(){return function(){ge.current=!0}},[]),(0,t.useEffect)(function(){var fn,le,se;if(Xn&&!(d!=="diff"&&rn)){var gn=d==="diff"?wn.current.getModifiedEditor():wn.current,x=(fn=Cn!=null?Cn:_n.current)!==null&&fn!==void 0?fn:"",u=(le=Jn.current)===null||le===void 0?void 0:le.editor.EditorOption.readOnly;u&&gn!==null&&gn!==void 0&&(se=gn.getOption)!==null&&se!==void 0&&se.call(gn,u)?gn==null||gn.setValue(x):Cn!==(gn==null?void 0:gn.getValue())&&(gn==null||gn.executeEdits("",[{range:gn==null?void 0:gn.getModel().getFullModelRange(),text:x,forceMoveMarkers:!0}]),gn==null||gn.pushUndoStop())}},[Xn,rn,d,Cn]),(0,t.useEffect)(function(){var fn,le;if(Xn&&d!=="diff"&&rn!==mn){var se=tn(Jn.current,(fn=Hn.current)!==null&&fn!==void 0?fn:_n.current,Mn.current,rn),gn=wn.current;Hn.current!==null&&Hn.current!==void 0&&se.getValue()!==Hn.current&&se.setValue(Hn.current),se!==((le=wn.current)===null||le===void 0?void 0:le.getModel())&&(Wn&&Ee.current.set(mn,gn.saveViewState()),gn.setModel(se),Wn&&gn.restoreViewState(Ee.current.get(rn)))}},[Xn,Cn,rn,mn,d,Wn]);var Pe=wn;return{isEditorReady:Xn,focused:re,loading:me,containerRef:xe,monacoRef:Jn,editorRef:Pe,valueRef:Hn}},an=function(d){var $=(0,t.useState)(!1),K=j()($,2),pn=K[0],En=K[1],Cn=function(){if(pn){En(!1),d==null||d.updateOptions(e()(e()({},d==null?void 0:d.getOptions()),{},{minimap:{enabled:!1}})),d==null||d.layout();return}En(!0),d==null||d.updateOptions(e()(e()({},d==null?void 0:d.getOptions()),{},{minimap:{enabled:!0}})),d==null||d.layout()};return{isFullScreen:pn,fullScreen:Cn}},y=n(53649),_=n.n(y),dn=n(47512),J,vn,jn,On,Un,Tn,ee,Sn=(0,dn.kc)(function(en,d){var $=en.css,K=en.token,pn=en.prefixCls,En=d.minimapEnabled,Cn=En===void 0?!1:En,rn=d.isFullScreen,Gn=rn===void 0?!1:rn,Wn=d.diff,yn=Wn===void 0?!1:Wn,Qn=(0,dn.F4)(J||(J=_()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `])));return{base:$(vn||(vn=_()([`
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
      `])),Gn&&$(jn||(jn=_()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius-1,K.borderRadius-1),fullScreenBtn:$(On||(On=_()([`
        &.`,`-btn {
          position: absolute;
          color: `,`;
          top: 20px;
          transition: none;
          `,`
        }
      `])),pn,K.colorTextSecondary,Gn?$(Un||(Un=_()([`
                z-index: 9999;
                right: `,`px;
              `])),yn?64:138):$(Tn||(Tn=_()([`
                right: `,`px;
              `])),Cn||yn?64:20)),loading:$(ee||(ee=_()([`
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
      `])),K.fontSizeSM,K.colorTextTertiary,Qn)}},{hashPriority:"low"}),xn=n(52676);function ln(){}var $n=function(d){var $,K=d.onChange,pn=d.enableOutline,En=d.width,Cn=d.height,rn=d.language,Gn=d.supportFullScreen,Wn=(0,t.useRef)(K),yn=hn("single",d),Qn=yn.isEditorReady,he=yn.focused,de=yn.loading,Xn=yn.containerRef,ie=yn.monacoRef,Ln=yn.editorRef,ce=yn.valueRef,re=(0,t.useRef)(),oe=an(Ln==null?void 0:Ln.current),Yn=oe.isFullScreen,ve=oe.fullScreen,me=Sn({isFullScreen:Yn,minimapEnabled:($=d.options)===null||$===void 0||($=$.minimap)===null||$===void 0?void 0:$.enabled}),ae=me.cx,_n=me.styles,Hn=ae(_n.base,d.className,{"ve-focused":he,"ve-outline":pn}),Mn=(0,t.useMemo)(function(){return{width:En,height:Cn}},[En,Cn]);return(0,t.useEffect)(function(){Wn.current=K},[K]),(0,t.useEffect)(function(){if(Qn){var cn,mn=Ln.current;(cn=re.current)===null||cn===void 0||cn.dispose(),re.current=mn==null?void 0:mn.onDidChangeModelContent(function(Fn){var Nn,Jn=mn==null||(Nn=mn.getModel())===null||Nn===void 0?void 0:Nn.getValue();if(ce.current!==Jn){var wn;(wn=Wn.current)===null||wn===void 0||wn.call(Wn,Jn,Fn)}})}},[Ln,Qn,re,ce]),(0,t.useEffect)(function(){return function(){var cn,mn,Fn,Nn=Ln.current;(cn=re.current)===null||cn===void 0||cn.dispose(),Nn==null||(mn=Nn.getModel())===null||mn===void 0||mn.dispose(),(Fn=Ln.current)===null||Fn===void 0||Fn.dispose()}},[Ln]),(0,t.useEffect)(function(){var cn;if(Qn){var mn=(cn=Ln.current)===null||cn===void 0?void 0:cn.getModel();if(mn){var Fn;(Fn=ie.current)===null||Fn===void 0||Fn.editor.setModelLanguage(mn,rn)}}},[Ln,Qn,rn,ie]),(0,xn.jsxs)("div",{className:Hn,style:d.style,children:[de&&(0,xn.jsx)("span",{className:ae(_n.loading,"loading"),children:z}),(0,xn.jsx)("div",{className:"react-monaco-editor-container",ref:Xn,style:Mn,children:Gn&&(0,xn.jsx)(a.ZP,{className:_n.fullScreenBtn,icon:(0,xn.jsx)(s.Z,{icon:Yn?i.Z:m.Z}),onClick:ve,size:"small",type:"text"})})]})},Bn=function(d){var $=d.enableOutline,K=d.width,pn=d.height,En=d.language,Cn=d.onChange,rn=d.original,Gn=d.supportFullScreen,Wn=(0,t.useRef)(Cn),yn=hn("diff",d),Qn=yn.isEditorReady,he=yn.focused,de=yn.loading,Xn=yn.containerRef,ie=yn.monacoRef,Ln=yn.editorRef,ce=yn.valueRef,re=an(),oe=re.isFullScreen,Yn=re.fullScreen,ve=Sn({isFullScreen:oe,diff:!0}),me=ve.cx,ae=ve.styles,_n=me(ae.base,d.className,{"ve-focused":he,"ve-outline":$}),Hn=(0,t.useMemo)(function(){return{width:K,height:pn}},[K,pn]);return(0,t.useEffect)(function(){Wn.current=Cn},[Cn]),(0,t.useEffect)(function(){var Mn;if(Qn){(Mn=Ln.current.getModel())===null||Mn===void 0||Mn.original.setValue(rn!=null?rn:"");var cn=Ln.current.getModel()||{},mn=cn.modified;mn==null||mn.onDidChangeContent(function(Fn){var Nn=mn.getValue();if(ce.current!==Nn){var Jn;(Jn=Wn.current)===null||Jn===void 0||Jn.call(Wn,Nn,Fn)}})}},[Ln,Qn,rn,ce]),(0,t.useEffect)(function(){return function(){var Mn,cn,mn;(Mn=Ln.current)===null||Mn===void 0||(Mn=Mn.getModel())===null||Mn===void 0||(Mn=Mn.original)===null||Mn===void 0||Mn.dispose(),(cn=Ln.current)===null||cn===void 0||(cn=cn.getModel())===null||cn===void 0||(cn=cn.modified)===null||cn===void 0||cn.dispose(),(mn=Ln.current)===null||mn===void 0||mn.dispose()}},[Ln]),(0,t.useEffect)(function(){var Mn,cn,mn;if(Qn){var Fn=((Mn=Ln.current)===null||Mn===void 0?void 0:Mn.getModel())||{},Nn=Fn.original,Jn=Fn.modified;(cn=ie.current)===null||cn===void 0||cn.editor.setModelLanguage(Nn,En),(mn=ie.current)===null||mn===void 0||mn.editor.setModelLanguage(Jn,En)}},[Ln,Qn,En,ie]),(0,xn.jsxs)("div",{className:_n,style:d.style,children:[de&&(0,xn.jsx)("span",{className:me(ae.loading,"loading"),children:z}),(0,xn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Xn,style:Hn,children:Gn&&(0,xn.jsx)(a.ZP,{className:ae.fullScreenBtn,icon:(0,xn.jsx)(s.Z,{icon:oe?i.Z:m.Z}),onClick:Yn,size:"small",type:"text"})})]})},Rn=Object.assign(Bn,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:p,editorDidMount:ln,editorWillMount:ln,onChange:ln,requireConfig:{}}}),zn=Object.assign($n,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:p,editorDidMount:ln,editorWillMount:ln,onChange:ln,requireConfig:{}},MonacoDiffEditor:Rn}),Vn=null,te=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],nn=["inlineView","options"],Kn=function(d){var $=d.type,K=$===void 0?"single":$,pn=d.editorDidMount,En=d.readOnly,Cn=En===void 0?!1:En,rn=d.lineNumbers,Gn=rn===void 0?"on":rn,Wn=d.wordWrap,yn=Wn===void 0?"off":Wn,Qn=d.contextmenu,he=Qn===void 0?!0:Qn,de=d.theme,Xn=d.minimapEnabled,ie=Xn===void 0?!1:Xn,Ln=d.version,ce=Ln===void 0?"0.45.0":Ln,re=d.requireConfig,oe=re===void 0?{}:re,Yn=d.options,ve=d.className,me=d.supportFullScreen,ae=W()(d,te),_n=(0,t.useRef)(pn);(0,t.useEffect)(function(){_n.current=pn},[pn]);var Hn=(0,B.r)(),Mn=Hn.isDarkMode,cn=(0,t.useMemo)(function(){return de||(Mn?"vs-dark":"vs")},[Mn,de]),mn=(0,t.useState)(),Fn=j()(mn,2),Nn=Fn[0],Jn=Fn[1],wn=(0,t.useCallback)(function(fe,ge){var Ee;Jn(ge),(Ee=_n.current)===null||Ee===void 0||Ee.call(_n,fe,ge)},[]),xe=(0,t.useMemo)(function(){var fe=Object.assign({},Yn,{readOnly:Cn,lineNumbers:Gn,wordWrap:yn,contextmenu:he,minimap:ie===void 0?Yn==null?void 0:Yn.minimap:Object.assign({},Yn==null?void 0:Yn.minimap,{enabled:ie})});return Nn==null||Nn.updateOptions(fe),fe},[Yn,Cn,Gn,yn,he,ie,Nn]),Se=(0,O.nc)(),be=(0,t.useMemo)(function(){return Object.assign({},oe,{paths:e()({vs:Se({path:"min/vs",pkg:"monaco-editor",version:ce})},oe.paths)})},[Se,oe,ce]);return K!=="diff"?(0,xn.jsx)(zn,e()({className:ve,editorDidMount:wn,options:xe,requireConfig:be,supportFullScreen:Nn&&me,theme:cn},ae)):(0,xn.jsx)(zn.MonacoDiffEditor,e()({className:ve,editorDidMount:wn,options:xe,requireConfig:be,supportFullScreen:Nn&&me,theme:cn},ae))},ue=function(d){return(0,xn.jsx)(Kn,e()(e()({},d),{},{type:"single"}))},Ae=function(d){var $=d.inlineView,K=$===void 0?"off":$,pn=d.options,En=W()(d,nn);return(0,xn.jsx)(Kn,e()(e()({options:Object.assign({useInlineViewWhenSpaceIsLimited:K==="on"||K==="auto",renderSideBySide:K==="off"||K==="auto"},pn)},En),{},{type:"diff"}))}},64521:function(In,Y,n){n.d(Y,{Y:function(){return E}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(20219),W=n(68988),B=n(75271),t=n(53649),O=n.n(t),s=n(47512),a,i,m,I,R=(0,s.kc)(function(L,P){var g=L.css,M=L.token,F=L.prefixCls,A=P.size,N=P.segmented,X=function(){return N?N!==!0?N.gap:!0:0}(),T=function(){if(N)return N!==!0?N.borderRadius:!0}(),sn=function(){var z={small:M.sizeSM,middle:M.size,large:M.sizeLG};return typeof X=="string"?z[X]:X===!0?A?z[A]:z.middle:X||0},U=function(){var z={small:M.controlHeightSM,middle:M.controlHeight,large:M.controlHeightLG};if(T===!0)return A?z[A]:z.middle;if(T||T===0)return T},V=U()&&g(a||(a=O()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),U()),H=g(i||(i=O()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),sn()),l=N===!0||N&&!N.bordered;return{custom:g(m||(m=O()([`
        `,`
        `,`
        `,`
      `])),V,H,l&&g(I||(I=O()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),F,F,M.colorPrimary))}},{hashPriority:"low"}),f=n(52676),b=["className"],E=S.ZP,D=function(P){var g=P.className,M=j()(P,b);M.segmented&&(M.optionType="button");var F=R(M),A=F.styles,N=F.cx;return(0,f.jsx)(W.Z,e()(e()({},M),{},{className:N(A.custom,g)}))};E.Group=D;var C=null},25777:function(In,Y,n){n.d(Y,{W:function(){return sn}});var k=n(26068),e=n.n(k),Q=n(15558),j=n.n(Q),S=n(48305),W=n.n(S),B=n(67825),t=n.n(B),O=n(80405),s=n(83293),a=n(44923),i=n(46847),m=n(82338),I=n(2405),R=n(75271),f=n(53649),b=n.n(f),E=n(47512),D,C,L,P,g,M=function(V){switch(V){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},F=(0,E.kc)(function(U,V){var H=U.css,l=U.token,G=U.prefixCls,z=V.disabled,p=V.size,un=M(p),bn=un.cardWidth;return{option:H(D||(D=b()([`
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
      `])),l.colorBorder,l.borderRadius,z?"not-allowed":"pointer",l.padding,l.motionDurationFast,bn,z&&H(C||(C=b()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),l.colorBgContainerDisabled,G,l.colorTextDisabled,G,l.colorTextDisabled),!z&&H(L||(L=b()([`
          &:hover {
            border-color: `,`;
          }
        `])),l.colorPrimaryBorderHover),G),optionSelected:H(P||(P=b()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),l.colorPrimary,l.colorPrimaryActive),check:H(g||(g=b()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),l.marginXS,l.marginXS,l.colorPrimary)}}),A=n(52676),N=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],X=s.Z.Text,T=s.Z.Paragraph,sn=R.forwardRef(function(U,V){var H=U.defaultValue,l=U.value,G=U.onChange,z=U.multiple,p=z===void 0?!1:z,un=U.disabled,bn=un===void 0?!1:un,tn=U.options,hn=tn===void 0?[]:tn,an=U.classNames,y=U.styles,_=U.size,dn=_===void 0?"middle":_,J=U.optionRender,vn=t()(U,N),jn=(0,R.useMemo)(function(){return hn.some(function(nn){return!!nn.img||!!nn.icon})},[hn]),On=F({disabled:bn,size:dn}),Un=On.cx,Tn=On.styles,ee=(0,R.useMemo)(function(){return M(dn)},[dn]),Sn=ee.imgHeight,xn=(0,R.useCallback)(function(nn){return!p||Array.isArray(nn)?nn:nn===void 0?[]:[nn]},[p]),ln=(0,I.C8)(xn(H),{defaultValue:xn(H),value:l,onChange:G}),$n=W()(ln,2),Bn=$n[0],Rn=$n[1],zn=(0,R.useCallback)(function(nn){if(!bn){if(!p){Rn(nn);return}if(Bn.includes(nn)){Rn(Bn.filter(function(Kn){return Kn!==nn}));return}Rn([].concat(j()(Bn),[nn]))}},[Bn,bn,p,Rn]),Vn=(0,R.useCallback)(function(nn){return p?Bn.includes(nn):Bn===nn},[Bn,p]),te=(0,R.useCallback)(function(nn,Kn){var ue=Vn(nn.value),Ae=(0,A.jsxs)(a.Z,{align:jn?"center":"flex-start",className:Un(Tn.option,ue&&Tn.optionSelected,an==null?void 0:an.card),gap:"small",onClick:function(){return zn(nn.value)},style:e()(e()({},y==null?void 0:y.card),nn.style),vertical:!0,children:[jn&&(0,A.jsx)(i.C,{className:an==null?void 0:an.icon,icon:nn.icon,shape:"square",size:Sn,src:nn.img,style:e()(e()({},y==null?void 0:y.icon),nn.iconStyle)}),nn.label&&ue&&(0,A.jsx)(X,{ellipsis:!0,strong:!0,children:nn.label}),nn.label&&!ue&&(0,A.jsx)(X,{ellipsis:!0,children:nn.label}),!jn&&nn.description&&(0,A.jsx)(T,{ellipsis:{rows:2},type:"secondary",children:nn.description}),ue&&(0,A.jsx)(O.Z,{className:Tn.check,icon:m.Z})]},nn.value);return J?J(Ae,nn,Kn):Ae},[an==null?void 0:an.card,an==null?void 0:an.icon,Un,Sn,jn,Vn,zn,J,Tn.check,Tn.option,Tn.optionSelected,y==null?void 0:y.card,y==null?void 0:y.icon]);return(0,A.jsx)(a.Z,e()(e()({gap:"large",ref:V,wrap:!0},vn),{},{children:hn.map(function(nn,Kn){return te(nn,Kn)})}))})},66269:function(In,Y,n){n.d(Y,{a:function(){return a}});var k=n(26068),e=n.n(k),Q=n(48305),j=n.n(Q),S=n(26582),W=n(68526),B=n(27896),t=n(96965),O=n(75271),s=n(52676),a=function(m){var I=m.value,R=m.defaultValue,f=m.min,b=f===void 0?0:f,E=m.max,D=m.step,C=m.gutter,L=C===void 0?16:C,P=m.sliderCol,g=P===void 0?{span:12}:P,M=m.inputCol,F=M===void 0?{span:5}:M,A=m.addonAfter,N=m.addonBefore,X=m.placeholder,T=m.onChange,sn=m.style,U=m.className,V=m.sliderProps,H=V===void 0?{}:V,l=m.inputProps,G=l===void 0?{}:l,z=(0,O.useState)(),p=j()(z,2),un=p[0],bn=p[1],tn=function(an){Number.isNaN(an)||(bn(an),T==null||T(an))};return(0,s.jsxs)(S.Z,{className:U,gutter:L,style:sn,children:[(0,s.jsx)(W.Z,e()(e()({},g),{},{children:(0,s.jsx)(B.Z,e()(e()({},H),{},{defaultValue:R,max:E,min:b,onChange:tn,step:D,value:I!=null?I:un}))})),(0,s.jsx)(W.Z,e()(e()({},F),{},{children:(0,s.jsx)(t.Z,e()(e()({},G),{},{addonAfter:A,addonBefore:N,defaultValue:R,max:E,min:b,onChange:tn,placeholder:X,step:D,value:I!=null?I:un}))}))]})}},56482:function(In,Y,n){n.d(Y,{N:function(){return R}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(97912),W=n(75271),B=n(79213),t=n(53649),O=n.n(t),s=n(47512),a,i=(0,s.kc)(function(f){var b=f.css,E=f.token,D=f.prefixCls;return{table:b(a||(a=O()([`
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
    `])),D,E.colorTextTertiary)}}),m=n(52676),I=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],R=function(b){var E=b.rootStyle,D=b.rootClassName,C=b.icon,L=b.title,P=b.variant,g=b.defaultActive,M=b.extra,F=b.className,A=j()(b,I),N=i(),X=N.cx,T=N.styles;return(0,m.jsx)(B.w,{className:D,style:E,icon:C,title:L,variant:P,defaultActive:g,extra:M,children:(0,m.jsx)(S.Z,e()({className:X(T.table,F),pagination:!1,rowHoverable:!1,size:"small"},A))})}},11546:function(In,Y,n){n.d(Y,{NU:function(){return t.N},iA:function(){return a}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(56995),W=n(97912),B=n(75271),t=n(56482),O=n(52676),s=["columns"],a=function(I){var R=I.columns,f=j()(I,s),b=(0,B.useMemo)(function(){return R==null?void 0:R.map(function(E){if(E.render)return E;if(E.ellipsis&&E.ellipsis!==!0&&E.ellipsis.showTitle||E.ellipsis===!0){var D=E.ellipsis===!0?{}:E.ellipsis;return e()(e()({},E),{},{ellipsis:{showTitle:!1},render:function(L){return L||L===0?(0,O.jsx)(S.Z,e()(e()({},D),{},{placement:"topLeft",title:L,children:L})):"-"}})}return E.render||(E.render=function(C){return C!=null?C:"-"}),E})},[R]);return(0,O.jsx)(W.Z,e()(e()({},f),{},{columns:b}))};a.displayName="Table",a.SELECTION_COLUMN=W.Z.SELECTION_COLUMN,a.EXPAND_COLUMN=W.Z.EXPAND_COLUMN,a.SELECTION_ALL=W.Z.SELECTION_ALL,a.SELECTION_INVERT=W.Z.SELECTION_INVERT,a.SELECTION_NONE=W.Z.SELECTION_NONE,a.Column=W.Z.Column,a.ColumnGroup=W.Z.ColumnGroup,a.Summary=W.Z.Summary,a.Collapse=t.N;var i=null},8559:function(In,Y,n){n.d(Y,{G:function(){return R}});var k=n(53649),e=n.n(k),Q=n(47512),j=n(75271),S=n(52676),W,B,t,O,s,a,i,m,I=(0,Q.kc)(function(f,b){var E=f.css,D=(0,Q.F4)(W||(W=e()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),C=(0,Q.F4)(B||(B=e()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),L=(0,Q.F4)(t||(t=e()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:E(O||(O=e()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),b.width||34,b.height||22,b.bgColor||"transparent"),line:E(s||(s=e()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),b.lineColor||"#000"),animate1:E(a||(a=e()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),D),animate2:E(i||(i=e()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),C),animate3:E(m||(m=e()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),L)}}),R=function(b){var E=b.height,D=b.width,C=b.lineColor,L=b.bgColor,P=I({height:E,width:D,lineColor:C,bgColor:L}),g=P.styles,M=P.cx;return(0,S.jsxs)("div",{className:g.box,children:[(0,S.jsx)("div",{className:M(g.line,g.animate1)}),(0,S.jsx)("div",{className:M(g.line,g.animate2)}),(0,S.jsx)("div",{className:M(g.line,g.animate3)}),(0,S.jsx)("div",{className:M(g.line,g.animate2)}),(0,S.jsx)("div",{className:M(g.line,g.animate1)}),(0,S.jsx)("div",{className:M(g.line,g.animate2)}),(0,S.jsx)("div",{className:M(g.line,g.animate1)})]})}},71983:function(In,Y,n){n.r(Y),n.d(Y,{Affix:function(){return vn.Z},Alert:function(){return I.b},Anchor:function(){return jn.Z},AntdMentions:function(){return On.Z},App:function(){return R.g},AudioPlayer:function(){return fn.Z},AutoComplete:function(){return Un.Z},Avatar:function(){return Tn.C},BackTop:function(){return ee.Z},Badge:function(){return Sn.Z},BaseMonacoEditor:function(){return t.ZM},Breadcrumb:function(){return f.Z},Button:function(){return xn.ZP},ButtonGroup:function(){return k.h},Calendar:function(){return ln.Z},Card:function(){return b.Z},Carousel:function(){return $n.Z},Cascader:function(){return Bn.Z},ChatInputActionBar:function(){return sn.Z},ChatInputArea:function(){return T.Z},ChatInputAreaInner:function(){return U.Z},ChatItem:function(){return G.z},ChatSendButton:function(){return V.Z},Checkbox:function(){return Rn.Z},Col:function(){return zn.Z},Collapse:function(){return Vn.Z},CollapseGroup:function(){return e.w},CollapseTable:function(){return N.NU},ColorPicker:function(){return te.Z},ConfigContext:function(){return Q.E_},ConfigProvider:function(){return Q.iV},DatePicker:function(){return nn.default},Descriptions:function(){return E.w},Divider:function(){return D.i},DragPanel:function(){return j.U},Drawer:function(){return C.d},Dropdown:function(){return L.L},EditableMessage:function(){return z.i},Empty:function(){return Kn.Z},Flex:function(){return ue.Z},FloatButton:function(){return Ae.Z},Form:function(){return P.l},FormCollapseList:function(){return P.E},FormHelper:function(){return g.wK},FullFeaturedHighlighter:function(){return p.EL},Grid:function(){return en.ZP},Highlighter:function(){return p.oP},Image:function(){return d.Z},Input:function(){return $.Z},InputNumber:function(){return K.Z},Layout:function(){return pn.Z},List:function(){return En.Z},LogViewer:function(){return W.n},Logo:function(){return S.T},Markdown:function(){return Ee.Z},Mentions:function(){return B.o},Menu:function(){return Cn.Z},MobileChatInputArea:function(){return H.Z},MobileChatSendButton:function(){return l.Z},Modal:function(){return M.u},MonacoController:function(){return t.Hu},MonacoDiffEditor:function(){return t.Xq},MonacoEditor:function(){return t.rE},NotificationGlobalStyle:function(){return F.EZ},Page:function(){return O.T},Pagination:function(){return Gn.Z},Popconfirm:function(){return Wn.Z},Popover:function(){return yn.Z},ProCard:function(){return s.Q},Progress:function(){return Qn.Z},QRCode:function(){return he.Z},Radio:function(){return A.Y},Rate:function(){return de.Z},Result:function(){return Xn.ZP},Row:function(){return ie.Z},Segmented:function(){return Ln.Z},Select:function(){return ce.default},SelectCard:function(){return a.W},Skeleton:function(){return re.Z},Slider:function(){return oe.Z},SliderInput:function(){return i.a},Space:function(){return Yn.Z},SpeechSynthesisTTS:function(){return Pe.H},Spin:function(){return ve.Z},Statistic:function(){return me.Z},Status:function(){return m.q},Steps:function(){return ae.Z},Switch:function(){return _n.Z},SyntaxHighlighter:function(){return Oe.Z},Table:function(){return N.iA},Tabs:function(){return Hn.Z},Tag:function(){return Mn.Z},TimePicker:function(){return Fn.Z},Timeline:function(){return mn.Z},Tooltip:function(){return Nn.Z},Tour:function(){return Jn.Z},Transfer:function(){return wn.Z},Tree:function(){return xe.Z},TreeSelect:function(){return Se.Z},Typography:function(){return X.Z},Upload:function(){return be.Z},Watermark:function(){return ge.Z},WaveformIcon:function(){return J.G},colorScales:function(){return un._},colors:function(){return un._},generateColorNeutralPalette:function(){return y},generateColorPalette:function(){return an},message:function(){return rn.ZP},neutralColorScales:function(){return _},notification:function(){return F.t6},theme:function(){return cn.Z},useAudioPlayer:function(){return le.x},useAutoFocus:function(){return g.wL},useCdnFn:function(){return Q.nc},useLink:function(){return Q.nB},useResponsive:function(){return gn.F},useSpeechRecognition:function(){return se.x},useSpeechSynthes:function(){return dn.J},useTheme:function(){return x.Fg},useThemeMode:function(){return u.r},version:function(){return fe.Z},withFormHelper:function(){return g.MX}});var k=n(12644),e=n(79213),Q=n(94456),j=n(13306),S=n(52625),W=n(25969),B=n(48355),t=n(81321),O=n(40305),s=n(86346),a=n(25777),i=n(66269),m=n(46119),I=n(58479),R=n(5244),f=n(77789),b=n(39824),E=n(26345),D=n(82227),C=n(5795),L=n(99512),P=n(62719),g=n(20147),M=n(97527),F=n(40130),A=n(64521),N=n(11546),X=n(94729),T=n(52412),sn=n(70554),U=n(9130),V=n(53924),H=n(51885),l=n(32966),G=n(92436),z=n(99335),p=n(17853),un=n(15094),bn=n(82092),tn=n.n(bn),hn=n(98644),an=function(o){var h=o.type,r=o.scale,v=o.appearance,Z=(0,hn.Z)(h),w=v==="dark";return tn()(tn()(tn()(tn()(tn()(tn()(tn()(tn()(tn()(tn()({},"color".concat(Z,"Bg"),r[v][1]),"color".concat(Z,"BgHover"),r[v][2]),"color".concat(Z,"Border"),r[v][4]),"color".concat(Z,"BorderHover"),r[v][w?5:3]),"color".concat(Z,"Hover"),r[v][w?10:8]),"color".concat(Z),r[v][9]),"color".concat(Z,"Active"),r[v][w?7:10]),"color".concat(Z,"TextHover"),r[v][w?10:8]),"color".concat(Z,"Text"),r[v][9]),"color".concat(Z,"TextActive"),r[v][w?7:10])},y=function(o){var h=o.scale,r=o.appearance;return{colorBgContainer:r==="dark"?h[r][1]:h[r][0],colorBgElevated:r==="dark"?h[r][2]:h[r][0],colorBgLayout:r==="dark"?h[r][0]:h[r][1],colorBgMask:h.lightA[8],colorBgSpotlight:h[r][5],colorBorder:h[r][4],colorBorderSecondary:h[r][3],colorFill:h["".concat(r,"A")][3],colorFillQuaternary:h["".concat(r,"A")][0],colorFillSecondary:h["".concat(r,"A")][2],colorFillTertiary:h["".concat(r,"A")][1],colorText:h[r][12],colorTextQuaternary:h[r][6],colorTextSecondary:h[r][10],colorTextTertiary:h[r][8]}},_={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},dn=n(82846),J=n(8559),vn=n(7904),jn=n(58190),On=n(46621),Un=n(85958),Tn=n(46847),ee=n(66075),Sn=n(1088),xn=n(71170),ln=n(3957),$n=n(57512),Bn=n(52279),Rn=n(43584),zn=n(68526),Vn=n(90026),te=n(64479),nn=n(1409),Kn=n(78962),ue=n(44923),Ae=n(6697),en=n(82366),d=n(69414),$=n(99707),K=n(96965),pn=n(93702),En=n(78104),Cn=n(74032),rn=n(57939),Gn=n(4211),Wn=n(45590),yn=n(31997),Qn=n(35357),he=n(82830),de=n(76177),Xn=n(46504),ie=n(26582),Ln=n(13927),ce=n(35092),re=n(99021),oe=n(27896),Yn=n(43356),ve=n(49553),me=n(43954),ae=n(59470),_n=n(74798),Hn=n(60756),Mn=n(53453),cn=n(22972),mn=n(46141),Fn=n(20907),Nn=n(56995),Jn=n(33858),wn=n(96208),xe=n(64287),Se=n(6036),be=n(72023),fe=n(38208),ge=n(55366),Ee=n(87803),Oe=n(27299),Pe=n(92973),fn=n(92848),le=n(77814),se=n(5411),gn=n(81134),x=n(47512),u=n(33592)},40130:function(In,Y,n){n.d(Y,{EZ:function(){return b.E},t6:function(){return U}});var k=n(26068),e=n.n(k),Q=n(67825),j=n.n(Q),S=n(48305),W=n.n(S),B=n(335),t=n.n(B),O=n(30657),s=n(19728),a=n(22620),i=n(90026),m=n(83293),I=n(98943),R=n(75271),f=n(52676),b=n(55300),E=["detail","message","description","onClose","className"],D=i.Z.Panel,C=m.Z.Link,L=m.Z.Paragraph,P=m.Z.Text,g={},M=function(l,G){g[l]||(g[l]=[]),g[l].push(G)},F=function(l){delete g[l]},A=function H(l){var G="";if(typeof l=="string")G=l;else if(typeof l=="number")G=l.toString();else if(Array.isArray(l)){var z=t()(l),p;try{for(z.s();!(p=z.n()).done;){var un=p.value;G+=H(un)}}catch(bn){z.e(bn)}finally{z.f()}}else(0,R.isValidElement)(l)&&(G+=H(l.props.children));return G},N=function(l){var G,z=l.noticeKey,p=l.message,un=((G=g[z])===null||G===void 0?void 0:G.length)||0;return(0,f.jsxs)(f.Fragment,{children:[p,un>1&&" (".concat(un,")")]})},X=function(l){var G=l.noticeKey,z=(0,R.useState)(),p=W()(z,2),un=p[0],bn=p[1],tn={},hn=t()(g[G]),an;try{for(hn.s();!(an=hn.n()).done;){var y=an.value,_=A(y.description);y.descKey=_,tn[_]=y}}catch(dn){hn.e(dn)}finally{hn.f()}return(0,f.jsx)(i.Z,{accordion:!0,activeKey:un,className:"yunti-notification-collapse",expandIcon:function(J){var vn=J.isActive;return(0,f.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:vn?(0,f.jsx)(C,{className:"yunti-notification-link",children:(0,f.jsx)(O.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,f.jsx)(s.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(J){bn(J)},children:Object.values(tn).map(function(dn){var J=dn.descKey,vn=dn.description,jn=dn.detail;return(0,f.jsx)(D,{header:(0,f.jsx)(P,{ellipsis:{tooltip:!1},style:{width:250},children:vn}),children:(0,f.jsx)(L,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(jn,null,2)},type:"secondary",children:(0,f.jsx)("pre",{children:JSON.stringify(jn,null,2)})})},J)})})},T=function(l){var G=l.detail,z=l.message,p=l.description,un=l.onClose,bn=l.className,tn=j()(l,E),hn=A(z);M(hn,l);var an=function(){un==null||un(),F(hn)};return l.type==="warning"&&!l.icon&&(tn.icon=(0,f.jsx)(a.Z,{style:{color:"#ff7d00"}})),G?I.ZP.open(e()({key:hn,message:(0,f.jsx)(N,{message:z,noticeKey:hn}),description:(0,f.jsx)(X,{noticeKey:hn}),onClose:an,className:"yunti-notification ".concat(bn)},tn)):I.ZP.open(e()({key:hn,message:(0,f.jsx)(N,{message:z,noticeKey:hn}),description:p,onClose:an,className:"yunti-notification ".concat(bn)},tn))},sn=function(l){var G;if(((l==null||(G=l.errors)===null||G===void 0?void 0:G.length)||0)>0){l!=null&&l.errors;var z=t()((l==null?void 0:l.errors)||[]),p;try{for(z.s();!(p=z.n()).done;){var un=p.value;T(e()(e()({detail:un,description:un.message},l),{},{type:"warning"}))}}catch(bn){z.e(bn)}finally{z.f()}}else T(e()(e()({},l),{},{type:"warning"}))},U=e()(e()({},I.ZP),{},{success:function(l){return T(e()(e()({},l),{},{type:"success"}))},info:function(l){return T(e()(e()({},l),{},{type:"info"}))},warning:function(l){return T(e()(e()({},l),{},{type:"warning"}))},warn:function(l){return T(e()(e()({},l),{},{type:"warning"}))},error:function(l){return T(e()(e()({},l),{},{type:"error"}))},warnings:sn,warns:sn}),V=null},55300:function(In,Y,n){n.d(Y,{E:function(){return W}});var k=n(53649),e=n.n(k),Q=n(98943),j=n(47512),S,W=(0,j.vJ)(S||(S=e()([`
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
`])),function(B){var t=B.theme;return"".concat(t==null?void 0:t.colorPrimary," !important")},function(B){var t=B.theme;return"".concat(t==null?void 0:t.colorPrimaryHover," !important")},function(B){var t=B.theme;return t==null?void 0:t.colorPrimary},function(B){var t=B.theme;return"".concat(t==null?void 0:t.colorPrimary," !important")},function(B){var t=B.theme;return"".concat(t==null?void 0:t.colorPrimaryHover," !important")},function(B){var t=B.theme,O=t||{},s=O.prefixCls;return Q.ZP.config({prefixCls:s}),`
      .`.concat(s,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(s,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(In,Y,n){n.d(Y,{j:function(){return k}});var k=typeof window!="undefined"}}]);
