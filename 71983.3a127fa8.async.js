"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(Zn,Y,n){n.d(Y,{b:function(){return B}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(21153),F=n(75271),I=n(53649),r=n.n(I),P=n(47512),d,E=(0,P.kc)(function(g,b){var x=g.css,D=b.bordered,h=D===void 0?"dashed":D;return{custom:x(d||(d=r()([`
        border-style: `,` !important;
      `])),h)}},{hashPriority:"low"}),u=n(52676),a=["bordered","className"],B=function(b){var x=b.bordered,D=x===void 0?"dashed":x,h=b.className,S=M()(b,a),L=E({bordered:D}),f=L.styles,j=L.cx;return(0,u.jsx)(A.Z,t()(t()({},S),{},{className:j(f.custom,h)}))};B.ErrorBoundary=A.Z.ErrorBoundary;var Z=null},5244:function(Zn,Y,n){n.d(Y,{g:function(){return d}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(23878),F=n(75271),I=n(55300),r=n(52676),P=["children"],d=function(a){var B=a.children,Z=M()(a,P);return(0,r.jsxs)(A.Z,t()(t()({},Z),{},{children:[(0,r.jsx)(I.E,{}),B]}))};d.useApp=A.Z.useApp;var E=null},52412:function(Zn,Y,n){var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(53649),F=n.n(A),I=n(62579),r=n(51874),P=n(47512),d=n(75271),E=n(52676),u=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],a,B,Z,g=(0,P.kc)(function(x){var D=x.css;return{container:D(a||(a=F()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:D(B||(B=F()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:D(Z||(Z=F()([`
      position: relative;
      flex: 1;
    `])))}}),b=(0,d.forwardRef)(function(x,D){var h=x.className,S=x.style,L=x.classNames,f=x.expand,j=f===void 0?!0:f,U=x.setExpand,y=x.bottomAddons,T=x.topAddons,q=x.onSizeChange,K=x.heights,G=x.onSend,nn=M()(x,u),Q=g(),W=Q.styles;return(0,E.jsx)(I.Z,{className:h,classNames:L,fullscreen:j,headerHeight:K==null?void 0:K.headerHeight,maxHeight:K==null?void 0:K.maxHeight,minHeight:K==null?void 0:K.minHeight,onSizeChange:q,placement:"bottom",size:{height:K==null?void 0:K.inputHeight,width:"100%"},style:t()({zIndex:10},S),children:(0,E.jsxs)("section",{className:W.container,style:{minHeight:K==null?void 0:K.minHeight},children:[T,(0,E.jsx)("div",{className:W.textareaContainer,children:(0,E.jsx)(r.Z,t()({className:W.textarea,onSend:function(){G==null||G(),U==null||U(!1)},ref:D,type:"pure"},nn))}),y]})})});Y.Z=(0,d.memo)(b)},92436:function(Zn,Y,n){n.d(Y,{z:function(){return sn}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(59171),F=n(10581),I=n(93955),r=n(81262),P=n(9192),d=n(75061),E=n(81134),u=n(75271),a=n(90142),B=n(99335),Z=n(53649),g=n.n(Z),b=n(47512),x,D,h,S,L,f,j,U,y,T,q,K,G,nn,Q,W,v,R,J=(0,b.kc)(function(p,w){var un=p.cx,k=p.css,vn=p.token,On=p.isDarkMode,Pn=p.responsive,Bn=w.placement,Rn=w.type,ne=w.title,An=w.primary,Qn=w.avatarSize,$n=w.editing,mn=w.time,In=k(x||(x=g()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),An?On?vn.colorFill:vn.colorBgElevated:On?vn.colorFillSecondary:vn.colorBgContainer,vn.borderRadiusLG,vn.motionEaseOut),cn=k(D||(D=g()([`
      padding-block-start: `,`;
    `])),ne?0:"6px"),Tn=k(h||(h=g()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),vn.motionEaseOut),zn=Rn==="block"?In:cn,re=$n&&k(S||(S=g()([`
        width: 100%;
      `])));return{actions:un(k(L||(L=g()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),Rn==="block"?"flex-end":Bn==="left"?"flex-start":"flex-end",Bn==="left"?"flex-end":"flex-start"),$n&&k(f||(f=g()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:k(j||(j=g()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),Qn,Qn),avatarGroupContainer:k(U||(U=g()([`
        width: `,`px;
      `])),Qn),container:un(Rn==="pure"&&Tn,k(y||(y=g()([`
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
        `])),vn.motionEaseOut,Pn.mobile,Rn==="pure"?"12px":"6px")),editingContainer:un(re,k(T||(T=g()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),vn.colorBorderSecondary,vn.colorBorder),Rn==="pure"&&k(q||(q=g()([`
            background: `,`;
            border-radius: `,`px;
          `])),vn.colorFillQuaternary,vn.borderRadius)),editingInput:k(K||(K=g()([`
        width: 100%;
      `]))),errorContainer:k(G||(G=g()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:k(nn||(nn=g()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),Bn==="right"?"-4px":"unset",Bn==="left"?"-4px":"unset",vn.colorBgLayout,vn.colorPrimary),message:un(zn,k(Q||(Q=g()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),Pn.mobile)),messageContainer:un(re,k(W||(W=g()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),mn?-16:0,Pn.mobile)),messageContent:un(re,k(v||(v=g()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),Pn.mobile)),messageExtra:un("message-extra"),name:k(R||(R=g()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),vn.colorTextDescription,Bn==="left"?"left":"right")}}),X=n(52676),C=(0,u.memo)(function(p){var w=p.editing,un=p.onChange,k=p.onEditingChange,vn=p.text,On=p.message,Pn=p.placement,Bn=p.messageExtra,Rn=p.renderMessage,ne=p.type,An=p.primary,Qn=p.onDoubleClick,$n=p.fontSize,mn=p.markdownProps,In=p.markdownClassname,cn=J({editing:w,placement:Pn,primary:An,type:ne}),Tn=cn.cx,zn=cn.styles,re=(0,E.F)(),tn=re.mobile,Hn=(0,X.jsx)(B.i,{classNames:{input:zn.editingInput,markdown:In},editButtonSize:"small",editing:w,fontSize:$n,fullFeaturedCodeBlock:!0,markdownProps:mn,onChange:un,onEditingChange:k,openModal:tn?w:void 0,text:vn,value:On?String(On).trim():""}),ce=Rn?Rn(Hn):Hn;return(0,X.jsxs)(a.D,{className:Tn(zn.message,w&&zn.editingContainer),onDoubleClick:Qn,children:[ce,Bn&&!w?(0,X.jsx)("div",{className:zn.messageExtra,children:Bn}):null]})}),bn=C,rn=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname"],En=32,sn=(0,u.memo)(function(p){var w=p.avatarAddon,un=p.onAvatarClick,k=p.avatarProps,vn=p.actions,On=p.className,Pn=p.primary,Bn=p.loading,Rn=p.message,ne=p.placement,An=ne===void 0?"left":ne,Qn=p.type,$n=Qn===void 0?"block":Qn,mn=p.avatar,In=p.error,cn=p.showTitle,Tn=p.time,zn=p.editing,re=p.onChange,tn=p.onEditingChange,Hn=p.messageExtra,ce=p.renderMessage,Ee=p.text,De=p.errorMessage,he=p.onDoubleClick,je=p.fontSize,Ue=p.markdownProps,dn=p.markdownClassname,m=M()(p,rn),H=(0,E.F)(),N=H.mobile,pn=(0,d.y)({editing:zn,placement:An,primary:Pn,showTitle:cn,time:Tn,title:mn.title,type:$n}),Cn=pn.cx,hn=pn.styles;return(0,X.jsxs)(a.D,t()(t()({className:Cn(hn.container,On),direction:An==="left"?"horizontal":"horizontal-reverse",gap:N?6:12},m),{},{children:[(0,X.jsx)(F.Z,t()(t()({},k),{},{addon:w,avatar:mn,loading:Bn,onClick:un,placement:An,size:N?En:void 0})),(0,X.jsxs)(a.D,{align:An==="left"?"flex-start":"flex-end",className:hn.messageContainer,children:[(0,X.jsx)(P.Z,{avatar:mn,placement:An,showTitle:cn,time:Tn}),(0,X.jsxs)(a.D,{align:An==="left"?"flex-start":"flex-end",className:hn.messageContent,direction:$n==="block"?An==="left"?"horizontal":"horizontal-reverse":"vertical",gap:8,children:[In?(0,X.jsx)(r.Z,{error:In,message:De,placement:An}):(0,X.jsx)(bn,{editing:zn,fontSize:je,markdownClassname:dn,markdownProps:Ue,message:Rn,messageExtra:Hn,onChange:re,onDoubleClick:he,onEditingChange:tn,placement:An,primary:Pn,renderMessage:ce,text:Ee,type:$n}),(0,X.jsx)(A.Z,{actions:vn,editing:zn,placement:An,type:$n})]})]}),N&&$n==="block"&&(0,X.jsx)(I.Z,{borderSpacing:En})]}))})},13306:function(Zn,Y,n){n.d(Y,{U:function(){return U}});var _=n(26068),t=n.n(_),V=n(48305),M=n.n(V),A=n(67825),F=n.n(A),I=n(97157),r=n(86818),P=n(44923),d=n(71170),E=n(75271),u=n(84569),a=n.n(u),B=n(53649),Z=n.n(B),g=n(47512),b,x,D,h,S,L=(0,g.kc)(function(y){var T=y.css,q=y.token,K=y.prefixCls;return{root:T(b||(b=Z()([`
      overflow: hidden;
    `]))),wrapper:T(x||(x=Z()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),q.marginLG),content:T(D||(D=Z()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),q.borderRadiusLG,q.boxShadowSecondary),dragWrapper:T(h||(h=Z()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:T(S||(S=Z()([`
      cursor: move;
    `])))}}),f=n(52676),j=["title","classNames","defaultPosition","onPositionChange"],U=(0,E.memo)(function(y){var T=y.title,q=y.classNames,K=q===void 0?{}:q,G=y.defaultPosition,nn=y.onPositionChange,Q=F()(y,j),W=L(),v=W.styles,R=W.cx,J=(0,E.useState)({left:0,top:0,bottom:0,right:0}),X=M()(J,2),C=X[0],bn=X[1],rn=(0,E.useRef)(null),En=function(p,w){var un,k=window.document.documentElement,vn=k.clientWidth,On=k.clientHeight,Pn=(un=rn.current)===null||un===void 0?void 0:un.getBoundingClientRect();Pn&&bn({left:-Pn.left+w.x,right:vn-(Pn.right-w.x),top:-Pn.top+w.y,bottom:On-(Pn.bottom-w.y)})};return(0,f.jsx)(r.Z,t()(t()({},Q),{},{classNames:t()(t()({},K),{},{wrapper:R(v.wrapper,K.wrapper),content:R(v.content,K.content)}),destroyOnClose:!0,drawerRender:function(p){return(0,f.jsx)(a(),{bounds:C,defaultPosition:G,handle:".".concat(v.dragHandle),nodeRef:rn,onStart:function(un,k){return En(un,k)},onStop:function(un,k){nn==null||nn({x:k.x,y:k.y})},children:(0,f.jsx)("div",{className:v.dragWrapper,ref:rn,children:p})})},mask:!1,rootClassName:v.root,title:(0,f.jsxs)(P.Z,{align:"center",className:v.dragHandle,children:[(0,f.jsx)(P.Z,{flex:2,children:T}),(0,f.jsx)(P.Z,{children:(0,f.jsx)(d.ZP,{className:v.dragHandle,icon:(0,f.jsx)(I.Z,{}),type:"text"})})]})}))})},5795:function(Zn,Y,n){n.d(Y,{d:function(){return g}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(86818),F=n(75271),I=n(53649),r=n.n(I),P=n(47512),d,E,u,a=(0,P.kc)(function(x,D){var h=x.css,S=x.prefixCls,L=D.closeIcon,f=D.closeIconPlacement,j=D.extra,U=h(d||(d=r()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),S,S,!(L===null||L===!1)&&h(E||(E=r()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),S));return{custom:h(u||(u=r()([`
        `,`
      `])),(!f||f==="right"||f==="auto"&&!j)&&U)}},{hashPriority:"low"}),B=n(52676),Z=["className"],g=function(D){var h=D.className,S=M()(D,Z),L=a(S),f=L.styles,j=L.cx;return(0,B.jsx)(A.Z,t()(t()({},S),{},{className:j(f.custom,h)}))},b=null},99512:function(Zn,Y,n){n.d(Y,{L:function(){return D}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(44923),F=n(5053),I=n(75271),r=n(53649),P=n.n(r),d=n(47512),E,u,a,B,Z=(0,d.kc)(function(h,S){var L=h.css,f=h.token,j=S.divider,U=S.position;return{menuWrapper:L(E||(E=P()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),f.colorBgElevated,f.borderRadiusLG,f.boxShadowSecondary),menuExtra:L(u||(u=P()([`
        padding: 10px 16px 4px;
        `,`
      `])),j&&L(U==="top"?a||(a=P()([`
              border-bottom: 1px solid `,`;
            `])):B||(B=P()([`
              border-top: 1px solid `,`;
            `])),f.colorSplit))}}),g=n(52676),b=["menuExtra","dropdownRender"],x=function(S){var L=S.menuExtra,f=S.dropdownRender,j=M()(S,b),U=L||{},y=U.position,T=y===void 0?"top":y,q=U.divider,K=q===void 0?!1:q,G=U.content,nn=Z({divider:K,position:T}),Q=nn.styles,W=(0,I.useCallback)(function(v){var R=I.cloneElement(v,{style:{boxShadow:"none",border:"none"}});if(!G)return f?(0,g.jsx)(A.Z,{className:Q.menuWrapper,vertical:!0,children:f(R)}):v;var J=(0,g.jsx)(A.Z,{align:"center",className:Q.menuExtra,children:G});return(0,g.jsxs)(A.Z,{className:Q.menuWrapper,vertical:!0,children:[T==="top"&&J,R,T==="bottom"&&J]})},[G,f,T,Q.menuExtra,Q.menuWrapper]);return(0,g.jsx)(F.Z,t()({dropdownRender:W},j))},D=x;D.Button=F.Z.Button},99335:function(Zn,Y,n){n.d(Y,{i:function(){return E}});var _=n(26068),t=n.n(_),V=n(48305),M=n.n(V),A=n(14252),F=n(85814),I=n(54285),r=n(75271),P=n(65720),d=n(52676),E=(0,r.memo)(function(u){var a=u.value,B=u.onChange,Z=u.classNames,g=Z===void 0?{}:Z,b=u.onEditingChange,x=u.editing,D=u.openModal,h=u.onOpenChange,S=u.placeholder,L=u.showEditWhenEmpty,f=L===void 0?!1:L,j=u.styles,U=u.height,y=u.inputType,T=u.editButtonSize,q=u.text,K=u.fullFeaturedCodeBlock,G=u.model,nn=u.fontSize,Q=u.markdownProps,W=(0,P.Z)(!1,{onChange:b,value:x}),v=M()(W,2),R=v[0],J=v[1],X=(0,P.Z)(!1,{onChange:h,value:D}),C=M()(X,2),bn=C[0],rn=C[1],En=U==="auto",sn=(0,d.jsx)(A.Z,{className:g==null?void 0:g.input,classNames:{textarea:g==null?void 0:g.textarea},defaultValue:a,editButtonSize:T,height:U,onCancel:function(){return J(!1)},onConfirm:function(w){B==null||B(w),J(!1)},placeholder:S,style:j==null?void 0:j.input,text:q,textareaClassname:g==null?void 0:g.input,type:y});return!a&&f?sn:(0,d.jsxs)(d.Fragment,{children:[!bn&&R?sn:(0,d.jsx)(F.Z,t()(t()({className:g==null?void 0:g.markdown,fontSize:nn,fullFeaturedCodeBlock:K,style:t()({height:En?"unset":U},j==null?void 0:j.markdown),variant:"chat"},Q),{},{children:a||S||""})),bn&&(0,d.jsx)(I.Z,{editing:R,extra:G==null?void 0:G.extra,footer:G==null?void 0:G.footer,height:U,onChange:B,onEditingChange:J,onOpenChange:function(w){rn(w),J(!1)},open:bn,placeholder:S,text:q,value:a})]})})},14866:function(Zn,Y,n){n.d(Y,{w:function(){return r}});var _=n(48305),t=n.n(_),V=n(75271),M=function(d){return typeof d=="string"?document.querySelector("#".concat(d)):(d==null?void 0:d.current)||d},A=":not([disabled]):not([readonly])",F=["text","password","search","tel","url","number","email",""].map(function(P){return'input[type="'.concat(P,'"]').concat(A)}).join(", ")+", input:not([type])".concat(A,", textarea").concat(A),I=function(d){var E,u=M(d);if(u){var a=(E=u.querySelector)===null||E===void 0?void 0:E.call(u,F);if(a!=null&&a.focus)return a.focus(),!0}},r=function(d){var E=(0,V.useState)(!1),u=t()(E,2),a=u[0],B=u[1];V.useEffect(function(){if(!(a||!d)){var Z=I(d);Z&&B(!0)}},[d,a,B])}},20147:function(Zn,Y,n){n.d(Y,{MX:function(){return I},wK:function(){return F},wL:function(){return M.w}});var _=n(26068),t=n.n(_),V=n(75271),M=n(14866),A=n(52676),F=function(P){var d,E=P.autoFocus,u=E===void 0?!0:E,a=(0,V.useRef)(null);return(0,M.w)(u?a:void 0),(0,A.jsx)("div",{className:P.className,id:P.id,ref:a,style:(d=P.style)!==null&&d!==void 0?d:{display:P.className?void 0:"contents"},children:P.children})},I=function(P){return function(d){var E=function(B){return(0,A.jsx)(F,t()(t()({},P||{}),{},{children:(0,A.jsx)(d,t()({},B))}))},u=d.displayName||d.name||"Component";return E.displayName="withFormHelper(".concat(u,")"),E}}},25969:function(Zn,Y,n){n.d(Y,{n:function(){return j}});var _=n(26068),t=n.n(_),V=n(48305),M=n.n(V),A=n(67825),F=n.n(A),I=n(60477),r=n(50999),P=n(41117),d=n(45798),E=n(3548),u=n(5312),a=n(75271),B=n(53649),Z=n.n(B),g=n(47512),b,x,D,h,S=(0,g.kc)(function(U){var y=U.css,T=U.token,q="#222222";return{root:y(b||(b=Z()([`
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
      `])),q,T.borderRadiusLG,T.marginXXS,T.paddingXS,q,T.borderRadiusLG,T.borderRadiusLG,T.borderRadius,T.borderRadius,q,T.borderRadiusLG,T.fontFamilyCode),searchBarIcon:y(x||(x=Z()([`
        font-size: 16px;
      `]))),loaderText:y(D||(D=Z()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),T.fontFamilyCode),loaderIcon:y(h||(h=Z()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),T.marginSM,T.marginSM)}},{hashPriority:"low"}),L=n(52676),f=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],j=function(y){var T=y.className,q=y.id,K=y.style,G=y.height,nn=y.onScroll,Q=y.url,W=y.websocket,v=y.refreshInterval,R=y.onLoad,J=y.onError,X=F()(y,f),C=S(),bn=C.cx,rn=C.styles,En=(0,a.useState)(0),sn=M()(En,2),p=sn[0],w=sn[1],un=(0,a.useState)(!1),k=M()(un,2),vn=k[0],On=k[1],Pn=(0,a.useState)(!1),Bn=M()(Pn,2),Rn=Bn[0],ne=Bn[1],An=(0,a.useRef)(),Qn=(0,a.useRef)();(0,a.useEffect)(function(){return function(){clearTimeout(An.current),clearTimeout(Qn.current)}},[]),(0,a.useEffect)(function(){var cn;return Q&&!W&&v&&(cn=setInterval(function(){w(function(Tn){return Tn+1})},v)),function(){clearInterval(cn)}},[v,Q,W]);var $n=(0,a.useMemo)(function(){return Q&&(An.current=setTimeout(function(){On(!0),An.current=void 0},50),"".concat(Q,"#").concat(p))},[Q,p]),mn=(0,a.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(An.current),On(!1),ne(!0),Qn.current=setTimeout(function(){return ne(!1)},100),R==null||R()},[R]),In=(0,a.useCallback)(function(cn){On(!1),clearTimeout(An.current),J==null||J(cn)},[J]);return(0,L.jsxs)("div",{className:bn(rn.root,T),id:q,style:t()({height:G},K),children:[(0,L.jsx)(r.Uu,{render:function(Tn){var zn=Tn.follow,re=Tn.onScroll;return(0,L.jsx)(r.A9,t()(t()({url:$n,websocket:W},X),{},{follow:Rn||zn,height:G,iconFilterLines:(0,L.jsx)(I.Z,{className:rn.searchBarIcon,icon:P.Z}),iconFindNext:(0,L.jsx)(I.Z,{className:rn.searchBarIcon,icon:d.Z}),iconFindPrevious:(0,L.jsx)(I.Z,{className:rn.searchBarIcon,icon:E.Z}),onError:In,onLoad:mn,onScroll:function(Hn){re(Hn),nn==null||nn(Hn)}}))},startFollowing:!0}),vn&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:rn.loaderText,children:"loading ..."}),(0,L.jsx)(I.Z,{className:rn.loaderIcon,icon:u.Z,spin:!0})]})]})}},52625:function(Zn,Y,n){n.d(Y,{T:function(){return D}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(47512),F=n(75271),I=n(90142),r=n(36075),P=n.n(r),d=n(52676),E=(0,F.memo)(function(h){var S=Object.assign({},(P()(h),h));return(0,d.jsx)("svg",t()(t()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},S),{},{children:(0,d.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),u=(0,F.memo)(function(h){var S=Object.assign({},(P()(h),h));return(0,d.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},S),{},{children:[(0,d.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,d.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,d.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),a=(0,F.memo)(function(h){var S=Object.assign({},(P()(h),h));return(0,d.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},S),{},{children:[(0,d.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,d.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,d.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,d.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,d.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,d.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,d.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),B=n(53649),Z=n.n(B),g,b=(0,A.kc)(function(h){var S=h.css;return{extraTitle:S(g||(g=Z()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),x=["type","size","style","extra","className"],D=(0,F.memo)(function(h){var S=h.type,L=S===void 0?"img":S,f=h.size,j=f===void 0?32:f,U=h.style,y=h.extra,T=h.className,q=M()(h,x),K=(0,A.Fg)(),G=b(),nn=G.styles,Q;switch(L){case"text":{Q=(0,d.jsx)(a,t()({className:T,height:j,style:U,width:j*2.9375},q));break}case"combine":{Q=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,t()({height:j,style:U,width:j},q)),(0,d.jsx)(a,{style:{height:j,marginLeft:Math.round(j/4),width:"auto"}})]});break}case"img":default:{Q=(0,d.jsx)(u,t()({height:j,style:U,width:j},q));break}}if(!y)return Q;var W=Math.round(j/3*1.9);return(0,d.jsxs)(I.D,t()(t()({align:"center",className:T,horizontal:!0,style:U},q),{},{children:[Q,(0,d.jsx)(E,{style:{color:K.colorFill,height:W,width:W}}),(0,d.jsx)("div",{className:nn.extraTitle,style:{fontSize:W},children:y})]}))})},48355:function(Zn,Y,n){n.d(Y,{o:function(){return ue}});var _=n(26068),t=n.n(_),V=n(82092),M=n.n(V),A=n(14837),F=n(64419),I=n(30924),r=n(6988),P=n(56875),d=n(44250),E=n(66108),u=n(36419),a=n(75271),B=n(28485),Z=n(25298),g=n.n(Z),b=n(17069),x=n.n(b),D=n(9504),h=n.n(D),S=n(38836),L=n.n(S),f=n(21742),j=n.n(f),U=n(83136),y=n.n(U),T=function(s){j()(o,s);var i=y()(o);function o(){return g()(this,o),i.apply(this,arguments)}return x()(o,[{key:"createDOM",value:function(l){var c=h()(L()(o.prototype),"createDOM",this).call(this,l);return c.classList.add("align-middle"),c}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(l){return new o(l.__text,l.__key)}},{key:"importJSON",value:function(l){var c=(0,u.MX)(l.text);return c.setFormat(l.format),c.setDetail(l.detail),c.setMode(l.mode),c.setStyle(l.style),c}}]),o}(u.R2);function q(s){return new T(s)}var K=n(62657),G=n.n(K),nn=n(48305),Q=n.n(nn),W=n(71561),v=n(60477),R=n(44923),J=n(56995),X=n(69024),C=n(52676),bn=(0,a.createContext)(null),rn=(0,a.memo)(function(s){var i=s.children,o=s.value;return(0,C.jsx)(bn.Provider,{value:o,children:i})}),En=function(){var i=(0,a.useContext)(bn);return i==null?void 0:i.optionsMap},sn=n(33803),p=n(32199),w=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,un="\\(",k=function(i){return"(?:"+i.join("|")+")"},vn=function(i,o){var e=i.length===0?"":"(?!"+i.join("|")+")";return e+"[^\\s"+o+"]"},On=function(i){return"(?:\\.[ |$]|\\s|["+i+"]|)"},Pn=75,Bn=function(i,o){var e=(0,a.useRef)(null),l=(0,W.g)(),c=Q()(l,1),O=c[0],$=(0,sn.y)(i),en=Q()($,3),on=en[0],ln=en[1],z=en[2],Mn=(0,a.useCallback)(function(Sn){var Un=(0,u.dL)(),kn=Un==null?void 0:Un.getNodes();if(!on&&(kn==null?void 0:kn.length)===1&&O.dispatchCommand(o,void 0),on&&(0,u.iO)(Un)){Sn.preventDefault();var de=(0,u.gI)(i);if((0,u.k$)(de))return o&&O.dispatchCommand(o,void 0),de.remove(),!0}return!1},[on,i,o,O]),Dn=(0,a.useCallback)(function(Sn){Sn.stopPropagation(),z(),ln(!0)},[ln,z]);return(0,a.useEffect)(function(){var Sn=e.current;return Sn&&Sn.addEventListener("click",Dn),function(){Sn&&Sn.removeEventListener("click",Dn)}},[Dn]),(0,a.useEffect)(function(){return(0,p.qV)(O.registerCommand(u.MK,Mn,u.KB),O.registerCommand(u.aR,Mn,u.KB))},[O,z,Mn]),[e,on]},Rn=function(){var i=useRef(null),o=useState(!1),e=_slicedToArray(o,2),l=e[0],c=e[1],O=useCallback(function($){$.stopPropagation(),c(function(en){return!en})},[]);return useEffect(function(){var $=i.current;return $&&$.addEventListener("click",O),function(){$&&$.removeEventListener("click",O)}},[O]),[i,l,c]};function ne(s,i,o,e){return new RegExp((i?"(^|\\s|".concat(i,")("):"(^|\\s)(")+k(s)+"((?:"+vn(s,o)+(e?On(o):"")+"){0,"+Pn+"}))$")}function An(s,i,o,e,l){var c=ne(i,o,e,l).exec(s);if(c!==null){var O=c[1],$=c[2],en=c[3];if($.length>0)return{leadOffset:c.index+O.length,matchingString:en,replaceableString:$}}return null}var Qn=function(i,o){var e=o.punctuation,l=o.preTriggerChars,c=o.allowSpaces,O=(0,a.useState)(null),$=Q()(O,2),en=$[0],on=$[1],ln=(0,a.useCallback)(function(z){var Mn=An(z,i,l,e,c);if(Mn){var Dn=Mn.replaceableString,Sn=Mn.matchingString,Un=Dn.lastIndexOf(Sn),kn=Un===-1?Dn:Dn.slice(0,Math.max(0,Un))+Dn.slice(Math.max(0,Un+Sn.length));if(on(kn||null),Mn.replaceableString)return Mn}else on(null);return null},[l,c,e,i]);return{trigger:en,checkForMentionMatch:ln}},$n=n(53649),mn=n.n($n),In=n(47512),cn,Tn,zn,re=(0,In.kc)(function(s,i){var o=s.css,e=s.token,l=s.prefixCls,c=i.isSelected,O=i.isError,$=function(){return O?c?{background:e.colorErrorBgActive,border:e.colorErrorBorderHover,color:e.colorErrorTextActive}:{background:e.colorErrorBg,border:e.colorErrorBorder,color:e.colorErrorText}:c?{background:e.colorInfoBgHover,border:e.colorInfoBorder,color:e.colorInfoText}:{background:e.colorFillTertiary,border:"transparent",color:e.colorInfoText}},en=$(),on=en.background,ln=en.border,z=en.color;return{root:o(cn||(cn=mn()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),e.fontFamilyCode,z,on,ln,e.borderRadius),text:o(Tn||(Tn=mn()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),e.colorTextSecondary),error:o(zn||(zn=mn()([`
        color: `,`;
      `])),e.colorErrorText)}}),tn=(0,u.fA)("INSERT_MENTION_COMMAND"),Hn=(0,u.fA)("DELETE_MENTION_COMMAND"),ce=(0,u.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Ee=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,De=(0,a.memo)(function(s){var i=s.nodeKey,o=s.variable,e=En(),l=(0,W.g)(),c=Q()(l,1),O=c[0],$=Bn(i,Hn),en=Q()($,2),on=en[0],ln=en[1],z=e==null?void 0:e[o],Mn=re({isSelected:ln,isError:!z||!!z.error}),Dn=Mn.styles;(0,a.useEffect)(function(){if(!O.hasNodes([he]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[O]);var Sn=(0,C.jsx)(R.Z,{className:Dn.root,ref:on,children:(0,C.jsxs)(R.Z,{align:"center",gap:2,children:[(!z||z.error)&&(0,C.jsx)(v.Z,{className:Dn.error,icon:X.Z}),(z==null?void 0:z.icon)&&(0,C.jsx)(R.Z,{children:z.icon}),(0,C.jsx)(R.Z,{className:Dn.text,gap:2,title:(z==null?void 0:z.label)||o,children:(0,C.jsx)("span",{children:(z==null?void 0:z.selectedLabel)||(z==null?void 0:z.label)||o})})]})});return z!=null&&z.error?(0,C.jsx)(J.Z,{title:z==null?void 0:z.error,children:Sn}):Sn}),he=function(s){j()(o,s);var i=y()(o);function o(e,l){var c;return g()(this,o),c=i.call(this,l),M()(G()(c),"__variable",void 0),c.__variable=e,c}return x()(o,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var l=document.createElement("div");return l.style.display="inline-flex",l.style.alignItems="center",l.style.verticalAlign="middle",l}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,C.jsx)(De,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var l=this.getLatest();return l.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(l){return new o(l.__variable,l.__key)}},{key:"importJSON",value:function(l){var c=je(l.variable);return c}}]),o}(u.Ij);function je(s){return new he(s)}function Ue(s){return s instanceof he}var dn=(0,a.memo)(function(s){var i=s.onInsert,o=s.onDelete,e=(0,W.g)(),l=Q()(e,1),c=l[0];return(0,a.useEffect)(function(){if(!c.hasNodes([he]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,p.qV)(c.registerCommand(tn,function(O){c.dispatchCommand(ce,null);var $=je(O);return(0,u.od)([$]),i&&i(),!0},u.VN),c.registerCommand(Hn,function(){return o&&o(),!0},u.VN))},[c,i,o]),null});dn.displayName="MentionNodePlugin";var m=(0,u.fA)("INSERT_MENTION_COMMAND"),H=(0,u.fA)("DELETE_MENTION_COMMAND"),N=(0,u.fA)("CLEAR_HIDE_MENU_TIMEOUT"),pn=(0,u.fA)("UPDATE_MENTIONS_OPTIONS"),Cn=function(i,o,e){if(i.isSimpleText())for(var l=i.getPreviousSibling(),c=i.getTextContent(),O=i,$;;){$=o(c);var en=$===null?"":c.slice($.end);if(c=en,en===""){var on=O.getNextSibling();if((0,u.Gg)(on)){en=O.getTextContent()+on.getTextContent();var ln=o(en);if(ln===null){on.markDirty();return}else if(ln.start!==0)return}}else{var z=o(en);if(z!==null&&z.start===0)return}if($===null)return;if(!($.start===0&&(0,u.Gg)(l)&&l.isTextEntity())){var Mn=void 0;if($.start===0){var Dn=O.splitText($.end),Sn=Q()(Dn,2);Mn=Sn[0],O=Sn[1]}else{var Un=O.splitText($.start,$.end),kn=Q()(Un,3);Mn=kn[1],O=kn[2]}var de=e(Mn);if(Mn.replace(de),O==null)return}}};function hn(s){var i=s.split(`
`);return JSON.stringify({root:{children:i.map(function(o){return{children:[{detail:0,format:0,mode:"normal",style:"",text:o,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var an=(0,a.memo)(function(s){var i=s.onInsert,o=(0,W.g)(),e=Q()(o,1),l=e[0];(0,a.useEffect)(function(){if(!l.hasNodes([he]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[l]);var c=(0,a.useCallback)(function(en){i&&i();var on=en.getTextContent().slice(2,-2);return(0,u.U2)(je(on))},[i]),O=(0,a.useCallback)(function(en){var on=Ee.exec(en);if(on===null)return null;var ln=on.index,z=ln+on[0].length;return{end:z,start:ln}},[]),$=(0,a.useCallback)(function(en){return Ee.lastIndex=0,Cn(en,O,c)},[c,O]);return(0,a.useEffect)(function(){return Ee.lastIndex=0,(0,p.qV)(l.registerNodeTransform(T,$))},[]),null}),_n=n(99934),Vn=n(64287),Ln=n(30967),Wn=n(83606),qn=function(s){j()(o,s);var i=y()(o);function o(e){var l,c=e.label,O=e.value,$=e.data,en=e.icon,on=e.extraElement,ln=e.keywords,z=e.keyboardShortcut,Mn=e.disabled,Dn=e.onSelect,Sn=e.children,Un=e.isChild;return g()(this,o),l=i.call(this,O),M()(G()(l),"label",void 0),M()(G()(l),"value",void 0),M()(G()(l),"title",void 0),M()(G()(l),"key",void 0),M()(G()(l),"icon",void 0),M()(G()(l),"extraElement",void 0),M()(G()(l),"keywords",void 0),M()(G()(l),"keyboardShortcut",void 0),M()(G()(l),"onSelect",void 0),M()(G()(l),"disabled",void 0),M()(G()(l),"data",void 0),M()(G()(l),"children",void 0),M()(G()(l),"isChild",void 0),l.value=O,l.label=c,l.title=c,l.key=O,l.keywords=ln||[],l.icon=en,l.extraElement=on,l.keyboardShortcut=z,l.onSelect=Dn.bind(G()(l)),l.disabled=Mn,l.data=$,l.isChild=Un!=null?Un:!1,l.children=Sn==null?void 0:Sn.map(function(kn){return new o(t()(t()({},kn),{},{isChild:!0}))}),l}return x()(o)}(_n.n),le=function s(i,o){var e;return i.children=(e=i.children)===null||e===void 0?void 0:e.filter(function(l){if(!l.children)return o(l);var c=s(l,o);return o(l)||(c.children||[]).length>0}),i},Kn=function(i,o){var e=(0,W.g)(),l=Q()(e,1),c=l[0],O=(0,a.useCallback)(function(en){var on,ln=new RegExp((0,Wn.Z)(o),"i");return ln.test(en.label)||((on=en.keywords)===null||on===void 0?void 0:on.some(function(z){return ln.test(z)}))||!1},[o]),$=(0,a.useMemo)(function(){var en=function ln(z){var Mn=t()(t()({},z),{},{children:void 0,onSelect:function(){c.dispatchCommand(tn,z.value)}});return z.children&&(Mn.children=z.children.map(function(Dn){return ln(Dn)})),Mn},on=i.map(function(ln){return new qn(en(ln))});return o?on.map(function(ln){return ln.children?le(ln,O):ln}).filter(function(ln){return O(ln)||(ln.children||[]).length>0}):on},[i,o,c,O]);return{options:$}},ee=n(78962),jn=n(94729),se,oe,ae,Xn,ve,me,ie,Yn=(0,In.kc)(function(s,i){var o=s.css,e=s.token,l=s.prefixCls,c=i.isSelected,O=i.disabled,$=o(se||(se=mn()([`
      background-color: `,`;
    `])),e.colorFillSecondary);return{anchor:o(oe||(oe=mn()([`
        z-index: 9999;
      `]))),menuEmpty:o(ae||(ae=mn()([`
        padding: `,`px;
      `])),e.padding),menuOverlay:o(Xn||(Xn=mn()([`
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
      `])),e.marginXXS,e.paddingXXS,e.colorBgElevated,e.borderRadius,e.boxShadow,l),menuItem:o(ve||(ve=mn()([`
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
      `])),O?"not-allowed":"pointer",O?"none":"all",e.paddingXS,e.borderRadius,O?e.colorTextDisabled:e.colorText,e.fontSize,c&&$,$),menuItemIcon:o(me||(me=mn()([`
        color: `,`;
      `])),e.colorInfoText),menuItemLabel:o(ie||(ie=mn()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Jn=jn.C.Text,yn=(0,a.memo)(function(s){var i=s.index,o=s.isSelected,e=s.onClick,l=s.onMouseEnter,c=s.option,O=s.queryString,$=s.showIcon,en=$===void 0?!0:$,on=Yn({isSelected:o,disabled:c.disabled}),ln=on.styles,z=c.label,Mn=(0,a.useMemo)(function(){var kn=z,de="",Be="";if(O){var We=new RegExp((0,Wn.Z)(O),"i"),Se=We.exec(c.label);Se&&(kn=z.slice(0,Math.max(0,Se.index)),de=Se[0],Be=z.slice(Math.max(0,Se.index+Se[0].length)))}return{before:kn,middle:de,after:Be}},[c.label,O,z]),Dn=Mn.before,Sn=Mn.middle,Un=Mn.after;return(0,C.jsxs)(R.Z,{align:"center",className:ln.menuItem,gap:4,onClick:function(){return e==null?void 0:e(i,c)},onMouseEnter:function(){return l==null?void 0:l(i,c)},ref:c.setRefElement,tabIndex:-1,children:[en&&(0,C.jsx)(R.Z,{className:ln.menuItemIcon,children:c.icon}),(0,C.jsxs)("div",{className:ln.menuItemLabel,title:c.label,children:[Dn,(0,C.jsx)(Jn,{mark:!0,children:Sn}),Un]}),(0,C.jsx)(R.Z,{children:c.extraElement})]},c.key)});yn.displayName="MentionMenuItem";var fn=(0,a.memo)(function(s){var i=s.selectedIndex,o=s.options,e=s.onClick,l=s.onMouseEnter,c=s.queryString,O=Yn({}),$=O.styles;return(0,C.jsxs)(C.Fragment,{children:[o.length===0&&(0,C.jsx)(ee.Z,{className:$.menuEmpty,image:ee.Z.PRESENTED_IMAGE_SIMPLE}),o.map(function(en,on){return(0,C.jsx)(yn,{index:on,isSelected:i===on,onClick:e,onMouseEnter:l,option:en,queryString:c},en.key)})]})}),gn=(0,a.memo)(function(s){var i=s.overlayClassName,o=s.triggers,e=s.options,l=e===void 0?[]:e,c=s.allowSpaces,O=c===void 0?!0:c,$=s.punctuation,en=$===void 0?w:$,on=s.preTriggerChars,ln=on===void 0?un:on,z=s.onSelect,Mn=Yn({}),Dn=Mn.cx,Sn=Mn.styles,Un=(0,W.g)(),kn=Q()(Un,1),de=kn[0],Be=Qn(o,{punctuation:en,preTriggerChars:ln,allowSpaces:O}),We=Be.trigger,Se=Be.checkForMentionMatch,Xe=(0,a.useState)(null),Ve=Q()(Xe,2),Pe=Ve[0],Ye=Ve[1],Je=Kn(l,Pe),Te=Je.options,Ge=(0,a.useCallback)(function(te,Le,Qe,Ie){z==null||z(te,We,Pe),de.update(function(){Le&&te!==null&&te!==void 0&&te.key&&Le.remove(),te!=null&&te.onSelect&&te.onSelect(Ie),Qe()})},[de,z,Pe,We]),ge=(0,a.useCallback)(function(te){var Le=te.selectedIndex,Qe=te.selectOptionAndCleanUp;return(0,C.jsx)(E.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,C.jsx)(Vn.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Ne,pe){var be=pe.nativeEvent;be.stopPropagation(),de.dispatchCommand(ce,{})},onSelect:function(Ne,pe){Qe(pe.node)},titleRender:function(Ne){var pe;return(0,C.jsx)(yn,{isSelected:((pe=Te[Le])===null||pe===void 0?void 0:pe.value)===Ne.value,option:Ne,queryString:Pe,showIcon:!Ne.isChild})},treeData:Te})})},[Te,de,Pe]),Ke=(0,a.useCallback)(function(te,Le,Qe){var Ie=Le.selectedIndex,Ne=Le.selectOptionAndCleanUp,pe=Le.setHighlightedIndex;return te.current?Ln.createPortal((0,C.jsx)("div",{className:Dn(Sn.menuOverlay,i),role:"menu",children:Te.some(function(be){return(be.children||[]).length>0})?ge(Le):(0,C.jsx)(fn,{onClick:function(Fe,$e){$e.disabled||(pe(Fe),Ne($e))},onMouseEnter:function(Fe,$e){$e.disabled||pe(Fe)},options:Te,queryString:Pe,selectedIndex:Ie})}),te.current):null},[Dn,Te,i,Pe,ge,Sn.menuOverlay]);return(0,C.jsx)(_n.HQ,{anchorClassName:Sn.anchor,menuRenderFn:Ke,onQueryChange:Ye,onSelectOption:Ge,options:Te,triggerFn:Se})}),Fn=function(i){var o=i.onBlur,e=i.onFocus,l=(0,W.g)(),c=Q()(l,1),O=c[0],$=(0,a.useRef)(null);return(0,a.useEffect)(function(){return(0,p.qV)(O.registerCommand(ce,function(){return $.current&&(clearTimeout($.current),$.current=null),!0},u.VN),O.registerCommand(u.Gq,function(en,on){return $.current=setTimeout(function(){O.dispatchCommand(u.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),o&&o(),!0},u.VN),O.registerCommand(u.m$,function(){return e&&e(),!0},u.VN))},[O,o,e]),null},Nn=Fn,Gn,wn,Ce,Oe,Me,xe,ye,Ae,Re=32,ze=22,xn=function(i){return Re+Math.max(i-1,0)*ze},fe=(0,In.kc)(function(s,i){var o=s.css,e=s.token,l=s.prefixCls,c=i.autoSize;return{wrapper:o(Gn||(Gn=mn()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:o(wn||(wn=mn()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Re,e.fontSize,Re,e.colorTextPlaceholder),root:o(Ce||(Ce=mn()([`
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
      `])),e.colorBorder,e.borderRadius,e.colorText,e.fontSize,e.fontFamily,(c==null?void 0:c.minRows)&&o(Oe||(Oe=mn()([`
          min-height: `,`px;
        `])),xn(c.minRows)),(c==null?void 0:c.maxRows)&&o(Me||(Me=mn()([`
          max-height: `,`px;
        `])),xn(c.maxRows)),e.motionDurationMid,e.colorPrimaryBorder,ze),filled:o(xe||(xe=mn()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),e.colorFillTertiary,e.colorFillSecondary,e.colorBgBase),borderless:o(ye||(ye=mn()([`
        background: transparent;
        border: none;
      `]))),disabled:o(Ae||(Ae=mn()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),e.colorTextDisabled,e.colorBgContainerDisabled)}}),ue=function(i){var o=i.className,e=i.classNames,l=i.placeholder,c=i.style,O=i.value,$=i.defaultValue,en=i.readOnly,on=en===void 0?!1:en,ln=i.disabled,z=i.onChange,Mn=i.onBlur,Dn=i.onFocus,Sn=i.variant,Un=Sn===void 0?"outlined":Sn,kn=i.options,de=kn===void 0?[]:kn,Be=i.autoSize,We=i.triggers,Se=We===void 0?["@"]:We,Xe=i.allowSpaces,Ve=i.punctuation,Pe=i.preTriggerChars,Ye=i.onSelect,Je=E.ZP.useConfig(),Te=Je.componentDisabled,Ge=fe({autoSize:Be}),ge=Ge.styles,Ke=Ge.cx,te=ln!=null?ln:Te,Le=!on&&!te,Qe=(0,a.useMemo)(function(){return{namespace:"mentions",nodes:[T,{replace:u.R2,with:function(be){return new T(be.__text)}},he],editorState:hn(O||$||""),onError:function(be){throw be}}},[]),Ie=function(be){var Fe=be.read(function(){return(0,u.Gv)().getTextContent()});z==null||z(Fe.replaceAll(`

`,`
`))},Ne=(0,a.useMemo)(function(){var pe=function be(Fe,$e){return Fe.reduce(function(He,Ze){if(He[Ze.value]=Ze,He[Ze.value].icon||(He[Ze.value].icon=$e),Ze.children&&Ze.children.length>0){var we=be(Ze.children,Ze.icon);Object.assign(He,we)}return He},{})};return pe(de)},[de]);return B.j?(0,C.jsx)(A.R,{initialConfig:t()(t()({},Qe),{},{editable:Le}),children:(0,C.jsx)(rn,{value:{optionsMap:Ne},children:(0,C.jsxs)("div",{className:Ke(ge.wrapper,e==null?void 0:e.wrapper),children:[(0,C.jsx)(d.B,{ErrorBoundary:I.g,contentEditable:(0,C.jsx)(F.f,{className:Ke(M()(M()(M()(M()({},ge.root,!0),ge.filled,Un==="filled"),ge.borderless,Un==="borderless"),ge.disabled,te),o),style:c||{}}),placeholder:(0,C.jsx)("div",{className:ge.placeholder,children:l||"\u8F93\u5165 ".concat(Se.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,C.jsx)(gn,{allowSpaces:Xe,onSelect:Ye,options:de,overlayClassName:e==null?void 0:e.menuOverlay,preTriggerChars:Pe,punctuation:Ve,triggers:Se}),(0,C.jsx)(dn,{}),(0,C.jsx)(an,{}),(0,C.jsx)(r.e,{}),(0,C.jsx)(P.$,{onChange:Ie}),(0,C.jsx)(Nn,{onBlur:Mn,onFocus:Dn})]})})}):(0,C.jsxs)("div",{className:Ke(ge.wrapper,e==null?void 0:e.wrapper),children:[(0,C.jsx)("div",{className:Ke(M()(M()(M()(M()({},ge.root,!0),ge.filled,Un==="filled"),ge.borderless,Un==="borderless"),ge.disabled,te),o),style:c||{}}),(0,C.jsx)("div",{className:ge.placeholder,children:l||"\u8F93\u5165 ".concat(Se.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(Zn,Y,n){n.d(Y,{u:function(){return b}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(51697),F=n(75271),I="yunti-ui",r=n(53649),P=n.n(r),d=n(47512),E,u,a=(0,d.kc)(function(D,h){var S=D.css,L=D.prefixCls,f=h.borderd,j=f===void 0?!0:f,U=h.footer,y=U===null||Array.isArray(U)&&U.length===0,T=S(E||(E=P()([`
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
    `])),L,L,y?0:"40px",L,y?0:"1px");return{custom:S(u||(u=P()([`
        `,`
      `])),j&&T)}},{hashPriority:"low"}),B=n(52676),Z=["className","borderd"],g=function(h){var S=h.className,L=h.borderd,f=L===void 0?!0:L,j=M()(h,Z),U=a(t()({borderd:f},j)),y=U.styles,T=U.cx;return(0,B.jsx)(A.Z,t()(t()({},j),{},{className:T(y.custom,"".concat(I,"-modal"),S)}))},b=g;b.useModal=A.Z.useModal,b.destroyAll=A.Z.destroyAll,b.config=A.Z.config,b._InternalPanelDoNotUseOrYouWillBeFired=A.Z._InternalPanelDoNotUseOrYouWillBeFired,b.info=A.Z.info,b.success=A.Z.success,b.error=A.Z.error,b.warning=A.Z.warning,b.warn=A.Z.warn,b.confirm=A.Z.confirm;var x=null},81321:function(Zn,Y,n){n.d(Y,{ZM:function(){return he},Hu:function(){return T},Xq:function(){return Ue},rE:function(){return je}});var _=n(26068),t=n.n(_),V=n(48305),M=n.n(V),A=n(67825),F=n.n(A),I=n(33592),r=n(75271),P=n(94456),d=n(60477),E=n(71170),u=n(32328),a=n(87449),B=n(28485),Z=n(90228),g=n.n(Z),b=n(87999),x=n.n(b),D=n(97524),h=n(50279),S=n(25298),L=n.n(S),f=n(17069),j=n.n(f),U=n(82092),y=n.n(U),T=function(){function dn(){L()(this,dn),y()(this,"methodMap",void 0),y()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return j()(dn,[{key:"registerMethod",value:function(H,N){this.methodMap[H]=N}},{key:"call",value:function(H){for(var N,pn,Cn=arguments.length,hn=new Array(Cn>1?Cn-1:0),an=1;an<Cn;an++)hn[an-1]=arguments[an];return(N=(pn=this.methodMap)[H])===null||N===void 0?void 0:N.call.apply(N,[pn].concat(hn))}},{key:"updateMeta",value:function(H){Object.assign(this.meta,H)}},{key:"getMeta",value:function(){return Object.freeze(t()({},this.meta))}}]),dn}(),q="__base_monaco_editor_controller__",K=B.j&&window;K&&!K[q]&&(K[q]=new T);var G=K[q],nn=function(){var dn,m;return function(){var H=x()(g()().mark(function N(pn){var Cn;return g()().wrap(function(an){for(;;)switch(an.prev=an.next){case 0:if(!(!dn||!(0,h.Z)(m,pn))){an.next=7;break}return Cn=Object.keys(pn||{}).length>0,D.Z.config(Cn?pn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),an.next=5,D.Z.init();case 5:dn=an.sent,m=pn;case 7:return an.abrupt("return",dn);case 8:case"end":return an.stop()}},N)}));return function(N){return H.apply(this,arguments)}}()}(),Q=function(m){return m?D.Z.config(m):D.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),D.Z.init()};function W(dn){var m=Object.keys(dn||{}).length>0,H=m?dn:void 0;return G.getMeta().singleton?nn(H):Q(H)}function v(dn){controller.updateMeta(dn)}var R=B.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",J=R==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",X={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},C={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function bn(dn){var m=(0,r.useRef)();return(0,r.useEffect)(function(){m.current=dn},[dn]),m.current}function rn(dn,m,H,N){if(N){var pn=dn.editor.getModel(dn.Uri.parse(N));if(pn)return pn}return dn.editor.createModel(m,H,N?dn.Uri.parse(N):void 0)}var En=function(m,H){var N=H.editorDidMount,pn=H.editorWillMount,Cn=H.theme,hn=H.value,an=H.path,_n=H.language,Vn=H.saveViewState,Ln=H.defaultValue,Wn=H.enhancers,qn=(0,r.useState)(!1),le=M()(qn,2),Kn=le[0],ee=le[1],jn=(0,r.useState)(!1),se=M()(jn,2),oe=se[0],ae=se[1],Xn=(0,r.useState)(!1),ve=M()(Xn,2),me=ve[0],ie=ve[1],Yn=(0,r.useRef)(Ln),Jn=(0,r.useRef)(hn),yn=(0,r.useRef)(_n||"text"),fn=(0,r.useRef)(an),gn=bn(an),Fn=(0,r.useRef)(H.requireConfig),Nn=(0,r.useRef)(H.options),Gn=(0,r.useRef)(),wn=(0,r.useRef)(),Ce=(0,r.useRef)(),Oe=(0,r.useRef)(m),Me=(0,r.useRef)(),xe=(0,r.useRef)(),ye=(0,r.useRef)(!1),Ae=(0,r.useRef)(new Map),Re=(0,r.useRef)({});(0,r.useEffect)(function(){Re.current.enhancers=Wn},[Wn]),(0,r.useEffect)(function(){Me.current=N},[N]),(0,r.useEffect)(function(){xe.current=pn},[pn]),(0,r.useEffect)(function(){Jn.current=hn},[hn]),(0,r.useEffect)(function(){yn.current=_n},[_n]),(0,r.useEffect)(function(){Yn.current=Ln},[Ln]),(0,r.useEffect)(function(){ie(!0),W(Fn.current).then(function(xn){var fe;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Gn.current=xn;try{var ue;(ue=xe.current)===null||ue===void 0||ue.call(xe,xn)}catch($){}if(Ce.current){var s;if(Oe.current==="single"){var i,o,e=rn(xn,(i=(o=Jn.current)!==null&&o!==void 0?o:Yn.current)!==null&&i!==void 0?i:"",yn.current,fn.current);s=xn.editor.create(Ce.current,t()(t()({automaticLayout:!0},X),Nn.current)),s.setModel(e)}else{var l=xn.editor.createModel(Jn.current,yn.current),c=xn.editor.createModel(Jn.current,yn.current);s=xn.editor.createDiffEditor(Ce.current,t()(t()({automaticLayout:!0},C),Nn.current)),s.setModel({original:l,modified:c})}wn.current=s,(fe=Re.current.enhancers)===null||fe===void 0||fe.forEach(function($){return $(xn,s)});try{var O;(O=Me.current)===null||O===void 0||O.call(Me,xn,s)}catch($){}ye.current||ee(!0)}}).catch(function(xn){console.error("Monaco Editor Load Error!",xn)}).then(function(){ye.current||ie(!1)})},[]),(0,r.useEffect)(function(){var xn;Kn&&((xn=Gn.current)===null||xn===void 0||xn.editor.setTheme(Cn))},[Kn,Cn]),(0,r.useEffect)(function(){if(Kn){var xn=m==="diff"?wn.current.getModifiedEditor():wn.current;xn==null||xn.onDidFocusEditorText(function(){ye.current||ae(!0)}),xn==null||xn.onDidBlurEditorText(function(){ye.current||ae(!1)})}},[Kn,m]),(0,r.useEffect)(function(){return function(){ye.current=!0}},[]),(0,r.useEffect)(function(){var xn,fe,ue;if(Kn&&!(m!=="diff"&&an)){var s=m==="diff"?wn.current.getModifiedEditor():wn.current,i=(xn=hn!=null?hn:Yn.current)!==null&&xn!==void 0?xn:"",o=(fe=Gn.current)===null||fe===void 0?void 0:fe.editor.EditorOption.readOnly;o&&s!==null&&s!==void 0&&(ue=s.getOption)!==null&&ue!==void 0&&ue.call(s,o)?s==null||s.setValue(i):hn!==(s==null?void 0:s.getValue())&&(s==null||s.executeEdits("",[{range:s==null?void 0:s.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),s==null||s.pushUndoStop())}},[Kn,an,m,hn]),(0,r.useEffect)(function(){var xn,fe;if(Kn&&m!=="diff"&&an!==gn){var ue=rn(Gn.current,(xn=Jn.current)!==null&&xn!==void 0?xn:Yn.current,yn.current,an),s=wn.current;Jn.current!==null&&Jn.current!==void 0&&ue.getValue()!==Jn.current&&ue.setValue(Jn.current),ue!==((fe=wn.current)===null||fe===void 0?void 0:fe.getModel())&&(Vn&&Ae.current.set(gn,s.saveViewState()),s.setModel(ue),Vn&&s.restoreViewState(Ae.current.get(an)))}},[Kn,hn,an,gn,m,Vn]);var ze=wn;return{isEditorReady:Kn,focused:oe,loading:me,containerRef:Ce,monacoRef:Gn,editorRef:ze,valueRef:Jn}},sn=function(m){var H=(0,r.useState)(!1),N=M()(H,2),pn=N[0],Cn=N[1],hn=function(){if(pn){Cn(!1),m==null||m.updateOptions(t()(t()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!1}})),m==null||m.layout();return}Cn(!0),m==null||m.updateOptions(t()(t()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!0}})),m==null||m.layout()};return{isFullScreen:pn,fullScreen:hn}},p=n(53649),w=n.n(p),un=n(47512),k,vn,On,Pn,Bn,Rn,ne,An,Qn,$n,mn,In=(0,un.kc)(function(dn,m){var H=dn.css,N=dn.token,pn=dn.prefixCls,Cn=m.minimapEnabled,hn=Cn===void 0?!1:Cn,an=m.isFullScreen,_n=an===void 0?!1:an,Vn=m.diff,Ln=Vn===void 0?!1:Vn,Wn=m.variant,qn=Wn===void 0?"outlined":Wn,le=(0,un.F4)(k||(k=w()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),Kn=function(){switch(qn){case"outlined":return N.colorBgBase;case"filled":return N.colorFillTertiary;default:return"transparent"}};return{base:H(vn||(vn=w()([`
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
      `])),Kn(),qn==="outlined"?N.colorBorder:"transparent",N.borderRadius,qn==="outlined"?N.colorPrimaryHover:"transparent",qn==="filled"&&H(On||(On=w()([`
            background-color: `,`;
          `])),N.colorFillSecondary),qn==="filled"&&H(Pn||(Pn=w()([`
            background-color: `,`;
          `])),N.colorBgBase),qn!=="borderless"&&H(Bn||(Bn=w()([`
            border-color: `,`;
          `])),N.colorPrimaryActive),_n&&H(Rn||(Rn=w()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!_n&&H(ne||(ne=w()([`
              background-color: transparent;
            `]))),N.borderRadius,N.borderRadius,N.borderRadius,N.borderRadius,N.borderRadius,N.borderRadius,N.borderRadius,N.borderRadius,N.borderRadius,N.borderRadius,N.borderRadius-1,N.borderRadius-1,N.colorErrorText,N.colorErrorBg),fullScreenBtn:H(An||(An=w()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),pn,N.colorTextSecondary,_n?H(Qn||(Qn=w()([`
                z-index: 9999;
                right: `,`px;
              `])),Ln?64:138):H($n||($n=w()([`
                right: `,`px;
              `])),hn||Ln?64:20)),loading:H(mn||(mn=w()([`
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
      `])),N.fontSizeSM,N.colorTextTertiary,le)}},{hashPriority:"low"}),cn=n(52676);function Tn(){}var zn=function(m){var H,N=m.onChange,pn=m.enableOutline,Cn=m.width,hn=m.height,an=m.language,_n=m.supportFullScreen,Vn=(0,r.useRef)(N),Ln=En("single",m),Wn=Ln.isEditorReady,qn=Ln.focused,le=Ln.loading,Kn=Ln.containerRef,ee=Ln.monacoRef,jn=Ln.editorRef,se=Ln.valueRef,oe=(0,r.useRef)(),ae=sn(jn==null?void 0:jn.current),Xn=ae.isFullScreen,ve=ae.fullScreen,me=In({isFullScreen:Xn,minimapEnabled:(H=m.options)===null||H===void 0||(H=H.minimap)===null||H===void 0?void 0:H.enabled,variant:m.variant}),ie=me.cx,Yn=me.styles,Jn=ie(Yn.base,m.className,{"ve-focused":qn,"ve-outline":pn}),yn=(0,r.useMemo)(function(){return{width:Cn,height:hn}},[Cn,hn]);return(0,r.useEffect)(function(){Vn.current=N},[N]),(0,r.useEffect)(function(){if(Wn){var fn,gn=jn.current;(fn=oe.current)===null||fn===void 0||fn.dispose(),oe.current=gn==null?void 0:gn.onDidChangeModelContent(function(Fn){var Nn,Gn=gn==null||(Nn=gn.getModel())===null||Nn===void 0?void 0:Nn.getValue();if(se.current!==Gn){var wn;(wn=Vn.current)===null||wn===void 0||wn.call(Vn,Gn,Fn)}})}},[jn,Wn,oe,se]),(0,r.useEffect)(function(){return function(){var fn,gn,Fn,Nn=jn.current;(fn=oe.current)===null||fn===void 0||fn.dispose(),Nn==null||(gn=Nn.getModel())===null||gn===void 0||gn.dispose(),(Fn=jn.current)===null||Fn===void 0||Fn.dispose()}},[jn]),(0,r.useEffect)(function(){var fn;if(Wn){var gn=(fn=jn.current)===null||fn===void 0?void 0:fn.getModel();if(gn){var Fn;(Fn=ee.current)===null||Fn===void 0||Fn.editor.setModelLanguage(gn,an)}}},[jn,Wn,an,ee]),(0,cn.jsxs)("div",{className:Jn,style:m.style,children:[le&&(0,cn.jsx)("span",{className:ie(Yn.loading,"loading"),children:J}),(0,cn.jsx)("div",{className:"react-monaco-editor-container",ref:Kn,style:yn,children:_n&&(0,cn.jsx)(E.ZP,{className:Yn.fullScreenBtn,icon:(0,cn.jsx)(d.Z,{icon:Xn?u.Z:a.Z}),onClick:ve,size:"small",type:"text"})})]})},re=function(m){var H=m.enableOutline,N=m.width,pn=m.height,Cn=m.language,hn=m.onChange,an=m.original,_n=m.supportFullScreen,Vn=(0,r.useRef)(hn),Ln=En("diff",m),Wn=Ln.isEditorReady,qn=Ln.focused,le=Ln.loading,Kn=Ln.containerRef,ee=Ln.monacoRef,jn=Ln.editorRef,se=Ln.valueRef,oe=sn(),ae=oe.isFullScreen,Xn=oe.fullScreen,ve=In({isFullScreen:ae,diff:!0,variant:m.variant}),me=ve.cx,ie=ve.styles,Yn=me(ie.base,m.className,{"ve-focused":qn,"ve-outline":H}),Jn=(0,r.useMemo)(function(){return{width:N,height:pn}},[N,pn]);return(0,r.useEffect)(function(){Vn.current=hn},[hn]),(0,r.useEffect)(function(){var yn;if(Wn){(yn=jn.current.getModel())===null||yn===void 0||yn.original.setValue(an!=null?an:"");var fn=jn.current.getModel()||{},gn=fn.modified;gn==null||gn.onDidChangeContent(function(Fn){var Nn=gn.getValue();if(se.current!==Nn){var Gn;(Gn=Vn.current)===null||Gn===void 0||Gn.call(Vn,Nn,Fn)}})}},[jn,Wn,an,se]),(0,r.useEffect)(function(){return function(){var yn,fn,gn;(yn=jn.current)===null||yn===void 0||(yn=yn.getModel())===null||yn===void 0||(yn=yn.original)===null||yn===void 0||yn.dispose(),(fn=jn.current)===null||fn===void 0||(fn=fn.getModel())===null||fn===void 0||(fn=fn.modified)===null||fn===void 0||fn.dispose(),(gn=jn.current)===null||gn===void 0||gn.dispose()}},[jn]),(0,r.useEffect)(function(){var yn,fn,gn;if(Wn){var Fn=((yn=jn.current)===null||yn===void 0?void 0:yn.getModel())||{},Nn=Fn.original,Gn=Fn.modified;(fn=ee.current)===null||fn===void 0||fn.editor.setModelLanguage(Nn,Cn),(gn=ee.current)===null||gn===void 0||gn.editor.setModelLanguage(Gn,Cn)}},[jn,Wn,Cn,ee]),(0,cn.jsxs)("div",{className:Yn,style:m.style,children:[le&&(0,cn.jsx)("span",{className:me(ie.loading,"loading"),children:J}),(0,cn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Kn,style:Jn,children:_n&&(0,cn.jsx)(E.ZP,{className:ie.fullScreenBtn,icon:(0,cn.jsx)(d.Z,{icon:ae?u.Z:a.Z}),onClick:Xn,size:"small",type:"text"})})]})},tn=Object.assign(re,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:X,editorDidMount:Tn,editorWillMount:Tn,onChange:Tn,requireConfig:{}}}),Hn=Object.assign(zn,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:X,editorDidMount:Tn,editorWillMount:Tn,onChange:Tn,requireConfig:{}},MonacoDiffEditor:tn}),ce=null,Ee=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],De=["inlineView","options"],he=function(m){var H=m.type,N=H===void 0?"single":H,pn=m.editorDidMount,Cn=m.readOnly,hn=Cn===void 0?!1:Cn,an=m.lineNumbers,_n=an===void 0?"on":an,Vn=m.wordWrap,Ln=Vn===void 0?"off":Vn,Wn=m.contextmenu,qn=Wn===void 0?!0:Wn,le=m.theme,Kn=m.minimapEnabled,ee=Kn===void 0?!1:Kn,jn=m.version,se=jn===void 0?"0.45.0":jn,oe=m.requireConfig,ae=oe===void 0?{}:oe,Xn=m.options,ve=m.className,me=m.supportFullScreen,ie=F()(m,Ee),Yn=(0,r.useRef)(pn);(0,r.useEffect)(function(){Yn.current=pn},[pn]);var Jn=(0,I.r)(),yn=Jn.isDarkMode,fn=(0,r.useMemo)(function(){return le||(yn?"vs-dark":"vs")},[yn,le]),gn=(0,r.useState)(),Fn=M()(gn,2),Nn=Fn[0],Gn=Fn[1],wn=(0,r.useCallback)(function(xe,ye){var Ae;Gn(ye),(Ae=Yn.current)===null||Ae===void 0||Ae.call(Yn,xe,ye)},[]),Ce=(0,r.useMemo)(function(){var xe=Object.assign({},Xn,{readOnly:hn,lineNumbers:_n,wordWrap:Ln,contextmenu:qn,minimap:ee===void 0?Xn==null?void 0:Xn.minimap:Object.assign({},Xn==null?void 0:Xn.minimap,{enabled:ee})});return Nn==null||Nn.updateOptions(xe),xe},[Xn,hn,_n,Ln,qn,ee,Nn]),Oe=(0,P.nc)(),Me=(0,r.useMemo)(function(){return Object.assign({},ae,{paths:t()({vs:Oe({path:"min/vs",pkg:"monaco-editor",version:se})},ae.paths)})},[Oe,ae,se]);return N!=="diff"?(0,cn.jsx)(Hn,t()({className:ve,editorDidMount:wn,options:Ce,requireConfig:Me,supportFullScreen:Nn&&me,theme:fn},ie)):(0,cn.jsx)(Hn.MonacoDiffEditor,t()({className:ve,editorDidMount:wn,options:Ce,requireConfig:Me,supportFullScreen:Nn&&me,theme:fn},ie))},je=function(m){return(0,cn.jsx)(he,t()(t()({},m),{},{type:"single"}))},Ue=function(m){var H=m.inlineView,N=H===void 0?"off":H,pn=m.options,Cn=F()(m,De);return(0,cn.jsx)(he,t()(t()({options:Object.assign({useInlineViewWhenSpaceIsLimited:N==="on"||N==="auto",renderSideBySide:N==="off"||N==="auto"},pn)},Cn),{},{type:"diff"}))}},64521:function(Zn,Y,n){n.d(Y,{Y:function(){return b}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(20219),F=n(75271),I=n(53649),r=n.n(I),P=n(47512),d,E,u,a,B=(0,P.kc)(function(h,S){var L=h.css,f=h.token,j=h.prefixCls,U=S.size,y=S.segmented,T=function(){return y?y!==!0?y.gap:!0:0}(),q=function(){if(y)return y!==!0?y.borderRadius:!0}(),K=function(){var R={small:f.sizeSM,middle:f.size,large:f.sizeLG};return typeof T=="string"?R[T]:T===!0?U?R[U]:R.middle:T||0},G=function(){var R={small:f.controlHeightSM,middle:f.controlHeight,large:f.controlHeightLG};if(q===!0)return U?R[U]:R.middle;if(q||q===0)return q},nn=G()&&L(d||(d=r()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),G()),Q=L(E||(E=r()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),K()),W=y===!0||y&&!y.bordered;return{custom:L(u||(u=r()([`
        `,`
        `,`
        `,`
      `])),nn,Q,W&&L(a||(a=r()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),j,j,f.colorPrimary))}},{hashPriority:"low"}),Z=n(52676),g=["className"],b=A.ZP,x=function(S){var L=S.className,f=M()(S,g);f.segmented&&(f.optionType="button");var j=B(f),U=j.styles,y=j.cx;return(0,Z.jsx)(A.ZP.Group,t()(t()({},f),{},{className:y(U.custom,L)}))};b.Group=x;var D=null},25777:function(Zn,Y,n){n.d(Y,{W:function(){return G}});var _=n(26068),t=n.n(_),V=n(15558),M=n.n(V),A=n(48305),F=n.n(A),I=n(67825),r=n.n(I),P=n(60477),d=n(83293),E=n(44923),u=n(46847),a=n(82338),B=n(2405),Z=n(75271),g=n(53649),b=n.n(g),x=n(47512),D,h,S,L,f,j=function(Q){switch(Q){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},U=(0,x.kc)(function(nn,Q){var W=nn.css,v=nn.token,R=nn.prefixCls,J=Q.disabled,X=Q.size,C=j(X),bn=C.cardWidth;return{option:W(D||(D=b()([`
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
      `])),v.colorBorder,v.borderRadius,J?"not-allowed":"pointer",v.padding,v.motionDurationFast,bn,J&&W(h||(h=b()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),v.colorBgContainerDisabled,R,v.colorTextDisabled,R,v.colorTextDisabled),!J&&W(S||(S=b()([`
          &:hover {
            border-color: `,`;
          }
        `])),v.colorPrimaryBorderHover),R),optionSelected:W(L||(L=b()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),v.colorPrimary,v.colorPrimaryActive),check:W(f||(f=b()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),v.marginXS,v.marginXS,v.colorPrimary)}}),y=n(52676),T=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],q=d.Z.Text,K=d.Z.Paragraph,G=Z.forwardRef(function(nn,Q){var W=nn.defaultValue,v=nn.value,R=nn.onChange,J=nn.multiple,X=J===void 0?!1:J,C=nn.disabled,bn=C===void 0?!1:C,rn=nn.options,En=rn===void 0?[]:rn,sn=nn.classNames,p=nn.styles,w=nn.size,un=w===void 0?"middle":w,k=nn.optionRender,vn=r()(nn,T),On=(0,Z.useMemo)(function(){return En.some(function(tn){return!!tn.img||!!tn.icon})},[En]),Pn=U({disabled:bn,size:un}),Bn=Pn.cx,Rn=Pn.styles,ne=(0,Z.useMemo)(function(){return j(un)},[un]),An=ne.imgHeight,Qn=(0,Z.useCallback)(function(tn){return!X||Array.isArray(tn)?tn:tn===void 0?[]:[tn]},[X]),$n=(0,B.C8)(Qn(W),{defaultValue:Qn(W),value:v,onChange:R}),mn=F()($n,2),In=mn[0],cn=mn[1],Tn=(0,Z.useCallback)(function(tn){if(!bn){if(!X){cn(tn);return}if(In.includes(tn)){cn(In.filter(function(Hn){return Hn!==tn}));return}cn([].concat(M()(In),[tn]))}},[In,bn,X,cn]),zn=(0,Z.useCallback)(function(tn){return X?In.includes(tn):In===tn},[In,X]),re=(0,Z.useCallback)(function(tn,Hn){var ce=zn(tn.value),Ee=(0,y.jsxs)(E.Z,{align:On?"center":"flex-start",className:Bn(Rn.option,ce&&Rn.optionSelected,sn==null?void 0:sn.card),gap:"small",onClick:function(){return Tn(tn.value)},style:t()(t()({},p==null?void 0:p.card),tn.style),vertical:!0,children:[On&&(0,y.jsx)(u.C,{className:sn==null?void 0:sn.icon,icon:tn.icon,shape:"square",size:An,src:tn.img,style:t()(t()({},p==null?void 0:p.icon),tn.iconStyle)}),tn.label&&ce&&(0,y.jsx)(q,{ellipsis:!0,strong:!0,children:tn.label}),tn.label&&!ce&&(0,y.jsx)(q,{ellipsis:!0,children:tn.label}),!On&&tn.description&&(0,y.jsx)(K,{ellipsis:{rows:2},type:"secondary",children:tn.description}),ce&&(0,y.jsx)(P.Z,{className:Rn.check,icon:a.Z})]},tn.value);return k?k(Ee,tn,Hn):Ee},[sn==null?void 0:sn.card,sn==null?void 0:sn.icon,Bn,An,On,zn,Tn,k,Rn.check,Rn.option,Rn.optionSelected,p==null?void 0:p.card,p==null?void 0:p.icon]);return(0,y.jsx)(E.Z,t()(t()({gap:"large",ref:Q,wrap:!0},vn),{},{children:En.map(function(tn,Hn){return re(tn,Hn)})}))})},66269:function(Zn,Y,n){n.d(Y,{a:function(){return E}});var _=n(26068),t=n.n(_),V=n(48305),M=n.n(V),A=n(26582),F=n(68526),I=n(27896),r=n(96965),P=n(75271),d=n(52676),E=function(a){var B=a.value,Z=a.defaultValue,g=a.min,b=g===void 0?0:g,x=a.max,D=a.step,h=a.gutter,S=h===void 0?16:h,L=a.sliderCol,f=L===void 0?{span:12}:L,j=a.inputCol,U=j===void 0?{span:5}:j,y=a.addonAfter,T=a.addonBefore,q=a.placeholder,K=a.onChange,G=a.style,nn=a.className,Q=a.sliderProps,W=Q===void 0?{}:Q,v=a.inputProps,R=v===void 0?{}:v,J=(0,P.useState)(),X=M()(J,2),C=X[0],bn=X[1],rn=function(sn){Number.isNaN(sn)||(bn(sn),K==null||K(sn))};return(0,d.jsxs)(A.Z,{className:nn,gutter:S,style:G,children:[(0,d.jsx)(F.Z,t()(t()({},f),{},{children:(0,d.jsx)(I.Z,t()(t()({},W),{},{defaultValue:Z,max:x,min:b,onChange:rn,step:D,value:B!=null?B:C}))})),(0,d.jsx)(F.Z,t()(t()({},U),{},{children:(0,d.jsx)(r.Z,t()(t()({},R),{},{addonAfter:y,addonBefore:T,defaultValue:Z,max:x,min:b,onChange:rn,placeholder:q,step:D,value:B!=null?B:C}))}))]})}},56482:function(Zn,Y,n){n.d(Y,{N:function(){return Z}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(97912),F=n(75271),I=n(79213),r=n(53649),P=n.n(r),d=n(47512),E,u=(0,d.kc)(function(g){var b=g.css,x=g.token,D=g.prefixCls;return{table:b(E||(E=P()([`
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
    `])),D,x.colorTextTertiary)}}),a=n(52676),B=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],Z=function(b){var x=b.rootStyle,D=b.rootClassName,h=b.icon,S=b.title,L=b.variant,f=b.defaultActive,j=b.extra,U=b.className,y=M()(b,B),T=u(),q=T.cx,K=T.styles;return(0,a.jsx)(I.w,{className:D,style:x,icon:h,title:S,variant:L,defaultActive:f,extra:j,children:(0,a.jsx)(A.Z,t()({className:q(K.table,U),pagination:!1,rowHoverable:!1,size:"small"},y))})}},11546:function(Zn,Y,n){n.d(Y,{NU:function(){return r.N},iA:function(){return E}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(56995),F=n(97912),I=n(75271),r=n(56482),P=n(52676),d=["columns"],E=function(B){var Z=B.columns,g=M()(B,d),b=(0,I.useMemo)(function(){return Z==null?void 0:Z.map(function(x){if(x.render)return x;if(x.ellipsis&&x.ellipsis!==!0&&x.ellipsis.showTitle||x.ellipsis===!0){var D=x.ellipsis===!0?{}:x.ellipsis;return t()(t()({},x),{},{ellipsis:{showTitle:!1},render:function(S){return S||S===0?(0,P.jsx)(A.Z,t()(t()({},D),{},{placement:"topLeft",title:S,children:S})):"-"}})}return x.render||(x.render=function(h){return h!=null?h:"-"}),x})},[Z]);return(0,P.jsx)(F.Z,t()(t()({},g),{},{columns:b}))};E.displayName="Table",E.SELECTION_COLUMN=F.Z.SELECTION_COLUMN,E.EXPAND_COLUMN=F.Z.EXPAND_COLUMN,E.SELECTION_ALL=F.Z.SELECTION_ALL,E.SELECTION_INVERT=F.Z.SELECTION_INVERT,E.SELECTION_NONE=F.Z.SELECTION_NONE,E.Column=F.Z.Column,E.ColumnGroup=F.Z.ColumnGroup,E.Summary=F.Z.Summary,E.Collapse=r.N;var u=null},8559:function(Zn,Y,n){n.d(Y,{G:function(){return Z}});var _=n(53649),t=n.n(_),V=n(47512),M=n(75271),A=n(52676),F,I,r,P,d,E,u,a,B=(0,V.kc)(function(g,b){var x=g.css,D=(0,V.F4)(F||(F=t()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),h=(0,V.F4)(I||(I=t()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),S=(0,V.F4)(r||(r=t()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:x(P||(P=t()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),b.width||34,b.height||22,b.bgColor||"transparent"),line:x(d||(d=t()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),b.lineColor||"#000"),animate1:x(E||(E=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),D),animate2:x(u||(u=t()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),h),animate3:x(a||(a=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),S)}}),Z=function(b){var x=b.height,D=b.width,h=b.lineColor,S=b.bgColor,L=B({height:x,width:D,lineColor:h,bgColor:S}),f=L.styles,j=L.cx;return(0,A.jsxs)("div",{className:f.box,children:[(0,A.jsx)("div",{className:j(f.line,f.animate1)}),(0,A.jsx)("div",{className:j(f.line,f.animate2)}),(0,A.jsx)("div",{className:j(f.line,f.animate3)}),(0,A.jsx)("div",{className:j(f.line,f.animate2)}),(0,A.jsx)("div",{className:j(f.line,f.animate1)}),(0,A.jsx)("div",{className:j(f.line,f.animate2)}),(0,A.jsx)("div",{className:j(f.line,f.animate1)})]})}},71983:function(Zn,Y,n){n.r(Y),n.d(Y,{Affix:function(){return vn.Z},Alert:function(){return B.b},Anchor:function(){return On.Z},AntdMentions:function(){return Pn.Z},App:function(){return Z.g},AudioPlayer:function(){return Ae.Z},AutoComplete:function(){return Bn.Z},Avatar:function(){return Rn.C},BackTop:function(){return ne.Z},Badge:function(){return An.Z},BaseMonacoEditor:function(){return r.ZM},Breadcrumb:function(){return g.Z},Button:function(){return Qn.ZP},ButtonGroup:function(){return _.h},Calendar:function(){return $n.Z},Card:function(){return b.Z},Carousel:function(){return mn.Z},Cascader:function(){return In.Z},ChatInputActionBar:function(){return G.Z},ChatInputArea:function(){return K.Z},ChatInputAreaInner:function(){return nn.Z},ChatItem:function(){return R.z},ChatSendButton:function(){return Q.Z},Checkbox:function(){return cn.Z},Col:function(){return Tn.Z},Collapse:function(){return zn.Z},CollapseGroup:function(){return t.w},CollapseTable:function(){return T.NU},ColorPicker:function(){return re.Z},ConfigContext:function(){return V.E_},ConfigProvider:function(){return V.iV},CopyButton:function(){return Oe.Z},DatePicker:function(){return tn.default},Descriptions:function(){return x.w},Divider:function(){return D.i},DragPanel:function(){return M.U},Drawer:function(){return h.d},Dropdown:function(){return S.L},EditableMessage:function(){return J.i},Empty:function(){return Hn.Z},Flex:function(){return ce.Z},FloatButton:function(){return Ee.Z},Form:function(){return L.l},FormCollapseList:function(){return L.E},FormHelper:function(){return f.wK},FullFeaturedHighlighter:function(){return X.EL},Grid:function(){return De.ZP},Highlighter:function(){return X.oP},Image:function(){return he.Z},Input:function(){return je.Z},InputNumber:function(){return Ue.Z},Layout:function(){return dn.Z},List:function(){return m.Z},LogViewer:function(){return F.n},Logo:function(){return A.T},Markdown:function(){return Me.Z},Mentions:function(){return I.o},Menu:function(){return H.Z},MobileChatInputArea:function(){return W.Z},MobileChatSendButton:function(){return v.Z},Modal:function(){return j.u},MonacoController:function(){return r.Hu},MonacoDiffEditor:function(){return r.Xq},MonacoEditor:function(){return r.rE},NotificationGlobalStyle:function(){return U.EZ},Page:function(){return P.T},Pagination:function(){return pn.Z},Popconfirm:function(){return Cn.Z},Popover:function(){return hn.Z},ProCard:function(){return d.Q},Progress:function(){return an.Z},QRCode:function(){return _n.Z},Radio:function(){return y.Y},Rate:function(){return Vn.Z},Result:function(){return Ln.ZP},Row:function(){return Wn.Z},Segmented:function(){return qn.Z},Select:function(){return le.default},SelectCard:function(){return E.W},Skeleton:function(){return Kn.Z},Slider:function(){return ee.Z},SliderInput:function(){return u.a},Space:function(){return jn.Z},SpeechSynthesisTTS:function(){return ye.H},Spin:function(){return se.Z},Statistic:function(){return oe.Z},Status:function(){return a.q},Steps:function(){return ae.Z},Switch:function(){return Xn.Z},SyntaxHighlighter:function(){return xe.Z},Table:function(){return T.iA},Tabs:function(){return ve.Z},Tag:function(){return me.Z},TimePicker:function(){return Jn.Z},Timeline:function(){return Yn.Z},Tooltip:function(){return yn.Z},Tour:function(){return fn.Z},Transfer:function(){return gn.Z},Tree:function(){return Fn.Z},TreeSelect:function(){return Nn.Z},Typography:function(){return q.Z},Upload:function(){return Gn.Z},Watermark:function(){return Ce.Z},WaveformIcon:function(){return k.G},colorScales:function(){return C._},colors:function(){return C._},generateColorNeutralPalette:function(){return p},generateColorPalette:function(){return sn},message:function(){return N.ZP},neutralColorScales:function(){return w},notification:function(){return U.t6},theme:function(){return ie.Z},useAudioPlayer:function(){return Re.x},useAutoFocus:function(){return f.wL},useCdnFn:function(){return V.nc},useLink:function(){return V.nB},useResponsive:function(){return xn.F},useSpeechRecognition:function(){return ze.x},useSpeechSynthes:function(){return un.J},useTheme:function(){return fe.Fg},useThemeMode:function(){return ue.r},version:function(){return wn.Z},withFormHelper:function(){return f.MX}});var _=n(12644),t=n(79213),V=n(94456),M=n(13306),A=n(52625),F=n(25969),I=n(48355),r=n(81321),P=n(40305),d=n(86346),E=n(25777),u=n(66269),a=n(46119),B=n(58479),Z=n(5244),g=n(77789),b=n(39824),x=n(26345),D=n(82227),h=n(5795),S=n(99512),L=n(62719),f=n(20147),j=n(97527),U=n(40130),y=n(64521),T=n(11546),q=n(94729),K=n(52412),G=n(65059),nn=n(51874),Q=n(62999),W=n(82367),v=n(65677),R=n(92436),J=n(99335),X=n(17853),C=n(15094),bn=n(82092),rn=n.n(bn),En=n(98644),sn=function(i){var o=i.type,e=i.scale,l=i.appearance,c=(0,En.Z)(o),O=l==="dark";return rn()(rn()(rn()(rn()(rn()(rn()(rn()(rn()(rn()(rn()({},"color".concat(c,"Bg"),e[l][1]),"color".concat(c,"BgHover"),e[l][2]),"color".concat(c,"Border"),e[l][4]),"color".concat(c,"BorderHover"),e[l][O?5:3]),"color".concat(c,"Hover"),e[l][O?10:8]),"color".concat(c),e[l][9]),"color".concat(c,"Active"),e[l][O?7:10]),"color".concat(c,"TextHover"),e[l][O?10:8]),"color".concat(c,"Text"),e[l][9]),"color".concat(c,"TextActive"),e[l][O?7:10])},p=function(i){var o=i.scale,e=i.appearance;return{colorBgContainer:e==="dark"?o[e][1]:o[e][0],colorBgElevated:e==="dark"?o[e][2]:o[e][0],colorBgLayout:e==="dark"?o[e][0]:o[e][1],colorBgMask:o.lightA[8],colorBgSpotlight:o[e][5],colorBorder:o[e][4],colorBorderSecondary:o[e][3],colorFill:o["".concat(e,"A")][3],colorFillQuaternary:o["".concat(e,"A")][0],colorFillSecondary:o["".concat(e,"A")][2],colorFillTertiary:o["".concat(e,"A")][1],colorText:o[e][12],colorTextQuaternary:o[e][6],colorTextSecondary:o[e][10],colorTextTertiary:o[e][8]}},w={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},un=n(82846),k=n(8559),vn=n(7904),On=n(58190),Pn=n(46621),Bn=n(85958),Rn=n(46847),ne=n(66075),An=n(1088),Qn=n(71170),$n=n(3957),mn=n(57512),In=n(52279),cn=n(43584),Tn=n(68526),zn=n(90026),re=n(64479),tn=n(1409),Hn=n(78962),ce=n(44923),Ee=n(6697),De=n(82366),he=n(69414),je=n(99707),Ue=n(96965),dn=n(93702),m=n(78104),H=n(74032),N=n(57939),pn=n(4211),Cn=n(45590),hn=n(31997),an=n(35357),_n=n(82830),Vn=n(76177),Ln=n(46504),Wn=n(26582),qn=n(13927),le=n(35092),Kn=n(99021),ee=n(27896),jn=n(43356),se=n(49553),oe=n(43954),ae=n(59470),Xn=n(74798),ve=n(60756),me=n(53453),ie=n(22972),Yn=n(46141),Jn=n(20907),yn=n(56995),fn=n(33858),gn=n(96208),Fn=n(64287),Nn=n(6036),Gn=n(72023),wn=n(38208),Ce=n(55366),Oe=n(81107),Me=n(85814),xe=n(74974),ye=n(49724),Ae=n(83595),Re=n(61984),ze=n(8281),xn=n(81134),fe=n(47512),ue=n(33592)},40130:function(Zn,Y,n){n.d(Y,{EZ:function(){return b.E},t6:function(){return nn}});var _=n(26068),t=n.n(_),V=n(67825),M=n.n(V),A=n(48305),F=n.n(A),I=n(335),r=n.n(I),P=n(30657),d=n(19728),E=n(22620),u=n(90026),a=n(83293),B=n(98943),Z=n(75271),g=n(52676),b=n(55300),x=["detail","message","description","onClose","className"],D=u.Z.Panel,h=a.Z.Link,S=a.Z.Paragraph,L=a.Z.Text,f={},j=function(v,R){f[v]||(f[v]=[]),f[v].push(R)},U=function(v){delete f[v]},y=function W(v){var R="";if(typeof v=="string")R=v;else if(typeof v=="number")R=v.toString();else if(Array.isArray(v)){var J=r()(v),X;try{for(J.s();!(X=J.n()).done;){var C=X.value;R+=W(C)}}catch(bn){J.e(bn)}finally{J.f()}}else(0,Z.isValidElement)(v)&&(R+=W(v.props.children));return R},T=function(v){var R,J=v.noticeKey,X=v.message,C=((R=f[J])===null||R===void 0?void 0:R.length)||0;return(0,g.jsxs)(g.Fragment,{children:[X,C>1&&" (".concat(C,")")]})},q=function(v){var R=v.noticeKey,J=(0,Z.useState)(),X=F()(J,2),C=X[0],bn=X[1],rn={},En=r()(f[R]),sn;try{for(En.s();!(sn=En.n()).done;){var p=sn.value,w=y(p.description);p.descKey=w,rn[w]=p}}catch(un){En.e(un)}finally{En.f()}return(0,g.jsx)(u.Z,{accordion:!0,activeKey:C,className:"yunti-notification-collapse",expandIcon:function(k){var vn=k.isActive;return(0,g.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:vn?(0,g.jsx)(h,{className:"yunti-notification-link",children:(0,g.jsx)(P.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,g.jsx)(d.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(k){bn(k)},children:Object.values(rn).map(function(un){var k=un.descKey,vn=un.description,On=un.detail;return(0,g.jsx)(D,{header:(0,g.jsx)(L,{ellipsis:{tooltip:!1},style:{width:250},children:vn}),children:(0,g.jsx)(S,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(On,null,2)},type:"secondary",children:(0,g.jsx)("pre",{children:JSON.stringify(On,null,2)})})},k)})})},K=function(v){var R=v.detail,J=v.message,X=v.description,C=v.onClose,bn=v.className,rn=M()(v,x),En=y(J);j(En,v);var sn=function(){C==null||C(),U(En)};return v.type==="warning"&&!v.icon&&(rn.icon=(0,g.jsx)(E.Z,{style:{color:"#ff7d00"}})),R?B.ZP.open(t()({key:En,message:(0,g.jsx)(T,{message:J,noticeKey:En}),description:(0,g.jsx)(q,{noticeKey:En}),onClose:sn,className:"yunti-notification ".concat(bn)},rn)):B.ZP.open(t()({key:En,message:(0,g.jsx)(T,{message:J,noticeKey:En}),description:X,onClose:sn,className:"yunti-notification ".concat(bn)},rn))},G=function(v){var R;if(((v==null||(R=v.errors)===null||R===void 0?void 0:R.length)||0)>0){v!=null&&v.errors;var J=r()((v==null?void 0:v.errors)||[]),X;try{for(J.s();!(X=J.n()).done;){var C=X.value;K(t()(t()({detail:C,description:C.message},v),{},{type:"warning"}))}}catch(bn){J.e(bn)}finally{J.f()}}else K(t()(t()({},v),{},{type:"warning"}))},nn=t()(t()({},B.ZP),{},{success:function(v){return K(t()(t()({},v),{},{type:"success"}))},info:function(v){return K(t()(t()({},v),{},{type:"info"}))},warning:function(v){return K(t()(t()({},v),{},{type:"warning"}))},warn:function(v){return K(t()(t()({},v),{},{type:"warning"}))},error:function(v){return K(t()(t()({},v),{},{type:"error"}))},warnings:G,warns:G}),Q=null},55300:function(Zn,Y,n){n.d(Y,{E:function(){return F}});var _=n(53649),t=n.n(_),V=n(98943),M=n(47512),A,F=(0,M.vJ)(A||(A=t()([`
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
`])),function(I){var r=I.theme;return"".concat(r==null?void 0:r.colorPrimary," !important")},function(I){var r=I.theme;return"".concat(r==null?void 0:r.colorPrimaryHover," !important")},function(I){var r=I.theme;return r==null?void 0:r.colorPrimary},function(I){var r=I.theme;return"".concat(r==null?void 0:r.colorPrimary," !important")},function(I){var r=I.theme;return"".concat(r==null?void 0:r.colorPrimaryHover," !important")},function(I){var r=I.theme,P=r||{},d=P.prefixCls;return V.ZP.config({prefixCls:d}),`
      .`.concat(d,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(d,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(Zn,Y,n){n.d(Y,{j:function(){return _}});var _=typeof window!="undefined"}}]);
