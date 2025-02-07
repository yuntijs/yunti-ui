"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(Bn,nn,n){n.d(nn,{b:function(){return z}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(21153),Q=n(75271),W=n(53649),o=n.n(W),A=n(47512),c,M=(0,A.kc)(function(h,p){var y=h.css,E=p.bordered,C=E===void 0?"dashed":E;return{custom:y(c||(c=o()([`
        border-style: `,` !important;
      `])),C)}},{hashPriority:"low"}),v=n(52676),e=["bordered","className"],z=function(p){var y=p.bordered,E=y===void 0?"dashed":y,C=p.className,L=b()(p,e),N=M({bordered:E}),x=N.styles,D=N.cx;return(0,v.jsx)(j.Z,t()(t()({},L),{},{className:D(x.custom,C)}))};z.ErrorBoundary=j.Z.ErrorBoundary;var K=null},5244:function(Bn,nn,n){n.d(nn,{g:function(){return c}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(23878),Q=n(75271),W=n(55300),o=n(52676),A=["children"],c=function(e){var z=e.children,K=b()(e,A);return(0,o.jsxs)(j.Z,t()(t()({},K),{},{children:[(0,o.jsx)(W.E,{}),z]}))};c.useApp=j.Z.useApp;var M=null},52412:function(Bn,nn,n){var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(53649),Q=n.n(j),W=n(62579),o=n(51874),A=n(47512),c=n(75271),M=n(52676),v=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],e,z,K,h=(0,A.kc)(function(y){var E=y.css;return{container:E(e||(e=Q()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:E(z||(z=Q()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:E(K||(K=Q()([`
      position: relative;
      flex: 1;
    `])))}}),p=(0,c.forwardRef)(function(y,E){var C=y.className,L=y.style,N=y.classNames,x=y.expand,D=x===void 0?!0:x,k=y.setExpand,P=y.bottomAddons,F=y.topAddons,w=y.onSizeChange,G=y.heights,fn=y.onSend,an=b()(y,v),en=h(),S=en.styles;return(0,M.jsx)(W.Z,{className:C,classNames:N,fullscreen:D,headerHeight:G==null?void 0:G.headerHeight,maxHeight:G==null?void 0:G.maxHeight,minHeight:G==null?void 0:G.minHeight,onSizeChange:w,placement:"bottom",size:{height:G==null?void 0:G.inputHeight,width:"100%"},style:t()({zIndex:10},L),children:(0,M.jsxs)("section",{className:S.container,style:{minHeight:G==null?void 0:G.minHeight},children:[F,(0,M.jsx)("div",{className:S.textareaContainer,children:(0,M.jsx)(o.Z,t()({className:S.textarea,onSend:function(){fn==null||fn(),k==null||k(!1)},ref:E,type:"pure"},an))}),P]})})});nn.Z=(0,c.memo)(p)},59212:function(Bn,nn,n){n.d(nn,{z:function(){return $}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(10581),Q=n(93955),W=n(81262),o=n(9192),A=n(81134),c=n(75271),M=n(90142),v=n(53649),e=n.n(v),z=n(47512),K,h,p,y,E,C,L,N,x,D,k,P,F,w,G,fn,an,en,S=(0,z.kc)(function(m,T){var g=m.cx,Z=m.css,on=m.token,un=m.isDarkMode,dn=m.responsive,jn=T.placement,En=T.type,Rn=T.title,Cn=T.primary,Un=T.avatarSize,Fn=T.editing,Qn=T.time,Wn=T.isLatest,hn=Z(K||(K=e()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Cn?un?on.colorFill:on.colorBgElevated:un?on.colorFillSecondary:on.colorBgContainer,on.borderRadiusLG,on.motionEaseOut),Dn=Z(h||(h=e()([`
      padding-block-start: `,`;
    `])),Rn?0:"6px"),zn=Z(p||(p=e()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),on.motionEaseOut),re=En==="block"?hn:Dn,B=Fn&&Z(y||(y=e()([`
        width: 100%;
      `])));return{actions:g(Z(E||(E=e()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),jn==="left"?"flex-start":"flex-end",jn==="left"?"flex-end":"flex-start"),Fn&&Z(C||(C=e()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:Z(L||(L=e()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),Un,Un),avatarGroupContainer:Z(N||(N=e()([`
        width: `,`px;
      `])),Un),container:g(En==="pure"&&zn,Z(x||(x=e()([`
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
        `])),Wn?"unset":"none",Wn?1:0,on.motionEaseOut,dn.mobile,En==="pure"?"12px":"6px")),editingContainer:g(B,Z(D||(D=e()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),on.colorBorderSecondary,on.colorBorder),En==="pure"&&Z(k||(k=e()([`
            background: `,`;
            border-radius: `,`px;
          `])),on.colorFillQuaternary,on.borderRadius)),editingInput:Z(P||(P=e()([`
        width: 100%;
      `]))),errorContainer:Z(F||(F=e()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:Z(w||(w=e()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),jn==="right"?"-4px":"unset",jn==="left"?"-4px":"unset",on.colorBgLayout,on.colorPrimary),message:g(re,Z(G||(G=e()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),dn.mobile)),messageContainer:g(B,Z(fn||(fn=e()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),Qn?-16:0,dn.mobile)),messageContent:g(B,Z(an||(an=e()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),dn.mobile)),messageExtra:g("message-extra"),name:Z(en||(en=e()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),on.colorTextDescription,jn==="left"?"left":"right")}}),a=n(52676),H=(0,c.memo)(function(m){var T=m.actions,g=m.placement,Z=m.type,on=m.editing,un=S({editing:on,placement:g,type:Z}),dn=un.styles;return(0,a.jsx)(M.D,{align:"flex-start",className:dn.actions,role:"menubar",children:T})}),X=H,ln=n(99335),sn=(0,c.memo)(function(m){var T=m.editing,g=m.onChange,Z=m.onEditingChange,on=m.text,un=m.message,dn=m.placement,jn=m.messageExtra,En=m.renderMessage,Rn=m.type,Cn=m.primary,Un=m.onDoubleClick,Fn=m.fontSize,Qn=m.markdownProps,Wn=m.markdownClassname,hn=S({editing:T,placement:dn,primary:Cn,type:Rn}),Dn=hn.cx,zn=hn.styles,re=(0,A.F)(),B=re.mobile,Nn=(0,a.jsx)(ln.i,{classNames:{input:zn.editingInput,markdown:Wn},editButtonSize:"small",editing:T,fontSize:Fn,fullFeaturedCodeBlock:!0,markdownProps:Qn,onChange:g,onEditingChange:Z,openModal:B?T:void 0,text:on,value:un?String(un).trim():""}),ee=En?En(Nn):Nn;return(0,a.jsxs)(M.D,{className:Dn(zn.message,T&&zn.editingContainer),onDoubleClick:Un,children:[ee,jn&&!T?(0,a.jsx)("div",{className:zn.messageExtra,children:jn}):null]})}),q=sn,R=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest"],V=32,$=(0,c.memo)(function(m){var T=m.avatarAddon,g=m.onAvatarClick,Z=m.avatarProps,on=m.actions,un=m.className,dn=m.primary,jn=m.loading,En=m.message,Rn=m.placement,Cn=Rn===void 0?"left":Rn,Un=m.type,Fn=Un===void 0?"block":Un,Qn=m.avatar,Wn=m.error,hn=m.showTitle,Dn=m.time,zn=m.editing,re=m.onChange,B=m.onEditingChange,Nn=m.messageExtra,ee=m.renderMessage,xe=m.text,Se=m.errorMessage,ye=m.onDoubleClick,Te=m.fontSize,pe=m.markdownProps,vn=m.markdownClassname,f=m.isLatest,J=b()(m,R),U=(0,A.F)(),xn=U.mobile,Sn=S({editing:zn,placement:Cn,primary:dn,showTitle:hn,time:Dn,title:Qn.title,type:Fn,isLatest:f}),An=Sn.cx,cn=Sn.styles;return(0,a.jsxs)(M.D,t()(t()({className:An(cn.container,un),direction:Cn==="left"?"horizontal":"horizontal-reverse",gap:xn?6:12},J),{},{children:[(0,a.jsx)(j.Z,t()(t()({},Z),{},{addon:T,avatar:Qn,loading:jn,onClick:g,placement:Cn,size:xn?V:void 0})),(0,a.jsxs)(M.D,{align:Cn==="left"?"flex-start":"flex-end",className:cn.messageContainer,children:[(0,a.jsx)(o.Z,{avatar:Qn,placement:Cn,showTitle:hn,time:Dn}),(0,a.jsxs)(M.D,{align:Cn==="left"?"flex-start":"flex-end",className:cn.messageContent,direction:"vertical",gap:8,children:[Wn?(0,a.jsx)(W.Z,{error:Wn,message:Se,placement:Cn}):(0,a.jsx)(q,{editing:zn,fontSize:Te,markdownClassname:vn,markdownProps:pe,message:En,messageExtra:Nn,onChange:re,onDoubleClick:ye,onEditingChange:B,placement:Cn,primary:dn,renderMessage:ee,text:xe,type:Fn}),(0,a.jsx)(X,{actions:on,editing:zn,placement:Cn,type:Fn})]})]}),xn&&Fn==="block"&&(0,a.jsx)(Q.Z,{borderSpacing:V})]}))})},99033:function(Bn,nn,n){n.d(nn,{L:function(){return sn}});var rn=n(15558),t=n.n(rn),_=n(26068),b=n.n(_),j=n(67825),Q=n.n(j),W=n(34695),o=n(75271),A=n(48305),c=n.n(A),M=n(53649),v=n.n(M),e=n(60477),z=n(47512),K=n(1216),h=n(97601),p=n(68537),y=n(90142),E=n(52676),C,L,N=(0,z.kc)(function(q){var R=q.css,V=q.token,$=q.isDarkMode;return{container:R(C||(C=v()([`
    cursor: pointer;
    padding-block: 12px;
    color: `,`;
  `])),V.colorTextSecondary),titlebox:R(L||(L=v()([`
    padding: 8px 12px;

    font-size: 12px;
    color: `,`;

    background: `,`;
    border-radius: 8px;
  `])),V.colorText,$?V.colorFillTertiary:"#f3f5fc")}}),x={fontSize:12,lineHeight:1.625,headerMultiple:.2,marginMultiple:.6},D=(0,o.memo)(function(q){var R=q.children,V=q.second,$=q.done,m=N(),T=m.styles,g=m.theme,Z=(0,o.useState)(!0),on=c()(Z,2),un=on[0],dn=on[1];return(0,E.jsxs)(y.D,{className:T.container,onClick:function(){dn(!un)},children:[(0,E.jsxs)(y.D,{className:T.titlebox,distribution:"space-between",flex:1,horizontal:!0,children:[(0,E.jsxs)(y.D,{gap:8,horizontal:!0,children:[(0,E.jsx)(e.Z,{color:g.purple,icon:K.Z}),$?"\u5DF2\u6DF1\u5EA6\u601D\u8003".concat(V?"\uFF08\u7528\u65F6 "+V+" s\uFF09":""," "):"\u601D\u8003\u4E2D..."]}),(0,E.jsx)(e.Z,{icon:un?h.Z:p.Z})]}),un&&(0,E.jsx)(W.Z,b()(b()({},x),{},{children:R}))]})}),k=D,P=n(25709),F=function(){return function(R){(0,P.Vn)(R,"element",function(V,$,m){if(V.type==="element"&&V.tagName==="p"){var T=V.children||[],g=T.findIndex(function(dn){return dn.type==="raw"&&dn.value==="<think>"}),Z=T.findIndex(function(dn){return dn.type==="raw"&&dn.value==="</think>"});if(g!==-1&&Z!==-1&&Z>g){var on=T.slice(g+1,Z),un={children:on,properties:{},tagName:"think",type:"element"};return m.children.splice($,1,un),$}}})}},w=F,G=n(49827),fn=n(34505),an=function(){return function(R){(0,P.Vn)(R,"html",function(V,$,m){if(V.value==="<think>"){for(var T=$,g=T+1,Z=!1;g<m.children.length;){var on=m.children[g];if(on.type==="html"&&on.value==="</think>"){Z=!0;break}g++}var un=Z?g-T+1:m.children.length-T,dn=m.children.slice(T+1,Z?g:void 0),jn=dn.map(function(Rn){return Rn.type==="paragraph"?Rn.children.map(function(Cn){return Cn.value}).join(""):(0,G.x)(Rn)}).join(`

`).trim(),En={data:{hChildren:[{type:"text",value:jn||"..."}],hName:"think"},position:V.position,type:"thinkBlock"};return m.children.splice(T,un,En),[fn.AM,T+1]}})}},en={Component:k,rehypePlugin:w,remarkPlugins:an,tag:"think"},S=en,a=[S],H=function(R){return(R||"").replaceAll(/([^\n])\s*<think>/g,`$1

<think>`).replaceAll(/<think>\s*([^\n])/g,`<think>

$1`).replaceAll(/([^\n])\s*<\/think>/g,`$1

</think>`).replaceAll(/<\/think>\s*([^\n])/g,`</think>

$1`).replaceAll(/\n{3,}/g,`

`)},X=["components","remarkPlugins","customComponentProps","children"],ln=a.map(function(q){return q.remarkPlugins}),sn=function(R){var V=R.components,$=V===void 0?{}:V,m=R.remarkPlugins,T=m===void 0?[]:m,g=R.customComponentProps,Z=R.children,on=Q()(R,X),un=(0,o.useMemo)(function(){var jn=Object.fromEntries(a.map(function(En){return[En.tag,function(Rn){return(0,E.jsx)(En.Component,b()(b()({},Rn),g==null?void 0:g[En.tag]))}]}));return b()(b()({},jn),$)},[$,g]),dn=(0,o.useMemo)(function(){return[].concat(t()(ln),t()(T))},[T]);return(0,E.jsx)(W.Z,b()(b()({components:un,remarkPlugins:dn},on),{},{children:H(Z)}))}},13306:function(Bn,nn,n){n.d(nn,{U:function(){return k}});var rn=n(26068),t=n.n(rn),_=n(48305),b=n.n(_),j=n(67825),Q=n.n(j),W=n(97157),o=n(86818),A=n(44923),c=n(71170),M=n(75271),v=n(84569),e=n.n(v),z=n(53649),K=n.n(z),h=n(47512),p,y,E,C,L,N=(0,h.kc)(function(P){var F=P.css,w=P.token,G=P.prefixCls;return{root:F(p||(p=K()([`
      overflow: hidden;
    `]))),wrapper:F(y||(y=K()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),w.marginLG),content:F(E||(E=K()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),w.borderRadiusLG,w.boxShadowSecondary),dragWrapper:F(C||(C=K()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:F(L||(L=K()([`
      cursor: move;
    `])))}}),x=n(52676),D=["title","classNames","defaultPosition","onPositionChange"],k=(0,M.memo)(function(P){var F=P.title,w=P.classNames,G=w===void 0?{}:w,fn=P.defaultPosition,an=P.onPositionChange,en=Q()(P,D),S=N(),a=S.styles,H=S.cx,X=(0,M.useState)({left:0,top:0,bottom:0,right:0}),ln=b()(X,2),sn=ln[0],q=ln[1],R=(0,M.useRef)(null),V=function(m,T){var g,Z=window.document.documentElement,on=Z.clientWidth,un=Z.clientHeight,dn=(g=R.current)===null||g===void 0?void 0:g.getBoundingClientRect();dn&&q({left:-dn.left+T.x,right:on-(dn.right-T.x),top:-dn.top+T.y,bottom:un-(dn.bottom-T.y)})};return(0,x.jsx)(o.Z,t()(t()({},en),{},{classNames:t()(t()({},G),{},{wrapper:H(a.wrapper,G.wrapper),content:H(a.content,G.content)}),destroyOnClose:!0,drawerRender:function(m){return(0,x.jsx)(e(),{bounds:sn,defaultPosition:fn,handle:".".concat(a.dragHandle),nodeRef:R,onStart:function(g,Z){return V(g,Z)},onStop:function(g,Z){an==null||an({x:Z.x,y:Z.y})},children:(0,x.jsx)("div",{className:a.dragWrapper,ref:R,children:m})})},mask:!1,rootClassName:a.root,title:(0,x.jsxs)(A.Z,{align:"center",className:a.dragHandle,children:[(0,x.jsx)(A.Z,{flex:2,children:F}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(c.ZP,{className:a.dragHandle,icon:(0,x.jsx)(W.Z,{}),type:"text"})})]})}))})},5795:function(Bn,nn,n){n.d(nn,{d:function(){return h}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(86818),Q=n(75271),W=n(53649),o=n.n(W),A=n(47512),c,M,v,e=(0,A.kc)(function(y,E){var C=y.css,L=y.prefixCls,N=E.closeIcon,x=E.closeIconPlacement,D=E.extra,k=C(c||(c=o()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),L,L,!(N===null||N===!1)&&C(M||(M=o()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),L));return{custom:C(v||(v=o()([`
        `,`
      `])),(!x||x==="right"||x==="auto"&&!D)&&k)}},{hashPriority:"low"}),z=n(52676),K=["className"],h=function(E){var C=E.className,L=b()(E,K),N=e(L),x=N.styles,D=N.cx;return(0,z.jsx)(j.Z,t()(t()({},L),{},{className:D(x.custom,C)}))},p=null},99512:function(Bn,nn,n){n.d(nn,{L:function(){return E}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(44923),Q=n(5053),W=n(75271),o=n(53649),A=n.n(o),c=n(47512),M,v,e,z,K=(0,c.kc)(function(C,L){var N=C.css,x=C.token,D=L.divider,k=L.position;return{menuWrapper:N(M||(M=A()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),x.colorBgElevated,x.borderRadiusLG,x.boxShadowSecondary),menuExtra:N(v||(v=A()([`
        padding: 10px 16px 4px;
        `,`
      `])),D&&N(k==="top"?e||(e=A()([`
              border-bottom: 1px solid `,`;
            `])):z||(z=A()([`
              border-top: 1px solid `,`;
            `])),x.colorSplit))}}),h=n(52676),p=["menuExtra","dropdownRender"],y=function(L){var N=L.menuExtra,x=L.dropdownRender,D=b()(L,p),k=N||{},P=k.position,F=P===void 0?"top":P,w=k.divider,G=w===void 0?!1:w,fn=k.content,an=K({divider:G,position:F}),en=an.styles,S=(0,W.useCallback)(function(a){var H=W.cloneElement(a,{style:{boxShadow:"none",border:"none"}});if(!fn)return x?(0,h.jsx)(j.Z,{className:en.menuWrapper,vertical:!0,children:x(H)}):a;var X=(0,h.jsx)(j.Z,{align:"center",className:en.menuExtra,children:fn});return(0,h.jsxs)(j.Z,{className:en.menuWrapper,vertical:!0,children:[F==="top"&&X,H,F==="bottom"&&X]})},[fn,x,F,en.menuExtra,en.menuWrapper]);return(0,h.jsx)(Q.Z,t()({dropdownRender:S},D))},E=y;E.Button=Q.Z.Button},99335:function(Bn,nn,n){n.d(nn,{i:function(){return M}});var rn=n(26068),t=n.n(rn),_=n(48305),b=n.n(_),j=n(14252),Q=n(54285),W=n(75271),o=n(65720),A=n(99033),c=n(52676),M=(0,W.memo)(function(v){var e=v.value,z=v.onChange,K=v.classNames,h=K===void 0?{}:K,p=v.onEditingChange,y=v.editing,E=v.openModal,C=v.onOpenChange,L=v.placeholder,N=v.showEditWhenEmpty,x=N===void 0?!1:N,D=v.styles,k=v.height,P=v.inputType,F=v.editButtonSize,w=v.text,G=v.fullFeaturedCodeBlock,fn=v.model,an=v.fontSize,en=v.markdownProps,S=(0,o.Z)(!1,{onChange:p,value:y}),a=b()(S,2),H=a[0],X=a[1],ln=(0,o.Z)(!1,{onChange:C,value:E}),sn=b()(ln,2),q=sn[0],R=sn[1],V=k==="auto",$=(0,c.jsx)(j.Z,{className:h==null?void 0:h.input,classNames:{textarea:h==null?void 0:h.textarea},defaultValue:e,editButtonSize:F,height:k,onCancel:function(){return X(!1)},onConfirm:function(T){z==null||z(T),X(!1)},placeholder:L,style:D==null?void 0:D.input,text:w,textareaClassname:h==null?void 0:h.input,type:P});return!e&&x?$:(0,c.jsxs)(c.Fragment,{children:[!q&&H?$:(0,c.jsx)(A.L,t()(t()({className:h==null?void 0:h.markdown,fontSize:an,fullFeaturedCodeBlock:G,style:t()({height:V?"unset":k},D==null?void 0:D.markdown),variant:"chat"},en),{},{children:e||L||""})),q&&(0,c.jsx)(Q.Z,{editing:H,extra:fn==null?void 0:fn.extra,footer:fn==null?void 0:fn.footer,height:k,onChange:z,onEditingChange:X,onOpenChange:function(T){R(T),X(!1)},open:q,placeholder:L,text:w,value:e})]})})},14866:function(Bn,nn,n){n.d(nn,{w:function(){return o}});var rn=n(48305),t=n.n(rn),_=n(75271),b=function(c){return typeof c=="string"?document.querySelector("#".concat(c)):(c==null?void 0:c.current)||c},j=":not([disabled]):not([readonly])",Q=["text","password","search","tel","url","number","email",""].map(function(A){return'input[type="'.concat(A,'"]').concat(j)}).join(", ")+", input:not([type])".concat(j,", textarea").concat(j),W=function(c){var M,v=b(c);if(v){var e=(M=v.querySelector)===null||M===void 0?void 0:M.call(v,Q);if(e!=null&&e.focus)return e.focus(),!0}},o=function(c){var M=(0,_.useState)(!1),v=t()(M,2),e=v[0],z=v[1];_.useEffect(function(){if(!(e||!c)){var K=W(c);K&&z(!0)}},[c,e,z])}},20147:function(Bn,nn,n){n.d(nn,{MX:function(){return W},wK:function(){return Q},wL:function(){return b.w}});var rn=n(26068),t=n.n(rn),_=n(75271),b=n(14866),j=n(52676),Q=function(A){var c,M=A.autoFocus,v=M===void 0?!0:M,e=(0,_.useRef)(null);return(0,b.w)(v?e:void 0),(0,j.jsx)("div",{className:A.className,id:A.id,ref:e,style:(c=A.style)!==null&&c!==void 0?c:{display:A.className?void 0:"contents"},children:A.children})},W=function(A){return function(c){var M=function(z){return(0,j.jsx)(Q,t()(t()({},A||{}),{},{children:(0,j.jsx)(c,t()({},z))}))},v=c.displayName||c.name||"Component";return M.displayName="withFormHelper(".concat(v,")"),M}}},33985:function(Bn,nn,n){n.d(nn,{h:function(){return an}});var rn=n(26068),t=n.n(rn),_=n(48305),b=n.n(_),j=n(67825),Q=n.n(j),W=n(16713),o=n(81107),A=n(44923),c=n(33592),M=n(97601),v=n(68537),e=n(75271),z=n(2998),K=n(86590),h=n(4643),p=n(94729),y=n(53649),E=n.n(y),C=n(47512),L,N,x,D,k,P,F=(0,C.kc)(function(en,S){var a=en.token,H=en.css,X=en.cx,ln=en.prefixCls,sn="".concat(ln,"-json-viewer"),q=S==="block",R=H(L||(L=E()([`
      background-color: `,`;

      &:hover {
        background-color: `,`;
      }
    `])),q?a.colorFillTertiary:"transparent",q?a.colorFillTertiary:a.colorFillQuaternary);return{container:X(sn,S!=="pure"&&R,H(N||(N=E()([`
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
        `])),a.borderRadius,a.motionEaseOut)),content:H(x||(x=E()([`
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),S==="pure"?0:a.padding),header:H(D||(D=E()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),a.colorFillQuaternary),title:H(k||(k=E()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),a.margin),titleText:H(P||(P=E()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),a.fontSize,ln,a.colorTextDescription)}}),w=n(52676),G=["type","fullFeatured","title","icon","contentStyle","classNames","className","collapseStringMode","collapsed","dark","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],fn=p.C.Text,an=function(S){var a=S.type,H=a===void 0?"block":a,X=S.fullFeatured,ln=X===void 0?!1:X,sn=S.title,q=sn===void 0?"json":sn,R=S.icon,V=S.contentStyle,$=S.classNames,m=S.className,T=S.collapseStringMode,g=T===void 0?"directly":T,Z=S.collapsed,on=Z===void 0?2:Z,un=S.dark,dn=S.displaySize,jn=dn===void 0?"collapsed":dn,En=S.ignoreLargeArray,Rn=En===void 0?!1:En,Cn=S.matchesURL,Un=Cn===void 0?!0:Cn,Fn=S.src,Qn=S.theme,Wn=Qn===void 0?"default":Qn,hn=S.style,Dn=Q()(S,G),zn=(0,c.r)(),re=zn.isDarkMode,B=F(ln?"block":H),Nn=B.styles,ee=B.cx,xe=(0,e.useState)(!0),Se=b()(xe,2),ye=Se[0],Te=Se[1],pe=(0,e.useMemo)(function(){return(0,z.Pz)(Fn)},[Fn]),vn=(0,w.jsx)(z.ZP,t()({collapseStringMode:g,collapsed:on,dark:un!=null?un:re,displaySize:jn,ignoreLargeArray:Rn,matchesURL:Un,src:Fn,theme:Wn},Dn));return(0,w.jsxs)(A.Z,{className:ee(Nn.container,m),style:hn,vertical:!0,children:[ln&&(0,w.jsxs)(A.Z,{align:"center",className:ee(Nn.header,$==null?void 0:$.header),justify:"space-between",children:[(0,w.jsx)(W.Z,{icon:ye?M.Z:v.Z,onClick:function(){return Te(!ye)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),(0,w.jsxs)(A.Z,{align:"center",className:Nn.title,flex:1,gap:2,justify:"center",title:q,children:[R,(0,w.jsx)(A.Z,{className:Nn.titleText,children:(0,w.jsx)(fn,{ellipsis:!0,children:q})})]}),(0,w.jsx)(o.Z,{content:pe,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,w.jsx)(A.Z,{className:ee(Nn.content,$==null?void 0:$.content),flex:1,style:ye?V:t()(t()({},V),{},{height:0,maxHeight:0,padding:0,overflow:"hidden"}),children:vn})]})}},25969:function(Bn,nn,n){n.d(nn,{n:function(){return D}});var rn=n(26068),t=n.n(rn),_=n(48305),b=n.n(_),j=n(67825),Q=n.n(j),W=n(60477),o=n(50999),A=n(41117),c=n(45798),M=n(3548),v=n(5312),e=n(75271),z=n(53649),K=n.n(z),h=n(47512),p,y,E,C,L=(0,h.kc)(function(k){var P=k.css,F=k.token,w="#222222";return{root:P(p||(p=K()([`
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
      `])),w,F.borderRadiusLG,F.marginXXS,F.paddingXS,w,F.borderRadiusLG,F.borderRadiusLG,F.borderRadius,F.borderRadius,w,F.borderRadiusLG,F.fontFamilyCode),searchBarIcon:P(y||(y=K()([`
        font-size: 16px;
      `]))),loaderText:P(E||(E=K()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),F.fontFamilyCode),loaderIcon:P(C||(C=K()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),F.marginSM,F.marginSM)}},{hashPriority:"low"}),N=n(52676),x=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],D=function(P){var F=P.className,w=P.id,G=P.style,fn=P.height,an=P.onScroll,en=P.url,S=P.websocket,a=P.refreshInterval,H=P.onLoad,X=P.onError,ln=Q()(P,x),sn=L(),q=sn.cx,R=sn.styles,V=(0,e.useState)(0),$=b()(V,2),m=$[0],T=$[1],g=(0,e.useState)(!1),Z=b()(g,2),on=Z[0],un=Z[1],dn=(0,e.useState)(!1),jn=b()(dn,2),En=jn[0],Rn=jn[1],Cn=(0,e.useRef)(),Un=(0,e.useRef)();(0,e.useEffect)(function(){return function(){clearTimeout(Cn.current),clearTimeout(Un.current)}},[]),(0,e.useEffect)(function(){var hn;return en&&!S&&a&&(hn=setInterval(function(){T(function(Dn){return Dn+1})},a)),function(){clearInterval(hn)}},[a,en,S]);var Fn=(0,e.useMemo)(function(){return en&&(Cn.current=setTimeout(function(){un(!0),Cn.current=void 0},50),"".concat(en,"#").concat(m))},[en,m]),Qn=(0,e.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Cn.current),un(!1),Rn(!0),Un.current=setTimeout(function(){return Rn(!1)},100),H==null||H()},[H]),Wn=(0,e.useCallback)(function(hn){un(!1),clearTimeout(Cn.current),X==null||X(hn)},[X]);return(0,N.jsxs)("div",{className:q(R.root,F),id:w,style:t()({height:fn},G),children:[(0,N.jsx)(o.Uu,{render:function(Dn){var zn=Dn.follow,re=Dn.onScroll;return(0,N.jsx)(o.A9,t()(t()({url:Fn,websocket:S},ln),{},{follow:En||zn,height:fn,iconFilterLines:(0,N.jsx)(W.Z,{className:R.searchBarIcon,icon:A.Z}),iconFindNext:(0,N.jsx)(W.Z,{className:R.searchBarIcon,icon:c.Z}),iconFindPrevious:(0,N.jsx)(W.Z,{className:R.searchBarIcon,icon:M.Z}),onError:Wn,onLoad:Qn,onScroll:function(Nn){re(Nn),an==null||an(Nn)}}))},startFollowing:!0}),on&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:R.loaderText,children:"loading ..."}),(0,N.jsx)(W.Z,{className:R.loaderIcon,icon:v.Z,spin:!0})]})]})}},52625:function(Bn,nn,n){n.d(nn,{T:function(){return E}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(47512),Q=n(75271),W=n(90142),o=n(36075),A=n.n(o),c=n(52676),M=(0,Q.memo)(function(C){var L=Object.assign({},(A()(C),C));return(0,c.jsx)("svg",t()(t()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},L),{},{children:(0,c.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),v=(0,Q.memo)(function(C){var L=Object.assign({},(A()(C),C));return(0,c.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},L),{},{children:[(0,c.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,c.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,c.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),e=(0,Q.memo)(function(C){var L=Object.assign({},(A()(C),C));return(0,c.jsxs)("svg",t()(t()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},L),{},{children:[(0,c.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,c.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,c.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,c.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,c.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,c.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,c.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),z=n(53649),K=n.n(z),h,p=(0,j.kc)(function(C){var L=C.css;return{extraTitle:L(h||(h=K()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),y=["type","size","style","extra","className"],E=(0,Q.memo)(function(C){var L=C.type,N=L===void 0?"img":L,x=C.size,D=x===void 0?32:x,k=C.style,P=C.extra,F=C.className,w=b()(C,y),G=(0,j.Fg)(),fn=p(),an=fn.styles,en;switch(N){case"text":{en=(0,c.jsx)(e,t()({className:F,height:D,style:k,width:D*2.9375},w));break}case"combine":{en=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,t()({height:D,style:k,width:D},w)),(0,c.jsx)(e,{style:{height:D,marginLeft:Math.round(D/4),width:"auto"}})]});break}case"img":default:{en=(0,c.jsx)(v,t()({height:D,style:k,width:D},w));break}}if(!P)return en;var S=Math.round(D/3*1.9);return(0,c.jsxs)(W.D,t()(t()({align:"center",className:F,horizontal:!0,style:k},w),{},{children:[en,(0,c.jsx)(M,{style:{color:G.colorFill,height:S,width:S}}),(0,c.jsx)("div",{className:an.extraTitle,style:{fontSize:S},children:P})]}))})},79334:function(Bn,nn,n){n.d(nn,{o:function(){return de}});var rn=n(26068),t=n.n(rn),_=n(82092),b=n.n(_),j=n(14837),Q=n(64419),W=n(30924),o=n(6988),A=n(56875),c=n(44250),M=n(66108),v=n(36419),e=n(75271),z=n(28485),K=n(48305),h=n.n(K),p=n(71561),y=n(32199),E=(0,v.fA)("INSERT_MENTION_COMMAND"),C=(0,v.fA)("DELETE_MENTION_COMMAND"),L=(0,v.fA)("CLEAR_HIDE_MENU_TIMEOUT"),N=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,x=function(d){var u=d.onBlur,r=d.onFocus,l=(0,p.g)(),i=h()(l,1),O=i[0],I=(0,e.useRef)(null);return(0,e.useEffect)(function(){return(0,y.qV)(O.registerCommand(L,function(){return I.current&&(clearTimeout(I.current),I.current=null),!0},v.VN),O.registerCommand(v.Gq,function(tn,mn){return I.current=setTimeout(function(){O.dispatchCommand(v.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),u&&u(),!0},v.VN),O.registerCommand(v.m$,function(){return r&&r(),!0},v.VN))},[O,u,r]),null},D=n(25298),k=n.n(D),P=n(17069),F=n.n(P),w=n(9504),G=n.n(w),fn=n(38836),an=n.n(fn),en=n(21742),S=n.n(en),a=n(83136),H=n.n(a),X=function(s){S()(u,s);var d=H()(u);function u(){return k()(this,u),d.apply(this,arguments)}return F()(u,[{key:"createDOM",value:function(l){var i=G()(an()(u.prototype),"createDOM",this).call(this,l);return i.classList.add("align-middle"),i}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(l){return new u(l.__text,l.__key)}},{key:"importJSON",value:function(l){var i=(0,v.MX)(l.text);return i.setFormat(l.format),i.setDetail(l.detail),i.setMode(l.mode),i.setStyle(l.style),i}}]),u}(v.R2);function ln(s){return new X(s)}var sn=function(d){var u=d.editable,r=(0,p.g)(),l=h()(r,1),i=l[0];return(0,e.useEffect)(function(){i.setEditable(u)},[u,i]),null},q=n(62657),R=n.n(q),V=n(60477),$=n(44923),m=n(56995),T=n(69024),g=n(52676),Z=(0,e.createContext)(null),on=(0,e.memo)(function(s){var d=s.children,u=s.value;return(0,g.jsx)(Z.Provider,{value:u,children:d})}),un=function(){var d=(0,e.useContext)(Z);return d==null?void 0:d.optionsMap},dn=n(33803),jn=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,En="\\(",Rn=function(d){return"(?:"+d.join("|")+")"},Cn=function(d,u){var r=d.length===0?"":"(?!"+d.join("|")+")";return r+"[^\\s"+u+"]"},Un=function(d){return"(?:\\.[ |$]|\\s|["+d+"]|)"},Fn=75,Qn=function(d,u){var r=(0,e.useRef)(null),l=(0,p.g)(),i=h()(l,1),O=i[0],I=(0,dn.y)(d),tn=h()(I,3),mn=tn[0],gn=tn[1],Y=tn[2],Ln=(0,e.useCallback)(function(Pn){var $n=(0,v.dL)(),wn=$n==null?void 0:$n.getNodes();if(!mn&&(wn==null?void 0:wn.length)===1&&O.dispatchCommand(u,void 0),mn&&(0,v.iO)($n)){Pn.preventDefault();var ce=(0,v.gI)(d);if((0,v.k$)(ce))return u&&O.dispatchCommand(u,void 0),ce.remove(),!0}return!1},[mn,d,u,O]),Zn=(0,e.useCallback)(function(Pn){Pn.stopPropagation(),Y(),gn(!0)},[gn,Y]);return(0,e.useEffect)(function(){var Pn=r.current;return Pn&&Pn.addEventListener("click",Zn),function(){Pn&&Pn.removeEventListener("click",Zn)}},[Zn]),(0,e.useEffect)(function(){return(0,y.qV)(O.registerCommand(v.MK,Ln,v.KB),O.registerCommand(v.aR,Ln,v.KB))},[O,Y,Ln]),[r,mn]},Wn=function(){var d=useRef(null),u=useState(!1),r=_slicedToArray(u,2),l=r[0],i=r[1],O=useCallback(function(I){I.stopPropagation(),i(function(tn){return!tn})},[]);return useEffect(function(){var I=d.current;return I&&I.addEventListener("click",O),function(){I&&I.removeEventListener("click",O)}},[O]),[d,l,i]};function hn(s,d,u,r){return new RegExp((d?"(^|\\s|".concat(d,")("):"(^|\\s)(")+Rn(s)+"((?:"+Cn(s,u)+(r?Un(u):"")+"){0,"+Fn+"}))$")}function Dn(s,d,u,r,l){var i=hn(d,u,r,l).exec(s);if(i!==null){var O=i[1],I=i[2],tn=i[3];if(I.length>0)return{leadOffset:i.index+O.length,matchingString:tn,replaceableString:I}}return null}var zn=function(d,u){var r=u.punctuation,l=u.preTriggerChars,i=u.allowSpaces,O=(0,e.useState)(null),I=h()(O,2),tn=I[0],mn=I[1],gn=(0,e.useCallback)(function(Y){var Ln=Dn(Y,d,l,r,i);if(Ln){var Zn=Ln.replaceableString,Pn=Ln.matchingString,$n=Zn.lastIndexOf(Pn),wn=$n===-1?Zn:Zn.slice(0,Math.max(0,$n))+Zn.slice(Math.max(0,$n+Pn.length));if(mn(wn||null),Ln.replaceableString)return Ln}else mn(null);return null},[l,i,r,d]);return{trigger:tn,checkForMentionMatch:gn}},re=n(53649),B=n.n(re),Nn=n(47512),ee,xe,Se,ye=(0,Nn.kc)(function(s,d){var u=s.css,r=s.token,l=s.prefixCls,i=d.isSelected,O=d.isError,I=function(){return O?i?{background:r.colorErrorBgActive,border:r.colorErrorBorderHover,color:r.colorErrorTextActive}:{background:r.colorErrorBg,border:r.colorErrorBorder,color:r.colorErrorText}:i?{background:r.colorInfoBgHover,border:r.colorInfoBorder,color:r.colorInfoText}:{background:r.colorFillTertiary,border:"transparent",color:r.colorInfoText}},tn=I(),mn=tn.background,gn=tn.border,Y=tn.color;return{root:u(ee||(ee=B()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),r.fontFamilyCode,Y,mn,gn,r.borderRadius),text:u(xe||(xe=B()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),r.colorTextSecondary),error:u(Se||(Se=B()([`
        color: `,`;
      `])),r.colorErrorText)}}),Te=(0,e.memo)(function(s){var d=s.nodeKey,u=s.variable,r=un(),l=(0,p.g)(),i=h()(l,1),O=i[0],I=Qn(d,C),tn=h()(I,2),mn=tn[0],gn=tn[1],Y=r==null?void 0:r[u],Ln=ye({isSelected:gn,isError:!Y||!!Y.error}),Zn=Ln.styles;(0,e.useEffect)(function(){if(!O.hasNodes([pe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[O]);var Pn=(0,g.jsx)($.Z,{className:Zn.root,ref:mn,children:(0,g.jsxs)($.Z,{align:"center",gap:2,children:[(!Y||Y.error)&&(0,g.jsx)(V.Z,{className:Zn.error,icon:T.Z}),(Y==null?void 0:Y.icon)&&(0,g.jsx)($.Z,{children:Y.icon}),(0,g.jsx)($.Z,{className:Zn.text,gap:2,title:(Y==null?void 0:Y.label)||u,children:(0,g.jsx)("span",{children:(Y==null?void 0:Y.selectedLabel)||(Y==null?void 0:Y.label)||u})})]})});return Y!=null&&Y.error?(0,g.jsx)(m.Z,{title:Y==null?void 0:Y.error,children:Pn}):Pn}),pe=function(s){S()(u,s);var d=H()(u);function u(r,l){var i;return k()(this,u),i=d.call(this,l),b()(R()(i),"__variable",void 0),i.__variable=r,i}return F()(u,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var l=document.createElement("div");return l.style.display="inline-flex",l.style.alignItems="center",l.style.verticalAlign="middle",l}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,g.jsx)(Te,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var l=this.getLatest();return l.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(l){return new u(l.__variable,l.__key)}},{key:"importJSON",value:function(l){var i=vn(l.variable);return i}}]),u}(v.Ij);function vn(s){return new pe(s)}function f(s){return s instanceof pe}var J=(0,e.memo)(function(s){var d=s.onInsert,u=s.onDelete,r=(0,p.g)(),l=h()(r,1),i=l[0];return(0,e.useEffect)(function(){if(!i.hasNodes([pe]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,y.qV)(i.registerCommand(E,function(O){i.dispatchCommand(L,null);var I=vn(O);return(0,v.od)([I]),d&&d(),!0},v.VN),i.registerCommand(C,function(){return u&&u(),!0},v.VN))},[i,d,u]),null});J.displayName="MentionNodePlugin";var U=(0,v.fA)("INSERT_MENTION_COMMAND"),xn=(0,v.fA)("DELETE_MENTION_COMMAND"),Sn=(0,v.fA)("CLEAR_HIDE_MENU_TIMEOUT"),An=(0,v.fA)("UPDATE_MENTIONS_OPTIONS"),cn=function(d,u,r){if(d.isSimpleText())for(var l=d.getPreviousSibling(),i=d.getTextContent(),O=d,I;;){I=u(i);var tn=I===null?"":i.slice(I.end);if(i=tn,tn===""){var mn=O.getNextSibling();if((0,v.Gg)(mn)){tn=O.getTextContent()+mn.getTextContent();var gn=u(tn);if(gn===null){mn.markDirty();return}else if(gn.start!==0)return}}else{var Y=u(tn);if(Y!==null&&Y.start===0)return}if(I===null)return;if(!(I.start===0&&(0,v.Gg)(l)&&l.isTextEntity())){var Ln=void 0;if(I.start===0){var Zn=O.splitText(I.end),Pn=h()(Zn,2);Ln=Pn[0],O=Pn[1]}else{var $n=O.splitText(I.start,I.end),wn=h()($n,3);Ln=wn[1],O=wn[2]}var ce=r(Ln);if(Ln.replace(ce),O==null)return}}};function te(s){var d=s.split(`
`);return JSON.stringify({root:{children:d.map(function(u){return{children:[{detail:0,format:0,mode:"normal",style:"",text:u,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Gn=(0,e.memo)(function(s){var d=s.onInsert,u=(0,p.g)(),r=h()(u,1),l=r[0];(0,e.useEffect)(function(){if(!l.hasNodes([pe]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[l]);var i=(0,e.useCallback)(function(tn){d&&d();var mn=tn.getTextContent().slice(2,-2);return(0,v.U2)(vn(mn))},[d]),O=(0,e.useCallback)(function(tn){var mn=N.exec(tn);if(mn===null)return null;var gn=mn.index,Y=gn+mn[0].length;return{end:Y,start:gn}},[]),I=(0,e.useCallback)(function(tn){return N.lastIndex=0,cn(tn,O,i)},[i,O]);return(0,e.useEffect)(function(){return N.lastIndex=0,(0,y.qV)(l.registerNodeTransform(X,I))},[]),null}),On=n(99934),Hn=n(64287),_n=n(30967),oe=n(83606),Vn=function(s){S()(u,s);var d=H()(u);function u(r){var l,i=r.label,O=r.value,I=r.data,tn=r.icon,mn=r.extraElement,gn=r.keywords,Y=r.keyboardShortcut,Ln=r.disabled,Zn=r.onSelect,Pn=r.children,$n=r.isChild;return k()(this,u),l=d.call(this,O),b()(R()(l),"label",void 0),b()(R()(l),"value",void 0),b()(R()(l),"title",void 0),b()(R()(l),"key",void 0),b()(R()(l),"icon",void 0),b()(R()(l),"extraElement",void 0),b()(R()(l),"keywords",void 0),b()(R()(l),"keyboardShortcut",void 0),b()(R()(l),"onSelect",void 0),b()(R()(l),"disabled",void 0),b()(R()(l),"data",void 0),b()(R()(l),"children",void 0),b()(R()(l),"isChild",void 0),l.value=O,l.label=i,l.title=i,l.key=O,l.keywords=gn||[],l.icon=tn,l.extraElement=mn,l.keyboardShortcut=Y,l.onSelect=Zn.bind(R()(l)),l.disabled=Ln,l.data=I,l.isChild=$n!=null?$n:!1,l.children=Pn==null?void 0:Pn.map(function(wn){return new u(t()(t()({},wn),{},{isChild:!0}))}),l}return F()(u)}(On.n),ae=function s(d,u){var r;return d.children=(r=d.children)===null||r===void 0?void 0:r.filter(function(l){if(!l.children)return u(l);var i=s(l,u);return u(l)||(i.children||[]).length>0}),d},Tn=function(d,u){var r=(0,p.g)(),l=h()(r,1),i=l[0],O=(0,e.useCallback)(function(tn){var mn,gn=new RegExp((0,oe.Z)(u),"i");return gn.test(tn.label)||((mn=tn.keywords)===null||mn===void 0?void 0:mn.some(function(Y){return gn.test(Y)}))||!1},[u]),I=(0,e.useMemo)(function(){var tn=function gn(Y){var Ln=t()(t()({},Y),{},{children:void 0,onSelect:function(){i.dispatchCommand(E,Y.value)}});return Y.children&&(Ln.children=Y.children.map(function(Zn){return gn(Zn)})),Ln},mn=d.map(function(gn){return new Vn(tn(gn))});return u?mn.map(function(gn){return gn.children?ae(gn,O):gn}).filter(function(gn){return O(gn)||(gn.children||[]).length>0}):mn},[d,u,i,O]);return{options:I}},se=n(78962),ue=n(94729),ie,Yn,ve,me,le,qn,Xn,Mn=(0,Nn.kc)(function(s,d){var u=s.css,r=s.token,l=s.prefixCls,i=d.isSelected,O=d.disabled,I=u(ie||(ie=B()([`
      background-color: `,`;
    `])),r.colorFillSecondary);return{anchor:u(Yn||(Yn=B()([`
        z-index: 9999;
      `]))),menuEmpty:u(ve||(ve=B()([`
        padding: `,`px;
      `])),r.padding),menuOverlay:u(me||(me=B()([`
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
      `])),r.marginXXS,r.paddingXXS,r.colorBgElevated,r.borderRadius,r.boxShadow,l),menuItem:u(le||(le=B()([`
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
      `])),O?"not-allowed":"pointer",O?"none":"all",r.paddingXS,r.borderRadius,O?r.colorTextDisabled:r.colorText,r.fontSize,i&&I,I),menuItemIcon:u(qn||(qn=B()([`
        color: `,`;
      `])),r.colorInfoText),menuItemLabel:u(Xn||(Xn=B()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),yn=ue.C.Text,pn=(0,e.memo)(function(s){var d=s.index,u=s.isSelected,r=s.onClick,l=s.onMouseEnter,i=s.option,O=s.queryString,I=s.showIcon,tn=I===void 0?!0:I,mn=Mn({isSelected:u,disabled:i.disabled}),gn=mn.styles,Y=i.label,Ln=(0,e.useMemo)(function(){var wn=Y,ce="",We="";if(O){var Fe=new RegExp((0,oe.Z)(O),"i"),Oe=Fe.exec(i.label);Oe&&(wn=Y.slice(0,Math.max(0,Oe.index)),ce=Oe[0],We=Y.slice(Math.max(0,Oe.index+Oe[0].length)))}return{before:wn,middle:ce,after:We}},[i.label,O,Y]),Zn=Ln.before,Pn=Ln.middle,$n=Ln.after;return(0,g.jsxs)($.Z,{align:"center",className:gn.menuItem,gap:4,onClick:function(){return r==null?void 0:r(d,i)},onMouseEnter:function(){return l==null?void 0:l(d,i)},ref:i.setRefElement,tabIndex:-1,children:[tn&&(0,g.jsx)($.Z,{className:gn.menuItemIcon,children:i.icon}),(0,g.jsxs)("div",{className:gn.menuItemLabel,title:i.label,children:[Zn,(0,g.jsx)(yn,{mark:!0,children:Pn}),$n]}),(0,g.jsx)($.Z,{children:i.extraElement})]},i.key)});pn.displayName="MentionMenuItem";var Kn=(0,e.memo)(function(s){var d=s.selectedIndex,u=s.options,r=s.onClick,l=s.onMouseEnter,i=s.queryString,O=Mn({}),I=O.styles;return(0,g.jsxs)(g.Fragment,{children:[u.length===0&&(0,g.jsx)(se.Z,{className:I.menuEmpty,image:se.Z.PRESENTED_IMAGE_SIMPLE}),u.map(function(tn,mn){return(0,g.jsx)(pn,{index:mn,isSelected:d===mn,onClick:r,onMouseEnter:l,option:tn,queryString:i},tn.key)})]})}),In=(0,e.memo)(function(s){var d=s.overlayClassName,u=s.triggers,r=s.options,l=r===void 0?[]:r,i=s.allowSpaces,O=i===void 0?!0:i,I=s.punctuation,tn=I===void 0?jn:I,mn=s.preTriggerChars,gn=mn===void 0?En:mn,Y=s.onSelect,Ln=Mn({}),Zn=Ln.cx,Pn=Ln.styles,$n=(0,p.g)(),wn=h()($n,1),ce=wn[0],We=zn(u,{punctuation:tn,preTriggerChars:gn,allowSpaces:O}),Fe=We.trigger,Oe=We.checkForMentionMatch,Xe=(0,e.useState)(null),Ve=h()(Xe,2),De=Ve[0],Je=Ve[1],Ye=Tn(l,De),Pe=Ye.options,Ge=(0,e.useCallback)(function(ne,Ce,$e,Ze){Y==null||Y(ne,Fe,De),ce.update(function(){Ce&&ne!==null&&ne!==void 0&&ne.key&&Ce.remove(),ne!=null&&ne.onSelect&&ne.onSelect(Ze),$e()})},[ce,Y,De,Fe]),ge=(0,e.useCallback)(function(ne){var Ce=ne.selectedIndex,$e=ne.selectOptionAndCleanUp;return(0,g.jsx)(M.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,g.jsx)(Hn.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Re,he){var Me=he.nativeEvent;Me.stopPropagation(),ce.dispatchCommand(L,{})},onSelect:function(Re,he){$e(he.node)},titleRender:function(Re){var he;return(0,g.jsx)(pn,{isSelected:((he=Pe[Ce])===null||he===void 0?void 0:he.value)===Re.value,option:Re,queryString:De,showIcon:!Re.isChild})},treeData:Pe})})},[Pe,ce,De]),Ke=(0,e.useCallback)(function(ne,Ce,$e){var Ze=Ce.selectedIndex,Re=Ce.selectOptionAndCleanUp,he=Ce.setHighlightedIndex;return ne.current?_n.createPortal((0,g.jsx)("div",{className:Zn(Pn.menuOverlay,d),role:"menu",children:Pe.some(function(Me){return(Me.children||[]).length>0})?ge(Ce):(0,g.jsx)(Kn,{onClick:function(Ue,Qe){Qe.disabled||(he(Ue),Re(Qe))},onMouseEnter:function(Ue,Qe){Qe.disabled||he(Ue)},options:Pe,queryString:De,selectedIndex:Ze})}),ne.current):null},[Zn,Pe,d,De,ge,Pn.menuOverlay]);return(0,g.jsx)(On.HQ,{anchorClassName:Pn.anchor,menuRenderFn:Ke,onQueryChange:Je,onSelectOption:Ge,options:Pe,triggerFn:Oe})}),Jn,kn,Ae,Ne,Le,be,Ee,je,Ie=32,ze=22,bn=function(d){return Ie+Math.max(d-1,0)*ze},fe=(0,Nn.kc)(function(s,d){var u=s.css,r=s.token,l=s.prefixCls,i=d.autoSize;return{wrapper:u(Jn||(Jn=B()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:u(kn||(kn=B()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Ie,r.fontSize,Ie,r.colorTextPlaceholder),root:u(Ae||(Ae=B()([`
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
      `])),r.colorBorder,r.borderRadius,r.colorText,r.fontSize,r.fontFamily,(i==null?void 0:i.minRows)&&u(Ne||(Ne=B()([`
          min-height: `,`px;
        `])),bn(i.minRows)),(i==null?void 0:i.maxRows)&&u(Le||(Le=B()([`
          max-height: `,`px;
        `])),bn(i.maxRows)),r.motionDurationMid,r.colorPrimaryBorder,ze),filled:u(be||(be=B()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),r.colorFillTertiary,r.colorFillSecondary,r.colorBgBase),borderless:u(Ee||(Ee=B()([`
        background: transparent;
        border: none;
      `]))),disabled:u(je||(je=B()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),r.colorTextDisabled,r.colorBgContainerDisabled)}}),de=function(d){var u=d.className,r=d.classNames,l=d.placeholder,i=d.style,O=d.value,I=d.defaultValue,tn=d.readOnly,mn=tn===void 0?!1:tn,gn=d.disabled,Y=d.onChange,Ln=d.onBlur,Zn=d.onFocus,Pn=d.variant,$n=Pn===void 0?"outlined":Pn,wn=d.options,ce=wn===void 0?[]:wn,We=d.autoSize,Fe=d.triggers,Oe=Fe===void 0?["@"]:Fe,Xe=d.allowSpaces,Ve=d.punctuation,De=d.preTriggerChars,Je=d.onSelect,Ye=M.ZP.useConfig(),Pe=Ye.componentDisabled,Ge=fe({autoSize:We}),ge=Ge.styles,Ke=Ge.cx,ne=(0,e.useMemo)(function(){return gn!=null?gn:Pe},[Pe,gn]),Ce=(0,e.useMemo)(function(){return!mn&&!ne},[ne,mn]),$e=(0,e.useMemo)(function(){return{namespace:"mentions",nodes:[X,{replace:v.R2,with:function(Me){return new X(Me.__text)}},pe],editorState:te(O||I||""),onError:function(Me){throw Me}}},[]),Ze=function(Me){var Ue=Me.read(function(){return(0,v.Gv)().getTextContent()});Y==null||Y(Ue.replaceAll(`

`,`
`))},Re=(0,e.useMemo)(function(){var he=function Me(Ue,Qe){return Ue.reduce(function(He,Be){if(He[Be.value]=Be,He[Be.value].icon||(He[Be.value].icon=Qe),Be.children&&Be.children.length>0){var ke=Me(Be.children,Be.icon);Object.assign(He,ke)}return He},{})};return he(ce)},[ce]);return z.j?(0,g.jsx)(j.R,{initialConfig:t()(t()({},$e),{},{editable:Ce}),children:(0,g.jsx)(on,{value:{optionsMap:Re},children:(0,g.jsxs)("div",{className:Ke(ge.wrapper,r==null?void 0:r.wrapper),children:[(0,g.jsx)(c.B,{ErrorBoundary:W.g,contentEditable:(0,g.jsx)(Q.f,{className:Ke(b()(b()(b()(b()({},ge.root,!0),ge.filled,$n==="filled"),ge.borderless,$n==="borderless"),ge.disabled,ne),u),style:i||{}}),placeholder:(0,g.jsx)("div",{className:ge.placeholder,children:l||"\u8F93\u5165 ".concat(Oe.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),Ce&&(0,g.jsx)(In,{allowSpaces:Xe,onSelect:Je,options:ce,overlayClassName:r==null?void 0:r.menuOverlay,preTriggerChars:De,punctuation:Ve,triggers:Oe}),(0,g.jsx)(J,{}),(0,g.jsx)(Gn,{}),(0,g.jsx)(o.e,{}),(0,g.jsx)(A.$,{onChange:Ze}),(0,g.jsx)(x,{onBlur:Ln,onFocus:Zn}),(0,g.jsx)(sn,{editable:Ce})]})})}):(0,g.jsxs)("div",{className:Ke(ge.wrapper,r==null?void 0:r.wrapper),children:[(0,g.jsx)("div",{className:Ke(b()(b()(b()(b()({},ge.root,!0),ge.filled,$n==="filled"),ge.borderless,$n==="borderless"),ge.disabled,ne),u),style:i||{}}),(0,g.jsx)("div",{className:ge.placeholder,children:l||"\u8F93\u5165 ".concat(Oe.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(Bn,nn,n){n.d(nn,{u:function(){return p}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(51697),Q=n(75271),W="yunti-ui",o=n(53649),A=n.n(o),c=n(47512),M,v,e=(0,c.kc)(function(E,C){var L=E.css,N=E.prefixCls,x=C.borderd,D=x===void 0?!0:x,k=C.footer,P=k===null||Array.isArray(k)&&k.length===0,F=L(M||(M=A()([`
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
    `])),N,N,P?0:"40px",N,P?0:"1px");return{custom:L(v||(v=A()([`
        `,`
      `])),D&&F)}},{hashPriority:"low"}),z=n(52676),K=["className","borderd"],h=function(C){var L=C.className,N=C.borderd,x=N===void 0?!0:N,D=b()(C,K),k=e(t()({borderd:x},D)),P=k.styles,F=k.cx;return(0,z.jsx)(j.Z,t()(t()({},D),{},{className:F(P.custom,"".concat(W,"-modal"),L)}))},p=h;p.useModal=j.Z.useModal,p.destroyAll=j.Z.destroyAll,p.config=j.Z.config,p._InternalPanelDoNotUseOrYouWillBeFired=j.Z._InternalPanelDoNotUseOrYouWillBeFired,p.info=j.Z.info,p.success=j.Z.success,p.error=j.Z.error,p.warning=j.Z.warning,p.warn=j.Z.warn,p.confirm=j.Z.confirm;var y=null},81321:function(Bn,nn,n){n.d(nn,{ZM:function(){return ye},Hu:function(){return F},Xq:function(){return pe},rE:function(){return Te}});var rn=n(26068),t=n.n(rn),_=n(48305),b=n.n(_),j=n(67825),Q=n.n(j),W=n(33592),o=n(75271),A=n(94456),c=n(60477),M=n(71170),v=n(32328),e=n(87449),z=n(28485),K=n(90228),h=n.n(K),p=n(87999),y=n.n(p),E=n(97524),C=n(50279),L=n(25298),N=n.n(L),x=n(17069),D=n.n(x),k=n(82092),P=n.n(k),F=function(){function vn(){N()(this,vn),P()(this,"methodMap",void 0),P()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return D()(vn,[{key:"registerMethod",value:function(J,U){this.methodMap[J]=U}},{key:"call",value:function(J){for(var U,xn,Sn=arguments.length,An=new Array(Sn>1?Sn-1:0),cn=1;cn<Sn;cn++)An[cn-1]=arguments[cn];return(U=(xn=this.methodMap)[J])===null||U===void 0?void 0:U.call.apply(U,[xn].concat(An))}},{key:"updateMeta",value:function(J){Object.assign(this.meta,J)}},{key:"getMeta",value:function(){return Object.freeze(t()({},this.meta))}}]),vn}(),w="__base_monaco_editor_controller__",G=z.j&&window;G&&!G[w]&&(G[w]=new F);var fn=G[w],an=function(){var vn,f;return function(){var J=y()(h()().mark(function U(xn){var Sn;return h()().wrap(function(cn){for(;;)switch(cn.prev=cn.next){case 0:if(!(!vn||!(0,C.Z)(f,xn))){cn.next=7;break}return Sn=Object.keys(xn||{}).length>0,E.Z.config(Sn?xn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),cn.next=5,E.Z.init();case 5:vn=cn.sent,f=xn;case 7:return cn.abrupt("return",vn);case 8:case"end":return cn.stop()}},U)}));return function(U){return J.apply(this,arguments)}}()}(),en=function(f){return f?E.Z.config(f):E.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),E.Z.init()};function S(vn){var f=Object.keys(vn||{}).length>0,J=f?vn:void 0;return fn.getMeta().singleton?an(J):en(J)}function a(vn){controller.updateMeta(vn)}var H=z.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",X=H==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",ln={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},sn={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function q(vn){var f=(0,o.useRef)();return(0,o.useEffect)(function(){f.current=vn},[vn]),f.current}function R(vn,f,J,U){if(U){var xn=vn.editor.getModel(vn.Uri.parse(U));if(xn)return xn}return vn.editor.createModel(f,J,U?vn.Uri.parse(U):void 0)}var V=function(f,J){var U=J.editorDidMount,xn=J.editorWillMount,Sn=J.theme,An=J.value,cn=J.path,te=J.language,Gn=J.saveViewState,On=J.defaultValue,Hn=J.enhancers,_n=(0,o.useState)(!1),oe=b()(_n,2),Vn=oe[0],ae=oe[1],Tn=(0,o.useState)(!1),se=b()(Tn,2),ue=se[0],ie=se[1],Yn=(0,o.useState)(!1),ve=b()(Yn,2),me=ve[0],le=ve[1],qn=(0,o.useRef)(On),Xn=(0,o.useRef)(An),Mn=(0,o.useRef)(te||"text"),yn=(0,o.useRef)(cn),pn=q(cn),Kn=(0,o.useRef)(J.requireConfig),In=(0,o.useRef)(J.options),Jn=(0,o.useRef)(),kn=(0,o.useRef)(),Ae=(0,o.useRef)(),Ne=(0,o.useRef)(f),Le=(0,o.useRef)(),be=(0,o.useRef)(),Ee=(0,o.useRef)(!1),je=(0,o.useRef)(new Map),Ie=(0,o.useRef)({});(0,o.useEffect)(function(){Ie.current.enhancers=Hn},[Hn]),(0,o.useEffect)(function(){Le.current=U},[U]),(0,o.useEffect)(function(){be.current=xn},[xn]),(0,o.useEffect)(function(){Xn.current=An},[An]),(0,o.useEffect)(function(){Mn.current=te},[te]),(0,o.useEffect)(function(){qn.current=On},[On]),(0,o.useEffect)(function(){le(!0),S(Kn.current).then(function(bn){var fe;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Jn.current=bn;try{var de;(de=be.current)===null||de===void 0||de.call(be,bn)}catch(I){}if(Ae.current){var s;if(Ne.current==="single"){var d,u,r=R(bn,(d=(u=Xn.current)!==null&&u!==void 0?u:qn.current)!==null&&d!==void 0?d:"",Mn.current,yn.current);s=bn.editor.create(Ae.current,t()(t()({automaticLayout:!0},ln),In.current)),s.setModel(r)}else{var l=bn.editor.createModel(Xn.current,Mn.current),i=bn.editor.createModel(Xn.current,Mn.current);s=bn.editor.createDiffEditor(Ae.current,t()(t()({automaticLayout:!0},sn),In.current)),s.setModel({original:l,modified:i})}kn.current=s,(fe=Ie.current.enhancers)===null||fe===void 0||fe.forEach(function(I){return I(bn,s)});try{var O;(O=Le.current)===null||O===void 0||O.call(Le,bn,s)}catch(I){}Ee.current||ae(!0)}}).catch(function(bn){console.error("Monaco Editor Load Error!",bn)}).then(function(){Ee.current||le(!1)})},[]),(0,o.useEffect)(function(){var bn;Vn&&((bn=Jn.current)===null||bn===void 0||bn.editor.setTheme(Sn))},[Vn,Sn]),(0,o.useEffect)(function(){if(Vn){var bn=f==="diff"?kn.current.getModifiedEditor():kn.current;bn==null||bn.onDidFocusEditorText(function(){Ee.current||ie(!0)}),bn==null||bn.onDidBlurEditorText(function(){Ee.current||ie(!1)})}},[Vn,f]),(0,o.useEffect)(function(){return function(){Ee.current=!0}},[]),(0,o.useEffect)(function(){var bn,fe,de;if(Vn&&!(f!=="diff"&&cn)){var s=f==="diff"?kn.current.getModifiedEditor():kn.current,d=(bn=An!=null?An:qn.current)!==null&&bn!==void 0?bn:"",u=(fe=Jn.current)===null||fe===void 0?void 0:fe.editor.EditorOption.readOnly;u&&s!==null&&s!==void 0&&(de=s.getOption)!==null&&de!==void 0&&de.call(s,u)?s==null||s.setValue(d):An!==(s==null?void 0:s.getValue())&&(s==null||s.executeEdits("",[{range:s==null?void 0:s.getModel().getFullModelRange(),text:d,forceMoveMarkers:!0}]),s==null||s.pushUndoStop())}},[Vn,cn,f,An]),(0,o.useEffect)(function(){var bn,fe;if(Vn&&f!=="diff"&&cn!==pn){var de=R(Jn.current,(bn=Xn.current)!==null&&bn!==void 0?bn:qn.current,Mn.current,cn),s=kn.current;Xn.current!==null&&Xn.current!==void 0&&de.getValue()!==Xn.current&&de.setValue(Xn.current),de!==((fe=kn.current)===null||fe===void 0?void 0:fe.getModel())&&(Gn&&je.current.set(pn,s.saveViewState()),s.setModel(de),Gn&&s.restoreViewState(je.current.get(cn)))}},[Vn,An,cn,pn,f,Gn]);var ze=kn;return{isEditorReady:Vn,focused:ue,loading:me,containerRef:Ae,monacoRef:Jn,editorRef:ze,valueRef:Xn}},$=function(f){var J=(0,o.useState)(!1),U=b()(J,2),xn=U[0],Sn=U[1],An=function(){if(xn){Sn(!1),f==null||f.updateOptions(t()(t()({},f==null?void 0:f.getOptions()),{},{minimap:{enabled:!1}})),f==null||f.layout();return}Sn(!0),f==null||f.updateOptions(t()(t()({},f==null?void 0:f.getOptions()),{},{minimap:{enabled:!0}})),f==null||f.layout()};return{isFullScreen:xn,fullScreen:An}},m=n(53649),T=n.n(m),g=n(47512),Z,on,un,dn,jn,En,Rn,Cn,Un,Fn,Qn,Wn=(0,g.kc)(function(vn,f){var J=vn.css,U=vn.token,xn=vn.prefixCls,Sn=f.minimapEnabled,An=Sn===void 0?!1:Sn,cn=f.isFullScreen,te=cn===void 0?!1:cn,Gn=f.diff,On=Gn===void 0?!1:Gn,Hn=f.variant,_n=Hn===void 0?"outlined":Hn,oe=(0,g.F4)(Z||(Z=T()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),Vn=function(){switch(_n){case"outlined":return U.colorBgBase;case"filled":return U.colorFillTertiary;default:return"transparent"}};return{base:J(on||(on=T()([`
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
      `])),Vn(),_n==="outlined"?U.colorBorder:"transparent",U.borderRadius,_n==="outlined"?U.colorPrimaryHover:"transparent",_n==="filled"&&J(un||(un=T()([`
            background-color: `,`;
          `])),U.colorFillSecondary),_n==="filled"&&J(dn||(dn=T()([`
            background-color: `,`;
          `])),U.colorBgBase),_n!=="borderless"&&J(jn||(jn=T()([`
            border-color: `,`;
          `])),U.colorPrimaryActive),te&&J(En||(En=T()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!te&&J(Rn||(Rn=T()([`
              background-color: transparent;
            `]))),U.borderRadius,U.borderRadius,U.borderRadius,U.borderRadius,U.borderRadius,U.borderRadius,U.borderRadius,U.borderRadius,U.borderRadius,U.borderRadius,U.borderRadius-1,U.borderRadius-1,U.colorErrorText,U.colorErrorBg),fullScreenBtn:J(Cn||(Cn=T()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),xn,U.colorTextSecondary,te?J(Un||(Un=T()([`
                z-index: 9999;
                right: `,`px;
              `])),On?64:138):J(Fn||(Fn=T()([`
                right: `,`px;
              `])),An||On?64:20)),loading:J(Qn||(Qn=T()([`
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
      `])),U.fontSizeSM,U.colorTextTertiary,oe)}},{hashPriority:"low"}),hn=n(52676);function Dn(){}var zn=function(f){var J,U=f.onChange,xn=f.enableOutline,Sn=f.width,An=f.height,cn=f.language,te=f.supportFullScreen,Gn=(0,o.useRef)(U),On=V("single",f),Hn=On.isEditorReady,_n=On.focused,oe=On.loading,Vn=On.containerRef,ae=On.monacoRef,Tn=On.editorRef,se=On.valueRef,ue=(0,o.useRef)(),ie=$(Tn==null?void 0:Tn.current),Yn=ie.isFullScreen,ve=ie.fullScreen,me=Wn({isFullScreen:Yn,minimapEnabled:(J=f.options)===null||J===void 0||(J=J.minimap)===null||J===void 0?void 0:J.enabled,variant:f.variant}),le=me.cx,qn=me.styles,Xn=le(qn.base,f.className,{"ve-focused":_n,"ve-outline":xn}),Mn=(0,o.useMemo)(function(){return{width:Sn,height:An}},[Sn,An]);return(0,o.useEffect)(function(){Gn.current=U},[U]),(0,o.useEffect)(function(){if(Hn){var yn,pn=Tn.current;(yn=ue.current)===null||yn===void 0||yn.dispose(),ue.current=pn==null?void 0:pn.onDidChangeModelContent(function(Kn){var In,Jn=pn==null||(In=pn.getModel())===null||In===void 0?void 0:In.getValue();if(se.current!==Jn){var kn;(kn=Gn.current)===null||kn===void 0||kn.call(Gn,Jn,Kn)}})}},[Tn,Hn,ue,se]),(0,o.useEffect)(function(){return function(){var yn,pn,Kn,In=Tn.current;(yn=ue.current)===null||yn===void 0||yn.dispose(),In==null||(pn=In.getModel())===null||pn===void 0||pn.dispose(),(Kn=Tn.current)===null||Kn===void 0||Kn.dispose()}},[Tn]),(0,o.useEffect)(function(){var yn;if(Hn){var pn=(yn=Tn.current)===null||yn===void 0?void 0:yn.getModel();if(pn){var Kn;(Kn=ae.current)===null||Kn===void 0||Kn.editor.setModelLanguage(pn,cn)}}},[Tn,Hn,cn,ae]),(0,hn.jsxs)("div",{className:Xn,style:f.style,children:[oe&&(0,hn.jsx)("span",{className:le(qn.loading,"loading"),children:X}),(0,hn.jsx)("div",{className:"react-monaco-editor-container",ref:Vn,style:Mn,children:te&&(0,hn.jsx)(M.ZP,{className:qn.fullScreenBtn,icon:(0,hn.jsx)(c.Z,{icon:Yn?v.Z:e.Z}),onClick:ve,size:"small",type:"text"})})]})},re=function(f){var J=f.enableOutline,U=f.width,xn=f.height,Sn=f.language,An=f.onChange,cn=f.original,te=f.supportFullScreen,Gn=(0,o.useRef)(An),On=V("diff",f),Hn=On.isEditorReady,_n=On.focused,oe=On.loading,Vn=On.containerRef,ae=On.monacoRef,Tn=On.editorRef,se=On.valueRef,ue=$(),ie=ue.isFullScreen,Yn=ue.fullScreen,ve=Wn({isFullScreen:ie,diff:!0,variant:f.variant}),me=ve.cx,le=ve.styles,qn=me(le.base,f.className,{"ve-focused":_n,"ve-outline":J}),Xn=(0,o.useMemo)(function(){return{width:U,height:xn}},[U,xn]);return(0,o.useEffect)(function(){Gn.current=An},[An]),(0,o.useEffect)(function(){var Mn;if(Hn){(Mn=Tn.current.getModel())===null||Mn===void 0||Mn.original.setValue(cn!=null?cn:"");var yn=Tn.current.getModel()||{},pn=yn.modified;pn==null||pn.onDidChangeContent(function(Kn){var In=pn.getValue();if(se.current!==In){var Jn;(Jn=Gn.current)===null||Jn===void 0||Jn.call(Gn,In,Kn)}})}},[Tn,Hn,cn,se]),(0,o.useEffect)(function(){return function(){var Mn,yn,pn;(Mn=Tn.current)===null||Mn===void 0||(Mn=Mn.getModel())===null||Mn===void 0||(Mn=Mn.original)===null||Mn===void 0||Mn.dispose(),(yn=Tn.current)===null||yn===void 0||(yn=yn.getModel())===null||yn===void 0||(yn=yn.modified)===null||yn===void 0||yn.dispose(),(pn=Tn.current)===null||pn===void 0||pn.dispose()}},[Tn]),(0,o.useEffect)(function(){var Mn,yn,pn;if(Hn){var Kn=((Mn=Tn.current)===null||Mn===void 0?void 0:Mn.getModel())||{},In=Kn.original,Jn=Kn.modified;(yn=ae.current)===null||yn===void 0||yn.editor.setModelLanguage(In,Sn),(pn=ae.current)===null||pn===void 0||pn.editor.setModelLanguage(Jn,Sn)}},[Tn,Hn,Sn,ae]),(0,hn.jsxs)("div",{className:qn,style:f.style,children:[oe&&(0,hn.jsx)("span",{className:me(le.loading,"loading"),children:X}),(0,hn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Vn,style:Xn,children:te&&(0,hn.jsx)(M.ZP,{className:le.fullScreenBtn,icon:(0,hn.jsx)(c.Z,{icon:ie?v.Z:e.Z}),onClick:Yn,size:"small",type:"text"})})]})},B=Object.assign(re,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:ln,editorDidMount:Dn,editorWillMount:Dn,onChange:Dn,requireConfig:{}}}),Nn=Object.assign(zn,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:ln,editorDidMount:Dn,editorWillMount:Dn,onChange:Dn,requireConfig:{}},MonacoDiffEditor:B}),ee=null,xe=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Se=["inlineView","options"],ye=function(f){var J=f.type,U=J===void 0?"single":J,xn=f.editorDidMount,Sn=f.readOnly,An=Sn===void 0?!1:Sn,cn=f.lineNumbers,te=cn===void 0?"on":cn,Gn=f.wordWrap,On=Gn===void 0?"off":Gn,Hn=f.contextmenu,_n=Hn===void 0?!0:Hn,oe=f.theme,Vn=f.minimapEnabled,ae=Vn===void 0?!1:Vn,Tn=f.version,se=Tn===void 0?"0.45.0":Tn,ue=f.requireConfig,ie=ue===void 0?{}:ue,Yn=f.options,ve=f.className,me=f.supportFullScreen,le=Q()(f,xe),qn=(0,o.useRef)(xn);(0,o.useEffect)(function(){qn.current=xn},[xn]);var Xn=(0,W.r)(),Mn=Xn.isDarkMode,yn=(0,o.useMemo)(function(){return oe||(Mn?"vs-dark":"vs")},[Mn,oe]),pn=(0,o.useState)(),Kn=b()(pn,2),In=Kn[0],Jn=Kn[1],kn=(0,o.useCallback)(function(be,Ee){var je;Jn(Ee),(je=qn.current)===null||je===void 0||je.call(qn,be,Ee)},[]),Ae=(0,o.useMemo)(function(){var be=Object.assign({},Yn,{readOnly:An,lineNumbers:te,wordWrap:On,contextmenu:_n,minimap:ae===void 0?Yn==null?void 0:Yn.minimap:Object.assign({},Yn==null?void 0:Yn.minimap,{enabled:ae})});return In==null||In.updateOptions(be),be},[Yn,An,te,On,_n,ae,In]),Ne=(0,A.nc)(),Le=(0,o.useMemo)(function(){return Object.assign({},ie,{paths:t()({vs:Ne({path:"min/vs",pkg:"monaco-editor",version:se})},ie.paths)})},[Ne,ie,se]);return U!=="diff"?(0,hn.jsx)(Nn,t()({className:ve,editorDidMount:kn,options:Ae,requireConfig:Le,supportFullScreen:In&&me,theme:yn},le)):(0,hn.jsx)(Nn.MonacoDiffEditor,t()({className:ve,editorDidMount:kn,options:Ae,requireConfig:Le,supportFullScreen:In&&me,theme:yn},le))},Te=function(f){return(0,hn.jsx)(ye,t()(t()({},f),{},{type:"single"}))},pe=function(f){var J=f.inlineView,U=J===void 0?"off":J,xn=f.options,Sn=Q()(f,Se);return(0,hn.jsx)(ye,t()(t()({options:Object.assign({useInlineViewWhenSpaceIsLimited:U==="on"||U==="auto",renderSideBySide:U==="off"||U==="auto"},xn)},Sn),{},{type:"diff"}))}},25777:function(Bn,nn,n){n.d(nn,{W:function(){return fn}});var rn=n(26068),t=n.n(rn),_=n(15558),b=n.n(_),j=n(48305),Q=n.n(j),W=n(67825),o=n.n(W),A=n(60477),c=n(83293),M=n(44923),v=n(46847),e=n(82338),z=n(2405),K=n(75271),h=n(53649),p=n.n(h),y=n(47512),E,C,L,N,x,D=function(en){switch(en){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},k=(0,y.kc)(function(an,en){var S=an.css,a=an.token,H=an.prefixCls,X=en.disabled,ln=en.size,sn=D(ln),q=sn.cardWidth;return{option:S(E||(E=p()([`
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
      `])),a.colorBorder,a.borderRadius,X?"not-allowed":"pointer",a.padding,a.motionDurationFast,q,X&&S(C||(C=p()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),a.colorBgContainerDisabled,H,a.colorTextDisabled,H,a.colorTextDisabled),!X&&S(L||(L=p()([`
          &:hover {
            border-color: `,`;
          }
        `])),a.colorPrimaryBorderHover),H),optionSelected:S(N||(N=p()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),a.colorPrimary,a.colorPrimaryActive),check:S(x||(x=p()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),a.marginXS,a.marginXS,a.colorPrimary)}}),P=n(52676),F=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],w=c.Z.Text,G=c.Z.Paragraph,fn=K.forwardRef(function(an,en){var S=an.defaultValue,a=an.value,H=an.onChange,X=an.multiple,ln=X===void 0?!1:X,sn=an.disabled,q=sn===void 0?!1:sn,R=an.options,V=R===void 0?[]:R,$=an.classNames,m=an.styles,T=an.size,g=T===void 0?"middle":T,Z=an.optionRender,on=o()(an,F),un=(0,K.useMemo)(function(){return V.some(function(B){return!!B.img||!!B.icon})},[V]),dn=k({disabled:q,size:g}),jn=dn.cx,En=dn.styles,Rn=(0,K.useMemo)(function(){return D(g)},[g]),Cn=Rn.imgHeight,Un=(0,K.useCallback)(function(B){return!ln||Array.isArray(B)?B:B===void 0?[]:[B]},[ln]),Fn=(0,z.C8)(Un(S),{defaultValue:Un(S),value:a,onChange:H}),Qn=Q()(Fn,2),Wn=Qn[0],hn=Qn[1],Dn=(0,K.useCallback)(function(B){if(!q){if(!ln){hn(B);return}if(Wn.includes(B)){hn(Wn.filter(function(Nn){return Nn!==B}));return}hn([].concat(b()(Wn),[B]))}},[Wn,q,ln,hn]),zn=(0,K.useCallback)(function(B){return ln?Wn.includes(B):Wn===B},[Wn,ln]),re=(0,K.useCallback)(function(B,Nn){var ee=zn(B.value),xe=(0,P.jsxs)(M.Z,{align:un?"center":"flex-start",className:jn(En.option,ee&&En.optionSelected,$==null?void 0:$.card),gap:"small",onClick:function(){return Dn(B.value)},style:t()(t()({},m==null?void 0:m.card),B.style),vertical:!0,children:[un&&(0,P.jsx)(v.C,{className:$==null?void 0:$.icon,icon:B.icon,shape:"square",size:Cn,src:B.img,style:t()(t()({},m==null?void 0:m.icon),B.iconStyle)}),B.label&&ee&&(0,P.jsx)(w,{ellipsis:!0,strong:!0,children:B.label}),B.label&&!ee&&(0,P.jsx)(w,{ellipsis:!0,children:B.label}),!un&&B.description&&(0,P.jsx)(G,{ellipsis:{rows:2},type:"secondary",children:B.description}),ee&&(0,P.jsx)(A.Z,{className:En.check,icon:e.Z})]},B.value);return Z?Z(xe,B,Nn):xe},[$==null?void 0:$.card,$==null?void 0:$.icon,jn,Cn,un,zn,Dn,Z,En.check,En.option,En.optionSelected,m==null?void 0:m.card,m==null?void 0:m.icon]);return(0,P.jsx)(M.Z,t()(t()({gap:"large",ref:en,wrap:!0},on),{},{children:V.map(function(B,Nn){return re(B,Nn)})}))})},66269:function(Bn,nn,n){n.d(nn,{a:function(){return M}});var rn=n(26068),t=n.n(rn),_=n(48305),b=n.n(_),j=n(26582),Q=n(68526),W=n(27896),o=n(96965),A=n(75271),c=n(52676),M=function(e){var z=e.value,K=e.defaultValue,h=e.min,p=h===void 0?0:h,y=e.max,E=e.step,C=e.gutter,L=C===void 0?16:C,N=e.sliderCol,x=N===void 0?{span:12}:N,D=e.inputCol,k=D===void 0?{span:5}:D,P=e.addonAfter,F=e.addonBefore,w=e.placeholder,G=e.onChange,fn=e.style,an=e.className,en=e.sliderProps,S=en===void 0?{}:en,a=e.inputProps,H=a===void 0?{}:a,X=(0,A.useState)(),ln=b()(X,2),sn=ln[0],q=ln[1],R=function($){Number.isNaN($)||(q($),G==null||G($))};return(0,c.jsxs)(j.Z,{className:an,gutter:L,style:fn,children:[(0,c.jsx)(Q.Z,t()(t()({},x),{},{children:(0,c.jsx)(W.Z,t()(t()({},S),{},{defaultValue:K,max:y,min:p,onChange:R,step:E,value:z!=null?z:sn}))})),(0,c.jsx)(Q.Z,t()(t()({},k),{},{children:(0,c.jsx)(o.Z,t()(t()({},H),{},{addonAfter:P,addonBefore:F,defaultValue:K,max:y,min:p,onChange:R,placeholder:w,step:E,value:z!=null?z:sn}))}))]})}},56482:function(Bn,nn,n){n.d(nn,{N:function(){return K}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(97912),Q=n(75271),W=n(79213),o=n(53649),A=n.n(o),c=n(47512),M,v=(0,c.kc)(function(h){var p=h.css,y=h.token,E=h.prefixCls;return{table:p(M||(M=A()([`
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
    `])),E,y.colorTextTertiary)}}),e=n(52676),z=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],K=function(p){var y=p.rootStyle,E=p.rootClassName,C=p.icon,L=p.title,N=p.variant,x=p.defaultActive,D=p.extra,k=p.className,P=b()(p,z),F=v(),w=F.cx,G=F.styles;return(0,e.jsx)(W.w,{className:E,style:y,icon:C,title:L,variant:N,defaultActive:x,extra:D,children:(0,e.jsx)(j.Z,t()({className:w(G.table,k),pagination:!1,rowHoverable:!1,size:"small"},P))})}},11546:function(Bn,nn,n){n.d(nn,{NU:function(){return o.N},iA:function(){return M}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(56995),Q=n(97912),W=n(75271),o=n(56482),A=n(52676),c=["columns"],M=function(z){var K=z.columns,h=b()(z,c),p=(0,W.useMemo)(function(){return K==null?void 0:K.map(function(y){if(y.render)return y;if(y.ellipsis&&y.ellipsis!==!0&&y.ellipsis.showTitle||y.ellipsis===!0){var E=y.ellipsis===!0?{}:y.ellipsis;return t()(t()({},y),{},{ellipsis:{showTitle:!1},render:function(L){return L||L===0?(0,A.jsx)(j.Z,t()(t()({},E),{},{placement:"topLeft",title:L,children:L})):"-"}})}return y.render||(y.render=function(C){return C!=null?C:"-"}),y})},[K]);return(0,A.jsx)(Q.Z,t()(t()({},h),{},{columns:p}))};M.displayName="Table",M.SELECTION_COLUMN=Q.Z.SELECTION_COLUMN,M.EXPAND_COLUMN=Q.Z.EXPAND_COLUMN,M.SELECTION_ALL=Q.Z.SELECTION_ALL,M.SELECTION_INVERT=Q.Z.SELECTION_INVERT,M.SELECTION_NONE=Q.Z.SELECTION_NONE,M.Column=Q.Z.Column,M.ColumnGroup=Q.Z.ColumnGroup,M.Summary=Q.Z.Summary,M.Collapse=o.N;var v=null},8559:function(Bn,nn,n){n.d(nn,{G:function(){return K}});var rn=n(53649),t=n.n(rn),_=n(47512),b=n(75271),j=n(52676),Q,W,o,A,c,M,v,e,z=(0,_.kc)(function(h,p){var y=h.css,E=(0,_.F4)(Q||(Q=t()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),C=(0,_.F4)(W||(W=t()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),L=(0,_.F4)(o||(o=t()([`
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
    `])),p.width||34,p.height||22,p.bgColor||"transparent"),line:y(c||(c=t()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),p.lineColor||"#000"),animate1:y(M||(M=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),E),animate2:y(v||(v=t()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),C),animate3:y(e||(e=t()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),L)}}),K=function(p){var y=p.height,E=p.width,C=p.lineColor,L=p.bgColor,N=z({height:y,width:E,lineColor:C,bgColor:L}),x=N.styles,D=N.cx;return(0,j.jsxs)("div",{className:x.box,children:[(0,j.jsx)("div",{className:D(x.line,x.animate1)}),(0,j.jsx)("div",{className:D(x.line,x.animate2)}),(0,j.jsx)("div",{className:D(x.line,x.animate3)}),(0,j.jsx)("div",{className:D(x.line,x.animate2)}),(0,j.jsx)("div",{className:D(x.line,x.animate1)}),(0,j.jsx)("div",{className:D(x.line,x.animate2)}),(0,j.jsx)("div",{className:D(x.line,x.animate1)})]})}},71983:function(Bn,nn,n){n.r(nn),n.d(nn,{Affix:function(){return un.Z},Alert:function(){return K.b},Anchor:function(){return dn.Z},AntdMentions:function(){return jn.Z},App:function(){return h.g},AudioPlayer:function(){return ze.Z},AutoComplete:function(){return En.Z},Avatar:function(){return Rn.C},BackTop:function(){return Cn.Z},Badge:function(){return Un.Z},BaseMonacoEditor:function(){return A.ZM},Breadcrumb:function(){return p.Z},Button:function(){return Fn.ZP},ButtonGroup:function(){return rn.h},Calendar:function(){return Qn.Z},Card:function(){return y.Z},Carousel:function(){return Wn.Z},Cascader:function(){return hn.Z},ChatInputActionBar:function(){return fn.Z},ChatInputArea:function(){return G.Z},ChatInputAreaInner:function(){return an.Z},ChatItem:function(){return H.z},ChatMarkdown:function(){return X.L},ChatSendButton:function(){return en.Z},Checkbox:function(){return Dn.Z},Col:function(){return zn.Z},Collapse:function(){return re.Z},CollapseGroup:function(){return t.w},CollapseTable:function(){return F.NU},ColorPicker:function(){return B.Z},ConfigContext:function(){return _.E_},ConfigProvider:function(){return _.iV},CopyButton:function(){return be.Z},DatePicker:function(){return Nn.default},Descriptions:function(){return E.w},Divider:function(){return C.i},DragPanel:function(){return b.U},Drawer:function(){return L.d},Dropdown:function(){return N.L},EditableMessage:function(){return ln.i},Empty:function(){return ee.Z},Flex:function(){return xe.Z},FloatButton:function(){return Se.Z},Form:function(){return x.l},FormCollapseList:function(){return x.E},FormHelper:function(){return D.wK},FullFeaturedHighlighter:function(){return sn.EL},Grid:function(){return ye.ZP},Highlighter:function(){return sn.oP},Image:function(){return Te.Z},Input:function(){return pe.Z},InputNumber:function(){return vn.Z},JsonViewer:function(){return j.h},Layout:function(){return f.Z},List:function(){return J.Z},LogViewer:function(){return W.n},Logo:function(){return Q.T},Markdown:function(){return Ee.Z},Mentions:function(){return o.o},Menu:function(){return U.Z},MobileChatInputArea:function(){return S.Z},MobileChatSendButton:function(){return a.Z},Modal:function(){return k.u},MonacoController:function(){return A.Hu},MonacoDiffEditor:function(){return A.Xq},MonacoEditor:function(){return A.rE},NotificationGlobalStyle:function(){return P.EZ},Page:function(){return c.T},Pagination:function(){return Sn.Z},Popconfirm:function(){return An.Z},Popover:function(){return cn.Z},ProCard:function(){return M.Q},Progress:function(){return te.Z},QRCode:function(){return Gn.Z},Radio:function(){return On.ZP},Rate:function(){return Hn.Z},Result:function(){return _n.ZP},Row:function(){return oe.Z},Segmented:function(){return Vn.Z},Select:function(){return ae.default},SelectCard:function(){return v.W},Skeleton:function(){return Tn.Z},Slider:function(){return se.Z},SliderInput:function(){return e.a},Space:function(){return ue.Z},SpeechSynthesisTTS:function(){return Ie.H},Spin:function(){return ie.Z},Statistic:function(){return Yn.Z},Status:function(){return z.q},Steps:function(){return ve.Z},Switch:function(){return me.Z},SyntaxHighlighter:function(){return je.Z},Table:function(){return F.iA},Tabs:function(){return le.Z},Tag:function(){return qn.Z},TimePicker:function(){return yn.Z},Timeline:function(){return Mn.Z},Tooltip:function(){return pn.Z},Tour:function(){return Kn.Z},Transfer:function(){return In.Z},Tree:function(){return Jn.Z},TreeSelect:function(){return kn.Z},Typography:function(){return w.Z},Upload:function(){return Ae.Z},Watermark:function(){return Le.Z},WaveformIcon:function(){return on.G},colorScales:function(){return q._},colors:function(){return q._},generateColorNeutralPalette:function(){return T},generateColorPalette:function(){return m},message:function(){return xn.ZP},neutralColorScales:function(){return g},notification:function(){return P.t6},theme:function(){return Xn.Z},useAudioPlayer:function(){return bn.x},useAutoFocus:function(){return D.wL},useCdnFn:function(){return _.nc},useLink:function(){return _.nB},useResponsive:function(){return de.F},useSpeechRecognition:function(){return fe.x},useSpeechSynthes:function(){return Z.J},useTheme:function(){return s.Fg},useThemeMode:function(){return d.r},version:function(){return Ne.Z},withFormHelper:function(){return D.MX}});var rn=n(12644),t=n(79213),_=n(94456),b=n(13306),j=n(33985),Q=n(52625),W=n(25969),o=n(79334),A=n(81321),c=n(40305),M=n(86346),v=n(25777),e=n(66269),z=n(46119),K=n(58479),h=n(5244),p=n(77789),y=n(39824),E=n(26345),C=n(82227),L=n(5795),N=n(99512),x=n(62719),D=n(20147),k=n(97527),P=n(40130),F=n(11546),w=n(94729),G=n(52412),fn=n(65059),an=n(51874),en=n(62999),S=n(82367),a=n(65677),H=n(59212),X=n(99033),ln=n(99335),sn=n(17853),q=n(15094),R=n(82092),V=n.n(R),$=n(98644),m=function(r){var l=r.type,i=r.scale,O=r.appearance,I=(0,$.Z)(l),tn=O==="dark";return V()(V()(V()(V()(V()(V()(V()(V()(V()(V()({},"color".concat(I,"Bg"),i[O][1]),"color".concat(I,"BgHover"),i[O][2]),"color".concat(I,"Border"),i[O][4]),"color".concat(I,"BorderHover"),i[O][tn?5:3]),"color".concat(I,"Hover"),i[O][tn?10:8]),"color".concat(I),i[O][9]),"color".concat(I,"Active"),i[O][tn?7:10]),"color".concat(I,"TextHover"),i[O][tn?10:8]),"color".concat(I,"Text"),i[O][9]),"color".concat(I,"TextActive"),i[O][tn?7:10])},T=function(r){var l=r.scale,i=r.appearance;return{colorBgContainer:i==="dark"?l[i][1]:l[i][0],colorBgElevated:i==="dark"?l[i][2]:l[i][0],colorBgLayout:i==="dark"?l[i][0]:l[i][1],colorBgMask:l.lightA[8],colorBgSpotlight:l[i][5],colorBorder:l[i][4],colorBorderSecondary:l[i][3],colorFill:l["".concat(i,"A")][3],colorFillQuaternary:l["".concat(i,"A")][0],colorFillSecondary:l["".concat(i,"A")][2],colorFillTertiary:l["".concat(i,"A")][1],colorText:l[i][12],colorTextQuaternary:l[i][6],colorTextSecondary:l[i][10],colorTextTertiary:l[i][8]}},g={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},Z=n(82846),on=n(8559),un=n(7904),dn=n(58190),jn=n(46621),En=n(85958),Rn=n(46847),Cn=n(66075),Un=n(1088),Fn=n(71170),Qn=n(3957),Wn=n(57512),hn=n(52279),Dn=n(43584),zn=n(68526),re=n(90026),B=n(64479),Nn=n(1409),ee=n(78962),xe=n(44923),Se=n(6697),ye=n(82366),Te=n(69414),pe=n(99707),vn=n(96965),f=n(93702),J=n(78104),U=n(74032),xn=n(57939),Sn=n(4211),An=n(45590),cn=n(31997),te=n(35357),Gn=n(82830),On=n(20219),Hn=n(76177),_n=n(46504),oe=n(26582),Vn=n(13927),ae=n(35092),Tn=n(99021),se=n(27896),ue=n(43356),ie=n(49553),Yn=n(43954),ve=n(59470),me=n(74798),le=n(60756),qn=n(53453),Xn=n(22972),Mn=n(46141),yn=n(20907),pn=n(56995),Kn=n(33858),In=n(96208),Jn=n(64287),kn=n(6036),Ae=n(72023),Ne=n(38208),Le=n(55366),be=n(81107),Ee=n(34695),je=n(74974),Ie=n(49724),ze=n(83595),bn=n(61984),fe=n(8281),de=n(81134),s=n(47512),d=n(33592)},40130:function(Bn,nn,n){n.d(nn,{EZ:function(){return p.E},t6:function(){return an}});var rn=n(26068),t=n.n(rn),_=n(67825),b=n.n(_),j=n(48305),Q=n.n(j),W=n(335),o=n.n(W),A=n(30657),c=n(19728),M=n(22620),v=n(90026),e=n(83293),z=n(98943),K=n(75271),h=n(52676),p=n(55300),y=["detail","message","description","onClose","className"],E=v.Z.Panel,C=e.Z.Link,L=e.Z.Paragraph,N=e.Z.Text,x={},D=function(a,H){x[a]||(x[a]=[]),x[a].push(H)},k=function(a){delete x[a]},P=function S(a){var H="";if(typeof a=="string")H=a;else if(typeof a=="number")H=a.toString();else if(Array.isArray(a)){var X=o()(a),ln;try{for(X.s();!(ln=X.n()).done;){var sn=ln.value;H+=S(sn)}}catch(q){X.e(q)}finally{X.f()}}else(0,K.isValidElement)(a)&&(H+=S(a.props.children));return H},F=function(a){var H,X=a.noticeKey,ln=a.message,sn=((H=x[X])===null||H===void 0?void 0:H.length)||0;return(0,h.jsxs)(h.Fragment,{children:[ln,sn>1&&" (".concat(sn,")")]})},w=function(a){var H=a.noticeKey,X=(0,K.useState)(),ln=Q()(X,2),sn=ln[0],q=ln[1],R={},V=o()(x[H]),$;try{for(V.s();!($=V.n()).done;){var m=$.value,T=P(m.description);m.descKey=T,R[T]=m}}catch(g){V.e(g)}finally{V.f()}return(0,h.jsx)(v.Z,{accordion:!0,activeKey:sn,className:"yunti-notification-collapse",expandIcon:function(Z){var on=Z.isActive;return(0,h.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:on?(0,h.jsx)(C,{className:"yunti-notification-link",children:(0,h.jsx)(A.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,h.jsx)(c.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(Z){q(Z)},children:Object.values(R).map(function(g){var Z=g.descKey,on=g.description,un=g.detail;return(0,h.jsx)(E,{header:(0,h.jsx)(N,{ellipsis:{tooltip:!1},style:{width:250},children:on}),children:(0,h.jsx)(L,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(un,null,2)},type:"secondary",children:(0,h.jsx)("pre",{children:JSON.stringify(un,null,2)})})},Z)})})},G=function(a){var H=a.detail,X=a.message,ln=a.description,sn=a.onClose,q=a.className,R=b()(a,y),V=P(X);D(V,a);var $=function(){sn==null||sn(),k(V)};return a.type==="warning"&&!a.icon&&(R.icon=(0,h.jsx)(M.Z,{style:{color:"#ff7d00"}})),H?z.ZP.open(t()({key:V,message:(0,h.jsx)(F,{message:X,noticeKey:V}),description:(0,h.jsx)(w,{noticeKey:V}),onClose:$,className:"yunti-notification ".concat(q)},R)):z.ZP.open(t()({key:V,message:(0,h.jsx)(F,{message:X,noticeKey:V}),description:ln,onClose:$,className:"yunti-notification ".concat(q)},R))},fn=function(a){var H;if(((a==null||(H=a.errors)===null||H===void 0?void 0:H.length)||0)>0){a!=null&&a.errors;var X=o()((a==null?void 0:a.errors)||[]),ln;try{for(X.s();!(ln=X.n()).done;){var sn=ln.value;G(t()(t()({detail:sn,description:sn.message},a),{},{type:"warning"}))}}catch(q){X.e(q)}finally{X.f()}}else G(t()(t()({},a),{},{type:"warning"}))},an=t()(t()({},z.ZP),{},{success:function(a){return G(t()(t()({},a),{},{type:"success"}))},info:function(a){return G(t()(t()({},a),{},{type:"info"}))},warning:function(a){return G(t()(t()({},a),{},{type:"warning"}))},warn:function(a){return G(t()(t()({},a),{},{type:"warning"}))},error:function(a){return G(t()(t()({},a),{},{type:"error"}))},warnings:fn,warns:fn}),en=null},55300:function(Bn,nn,n){n.d(nn,{E:function(){return Q}});var rn=n(53649),t=n.n(rn),_=n(98943),b=n(47512),j,Q=(0,b.vJ)(j||(j=t()([`
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
`])),function(W){var o=W.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(W){var o=W.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(W){var o=W.theme;return o==null?void 0:o.colorPrimary},function(W){var o=W.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(W){var o=W.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(W){var o=W.theme,A=o||{},c=A.prefixCls;return _.ZP.config({prefixCls:c}),`
      .`.concat(c,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(c,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(Bn,nn,n){n.d(nn,{j:function(){return rn}});var rn=typeof window!="undefined"}}]);
