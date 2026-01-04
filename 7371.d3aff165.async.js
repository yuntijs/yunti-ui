(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7371],{6079:function(Se,K,e){"use strict";e.d(K,{b:function(){return S}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(94718),O=e(52136),b=e(53649),t=e.n(b),l=e(75555),r,o=(0,l.kc)(function(m,f){var s=m.css,E=f.bordered,u=E===void 0?"dashed":E;return{custom:s(r||(r=t()([`
        border-style: `,` !important;
      `])),u)}},{hashPriority:"low"}),h=e(69979),i=["bordered","className"],S=function(f){var s=f.bordered,E=s===void 0?"dashed":s,u=f.className,_=M()(f,i),j=o({bordered:E}),D=j.styles,C=j.cx;return(0,h.jsx)(d.Z,n()(n()({},_),{},{className:C(D.custom,u)}))};S.ErrorBoundary=d.Z.ErrorBoundary;var x=null},34953:function(Se,K,e){"use strict";e.d(K,{g:function(){return r}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(5407),O=e(52136),b=e(18481),t=e(69979),l=["children"],r=function(i){var S=i.children,x=M()(i,l);return(0,t.jsxs)(d.Z,n()(n()({},x),{},{children:[(0,t.jsx)(b.E,{}),S]}))};r.useApp=d.Z.useApp;var o=null},35008:function(Se,K,e){"use strict";e.d(K,{a:function(){return U.Z}});var U=e(39813)},10546:function(Se,K,e){"use strict";e.d(K,{Z:function(){return U.Z}});var U=e(71868)},58139:function(Se,K,e){"use strict";var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(53649),O=e.n(d),b=e(59110),t=e(8343),l=e(75555),r=e(52136),o=e(69979),h=["className","style","classNames","expand","setExpand","bottomAddons","topAddons","onSizeChange","heights","onSend"],i,S,x,m=(0,l.kc)(function(s){var E=s.css;return{container:E(i||(i=O()([`
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 8px;

      height: 100%;
      padding-block: 12px 16px;
      padding-inline: 0;
    `]))),textarea:E(S||(S=O()([`
      padding-block: 0;
      padding-inline: 24px;
      line-height: 1.5;
    `]))),textareaContainer:E(x||(x=O()([`
      position: relative;
      flex: 1;
    `])))}}),f=(0,r.forwardRef)(function(s,E){var u=s.className,_=s.style,j=s.classNames,D=s.expand,C=D===void 0?!0:D,N=s.setExpand,P=s.bottomAddons,L=s.topAddons,$=s.onSizeChange,H=s.heights,J=s.onSend,V=M()(s,h),z=m(),Q=z.styles;return(0,o.jsx)(b.ZP,{className:u,classNames:j,fullscreen:C,headerHeight:H==null?void 0:H.headerHeight,maxHeight:H==null?void 0:H.maxHeight,minHeight:H==null?void 0:H.minHeight,onSizeChange:$,placement:"bottom",size:{height:H==null?void 0:H.inputHeight,width:"100%"},style:n()({zIndex:10},_),children:(0,o.jsxs)("section",{className:Q.container,style:{minHeight:H==null?void 0:H.minHeight},children:[L,(0,o.jsx)("div",{className:Q.textareaContainer,children:(0,o.jsx)(t.Z,n()({className:Q.textarea,onSend:function(){J==null||J(),N==null||N(!1)},ref:E,variant:"borderless"},V))}),P]})})});K.Z=(0,r.memo)(f)},12213:function(Se,K,e){"use strict";e.d(K,{$p:function(){return d.Z},Ji:function(){return M.Z},XT:function(){return n.Z},ah:function(){return U.Z},hG:function(){return R.Z},s3:function(){return O.Z}});var U=e(58139),n=e(44838),R=e(8343),M=e(41493),d=e(12508),O=e(8785)},49048:function(Se,K,e){"use strict";e.d(K,{z:function(){return q}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(48265),O=e(34724),b=e(91364),t=e(74062),l=e(7807),r=e(52136),o=e(75033),h=e(53649),i=e.n(h),S=e(75555),x,m,f,s,E,u,_,j,D,C,N,P,L,$,H,J,V,z,Q=(0,S.kc)(function(p,ee){var c=p.cx,Y=p.css,me=p.token,B=p.isDarkMode,be=p.responsive,re=ee.placement,xe=ee.variant,je=ee.title,ae=ee.primary,le=ee.avatarSize,G=ee.editing,ce=ee.time,se=ee.isLatest,_e=Y(x||(x=i()([`
      padding-block: 4px;
      padding-inline: 8px;

      background-color: `,`;
      border-radius: `,`px;

      transition: background-color 100ms `,`;
    `])),ae?B?me.colorFill:"#F6F6F6":B?me.colorFillSecondary:me.colorBgContainer,me.borderRadius,me.motionEaseOut),Re=Y(m||(m=i()([`
      padding-block-start: `,`;
    `])),je?0:"6px"),Ie=Y(f||(f=i()([`
      margin-block-end: -16px;
      transition: background-color 100ms `,`;
    `])),me.motionEaseOut),Xe=xe==="bubble"?_e:Re,Ze=G&&Y(s||(s=i()([`
        width: 100%;
      `]))),ue=re==="right"?"-4px unset":"unset -4px";return{actions:c(Y(E||(E=i()([`
          flex: none;
          align-self: `,`;
          justify-content: `,`;
        `])),re==="left"?"flex-start":"flex-end",re==="left"?"flex-end":"flex-start"),G&&Y(u||(u=i()([`
            pointer-events: none !important;
            opacity: 0 !important;
          `])))),avatarContainer:Y(_||(_=i()([`
        position: relative;
        flex: none;
        width: `,`px;
        height: `,`px;
      `])),le,le),avatarGroupContainer:Y(j||(j=i()([`
        width: `,`px;
      `])),le),container:c(xe==="docs"&&Ie,Y(D||(D=i()([`
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
        `])),se?"unset":"none",se?1:0,me.motionEaseOut,be.mobile,xe==="docs"?"12px":"6px")),editingContainer:c(Ze,Y(C||(C=i()([`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid `,`;

          &:active,
          &:hover {
            border-color: `,`;
          }
        `])),me.colorBorderSecondary,me.colorBorder),xe==="docs"&&Y(N||(N=i()([`
            background: `,`;
            border-radius: `,`px;
          `])),me.colorFillQuaternary,me.borderRadius)),editingInput:Y(P||(P=i()([`
        width: 100%;
      `]))),errorContainer:Y(L||(L=i()([`
        position: relative;
        overflow: hidden;
        width: 100%;
      `]))),loading:Y($||($=i()([`
        position: absolute;
        inset-block-end: 0;
        inset-inline: `,`;

        width: 16px;
        height: 16px;

        color: `,`;

        background: `,`;
        border-radius: 50%;
      `])),ue,me.colorBgLayout,me.colorPrimary),message:c(Xe,Y(H||(H=i()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            width: 100%;
          }
        `])),be.mobile)),messageContainer:c(Ze,Y(J||(J=i()([`
          position: relative;
          overflow: hidden;
          max-width: 96%;
          margin-block-start: `,`px;

          `,` {
            overflow-x: auto;
          }
        `])),ce?-16:0,be.mobile)),messageContent:c(Ze,Y(V||(V=i()([`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          `,` {
            flex-direction: column !important;
          }
        `])),be.mobile)),messageExtra:c("message-extra"),name:Y(z||(z=i()([`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        text-align: `,`;
      `])),me.colorTextDescription,re==="left"?"left":"right")}}),g=e(69979),W=(0,r.memo)(function(p){var ee=p.actions,c=p.placement,Y=p.variant,me=p.editing,B=Q({editing:me,placement:c,variant:Y}),be=B.styles;return(0,g.jsx)(o.D,{align:"flex-start",className:be.actions,role:"menubar",children:ee})}),oe=W,ne=e(86650),I=(0,r.memo)(function(p){var ee=p.editing,c=p.onChange,Y=p.onEditingChange,me=p.text,B=p.message,be=p.placement,re=p.messageExtra,xe=p.renderMessage,je=p.variant,ae=p.primary,le=p.onDoubleClick,G=p.fontSize,ce=p.markdownProps,se=p.markdownClassname,_e=Q({editing:ee,placement:be,primary:ae,variant:je}),Re=_e.cx,Ie=_e.styles,Xe=(0,l.F)(),Ze=Xe.mobile,ue=(0,g.jsx)(ne.i,{classNames:{input:Ie.editingInput,markdown:se},editButtonSize:"small",editing:ee,fontSize:G,fullFeaturedCodeBlock:!0,markdownProps:ce,onChange:c,onEditingChange:Y,openModal:Ze?ee:void 0,text:me,value:B?String(B).trim():""}),a=xe?xe(ue):ue;return(0,g.jsxs)(o.D,{className:Re(Ie.message,ee&&Ie.editingContainer),onDoubleClick:le,children:[a,re&&!ee?(0,g.jsx)("div",{className:Ie.messageExtra,children:re}):null]})}),te=I,F=["avatarAddon","onAvatarClick","avatarProps","actions","className","primary","loading","message","placement","variant","avatar","error","showTitle","time","editing","onChange","onEditingChange","messageExtra","affixation","renderMessage","text","errorMessage","onDoubleClick","fontSize","markdownProps","markdownClassname","isLatest","hideAvatar"],k=32,q=(0,r.memo)(function(p){var ee=p.avatarAddon,c=p.onAvatarClick,Y=p.avatarProps,me=p.actions,B=p.className,be=p.primary,re=p.loading,xe=p.message,je=p.placement,ae=je===void 0?"left":je,le=p.variant,G=le===void 0?"bubble":le,ce=p.avatar,se=p.error,_e=p.showTitle,Re=p.time,Ie=p.editing,Xe=p.onChange,Ze=p.onEditingChange,ue=p.messageExtra,a=p.affixation,w=p.renderMessage,he=p.text,Me=p.errorMessage,Oe=p.onDoubleClick,Pe=p.fontSize,Ce=p.markdownProps,en=p.markdownClassname,ke=p.isLatest,Ve=p.hideAvatar,ve=M()(p,F),Je=(0,l.F)(),Fe=Je.mobile,Ye=Q({editing:Ie,placement:ae,primary:be,showTitle:_e,time:Re,title:ce.title,variant:G,isLatest:ke}),$e=Ye.cx,un=Ye.styles;return(0,g.jsxs)(o.D,n()(n()({className:$e(un.container,B),direction:ae==="left"?"horizontal":"horizontal-reverse",gap:Fe?6:12},ve),{},{children:[Ve?null:(0,g.jsx)(d.Z,n()(n()({},Y),{},{addon:ee,avatar:ce,loading:re,onClick:c,placement:ae,size:Fe?k:void 0})),(0,g.jsxs)(o.D,{align:ae==="left"?"flex-start":"flex-end",className:un.messageContainer,children:[(0,g.jsx)(t.Z,{avatar:ce,placement:ae,showTitle:_e,time:Re}),(0,g.jsxs)(o.D,{align:ae==="left"?"flex-start":"flex-end",className:un.messageContent,direction:"vertical",gap:8,children:[se?(0,g.jsx)(b.Z,{error:se,message:Me,placement:ae}):(0,g.jsx)(te,{editing:Ie,fontSize:Pe,markdownClassname:en,markdownProps:Ce,message:xe,messageExtra:ue,onChange:Xe,onDoubleClick:Oe,onEditingChange:Ze,placement:ae,primary:be,renderMessage:w,text:he,variant:G}),a?(0,g.jsx)("div",{className:"affixation",children:a}):null,(0,g.jsx)(oe,{actions:me,editing:Ie,placement:ae,variant:G})]})]}),Fe&&G==="bubble"&&(0,g.jsx)(O.Z,{borderSpacing:k})]}))})},30812:function(Se,K,e){"use strict";e.d(K,{L:function(){return I}});var U=e(15558),n=e.n(U),R=e(26068),M=e.n(R),d=e(67825),O=e.n(d),b=e(71626),t=e(52136),l=e(48305),r=e.n(l),o=e(53649),h=e.n(o),i=e(75716),S=e(75555),x=e(95770),m=e(71723),f=e(30296),s=e(75033),E=e(69979),u,_,j=(0,S.kc)(function(te){var F=te.css,k=te.token,q=te.isDarkMode;return{container:F(u||(u=h()([`
    padding-block: 12px;
    color: `,`;
  `])),k.colorTextSecondary),titlebox:F(_||(_=h()([`
    cursor: pointer;

    min-width: 140px;
    max-width: 230px;
    padding: 8px 12px;

    font-size: 12px;
    color: `,`;

    background: `,`;
    border-radius: 8px;
  `])),k.colorText,q?k.colorFillTertiary:"#f3f5fc")}}),D={fontSize:13,lineHeight:1.625,headerMultiple:.2,marginMultiple:.6},C=(0,t.memo)(function(te){var F=te.children,k=te.second,q=te.done,p=j(),ee=p.styles,c=p.theme,Y=(0,t.useState)(!0),me=r()(Y,2),B=me[0],be=me[1];return(0,E.jsxs)(s.D,{className:ee.container,children:[(0,E.jsxs)(s.D,{className:ee.titlebox,distribution:"space-between",flex:1,horizontal:!0,onClick:function(){be(!B)},children:[(0,E.jsxs)(s.D,{gap:8,horizontal:!0,children:[(0,E.jsx)(i.Z,{color:c.purple,icon:x.Z}),q?"\u5DF2\u6DF1\u5EA6\u601D\u8003".concat(k?"\uFF08\u7528\u65F6 "+k+" s\uFF09":""," "):"\u601D\u8003\u4E2D..."]}),(0,E.jsx)(i.Z,{icon:B?m.Z:f.Z})]}),B&&(0,E.jsx)(b.Z,M()(M()({},D),{},{children:F}))]})}),N=C,P=e(25709),L=function(){return function(F){(0,P.Vn)(F,"element",function(k,q,p){if(k.type==="element"&&k.tagName==="p"){var ee=k.children||[],c=ee.findIndex(function(be){return be.type==="raw"&&be.value==="<think>"}),Y=ee.findIndex(function(be){return be.type==="raw"&&be.value==="</think>"});if(c!==-1&&Y!==-1&&Y>c){var me=ee.slice(c+1,Y),B={children:me,properties:{},tagName:"think",type:"element"};return p.children.splice(q,1,B),q}}})}},$=L,H=e(49827),J=e(34505),V=function(){return function(F){(0,P.Vn)(F,"html",function(k,q,p){if(k.value==="<think>"){for(var ee=q,c=ee+1,Y=!1;c<p.children.length;){var me=p.children[c];if(me.type==="html"&&me.value==="</think>"){Y=!0;break}c++}var B=Y?c-ee+1:p.children.length-ee,be=p.children.slice(ee+1,Y?c:void 0),re=be.map(function(je){return je.type==="paragraph"?je.children.map(function(ae){return ae.value}).join(""):(0,H.x)(je)}).join(`

`).trim(),xe={data:{hChildren:[{type:"text",value:re||" "}],hName:"think"},position:k.position,type:"thinkBlock"};return p.children.splice(ee,B,xe),[J.AM,ee+1]}})}},z={Component:N,rehypePlugin:$,remarkPlugins:V,tag:"think"},Q=z,g=[Q],W=function(F){var k=new RegExp("([^\\n])\\s*<think>","g"),q=new RegExp("<think>\\s*([^\\n])","g"),p=new RegExp("([^\\n])\\s*<\\/think>","g"),ee=new RegExp("<\\/think>\\s*([^\\n])","g"),c=new RegExp("\\n{3,}","g");return(F||"").replaceAll(k,`$1

<think>`).replaceAll(q,`<think>

$1`).replaceAll(p,`$1

</think>`).replaceAll(ee,`</think>

$1`).replaceAll(c,`

`)},oe=["components","remarkPlugins","customComponentProps","children"],ne=g.map(function(te){return te.remarkPlugins}),I=function(F){var k=F.components,q=k===void 0?{}:k,p=F.remarkPlugins,ee=p===void 0?[]:p,c=F.customComponentProps,Y=F.children,me=O()(F,oe),B=(0,t.useMemo)(function(){var re=Object.fromEntries(g.map(function(xe){return[xe.tag,function(je){return(0,E.jsx)(xe.Component,M()(M()({},je),c==null?void 0:c[xe.tag]))}]}));return M()(M()({},re),q)},[q,c]),be=(0,t.useMemo)(function(){return[].concat(n()(ne),n()(ee))},[ee]);return(0,E.jsx)(b.Z,M()(M()({components:B,remarkPlugins:be},me),{},{children:W(Y)}))}},55646:function(Se,K,e){"use strict";e.d(K,{p:function(){return g}});var U=e(26068),n=e.n(U),R=e(48305),M=e.n(R),d=e(67825),O=e.n(d),b=e(52136),t=e(75033),l=e(75244),r=typeof window!="undefined"&&"navigator"in window&&/(mac|iphone|ipod|ipad)/i.test(navigator.platform),o=e(53649),h=e.n(o),i=e(75555),S=e(69708),x,m,f,s,E,u=(0,i.kc)(function(W,oe){var ne=W.cx,I=W.css,te=W.token,F=oe.variant,k=oe.fontSize,q=(0,S.Z)(k)?"".concat(k,"px"):k,p=I(x||(x=h()([`
      padding-block: 8px;
      padding-inline: 12px;

      background-color: `,`;
      border: 1px solid `,`;
      border-radius: `,`px;
    `])),F==="block"?te.colorFillTertiary:"transparent",F==="block"?"transparent":te.colorBorderSecondary,te.borderRadius);return{container:ne(F!=="pure"&&p,I(m||(m=h()([`
          position: relative;
          overflow: hidden auto;
          width: 100%;
        `])))),editor:I(f||(f=h()([`
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
      `])),te.fontFamilyCode,q),highlight:I(s||(s=h()([`
        pointer-events: none;

        pre,
        code {
          overflow: hidden;
        }
      `]))),textarea:I(E||(E=h()([`
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
      `])),te.colorText,te.colorTextQuaternary)}}),_=e(69979),j=["autoFocus","disabled","form","classNames","styles","ignoreTabKey","insertSpaces","maxLength","minLength","onBlur","onClick","onFocus","onKeyDown","onKeyUp","onValueChange","placeholder","readOnly","required","style","className","tabSize","textareaId","value","language","fontSize","variant"],D=89,C=90,N=77,P=57,L=219,$=222,H=192,J=100,V=3e3,z=typeof window!="undefined"&&"navigator"in window&&/win/i.test(navigator.platform),Q=function(oe,ne){return oe.slice(0,Math.max(0,ne)).split(`
`)},g=(0,b.forwardRef)(function(W,oe){var ne=W.autoFocus,I=W.disabled,te=W.form,F=W.classNames,k=F===void 0?{}:F,q=W.styles,p=q===void 0?{}:q,ee=W.ignoreTabKey,c=ee===void 0?!1:ee,Y=W.insertSpaces,me=Y===void 0?!0:Y,B=W.maxLength,be=W.minLength,re=W.onBlur,xe=W.onClick,je=W.onFocus,ae=W.onKeyDown,le=W.onKeyUp,G=W.onValueChange,ce=W.placeholder,se=W.readOnly,_e=W.required,Re=W.style,Ie=W.className,Xe=W.tabSize,Ze=Xe===void 0?2:Xe,ue=W.textareaId,a=W.value,w=W.language,he=W.fontSize,Me=he===void 0?12:he,Oe=W.variant,Pe=Oe===void 0?"ghost":Oe,Ce=O()(W,j),en=u({fontSize:Me,variant:Pe}),ke=en.styles,Ve=en.cx,ve=(0,b.useRef)({offset:-1,stack:[]}),Je=(0,b.useRef)(null),Fe=(0,b.useState)(!0),Ye=M()(Fe,2),$e=Ye[0],un=Ye[1],an=(0,b.useCallback)(function(Ee){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,fe=ve.current,X=fe.stack,ie=fe.offset;if(X.length>0&&ie>-1){ve.current.stack=X.slice(0,ie+1);var ge=ve.current.stack.length;if(ge>J){var Be=ge-J;ve.current.stack=X.slice(Be,ge),ve.current.offset=Math.max(ve.current.offset-Be,0)}}var ye=Date.now();if(T){var Ae=ve.current.stack[ve.current.offset];if(Ae&&ye-Ae.timestamp<V){var Ke,fn,rn,cn=/[^\da-z]([\da-z]+)$/i,dn=(Ke=Q(Ae.value,Ae.selectionStart).pop())===null||Ke===void 0?void 0:Ke.match(cn),En=(fn=Q(Ee.value,Ee.selectionStart).pop())===null||fn===void 0?void 0:fn.match(cn);if(dn!=null&&dn[1]&&En!==null&&En!==void 0&&(rn=En[1])!==null&&rn!==void 0&&rn.startsWith(dn[1])){ve.current.stack[ve.current.offset]=n()(n()({},Ee),{},{timestamp:ye});return}}}ve.current.stack.push(n()(n()({},Ee),{},{timestamp:ye})),ve.current.offset++},[]),sn=(0,b.useCallback)(function(){var Ee=Je.current;if(Ee){var T=Ee.value,fe=Ee.selectionStart,X=Ee.selectionEnd;an({selectionEnd:X,selectionStart:fe,value:T})}},[an]),We=function(T){var fe=Je.current;fe&&(fe.value=T.value,fe.selectionStart=T.selectionStart,fe.selectionEnd=T.selectionEnd,G==null||G(T.value))},on=function(T){var fe=Je.current,X=ve.current.stack[ve.current.offset];X&&fe&&(ve.current.stack[ve.current.offset]=n()(n()({},X),{},{selectionEnd:fe.selectionEnd,selectionStart:fe.selectionStart})),an(T),We(T)},nn=function(){var T=ve.current,fe=T.stack,X=T.offset,ie=fe[X-1];ie&&(We(ie),ve.current.offset=Math.max(X-1,0))},tn=function(){var T=ve.current,fe=T.stack,X=T.offset,ie=fe[X+1];ie&&(We(ie),ve.current.offset=Math.min(X+1,fe.length-1))},qe=function(T){if(!(ae&&(ae(T),T.defaultPrevented))){T.key==="Escape"&&T.currentTarget.blur();var fe=T.currentTarget,X=fe.value,ie=fe.selectionStart,ge=fe.selectionEnd,Be=(me?" ":"	").repeat(Ze),ye=z?T.ctrlKey&&T.keyCode===D:T.ctrlKey&&T.keyCode===C&&T.shiftKey;if(T.key==="Tab"&&!c&&$e)if(T.preventDefault(),T.shiftKey){var Ae=Q(X,ie),Ke=Ae.length-1,fn=Q(X,ge).length-1,rn=X.split(`
`).map(function(Mn,On){return On>=Ke&&On<=fn&&Mn.startsWith(Be)?Mn.slice(Be.length):Mn}).join(`
`);if(X!==rn){var cn=Ae[Ke];on({selectionEnd:ge-(X.length-rn.length),selectionStart:cn!=null&&cn.startsWith(Be)?ie-Be.length:ie,value:rn})}}else if(ie===ge){var dn=ie+Be.length;on({selectionEnd:dn,selectionStart:dn,value:X.slice(0,Math.max(0,ie))+Be+X.slice(Math.max(0,ge))})}else{var En=Q(X,ie),An=En.length-1,Rn=Q(X,ge).length-1,ze=En[An];on({selectionEnd:ge+Be.length*(Rn-An+1),selectionStart:ze&&/\S/.test(ze)?ie+Be.length:ie,value:X.split(`
`).map(function(Mn,On){return On>=An&&On<=Rn?Be+Mn:Mn}).join(`
`)})}else if(T.key==="Backspace"){var gn=ie!==ge,_n=X.slice(0,Math.max(0,ie));if(_n.endsWith(Be)&&!gn){T.preventDefault();var He=ie-Be.length;on({selectionEnd:He,selectionStart:He,value:X.slice(0,Math.max(0,ie-Be.length))+X.slice(Math.max(0,ge))})}}else if(T.key==="Enter"){if(ie===ge){var xn=Q(X,ie).pop(),bn=xn==null?void 0:xn.match(/^\s+/);if(bn!=null&&bn[0]){T.preventDefault();var Sn=`
`+bn[0],Bn=ie+Sn.length;on({selectionEnd:Bn,selectionStart:Bn,value:X.slice(0,Math.max(0,ie))+Sn+X.slice(Math.max(0,ge))})}}}else if(T.keyCode===P||T.keyCode===L||T.keyCode===$||T.keyCode===H){var Cn;T.keyCode===P&&T.shiftKey?Cn=["(",")"]:T.keyCode===L?Cn=T.shiftKey?["{","}"]:["[","]"]:T.keyCode===$?Cn=T.shiftKey?['"','"']:["'","'"]:T.keyCode===H&&!T.shiftKey&&(Cn=["`","`"]),ie!==ge&&Cn&&(T.preventDefault(),on({selectionEnd:ge+2,selectionStart:ie,value:X.slice(0,Math.max(0,ie))+Cn[0]+X.substring(ie,ge)+Cn[1]+X.slice(Math.max(0,ge))}))}else(r?T.metaKey&&T.keyCode===C:T.ctrlKey&&T.keyCode===C)&&!T.shiftKey&&!T.altKey?(T.preventDefault(),nn()):(r?T.metaKey&&T.keyCode===C&&T.shiftKey:ye)&&!T.altKey?(T.preventDefault(),tn()):T.keyCode===N&&T.ctrlKey&&(!r||T.shiftKey)&&(T.preventDefault(),un(function(Mn){return!Mn}))}},ln=function(T){var fe=T.currentTarget,X=fe.value,ie=fe.selectionStart,ge=fe.selectionEnd;an({selectionEnd:ge,selectionStart:ie,value:X},!0),G(X)};return(0,b.useEffect)(function(){sn()},[sn]),(0,b.useImperativeHandle)(oe,function(){return{get session(){return{history:ve.current}},set session(Ee){ve.current=Ee.history}}},[]),(0,_.jsx)(t.D,n()(n()({className:Ve(ke.container,Ie),style:Re},Ce),{},{children:(0,_.jsxs)("div",{className:ke.editor,children:[(0,_.jsx)(l.d,{className:Ve(ke.highlight,k==null?void 0:k.highlight),language:w,style:p.highlight,children:a}),(0,_.jsx)("textarea",{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",autoFocus:ne,className:Ve(ke.textarea,k==null?void 0:k.textarea),"data-gramm":!1,disabled:I,form:te,id:ue,maxLength:B,minLength:be,onBlur:re,onChange:ln,onClick:xe,onFocus:je,onKeyDown:qe,onKeyUp:le,placeholder:ce,readOnly:se,ref:function(T){return Je.current=T},required:_e,spellCheck:!1,style:n()({},p==null?void 0:p.textarea),value:a})]})}))})},24803:function(Se,K,e){"use strict";e.d(K,{U:function(){return N}});var U=e(26068),n=e.n(U),R=e(48305),M=e.n(R),d=e(67825),O=e.n(d),b=e(17542),t=e(49781),l=e(659),r=e(56214),o=e(52136),h=e(96091),i=e.n(h),S=e(53649),x=e.n(S),m=e(75555),f,s,E,u,_,j=(0,m.kc)(function(P){var L=P.css,$=P.token,H=P.prefixCls;return{root:L(f||(f=x()([`
      overflow: hidden;
    `]))),wrapper:L(s||(s=x()([`
      width: 640px !important;
      margin: `,`px;
      box-shadow: none !important;
    `])),$.marginLG),content:L(E||(E=x()([`
      overflow: hidden;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),$.borderRadiusLG,$.boxShadowSecondary),dragWrapper:L(u||(u=x()([`
      width: 100%;
      height: 100%;
    `]))),dragHandle:L(_||(_=x()([`
      cursor: move;
    `])))}}),D=e(69979),C=["title","classNames","defaultPosition","onPositionChange"],N=(0,o.memo)(function(P){var L=P.title,$=P.classNames,H=$===void 0?{}:$,J=P.defaultPosition,V=P.onPositionChange,z=O()(P,C),Q=j(),g=Q.styles,W=Q.cx,oe=(0,o.useState)({left:0,top:0,bottom:0,right:0}),ne=M()(oe,2),I=ne[0],te=ne[1],F=(0,o.useRef)(null),k=function(p,ee){var c,Y=window.document.documentElement,me=Y.clientWidth,B=Y.clientHeight,be=(c=F.current)===null||c===void 0?void 0:c.getBoundingClientRect();be&&te({left:-be.left+ee.x,right:me-(be.right-ee.x),top:-be.top+ee.y,bottom:B-(be.bottom-ee.y)})};return(0,D.jsx)(t.Z,n()(n()({},z),{},{classNames:n()(n()({},H),{},{wrapper:W(g.wrapper,H.wrapper),content:W(g.content,H.content)}),destroyOnHidden:!0,drawerRender:function(p){return(0,D.jsx)(i(),{bounds:I,defaultPosition:J,handle:".".concat(g.dragHandle),nodeRef:F,onStart:function(c,Y){return k(c,Y)},onStop:function(c,Y){V==null||V({x:Y.x,y:Y.y})},children:(0,D.jsx)("div",{className:g.dragWrapper,ref:F,children:p})})},mask:!1,rootClassName:g.root,title:(0,D.jsxs)(l.Z,{align:"center",className:g.dragHandle,children:[(0,D.jsx)(l.Z,{flex:2,children:L}),(0,D.jsx)(l.Z,{children:(0,D.jsx)(r.ZP,{className:g.dragHandle,icon:(0,D.jsx)(b.Z,{}),type:"text"})})]})}))})},20939:function(Se,K,e){"use strict";e.d(K,{d:function(){return m}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(49781),O=e(52136),b=e(53649),t=e.n(b),l=e(75555),r,o,h,i=(0,l.kc)(function(s,E){var u=s.css,_=s.prefixCls,j=E.closeIcon,D=E.closeIconPlacement,C=E.extra,N=u(r||(r=t()([`
      .`,`-drawer-header-title {
        flex-direction: row-reverse;
      }
      .`,`-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      `,`
    `])),_,_,!(j===null||j===!1)&&u(o||(o=t()([`
        .`,`-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `])),_));return{custom:u(h||(h=t()([`
        `,`
      `])),(!D||D==="right"||D==="auto"&&!C)&&N)}},{hashPriority:"low"}),S=e(69979),x=["className"],m=function(E){var u=E.className,_=M()(E,x),j=i(_),D=j.styles,C=j.cx;return(0,S.jsx)(d.Z,n()(n()({},_),{},{className:C(D.custom,u)}))},f=null},38882:function(Se,K,e){"use strict";e.d(K,{L:function(){return u}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(659),O=e(2991),b=e(52136),t=e(53649),l=e.n(t),r=e(75555),o,h,i,S,x,m=(0,r.kc)(function(_,j){var D=_.css,C=_.token,N=_.prefixCls,P=j.divider,L=j.position;return{menu:D(o||(o=l()([`
        &.`,`-dropdown-menu {
          border: none;
          box-shadow: none !important;
        }
      `])),N),menuWrapper:D(h||(h=l()([`
        background-color: `,`;
        border-radius: `,`px;
        box-shadow: `,`;
      `])),C.colorBgElevated,C.borderRadiusLG,C.boxShadowSecondary),menuExtra:D(i||(i=l()([`
        padding: 10px 16px 4px;
        `,`
      `])),P&&D(L==="top"?S||(S=l()([`
              border-bottom: 1px solid `,`;
            `])):x||(x=l()([`
              border-top: 1px solid `,`;
            `])),C.colorSplit))}}),f=e(69979),s=["menuExtra","popupRender"],E=function(j){var D=j.menuExtra,C=j.popupRender,N=M()(j,s),P=D||{},L=P.position,$=L===void 0?"top":L,H=P.divider,J=H===void 0?!1:H,V=P.content,z=m({divider:J,position:$}),Q=z.styles,g=z.cx,W=(0,b.useCallback)(function(oe){var ne=b.cloneElement(oe,{className:g(Q.menu)});if(!V)return C?(0,f.jsx)(d.Z,{className:Q.menuWrapper,vertical:!0,children:C(ne)}):oe;var I=(0,f.jsx)(d.Z,{align:"center",className:Q.menuExtra,children:V});return(0,f.jsxs)(d.Z,{className:Q.menuWrapper,vertical:!0,children:[$==="top"&&I,ne,$==="bottom"&&I]})},[V,g,C,$,Q.menu,Q.menuExtra,Q.menuWrapper]);return(0,f.jsx)(O.Z,n()({popupRender:W},N))},u=E;u.Button=O.Z.Button},86650:function(Se,K,e){"use strict";e.d(K,{i:function(){return o}});var U=e(26068),n=e.n(U),R=e(48305),M=e.n(R),d=e(86258),O=e(12616),b=e(52136),t=e(6680),l=e(30812),r=e(69979),o=(0,b.memo)(function(h){var i=h.value,S=h.onChange,x=h.classNames,m=x===void 0?{}:x,f=h.onEditingChange,s=h.editing,E=h.openModal,u=h.onOpenChange,_=h.placeholder,j=h.showEditWhenEmpty,D=j===void 0?!1:j,C=h.styles,N=h.height,P=h.variant,L=h.editButtonSize,$=h.text,H=h.fullFeaturedCodeBlock,J=h.model,V=h.fontSize,z=h.markdownProps,Q=(0,t.Z)(!1,{onChange:f,value:s}),g=M()(Q,2),W=g[0],oe=g[1],ne=(0,t.Z)(!1,{onChange:u,value:E}),I=M()(ne,2),te=I[0],F=I[1],k=N==="auto",q=(0,r.jsx)(d.Z,{className:m==null?void 0:m.input,classNames:{textarea:m==null?void 0:m.textarea,editor:m.input},defaultValue:i,editButtonSize:L,height:N,onCancel:function(){return oe(!1)},onConfirm:function(ee){S==null||S(ee),oe(!1)},placeholder:_,style:C==null?void 0:C.input,text:$,variant:P});return!i&&D?q:(0,r.jsxs)(r.Fragment,{children:[!te&&W?q:(0,r.jsx)(l.L,n()(n()({className:m==null?void 0:m.markdown,fontSize:V,fullFeaturedCodeBlock:H,style:n()({height:k?"unset":N},C==null?void 0:C.markdown),variant:"chat"},z),{},{children:i||_||""})),te&&(0,r.jsx)(O.Z,{editing:W,extra:J==null?void 0:J.extra,footer:J==null?void 0:J.footer,height:N,onChange:S,onEditingChange:oe,onOpenChange:function(ee){F(ee),oe(!1)},open:te,placeholder:_,text:$,value:i})]})})},21079:function(Se,K,e){"use strict";e.d(K,{w:function(){return t}});var U=e(48305),n=e.n(U),R=e(52136),M=function(r){return typeof r=="string"?document.querySelector("#".concat(r)):(r==null?void 0:r.current)||r},d=":not([disabled]):not([readonly])",O=["text","password","search","tel","url","number","email",""].map(function(l){return'input[type="'.concat(l,'"]').concat(d)}).join(", ")+", input:not([type])".concat(d,", textarea").concat(d),b=function(r){var o,h=M(r);if(h){var i=(o=h.querySelector)===null||o===void 0?void 0:o.call(h,O);if(i!=null&&i.focus)return i.focus(),!0}},t=function(r){var o=(0,R.useState)(!1),h=n()(o,2),i=h[0],S=h[1];R.useEffect(function(){if(!(i||!r)){var x=b(r);x&&S(!0)}},[r,i,S])}},36872:function(Se,K,e){"use strict";e.d(K,{MX:function(){return b},wK:function(){return O},wL:function(){return M.w}});var U=e(26068),n=e.n(U),R=e(52136),M=e(21079),d=e(69979),O=function(l){var r,o=l.autoFocus,h=o===void 0?!0:o,i=(0,R.useRef)(null);return(0,M.w)(h?i:void 0),(0,d.jsx)("div",{className:l.className,id:l.id,ref:i,style:(r=l.style)!==null&&r!==void 0?r:{display:l.className?void 0:"contents"},children:l.children})},b=function(l){return function(r){var o=function(S){return(0,d.jsx)(O,n()(n()({},l||{}),{},{children:(0,d.jsx)(r,n()({},S))}))},h=r.displayName||r.name||"Component";return o.displayName="withFormHelper(".concat(h,")"),o}}},86086:function(Se,K,e){"use strict";e.d(K,{n:function(){return C}});var U=e(26068),n=e.n(U),R=e(48305),M=e.n(R),d=e(67825),O=e.n(d),b=e(75716),t=e(86266),l=e(88215),r=e(96385),o=e(49180),h=e(97642),i=e(52136),S=e(53649),x=e.n(S),m=e(75555),f,s,E,u,_=(0,m.kc)(function(N){var P=N.css,L=N.token,$="#222222";return{root:P(f||(f=x()([`
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
      `])),$,L.borderRadiusLG,L.marginXXS,L.paddingXS,$,L.borderRadiusLG,L.borderRadiusLG,L.borderRadius,L.borderRadius,$,L.borderRadiusLG,L.fontFamilyCode),searchBarIcon:P(s||(s=x()([`
        font-size: 16px;
      `]))),loaderText:P(E||(E=x()([`
        position: absolute;
        top: 44px;
        left: 15px;

        font-family: `,`;
        font-size: 12px;
        color: #fff;
      `])),L.fontFamilyCode),loaderIcon:P(u||(u=x()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;

        font-size: 18px;
        color: #999;
      `])),L.marginSM,L.marginSM)}},{hashPriority:"low"}),j=e(69979),D=["className","id","style","height","onScroll","url","websocket","refreshInterval","onLoad","onError"],C=function(P){var L=P.className,$=P.id,H=P.style,J=P.height,V=P.onScroll,z=P.url,Q=P.websocket,g=P.refreshInterval,W=P.onLoad,oe=P.onError,ne=O()(P,D),I=_(),te=I.cx,F=I.styles,k=(0,i.useState)(0),q=M()(k,2),p=q[0],ee=q[1],c=(0,i.useState)(!1),Y=M()(c,2),me=Y[0],B=Y[1],be=(0,i.useState)(!1),re=M()(be,2),xe=re[0],je=re[1],ae=(0,i.useRef)(null),le=(0,i.useRef)(null);(0,i.useEffect)(function(){return function(){ae.current&&clearTimeout(ae.current),le.current&&clearTimeout(le.current)}},[]),(0,i.useEffect)(function(){var _e;return z&&!Q&&g&&(_e=setInterval(function(){ee(function(Re){return Re+1})},g)),function(){clearInterval(_e)}},[g,z,Q]);var G=(0,i.useMemo)(function(){return z&&(ae.current=setTimeout(function(){B(!0),ae.current=null},50),"".concat(z,"#").concat(p))},[z,p]),ce=(0,i.useCallback)(function(){document.querySelector(".react-lazylog .log-line")&&ae.current&&clearTimeout(ae.current),B(!1),je(!0),le.current=setTimeout(function(){return je(!1)},100),W==null||W()},[W]),se=(0,i.useCallback)(function(_e){B(!1),ae.current&&clearTimeout(ae.current),oe==null||oe(_e)},[oe]);return(0,j.jsxs)("div",{className:te(F.root,L),id:$,style:n()({height:J},H),children:[(0,j.jsx)(t.Uu,{render:function(Re){var Ie=Re.follow,Xe=Re.onScroll;return(0,j.jsx)(t.A9,n()(n()({url:G,websocket:Q},ne),{},{follow:xe||Ie,height:J,iconFilterLines:(0,j.jsx)(b.Z,{className:F.searchBarIcon,icon:l.Z}),iconFindNext:(0,j.jsx)(b.Z,{className:F.searchBarIcon,icon:r.Z}),iconFindPrevious:(0,j.jsx)(b.Z,{className:F.searchBarIcon,icon:o.Z}),onError:se,onLoad:ce,onScroll:function(ue){Xe(ue),V==null||V(ue)}}))},startFollowing:!0}),me&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:F.loaderText,children:"loading ..."}),(0,j.jsx)(b.Z,{className:F.loaderIcon,icon:h.Z,spin:!0})]})]})}},26621:function(Se,K,e){"use strict";e.d(K,{T:function(){return E}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(75555),O=e(52136),b=e(75033),t=e(36075),l=e.n(t),r=e(69979),o=(0,O.memo)(function(u){var _=Object.assign({},(l()(u),u));return(0,r.jsx)("svg",n()(n()({fill:"none",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},_),{},{children:(0,r.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})}))}),h=(0,O.memo)(function(u){var _=Object.assign({},(l()(u),u));return(0,r.jsxs)("svg",n()(n()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 0 1024 1024"},_),{},{children:[(0,r.jsx)("path",{d:"M787.2 340C765.6 210.4 650.4 112 512 112S258.4 210.4 236.8 340C102.4 360 0 472.8 0 608.8c0 142.4 112.8 258.4 256 270.4l12.8-89.6c-97.6-4.8-175.2-84.8-175.2-180.8 0-100 83.2-180.8 184-180.8h47.2v-44.8c1.6-98.4 84.8-179.2 185.6-179.2 102.4 0 185.6 80.8 185.6 179.2v44.8h47.2c102.4 1.6 184 81.6 184 180.8 0 96-78.4 175.2-175.2 180.8l12.8 89.6c144.8-11.2 258.4-129.6 258.4-270.4 0.8-136-101.6-248.8-236-268.8z",fill:"#4461EB"}),(0,r.jsx)("path",{d:"M395.2 880h-93.6l59.2-430.4h80.8L395.2 880z m326.4 0h-93.6l-46.4-430.4h80.8l59.2 430.4z",fill:"#29DD90"}),(0,r.jsx)("path",{d:"M372.8 699.2h279.2v91.2h-279.2V699.2z m0-158.4h279.2v68h-279.2v-68z",fill:"#29DD90"})]}))}),i=(0,O.memo)(function(u){var _=Object.assign({},(l()(u),u));return(0,r.jsxs)("svg",n()(n()({fill:"currentColor",fillRule:"evenodd",viewBox:"0 -36 440 160",xmlns:"http://www.w3.org/2000/svg"},_),{},{children:[(0,r.jsx)("path",{d:"M 3.516 3.516 L 27.197 53.419 L 50.879 3.516 L 54.395 3.516 L 28.955 57.129 L 28.955 84.376 L 25.439 84.376 L 25.439 57.129 L 0 3.516 L 3.516 3.516 Z M 32.471 84.376 L 32.471 57.129 L 57.91 3.516 L 61.426 3.516 L 35.986 57.129 L 35.986 84.376 L 32.471 84.376 Z M 39.502 84.376 L 39.502 57.129 L 64.941 3.516 L 68.457 3.516 L 43.018 57.129 L 43.018 84.376 L 39.502 84.376 Z M 46.533 84.376 L 46.533 57.129 L 71.973 3.516 L 75.488 3.516 L 50.049 57.129 L 50.049 84.376 L 46.533 84.376 Z M 10.547 3.516 L 29.883 43.702 L 28.125 47.559 L 7.031 3.516 L 10.547 3.516 Z M 17.578 3.516 L 33.398 35.987 L 31.592 39.844 L 14.063 3.516 L 17.578 3.516 Z M 24.609 3.516 L 36.914 28.321 L 35.156 32.178 L 21.094 3.516 L 24.609 3.516 Z",id:"0"}),(0,r.jsx)("path",{d:"M 148.975 53.223 L 148.975 14.063 L 152.49 14.063 L 152.49 53.223 Q 152.49 60.254 149.658 66.675 Q 146.826 73.096 142.041 77.735 A 35.861 35.861 0 0 1 131.897 84.593 A 41.237 41.237 0 0 1 130.664 85.132 Q 124.072 87.891 116.846 87.891 Q 109.619 87.891 103.027 85.132 A 37.091 37.091 0 0 1 93.83 79.674 A 34.161 34.161 0 0 1 91.65 77.735 A 34.744 34.744 0 0 1 84.033 66.675 A 32.978 32.978 0 0 1 81.201 53.223 L 81.201 14.063 L 84.717 14.063 L 84.717 53.223 Q 84.717 61.622 89.038 68.799 A 31.7 31.7 0 0 0 100.757 80.176 A 32.039 32.039 0 0 0 116.846 84.376 A 32.039 32.039 0 0 0 132.935 80.176 A 31.7 31.7 0 0 0 144.653 68.799 A 29.656 29.656 0 0 0 148.975 53.223 Z M 141.943 53.223 L 141.943 14.063 L 145.459 14.063 L 145.459 53.223 A 26.245 26.245 0 0 1 141.602 67.066 A 28.121 28.121 0 0 1 131.152 77.149 A 28.678 28.678 0 0 1 116.846 80.86 A 28.678 28.678 0 0 1 102.539 77.149 A 28.121 28.121 0 0 1 92.09 67.066 A 26.245 26.245 0 0 1 88.232 53.223 L 88.232 14.063 L 91.748 14.063 L 91.748 53.223 Q 91.748 59.717 95.117 65.284 A 24.542 24.542 0 0 0 104.272 74.097 Q 110.059 77.344 116.846 77.344 A 25.264 25.264 0 0 0 129.419 74.097 A 24.542 24.542 0 0 0 138.574 65.284 Q 141.943 59.717 141.943 53.223 Z M 134.912 53.223 L 134.912 14.063 L 138.428 14.063 L 138.428 53.223 A 19.291 19.291 0 0 1 132.519 67.371 A 24.329 24.329 0 0 1 132.08 67.798 Q 125.732 73.829 116.846 73.829 Q 107.959 73.829 101.611 67.798 A 20.3 20.3 0 0 1 96.705 60.797 A 19.695 19.695 0 0 1 95.264 53.223 L 95.264 14.063 L 98.779 14.063 L 98.779 53.223 A 15.945 15.945 0 0 0 103.671 64.914 A 20.247 20.247 0 0 0 104.077 65.308 A 17.928 17.928 0 0 0 116.846 70.313 A 17.952 17.952 0 0 0 129.59 65.308 A 16.961 16.961 0 0 0 133.582 59.785 A 16.097 16.097 0 0 0 134.912 53.223 Z M 127.881 53.223 L 127.881 14.063 L 131.396 14.063 L 131.396 53.223 A 12.573 12.573 0 0 1 127.515 62.415 A 16.478 16.478 0 0 1 127.124 62.794 A 14.498 14.498 0 0 1 116.846 66.797 A 14.498 14.498 0 0 1 106.567 62.794 A 13.788 13.788 0 0 1 103.501 58.697 A 12.499 12.499 0 0 1 102.295 53.223 L 102.295 14.063 L 105.811 14.063 L 105.811 53.223 A 9.186 9.186 0 0 0 108.712 60.001 A 12.19 12.19 0 0 0 109.058 60.328 A 11.172 11.172 0 0 0 116.846 63.282 Q 121.387 63.282 124.634 60.328 A 10.219 10.219 0 0 0 126.903 57.419 A 9.098 9.098 0 0 0 127.881 53.223 Z",id:"1"}),(0,r.jsx)("path",{d:"M 202.051 84.376 L 164.844 20.118 L 164.844 84.376 L 161.328 84.376 L 161.328 14.063 L 165.527 14.063 L 206.104 84.376 L 202.051 84.376 Z M 226.709 84.376 L 186.133 14.063 L 190.234 14.063 L 227.344 78.272 L 227.344 14.063 L 230.859 14.063 L 230.859 84.376 L 226.709 84.376 Z M 218.506 84.376 L 177.881 14.063 L 182.031 14.063 L 222.705 84.376 L 218.506 84.376 Z M 210.303 84.376 L 169.58 14.063 L 173.682 14.063 L 214.404 84.376 L 210.303 84.376 Z M 168.359 84.376 L 168.359 29.786 L 171.875 36.231 L 171.875 84.376 L 168.359 84.376 Z M 223.828 14.063 L 223.828 68.165 L 220.313 62.208 L 220.313 14.063 L 223.828 14.063 Z M 216.797 14.063 L 216.797 56.006 L 213.281 49.61 L 213.281 14.063 L 216.797 14.063 Z M 175.391 84.376 L 175.391 42.432 L 178.906 48.829 L 178.906 84.376 L 175.391 84.376 Z",id:"2"}),(0,r.jsx)("path",{d:"M 291.162 17.579 L 238.428 17.579 L 238.428 14.063 L 291.162 14.063 L 291.162 17.579 Z M 291.162 24.61 L 238.428 24.61 L 238.428 21.094 L 291.162 21.094 L 291.162 24.61 Z M 291.162 31.641 L 238.428 31.641 L 238.428 28.126 L 291.162 28.126 L 291.162 31.641 Z M 252.49 84.376 L 252.49 33.546 L 256.006 33.546 L 256.006 84.376 L 252.49 84.376 Z M 273.584 84.376 L 273.584 33.546 L 277.1 33.546 L 277.1 84.376 L 273.584 84.376 Z M 266.553 84.376 L 266.553 33.546 L 270.068 33.546 L 270.068 84.376 L 266.553 84.376 Z M 259.521 84.376 L 259.521 33.546 L 263.037 33.546 L 263.037 84.376 L 259.521 84.376 Z",id:"3"}),(0,r.jsx)("path",{d:"M 319.971 84.376 L 319.971 14.063 L 323.486 14.063 L 323.486 84.376 L 319.971 84.376 Z M 312.939 84.376 L 312.939 14.063 L 316.455 14.063 L 316.455 84.376 L 312.939 84.376 Z M 305.908 84.376 L 305.908 14.063 L 309.424 14.063 L 309.424 84.376 L 305.908 84.376 Z M 298.877 84.376 L 298.877 14.063 L 302.393 14.063 L 302.393 84.376 L 298.877 84.376 Z",id:"4"}),(0,r.jsx)("path",{d:"M 336.426 87.891 L 330.42 87.891 L 330.42 84.376 L 336.426 84.376 A 25.696 25.696 0 0 0 347.021 82.129 Q 352.051 79.883 355.688 76.099 A 28.028 28.028 0 0 0 360.914 68.374 A 32.343 32.343 0 0 0 361.475 67.09 A 28.483 28.483 0 0 0 363.623 56.153 L 363.623 3.516 L 367.139 3.516 L 367.139 56.153 Q 367.139 62.598 364.722 68.458 A 32.514 32.514 0 0 1 359.666 76.931 A 30.265 30.265 0 0 1 358.179 78.589 Q 354.053 82.862 348.364 85.377 A 29.209 29.209 0 0 1 336.426 87.891 Z M 336.426 80.86 L 330.42 80.86 L 330.42 77.344 L 336.426 77.344 A 18.885 18.885 0 0 0 350.291 71.572 A 23.587 23.587 0 0 0 350.708 71.143 A 20.99 20.99 0 0 0 356.592 56.153 L 356.592 3.516 L 360.107 3.516 L 360.107 56.153 A 25.136 25.136 0 0 1 356.958 68.531 A 23.872 23.872 0 0 1 348.34 77.54 A 22.534 22.534 0 0 1 336.426 80.86 Z M 336.426 73.829 L 330.42 73.829 L 330.42 70.313 L 336.426 70.313 A 12.121 12.121 0 0 0 345.365 66.543 A 15.517 15.517 0 0 0 345.728 66.163 A 14.23 14.23 0 0 0 349.561 56.153 L 349.561 3.516 L 353.076 3.516 L 353.076 56.153 Q 353.076 63.477 348.218 68.653 A 16.35 16.35 0 0 1 342.656 72.614 A 15.83 15.83 0 0 1 336.426 73.829 Z M 336.426 66.797 L 330.42 66.797 L 330.42 63.282 L 336.426 63.282 A 5.58 5.58 0 0 0 340.549 61.565 A 6.958 6.958 0 0 0 340.771 61.329 A 6.659 6.659 0 0 0 342.317 58.24 A 9.719 9.719 0 0 0 342.529 56.153 L 342.529 3.516 L 346.045 3.516 L 346.045 56.153 A 12.662 12.662 0 0 1 345.55 59.776 A 10.046 10.046 0 0 1 343.262 63.795 A 9.228 9.228 0 0 1 339.783 66.202 A 9.3 9.3 0 0 1 336.426 66.797 Z",id:"5"}),(0,r.jsx)("path",{d:"M 402.881 38.672 L 408.447 38.672 A 26.054 26.054 0 0 1 414.981 39.446 A 18.084 18.084 0 0 1 423.95 44.727 A 20.899 20.899 0 0 1 429.474 57.836 A 27.414 27.414 0 0 1 429.541 59.766 Q 429.541 68.897 423.047 74.879 A 21.33 21.33 0 0 1 414.381 79.632 Q 411.203 80.553 407.422 80.783 A 42.586 42.586 0 0 1 404.834 80.86 A 50.314 50.314 0 0 1 394.576 79.844 A 44.131 44.131 0 0 1 390.234 78.712 A 36.401 36.401 0 0 1 384.198 76.218 A 27.614 27.614 0 0 1 378.955 72.657 L 381.689 70.46 Q 385.693 73.731 391.772 75.538 Q 397.852 77.344 404.834 77.344 A 34.57 34.57 0 0 0 410.799 76.863 Q 416.838 75.803 420.581 72.413 A 16.156 16.156 0 0 0 426.009 60.602 A 21.238 21.238 0 0 0 426.025 59.766 A 20.841 20.841 0 0 0 425.182 53.707 A 16.721 16.721 0 0 0 421.46 47.169 A 14.767 14.767 0 0 0 413.997 42.831 Q 411.452 42.188 408.398 42.188 L 402.881 42.188 A 20.673 20.673 0 0 1 398.773 41.807 Q 394.638 40.967 392.188 38.282 A 13.401 13.401 0 0 1 388.905 31.456 A 18.857 18.857 0 0 1 388.623 28.126 Q 388.623 21.876 393.042 17.969 A 13.859 13.859 0 0 1 397.754 15.299 Q 401.328 14.063 406.299 14.063 Q 412.5 14.063 417.822 15.504 Q 422.864 16.868 426.241 19.35 A 18.375 18.375 0 0 1 426.611 19.629 L 423.828 21.778 Q 417.725 17.579 406.299 17.579 A 29.677 29.677 0 0 0 402.466 17.809 Q 398.256 18.359 395.849 20.226 A 8.477 8.477 0 0 0 395.532 20.484 A 9.443 9.443 0 0 0 392.159 27.397 A 12.648 12.648 0 0 0 392.139 28.126 Q 392.139 32.516 394.255 35.303 A 9.247 9.247 0 0 0 394.653 35.792 A 7.564 7.564 0 0 0 397.776 37.883 Q 399.032 38.352 400.596 38.542 A 18.94 18.94 0 0 0 402.881 38.672 Z M 402.881 45.704 L 408.252 45.704 A 20.425 20.425 0 0 1 412.359 46.09 Q 414.799 46.591 416.652 47.743 A 10.609 10.609 0 0 1 418.945 49.659 Q 422.51 53.614 422.51 59.766 Q 422.51 66.016 418.091 69.922 A 13.859 13.859 0 0 1 413.378 72.593 Q 409.805 73.829 404.834 73.829 A 47.248 47.248 0 0 1 397.416 73.266 A 39.979 39.979 0 0 1 393.286 72.388 A 30.479 30.479 0 0 1 388.976 70.893 Q 386.426 69.776 384.473 68.262 L 387.256 66.114 Q 391.616 69.114 398.717 69.97 A 51.181 51.181 0 0 0 404.834 70.313 A 29.677 29.677 0 0 0 408.667 70.083 Q 412.877 69.533 415.284 67.666 A 8.477 8.477 0 0 0 415.601 67.408 A 9.443 9.443 0 0 0 418.973 60.495 A 12.648 12.648 0 0 0 418.994 59.766 A 14.381 14.381 0 0 0 418.637 56.471 A 9.944 9.944 0 0 0 416.455 52.125 A 7.668 7.668 0 0 0 413.267 49.998 Q 412.016 49.536 410.465 49.348 A 18.848 18.848 0 0 0 408.203 49.219 L 402.881 49.219 Q 392.871 49.219 387.231 43.238 A 20.513 20.513 0 0 1 381.716 30.767 A 27.456 27.456 0 0 1 381.592 28.126 Q 381.592 18.995 388.086 13.013 A 21.33 21.33 0 0 1 396.751 8.26 Q 399.929 7.339 403.711 7.109 A 42.586 42.586 0 0 1 406.299 7.032 A 50.145 50.145 0 0 1 416.545 8.047 A 43.765 43.765 0 0 1 420.874 9.18 A 36.331 36.331 0 0 1 426.893 11.674 A 27.7 27.7 0 0 1 432.129 15.235 L 429.395 17.432 A 25.094 25.094 0 0 0 424.282 14.234 A 34.27 34.27 0 0 0 419.336 12.354 Q 413.281 10.547 406.299 10.547 A 34.57 34.57 0 0 0 400.334 11.029 Q 394.295 12.089 390.552 15.479 A 16.156 16.156 0 0 0 385.124 27.29 A 21.238 21.238 0 0 0 385.107 28.126 A 20.96 20.96 0 0 0 385.922 34.105 A 16.581 16.581 0 0 0 389.697 40.748 A 14.821 14.821 0 0 0 396.999 45.007 Q 399.409 45.638 402.282 45.698 A 29.081 29.081 0 0 0 402.881 45.704 Z M 408.789 35.157 L 402.881 35.157 Q 399.121 35.157 397.461 33.228 Q 395.801 31.299 395.801 28.126 Q 395.801 21.094 406.299 21.094 A 53.608 53.608 0 0 1 411.461 21.326 Q 416.874 21.851 420.302 23.568 A 14.162 14.162 0 0 1 421.143 24.024 L 418.311 26.172 A 12.007 12.007 0 0 0 416.13 25.453 Q 413.765 24.886 410.14 24.701 A 75.371 75.371 0 0 0 406.299 24.61 A 29.884 29.884 0 0 0 404.482 24.661 Q 401.824 24.824 400.71 25.506 A 2.656 2.656 0 0 0 400.659 25.538 A 3.337 3.337 0 0 0 399.781 26.336 Q 399.254 27.041 399.221 27.997 A 3.73 3.73 0 0 0 399.219 28.126 A 5.695 5.695 0 0 0 399.303 29.136 Q 399.405 29.703 399.632 30.152 A 2.874 2.874 0 0 0 400 30.713 A 2.175 2.175 0 0 0 400.812 31.297 Q 401.519 31.605 402.621 31.637 A 8.95 8.95 0 0 0 402.881 31.641 L 408.936 31.641 A 33.337 33.337 0 0 1 415.758 32.313 A 27.17 27.17 0 0 1 420.825 33.887 A 25.498 25.498 0 0 1 426.454 37.131 A 21.868 21.868 0 0 1 429.541 40.015 A 27.267 27.267 0 0 1 434.766 48.951 A 31.486 31.486 0 0 1 436.551 58.514 A 36.033 36.033 0 0 1 436.572 59.766 Q 436.572 64.454 435.254 68.653 Q 433.936 72.852 431.274 76.368 A 27.401 27.401 0 0 1 424.878 82.447 A 26.873 26.873 0 0 1 419.943 85.095 A 34.768 34.768 0 0 1 415.991 86.451 A 39.102 39.102 0 0 1 408.504 87.751 A 46.932 46.932 0 0 1 404.834 87.891 A 55.061 55.061 0 0 1 391.371 86.284 A 49.661 49.661 0 0 1 387.183 85.035 A 42.622 42.622 0 0 1 379.431 81.485 A 33.883 33.883 0 0 1 373.486 77.051 L 376.318 74.952 A 31.37 31.37 0 0 0 383.526 79.775 A 40.73 40.73 0 0 0 388.794 81.91 A 50.014 50.014 0 0 0 402.189 84.315 A 57.584 57.584 0 0 0 404.834 84.376 A 40.049 40.049 0 0 0 411.576 83.831 A 31.679 31.679 0 0 0 416.919 82.447 A 27.978 27.978 0 0 0 421.821 80.168 A 21.649 21.649 0 0 0 425.806 77.149 Q 429.297 73.78 431.177 69.337 A 24.142 24.142 0 0 0 433.049 60.404 A 27.624 27.624 0 0 0 433.057 59.766 A 29.088 29.088 0 0 0 432.093 52.163 A 25.186 25.186 0 0 0 430.322 47.486 A 21.472 21.472 0 0 0 422.685 39.01 A 25.843 25.843 0 0 0 421.997 38.575 A 23.074 23.074 0 0 0 413.352 35.491 A 30.164 30.164 0 0 0 408.789 35.157 Z M 402.881 52.735 L 408.252 52.735 Q 412.012 52.735 413.672 54.688 Q 415.332 56.641 415.332 59.766 Q 415.332 66.797 404.834 66.797 A 54.076 54.076 0 0 1 399.649 66.566 Q 394.241 66.043 390.817 64.341 A 14.139 14.139 0 0 1 389.941 63.868 L 392.773 61.719 A 11.989 11.989 0 0 0 394.958 62.439 Q 397.329 63.005 400.972 63.191 A 76.162 76.162 0 0 0 404.834 63.282 A 29.884 29.884 0 0 0 406.651 63.231 Q 409.309 63.068 410.422 62.386 A 2.656 2.656 0 0 0 410.474 62.354 A 3.337 3.337 0 0 0 411.351 61.555 Q 411.879 60.851 411.912 59.895 A 3.73 3.73 0 0 0 411.914 59.766 Q 411.914 58.432 411.362 57.55 A 3.006 3.006 0 0 0 411.108 57.203 Q 410.303 56.251 408.154 56.251 L 402.881 56.251 A 35.621 35.621 0 0 1 395.804 55.575 A 28.966 28.966 0 0 1 390.698 54.053 A 26.063 26.063 0 0 1 385.208 51.068 A 21.777 21.777 0 0 1 381.763 47.999 Q 378.271 44.141 376.416 39.063 A 30.993 30.993 0 0 1 374.606 29.938 A 35.901 35.901 0 0 1 374.561 28.126 Q 374.561 23.438 375.879 19.239 Q 377.197 15.04 379.858 11.524 Q 382.52 8.008 386.255 5.445 A 26.873 26.873 0 0 1 391.19 2.797 A 34.768 34.768 0 0 1 395.142 1.441 A 39.102 39.102 0 0 1 402.629 0.141 A 46.932 46.932 0 0 1 406.299 0.001 A 55.011 55.011 0 0 1 419.482 1.541 A 49.363 49.363 0 0 1 423.926 2.857 A 42.479 42.479 0 0 1 431.764 6.469 A 33.934 33.934 0 0 1 437.598 10.84 L 434.766 12.94 A 31.445 31.445 0 0 0 427.567 8.116 A 40.644 40.644 0 0 0 422.314 5.982 A 49.708 49.708 0 0 0 409.074 3.583 A 57.465 57.465 0 0 0 406.299 3.516 A 40.049 40.049 0 0 0 399.556 4.061 A 31.679 31.679 0 0 0 394.214 5.445 A 27.978 27.978 0 0 0 389.312 7.723 A 21.649 21.649 0 0 0 385.327 10.743 Q 381.836 14.112 379.956 18.555 A 24.142 24.142 0 0 0 378.084 27.487 A 27.624 27.624 0 0 0 378.076 28.126 A 29.294 29.294 0 0 0 379.006 35.629 A 25.033 25.033 0 0 0 380.859 40.528 Q 383.643 46.046 389.355 49.39 A 24.102 24.102 0 0 0 397.757 52.34 A 31.989 31.989 0 0 0 402.881 52.735 Z"})]}))}),S=e(53649),x=e.n(S),m,f=(0,d.kc)(function(u){var _=u.css;return{extraTitle:_(m||(m=x()([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),s=["type","size","style","extra","className"],E=(0,O.memo)(function(u){var _=u.type,j=_===void 0?"img":_,D=u.size,C=D===void 0?32:D,N=u.style,P=u.extra,L=u.className,$=M()(u,s),H=(0,d.Fg)(),J=f(),V=J.styles,z;switch(j){case"text":{z=(0,r.jsx)(i,n()({className:L,height:C,style:N,width:C*2.9375},$));break}case"combine":{z=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,n()({height:C,style:N,width:C},$)),(0,r.jsx)(i,{style:{height:C,marginLeft:Math.round(C/4),width:"auto"}})]});break}case"img":default:{z=(0,r.jsx)(h,n()({height:C,style:N,width:C},$));break}}if(!P)return z;var Q=Math.round(C/3*1.9);return(0,r.jsxs)(b.D,n()(n()({align:"center",className:L,horizontal:!0,style:N},$),{},{children:[z,(0,r.jsx)(o,{style:{color:H.colorFill,height:Q,width:Q}}),(0,r.jsx)("div",{className:V.extraTitle,style:{fontSize:Q},children:P})]}))})},11443:function(Se,K,e){"use strict";e.d(K,{MN:function(){return U},Nj:function(){return O},bq:function(){return M},pB:function(){return R},rO:function(){return n},tj:function(){return d}});var U=`\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'"~=<>_:;`,n="\\(",R=function(t){return"(?:"+t.join("|")+")"},M=function(t,l){var r=t.length===0?"":"(?!"+t.join("|")+")";return r+"[^\\s"+l+"]"},d=function(t){return"(?:\\.[ |$]|\\s|["+t+"]|)"},O=75},37966:function(Se,K,e){"use strict";e.d(K,{M$:function(){return i},hc:function(){return l}});var U=e(48305),n=e.n(U),R=e(63790),M=e(29197),d=e(26877),O=e(13674),b=e(52136),t=e(11443),l=function(x,m){var f=(0,b.useRef)(null),s=(0,R.g)(),E=n()(s,1),u=E[0],_=(0,M.y)(x),j=n()(_,3),D=j[0],C=j[1],N=j[2],P=(0,b.useCallback)(function($){var H=(0,O.dL7)(),J=H==null?void 0:H.getNodes();if(!D&&(J==null?void 0:J.length)===1&&u.dispatchCommand(m,void 0),D&&(0,O.iOo)(H)){$.preventDefault();var V=(0,O.gID)(x);if((0,O.k$I)(V))return m&&u.dispatchCommand(m,void 0),V.remove(),!0}return!1},[D,x,m,u]),L=(0,b.useCallback)(function($){$.stopPropagation(),N(),C(!0)},[C,N]);return(0,b.useEffect)(function(){var $=f.current;return $&&$.addEventListener("click",L),function(){$&&$.removeEventListener("click",L)}},[L]),(0,b.useEffect)(function(){return(0,d.qV)(u.registerCommand(O.MKI,P,O.KB),u.registerCommand(O.aRb,P,O.KB))},[u,N,P]),[f,D]},r=function(){var x=useRef(null),m=useState(!1),f=_slicedToArray(m,2),s=f[0],E=f[1],u=useCallback(function(_){_.stopPropagation(),E(function(j){return!j})},[]);return useEffect(function(){var _=x.current;return _&&_.addEventListener("click",u),function(){_&&_.removeEventListener("click",u)}},[u]),[x,s,E]};function o(S,x,m,f){return new RegExp((x?"(^|\\s|".concat(x,")("):"(^|\\s)(")+(0,t.pB)(S)+"((?:"+(0,t.bq)(S,m)+(f?(0,t.tj)(m):"")+"){0,"+t.Nj+"}))$")}function h(S,x,m,f,s){var E=o(x,m,f,s).exec(S);if(E!==null){var u=E[1],_=E[2],j=E[3];if(_.length>0)return{leadOffset:E.index+u.length,matchingString:j,replaceableString:_}}return null}var i=function(x,m){var f=m.punctuation,s=m.preTriggerChars,E=m.allowSpaces,u=(0,b.useState)(null),_=n()(u,2),j=_[0],D=_[1],C=(0,b.useCallback)(function(N){var P=h(N,x,s,f,E);if(P){var L=P.replaceableString,$=P.matchingString,H=L.lastIndexOf($),J=H===-1?L:L.slice(0,Math.max(0,H))+L.slice(Math.max(0,H+$.length));if(D(J||null),P.replaceableString)return P}else D(null);return null},[s,E,f,x]);return{trigger:j,checkForMentionMatch:C}}},2431:function(Se,K,e){"use strict";e.r(K),e.d(K,{CLEAR_EDITOR_COMMAND:function(){return m.BM6},CLEAR_HIDE_MENU_TIMEOUT:function(){return V.P0},DELETE_MENTION_COMMAND:function(){return V.qU},INSERT_MENTION_COMMAND:function(){return V.CF},Mentions:function(){return ne},UPDATE_MENTIONS_OPTIONS:function(){return V.wv},decoratorTransform:function(){return V.Ab},textToEditorState:function(){return V.hC}});var U=e(82092),n=e.n(U),R=e(26068),M=e.n(R),d=e(15558),O=e.n(d),b=e(55275),t=e(38920),l=e(23427),r=e(49630),o=e(47355),h=e(79479),i=e(79069),S=e(27120),x=e(44325),m=e(13674),f=e(52136),s=e(43361),E=e(83608),u=e(99663),_=e(81530),j=e(96424),D=e(40168),C=e(37926),N=e(64028),P=e(54581),L=e(79091),$=e(20001),H=e(12080),J=e(66392),V=e(79905),z=e(69979),Q=e(48354),g=e.n(Q),W={};for(var oe in Q)["default","CLEAR_EDITOR_COMMAND","Mentions"].indexOf(oe)<0&&(W[oe]=function(I){return Q[I]}.bind(0,oe));e.d(K,W);var ne=(0,f.forwardRef)(function(I,te){var F=I.className,k=I.classNames,q=I.placeholder,p=I.style,ee=I.value,c=I.defaultValue,Y=I.readOnly,me=Y===void 0?!1:Y,B=I.disabled,be=I.onChange,re=I.onBlur,xe=I.onFocus,je=I.variant,ae=je===void 0?"outlined":je,le=I.options,G=le===void 0?[]:le,ce=I.autoSize,se=I.triggers,_e=se===void 0?["@"]:se,Re=I.allowSpaces,Ie=I.punctuation,Xe=I.preTriggerChars,Ze=I.onSelect,ue=I.code,a=ue===void 0?!1:ue,w=I.getPopContainer,he=I.onPressEnter,Me=I.onKeyDown,Oe=I.onTrigger,Pe=I.autoFocus,Ce=I.children,en=I.extraNodes,ke=en===void 0?[]:en,Ve=x.ZP.useConfig(),ve=Ve.componentDisabled,Je=(0,J.y)({autoSize:ce,code:a}),Fe=Je.styles,Ye=Je.cx,$e=(0,f.useMemo)(function(){return B!=null?B:ve},[ve,B]),un=(0,f.useMemo)(function(){return!me&&!$e},[$e,me]),an=(0,f.useMemo)(function(){return{namespace:"mentions",nodes:[E.W,{replace:m.R2r,with:function(qe){return new E.W(qe.__text)},withKlass:E.W},j.AV].concat(O()(ke)),editorState:(0,V.hC)(ee||c||"",_e,{punctuation:Ie}),onError:function(qe){throw qe}}},[]),sn=function(qe){var ln=qe.read(function(){return(0,m.GvG)().getTextContent()});be==null||be(ln.replaceAll(`

`,`
`))},We=(0,f.useMemo)(function(){var tn=function qe(ln,Ee){return ln.reduce(function(T,fe){if(T[fe.value]=fe,T[fe.value].icon||(T[fe.value].icon=Ee),fe.children&&fe.children.length>0){var X=qe(fe.children,fe.icon);Object.assign(T,X)}return T},{})};return tn(G)},[G]),on=(0,f.useMemo)(function(){if(s.j){if(w)return w();if(document.fullscreenElement)return document.fullscreenElement}},[w]),nn=(0,f.useCallback)(function(tn){var qe,ln,Ee=(qe=(ln=tn.match)===null||ln===void 0?void 0:ln.replaceableString)!==null&&qe!==void 0?qe:_e[0];Oe==null||Oe(Ee)},[Oe,_e]);return(0,z.jsx)(l.R,{initialConfig:M()(M()({},an),{},{editable:un}),children:(0,z.jsx)(H.zh,{value:{optionsMap:We},children:(0,z.jsxs)("div",{className:Ye(Fe.wrapper,k==null?void 0:k.wrapper),children:[(0,z.jsx)(S.B,{ErrorBoundary:o.g,contentEditable:(0,z.jsx)(r.f,{className:Ye(n()(n()(n()(n()({},Fe.root,!0),Fe.filled,ae==="filled"),Fe.borderless,ae==="borderless"),Fe.disabled,$e),F),style:p||{}}),placeholder:(0,z.jsx)("div",{className:Fe.placeholder,children:q||"\u8F93\u5165 ".concat(_e.join(" \u6216 ")," \u63D2\u5165\u5F15\u7528")})}),un&&(0,z.jsx)(N.g,{allowSpaces:Re,onOpen:nn,onSelect:Ze,options:G,overlayClassName:k==null?void 0:k.menuOverlay,parent:on,preTriggerChars:Xe,punctuation:Ie,triggers:_e}),(0,z.jsx)(D.qF,{}),(0,z.jsx)(C.V,{}),(0,z.jsx)(h.e,{}),(0,z.jsx)(i.$,{onChange:sn}),(0,z.jsx)(P.k,{onBlur:re,onFocus:xe}),(0,z.jsx)(u.p,{editable:un}),(0,z.jsx)(_.n,{editorRef:te}),(0,z.jsx)(t.y,{}),he&&(0,z.jsx)($.y,{onPressEnter:he}),Me&&(0,z.jsx)(L.x,{onKeyDown:Me}),Pe&&(0,z.jsx)(b.C,{defaultSelection:Pe}),Ce]})})})})},83608:function(Se,K,e){"use strict";e.d(K,{W:function(){return S}});var U=e(25298),n=e.n(U),R=e(17069),M=e.n(R),d=e(9504),O=e.n(d),b=e(38836),t=e.n(b),l=e(21742),r=e.n(l),o=e(83136),h=e.n(o),i=e(13674),S=function(m){r()(s,m);var f=h()(s);function s(){return n()(this,s),f.apply(this,arguments)}return M()(s,[{key:"createDOM",value:function(u){var _=O()(t()(s.prototype),"createDOM",this).call(this,u);return _.classList.add("align-middle"),_}},{key:"exportJSON",value:function(){return{detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"custom-text",version:1}}},{key:"isSimpleText",value:function(){return(this.__type==="text"||this.__type==="custom-text")&&this.__mode===0}}],[{key:"getType",value:function(){return"custom-text"}},{key:"clone",value:function(u){return new s(u.__text,u.__key)}},{key:"importJSON",value:function(u){var _=(0,i.MXo)(u.text);return _.setFormat(u.format),_.setDetail(u.detail),_.setMode(u.mode),_.setStyle(u.style),_}}]),s}(i.R2r);function x(m){return new S(m)}},99663:function(Se,K,e){"use strict";e.d(K,{p:function(){return d}});var U=e(48305),n=e.n(U),R=e(63790),M=e(52136),d=function(b){var t=b.editable,l=(0,R.g)(),r=n()(l,1),o=r[0];return(0,M.useEffect)(function(){o.setEditable(t)},[t,o]),null}},81530:function(Se,K,e){"use strict";e.d(K,{n:function(){return d}});var U=e(48305),n=e.n(U),R=e(63790),M=e(52136),d=function(b){var t=b.editorRef,l=(0,R.g)(),r=n()(l,1),o=r[0];return(0,M.useImperativeHandle)(t,function(){return o}),null}},40168:function(Se,K,e){"use strict";e.d(K,{qF:function(){return l}});var U=e(48305),n=e.n(U),R=e(63790),M=e(26877),d=e(13674),O=e(52136),b=e(96424),t=e(94236),l=(0,O.memo)(function(r){var o=r.onInsert,h=r.onDelete,i=(0,R.g)(),S=n()(i,1),x=S[0];return(0,O.useEffect)(function(){if(!x.hasNodes([b.AV]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor");return(0,M.qV)(x.registerCommand(t.CF,function(m){x.dispatchCommand(t.P0,null);var f=(0,b.IY)(m);return(0,d.odo)([f]),o&&o(),!0},d.VNZ),x.registerCommand(t.qU,function(){return h&&h(),!0},d.VNZ))},[x,o,h]),null});l.displayName="MentionNodePlugin"},96424:function(Se,K,e){"use strict";e.d(K,{IY:function(){return W},AV:function(){return g}});var U=e(25298),n=e.n(U),R=e(17069),M=e.n(R),d=e(62657),O=e.n(d),b=e(21742),t=e.n(b),l=e(83136),r=e.n(l),o=e(82092),h=e.n(o),i=e(13674),S=e(52136),x=e(48305),m=e.n(x),f=e(63790),s=e(75716),E=e(659),u=e(4617),_=e(55798),j=e(12080),D=e(37966),C=e(53649),N=e.n(C),P=e(75555),L,$,H,J=(0,P.kc)(function(ne,I){var te=ne.css,F=ne.token,k=ne.prefixCls,q=I.isSelected,p=I.isError,ee=function(){return p?q?{background:F.colorErrorBgActive,border:F.colorErrorBorderHover,color:F.colorErrorTextActive}:{background:F.colorErrorBg,border:F.colorErrorBorder,color:F.colorErrorText}:q?{background:F.colorInfoBgHover,border:F.colorInfoBorder,color:F.colorInfoText}:{background:F.colorFillTertiary,border:"transparent",color:F.colorInfoText}},c=ee(),Y=c.background,me=c.border,B=c.color;return{root:te(L||(L=N()([`
        user-select: none;

        margin: 1px 2px;
        padding: 0 4px;

        font-family: `,`;
        color: `,`;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      `])),F.fontFamilyCode,B,Y,me,F.borderRadius),text:te($||($=N()([`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),F.colorTextSecondary),error:te(H||(H=N()([`
        color: `,`;
      `])),F.colorErrorText)}}),V=e(94236),z=e(69979),Q=(0,S.memo)(function(ne){var I=ne.nodeKey,te=ne.variable,F=(0,j.Ne)(),k=(0,f.g)(),q=m()(k,1),p=q[0],ee=(0,D.hc)(I,V.qU),c=m()(ee,2),Y=c[0],me=c[1],B=F==null?void 0:F[te],be=J({isSelected:me,isError:!B||!!B.error}),re=be.styles;(0,S.useEffect)(function(){if(!p.hasNodes([g]))throw new Error("MentionsNodePlugin: MentionNode not registered on editor")},[p]);var xe=(0,z.jsx)(E.Z,{className:re.root,ref:Y,children:(0,z.jsxs)(E.Z,{align:"center",gap:2,children:[(!B||B.error)&&(0,z.jsx)(s.Z,{className:re.error,icon:_.Z}),(B==null?void 0:B.icon)&&(0,z.jsx)(E.Z,{children:B.icon}),(0,z.jsx)(E.Z,{className:re.text,gap:2,title:(B==null?void 0:B.selectedLabel)||(B==null?void 0:B.label)||te,children:(0,z.jsx)("span",{children:(B==null?void 0:B.selectedLabel)||(B==null?void 0:B.label)||te})})]})});return B!=null&&B.error?(0,z.jsx)(u.Z,{title:B==null?void 0:B.error,children:xe}):xe}),g=function(ne){t()(te,ne);var I=r()(te);function te(F,k){var q;return n()(this,te),q=I.call(this,k),h()(O()(q),"__variable",void 0),q.__variable=F,q}return M()(te,[{key:"isInline",value:function(){return!0}},{key:"createDOM",value:function(){var k=document.createElement("div");return k.style.display="inline-flex",k.style.alignItems="center",k.style.verticalAlign="middle",k}},{key:"updateDOM",value:function(){return!1}},{key:"decorate",value:function(){return(0,z.jsx)(Q,{nodeKey:this.getKey(),variable:this.__variable})}},{key:"exportJSON",value:function(){return{type:"mention-node",version:1,variable:this.getVariable()}}},{key:"getVariable",value:function(){var k=this.getLatest();return k.__variable}},{key:"getTextContent",value:function(){return"{{".concat(this.getVariable(),"}}")}}],[{key:"getType",value:function(){return"mention-node"}},{key:"clone",value:function(k){return new te(k.__variable,k.__key)}},{key:"importJSON",value:function(k){var q=W(k.variable);return q}}]),te}(i.Ijf);function W(ne){return new g(ne)}function oe(ne){return ne instanceof g}},37926:function(Se,K,e){"use strict";e.d(K,{V:function(){return o}});var U=e(48305),n=e.n(U),R=e(63790),M=e(26877),d=e(13674),O=e(52136),b=e(79905),t=e(83608),l=e(96424),r=e(94236),o=(0,O.memo)(function(h){var i=h.onInsert,S=(0,R.g)(),x=n()(S,1),m=x[0];(0,O.useEffect)(function(){if(!m.hasNodes([l.AV]))throw new Error("MentionNodePlugin: MentionNode not registered on editor")},[m]);var f=(0,O.useCallback)(function(u){i&&i();var _=u.getTextContent().slice(2,-2);return(0,d.U2B)((0,l.IY)(_))},[i]),s=(0,O.useCallback)(function(u){var _=r.xA.exec(u);if(_===null)return null;var j=_.index,D=j+_[0].length;return{end:D,start:j}},[]),E=(0,O.useCallback)(function(u){return r.xA.lastIndex=0,(0,b.Ab)(u,s,f)},[f,s]);return(0,O.useEffect)(function(){return r.xA.lastIndex=0,(0,M.qV)(m.registerNodeTransform(t.W,E))},[]),null})},94236:function(Se,K,e){"use strict";e.d(K,{CF:function(){return n},P0:function(){return M},qU:function(){return R},xA:function(){return d}});var U=e(13674),n=(0,U.fAf)("INSERT_MENTION_COMMAND"),R=(0,U.fAf)("DELETE_MENTION_COMMAND"),M=(0,U.fAf)("CLEAR_HIDE_MENU_TIMEOUT"),d=/{{[^.}]+\.(.+?)}}/gi},64028:function(Se,K,e){"use strict";e.d(K,{g:function(){return je}});var U=e(15558),n=e.n(U),R=e(48305),M=e.n(R),d=e(63790),O=e(61654),b=e(44325),t=e(18870),l=e(13674),r=e(30874),o=e(52136),h=e(71674),i=e(11443),S=e(37966),x=e(94236),m=e(26068),f=e.n(m),s=e(83606),E=e(17069),u=e.n(E),_=e(25298),j=e.n(_),D=e(62657),C=e.n(D),N=e(21742),P=e.n(N),L=e(83136),$=e.n(L),H=e(82092),J=e.n(H),V=function(ae){P()(G,ae);var le=$()(G);function G(ce){var se,_e=ce.label,Re=ce.value,Ie=ce.title,Xe=ce.data,Ze=ce.icon,ue=ce.extraElement,a=ce.keywords,w=ce.keyboardShortcut,he=ce.disabled,Me=ce.triggers,Oe=ce.onSelect,Pe=ce.children,Ce=ce.isChild;return j()(this,G),se=le.call(this,Re),J()(C()(se),"label",void 0),J()(C()(se),"value",void 0),J()(C()(se),"htmlTitle",void 0),J()(C()(se),"title",void 0),J()(C()(se),"key",void 0),J()(C()(se),"icon",void 0),J()(C()(se),"extraElement",void 0),J()(C()(se),"keywords",void 0),J()(C()(se),"keyboardShortcut",void 0),J()(C()(se),"onSelect",void 0),J()(C()(se),"disabled",void 0),J()(C()(se),"triggers",void 0),J()(C()(se),"data",void 0),J()(C()(se),"children",void 0),J()(C()(se),"isChild",void 0),se.value=Re,se.label=_e,se.htmlTitle=Ie,se.title=_e,se.key=Re,se.keywords=a||[],se.icon=Ze,se.extraElement=ue,se.keyboardShortcut=w,se.onSelect=Oe.bind(C()(se)),se.disabled=he,se.triggers=Me,se.data=Xe,se.isChild=Ce!=null?Ce:!1,se.children=Pe==null?void 0:Pe.map(function(en){return new G(f()(f()({},en),{},{isChild:!0}))}),se}return u()(G)}(O.n),z=function ae(le,G){var ce;return le.children=(ce=le.children)===null||ce===void 0?void 0:ce.filter(function(se){if(!se.children)return G(se);var _e=ae(se,G);return G(se)||(_e.children||[]).length>0}),le},Q=function(le,G,ce){var se=(0,d.g)(),_e=M()(se,1),Re=_e[0],Ie=(0,o.useCallback)(function(Ze){var ue;if(Ze.triggers&&ce&&!Ze.triggers.includes(ce))return!1;var a=new RegExp((0,s.Z)(G),"i");return a.test(Ze.label)||((ue=Ze.keywords)===null||ue===void 0?void 0:ue.some(function(w){return a.test(w)}))||!1},[G,ce]),Xe=(0,o.useMemo)(function(){var Ze=function a(w){var he=f()(f()({},w),{},{title:w.title||w.selectedLabel,children:void 0,onSelect:function(){Re.dispatchCommand(x.CF,w.value)}});return w.children&&(he.children=w.children.map(function(Me){return a(Me)})),he},ue=le.map(function(a){return new V(Ze(a))});return ue.map(function(a){return a.children?z(a,Ie):a}).filter(function(a){return Ie(a)||(a.children||[]).length>0})},[le,Re,Ie]);return{options:Xe}},g=e(56225),W=e(659),oe=e(96207),ne=e(53649),I=e.n(ne),te=e(75555),F,k,q,p,ee,c,Y,me=(0,te.kc)(function(ae,le){var G=ae.css,ce=ae.token,se=ae.prefixCls,_e=le.isSelected,Re=le.disabled,Ie=G(F||(F=I()([`
      background-color: `,`;
    `])),ce.colorFillTertiary);return{anchor:G(k||(k=I()([`
        z-index: 9999;
      `]))),menuEmpty:G(q||(q=I()([`
        padding: `,`px;
      `])),ce.padding),menuOverlay:G(p||(p=I()([`
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
      `])),ce.marginXXS,ce.paddingXXS,ce.colorBgElevated,ce.borderRadius,ce.boxShadow,se),menuItem:G(ee||(ee=I()([`
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
      `])),Re?"not-allowed":"pointer",Re?"none":"all",ce.paddingXS,ce.borderRadius,Re?ce.colorTextDisabled:ce.colorText,ce.fontSize,_e&&Ie,Ie),menuItemIcon:G(c||(c=I()([`
        color: `,`;
      `])),ce.colorInfoText),menuItemLabel:G(Y||(Y=I()([`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])))}}),B=e(69979),be=oe.C.Text,re=(0,o.memo)(function(ae){var le=ae.index,G=ae.isSelected,ce=ae.onClick,se=ae.onMouseEnter,_e=ae.option,Re=ae.queryString,Ie=ae.showIcon,Xe=Ie===void 0?!0:Ie,Ze=me({isSelected:G,disabled:_e.disabled}),ue=Ze.styles,a=_e.label,w=(0,o.useMemo)(function(){var Ce=a,en="",ke="";if(Re){var Ve=new RegExp((0,s.Z)(Re),"i"),ve=Ve.exec(_e.label);ve&&(Ce=a.slice(0,Math.max(0,ve.index)),en=ve[0],ke=a.slice(Math.max(0,ve.index+ve[0].length)))}return{before:Ce,middle:en,after:ke}},[_e.label,Re,a]),he=w.before,Me=w.middle,Oe=w.after,Pe=(0,o.useRef)(null);return(0,o.useEffect)(function(){if(G){var Ce;Pe==null||(Ce=Pe.current)===null||Ce===void 0||Ce.scrollIntoView({behavior:"smooth",block:"nearest"})}},[G]),(0,o.useEffect)(function(){_e.setRefElement(Pe==null?void 0:Pe.current)},[]),(0,B.jsxs)(W.Z,{align:"center",className:ue.menuItem,gap:4,onClick:function(){return ce==null?void 0:ce(le,_e)},onMouseEnter:function(){return se==null?void 0:se(le,_e)},ref:Pe,tabIndex:-1,title:_e.htmlTitle||_e.label,children:[Xe&&(0,B.jsx)(W.Z,{className:ue.menuItemIcon,children:_e.icon}),(0,B.jsxs)("div",{className:ue.menuItemLabel,children:[he,(0,B.jsx)(be,{mark:!0,children:Me}),Oe]}),(0,B.jsx)(W.Z,{children:_e.extraElement})]},_e.key)});re.displayName="MentionMenuItem";var xe=(0,o.memo)(function(ae){var le=ae.selectedIndex,G=ae.options,ce=ae.onClick,se=ae.onMouseEnter,_e=ae.queryString,Re=me({}),Ie=Re.styles;return(0,B.jsxs)(B.Fragment,{children:[G.length===0&&(0,B.jsx)(g.Z,{className:Ie.menuEmpty,image:g.Z.PRESENTED_IMAGE_SIMPLE}),G.map(function(Xe,Ze){return(0,B.jsx)(re,{index:Ze,isSelected:le===Ze,onClick:ce,onMouseEnter:se,option:Xe,queryString:_e},Xe.key)})]})}),je=(0,o.memo)(function(ae){var le=ae.overlayClassName,G=ae.triggers,ce=ae.options,se=ce===void 0?[]:ce,_e=ae.allowSpaces,Re=_e===void 0?!0:_e,Ie=ae.punctuation,Xe=Ie===void 0?i.MN:Ie,Ze=ae.preTriggerChars,ue=Ze===void 0?i.rO:Ze,a=ae.onSelect,w=ae.onOpen,he=ae.parent,Me=me({}),Oe=Me.cx,Pe=Me.styles,Ce=(0,d.g)(),en=M()(Ce,1),ke=en[0],Ve=(0,S.M$)(G,{punctuation:Xe,preTriggerChars:ue,allowSpaces:Re}),ve=Ve.trigger,Je=Ve.checkForMentionMatch,Fe=(0,o.useState)(null),Ye=M()(Fe,2),$e=Ye[0],un=Ye[1],an=Q(se,$e,ve),sn=an.options,We=(0,o.useMemo)(function(){var Ee=function T(fe){return(0,r.Z)(fe,function(X){return[X].concat(n()(X.children?T(X.children):[]))})};return Ee(sn)},[sn]),on=(0,o.useCallback)(function(Ee,T,fe,X){a==null||a(Ee,ve,$e),ke.update(function(){T&&Ee!==null&&Ee!==void 0&&Ee.key&&T.remove(),Ee!=null&&Ee.onSelect&&Ee.onSelect(X),fe()})},[ke,a,$e,ve]),nn=(0,o.useRef)(0),tn=(0,o.useCallback)(function(Ee){var T=Ee.selectedIndex,fe=Ee.setHighlightedIndex;if(T!==null){var X;if((X=We[T])!==null&&X!==void 0&&X.disabled){var ie=T;if(T===We.length-1)ie=We.length===1?null:0,fe(ie);else if(T!==nn.current){var ge;T>((ge=nn.current)!==null&&ge!==void 0?ge:0)?ie++:ie--,fe(ie)}}nn.current=T}},[We]),qe=(0,o.useCallback)(function(Ee){var T=Ee.selectedIndex,fe=Ee.selectOptionAndCleanUp;return tn(Ee),(0,B.jsx)(b.ZP,{theme:{components:{Tree:{indentSize:16,lineHeight:32,titleHeight:32,paddingXS:0,nodeHoverBg:"transparent"}}},children:(0,B.jsx)(t.Z,{blockNode:!0,defaultExpandAll:!0,onExpand:function(ie,ge){var Be=ge.nativeEvent;Be.stopPropagation(),ke.dispatchCommand(x.P0,{})},onSelect:function(ie,ge){fe(ge.node)},titleRender:function(ie){var ge;return(0,B.jsx)(re,{isSelected:((ge=We[T])===null||ge===void 0?void 0:ge.value)===ie.value,option:ie,queryString:$e,showIcon:!ie.isChild})},treeData:sn})})},[tn,sn,ke,We,$e]),ln=(0,o.useCallback)(function(Ee,T,fe){var X=T.selectedIndex,ie=T.selectOptionAndCleanUp,ge=T.setHighlightedIndex;return tn(T),Ee.current?h.createPortal((0,B.jsx)("div",{className:Oe(Pe.menuOverlay,le),role:"menu",children:sn.some(function(Be){return(Be.children||[]).length>0})?qe(T):(0,B.jsx)(xe,{onClick:function(ye,Ae){Ae.disabled||(ge(ye),ie(Ae))},onMouseEnter:function(ye,Ae){Ae.disabled||ge(ye)},options:sn,queryString:$e,selectedIndex:X})}),Ee.current):null},[Oe,tn,sn,le,$e,qe,Pe.menuOverlay]);return(0,B.jsx)(O.HQ,{anchorClassName:Pe.anchor,commandPriority:l.u6$,menuRenderFn:ln,onOpen:w,onQueryChange:un,onSelectOption:on,options:We,parent:he,triggerFn:Je})})},54581:function(Se,K,e){"use strict";e.d(K,{k:function(){return t}});var U=e(48305),n=e.n(U),R=e(63790),M=e(26877),d=e(13674),O=e(52136),b=e(94236),t=function(r){var o=r.onBlur,h=r.onFocus,i=(0,R.g)(),S=n()(i,1),x=S[0],m=(0,O.useRef)(null);return(0,O.useEffect)(function(){return(0,M.qV)(x.registerCommand(b.P0,function(){return m.current&&(clearTimeout(m.current),m.current=null),!0},d.VNZ),x.registerCommand(d.GqL,function(f,s){return m.current=setTimeout(function(){x.dispatchCommand(d.ZqX,new KeyboardEvent("keydown",{key:"Escape"}))},200),o&&o(),!0},d.VNZ),x.registerCommand(d.m$w,function(){return h&&h(),!0},d.VNZ))},[x,o,h]),null}},79091:function(Se,K,e){"use strict";e.d(K,{x:function(){return O}});var U=e(48305),n=e.n(U),R=e(63790),M=e(13674),d=e(52136),O=function(t){var l=t.onKeyDown,r=(0,R.g)(),o=n()(r,1),h=o[0],i=(0,d.useRef)(l);return(0,d.useEffect)(function(){i.current=l},[l]),(0,d.useEffect)(function(){h.registerCommand(M.iGI,function(S){return window.queueMicrotask===void 0?setTimeout(function(){i.current(S)},0):queueMicrotask(function(){i.current(S)}),!1},M.KB)},[h]),null}},20001:function(Se,K,e){"use strict";e.d(K,{y:function(){return b}});var U=e(48305),n=e.n(U),R=e(63790),M=e(26877),d=e(13674),O=e(52136),b=function(l){var r=l.onPressEnter,o=(0,R.g)(),h=n()(o,1),i=h[0],S=(0,O.useRef)(r);return(0,O.useEffect)(function(){S.current=r},[r]),(0,O.useEffect)(function(){i.registerCommand(d.XN4,function(x){var m=(0,d.dL7)();if(!(0,d.OPZ)(m))return!1;if(x!==null){if((M.cj||M.s$||M.jz)&&M.Uw)return!1;if(x.preventDefault(),x.shiftKey)return i.dispatchCommand(d.K0p,void 0)}x==null||x.preventDefault();var f=i.read(function(){return(0,d.GvG)().getTextContent()}),s=f.replaceAll(`

`,`
`);return window.queueMicrotask===void 0?setTimeout(function(){S.current(s,{event:x})},0):queueMicrotask(function(){S.current(s,{event:x})}),!0},d.KB)},[i]),null}},12080:function(Se,K,e){"use strict";e.d(K,{Ne:function(){return d},zh:function(){return M}});var U=e(52136),n=e(69979),R=(0,U.createContext)(null),M=(0,U.memo)(function(O){var b=O.children,t=O.value;return(0,n.jsx)(R.Provider,{value:t,children:b})}),d=function(){var b=(0,U.useContext)(R);return b==null?void 0:b.optionsMap}},66392:function(Se,K,e){"use strict";e.d(K,{y:function(){return x}});var U=e(53649),n=e.n(U),R=e(75555),M,d,O,b,t,l,r,o,h=32,i=22,S=function(f){return h+Math.max(f-1,0)*i},x=(0,R.kc)(function(m,f){var s=m.css,E=m.token,u=f.autoSize,_=f.code;return{wrapper:s(M||(M=n()([`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `]))),placeholder:s(d||(d=n()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),h,E.fontSize,h,E.colorTextPlaceholder),root:s(O||(O=n()([`
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
      `])),E.colorBorder,E.borderRadius,E.colorText,E.fontSize,_?E.fontFamilyCode:E.fontFamily,(u==null?void 0:u.minRows)&&s(b||(b=n()([`
          min-height: `,`px;
        `])),S(u.minRows)),(u==null?void 0:u.maxRows)&&s(t||(t=n()([`
          max-height: `,`px;
        `])),S(u.maxRows)),E.motionDurationMid,E.colorPrimaryBorder,i),filled:s(l||(l=n()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),E.colorFillTertiary,E.colorFillSecondary,E.colorBgBase),borderless:s(r||(r=n()([`
        background: transparent;
        border: none;
      `]))),disabled:s(o||(o=n()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),E.colorTextDisabled,E.colorBgContainerDisabled)}})},48354:function(){},79905:function(Se,K,e){"use strict";e.d(K,{P0:function(){return m},qU:function(){return x},CF:function(){return S},wv:function(){return f},Ab:function(){return s},hC:function(){return E}});var U=e(15558),n=e.n(U),R=e(48305),M=e.n(R),d=e(13674),O=e(335),b=e.n(O),t=e(11443),l=e(96424);function r(u,_,j){var D=new RegExp("(?<=\\s|^|\\()"+(0,t.pB)(_)+"((?:"+(0,t.bq)(_,j)+"){1,"+t.Nj+"})","g"),C=[],N;for(D.lastIndex=0;(N=D.exec(u))!==null;)C.push({value:N[0],index:N.index});return C}function o(u,_,j){var D=r(u,_,j),C=[],N=0,P=b()(D),L;try{var $=function(){var V=L.value,z=V.value,Q=V.index;if(Q>N){var g=u.substring(N,Q);C.push({type:"custom-text",value:g})}var W=_.find(function(I){return new RegExp(I).test(z)}),oe=W&&new RegExp(W).exec(z);if(!oe)throw new Error("No trigger found for mention");var ne=oe[0];C.push({type:"mention-node",value:z.slice(ne.length),trigger:ne}),N=Q+z.length};for(P.s();!(L=P.n()).done;)$()}catch(J){P.e(J)}finally{P.f()}if(N<u.length){var H=u.slice(Math.max(0,N));C.push({type:"custom-text",value:H})}return C}function h(u,_){var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t.MN,D=typeof u=="string"?u:u.getTextContent(),C=o(D,_,j),N=[],P=b()(C),L;try{for(P.s();!(L=P.n()).done;){var $=L.value;if($.type==="custom-text"){var H=(0,d.MXo)($.value);typeof u!="string"&&H.setFormat(u.getFormat()),N.push(H)}else N.push((0,l.IY)($.value))}}catch(J){P.e(J)}finally{P.f()}return N}function i(u){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:DEFAULT_PUNCTUATION,j=$getRoot(),D=j.getChildren(),C=function N(P){var L=_createForOfIteratorHelper(P),$;try{for(L.s();!($=L.n()).done;){var H=$.value;if($isTextNode(H)){var J=h(H,u,_);if(J.length>1){var V=H.getParent(),z=H.getIndexWithinParent();V==null||V.splice(z,1,J)}}else $isElementNode(H)&&N(H.getChildren())}}catch(Q){L.e(Q)}finally{L.f()}};C(D)}var S=(0,d.fAf)("INSERT_MENTION_COMMAND"),x=(0,d.fAf)("DELETE_MENTION_COMMAND"),m=(0,d.fAf)("CLEAR_HIDE_MENU_TIMEOUT"),f=(0,d.fAf)("UPDATE_MENTIONS_OPTIONS"),s=function(_,j,D){if(_.isSimpleText())for(var C=_.getPreviousSibling(),N=_.getTextContent(),P=_,L;;){L=j(N);var $=L===null?"":N.slice(L.end);if(N=$,$===""){var H=P.getNextSibling();if((0,d.Gg4)(H)){$=P.getTextContent()+H.getTextContent();var J=j($);if(J===null){H.markDirty();return}else if(J.start!==0)return}}else{var V=j($);if(V!==null&&V.start===0)return}if(L===null)return;if(!(L.start===0&&(0,d.Gg4)(C)&&C.isTextEntity())){var z=void 0;if(L.start===0){var Q=P.splitText(L.end),g=M()(Q,2);z=g[0],P=g[1]}else{var W=P.splitText(L.start,L.end),oe=M()(W,3);z=oe[1],P=oe[2]}var ne=D(z);if(z.replace(ne),P==null)return}}};function E(u,_,j){return function(){var D=j||{cursor:"end"},C=D.punctuation,N=D.cursor,P=(0,d.GvG)();P.clear();var L=(0,d.BEw)();if(L.append.apply(L,n()(h(u,_,C))),P.append(L),!N||N==="end"){var $=L.getLastDescendant();(0,d.Gg4)($)&&$.select()}N==="all"&&(0,d.ULO)()}}},66752:function(Se,K,e){"use strict";e.d(K,{u:function(){return f}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(71078),O=e(52136),b="yunti-ui",t=e(53649),l=e.n(t),r=e(75555),o,h,i=(0,r.kc)(function(E,u){var _=E.css,j=E.prefixCls,D=u.borderd,C=D===void 0?!0:D,N=u.footer,P=N===null||Array.isArray(N)&&N.length===0,L=_(o||(o=l()([`
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
    `])),j,j,P?0:"40px",j,P?0:"1px");return{custom:_(h||(h=l()([`
        `,`
      `])),C&&L)}},{hashPriority:"low"}),S=e(69979),x=["className","borderd"],m=function(u){var _=u.className,j=u.borderd,D=j===void 0?!0:j,C=M()(u,x),N=i(n()({borderd:D},C)),P=N.styles,L=N.cx;return(0,S.jsx)(d.Z,n()(n()({},C),{},{className:L(P.custom,"".concat(b,"-modal"),_)}))},f=m;f.useModal=d.Z.useModal,f.destroyAll=d.Z.destroyAll,f.config=d.Z.config,f._InternalPanelDoNotUseOrYouWillBeFired=d.Z._InternalPanelDoNotUseOrYouWillBeFired,f.info=d.Z.info,f.success=d.Z.success,f.error=d.Z.error,f.warning=d.Z.warning,f.warn=d.Z.warn,f.confirm=d.Z.confirm;var s=null},4433:function(Se,K,e){"use strict";e.d(K,{O:function(){return S}});var U=e(26068),n=e.n(U),R=e(48305),M=e.n(R),d=e(67825),O=e.n(d),b=e(62181),t=e(7030),l=e(52136),r=e(58177),o=e(97540),h=e(69979),i=["language","theme","placeholder","variant","onBlur","enableOutline","className","version","options","onMount"],S=function(m){var f,s=m.language,E=m.theme,u=m.placeholder,_=m.variant,j=m.onBlur,D=m.enableOutline,C=m.className,N=m.version,P=N===void 0?"0.52.2":N,L=m.options,$=L===void 0?{}:L,H=m.onMount,J=O()(m,i),V=(0,l.useState)(!1),z=M()(V,2),Q=z[0],g=z[1],W=(0,l.useRef)(null),oe=(0,l.useState)(!1),ne=M()(oe,2),I=ne[0],te=ne[1],F=(0,l.useState)(!1),k=M()(F,2),q=k[0],p=k[1],ee=(0,o.y)({minimapEnabled:$==null||(f=$.minimap)===null||f===void 0?void 0:f.enabled,variant:_}),c=ee.cx,Y=ee.styles,me=c(Y.base,C,{"ve-focused":Q,"ve-outline":D}),B=(0,r.nc)();(0,l.useEffect)(function(){b._m.config({paths:{vs:B({path:"min/vs",pkg:"monaco-editor",version:P})}}),p(!0)},[B,P]);var be=function(xe,je){W.current=xe,xe.onDidFocusEditorText(function(){g(!0)}),xe.onDidBlurEditorText(function(ae){var le;g(!1);var G=(le=W.current)===null||le===void 0||(le=le.getModel())===null||le===void 0?void 0:le.getValue();j==null||j(G!=null?G:"",ae)}),je.editor.setTheme("default-theme"),H==null||H(xe,je),te(!0)};return(0,h.jsx)(t.Z,{spinning:!q,children:q?(0,h.jsx)(b.ZP,n()({className:me,language:s||"text",onMount:be,options:n()({domReadOnly:!0,quickSuggestions:!1,minimap:{enabled:!1},lineNumbersMinChars:1,wordWrap:"on",unicodeHighlight:{ambiguousCharacters:!1},placeholder:u},$),theme:I?E:"default-theme"},J)):null})}},97540:function(Se,K,e){"use strict";e.d(K,{y:function(){return S}});var U=e(53649),n=e.n(U),R=e(75555),M,d,O,b,t,l,r,o,h,i,S=(0,R.kc)(function(x,m){var f=x.css,s=x.token,E=x.prefixCls,u=m.minimapEnabled,_=u===void 0?!1:u,j=m.isFullScreen,D=j===void 0?!1:j,C=m.diff,N=C===void 0?!1:C,P=m.variant,L=P===void 0?"outlined":P,$=(0,R.F4)(M||(M=n()([`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `]))),H=function(){switch(L){case"outlined":return s.colorBgBase;case"filled":return s.colorFillTertiary;default:return"transparent"}};return{base:f(d||(d=n()([`
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
      `])),H(),L==="outlined"?s.colorBorder:"transparent",s.borderRadius,L==="outlined"?s.colorPrimaryHover:"transparent",L==="filled"&&f(O||(O=n()([`
            background-color: `,`;
          `])),s.colorFillSecondary),L==="filled"&&f(b||(b=n()([`
            background-color: `,`;
          `])),s.colorBgBase),L!=="borderless"&&f(t||(t=n()([`
            border-color: `,`;
          `])),s.colorPrimaryActive),D&&f(l||(l=n()([`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `]))),s.borderRadius,s.borderRadius,s.borderRadius,s.borderRadius,s.borderRadius,s.borderRadius,s.borderRadius,s.borderRadius,s.borderRadius,s.borderRadius,s.borderRadius-1,s.borderRadius-1,s.colorErrorText,s.colorErrorBg),fullScreenBtn:f(r||(r=n()([`
        &.`,`-btn {
          position: absolute;
          top: 20px;
          color: `,`;
          transition: none;
          `,`
        }
      `])),E,s.colorTextSecondary,D?f(o||(o=n()([`
                z-index: 9999;
                right: `,`px;
              `])),N?64:138):f(h||(h=n()([`
                right: `,`px;
              `])),_||N?64:20)),loading:f(i||(i=n()([`
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
      `])),s.fontSizeSM,s.colorTextTertiary,$)}},{hashPriority:"low"})},95397:function(Se,K,e){"use strict";e.d(K,{ZM:function(){return Ie},Hu:function(){return Q},Xq:function(){return Ze},rE:function(){return Xe}});var U=e(26068),n=e.n(U),R=e(48305),M=e.n(R),d=e(67825),O=e.n(d),b=e(23856),t=e(52136),l=e(31182),r=e(58177),o=e(75716),h=e(56214),i=e(42755),S=e(99204),x=e(15558),m=e.n(x),f=e(75750),s=e(35958),E=e(29672),u=e(43361),_=e(90228),j=e.n(_),D=e(87999),C=e.n(D),N=e(8232),P=e(50279),L=e(25298),$=e.n(L),H=e(17069),J=e.n(H),V=e(82092),z=e.n(V),Q=function(){function ue(){$()(this,ue),z()(this,"methodMap",void 0),z()(this,"meta",void 0),this.methodMap={},this.meta={singleton:!1}}return J()(ue,[{key:"registerMethod",value:function(w,he){this.methodMap[w]=he}},{key:"call",value:function(w){for(var he,Me,Oe=arguments.length,Pe=new Array(Oe>1?Oe-1:0),Ce=1;Ce<Oe;Ce++)Pe[Ce-1]=arguments[Ce];return(he=(Me=this.methodMap)[w])===null||he===void 0?void 0:he.call.apply(he,[Me].concat(Pe))}},{key:"updateMeta",value:function(w){Object.assign(this.meta,w)}},{key:"getMeta",value:function(){return Object.freeze(n()({},this.meta))}}]),ue}(),g="__base_monaco_editor_controller__",W=u.j&&window;W&&!W[g]&&(W[g]=new Q);var oe=W[g],ne=function(){var ue,a;return function(){var w=C()(j()().mark(function he(Me){var Oe;return j()().wrap(function(Ce){for(;;)switch(Ce.prev=Ce.next){case 0:if(!(!ue||!(0,P.Z)(a,Me))){Ce.next=7;break}return Oe=Object.keys(Me||{}).length>0,N.Z.config(Oe?Me:{paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.33.0/min/vs"}}),Ce.next=5,N.Z.init();case 5:ue=Ce.sent,a=Me;case 7:return Ce.abrupt("return",ue);case 8:case"end":return Ce.stop()}},he)}));return function(he){return w.apply(this,arguments)}}()}(),I=function(a){return a?N.Z.config(a):N.Z.config({paths:{vs:"https://g.alicdn.com/code/lib/monaco-editor/0.31.1/min/vs"}}),N.Z.init()};function te(ue){var a=Object.keys(ue||{}).length>0,w=a?ue:void 0;return oe.getMeta().singleton?ne(w):I(w)}function F(ue){controller.updateMeta(ue)}var k=u.j&&(window.locale||window.localStorage.getItem("vdev-locale")||"").replace(/_/,"-")||"zh-CN",q=k==="en-US"?"Initializing Editor":"\u7F16\u8F91\u5668\u521D\u59CB\u5316\u4E2D",p={fontSize:12,tabSize:2,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}},ee={fontSize:12,fontFamily:"Menlo, Monaco, Courier New, monospace",folding:!0,minimap:{enabled:!1},autoIndent:"advanced",contextmenu:!0,useTabStops:!0,formatOnPaste:!0,automaticLayout:!0,lineNumbers:"on",wordWrap:"off",scrollBeyondLastLine:!1,fixedOverflowWidgets:!1,snippetSuggestions:"top",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10}};function c(ue){var a=(0,t.useRef)(null);return(0,t.useEffect)(function(){a.current=ue},[ue]),a.current}function Y(ue,a,w,he){if(he){var Me=ue.editor.getModel(ue.Uri.parse(he));if(Me)return Me}return ue.editor.createModel(a,w,he?ue.Uri.parse(he):void 0)}function me(ue,a,w){var he=l.themeMap.filter(function(Oe){return!!Oe});if(w){var Me=E.Q.includes(a)?a:"txt";(0,s.e$)({langs:[Me],themes:[w].concat(m()(he))}).then(function(Oe){ue==null||ue.languages.register({id:Me}),(0,f.L)(Oe,ue)})}}var B=function(a,w){var he=w.editorDidMount,Me=w.editorWillMount,Oe=w.theme,Pe=w.value,Ce=w.path,en=w.language,ke=w.saveViewState,Ve=w.defaultValue,ve=w.enhancers,Je=w.placeholder,Fe=(0,t.useState)(!1),Ye=M()(Fe,2),$e=Ye[0],un=Ye[1],an=(0,t.useState)(!1),sn=M()(an,2),We=sn[0],on=sn[1],nn=(0,t.useState)(!1),tn=M()(nn,2),qe=tn[0],ln=tn[1],Ee=(0,t.useRef)(Ve),T=(0,t.useRef)(Pe),fe=(0,t.useRef)(en||"text"),X=(0,t.useRef)(Ce),ie=c(Ce),ge=(0,t.useRef)(w.requireConfig),Be=(0,t.useRef)(w.options),ye=(0,t.useRef)(null),Ae=(0,t.useRef)(null),Ke=(0,t.useRef)(null),fn=(0,t.useRef)(a),rn=(0,t.useRef)(null),cn=(0,t.useRef)(null),dn=(0,t.useRef)(!1),En=(0,t.useRef)(new Map),An=(0,t.useRef)({});(0,t.useEffect)(function(){An.current.enhancers=ve},[ve]),(0,t.useEffect)(function(){rn.current=he},[he]),(0,t.useEffect)(function(){cn.current=Me},[Me]),(0,t.useEffect)(function(){T.current=Pe},[Pe]),(0,t.useEffect)(function(){fe.current=en},[en]),(0,t.useEffect)(function(){Ee.current=Ve},[Ve]),(0,t.useEffect)(function(){ln(!0),te(ge.current).then(function(ze){var gn;window.MonacoEnvironment=void 0,typeof window.define=="function"&&window.define.amd&&delete window.define.amd,ye.current=ze;try{var _n;me(ze,fe.current,Oe),(_n=cn.current)===null||_n===void 0||_n.call(cn,ze)}catch(On){}if(Ke.current){Ae.current&&(Ae.current.dispose(),dn.current=!1);var He;if(fn.current==="single"){var xn,bn,Sn=Y(ze,(xn=(bn=T.current)!==null&&bn!==void 0?bn:Ee.current)!==null&&xn!==void 0?xn:"",fe.current,X.current);He=ze.editor.create(Ke.current,n()(n()({automaticLayout:!0},p),{},{placeholder:Je},Be.current)),He.setModel(Sn)}else{var Bn=ze.editor.createModel(T.current,fe.current),Cn=ze.editor.createModel(T.current,fe.current);He=ze.editor.createDiffEditor(Ke.current,n()(n()({automaticLayout:!0},ee),{},{placeholder:Je},Be.current)),He.setModel({original:Bn,modified:Cn})}Ae.current=He,(gn=An.current.enhancers)===null||gn===void 0||gn.forEach(function(On){return On(ze,He)});try{var Mn;(Mn=rn.current)===null||Mn===void 0||Mn.call(rn,ze,He)}catch(On){}dn.current||un(!0)}}).catch(function(ze){console.error("Monaco Editor Load Error!",ze)}).then(function(){dn.current||ln(!1)})},[Je,Oe]),(0,t.useEffect)(function(){if($e)try{var ze;(ze=ye.current)===null||ze===void 0||ze.editor.setTheme(Oe)}catch(gn){}},[$e,Oe]),(0,t.useEffect)(function(){if($e){var ze=a==="diff"?Ae.current.getModifiedEditor():Ae.current;ze==null||ze.onDidFocusEditorText(function(){dn.current||on(!0)}),ze==null||ze.onDidBlurEditorText(function(){dn.current||on(!1)})}},[$e,a]),(0,t.useEffect)(function(){return function(){dn.current=!0}},[]),(0,t.useEffect)(function(){var ze,gn,_n;if($e&&!(a!=="diff"&&Ce)){var He=a==="diff"?Ae.current.getModifiedEditor():Ae.current,xn=(ze=Pe!=null?Pe:Ee.current)!==null&&ze!==void 0?ze:"",bn=(gn=ye.current)===null||gn===void 0?void 0:gn.editor.EditorOption.readOnly;bn&&He!==null&&He!==void 0&&(_n=He.getOption)!==null&&_n!==void 0&&_n.call(He,bn)?He==null||He.setValue(xn):Pe!==(He==null?void 0:He.getValue())&&(He==null||He.executeEdits("",[{range:He==null?void 0:He.getModel().getFullModelRange(),text:xn,forceMoveMarkers:!0}]),He==null||He.pushUndoStop())}},[$e,Ce,a,Pe]),(0,t.useEffect)(function(){var ze,gn;if($e&&a!=="diff"&&Ce!==ie){var _n=Y(ye.current,(ze=T.current)!==null&&ze!==void 0?ze:Ee.current,fe.current,Ce),He=Ae.current;T.current!==null&&T.current!==void 0&&_n.getValue()!==T.current&&_n.setValue(T.current),_n!==((gn=Ae.current)===null||gn===void 0?void 0:gn.getModel())&&(ke&&En.current.set(ie,He.saveViewState()),He.setModel(_n),ke&&He.restoreViewState(En.current.get(Ce)))}},[$e,Pe,Ce,ie,a,ke]);var Rn=Ae;return{isEditorReady:$e,focused:We,loading:qe,containerRef:Ke,monacoRef:ye,editorRef:Rn,valueRef:T}},be=function(a){var w=(0,t.useState)(!1),he=M()(w,2),Me=he[0],Oe=he[1],Pe=function(){if(Me){Oe(!1),a==null||a.updateOptions(n()(n()({},a==null?void 0:a.getOptions()),{},{minimap:{enabled:!1}})),a==null||a.layout();return}Oe(!0),a==null||a.updateOptions(n()(n()({},a==null?void 0:a.getOptions()),{},{minimap:{enabled:!0}})),a==null||a.layout()};return{isFullScreen:Me,fullScreen:Pe}},re=e(97540),xe=e(69979);function je(){}var ae=function(a){var w,he=a.onChange,Me=a.onBlur,Oe=a.enableOutline,Pe=a.width,Ce=a.height,en=a.language,ke=a.supportFullScreen,Ve=a.onFullScreenChange,ve=(0,t.useRef)(he),Je=(0,t.useRef)(Me),Fe=B("single",a),Ye=Fe.isEditorReady,$e=Fe.focused,un=Fe.loading,an=Fe.containerRef,sn=Fe.monacoRef,We=Fe.editorRef,on=Fe.valueRef,nn=(0,t.useRef)(null),tn=(0,t.useRef)(null),qe=be(We==null?void 0:We.current),ln=qe.isFullScreen,Ee=qe.fullScreen,T=(0,re.y)({isFullScreen:ln,minimapEnabled:(w=a.options)===null||w===void 0||(w=w.minimap)===null||w===void 0?void 0:w.enabled,variant:a.variant}),fe=T.cx,X=T.styles,ie=fe(X.base,a.className,{"ve-focused":$e,"ve-outline":Oe}),ge=(0,t.useMemo)(function(){return{width:Pe,height:Ce}},[Pe,Ce]);(0,t.useEffect)(function(){ve.current=he},[he]),(0,t.useEffect)(function(){Je.current=Me},[Me]),(0,t.useEffect)(function(){if(Ye){var ye,Ae,Ke=We.current;(ye=nn.current)===null||ye===void 0||ye.dispose(),nn.current=Ke==null?void 0:Ke.onDidChangeModelContent(function(fn){var rn,cn=Ke==null||(rn=Ke.getModel())===null||rn===void 0?void 0:rn.getValue();if(on.current!==cn){var dn;(dn=ve.current)===null||dn===void 0||dn.call(ve,cn,fn)}}),(Ae=tn.current)===null||Ae===void 0||Ae.dispose(),tn.current=Ke==null?void 0:Ke.onDidBlurEditorText(function(fn){var rn,cn,dn=Ke==null||(rn=Ke.getModel())===null||rn===void 0?void 0:rn.getValue();(cn=Je.current)===null||cn===void 0||cn.call(Je,dn,fn)})}},[We,Ye,nn,on]),(0,t.useEffect)(function(){return function(){var ye,Ae,Ke,fn,rn=We.current;(ye=nn.current)===null||ye===void 0||ye.dispose(),(Ae=tn.current)===null||Ae===void 0||Ae.dispose(),rn==null||(Ke=rn.getModel())===null||Ke===void 0||Ke.dispose(),(fn=We.current)===null||fn===void 0||fn.dispose()}},[We]),(0,t.useEffect)(function(){var ye;if(Ye){var Ae=(ye=We.current)===null||ye===void 0?void 0:ye.getModel();if(Ae){var Ke;(Ke=sn.current)===null||Ke===void 0||Ke.editor.setModelLanguage(Ae,en)}}},[We,Ye,en,sn]);var Be=(0,t.useCallback)(function(){Ve==null||Ve(!ln),Ee()},[Ee,ln,Ve]);return(0,xe.jsxs)("div",{className:ie,style:a.style,children:[un&&(0,xe.jsx)("span",{className:fe(X.loading,"loading"),children:q}),(0,xe.jsx)("div",{className:"react-monaco-editor-container",ref:an,style:ge,children:ke&&(0,xe.jsx)(h.ZP,{className:X.fullScreenBtn,icon:(0,xe.jsx)(o.Z,{icon:ln?i.Z:S.Z}),onClick:Be,size:"small",type:"text"})})]})},le=function(a){var w=a.enableOutline,he=a.width,Me=a.height,Oe=a.language,Pe=a.onChange,Ce=a.original,en=a.supportFullScreen,ke=a.onFullScreenChange,Ve=(0,t.useRef)(Pe),ve=B("diff",a),Je=ve.isEditorReady,Fe=ve.focused,Ye=ve.loading,$e=ve.containerRef,un=ve.monacoRef,an=ve.editorRef,sn=ve.valueRef,We=be(),on=We.isFullScreen,nn=We.fullScreen,tn=(0,re.y)({isFullScreen:on,diff:!0,variant:a.variant}),qe=tn.cx,ln=tn.styles,Ee=qe(ln.base,a.className,{"ve-focused":Fe,"ve-outline":w}),T=(0,t.useMemo)(function(){return{width:he,height:Me}},[he,Me]);(0,t.useEffect)(function(){Ve.current=Pe},[Pe]),(0,t.useEffect)(function(){var X;if(Je){(X=an.current.getModel())===null||X===void 0||X.original.setValue(Ce!=null?Ce:"");var ie=an.current.getModel()||{},ge=ie.modified;ge==null||ge.onDidChangeContent(function(Be){var ye=ge.getValue();if(sn.current!==ye){var Ae;(Ae=Ve.current)===null||Ae===void 0||Ae.call(Ve,ye,Be)}})}},[an,Je,Ce,sn]),(0,t.useEffect)(function(){return function(){var X,ie,ge;(X=an.current)===null||X===void 0||(X=X.getModel())===null||X===void 0||(X=X.original)===null||X===void 0||X.dispose(),(ie=an.current)===null||ie===void 0||(ie=ie.getModel())===null||ie===void 0||(ie=ie.modified)===null||ie===void 0||ie.dispose(),(ge=an.current)===null||ge===void 0||ge.dispose()}},[an]),(0,t.useEffect)(function(){var X,ie,ge;if(Je){var Be=((X=an.current)===null||X===void 0?void 0:X.getModel())||{},ye=Be.original,Ae=Be.modified;(ie=un.current)===null||ie===void 0||ie.editor.setModelLanguage(ye,Oe),(ge=un.current)===null||ge===void 0||ge.editor.setModelLanguage(Ae,Oe)}},[an,Je,Oe,un]);var fe=(0,t.useCallback)(function(){ke==null||ke(!on),nn()},[nn,on,ke]);return(0,xe.jsxs)("div",{className:Ee,style:a.style,children:[Ye&&(0,xe.jsx)("span",{className:qe(ln.loading,"loading"),children:q}),(0,xe.jsx)("div",{className:"react-monaco-editor-container react-monaco-editor-diff-container",ref:$e,style:T,children:en&&(0,xe.jsx)(h.ZP,{className:ln.fullScreenBtn,icon:(0,xe.jsx)(o.Z,{icon:on?i.Z:S.Z}),onClick:fe,size:"small",type:"text"})})]})},G=Object.assign(le,{displayName:"DiffMonacoEditor",default:{width:"100%",height:150,defaultValue:"",language:"javascript",options:p,editorDidMount:je,editorWillMount:je,onChange:je,requireConfig:{}}}),ce=Object.assign(ae,{displayName:"SingleMonacoEditor",default:{width:"100%",height:150,defaultValue:"",language:"javascript",options:p,editorDidMount:je,editorWillMount:je,onChange:je,requireConfig:{}},MonacoDiffEditor:G}),se=null,_e=["type","editorDidMount","readOnly","lineNumbers","wordWrap","contextmenu","language","theme","minimapEnabled","version","requireConfig","options","className","supportFullScreen"],Re=["inlineView","options"],Ie=function(a){var w=a.type,he=w===void 0?"single":w,Me=a.editorDidMount,Oe=a.readOnly,Pe=Oe===void 0?!1:Oe,Ce=a.lineNumbers,en=Ce===void 0?"on":Ce,ke=a.wordWrap,Ve=ke===void 0?"off":ke,ve=a.contextmenu,Je=ve===void 0?!0:ve,Fe=a.language,Ye=a.theme,$e=a.minimapEnabled,un=$e===void 0?!1:$e,an=a.version,sn=an===void 0?"0.52.2":an,We=a.requireConfig,on=We===void 0?{}:We,nn=a.options,tn=a.className,qe=a.supportFullScreen,ln=O()(a,_e),Ee=(0,t.useRef)(Me);(0,t.useEffect)(function(){Ee.current=Me},[Me]);var T=(0,b.r)(),fe=T.isDarkMode,X=(0,t.useMemo)(function(){return Ye&&l.themeMap.includes(Ye)?Ye:Fe&&["md","markdown"].includes(Fe)?fe?"catppuccin-mocha":"catppuccin-latte":Fe&&["shellsession","console"].includes(Fe)?fe?"material-theme-darker":"material-theme-lighter":fe?"slack-dark":"slack-ochin"},[Fe,fe,Ye]),ie=(0,t.useState)(),ge=M()(ie,2),Be=ge[0],ye=ge[1],Ae=(0,t.useCallback)(function(cn,dn){var En;ye(dn),(En=Ee.current)===null||En===void 0||En.call(Ee,cn,dn)},[]),Ke=(0,t.useMemo)(function(){var cn=Object.assign({},nn,{readOnly:Pe,lineNumbers:en,wordWrap:Ve,contextmenu:Je,minimap:un===void 0?nn==null?void 0:nn.minimap:Object.assign({},nn==null?void 0:nn.minimap,{enabled:un})});return Be==null||Be.updateOptions(cn),cn},[nn,Pe,en,Ve,Je,un,Be]),fn=(0,r.nc)(),rn=(0,t.useMemo)(function(){return Object.assign({},on,{paths:n()({vs:fn({path:"min/vs",pkg:"monaco-editor",version:sn})},on.paths)})},[fn,on,sn]);return he!=="diff"?(0,xe.jsx)(ce,n()({className:tn,editorDidMount:Ae,language:Fe,options:Ke,requireConfig:rn,supportFullScreen:Be&&qe,theme:X},ln)):(0,xe.jsx)(ce.MonacoDiffEditor,n()({className:tn,editorDidMount:Ae,language:Fe,options:Ke,requireConfig:rn,supportFullScreen:Be&&qe,theme:X},ln))},Xe=function(a){return(0,xe.jsx)(Ie,n()(n()({},a),{},{type:"single"}))},Ze=function(a){var w=a.inlineView,he=w===void 0?"off":w,Me=a.options,Oe=O()(a,Re);return(0,xe.jsx)(Ie,n()(n()({options:Object.assign({useInlineViewWhenSpaceIsLimited:he==="on"||he==="auto",renderSideBySide:he==="off"||he==="auto"},Me)},Oe),{},{type:"diff"}))}},78282:function(Se,K,e){"use strict";e.d(K,{L:function(){return zt}});var U=e(26068),n=e.n(U),R=e(15558),M=e.n(R),d=e(67825),O=e.n(d),b=e(23427),t=e(23856),l=e(52136),r=e(37227),o=e(55275),h=e(37004),i=e(38920),S=e(73864),x=e(47355),m=e(81951),f=e(79479),s=e(53299),E=e(96096),u=e(47860),_=e(79069),j=e(27120),D=e(95674),C=e(80140),N=e(24185),P=e(44325),L=e(82092),$=e.n(L),H=e(49630),J=e(53649),V=e.n(J),z=e(75555),Q,g,W,oe,ne,I,te,F,k=32,q=22,p=function(v){return k+Math.max(v-1,0)*q},ee=(0,z.kc)(function(Z,v){var A=Z.css,y=Z.token,de=v.autoSize,Le=v.code;return{wrapper:A(Q||(Q=V()([`
        position: relative;

        overflow-y: auto;
        display: inline-block;

        width: 100%;
        min-width: 0;
        height: 100%;
      `]))),placeholder:A(g||(g=V()([`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 0;
        left: 13px;

        height: `,`px;

        font-size: `,`px;
        line-height: `,`px;
        color: `,`;
      `])),k,y.fontSize,k,y.colorTextPlaceholder),root:A(W||(W=V()([`
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
      `])),y.colorBorder,y.borderRadius,y.colorText,y.fontSize,Le?y.fontFamilyCode:y.fontFamily,(de==null?void 0:de.minRows)&&A(oe||(oe=V()([`
          min-height: `,`px;
        `])),p(de.minRows)),(de==null?void 0:de.maxRows)&&A(ne||(ne=V()([`
          max-height: `,`px;
        `])),p(de.maxRows)),y.motionDurationMid,y.colorPrimaryBorder,q),filled:A(I||(I=V()([`
        background: `,`;
        border-color: transparent;
        &:hover {
          background: `,`;
        }
        &:focus {
          background: `,`;
        }
      `])),y.colorFillTertiary,y.colorFillSecondary,y.colorBgBase),borderless:A(te||(te=V()([`
        background: transparent;
        border: none;
      `]))),disabled:A(F||(F=V()([`
        cursor: not-allowed;
        color: `,`;
        background: `,`;
      `])),y.colorTextDisabled,y.colorBgContainerDisabled)}}),c=e(69979);function Y(Z){var v=Z.className,A=Z.placeholder,y=Z.placeholderClassName,de=Z.variant,Le=de===void 0?"outlined":de,Ue=Z.disabled,De=ee({autoSize:{minRows:1},code:!1}),Te=De.styles,Ne=De.cx;return(0,c.jsx)(H.f,{"aria-placeholder":A,className:Ne($()($()($()($()({},Te.root,!0),Te.filled,Le==="filled"),Te.borderless,Le==="borderless"),Te.disabled,Ue),v),placeholder:(0,c.jsx)("div",{className:Ne(Te.placeholder,y),children:A||"\u8BF7\u8F93\u5165"})})}var me=e(48305),B=e.n(me),be=e(63790),re=e(13674),xe=e(335),je=e.n(xe),ae=e(54533),le=e(68741),G=e(57936),ce=/^(\s*)(\d+)\.\s/,se=/^(\s*)[*+-]\s/,_e=/^(\s*)(?:[*+-]\s)?\s?(\[(\s|x)?])\s/i,Re=(0,re.eK8)("mdListMarker",{parse:function(v){return typeof v=="string"&&/^[*+-]$/.test(v)?v:"-"}}),Ie=2;function Xe(Z){var v=Z.match(/\t/g),A=Z.match(/ /g),y=0;return v&&(y+=v.length),A&&(y+=Math.floor(A.length/Ie)),y}var Ze=function(v){return function(A,y,de,Le){var Ue=A.getPreviousSibling(),De=A.getNextSibling(),Te=(0,G.oU)(v==="check"?de[3]==="x":void 0),Ne=de[0].trim()[0],Qe=(v==="bullet"||v==="check")&&Ne===Re.parse(Ne)?Ne:void 0;if((0,G.I3)(De)&&De.getListType()===v){Qe&&(0,re.IFy)(De,Re,Qe);var we=De.getFirstChild();we===null?De.append(Te):we.insertBefore(Te),A.remove()}else if((0,G.I3)(Ue)&&Ue.getListType()===v)Qe&&(0,re.IFy)(Ue,Re,Qe),Ue.append(Te),A.remove();else{var pe=(0,G.FH)(v,v==="number"?Number(de[2]):void 0);Qe&&(0,re.IFy)(pe,Re,Qe),pe.append(Te),A.replace(pe)}Te.append.apply(Te,M()(y)),Le||Te.select(0,0);var mn=Xe(de[1]);mn&&Te.setIndent(mn)}},ue=function Z(v,A,y){var de=[],Le=v.getChildren(),Ue=0,De=je()(Le),Te;try{for(De.s();!(Te=De.n()).done;){var Ne=Te.value;if((0,G.QG)(Ne)){if(Ne.getChildrenSize()===1){var Qe=Ne.getFirstChild();if((0,G.I3)(Qe)){de.push(Z(Qe,A,y+1));continue}}var we=" ".repeat(y*Ie),pe=v.getListType(),mn=(0,re.$At)(v,Re),hn=mn+" ";pe==="number"?hn="".concat(v.getStart()+Ue,". "):pe==="check"&&(hn="".concat(mn," [").concat(Ne.getChecked()?"x":" ","] ")),de.push(we+hn+A(Ne)),Ue++}}}catch(vn){De.e(vn)}finally{De.f()}return de.join(`
`)},a={dependencies:[G.EG,G.NK],export:function(v,A){return(0,G.I3)(v)?ue(v,A,0):null},regExp:se,replace:Ze("bullet"),type:"element"},w={dependencies:[G.EG,G.NK],export:function(v,A){return(0,G.I3)(v)?ue(v,A,0):null},regExp:ce,replace:Ze("number"),type:"element"},he={dependencies:[G.EG,G.NK],export:function(v,A){return(0,G.I3)(v)?ue(v,A,0):null},regExp:_e,replace:Ze("check"),type:"element"},Me={dependencies:[ae.HY],export:function(v){return(0,ae.fs)(v)?"***":null},regExp:/^(---|\*\*\*|___)\s?$/,replace:function(v,A,y,de){var Le=(0,ae.Dq)();de||v.getNextSibling()!==null?v.replace(Le):v.insertBefore(Le),Le.selectNext()},type:"element"},Oe=/^\|(.+)\|\s?$/,Pe=/^(\| ?:?-*:? ?)+\|\s?$/,Ce={dependencies:[le.Fh,le.g0,le.Cr],export:function(v){if(!(0,le.di)(v))return null;var A=[],y=je()(v.getChildren()),de;try{for(y.s();!(de=y.n()).done;){var Le=de.value,Ue=[];if((0,le.to)(Le)){var De=!1,Te=je()(Le.getChildren()),Ne;try{for(Te.s();!(Ne=Te.n()).done;){var Qe=Ne.value;(0,le.TF)(Qe)&&(Ue.push((0,r.JH)(ve,Qe).replaceAll(`
`,"\\n").trim()),Qe.__headerState===le.xo.ROW&&(De=!0))}}catch(we){Te.e(we)}finally{Te.f()}A.push("| ".concat(Ue.join(" | ")," |")),De&&A.push("| ".concat(Ue.map(function(we){return"---"}).join(" | ")," |"))}}}catch(we){y.e(we)}finally{y.f()}return A.join(`
`)},regExp:Oe,replace:function(v,A,y){if(Pe.test(y[0])){var de=v.getPreviousSibling();if(!de||!(0,le.di)(de))return;var Le=de.getChildren(),Ue=Le.at(-1);if(!Ue||!(0,le.to)(Ue))return;var De=je()(Ue.getChildren()),Te;try{for(De.s();!(Te=De.n()).done;){var Ne=Te.value;(0,le.TF)(Ne)&&Ne.setHeaderStyles(le.xo.ROW,le.xo.ROW)}}catch(Vn){De.e(Vn)}finally{De.f()}v.remove();return}var Qe=Ve(y[0]);if(Qe!==null){for(var we=[Qe],pe=v.getPreviousSibling(),mn=Qe.length;pe&&!(!(0,re.Rlh)(pe)||pe.getChildrenSize()!==1);){var hn=pe.getFirstChild();if(!(0,re.Gg4)(hn))break;var vn=Ve(hn.getTextContent());if(vn===null)break;mn=Math.max(mn,vn.length),we.unshift(vn);var yn=pe.getPreviousSibling();pe.remove(),pe=yn}for(var Pn=(0,le.gz)(),Tn=0,Un=we;Tn<Un.length;Tn++){var Zn=Un[Tn],Fn=(0,le.Xf)();Pn.append(Fn);for(var Wn=0;Wn<mn;Wn++)Fn.append(Wn<Zn.length?Zn[Wn]:ke(""))}var In=v.getPreviousSibling();(0,le.di)(In)&&en(In)===mn?(In.append.apply(In,M()(Pn.getChildren())),v.remove()):v.replace(Pn),Pn.selectEnd()}},type:"element"};function en(Z){var v=Z.getFirstChild();return(0,le.to)(v)?v.getChildrenSize():0}var ke=function(v){v=v.replaceAll("\\n",`
`);var A=(0,le.ku)(le.xo.NO_STATUS);return(0,r.Os)(v,ve,A),A},Ve=function(v){var A=v.match(Oe);return!A||!A[1]?null:A[1].split("|").map(function(y){return ke(y)})},ve=[Ce,Me,a,w,he].concat(M()(r.VH),M()(r.zx),M()(r.Pr),M()(r.lL)),Je=!1;function Fe(){var Z=(0,be.g)(),v=B()(Z,1),A=v[0],y=(0,l.useCallback)(function(){A.dispatchCommand(re.BM6,void 0),A.focus()},[A]),de=(0,l.useCallback)(function(Te){A.setEditable(Te)},[A]),Le=(0,l.useCallback)(function(Te){Te&&A.update(function(){(0,r.Os)(Te,ve,void 0,Je)})},[A]),Ue=(0,l.useCallback)(function(){var Te=A.getEditorState().read(function(){var Ne=(0,r.JH)(ve,void 0,Je);return Ne});return Te},[A]),De=(0,l.useCallback)(function(Te,Ne){A.focus(Te,Ne||{defaultSelection:"rootEnd"})},[A]);return{handleClear:y,handleEditable:de,initiateValue:Le,getValue:Ue,handleFocus:De}}var Ye=e(84817),$e=new RegExp("((https?:\\/\\/(www\\.)?)|(www\\.))[\\w#%+.:=@~-]{1,256}\\.[\\d()A-Za-z]{1,6}\\b([\\w#%&()+./:=?@~-]*)(?<![%()+.:-])"),un=/(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z\-]+\.)+[A-Za-z]{2,}))/,an=[(0,Ye.v)($e,function(Z){return Z.startsWith("http")?Z:"https://".concat(Z)}),(0,Ye.v)(un,function(Z){return"mailto:".concat(Z)})];function sn(){return(0,c.jsx)(Ye.$,{matchers:an})}var We=e(10083);function on(){var Z=(0,be.g)(),v=B()(Z,1),A=v[0];return(0,l.useEffect)(function(){return(0,We.dM)(A)},[A]),null}var nn=function(v){var A=v.editable,y=(0,be.g)(),de=B()(y,1),Le=de[0];return(0,l.useEffect)(function(){Le.setEditable(A)},[A,Le]),null},tn=e(76105),qe=new Set(["http:","https:","mailto:","sms:","tel:"]);function ln(Z){try{var v=new URL(Z);if(!qe.has(v.protocol))return"about:blank"}catch(A){return Z}return Z}var Ee=new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\w$&+,:;=-]+@)?[\d.A-Za-z-]+|(?:www.|[\w$&+,:;=-]+@)[\d.A-Za-z-]+)((?:\/[%+./~\w-_]*)?\??[\w%&+.;=@-]*#?\w*)?)/);function T(Z){return Z==="https://"||Ee.test(Z)}function fe(Z){var v=Z.hasLinkAttributes,A=v===void 0?!1:v;return(0,c.jsx)(tn.H,{attributes:A?{rel:"noopener noreferrer",target:"_blank"}:void 0,validateUrl:T})}var X=function(v){var A=v.placeholder,y=A===void 0?"":A,de=v.onChange,Le=v.defaultValue,Ue=v.readOnly,De=v.disabled,Te=v.variant,Ne=Fe(),Qe=Ne.initiateValue,we=Ne.handleFocus;(0,l.useEffect)(function(){Le&&(Qe(Le),we())},[Le,we,Qe]);var pe=(0,l.useCallback)(function(Pn){Pn.read(function(){var Tn=(0,r.JH)(ve,void 0,!1);de==null||de(Tn)})},[de]),mn=P.ZP.useConfig(),hn=mn.componentDisabled,vn=(0,l.useMemo)(function(){return De!=null?De:hn},[hn,De]),yn=(0,l.useMemo)(function(){return!Ue&&!vn},[vn,Ue]);return(0,c.jsxs)(l.Fragment,{children:[(0,c.jsx)(j.B,{ErrorBoundary:x.g,contentEditable:(0,c.jsx)(Y,{disabled:vn,placeholder:y,variant:Te})}),(0,c.jsx)(u.r,{transformers:ve}),(0,c.jsx)(o.C,{defaultSelection:"rootEnd"}),(0,c.jsx)(i.y,{}),(0,c.jsx)(m.y,{}),(0,c.jsx)(E.B,{hasStrictIndent:!1}),(0,c.jsx)(h.E,{}),(0,c.jsx)(N.l,{}),(0,c.jsx)(S.T,{}),(0,c.jsx)(fe,{hasLinkAttributes:!1}),(0,c.jsx)(s.f,{}),(0,c.jsx)(f.e,{}),(0,c.jsx)(sn,{}),(0,c.jsx)(on,{}),(0,c.jsx)(C.u,{maxIndent:7}),(0,c.jsx)(nn,{editable:yn}),(0,c.jsx)(_.$,{onChange:pe}),(0,c.jsx)(D.C,{})]})},ie=function(v){var A=v.mdxRef,y=Fe(),de=y.getValue,Le=y.initiateValue,Ue=y.handleClear,De=y.handleFocus;return(0,l.useImperativeHandle)(A,function(){return{getMarkdown:de,setMarkdown:function(Ne){Ue(),Le(Ne)},insertMarkdown:Le,focus:De,clearMarkdown:Ue}},[de,Ue,De,Le]),null},ge=e(41932),Be=e(26877),ye=e(15396),Ae=e(659),Ke=e(52436),fn=e(30566),rn=e(32765),cn=e(43246),dn=e(59055),En=e(83537),An=e(50876),Rn=e(74322),ze=e(68619),gn=e(61954),_n=e(85390),He=e(11519),xn=e(31615),bn=e(13323),Sn=e(17357),Bn=e(29073),Cn=e(75716),Mn=e(2991),On=e(74486),Et=e(70754),pt=e(47991),bt=e(61961),Ct=e(71723),Kn=e(96326),Xn=function(Z){return Z[Z.increment=1]="increment",Z[Z.decrement=2]="decrement",Z}({}),pn=function(Z){return Z.PARAGRAPH="paragraph",Z.H1="h1",Z.H2="h2",Z.H3="h3",Z.BULLET="bullet",Z.NUMBER="number",Z.CHECK="check",Z.QUOTE="quote",Z.CODE="code",Z}({}),Jn=function(v,A){if(!A)return v;var y=v;switch(A){case Xn.decrement:{switch(!0){case v>MAX_ALLOWED_FONT_SIZE:{y=MAX_ALLOWED_FONT_SIZE;break}case v>=48:{y-=12;break}case v>=24:{y-=4;break}case v>=14:{y-=2;break}case v>=9:{y-=1;break}default:{y=MIN_ALLOWED_FONT_SIZE;break}}break}case Xn.increment:{switch(!0){case v<MIN_ALLOWED_FONT_SIZE:{y=MIN_ALLOWED_FONT_SIZE;break}case v<12:{y+=1;break}case v<20:{y+=2;break}case v<36:{y+=4;break}case v<=60:{y+=12;break}default:{y=MAX_ALLOWED_FONT_SIZE;break}}break}default:break}return y},Yn=function(v,A,y){var de=function(Ue){Ue||(Ue="".concat(DEFAULT_FONT_SIZE,"px")),Ue=Ue.slice(0,-2);var De=Jn(Number(Ue),y);return"".concat(De,"px")};v.update(function(){if(v.isEditable()){var Le=$getSelection();Le!==null&&$patchStyleText(Le,{"font-size":A||de})}})},_r=function(v,A,y){if(y){var de=Jn(y,A);Yn(v,String(de)+"px",null)}else Yn(v,null,A)},Nn=function(v){v.update(function(){var A=(0,re.dL7)();(0,Kn.Hz)(A,function(){return(0,re.BEw)()})})},$n=function(v,A,y){A!==y&&v.update(function(){var de=(0,re.dL7)();(0,Kn.Hz)(de,function(){return(0,ge.V1)(y)})})},Mt=function(v,A){A==="bullet"?Nn(v):v.dispatchCommand(G.A3,void 0)},xt=function(v,A){A==="check"?Nn(v):v.dispatchCommand(G.d1,void 0)},yt=function(v,A){A==="number"?Nn(v):v.dispatchCommand(G.B3,void 0)},Ot=function(v,A){A!=="quote"&&v.update(function(){var y=(0,re.dL7)();(0,Kn.Hz)(y,function(){return(0,ge.Z1)()})})},wn=function(v,A){A!=="code"&&v.update(function(){var y=(0,re.dL7)();if(y)if(!(0,re.OPZ)(y)||y.isCollapsed())(0,Kn.Hz)(y,function(){return(0,We.Ol)()});else{var de=y.getTextContent(),Le=(0,We.Ol)();y.insertNodes([Le]),y=(0,re.dL7)(),(0,re.OPZ)(y)&&y.insertRawText(de)}})},hr=function(v){v.update(function(){var A=$getSelection();if($isRangeSelection(A)||$isTableSelection(A)){var y=A.anchor,de=A.focus,Le=A.getNodes(),Ue=A.extract();if(y.key===de.key&&y.offset===de.offset)return;var De=_createForOfIteratorHelper(Le.entries()),Te;try{for(De.s();!(Te=De.n()).done;){var Ne=_slicedToArray(Te.value,2),Qe=Ne[0],we=Ne[1];if($isTextNode(we)){var pe=we;Qe===0&&y.offset!==0&&(pe=pe.splitText(y.offset)[1]||pe),Qe===Le.length-1&&(pe=pe.splitText(de.offset)[0]||pe);var mn=Ue[0];Le.length===1&&$isTextNode(mn)&&(pe=mn),pe.__style!==""&&pe.setStyle(""),pe.__format!==0&&pe.setFormat(0);var hn=$getNearestBlockElementAncestorOrThrow(pe);hn.__format!==0&&hn.setFormat(""),hn.__indent!==0&&hn.setIndent(0),we=pe}else $isHeadingNode(we)||$isQuoteNode(we)?we.replace($createParagraphNode(),!0):$isDecoratorBlockNode(we)&&we.setFormat("")}}catch(vn){De.e(vn)}finally{De.f()}}})};function qn(Z){var v=Z.getKey()==="root"?Z:(0,Be.$s)(Z,function(A){var y=A.getParent();return y!==null&&(0,re._vQ)(y)});return v===null&&(v=Z.getTopLevelElementOrThrow()),v}var Pt=function(v){var A,y=v.editor,de=v.blockType,Le=v.disabled,Ue=Le===void 0?!1:Le,De=(0,z.Fg)(),Te=(0,l.useCallback)(function(Qe){var we=Qe.key;switch(we){case pn.PARAGRAPH:{Nn(y);break}case pn.H1:{$n(y,de,"h1");break}case pn.H2:{$n(y,de,"h2");break}case pn.H3:{$n(y,de,"h3");break}default:break}},[de,y]),Ne=(0,l.useMemo)(function(){return[{label:(0,c.jsxs)(Ae.Z,{align:"center",gap:10,children:[(0,c.jsx)(Cn.Z,{color:De.colorTextTertiary,icon:On.Z,size:16}),(0,c.jsx)("span",{children:"Paragraph"})]}),key:pn.PARAGRAPH},{label:(0,c.jsxs)(Ae.Z,{align:"center",gap:10,children:[(0,c.jsx)(Cn.Z,{color:De.colorTextTertiary,icon:Et.Z,size:16}),(0,c.jsx)("span",{children:"Heading 1"})]}),key:pn.H1},{label:(0,c.jsxs)(Ae.Z,{align:"center",gap:10,children:[(0,c.jsx)(Cn.Z,{color:De.colorTextTertiary,icon:pt.Z,size:16}),(0,c.jsx)("span",{children:"Heading 2"})]}),key:pn.H2},{label:(0,c.jsxs)(Ae.Z,{align:"center",gap:10,children:[(0,c.jsx)(Cn.Z,{color:De.colorTextTertiary,icon:bt.Z,size:16}),(0,c.jsx)("span",{children:"Heading 3"})]}),key:pn.H3}]},[De]);return(0,c.jsx)(Mn.Z,{disabled:Ue,menu:{items:Ne,onClick:Te,activeKey:de},trigger:["click"],children:(0,c.jsxs)(Ae.Z,{align:"center",gap:16,children:[((A=Ne.find(function(Qe){return Qe.key===de}))===null||A===void 0?void 0:A.label)||Ne[0].label,(0,c.jsx)(Cn.Z,{color:De.colorTextQuaternary,icon:Ct.Z,size:18})]})})},At=e(31488),Dt=e(78305),Tt=e(74474),et,Lt=(0,z.kc)(function(Z){var v=Z.css,A=Z.token;return{dropdownLang:v(et||(et=V()([`
      overflow-y: auto;
      height: 200px;
      font-size: `,`px !important;

      .ant-dropdown-menu-item {
        font-size: `,`px !important;
      }
    `])),A.fontSizeSM,A.fontSizeSM)}}),kn=[].concat(M()((0,We.xN)()),[["echarts","ECharts"]]);function Rt(Z){var v=Z.size,A=Z.editor,y=Z.blockType,de=Z.value,Le=Z.onChange,Ue=Lt(),De=Ue.styles,Te=(0,l.useState)(!1),Ne=B()(Te,2),Qe=Ne[0],we=Ne[1],pe=(0,l.useCallback)(function(vn){wn(A,y),Le(vn)},[y,A,Le]),mn=(0,l.useMemo)(function(){return kn==null?void 0:kn.map(function(vn){var yn=B()(vn,2),Pn=yn[0],Tn=yn[1];return{key:Pn,label:(0,c.jsxs)(Dt.Z,{children:[Tn,de===Pn?(0,c.jsx)(At.Z,{}):null]})}})},[de]),hn=(0,l.useCallback)(function(vn,yn){y===pn.CODE&&yn.source!=="menu"&&we(vn)},[y]);return(0,c.jsx)(Mn.Z,{menu:{items:mn,selectable:!0,multiple:!1,selectedKeys:[de],activeKey:de,onSelect:function(yn){return pe(yn.key)},className:De.dropdownLang},onOpenChange:hn,open:Qe,placement:"bottom",trigger:["hover"],children:(0,c.jsx)(ye.Z,{active:y===pn.CODE,icon:Tt.Z,onClick:function(){return wn(A,y)},size:v,title:"Code Block"})})}var nt,tt,St=(0,z.kc)(function(Z){var v=Z.css,A=Z.token;return{barWrapper:v(nt||(nt=V()([`
      position: sticky;
      z-index: 99;
      top: 0;
      left: 0;

      width: 100%;
      padding: 4px;

      background-color: `,`;
      border: 1px solid `,`;
      border-radius: `,`px;
    `])),A.colorBgContainer,A.colorBorderSecondary,A.borderRadius),divider:v(tt||(tt=V()([`
      height: 20px;
      margin: 0 4px;
    `])))}}),jt=function(v){var A=v.size,y=A===void 0?{blockSize:26,size:18}:A,de=v.gap,Le=de===void 0?2:de,Ue=v.classname,De=St(),Te=De.styles,Ne=De.cx,Qe=(0,be.g)(),we=B()(Qe,1),pe=we[0],mn=(0,l.useRef)(null),hn=(0,l.useState)(!1),vn=B()(hn,2),yn=vn[0],Pn=vn[1],Tn=(0,l.useState)(!1),Un=B()(Tn,2),Zn=Un[0],Fn=Un[1],Wn=(0,l.useState)(!1),In=B()(Wn,2),Vn=In[0],Ht=In[1],$t=(0,l.useState)(!1),at=B()($t,2),kt=at[0],Vt=at[1],Qt=(0,l.useState)(!1),ot=B()(Qt,2),Gt=ot[0],Xt=ot[1],Jt=(0,l.useState)(!1),it=B()(Jt,2),Yt=it[0],wt=it[1],qt=(0,l.useState)(!1),lt=B()(qt,2),er=lt[0],nr=lt[1],tr=(0,l.useState)(pn.PARAGRAPH),st=B()(tr,2),Dn=st[0],zn=st[1],rr=(0,l.useState)(""),ut=B()(rr,2),ar=ut[0],dt=ut[1],or=(0,l.useState)(null),ct=B()(or,2),Qn=ct[0],ir=ct[1],Gn=(0,l.useCallback)(function(){var Ge=(0,re.dL7)();if((0,re.OPZ)(Ge)){Ht(Ge.hasFormat("bold")),Vt(Ge.hasFormat("italic")),Xt(Ge.hasFormat("underline")),wt(Ge.hasFormat("strikethrough")),nr(Ge.hasFormat("code"));var jn=Ge.anchor.getNode(),Ln=qn(jn),ft=Ln.getKey(),sr=pe.getElementByKey(ft);if(sr!==null){if(ir(ft),(0,G.I3)(Ln)){var vt=(0,Be.yD)(jn,G.EG),ur=vt?vt.getListType():Ln.getListType();zn(ur)}else if(Ln){if((0,We.Pe)(Ln)){var dr=Ln.getLanguage();dt(dr||"")}var cr=(0,ge.rc)(Ln)?Ln.getTag():Ln.getType();zn(cr)}}}if((0,re.iOo)(Ge)){var fr=Ge.getNodes(),Hn=je()(fr),mt;try{for(Hn.s();!(mt=Hn.n()).done;){var gt=mt.value,_t=(0,Be.yD)(gt,G.EG);if(_t){var vr=_t.getListType();zn(vr)}else{var ht=qn(gt);if((0,We.Pe)(ht)){var mr=ht.getLanguage();dt(mr||""),zn(pn.CODE)}}}}catch(gr){Hn.e(gr)}finally{Hn.f()}}},[pe]),lr=(0,l.useCallback)(function(Ge){pe.update(function(){if(Qn!==null){var jn=(0,re.gID)(Qn);(0,We.Pe)(jn)&&jn.setLanguage(Ge)}})},[pe,Qn]);return(0,l.useEffect)(function(){return(0,Be.qV)(pe.registerUpdateListener(function(Ge){var jn=Ge.editorState;jn.read(function(){Gn()},{editor:pe})}),pe.registerCommand(re.ojF,function(Ge,jn){return Gn(),!1},re.KB),pe.registerCommand(re.ynn,function(Ge){return Pn(Ge),!1},re.KB),pe.registerCommand(re.r04,function(Ge){return Fn(Ge),!1},re.KB))},[pe,Gn]),(0,c.jsxs)(Ae.Z,{align:"center",className:Ne(Te.barWrapper,Ue),gap:Le,ref:mn,wrap:!0,children:[(0,c.jsx)(ye.Z,{disabled:!yn,icon:fn.Z,onClick:function(){return pe.dispatchCommand(re.$le,void 0)},size:y}),(0,c.jsx)(ye.Z,{disabled:!Zn,icon:rn.Z,onClick:function(){return pe.dispatchCommand(re.zqW,void 0)},size:y}),(0,c.jsx)(Ke.Z,{className:Te.divider,type:"vertical"}),(0,c.jsx)(Pt,{blockType:Dn,editor:pe}),(0,c.jsx)(Ke.Z,{className:Te.divider,type:"vertical"}),(0,c.jsx)(ye.Z,{active:Vn,icon:cn.Z,onClick:function(){return pe.dispatchCommand(re.Ewg,"bold")},size:y,title:"Bold"}),(0,c.jsx)(ye.Z,{active:kt,icon:dn.Z,onClick:function(){return pe.dispatchCommand(re.Ewg,"italic")},size:y,title:"Ttalic"}),(0,c.jsx)(ye.Z,{active:Gt,icon:En.Z,onClick:function(){return pe.dispatchCommand(re.Ewg,"underline")},size:y,title:"Underline"}),(0,c.jsx)(ye.Z,{active:Yt,icon:An.Z,onClick:function(){return pe.dispatchCommand(re.Ewg,"strikethrough")},size:y,title:"Strikethrough"}),(0,c.jsx)(ye.Z,{active:er,icon:Rn.Z,onClick:function(){return pe.dispatchCommand(re.Ewg,"code")},size:y,title:"Inline code"}),(0,c.jsx)(Ke.Z,{className:Te.divider,type:"vertical"}),(0,c.jsx)(ye.Z,{active:Dn===pn.BULLET,icon:ze.Z,onClick:function(){return Mt(pe,Dn)},size:y,title:"Bullet List"}),(0,c.jsx)(ye.Z,{active:Dn===pn.NUMBER,icon:gn.Z,onClick:function(){return yt(pe,Dn)},size:y,title:"Numbered List"}),(0,c.jsx)(ye.Z,{active:Dn===pn.CHECK,icon:_n.Z,onClick:function(){return xt(pe,Dn)},size:y,title:"Check List"}),(0,c.jsx)(ye.Z,{active:Dn===pn.QUOTE,icon:He.Z,onClick:function(){return Ot(pe,Dn)},size:y,title:"Quote"}),(0,c.jsx)(Rt,{blockType:Dn,editor:pe,onChange:lr,size:y,value:ar}),(0,c.jsx)(Ke.Z,{className:Te.divider,type:"vertical"}),(0,c.jsx)(ye.Z,{icon:xn.Z,onClick:function(){pe.dispatchCommand(re.ROy,"left")},size:y}),(0,c.jsx)(ye.Z,{icon:bn.Z,onClick:function(){pe.dispatchCommand(re.ROy,"center")},size:y}),(0,c.jsx)(ye.Z,{icon:Sn.Z,onClick:function(){pe.dispatchCommand(re.ROy,"right")},size:y}),(0,c.jsx)(ye.Z,{icon:Bn.Z,onClick:function(){pe.dispatchCommand(re.ROy,"justify")},size:y})]})},It=e(56739),rt=e(62983),Bt=e(97575),Wt=e(64501),Ut=[ge.c2,G.EG,G.NK,ge.rT,We.wg,le.Fh,le.Cr,le.g0,It.DT,We.o0,rt.qp,rt.GR,Wt.ZR,ae.HY,Bt.jW],Kt=Ut,Er=e(53021),Nt={autocomplete:"RTEditor__autocomplete",blockCursor:"RTEditor__blockCursor",characterLimit:"RTEditor__characterLimit",code:"RTEditor__code",codeHighlight:{atrule:"RTEditor__tokenAttr",attr:"RTEditor__tokenAttr",boolean:"RTEditor__tokenProperty",builtin:"RTEditor__tokenSelector",cdata:"RTEditor__tokenComment",char:"RTEditor__tokenSelector",class:"RTEditor__tokenFunction","class-name":"RTEditor__tokenFunction",comment:"RTEditor__tokenComment",constant:"RTEditor__tokenProperty",deleted:"RTEditor__tokenProperty",doctype:"RTEditor__tokenComment",entity:"RTEditor__tokenOperator",function:"RTEditor__tokenFunction",important:"RTEditor__tokenVariable",inserted:"RTEditor__tokenSelector",keyword:"RTEditor__tokenAttr",namespace:"RTEditor__tokenVariable",number:"RTEditor__tokenProperty",operator:"RTEditor__tokenOperator",prolog:"RTEditor__tokenComment",property:"RTEditor__tokenProperty",punctuation:"RTEditor__tokenPunctuation",regex:"RTEditor__tokenVariable",selector:"RTEditor__tokenSelector",string:"RTEditor__tokenSelector",symbol:"RTEditor__tokenProperty",tag:"RTEditor__tokenProperty",url:"RTEditor__tokenOperator",variable:"RTEditor__tokenVariable"},embedBlock:{base:"RTEditor__embedBlock",focus:"RTEditor__embedBlockFocus"},hashtag:"RTEditor__hashtag",heading:{h1:"RTEditor__h1",h2:"RTEditor__h2",h3:"RTEditor__h3",h4:"RTEditor__h4",h5:"RTEditor__h5",h6:"RTEditor__h6"},hr:"RTEditor__hr",hrSelected:"RTEditor__hrSelected",image:"editor-image",indent:"RTEditor__indent",inlineImage:"inline-editor-image",layoutContainer:"RTEditor__layoutContainer",layoutItem:"RTEditor__layoutItem",link:"RTEditor__link",list:{checklist:"RTEditor__checklist",listitem:"RTEditor__listItem",listitemChecked:"RTEditor__listItemChecked",listitemUnchecked:"RTEditor__listItemUnchecked",nested:{listitem:"RTEditor__nestedListItem"},olDepth:["RTEditor__ol1","RTEditor__ol2","RTEditor__ol3","RTEditor__ol4","RTEditor__ol5"],ul:"RTEditor__ul"},ltr:"RTEditor__ltr",mark:"RTEditor__mark",markOverlap:"RTEditor__markOverlap",paragraph:"RTEditor__paragraph",quote:"RTEditor__quote",rtl:"RTEditor__rtl",specialText:"RTEditor__specialText",tab:"RTEditor__tabNode",table:"RTEditor__table",tableAddColumns:"RTEditor__tableAddColumns",tableAddRows:"RTEditor__tableAddRows",tableAlignment:{center:"RTEditor__tableAlignmentCenter",right:"RTEditor__tableAlignmentRight"},tableCell:"RTEditor__tableCell",tableCellActionButton:"RTEditor__tableCellActionButton",tableCellActionButtonContainer:"RTEditor__tableCellActionButtonContainer",tableCellHeader:"RTEditor__tableCellHeader",tableCellResizer:"RTEditor__tableCellResizer",tableCellSelected:"RTEditor__tableCellSelected",tableFrozenColumn:"RTEditor__tableFrozenColumn",tableFrozenRow:"RTEditor__tableFrozenRow",tableRowStriping:"RTEditor__tableRowStriping",tableScrollableWrapper:"RTEditor__tableScrollableWrapper",tableSelected:"RTEditor__tableSelected",tableSelection:"RTEditor__tableSelection",text:{bold:"RTEditor__textBold",capitalize:"RTEditor__textCapitalize",code:"RTEditor__textCode",highlight:"RTEditor__textHighlight",italic:"RTEditor__textItalic",lowercase:"RTEditor__textLowercase",strikethrough:"RTEditor__textStrikethrough",subscript:"RTEditor__textSubscript",superscript:"RTEditor__textSuperscript",underline:"RTEditor__textUnderline",underlineStrikethrough:"RTEditor__textUnderlineStrikethrough",uppercase:"RTEditor__textUppercase"}},Zt=Nt,Ft=["showToolbar","classname","toolbarProps"],zt=l.forwardRef(function(Z,v){var A=Z.showToolbar,y=Z.classname,de=Z.toolbarProps,Le=O()(Z,Ft),Ue=ee({autoSize:{minRows:1},code:!1}),De=Ue.styles,Te=Ue.cx,Ne=(0,t.r)(),Qe=Ne.isDarkMode,we={namespace:"RichTextEditor",nodes:M()(Kt),onError:function(mn){throw mn},theme:Zt};return(0,c.jsx)(b.R,{initialConfig:we,children:(0,c.jsxs)("div",{className:Te(De.wrapper,y),"data-theme":Qe?"dark":"light",children:[A?(0,c.jsx)(jt,n()({},de)):null,(0,c.jsx)(X,n()({},Le)),(0,c.jsx)(ie,{mdxRef:v})]})})})},267:function(Se,K,e){"use strict";e.d(K,{W:function(){return J}});var U=e(26068),n=e.n(U),R=e(15558),M=e.n(R),d=e(48305),O=e.n(d),b=e(67825),t=e.n(b),l=e(75716),r=e(50259),o=e(659),h=e(90294),i=e(7862),S=e(29964),x=e(52136),m=e(53649),f=e.n(m),s=e(75555),E,u,_,j,D,C=function(z){switch(z){case"small":return{cardWidth:144,imgHeight:32};case"large":return{cardWidth:200,imgHeight:64};default:return{cardWidth:168,imgHeight:40}}},N=(0,s.kc)(function(V,z){var Q=V.css,g=V.token,W=V.prefixCls,oe=z.disabled,ne=z.size,I=C(ne),te=I.cardWidth;return{option:Q(E||(E=f()([`
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
      `])),g.colorBorder,g.borderRadius,oe?"not-allowed":"pointer",g.padding,g.motionDurationFast,te,oe&&Q(u||(u=f()([`
          background-color: `,`;
          .`,`-typography {
            color: `,`;
            &.`,`-typography-secondary {
              color: `,`;
            }
          }
        `])),g.colorBgContainerDisabled,W,g.colorTextDisabled,W,g.colorTextDisabled),!oe&&Q(_||(_=f()([`
          &:hover {
            border-color: `,`;
          }
        `])),g.colorPrimaryBorderHover),W),optionSelected:Q(j||(j=f()([`
        border-color: `,`;
        &:hover {
          border-color: `,`;
        }
      `])),g.colorPrimary,g.colorPrimaryActive),check:Q(D||(D=f()([`
        position: absolute;
        right: `,`px;
        bottom: `,`px;
        color: `,`;
      `])),g.marginXS,g.marginXS,g.colorPrimary)}}),P=e(69979),L=["defaultValue","value","onChange","multiple","disabled","options","classNames","styles","size","checkIcon","optionRender"],$=r.Z.Text,H=r.Z.Paragraph,J=x.forwardRef(function(V,z){var Q=V.defaultValue,g=V.value,W=V.onChange,oe=V.multiple,ne=oe===void 0?!1:oe,I=V.disabled,te=I===void 0?!1:I,F=V.options,k=F===void 0?[]:F,q=V.classNames,p=V.styles,ee=V.size,c=ee===void 0?"middle":ee,Y=V.checkIcon,me=V.optionRender,B=t()(V,L),be=(0,x.useMemo)(function(){return k.some(function(a){return!!a.img||!!a.icon})},[k]),re=N({disabled:te,size:c}),xe=re.cx,je=re.styles,ae=(0,x.useMemo)(function(){return C(c)},[c]),le=ae.imgHeight,G=(0,x.useCallback)(function(a){return!ne||Array.isArray(a)?a:a===void 0?[]:[a]},[ne]),ce=(0,S.C8)(G(Q),{defaultValue:G(Q),value:g,onChange:W}),se=O()(ce,2),_e=se[0],Re=se[1],Ie=(0,x.useCallback)(function(a){if(!te){if(!ne){Re(a);return}if(_e.includes(a)){Re(_e.filter(function(w){return w!==a}));return}Re([].concat(M()(_e),[a]))}},[_e,te,ne,Re]),Xe=(0,x.useCallback)(function(a){return ne?_e.includes(a):_e===a},[_e,ne]),Ze=(0,x.useMemo)(function(){return Y===null?null:Y?(0,P.jsx)("div",{className:je.check,children:Y}):(0,P.jsx)(l.Z,{className:je.check,icon:i.Z})},[Y,je.check]),ue=(0,x.useCallback)(function(a,w){var he=Xe(a.value),Me=(0,P.jsxs)(o.Z,{align:be?"center":"flex-start",className:xe(je.option,he&&je.optionSelected,q==null?void 0:q.card),gap:"small",onClick:function(){return Ie(a.value)},style:n()(n()({},p==null?void 0:p.card),a.style),vertical:!0,children:[be&&(0,P.jsx)(h.Z,{className:q==null?void 0:q.icon,icon:a.icon,shape:"square",size:le,src:a.img,style:n()(n()({},p==null?void 0:p.icon),a.iconStyle)}),a.label&&he&&(0,P.jsx)($,{ellipsis:!0,strong:!0,children:a.label}),a.label&&!he&&(0,P.jsx)($,{ellipsis:!0,children:a.label}),a.description&&(0,P.jsx)(H,{ellipsis:{rows:2},type:"secondary",children:a.description}),he&&Ze]},a.value);return me?me(Me,a,w):Me},[q==null?void 0:q.card,q==null?void 0:q.icon,xe,le,be,Xe,Ie,Ze,me,je.option,je.optionSelected,p==null?void 0:p.card,p==null?void 0:p.icon]);return(0,P.jsx)(o.Z,n()(n()({gap:"large",ref:z,wrap:!0},B),{},{children:k.map(function(a,w){return ue(a,w)})}))})},45490:function(Se,K,e){"use strict";e.d(K,{a:function(){return o}});var U=e(26068),n=e.n(U),R=e(48305),M=e.n(R),d=e(78454),O=e(63899),b=e(68701),t=e(50054),l=e(52136),r=e(69979),o=function(i){var S=i.value,x=i.defaultValue,m=i.min,f=m===void 0?0:m,s=i.max,E=i.step,u=i.gutter,_=u===void 0?16:u,j=i.sliderCol,D=j===void 0?{span:12}:j,C=i.inputCol,N=C===void 0?{span:5}:C,P=i.addonAfter,L=i.addonBefore,$=i.placeholder,H=i.onChange,J=i.style,V=i.className,z=i.sliderProps,Q=z===void 0?{}:z,g=i.inputProps,W=g===void 0?{}:g,oe=(0,l.useState)(),ne=M()(oe,2),I=ne[0],te=ne[1],F=function(q){Number.isNaN(q)||(te(q),H==null||H(q))};return(0,r.jsxs)(d.Z,{className:V,gutter:_,style:J,children:[(0,r.jsx)(O.Z,n()(n()({},D),{},{children:(0,r.jsx)(b.Z,n()(n()({},Q),{},{defaultValue:x,max:s,min:f,onChange:F,step:E,value:S!=null?S:I}))})),(0,r.jsx)(O.Z,n()(n()({},N),{},{children:(0,r.jsx)(t.Z,n()(n()({},W),{},{addonAfter:P,addonBefore:L,defaultValue:x,max:s,min:f,onChange:F,placeholder:$,step:E,value:S!=null?S:I}))}))]})}},8253:function(Se,K,e){"use strict";e.d(K,{N:function(){return x}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(67943),O=e(52136),b=e(4049),t=e(53649),l=e.n(t),r=e(75555),o,h=(0,r.kc)(function(m){var f=m.css,s=m.token,E=m.prefixCls;return{table:f(o||(o=l()([`
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
    `])),E,s.colorTextTertiary)}}),i=e(69979),S=["rootStyle","rootClassName","icon","title","variant","defaultActive","extra","className"],x=function(f){var s=f.rootStyle,E=f.rootClassName,u=f.icon,_=f.title,j=f.variant,D=f.defaultActive,C=f.extra,N=f.className,P=M()(f,S),L=h(),$=L.cx,H=L.styles;return(0,i.jsx)(b.w,{className:E,style:s,icon:u,title:_,variant:j,defaultActive:D,extra:C,children:(0,i.jsx)(d.Z,n()({className:$(H.table,N),pagination:!1,rowHoverable:!1,size:"small"},P))})}},24976:function(Se,K,e){"use strict";e.d(K,{NU:function(){return t.N},iA:function(){return o}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(4617),O=e(67943),b=e(52136),t=e(8253),l=e(69979),r=["columns"],o=function(S){var x=S.columns,m=M()(S,r),f=(0,b.useMemo)(function(){return x==null?void 0:x.map(function(s){if(s.render)return s;if(s.ellipsis&&s.ellipsis!==!0&&s.ellipsis.showTitle||s.ellipsis===!0){var E=s.ellipsis===!0?{}:s.ellipsis;return n()(n()({},s),{},{ellipsis:{showTitle:!1},render:function(_){return _||_===0?(0,l.jsx)(d.Z,n()(n()({},E),{},{placement:"topLeft",title:_,children:_})):"-"}})}return s.render||(s.render=function(u){return u!=null?u:"-"}),s})},[x]);return(0,l.jsx)(O.Z,n()(n()({},m),{},{columns:f}))};o.displayName="Table",o.SELECTION_COLUMN=O.Z.SELECTION_COLUMN,o.EXPAND_COLUMN=O.Z.EXPAND_COLUMN,o.SELECTION_ALL=O.Z.SELECTION_ALL,o.SELECTION_INVERT=O.Z.SELECTION_INVERT,o.SELECTION_NONE=O.Z.SELECTION_NONE,o.Column=O.Z.Column,o.ColumnGroup=O.Z.ColumnGroup,o.Summary=O.Z.Summary,o.Collapse=t.N;var h=null},15607:function(Se,K,e){"use strict";e.d(K,{G:function(){return x}});var U=e(53649),n=e.n(U),R=e(75555),M=e(52136),d=e(69979),O,b,t,l,r,o,h,i,S=(0,R.kc)(function(m,f){var s=m.css,E=(0,R.F4)(O||(O=n()([`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `]))),u=(0,R.F4)(b||(b=n()([`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `]))),_=(0,R.F4)(t||(t=n()([`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `])));return{box:s(l||(l=n()([`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: `,`px;
      height: `,`px;

      background-color: `,`;
    `])),f.width||34,f.height||22,f.bgColor||"transparent"),line:s(r||(r=n()([`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: `,`;
      border: none;
      border-radius: 30%;
    `])),f.lineColor||"#000"),animate1:s(o||(o=n()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),E),animate2:s(h||(h=n()([`
      animation: `,` 500ms ease-out infinite alternate;
    `])),u),animate3:s(i||(i=n()([`
      animation: `,` 500ms ease-in infinite alternate;
    `])),_)}}),x=function(f){var s=f.height,E=f.width,u=f.lineColor,_=f.bgColor,j=S({height:s,width:E,lineColor:u,bgColor:_}),D=j.styles,C=j.cx;return(0,d.jsxs)("div",{className:D.box,children:[(0,d.jsx)("div",{className:C(D.line,D.animate1)}),(0,d.jsx)("div",{className:C(D.line,D.animate2)}),(0,d.jsx)("div",{className:C(D.line,D.animate3)}),(0,d.jsx)("div",{className:C(D.line,D.animate2)}),(0,d.jsx)("div",{className:C(D.line,D.animate1)}),(0,d.jsx)("div",{className:C(D.line,D.animate2)}),(0,d.jsx)("div",{className:C(D.line,D.animate1)})]})}},77371:function(Se,K,e){"use strict";e.r(K),e.d(K,{Affix:function(){return p.Z},Alert:function(){return s.b},Anchor:function(){return ee.Z},AntdMentions:function(){return c.Z},App:function(){return E.g},AudioPlayer:function(){return ze.Z},AutoComplete:function(){return Y.Z},Avatar:function(){return me.Z},BackTop:function(){return B.Z},Badge:function(){return be.Z},BaseMonacoEditor:function(){return o.ZM},Breadcrumb:function(){return u.a},Button:function(){return re.ZP},ButtonGroup:function(){return U.h},Calendar:function(){return xe.Z},Card:function(){return _.Z},Carousel:function(){return je.Z},Cascader:function(){return ae.Z},ChatInputActionBar:function(){return z.XT},ChatInputArea:function(){return z.ah},ChatInputAreaInner:function(){return z.hG},ChatItem:function(){return Q.z},ChatMarkdown:function(){return g.L},ChatSendButton:function(){return z.Ji},Checkbox:function(){return le.Z},CodeEditor:function(){return W.p},Col:function(){return G.Z},Collapse:function(){return ce.Z},CollapseGroup:function(){return n.w},CollapseTable:function(){return J.NU},ColorPicker:function(){return se.Z},ConfigContext:function(){return R.E_},ConfigProvider:function(){return R.iV},CopyButton:function(){return dn.Z},DatePicker:function(){return _e.default},Descriptions:function(){return j.w},Divider:function(){return D.i},DragPanel:function(){return M.U},Drawer:function(){return C.d},Dropdown:function(){return N.L},EditableMessage:function(){return oe.i},Empty:function(){return Re.Z},FALLBACK_LANG:function(){return I.AY},Flex:function(){return Ie.Z},FloatButton:function(){return Xe.Z},Form:function(){return P.l},FormCollapseList:function(){return P.E},FormHelper:function(){return L.wK},FullFeaturedHighlighter:function(){return ne.EL},Grid:function(){return Ze.ZP},Highlighter:function(){return ne.oP},Image:function(){return ue.Z},Input:function(){return a.Z},InputNumber:function(){return w.Z},JsonViewer:function(){return d.h},Layout:function(){return he.Z},List:function(){return Me.Z},LogViewer:function(){return b.n},Logo:function(){return O.T},MD5_LENGTH_THRESHOLD:function(){return I.GS},Markdown:function(){return En.Z},Menu:function(){return Oe.Z},MobileChatInputArea:function(){return z.$p},MobileChatSendButton:function(){return z.s3},Modal:function(){return $.u},MonacoController:function(){return o.Hu},MonacoDiffEditor:function(){return o.Xq},MonacoEditor:function(){return o.rE},MonacoEditor2:function(){return h.O},NotificationGlobalStyle:function(){return H.EZ},Page:function(){return i.T},Pagination:function(){return Ce.Z},Popconfirm:function(){return en.Z},Popover:function(){return ke.Z},ProCard:function(){return S.Q},Progress:function(){return Ve.Z},QRCode:function(){return ve.Z},Radio:function(){return Je.ZP},Rate:function(){return Fe.Z},Result:function(){return Ye.ZP},RichTextEditor:function(){return te.L},Row:function(){return $e.Z},Segmented:function(){return un.Z},Select:function(){return an.default},SelectCard:function(){return x.W},Skeleton:function(){return sn.Z},Slider:function(){return We.Z},SliderInput:function(){return m.a},Space:function(){return on.Z},SpeechSynthesisTTS:function(){return Rn.H},Spin:function(){return nn.Z},Statistic:function(){return tn.Z},Status:function(){return f.q},Steps:function(){return qe.Z},Switch:function(){return ln.Z},SyntaxHighlighter:function(){return An.Z},Table:function(){return J.iA},Tabs:function(){return Ee.Z},Tag:function(){return T.Z},TimePicker:function(){return ie.Z},Timeline:function(){return X.Z},Tooltip:function(){return ge.Z},Tour:function(){return Be.Z},Transfer:function(){return ye.Z},Tree:function(){return Ae.Z},TreeSelect:function(){return Ke.Z},Typography:function(){return V.Z},Upload:function(){return fn.Z},Watermark:function(){return cn.Z},WaveformIcon:function(){return q.G},colorScales:function(){return F._J},colors:function(){return F.O9},escapeHtml:function(){return I.Xv},generateColorNeutralPalette:function(){return F.NM},generateColorPalette:function(){return F.zl},languageMap:function(){return I.QU},loadShiki:function(){return I.VE},message:function(){return Pe.ZP},neutralColorScales:function(){return F.HN},notification:function(){return H.t6},shikiPromise:function(){return I.T1},stringify:function(){return d.P},theme:function(){return fe.Z},themeMap:function(){return I.xM},useAudioPlayer:function(){return gn.x},useAutoFocus:function(){return L.wL},useCdnFn:function(){return R.nc},useHighlightConfig:function(){return I.lq},useLink:function(){return R.nB},useResponsive:function(){return He.F},useSpeechRecognition:function(){return _n.x},useSpeechSynthes:function(){return k.J},useStaticHighlight:function(){return I.X1},useStreamHighlight:function(){return I.Vf},useTheme:function(){return xn.Fg},useThemeMode:function(){return bn.r},version:function(){return rn.Z},withFormHelper:function(){return L.MX}});var U=e(14431),n=e(4049),R=e(58177),M=e(24803),d=e(65756),O=e(26621),b=e(86086),t=e(2431),l={};for(var r in t)["default","Affix","Anchor","AntdMentions","AutoComplete","Avatar","BackTop","Badge","Button","Calendar","Carousel","Cascader","Checkbox","Col","Collapse","ColorPicker","DatePicker","Empty","Flex","FloatButton","Grid","Image","Input","InputNumber","Layout","List","Menu","message","Pagination","Popconfirm","Popover","Progress","QRCode","Radio","Rate","Result","Row","Segmented","Select","Skeleton","Slider","Space","Spin","Statistic","Steps","Switch","Tabs","Tag","theme","Timeline","TimePicker","Tooltip","Tour","Transfer","Tree","TreeSelect","Upload","version","Watermark","CopyButton","Markdown","SyntaxHighlighter","SpeechSynthesisTTS","AudioPlayer","useAudioPlayer","useSpeechRecognition","useResponsive","useTheme","useThemeMode","ButtonGroup","CollapseGroup","ConfigContext","ConfigProvider","useCdnFn","useLink","DragPanel","JsonViewer","stringify","Logo","LogViewer"].indexOf(r)<0&&(l[r]=function(Sn){return t[Sn]}.bind(0,r));e.d(K,l);var o=e(95397),h=e(4433),i=e(4855),S=e(40629),x=e(267),m=e(45490),f=e(99907),s=e(6079),E=e(34953),u=e(35008),_=e(10546),j=e(64302),D=e(46129),C=e(20939),N=e(38882),P=e(10114),L=e(36872),$=e(66752),H=e(17854),J=e(24976),V=e(96207),z=e(12213),Q=e(49048),g=e(30812),W=e(55646),oe=e(86650),ne=e(35371),I=e(91265),te=e(78282),F=e(39141),k=e(29837),q=e(15607),p=e(27195),ee=e(74074),c=e(96571),Y=e(1346),me=e(90294),B=e(22762),be=e(84164),re=e(56214),xe=e(27348),je=e(94714),ae=e(6281),le=e(12225),G=e(63899),ce=e(20470),se=e(92681),_e=e(72988),Re=e(56225),Ie=e(659),Xe=e(99654),Ze=e(44049),ue=e(73168),a=e(54725),w=e(50054),he=e(856),Me=e(63892),Oe=e(72961),Pe=e(20189),Ce=e(23078),en=e(16672),ke=e(64932),Ve=e(66677),ve=e(60109),Je=e(51654),Fe=e(22522),Ye=e(39402),$e=e(78454),un=e(50943),an=e(75791),sn=e(10180),We=e(68701),on=e(78305),nn=e(7030),tn=e(47731),qe=e(68922),ln=e(83944),Ee=e(34e3),T=e(43478),fe=e(94931),X=e(67319),ie=e(58358),ge=e(4617),Be=e(92144),ye=e(68682),Ae=e(18870),Ke=e(99292),fn=e(9262),rn=e(9424),cn=e(47685),dn=e(20683),En=e(71626),An=e(14093),Rn=e(49477),ze=e(42782),gn=e(35986),_n=e(69247),He=e(7807),xn=e(75555),bn=e(23856)},17854:function(Se,K,e){"use strict";e.d(K,{EZ:function(){return f.E},t6:function(){return V}});var U=e(26068),n=e.n(U),R=e(67825),M=e.n(R),d=e(48305),O=e.n(d),b=e(335),t=e.n(b),l=e(31646),r=e(28121),o=e(1562),h=e(20470),i=e(50259),S=e(47693),x=e(52136),m=e(69979),f=e(18481),s=["detail","message","description","onClose","className"],E=h.Z.Panel,u=i.Z.Link,_=i.Z.Paragraph,j=i.Z.Text,D={},C=function(g,W){D[g]||(D[g]=[]),D[g].push(W)},N=function(g){delete D[g]},P=function Q(g){var W="";if(typeof g=="string")W=g;else if(typeof g=="number")W=g.toString();else if(Array.isArray(g)){var oe=t()(g),ne;try{for(oe.s();!(ne=oe.n()).done;){var I=ne.value;W+=Q(I)}}catch(te){oe.e(te)}finally{oe.f()}}else(0,x.isValidElement)(g)&&(W+=Q(g.props.children));return W},L=function(g){var W,oe=g.noticeKey,ne=g.message,I=((W=D[oe])===null||W===void 0?void 0:W.length)||0;return(0,m.jsxs)(m.Fragment,{children:[ne,I>1&&" (".concat(I,")")]})},$=function(g){var W=g.noticeKey,oe=(0,x.useState)(),ne=O()(oe,2),I=ne[0],te=ne[1],F={},k=t()(D[W]),q;try{for(k.s();!(q=k.n()).done;){var p=q.value,ee=P(p.description);p.descKey=ee,F[ee]=p}}catch(c){k.e(c)}finally{k.f()}return(0,m.jsx)(h.Z,{accordion:!0,activeKey:I,className:"yunti-notification-collapse",expandIcon:function(Y){var me=Y.isActive;return(0,m.jsx)("span",{className:"yunti-notification-collapse-expand-icon",children:me?(0,m.jsx)(u,{className:"yunti-notification-link",children:(0,m.jsx)(l.Z,{title:"\u70B9\u51FB\u5173\u95ED\u9519\u8BEF\u8BE6\u60C5"})}):(0,m.jsx)(r.Z,{title:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5"})})},ghost:!0,onChange:function(Y){te(Y)},children:Object.values(F).map(function(c){var Y=c.descKey,me=c.description,B=c.detail;return(0,m.jsx)(E,{header:(0,m.jsx)(j,{ellipsis:{tooltip:!1},style:{width:250},children:me}),children:(0,m.jsx)(_,{className:"yunti-notification-collapse-content-p",copyable:{text:JSON.stringify(B,null,2)},type:"secondary",children:(0,m.jsx)("pre",{children:JSON.stringify(B,null,2)})})},Y)})})},H=function(g){var W=g.detail,oe=g.message,ne=g.description,I=g.onClose,te=g.className,F=M()(g,s),k=P(oe);C(k,g);var q=function(){I==null||I(),N(k)};return g.type==="warning"&&!g.icon&&(F.icon=(0,m.jsx)(o.Z,{style:{color:"#ff7d00"}})),W?S.ZP.open(n()({key:k,message:(0,m.jsx)(L,{message:oe,noticeKey:k}),description:(0,m.jsx)($,{noticeKey:k}),onClose:q,className:"yunti-notification ".concat(te)},F)):S.ZP.open(n()({key:k,message:(0,m.jsx)(L,{message:oe,noticeKey:k}),description:ne,onClose:q,className:"yunti-notification ".concat(te)},F))},J=function(g){var W;if(((g==null||(W=g.errors)===null||W===void 0?void 0:W.length)||0)>0){g!=null&&g.errors;var oe=t()((g==null?void 0:g.errors)||[]),ne;try{for(oe.s();!(ne=oe.n()).done;){var I=ne.value;H(n()(n()({detail:I,description:I.message},g),{},{type:"warning"}))}}catch(te){oe.e(te)}finally{oe.f()}}else H(n()(n()({},g),{},{type:"warning"}))},V=n()(n()({},S.ZP),{},{success:function(g){return H(n()(n()({},g),{},{type:"success"}))},info:function(g){return H(n()(n()({},g),{},{type:"info"}))},warning:function(g){return H(n()(n()({},g),{},{type:"warning"}))},warn:function(g){return H(n()(n()({},g),{},{type:"warning"}))},error:function(g){return H(n()(n()({},g),{},{type:"error"}))},warnings:J,warns:J}),z=null},18481:function(Se,K,e){"use strict";e.d(K,{E:function(){return O}});var U=e(53649),n=e.n(U),R=e(47693),M=e(75555),d,O=(0,M.vJ)(d||(d=n()([`
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
`])),function(b){var t=b.theme;return"".concat(t==null?void 0:t.colorPrimary," !important")},function(b){var t=b.theme;return"".concat(t==null?void 0:t.colorPrimaryHover," !important")},function(b){var t=b.theme;return t==null?void 0:t.colorPrimary},function(b){var t=b.theme;return"".concat(t==null?void 0:t.colorPrimary," !important")},function(b){var t=b.theme;return"".concat(t==null?void 0:t.colorPrimaryHover," !important")},function(b){var t=b.theme,l=t||{},r=l.prefixCls;return R.ZP.config({prefixCls:r}),`
      .`.concat(r,`-notice-message {
        font-weight: 500 !important;
      }
      .`).concat(r,`-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `)})},39141:function(Se,K,e){"use strict";e.d(K,{_J:function(){return U},O9:function(){return U},NM:function(){return O},zl:function(){return d},HN:function(){return b}});var U={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}},n=e(82092),R=e.n(n),M=e(98644),d=function(l){var r=l.type,o=l.scale,h=l.appearance,i=(0,M.Z)(r),S=h==="dark";return R()(R()(R()(R()(R()(R()(R()(R()(R()(R()({},"color".concat(i,"Bg"),o[h][1]),"color".concat(i,"BgHover"),o[h][2]),"color".concat(i,"Border"),o[h][4]),"color".concat(i,"BorderHover"),o[h][S?5:3]),"color".concat(i,"Hover"),o[h][S?10:8]),"color".concat(i),o[h][9]),"color".concat(i,"Active"),o[h][S?7:10]),"color".concat(i,"TextHover"),o[h][S?10:8]),"color".concat(i,"Text"),o[h][9]),"color".concat(i,"TextActive"),o[h][S?7:10])},O=function(l){var r=l.scale,o=l.appearance;return{colorBgContainer:o==="dark"?r[o][1]:r[o][0],colorBgElevated:o==="dark"?r[o][2]:r[o][0],colorBgLayout:o==="dark"?r[o][0]:r[o][1],colorBgMask:r.lightA[8],colorBgSpotlight:r[o][5],colorBorder:r[o][4],colorBorderSecondary:r[o][3],colorFill:r["".concat(o,"A")][3],colorFillQuaternary:r["".concat(o,"A")][0],colorFillSecondary:r["".concat(o,"A")][2],colorFillTertiary:r["".concat(o,"A")][1],colorText:r[o][12],colorTextQuaternary:r[o][6],colorTextSecondary:r[o][10],colorTextTertiary:r[o][8]}},b={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}}},43361:function(Se,K,e){"use strict";e.d(K,{j:function(){return U}});var U=typeof window!="undefined"}}]);
