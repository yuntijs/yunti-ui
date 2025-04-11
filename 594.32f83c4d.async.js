"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[594],{58479:function(Sn,tn,n){n.d(tn,{b:function(){return h}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(15183),F=n(75271),S=n(53649),t=n.n(S),B=n(3772),u,I=(0,B.kc)(function(v,y){var x=v.css,i=y.bordered,c=i===void 0?"dashed":i;return{custom:x(u||(u=t()([`
        border-style: `,` !important;
      `])),c)}},{hashPriority:"low"}),T=n(52676),r=["bordered","className"],h=function(y){var x=y.bordered,i=x===void 0?"dashed":x,c=y.className,g=Z()(y,r),A=I({bordered:i}),p=A.styles,O=A.cx;return(0,T.jsx)(M.Z,e()(e()({},g),{},{className:O(p.custom,c)}))};h.ErrorBoundary=M.Z.ErrorBoundary;var W=null},5244:function(Sn,tn,n){n.d(tn,{g:function(){return u}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(65220),F=n(75271),S=n(55300),t=n(52676),B=["children"],u=function(r){var h=r.children,W=Z()(r,B);return(0,t.jsxs)(M.Z,e()(e()({},W),{},{children:[(0,t.jsx)(S.E,{}),h]}))};u.useApp=M.Z.useApp;var I=null},52412:function(Sn,tn,n){var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(53649),F=n.n(M),S=n(84694),t=n(34757),B=n(3772),u=n(75271),I=n(52676),T=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],r,h,W,v=(0,B.kc)(function(x){var i=x.css;return{container:i(r||(r=F()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:i(h||(h=F()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:i(W||(W=F()([`
      position: relative;
      flex: 1;
    `])))}}),y=(0,u.forwardRef)(function(x,i){var c=x.className,g=x.style,A=x.classNames,p=x.expand,O=p===void 0?!0:p,D=x.setExpand,b=x.bottomAddons,E=x.topAddons,P=x.onSizeChange,N=x.heights,on=x.onSend,Q=Z()(x,T),z=v(),V=z.styles;return(0,I.jsx)(S.Z,{className:c,classNames:A,fullscreen:O,headerHeight:N==null?void 0:N.headerHeight,maxHeight:N==null?void 0:N.maxHeight,minHeight:N==null?void 0:N.minHeight,onSizeChange:P,placement:"bottom",size:{height:N==null?void 0:N.inputHeight,width:"100%"},style:e()({zIndex:10},g),children:(0,I.jsxs)("section",{className:V.container,style:{minHeight:N==null?void 0:N.minHeight},children:[E,(0,I.jsx)("div",{className:V.textareaContainer,children:(0,I.jsx)(t.Z,e()({className:V.textarea,onSend:function(){on==null||on(),D==null||D(!1)},ref:i,type:"pure"},Q))}),b]})})});tn.Z=(0,u.memo)(y)},59212:function(Sn,tn,n){n.d(tn,{z:function(){return J}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(74923),F=n(7136),S=n(88205),t=n(90510),B=n(46092),u=n(75271),I=n(90142),T=n(53649),r=n.n(T),h=n(3772),W,v,y,x,i,c,g,A,p,O,D,b,E,P,N,on,Q,z,V=(0,h.kc)(function(o,K){var G=o.cx,w=o.css,dn=o.token,_=o.isDarkMode,pn=o.responsive,On=K.placement,cn=K.type,Bn=K.title,An=K.primary,Dn=K.avatarSize,Nn=K.editing,bn=K.time,m=K.isLatest,an=w(W||(W=r()([`
      padding-block: 4px;
      padding-inline: 8px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),An?_?dn.colorFill:"#F6F6F6":_?dn.colorFillSecondary:dn.colorBgContainer,dn.borderRadius,dn.motionEaseOut),en=w(v||(v=r()([`
      padding-block-start: `,`;
    `])),Bn?0:"6px"),gn=w(y||(y=r()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),dn.motionEaseOut),yn=cn==="block"?an:en,Y=Nn&&w(x||(x=r()([`
        width: 100%;
      `]))),un=On==="right"?"-4px unset":"unset -4px";return{actions:G(w(i||(i=r()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),On==="left"?"flex-start":"flex-end",On==="left"?"flex-end":"flex-start"),Nn&&w(c||(c=r()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:w(g||(g=r()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),Dn,Dn),avatarGroupContainer:w(A||(A=r()([`
        width: `,`px;
      `])),Dn),container:G(cn==="pure"&&gn,w(p||(p=r()([`
          position: relative;
          width: 100%;
          max-width: 100vw;
          padding: 16px;

          time {
            display: inline-block;
            padding: 0 8px;
            white-space: nowrap;
          }

          div[role='menubar'] {
            display: flex;
            padding-inline: 8px;
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
        `])),m?"unset":"none",m?1:0,dn.motionEaseOut,pn.mobile,cn==="pure"?"12px":"6px")),editingContainer:G(Y,w(O||(O=r()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),dn.colorBorderSecondary,dn.colorBorder),cn==="pure"&&w(D||(D=r()([`
            background: `,`;
            border-radius: `,`px;
          `])),dn.colorFillQuaternary,dn.borderRadius)),editingInput:w(b||(b=r()([`
        width: 100%;
      `]))),errorContainer:w(E||(E=r()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:w(P||(P=r()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),un,dn.colorBgLayout,dn.colorPrimary),message:G(yn,w(N||(N=r()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),pn.mobile)),messageContainer:G(Y,w(on||(on=r()([`
          position: relative;
          overflow: hidden;
          max-width: 96%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),bn?-16:0,pn.mobile)),messageContent:G(Y,w(Q||(Q=r()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),pn.mobile)),messageExtra:G("message-extra"),name:w(z||(z=r()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),dn.colorTextDescription,On==="left"?"left":"right")}}),l=n(52676),L=(0,u.memo)(function(o){var K=o.actions,G=o.placement,w=o.type,dn=o.editing,_=V({editing:dn,placement:G,type:w}),pn=_.styles;return(0,l.jsx)(I.D,{align:"flex-start",className:pn.actions,role:"menubar",children:K})}),k=L,H=n(99335),sn=(0,u.memo)(function(o){var K=o.editing,G=o.onChange,w=o.onEditingChange,dn=o.text,_=o.message,pn=o.placement,On=o.messageExtra,cn=o.renderMessage,Bn=o.type,An=o.primary,Dn=o.onDoubleClick,Nn=o.fontSize,bn=o.markdownProps,m=o.markdownClassname,an=V({editing:K,placement:pn,primary:An,type:Bn}),en=an.cx,gn=an.styles,yn=(0,B.F)(),Y=yn.mobile,un=(0,l.jsx)(H.i,{classNames:{input:gn.editingInput,markdown:m},editButtonSize:"small",editing:K,fontSize:Nn,fullFeaturedCodeBlock:!0,markdownProps:bn,onChange:G,onEditingChange:w,openModal:Y?K:void 0,text:dn,value:_?String(_).trim():""}),Rn=cn?cn(un):un;return(0,l.jsxs)(I.D,{className:en(gn.message,K&&gn.editingContainer),onDoubleClick:Dn,children:[Rn,On&&!K?(0,l.jsx)("div",{className:gn.messageExtra,children:On}):null]})}),$=sn,R=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","type","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","affixation","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest","hideAvatar"],U=32,J=(0,u.memo)(function(o){var K=o.avatarAddon,G=o.onAvatarClick,w=o.avatarProps,dn=o.actions,_=o.className,pn=o.primary,On=o.loading,cn=o.message,Bn=o.placement,An=Bn===void 0?"left":Bn,Dn=o.type,Nn=Dn===void 0?"block":Dn,bn=o.avatar,m=o.error,an=o.showTitle,en=o.time,gn=o.editing,yn=o.onChange,Y=o.onEditingChange,un=o.messageExtra,Rn=o.affixation,Hn=o.renderMessage,Kn=o.text,Un=o.errorMessage,zn=o.onDoubleClick,vn=o.fontSize,te=o.markdownProps,Zn=o.markdownClassname,qn=o.isLatest,$n=o.hideAvatar,En=Z()(o,R),Pn=(0,B.F)(),In=Pn.mobile,wn=V({editing:gn,placement:An,primary:pn,showTitle:an,time:en,title:bn.title,type:Nn,isLatest:qn}),ne=wn.cx,ee=wn.styles;return(0,l.jsxs)(I.D,e()(e()({className:ne(ee.container,_),direction:An==="left"?"horizontal":"horizontal-reverse",gap:In?6:12},En),{},{children:[$n?null:(0,l.jsx)(M.Z,e()(e()({},w),{},{addon:K,avatar:bn,loading:On,onClick:G,placement:An,size:In?U:void 0})),(0,l.jsxs)(I.D,{align:An==="left"?"flex-start":"flex-end",className:ee.messageContainer,children:[(0,l.jsx)(t.Z,{avatar:bn,placement:An,showTitle:an,time:en}),(0,l.jsxs)(I.D,{align:An==="left"?"flex-start":"flex-end",className:ee.messageContent,direction:"vertical",gap:8,children:[m?(0,l.jsx)(S.Z,{error:m,message:Un,placement:An}):(0,l.jsx)($,{editing:gn,fontSize:vn,markdownClassname:Zn,markdownProps:te,message:cn,messageExtra:un,onChange:yn,onDoubleClick:zn,onEditingChange:Y,placement:An,primary:pn,renderMessage:Hn,text:Kn,type:Nn}),Rn?(0,l.jsx)("div",{className:"affixation",children:Rn}):null,(0,l.jsx)(k,{actions:dn,editing:gn,placement:An,type:Nn})]})]}),In&&Nn==="block"&&(0,l.jsx)(F.Z,{borderSpacing:U})]}))})},99033:function(Sn,tn,n){n.d(tn,{L:function(){return sn}});var nn=n(15558),e=n.n(nn),X=n(26068),Z=n.n(X),M=n(67825),F=n.n(M),S=n(76581),t=n(75271),B=n(48305),u=n.n(B),I=n(53649),T=n.n(I),r=n(27046),h=n(3772),W=n(1216),v=n(97601),y=n(68537),x=n(90142),i=n(52676),c,g,A=(0,h.kc)(function($){var R=$.css,U=$.token,J=$.isDarkMode;return{container:R(c||(c=T()([`
    padding-block: 12px;
    color: `,`;
  `])),U.colorTextSecondary),titlebox:R(g||(g=T()([`
    cursor: pointer;

    min-width: 140px;
    max-width: 230px;
    padding: 8px 12px;

    font-size: 12px;
    color: `,`;

    background: `,`;
    border-radius: 8px;
  `])),U.colorText,J?U.colorFillTertiary:"#f3f5fc")}}),p={fontSize:13,lineHeight:1.625,headerMultiple:.2,marginMultiple:.6},O=(0,t.memo)(function($){var R=$.children,U=$.second,J=$.done,o=A(),K=o.styles,G=o.theme,w=(0,t.useState)(!0),dn=u()(w,2),_=dn[0],pn=dn[1];return(0,i.jsxs)(x.D,{className:K.container,children:[(0,i.jsxs)(x.D,{className:K.titlebox,distribution:"space-between",flex:1,horizontal:!0,onClick:function(){pn(!_)},children:[(0,i.jsxs)(x.D,{gap:8,horizontal:!0,children:[(0,i.jsx)(r.Z,{color:G.purple,icon:W.Z}),J?"\u5DF2\u6DF1\u5EA6\u601D\u8003".concat(U?"\uFF08\u7528\u65F6 "+U+" s\uFF09":""," "):"\u601D\u8003\u4E2D..."]}),(0,i.jsx)(r.Z,{icon:_?v.Z:y.Z})]}),_&&(0,i.jsx)(S.Z,Z()(Z()({},p),{},{children:R}))]})}),D=O,b=n(25709),E=function(){return function(R){(0,b.Vn)(R,"element",function(U,J,o){if(U.type==="element"&&U.tagName==="p"){var K=U.children||[],G=K.findIndex(function(pn){return pn.type==="raw"&&pn.value==="<think>"}),w=K.findIndex(function(pn){return pn.type==="raw"&&pn.value==="</think>"});if(G!==-1&&w!==-1&&w>G){var dn=K.slice(G+1,w),_={children:dn,properties:{},tagName:"think",type:"element"};return o.children.splice(J,1,_),J}}})}},P=E,N=n(49827),on=n(34505),Q=function(){return function(R){(0,b.Vn)(R,"html",function(U,J,o){if(U.value==="<think>"){for(var K=J,G=K+1,w=!1;G<o.children.length;){var dn=o.children[G];if(dn.type==="html"&&dn.value==="</think>"){w=!0;break}G++}var _=w?G-K+1:o.children.length-K,pn=o.children.slice(K+1,w?G:void 0),On=pn.map(function(Bn){return Bn.type==="paragraph"?Bn.children.map(function(An){return An.value}).join(""):(0,N.x)(Bn)}).join(`

`).trim(),cn={data:{hChildren:[{type:"text",value:On||" "}],hName:"think"},position:U.position,type:"thinkBlock"};return o.children.splice(K,_,cn),[on.AM,K+1]}})}},z={Component:D,rehypePlugin:P,remarkPlugins:Q,tag:"think"},V=z,l=[V],L=function(R){var U=new RegExp("([^\\n])\\s*<think>","g"),J=new RegExp("<think>\\s*([^\\n])","g"),o=new RegExp("([^\\n])\\s*<\\/think>","g"),K=new RegExp("<\\/think>\\s*([^\\n])","g"),G=new RegExp("\\n{3,}","g");return(R||"").replaceAll(U,`$1

<think>`).replaceAll(J,`<think>

$1`).replaceAll(o,`$1

</think>`).replaceAll(K,`</think>

$1`).replaceAll(G,`

`)},k=["components","remarkPlugins","customComponentProps","children"],H=l.map(function($){return $.remarkPlugins}),sn=function(R){var U=R.components,J=U===void 0?{}:U,o=R.remarkPlugins,K=o===void 0?[]:o,G=R.customComponentProps,w=R.children,dn=F()(R,k),_=(0,t.useMemo)(function(){var On=Object.fromEntries(l.map(function(cn){return[cn.tag,function(Bn){return(0,i.jsx)(cn.Component,Z()(Z()({},Bn),G==null?void 0:G[cn.tag]))}]}));return Z()(Z()({},On),J)},[J,G]),pn=(0,t.useMemo)(function(){return[].concat(e()(H),e()(K))},[K]);return(0,i.jsx)(S.Z,Z()(Z()({components:_,remarkPlugins:pn},dn),{},{children:L(w)}))}},6381:function(Sn,tn,n){n.d(tn,{p:function(){return l}});var nn=n(26068),e=n.n(nn),X=n(48305),Z=n.n(X),M=n(67825),F=n.n(M),S=n(75271),t=n(90142),B=n(37541),u=typeof window!="undefined"&&"navigator"in window&&/(mac|iphone|ipod|ipad)/i.test(navigator.platform),I=n(53649),T=n.n(I),r=n(3772),h=n(69708),W,v,y,x,i,c=(0,r.kc)(function(L,k){var H=L.cx,sn=L.css,$=L.token,R=k.variant,U=k.fontSize,J=(0,h.Z)(U)?"".concat(U,"px"):U,o=sn(W||(W=T()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border: 1px solid `,`;
      border-radius: `,`px;
    `])),R==="block"?$.colorFillTertiary:"transparent",R==="block"?"transparent":$.colorBorderSecondary,$.borderRadius);return{container:H(R!=="pure"&&o,sn(v||(v=T()([`
          position: relative;
          overflow: hidden auto;
          width: 100%;
        `])))),editor:sn(y||(y=T()([`
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
      `])),$.fontFamilyCode,J),highlight:sn(x||(x=T()([`
        pointer-events: none;

        pre,
        code {
          overflow: hidden;
        }
      `]))),textarea:sn(i||(i=T()([`
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
      `])),$.colorText,$.colorTextQuaternary)}}),g=n(52676),A=["autoFocus","disabled","form","classNames","styles","ignoreTabKey","insertSpaces","maxLength","minLength","onBlur","onClick","onFocus","onKeyDown","onKeyUp","onValueChange","placeholder","readOnly","required","style","className","tabSize","textareaId","value","language","fontSize","variant"],p=89,O=90,D=77,b=57,E=219,P=222,N=192,on=100,Q=3e3,z=typeof window!="undefined"&&"navigator"in window&&/win/i.test(navigator.platform),V=function(k,H){return k.slice(0,Math.max(0,H)).split(`
`)},l=(0,S.forwardRef)(function(L,k){var H=L.autoFocus,sn=L.disabled,$=L.form,R=L.classNames,U=R===void 0?{}:R,J=L.styles,o=J===void 0?{}:J,K=L.ignoreTabKey,G=K===void 0?!1:K,w=L.insertSpaces,dn=w===void 0?!0:w,_=L.maxLength,pn=L.minLength,On=L.onBlur,cn=L.onClick,Bn=L.onFocus,An=L.onKeyDown,Dn=L.onKeyUp,Nn=L.onValueChange,bn=L.placeholder,m=L.readOnly,an=L.required,en=L.style,gn=L.className,yn=L.tabSize,Y=yn===void 0?2:yn,un=L.textareaId,Rn=L.value,Hn=L.language,Kn=L.fontSize,Un=Kn===void 0?12:Kn,zn=L.variant,vn=zn===void 0?"ghost":zn,te=F()(L,A),Zn=c({fontSize:Un,variant:vn}),qn=Zn.styles,$n=Zn.cx,En=(0,S.useRef)({offset:-1,stack:[]}),Pn=(0,S.useRef)(null),In=(0,S.useState)(!0),wn=Z()(In,2),ne=wn[0],ee=wn[1],Qn=(0,S.useCallback)(function(xn){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=En.current,j=a.stack,s=a.offset;if(j.length>0&&s>-1){En.current.stack=j.slice(0,s+1);var d=En.current.stack.length;if(d>on){var f=d-on;En.current.stack=j.slice(f,d),En.current.offset=Math.max(En.current.offset-f,0)}}var q=Date.now();if(C){var fn=En.current.stack[En.current.offset];if(fn&&q-fn.timestamp<Q){var Cn,ln,mn,hn=/[^\da-z]([\da-z]+)$/i,rn=(Cn=V(fn.value,fn.selectionStart).pop())===null||Cn===void 0?void 0:Cn.match(hn),Wn=(ln=V(xn.value,xn.selectionStart).pop())===null||ln===void 0?void 0:ln.match(hn);if(rn!=null&&rn[1]&&Wn!==null&&Wn!==void 0&&(mn=Wn[1])!==null&&mn!==void 0&&mn.startsWith(rn[1])){En.current.stack[En.current.offset]=e()(e()({},xn),{},{timestamp:q});return}}}En.current.stack.push(e()(e()({},xn),{},{timestamp:q})),En.current.offset++},[]),ae=(0,S.useCallback)(function(){var xn=Pn.current;if(xn){var C=xn.value,a=xn.selectionStart,j=xn.selectionEnd;Qn({selectionEnd:j,selectionStart:a,value:C})}},[Qn]),Fn=function(C){var a=Pn.current;a&&(a.value=C.value,a.selectionStart=C.selectionStart,a.selectionEnd=C.selectionEnd,Nn==null||Nn(C.value))},Vn=function(C){var a=Pn.current,j=En.current.stack[En.current.offset];j&&a&&(En.current.stack[En.current.offset]=e()(e()({},j),{},{selectionEnd:a.selectionEnd,selectionStart:a.selectionStart})),Qn(C),Fn(C)},Ln=function(){var C=En.current,a=C.stack,j=C.offset,s=a[j-1];s&&(Fn(s),En.current.offset=Math.max(j-1,0))},jn=function(){var C=En.current,a=C.stack,j=C.offset,s=a[j+1];s&&(Fn(s),En.current.offset=Math.min(j+1,a.length-1))},Tn=function(C){if(!(An&&(An(C),C.defaultPrevented))){C.key==="Escape"&&C.currentTarget.blur();var a=C.currentTarget,j=a.value,s=a.selectionStart,d=a.selectionEnd,f=(dn?" ":"	").repeat(Y),q=z?C.ctrlKey&&C.keyCode===p:C.ctrlKey&&C.keyCode===O&&C.shiftKey;if(C.key==="Tab"&&!G&&ne)if(C.preventDefault(),C.shiftKey){var fn=V(j,s),Cn=fn.length-1,ln=V(j,d).length-1,mn=j.split(`
`).map(function(pe,se){return se>=Cn&&se<=ln&&pe.startsWith(f)?pe.slice(f.length):pe}).join(`
`);if(j!==mn){var hn=fn[Cn];Vn({selectionEnd:d-(j.length-mn.length),selectionStart:hn!=null&&hn.startsWith(f)?s-f.length:s,value:mn})}}else if(s===d){var rn=s+f.length;Vn({selectionEnd:rn,selectionStart:rn,value:j.slice(0,Math.max(0,s))+f+j.slice(Math.max(0,d))})}else{var Wn=V(j,s),_n=Wn.length-1,de=V(j,d).length-1,le=Wn[_n];Vn({selectionEnd:d+f.length*(de-_n+1),selectionStart:le&&/\S/.test(le)?s+f.length:s,value:j.split(`
`).map(function(pe,se){return se>=_n&&se<=de?f+pe:pe}).join(`
`)})}else if(C.key==="Backspace"){var Gn=s!==d,Yn=j.slice(0,Math.max(0,s));if(Yn.endsWith(f)&&!Gn){C.preventDefault();var me=s-f.length;Vn({selectionEnd:me,selectionStart:me,value:j.slice(0,Math.max(0,s-f.length))+j.slice(Math.max(0,d))})}}else if(C.key==="Enter"){if(s===d){var ce=V(j,s).pop(),fe=ce==null?void 0:ce.match(/^\s+/);if(fe!=null&&fe[0]){C.preventDefault();var he=`
`+fe[0],Oe=s+he.length;Vn({selectionEnd:Oe,selectionStart:Oe,value:j.slice(0,Math.max(0,s))+he+j.slice(Math.max(0,d))})}}}else if(C.keyCode===b||C.keyCode===E||C.keyCode===P||C.keyCode===N){var xe;C.keyCode===b&&C.shiftKey?xe=["(",")"]:C.keyCode===E?xe=C.shiftKey?["{","}"]:["[","]"]:C.keyCode===P?xe=C.shiftKey?['"','"']:["'","'"]:C.keyCode===N&&!C.shiftKey&&(xe=["`","`"]),s!==d&&xe&&(C.preventDefault(),Vn({selectionEnd:d+2,selectionStart:s,value:j.slice(0,Math.max(0,s))+xe[0]+j.substring(s,d)+xe[1]+j.slice(Math.max(0,d))}))}else(u?C.metaKey&&C.keyCode===O:C.ctrlKey&&C.keyCode===O)&&!C.shiftKey&&!C.altKey?(C.preventDefault(),Ln()):(u?C.metaKey&&C.keyCode===O&&C.shiftKey:q)&&!C.altKey?(C.preventDefault(),jn()):C.keyCode===D&&C.ctrlKey&&(!u||C.shiftKey)&&(C.preventDefault(),ee(function(pe){return!pe}))}},ie=function(C){var a=C.currentTarget,j=a.value,s=a.selectionStart,d=a.selectionEnd;Qn({selectionEnd:d,selectionStart:s,value:j},!0),Nn(j)};return(0,S.useEffect)(function(){ae()},[ae]),(0,S.useImperativeHandle)(k,function(){return{get session(){return{history:En.current}},set session(xn){En.current=xn.history}}},[]),(0,g.jsx)(t.D,e()(e()({className:$n(qn.container,gn),style:en},te),{},{children:(0,g.jsxs)("div",{className:qn.editor,children:[(0,g.jsx)(B.d,{className:$n(qn.highlight,U==null?void 0:U.highlight),language:Hn,style:o.highlight,children:Rn}),(0,g.jsx)("textarea",{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",autoFocus:H,className:$n(qn.textarea,U==null?void 0:U.textarea),"data-gramm":!1,disabled:sn,form:$,id:un,maxLength:_,minLength:pn,onBlur:On,onChange:ie,onClick:cn,onFocus:Bn,onKeyDown:Tn,onKeyUp:Dn,placeholder:bn,readOnly:m,ref:function(C){return Pn.current=C},required:an,spellCheck:!1,style:e()({},o==null?void 0:o.textarea),value:Rn})]})}))})},13306:function(Sn,tn,n){n.d(tn,{U:function(){return D}});var nn=n(26068),e=n.n(nn),X=n(48305),Z=n.n(X),M=n(67825),F=n.n(M),S=n(97157),t=n(94388),B=n(38590),u=n(22622),I=n(75271),T=n(84569),r=n.n(T),h=n(53649),W=n.n(h),v=n(3772),y,x,i,c,g,A=(0,v.kc)(function(b){var E=b.css,P=b.token,N=b.prefixCls;return{root:E(y||(y=W()([`
      overflow: hidden;
    `]))),wrapper:E(x||(x=W()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),P.marginLG),content:E(i||(i=W()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),P.borderRadiusLG,P.boxShadowSecondary),dragWrapper:E(c||(c=W()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:E(g||(g=W()([`
      cursor: move;
    `])))}}),p=n(52676),O=["title","classNames","defaultPosition","onPositionChange"],D=(0,I.memo)(function(b){var E=b.title,P=b.classNames,N=P===void 0?{}:P,on=b.defaultPosition,Q=b.onPositionChange,z=F()(b,O),V=A(),l=V.styles,L=V.cx,k=(0,I.useState)({left:0,top:0,bottom:0,right:0}),H=Z()(k,2),sn=H[0],$=H[1],R=(0,I.useRef)(null),U=function(o,K){var G,w=window.document.documentElement,dn=w.clientWidth,_=w.clientHeight,pn=(G=R.current)===null||G===void 0?void 0:G.getBoundingClientRect();pn&&$({left:-pn.left+K.x,right:dn-(pn.right-K.x),top:-pn.top+K.y,bottom:_-(pn.bottom-K.y)})};return(0,p.jsx)(t.Z,e()(e()({},z),{},{classNames:e()(e()({},N),{},{wrapper:L(l.wrapper,N.wrapper),content:L(l.content,N.content)}),destroyOnClose:!0,drawerRender:function(o){return(0,p.jsx)(r(),{bounds:sn,defaultPosition:on,handle:".".concat(l.dragHandle),nodeRef:R,onStart:function(G,w){return U(G,w)},onStop:function(G,w){Q==null||Q({x:w.x,y:w.y})},children:(0,p.jsx)("div",{className:l.dragWrapper,ref:R,children:o})})},mask:!1,rootClassName:l.root,title:(0,p.jsxs)(B.Z,{align:"center",className:l.dragHandle,children:[(0,p.jsx)(B.Z,{flex:2,children:E}),(0,p.jsx)(B.Z,{children:(0,p.jsx)(u.ZP,{className:l.dragHandle,icon:(0,p.jsx)(S.Z,{}),type:"text"})})]})}))})},5795:function(Sn,tn,n){n.d(tn,{d:function(){return v}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(94388),F=n(75271),S=n(53649),t=n.n(S),B=n(3772),u,I,T,r=(0,B.kc)(function(x,i){var c=x.css,g=x.prefixCls,A=i.closeIcon,p=i.closeIconPlacement,O=i.extra,D=c(u||(u=t()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),g,g,!(A===null||A===!1)&&c(I||(I=t()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),g));return{custom:c(T||(T=t()([`
        `,`
      `])),(!p||p==="right"||p==="auto"&&!O)&&D)}},{hashPriority:"low"}),h=n(52676),W=["className"],v=function(i){var c=i.className,g=Z()(i,W),A=r(g),p=A.styles,O=A.cx;return(0,h.jsx)(M.Z,e()(e()({},g),{},{className:O(p.custom,c)}))},y=null},99512:function(Sn,tn,n){n.d(tn,{L:function(){return i}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(38590),F=n(159),S=n(75271),t=n(53649),B=n.n(t),u=n(3772),I,T,r,h,W=(0,u.kc)(function(c,g){var A=c.css,p=c.token,O=g.divider,D=g.position;return{menuWrapper:A(I||(I=B()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),p.colorBgElevated,p.borderRadiusLG,p.boxShadowSecondary),menuExtra:A(T||(T=B()([`
        padding: 10px 16px 4px;
        `,`
      `])),O&&A(D==="top"?r||(r=B()([`
              border-bottom: 1px solid `,`;
            `])):h||(h=B()([`
              border-top: 1px solid `,`;
            `])),p.colorSplit))}}),v=n(52676),y=["menuExtra","dropdownRender"],x=function(g){var A=g.menuExtra,p=g.dropdownRender,O=Z()(g,y),D=A||{},b=D.position,E=b===void 0?"top":b,P=D.divider,N=P===void 0?!1:P,on=D.content,Q=W({divider:N,position:E}),z=Q.styles,V=(0,S.useCallback)(function(l){var L=S.cloneElement(l,{style:{boxShadow:"none",border:"none"}});if(!on)return p?(0,v.jsx)(M.Z,{className:z.menuWrapper,vertical:!0,children:p(L)}):l;var k=(0,v.jsx)(M.Z,{align:"center",className:z.menuExtra,children:on});return(0,v.jsxs)(M.Z,{className:z.menuWrapper,vertical:!0,children:[E==="top"&&k,L,E==="bottom"&&k]})},[on,p,E,z.menuExtra,z.menuWrapper]);return(0,v.jsx)(F.Z,e()({dropdownRender:V},O))},i=x;i.Button=F.Z.Button},99335:function(Sn,tn,n){n.d(tn,{i:function(){return I}});var nn=n(26068),e=n.n(nn),X=n(48305),Z=n.n(X),M=n(57919),F=n(28281),S=n(75271),t=n(65720),B=n(99033),u=n(52676),I=(0,S.memo)(function(T){var r=T.value,h=T.onChange,W=T.classNames,v=W===void 0?{}:W,y=T.onEditingChange,x=T.editing,i=T.openModal,c=T.onOpenChange,g=T.placeholder,A=T.showEditWhenEmpty,p=A===void 0?!1:A,O=T.styles,D=T.height,b=T.inputType,E=T.editButtonSize,P=T.text,N=T.fullFeaturedCodeBlock,on=T.model,Q=T.fontSize,z=T.markdownProps,V=(0,t.Z)(!1,{onChange:y,value:x}),l=Z()(V,2),L=l[0],k=l[1],H=(0,t.Z)(!1,{onChange:c,value:i}),sn=Z()(H,2),$=sn[0],R=sn[1],U=D==="auto",J=(0,u.jsx)(M.Z,{className:v==null?void 0:v.input,classNames:{textarea:v==null?void 0:v.textarea},defaultValue:r,editButtonSize:E,height:D,onCancel:function(){return k(!1)},onConfirm:function(K){h==null||h(K),k(!1)},placeholder:g,style:O==null?void 0:O.input,text:P,textareaClassname:v==null?void 0:v.input,type:b});return!r&&p?J:(0,u.jsxs)(u.Fragment,{children:[!$&&L?J:(0,u.jsx)(B.L,e()(e()({className:v==null?void 0:v.markdown,fontSize:Q,fullFeaturedCodeBlock:N,style:e()({height:U?"unset":D},O==null?void 0:O.markdown),variant:"chat"},z),{},{children:r||g||""})),$&&(0,u.jsx)(F.Z,{editing:L,extra:on==null?void 0:on.extra,footer:on==null?void 0:on.footer,height:D,onChange:h,onEditingChange:k,onOpenChange:function(K){R(K),k(!1)},open:$,placeholder:g,text:P,value:r})]})})},14866:function(Sn,tn,n){n.d(tn,{w:function(){return t}});var nn=n(48305),e=n.n(nn),X=n(75271),Z=function(u){return typeof u=="string"?document.querySelector("#".concat(u)):(u==null?void 0:u.current)||u},M=":not([disabled]):not([readonly])",F=["text","password","search","tel","url","number","email",""].map(function(B){return'input[type="'.concat(B,'"]').concat(M)}).join(", ")+", input:not([type])".concat(M,", textarea").concat(M),S=function(u){var I,T=Z(u);if(T){var r=(I=T.querySelector)===null||I===void 0?void 0:I.call(T,F);if(r!=null&&r.focus)return r.focus(),!0}},t=function(u){var I=(0,X.useState)(!1),T=e()(I,2),r=T[0],h=T[1];X.useEffect(function(){if(!(r||!u)){var W=S(u);W&&h(!0)}},[u,r,h])}},20147:function(Sn,tn,n){n.d(tn,{MX:function(){return S},wK:function(){return F},wL:function(){return Z.w}});var nn=n(26068),e=n.n(nn),X=n(75271),Z=n(14866),M=n(52676),F=function(B){var u,I=B.autoFocus,T=I===void 0?!0:I,r=(0,X.useRef)(null);return(0,Z.w)(T?r:void 0),(0,M.jsx)("div",{className:B.className,id:B.id,ref:r,style:(u=B.style)!==null&&u!==void 0?u:{display:B.className?void 0:"contents"},children:B.children})},S=function(B){return function(u){var I=function(h){return(0,M.jsx)(F,e()(e()({},B||{}),{},{children:(0,M.jsx)(u,e()({},h))}))},T=u.displayName||u.name||"Component";return I.displayName="withFormHelper(".concat(T,")"),I}}},25969:function(Sn,tn,n){n.d(tn,{n:function(){return O}});var nn=n(26068),e=n.n(nn),X=n(48305),Z=n.n(X),M=n(67825),F=n.n(M),S=n(27046),t=n(50999),B=n(41117),u=n(45798),I=n(3548),T=n(5312),r=n(75271),h=n(53649),W=n.n(h),v=n(3772),y,x,i,c,g=(0,v.kc)(function(D){var b=D.css,E=D.token,P="#222222";return{root:b(y||(y=W()([`
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
      `])),P,E.borderRadiusLG,E.marginXXS,E.paddingXS,P,E.borderRadiusLG,E.borderRadiusLG,E.borderRadius,E.borderRadius,P,E.borderRadiusLG,E.fontFamilyCode),searchBarIcon:b(x||(x=W()([`
        font-size: 16px;
      `]))),loaderText:b(i||(i=W()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),E.fontFamilyCode),loaderIcon:b(c||(c=W()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),E.marginSM,E.marginSM)}},{hashPriority:"low"}),A=n(52676),p=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],O=function(b){var E=b.className,P=b.id,N=b.style,on=b.height,Q=b.onScroll,z=b.url,V=b.websocket,l=b.refreshInterval,L=b.onLoad,k=b.onError,H=F()(b,p),sn=g(),$=sn.cx,R=sn.styles,U=(0,r.useState)(0),J=Z()(U,2),o=J[0],K=J[1],G=(0,r.useState)(!1),w=Z()(G,2),dn=w[0],_=w[1],pn=(0,r.useState)(!1),On=Z()(pn,2),cn=On[0],Bn=On[1],An=(0,r.useRef)(),Dn=(0,r.useRef)();(0,r.useEffect)(function(){return function(){clearTimeout(An.current),clearTimeout(Dn.current)}},[]),(0,r.useEffect)(function(){var an;return z&&!V&&l&&(an=setInterval(function(){K(function(en){return en+1})},l)),function(){clearInterval(an)}},[l,z,V]);var Nn=(0,r.useMemo)(function(){return z&&(An.current=setTimeout(function(){_(!0),An.current=void 0},50),"".concat(z,"#").concat(o))},[z,o]),bn=(0,r.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&clearTimeout(An.current),_(!1),Bn(!0),Dn.current=setTimeout(function(){return Bn(!1)},100),L==null||L()},[L]),m=(0,r.useCallback)(function(an){_(!1),clearTimeout(An.current),k==null||k(an)},[k]);return(0,A.jsxs)("div",{className:$(R.root,E),id:P,style:e()({height:on},N),children:[(0,A.jsx)(t.Uu,{render:function(en){var gn=en.follow,yn=en.onScroll;return(0,A.jsx)(t.A9,e()(e()({url:Nn,websocket:V},H),{},{follow:cn||gn,height:on,iconFilterLines:(0,A.jsx)(S.Z,{className:R.searchBarIcon,icon:B.Z}),iconFindNext:(0,A.jsx)(S.Z,{className:R.searchBarIcon,icon:u.Z}),iconFindPrevious:(0,A.jsx)(S.Z,{className:R.searchBarIcon,icon:I.Z}),onError:m,onLoad:bn,onScroll:function(un){yn(un),Q==null||Q(un)}}))},startFollowing:!0}),dn&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("div",{className:R.loaderText,children:"loading ..."}),(0,A.jsx)(S.Z,{className:R.loaderIcon,icon:T.Z,spin:!0})]})]})}},52625:function(Sn,tn,n){n.d(tn,{T:function(){return i}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(3772),F=n(75271),S=n(90142),t=n(36075),B=n.n(t),u=n(52676),I=(0,F.memo)(function(c){var g=Object.assign({},(B()(c),c));return(0,u.jsx)("svg",e()(e()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},g),{},{children:(0,u.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),T=(0,F.memo)(function(c){var g=Object.assign({},(B()(c),c));return(0,u.jsxs)("svg",e()(e()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},g),{},{children:[(0,u.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,u.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,u.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),r=(0,F.memo)(function(c){var g=Object.assign({},(B()(c),c));return(0,u.jsxs)("svg",e()(e()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},g),{},{children:[(0,u.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,u.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,u.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,u.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,u.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,u.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,u.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),h=n(53649),W=n.n(h),v,y=(0,M.kc)(function(c){var g=c.css;return{extraTitle:g(v||(v=W()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),x=["type","size","style","extra","className"],i=(0,F.memo)(function(c){var g=c.type,A=g===void 0?"img":g,p=c.size,O=p===void 0?32:p,D=c.style,b=c.extra,E=c.className,P=Z()(c,x),N=(0,M.Fg)(),on=y(),Q=on.styles,z;switch(A){case"text":{z=(0,u.jsx)(r,e()({className:E,height:O,style:D,width:O*2.9375},P));break}case"combine":{z=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(T,e()({height:O,style:D,width:O},P)),(0,u.jsx)(r,{style:{height:O,marginLeft:Math.round(O/4),width:"auto"}})]});break}case"img":default:{z=(0,u.jsx)(T,e()({height:O,style:D,width:O},P));break}}if(!b)return z;var V=Math.round(O/3*1.9);return(0,u.jsxs)(S.D,e()(e()({align:"center",className:E,horizontal:!0,style:D},P),{},{children:[z,(0,u.jsx)(I,{style:{color:N.colorFill,height:V,width:V}}),(0,u.jsx)("div",{className:Q.extraTitle,style:{fontSize:V},children:b})]}))})},94311:function(Sn,tn,n){n.d(tn,{MN:function(){return nn},Nj:function(){return F},bq:function(){return Z},pB:function(){return X},rO:function(){return e},tj:function(){return M}});var nn=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,e="\\(",X=function(t){return"(?:"+t.join("|")+")"},Z=function(t,B){var u=t.length===0?"":"(?!"+t.join("|")+")";return u+"[^\\s"+B+"]"},M=function(t){return"(?:\\.[ |$]|\\s|["+t+"]|)"},F=75},58545:function(Sn,tn,n){n.d(tn,{M$:function(){return r},hc:function(){return B}});var nn=n(48305),e=n.n(nn),X=n(71561),Z=n(33803),M=n(32199),F=n(36419),S=n(75271),t=n(94311),B=function(W,v){var y=(0,S.useRef)(null),x=(0,X.g)(),i=e()(x,1),c=i[0],g=(0,Z.y)(W),A=e()(g,3),p=A[0],O=A[1],D=A[2],b=(0,S.useCallback)(function(P){var N=(0,F.dL)(),on=N==null?void 0:N.getNodes();if(!p&&(on==null?void 0:on.length)===1&&c.dispatchCommand(v,void 0),p&&(0,F.iO)(N)){P.preventDefault();var Q=(0,F.gI)(W);if((0,F.k$)(Q))return v&&c.dispatchCommand(v,void 0),Q.remove(),!0}return!1},[p,W,v,c]),E=(0,S.useCallback)(function(P){P.stopPropagation(),D(),O(!0)},[O,D]);return(0,S.useEffect)(function(){var P=y.current;return P&&P.addEventListener("click",E),function(){P&&P.removeEventListener("click",E)}},[E]),(0,S.useEffect)(function(){return(0,M.qV)(c.registerCommand(F.MK,b,F.KB),c.registerCommand(F.aR,b,F.KB))},[c,D,b]),[y,p]},u=function(){var W=useRef(null),v=useState(!1),y=_slicedToArray(v,2),x=y[0],i=y[1],c=useCallback(function(g){g.stopPropagation(),i(function(A){return!A})},[]);return useEffect(function(){var g=W.current;return g&&g.addEventListener("click",c),function(){g&&g.removeEventListener("click",c)}},[c]),[W,x,i]};function I(h,W,v,y){return new RegExp((W?"(^|\\s|".concat(W,")("):"(^|\\s)(")+(0,t.pB)(h)+"((?:"+(0,t.bq)(h,v)+(y?(0,t.tj)(v):"")+"){0,"+t.Nj+"}))$")}function T(h,W,v,y,x){var i=I(W,v,y,x).exec(h);if(i!==null){var c=i[1],g=i[2],A=i[3];if(g.length>0)return{leadOffset:i.index+c.length,matchingString:A,replaceableString:g}}return null}var r=function(W,v){var y=v.punctuation,x=v.preTriggerChars,i=v.allowSpaces,c=(0,S.useState)(null),g=e()(c,2),A=g[0],p=g[1],O=(0,S.useCallback)(function(D){var b=T(D,W,x,y,i);if(b){var E=b.replaceableString,P=b.matchingString,N=E.lastIndexOf(P),on=N===-1?E:E.slice(0,Math.max(0,N))+E.slice(Math.max(0,N+P.length));if(p(on||null),b.replaceableString)return b}else p(null);return null},[x,i,y,W]);return{trigger:A,checkForMentionMatch:O}}},99353:function(Sn,tn,n){n.d(tn,{BM:function(){return r.BM},P0:function(){return $.P0},qU:function(){return $.qU},CF:function(){return $.CF},oj:function(){return C},wv:function(){return $.wv},Ab:function(){return $.Ab},hC:function(){return $.hC}});var nn=n(82092),e=n.n(nn),X=n(26068),Z=n.n(X),M=n(69470),F=n(14837),S=n(64419),t=n(30924),B=n(6988),u=n(56875),I=n(44250),T=n(98639),r=n(36419),h=n(75271),W=n(28485),v=n(25298),y=n.n(v),x=n(17069),i=n.n(x),c=n(9504),g=n.n(c),A=n(38836),p=n.n(A),O=n(21742),D=n.n(O),b=n(83136),E=n.n(b),P=function(a){D()(s,a);var j=E()(s);function s(){return y()(this,s),j.apply(this,arguments)}return i()(s,[{key:"createDOM",value:function(f){var q=g()(p()(s.prototype),"createDOM",this).call(this,f);return q.classList.add("align-middle"),q}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(f){return new s(f.__text,f.__key)}},{key:"importJSON",value:function(f){var q=(0,r.MX)(f.text);return q.setFormat(f.format),q.setDetail(f.detail),q.setMode(f.mode),q.setStyle(f.style),q}}]),s}(r.R2);function N(a){return new P(a)}var on=n(48305),Q=n.n(on),z=n(71561),V=function(j){var s=j.editable,d=(0,z.g)(),f=Q()(d,1),q=f[0];return(0,h.useEffect)(function(){q.setEditable(s)},[s,q]),null},l=function(j){var s=j.editorRef,d=(0,z.g)(),f=Q()(d,1),q=f[0];return(0,h.useImperativeHandle)(s,function(){return q}),null},L=n(49652),k=n(32199),H=n(26562),sn=(0,h.memo)(function(a){var j=a.onInsert,s=a.onDelete,d=(0,z.g)(),f=Q()(d,1),q=f[0];return(0,h.useEffect)(function(){if(!q.hasNodes([L.AV]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,k.qV)(q.registerCommand(H.CF,function(fn){q.dispatchCommand(H.P0,null);var Cn=(0,L.IY)(fn);return(0,r.od)([Cn]),j&&j(),!0},r.VN),q.registerCommand(H.qU,function(){return s&&s(),!0},r.VN))},[q,j,s]),null});sn.displayName="MentionNodePlugin";var $=n(2284),R=(0,h.memo)(function(a){var j=a.onInsert,s=(0,z.g)(),d=Q()(s,1),f=d[0];(0,h.useEffect)(function(){if(!f.hasNodes([L.AV]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[f]);var q=(0,h.useCallback)(function(ln){j&&j();var mn=ln.getTextContent().slice(2,-2);return(0,r.U2)((0,L.IY)(mn))},[j]),fn=(0,h.useCallback)(function(ln){var mn=H.xA.exec(ln);if(mn===null)return null;var hn=mn.index,rn=hn+mn[0].length;return{end:rn,start:hn}},[]),Cn=(0,h.useCallback)(function(ln){return H.xA.lastIndex=0,(0,$.Ab)(ln,fn,q)},[q,fn]);return(0,h.useEffect)(function(){return H.xA.lastIndex=0,(0,k.qV)(f.registerNodeTransform(P,Cn))},[]),null}),U=n(15558),J=n.n(U),o=n(99934),K=n(26082),G=n(30874),w=n(30967),dn=n(94311),_=n(58545),pn=n(83606),On=n(62657),cn=n.n(On),Bn=function(a){D()(s,a);var j=E()(s);function s(d){var f,q=d.label,fn=d.value,Cn=d.title,ln=d.data,mn=d.icon,hn=d.extraElement,rn=d.keywords,Wn=d.keyboardShortcut,_n=d.disabled,de=d.onSelect,le=d.children,Gn=d.isChild;return y()(this,s),f=j.call(this,fn),e()(cn()(f),"label",void 0),e()(cn()(f),"value",void 0),e()(cn()(f),"htmlTitle",void 0),e()(cn()(f),"title",void 0),e()(cn()(f),"key",void 0),e()(cn()(f),"icon",void 0),e()(cn()(f),"extraElement",void 0),e()(cn()(f),"keywords",void 0),e()(cn()(f),"keyboardShortcut",void 0),e()(cn()(f),"onSelect",void 0),e()(cn()(f),"disabled",void 0),e()(cn()(f),"data",void 0),e()(cn()(f),"children",void 0),e()(cn()(f),"isChild",void 0),f.value=fn,f.label=q,f.htmlTitle=Cn,f.title=q,f.key=fn,f.keywords=rn||[],f.icon=mn,f.extraElement=hn,f.keyboardShortcut=Wn,f.onSelect=de.bind(cn()(f)),f.disabled=_n,f.data=ln,f.isChild=Gn!=null?Gn:!1,f.children=le==null?void 0:le.map(function(Yn){return new s(Z()(Z()({},Yn),{},{isChild:!0}))}),f}return i()(s)}(o.n),An=function a(j,s){var d;return j.children=(d=j.children)===null||d===void 0?void 0:d.filter(function(f){if(!f.children)return s(f);var q=a(f,s);return s(f)||(q.children||[]).length>0}),j},Dn=function(j,s){var d=(0,z.g)(),f=Q()(d,1),q=f[0],fn=(0,h.useCallback)(function(ln){var mn,hn=new RegExp((0,pn.Z)(s),"i");return hn.test(ln.label)||((mn=ln.keywords)===null||mn===void 0?void 0:mn.some(function(rn){return hn.test(rn)}))||!1},[s]),Cn=(0,h.useMemo)(function(){var ln=function hn(rn){var Wn=Z()(Z()({},rn),{},{title:rn.title||rn.selectedLabel,children:void 0,onSelect:function(){q.dispatchCommand(H.CF,rn.value)}});return rn.children&&(Wn.children=rn.children.map(function(_n){return hn(_n)})),Wn},mn=j.map(function(hn){return new Bn(ln(hn))});return s?mn.map(function(hn){return hn.children?An(hn,fn):hn}).filter(function(hn){return fn(hn)||(hn.children||[]).length>0}):mn},[j,s,q,fn]);return{options:Cn}},Nn=n(66642),bn=n(38590),m=n(94729),an=n(53649),en=n.n(an),gn=n(3772),yn,Y,un,Rn,Hn,Kn,Un,zn=(0,gn.kc)(function(a,j){var s=a.css,d=a.token,f=a.prefixCls,q=j.isSelected,fn=j.disabled,Cn=s(yn||(yn=en()([`
      background-color: `,`;
    `])),d.colorFillTertiary);return{anchor:s(Y||(Y=en()([`
        z-index: 9999;
      `]))),menuEmpty:s(un||(un=en()([`
        padding: `,`px;
      `])),d.padding),menuOverlay:s(Rn||(Rn=en()([`
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
      `])),d.marginXXS,d.paddingXXS,d.colorBgElevated,d.borderRadius,d.boxShadow,f),menuItem:s(Hn||(Hn=en()([`
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
      `])),fn?"not-allowed":"pointer",fn?"none":"all",d.paddingXS,d.borderRadius,fn?d.colorTextDisabled:d.colorText,d.fontSize,q&&Cn,Cn),menuItemIcon:s(Kn||(Kn=en()([`
        color: `,`;
      `])),d.colorInfoText),menuItemLabel:s(Un||(Un=en()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),vn=n(52676),te=m.C.Text,Zn=(0,h.memo)(function(a){var j=a.index,s=a.isSelected,d=a.onClick,f=a.onMouseEnter,q=a.option,fn=a.queryString,Cn=a.showIcon,ln=Cn===void 0?!0:Cn,mn=zn({isSelected:s,disabled:q.disabled}),hn=mn.styles,rn=q.label,Wn=(0,h.useMemo)(function(){var Yn=rn,me="",ce="";if(fn){var fe=new RegExp((0,pn.Z)(fn),"i"),he=fe.exec(q.label);he&&(Yn=rn.slice(0,Math.max(0,he.index)),me=he[0],ce=rn.slice(Math.max(0,he.index+he[0].length)))}return{before:Yn,middle:me,after:ce}},[q.label,fn,rn]),_n=Wn.before,de=Wn.middle,le=Wn.after,Gn=(0,h.useRef)(null);return(0,h.useEffect)(function(){if(s){var Yn;Gn==null||(Yn=Gn.current)===null||Yn===void 0||Yn.scrollIntoView({behavior:"smooth",block:"nearest"})}},[s]),(0,h.useEffect)(function(){q.setRefElement(Gn==null?void 0:Gn.current)},[]),(0,vn.jsxs)(bn.Z,{align:"center",className:hn.menuItem,gap:4,onClick:function(){return d==null?void 0:d(j,q)},onMouseEnter:function(){return f==null?void 0:f(j,q)},ref:Gn,tabIndex:-1,title:q.htmlTitle||q.label,children:[ln&&(0,vn.jsx)(bn.Z,{className:hn.menuItemIcon,children:q.icon}),(0,vn.jsxs)("div",{className:hn.menuItemLabel,children:[_n,(0,vn.jsx)(te,{mark:!0,children:de}),le]}),(0,vn.jsx)(bn.Z,{children:q.extraElement})]},q.key)});Zn.displayName="MentionMenuItem";var qn=(0,h.memo)(function(a){var j=a.selectedIndex,s=a.options,d=a.onClick,f=a.onMouseEnter,q=a.queryString,fn=zn({}),Cn=fn.styles;return(0,vn.jsxs)(vn.Fragment,{children:[s.length===0&&(0,vn.jsx)(Nn.Z,{className:Cn.menuEmpty,image:Nn.Z.PRESENTED_IMAGE_SIMPLE}),s.map(function(ln,mn){return(0,vn.jsx)(Zn,{index:mn,isSelected:j===mn,onClick:d,onMouseEnter:f,option:ln,queryString:q},ln.key)})]})}),$n=(0,h.memo)(function(a){var j=a.overlayClassName,s=a.triggers,d=a.options,f=d===void 0?[]:d,q=a.allowSpaces,fn=q===void 0?!0:q,Cn=a.punctuation,ln=Cn===void 0?dn.MN:Cn,mn=a.preTriggerChars,hn=mn===void 0?dn.rO:mn,rn=a.onSelect,Wn=a.onOpen,_n=a.parent,de=zn({}),le=de.cx,Gn=de.styles,Yn=(0,z.g)(),me=Q()(Yn,1),ce=me[0],fe=(0,_.M$)(s,{punctuation:ln,preTriggerChars:hn,allowSpaces:fn}),he=fe.trigger,Oe=fe.checkForMentionMatch,xe=(0,h.useState)(null),pe=Q()(xe,2),se=pe[0],Pe=pe[1],je=Dn(f,se),Ee=je.options,ue=(0,h.useMemo)(function(){var kn=function Jn(Me){return(0,G.Z)(Me,function(ve){return[ve].concat(J()(ve.children?Jn(ve.children):[]))})};return kn(Ee)},[Ee]),Xn=(0,h.useCallback)(function(kn,Jn,Me,ve){rn==null||rn(kn,he,se),ce.update(function(){Jn&&kn!==null&&kn!==void 0&&kn.key&&Jn.remove(),kn!=null&&kn.onSelect&&kn.onSelect(ve),Me()})},[ce,rn,se,he]),Mn=(0,h.useRef)(),oe=(0,h.useCallback)(function(kn){var Jn=kn.selectedIndex,Me=kn.setHighlightedIndex;if(Jn!==null){var ve;if((ve=ue[Jn])!==null&&ve!==void 0&&ve.disabled){var be=Jn;if(Jn===ue.length-1)be=ue.length===1?null:0,Me(be);else if(Jn!==Mn.current){var ge;Jn>((ge=Mn.current)!==null&&ge!==void 0?ge:0)?be++:be--,Me(be)}}Mn.current=Jn}},[ue]),re=(0,h.useCallback)(function(kn){var Jn=kn.selectedIndex,Me=kn.selectOptionAndCleanUp;return oe(kn),(0,vn.jsx)(T.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0,nodeHoverBg:"transparent"}}},children:(0,vn.jsx)(K.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(be,ge){var Ae=ge.nativeEvent;Ae.stopPropagation(),ce.dispatchCommand(H.P0,{})},onSelect:function(be,ge){Me(ge.node)},titleRender:function(be){var ge;return(0,vn.jsx)(Zn,{isSelected:((ge=ue[Jn])===null||ge===void 0?void 0:ge.value)===be.value,option:be,queryString:se,showIcon:!be.isChild})},treeData:Ee})})},[oe,Ee,ce,ue,se]),Se=(0,h.useCallback)(function(kn,Jn,Me){var ve=Jn.selectedIndex,be=Jn.selectOptionAndCleanUp,ge=Jn.setHighlightedIndex;return oe(Jn),kn.current?w.createPortal((0,vn.jsx)("div",{className:le(Gn.menuOverlay,j),role:"menu",children:Ee.some(function(Ae){return(Ae.children||[]).length>0})?re(Jn):(0,vn.jsx)(qn,{onClick:function(ye,Ce){Ce.disabled||(ge(ye),be(Ce))},onMouseEnter:function(ye,Ce){Ce.disabled||ge(ye)},options:Ee,queryString:se,selectedIndex:ve})}),kn.current):null},[le,oe,Ee,j,se,re,Gn.menuOverlay]);return(0,vn.jsx)(o.HQ,{anchorClassName:Gn.anchor,commandPriority:r.u6,menuRenderFn:Se,onOpen:Wn,onQueryChange:Pe,onSelectOption:Xn,options:ue,parent:_n,triggerFn:Oe})}),En=function(j){var s=j.onBlur,d=j.onFocus,f=(0,z.g)(),q=Q()(f,1),fn=q[0],Cn=(0,h.useRef)(null);return(0,h.useEffect)(function(){return(0,k.qV)(fn.registerCommand(H.P0,function(){return Cn.current&&(clearTimeout(Cn.current),Cn.current=null),!0},r.VN),fn.registerCommand(r.Gq,function(ln,mn){return Cn.current=setTimeout(function(){fn.dispatchCommand(r.Zq,new KeyboardEvent("keydown",{key:"Escape"}))},200),s&&s(),!0},r.VN),fn.registerCommand(r.m$,function(){return d&&d(),!0},r.VN))},[fn,s,d]),null},Pn=function(j){var s=j.onPressEnter,d=(0,z.g)(),f=Q()(d,1),q=f[0];return(0,h.useEffect)(function(){q.registerCommand(r.XN,function(fn){var Cn=(0,r.dL)();if(!(0,r.OP)(Cn))return!1;if(fn!==null){if((k.cj||k.s$||k.jz)&&k.Uw)return!1;if(fn.preventDefault(),fn.shiftKey)return q.dispatchCommand(r.K0,void 0)}fn==null||fn.preventDefault();var ln=q.read(function(){return(0,r.Gv)().getTextContent()}),mn=ln.replaceAll(`

`,`
`);return window.queueMicrotask===void 0?setTimeout(function(){s(mn,{event:fn})},0):queueMicrotask(function(){s(mn,{event:fn})}),!0},r.KB)},[q,s]),null},In=n(63148),wn,ne,ee,Qn,ae,Fn,Vn,Ln,jn=32,Tn=22,ie=function(j){return jn+Math.max(j-1,0)*Tn},xn=(0,gn.kc)(function(a,j){var s=a.css,d=a.token,f=j.autoSize,q=j.code;return{wrapper:s(wn||(wn=en()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:s(ne||(ne=en()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),jn,d.fontSize,jn,d.colorTextPlaceholder),root:s(ee||(ee=en()([`
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
      `])),d.colorBorder,d.borderRadius,d.colorText,d.fontSize,q?d.fontFamilyCode:d.fontFamily,(f==null?void 0:f.minRows)&&s(Qn||(Qn=en()([`
          min-height: `,`px;
        `])),ie(f.minRows)),(f==null?void 0:f.maxRows)&&s(ae||(ae=en()([`
          max-height: `,`px;
        `])),ie(f.maxRows)),d.motionDurationMid,d.colorPrimaryBorder,Tn),filled:s(Fn||(Fn=en()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),d.colorFillTertiary,d.colorFillSecondary,d.colorBgBase),borderless:s(Vn||(Vn=en()([`
        background: transparent;
        border: none;
      `]))),disabled:s(Ln||(Ln=en()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),d.colorTextDisabled,d.colorBgContainerDisabled)}}),C=(0,h.forwardRef)(function(a,j){var s=a.className,d=a.classNames,f=a.placeholder,q=a.style,fn=a.value,Cn=a.defaultValue,ln=a.readOnly,mn=ln===void 0?!1:ln,hn=a.disabled,rn=a.onChange,Wn=a.onBlur,_n=a.onFocus,de=a.variant,le=de===void 0?"outlined":de,Gn=a.options,Yn=Gn===void 0?[]:Gn,me=a.autoSize,ce=a.triggers,fe=ce===void 0?["@"]:ce,he=a.allowSpaces,Oe=a.punctuation,xe=a.preTriggerChars,pe=a.onSelect,se=a.code,Pe=se===void 0?!1:se,je=a.getPopContainer,Ee=a.onPressEnter,ue=a.onTrigger,Xn=T.ZP.useConfig(),Mn=Xn.componentDisabled,oe=xn({autoSize:me,code:Pe}),re=oe.styles,Se=oe.cx,kn=(0,h.useMemo)(function(){return hn!=null?hn:Mn},[Mn,hn]),Jn=(0,h.useMemo)(function(){return!mn&&!kn},[kn,mn]),Me=(0,h.useMemo)(function(){return{namespace:"mentions",nodes:[P,{replace:r.R2,with:function(ye){return new P(ye.__text)}},L.AV],editorState:(0,$.hC)(fn||Cn||"",fe),onError:function(ye){throw ye}}},[]),ve=function(ye){var Ce=ye.read(function(){return(0,r.Gv)().getTextContent()});rn==null||rn(Ce.replaceAll(`

`,`
`))},be=(0,h.useMemo)(function(){var Ae=function ye(Ce,Te){return Ce.reduce(function(De,Le){if(De[Le.value]=Le,De[Le.value].icon||(De[Le.value].icon=Te),Le.children&&Le.children.length>0){var Ne=ye(Le.children,Le.icon);Object.assign(De,Ne)}return De},{})};return Ae(Yn)},[Yn]),ge=(0,h.useMemo)(function(){if(W.j){if(je)return je();if(document.fullscreenElement)return document.fullscreenElement}},[je]);return(0,vn.jsx)(F.R,{initialConfig:Z()(Z()({},Me),{},{editable:Jn}),children:(0,vn.jsx)(In.zh,{value:{optionsMap:be},children:(0,vn.jsxs)("div",{className:Se(re.wrapper,d==null?void 0:d.wrapper),children:[(0,vn.jsx)(I.B,{ErrorBoundary:t.g,contentEditable:(0,vn.jsx)(S.f,{className:Se(e()(e()(e()(e()({},re.root,!0),re.filled,le==="filled"),re.borderless,le==="borderless"),re.disabled,kn),s),style:q||{}}),placeholder:(0,vn.jsx)("div",{className:re.placeholder,children:f||"\u8F93\u5165 ".concat(fe.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),Jn&&(0,vn.jsx)($n,{allowSpaces:he,onOpen:function(ye){var Ce,Te;return ue==null?void 0:ue((Ce=(Te=ye.match)===null||Te===void 0?void 0:Te.replaceableString)!==null&&Ce!==void 0?Ce:fe[0])},onSelect:pe,options:Yn,overlayClassName:d==null?void 0:d.menuOverlay,parent:ge,preTriggerChars:xe,punctuation:Oe,triggers:fe}),(0,vn.jsx)(sn,{}),(0,vn.jsx)(R,{}),(0,vn.jsx)(B.e,{}),(0,vn.jsx)(u.$,{onChange:ve}),(0,vn.jsx)(En,{onBlur:Wn,onFocus:_n}),(0,vn.jsx)(V,{editable:Jn}),(0,vn.jsx)(l,{editorRef:j}),(0,vn.jsx)(M.y,{}),Ee&&(0,vn.jsx)(Pn,{onPressEnter:Ee})]})})})})},49652:function(Sn,tn,n){n.d(tn,{IY:function(){return L},AV:function(){return l}});var nn=n(25298),e=n.n(nn),X=n(17069),Z=n.n(X),M=n(62657),F=n.n(M),S=n(21742),t=n.n(S),B=n(83136),u=n.n(B),I=n(82092),T=n.n(I),r=n(36419),h=n(75271),W=n(48305),v=n.n(W),y=n(71561),x=n(27046),i=n(38590),c=n(1718),g=n(69024),A=n(63148),p=n(58545),O=n(53649),D=n.n(O),b=n(3772),E,P,N,on=(0,b.kc)(function(H,sn){var $=H.css,R=H.token,U=H.prefixCls,J=sn.isSelected,o=sn.isError,K=function(){return o?J?{background:R.colorErrorBgActive,border:R.colorErrorBorderHover,color:R.colorErrorTextActive}:{background:R.colorErrorBg,border:R.colorErrorBorder,color:R.colorErrorText}:J?{background:R.colorInfoBgHover,border:R.colorInfoBorder,color:R.colorInfoText}:{background:R.colorFillTertiary,border:"transparent",color:R.colorInfoText}},G=K(),w=G.background,dn=G.border,_=G.color;return{root:$(E||(E=D()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),R.fontFamilyCode,_,w,dn,R.borderRadius),text:$(P||(P=D()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),R.colorTextSecondary),error:$(N||(N=D()([`
        color: `,`;
      `])),R.colorErrorText)}}),Q=n(26562),z=n(52676),V=(0,h.memo)(function(H){var sn=H.nodeKey,$=H.variable,R=(0,A.Ne)(),U=(0,y.g)(),J=v()(U,1),o=J[0],K=(0,p.hc)(sn,Q.qU),G=v()(K,2),w=G[0],dn=G[1],_=R==null?void 0:R[$],pn=on({isSelected:dn,isError:!_||!!_.error}),On=pn.styles;(0,h.useEffect)(function(){if(!o.hasNodes([l]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[o]);var cn=(0,z.jsx)(i.Z,{className:On.root,ref:w,children:(0,z.jsxs)(i.Z,{align:"center",gap:2,children:[(!_||_.error)&&(0,z.jsx)(x.Z,{className:On.error,icon:g.Z}),(_==null?void 0:_.icon)&&(0,z.jsx)(i.Z,{children:_.icon}),(0,z.jsx)(i.Z,{className:On.text,gap:2,title:(_==null?void 0:_.selectedLabel)||(_==null?void 0:_.label)||$,children:(0,z.jsx)("span",{children:(_==null?void 0:_.selectedLabel)||(_==null?void 0:_.label)||$})})]})});return _!=null&&_.error?(0,z.jsx)(c.Z,{title:_==null?void 0:_.error,children:cn}):cn}),l=function(H){t()($,H);var sn=u()($);function $(R,U){var J;return e()(this,$),J=sn.call(this,U),T()(F()(J),"__variable",void 0),J.__variable=R,J}return Z()($,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var U=document.createElement("div");return U.style.display="inline-flex",U.style.alignItems="center",U.style.verticalAlign="middle",U}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,z.jsx)(V,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var U=this.getLatest();return U.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(U){return new $(U.__variable,U.__key)}},{key:"importJSON",value:function(U){var J=L(U.variable);return J}}]),$}(r.Ij);function L(H){return new l(H)}function k(H){return H instanceof l}},26562:function(Sn,tn,n){n.d(tn,{CF:function(){return e},P0:function(){return Z},qU:function(){return X},xA:function(){return M}});var nn=n(36419),e=(0,nn.fA)("INSERT_MENTION_COMMAND"),X=(0,nn.fA)("DELETE_MENTION_COMMAND"),Z=(0,nn.fA)("CLEAR_HIDE_MENU_TIMEOUT"),M=/{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi},63148:function(Sn,tn,n){n.d(tn,{Ne:function(){return M},zh:function(){return Z}});var nn=n(75271),e=n(52676),X=(0,nn.createContext)(null),Z=(0,nn.memo)(function(F){var S=F.children,t=F.value;return(0,e.jsx)(X.Provider,{value:t,children:S})}),M=function(){var S=(0,nn.useContext)(X);return S==null?void 0:S.optionsMap}},2284:function(Sn,tn,n){n.d(tn,{P0:function(){return v},qU:function(){return W},CF:function(){return h},wv:function(){return y},Ab:function(){return x},hC:function(){return i}});var nn=n(15558),e=n.n(nn),X=n(48305),Z=n.n(X),M=n(36419),F=n(335),S=n.n(F),t=n(94311),B=n(49652);function u(c,g,A){var p=new RegExp("(?<=\\s|^|\\()"+(0,t.pB)(g)+"((?:"+(0,t.bq)(g,A)+"){1,"+t.Nj+"})","g"),O=[],D;for(p.lastIndex=0;(D=p.exec(c))!==null;)O.push({value:D[0],index:D.index});return O}function I(c,g,A){var p=u(c,g,A),O=[],D=0,b=S()(p),E;try{var P=function(){var Q=E.value,z=Q.value,V=Q.index;if(V>D){var l=c.substring(D,V);O.push({type:"custom-text",value:l})}var L=g.find(function(sn){return new RegExp(sn).test(z)}),k=L&&new RegExp(L).exec(z);if(!k)throw new Error("No trigger found for mention");var H=k[0];O.push({type:"mention-node",value:z.slice(H.length),trigger:H}),D=V+z.length};for(b.s();!(E=b.n()).done;)P()}catch(on){b.e(on)}finally{b.f()}if(D<c.length){var N=c.slice(Math.max(0,D));O.push({type:"custom-text",value:N})}return O}function T(c,g){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t.MN,p=typeof c=="string"?c:c.getTextContent(),O=I(p,g,A),D=[],b=S()(O),E;try{for(b.s();!(E=b.n()).done;){var P=E.value;if(P.type==="custom-text"){var N=(0,M.MX)(P.value);typeof c!="string"&&N.setFormat(c.getFormat()),D.push(N)}else D.push((0,B.IY)(P.value))}}catch(on){b.e(on)}finally{b.f()}return D}function r(c){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:DEFAULT_PUNCTUATION,A=$getRoot(),p=A.getChildren(),O=function D(b){var E=_createForOfIteratorHelper(b),P;try{for(E.s();!(P=E.n()).done;){var N=P.value;if($isTextNode(N)){var on=T(N,c,g);if(on.length>1){var Q=N.getParent(),z=N.getIndexWithinParent();Q==null||Q.splice(z,1,on)}}else $isElementNode(N)&&D(N.getChildren())}}catch(V){E.e(V)}finally{E.f()}};O(p)}var h=(0,M.fA)("INSERT_MENTION_COMMAND"),W=(0,M.fA)("DELETE_MENTION_COMMAND"),v=(0,M.fA)("CLEAR_HIDE_MENU_TIMEOUT"),y=(0,M.fA)("UPDATE_MENTIONS_OPTIONS"),x=function(g,A,p){if(g.isSimpleText())for(var O=g.getPreviousSibling(),D=g.getTextContent(),b=g,E;;){E=A(D);var P=E===null?"":D.slice(E.end);if(D=P,P===""){var N=b.getNextSibling();if((0,M.Gg)(N)){P=b.getTextContent()+N.getTextContent();var on=A(P);if(on===null){N.markDirty();return}else if(on.start!==0)return}}else{var Q=A(P);if(Q!==null&&Q.start===0)return}if(E===null)return;if(!(E.start===0&&(0,M.Gg)(O)&&O.isTextEntity())){var z=void 0;if(E.start===0){var V=b.splitText(E.end),l=Z()(V,2);z=l[0],b=l[1]}else{var L=b.splitText(E.start,E.end),k=Z()(L,3);z=k[1],b=k[2]}var H=p(z);if(z.replace(H),b==null)return}}};function i(c,g){return function(){var A=(0,M.Gv)();A.clear();var p=(0,M.BE)();p.append.apply(p,e()(T(c,g))),A.append(p)}}},97527:function(Sn,tn,n){n.d(tn,{u:function(){return y}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(76795),F=n(75271),S="yunti-ui",t=n(53649),B=n.n(t),u=n(3772),I,T,r=(0,u.kc)(function(i,c){var g=i.css,A=i.prefixCls,p=c.borderd,O=p===void 0?!0:p,D=c.footer,b=D===null||Array.isArray(D)&&D.length===0,E=g(I||(I=B()([`
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
    `])),A,A,b?0:"40px",A,b?0:"1px");return{custom:g(T||(T=B()([`
        `,`
      `])),O&&E)}},{hashPriority:"low"}),h=n(52676),W=["className","borderd"],v=function(c){var g=c.className,A=c.borderd,p=A===void 0?!0:A,O=Z()(c,W),D=r(e()({borderd:p},O)),b=D.styles,E=D.cx;return(0,h.jsx)(M.Z,e()(e()({},O),{},{className:E(b.custom,"".concat(S,"-modal"),g)}))},y=v;y.useModal=M.Z.useModal,y.destroyAll=M.Z.destroyAll,y.config=M.Z.config,y._InternalPanelDoNotUseOrYouWillBeFired=M.Z._InternalPanelDoNotUseOrYouWillBeFired,y.info=M.Z.info,y.success=M.Z.success,y.error=M.Z.error,y.warning=M.Z.warning,y.warn=M.Z.warn,y.confirm=M.Z.confirm;var x=null},83706:function(Sn,tn,n){n.d(tn,{O:function(){return h}});var nn=n(26068),e=n.n(nn),X=n(48305),Z=n.n(X),M=n(67825),F=n.n(M),S=n(39396),t=n(62023),B=n(75271),u=n(94456),I=n(11564),T=n(52676),r=["language","theme","placeholder","variant","onBlur","enableOutline","className","version","options","onMount"],h=function(v){var y,x=v.language,i=v.theme,c=v.placeholder,g=v.variant,A=v.onBlur,p=v.enableOutline,O=v.className,D=v.version,b=D===void 0?"0.52.2":D,E=v.options,P=E===void 0?{}:E,N=v.onMount,on=F()(v,r),Q=(0,B.useState)(!1),z=Z()(Q,2),V=z[0],l=z[1],L=(0,B.useRef)(null),k=(0,B.useState)(!1),H=Z()(k,2),sn=H[0],$=H[1],R=(0,B.useState)(!1),U=Z()(R,2),J=U[0],o=U[1],K=(0,I.y)({minimapEnabled:P==null||(y=P.minimap)===null||y===void 0?void 0:y.enabled,variant:g}),G=K.cx,w=K.styles,dn=G(w.base,O,{"ve-focused":V,"ve-outline":p}),_=(0,u.nc)();(0,B.useEffect)(function(){S._m.config({paths:{vs:_({path:"min/vs",pkg:"monaco-editor",version:b})}}),o(!0)},[_,b]);var pn=function(cn,Bn){L.current=cn,cn.onDidFocusEditorText(function(){l(!0)}),cn.onDidBlurEditorText(function(An){var Dn;l(!1);var Nn=(Dn=L.current)===null||Dn===void 0||(Dn=Dn.getModel())===null||Dn===void 0?void 0:Dn.getValue();A==null||A(Nn!=null?Nn:"",An)}),Bn.editor.setTheme("default-theme"),N==null||N(cn,Bn),$(!0)};return(0,T.jsx)(t.Z,{spinning:!J,children:J?(0,T.jsx)(S.ZP,e()({className:dn,language:x||"text",onMount:pn,options:e()({domReadOnly:!0,quickSuggestions:!1,minimap:{enabled:!1},lineNumbersMinChars:1,wordWrap:"on",unicodeHighlight:{ambiguousCharacters:!1},placeholder:c},P),theme:sn?i:"default-theme"},on)):null})}},11564:function(Sn,tn,n){n.d(tn,{y:function(){return W}});var nn=n(53649),e=n.n(nn),X=n(3772),Z,M,F,S,t,B,u,I,T,r,h,W=(0,X.kc)(function(v,y){var x=v.css,i=v.token,c=v.prefixCls,g=y.minimapEnabled,A=g===void 0?!1:g,p=y.isFullScreen,O=p===void 0?!1:p,D=y.diff,b=D===void 0?!1:D,E=y.variant,P=E===void 0?"outlined":E,N=(0,X.F4)(Z||(Z=e()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),on=function(){switch(P){case"outlined":return i.colorBgBase;case"filled":return i.colorFillTertiary;default:return"transparent"}};return{base:x(M||(M=e()([`
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
            & > .gutter {
              outline: none;
            }
            & > .original > .monaco-editor {
              border-top-left-radius: `,`px;
              border-bottom-left-radius: `,`px;
              outline: none;
              .overflow-guard,
              .margin {
                border-top-left-radius: `,`px;
                border-bottom-left-radius: `,`px;
              }
            }
            & > .modified > .monaco-editor {
              outline: none;
            }
            .diffViewport {
              border-top-right-radius: `,`px;
              border-bottom-right-radius: `,`px;
              outline: none;
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
      `])),on(),P==="outlined"?i.colorBorder:"transparent",i.borderRadius,P==="outlined"?i.colorPrimaryHover:"transparent",P==="filled"&&x(F||(F=e()([`
            background-color: `,`;
          `])),i.colorFillSecondary),P==="filled"&&x(S||(S=e()([`
            background-color: `,`;
          `])),i.colorBgBase),P!=="borderless"&&x(t||(t=e()([`
            border-color: `,`;
          `])),i.colorPrimaryActive),O&&x(B||(B=e()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),!O&&x(u||(u=e()([`
              background-color: transparent;
            `]))),i.borderRadius,i.borderRadius,i.borderRadius,i.borderRadius,i.borderRadius,i.borderRadius,i.borderRadius,i.borderRadius,i.borderRadius,i.borderRadius,i.borderRadius-1,i.borderRadius-1,i.colorErrorText,i.colorErrorBg),fullScreenBtn:x(I||(I=e()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),c,i.colorTextSecondary,O?x(T||(T=e()([`
                z-index: 9999;
                right: `,`px;
              `])),b?64:138):x(r||(r=e()([`
                right: `,`px;
              `])),A||b?64:20)),loading:x(h||(h=e()([`
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
      `])),i.fontSizeSM,i.colorTextTertiary,N)}},{hashPriority:"low"})},11262:function(Sn,tn,n){n.d(tn,{ZM:function(){return An},Hu:function(){return E},Xq:function(){return Nn},rE:function(){return Dn}});var nn=n(26068),e=n.n(nn),X=n(48305),Z=n.n(X),M=n(67825),F=n.n(M),S=n(71795),t=n(75271),B=n(94456),u=n(27046),I=n(22622),T=n(32328),r=n(87449),h=n(28485),W=n(90228),v=n.n(W),y=n(87999),x=n.n(y),i=n(8232),c=n(50279),g=n(25298),A=n.n(g),p=n(17069),O=n.n(p),D=n(82092),b=n.n(D),E=function(){function bn(){A()(this,bn),b()(this,"methodMap",void 0),b()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return O()(bn,[{key:"registerMethod",value:function(an,en){this.methodMap[an]=en}},{key:"call",value:function(an){for(var en,gn,yn=arguments.length,Y=new Array(yn>1?yn-1:0),un=1;un<yn;un++)Y[un-1]=arguments[un];return(en=(gn=this.methodMap)[an])===null||en===void 0?void 0:en.call.apply(en,[gn].concat(Y))}},{key:"updateMeta",value:function(an){Object.assign(this.meta,an)}},{key:"getMeta",value:function(){return Object.freeze(e()({},this.meta))}}]),bn}(),P="__base_monaco_editor_controller__",N=h.j&&window;N&&!N[P]&&(N[P]=new E);var on=N[P],Q=function(){var bn,m;return function(){var an=x()(v()().mark(function en(gn){var yn;return v()().wrap(function(un){for(;;)switch(un.prev=un.next){case 0:if(!(!bn||!(0,c.Z)(m,gn))){un.next=7;break}return yn=Object.keys(gn||{}).length>0,i.Z.config(yn?gn:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),un.next=5,i.Z.init();case 5:bn=un.sent,m=gn;case 7:return un.abrupt("return",bn);case 8:case"end":return un.stop()}},en)}));return function(en){return an.apply(this,arguments)}}()}(),z=function(m){return m?i.Z.config(m):i.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),i.Z.init()};function V(bn){var m=Object.keys(bn||{}).length>0,an=m?bn:void 0;return on.getMeta().singleton?Q(an):z(an)}function l(bn){controller.updateMeta(bn)}var L=h.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",k=L==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",H={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},sn={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function $(bn){var m=(0,t.useRef)();return(0,t.useEffect)(function(){m.current=bn},[bn]),m.current}function R(bn,m,an,en){if(en){var gn=bn.editor.getModel(bn.Uri.parse(en));if(gn)return gn}return bn.editor.createModel(m,an,en?bn.Uri.parse(en):void 0)}var U=function(m,an){var en=an.editorDidMount,gn=an.editorWillMount,yn=an.theme,Y=an.value,un=an.path,Rn=an.language,Hn=an.saveViewState,Kn=an.defaultValue,Un=an.enhancers,zn=an.placeholder,vn=(0,t.useState)(!1),te=Z()(vn,2),Zn=te[0],qn=te[1],$n=(0,t.useState)(!1),En=Z()($n,2),Pn=En[0],In=En[1],wn=(0,t.useState)(!1),ne=Z()(wn,2),ee=ne[0],Qn=ne[1],ae=(0,t.useRef)(Kn),Fn=(0,t.useRef)(Y),Vn=(0,t.useRef)(Rn||"text"),Ln=(0,t.useRef)(un),jn=$(un),Tn=(0,t.useRef)(an.requireConfig),ie=(0,t.useRef)(an.options),xn=(0,t.useRef)(),C=(0,t.useRef)(),a=(0,t.useRef)(),j=(0,t.useRef)(m),s=(0,t.useRef)(),d=(0,t.useRef)(),f=(0,t.useRef)(!1),q=(0,t.useRef)(new Map),fn=(0,t.useRef)({});(0,t.useEffect)(function(){fn.current.enhancers=Un},[Un]),(0,t.useEffect)(function(){s.current=en},[en]),(0,t.useEffect)(function(){d.current=gn},[gn]),(0,t.useEffect)(function(){Fn.current=Y},[Y]),(0,t.useEffect)(function(){Vn.current=Rn},[Rn]),(0,t.useEffect)(function(){ae.current=Kn},[Kn]),(0,t.useEffect)(function(){Qn(!0),V(Tn.current).then(function(ln){var mn;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,xn.current=ln;try{var hn;(hn=d.current)===null||hn===void 0||hn.call(d,ln)}catch(me){}if(a.current){C.current&&(C.current.dispose(),f.current=!1);var rn;if(j.current==="single"){var Wn,_n,de=R(ln,(Wn=(_n=Fn.current)!==null&&_n!==void 0?_n:ae.current)!==null&&Wn!==void 0?Wn:"",Vn.current,Ln.current);rn=ln.editor.create(a.current,e()(e()({automaticLayout:!0},H),{},{placeholder:zn},ie.current)),rn.setModel(de)}else{var le=ln.editor.createModel(Fn.current,Vn.current),Gn=ln.editor.createModel(Fn.current,Vn.current);rn=ln.editor.createDiffEditor(a.current,e()(e()({automaticLayout:!0},sn),{},{placeholder:zn},ie.current)),rn.setModel({original:le,modified:Gn})}C.current=rn,(mn=fn.current.enhancers)===null||mn===void 0||mn.forEach(function(me){return me(ln,rn)});try{var Yn;(Yn=s.current)===null||Yn===void 0||Yn.call(s,ln,rn)}catch(me){}f.current||qn(!0)}}).catch(function(ln){console.error("Monaco Editor Load Error!",ln)}).then(function(){f.current||Qn(!1)})},[zn]),(0,t.useEffect)(function(){var ln;Zn&&((ln=xn.current)===null||ln===void 0||ln.editor.setTheme(yn))},[Zn,yn]),(0,t.useEffect)(function(){if(Zn){var ln=m==="diff"?C.current.getModifiedEditor():C.current;ln==null||ln.onDidFocusEditorText(function(){f.current||In(!0)}),ln==null||ln.onDidBlurEditorText(function(){f.current||In(!1)})}},[Zn,m]),(0,t.useEffect)(function(){return function(){f.current=!0}},[]),(0,t.useEffect)(function(){var ln,mn,hn;if(Zn&&!(m!=="diff"&&un)){var rn=m==="diff"?C.current.getModifiedEditor():C.current,Wn=(ln=Y!=null?Y:ae.current)!==null&&ln!==void 0?ln:"",_n=(mn=xn.current)===null||mn===void 0?void 0:mn.editor.EditorOption.readOnly;_n&&rn!==null&&rn!==void 0&&(hn=rn.getOption)!==null&&hn!==void 0&&hn.call(rn,_n)?rn==null||rn.setValue(Wn):Y!==(rn==null?void 0:rn.getValue())&&(rn==null||rn.executeEdits("",[{range:rn==null?void 0:rn.getModel().getFullModelRange(),text:Wn,forceMoveMarkers:!0}]),rn==null||rn.pushUndoStop())}},[Zn,un,m,Y]),(0,t.useEffect)(function(){var ln,mn;if(Zn&&m!=="diff"&&un!==jn){var hn=R(xn.current,(ln=Fn.current)!==null&&ln!==void 0?ln:ae.current,Vn.current,un),rn=C.current;Fn.current!==null&&Fn.current!==void 0&&hn.getValue()!==Fn.current&&hn.setValue(Fn.current),hn!==((mn=C.current)===null||mn===void 0?void 0:mn.getModel())&&(Hn&&q.current.set(jn,rn.saveViewState()),rn.setModel(hn),Hn&&rn.restoreViewState(q.current.get(un)))}},[Zn,Y,un,jn,m,Hn]);var Cn=C;return{isEditorReady:Zn,focused:Pn,loading:ee,containerRef:a,monacoRef:xn,editorRef:Cn,valueRef:Fn}},J=function(m){var an=(0,t.useState)(!1),en=Z()(an,2),gn=en[0],yn=en[1],Y=function(){if(gn){yn(!1),m==null||m.updateOptions(e()(e()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!1}})),m==null||m.layout();return}yn(!0),m==null||m.updateOptions(e()(e()({},m==null?void 0:m.getOptions()),{},{minimap:{enabled:!0}})),m==null||m.layout()};return{isFullScreen:gn,fullScreen:Y}},o=n(11564),K=n(52676);function G(){}var w=function(m){var an,en=m.onChange,gn=m.onBlur,yn=m.enableOutline,Y=m.width,un=m.height,Rn=m.language,Hn=m.supportFullScreen,Kn=m.onFullScreenChange,Un=(0,t.useRef)(en),zn=(0,t.useRef)(gn),vn=U("single",m),te=vn.isEditorReady,Zn=vn.focused,qn=vn.loading,$n=vn.containerRef,En=vn.monacoRef,Pn=vn.editorRef,In=vn.valueRef,wn=(0,t.useRef)(),ne=(0,t.useRef)(),ee=J(Pn==null?void 0:Pn.current),Qn=ee.isFullScreen,ae=ee.fullScreen,Fn=(0,o.y)({isFullScreen:Qn,minimapEnabled:(an=m.options)===null||an===void 0||(an=an.minimap)===null||an===void 0?void 0:an.enabled,variant:m.variant}),Vn=Fn.cx,Ln=Fn.styles,jn=Vn(Ln.base,m.className,{"ve-focused":Zn,"ve-outline":yn}),Tn=(0,t.useMemo)(function(){return{width:Y,height:un}},[Y,un]);(0,t.useEffect)(function(){Un.current=en},[en]),(0,t.useEffect)(function(){zn.current=gn},[gn]),(0,t.useEffect)(function(){if(te){var xn,C,a=Pn.current;(xn=wn.current)===null||xn===void 0||xn.dispose(),wn.current=a==null?void 0:a.onDidChangeModelContent(function(j){var s,d=a==null||(s=a.getModel())===null||s===void 0?void 0:s.getValue();if(In.current!==d){var f;(f=Un.current)===null||f===void 0||f.call(Un,d,j)}}),(C=ne.current)===null||C===void 0||C.dispose(),ne.current=a==null?void 0:a.onDidBlurEditorText(function(j){var s,d,f=a==null||(s=a.getModel())===null||s===void 0?void 0:s.getValue();(d=zn.current)===null||d===void 0||d.call(zn,f,j)})}},[Pn,te,wn,In]),(0,t.useEffect)(function(){return function(){var xn,C,a,j,s=Pn.current;(xn=wn.current)===null||xn===void 0||xn.dispose(),(C=ne.current)===null||C===void 0||C.dispose(),s==null||(a=s.getModel())===null||a===void 0||a.dispose(),(j=Pn.current)===null||j===void 0||j.dispose()}},[Pn]),(0,t.useEffect)(function(){var xn;if(te){var C=(xn=Pn.current)===null||xn===void 0?void 0:xn.getModel();if(C){var a;(a=En.current)===null||a===void 0||a.editor.setModelLanguage(C,Rn)}}},[Pn,te,Rn,En]);var ie=(0,t.useCallback)(function(){Kn==null||Kn(!Qn),ae()},[ae,Qn,Kn]);return(0,K.jsxs)("div",{className:jn,style:m.style,children:[qn&&(0,K.jsx)("span",{className:Vn(Ln.loading,"loading"),children:k}),(0,K.jsx)("div",{className:"react-monaco-editor-container",ref:$n,style:Tn,children:Hn&&(0,K.jsx)(I.ZP,{className:Ln.fullScreenBtn,icon:(0,K.jsx)(u.Z,{icon:Qn?T.Z:r.Z}),onClick:ie,size:"small",type:"text"})})]})},dn=function(m){var an=m.enableOutline,en=m.width,gn=m.height,yn=m.language,Y=m.onChange,un=m.original,Rn=m.supportFullScreen,Hn=m.onFullScreenChange,Kn=(0,t.useRef)(Y),Un=U("diff",m),zn=Un.isEditorReady,vn=Un.focused,te=Un.loading,Zn=Un.containerRef,qn=Un.monacoRef,$n=Un.editorRef,En=Un.valueRef,Pn=J(),In=Pn.isFullScreen,wn=Pn.fullScreen,ne=(0,o.y)({isFullScreen:In,diff:!0,variant:m.variant}),ee=ne.cx,Qn=ne.styles,ae=ee(Qn.base,m.className,{"ve-focused":vn,"ve-outline":an}),Fn=(0,t.useMemo)(function(){return{width:en,height:gn}},[en,gn]);(0,t.useEffect)(function(){Kn.current=Y},[Y]),(0,t.useEffect)(function(){var Ln;if(zn){(Ln=$n.current.getModel())===null||Ln===void 0||Ln.original.setValue(un!=null?un:"");var jn=$n.current.getModel()||{},Tn=jn.modified;Tn==null||Tn.onDidChangeContent(function(ie){var xn=Tn.getValue();if(En.current!==xn){var C;(C=Kn.current)===null||C===void 0||C.call(Kn,xn,ie)}})}},[$n,zn,un,En]),(0,t.useEffect)(function(){return function(){var Ln,jn,Tn;(Ln=$n.current)===null||Ln===void 0||(Ln=Ln.getModel())===null||Ln===void 0||(Ln=Ln.original)===null||Ln===void 0||Ln.dispose(),(jn=$n.current)===null||jn===void 0||(jn=jn.getModel())===null||jn===void 0||(jn=jn.modified)===null||jn===void 0||jn.dispose(),(Tn=$n.current)===null||Tn===void 0||Tn.dispose()}},[$n]),(0,t.useEffect)(function(){var Ln,jn,Tn;if(zn){var ie=((Ln=$n.current)===null||Ln===void 0?void 0:Ln.getModel())||{},xn=ie.original,C=ie.modified;(jn=qn.current)===null||jn===void 0||jn.editor.setModelLanguage(xn,yn),(Tn=qn.current)===null||Tn===void 0||Tn.editor.setModelLanguage(C,yn)}},[$n,zn,yn,qn]);var Vn=(0,t.useCallback)(function(){Hn==null||Hn(!In),wn()},[wn,In,Hn]);return(0,K.jsxs)("div",{className:ae,style:m.style,children:[te&&(0,K.jsx)("span",{className:ee(Qn.loading,"loading"),children:k}),(0,K.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:Zn,style:Fn,children:Rn&&(0,K.jsx)(I.ZP,{className:Qn.fullScreenBtn,icon:(0,K.jsx)(u.Z,{icon:In?T.Z:r.Z}),onClick:Vn,size:"small",type:"text"})})]})},_=Object.assign(dn,{displayName:"DiffMonacoEditor",default:{width:"100%",height:150,defaultValue:"",language:"javascript",options:H,editorDidMount:G,editorWillMount:G,onChange:G,requireConfig:{}}}),pn=Object.assign(w,{displayName:"SingleMonacoEditor",default:{width:"100%",height:150,defaultValue:"",language:"javascript",options:H,editorDidMount:G,editorWillMount:G,onChange:G,requireConfig:{}},MonacoDiffEditor:_}),On=null,cn=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Bn=["inlineView","options"],An=function(m){var an=m.type,en=an===void 0?"single":an,gn=m.editorDidMount,yn=m.readOnly,Y=yn===void 0?!1:yn,un=m.lineNumbers,Rn=un===void 0?"on":un,Hn=m.wordWrap,Kn=Hn===void 0?"off":Hn,Un=m.contextmenu,zn=Un===void 0?!0:Un,vn=m.theme,te=m.minimapEnabled,Zn=te===void 0?!1:te,qn=m.version,$n=qn===void 0?"0.52.2":qn,En=m.requireConfig,Pn=En===void 0?{}:En,In=m.options,wn=m.className,ne=m.supportFullScreen,ee=F()(m,cn),Qn=(0,t.useRef)(gn);(0,t.useEffect)(function(){Qn.current=gn},[gn]);var ae=(0,S.r)(),Fn=ae.isDarkMode,Vn=(0,t.useMemo)(function(){return vn||(Fn?"vs-dark":"vs")},[Fn,vn]),Ln=(0,t.useState)(),jn=Z()(Ln,2),Tn=jn[0],ie=jn[1],xn=(0,t.useCallback)(function(s,d){var f;ie(d),(f=Qn.current)===null||f===void 0||f.call(Qn,s,d)},[]),C=(0,t.useMemo)(function(){var s=Object.assign({},In,{readOnly:Y,lineNumbers:Rn,wordWrap:Kn,contextmenu:zn,minimap:Zn===void 0?In==null?void 0:In.minimap:Object.assign({},In==null?void 0:In.minimap,{enabled:Zn})});return Tn==null||Tn.updateOptions(s),s},[In,Y,Rn,Kn,zn,Zn,Tn]),a=(0,B.nc)(),j=(0,t.useMemo)(function(){return Object.assign({},Pn,{paths:e()({vs:a({path:"min/vs",pkg:"monaco-editor",version:$n})},Pn.paths)})},[a,Pn,$n]);return en!=="diff"?(0,K.jsx)(pn,e()({className:wn,editorDidMount:xn,options:C,requireConfig:j,supportFullScreen:Tn&&ne,theme:Vn},ee)):(0,K.jsx)(pn.MonacoDiffEditor,e()({className:wn,editorDidMount:xn,options:C,requireConfig:j,supportFullScreen:Tn&&ne,theme:Vn},ee))},Dn=function(m){return(0,K.jsx)(An,e()(e()({},m),{},{type:"single"}))},Nn=function(m){var an=m.inlineView,en=an===void 0?"off":an,gn=m.options,yn=F()(m,Bn);return(0,K.jsx)(An,e()(e()({options:Object.assign({useInlineViewWhenSpaceIsLimited:en==="on"||en==="auto",renderSideBySide:en==="off"||en==="auto"},gn)},yn),{},{type:"diff"}))}},25777:function(Sn,tn,n){n.d(tn,{W:function(){return on}});var nn=n(26068),e=n.n(nn),X=n(15558),Z=n.n(X),M=n(48305),F=n.n(M),S=n(67825),t=n.n(S),B=n(27046),u=n(60399),I=n(38590),T=n(79214),r=n(82338),h=n(99571),W=n(75271),v=n(53649),y=n.n(v),x=n(3772),i,c,g,A,p,O=function(z){switch(z){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},D=(0,x.kc)(function(Q,z){var V=Q.css,l=Q.token,L=Q.prefixCls,k=z.disabled,H=z.size,sn=O(H),$=sn.cardWidth;return{option:V(i||(i=y()([`
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
      `])),l.colorBorder,l.borderRadius,k?"not-allowed":"pointer",l.padding,l.motionDurationFast,$,k&&V(c||(c=y()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),l.colorBgContainerDisabled,L,l.colorTextDisabled,L,l.colorTextDisabled),!k&&V(g||(g=y()([`
          &:hover {
            border-color: `,`;
          }
        `])),l.colorPrimaryBorderHover),L),optionSelected:V(A||(A=y()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),l.colorPrimary,l.colorPrimaryActive),check:V(p||(p=y()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),l.marginXS,l.marginXS,l.colorPrimary)}}),b=n(52676),E=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","optionRender"],P=u.Z.Text,N=u.Z.Paragraph,on=W.forwardRef(function(Q,z){var V=Q.defaultValue,l=Q.value,L=Q.onChange,k=Q.multiple,H=k===void 0?!1:k,sn=Q.disabled,$=sn===void 0?!1:sn,R=Q.options,U=R===void 0?[]:R,J=Q.classNames,o=Q.styles,K=Q.size,G=K===void 0?"middle":K,w=Q.optionRender,dn=t()(Q,E),_=(0,W.useMemo)(function(){return U.some(function(Y){return!!Y.img||!!Y.icon})},[U]),pn=D({disabled:$,size:G}),On=pn.cx,cn=pn.styles,Bn=(0,W.useMemo)(function(){return O(G)},[G]),An=Bn.imgHeight,Dn=(0,W.useCallback)(function(Y){return!H||Array.isArray(Y)?Y:Y===void 0?[]:[Y]},[H]),Nn=(0,h.C8)(Dn(V),{defaultValue:Dn(V),value:l,onChange:L}),bn=F()(Nn,2),m=bn[0],an=bn[1],en=(0,W.useCallback)(function(Y){if(!$){if(!H){an(Y);return}if(m.includes(Y)){an(m.filter(function(un){return un!==Y}));return}an([].concat(Z()(m),[Y]))}},[m,$,H,an]),gn=(0,W.useCallback)(function(Y){return H?m.includes(Y):m===Y},[m,H]),yn=(0,W.useCallback)(function(Y,un){var Rn=gn(Y.value),Hn=(0,b.jsxs)(I.Z,{align:_?"center":"flex-start",className:On(cn.option,Rn&&cn.optionSelected,J==null?void 0:J.card),gap:"small",onClick:function(){return en(Y.value)},style:e()(e()({},o==null?void 0:o.card),Y.style),vertical:!0,children:[_&&(0,b.jsx)(T.C,{className:J==null?void 0:J.icon,icon:Y.icon,shape:"square",size:An,src:Y.img,style:e()(e()({},o==null?void 0:o.icon),Y.iconStyle)}),Y.label&&Rn&&(0,b.jsx)(P,{ellipsis:!0,strong:!0,children:Y.label}),Y.label&&!Rn&&(0,b.jsx)(P,{ellipsis:!0,children:Y.label}),Y.description&&(0,b.jsx)(N,{ellipsis:{rows:2},type:"secondary",children:Y.description}),Rn&&(0,b.jsx)(B.Z,{className:cn.check,icon:r.Z})]},Y.value);return w?w(Hn,Y,un):Hn},[J==null?void 0:J.card,J==null?void 0:J.icon,On,An,_,gn,en,w,cn.check,cn.option,cn.optionSelected,o==null?void 0:o.card,o==null?void 0:o.icon]);return(0,b.jsx)(I.Z,e()(e()({gap:"large",ref:z,wrap:!0},dn),{},{children:U.map(function(Y,un){return yn(Y,un)})}))})},66269:function(Sn,tn,n){n.d(tn,{a:function(){return I}});var nn=n(26068),e=n.n(nn),X=n(48305),Z=n.n(X),M=n(41546),F=n(29797),S=n(29988),t=n(579),B=n(75271),u=n(52676),I=function(r){var h=r.value,W=r.defaultValue,v=r.min,y=v===void 0?0:v,x=r.max,i=r.step,c=r.gutter,g=c===void 0?16:c,A=r.sliderCol,p=A===void 0?{span:12}:A,O=r.inputCol,D=O===void 0?{span:5}:O,b=r.addonAfter,E=r.addonBefore,P=r.placeholder,N=r.onChange,on=r.style,Q=r.className,z=r.sliderProps,V=z===void 0?{}:z,l=r.inputProps,L=l===void 0?{}:l,k=(0,B.useState)(),H=Z()(k,2),sn=H[0],$=H[1],R=function(J){Number.isNaN(J)||($(J),N==null||N(J))};return(0,u.jsxs)(M.Z,{className:Q,gutter:g,style:on,children:[(0,u.jsx)(F.Z,e()(e()({},p),{},{children:(0,u.jsx)(S.Z,e()(e()({},V),{},{defaultValue:W,max:x,min:y,onChange:R,step:i,value:h!=null?h:sn}))})),(0,u.jsx)(F.Z,e()(e()({},D),{},{children:(0,u.jsx)(t.Z,e()(e()({},L),{},{addonAfter:b,addonBefore:E,defaultValue:W,max:x,min:y,onChange:R,placeholder:P,step:i,value:h!=null?h:sn}))}))]})}},56482:function(Sn,tn,n){n.d(tn,{N:function(){return W}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(37805),F=n(75271),S=n(79213),t=n(53649),B=n.n(t),u=n(3772),I,T=(0,u.kc)(function(v){var y=v.css,x=v.token,i=v.prefixCls;return{table:y(I||(I=B()([`
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
    `])),i,x.colorTextTertiary)}}),r=n(52676),h=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],W=function(y){var x=y.rootStyle,i=y.rootClassName,c=y.icon,g=y.title,A=y.variant,p=y.defaultActive,O=y.extra,D=y.className,b=Z()(y,h),E=T(),P=E.cx,N=E.styles;return(0,r.jsx)(S.w,{className:i,style:x,icon:c,title:g,variant:A,defaultActive:p,extra:O,children:(0,r.jsx)(M.Z,e()({className:P(N.table,D),pagination:!1,rowHoverable:!1,size:"small"},b))})}},11546:function(Sn,tn,n){n.d(tn,{NU:function(){return t.N},iA:function(){return I}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(1718),F=n(37805),S=n(75271),t=n(56482),B=n(52676),u=["columns"],I=function(h){var W=h.columns,v=Z()(h,u),y=(0,S.useMemo)(function(){return W==null?void 0:W.map(function(x){if(x.render)return x;if(x.ellipsis&&x.ellipsis!==!0&&x.ellipsis.showTitle||x.ellipsis===!0){var i=x.ellipsis===!0?{}:x.ellipsis;return e()(e()({},x),{},{ellipsis:{showTitle:!1},render:function(g){return g||g===0?(0,B.jsx)(M.Z,e()(e()({},i),{},{placement:"topLeft",title:g,children:g})):"-"}})}return x.render||(x.render=function(c){return c!=null?c:"-"}),x})},[W]);return(0,B.jsx)(F.Z,e()(e()({},v),{},{columns:y}))};I.displayName="Table",I.SELECTION_COLUMN=F.Z.SELECTION_COLUMN,I.EXPAND_COLUMN=F.Z.EXPAND_COLUMN,I.SELECTION_ALL=F.Z.SELECTION_ALL,I.SELECTION_INVERT=F.Z.SELECTION_INVERT,I.SELECTION_NONE=F.Z.SELECTION_NONE,I.Column=F.Z.Column,I.ColumnGroup=F.Z.ColumnGroup,I.Summary=F.Z.Summary,I.Collapse=t.N;var T=null},8559:function(Sn,tn,n){n.d(tn,{G:function(){return W}});var nn=n(53649),e=n.n(nn),X=n(3772),Z=n(75271),M=n(52676),F,S,t,B,u,I,T,r,h=(0,X.kc)(function(v,y){var x=v.css,i=(0,X.F4)(F||(F=e()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),c=(0,X.F4)(S||(S=e()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),g=(0,X.F4)(t||(t=e()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:x(B||(B=e()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),y.width||34,y.height||22,y.bgColor||"transparent"),line:x(u||(u=e()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),y.lineColor||"#000"),animate1:x(I||(I=e()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),i),animate2:x(T||(T=e()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),c),animate3:x(r||(r=e()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),g)}}),W=function(y){var x=y.height,i=y.width,c=y.lineColor,g=y.bgColor,A=h({height:x,width:i,lineColor:c,bgColor:g}),p=A.styles,O=A.cx;return(0,M.jsxs)("div",{className:p.box,children:[(0,M.jsx)("div",{className:O(p.line,p.animate1)}),(0,M.jsx)("div",{className:O(p.line,p.animate2)}),(0,M.jsx)("div",{className:O(p.line,p.animate3)}),(0,M.jsx)("div",{className:O(p.line,p.animate2)}),(0,M.jsx)("div",{className:O(p.line,p.animate1)}),(0,M.jsx)("div",{className:O(p.line,p.animate2)}),(0,M.jsx)("div",{className:O(p.line,p.animate1)})]})}},594:function(Sn,tn,n){n.r(tn),n.d(tn,{Affix:function(){return On.Z},Alert:function(){return v.b},Anchor:function(){return cn.Z},AntdMentions:function(){return Bn.Z},App:function(){return y.g},AudioPlayer:function(){return Oe.Z},AutoComplete:function(){return An.Z},Avatar:function(){return Dn.C},BackTop:function(){return Nn.Z},Badge:function(){return bn.Z},BaseMonacoEditor:function(){return B.ZM},Breadcrumb:function(){return x.Z},Button:function(){return m.ZP},ButtonGroup:function(){return nn.h},CLEAR_EDITOR_COMMAND:function(){return t.BM},CLEAR_HIDE_MENU_TIMEOUT:function(){return t.P0},Calendar:function(){return an.Z},Card:function(){return i.Z},Carousel:function(){return en.Z},Cascader:function(){return gn.Z},ChatInputActionBar:function(){return Q.Z},ChatInputArea:function(){return on.Z},ChatInputAreaInner:function(){return z.Z},ChatItem:function(){return k.z},ChatMarkdown:function(){return H.L},ChatSendButton:function(){return V.Z},Checkbox:function(){return yn.Z},CodeEditor:function(){return sn.p},Col:function(){return Y.Z},Collapse:function(){return un.Z},CollapseGroup:function(){return e.w},CollapseTable:function(){return P.NU},ColorPicker:function(){return Rn.Z},ConfigContext:function(){return X.E_},ConfigProvider:function(){return X.iV},CopyButton:function(){return me.Z},DELETE_MENTION_COMMAND:function(){return t.qU},DatePicker:function(){return Hn.default},Descriptions:function(){return c.w},Divider:function(){return g.i},DragPanel:function(){return Z.U},Drawer:function(){return A.d},Dropdown:function(){return p.L},EditableMessage:function(){return $.i},Empty:function(){return Kn.Z},Flex:function(){return Un.Z},FloatButton:function(){return zn.Z},Form:function(){return O.l},FormCollapseList:function(){return O.E},FormHelper:function(){return D.wK},FullFeaturedHighlighter:function(){return R.EL},Grid:function(){return vn.ZP},Highlighter:function(){return R.oP},INSERT_MENTION_COMMAND:function(){return t.CF},Image:function(){return te.Z},Input:function(){return Zn.Z},InputNumber:function(){return qn.Z},JsonViewer:function(){return M.h},Layout:function(){return $n.Z},List:function(){return En.Z},LogViewer:function(){return S.n},Logo:function(){return F.T},Markdown:function(){return ce.Z},Mentions:function(){return t.oj},Menu:function(){return Pn.Z},MobileChatInputArea:function(){return l.Z},MobileChatSendButton:function(){return L.Z},Modal:function(){return b.u},MonacoController:function(){return B.Hu},MonacoDiffEditor:function(){return B.Xq},MonacoEditor:function(){return B.rE},MonacoEditor2:function(){return u.O},NotificationGlobalStyle:function(){return E.EZ},Page:function(){return I.T},Pagination:function(){return wn.Z},Popconfirm:function(){return ne.Z},Popover:function(){return ee.Z},ProCard:function(){return T.Q},Progress:function(){return Qn.Z},QRCode:function(){return ae.Z},Radio:function(){return Fn.ZP},Rate:function(){return Vn.Z},Result:function(){return Ln.ZP},Row:function(){return jn.Z},Segmented:function(){return Tn.Z},Select:function(){return ie.default},SelectCard:function(){return r.W},Skeleton:function(){return xn.Z},Slider:function(){return C.Z},SliderInput:function(){return h.a},Space:function(){return a.Z},SpeechSynthesisTTS:function(){return he.H},Spin:function(){return j.Z},Statistic:function(){return s.Z},Status:function(){return W.q},Steps:function(){return d.Z},Switch:function(){return f.Z},SyntaxHighlighter:function(){return fe.Z},Table:function(){return P.iA},Tabs:function(){return q.Z},Tag:function(){return fn.Z},TimePicker:function(){return mn.Z},Timeline:function(){return ln.Z},Tooltip:function(){return hn.Z},Tour:function(){return rn.Z},Transfer:function(){return Wn.Z},Tree:function(){return _n.Z},TreeSelect:function(){return de.Z},Typography:function(){return N.Z},UPDATE_MENTIONS_OPTIONS:function(){return t.wv},Upload:function(){return le.Z},Watermark:function(){return Yn.Z},WaveformIcon:function(){return pn.G},colorScales:function(){return U},colors:function(){return U},decoratorTransform:function(){return t.Ab},generateColorNeutralPalette:function(){return w},generateColorPalette:function(){return G},message:function(){return In.ZP},neutralColorScales:function(){return dn},notification:function(){return E.t6},stringify:function(){return M.P},textToEditorState:function(){return t.hC},theme:function(){return Cn.Z},useAudioPlayer:function(){return xe.x},useAutoFocus:function(){return D.wL},useCdnFn:function(){return X.nc},useLink:function(){return X.nB},useResponsive:function(){return se.F},useSpeechRecognition:function(){return pe.x},useSpeechSynthes:function(){return _.J},useTheme:function(){return Pe.Fg},useThemeMode:function(){return je.r},version:function(){return Gn.Z},withFormHelper:function(){return D.MX}});var nn=n(12644),e=n(79213),X=n(94456),Z=n(13306),M=n(33985),F=n(52625),S=n(25969),t=n(99353),B=n(11262),u=n(83706),I=n(40305),T=n(86346),r=n(25777),h=n(66269),W=n(46119),v=n(58479),y=n(5244),x=n(87902),i=n(42938),c=n(26345),g=n(82227),A=n(5795),p=n(99512),O=n(62719),D=n(20147),b=n(97527),E=n(40130),P=n(11546),N=n(94729),on=n(52412),Q=n(98904),z=n(34757),V=n(21113),l=n(30542),L=n(57714),k=n(59212),H=n(99033),sn=n(6381),$=n(99335),R=n(22435),U={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}},J=n(82092),o=n.n(J),K=n(98644),G=function(ue){var Xn=ue.type,Mn=ue.scale,oe=ue.appearance,re=(0,K.Z)(Xn),Se=oe==="dark";return o()(o()(o()(o()(o()(o()(o()(o()(o()(o()({},"color".concat(re,"Bg"),Mn[oe][1]),"color".concat(re,"BgHover"),Mn[oe][2]),"color".concat(re,"Border"),Mn[oe][4]),"color".concat(re,"BorderHover"),Mn[oe][Se?5:3]),"color".concat(re,"Hover"),Mn[oe][Se?10:8]),"color".concat(re),Mn[oe][9]),"color".concat(re,"Active"),Mn[oe][Se?7:10]),"color".concat(re,"TextHover"),Mn[oe][Se?10:8]),"color".concat(re,"Text"),Mn[oe][9]),"color".concat(re,"TextActive"),Mn[oe][Se?7:10])},w=function(ue){var Xn=ue.scale,Mn=ue.appearance;return{colorBgContainer:Mn==="dark"?Xn[Mn][1]:Xn[Mn][0],colorBgElevated:Mn==="dark"?Xn[Mn][2]:Xn[Mn][0],colorBgLayout:Mn==="dark"?Xn[Mn][0]:Xn[Mn][1],colorBgMask:Xn.lightA[8],colorBgSpotlight:Xn[Mn][5],colorBorder:Xn[Mn][4],colorBorderSecondary:Xn[Mn][3],colorFill:Xn["".concat(Mn,"A")][3],colorFillQuaternary:Xn["".concat(Mn,"A")][0],colorFillSecondary:Xn["".concat(Mn,"A")][2],colorFillTertiary:Xn["".concat(Mn,"A")][1],colorText:Xn[Mn][12],colorTextQuaternary:Xn[Mn][6],colorTextSecondary:Xn[Mn][10],colorTextTertiary:Xn[Mn][8]}},dn={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},_=n(82846),pn=n(8559),On=n(67142),cn=n(71477),Bn=n(83491),An=n(53180),Dn=n(79214),Nn=n(77582),bn=n(62701),m=n(22622),an=n(79771),en=n(59153),gn=n(29891),yn=n(10857),Y=n(29797),un=n(40765),Rn=n(68369),Hn=n(20690),Kn=n(66642),Un=n(38590),zn=n(59251),vn=n(8208),te=n(61035),Zn=n(98829),qn=n(579),$n=n(14292),En=n(336),Pn=n(8377),In=n(31826),wn=n(52969),ne=n(39502),ee=n(4615),Qn=n(9192),ae=n(85959),Fn=n(175),Vn=n(22682),Ln=n(10780),jn=n(41546),Tn=n(89843),ie=n(98721),xn=n(91488),C=n(29988),a=n(62272),j=n(62023),s=n(91528),d=n(60804),f=n(51079),q=n(63020),fn=n(52107),Cn=n(37924),ln=n(70995),mn=n(54789),hn=n(1718),rn=n(76326),Wn=n(84141),_n=n(26082),de=n(56317),le=n(25876),Gn=n(3359),Yn=n(79949),me=n(92946),ce=n(76581),fe=n(84254),he=n(49567),Oe=n(30831),xe=n(2190),pe=n(48481),se=n(46092),Pe=n(3772),je=n(71795)},40130:function(Sn,tn,n){n.d(tn,{EZ:function(){return y.E},t6:function(){return Q}});var nn=n(26068),e=n.n(nn),X=n(67825),Z=n.n(X),M=n(48305),F=n.n(M),S=n(335),t=n.n(S),B=n(30657),u=n(19728),I=n(22620),T=n(40765),r=n(60399),h=n(86468),W=n(75271),v=n(52676),y=n(55300),x=["detail","message","description","onClose","className"],i=T.Z.Panel,c=r.Z.Link,g=r.Z.Paragraph,A=r.Z.Text,p={},O=function(l,L){p[l]||(p[l]=[]),p[l].push(L)},D=function(l){delete p[l]},b=function V(l){var L="";if(typeof l=="string")L=l;else if(typeof l=="number")L=l.toString();else if(Array.isArray(l)){var k=t()(l),H;try{for(k.s();!(H=k.n()).done;){var sn=H.value;L+=V(sn)}}catch($){k.e($)}finally{k.f()}}else(0,W.isValidElement)(l)&&(L+=V(l.props.children));return L},E=function(l){var L,k=l.noticeKey,H=l.message,sn=((L=p[k])===null||L===void 0?void 0:L.length)||0;return(0,v.jsxs)(v.Fragment,{children:[H,sn>1&&" (".concat(sn,")")]})},P=function(l){var L=l.noticeKey,k=(0,W.useState)(),H=F()(k,2),sn=H[0],$=H[1],R={},U=t()(p[L]),J;try{for(U.s();!(J=U.n()).done;){var o=J.value,K=b(o.description);o.descKey=K,R[K]=o}}catch(G){U.e(G)}finally{U.f()}return(0,v.jsx)(T.Z,{accordion:!0,activeKey:sn,className:"yunti-notification-collapse",expandIcon:function(w){var dn=w.isActive;return(0,v.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:dn?(0,v.jsx)(c,{className:"yunti-notification-link",children:(0,v.jsx)(B.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,v.jsx)(u.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(w){$(w)},children:Object.values(R).map(function(G){var w=G.descKey,dn=G.description,_=G.detail;return(0,v.jsx)(i,{header:(0,v.jsx)(A,{ellipsis:{tooltip:!1},style:{width:250},children:dn}),children:(0,v.jsx)(g,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(_,null,2)},type:"secondary",children:(0,v.jsx)("pre",{children:JSON.stringify(_,null,2)})})},w)})})},N=function(l){var L=l.detail,k=l.message,H=l.description,sn=l.onClose,$=l.className,R=Z()(l,x),U=b(k);O(U,l);var J=function(){sn==null||sn(),D(U)};return l.type==="warning"&&!l.icon&&(R.icon=(0,v.jsx)(I.Z,{style:{color:"#ff7d00"}})),L?h.ZP.open(e()({key:U,message:(0,v.jsx)(E,{message:k,noticeKey:U}),description:(0,v.jsx)(P,{noticeKey:U}),onClose:J,className:"yunti-notification ".concat($)},R)):h.ZP.open(e()({key:U,message:(0,v.jsx)(E,{message:k,noticeKey:U}),description:H,onClose:J,className:"yunti-notification ".concat($)},R))},on=function(l){var L;if(((l==null||(L=l.errors)===null||L===void 0?void 0:L.length)||0)>0){l!=null&&l.errors;var k=t()((l==null?void 0:l.errors)||[]),H;try{for(k.s();!(H=k.n()).done;){var sn=H.value;N(e()(e()({detail:sn,description:sn.message},l),{},{type:"warning"}))}}catch($){k.e($)}finally{k.f()}}else N(e()(e()({},l),{},{type:"warning"}))},Q=e()(e()({},h.ZP),{},{success:function(l){return N(e()(e()({},l),{},{type:"success"}))},info:function(l){return N(e()(e()({},l),{},{type:"info"}))},warning:function(l){return N(e()(e()({},l),{},{type:"warning"}))},warn:function(l){return N(e()(e()({},l),{},{type:"warning"}))},error:function(l){return N(e()(e()({},l),{},{type:"error"}))},warnings:on,warns:on}),z=null},55300:function(Sn,tn,n){n.d(tn,{E:function(){return F}});var nn=n(53649),e=n.n(nn),X=n(86468),Z=n(3772),M,F=(0,Z.vJ)(M||(M=e()([`
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
`])),function(S){var t=S.theme;return"".concat(t==null?void 0:t.colorPrimary," !important")},function(S){var t=S.theme;return"".concat(t==null?void 0:t.colorPrimaryHover," !important")},function(S){var t=S.theme;return t==null?void 0:t.colorPrimary},function(S){var t=S.theme;return"".concat(t==null?void 0:t.colorPrimary," !important")},function(S){var t=S.theme;return"".concat(t==null?void 0:t.colorPrimaryHover," !important")},function(S){var t=S.theme,B=t||{},u=B.prefixCls;return X.ZP.config({prefixCls:u}),`
      .`.concat(u,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(u,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},28485:function(Sn,tn,n){n.d(tn,{j:function(){return nn}});var nn=typeof window!="undefined"}}]);
