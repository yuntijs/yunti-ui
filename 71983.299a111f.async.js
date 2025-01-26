"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(Rn,Y,n){n.d(Y,{b:function(){return B}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(21153),U=n(75271),I=n(53649),a=n.n(I),L=n(47512),c,b=(0,L.kc)(function(f,p){var y=f.css,P=p.bordered,E=P===void 0?"dashed":P;return{custom:y(c||(c=a()([`
        border-style: `,` !important;
      `])),E)}},{hashPriority:"low"}),v=n(52676),t=["bordered","className"],B=function(p){var y=p.bordered,P=y===void 0?"dashed":y,E=p.className,A=C()(p,t),j=b({bordered:P}),h=j.styles,N=j.cx;return(0,v.jsx)(M.Z,r()(r()({},A),{},{className:N(h.custom,E)}))};B.ErrorBoundary=M.Z.ErrorBoundary;var R=null},5244:function(Rn,Y,n){n.d(Y,{g:function(){return c}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(23878),U=n(75271),I=n(55300),a=n(52676),L=["children"],c=function(t){var B=t.children,R=C()(t,L);return(0,a.jsxs)(M.Z,r()(r()({},R),{},{children:[(0,a.jsx)(I.E,{}),B]}))};c.useApp=M.Z.useApp;var b=null},52412:function(Rn,Y,n){var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(53649),U=n.n(M),I=n(62579),a=n(51874),L=n(47512),c=n(75271),b=n(52676),v=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],t,B,R,f=(0,L.kc)(function(y){var P=y.css;return{container:P(t||(t=U()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:P(B||(B=U()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:P(R||(R=U()([`
      position: relative;
      flex: 1;
    `])))}}),p=(0,c.forwardRef)(function(y,P){var E=y.className,A=y.style,j=y.classNames,h=y.expand,N=h===void 0?!0:h,$=y.setExpand,O=y.bottomAddons,Z=y.topAddons,q=y.onSizeChange,z=y.heights,vn=y.onSend,nn=C()(y,v),tn=f(),Q=tn.styles;return(0,b.jsx)(I.Z,{className:E,classNames:j,fullscreen:N,headerHeight:z==null?void 0:z.headerHeight,maxHeight:z==null?void 0:z.maxHeight,minHeight:z==null?void 0:z.minHeight,onSizeChange:q,placement:"bottom",size:{height:z==null?void 0:z.inputHeight,width:"100%"},style:r()({zIndex:10},A),children:(0,b.jsxs)("section",{className:Q.container,style:{minHeight:z==null?void 0:z.minHeight},children:[Z,(0,b.jsx)("div",{className:Q.textareaContainer,children:(0,b.jsx)(a.Z,r()({className:Q.textarea,onSend:function(){vn==null||vn(),$==null||$(!1)},ref:P,type:"pure"},nn))}),O]})})});Y.Z=(0,c.memo)(p)},59212:function(Rn,Y,n){n.d(Y,{z:function(){return en}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(10581),U=n(93955),I=n(81262),a=n(9192),L=n(81134),c=n(75271),b=n(90142),v=n(53649),t=n.n(v),B=n(47512),R,f,p,y,P,E,A,j,h,N,$,O,Z,q,z,vn,nn,tn,Q=(0,B.kc)(function(g,V){var x=g.cx,G=g.css,dn=g.token,Mn=g.isDarkMode,Ln=g.responsive,In=V.placement,Dn=V.type,ne=V.title,jn=V.primary,zn=V.avatarSize,Gn=V.editing,wn=V.time,Zn=V.isLatest,fn=G(R||(R=t()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),jn?Mn?dn.colorFill:dn.colorBgElevated:Mn?dn.colorFillSecondary:dn.colorBgContainer,dn.borderRadiusLG,dn.motionEaseOut),Nn=G(f||(f=t()([`
      padding-block-start: `,`;
    `])),ne?0:"6px"),Qn=G(p||(p=t()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),dn.motionEaseOut),de=Dn==="block"?fn:Nn,T=Gn&&G(y||(y=t()([`
        width: 100%;
      `])));return{actions:x(G(P||(P=t()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),In==="left"?"flex-start":"flex-end",In==="left"?"flex-end":"flex-start"),Gn&&G(E||(E=t()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:G(A||(A=t()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),zn,zn),avatarGroupContainer:G(j||(j=t()([`
        width: `,`px;
      `])),zn),container:x(Dn==="pure"&&Qn,G(h||(h=t()([`
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
        `])),Zn?"unset":"none",Zn?1:0,dn.motionEaseOut,Ln.mobile,Dn==="pure"?"12px":"6px")),editingContainer:x(T,G(N||(N=t()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),dn.colorBorderSecondary,dn.colorBorder),Dn==="pure"&&G($||($=t()([`
            background: `,`;
            border-radius: `,`px;
          `])),dn.colorFillQuaternary,dn.borderRadius)),editingInput:G(O||(O=t()([`
        width: 100%;
      `]))),errorContainer:G(Z||(Z=t()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:G(q||(q=t()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),In==="right"?"-4px":"unset",In==="left"?"-4px":"unset",dn.colorBgLayout,dn.colorPrimary),message:x(de,G(z||(z=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),Ln.mobile)),messageContainer:x(T,G(vn||(vn=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),wn?-16:0,Ln.mobile)),messageContent:x(T,G(nn||(nn=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),Ln.mobile)),messageExtra:x("message-extra"),name:G(tn||(tn=t()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),dn.colorTextDescription,In==="left"?"left":"right")}}),u=n(52676),J=(0,c.memo)(function(g){var V=g.actions,x=g.placement,G=g.type,dn=g.editing,Mn=Q({editing:dn,placement:x,type:G}),Ln=Mn.styles;return(0,u.jsx)(b.D,{align:"flex-start",className:Ln.actions,role:"menubar",children:V})}),H=J,an=n(99335),mn=(0,c.memo)(function(g){var V=g.editing,x=g.onChange,G=g.onEditingChange,dn=g.text,Mn=g.message,Ln=g.placement,In=g.messageExtra,Dn=g.renderMessage,ne=g.type,jn=g.primary,zn=g.onDoubleClick,Gn=g.fontSize,wn=g.markdownProps,Zn=g.markdownClassname,fn=Q({editing:V,placement:Ln,primary:jn,type:ne}),Nn=fn.cx,Qn=fn.styles,de=(0,L.F)(),T=de.mobile,Fn=(0,u.jsx)(an.i,{classNames:{input:Qn.editingInput,markdown:Zn},editButtonSize:"small",editing:V,fontSize:Gn,fullFeaturedCodeBlock:!0,markdownProps:wn,onChange:x,onEditingChange:G,openModal:T?V:void 0,text:dn,value:Mn?String(Mn).trim():""}),pe=Dn?Dn(Fn):Fn;return(0,u.jsxs)(b.D,{className:Nn(Qn.message,V&&Qn.editingContainer),onDoubleClick:zn,children:[pe,In&&!V?(0,u.jsx)("div",{className:Qn.messageExtra,children:In}):null]})}),ln=mn,w=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest"],yn=32,en=(0,c.memo)(function(g){var V=g.avatarAddon,x=g.onAvatarClick,G=g.avatarProps,dn=g.actions,Mn=g.className,Ln=g.primary,In=g.loading,Dn=g.message,ne=g.placement,jn=ne===void 0?"left":ne,zn=g.type,Gn=zn===void 0?"block":zn,wn=g.avatar,Zn=g.error,fn=g.showTitle,Nn=g.time,Qn=g.editing,de=g.onChange,T=g.onEditingChange,Fn=g.messageExtra,pe=g.renderMessage,Me=g.text,Oe=g.errorMessage,Pe=g.onDoubleClick,Be=g.fontSize,Ee=g.markdownProps,un=g.markdownClassname,m=g.isLatest,W=C()(g,w),D=(0,L.F)(),gn=D.mobile,bn=Q({editing:Qn,placement:jn,primary:Ln,showTitle:fn,time:Nn,title:wn.title,type:Gn,isLatest:m}),En=bn.cx,rn=bn.styles;return(0,u.jsxs)(b.D,r()(r()({className:En(rn.container,Mn),direction:jn==="left"?"horizontal":"horizontal-reverse",gap:gn?6:12},W),{},{children:[(0,u.jsx)(M.Z,r()(r()({},G),{},{addon:V,avatar:wn,loading:In,onClick:x,placement:jn,size:gn?yn:void 0})),(0,u.jsxs)(b.D,{align:jn==="left"?"flex-start":"flex-end",className:rn.messageContainer,children:[(0,u.jsx)(a.Z,{avatar:wn,placement:jn,showTitle:fn,time:Nn}),(0,u.jsxs)(b.D,{align:jn==="left"?"flex-start":"flex-end",className:rn.messageContent,direction:"vertical",gap:8,children:[Zn?(0,u.jsx)(I.Z,{error:Zn,message:Oe,placement:jn}):(0,u.jsx)(ln,{editing:Qn,fontSize:Be,markdownClassname:un,markdownProps:Ee,message:Dn,messageExtra:Fn,onChange:de,onDoubleClick:Pe,onEditingChange:T,placement:jn,primary:Ln,renderMessage:pe,text:Me,type:Gn}),(0,u.jsx)(H,{actions:dn,editing:Qn,placement:jn,type:Gn})]})]}),gn&&Gn==="block"&&(0,u.jsx)(U.Z,{borderSpacing:yn})]}))})},13306:function(Rn,Y,n){n.d(Y,{U:function(){return $}});var k=n(26068),r=n.n(k),X=n(48305),C=n.n(X),M=n(67825),U=n.n(M),I=n(97157),a=n(86818),L=n(44923),c=n(71170),b=n(75271),v=n(84569),t=n.n(v),B=n(53649),R=n.n(B),f=n(47512),p,y,P,E,A,j=(0,f.kc)(function(O){var Z=O.css,q=O.token,z=O.prefixCls;return{root:Z(p||(p=R()([`
      overflow: hidden;
    `]))),wrapper:Z(y||(y=R()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),q.marginLG),content:Z(P||(P=R()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),q.borderRadiusLG,q.boxShadowSecondary),dragWrapper:Z(E||(E=R()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:Z(A||(A=R()([`
      cursor: move;
    `])))}}),h=n(52676),N=["title","classNames","defaultPosition","onPositionChange"],$=(0,b.memo)(function(O){var Z=O.title,q=O.classNames,z=q===void 0?{}:q,vn=O.defaultPosition,nn=O.onPositionChange,tn=U()(O,N),Q=j(),u=Q.styles,J=Q.cx,H=(0,b.useState)({left:0,top:0,bottom:0,right:0}),an=C()(H,2),mn=an[0],ln=an[1],w=(0,b.useRef)(null),yn=function(g,V){var x,G=window.document.documentElement,dn=G.clientWidth,Mn=G.clientHeight,Ln=(x=w.current)===null||x===void 0?void 0:x.getBoundingClientRect();Ln&&ln({left:-Ln.left+V.x,right:dn-(Ln.right-V.x),top:-Ln.top+V.y,bottom:Mn-(Ln.bottom-V.y)})};return(0,h.jsx)(a.Z,r()(r()({},tn),{},{classNames:r()(r()({},z),{},{wrapper:J(u.wrapper,z.wrapper),content:J(u.content,z.content)}),destroyOnClose:!0,drawerRender:function(g){return(0,h.jsx)(t(),{bounds:mn,defaultPosition:vn,handle:".".concat(u.dragHandle),nodeRef:w,onStart:function(x,G){return yn(x,G)},onStop:function(x,G){nn==null||nn({x:G.x,y:G.y})},children:(0,h.jsx)("div",{className:u.dragWrapper,ref:w,children:g})})},mask:!1,rootClassName:u.root,title:(0,h.jsxs)(L.Z,{align:"center",className:u.dragHandle,children:[(0,h.jsx)(L.Z,{flex:2,children:Z}),(0,h.jsx)(L.Z,{children:(0,h.jsx)(c.ZP,{className:u.dragHandle,icon:(0,h.jsx)(I.Z,{}),type:"text"})})]})}))})},5795:function(Rn,Y,n){n.d(Y,{d:function(){return f}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(86818),U=n(75271),I=n(53649),a=n.n(I),L=n(47512),c,b,v,t=(0,L.kc)(function(y,P){var E=y.css,A=y.prefixCls,j=P.closeIcon,h=P.closeIconPlacement,N=P.extra,$=E(c||(c=a()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),A,A,!(j===null||j===!1)&&E(b||(b=a()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),A));return{custom:E(v||(v=a()([`
        `,`
      `])),(!h||h==="right"||h==="auto"&&!N)&&$)}},{hashPriority:"low"}),B=n(52676),R=["className"],f=function(P){var E=P.className,A=C()(P,R),j=t(A),h=j.styles,N=j.cx;return(0,B.jsx)(M.Z,r()(r()({},A),{},{className:N(h.custom,E)}))},p=null},99512:function(Rn,Y,n){n.d(Y,{L:function(){return P}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(44923),U=n(5053),I=n(75271),a=n(53649),L=n.n(a),c=n(47512),b,v,t,B,R=(0,c.kc)(function(E,A){var j=E.css,h=E.token,N=A.divider,$=A.position;return{menuWrapper:j(b||(b=L()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),h.colorBgElevated,h.borderRadiusLG,h.boxShadowSecondary),menuExtra:j(v||(v=L()([`
        padding: 10px 16px 4px;
        `,`
      `])),N&&j($==="top"?t||(t=L()([`
              border-bottom: 1px solid `,`;
            `])):B||(B=L()([`
              border-top: 1px solid `,`;
            `])),h.colorSplit))}}),f=n(52676),p=["menuExtra","dropdownRender"],y=function(A){var j=A.menuExtra,h=A.dropdownRender,N=C()(A,p),$=j||{},O=$.position,Z=O===void 0?"top":O,q=$.divider,z=q===void 0?!1:q,vn=$.content,nn=R({divider:z,position:Z}),tn=nn.styles,Q=(0,I.useCallback)(function(u){var J=I.cloneElement(u,{style:{boxShadow:"none",border:"none"}});if(!vn)return h?(0,f.jsx)(M.Z,{className:tn.menuWrapper,vertical:!0,children:h(J)}):u;var H=(0,f.jsx)(M.Z,{align:"center",className:tn.menuExtra,children:vn});return(0,f.jsxs)(M.Z,{className:tn.menuWrapper,vertical:!0,children:[Z==="top"&&H,J,Z==="bottom"&&H]})},[vn,h,Z,tn.menuExtra,tn.menuWrapper]);return(0,f.jsx)(U.Z,r()({dropdownRender:Q},N))},P=y;P.Button=U.Z.Button},99335:function(Rn,Y,n){n.d(Y,{i:function(){return b}});var k=n(26068),r=n.n(k),X=n(48305),C=n.n(X),M=n(14252),U=n(85814),I=n(54285),a=n(75271),L=n(65720),c=n(52676),b=(0,a.memo)(function(v){var t=v.value,B=v.onChange,R=v.classNames,f=R===void 0?{}:R,p=v.onEditingChange,y=v.editing,P=v.openModal,E=v.onOpenChange,A=v.placeholder,j=v.showEditWhenEmpty,h=j===void 0?!1:j,N=v.styles,$=v.height,O=v.inputType,Z=v.editButtonSize,q=v.text,z=v.fullFeaturedCodeBlock,vn=v.model,nn=v.fontSize,tn=v.markdownProps,Q=(0,L.Z)(!1,{onChange:p,value:y}),u=C()(Q,2),J=u[0],H=u[1],an=(0,L.Z)(!1,{onChange:E,value:P}),mn=C()(an,2),ln=mn[0],w=mn[1],yn=$==="auto",en=(0,c.jsx)(M.Z,{className:f==null?void 0:f.input,classNames:{textarea:f==null?void 0:f.textarea},defaultValue:t,editButtonSize:Z,height:$,onCancel:function(){return H(!1)},onConfirm:function(V){B==null||B(V),H(!1)},placeholder:A,style:N==null?void 0:N.input,text:q,textareaClassname:f==null?void 0:f.input,type:O});return!t&&h?en:(0,c.jsxs)(c.Fragment,{children:[!ln&&J?en:(0,c.jsx)(U.Z,r()(r()({className:f==null?void 0:f.markdown,fontSize:nn,fullFeaturedCodeBlock:z,style:r()({height:yn?"unset":$},N==null?void 0:N.markdown),variant:"chat"},tn),{},{children:t||A||""})),ln&&(0,c.jsx)(I.Z,{editing:J,extra:vn==null?void 0:vn.extra,footer:vn==null?void 0:vn.footer,height:$,onChange:B,onEditingChange:H,onOpenChange:function(V){w(V),H(!1)},open:ln,placeholder:A,text:q,value:t})]})})},14866:function(Rn,Y,n){n.d(Y,{w:function(){return a}});var k=n(48305),r=n.n(k),X=n(75271),C=function(c){return typeof c=="string"?document.querySelector("#".concat(c)):(c==null?void 0:c.current)||c},M=":not([disabled]):not([readonly])",U=["text","password","search","tel","url","number","email",""].map(function(L){return'input[type="'.concat(L,'"]').concat(M)}).join(", ")+", input:not([type])".concat(M,", textarea").concat(M),I=function(c){var b,v=C(c);if(v){var t=(b=v.querySelector)===null||b===void 0?void 0:b.call(v,U);if(t!=null&&t.focus)return t.focus(),!0}},a=function(c){var b=(0,X.useState)(!1),v=r()(b,2),t=v[0],B=v[1];X.useEffect(function(){if(!(t||!c)){var R=I(c);R&&B(!0)}},[c,t,B])}},20147:function(Rn,Y,n){n.d(Y,{MX:function(){return I},wK:function(){return U},wL:function(){return C.w}});var k=n(26068),r=n.n(k),X=n(75271),C=n(14866),M=n(52676),U=function(L){var c,b=L.autoFocus,v=b===void 0?!0:b,t=(0,X.useRef)(null);return(0,C.w)(v?t:void 0),(0,M.jsx)("div",{className:L.className,id:L.id,ref:t,style:(c=L.style)!==null&&c!==void 0?c:{display:L.className?void 0:"contents"},children:L.children})},I=function(L){return function(c){var b=function(B){return(0,M.jsx)(U,r()(r()({},L||{}),{},{children:(0,M.jsx)(c,r()({},B))}))},v=c.displayName||c.name||"Component";return b.displayName="withFormHelper(".concat(v,")"),b}}},25969:function(Rn,Y,n){n.d(Y,{n:function(){return N}});var k=n(26068),r=n.n(k),X=n(48305),C=n.n(X),M=n(67825),U=n.n(M),I=n(60477),a=n(50999),L=n(41117),c=n(45798),b=n(3548),v=n(5312),t=n(75271),B=n(53649),R=n.n(B),f=n(47512),p,y,P,E,A=(0,f.kc)(function($){var O=$.css,Z=$.token,q="#222222";return{root:O(p||(p=R()([`
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
      `])),q,Z.borderRadiusLG,Z.marginXXS,Z.paddingXS,q,Z.borderRadiusLG,Z.borderRadiusLG,Z.borderRadius,Z.borderRadius,q,Z.borderRadiusLG,Z.fontFamilyCode),searchBarIcon:O(y||(y=R()([`
        font-size: 16px;
      `]))),loaderText:O(P||(P=R()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),Z.fontFamilyCode),loaderIcon:O(E||(E=R()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),Z.marginSM,Z.marginSM)}},{hashPriority:"low"}),j=n(52676),h=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],N=function(O){var Z=O.className,q=O.id,z=O.style,vn=O.height,nn=O.onScroll,tn=O.url,Q=O.websocket,u=O.refreshInterval,J=O.onLoad,H=O.onError,an=U()(O,h),mn=A(),ln=mn.cx,w=mn.styles,yn=(0,t.useState)(0),en=C()(yn,2),g=en[0],V=en[1],x=(0,t.useState)(!1),G=C()(x,2),dn=G[0],Mn=G[1],Ln=(0,t.useState)(!1),In=C()(Ln,2),Dn=In[0],ne=In[1],jn=(0,t.useRef)(),zn=(0,t.useRef)();(0,t.useEffect)(function(){return function(){clearTimeout(jn.current),clearTimeout(zn.current)}},[]),(0,t.useEffect)(function(){var fn;return tn&&!Q&&u&&(fn=setInterval(function(){V(function(Nn){return Nn+1})},u)),function(){clearInterval(fn)}},[u,tn,Q]);var Gn=(0,t.useMemo)(function(){return tn&&(jn.current=setTimeout(function(){Mn(!0),jn.current=void 0},50),"".concat(tn,"#").concat(g))},[tn,g]),wn=(0,t.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(jn.current),Mn(!1),ne(!0),zn.current=setTimeout(function(){return ne(!1)},100),J==null||J()},[J]),Zn=(0,t.useCallback)(function(fn){Mn(!1),clearTimeout(jn.current),H==null||H(fn)},[H]);return(0,j.jsxs)("div",{className:ln(w.root,Z),id:q,style:r()({height:vn},z),children:[(0,j.jsx)(a.Uu,{render:function(Nn){var Qn=Nn.follow,de=Nn.onScroll;return(0,j.jsx)(a.A9,r()(r()({url:Gn,websocket:Q},an),{},{follow:Dn||Qn,height:vn,iconFilterLines:(0,j.jsx)(I.Z,{className:w.searchBarIcon,icon:L.Z}),iconFindNext:(0,j.jsx)(I.Z,{className:w.searchBarIcon,icon:c.Z}),iconFindPrevious:(0,j.jsx)(I.Z,{className:w.searchBarIcon,icon:b.Z}),onError:Zn,onLoad:wn,onScroll:function(Fn){de(Fn),nn==null||nn(Fn)}}))},startFollowing:!0}),dn&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:w.loaderText,children:"loading ..."}),(0,j.jsx)(I.Z,{className:w.loaderIcon,icon:v.Z,spin:!0})]})]})}},52625:function(Rn,Y,n){n.d(Y,{T:function(){return P}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(47512),U=n(75271),I=n(90142),a=n(36075),L=n.n(a),c=n(52676),b=(0,U.memo)(function(E){var A=Object.assign({},(L()(E),E));return(0,c.jsx)("svg",r()(r()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},A),{},{children:(0,c.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),v=(0,U.memo)(function(E){var A=Object.assign({},(L()(E),E));return(0,c.jsxs)("svg",r()(r()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},A),{},{children:[(0,c.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,c.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,c.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),t=(0,U.memo)(function(E){var A=Object.assign({},(L()(E),E));return(0,c.jsxs)("svg",r()(r()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},A),{},{children:[(0,c.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,c.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,c.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,c.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,c.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,c.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,c.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),B=n(53649),R=n.n(B),f,p=(0,M.kc)(function(E){var A=E.css;return{extraTitle:A(f||(f=R()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),y=["type","size","style","extra","className"],P=(0,U.memo)(function(E){var A=E.type,j=A===void 0?"img":A,h=E.size,N=h===void 0?32:h,$=E.style,O=E.extra,Z=E.className,q=C()(E,y),z=(0,M.Fg)(),vn=p(),nn=vn.styles,tn;switch(j){case"text":{tn=(0,c.jsx)(t,r()({className:Z,height:N,style:$,width:N*2.9375},q));break}case"combine":{tn=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,r()({height:N,style:$,width:N},q)),(0,c.jsx)(t,{style:{height:N,marginLeft:Math.round(N/4),width:"auto"}})]});break}case"img":default:{tn=(0,c.jsx)(v,r()({height:N,style:$,width:N},q));break}}if(!O)return tn;var Q=Math.round(N/3*1.9);return(0,c.jsxs)(I.D,r()(r()({align:"center",className:Z,horizontal:!0,style:$},q),{},{children:[tn,(0,c.jsx)(b,{style:{color:z.colorFill,height:Q,width:Q}}),(0,c.jsx)("div",{className:nn.extraTitle,style:{fontSize:Q},children:O})]}))})},79334:function(Rn,Y,n){n.d(Y,{o:function(){return se}});var k=n(26068),r=n.n(k),X=n(82092),C=n.n(X),M=n(14837),U=n(64419),I=n(30924),a=n(6988),L=n(56875),c=n(44250),b=n(66108),v=n(36419),t=n(75271),B=n(28485),R=n(48305),f=n.n(R),p=n(71561),y=n(32199),P=(0,v.fA)("INSERT_MENTION_COMMAND"),E=(0,v.fA)("DELETE_MENTION_COMMAND"),A=(0,v.fA)("CLEAR_HIDE_MENU_TIMEOUT"),j=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,h=function(i){var o=i.onBlur,e=i.onFocus,l=(0,p.g)(),d=f()(l,1),S=d[0],K=(0,t.useRef)(null);return(0,t.useEffect)(function(){return(0,y.qV)(S.registerCommand(A,function(){return K.current&&(clearTimeout(K.current),K.current=null),!0},v.VN),S.registerCommand(v.Gq,function(_,on){return K.current=setTimeout(function(){S.dispatchCommand(v.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),o&&o(),!0},v.VN),S.registerCommand(v.m$,function(){return e&&e(),!0},v.VN))},[S,o,e]),null},N=n(25298),$=n.n(N),O=n(17069),Z=n.n(O),q=n(9504),z=n.n(q),vn=n(38836),nn=n.n(vn),tn=n(21742),Q=n.n(tn),u=n(83136),J=n.n(u),H=function(s){Q()(o,s);var i=J()(o);function o(){return $()(this,o),i.apply(this,arguments)}return Z()(o,[{key:"createDOM",value:function(l){var d=z()(nn()(o.prototype),"createDOM",this).call(this,l);return d.classList.add("align-middle"),d}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(l){return new o(l.__text,l.__key)}},{key:"importJSON",value:function(l){var d=(0,v.MX)(l.text);return d.setFormat(l.format),d.setDetail(l.detail),d.setMode(l.mode),d.setStyle(l.style),d}}]),o}(v.R2);function an(s){return new H(s)}var mn=function(i){var o=i.editable,e=(0,p.g)(),l=f()(e,1),d=l[0];return(0,t.useEffect)(function(){d.setEditable(o)},[o,d]),null},ln=n(62657),w=n.n(ln),yn=n(60477),en=n(44923),g=n(56995),V=n(69024),x=n(52676),G=(0,t.createContext)(null),dn=(0,t.memo)(function(s){var i=s.children,o=s.value;return(0,x.jsx)(G.Provider,{value:o,children:i})}),Mn=function(){var i=(0,t.useContext)(G);return i==null?void 0:i.optionsMap},Ln=n(33803),In=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,Dn="\\(",ne=function(i){return"(?:"+i.join("|")+")"},jn=function(i,o){var e=i.length===0?"":"(?!"+i.join("|")+")";return e+"[^\\s"+o+"]"},zn=function(i){return"(?:\\.[ |$]|\\s|["+i+"]|)"},Gn=75,wn=function(i,o){var e=(0,t.useRef)(null),l=(0,p.g)(),d=f()(l,1),S=d[0],K=(0,Ln.y)(i),_=f()(K,3),on=_[0],sn=_[1],F=_[2],Cn=(0,t.useCallback)(function(Sn){var Wn=(0,v.dL)(),Yn=Wn==null?void 0:Wn.getNodes();if(!on&&(Yn==null?void 0:Yn.length)===1&&S.dispatchCommand(o,void 0),on&&(0,v.iO)(Wn)){Sn.preventDefault();var ue=(0,v.gI)(i);if((0,v.k$)(ue))return o&&S.dispatchCommand(o,void 0),ue.remove(),!0}return!1},[on,i,o,S]),Tn=(0,t.useCallback)(function(Sn){Sn.stopPropagation(),F(),sn(!0)},[sn,F]);return(0,t.useEffect)(function(){var Sn=e.current;return Sn&&Sn.addEventListener("click",Tn),function(){Sn&&Sn.removeEventListener("click",Tn)}},[Tn]),(0,t.useEffect)(function(){return(0,y.qV)(S.registerCommand(v.MK,Cn,v.KB),S.registerCommand(v.aR,Cn,v.KB))},[S,F,Cn]),[e,on]},Zn=function(){var i=useRef(null),o=useState(!1),e=_slicedToArray(o,2),l=e[0],d=e[1],S=useCallback(function(K){K.stopPropagation(),d(function(_){return!_})},[]);return useEffect(function(){var K=i.current;return K&&K.addEventListener("click",S),function(){K&&K.removeEventListener("click",S)}},[S]),[i,l,d]};function fn(s,i,o,e){return new RegExp((i?"(^|\\s|".concat(i,")("):"(^|\\s)(")+ne(s)+"((?:"+jn(s,o)+(e?zn(o):"")+"){0,"+Gn+"}))$")}function Nn(s,i,o,e,l){var d=fn(i,o,e,l).exec(s);if(d!==null){var S=d[1],K=d[2],_=d[3];if(K.length>0)return{leadOffset:d.index+S.length,matchingString:_,replaceableString:K}}return null}var Qn=function(i,o){var e=o.punctuation,l=o.preTriggerChars,d=o.allowSpaces,S=(0,t.useState)(null),K=f()(S,2),_=K[0],on=K[1],sn=(0,t.useCallback)(function(F){var Cn=Nn(F,i,l,e,d);if(Cn){var Tn=Cn.replaceableString,Sn=Cn.matchingString,Wn=Tn.lastIndexOf(Sn),Yn=Wn===-1?Tn:Tn.slice(0,Math.max(0,Wn))+Tn.slice(Math.max(0,Wn+Sn.length));if(on(Yn||null),Cn.replaceableString)return Cn}else on(null);return null},[l,d,e,i]);return{trigger:_,checkForMentionMatch:sn}},de=n(53649),T=n.n(de),Fn=n(47512),pe,Me,Oe,Pe=(0,Fn.kc)(function(s,i){var o=s.css,e=s.token,l=s.prefixCls,d=i.isSelected,S=i.isError,K=function(){return S?d?{background:e.colorErrorBgActive,border:e.colorErrorBorderHover,color:e.colorErrorTextActive}:{background:e.colorErrorBg,border:e.colorErrorBorder,color:e.colorErrorText}:d?{background:e.colorInfoBgHover,border:e.colorInfoBorder,color:e.colorInfoText}:{background:e.colorFillTertiary,border:"transparent",color:e.colorInfoText}},_=K(),on=_.background,sn=_.border,F=_.color;return{root:o(pe||(pe=T()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),e.fontFamilyCode,F,on,sn,e.borderRadius),text:o(Me||(Me=T()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),e.colorTextSecondary),error:o(Oe||(Oe=T()([`
        color: `,`;
      `])),e.colorErrorText)}}),Be=(0,t.memo)(function(s){var i=s.nodeKey,o=s.variable,e=Mn(),l=(0,p.g)(),d=f()(l,1),S=d[0],K=wn(i,E),_=f()(K,2),on=_[0],sn=_[1],F=e==null?void 0:e[o],Cn=Pe({isSelected:sn,isError:!F||!!F.error}),Tn=Cn.styles;(0,t.useEffect)(function(){if(!S.hasNodes([Ee]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[S]);var Sn=(0,x.jsx)(en.Z,{className:Tn.root,ref:on,children:(0,x.jsxs)(en.Z,{align:"center",gap:2,children:[(!F||F.error)&&(0,x.jsx)(yn.Z,{className:Tn.error,icon:V.Z}),(F==null?void 0:F.icon)&&(0,x.jsx)(en.Z,{children:F.icon}),(0,x.jsx)(en.Z,{className:Tn.text,gap:2,title:(F==null?void 0:F.label)||o,children:(0,x.jsx)("span",{children:(F==null?void 0:F.selectedLabel)||(F==null?void 0:F.label)||o})})]})});return F!=null&&F.error?(0,x.jsx)(g.Z,{title:F==null?void 0:F.error,children:Sn}):Sn}),Ee=function(s){Q()(o,s);var i=J()(o);function o(e,l){var d;return $()(this,o),d=i.call(this,l),C()(w()(d),"__variable",void 0),d.__variable=e,d}return Z()(o,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var l=document.createElement("div");return l.style.display="inline-flex",l.style.alignItems="center",l.style.verticalAlign="middle",l}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,x.jsx)(Be,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var l=this.getLatest();return l.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(l){return new o(l.__variable,l.__key)}},{key:"importJSON",value:function(l){var d=un(l.variable);return d}}]),o}(v.Ij);function un(s){return new Ee(s)}function m(s){return s instanceof Ee}var W=(0,t.memo)(function(s){var i=s.onInsert,o=s.onDelete,e=(0,p.g)(),l=f()(e,1),d=l[0];return(0,t.useEffect)(function(){if(!d.hasNodes([Ee]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,y.qV)(d.registerCommand(P,function(S){d.dispatchCommand(A,null);var K=un(S);return(0,v.od)([K]),i&&i(),!0},v.VN),d.registerCommand(E,function(){return o&&o(),!0},v.VN))},[d,i,o]),null});W.displayName="MentionNodePlugin";var D=(0,v.fA)("INSERT_MENTION_COMMAND"),gn=(0,v.fA)("DELETE_MENTION_COMMAND"),bn=(0,v.fA)("CLEAR_HIDE_MENU_TIMEOUT"),En=(0,v.fA)("UPDATE_MENTIONS_OPTIONS"),rn=function(i,o,e){if(i.isSimpleText())for(var l=i.getPreviousSibling(),d=i.getTextContent(),S=i,K;;){K=o(d);var _=K===null?"":d.slice(K.end);if(d=_,_===""){var on=S.getNextSibling();if((0,v.Gg)(on)){_=S.getTextContent()+on.getTextContent();var sn=o(_);if(sn===null){on.markDirty();return}else if(sn.start!==0)return}}else{var F=o(_);if(F!==null&&F.start===0)return}if(K===null)return;if(!(K.start===0&&(0,v.Gg)(l)&&l.isTextEntity())){var Cn=void 0;if(K.start===0){var Tn=S.splitText(K.end),Sn=f()(Tn,2);Cn=Sn[0],S=Sn[1]}else{var Wn=S.splitText(K.start,K.end),Yn=f()(Wn,3);Cn=Yn[1],S=Yn[2]}var ue=e(Cn);if(Cn.replace(ue),S==null)return}}};function ee(s){var i=s.split(`
`);return JSON.stringify({root:{children:i.map(function(o){return{children:[{detail:0,format:0,mode:"normal",style:"",text:o,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var $n=(0,t.memo)(function(s){var i=s.onInsert,o=(0,p.g)(),e=f()(o,1),l=e[0];(0,t.useEffect)(function(){if(!l.hasNodes([Ee]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[l]);var d=(0,t.useCallback)(function(_){i&&i();var on=_.getTextContent().slice(2,-2);return(0,v.U2)(un(on))},[i]),S=(0,t.useCallback)(function(_){var on=j.exec(_);if(on===null)return null;var sn=on.index,F=sn+on[0].length;return{end:F,start:sn}},[]),K=(0,t.useCallback)(function(_){return j.lastIndex=0,rn(_,S,d)},[d,S]);return(0,t.useEffect)(function(){return j.lastIndex=0,(0,y.qV)(l.registerNodeTransform(H,K))},[]),null}),An=n(99934),Un=n(64287),kn=n(30967),te=n(83606),Kn=function(s){Q()(o,s);var i=J()(o);function o(e){var l,d=e.label,S=e.value,K=e.data,_=e.icon,on=e.extraElement,sn=e.keywords,F=e.keyboardShortcut,Cn=e.disabled,Tn=e.onSelect,Sn=e.children,Wn=e.isChild;return $()(this,o),l=i.call(this,S),C()(w()(l),"label",void 0),C()(w()(l),"value",void 0),C()(w()(l),"title",void 0),C()(w()(l),"key",void 0),C()(w()(l),"icon",void 0),C()(w()(l),"extraElement",void 0),C()(w()(l),"keywords",void 0),C()(w()(l),"keyboardShortcut",void 0),C()(w()(l),"onSelect",void 0),C()(w()(l),"disabled",void 0),C()(w()(l),"data",void 0),C()(w()(l),"children",void 0),C()(w()(l),"isChild",void 0),l.value=S,l.label=d,l.title=d,l.key=S,l.keywords=sn||[],l.icon=_,l.extraElement=on,l.keyboardShortcut=F,l.onSelect=Tn.bind(w()(l)),l.disabled=Cn,l.data=K,l.isChild=Wn!=null?Wn:!1,l.children=Sn==null?void 0:Sn.map(function(Yn){return new o(r()(r()({},Yn),{},{isChild:!0}))}),l}return Z()(o)}(An.n),re=function s(i,o){var e;return i.children=(e=i.children)===null||e===void 0?void 0:e.filter(function(l){if(!l.children)return o(l);var d=s(l,o);return o(l)||(d.children||[]).length>0}),i},On=function(i,o){var e=(0,p.g)(),l=f()(e,1),d=l[0],S=(0,t.useCallback)(function(_){var on,sn=new RegExp((0,te.Z)(o),"i");return sn.test(_.label)||((on=_.keywords)===null||on===void 0?void 0:on.some(function(F){return sn.test(F)}))||!1},[o]),K=(0,t.useMemo)(function(){var _=function sn(F){var Cn=r()(r()({},F),{},{children:void 0,onSelect:function(){d.dispatchCommand(P,F.value)}});return F.children&&(Cn.children=F.children.map(function(Tn){return sn(Tn)})),Cn},on=i.map(function(sn){return new Kn(_(sn))});return o?on.map(function(sn){return sn.children?re(sn,S):sn}).filter(function(sn){return S(sn)||(sn.children||[]).length>0}):on},[i,o,d,S]);return{options:K}},ie=n(78962),le=n(94729),oe,Xn,ce,ve,ae,_n,Hn,xn=(0,Fn.kc)(function(s,i){var o=s.css,e=s.token,l=s.prefixCls,d=i.isSelected,S=i.disabled,K=o(oe||(oe=T()([`
      background-color: `,`;
    `])),e.colorFillSecondary);return{anchor:o(Xn||(Xn=T()([`
        z-index: 9999;
      `]))),menuEmpty:o(ce||(ce=T()([`
        padding: `,`px;
      `])),e.padding),menuOverlay:o(ve||(ve=T()([`
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
      `])),e.marginXXS,e.paddingXXS,e.colorBgElevated,e.borderRadius,e.boxShadow,l),menuItem:o(ae||(ae=T()([`
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
      `])),S?"not-allowed":"pointer",S?"none":"all",e.paddingXS,e.borderRadius,S?e.colorTextDisabled:e.colorText,e.fontSize,d&&K,K),menuItemIcon:o(_n||(_n=T()([`
        color: `,`;
      `])),e.colorInfoText),menuItemLabel:o(Hn||(Hn=T()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),pn=le.C.Text,cn=(0,t.memo)(function(s){var i=s.index,o=s.isSelected,e=s.onClick,l=s.onMouseEnter,d=s.option,S=s.queryString,K=s.showIcon,_=K===void 0?!0:K,on=xn({isSelected:o,disabled:d.disabled}),sn=on.styles,F=d.label,Cn=(0,t.useMemo)(function(){var Yn=F,ue="",We="";if(S){var Fe=new RegExp((0,te.Z)(S),"i"),Le=Fe.exec(d.label);Le&&(Yn=F.slice(0,Math.max(0,Le.index)),ue=Le[0],We=F.slice(Math.max(0,Le.index+Le[0].length)))}return{before:Yn,middle:ue,after:We}},[d.label,S,F]),Tn=Cn.before,Sn=Cn.middle,Wn=Cn.after;return(0,x.jsxs)(en.Z,{align:"center",className:sn.menuItem,gap:4,onClick:function(){return e==null?void 0:e(i,d)},onMouseEnter:function(){return l==null?void 0:l(i,d)},ref:d.setRefElement,tabIndex:-1,children:[_&&(0,x.jsx)(en.Z,{className:sn.menuItemIcon,children:d.icon}),(0,x.jsxs)("div",{className:sn.menuItemLabel,title:d.label,children:[Tn,(0,x.jsx)(pn,{mark:!0,children:Sn}),Wn]}),(0,x.jsx)(en.Z,{children:d.extraElement})]},d.key)});cn.displayName="MentionMenuItem";var Bn=(0,t.memo)(function(s){var i=s.selectedIndex,o=s.options,e=s.onClick,l=s.onMouseEnter,d=s.queryString,S=xn({}),K=S.styles;return(0,x.jsxs)(x.Fragment,{children:[o.length===0&&(0,x.jsx)(ie.Z,{className:K.menuEmpty,image:ie.Z.PRESENTED_IMAGE_SIMPLE}),o.map(function(_,on){return(0,x.jsx)(cn,{index:on,isSelected:i===on,onClick:e,onMouseEnter:l,option:_,queryString:d},_.key)})]})}),Pn=(0,t.memo)(function(s){var i=s.overlayClassName,o=s.triggers,e=s.options,l=e===void 0?[]:e,d=s.allowSpaces,S=d===void 0?!0:d,K=s.punctuation,_=K===void 0?In:K,on=s.preTriggerChars,sn=on===void 0?Dn:on,F=s.onSelect,Cn=xn({}),Tn=Cn.cx,Sn=Cn.styles,Wn=(0,p.g)(),Yn=f()(Wn,1),ue=Yn[0],We=Qn(o,{punctuation:_,preTriggerChars:sn,allowSpaces:S}),Fe=We.trigger,Le=We.checkForMentionMatch,Xe=(0,t.useState)(null),Ve=f()(Xe,2),De=Ve[0],Je=Ve[1],Ye=On(l,De),je=Ye.options,Ge=(0,t.useCallback)(function(qn,ye,Qe,Ie){F==null||F(qn,Fe,De),ue.update(function(){ye&&qn!==null&&qn!==void 0&&qn.key&&ye.remove(),qn!=null&&qn.onSelect&&qn.onSelect(Ie),Qe()})},[ue,F,De,Fe]),fe=(0,t.useCallback)(function(qn){var ye=qn.selectedIndex,Qe=qn.selectOptionAndCleanUp;return(0,x.jsx)(b.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,x.jsx)(Un.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Ne,ge){var be=ge.nativeEvent;be.stopPropagation(),ue.dispatchCommand(A,{})},onSelect:function(Ne,ge){Qe(ge.node)},titleRender:function(Ne){var ge;return(0,x.jsx)(cn,{isSelected:((ge=je[ye])===null||ge===void 0?void 0:ge.value)===Ne.value,option:Ne,queryString:De,showIcon:!Ne.isChild})},treeData:je})})},[je,ue,De]),ze=(0,t.useCallback)(function(qn,ye,Qe){var Ie=ye.selectedIndex,Ne=ye.selectOptionAndCleanUp,ge=ye.setHighlightedIndex;return qn.current?kn.createPortal((0,x.jsx)("div",{className:Tn(Sn.menuOverlay,i),role:"menu",children:je.some(function(be){return(be.children||[]).length>0})?fe(ye):(0,x.jsx)(Bn,{onClick:function(Ue,$e){$e.disabled||(ge(Ue),Ne($e))},onMouseEnter:function(Ue,$e){$e.disabled||ge(Ue)},options:je,queryString:De,selectedIndex:Ie})}),qn.current):null},[Tn,je,i,De,fe,Sn.menuOverlay]);return(0,x.jsx)(An.HQ,{anchorClassName:Sn.anchor,menuRenderFn:ze,onQueryChange:Je,onSelectOption:Ge,options:je,triggerFn:Le})}),Vn,Jn,Ce,Te,Ae,he,xe,Se,Re=32,Ke=22,hn=function(i){return Re+Math.max(i-1,0)*Ke},me=(0,Fn.kc)(function(s,i){var o=s.css,e=s.token,l=s.prefixCls,d=i.autoSize;return{wrapper:o(Vn||(Vn=T()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:o(Jn||(Jn=T()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Re,e.fontSize,Re,e.colorTextPlaceholder),root:o(Ce||(Ce=T()([`
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
      `])),e.colorBorder,e.borderRadius,e.colorText,e.fontSize,e.fontFamily,(d==null?void 0:d.minRows)&&o(Te||(Te=T()([`
          min-height: `,`px;
        `])),hn(d.minRows)),(d==null?void 0:d.maxRows)&&o(Ae||(Ae=T()([`
          max-height: `,`px;
        `])),hn(d.maxRows)),e.motionDurationMid,e.colorPrimaryBorder,Ke),filled:o(he||(he=T()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),e.colorFillTertiary,e.colorFillSecondary,e.colorBgBase),borderless:o(xe||(xe=T()([`
        background: transparent;
        border: none;
      `]))),disabled:o(Se||(Se=T()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),e.colorTextDisabled,e.colorBgContainerDisabled)}}),se=function(i){var o=i.className,e=i.classNames,l=i.placeholder,d=i.style,S=i.value,K=i.defaultValue,_=i.readOnly,on=_===void 0?!1:_,sn=i.disabled,F=i.onChange,Cn=i.onBlur,Tn=i.onFocus,Sn=i.variant,Wn=Sn===void 0?"outlined":Sn,Yn=i.options,ue=Yn===void 0?[]:Yn,We=i.autoSize,Fe=i.triggers,Le=Fe===void 0?["@"]:Fe,Xe=i.allowSpaces,Ve=i.punctuation,De=i.preTriggerChars,Je=i.onSelect,Ye=b.ZP.useConfig(),je=Ye.componentDisabled,Ge=me({autoSize:We}),fe=Ge.styles,ze=Ge.cx,qn=(0,t.useMemo)(function(){return sn!=null?sn:je},[je,sn]),ye=(0,t.useMemo)(function(){return!on&&!qn},[qn,on]),Qe=(0,t.useMemo)(function(){return{namespace:"mentions",nodes:[H,{replace:v.R2,with:function(be){return new H(be.__text)}},Ee],editorState:ee(S||K||""),onError:function(be){throw be}}},[]),Ie=function(be){var Ue=be.read(function(){return(0,v.Gv)().getTextContent()});F==null||F(Ue.replaceAll(`

`,`
`))},Ne=(0,t.useMemo)(function(){var ge=function be(Ue,$e){return Ue.reduce(function(He,Ze){if(He[Ze.value]=Ze,He[Ze.value].icon||(He[Ze.value].icon=$e),Ze.children&&Ze.children.length>0){var we=be(Ze.children,Ze.icon);Object.assign(He,we)}return He},{})};return ge(ue)},[ue]);return B.j?(0,x.jsx)(M.R,{initialConfig:r()(r()({},Qe),{},{editable:ye}),children:(0,x.jsx)(dn,{value:{optionsMap:Ne},children:(0,x.jsxs)("div",{className:ze(fe.wrapper,e==null?void 0:e.wrapper),children:[(0,x.jsx)(c.B,{ErrorBoundary:I.g,contentEditable:(0,x.jsx)(U.f,{className:ze(C()(C()(C()(C()({},fe.root,!0),fe.filled,Wn==="filled"),fe.borderless,Wn==="borderless"),fe.disabled,qn),o),style:d||{}}),placeholder:(0,x.jsx)("div",{className:fe.placeholder,children:l||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),ye&&(0,x.jsx)(Pn,{allowSpaces:Xe,onSelect:Je,options:ue,overlayClassName:e==null?void 0:e.menuOverlay,preTriggerChars:De,punctuation:Ve,triggers:Le}),(0,x.jsx)(W,{}),(0,x.jsx)($n,{}),(0,x.jsx)(a.e,{}),(0,x.jsx)(L.$,{onChange:Ie}),(0,x.jsx)(h,{onBlur:Cn,onFocus:Tn}),(0,x.jsx)(mn,{editable:ye})]})})}):(0,x.jsxs)("div",{className:ze(fe.wrapper,e==null?void 0:e.wrapper),children:[(0,x.jsx)("div",{className:ze(C()(C()(C()(C()({},fe.root,!0),fe.filled,Wn==="filled"),fe.borderless,Wn==="borderless"),fe.disabled,qn),o),style:d||{}}),(0,x.jsx)("div",{className:fe.placeholder,children:l||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(Rn,Y,n){n.d(Y,{u:function(){return p}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(51697),U=n(75271),I="yunti-ui",a=n(53649),L=n.n(a),c=n(47512),b,v,t=(0,c.kc)(function(P,E){var A=P.css,j=P.prefixCls,h=E.borderd,N=h===void 0?!0:h,$=E.footer,O=$===null||Array.isArray($)&&$.length===0,Z=A(b||(b=L()([`
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
    `])),j,j,O?0:"40px",j,O?0:"1px");return{custom:A(v||(v=L()([`
        `,`
      `])),N&&Z)}},{hashPriority:"low"}),B=n(52676),R=["className","borderd"],f=function(E){var A=E.className,j=E.borderd,h=j===void 0?!0:j,N=C()(E,R),$=t(r()({borderd:h},N)),O=$.styles,Z=$.cx;return(0,B.jsx)(M.Z,r()(r()({},N),{},{className:Z(O.custom,"".concat(I,"-modal"),A)}))},p=f;p.useModal=M.Z.useModal,p.destroyAll=M.Z.destroyAll,p.config=M.Z.config,p._InternalPanelDoNotUseOrYouWillBeFired=M.Z._InternalPanelDoNotUseOrYouWillBeFired,p.info=M.Z.info,p.success=M.Z.success,p.error=M.Z.error,p.warning=M.Z.warning,p.warn=M.Z.warn,p.confirm=M.Z.confirm;var y=null},81321:function(Rn,Y,n){n.d(Y,{ZM:function(){return Pe},Hu:function(){return Z},Xq:function(){return Ee},rE:function(){return Be}});var k=n(26068),r=n.n(k),X=n(48305),C=n.n(X),M=n(67825),U=n.n(M),I=n(33592),a=n(75271),L=n(94456),c=n(60477),b=n(71170),v=n(32328),t=n(87449),B=n(28485),R=n(90228),f=n.n(R),p=n(87999),y=n.n(p),P=n(97524),E=n(50279),A=n(25298),j=n.n(A),h=n(17069),N=n.n(h),$=n(82092),O=n.n($),Z=function(){function un(){j()(this,un),O()(this,"methodMap",void 0),O()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return N()(un,[{key:"registerMethod",value:function(W,D){this.methodMap[W]=D}},{key:"call",value:function(W){for(var D,gn,bn=arguments.length,En=new Array(bn>1?bn-1:0),rn=1;rn<bn;rn++)En[rn-1]=arguments[rn];return(D=(gn=this.methodMap)[W])===null||D===void 0?void 0:D.call.apply(D,[gn].concat(En))}},{key:"updateMeta",value:function(W){Object.assign(this.meta,W)}},{key:"getMeta",value:function(){return Object.freeze(r()({},this.meta))}}]),un}(),q="__base_monaco_editor_controller__",z=B.j&&window;z&&!z[q]&&(z[q]=new Z);var vn=z[q],nn=function(){var un,m;return function(){var W=y()(f()().mark(function D(gn){var bn;return f()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!un||!(0,E.Z)(m,gn))){rn.next=7;break}return bn=Object.keys(gn||{}).length>0,P.Z.config(bn?gn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),rn.next=5,P.Z.init();case 5:un=rn.sent,m=gn;case 7:return rn.abrupt("return",un);case 8:case"end":return rn.stop()}},D)}));return function(D){return W.apply(this,arguments)}}()}(),tn=function(m){return m?P.Z.config(m):P.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),P.Z.init()};function Q(un){var m=Object.keys(un||{}).length>0,W=m?un:void 0;return vn.getMeta().singleton?nn(W):tn(W)}function u(un){controller.updateMeta(un)}var J=B.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",H=J==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",an={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},mn={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function ln(un){var m=(0,a.useRef)();return(0,a.useEffect)(function(){m.current=un},[un]),m.current}function w(un,m,W,D){if(D){var gn=un.editor.getModel(un.Uri.parse(D));if(gn)return gn}return un.editor.createModel(m,W,D?un.Uri.parse(D):void 0)}var yn=function(m,W){var D=W.editorDidMount,gn=W.editorWillMount,bn=W.theme,En=W.value,rn=W.path,ee=W.language,$n=W.saveViewState,An=W.defaultValue,Un=W.enhancers,kn=(0,a.useState)(!1),te=C()(kn,2),Kn=te[0],re=te[1],On=(0,a.useState)(!1),ie=C()(On,2),le=ie[0],oe=ie[1],Xn=(0,a.useState)(!1),ce=C()(Xn,2),ve=ce[0],ae=ce[1],_n=(0,a.useRef)(An),Hn=(0,a.useRef)(En),xn=(0,a.useRef)(ee||"text"),pn=(0,a.useRef)(rn),cn=ln(rn),Bn=(0,a.useRef)(W.requireConfig),Pn=(0,a.useRef)(W.options),Vn=(0,a.useRef)(),Jn=(0,a.useRef)(),Ce=(0,a.useRef)(),Te=(0,a.useRef)(m),Ae=(0,a.useRef)(),he=(0,a.useRef)(),xe=(0,a.useRef)(!1),Se=(0,a.useRef)(new Map),Re=(0,a.useRef)({});(0,a.useEffect)(function(){Re.current.enhancers=Un},[Un]),(0,a.useEffect)(function(){Ae.current=D},[D]),(0,a.useEffect)(function(){he.current=gn},[gn]),(0,a.useEffect)(function(){Hn.current=En},[En]),(0,a.useEffect)(function(){xn.current=ee},[ee]),(0,a.useEffect)(function(){_n.current=An},[An]),(0,a.useEffect)(function(){ae(!0),Q(Bn.current).then(function(hn){var me;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Vn.current=hn;try{var se;(se=he.current)===null||se===void 0||se.call(he,hn)}catch(K){}if(Ce.current){var s;if(Te.current==="single"){var i,o,e=w(hn,(i=(o=Hn.current)!==null&&o!==void 0?o:_n.current)!==null&&i!==void 0?i:"",xn.current,pn.current);s=hn.editor.create(Ce.current,r()(r()({automaticLayout:!0},an),Pn.current)),s.setModel(e)}else{var l=hn.editor.createModel(Hn.current,xn.current),d=hn.editor.createModel(Hn.current,xn.current);s=hn.editor.createDiffEditor(Ce.current,r()(r()({automaticLayout:!0},mn),Pn.current)),s.setModel({original:l,modified:d})}Jn.current=s,(me=Re.current.enhancers)===null||me===void 0||me.forEach(function(K){return K(hn,s)});try{var S;(S=Ae.current)===null||S===void 0||S.call(Ae,hn,s)}catch(K){}xe.current||re(!0)}}).catch(function(hn){console.error("Monaco Editor Load Error!",hn)}).then(function(){xe.current||ae(!1)})},[]),(0,a.useEffect)(function(){var hn;Kn&&((hn=Vn.current)===null||hn===void 0||hn.editor.setTheme(bn))},[Kn,bn]),(0,a.useEffect)(function(){if(Kn){var hn=m==="diff"?Jn.current.getModifiedEditor():Jn.current;hn==null||hn.onDidFocusEditorText(function(){xe.current||oe(!0)}),hn==null||hn.onDidBlurEditorText(function(){xe.current||oe(!1)})}},[Kn,m]),(0,a.useEffect)(function(){return function(){xe.current=!0}},[]),(0,a.useEffect)(function(){var hn,me,se;if(Kn&&!(m!=="diff"&&rn)){var s=m==="diff"?Jn.current.getModifiedEditor():Jn.current,i=(hn=En!=null?En:_n.current)!==null&&hn!==void 0?hn:"",o=(me=Vn.current)===null||me===void 0?void 0:me.editor.EditorOption.readOnly;o&&s!==null&&s!==void 0&&(se=s.getOption)!==null&&se!==void 0&&se.call(s,o)?s==null||s.setValue(i):En!==(s==null?void 0:s.getValue())&&(s==null||s.executeEdits("",[{range:s==null?void 0:s.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),s==null||s.pushUndoStop())}},[Kn,rn,m,En]),(0,a.useEffect)(function(){var hn,me;if(Kn&&m!=="diff"&&rn!==cn){var se=w(Vn.current,(hn=Hn.current)!==null&&hn!==void 0?hn:_n.current,xn.current,rn),s=Jn.current;Hn.current!==null&&Hn.current!==void 0&&se.getValue()!==Hn.current&&se.setValue(Hn.current),se!==((me=Jn.current)===null||me===void 0?void 0:me.getModel())&&($n&&Se.current.set(cn,s.saveViewState()),s.setModel(se),$n&&s.restoreViewState(Se.current.get(rn)))}},[Kn,En,rn,cn,m,$n]);var Ke=Jn;return{isEditorReady:Kn,focused:le,loading:ve,containerRef:Ce,monacoRef:Vn,editorRef:Ke,valueRef:Hn}},en=function(m){var W=(0,a.useState)(!1),D=C()(W,2),gn=D[0],bn=D[1],En=function(){if(gn){bn(!1),m==null||m.updateOptions(r()(r()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!1}})),m==null||m.layout();return}bn(!0),m==null||m.updateOptions(r()(r()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!0}})),m==null||m.layout()};return{isFullScreen:gn,fullScreen:En}},g=n(53649),V=n.n(g),x=n(47512),G,dn,Mn,Ln,In,Dn,ne,jn,zn,Gn,wn,Zn=(0,x.kc)(function(un,m){var W=un.css,D=un.token,gn=un.prefixCls,bn=m.minimapEnabled,En=bn===void 0?!1:bn,rn=m.isFullScreen,ee=rn===void 0?!1:rn,$n=m.diff,An=$n===void 0?!1:$n,Un=m.variant,kn=Un===void 0?"outlined":Un,te=(0,x.F4)(G||(G=V()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),Kn=function(){switch(kn){case"outlined":return D.colorBgBase;case"filled":return D.colorFillTertiary;default:return"transparent"}};return{base:W(dn||(dn=V()([`
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
      `])),Kn(),kn==="outlined"?D.colorBorder:"transparent",D.borderRadius,kn==="outlined"?D.colorPrimaryHover:"transparent",kn==="filled"&&W(Mn||(Mn=V()([`
            background-color: `,`;
          `])),D.colorFillSecondary),kn==="filled"&&W(Ln||(Ln=V()([`
            background-color: `,`;
          `])),D.colorBgBase),kn!=="borderless"&&W(In||(In=V()([`
            border-color: `,`;
          `])),D.colorPrimaryActive),ee&&W(Dn||(Dn=V()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!ee&&W(ne||(ne=V()([`
              background-color: transparent;
            `]))),D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius,D.borderRadius-1,D.borderRadius-1,D.colorErrorText,D.colorErrorBg),fullScreenBtn:W(jn||(jn=V()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),gn,D.colorTextSecondary,ee?W(zn||(zn=V()([`
                z-index: 9999;
                right: `,`px;
              `])),An?64:138):W(Gn||(Gn=V()([`
                right: `,`px;
              `])),En||An?64:20)),loading:W(wn||(wn=V()([`
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
      `])),D.fontSizeSM,D.colorTextTertiary,te)}},{hashPriority:"low"}),fn=n(52676);function Nn(){}var Qn=function(m){var W,D=m.onChange,gn=m.enableOutline,bn=m.width,En=m.height,rn=m.language,ee=m.supportFullScreen,$n=(0,a.useRef)(D),An=yn("single",m),Un=An.isEditorReady,kn=An.focused,te=An.loading,Kn=An.containerRef,re=An.monacoRef,On=An.editorRef,ie=An.valueRef,le=(0,a.useRef)(),oe=en(On==null?void 0:On.current),Xn=oe.isFullScreen,ce=oe.fullScreen,ve=Zn({isFullScreen:Xn,minimapEnabled:(W=m.options)===null||W===void 0||(W=W.minimap)===null||W===void 0?void 0:W.enabled,variant:m.variant}),ae=ve.cx,_n=ve.styles,Hn=ae(_n.base,m.className,{"ve-focused":kn,"ve-outline":gn}),xn=(0,a.useMemo)(function(){return{width:bn,height:En}},[bn,En]);return(0,a.useEffect)(function(){$n.current=D},[D]),(0,a.useEffect)(function(){if(Un){var pn,cn=On.current;(pn=le.current)===null||pn===void 0||pn.dispose(),le.current=cn==null?void 0:cn.onDidChangeModelContent(function(Bn){var Pn,Vn=cn==null||(Pn=cn.getModel())===null||Pn===void 0?void 0:Pn.getValue();if(ie.current!==Vn){var Jn;(Jn=$n.current)===null||Jn===void 0||Jn.call($n,Vn,Bn)}})}},[On,Un,le,ie]),(0,a.useEffect)(function(){return function(){var pn,cn,Bn,Pn=On.current;(pn=le.current)===null||pn===void 0||pn.dispose(),Pn==null||(cn=Pn.getModel())===null||cn===void 0||cn.dispose(),(Bn=On.current)===null||Bn===void 0||Bn.dispose()}},[On]),(0,a.useEffect)(function(){var pn;if(Un){var cn=(pn=On.current)===null||pn===void 0?void 0:pn.getModel();if(cn){var Bn;(Bn=re.current)===null||Bn===void 0||Bn.editor.setModelLanguage(cn,rn)}}},[On,Un,rn,re]),(0,fn.jsxs)("div",{className:Hn,style:m.style,children:[te&&(0,fn.jsx)("span",{className:ae(_n.loading,"loading"),children:H}),(0,fn.jsx)("div",{className:"react-monaco-editor-container",ref:Kn,style:xn,children:ee&&(0,fn.jsx)(b.ZP,{className:_n.fullScreenBtn,icon:(0,fn.jsx)(c.Z,{icon:Xn?v.Z:t.Z}),onClick:ce,size:"small",type:"text"})})]})},de=function(m){var W=m.enableOutline,D=m.width,gn=m.height,bn=m.language,En=m.onChange,rn=m.original,ee=m.supportFullScreen,$n=(0,a.useRef)(En),An=yn("diff",m),Un=An.isEditorReady,kn=An.focused,te=An.loading,Kn=An.containerRef,re=An.monacoRef,On=An.editorRef,ie=An.valueRef,le=en(),oe=le.isFullScreen,Xn=le.fullScreen,ce=Zn({isFullScreen:oe,diff:!0,variant:m.variant}),ve=ce.cx,ae=ce.styles,_n=ve(ae.base,m.className,{"ve-focused":kn,"ve-outline":W}),Hn=(0,a.useMemo)(function(){return{width:D,height:gn}},[D,gn]);return(0,a.useEffect)(function(){$n.current=En},[En]),(0,a.useEffect)(function(){var xn;if(Un){(xn=On.current.getModel())===null||xn===void 0||xn.original.setValue(rn!=null?rn:"");var pn=On.current.getModel()||{},cn=pn.modified;cn==null||cn.onDidChangeContent(function(Bn){var Pn=cn.getValue();if(ie.current!==Pn){var Vn;(Vn=$n.current)===null||Vn===void 0||Vn.call($n,Pn,Bn)}})}},[On,Un,rn,ie]),(0,a.useEffect)(function(){return function(){var xn,pn,cn;(xn=On.current)===null||xn===void 0||(xn=xn.getModel())===null||xn===void 0||(xn=xn.original)===null||xn===void 0||xn.dispose(),(pn=On.current)===null||pn===void 0||(pn=pn.getModel())===null||pn===void 0||(pn=pn.modified)===null||pn===void 0||pn.dispose(),(cn=On.current)===null||cn===void 0||cn.dispose()}},[On]),(0,a.useEffect)(function(){var xn,pn,cn;if(Un){var Bn=((xn=On.current)===null||xn===void 0?void 0:xn.getModel())||{},Pn=Bn.original,Vn=Bn.modified;(pn=re.current)===null||pn===void 0||pn.editor.setModelLanguage(Pn,bn),(cn=re.current)===null||cn===void 0||cn.editor.setModelLanguage(Vn,bn)}},[On,Un,bn,re]),(0,fn.jsxs)("div",{className:_n,style:m.style,children:[te&&(0,fn.jsx)("span",{className:ve(ae.loading,"loading"),children:H}),(0,fn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Kn,style:Hn,children:ee&&(0,fn.jsx)(b.ZP,{className:ae.fullScreenBtn,icon:(0,fn.jsx)(c.Z,{icon:oe?v.Z:t.Z}),onClick:Xn,size:"small",type:"text"})})]})},T=Object.assign(de,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:an,editorDidMount:Nn,editorWillMount:Nn,onChange:Nn,requireConfig:{}}}),Fn=Object.assign(Qn,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:an,editorDidMount:Nn,editorWillMount:Nn,onChange:Nn,requireConfig:{}},MonacoDiffEditor:T}),pe=null,Me=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Oe=["inlineView","options"],Pe=function(m){var W=m.type,D=W===void 0?"single":W,gn=m.editorDidMount,bn=m.readOnly,En=bn===void 0?!1:bn,rn=m.lineNumbers,ee=rn===void 0?"on":rn,$n=m.wordWrap,An=$n===void 0?"off":$n,Un=m.contextmenu,kn=Un===void 0?!0:Un,te=m.theme,Kn=m.minimapEnabled,re=Kn===void 0?!1:Kn,On=m.version,ie=On===void 0?"0.45.0":On,le=m.requireConfig,oe=le===void 0?{}:le,Xn=m.options,ce=m.className,ve=m.supportFullScreen,ae=U()(m,Me),_n=(0,a.useRef)(gn);(0,a.useEffect)(function(){_n.current=gn},[gn]);var Hn=(0,I.r)(),xn=Hn.isDarkMode,pn=(0,a.useMemo)(function(){return te||(xn?"vs-dark":"vs")},[xn,te]),cn=(0,a.useState)(),Bn=C()(cn,2),Pn=Bn[0],Vn=Bn[1],Jn=(0,a.useCallback)(function(he,xe){var Se;Vn(xe),(Se=_n.current)===null||Se===void 0||Se.call(_n,he,xe)},[]),Ce=(0,a.useMemo)(function(){var he=Object.assign({},Xn,{readOnly:En,lineNumbers:ee,wordWrap:An,contextmenu:kn,minimap:re===void 0?Xn==null?void 0:Xn.minimap:Object.assign({},Xn==null?void 0:Xn.minimap,{enabled:re})});return Pn==null||Pn.updateOptions(he),he},[Xn,En,ee,An,kn,re,Pn]),Te=(0,L.nc)(),Ae=(0,a.useMemo)(function(){return Object.assign({},oe,{paths:r()({vs:Te({path:"min/vs",pkg:"monaco-editor",version:ie})},oe.paths)})},[Te,oe,ie]);return D!=="diff"?(0,fn.jsx)(Fn,r()({className:ce,editorDidMount:Jn,options:Ce,requireConfig:Ae,supportFullScreen:Pn&&ve,theme:pn},ae)):(0,fn.jsx)(Fn.MonacoDiffEditor,r()({className:ce,editorDidMount:Jn,options:Ce,requireConfig:Ae,supportFullScreen:Pn&&ve,theme:pn},ae))},Be=function(m){return(0,fn.jsx)(Pe,r()(r()({},m),{},{type:"single"}))},Ee=function(m){var W=m.inlineView,D=W===void 0?"off":W,gn=m.options,bn=U()(m,Oe);return(0,fn.jsx)(Pe,r()(r()({options:Object.assign({useInlineViewWhenSpaceIsLimited:D==="on"||D==="auto",renderSideBySide:D==="off"||D==="auto"},gn)},bn),{},{type:"diff"}))}},25777:function(Rn,Y,n){n.d(Y,{W:function(){return vn}});var k=n(26068),r=n.n(k),X=n(15558),C=n.n(X),M=n(48305),U=n.n(M),I=n(67825),a=n.n(I),L=n(60477),c=n(83293),b=n(44923),v=n(46847),t=n(82338),B=n(2405),R=n(75271),f=n(53649),p=n.n(f),y=n(47512),P,E,A,j,h,N=function(tn){switch(tn){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},$=(0,y.kc)(function(nn,tn){var Q=nn.css,u=nn.token,J=nn.prefixCls,H=tn.disabled,an=tn.size,mn=N(an),ln=mn.cardWidth;return{option:Q(P||(P=p()([`
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
      `])),u.colorBorder,u.borderRadius,H?"not-allowed":"pointer",u.padding,u.motionDurationFast,ln,H&&Q(E||(E=p()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),u.colorBgContainerDisabled,J,u.colorTextDisabled,J,u.colorTextDisabled),!H&&Q(A||(A=p()([`
          &:hover {
            border-color: `,`;
          }
        `])),u.colorPrimaryBorderHover),J),optionSelected:Q(j||(j=p()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),u.colorPrimary,u.colorPrimaryActive),check:Q(h||(h=p()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),u.marginXS,u.marginXS,u.colorPrimary)}}),O=n(52676),Z=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],q=c.Z.Text,z=c.Z.Paragraph,vn=R.forwardRef(function(nn,tn){var Q=nn.defaultValue,u=nn.value,J=nn.onChange,H=nn.multiple,an=H===void 0?!1:H,mn=nn.disabled,ln=mn===void 0?!1:mn,w=nn.options,yn=w===void 0?[]:w,en=nn.classNames,g=nn.styles,V=nn.size,x=V===void 0?"middle":V,G=nn.optionRender,dn=a()(nn,Z),Mn=(0,R.useMemo)(function(){return yn.some(function(T){return!!T.img||!!T.icon})},[yn]),Ln=$({disabled:ln,size:x}),In=Ln.cx,Dn=Ln.styles,ne=(0,R.useMemo)(function(){return N(x)},[x]),jn=ne.imgHeight,zn=(0,R.useCallback)(function(T){return!an||Array.isArray(T)?T:T===void 0?[]:[T]},[an]),Gn=(0,B.C8)(zn(Q),{defaultValue:zn(Q),value:u,onChange:J}),wn=U()(Gn,2),Zn=wn[0],fn=wn[1],Nn=(0,R.useCallback)(function(T){if(!ln){if(!an){fn(T);return}if(Zn.includes(T)){fn(Zn.filter(function(Fn){return Fn!==T}));return}fn([].concat(C()(Zn),[T]))}},[Zn,ln,an,fn]),Qn=(0,R.useCallback)(function(T){return an?Zn.includes(T):Zn===T},[Zn,an]),de=(0,R.useCallback)(function(T,Fn){var pe=Qn(T.value),Me=(0,O.jsxs)(b.Z,{align:Mn?"center":"flex-start",className:In(Dn.option,pe&&Dn.optionSelected,en==null?void 0:en.card),gap:"small",onClick:function(){return Nn(T.value)},style:r()(r()({},g==null?void 0:g.card),T.style),vertical:!0,children:[Mn&&(0,O.jsx)(v.C,{className:en==null?void 0:en.icon,icon:T.icon,shape:"square",size:jn,src:T.img,style:r()(r()({},g==null?void 0:g.icon),T.iconStyle)}),T.label&&pe&&(0,O.jsx)(q,{ellipsis:!0,strong:!0,children:T.label}),T.label&&!pe&&(0,O.jsx)(q,{ellipsis:!0,children:T.label}),!Mn&&T.description&&(0,O.jsx)(z,{ellipsis:{rows:2},type:"secondary",children:T.description}),pe&&(0,O.jsx)(L.Z,{className:Dn.check,icon:t.Z})]},T.value);return G?G(Me,T,Fn):Me},[en==null?void 0:en.card,en==null?void 0:en.icon,In,jn,Mn,Qn,Nn,G,Dn.check,Dn.option,Dn.optionSelected,g==null?void 0:g.card,g==null?void 0:g.icon]);return(0,O.jsx)(b.Z,r()(r()({gap:"large",ref:tn,wrap:!0},dn),{},{children:yn.map(function(T,Fn){return de(T,Fn)})}))})},66269:function(Rn,Y,n){n.d(Y,{a:function(){return b}});var k=n(26068),r=n.n(k),X=n(48305),C=n.n(X),M=n(26582),U=n(68526),I=n(27896),a=n(96965),L=n(75271),c=n(52676),b=function(t){var B=t.value,R=t.defaultValue,f=t.min,p=f===void 0?0:f,y=t.max,P=t.step,E=t.gutter,A=E===void 0?16:E,j=t.sliderCol,h=j===void 0?{span:12}:j,N=t.inputCol,$=N===void 0?{span:5}:N,O=t.addonAfter,Z=t.addonBefore,q=t.placeholder,z=t.onChange,vn=t.style,nn=t.className,tn=t.sliderProps,Q=tn===void 0?{}:tn,u=t.inputProps,J=u===void 0?{}:u,H=(0,L.useState)(),an=C()(H,2),mn=an[0],ln=an[1],w=function(en){Number.isNaN(en)||(ln(en),z==null||z(en))};return(0,c.jsxs)(M.Z,{className:nn,gutter:A,style:vn,children:[(0,c.jsx)(U.Z,r()(r()({},h),{},{children:(0,c.jsx)(I.Z,r()(r()({},Q),{},{defaultValue:R,max:y,min:p,onChange:w,step:P,value:B!=null?B:mn}))})),(0,c.jsx)(U.Z,r()(r()({},$),{},{children:(0,c.jsx)(a.Z,r()(r()({},J),{},{addonAfter:O,addonBefore:Z,defaultValue:R,max:y,min:p,onChange:w,placeholder:q,step:P,value:B!=null?B:mn}))}))]})}},56482:function(Rn,Y,n){n.d(Y,{N:function(){return R}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(97912),U=n(75271),I=n(79213),a=n(53649),L=n.n(a),c=n(47512),b,v=(0,c.kc)(function(f){var p=f.css,y=f.token,P=f.prefixCls;return{table:p(b||(b=L()([`
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
    `])),P,y.colorTextTertiary)}}),t=n(52676),B=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],R=function(p){var y=p.rootStyle,P=p.rootClassName,E=p.icon,A=p.title,j=p.variant,h=p.defaultActive,N=p.extra,$=p.className,O=C()(p,B),Z=v(),q=Z.cx,z=Z.styles;return(0,t.jsx)(I.w,{className:P,style:y,icon:E,title:A,variant:j,defaultActive:h,extra:N,children:(0,t.jsx)(M.Z,r()({className:q(z.table,$),pagination:!1,rowHoverable:!1,size:"small"},O))})}},11546:function(Rn,Y,n){n.d(Y,{NU:function(){return a.N},iA:function(){return b}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(56995),U=n(97912),I=n(75271),a=n(56482),L=n(52676),c=["columns"],b=function(B){var R=B.columns,f=C()(B,c),p=(0,I.useMemo)(function(){return R==null?void 0:R.map(function(y){if(y.render)return y;if(y.ellipsis&&y.ellipsis!==!0&&y.ellipsis.showTitle||y.ellipsis===!0){var P=y.ellipsis===!0?{}:y.ellipsis;return r()(r()({},y),{},{ellipsis:{showTitle:!1},render:function(A){return A||A===0?(0,L.jsx)(M.Z,r()(r()({},P),{},{placement:"topLeft",title:A,children:A})):"-"}})}return y.render||(y.render=function(E){return E!=null?E:"-"}),y})},[R]);return(0,L.jsx)(U.Z,r()(r()({},f),{},{columns:p}))};b.displayName="Table",b.SELECTION_COLUMN=U.Z.SELECTION_COLUMN,b.EXPAND_COLUMN=U.Z.EXPAND_COLUMN,b.SELECTION_ALL=U.Z.SELECTION_ALL,b.SELECTION_INVERT=U.Z.SELECTION_INVERT,b.SELECTION_NONE=U.Z.SELECTION_NONE,b.Column=U.Z.Column,b.ColumnGroup=U.Z.ColumnGroup,b.Summary=U.Z.Summary,b.Collapse=a.N;var v=null},8559:function(Rn,Y,n){n.d(Y,{G:function(){return R}});var k=n(53649),r=n.n(k),X=n(47512),C=n(75271),M=n(52676),U,I,a,L,c,b,v,t,B=(0,X.kc)(function(f,p){var y=f.css,P=(0,X.F4)(U||(U=r()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),E=(0,X.F4)(I||(I=r()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),A=(0,X.F4)(a||(a=r()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:y(L||(L=r()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),p.width||34,p.height||22,p.bgColor||"transparent"),line:y(c||(c=r()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),p.lineColor||"#000"),animate1:y(b||(b=r()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),P),animate2:y(v||(v=r()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),E),animate3:y(t||(t=r()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),A)}}),R=function(p){var y=p.height,P=p.width,E=p.lineColor,A=p.bgColor,j=B({height:y,width:P,lineColor:E,bgColor:A}),h=j.styles,N=j.cx;return(0,M.jsxs)("div",{className:h.box,children:[(0,M.jsx)("div",{className:N(h.line,h.animate1)}),(0,M.jsx)("div",{className:N(h.line,h.animate2)}),(0,M.jsx)("div",{className:N(h.line,h.animate3)}),(0,M.jsx)("div",{className:N(h.line,h.animate2)}),(0,M.jsx)("div",{className:N(h.line,h.animate1)}),(0,M.jsx)("div",{className:N(h.line,h.animate2)}),(0,M.jsx)("div",{className:N(h.line,h.animate1)})]})}},71983:function(Rn,Y,n){n.r(Y),n.d(Y,{Affix:function(){return G.Z},Alert:function(){return B.b},Anchor:function(){return dn.Z},AntdMentions:function(){return Mn.Z},App:function(){return R.g},AudioPlayer:function(){return Se.Z},AutoComplete:function(){return Ln.Z},Avatar:function(){return In.C},BackTop:function(){return Dn.Z},Badge:function(){return ne.Z},BaseMonacoEditor:function(){return a.ZM},Breadcrumb:function(){return f.Z},Button:function(){return jn.ZP},ButtonGroup:function(){return k.h},Calendar:function(){return zn.Z},Card:function(){return p.Z},Carousel:function(){return Gn.Z},Cascader:function(){return wn.Z},ChatInputActionBar:function(){return z.Z},ChatInputArea:function(){return q.Z},ChatInputAreaInner:function(){return vn.Z},ChatItem:function(){return u.z},ChatSendButton:function(){return nn.Z},Checkbox:function(){return Zn.Z},Col:function(){return fn.Z},Collapse:function(){return Nn.Z},CollapseGroup:function(){return r.w},CollapseTable:function(){return O.NU},ColorPicker:function(){return Qn.Z},ConfigContext:function(){return X.E_},ConfigProvider:function(){return X.iV},CopyButton:function(){return Te.Z},DatePicker:function(){return de.default},Descriptions:function(){return y.w},Divider:function(){return P.i},DragPanel:function(){return C.U},Drawer:function(){return E.d},Dropdown:function(){return A.L},EditableMessage:function(){return J.i},Empty:function(){return T.Z},Flex:function(){return Fn.Z},FloatButton:function(){return pe.Z},Form:function(){return j.l},FormCollapseList:function(){return j.E},FormHelper:function(){return h.wK},FullFeaturedHighlighter:function(){return H.EL},Grid:function(){return Me.ZP},Highlighter:function(){return H.oP},Image:function(){return Oe.Z},Input:function(){return Pe.Z},InputNumber:function(){return Be.Z},Layout:function(){return Ee.Z},List:function(){return un.Z},LogViewer:function(){return U.n},Logo:function(){return M.T},Markdown:function(){return Ae.Z},Mentions:function(){return I.o},Menu:function(){return m.Z},MobileChatInputArea:function(){return tn.Z},MobileChatSendButton:function(){return Q.Z},Modal:function(){return N.u},MonacoController:function(){return a.Hu},MonacoDiffEditor:function(){return a.Xq},MonacoEditor:function(){return a.rE},NotificationGlobalStyle:function(){return $.EZ},Page:function(){return L.T},Pagination:function(){return D.Z},Popconfirm:function(){return gn.Z},Popover:function(){return bn.Z},ProCard:function(){return c.Q},Progress:function(){return En.Z},QRCode:function(){return rn.Z},Radio:function(){return ee.ZP},Rate:function(){return $n.Z},Result:function(){return An.ZP},Row:function(){return Un.Z},Segmented:function(){return kn.Z},Select:function(){return te.default},SelectCard:function(){return b.W},Skeleton:function(){return Kn.Z},Slider:function(){return re.Z},SliderInput:function(){return v.a},Space:function(){return On.Z},SpeechSynthesisTTS:function(){return xe.H},Spin:function(){return ie.Z},Statistic:function(){return le.Z},Status:function(){return t.q},Steps:function(){return oe.Z},Switch:function(){return Xn.Z},SyntaxHighlighter:function(){return he.Z},Table:function(){return O.iA},Tabs:function(){return ce.Z},Tag:function(){return ve.Z},TimePicker:function(){return Hn.Z},Timeline:function(){return _n.Z},Tooltip:function(){return xn.Z},Tour:function(){return pn.Z},Transfer:function(){return cn.Z},Tree:function(){return Bn.Z},TreeSelect:function(){return Pn.Z},Typography:function(){return Z.Z},Upload:function(){return Vn.Z},Watermark:function(){return Ce.Z},WaveformIcon:function(){return x.G},colorScales:function(){return an._},colors:function(){return an._},generateColorNeutralPalette:function(){return en},generateColorPalette:function(){return yn},message:function(){return W.ZP},neutralColorScales:function(){return g},notification:function(){return $.t6},theme:function(){return ae.Z},useAudioPlayer:function(){return Re.x},useAutoFocus:function(){return h.wL},useCdnFn:function(){return X.nc},useLink:function(){return X.nB},useResponsive:function(){return hn.F},useSpeechRecognition:function(){return Ke.x},useSpeechSynthes:function(){return V.J},useTheme:function(){return me.Fg},useThemeMode:function(){return se.r},version:function(){return Jn.Z},withFormHelper:function(){return h.MX}});var k=n(12644),r=n(79213),X=n(94456),C=n(13306),M=n(52625),U=n(25969),I=n(79334),a=n(81321),L=n(40305),c=n(86346),b=n(25777),v=n(66269),t=n(46119),B=n(58479),R=n(5244),f=n(77789),p=n(39824),y=n(26345),P=n(82227),E=n(5795),A=n(99512),j=n(62719),h=n(20147),N=n(97527),$=n(40130),O=n(11546),Z=n(94729),q=n(52412),z=n(65059),vn=n(51874),nn=n(62999),tn=n(82367),Q=n(65677),u=n(59212),J=n(99335),H=n(17853),an=n(15094),mn=n(82092),ln=n.n(mn),w=n(98644),yn=function(i){var o=i.type,e=i.scale,l=i.appearance,d=(0,w.Z)(o),S=l==="dark";return ln()(ln()(ln()(ln()(ln()(ln()(ln()(ln()(ln()(ln()({},"color".concat(d,"Bg"),e[l][1]),"color".concat(d,"BgHover"),e[l][2]),"color".concat(d,"Border"),e[l][4]),"color".concat(d,"BorderHover"),e[l][S?5:3]),"color".concat(d,"Hover"),e[l][S?10:8]),"color".concat(d),e[l][9]),"color".concat(d,"Active"),e[l][S?7:10]),"color".concat(d,"TextHover"),e[l][S?10:8]),"color".concat(d,"Text"),e[l][9]),"color".concat(d,"TextActive"),e[l][S?7:10])},en=function(i){var o=i.scale,e=i.appearance;return{colorBgContainer:e==="dark"?o[e][1]:o[e][0],colorBgElevated:e==="dark"?o[e][2]:o[e][0],colorBgLayout:e==="dark"?o[e][0]:o[e][1],colorBgMask:o.lightA[8],colorBgSpotlight:o[e][5],colorBorder:o[e][4],colorBorderSecondary:o[e][3],colorFill:o["".concat(e,"A")][3],colorFillQuaternary:o["".concat(e,"A")][0],colorFillSecondary:o["".concat(e,"A")][2],colorFillTertiary:o["".concat(e,"A")][1],colorText:o[e][12],colorTextQuaternary:o[e][6],colorTextSecondary:o[e][10],colorTextTertiary:o[e][8]}},g={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},V=n(82846),x=n(8559),G=n(7904),dn=n(58190),Mn=n(46621),Ln=n(85958),In=n(46847),Dn=n(66075),ne=n(1088),jn=n(71170),zn=n(3957),Gn=n(57512),wn=n(52279),Zn=n(43584),fn=n(68526),Nn=n(90026),Qn=n(64479),de=n(1409),T=n(78962),Fn=n(44923),pe=n(6697),Me=n(82366),Oe=n(69414),Pe=n(99707),Be=n(96965),Ee=n(93702),un=n(78104),m=n(74032),W=n(57939),D=n(4211),gn=n(45590),bn=n(31997),En=n(35357),rn=n(82830),ee=n(20219),$n=n(76177),An=n(46504),Un=n(26582),kn=n(13927),te=n(35092),Kn=n(99021),re=n(27896),On=n(43356),ie=n(49553),le=n(43954),oe=n(59470),Xn=n(74798),ce=n(60756),ve=n(53453),ae=n(22972),_n=n(46141),Hn=n(20907),xn=n(56995),pn=n(33858),cn=n(96208),Bn=n(64287),Pn=n(6036),Vn=n(72023),Jn=n(38208),Ce=n(55366),Te=n(81107),Ae=n(85814),he=n(74974),xe=n(49724),Se=n(83595),Re=n(61984),Ke=n(8281),hn=n(81134),me=n(47512),se=n(33592)},40130:function(Rn,Y,n){n.d(Y,{EZ:function(){return p.E},t6:function(){return nn}});var k=n(26068),r=n.n(k),X=n(67825),C=n.n(X),M=n(48305),U=n.n(M),I=n(335),a=n.n(I),L=n(30657),c=n(19728),b=n(22620),v=n(90026),t=n(83293),B=n(98943),R=n(75271),f=n(52676),p=n(55300),y=["detail","message","description","onClose","className"],P=v.Z.Panel,E=t.Z.Link,A=t.Z.Paragraph,j=t.Z.Text,h={},N=function(u,J){h[u]||(h[u]=[]),h[u].push(J)},$=function(u){delete h[u]},O=function Q(u){var J="";if(typeof u=="string")J=u;else if(typeof u=="number")J=u.toString();else if(Array.isArray(u)){var H=a()(u),an;try{for(H.s();!(an=H.n()).done;){var mn=an.value;J+=Q(mn)}}catch(ln){H.e(ln)}finally{H.f()}}else(0,R.isValidElement)(u)&&(J+=Q(u.props.children));return J},Z=function(u){var J,H=u.noticeKey,an=u.message,mn=((J=h[H])===null||J===void 0?void 0:J.length)||0;return(0,f.jsxs)(f.Fragment,{children:[an,mn>1&&" (".concat(mn,")")]})},q=function(u){var J=u.noticeKey,H=(0,R.useState)(),an=U()(H,2),mn=an[0],ln=an[1],w={},yn=a()(h[J]),en;try{for(yn.s();!(en=yn.n()).done;){var g=en.value,V=O(g.description);g.descKey=V,w[V]=g}}catch(x){yn.e(x)}finally{yn.f()}return(0,f.jsx)(v.Z,{accordion:!0,activeKey:mn,className:"yunti-notification-collapse",expandIcon:function(G){var dn=G.isActive;return(0,f.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:dn?(0,f.jsx)(E,{className:"yunti-notification-link",children:(0,f.jsx)(L.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,f.jsx)(c.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(G){ln(G)},children:Object.values(w).map(function(x){var G=x.descKey,dn=x.description,Mn=x.detail;return(0,f.jsx)(P,{header:(0,f.jsx)(j,{ellipsis:{tooltip:!1},style:{width:250},children:dn}),children:(0,f.jsx)(A,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(Mn,null,2)},type:"secondary",children:(0,f.jsx)("pre",{children:JSON.stringify(Mn,null,2)})})},G)})})},z=function(u){var J=u.detail,H=u.message,an=u.description,mn=u.onClose,ln=u.className,w=C()(u,y),yn=O(H);N(yn,u);var en=function(){mn==null||mn(),$(yn)};return u.type==="warning"&&!u.icon&&(w.icon=(0,f.jsx)(b.Z,{style:{color:"#ff7d00"}})),J?B.ZP.open(r()({key:yn,message:(0,f.jsx)(Z,{message:H,noticeKey:yn}),description:(0,f.jsx)(q,{noticeKey:yn}),onClose:en,className:"yunti-notification ".concat(ln)},w)):B.ZP.open(r()({key:yn,message:(0,f.jsx)(Z,{message:H,noticeKey:yn}),description:an,onClose:en,className:"yunti-notification ".concat(ln)},w))},vn=function(u){var J;if(((u==null||(J=u.errors)===null||J===void 0?void 0:J.length)||0)>0){u!=null&&u.errors;var H=a()((u==null?void 0:u.errors)||[]),an;try{for(H.s();!(an=H.n()).done;){var mn=an.value;z(r()(r()({detail:mn,description:mn.message},u),{},{type:"warning"}))}}catch(ln){H.e(ln)}finally{H.f()}}else z(r()(r()({},u),{},{type:"warning"}))},nn=r()(r()({},B.ZP),{},{success:function(u){return z(r()(r()({},u),{},{type:"success"}))},info:function(u){return z(r()(r()({},u),{},{type:"info"}))},warning:function(u){return z(r()(r()({},u),{},{type:"warning"}))},warn:function(u){return z(r()(r()({},u),{},{type:"warning"}))},error:function(u){return z(r()(r()({},u),{},{type:"error"}))},warnings:vn,warns:vn}),tn=null},55300:function(Rn,Y,n){n.d(Y,{E:function(){return U}});var k=n(53649),r=n.n(k),X=n(98943),C=n(47512),M,U=(0,C.vJ)(M||(M=r()([`
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
`])),function(I){var a=I.theme;return"".concat(a==null?void 0:a.colorPrimary," !important")},function(I){var a=I.theme;return"".concat(a==null?void 0:a.colorPrimaryHover," !important")},function(I){var a=I.theme;return a==null?void 0:a.colorPrimary},function(I){var a=I.theme;return"".concat(a==null?void 0:a.colorPrimary," !important")},function(I){var a=I.theme;return"".concat(a==null?void 0:a.colorPrimaryHover," !important")},function(I){var a=I.theme,L=a||{},c=L.prefixCls;return X.ZP.config({prefixCls:c}),`
      .`.concat(c,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(c,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(Rn,Y,n){n.d(Y,{j:function(){return k}});var k=typeof window!="undefined"}}]);
