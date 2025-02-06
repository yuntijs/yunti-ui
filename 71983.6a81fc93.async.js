"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(Bn,k,n){n.d(k,{b:function(){return W}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(21153),z=n(75271),B=n(53649),a=n.n(B),C=n(47512),d,b=(0,C.kc)(function(f,p){var y=f.css,O=p.bordered,E=O===void 0?"dashed":O;return{custom:y(d||(d=a()([`
        border-style: `,` !important;
      `])),E)}},{hashPriority:"low"}),v=n(52676),t=["bordered","className"],W=function(p){var y=p.bordered,O=y===void 0?"dashed":y,E=p.className,j=A()(p,t),T=b({bordered:O}),h=T.styles,N=T.cx;return(0,v.jsx)(L.Z,o()(o()({},j),{},{className:N(h.custom,E)}))};W.ErrorBoundary=L.Z.ErrorBoundary;var F=null},5244:function(Bn,k,n){n.d(k,{g:function(){return d}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(23878),z=n(75271),B=n(55300),a=n(52676),C=["children"],d=function(t){var W=t.children,F=A()(t,C);return(0,a.jsxs)(L.Z,o()(o()({},F),{},{children:[(0,a.jsx)(B.E,{}),W]}))};d.useApp=L.Z.useApp;var b=null},52412:function(Bn,k,n){var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(53649),z=n.n(L),B=n(62579),a=n(51874),C=n(47512),d=n(75271),b=n(52676),v=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],t,W,F,f=(0,C.kc)(function(y){var O=y.css;return{container:O(t||(t=z()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:O(W||(W=z()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:O(F||(F=z()([`
      position: relative;
      flex: 1;
    `])))}}),p=(0,d.forwardRef)(function(y,O){var E=y.className,j=y.style,T=y.classNames,h=y.expand,N=h===void 0?!0:h,X=y.setExpand,P=y.bottomAddons,Z=y.topAddons,Y=y.onSizeChange,H=y.heights,cn=y.onSend,en=A()(y,v),_=f(),M=_.styles;return(0,b.jsx)(B.Z,{className:E,classNames:T,fullscreen:N,headerHeight:H==null?void 0:H.headerHeight,maxHeight:H==null?void 0:H.maxHeight,minHeight:H==null?void 0:H.minHeight,onSizeChange:Y,placement:"bottom",size:{height:H==null?void 0:H.inputHeight,width:"100%"},style:o()({zIndex:10},j),children:(0,b.jsxs)("section",{className:M.container,style:{minHeight:H==null?void 0:H.minHeight},children:[Z,(0,b.jsx)("div",{className:M.textareaContainer,children:(0,b.jsx)(a.Z,o()({className:M.textarea,onSend:function(){cn==null||cn(),X==null||X(!1)},ref:O,type:"pure"},en))}),P]})})});k.Z=(0,d.memo)(p)},59212:function(Bn,k,n){n.d(k,{z:function(){return nn}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(10581),z=n(93955),B=n(81262),a=n(9192),C=n(81134),d=n(75271),b=n(90142),v=n(53649),t=n.n(v),W=n(47512),F,f,p,y,O,E,j,T,h,N,X,P,Z,Y,H,cn,en,_,M=(0,W.kc)(function(g,J){var x=g.cx,G=g.css,un=g.token,En=g.isDarkMode,Cn=g.responsive,In=J.placement,Pn=J.type,Jn=J.title,Mn=J.primary,Fn=J.avatarSize,Wn=J.editing,$n=J.time,Zn=J.isLatest,vn=G(F||(F=t()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Mn?En?un.colorFill:un.colorBgElevated:En?un.colorFillSecondary:un.colorBgContainer,un.borderRadiusLG,un.motionEaseOut),Nn=G(f||(f=t()([`
      padding-block-start: `,`;
    `])),Jn?0:"6px"),Un=G(p||(p=t()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),un.motionEaseOut),te=Pn==="block"?vn:Nn,D=Wn&&G(y||(y=t()([`
        width: 100%;
      `])));return{actions:x(G(O||(O=t()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),In==="left"?"flex-start":"flex-end",In==="left"?"flex-end":"flex-start"),Wn&&G(E||(E=t()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:G(j||(j=t()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),Fn,Fn),avatarGroupContainer:G(T||(T=t()([`
        width: `,`px;
      `])),Fn),container:x(Pn==="pure"&&Un,G(h||(h=t()([`
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
        `])),Zn?"unset":"none",Zn?1:0,un.motionEaseOut,Cn.mobile,Pn==="pure"?"12px":"6px")),editingContainer:x(D,G(N||(N=t()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),un.colorBorderSecondary,un.colorBorder),Pn==="pure"&&G(X||(X=t()([`
            background: `,`;
            border-radius: `,`px;
          `])),un.colorFillQuaternary,un.borderRadius)),editingInput:G(P||(P=t()([`
        width: 100%;
      `]))),errorContainer:G(Z||(Z=t()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:G(Y||(Y=t()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),In==="right"?"-4px":"unset",In==="left"?"-4px":"unset",un.colorBgLayout,un.colorPrimary),message:x(te,G(H||(H=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),Cn.mobile)),messageContainer:x(D,G(cn||(cn=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),$n?-16:0,Cn.mobile)),messageContent:x(D,G(en||(en=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),Cn.mobile)),messageExtra:x("message-extra"),name:G(_||(_=t()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),un.colorTextDescription,In==="left"?"left":"right")}}),i=n(52676),K=(0,d.memo)(function(g){var J=g.actions,x=g.placement,G=g.type,un=g.editing,En=M({editing:un,placement:x,type:G}),Cn=En.styles;return(0,i.jsx)(b.D,{align:"flex-start",className:Cn.actions,role:"menubar",children:J})}),V=K,tn=n(99335),an=(0,d.memo)(function(g){var J=g.editing,x=g.onChange,G=g.onEditingChange,un=g.text,En=g.message,Cn=g.placement,In=g.messageExtra,Pn=g.renderMessage,Jn=g.type,Mn=g.primary,Fn=g.onDoubleClick,Wn=g.fontSize,$n=g.markdownProps,Zn=g.markdownClassname,vn=M({editing:J,placement:Cn,primary:Mn,type:Jn}),Nn=vn.cx,Un=vn.styles,te=(0,C.F)(),D=te.mobile,Tn=(0,i.jsx)(tn.i,{classNames:{input:Un.editingInput,markdown:Zn},editButtonSize:"small",editing:J,fontSize:Wn,fullFeaturedCodeBlock:!0,markdownProps:$n,onChange:x,onEditingChange:G,openModal:D?J:void 0,text:un,value:En?String(En).trim():""}),le=Pn?Pn(Tn):Tn;return(0,i.jsxs)(b.D,{className:Nn(Un.message,J&&Un.editingContainer),onDoubleClick:Fn,children:[le,In&&!J?(0,i.jsx)("div",{className:Un.messageExtra,children:In}):null]})}),fn=an,U=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest"],hn=32,nn=(0,d.memo)(function(g){var J=g.avatarAddon,x=g.onAvatarClick,G=g.avatarProps,un=g.actions,En=g.className,Cn=g.primary,In=g.loading,Pn=g.message,Jn=g.placement,Mn=Jn===void 0?"left":Jn,Fn=g.type,Wn=Fn===void 0?"block":Fn,$n=g.avatar,Zn=g.error,vn=g.showTitle,Nn=g.time,Un=g.editing,te=g.onChange,D=g.onEditingChange,Tn=g.messageExtra,le=g.renderMessage,xe=g.text,Ae=g.errorMessage,ye=g.onDoubleClick,Te=g.fontSize,he=g.markdownProps,ln=g.markdownClassname,m=g.isLatest,$=A()(g,U),R=(0,C.F)(),gn=R.mobile,bn=M({editing:Un,placement:Mn,primary:Cn,showTitle:vn,time:Nn,title:$n.title,type:Wn,isLatest:m}),An=bn.cx,rn=bn.styles;return(0,i.jsxs)(b.D,o()(o()({className:An(rn.container,En),direction:Mn==="left"?"horizontal":"horizontal-reverse",gap:gn?6:12},$),{},{children:[(0,i.jsx)(L.Z,o()(o()({},G),{},{addon:J,avatar:$n,loading:In,onClick:x,placement:Mn,size:gn?hn:void 0})),(0,i.jsxs)(b.D,{align:Mn==="left"?"flex-start":"flex-end",className:rn.messageContainer,children:[(0,i.jsx)(a.Z,{avatar:$n,placement:Mn,showTitle:vn,time:Nn}),(0,i.jsxs)(b.D,{align:Mn==="left"?"flex-start":"flex-end",className:rn.messageContent,direction:"vertical",gap:8,children:[Zn?(0,i.jsx)(B.Z,{error:Zn,message:Ae,placement:Mn}):(0,i.jsx)(fn,{editing:Un,fontSize:Te,markdownClassname:ln,markdownProps:he,message:Pn,messageExtra:Tn,onChange:te,onDoubleClick:ye,onEditingChange:D,placement:Mn,primary:Cn,renderMessage:le,text:xe,type:Wn}),(0,i.jsx)(V,{actions:un,editing:Un,placement:Mn,type:Wn})]})]}),gn&&Wn==="block"&&(0,i.jsx)(z.Z,{borderSpacing:hn})]}))})},13306:function(Bn,k,n){n.d(k,{U:function(){return X}});var q=n(26068),o=n.n(q),w=n(48305),A=n.n(w),L=n(67825),z=n.n(L),B=n(97157),a=n(86818),C=n(44923),d=n(71170),b=n(75271),v=n(84569),t=n.n(v),W=n(53649),F=n.n(W),f=n(47512),p,y,O,E,j,T=(0,f.kc)(function(P){var Z=P.css,Y=P.token,H=P.prefixCls;return{root:Z(p||(p=F()([`
      overflow: hidden;
    `]))),wrapper:Z(y||(y=F()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),Y.marginLG),content:Z(O||(O=F()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),Y.borderRadiusLG,Y.boxShadowSecondary),dragWrapper:Z(E||(E=F()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:Z(j||(j=F()([`
      cursor: move;
    `])))}}),h=n(52676),N=["title","classNames","defaultPosition","onPositionChange"],X=(0,b.memo)(function(P){var Z=P.title,Y=P.classNames,H=Y===void 0?{}:Y,cn=P.defaultPosition,en=P.onPositionChange,_=z()(P,N),M=T(),i=M.styles,K=M.cx,V=(0,b.useState)({left:0,top:0,bottom:0,right:0}),tn=A()(V,2),an=tn[0],fn=tn[1],U=(0,b.useRef)(null),hn=function(g,J){var x,G=window.document.documentElement,un=G.clientWidth,En=G.clientHeight,Cn=(x=U.current)===null||x===void 0?void 0:x.getBoundingClientRect();Cn&&fn({left:-Cn.left+J.x,right:un-(Cn.right-J.x),top:-Cn.top+J.y,bottom:En-(Cn.bottom-J.y)})};return(0,h.jsx)(a.Z,o()(o()({},_),{},{classNames:o()(o()({},H),{},{wrapper:K(i.wrapper,H.wrapper),content:K(i.content,H.content)}),destroyOnClose:!0,drawerRender:function(g){return(0,h.jsx)(t(),{bounds:an,defaultPosition:cn,handle:".".concat(i.dragHandle),nodeRef:U,onStart:function(x,G){return hn(x,G)},onStop:function(x,G){en==null||en({x:G.x,y:G.y})},children:(0,h.jsx)("div",{className:i.dragWrapper,ref:U,children:g})})},mask:!1,rootClassName:i.root,title:(0,h.jsxs)(C.Z,{align:"center",className:i.dragHandle,children:[(0,h.jsx)(C.Z,{flex:2,children:Z}),(0,h.jsx)(C.Z,{children:(0,h.jsx)(d.ZP,{className:i.dragHandle,icon:(0,h.jsx)(B.Z,{}),type:"text"})})]})}))})},5795:function(Bn,k,n){n.d(k,{d:function(){return f}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(86818),z=n(75271),B=n(53649),a=n.n(B),C=n(47512),d,b,v,t=(0,C.kc)(function(y,O){var E=y.css,j=y.prefixCls,T=O.closeIcon,h=O.closeIconPlacement,N=O.extra,X=E(d||(d=a()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),j,j,!(T===null||T===!1)&&E(b||(b=a()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),j));return{custom:E(v||(v=a()([`
        `,`
      `])),(!h||h==="right"||h==="auto"&&!N)&&X)}},{hashPriority:"low"}),W=n(52676),F=["className"],f=function(O){var E=O.className,j=A()(O,F),T=t(j),h=T.styles,N=T.cx;return(0,W.jsx)(L.Z,o()(o()({},j),{},{className:N(h.custom,E)}))},p=null},99512:function(Bn,k,n){n.d(k,{L:function(){return O}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(44923),z=n(5053),B=n(75271),a=n(53649),C=n.n(a),d=n(47512),b,v,t,W,F=(0,d.kc)(function(E,j){var T=E.css,h=E.token,N=j.divider,X=j.position;return{menuWrapper:T(b||(b=C()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),h.colorBgElevated,h.borderRadiusLG,h.boxShadowSecondary),menuExtra:T(v||(v=C()([`
        padding: 10px 16px 4px;
        `,`
      `])),N&&T(X==="top"?t||(t=C()([`
              border-bottom: 1px solid `,`;
            `])):W||(W=C()([`
              border-top: 1px solid `,`;
            `])),h.colorSplit))}}),f=n(52676),p=["menuExtra","dropdownRender"],y=function(j){var T=j.menuExtra,h=j.dropdownRender,N=A()(j,p),X=T||{},P=X.position,Z=P===void 0?"top":P,Y=X.divider,H=Y===void 0?!1:Y,cn=X.content,en=F({divider:H,position:Z}),_=en.styles,M=(0,B.useCallback)(function(i){var K=B.cloneElement(i,{style:{boxShadow:"none",border:"none"}});if(!cn)return h?(0,f.jsx)(L.Z,{className:_.menuWrapper,vertical:!0,children:h(K)}):i;var V=(0,f.jsx)(L.Z,{align:"center",className:_.menuExtra,children:cn});return(0,f.jsxs)(L.Z,{className:_.menuWrapper,vertical:!0,children:[Z==="top"&&V,K,Z==="bottom"&&V]})},[cn,h,Z,_.menuExtra,_.menuWrapper]);return(0,f.jsx)(z.Z,o()({dropdownRender:M},N))},O=y;O.Button=z.Z.Button},99335:function(Bn,k,n){n.d(k,{i:function(){return b}});var q=n(26068),o=n.n(q),w=n(48305),A=n.n(w),L=n(14252),z=n(85814),B=n(54285),a=n(75271),C=n(65720),d=n(52676),b=(0,a.memo)(function(v){var t=v.value,W=v.onChange,F=v.classNames,f=F===void 0?{}:F,p=v.onEditingChange,y=v.editing,O=v.openModal,E=v.onOpenChange,j=v.placeholder,T=v.showEditWhenEmpty,h=T===void 0?!1:T,N=v.styles,X=v.height,P=v.inputType,Z=v.editButtonSize,Y=v.text,H=v.fullFeaturedCodeBlock,cn=v.model,en=v.fontSize,_=v.markdownProps,M=(0,C.Z)(!1,{onChange:p,value:y}),i=A()(M,2),K=i[0],V=i[1],tn=(0,C.Z)(!1,{onChange:E,value:O}),an=A()(tn,2),fn=an[0],U=an[1],hn=X==="auto",nn=(0,d.jsx)(L.Z,{className:f==null?void 0:f.input,classNames:{textarea:f==null?void 0:f.textarea},defaultValue:t,editButtonSize:Z,height:X,onCancel:function(){return V(!1)},onConfirm:function(J){W==null||W(J),V(!1)},placeholder:j,style:N==null?void 0:N.input,text:Y,textareaClassname:f==null?void 0:f.input,type:P});return!t&&h?nn:(0,d.jsxs)(d.Fragment,{children:[!fn&&K?nn:(0,d.jsx)(z.Z,o()(o()({className:f==null?void 0:f.markdown,fontSize:en,fullFeaturedCodeBlock:H,style:o()({height:hn?"unset":X},N==null?void 0:N.markdown),variant:"chat"},_),{},{children:t||j||""})),fn&&(0,d.jsx)(B.Z,{editing:K,extra:cn==null?void 0:cn.extra,footer:cn==null?void 0:cn.footer,height:X,onChange:W,onEditingChange:V,onOpenChange:function(J){U(J),V(!1)},open:fn,placeholder:j,text:Y,value:t})]})})},14866:function(Bn,k,n){n.d(k,{w:function(){return a}});var q=n(48305),o=n.n(q),w=n(75271),A=function(d){return typeof d=="string"?document.querySelector("#".concat(d)):(d==null?void 0:d.current)||d},L=":not([disabled]):not([readonly])",z=["text","password","search","tel","url","number","email",""].map(function(C){return'input[type="'.concat(C,'"]').concat(L)}).join(", ")+", input:not([type])".concat(L,", textarea").concat(L),B=function(d){var b,v=A(d);if(v){var t=(b=v.querySelector)===null||b===void 0?void 0:b.call(v,z);if(t!=null&&t.focus)return t.focus(),!0}},a=function(d){var b=(0,w.useState)(!1),v=o()(b,2),t=v[0],W=v[1];w.useEffect(function(){if(!(t||!d)){var F=B(d);F&&W(!0)}},[d,t,W])}},20147:function(Bn,k,n){n.d(k,{MX:function(){return B},wK:function(){return z},wL:function(){return A.w}});var q=n(26068),o=n.n(q),w=n(75271),A=n(14866),L=n(52676),z=function(C){var d,b=C.autoFocus,v=b===void 0?!0:b,t=(0,w.useRef)(null);return(0,A.w)(v?t:void 0),(0,L.jsx)("div",{className:C.className,id:C.id,ref:t,style:(d=C.style)!==null&&d!==void 0?d:{display:C.className?void 0:"contents"},children:C.children})},B=function(C){return function(d){var b=function(W){return(0,L.jsx)(z,o()(o()({},C||{}),{},{children:(0,L.jsx)(d,o()({},W))}))},v=d.displayName||d.name||"Component";return b.displayName="withFormHelper(".concat(v,")"),b}}},33985:function(Bn,k,n){n.d(k,{h:function(){return en}});var q=n(26068),o=n.n(q),w=n(48305),A=n.n(w),L=n(67825),z=n.n(L),B=n(16713),a=n(81107),C=n(44923),d=n(33592),b=n(97601),v=n(68537),t=n(75271),W=n(2998),F=n(86590),f=n(4643),p=n(94729),y=n(53649),O=n.n(y),E=n(47512),j,T,h,N,X,P,Z=(0,E.kc)(function(_,M){var i=_.token,K=_.css,V=_.cx,tn=_.prefixCls,an="".concat(tn,"-json-viewer"),fn=M==="block",U=K(j||(j=O()([`
      background-color: `,`;

      &:hover {
        background-color: `,`;
      }
    `])),fn?i.colorFillTertiary:"transparent",fn?i.colorFillTertiary:i.colorFillQuaternary);return{container:V(an,M!=="pure"&&U,K(T||(T=O()([`
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
        `])),i.borderRadius,i.motionEaseOut)),content:K(h||(h=O()([`
        overflow: auto;
        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),M==="pure"?0:i.padding),header:K(N||(N=O()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),i.colorFillQuaternary),title:K(X||(X=O()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),i.margin),titleText:K(P||(P=O()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),i.fontSize,tn,i.colorTextDescription)}}),Y=n(52676),H=["type","fullFeatured","title","icon","className","collapseStringMode","collapsed","dark","displayArrayIndex","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],cn=p.C.Text,en=function(M){var i=M.type,K=i===void 0?"block":i,V=M.fullFeatured,tn=V===void 0?!1:V,an=M.title,fn=an===void 0?"json":an,U=M.icon,hn=M.className,nn=M.collapseStringMode,g=nn===void 0?"directly":nn,J=M.collapsed,x=J===void 0?2:J,G=M.dark,un=M.displayArrayIndex,En=un===void 0?!0:un,Cn=M.displaySize,In=Cn===void 0?"collapsed":Cn,Pn=M.ignoreLargeArray,Jn=Pn===void 0?!1:Pn,Mn=M.matchesURL,Fn=Mn===void 0?!0:Mn,Wn=M.src,$n=M.theme,Zn=$n===void 0?"default":$n,vn=M.style,Nn=z()(M,H),Un=(0,d.r)(),te=Un.isDarkMode,D=Z(tn?"block":K),Tn=D.styles,le=D.cx,xe=(0,t.useState)(!0),Ae=A()(xe,2),ye=Ae[0],Te=Ae[1],he=(0,t.useMemo)(function(){return(0,W.Pz)(Wn)},[Wn]),ln=(0,Y.jsx)(W.ZP,o()({collapseStringMode:g,collapsed:x,dark:G!=null?G:te,displayArrayIndex:En,displaySize:In,ignoreLargeArray:Jn,matchesURL:Fn,src:Wn,theme:Zn},Nn));return(0,Y.jsxs)(C.Z,{className:le(Tn.container,hn),style:vn,vertical:!0,children:[tn&&(0,Y.jsxs)(C.Z,{align:"center",className:Tn.header,justify:"space-between",children:[(0,Y.jsx)(B.Z,{icon:ye?b.Z:v.Z,onClick:function(){return Te(!ye)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),(0,Y.jsxs)(C.Z,{align:"center",className:Tn.title,flex:1,gap:2,children:[U,(0,Y.jsx)(C.Z,{className:Tn.titleText,flex:1,children:(0,Y.jsx)(cn,{ellipsis:!0,children:fn})})]}),(0,Y.jsx)(a.Z,{content:he,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,Y.jsx)(C.Z,{className:Tn.content,flex:1,style:ye?{}:{height:0,padding:0,overflow:"hidden"},children:ln})]})}},25969:function(Bn,k,n){n.d(k,{n:function(){return N}});var q=n(26068),o=n.n(q),w=n(48305),A=n.n(w),L=n(67825),z=n.n(L),B=n(60477),a=n(50999),C=n(41117),d=n(45798),b=n(3548),v=n(5312),t=n(75271),W=n(53649),F=n.n(W),f=n(47512),p,y,O,E,j=(0,f.kc)(function(X){var P=X.css,Z=X.token,Y="#222222";return{root:P(p||(p=F()([`
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
      `])),Y,Z.borderRadiusLG,Z.marginXXS,Z.paddingXS,Y,Z.borderRadiusLG,Z.borderRadiusLG,Z.borderRadius,Z.borderRadius,Y,Z.borderRadiusLG,Z.fontFamilyCode),searchBarIcon:P(y||(y=F()([`
        font-size: 16px;
      `]))),loaderText:P(O||(O=F()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),Z.fontFamilyCode),loaderIcon:P(E||(E=F()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),Z.marginSM,Z.marginSM)}},{hashPriority:"low"}),T=n(52676),h=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],N=function(P){var Z=P.className,Y=P.id,H=P.style,cn=P.height,en=P.onScroll,_=P.url,M=P.websocket,i=P.refreshInterval,K=P.onLoad,V=P.onError,tn=z()(P,h),an=j(),fn=an.cx,U=an.styles,hn=(0,t.useState)(0),nn=A()(hn,2),g=nn[0],J=nn[1],x=(0,t.useState)(!1),G=A()(x,2),un=G[0],En=G[1],Cn=(0,t.useState)(!1),In=A()(Cn,2),Pn=In[0],Jn=In[1],Mn=(0,t.useRef)(),Fn=(0,t.useRef)();(0,t.useEffect)(function(){return function(){clearTimeout(Mn.current),clearTimeout(Fn.current)}},[]),(0,t.useEffect)(function(){var vn;return _&&!M&&i&&(vn=setInterval(function(){J(function(Nn){return Nn+1})},i)),function(){clearInterval(vn)}},[i,_,M]);var Wn=(0,t.useMemo)(function(){return _&&(Mn.current=setTimeout(function(){En(!0),Mn.current=void 0},50),"".concat(_,"#").concat(g))},[_,g]),$n=(0,t.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Mn.current),En(!1),Jn(!0),Fn.current=setTimeout(function(){return Jn(!1)},100),K==null||K()},[K]),Zn=(0,t.useCallback)(function(vn){En(!1),clearTimeout(Mn.current),V==null||V(vn)},[V]);return(0,T.jsxs)("div",{className:fn(U.root,Z),id:Y,style:o()({height:cn},H),children:[(0,T.jsx)(a.Uu,{render:function(Nn){var Un=Nn.follow,te=Nn.onScroll;return(0,T.jsx)(a.A9,o()(o()({url:Wn,websocket:M},tn),{},{follow:Pn||Un,height:cn,iconFilterLines:(0,T.jsx)(B.Z,{className:U.searchBarIcon,icon:C.Z}),iconFindNext:(0,T.jsx)(B.Z,{className:U.searchBarIcon,icon:d.Z}),iconFindPrevious:(0,T.jsx)(B.Z,{className:U.searchBarIcon,icon:b.Z}),onError:Zn,onLoad:$n,onScroll:function(Tn){te(Tn),en==null||en(Tn)}}))},startFollowing:!0}),un&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:U.loaderText,children:"loading ..."}),(0,T.jsx)(B.Z,{className:U.loaderIcon,icon:v.Z,spin:!0})]})]})}},52625:function(Bn,k,n){n.d(k,{T:function(){return O}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(47512),z=n(75271),B=n(90142),a=n(36075),C=n.n(a),d=n(52676),b=(0,z.memo)(function(E){var j=Object.assign({},(C()(E),E));return(0,d.jsx)("svg",o()(o()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},j),{},{children:(0,d.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),v=(0,z.memo)(function(E){var j=Object.assign({},(C()(E),E));return(0,d.jsxs)("svg",o()(o()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},j),{},{children:[(0,d.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,d.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,d.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),t=(0,z.memo)(function(E){var j=Object.assign({},(C()(E),E));return(0,d.jsxs)("svg",o()(o()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},j),{},{children:[(0,d.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,d.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,d.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,d.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,d.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,d.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,d.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),W=n(53649),F=n.n(W),f,p=(0,L.kc)(function(E){var j=E.css;return{extraTitle:j(f||(f=F()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),y=["type","size","style","extra","className"],O=(0,z.memo)(function(E){var j=E.type,T=j===void 0?"img":j,h=E.size,N=h===void 0?32:h,X=E.style,P=E.extra,Z=E.className,Y=A()(E,y),H=(0,L.Fg)(),cn=p(),en=cn.styles,_;switch(T){case"text":{_=(0,d.jsx)(t,o()({className:Z,height:N,style:X,width:N*2.9375},Y));break}case"combine":{_=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,o()({height:N,style:X,width:N},Y)),(0,d.jsx)(t,{style:{height:N,marginLeft:Math.round(N/4),width:"auto"}})]});break}case"img":default:{_=(0,d.jsx)(v,o()({height:N,style:X,width:N},Y));break}}if(!P)return _;var M=Math.round(N/3*1.9);return(0,d.jsxs)(B.D,o()(o()({align:"center",className:Z,horizontal:!0,style:X},Y),{},{children:[_,(0,d.jsx)(b,{style:{color:H.colorFill,height:M,width:M}}),(0,d.jsx)("div",{className:en.extraTitle,style:{fontSize:M},children:P})]}))})},79334:function(Bn,k,n){n.d(k,{o:function(){return de}});var q=n(26068),o=n.n(q),w=n(82092),A=n.n(w),L=n(14837),z=n(64419),B=n(30924),a=n(6988),C=n(56875),d=n(44250),b=n(66108),v=n(36419),t=n(75271),W=n(28485),F=n(48305),f=n.n(F),p=n(71561),y=n(32199),O=(0,v.fA)("INSERT_MENTION_COMMAND"),E=(0,v.fA)("DELETE_MENTION_COMMAND"),j=(0,v.fA)("CLEAR_HIDE_MENU_TIMEOUT"),T=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,h=function(u){var l=u.onBlur,e=u.onFocus,r=(0,p.g)(),c=f()(r,1),S=c[0],I=(0,t.useRef)(null);return(0,t.useEffect)(function(){return(0,y.qV)(S.registerCommand(j,function(){return I.current&&(clearTimeout(I.current),I.current=null),!0},v.VN),S.registerCommand(v.Gq,function(on,sn){return I.current=setTimeout(function(){S.dispatchCommand(v.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),l&&l(),!0},v.VN),S.registerCommand(v.m$,function(){return e&&e(),!0},v.VN))},[S,l,e]),null},N=n(25298),X=n.n(N),P=n(17069),Z=n.n(P),Y=n(9504),H=n.n(Y),cn=n(38836),en=n.n(cn),_=n(21742),M=n.n(_),i=n(83136),K=n.n(i),V=function(s){M()(l,s);var u=K()(l);function l(){return X()(this,l),u.apply(this,arguments)}return Z()(l,[{key:"createDOM",value:function(r){var c=H()(en()(l.prototype),"createDOM",this).call(this,r);return c.classList.add("align-middle"),c}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(r){return new l(r.__text,r.__key)}},{key:"importJSON",value:function(r){var c=(0,v.MX)(r.text);return c.setFormat(r.format),c.setDetail(r.detail),c.setMode(r.mode),c.setStyle(r.style),c}}]),l}(v.R2);function tn(s){return new V(s)}var an=function(u){var l=u.editable,e=(0,p.g)(),r=f()(e,1),c=r[0];return(0,t.useEffect)(function(){c.setEditable(l)},[l,c]),null},fn=n(62657),U=n.n(fn),hn=n(60477),nn=n(44923),g=n(56995),J=n(69024),x=n(52676),G=(0,t.createContext)(null),un=(0,t.memo)(function(s){var u=s.children,l=s.value;return(0,x.jsx)(G.Provider,{value:l,children:u})}),En=function(){var u=(0,t.useContext)(G);return u==null?void 0:u.optionsMap},Cn=n(33803),In=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,Pn="\\(",Jn=function(u){return"(?:"+u.join("|")+")"},Mn=function(u,l){var e=u.length===0?"":"(?!"+u.join("|")+")";return e+"[^\\s"+l+"]"},Fn=function(u){return"(?:\\.[ |$]|\\s|["+u+"]|)"},Wn=75,$n=function(u,l){var e=(0,t.useRef)(null),r=(0,p.g)(),c=f()(r,1),S=c[0],I=(0,Cn.y)(u),on=f()(I,3),sn=on[0],dn=on[1],Q=on[2],Sn=(0,t.useCallback)(function(jn){var Kn=(0,v.dL)(),kn=Kn==null?void 0:Kn.getNodes();if(!sn&&(kn==null?void 0:kn.length)===1&&S.dispatchCommand(l,void 0),sn&&(0,v.iO)(Kn)){jn.preventDefault();var ce=(0,v.gI)(u);if((0,v.k$)(ce))return l&&S.dispatchCommand(l,void 0),ce.remove(),!0}return!1},[sn,u,l,S]),Rn=(0,t.useCallback)(function(jn){jn.stopPropagation(),Q(),dn(!0)},[dn,Q]);return(0,t.useEffect)(function(){var jn=e.current;return jn&&jn.addEventListener("click",Rn),function(){jn&&jn.removeEventListener("click",Rn)}},[Rn]),(0,t.useEffect)(function(){return(0,y.qV)(S.registerCommand(v.MK,Sn,v.KB),S.registerCommand(v.aR,Sn,v.KB))},[S,Q,Sn]),[e,sn]},Zn=function(){var u=useRef(null),l=useState(!1),e=_slicedToArray(l,2),r=e[0],c=e[1],S=useCallback(function(I){I.stopPropagation(),c(function(on){return!on})},[]);return useEffect(function(){var I=u.current;return I&&I.addEventListener("click",S),function(){I&&I.removeEventListener("click",S)}},[S]),[u,r,c]};function vn(s,u,l,e){return new RegExp((u?"(^|\\s|".concat(u,")("):"(^|\\s)(")+Jn(s)+"((?:"+Mn(s,l)+(e?Fn(l):"")+"){0,"+Wn+"}))$")}function Nn(s,u,l,e,r){var c=vn(u,l,e,r).exec(s);if(c!==null){var S=c[1],I=c[2],on=c[3];if(I.length>0)return{leadOffset:c.index+S.length,matchingString:on,replaceableString:I}}return null}var Un=function(u,l){var e=l.punctuation,r=l.preTriggerChars,c=l.allowSpaces,S=(0,t.useState)(null),I=f()(S,2),on=I[0],sn=I[1],dn=(0,t.useCallback)(function(Q){var Sn=Nn(Q,u,r,e,c);if(Sn){var Rn=Sn.replaceableString,jn=Sn.matchingString,Kn=Rn.lastIndexOf(jn),kn=Kn===-1?Rn:Rn.slice(0,Math.max(0,Kn))+Rn.slice(Math.max(0,Kn+jn.length));if(sn(kn||null),Sn.replaceableString)return Sn}else sn(null);return null},[r,c,e,u]);return{trigger:on,checkForMentionMatch:dn}},te=n(53649),D=n.n(te),Tn=n(47512),le,xe,Ae,ye=(0,Tn.kc)(function(s,u){var l=s.css,e=s.token,r=s.prefixCls,c=u.isSelected,S=u.isError,I=function(){return S?c?{background:e.colorErrorBgActive,border:e.colorErrorBorderHover,color:e.colorErrorTextActive}:{background:e.colorErrorBg,border:e.colorErrorBorder,color:e.colorErrorText}:c?{background:e.colorInfoBgHover,border:e.colorInfoBorder,color:e.colorInfoText}:{background:e.colorFillTertiary,border:"transparent",color:e.colorInfoText}},on=I(),sn=on.background,dn=on.border,Q=on.color;return{root:l(le||(le=D()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),e.fontFamilyCode,Q,sn,dn,e.borderRadius),text:l(xe||(xe=D()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),e.colorTextSecondary),error:l(Ae||(Ae=D()([`
        color: `,`;
      `])),e.colorErrorText)}}),Te=(0,t.memo)(function(s){var u=s.nodeKey,l=s.variable,e=En(),r=(0,p.g)(),c=f()(r,1),S=c[0],I=$n(u,E),on=f()(I,2),sn=on[0],dn=on[1],Q=e==null?void 0:e[l],Sn=ye({isSelected:dn,isError:!Q||!!Q.error}),Rn=Sn.styles;(0,t.useEffect)(function(){if(!S.hasNodes([he]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[S]);var jn=(0,x.jsx)(nn.Z,{className:Rn.root,ref:sn,children:(0,x.jsxs)(nn.Z,{align:"center",gap:2,children:[(!Q||Q.error)&&(0,x.jsx)(hn.Z,{className:Rn.error,icon:J.Z}),(Q==null?void 0:Q.icon)&&(0,x.jsx)(nn.Z,{children:Q.icon}),(0,x.jsx)(nn.Z,{className:Rn.text,gap:2,title:(Q==null?void 0:Q.label)||l,children:(0,x.jsx)("span",{children:(Q==null?void 0:Q.selectedLabel)||(Q==null?void 0:Q.label)||l})})]})});return Q!=null&&Q.error?(0,x.jsx)(g.Z,{title:Q==null?void 0:Q.error,children:jn}):jn}),he=function(s){M()(l,s);var u=K()(l);function l(e,r){var c;return X()(this,l),c=u.call(this,r),A()(U()(c),"__variable",void 0),c.__variable=e,c}return Z()(l,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var r=document.createElement("div");return r.style.display="inline-flex",r.style.alignItems="center",r.style.verticalAlign="middle",r}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,x.jsx)(Te,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var r=this.getLatest();return r.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(r){return new l(r.__variable,r.__key)}},{key:"importJSON",value:function(r){var c=ln(r.variable);return c}}]),l}(v.Ij);function ln(s){return new he(s)}function m(s){return s instanceof he}var $=(0,t.memo)(function(s){var u=s.onInsert,l=s.onDelete,e=(0,p.g)(),r=f()(e,1),c=r[0];return(0,t.useEffect)(function(){if(!c.hasNodes([he]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,y.qV)(c.registerCommand(O,function(S){c.dispatchCommand(j,null);var I=ln(S);return(0,v.od)([I]),u&&u(),!0},v.VN),c.registerCommand(E,function(){return l&&l(),!0},v.VN))},[c,u,l]),null});$.displayName="MentionNodePlugin";var R=(0,v.fA)("INSERT_MENTION_COMMAND"),gn=(0,v.fA)("DELETE_MENTION_COMMAND"),bn=(0,v.fA)("CLEAR_HIDE_MENU_TIMEOUT"),An=(0,v.fA)("UPDATE_MENTIONS_OPTIONS"),rn=function(u,l,e){if(u.isSimpleText())for(var r=u.getPreviousSibling(),c=u.getTextContent(),S=u,I;;){I=l(c);var on=I===null?"":c.slice(I.end);if(c=on,on===""){var sn=S.getNextSibling();if((0,v.Gg)(sn)){on=S.getTextContent()+sn.getTextContent();var dn=l(on);if(dn===null){sn.markDirty();return}else if(dn.start!==0)return}}else{var Q=l(on);if(Q!==null&&Q.start===0)return}if(I===null)return;if(!(I.start===0&&(0,v.Gg)(r)&&r.isTextEntity())){var Sn=void 0;if(I.start===0){var Rn=S.splitText(I.end),jn=f()(Rn,2);Sn=jn[0],S=jn[1]}else{var Kn=S.splitText(I.start,I.end),kn=f()(Kn,3);Sn=kn[1],S=kn[2]}var ce=e(Sn);if(Sn.replace(ce),S==null)return}}};function ee(s){var u=s.split(`
`);return JSON.stringify({root:{children:u.map(function(l){return{children:[{detail:0,format:0,mode:"normal",style:"",text:l,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var Vn=(0,t.memo)(function(s){var u=s.onInsert,l=(0,p.g)(),e=f()(l,1),r=e[0];(0,t.useEffect)(function(){if(!r.hasNodes([he]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[r]);var c=(0,t.useCallback)(function(on){u&&u();var sn=on.getTextContent().slice(2,-2);return(0,v.U2)(ln(sn))},[u]),S=(0,t.useCallback)(function(on){var sn=T.exec(on);if(sn===null)return null;var dn=sn.index,Q=dn+sn[0].length;return{end:Q,start:dn}},[]),I=(0,t.useCallback)(function(on){return T.lastIndex=0,rn(on,S,c)},[c,S]);return(0,t.useEffect)(function(){return T.lastIndex=0,(0,y.qV)(r.registerNodeTransform(V,I))},[]),null}),Ln=n(99934),Qn=n(64287),_n=n(30967),oe=n(83606),Hn=function(s){M()(l,s);var u=K()(l);function l(e){var r,c=e.label,S=e.value,I=e.data,on=e.icon,sn=e.extraElement,dn=e.keywords,Q=e.keyboardShortcut,Sn=e.disabled,Rn=e.onSelect,jn=e.children,Kn=e.isChild;return X()(this,l),r=u.call(this,S),A()(U()(r),"label",void 0),A()(U()(r),"value",void 0),A()(U()(r),"title",void 0),A()(U()(r),"key",void 0),A()(U()(r),"icon",void 0),A()(U()(r),"extraElement",void 0),A()(U()(r),"keywords",void 0),A()(U()(r),"keyboardShortcut",void 0),A()(U()(r),"onSelect",void 0),A()(U()(r),"disabled",void 0),A()(U()(r),"data",void 0),A()(U()(r),"children",void 0),A()(U()(r),"isChild",void 0),r.value=S,r.label=c,r.title=c,r.key=S,r.keywords=dn||[],r.icon=on,r.extraElement=sn,r.keyboardShortcut=Q,r.onSelect=Rn.bind(U()(r)),r.disabled=Sn,r.data=I,r.isChild=Kn!=null?Kn:!1,r.children=jn==null?void 0:jn.map(function(kn){return new l(o()(o()({},kn),{},{isChild:!0}))}),r}return Z()(l)}(Ln.n),re=function s(u,l){var e;return u.children=(e=u.children)===null||e===void 0?void 0:e.filter(function(r){if(!r.children)return l(r);var c=s(r,l);return l(r)||(c.children||[]).length>0}),u},On=function(u,l){var e=(0,p.g)(),r=f()(e,1),c=r[0],S=(0,t.useCallback)(function(on){var sn,dn=new RegExp((0,oe.Z)(l),"i");return dn.test(on.label)||((sn=on.keywords)===null||sn===void 0?void 0:sn.some(function(Q){return dn.test(Q)}))||!1},[l]),I=(0,t.useMemo)(function(){var on=function dn(Q){var Sn=o()(o()({},Q),{},{children:void 0,onSelect:function(){c.dispatchCommand(O,Q.value)}});return Q.children&&(Sn.children=Q.children.map(function(Rn){return dn(Rn)})),Sn},sn=u.map(function(dn){return new Hn(on(dn))});return l?sn.map(function(dn){return dn.children?re(dn,S):dn}).filter(function(dn){return S(dn)||(dn.children||[]).length>0}):sn},[u,l,c,S]);return{options:I}},se=n(78962),ue=n(94729),ae,Yn,ve,me,ie,qn,Gn,yn=(0,Tn.kc)(function(s,u){var l=s.css,e=s.token,r=s.prefixCls,c=u.isSelected,S=u.disabled,I=l(ae||(ae=D()([`
      background-color: `,`;
    `])),e.colorFillSecondary);return{anchor:l(Yn||(Yn=D()([`
        z-index: 9999;
      `]))),menuEmpty:l(ve||(ve=D()([`
        padding: `,`px;
      `])),e.padding),menuOverlay:l(me||(me=D()([`
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
      `])),e.marginXXS,e.paddingXXS,e.colorBgElevated,e.borderRadius,e.boxShadow,r),menuItem:l(ie||(ie=D()([`
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
      `])),S?"not-allowed":"pointer",S?"none":"all",e.paddingXS,e.borderRadius,S?e.colorTextDisabled:e.colorText,e.fontSize,c&&I,I),menuItemIcon:l(qn||(qn=D()([`
        color: `,`;
      `])),e.colorInfoText),menuItemLabel:l(Gn||(Gn=D()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),pn=ue.C.Text,mn=(0,t.memo)(function(s){var u=s.index,l=s.isSelected,e=s.onClick,r=s.onMouseEnter,c=s.option,S=s.queryString,I=s.showIcon,on=I===void 0?!0:I,sn=yn({isSelected:l,disabled:c.disabled}),dn=sn.styles,Q=c.label,Sn=(0,t.useMemo)(function(){var kn=Q,ce="",We="";if(S){var Fe=new RegExp((0,oe.Z)(S),"i"),Oe=Fe.exec(c.label);Oe&&(kn=Q.slice(0,Math.max(0,Oe.index)),ce=Oe[0],We=Q.slice(Math.max(0,Oe.index+Oe[0].length)))}return{before:kn,middle:ce,after:We}},[c.label,S,Q]),Rn=Sn.before,jn=Sn.middle,Kn=Sn.after;return(0,x.jsxs)(nn.Z,{align:"center",className:dn.menuItem,gap:4,onClick:function(){return e==null?void 0:e(u,c)},onMouseEnter:function(){return r==null?void 0:r(u,c)},ref:c.setRefElement,tabIndex:-1,children:[on&&(0,x.jsx)(nn.Z,{className:dn.menuItemIcon,children:c.icon}),(0,x.jsxs)("div",{className:dn.menuItemLabel,title:c.label,children:[Rn,(0,x.jsx)(pn,{mark:!0,children:jn}),Kn]}),(0,x.jsx)(nn.Z,{children:c.extraElement})]},c.key)});mn.displayName="MentionMenuItem";var zn=(0,t.memo)(function(s){var u=s.selectedIndex,l=s.options,e=s.onClick,r=s.onMouseEnter,c=s.queryString,S=yn({}),I=S.styles;return(0,x.jsxs)(x.Fragment,{children:[l.length===0&&(0,x.jsx)(se.Z,{className:I.menuEmpty,image:se.Z.PRESENTED_IMAGE_SIMPLE}),l.map(function(on,sn){return(0,x.jsx)(mn,{index:sn,isSelected:u===sn,onClick:e,onMouseEnter:r,option:on,queryString:c},on.key)})]})}),Dn=(0,t.memo)(function(s){var u=s.overlayClassName,l=s.triggers,e=s.options,r=e===void 0?[]:e,c=s.allowSpaces,S=c===void 0?!0:c,I=s.punctuation,on=I===void 0?In:I,sn=s.preTriggerChars,dn=sn===void 0?Pn:sn,Q=s.onSelect,Sn=yn({}),Rn=Sn.cx,jn=Sn.styles,Kn=(0,p.g)(),kn=f()(Kn,1),ce=kn[0],We=Un(l,{punctuation:on,preTriggerChars:dn,allowSpaces:S}),Fe=We.trigger,Oe=We.checkForMentionMatch,Xe=(0,t.useState)(null),Ve=f()(Xe,2),De=Ve[0],Je=Ve[1],Ye=On(r,De),Pe=Ye.options,Ge=(0,t.useCallback)(function(ne,Ce,$e,Ze){Q==null||Q(ne,Fe,De),ce.update(function(){Ce&&ne!==null&&ne!==void 0&&ne.key&&Ce.remove(),ne!=null&&ne.onSelect&&ne.onSelect(Ze),$e()})},[ce,Q,De,Fe]),ge=(0,t.useCallback)(function(ne){var Ce=ne.selectedIndex,$e=ne.selectOptionAndCleanUp;return(0,x.jsx)(b.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,x.jsx)(Qn.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Re,pe){var Me=pe.nativeEvent;Me.stopPropagation(),ce.dispatchCommand(j,{})},onSelect:function(Re,pe){$e(pe.node)},titleRender:function(Re){var pe;return(0,x.jsx)(mn,{isSelected:((pe=Pe[Ce])===null||pe===void 0?void 0:pe.value)===Re.value,option:Re,queryString:De,showIcon:!Re.isChild})},treeData:Pe})})},[Pe,ce,De]),Ke=(0,t.useCallback)(function(ne,Ce,$e){var Ze=Ce.selectedIndex,Re=Ce.selectOptionAndCleanUp,pe=Ce.setHighlightedIndex;return ne.current?_n.createPortal((0,x.jsx)("div",{className:Rn(jn.menuOverlay,u),role:"menu",children:Pe.some(function(Me){return(Me.children||[]).length>0})?ge(Ce):(0,x.jsx)(zn,{onClick:function(Ue,Qe){Qe.disabled||(pe(Ue),Re(Qe))},onMouseEnter:function(Ue,Qe){Qe.disabled||pe(Ue)},options:Pe,queryString:De,selectedIndex:Ze})}),ne.current):null},[Rn,Pe,u,De,ge,jn.menuOverlay]);return(0,x.jsx)(Ln.HQ,{anchorClassName:jn.anchor,menuRenderFn:Ke,onQueryChange:Je,onSelectOption:Ge,options:Pe,triggerFn:Oe})}),Xn,wn,Se,Ne,Le,be,Ee,je,Ie=32,ze=22,xn=function(u){return Ie+Math.max(u-1,0)*ze},fe=(0,Tn.kc)(function(s,u){var l=s.css,e=s.token,r=s.prefixCls,c=u.autoSize;return{wrapper:l(Xn||(Xn=D()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:l(wn||(wn=D()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Ie,e.fontSize,Ie,e.colorTextPlaceholder),root:l(Se||(Se=D()([`
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
      `])),e.colorBorder,e.borderRadius,e.colorText,e.fontSize,e.fontFamily,(c==null?void 0:c.minRows)&&l(Ne||(Ne=D()([`
          min-height: `,`px;
        `])),xn(c.minRows)),(c==null?void 0:c.maxRows)&&l(Le||(Le=D()([`
          max-height: `,`px;
        `])),xn(c.maxRows)),e.motionDurationMid,e.colorPrimaryBorder,ze),filled:l(be||(be=D()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),e.colorFillTertiary,e.colorFillSecondary,e.colorBgBase),borderless:l(Ee||(Ee=D()([`
        background: transparent;
        border: none;
      `]))),disabled:l(je||(je=D()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),e.colorTextDisabled,e.colorBgContainerDisabled)}}),de=function(u){var l=u.className,e=u.classNames,r=u.placeholder,c=u.style,S=u.value,I=u.defaultValue,on=u.readOnly,sn=on===void 0?!1:on,dn=u.disabled,Q=u.onChange,Sn=u.onBlur,Rn=u.onFocus,jn=u.variant,Kn=jn===void 0?"outlined":jn,kn=u.options,ce=kn===void 0?[]:kn,We=u.autoSize,Fe=u.triggers,Oe=Fe===void 0?["@"]:Fe,Xe=u.allowSpaces,Ve=u.punctuation,De=u.preTriggerChars,Je=u.onSelect,Ye=b.ZP.useConfig(),Pe=Ye.componentDisabled,Ge=fe({autoSize:We}),ge=Ge.styles,Ke=Ge.cx,ne=(0,t.useMemo)(function(){return dn!=null?dn:Pe},[Pe,dn]),Ce=(0,t.useMemo)(function(){return!sn&&!ne},[ne,sn]),$e=(0,t.useMemo)(function(){return{namespace:"mentions",nodes:[V,{replace:v.R2,with:function(Me){return new V(Me.__text)}},he],editorState:ee(S||I||""),onError:function(Me){throw Me}}},[]),Ze=function(Me){var Ue=Me.read(function(){return(0,v.Gv)().getTextContent()});Q==null||Q(Ue.replaceAll(`

`,`
`))},Re=(0,t.useMemo)(function(){var pe=function Me(Ue,Qe){return Ue.reduce(function(He,Be){if(He[Be.value]=Be,He[Be.value].icon||(He[Be.value].icon=Qe),Be.children&&Be.children.length>0){var we=Me(Be.children,Be.icon);Object.assign(He,we)}return He},{})};return pe(ce)},[ce]);return W.j?(0,x.jsx)(L.R,{initialConfig:o()(o()({},$e),{},{editable:Ce}),children:(0,x.jsx)(un,{value:{optionsMap:Re},children:(0,x.jsxs)("div",{className:Ke(ge.wrapper,e==null?void 0:e.wrapper),children:[(0,x.jsx)(d.B,{ErrorBoundary:B.g,contentEditable:(0,x.jsx)(z.f,{className:Ke(A()(A()(A()(A()({},ge.root,!0),ge.filled,Kn==="filled"),ge.borderless,Kn==="borderless"),ge.disabled,ne),l),style:c||{}}),placeholder:(0,x.jsx)("div",{className:ge.placeholder,children:r||"\u8F93\u5165 ".concat(Oe.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),Ce&&(0,x.jsx)(Dn,{allowSpaces:Xe,onSelect:Je,options:ce,overlayClassName:e==null?void 0:e.menuOverlay,preTriggerChars:De,punctuation:Ve,triggers:Oe}),(0,x.jsx)($,{}),(0,x.jsx)(Vn,{}),(0,x.jsx)(a.e,{}),(0,x.jsx)(C.$,{onChange:Ze}),(0,x.jsx)(h,{onBlur:Sn,onFocus:Rn}),(0,x.jsx)(an,{editable:Ce})]})})}):(0,x.jsxs)("div",{className:Ke(ge.wrapper,e==null?void 0:e.wrapper),children:[(0,x.jsx)("div",{className:Ke(A()(A()(A()(A()({},ge.root,!0),ge.filled,Kn==="filled"),ge.borderless,Kn==="borderless"),ge.disabled,ne),l),style:c||{}}),(0,x.jsx)("div",{className:ge.placeholder,children:r||"\u8F93\u5165 ".concat(Oe.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(Bn,k,n){n.d(k,{u:function(){return p}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(51697),z=n(75271),B="yunti-ui",a=n(53649),C=n.n(a),d=n(47512),b,v,t=(0,d.kc)(function(O,E){var j=O.css,T=O.prefixCls,h=E.borderd,N=h===void 0?!0:h,X=E.footer,P=X===null||Array.isArray(X)&&X.length===0,Z=j(b||(b=C()([`
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
    `])),T,T,P?0:"40px",T,P?0:"1px");return{custom:j(v||(v=C()([`
        `,`
      `])),N&&Z)}},{hashPriority:"low"}),W=n(52676),F=["className","borderd"],f=function(E){var j=E.className,T=E.borderd,h=T===void 0?!0:T,N=A()(E,F),X=t(o()({borderd:h},N)),P=X.styles,Z=X.cx;return(0,W.jsx)(L.Z,o()(o()({},N),{},{className:Z(P.custom,"".concat(B,"-modal"),j)}))},p=f;p.useModal=L.Z.useModal,p.destroyAll=L.Z.destroyAll,p.config=L.Z.config,p._InternalPanelDoNotUseOrYouWillBeFired=L.Z._InternalPanelDoNotUseOrYouWillBeFired,p.info=L.Z.info,p.success=L.Z.success,p.error=L.Z.error,p.warning=L.Z.warning,p.warn=L.Z.warn,p.confirm=L.Z.confirm;var y=null},81321:function(Bn,k,n){n.d(k,{ZM:function(){return ye},Hu:function(){return Z},Xq:function(){return he},rE:function(){return Te}});var q=n(26068),o=n.n(q),w=n(48305),A=n.n(w),L=n(67825),z=n.n(L),B=n(33592),a=n(75271),C=n(94456),d=n(60477),b=n(71170),v=n(32328),t=n(87449),W=n(28485),F=n(90228),f=n.n(F),p=n(87999),y=n.n(p),O=n(97524),E=n(50279),j=n(25298),T=n.n(j),h=n(17069),N=n.n(h),X=n(82092),P=n.n(X),Z=function(){function ln(){T()(this,ln),P()(this,"methodMap",void 0),P()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return N()(ln,[{key:"registerMethod",value:function($,R){this.methodMap[$]=R}},{key:"call",value:function($){for(var R,gn,bn=arguments.length,An=new Array(bn>1?bn-1:0),rn=1;rn<bn;rn++)An[rn-1]=arguments[rn];return(R=(gn=this.methodMap)[$])===null||R===void 0?void 0:R.call.apply(R,[gn].concat(An))}},{key:"updateMeta",value:function($){Object.assign(this.meta,$)}},{key:"getMeta",value:function(){return Object.freeze(o()({},this.meta))}}]),ln}(),Y="__base_monaco_editor_controller__",H=W.j&&window;H&&!H[Y]&&(H[Y]=new Z);var cn=H[Y],en=function(){var ln,m;return function(){var $=y()(f()().mark(function R(gn){var bn;return f()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!ln||!(0,E.Z)(m,gn))){rn.next=7;break}return bn=Object.keys(gn||{}).length>0,O.Z.config(bn?gn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),rn.next=5,O.Z.init();case 5:ln=rn.sent,m=gn;case 7:return rn.abrupt("return",ln);case 8:case"end":return rn.stop()}},R)}));return function(R){return $.apply(this,arguments)}}()}(),_=function(m){return m?O.Z.config(m):O.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),O.Z.init()};function M(ln){var m=Object.keys(ln||{}).length>0,$=m?ln:void 0;return cn.getMeta().singleton?en($):_($)}function i(ln){controller.updateMeta(ln)}var K=W.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",V=K==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",tn={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},an={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function fn(ln){var m=(0,a.useRef)();return(0,a.useEffect)(function(){m.current=ln},[ln]),m.current}function U(ln,m,$,R){if(R){var gn=ln.editor.getModel(ln.Uri.parse(R));if(gn)return gn}return ln.editor.createModel(m,$,R?ln.Uri.parse(R):void 0)}var hn=function(m,$){var R=$.editorDidMount,gn=$.editorWillMount,bn=$.theme,An=$.value,rn=$.path,ee=$.language,Vn=$.saveViewState,Ln=$.defaultValue,Qn=$.enhancers,_n=(0,a.useState)(!1),oe=A()(_n,2),Hn=oe[0],re=oe[1],On=(0,a.useState)(!1),se=A()(On,2),ue=se[0],ae=se[1],Yn=(0,a.useState)(!1),ve=A()(Yn,2),me=ve[0],ie=ve[1],qn=(0,a.useRef)(Ln),Gn=(0,a.useRef)(An),yn=(0,a.useRef)(ee||"text"),pn=(0,a.useRef)(rn),mn=fn(rn),zn=(0,a.useRef)($.requireConfig),Dn=(0,a.useRef)($.options),Xn=(0,a.useRef)(),wn=(0,a.useRef)(),Se=(0,a.useRef)(),Ne=(0,a.useRef)(m),Le=(0,a.useRef)(),be=(0,a.useRef)(),Ee=(0,a.useRef)(!1),je=(0,a.useRef)(new Map),Ie=(0,a.useRef)({});(0,a.useEffect)(function(){Ie.current.enhancers=Qn},[Qn]),(0,a.useEffect)(function(){Le.current=R},[R]),(0,a.useEffect)(function(){be.current=gn},[gn]),(0,a.useEffect)(function(){Gn.current=An},[An]),(0,a.useEffect)(function(){yn.current=ee},[ee]),(0,a.useEffect)(function(){qn.current=Ln},[Ln]),(0,a.useEffect)(function(){ie(!0),M(zn.current).then(function(xn){var fe;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Xn.current=xn;try{var de;(de=be.current)===null||de===void 0||de.call(be,xn)}catch(I){}if(Se.current){var s;if(Ne.current==="single"){var u,l,e=U(xn,(u=(l=Gn.current)!==null&&l!==void 0?l:qn.current)!==null&&u!==void 0?u:"",yn.current,pn.current);s=xn.editor.create(Se.current,o()(o()({automaticLayout:!0},tn),Dn.current)),s.setModel(e)}else{var r=xn.editor.createModel(Gn.current,yn.current),c=xn.editor.createModel(Gn.current,yn.current);s=xn.editor.createDiffEditor(Se.current,o()(o()({automaticLayout:!0},an),Dn.current)),s.setModel({original:r,modified:c})}wn.current=s,(fe=Ie.current.enhancers)===null||fe===void 0||fe.forEach(function(I){return I(xn,s)});try{var S;(S=Le.current)===null||S===void 0||S.call(Le,xn,s)}catch(I){}Ee.current||re(!0)}}).catch(function(xn){console.error("Monaco Editor Load Error!",xn)}).then(function(){Ee.current||ie(!1)})},[]),(0,a.useEffect)(function(){var xn;Hn&&((xn=Xn.current)===null||xn===void 0||xn.editor.setTheme(bn))},[Hn,bn]),(0,a.useEffect)(function(){if(Hn){var xn=m==="diff"?wn.current.getModifiedEditor():wn.current;xn==null||xn.onDidFocusEditorText(function(){Ee.current||ae(!0)}),xn==null||xn.onDidBlurEditorText(function(){Ee.current||ae(!1)})}},[Hn,m]),(0,a.useEffect)(function(){return function(){Ee.current=!0}},[]),(0,a.useEffect)(function(){var xn,fe,de;if(Hn&&!(m!=="diff"&&rn)){var s=m==="diff"?wn.current.getModifiedEditor():wn.current,u=(xn=An!=null?An:qn.current)!==null&&xn!==void 0?xn:"",l=(fe=Xn.current)===null||fe===void 0?void 0:fe.editor.EditorOption.readOnly;l&&s!==null&&s!==void 0&&(de=s.getOption)!==null&&de!==void 0&&de.call(s,l)?s==null||s.setValue(u):An!==(s==null?void 0:s.getValue())&&(s==null||s.executeEdits("",[{range:s==null?void 0:s.getModel().getFullModelRange(),text:u,forceMoveMarkers:!0}]),s==null||s.pushUndoStop())}},[Hn,rn,m,An]),(0,a.useEffect)(function(){var xn,fe;if(Hn&&m!=="diff"&&rn!==mn){var de=U(Xn.current,(xn=Gn.current)!==null&&xn!==void 0?xn:qn.current,yn.current,rn),s=wn.current;Gn.current!==null&&Gn.current!==void 0&&de.getValue()!==Gn.current&&de.setValue(Gn.current),de!==((fe=wn.current)===null||fe===void 0?void 0:fe.getModel())&&(Vn&&je.current.set(mn,s.saveViewState()),s.setModel(de),Vn&&s.restoreViewState(je.current.get(rn)))}},[Hn,An,rn,mn,m,Vn]);var ze=wn;return{isEditorReady:Hn,focused:ue,loading:me,containerRef:Se,monacoRef:Xn,editorRef:ze,valueRef:Gn}},nn=function(m){var $=(0,a.useState)(!1),R=A()($,2),gn=R[0],bn=R[1],An=function(){if(gn){bn(!1),m==null||m.updateOptions(o()(o()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!1}})),m==null||m.layout();return}bn(!0),m==null||m.updateOptions(o()(o()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!0}})),m==null||m.layout()};return{isFullScreen:gn,fullScreen:An}},g=n(53649),J=n.n(g),x=n(47512),G,un,En,Cn,In,Pn,Jn,Mn,Fn,Wn,$n,Zn=(0,x.kc)(function(ln,m){var $=ln.css,R=ln.token,gn=ln.prefixCls,bn=m.minimapEnabled,An=bn===void 0?!1:bn,rn=m.isFullScreen,ee=rn===void 0?!1:rn,Vn=m.diff,Ln=Vn===void 0?!1:Vn,Qn=m.variant,_n=Qn===void 0?"outlined":Qn,oe=(0,x.F4)(G||(G=J()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),Hn=function(){switch(_n){case"outlined":return R.colorBgBase;case"filled":return R.colorFillTertiary;default:return"transparent"}};return{base:$(un||(un=J()([`
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
      `])),Hn(),_n==="outlined"?R.colorBorder:"transparent",R.borderRadius,_n==="outlined"?R.colorPrimaryHover:"transparent",_n==="filled"&&$(En||(En=J()([`
            background-color: `,`;
          `])),R.colorFillSecondary),_n==="filled"&&$(Cn||(Cn=J()([`
            background-color: `,`;
          `])),R.colorBgBase),_n!=="borderless"&&$(In||(In=J()([`
            border-color: `,`;
          `])),R.colorPrimaryActive),ee&&$(Pn||(Pn=J()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!ee&&$(Jn||(Jn=J()([`
              background-color: transparent;
            `]))),R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius,R.borderRadius-1,R.borderRadius-1,R.colorErrorText,R.colorErrorBg),fullScreenBtn:$(Mn||(Mn=J()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),gn,R.colorTextSecondary,ee?$(Fn||(Fn=J()([`
                z-index: 9999;
                right: `,`px;
              `])),Ln?64:138):$(Wn||(Wn=J()([`
                right: `,`px;
              `])),An||Ln?64:20)),loading:$($n||($n=J()([`
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
      `])),R.fontSizeSM,R.colorTextTertiary,oe)}},{hashPriority:"low"}),vn=n(52676);function Nn(){}var Un=function(m){var $,R=m.onChange,gn=m.enableOutline,bn=m.width,An=m.height,rn=m.language,ee=m.supportFullScreen,Vn=(0,a.useRef)(R),Ln=hn("single",m),Qn=Ln.isEditorReady,_n=Ln.focused,oe=Ln.loading,Hn=Ln.containerRef,re=Ln.monacoRef,On=Ln.editorRef,se=Ln.valueRef,ue=(0,a.useRef)(),ae=nn(On==null?void 0:On.current),Yn=ae.isFullScreen,ve=ae.fullScreen,me=Zn({isFullScreen:Yn,minimapEnabled:($=m.options)===null||$===void 0||($=$.minimap)===null||$===void 0?void 0:$.enabled,variant:m.variant}),ie=me.cx,qn=me.styles,Gn=ie(qn.base,m.className,{"ve-focused":_n,"ve-outline":gn}),yn=(0,a.useMemo)(function(){return{width:bn,height:An}},[bn,An]);return(0,a.useEffect)(function(){Vn.current=R},[R]),(0,a.useEffect)(function(){if(Qn){var pn,mn=On.current;(pn=ue.current)===null||pn===void 0||pn.dispose(),ue.current=mn==null?void 0:mn.onDidChangeModelContent(function(zn){var Dn,Xn=mn==null||(Dn=mn.getModel())===null||Dn===void 0?void 0:Dn.getValue();if(se.current!==Xn){var wn;(wn=Vn.current)===null||wn===void 0||wn.call(Vn,Xn,zn)}})}},[On,Qn,ue,se]),(0,a.useEffect)(function(){return function(){var pn,mn,zn,Dn=On.current;(pn=ue.current)===null||pn===void 0||pn.dispose(),Dn==null||(mn=Dn.getModel())===null||mn===void 0||mn.dispose(),(zn=On.current)===null||zn===void 0||zn.dispose()}},[On]),(0,a.useEffect)(function(){var pn;if(Qn){var mn=(pn=On.current)===null||pn===void 0?void 0:pn.getModel();if(mn){var zn;(zn=re.current)===null||zn===void 0||zn.editor.setModelLanguage(mn,rn)}}},[On,Qn,rn,re]),(0,vn.jsxs)("div",{className:Gn,style:m.style,children:[oe&&(0,vn.jsx)("span",{className:ie(qn.loading,"loading"),children:V}),(0,vn.jsx)("div",{className:"react-monaco-editor-container",ref:Hn,style:yn,children:ee&&(0,vn.jsx)(b.ZP,{className:qn.fullScreenBtn,icon:(0,vn.jsx)(d.Z,{icon:Yn?v.Z:t.Z}),onClick:ve,size:"small",type:"text"})})]})},te=function(m){var $=m.enableOutline,R=m.width,gn=m.height,bn=m.language,An=m.onChange,rn=m.original,ee=m.supportFullScreen,Vn=(0,a.useRef)(An),Ln=hn("diff",m),Qn=Ln.isEditorReady,_n=Ln.focused,oe=Ln.loading,Hn=Ln.containerRef,re=Ln.monacoRef,On=Ln.editorRef,se=Ln.valueRef,ue=nn(),ae=ue.isFullScreen,Yn=ue.fullScreen,ve=Zn({isFullScreen:ae,diff:!0,variant:m.variant}),me=ve.cx,ie=ve.styles,qn=me(ie.base,m.className,{"ve-focused":_n,"ve-outline":$}),Gn=(0,a.useMemo)(function(){return{width:R,height:gn}},[R,gn]);return(0,a.useEffect)(function(){Vn.current=An},[An]),(0,a.useEffect)(function(){var yn;if(Qn){(yn=On.current.getModel())===null||yn===void 0||yn.original.setValue(rn!=null?rn:"");var pn=On.current.getModel()||{},mn=pn.modified;mn==null||mn.onDidChangeContent(function(zn){var Dn=mn.getValue();if(se.current!==Dn){var Xn;(Xn=Vn.current)===null||Xn===void 0||Xn.call(Vn,Dn,zn)}})}},[On,Qn,rn,se]),(0,a.useEffect)(function(){return function(){var yn,pn,mn;(yn=On.current)===null||yn===void 0||(yn=yn.getModel())===null||yn===void 0||(yn=yn.original)===null||yn===void 0||yn.dispose(),(pn=On.current)===null||pn===void 0||(pn=pn.getModel())===null||pn===void 0||(pn=pn.modified)===null||pn===void 0||pn.dispose(),(mn=On.current)===null||mn===void 0||mn.dispose()}},[On]),(0,a.useEffect)(function(){var yn,pn,mn;if(Qn){var zn=((yn=On.current)===null||yn===void 0?void 0:yn.getModel())||{},Dn=zn.original,Xn=zn.modified;(pn=re.current)===null||pn===void 0||pn.editor.setModelLanguage(Dn,bn),(mn=re.current)===null||mn===void 0||mn.editor.setModelLanguage(Xn,bn)}},[On,Qn,bn,re]),(0,vn.jsxs)("div",{className:qn,style:m.style,children:[oe&&(0,vn.jsx)("span",{className:me(ie.loading,"loading"),children:V}),(0,vn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Hn,style:Gn,children:ee&&(0,vn.jsx)(b.ZP,{className:ie.fullScreenBtn,icon:(0,vn.jsx)(d.Z,{icon:ae?v.Z:t.Z}),onClick:Yn,size:"small",type:"text"})})]})},D=Object.assign(te,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:tn,editorDidMount:Nn,editorWillMount:Nn,onChange:Nn,requireConfig:{}}}),Tn=Object.assign(Un,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:tn,editorDidMount:Nn,editorWillMount:Nn,onChange:Nn,requireConfig:{}},MonacoDiffEditor:D}),le=null,xe=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Ae=["inlineView","options"],ye=function(m){var $=m.type,R=$===void 0?"single":$,gn=m.editorDidMount,bn=m.readOnly,An=bn===void 0?!1:bn,rn=m.lineNumbers,ee=rn===void 0?"on":rn,Vn=m.wordWrap,Ln=Vn===void 0?"off":Vn,Qn=m.contextmenu,_n=Qn===void 0?!0:Qn,oe=m.theme,Hn=m.minimapEnabled,re=Hn===void 0?!1:Hn,On=m.version,se=On===void 0?"0.45.0":On,ue=m.requireConfig,ae=ue===void 0?{}:ue,Yn=m.options,ve=m.className,me=m.supportFullScreen,ie=z()(m,xe),qn=(0,a.useRef)(gn);(0,a.useEffect)(function(){qn.current=gn},[gn]);var Gn=(0,B.r)(),yn=Gn.isDarkMode,pn=(0,a.useMemo)(function(){return oe||(yn?"vs-dark":"vs")},[yn,oe]),mn=(0,a.useState)(),zn=A()(mn,2),Dn=zn[0],Xn=zn[1],wn=(0,a.useCallback)(function(be,Ee){var je;Xn(Ee),(je=qn.current)===null||je===void 0||je.call(qn,be,Ee)},[]),Se=(0,a.useMemo)(function(){var be=Object.assign({},Yn,{readOnly:An,lineNumbers:ee,wordWrap:Ln,contextmenu:_n,minimap:re===void 0?Yn==null?void 0:Yn.minimap:Object.assign({},Yn==null?void 0:Yn.minimap,{enabled:re})});return Dn==null||Dn.updateOptions(be),be},[Yn,An,ee,Ln,_n,re,Dn]),Ne=(0,C.nc)(),Le=(0,a.useMemo)(function(){return Object.assign({},ae,{paths:o()({vs:Ne({path:"min/vs",pkg:"monaco-editor",version:se})},ae.paths)})},[Ne,ae,se]);return R!=="diff"?(0,vn.jsx)(Tn,o()({className:ve,editorDidMount:wn,options:Se,requireConfig:Le,supportFullScreen:Dn&&me,theme:pn},ie)):(0,vn.jsx)(Tn.MonacoDiffEditor,o()({className:ve,editorDidMount:wn,options:Se,requireConfig:Le,supportFullScreen:Dn&&me,theme:pn},ie))},Te=function(m){return(0,vn.jsx)(ye,o()(o()({},m),{},{type:"single"}))},he=function(m){var $=m.inlineView,R=$===void 0?"off":$,gn=m.options,bn=z()(m,Ae);return(0,vn.jsx)(ye,o()(o()({options:Object.assign({useInlineViewWhenSpaceIsLimited:R==="on"||R==="auto",renderSideBySide:R==="off"||R==="auto"},gn)},bn),{},{type:"diff"}))}},25777:function(Bn,k,n){n.d(k,{W:function(){return cn}});var q=n(26068),o=n.n(q),w=n(15558),A=n.n(w),L=n(48305),z=n.n(L),B=n(67825),a=n.n(B),C=n(60477),d=n(83293),b=n(44923),v=n(46847),t=n(82338),W=n(2405),F=n(75271),f=n(53649),p=n.n(f),y=n(47512),O,E,j,T,h,N=function(_){switch(_){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},X=(0,y.kc)(function(en,_){var M=en.css,i=en.token,K=en.prefixCls,V=_.disabled,tn=_.size,an=N(tn),fn=an.cardWidth;return{option:M(O||(O=p()([`
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
      `])),i.colorBorder,i.borderRadius,V?"not-allowed":"pointer",i.padding,i.motionDurationFast,fn,V&&M(E||(E=p()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),i.colorBgContainerDisabled,K,i.colorTextDisabled,K,i.colorTextDisabled),!V&&M(j||(j=p()([`
          &:hover {
            border-color: `,`;
          }
        `])),i.colorPrimaryBorderHover),K),optionSelected:M(T||(T=p()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),i.colorPrimary,i.colorPrimaryActive),check:M(h||(h=p()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),i.marginXS,i.marginXS,i.colorPrimary)}}),P=n(52676),Z=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],Y=d.Z.Text,H=d.Z.Paragraph,cn=F.forwardRef(function(en,_){var M=en.defaultValue,i=en.value,K=en.onChange,V=en.multiple,tn=V===void 0?!1:V,an=en.disabled,fn=an===void 0?!1:an,U=en.options,hn=U===void 0?[]:U,nn=en.classNames,g=en.styles,J=en.size,x=J===void 0?"middle":J,G=en.optionRender,un=a()(en,Z),En=(0,F.useMemo)(function(){return hn.some(function(D){return!!D.img||!!D.icon})},[hn]),Cn=X({disabled:fn,size:x}),In=Cn.cx,Pn=Cn.styles,Jn=(0,F.useMemo)(function(){return N(x)},[x]),Mn=Jn.imgHeight,Fn=(0,F.useCallback)(function(D){return!tn||Array.isArray(D)?D:D===void 0?[]:[D]},[tn]),Wn=(0,W.C8)(Fn(M),{defaultValue:Fn(M),value:i,onChange:K}),$n=z()(Wn,2),Zn=$n[0],vn=$n[1],Nn=(0,F.useCallback)(function(D){if(!fn){if(!tn){vn(D);return}if(Zn.includes(D)){vn(Zn.filter(function(Tn){return Tn!==D}));return}vn([].concat(A()(Zn),[D]))}},[Zn,fn,tn,vn]),Un=(0,F.useCallback)(function(D){return tn?Zn.includes(D):Zn===D},[Zn,tn]),te=(0,F.useCallback)(function(D,Tn){var le=Un(D.value),xe=(0,P.jsxs)(b.Z,{align:En?"center":"flex-start",className:In(Pn.option,le&&Pn.optionSelected,nn==null?void 0:nn.card),gap:"small",onClick:function(){return Nn(D.value)},style:o()(o()({},g==null?void 0:g.card),D.style),vertical:!0,children:[En&&(0,P.jsx)(v.C,{className:nn==null?void 0:nn.icon,icon:D.icon,shape:"square",size:Mn,src:D.img,style:o()(o()({},g==null?void 0:g.icon),D.iconStyle)}),D.label&&le&&(0,P.jsx)(Y,{ellipsis:!0,strong:!0,children:D.label}),D.label&&!le&&(0,P.jsx)(Y,{ellipsis:!0,children:D.label}),!En&&D.description&&(0,P.jsx)(H,{ellipsis:{rows:2},type:"secondary",children:D.description}),le&&(0,P.jsx)(C.Z,{className:Pn.check,icon:t.Z})]},D.value);return G?G(xe,D,Tn):xe},[nn==null?void 0:nn.card,nn==null?void 0:nn.icon,In,Mn,En,Un,Nn,G,Pn.check,Pn.option,Pn.optionSelected,g==null?void 0:g.card,g==null?void 0:g.icon]);return(0,P.jsx)(b.Z,o()(o()({gap:"large",ref:_,wrap:!0},un),{},{children:hn.map(function(D,Tn){return te(D,Tn)})}))})},66269:function(Bn,k,n){n.d(k,{a:function(){return b}});var q=n(26068),o=n.n(q),w=n(48305),A=n.n(w),L=n(26582),z=n(68526),B=n(27896),a=n(96965),C=n(75271),d=n(52676),b=function(t){var W=t.value,F=t.defaultValue,f=t.min,p=f===void 0?0:f,y=t.max,O=t.step,E=t.gutter,j=E===void 0?16:E,T=t.sliderCol,h=T===void 0?{span:12}:T,N=t.inputCol,X=N===void 0?{span:5}:N,P=t.addonAfter,Z=t.addonBefore,Y=t.placeholder,H=t.onChange,cn=t.style,en=t.className,_=t.sliderProps,M=_===void 0?{}:_,i=t.inputProps,K=i===void 0?{}:i,V=(0,C.useState)(),tn=A()(V,2),an=tn[0],fn=tn[1],U=function(nn){Number.isNaN(nn)||(fn(nn),H==null||H(nn))};return(0,d.jsxs)(L.Z,{className:en,gutter:j,style:cn,children:[(0,d.jsx)(z.Z,o()(o()({},h),{},{children:(0,d.jsx)(B.Z,o()(o()({},M),{},{defaultValue:F,max:y,min:p,onChange:U,step:O,value:W!=null?W:an}))})),(0,d.jsx)(z.Z,o()(o()({},X),{},{children:(0,d.jsx)(a.Z,o()(o()({},K),{},{addonAfter:P,addonBefore:Z,defaultValue:F,max:y,min:p,onChange:U,placeholder:Y,step:O,value:W!=null?W:an}))}))]})}},56482:function(Bn,k,n){n.d(k,{N:function(){return F}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(97912),z=n(75271),B=n(79213),a=n(53649),C=n.n(a),d=n(47512),b,v=(0,d.kc)(function(f){var p=f.css,y=f.token,O=f.prefixCls;return{table:p(b||(b=C()([`
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
    `])),O,y.colorTextTertiary)}}),t=n(52676),W=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],F=function(p){var y=p.rootStyle,O=p.rootClassName,E=p.icon,j=p.title,T=p.variant,h=p.defaultActive,N=p.extra,X=p.className,P=A()(p,W),Z=v(),Y=Z.cx,H=Z.styles;return(0,t.jsx)(B.w,{className:O,style:y,icon:E,title:j,variant:T,defaultActive:h,extra:N,children:(0,t.jsx)(L.Z,o()({className:Y(H.table,X),pagination:!1,rowHoverable:!1,size:"small"},P))})}},11546:function(Bn,k,n){n.d(k,{NU:function(){return a.N},iA:function(){return b}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(56995),z=n(97912),B=n(75271),a=n(56482),C=n(52676),d=["columns"],b=function(W){var F=W.columns,f=A()(W,d),p=(0,B.useMemo)(function(){return F==null?void 0:F.map(function(y){if(y.render)return y;if(y.ellipsis&&y.ellipsis!==!0&&y.ellipsis.showTitle||y.ellipsis===!0){var O=y.ellipsis===!0?{}:y.ellipsis;return o()(o()({},y),{},{ellipsis:{showTitle:!1},render:function(j){return j||j===0?(0,C.jsx)(L.Z,o()(o()({},O),{},{placement:"topLeft",title:j,children:j})):"-"}})}return y.render||(y.render=function(E){return E!=null?E:"-"}),y})},[F]);return(0,C.jsx)(z.Z,o()(o()({},f),{},{columns:p}))};b.displayName="Table",b.SELECTION_COLUMN=z.Z.SELECTION_COLUMN,b.EXPAND_COLUMN=z.Z.EXPAND_COLUMN,b.SELECTION_ALL=z.Z.SELECTION_ALL,b.SELECTION_INVERT=z.Z.SELECTION_INVERT,b.SELECTION_NONE=z.Z.SELECTION_NONE,b.Column=z.Z.Column,b.ColumnGroup=z.Z.ColumnGroup,b.Summary=z.Z.Summary,b.Collapse=a.N;var v=null},8559:function(Bn,k,n){n.d(k,{G:function(){return F}});var q=n(53649),o=n.n(q),w=n(47512),A=n(75271),L=n(52676),z,B,a,C,d,b,v,t,W=(0,w.kc)(function(f,p){var y=f.css,O=(0,w.F4)(z||(z=o()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),E=(0,w.F4)(B||(B=o()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),j=(0,w.F4)(a||(a=o()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:y(C||(C=o()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),p.width||34,p.height||22,p.bgColor||"transparent"),line:y(d||(d=o()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),p.lineColor||"#000"),animate1:y(b||(b=o()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),O),animate2:y(v||(v=o()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),E),animate3:y(t||(t=o()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),j)}}),F=function(p){var y=p.height,O=p.width,E=p.lineColor,j=p.bgColor,T=W({height:y,width:O,lineColor:E,bgColor:j}),h=T.styles,N=T.cx;return(0,L.jsxs)("div",{className:h.box,children:[(0,L.jsx)("div",{className:N(h.line,h.animate1)}),(0,L.jsx)("div",{className:N(h.line,h.animate2)}),(0,L.jsx)("div",{className:N(h.line,h.animate3)}),(0,L.jsx)("div",{className:N(h.line,h.animate2)}),(0,L.jsx)("div",{className:N(h.line,h.animate1)}),(0,L.jsx)("div",{className:N(h.line,h.animate2)}),(0,L.jsx)("div",{className:N(h.line,h.animate1)})]})}},71983:function(Bn,k,n){n.r(k),n.d(k,{Affix:function(){return un.Z},Alert:function(){return F.b},Anchor:function(){return En.Z},AntdMentions:function(){return Cn.Z},App:function(){return f.g},AudioPlayer:function(){return Ie.Z},AutoComplete:function(){return In.Z},Avatar:function(){return Pn.C},BackTop:function(){return Jn.Z},Badge:function(){return Mn.Z},BaseMonacoEditor:function(){return C.ZM},Breadcrumb:function(){return p.Z},Button:function(){return Fn.ZP},ButtonGroup:function(){return q.h},Calendar:function(){return Wn.Z},Card:function(){return y.Z},Carousel:function(){return $n.Z},Cascader:function(){return Zn.Z},ChatInputActionBar:function(){return cn.Z},ChatInputArea:function(){return H.Z},ChatInputAreaInner:function(){return en.Z},ChatItem:function(){return K.z},ChatSendButton:function(){return _.Z},Checkbox:function(){return vn.Z},Col:function(){return Nn.Z},Collapse:function(){return Un.Z},CollapseGroup:function(){return o.w},CollapseTable:function(){return Z.NU},ColorPicker:function(){return te.Z},ConfigContext:function(){return w.E_},ConfigProvider:function(){return w.iV},CopyButton:function(){return Le.Z},DatePicker:function(){return D.default},Descriptions:function(){return O.w},Divider:function(){return E.i},DragPanel:function(){return A.U},Drawer:function(){return j.d},Dropdown:function(){return T.L},EditableMessage:function(){return V.i},Empty:function(){return Tn.Z},Flex:function(){return le.Z},FloatButton:function(){return xe.Z},Form:function(){return h.l},FormCollapseList:function(){return h.E},FormHelper:function(){return N.wK},FullFeaturedHighlighter:function(){return tn.EL},Grid:function(){return Ae.ZP},Highlighter:function(){return tn.oP},Image:function(){return ye.Z},Input:function(){return Te.Z},InputNumber:function(){return he.Z},JsonViewer:function(){return L.h},Layout:function(){return ln.Z},List:function(){return m.Z},LogViewer:function(){return B.n},Logo:function(){return z.T},Markdown:function(){return be.Z},Mentions:function(){return a.o},Menu:function(){return $.Z},MobileChatInputArea:function(){return M.Z},MobileChatSendButton:function(){return i.Z},Modal:function(){return X.u},MonacoController:function(){return C.Hu},MonacoDiffEditor:function(){return C.Xq},MonacoEditor:function(){return C.rE},NotificationGlobalStyle:function(){return P.EZ},Page:function(){return d.T},Pagination:function(){return gn.Z},Popconfirm:function(){return bn.Z},Popover:function(){return An.Z},ProCard:function(){return b.Q},Progress:function(){return rn.Z},QRCode:function(){return ee.Z},Radio:function(){return Vn.ZP},Rate:function(){return Ln.Z},Result:function(){return Qn.ZP},Row:function(){return _n.Z},Segmented:function(){return oe.Z},Select:function(){return Hn.default},SelectCard:function(){return v.W},Skeleton:function(){return re.Z},Slider:function(){return On.Z},SliderInput:function(){return t.a},Space:function(){return se.Z},SpeechSynthesisTTS:function(){return je.H},Spin:function(){return ue.Z},Statistic:function(){return ae.Z},Status:function(){return W.q},Steps:function(){return Yn.Z},Switch:function(){return ve.Z},SyntaxHighlighter:function(){return Ee.Z},Table:function(){return Z.iA},Tabs:function(){return me.Z},Tag:function(){return ie.Z},TimePicker:function(){return yn.Z},Timeline:function(){return Gn.Z},Tooltip:function(){return pn.Z},Tour:function(){return mn.Z},Transfer:function(){return zn.Z},Tree:function(){return Dn.Z},TreeSelect:function(){return Xn.Z},Typography:function(){return Y.Z},Upload:function(){return wn.Z},Watermark:function(){return Ne.Z},WaveformIcon:function(){return G.G},colorScales:function(){return an._},colors:function(){return an._},generateColorNeutralPalette:function(){return g},generateColorPalette:function(){return nn},message:function(){return R.ZP},neutralColorScales:function(){return J},notification:function(){return P.t6},theme:function(){return qn.Z},useAudioPlayer:function(){return ze.x},useAutoFocus:function(){return N.wL},useCdnFn:function(){return w.nc},useLink:function(){return w.nB},useResponsive:function(){return fe.F},useSpeechRecognition:function(){return xn.x},useSpeechSynthes:function(){return x.J},useTheme:function(){return de.Fg},useThemeMode:function(){return s.r},version:function(){return Se.Z},withFormHelper:function(){return N.MX}});var q=n(12644),o=n(79213),w=n(94456),A=n(13306),L=n(33985),z=n(52625),B=n(25969),a=n(79334),C=n(81321),d=n(40305),b=n(86346),v=n(25777),t=n(66269),W=n(46119),F=n(58479),f=n(5244),p=n(77789),y=n(39824),O=n(26345),E=n(82227),j=n(5795),T=n(99512),h=n(62719),N=n(20147),X=n(97527),P=n(40130),Z=n(11546),Y=n(94729),H=n(52412),cn=n(65059),en=n(51874),_=n(62999),M=n(82367),i=n(65677),K=n(59212),V=n(99335),tn=n(17853),an=n(15094),fn=n(82092),U=n.n(fn),hn=n(98644),nn=function(l){var e=l.type,r=l.scale,c=l.appearance,S=(0,hn.Z)(e),I=c==="dark";return U()(U()(U()(U()(U()(U()(U()(U()(U()(U()({},"color".concat(S,"Bg"),r[c][1]),"color".concat(S,"BgHover"),r[c][2]),"color".concat(S,"Border"),r[c][4]),"color".concat(S,"BorderHover"),r[c][I?5:3]),"color".concat(S,"Hover"),r[c][I?10:8]),"color".concat(S),r[c][9]),"color".concat(S,"Active"),r[c][I?7:10]),"color".concat(S,"TextHover"),r[c][I?10:8]),"color".concat(S,"Text"),r[c][9]),"color".concat(S,"TextActive"),r[c][I?7:10])},g=function(l){var e=l.scale,r=l.appearance;return{colorBgContainer:r==="dark"?e[r][1]:e[r][0],colorBgElevated:r==="dark"?e[r][2]:e[r][0],colorBgLayout:r==="dark"?e[r][0]:e[r][1],colorBgMask:e.lightA[8],colorBgSpotlight:e[r][5],colorBorder:e[r][4],colorBorderSecondary:e[r][3],colorFill:e["".concat(r,"A")][3],colorFillQuaternary:e["".concat(r,"A")][0],colorFillSecondary:e["".concat(r,"A")][2],colorFillTertiary:e["".concat(r,"A")][1],colorText:e[r][12],colorTextQuaternary:e[r][6],colorTextSecondary:e[r][10],colorTextTertiary:e[r][8]}},J={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},x=n(82846),G=n(8559),un=n(7904),En=n(58190),Cn=n(46621),In=n(85958),Pn=n(46847),Jn=n(66075),Mn=n(1088),Fn=n(71170),Wn=n(3957),$n=n(57512),Zn=n(52279),vn=n(43584),Nn=n(68526),Un=n(90026),te=n(64479),D=n(1409),Tn=n(78962),le=n(44923),xe=n(6697),Ae=n(82366),ye=n(69414),Te=n(99707),he=n(96965),ln=n(93702),m=n(78104),$=n(74032),R=n(57939),gn=n(4211),bn=n(45590),An=n(31997),rn=n(35357),ee=n(82830),Vn=n(20219),Ln=n(76177),Qn=n(46504),_n=n(26582),oe=n(13927),Hn=n(35092),re=n(99021),On=n(27896),se=n(43356),ue=n(49553),ae=n(43954),Yn=n(59470),ve=n(74798),me=n(60756),ie=n(53453),qn=n(22972),Gn=n(46141),yn=n(20907),pn=n(56995),mn=n(33858),zn=n(96208),Dn=n(64287),Xn=n(6036),wn=n(72023),Se=n(38208),Ne=n(55366),Le=n(81107),be=n(85814),Ee=n(74974),je=n(49724),Ie=n(83595),ze=n(61984),xn=n(8281),fe=n(81134),de=n(47512),s=n(33592)},40130:function(Bn,k,n){n.d(k,{EZ:function(){return p.E},t6:function(){return en}});var q=n(26068),o=n.n(q),w=n(67825),A=n.n(w),L=n(48305),z=n.n(L),B=n(335),a=n.n(B),C=n(30657),d=n(19728),b=n(22620),v=n(90026),t=n(83293),W=n(98943),F=n(75271),f=n(52676),p=n(55300),y=["detail","message","description","onClose","className"],O=v.Z.Panel,E=t.Z.Link,j=t.Z.Paragraph,T=t.Z.Text,h={},N=function(i,K){h[i]||(h[i]=[]),h[i].push(K)},X=function(i){delete h[i]},P=function M(i){var K="";if(typeof i=="string")K=i;else if(typeof i=="number")K=i.toString();else if(Array.isArray(i)){var V=a()(i),tn;try{for(V.s();!(tn=V.n()).done;){var an=tn.value;K+=M(an)}}catch(fn){V.e(fn)}finally{V.f()}}else(0,F.isValidElement)(i)&&(K+=M(i.props.children));return K},Z=function(i){var K,V=i.noticeKey,tn=i.message,an=((K=h[V])===null||K===void 0?void 0:K.length)||0;return(0,f.jsxs)(f.Fragment,{children:[tn,an>1&&" (".concat(an,")")]})},Y=function(i){var K=i.noticeKey,V=(0,F.useState)(),tn=z()(V,2),an=tn[0],fn=tn[1],U={},hn=a()(h[K]),nn;try{for(hn.s();!(nn=hn.n()).done;){var g=nn.value,J=P(g.description);g.descKey=J,U[J]=g}}catch(x){hn.e(x)}finally{hn.f()}return(0,f.jsx)(v.Z,{accordion:!0,activeKey:an,className:"yunti-notification-collapse",expandIcon:function(G){var un=G.isActive;return(0,f.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:un?(0,f.jsx)(E,{className:"yunti-notification-link",children:(0,f.jsx)(C.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,f.jsx)(d.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(G){fn(G)},children:Object.values(U).map(function(x){var G=x.descKey,un=x.description,En=x.detail;return(0,f.jsx)(O,{header:(0,f.jsx)(T,{ellipsis:{tooltip:!1},style:{width:250},children:un}),children:(0,f.jsx)(j,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(En,null,2)},type:"secondary",children:(0,f.jsx)("pre",{children:JSON.stringify(En,null,2)})})},G)})})},H=function(i){var K=i.detail,V=i.message,tn=i.description,an=i.onClose,fn=i.className,U=A()(i,y),hn=P(V);N(hn,i);var nn=function(){an==null||an(),X(hn)};return i.type==="warning"&&!i.icon&&(U.icon=(0,f.jsx)(b.Z,{style:{color:"#ff7d00"}})),K?W.ZP.open(o()({key:hn,message:(0,f.jsx)(Z,{message:V,noticeKey:hn}),description:(0,f.jsx)(Y,{noticeKey:hn}),onClose:nn,className:"yunti-notification ".concat(fn)},U)):W.ZP.open(o()({key:hn,message:(0,f.jsx)(Z,{message:V,noticeKey:hn}),description:tn,onClose:nn,className:"yunti-notification ".concat(fn)},U))},cn=function(i){var K;if(((i==null||(K=i.errors)===null||K===void 0?void 0:K.length)||0)>0){i!=null&&i.errors;var V=a()((i==null?void 0:i.errors)||[]),tn;try{for(V.s();!(tn=V.n()).done;){var an=tn.value;H(o()(o()({detail:an,description:an.message},i),{},{type:"warning"}))}}catch(fn){V.e(fn)}finally{V.f()}}else H(o()(o()({},i),{},{type:"warning"}))},en=o()(o()({},W.ZP),{},{success:function(i){return H(o()(o()({},i),{},{type:"success"}))},info:function(i){return H(o()(o()({},i),{},{type:"info"}))},warning:function(i){return H(o()(o()({},i),{},{type:"warning"}))},warn:function(i){return H(o()(o()({},i),{},{type:"warning"}))},error:function(i){return H(o()(o()({},i),{},{type:"error"}))},warnings:cn,warns:cn}),_=null},55300:function(Bn,k,n){n.d(k,{E:function(){return z}});var q=n(53649),o=n.n(q),w=n(98943),A=n(47512),L,z=(0,A.vJ)(L||(L=o()([`
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
`])),function(B){var a=B.theme;return"".concat(a==null?void 0:a.colorPrimary," !important")},function(B){var a=B.theme;return"".concat(a==null?void 0:a.colorPrimaryHover," !important")},function(B){var a=B.theme;return a==null?void 0:a.colorPrimary},function(B){var a=B.theme;return"".concat(a==null?void 0:a.colorPrimary," !important")},function(B){var a=B.theme;return"".concat(a==null?void 0:a.colorPrimaryHover," !important")},function(B){var a=B.theme,C=a||{},d=C.prefixCls;return w.ZP.config({prefixCls:d}),`
      .`.concat(d,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(d,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(Bn,k,n){n.d(k,{j:function(){return q}});var q=typeof window!="undefined"}}]);
