"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71983],{58479:function(Gn,rn,n){n.d(rn,{b:function(){return V}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(15183),k=n(75271),Z=n(53649),o=n.n(Z),T=n(3772),v,A=(0,T.kc)(function(p,x){var y=p.css,j=x.bordered,S=j===void 0?"dashed":j;return{custom:y(v||(v=o()([`
        border-style: `,` !important;
      `])),S)}},{hashPriority:"low"}),d=n(52676),t=["bordered","className"],V=function(x){var y=x.bordered,j=y===void 0?"dashed":y,S=x.className,L=M()(x,t),B=A({bordered:j}),C=B.styles,D=B.cx;return(0,d.jsx)(O.Z,e()(e()({},L),{},{className:D(C.custom,S)}))};V.ErrorBoundary=O.Z.ErrorBoundary;var z=null},5244:function(Gn,rn,n){n.d(rn,{g:function(){return v}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(65220),k=n(75271),Z=n(55300),o=n(52676),T=["children"],v=function(t){var V=t.children,z=M()(t,T);return(0,o.jsxs)(O.Z,e()(e()({},z),{},{children:[(0,o.jsx)(Z.E,{}),V]}))};v.useApp=O.Z.useApp;var A=null},52412:function(Gn,rn,n){var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(53649),k=n.n(O),Z=n(84694),o=n(34757),T=n(3772),v=n(75271),A=n(52676),d=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],t,V,z,p=(0,T.kc)(function(y){var j=y.css;return{container:j(t||(t=k()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:j(V||(V=k()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:j(z||(z=k()([`
      position: relative;
      flex: 1;
    `])))}}),x=(0,v.forwardRef)(function(y,j){var S=y.className,L=y.style,B=y.classNames,C=y.expand,D=C===void 0?!0:C,J=y.setExpand,N=y.bottomAddons,$=y.topAddons,an=y.onSizeChange,X=y.heights,yn=y.onSend,sn=M()(y,d),un=p(),Q=un.styles;return(0,A.jsx)(Z.Z,{className:S,classNames:B,fullscreen:D,headerHeight:X==null?void 0:X.headerHeight,maxHeight:X==null?void 0:X.maxHeight,minHeight:X==null?void 0:X.minHeight,onSizeChange:an,placement:"bottom",size:{height:X==null?void 0:X.inputHeight,width:"100%"},style:e()({zIndex:10},L),children:(0,A.jsxs)("section",{className:Q.container,style:{minHeight:X==null?void 0:X.minHeight},children:[$,(0,A.jsx)("div",{className:Q.textareaContainer,children:(0,A.jsx)(o.Z,e()({className:Q.textarea,onSend:function(){yn==null||yn(),J==null||J(!1)},ref:j,type:"pure"},sn))}),N]})})});rn.Z=(0,v.memo)(x)},59212:function(Gn,rn,n){n.d(rn,{z:function(){return I}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(74923),k=n(7136),Z=n(88205),o=n(90510),T=n(46092),v=n(75271),A=n(90142),d=n(53649),t=n.n(d),V=n(3772),z,p,x,y,j,S,L,B,C,D,J,N,$,an,X,yn,sn,un,Q=(0,V.kc)(function(c,P){var g=c.cx,K=c.css,ln=c.token,bn=c.isDarkMode,pn=c.responsive,Fn=P.placement,Rn=P.type,Hn=P.title,Nn=P.primary,ee=P.avatarSize,kn=P.editing,ie=P.time,Yn=P.isLatest,Sn=K(z||(z=t()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),Nn?bn?ln.colorFill:ln.colorBgElevated:bn?ln.colorFillSecondary:ln.colorBgContainer,ln.borderRadiusLG,ln.motionEaseOut),zn=K(p||(p=t()([`
      padding-block-start: `,`;
    `])),Hn?0:"6px"),te=K(x||(x=t()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),ln.motionEaseOut),de=Rn==="block"?Sn:zn,U=kn&&K(y||(y=t()([`
        width: 100%;
      `])));return{actions:g(K(j||(j=t()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),Fn==="left"?"flex-start":"flex-end",Fn==="left"?"flex-end":"flex-start"),kn&&K(S||(S=t()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:K(L||(L=t()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),ee,ee),avatarGroupContainer:K(B||(B=t()([`
        width: `,`px;
      `])),ee),container:g(Rn==="pure"&&te,K(C||(C=t()([`
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
        `])),Yn?"unset":"none",Yn?1:0,ln.motionEaseOut,pn.mobile,Rn==="pure"?"12px":"6px")),editingContainer:g(U,K(D||(D=t()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),ln.colorBorderSecondary,ln.colorBorder),Rn==="pure"&&K(J||(J=t()([`
            background: `,`;
            border-radius: `,`px;
          `])),ln.colorFillQuaternary,ln.borderRadius)),editingInput:K(N||(N=t()([`
        width: 100%;
      `]))),errorContainer:K($||($=t()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:K(an||(an=t()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`
          `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),Fn==="right"?"-4px":"unset",Fn==="left"?"-4px":"unset",ln.colorBgLayout,ln.colorPrimary),message:g(de,K(X||(X=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),pn.mobile)),messageContainer:g(U,K(yn||(yn=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),ie?-16:0,pn.mobile)),messageContent:g(U,K(sn||(sn=t()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),pn.mobile)),messageExtra:g("message-extra"),name:K(un||(un=t()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),ln.colorTextDescription,Fn==="left"?"left":"right")}}),l=n(52676),b=(0,v.memo)(function(c){var P=c.actions,g=c.placement,K=c.type,ln=c.editing,bn=Q({editing:ln,placement:g,type:K}),pn=bn.styles;return(0,l.jsx)(A.D,{align:"flex-start",className:pn.actions,role:"menubar",children:P})}),Y=b,dn=n(99335),fn=(0,v.memo)(function(c){var P=c.editing,g=c.onChange,K=c.onEditingChange,ln=c.text,bn=c.message,pn=c.placement,Fn=c.messageExtra,Rn=c.renderMessage,Hn=c.type,Nn=c.primary,ee=c.onDoubleClick,kn=c.fontSize,ie=c.markdownProps,Yn=c.markdownClassname,Sn=Q({editing:P,placement:pn,primary:Nn,type:Hn}),zn=Sn.cx,te=Sn.styles,de=(0,T.F)(),U=de.mobile,wn=(0,l.jsx)(dn.i,{classNames:{input:te.editingInput,markdown:Yn},editButtonSize:"small",editing:P,fontSize:kn,fullFeaturedCodeBlock:!0,markdownProps:ie,onChange:g,onEditingChange:K,openModal:U?P:void 0,text:ln,value:bn?String(bn).trim():""}),ce=Rn?Rn(wn):wn;return(0,l.jsxs)(A.D,{className:zn(te.message,P&&te.editingContainer),onDoubleClick:ee,children:[ce,Fn&&!P?(0,l.jsx)("div",{className:te.messageExtra,children:Fn}):null]})}),en=fn,R=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","affixation","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest"],G=32,I=(0,v.memo)(function(c){var P=c.avatarAddon,g=c.onAvatarClick,K=c.avatarProps,ln=c.actions,bn=c.className,pn=c.primary,Fn=c.loading,Rn=c.message,Hn=c.placement,Nn=Hn===void 0?"left":Hn,ee=c.type,kn=ee===void 0?"block":ee,ie=c.avatar,Yn=c.error,Sn=c.showTitle,zn=c.time,te=c.editing,de=c.onChange,U=c.onEditingChange,wn=c.messageExtra,ce=c.affixation,Me=c.renderMessage,Le=c.text,Pe=c.errorMessage,Ne=c.onDoubleClick,be=c.fontSize,En=c.markdownProps,m=c.markdownClassname,H=c.isLatest,F=M()(c,R),_=(0,T.F)(),An=_.mobile,On=Q({editing:te,placement:Nn,primary:pn,showTitle:Sn,time:zn,title:ie.title,type:kn,isLatest:H}),gn=On.cx,Jn=On.styles;return(0,l.jsxs)(A.D,e()(e()({className:gn(Jn.container,bn),direction:Nn==="left"?"horizontal":"horizontal-reverse",gap:An?6:12},F),{},{children:[(0,l.jsx)(O.Z,e()(e()({},K),{},{addon:P,avatar:ie,loading:Fn,onClick:g,placement:Nn,size:An?G:void 0})),(0,l.jsxs)(A.D,{align:Nn==="left"?"flex-start":"flex-end",className:Jn.messageContainer,children:[(0,l.jsx)(o.Z,{avatar:ie,placement:Nn,showTitle:Sn,time:zn}),(0,l.jsxs)(A.D,{align:Nn==="left"?"flex-start":"flex-end",className:Jn.messageContent,direction:"vertical",gap:8,children:[Yn?(0,l.jsx)(Z.Z,{error:Yn,message:Pe,placement:Nn}):(0,l.jsx)(en,{editing:te,fontSize:be,markdownClassname:m,markdownProps:En,message:Rn,messageExtra:wn,onChange:de,onDoubleClick:Ne,onEditingChange:U,placement:Nn,primary:pn,renderMessage:Me,text:Le,type:kn}),ce?(0,l.jsx)("div",{className:"affixation",children:ce}):null,(0,l.jsx)(Y,{actions:ln,editing:te,placement:Nn,type:kn})]})]}),An&&kn==="block"&&(0,l.jsx)(k.Z,{borderSpacing:G})]}))})},99033:function(Gn,rn,n){n.d(rn,{L:function(){return fn}});var on=n(15558),e=n.n(on),nn=n(26068),M=n.n(nn),O=n(67825),k=n.n(O),Z=n(27569),o=n(75271),T=n(48305),v=n.n(T),A=n(53649),d=n.n(A),t=n(27046),V=n(3772),z=n(1216),p=n(97601),x=n(68537),y=n(90142),j=n(52676),S,L,B=(0,V.kc)(function(en){var R=en.css,G=en.token,I=en.isDarkMode;return{container:R(S||(S=d()([`
    padding-block: 12px;
    color: `,`;
  `])),G.colorTextSecondary),titlebox:R(L||(L=d()([`
    cursor: pointer;

    min-width: 140px;
    max-width: 230px;
    padding: 8px 12px;

    font-size: 12px;
    color: `,`;

    background: `,`;
    border-radius: 8px;
  `])),G.colorText,I?G.colorFillTertiary:"#f3f5fc")}}),C={fontSize:13,lineHeight:1.625,headerMultiple:.2,marginMultiple:.6},D=(0,o.memo)(function(en){var R=en.children,G=en.second,I=en.done,c=B(),P=c.styles,g=c.theme,K=(0,o.useState)(!0),ln=v()(K,2),bn=ln[0],pn=ln[1];return(0,j.jsxs)(y.D,{className:P.container,children:[(0,j.jsxs)(y.D,{className:P.titlebox,distribution:"space-between",flex:1,horizontal:!0,onClick:function(){pn(!bn)},children:[(0,j.jsxs)(y.D,{gap:8,horizontal:!0,children:[(0,j.jsx)(t.Z,{color:g.purple,icon:z.Z}),I?"\u5DF2\u6DF1\u5EA6\u601D\u8003".concat(G?"\uFF08\u7528\u65F6 "+G+" s\uFF09":""," "):"\u601D\u8003\u4E2D..."]}),(0,j.jsx)(t.Z,{icon:bn?p.Z:x.Z})]}),bn&&(0,j.jsx)(Z.Z,M()(M()({},C),{},{children:R}))]})}),J=D,N=n(25709),$=function(){return function(R){(0,N.Vn)(R,"element",function(G,I,c){if(G.type==="element"&&G.tagName==="p"){var P=G.children||[],g=P.findIndex(function(pn){return pn.type==="raw"&&pn.value==="<think>"}),K=P.findIndex(function(pn){return pn.type==="raw"&&pn.value==="</think>"});if(g!==-1&&K!==-1&&K>g){var ln=P.slice(g+1,K),bn={children:ln,properties:{},tagName:"think",type:"element"};return c.children.splice(I,1,bn),I}}})}},an=$,X=n(49827),yn=n(34505),sn=function(){return function(R){(0,N.Vn)(R,"html",function(G,I,c){if(G.value==="<think>"){for(var P=I,g=P+1,K=!1;g<c.children.length;){var ln=c.children[g];if(ln.type==="html"&&ln.value==="</think>"){K=!0;break}g++}var bn=K?g-P+1:c.children.length-P,pn=c.children.slice(P+1,K?g:void 0),Fn=pn.map(function(Hn){return Hn.type==="paragraph"?Hn.children.map(function(Nn){return Nn.value}).join(""):(0,X.x)(Hn)}).join(`

`).trim(),Rn={data:{hChildren:[{type:"text",value:Fn||" "}],hName:"think"},position:G.position,type:"thinkBlock"};return c.children.splice(P,bn,Rn),[yn.AM,P+1]}})}},un={Component:J,rehypePlugin:an,remarkPlugins:sn,tag:"think"},Q=un,l=[Q],b=function(R){var G=new RegExp("([^\\n])\\s*<think>","g"),I=new RegExp("<think>\\s*([^\\n])","g"),c=new RegExp("([^\\n])\\s*<\\/think>","g"),P=new RegExp("<\\/think>\\s*([^\\n])","g"),g=new RegExp("\\n{3,}","g");return(R||"").replaceAll(G,`$1

<think>`).replaceAll(I,`<think>

$1`).replaceAll(c,`$1

</think>`).replaceAll(P,`</think>

$1`).replaceAll(g,`

`)},Y=["components","remarkPlugins","customComponentProps","children"],dn=l.map(function(en){return en.remarkPlugins}),fn=function(R){var G=R.components,I=G===void 0?{}:G,c=R.remarkPlugins,P=c===void 0?[]:c,g=R.customComponentProps,K=R.children,ln=k()(R,Y),bn=(0,o.useMemo)(function(){var Fn=Object.fromEntries(l.map(function(Rn){return[Rn.tag,function(Hn){return(0,j.jsx)(Rn.Component,M()(M()({},Hn),g==null?void 0:g[Rn.tag]))}]}));return M()(M()({},Fn),I)},[I,g]),pn=(0,o.useMemo)(function(){return[].concat(e()(dn),e()(P))},[P]);return(0,j.jsx)(Z.Z,M()(M()({components:bn,remarkPlugins:pn},ln),{},{children:b(K)}))}},6381:function(Gn,rn,n){n.d(rn,{p:function(){return l}});var on=n(26068),e=n.n(on),nn=n(48305),M=n.n(nn),O=n(67825),k=n.n(O),Z=n(75271),o=n(90142),T=n(90858),v=typeof window!="undefined"&&"navigator"in window&&/(mac|iphone|ipod|ipad)/i.test(navigator.platform),A=n(53649),d=n.n(A),t=n(3772),V=n(69708),z,p,x,y,j,S=(0,t.kc)(function(b,Y){var dn=b.cx,fn=b.css,en=b.token,R=Y.variant,G=Y.fontSize,I=(0,V.Z)(G)?"".concat(G,"px"):G,c=fn(z||(z=d()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border: 1px solid `,`;
      border-radius: `,`px;
    `])),R==="block"?en.colorFillTertiary:"transparent",R==="block"?"transparent":en.colorBorderSecondary,en.borderRadius);return{container:dn(R!=="pure"&&c,fn(p||(p=d()([`
          position: relative;
          overflow: hidden auto;
          width: 100%;
        `])))),editor:fn(x||(x=d()([`
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
      `])),en.fontFamilyCode,I),highlight:fn(y||(y=d()([`
        pointer-events: none;

        pre,
        code {
          overflow: hidden;
        }
      `]))),textarea:fn(j||(j=d()([`
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
      `])),en.colorText,en.colorTextQuaternary)}}),L=n(52676),B=["autoFocus","disabled","form","classNames","styles","ignoreTabKey","insertSpaces","maxLength","minLength","onBlur","onClick","onFocus","onKeyDown","onKeyUp","onValueChange","placeholder","readOnly","required","style","className","tabSize","textareaId","value","language","fontSize","variant"],C=89,D=90,J=77,N=57,$=219,an=222,X=192,yn=100,sn=3e3,un=typeof window!="undefined"&&"navigator"in window&&/win/i.test(navigator.platform),Q=function(Y,dn){return Y.slice(0,Math.max(0,dn)).split(`
`)},l=(0,Z.forwardRef)(function(b,Y){var dn=b.autoFocus,fn=b.disabled,en=b.form,R=b.classNames,G=R===void 0?{}:R,I=b.styles,c=I===void 0?{}:I,P=b.ignoreTabKey,g=P===void 0?!1:P,K=b.insertSpaces,ln=K===void 0?!0:K,bn=b.maxLength,pn=b.minLength,Fn=b.onBlur,Rn=b.onClick,Hn=b.onFocus,Nn=b.onKeyDown,ee=b.onKeyUp,kn=b.onValueChange,ie=b.placeholder,Yn=b.readOnly,Sn=b.required,zn=b.style,te=b.className,de=b.tabSize,U=de===void 0?2:de,wn=b.textareaId,ce=b.value,Me=b.language,Le=b.fontSize,Pe=Le===void 0?12:Le,Ne=b.variant,be=Ne===void 0?"ghost":Ne,En=k()(b,B),m=S({fontSize:Pe,variant:be}),H=m.styles,F=m.cx,_=(0,Z.useRef)({offset:-1,stack:[]}),An=(0,Z.useRef)(null),On=(0,Z.useState)(!0),gn=M()(On,2),Jn=gn[0],re=gn[1],Pn=(0,Z.useCallback)(function(Tn){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,mn=_.current,tn=mn.stack,cn=mn.offset;if(tn.length>0&&cn>-1){_.current.stack=tn.slice(0,cn+1);var Ln=_.current.stack.length;if(Ln>yn){var Dn=Ln-yn;_.current.stack=tn.slice(Dn,Ln),_.current.offset=Math.max(_.current.offset-Dn,0)}}var $n=Date.now();if(E){var Cn=_.current.stack[_.current.offset];if(Cn&&$n-Cn.timestamp<sn){var xn,hn,Bn,In=/[^\da-z]([\da-z]+)$/i,Un=(xn=Q(Cn.value,Cn.selectionStart).pop())===null||xn===void 0?void 0:xn.match(In),Qn=(hn=Q(Tn.value,Tn.selectionStart).pop())===null||hn===void 0?void 0:hn.match(In);if(Un!=null&&Un[1]&&Qn!==null&&Qn!==void 0&&(Bn=Qn[1])!==null&&Bn!==void 0&&Bn.startsWith(Un[1])){_.current.stack[_.current.offset]=e()(e()({},Tn),{},{timestamp:$n});return}}}_.current.stack.push(e()(e()({},Tn),{},{timestamp:$n})),_.current.offset++},[]),Xn=(0,Z.useCallback)(function(){var Tn=An.current;if(Tn){var E=Tn.value,mn=Tn.selectionStart,tn=Tn.selectionEnd;Pn({selectionEnd:tn,selectionStart:mn,value:E})}},[Pn]),oe=function(E){var mn=An.current;mn&&(mn.value=E.value,mn.selectionStart=E.selectionStart,mn.selectionEnd=E.selectionEnd,kn==null||kn(E.value))},_n=function(E){var mn=An.current,tn=_.current.stack[_.current.offset];tn&&mn&&(_.current.stack[_.current.offset]=e()(e()({},tn),{},{selectionEnd:mn.selectionEnd,selectionStart:mn.selectionStart})),Pn(E),oe(E)},qn=function(){var E=_.current,mn=E.stack,tn=E.offset,cn=mn[tn-1];cn&&(oe(cn),_.current.offset=Math.max(tn-1,0))},se=function(){var E=_.current,mn=E.stack,tn=E.offset,cn=mn[tn+1];cn&&(oe(cn),_.current.offset=Math.min(tn+1,mn.length-1))},Zn=function(E){if(!(Nn&&(Nn(E),E.defaultPrevented))){E.key==="Escape"&&E.currentTarget.blur();var mn=E.currentTarget,tn=mn.value,cn=mn.selectionStart,Ln=mn.selectionEnd,Dn=(ln?" ":"	").repeat(U),$n=un?E.ctrlKey&&E.keyCode===C:E.ctrlKey&&E.keyCode===D&&E.shiftKey;if(E.key==="Tab"&&!g&&Jn)if(E.preventDefault(),E.shiftKey){var Cn=Q(tn,cn),xn=Cn.length-1,hn=Q(tn,Ln).length-1,Bn=tn.split(`
`).map(function(a,i){return i>=xn&&i<=hn&&a.startsWith(Dn)?a.slice(Dn.length):a}).join(`
`);if(tn!==Bn){var In=Cn[xn];_n({selectionEnd:Ln-(tn.length-Bn.length),selectionStart:In!=null&&In.startsWith(Dn)?cn-Dn.length:cn,value:Bn})}}else if(cn===Ln){var Un=cn+Dn.length;_n({selectionEnd:Un,selectionStart:Un,value:tn.slice(0,Math.max(0,cn))+Dn+tn.slice(Math.max(0,Ln))})}else{var Qn=Q(tn,cn),me=Qn.length-1,je=Q(tn,Ln).length-1,Ee=Qn[me];_n({selectionEnd:Ln+Dn.length*(je-me+1),selectionStart:Ee&&/\S/.test(Ee)?cn+Dn.length:cn,value:tn.split(`
`).map(function(a,i){return i>=me&&i<=je?Dn+a:a}).join(`
`)})}else if(E.key==="Backspace"){var he=cn!==Ln,pe=tn.slice(0,Math.max(0,cn));if(pe.endsWith(Dn)&&!he){E.preventDefault();var Ce=cn-Dn.length;_n({selectionEnd:Ce,selectionStart:Ce,value:tn.slice(0,Math.max(0,cn-Dn.length))+tn.slice(Math.max(0,Ln))})}}else if(E.key==="Enter"){if(cn===Ln){var Oe=Q(tn,cn).pop(),Te=Oe==null?void 0:Oe.match(/^\s+/);if(Te!=null&&Te[0]){E.preventDefault();var jn=`
`+Te[0],fe=cn+jn.length;_n({selectionEnd:fe,selectionStart:fe,value:tn.slice(0,Math.max(0,cn))+jn+tn.slice(Math.max(0,Ln))})}}}else if(E.keyCode===N||E.keyCode===$||E.keyCode===an||E.keyCode===X){var ne;E.keyCode===N&&E.shiftKey?ne=["(",")"]:E.keyCode===$?ne=E.shiftKey?["{","}"]:["[","]"]:E.keyCode===an?ne=E.shiftKey?['"','"']:["'","'"]:E.keyCode===X&&!E.shiftKey&&(ne=["`","`"]),cn!==Ln&&ne&&(E.preventDefault(),_n({selectionEnd:Ln+2,selectionStart:cn,value:tn.slice(0,Math.max(0,cn))+ne[0]+tn.substring(cn,Ln)+ne[1]+tn.slice(Math.max(0,Ln))}))}else(v?E.metaKey&&E.keyCode===D:E.ctrlKey&&E.keyCode===D)&&!E.shiftKey&&!E.altKey?(E.preventDefault(),qn()):(v?E.metaKey&&E.keyCode===D&&E.shiftKey:$n)&&!E.altKey?(E.preventDefault(),se()):E.keyCode===J&&E.ctrlKey&&(!v||E.shiftKey)&&(E.preventDefault(),re(function(a){return!a}))}},ve=function(E){var mn=E.currentTarget,tn=mn.value,cn=mn.selectionStart,Ln=mn.selectionEnd;Pn({selectionEnd:Ln,selectionStart:cn,value:tn},!0),kn(tn)};return(0,Z.useEffect)(function(){Xn()},[Xn]),(0,Z.useImperativeHandle)(Y,function(){return{get session(){return{history:_.current}},set session(Tn){_.current=Tn.history}}},[]),(0,L.jsx)(o.D,e()(e()({className:F(H.container,te),style:zn},En),{},{children:(0,L.jsxs)("div",{className:H.editor,children:[(0,L.jsx)(T.d,{className:F(H.highlight,G==null?void 0:G.highlight),language:Me,style:c.highlight,children:ce}),(0,L.jsx)("textarea",{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",autoFocus:dn,className:F(H.textarea,G==null?void 0:G.textarea),"data-gramm":!1,disabled:fn,form:en,id:wn,maxLength:bn,minLength:pn,onBlur:Fn,onChange:ve,onClick:Rn,onFocus:Hn,onKeyDown:Zn,onKeyUp:ee,placeholder:ie,readOnly:Yn,ref:function(E){return An.current=E},required:Sn,spellCheck:!1,style:e()({},c==null?void 0:c.textarea),value:ce})]})}))})},13306:function(Gn,rn,n){n.d(rn,{U:function(){return J}});var on=n(26068),e=n.n(on),nn=n(48305),M=n.n(nn),O=n(67825),k=n.n(O),Z=n(97157),o=n(94388),T=n(38590),v=n(22622),A=n(75271),d=n(84569),t=n.n(d),V=n(53649),z=n.n(V),p=n(3772),x,y,j,S,L,B=(0,p.kc)(function(N){var $=N.css,an=N.token,X=N.prefixCls;return{root:$(x||(x=z()([`
      overflow: hidden;
    `]))),wrapper:$(y||(y=z()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),an.marginLG),content:$(j||(j=z()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),an.borderRadiusLG,an.boxShadowSecondary),dragWrapper:$(S||(S=z()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:$(L||(L=z()([`
      cursor: move;
    `])))}}),C=n(52676),D=["title","classNames","defaultPosition","onPositionChange"],J=(0,A.memo)(function(N){var $=N.title,an=N.classNames,X=an===void 0?{}:an,yn=N.defaultPosition,sn=N.onPositionChange,un=k()(N,D),Q=B(),l=Q.styles,b=Q.cx,Y=(0,A.useState)({left:0,top:0,bottom:0,right:0}),dn=M()(Y,2),fn=dn[0],en=dn[1],R=(0,A.useRef)(null),G=function(c,P){var g,K=window.document.documentElement,ln=K.clientWidth,bn=K.clientHeight,pn=(g=R.current)===null||g===void 0?void 0:g.getBoundingClientRect();pn&&en({left:-pn.left+P.x,right:ln-(pn.right-P.x),top:-pn.top+P.y,bottom:bn-(pn.bottom-P.y)})};return(0,C.jsx)(o.Z,e()(e()({},un),{},{classNames:e()(e()({},X),{},{wrapper:b(l.wrapper,X.wrapper),content:b(l.content,X.content)}),destroyOnClose:!0,drawerRender:function(c){return(0,C.jsx)(t(),{bounds:fn,defaultPosition:yn,handle:".".concat(l.dragHandle),nodeRef:R,onStart:function(g,K){return G(g,K)},onStop:function(g,K){sn==null||sn({x:K.x,y:K.y})},children:(0,C.jsx)("div",{className:l.dragWrapper,ref:R,children:c})})},mask:!1,rootClassName:l.root,title:(0,C.jsxs)(T.Z,{align:"center",className:l.dragHandle,children:[(0,C.jsx)(T.Z,{flex:2,children:$}),(0,C.jsx)(T.Z,{children:(0,C.jsx)(v.ZP,{className:l.dragHandle,icon:(0,C.jsx)(Z.Z,{}),type:"text"})})]})}))})},5795:function(Gn,rn,n){n.d(rn,{d:function(){return p}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(94388),k=n(75271),Z=n(53649),o=n.n(Z),T=n(3772),v,A,d,t=(0,T.kc)(function(y,j){var S=y.css,L=y.prefixCls,B=j.closeIcon,C=j.closeIconPlacement,D=j.extra,J=S(v||(v=o()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),L,L,!(B===null||B===!1)&&S(A||(A=o()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),L));return{custom:S(d||(d=o()([`
        `,`
      `])),(!C||C==="right"||C==="auto"&&!D)&&J)}},{hashPriority:"low"}),V=n(52676),z=["className"],p=function(j){var S=j.className,L=M()(j,z),B=t(L),C=B.styles,D=B.cx;return(0,V.jsx)(O.Z,e()(e()({},L),{},{className:D(C.custom,S)}))},x=null},99512:function(Gn,rn,n){n.d(rn,{L:function(){return j}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(38590),k=n(159),Z=n(75271),o=n(53649),T=n.n(o),v=n(3772),A,d,t,V,z=(0,v.kc)(function(S,L){var B=S.css,C=S.token,D=L.divider,J=L.position;return{menuWrapper:B(A||(A=T()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),C.colorBgElevated,C.borderRadiusLG,C.boxShadowSecondary),menuExtra:B(d||(d=T()([`
        padding: 10px 16px 4px;
        `,`
      `])),D&&B(J==="top"?t||(t=T()([`
              border-bottom: 1px solid `,`;
            `])):V||(V=T()([`
              border-top: 1px solid `,`;
            `])),C.colorSplit))}}),p=n(52676),x=["menuExtra","dropdownRender"],y=function(L){var B=L.menuExtra,C=L.dropdownRender,D=M()(L,x),J=B||{},N=J.position,$=N===void 0?"top":N,an=J.divider,X=an===void 0?!1:an,yn=J.content,sn=z({divider:X,position:$}),un=sn.styles,Q=(0,Z.useCallback)(function(l){var b=Z.cloneElement(l,{style:{boxShadow:"none",border:"none"}});if(!yn)return C?(0,p.jsx)(O.Z,{className:un.menuWrapper,vertical:!0,children:C(b)}):l;var Y=(0,p.jsx)(O.Z,{align:"center",className:un.menuExtra,children:yn});return(0,p.jsxs)(O.Z,{className:un.menuWrapper,vertical:!0,children:[$==="top"&&Y,b,$==="bottom"&&Y]})},[yn,C,$,un.menuExtra,un.menuWrapper]);return(0,p.jsx)(k.Z,e()({dropdownRender:Q},D))},j=y;j.Button=k.Z.Button},99335:function(Gn,rn,n){n.d(rn,{i:function(){return A}});var on=n(26068),e=n.n(on),nn=n(48305),M=n.n(nn),O=n(57919),k=n(28281),Z=n(75271),o=n(65720),T=n(99033),v=n(52676),A=(0,Z.memo)(function(d){var t=d.value,V=d.onChange,z=d.classNames,p=z===void 0?{}:z,x=d.onEditingChange,y=d.editing,j=d.openModal,S=d.onOpenChange,L=d.placeholder,B=d.showEditWhenEmpty,C=B===void 0?!1:B,D=d.styles,J=d.height,N=d.inputType,$=d.editButtonSize,an=d.text,X=d.fullFeaturedCodeBlock,yn=d.model,sn=d.fontSize,un=d.markdownProps,Q=(0,o.Z)(!1,{onChange:x,value:y}),l=M()(Q,2),b=l[0],Y=l[1],dn=(0,o.Z)(!1,{onChange:S,value:j}),fn=M()(dn,2),en=fn[0],R=fn[1],G=J==="auto",I=(0,v.jsx)(O.Z,{className:p==null?void 0:p.input,classNames:{textarea:p==null?void 0:p.textarea},defaultValue:t,editButtonSize:$,height:J,onCancel:function(){return Y(!1)},onConfirm:function(P){V==null||V(P),Y(!1)},placeholder:L,style:D==null?void 0:D.input,text:an,textareaClassname:p==null?void 0:p.input,type:N});return!t&&C?I:(0,v.jsxs)(v.Fragment,{children:[!en&&b?I:(0,v.jsx)(T.L,e()(e()({className:p==null?void 0:p.markdown,fontSize:sn,fullFeaturedCodeBlock:X,style:e()({height:G?"unset":J},D==null?void 0:D.markdown),variant:"chat"},un),{},{children:t||L||""})),en&&(0,v.jsx)(k.Z,{editing:b,extra:yn==null?void 0:yn.extra,footer:yn==null?void 0:yn.footer,height:J,onChange:V,onEditingChange:Y,onOpenChange:function(P){R(P),Y(!1)},open:en,placeholder:L,text:an,value:t})]})})},14866:function(Gn,rn,n){n.d(rn,{w:function(){return o}});var on=n(48305),e=n.n(on),nn=n(75271),M=function(v){return typeof v=="string"?document.querySelector("#".concat(v)):(v==null?void 0:v.current)||v},O=":not([disabled]):not([readonly])",k=["text","password","search","tel","url","number","email",""].map(function(T){return'input[type="'.concat(T,'"]').concat(O)}).join(", ")+", input:not([type])".concat(O,", textarea").concat(O),Z=function(v){var A,d=M(v);if(d){var t=(A=d.querySelector)===null||A===void 0?void 0:A.call(d,k);if(t!=null&&t.focus)return t.focus(),!0}},o=function(v){var A=(0,nn.useState)(!1),d=e()(A,2),t=d[0],V=d[1];nn.useEffect(function(){if(!(t||!v)){var z=Z(v);z&&V(!0)}},[v,t,V])}},20147:function(Gn,rn,n){n.d(rn,{MX:function(){return Z},wK:function(){return k},wL:function(){return M.w}});var on=n(26068),e=n.n(on),nn=n(75271),M=n(14866),O=n(52676),k=function(T){var v,A=T.autoFocus,d=A===void 0?!0:A,t=(0,nn.useRef)(null);return(0,M.w)(d?t:void 0),(0,O.jsx)("div",{className:T.className,id:T.id,ref:t,style:(v=T.style)!==null&&v!==void 0?v:{display:T.className?void 0:"contents"},children:T.children})},Z=function(T){return function(v){var A=function(V){return(0,O.jsx)(k,e()(e()({},T||{}),{},{children:(0,O.jsx)(v,e()({},V))}))},d=v.displayName||v.name||"Component";return A.displayName="withFormHelper(".concat(d,")"),A}}},25969:function(Gn,rn,n){n.d(rn,{n:function(){return D}});var on=n(26068),e=n.n(on),nn=n(48305),M=n.n(nn),O=n(67825),k=n.n(O),Z=n(27046),o=n(50999),T=n(41117),v=n(45798),A=n(3548),d=n(5312),t=n(75271),V=n(53649),z=n.n(V),p=n(3772),x,y,j,S,L=(0,p.kc)(function(J){var N=J.css,$=J.token,an="#222222";return{root:N(x||(x=z()([`
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
      `])),an,$.borderRadiusLG,$.marginXXS,$.paddingXS,an,$.borderRadiusLG,$.borderRadiusLG,$.borderRadius,$.borderRadius,an,$.borderRadiusLG,$.fontFamilyCode),searchBarIcon:N(y||(y=z()([`
        font-size: 16px;
      `]))),loaderText:N(j||(j=z()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),$.fontFamilyCode),loaderIcon:N(S||(S=z()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),$.marginSM,$.marginSM)}},{hashPriority:"low"}),B=n(52676),C=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],D=function(N){var $=N.className,an=N.id,X=N.style,yn=N.height,sn=N.onScroll,un=N.url,Q=N.websocket,l=N.refreshInterval,b=N.onLoad,Y=N.onError,dn=k()(N,C),fn=L(),en=fn.cx,R=fn.styles,G=(0,t.useState)(0),I=M()(G,2),c=I[0],P=I[1],g=(0,t.useState)(!1),K=M()(g,2),ln=K[0],bn=K[1],pn=(0,t.useState)(!1),Fn=M()(pn,2),Rn=Fn[0],Hn=Fn[1],Nn=(0,t.useRef)(),ee=(0,t.useRef)();(0,t.useEffect)(function(){return function(){clearTimeout(Nn.current),clearTimeout(ee.current)}},[]),(0,t.useEffect)(function(){var Sn;return un&&!Q&&l&&(Sn=setInterval(function(){P(function(zn){return zn+1})},l)),function(){clearInterval(Sn)}},[l,un,Q]);var kn=(0,t.useMemo)(function(){return un&&(Nn.current=setTimeout(function(){bn(!0),Nn.current=void 0},50),"".concat(un,"#").concat(c))},[un,c]),ie=(0,t.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(Nn.current),bn(!1),Hn(!0),ee.current=setTimeout(function(){return Hn(!1)},100),b==null||b()},[b]),Yn=(0,t.useCallback)(function(Sn){bn(!1),clearTimeout(Nn.current),Y==null||Y(Sn)},[Y]);return(0,B.jsxs)("div",{className:en(R.root,$),id:an,style:e()({height:yn},X),children:[(0,B.jsx)(o.Uu,{render:function(zn){var te=zn.follow,de=zn.onScroll;return(0,B.jsx)(o.A9,e()(e()({url:kn,websocket:Q},dn),{},{follow:Rn||te,height:yn,iconFilterLines:(0,B.jsx)(Z.Z,{className:R.searchBarIcon,icon:T.Z}),iconFindNext:(0,B.jsx)(Z.Z,{className:R.searchBarIcon,icon:v.Z}),iconFindPrevious:(0,B.jsx)(Z.Z,{className:R.searchBarIcon,icon:A.Z}),onError:Yn,onLoad:ie,onScroll:function(wn){de(wn),sn==null||sn(wn)}}))},startFollowing:!0}),ln&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{className:R.loaderText,children:"loading ..."}),(0,B.jsx)(Z.Z,{className:R.loaderIcon,icon:d.Z,spin:!0})]})]})}},52625:function(Gn,rn,n){n.d(rn,{T:function(){return j}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(3772),k=n(75271),Z=n(90142),o=n(36075),T=n.n(o),v=n(52676),A=(0,k.memo)(function(S){var L=Object.assign({},(T()(S),S));return(0,v.jsx)("svg",e()(e()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},L),{},{children:(0,v.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),d=(0,k.memo)(function(S){var L=Object.assign({},(T()(S),S));return(0,v.jsxs)("svg",e()(e()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},L),{},{children:[(0,v.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,v.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,v.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),t=(0,k.memo)(function(S){var L=Object.assign({},(T()(S),S));return(0,v.jsxs)("svg",e()(e()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},L),{},{children:[(0,v.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,v.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,v.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,v.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,v.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,v.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,v.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),V=n(53649),z=n.n(V),p,x=(0,O.kc)(function(S){var L=S.css;return{extraTitle:L(p||(p=z()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),y=["type","size","style","extra","className"],j=(0,k.memo)(function(S){var L=S.type,B=L===void 0?"img":L,C=S.size,D=C===void 0?32:C,J=S.style,N=S.extra,$=S.className,an=M()(S,y),X=(0,O.Fg)(),yn=x(),sn=yn.styles,un;switch(B){case"text":{un=(0,v.jsx)(t,e()({className:$,height:D,style:J,width:D*2.9375},an));break}case"combine":{un=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,e()({height:D,style:J,width:D},an)),(0,v.jsx)(t,{style:{height:D,marginLeft:Math.round(D/4),width:"auto"}})]});break}case"img":default:{un=(0,v.jsx)(d,e()({height:D,style:J,width:D},an));break}}if(!N)return un;var Q=Math.round(D/3*1.9);return(0,v.jsxs)(Z.D,e()(e()({align:"center",className:$,horizontal:!0,style:J},an),{},{children:[un,(0,v.jsx)(A,{style:{color:X.colorFill,height:Q,width:Q}}),(0,v.jsx)("div",{className:sn.extraTitle,style:{fontSize:Q},children:N})]}))})},79334:function(Gn,rn,n){n.d(rn,{o:function(){return ne}});var on=n(26068),e=n.n(on),nn=n(82092),M=n.n(nn),O=n(14837),k=n(64419),Z=n(30924),o=n(6988),T=n(56875),v=n(44250),A=n(98639),d=n(36419),t=n(75271),V=n(28485),z=n(48305),p=n.n(z),x=n(71561),y=n(32199),j=(0,d.fA)("INSERT_MENTION_COMMAND"),S=(0,d.fA)("DELETE_MENTION_COMMAND"),L=(0,d.fA)("CLEAR_HIDE_MENU_TIMEOUT"),B=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi,C=function(i){var u=i.onBlur,r=i.onFocus,f=(0,x.g)(),s=p()(f,1),h=s[0],W=(0,t.useRef)(null);return(0,t.useEffect)(function(){return(0,y.qV)(h.registerCommand(L,function(){return W.current&&(clearTimeout(W.current),W.current=null),!0},d.VN),h.registerCommand(d.Gq,function(q,vn){return W.current=setTimeout(function(){h.dispatchCommand(d.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),u&&u(),!0},d.VN),h.registerCommand(d.m$,function(){return r&&r(),!0},d.VN))},[h,u,r]),null},D=n(25298),J=n.n(D),N=n(17069),$=n.n(N),an=n(9504),X=n.n(an),yn=n(38836),sn=n.n(yn),un=n(21742),Q=n.n(un),l=n(83136),b=n.n(l),Y=function(a){Q()(u,a);var i=b()(u);function u(){return J()(this,u),i.apply(this,arguments)}return $()(u,[{key:"createDOM",value:function(f){var s=X()(sn()(u.prototype),"createDOM",this).call(this,f);return s.classList.add("align-middle"),s}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(f){return new u(f.__text,f.__key)}},{key:"importJSON",value:function(f){var s=(0,d.MX)(f.text);return s.setFormat(f.format),s.setDetail(f.detail),s.setMode(f.mode),s.setStyle(f.style),s}}]),u}(d.R2);function dn(a){return new Y(a)}var fn=function(i){var u=i.editable,r=(0,x.g)(),f=p()(r,1),s=f[0];return(0,t.useEffect)(function(){s.setEditable(u)},[u,s]),null},en=n(62657),R=n.n(en),G=n(27046),I=n(38590),c=n(1718),P=n(69024),g=n(52676),K=(0,t.createContext)(null),ln=(0,t.memo)(function(a){var i=a.children,u=a.value;return(0,g.jsx)(K.Provider,{value:u,children:i})}),bn=function(){var i=(0,t.useContext)(K);return i==null?void 0:i.optionsMap},pn=n(33803),Fn=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,Rn="\\(",Hn=function(i){return"(?:"+i.join("|")+")"},Nn=function(i,u){var r=i.length===0?"":"(?!"+i.join("|")+")";return r+"[^\\s"+u+"]"},ee=function(i){return"(?:\\.[ |$]|\\s|["+i+"]|)"},kn=75,ie=function(i,u){var r=(0,t.useRef)(null),f=(0,x.g)(),s=p()(f,1),h=s[0],W=(0,pn.y)(i),q=p()(W,3),vn=q[0],Mn=q[1],w=q[2],Wn=(0,t.useCallback)(function(Kn){var ae=(0,d.dL)(),le=ae==null?void 0:ae.getNodes();if(!vn&&(le==null?void 0:le.length)===1&&h.dispatchCommand(u,void 0),vn&&(0,d.iO)(ae)){Kn.preventDefault();var ge=(0,d.gI)(i);if((0,d.k$)(ge))return u&&h.dispatchCommand(u,void 0),ge.remove(),!0}return!1},[vn,i,u,h]),Vn=(0,t.useCallback)(function(Kn){Kn.stopPropagation(),w(),Mn(!0)},[Mn,w]);return(0,t.useEffect)(function(){var Kn=r.current;return Kn&&Kn.addEventListener("click",Vn),function(){Kn&&Kn.removeEventListener("click",Vn)}},[Vn]),(0,t.useEffect)(function(){return(0,y.qV)(h.registerCommand(d.MK,Wn,d.KB),h.registerCommand(d.aR,Wn,d.KB))},[h,w,Wn]),[r,vn]},Yn=function(){var i=useRef(null),u=useState(!1),r=_slicedToArray(u,2),f=r[0],s=r[1],h=useCallback(function(W){W.stopPropagation(),s(function(q){return!q})},[]);return useEffect(function(){var W=i.current;return W&&W.addEventListener("click",h),function(){W&&W.removeEventListener("click",h)}},[h]),[i,f,s]};function Sn(a,i,u,r){return new RegExp((i?"(^|\\s|".concat(i,")("):"(^|\\s)(")+Hn(a)+"((?:"+Nn(a,u)+(r?ee(u):"")+"){0,"+kn+"}))$")}function zn(a,i,u,r,f){var s=Sn(i,u,r,f).exec(a);if(s!==null){var h=s[1],W=s[2],q=s[3];if(W.length>0)return{leadOffset:s.index+h.length,matchingString:q,replaceableString:W}}return null}var te=function(i,u){var r=u.punctuation,f=u.preTriggerChars,s=u.allowSpaces,h=(0,t.useState)(null),W=p()(h,2),q=W[0],vn=W[1],Mn=(0,t.useCallback)(function(w){var Wn=zn(w,i,f,r,s);if(Wn){var Vn=Wn.replaceableString,Kn=Wn.matchingString,ae=Vn.lastIndexOf(Kn),le=ae===-1?Vn:Vn.slice(0,Math.max(0,ae))+Vn.slice(Math.max(0,ae+Kn.length));if(vn(le||null),Wn.replaceableString)return Wn}else vn(null);return null},[f,s,r,i]);return{trigger:q,checkForMentionMatch:Mn}},de=n(53649),U=n.n(de),wn=n(3772),ce,Me,Le,Pe=(0,wn.kc)(function(a,i){var u=a.css,r=a.token,f=a.prefixCls,s=i.isSelected,h=i.isError,W=function(){return h?s?{background:r.colorErrorBgActive,border:r.colorErrorBorderHover,color:r.colorErrorTextActive}:{background:r.colorErrorBg,border:r.colorErrorBorder,color:r.colorErrorText}:s?{background:r.colorInfoBgHover,border:r.colorInfoBorder,color:r.colorInfoText}:{background:r.colorFillTertiary,border:"transparent",color:r.colorInfoText}},q=W(),vn=q.background,Mn=q.border,w=q.color;return{root:u(ce||(ce=U()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),r.fontFamilyCode,w,vn,Mn,r.borderRadius),text:u(Me||(Me=U()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),r.colorTextSecondary),error:u(Le||(Le=U()([`
        color: `,`;
      `])),r.colorErrorText)}}),Ne=(0,t.memo)(function(a){var i=a.nodeKey,u=a.variable,r=bn(),f=(0,x.g)(),s=p()(f,1),h=s[0],W=ie(i,S),q=p()(W,2),vn=q[0],Mn=q[1],w=r==null?void 0:r[u],Wn=Pe({isSelected:Mn,isError:!w||!!w.error}),Vn=Wn.styles;(0,t.useEffect)(function(){if(!h.hasNodes([be]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[h]);var Kn=(0,g.jsx)(I.Z,{className:Vn.root,ref:vn,children:(0,g.jsxs)(I.Z,{align:"center",gap:2,children:[(!w||w.error)&&(0,g.jsx)(G.Z,{className:Vn.error,icon:P.Z}),(w==null?void 0:w.icon)&&(0,g.jsx)(I.Z,{children:w.icon}),(0,g.jsx)(I.Z,{className:Vn.text,gap:2,title:(w==null?void 0:w.label)||u,children:(0,g.jsx)("span",{children:(w==null?void 0:w.selectedLabel)||(w==null?void 0:w.label)||u})})]})});return w!=null&&w.error?(0,g.jsx)(c.Z,{title:w==null?void 0:w.error,children:Kn}):Kn}),be=function(a){Q()(u,a);var i=b()(u);function u(r,f){var s;return J()(this,u),s=i.call(this,f),M()(R()(s),"__variable",void 0),s.__variable=r,s}return $()(u,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var f=document.createElement("div");return f.style.display="inline-flex",f.style.alignItems="center",f.style.verticalAlign="middle",f}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,g.jsx)(Ne,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var f=this.getLatest();return f.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(f){return new u(f.__variable,f.__key)}},{key:"importJSON",value:function(f){var s=En(f.variable);return s}}]),u}(d.Ij);function En(a){return new be(a)}function m(a){return a instanceof be}var H=(0,t.memo)(function(a){var i=a.onInsert,u=a.onDelete,r=(0,x.g)(),f=p()(r,1),s=f[0];return(0,t.useEffect)(function(){if(!s.hasNodes([be]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,y.qV)(s.registerCommand(j,function(h){s.dispatchCommand(L,null);var W=En(h);return(0,d.od)([W]),i&&i(),!0},d.VN),s.registerCommand(S,function(){return u&&u(),!0},d.VN))},[s,i,u]),null});H.displayName="MentionNodePlugin";var F=(0,d.fA)("INSERT_MENTION_COMMAND"),_=(0,d.fA)("DELETE_MENTION_COMMAND"),An=(0,d.fA)("CLEAR_HIDE_MENU_TIMEOUT"),On=(0,d.fA)("UPDATE_MENTIONS_OPTIONS"),gn=function(i,u,r){if(i.isSimpleText())for(var f=i.getPreviousSibling(),s=i.getTextContent(),h=i,W;;){W=u(s);var q=W===null?"":s.slice(W.end);if(s=q,q===""){var vn=h.getNextSibling();if((0,d.Gg)(vn)){q=h.getTextContent()+vn.getTextContent();var Mn=u(q);if(Mn===null){vn.markDirty();return}else if(Mn.start!==0)return}}else{var w=u(q);if(w!==null&&w.start===0)return}if(W===null)return;if(!(W.start===0&&(0,d.Gg)(f)&&f.isTextEntity())){var Wn=void 0;if(W.start===0){var Vn=h.splitText(W.end),Kn=p()(Vn,2);Wn=Kn[0],h=Kn[1]}else{var ae=h.splitText(W.start,W.end),le=p()(ae,3);Wn=le[1],h=le[2]}var ge=r(Wn);if(Wn.replace(ge),h==null)return}}};function Jn(a){var i=a.split(`
`);return JSON.stringify({root:{children:i.map(function(u){return{children:[{detail:0,format:0,mode:"normal",style:"",text:u,type:"custom-text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}}),direction:"ltr",format:"",indent:0,type:"root",version:1}})}var re=(0,t.memo)(function(a){var i=a.onInsert,u=(0,x.g)(),r=p()(u,1),f=r[0];(0,t.useEffect)(function(){if(!f.hasNodes([be]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[f]);var s=(0,t.useCallback)(function(q){i&&i();var vn=q.getTextContent().slice(2,-2);return(0,d.U2)(En(vn))},[i]),h=(0,t.useCallback)(function(q){var vn=B.exec(q);if(vn===null)return null;var Mn=vn.index,w=Mn+vn[0].length;return{end:w,start:Mn}},[]),W=(0,t.useCallback)(function(q){return B.lastIndex=0,gn(q,h,s)},[s,h]);return(0,t.useEffect)(function(){return B.lastIndex=0,(0,y.qV)(f.registerNodeTransform(Y,W))},[]),null}),Pn=n(99934),Xn=n(26082),oe=n(30967),_n=n(83606),qn=function(a){Q()(u,a);var i=b()(u);function u(r){var f,s=r.label,h=r.value,W=r.data,q=r.icon,vn=r.extraElement,Mn=r.keywords,w=r.keyboardShortcut,Wn=r.disabled,Vn=r.onSelect,Kn=r.children,ae=r.isChild;return J()(this,u),f=i.call(this,h),M()(R()(f),"label",void 0),M()(R()(f),"value",void 0),M()(R()(f),"title",void 0),M()(R()(f),"key",void 0),M()(R()(f),"icon",void 0),M()(R()(f),"extraElement",void 0),M()(R()(f),"keywords",void 0),M()(R()(f),"keyboardShortcut",void 0),M()(R()(f),"onSelect",void 0),M()(R()(f),"disabled",void 0),M()(R()(f),"data",void 0),M()(R()(f),"children",void 0),M()(R()(f),"isChild",void 0),f.value=h,f.label=s,f.title=s,f.key=h,f.keywords=Mn||[],f.icon=q,f.extraElement=vn,f.keyboardShortcut=w,f.onSelect=Vn.bind(R()(f)),f.disabled=Wn,f.data=W,f.isChild=ae!=null?ae:!1,f.children=Kn==null?void 0:Kn.map(function(le){return new u(e()(e()({},le),{},{isChild:!0}))}),f}return $()(u)}(Pn.n),se=function a(i,u){var r;return i.children=(r=i.children)===null||r===void 0?void 0:r.filter(function(f){if(!f.children)return u(f);var s=a(f,u);return u(f)||(s.children||[]).length>0}),i},Zn=function(i,u){var r=(0,x.g)(),f=p()(r,1),s=f[0],h=(0,t.useCallback)(function(q){var vn,Mn=new RegExp((0,_n.Z)(u),"i");return Mn.test(q.label)||((vn=q.keywords)===null||vn===void 0?void 0:vn.some(function(w){return Mn.test(w)}))||!1},[u]),W=(0,t.useMemo)(function(){var q=function Mn(w){var Wn=e()(e()({},w),{},{children:void 0,onSelect:function(){s.dispatchCommand(j,w.value)}});return w.children&&(Wn.children=w.children.map(function(Vn){return Mn(Vn)})),Wn},vn=i.map(function(Mn){return new qn(q(Mn))});return u?vn.map(function(Mn){return Mn.children?se(Mn,h):Mn}).filter(function(Mn){return h(Mn)||(Mn.children||[]).length>0}):vn},[i,u,s,h]);return{options:W}},ve=n(66642),Tn=n(94729),E,mn,tn,cn,Ln,Dn,$n,Cn=(0,wn.kc)(function(a,i){var u=a.css,r=a.token,f=a.prefixCls,s=i.isSelected,h=i.disabled,W=u(E||(E=U()([`
      background-color: `,`;
    `])),r.colorFillSecondary);return{anchor:u(mn||(mn=U()([`
        z-index: 9999;
      `]))),menuEmpty:u(tn||(tn=U()([`
        padding: `,`px;
      `])),r.padding),menuOverlay:u(cn||(cn=U()([`
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
      `])),r.marginXXS,r.paddingXXS,r.colorBgElevated,r.borderRadius,r.boxShadow,f),menuItem:u(Ln||(Ln=U()([`
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
      `])),h?"not-allowed":"pointer",h?"none":"all",r.paddingXS,r.borderRadius,h?r.colorTextDisabled:r.colorText,r.fontSize,s&&W,W),menuItemIcon:u(Dn||(Dn=U()([`
        color: `,`;
      `])),r.colorInfoText),menuItemLabel:u($n||($n=U()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),xn=Tn.C.Text,hn=(0,t.memo)(function(a){var i=a.index,u=a.isSelected,r=a.onClick,f=a.onMouseEnter,s=a.option,h=a.queryString,W=a.showIcon,q=W===void 0?!0:W,vn=Cn({isSelected:u,disabled:s.disabled}),Mn=vn.styles,w=s.label,Wn=(0,t.useMemo)(function(){var le=w,ge="",Fe="";if(h){var Ke=new RegExp((0,_n.Z)(h),"i"),De=Ke.exec(s.label);De&&(le=w.slice(0,Math.max(0,De.index)),ge=De[0],Fe=w.slice(Math.max(0,De.index+De[0].length)))}return{before:le,middle:ge,after:Fe}},[s.label,h,w]),Vn=Wn.before,Kn=Wn.middle,ae=Wn.after;return(0,g.jsxs)(I.Z,{align:"center",className:Mn.menuItem,gap:4,onClick:function(){return r==null?void 0:r(i,s)},onMouseEnter:function(){return f==null?void 0:f(i,s)},ref:s.setRefElement,tabIndex:-1,children:[q&&(0,g.jsx)(I.Z,{className:Mn.menuItemIcon,children:s.icon}),(0,g.jsxs)("div",{className:Mn.menuItemLabel,title:s.label,children:[Vn,(0,g.jsx)(xn,{mark:!0,children:Kn}),ae]}),(0,g.jsx)(I.Z,{children:s.extraElement})]},s.key)});hn.displayName="MentionMenuItem";var Bn=(0,t.memo)(function(a){var i=a.selectedIndex,u=a.options,r=a.onClick,f=a.onMouseEnter,s=a.queryString,h=Cn({}),W=h.styles;return(0,g.jsxs)(g.Fragment,{children:[u.length===0&&(0,g.jsx)(ve.Z,{className:W.menuEmpty,image:ve.Z.PRESENTED_IMAGE_SIMPLE}),u.map(function(q,vn){return(0,g.jsx)(hn,{index:vn,isSelected:i===vn,onClick:r,onMouseEnter:f,option:q,queryString:s},q.key)})]})}),In=(0,t.memo)(function(a){var i=a.overlayClassName,u=a.triggers,r=a.options,f=r===void 0?[]:r,s=a.allowSpaces,h=s===void 0?!0:s,W=a.punctuation,q=W===void 0?Fn:W,vn=a.preTriggerChars,Mn=vn===void 0?Rn:vn,w=a.onSelect,Wn=Cn({}),Vn=Wn.cx,Kn=Wn.styles,ae=(0,x.g)(),le=p()(ae,1),ge=le[0],Fe=te(u,{punctuation:q,preTriggerChars:Mn,allowSpaces:h}),Ke=Fe.trigger,De=Fe.checkForMentionMatch,ke=(0,t.useState)(null),Ve=p()(ke,2),Ie=Ve[0],Ye=Ve[1],Xe=Zn(f,Ie),Re=Xe.options,Ge=(0,t.useCallback)(function(ue,Se,$e,Be){w==null||w(ue,Ke,Ie),ge.update(function(){Se&&ue!==null&&ue!==void 0&&ue.key&&Se.remove(),ue!=null&&ue.onSelect&&ue.onSelect(Be),$e()})},[ge,w,Ie,Ke]),xe=(0,t.useCallback)(function(ue){var Se=ue.selectedIndex,$e=ue.selectOptionAndCleanUp;return(0,g.jsx)(A.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0}}},children:(0,g.jsx)(Xn.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(Ze,ye){var Ae=ye.nativeEvent;Ae.stopPropagation(),ge.dispatchCommand(L,{})},onSelect:function(Ze,ye){$e(ye.node)},titleRender:function(Ze){var ye;return(0,g.jsx)(hn,{isSelected:((ye=Re[Se])===null||ye===void 0?void 0:ye.value)===Ze.value,option:Ze,queryString:Ie,showIcon:!Ze.isChild})},treeData:Re})})},[Re,ge,Ie]),ze=(0,t.useCallback)(function(ue,Se,$e){var Be=Se.selectedIndex,Ze=Se.selectOptionAndCleanUp,ye=Se.setHighlightedIndex;return ue.current?oe.createPortal((0,g.jsx)("div",{className:Vn(Kn.menuOverlay,i),role:"menu",children:Re.some(function(Ae){return(Ae.children||[]).length>0})?xe(Se):(0,g.jsx)(Bn,{onClick:function(Ue,Qe){Qe.disabled||(ye(Ue),Ze(Qe))},onMouseEnter:function(Ue,Qe){Qe.disabled||ye(Ue)},options:Re,queryString:Ie,selectedIndex:Be})}),ue.current):null},[Vn,Re,i,Ie,xe,Kn.menuOverlay]);return(0,g.jsx)(Pn.HQ,{anchorClassName:Kn.anchor,menuRenderFn:ze,onQueryChange:Ye,onSelectOption:Ge,options:Re,triggerFn:De})}),Un,Qn,me,je,Ee,he,pe,Ce,Oe=32,Te=22,jn=function(i){return Oe+Math.max(i-1,0)*Te},fe=(0,wn.kc)(function(a,i){var u=a.css,r=a.token,f=a.prefixCls,s=i.autoSize;return{wrapper:u(Un||(Un=U()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:u(Qn||(Qn=U()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),Oe,r.fontSize,Oe,r.colorTextPlaceholder),root:u(me||(me=U()([`
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
      `])),r.colorBorder,r.borderRadius,r.colorText,r.fontSize,r.fontFamily,(s==null?void 0:s.minRows)&&u(je||(je=U()([`
          min-height: `,`px;
        `])),jn(s.minRows)),(s==null?void 0:s.maxRows)&&u(Ee||(Ee=U()([`
          max-height: `,`px;
        `])),jn(s.maxRows)),r.motionDurationMid,r.colorPrimaryBorder,Te),filled:u(he||(he=U()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),r.colorFillTertiary,r.colorFillSecondary,r.colorBgBase),borderless:u(pe||(pe=U()([`
        background: transparent;
        border: none;
      `]))),disabled:u(Ce||(Ce=U()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),r.colorTextDisabled,r.colorBgContainerDisabled)}}),ne=function(i){var u=i.className,r=i.classNames,f=i.placeholder,s=i.style,h=i.value,W=i.defaultValue,q=i.readOnly,vn=q===void 0?!1:q,Mn=i.disabled,w=i.onChange,Wn=i.onBlur,Vn=i.onFocus,Kn=i.variant,ae=Kn===void 0?"outlined":Kn,le=i.options,ge=le===void 0?[]:le,Fe=i.autoSize,Ke=i.triggers,De=Ke===void 0?["@"]:Ke,ke=i.allowSpaces,Ve=i.punctuation,Ie=i.preTriggerChars,Ye=i.onSelect,Xe=A.ZP.useConfig(),Re=Xe.componentDisabled,Ge=fe({autoSize:Fe}),xe=Ge.styles,ze=Ge.cx,ue=(0,t.useMemo)(function(){return Mn!=null?Mn:Re},[Re,Mn]),Se=(0,t.useMemo)(function(){return!vn&&!ue},[ue,vn]),$e=(0,t.useMemo)(function(){return{namespace:"mentions",nodes:[Y,{replace:d.R2,with:function(Ae){return new Y(Ae.__text)}},be],editorState:Jn(h||W||""),onError:function(Ae){throw Ae}}},[]),Be=function(Ae){var Ue=Ae.read(function(){return(0,d.Gv)().getTextContent()});w==null||w(Ue.replaceAll(`

`,`
`))},Ze=(0,t.useMemo)(function(){var ye=function Ae(Ue,Qe){return Ue.reduce(function(He,We){if(He[We.value]=We,He[We.value].icon||(He[We.value].icon=Qe),We.children&&We.children.length>0){var we=Ae(We.children,We.icon);Object.assign(He,we)}return He},{})};return ye(ge)},[ge]);return V.j?(0,g.jsx)(O.R,{initialConfig:e()(e()({},$e),{},{editable:Se}),children:(0,g.jsx)(ln,{value:{optionsMap:Ze},children:(0,g.jsxs)("div",{className:ze(xe.wrapper,r==null?void 0:r.wrapper),children:[(0,g.jsx)(v.B,{ErrorBoundary:Z.g,contentEditable:(0,g.jsx)(k.f,{className:ze(M()(M()(M()(M()({},xe.root,!0),xe.filled,ae==="filled"),xe.borderless,ae==="borderless"),xe.disabled,ue),u),style:s||{}}),placeholder:(0,g.jsx)("div",{className:xe.placeholder,children:f||"\u8F93\u5165 ".concat(De.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),Se&&(0,g.jsx)(In,{allowSpaces:ke,onSelect:Ye,options:ge,overlayClassName:r==null?void 0:r.menuOverlay,preTriggerChars:Ie,punctuation:Ve,triggers:De}),(0,g.jsx)(H,{}),(0,g.jsx)(re,{}),(0,g.jsx)(o.e,{}),(0,g.jsx)(T.$,{onChange:Be}),(0,g.jsx)(C,{onBlur:Wn,onFocus:Vn}),(0,g.jsx)(fn,{editable:Se})]})})}):(0,g.jsxs)("div",{className:ze(xe.wrapper,r==null?void 0:r.wrapper),children:[(0,g.jsx)("div",{className:ze(M()(M()(M()(M()({},xe.root,!0),xe.filled,ae==="filled"),xe.borderless,ae==="borderless"),xe.disabled,ue),u),style:s||{}}),(0,g.jsx)("div",{className:xe.placeholder,children:f||"\u8F93\u5165 ".concat(De.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})]})}},97527:function(Gn,rn,n){n.d(rn,{u:function(){return x}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(76795),k=n(75271),Z="yunti-ui",o=n(53649),T=n.n(o),v=n(3772),A,d,t=(0,v.kc)(function(j,S){var L=j.css,B=j.prefixCls,C=S.borderd,D=C===void 0?!0:C,J=S.footer,N=J===null||Array.isArray(J)&&J.length===0,$=L(A||(A=T()([`
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
    `])),B,B,N?0:"40px",B,N?0:"1px");return{custom:L(d||(d=T()([`
        `,`
      `])),D&&$)}},{hashPriority:"low"}),V=n(52676),z=["className","borderd"],p=function(S){var L=S.className,B=S.borderd,C=B===void 0?!0:B,D=M()(S,z),J=t(e()({borderd:C},D)),N=J.styles,$=J.cx;return(0,V.jsx)(O.Z,e()(e()({},D),{},{className:$(N.custom,"".concat(Z,"-modal"),L)}))},x=p;x.useModal=O.Z.useModal,x.destroyAll=O.Z.destroyAll,x.config=O.Z.config,x._InternalPanelDoNotUseOrYouWillBeFired=O.Z._InternalPanelDoNotUseOrYouWillBeFired,x.info=O.Z.info,x.success=O.Z.success,x.error=O.Z.error,x.warning=O.Z.warning,x.warn=O.Z.warn,x.confirm=O.Z.confirm;var y=null},81321:function(Gn,rn,n){n.d(rn,{ZM:function(){return Pe},Hu:function(){return $},Xq:function(){return be},rE:function(){return Ne}});var on=n(26068),e=n.n(on),nn=n(48305),M=n.n(nn),O=n(67825),k=n.n(O),Z=n(71795),o=n(75271),T=n(94456),v=n(27046),A=n(22622),d=n(32328),t=n(87449),V=n(28485),z=n(90228),p=n.n(z),x=n(87999),y=n.n(x),j=n(97524),S=n(50279),L=n(25298),B=n.n(L),C=n(17069),D=n.n(C),J=n(82092),N=n.n(J),$=function(){function En(){B()(this,En),N()(this,"methodMap",void 0),N()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return D()(En,[{key:"registerMethod",value:function(H,F){this.methodMap[H]=F}},{key:"call",value:function(H){for(var F,_,An=arguments.length,On=new Array(An>1?An-1:0),gn=1;gn<An;gn++)On[gn-1]=arguments[gn];return(F=(_=this.methodMap)[H])===null||F===void 0?void 0:F.call.apply(F,[_].concat(On))}},{key:"updateMeta",value:function(H){Object.assign(this.meta,H)}},{key:"getMeta",value:function(){return Object.freeze(e()({},this.meta))}}]),En}(),an="__base_monaco_editor_controller__",X=V.j&&window;X&&!X[an]&&(X[an]=new $);var yn=X[an],sn=function(){var En,m;return function(){var H=y()(p()().mark(function F(_){var An;return p()().wrap(function(gn){for(;;)switch(gn.prev=gn.next){case 0:if(!(!En||!(0,S.Z)(m,_))){gn.next=7;break}return An=Object.keys(_||{}).length>0,j.Z.config(An?_:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),gn.next=5,j.Z.init();case 5:En=gn.sent,m=_;case 7:return gn.abrupt("return",En);case 8:case"end":return gn.stop()}},F)}));return function(F){return H.apply(this,arguments)}}()}(),un=function(m){return m?j.Z.config(m):j.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),j.Z.init()};function Q(En){var m=Object.keys(En||{}).length>0,H=m?En:void 0;return yn.getMeta().singleton?sn(H):un(H)}function l(En){controller.updateMeta(En)}var b=V.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",Y=b==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",dn={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},fn={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function en(En){var m=(0,o.useRef)();return(0,o.useEffect)(function(){m.current=En},[En]),m.current}function R(En,m,H,F){if(F){var _=En.editor.getModel(En.Uri.parse(F));if(_)return _}return En.editor.createModel(m,H,F?En.Uri.parse(F):void 0)}var G=function(m,H){var F=H.editorDidMount,_=H.editorWillMount,An=H.theme,On=H.value,gn=H.path,Jn=H.language,re=H.saveViewState,Pn=H.defaultValue,Xn=H.enhancers,oe=(0,o.useState)(!1),_n=M()(oe,2),qn=_n[0],se=_n[1],Zn=(0,o.useState)(!1),ve=M()(Zn,2),Tn=ve[0],E=ve[1],mn=(0,o.useState)(!1),tn=M()(mn,2),cn=tn[0],Ln=tn[1],Dn=(0,o.useRef)(Pn),$n=(0,o.useRef)(On),Cn=(0,o.useRef)(Jn||"text"),xn=(0,o.useRef)(gn),hn=en(gn),Bn=(0,o.useRef)(H.requireConfig),In=(0,o.useRef)(H.options),Un=(0,o.useRef)(),Qn=(0,o.useRef)(),me=(0,o.useRef)(),je=(0,o.useRef)(m),Ee=(0,o.useRef)(),he=(0,o.useRef)(),pe=(0,o.useRef)(!1),Ce=(0,o.useRef)(new Map),Oe=(0,o.useRef)({});(0,o.useEffect)(function(){Oe.current.enhancers=Xn},[Xn]),(0,o.useEffect)(function(){Ee.current=F},[F]),(0,o.useEffect)(function(){he.current=_},[_]),(0,o.useEffect)(function(){$n.current=On},[On]),(0,o.useEffect)(function(){Cn.current=Jn},[Jn]),(0,o.useEffect)(function(){Dn.current=Pn},[Pn]),(0,o.useEffect)(function(){Ln(!0),Q(Bn.current).then(function(jn){var fe;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,Un.current=jn;try{var ne;(ne=he.current)===null||ne===void 0||ne.call(he,jn)}catch(W){}if(me.current){var a;if(je.current==="single"){var i,u,r=R(jn,(i=(u=$n.current)!==null&&u!==void 0?u:Dn.current)!==null&&i!==void 0?i:"",Cn.current,xn.current);a=jn.editor.create(me.current,e()(e()({automaticLayout:!0},dn),In.current)),a.setModel(r)}else{var f=jn.editor.createModel($n.current,Cn.current),s=jn.editor.createModel($n.current,Cn.current);a=jn.editor.createDiffEditor(me.current,e()(e()({automaticLayout:!0},fn),In.current)),a.setModel({original:f,modified:s})}Qn.current=a,(fe=Oe.current.enhancers)===null||fe===void 0||fe.forEach(function(W){return W(jn,a)});try{var h;(h=Ee.current)===null||h===void 0||h.call(Ee,jn,a)}catch(W){}pe.current||se(!0)}}).catch(function(jn){console.error("Monaco Editor Load Error!",jn)}).then(function(){pe.current||Ln(!1)})},[]),(0,o.useEffect)(function(){var jn;qn&&((jn=Un.current)===null||jn===void 0||jn.editor.setTheme(An))},[qn,An]),(0,o.useEffect)(function(){if(qn){var jn=m==="diff"?Qn.current.getModifiedEditor():Qn.current;jn==null||jn.onDidFocusEditorText(function(){pe.current||E(!0)}),jn==null||jn.onDidBlurEditorText(function(){pe.current||E(!1)})}},[qn,m]),(0,o.useEffect)(function(){return function(){pe.current=!0}},[]),(0,o.useEffect)(function(){var jn,fe,ne;if(qn&&!(m!=="diff"&&gn)){var a=m==="diff"?Qn.current.getModifiedEditor():Qn.current,i=(jn=On!=null?On:Dn.current)!==null&&jn!==void 0?jn:"",u=(fe=Un.current)===null||fe===void 0?void 0:fe.editor.EditorOption.readOnly;u&&a!==null&&a!==void 0&&(ne=a.getOption)!==null&&ne!==void 0&&ne.call(a,u)?a==null||a.setValue(i):On!==(a==null?void 0:a.getValue())&&(a==null||a.executeEdits("",[{range:a==null?void 0:a.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),a==null||a.pushUndoStop())}},[qn,gn,m,On]),(0,o.useEffect)(function(){var jn,fe;if(qn&&m!=="diff"&&gn!==hn){var ne=R(Un.current,(jn=$n.current)!==null&&jn!==void 0?jn:Dn.current,Cn.current,gn),a=Qn.current;$n.current!==null&&$n.current!==void 0&&ne.getValue()!==$n.current&&ne.setValue($n.current),ne!==((fe=Qn.current)===null||fe===void 0?void 0:fe.getModel())&&(re&&Ce.current.set(hn,a.saveViewState()),a.setModel(ne),re&&a.restoreViewState(Ce.current.get(gn)))}},[qn,On,gn,hn,m,re]);var Te=Qn;return{isEditorReady:qn,focused:Tn,loading:cn,containerRef:me,monacoRef:Un,editorRef:Te,valueRef:$n}},I=function(m){var H=(0,o.useState)(!1),F=M()(H,2),_=F[0],An=F[1],On=function(){if(_){An(!1),m==null||m.updateOptions(e()(e()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!1}})),m==null||m.layout();return}An(!0),m==null||m.updateOptions(e()(e()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!0}})),m==null||m.layout()};return{isFullScreen:_,fullScreen:On}},c=n(53649),P=n.n(c),g=n(3772),K,ln,bn,pn,Fn,Rn,Hn,Nn,ee,kn,ie,Yn=(0,g.kc)(function(En,m){var H=En.css,F=En.token,_=En.prefixCls,An=m.minimapEnabled,On=An===void 0?!1:An,gn=m.isFullScreen,Jn=gn===void 0?!1:gn,re=m.diff,Pn=re===void 0?!1:re,Xn=m.variant,oe=Xn===void 0?"outlined":Xn,_n=(0,g.F4)(K||(K=P()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),qn=function(){switch(oe){case"outlined":return F.colorBgBase;case"filled":return F.colorFillTertiary;default:return"transparent"}};return{base:H(ln||(ln=P()([`
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
      `])),qn(),oe==="outlined"?F.colorBorder:"transparent",F.borderRadius,oe==="outlined"?F.colorPrimaryHover:"transparent",oe==="filled"&&H(bn||(bn=P()([`
            background-color: `,`;
          `])),F.colorFillSecondary),oe==="filled"&&H(pn||(pn=P()([`
            background-color: `,`;
          `])),F.colorBgBase),oe!=="borderless"&&H(Fn||(Fn=P()([`
            border-color: `,`;
          `])),F.colorPrimaryActive),Jn&&H(Rn||(Rn=P()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!Jn&&H(Hn||(Hn=P()([`
              background-color: transparent;
            `]))),F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius,F.borderRadius-1,F.borderRadius-1,F.colorErrorText,F.colorErrorBg),fullScreenBtn:H(Nn||(Nn=P()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),_,F.colorTextSecondary,Jn?H(ee||(ee=P()([`
                z-index: 9999;
                right: `,`px;
              `])),Pn?64:138):H(kn||(kn=P()([`
                right: `,`px;
              `])),On||Pn?64:20)),loading:H(ie||(ie=P()([`
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
      `])),F.fontSizeSM,F.colorTextTertiary,_n)}},{hashPriority:"low"}),Sn=n(52676);function zn(){}var te=function(m){var H,F=m.onChange,_=m.enableOutline,An=m.width,On=m.height,gn=m.language,Jn=m.supportFullScreen,re=(0,o.useRef)(F),Pn=G("single",m),Xn=Pn.isEditorReady,oe=Pn.focused,_n=Pn.loading,qn=Pn.containerRef,se=Pn.monacoRef,Zn=Pn.editorRef,ve=Pn.valueRef,Tn=(0,o.useRef)(),E=I(Zn==null?void 0:Zn.current),mn=E.isFullScreen,tn=E.fullScreen,cn=Yn({isFullScreen:mn,minimapEnabled:(H=m.options)===null||H===void 0||(H=H.minimap)===null||H===void 0?void 0:H.enabled,variant:m.variant}),Ln=cn.cx,Dn=cn.styles,$n=Ln(Dn.base,m.className,{"ve-focused":oe,"ve-outline":_}),Cn=(0,o.useMemo)(function(){return{width:An,height:On}},[An,On]);return(0,o.useEffect)(function(){re.current=F},[F]),(0,o.useEffect)(function(){if(Xn){var xn,hn=Zn.current;(xn=Tn.current)===null||xn===void 0||xn.dispose(),Tn.current=hn==null?void 0:hn.onDidChangeModelContent(function(Bn){var In,Un=hn==null||(In=hn.getModel())===null||In===void 0?void 0:In.getValue();if(ve.current!==Un){var Qn;(Qn=re.current)===null||Qn===void 0||Qn.call(re,Un,Bn)}})}},[Zn,Xn,Tn,ve]),(0,o.useEffect)(function(){return function(){var xn,hn,Bn,In=Zn.current;(xn=Tn.current)===null||xn===void 0||xn.dispose(),In==null||(hn=In.getModel())===null||hn===void 0||hn.dispose(),(Bn=Zn.current)===null||Bn===void 0||Bn.dispose()}},[Zn]),(0,o.useEffect)(function(){var xn;if(Xn){var hn=(xn=Zn.current)===null||xn===void 0?void 0:xn.getModel();if(hn){var Bn;(Bn=se.current)===null||Bn===void 0||Bn.editor.setModelLanguage(hn,gn)}}},[Zn,Xn,gn,se]),(0,Sn.jsxs)("div",{className:$n,style:m.style,children:[_n&&(0,Sn.jsx)("span",{className:Ln(Dn.loading,"loading"),children:Y}),(0,Sn.jsx)("div",{className:"react-monaco-editor-container",ref:qn,style:Cn,children:Jn&&(0,Sn.jsx)(A.ZP,{className:Dn.fullScreenBtn,icon:(0,Sn.jsx)(v.Z,{icon:mn?d.Z:t.Z}),onClick:tn,size:"small",type:"text"})})]})},de=function(m){var H=m.enableOutline,F=m.width,_=m.height,An=m.language,On=m.onChange,gn=m.original,Jn=m.supportFullScreen,re=(0,o.useRef)(On),Pn=G("diff",m),Xn=Pn.isEditorReady,oe=Pn.focused,_n=Pn.loading,qn=Pn.containerRef,se=Pn.monacoRef,Zn=Pn.editorRef,ve=Pn.valueRef,Tn=I(),E=Tn.isFullScreen,mn=Tn.fullScreen,tn=Yn({isFullScreen:E,diff:!0,variant:m.variant}),cn=tn.cx,Ln=tn.styles,Dn=cn(Ln.base,m.className,{"ve-focused":oe,"ve-outline":H}),$n=(0,o.useMemo)(function(){return{width:F,height:_}},[F,_]);return(0,o.useEffect)(function(){re.current=On},[On]),(0,o.useEffect)(function(){var Cn;if(Xn){(Cn=Zn.current.getModel())===null||Cn===void 0||Cn.original.setValue(gn!=null?gn:"");var xn=Zn.current.getModel()||{},hn=xn.modified;hn==null||hn.onDidChangeContent(function(Bn){var In=hn.getValue();if(ve.current!==In){var Un;(Un=re.current)===null||Un===void 0||Un.call(re,In,Bn)}})}},[Zn,Xn,gn,ve]),(0,o.useEffect)(function(){return function(){var Cn,xn,hn;(Cn=Zn.current)===null||Cn===void 0||(Cn=Cn.getModel())===null||Cn===void 0||(Cn=Cn.original)===null||Cn===void 0||Cn.dispose(),(xn=Zn.current)===null||xn===void 0||(xn=xn.getModel())===null||xn===void 0||(xn=xn.modified)===null||xn===void 0||xn.dispose(),(hn=Zn.current)===null||hn===void 0||hn.dispose()}},[Zn]),(0,o.useEffect)(function(){var Cn,xn,hn;if(Xn){var Bn=((Cn=Zn.current)===null||Cn===void 0?void 0:Cn.getModel())||{},In=Bn.original,Un=Bn.modified;(xn=se.current)===null||xn===void 0||xn.editor.setModelLanguage(In,An),(hn=se.current)===null||hn===void 0||hn.editor.setModelLanguage(Un,An)}},[Zn,Xn,An,se]),(0,Sn.jsxs)("div",{className:Dn,style:m.style,children:[_n&&(0,Sn.jsx)("span",{className:cn(Ln.loading,"loading"),children:Y}),(0,Sn.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:qn,style:$n,children:Jn&&(0,Sn.jsx)(A.ZP,{className:Ln.fullScreenBtn,icon:(0,Sn.jsx)(v.Z,{icon:E?d.Z:t.Z}),onClick:mn,size:"small",type:"text"})})]})},U=Object.assign(de,{displayName:"DiffMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:dn,editorDidMount:zn,editorWillMount:zn,onChange:zn,requireConfig:{}}}),wn=Object.assign(te,{displayName:"SingleMonacoEditor",defaultProps:{width:"100%",height:150,defaultValue:"",language:"javascript",options:dn,editorDidMount:zn,editorWillMount:zn,onChange:zn,requireConfig:{}},MonacoDiffEditor:U}),ce=null,Me=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Le=["inlineView","options"],Pe=function(m){var H=m.type,F=H===void 0?"single":H,_=m.editorDidMount,An=m.readOnly,On=An===void 0?!1:An,gn=m.lineNumbers,Jn=gn===void 0?"on":gn,re=m.wordWrap,Pn=re===void 0?"off":re,Xn=m.contextmenu,oe=Xn===void 0?!0:Xn,_n=m.theme,qn=m.minimapEnabled,se=qn===void 0?!1:qn,Zn=m.version,ve=Zn===void 0?"0.45.0":Zn,Tn=m.requireConfig,E=Tn===void 0?{}:Tn,mn=m.options,tn=m.className,cn=m.supportFullScreen,Ln=k()(m,Me),Dn=(0,o.useRef)(_);(0,o.useEffect)(function(){Dn.current=_},[_]);var $n=(0,Z.r)(),Cn=$n.isDarkMode,xn=(0,o.useMemo)(function(){return _n||(Cn?"vs-dark":"vs")},[Cn,_n]),hn=(0,o.useState)(),Bn=M()(hn,2),In=Bn[0],Un=Bn[1],Qn=(0,o.useCallback)(function(he,pe){var Ce;Un(pe),(Ce=Dn.current)===null||Ce===void 0||Ce.call(Dn,he,pe)},[]),me=(0,o.useMemo)(function(){var he=Object.assign({},mn,{readOnly:On,lineNumbers:Jn,wordWrap:Pn,contextmenu:oe,minimap:se===void 0?mn==null?void 0:mn.minimap:Object.assign({},mn==null?void 0:mn.minimap,{enabled:se})});return In==null||In.updateOptions(he),he},[mn,On,Jn,Pn,oe,se,In]),je=(0,T.nc)(),Ee=(0,o.useMemo)(function(){return Object.assign({},E,{paths:e()({vs:je({path:"min/vs",pkg:"monaco-editor",version:ve})},E.paths)})},[je,E,ve]);return F!=="diff"?(0,Sn.jsx)(wn,e()({className:tn,editorDidMount:Qn,options:me,requireConfig:Ee,supportFullScreen:In&&cn,theme:xn},Ln)):(0,Sn.jsx)(wn.MonacoDiffEditor,e()({className:tn,editorDidMount:Qn,options:me,requireConfig:Ee,supportFullScreen:In&&cn,theme:xn},Ln))},Ne=function(m){return(0,Sn.jsx)(Pe,e()(e()({},m),{},{type:"single"}))},be=function(m){var H=m.inlineView,F=H===void 0?"off":H,_=m.options,An=k()(m,Le);return(0,Sn.jsx)(Pe,e()(e()({options:Object.assign({useInlineViewWhenSpaceIsLimited:F==="on"||F==="auto",renderSideBySide:F==="off"||F==="auto"},_)},An),{},{type:"diff"}))}},25777:function(Gn,rn,n){n.d(rn,{W:function(){return yn}});var on=n(26068),e=n.n(on),nn=n(15558),M=n.n(nn),O=n(48305),k=n.n(O),Z=n(67825),o=n.n(Z),T=n(27046),v=n(60399),A=n(38590),d=n(79214),t=n(82338),V=n(99571),z=n(75271),p=n(53649),x=n.n(p),y=n(3772),j,S,L,B,C,D=function(un){switch(un){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},J=(0,y.kc)(function(sn,un){var Q=sn.css,l=sn.token,b=sn.prefixCls,Y=un.disabled,dn=un.size,fn=D(dn),en=fn.cardWidth;return{option:Q(j||(j=x()([`
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
      `])),l.colorBorder,l.borderRadius,Y?"not-allowed":"pointer",l.padding,l.motionDurationFast,en,Y&&Q(S||(S=x()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),l.colorBgContainerDisabled,b,l.colorTextDisabled,b,l.colorTextDisabled),!Y&&Q(L||(L=x()([`
          &:hover {
            border-color: `,`;
          }
        `])),l.colorPrimaryBorderHover),b),optionSelected:Q(B||(B=x()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),l.colorPrimary,l.colorPrimaryActive),check:Q(C||(C=x()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),l.marginXS,l.marginXS,l.colorPrimary)}}),N=n(52676),$=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],an=v.Z.Text,X=v.Z.Paragraph,yn=z.forwardRef(function(sn,un){var Q=sn.defaultValue,l=sn.value,b=sn.onChange,Y=sn.multiple,dn=Y===void 0?!1:Y,fn=sn.disabled,en=fn===void 0?!1:fn,R=sn.options,G=R===void 0?[]:R,I=sn.classNames,c=sn.styles,P=sn.size,g=P===void 0?"middle":P,K=sn.optionRender,ln=o()(sn,$),bn=(0,z.useMemo)(function(){return G.some(function(U){return!!U.img||!!U.icon})},[G]),pn=J({disabled:en,size:g}),Fn=pn.cx,Rn=pn.styles,Hn=(0,z.useMemo)(function(){return D(g)},[g]),Nn=Hn.imgHeight,ee=(0,z.useCallback)(function(U){return!dn||Array.isArray(U)?U:U===void 0?[]:[U]},[dn]),kn=(0,V.C8)(ee(Q),{defaultValue:ee(Q),value:l,onChange:b}),ie=k()(kn,2),Yn=ie[0],Sn=ie[1],zn=(0,z.useCallback)(function(U){if(!en){if(!dn){Sn(U);return}if(Yn.includes(U)){Sn(Yn.filter(function(wn){return wn!==U}));return}Sn([].concat(M()(Yn),[U]))}},[Yn,en,dn,Sn]),te=(0,z.useCallback)(function(U){return dn?Yn.includes(U):Yn===U},[Yn,dn]),de=(0,z.useCallback)(function(U,wn){var ce=te(U.value),Me=(0,N.jsxs)(A.Z,{align:bn?"center":"flex-start",className:Fn(Rn.option,ce&&Rn.optionSelected,I==null?void 0:I.card),gap:"small",onClick:function(){return zn(U.value)},style:e()(e()({},c==null?void 0:c.card),U.style),vertical:!0,children:[bn&&(0,N.jsx)(d.C,{className:I==null?void 0:I.icon,icon:U.icon,shape:"square",size:Nn,src:U.img,style:e()(e()({},c==null?void 0:c.icon),U.iconStyle)}),U.label&&ce&&(0,N.jsx)(an,{ellipsis:!0,strong:!0,children:U.label}),U.label&&!ce&&(0,N.jsx)(an,{ellipsis:!0,children:U.label}),!bn&&U.description&&(0,N.jsx)(X,{ellipsis:{rows:2},type:"secondary",children:U.description}),ce&&(0,N.jsx)(T.Z,{className:Rn.check,icon:t.Z})]},U.value);return K?K(Me,U,wn):Me},[I==null?void 0:I.card,I==null?void 0:I.icon,Fn,Nn,bn,te,zn,K,Rn.check,Rn.option,Rn.optionSelected,c==null?void 0:c.card,c==null?void 0:c.icon]);return(0,N.jsx)(A.Z,e()(e()({gap:"large",ref:un,wrap:!0},ln),{},{children:G.map(function(U,wn){return de(U,wn)})}))})},66269:function(Gn,rn,n){n.d(rn,{a:function(){return A}});var on=n(26068),e=n.n(on),nn=n(48305),M=n.n(nn),O=n(41546),k=n(29797),Z=n(29988),o=n(579),T=n(75271),v=n(52676),A=function(t){var V=t.value,z=t.defaultValue,p=t.min,x=p===void 0?0:p,y=t.max,j=t.step,S=t.gutter,L=S===void 0?16:S,B=t.sliderCol,C=B===void 0?{span:12}:B,D=t.inputCol,J=D===void 0?{span:5}:D,N=t.addonAfter,$=t.addonBefore,an=t.placeholder,X=t.onChange,yn=t.style,sn=t.className,un=t.sliderProps,Q=un===void 0?{}:un,l=t.inputProps,b=l===void 0?{}:l,Y=(0,T.useState)(),dn=M()(Y,2),fn=dn[0],en=dn[1],R=function(I){Number.isNaN(I)||(en(I),X==null||X(I))};return(0,v.jsxs)(O.Z,{className:sn,gutter:L,style:yn,children:[(0,v.jsx)(k.Z,e()(e()({},C),{},{children:(0,v.jsx)(Z.Z,e()(e()({},Q),{},{defaultValue:z,max:y,min:x,onChange:R,step:j,value:V!=null?V:fn}))})),(0,v.jsx)(k.Z,e()(e()({},J),{},{children:(0,v.jsx)(o.Z,e()(e()({},b),{},{addonAfter:N,addonBefore:$,defaultValue:z,max:y,min:x,onChange:R,placeholder:an,step:j,value:V!=null?V:fn}))}))]})}},56482:function(Gn,rn,n){n.d(rn,{N:function(){return z}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(37805),k=n(75271),Z=n(79213),o=n(53649),T=n.n(o),v=n(3772),A,d=(0,v.kc)(function(p){var x=p.css,y=p.token,j=p.prefixCls;return{table:x(A||(A=T()([`
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
    `])),j,y.colorTextTertiary)}}),t=n(52676),V=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],z=function(x){var y=x.rootStyle,j=x.rootClassName,S=x.icon,L=x.title,B=x.variant,C=x.defaultActive,D=x.extra,J=x.className,N=M()(x,V),$=d(),an=$.cx,X=$.styles;return(0,t.jsx)(Z.w,{className:j,style:y,icon:S,title:L,variant:B,defaultActive:C,extra:D,children:(0,t.jsx)(O.Z,e()({className:an(X.table,J),pagination:!1,rowHoverable:!1,size:"small"},N))})}},11546:function(Gn,rn,n){n.d(rn,{NU:function(){return o.N},iA:function(){return A}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(1718),k=n(37805),Z=n(75271),o=n(56482),T=n(52676),v=["columns"],A=function(V){var z=V.columns,p=M()(V,v),x=(0,Z.useMemo)(function(){return z==null?void 0:z.map(function(y){if(y.render)return y;if(y.ellipsis&&y.ellipsis!==!0&&y.ellipsis.showTitle||y.ellipsis===!0){var j=y.ellipsis===!0?{}:y.ellipsis;return e()(e()({},y),{},{ellipsis:{showTitle:!1},render:function(L){return L||L===0?(0,T.jsx)(O.Z,e()(e()({},j),{},{placement:"topLeft",title:L,children:L})):"-"}})}return y.render||(y.render=function(S){return S!=null?S:"-"}),y})},[z]);return(0,T.jsx)(k.Z,e()(e()({},p),{},{columns:x}))};A.displayName="Table",A.SELECTION_COLUMN=k.Z.SELECTION_COLUMN,A.EXPAND_COLUMN=k.Z.EXPAND_COLUMN,A.SELECTION_ALL=k.Z.SELECTION_ALL,A.SELECTION_INVERT=k.Z.SELECTION_INVERT,A.SELECTION_NONE=k.Z.SELECTION_NONE,A.Column=k.Z.Column,A.ColumnGroup=k.Z.ColumnGroup,A.Summary=k.Z.Summary,A.Collapse=o.N;var d=null},8559:function(Gn,rn,n){n.d(rn,{G:function(){return z}});var on=n(53649),e=n.n(on),nn=n(3772),M=n(75271),O=n(52676),k,Z,o,T,v,A,d,t,V=(0,nn.kc)(function(p,x){var y=p.css,j=(0,nn.F4)(k||(k=e()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),S=(0,nn.F4)(Z||(Z=e()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),L=(0,nn.F4)(o||(o=e()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:y(T||(T=e()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),x.width||34,x.height||22,x.bgColor||"transparent"),line:y(v||(v=e()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),x.lineColor||"#000"),animate1:y(A||(A=e()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),j),animate2:y(d||(d=e()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),S),animate3:y(t||(t=e()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),L)}}),z=function(x){var y=x.height,j=x.width,S=x.lineColor,L=x.bgColor,B=V({height:y,width:j,lineColor:S,bgColor:L}),C=B.styles,D=B.cx;return(0,O.jsxs)("div",{className:C.box,children:[(0,O.jsx)("div",{className:D(C.line,C.animate1)}),(0,O.jsx)("div",{className:D(C.line,C.animate2)}),(0,O.jsx)("div",{className:D(C.line,C.animate3)}),(0,O.jsx)("div",{className:D(C.line,C.animate2)}),(0,O.jsx)("div",{className:D(C.line,C.animate1)}),(0,O.jsx)("div",{className:D(C.line,C.animate2)}),(0,O.jsx)("div",{className:D(C.line,C.animate1)})]})}},71983:function(Gn,rn,n){n.r(rn),n.d(rn,{Affix:function(){return pn.Z},Alert:function(){return z.b},Anchor:function(){return Fn.Z},AntdMentions:function(){return Rn.Z},App:function(){return p.g},AudioPlayer:function(){return jn.Z},AutoComplete:function(){return Hn.Z},Avatar:function(){return Nn.C},BackTop:function(){return ee.Z},Badge:function(){return kn.Z},BaseMonacoEditor:function(){return T.ZM},Breadcrumb:function(){return x.Z},Button:function(){return ie.ZP},ButtonGroup:function(){return on.h},Calendar:function(){return Yn.Z},Card:function(){return y.Z},Carousel:function(){return Sn.Z},Cascader:function(){return zn.Z},ChatInputActionBar:function(){return yn.Z},ChatInputArea:function(){return X.Z},ChatInputAreaInner:function(){return sn.Z},ChatItem:function(){return b.z},ChatMarkdown:function(){return Y.L},ChatSendButton:function(){return un.Z},Checkbox:function(){return te.Z},CodeEditor:function(){return dn.p},Col:function(){return de.Z},Collapse:function(){return U.Z},CollapseGroup:function(){return e.w},CollapseTable:function(){return $.NU},ColorPicker:function(){return wn.Z},ConfigContext:function(){return nn.E_},ConfigProvider:function(){return nn.iV},CopyButton:function(){return pe.Z},DatePicker:function(){return ce.default},Descriptions:function(){return j.w},Divider:function(){return S.i},DragPanel:function(){return M.U},Drawer:function(){return L.d},Dropdown:function(){return B.L},EditableMessage:function(){return fn.i},Empty:function(){return Me.Z},Flex:function(){return Le.Z},FloatButton:function(){return Pe.Z},Form:function(){return C.l},FormCollapseList:function(){return C.E},FormHelper:function(){return D.wK},FullFeaturedHighlighter:function(){return en.EL},Grid:function(){return Ne.ZP},Highlighter:function(){return en.oP},Image:function(){return be.Z},Input:function(){return En.Z},InputNumber:function(){return m.Z},JsonViewer:function(){return O.h},Layout:function(){return H.Z},List:function(){return F.Z},LogViewer:function(){return Z.n},Logo:function(){return k.T},Markdown:function(){return Ce.Z},Mentions:function(){return o.o},Menu:function(){return _.Z},MobileChatInputArea:function(){return Q.Z},MobileChatSendButton:function(){return l.Z},Modal:function(){return J.u},MonacoController:function(){return T.Hu},MonacoDiffEditor:function(){return T.Xq},MonacoEditor:function(){return T.rE},NotificationGlobalStyle:function(){return N.EZ},Page:function(){return v.T},Pagination:function(){return On.Z},Popconfirm:function(){return gn.Z},Popover:function(){return Jn.Z},ProCard:function(){return A.Q},Progress:function(){return re.Z},QRCode:function(){return Pn.Z},Radio:function(){return Xn.ZP},Rate:function(){return oe.Z},Result:function(){return _n.ZP},Row:function(){return qn.Z},Segmented:function(){return se.Z},Select:function(){return Zn.default},SelectCard:function(){return d.W},Skeleton:function(){return ve.Z},Slider:function(){return Tn.Z},SliderInput:function(){return t.a},Space:function(){return E.Z},SpeechSynthesisTTS:function(){return Te.H},Spin:function(){return mn.Z},Statistic:function(){return tn.Z},Status:function(){return V.q},Steps:function(){return cn.Z},Switch:function(){return Ln.Z},SyntaxHighlighter:function(){return Oe.Z},Table:function(){return $.iA},Tabs:function(){return Dn.Z},Tag:function(){return $n.Z},TimePicker:function(){return hn.Z},Timeline:function(){return xn.Z},Tooltip:function(){return Bn.Z},Tour:function(){return In.Z},Transfer:function(){return Un.Z},Tree:function(){return Qn.Z},TreeSelect:function(){return me.Z},Typography:function(){return an.Z},Upload:function(){return je.Z},Watermark:function(){return he.Z},WaveformIcon:function(){return bn.G},colorScales:function(){return R._},colors:function(){return R._},generateColorNeutralPalette:function(){return g},generateColorPalette:function(){return P},message:function(){return An.ZP},neutralColorScales:function(){return K},notification:function(){return N.t6},stringify:function(){return O.P},theme:function(){return Cn.Z},useAudioPlayer:function(){return fe.x},useAutoFocus:function(){return D.wL},useCdnFn:function(){return nn.nc},useLink:function(){return nn.nB},useResponsive:function(){return a.F},useSpeechRecognition:function(){return ne.x},useSpeechSynthes:function(){return ln.J},useTheme:function(){return i.Fg},useThemeMode:function(){return u.r},version:function(){return Ee.Z},withFormHelper:function(){return D.MX}});var on=n(12644),e=n(79213),nn=n(94456),M=n(13306),O=n(33985),k=n(52625),Z=n(25969),o=n(79334),T=n(81321),v=n(40305),A=n(86346),d=n(25777),t=n(66269),V=n(46119),z=n(58479),p=n(5244),x=n(87902),y=n(42938),j=n(26345),S=n(82227),L=n(5795),B=n(99512),C=n(62719),D=n(20147),J=n(97527),N=n(40130),$=n(11546),an=n(94729),X=n(52412),yn=n(98904),sn=n(34757),un=n(21113),Q=n(30542),l=n(57714),b=n(59212),Y=n(99033),dn=n(6381),fn=n(99335),en=n(22435),R=n(15094),G=n(82092),I=n.n(G),c=n(98644),P=function(f){var s=f.type,h=f.scale,W=f.appearance,q=(0,c.Z)(s),vn=W==="dark";return I()(I()(I()(I()(I()(I()(I()(I()(I()(I()({},"color".concat(q,"Bg"),h[W][1]),"color".concat(q,"BgHover"),h[W][2]),"color".concat(q,"Border"),h[W][4]),"color".concat(q,"BorderHover"),h[W][vn?5:3]),"color".concat(q,"Hover"),h[W][vn?10:8]),"color".concat(q),h[W][9]),"color".concat(q,"Active"),h[W][vn?7:10]),"color".concat(q,"TextHover"),h[W][vn?10:8]),"color".concat(q,"Text"),h[W][9]),"color".concat(q,"TextActive"),h[W][vn?7:10])},g=function(f){var s=f.scale,h=f.appearance;return{colorBgContainer:h==="dark"?s[h][1]:s[h][0],colorBgElevated:h==="dark"?s[h][2]:s[h][0],colorBgLayout:h==="dark"?s[h][0]:s[h][1],colorBgMask:s.lightA[8],colorBgSpotlight:s[h][5],colorBorder:s[h][4],colorBorderSecondary:s[h][3],colorFill:s["".concat(h,"A")][3],colorFillQuaternary:s["".concat(h,"A")][0],colorFillSecondary:s["".concat(h,"A")][2],colorFillTertiary:s["".concat(h,"A")][1],colorText:s[h][12],colorTextQuaternary:s[h][6],colorTextSecondary:s[h][10],colorTextTertiary:s[h][8]}},K={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},ln=n(82846),bn=n(8559),pn=n(67142),Fn=n(71477),Rn=n(83491),Hn=n(53180),Nn=n(79214),ee=n(77582),kn=n(62701),ie=n(22622),Yn=n(79771),Sn=n(59153),zn=n(29891),te=n(10857),de=n(29797),U=n(40765),wn=n(68369),ce=n(20690),Me=n(66642),Le=n(38590),Pe=n(59251),Ne=n(8208),be=n(61035),En=n(98829),m=n(579),H=n(14292),F=n(336),_=n(8377),An=n(31826),On=n(52969),gn=n(39502),Jn=n(4615),re=n(9192),Pn=n(85959),Xn=n(175),oe=n(22682),_n=n(10780),qn=n(41546),se=n(89843),Zn=n(98721),ve=n(91488),Tn=n(29988),E=n(62272),mn=n(62023),tn=n(91528),cn=n(60804),Ln=n(51079),Dn=n(63020),$n=n(52107),Cn=n(37924),xn=n(70995),hn=n(54789),Bn=n(1718),In=n(76326),Un=n(84141),Qn=n(26082),me=n(56317),je=n(25876),Ee=n(3359),he=n(79949),pe=n(92946),Ce=n(27569),Oe=n(84254),Te=n(49567),jn=n(30831),fe=n(2190),ne=n(48481),a=n(46092),i=n(3772),u=n(71795)},40130:function(Gn,rn,n){n.d(rn,{EZ:function(){return x.E},t6:function(){return sn}});var on=n(26068),e=n.n(on),nn=n(67825),M=n.n(nn),O=n(48305),k=n.n(O),Z=n(335),o=n.n(Z),T=n(30657),v=n(19728),A=n(22620),d=n(40765),t=n(60399),V=n(86468),z=n(75271),p=n(52676),x=n(55300),y=["detail","message","description","onClose","className"],j=d.Z.Panel,S=t.Z.Link,L=t.Z.Paragraph,B=t.Z.Text,C={},D=function(l,b){C[l]||(C[l]=[]),C[l].push(b)},J=function(l){delete C[l]},N=function Q(l){var b="";if(typeof l=="string")b=l;else if(typeof l=="number")b=l.toString();else if(Array.isArray(l)){var Y=o()(l),dn;try{for(Y.s();!(dn=Y.n()).done;){var fn=dn.value;b+=Q(fn)}}catch(en){Y.e(en)}finally{Y.f()}}else(0,z.isValidElement)(l)&&(b+=Q(l.props.children));return b},$=function(l){var b,Y=l.noticeKey,dn=l.message,fn=((b=C[Y])===null||b===void 0?void 0:b.length)||0;return(0,p.jsxs)(p.Fragment,{children:[dn,fn>1&&" (".concat(fn,")")]})},an=function(l){var b=l.noticeKey,Y=(0,z.useState)(),dn=k()(Y,2),fn=dn[0],en=dn[1],R={},G=o()(C[b]),I;try{for(G.s();!(I=G.n()).done;){var c=I.value,P=N(c.description);c.descKey=P,R[P]=c}}catch(g){G.e(g)}finally{G.f()}return(0,p.jsx)(d.Z,{accordion:!0,activeKey:fn,className:"yunti-notification-collapse",expandIcon:function(K){var ln=K.isActive;return(0,p.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:ln?(0,p.jsx)(S,{className:"yunti-notification-link",children:(0,p.jsx)(T.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,p.jsx)(v.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(K){en(K)},children:Object.values(R).map(function(g){var K=g.descKey,ln=g.description,bn=g.detail;return(0,p.jsx)(j,{header:(0,p.jsx)(B,{ellipsis:{tooltip:!1},style:{width:250},children:ln}),children:(0,p.jsx)(L,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(bn,null,2)},type:"secondary",children:(0,p.jsx)("pre",{children:JSON.stringify(bn,null,2)})})},K)})})},X=function(l){var b=l.detail,Y=l.message,dn=l.description,fn=l.onClose,en=l.className,R=M()(l,y),G=N(Y);D(G,l);var I=function(){fn==null||fn(),J(G)};return l.type==="warning"&&!l.icon&&(R.icon=(0,p.jsx)(A.Z,{style:{color:"#ff7d00"}})),b?V.ZP.open(e()({key:G,message:(0,p.jsx)($,{message:Y,noticeKey:G}),description:(0,p.jsx)(an,{noticeKey:G}),onClose:I,className:"yunti-notification ".concat(en)},R)):V.ZP.open(e()({key:G,message:(0,p.jsx)($,{message:Y,noticeKey:G}),description:dn,onClose:I,className:"yunti-notification ".concat(en)},R))},yn=function(l){var b;if(((l==null||(b=l.errors)===null||b===void 0?void 0:b.length)||0)>0){l!=null&&l.errors;var Y=o()((l==null?void 0:l.errors)||[]),dn;try{for(Y.s();!(dn=Y.n()).done;){var fn=dn.value;X(e()(e()({detail:fn,description:fn.message},l),{},{type:"warning"}))}}catch(en){Y.e(en)}finally{Y.f()}}else X(e()(e()({},l),{},{type:"warning"}))},sn=e()(e()({},V.ZP),{},{success:function(l){return X(e()(e()({},l),{},{type:"success"}))},info:function(l){return X(e()(e()({},l),{},{type:"info"}))},warning:function(l){return X(e()(e()({},l),{},{type:"warning"}))},warn:function(l){return X(e()(e()({},l),{},{type:"warning"}))},error:function(l){return X(e()(e()({},l),{},{type:"error"}))},warnings:yn,warns:yn}),un=null},55300:function(Gn,rn,n){n.d(rn,{E:function(){return k}});var on=n(53649),e=n.n(on),nn=n(86468),M=n(3772),O,k=(0,M.vJ)(O||(O=e()([`
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
`])),function(Z){var o=Z.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(Z){var o=Z.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(Z){var o=Z.theme;return o==null?void 0:o.colorPrimary},function(Z){var o=Z.theme;return"".concat(o==null?void 0:o.colorPrimary," !important")},function(Z){var o=Z.theme;return"".concat(o==null?void 0:o.colorPrimaryHover," !important")},function(Z){var o=Z.theme,T=o||{},v=T.prefixCls;return nn.ZP.config({prefixCls:v}),`
      .`.concat(v,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(v,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(Gn,rn,n){n.d(rn,{j:function(){return on}});var on=typeof window!="undefined"}}]);
