"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(Rn,w,n){n.d(w,{b:function(){return B}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(21153),F=n(75271),Z=n(53649),o=n.n(Z),P=n(47512),d,b=(0,P.kc)(function(g,p){var y=g.css,T=p.bordered,x=T===void 0?"dashed":T;return{custom:y(d||(d=o()([`
        border-style: `,` !important;
      `])),x)}},{hashPriority:"low"}),c=n(52676),t=["bordered","className"],B=function(p){var y=p.bordered,T=y===void 0?"dashed":y,x=p.className,M=A()(p,t),L=b({bordered:T}),f=L.styles,j=L.cx;return(0,c.jsx)(S.Z,r()(r()({},M),{},{className:j(f.custom,x)}))};B.ErrorBoundary=S.Z.ErrorBoundary;var I=null},5244:function(Rn,w,n){n.d(w,{g:function(){return d}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(23878),F=n(75271),Z=n(55300),o=n(52676),P=["children"],d=function(t){var B=t.children,I=A()(t,P);return(0,o.jsxs)(S.Z,r()(r()({},I),{},{children:[(0,o.jsx)(Z.E,{}),B]}))};d.useApp=S.Z.useApp;var b=null},52412:function(Rn,w,n){var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(53649),F=n.n(S),Z=n(62579),o=n(51874),P=n(47512),d=n(75271),b=n(52676),c=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],t,B,I,g=(0,P.kc)(function(y){var T=y.css;return{container:T(t||(t=F()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:T(B||(B=F()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:T(I||(I=F()([`
      position: relative;
      flex: 1;
    `])))}}),p=(0,d.forwardRef)(function(y,T){var x=y.className,M=y.style,L=y.classNames,f=y.expand,j=f===void 0?!0:f,W=y.setExpand,C=y.bottomAddons,N=y.topAddons,k=y.onSizeChange,K=y.heights,sn=y.onSend,q=A()(y,c),nn=g(),H=nn.styles;return(0,b.jsx)(Z.Z,{className:x,classNames:L,fullscreen:j,headerHeight:K==null?void 0:K.headerHeight,maxHeight:K==null?void 0:K.maxHeight,minHeight:K==null?void 0:K.minHeight,onSizeChange:k,placement:"bottom",size:{height:K==null?void 0:K.inputHeight,width:"100%"},style:r()({zIndex:10},M),children:(0,b.jsxs)("section",{className:H.container,style:{minHeight:K==null?void 0:K.minHeight},children:[N,(0,b.jsx)("div",{className:H.textareaContainer,children:(0,b.jsx)(o.Z,r()({className:H.textarea,onSend:function(){sn==null||sn(),W==null||W(!1)},ref:T,type:"pure"},q))}),C]})})});w.Z=(0,d.memo)(p)},59212:function(Rn,w,n){n.d(w,{z:function(){return tn}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(10581),F=n(93955),Z=n(81262),o=n(9192),P=n(81134),d=n(75271),b=n(90142),c=n(53649),t=n.n(c),B=n(47512),I,g,p,y,T,x,M,L,f,j,W,C,N,k,K,sn,q,nn,H=(0,B.kc)(function(h,Y){var E=h.cx,J=h.css,cn=h.token,Mn=h.isDarkMode,Ln=h.responsive,In=Y.placement,Nn=Y.type,ne=Y.title,jn=Y.primary,Kn=Y.avatarSize,Gn=Y.editing,wn=Y.time,Zn=Y.isLatest,mn=J(I||(I=t()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),jn?Mn?cn.colorFill:cn.colorBgElevated:Mn?cn.colorFillSecondary:cn.colorBgContainer,cn.borderRadiusLG,cn.motionEaseOut),Dn=J(g||(g=t()([`
      padding-block-start: `,`;
    `])),ne?0:"6px"),Qn=J(p||(p=t()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),cn.motionEaseOut),de=Nn==="block"?mn:Dn,D=Gn&&J(y||(y=t()([`
        width: 100%;
      `])));return{actions:E(J(T||(T=t()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),In==="left"?"flex-start":"flex-end",In==="left"?"flex-end":"flex-start"),Gn&&J(x||(x=t()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:J(M||(M=t()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),Kn,Kn),avatarGroupContainer:J(L||(L=t()([`
        width: `,`px;
      `])),Kn),container:E(Nn==="pure"&&Qn,J(f||(f=t()([`
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
        `])),Zn?"unset":"none",Zn?1:0,cn.motionEaseOut,Ln.mobile,Nn==="pure"?"12px":"6px")),editingContainer:E(D,J(j||(j=t()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),cn.colorBorderSecondary,cn.colorBorder),Nn==="pure"&&J(W||(W=t()([`
            background: `,`;
            border-radius: `,`px;
          `])),cn.colorFillQuaternary,cn.borderRadius)),editingInput:J(C||(C=t()([`
        width: 100%;
      `]))),errorContainer:J(N||(N=t()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:J(k||(k=t()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),In==="right"?"-4px":"unset",In==="left"?"-4px":"unset",cn.colorBgLayout,cn.colorPrimary),message:E(de,J(K||(K=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),Ln.mobile)),messageContainer:E(D,J(sn||(sn=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),wn?-16:0,Ln.mobile)),messageContent:E(D,J(q||(q=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),Ln.mobile)),messageExtra:E("message-extra"),name:J(nn||(nn=t()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),cn.colorTextDescription,In==="left"?"left":"right")}}),u=n(52676),Q=(0,d.memo)(function(h){var Y=h.actions,E=h.placement,J=h.type,cn=h.editing,Mn=H({editing:cn,placement:E,type:J}),Ln=Mn.styles;return(0,u.jsx)(b.D,{align:"flex-start",className:Ln.actions,role:"menubar",children:Y})}),X=Q,an=n(99335),dn=(0,d.memo)(function(h){var Y=h.editing,E=h.onChange,J=h.onEditingChange,cn=h.text,Mn=h.message,Ln=h.placement,In=h.messageExtra,Nn=h.renderMessage,ne=h.type,jn=h.primary,Kn=h.onDoubleClick,Gn=h.fontSize,wn=h.markdownProps,Zn=h.markdownClassname,mn=H({editing:Y,placement:Ln,primary:jn,type:ne}),Dn=mn.cx,Qn=mn.styles,de=(0,P.F)(),D=de.mobile,Fn=(0,u.jsx)(an.i,{classNames:{input:Qn.editingInput,markdown:Zn},editButtonSize:"small",editing:Y,fontSize:Gn,fullFeaturedCodeBlock:!0,markdownProps:wn,onChange:E,onEditingChange:J,openModal:D?Y:void 0,text:cn,value:Mn?String(Mn).trim():""}),pe=Nn?Nn(Fn):Fn;return(0,u.jsxs)(b.D,{className:Dn(Qn.message,Y&&Qn.editingContainer),onDoubleClick:Kn,children:[pe,In&&!Y?(0,u.jsx)("div",{className:Qn.messageExtra,children:In}):null]})}),bn=dn,V=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest"],xn=32,tn=(0,d.memo)(function(h){var Y=h.avatarAddon,E=h.onAvatarClick,J=h.avatarProps,cn=h.actions,Mn=h.className,Ln=h.primary,In=h.loading,Nn=h.message,ne=h.placement,jn=ne===void 0?"left":ne,Kn=h.type,Gn=Kn===void 0?"block":Kn,wn=h.avatar,Zn=h.error,mn=h.showTitle,Dn=h.time,Qn=h.editing,de=h.onChange,D=h.onEditingChange,Fn=h.messageExtra,pe=h.renderMessage,Me=h.text,Oe=h.errorMessage,Pe=h.onDoubleClick,Be=h.fontSize,Ee=h.markdownProps,un=h.markdownClassname,m=h.isLatest,U=A()(h,V),R=(0,P.F)(),fn=R.mobile,yn=H({editing:Qn,placement:jn,primary:Ln,showTitle:mn,time:Dn,title:wn.title,type:Gn,isLatest:m}),En=yn.cx,rn=yn.styles;return(0,u.jsxs)(b.D,r()(r()({className:En(rn.container,Mn),direction:jn==="left"?"horizontal":"horizontal-reverse",gap:fn?6:12},U),{},{children:[(0,u.jsx)(S.Z,r()(r()({},J),{},{addon:Y,avatar:wn,loading:In,onClick:E,placement:jn,size:fn?xn:void 0})),(0,u.jsxs)(b.D,{align:jn==="left"?"flex-start":"flex-end",className:rn.messageContainer,children:[(0,u.jsx)(o.Z,{avatar:wn,placement:jn,showTitle:mn,time:Dn}),(0,u.jsxs)(b.D,{align:jn==="left"?"flex-start":"flex-end",className:rn.messageContent,direction:"vertical",gap:8,children:[Zn?(0,u.jsx)(Z.Z,{error:Zn,message:Oe,placement:jn}):(0,u.jsx)(bn,{editing:Qn,fontSize:Be,markdownClassname:un,markdownProps:Ee,message:Nn,messageExtra:Fn,onChange:de,onDoubleClick:Pe,onEditingChange:D,placement:jn,primary:Ln,renderMessage:pe,text:Me,type:Gn}),(0,u.jsx)(X,{actions:cn,editing:Qn,placement:jn,type:Gn})]})]}),fn&&Gn==="block"&&(0,u.jsx)(F.Z,{borderSpacing:xn})]}))})},13306:function(Rn,w,n){n.d(w,{U:function(){return W}});var _=n(26068),r=n.n(_),G=n(48305),A=n.n(G),S=n(67825),F=n.n(S),Z=n(97157),o=n(86818),P=n(44923),d=n(71170),b=n(75271),c=n(84569),t=n.n(c),B=n(53649),I=n.n(B),g=n(47512),p,y,T,x,M,L=(0,g.kc)(function(C){var N=C.css,k=C.token,K=C.prefixCls;return{root:N(p||(p=I()([`
      overflow: hidden;
    `]))),wrapper:N(y||(y=I()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),k.marginLG),content:N(T||(T=I()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),k.borderRadiusLG,k.boxShadowSecondary),dragWrapper:N(x||(x=I()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:N(M||(M=I()([`
      cursor: move;
    `])))}}),f=n(52676),j=["title","classNames","defaultPosition","onPositionChange"],W=(0,b.memo)(function(C){var N=C.title,k=C.classNames,K=k===void 0?{}:k,sn=C.defaultPosition,q=C.onPositionChange,nn=F()(C,j),H=L(),u=H.styles,Q=H.cx,X=(0,b.useState)({left:0,top:0,bottom:0,right:0}),an=A()(X,2),dn=an[0],bn=an[1],V=(0,b.useRef)(null),xn=function(h,Y){var E,J=window.document.documentElement,cn=J.clientWidth,Mn=J.clientHeight,Ln=(E=V.current)===null||E===void 0?void 0:E.getBoundingClientRect();Ln&&bn({left:-Ln.left+Y.x,right:cn-(Ln.right-Y.x),top:-Ln.top+Y.y,bottom:Mn-(Ln.bottom-Y.y)})};return(0,f.jsx)(o.Z,r()(r()({},nn),{},{classNames:r()(r()({},K),{},{wrapper:Q(u.wrapper,K.wrapper),content:Q(u.content,K.content)}),destroyOnClose:!0,drawerRender:function(h){return(0,f.jsx)(t(),{bounds:dn,defaultPosition:sn,handle:".".concat(u.dragHandle),nodeRef:V,onStart:function(E,J){return xn(E,J)},onStop:function(E,J){q==null||q({x:J.x,y:J.y})},children:(0,f.jsx)("div",{className:u.dragWrapper,ref:V,children:h})})},mask:!1,rootClassName:u.root,title:(0,f.jsxs)(P.Z,{align:"center",className:u.dragHandle,children:[(0,f.jsx)(P.Z,{flex:2,children:N}),(0,f.jsx)(P.Z,{children:(0,f.jsx)(d.ZP,{className:u.dragHandle,icon:(0,f.jsx)(Z.Z,{}),type:"text"})})]})}))})},5795:function(Rn,w,n){n.d(w,{d:function(){return g}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(86818),F=n(75271),Z=n(53649),o=n.n(Z),P=n(47512),d,b,c,t=(0,P.kc)(function(y,T){var x=y.css,M=y.prefixCls,L=T.closeIcon,f=T.closeIconPlacement,j=T.extra,W=x(d||(d=o()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),M,M,!(L===null||L===!1)&&x(b||(b=o()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),M));return{custom:x(c||(c=o()([`
        `,`
      `])),(!f||f==="right"||f==="auto"&&!j)&&W)}},{hashPriority:"low"}),B=n(52676),I=["className"],g=function(T){var x=T.className,M=A()(T,I),L=t(M),f=L.styles,j=L.cx;return(0,B.jsx)(S.Z,r()(r()({},M),{},{className:j(f.custom,x)}))},p=null},99512:function(Rn,w,n){n.d(w,{L:function(){return T}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(44923),F=n(5053),Z=n(75271),o=n(53649),P=n.n(o),d=n(47512),b,c,t,B,I=(0,d.kc)(function(x,M){var L=x.css,f=x.token,j=M.divider,W=M.position;return{menuWrapper:L(b||(b=P()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),f.colorBgElevated,f.borderRadiusLG,f.boxShadowSecondary),menuExtra:L(c||(c=P()([`
        padding: 10px 16px 4px;
        `,`
      `])),j&&L(W==="top"?t||(t=P()([`
              border-bottom: 1px solid `,`;
            `])):B||(B=P()([`
              border-top: 1px solid `,`;
            `])),f.colorSplit))}}),g=n(52676),p=["menuExtra","dropdownRender"],y=function(M){var L=M.menuExtra,f=M.dropdownRender,j=A()(M,p),W=L||{},C=W.position,N=C===void 0?"top":C,k=W.divider,K=k===void 0?!1:k,sn=W.content,q=I({divider:K,position:N}),nn=q.styles,H=(0,Z.useCallback)(function(u){var Q=Z.cloneElement(u,{style:{boxShadow:"none",border:"none"}});if(!sn)return f?(0,g.jsx)(S.Z,{className:nn.menuWrapper,vertical:!0,children:f(Q)}):u;var X=(0,g.jsx)(S.Z,{align:"center",className:nn.menuExtra,children:sn});return(0,g.jsxs)(S.Z,{className:nn.menuWrapper,vertical:!0,children:[N==="top"&&X,Q,N==="bottom"&&X]})},[sn,f,N,nn.menuExtra,nn.menuWrapper]);return(0,g.jsx)(F.Z,r()({dropdownRender:H},j))},T=y;T.Button=F.Z.Button},99335:function(Rn,w,n){n.d(w,{i:function(){return b}});var _=n(26068),r=n.n(_),G=n(48305),A=n.n(G),S=n(14252),F=n(85814),Z=n(54285),o=n(75271),P=n(65720),d=n(52676),b=(0,o.memo)(function(c){var t=c.value,B=c.onChange,I=c.classNames,g=I===void 0?{}:I,p=c.onEditingChange,y=c.editing,T=c.openModal,x=c.onOpenChange,M=c.placeholder,L=c.showEditWhenEmpty,f=L===void 0?!1:L,j=c.styles,W=c.height,C=c.inputType,N=c.editButtonSize,k=c.text,K=c.fullFeaturedCodeBlock,sn=c.model,q=c.fontSize,nn=c.markdownProps,H=(0,P.Z)(!1,{onChange:p,value:y}),u=A()(H,2),Q=u[0],X=u[1],an=(0,P.Z)(!1,{onChange:x,value:T}),dn=A()(an,2),bn=dn[0],V=dn[1],xn=W==="auto",tn=(0,d.jsx)(S.Z,{className:g==null?void 0:g.input,classNames:{textarea:g==null?void 0:g.textarea},defaultValue:t,editButtonSize:N,height:W,onCancel:function(){return X(!1)},onConfirm:function(Y){B==null||B(Y),X(!1)},placeholder:M,style:j==null?void 0:j.input,text:k,textareaClassname:g==null?void 0:g.input,type:C});return!t&&f?tn:(0,d.jsxs)(d.Fragment,{children:[!bn&&Q?tn:(0,d.jsx)(F.Z,r()(r()({className:g==null?void 0:g.markdown,fontSize:q,fullFeaturedCodeBlock:K,style:r()({height:xn?"unset":W},j==null?void 0:j.markdown),variant:"chat"},nn),{},{children:t||M||""})),bn&&(0,d.jsx)(Z.Z,{editing:Q,extra:sn==null?void 0:sn.extra,footer:sn==null?void 0:sn.footer,height:W,onChange:B,onEditingChange:X,onOpenChange:function(Y){V(Y),X(!1)},open:bn,placeholder:M,text:k,value:t})]})})},14866:function(Rn,w,n){n.d(w,{w:function(){return o}});var _=n(48305),r=n.n(_),G=n(75271),A=function(d){return typeof d=="string"?document.querySelector("#".concat(d)):(d==null?void 0:d.current)||d},S=":not([disabled]):not([readonly])",F=["text","password","search","tel","url","number","email",""].map(function(P){return'input[type="'.concat(P,'"]').concat(S)}).join(", ")+", input:not([type])".concat(S,", textarea").concat(S),Z=function(d){var b,c=A(d);if(c){var t=(b=c.querySelector)===null||b===void 0?void 0:b.call(c,F);if(t!=null&&t.focus)return t.focus(),!0}},o=function(d){var b=(0,G.useState)(!1),c=r()(b,2),t=c[0],B=c[1];G.useEffect(function(){if(!(t||!d)){var I=Z(d);I&&B(!0)}},[d,t,B])}},20147:function(Rn,w,n){n.d(w,{MX:function(){return Z},wK:function(){return F},wL:function(){return A.w}});var _=n(26068),r=n.n(_),G=n(75271),A=n(14866),S=n(52676),F=function(P){var d,b=P.autoFocus,c=b===void 0?!0:b,t=(0,G.useRef)(null);return(0,A.w)(c?t:void 0),(0,S.jsx)("div",{className:P.className,id:P.id,ref:t,style:(d=P.style)!==null&&d!==void 0?d:{display:P.className?void 0:"contents"},children:P.children})},Z=function(P){return function(d){var b=function(B){return(0,S.jsx)(F,r()(r()({},P||{}),{},{children:(0,S.jsx)(d,r()({},B))}))},c=d.displayName||d.name||"Component";return b.displayName="withFormHelper(".concat(c,")"),b}}},25969:function(Rn,w,n){n.d(w,{n:function(){return j}});var _=n(26068),r=n.n(_),G=n(48305),A=n.n(G),S=n(67825),F=n.n(S),Z=n(60477),o=n(50999),P=n(41117),d=n(45798),b=n(3548),c=n(5312),t=n(75271),B=n(53649),I=n.n(B),g=n(47512),p,y,T,x,M=(0,g.kc)(function(W){var C=W.css,N=W.token,k="#222222";return{root:C(p||(p=I()([`
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
      `])),k,N.borderRadiusLG,N.marginXXS,N.paddingXS,k,N.borderRadiusLG,N.borderRadiusLG,N.borderRadius,N.borderRadius,k,N.borderRadiusLG,N.fontFamilyCode),searchBarIcon:C(y||(y=I()([`
        font-size: 16px;
      `]))),loaderText:C(T||(T=I()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),N.fontFamilyCode),loaderIcon:C(x||(x=I()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),N.marginSM,N.marginSM)}},{hashPriority:"low"}),L=n(52676),f=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],j=function(C){var N=C.className,k=C.id,K=C.style,sn=C.height,q=C.onScroll,nn=C.url,H=C.websocket,u=C.refreshInterval,Q=C.onLoad,X=C.onError,an=F()(C,f),dn=M(),bn=dn.cx,V=dn.styles,xn=(0,t.useState)(0),tn=A()(xn,2),h=tn[0],Y=tn[1],E=(0,t.useState)(!1),J=A()(E,2),cn=J[0],Mn=J[1],Ln=(0,t.useState)(!1),In=A()(Ln,2),Nn=In[0],ne=In[1],jn=(0,t.useRef)(),Kn=(0,t.useRef)();(0,t.useEffect)(function(){return function(){clearTimeout(jn.current),clearTimeout(Kn.current)}},[]),(0,t.useEffect)(function(){var mn;return nn&&!H&&u&&(mn=setInterval(function(){Y(function(Dn){return Dn+1})},u)),function(){clearInterval(mn)}},[u,nn,H]);var Gn=(0,t.useMemo)(function(){return nn&&(jn.current=setTimeout(function(){Mn(!0),jn.current=void 0},50),"".concat(nn,"#").concat(h))},[nn,h]),wn=(0,t.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(jn.current),Mn(!1),ne(!0),Kn.current=setTimeout(function(){return ne(!1)},100),Q==null||Q()},[Q]),Zn=(0,t.useCallback)(function(mn){Mn(!1),clearTimeout(jn.current),X==null||X(mn)},[X]);return(0,L.jsxs)("div",{className:bn(V.root,N),id:k,style:r()({height:sn},K),children:[(0,L.jsx)(o.Uu,{render:function(Dn){var Qn=Dn.follow,de=Dn.onScroll;return(0,L.jsx)(o.A9,r()(r()({url:Gn,websocket:H},an),{},{follow:Nn||Qn,height:sn,iconFilterLines:(0,L.jsx)(Z.Z,{className:V.searchBarIcon,icon:P.Z}),iconFindNext:(0,L.jsx)(Z.Z,{className:V.searchBarIcon,icon:d.Z}),iconFindPrevious:(0,L.jsx)(Z.Z,{className:V.searchBarIcon,icon:b.Z}),onError:Zn,onLoad:wn,onScroll:function(Fn){de(Fn),q==null||q(Fn)}}))},startFollowing:!0}),cn&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:V.loaderText,children:"loading ..."}),(0,L.jsx)(Z.Z,{className:V.loaderIcon,icon:c.Z,spin:!0})]})]})}},52625:function(Rn,w,n){n.d(w,{T:function(){return T}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(47512),F=n(75271),Z=n(90142),o=n(36075),P=n.n(o),d=n(52676),b=(0,F.memo)(function(x){var M=Object.assign({},(P()(x),x));return(0,d.jsx)("svg",r()(r()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},M),{},{children:(0,d.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),c=(0,F.memo)(function(x){var M=Object.assign({},(P()(x),x));return(0,d.jsxs)("svg",r()(r()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},M),{},{children:[(0,d.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,d.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,d.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),t=(0,F.memo)(function(x){var M=Object.assign({},(P()(x),x));return(0,d.jsxs)("svg",r()(r()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},M),{},{children:[(0,d.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,d.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,d.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,d.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,d.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,d.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,d.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),B=n(53649),I=n.n(B),g,p=(0,S.kc)(function(x){var M=x.css;return{extraTitle:M(g||(g=I()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),y=["type","size","style","extra","className"],T=(0,F.memo)(function(x){var M=x.type,L=M===void 0?"img":M,f=x.size,j=f===void 0?32:f,W=x.style,C=x.extra,N=x.className,k=A()(x,y),K=(0,S.Fg)(),sn=p(),q=sn.styles,nn;switch(L){case"text":{nn=(0,d.jsx)(t,r()({className:N,height:j,style:W,width:j*2.9375},k));break}case"combine":{nn=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,r()({height:j,style:W,width:j},k)),(0,d.jsx)(t,{style:{height:j,marginLeft:Math.round(j/4),width:"auto"}})]});break}case"img":default:{nn=(0,d.jsx)(c,r()({height:j,style:W,width:j},k));break}}if(!C)return nn;var H=Math.round(j/3*1.9);return(0,d.jsxs)(Z.D,r()(r()({align:"center",className:N,horizontal:!0,style:W},k),{},{children:[nn,(0,d.jsx)(b,{style:{color:K.colorFill,height:H,width:H}}),(0,d.jsx)("div",{className:q.extraTitle,style:{fontSize:H},children:C})]}))})},79334:function(Rn,w,n){n.d(w,{o:function(){return se}});var _=n(26068),r=n.n(_),G=n(82092),A=n.n(G),S=n(14837),F=n(64419),Z=n(30924),o=n(6988),P=n(56875),d=n(44250),b=n(66108),c=n(36419),t=n(75271),B=n(28485),I=n(48305),g=n.n(I),p=n(71561),y=n(32199),T=(0,c.fA)("INSERT_MENTION_COMMAND"),x=(0,c.fA)("DELETE_MENTION_COMMAND"),M=(0,c.fA)("CLEAR_HIDE_MENU_TIMEOUT"),L=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,f=function(i){var a=i.onBlur,e=i.onFocus,l=(0,p.g)(),v=g()(l,1),O=v[0],$=(0,t.useRef)(null);return(0,t.useEffect)(function(){return(0,y.qV)(O.registerCommand(M,function(){return $.current&&(clearTimeout($.current),$.current=null),!0},c.VN),O.registerCommand(c.Gq,function(en,on){return $.current=setTimeout(function(){O.dispatchCommand(c.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),a&&a(),!0},c.VN),O.registerCommand(c.m$,function(){return e&&e(),!0},c.VN))},[O,a,e]),null},j=n(25298),W=n.n(j),C=n(17069),N=n.n(C),k=n(9504),K=n.n(k),sn=n(38836),q=n.n(sn),nn=n(21742),H=n.n(nn),u=n(83136),Q=n.n(u),X=function(s){H()(a,s);var i=Q()(a);function a(){return W()(this,a),i.apply(this,arguments)}return N()(a,[{key:"createDOM",value:function(l){var v=K()(q()(a.prototype),"createDOM",this).call(this,l);return v.classList.add("align-middle"),v}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(l){return new a(l.__text,l.__key)}},{key:"importJSON",value:function(l){var v=(0,c.MX)(l.text);return v.setFormat(l.format),v.setDetail(l.detail),v.setMode(l.mode),v.setStyle(l.style),v}}]),a}(c.R2);function an(s){return new X(s)}var dn=function(i){var a=i.editable,e=(0,p.g)(),l=g()(e,1),v=l[0];return(0,t.useEffect)(function(){v.setEditable(a)},[a,v]),null},bn=n(62657),V=n.n(bn),xn=n(60477),tn=n(44923),h=n(56995),Y=n(69024),E=n(52676),J=(0,t.createContext)(null),cn=(0,t.memo)(function(s){var i=s.children,a=s.value;return(0,E.jsx)(J.Provider,{value:a,children:i})}),Mn=function(){var i=(0,t.useContext)(J);return i==null?void 0:i.optionsMap},Ln=n(33803),In=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,Nn="\\(",ne=function(i){return"(?:"+i.join("|")+")"},jn=function(i,a){var e=i.length===0?"":"(?!"+i.join("|")+")";return e+"[^\\s"+a+"]"},Kn=function(i){return"(?:\\.[ |$]|\\s|["+i+"]|)"},Gn=75,wn=function(i,a){var e=(0,t.useRef)(null),l=(0,p.g)(),v=g()(l,1),O=v[0],$=(0,Ln.y)(i),en=g()($,3),on=en[0],ln=en[1],z=en[2],Cn=(0,t.useCallback)(function(Sn){var Wn=(0,c.dL)(),Jn=Wn==null?void 0:Wn.getNodes();if(!on&&(Jn==null?void 0:Jn.length)===1&&O.dispatchCommand(a,void 0),on&&(0,c.iO)(Wn)){Sn.preventDefault();var ue=(0,c.gI)(i);if((0,c.k$)(ue))return a&&O.dispatchCommand(a,void 0),ue.remove(),!0}return!1},[on,i,a,O]),Tn=(0,t.useCallback)(function(Sn){Sn.stopPropagation(),z(),ln(!0)},[ln,z]);return(0,t.useEffect)(function(){var Sn=e.current;return Sn&&Sn.addEventListener("click",Tn),function(){Sn&&Sn.removeEventListener("click",Tn)}},[Tn]),(0,t.useEffect)(function(){return(0,y.qV)(O.registerCommand(c.MK,Cn,c.KB),O.registerCommand(c.aR,Cn,c.KB))},[O,z,Cn]),[e,on]},Zn=function(){var i=useRef(null),a=useState(!1),e=_slicedToArray(a,2),l=e[0],v=e[1],O=useCallback(function($){$.stopPropagation(),v(function(en){return!en})},[]);return useEffect(function(){var $=i.current;return $&&$.addEventListener("click",O),function(){$&&$.removeEventListener("click",O)}},[O]),[i,l,v]};function mn(s,i,a,e){return new RegExp((i?"(^|\\s|".concat(i,")("):"(^|\\s)(")+ne(s)+"((?:"+jn(s,a)+(e?Kn(a):"")+"){0,"+Gn+"}))$")}function Dn(s,i,a,e,l){var v=mn(i,a,e,l).exec(s);if(v!==null){var O=v[1],$=v[2],en=v[3];if($.length>0)return{leadOffset:v.index+O.length,matchingString:en,replaceableString:$}}return null}var Qn=function(i,a){var e=a.punctuation,l=a.preTriggerChars,v=a.allowSpaces,O=(0,t.useState)(null),$=g()(O,2),en=$[0],on=$[1],ln=(0,t.useCallback)(function(z){var Cn=Dn(z,i,l,e,v);if(Cn){var Tn=Cn.replaceableString,Sn=Cn.matchingString,Wn=Tn.lastIndexOf(Sn),Jn=Wn===-1?Tn:Tn.slice(0,Math.max(0,Wn))+Tn.slice(Math.max(0,Wn+Sn.length));if(on(Jn||null),Cn.replaceableString)return Cn}else on(null);return null},[l,v,e,i]);return{trigger:en,checkForMentionMatch:ln}},de=n(53649),D=n.n(de),Fn=n(47512),pe,Me,Oe,Pe=(0,Fn.kc)(function(s,i){var a=s.css,e=s.token,l=s.prefixCls,v=i.isSelected,O=i.isError,$=function(){return O?v?{background:e.colorErrorBgActive,border:e.colorErrorBorderHover,color:e.colorErrorTextActive}:{background:e.colorErrorBg,border:e.colorErrorBorder,color:e.colorErrorText}:v?{background:e.colorInfoBgHover,border:e.colorInfoBorder,color:e.colorInfoText}:{background:e.colorFillTertiary,border:"transparent",color:e.colorInfoText}},en=$(),on=en.background,ln=en.border,z=en.color;return{root:a(pe||(pe=D()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),e.fontFamilyCode,z,on,ln,e.borderRadius),text:a(Me||(Me=D()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),e.colorTextSecondary),error:a(Oe||(Oe=D()([`
        color: `,`;
      `])),e.colorErrorText)}}),Be=(0,t.memo)(function(s){var i=s.nodeKey,a=s.variable,e=Mn(),l=(0,p.g)(),v=g()(l,1),O=v[0],$=wn(i,x),en=g()($,2),on=en[0],ln=en[1],z=e==null?void 0:e[a],Cn=Pe({isSelected:ln,isError:!z||!!z.error}),Tn=Cn.styles;(0,t.useEffect)(function(){if(!O.hasNodes([Ee]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[O]);var Sn=(0,E.jsx)(tn.Z,{className:Tn.root,ref:on,children:(0,E.jsxs)(tn.Z,{align:"center",gap:2,children:[(!z||z.error)&&(0,E.jsx)(xn.Z,{className:Tn.error,icon:Y.Z}),(z==null?void 0:z.icon)&&(0,E.jsx)(tn.Z,{children:z.icon}),(0,E.jsx)(tn.Z,{className:Tn.text,gap:2,title:(z==null?void 0:z.label)||a,children:(0,E.jsx)("span",{children:(z==null?void 0:z.selectedLabel)||(z==null?void 0:z.label)||a})})]})});return z!=null&&z.error?(0,E.jsx)(h.Z,{title:z==null?void 0:z.error,children:Sn}):Sn}),Ee=function(s){H()(a,s);var i=Q()(a);function a(e,l){var v;return W()(this,a),v=i.call(this,l),A()(V()(v),"__variable",void 0),v.__variable=e,v}return N()(a,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var l=document.createElement("div");return l.style.display="inline-flex",l.style.alignItems="center",l.style.verticalAlign="middle",l}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,E.jsx)(Be,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var l=this.getLatest();return l.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(l){return new a(l.__variable,l.__key)}},{key:"importJSON",value:function(l){var v=un(l.variable);return v}}]),a}(c.Ij);function un(s){return new Ee(s)}function m(s){return s instanceof Ee}var U=(0,t.memo)(function(s){var i=s.onInsert,a=s.onDelete,e=(0,p.g)(),l=g()(e,1),v=l[0];return(0,t.useEffect)(function(){if(!v.hasNodes([Ee]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,y.qV)(v.registerCommand(T,function(O){v.dispatchCommand(M,null);var $=un(O);return(0,c.od)([$]),i&&i(),!0},c.VN),v.registerCommand(x,function(){return a&&a(),!0},c.VN))},[v,i,a]),null});U.displayName="MentionNodePlugin";var R=(0,c.fA)("INSERT_MENTION_COMMAND"),fn=(0,c.fA)("DELETE_MENTION_COMMAND"),yn=(0,c.fA)("CLEAR_HIDE_MENU_TIMEOUT"),En=(0,c.fA)("UPDATE_MENTIONS_OPTIONS"),rn=function(i,a,e){if(i.isSimpleText())for(var l=i.getPreviousSibling(),v=i.getTextContent(),O=i,$;;){$=a(v);var en=$===null?"":v.slice($.end);if(v=en,en===""){var on=O.getNextSibling();if((0,c.Gg)(on)){en=O.getTextContent()+on.getTextContent();var ln=a(en);if(ln===null){on.markDirty();return}else if(ln.start!==0)return}}else{var z=a(en);if(z!==null&&z.start===0)return}if($===null)return;if(!($.start===0&&(0,c.Gg)(l)&&l.isTextEntity())){var Cn=void 0;if($.start===0){var Tn=O.splitText($.end),Sn=g()(Tn,2);Cn=Sn[0],O=Sn[1]}else{var Wn=O.splitText($.start,$.end),Jn=g()(Wn,3);Cn=Jn[1],O=Jn[2]}var ue=e(Cn);if(Cn.replace(ue),O==null)return}}};function ee(s){var i=s.split(`
`);return JSON.stringify({root:{children:i.map(function(a){return{children:[{detail:0,format:0,mode:"normal",style:"",text:a,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var $n=(0,t.memo)(function(s){var i=s.onInsert,a=(0,p.g)(),e=g()(a,1),l=e[0];(0,t.useEffect)(function(){if(!l.hasNodes([Ee]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[l]);var v=(0,t.useCallback)(function(en){i&&i();var on=en.getTextContent().slice(2,-2);return(0,c.U2)(un(on))},[i]),O=(0,t.useCallback)(function(en){var on=L.exec(en);if(on===null)return null;var ln=on.index,z=ln+on[0].length;return{end:z,start:ln}},[]),$=(0,t.useCallback)(function(en){return L.lastIndex=0,rn(en,O,v)},[v,O]);return(0,t.useEffect)(function(){return L.lastIndex=0,(0,y.qV)(l.registerNodeTransform(X,$))},[]),null}),An=n(99934),Un=n(64287),kn=n(30967),te=n(83606),zn=function(s){H()(a,s);var i=Q()(a);function a(e){var l,v=e.label,O=e.value,$=e.data,en=e.icon,on=e.extraElement,ln=e.keywords,z=e.keyboardShortcut,Cn=e.disabled,Tn=e.onSelect,Sn=e.children,Wn=e.isChild;return W()(this,a),l=i.call(this,O),A()(V()(l),"label",void 0),A()(V()(l),"value",void 0),A()(V()(l),"title",void 0),A()(V()(l),"key",void 0),A()(V()(l),"icon",void 0),A()(V()(l),"extraElement",void 0),A()(V()(l),"keywords",void 0),A()(V()(l),"keyboardShortcut",void 0),A()(V()(l),"onSelect",void 0),A()(V()(l),"disabled",void 0),A()(V()(l),"data",void 0),A()(V()(l),"children",void 0),A()(V()(l),"isChild",void 0),l.value=O,l.label=v,l.title=v,l.key=O,l.keywords=ln||[],l.icon=en,l.extraElement=on,l.keyboardShortcut=z,l.onSelect=Tn.bind(V()(l)),l.disabled=Cn,l.data=$,l.isChild=Wn!=null?Wn:!1,l.children=Sn==null?void 0:Sn.map(function(Jn){return new a(r()(r()({},Jn),{},{isChild:!0}))}),l}return N()(a)}(An.n),re=function s(i,a){var e;return i.children=(e=i.children)===null||e===void 0?void 0:e.filter(function(l){if(!l.children)return a(l);var v=s(l,a);return a(l)||(v.children||[]).length>0}),i},On=function(i,a){var e=(0,p.g)(),l=g()(e,1),v=l[0],O=(0,t.useCallback)(function(en){var on,ln=new RegExp((0,te.Z)(a),"i");return ln.test(en.label)||((on=en.keywords)===null||on===void 0?void 0:on.some(function(z){return ln.test(z)}))||!1},[a]),$=(0,t.useMemo)(function(){var en=function ln(z){var Cn=r()(r()({},z),{},{children:void 0,onSelect:function(){v.dispatchCommand(T,z.value)}});return z.children&&(Cn.children=z.children.map(function(Tn){return ln(Tn)})),Cn},on=i.map(function(ln){return new zn(en(ln))});return a?on.map(function(ln){return ln.children?re(ln,O):ln}).filter(function(ln){return O(ln)||(ln.children||[]).length>0}):on},[i,a,v,O]);return{options:$}},ie=n(78962),le=n(94729),oe,Xn,ce,ve,ae,_n,Hn,hn=(0,Fn.kc)(function(s,i){var a=s.css,e=s.token,l=s.prefixCls,v=i.isSelected,O=i.disabled,$=a(oe||(oe=D()([`
      background-color: `,`;
    `])),e.colorFillSecondary);return{anchor:a(Xn||(Xn=D()([`
        z-index: 9999;
      `]))),menuEmpty:a(ce||(ce=D()([`
        padding: `,`px;
      `])),e.padding),menuOverlay:a(ve||(ve=D()([`
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
      `])),e.marginXXS,e.paddingXXS,e.colorBgElevated,e.borderRadius,e.boxShadow,l),menuItem:a(ae||(ae=D()([`
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
      `])),O?"not-allowed":"pointer",O?"none":"all",e.paddingXS,e.borderRadius,O?e.colorTextDisabled:e.colorText,e.fontSize,v&&$,$),menuItemIcon:a(_n||(_n=D()([`
        color: `,`;
      `])),e.colorInfoText),menuItemLabel:a(Hn||(Hn=D()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),gn=le.C.Text,vn=(0,t.memo)(function(s){var i=s.index,a=s.isSelected,e=s.onClick,l=s.onMouseEnter,v=s.option,O=s.queryString,$=s.showIcon,en=$===void 0?!0:$,on=hn({isSelected:a,disabled:v.disabled}),ln=on.styles,z=v.label,Cn=(0,t.useMemo)(function(){var Jn=z,ue="",We="";if(O){var Fe=new RegExp((0,te.Z)(O),"i"),Le=Fe.exec(v.label);Le&&(Jn=z.slice(0,Math.max(0,Le.index)),ue=Le[0],We=z.slice(Math.max(0,Le.index+Le[0].length)))}return{before:Jn,middle:ue,after:We}},[v.label,O,z]),Tn=Cn.before,Sn=Cn.middle,Wn=Cn.after;return(0,E.jsxs)(tn.Z,{align:"center",className:ln.menuItem,gap:4,onClick:function(){return e==null?void 0:e(i,v)},onMouseEnter:function(){return l==null?void 0:l(i,v)},ref:v.setRefElement,tabIndex:-1,children:[en&&(0,E.jsx)(tn.Z,{className:ln.menuItemIcon,children:v.icon}),(0,E.jsxs)("div",{className:ln.menuItemLabel,title:v.label,children:[Tn,(0,E.jsx)(gn,{mark:!0,children:Sn}),Wn]}),(0,E.jsx)(tn.Z,{children:v.extraElement})]},v.key)});vn.displayName="MentionMenuItem";var Bn=(0,t.memo)(function(s){var i=s.selectedIndex,a=s.options,e=s.onClick,l=s.onMouseEnter,v=s.queryString,O=hn({}),$=O.styles;return(0,E.jsxs)(E.Fragment,{children:[a.length===0&&(0,E.jsx)(ie.Z,{className:$.menuEmpty,image:ie.Z.PRESENTED_IMAGE_SIMPLE}),a.map(function(en,on){return(0,E.jsx)(vn,{index:on,isSelected:i===on,onClick:e,onMouseEnter:l,option:en,queryString:v},en.key)})]})}),Pn=(0,t.memo)(function(s){var i=s.overlayClassName,a=s.triggers,e=s.options,l=e===void 0?[]:e,v=s.allowSpaces,O=v===void 0?!0:v,$=s.punctuation,en=$===void 0?In:$,on=s.preTriggerChars,ln=on===void 0?Nn:on,z=s.onSelect,Cn=hn({}),Tn=Cn.cx,Sn=Cn.styles,Wn=(0,p.g)(),Jn=g()(Wn,1),ue=Jn[0],We=Qn(a,{punctuation:en,preTriggerChars:ln,allowSpaces:O}),Fe=We.trigger,Le=We.checkForMentionMatch,Xe=(0,t.useState)(null),Ve=g()(Xe,2),Ne=Ve[0],Ye=Ve[1],Je=On(l,Ne),je=Je.options,Ge=(0,t.useCallback)(function(qn,ye,Qe,Ie){z==null||z(qn,Fe,Ne),ue.update(function(){ye&&qn!==null&&qn!==void 0&&qn.key&&ye.remove(),qn!=null&&qn.onSelect&&qn.onSelect(Ie),Qe()})},[ue,z,Ne,Fe]),fe=(0,t.useCallback)(function(qn){var ye=qn.selectedIndex,Qe=qn.selectOptionAndCleanUp;return(0,E.jsx)(b.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,E.jsx)(Un.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(De,ge){var be=ge.nativeEvent;be.stopPropagation(),ue.dispatchCommand(M,{})},onSelect:function(De,ge){Qe(ge.node)},titleRender:function(De){var ge;return(0,E.jsx)(vn,{isSelected:((ge=je[ye])===null||ge===void 0?void 0:ge.value)===De.value,option:De,queryString:Ne,showIcon:!De.isChild})},treeData:je})})},[je,ue,Ne]),Ke=(0,t.useCallback)(function(qn,ye,Qe){var Ie=ye.selectedIndex,De=ye.selectOptionAndCleanUp,ge=ye.setHighlightedIndex;return qn.current?kn.createPortal((0,E.jsx)("div",{className:Tn(Sn.menuOverlay,i),role:"menu",children:je.some(function(be){return(be.children||[]).length>0})?fe(ye):(0,E.jsx)(Bn,{onClick:function(Ue,$e){$e.disabled||(ge(Ue),De($e))},onMouseEnter:function(Ue,$e){$e.disabled||ge(Ue)},options:je,queryString:Ne,selectedIndex:Ie})}),qn.current):null},[Tn,je,i,Ne,fe,Sn.menuOverlay]);return(0,E.jsx)(An.HQ,{anchorClassName:Sn.anchor,menuRenderFn:Ke,onQueryChange:Ye,onSelectOption:Ge,options:je,triggerFn:Le})}),Vn,Yn,Ce,Te,Ae,he,xe,Se,Re=32,ze=22,pn=function(i){return Re+Math.max(i-1,0)*ze},me=(0,Fn.kc)(function(s,i){var a=s.css,e=s.token,l=s.prefixCls,v=i.autoSize;return{wrapper:a(Vn||(Vn=D()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:a(Yn||(Yn=D()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Re,e.fontSize,Re,e.colorTextPlaceholder),root:a(Ce||(Ce=D()([`
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
      `])),e.colorBorder,e.borderRadius,e.colorText,e.fontSize,e.fontFamily,(v==null?void 0:v.minRows)&&a(Te||(Te=D()([`
          min-height: `,`px;
        `])),pn(v.minRows)),(v==null?void 0:v.maxRows)&&a(Ae||(Ae=D()([`
          max-height: `,`px;
        `])),pn(v.maxRows)),e.motionDurationMid,e.colorPrimaryBorder,ze),filled:a(he||(he=D()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),e.colorFillTertiary,e.colorFillSecondary,e.colorBgBase),borderless:a(xe||(xe=D()([`
        background: transparent;
        border: none;
      `]))),disabled:a(Se||(Se=D()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),e.colorTextDisabled,e.colorBgContainerDisabled)}}),se=function(i){var a=i.className,e=i.classNames,l=i.placeholder,v=i.style,O=i.value,$=i.defaultValue,en=i.readOnly,on=en===void 0?!1:en,ln=i.disabled,z=i.onChange,Cn=i.onBlur,Tn=i.onFocus,Sn=i.variant,Wn=Sn===void 0?"outlined":Sn,Jn=i.options,ue=Jn===void 0?[]:Jn,We=i.autoSize,Fe=i.triggers,Le=Fe===void 0?["@"]:Fe,Xe=i.allowSpaces,Ve=i.punctuation,Ne=i.preTriggerChars,Ye=i.onSelect,Je=b.ZP.useConfig(),je=Je.componentDisabled,Ge=me({autoSize:We}),fe=Ge.styles,Ke=Ge.cx,qn=(0,t.useMemo)(function(){return ln!=null?ln:je},[je,ln]),ye=(0,t.useMemo)(function(){return!on&&!qn},[qn,on]),Qe=(0,t.useMemo)(function(){return{namespace:"mentions",nodes:[X,{replace:c.R2,with:function(be){return new X(be.__text)}},Ee],editorState:ee(O||$||""),onError:function(be){throw be}}},[]),Ie=function(be){var Ue=be.read(function(){return(0,c.Gv)().getTextContent()});z==null||z(Ue.replaceAll(`

`,`
`))},De=(0,t.useMemo)(function(){var ge=function be(Ue,$e){return Ue.reduce(function(He,Ze){if(He[Ze.value]=Ze,He[Ze.value].icon||(He[Ze.value].icon=$e),Ze.children&&Ze.children.length>0){var we=be(Ze.children,Ze.icon);Object.assign(He,we)}return He},{})};return ge(ue)},[ue]);return B.j?(0,E.jsx)(S.R,{initialConfig:r()(r()({},Qe),{},{editable:ye}),children:(0,E.jsx)(cn,{value:{optionsMap:De},children:(0,E.jsxs)("div",{className:Ke(fe.wrapper,e==null?void 0:e.wrapper),children:[(0,E.jsx)(d.B,{ErrorBoundary:Z.g,contentEditable:(0,E.jsx)(F.f,{className:Ke(A()(A()(A()(A()({},fe.root,!0),fe.filled,Wn==="filled"),fe.borderless,Wn==="borderless"),fe.disabled,qn),a),style:v||{}}),placeholder:(0,E.jsx)("div",{className:fe.placeholder,children:l||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),ye&&(0,E.jsx)(Pn,{allowSpaces:Xe,onSelect:Ye,options:ue,overlayClassName:e==null?void 0:e.menuOverlay,preTriggerChars:Ne,punctuation:Ve,triggers:Le}),(0,E.jsx)(U,{}),(0,E.jsx)($n,{}),(0,E.jsx)(o.e,{}),(0,E.jsx)(P.$,{onChange:Ie}),(0,E.jsx)(f,{onBlur:Cn,onFocus:Tn}),(0,E.jsx)(dn,{editable:ye})]})})}):(0,E.jsxs)("div",{className:Ke(fe.wrapper,e==null?void 0:e.wrapper),children:[(0,E.jsx)("div",{className:Ke(A()(A()(A()(A()({},fe.root,!0),fe.filled,Wn==="filled"),fe.borderless,Wn==="borderless"),fe.disabled,qn),a),style:v||{}}),(0,E.jsx)("div",{className:fe.placeholder,children:l||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(Rn,w,n){n.d(w,{u:function(){return p}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(51697),F=n(75271),Z="yunti-ui",o=n(53649),P=n.n(o),d=n(47512),b,c,t=(0,d.kc)(function(T,x){var M=T.css,L=T.prefixCls,f=x.borderd,j=f===void 0?!0:f,W=x.footer,C=W===null||Array.isArray(W)&&W.length===0,N=M(b||(b=P()([`
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
    `])),L,L,C?0:"40px",L,C?0:"1px");return{custom:M(c||(c=P()([`
        `,`
      `])),j&&N)}},{hashPriority:"low"}),B=n(52676),I=["className","borderd"],g=function(x){var M=x.className,L=x.borderd,f=L===void 0?!0:L,j=A()(x,I),W=t(r()({borderd:f},j)),C=W.styles,N=W.cx;return(0,B.jsx)(S.Z,r()(r()({},j),{},{className:N(C.custom,"".concat(Z,"-modal"),M)}))},p=g;p.useModal=S.Z.useModal,p.destroyAll=S.Z.destroyAll,p.config=S.Z.config,p._InternalPanelDoNotUseOrYouWillBeFired=S.Z._InternalPanelDoNotUseOrYouWillBeFired,p.info=S.Z.info,p.success=S.Z.success,p.error=S.Z.error,p.warning=S.Z.warning,p.warn=S.Z.warn,p.confirm=S.Z.confirm;var y=null},81321:function(Rn,w,n){n.d(w,{ZM:function(){return Pe},Hu:function(){return N},Xq:function(){return Ee},rE:function(){return Be}});var _=n(26068),r=n.n(_),G=n(48305),A=n.n(G),S=n(67825),F=n.n(S),Z=n(33592),o=n(75271),P=n(94456),d=n(60477),b=n(71170),c=n(32328),t=n(87449),B=n(28485),I=n(90228),g=n.n(I),p=n(87999),y=n.n(p),T=n(97524),x=n(50279),M=n(25298),L=n.n(M),f=n(17069),j=n.n(f),W=n(82092),C=n.n(W),N=function(){function un(){L()(this,un),C()(this,"methodMap",void 0),C()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return j()(un,[{key:"registerMethod",value:function(U,R){this.methodMap[U]=R}},{key:"call",value:function(U){for(var R,fn,yn=arguments.length,En=new Array(yn>1?yn-1:0),rn=1;rn<yn;rn++)En[rn-1]=arguments[rn];return(R=(fn=this.methodMap)[U])===null||R===void 0?void 0:R.call.apply(R,[fn].concat(En))}},{key:"updateMeta",value:function(U){Object.assign(this.meta,U)}},{key:"getMeta",value:function(){return Object.freeze(r()({},this.meta))}}]),un}(),k="__base_monaco_editor_controller__",K=B.j&&window;K&&!K[k]&&(K[k]=new N);var sn=K[k],q=function(){var un,m;return function(){var U=y()(g()().mark(function R(fn){var yn;return g()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!un||!(0,x.Z)(m,fn))){rn.next=7;break}return yn=Object.keys(fn||{}).length>0,T.Z.config(yn?fn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),rn.next=5,T.Z.init();case 5:un=rn.sent,m=fn;case 7:return rn.abrupt("return",un);case 8:case"end":return rn.stop()}},R)}));return function(R){return U.apply(this,arguments)}}()}(),nn=function(m){return m?T.Z.config(m):T.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),T.Z.init()};function H(un){var m=Object.keys(un||{}).length>0,U=m?un:void 0;return sn.getMeta().singleton?q(U):nn(U)}function u(un){controller.updateMeta(un)}var Q=B.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",X=Q==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",an={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},dn={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function bn(un){var m=(0,o.useRef)();return(0,o.useEffect)(function(){m.current=un},[un]),m.current}function V(un,m,U,R){if(R){var fn=un.editor.getModel(un.Uri.parse(R));if(fn)return fn}return un.editor.createModel(m,U,R?un.Uri.parse(R):void 0)}var xn=function(m,U){var R=U.editorDidMount,fn=U.editorWillMount,yn=U.theme,En=U.value,rn=U.path,ee=U.language,$n=U.saveViewState,An=U.defaultValue,Un=U.enhancers,kn=(0,o.useState)(!1),te=A()(kn,2),zn=te[0],re=te[1],On=(0,o.useState)(!1),ie=A()(On,2),le=ie[0],oe=ie[1],Xn=(0,o.useState)(!1),ce=A()(Xn,2),ve=ce[0],ae=ce[1],_n=(0,o.useRef)(An),Hn=(0,o.useRef)(En),hn=(0,o.useRef)(ee||"text"),gn=(0,o.useRef)(rn),vn=bn(rn),Bn=(0,o.useRef)(U.requireConfig),Pn=(0,o.useRef)(U.options),Vn=(0,o.useRef)(),Yn=(0,o.useRef)(),Ce=(0,o.useRef)(),Te=(0,o.useRef)(m),Ae=(0,o.useRef)(),he=(0,o.useRef)(),xe=(0,o.useRef)(!1),Se=(0,o.useRef)(new Map),Re=(0,o.useRef)({});(0,o.useEffect)(function(){Re.current.enhancers=Un},[Un]),(0,o.useEffect)(function(){Ae.current=R},[R]),(0,o.useEffect)(function(){he.current=fn},[fn]),(0,o.useEffect)(function(){Hn.current=En},[En]),(0,o.useEffect)(function(){hn.current=ee},[ee]),(0,o.useEffect)(function(){_n.current=An},[An]),(0,o.useEffect)(function(){ae(!0),H(Bn.current).then(function(pn){var me;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Vn.current=pn;try{var se;(se=he.current)===null||se===void 0||se.call(he,pn)}catch($){}if(Ce.current){var s;if(Te.current==="single"){var i,a,e=V(pn,(i=(a=Hn.current)!==null&&a!==void 0?a:_n.current)!==null&&i!==void 0?i:"",hn.current,gn.current);s=pn.editor.create(Ce.current,r()(r()({automaticLayout:!0},an),Pn.current)),s.setModel(e)}else{var l=pn.editor.createModel(Hn.current,hn.current),v=pn.editor.createModel(Hn.current,hn.current);s=pn.editor.createDiffEditor(Ce.current,r()(r()({automaticLayout:!0},dn),Pn.current)),s.setModel({original:l,modified:v})}Yn.current=s,(me=Re.current.enhancers)===null||me===void 0||me.forEach(function($){return $(pn,s)});try{var O;(O=Ae.current)===null||O===void 0||O.call(Ae,pn,s)}catch($){}xe.current||re(!0)}}).catch(function(pn){console.error("Monaco Editor Load Error!",pn)}).then(function(){xe.current||ae(!1)})},[]),(0,o.useEffect)(function(){var pn;zn&&((pn=Vn.current)===null||pn===void 0||pn.editor.setTheme(yn))},[zn,yn]),(0,o.useEffect)(function(){if(zn){var pn=m==="diff"?Yn.current.getModifiedEditor():Yn.current;pn==null||pn.onDidFocusEditorText(function(){xe.current||oe(!0)}),pn==null||pn.onDidBlurEditorText(function(){xe.current||oe(!1)})}},[zn,m]),(0,o.useEffect)(function(){return function(){xe.current=!0}},[]),(0,o.useEffect)(function(){var pn,me,se;if(zn&&!(m!=="diff"&&rn)){var s=m==="diff"?Yn.current.getModifiedEditor():Yn.current,i=(pn=En!=null?En:_n.current)!==null&&pn!==void 0?pn:"",a=(me=Vn.current)===null||me===void 0?void 0:me.editor.EditorOption.readOnly;a&&s!==null&&s!==void 0&&(se=s.getOption)!==null&&se!==void 0&&se.call(s,a)?s==null||s.setValue(i):En!==(s==null?void 0:s.getValue())&&(s==null||s.executeEdits("",[{range:s==null?void 0:s.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),s==null||s.pushUndoStop())}},[zn,rn,m,En]),(0,o.useEffect)(function(){var pn,me;if(zn&&m!=="diff"&&rn!==vn){var se=V(Vn.current,(pn=Hn.current)!==null&&pn!==void 0?pn:_n.current,hn.current,rn),s=Yn.current;Hn.current!==null&&Hn.current!==void 0&&se.getValue()!==Hn.current&&se.setValue(Hn.current),se!==((me=Yn.current)===null||me===void 0?void 0:me.getModel())&&($n&&Se.current.set(vn,s.saveViewState()),s.setModel(se),$n&&s.restoreViewState(Se.current.get(rn)))}},[zn,En,rn,vn,m,$n]);var ze=Yn;return{isEditorReady:zn,focused:le,loading:ve,containerRef:Ce,monacoRef:Vn,editorRef:ze,valueRef:Hn}},tn=function(m){var U=(0,o.useState)(!1),R=A()(U,2),fn=R[0],yn=R[1],En=function(){if(fn){yn(!1),m==null||m.updateOptions(r()(r()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!1}})),m==null||m.layout();return}yn(!0),m==null||m.updateOptions(r()(r()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!0}})),m==null||m.layout()};return{isFullScreen:fn,fullScreen:En}},h=n(53649),Y=n.n(h),E=n(47512),J,cn,Mn,Ln,In,Nn,ne,jn,Kn,Gn,wn,Zn=(0,E.kc)(function(un,m){var U=un.css,R=un.token,fn=un.prefixCls,yn=m.minimapEnabled,En=yn===void 0?!1:yn,rn=m.isFullScreen,ee=rn===void 0?!1:rn,$n=m.diff,An=$n===void 0?!1:$n,Un=m.variant,kn=Un===void 0?"outlined":Un,te=(0,E.F4)(J||(J=Y()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),zn=function(){switch(kn){case"outlined":return R.colorBgBase;case"filled":return R.colorFillTertiary;default:return"transparent"}};return{base:U(cn||(cn=Y()([`
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
      `])),zn(),kn==="outlined"?R.colorBorder:"transparent",R.borderRadius,kn==="outlined"?R.colorPrimaryHover:"transparent",kn==="filled"&&U(Mn||(Mn=Y()([`
            background-color: `,`;
          `])),R.colorFillSecondary),kn==="filled"&&U(Ln||(Ln=Y()([`
            background-color: `,`;
          `])),R.colorBgBase),kn!=="borderless"&&U(In||(In=Y()([`
            border-color: `,`;
          `])),R.colorPrimaryActive),ee&&U(Nn||(Nn=Y()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!ee&&U(ne||(ne=Y()([`
              background-color: transparent;
            `]))),R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius-1,R.borderRadius-1,R.colorErrorText,R.colorErrorBg),fullScreenBtn:U(jn||(jn=Y()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),fn,R.colorTextSecondary,ee?U(Kn||(Kn=Y()([`
                z-index: 9999;
                right: `,`px;
              `])),An?64:138):U(Gn||(Gn=Y()([`
                right: `,`px;
              `])),En||An?64:20)),loading:U(wn||(wn=Y()([`
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
      `])),R.fontSizeSM,R.colorTextTertiary,te)}},{hashPriority:"low"}),mn=n(52676);function Dn(){}var Qn=function(m){var U,R=m.onChange,fn=m.enableOutline,yn=m.width,En=m.height,rn=m.language,ee=m.supportFullScreen,$n=(0,o.useRef)(R),An=xn("single",m),Un=An.isEditorReady,kn=An.focused,te=An.loading,zn=An.containerRef,re=An.monacoRef,On=An.editorRef,ie=An.valueRef,le=(0,o.useRef)(),oe=tn(On==null?void 0:On.current),Xn=oe.isFullScreen,ce=oe.fullScreen,ve=Zn({isFullScreen:Xn,minimapEnabled:(U=m.options)===null||U===void 0||(U=U.minimap)===null||U===void 0?void 0:U.enabled,variant:m.variant}),ae=ve.cx,_n=ve.styles,Hn=ae(_n.base,m.className,{"ve-focused":kn,"ve-outline":fn}),hn=(0,o.useMemo)(function(){return{width:yn,height:En}},[yn,En]);return(0,o.useEffect)(function(){$n.current=R},[R]),(0,o.useEffect)(function(){if(Un){var gn,vn=On.current;(gn=le.current)===null||gn===void 0||gn.dispose(),le.current=vn==null?void 0:vn.onDidChangeModelContent(function(Bn){var Pn,Vn=vn==null||(Pn=vn.getModel())===null||Pn===void 0?void 0:Pn.getValue();if(ie.current!==Vn){var Yn;(Yn=$n.current)===null||Yn===void 0||Yn.call($n,Vn,Bn)}})}},[On,Un,le,ie]),(0,o.useEffect)(function(){return function(){var gn,vn,Bn,Pn=On.current;(gn=le.current)===null||gn===void 0||gn.dispose(),Pn==null||(vn=Pn.getModel())===null||vn===void 0||vn.dispose(),(Bn=On.current)===null||Bn===void 0||Bn.dispose()}},[On]),(0,o.useEffect)(function(){var gn;if(Un){var vn=(gn=On.current)===null||gn===void 0?void 0:gn.getModel();if(vn){var Bn;(Bn=re.current)===null||Bn===void 0||Bn.editor.setModelLanguage(vn,rn)}}},[On,Un,rn,re]),(0,mn.jsxs)("div",{className:Hn,style:m.style,children:[te&&(0,mn.jsx)("span",{className:ae(_n.loading,"loading"),children:X}),(0,mn.jsx)("div",{className:"react-monaco-editor-container",ref:zn,style:hn,children:ee&&(0,mn.jsx)(b.ZP,{className:_n.fullScreenBtn,icon:(0,mn.jsx)(d.Z,{icon:Xn?c.Z:t.Z}),onClick:ce,size:"small",type:"text"})})]})},de=function(m){var U=m.enableOutline,R=m.width,fn=m.height,yn=m.language,En=m.onChange,rn=m.original,ee=m.supportFullScreen,$n=(0,o.useRef)(En),An=xn("diff",m),Un=An.isEditorReady,kn=An.focused,te=An.loading,zn=An.containerRef,re=An.monacoRef,On=An.editorRef,ie=An.valueRef,le=tn(),oe=le.isFullScreen,Xn=le.fullScreen,ce=Zn({isFullScreen:oe,diff:!0,variant:m.variant}),ve=ce.cx,ae=ce.styles,_n=ve(ae.base,m.className,{"ve-focused":kn,"ve-outline":U}),Hn=(0,o.useMemo)(function(){return{width:R,height:fn}},[R,fn]);return(0,o.useEffect)(function(){$n.current=En},[En]),(0,o.useEffect)(function(){var hn;if(Un){(hn=On.current.getModel())===null||hn===void 0||hn.original.setValue(rn!=null?rn:"");var gn=On.current.getModel()||{},vn=gn.modified;vn==null||vn.onDidChangeContent(function(Bn){var Pn=vn.getValue();if(ie.current!==Pn){var Vn;(Vn=$n.current)===null||Vn===void 0||Vn.call($n,Pn,Bn)}})}},[On,Un,rn,ie]),(0,o.useEffect)(function(){return function(){var hn,gn,vn;(hn=On.current)===null||hn===void 0||(hn=hn.getModel())===null||hn===void 0||(hn=hn.original)===null||hn===void 0||hn.dispose(),(gn=On.current)===null||gn===void 0||(gn=gn.getModel())===null||gn===void 0||(gn=gn.modified)===null||gn===void 0||gn.dispose(),(vn=On.current)===null||vn===void 0||vn.dispose()}},[On]),(0,o.useEffect)(function(){var hn,gn,vn;if(Un){var Bn=((hn=On.current)===null||hn===void 0?void 0:hn.getModel())||{},Pn=Bn.original,Vn=Bn.modified;(gn=re.current)===null||gn===void 0||gn.editor.setModelLanguage(Pn,yn),(vn=re.current)===null||vn===void 0||vn.editor.setModelLanguage(Vn,yn)}},[On,Un,yn,re]),(0,mn.jsxs)("div",{className:_n,style:m.style,children:[te&&(0,mn.jsx)("span",{className:ve(ae.loading,"loading"),children:X}),(0,mn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:zn,style:Hn,children:ee&&(0,mn.jsx)(b.ZP,{className:ae.fullScreenBtn,icon:(0,mn.jsx)(d.Z,{icon:oe?c.Z:t.Z}),onClick:Xn,size:"small",type:"text"})})]})},D=Object.assign(de,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:an,editorDidMount:Dn,editorWillMount:Dn,onChange:Dn,requireConfig:{}}}),Fn=Object.assign(Qn,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:an,editorDidMount:Dn,editorWillMount:Dn,onChange:Dn,requireConfig:{}},MonacoDiffEditor:D}),pe=null,Me=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Oe=["inlineView","options"],Pe=function(m){var U=m.type,R=U===void 0?"single":U,fn=m.editorDidMount,yn=m.readOnly,En=yn===void 0?!1:yn,rn=m.lineNumbers,ee=rn===void 0?"on":rn,$n=m.wordWrap,An=$n===void 0?"off":$n,Un=m.contextmenu,kn=Un===void 0?!0:Un,te=m.theme,zn=m.minimapEnabled,re=zn===void 0?!1:zn,On=m.version,ie=On===void 0?"0.45.0":On,le=m.requireConfig,oe=le===void 0?{}:le,Xn=m.options,ce=m.className,ve=m.supportFullScreen,ae=F()(m,Me),_n=(0,o.useRef)(fn);(0,o.useEffect)(function(){_n.current=fn},[fn]);var Hn=(0,Z.r)(),hn=Hn.isDarkMode,gn=(0,o.useMemo)(function(){return te||(hn?"vs-dark":"vs")},[hn,te]),vn=(0,o.useState)(),Bn=A()(vn,2),Pn=Bn[0],Vn=Bn[1],Yn=(0,o.useCallback)(function(he,xe){var Se;Vn(xe),(Se=_n.current)===null||Se===void 0||Se.call(_n,he,xe)},[]),Ce=(0,o.useMemo)(function(){var he=Object.assign({},Xn,{readOnly:En,lineNumbers:ee,wordWrap:An,contextmenu:kn,minimap:re===void 0?Xn==null?void 0:Xn.minimap:Object.assign({},Xn==null?void 0:Xn.minimap,{enabled:re})});return Pn==null||Pn.updateOptions(he),he},[Xn,En,ee,An,kn,re,Pn]),Te=(0,P.nc)(),Ae=(0,o.useMemo)(function(){return Object.assign({},oe,{paths:r()({vs:Te({path:"min/vs",pkg:"monaco-editor",version:ie})},oe.paths)})},[Te,oe,ie]);return R!=="diff"?(0,mn.jsx)(Fn,r()({className:ce,editorDidMount:Yn,options:Ce,requireConfig:Ae,supportFullScreen:Pn&&ve,theme:gn},ae)):(0,mn.jsx)(Fn.MonacoDiffEditor,r()({className:ce,editorDidMount:Yn,options:Ce,requireConfig:Ae,supportFullScreen:Pn&&ve,theme:gn},ae))},Be=function(m){return(0,mn.jsx)(Pe,r()(r()({},m),{},{type:"single"}))},Ee=function(m){var U=m.inlineView,R=U===void 0?"off":U,fn=m.options,yn=F()(m,Oe);return(0,mn.jsx)(Pe,r()(r()({options:Object.assign({useInlineViewWhenSpaceIsLimited:R==="on"||R==="auto",renderSideBySide:R==="off"||R==="auto"},fn)},yn),{},{type:"diff"}))}},64521:function(Rn,w,n){n.d(w,{Y:function(){return p}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(20219),F=n(75271),Z=n(53649),o=n.n(Z),P=n(47512),d,b,c,t,B=(0,P.kc)(function(x,M){var L=x.css,f=x.token,j=x.prefixCls,W=M.size,C=M.segmented,N=function(){return C?C!==!0?C.gap:!0:0}(),k=function(){if(C)return C!==!0?C.borderRadius:!0}(),K=function(){var Q={small:f.sizeSM,middle:f.size,large:f.sizeLG};return typeof N=="string"?Q[N]:N===!0?W?Q[W]:Q.middle:N||0},sn=function(){var Q={small:f.controlHeightSM,middle:f.controlHeight,large:f.controlHeightLG};if(k===!0)return W?Q[W]:Q.middle;if(k||k===0)return k},q=sn()&&L(d||(d=o()([`
        label {
          border-inline-start-width: 1px !important;
          border-radius: `,`px !important;
        }
        label::before {
          display: none !important;
        }
      `])),sn()),nn=L(b||(b=o()([`
      label {
        margin-right: `,`px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `])),K()),H=C===!0||C&&!C.bordered;return{custom:L(c||(c=o()([`
        `,`
        `,`
        `,`
      `])),q,nn,H&&L(t||(t=o()([`
          .`,`-radio-button-wrapper {
            border: none !important;
          }
          .`,`-radio-button-wrapper-checked {
            border: 1px solid `,` !important;
          }
        `])),j,j,f.colorPrimary))}},{hashPriority:"low"}),I=n(52676),g=["className"],p=S.ZP,y=function(M){var L=M.className,f=A()(M,g);f.segmented&&(f.optionType="button");var j=B(f),W=j.styles,C=j.cx;return(0,I.jsx)(S.ZP.Group,r()(r()({},f),{},{className:C(W.custom,L)}))};p.Group=y;var T=null},25777:function(Rn,w,n){n.d(w,{W:function(){return sn}});var _=n(26068),r=n.n(_),G=n(15558),A=n.n(G),S=n(48305),F=n.n(S),Z=n(67825),o=n.n(Z),P=n(60477),d=n(83293),b=n(44923),c=n(46847),t=n(82338),B=n(2405),I=n(75271),g=n(53649),p=n.n(g),y=n(47512),T,x,M,L,f,j=function(nn){switch(nn){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},W=(0,y.kc)(function(q,nn){var H=q.css,u=q.token,Q=q.prefixCls,X=nn.disabled,an=nn.size,dn=j(an),bn=dn.cardWidth;return{option:H(T||(T=p()([`
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
      `])),u.colorBorder,u.borderRadius,X?"not-allowed":"pointer",u.padding,u.motionDurationFast,bn,X&&H(x||(x=p()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),u.colorBgContainerDisabled,Q,u.colorTextDisabled,Q,u.colorTextDisabled),!X&&H(M||(M=p()([`
          &:hover {
            border-color: `,`;
          }
        `])),u.colorPrimaryBorderHover),Q),optionSelected:H(L||(L=p()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),u.colorPrimary,u.colorPrimaryActive),check:H(f||(f=p()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),u.marginXS,u.marginXS,u.colorPrimary)}}),C=n(52676),N=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],k=d.Z.Text,K=d.Z.Paragraph,sn=I.forwardRef(function(q,nn){var H=q.defaultValue,u=q.value,Q=q.onChange,X=q.multiple,an=X===void 0?!1:X,dn=q.disabled,bn=dn===void 0?!1:dn,V=q.options,xn=V===void 0?[]:V,tn=q.classNames,h=q.styles,Y=q.size,E=Y===void 0?"middle":Y,J=q.optionRender,cn=o()(q,N),Mn=(0,I.useMemo)(function(){return xn.some(function(D){return!!D.img||!!D.icon})},[xn]),Ln=W({disabled:bn,size:E}),In=Ln.cx,Nn=Ln.styles,ne=(0,I.useMemo)(function(){return j(E)},[E]),jn=ne.imgHeight,Kn=(0,I.useCallback)(function(D){return!an||Array.isArray(D)?D:D===void 0?[]:[D]},[an]),Gn=(0,B.C8)(Kn(H),{defaultValue:Kn(H),value:u,onChange:Q}),wn=F()(Gn,2),Zn=wn[0],mn=wn[1],Dn=(0,I.useCallback)(function(D){if(!bn){if(!an){mn(D);return}if(Zn.includes(D)){mn(Zn.filter(function(Fn){return Fn!==D}));return}mn([].concat(A()(Zn),[D]))}},[Zn,bn,an,mn]),Qn=(0,I.useCallback)(function(D){return an?Zn.includes(D):Zn===D},[Zn,an]),de=(0,I.useCallback)(function(D,Fn){var pe=Qn(D.value),Me=(0,C.jsxs)(b.Z,{align:Mn?"center":"flex-start",className:In(Nn.option,pe&&Nn.optionSelected,tn==null?void 0:tn.card),gap:"small",onClick:function(){return Dn(D.value)},style:r()(r()({},h==null?void 0:h.card),D.style),vertical:!0,children:[Mn&&(0,C.jsx)(c.C,{className:tn==null?void 0:tn.icon,icon:D.icon,shape:"square",size:jn,src:D.img,style:r()(r()({},h==null?void 0:h.icon),D.iconStyle)}),D.label&&pe&&(0,C.jsx)(k,{ellipsis:!0,strong:!0,children:D.label}),D.label&&!pe&&(0,C.jsx)(k,{ellipsis:!0,children:D.label}),!Mn&&D.description&&(0,C.jsx)(K,{ellipsis:{rows:2},type:"secondary",children:D.description}),pe&&(0,C.jsx)(P.Z,{className:Nn.check,icon:t.Z})]},D.value);return J?J(Me,D,Fn):Me},[tn==null?void 0:tn.card,tn==null?void 0:tn.icon,In,jn,Mn,Qn,Dn,J,Nn.check,Nn.option,Nn.optionSelected,h==null?void 0:h.card,h==null?void 0:h.icon]);return(0,C.jsx)(b.Z,r()(r()({gap:"large",ref:nn,wrap:!0},cn),{},{children:xn.map(function(D,Fn){return de(D,Fn)})}))})},66269:function(Rn,w,n){n.d(w,{a:function(){return b}});var _=n(26068),r=n.n(_),G=n(48305),A=n.n(G),S=n(26582),F=n(68526),Z=n(27896),o=n(96965),P=n(75271),d=n(52676),b=function(t){var B=t.value,I=t.defaultValue,g=t.min,p=g===void 0?0:g,y=t.max,T=t.step,x=t.gutter,M=x===void 0?16:x,L=t.sliderCol,f=L===void 0?{span:12}:L,j=t.inputCol,W=j===void 0?{span:5}:j,C=t.addonAfter,N=t.addonBefore,k=t.placeholder,K=t.onChange,sn=t.style,q=t.className,nn=t.sliderProps,H=nn===void 0?{}:nn,u=t.inputProps,Q=u===void 0?{}:u,X=(0,P.useState)(),an=A()(X,2),dn=an[0],bn=an[1],V=function(tn){Number.isNaN(tn)||(bn(tn),K==null||K(tn))};return(0,d.jsxs)(S.Z,{className:q,gutter:M,style:sn,children:[(0,d.jsx)(F.Z,r()(r()({},f),{},{children:(0,d.jsx)(Z.Z,r()(r()({},H),{},{defaultValue:I,max:y,min:p,onChange:V,step:T,value:B!=null?B:dn}))})),(0,d.jsx)(F.Z,r()(r()({},W),{},{children:(0,d.jsx)(o.Z,r()(r()({},Q),{},{addonAfter:C,addonBefore:N,defaultValue:I,max:y,min:p,onChange:V,placeholder:k,step:T,value:B!=null?B:dn}))}))]})}},56482:function(Rn,w,n){n.d(w,{N:function(){return I}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(97912),F=n(75271),Z=n(79213),o=n(53649),P=n.n(o),d=n(47512),b,c=(0,d.kc)(function(g){var p=g.css,y=g.token,T=g.prefixCls;return{table:p(b||(b=P()([`
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
    `])),T,y.colorTextTertiary)}}),t=n(52676),B=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],I=function(p){var y=p.rootStyle,T=p.rootClassName,x=p.icon,M=p.title,L=p.variant,f=p.defaultActive,j=p.extra,W=p.className,C=A()(p,B),N=c(),k=N.cx,K=N.styles;return(0,t.jsx)(Z.w,{className:T,style:y,icon:x,title:M,variant:L,defaultActive:f,extra:j,children:(0,t.jsx)(S.Z,r()({className:k(K.table,W),pagination:!1,rowHoverable:!1,size:"small"},C))})}},11546:function(Rn,w,n){n.d(w,{NU:function(){return o.N},iA:function(){return b}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(56995),F=n(97912),Z=n(75271),o=n(56482),P=n(52676),d=["columns"],b=function(B){var I=B.columns,g=A()(B,d),p=(0,Z.useMemo)(function(){return I==null?void 0:I.map(function(y){if(y.render)return y;if(y.ellipsis&&y.ellipsis!==!0&&y.ellipsis.showTitle||y.ellipsis===!0){var T=y.ellipsis===!0?{}:y.ellipsis;return r()(r()({},y),{},{ellipsis:{showTitle:!1},render:function(M){return M||M===0?(0,P.jsx)(S.Z,r()(r()({},T),{},{placement:"topLeft",title:M,children:M})):"-"}})}return y.render||(y.render=function(x){return x!=null?x:"-"}),y})},[I]);return(0,P.jsx)(F.Z,r()(r()({},g),{},{columns:p}))};b.displayName="Table",b.SELECTION_COLUMN=F.Z.SELECTION_COLUMN,b.EXPAND_COLUMN=F.Z.EXPAND_COLUMN,b.SELECTION_ALL=F.Z.SELECTION_ALL,b.SELECTION_INVERT=F.Z.SELECTION_INVERT,b.SELECTION_NONE=F.Z.SELECTION_NONE,b.Column=F.Z.Column,b.ColumnGroup=F.Z.ColumnGroup,b.Summary=F.Z.Summary,b.Collapse=o.N;var c=null},8559:function(Rn,w,n){n.d(w,{G:function(){return I}});var _=n(53649),r=n.n(_),G=n(47512),A=n(75271),S=n(52676),F,Z,o,P,d,b,c,t,B=(0,G.kc)(function(g,p){var y=g.css,T=(0,G.F4)(F||(F=r()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),x=(0,G.F4)(Z||(Z=r()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),M=(0,G.F4)(o||(o=r()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:y(P||(P=r()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),p.width||34,p.height||22,p.bgColor||"transparent"),line:y(d||(d=r()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),p.lineColor||"#000"),animate1:y(b||(b=r()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),T),animate2:y(c||(c=r()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),x),animate3:y(t||(t=r()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),M)}}),I=function(p){var y=p.height,T=p.width,x=p.lineColor,M=p.bgColor,L=B({height:y,width:T,lineColor:x,bgColor:M}),f=L.styles,j=L.cx;return(0,S.jsxs)("div",{className:f.box,children:[(0,S.jsx)("div",{className:j(f.line,f.animate1)}),(0,S.jsx)("div",{className:j(f.line,f.animate2)}),(0,S.jsx)("div",{className:j(f.line,f.animate3)}),(0,S.jsx)("div",{className:j(f.line,f.animate2)}),(0,S.jsx)("div",{className:j(f.line,f.animate1)}),(0,S.jsx)("div",{className:j(f.line,f.animate2)}),(0,S.jsx)("div",{className:j(f.line,f.animate1)})]})}},71983:function(Rn,w,n){n.r(w),n.d(w,{Affix:function(){return cn.Z},Alert:function(){return B.b},Anchor:function(){return Mn.Z},AntdMentions:function(){return Ln.Z},App:function(){return I.g},AudioPlayer:function(){return Se.Z},AutoComplete:function(){return In.Z},Avatar:function(){return Nn.C},BackTop:function(){return ne.Z},Badge:function(){return jn.Z},BaseMonacoEditor:function(){return o.ZM},Breadcrumb:function(){return g.Z},Button:function(){return Kn.ZP},ButtonGroup:function(){return _.h},Calendar:function(){return Gn.Z},Card:function(){return p.Z},Carousel:function(){return wn.Z},Cascader:function(){return Zn.Z},ChatInputActionBar:function(){return sn.Z},ChatInputArea:function(){return K.Z},ChatInputAreaInner:function(){return q.Z},ChatItem:function(){return Q.z},ChatSendButton:function(){return nn.Z},Checkbox:function(){return mn.Z},Col:function(){return Dn.Z},Collapse:function(){return Qn.Z},CollapseGroup:function(){return r.w},CollapseTable:function(){return N.NU},ColorPicker:function(){return de.Z},ConfigContext:function(){return G.E_},ConfigProvider:function(){return G.iV},CopyButton:function(){return Te.Z},DatePicker:function(){return D.default},Descriptions:function(){return y.w},Divider:function(){return T.i},DragPanel:function(){return A.U},Drawer:function(){return x.d},Dropdown:function(){return M.L},EditableMessage:function(){return X.i},Empty:function(){return Fn.Z},Flex:function(){return pe.Z},FloatButton:function(){return Me.Z},Form:function(){return L.l},FormCollapseList:function(){return L.E},FormHelper:function(){return f.wK},FullFeaturedHighlighter:function(){return an.EL},Grid:function(){return Oe.ZP},Highlighter:function(){return an.oP},Image:function(){return Pe.Z},Input:function(){return Be.Z},InputNumber:function(){return Ee.Z},Layout:function(){return un.Z},List:function(){return m.Z},LogViewer:function(){return F.n},Logo:function(){return S.T},Markdown:function(){return Ae.Z},Mentions:function(){return Z.o},Menu:function(){return U.Z},MobileChatInputArea:function(){return H.Z},MobileChatSendButton:function(){return u.Z},Modal:function(){return j.u},MonacoController:function(){return o.Hu},MonacoDiffEditor:function(){return o.Xq},MonacoEditor:function(){return o.rE},NotificationGlobalStyle:function(){return W.EZ},Page:function(){return P.T},Pagination:function(){return fn.Z},Popconfirm:function(){return yn.Z},Popover:function(){return En.Z},ProCard:function(){return d.Q},Progress:function(){return rn.Z},QRCode:function(){return ee.Z},Radio:function(){return C.Y},Rate:function(){return $n.Z},Result:function(){return An.ZP},Row:function(){return Un.Z},Segmented:function(){return kn.Z},Select:function(){return te.default},SelectCard:function(){return b.W},Skeleton:function(){return zn.Z},Slider:function(){return re.Z},SliderInput:function(){return c.a},Space:function(){return On.Z},SpeechSynthesisTTS:function(){return xe.H},Spin:function(){return ie.Z},Statistic:function(){return le.Z},Status:function(){return t.q},Steps:function(){return oe.Z},Switch:function(){return Xn.Z},SyntaxHighlighter:function(){return he.Z},Table:function(){return N.iA},Tabs:function(){return ce.Z},Tag:function(){return ve.Z},TimePicker:function(){return Hn.Z},Timeline:function(){return _n.Z},Tooltip:function(){return hn.Z},Tour:function(){return gn.Z},Transfer:function(){return vn.Z},Tree:function(){return Bn.Z},TreeSelect:function(){return Pn.Z},Typography:function(){return k.Z},Upload:function(){return Vn.Z},Watermark:function(){return Ce.Z},WaveformIcon:function(){return J.G},colorScales:function(){return dn._},colors:function(){return dn._},generateColorNeutralPalette:function(){return h},generateColorPalette:function(){return tn},message:function(){return R.ZP},neutralColorScales:function(){return Y},notification:function(){return W.t6},theme:function(){return ae.Z},useAudioPlayer:function(){return Re.x},useAutoFocus:function(){return f.wL},useCdnFn:function(){return G.nc},useLink:function(){return G.nB},useResponsive:function(){return pn.F},useSpeechRecognition:function(){return ze.x},useSpeechSynthes:function(){return E.J},useTheme:function(){return me.Fg},useThemeMode:function(){return se.r},version:function(){return Yn.Z},withFormHelper:function(){return f.MX}});var _=n(12644),r=n(79213),G=n(94456),A=n(13306),S=n(52625),F=n(25969),Z=n(79334),o=n(81321),P=n(40305),d=n(86346),b=n(25777),c=n(66269),t=n(46119),B=n(58479),I=n(5244),g=n(77789),p=n(39824),y=n(26345),T=n(82227),x=n(5795),M=n(99512),L=n(62719),f=n(20147),j=n(97527),W=n(40130),C=n(64521),N=n(11546),k=n(94729),K=n(52412),sn=n(65059),q=n(51874),nn=n(62999),H=n(82367),u=n(65677),Q=n(59212),X=n(99335),an=n(17853),dn=n(15094),bn=n(82092),V=n.n(bn),xn=n(98644),tn=function(i){var a=i.type,e=i.scale,l=i.appearance,v=(0,xn.Z)(a),O=l==="dark";return V()(V()(V()(V()(V()(V()(V()(V()(V()(V()({},"color".concat(v,"Bg"),e[l][1]),"color".concat(v,"BgHover"),e[l][2]),"color".concat(v,"Border"),e[l][4]),"color".concat(v,"BorderHover"),e[l][O?5:3]),"color".concat(v,"Hover"),e[l][O?10:8]),"color".concat(v),e[l][9]),"color".concat(v,"Active"),e[l][O?7:10]),"color".concat(v,"TextHover"),e[l][O?10:8]),"color".concat(v,"Text"),e[l][9]),"color".concat(v,"TextActive"),e[l][O?7:10])},h=function(i){var a=i.scale,e=i.appearance;return{colorBgContainer:e==="dark"?a[e][1]:a[e][0],colorBgElevated:e==="dark"?a[e][2]:a[e][0],colorBgLayout:e==="dark"?a[e][0]:a[e][1],colorBgMask:a.lightA[8],colorBgSpotlight:a[e][5],colorBorder:a[e][4],colorBorderSecondary:a[e][3],colorFill:a["".concat(e,"A")][3],colorFillQuaternary:a["".concat(e,"A")][0],colorFillSecondary:a["".concat(e,"A")][2],colorFillTertiary:a["".concat(e,"A")][1],colorText:a[e][12],colorTextQuaternary:a[e][6],colorTextSecondary:a[e][10],colorTextTertiary:a[e][8]}},Y={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},E=n(82846),J=n(8559),cn=n(7904),Mn=n(58190),Ln=n(46621),In=n(85958),Nn=n(46847),ne=n(66075),jn=n(1088),Kn=n(71170),Gn=n(3957),wn=n(57512),Zn=n(52279),mn=n(43584),Dn=n(68526),Qn=n(90026),de=n(64479),D=n(1409),Fn=n(78962),pe=n(44923),Me=n(6697),Oe=n(82366),Pe=n(69414),Be=n(99707),Ee=n(96965),un=n(93702),m=n(78104),U=n(74032),R=n(57939),fn=n(4211),yn=n(45590),En=n(31997),rn=n(35357),ee=n(82830),$n=n(76177),An=n(46504),Un=n(26582),kn=n(13927),te=n(35092),zn=n(99021),re=n(27896),On=n(43356),ie=n(49553),le=n(43954),oe=n(59470),Xn=n(74798),ce=n(60756),ve=n(53453),ae=n(22972),_n=n(46141),Hn=n(20907),hn=n(56995),gn=n(33858),vn=n(96208),Bn=n(64287),Pn=n(6036),Vn=n(72023),Yn=n(38208),Ce=n(55366),Te=n(81107),Ae=n(85814),he=n(74974),xe=n(49724),Se=n(83595),Re=n(61984),ze=n(8281),pn=n(81134),me=n(47512),se=n(33592)},40130:function(Rn,w,n){n.d(w,{EZ:function(){return p.E},t6:function(){return q}});var _=n(26068),r=n.n(_),G=n(67825),A=n.n(G),S=n(48305),F=n.n(S),Z=n(335),o=n.n(Z),P=n(30657),d=n(19728),b=n(22620),c=n(90026),t=n(83293),B=n(98943),I=n(75271),g=n(52676),p=n(55300),y=["detail","message","description","onClose","className"],T=c.Z.Panel,x=t.Z.Link,M=t.Z.Paragraph,L=t.Z.Text,f={},j=function(u,Q){f[u]||(f[u]=[]),f[u].push(Q)},W=function(u){delete f[u]},C=function H(u){var Q="";if(typeof u=="string")Q=u;else if(typeof u=="number")Q=u.toString();else if(Array.isArray(u)){var X=o()(u),an;try{for(X.s();!(an=X.n()).done;){var dn=an.value;Q+=H(dn)}}catch(bn){X.e(bn)}finally{X.f()}}else(0,I.isValidElement)(u)&&(Q+=H(u.props.children));return Q},N=function(u){var Q,X=u.noticeKey,an=u.message,dn=((Q=f[X])===null||Q===void 0?void 0:Q.length)||0;return(0,g.jsxs)(g.Fragment,{children:[an,dn>1&&" (".concat(dn,")")]})},k=function(u){var Q=u.noticeKey,X=(0,I.useState)(),an=F()(X,2),dn=an[0],bn=an[1],V={},xn=o()(f[Q]),tn;try{for(xn.s();!(tn=xn.n()).done;){var h=tn.value,Y=C(h.description);h.descKey=Y,V[Y]=h}}catch(E){xn.e(E)}finally{xn.f()}return(0,g.jsx)(c.Z,{accordion:!0,activeKey:dn,className:"yunti-notification-collapse",expandIcon:function(J){var cn=J.isActive;return(0,g.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:cn?(0,g.jsx)(x,{className:"yunti-notification-link",children:(0,g.jsx)(P.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,g.jsx)(d.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(J){bn(J)},children:Object.values(V).map(function(E){var J=E.descKey,cn=E.description,Mn=E.detail;return(0,g.jsx)(T,{header:(0,g.jsx)(L,{ellipsis:{tooltip:!1},style:{width:250},children:cn}),children:(0,g.jsx)(M,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(Mn,null,2)},type:"secondary",children:(0,g.jsx)("pre",{children:JSON.stringify(Mn,null,2)})})},J)})})},K=function(u){var Q=u.detail,X=u.message,an=u.description,dn=u.onClose,bn=u.className,V=A()(u,y),xn=C(X);j(xn,u);var tn=function(){dn==null||dn(),W(xn)};return u.type==="warning"&&!u.icon&&(V.icon=(0,g.jsx)(b.Z,{style:{color:"#ff7d00"}})),Q?B.ZP.open(r()({key:xn,message:(0,g.jsx)(N,{message:X,noticeKey:xn}),description:(0,g.jsx)(k,{noticeKey:xn}),onClose:tn,className:"yunti-notification ".concat(bn)},V)):B.ZP.open(r()({key:xn,message:(0,g.jsx)(N,{message:X,noticeKey:xn}),description:an,onClose:tn,className:"yunti-notification ".concat(bn)},V))},sn=function(u){var Q;if(((u==null||(Q=u.errors)===null||Q===void 0?void 0:Q.length)||0)>0){u!=null&&u.errors;var X=o()((u==null?void 0:u.errors)||[]),an;try{for(X.s();!(an=X.n()).done;){var dn=an.value;K(r()(r()({detail:dn,description:dn.message},u),{},{type:"warning"}))}}catch(bn){X.e(bn)}finally{X.f()}}else K(r()(r()({},u),{},{type:"warning"}))},q=r()(r()({},B.ZP),{},{success:function(u){return K(r()(r()({},u),{},{type:"success"}))},info:function(u){return K(r()(r()({},u),{},{type:"info"}))},warning:function(u){return K(r()(r()({},u),{},{type:"warning"}))},warn:function(u){return K(r()(r()({},u),{},{type:"warning"}))},error:function(u){return K(r()(r()({},u),{},{type:"error"}))},warnings:sn,warns:sn}),nn=null},55300:function(Rn,w,n){n.d(w,{E:function(){return F}});var _=n(53649),r=n.n(_),G=n(98943),A=n(47512),S,F=(0,A.vJ)(S||(S=r()([`
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
`])),function(Z){var o=Z.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(Z){var o=Z.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(Z){var o=Z.theme;return o==null?void 0:o.colorPrimary},function(Z){var o=Z.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(Z){var o=Z.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(Z){var o=Z.theme,P=o||{},d=P.prefixCls;return G.ZP.config({prefixCls:d}),`
      .`.concat(d,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(d,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(Rn,w,n){n.d(w,{j:function(){return _}});var _=typeof window!="undefined"}}]);
