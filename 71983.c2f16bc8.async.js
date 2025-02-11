"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(In,q,n){n.d(q,{b:function(){return z}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(15183),K=n(75271),W=n(53649),o=n.n(W),j=n(3772),c,C=(0,j.kc)(function(h,p){var x=h.css,S=p.bordered,E=S===void 0?"dashed":S;return{custom:x(c||(c=o()([`
        border-style: `,` !important;
      `])),E)}},{hashPriority:"low"}),v=n(52676),e=["bordered","className"],z=function(p){var x=p.bordered,S=x===void 0?"dashed":x,E=p.className,L=b()(p,e),D=C({bordered:S}),y=D.styles,N=D.cx;return(0,v.jsx)(A.Z,r()(r()({},L),{},{className:N(y.custom,E)}))};z.ErrorBoundary=A.Z.ErrorBoundary;var F=null},5244:function(In,q,n){n.d(q,{g:function(){return c}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(65220),K=n(75271),W=n(55300),o=n(52676),j=["children"],c=function(e){var z=e.children,F=b()(e,j);return(0,o.jsxs)(A.Z,r()(r()({},F),{},{children:[(0,o.jsx)(W.E,{}),z]}))};c.useApp=A.Z.useApp;var C=null},52412:function(In,q,n){var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(53649),K=n.n(A),W=n(84694),o=n(34757),j=n(3772),c=n(75271),C=n(52676),v=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],e,z,F,h=(0,j.kc)(function(x){var S=x.css;return{container:S(e||(e=K()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:S(z||(z=K()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:S(F||(F=K()([`
      position: relative;
      flex: 1;
    `])))}}),p=(0,c.forwardRef)(function(x,S){var E=x.className,L=x.style,D=x.classNames,y=x.expand,N=y===void 0?!0:y,J=x.setExpand,O=x.bottomAddons,U=x.topAddons,tn=x.onSizeChange,V=x.heights,gn=x.onSend,rn=b()(x,v),an=h(),G=an.styles;return(0,C.jsx)(W.Z,{className:E,classNames:D,fullscreen:N,headerHeight:V==null?void 0:V.headerHeight,maxHeight:V==null?void 0:V.maxHeight,minHeight:V==null?void 0:V.minHeight,onSizeChange:tn,placement:"bottom",size:{height:V==null?void 0:V.inputHeight,width:"100%"},style:r()({zIndex:10},L),children:(0,C.jsxs)("section",{className:G.container,style:{minHeight:V==null?void 0:V.minHeight},children:[U,(0,C.jsx)("div",{className:G.textareaContainer,children:(0,C.jsx)(o.Z,r()({className:G.textarea,onSend:function(){gn==null||gn(),J==null||J(!1)},ref:S,type:"pure"},rn))}),O]})})});q.Z=(0,c.memo)(p)},59212:function(In,q,n){n.d(q,{z:function(){return X}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(74923),K=n(7136),W=n(88205),o=n(90510),j=n(46092),c=n(75271),C=n(90142),v=n(53649),e=n.n(v),z=n(3772),F,h,p,x,S,E,L,D,y,N,J,O,U,tn,V,gn,rn,an,G=(0,z.kc)(function(m,P){var g=m.cx,I=m.css,en=m.token,mn=m.isDarkMode,dn=m.responsive,Tn=P.placement,An=P.type,Zn=P.title,Sn=P.primary,$n=P.avatarSize,Xn=P.editing,kn=P.time,Bn=P.isLatest,pn=I(F||(F=e()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Sn?mn?en.colorFill:en.colorBgElevated:mn?en.colorFillSecondary:en.colorBgContainer,en.borderRadiusLG,en.motionEaseOut),Rn=I(h||(h=e()([`
      padding-block-start: `,`;
    `])),Zn?0:"6px"),Qn=I(p||(p=e()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),en.motionEaseOut),de=An==="block"?pn:Rn,Z=Xn&&I(x||(x=e()([`
        width: 100%;
      `])));return{actions:g(I(S||(S=e()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),Tn==="left"?"flex-start":"flex-end",Tn==="left"?"flex-end":"flex-start"),Xn&&I(E||(E=e()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:I(L||(L=e()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),$n,$n),avatarGroupContainer:I(D||(D=e()([`
        width: `,`px;
      `])),$n),container:g(An==="pure"&&Qn,I(y||(y=e()([`
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
        `])),Bn?"unset":"none",Bn?1:0,en.motionEaseOut,dn.mobile,An==="pure"?"12px":"6px")),editingContainer:g(Z,I(N||(N=e()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),en.colorBorderSecondary,en.colorBorder),An==="pure"&&I(J||(J=e()([`
            background: `,`;
            border-radius: `,`px;
          `])),en.colorFillQuaternary,en.borderRadius)),editingInput:I(O||(O=e()([`
        width: 100%;
      `]))),errorContainer:I(U||(U=e()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:I(tn||(tn=e()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),Tn==="right"?"-4px":"unset",Tn==="left"?"-4px":"unset",en.colorBgLayout,en.colorPrimary),message:g(de,I(V||(V=e()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),dn.mobile)),messageContainer:g(Z,I(gn||(gn=e()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),kn?-16:0,dn.mobile)),messageContent:g(Z,I(rn||(rn=e()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),dn.mobile)),messageExtra:g("message-extra"),name:I(an||(an=e()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),en.colorTextDescription,Tn==="left"?"left":"right")}}),u=n(52676),k=(0,c.memo)(function(m){var P=m.actions,g=m.placement,I=m.type,en=m.editing,mn=G({editing:en,placement:g,type:I}),dn=mn.styles;return(0,u.jsx)(C.D,{align:"flex-start",className:dn.actions,role:"menubar",children:P})}),Y=k,sn=n(99335),vn=(0,c.memo)(function(m){var P=m.editing,g=m.onChange,I=m.onEditingChange,en=m.text,mn=m.message,dn=m.placement,Tn=m.messageExtra,An=m.renderMessage,Zn=m.type,Sn=m.primary,$n=m.onDoubleClick,Xn=m.fontSize,kn=m.markdownProps,Bn=m.markdownClassname,pn=G({editing:P,placement:dn,primary:Sn,type:Zn}),Rn=pn.cx,Qn=pn.styles,de=(0,j.F)(),Z=de.mobile,Un=(0,u.jsx)(sn.i,{classNames:{input:Qn.editingInput,markdown:Bn},editButtonSize:"small",editing:P,fontSize:Xn,fullFeaturedCodeBlock:!0,markdownProps:kn,onChange:g,onEditingChange:I,openModal:Z?P:void 0,text:en,value:mn?String(mn).trim():""}),he=An?An(Un):Un;return(0,u.jsxs)(C.D,{className:Rn(Qn.message,P&&Qn.editingContainer),onDoubleClick:$n,children:[he,Tn&&!P?(0,u.jsx)("div",{className:Qn.messageExtra,children:Tn}):null]})}),on=vn,R=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest"],$=32,X=(0,c.memo)(function(m){var P=m.avatarAddon,g=m.onAvatarClick,I=m.avatarProps,en=m.actions,mn=m.className,dn=m.primary,Tn=m.loading,An=m.message,Zn=m.placement,Sn=Zn===void 0?"left":Zn,$n=m.type,Xn=$n===void 0?"block":$n,kn=m.avatar,Bn=m.error,pn=m.showTitle,Rn=m.time,Qn=m.editing,de=m.onChange,Z=m.onEditingChange,Un=m.messageExtra,he=m.renderMessage,Me=m.text,Oe=m.errorMessage,Pe=m.onDoubleClick,Be=m.fontSize,Ee=m.markdownProps,fn=m.markdownClassname,f=m.isLatest,Q=b()(m,R),B=(0,j.F)(),xn=B.mobile,Cn=G({editing:Qn,placement:Sn,primary:dn,showTitle:pn,time:Rn,title:kn.title,type:Xn,isLatest:f}),Mn=Cn.cx,ln=Cn.styles;return(0,u.jsxs)(C.D,r()(r()({className:Mn(ln.container,mn),direction:Sn==="left"?"horizontal":"horizontal-reverse",gap:xn?6:12},Q),{},{children:[(0,u.jsx)(A.Z,r()(r()({},I),{},{addon:P,avatar:kn,loading:Tn,onClick:g,placement:Sn,size:xn?$:void 0})),(0,u.jsxs)(C.D,{align:Sn==="left"?"flex-start":"flex-end",className:ln.messageContainer,children:[(0,u.jsx)(o.Z,{avatar:kn,placement:Sn,showTitle:pn,time:Rn}),(0,u.jsxs)(C.D,{align:Sn==="left"?"flex-start":"flex-end",className:ln.messageContent,direction:"vertical",gap:8,children:[Bn?(0,u.jsx)(W.Z,{error:Bn,message:Oe,placement:Sn}):(0,u.jsx)(on,{editing:Qn,fontSize:Be,markdownClassname:fn,markdownProps:Ee,message:An,messageExtra:Un,onChange:de,onDoubleClick:Pe,onEditingChange:Z,placement:Sn,primary:dn,renderMessage:he,text:Me,type:Xn}),(0,u.jsx)(Y,{actions:en,editing:Qn,placement:Sn,type:Xn})]})]}),xn&&Xn==="block"&&(0,u.jsx)(K.Z,{borderSpacing:$})]}))})},99033:function(In,q,n){n.d(q,{L:function(){return vn}});var nn=n(15558),r=n.n(nn),w=n(26068),b=n.n(w),A=n(67825),K=n.n(A),W=n(27569),o=n(75271),j=n(48305),c=n.n(j),C=n(53649),v=n.n(C),e=n(27046),z=n(3772),F=n(1216),h=n(97601),p=n(68537),x=n(90142),S=n(52676),E,L,D=(0,z.kc)(function(on){var R=on.css,$=on.token,X=on.isDarkMode;return{container:R(E||(E=v()([`
    padding-block: 12px;
    color: `,`;
  `])),$.colorTextSecondary),titlebox:R(L||(L=v()([`
    cursor: pointer;

    min-width: 140px;
    max-width: 230px;
    padding: 8px 12px;

    font-size: 12px;
    color: `,`;

    background: `,`;
    border-radius: 8px;
  `])),$.colorText,X?$.colorFillTertiary:"#f3f5fc")}}),y={fontSize:13,lineHeight:1.625,headerMultiple:.2,marginMultiple:.6},N=(0,o.memo)(function(on){var R=on.children,$=on.second,X=on.done,m=D(),P=m.styles,g=m.theme,I=(0,o.useState)(!0),en=c()(I,2),mn=en[0],dn=en[1];return(0,S.jsxs)(x.D,{className:P.container,children:[(0,S.jsxs)(x.D,{className:P.titlebox,distribution:"space-between",flex:1,horizontal:!0,onClick:function(){dn(!mn)},children:[(0,S.jsxs)(x.D,{gap:8,horizontal:!0,children:[(0,S.jsx)(e.Z,{color:g.purple,icon:F.Z}),X?"\u5DF2\u6DF1\u5EA6\u601D\u8003".concat($?"\uFF08\u7528\u65F6 "+$+" s\uFF09":""," "):"\u601D\u8003\u4E2D..."]}),(0,S.jsx)(e.Z,{icon:mn?h.Z:p.Z})]}),mn&&(0,S.jsx)(W.Z,b()(b()({},y),{},{children:R}))]})}),J=N,O=n(25709),U=function(){return function(R){(0,O.Vn)(R,"element",function($,X,m){if($.type==="element"&&$.tagName==="p"){var P=$.children||[],g=P.findIndex(function(dn){return dn.type==="raw"&&dn.value==="<think>"}),I=P.findIndex(function(dn){return dn.type==="raw"&&dn.value==="</think>"});if(g!==-1&&I!==-1&&I>g){var en=P.slice(g+1,I),mn={children:en,properties:{},tagName:"think",type:"element"};return m.children.splice(X,1,mn),X}}})}},tn=U,V=n(49827),gn=n(34505),rn=function(){return function(R){(0,O.Vn)(R,"html",function($,X,m){if($.value==="<think>"){for(var P=X,g=P+1,I=!1;g<m.children.length;){var en=m.children[g];if(en.type==="html"&&en.value==="</think>"){I=!0;break}g++}var mn=I?g-P+1:m.children.length-P,dn=m.children.slice(P+1,I?g:void 0),Tn=dn.map(function(Zn){return Zn.type==="paragraph"?Zn.children.map(function(Sn){return Sn.value}).join(""):(0,V.x)(Zn)}).join(`

`).trim(),An={data:{hChildren:[{type:"text",value:Tn||" "}],hName:"think"},position:$.position,type:"thinkBlock"};return m.children.splice(P,mn,An),[gn.AM,P+1]}})}},an={Component:J,rehypePlugin:tn,remarkPlugins:rn,tag:"think"},G=an,u=[G],k=function(R){return(R||"").replaceAll(/([^\n])\s*<think>/g,`$1

<think>`).replaceAll(/<think>\s*([^\n])/g,`<think>

$1`).replaceAll(/([^\n])\s*<\/think>/g,`$1

</think>`).replaceAll(/<\/think>\s*([^\n])/g,`</think>

$1`).replaceAll(/\n{3,}/g,`

`)},Y=["components","remarkPlugins","customComponentProps","children"],sn=u.map(function(on){return on.remarkPlugins}),vn=function(R){var $=R.components,X=$===void 0?{}:$,m=R.remarkPlugins,P=m===void 0?[]:m,g=R.customComponentProps,I=R.children,en=K()(R,Y),mn=(0,o.useMemo)(function(){var Tn=Object.fromEntries(u.map(function(An){return[An.tag,function(Zn){return(0,S.jsx)(An.Component,b()(b()({},Zn),g==null?void 0:g[An.tag]))}]}));return b()(b()({},Tn),X)},[X,g]),dn=(0,o.useMemo)(function(){return[].concat(r()(sn),r()(P))},[P]);return(0,S.jsx)(W.Z,b()(b()({components:mn,remarkPlugins:dn},en),{},{children:k(I)}))}},13306:function(In,q,n){n.d(q,{U:function(){return J}});var nn=n(26068),r=n.n(nn),w=n(48305),b=n.n(w),A=n(67825),K=n.n(A),W=n(97157),o=n(94388),j=n(38590),c=n(22622),C=n(75271),v=n(84569),e=n.n(v),z=n(53649),F=n.n(z),h=n(3772),p,x,S,E,L,D=(0,h.kc)(function(O){var U=O.css,tn=O.token,V=O.prefixCls;return{root:U(p||(p=F()([`
      overflow: hidden;
    `]))),wrapper:U(x||(x=F()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),tn.marginLG),content:U(S||(S=F()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),tn.borderRadiusLG,tn.boxShadowSecondary),dragWrapper:U(E||(E=F()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:U(L||(L=F()([`
      cursor: move;
    `])))}}),y=n(52676),N=["title","classNames","defaultPosition","onPositionChange"],J=(0,C.memo)(function(O){var U=O.title,tn=O.classNames,V=tn===void 0?{}:tn,gn=O.defaultPosition,rn=O.onPositionChange,an=K()(O,N),G=D(),u=G.styles,k=G.cx,Y=(0,C.useState)({left:0,top:0,bottom:0,right:0}),sn=b()(Y,2),vn=sn[0],on=sn[1],R=(0,C.useRef)(null),$=function(m,P){var g,I=window.document.documentElement,en=I.clientWidth,mn=I.clientHeight,dn=(g=R.current)===null||g===void 0?void 0:g.getBoundingClientRect();dn&&on({left:-dn.left+P.x,right:en-(dn.right-P.x),top:-dn.top+P.y,bottom:mn-(dn.bottom-P.y)})};return(0,y.jsx)(o.Z,r()(r()({},an),{},{classNames:r()(r()({},V),{},{wrapper:k(u.wrapper,V.wrapper),content:k(u.content,V.content)}),destroyOnClose:!0,drawerRender:function(m){return(0,y.jsx)(e(),{bounds:vn,defaultPosition:gn,handle:".".concat(u.dragHandle),nodeRef:R,onStart:function(g,I){return $(g,I)},onStop:function(g,I){rn==null||rn({x:I.x,y:I.y})},children:(0,y.jsx)("div",{className:u.dragWrapper,ref:R,children:m})})},mask:!1,rootClassName:u.root,title:(0,y.jsxs)(j.Z,{align:"center",className:u.dragHandle,children:[(0,y.jsx)(j.Z,{flex:2,children:U}),(0,y.jsx)(j.Z,{children:(0,y.jsx)(c.ZP,{className:u.dragHandle,icon:(0,y.jsx)(W.Z,{}),type:"text"})})]})}))})},5795:function(In,q,n){n.d(q,{d:function(){return h}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(94388),K=n(75271),W=n(53649),o=n.n(W),j=n(3772),c,C,v,e=(0,j.kc)(function(x,S){var E=x.css,L=x.prefixCls,D=S.closeIcon,y=S.closeIconPlacement,N=S.extra,J=E(c||(c=o()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),L,L,!(D===null||D===!1)&&E(C||(C=o()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),L));return{custom:E(v||(v=o()([`
        `,`
      `])),(!y||y==="right"||y==="auto"&&!N)&&J)}},{hashPriority:"low"}),z=n(52676),F=["className"],h=function(S){var E=S.className,L=b()(S,F),D=e(L),y=D.styles,N=D.cx;return(0,z.jsx)(A.Z,r()(r()({},L),{},{className:N(y.custom,E)}))},p=null},99512:function(In,q,n){n.d(q,{L:function(){return S}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(38590),K=n(159),W=n(75271),o=n(53649),j=n.n(o),c=n(3772),C,v,e,z,F=(0,c.kc)(function(E,L){var D=E.css,y=E.token,N=L.divider,J=L.position;return{menuWrapper:D(C||(C=j()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),y.colorBgElevated,y.borderRadiusLG,y.boxShadowSecondary),menuExtra:D(v||(v=j()([`
        padding: 10px 16px 4px;
        `,`
      `])),N&&D(J==="top"?e||(e=j()([`
              border-bottom: 1px solid `,`;
            `])):z||(z=j()([`
              border-top: 1px solid `,`;
            `])),y.colorSplit))}}),h=n(52676),p=["menuExtra","dropdownRender"],x=function(L){var D=L.menuExtra,y=L.dropdownRender,N=b()(L,p),J=D||{},O=J.position,U=O===void 0?"top":O,tn=J.divider,V=tn===void 0?!1:tn,gn=J.content,rn=F({divider:V,position:U}),an=rn.styles,G=(0,W.useCallback)(function(u){var k=W.cloneElement(u,{style:{boxShadow:"none",border:"none"}});if(!gn)return y?(0,h.jsx)(A.Z,{className:an.menuWrapper,vertical:!0,children:y(k)}):u;var Y=(0,h.jsx)(A.Z,{align:"center",className:an.menuExtra,children:gn});return(0,h.jsxs)(A.Z,{className:an.menuWrapper,vertical:!0,children:[U==="top"&&Y,k,U==="bottom"&&Y]})},[gn,y,U,an.menuExtra,an.menuWrapper]);return(0,h.jsx)(K.Z,r()({dropdownRender:G},N))},S=x;S.Button=K.Z.Button},99335:function(In,q,n){n.d(q,{i:function(){return C}});var nn=n(26068),r=n.n(nn),w=n(48305),b=n.n(w),A=n(57919),K=n(28281),W=n(75271),o=n(65720),j=n(99033),c=n(52676),C=(0,W.memo)(function(v){var e=v.value,z=v.onChange,F=v.classNames,h=F===void 0?{}:F,p=v.onEditingChange,x=v.editing,S=v.openModal,E=v.onOpenChange,L=v.placeholder,D=v.showEditWhenEmpty,y=D===void 0?!1:D,N=v.styles,J=v.height,O=v.inputType,U=v.editButtonSize,tn=v.text,V=v.fullFeaturedCodeBlock,gn=v.model,rn=v.fontSize,an=v.markdownProps,G=(0,o.Z)(!1,{onChange:p,value:x}),u=b()(G,2),k=u[0],Y=u[1],sn=(0,o.Z)(!1,{onChange:E,value:S}),vn=b()(sn,2),on=vn[0],R=vn[1],$=J==="auto",X=(0,c.jsx)(A.Z,{className:h==null?void 0:h.input,classNames:{textarea:h==null?void 0:h.textarea},defaultValue:e,editButtonSize:U,height:J,onCancel:function(){return Y(!1)},onConfirm:function(P){z==null||z(P),Y(!1)},placeholder:L,style:N==null?void 0:N.input,text:tn,textareaClassname:h==null?void 0:h.input,type:O});return!e&&y?X:(0,c.jsxs)(c.Fragment,{children:[!on&&k?X:(0,c.jsx)(j.L,r()(r()({className:h==null?void 0:h.markdown,fontSize:rn,fullFeaturedCodeBlock:V,style:r()({height:$?"unset":J},N==null?void 0:N.markdown),variant:"chat"},an),{},{children:e||L||""})),on&&(0,c.jsx)(K.Z,{editing:k,extra:gn==null?void 0:gn.extra,footer:gn==null?void 0:gn.footer,height:J,onChange:z,onEditingChange:Y,onOpenChange:function(P){R(P),Y(!1)},open:on,placeholder:L,text:tn,value:e})]})})},14866:function(In,q,n){n.d(q,{w:function(){return o}});var nn=n(48305),r=n.n(nn),w=n(75271),b=function(c){return typeof c=="string"?document.querySelector("#".concat(c)):(c==null?void 0:c.current)||c},A=":not([disabled]):not([readonly])",K=["text","password","search","tel","url","number","email",""].map(function(j){return'input[type="'.concat(j,'"]').concat(A)}).join(", ")+", input:not([type])".concat(A,", textarea").concat(A),W=function(c){var C,v=b(c);if(v){var e=(C=v.querySelector)===null||C===void 0?void 0:C.call(v,K);if(e!=null&&e.focus)return e.focus(),!0}},o=function(c){var C=(0,w.useState)(!1),v=r()(C,2),e=v[0],z=v[1];w.useEffect(function(){if(!(e||!c)){var F=W(c);F&&z(!0)}},[c,e,z])}},20147:function(In,q,n){n.d(q,{MX:function(){return W},wK:function(){return K},wL:function(){return b.w}});var nn=n(26068),r=n.n(nn),w=n(75271),b=n(14866),A=n(52676),K=function(j){var c,C=j.autoFocus,v=C===void 0?!0:C,e=(0,w.useRef)(null);return(0,b.w)(v?e:void 0),(0,A.jsx)("div",{className:j.className,id:j.id,ref:e,style:(c=j.style)!==null&&c!==void 0?c:{display:j.className?void 0:"contents"},children:j.children})},W=function(j){return function(c){var C=function(z){return(0,A.jsx)(K,r()(r()({},j||{}),{},{children:(0,A.jsx)(c,r()({},z))}))},v=c.displayName||c.name||"Component";return C.displayName="withFormHelper(".concat(v,")"),C}}},25969:function(In,q,n){n.d(q,{n:function(){return N}});var nn=n(26068),r=n.n(nn),w=n(48305),b=n.n(w),A=n(67825),K=n.n(A),W=n(27046),o=n(50999),j=n(41117),c=n(45798),C=n(3548),v=n(5312),e=n(75271),z=n(53649),F=n.n(z),h=n(3772),p,x,S,E,L=(0,h.kc)(function(J){var O=J.css,U=J.token,tn="#222222";return{root:O(p||(p=F()([`
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
      `])),tn,U.borderRadiusLG,U.marginXXS,U.paddingXS,tn,U.borderRadiusLG,U.borderRadiusLG,U.borderRadius,U.borderRadius,tn,U.borderRadiusLG,U.fontFamilyCode),searchBarIcon:O(x||(x=F()([`
        font-size: 16px;
      `]))),loaderText:O(S||(S=F()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),U.fontFamilyCode),loaderIcon:O(E||(E=F()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),U.marginSM,U.marginSM)}},{hashPriority:"low"}),D=n(52676),y=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],N=function(O){var U=O.className,tn=O.id,V=O.style,gn=O.height,rn=O.onScroll,an=O.url,G=O.websocket,u=O.refreshInterval,k=O.onLoad,Y=O.onError,sn=K()(O,y),vn=L(),on=vn.cx,R=vn.styles,$=(0,e.useState)(0),X=b()($,2),m=X[0],P=X[1],g=(0,e.useState)(!1),I=b()(g,2),en=I[0],mn=I[1],dn=(0,e.useState)(!1),Tn=b()(dn,2),An=Tn[0],Zn=Tn[1],Sn=(0,e.useRef)(),$n=(0,e.useRef)();(0,e.useEffect)(function(){return function(){clearTimeout(Sn.current),clearTimeout($n.current)}},[]),(0,e.useEffect)(function(){var pn;return an&&!G&&u&&(pn=setInterval(function(){P(function(Rn){return Rn+1})},u)),function(){clearInterval(pn)}},[u,an,G]);var Xn=(0,e.useMemo)(function(){return an&&(Sn.current=setTimeout(function(){mn(!0),Sn.current=void 0},50),"".concat(an,"#").concat(m))},[an,m]),kn=(0,e.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Sn.current),mn(!1),Zn(!0),$n.current=setTimeout(function(){return Zn(!1)},100),k==null||k()},[k]),Bn=(0,e.useCallback)(function(pn){mn(!1),clearTimeout(Sn.current),Y==null||Y(pn)},[Y]);return(0,D.jsxs)("div",{className:on(R.root,U),id:tn,style:r()({height:gn},V),children:[(0,D.jsx)(o.Uu,{render:function(Rn){var Qn=Rn.follow,de=Rn.onScroll;return(0,D.jsx)(o.A9,r()(r()({url:Xn,websocket:G},sn),{},{follow:An||Qn,height:gn,iconFilterLines:(0,D.jsx)(W.Z,{className:R.searchBarIcon,icon:j.Z}),iconFindNext:(0,D.jsx)(W.Z,{className:R.searchBarIcon,icon:c.Z}),iconFindPrevious:(0,D.jsx)(W.Z,{className:R.searchBarIcon,icon:C.Z}),onError:Bn,onLoad:kn,onScroll:function(Un){de(Un),rn==null||rn(Un)}}))},startFollowing:!0}),en&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:R.loaderText,children:"loading ..."}),(0,D.jsx)(W.Z,{className:R.loaderIcon,icon:v.Z,spin:!0})]})]})}},52625:function(In,q,n){n.d(q,{T:function(){return S}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(3772),K=n(75271),W=n(90142),o=n(36075),j=n.n(o),c=n(52676),C=(0,K.memo)(function(E){var L=Object.assign({},(j()(E),E));return(0,c.jsx)("svg",r()(r()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},L),{},{children:(0,c.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),v=(0,K.memo)(function(E){var L=Object.assign({},(j()(E),E));return(0,c.jsxs)("svg",r()(r()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},L),{},{children:[(0,c.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,c.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,c.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),e=(0,K.memo)(function(E){var L=Object.assign({},(j()(E),E));return(0,c.jsxs)("svg",r()(r()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},L),{},{children:[(0,c.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,c.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,c.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,c.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,c.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,c.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,c.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),z=n(53649),F=n.n(z),h,p=(0,A.kc)(function(E){var L=E.css;return{extraTitle:L(h||(h=F()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),x=["type","size","style","extra","className"],S=(0,K.memo)(function(E){var L=E.type,D=L===void 0?"img":L,y=E.size,N=y===void 0?32:y,J=E.style,O=E.extra,U=E.className,tn=b()(E,x),V=(0,A.Fg)(),gn=p(),rn=gn.styles,an;switch(D){case"text":{an=(0,c.jsx)(e,r()({className:U,height:N,style:J,width:N*2.9375},tn));break}case"combine":{an=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,r()({height:N,style:J,width:N},tn)),(0,c.jsx)(e,{style:{height:N,marginLeft:Math.round(N/4),width:"auto"}})]});break}case"img":default:{an=(0,c.jsx)(v,r()({height:N,style:J,width:N},tn));break}}if(!O)return an;var G=Math.round(N/3*1.9);return(0,c.jsxs)(W.D,r()(r()({align:"center",className:U,horizontal:!0,style:J},tn),{},{children:[an,(0,c.jsx)(C,{style:{color:V.colorFill,height:G,width:G}}),(0,c.jsx)("div",{className:rn.extraTitle,style:{fontSize:G},children:O})]}))})},79334:function(In,q,n){n.d(q,{o:function(){return se}});var nn=n(26068),r=n.n(nn),w=n(82092),b=n.n(w),A=n(14837),K=n(64419),W=n(30924),o=n(6988),j=n(56875),c=n(44250),C=n(98639),v=n(36419),e=n(75271),z=n(28485),F=n(48305),h=n.n(F),p=n(71561),x=n(32199),S=(0,v.fA)("INSERT_MENTION_COMMAND"),E=(0,v.fA)("DELETE_MENTION_COMMAND"),L=(0,v.fA)("CLEAR_HIDE_MENU_TIMEOUT"),D=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,y=function(d){var s=d.onBlur,t=d.onFocus,i=(0,p.g)(),a=h()(i,1),M=a[0],T=(0,e.useRef)(null);return(0,e.useEffect)(function(){return(0,x.qV)(M.registerCommand(L,function(){return T.current&&(clearTimeout(T.current),T.current=null),!0},v.VN),M.registerCommand(v.Gq,function(_,un){return T.current=setTimeout(function(){M.dispatchCommand(v.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),s&&s(),!0},v.VN),M.registerCommand(v.m$,function(){return t&&t(),!0},v.VN))},[M,s,t]),null},N=n(25298),J=n.n(N),O=n(17069),U=n.n(O),tn=n(9504),V=n.n(tn),gn=n(38836),rn=n.n(gn),an=n(21742),G=n.n(an),u=n(83136),k=n.n(u),Y=function(l){G()(s,l);var d=k()(s);function s(){return J()(this,s),d.apply(this,arguments)}return U()(s,[{key:"createDOM",value:function(i){var a=V()(rn()(s.prototype),"createDOM",this).call(this,i);return a.classList.add("align-middle"),a}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(i){return new s(i.__text,i.__key)}},{key:"importJSON",value:function(i){var a=(0,v.MX)(i.text);return a.setFormat(i.format),a.setDetail(i.detail),a.setMode(i.mode),a.setStyle(i.style),a}}]),s}(v.R2);function sn(l){return new Y(l)}var vn=function(d){var s=d.editable,t=(0,p.g)(),i=h()(t,1),a=i[0];return(0,e.useEffect)(function(){a.setEditable(s)},[s,a]),null},on=n(62657),R=n.n(on),$=n(27046),X=n(38590),m=n(1718),P=n(69024),g=n(52676),I=(0,e.createContext)(null),en=(0,e.memo)(function(l){var d=l.children,s=l.value;return(0,g.jsx)(I.Provider,{value:s,children:d})}),mn=function(){var d=(0,e.useContext)(I);return d==null?void 0:d.optionsMap},dn=n(33803),Tn=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,An="\\(",Zn=function(d){return"(?:"+d.join("|")+")"},Sn=function(d,s){var t=d.length===0?"":"(?!"+d.join("|")+")";return t+"[^\\s"+s+"]"},$n=function(d){return"(?:\\.[ |$]|\\s|["+d+"]|)"},Xn=75,kn=function(d,s){var t=(0,e.useRef)(null),i=(0,p.g)(),a=h()(i,1),M=a[0],T=(0,dn.y)(d),_=h()(T,3),un=_[0],cn=_[1],H=_[2],Ln=(0,e.useCallback)(function(On){var Fn=(0,v.dL)(),wn=Fn==null?void 0:Fn.getNodes();if(!un&&(wn==null?void 0:wn.length)===1&&M.dispatchCommand(s,void 0),un&&(0,v.iO)(Fn)){On.preventDefault();var ue=(0,v.gI)(d);if((0,v.k$)(ue))return s&&M.dispatchCommand(s,void 0),ue.remove(),!0}return!1},[un,d,s,M]),Nn=(0,e.useCallback)(function(On){On.stopPropagation(),H(),cn(!0)},[cn,H]);return(0,e.useEffect)(function(){var On=t.current;return On&&On.addEventListener("click",Nn),function(){On&&On.removeEventListener("click",Nn)}},[Nn]),(0,e.useEffect)(function(){return(0,x.qV)(M.registerCommand(v.MK,Ln,v.KB),M.registerCommand(v.aR,Ln,v.KB))},[M,H,Ln]),[t,un]},Bn=function(){var d=useRef(null),s=useState(!1),t=_slicedToArray(s,2),i=t[0],a=t[1],M=useCallback(function(T){T.stopPropagation(),a(function(_){return!_})},[]);return useEffect(function(){var T=d.current;return T&&T.addEventListener("click",M),function(){T&&T.removeEventListener("click",M)}},[M]),[d,i,a]};function pn(l,d,s,t){return new RegExp((d?"(^|\\s|".concat(d,")("):"(^|\\s)(")+Zn(l)+"((?:"+Sn(l,s)+(t?$n(s):"")+"){0,"+Xn+"}))$")}function Rn(l,d,s,t,i){var a=pn(d,s,t,i).exec(l);if(a!==null){var M=a[1],T=a[2],_=a[3];if(T.length>0)return{leadOffset:a.index+M.length,matchingString:_,replaceableString:T}}return null}var Qn=function(d,s){var t=s.punctuation,i=s.preTriggerChars,a=s.allowSpaces,M=(0,e.useState)(null),T=h()(M,2),_=T[0],un=T[1],cn=(0,e.useCallback)(function(H){var Ln=Rn(H,d,i,t,a);if(Ln){var Nn=Ln.replaceableString,On=Ln.matchingString,Fn=Nn.lastIndexOf(On),wn=Fn===-1?Nn:Nn.slice(0,Math.max(0,Fn))+Nn.slice(Math.max(0,Fn+On.length));if(un(wn||null),Ln.replaceableString)return Ln}else un(null);return null},[i,a,t,d]);return{trigger:_,checkForMentionMatch:cn}},de=n(53649),Z=n.n(de),Un=n(3772),he,Me,Oe,Pe=(0,Un.kc)(function(l,d){var s=l.css,t=l.token,i=l.prefixCls,a=d.isSelected,M=d.isError,T=function(){return M?a?{background:t.colorErrorBgActive,border:t.colorErrorBorderHover,color:t.colorErrorTextActive}:{background:t.colorErrorBg,border:t.colorErrorBorder,color:t.colorErrorText}:a?{background:t.colorInfoBgHover,border:t.colorInfoBorder,color:t.colorInfoText}:{background:t.colorFillTertiary,border:"transparent",color:t.colorInfoText}},_=T(),un=_.background,cn=_.border,H=_.color;return{root:s(he||(he=Z()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),t.fontFamilyCode,H,un,cn,t.borderRadius),text:s(Me||(Me=Z()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),t.colorTextSecondary),error:s(Oe||(Oe=Z()([`
        color: `,`;
      `])),t.colorErrorText)}}),Be=(0,e.memo)(function(l){var d=l.nodeKey,s=l.variable,t=mn(),i=(0,p.g)(),a=h()(i,1),M=a[0],T=kn(d,E),_=h()(T,2),un=_[0],cn=_[1],H=t==null?void 0:t[s],Ln=Pe({isSelected:cn,isError:!H||!!H.error}),Nn=Ln.styles;(0,e.useEffect)(function(){if(!M.hasNodes([Ee]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[M]);var On=(0,g.jsx)(X.Z,{className:Nn.root,ref:un,children:(0,g.jsxs)(X.Z,{align:"center",gap:2,children:[(!H||H.error)&&(0,g.jsx)($.Z,{className:Nn.error,icon:P.Z}),(H==null?void 0:H.icon)&&(0,g.jsx)(X.Z,{children:H.icon}),(0,g.jsx)(X.Z,{className:Nn.text,gap:2,title:(H==null?void 0:H.label)||s,children:(0,g.jsx)("span",{children:(H==null?void 0:H.selectedLabel)||(H==null?void 0:H.label)||s})})]})});return H!=null&&H.error?(0,g.jsx)(m.Z,{title:H==null?void 0:H.error,children:On}):On}),Ee=function(l){G()(s,l);var d=k()(s);function s(t,i){var a;return J()(this,s),a=d.call(this,i),b()(R()(a),"__variable",void 0),a.__variable=t,a}return U()(s,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var i=document.createElement("div");return i.style.display="inline-flex",i.style.alignItems="center",i.style.verticalAlign="middle",i}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,g.jsx)(Be,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var i=this.getLatest();return i.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(i){return new s(i.__variable,i.__key)}},{key:"importJSON",value:function(i){var a=fn(i.variable);return a}}]),s}(v.Ij);function fn(l){return new Ee(l)}function f(l){return l instanceof Ee}var Q=(0,e.memo)(function(l){var d=l.onInsert,s=l.onDelete,t=(0,p.g)(),i=h()(t,1),a=i[0];return(0,e.useEffect)(function(){if(!a.hasNodes([Ee]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,x.qV)(a.registerCommand(S,function(M){a.dispatchCommand(L,null);var T=fn(M);return(0,v.od)([T]),d&&d(),!0},v.VN),a.registerCommand(E,function(){return s&&s(),!0},v.VN))},[a,d,s]),null});Q.displayName="MentionNodePlugin";var B=(0,v.fA)("INSERT_MENTION_COMMAND"),xn=(0,v.fA)("DELETE_MENTION_COMMAND"),Cn=(0,v.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Mn=(0,v.fA)("UPDATE_MENTIONS_OPTIONS"),ln=function(d,s,t){if(d.isSimpleText())for(var i=d.getPreviousSibling(),a=d.getTextContent(),M=d,T;;){T=s(a);var _=T===null?"":a.slice(T.end);if(a=_,_===""){var un=M.getNextSibling();if((0,v.Gg)(un)){_=M.getTextContent()+un.getTextContent();var cn=s(_);if(cn===null){un.markDirty();return}else if(cn.start!==0)return}}else{var H=s(_);if(H!==null&&H.start===0)return}if(T===null)return;if(!(T.start===0&&(0,v.Gg)(i)&&i.isTextEntity())){var Ln=void 0;if(T.start===0){var Nn=M.splitText(T.end),On=h()(Nn,2);Ln=On[0],M=On[1]}else{var Fn=M.splitText(T.start,T.end),wn=h()(Fn,3);Ln=wn[1],M=wn[2]}var ue=t(Ln);if(Ln.replace(ue),M==null)return}}};function ee(l){var d=l.split(`
`);return JSON.stringify({root:{children:d.map(function(s){return{children:[{detail:0,format:0,mode:"normal",style:"",text:s,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Hn=(0,e.memo)(function(l){var d=l.onInsert,s=(0,p.g)(),t=h()(s,1),i=t[0];(0,e.useEffect)(function(){if(!i.hasNodes([Ee]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[i]);var a=(0,e.useCallback)(function(_){d&&d();var un=_.getTextContent().slice(2,-2);return(0,v.U2)(fn(un))},[d]),M=(0,e.useCallback)(function(_){var un=D.exec(_);if(un===null)return null;var cn=un.index,H=cn+un[0].length;return{end:H,start:cn}},[]),T=(0,e.useCallback)(function(_){return D.lastIndex=0,ln(_,M,a)},[a,M]);return(0,e.useEffect)(function(){return D.lastIndex=0,(0,x.qV)(i.registerNodeTransform(Y,T))},[]),null}),jn=n(99934),zn=n(26082),_n=n(30967),te=n(83606),Kn=function(l){G()(s,l);var d=k()(s);function s(t){var i,a=t.label,M=t.value,T=t.data,_=t.icon,un=t.extraElement,cn=t.keywords,H=t.keyboardShortcut,Ln=t.disabled,Nn=t.onSelect,On=t.children,Fn=t.isChild;return J()(this,s),i=d.call(this,M),b()(R()(i),"label",void 0),b()(R()(i),"value",void 0),b()(R()(i),"title",void 0),b()(R()(i),"key",void 0),b()(R()(i),"icon",void 0),b()(R()(i),"extraElement",void 0),b()(R()(i),"keywords",void 0),b()(R()(i),"keyboardShortcut",void 0),b()(R()(i),"onSelect",void 0),b()(R()(i),"disabled",void 0),b()(R()(i),"data",void 0),b()(R()(i),"children",void 0),b()(R()(i),"isChild",void 0),i.value=M,i.label=a,i.title=a,i.key=M,i.keywords=cn||[],i.icon=_,i.extraElement=un,i.keyboardShortcut=H,i.onSelect=Nn.bind(R()(i)),i.disabled=Ln,i.data=T,i.isChild=Fn!=null?Fn:!1,i.children=On==null?void 0:On.map(function(wn){return new s(r()(r()({},wn),{},{isChild:!0}))}),i}return U()(s)}(jn.n),re=function l(d,s){var t;return d.children=(t=d.children)===null||t===void 0?void 0:t.filter(function(i){if(!i.children)return s(i);var a=l(i,s);return s(i)||(a.children||[]).length>0}),d},Pn=function(d,s){var t=(0,p.g)(),i=h()(t,1),a=i[0],M=(0,e.useCallback)(function(_){var un,cn=new RegExp((0,te.Z)(s),"i");return cn.test(_.label)||((un=_.keywords)===null||un===void 0?void 0:un.some(function(H){return cn.test(H)}))||!1},[s]),T=(0,e.useMemo)(function(){var _=function cn(H){var Ln=r()(r()({},H),{},{children:void 0,onSelect:function(){a.dispatchCommand(S,H.value)}});return H.children&&(Ln.children=H.children.map(function(Nn){return cn(Nn)})),Ln},un=d.map(function(cn){return new Kn(_(cn))});return s?un.map(function(cn){return cn.children?re(cn,M):cn}).filter(function(cn){return M(cn)||(cn.children||[]).length>0}):un},[d,s,a,M]);return{options:T}},ie=n(66642),le=n(94729),oe,Jn,ce,ve,ae,qn,Vn,En=(0,Un.kc)(function(l,d){var s=l.css,t=l.token,i=l.prefixCls,a=d.isSelected,M=d.disabled,T=s(oe||(oe=Z()([`
      background-color: `,`;
    `])),t.colorFillSecondary);return{anchor:s(Jn||(Jn=Z()([`
        z-index: 9999;
      `]))),menuEmpty:s(ce||(ce=Z()([`
        padding: `,`px;
      `])),t.padding),menuOverlay:s(ve||(ve=Z()([`
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
      `])),t.marginXXS,t.paddingXXS,t.colorBgElevated,t.borderRadius,t.boxShadow,i),menuItem:s(ae||(ae=Z()([`
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
      `])),M?"not-allowed":"pointer",M?"none":"all",t.paddingXS,t.borderRadius,M?t.colorTextDisabled:t.colorText,t.fontSize,a&&T,T),menuItemIcon:s(qn||(qn=Z()([`
        color: `,`;
      `])),t.colorInfoText),menuItemLabel:s(Vn||(Vn=Z()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),yn=le.C.Text,hn=(0,e.memo)(function(l){var d=l.index,s=l.isSelected,t=l.onClick,i=l.onMouseEnter,a=l.option,M=l.queryString,T=l.showIcon,_=T===void 0?!0:T,un=En({isSelected:s,disabled:a.disabled}),cn=un.styles,H=a.label,Ln=(0,e.useMemo)(function(){var wn=H,ue="",We="";if(M){var Fe=new RegExp((0,te.Z)(M),"i"),Le=Fe.exec(a.label);Le&&(wn=H.slice(0,Math.max(0,Le.index)),ue=Le[0],We=H.slice(Math.max(0,Le.index+Le[0].length)))}return{before:wn,middle:ue,after:We}},[a.label,M,H]),Nn=Ln.before,On=Ln.middle,Fn=Ln.after;return(0,g.jsxs)(X.Z,{align:"center",className:cn.menuItem,gap:4,onClick:function(){return t==null?void 0:t(d,a)},onMouseEnter:function(){return i==null?void 0:i(d,a)},ref:a.setRefElement,tabIndex:-1,children:[_&&(0,g.jsx)(X.Z,{className:cn.menuItemIcon,children:a.icon}),(0,g.jsxs)("div",{className:cn.menuItemLabel,title:a.label,children:[Nn,(0,g.jsx)(yn,{mark:!0,children:On}),Fn]}),(0,g.jsx)(X.Z,{children:a.extraElement})]},a.key)});hn.displayName="MentionMenuItem";var Wn=(0,e.memo)(function(l){var d=l.selectedIndex,s=l.options,t=l.onClick,i=l.onMouseEnter,a=l.queryString,M=En({}),T=M.styles;return(0,g.jsxs)(g.Fragment,{children:[s.length===0&&(0,g.jsx)(ie.Z,{className:T.menuEmpty,image:ie.Z.PRESENTED_IMAGE_SIMPLE}),s.map(function(_,un){return(0,g.jsx)(hn,{index:un,isSelected:d===un,onClick:t,onMouseEnter:i,option:_,queryString:a},_.key)})]})}),Dn=(0,e.memo)(function(l){var d=l.overlayClassName,s=l.triggers,t=l.options,i=t===void 0?[]:t,a=l.allowSpaces,M=a===void 0?!0:a,T=l.punctuation,_=T===void 0?Tn:T,un=l.preTriggerChars,cn=un===void 0?An:un,H=l.onSelect,Ln=En({}),Nn=Ln.cx,On=Ln.styles,Fn=(0,p.g)(),wn=h()(Fn,1),ue=wn[0],We=Qn(s,{punctuation:_,preTriggerChars:cn,allowSpaces:M}),Fe=We.trigger,Le=We.checkForMentionMatch,Xe=(0,e.useState)(null),Ve=h()(Xe,2),De=Ve[0],Je=Ve[1],Ye=Pn(i,De),je=Ye.options,Ge=(0,e.useCallback)(function(ne,ye,$e,Ie){H==null||H(ne,Fe,De),ue.update(function(){ye&&ne!==null&&ne!==void 0&&ne.key&&ye.remove(),ne!=null&&ne.onSelect&&ne.onSelect(Ie),$e()})},[ue,H,De,Fe]),fe=(0,e.useCallback)(function(ne){var ye=ne.selectedIndex,$e=ne.selectOptionAndCleanUp;return(0,g.jsx)(C.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,g.jsx)(zn.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Ne,ge){var be=ge.nativeEvent;be.stopPropagation(),ue.dispatchCommand(L,{})},onSelect:function(Ne,ge){$e(ge.node)},titleRender:function(Ne){var ge;return(0,g.jsx)(hn,{isSelected:((ge=je[ye])===null||ge===void 0?void 0:ge.value)===Ne.value,option:Ne,queryString:De,showIcon:!Ne.isChild})},treeData:je})})},[je,ue,De]),Ke=(0,e.useCallback)(function(ne,ye,$e){var Ie=ye.selectedIndex,Ne=ye.selectOptionAndCleanUp,ge=ye.setHighlightedIndex;return ne.current?_n.createPortal((0,g.jsx)("div",{className:Nn(On.menuOverlay,d),role:"menu",children:je.some(function(be){return(be.children||[]).length>0})?fe(ye):(0,g.jsx)(Wn,{onClick:function(Ue,Qe){Qe.disabled||(ge(Ue),Ne(Qe))},onMouseEnter:function(Ue,Qe){Qe.disabled||ge(Ue)},options:je,queryString:De,selectedIndex:Ie})}),ne.current):null},[Nn,je,d,De,fe,On.menuOverlay]);return(0,g.jsx)(jn.HQ,{anchorClassName:On.anchor,menuRenderFn:Ke,onQueryChange:Je,onSelectOption:Ge,options:je,triggerFn:Le})}),Gn,Yn,Ce,Te,Ae,pe,xe,Se,Re=32,ze=22,bn=function(d){return Re+Math.max(d-1,0)*ze},me=(0,Un.kc)(function(l,d){var s=l.css,t=l.token,i=l.prefixCls,a=d.autoSize;return{wrapper:s(Gn||(Gn=Z()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:s(Yn||(Yn=Z()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Re,t.fontSize,Re,t.colorTextPlaceholder),root:s(Ce||(Ce=Z()([`
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
      `])),t.colorBorder,t.borderRadius,t.colorText,t.fontSize,t.fontFamily,(a==null?void 0:a.minRows)&&s(Te||(Te=Z()([`
          min-height: `,`px;
        `])),bn(a.minRows)),(a==null?void 0:a.maxRows)&&s(Ae||(Ae=Z()([`
          max-height: `,`px;
        `])),bn(a.maxRows)),t.motionDurationMid,t.colorPrimaryBorder,ze),filled:s(pe||(pe=Z()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),t.colorFillTertiary,t.colorFillSecondary,t.colorBgBase),borderless:s(xe||(xe=Z()([`
        background: transparent;
        border: none;
      `]))),disabled:s(Se||(Se=Z()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),t.colorTextDisabled,t.colorBgContainerDisabled)}}),se=function(d){var s=d.className,t=d.classNames,i=d.placeholder,a=d.style,M=d.value,T=d.defaultValue,_=d.readOnly,un=_===void 0?!1:_,cn=d.disabled,H=d.onChange,Ln=d.onBlur,Nn=d.onFocus,On=d.variant,Fn=On===void 0?"outlined":On,wn=d.options,ue=wn===void 0?[]:wn,We=d.autoSize,Fe=d.triggers,Le=Fe===void 0?["@"]:Fe,Xe=d.allowSpaces,Ve=d.punctuation,De=d.preTriggerChars,Je=d.onSelect,Ye=C.ZP.useConfig(),je=Ye.componentDisabled,Ge=me({autoSize:We}),fe=Ge.styles,Ke=Ge.cx,ne=(0,e.useMemo)(function(){return cn!=null?cn:je},[je,cn]),ye=(0,e.useMemo)(function(){return!un&&!ne},[ne,un]),$e=(0,e.useMemo)(function(){return{namespace:"mentions",nodes:[Y,{replace:v.R2,with:function(be){return new Y(be.__text)}},Ee],editorState:ee(M||T||""),onError:function(be){throw be}}},[]),Ie=function(be){var Ue=be.read(function(){return(0,v.Gv)().getTextContent()});H==null||H(Ue.replaceAll(`

`,`
`))},Ne=(0,e.useMemo)(function(){var ge=function be(Ue,Qe){return Ue.reduce(function(He,Ze){if(He[Ze.value]=Ze,He[Ze.value].icon||(He[Ze.value].icon=Qe),Ze.children&&Ze.children.length>0){var we=be(Ze.children,Ze.icon);Object.assign(He,we)}return He},{})};return ge(ue)},[ue]);return z.j?(0,g.jsx)(A.R,{initialConfig:r()(r()({},$e),{},{editable:ye}),children:(0,g.jsx)(en,{value:{optionsMap:Ne},children:(0,g.jsxs)("div",{className:Ke(fe.wrapper,t==null?void 0:t.wrapper),children:[(0,g.jsx)(c.B,{ErrorBoundary:W.g,contentEditable:(0,g.jsx)(K.f,{className:Ke(b()(b()(b()(b()({},fe.root,!0),fe.filled,Fn==="filled"),fe.borderless,Fn==="borderless"),fe.disabled,ne),s),style:a||{}}),placeholder:(0,g.jsx)("div",{className:fe.placeholder,children:i||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),ye&&(0,g.jsx)(Dn,{allowSpaces:Xe,onSelect:Je,options:ue,overlayClassName:t==null?void 0:t.menuOverlay,preTriggerChars:De,punctuation:Ve,triggers:Le}),(0,g.jsx)(Q,{}),(0,g.jsx)(Hn,{}),(0,g.jsx)(o.e,{}),(0,g.jsx)(j.$,{onChange:Ie}),(0,g.jsx)(y,{onBlur:Ln,onFocus:Nn}),(0,g.jsx)(vn,{editable:ye})]})})}):(0,g.jsxs)("div",{className:Ke(fe.wrapper,t==null?void 0:t.wrapper),children:[(0,g.jsx)("div",{className:Ke(b()(b()(b()(b()({},fe.root,!0),fe.filled,Fn==="filled"),fe.borderless,Fn==="borderless"),fe.disabled,ne),s),style:a||{}}),(0,g.jsx)("div",{className:fe.placeholder,children:i||"\u8F93\u5165 ".concat(Le.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(In,q,n){n.d(q,{u:function(){return p}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(76795),K=n(75271),W="yunti-ui",o=n(53649),j=n.n(o),c=n(3772),C,v,e=(0,c.kc)(function(S,E){var L=S.css,D=S.prefixCls,y=E.borderd,N=y===void 0?!0:y,J=E.footer,O=J===null||Array.isArray(J)&&J.length===0,U=L(C||(C=j()([`
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
    `])),D,D,O?0:"40px",D,O?0:"1px");return{custom:L(v||(v=j()([`
        `,`
      `])),N&&U)}},{hashPriority:"low"}),z=n(52676),F=["className","borderd"],h=function(E){var L=E.className,D=E.borderd,y=D===void 0?!0:D,N=b()(E,F),J=e(r()({borderd:y},N)),O=J.styles,U=J.cx;return(0,z.jsx)(A.Z,r()(r()({},N),{},{className:U(O.custom,"".concat(W,"-modal"),L)}))},p=h;p.useModal=A.Z.useModal,p.destroyAll=A.Z.destroyAll,p.config=A.Z.config,p._InternalPanelDoNotUseOrYouWillBeFired=A.Z._InternalPanelDoNotUseOrYouWillBeFired,p.info=A.Z.info,p.success=A.Z.success,p.error=A.Z.error,p.warning=A.Z.warning,p.warn=A.Z.warn,p.confirm=A.Z.confirm;var x=null},81321:function(In,q,n){n.d(q,{ZM:function(){return Pe},Hu:function(){return U},Xq:function(){return Ee},rE:function(){return Be}});var nn=n(26068),r=n.n(nn),w=n(48305),b=n.n(w),A=n(67825),K=n.n(A),W=n(71795),o=n(75271),j=n(94456),c=n(27046),C=n(22622),v=n(32328),e=n(87449),z=n(28485),F=n(90228),h=n.n(F),p=n(87999),x=n.n(p),S=n(97524),E=n(50279),L=n(25298),D=n.n(L),y=n(17069),N=n.n(y),J=n(82092),O=n.n(J),U=function(){function fn(){D()(this,fn),O()(this,"methodMap",void 0),O()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return N()(fn,[{key:"registerMethod",value:function(Q,B){this.methodMap[Q]=B}},{key:"call",value:function(Q){for(var B,xn,Cn=arguments.length,Mn=new Array(Cn>1?Cn-1:0),ln=1;ln<Cn;ln++)Mn[ln-1]=arguments[ln];return(B=(xn=this.methodMap)[Q])===null||B===void 0?void 0:B.call.apply(B,[xn].concat(Mn))}},{key:"updateMeta",value:function(Q){Object.assign(this.meta,Q)}},{key:"getMeta",value:function(){return Object.freeze(r()({},this.meta))}}]),fn}(),tn="__base_monaco_editor_controller__",V=z.j&&window;V&&!V[tn]&&(V[tn]=new U);var gn=V[tn],rn=function(){var fn,f;return function(){var Q=x()(h()().mark(function B(xn){var Cn;return h()().wrap(function(ln){for(;;)switch(ln.prev=ln.next){case 0:if(!(!fn||!(0,E.Z)(f,xn))){ln.next=7;break}return Cn=Object.keys(xn||{}).length>0,S.Z.config(Cn?xn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),ln.next=5,S.Z.init();case 5:fn=ln.sent,f=xn;case 7:return ln.abrupt("return",fn);case 8:case"end":return ln.stop()}},B)}));return function(B){return Q.apply(this,arguments)}}()}(),an=function(f){return f?S.Z.config(f):S.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),S.Z.init()};function G(fn){var f=Object.keys(fn||{}).length>0,Q=f?fn:void 0;return gn.getMeta().singleton?rn(Q):an(Q)}function u(fn){controller.updateMeta(fn)}var k=z.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",Y=k==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",sn={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},vn={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function on(fn){var f=(0,o.useRef)();return(0,o.useEffect)(function(){f.current=fn},[fn]),f.current}function R(fn,f,Q,B){if(B){var xn=fn.editor.getModel(fn.Uri.parse(B));if(xn)return xn}return fn.editor.createModel(f,Q,B?fn.Uri.parse(B):void 0)}var $=function(f,Q){var B=Q.editorDidMount,xn=Q.editorWillMount,Cn=Q.theme,Mn=Q.value,ln=Q.path,ee=Q.language,Hn=Q.saveViewState,jn=Q.defaultValue,zn=Q.enhancers,_n=(0,o.useState)(!1),te=b()(_n,2),Kn=te[0],re=te[1],Pn=(0,o.useState)(!1),ie=b()(Pn,2),le=ie[0],oe=ie[1],Jn=(0,o.useState)(!1),ce=b()(Jn,2),ve=ce[0],ae=ce[1],qn=(0,o.useRef)(jn),Vn=(0,o.useRef)(Mn),En=(0,o.useRef)(ee||"text"),yn=(0,o.useRef)(ln),hn=on(ln),Wn=(0,o.useRef)(Q.requireConfig),Dn=(0,o.useRef)(Q.options),Gn=(0,o.useRef)(),Yn=(0,o.useRef)(),Ce=(0,o.useRef)(),Te=(0,o.useRef)(f),Ae=(0,o.useRef)(),pe=(0,o.useRef)(),xe=(0,o.useRef)(!1),Se=(0,o.useRef)(new Map),Re=(0,o.useRef)({});(0,o.useEffect)(function(){Re.current.enhancers=zn},[zn]),(0,o.useEffect)(function(){Ae.current=B},[B]),(0,o.useEffect)(function(){pe.current=xn},[xn]),(0,o.useEffect)(function(){Vn.current=Mn},[Mn]),(0,o.useEffect)(function(){En.current=ee},[ee]),(0,o.useEffect)(function(){qn.current=jn},[jn]),(0,o.useEffect)(function(){ae(!0),G(Wn.current).then(function(bn){var me;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Gn.current=bn;try{var se;(se=pe.current)===null||se===void 0||se.call(pe,bn)}catch(T){}if(Ce.current){var l;if(Te.current==="single"){var d,s,t=R(bn,(d=(s=Vn.current)!==null&&s!==void 0?s:qn.current)!==null&&d!==void 0?d:"",En.current,yn.current);l=bn.editor.create(Ce.current,r()(r()({automaticLayout:!0},sn),Dn.current)),l.setModel(t)}else{var i=bn.editor.createModel(Vn.current,En.current),a=bn.editor.createModel(Vn.current,En.current);l=bn.editor.createDiffEditor(Ce.current,r()(r()({automaticLayout:!0},vn),Dn.current)),l.setModel({original:i,modified:a})}Yn.current=l,(me=Re.current.enhancers)===null||me===void 0||me.forEach(function(T){return T(bn,l)});try{var M;(M=Ae.current)===null||M===void 0||M.call(Ae,bn,l)}catch(T){}xe.current||re(!0)}}).catch(function(bn){console.error("Monaco Editor Load Error!",bn)}).then(function(){xe.current||ae(!1)})},[]),(0,o.useEffect)(function(){var bn;Kn&&((bn=Gn.current)===null||bn===void 0||bn.editor.setTheme(Cn))},[Kn,Cn]),(0,o.useEffect)(function(){if(Kn){var bn=f==="diff"?Yn.current.getModifiedEditor():Yn.current;bn==null||bn.onDidFocusEditorText(function(){xe.current||oe(!0)}),bn==null||bn.onDidBlurEditorText(function(){xe.current||oe(!1)})}},[Kn,f]),(0,o.useEffect)(function(){return function(){xe.current=!0}},[]),(0,o.useEffect)(function(){var bn,me,se;if(Kn&&!(f!=="diff"&&ln)){var l=f==="diff"?Yn.current.getModifiedEditor():Yn.current,d=(bn=Mn!=null?Mn:qn.current)!==null&&bn!==void 0?bn:"",s=(me=Gn.current)===null||me===void 0?void 0:me.editor.EditorOption.readOnly;s&&l!==null&&l!==void 0&&(se=l.getOption)!==null&&se!==void 0&&se.call(l,s)?l==null||l.setValue(d):Mn!==(l==null?void 0:l.getValue())&&(l==null||l.executeEdits("",[{range:l==null?void 0:l.getModel().getFullModelRange(),text:d,forceMoveMarkers:!0}]),l==null||l.pushUndoStop())}},[Kn,ln,f,Mn]),(0,o.useEffect)(function(){var bn,me;if(Kn&&f!=="diff"&&ln!==hn){var se=R(Gn.current,(bn=Vn.current)!==null&&bn!==void 0?bn:qn.current,En.current,ln),l=Yn.current;Vn.current!==null&&Vn.current!==void 0&&se.getValue()!==Vn.current&&se.setValue(Vn.current),se!==((me=Yn.current)===null||me===void 0?void 0:me.getModel())&&(Hn&&Se.current.set(hn,l.saveViewState()),l.setModel(se),Hn&&l.restoreViewState(Se.current.get(ln)))}},[Kn,Mn,ln,hn,f,Hn]);var ze=Yn;return{isEditorReady:Kn,focused:le,loading:ve,containerRef:Ce,monacoRef:Gn,editorRef:ze,valueRef:Vn}},X=function(f){var Q=(0,o.useState)(!1),B=b()(Q,2),xn=B[0],Cn=B[1],Mn=function(){if(xn){Cn(!1),f==null||f.updateOptions(r()(r()({},f==null?void 0:f.getOptions()),{},{minimap:{enabled:!1}})),f==null||f.layout();return}Cn(!0),f==null||f.updateOptions(r()(r()({},f==null?void 0:f.getOptions()),{},{minimap:{enabled:!0}})),f==null||f.layout()};return{isFullScreen:xn,fullScreen:Mn}},m=n(53649),P=n.n(m),g=n(3772),I,en,mn,dn,Tn,An,Zn,Sn,$n,Xn,kn,Bn=(0,g.kc)(function(fn,f){var Q=fn.css,B=fn.token,xn=fn.prefixCls,Cn=f.minimapEnabled,Mn=Cn===void 0?!1:Cn,ln=f.isFullScreen,ee=ln===void 0?!1:ln,Hn=f.diff,jn=Hn===void 0?!1:Hn,zn=f.variant,_n=zn===void 0?"outlined":zn,te=(0,g.F4)(I||(I=P()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),Kn=function(){switch(_n){case"outlined":return B.colorBgBase;case"filled":return B.colorFillTertiary;default:return"transparent"}};return{base:Q(en||(en=P()([`
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
      `])),Kn(),_n==="outlined"?B.colorBorder:"transparent",B.borderRadius,_n==="outlined"?B.colorPrimaryHover:"transparent",_n==="filled"&&Q(mn||(mn=P()([`
            background-color: `,`;
          `])),B.colorFillSecondary),_n==="filled"&&Q(dn||(dn=P()([`
            background-color: `,`;
          `])),B.colorBgBase),_n!=="borderless"&&Q(Tn||(Tn=P()([`
            border-color: `,`;
          `])),B.colorPrimaryActive),ee&&Q(An||(An=P()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!ee&&Q(Zn||(Zn=P()([`
              background-color: transparent;
            `]))),B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius-1,B.borderRadius-1,B.colorErrorText,B.colorErrorBg),fullScreenBtn:Q(Sn||(Sn=P()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),xn,B.colorTextSecondary,ee?Q($n||($n=P()([`
                z-index: 9999;
                right: `,`px;
              `])),jn?64:138):Q(Xn||(Xn=P()([`
                right: `,`px;
              `])),Mn||jn?64:20)),loading:Q(kn||(kn=P()([`
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
      `])),B.fontSizeSM,B.colorTextTertiary,te)}},{hashPriority:"low"}),pn=n(52676);function Rn(){}var Qn=function(f){var Q,B=f.onChange,xn=f.enableOutline,Cn=f.width,Mn=f.height,ln=f.language,ee=f.supportFullScreen,Hn=(0,o.useRef)(B),jn=$("single",f),zn=jn.isEditorReady,_n=jn.focused,te=jn.loading,Kn=jn.containerRef,re=jn.monacoRef,Pn=jn.editorRef,ie=jn.valueRef,le=(0,o.useRef)(),oe=X(Pn==null?void 0:Pn.current),Jn=oe.isFullScreen,ce=oe.fullScreen,ve=Bn({isFullScreen:Jn,minimapEnabled:(Q=f.options)===null||Q===void 0||(Q=Q.minimap)===null||Q===void 0?void 0:Q.enabled,variant:f.variant}),ae=ve.cx,qn=ve.styles,Vn=ae(qn.base,f.className,{"ve-focused":_n,"ve-outline":xn}),En=(0,o.useMemo)(function(){return{width:Cn,height:Mn}},[Cn,Mn]);return(0,o.useEffect)(function(){Hn.current=B},[B]),(0,o.useEffect)(function(){if(zn){var yn,hn=Pn.current;(yn=le.current)===null||yn===void 0||yn.dispose(),le.current=hn==null?void 0:hn.onDidChangeModelContent(function(Wn){var Dn,Gn=hn==null||(Dn=hn.getModel())===null||Dn===void 0?void 0:Dn.getValue();if(ie.current!==Gn){var Yn;(Yn=Hn.current)===null||Yn===void 0||Yn.call(Hn,Gn,Wn)}})}},[Pn,zn,le,ie]),(0,o.useEffect)(function(){return function(){var yn,hn,Wn,Dn=Pn.current;(yn=le.current)===null||yn===void 0||yn.dispose(),Dn==null||(hn=Dn.getModel())===null||hn===void 0||hn.dispose(),(Wn=Pn.current)===null||Wn===void 0||Wn.dispose()}},[Pn]),(0,o.useEffect)(function(){var yn;if(zn){var hn=(yn=Pn.current)===null||yn===void 0?void 0:yn.getModel();if(hn){var Wn;(Wn=re.current)===null||Wn===void 0||Wn.editor.setModelLanguage(hn,ln)}}},[Pn,zn,ln,re]),(0,pn.jsxs)("div",{className:Vn,style:f.style,children:[te&&(0,pn.jsx)("span",{className:ae(qn.loading,"loading"),children:Y}),(0,pn.jsx)("div",{className:"react-monaco-editor-container",ref:Kn,style:En,children:ee&&(0,pn.jsx)(C.ZP,{className:qn.fullScreenBtn,icon:(0,pn.jsx)(c.Z,{icon:Jn?v.Z:e.Z}),onClick:ce,size:"small",type:"text"})})]})},de=function(f){var Q=f.enableOutline,B=f.width,xn=f.height,Cn=f.language,Mn=f.onChange,ln=f.original,ee=f.supportFullScreen,Hn=(0,o.useRef)(Mn),jn=$("diff",f),zn=jn.isEditorReady,_n=jn.focused,te=jn.loading,Kn=jn.containerRef,re=jn.monacoRef,Pn=jn.editorRef,ie=jn.valueRef,le=X(),oe=le.isFullScreen,Jn=le.fullScreen,ce=Bn({isFullScreen:oe,diff:!0,variant:f.variant}),ve=ce.cx,ae=ce.styles,qn=ve(ae.base,f.className,{"ve-focused":_n,"ve-outline":Q}),Vn=(0,o.useMemo)(function(){return{width:B,height:xn}},[B,xn]);return(0,o.useEffect)(function(){Hn.current=Mn},[Mn]),(0,o.useEffect)(function(){var En;if(zn){(En=Pn.current.getModel())===null||En===void 0||En.original.setValue(ln!=null?ln:"");var yn=Pn.current.getModel()||{},hn=yn.modified;hn==null||hn.onDidChangeContent(function(Wn){var Dn=hn.getValue();if(ie.current!==Dn){var Gn;(Gn=Hn.current)===null||Gn===void 0||Gn.call(Hn,Dn,Wn)}})}},[Pn,zn,ln,ie]),(0,o.useEffect)(function(){return function(){var En,yn,hn;(En=Pn.current)===null||En===void 0||(En=En.getModel())===null||En===void 0||(En=En.original)===null||En===void 0||En.dispose(),(yn=Pn.current)===null||yn===void 0||(yn=yn.getModel())===null||yn===void 0||(yn=yn.modified)===null||yn===void 0||yn.dispose(),(hn=Pn.current)===null||hn===void 0||hn.dispose()}},[Pn]),(0,o.useEffect)(function(){var En,yn,hn;if(zn){var Wn=((En=Pn.current)===null||En===void 0?void 0:En.getModel())||{},Dn=Wn.original,Gn=Wn.modified;(yn=re.current)===null||yn===void 0||yn.editor.setModelLanguage(Dn,Cn),(hn=re.current)===null||hn===void 0||hn.editor.setModelLanguage(Gn,Cn)}},[Pn,zn,Cn,re]),(0,pn.jsxs)("div",{className:qn,style:f.style,children:[te&&(0,pn.jsx)("span",{className:ve(ae.loading,"loading"),children:Y}),(0,pn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Kn,style:Vn,children:ee&&(0,pn.jsx)(C.ZP,{className:ae.fullScreenBtn,icon:(0,pn.jsx)(c.Z,{icon:oe?v.Z:e.Z}),onClick:Jn,size:"small",type:"text"})})]})},Z=Object.assign(de,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:sn,editorDidMount:Rn,editorWillMount:Rn,onChange:Rn,requireConfig:{}}}),Un=Object.assign(Qn,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:sn,editorDidMount:Rn,editorWillMount:Rn,onChange:Rn,requireConfig:{}},MonacoDiffEditor:Z}),he=null,Me=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Oe=["inlineView","options"],Pe=function(f){var Q=f.type,B=Q===void 0?"single":Q,xn=f.editorDidMount,Cn=f.readOnly,Mn=Cn===void 0?!1:Cn,ln=f.lineNumbers,ee=ln===void 0?"on":ln,Hn=f.wordWrap,jn=Hn===void 0?"off":Hn,zn=f.contextmenu,_n=zn===void 0?!0:zn,te=f.theme,Kn=f.minimapEnabled,re=Kn===void 0?!1:Kn,Pn=f.version,ie=Pn===void 0?"0.45.0":Pn,le=f.requireConfig,oe=le===void 0?{}:le,Jn=f.options,ce=f.className,ve=f.supportFullScreen,ae=K()(f,Me),qn=(0,o.useRef)(xn);(0,o.useEffect)(function(){qn.current=xn},[xn]);var Vn=(0,W.r)(),En=Vn.isDarkMode,yn=(0,o.useMemo)(function(){return te||(En?"vs-dark":"vs")},[En,te]),hn=(0,o.useState)(),Wn=b()(hn,2),Dn=Wn[0],Gn=Wn[1],Yn=(0,o.useCallback)(function(pe,xe){var Se;Gn(xe),(Se=qn.current)===null||Se===void 0||Se.call(qn,pe,xe)},[]),Ce=(0,o.useMemo)(function(){var pe=Object.assign({},Jn,{readOnly:Mn,lineNumbers:ee,wordWrap:jn,contextmenu:_n,minimap:re===void 0?Jn==null?void 0:Jn.minimap:Object.assign({},Jn==null?void 0:Jn.minimap,{enabled:re})});return Dn==null||Dn.updateOptions(pe),pe},[Jn,Mn,ee,jn,_n,re,Dn]),Te=(0,j.nc)(),Ae=(0,o.useMemo)(function(){return Object.assign({},oe,{paths:r()({vs:Te({path:"min/vs",pkg:"monaco-editor",version:ie})},oe.paths)})},[Te,oe,ie]);return B!=="diff"?(0,pn.jsx)(Un,r()({className:ce,editorDidMount:Yn,options:Ce,requireConfig:Ae,supportFullScreen:Dn&&ve,theme:yn},ae)):(0,pn.jsx)(Un.MonacoDiffEditor,r()({className:ce,editorDidMount:Yn,options:Ce,requireConfig:Ae,supportFullScreen:Dn&&ve,theme:yn},ae))},Be=function(f){return(0,pn.jsx)(Pe,r()(r()({},f),{},{type:"single"}))},Ee=function(f){var Q=f.inlineView,B=Q===void 0?"off":Q,xn=f.options,Cn=K()(f,Oe);return(0,pn.jsx)(Pe,r()(r()({options:Object.assign({useInlineViewWhenSpaceIsLimited:B==="on"||B==="auto",renderSideBySide:B==="off"||B==="auto"},xn)},Cn),{},{type:"diff"}))}},25777:function(In,q,n){n.d(q,{W:function(){return gn}});var nn=n(26068),r=n.n(nn),w=n(15558),b=n.n(w),A=n(48305),K=n.n(A),W=n(67825),o=n.n(W),j=n(27046),c=n(60399),C=n(38590),v=n(79214),e=n(82338),z=n(99571),F=n(75271),h=n(53649),p=n.n(h),x=n(3772),S,E,L,D,y,N=function(an){switch(an){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},J=(0,x.kc)(function(rn,an){var G=rn.css,u=rn.token,k=rn.prefixCls,Y=an.disabled,sn=an.size,vn=N(sn),on=vn.cardWidth;return{option:G(S||(S=p()([`
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
      `])),u.colorBorder,u.borderRadius,Y?"not-allowed":"pointer",u.padding,u.motionDurationFast,on,Y&&G(E||(E=p()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),u.colorBgContainerDisabled,k,u.colorTextDisabled,k,u.colorTextDisabled),!Y&&G(L||(L=p()([`
          &:hover {
            border-color: `,`;
          }
        `])),u.colorPrimaryBorderHover),k),optionSelected:G(D||(D=p()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),u.colorPrimary,u.colorPrimaryActive),check:G(y||(y=p()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),u.marginXS,u.marginXS,u.colorPrimary)}}),O=n(52676),U=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],tn=c.Z.Text,V=c.Z.Paragraph,gn=F.forwardRef(function(rn,an){var G=rn.defaultValue,u=rn.value,k=rn.onChange,Y=rn.multiple,sn=Y===void 0?!1:Y,vn=rn.disabled,on=vn===void 0?!1:vn,R=rn.options,$=R===void 0?[]:R,X=rn.classNames,m=rn.styles,P=rn.size,g=P===void 0?"middle":P,I=rn.optionRender,en=o()(rn,U),mn=(0,F.useMemo)(function(){return $.some(function(Z){return!!Z.img||!!Z.icon})},[$]),dn=J({disabled:on,size:g}),Tn=dn.cx,An=dn.styles,Zn=(0,F.useMemo)(function(){return N(g)},[g]),Sn=Zn.imgHeight,$n=(0,F.useCallback)(function(Z){return!sn||Array.isArray(Z)?Z:Z===void 0?[]:[Z]},[sn]),Xn=(0,z.C8)($n(G),{defaultValue:$n(G),value:u,onChange:k}),kn=K()(Xn,2),Bn=kn[0],pn=kn[1],Rn=(0,F.useCallback)(function(Z){if(!on){if(!sn){pn(Z);return}if(Bn.includes(Z)){pn(Bn.filter(function(Un){return Un!==Z}));return}pn([].concat(b()(Bn),[Z]))}},[Bn,on,sn,pn]),Qn=(0,F.useCallback)(function(Z){return sn?Bn.includes(Z):Bn===Z},[Bn,sn]),de=(0,F.useCallback)(function(Z,Un){var he=Qn(Z.value),Me=(0,O.jsxs)(C.Z,{align:mn?"center":"flex-start",className:Tn(An.option,he&&An.optionSelected,X==null?void 0:X.card),gap:"small",onClick:function(){return Rn(Z.value)},style:r()(r()({},m==null?void 0:m.card),Z.style),vertical:!0,children:[mn&&(0,O.jsx)(v.C,{className:X==null?void 0:X.icon,icon:Z.icon,shape:"square",size:Sn,src:Z.img,style:r()(r()({},m==null?void 0:m.icon),Z.iconStyle)}),Z.label&&he&&(0,O.jsx)(tn,{ellipsis:!0,strong:!0,children:Z.label}),Z.label&&!he&&(0,O.jsx)(tn,{ellipsis:!0,children:Z.label}),!mn&&Z.description&&(0,O.jsx)(V,{ellipsis:{rows:2},type:"secondary",children:Z.description}),he&&(0,O.jsx)(j.Z,{className:An.check,icon:e.Z})]},Z.value);return I?I(Me,Z,Un):Me},[X==null?void 0:X.card,X==null?void 0:X.icon,Tn,Sn,mn,Qn,Rn,I,An.check,An.option,An.optionSelected,m==null?void 0:m.card,m==null?void 0:m.icon]);return(0,O.jsx)(C.Z,r()(r()({gap:"large",ref:an,wrap:!0},en),{},{children:$.map(function(Z,Un){return de(Z,Un)})}))})},66269:function(In,q,n){n.d(q,{a:function(){return C}});var nn=n(26068),r=n.n(nn),w=n(48305),b=n.n(w),A=n(41546),K=n(29797),W=n(29988),o=n(579),j=n(75271),c=n(52676),C=function(e){var z=e.value,F=e.defaultValue,h=e.min,p=h===void 0?0:h,x=e.max,S=e.step,E=e.gutter,L=E===void 0?16:E,D=e.sliderCol,y=D===void 0?{span:12}:D,N=e.inputCol,J=N===void 0?{span:5}:N,O=e.addonAfter,U=e.addonBefore,tn=e.placeholder,V=e.onChange,gn=e.style,rn=e.className,an=e.sliderProps,G=an===void 0?{}:an,u=e.inputProps,k=u===void 0?{}:u,Y=(0,j.useState)(),sn=b()(Y,2),vn=sn[0],on=sn[1],R=function(X){Number.isNaN(X)||(on(X),V==null||V(X))};return(0,c.jsxs)(A.Z,{className:rn,gutter:L,style:gn,children:[(0,c.jsx)(K.Z,r()(r()({},y),{},{children:(0,c.jsx)(W.Z,r()(r()({},G),{},{defaultValue:F,max:x,min:p,onChange:R,step:S,value:z!=null?z:vn}))})),(0,c.jsx)(K.Z,r()(r()({},J),{},{children:(0,c.jsx)(o.Z,r()(r()({},k),{},{addonAfter:O,addonBefore:U,defaultValue:F,max:x,min:p,onChange:R,placeholder:tn,step:S,value:z!=null?z:vn}))}))]})}},56482:function(In,q,n){n.d(q,{N:function(){return F}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(37805),K=n(75271),W=n(79213),o=n(53649),j=n.n(o),c=n(3772),C,v=(0,c.kc)(function(h){var p=h.css,x=h.token,S=h.prefixCls;return{table:p(C||(C=j()([`
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
    `])),S,x.colorTextTertiary)}}),e=n(52676),z=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],F=function(p){var x=p.rootStyle,S=p.rootClassName,E=p.icon,L=p.title,D=p.variant,y=p.defaultActive,N=p.extra,J=p.className,O=b()(p,z),U=v(),tn=U.cx,V=U.styles;return(0,e.jsx)(W.w,{className:S,style:x,icon:E,title:L,variant:D,defaultActive:y,extra:N,children:(0,e.jsx)(A.Z,r()({className:tn(V.table,J),pagination:!1,rowHoverable:!1,size:"small"},O))})}},11546:function(In,q,n){n.d(q,{NU:function(){return o.N},iA:function(){return C}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(1718),K=n(37805),W=n(75271),o=n(56482),j=n(52676),c=["columns"],C=function(z){var F=z.columns,h=b()(z,c),p=(0,W.useMemo)(function(){return F==null?void 0:F.map(function(x){if(x.render)return x;if(x.ellipsis&&x.ellipsis!==!0&&x.ellipsis.showTitle||x.ellipsis===!0){var S=x.ellipsis===!0?{}:x.ellipsis;return r()(r()({},x),{},{ellipsis:{showTitle:!1},render:function(L){return L||L===0?(0,j.jsx)(A.Z,r()(r()({},S),{},{placement:"topLeft",title:L,children:L})):"-"}})}return x.render||(x.render=function(E){return E!=null?E:"-"}),x})},[F]);return(0,j.jsx)(K.Z,r()(r()({},h),{},{columns:p}))};C.displayName="Table",C.SELECTION_COLUMN=K.Z.SELECTION_COLUMN,C.EXPAND_COLUMN=K.Z.EXPAND_COLUMN,C.SELECTION_ALL=K.Z.SELECTION_ALL,C.SELECTION_INVERT=K.Z.SELECTION_INVERT,C.SELECTION_NONE=K.Z.SELECTION_NONE,C.Column=K.Z.Column,C.ColumnGroup=K.Z.ColumnGroup,C.Summary=K.Z.Summary,C.Collapse=o.N;var v=null},8559:function(In,q,n){n.d(q,{G:function(){return F}});var nn=n(53649),r=n.n(nn),w=n(3772),b=n(75271),A=n(52676),K,W,o,j,c,C,v,e,z=(0,w.kc)(function(h,p){var x=h.css,S=(0,w.F4)(K||(K=r()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),E=(0,w.F4)(W||(W=r()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),L=(0,w.F4)(o||(o=r()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:x(j||(j=r()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),p.width||34,p.height||22,p.bgColor||"transparent"),line:x(c||(c=r()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),p.lineColor||"#000"),animate1:x(C||(C=r()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),S),animate2:x(v||(v=r()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),E),animate3:x(e||(e=r()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),L)}}),F=function(p){var x=p.height,S=p.width,E=p.lineColor,L=p.bgColor,D=z({height:x,width:S,lineColor:E,bgColor:L}),y=D.styles,N=D.cx;return(0,A.jsxs)("div",{className:y.box,children:[(0,A.jsx)("div",{className:N(y.line,y.animate1)}),(0,A.jsx)("div",{className:N(y.line,y.animate2)}),(0,A.jsx)("div",{className:N(y.line,y.animate3)}),(0,A.jsx)("div",{className:N(y.line,y.animate2)}),(0,A.jsx)("div",{className:N(y.line,y.animate1)}),(0,A.jsx)("div",{className:N(y.line,y.animate2)}),(0,A.jsx)("div",{className:N(y.line,y.animate1)})]})}},71983:function(In,q,n){n.r(q),n.d(q,{Affix:function(){return mn.Z},Alert:function(){return F.b},Anchor:function(){return dn.Z},AntdMentions:function(){return Tn.Z},App:function(){return h.g},AudioPlayer:function(){return ze.Z},AutoComplete:function(){return An.Z},Avatar:function(){return Zn.C},BackTop:function(){return Sn.Z},Badge:function(){return $n.Z},BaseMonacoEditor:function(){return j.ZM},Breadcrumb:function(){return p.Z},Button:function(){return Xn.ZP},ButtonGroup:function(){return nn.h},Calendar:function(){return kn.Z},Card:function(){return x.Z},Carousel:function(){return Bn.Z},Cascader:function(){return pn.Z},ChatInputActionBar:function(){return gn.Z},ChatInputArea:function(){return V.Z},ChatInputAreaInner:function(){return rn.Z},ChatItem:function(){return k.z},ChatMarkdown:function(){return Y.L},ChatSendButton:function(){return an.Z},Checkbox:function(){return Rn.Z},Col:function(){return Qn.Z},Collapse:function(){return de.Z},CollapseGroup:function(){return r.w},CollapseTable:function(){return U.NU},ColorPicker:function(){return Z.Z},ConfigContext:function(){return w.E_},ConfigProvider:function(){return w.iV},CopyButton:function(){return pe.Z},DatePicker:function(){return Un.default},Descriptions:function(){return S.w},Divider:function(){return E.i},DragPanel:function(){return b.U},Drawer:function(){return L.d},Dropdown:function(){return D.L},EditableMessage:function(){return sn.i},Empty:function(){return he.Z},Flex:function(){return Me.Z},FloatButton:function(){return Oe.Z},Form:function(){return y.l},FormCollapseList:function(){return y.E},FormHelper:function(){return N.wK},FullFeaturedHighlighter:function(){return vn.EL},Grid:function(){return Pe.ZP},Highlighter:function(){return vn.oP},Image:function(){return Be.Z},Input:function(){return Ee.Z},InputNumber:function(){return fn.Z},JsonViewer:function(){return A.h},Layout:function(){return f.Z},List:function(){return Q.Z},LogViewer:function(){return W.n},Logo:function(){return K.T},Markdown:function(){return xe.Z},Mentions:function(){return o.o},Menu:function(){return B.Z},MobileChatInputArea:function(){return G.Z},MobileChatSendButton:function(){return u.Z},Modal:function(){return J.u},MonacoController:function(){return j.Hu},MonacoDiffEditor:function(){return j.Xq},MonacoEditor:function(){return j.rE},NotificationGlobalStyle:function(){return O.EZ},Page:function(){return c.T},Pagination:function(){return Cn.Z},Popconfirm:function(){return Mn.Z},Popover:function(){return ln.Z},ProCard:function(){return C.Q},Progress:function(){return ee.Z},QRCode:function(){return Hn.Z},Radio:function(){return jn.ZP},Rate:function(){return zn.Z},Result:function(){return _n.ZP},Row:function(){return te.Z},Segmented:function(){return Kn.Z},Select:function(){return re.default},SelectCard:function(){return v.W},Skeleton:function(){return Pn.Z},Slider:function(){return ie.Z},SliderInput:function(){return e.a},Space:function(){return le.Z},SpeechSynthesisTTS:function(){return Re.H},Spin:function(){return oe.Z},Statistic:function(){return Jn.Z},Status:function(){return z.q},Steps:function(){return ce.Z},Switch:function(){return ve.Z},SyntaxHighlighter:function(){return Se.Z},Table:function(){return U.iA},Tabs:function(){return ae.Z},Tag:function(){return qn.Z},TimePicker:function(){return yn.Z},Timeline:function(){return En.Z},Tooltip:function(){return hn.Z},Tour:function(){return Wn.Z},Transfer:function(){return Dn.Z},Tree:function(){return Gn.Z},TreeSelect:function(){return Yn.Z},Typography:function(){return tn.Z},Upload:function(){return Ce.Z},Watermark:function(){return Ae.Z},WaveformIcon:function(){return en.G},colorScales:function(){return on._},colors:function(){return on._},generateColorNeutralPalette:function(){return P},generateColorPalette:function(){return m},message:function(){return xn.ZP},neutralColorScales:function(){return g},notification:function(){return O.t6},stringify:function(){return A.P},theme:function(){return Vn.Z},useAudioPlayer:function(){return bn.x},useAutoFocus:function(){return N.wL},useCdnFn:function(){return w.nc},useLink:function(){return w.nB},useResponsive:function(){return se.F},useSpeechRecognition:function(){return me.x},useSpeechSynthes:function(){return I.J},useTheme:function(){return l.Fg},useThemeMode:function(){return d.r},version:function(){return Te.Z},withFormHelper:function(){return N.MX}});var nn=n(12644),r=n(79213),w=n(94456),b=n(13306),A=n(33985),K=n(52625),W=n(25969),o=n(79334),j=n(81321),c=n(40305),C=n(86346),v=n(25777),e=n(66269),z=n(46119),F=n(58479),h=n(5244),p=n(87902),x=n(42938),S=n(26345),E=n(82227),L=n(5795),D=n(99512),y=n(62719),N=n(20147),J=n(97527),O=n(40130),U=n(11546),tn=n(94729),V=n(52412),gn=n(98904),rn=n(34757),an=n(21113),G=n(30542),u=n(57714),k=n(59212),Y=n(99033),sn=n(99335),vn=n(17853),on=n(15094),R=n(82092),$=n.n(R),X=n(98644),m=function(t){var i=t.type,a=t.scale,M=t.appearance,T=(0,X.Z)(i),_=M==="dark";return $()($()($()($()($()($()($()($()($()($()({},"color".concat(T,"Bg"),a[M][1]),"color".concat(T,"BgHover"),a[M][2]),"color".concat(T,"Border"),a[M][4]),"color".concat(T,"BorderHover"),a[M][_?5:3]),"color".concat(T,"Hover"),a[M][_?10:8]),"color".concat(T),a[M][9]),"color".concat(T,"Active"),a[M][_?7:10]),"color".concat(T,"TextHover"),a[M][_?10:8]),"color".concat(T,"Text"),a[M][9]),"color".concat(T,"TextActive"),a[M][_?7:10])},P=function(t){var i=t.scale,a=t.appearance;return{colorBgContainer:a==="dark"?i[a][1]:i[a][0],colorBgElevated:a==="dark"?i[a][2]:i[a][0],colorBgLayout:a==="dark"?i[a][0]:i[a][1],colorBgMask:i.lightA[8],colorBgSpotlight:i[a][5],colorBorder:i[a][4],colorBorderSecondary:i[a][3],colorFill:i["".concat(a,"A")][3],colorFillQuaternary:i["".concat(a,"A")][0],colorFillSecondary:i["".concat(a,"A")][2],colorFillTertiary:i["".concat(a,"A")][1],colorText:i[a][12],colorTextQuaternary:i[a][6],colorTextSecondary:i[a][10],colorTextTertiary:i[a][8]}},g={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},I=n(82846),en=n(8559),mn=n(67142),dn=n(71477),Tn=n(83491),An=n(53180),Zn=n(79214),Sn=n(77582),$n=n(62701),Xn=n(22622),kn=n(79771),Bn=n(59153),pn=n(29891),Rn=n(10857),Qn=n(29797),de=n(40765),Z=n(68369),Un=n(20690),he=n(66642),Me=n(38590),Oe=n(59251),Pe=n(8208),Be=n(61035),Ee=n(98829),fn=n(579),f=n(14292),Q=n(336),B=n(8377),xn=n(31826),Cn=n(52969),Mn=n(39502),ln=n(4615),ee=n(9192),Hn=n(85959),jn=n(175),zn=n(22682),_n=n(10780),te=n(41546),Kn=n(89843),re=n(98721),Pn=n(91488),ie=n(29988),le=n(62272),oe=n(62023),Jn=n(91528),ce=n(60804),ve=n(51079),ae=n(63020),qn=n(52107),Vn=n(37924),En=n(70995),yn=n(54789),hn=n(1718),Wn=n(76326),Dn=n(84141),Gn=n(26082),Yn=n(56317),Ce=n(25876),Te=n(3359),Ae=n(79949),pe=n(92946),xe=n(27569),Se=n(84254),Re=n(49567),ze=n(30831),bn=n(2190),me=n(48481),se=n(46092),l=n(3772),d=n(71795)},40130:function(In,q,n){n.d(q,{EZ:function(){return p.E},t6:function(){return rn}});var nn=n(26068),r=n.n(nn),w=n(67825),b=n.n(w),A=n(48305),K=n.n(A),W=n(335),o=n.n(W),j=n(30657),c=n(19728),C=n(22620),v=n(40765),e=n(60399),z=n(86468),F=n(75271),h=n(52676),p=n(55300),x=["detail","message","description","onClose","className"],S=v.Z.Panel,E=e.Z.Link,L=e.Z.Paragraph,D=e.Z.Text,y={},N=function(u,k){y[u]||(y[u]=[]),y[u].push(k)},J=function(u){delete y[u]},O=function G(u){var k="";if(typeof u=="string")k=u;else if(typeof u=="number")k=u.toString();else if(Array.isArray(u)){var Y=o()(u),sn;try{for(Y.s();!(sn=Y.n()).done;){var vn=sn.value;k+=G(vn)}}catch(on){Y.e(on)}finally{Y.f()}}else(0,F.isValidElement)(u)&&(k+=G(u.props.children));return k},U=function(u){var k,Y=u.noticeKey,sn=u.message,vn=((k=y[Y])===null||k===void 0?void 0:k.length)||0;return(0,h.jsxs)(h.Fragment,{children:[sn,vn>1&&" (".concat(vn,")")]})},tn=function(u){var k=u.noticeKey,Y=(0,F.useState)(),sn=K()(Y,2),vn=sn[0],on=sn[1],R={},$=o()(y[k]),X;try{for($.s();!(X=$.n()).done;){var m=X.value,P=O(m.description);m.descKey=P,R[P]=m}}catch(g){$.e(g)}finally{$.f()}return(0,h.jsx)(v.Z,{accordion:!0,activeKey:vn,className:"yunti-notification-collapse",expandIcon:function(I){var en=I.isActive;return(0,h.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:en?(0,h.jsx)(E,{className:"yunti-notification-link",children:(0,h.jsx)(j.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,h.jsx)(c.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(I){on(I)},children:Object.values(R).map(function(g){var I=g.descKey,en=g.description,mn=g.detail;return(0,h.jsx)(S,{header:(0,h.jsx)(D,{ellipsis:{tooltip:!1},style:{width:250},children:en}),children:(0,h.jsx)(L,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(mn,null,2)},type:"secondary",children:(0,h.jsx)("pre",{children:JSON.stringify(mn,null,2)})})},I)})})},V=function(u){var k=u.detail,Y=u.message,sn=u.description,vn=u.onClose,on=u.className,R=b()(u,x),$=O(Y);N($,u);var X=function(){vn==null||vn(),J($)};return u.type==="warning"&&!u.icon&&(R.icon=(0,h.jsx)(C.Z,{style:{color:"#ff7d00"}})),k?z.ZP.open(r()({key:$,message:(0,h.jsx)(U,{message:Y,noticeKey:$}),description:(0,h.jsx)(tn,{noticeKey:$}),onClose:X,className:"yunti-notification ".concat(on)},R)):z.ZP.open(r()({key:$,message:(0,h.jsx)(U,{message:Y,noticeKey:$}),description:sn,onClose:X,className:"yunti-notification ".concat(on)},R))},gn=function(u){var k;if(((u==null||(k=u.errors)===null||k===void 0?void 0:k.length)||0)>0){u!=null&&u.errors;var Y=o()((u==null?void 0:u.errors)||[]),sn;try{for(Y.s();!(sn=Y.n()).done;){var vn=sn.value;V(r()(r()({detail:vn,description:vn.message},u),{},{type:"warning"}))}}catch(on){Y.e(on)}finally{Y.f()}}else V(r()(r()({},u),{},{type:"warning"}))},rn=r()(r()({},z.ZP),{},{success:function(u){return V(r()(r()({},u),{},{type:"success"}))},info:function(u){return V(r()(r()({},u),{},{type:"info"}))},warning:function(u){return V(r()(r()({},u),{},{type:"warning"}))},warn:function(u){return V(r()(r()({},u),{},{type:"warning"}))},error:function(u){return V(r()(r()({},u),{},{type:"error"}))},warnings:gn,warns:gn}),an=null},55300:function(In,q,n){n.d(q,{E:function(){return K}});var nn=n(53649),r=n.n(nn),w=n(86468),b=n(3772),A,K=(0,b.vJ)(A||(A=r()([`
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
`])),function(W){var o=W.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(W){var o=W.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(W){var o=W.theme;return o==null?void 0:o.colorPrimary},function(W){var o=W.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(W){var o=W.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(W){var o=W.theme,j=o||{},c=j.prefixCls;return w.ZP.config({prefixCls:c}),`
      .`.concat(c,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(c,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(In,q,n){n.d(q,{j:function(){return nn}});var nn=typeof window!="undefined"}}]);
