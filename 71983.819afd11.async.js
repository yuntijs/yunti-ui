"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(In,w,n){n.d(w,{b:function(){return Z}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(21153),W=n(75271),B=n(53649),t=n.n(B),j=n(47512),u,i=(0,j.kc)(function(f,y){var b=f.css,D=y.bordered,E=D===void 0?"dashed":D;return{custom:b(u||(u=t()([`
        border-style: `,` !important;
      `])),E)}},{hashPriority:"low"}),l=n(52676),m=["bordered","className"],Z=function(y){var b=y.bordered,D=b===void 0?"dashed":b,E=y.className,S=L()(y,m),O=i({bordered:D}),g=O.styles,C=O.cx;return(0,l.jsx)(A.Z,e()(e()({},S),{},{className:C(g.custom,E)}))};Z.ErrorBoundary=A.Z.ErrorBoundary;var R=null},5244:function(In,w,n){n.d(w,{g:function(){return u}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(23878),W=n(75271),B=n(55300),t=n(52676),j=["children"],u=function(m){var Z=m.children,R=L()(m,j);return(0,t.jsxs)(A.Z,e()(e()({},R),{},{children:[(0,t.jsx)(B.E,{}),Z]}))};u.useApp=A.Z.useApp;var i=null},52412:function(In,w,n){var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(53649),W=n.n(A),B=n(62579),t=n(51874),j=n(47512),u=n(75271),i=n(52676),l=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],m,Z,R,f=(0,j.kc)(function(b){var D=b.css;return{container:D(m||(m=W()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:D(Z||(Z=W()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:D(R||(R=W()([`
      position: relative;
      flex: 1;
    `])))}}),y=(0,u.forwardRef)(function(b,D){var E=b.className,S=b.style,O=b.classNames,g=b.expand,C=g===void 0?!0:g,F=b.setExpand,M=b.bottomAddons,T=b.topAddons,J=b.onSizeChange,P=b.heights,sn=b.onSend,U=L()(b,l),G=f(),$=G.styles;return(0,i.jsx)(B.Z,{className:E,classNames:O,fullscreen:C,headerHeight:P==null?void 0:P.headerHeight,maxHeight:P==null?void 0:P.maxHeight,minHeight:P==null?void 0:P.minHeight,onSizeChange:J,placement:"bottom",size:{height:P==null?void 0:P.inputHeight,width:"100%"},style:e()({zIndex:10},S),children:(0,i.jsxs)("section",{className:$.container,style:{minHeight:P==null?void 0:P.minHeight},children:[T,(0,i.jsx)("div",{className:$.textareaContainer,children:(0,i.jsx)(t.Z,e()({className:$.textarea,onSend:function(){sn==null||sn(),F==null||F(!1)},ref:D,type:"pure"},U))}),M]})})});w.Z=(0,u.memo)(y)},92436:function(In,w,n){n.d(w,{z:function(){return an}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(59171),W=n(10581),B=n(93955),t=n(81262),j=n(9192),u=n(75061),i=n(81134),l=n(75271),m=n(90142),Z=n(99335),R=n(53649),f=n.n(R),y=n(47512),b,D,E,S,O,g,C,F,M,T,J,P,sn,U,G,$,s,X,z=(0,y.kc)(function(x,q){var dn=x.cx,k=x.css,vn=x.token,jn=x.isDarkMode,On=x.responsive,Un=q.placement,Tn=q.type,ee=q.title,Sn=q.primary,xn=q.avatarSize,ln=q.editing,$n=q.time,Bn=k(b||(b=f()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Sn?jn?vn.colorFill:vn.colorBgElevated:jn?vn.colorFillSecondary:vn.colorBgContainer,vn.borderRadiusLG,vn.motionEaseOut),Rn=k(D||(D=f()([`
      padding-block-start: `,`;
    `])),ee?0:"6px"),zn=k(E||(E=f()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),vn.motionEaseOut),Vn=Tn==="block"?Bn:Rn,te=ln&&k(S||(S=f()([`
        width: 100%;
      `])));return{actions:dn(k(O||(O=f()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),Tn==="block"?"flex-end":Un==="left"?"flex-start":"flex-end",Un==="left"?"flex-end":"flex-start"),ln&&k(g||(g=f()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:k(C||(C=f()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),xn,xn),avatarGroupContainer:k(F||(F=f()([`
        width: `,`px;
      `])),xn),container:dn(Tn==="pure"&&zn,k(M||(M=f()([`
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
        `])),vn.motionEaseOut,On.mobile,Tn==="pure"?"12px":"6px")),editingContainer:dn(te,k(T||(T=f()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),vn.colorBorderSecondary,vn.colorBorder),Tn==="pure"&&k(J||(J=f()([`
            background: `,`;
            border-radius: `,`px;
          `])),vn.colorFillQuaternary,vn.borderRadius)),editingInput:k(P||(P=f()([`
        width: 100%;
      `]))),errorContainer:k(sn||(sn=f()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:k(U||(U=f()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),Un==="right"?"-4px":"unset",Un==="left"?"-4px":"unset",vn.colorBgLayout,vn.colorPrimary),message:dn(Vn,k(G||(G=f()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),On.mobile)),messageContainer:dn(te,k($||($=f()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),$n?-16:0,On.mobile)),messageContent:dn(te,k(s||(s=f()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),On.mobile)),messageExtra:dn("message-extra"),name:k(X||(X=f()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),vn.colorTextDescription,Un==="left"?"left":"right")}}),p=n(52676),un=(0,l.memo)(function(x){var q=x.editing,dn=x.onChange,k=x.onEditingChange,vn=x.text,jn=x.message,On=x.placement,Un=x.messageExtra,Tn=x.renderMessage,ee=x.type,Sn=x.primary,xn=x.onDoubleClick,ln=x.fontSize,$n=x.markdownProps,Bn=x.markdownClassname,Rn=z({editing:q,placement:On,primary:Sn,type:ee}),zn=Rn.cx,Vn=Rn.styles,te=(0,i.F)(),nn=te.mobile,Kn=(0,p.jsx)(Z.i,{classNames:{input:Vn.editingInput,markdown:Bn},editButtonSize:"small",editing:q,fontSize:ln,fullFeaturedCodeBlock:!0,markdownProps:$n,onChange:dn,onEditingChange:k,openModal:nn?q:void 0,text:vn,value:jn?String(jn).trim():""}),ue=Tn?Tn(Kn):Kn;return(0,p.jsxs)(m.D,{className:zn(Vn.message,q&&Vn.editingContainer),onDoubleClick:xn,children:[ue,Un&&!q?(0,p.jsx)("div",{className:Vn.messageExtra,children:Un}):null]})}),bn=un,tn=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname"],hn=32,an=(0,l.memo)(function(x){var q=x.avatarAddon,dn=x.onAvatarClick,k=x.avatarProps,vn=x.actions,jn=x.className,On=x.primary,Un=x.loading,Tn=x.message,ee=x.placement,Sn=ee===void 0?"left":ee,xn=x.type,ln=xn===void 0?"block":xn,$n=x.avatar,Bn=x.error,Rn=x.showTitle,zn=x.time,Vn=x.editing,te=x.onChange,nn=x.onEditingChange,Kn=x.messageExtra,ue=x.renderMessage,Ae=x.text,en=x.errorMessage,c=x.onDoubleClick,V=x.fontSize,K=x.markdownProps,pn=x.markdownClassname,En=L()(x,tn),Cn=(0,i.F)(),rn=Cn.mobile,Gn=(0,u.y)({editing:Vn,placement:Sn,primary:On,showTitle:Rn,time:zn,title:$n.title,type:ln}),Wn=Gn.cx,yn=Gn.styles;return(0,p.jsxs)(m.D,e()(e()({className:Wn(yn.container,jn),direction:Sn==="left"?"horizontal":"horizontal-reverse",gap:rn?6:12},En),{},{children:[(0,p.jsx)(W.Z,e()(e()({},k),{},{addon:q,avatar:$n,loading:Un,onClick:dn,placement:Sn,size:rn?hn:void 0})),(0,p.jsxs)(m.D,{align:Sn==="left"?"flex-start":"flex-end",className:yn.messageContainer,children:[(0,p.jsx)(j.Z,{avatar:$n,placement:Sn,showTitle:Rn,time:zn}),(0,p.jsxs)(m.D,{align:Sn==="left"?"flex-start":"flex-end",className:yn.messageContent,direction:ln==="block"?Sn==="left"?"horizontal":"horizontal-reverse":"vertical",gap:8,children:[Bn?(0,p.jsx)(t.Z,{error:Bn,message:en,placement:Sn}):(0,p.jsx)(bn,{editing:Vn,fontSize:V,markdownClassname:pn,markdownProps:K,message:Tn,messageExtra:Kn,onChange:te,onDoubleClick:c,onEditingChange:nn,placement:Sn,primary:On,renderMessage:ue,text:Ae,type:ln}),(0,p.jsx)(A.Z,{actions:vn,editing:Vn,placement:Sn,type:ln})]})]}),rn&&ln==="block"&&(0,p.jsx)(B.Z,{borderSpacing:hn})]}))})},13306:function(In,w,n){n.d(w,{U:function(){return F}});var _=n(26068),e=n.n(_),H=n(48305),L=n.n(H),A=n(67825),W=n.n(A),B=n(97157),t=n(86818),j=n(44923),u=n(71170),i=n(75271),l=n(84569),m=n.n(l),Z=n(53649),R=n.n(Z),f=n(47512),y,b,D,E,S,O=(0,f.kc)(function(M){var T=M.css,J=M.token,P=M.prefixCls;return{root:T(y||(y=R()([`
      overflow: hidden;
    `]))),wrapper:T(b||(b=R()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),J.marginLG),content:T(D||(D=R()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),J.borderRadiusLG,J.boxShadowSecondary),dragWrapper:T(E||(E=R()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:T(S||(S=R()([`
      cursor: move;
    `])))}}),g=n(52676),C=["title","classNames","defaultPosition","onPositionChange"],F=(0,i.memo)(function(M){var T=M.title,J=M.classNames,P=J===void 0?{}:J,sn=M.defaultPosition,U=M.onPositionChange,G=W()(M,C),$=O(),s=$.styles,X=$.cx,z=(0,i.useState)({left:0,top:0,bottom:0,right:0}),p=L()(z,2),un=p[0],bn=p[1],tn=(0,i.useRef)(null),hn=function(x,q){var dn,k=window.document.documentElement,vn=k.clientWidth,jn=k.clientHeight,On=(dn=tn.current)===null||dn===void 0?void 0:dn.getBoundingClientRect();On&&bn({left:-On.left+q.x,right:vn-(On.right-q.x),top:-On.top+q.y,bottom:jn-(On.bottom-q.y)})};return(0,g.jsx)(t.Z,e()(e()({},G),{},{classNames:e()(e()({},P),{},{wrapper:X(s.wrapper,P.wrapper),content:X(s.content,P.content)}),destroyOnClose:!0,drawerRender:function(x){return(0,g.jsx)(m(),{bounds:un,defaultPosition:sn,handle:".".concat(s.dragHandle),nodeRef:tn,onStart:function(dn,k){return hn(dn,k)},onStop:function(dn,k){U==null||U({x:k.x,y:k.y})},children:(0,g.jsx)("div",{className:s.dragWrapper,ref:tn,children:x})})},mask:!1,rootClassName:s.root,title:(0,g.jsxs)(j.Z,{align:"center",className:s.dragHandle,children:[(0,g.jsx)(j.Z,{flex:2,children:T}),(0,g.jsx)(j.Z,{children:(0,g.jsx)(u.ZP,{className:s.dragHandle,icon:(0,g.jsx)(B.Z,{}),type:"text"})})]})}))})},5795:function(In,w,n){n.d(w,{d:function(){return f}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(86818),W=n(75271),B=n(53649),t=n.n(B),j=n(47512),u,i,l,m=(0,j.kc)(function(b,D){var E=b.css,S=b.prefixCls,O=D.closeIcon,g=D.closeIconPlacement,C=D.extra,F=E(u||(u=t()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),S,S,!(O===null||O===!1)&&E(i||(i=t()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),S));return{custom:E(l||(l=t()([`
        `,`
      `])),(!g||g==="right"||g==="auto"&&!C)&&F)}},{hashPriority:"low"}),Z=n(52676),R=["className"],f=function(D){var E=D.className,S=L()(D,R),O=m(S),g=O.styles,C=O.cx;return(0,Z.jsx)(A.Z,e()(e()({},S),{},{className:C(g.custom,E)}))},y=null},99512:function(In,w,n){n.d(w,{L:function(){return D}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(44923),W=n(5053),B=n(75271),t=n(53649),j=n.n(t),u=n(47512),i,l,m,Z,R=(0,u.kc)(function(E,S){var O=E.css,g=E.token,C=S.divider,F=S.position;return{menuWrapper:O(i||(i=j()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),g.colorBgElevated,g.borderRadiusLG,g.boxShadowSecondary),menuExtra:O(l||(l=j()([`
        padding: 10px 16px 4px;
        `,`
      `])),C&&O(F==="top"?m||(m=j()([`
              border-bottom: 1px solid `,`;
            `])):Z||(Z=j()([`
              border-top: 1px solid `,`;
            `])),g.colorSplit))}}),f=n(52676),y=["menuExtra","dropdownRender"],b=function(S){var O=S.menuExtra,g=S.dropdownRender,C=L()(S,y),F=O||{},M=F.position,T=M===void 0?"top":M,J=F.divider,P=J===void 0?!1:J,sn=F.content,U=R({divider:P,position:T}),G=U.styles,$=(0,B.useCallback)(function(s){var X=B.cloneElement(s,{style:{boxShadow:"none",border:"none"}});if(!sn)return g?(0,f.jsx)(A.Z,{className:G.menuWrapper,vertical:!0,children:g(X)}):s;var z=(0,f.jsx)(A.Z,{align:"center",className:G.menuExtra,children:sn});return(0,f.jsxs)(A.Z,{className:G.menuWrapper,vertical:!0,children:[T==="top"&&z,X,T==="bottom"&&z]})},[sn,g,T,G.menuExtra,G.menuWrapper]);return(0,f.jsx)(W.Z,e()({dropdownRender:$},C))},D=b;D.Button=W.Z.Button},99335:function(In,w,n){n.d(w,{i:function(){return i}});var _=n(26068),e=n.n(_),H=n(48305),L=n.n(H),A=n(14252),W=n(85814),B=n(54285),t=n(75271),j=n(65720),u=n(52676),i=(0,t.memo)(function(l){var m=l.value,Z=l.onChange,R=l.classNames,f=R===void 0?{}:R,y=l.onEditingChange,b=l.editing,D=l.openModal,E=l.onOpenChange,S=l.placeholder,O=l.showEditWhenEmpty,g=O===void 0?!1:O,C=l.styles,F=l.height,M=l.inputType,T=l.editButtonSize,J=l.text,P=l.fullFeaturedCodeBlock,sn=l.model,U=l.fontSize,G=l.markdownProps,$=(0,j.Z)(!1,{onChange:y,value:b}),s=L()($,2),X=s[0],z=s[1],p=(0,j.Z)(!1,{onChange:E,value:D}),un=L()(p,2),bn=un[0],tn=un[1],hn=F==="auto",an=(0,u.jsx)(A.Z,{className:f==null?void 0:f.input,classNames:{textarea:f==null?void 0:f.textarea},defaultValue:m,editButtonSize:T,height:F,onCancel:function(){return z(!1)},onConfirm:function(q){Z==null||Z(q),z(!1)},placeholder:S,style:C==null?void 0:C.input,text:J,textareaClassname:f==null?void 0:f.input,type:M});return!m&&g?an:(0,u.jsxs)(u.Fragment,{children:[!bn&&X?an:(0,u.jsx)(W.Z,e()(e()({className:f==null?void 0:f.markdown,fontSize:U,fullFeaturedCodeBlock:P,style:e()({height:hn?"unset":F},C==null?void 0:C.markdown),variant:"chat"},G),{},{children:m||S||""})),bn&&(0,u.jsx)(B.Z,{editing:X,extra:sn==null?void 0:sn.extra,footer:sn==null?void 0:sn.footer,height:F,onChange:Z,onEditingChange:z,onOpenChange:function(q){tn(q),z(!1)},open:bn,placeholder:S,text:J,value:m})]})})},14866:function(In,w,n){n.d(w,{w:function(){return t}});var _=n(48305),e=n.n(_),H=n(75271),L=function(u){return typeof u=="string"?document.querySelector("#".concat(u)):(u==null?void 0:u.current)||u},A=":not([disabled]):not([readonly])",W=["text","password","search","tel","url","number","email",""].map(function(j){return'input[type="'.concat(j,'"]').concat(A)}).join(", ")+", input:not([type])".concat(A,", textarea").concat(A),B=function(u){var i,l=L(u);if(l){var m=(i=l.querySelector)===null||i===void 0?void 0:i.call(l,W);if(m!=null&&m.focus)return m.focus(),!0}},t=function(u){var i=(0,H.useState)(!1),l=e()(i,2),m=l[0],Z=l[1];H.useEffect(function(){if(!(m||!u)){var R=B(u);R&&Z(!0)}},[u,m,Z])}},20147:function(In,w,n){n.d(w,{MX:function(){return B},wK:function(){return W},wL:function(){return L.w}});var _=n(26068),e=n.n(_),H=n(75271),L=n(14866),A=n(52676),W=function(j){var u,i=j.autoFocus,l=i===void 0?!0:i,m=(0,H.useRef)(null);return(0,L.w)(l?m:void 0),(0,A.jsx)("div",{className:j.className,id:j.id,ref:m,style:(u=j.style)!==null&&u!==void 0?u:{display:j.className?void 0:"contents"},children:j.children})},B=function(j){return function(u){var i=function(Z){return(0,A.jsx)(W,e()(e()({},j||{}),{},{children:(0,A.jsx)(u,e()({},Z))}))},l=u.displayName||u.name||"Component";return i.displayName="withFormHelper(".concat(l,")"),i}}},25969:function(In,w,n){n.d(w,{n:function(){return C}});var _=n(26068),e=n.n(_),H=n(48305),L=n.n(H),A=n(67825),W=n.n(A),B=n(60477),t=n(50999),j=n(41117),u=n(45798),i=n(3548),l=n(5312),m=n(75271),Z=n(53649),R=n.n(Z),f=n(47512),y,b,D,E,S=(0,f.kc)(function(F){var M=F.css,T=F.token,J="#222222";return{root:M(y||(y=R()([`
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
      `])),J,T.borderRadiusLG,T.marginXXS,T.paddingXS,J,T.borderRadiusLG,T.borderRadiusLG,T.borderRadius,T.borderRadius,J,T.borderRadiusLG,T.fontFamilyCode),searchBarIcon:M(b||(b=R()([`
        font-size: 16px;
      `]))),loaderText:M(D||(D=R()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),T.fontFamilyCode),loaderIcon:M(E||(E=R()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),T.marginSM,T.marginSM)}},{hashPriority:"low"}),O=n(52676),g=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],C=function(M){var T=M.className,J=M.id,P=M.style,sn=M.height,U=M.onScroll,G=M.url,$=M.websocket,s=M.refreshInterval,X=M.onLoad,z=M.onError,p=W()(M,g),un=S(),bn=un.cx,tn=un.styles,hn=(0,m.useState)(0),an=L()(hn,2),x=an[0],q=an[1],dn=(0,m.useState)(!1),k=L()(dn,2),vn=k[0],jn=k[1],On=(0,m.useState)(!1),Un=L()(On,2),Tn=Un[0],ee=Un[1],Sn=(0,m.useRef)(),xn=(0,m.useRef)();(0,m.useEffect)(function(){return function(){clearTimeout(Sn.current),clearTimeout(xn.current)}},[]),(0,m.useEffect)(function(){var Rn;return G&&!$&&s&&(Rn=setInterval(function(){q(function(zn){return zn+1})},s)),function(){clearInterval(Rn)}},[s,G,$]);var ln=(0,m.useMemo)(function(){return G&&(Sn.current=setTimeout(function(){jn(!0),Sn.current=void 0},50),"".concat(G,"#").concat(x))},[G,x]),$n=(0,m.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Sn.current),jn(!1),ee(!0),xn.current=setTimeout(function(){return ee(!1)},100),X==null||X()},[X]),Bn=(0,m.useCallback)(function(Rn){jn(!1),clearTimeout(Sn.current),z==null||z(Rn)},[z]);return(0,O.jsxs)("div",{className:bn(tn.root,T),id:J,style:e()({height:sn},P),children:[(0,O.jsx)(t.Uu,{render:function(zn){var Vn=zn.follow,te=zn.onScroll;return(0,O.jsx)(t.A9,e()(e()({url:ln,websocket:$},p),{},{follow:Tn||Vn,height:sn,iconFilterLines:(0,O.jsx)(B.Z,{className:tn.searchBarIcon,icon:j.Z}),iconFindNext:(0,O.jsx)(B.Z,{className:tn.searchBarIcon,icon:u.Z}),iconFindPrevious:(0,O.jsx)(B.Z,{className:tn.searchBarIcon,icon:i.Z}),onError:Bn,onLoad:$n,onScroll:function(Kn){te(Kn),U==null||U(Kn)}}))},startFollowing:!0}),vn&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{className:tn.loaderText,children:"loading ..."}),(0,O.jsx)(B.Z,{className:tn.loaderIcon,icon:l.Z,spin:!0})]})]})}},52625:function(In,w,n){n.d(w,{T:function(){return D}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(47512),W=n(75271),B=n(90142),t=n(36075),j=n.n(t),u=n(52676),i=(0,W.memo)(function(E){var S=Object.assign({},(j()(E),E));return(0,u.jsx)("svg",e()(e()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},S),{},{children:(0,u.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),l=(0,W.memo)(function(E){var S=Object.assign({},(j()(E),E));return(0,u.jsxs)("svg",e()(e()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},S),{},{children:[(0,u.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,u.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,u.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),m=(0,W.memo)(function(E){var S=Object.assign({},(j()(E),E));return(0,u.jsxs)("svg",e()(e()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},S),{},{children:[(0,u.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,u.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,u.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,u.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,u.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,u.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,u.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),Z=n(53649),R=n.n(Z),f,y=(0,A.kc)(function(E){var S=E.css;return{extraTitle:S(f||(f=R()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),b=["type","size","style","extra","className"],D=(0,W.memo)(function(E){var S=E.type,O=S===void 0?"img":S,g=E.size,C=g===void 0?32:g,F=E.style,M=E.extra,T=E.className,J=L()(E,b),P=(0,A.Fg)(),sn=y(),U=sn.styles,G;switch(O){case"text":{G=(0,u.jsx)(m,e()({className:T,height:C,style:F,width:C*2.9375},J));break}case"combine":{G=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,e()({height:C,style:F,width:C},J)),(0,u.jsx)(m,{style:{height:C,marginLeft:Math.round(C/4),width:"auto"}})]});break}case"img":default:{G=(0,u.jsx)(l,e()({height:C,style:F,width:C},J));break}}if(!M)return G;var $=Math.round(C/3*1.9);return(0,u.jsxs)(B.D,e()(e()({align:"center",className:T,horizontal:!0,style:F},J),{},{children:[G,(0,u.jsx)(i,{style:{color:P.colorFill,height:$,width:$}}),(0,u.jsx)("div",{className:U.extraTitle,style:{fontSize:$},children:M})]}))})},48355:function(In,w,n){n.d(w,{o:function(){return gn}});var _=n(26068),e=n.n(_),H=n(82092),L=n.n(H),A=n(504),W=n(22993),B=n(54397),t=n(69789),j=n(9668),u=n(67568),i=n(65694),l=n(75271),m=n(28485),Z=n(25298),R=n.n(Z),f=n(17069),y=n.n(f),b=n(9504),D=n.n(b),E=n(38836),S=n.n(E),O=n(21742),g=n.n(O),C=n(83136),F=n.n(C),M=function(h){g()(v,h);var d=F()(v);function v(){return R()(this,v),d.apply(this,arguments)}return y()(v,[{key:"createDOM",value:function(N){var o=D()(S()(v.prototype),"createDOM",this).call(this,N);return o.classList.add("align-middle"),o}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(N){return new v(N.__text,N.__key)}},{key:"importJSON",value:function(N){var o=(0,i.MX)(N.text);return o.setFormat(N.format),o.setDetail(N.detail),o.setMode(N.mode),o.setStyle(N.style),o}}]),v}(i.R2);function T(h){return new M(h)}var J=n(62657),P=n.n(J),sn=n(48305),U=n.n(sn),G=n(97780),$=n(60477),s=n(44923),X=n(56995),z=n(69024),p=n(52676),un=(0,l.createContext)(null),bn=(0,l.memo)(function(h){var d=h.children,v=h.value;return(0,p.jsx)(un.Provider,{value:v,children:d})}),tn=function(){var d=(0,l.useContext)(un);return d==null?void 0:d.optionsMap},hn=n(25272),an=n(95138),x=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,q="\\(",dn=function(d){return"(?:"+d.join("|")+")"},k=function(d,v){var a=d.length===0?"":"(?!"+d.join("|")+")";return a+"[^\\s"+v+"]"},vn=function(d){return"(?:\\.[ |$]|\\s|["+d+"]|)"},jn=75,On=function(d,v){var a=(0,l.useRef)(null),N=(0,G.g)(),o=U()(N,1),r=o[0],I=(0,hn.y)(d),Q=U()(I,3),Y=Q[0],An=Q[1],on=Q[2],Pn=(0,l.useCallback)(function(Dn){var qn=(0,i.dL)(),ne=qn==null?void 0:qn.getNodes();if(!Y&&(ne==null?void 0:ne.length)===1&&r.dispatchCommand(v,void 0),Y&&(0,i.iO)(qn)){Dn.preventDefault();var ye=(0,i.gI)(d);if((0,i.k$)(ye))return v&&r.dispatchCommand(v,void 0),ye.remove(),!0}return!1},[Y,d,v,r]),kn=(0,l.useCallback)(function(Dn){Dn.stopPropagation(),on(),An(!0)},[An,on]);return(0,l.useEffect)(function(){var Dn=a.current;return Dn&&Dn.addEventListener("click",kn),function(){Dn&&Dn.removeEventListener("click",kn)}},[kn]),(0,l.useEffect)(function(){return(0,an.qV)(r.registerCommand(i.MK,Pn,i.KB),r.registerCommand(i.aR,Pn,i.KB))},[r,on,Pn]),[a,Y]},Un=function(){var d=useRef(null),v=useState(!1),a=_slicedToArray(v,2),N=a[0],o=a[1],r=useCallback(function(I){I.stopPropagation(),o(function(Q){return!Q})},[]);return useEffect(function(){var I=d.current;return I&&I.addEventListener("click",r),function(){I&&I.removeEventListener("click",r)}},[r]),[d,N,o]};function Tn(h,d,v,a){return new RegExp((d?"(^|\\s|".concat(d,")("):"(^|\\s)(")+dn(h)+"((?:"+k(h,v)+(a?vn(v):"")+"){0,"+jn+"}))$")}function ee(h,d,v,a,N){var o=Tn(d,v,a,N).exec(h);if(o!==null){var r=o[1],I=o[2],Q=o[3];if(I.length>0)return{leadOffset:o.index+r.length,matchingString:Q,replaceableString:I}}return null}var Sn=function(d,v){var a=v.punctuation,N=v.preTriggerChars,o=v.allowSpaces,r=(0,l.useState)(null),I=U()(r,2),Q=I[0],Y=I[1],An=(0,l.useCallback)(function(on){var Pn=ee(on,d,N,a,o);if(Pn){var kn=Pn.replaceableString,Dn=Pn.matchingString,qn=kn.lastIndexOf(Dn),ne=qn===-1?kn:kn.slice(0,Math.max(0,qn))+kn.slice(Math.max(0,qn+Dn.length));if(Y(ne||null),Pn.replaceableString)return Pn}else Y(null);return null},[N,o,a,d]);return{trigger:Q,checkForMentionMatch:An}},xn=n(53649),ln=n.n(xn),$n=n(47512),Bn,Rn,zn,Vn=(0,$n.kc)(function(h,d){var v=h.css,a=h.token,N=h.prefixCls,o=d.isSelected,r=d.isError,I=function(){return r?o?{background:a.colorErrorBgActive,border:a.colorErrorBorderHover,color:a.colorErrorTextActive}:{background:a.colorErrorBg,border:a.colorErrorBorder,color:a.colorErrorText}:o?{background:a.colorInfoBgHover,border:a.colorInfoBorder,color:a.colorInfoText}:{background:a.colorFillTertiary,border:"transparent",color:a.colorInfoText}},Q=I(),Y=Q.background,An=Q.border,on=Q.color;return{root:v(Bn||(Bn=ln()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),a.fontFamilyCode,on,Y,An,a.borderRadius),text:v(Rn||(Rn=ln()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),a.colorTextSecondary),error:v(zn||(zn=ln()([`
        color: `,`;
      `])),a.colorErrorText)}}),te=(0,i.fA)("INSERT_MENTION_COMMAND"),nn=(0,i.fA)("DELETE_MENTION_COMMAND"),Kn=(0,i.fA)("CLEAR_HIDE_MENU_TIMEOUT"),ue=/{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi,Ae=(0,l.memo)(function(h){var d=h.nodeKey,v=h.variable,a=tn(),N=(0,G.g)(),o=U()(N,1),r=o[0],I=On(d,nn),Q=U()(I,2),Y=Q[0],An=Q[1],on=a==null?void 0:a[v],Pn=Vn({isSelected:An,isError:!on||!!on.error}),kn=Pn.styles;(0,l.useEffect)(function(){if(!r.hasNodes([en]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[r]);var Dn=(0,p.jsx)(s.Z,{className:kn.root,ref:Y,children:(0,p.jsxs)(s.Z,{align:"center",gap:2,children:[(!on||on.error)&&(0,p.jsx)($.Z,{className:kn.error,icon:z.Z}),(on==null?void 0:on.icon)&&(0,p.jsx)(s.Z,{children:on.icon}),(0,p.jsx)(s.Z,{className:kn.text,gap:2,title:(on==null?void 0:on.label)||v,children:(0,p.jsx)("span",{children:(on==null?void 0:on.label)||v})})]})});return on!=null&&on.error?(0,p.jsx)(X.Z,{title:on==null?void 0:on.error,children:Dn}):Dn}),en=function(h){g()(v,h);var d=F()(v);function v(a,N,o){var r;return R()(this,v),r=d.call(this,o),L()(P()(r),"__variable",void 0),r.__variable=a,r}return y()(v,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var N=document.createElement("div");return N.style.display="inline-flex",N.style.alignItems="center",N.style.verticalAlign="middle",N}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,p.jsx)(Ae,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var N=this.getLatest();return N.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(N){return new v(N.__variable)}},{key:"importJSON",value:function(N){var o=c(N.variable);return o}}]),v}(i.Ij);function c(h){return new en(h)}function V(h){return h instanceof en}var K=(0,l.memo)(function(h){var d=h.onInsert,v=h.onDelete,a=(0,G.g)(),N=U()(a,1),o=N[0];return(0,l.useEffect)(function(){if(!o.hasNodes([en]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,an.qV)(o.registerCommand(te,function(r){o.dispatchCommand(Kn,null);var I=c(r);return(0,i.od)([I]),d&&d(),!0},i.VN),o.registerCommand(nn,function(){return v&&v(),!0},i.VN))},[o,d,v]),null});K.displayName="MentionNodePlugin";var pn=(0,i.fA)("INSERT_MENTION_COMMAND"),En=(0,i.fA)("DELETE_MENTION_COMMAND"),Cn=(0,i.fA)("CLEAR_HIDE_MENU_TIMEOUT"),rn=(0,i.fA)("UPDATE_MENTIONS_OPTIONS"),Gn=function(d,v,a){if(d.isSimpleText())for(var N=d.getPreviousSibling(),o=d.getTextContent(),r=d,I;;){I=v(o);var Q=I===null?"":o.slice(I.end);if(o=Q,Q===""){var Y=r.getNextSibling();if((0,i.Gg)(Y)){Q=r.getTextContent()+Y.getTextContent();var An=v(Q);if(An===null){Y.markDirty();return}else if(An.start!==0)return}}else{var on=v(Q);if(on!==null&&on.start===0)return}if(I===null)return;if(!(I.start===0&&(0,i.Gg)(N)&&N.isTextEntity())){var Pn=void 0;if(I.start===0){var kn=r.splitText(I.end),Dn=U()(kn,2);Pn=Dn[0],r=Dn[1]}else{var qn=r.splitText(I.start,I.end),ne=U()(qn,3);Pn=ne[1],r=ne[2]}var ye=a(Pn);if(Pn.replace(ye),r==null)return}}};function Wn(h){var d=h.split(`
`);return JSON.stringify({root:{children:d.map(function(v){return{children:[{detail:0,format:0,mode:"normal",style:"",text:v,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var yn=(0,l.memo)(function(h){var d=h.onInsert,v=(0,G.g)(),a=U()(v,1),N=a[0];(0,l.useEffect)(function(){if(!N.hasNodes([en]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[N]);var o=(0,l.useCallback)(function(Q){d&&d();var Y=Q.getTextContent().slice(2,-2);return(0,i.U2)(c(Y))},[d]),r=(0,l.useCallback)(function(Q){var Y=ue.exec(Q);if(Y===null)return null;var An=Y.index,on=An+Y[0].length;return{end:on,start:An}},[]),I=(0,l.useCallback)(function(Q){return Gn(Q,r,o)},[o,r]);return(0,l.useEffect)(function(){return ue.lastIndex=0,(0,an.qV)(N.registerNodeTransform(M,I))},[]),null}),Qn=n(4337),he=n(30967),de=n(83606),Xn=function(h){g()(v,h);var d=F()(v);function v(a,N,o){var r;return R()(this,v),r=d.call(this,a),L()(P()(r),"label",void 0),L()(P()(r),"value",void 0),L()(P()(r),"icon",void 0),L()(P()(r),"extraElement",void 0),L()(P()(r),"keywords",void 0),L()(P()(r),"keyboardShortcut",void 0),L()(P()(r),"onSelect",void 0),L()(P()(r),"disabled",void 0),L()(P()(r),"data",void 0),r.value=a,r.label=N,r.keywords=o.keywords||[],r.icon=o.icon,r.extraElement=o.extraElement,r.keyboardShortcut=o.keyboardShortcut,r.onSelect=o.onSelect.bind(P()(r)),r.disabled=o.disabled,r.data=o.data,r}return y()(v)}(Qn.n),ie=function(d,v){var a=(0,G.g)(),N=U()(a,1),o=N[0],r=(0,l.useMemo)(function(){var I=d.map(function(Y){return new Xn(Y.value,Y.label,{icon:Y.icon,onSelect:function(){o.dispatchCommand(te,Y.value)},disabled:Y.disabled,data:Y.data,extraElement:Y.extraElement,keywords:Y.keywords,keyboardShortcut:Y.keyboardShortcut})});if(!v)return I;var Q=new RegExp((0,de.Z)(v),"i");return I.filter(function(Y){var An;return Q.test(Y.label)||((An=Y.keywords)===null||An===void 0?void 0:An.some(function(on){return Q.test(on)}))})},[d,v,o]);return{options:r}},Ln=n(78962),ce=n(94729),re,oe,Yn,ve,me,ae,_n,Hn=(0,$n.kc)(function(h,d){var v=h.css,a=h.token,N=h.prefixCls,o=d.isSelected,r=d.disabled,I=v(re||(re=ln()([`
      background-color: `,`;
    `])),a.colorFillTertiary);return{anchor:v(oe||(oe=ln()([`
        z-index: 9999;
      `]))),menuEmpty:v(Yn||(Yn=ln()([`
        padding: `,`px;
      `])),a.padding),menuOverlay:v(ve||(ve=ln()([`
        overflow: auto;

        width: 240px;
        max-height: 320px;
        margin-top: `,`px;

        background: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),a.marginXXS,a.colorBgElevated,a.borderRadius,a.boxShadow),menuItem:v(me||(me=ln()([`
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
      `])),r?"not-allowed":"pointer",r?"none":"all",a.paddingSM/2,a.paddingSM,a.borderRadius,r?a.colorTextDisabled:a.colorText,a.fontSize,a.lineHeight,o&&I,I),menuItemIcon:v(ae||(ae=ln()([`
        color: `,`;
      `])),a.colorInfoText),menuItemLabel:v(_n||(_n=ln()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Mn=ce.C.Text,cn=(0,l.memo)(function(h){var d=h.index,v=h.isSelected,a=h.onClick,N=h.onMouseEnter,o=h.option,r=h.queryString,I=Hn({isSelected:v,disabled:o.disabled}),Q=I.styles,Y=o.label,An=(0,l.useMemo)(function(){var Dn=Y,qn="",ne="";if(r){var ye=new RegExp((0,de.Z)(r),"i"),Ce=ye.exec(o.label);Ce&&(Dn=Y.slice(0,Math.max(0,Ce.index)),qn=Ce[0],ne=Y.slice(Math.max(0,Ce.index+Ce[0].length)))}return{before:Dn,middle:qn,after:ne}},[o.label,r,Y]),on=An.before,Pn=An.middle,kn=An.after;return(0,p.jsxs)(s.Z,{align:"center",className:Q.menuItem,gap:4,onClick:function(){return a(d,o)},onMouseEnter:function(){return N(d,o)},ref:o.setRefElement,tabIndex:-1,children:[(0,p.jsx)(s.Z,{className:Q.menuItemIcon,children:o.icon}),(0,p.jsxs)("div",{className:Q.menuItemLabel,title:o.label,children:[on,(0,p.jsx)(Mn,{mark:!0,children:Pn}),kn]}),(0,p.jsx)(s.Z,{children:o.extraElement})]},o.key)});cn.displayName="MentionMenuItem";var mn=(0,l.memo)(function(h){var d=h.selectedIndex,v=h.options,a=h.onClick,N=h.onMouseEnter,o=h.queryString,r=Hn({}),I=r.styles;return(0,p.jsxs)(p.Fragment,{children:[v.length===0&&(0,p.jsx)(Ln.Z,{className:I.menuEmpty}),v.map(function(Q,Y){return(0,p.jsx)(cn,{index:Y,isSelected:d===Y,onClick:a,onMouseEnter:N,option:Q,queryString:o},Q.key)})]})}),Fn=(0,l.memo)(function(h){var d=h.triggers,v=h.options,a=v===void 0?[]:v,N=h.allowSpaces,o=N===void 0?!0:N,r=h.punctuation,I=r===void 0?x:r,Q=h.preTriggerChars,Y=Q===void 0?q:Q,An=h.onSelect,on=Hn({}),Pn=on.styles,kn=(0,G.g)(),Dn=U()(kn,1),qn=Dn[0],ne=Sn(d,{punctuation:I,preTriggerChars:Y,allowSpaces:o}),ye=ne.trigger,Ce=ne.checkForMentionMatch,Be=(0,l.useState)(null),Te=U()(Be,2),Le=Te[0],We=Te[1],Fe=ie(a,Le),Ne=Fe.options,Ue=(0,l.useCallback)(function(Zn,Me,De,Re){An==null||An(Zn,ye,Le),qn.update(function(){Me&&Zn!==null&&Zn!==void 0&&Zn.key&&Me.remove(),Zn!=null&&Zn.onSelect&&Zn.onSelect(Re),De()})},[qn,An,Le,ye]),Ie=(0,l.useCallback)(function(Zn,Me){var De=Me.selectedIndex,Re=Me.selectOptionAndCleanUp,Ze=Me.setHighlightedIndex;return Zn.current?he.createPortal((0,p.jsx)("div",{className:Pn.menuOverlay,role:"menu",children:(0,p.jsx)(mn,{onClick:function(je,pe){pe.disabled||(Ze(je),Re(pe))},onMouseEnter:function(je,pe){pe.disabled||Ze(je)},options:Ne,queryString:Le,selectedIndex:De})}),Zn.current):null},[Ne,Le,Pn.menuOverlay]);return(0,p.jsx)(Qn.HQ,{anchorClassName:Pn.anchor,menuRenderFn:Ie,onQueryChange:We,onSelectOption:Ue,options:Ne,triggerFn:Ce})}),Nn=function(d){var v=d.onBlur,a=d.onFocus,N=(0,G.g)(),o=U()(N,1),r=o[0],I=(0,l.useRef)(null);return(0,l.useEffect)(function(){return(0,an.qV)(r.registerCommand(Kn,function(){return I.current&&(clearTimeout(I.current),I.current=null),!0},i.VN),r.registerCommand(i.Gq,function(){return I.current=setTimeout(function(){r.dispatchCommand(i.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),v&&v(),!0},i.VN),r.registerCommand(i.m$,function(){return a&&a(),!0},i.VN))},[r,v,a]),null},Jn=Nn,wn,xe,Se,be,fe,ge,Ee,Oe,Pe=32,fn=22,le=function(d){return Pe+Math.max(d-1,0)*fn},se=(0,$n.kc)(function(h,d){var v=h.css,a=h.token,N=h.prefixCls,o=d.autoSize;return{wrapper:v(wn||(wn=ln()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:v(xe||(xe=ln()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Pe,a.fontSize,Pe,a.colorTextPlaceholder),root:v(Se||(Se=ln()([`
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
      `])),a.colorBorder,a.borderRadius,a.colorText,a.fontSize,a.fontFamily,(o==null?void 0:o.minRows)&&v(be||(be=ln()([`
          min-height: `,`px;
        `])),le(o.minRows)),(o==null?void 0:o.maxRows)&&v(fe||(fe=ln()([`
          max-height: `,`px;
        `])),le(o.maxRows)),a.motionDurationMid,a.colorPrimaryBorder,fn),filled:v(ge||(ge=ln()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),a.colorFillTertiary,a.colorFillSecondary,a.colorBgBase),borderless:v(Ee||(Ee=ln()([`
        background: transparent;
        border: none;
      `]))),disabled:v(Oe||(Oe=ln()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),a.colorTextDisabled,a.colorBgContainerDisabled)}}),gn=function(d){var v=d.className,a=d.wrapperClassname,N=d.placeholder,o=d.style,r=d.value,I=d.defaultValue,Q=d.readOnly,Y=Q===void 0?!1:Q,An=d.disabled,on=An===void 0?!1:An,Pn=d.onChange,kn=d.onBlur,Dn=d.onFocus,qn=d.variant,ne=qn===void 0?"outlined":qn,ye=d.options,Ce=ye===void 0?[]:ye,Be=d.autoSize,Te=d.triggers,Le=Te===void 0?["@"]:Te,We=d.allowSpaces,Fe=d.punctuation,Ne=d.preTriggerChars,Ue=d.onSelect,Ie=se({autoSize:Be}),Zn=Ie.styles,Me=Ie.cx,De=!Y&&!on,Re=(0,l.useMemo)(function(){return{namespace:"mentions",nodes:[M,{replace:i.R2,with:function(pe){return new M(pe.__text)}},en],editorState:Wn(r||I||""),onError:function(pe){throw pe}}},[]),Ze=function(pe){var Ke=pe.read(function(){return(0,i.Gv)().getTextContent()});Pn==null||Pn(Ke.replaceAll(`

`,`
`))},ze=(0,l.useMemo)(function(){return Ce.reduce(function(je,pe){return je[pe.value]=pe,je},{})},[Ce]);return m.j?(0,p.jsx)(A.R,{initialConfig:e()(e()({},Re),{},{editable:De}),children:(0,p.jsx)(bn,{value:{optionsMap:ze},children:(0,p.jsxs)("div",{className:Me(Zn.wrapper,a),children:[(0,p.jsx)(u.B,{ErrorBoundary:B.g,contentEditable:(0,p.jsx)(W.f,{className:Me(L()(L()(L()(L()({},Zn.root,!0),Zn.filled,ne==="filled"),Zn.borderless,ne==="borderless"),Zn.disabled,on),v),style:o||{}}),placeholder:(0,p.jsx)("div",{className:Zn.placeholder,children:N||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,p.jsx)(Fn,{allowSpaces:We,onSelect:Ue,options:Ce,preTriggerChars:Ne,punctuation:Fe,triggers:Le}),(0,p.jsx)(K,{}),(0,p.jsx)(yn,{}),(0,p.jsx)(t.e,{}),(0,p.jsx)(j.$,{onChange:Ze}),(0,p.jsx)(Jn,{onBlur:kn,onFocus:Dn})]})})}):(0,p.jsxs)("div",{className:Me(Zn.wrapper,a),children:[(0,p.jsx)("div",{className:Me(L()(L()(L()(L()({},Zn.root,!0),Zn.filled,ne==="filled"),Zn.borderless,ne==="borderless"),Zn.disabled,on),v),style:o||{}}),(0,p.jsx)("div",{className:Zn.placeholder,children:N||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(In,w,n){n.d(w,{u:function(){return y}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(51697),W=n(75271),B="yunti-ui",t=n(53649),j=n.n(t),u=n(47512),i,l,m=(0,u.kc)(function(D,E){var S=D.css,O=D.prefixCls,g=E.borderd,C=g===void 0?!0:g,F=E.footer,M=F===null||Array.isArray(F)&&F.length===0,T=S(i||(i=j()([`
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
    `])),O,O,M?0:"40px",O,M?0:"1px");return{custom:S(l||(l=j()([`
        `,`
      `])),C&&T)}},{hashPriority:"low"}),Z=n(52676),R=["className","borderd"],f=function(E){var S=E.className,O=E.borderd,g=O===void 0?!0:O,C=L()(E,R),F=m(e()({borderd:g},C)),M=F.styles,T=F.cx;return(0,Z.jsx)(A.Z,e()(e()({},C),{},{className:T(M.custom,"".concat(B,"-modal"),S)}))},y=f;y.useModal=A.Z.useModal,y.destroyAll=A.Z.destroyAll,y.config=A.Z.config,y._InternalPanelDoNotUseOrYouWillBeFired=A.Z._InternalPanelDoNotUseOrYouWillBeFired,y.info=A.Z.info,y.success=A.Z.success,y.error=A.Z.error,y.warning=A.Z.warning,y.warn=A.Z.warn,y.confirm=A.Z.confirm;var b=null},81321:function(In,w,n){n.d(w,{ZM:function(){return Kn},Hu:function(){return T},Xq:function(){return Ae},rE:function(){return ue}});var _=n(26068),e=n.n(_),H=n(48305),L=n.n(H),A=n(67825),W=n.n(A),B=n(33592),t=n(75271),j=n(94456),u=n(60477),i=n(71170),l=n(32328),m=n(87449),Z=n(28485),R=n(90228),f=n.n(R),y=n(87999),b=n.n(y),D=n(97524),E=n(50279),S=n(25298),O=n.n(S),g=n(17069),C=n.n(g),F=n(82092),M=n.n(F),T=function(){function en(){O()(this,en),M()(this,"methodMap",void 0),M()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return C()(en,[{key:"registerMethod",value:function(V,K){this.methodMap[V]=K}},{key:"call",value:function(V){for(var K,pn,En=arguments.length,Cn=new Array(En>1?En-1:0),rn=1;rn<En;rn++)Cn[rn-1]=arguments[rn];return(K=(pn=this.methodMap)[V])===null||K===void 0?void 0:K.call.apply(K,[pn].concat(Cn))}},{key:"updateMeta",value:function(V){Object.assign(this.meta,V)}},{key:"getMeta",value:function(){return Object.freeze(e()({},this.meta))}}]),en}(),J="__base_monaco_editor_controller__",P=Z.j&&window;P&&!P[J]&&(P[J]=new T);var sn=P[J],U=function(){var en,c;return function(){var V=b()(f()().mark(function K(pn){var En;return f()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!en||!(0,E.Z)(c,pn))){rn.next=7;break}return En=Object.keys(pn||{}).length>0,D.Z.config(En?pn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),rn.next=5,D.Z.init();case 5:en=rn.sent,c=pn;case 7:return rn.abrupt("return",en);case 8:case"end":return rn.stop()}},K)}));return function(K){return V.apply(this,arguments)}}()}(),G=function(c){return c?D.Z.config(c):D.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),D.Z.init()};function $(en){var c=Object.keys(en||{}).length>0,V=c?en:void 0;return sn.getMeta().singleton?U(V):G(V)}function s(en){controller.updateMeta(en)}var X=Z.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",z=X==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",p={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},un={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function bn(en){var c=(0,t.useRef)();return(0,t.useEffect)(function(){c.current=en},[en]),c.current}function tn(en,c,V,K){if(K){var pn=en.editor.getModel(en.Uri.parse(K));if(pn)return pn}return en.editor.createModel(c,V,K?en.Uri.parse(K):void 0)}var hn=function(c,V){var K=V.editorDidMount,pn=V.editorWillMount,En=V.theme,Cn=V.value,rn=V.path,Gn=V.language,Wn=V.saveViewState,yn=V.defaultValue,Qn=V.enhancers,he=(0,t.useState)(!1),de=L()(he,2),Xn=de[0],ie=de[1],Ln=(0,t.useState)(!1),ce=L()(Ln,2),re=ce[0],oe=ce[1],Yn=(0,t.useState)(!1),ve=L()(Yn,2),me=ve[0],ae=ve[1],_n=(0,t.useRef)(yn),Hn=(0,t.useRef)(Cn),Mn=(0,t.useRef)(Gn||"text"),cn=(0,t.useRef)(rn),mn=bn(rn),Fn=(0,t.useRef)(V.requireConfig),Nn=(0,t.useRef)(V.options),Jn=(0,t.useRef)(),wn=(0,t.useRef)(),xe=(0,t.useRef)(),Se=(0,t.useRef)(c),be=(0,t.useRef)(),fe=(0,t.useRef)(),ge=(0,t.useRef)(!1),Ee=(0,t.useRef)(new Map),Oe=(0,t.useRef)({});(0,t.useEffect)(function(){Oe.current.enhancers=Qn},[Qn]),(0,t.useEffect)(function(){be.current=K},[K]),(0,t.useEffect)(function(){fe.current=pn},[pn]),(0,t.useEffect)(function(){Hn.current=Cn},[Cn]),(0,t.useEffect)(function(){Mn.current=Gn},[Gn]),(0,t.useEffect)(function(){_n.current=yn},[yn]),(0,t.useEffect)(function(){ae(!0),$(Fn.current).then(function(fn){var le;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Jn.current=fn;try{var se;(se=fe.current)===null||se===void 0||se.call(fe,fn)}catch(r){}if(xe.current){var gn;if(Se.current==="single"){var h,d,v=tn(fn,(h=(d=Hn.current)!==null&&d!==void 0?d:_n.current)!==null&&h!==void 0?h:"",Mn.current,cn.current);gn=fn.editor.create(xe.current,e()(e()({automaticLayout:!0},p),Nn.current)),gn.setModel(v)}else{var a=fn.editor.createModel(Hn.current,Mn.current),N=fn.editor.createModel(Hn.current,Mn.current);gn=fn.editor.createDiffEditor(xe.current,e()(e()({automaticLayout:!0},un),Nn.current)),gn.setModel({original:a,modified:N})}wn.current=gn,(le=Oe.current.enhancers)===null||le===void 0||le.forEach(function(r){return r(fn,gn)});try{var o;(o=be.current)===null||o===void 0||o.call(be,fn,gn)}catch(r){}ge.current||ie(!0)}}).catch(function(fn){console.error("Monaco Editor Load Error!",fn)}).then(function(){ge.current||ae(!1)})},[]),(0,t.useEffect)(function(){var fn;Xn&&((fn=Jn.current)===null||fn===void 0||fn.editor.setTheme(En))},[Xn,En]),(0,t.useEffect)(function(){if(Xn){var fn=c==="diff"?wn.current.getModifiedEditor():wn.current;fn==null||fn.onDidFocusEditorText(function(){ge.current||oe(!0)}),fn==null||fn.onDidBlurEditorText(function(){ge.current||oe(!1)})}},[Xn,c]),(0,t.useEffect)(function(){return function(){ge.current=!0}},[]),(0,t.useEffect)(function(){var fn,le,se;if(Xn&&!(c!=="diff"&&rn)){var gn=c==="diff"?wn.current.getModifiedEditor():wn.current,h=(fn=Cn!=null?Cn:_n.current)!==null&&fn!==void 0?fn:"",d=(le=Jn.current)===null||le===void 0?void 0:le.editor.EditorOption.readOnly;d&&gn!==null&&gn!==void 0&&(se=gn.getOption)!==null&&se!==void 0&&se.call(gn,d)?gn==null||gn.setValue(h):Cn!==(gn==null?void 0:gn.getValue())&&(gn==null||gn.executeEdits("",[{range:gn==null?void 0:gn.getModel().getFullModelRange(),text:h,forceMoveMarkers:!0}]),gn==null||gn.pushUndoStop())}},[Xn,rn,c,Cn]),(0,t.useEffect)(function(){var fn,le;if(Xn&&c!=="diff"&&rn!==mn){var se=tn(Jn.current,(fn=Hn.current)!==null&&fn!==void 0?fn:_n.current,Mn.current,rn),gn=wn.current;Hn.current!==null&&Hn.current!==void 0&&se.getValue()!==Hn.current&&se.setValue(Hn.current),se!==((le=wn.current)===null||le===void 0?void 0:le.getModel())&&(Wn&&Ee.current.set(mn,gn.saveViewState()),gn.setModel(se),Wn&&gn.restoreViewState(Ee.current.get(rn)))}},[Xn,Cn,rn,mn,c,Wn]);var Pe=wn;return{isEditorReady:Xn,focused:re,loading:me,containerRef:xe,monacoRef:Jn,editorRef:Pe,valueRef:Hn}},an=function(c){var V=(0,t.useState)(!1),K=L()(V,2),pn=K[0],En=K[1],Cn=function(){if(pn){En(!1),c==null||c.updateOptions(e()(e()({},c==null?void 0:c.getOptions()),{},{minimap:{enabled:!1}})),c==null||c.layout();return}En(!0),c==null||c.updateOptions(e()(e()({},c==null?void 0:c.getOptions()),{},{minimap:{enabled:!0}})),c==null||c.layout()};return{isFullScreen:pn,fullScreen:Cn}},x=n(53649),q=n.n(x),dn=n(47512),k,vn,jn,On,Un,Tn,ee,Sn=(0,dn.kc)(function(en,c){var V=en.css,K=en.token,pn=en.prefixCls,En=c.minimapEnabled,Cn=En===void 0?!1:En,rn=c.isFullScreen,Gn=rn===void 0?!1:rn,Wn=c.diff,yn=Wn===void 0?!1:Wn,Qn=(0,dn.F4)(k||(k=q()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `])));return{base:V(vn||(vn=q()([`
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
      `])),Gn&&V(jn||(jn=q()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius,K.borderRadius-1,K.borderRadius-1),fullScreenBtn:V(On||(On=q()([`
        &.`,`-btn {
          position: absolute;
          color: `,`;
          top: 20px;
          transition: none;
          `,`
        }
      `])),pn,K.colorTextSecondary,Gn?V(Un||(Un=q()([`
                z-index: 9999;
                right: `,`px;
              `])),yn?64:138):V(Tn||(Tn=q()([`
                right: `,`px;
              `])),Cn||yn?64:20)),loading:V(ee||(ee=q()([`
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
      `])),K.fontSizeSM,K.colorTextTertiary,Qn)}},{hashPriority:"low"}),xn=n(52676);function ln(){}var $n=function(c){var V,K=c.onChange,pn=c.enableOutline,En=c.width,Cn=c.height,rn=c.language,Gn=c.supportFullScreen,Wn=(0,t.useRef)(K),yn=hn("single",c),Qn=yn.isEditorReady,he=yn.focused,de=yn.loading,Xn=yn.containerRef,ie=yn.monacoRef,Ln=yn.editorRef,ce=yn.valueRef,re=(0,t.useRef)(),oe=an(Ln==null?void 0:Ln.current),Yn=oe.isFullScreen,ve=oe.fullScreen,me=Sn({isFullScreen:Yn,minimapEnabled:(V=c.options)===null||V===void 0||(V=V.minimap)===null||V===void 0?void 0:V.enabled}),ae=me.cx,_n=me.styles,Hn=ae(_n.base,c.className,{"ve-focused":he,"ve-outline":pn}),Mn=(0,t.useMemo)(function(){return{width:En,height:Cn}},[En,Cn]);return(0,t.useEffect)(function(){Wn.current=K},[K]),(0,t.useEffect)(function(){if(Qn){var cn,mn=Ln.current;(cn=re.current)===null||cn===void 0||cn.dispose(),re.current=mn==null?void 0:mn.onDidChangeModelContent(function(Fn){var Nn,Jn=mn==null||(Nn=mn.getModel())===null||Nn===void 0?void 0:Nn.getValue();if(ce.current!==Jn){var wn;(wn=Wn.current)===null||wn===void 0||wn.call(Wn,Jn,Fn)}})}},[Ln,Qn,re,ce]),(0,t.useEffect)(function(){return function(){var cn,mn,Fn,Nn=Ln.current;(cn=re.current)===null||cn===void 0||cn.dispose(),Nn==null||(mn=Nn.getModel())===null||mn===void 0||mn.dispose(),(Fn=Ln.current)===null||Fn===void 0||Fn.dispose()}},[Ln]),(0,t.useEffect)(function(){var cn;if(Qn){var mn=(cn=Ln.current)===null||cn===void 0?void 0:cn.getModel();if(mn){var Fn;(Fn=ie.current)===null||Fn===void 0||Fn.editor.setModelLanguage(mn,rn)}}},[Ln,Qn,rn,ie]),(0,xn.jsxs)("div",{className:Hn,style:c.style,children:[de&&(0,xn.jsx)("span",{className:ae(_n.loading,"loading"),children:z}),(0,xn.jsx)("div",{className:"react-monaco-editor-container",ref:Xn,style:Mn,children:Gn&&(0,xn.jsx)(i.ZP,{className:_n.fullScreenBtn,icon:(0,xn.jsx)(u.Z,{icon:Yn?l.Z:m.Z}),onClick:ve,size:"small",type:"text"})})]})},Bn=function(c){var V=c.enableOutline,K=c.width,pn=c.height,En=c.language,Cn=c.onChange,rn=c.original,Gn=c.supportFullScreen,Wn=(0,t.useRef)(Cn),yn=hn("diff",c),Qn=yn.isEditorReady,he=yn.focused,de=yn.loading,Xn=yn.containerRef,ie=yn.monacoRef,Ln=yn.editorRef,ce=yn.valueRef,re=an(),oe=re.isFullScreen,Yn=re.fullScreen,ve=Sn({isFullScreen:oe,diff:!0}),me=ve.cx,ae=ve.styles,_n=me(ae.base,c.className,{"ve-focused":he,"ve-outline":V}),Hn=(0,t.useMemo)(function(){return{width:K,height:pn}},[K,pn]);return(0,t.useEffect)(function(){Wn.current=Cn},[Cn]),(0,t.useEffect)(function(){var Mn;if(Qn){(Mn=Ln.current.getModel())===null||Mn===void 0||Mn.original.setValue(rn!=null?rn:"");var cn=Ln.current.getModel()||{},mn=cn.modified;mn==null||mn.onDidChangeContent(function(Fn){var Nn=mn.getValue();if(ce.current!==Nn){var Jn;(Jn=Wn.current)===null||Jn===void 0||Jn.call(Wn,Nn,Fn)}})}},[Ln,Qn,rn,ce]),(0,t.useEffect)(function(){return function(){var Mn,cn,mn;(Mn=Ln.current)===null||Mn===void 0||(Mn=Mn.getModel())===null||Mn===void 0||(Mn=Mn.original)===null||Mn===void 0||Mn.dispose(),(cn=Ln.current)===null||cn===void 0||(cn=cn.getModel())===null||cn===void 0||(cn=cn.modified)===null||cn===void 0||cn.dispose(),(mn=Ln.current)===null||mn===void 0||mn.dispose()}},[Ln]),(0,t.useEffect)(function(){var Mn,cn,mn;if(Qn){var Fn=((Mn=Ln.current)===null||Mn===void 0?void 0:Mn.getModel())||{},Nn=Fn.original,Jn=Fn.modified;(cn=ie.current)===null||cn===void 0||cn.editor.setModelLanguage(Nn,En),(mn=ie.current)===null||mn===void 0||mn.editor.setModelLanguage(Jn,En)}},[Ln,Qn,En,ie]),(0,xn.jsxs)("div",{className:_n,style:c.style,children:[de&&(0,xn.jsx)("span",{className:me(ae.loading,"loading"),children:z}),(0,xn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Xn,style:Hn,children:Gn&&(0,xn.jsx)(i.ZP,{className:ae.fullScreenBtn,icon:(0,xn.jsx)(u.Z,{icon:oe?l.Z:m.Z}),onClick:Yn,size:"small",type:"text"})})]})},Rn=Object.assign(Bn,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:p,editorDidMount:ln,editorWillMount:ln,onChange:ln,requireConfig:{}}}),zn=Object.assign($n,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:p,editorDidMount:ln,editorWillMount:ln,onChange:ln,requireConfig:{}},MonacoDiffEditor:Rn}),Vn=null,te=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],nn=["inlineView","options"],Kn=function(c){var V=c.type,K=V===void 0?"single":V,pn=c.editorDidMount,En=c.readOnly,Cn=En===void 0?!1:En,rn=c.lineNumbers,Gn=rn===void 0?"on":rn,Wn=c.wordWrap,yn=Wn===void 0?"off":Wn,Qn=c.contextmenu,he=Qn===void 0?!0:Qn,de=c.theme,Xn=c.minimapEnabled,ie=Xn===void 0?!1:Xn,Ln=c.version,ce=Ln===void 0?"0.45.0":Ln,re=c.requireConfig,oe=re===void 0?{}:re,Yn=c.options,ve=c.className,me=c.supportFullScreen,ae=W()(c,te),_n=(0,t.useRef)(pn);(0,t.useEffect)(function(){_n.current=pn},[pn]);var Hn=(0,B.r)(),Mn=Hn.isDarkMode,cn=(0,t.useMemo)(function(){return de||(Mn?"vs-dark":"vs")},[Mn,de]),mn=(0,t.useState)(),Fn=L()(mn,2),Nn=Fn[0],Jn=Fn[1],wn=(0,t.useCallback)(function(fe,ge){var Ee;Jn(ge),(Ee=_n.current)===null||Ee===void 0||Ee.call(_n,fe,ge)},[]),xe=(0,t.useMemo)(function(){var fe=Object.assign({},Yn,{readOnly:Cn,lineNumbers:Gn,wordWrap:yn,contextmenu:he,minimap:ie===void 0?Yn==null?void 0:Yn.minimap:Object.assign({},Yn==null?void 0:Yn.minimap,{enabled:ie})});return Nn==null||Nn.updateOptions(fe),fe},[Yn,Cn,Gn,yn,he,ie,Nn]),Se=(0,j.nc)(),be=(0,t.useMemo)(function(){return Object.assign({},oe,{paths:e()({vs:Se({path:"min/vs",pkg:"monaco-editor",version:ce})},oe.paths)})},[Se,oe,ce]);return K!=="diff"?(0,xn.jsx)(zn,e()({className:ve,editorDidMount:wn,options:xe,requireConfig:be,supportFullScreen:Nn&&me,theme:cn},ae)):(0,xn.jsx)(zn.MonacoDiffEditor,e()({className:ve,editorDidMount:wn,options:xe,requireConfig:be,supportFullScreen:Nn&&me,theme:cn},ae))},ue=function(c){return(0,xn.jsx)(Kn,e()(e()({},c),{},{type:"single"}))},Ae=function(c){var V=c.inlineView,K=V===void 0?"off":V,pn=c.options,En=W()(c,nn);return(0,xn.jsx)(Kn,e()(e()({options:Object.assign({useInlineViewWhenSpaceIsLimited:K==="on"||K==="auto",renderSideBySide:K==="off"||K==="auto"},pn)},En),{},{type:"diff"}))}},64521:function(In,w,n){n.d(w,{Y:function(){return b}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(20219),W=n(68988),B=n(75271),t=n(53649),j=n.n(t),u=n(47512),i,l,m,Z,R=(0,u.kc)(function(S,O){var g=S.css,C=S.token,F=S.prefixCls,M=O.size,T=O.segmented,J=function(){return T?T!==!0?T.gap:!0:0}(),P=function(){if(T)return T!==!0?T.borderRadius:!0}(),sn=function(){var z={small:C.sizeSM,middle:C.size,large:C.sizeLG};return typeof J=="string"?z[J]:J===!0?M?z[M]:z.middle:J||0},U=function(){var z={small:C.controlHeightSM,middle:C.controlHeight,large:C.controlHeightLG};if(P===!0)return M?z[M]:z.middle;if(P||P===0)return P},G=U()&&g(i||(i=j()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),U()),$=g(l||(l=j()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),sn()),s=T===!0||T&&!T.bordered;return{custom:g(m||(m=j()([`
        `,`
        `,`
        `,`
      `])),G,$,s&&g(Z||(Z=j()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),F,F,C.colorPrimary))}},{hashPriority:"low"}),f=n(52676),y=["className"],b=A.ZP,D=function(O){var g=O.className,C=L()(O,y);C.segmented&&(C.optionType="button");var F=R(C),M=F.styles,T=F.cx;return(0,f.jsx)(W.Z,e()(e()({},C),{},{className:T(M.custom,g)}))};b.Group=D;var E=null},25777:function(In,w,n){n.d(w,{W:function(){return sn}});var _=n(26068),e=n.n(_),H=n(15558),L=n.n(H),A=n(48305),W=n.n(A),B=n(67825),t=n.n(B),j=n(60477),u=n(83293),i=n(44923),l=n(46847),m=n(82338),Z=n(2405),R=n(75271),f=n(53649),y=n.n(f),b=n(47512),D,E,S,O,g,C=function(G){switch(G){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},F=(0,b.kc)(function(U,G){var $=U.css,s=U.token,X=U.prefixCls,z=G.disabled,p=G.size,un=C(p),bn=un.cardWidth;return{option:$(D||(D=y()([`
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
      `])),s.colorBorder,s.borderRadius,z?"not-allowed":"pointer",s.padding,s.motionDurationFast,bn,z&&$(E||(E=y()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),s.colorBgContainerDisabled,X,s.colorTextDisabled,X,s.colorTextDisabled),!z&&$(S||(S=y()([`
          &:hover {
            border-color: `,`;
          }
        `])),s.colorPrimaryBorderHover),X),optionSelected:$(O||(O=y()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),s.colorPrimary,s.colorPrimaryActive),check:$(g||(g=y()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),s.marginXS,s.marginXS,s.colorPrimary)}}),M=n(52676),T=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],J=u.Z.Text,P=u.Z.Paragraph,sn=R.forwardRef(function(U,G){var $=U.defaultValue,s=U.value,X=U.onChange,z=U.multiple,p=z===void 0?!1:z,un=U.disabled,bn=un===void 0?!1:un,tn=U.options,hn=tn===void 0?[]:tn,an=U.classNames,x=U.styles,q=U.size,dn=q===void 0?"middle":q,k=U.optionRender,vn=t()(U,T),jn=(0,R.useMemo)(function(){return hn.some(function(nn){return!!nn.img||!!nn.icon})},[hn]),On=F({disabled:bn,size:dn}),Un=On.cx,Tn=On.styles,ee=(0,R.useMemo)(function(){return C(dn)},[dn]),Sn=ee.imgHeight,xn=(0,R.useCallback)(function(nn){return!p||Array.isArray(nn)?nn:nn===void 0?[]:[nn]},[p]),ln=(0,Z.C8)(xn($),{defaultValue:xn($),value:s,onChange:X}),$n=W()(ln,2),Bn=$n[0],Rn=$n[1],zn=(0,R.useCallback)(function(nn){if(!bn){if(!p){Rn(nn);return}if(Bn.includes(nn)){Rn(Bn.filter(function(Kn){return Kn!==nn}));return}Rn([].concat(L()(Bn),[nn]))}},[Bn,bn,p,Rn]),Vn=(0,R.useCallback)(function(nn){return p?Bn.includes(nn):Bn===nn},[Bn,p]),te=(0,R.useCallback)(function(nn,Kn){var ue=Vn(nn.value),Ae=(0,M.jsxs)(i.Z,{align:jn?"center":"flex-start",className:Un(Tn.option,ue&&Tn.optionSelected,an==null?void 0:an.card),gap:"small",onClick:function(){return zn(nn.value)},style:e()(e()({},x==null?void 0:x.card),nn.style),vertical:!0,children:[jn&&(0,M.jsx)(l.C,{className:an==null?void 0:an.icon,icon:nn.icon,shape:"square",size:Sn,src:nn.img,style:e()(e()({},x==null?void 0:x.icon),nn.iconStyle)}),nn.label&&ue&&(0,M.jsx)(J,{ellipsis:!0,strong:!0,children:nn.label}),nn.label&&!ue&&(0,M.jsx)(J,{ellipsis:!0,children:nn.label}),!jn&&nn.description&&(0,M.jsx)(P,{ellipsis:{rows:2},type:"secondary",children:nn.description}),ue&&(0,M.jsx)(j.Z,{className:Tn.check,icon:m.Z})]},nn.value);return k?k(Ae,nn,Kn):Ae},[an==null?void 0:an.card,an==null?void 0:an.icon,Un,Sn,jn,Vn,zn,k,Tn.check,Tn.option,Tn.optionSelected,x==null?void 0:x.card,x==null?void 0:x.icon]);return(0,M.jsx)(i.Z,e()(e()({gap:"large",ref:G,wrap:!0},vn),{},{children:hn.map(function(nn,Kn){return te(nn,Kn)})}))})},66269:function(In,w,n){n.d(w,{a:function(){return i}});var _=n(26068),e=n.n(_),H=n(48305),L=n.n(H),A=n(26582),W=n(68526),B=n(27896),t=n(96965),j=n(75271),u=n(52676),i=function(m){var Z=m.value,R=m.defaultValue,f=m.min,y=f===void 0?0:f,b=m.max,D=m.step,E=m.gutter,S=E===void 0?16:E,O=m.sliderCol,g=O===void 0?{span:12}:O,C=m.inputCol,F=C===void 0?{span:5}:C,M=m.addonAfter,T=m.addonBefore,J=m.placeholder,P=m.onChange,sn=m.style,U=m.className,G=m.sliderProps,$=G===void 0?{}:G,s=m.inputProps,X=s===void 0?{}:s,z=(0,j.useState)(),p=L()(z,2),un=p[0],bn=p[1],tn=function(an){Number.isNaN(an)||(bn(an),P==null||P(an))};return(0,u.jsxs)(A.Z,{className:U,gutter:S,style:sn,children:[(0,u.jsx)(W.Z,e()(e()({},g),{},{children:(0,u.jsx)(B.Z,e()(e()({},$),{},{defaultValue:R,max:b,min:y,onChange:tn,step:D,value:Z!=null?Z:un}))})),(0,u.jsx)(W.Z,e()(e()({},F),{},{children:(0,u.jsx)(t.Z,e()(e()({},X),{},{addonAfter:M,addonBefore:T,defaultValue:R,max:b,min:y,onChange:tn,placeholder:J,step:D,value:Z!=null?Z:un}))}))]})}},56482:function(In,w,n){n.d(w,{N:function(){return R}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(97912),W=n(75271),B=n(79213),t=n(53649),j=n.n(t),u=n(47512),i,l=(0,u.kc)(function(f){var y=f.css,b=f.token,D=f.prefixCls;return{table:y(i||(i=j()([`
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
    `])),D,b.colorTextTertiary)}}),m=n(52676),Z=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],R=function(y){var b=y.rootStyle,D=y.rootClassName,E=y.icon,S=y.title,O=y.variant,g=y.defaultActive,C=y.extra,F=y.className,M=L()(y,Z),T=l(),J=T.cx,P=T.styles;return(0,m.jsx)(B.w,{className:D,style:b,icon:E,title:S,variant:O,defaultActive:g,extra:C,children:(0,m.jsx)(A.Z,e()({className:J(P.table,F),pagination:!1,rowHoverable:!1,size:"small"},M))})}},11546:function(In,w,n){n.d(w,{NU:function(){return t.N},iA:function(){return i}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(56995),W=n(97912),B=n(75271),t=n(56482),j=n(52676),u=["columns"],i=function(Z){var R=Z.columns,f=L()(Z,u),y=(0,B.useMemo)(function(){return R==null?void 0:R.map(function(b){if(b.render)return b;if(b.ellipsis&&b.ellipsis!==!0&&b.ellipsis.showTitle||b.ellipsis===!0){var D=b.ellipsis===!0?{}:b.ellipsis;return e()(e()({},b),{},{ellipsis:{showTitle:!1},render:function(S){return S||S===0?(0,j.jsx)(A.Z,e()(e()({},D),{},{placement:"topLeft",title:S,children:S})):"-"}})}return b.render||(b.render=function(E){return E!=null?E:"-"}),b})},[R]);return(0,j.jsx)(W.Z,e()(e()({},f),{},{columns:y}))};i.displayName="Table",i.SELECTION_COLUMN=W.Z.SELECTION_COLUMN,i.EXPAND_COLUMN=W.Z.EXPAND_COLUMN,i.SELECTION_ALL=W.Z.SELECTION_ALL,i.SELECTION_INVERT=W.Z.SELECTION_INVERT,i.SELECTION_NONE=W.Z.SELECTION_NONE,i.Column=W.Z.Column,i.ColumnGroup=W.Z.ColumnGroup,i.Summary=W.Z.Summary,i.Collapse=t.N;var l=null},8559:function(In,w,n){n.d(w,{G:function(){return R}});var _=n(53649),e=n.n(_),H=n(47512),L=n(75271),A=n(52676),W,B,t,j,u,i,l,m,Z=(0,H.kc)(function(f,y){var b=f.css,D=(0,H.F4)(W||(W=e()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),E=(0,H.F4)(B||(B=e()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),S=(0,H.F4)(t||(t=e()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:b(j||(j=e()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),y.width||34,y.height||22,y.bgColor||"transparent"),line:b(u||(u=e()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),y.lineColor||"#000"),animate1:b(i||(i=e()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),D),animate2:b(l||(l=e()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),E),animate3:b(m||(m=e()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),S)}}),R=function(y){var b=y.height,D=y.width,E=y.lineColor,S=y.bgColor,O=Z({height:b,width:D,lineColor:E,bgColor:S}),g=O.styles,C=O.cx;return(0,A.jsxs)("div",{className:g.box,children:[(0,A.jsx)("div",{className:C(g.line,g.animate1)}),(0,A.jsx)("div",{className:C(g.line,g.animate2)}),(0,A.jsx)("div",{className:C(g.line,g.animate3)}),(0,A.jsx)("div",{className:C(g.line,g.animate2)}),(0,A.jsx)("div",{className:C(g.line,g.animate1)}),(0,A.jsx)("div",{className:C(g.line,g.animate2)}),(0,A.jsx)("div",{className:C(g.line,g.animate1)})]})}},71983:function(In,w,n){n.r(w),n.d(w,{Affix:function(){return vn.Z},Alert:function(){return Z.b},Anchor:function(){return jn.Z},AntdMentions:function(){return On.Z},App:function(){return R.g},AudioPlayer:function(){return le.Z},AutoComplete:function(){return Un.Z},Avatar:function(){return Tn.C},BackTop:function(){return ee.Z},Badge:function(){return Sn.Z},BaseMonacoEditor:function(){return t.ZM},Breadcrumb:function(){return f.Z},Button:function(){return xn.ZP},ButtonGroup:function(){return _.h},Calendar:function(){return ln.Z},Card:function(){return y.Z},Carousel:function(){return $n.Z},Cascader:function(){return Bn.Z},ChatInputActionBar:function(){return sn.Z},ChatInputArea:function(){return P.Z},ChatInputAreaInner:function(){return U.Z},ChatItem:function(){return X.z},ChatSendButton:function(){return G.Z},Checkbox:function(){return Rn.Z},Col:function(){return zn.Z},Collapse:function(){return Vn.Z},CollapseGroup:function(){return e.w},CollapseTable:function(){return T.NU},ColorPicker:function(){return te.Z},ConfigContext:function(){return H.E_},ConfigProvider:function(){return H.iV},CopyButton:function(){return Ee.Z},DatePicker:function(){return nn.default},Descriptions:function(){return b.w},Divider:function(){return D.i},DragPanel:function(){return L.U},Drawer:function(){return E.d},Dropdown:function(){return S.L},EditableMessage:function(){return z.i},Empty:function(){return Kn.Z},Flex:function(){return ue.Z},FloatButton:function(){return Ae.Z},Form:function(){return O.l},FormCollapseList:function(){return O.E},FormHelper:function(){return g.wK},FullFeaturedHighlighter:function(){return p.EL},Grid:function(){return en.ZP},Highlighter:function(){return p.oP},Image:function(){return c.Z},Input:function(){return V.Z},InputNumber:function(){return K.Z},Layout:function(){return pn.Z},List:function(){return En.Z},LogViewer:function(){return W.n},Logo:function(){return A.T},Markdown:function(){return Oe.Z},Mentions:function(){return B.o},Menu:function(){return Cn.Z},MobileChatInputArea:function(){return $.Z},MobileChatSendButton:function(){return s.Z},Modal:function(){return C.u},MonacoController:function(){return t.Hu},MonacoDiffEditor:function(){return t.Xq},MonacoEditor:function(){return t.rE},NotificationGlobalStyle:function(){return F.EZ},Page:function(){return j.T},Pagination:function(){return Gn.Z},Popconfirm:function(){return Wn.Z},Popover:function(){return yn.Z},ProCard:function(){return u.Q},Progress:function(){return Qn.Z},QRCode:function(){return he.Z},Radio:function(){return M.Y},Rate:function(){return de.Z},Result:function(){return Xn.ZP},Row:function(){return ie.Z},Segmented:function(){return Ln.Z},Select:function(){return ce.default},SelectCard:function(){return i.W},Skeleton:function(){return re.Z},Slider:function(){return oe.Z},SliderInput:function(){return l.a},Space:function(){return Yn.Z},SpeechSynthesisTTS:function(){return fn.H},Spin:function(){return ve.Z},Statistic:function(){return me.Z},Status:function(){return m.q},Steps:function(){return ae.Z},Switch:function(){return _n.Z},SyntaxHighlighter:function(){return Pe.Z},Table:function(){return T.iA},Tabs:function(){return Hn.Z},Tag:function(){return Mn.Z},TimePicker:function(){return Fn.Z},Timeline:function(){return mn.Z},Tooltip:function(){return Nn.Z},Tour:function(){return Jn.Z},Transfer:function(){return wn.Z},Tree:function(){return xe.Z},TreeSelect:function(){return Se.Z},Typography:function(){return J.Z},Upload:function(){return be.Z},Watermark:function(){return ge.Z},WaveformIcon:function(){return k.G},colorScales:function(){return un._},colors:function(){return un._},generateColorNeutralPalette:function(){return x},generateColorPalette:function(){return an},message:function(){return rn.ZP},neutralColorScales:function(){return q},notification:function(){return F.t6},theme:function(){return cn.Z},useAudioPlayer:function(){return se.x},useAutoFocus:function(){return g.wL},useCdnFn:function(){return H.nc},useLink:function(){return H.nB},useResponsive:function(){return h.F},useSpeechRecognition:function(){return gn.x},useSpeechSynthes:function(){return dn.J},useTheme:function(){return d.Fg},useThemeMode:function(){return v.r},version:function(){return fe.Z},withFormHelper:function(){return g.MX}});var _=n(12644),e=n(79213),H=n(94456),L=n(13306),A=n(52625),W=n(25969),B=n(48355),t=n(81321),j=n(40305),u=n(86346),i=n(25777),l=n(66269),m=n(46119),Z=n(58479),R=n(5244),f=n(77789),y=n(39824),b=n(26345),D=n(82227),E=n(5795),S=n(99512),O=n(62719),g=n(20147),C=n(97527),F=n(40130),M=n(64521),T=n(11546),J=n(94729),P=n(52412),sn=n(65059),U=n(51874),G=n(62999),$=n(82367),s=n(65677),X=n(92436),z=n(99335),p=n(17853),un=n(15094),bn=n(82092),tn=n.n(bn),hn=n(98644),an=function(N){var o=N.type,r=N.scale,I=N.appearance,Q=(0,hn.Z)(o),Y=I==="dark";return tn()(tn()(tn()(tn()(tn()(tn()(tn()(tn()(tn()(tn()({},"color".concat(Q,"Bg"),r[I][1]),"color".concat(Q,"BgHover"),r[I][2]),"color".concat(Q,"Border"),r[I][4]),"color".concat(Q,"BorderHover"),r[I][Y?5:3]),"color".concat(Q,"Hover"),r[I][Y?10:8]),"color".concat(Q),r[I][9]),"color".concat(Q,"Active"),r[I][Y?7:10]),"color".concat(Q,"TextHover"),r[I][Y?10:8]),"color".concat(Q,"Text"),r[I][9]),"color".concat(Q,"TextActive"),r[I][Y?7:10])},x=function(N){var o=N.scale,r=N.appearance;return{colorBgContainer:r==="dark"?o[r][1]:o[r][0],colorBgElevated:r==="dark"?o[r][2]:o[r][0],colorBgLayout:r==="dark"?o[r][0]:o[r][1],colorBgMask:o.lightA[8],colorBgSpotlight:o[r][5],colorBorder:o[r][4],colorBorderSecondary:o[r][3],colorFill:o["".concat(r,"A")][3],colorFillQuaternary:o["".concat(r,"A")][0],colorFillSecondary:o["".concat(r,"A")][2],colorFillTertiary:o["".concat(r,"A")][1],colorText:o[r][12],colorTextQuaternary:o[r][6],colorTextSecondary:o[r][10],colorTextTertiary:o[r][8]}},q={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},dn=n(82846),k=n(8559),vn=n(7904),jn=n(58190),On=n(46621),Un=n(85958),Tn=n(46847),ee=n(66075),Sn=n(1088),xn=n(71170),ln=n(3957),$n=n(57512),Bn=n(52279),Rn=n(43584),zn=n(68526),Vn=n(90026),te=n(64479),nn=n(1409),Kn=n(78962),ue=n(44923),Ae=n(6697),en=n(82366),c=n(69414),V=n(99707),K=n(96965),pn=n(93702),En=n(78104),Cn=n(74032),rn=n(57939),Gn=n(4211),Wn=n(45590),yn=n(31997),Qn=n(35357),he=n(82830),de=n(76177),Xn=n(46504),ie=n(26582),Ln=n(13927),ce=n(35092),re=n(99021),oe=n(27896),Yn=n(43356),ve=n(49553),me=n(43954),ae=n(59470),_n=n(74798),Hn=n(60756),Mn=n(53453),cn=n(22972),mn=n(46141),Fn=n(20907),Nn=n(56995),Jn=n(33858),wn=n(96208),xe=n(64287),Se=n(6036),be=n(72023),fe=n(38208),ge=n(55366),Ee=n(81107),Oe=n(85814),Pe=n(74974),fn=n(49724),le=n(83595),se=n(61984),gn=n(8281),h=n(81134),d=n(47512),v=n(33592)},40130:function(In,w,n){n.d(w,{EZ:function(){return y.E},t6:function(){return U}});var _=n(26068),e=n.n(_),H=n(67825),L=n.n(H),A=n(48305),W=n.n(A),B=n(335),t=n.n(B),j=n(30657),u=n(19728),i=n(22620),l=n(90026),m=n(83293),Z=n(98943),R=n(75271),f=n(52676),y=n(55300),b=["detail","message","description","onClose","className"],D=l.Z.Panel,E=m.Z.Link,S=m.Z.Paragraph,O=m.Z.Text,g={},C=function(s,X){g[s]||(g[s]=[]),g[s].push(X)},F=function(s){delete g[s]},M=function $(s){var X="";if(typeof s=="string")X=s;else if(typeof s=="number")X=s.toString();else if(Array.isArray(s)){var z=t()(s),p;try{for(z.s();!(p=z.n()).done;){var un=p.value;X+=$(un)}}catch(bn){z.e(bn)}finally{z.f()}}else(0,R.isValidElement)(s)&&(X+=$(s.props.children));return X},T=function(s){var X,z=s.noticeKey,p=s.message,un=((X=g[z])===null||X===void 0?void 0:X.length)||0;return(0,f.jsxs)(f.Fragment,{children:[p,un>1&&" (".concat(un,")")]})},J=function(s){var X=s.noticeKey,z=(0,R.useState)(),p=W()(z,2),un=p[0],bn=p[1],tn={},hn=t()(g[X]),an;try{for(hn.s();!(an=hn.n()).done;){var x=an.value,q=M(x.description);x.descKey=q,tn[q]=x}}catch(dn){hn.e(dn)}finally{hn.f()}return(0,f.jsx)(l.Z,{accordion:!0,activeKey:un,className:"yunti-notification-collapse",expandIcon:function(k){var vn=k.isActive;return(0,f.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:vn?(0,f.jsx)(E,{className:"yunti-notification-link",children:(0,f.jsx)(j.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,f.jsx)(u.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(k){bn(k)},children:Object.values(tn).map(function(dn){var k=dn.descKey,vn=dn.description,jn=dn.detail;return(0,f.jsx)(D,{header:(0,f.jsx)(O,{ellipsis:{tooltip:!1},style:{width:250},children:vn}),children:(0,f.jsx)(S,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(jn,null,2)},type:"secondary",children:(0,f.jsx)("pre",{children:JSON.stringify(jn,null,2)})})},k)})})},P=function(s){var X=s.detail,z=s.message,p=s.description,un=s.onClose,bn=s.className,tn=L()(s,b),hn=M(z);C(hn,s);var an=function(){un==null||un(),F(hn)};return s.type==="warning"&&!s.icon&&(tn.icon=(0,f.jsx)(i.Z,{style:{color:"#ff7d00"}})),X?Z.ZP.open(e()({key:hn,message:(0,f.jsx)(T,{message:z,noticeKey:hn}),description:(0,f.jsx)(J,{noticeKey:hn}),onClose:an,className:"yunti-notification ".concat(bn)},tn)):Z.ZP.open(e()({key:hn,message:(0,f.jsx)(T,{message:z,noticeKey:hn}),description:p,onClose:an,className:"yunti-notification ".concat(bn)},tn))},sn=function(s){var X;if(((s==null||(X=s.errors)===null||X===void 0?void 0:X.length)||0)>0){s!=null&&s.errors;var z=t()((s==null?void 0:s.errors)||[]),p;try{for(z.s();!(p=z.n()).done;){var un=p.value;P(e()(e()({detail:un,description:un.message},s),{},{type:"warning"}))}}catch(bn){z.e(bn)}finally{z.f()}}else P(e()(e()({},s),{},{type:"warning"}))},U=e()(e()({},Z.ZP),{},{success:function(s){return P(e()(e()({},s),{},{type:"success"}))},info:function(s){return P(e()(e()({},s),{},{type:"info"}))},warning:function(s){return P(e()(e()({},s),{},{type:"warning"}))},warn:function(s){return P(e()(e()({},s),{},{type:"warning"}))},error:function(s){return P(e()(e()({},s),{},{type:"error"}))},warnings:sn,warns:sn}),G=null},55300:function(In,w,n){n.d(w,{E:function(){return W}});var _=n(53649),e=n.n(_),H=n(98943),L=n(47512),A,W=(0,L.vJ)(A||(A=e()([`
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
`])),function(B){var t=B.theme;return"".concat(t==null?void 0:t.colorPrimary," !important")},function(B){var t=B.theme;return"".concat(t==null?void 0:t.colorPrimaryHover," !important")},function(B){var t=B.theme;return t==null?void 0:t.colorPrimary},function(B){var t=B.theme;return"".concat(t==null?void 0:t.colorPrimary," !important")},function(B){var t=B.theme;return"".concat(t==null?void 0:t.colorPrimaryHover," !important")},function(B){var t=B.theme,j=t||{},u=j.prefixCls;return H.ZP.config({prefixCls:u}),`
      .`.concat(u,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(u,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(In,w,n){n.d(w,{j:function(){return _}});var _=typeof window!="undefined"}}]);
