"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(Jn,tn,n){n.d(tn,{b:function(){return H}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(15183),k=n(75271),I=n(53649),o=n.n(I),T=n(3772),c,S=(0,T.kc)(function(g,p){var y=g.css,L=p.bordered,M=L===void 0?"dashed":L;return{custom:y(c||(c=o()([`
        border-style: `,` !important;
      `])),M)}},{hashPriority:"low"}),u=n(52676),t=["bordered","className"],H=function(p){var y=p.bordered,L=y===void 0?"dashed":y,M=p.className,A=E()(p,t),Z=S({bordered:L}),C=Z.styles,D=Z.cx;return(0,u.jsx)(j.Z,r()(r()({},A),{},{className:D(C.custom,M)}))};H.ErrorBoundary=j.Z.ErrorBoundary;var K=null},5244:function(Jn,tn,n){n.d(tn,{g:function(){return c}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(65220),k=n(75271),I=n(55300),o=n(52676),T=["children"],c=function(t){var H=t.children,K=E()(t,T);return(0,o.jsxs)(j.Z,r()(r()({},K),{},{children:[(0,o.jsx)(I.E,{}),H]}))};c.useApp=j.Z.useApp;var S=null},52412:function(Jn,tn,n){var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(53649),k=n.n(j),I=n(84694),o=n(34757),T=n(3772),c=n(75271),S=n(52676),u=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],t,H,K,g=(0,T.kc)(function(y){var L=y.css;return{container:L(t||(t=k()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:L(H||(H=k()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:L(K||(K=k()([`
      position: relative;
      flex: 1;
    `])))}}),p=(0,c.forwardRef)(function(y,L){var M=y.className,A=y.style,Z=y.classNames,C=y.expand,D=C===void 0?!0:C,w=y.setExpand,N=y.bottomAddons,U=y.topAddons,an=y.onSizeChange,X=y.heights,hn=y.onSend,un=E()(y,u),dn=g(),$=dn.styles;return(0,S.jsx)(I.Z,{className:M,classNames:Z,fullscreen:D,headerHeight:X==null?void 0:X.headerHeight,maxHeight:X==null?void 0:X.maxHeight,minHeight:X==null?void 0:X.minHeight,onSizeChange:an,placement:"bottom",size:{height:X==null?void 0:X.inputHeight,width:"100%"},style:r()({zIndex:10},A),children:(0,S.jsxs)("section",{className:$.container,style:{minHeight:X==null?void 0:X.minHeight},children:[U,(0,S.jsx)("div",{className:$.textareaContainer,children:(0,S.jsx)(o.Z,r()({className:$.textarea,onSend:function(){hn==null||hn(),w==null||w(!1)},ref:L,type:"pure"},un))}),N]})})});tn.Z=(0,c.memo)(p)},59212:function(Jn,tn,n){n.d(tn,{z:function(){return R}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(74923),k=n(7136),I=n(88205),o=n(90510),T=n(46092),c=n(75271),S=n(90142),u=n(53649),t=n.n(u),H=n(3772),K,g,p,y,L,M,A,Z,C,D,w,N,U,an,X,hn,un,dn,$=(0,H.kc)(function(d,O){var f=d.cx,F=d.css,ln=d.token,pn=d.isDarkMode,gn=d.responsive,Wn=O.placement,Bn=O.type,kn=O.title,Rn=O.primary,se=O.avatarSize,wn=O.editing,ge=O.time,_n=O.isLatest,Cn=F(K||(K=t()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Rn?pn?ln.colorFill:ln.colorBgElevated:pn?ln.colorFillSecondary:ln.colorBgContainer,ln.borderRadiusLG,ln.motionEaseOut),$n=F(g||(g=t()([`
      padding-block-start: `,`;
    `])),kn?0:"6px"),ue=F(p||(p=t()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),ln.motionEaseOut),Ee=Bn==="block"?Cn:$n,W=wn&&F(y||(y=t()([`
        width: 100%;
      `])));return{actions:f(F(L||(L=t()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),Wn==="left"?"flex-start":"flex-end",Wn==="left"?"flex-end":"flex-start"),wn&&F(M||(M=t()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:F(A||(A=t()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),se,se),avatarGroupContainer:F(Z||(Z=t()([`
        width: `,`px;
      `])),se),container:f(Bn==="pure"&&ue,F(C||(C=t()([`
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
        `])),_n?"unset":"none",_n?1:0,ln.motionEaseOut,gn.mobile,Bn==="pure"?"12px":"6px")),editingContainer:f(W,F(D||(D=t()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),ln.colorBorderSecondary,ln.colorBorder),Bn==="pure"&&F(w||(w=t()([`
            background: `,`;
            border-radius: `,`px;
          `])),ln.colorFillQuaternary,ln.borderRadius)),editingInput:F(N||(N=t()([`
        width: 100%;
      `]))),errorContainer:F(U||(U=t()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:F(an||(an=t()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),Wn==="right"?"-4px":"unset",Wn==="left"?"-4px":"unset",ln.colorBgLayout,ln.colorPrimary),message:f(Ee,F(X||(X=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),gn.mobile)),messageContainer:f(W,F(hn||(hn=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),ge?-16:0,gn.mobile)),messageContent:f(W,F(un||(un=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),gn.mobile)),messageExtra:f("message-extra"),name:F(dn||(dn=t()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),ln.colorTextDescription,Wn==="left"?"left":"right")}}),l=n(52676),b=(0,c.memo)(function(d){var O=d.actions,f=d.placement,F=d.type,ln=d.editing,pn=$({editing:ln,placement:f,type:F}),gn=pn.styles;return(0,l.jsx)(S.D,{align:"flex-start",className:gn.actions,role:"menubar",children:O})}),Y=b,cn=n(99335),vn=(0,c.memo)(function(d){var O=d.editing,f=d.onChange,F=d.onEditingChange,ln=d.text,pn=d.message,gn=d.placement,Wn=d.messageExtra,Bn=d.renderMessage,kn=d.type,Rn=d.primary,se=d.onDoubleClick,wn=d.fontSize,ge=d.markdownProps,_n=d.markdownClassname,Cn=$({editing:O,placement:gn,primary:Rn,type:kn}),$n=Cn.cx,ue=Cn.styles,Ee=(0,T.F)(),W=Ee.mobile,oe=(0,l.jsx)(cn.i,{classNames:{input:ue.editingInput,markdown:_n},editButtonSize:"small",editing:O,fontSize:wn,fullFeaturedCodeBlock:!0,markdownProps:ge,onChange:f,onEditingChange:F,openModal:W?O:void 0,text:ln,value:pn?String(pn).trim():""}),Ce=Bn?Bn(oe):oe;return(0,l.jsxs)(S.D,{className:$n(ue.message,O&&ue.editingContainer),onDoubleClick:se,children:[Ce,Wn&&!O?(0,l.jsx)("div",{className:ue.messageExtra,children:Wn}):null]})}),q=vn,P=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","affixation","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest"],G=32,R=(0,c.memo)(function(d){var O=d.avatarAddon,f=d.onAvatarClick,F=d.avatarProps,ln=d.actions,pn=d.className,gn=d.primary,Wn=d.loading,Bn=d.message,kn=d.placement,Rn=kn===void 0?"left":kn,se=d.type,wn=se===void 0?"block":se,ge=d.avatar,_n=d.error,Cn=d.showTitle,$n=d.time,ue=d.editing,Ee=d.onChange,W=d.onEditingChange,oe=d.messageExtra,Ce=d.affixation,Oe=d.renderMessage,Te=d.text,Ne=d.errorMessage,Ze=d.onDoubleClick,je=d.fontSize,xn=d.markdownProps,v=d.markdownClassname,Q=d.isLatest,B=E()(d,P),J=(0,T.F)(),Sn=J.mobile,Nn=$({editing:ue,placement:Rn,primary:gn,showTitle:Cn,time:$n,title:ge.title,type:wn,isLatest:Q}),mn=Nn.cx,qn=Nn.styles;return(0,l.jsxs)(S.D,r()(r()({className:mn(qn.container,pn),direction:Rn==="left"?"horizontal":"horizontal-reverse",gap:Sn?6:12},B),{},{children:[(0,l.jsx)(j.Z,r()(r()({},F),{},{addon:O,avatar:ge,loading:Wn,onClick:f,placement:Rn,size:Sn?G:void 0})),(0,l.jsxs)(S.D,{align:Rn==="left"?"flex-start":"flex-end",className:qn.messageContainer,children:[(0,l.jsx)(o.Z,{avatar:ge,placement:Rn,showTitle:Cn,time:$n}),(0,l.jsxs)(S.D,{align:Rn==="left"?"flex-start":"flex-end",className:qn.messageContent,direction:"vertical",gap:8,children:[_n?(0,l.jsx)(I.Z,{error:_n,message:Ne,placement:Rn}):(0,l.jsx)(q,{editing:ue,fontSize:je,markdownClassname:v,markdownProps:xn,message:Bn,messageExtra:oe,onChange:Ee,onDoubleClick:Ze,onEditingChange:W,placement:Rn,primary:gn,renderMessage:Oe,text:Te,type:wn}),Ce?(0,l.jsx)("div",{className:"affixation",children:Ce}):null,(0,l.jsx)(Y,{actions:ln,editing:ue,placement:Rn,type:wn})]})]}),Sn&&wn==="block"&&(0,l.jsx)(k.Z,{borderSpacing:G})]}))})},99033:function(Jn,tn,n){n.d(tn,{L:function(){return vn}});var rn=n(15558),r=n.n(rn),_=n(26068),E=n.n(_),j=n(67825),k=n.n(j),I=n(27569),o=n(75271),T=n(48305),c=n.n(T),S=n(53649),u=n.n(S),t=n(27046),H=n(3772),K=n(1216),g=n(97601),p=n(68537),y=n(90142),L=n(52676),M,A,Z=(0,H.kc)(function(q){var P=q.css,G=q.token,R=q.isDarkMode;return{container:P(M||(M=u()([`
    padding-block: 12px;
    color: `,`;
  `])),G.colorTextSecondary),titlebox:P(A||(A=u()([`
    cursor: pointer;

    min-width: 140px;
    max-width: 230px;
    padding: 8px 12px;

    font-size: 12px;
    color: `,`;

    background: `,`;
    border-radius: 8px;
  `])),G.colorText,R?G.colorFillTertiary:"#f3f5fc")}}),C={fontSize:13,lineHeight:1.625,headerMultiple:.2,marginMultiple:.6},D=(0,o.memo)(function(q){var P=q.children,G=q.second,R=q.done,d=Z(),O=d.styles,f=d.theme,F=(0,o.useState)(!0),ln=c()(F,2),pn=ln[0],gn=ln[1];return(0,L.jsxs)(y.D,{className:O.container,children:[(0,L.jsxs)(y.D,{className:O.titlebox,distribution:"space-between",flex:1,horizontal:!0,onClick:function(){gn(!pn)},children:[(0,L.jsxs)(y.D,{gap:8,horizontal:!0,children:[(0,L.jsx)(t.Z,{color:f.purple,icon:K.Z}),R?"\u5DF2\u6DF1\u5EA6\u601D\u8003".concat(G?"\uFF08\u7528\u65F6 "+G+" s\uFF09":""," "):"\u601D\u8003\u4E2D..."]}),(0,L.jsx)(t.Z,{icon:pn?g.Z:p.Z})]}),pn&&(0,L.jsx)(I.Z,E()(E()({},C),{},{children:P}))]})}),w=D,N=n(25709),U=function(){return function(P){(0,N.Vn)(P,"element",function(G,R,d){if(G.type==="element"&&G.tagName==="p"){var O=G.children||[],f=O.findIndex(function(gn){return gn.type==="raw"&&gn.value==="<think>"}),F=O.findIndex(function(gn){return gn.type==="raw"&&gn.value==="</think>"});if(f!==-1&&F!==-1&&F>f){var ln=O.slice(f+1,F),pn={children:ln,properties:{},tagName:"think",type:"element"};return d.children.splice(R,1,pn),R}}})}},an=U,X=n(49827),hn=n(34505),un=function(){return function(P){(0,N.Vn)(P,"html",function(G,R,d){if(G.value==="<think>"){for(var O=R,f=O+1,F=!1;f<d.children.length;){var ln=d.children[f];if(ln.type==="html"&&ln.value==="</think>"){F=!0;break}f++}var pn=F?f-O+1:d.children.length-O,gn=d.children.slice(O+1,F?f:void 0),Wn=gn.map(function(kn){return kn.type==="paragraph"?kn.children.map(function(Rn){return Rn.value}).join(""):(0,X.x)(kn)}).join(`

`).trim(),Bn={data:{hChildren:[{type:"text",value:Wn||" "}],hName:"think"},position:G.position,type:"thinkBlock"};return d.children.splice(O,pn,Bn),[hn.AM,O+1]}})}},dn={Component:w,rehypePlugin:an,remarkPlugins:un,tag:"think"},$=dn,l=[$],b=function(P){var G=new RegExp("([^\\n])\\s*<think>","g"),R=new RegExp("<think>\\s*([^\\n])","g"),d=new RegExp("([^\\n])\\s*<\\/think>","g"),O=new RegExp("<\\/think>\\s*([^\\n])","g"),f=new RegExp("\\n{3,}","g");return(P||"").replaceAll(G,`$1

<think>`).replaceAll(R,`<think>

$1`).replaceAll(d,`$1

</think>`).replaceAll(O,`</think>

$1`).replaceAll(f,`

`)},Y=["components","remarkPlugins","customComponentProps","children"],cn=l.map(function(q){return q.remarkPlugins}),vn=function(P){var G=P.components,R=G===void 0?{}:G,d=P.remarkPlugins,O=d===void 0?[]:d,f=P.customComponentProps,F=P.children,ln=k()(P,Y),pn=(0,o.useMemo)(function(){var Wn=Object.fromEntries(l.map(function(Bn){return[Bn.tag,function(kn){return(0,L.jsx)(Bn.Component,E()(E()({},kn),f==null?void 0:f[Bn.tag]))}]}));return E()(E()({},Wn),R)},[R,f]),gn=(0,o.useMemo)(function(){return[].concat(r()(cn),r()(O))},[O]);return(0,L.jsx)(I.Z,E()(E()({components:pn,remarkPlugins:gn},ln),{},{children:b(F)}))}},6381:function(Jn,tn,n){n.d(tn,{p:function(){return l}});var rn=n(26068),r=n.n(rn),_=n(48305),E=n.n(_),j=n(67825),k=n.n(j),I=n(75271),o=n(90142),T=n(90858),c=typeof window!="undefined"&&"navigator"in window&&/(mac|iphone|ipod|ipad)/i.test(navigator.platform),S=n(53649),u=n.n(S),t=n(3772),H=n(69708),K,g,p,y,L,M=(0,t.kc)(function(b,Y){var cn=b.cx,vn=b.css,q=b.token,P=Y.variant,G=Y.fontSize,R=(0,H.Z)(G)?"".concat(G,"px"):G,d=vn(K||(K=u()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border: 1px solid `,`;
      border-radius: `,`px;
    `])),P==="block"?q.colorFillTertiary:"transparent",P==="block"?"transparent":q.colorBorderSecondary,q.borderRadius);return{container:cn(P!=="pure"&&d,vn(g||(g=u()([`
          position: relative;
          overflow: hidden auto;
          width: 100%;
        `])))),editor:vn(p||(p=u()([`
        position: relative;
        width: 100%;
        height: fit-content;

        * {
          font-family: `,` !important;
          font-size: `,` !important;
          line-height: 1.5 !important;
          word-break: break-all !important;
          word-wrap: break-word !important;
          white-space: pre-wrap !important;
        }
      `])),q.fontFamilyCode,R),highlight:vn(y||(y=u()([`
        pointer-events: none;

        pre,
        code {
          overflow: hidden;
        }
      `]))),textarea:vn(L||(L=u()([`
        resize: none;

        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;

        overflow: hidden;

        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 0;

        color: transparent !important;
        text-align: start;

        background: transparent;
        border: none;
        outline: none;
        caret-color: `,`;

        &::placeholder {
          color: `,`;
        }

        &:focus {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
      `])),q.colorText,q.colorTextQuaternary)}}),A=n(52676),Z=["autoFocus","disabled","form","classNames","styles","ignoreTabKey","insertSpaces","maxLength","minLength","onBlur","onClick","onFocus","onKeyDown","onKeyUp","onValueChange","placeholder","readOnly","required","style","className","tabSize","textareaId","value","language","fontSize","variant"],C=89,D=90,w=77,N=57,U=219,an=222,X=192,hn=100,un=3e3,dn=typeof window!="undefined"&&"navigator"in window&&/win/i.test(navigator.platform),$=function(Y,cn){return Y.slice(0,Math.max(0,cn)).split(`
`)},l=(0,I.forwardRef)(function(b,Y){var cn=b.autoFocus,vn=b.disabled,q=b.form,P=b.classNames,G=P===void 0?{}:P,R=b.styles,d=R===void 0?{}:R,O=b.ignoreTabKey,f=O===void 0?!1:O,F=b.insertSpaces,ln=F===void 0?!0:F,pn=b.maxLength,gn=b.minLength,Wn=b.onBlur,Bn=b.onClick,kn=b.onFocus,Rn=b.onKeyDown,se=b.onKeyUp,wn=b.onValueChange,ge=b.placeholder,_n=b.readOnly,Cn=b.required,$n=b.style,ue=b.className,Ee=b.tabSize,W=Ee===void 0?2:Ee,oe=b.textareaId,Ce=b.value,Oe=b.language,Te=b.fontSize,Ne=Te===void 0?12:Te,Ze=b.variant,je=Ze===void 0?"ghost":Ze,xn=k()(b,Z),v=M({fontSize:Ne,variant:je}),Q=v.styles,B=v.cx,J=(0,I.useRef)({offset:-1,stack:[]}),Sn=(0,I.useRef)(null),Nn=(0,I.useState)(!0),mn=E()(Nn,2),qn=mn[0],ce=mn[1],Qn=(0,I.useCallback)(function(In){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,on=J.current,nn=on.stack,sn=on.offset;if(nn.length>0&&sn>-1){J.current.stack=nn.slice(0,sn+1);var Ln=J.current.stack.length;if(Ln>hn){var jn=Ln-hn;J.current.stack=nn.slice(jn,Ln),J.current.offset=Math.max(J.current.offset-jn,0)}}var fe=Date.now();if(h){var Fn=J.current.stack[J.current.offset];if(Fn&&fe-Fn.timestamp<un){var ne,On,An,Zn=/[^\da-z]([\da-z]+)$/i,ee=(ne=$(Fn.value,Fn.selectionStart).pop())===null||ne===void 0?void 0:ne.match(Zn),Pn=(On=$(In.value,In.selectionStart).pop())===null||On===void 0?void 0:On.match(Zn);if(ee!=null&&ee[1]&&Pn!==null&&Pn!==void 0&&(An=Pn[1])!==null&&An!==void 0&&An.startsWith(ee[1])){J.current.stack[J.current.offset]=r()(r()({},In),{},{timestamp:fe});return}}}J.current.stack.push(r()(r()({},In),{},{timestamp:fe})),J.current.offset++},[]),Hn=(0,I.useCallback)(function(){var In=Sn.current;if(In){var h=In.value,on=In.selectionStart,nn=In.selectionEnd;Qn({selectionEnd:nn,selectionStart:on,value:h})}},[Qn]),Kn=function(h){var on=Sn.current;on&&(on.value=h.value,on.selectionStart=h.selectionStart,on.selectionEnd=h.selectionEnd,wn==null||wn(h.value))},zn=function(h){var on=Sn.current,nn=J.current.stack[J.current.offset];nn&&on&&(J.current.stack[J.current.offset]=r()(r()({},nn),{},{selectionEnd:on.selectionEnd,selectionStart:on.selectionStart})),Qn(h),Kn(h)},pe=function(){var h=J.current,on=h.stack,nn=h.offset,sn=on[nn-1];sn&&(Kn(sn),J.current.offset=Math.max(nn-1,0))},ae=function(){var h=J.current,on=h.stack,nn=h.offset,sn=on[nn+1];sn&&(Kn(sn),J.current.offset=Math.min(nn+1,on.length-1))},Me=function(h){if(!(Rn&&(Rn(h),h.defaultPrevented))){h.key==="Escape"&&h.currentTarget.blur();var on=h.currentTarget,nn=on.value,sn=on.selectionStart,Ln=on.selectionEnd,jn=(ln?" ":"	").repeat(W),fe=dn?h.ctrlKey&&h.keyCode===C:h.ctrlKey&&h.keyCode===D&&h.shiftKey;if(h.key==="Tab"&&!f&&qn)if(h.preventDefault(),h.shiftKey){var Fn=$(nn,sn),ne=Fn.length-1,On=$(nn,Ln).length-1,An=nn.split(`
`).map(function(Yn,bn){return bn>=ne&&bn<=On&&Yn.startsWith(jn)?Yn.slice(jn.length):Yn}).join(`
`);if(nn!==An){var Zn=Fn[ne];zn({selectionEnd:Ln-(nn.length-An.length),selectionStart:Zn!=null&&Zn.startsWith(jn)?sn-jn.length:sn,value:An})}}else if(sn===Ln){var ee=sn+jn.length;zn({selectionEnd:ee,selectionStart:ee,value:nn.slice(0,Math.max(0,sn))+jn+nn.slice(Math.max(0,Ln))})}else{var Pn=$(nn,sn),Tn=Pn.length-1,Dn=$(nn,Ln).length-1,xe=Pn[Tn];zn({selectionEnd:Ln+jn.length*(Dn-Tn+1),selectionStart:xe&&/\S/.test(xe)?sn+jn.length:sn,value:nn.split(`
`).map(function(Yn,bn){return bn>=Tn&&bn<=Dn?jn+Yn:Yn}).join(`
`)})}else if(h.key==="Backspace"){var Vn=sn!==Ln,ye=nn.slice(0,Math.max(0,sn));if(ye.endsWith(jn)&&!Vn){h.preventDefault();var de=sn-jn.length;zn({selectionEnd:de,selectionStart:de,value:nn.slice(0,Math.max(0,sn-jn.length))+nn.slice(Math.max(0,Ln))})}}else if(h.key==="Enter"){if(sn===Ln){var Re=$(nn,sn).pop(),De=Re==null?void 0:Re.match(/^\s+/);if(De!=null&&De[0]){h.preventDefault();var Fe=`
`+De[0],Mn=sn+Fe.length;zn({selectionEnd:Mn,selectionStart:Mn,value:nn.slice(0,Math.max(0,sn))+Fe+nn.slice(Math.max(0,Ln))})}}}else if(h.keyCode===N||h.keyCode===U||h.keyCode===an||h.keyCode===X){var ie;h.keyCode===N&&h.shiftKey?ie=["(",")"]:h.keyCode===U?ie=h.shiftKey?["{","}"]:["[","]"]:h.keyCode===an?ie=h.shiftKey?['"','"']:["'","'"]:h.keyCode===X&&!h.shiftKey&&(ie=["`","`"]),sn!==Ln&&ie&&(h.preventDefault(),zn({selectionEnd:Ln+2,selectionStart:sn,value:nn.slice(0,Math.max(0,sn))+ie[0]+nn.substring(sn,Ln)+ie[1]+nn.slice(Math.max(0,Ln))}))}else(c?h.metaKey&&h.keyCode===D:h.ctrlKey&&h.keyCode===D)&&!h.shiftKey&&!h.altKey?(h.preventDefault(),pe()):(c?h.metaKey&&h.keyCode===D&&h.shiftKey:fe)&&!h.altKey?(h.preventDefault(),ae()):h.keyCode===w&&h.ctrlKey&&(!c||h.shiftKey)&&(h.preventDefault(),ce(function(Yn){return!Yn}))}},ve=function(h){var on=h.currentTarget,nn=on.value,sn=on.selectionStart,Ln=on.selectionEnd;Qn({selectionEnd:Ln,selectionStart:sn,value:nn},!0),wn(nn)};return(0,I.useEffect)(function(){Hn()},[Hn]),(0,I.useImperativeHandle)(Y,function(){return{get session(){return{history:J.current}},set session(In){J.current=In.history}}},[]),(0,A.jsx)(o.D,r()(r()({className:B(Q.container,ue),style:$n},xn),{},{children:(0,A.jsxs)("div",{className:Q.editor,children:[(0,A.jsx)(T.d,{className:B(Q.highlight,G==null?void 0:G.highlight),language:Oe,style:d.highlight,children:Ce}),(0,A.jsx)("textarea",{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",autoFocus:cn,className:B(Q.textarea,G==null?void 0:G.textarea),"data-gramm":!1,disabled:vn,form:q,id:oe,maxLength:pn,minLength:gn,onBlur:Wn,onChange:ve,onClick:Bn,onFocus:kn,onKeyDown:Me,onKeyUp:se,placeholder:ge,readOnly:_n,ref:function(h){return Sn.current=h},required:Cn,spellCheck:!1,style:r()({},d==null?void 0:d.textarea),value:Ce})]})}))})},13306:function(Jn,tn,n){n.d(tn,{U:function(){return w}});var rn=n(26068),r=n.n(rn),_=n(48305),E=n.n(_),j=n(67825),k=n.n(j),I=n(97157),o=n(94388),T=n(38590),c=n(22622),S=n(75271),u=n(84569),t=n.n(u),H=n(53649),K=n.n(H),g=n(3772),p,y,L,M,A,Z=(0,g.kc)(function(N){var U=N.css,an=N.token,X=N.prefixCls;return{root:U(p||(p=K()([`
      overflow: hidden;
    `]))),wrapper:U(y||(y=K()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),an.marginLG),content:U(L||(L=K()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),an.borderRadiusLG,an.boxShadowSecondary),dragWrapper:U(M||(M=K()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:U(A||(A=K()([`
      cursor: move;
    `])))}}),C=n(52676),D=["title","classNames","defaultPosition","onPositionChange"],w=(0,S.memo)(function(N){var U=N.title,an=N.classNames,X=an===void 0?{}:an,hn=N.defaultPosition,un=N.onPositionChange,dn=k()(N,D),$=Z(),l=$.styles,b=$.cx,Y=(0,S.useState)({left:0,top:0,bottom:0,right:0}),cn=E()(Y,2),vn=cn[0],q=cn[1],P=(0,S.useRef)(null),G=function(d,O){var f,F=window.document.documentElement,ln=F.clientWidth,pn=F.clientHeight,gn=(f=P.current)===null||f===void 0?void 0:f.getBoundingClientRect();gn&&q({left:-gn.left+O.x,right:ln-(gn.right-O.x),top:-gn.top+O.y,bottom:pn-(gn.bottom-O.y)})};return(0,C.jsx)(o.Z,r()(r()({},dn),{},{classNames:r()(r()({},X),{},{wrapper:b(l.wrapper,X.wrapper),content:b(l.content,X.content)}),destroyOnClose:!0,drawerRender:function(d){return(0,C.jsx)(t(),{bounds:vn,defaultPosition:hn,handle:".".concat(l.dragHandle),nodeRef:P,onStart:function(f,F){return G(f,F)},onStop:function(f,F){un==null||un({x:F.x,y:F.y})},children:(0,C.jsx)("div",{className:l.dragWrapper,ref:P,children:d})})},mask:!1,rootClassName:l.root,title:(0,C.jsxs)(T.Z,{align:"center",className:l.dragHandle,children:[(0,C.jsx)(T.Z,{flex:2,children:U}),(0,C.jsx)(T.Z,{children:(0,C.jsx)(c.ZP,{className:l.dragHandle,icon:(0,C.jsx)(I.Z,{}),type:"text"})})]})}))})},5795:function(Jn,tn,n){n.d(tn,{d:function(){return g}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(94388),k=n(75271),I=n(53649),o=n.n(I),T=n(3772),c,S,u,t=(0,T.kc)(function(y,L){var M=y.css,A=y.prefixCls,Z=L.closeIcon,C=L.closeIconPlacement,D=L.extra,w=M(c||(c=o()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),A,A,!(Z===null||Z===!1)&&M(S||(S=o()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),A));return{custom:M(u||(u=o()([`
        `,`
      `])),(!C||C==="right"||C==="auto"&&!D)&&w)}},{hashPriority:"low"}),H=n(52676),K=["className"],g=function(L){var M=L.className,A=E()(L,K),Z=t(A),C=Z.styles,D=Z.cx;return(0,H.jsx)(j.Z,r()(r()({},A),{},{className:D(C.custom,M)}))},p=null},99512:function(Jn,tn,n){n.d(tn,{L:function(){return L}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(38590),k=n(159),I=n(75271),o=n(53649),T=n.n(o),c=n(3772),S,u,t,H,K=(0,c.kc)(function(M,A){var Z=M.css,C=M.token,D=A.divider,w=A.position;return{menuWrapper:Z(S||(S=T()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),C.colorBgElevated,C.borderRadiusLG,C.boxShadowSecondary),menuExtra:Z(u||(u=T()([`
        padding: 10px 16px 4px;
        `,`
      `])),D&&Z(w==="top"?t||(t=T()([`
              border-bottom: 1px solid `,`;
            `])):H||(H=T()([`
              border-top: 1px solid `,`;
            `])),C.colorSplit))}}),g=n(52676),p=["menuExtra","dropdownRender"],y=function(A){var Z=A.menuExtra,C=A.dropdownRender,D=E()(A,p),w=Z||{},N=w.position,U=N===void 0?"top":N,an=w.divider,X=an===void 0?!1:an,hn=w.content,un=K({divider:X,position:U}),dn=un.styles,$=(0,I.useCallback)(function(l){var b=I.cloneElement(l,{style:{boxShadow:"none",border:"none"}});if(!hn)return C?(0,g.jsx)(j.Z,{className:dn.menuWrapper,vertical:!0,children:C(b)}):l;var Y=(0,g.jsx)(j.Z,{align:"center",className:dn.menuExtra,children:hn});return(0,g.jsxs)(j.Z,{className:dn.menuWrapper,vertical:!0,children:[U==="top"&&Y,b,U==="bottom"&&Y]})},[hn,C,U,dn.menuExtra,dn.menuWrapper]);return(0,g.jsx)(k.Z,r()({dropdownRender:$},D))},L=y;L.Button=k.Z.Button},99335:function(Jn,tn,n){n.d(tn,{i:function(){return S}});var rn=n(26068),r=n.n(rn),_=n(48305),E=n.n(_),j=n(57919),k=n(28281),I=n(75271),o=n(65720),T=n(99033),c=n(52676),S=(0,I.memo)(function(u){var t=u.value,H=u.onChange,K=u.classNames,g=K===void 0?{}:K,p=u.onEditingChange,y=u.editing,L=u.openModal,M=u.onOpenChange,A=u.placeholder,Z=u.showEditWhenEmpty,C=Z===void 0?!1:Z,D=u.styles,w=u.height,N=u.inputType,U=u.editButtonSize,an=u.text,X=u.fullFeaturedCodeBlock,hn=u.model,un=u.fontSize,dn=u.markdownProps,$=(0,o.Z)(!1,{onChange:p,value:y}),l=E()($,2),b=l[0],Y=l[1],cn=(0,o.Z)(!1,{onChange:M,value:L}),vn=E()(cn,2),q=vn[0],P=vn[1],G=w==="auto",R=(0,c.jsx)(j.Z,{className:g==null?void 0:g.input,classNames:{textarea:g==null?void 0:g.textarea},defaultValue:t,editButtonSize:U,height:w,onCancel:function(){return Y(!1)},onConfirm:function(O){H==null||H(O),Y(!1)},placeholder:A,style:D==null?void 0:D.input,text:an,textareaClassname:g==null?void 0:g.input,type:N});return!t&&C?R:(0,c.jsxs)(c.Fragment,{children:[!q&&b?R:(0,c.jsx)(T.L,r()(r()({className:g==null?void 0:g.markdown,fontSize:un,fullFeaturedCodeBlock:X,style:r()({height:G?"unset":w},D==null?void 0:D.markdown),variant:"chat"},dn),{},{children:t||A||""})),q&&(0,c.jsx)(k.Z,{editing:b,extra:hn==null?void 0:hn.extra,footer:hn==null?void 0:hn.footer,height:w,onChange:H,onEditingChange:Y,onOpenChange:function(O){P(O),Y(!1)},open:q,placeholder:A,text:an,value:t})]})})},14866:function(Jn,tn,n){n.d(tn,{w:function(){return o}});var rn=n(48305),r=n.n(rn),_=n(75271),E=function(c){return typeof c=="string"?document.querySelector("#".concat(c)):(c==null?void 0:c.current)||c},j=":not([disabled]):not([readonly])",k=["text","password","search","tel","url","number","email",""].map(function(T){return'input[type="'.concat(T,'"]').concat(j)}).join(", ")+", input:not([type])".concat(j,", textarea").concat(j),I=function(c){var S,u=E(c);if(u){var t=(S=u.querySelector)===null||S===void 0?void 0:S.call(u,k);if(t!=null&&t.focus)return t.focus(),!0}},o=function(c){var S=(0,_.useState)(!1),u=r()(S,2),t=u[0],H=u[1];_.useEffect(function(){if(!(t||!c)){var K=I(c);K&&H(!0)}},[c,t,H])}},20147:function(Jn,tn,n){n.d(tn,{MX:function(){return I},wK:function(){return k},wL:function(){return E.w}});var rn=n(26068),r=n.n(rn),_=n(75271),E=n(14866),j=n(52676),k=function(T){var c,S=T.autoFocus,u=S===void 0?!0:S,t=(0,_.useRef)(null);return(0,E.w)(u?t:void 0),(0,j.jsx)("div",{className:T.className,id:T.id,ref:t,style:(c=T.style)!==null&&c!==void 0?c:{display:T.className?void 0:"contents"},children:T.children})},I=function(T){return function(c){var S=function(H){return(0,j.jsx)(k,r()(r()({},T||{}),{},{children:(0,j.jsx)(c,r()({},H))}))},u=c.displayName||c.name||"Component";return S.displayName="withFormHelper(".concat(u,")"),S}}},25969:function(Jn,tn,n){n.d(tn,{n:function(){return D}});var rn=n(26068),r=n.n(rn),_=n(48305),E=n.n(_),j=n(67825),k=n.n(j),I=n(27046),o=n(50999),T=n(41117),c=n(45798),S=n(3548),u=n(5312),t=n(75271),H=n(53649),K=n.n(H),g=n(3772),p,y,L,M,A=(0,g.kc)(function(w){var N=w.css,U=w.token,an="#222222";return{root:N(p||(p=K()([`
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
      `])),an,U.borderRadiusLG,U.marginXXS,U.paddingXS,an,U.borderRadiusLG,U.borderRadiusLG,U.borderRadius,U.borderRadius,an,U.borderRadiusLG,U.fontFamilyCode),searchBarIcon:N(y||(y=K()([`
        font-size: 16px;
      `]))),loaderText:N(L||(L=K()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),U.fontFamilyCode),loaderIcon:N(M||(M=K()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),U.marginSM,U.marginSM)}},{hashPriority:"low"}),Z=n(52676),C=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],D=function(N){var U=N.className,an=N.id,X=N.style,hn=N.height,un=N.onScroll,dn=N.url,$=N.websocket,l=N.refreshInterval,b=N.onLoad,Y=N.onError,cn=k()(N,C),vn=A(),q=vn.cx,P=vn.styles,G=(0,t.useState)(0),R=E()(G,2),d=R[0],O=R[1],f=(0,t.useState)(!1),F=E()(f,2),ln=F[0],pn=F[1],gn=(0,t.useState)(!1),Wn=E()(gn,2),Bn=Wn[0],kn=Wn[1],Rn=(0,t.useRef)(),se=(0,t.useRef)();(0,t.useEffect)(function(){return function(){clearTimeout(Rn.current),clearTimeout(se.current)}},[]),(0,t.useEffect)(function(){var Cn;return dn&&!$&&l&&(Cn=setInterval(function(){O(function($n){return $n+1})},l)),function(){clearInterval(Cn)}},[l,dn,$]);var wn=(0,t.useMemo)(function(){return dn&&(Rn.current=setTimeout(function(){pn(!0),Rn.current=void 0},50),"".concat(dn,"#").concat(d))},[dn,d]),ge=(0,t.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Rn.current),pn(!1),kn(!0),se.current=setTimeout(function(){return kn(!1)},100),b==null||b()},[b]),_n=(0,t.useCallback)(function(Cn){pn(!1),clearTimeout(Rn.current),Y==null||Y(Cn)},[Y]);return(0,Z.jsxs)("div",{className:q(P.root,U),id:an,style:r()({height:hn},X),children:[(0,Z.jsx)(o.Uu,{render:function($n){var ue=$n.follow,Ee=$n.onScroll;return(0,Z.jsx)(o.A9,r()(r()({url:wn,websocket:$},cn),{},{follow:Bn||ue,height:hn,iconFilterLines:(0,Z.jsx)(I.Z,{className:P.searchBarIcon,icon:T.Z}),iconFindNext:(0,Z.jsx)(I.Z,{className:P.searchBarIcon,icon:c.Z}),iconFindPrevious:(0,Z.jsx)(I.Z,{className:P.searchBarIcon,icon:S.Z}),onError:_n,onLoad:ge,onScroll:function(oe){Ee(oe),un==null||un(oe)}}))},startFollowing:!0}),ln&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:P.loaderText,children:"loading ..."}),(0,Z.jsx)(I.Z,{className:P.loaderIcon,icon:u.Z,spin:!0})]})]})}},52625:function(Jn,tn,n){n.d(tn,{T:function(){return L}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(3772),k=n(75271),I=n(90142),o=n(36075),T=n.n(o),c=n(52676),S=(0,k.memo)(function(M){var A=Object.assign({},(T()(M),M));return(0,c.jsx)("svg",r()(r()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},A),{},{children:(0,c.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),u=(0,k.memo)(function(M){var A=Object.assign({},(T()(M),M));return(0,c.jsxs)("svg",r()(r()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},A),{},{children:[(0,c.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,c.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,c.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),t=(0,k.memo)(function(M){var A=Object.assign({},(T()(M),M));return(0,c.jsxs)("svg",r()(r()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},A),{},{children:[(0,c.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,c.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,c.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,c.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,c.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,c.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,c.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),H=n(53649),K=n.n(H),g,p=(0,j.kc)(function(M){var A=M.css;return{extraTitle:A(g||(g=K()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),y=["type","size","style","extra","className"],L=(0,k.memo)(function(M){var A=M.type,Z=A===void 0?"img":A,C=M.size,D=C===void 0?32:C,w=M.style,N=M.extra,U=M.className,an=E()(M,y),X=(0,j.Fg)(),hn=p(),un=hn.styles,dn;switch(Z){case"text":{dn=(0,c.jsx)(t,r()({className:U,height:D,style:w,width:D*2.9375},an));break}case"combine":{dn=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,r()({height:D,style:w,width:D},an)),(0,c.jsx)(t,{style:{height:D,marginLeft:Math.round(D/4),width:"auto"}})]});break}case"img":default:{dn=(0,c.jsx)(u,r()({height:D,style:w,width:D},an));break}}if(!N)return dn;var $=Math.round(D/3*1.9);return(0,c.jsxs)(I.D,r()(r()({align:"center",className:U,horizontal:!0,style:w},an),{},{children:[dn,(0,c.jsx)(S,{style:{color:X.colorFill,height:$,width:$}}),(0,c.jsx)("div",{className:un.extraTitle,style:{fontSize:$},children:N})]}))})},79334:function(Jn,tn,n){n.d(tn,{o:function(){return Be}});var rn=n(26068),r=n.n(rn),_=n(82092),E=n.n(_),j=n(14837),k=n(64419),I=n(30924),o=n(6988),T=n(56875),c=n(44250),S=n(98639),u=n(36419),t=n(75271),H=n(28485),K=n(48305),g=n.n(K),p=n(71561),y=n(32199),L=(0,u.fA)("INSERT_MENTION_COMMAND"),M=(0,u.fA)("DELETE_MENTION_COMMAND"),A=(0,u.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Z=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,C=function(s){var a=s.onBlur,e=s.onFocus,i=(0,p.g)(),m=g()(i,1),z=m[0],en=(0,t.useRef)(null);return(0,t.useEffect)(function(){return(0,y.qV)(z.registerCommand(A,function(){return en.current&&(clearTimeout(en.current),en.current=null),!0},u.VN),z.registerCommand(u.Gq,function(fn,yn){return en.current=setTimeout(function(){z.dispatchCommand(u.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),a&&a(),!0},u.VN),z.registerCommand(u.m$,function(){return e&&e(),!0},u.VN))},[z,a,e]),null},D=n(25298),w=n.n(D),N=n(17069),U=n.n(N),an=n(9504),X=n.n(an),hn=n(38836),un=n.n(hn),dn=n(21742),$=n.n(dn),l=n(83136),b=n.n(l),Y=function(x){$()(a,x);var s=b()(a);function a(){return w()(this,a),s.apply(this,arguments)}return U()(a,[{key:"createDOM",value:function(i){var m=X()(un()(a.prototype),"createDOM",this).call(this,i);return m.classList.add("align-middle"),m}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(i){return new a(i.__text,i.__key)}},{key:"importJSON",value:function(i){var m=(0,u.MX)(i.text);return m.setFormat(i.format),m.setDetail(i.detail),m.setMode(i.mode),m.setStyle(i.style),m}}]),a}(u.R2);function cn(x){return new Y(x)}var vn=function(s){var a=s.editable,e=(0,p.g)(),i=g()(e,1),m=i[0];return(0,t.useEffect)(function(){m.setEditable(a)},[a,m]),null},q=n(62657),P=n.n(q),G=n(27046),R=n(38590),d=n(1718),O=n(69024),f=n(52676),F=(0,t.createContext)(null),ln=(0,t.memo)(function(x){var s=x.children,a=x.value;return(0,f.jsx)(F.Provider,{value:a,children:s})}),pn=function(){var s=(0,t.useContext)(F);return s==null?void 0:s.optionsMap},gn=n(33803),Wn=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,Bn="\\(",kn=function(s){return"(?:"+s.join("|")+")"},Rn=function(s,a){var e=s.length===0?"":"(?!"+s.join("|")+")";return e+"[^\\s"+a+"]"},se=function(s){return"(?:\\.[ |$]|\\s|["+s+"]|)"},wn=75,ge=function(s,a){var e=(0,t.useRef)(null),i=(0,p.g)(),m=g()(i,1),z=m[0],en=(0,gn.y)(s),fn=g()(en,3),yn=fn[0],En=fn[1],V=fn[2],Un=(0,t.useCallback)(function(Gn){var te=(0,u.dL)(),re=te==null?void 0:te.getNodes();if(!yn&&(re==null?void 0:re.length)===1&&z.dispatchCommand(a,void 0),yn&&(0,u.iO)(te)){Gn.preventDefault();var he=(0,u.gI)(s);if((0,u.k$)(he))return a&&z.dispatchCommand(a,void 0),he.remove(),!0}return!1},[yn,s,a,z]),Xn=(0,t.useCallback)(function(Gn){Gn.stopPropagation(),V(),En(!0)},[En,V]);return(0,t.useEffect)(function(){var Gn=e.current;return Gn&&Gn.addEventListener("click",Xn),function(){Gn&&Gn.removeEventListener("click",Xn)}},[Xn]),(0,t.useEffect)(function(){return(0,y.qV)(z.registerCommand(u.MK,Un,u.KB),z.registerCommand(u.aR,Un,u.KB))},[z,V,Un]),[e,yn]},_n=function(){var s=useRef(null),a=useState(!1),e=_slicedToArray(a,2),i=e[0],m=e[1],z=useCallback(function(en){en.stopPropagation(),m(function(fn){return!fn})},[]);return useEffect(function(){var en=s.current;return en&&en.addEventListener("click",z),function(){en&&en.removeEventListener("click",z)}},[z]),[s,i,m]};function Cn(x,s,a,e){return new RegExp((s?"(^|\\s|".concat(s,")("):"(^|\\s)(")+kn(x)+"((?:"+Rn(x,a)+(e?se(a):"")+"){0,"+wn+"}))$")}function $n(x,s,a,e,i){var m=Cn(s,a,e,i).exec(x);if(m!==null){var z=m[1],en=m[2],fn=m[3];if(en.length>0)return{leadOffset:m.index+z.length,matchingString:fn,replaceableString:en}}return null}var ue=function(s,a){var e=a.punctuation,i=a.preTriggerChars,m=a.allowSpaces,z=(0,t.useState)(null),en=g()(z,2),fn=en[0],yn=en[1],En=(0,t.useCallback)(function(V){var Un=$n(V,s,i,e,m);if(Un){var Xn=Un.replaceableString,Gn=Un.matchingString,te=Xn.lastIndexOf(Gn),re=te===-1?Xn:Xn.slice(0,Math.max(0,te))+Xn.slice(Math.max(0,te+Gn.length));if(yn(re||null),Un.replaceableString)return Un}else yn(null);return null},[i,m,e,s]);return{trigger:fn,checkForMentionMatch:En}},Ee=n(53649),W=n.n(Ee),oe=n(3772),Ce,Oe,Te,Ne=(0,oe.kc)(function(x,s){var a=x.css,e=x.token,i=x.prefixCls,m=s.isSelected,z=s.isError,en=function(){return z?m?{background:e.colorErrorBgActive,border:e.colorErrorBorderHover,color:e.colorErrorTextActive}:{background:e.colorErrorBg,border:e.colorErrorBorder,color:e.colorErrorText}:m?{background:e.colorInfoBgHover,border:e.colorInfoBorder,color:e.colorInfoText}:{background:e.colorFillTertiary,border:"transparent",color:e.colorInfoText}},fn=en(),yn=fn.background,En=fn.border,V=fn.color;return{root:a(Ce||(Ce=W()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),e.fontFamilyCode,V,yn,En,e.borderRadius),text:a(Oe||(Oe=W()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),e.colorTextSecondary),error:a(Te||(Te=W()([`
        color: `,`;
      `])),e.colorErrorText)}}),Ze=(0,t.memo)(function(x){var s=x.nodeKey,a=x.variable,e=pn(),i=(0,p.g)(),m=g()(i,1),z=m[0],en=ge(s,M),fn=g()(en,2),yn=fn[0],En=fn[1],V=e==null?void 0:e[a],Un=Ne({isSelected:En,isError:!V||!!V.error}),Xn=Un.styles;(0,t.useEffect)(function(){if(!z.hasNodes([je]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[z]);var Gn=(0,f.jsx)(R.Z,{className:Xn.root,ref:yn,children:(0,f.jsxs)(R.Z,{align:"center",gap:2,children:[(!V||V.error)&&(0,f.jsx)(G.Z,{className:Xn.error,icon:O.Z}),(V==null?void 0:V.icon)&&(0,f.jsx)(R.Z,{children:V.icon}),(0,f.jsx)(R.Z,{className:Xn.text,gap:2,title:(V==null?void 0:V.selectedLabel)||(V==null?void 0:V.label)||a,children:(0,f.jsx)("span",{children:(V==null?void 0:V.selectedLabel)||(V==null?void 0:V.label)||a})})]})});return V!=null&&V.error?(0,f.jsx)(d.Z,{title:V==null?void 0:V.error,children:Gn}):Gn}),je=function(x){$()(a,x);var s=b()(a);function a(e,i){var m;return w()(this,a),m=s.call(this,i),E()(P()(m),"__variable",void 0),m.__variable=e,m}return U()(a,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var i=document.createElement("div");return i.style.display="inline-flex",i.style.alignItems="center",i.style.verticalAlign="middle",i}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,f.jsx)(Ze,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var i=this.getLatest();return i.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(i){return new a(i.__variable,i.__key)}},{key:"importJSON",value:function(i){var m=xn(i.variable);return m}}]),a}(u.Ij);function xn(x){return new je(x)}function v(x){return x instanceof je}var Q=(0,t.memo)(function(x){var s=x.onInsert,a=x.onDelete,e=(0,p.g)(),i=g()(e,1),m=i[0];return(0,t.useEffect)(function(){if(!m.hasNodes([je]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,y.qV)(m.registerCommand(L,function(z){m.dispatchCommand(A,null);var en=xn(z);return(0,u.od)([en]),s&&s(),!0},u.VN),m.registerCommand(M,function(){return a&&a(),!0},u.VN))},[m,s,a]),null});Q.displayName="MentionNodePlugin";var B=(0,u.fA)("INSERT_MENTION_COMMAND"),J=(0,u.fA)("DELETE_MENTION_COMMAND"),Sn=(0,u.fA)("CLEAR_HIDE_MENU_TIMEOUT"),Nn=(0,u.fA)("UPDATE_MENTIONS_OPTIONS"),mn=function(s,a,e){if(s.isSimpleText())for(var i=s.getPreviousSibling(),m=s.getTextContent(),z=s,en;;){en=a(m);var fn=en===null?"":m.slice(en.end);if(m=fn,fn===""){var yn=z.getNextSibling();if((0,u.Gg)(yn)){fn=z.getTextContent()+yn.getTextContent();var En=a(fn);if(En===null){yn.markDirty();return}else if(En.start!==0)return}}else{var V=a(fn);if(V!==null&&V.start===0)return}if(en===null)return;if(!(en.start===0&&(0,u.Gg)(i)&&i.isTextEntity())){var Un=void 0;if(en.start===0){var Xn=z.splitText(en.end),Gn=g()(Xn,2);Un=Gn[0],z=Gn[1]}else{var te=z.splitText(en.start,en.end),re=g()(te,3);Un=re[1],z=re[2]}var he=e(Un);if(Un.replace(he),z==null)return}}};function qn(x){var s=x.split(`
`);return JSON.stringify({root:{children:s.map(function(a){return{children:[{detail:0,format:0,mode:"normal",style:"",text:a,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var ce=(0,t.memo)(function(x){var s=x.onInsert,a=(0,p.g)(),e=g()(a,1),i=e[0];(0,t.useEffect)(function(){if(!i.hasNodes([je]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[i]);var m=(0,t.useCallback)(function(fn){s&&s();var yn=fn.getTextContent().slice(2,-2);return(0,u.U2)(xn(yn))},[s]),z=(0,t.useCallback)(function(fn){var yn=Z.exec(fn);if(yn===null)return null;var En=yn.index,V=En+yn[0].length;return{end:V,start:En}},[]),en=(0,t.useCallback)(function(fn){return Z.lastIndex=0,mn(fn,z,m)},[m,z]);return(0,t.useEffect)(function(){return Z.lastIndex=0,(0,y.qV)(i.registerNodeTransform(Y,en))},[]),null}),Qn=n(15558),Hn=n.n(Qn),Kn=n(99934),zn=n(26082),pe=n(30874),ae=n(30967),Me=n(83606),ve=function(x){$()(a,x);var s=b()(a);function a(e){var i,m=e.label,z=e.value,en=e.title,fn=e.data,yn=e.icon,En=e.extraElement,V=e.keywords,Un=e.keyboardShortcut,Xn=e.disabled,Gn=e.onSelect,te=e.children,re=e.isChild;return w()(this,a),i=s.call(this,z),E()(P()(i),"label",void 0),E()(P()(i),"value",void 0),E()(P()(i),"htmlTitle",void 0),E()(P()(i),"title",void 0),E()(P()(i),"key",void 0),E()(P()(i),"icon",void 0),E()(P()(i),"extraElement",void 0),E()(P()(i),"keywords",void 0),E()(P()(i),"keyboardShortcut",void 0),E()(P()(i),"onSelect",void 0),E()(P()(i),"disabled",void 0),E()(P()(i),"data",void 0),E()(P()(i),"children",void 0),E()(P()(i),"isChild",void 0),i.value=z,i.label=m,i.htmlTitle=en,i.title=m,i.key=z,i.keywords=V||[],i.icon=yn,i.extraElement=En,i.keyboardShortcut=Un,i.onSelect=Gn.bind(P()(i)),i.disabled=Xn,i.data=fn,i.isChild=re!=null?re:!1,i.children=te==null?void 0:te.map(function(he){return new a(r()(r()({},he),{},{isChild:!0}))}),i}return U()(a)}(Kn.n),In=function x(s,a){var e;return s.children=(e=s.children)===null||e===void 0?void 0:e.filter(function(i){if(!i.children)return a(i);var m=x(i,a);return a(i)||(m.children||[]).length>0}),s},h=function(s,a){var e=(0,p.g)(),i=g()(e,1),m=i[0],z=(0,t.useCallback)(function(fn){var yn,En=new RegExp((0,Me.Z)(a),"i");return En.test(fn.label)||((yn=fn.keywords)===null||yn===void 0?void 0:yn.some(function(V){return En.test(V)}))||!1},[a]),en=(0,t.useMemo)(function(){var fn=function En(V){var Un=r()(r()({},V),{},{title:V.title||V.selectedLabel,children:void 0,onSelect:function(){m.dispatchCommand(L,V.value)}});return V.children&&(Un.children=V.children.map(function(Xn){return En(Xn)})),Un},yn=s.map(function(En){return new ve(fn(En))});return a?yn.map(function(En){return En.children?In(En,z):En}).filter(function(En){return z(En)||(En.children||[]).length>0}):yn},[s,a,m,z]);return{options:en}},on=n(66642),nn=n(94729),sn,Ln,jn,fe,Fn,ne,On,An=(0,oe.kc)(function(x,s){var a=x.css,e=x.token,i=x.prefixCls,m=s.isSelected,z=s.disabled,en=a(sn||(sn=W()([`
      background-color: `,`;
    `])),e.colorFillTertiary);return{anchor:a(Ln||(Ln=W()([`
        z-index: 9999;
      `]))),menuEmpty:a(jn||(jn=W()([`
        padding: `,`px;
      `])),e.padding),menuOverlay:a(fe||(fe=W()([`
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
      `])),e.marginXXS,e.paddingXXS,e.colorBgElevated,e.borderRadius,e.boxShadow,i),menuItem:a(Fn||(Fn=W()([`
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
      `])),z?"not-allowed":"pointer",z?"none":"all",e.paddingXS,e.borderRadius,z?e.colorTextDisabled:e.colorText,e.fontSize,m&&en,en),menuItemIcon:a(ne||(ne=W()([`
        color: `,`;
      `])),e.colorInfoText),menuItemLabel:a(On||(On=W()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),Zn=nn.C.Text,ee=(0,t.memo)(function(x){var s=x.index,a=x.isSelected,e=x.onClick,i=x.onMouseEnter,m=x.option,z=x.queryString,en=x.showIcon,fn=en===void 0?!0:en,yn=An({isSelected:a,disabled:m.disabled}),En=yn.styles,V=m.label,Un=(0,t.useMemo)(function(){var he=V,We="",$e="";if(z){var Qe=new RegExp((0,Me.Z)(z),"i"),Ke=Qe.exec(m.label);Ke&&(he=V.slice(0,Math.max(0,Ke.index)),We=Ke[0],$e=V.slice(Math.max(0,Ke.index+Ke[0].length)))}return{before:he,middle:We,after:$e}},[m.label,z,V]),Xn=Un.before,Gn=Un.middle,te=Un.after,re=(0,t.useRef)(null);return(0,t.useEffect)(function(){if(a){var he;re==null||(he=re.current)===null||he===void 0||he.scrollIntoView({behavior:"smooth",block:"nearest"})}},[a]),(0,t.useEffect)(function(){m.setRefElement(re==null?void 0:re.current)},[]),(0,f.jsxs)(R.Z,{align:"center",className:En.menuItem,gap:4,onClick:function(){return e==null?void 0:e(s,m)},onMouseEnter:function(){return i==null?void 0:i(s,m)},ref:re,tabIndex:-1,title:m.htmlTitle||m.label,children:[fn&&(0,f.jsx)(R.Z,{className:En.menuItemIcon,children:m.icon}),(0,f.jsxs)("div",{className:En.menuItemLabel,children:[Xn,(0,f.jsx)(Zn,{mark:!0,children:Gn}),te]}),(0,f.jsx)(R.Z,{children:m.extraElement})]},m.key)});ee.displayName="MentionMenuItem";var Pn=(0,t.memo)(function(x){var s=x.selectedIndex,a=x.options,e=x.onClick,i=x.onMouseEnter,m=x.queryString,z=An({}),en=z.styles;return(0,f.jsxs)(f.Fragment,{children:[a.length===0&&(0,f.jsx)(on.Z,{className:en.menuEmpty,image:on.Z.PRESENTED_IMAGE_SIMPLE}),a.map(function(fn,yn){return(0,f.jsx)(ee,{index:yn,isSelected:s===yn,onClick:e,onMouseEnter:i,option:fn,queryString:m},fn.key)})]})}),Tn=(0,t.memo)(function(x){var s=x.overlayClassName,a=x.triggers,e=x.options,i=e===void 0?[]:e,m=x.allowSpaces,z=m===void 0?!0:m,en=x.punctuation,fn=en===void 0?Wn:en,yn=x.preTriggerChars,En=yn===void 0?Bn:yn,V=x.onSelect,Un=x.parent,Xn=An({}),Gn=Xn.cx,te=Xn.styles,re=(0,p.g)(),he=g()(re,1),We=he[0],$e=ue(a,{punctuation:fn,preTriggerChars:En,allowSpaces:z}),Qe=$e.trigger,Ke=$e.checkForMentionMatch,et=(0,t.useState)(null),_e=g()(et,2),Ue=_e[0],qe=_e[1],tt=h(i,Ue),He=tt.options,ze=(0,t.useMemo)(function(){var le=function me(Ie){return(0,pe.Z)(Ie,function(Ae){return[Ae].concat(Hn()(Ae.children?me(Ae.children):[]))})};return le(He)},[He]),nt=(0,t.useCallback)(function(le,me,Ie,Ae){V==null||V(le,Qe,Ue),We.update(function(){me&&le!==null&&le!==void 0&&le.key&&me.remove(),le!=null&&le.onSelect&&le.onSelect(Ae),Ie()})},[We,V,Ue,Qe]),Ye=(0,t.useRef)(),Se=(0,t.useCallback)(function(le){var me=le.selectedIndex,Ie=le.setHighlightedIndex;if(me!==null){var Ae;if((Ae=ze[me])!==null&&Ae!==void 0&&Ae.disabled){var Le=me;if(me===ze.length-1)Le=ze.length===1?null:0,Ie(Le);else if(me!==Ye.current){var be;me>((be=Ye.current)!==null&&be!==void 0?be:0)?Le++:Le--,Ie(Le)}}Ye.current=me}},[ze]),Ge=(0,t.useCallback)(function(le){var me=le.selectedIndex,Ie=le.selectOptionAndCleanUp;return Se(le),(0,f.jsx)(S.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0,nodeHoverBg:"transparent"}}},children:(0,f.jsx)(zn.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Le,be){var Pe=be.nativeEvent;Pe.stopPropagation(),We.dispatchCommand(A,{})},onSelect:function(Le,be){Ie(be.node)},titleRender:function(Le){var be;return(0,f.jsx)(ee,{isSelected:((be=ze[me])===null||be===void 0?void 0:be.value)===Le.value,option:Le,queryString:Ue,showIcon:!Le.isChild})},treeData:He})})},[Se,He,We,ze,Ue]),Xe=(0,t.useCallback)(function(le,me,Ie){var Ae=me.selectedIndex,Le=me.selectOptionAndCleanUp,be=me.setHighlightedIndex;return Se(me),le.current?ae.createPortal((0,f.jsx)("div",{className:Gn(te.menuOverlay,s),role:"menu",children:He.some(function(Pe){return(Pe.children||[]).length>0})?Ge(me):(0,f.jsx)(Pn,{onClick:function(ke,Je){Je.disabled||(be(ke),Le(Je))},onMouseEnter:function(ke,Je){Je.disabled||be(ke)},options:He,queryString:Ue,selectedIndex:Ae})}),le.current):null},[Gn,Se,He,s,Ue,Ge,te.menuOverlay]);return(0,f.jsx)(Kn.HQ,{anchorClassName:te.anchor,menuRenderFn:Xe,onQueryChange:qe,onSelectOption:nt,options:ze,parent:Un,triggerFn:Ke})}),Dn,xe,Vn,ye,de,Re,De,Fe,Mn=32,ie=22,Yn=function(s){return Mn+Math.max(s-1,0)*ie},bn=(0,oe.kc)(function(x,s){var a=x.css,e=x.token,i=s.autoSize,m=s.code;return{wrapper:a(Dn||(Dn=W()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:a(xe||(xe=W()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Mn,e.fontSize,Mn,e.colorTextPlaceholder),root:a(Vn||(Vn=W()([`
        outline: none;
        border: 1px solid `,`;
        border-radius: `,`px;

        margin: 0;
        padding: 4px 11px;

        color: `,`;
        font-size: `,`px;
        .align-middle {
          vertical-align: middle;
        }
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
      `])),e.colorBorder,e.borderRadius,e.colorText,e.fontSize,m?e.fontFamilyCode:e.fontFamily,(i==null?void 0:i.minRows)&&a(ye||(ye=W()([`
          min-height: `,`px;
        `])),Yn(i.minRows)),(i==null?void 0:i.maxRows)&&a(de||(de=W()([`
          max-height: `,`px;
        `])),Yn(i.maxRows)),e.motionDurationMid,e.colorPrimaryBorder,ie),filled:a(Re||(Re=W()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),e.colorFillTertiary,e.colorFillSecondary,e.colorBgBase),borderless:a(De||(De=W()([`
        background: transparent;
        border: none;
      `]))),disabled:a(Fe||(Fe=W()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),e.colorTextDisabled,e.colorBgContainerDisabled)}}),Be=function(s){var a=s.className,e=s.classNames,i=s.placeholder,m=s.style,z=s.value,en=s.defaultValue,fn=s.readOnly,yn=fn===void 0?!1:fn,En=s.disabled,V=s.onChange,Un=s.onBlur,Xn=s.onFocus,Gn=s.variant,te=Gn===void 0?"outlined":Gn,re=s.options,he=re===void 0?[]:re,We=s.autoSize,$e=s.triggers,Qe=$e===void 0?["@"]:$e,Ke=s.allowSpaces,et=s.punctuation,_e=s.preTriggerChars,Ue=s.onSelect,qe=s.code,tt=qe===void 0?!1:qe,He=s.getPopContainer,ze=S.ZP.useConfig(),nt=ze.componentDisabled,Ye=bn({autoSize:We,code:tt}),Se=Ye.styles,Ge=Ye.cx,Xe=(0,t.useMemo)(function(){return En!=null?En:nt},[nt,En]),le=(0,t.useMemo)(function(){return!yn&&!Xe},[Xe,yn]),me=(0,t.useMemo)(function(){return{namespace:"mentions",nodes:[Y,{replace:u.R2,with:function(Pe){return new Y(Pe.__text)}},je],editorState:qn(z||en||""),onError:function(Pe){throw Pe}}},[]),Ie=function(Pe){var ke=Pe.read(function(){return(0,u.Gv)().getTextContent()});V==null||V(ke.replaceAll(`

`,`
`))},Ae=(0,t.useMemo)(function(){var be=function Pe(ke,Je){return ke.reduce(function(we,Ve){if(we[Ve.value]=Ve,we[Ve.value].icon||(we[Ve.value].icon=Je),Ve.children&&Ve.children.length>0){var rt=Pe(Ve.children,Ve.icon);Object.assign(we,rt)}return we},{})};return be(he)},[he]),Le=(0,t.useMemo)(function(){if(H.j&&document.fullscreenElement)return document.fullscreenElement},[]);return H.j?(0,f.jsx)(j.R,{initialConfig:r()(r()({},me),{},{editable:le}),children:(0,f.jsx)(ln,{value:{optionsMap:Ae},children:(0,f.jsxs)("div",{className:Ge(Se.wrapper,e==null?void 0:e.wrapper),children:[(0,f.jsx)(c.B,{ErrorBoundary:I.g,contentEditable:(0,f.jsx)(k.f,{className:Ge(E()(E()(E()(E()({},Se.root,!0),Se.filled,te==="filled"),Se.borderless,te==="borderless"),Se.disabled,Xe),a),style:m||{}}),placeholder:(0,f.jsx)("div",{className:Se.placeholder,children:i||"\u8F93\u5165 ".concat(Qe.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),le&&(0,f.jsx)(Tn,{allowSpaces:Ke,onSelect:Ue,options:he,overlayClassName:e==null?void 0:e.menuOverlay,parent:Le,preTriggerChars:_e,punctuation:et,triggers:Qe}),(0,f.jsx)(Q,{}),(0,f.jsx)(ce,{}),(0,f.jsx)(o.e,{}),(0,f.jsx)(T.$,{onChange:Ie}),(0,f.jsx)(C,{onBlur:Un,onFocus:Xn}),(0,f.jsx)(vn,{editable:le})]})})}):(0,f.jsxs)("div",{className:Ge(Se.wrapper,e==null?void 0:e.wrapper),children:[(0,f.jsx)("div",{className:Ge(E()(E()(E()(E()({},Se.root,!0),Se.filled,te==="filled"),Se.borderless,te==="borderless"),Se.disabled,Xe),a),style:m||{}}),(0,f.jsx)("div",{className:Se.placeholder,children:i||"\u8F93\u5165 ".concat(Qe.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(Jn,tn,n){n.d(tn,{u:function(){return p}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(76795),k=n(75271),I="yunti-ui",o=n(53649),T=n.n(o),c=n(3772),S,u,t=(0,c.kc)(function(L,M){var A=L.css,Z=L.prefixCls,C=M.borderd,D=C===void 0?!0:C,w=M.footer,N=w===null||Array.isArray(w)&&w.length===0,U=A(S||(S=T()([`
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
    `])),Z,Z,N?0:"40px",Z,N?0:"1px");return{custom:A(u||(u=T()([`
        `,`
      `])),D&&U)}},{hashPriority:"low"}),H=n(52676),K=["className","borderd"],g=function(M){var A=M.className,Z=M.borderd,C=Z===void 0?!0:Z,D=E()(M,K),w=t(r()({borderd:C},D)),N=w.styles,U=w.cx;return(0,H.jsx)(j.Z,r()(r()({},D),{},{className:U(N.custom,"".concat(I,"-modal"),A)}))},p=g;p.useModal=j.Z.useModal,p.destroyAll=j.Z.destroyAll,p.config=j.Z.config,p._InternalPanelDoNotUseOrYouWillBeFired=j.Z._InternalPanelDoNotUseOrYouWillBeFired,p.info=j.Z.info,p.success=j.Z.success,p.error=j.Z.error,p.warning=j.Z.warning,p.warn=j.Z.warn,p.confirm=j.Z.confirm;var y=null},81321:function(Jn,tn,n){n.d(tn,{ZM:function(){return Ne},Hu:function(){return U},Xq:function(){return je},rE:function(){return Ze}});var rn=n(26068),r=n.n(rn),_=n(48305),E=n.n(_),j=n(67825),k=n.n(j),I=n(71795),o=n(75271),T=n(94456),c=n(27046),S=n(22622),u=n(32328),t=n(87449),H=n(28485),K=n(90228),g=n.n(K),p=n(87999),y=n.n(p),L=n(64074),M=n(50279),A=n(25298),Z=n.n(A),C=n(17069),D=n.n(C),w=n(82092),N=n.n(w),U=function(){function xn(){Z()(this,xn),N()(this,"methodMap",void 0),N()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return D()(xn,[{key:"registerMethod",value:function(Q,B){this.methodMap[Q]=B}},{key:"call",value:function(Q){for(var B,J,Sn=arguments.length,Nn=new Array(Sn>1?Sn-1:0),mn=1;mn<Sn;mn++)Nn[mn-1]=arguments[mn];return(B=(J=this.methodMap)[Q])===null||B===void 0?void 0:B.call.apply(B,[J].concat(Nn))}},{key:"updateMeta",value:function(Q){Object.assign(this.meta,Q)}},{key:"getMeta",value:function(){return Object.freeze(r()({},this.meta))}}]),xn}(),an="__base_monaco_editor_controller__",X=H.j&&window;X&&!X[an]&&(X[an]=new U);var hn=X[an],un=function(){var xn,v;return function(){var Q=y()(g()().mark(function B(J){var Sn;return g()().wrap(function(mn){for(;;)switch(mn.prev=mn.next){case 0:if(!(!xn||!(0,M.Z)(v,J))){mn.next=7;break}return Sn=Object.keys(J||{}).length>0,L.Z.config(Sn?J:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),mn.next=5,L.Z.init();case 5:xn=mn.sent,v=J;case 7:return mn.abrupt("return",xn);case 8:case"end":return mn.stop()}},B)}));return function(B){return Q.apply(this,arguments)}}()}(),dn=function(v){return v?L.Z.config(v):L.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),L.Z.init()};function $(xn){var v=Object.keys(xn||{}).length>0,Q=v?xn:void 0;return hn.getMeta().singleton?un(Q):dn(Q)}function l(xn){controller.updateMeta(xn)}var b=H.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",Y=b==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",cn={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},vn={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function q(xn){var v=(0,o.useRef)();return(0,o.useEffect)(function(){v.current=xn},[xn]),v.current}function P(xn,v,Q,B){if(B){var J=xn.editor.getModel(xn.Uri.parse(B));if(J)return J}return xn.editor.createModel(v,Q,B?xn.Uri.parse(B):void 0)}var G=function(v,Q){var B=Q.editorDidMount,J=Q.editorWillMount,Sn=Q.theme,Nn=Q.value,mn=Q.path,qn=Q.language,ce=Q.saveViewState,Qn=Q.defaultValue,Hn=Q.enhancers,Kn=Q.placeholder,zn=(0,o.useState)(!1),pe=E()(zn,2),ae=pe[0],Me=pe[1],ve=(0,o.useState)(!1),In=E()(ve,2),h=In[0],on=In[1],nn=(0,o.useState)(!1),sn=E()(nn,2),Ln=sn[0],jn=sn[1],fe=(0,o.useRef)(Qn),Fn=(0,o.useRef)(Nn),ne=(0,o.useRef)(qn||"text"),On=(0,o.useRef)(mn),An=q(mn),Zn=(0,o.useRef)(Q.requireConfig),ee=(0,o.useRef)(Q.options),Pn=(0,o.useRef)(),Tn=(0,o.useRef)(),Dn=(0,o.useRef)(),xe=(0,o.useRef)(v),Vn=(0,o.useRef)(),ye=(0,o.useRef)(),de=(0,o.useRef)(!1),Re=(0,o.useRef)(new Map),De=(0,o.useRef)({});(0,o.useEffect)(function(){De.current.enhancers=Hn},[Hn]),(0,o.useEffect)(function(){Vn.current=B},[B]),(0,o.useEffect)(function(){ye.current=J},[J]),(0,o.useEffect)(function(){Fn.current=Nn},[Nn]),(0,o.useEffect)(function(){ne.current=qn},[qn]),(0,o.useEffect)(function(){fe.current=Qn},[Qn]),(0,o.useEffect)(function(){jn(!0),$(Zn.current).then(function(Mn){var ie;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Pn.current=Mn;try{var Yn;(Yn=ye.current)===null||Yn===void 0||Yn.call(ye,Mn)}catch(m){}if(Dn.current){var bn;if(xe.current==="single"){var Be,x,s=P(Mn,(Be=(x=Fn.current)!==null&&x!==void 0?x:fe.current)!==null&&Be!==void 0?Be:"",ne.current,On.current);bn=Mn.editor.create(Dn.current,r()(r()({automaticLayout:!0},cn),{},{placeholder:Kn},ee.current)),bn.setModel(s)}else{var a=Mn.editor.createModel(Fn.current,ne.current),e=Mn.editor.createModel(Fn.current,ne.current);bn=Mn.editor.createDiffEditor(Dn.current,r()(r()({automaticLayout:!0},vn),{},{placeholder:Kn},ee.current)),bn.setModel({original:a,modified:e})}Tn.current=bn,(ie=De.current.enhancers)===null||ie===void 0||ie.forEach(function(m){return m(Mn,bn)});try{var i;(i=Vn.current)===null||i===void 0||i.call(Vn,Mn,bn)}catch(m){}de.current||Me(!0)}}).catch(function(Mn){console.error("Monaco Editor Load Error!",Mn)}).then(function(){de.current||jn(!1)})},[]),(0,o.useEffect)(function(){var Mn;ae&&((Mn=Pn.current)===null||Mn===void 0||Mn.editor.setTheme(Sn))},[ae,Sn]),(0,o.useEffect)(function(){if(ae){var Mn=v==="diff"?Tn.current.getModifiedEditor():Tn.current;Mn==null||Mn.onDidFocusEditorText(function(){de.current||on(!0)}),Mn==null||Mn.onDidBlurEditorText(function(){de.current||on(!1)})}},[ae,v]),(0,o.useEffect)(function(){return function(){de.current=!0}},[]),(0,o.useEffect)(function(){var Mn,ie,Yn;if(ae&&!(v!=="diff"&&mn)){var bn=v==="diff"?Tn.current.getModifiedEditor():Tn.current,Be=(Mn=Nn!=null?Nn:fe.current)!==null&&Mn!==void 0?Mn:"",x=(ie=Pn.current)===null||ie===void 0?void 0:ie.editor.EditorOption.readOnly;x&&bn!==null&&bn!==void 0&&(Yn=bn.getOption)!==null&&Yn!==void 0&&Yn.call(bn,x)?bn==null||bn.setValue(Be):Nn!==(bn==null?void 0:bn.getValue())&&(bn==null||bn.executeEdits("",[{range:bn==null?void 0:bn.getModel().getFullModelRange(),text:Be,forceMoveMarkers:!0}]),bn==null||bn.pushUndoStop())}},[ae,mn,v,Nn]),(0,o.useEffect)(function(){var Mn,ie;if(ae&&v!=="diff"&&mn!==An){var Yn=P(Pn.current,(Mn=Fn.current)!==null&&Mn!==void 0?Mn:fe.current,ne.current,mn),bn=Tn.current;Fn.current!==null&&Fn.current!==void 0&&Yn.getValue()!==Fn.current&&Yn.setValue(Fn.current),Yn!==((ie=Tn.current)===null||ie===void 0?void 0:ie.getModel())&&(ce&&Re.current.set(An,bn.saveViewState()),bn.setModel(Yn),ce&&bn.restoreViewState(Re.current.get(mn)))}},[ae,Nn,mn,An,v,ce]);var Fe=Tn;return{isEditorReady:ae,focused:h,loading:Ln,containerRef:Dn,monacoRef:Pn,editorRef:Fe,valueRef:Fn}},R=function(v){var Q=(0,o.useState)(!1),B=E()(Q,2),J=B[0],Sn=B[1],Nn=function(){if(J){Sn(!1),v==null||v.updateOptions(r()(r()({},v==null?void 0:v.getOptions()),{},{minimap:{enabled:!1}})),v==null||v.layout();return}Sn(!0),v==null||v.updateOptions(r()(r()({},v==null?void 0:v.getOptions()),{},{minimap:{enabled:!0}})),v==null||v.layout()};return{isFullScreen:J,fullScreen:Nn}},d=n(53649),O=n.n(d),f=n(3772),F,ln,pn,gn,Wn,Bn,kn,Rn,se,wn,ge,_n=(0,f.kc)(function(xn,v){var Q=xn.css,B=xn.token,J=xn.prefixCls,Sn=v.minimapEnabled,Nn=Sn===void 0?!1:Sn,mn=v.isFullScreen,qn=mn===void 0?!1:mn,ce=v.diff,Qn=ce===void 0?!1:ce,Hn=v.variant,Kn=Hn===void 0?"outlined":Hn,zn=(0,f.F4)(F||(F=O()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),pe=function(){switch(Kn){case"outlined":return B.colorBgBase;case"filled":return B.colorFillTertiary;default:return"transparent"}};return{base:Q(ln||(ln=O()([`
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
            outline: none;
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
      `])),pe(),Kn==="outlined"?B.colorBorder:"transparent",B.borderRadius,Kn==="outlined"?B.colorPrimaryHover:"transparent",Kn==="filled"&&Q(pn||(pn=O()([`
            background-color: `,`;
          `])),B.colorFillSecondary),Kn==="filled"&&Q(gn||(gn=O()([`
            background-color: `,`;
          `])),B.colorBgBase),Kn!=="borderless"&&Q(Wn||(Wn=O()([`
            border-color: `,`;
          `])),B.colorPrimaryActive),qn&&Q(Bn||(Bn=O()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!qn&&Q(kn||(kn=O()([`
              background-color: transparent;
            `]))),B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius,B.borderRadius-1,B.borderRadius-1,B.colorErrorText,B.colorErrorBg),fullScreenBtn:Q(Rn||(Rn=O()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),J,B.colorTextSecondary,qn?Q(se||(se=O()([`
                z-index: 9999;
                right: `,`px;
              `])),Qn?64:138):Q(wn||(wn=O()([`
                right: `,`px;
              `])),Nn||Qn?64:20)),loading:Q(ge||(ge=O()([`
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
      `])),B.fontSizeSM,B.colorTextTertiary,zn)}},{hashPriority:"low"}),Cn=n(52676);function $n(){}var ue=function(v){var Q,B=v.onChange,J=v.onBlur,Sn=v.enableOutline,Nn=v.width,mn=v.height,qn=v.language,ce=v.supportFullScreen,Qn=v.onFullScreenChange,Hn=(0,o.useRef)(B),Kn=(0,o.useRef)(J),zn=G("single",v),pe=zn.isEditorReady,ae=zn.focused,Me=zn.loading,ve=zn.containerRef,In=zn.monacoRef,h=zn.editorRef,on=zn.valueRef,nn=(0,o.useRef)(),sn=(0,o.useRef)(),Ln=R(h==null?void 0:h.current),jn=Ln.isFullScreen,fe=Ln.fullScreen,Fn=_n({isFullScreen:jn,minimapEnabled:(Q=v.options)===null||Q===void 0||(Q=Q.minimap)===null||Q===void 0?void 0:Q.enabled,variant:v.variant}),ne=Fn.cx,On=Fn.styles,An=ne(On.base,v.className,{"ve-focused":ae,"ve-outline":Sn}),Zn=(0,o.useMemo)(function(){return{width:Nn,height:mn}},[Nn,mn]);(0,o.useEffect)(function(){Hn.current=B},[B]),(0,o.useEffect)(function(){Kn.current=J},[J]),(0,o.useEffect)(function(){if(pe){var Pn,Tn,Dn=h.current;(Pn=nn.current)===null||Pn===void 0||Pn.dispose(),nn.current=Dn==null?void 0:Dn.onDidChangeModelContent(function(xe){var Vn,ye=Dn==null||(Vn=Dn.getModel())===null||Vn===void 0?void 0:Vn.getValue();if(on.current!==ye){var de;(de=Hn.current)===null||de===void 0||de.call(Hn,ye,xe)}}),(Tn=sn.current)===null||Tn===void 0||Tn.dispose(),sn.current=Dn==null?void 0:Dn.onDidBlurEditorText(function(xe){var Vn,ye,de=Dn==null||(Vn=Dn.getModel())===null||Vn===void 0?void 0:Vn.getValue();(ye=Kn.current)===null||ye===void 0||ye.call(Kn,de,xe)})}},[h,pe,nn,on]),(0,o.useEffect)(function(){return function(){var Pn,Tn,Dn,xe,Vn=h.current;(Pn=nn.current)===null||Pn===void 0||Pn.dispose(),(Tn=sn.current)===null||Tn===void 0||Tn.dispose(),Vn==null||(Dn=Vn.getModel())===null||Dn===void 0||Dn.dispose(),(xe=h.current)===null||xe===void 0||xe.dispose()}},[h]),(0,o.useEffect)(function(){var Pn;if(pe){var Tn=(Pn=h.current)===null||Pn===void 0?void 0:Pn.getModel();if(Tn){var Dn;(Dn=In.current)===null||Dn===void 0||Dn.editor.setModelLanguage(Tn,qn)}}},[h,pe,qn,In]);var ee=(0,o.useCallback)(function(){Qn==null||Qn(!jn),fe()},[fe,jn,Qn]);return(0,Cn.jsxs)("div",{className:An,style:v.style,children:[Me&&(0,Cn.jsx)("span",{className:ne(On.loading,"loading"),children:Y}),(0,Cn.jsx)("div",{className:"react-monaco-editor-container",ref:ve,style:Zn,children:ce&&(0,Cn.jsx)(S.ZP,{className:On.fullScreenBtn,icon:(0,Cn.jsx)(c.Z,{icon:jn?u.Z:t.Z}),onClick:ee,size:"small",type:"text"})})]})},Ee=function(v){var Q=v.enableOutline,B=v.width,J=v.height,Sn=v.language,Nn=v.onChange,mn=v.original,qn=v.supportFullScreen,ce=v.onFullScreenChange,Qn=(0,o.useRef)(Nn),Hn=G("diff",v),Kn=Hn.isEditorReady,zn=Hn.focused,pe=Hn.loading,ae=Hn.containerRef,Me=Hn.monacoRef,ve=Hn.editorRef,In=Hn.valueRef,h=R(),on=h.isFullScreen,nn=h.fullScreen,sn=_n({isFullScreen:on,diff:!0,variant:v.variant}),Ln=sn.cx,jn=sn.styles,fe=Ln(jn.base,v.className,{"ve-focused":zn,"ve-outline":Q}),Fn=(0,o.useMemo)(function(){return{width:B,height:J}},[B,J]);(0,o.useEffect)(function(){Qn.current=Nn},[Nn]),(0,o.useEffect)(function(){var On;if(Kn){(On=ve.current.getModel())===null||On===void 0||On.original.setValue(mn!=null?mn:"");var An=ve.current.getModel()||{},Zn=An.modified;Zn==null||Zn.onDidChangeContent(function(ee){var Pn=Zn.getValue();if(In.current!==Pn){var Tn;(Tn=Qn.current)===null||Tn===void 0||Tn.call(Qn,Pn,ee)}})}},[ve,Kn,mn,In]),(0,o.useEffect)(function(){return function(){var On,An,Zn;(On=ve.current)===null||On===void 0||(On=On.getModel())===null||On===void 0||(On=On.original)===null||On===void 0||On.dispose(),(An=ve.current)===null||An===void 0||(An=An.getModel())===null||An===void 0||(An=An.modified)===null||An===void 0||An.dispose(),(Zn=ve.current)===null||Zn===void 0||Zn.dispose()}},[ve]),(0,o.useEffect)(function(){var On,An,Zn;if(Kn){var ee=((On=ve.current)===null||On===void 0?void 0:On.getModel())||{},Pn=ee.original,Tn=ee.modified;(An=Me.current)===null||An===void 0||An.editor.setModelLanguage(Pn,Sn),(Zn=Me.current)===null||Zn===void 0||Zn.editor.setModelLanguage(Tn,Sn)}},[ve,Kn,Sn,Me]);var ne=(0,o.useCallback)(function(){ce==null||ce(!on),nn()},[nn,on,ce]);return(0,Cn.jsxs)("div",{className:fe,style:v.style,children:[pe&&(0,Cn.jsx)("span",{className:Ln(jn.loading,"loading"),children:Y}),(0,Cn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:ae,style:Fn,children:qn&&(0,Cn.jsx)(S.ZP,{className:jn.fullScreenBtn,icon:(0,Cn.jsx)(c.Z,{icon:on?u.Z:t.Z}),onClick:ne,size:"small",type:"text"})})]})},W=Object.assign(Ee,{displayName:"DiffMonacoEditor",default:{width:"100%",height:150,defaultValue:"",language:"javascript",options:cn,editorDidMount:$n,editorWillMount:$n,onChange:$n,requireConfig:{}}}),oe=Object.assign(ue,{displayName:"SingleMonacoEditor",default:{width:"100%",height:150,defaultValue:"",language:"javascript",options:cn,editorDidMount:$n,editorWillMount:$n,onChange:$n,requireConfig:{}},MonacoDiffEditor:W}),Ce=null,Oe=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Te=["inlineView","options"],Ne=function(v){var Q=v.type,B=Q===void 0?"single":Q,J=v.editorDidMount,Sn=v.readOnly,Nn=Sn===void 0?!1:Sn,mn=v.lineNumbers,qn=mn===void 0?"on":mn,ce=v.wordWrap,Qn=ce===void 0?"off":ce,Hn=v.contextmenu,Kn=Hn===void 0?!0:Hn,zn=v.theme,pe=v.minimapEnabled,ae=pe===void 0?!1:pe,Me=v.version,ve=Me===void 0?"0.52.2":Me,In=v.requireConfig,h=In===void 0?{}:In,on=v.options,nn=v.className,sn=v.supportFullScreen,Ln=k()(v,Oe),jn=(0,o.useRef)(J);(0,o.useEffect)(function(){jn.current=J},[J]);var fe=(0,I.r)(),Fn=fe.isDarkMode,ne=(0,o.useMemo)(function(){return zn||(Fn?"vs-dark":"vs")},[Fn,zn]),On=(0,o.useState)(),An=E()(On,2),Zn=An[0],ee=An[1],Pn=(0,o.useCallback)(function(Vn,ye){var de;ee(ye),(de=jn.current)===null||de===void 0||de.call(jn,Vn,ye)},[]),Tn=(0,o.useMemo)(function(){var Vn=Object.assign({},on,{readOnly:Nn,lineNumbers:qn,wordWrap:Qn,contextmenu:Kn,minimap:ae===void 0?on==null?void 0:on.minimap:Object.assign({},on==null?void 0:on.minimap,{enabled:ae})});return Zn==null||Zn.updateOptions(Vn),Vn},[on,Nn,qn,Qn,Kn,ae,Zn]),Dn=(0,T.nc)(),xe=(0,o.useMemo)(function(){return Object.assign({},h,{paths:r()({vs:Dn({path:"min/vs",pkg:"monaco-editor",version:ve})},h.paths)})},[Dn,h,ve]);return B!=="diff"?(0,Cn.jsx)(oe,r()({className:nn,editorDidMount:Pn,options:Tn,requireConfig:xe,supportFullScreen:Zn&&sn,theme:ne},Ln)):(0,Cn.jsx)(oe.MonacoDiffEditor,r()({className:nn,editorDidMount:Pn,options:Tn,requireConfig:xe,supportFullScreen:Zn&&sn,theme:ne},Ln))},Ze=function(v){return(0,Cn.jsx)(Ne,r()(r()({},v),{},{type:"single"}))},je=function(v){var Q=v.inlineView,B=Q===void 0?"off":Q,J=v.options,Sn=k()(v,Te);return(0,Cn.jsx)(Ne,r()(r()({options:Object.assign({useInlineViewWhenSpaceIsLimited:B==="on"||B==="auto",renderSideBySide:B==="off"||B==="auto"},J)},Sn),{},{type:"diff"}))}},25777:function(Jn,tn,n){n.d(tn,{W:function(){return hn}});var rn=n(26068),r=n.n(rn),_=n(15558),E=n.n(_),j=n(48305),k=n.n(j),I=n(67825),o=n.n(I),T=n(27046),c=n(60399),S=n(38590),u=n(79214),t=n(82338),H=n(99571),K=n(75271),g=n(53649),p=n.n(g),y=n(3772),L,M,A,Z,C,D=function(dn){switch(dn){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},w=(0,y.kc)(function(un,dn){var $=un.css,l=un.token,b=un.prefixCls,Y=dn.disabled,cn=dn.size,vn=D(cn),q=vn.cardWidth;return{option:$(L||(L=p()([`
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
      `])),l.colorBorder,l.borderRadius,Y?"not-allowed":"pointer",l.padding,l.motionDurationFast,q,Y&&$(M||(M=p()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),l.colorBgContainerDisabled,b,l.colorTextDisabled,b,l.colorTextDisabled),!Y&&$(A||(A=p()([`
          &:hover {
            border-color: `,`;
          }
        `])),l.colorPrimaryBorderHover),b),optionSelected:$(Z||(Z=p()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),l.colorPrimary,l.colorPrimaryActive),check:$(C||(C=p()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),l.marginXS,l.marginXS,l.colorPrimary)}}),N=n(52676),U=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],an=c.Z.Text,X=c.Z.Paragraph,hn=K.forwardRef(function(un,dn){var $=un.defaultValue,l=un.value,b=un.onChange,Y=un.multiple,cn=Y===void 0?!1:Y,vn=un.disabled,q=vn===void 0?!1:vn,P=un.options,G=P===void 0?[]:P,R=un.classNames,d=un.styles,O=un.size,f=O===void 0?"middle":O,F=un.optionRender,ln=o()(un,U),pn=(0,K.useMemo)(function(){return G.some(function(W){return!!W.img||!!W.icon})},[G]),gn=w({disabled:q,size:f}),Wn=gn.cx,Bn=gn.styles,kn=(0,K.useMemo)(function(){return D(f)},[f]),Rn=kn.imgHeight,se=(0,K.useCallback)(function(W){return!cn||Array.isArray(W)?W:W===void 0?[]:[W]},[cn]),wn=(0,H.C8)(se($),{defaultValue:se($),value:l,onChange:b}),ge=k()(wn,2),_n=ge[0],Cn=ge[1],$n=(0,K.useCallback)(function(W){if(!q){if(!cn){Cn(W);return}if(_n.includes(W)){Cn(_n.filter(function(oe){return oe!==W}));return}Cn([].concat(E()(_n),[W]))}},[_n,q,cn,Cn]),ue=(0,K.useCallback)(function(W){return cn?_n.includes(W):_n===W},[_n,cn]),Ee=(0,K.useCallback)(function(W,oe){var Ce=ue(W.value),Oe=(0,N.jsxs)(S.Z,{align:pn?"center":"flex-start",className:Wn(Bn.option,Ce&&Bn.optionSelected,R==null?void 0:R.card),gap:"small",onClick:function(){return $n(W.value)},style:r()(r()({},d==null?void 0:d.card),W.style),vertical:!0,children:[pn&&(0,N.jsx)(u.C,{className:R==null?void 0:R.icon,icon:W.icon,shape:"square",size:Rn,src:W.img,style:r()(r()({},d==null?void 0:d.icon),W.iconStyle)}),W.label&&Ce&&(0,N.jsx)(an,{ellipsis:!0,strong:!0,children:W.label}),W.label&&!Ce&&(0,N.jsx)(an,{ellipsis:!0,children:W.label}),!pn&&W.description&&(0,N.jsx)(X,{ellipsis:{rows:2},type:"secondary",children:W.description}),Ce&&(0,N.jsx)(T.Z,{className:Bn.check,icon:t.Z})]},W.value);return F?F(Oe,W,oe):Oe},[R==null?void 0:R.card,R==null?void 0:R.icon,Wn,Rn,pn,ue,$n,F,Bn.check,Bn.option,Bn.optionSelected,d==null?void 0:d.card,d==null?void 0:d.icon]);return(0,N.jsx)(S.Z,r()(r()({gap:"large",ref:dn,wrap:!0},ln),{},{children:G.map(function(W,oe){return Ee(W,oe)})}))})},66269:function(Jn,tn,n){n.d(tn,{a:function(){return S}});var rn=n(26068),r=n.n(rn),_=n(48305),E=n.n(_),j=n(41546),k=n(29797),I=n(29988),o=n(579),T=n(75271),c=n(52676),S=function(t){var H=t.value,K=t.defaultValue,g=t.min,p=g===void 0?0:g,y=t.max,L=t.step,M=t.gutter,A=M===void 0?16:M,Z=t.sliderCol,C=Z===void 0?{span:12}:Z,D=t.inputCol,w=D===void 0?{span:5}:D,N=t.addonAfter,U=t.addonBefore,an=t.placeholder,X=t.onChange,hn=t.style,un=t.className,dn=t.sliderProps,$=dn===void 0?{}:dn,l=t.inputProps,b=l===void 0?{}:l,Y=(0,T.useState)(),cn=E()(Y,2),vn=cn[0],q=cn[1],P=function(R){Number.isNaN(R)||(q(R),X==null||X(R))};return(0,c.jsxs)(j.Z,{className:un,gutter:A,style:hn,children:[(0,c.jsx)(k.Z,r()(r()({},C),{},{children:(0,c.jsx)(I.Z,r()(r()({},$),{},{defaultValue:K,max:y,min:p,onChange:P,step:L,value:H!=null?H:vn}))})),(0,c.jsx)(k.Z,r()(r()({},w),{},{children:(0,c.jsx)(o.Z,r()(r()({},b),{},{addonAfter:N,addonBefore:U,defaultValue:K,max:y,min:p,onChange:P,placeholder:an,step:L,value:H!=null?H:vn}))}))]})}},56482:function(Jn,tn,n){n.d(tn,{N:function(){return K}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(37805),k=n(75271),I=n(79213),o=n(53649),T=n.n(o),c=n(3772),S,u=(0,c.kc)(function(g){var p=g.css,y=g.token,L=g.prefixCls;return{table:p(S||(S=T()([`
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
    `])),L,y.colorTextTertiary)}}),t=n(52676),H=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],K=function(p){var y=p.rootStyle,L=p.rootClassName,M=p.icon,A=p.title,Z=p.variant,C=p.defaultActive,D=p.extra,w=p.className,N=E()(p,H),U=u(),an=U.cx,X=U.styles;return(0,t.jsx)(I.w,{className:L,style:y,icon:M,title:A,variant:Z,defaultActive:C,extra:D,children:(0,t.jsx)(j.Z,r()({className:an(X.table,w),pagination:!1,rowHoverable:!1,size:"small"},N))})}},11546:function(Jn,tn,n){n.d(tn,{NU:function(){return o.N},iA:function(){return S}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(1718),k=n(37805),I=n(75271),o=n(56482),T=n(52676),c=["columns"],S=function(H){var K=H.columns,g=E()(H,c),p=(0,I.useMemo)(function(){return K==null?void 0:K.map(function(y){if(y.render)return y;if(y.ellipsis&&y.ellipsis!==!0&&y.ellipsis.showTitle||y.ellipsis===!0){var L=y.ellipsis===!0?{}:y.ellipsis;return r()(r()({},y),{},{ellipsis:{showTitle:!1},render:function(A){return A||A===0?(0,T.jsx)(j.Z,r()(r()({},L),{},{placement:"topLeft",title:A,children:A})):"-"}})}return y.render||(y.render=function(M){return M!=null?M:"-"}),y})},[K]);return(0,T.jsx)(k.Z,r()(r()({},g),{},{columns:p}))};S.displayName="Table",S.SELECTION_COLUMN=k.Z.SELECTION_COLUMN,S.EXPAND_COLUMN=k.Z.EXPAND_COLUMN,S.SELECTION_ALL=k.Z.SELECTION_ALL,S.SELECTION_INVERT=k.Z.SELECTION_INVERT,S.SELECTION_NONE=k.Z.SELECTION_NONE,S.Column=k.Z.Column,S.ColumnGroup=k.Z.ColumnGroup,S.Summary=k.Z.Summary,S.Collapse=o.N;var u=null},8559:function(Jn,tn,n){n.d(tn,{G:function(){return K}});var rn=n(53649),r=n.n(rn),_=n(3772),E=n(75271),j=n(52676),k,I,o,T,c,S,u,t,H=(0,_.kc)(function(g,p){var y=g.css,L=(0,_.F4)(k||(k=r()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),M=(0,_.F4)(I||(I=r()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),A=(0,_.F4)(o||(o=r()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:y(T||(T=r()([`
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
    `])),p.lineColor||"#000"),animate1:y(S||(S=r()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),L),animate2:y(u||(u=r()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),M),animate3:y(t||(t=r()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),A)}}),K=function(p){var y=p.height,L=p.width,M=p.lineColor,A=p.bgColor,Z=H({height:y,width:L,lineColor:M,bgColor:A}),C=Z.styles,D=Z.cx;return(0,j.jsxs)("div",{className:C.box,children:[(0,j.jsx)("div",{className:D(C.line,C.animate1)}),(0,j.jsx)("div",{className:D(C.line,C.animate2)}),(0,j.jsx)("div",{className:D(C.line,C.animate3)}),(0,j.jsx)("div",{className:D(C.line,C.animate2)}),(0,j.jsx)("div",{className:D(C.line,C.animate1)}),(0,j.jsx)("div",{className:D(C.line,C.animate2)}),(0,j.jsx)("div",{className:D(C.line,C.animate1)})]})}},71983:function(Jn,tn,n){n.r(tn),n.d(tn,{Affix:function(){return gn.Z},Alert:function(){return K.b},Anchor:function(){return Wn.Z},AntdMentions:function(){return Bn.Z},App:function(){return g.g},AudioPlayer:function(){return Fe.Z},AutoComplete:function(){return kn.Z},Avatar:function(){return Rn.C},BackTop:function(){return se.Z},Badge:function(){return wn.Z},BaseMonacoEditor:function(){return T.ZM},Breadcrumb:function(){return p.Z},Button:function(){return ge.ZP},ButtonGroup:function(){return rn.h},Calendar:function(){return _n.Z},Card:function(){return y.Z},Carousel:function(){return Cn.Z},Cascader:function(){return $n.Z},ChatInputActionBar:function(){return hn.Z},ChatInputArea:function(){return X.Z},ChatInputAreaInner:function(){return un.Z},ChatItem:function(){return b.z},ChatMarkdown:function(){return Y.L},ChatSendButton:function(){return dn.Z},Checkbox:function(){return ue.Z},CodeEditor:function(){return cn.p},Col:function(){return Ee.Z},Collapse:function(){return W.Z},CollapseGroup:function(){return r.w},CollapseTable:function(){return U.NU},ColorPicker:function(){return oe.Z},ConfigContext:function(){return _.E_},ConfigProvider:function(){return _.iV},CopyButton:function(){return ye.Z},DatePicker:function(){return Ce.default},Descriptions:function(){return L.w},Divider:function(){return M.i},DragPanel:function(){return E.U},Drawer:function(){return A.d},Dropdown:function(){return Z.L},EditableMessage:function(){return vn.i},Empty:function(){return Oe.Z},Flex:function(){return Te.Z},FloatButton:function(){return Ne.Z},Form:function(){return C.l},FormCollapseList:function(){return C.E},FormHelper:function(){return D.wK},FullFeaturedHighlighter:function(){return q.EL},Grid:function(){return Ze.ZP},Highlighter:function(){return q.oP},Image:function(){return je.Z},Input:function(){return xn.Z},InputNumber:function(){return v.Z},JsonViewer:function(){return j.h},Layout:function(){return Q.Z},List:function(){return B.Z},LogViewer:function(){return I.n},Logo:function(){return k.T},Markdown:function(){return de.Z},Mentions:function(){return o.o},Menu:function(){return J.Z},MobileChatInputArea:function(){return $.Z},MobileChatSendButton:function(){return l.Z},Modal:function(){return w.u},MonacoController:function(){return T.Hu},MonacoDiffEditor:function(){return T.Xq},MonacoEditor:function(){return T.rE},NotificationGlobalStyle:function(){return N.EZ},Page:function(){return c.T},Pagination:function(){return Nn.Z},Popconfirm:function(){return mn.Z},Popover:function(){return qn.Z},ProCard:function(){return S.Q},Progress:function(){return ce.Z},QRCode:function(){return Qn.Z},Radio:function(){return Hn.ZP},Rate:function(){return Kn.Z},Result:function(){return zn.ZP},Row:function(){return pe.Z},Segmented:function(){return ae.Z},Select:function(){return Me.default},SelectCard:function(){return u.W},Skeleton:function(){return ve.Z},Slider:function(){return In.Z},SliderInput:function(){return t.a},Space:function(){return h.Z},SpeechSynthesisTTS:function(){return De.H},Spin:function(){return on.Z},Statistic:function(){return nn.Z},Status:function(){return H.q},Steps:function(){return sn.Z},Switch:function(){return Ln.Z},SyntaxHighlighter:function(){return Re.Z},Table:function(){return U.iA},Tabs:function(){return jn.Z},Tag:function(){return fe.Z},TimePicker:function(){return On.Z},Timeline:function(){return ne.Z},Tooltip:function(){return An.Z},Tour:function(){return Zn.Z},Transfer:function(){return ee.Z},Tree:function(){return Pn.Z},TreeSelect:function(){return Tn.Z},Typography:function(){return an.Z},Upload:function(){return Dn.Z},Watermark:function(){return Vn.Z},WaveformIcon:function(){return pn.G},colorScales:function(){return P._},colors:function(){return P._},generateColorNeutralPalette:function(){return f},generateColorPalette:function(){return O},message:function(){return Sn.ZP},neutralColorScales:function(){return F},notification:function(){return N.t6},stringify:function(){return j.P},theme:function(){return Fn.Z},useAudioPlayer:function(){return Mn.x},useAutoFocus:function(){return D.wL},useCdnFn:function(){return _.nc},useLink:function(){return _.nB},useResponsive:function(){return Yn.F},useSpeechRecognition:function(){return ie.x},useSpeechSynthes:function(){return ln.J},useTheme:function(){return bn.Fg},useThemeMode:function(){return Be.r},version:function(){return xe.Z},withFormHelper:function(){return D.MX}});var rn=n(12644),r=n(79213),_=n(94456),E=n(13306),j=n(33985),k=n(52625),I=n(25969),o=n(79334),T=n(81321),c=n(40305),S=n(86346),u=n(25777),t=n(66269),H=n(46119),K=n(58479),g=n(5244),p=n(87902),y=n(42938),L=n(26345),M=n(82227),A=n(5795),Z=n(99512),C=n(62719),D=n(20147),w=n(97527),N=n(40130),U=n(11546),an=n(94729),X=n(52412),hn=n(98904),un=n(34757),dn=n(21113),$=n(30542),l=n(57714),b=n(59212),Y=n(99033),cn=n(6381),vn=n(99335),q=n(22435),P=n(15094),G=n(82092),R=n.n(G),d=n(98644),O=function(s){var a=s.type,e=s.scale,i=s.appearance,m=(0,d.Z)(a),z=i==="dark";return R()(R()(R()(R()(R()(R()(R()(R()(R()(R()({},"color".concat(m,"Bg"),e[i][1]),"color".concat(m,"BgHover"),e[i][2]),"color".concat(m,"Border"),e[i][4]),"color".concat(m,"BorderHover"),e[i][z?5:3]),"color".concat(m,"Hover"),e[i][z?10:8]),"color".concat(m),e[i][9]),"color".concat(m,"Active"),e[i][z?7:10]),"color".concat(m,"TextHover"),e[i][z?10:8]),"color".concat(m,"Text"),e[i][9]),"color".concat(m,"TextActive"),e[i][z?7:10])},f=function(s){var a=s.scale,e=s.appearance;return{colorBgContainer:e==="dark"?a[e][1]:a[e][0],colorBgElevated:e==="dark"?a[e][2]:a[e][0],colorBgLayout:e==="dark"?a[e][0]:a[e][1],colorBgMask:a.lightA[8],colorBgSpotlight:a[e][5],colorBorder:a[e][4],colorBorderSecondary:a[e][3],colorFill:a["".concat(e,"A")][3],colorFillQuaternary:a["".concat(e,"A")][0],colorFillSecondary:a["".concat(e,"A")][2],colorFillTertiary:a["".concat(e,"A")][1],colorText:a[e][12],colorTextQuaternary:a[e][6],colorTextSecondary:a[e][10],colorTextTertiary:a[e][8]}},F={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},ln=n(82846),pn=n(8559),gn=n(67142),Wn=n(71477),Bn=n(83491),kn=n(53180),Rn=n(79214),se=n(77582),wn=n(62701),ge=n(22622),_n=n(79771),Cn=n(59153),$n=n(29891),ue=n(10857),Ee=n(29797),W=n(40765),oe=n(68369),Ce=n(20690),Oe=n(66642),Te=n(38590),Ne=n(59251),Ze=n(8208),je=n(61035),xn=n(98829),v=n(579),Q=n(14292),B=n(336),J=n(8377),Sn=n(31826),Nn=n(52969),mn=n(39502),qn=n(4615),ce=n(9192),Qn=n(85959),Hn=n(175),Kn=n(22682),zn=n(10780),pe=n(41546),ae=n(89843),Me=n(98721),ve=n(91488),In=n(29988),h=n(62272),on=n(62023),nn=n(91528),sn=n(60804),Ln=n(51079),jn=n(63020),fe=n(52107),Fn=n(37924),ne=n(70995),On=n(54789),An=n(1718),Zn=n(76326),ee=n(84141),Pn=n(26082),Tn=n(56317),Dn=n(25876),xe=n(3359),Vn=n(79949),ye=n(92946),de=n(27569),Re=n(84254),De=n(49567),Fe=n(30831),Mn=n(2190),ie=n(48481),Yn=n(46092),bn=n(3772),Be=n(71795)},40130:function(Jn,tn,n){n.d(tn,{EZ:function(){return p.E},t6:function(){return un}});var rn=n(26068),r=n.n(rn),_=n(67825),E=n.n(_),j=n(48305),k=n.n(j),I=n(335),o=n.n(I),T=n(30657),c=n(19728),S=n(22620),u=n(40765),t=n(60399),H=n(86468),K=n(75271),g=n(52676),p=n(55300),y=["detail","message","description","onClose","className"],L=u.Z.Panel,M=t.Z.Link,A=t.Z.Paragraph,Z=t.Z.Text,C={},D=function(l,b){C[l]||(C[l]=[]),C[l].push(b)},w=function(l){delete C[l]},N=function $(l){var b="";if(typeof l=="string")b=l;else if(typeof l=="number")b=l.toString();else if(Array.isArray(l)){var Y=o()(l),cn;try{for(Y.s();!(cn=Y.n()).done;){var vn=cn.value;b+=$(vn)}}catch(q){Y.e(q)}finally{Y.f()}}else(0,K.isValidElement)(l)&&(b+=$(l.props.children));return b},U=function(l){var b,Y=l.noticeKey,cn=l.message,vn=((b=C[Y])===null||b===void 0?void 0:b.length)||0;return(0,g.jsxs)(g.Fragment,{children:[cn,vn>1&&" (".concat(vn,")")]})},an=function(l){var b=l.noticeKey,Y=(0,K.useState)(),cn=k()(Y,2),vn=cn[0],q=cn[1],P={},G=o()(C[b]),R;try{for(G.s();!(R=G.n()).done;){var d=R.value,O=N(d.description);d.descKey=O,P[O]=d}}catch(f){G.e(f)}finally{G.f()}return(0,g.jsx)(u.Z,{accordion:!0,activeKey:vn,className:"yunti-notification-collapse",expandIcon:function(F){var ln=F.isActive;return(0,g.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:ln?(0,g.jsx)(M,{className:"yunti-notification-link",children:(0,g.jsx)(T.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,g.jsx)(c.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(F){q(F)},children:Object.values(P).map(function(f){var F=f.descKey,ln=f.description,pn=f.detail;return(0,g.jsx)(L,{header:(0,g.jsx)(Z,{ellipsis:{tooltip:!1},style:{width:250},children:ln}),children:(0,g.jsx)(A,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(pn,null,2)},type:"secondary",children:(0,g.jsx)("pre",{children:JSON.stringify(pn,null,2)})})},F)})})},X=function(l){var b=l.detail,Y=l.message,cn=l.description,vn=l.onClose,q=l.className,P=E()(l,y),G=N(Y);D(G,l);var R=function(){vn==null||vn(),w(G)};return l.type==="warning"&&!l.icon&&(P.icon=(0,g.jsx)(S.Z,{style:{color:"#ff7d00"}})),b?H.ZP.open(r()({key:G,message:(0,g.jsx)(U,{message:Y,noticeKey:G}),description:(0,g.jsx)(an,{noticeKey:G}),onClose:R,className:"yunti-notification ".concat(q)},P)):H.ZP.open(r()({key:G,message:(0,g.jsx)(U,{message:Y,noticeKey:G}),description:cn,onClose:R,className:"yunti-notification ".concat(q)},P))},hn=function(l){var b;if(((l==null||(b=l.errors)===null||b===void 0?void 0:b.length)||0)>0){l!=null&&l.errors;var Y=o()((l==null?void 0:l.errors)||[]),cn;try{for(Y.s();!(cn=Y.n()).done;){var vn=cn.value;X(r()(r()({detail:vn,description:vn.message},l),{},{type:"warning"}))}}catch(q){Y.e(q)}finally{Y.f()}}else X(r()(r()({},l),{},{type:"warning"}))},un=r()(r()({},H.ZP),{},{success:function(l){return X(r()(r()({},l),{},{type:"success"}))},info:function(l){return X(r()(r()({},l),{},{type:"info"}))},warning:function(l){return X(r()(r()({},l),{},{type:"warning"}))},warn:function(l){return X(r()(r()({},l),{},{type:"warning"}))},error:function(l){return X(r()(r()({},l),{},{type:"error"}))},warnings:hn,warns:hn}),dn=null},55300:function(Jn,tn,n){n.d(tn,{E:function(){return k}});var rn=n(53649),r=n.n(rn),_=n(86468),E=n(3772),j,k=(0,E.vJ)(j||(j=r()([`
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
`])),function(I){var o=I.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(I){var o=I.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(I){var o=I.theme;return o==null?void 0:o.colorPrimary},function(I){var o=I.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(I){var o=I.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(I){var o=I.theme,T=o||{},c=T.prefixCls;return _.ZP.config({prefixCls:c}),`
      .`.concat(c,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(c,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(Jn,tn,n){n.d(tn,{j:function(){return rn}});var rn=typeof window!="undefined"}}]);
