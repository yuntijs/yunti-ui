"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(In,Y,n){n.d(Y,{b:function(){return W}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(21153),U=n(75271),Z=n(53649),r=n.n(Z),P=n(47512),u,E=(0,P.kc)(function(g,b){var x=g.css,N=b.bordered,h=N===void 0?"dashed":N;return{custom:x(u||(u=r()([`
        border-style: `,` !important;
      `])),h)}},{hashPriority:"low"}),s=n(52676),a=["bordered","className"],W=function(b){var x=b.bordered,N=x===void 0?"dashed":x,h=b.className,A=S()(b,a),j=E({bordered:N}),f=j.styles,O=j.cx;return(0,s.jsx)(M.Z,t()(t()({},A),{},{className:O(f.custom,h)}))};W.ErrorBoundary=M.Z.ErrorBoundary;var B=null},5244:function(In,Y,n){n.d(Y,{g:function(){return u}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(23878),U=n(75271),Z=n(55300),r=n(52676),P=["children"],u=function(a){var W=a.children,B=S()(a,P);return(0,r.jsxs)(M.Z,t()(t()({},B),{},{children:[(0,r.jsx)(Z.E,{}),W]}))};u.useApp=M.Z.useApp;var E=null},52412:function(In,Y,n){var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(53649),U=n.n(M),Z=n(62579),r=n(51874),P=n(47512),u=n(75271),E=n(52676),s=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],a,W,B,g=(0,P.kc)(function(x){var N=x.css;return{container:N(a||(a=U()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:N(W||(W=U()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:N(B||(B=U()([`
      position: relative;
      flex: 1;
    `])))}}),b=(0,u.forwardRef)(function(x,N){var h=x.className,A=x.style,j=x.classNames,f=x.expand,O=f===void 0?!0:f,z=x.setExpand,y=x.bottomAddons,T=x.topAddons,_=x.onSizeChange,K=x.heights,G=x.onSend,nn=S()(x,s),Q=g(),F=Q.styles;return(0,E.jsx)(Z.Z,{className:h,classNames:j,fullscreen:O,headerHeight:K==null?void 0:K.headerHeight,maxHeight:K==null?void 0:K.maxHeight,minHeight:K==null?void 0:K.minHeight,onSizeChange:_,placement:"bottom",size:{height:K==null?void 0:K.inputHeight,width:"100%"},style:t()({zIndex:10},A),children:(0,E.jsxs)("section",{className:F.container,style:{minHeight:K==null?void 0:K.minHeight},children:[T,(0,E.jsx)("div",{className:F.textareaContainer,children:(0,E.jsx)(r.Z,t()({className:F.textarea,onSend:function(){G==null||G(),z==null||z(!1)},ref:N,type:"pure"},nn))}),y]})})});Y.Z=(0,u.memo)(b)},92436:function(In,Y,n){n.d(Y,{z:function(){return ln}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(59171),U=n(10581),Z=n(93955),r=n(81262),P=n(9192),u=n(75061),E=n(81134),s=n(75271),a=n(90142),W=n(99335),B=n(53649),g=n.n(B),b=n(47512),x,N,h,A,j,f,O,z,y,T,_,K,G,nn,Q,F,m,D,J=(0,b.kc)(function(p,q){var sn=p.cx,w=p.css,cn=p.token,Pn=p.isDarkMode,Tn=p.responsive,Zn=q.placement,Rn=q.type,_n=q.title,Sn=q.primary,Qn=q.avatarSize,Hn=q.editing,vn=q.time,un=w(x||(x=g()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Sn?Pn?cn.colorFill:cn.colorBgElevated:Pn?cn.colorFillSecondary:cn.colorBgContainer,cn.borderRadiusLG,cn.motionEaseOut),Ln=w(N||(N=g()([`
      padding-block-start: `,`;
    `])),_n?0:"6px"),$n=w(h||(h=g()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),cn.motionEaseOut),Wn=Rn==="block"?un:Ln,ee=Hn&&w(A||(A=g()([`
        width: 100%;
      `])));return{actions:sn(w(j||(j=g()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),Rn==="block"?"flex-end":Zn==="left"?"flex-start":"flex-end",Zn==="left"?"flex-end":"flex-start"),Hn&&w(f||(f=g()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:w(O||(O=g()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),Qn,Qn),avatarGroupContainer:w(z||(z=g()([`
        width: `,`px;
      `])),Qn),container:sn(Rn==="pure"&&$n,w(y||(y=g()([`
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
        `])),cn.motionEaseOut,Tn.mobile,Rn==="pure"?"12px":"6px")),editingContainer:sn(ee,w(T||(T=g()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),cn.colorBorderSecondary,cn.colorBorder),Rn==="pure"&&w(_||(_=g()([`
            background: `,`;
            border-radius: `,`px;
          `])),cn.colorFillQuaternary,cn.borderRadius)),editingInput:w(K||(K=g()([`
        width: 100%;
      `]))),errorContainer:w(G||(G=g()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:w(nn||(nn=g()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),Zn==="right"?"-4px":"unset",Zn==="left"?"-4px":"unset",cn.colorBgLayout,cn.colorPrimary),message:sn(Wn,w(Q||(Q=g()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),Tn.mobile)),messageContainer:sn(ee,w(F||(F=g()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),vn?-16:0,Tn.mobile)),messageContent:sn(ee,w(m||(m=g()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),Tn.mobile)),messageExtra:sn("message-extra"),name:w(D||(D=g()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),cn.colorTextDescription,Zn==="left"?"left":"right")}}),X=n(52676),C=(0,s.memo)(function(p){var q=p.editing,sn=p.onChange,w=p.onEditingChange,cn=p.text,Pn=p.message,Tn=p.placement,Zn=p.messageExtra,Rn=p.renderMessage,_n=p.type,Sn=p.primary,Qn=p.onDoubleClick,Hn=p.fontSize,vn=p.markdownProps,un=p.markdownClassname,Ln=J({editing:q,placement:Tn,primary:Sn,type:_n}),$n=Ln.cx,Wn=Ln.styles,ee=(0,E.F)(),en=ee.mobile,kn=(0,X.jsx)(W.i,{classNames:{input:Wn.editingInput,markdown:un},editButtonSize:"small",editing:q,fontSize:Hn,fullFeaturedCodeBlock:!0,markdownProps:vn,onChange:sn,onEditingChange:w,openModal:en?q:void 0,text:cn,value:Pn?String(Pn).trim():""}),ie=Rn?Rn(kn):kn;return(0,X.jsxs)(a.D,{className:$n(Wn.message,q&&Wn.editingContainer),onDoubleClick:Qn,children:[ie,Zn&&!q?(0,X.jsx)("div",{className:Wn.messageExtra,children:Zn}):null]})}),xn=C,on=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname"],yn=32,ln=(0,s.memo)(function(p){var q=p.avatarAddon,sn=p.onAvatarClick,w=p.avatarProps,cn=p.actions,Pn=p.className,Tn=p.primary,Zn=p.loading,Rn=p.message,_n=p.placement,Sn=_n===void 0?"left":_n,Qn=p.type,Hn=Qn===void 0?"block":Qn,vn=p.avatar,un=p.error,Ln=p.showTitle,$n=p.time,Wn=p.editing,ee=p.onChange,en=p.onEditingChange,kn=p.messageExtra,ie=p.renderMessage,Ce=p.text,Le=p.errorMessage,be=p.onDoubleClick,Oe=p.fontSize,dn=p.markdownProps,c=p.markdownClassname,$=S()(p,on),R=(0,E.F)(),mn=R.mobile,bn=(0,u.y)({editing:Wn,placement:Sn,primary:Tn,showTitle:Ln,time:$n,title:vn.title,type:Hn}),En=bn.cx,rn=bn.styles;return(0,X.jsxs)(a.D,t()(t()({className:En(rn.container,Pn),direction:Sn==="left"?"horizontal":"horizontal-reverse",gap:mn?6:12},$),{},{children:[(0,X.jsx)(U.Z,t()(t()({},w),{},{addon:q,avatar:vn,loading:Zn,onClick:sn,placement:Sn,size:mn?yn:void 0})),(0,X.jsxs)(a.D,{align:Sn==="left"?"flex-start":"flex-end",className:rn.messageContainer,children:[(0,X.jsx)(P.Z,{avatar:vn,placement:Sn,showTitle:Ln,time:$n}),(0,X.jsxs)(a.D,{align:Sn==="left"?"flex-start":"flex-end",className:rn.messageContent,direction:Hn==="block"?Sn==="left"?"horizontal":"horizontal-reverse":"vertical",gap:8,children:[un?(0,X.jsx)(r.Z,{error:un,message:Le,placement:Sn}):(0,X.jsx)(xn,{editing:Wn,fontSize:Oe,markdownClassname:c,markdownProps:dn,message:Rn,messageExtra:kn,onChange:ee,onDoubleClick:be,onEditingChange:en,placement:Sn,primary:Tn,renderMessage:ie,text:Ce,type:Hn}),(0,X.jsx)(M.Z,{actions:cn,editing:Wn,placement:Sn,type:Hn})]})]}),mn&&Hn==="block"&&(0,X.jsx)(Z.Z,{borderSpacing:yn})]}))})},13306:function(In,Y,n){n.d(Y,{U:function(){return z}});var k=n(26068),t=n.n(k),V=n(48305),S=n.n(V),M=n(67825),U=n.n(M),Z=n(97157),r=n(86818),P=n(44923),u=n(71170),E=n(75271),s=n(84569),a=n.n(s),W=n(53649),B=n.n(W),g=n(47512),b,x,N,h,A,j=(0,g.kc)(function(y){var T=y.css,_=y.token,K=y.prefixCls;return{root:T(b||(b=B()([`
      overflow: hidden;
    `]))),wrapper:T(x||(x=B()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),_.marginLG),content:T(N||(N=B()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),_.borderRadiusLG,_.boxShadowSecondary),dragWrapper:T(h||(h=B()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:T(A||(A=B()([`
      cursor: move;
    `])))}}),f=n(52676),O=["title","classNames","defaultPosition","onPositionChange"],z=(0,E.memo)(function(y){var T=y.title,_=y.classNames,K=_===void 0?{}:_,G=y.defaultPosition,nn=y.onPositionChange,Q=U()(y,O),F=j(),m=F.styles,D=F.cx,J=(0,E.useState)({left:0,top:0,bottom:0,right:0}),X=S()(J,2),C=X[0],xn=X[1],on=(0,E.useRef)(null),yn=function(p,q){var sn,w=window.document.documentElement,cn=w.clientWidth,Pn=w.clientHeight,Tn=(sn=on.current)===null||sn===void 0?void 0:sn.getBoundingClientRect();Tn&&xn({left:-Tn.left+q.x,right:cn-(Tn.right-q.x),top:-Tn.top+q.y,bottom:Pn-(Tn.bottom-q.y)})};return(0,f.jsx)(r.Z,t()(t()({},Q),{},{classNames:t()(t()({},K),{},{wrapper:D(m.wrapper,K.wrapper),content:D(m.content,K.content)}),destroyOnClose:!0,drawerRender:function(p){return(0,f.jsx)(a(),{bounds:C,defaultPosition:G,handle:".".concat(m.dragHandle),nodeRef:on,onStart:function(sn,w){return yn(sn,w)},onStop:function(sn,w){nn==null||nn({x:w.x,y:w.y})},children:(0,f.jsx)("div",{className:m.dragWrapper,ref:on,children:p})})},mask:!1,rootClassName:m.root,title:(0,f.jsxs)(P.Z,{align:"center",className:m.dragHandle,children:[(0,f.jsx)(P.Z,{flex:2,children:T}),(0,f.jsx)(P.Z,{children:(0,f.jsx)(u.ZP,{className:m.dragHandle,icon:(0,f.jsx)(Z.Z,{}),type:"text"})})]})}))})},5795:function(In,Y,n){n.d(Y,{d:function(){return g}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(86818),U=n(75271),Z=n(53649),r=n.n(Z),P=n(47512),u,E,s,a=(0,P.kc)(function(x,N){var h=x.css,A=x.prefixCls,j=N.closeIcon,f=N.closeIconPlacement,O=N.extra,z=h(u||(u=r()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),A,A,!(j===null||j===!1)&&h(E||(E=r()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),A));return{custom:h(s||(s=r()([`
        `,`
      `])),(!f||f==="right"||f==="auto"&&!O)&&z)}},{hashPriority:"low"}),W=n(52676),B=["className"],g=function(N){var h=N.className,A=S()(N,B),j=a(A),f=j.styles,O=j.cx;return(0,W.jsx)(M.Z,t()(t()({},A),{},{className:O(f.custom,h)}))},b=null},99512:function(In,Y,n){n.d(Y,{L:function(){return N}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(44923),U=n(5053),Z=n(75271),r=n(53649),P=n.n(r),u=n(47512),E,s,a,W,B=(0,u.kc)(function(h,A){var j=h.css,f=h.token,O=A.divider,z=A.position;return{menuWrapper:j(E||(E=P()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),f.colorBgElevated,f.borderRadiusLG,f.boxShadowSecondary),menuExtra:j(s||(s=P()([`
        padding: 10px 16px 4px;
        `,`
      `])),O&&j(z==="top"?a||(a=P()([`
              border-bottom: 1px solid `,`;
            `])):W||(W=P()([`
              border-top: 1px solid `,`;
            `])),f.colorSplit))}}),g=n(52676),b=["menuExtra","dropdownRender"],x=function(A){var j=A.menuExtra,f=A.dropdownRender,O=S()(A,b),z=j||{},y=z.position,T=y===void 0?"top":y,_=z.divider,K=_===void 0?!1:_,G=z.content,nn=B({divider:K,position:T}),Q=nn.styles,F=(0,Z.useCallback)(function(m){var D=Z.cloneElement(m,{style:{boxShadow:"none",border:"none"}});if(!G)return f?(0,g.jsx)(M.Z,{className:Q.menuWrapper,vertical:!0,children:f(D)}):m;var J=(0,g.jsx)(M.Z,{align:"center",className:Q.menuExtra,children:G});return(0,g.jsxs)(M.Z,{className:Q.menuWrapper,vertical:!0,children:[T==="top"&&J,D,T==="bottom"&&J]})},[G,f,T,Q.menuExtra,Q.menuWrapper]);return(0,g.jsx)(U.Z,t()({dropdownRender:F},O))},N=x;N.Button=U.Z.Button},99335:function(In,Y,n){n.d(Y,{i:function(){return E}});var k=n(26068),t=n.n(k),V=n(48305),S=n.n(V),M=n(14252),U=n(85814),Z=n(54285),r=n(75271),P=n(65720),u=n(52676),E=(0,r.memo)(function(s){var a=s.value,W=s.onChange,B=s.classNames,g=B===void 0?{}:B,b=s.onEditingChange,x=s.editing,N=s.openModal,h=s.onOpenChange,A=s.placeholder,j=s.showEditWhenEmpty,f=j===void 0?!1:j,O=s.styles,z=s.height,y=s.inputType,T=s.editButtonSize,_=s.text,K=s.fullFeaturedCodeBlock,G=s.model,nn=s.fontSize,Q=s.markdownProps,F=(0,P.Z)(!1,{onChange:b,value:x}),m=S()(F,2),D=m[0],J=m[1],X=(0,P.Z)(!1,{onChange:h,value:N}),C=S()(X,2),xn=C[0],on=C[1],yn=z==="auto",ln=(0,u.jsx)(M.Z,{className:g==null?void 0:g.input,classNames:{textarea:g==null?void 0:g.textarea},defaultValue:a,editButtonSize:T,height:z,onCancel:function(){return J(!1)},onConfirm:function(q){W==null||W(q),J(!1)},placeholder:A,style:O==null?void 0:O.input,text:_,textareaClassname:g==null?void 0:g.input,type:y});return!a&&f?ln:(0,u.jsxs)(u.Fragment,{children:[!xn&&D?ln:(0,u.jsx)(U.Z,t()(t()({className:g==null?void 0:g.markdown,fontSize:nn,fullFeaturedCodeBlock:K,style:t()({height:yn?"unset":z},O==null?void 0:O.markdown),variant:"chat"},Q),{},{children:a||A||""})),xn&&(0,u.jsx)(Z.Z,{editing:D,extra:G==null?void 0:G.extra,footer:G==null?void 0:G.footer,height:z,onChange:W,onEditingChange:J,onOpenChange:function(q){on(q),J(!1)},open:xn,placeholder:A,text:_,value:a})]})})},14866:function(In,Y,n){n.d(Y,{w:function(){return r}});var k=n(48305),t=n.n(k),V=n(75271),S=function(u){return typeof u=="string"?document.querySelector("#".concat(u)):(u==null?void 0:u.current)||u},M=":not([disabled]):not([readonly])",U=["text","password","search","tel","url","number","email",""].map(function(P){return'input[type="'.concat(P,'"]').concat(M)}).join(", ")+", input:not([type])".concat(M,", textarea").concat(M),Z=function(u){var E,s=S(u);if(s){var a=(E=s.querySelector)===null||E===void 0?void 0:E.call(s,U);if(a!=null&&a.focus)return a.focus(),!0}},r=function(u){var E=(0,V.useState)(!1),s=t()(E,2),a=s[0],W=s[1];V.useEffect(function(){if(!(a||!u)){var B=Z(u);B&&W(!0)}},[u,a,W])}},20147:function(In,Y,n){n.d(Y,{MX:function(){return Z},wK:function(){return U},wL:function(){return S.w}});var k=n(26068),t=n.n(k),V=n(75271),S=n(14866),M=n(52676),U=function(P){var u,E=P.autoFocus,s=E===void 0?!0:E,a=(0,V.useRef)(null);return(0,S.w)(s?a:void 0),(0,M.jsx)("div",{className:P.className,id:P.id,ref:a,style:(u=P.style)!==null&&u!==void 0?u:{display:P.className?void 0:"contents"},children:P.children})},Z=function(P){return function(u){var E=function(W){return(0,M.jsx)(U,t()(t()({},P||{}),{},{children:(0,M.jsx)(u,t()({},W))}))},s=u.displayName||u.name||"Component";return E.displayName="withFormHelper(".concat(s,")"),E}}},25969:function(In,Y,n){n.d(Y,{n:function(){return O}});var k=n(26068),t=n.n(k),V=n(48305),S=n.n(V),M=n(67825),U=n.n(M),Z=n(60477),r=n(50999),P=n(41117),u=n(45798),E=n(3548),s=n(5312),a=n(75271),W=n(53649),B=n.n(W),g=n(47512),b,x,N,h,A=(0,g.kc)(function(z){var y=z.css,T=z.token,_="#222222";return{root:y(b||(b=B()([`
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
      `])),_,T.borderRadiusLG,T.marginXXS,T.paddingXS,_,T.borderRadiusLG,T.borderRadiusLG,T.borderRadius,T.borderRadius,_,T.borderRadiusLG,T.fontFamilyCode),searchBarIcon:y(x||(x=B()([`
        font-size: 16px;
      `]))),loaderText:y(N||(N=B()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),T.fontFamilyCode),loaderIcon:y(h||(h=B()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),T.marginSM,T.marginSM)}},{hashPriority:"low"}),j=n(52676),f=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],O=function(y){var T=y.className,_=y.id,K=y.style,G=y.height,nn=y.onScroll,Q=y.url,F=y.websocket,m=y.refreshInterval,D=y.onLoad,J=y.onError,X=U()(y,f),C=A(),xn=C.cx,on=C.styles,yn=(0,a.useState)(0),ln=S()(yn,2),p=ln[0],q=ln[1],sn=(0,a.useState)(!1),w=S()(sn,2),cn=w[0],Pn=w[1],Tn=(0,a.useState)(!1),Zn=S()(Tn,2),Rn=Zn[0],_n=Zn[1],Sn=(0,a.useRef)(),Qn=(0,a.useRef)();(0,a.useEffect)(function(){return function(){clearTimeout(Sn.current),clearTimeout(Qn.current)}},[]),(0,a.useEffect)(function(){var Ln;return Q&&!F&&m&&(Ln=setInterval(function(){q(function($n){return $n+1})},m)),function(){clearInterval(Ln)}},[m,Q,F]);var Hn=(0,a.useMemo)(function(){return Q&&(Sn.current=setTimeout(function(){Pn(!0),Sn.current=void 0},50),"".concat(Q,"#").concat(p))},[Q,p]),vn=(0,a.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Sn.current),Pn(!1),_n(!0),Qn.current=setTimeout(function(){return _n(!1)},100),D==null||D()},[D]),un=(0,a.useCallback)(function(Ln){Pn(!1),clearTimeout(Sn.current),J==null||J(Ln)},[J]);return(0,j.jsxs)("div",{className:xn(on.root,T),id:_,style:t()({height:G},K),children:[(0,j.jsx)(r.Uu,{render:function($n){var Wn=$n.follow,ee=$n.onScroll;return(0,j.jsx)(r.A9,t()(t()({url:Hn,websocket:F},X),{},{follow:Rn||Wn,height:G,iconFilterLines:(0,j.jsx)(Z.Z,{className:on.searchBarIcon,icon:P.Z}),iconFindNext:(0,j.jsx)(Z.Z,{className:on.searchBarIcon,icon:u.Z}),iconFindPrevious:(0,j.jsx)(Z.Z,{className:on.searchBarIcon,icon:E.Z}),onError:un,onLoad:vn,onScroll:function(kn){ee(kn),nn==null||nn(kn)}}))},startFollowing:!0}),cn&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:on.loaderText,children:"loading ..."}),(0,j.jsx)(Z.Z,{className:on.loaderIcon,icon:s.Z,spin:!0})]})]})}},52625:function(In,Y,n){n.d(Y,{T:function(){return N}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(47512),U=n(75271),Z=n(90142),r=n(36075),P=n.n(r),u=n(52676),E=(0,U.memo)(function(h){var A=Object.assign({},(P()(h),h));return(0,u.jsx)("svg",t()(t()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},A),{},{children:(0,u.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),s=(0,U.memo)(function(h){var A=Object.assign({},(P()(h),h));return(0,u.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},A),{},{children:[(0,u.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,u.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,u.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),a=(0,U.memo)(function(h){var A=Object.assign({},(P()(h),h));return(0,u.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},A),{},{children:[(0,u.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,u.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,u.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,u.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,u.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,u.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,u.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),W=n(53649),B=n.n(W),g,b=(0,M.kc)(function(h){var A=h.css;return{extraTitle:A(g||(g=B()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),x=["type","size","style","extra","className"],N=(0,U.memo)(function(h){var A=h.type,j=A===void 0?"img":A,f=h.size,O=f===void 0?32:f,z=h.style,y=h.extra,T=h.className,_=S()(h,x),K=(0,M.Fg)(),G=b(),nn=G.styles,Q;switch(j){case"text":{Q=(0,u.jsx)(a,t()({className:T,height:O,style:z,width:O*2.9375},_));break}case"combine":{Q=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,t()({height:O,style:z,width:O},_)),(0,u.jsx)(a,{style:{height:O,marginLeft:Math.round(O/4),width:"auto"}})]});break}case"img":default:{Q=(0,u.jsx)(s,t()({height:O,style:z,width:O},_));break}}if(!y)return Q;var F=Math.round(O/3*1.9);return(0,u.jsxs)(Z.D,t()(t()({align:"center",className:T,horizontal:!0,style:z},_),{},{children:[Q,(0,u.jsx)(E,{style:{color:K.colorFill,height:F,width:F}}),(0,u.jsx)("div",{className:nn.extraTitle,style:{fontSize:F},children:y})]}))})},48355:function(In,Y,n){n.d(Y,{o:function(){return ue}});var k=n(26068),t=n.n(k),V=n(82092),S=n.n(V),M=n(14837),U=n(64419),Z=n(30924),r=n(6988),P=n(56875),u=n(44250),E=n(66108),s=n(36419),a=n(75271),W=n(28485),B=n(25298),g=n.n(B),b=n(17069),x=n.n(b),N=n(9504),h=n.n(N),A=n(38836),j=n.n(A),f=n(21742),O=n.n(f),z=n(83136),y=n.n(z),T=function(l){O()(i,l);var d=y()(i);function i(){return g()(this,i),d.apply(this,arguments)}return x()(i,[{key:"createDOM",value:function(o){var v=h()(j()(i.prototype),"createDOM",this).call(this,o);return v.classList.add("align-middle"),v}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(o){return new i(o.__text,o.__key)}},{key:"importJSON",value:function(o){var v=(0,s.MX)(o.text);return v.setFormat(o.format),v.setDetail(o.detail),v.setMode(o.mode),v.setStyle(o.style),v}}]),i}(s.R2);function _(l){return new T(l)}var K=n(62657),G=n.n(K),nn=n(48305),Q=n.n(nn),F=n(71561),m=n(60477),D=n(44923),J=n(56995),X=n(69024),C=n(52676),xn=(0,a.createContext)(null),on=(0,a.memo)(function(l){var d=l.children,i=l.value;return(0,C.jsx)(xn.Provider,{value:i,children:d})}),yn=function(){var d=(0,a.useContext)(xn);return d==null?void 0:d.optionsMap},ln=n(33803),p=n(32199),q=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,sn="\\(",w=function(d){return"(?:"+d.join("|")+")"},cn=function(d,i){var e=d.length===0?"":"(?!"+d.join("|")+")";return e+"[^\\s"+i+"]"},Pn=function(d){return"(?:\\.[ |$]|\\s|["+d+"]|)"},Tn=75,Zn=function(d,i){var e=(0,a.useRef)(null),o=(0,F.g)(),v=Q()(o,1),L=v[0],I=(0,ln.y)(d),tn=Q()(I,3),an=tn[0],Cn=tn[1],H=tn[2],An=(0,a.useCallback)(function(Mn){var Kn=(0,s.dL)(),de=Kn==null?void 0:Kn.getNodes();if(!an&&(de==null?void 0:de.length)===1&&L.dispatchCommand(i,void 0),an&&(0,s.iO)(Kn)){Mn.preventDefault();var fe=(0,s.gI)(d);if((0,s.k$)(fe))return i&&L.dispatchCommand(i,void 0),fe.remove(),!0}return!1},[an,d,i,L]),Dn=(0,a.useCallback)(function(Mn){Mn.stopPropagation(),H(),Cn(!0)},[Cn,H]);return(0,a.useEffect)(function(){var Mn=e.current;return Mn&&Mn.addEventListener("click",Dn),function(){Mn&&Mn.removeEventListener("click",Dn)}},[Dn]),(0,a.useEffect)(function(){return(0,p.qV)(L.registerCommand(s.MK,An,s.KB),L.registerCommand(s.aR,An,s.KB))},[L,H,An]),[e,an]},Rn=function(){var d=useRef(null),i=useState(!1),e=_slicedToArray(i,2),o=e[0],v=e[1],L=useCallback(function(I){I.stopPropagation(),v(function(tn){return!tn})},[]);return useEffect(function(){var I=d.current;return I&&I.addEventListener("click",L),function(){I&&I.removeEventListener("click",L)}},[L]),[d,o,v]};function _n(l,d,i,e){return new RegExp((d?"(^|\\s|".concat(d,")("):"(^|\\s)(")+w(l)+"((?:"+cn(l,i)+(e?Pn(i):"")+"){0,"+Tn+"}))$")}function Sn(l,d,i,e,o){var v=_n(d,i,e,o).exec(l);if(v!==null){var L=v[1],I=v[2],tn=v[3];if(I.length>0)return{leadOffset:v.index+L.length,matchingString:tn,replaceableString:I}}return null}var Qn=function(d,i){var e=i.punctuation,o=i.preTriggerChars,v=i.allowSpaces,L=(0,a.useState)(null),I=Q()(L,2),tn=I[0],an=I[1],Cn=(0,a.useCallback)(function(H){var An=Sn(H,d,o,e,v);if(An){var Dn=An.replaceableString,Mn=An.matchingString,Kn=Dn.lastIndexOf(Mn),de=Kn===-1?Dn:Dn.slice(0,Math.max(0,Kn))+Dn.slice(Math.max(0,Kn+Mn.length));if(an(de||null),An.replaceableString)return An}else an(null);return null},[o,v,e,d]);return{trigger:tn,checkForMentionMatch:Cn}},Hn=n(53649),vn=n.n(Hn),un=n(47512),Ln,$n,Wn,ee=(0,un.kc)(function(l,d){var i=l.css,e=l.token,o=l.prefixCls,v=d.isSelected,L=d.isError,I=function(){return L?v?{background:e.colorErrorBgActive,border:e.colorErrorBorderHover,color:e.colorErrorTextActive}:{background:e.colorErrorBg,border:e.colorErrorBorder,color:e.colorErrorText}:v?{background:e.colorInfoBgHover,border:e.colorInfoBorder,color:e.colorInfoText}:{background:e.colorFillTertiary,border:"transparent",color:e.colorInfoText}},tn=I(),an=tn.background,Cn=tn.border,H=tn.color;return{root:i(Ln||(Ln=vn()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),e.fontFamilyCode,H,an,Cn,e.borderRadius),text:i($n||($n=vn()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),e.colorTextSecondary),error:i(Wn||(Wn=vn()([`
        color: `,`;
      `])),e.colorErrorText)}}),en=(0,s.fA)("INSERT_MENTION_COMMAND"),kn=(0,s.fA)("DELETE_MENTION_COMMAND"),ie=(0,s.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Ce=/{{([\w-]{1,50}(\.("?)[_a-z][\w"[\]]*("?)){1,10})}}/gi,Le=(0,a.memo)(function(l){var d=l.nodeKey,i=l.variable,e=yn(),o=(0,F.g)(),v=Q()(o,1),L=v[0],I=Zn(d,kn),tn=Q()(I,2),an=tn[0],Cn=tn[1],H=e==null?void 0:e[i],An=ee({isSelected:Cn,isError:!H||!!H.error}),Dn=An.styles;(0,a.useEffect)(function(){if(!L.hasNodes([be]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[L]);var Mn=(0,C.jsx)(D.Z,{className:Dn.root,ref:an,children:(0,C.jsxs)(D.Z,{align:"center",gap:2,children:[(!H||H.error)&&(0,C.jsx)(m.Z,{className:Dn.error,icon:X.Z}),(H==null?void 0:H.icon)&&(0,C.jsx)(D.Z,{children:H.icon}),(0,C.jsx)(D.Z,{className:Dn.text,gap:2,title:(H==null?void 0:H.label)||i,children:(0,C.jsx)("span",{children:(H==null?void 0:H.selectedLabel)||(H==null?void 0:H.label)||i})})]})});return H!=null&&H.error?(0,C.jsx)(J.Z,{title:H==null?void 0:H.error,children:Mn}):Mn}),be=function(l){O()(i,l);var d=y()(i);function i(e,o){var v;return g()(this,i),v=d.call(this,o),S()(G()(v),"__variable",void 0),v.__variable=e,v}return x()(i,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var o=document.createElement("div");return o.style.display="inline-flex",o.style.alignItems="center",o.style.verticalAlign="middle",o}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,C.jsx)(Le,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var o=this.getLatest();return o.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(o){return new i(o.__variable,o.__key)}},{key:"importJSON",value:function(o){var v=Oe(o.variable);return v}}]),i}(s.Ij);function Oe(l){return new be(l)}function dn(l){return l instanceof be}var c=(0,a.memo)(function(l){var d=l.onInsert,i=l.onDelete,e=(0,F.g)(),o=Q()(e,1),v=o[0];return(0,a.useEffect)(function(){if(!v.hasNodes([be]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,p.qV)(v.registerCommand(en,function(L){v.dispatchCommand(ie,null);var I=Oe(L);return(0,s.od)([I]),d&&d(),!0},s.VN),v.registerCommand(kn,function(){return i&&i(),!0},s.VN))},[v,d,i]),null});c.displayName="MentionNodePlugin";var $=(0,s.fA)("INSERT_MENTION_COMMAND"),R=(0,s.fA)("DELETE_MENTION_COMMAND"),mn=(0,s.fA)("CLEAR_HIDE_MENU_TIMEOUT"),bn=(0,s.fA)("UPDATE_MENTIONS_OPTIONS"),En=function(d,i,e){if(d.isSimpleText())for(var o=d.getPreviousSibling(),v=d.getTextContent(),L=d,I;;){I=i(v);var tn=I===null?"":v.slice(I.end);if(v=tn,tn===""){var an=L.getNextSibling();if((0,s.Gg)(an)){tn=L.getTextContent()+an.getTextContent();var Cn=i(tn);if(Cn===null){an.markDirty();return}else if(Cn.start!==0)return}}else{var H=i(tn);if(H!==null&&H.start===0)return}if(I===null)return;if(!(I.start===0&&(0,s.Gg)(o)&&o.isTextEntity())){var An=void 0;if(I.start===0){var Dn=L.splitText(I.end),Mn=Q()(Dn,2);An=Mn[0],L=Mn[1]}else{var Kn=L.splitText(I.start,I.end),de=Q()(Kn,3);An=de[1],L=de[2]}var fe=e(An);if(An.replace(fe),L==null)return}}};function rn(l){var d=l.split(`
`);return JSON.stringify({root:{children:d.map(function(i){return{children:[{detail:0,format:0,mode:"normal",style:"",text:i,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var te=(0,a.memo)(function(l){var d=l.onInsert,i=(0,F.g)(),e=Q()(i,1),o=e[0];(0,a.useEffect)(function(){if(!o.hasNodes([be]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[o]);var v=(0,a.useCallback)(function(tn){d&&d();var an=tn.getTextContent().slice(2,-2);return(0,s.U2)(Oe(an))},[d]),L=(0,a.useCallback)(function(tn){var an=Ce.exec(tn);if(an===null)return null;var Cn=an.index,H=Cn+an[0].length;return{end:H,start:Cn}},[]),I=(0,a.useCallback)(function(tn){return En(tn,L,v)},[v,L]);return(0,a.useEffect)(function(){return Ce.lastIndex=0,(0,p.qV)(o.registerNodeTransform(T,I))},[]),null}),Fn=n(99934),jn=n(64287),Un=n(30967),Gn=n(83606),le=function(l){O()(i,l);var d=y()(i);function i(e){var o,v=e.label,L=e.value,I=e.data,tn=e.icon,an=e.extraElement,Cn=e.keywords,H=e.keyboardShortcut,An=e.disabled,Dn=e.onSelect,Mn=e.children;return g()(this,i),o=d.call(this,L),S()(G()(o),"label",void 0),S()(G()(o),"value",void 0),S()(G()(o),"title",void 0),S()(G()(o),"key",void 0),S()(G()(o),"icon",void 0),S()(G()(o),"extraElement",void 0),S()(G()(o),"keywords",void 0),S()(G()(o),"keyboardShortcut",void 0),S()(G()(o),"onSelect",void 0),S()(G()(o),"disabled",void 0),S()(G()(o),"data",void 0),S()(G()(o),"children",void 0),o.value=L,o.label=v,o.title=v,o.key=L,o.keywords=Cn||[],o.icon=tn,o.extraElement=an,o.keyboardShortcut=H,o.onSelect=Dn.bind(G()(o)),o.disabled=An,o.data=I,o.children=Mn==null?void 0:Mn.map(function(Kn){return new i(Kn)}),o}return x()(i)}(Fn.n),zn=function(d,i){var e=(0,F.g)(),o=Q()(e,1),v=o[0],L=(0,a.useMemo)(function(){var I=function Cn(H){var An=t()(t()({},H),{},{children:void 0,onSelect:function(){v.dispatchCommand(en,H.value)}});return H.children&&(An.children=H.children.map(function(Dn){return Cn(Dn)})),An},tn=d.map(function(Cn){return new le(I(Cn))});if(!i)return tn;var an=new RegExp((0,Gn.Z)(i),"i");return tn.filter(function(Cn){var H;return an.test(Cn.label)||((H=Cn.keywords)===null||H===void 0?void 0:H.some(function(An){return an.test(An)}))})},[d,i,v]);return{options:L}},qn=n(78962),On=n(94729),se,re,oe,Xn,ce,ve,ae,Yn=(0,un.kc)(function(l,d){var i=l.css,e=l.token,o=l.prefixCls,v=d.isSelected,L=d.disabled,I=i(se||(se=vn()([`
      background-color: `,`;
    `])),e.colorFillSecondary);return{anchor:i(re||(re=vn()([`
        z-index: 9999;
      `]))),menuEmpty:i(oe||(oe=vn()([`
        padding: `,`px;
      `])),e.padding),menuOverlay:i(Xn||(Xn=vn()([`
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
      `])),e.marginXXS,e.paddingXXS,e.colorBgElevated,e.borderRadius,e.boxShadow,o),menuItem:i(ce||(ce=vn()([`
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
      `])),L?"not-allowed":"pointer",L?"none":"all",e.paddingXS,e.borderRadius,L?e.colorTextDisabled:e.colorText,e.fontSize,v&&I,I),menuItemIcon:i(ve||(ve=vn()([`
        color: `,`;
      `])),e.colorInfoText),menuItemLabel:i(ae||(ae=vn()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Jn=On.C.Text,hn=(0,a.memo)(function(l){var d=l.index,i=l.isSelected,e=l.onClick,o=l.onMouseEnter,v=l.option,L=l.queryString,I=Yn({isSelected:i,disabled:v.disabled}),tn=I.styles,an=v.label,Cn=(0,a.useMemo)(function(){var Mn=an,Kn="",de="";if(L){var fe=new RegExp((0,Gn.Z)(L),"i"),je=fe.exec(v.label);je&&(Mn=an.slice(0,Math.max(0,je.index)),Kn=je[0],de=an.slice(Math.max(0,je.index+je[0].length)))}return{before:Mn,middle:Kn,after:de}},[v.label,L,an]),H=Cn.before,An=Cn.middle,Dn=Cn.after;return(0,C.jsxs)(D.Z,{align:"center",className:tn.menuItem,gap:4,onClick:function(){return e==null?void 0:e(d,v)},onMouseEnter:function(){return o==null?void 0:o(d,v)},ref:v.setRefElement,tabIndex:-1,children:[(0,C.jsx)(D.Z,{className:tn.menuItemIcon,children:v.icon}),(0,C.jsxs)("div",{className:tn.menuItemLabel,title:v.label,children:[H,(0,C.jsx)(Jn,{mark:!0,children:An}),Dn]}),(0,C.jsx)(D.Z,{children:v.extraElement})]},v.key)});hn.displayName="MentionMenuItem";var fn=(0,a.memo)(function(l){var d=l.selectedIndex,i=l.options,e=l.onClick,o=l.onMouseEnter,v=l.queryString,L=Yn({}),I=L.styles;return(0,C.jsxs)(C.Fragment,{children:[i.length===0&&(0,C.jsx)(qn.Z,{className:I.menuEmpty,image:qn.Z.PRESENTED_IMAGE_SIMPLE}),i.map(function(tn,an){return(0,C.jsx)(hn,{index:an,isSelected:d===an,onClick:e,onMouseEnter:o,option:tn,queryString:v},tn.key)})]})}),gn=(0,a.memo)(function(l){var d=l.overlayClassName,i=l.triggers,e=l.options,o=e===void 0?[]:e,v=l.allowSpaces,L=v===void 0?!0:v,I=l.punctuation,tn=I===void 0?q:I,an=l.preTriggerChars,Cn=an===void 0?sn:an,H=l.onSelect,An=Yn({}),Dn=An.cx,Mn=An.styles,Kn=(0,F.g)(),de=Q()(Kn,1),fe=de[0],je=Qn(i,{punctuation:tn,preTriggerChars:Cn,allowSpaces:L}),ze=je.trigger,Ke=je.checkForMentionMatch,Ve=(0,a.useState)(null),He=Q()(Ve,2),Te=He[0],Ge=He[1],Xe=zn(o,Te),Ne=Xe.options,$e=(0,a.useCallback)(function(ne,Se,Ue,Re){H==null||H(ne,ze,Te),fe.update(function(){Se&&ne!==null&&ne!==void 0&&ne.key&&Se.remove(),ne!=null&&ne.onSelect&&ne.onSelect(Re),Ue()})},[fe,H,Te,ze]),ge=(0,a.useCallback)(function(ne){var Se=ne.selectedIndex,Ue=ne.selectOptionAndCleanUp;return(0,C.jsx)(E.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,C.jsx)(jn.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Ie,pe){var ye=pe.nativeEvent;ye.stopPropagation(),fe.dispatchCommand(ie,{})},onSelect:function(Ie,pe){Ue(pe.node)},titleRender:function(Ie){var pe;return(0,C.jsx)(hn,{isSelected:((pe=Ne[Se])===null||pe===void 0?void 0:pe.value)===Ie.value,option:Ie,queryString:Te})},treeData:Ne})})},[Ne,fe,Te]),Fe=(0,a.useCallback)(function(ne,Se,Ue){var Re=Se.selectedIndex,Ie=Se.selectOptionAndCleanUp,pe=Se.setHighlightedIndex;return ne.current?Un.createPortal((0,C.jsx)("div",{className:Dn(Mn.menuOverlay,d),role:"menu",children:Ne.some(function(ye){return(ye.children||[]).length>0})?ge(Se):(0,C.jsx)(fn,{onClick:function(Be,Ze){Ze.disabled||(pe(Be),Ie(Ze))},onMouseEnter:function(Be,Ze){Ze.disabled||pe(Be)},options:Ne,queryString:Te,selectedIndex:Re})}),ne.current):null},[Dn,Ne,d,Te,ge,Mn.menuOverlay]);return(0,C.jsx)(Fn.HQ,{anchorClassName:Mn.anchor,menuRenderFn:Fe,onQueryChange:Ge,onSelectOption:$e,options:Ne,triggerFn:Ke})}),Bn=function(d){var i=d.onBlur,e=d.onFocus,o=(0,F.g)(),v=Q()(o,1),L=v[0],I=(0,a.useRef)(null);return(0,a.useEffect)(function(){return(0,p.qV)(L.registerCommand(ie,function(){return I.current&&(clearTimeout(I.current),I.current=null),!0},s.VN),L.registerCommand(s.Gq,function(tn,an){return I.current=setTimeout(function(){L.dispatchCommand(s.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),i&&i(),!0},s.VN),L.registerCommand(s.m$,function(){return e&&e(),!0},s.VN))},[L,i,e]),null},Nn=Bn,Vn,wn,Ee,Pe,Me,he,xe,Ae,De=32,We=22,pn=function(d){return De+Math.max(d-1,0)*We},me=(0,un.kc)(function(l,d){var i=l.css,e=l.token,o=l.prefixCls,v=d.autoSize;return{wrapper:i(Vn||(Vn=vn()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:i(wn||(wn=vn()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),De,e.fontSize,De,e.colorTextPlaceholder),root:i(Ee||(Ee=vn()([`
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
      `])),e.colorBorder,e.borderRadius,e.colorText,e.fontSize,e.fontFamily,(v==null?void 0:v.minRows)&&i(Pe||(Pe=vn()([`
          min-height: `,`px;
        `])),pn(v.minRows)),(v==null?void 0:v.maxRows)&&i(Me||(Me=vn()([`
          max-height: `,`px;
        `])),pn(v.maxRows)),e.motionDurationMid,e.colorPrimaryBorder,We),filled:i(he||(he=vn()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),e.colorFillTertiary,e.colorFillSecondary,e.colorBgBase),borderless:i(xe||(xe=vn()([`
        background: transparent;
        border: none;
      `]))),disabled:i(Ae||(Ae=vn()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),e.colorTextDisabled,e.colorBgContainerDisabled)}}),ue=function(d){var i=d.className,e=d.classNames,o=d.placeholder,v=d.style,L=d.value,I=d.defaultValue,tn=d.readOnly,an=tn===void 0?!1:tn,Cn=d.disabled,H=d.onChange,An=d.onBlur,Dn=d.onFocus,Mn=d.variant,Kn=Mn===void 0?"outlined":Mn,de=d.options,fe=de===void 0?[]:de,je=d.autoSize,ze=d.triggers,Ke=ze===void 0?["@"]:ze,Ve=d.allowSpaces,He=d.punctuation,Te=d.preTriggerChars,Ge=d.onSelect,Xe=E.ZP.useConfig(),Ne=Xe.componentDisabled,$e=me({autoSize:je}),ge=$e.styles,Fe=$e.cx,ne=Cn!=null?Cn:Ne,Se=!an&&!ne,Ue=(0,a.useMemo)(function(){return{namespace:"mentions",nodes:[T,{replace:s.R2,with:function(ye){return new T(ye.__text)}},be],editorState:rn(L||I||""),onError:function(ye){throw ye}}},[]),Re=function(ye){var Be=ye.read(function(){return(0,s.Gv)().getTextContent()});H==null||H(Be.replaceAll(`

`,`
`))},Ie=(0,a.useMemo)(function(){var pe=function ye(Be){return Be.reduce(function(Ze,Qe){if(Ze[Qe.value]=Qe,Qe.children&&Qe.children.length>0){var Ye=ye(Qe.children);Object.assign(Ze,Ye)}return Ze},{})};return pe(fe)},[fe]);return W.j?(0,C.jsx)(M.R,{initialConfig:t()(t()({},Ue),{},{editable:Se}),children:(0,C.jsx)(on,{value:{optionsMap:Ie},children:(0,C.jsxs)("div",{className:Fe(ge.wrapper,e==null?void 0:e.wrapper),children:[(0,C.jsx)(u.B,{ErrorBoundary:Z.g,contentEditable:(0,C.jsx)(U.f,{className:Fe(S()(S()(S()(S()({},ge.root,!0),ge.filled,Kn==="filled"),ge.borderless,Kn==="borderless"),ge.disabled,ne),i),style:v||{}}),placeholder:(0,C.jsx)("div",{className:ge.placeholder,children:o||"\u8F93\u5165 ".concat(Ke.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),(0,C.jsx)(gn,{allowSpaces:Ve,onSelect:Ge,options:fe,overlayClassName:e==null?void 0:e.menuOverlay,preTriggerChars:Te,punctuation:He,triggers:Ke}),(0,C.jsx)(c,{}),(0,C.jsx)(te,{}),(0,C.jsx)(r.e,{}),(0,C.jsx)(P.$,{onChange:Re}),(0,C.jsx)(Nn,{onBlur:An,onFocus:Dn})]})})}):(0,C.jsxs)("div",{className:Fe(ge.wrapper,e==null?void 0:e.wrapper),children:[(0,C.jsx)("div",{className:Fe(S()(S()(S()(S()({},ge.root,!0),ge.filled,Kn==="filled"),ge.borderless,Kn==="borderless"),ge.disabled,ne),i),style:v||{}}),(0,C.jsx)("div",{className:ge.placeholder,children:o||"\u8F93\u5165 ".concat(Ke.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(In,Y,n){n.d(Y,{u:function(){return b}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(51697),U=n(75271),Z="yunti-ui",r=n(53649),P=n.n(r),u=n(47512),E,s,a=(0,u.kc)(function(N,h){var A=N.css,j=N.prefixCls,f=h.borderd,O=f===void 0?!0:f,z=h.footer,y=z===null||Array.isArray(z)&&z.length===0,T=A(E||(E=P()([`
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
    `])),j,j,y?0:"40px",j,y?0:"1px");return{custom:A(s||(s=P()([`
        `,`
      `])),O&&T)}},{hashPriority:"low"}),W=n(52676),B=["className","borderd"],g=function(h){var A=h.className,j=h.borderd,f=j===void 0?!0:j,O=S()(h,B),z=a(t()({borderd:f},O)),y=z.styles,T=z.cx;return(0,W.jsx)(M.Z,t()(t()({},O),{},{className:T(y.custom,"".concat(Z,"-modal"),A)}))},b=g;b.useModal=M.Z.useModal,b.destroyAll=M.Z.destroyAll,b.config=M.Z.config,b._InternalPanelDoNotUseOrYouWillBeFired=M.Z._InternalPanelDoNotUseOrYouWillBeFired,b.info=M.Z.info,b.success=M.Z.success,b.error=M.Z.error,b.warning=M.Z.warning,b.warn=M.Z.warn,b.confirm=M.Z.confirm;var x=null},81321:function(In,Y,n){n.d(Y,{ZM:function(){return Le},Hu:function(){return T},Xq:function(){return Oe},rE:function(){return be}});var k=n(26068),t=n.n(k),V=n(48305),S=n.n(V),M=n(67825),U=n.n(M),Z=n(33592),r=n(75271),P=n(94456),u=n(60477),E=n(71170),s=n(32328),a=n(87449),W=n(28485),B=n(90228),g=n.n(B),b=n(87999),x=n.n(b),N=n(97524),h=n(50279),A=n(25298),j=n.n(A),f=n(17069),O=n.n(f),z=n(82092),y=n.n(z),T=function(){function dn(){j()(this,dn),y()(this,"methodMap",void 0),y()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return O()(dn,[{key:"registerMethod",value:function($,R){this.methodMap[$]=R}},{key:"call",value:function($){for(var R,mn,bn=arguments.length,En=new Array(bn>1?bn-1:0),rn=1;rn<bn;rn++)En[rn-1]=arguments[rn];return(R=(mn=this.methodMap)[$])===null||R===void 0?void 0:R.call.apply(R,[mn].concat(En))}},{key:"updateMeta",value:function($){Object.assign(this.meta,$)}},{key:"getMeta",value:function(){return Object.freeze(t()({},this.meta))}}]),dn}(),_="__base_monaco_editor_controller__",K=W.j&&window;K&&!K[_]&&(K[_]=new T);var G=K[_],nn=function(){var dn,c;return function(){var $=x()(g()().mark(function R(mn){var bn;return g()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!dn||!(0,h.Z)(c,mn))){rn.next=7;break}return bn=Object.keys(mn||{}).length>0,N.Z.config(bn?mn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),rn.next=5,N.Z.init();case 5:dn=rn.sent,c=mn;case 7:return rn.abrupt("return",dn);case 8:case"end":return rn.stop()}},R)}));return function(R){return $.apply(this,arguments)}}()}(),Q=function(c){return c?N.Z.config(c):N.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),N.Z.init()};function F(dn){var c=Object.keys(dn||{}).length>0,$=c?dn:void 0;return G.getMeta().singleton?nn($):Q($)}function m(dn){controller.updateMeta(dn)}var D=W.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",J=D==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",X={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},C={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function xn(dn){var c=(0,r.useRef)();return(0,r.useEffect)(function(){c.current=dn},[dn]),c.current}function on(dn,c,$,R){if(R){var mn=dn.editor.getModel(dn.Uri.parse(R));if(mn)return mn}return dn.editor.createModel(c,$,R?dn.Uri.parse(R):void 0)}var yn=function(c,$){var R=$.editorDidMount,mn=$.editorWillMount,bn=$.theme,En=$.value,rn=$.path,te=$.language,Fn=$.saveViewState,jn=$.defaultValue,Un=$.enhancers,Gn=(0,r.useState)(!1),le=S()(Gn,2),zn=le[0],qn=le[1],On=(0,r.useState)(!1),se=S()(On,2),re=se[0],oe=se[1],Xn=(0,r.useState)(!1),ce=S()(Xn,2),ve=ce[0],ae=ce[1],Yn=(0,r.useRef)(jn),Jn=(0,r.useRef)(En),hn=(0,r.useRef)(te||"text"),fn=(0,r.useRef)(rn),gn=xn(rn),Bn=(0,r.useRef)($.requireConfig),Nn=(0,r.useRef)($.options),Vn=(0,r.useRef)(),wn=(0,r.useRef)(),Ee=(0,r.useRef)(),Pe=(0,r.useRef)(c),Me=(0,r.useRef)(),he=(0,r.useRef)(),xe=(0,r.useRef)(!1),Ae=(0,r.useRef)(new Map),De=(0,r.useRef)({});(0,r.useEffect)(function(){De.current.enhancers=Un},[Un]),(0,r.useEffect)(function(){Me.current=R},[R]),(0,r.useEffect)(function(){he.current=mn},[mn]),(0,r.useEffect)(function(){Jn.current=En},[En]),(0,r.useEffect)(function(){hn.current=te},[te]),(0,r.useEffect)(function(){Yn.current=jn},[jn]),(0,r.useEffect)(function(){ae(!0),F(Bn.current).then(function(pn){var me;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Vn.current=pn;try{var ue;(ue=he.current)===null||ue===void 0||ue.call(he,pn)}catch(I){}if(Ee.current){var l;if(Pe.current==="single"){var d,i,e=on(pn,(d=(i=Jn.current)!==null&&i!==void 0?i:Yn.current)!==null&&d!==void 0?d:"",hn.current,fn.current);l=pn.editor.create(Ee.current,t()(t()({automaticLayout:!0},X),Nn.current)),l.setModel(e)}else{var o=pn.editor.createModel(Jn.current,hn.current),v=pn.editor.createModel(Jn.current,hn.current);l=pn.editor.createDiffEditor(Ee.current,t()(t()({automaticLayout:!0},C),Nn.current)),l.setModel({original:o,modified:v})}wn.current=l,(me=De.current.enhancers)===null||me===void 0||me.forEach(function(I){return I(pn,l)});try{var L;(L=Me.current)===null||L===void 0||L.call(Me,pn,l)}catch(I){}xe.current||qn(!0)}}).catch(function(pn){console.error("Monaco Editor Load Error!",pn)}).then(function(){xe.current||ae(!1)})},[]),(0,r.useEffect)(function(){var pn;zn&&((pn=Vn.current)===null||pn===void 0||pn.editor.setTheme(bn))},[zn,bn]),(0,r.useEffect)(function(){if(zn){var pn=c==="diff"?wn.current.getModifiedEditor():wn.current;pn==null||pn.onDidFocusEditorText(function(){xe.current||oe(!0)}),pn==null||pn.onDidBlurEditorText(function(){xe.current||oe(!1)})}},[zn,c]),(0,r.useEffect)(function(){return function(){xe.current=!0}},[]),(0,r.useEffect)(function(){var pn,me,ue;if(zn&&!(c!=="diff"&&rn)){var l=c==="diff"?wn.current.getModifiedEditor():wn.current,d=(pn=En!=null?En:Yn.current)!==null&&pn!==void 0?pn:"",i=(me=Vn.current)===null||me===void 0?void 0:me.editor.EditorOption.readOnly;i&&l!==null&&l!==void 0&&(ue=l.getOption)!==null&&ue!==void 0&&ue.call(l,i)?l==null||l.setValue(d):En!==(l==null?void 0:l.getValue())&&(l==null||l.executeEdits("",[{range:l==null?void 0:l.getModel().getFullModelRange(),text:d,forceMoveMarkers:!0}]),l==null||l.pushUndoStop())}},[zn,rn,c,En]),(0,r.useEffect)(function(){var pn,me;if(zn&&c!=="diff"&&rn!==gn){var ue=on(Vn.current,(pn=Jn.current)!==null&&pn!==void 0?pn:Yn.current,hn.current,rn),l=wn.current;Jn.current!==null&&Jn.current!==void 0&&ue.getValue()!==Jn.current&&ue.setValue(Jn.current),ue!==((me=wn.current)===null||me===void 0?void 0:me.getModel())&&(Fn&&Ae.current.set(gn,l.saveViewState()),l.setModel(ue),Fn&&l.restoreViewState(Ae.current.get(rn)))}},[zn,En,rn,gn,c,Fn]);var We=wn;return{isEditorReady:zn,focused:re,loading:ve,containerRef:Ee,monacoRef:Vn,editorRef:We,valueRef:Jn}},ln=function(c){var $=(0,r.useState)(!1),R=S()($,2),mn=R[0],bn=R[1],En=function(){if(mn){bn(!1),c==null||c.updateOptions(t()(t()({},c==null?void 0:c.getOptions()),{},{minimap:{enabled:!1}})),c==null||c.layout();return}bn(!0),c==null||c.updateOptions(t()(t()({},c==null?void 0:c.getOptions()),{},{minimap:{enabled:!0}})),c==null||c.layout()};return{isFullScreen:mn,fullScreen:En}},p=n(53649),q=n.n(p),sn=n(47512),w,cn,Pn,Tn,Zn,Rn,_n,Sn,Qn,Hn,vn=(0,sn.kc)(function(dn,c){var $=dn.css,R=dn.token,mn=dn.prefixCls,bn=c.minimapEnabled,En=bn===void 0?!1:bn,rn=c.isFullScreen,te=rn===void 0?!1:rn,Fn=c.diff,jn=Fn===void 0?!1:Fn,Un=c.variant,Gn=Un===void 0?"outlined":Un,le=(0,sn.F4)(w||(w=q()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),zn=function(){switch(Gn){case"outlined":return R.colorBgBase;case"filled":return R.colorFillTertiary;default:return"transparent"}};return{base:$(cn||(cn=q()([`
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
            background-color: transparent;
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
      `])),zn(),Gn==="outlined"?R.colorBorder:"transparent",R.borderRadius,Gn==="outlined"?R.colorPrimaryHover:"transparent",Gn==="filled"&&$(Pn||(Pn=q()([`
            background-color: `,`;
          `])),R.colorFillSecondary),Gn==="filled"&&$(Tn||(Tn=q()([`
            background-color: `,`;
          `])),R.colorBgBase),Gn!=="borderless"&&$(Zn||(Zn=q()([`
            border-color: `,`;
          `])),R.colorPrimaryActive),te&&$(Rn||(Rn=q()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius-1,R.borderRadius-1),fullScreenBtn:$(_n||(_n=q()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),mn,R.colorTextSecondary,te?$(Sn||(Sn=q()([`
                z-index: 9999;
                right: `,`px;
              `])),jn?64:138):$(Qn||(Qn=q()([`
                right: `,`px;
              `])),En||jn?64:20)),loading:$(Hn||(Hn=q()([`
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
      `])),R.fontSizeSM,R.colorTextTertiary,le)}},{hashPriority:"low"}),un=n(52676);function Ln(){}var $n=function(c){var $,R=c.onChange,mn=c.enableOutline,bn=c.width,En=c.height,rn=c.language,te=c.supportFullScreen,Fn=(0,r.useRef)(R),jn=yn("single",c),Un=jn.isEditorReady,Gn=jn.focused,le=jn.loading,zn=jn.containerRef,qn=jn.monacoRef,On=jn.editorRef,se=jn.valueRef,re=(0,r.useRef)(),oe=ln(On==null?void 0:On.current),Xn=oe.isFullScreen,ce=oe.fullScreen,ve=vn({isFullScreen:Xn,minimapEnabled:($=c.options)===null||$===void 0||($=$.minimap)===null||$===void 0?void 0:$.enabled,variant:c.variant}),ae=ve.cx,Yn=ve.styles,Jn=ae(Yn.base,c.className,{"ve-focused":Gn,"ve-outline":mn}),hn=(0,r.useMemo)(function(){return{width:bn,height:En}},[bn,En]);return(0,r.useEffect)(function(){Fn.current=R},[R]),(0,r.useEffect)(function(){if(Un){var fn,gn=On.current;(fn=re.current)===null||fn===void 0||fn.dispose(),re.current=gn==null?void 0:gn.onDidChangeModelContent(function(Bn){var Nn,Vn=gn==null||(Nn=gn.getModel())===null||Nn===void 0?void 0:Nn.getValue();if(se.current!==Vn){var wn;(wn=Fn.current)===null||wn===void 0||wn.call(Fn,Vn,Bn)}})}},[On,Un,re,se]),(0,r.useEffect)(function(){return function(){var fn,gn,Bn,Nn=On.current;(fn=re.current)===null||fn===void 0||fn.dispose(),Nn==null||(gn=Nn.getModel())===null||gn===void 0||gn.dispose(),(Bn=On.current)===null||Bn===void 0||Bn.dispose()}},[On]),(0,r.useEffect)(function(){var fn;if(Un){var gn=(fn=On.current)===null||fn===void 0?void 0:fn.getModel();if(gn){var Bn;(Bn=qn.current)===null||Bn===void 0||Bn.editor.setModelLanguage(gn,rn)}}},[On,Un,rn,qn]),(0,un.jsxs)("div",{className:Jn,style:c.style,children:[le&&(0,un.jsx)("span",{className:ae(Yn.loading,"loading"),children:J}),(0,un.jsx)("div",{className:"react-monaco-editor-container",ref:zn,style:hn,children:te&&(0,un.jsx)(E.ZP,{className:Yn.fullScreenBtn,icon:(0,un.jsx)(u.Z,{icon:Xn?s.Z:a.Z}),onClick:ce,size:"small",type:"text"})})]})},Wn=function(c){var $=c.enableOutline,R=c.width,mn=c.height,bn=c.language,En=c.onChange,rn=c.original,te=c.supportFullScreen,Fn=(0,r.useRef)(En),jn=yn("diff",c),Un=jn.isEditorReady,Gn=jn.focused,le=jn.loading,zn=jn.containerRef,qn=jn.monacoRef,On=jn.editorRef,se=jn.valueRef,re=ln(),oe=re.isFullScreen,Xn=re.fullScreen,ce=vn({isFullScreen:oe,diff:!0,variant:c.variant}),ve=ce.cx,ae=ce.styles,Yn=ve(ae.base,c.className,{"ve-focused":Gn,"ve-outline":$}),Jn=(0,r.useMemo)(function(){return{width:R,height:mn}},[R,mn]);return(0,r.useEffect)(function(){Fn.current=En},[En]),(0,r.useEffect)(function(){var hn;if(Un){(hn=On.current.getModel())===null||hn===void 0||hn.original.setValue(rn!=null?rn:"");var fn=On.current.getModel()||{},gn=fn.modified;gn==null||gn.onDidChangeContent(function(Bn){var Nn=gn.getValue();if(se.current!==Nn){var Vn;(Vn=Fn.current)===null||Vn===void 0||Vn.call(Fn,Nn,Bn)}})}},[On,Un,rn,se]),(0,r.useEffect)(function(){return function(){var hn,fn,gn;(hn=On.current)===null||hn===void 0||(hn=hn.getModel())===null||hn===void 0||(hn=hn.original)===null||hn===void 0||hn.dispose(),(fn=On.current)===null||fn===void 0||(fn=fn.getModel())===null||fn===void 0||(fn=fn.modified)===null||fn===void 0||fn.dispose(),(gn=On.current)===null||gn===void 0||gn.dispose()}},[On]),(0,r.useEffect)(function(){var hn,fn,gn;if(Un){var Bn=((hn=On.current)===null||hn===void 0?void 0:hn.getModel())||{},Nn=Bn.original,Vn=Bn.modified;(fn=qn.current)===null||fn===void 0||fn.editor.setModelLanguage(Nn,bn),(gn=qn.current)===null||gn===void 0||gn.editor.setModelLanguage(Vn,bn)}},[On,Un,bn,qn]),(0,un.jsxs)("div",{className:Yn,style:c.style,children:[le&&(0,un.jsx)("span",{className:ve(ae.loading,"loading"),children:J}),(0,un.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:zn,style:Jn,children:te&&(0,un.jsx)(E.ZP,{className:ae.fullScreenBtn,icon:(0,un.jsx)(u.Z,{icon:oe?s.Z:a.Z}),onClick:Xn,size:"small",type:"text"})})]})},ee=Object.assign(Wn,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:X,editorDidMount:Ln,editorWillMount:Ln,onChange:Ln,requireConfig:{}}}),en=Object.assign($n,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:X,editorDidMount:Ln,editorWillMount:Ln,onChange:Ln,requireConfig:{}},MonacoDiffEditor:ee}),kn=null,ie=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Ce=["inlineView","options"],Le=function(c){var $=c.type,R=$===void 0?"single":$,mn=c.editorDidMount,bn=c.readOnly,En=bn===void 0?!1:bn,rn=c.lineNumbers,te=rn===void 0?"on":rn,Fn=c.wordWrap,jn=Fn===void 0?"off":Fn,Un=c.contextmenu,Gn=Un===void 0?!0:Un,le=c.theme,zn=c.minimapEnabled,qn=zn===void 0?!1:zn,On=c.version,se=On===void 0?"0.45.0":On,re=c.requireConfig,oe=re===void 0?{}:re,Xn=c.options,ce=c.className,ve=c.supportFullScreen,ae=U()(c,ie),Yn=(0,r.useRef)(mn);(0,r.useEffect)(function(){Yn.current=mn},[mn]);var Jn=(0,Z.r)(),hn=Jn.isDarkMode,fn=(0,r.useMemo)(function(){return le||(hn?"vs-dark":"vs")},[hn,le]),gn=(0,r.useState)(),Bn=S()(gn,2),Nn=Bn[0],Vn=Bn[1],wn=(0,r.useCallback)(function(he,xe){var Ae;Vn(xe),(Ae=Yn.current)===null||Ae===void 0||Ae.call(Yn,he,xe)},[]),Ee=(0,r.useMemo)(function(){var he=Object.assign({},Xn,{readOnly:En,lineNumbers:te,wordWrap:jn,contextmenu:Gn,minimap:qn===void 0?Xn==null?void 0:Xn.minimap:Object.assign({},Xn==null?void 0:Xn.minimap,{enabled:qn})});return Nn==null||Nn.updateOptions(he),he},[Xn,En,te,jn,Gn,qn,Nn]),Pe=(0,P.nc)(),Me=(0,r.useMemo)(function(){return Object.assign({},oe,{paths:t()({vs:Pe({path:"min/vs",pkg:"monaco-editor",version:se})},oe.paths)})},[Pe,oe,se]);return R!=="diff"?(0,un.jsx)(en,t()({className:ce,editorDidMount:wn,options:Ee,requireConfig:Me,supportFullScreen:Nn&&ve,theme:fn},ae)):(0,un.jsx)(en.MonacoDiffEditor,t()({className:ce,editorDidMount:wn,options:Ee,requireConfig:Me,supportFullScreen:Nn&&ve,theme:fn},ae))},be=function(c){return(0,un.jsx)(Le,t()(t()({},c),{},{type:"single"}))},Oe=function(c){var $=c.inlineView,R=$===void 0?"off":$,mn=c.options,bn=U()(c,Ce);return(0,un.jsx)(Le,t()(t()({options:Object.assign({useInlineViewWhenSpaceIsLimited:R==="on"||R==="auto",renderSideBySide:R==="off"||R==="auto"},mn)},bn),{},{type:"diff"}))}},64521:function(In,Y,n){n.d(Y,{Y:function(){return b}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(20219),U=n(75271),Z=n(53649),r=n.n(Z),P=n(47512),u,E,s,a,W=(0,P.kc)(function(h,A){var j=h.css,f=h.token,O=h.prefixCls,z=A.size,y=A.segmented,T=function(){return y?y!==!0?y.gap:!0:0}(),_=function(){if(y)return y!==!0?y.borderRadius:!0}(),K=function(){var D={small:f.sizeSM,middle:f.size,large:f.sizeLG};return typeof T=="string"?D[T]:T===!0?z?D[z]:D.middle:T||0},G=function(){var D={small:f.controlHeightSM,middle:f.controlHeight,large:f.controlHeightLG};if(_===!0)return z?D[z]:D.middle;if(_||_===0)return _},nn=G()&&j(u||(u=r()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),G()),Q=j(E||(E=r()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),K()),F=y===!0||y&&!y.bordered;return{custom:j(s||(s=r()([`
        `,`
        `,`
        `,`
      `])),nn,Q,F&&j(a||(a=r()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),O,O,f.colorPrimary))}},{hashPriority:"low"}),B=n(52676),g=["className"],b=M.ZP,x=function(A){var j=A.className,f=S()(A,g);f.segmented&&(f.optionType="button");var O=W(f),z=O.styles,y=O.cx;return(0,B.jsx)(M.ZP.Group,t()(t()({},f),{},{className:y(z.custom,j)}))};b.Group=x;var N=null},25777:function(In,Y,n){n.d(Y,{W:function(){return G}});var k=n(26068),t=n.n(k),V=n(15558),S=n.n(V),M=n(48305),U=n.n(M),Z=n(67825),r=n.n(Z),P=n(60477),u=n(83293),E=n(44923),s=n(46847),a=n(82338),W=n(2405),B=n(75271),g=n(53649),b=n.n(g),x=n(47512),N,h,A,j,f,O=function(Q){switch(Q){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},z=(0,x.kc)(function(nn,Q){var F=nn.css,m=nn.token,D=nn.prefixCls,J=Q.disabled,X=Q.size,C=O(X),xn=C.cardWidth;return{option:F(N||(N=b()([`
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
      `])),m.colorBorder,m.borderRadius,J?"not-allowed":"pointer",m.padding,m.motionDurationFast,xn,J&&F(h||(h=b()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),m.colorBgContainerDisabled,D,m.colorTextDisabled,D,m.colorTextDisabled),!J&&F(A||(A=b()([`
          &:hover {
            border-color: `,`;
          }
        `])),m.colorPrimaryBorderHover),D),optionSelected:F(j||(j=b()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),m.colorPrimary,m.colorPrimaryActive),check:F(f||(f=b()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),m.marginXS,m.marginXS,m.colorPrimary)}}),y=n(52676),T=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],_=u.Z.Text,K=u.Z.Paragraph,G=B.forwardRef(function(nn,Q){var F=nn.defaultValue,m=nn.value,D=nn.onChange,J=nn.multiple,X=J===void 0?!1:J,C=nn.disabled,xn=C===void 0?!1:C,on=nn.options,yn=on===void 0?[]:on,ln=nn.classNames,p=nn.styles,q=nn.size,sn=q===void 0?"middle":q,w=nn.optionRender,cn=r()(nn,T),Pn=(0,B.useMemo)(function(){return yn.some(function(en){return!!en.img||!!en.icon})},[yn]),Tn=z({disabled:xn,size:sn}),Zn=Tn.cx,Rn=Tn.styles,_n=(0,B.useMemo)(function(){return O(sn)},[sn]),Sn=_n.imgHeight,Qn=(0,B.useCallback)(function(en){return!X||Array.isArray(en)?en:en===void 0?[]:[en]},[X]),Hn=(0,W.C8)(Qn(F),{defaultValue:Qn(F),value:m,onChange:D}),vn=U()(Hn,2),un=vn[0],Ln=vn[1],$n=(0,B.useCallback)(function(en){if(!xn){if(!X){Ln(en);return}if(un.includes(en)){Ln(un.filter(function(kn){return kn!==en}));return}Ln([].concat(S()(un),[en]))}},[un,xn,X,Ln]),Wn=(0,B.useCallback)(function(en){return X?un.includes(en):un===en},[un,X]),ee=(0,B.useCallback)(function(en,kn){var ie=Wn(en.value),Ce=(0,y.jsxs)(E.Z,{align:Pn?"center":"flex-start",className:Zn(Rn.option,ie&&Rn.optionSelected,ln==null?void 0:ln.card),gap:"small",onClick:function(){return $n(en.value)},style:t()(t()({},p==null?void 0:p.card),en.style),vertical:!0,children:[Pn&&(0,y.jsx)(s.C,{className:ln==null?void 0:ln.icon,icon:en.icon,shape:"square",size:Sn,src:en.img,style:t()(t()({},p==null?void 0:p.icon),en.iconStyle)}),en.label&&ie&&(0,y.jsx)(_,{ellipsis:!0,strong:!0,children:en.label}),en.label&&!ie&&(0,y.jsx)(_,{ellipsis:!0,children:en.label}),!Pn&&en.description&&(0,y.jsx)(K,{ellipsis:{rows:2},type:"secondary",children:en.description}),ie&&(0,y.jsx)(P.Z,{className:Rn.check,icon:a.Z})]},en.value);return w?w(Ce,en,kn):Ce},[ln==null?void 0:ln.card,ln==null?void 0:ln.icon,Zn,Sn,Pn,Wn,$n,w,Rn.check,Rn.option,Rn.optionSelected,p==null?void 0:p.card,p==null?void 0:p.icon]);return(0,y.jsx)(E.Z,t()(t()({gap:"large",ref:Q,wrap:!0},cn),{},{children:yn.map(function(en,kn){return ee(en,kn)})}))})},66269:function(In,Y,n){n.d(Y,{a:function(){return E}});var k=n(26068),t=n.n(k),V=n(48305),S=n.n(V),M=n(26582),U=n(68526),Z=n(27896),r=n(96965),P=n(75271),u=n(52676),E=function(a){var W=a.value,B=a.defaultValue,g=a.min,b=g===void 0?0:g,x=a.max,N=a.step,h=a.gutter,A=h===void 0?16:h,j=a.sliderCol,f=j===void 0?{span:12}:j,O=a.inputCol,z=O===void 0?{span:5}:O,y=a.addonAfter,T=a.addonBefore,_=a.placeholder,K=a.onChange,G=a.style,nn=a.className,Q=a.sliderProps,F=Q===void 0?{}:Q,m=a.inputProps,D=m===void 0?{}:m,J=(0,P.useState)(),X=S()(J,2),C=X[0],xn=X[1],on=function(ln){Number.isNaN(ln)||(xn(ln),K==null||K(ln))};return(0,u.jsxs)(M.Z,{className:nn,gutter:A,style:G,children:[(0,u.jsx)(U.Z,t()(t()({},f),{},{children:(0,u.jsx)(Z.Z,t()(t()({},F),{},{defaultValue:B,max:x,min:b,onChange:on,step:N,value:W!=null?W:C}))})),(0,u.jsx)(U.Z,t()(t()({},z),{},{children:(0,u.jsx)(r.Z,t()(t()({},D),{},{addonAfter:y,addonBefore:T,defaultValue:B,max:x,min:b,onChange:on,placeholder:_,step:N,value:W!=null?W:C}))}))]})}},56482:function(In,Y,n){n.d(Y,{N:function(){return B}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(97912),U=n(75271),Z=n(79213),r=n(53649),P=n.n(r),u=n(47512),E,s=(0,u.kc)(function(g){var b=g.css,x=g.token,N=g.prefixCls;return{table:b(E||(E=P()([`
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
    `])),N,x.colorTextTertiary)}}),a=n(52676),W=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],B=function(b){var x=b.rootStyle,N=b.rootClassName,h=b.icon,A=b.title,j=b.variant,f=b.defaultActive,O=b.extra,z=b.className,y=S()(b,W),T=s(),_=T.cx,K=T.styles;return(0,a.jsx)(Z.w,{className:N,style:x,icon:h,title:A,variant:j,defaultActive:f,extra:O,children:(0,a.jsx)(M.Z,t()({className:_(K.table,z),pagination:!1,rowHoverable:!1,size:"small"},y))})}},11546:function(In,Y,n){n.d(Y,{NU:function(){return r.N},iA:function(){return E}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(56995),U=n(97912),Z=n(75271),r=n(56482),P=n(52676),u=["columns"],E=function(W){var B=W.columns,g=S()(W,u),b=(0,Z.useMemo)(function(){return B==null?void 0:B.map(function(x){if(x.render)return x;if(x.ellipsis&&x.ellipsis!==!0&&x.ellipsis.showTitle||x.ellipsis===!0){var N=x.ellipsis===!0?{}:x.ellipsis;return t()(t()({},x),{},{ellipsis:{showTitle:!1},render:function(A){return A||A===0?(0,P.jsx)(M.Z,t()(t()({},N),{},{placement:"topLeft",title:A,children:A})):"-"}})}return x.render||(x.render=function(h){return h!=null?h:"-"}),x})},[B]);return(0,P.jsx)(U.Z,t()(t()({},g),{},{columns:b}))};E.displayName="Table",E.SELECTION_COLUMN=U.Z.SELECTION_COLUMN,E.EXPAND_COLUMN=U.Z.EXPAND_COLUMN,E.SELECTION_ALL=U.Z.SELECTION_ALL,E.SELECTION_INVERT=U.Z.SELECTION_INVERT,E.SELECTION_NONE=U.Z.SELECTION_NONE,E.Column=U.Z.Column,E.ColumnGroup=U.Z.ColumnGroup,E.Summary=U.Z.Summary,E.Collapse=r.N;var s=null},8559:function(In,Y,n){n.d(Y,{G:function(){return B}});var k=n(53649),t=n.n(k),V=n(47512),S=n(75271),M=n(52676),U,Z,r,P,u,E,s,a,W=(0,V.kc)(function(g,b){var x=g.css,N=(0,V.F4)(U||(U=t()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),h=(0,V.F4)(Z||(Z=t()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),A=(0,V.F4)(r||(r=t()([`
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
    `])),b.width||34,b.height||22,b.bgColor||"transparent"),line:x(u||(u=t()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),b.lineColor||"#000"),animate1:x(E||(E=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),N),animate2:x(s||(s=t()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),h),animate3:x(a||(a=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),A)}}),B=function(b){var x=b.height,N=b.width,h=b.lineColor,A=b.bgColor,j=W({height:x,width:N,lineColor:h,bgColor:A}),f=j.styles,O=j.cx;return(0,M.jsxs)("div",{className:f.box,children:[(0,M.jsx)("div",{className:O(f.line,f.animate1)}),(0,M.jsx)("div",{className:O(f.line,f.animate2)}),(0,M.jsx)("div",{className:O(f.line,f.animate3)}),(0,M.jsx)("div",{className:O(f.line,f.animate2)}),(0,M.jsx)("div",{className:O(f.line,f.animate1)}),(0,M.jsx)("div",{className:O(f.line,f.animate2)}),(0,M.jsx)("div",{className:O(f.line,f.animate1)})]})}},71983:function(In,Y,n){n.r(Y),n.d(Y,{Affix:function(){return cn.Z},Alert:function(){return W.b},Anchor:function(){return Pn.Z},AntdMentions:function(){return Tn.Z},App:function(){return B.g},AudioPlayer:function(){return De.Z},AutoComplete:function(){return Zn.Z},Avatar:function(){return Rn.C},BackTop:function(){return _n.Z},Badge:function(){return Sn.Z},BaseMonacoEditor:function(){return r.ZM},Breadcrumb:function(){return g.Z},Button:function(){return Qn.ZP},ButtonGroup:function(){return k.h},Calendar:function(){return Hn.Z},Card:function(){return b.Z},Carousel:function(){return vn.Z},Cascader:function(){return un.Z},ChatInputActionBar:function(){return G.Z},ChatInputArea:function(){return K.Z},ChatInputAreaInner:function(){return nn.Z},ChatItem:function(){return D.z},ChatSendButton:function(){return Q.Z},Checkbox:function(){return Ln.Z},Col:function(){return $n.Z},Collapse:function(){return Wn.Z},CollapseGroup:function(){return t.w},CollapseTable:function(){return T.NU},ColorPicker:function(){return ee.Z},ConfigContext:function(){return V.E_},ConfigProvider:function(){return V.iV},CopyButton:function(){return Me.Z},DatePicker:function(){return en.default},Descriptions:function(){return x.w},Divider:function(){return N.i},DragPanel:function(){return S.U},Drawer:function(){return h.d},Dropdown:function(){return A.L},EditableMessage:function(){return J.i},Empty:function(){return kn.Z},Flex:function(){return ie.Z},FloatButton:function(){return Ce.Z},Form:function(){return j.l},FormCollapseList:function(){return j.E},FormHelper:function(){return f.wK},FullFeaturedHighlighter:function(){return X.EL},Grid:function(){return Le.ZP},Highlighter:function(){return X.oP},Image:function(){return be.Z},Input:function(){return Oe.Z},InputNumber:function(){return dn.Z},Layout:function(){return c.Z},List:function(){return $.Z},LogViewer:function(){return U.n},Logo:function(){return M.T},Markdown:function(){return he.Z},Mentions:function(){return Z.o},Menu:function(){return R.Z},MobileChatInputArea:function(){return F.Z},MobileChatSendButton:function(){return m.Z},Modal:function(){return O.u},MonacoController:function(){return r.Hu},MonacoDiffEditor:function(){return r.Xq},MonacoEditor:function(){return r.rE},NotificationGlobalStyle:function(){return z.EZ},Page:function(){return P.T},Pagination:function(){return bn.Z},Popconfirm:function(){return En.Z},Popover:function(){return rn.Z},ProCard:function(){return u.Q},Progress:function(){return te.Z},QRCode:function(){return Fn.Z},Radio:function(){return y.Y},Rate:function(){return jn.Z},Result:function(){return Un.ZP},Row:function(){return Gn.Z},Segmented:function(){return le.Z},Select:function(){return zn.default},SelectCard:function(){return E.W},Skeleton:function(){return qn.Z},Slider:function(){return On.Z},SliderInput:function(){return s.a},Space:function(){return se.Z},SpeechSynthesisTTS:function(){return Ae.H},Spin:function(){return re.Z},Statistic:function(){return oe.Z},Status:function(){return a.q},Steps:function(){return Xn.Z},Switch:function(){return ce.Z},SyntaxHighlighter:function(){return xe.Z},Table:function(){return T.iA},Tabs:function(){return ve.Z},Tag:function(){return ae.Z},TimePicker:function(){return hn.Z},Timeline:function(){return Jn.Z},Tooltip:function(){return fn.Z},Tour:function(){return gn.Z},Transfer:function(){return Bn.Z},Tree:function(){return Nn.Z},TreeSelect:function(){return Vn.Z},Typography:function(){return _.Z},Upload:function(){return wn.Z},Watermark:function(){return Pe.Z},WaveformIcon:function(){return w.G},colorScales:function(){return C._},colors:function(){return C._},generateColorNeutralPalette:function(){return p},generateColorPalette:function(){return ln},message:function(){return mn.ZP},neutralColorScales:function(){return q},notification:function(){return z.t6},theme:function(){return Yn.Z},useAudioPlayer:function(){return We.x},useAutoFocus:function(){return f.wL},useCdnFn:function(){return V.nc},useLink:function(){return V.nB},useResponsive:function(){return me.F},useSpeechRecognition:function(){return pn.x},useSpeechSynthes:function(){return sn.J},useTheme:function(){return ue.Fg},useThemeMode:function(){return l.r},version:function(){return Ee.Z},withFormHelper:function(){return f.MX}});var k=n(12644),t=n(79213),V=n(94456),S=n(13306),M=n(52625),U=n(25969),Z=n(48355),r=n(81321),P=n(40305),u=n(86346),E=n(25777),s=n(66269),a=n(46119),W=n(58479),B=n(5244),g=n(77789),b=n(39824),x=n(26345),N=n(82227),h=n(5795),A=n(99512),j=n(62719),f=n(20147),O=n(97527),z=n(40130),y=n(64521),T=n(11546),_=n(94729),K=n(52412),G=n(65059),nn=n(51874),Q=n(62999),F=n(82367),m=n(65677),D=n(92436),J=n(99335),X=n(17853),C=n(15094),xn=n(82092),on=n.n(xn),yn=n(98644),ln=function(i){var e=i.type,o=i.scale,v=i.appearance,L=(0,yn.Z)(e),I=v==="dark";return on()(on()(on()(on()(on()(on()(on()(on()(on()(on()({},"color".concat(L,"Bg"),o[v][1]),"color".concat(L,"BgHover"),o[v][2]),"color".concat(L,"Border"),o[v][4]),"color".concat(L,"BorderHover"),o[v][I?5:3]),"color".concat(L,"Hover"),o[v][I?10:8]),"color".concat(L),o[v][9]),"color".concat(L,"Active"),o[v][I?7:10]),"color".concat(L,"TextHover"),o[v][I?10:8]),"color".concat(L,"Text"),o[v][9]),"color".concat(L,"TextActive"),o[v][I?7:10])},p=function(i){var e=i.scale,o=i.appearance;return{colorBgContainer:o==="dark"?e[o][1]:e[o][0],colorBgElevated:o==="dark"?e[o][2]:e[o][0],colorBgLayout:o==="dark"?e[o][0]:e[o][1],colorBgMask:e.lightA[8],colorBgSpotlight:e[o][5],colorBorder:e[o][4],colorBorderSecondary:e[o][3],colorFill:e["".concat(o,"A")][3],colorFillQuaternary:e["".concat(o,"A")][0],colorFillSecondary:e["".concat(o,"A")][2],colorFillTertiary:e["".concat(o,"A")][1],colorText:e[o][12],colorTextQuaternary:e[o][6],colorTextSecondary:e[o][10],colorTextTertiary:e[o][8]}},q={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},sn=n(82846),w=n(8559),cn=n(7904),Pn=n(58190),Tn=n(46621),Zn=n(85958),Rn=n(46847),_n=n(66075),Sn=n(1088),Qn=n(71170),Hn=n(3957),vn=n(57512),un=n(52279),Ln=n(43584),$n=n(68526),Wn=n(90026),ee=n(64479),en=n(1409),kn=n(78962),ie=n(44923),Ce=n(6697),Le=n(82366),be=n(69414),Oe=n(99707),dn=n(96965),c=n(93702),$=n(78104),R=n(74032),mn=n(57939),bn=n(4211),En=n(45590),rn=n(31997),te=n(35357),Fn=n(82830),jn=n(76177),Un=n(46504),Gn=n(26582),le=n(13927),zn=n(35092),qn=n(99021),On=n(27896),se=n(43356),re=n(49553),oe=n(43954),Xn=n(59470),ce=n(74798),ve=n(60756),ae=n(53453),Yn=n(22972),Jn=n(46141),hn=n(20907),fn=n(56995),gn=n(33858),Bn=n(96208),Nn=n(64287),Vn=n(6036),wn=n(72023),Ee=n(38208),Pe=n(55366),Me=n(81107),he=n(85814),xe=n(74974),Ae=n(49724),De=n(83595),We=n(61984),pn=n(8281),me=n(81134),ue=n(47512),l=n(33592)},40130:function(In,Y,n){n.d(Y,{EZ:function(){return b.E},t6:function(){return nn}});var k=n(26068),t=n.n(k),V=n(67825),S=n.n(V),M=n(48305),U=n.n(M),Z=n(335),r=n.n(Z),P=n(30657),u=n(19728),E=n(22620),s=n(90026),a=n(83293),W=n(98943),B=n(75271),g=n(52676),b=n(55300),x=["detail","message","description","onClose","className"],N=s.Z.Panel,h=a.Z.Link,A=a.Z.Paragraph,j=a.Z.Text,f={},O=function(m,D){f[m]||(f[m]=[]),f[m].push(D)},z=function(m){delete f[m]},y=function F(m){var D="";if(typeof m=="string")D=m;else if(typeof m=="number")D=m.toString();else if(Array.isArray(m)){var J=r()(m),X;try{for(J.s();!(X=J.n()).done;){var C=X.value;D+=F(C)}}catch(xn){J.e(xn)}finally{J.f()}}else(0,B.isValidElement)(m)&&(D+=F(m.props.children));return D},T=function(m){var D,J=m.noticeKey,X=m.message,C=((D=f[J])===null||D===void 0?void 0:D.length)||0;return(0,g.jsxs)(g.Fragment,{children:[X,C>1&&" (".concat(C,")")]})},_=function(m){var D=m.noticeKey,J=(0,B.useState)(),X=U()(J,2),C=X[0],xn=X[1],on={},yn=r()(f[D]),ln;try{for(yn.s();!(ln=yn.n()).done;){var p=ln.value,q=y(p.description);p.descKey=q,on[q]=p}}catch(sn){yn.e(sn)}finally{yn.f()}return(0,g.jsx)(s.Z,{accordion:!0,activeKey:C,className:"yunti-notification-collapse",expandIcon:function(w){var cn=w.isActive;return(0,g.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:cn?(0,g.jsx)(h,{className:"yunti-notification-link",children:(0,g.jsx)(P.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,g.jsx)(u.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(w){xn(w)},children:Object.values(on).map(function(sn){var w=sn.descKey,cn=sn.description,Pn=sn.detail;return(0,g.jsx)(N,{header:(0,g.jsx)(j,{ellipsis:{tooltip:!1},style:{width:250},children:cn}),children:(0,g.jsx)(A,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(Pn,null,2)},type:"secondary",children:(0,g.jsx)("pre",{children:JSON.stringify(Pn,null,2)})})},w)})})},K=function(m){var D=m.detail,J=m.message,X=m.description,C=m.onClose,xn=m.className,on=S()(m,x),yn=y(J);O(yn,m);var ln=function(){C==null||C(),z(yn)};return m.type==="warning"&&!m.icon&&(on.icon=(0,g.jsx)(E.Z,{style:{color:"#ff7d00"}})),D?W.ZP.open(t()({key:yn,message:(0,g.jsx)(T,{message:J,noticeKey:yn}),description:(0,g.jsx)(_,{noticeKey:yn}),onClose:ln,className:"yunti-notification ".concat(xn)},on)):W.ZP.open(t()({key:yn,message:(0,g.jsx)(T,{message:J,noticeKey:yn}),description:X,onClose:ln,className:"yunti-notification ".concat(xn)},on))},G=function(m){var D;if(((m==null||(D=m.errors)===null||D===void 0?void 0:D.length)||0)>0){m!=null&&m.errors;var J=r()((m==null?void 0:m.errors)||[]),X;try{for(J.s();!(X=J.n()).done;){var C=X.value;K(t()(t()({detail:C,description:C.message},m),{},{type:"warning"}))}}catch(xn){J.e(xn)}finally{J.f()}}else K(t()(t()({},m),{},{type:"warning"}))},nn=t()(t()({},W.ZP),{},{success:function(m){return K(t()(t()({},m),{},{type:"success"}))},info:function(m){return K(t()(t()({},m),{},{type:"info"}))},warning:function(m){return K(t()(t()({},m),{},{type:"warning"}))},warn:function(m){return K(t()(t()({},m),{},{type:"warning"}))},error:function(m){return K(t()(t()({},m),{},{type:"error"}))},warnings:G,warns:G}),Q=null},55300:function(In,Y,n){n.d(Y,{E:function(){return U}});var k=n(53649),t=n.n(k),V=n(98943),S=n(47512),M,U=(0,S.vJ)(M||(M=t()([`
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
`])),function(Z){var r=Z.theme;return"".concat(r==null?void 0:r.colorPrimary," !important")},function(Z){var r=Z.theme;return"".concat(r==null?void 0:r.colorPrimaryHover," !important")},function(Z){var r=Z.theme;return r==null?void 0:r.colorPrimary},function(Z){var r=Z.theme;return"".concat(r==null?void 0:r.colorPrimary," !important")},function(Z){var r=Z.theme;return"".concat(r==null?void 0:r.colorPrimaryHover," !important")},function(Z){var r=Z.theme,P=r||{},u=P.prefixCls;return V.ZP.config({prefixCls:u}),`
      .`.concat(u,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(u,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(In,Y,n){n.d(Y,{j:function(){return k}});var k=typeof window!="undefined"}}]);
