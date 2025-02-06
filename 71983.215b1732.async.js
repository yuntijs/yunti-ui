"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(In,en,n){n.d(en,{b:function(){return U}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(21153),$=n(75271),W=n(53649),r=n.n(W),A=n(47512),v,C=(0,A.kc)(function(p,h){var y=p.css,M=h.bordered,b=M===void 0?"dashed":M;return{custom:y(v||(v=r()([`
        border-style: `,` !important;
      `])),b)}},{hashPriority:"low"}),c=n(52676),e=["bordered","className"],U=function(h){var y=h.bordered,M=y===void 0?"dashed":y,b=h.className,L=E()(h,e),P=C({bordered:M}),x=P.styles,D=P.cx;return(0,c.jsx)(j.Z,t()(t()({},L),{},{className:D(x.custom,b)}))};U.ErrorBoundary=j.Z.ErrorBoundary;var z=null},5244:function(In,en,n){n.d(en,{g:function(){return v}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(23878),$=n(75271),W=n(55300),r=n(52676),A=["children"],v=function(e){var U=e.children,z=E()(e,A);return(0,r.jsxs)(j.Z,t()(t()({},z),{},{children:[(0,r.jsx)(W.E,{}),U]}))};v.useApp=j.Z.useApp;var C=null},52412:function(In,en,n){var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(53649),$=n.n(j),W=n(62579),r=n(51874),A=n(47512),v=n(75271),C=n(52676),c=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],e,U,z,p=(0,A.kc)(function(y){var M=y.css;return{container:M(e||(e=$()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:M(U||(U=$()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:M(z||(z=$()([`
      position: relative;
      flex: 1;
    `])))}}),h=(0,v.forwardRef)(function(y,M){var b=y.className,L=y.style,P=y.classNames,x=y.expand,D=x===void 0?!0:x,w=y.setExpand,T=y.bottomAddons,B=y.topAddons,k=y.onSizeChange,V=y.heights,vn=y.onSend,an=E()(y,c),tn=p(),S=tn.styles;return(0,C.jsx)(W.Z,{className:b,classNames:P,fullscreen:D,headerHeight:V==null?void 0:V.headerHeight,maxHeight:V==null?void 0:V.maxHeight,minHeight:V==null?void 0:V.minHeight,onSizeChange:k,placement:"bottom",size:{height:V==null?void 0:V.inputHeight,width:"100%"},style:t()({zIndex:10},L),children:(0,C.jsxs)("section",{className:S.container,style:{minHeight:V==null?void 0:V.minHeight},children:[B,(0,C.jsx)("div",{className:S.textareaContainer,children:(0,C.jsx)(r.Z,t()({className:S.textarea,onSend:function(){vn==null||vn(),w==null||w(!1)},ref:M,type:"pure"},an))}),T]})})});en.Z=(0,v.memo)(h)},59212:function(In,en,n){n.d(en,{z:function(){return X}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(10581),$=n(93955),W=n(81262),r=n(9192),A=n(81134),v=n(75271),C=n(90142),c=n(53649),e=n.n(c),U=n(47512),z,p,h,y,M,b,L,P,x,D,w,T,B,k,V,vn,an,tn,S=(0,U.kc)(function(f,K){var g=f.cx,H=f.css,un=f.token,yn=f.isDarkMode,Cn=f.responsive,Zn=K.placement,Pn=K.type,Jn=K.title,Mn=K.primary,Wn=K.avatarSize,Fn=K.editing,$n=K.time,Bn=K.isLatest,fn=H(z||(z=e()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Mn?yn?un.colorFill:un.colorBgElevated:yn?un.colorFillSecondary:un.colorBgContainer,un.borderRadiusLG,un.motionEaseOut),Nn=H(p||(p=e()([`
      padding-block-start: `,`;
    `])),Jn?0:"6px"),Un=H(h||(h=e()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),un.motionEaseOut),oe=Pn==="block"?fn:Nn,Z=Fn&&H(y||(y=e()([`
        width: 100%;
      `])));return{actions:g(H(M||(M=e()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),Zn==="left"?"flex-start":"flex-end",Zn==="left"?"flex-end":"flex-start"),Fn&&H(b||(b=e()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:H(L||(L=e()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),Wn,Wn),avatarGroupContainer:H(P||(P=e()([`
        width: `,`px;
      `])),Wn),container:g(Pn==="pure"&&Un,H(x||(x=e()([`
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
        `])),Bn?"unset":"none",Bn?1:0,un.motionEaseOut,Cn.mobile,Pn==="pure"?"12px":"6px")),editingContainer:g(Z,H(D||(D=e()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),un.colorBorderSecondary,un.colorBorder),Pn==="pure"&&H(w||(w=e()([`
            background: `,`;
            border-radius: `,`px;
          `])),un.colorFillQuaternary,un.borderRadius)),editingInput:H(T||(T=e()([`
        width: 100%;
      `]))),errorContainer:H(B||(B=e()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:H(k||(k=e()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),Zn==="right"?"-4px":"unset",Zn==="left"?"-4px":"unset",un.colorBgLayout,un.colorPrimary),message:g(oe,H(V||(V=e()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),Cn.mobile)),messageContainer:g(Z,H(vn||(vn=e()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),$n?-16:0,Cn.mobile)),messageContent:g(Z,H(an||(an=e()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),Cn.mobile)),messageExtra:g("message-extra"),name:H(tn||(tn=e()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),un.colorTextDescription,Zn==="left"?"left":"right")}}),i=n(52676),N=(0,v.memo)(function(f){var K=f.actions,g=f.placement,H=f.type,un=f.editing,yn=S({editing:un,placement:g,type:H}),Cn=yn.styles;return(0,i.jsx)(C.D,{align:"flex-start",className:Cn.actions,role:"menubar",children:K})}),R=N,G=n(99335),nn=(0,v.memo)(function(f){var K=f.editing,g=f.onChange,H=f.onEditingChange,un=f.text,yn=f.message,Cn=f.placement,Zn=f.messageExtra,Pn=f.renderMessage,Jn=f.type,Mn=f.primary,Wn=f.onDoubleClick,Fn=f.fontSize,$n=f.markdownProps,Bn=f.markdownClassname,fn=S({editing:K,placement:Cn,primary:Mn,type:Jn}),Nn=fn.cx,Un=fn.styles,oe=(0,A.F)(),Z=oe.mobile,Tn=(0,i.jsx)(G.i,{classNames:{input:Un.editingInput,markdown:Bn},editButtonSize:"small",editing:K,fontSize:Fn,fullFeaturedCodeBlock:!0,markdownProps:$n,onChange:g,onEditingChange:H,openModal:Z?K:void 0,text:un,value:yn?String(yn).trim():""}),ee=Pn?Pn(Tn):Tn;return(0,i.jsxs)(C.D,{className:Nn(Un.message,K&&Un.editingContainer),onDoubleClick:Wn,children:[ee,Zn&&!K?(0,i.jsx)("div",{className:Un.messageExtra,children:Zn}):null]})}),ln=nn,Q=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest"],q=32,X=(0,v.memo)(function(f){var K=f.avatarAddon,g=f.onAvatarClick,H=f.avatarProps,un=f.actions,yn=f.className,Cn=f.primary,Zn=f.loading,Pn=f.message,Jn=f.placement,Mn=Jn===void 0?"left":Jn,Wn=f.type,Fn=Wn===void 0?"block":Wn,$n=f.avatar,Bn=f.error,fn=f.showTitle,Nn=f.time,Un=f.editing,oe=f.onChange,Z=f.onEditingChange,Tn=f.messageExtra,ee=f.renderMessage,xe=f.text,Se=f.errorMessage,ye=f.onDoubleClick,Te=f.fontSize,he=f.markdownProps,dn=f.markdownClassname,m=f.isLatest,J=E()(f,Q),F=(0,A.F)(),pn=F.mobile,En=S({editing:Un,placement:Mn,primary:Cn,showTitle:fn,time:Nn,title:$n.title,type:Fn,isLatest:m}),Sn=En.cx,sn=En.styles;return(0,i.jsxs)(C.D,t()(t()({className:Sn(sn.container,yn),direction:Mn==="left"?"horizontal":"horizontal-reverse",gap:pn?6:12},J),{},{children:[(0,i.jsx)(j.Z,t()(t()({},H),{},{addon:K,avatar:$n,loading:Zn,onClick:g,placement:Mn,size:pn?q:void 0})),(0,i.jsxs)(C.D,{align:Mn==="left"?"flex-start":"flex-end",className:sn.messageContainer,children:[(0,i.jsx)(r.Z,{avatar:$n,placement:Mn,showTitle:fn,time:Nn}),(0,i.jsxs)(C.D,{align:Mn==="left"?"flex-start":"flex-end",className:sn.messageContent,direction:"vertical",gap:8,children:[Bn?(0,i.jsx)(W.Z,{error:Bn,message:Se,placement:Mn}):(0,i.jsx)(ln,{editing:Un,fontSize:Te,markdownClassname:dn,markdownProps:he,message:Pn,messageExtra:Tn,onChange:oe,onDoubleClick:ye,onEditingChange:Z,placement:Mn,primary:Cn,renderMessage:ee,text:xe,type:Fn}),(0,i.jsx)(R,{actions:un,editing:Un,placement:Mn,type:Fn})]})]}),pn&&Fn==="block"&&(0,i.jsx)($.Z,{borderSpacing:q})]}))})},88401:function(In,en,n){n.d(en,{L:function(){return i}});var rn=n(15558),t=n.n(rn),_=n(26068),E=n.n(_),j=n(67825),$=n.n(j),W=n(85814),r=n(75271),A=n(48305),v=n.n(A),C=n(53649),c=n.n(C),e=n(60477),U=n(47512),z=n(1216),p=n(97601),h=n(68537),y=n(90142),M=n(52676),b,L,P,x=(0,U.kc)(function(N){var R=N.css,G=N.token,nn=N.isDarkMode;return{container:R(b||(b=c()([`
    cursor: pointer;
    padding-block: 12px;
    padding-block-end: 6px;
    color: `,`;
  `])),G.colorTextTertiary),titlebox:R(L||(L=c()([`
    padding: 8px;
    color: `,`;
    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),G.colorTextSecondary,G.colorFillTertiary,nn?"":G.colorFillSecondary),title:R(P||(P=c()([`
    overflow: hidden;
    display: box;
    -webkit-box-orient: vertical;

    font-size: 12px;
    text-overflow: ellipsis;

    -webkit-line-clamp: 1;
  `])))}}),D=(0,r.memo)(function(N){var R=N.children,G=N.second,nn=N.done,ln=x(),Q=ln.styles,q=ln.theme,X=(0,r.useState)(!0),f=v()(X,2),K=f[0],g=f[1];return(0,M.jsxs)(y.D,{className:Q.container,gap:16,onClick:function(){g(!K)},width:"100%",children:[(0,M.jsxs)(y.D,{className:Q.titlebox,distribution:"space-between",flex:1,horizontal:!0,children:[(0,M.jsxs)(y.D,{gap:8,horizontal:!0,children:[(0,M.jsx)(e.Z,{color:q.purple,icon:z.Z}),nn?"\u5DF2\u6DF1\u5EA6\u601D\u8003\uFF08\u7528\u65F6 ".concat(G||0," \u79D2\uFF09"):"\u601D\u8003\u4E2D..."]}),(0,M.jsx)(e.Z,{icon:K?p.Z:h.Z})]}),K&&R]})}),w=D,T=n(25709),B=function(){return function(R){(0,T.Vn)(R,"element",function(G,nn,ln){if(G.type==="element"&&G.tagName==="p"){var Q=G.children||[],q=Q.findIndex(function(g){return g.type==="raw"&&g.value==="<think>"}),X=Q.findIndex(function(g){return g.type==="raw"&&g.value==="</think>"});if(q!==-1&&X!==-1&&X>q){var f=Q.slice(q+1,X),K={children:f,properties:{},tagName:"think",type:"element"};return ln.children.splice(nn,1,K),nn}}})}},k=B,V={Component:w,rehypePlugin:k,tag:"think"},vn=V,an=[vn],tn=["components","rehypePlugins","customComponentProps"],S=an.map(function(N){return N.rehypePlugin}),i=function(R){var G=R.components,nn=G===void 0?{}:G,ln=R.rehypePlugins,Q=ln===void 0?[]:ln,q=R.customComponentProps,X=$()(R,tn),f=(0,r.useMemo)(function(){var g=Object.fromEntries(an.map(function(H){return[H.tag,function(un){return(0,M.jsx)(H.Component,E()(E()({},un),q==null?void 0:q[H.tag]))}]}));return E()(E()({},g),nn)},[nn,q]),K=(0,r.useMemo)(function(){return[].concat(t()(S),t()(Q))},[Q]);return(0,M.jsx)(W.Z,E()({components:f,rehypePlugins:K},X))}},13306:function(In,en,n){n.d(en,{U:function(){return w}});var rn=n(26068),t=n.n(rn),_=n(48305),E=n.n(_),j=n(67825),$=n.n(j),W=n(97157),r=n(86818),A=n(44923),v=n(71170),C=n(75271),c=n(84569),e=n.n(c),U=n(53649),z=n.n(U),p=n(47512),h,y,M,b,L,P=(0,p.kc)(function(T){var B=T.css,k=T.token,V=T.prefixCls;return{root:B(h||(h=z()([`
      overflow: hidden;
    `]))),wrapper:B(y||(y=z()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),k.marginLG),content:B(M||(M=z()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),k.borderRadiusLG,k.boxShadowSecondary),dragWrapper:B(b||(b=z()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:B(L||(L=z()([`
      cursor: move;
    `])))}}),x=n(52676),D=["title","classNames","defaultPosition","onPositionChange"],w=(0,C.memo)(function(T){var B=T.title,k=T.classNames,V=k===void 0?{}:k,vn=T.defaultPosition,an=T.onPositionChange,tn=$()(T,D),S=P(),i=S.styles,N=S.cx,R=(0,C.useState)({left:0,top:0,bottom:0,right:0}),G=E()(R,2),nn=G[0],ln=G[1],Q=(0,C.useRef)(null),q=function(f,K){var g,H=window.document.documentElement,un=H.clientWidth,yn=H.clientHeight,Cn=(g=Q.current)===null||g===void 0?void 0:g.getBoundingClientRect();Cn&&ln({left:-Cn.left+K.x,right:un-(Cn.right-K.x),top:-Cn.top+K.y,bottom:yn-(Cn.bottom-K.y)})};return(0,x.jsx)(r.Z,t()(t()({},tn),{},{classNames:t()(t()({},V),{},{wrapper:N(i.wrapper,V.wrapper),content:N(i.content,V.content)}),destroyOnClose:!0,drawerRender:function(f){return(0,x.jsx)(e(),{bounds:nn,defaultPosition:vn,handle:".".concat(i.dragHandle),nodeRef:Q,onStart:function(g,H){return q(g,H)},onStop:function(g,H){an==null||an({x:H.x,y:H.y})},children:(0,x.jsx)("div",{className:i.dragWrapper,ref:Q,children:f})})},mask:!1,rootClassName:i.root,title:(0,x.jsxs)(A.Z,{align:"center",className:i.dragHandle,children:[(0,x.jsx)(A.Z,{flex:2,children:B}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(v.ZP,{className:i.dragHandle,icon:(0,x.jsx)(W.Z,{}),type:"text"})})]})}))})},5795:function(In,en,n){n.d(en,{d:function(){return p}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(86818),$=n(75271),W=n(53649),r=n.n(W),A=n(47512),v,C,c,e=(0,A.kc)(function(y,M){var b=y.css,L=y.prefixCls,P=M.closeIcon,x=M.closeIconPlacement,D=M.extra,w=b(v||(v=r()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),L,L,!(P===null||P===!1)&&b(C||(C=r()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),L));return{custom:b(c||(c=r()([`
        `,`
      `])),(!x||x==="right"||x==="auto"&&!D)&&w)}},{hashPriority:"low"}),U=n(52676),z=["className"],p=function(M){var b=M.className,L=E()(M,z),P=e(L),x=P.styles,D=P.cx;return(0,U.jsx)(j.Z,t()(t()({},L),{},{className:D(x.custom,b)}))},h=null},99512:function(In,en,n){n.d(en,{L:function(){return M}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(44923),$=n(5053),W=n(75271),r=n(53649),A=n.n(r),v=n(47512),C,c,e,U,z=(0,v.kc)(function(b,L){var P=b.css,x=b.token,D=L.divider,w=L.position;return{menuWrapper:P(C||(C=A()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),x.colorBgElevated,x.borderRadiusLG,x.boxShadowSecondary),menuExtra:P(c||(c=A()([`
        padding: 10px 16px 4px;
        `,`
      `])),D&&P(w==="top"?e||(e=A()([`
              border-bottom: 1px solid `,`;
            `])):U||(U=A()([`
              border-top: 1px solid `,`;
            `])),x.colorSplit))}}),p=n(52676),h=["menuExtra","dropdownRender"],y=function(L){var P=L.menuExtra,x=L.dropdownRender,D=E()(L,h),w=P||{},T=w.position,B=T===void 0?"top":T,k=w.divider,V=k===void 0?!1:k,vn=w.content,an=z({divider:V,position:B}),tn=an.styles,S=(0,W.useCallback)(function(i){var N=W.cloneElement(i,{style:{boxShadow:"none",border:"none"}});if(!vn)return x?(0,p.jsx)(j.Z,{className:tn.menuWrapper,vertical:!0,children:x(N)}):i;var R=(0,p.jsx)(j.Z,{align:"center",className:tn.menuExtra,children:vn});return(0,p.jsxs)(j.Z,{className:tn.menuWrapper,vertical:!0,children:[B==="top"&&R,N,B==="bottom"&&R]})},[vn,x,B,tn.menuExtra,tn.menuWrapper]);return(0,p.jsx)($.Z,t()({dropdownRender:S},D))},M=y;M.Button=$.Z.Button},99335:function(In,en,n){n.d(en,{i:function(){return C}});var rn=n(26068),t=n.n(rn),_=n(48305),E=n.n(_),j=n(14252),$=n(54285),W=n(75271),r=n(65720),A=n(88401),v=n(52676),C=(0,W.memo)(function(c){var e=c.value,U=c.onChange,z=c.classNames,p=z===void 0?{}:z,h=c.onEditingChange,y=c.editing,M=c.openModal,b=c.onOpenChange,L=c.placeholder,P=c.showEditWhenEmpty,x=P===void 0?!1:P,D=c.styles,w=c.height,T=c.inputType,B=c.editButtonSize,k=c.text,V=c.fullFeaturedCodeBlock,vn=c.model,an=c.fontSize,tn=c.markdownProps,S=(0,r.Z)(!1,{onChange:h,value:y}),i=E()(S,2),N=i[0],R=i[1],G=(0,r.Z)(!1,{onChange:b,value:M}),nn=E()(G,2),ln=nn[0],Q=nn[1],q=w==="auto",X=(0,v.jsx)(j.Z,{className:p==null?void 0:p.input,classNames:{textarea:p==null?void 0:p.textarea},defaultValue:e,editButtonSize:B,height:w,onCancel:function(){return R(!1)},onConfirm:function(K){U==null||U(K),R(!1)},placeholder:L,style:D==null?void 0:D.input,text:k,textareaClassname:p==null?void 0:p.input,type:T});return!e&&x?X:(0,v.jsxs)(v.Fragment,{children:[!ln&&N?X:(0,v.jsx)(A.L,t()(t()({className:p==null?void 0:p.markdown,fontSize:an,fullFeaturedCodeBlock:V,style:t()({height:q?"unset":w},D==null?void 0:D.markdown),variant:"chat"},tn),{},{children:e||L||""})),ln&&(0,v.jsx)($.Z,{editing:N,extra:vn==null?void 0:vn.extra,footer:vn==null?void 0:vn.footer,height:w,onChange:U,onEditingChange:R,onOpenChange:function(K){Q(K),R(!1)},open:ln,placeholder:L,text:k,value:e})]})})},14866:function(In,en,n){n.d(en,{w:function(){return r}});var rn=n(48305),t=n.n(rn),_=n(75271),E=function(v){return typeof v=="string"?document.querySelector("#".concat(v)):(v==null?void 0:v.current)||v},j=":not([disabled]):not([readonly])",$=["text","password","search","tel","url","number","email",""].map(function(A){return'input[type="'.concat(A,'"]').concat(j)}).join(", ")+", input:not([type])".concat(j,", textarea").concat(j),W=function(v){var C,c=E(v);if(c){var e=(C=c.querySelector)===null||C===void 0?void 0:C.call(c,$);if(e!=null&&e.focus)return e.focus(),!0}},r=function(v){var C=(0,_.useState)(!1),c=t()(C,2),e=c[0],U=c[1];_.useEffect(function(){if(!(e||!v)){var z=W(v);z&&U(!0)}},[v,e,U])}},20147:function(In,en,n){n.d(en,{MX:function(){return W},wK:function(){return $},wL:function(){return E.w}});var rn=n(26068),t=n.n(rn),_=n(75271),E=n(14866),j=n(52676),$=function(A){var v,C=A.autoFocus,c=C===void 0?!0:C,e=(0,_.useRef)(null);return(0,E.w)(c?e:void 0),(0,j.jsx)("div",{className:A.className,id:A.id,ref:e,style:(v=A.style)!==null&&v!==void 0?v:{display:A.className?void 0:"contents"},children:A.children})},W=function(A){return function(v){var C=function(U){return(0,j.jsx)($,t()(t()({},A||{}),{},{children:(0,j.jsx)(v,t()({},U))}))},c=v.displayName||v.name||"Component";return C.displayName="withFormHelper(".concat(c,")"),C}}},33985:function(In,en,n){n.d(en,{h:function(){return an}});var rn=n(26068),t=n.n(rn),_=n(48305),E=n.n(_),j=n(67825),$=n.n(j),W=n(16713),r=n(81107),A=n(44923),v=n(33592),C=n(97601),c=n(68537),e=n(75271),U=n(2998),z=n(86590),p=n(4643),h=n(94729),y=n(53649),M=n.n(y),b=n(47512),L,P,x,D,w,T,B=(0,b.kc)(function(tn,S){var i=tn.token,N=tn.css,R=tn.cx,G=tn.prefixCls,nn="".concat(G,"-json-viewer"),ln=S==="block",Q=N(L||(L=M()([`
      background-color: `,`;

      &:hover {
        background-color: `,`;
      }
    `])),ln?i.colorFillTertiary:"transparent",ln?i.colorFillTertiary:i.colorFillQuaternary);return{container:R(nn,S!=="pure"&&Q,N(P||(P=M()([`
          position: relative;
          overflow: hidden;
          border-radius: `,`px;
          transition: background-color 100ms `,`;
          &:hover {
            .json-view {
              /* show root copy always when hover */
              & > .json-view--copy:first-of-type {
                display: inline !important;
              }
            }
          }
        `])),i.borderRadius,i.motionEaseOut)),content:N(x||(x=M()([`
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),S==="pure"?0:i.padding),header:N(D||(D=M()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),i.colorFillQuaternary),title:N(w||(w=M()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),i.margin),titleText:N(T||(T=M()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),i.fontSize,G,i.colorTextDescription)}}),k=n(52676),V=["type","fullFeatured","title","icon","contentStyle","classNames","className","collapseStringMode","collapsed","dark","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],vn=h.C.Text,an=function(S){var i=S.type,N=i===void 0?"block":i,R=S.fullFeatured,G=R===void 0?!1:R,nn=S.title,ln=nn===void 0?"json":nn,Q=S.icon,q=S.contentStyle,X=S.classNames,f=S.className,K=S.collapseStringMode,g=K===void 0?"directly":K,H=S.collapsed,un=H===void 0?2:H,yn=S.dark,Cn=S.displaySize,Zn=Cn===void 0?"collapsed":Cn,Pn=S.ignoreLargeArray,Jn=Pn===void 0?!1:Pn,Mn=S.matchesURL,Wn=Mn===void 0?!0:Mn,Fn=S.src,$n=S.theme,Bn=$n===void 0?"default":$n,fn=S.style,Nn=$()(S,V),Un=(0,v.r)(),oe=Un.isDarkMode,Z=B(G?"block":N),Tn=Z.styles,ee=Z.cx,xe=(0,e.useState)(!0),Se=E()(xe,2),ye=Se[0],Te=Se[1],he=(0,e.useMemo)(function(){return(0,U.Pz)(Fn)},[Fn]),dn=(0,k.jsx)(U.ZP,t()({collapseStringMode:g,collapsed:un,dark:yn!=null?yn:oe,displaySize:Zn,ignoreLargeArray:Jn,matchesURL:Wn,src:Fn,theme:Bn},Nn));return(0,k.jsxs)(A.Z,{className:ee(Tn.container,f),style:fn,vertical:!0,children:[G&&(0,k.jsxs)(A.Z,{align:"center",className:ee(Tn.header,X==null?void 0:X.header),justify:"space-between",children:[(0,k.jsx)(W.Z,{icon:ye?C.Z:c.Z,onClick:function(){return Te(!ye)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),(0,k.jsxs)(A.Z,{align:"center",className:Tn.title,flex:1,gap:2,justify:"center",title:ln,children:[Q,(0,k.jsx)(A.Z,{className:Tn.titleText,children:(0,k.jsx)(vn,{ellipsis:!0,children:ln})})]}),(0,k.jsx)(r.Z,{content:he,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,k.jsx)(A.Z,{className:ee(Tn.content,X==null?void 0:X.content),flex:1,style:ye?q:t()(t()({},q),{},{height:0,maxHeight:0,padding:0,overflow:"hidden"}),children:dn})]})}},25969:function(In,en,n){n.d(en,{n:function(){return D}});var rn=n(26068),t=n.n(rn),_=n(48305),E=n.n(_),j=n(67825),$=n.n(j),W=n(60477),r=n(50999),A=n(41117),v=n(45798),C=n(3548),c=n(5312),e=n(75271),U=n(53649),z=n.n(U),p=n(47512),h,y,M,b,L=(0,p.kc)(function(w){var T=w.css,B=w.token,k="#222222";return{root:T(h||(h=z()([`
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
      `])),k,B.borderRadiusLG,B.marginXXS,B.paddingXS,k,B.borderRadiusLG,B.borderRadiusLG,B.borderRadius,B.borderRadius,k,B.borderRadiusLG,B.fontFamilyCode),searchBarIcon:T(y||(y=z()([`
        font-size: 16px;
      `]))),loaderText:T(M||(M=z()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),B.fontFamilyCode),loaderIcon:T(b||(b=z()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),B.marginSM,B.marginSM)}},{hashPriority:"low"}),P=n(52676),x=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],D=function(T){var B=T.className,k=T.id,V=T.style,vn=T.height,an=T.onScroll,tn=T.url,S=T.websocket,i=T.refreshInterval,N=T.onLoad,R=T.onError,G=$()(T,x),nn=L(),ln=nn.cx,Q=nn.styles,q=(0,e.useState)(0),X=E()(q,2),f=X[0],K=X[1],g=(0,e.useState)(!1),H=E()(g,2),un=H[0],yn=H[1],Cn=(0,e.useState)(!1),Zn=E()(Cn,2),Pn=Zn[0],Jn=Zn[1],Mn=(0,e.useRef)(),Wn=(0,e.useRef)();(0,e.useEffect)(function(){return function(){clearTimeout(Mn.current),clearTimeout(Wn.current)}},[]),(0,e.useEffect)(function(){var fn;return tn&&!S&&i&&(fn=setInterval(function(){K(function(Nn){return Nn+1})},i)),function(){clearInterval(fn)}},[i,tn,S]);var Fn=(0,e.useMemo)(function(){return tn&&(Mn.current=setTimeout(function(){yn(!0),Mn.current=void 0},50),"".concat(tn,"#").concat(f))},[tn,f]),$n=(0,e.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Mn.current),yn(!1),Jn(!0),Wn.current=setTimeout(function(){return Jn(!1)},100),N==null||N()},[N]),Bn=(0,e.useCallback)(function(fn){yn(!1),clearTimeout(Mn.current),R==null||R(fn)},[R]);return(0,P.jsxs)("div",{className:ln(Q.root,B),id:k,style:t()({height:vn},V),children:[(0,P.jsx)(r.Uu,{render:function(Nn){var Un=Nn.follow,oe=Nn.onScroll;return(0,P.jsx)(r.A9,t()(t()({url:Fn,websocket:S},G),{},{follow:Pn||Un,height:vn,iconFilterLines:(0,P.jsx)(W.Z,{className:Q.searchBarIcon,icon:A.Z}),iconFindNext:(0,P.jsx)(W.Z,{className:Q.searchBarIcon,icon:v.Z}),iconFindPrevious:(0,P.jsx)(W.Z,{className:Q.searchBarIcon,icon:C.Z}),onError:Bn,onLoad:$n,onScroll:function(Tn){oe(Tn),an==null||an(Tn)}}))},startFollowing:!0}),un&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:Q.loaderText,children:"loading ..."}),(0,P.jsx)(W.Z,{className:Q.loaderIcon,icon:c.Z,spin:!0})]})]})}},52625:function(In,en,n){n.d(en,{T:function(){return M}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(47512),$=n(75271),W=n(90142),r=n(36075),A=n.n(r),v=n(52676),C=(0,$.memo)(function(b){var L=Object.assign({},(A()(b),b));return(0,v.jsx)("svg",t()(t()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},L),{},{children:(0,v.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),c=(0,$.memo)(function(b){var L=Object.assign({},(A()(b),b));return(0,v.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},L),{},{children:[(0,v.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,v.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,v.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),e=(0,$.memo)(function(b){var L=Object.assign({},(A()(b),b));return(0,v.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},L),{},{children:[(0,v.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,v.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,v.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,v.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,v.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,v.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,v.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),U=n(53649),z=n.n(U),p,h=(0,j.kc)(function(b){var L=b.css;return{extraTitle:L(p||(p=z()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),y=["type","size","style","extra","className"],M=(0,$.memo)(function(b){var L=b.type,P=L===void 0?"img":L,x=b.size,D=x===void 0?32:x,w=b.style,T=b.extra,B=b.className,k=E()(b,y),V=(0,j.Fg)(),vn=h(),an=vn.styles,tn;switch(P){case"text":{tn=(0,v.jsx)(e,t()({className:B,height:D,style:w,width:D*2.9375},k));break}case"combine":{tn=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,t()({height:D,style:w,width:D},k)),(0,v.jsx)(e,{style:{height:D,marginLeft:Math.round(D/4),width:"auto"}})]});break}case"img":default:{tn=(0,v.jsx)(c,t()({height:D,style:w,width:D},k));break}}if(!T)return tn;var S=Math.round(D/3*1.9);return(0,v.jsxs)(W.D,t()(t()({align:"center",className:B,horizontal:!0,style:w},k),{},{children:[tn,(0,v.jsx)(C,{style:{color:V.colorFill,height:S,width:S}}),(0,v.jsx)("div",{className:an.extraTitle,style:{fontSize:S},children:T})]}))})},79334:function(In,en,n){n.d(en,{o:function(){return de}});var rn=n(26068),t=n.n(rn),_=n(82092),E=n.n(_),j=n(14837),$=n(64419),W=n(30924),r=n(6988),A=n(56875),v=n(44250),C=n(66108),c=n(36419),e=n(75271),U=n(28485),z=n(48305),p=n.n(z),h=n(71561),y=n(32199),M=(0,c.fA)("INSERT_MENTION_COMMAND"),b=(0,c.fA)("DELETE_MENTION_COMMAND"),L=(0,c.fA)("CLEAR_HIDE_MENU_TIMEOUT"),P=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,x=function(d){var u=d.onBlur,o=d.onFocus,l=(0,h.g)(),a=p()(l,1),O=a[0],I=(0,e.useRef)(null);return(0,e.useEffect)(function(){return(0,y.qV)(O.registerCommand(L,function(){return I.current&&(clearTimeout(I.current),I.current=null),!0},c.VN),O.registerCommand(c.Gq,function(on,cn){return I.current=setTimeout(function(){O.dispatchCommand(c.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),u&&u(),!0},c.VN),O.registerCommand(c.m$,function(){return o&&o(),!0},c.VN))},[O,u,o]),null},D=n(25298),w=n.n(D),T=n(17069),B=n.n(T),k=n(9504),V=n.n(k),vn=n(38836),an=n.n(vn),tn=n(21742),S=n.n(tn),i=n(83136),N=n.n(i),R=function(s){S()(u,s);var d=N()(u);function u(){return w()(this,u),d.apply(this,arguments)}return B()(u,[{key:"createDOM",value:function(l){var a=V()(an()(u.prototype),"createDOM",this).call(this,l);return a.classList.add("align-middle"),a}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(l){return new u(l.__text,l.__key)}},{key:"importJSON",value:function(l){var a=(0,c.MX)(l.text);return a.setFormat(l.format),a.setDetail(l.detail),a.setMode(l.mode),a.setStyle(l.style),a}}]),u}(c.R2);function G(s){return new R(s)}var nn=function(d){var u=d.editable,o=(0,h.g)(),l=p()(o,1),a=l[0];return(0,e.useEffect)(function(){a.setEditable(u)},[u,a]),null},ln=n(62657),Q=n.n(ln),q=n(60477),X=n(44923),f=n(56995),K=n(69024),g=n(52676),H=(0,e.createContext)(null),un=(0,e.memo)(function(s){var d=s.children,u=s.value;return(0,g.jsx)(H.Provider,{value:u,children:d})}),yn=function(){var d=(0,e.useContext)(H);return d==null?void 0:d.optionsMap},Cn=n(33803),Zn=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,Pn="\\(",Jn=function(d){return"(?:"+d.join("|")+")"},Mn=function(d,u){var o=d.length===0?"":"(?!"+d.join("|")+")";return o+"[^\\s"+u+"]"},Wn=function(d){return"(?:\\.[ |$]|\\s|["+d+"]|)"},Fn=75,$n=function(d,u){var o=(0,e.useRef)(null),l=(0,h.g)(),a=p()(l,1),O=a[0],I=(0,Cn.y)(d),on=p()(I,3),cn=on[0],mn=on[1],Y=on[2],An=(0,e.useCallback)(function(jn){var Kn=(0,c.dL)(),kn=Kn==null?void 0:Kn.getNodes();if(!cn&&(kn==null?void 0:kn.length)===1&&O.dispatchCommand(u,void 0),cn&&(0,c.iO)(Kn)){jn.preventDefault();var ce=(0,c.gI)(d);if((0,c.k$)(ce))return u&&O.dispatchCommand(u,void 0),ce.remove(),!0}return!1},[cn,d,u,O]),Rn=(0,e.useCallback)(function(jn){jn.stopPropagation(),Y(),mn(!0)},[mn,Y]);return(0,e.useEffect)(function(){var jn=o.current;return jn&&jn.addEventListener("click",Rn),function(){jn&&jn.removeEventListener("click",Rn)}},[Rn]),(0,e.useEffect)(function(){return(0,y.qV)(O.registerCommand(c.MK,An,c.KB),O.registerCommand(c.aR,An,c.KB))},[O,Y,An]),[o,cn]},Bn=function(){var d=useRef(null),u=useState(!1),o=_slicedToArray(u,2),l=o[0],a=o[1],O=useCallback(function(I){I.stopPropagation(),a(function(on){return!on})},[]);return useEffect(function(){var I=d.current;return I&&I.addEventListener("click",O),function(){I&&I.removeEventListener("click",O)}},[O]),[d,l,a]};function fn(s,d,u,o){return new RegExp((d?"(^|\\s|".concat(d,")("):"(^|\\s)(")+Jn(s)+"((?:"+Mn(s,u)+(o?Wn(u):"")+"){0,"+Fn+"}))$")}function Nn(s,d,u,o,l){var a=fn(d,u,o,l).exec(s);if(a!==null){var O=a[1],I=a[2],on=a[3];if(I.length>0)return{leadOffset:a.index+O.length,matchingString:on,replaceableString:I}}return null}var Un=function(d,u){var o=u.punctuation,l=u.preTriggerChars,a=u.allowSpaces,O=(0,e.useState)(null),I=p()(O,2),on=I[0],cn=I[1],mn=(0,e.useCallback)(function(Y){var An=Nn(Y,d,l,o,a);if(An){var Rn=An.replaceableString,jn=An.matchingString,Kn=Rn.lastIndexOf(jn),kn=Kn===-1?Rn:Rn.slice(0,Math.max(0,Kn))+Rn.slice(Math.max(0,Kn+jn.length));if(cn(kn||null),An.replaceableString)return An}else cn(null);return null},[l,a,o,d]);return{trigger:on,checkForMentionMatch:mn}},oe=n(53649),Z=n.n(oe),Tn=n(47512),ee,xe,Se,ye=(0,Tn.kc)(function(s,d){var u=s.css,o=s.token,l=s.prefixCls,a=d.isSelected,O=d.isError,I=function(){return O?a?{background:o.colorErrorBgActive,border:o.colorErrorBorderHover,color:o.colorErrorTextActive}:{background:o.colorErrorBg,border:o.colorErrorBorder,color:o.colorErrorText}:a?{background:o.colorInfoBgHover,border:o.colorInfoBorder,color:o.colorInfoText}:{background:o.colorFillTertiary,border:"transparent",color:o.colorInfoText}},on=I(),cn=on.background,mn=on.border,Y=on.color;return{root:u(ee||(ee=Z()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),o.fontFamilyCode,Y,cn,mn,o.borderRadius),text:u(xe||(xe=Z()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),o.colorTextSecondary),error:u(Se||(Se=Z()([`
        color: `,`;
      `])),o.colorErrorText)}}),Te=(0,e.memo)(function(s){var d=s.nodeKey,u=s.variable,o=yn(),l=(0,h.g)(),a=p()(l,1),O=a[0],I=$n(d,b),on=p()(I,2),cn=on[0],mn=on[1],Y=o==null?void 0:o[u],An=ye({isSelected:mn,isError:!Y||!!Y.error}),Rn=An.styles;(0,e.useEffect)(function(){if(!O.hasNodes([he]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[O]);var jn=(0,g.jsx)(X.Z,{className:Rn.root,ref:cn,children:(0,g.jsxs)(X.Z,{align:"center",gap:2,children:[(!Y||Y.error)&&(0,g.jsx)(q.Z,{className:Rn.error,icon:K.Z}),(Y==null?void 0:Y.icon)&&(0,g.jsx)(X.Z,{children:Y.icon}),(0,g.jsx)(X.Z,{className:Rn.text,gap:2,title:(Y==null?void 0:Y.label)||u,children:(0,g.jsx)("span",{children:(Y==null?void 0:Y.selectedLabel)||(Y==null?void 0:Y.label)||u})})]})});return Y!=null&&Y.error?(0,g.jsx)(f.Z,{title:Y==null?void 0:Y.error,children:jn}):jn}),he=function(s){S()(u,s);var d=N()(u);function u(o,l){var a;return w()(this,u),a=d.call(this,l),E()(Q()(a),"__variable",void 0),a.__variable=o,a}return B()(u,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var l=document.createElement("div");return l.style.display="inline-flex",l.style.alignItems="center",l.style.verticalAlign="middle",l}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,g.jsx)(Te,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var l=this.getLatest();return l.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(l){return new u(l.__variable,l.__key)}},{key:"importJSON",value:function(l){var a=dn(l.variable);return a}}]),u}(c.Ij);function dn(s){return new he(s)}function m(s){return s instanceof he}var J=(0,e.memo)(function(s){var d=s.onInsert,u=s.onDelete,o=(0,h.g)(),l=p()(o,1),a=l[0];return(0,e.useEffect)(function(){if(!a.hasNodes([he]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,y.qV)(a.registerCommand(M,function(O){a.dispatchCommand(L,null);var I=dn(O);return(0,c.od)([I]),d&&d(),!0},c.VN),a.registerCommand(b,function(){return u&&u(),!0},c.VN))},[a,d,u]),null});J.displayName="MentionNodePlugin";var F=(0,c.fA)("INSERT_MENTION_COMMAND"),pn=(0,c.fA)("DELETE_MENTION_COMMAND"),En=(0,c.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Sn=(0,c.fA)("UPDATE_MENTIONS_OPTIONS"),sn=function(d,u,o){if(d.isSimpleText())for(var l=d.getPreviousSibling(),a=d.getTextContent(),O=d,I;;){I=u(a);var on=I===null?"":a.slice(I.end);if(a=on,on===""){var cn=O.getNextSibling();if((0,c.Gg)(cn)){on=O.getTextContent()+cn.getTextContent();var mn=u(on);if(mn===null){cn.markDirty();return}else if(mn.start!==0)return}}else{var Y=u(on);if(Y!==null&&Y.start===0)return}if(I===null)return;if(!(I.start===0&&(0,c.Gg)(l)&&l.isTextEntity())){var An=void 0;if(I.start===0){var Rn=O.splitText(I.end),jn=p()(Rn,2);An=jn[0],O=jn[1]}else{var Kn=O.splitText(I.start,I.end),kn=p()(Kn,3);An=kn[1],O=kn[2]}var ce=o(An);if(An.replace(ce),O==null)return}}};function te(s){var d=s.split(`
`);return JSON.stringify({root:{children:d.map(function(u){return{children:[{detail:0,format:0,mode:"normal",style:"",text:u,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Vn=(0,e.memo)(function(s){var d=s.onInsert,u=(0,h.g)(),o=p()(u,1),l=o[0];(0,e.useEffect)(function(){if(!l.hasNodes([he]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[l]);var a=(0,e.useCallback)(function(on){d&&d();var cn=on.getTextContent().slice(2,-2);return(0,c.U2)(dn(cn))},[d]),O=(0,e.useCallback)(function(on){var cn=P.exec(on);if(cn===null)return null;var mn=cn.index,Y=mn+cn[0].length;return{end:Y,start:mn}},[]),I=(0,e.useCallback)(function(on){return P.lastIndex=0,sn(on,O,a)},[a,O]);return(0,e.useEffect)(function(){return P.lastIndex=0,(0,y.qV)(l.registerNodeTransform(R,I))},[]),null}),Ln=n(99934),Qn=n(64287),_n=n(30967),re=n(83606),Hn=function(s){S()(u,s);var d=N()(u);function u(o){var l,a=o.label,O=o.value,I=o.data,on=o.icon,cn=o.extraElement,mn=o.keywords,Y=o.keyboardShortcut,An=o.disabled,Rn=o.onSelect,jn=o.children,Kn=o.isChild;return w()(this,u),l=d.call(this,O),E()(Q()(l),"label",void 0),E()(Q()(l),"value",void 0),E()(Q()(l),"title",void 0),E()(Q()(l),"key",void 0),E()(Q()(l),"icon",void 0),E()(Q()(l),"extraElement",void 0),E()(Q()(l),"keywords",void 0),E()(Q()(l),"keyboardShortcut",void 0),E()(Q()(l),"onSelect",void 0),E()(Q()(l),"disabled",void 0),E()(Q()(l),"data",void 0),E()(Q()(l),"children",void 0),E()(Q()(l),"isChild",void 0),l.value=O,l.label=a,l.title=a,l.key=O,l.keywords=mn||[],l.icon=on,l.extraElement=cn,l.keyboardShortcut=Y,l.onSelect=Rn.bind(Q()(l)),l.disabled=An,l.data=I,l.isChild=Kn!=null?Kn:!1,l.children=jn==null?void 0:jn.map(function(kn){return new u(t()(t()({},kn),{},{isChild:!0}))}),l}return B()(u)}(Ln.n),ae=function s(d,u){var o;return d.children=(o=d.children)===null||o===void 0?void 0:o.filter(function(l){if(!l.children)return u(l);var a=s(l,u);return u(l)||(a.children||[]).length>0}),d},On=function(d,u){var o=(0,h.g)(),l=p()(o,1),a=l[0],O=(0,e.useCallback)(function(on){var cn,mn=new RegExp((0,re.Z)(u),"i");return mn.test(on.label)||((cn=on.keywords)===null||cn===void 0?void 0:cn.some(function(Y){return mn.test(Y)}))||!1},[u]),I=(0,e.useMemo)(function(){var on=function mn(Y){var An=t()(t()({},Y),{},{children:void 0,onSelect:function(){a.dispatchCommand(M,Y.value)}});return Y.children&&(An.children=Y.children.map(function(Rn){return mn(Rn)})),An},cn=d.map(function(mn){return new Hn(on(mn))});return u?cn.map(function(mn){return mn.children?ae(mn,O):mn}).filter(function(mn){return O(mn)||(mn.children||[]).length>0}):cn},[d,u,a,O]);return{options:I}},se=n(78962),ue=n(94729),ie,Yn,ve,me,le,qn,Gn,bn=(0,Tn.kc)(function(s,d){var u=s.css,o=s.token,l=s.prefixCls,a=d.isSelected,O=d.disabled,I=u(ie||(ie=Z()([`
      background-color: `,`;
    `])),o.colorFillSecondary);return{anchor:u(Yn||(Yn=Z()([`
        z-index: 9999;
      `]))),menuEmpty:u(ve||(ve=Z()([`
        padding: `,`px;
      `])),o.padding),menuOverlay:u(me||(me=Z()([`
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
      `])),o.marginXXS,o.paddingXXS,o.colorBgElevated,o.borderRadius,o.boxShadow,l),menuItem:u(le||(le=Z()([`
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
      `])),O?"not-allowed":"pointer",O?"none":"all",o.paddingXS,o.borderRadius,O?o.colorTextDisabled:o.colorText,o.fontSize,a&&I,I),menuItemIcon:u(qn||(qn=Z()([`
        color: `,`;
      `])),o.colorInfoText),menuItemLabel:u(Gn||(Gn=Z()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),hn=ue.C.Text,gn=(0,e.memo)(function(s){var d=s.index,u=s.isSelected,o=s.onClick,l=s.onMouseEnter,a=s.option,O=s.queryString,I=s.showIcon,on=I===void 0?!0:I,cn=bn({isSelected:u,disabled:a.disabled}),mn=cn.styles,Y=a.label,An=(0,e.useMemo)(function(){var kn=Y,ce="",Fe="";if(O){var We=new RegExp((0,re.Z)(O),"i"),Oe=We.exec(a.label);Oe&&(kn=Y.slice(0,Math.max(0,Oe.index)),ce=Oe[0],Fe=Y.slice(Math.max(0,Oe.index+Oe[0].length)))}return{before:kn,middle:ce,after:Fe}},[a.label,O,Y]),Rn=An.before,jn=An.middle,Kn=An.after;return(0,g.jsxs)(X.Z,{align:"center",className:mn.menuItem,gap:4,onClick:function(){return o==null?void 0:o(d,a)},onMouseEnter:function(){return l==null?void 0:l(d,a)},ref:a.setRefElement,tabIndex:-1,children:[on&&(0,g.jsx)(X.Z,{className:mn.menuItemIcon,children:a.icon}),(0,g.jsxs)("div",{className:mn.menuItemLabel,title:a.label,children:[Rn,(0,g.jsx)(hn,{mark:!0,children:jn}),Kn]}),(0,g.jsx)(X.Z,{children:a.extraElement})]},a.key)});gn.displayName="MentionMenuItem";var zn=(0,e.memo)(function(s){var d=s.selectedIndex,u=s.options,o=s.onClick,l=s.onMouseEnter,a=s.queryString,O=bn({}),I=O.styles;return(0,g.jsxs)(g.Fragment,{children:[u.length===0&&(0,g.jsx)(se.Z,{className:I.menuEmpty,image:se.Z.PRESENTED_IMAGE_SIMPLE}),u.map(function(on,cn){return(0,g.jsx)(gn,{index:cn,isSelected:d===cn,onClick:o,onMouseEnter:l,option:on,queryString:a},on.key)})]})}),Dn=(0,e.memo)(function(s){var d=s.overlayClassName,u=s.triggers,o=s.options,l=o===void 0?[]:o,a=s.allowSpaces,O=a===void 0?!0:a,I=s.punctuation,on=I===void 0?Zn:I,cn=s.preTriggerChars,mn=cn===void 0?Pn:cn,Y=s.onSelect,An=bn({}),Rn=An.cx,jn=An.styles,Kn=(0,h.g)(),kn=p()(Kn,1),ce=kn[0],Fe=Un(u,{punctuation:on,preTriggerChars:mn,allowSpaces:O}),We=Fe.trigger,Oe=Fe.checkForMentionMatch,Xe=(0,e.useState)(null),Ve=p()(Xe,2),De=Ve[0],Je=Ve[1],Ye=On(l,De),Pe=Ye.options,Ge=(0,e.useCallback)(function(ne,Ce,$e,Ze){Y==null||Y(ne,We,De),ce.update(function(){Ce&&ne!==null&&ne!==void 0&&ne.key&&Ce.remove(),ne!=null&&ne.onSelect&&ne.onSelect(Ze),$e()})},[ce,Y,De,We]),ge=(0,e.useCallback)(function(ne){var Ce=ne.selectedIndex,$e=ne.selectOptionAndCleanUp;return(0,g.jsx)(C.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,g.jsx)(Qn.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Re,pe){var Me=pe.nativeEvent;Me.stopPropagation(),ce.dispatchCommand(L,{})},onSelect:function(Re,pe){$e(pe.node)},titleRender:function(Re){var pe;return(0,g.jsx)(gn,{isSelected:((pe=Pe[Ce])===null||pe===void 0?void 0:pe.value)===Re.value,option:Re,queryString:De,showIcon:!Re.isChild})},treeData:Pe})})},[Pe,ce,De]),Ke=(0,e.useCallback)(function(ne,Ce,$e){var Ze=Ce.selectedIndex,Re=Ce.selectOptionAndCleanUp,pe=Ce.setHighlightedIndex;return ne.current?_n.createPortal((0,g.jsx)("div",{className:Rn(jn.menuOverlay,d),role:"menu",children:Pe.some(function(Me){return(Me.children||[]).length>0})?ge(Ce):(0,g.jsx)(zn,{onClick:function(Ue,Qe){Qe.disabled||(pe(Ue),Re(Qe))},onMouseEnter:function(Ue,Qe){Qe.disabled||pe(Ue)},options:Pe,queryString:De,selectedIndex:Ze})}),ne.current):null},[Rn,Pe,d,De,ge,jn.menuOverlay]);return(0,g.jsx)(Ln.HQ,{anchorClassName:jn.anchor,menuRenderFn:Ke,onQueryChange:Je,onSelectOption:Ge,options:Pe,triggerFn:Oe})}),Xn,wn,Ae,Ne,Le,be,Ee,je,Ie=32,ze=22,xn=function(d){return Ie+Math.max(d-1,0)*ze},fe=(0,Tn.kc)(function(s,d){var u=s.css,o=s.token,l=s.prefixCls,a=d.autoSize;return{wrapper:u(Xn||(Xn=Z()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:u(wn||(wn=Z()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Ie,o.fontSize,Ie,o.colorTextPlaceholder),root:u(Ae||(Ae=Z()([`
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
      `])),o.colorBorder,o.borderRadius,o.colorText,o.fontSize,o.fontFamily,(a==null?void 0:a.minRows)&&u(Ne||(Ne=Z()([`
          min-height: `,`px;
        `])),xn(a.minRows)),(a==null?void 0:a.maxRows)&&u(Le||(Le=Z()([`
          max-height: `,`px;
        `])),xn(a.maxRows)),o.motionDurationMid,o.colorPrimaryBorder,ze),filled:u(be||(be=Z()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),o.colorFillTertiary,o.colorFillSecondary,o.colorBgBase),borderless:u(Ee||(Ee=Z()([`
        background: transparent;
        border: none;
      `]))),disabled:u(je||(je=Z()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),o.colorTextDisabled,o.colorBgContainerDisabled)}}),de=function(d){var u=d.className,o=d.classNames,l=d.placeholder,a=d.style,O=d.value,I=d.defaultValue,on=d.readOnly,cn=on===void 0?!1:on,mn=d.disabled,Y=d.onChange,An=d.onBlur,Rn=d.onFocus,jn=d.variant,Kn=jn===void 0?"outlined":jn,kn=d.options,ce=kn===void 0?[]:kn,Fe=d.autoSize,We=d.triggers,Oe=We===void 0?["@"]:We,Xe=d.allowSpaces,Ve=d.punctuation,De=d.preTriggerChars,Je=d.onSelect,Ye=C.ZP.useConfig(),Pe=Ye.componentDisabled,Ge=fe({autoSize:Fe}),ge=Ge.styles,Ke=Ge.cx,ne=(0,e.useMemo)(function(){return mn!=null?mn:Pe},[Pe,mn]),Ce=(0,e.useMemo)(function(){return!cn&&!ne},[ne,cn]),$e=(0,e.useMemo)(function(){return{namespace:"mentions",nodes:[R,{replace:c.R2,with:function(Me){return new R(Me.__text)}},he],editorState:te(O||I||""),onError:function(Me){throw Me}}},[]),Ze=function(Me){var Ue=Me.read(function(){return(0,c.Gv)().getTextContent()});Y==null||Y(Ue.replaceAll(`

`,`
`))},Re=(0,e.useMemo)(function(){var pe=function Me(Ue,Qe){return Ue.reduce(function(He,Be){if(He[Be.value]=Be,He[Be.value].icon||(He[Be.value].icon=Qe),Be.children&&Be.children.length>0){var we=Me(Be.children,Be.icon);Object.assign(He,we)}return He},{})};return pe(ce)},[ce]);return U.j?(0,g.jsx)(j.R,{initialConfig:t()(t()({},$e),{},{editable:Ce}),children:(0,g.jsx)(un,{value:{optionsMap:Re},children:(0,g.jsxs)("div",{className:Ke(ge.wrapper,o==null?void 0:o.wrapper),children:[(0,g.jsx)(v.B,{ErrorBoundary:W.g,contentEditable:(0,g.jsx)($.f,{className:Ke(E()(E()(E()(E()({},ge.root,!0),ge.filled,Kn==="filled"),ge.borderless,Kn==="borderless"),ge.disabled,ne),u),style:a||{}}),placeholder:(0,g.jsx)("div",{className:ge.placeholder,children:l||"\u8F93\u5165 ".concat(Oe.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),Ce&&(0,g.jsx)(Dn,{allowSpaces:Xe,onSelect:Je,options:ce,overlayClassName:o==null?void 0:o.menuOverlay,preTriggerChars:De,punctuation:Ve,triggers:Oe}),(0,g.jsx)(J,{}),(0,g.jsx)(Vn,{}),(0,g.jsx)(r.e,{}),(0,g.jsx)(A.$,{onChange:Ze}),(0,g.jsx)(x,{onBlur:An,onFocus:Rn}),(0,g.jsx)(nn,{editable:Ce})]})})}):(0,g.jsxs)("div",{className:Ke(ge.wrapper,o==null?void 0:o.wrapper),children:[(0,g.jsx)("div",{className:Ke(E()(E()(E()(E()({},ge.root,!0),ge.filled,Kn==="filled"),ge.borderless,Kn==="borderless"),ge.disabled,ne),u),style:a||{}}),(0,g.jsx)("div",{className:ge.placeholder,children:l||"\u8F93\u5165 ".concat(Oe.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(In,en,n){n.d(en,{u:function(){return h}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(51697),$=n(75271),W="yunti-ui",r=n(53649),A=n.n(r),v=n(47512),C,c,e=(0,v.kc)(function(M,b){var L=M.css,P=M.prefixCls,x=b.borderd,D=x===void 0?!0:x,w=b.footer,T=w===null||Array.isArray(w)&&w.length===0,B=L(C||(C=A()([`
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
    `])),P,P,T?0:"40px",P,T?0:"1px");return{custom:L(c||(c=A()([`
        `,`
      `])),D&&B)}},{hashPriority:"low"}),U=n(52676),z=["className","borderd"],p=function(b){var L=b.className,P=b.borderd,x=P===void 0?!0:P,D=E()(b,z),w=e(t()({borderd:x},D)),T=w.styles,B=w.cx;return(0,U.jsx)(j.Z,t()(t()({},D),{},{className:B(T.custom,"".concat(W,"-modal"),L)}))},h=p;h.useModal=j.Z.useModal,h.destroyAll=j.Z.destroyAll,h.config=j.Z.config,h._InternalPanelDoNotUseOrYouWillBeFired=j.Z._InternalPanelDoNotUseOrYouWillBeFired,h.info=j.Z.info,h.success=j.Z.success,h.error=j.Z.error,h.warning=j.Z.warning,h.warn=j.Z.warn,h.confirm=j.Z.confirm;var y=null},81321:function(In,en,n){n.d(en,{ZM:function(){return ye},Hu:function(){return B},Xq:function(){return he},rE:function(){return Te}});var rn=n(26068),t=n.n(rn),_=n(48305),E=n.n(_),j=n(67825),$=n.n(j),W=n(33592),r=n(75271),A=n(94456),v=n(60477),C=n(71170),c=n(32328),e=n(87449),U=n(28485),z=n(90228),p=n.n(z),h=n(87999),y=n.n(h),M=n(97524),b=n(50279),L=n(25298),P=n.n(L),x=n(17069),D=n.n(x),w=n(82092),T=n.n(w),B=function(){function dn(){P()(this,dn),T()(this,"methodMap",void 0),T()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return D()(dn,[{key:"registerMethod",value:function(J,F){this.methodMap[J]=F}},{key:"call",value:function(J){for(var F,pn,En=arguments.length,Sn=new Array(En>1?En-1:0),sn=1;sn<En;sn++)Sn[sn-1]=arguments[sn];return(F=(pn=this.methodMap)[J])===null||F===void 0?void 0:F.call.apply(F,[pn].concat(Sn))}},{key:"updateMeta",value:function(J){Object.assign(this.meta,J)}},{key:"getMeta",value:function(){return Object.freeze(t()({},this.meta))}}]),dn}(),k="__base_monaco_editor_controller__",V=U.j&&window;V&&!V[k]&&(V[k]=new B);var vn=V[k],an=function(){var dn,m;return function(){var J=y()(p()().mark(function F(pn){var En;return p()().wrap(function(sn){for(;;)switch(sn.prev=sn.next){case 0:if(!(!dn||!(0,b.Z)(m,pn))){sn.next=7;break}return En=Object.keys(pn||{}).length>0,M.Z.config(En?pn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),sn.next=5,M.Z.init();case 5:dn=sn.sent,m=pn;case 7:return sn.abrupt("return",dn);case 8:case"end":return sn.stop()}},F)}));return function(F){return J.apply(this,arguments)}}()}(),tn=function(m){return m?M.Z.config(m):M.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),M.Z.init()};function S(dn){var m=Object.keys(dn||{}).length>0,J=m?dn:void 0;return vn.getMeta().singleton?an(J):tn(J)}function i(dn){controller.updateMeta(dn)}var N=U.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",R=N==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",G={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},nn={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function ln(dn){var m=(0,r.useRef)();return(0,r.useEffect)(function(){m.current=dn},[dn]),m.current}function Q(dn,m,J,F){if(F){var pn=dn.editor.getModel(dn.Uri.parse(F));if(pn)return pn}return dn.editor.createModel(m,J,F?dn.Uri.parse(F):void 0)}var q=function(m,J){var F=J.editorDidMount,pn=J.editorWillMount,En=J.theme,Sn=J.value,sn=J.path,te=J.language,Vn=J.saveViewState,Ln=J.defaultValue,Qn=J.enhancers,_n=(0,r.useState)(!1),re=E()(_n,2),Hn=re[0],ae=re[1],On=(0,r.useState)(!1),se=E()(On,2),ue=se[0],ie=se[1],Yn=(0,r.useState)(!1),ve=E()(Yn,2),me=ve[0],le=ve[1],qn=(0,r.useRef)(Ln),Gn=(0,r.useRef)(Sn),bn=(0,r.useRef)(te||"text"),hn=(0,r.useRef)(sn),gn=ln(sn),zn=(0,r.useRef)(J.requireConfig),Dn=(0,r.useRef)(J.options),Xn=(0,r.useRef)(),wn=(0,r.useRef)(),Ae=(0,r.useRef)(),Ne=(0,r.useRef)(m),Le=(0,r.useRef)(),be=(0,r.useRef)(),Ee=(0,r.useRef)(!1),je=(0,r.useRef)(new Map),Ie=(0,r.useRef)({});(0,r.useEffect)(function(){Ie.current.enhancers=Qn},[Qn]),(0,r.useEffect)(function(){Le.current=F},[F]),(0,r.useEffect)(function(){be.current=pn},[pn]),(0,r.useEffect)(function(){Gn.current=Sn},[Sn]),(0,r.useEffect)(function(){bn.current=te},[te]),(0,r.useEffect)(function(){qn.current=Ln},[Ln]),(0,r.useEffect)(function(){le(!0),S(zn.current).then(function(xn){var fe;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Xn.current=xn;try{var de;(de=be.current)===null||de===void 0||de.call(be,xn)}catch(I){}if(Ae.current){var s;if(Ne.current==="single"){var d,u,o=Q(xn,(d=(u=Gn.current)!==null&&u!==void 0?u:qn.current)!==null&&d!==void 0?d:"",bn.current,hn.current);s=xn.editor.create(Ae.current,t()(t()({automaticLayout:!0},G),Dn.current)),s.setModel(o)}else{var l=xn.editor.createModel(Gn.current,bn.current),a=xn.editor.createModel(Gn.current,bn.current);s=xn.editor.createDiffEditor(Ae.current,t()(t()({automaticLayout:!0},nn),Dn.current)),s.setModel({original:l,modified:a})}wn.current=s,(fe=Ie.current.enhancers)===null||fe===void 0||fe.forEach(function(I){return I(xn,s)});try{var O;(O=Le.current)===null||O===void 0||O.call(Le,xn,s)}catch(I){}Ee.current||ae(!0)}}).catch(function(xn){console.error("Monaco Editor Load Error!",xn)}).then(function(){Ee.current||le(!1)})},[]),(0,r.useEffect)(function(){var xn;Hn&&((xn=Xn.current)===null||xn===void 0||xn.editor.setTheme(En))},[Hn,En]),(0,r.useEffect)(function(){if(Hn){var xn=m==="diff"?wn.current.getModifiedEditor():wn.current;xn==null||xn.onDidFocusEditorText(function(){Ee.current||ie(!0)}),xn==null||xn.onDidBlurEditorText(function(){Ee.current||ie(!1)})}},[Hn,m]),(0,r.useEffect)(function(){return function(){Ee.current=!0}},[]),(0,r.useEffect)(function(){var xn,fe,de;if(Hn&&!(m!=="diff"&&sn)){var s=m==="diff"?wn.current.getModifiedEditor():wn.current,d=(xn=Sn!=null?Sn:qn.current)!==null&&xn!==void 0?xn:"",u=(fe=Xn.current)===null||fe===void 0?void 0:fe.editor.EditorOption.readOnly;u&&s!==null&&s!==void 0&&(de=s.getOption)!==null&&de!==void 0&&de.call(s,u)?s==null||s.setValue(d):Sn!==(s==null?void 0:s.getValue())&&(s==null||s.executeEdits("",[{range:s==null?void 0:s.getModel().getFullModelRange(),text:d,forceMoveMarkers:!0}]),s==null||s.pushUndoStop())}},[Hn,sn,m,Sn]),(0,r.useEffect)(function(){var xn,fe;if(Hn&&m!=="diff"&&sn!==gn){var de=Q(Xn.current,(xn=Gn.current)!==null&&xn!==void 0?xn:qn.current,bn.current,sn),s=wn.current;Gn.current!==null&&Gn.current!==void 0&&de.getValue()!==Gn.current&&de.setValue(Gn.current),de!==((fe=wn.current)===null||fe===void 0?void 0:fe.getModel())&&(Vn&&je.current.set(gn,s.saveViewState()),s.setModel(de),Vn&&s.restoreViewState(je.current.get(sn)))}},[Hn,Sn,sn,gn,m,Vn]);var ze=wn;return{isEditorReady:Hn,focused:ue,loading:me,containerRef:Ae,monacoRef:Xn,editorRef:ze,valueRef:Gn}},X=function(m){var J=(0,r.useState)(!1),F=E()(J,2),pn=F[0],En=F[1],Sn=function(){if(pn){En(!1),m==null||m.updateOptions(t()(t()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!1}})),m==null||m.layout();return}En(!0),m==null||m.updateOptions(t()(t()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!0}})),m==null||m.layout()};return{isFullScreen:pn,fullScreen:Sn}},f=n(53649),K=n.n(f),g=n(47512),H,un,yn,Cn,Zn,Pn,Jn,Mn,Wn,Fn,$n,Bn=(0,g.kc)(function(dn,m){var J=dn.css,F=dn.token,pn=dn.prefixCls,En=m.minimapEnabled,Sn=En===void 0?!1:En,sn=m.isFullScreen,te=sn===void 0?!1:sn,Vn=m.diff,Ln=Vn===void 0?!1:Vn,Qn=m.variant,_n=Qn===void 0?"outlined":Qn,re=(0,g.F4)(H||(H=K()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),Hn=function(){switch(_n){case"outlined":return F.colorBgBase;case"filled":return F.colorFillTertiary;default:return"transparent"}};return{base:J(un||(un=K()([`
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
      `])),Hn(),_n==="outlined"?F.colorBorder:"transparent",F.borderRadius,_n==="outlined"?F.colorPrimaryHover:"transparent",_n==="filled"&&J(yn||(yn=K()([`
            background-color: `,`;
          `])),F.colorFillSecondary),_n==="filled"&&J(Cn||(Cn=K()([`
            background-color: `,`;
          `])),F.colorBgBase),_n!=="borderless"&&J(Zn||(Zn=K()([`
            border-color: `,`;
          `])),F.colorPrimaryActive),te&&J(Pn||(Pn=K()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!te&&J(Jn||(Jn=K()([`
              background-color: transparent;
            `]))),F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius-1,F.borderRadius-1,F.colorErrorText,F.colorErrorBg),fullScreenBtn:J(Mn||(Mn=K()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),pn,F.colorTextSecondary,te?J(Wn||(Wn=K()([`
                z-index: 9999;
                right: `,`px;
              `])),Ln?64:138):J(Fn||(Fn=K()([`
                right: `,`px;
              `])),Sn||Ln?64:20)),loading:J($n||($n=K()([`
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
      `])),F.fontSizeSM,F.colorTextTertiary,re)}},{hashPriority:"low"}),fn=n(52676);function Nn(){}var Un=function(m){var J,F=m.onChange,pn=m.enableOutline,En=m.width,Sn=m.height,sn=m.language,te=m.supportFullScreen,Vn=(0,r.useRef)(F),Ln=q("single",m),Qn=Ln.isEditorReady,_n=Ln.focused,re=Ln.loading,Hn=Ln.containerRef,ae=Ln.monacoRef,On=Ln.editorRef,se=Ln.valueRef,ue=(0,r.useRef)(),ie=X(On==null?void 0:On.current),Yn=ie.isFullScreen,ve=ie.fullScreen,me=Bn({isFullScreen:Yn,minimapEnabled:(J=m.options)===null||J===void 0||(J=J.minimap)===null||J===void 0?void 0:J.enabled,variant:m.variant}),le=me.cx,qn=me.styles,Gn=le(qn.base,m.className,{"ve-focused":_n,"ve-outline":pn}),bn=(0,r.useMemo)(function(){return{width:En,height:Sn}},[En,Sn]);return(0,r.useEffect)(function(){Vn.current=F},[F]),(0,r.useEffect)(function(){if(Qn){var hn,gn=On.current;(hn=ue.current)===null||hn===void 0||hn.dispose(),ue.current=gn==null?void 0:gn.onDidChangeModelContent(function(zn){var Dn,Xn=gn==null||(Dn=gn.getModel())===null||Dn===void 0?void 0:Dn.getValue();if(se.current!==Xn){var wn;(wn=Vn.current)===null||wn===void 0||wn.call(Vn,Xn,zn)}})}},[On,Qn,ue,se]),(0,r.useEffect)(function(){return function(){var hn,gn,zn,Dn=On.current;(hn=ue.current)===null||hn===void 0||hn.dispose(),Dn==null||(gn=Dn.getModel())===null||gn===void 0||gn.dispose(),(zn=On.current)===null||zn===void 0||zn.dispose()}},[On]),(0,r.useEffect)(function(){var hn;if(Qn){var gn=(hn=On.current)===null||hn===void 0?void 0:hn.getModel();if(gn){var zn;(zn=ae.current)===null||zn===void 0||zn.editor.setModelLanguage(gn,sn)}}},[On,Qn,sn,ae]),(0,fn.jsxs)("div",{className:Gn,style:m.style,children:[re&&(0,fn.jsx)("span",{className:le(qn.loading,"loading"),children:R}),(0,fn.jsx)("div",{className:"react-monaco-editor-container",ref:Hn,style:bn,children:te&&(0,fn.jsx)(C.ZP,{className:qn.fullScreenBtn,icon:(0,fn.jsx)(v.Z,{icon:Yn?c.Z:e.Z}),onClick:ve,size:"small",type:"text"})})]})},oe=function(m){var J=m.enableOutline,F=m.width,pn=m.height,En=m.language,Sn=m.onChange,sn=m.original,te=m.supportFullScreen,Vn=(0,r.useRef)(Sn),Ln=q("diff",m),Qn=Ln.isEditorReady,_n=Ln.focused,re=Ln.loading,Hn=Ln.containerRef,ae=Ln.monacoRef,On=Ln.editorRef,se=Ln.valueRef,ue=X(),ie=ue.isFullScreen,Yn=ue.fullScreen,ve=Bn({isFullScreen:ie,diff:!0,variant:m.variant}),me=ve.cx,le=ve.styles,qn=me(le.base,m.className,{"ve-focused":_n,"ve-outline":J}),Gn=(0,r.useMemo)(function(){return{width:F,height:pn}},[F,pn]);return(0,r.useEffect)(function(){Vn.current=Sn},[Sn]),(0,r.useEffect)(function(){var bn;if(Qn){(bn=On.current.getModel())===null||bn===void 0||bn.original.setValue(sn!=null?sn:"");var hn=On.current.getModel()||{},gn=hn.modified;gn==null||gn.onDidChangeContent(function(zn){var Dn=gn.getValue();if(se.current!==Dn){var Xn;(Xn=Vn.current)===null||Xn===void 0||Xn.call(Vn,Dn,zn)}})}},[On,Qn,sn,se]),(0,r.useEffect)(function(){return function(){var bn,hn,gn;(bn=On.current)===null||bn===void 0||(bn=bn.getModel())===null||bn===void 0||(bn=bn.original)===null||bn===void 0||bn.dispose(),(hn=On.current)===null||hn===void 0||(hn=hn.getModel())===null||hn===void 0||(hn=hn.modified)===null||hn===void 0||hn.dispose(),(gn=On.current)===null||gn===void 0||gn.dispose()}},[On]),(0,r.useEffect)(function(){var bn,hn,gn;if(Qn){var zn=((bn=On.current)===null||bn===void 0?void 0:bn.getModel())||{},Dn=zn.original,Xn=zn.modified;(hn=ae.current)===null||hn===void 0||hn.editor.setModelLanguage(Dn,En),(gn=ae.current)===null||gn===void 0||gn.editor.setModelLanguage(Xn,En)}},[On,Qn,En,ae]),(0,fn.jsxs)("div",{className:qn,style:m.style,children:[re&&(0,fn.jsx)("span",{className:me(le.loading,"loading"),children:R}),(0,fn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Hn,style:Gn,children:te&&(0,fn.jsx)(C.ZP,{className:le.fullScreenBtn,icon:(0,fn.jsx)(v.Z,{icon:ie?c.Z:e.Z}),onClick:Yn,size:"small",type:"text"})})]})},Z=Object.assign(oe,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:G,editorDidMount:Nn,editorWillMount:Nn,onChange:Nn,requireConfig:{}}}),Tn=Object.assign(Un,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:G,editorDidMount:Nn,editorWillMount:Nn,onChange:Nn,requireConfig:{}},MonacoDiffEditor:Z}),ee=null,xe=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Se=["inlineView","options"],ye=function(m){var J=m.type,F=J===void 0?"single":J,pn=m.editorDidMount,En=m.readOnly,Sn=En===void 0?!1:En,sn=m.lineNumbers,te=sn===void 0?"on":sn,Vn=m.wordWrap,Ln=Vn===void 0?"off":Vn,Qn=m.contextmenu,_n=Qn===void 0?!0:Qn,re=m.theme,Hn=m.minimapEnabled,ae=Hn===void 0?!1:Hn,On=m.version,se=On===void 0?"0.45.0":On,ue=m.requireConfig,ie=ue===void 0?{}:ue,Yn=m.options,ve=m.className,me=m.supportFullScreen,le=$()(m,xe),qn=(0,r.useRef)(pn);(0,r.useEffect)(function(){qn.current=pn},[pn]);var Gn=(0,W.r)(),bn=Gn.isDarkMode,hn=(0,r.useMemo)(function(){return re||(bn?"vs-dark":"vs")},[bn,re]),gn=(0,r.useState)(),zn=E()(gn,2),Dn=zn[0],Xn=zn[1],wn=(0,r.useCallback)(function(be,Ee){var je;Xn(Ee),(je=qn.current)===null||je===void 0||je.call(qn,be,Ee)},[]),Ae=(0,r.useMemo)(function(){var be=Object.assign({},Yn,{readOnly:Sn,lineNumbers:te,wordWrap:Ln,contextmenu:_n,minimap:ae===void 0?Yn==null?void 0:Yn.minimap:Object.assign({},Yn==null?void 0:Yn.minimap,{enabled:ae})});return Dn==null||Dn.updateOptions(be),be},[Yn,Sn,te,Ln,_n,ae,Dn]),Ne=(0,A.nc)(),Le=(0,r.useMemo)(function(){return Object.assign({},ie,{paths:t()({vs:Ne({path:"min/vs",pkg:"monaco-editor",version:se})},ie.paths)})},[Ne,ie,se]);return F!=="diff"?(0,fn.jsx)(Tn,t()({className:ve,editorDidMount:wn,options:Ae,requireConfig:Le,supportFullScreen:Dn&&me,theme:hn},le)):(0,fn.jsx)(Tn.MonacoDiffEditor,t()({className:ve,editorDidMount:wn,options:Ae,requireConfig:Le,supportFullScreen:Dn&&me,theme:hn},le))},Te=function(m){return(0,fn.jsx)(ye,t()(t()({},m),{},{type:"single"}))},he=function(m){var J=m.inlineView,F=J===void 0?"off":J,pn=m.options,En=$()(m,Se);return(0,fn.jsx)(ye,t()(t()({options:Object.assign({useInlineViewWhenSpaceIsLimited:F==="on"||F==="auto",renderSideBySide:F==="off"||F==="auto"},pn)},En),{},{type:"diff"}))}},25777:function(In,en,n){n.d(en,{W:function(){return vn}});var rn=n(26068),t=n.n(rn),_=n(15558),E=n.n(_),j=n(48305),$=n.n(j),W=n(67825),r=n.n(W),A=n(60477),v=n(83293),C=n(44923),c=n(46847),e=n(82338),U=n(2405),z=n(75271),p=n(53649),h=n.n(p),y=n(47512),M,b,L,P,x,D=function(tn){switch(tn){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},w=(0,y.kc)(function(an,tn){var S=an.css,i=an.token,N=an.prefixCls,R=tn.disabled,G=tn.size,nn=D(G),ln=nn.cardWidth;return{option:S(M||(M=h()([`
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
      `])),i.colorBorder,i.borderRadius,R?"not-allowed":"pointer",i.padding,i.motionDurationFast,ln,R&&S(b||(b=h()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),i.colorBgContainerDisabled,N,i.colorTextDisabled,N,i.colorTextDisabled),!R&&S(L||(L=h()([`
          &:hover {
            border-color: `,`;
          }
        `])),i.colorPrimaryBorderHover),N),optionSelected:S(P||(P=h()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),i.colorPrimary,i.colorPrimaryActive),check:S(x||(x=h()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),i.marginXS,i.marginXS,i.colorPrimary)}}),T=n(52676),B=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],k=v.Z.Text,V=v.Z.Paragraph,vn=z.forwardRef(function(an,tn){var S=an.defaultValue,i=an.value,N=an.onChange,R=an.multiple,G=R===void 0?!1:R,nn=an.disabled,ln=nn===void 0?!1:nn,Q=an.options,q=Q===void 0?[]:Q,X=an.classNames,f=an.styles,K=an.size,g=K===void 0?"middle":K,H=an.optionRender,un=r()(an,B),yn=(0,z.useMemo)(function(){return q.some(function(Z){return!!Z.img||!!Z.icon})},[q]),Cn=w({disabled:ln,size:g}),Zn=Cn.cx,Pn=Cn.styles,Jn=(0,z.useMemo)(function(){return D(g)},[g]),Mn=Jn.imgHeight,Wn=(0,z.useCallback)(function(Z){return!G||Array.isArray(Z)?Z:Z===void 0?[]:[Z]},[G]),Fn=(0,U.C8)(Wn(S),{defaultValue:Wn(S),value:i,onChange:N}),$n=$()(Fn,2),Bn=$n[0],fn=$n[1],Nn=(0,z.useCallback)(function(Z){if(!ln){if(!G){fn(Z);return}if(Bn.includes(Z)){fn(Bn.filter(function(Tn){return Tn!==Z}));return}fn([].concat(E()(Bn),[Z]))}},[Bn,ln,G,fn]),Un=(0,z.useCallback)(function(Z){return G?Bn.includes(Z):Bn===Z},[Bn,G]),oe=(0,z.useCallback)(function(Z,Tn){var ee=Un(Z.value),xe=(0,T.jsxs)(C.Z,{align:yn?"center":"flex-start",className:Zn(Pn.option,ee&&Pn.optionSelected,X==null?void 0:X.card),gap:"small",onClick:function(){return Nn(Z.value)},style:t()(t()({},f==null?void 0:f.card),Z.style),vertical:!0,children:[yn&&(0,T.jsx)(c.C,{className:X==null?void 0:X.icon,icon:Z.icon,shape:"square",size:Mn,src:Z.img,style:t()(t()({},f==null?void 0:f.icon),Z.iconStyle)}),Z.label&&ee&&(0,T.jsx)(k,{ellipsis:!0,strong:!0,children:Z.label}),Z.label&&!ee&&(0,T.jsx)(k,{ellipsis:!0,children:Z.label}),!yn&&Z.description&&(0,T.jsx)(V,{ellipsis:{rows:2},type:"secondary",children:Z.description}),ee&&(0,T.jsx)(A.Z,{className:Pn.check,icon:e.Z})]},Z.value);return H?H(xe,Z,Tn):xe},[X==null?void 0:X.card,X==null?void 0:X.icon,Zn,Mn,yn,Un,Nn,H,Pn.check,Pn.option,Pn.optionSelected,f==null?void 0:f.card,f==null?void 0:f.icon]);return(0,T.jsx)(C.Z,t()(t()({gap:"large",ref:tn,wrap:!0},un),{},{children:q.map(function(Z,Tn){return oe(Z,Tn)})}))})},66269:function(In,en,n){n.d(en,{a:function(){return C}});var rn=n(26068),t=n.n(rn),_=n(48305),E=n.n(_),j=n(26582),$=n(68526),W=n(27896),r=n(96965),A=n(75271),v=n(52676),C=function(e){var U=e.value,z=e.defaultValue,p=e.min,h=p===void 0?0:p,y=e.max,M=e.step,b=e.gutter,L=b===void 0?16:b,P=e.sliderCol,x=P===void 0?{span:12}:P,D=e.inputCol,w=D===void 0?{span:5}:D,T=e.addonAfter,B=e.addonBefore,k=e.placeholder,V=e.onChange,vn=e.style,an=e.className,tn=e.sliderProps,S=tn===void 0?{}:tn,i=e.inputProps,N=i===void 0?{}:i,R=(0,A.useState)(),G=E()(R,2),nn=G[0],ln=G[1],Q=function(X){Number.isNaN(X)||(ln(X),V==null||V(X))};return(0,v.jsxs)(j.Z,{className:an,gutter:L,style:vn,children:[(0,v.jsx)($.Z,t()(t()({},x),{},{children:(0,v.jsx)(W.Z,t()(t()({},S),{},{defaultValue:z,max:y,min:h,onChange:Q,step:M,value:U!=null?U:nn}))})),(0,v.jsx)($.Z,t()(t()({},w),{},{children:(0,v.jsx)(r.Z,t()(t()({},N),{},{addonAfter:T,addonBefore:B,defaultValue:z,max:y,min:h,onChange:Q,placeholder:k,step:M,value:U!=null?U:nn}))}))]})}},56482:function(In,en,n){n.d(en,{N:function(){return z}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(97912),$=n(75271),W=n(79213),r=n(53649),A=n.n(r),v=n(47512),C,c=(0,v.kc)(function(p){var h=p.css,y=p.token,M=p.prefixCls;return{table:h(C||(C=A()([`
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
    `])),M,y.colorTextTertiary)}}),e=n(52676),U=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],z=function(h){var y=h.rootStyle,M=h.rootClassName,b=h.icon,L=h.title,P=h.variant,x=h.defaultActive,D=h.extra,w=h.className,T=E()(h,U),B=c(),k=B.cx,V=B.styles;return(0,e.jsx)(W.w,{className:M,style:y,icon:b,title:L,variant:P,defaultActive:x,extra:D,children:(0,e.jsx)(j.Z,t()({className:k(V.table,w),pagination:!1,rowHoverable:!1,size:"small"},T))})}},11546:function(In,en,n){n.d(en,{NU:function(){return r.N},iA:function(){return C}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(56995),$=n(97912),W=n(75271),r=n(56482),A=n(52676),v=["columns"],C=function(U){var z=U.columns,p=E()(U,v),h=(0,W.useMemo)(function(){return z==null?void 0:z.map(function(y){if(y.render)return y;if(y.ellipsis&&y.ellipsis!==!0&&y.ellipsis.showTitle||y.ellipsis===!0){var M=y.ellipsis===!0?{}:y.ellipsis;return t()(t()({},y),{},{ellipsis:{showTitle:!1},render:function(L){return L||L===0?(0,A.jsx)(j.Z,t()(t()({},M),{},{placement:"topLeft",title:L,children:L})):"-"}})}return y.render||(y.render=function(b){return b!=null?b:"-"}),y})},[z]);return(0,A.jsx)($.Z,t()(t()({},p),{},{columns:h}))};C.displayName="Table",C.SELECTION_COLUMN=$.Z.SELECTION_COLUMN,C.EXPAND_COLUMN=$.Z.EXPAND_COLUMN,C.SELECTION_ALL=$.Z.SELECTION_ALL,C.SELECTION_INVERT=$.Z.SELECTION_INVERT,C.SELECTION_NONE=$.Z.SELECTION_NONE,C.Column=$.Z.Column,C.ColumnGroup=$.Z.ColumnGroup,C.Summary=$.Z.Summary,C.Collapse=r.N;var c=null},8559:function(In,en,n){n.d(en,{G:function(){return z}});var rn=n(53649),t=n.n(rn),_=n(47512),E=n(75271),j=n(52676),$,W,r,A,v,C,c,e,U=(0,_.kc)(function(p,h){var y=p.css,M=(0,_.F4)($||($=t()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),b=(0,_.F4)(W||(W=t()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),L=(0,_.F4)(r||(r=t()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:y(A||(A=t()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),h.width||34,h.height||22,h.bgColor||"transparent"),line:y(v||(v=t()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),h.lineColor||"#000"),animate1:y(C||(C=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),M),animate2:y(c||(c=t()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),b),animate3:y(e||(e=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),L)}}),z=function(h){var y=h.height,M=h.width,b=h.lineColor,L=h.bgColor,P=U({height:y,width:M,lineColor:b,bgColor:L}),x=P.styles,D=P.cx;return(0,j.jsxs)("div",{className:x.box,children:[(0,j.jsx)("div",{className:D(x.line,x.animate1)}),(0,j.jsx)("div",{className:D(x.line,x.animate2)}),(0,j.jsx)("div",{className:D(x.line,x.animate3)}),(0,j.jsx)("div",{className:D(x.line,x.animate2)}),(0,j.jsx)("div",{className:D(x.line,x.animate1)}),(0,j.jsx)("div",{className:D(x.line,x.animate2)}),(0,j.jsx)("div",{className:D(x.line,x.animate1)})]})}},71983:function(In,en,n){n.r(en),n.d(en,{Affix:function(){return yn.Z},Alert:function(){return z.b},Anchor:function(){return Cn.Z},AntdMentions:function(){return Zn.Z},App:function(){return p.g},AudioPlayer:function(){return ze.Z},AutoComplete:function(){return Pn.Z},Avatar:function(){return Jn.C},BackTop:function(){return Mn.Z},Badge:function(){return Wn.Z},BaseMonacoEditor:function(){return A.ZM},Breadcrumb:function(){return h.Z},Button:function(){return Fn.ZP},ButtonGroup:function(){return rn.h},Calendar:function(){return $n.Z},Card:function(){return y.Z},Carousel:function(){return Bn.Z},Cascader:function(){return fn.Z},ChatInputActionBar:function(){return vn.Z},ChatInputArea:function(){return V.Z},ChatInputAreaInner:function(){return an.Z},ChatItem:function(){return N.z},ChatMarkdown:function(){return R.L},ChatSendButton:function(){return tn.Z},Checkbox:function(){return Nn.Z},Col:function(){return Un.Z},Collapse:function(){return oe.Z},CollapseGroup:function(){return t.w},CollapseTable:function(){return B.NU},ColorPicker:function(){return Z.Z},ConfigContext:function(){return _.E_},ConfigProvider:function(){return _.iV},CopyButton:function(){return be.Z},DatePicker:function(){return Tn.default},Descriptions:function(){return M.w},Divider:function(){return b.i},DragPanel:function(){return E.U},Drawer:function(){return L.d},Dropdown:function(){return P.L},EditableMessage:function(){return G.i},Empty:function(){return ee.Z},Flex:function(){return xe.Z},FloatButton:function(){return Se.Z},Form:function(){return x.l},FormCollapseList:function(){return x.E},FormHelper:function(){return D.wK},FullFeaturedHighlighter:function(){return nn.EL},Grid:function(){return ye.ZP},Highlighter:function(){return nn.oP},Image:function(){return Te.Z},Input:function(){return he.Z},InputNumber:function(){return dn.Z},JsonViewer:function(){return j.h},Layout:function(){return m.Z},List:function(){return J.Z},LogViewer:function(){return W.n},Logo:function(){return $.T},Markdown:function(){return Ee.Z},Mentions:function(){return r.o},Menu:function(){return F.Z},MobileChatInputArea:function(){return S.Z},MobileChatSendButton:function(){return i.Z},Modal:function(){return w.u},MonacoController:function(){return A.Hu},MonacoDiffEditor:function(){return A.Xq},MonacoEditor:function(){return A.rE},NotificationGlobalStyle:function(){return T.EZ},Page:function(){return v.T},Pagination:function(){return En.Z},Popconfirm:function(){return Sn.Z},Popover:function(){return sn.Z},ProCard:function(){return C.Q},Progress:function(){return te.Z},QRCode:function(){return Vn.Z},Radio:function(){return Ln.ZP},Rate:function(){return Qn.Z},Result:function(){return _n.ZP},Row:function(){return re.Z},Segmented:function(){return Hn.Z},Select:function(){return ae.default},SelectCard:function(){return c.W},Skeleton:function(){return On.Z},Slider:function(){return se.Z},SliderInput:function(){return e.a},Space:function(){return ue.Z},SpeechSynthesisTTS:function(){return Ie.H},Spin:function(){return ie.Z},Statistic:function(){return Yn.Z},Status:function(){return U.q},Steps:function(){return ve.Z},Switch:function(){return me.Z},SyntaxHighlighter:function(){return je.Z},Table:function(){return B.iA},Tabs:function(){return le.Z},Tag:function(){return qn.Z},TimePicker:function(){return hn.Z},Timeline:function(){return bn.Z},Tooltip:function(){return gn.Z},Tour:function(){return zn.Z},Transfer:function(){return Dn.Z},Tree:function(){return Xn.Z},TreeSelect:function(){return wn.Z},Typography:function(){return k.Z},Upload:function(){return Ae.Z},Watermark:function(){return Le.Z},WaveformIcon:function(){return un.G},colorScales:function(){return ln._},colors:function(){return ln._},generateColorNeutralPalette:function(){return K},generateColorPalette:function(){return f},message:function(){return pn.ZP},neutralColorScales:function(){return g},notification:function(){return T.t6},theme:function(){return Gn.Z},useAudioPlayer:function(){return xn.x},useAutoFocus:function(){return D.wL},useCdnFn:function(){return _.nc},useLink:function(){return _.nB},useResponsive:function(){return de.F},useSpeechRecognition:function(){return fe.x},useSpeechSynthes:function(){return H.J},useTheme:function(){return s.Fg},useThemeMode:function(){return d.r},version:function(){return Ne.Z},withFormHelper:function(){return D.MX}});var rn=n(12644),t=n(79213),_=n(94456),E=n(13306),j=n(33985),$=n(52625),W=n(25969),r=n(79334),A=n(81321),v=n(40305),C=n(86346),c=n(25777),e=n(66269),U=n(46119),z=n(58479),p=n(5244),h=n(77789),y=n(39824),M=n(26345),b=n(82227),L=n(5795),P=n(99512),x=n(62719),D=n(20147),w=n(97527),T=n(40130),B=n(11546),k=n(94729),V=n(52412),vn=n(65059),an=n(51874),tn=n(62999),S=n(82367),i=n(65677),N=n(59212),R=n(88401),G=n(99335),nn=n(17853),ln=n(15094),Q=n(82092),q=n.n(Q),X=n(98644),f=function(o){var l=o.type,a=o.scale,O=o.appearance,I=(0,X.Z)(l),on=O==="dark";return q()(q()(q()(q()(q()(q()(q()(q()(q()(q()({},"color".concat(I,"Bg"),a[O][1]),"color".concat(I,"BgHover"),a[O][2]),"color".concat(I,"Border"),a[O][4]),"color".concat(I,"BorderHover"),a[O][on?5:3]),"color".concat(I,"Hover"),a[O][on?10:8]),"color".concat(I),a[O][9]),"color".concat(I,"Active"),a[O][on?7:10]),"color".concat(I,"TextHover"),a[O][on?10:8]),"color".concat(I,"Text"),a[O][9]),"color".concat(I,"TextActive"),a[O][on?7:10])},K=function(o){var l=o.scale,a=o.appearance;return{colorBgContainer:a==="dark"?l[a][1]:l[a][0],colorBgElevated:a==="dark"?l[a][2]:l[a][0],colorBgLayout:a==="dark"?l[a][0]:l[a][1],colorBgMask:l.lightA[8],colorBgSpotlight:l[a][5],colorBorder:l[a][4],colorBorderSecondary:l[a][3],colorFill:l["".concat(a,"A")][3],colorFillQuaternary:l["".concat(a,"A")][0],colorFillSecondary:l["".concat(a,"A")][2],colorFillTertiary:l["".concat(a,"A")][1],colorText:l[a][12],colorTextQuaternary:l[a][6],colorTextSecondary:l[a][10],colorTextTertiary:l[a][8]}},g={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},H=n(82846),un=n(8559),yn=n(7904),Cn=n(58190),Zn=n(46621),Pn=n(85958),Jn=n(46847),Mn=n(66075),Wn=n(1088),Fn=n(71170),$n=n(3957),Bn=n(57512),fn=n(52279),Nn=n(43584),Un=n(68526),oe=n(90026),Z=n(64479),Tn=n(1409),ee=n(78962),xe=n(44923),Se=n(6697),ye=n(82366),Te=n(69414),he=n(99707),dn=n(96965),m=n(93702),J=n(78104),F=n(74032),pn=n(57939),En=n(4211),Sn=n(45590),sn=n(31997),te=n(35357),Vn=n(82830),Ln=n(20219),Qn=n(76177),_n=n(46504),re=n(26582),Hn=n(13927),ae=n(35092),On=n(99021),se=n(27896),ue=n(43356),ie=n(49553),Yn=n(43954),ve=n(59470),me=n(74798),le=n(60756),qn=n(53453),Gn=n(22972),bn=n(46141),hn=n(20907),gn=n(56995),zn=n(33858),Dn=n(96208),Xn=n(64287),wn=n(6036),Ae=n(72023),Ne=n(38208),Le=n(55366),be=n(81107),Ee=n(85814),je=n(74974),Ie=n(49724),ze=n(83595),xn=n(61984),fe=n(8281),de=n(81134),s=n(47512),d=n(33592)},40130:function(In,en,n){n.d(en,{EZ:function(){return h.E},t6:function(){return an}});var rn=n(26068),t=n.n(rn),_=n(67825),E=n.n(_),j=n(48305),$=n.n(j),W=n(335),r=n.n(W),A=n(30657),v=n(19728),C=n(22620),c=n(90026),e=n(83293),U=n(98943),z=n(75271),p=n(52676),h=n(55300),y=["detail","message","description","onClose","className"],M=c.Z.Panel,b=e.Z.Link,L=e.Z.Paragraph,P=e.Z.Text,x={},D=function(i,N){x[i]||(x[i]=[]),x[i].push(N)},w=function(i){delete x[i]},T=function S(i){var N="";if(typeof i=="string")N=i;else if(typeof i=="number")N=i.toString();else if(Array.isArray(i)){var R=r()(i),G;try{for(R.s();!(G=R.n()).done;){var nn=G.value;N+=S(nn)}}catch(ln){R.e(ln)}finally{R.f()}}else(0,z.isValidElement)(i)&&(N+=S(i.props.children));return N},B=function(i){var N,R=i.noticeKey,G=i.message,nn=((N=x[R])===null||N===void 0?void 0:N.length)||0;return(0,p.jsxs)(p.Fragment,{children:[G,nn>1&&" (".concat(nn,")")]})},k=function(i){var N=i.noticeKey,R=(0,z.useState)(),G=$()(R,2),nn=G[0],ln=G[1],Q={},q=r()(x[N]),X;try{for(q.s();!(X=q.n()).done;){var f=X.value,K=T(f.description);f.descKey=K,Q[K]=f}}catch(g){q.e(g)}finally{q.f()}return(0,p.jsx)(c.Z,{accordion:!0,activeKey:nn,className:"yunti-notification-collapse",expandIcon:function(H){var un=H.isActive;return(0,p.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:un?(0,p.jsx)(b,{className:"yunti-notification-link",children:(0,p.jsx)(A.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,p.jsx)(v.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(H){ln(H)},children:Object.values(Q).map(function(g){var H=g.descKey,un=g.description,yn=g.detail;return(0,p.jsx)(M,{header:(0,p.jsx)(P,{ellipsis:{tooltip:!1},style:{width:250},children:un}),children:(0,p.jsx)(L,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(yn,null,2)},type:"secondary",children:(0,p.jsx)("pre",{children:JSON.stringify(yn,null,2)})})},H)})})},V=function(i){var N=i.detail,R=i.message,G=i.description,nn=i.onClose,ln=i.className,Q=E()(i,y),q=T(R);D(q,i);var X=function(){nn==null||nn(),w(q)};return i.type==="warning"&&!i.icon&&(Q.icon=(0,p.jsx)(C.Z,{style:{color:"#ff7d00"}})),N?U.ZP.open(t()({key:q,message:(0,p.jsx)(B,{message:R,noticeKey:q}),description:(0,p.jsx)(k,{noticeKey:q}),onClose:X,className:"yunti-notification ".concat(ln)},Q)):U.ZP.open(t()({key:q,message:(0,p.jsx)(B,{message:R,noticeKey:q}),description:G,onClose:X,className:"yunti-notification ".concat(ln)},Q))},vn=function(i){var N;if(((i==null||(N=i.errors)===null||N===void 0?void 0:N.length)||0)>0){i!=null&&i.errors;var R=r()((i==null?void 0:i.errors)||[]),G;try{for(R.s();!(G=R.n()).done;){var nn=G.value;V(t()(t()({detail:nn,description:nn.message},i),{},{type:"warning"}))}}catch(ln){R.e(ln)}finally{R.f()}}else V(t()(t()({},i),{},{type:"warning"}))},an=t()(t()({},U.ZP),{},{success:function(i){return V(t()(t()({},i),{},{type:"success"}))},info:function(i){return V(t()(t()({},i),{},{type:"info"}))},warning:function(i){return V(t()(t()({},i),{},{type:"warning"}))},warn:function(i){return V(t()(t()({},i),{},{type:"warning"}))},error:function(i){return V(t()(t()({},i),{},{type:"error"}))},warnings:vn,warns:vn}),tn=null},55300:function(In,en,n){n.d(en,{E:function(){return $}});var rn=n(53649),t=n.n(rn),_=n(98943),E=n(47512),j,$=(0,E.vJ)(j||(j=t()([`
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
`])),function(W){var r=W.theme;return"".concat(r==null?void 0:r.colorPrimary," !important")},function(W){var r=W.theme;return"".concat(r==null?void 0:r.colorPrimaryHover," !important")},function(W){var r=W.theme;return r==null?void 0:r.colorPrimary},function(W){var r=W.theme;return"".concat(r==null?void 0:r.colorPrimary," !important")},function(W){var r=W.theme;return"".concat(r==null?void 0:r.colorPrimaryHover," !important")},function(W){var r=W.theme,A=r||{},v=A.prefixCls;return _.ZP.config({prefixCls:v}),`
      .`.concat(v,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(v,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(In,en,n){n.d(en,{j:function(){return rn}});var rn=typeof window!="undefined"}}]);
