"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[39270],{12644:function(De,q,e){e.d(q,{h:function(){return b}});var J=e(57724),p=e.n(J),re=e(26068),L=e.n(re),E=e(67825),_=e.n(E),d=e(62272),T=e(22622),$=e(159),k=e(75271),ee=e(52676),W=["items","onClick","size"],v=["key","label"],z=["key","label"],b=function(u){var y=u.items,g=y===void 0?[]:y,G=u.onClick,f=G===void 0?function(){}:G,x=u.size,C=_()(u,W);if(g.length<=2)return(0,ee.jsx)(d.Z,L()(L()({align:"end",size:12},C),{},{children:g.map(function(Y){var V=Y.key,P=Y.label,U=_()(Y,v);return(0,ee.jsx)(T.ZP,L()(L()({onClick:function(pe){return f(V,pe)},size:x},U),{},{children:P}),V)})}));var I=p()(g),K=I[0],Q=I.slice(1),D=K,w=D.key,se=D.label,te=_()(D,z);return(0,ee.jsx)($.Z.Button,L()(L()(L()({onClick:function(V){return f(w,V)}},te),{},{menu:{onClick:function(V){var P=V.key,U=V.domEvent;return f(P,U)},items:Q},overlayStyle:{minWidth:100},size:x},C),{},{children:se}),w)}},79213:function(De,q,e){e.d(q,{w:function(){return b}});var J=e(26068),p=e.n(J),re=e(67825),L=e.n(re),E=e(62250),_=e(75271),d=e(53649),T=e.n(d),$=e(3772),k,ee=(0,$.kc)(function(S){var u=S.css,y=S.token,g=S.prefixCls;return{root:u(k||(k=T()([`
      margin-bottom: `,`px;
      .`,`-collapse {
        &-header {
          padding: 0 !important;
          &-text {
            flex: 1 !important;
            padding: `,"px ","px ",`px 0;
            & > * {
              font-size: `,`px;
              /* font-weight: unset; */
            }
          }
        }
        &-expand-icon {
          cursor: pointer;
          padding: `,"px 0 ","px ",`px;
        }
        &-extra {
          padding-right: `,`px;
        }
        &-item > .`,`-collapse-content {
          padding: `,`px 0;
          background-color: `,`;
        }
        &-content {
          &-box {
            padding: `,"px ",`px !important;
          }
        }
      }
    `])),y.margin,g,y.paddingSM,y.paddingSM,y.paddingSM,y.fontSize,y.padding,y.padding,y.paddingSM,y.paddingSM,g,y.paddingXXS,y.colorBgContainer,y.paddingXXS,y.padding)}}),W=e(52676),v=["className","variant"],z=E.Z.Group,b=function(u){var y=u.className,g=u.variant,G=L()(u,v),f=ee(),x=f.styles,C=f.cx;return(0,W.jsx)(z,p()({className:C(x.root,y),collapsible:g!=="pure",variant:g},G))}},94456:function(De,q,e){e.d(q,{E_:function(){return d},iV:function(){return T},nc:function(){return k},nB:function(){return ee}});var J=e(75271),p=e(56264),re="https://unpkg.com",L="https://registry.npmmirror.com",E=function(v){var z=v.pkg,b=v.version,S=b===void 0?"latest":b,u=v.path,y=v.proxy;switch(y){case"unpkg":return(0,p.Z)(re,"".concat(z,"@").concat(S),u);default:return(0,p.Z)(L,z,S,"files",u)}},_=e(52676),d=(0,J.createContext)(null),T=(0,J.memo)(function(W){var v=W.children,z=W.config;return(0,_.jsx)(d.Provider,{value:z,children:v})}),$=function(v){var z=v.pkg,b=v.version,S=v.path;return E({path:S,pkg:z,proxy:"aliyun",version:b})},k=function(){var v=(0,J.useContext)(d);return v?(v==null?void 0:v.proxy)!=="custom"?function(z){var b=z.pkg,S=z.version,u=z.path;return E({path:u,pkg:b,proxy:v.proxy,version:S})}:(v==null?void 0:v.customCdnFn)||$:$},ee=function(){var v=(0,J.useContext)(d);return v==null?void 0:v.Link}},26345:function(De,q,e){e.d(q,{w:function(){return g},Z:function(){return G}});var J=e(26068),p=e.n(J),re=e(67825),L=e.n(re),E=e(85743),_=e(75271),d=e(53649),T=e.n(d),$=e(3772),k,ee,W,v,z,b,S=(0,$.kc)(function(f,x){var C=f.css,I=f.token,K=f.prefixCls,Q=x.borderedBottom,D=x.borderedBottomDashed,w=x.borderedTop,se=x.borderedTopDashed,te=x.size,Y={small:"".concat(I.paddingXS,"px ").concat(I.padding,"px"),middle:"".concat(I.padding,"px ").concat(I.paddingLG,"px"),default:"".concat(I.paddingSM,"px ").concat(I.paddingLG,"px")},V=Q||D;return{custom:C(k||(k=T()([`
        .`,`-descriptions-item-content {
          align-items: center !important;
        }
        .`,`-descriptions-row > td {
          padding-top: 8px !important;
          padding-bottom: 8px !important;
        }
        `,`
        `,`
        `,`
        `,`
        `,`
      `])),K,K,V&&te&&C(ee||(ee=T()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),K,K,Y[te],K),Q&&C(W||(W=T()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),K,I.colorSplit),D&&C(v||(v=T()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),K,I.colorSplit),w&&C(z||(z=T()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),K,I.colorSplit),se&&C(b||(b=T()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),K,I.colorSplit))}},{hashPriority:"low"}),u=e(52676),y=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],g=function(x){var C=x.className,I=x.borderedBottom,K=x.borderedBottomDashed,Q=x.borderedTop,D=x.borderedTopDashed,w=L()(x,y),se=S({borderedBottom:I,borderedBottomDashed:K,borderedTop:Q,borderedTopDashed:D,size:w.size}),te=se.styles,Y=se.cx;return(0,u.jsx)(E.Z,p()(p()({},w),{},{className:Y(te.custom,C)}))},G=g;g.Item=E.Z.Item},82227:function(De,q,e){e.d(q,{i:function(){return g},Z:function(){return G}});var J=e(26068),p=e.n(J),re=e(48305),L=e.n(re),E=e(67825),_=e.n(E),d=e(30657),T=e(19728),$=e(13761),k=e(62272),ee=e(75271),W=e(53649),v=e.n(W),z=e(3772),b,S=(0,z.kc)(function(f){var x=f.css,C=f.token;return{custom:x(b||(b=v()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),C.colorPrimary,C.colorPrimaryHover)}},{hashPriority:"low"}),u=e(52676),y=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],g=function(x){var C=x.mode,I=C===void 0?"line":C,K=x.content,Q=x.defaultOpen,D=x.iconPlacement,w=D===void 0?"left":D,se=x.openIcon,te=x.closeIcon,Y=x.type,V=_()(x,y),P=S({}),U=P.styles,Z=I==="expanded",pe=(0,ee.useState)(Q),N=L()(pe,2),B=N[0],xe=N[1],je=te||(0,u.jsx)(d.Z,{}),R=se||(0,u.jsx)(T.Z,{}),he=Z&&(0,u.jsx)("span",{children:B?je:R});return I==="line"||Y==="vertical"?(0,u.jsx)($.Z,p()({type:Y},V)):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)($.Z,p()(p()({type:Y},V),{},{children:(0,u.jsx)("span",{className:Z?U.custom:"",onClick:function(){xe(!B)},children:(0,u.jsxs)(k.Z,{size:6,children:[w!=="right"&&he,(0,u.jsx)("span",{children:K}),w==="right"&&he]})})})),Z&&(0,u.jsx)("div",{style:{display:B?"block":"none"},children:x.children})]})},G=g},65784:function(De,q,e){e.d(q,{E:function(){return he}});var J=e(90228),p=e.n(J),re=e(87999),L=e.n(re),E=e(26068),_=e.n(E),d=e(15558),T=e.n(d),$=e(67825),k=e.n($),ee=e(3467),W=e(27046),v=e(28562),z=e(1718),b=e(22622),S=e(37805),u=e(38590),y=e(14539),g=e(75271),G=e(79213),f=e(335),x=e.n(f),C=e(82092),I=e.n(C),K=e(48305),Q=e.n(K),D=e(54834),w="__YUNTI_FORM_COLLAPSE_LIST_FIELD_KEY_PATH",se=function(O){return O.join("-")},te=function(O,ne,be){var Ee,me=v.Z.useFormInstance(),Oe=(0,g.useState)([]),oe=Q()(Oe,2),j=oe[0],M=oe[1],A=(Ee=(0,g.useMemo)(function(){return be.find(function(c){return!!c.name&&!c.noStyle})},[be]))===null||Ee===void 0?void 0:Ee.name,de=(0,g.useCallback)(function(c){var h=[],l=function o(r,a,s){var t=(0,D.Z)(r);return t||(t=I()({},w,[])),t[w]=[].concat(T()(s),[a]),t[ne]&&Array.isArray(t[ne])&&(h.push(se(t[w])),t[ne]=t[ne].map(function(n,i){return o(n,i,t[w])})),t};return{dataSource:(c==null?void 0:c.map(function(o,r){return l(o,r,[])}))||[],allExpandRowKeys:h}},[ne]),X=(0,g.useCallback)(function(c,h){var l=[],o=x()(c.entries()),r;try{for(o.s();!(r=o.n()).done;){var a=Q()(r.value,2),s=a[0],t=a[1];s===c.length-1?(l.push(t),h&&l.push(h)):l.push(t,ne)}}catch(n){o.e(n)}finally{o.f()}return l},[ne]),ce=(0,g.useCallback)(function(c,h){var l=h[w];return{add:function(r,a){var s=X(l),t=[O].concat(T()(s),[ne]),n=(0,D.Z)(me.getFieldValue(t))||[],i=a!=null?a:n.length;if(n.splice(i,0,r),me.setFieldValue(t,n),A){var m=[].concat(T()(t),[i,A]);setTimeout(function(){me.focusField(m)},200)}M(T()(new Set([].concat(T()(j),[se(l)]))))},remove:function(r){if(l.length<=1)return c.remove(r);var a=[O].concat(T()(X(l).slice(0,-1))),s=(0,D.Z)(me.getFieldValue(a))||[],t=[];Array.isArray(r)?t.push.apply(t,T()(r)):t.push(r);var n=s.filter(function(i,m){return!t.includes(m)});me.setFieldValue(a,n.length>0?n:void 0)},move:function(r,a){if(l.length<=1)return c.move(r,a);var s=[O].concat(T()(X(l).slice(0,-1))),t=(0,D.Z)(me.getFieldValue(s))||[];if(r<0||a<0||r>=t.length||a>=t.length){console.warn(new Error("\u7D22\u5F15\u8D85\u51FA\u6570\u7EC4\u8303\u56F4"));return}var n=[t[a],t[r]];t[r]=n[0],t[a]=n[1],me.setFieldValue(s,t)}}},[ne,j,A,me,X,O]);return{expandedRowKeys:j,setExpandedRowKeys:M,fieldsToDataSource:de,getFieldPath:X,getFormListOperation:ce,firstColumnFormItemName:A}},Y=e(53649),V=e.n(Y),P=e(3772),U,Z,pe,N=(0,P.kc)(function(Se){var O=Se.css,ne=Se.token,be=Se.prefixCls;return{empty:O(U||(U=V()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),ne.paddingXS,ne.paddingSM,ne.colorTextTertiary),list:O(Z||(Z=V()([`
      &.`,`-table-wrapper {
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
            .`,`-table-row-expand-icon {
              margin-top: `,`px;
            }
          }
        }
      }
      .`,`-form {
        &-item {
          margin-bottom: 0;
        }
      }
    `])),be,be,ne.colorTextTertiary,be,ne.marginXS,be),noFormItem:O(pe||(pe=V()([`
      height: `,`px;
      color: `,`;
    `])),ne.controlHeight,ne.colorTextTertiary)}}),B=e(52676),xe=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style","defaultExpandAllRows","indentSize","childrenColumnName","rowHoverable"],je=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width","className"],R=["key"],he=function(O){var ne=O.extra,be=O.expandIcon,Ee=O.icon,me=O.title,Oe=O.variant,oe=O.defaultActive,j=O.empty,M=j===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":j,A=O.columns,de=A===void 0?[]:A,X=O.disabled,ce=O.readOnly,c=O.addOneFieldDefault,h=O.disableRemoveWhenOneField,l=O.maxFileds,o=O.name,r=O.addParams,a=O.className,s=O.onRemove,t=O.fieldRemoveButton,n=t===void 0?!0:t,i=O.style,m=O.defaultExpandAllRows,H=O.indentSize,F=H===void 0?16:H,ae=O.childrenColumnName,ie=ae===void 0?"children":ae,ke=O.rowHoverable,fe=ke===void 0?!0:ke,ye=k()(O,xe),ue=N(),we=ue.cx,ge=ue.styles,Ce=(0,g.useRef)(),le=v.Z.useFormInstance(),Me=v.Z.useWatch(o,le),Ne=te(o,ie,de),Le=Ne.expandedRowKeys,Ie=Ne.setExpandedRowKeys,Ae=Ne.fieldsToDataSource,et=Ne.getFormListOperation,$e=Ne.getFieldPath,Ke=Ne.firstColumnFormItemName,Ge=(0,g.useMemo)(function(){return Ae(Me)},[Me,Ae]),tt=Ge.dataSource;(0,g.useEffect)(function(){var Te=le.getFieldValue(o),Pe=Ae(Te),Fe=Pe.allExpandRowKeys;m&&Ie(Fe)},[m,Ae,le,o,Ie]);var Ve=(0,g.useCallback)(function(){if(!r)return[];var Te=typeof r=="function"?r():r;return[Te.defaultValue,Te.insertIndex]},[r]),ze=(0,g.useCallback)(function(Te){var Pe=le.getFieldValue([o,Te]);return s==null?void 0:s(Pe)},[le,o,s]);return(0,g.useEffect)(function(){var Te;if(c&&(!(le!=null&&le.getFieldValue(o))||(le==null||(Te=le.getFieldValue(o))===null||Te===void 0?void 0:Te.length)===0)){var Pe;(Pe=Ce.current)===null||Pe===void 0||Pe.call.apply(Pe,[Ce].concat(T()(Ve()))),setTimeout(function(){le.focusField([o,0,Ke])},200)}},[c,Ve,le,o,Ke]),(0,B.jsx)(G.w,{extra:ne===void 0?o&&!ce&&(0,B.jsx)(z.Z,{title:l&&"\u6700\u591A\u6DFB\u52A0 ".concat(l," \u9879"),children:(0,B.jsx)(b.ZP,{disabled:X||!!(l&&(Me==null?void 0:Me.length)===l),icon:(0,B.jsx)(ee.Z,{}),onClick:function(Pe){var Fe;Pe.stopPropagation(),(Fe=Ce.current)===null||Fe===void 0||Fe.call.apply(Fe,[Ce].concat(T()(Ve()))),setTimeout(function(){le.focusField([o,le.getFieldValue(o).length-1,Ke])},200)},size:"small",type:"text"})}):ne,className:a,expandIcon:be,icon:Ee,title:me,variant:Oe,defaultActive:oe,style:i,children:o?(0,B.jsx)(v.Z.List,_()(_()({name:o},ye),{},{children:function(Pe,Fe){var He=Fe.add,Xe=Fe.remove;return Ce.current=He,(0,B.jsx)(S.Z,{className:ge.list,columns:[].concat(T()(de.map(function(ve){var Be=ve.label,Ze=ve.name,Je=ve.render,Ue=ve.dependencies,We=ve.rules,nt=ve.align,Qe=ve.ellipsis,it=ve.fixed,Re=ve.responsive,pt=ve.shouldCellUpdate,gt=ve.width,ot=ve.className,lt=k()(ve,je);return{title:Be,dataIndex:Ze,align:nt,ellipsis:Qe,fixed:it,responsive:Re,shouldCellUpdate:pt,width:gt,render:function(ht,dt,Ye){var at=Pe[Ye]||{},rt=at.name,st=dt[w],ct=$e(st),ut=ct.slice(0,-1),ft=at.key,mt=k()(at,R),qe=Je==null?void 0:Je(rt!=null?rt:st.at(-1),Ye,et(Fe,dt),ct);if(!qe&&!lt.noStyle)return(0,B.jsx)(u.Z,{align:"center",className:we(ge.noFormItem,ot),children:"\u65E0\u9700\u8BBE\u7F6E"});if(!Ze)return(0,B.jsx)(u.Z,{align:"center",className:we(ge.noFormItem,ot),children:qe});var _e={readOnly:ce,disabled:X};return ce===!0&&(_e.showCount=!1,_e.variant="borderless",_e.placeholder="-"),(0,B.jsx)(v.Z.Item,_()(_()(_()({className:ot},mt),{},{dependencies:typeof Ue=="function"?Ue(ut,Ye):Ue,name:$e(st,Ze),rules:typeof We=="function"?We(ut,Ye):We},lt),{},{children:qe&&g.cloneElement(qe,_e)}),ft)}}})),[!ce&&n!==!1&&{title:"",dataIndex:"del",render:function(Be,Ze,Je){var Ue=Pe[Je];if(Ue){var We=Ue.name;return(0,B.jsx)(v.Z.Item,{children:(0,B.jsx)(b.ZP,{disabled:X||h&&Pe.length===1,icon:(0,B.jsx)(W.Z,{icon:y.Z}),onClick:L()(p()().mark(function nt(){var Qe;return p()().wrap(function(Re){for(;;)switch(Re.prev=Re.next){case 0:return Re.next=2,ze(We);case 2:Qe=Re.sent,Qe!==!1&&Xe(We);case 4:case"end":return Re.stop()}},nt)})),type:"text"})})}}}]).filter(function(ve){return!!ve}),dataSource:tt,expandable:{expandedRowKeys:Le,childrenColumnName:ie,onExpandedRowsChange:function(Be){Ie(Be)}},indentSize:F,locale:{emptyText:M},pagination:!1,rowHoverable:fe,rowKey:function(Be){return se(Be[w])},size:"small"})}})):(0,B.jsx)("div",{className:ge.empty,children:M})})}},62719:function(De,q,e){e.d(q,{E:function(){return p.E},l:function(){return re}});var J=e(28562),p=e(65784),re=J.Z;re.CollapseList=p.E},17853:function(De,q,e){e.d(q,{EL:function(){return de},oP:function(){return ce}});var J=e(26068),p=e.n(J),re=e(67825),L=e.n(re),E=e(76417),_=e(92946),d=e(43728),T=e(75271),$=e(48305),k=e.n($),ee=e(17394),W=e(98721),v=e(97601),z=e(68537),b=e(90142),S=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"],u=e(27046),y=e(71795),g=e(5312),G=e(90228),f=e.n(G),x=e(87999),C=e.n(x),I=e(38794),K=e(76940),Q=e(49505),D=e(15094),w=function(h){var l=h?"dark":"light",o=D._.gray[l][11],r=D._.gray[l][7],a=h?D._.red[l][9]:D._.volcano[l][9],s=h?D._.gold[l][9]:D._.orange[l][9],t=h?D._.lime[l][9]:D._.green[l][9],n=h?D._.blue[l][9]:D._.geekblue[l][9];return{colors:{"editor.foreground":o},name:l,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:t},enumMember:{foreground:n},macro:{foreground:t},"parameter.label:dart":{foreground:r},"property:dart":{foreground:t},tomlArrayKey:{foreground:a},"variable.constant":{foreground:t},"variable.defaultLibrary":{foreground:a},"variable:dart":{foreground:t}},tokenColors:[{scope:"meta.embedded",settings:{foreground:r}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:o}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:n}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:t}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:o}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:r}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:a}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:a}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:r}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:s}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:a}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:o}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:n}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:o}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:n}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:t}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:r}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:r}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:a}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:s}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:t}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:o}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:o}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:r}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:r}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:s}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:a}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:t}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:a}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:a}},{name:"java source",scope:"source.java",settings:{foreground:o}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:r}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:s}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:a}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:n}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:o}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:n}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:n}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:n}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:t}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:n}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:t}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:o}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:t}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:n}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:a}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:a}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:o}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:t}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:n}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:o}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:t}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:s}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:r}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:n}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:n}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:n}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:o}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:n}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:n}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:r}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:n}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:n}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:n}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:t}},{name:"python type",scope:"support.type.python",settings:{foreground:n}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:n}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:t}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:r}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:s}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:t}},{name:"Operators",scope:"keyword.operator",settings:{foreground:r}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:n}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:n}},{name:"Keywords",scope:"keyword",settings:{foreground:n}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:a}},{name:"Variables",scope:"variable",settings:{foreground:o}},{name:"Variables",scope:"variable.c",settings:{foreground:r}},{name:"Language variables",scope:"variable.language",settings:{foreground:a}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:r}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:a}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:n}},{name:"Packages",scope:"token.package",settings:{foreground:r}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:s}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:a}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:a}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:a}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:a}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:o}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:a}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:n}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:t}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:s}},{name:"Storage",scope:"storage",settings:{foreground:n}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:n}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:n}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:a}},{name:"Support",scope:"support.function",settings:{foreground:n}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:r}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:o}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:r}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:t}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:r}},{name:"Strings",scope:"string",settings:{foreground:t}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:n}},{name:"Integers",scope:"constant.numeric",settings:{foreground:t}},{name:"Constants",scope:"constant",settings:{foreground:t}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:t}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:o}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:t}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:s}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:t}},{name:"Selector",scope:"meta.selector",settings:{foreground:n}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:a}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:s}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:o}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:t}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:a}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:n}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:o}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:r}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:o}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:s}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:o}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:o}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:r}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:o}},{name:"Broken",scope:"invalid.broken",settings:{foreground:o}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:o}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:t}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:o}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:n}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:n}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:a}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:n}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:n}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:r}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:r}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:a}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:a}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:s}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:r}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:t}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:t}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:s}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:n}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:n}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:n}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:n}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:s}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:n}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:r}},{name:"brace function",scope:"function.brace",settings:{foreground:r}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:r}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:n}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:n}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:n}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:t}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:t}},{name:"sass selector",scope:"selector.sass",settings:{foreground:o}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:a}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:r}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:a}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:o}},{scope:"token.info-token",settings:{foreground:s}},{scope:"token.warn-token",settings:{foreground:t}},{scope:"token.error-token",settings:{foreground:a}},{scope:"token.debug-token",settings:{foreground:n}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:n}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:r}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:n}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:s}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:a}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:o}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:o}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:t}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:t}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:t}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:t}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:n}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:a}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:n}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:a}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:n}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:t}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:n}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:o}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:n}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:a}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:o}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:n}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:o}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:t}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:o}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:a}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:a}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:s}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:o}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:t}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:a}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:n}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:o}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:a}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:a}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:n}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:o}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:n}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:n}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:r}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:t}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:r}},{name:"link",scope:["constant.character.xi"],settings:{foreground:s}},{name:"accent",scope:["accent.xi"],settings:{foreground:s}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:t}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:o}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:r}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:a}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:o}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:r}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:r}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:r}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:r}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:n}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:a}},{scope:["entity.name.variable.field.cs"],settings:{foreground:o}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:o}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:t}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:a}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:r}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:a}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:o}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:a}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:o}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:r}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:n}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:t}},{scope:["constant.character.escape"],settings:{foreground:n}},{scope:["string.regexp"],settings:{foreground:o}},{scope:["log.info"],settings:{foreground:t}},{scope:["log.warning"],settings:{foreground:a}},{scope:["log.error"],settings:{foreground:o}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:l}},se="txt",te=[se],Y,V=function(){var c=C()(f()().mark(function h(l){var o,r;return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(o=Y,r=l.toLowerCase(),!(o&&te.includes(r))){s.next=4;break}return s.abrupt("return",o);case 4:return S.includes(r)&&!te.includes(r)&&te.push(r),s.next=7,(0,K.e$)({langs:te,themes:[w(!0),w(!1)]});case 7:return o=s.sent,Y=o,s.abrupt("return",o);case 10:case"end":return s.stop()}},h)}));return function(l){return c.apply(this,arguments)}}(),P=function(h,l,o){return(0,Q.ZP)([l==null?void 0:l.toLowerCase(),o?"dark":"light",h].join("-"),C()(f()().mark(function r(){var a,s,t;return f()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,a=l.toLowerCase(),i.next=4,V(a);case 4:return s=i.sent,t=s==null?void 0:s.codeToHtml(h,{lang:S.includes(a)?a:se,theme:o?"dark":"light",transformers:[(0,I.hu)(),(0,I.d0)(),(0,I.dY)(),(0,I.Eu)(),(0,I.p4)()]}),i.abrupt("return",t);case 9:return i.prev=9,i.t0=i.catch(0),i.abrupt("return","");case 12:case"end":return i.stop()}},r,null,[[0,9]])})),{revalidateOnFocus:!1})},U=e(53649),Z=e.n(U),pe=e(3772),N,B,xe,je=(0,pe.kc)(function(c){var h=c.css,l=c.token,o=c.cx,r=c.prefixCls,a=c.stylish,s="".concat(r,"-highlighter");return{loading:o(a.blur,h(N||(N=Z()([`
        position: absolute;
        z-index: 10;
        inset-block-start: 0;
        inset-inline-end: 0;

        height: 34px;
        padding-block: 0;
        padding-inline: 8px;

        font-family: `,`;
        color: `,`;

        border-radius: `,`;
      `])),l.fontFamilyCode,l.colorTextTertiary,l.borderRadius)),shiki:o("".concat(s,"-shiki"),h(B||(B=Z()([`
        overflow: auto;
        margin: 0;
        padding: 0;

        .shiki {
          overflow: unset;
          margin: 0;
          padding: 0;
          background: none !important;

          code {
            display: block;

            .line {
              display: inline-block;

              width: calc(100% + 32px);
              margin-block: 0;
              margin-inline: -16px;
              padding-block: 0;
              padding-inline: 16px;
            }
          }

          &.has-focused {
            .line:not(.focused) {
              opacity: 0.5;
            }
          }

          .highlighted {
            background: `,`;

            &.warning {
              background: `,`;
            }

            &.error {
              background: `,`;
            }
          }

          .highlighted-word {
            padding-block: 0.1em;
            padding-inline: 0.2em;

            background: `,`;
            border: 1px solid `,`;
            border-radius: `,`px;
          }

          .diff {
            &.remove {
              background: `,`;

              &::before {
                content: '-';

                position: absolute;
                inset-inline-start: 4px;

                display: inline-block;

                color: `,`;
              }
            }

            &.add {
              background: `,`;

              &::before {
                content: '+';

                position: absolute;
                inset-inline-start: 4px;

                display: inline-block;

                color: `,`;
              }
            }
          }
        }
      `])),l.colorFillTertiary,l.colorWarningBg,l.colorErrorBg,l.colorFillTertiary,l.colorBorderSecondary,l.borderRadius,l.colorErrorBg,l.colorErrorText,l.colorSuccessBg,l.colorSuccessText)),unshiki:h(xe||(xe=Z()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),l.colorTextDescription)}}),R=e(52676),he=(0,T.memo)(function(c){var h=c.children,l=c.language,o=c.className,r=c.style,a=je(),s=a.styles,t=a.cx,n=(0,y.r)(),i=n.isDarkMode,m=P(h.trim(),l,i),H=m.data,F=m.isLoading;return(0,R.jsxs)(R.Fragment,{children:[F||!H?(0,R.jsx)("div",{className:t(s.unshiki,o),style:r,children:(0,R.jsx)("pre",{children:(0,R.jsx)("div",{children:h.trim()})})}):(0,R.jsx)("div",{className:t(s.shiki,o),dangerouslySetInnerHTML:{__html:H},style:r}),F&&(0,R.jsx)(b.D,{align:"center",className:s.loading,gap:8,horizontal:!0,justify:"center",children:(0,R.jsx)(u.Z,{icon:g.Z,spin:!0})})]})}),Se,O,ne,be,Ee,me,Oe,oe,j=(0,pe.kc)(function(c,h){var l=c.token,o=c.css,r=c.cx,a=c.prefixCls,s=c.stylish,t="".concat(a,"-highlighter"),n="".concat(t,"-hover-btn"),i="".concat(t,"-hover-lang"),m=o(Se||(Se=Z()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),h==="block"?l.colorFillTertiary:"transparent",h==="block"?"transparent":l.colorBorder,h==="block"?l.colorFillTertiary:l.colorFillQuaternary);return{button:r(n,o(O||(O=Z()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),h==="pure"?0:"12px",h==="pure"?0:"12px")),container:r(t,h!=="pure"&&m,o(ne||(ne=Z()([`
          position: relative;
          overflow: hidden;
          border-radius: `,`px;
          transition: background-color 100ms `,`;

          &:hover {
            .`,` {
              opacity: 1;
            }

            .`,` {
              opacity: 1;
            }
          }

          .prism-code {
            background: none !important;
          }

          pre {
            overflow: auto hidden;

            margin: 0 !important;
            padding: `,` !important;

            white-space: break-spaces;

            background: none !important;
          }

          code {
            background: transparent !important;
          }
        `])),l.borderRadius,l.motionEaseOut,n,i,h==="pure"?0:"16px")),header:o(be||(be=Z()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),l.colorFillQuaternary),lang:r(i,s.blur,o(Ee||(Ee=Z()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),l.fontFamilyCode,l.colorTextSecondary)),nowrap:o(me||(me=Z()([`
        code {
          text-wrap: nowrap !important;
        }
      `]))),scroller:o(Oe||(Oe=Z()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:o(oe||(oe=Z()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),l.colorTextDescription,a,l.colorTextDescription)}}),M=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],A=S.map(function(c){return{label:c,value:c.toLowerCase()}}),de=(0,T.memo)(function(c){var h=c.children,l=c.language,o=l===void 0?"markdown":l,r=c.className,a=c.style,s=c.allowChangeLanguage,t=s===void 0?!1:s,n=c.fileName,i=c.icon,m=c.contentStyle,H=L()(c,M),F=(0,T.useState)(!0),ae=k()(F,2),ie=ae[0],ke=ae[1],fe=(0,T.useState)(o||"markdown"),ye=k()(fe,2),ue=ye[0],we=ye[1],ge=j("block"),Ce=ge.styles,le=ge.cx,Me=le(Ce.container,r);return(0,R.jsxs)("div",p()(p()({className:Me,"data-code-type":"highlighter",style:a},H),{},{children:[(0,R.jsxs)(b.D,{align:"center",className:Ce.header,horizontal:!0,justify:"space-between",children:[(0,R.jsx)(ee.Z,{icon:ie?v.Z:z.Z,onClick:function(){return ke(!ie)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),t&&!n?(0,R.jsx)(W.default,{className:Ce.select,onSelect:we,options:A,size:"small",suffixIcon:!1,value:ue.toLowerCase(),variant:"borderless"}):(0,R.jsxs)(b.D,{align:"center",className:Ce.select,gap:2,horizontal:!0,children:[i,(0,R.jsx)("span",{children:n||ue})]}),(0,R.jsx)(_.Z,{content:h,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,R.jsx)(he,{language:ue==null?void 0:ue.toLowerCase(),style:ie?m:p()(p()({},m),{},{height:0,overflow:"hidden"}),children:h})]}))}),X=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap"],ce=(0,T.memo)(function(c){var h=c.fullFeatured,l=c.copyButtonSize,o=l===void 0?"site":l,r=c.children,a=c.language,s=c.className,t=c.style,n=c.copyable,i=n===void 0?!0:n,m=c.showLanguage,H=m===void 0?!0:m,F=c.type,ae=F===void 0?"block":F,ie=c.spotlight,ke=c.allowChangeLanguage,fe=c.fileName,ye=c.icon,ue=c.contentStyle,we=c.wrap,ge=L()(c,X),Ce=j(ae),le=Ce.styles,Me=Ce.cx,Ne=Me(le.container,!we&&le.nowrap,s);return h?(0,R.jsx)(de,p()(p()({allowChangeLanguage:ke,className:s,contentStyle:ue,fileName:fe,icon:ye,language:a,style:t},ge),{},{children:r})):(0,R.jsxs)("div",p()(p()({className:Ne,"data-code-type":"highlighter",style:t},ge),{},{children:[ie&&(0,R.jsx)(E.Z,{size:240}),i&&(0,R.jsx)(_.Z,{className:le.button,content:r,placement:"left",size:o}),H&&a&&(0,R.jsx)(d.Z,{className:le.lang,children:a.toLowerCase()}),(0,R.jsx)("div",{className:le.scroller,children:(0,R.jsx)(he,{language:a==null?void 0:a.toLowerCase(),style:ue,children:r})})]}))})},33985:function(De,q,e){e.d(q,{h:function(){return Y},P:function(){return z.Pz}});var J=e(26068),p=e.n(J),re=e(48305),L=e.n(re),E=e(67825),_=e.n(E),d=e(17394),T=e(92946),$=e(38590),k=e(71795),ee=e(97601),W=e(68537),v=e(75271),z=e(2998),b=e(86590),S=e(4643),u=e(94729),y=e(53649),g=e.n(y),G=e(3772),f,x,C,I,K,Q,D=(0,G.kc)(function(V,P){var U=V.token,Z=V.css,pe=V.cx,N=V.prefixCls,B="".concat(N,"-json-viewer"),xe=P==="block",je=Z(f||(f=g()([`
      background-color: `,`;

      &:hover {
        background-color: `,`;
      }
    `])),xe?U.colorFillTertiary:"transparent",xe?U.colorFillTertiary:U.colorFillQuaternary);return{container:pe(B,P!=="pure"&&je,Z(x||(x=g()([`
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
        `])),U.borderRadius,U.motionEaseOut)),content:Z(C||(C=g()([`
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),P==="pure"?0:U.padding),header:Z(I||(I=g()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),U.colorFillQuaternary),title:Z(K||(K=g()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),U.margin),titleText:Z(Q||(Q=g()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),U.fontSize,N,U.colorTextDescription)}}),w=e(52676),se=["type","fullFeatured","title","icon","contentStyle","classNames","className","collapseStringMode","collapsed","dark","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],te=u.C.Text,Y=function(P){var U=P.type,Z=U===void 0?"block":U,pe=P.fullFeatured,N=pe===void 0?!1:pe,B=P.title,xe=B===void 0?"json":B,je=P.icon,R=P.contentStyle,he=P.classNames,Se=P.className,O=P.collapseStringMode,ne=O===void 0?"directly":O,be=P.collapsed,Ee=be===void 0?2:be,me=P.dark,Oe=P.displaySize,oe=Oe===void 0?"collapsed":Oe,j=P.ignoreLargeArray,M=j===void 0?!1:j,A=P.matchesURL,de=A===void 0?!0:A,X=P.src,ce=P.theme,c=ce===void 0?"default":ce,h=P.style,l=_()(P,se),o=(0,k.r)(),r=o.isDarkMode,a=D(N?"block":Z),s=a.styles,t=a.cx,n=(0,v.useState)(!0),i=L()(n,2),m=i[0],H=i[1],F=(0,v.useMemo)(function(){return(0,z.Pz)(X)},[X]),ae=(0,w.jsx)(z.ZP,p()({collapseStringMode:ne,collapsed:Ee,dark:me!=null?me:r,displaySize:oe,ignoreLargeArray:M,matchesURL:de,src:X,theme:c},l));return(0,w.jsxs)($.Z,{className:t(s.container,Se),style:h,vertical:!0,children:[N&&(0,w.jsxs)($.Z,{align:"center",className:t(s.header,he==null?void 0:he.header),justify:"space-between",children:[(0,w.jsx)(d.Z,{icon:m?ee.Z:W.Z,onClick:function(){return H(!m)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),(0,w.jsxs)($.Z,{align:"center",className:s.title,flex:1,gap:2,justify:"center",title:xe,children:[je,(0,w.jsx)($.Z,{className:s.titleText,children:(0,w.jsx)(te,{ellipsis:!0,children:xe})})]}),(0,w.jsx)(T.Z,{content:F,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,w.jsx)($.Z,{className:t(s.content,he==null?void 0:he.content),flex:1,style:m?R:p()(p()({},R),{},{height:0,maxHeight:0,padding:0,overflow:"hidden"}),children:ae})]})}},40305:function(De,q,e){e.d(q,{T:function(){return a}});var J=e(26068),p=e.n(J),re=e(67825),L=e.n(re),E=e(75271),_=e(87902),d=e(52676),T=["to","children"],$=function(t){var n=t.to,i=t.children,m=L()(t,T);return(0,d.jsx)("a",p()(p()({href:"#".concat(n)},m),{},{children:i}))},k=(0,E.createContext)({loading:!1,Link:$}),ee=["to","Link","children"],W=function(t){var n=t.to,i=t.Link,m=t.children,H=L()(t,ee);return i?(0,d.jsx)(i,p()(p()({to:n},H),{},{children:m})):(0,d.jsx)("a",p()(p()({href:"#".concat(n)},H),{},{children:m}))},v=function(t){var n=(0,E.useContext)(k),i=n.Link,m=n.breadcrumb;(0,E.useEffect)(function(){var F;m==null||(F=m.setItems)===null||F===void 0||F.call(m,t.items)},[m,t.items]);var H=(0,E.useCallback)(function(F,ae,ie,ke){var fe,ye,ue=F.href?F.href===((fe=ie.at(-1))===null||fe===void 0?void 0:fe.href):F.path===((ye=ie.at(-1))===null||ye===void 0?void 0:ye.path);if(ue)return(0,d.jsx)("span",{children:F.title});var we=F.href?F.href:"/".concat(ke.join("/"));return(0,d.jsx)(W,{Link:i,to:we,children:F.title})},[i]);return(0,d.jsx)(_.Z,p()({itemRender:H},t))},z=e(10780),b=e(22622),S=e(91488),u=e(38590),y=e(53649),g=e.n(y),G=e(3772),f,x=(0,G.kc)(function(s){var t=s.css,n=s.token;return{root:t(f||(f=g()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),C=["className","children"],I={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},K=function(t){var n=t.className,i=t.children,m=L()(t,C),H=x(),F=H.styles,ae=H.cx,ie=(0,E.useContext)(k),ke=ie.loading,fe=ie.breadcrumb,ye=ie.Link,ue=ie.status,we=(0,E.useCallback)(function(){if(ue){var ge;return(0,d.jsx)(z.ZP,{extra:(0,d.jsx)(ye,{to:fe==null||(ge=fe.items)===null||ge===void 0||(ge=ge[0])===null||ge===void 0?void 0:ge.path,children:(0,d.jsx)(b.ZP,{type:"primary",children:"Go Back"})}),status:ue,subTitle:I[ue],title:ue})}return i},[ue,i,ye,fe==null?void 0:fe.items]);return ke?(0,d.jsx)(S.Z,{active:!0,className:ae(F.root,n)}):(0,d.jsx)(u.Z,p()(p()({className:ae(F.root,n),gap:20,vertical:!0},m),{},{children:we()}))},Q=function(){return(0,d.jsx)(d.Fragment,{})},D=e(48305),w=e.n(D),se=e(335),te=e.n(se),Y=e(1718),V=e(12644),P=e(82227),U=e(46119),Z=e(94729),pe=e(79214),N=["shape","size","src"],B=function(t){if(typeof t=="number")return t;switch(t){case"small":return 40;case"large":return 88;default:return 64}},xe=function(t){var n=t.shape,i=n===void 0?"square":n,m=t.size,H=t.src,F=L()(t,N),ae=(0,E.useMemo)(function(){return B(m)},[m]);return(0,d.jsx)(pe.C,p()({shape:i,size:ae,src:H},F))},je,R,he,Se,O,ne,be,Ee,me,Oe=(0,G.kc)(function(s,t){var n=s.css,i=s.token,m=s.prefixCls,H=t.bordered,F=H===void 0?!1:H,ae=t.divider,ie=ae===void 0?!0:ae;return{root:F?n(je||(je=g()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),i.marginXS,i.padding,i.colorBgBase,i.borderRadius,i.boxShadowTertiary):n(R||(R=g()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),i.paddingXS,i.marginXS,ie&&n(he||(he=g()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),i.paddingLG,i.colorSplit)),icon:n(Se||(Se=g()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),m,m,i.colorPrimary,m),titleBox:n(O||(O=g()([`
        margin-bottom: `,`px;
      `])),i.marginSM),subTitle:n(ne||(ne=g()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),i.marginXXS,m,i.fontSize,i.colorTextSecondary),title:n(be||(be=g()([`
        font-size: `,`px;
        font-weight: 700;
      `])),i.fontSizeHeading5),descriptions:n(Ee||(Ee=g()([`
        margin-bottom: `,`px;
        font-size: `,`px;
        color: `,`;
        .`,"-badge.",`-badge-status {
          font-size: `,`px;
          & > .`,`-badge-status-text {
            font-size: `,`px;
            color: `,`;
          }
        }
      `])),i.marginXXS,i.fontSize,i.colorTextSecondary,m,m,i.fontSize,m,i.fontSize,i.colorTextSecondary),rightButtons:n(me||(me=g()([`
        justify-content: flex-end;
      `])))}}),oe=["className","classNames","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],j=Z.C.Paragraph,M=function(t){var n=t.className,i=t.classNames,m=t.icon,H=t.title,F=t.titleRender,ae=t.subTitle,ie=t.status,ke=t.descriptions,fe=ke===void 0?[]:ke,ye=t.descriptionsRender,ue=t.extraContent,we=ue===void 0?{}:ue,ge=t.extraContentRender,Ce=t.bordered,le=t.divider,Me=L()(t,oe),Ne=Oe({bordered:Ce,divider:le}),Le=Ne.styles,Ie=Ne.cx,Ae=(0,E.useMemo)(function(){return!m||typeof m=="string"?{src:m,size:ae?"large":"default"}:(ae&&m.size===void 0&&(m.size="large"),m)},[m,ae]),et=(0,E.useMemo)(function(){var ze=(0,d.jsx)("span",{className:Ie(Le.title,i==null?void 0:i.title),children:H});return F?F(ze):ze},[i==null?void 0:i.title,Ie,Le.title,H,F]),$e=(0,E.useMemo)(function(){var ze=[],Te=te()(fe.filter(function(Ze){return!!Ze}).entries()),Pe;try{for(Te.s();!(Pe=Te.n()).done;){var Fe=w()(Pe.value,2),He=Fe[0],Xe=Fe[1],ve=Xe.icon,Be=Xe.text;(ie||He>=1)&&ze.push((0,d.jsx)(P.Z,{dashed:!1,type:"vertical"},"divider-".concat(He))),ze.push((0,d.jsxs)(u.Z,{align:"center",gap:4,children:[ve&&(0,d.jsx)(Y.Z,{title:ve.tooltip,children:ve.content}),(0,d.jsx)("span",{children:Be})]},"desc-".concat(He)))}}catch(Ze){Te.e(Ze)}finally{Te.f()}return ye?ye(ze):ze},[fe,ye,ie]),Ke=(0,E.useMemo)(function(){if(!we&&!ge)return null;var ze=(0,d.jsx)(V.h,p()({className:Le.rightButtons},we));return ge?ge(ze):ze},[we,ge,Le.rightButtons]),Ge=(0,E.useContext)(k),tt=Ge.loading,Ve=Ge.status;return tt?(0,d.jsxs)(u.Z,{className:Ie(Le.root,n),gap:20,children:[(0,d.jsx)(u.Z,{children:(0,d.jsx)(S.Z.Avatar,{active:!0,className:Le.icon,shape:Ae==null?void 0:Ae.shape,size:B(Ae==null?void 0:Ae.size)})}),(0,d.jsxs)(u.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,d.jsxs)("div",{className:Le.titleBox,children:[(0,d.jsx)(S.Z.Input,{active:!0,size:25}),ae&&(0,d.jsx)("div",{className:Ie(Le.subTitle,n),children:(0,d.jsx)(S.Z.Input,{active:!0,size:18})})]}),(0,d.jsx)(S.Z.Input,{active:!0,size:18})]}),(0,d.jsx)(u.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,d.jsx)(S.Z.Button,{active:!0})})]}):Ve?null:(0,d.jsxs)(u.Z,p()(p()({className:Ie(Le.root,n),gap:20},Me),{},{children:[Ae&&(0,d.jsx)(u.Z,{children:(0,d.jsx)(xe,p()({className:Le.icon},Ae))}),(0,d.jsxs)(u.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,d.jsxs)(u.Z,{className:Ie(Le.titleBox,i==null?void 0:i.titleWrapper),vertical:!0,children:[et,ae&&(0,d.jsx)(j,{className:Ie(Le.subTitle,i==null?void 0:i.subTitle),ellipsis:{rows:2},children:ae})]}),(0,d.jsxs)(u.Z,{align:"center",className:Ie(Le.descriptions,i==null?void 0:i.descriptions),gap:4,children:[ie&&(0,d.jsx)(U.q,p()({},ie)),$e]})]}),(0,d.jsx)(u.Z,{align:"center",className:i==null?void 0:i.extraContent,flex:"1",justify:"flex-end",children:Ke})]}))},A=e(94456),de,X=(0,G.kc)(function(s){var t=s.css,n=s.token;return{root:t(de||(de=g()([`
      width: inherit;
      height: 100%;
      min-height: inherit;
      padding: `,"px ","px ",`px;
    `])),n.padding,n.paddingLG,n.paddingXL)}}),ce=["loading","className","children","Link","status","gap"],c=function(t){var n=(0,A.nB)(),i=t.loading,m=t.className,H=t.children,F=t.Link,ae=F===void 0?n||$:F,ie=t.status,ke=t.gap,fe=ke===void 0?16:ke,ye=L()(t,ce),ue=X(ye),we=ue.styles,ge=ue.cx,Ce=(0,E.useState)([]),le=w()(Ce,2),Me=le[0],Ne=le[1];return(0,d.jsx)(u.Z,p()(p()({className:ge(we.root,m),gap:fe,vertical:!0},ye),{},{children:(0,d.jsx)(k.Provider,{value:{loading:i,Link:ae,breadcrumb:{items:Me,setItems:Ne},status:ie},children:H})}))},h,l=(0,G.kc)(function(s){var t=s.css,n=s.token;return{root:t(h||(h=g()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),n.fontFamily,n.fontWeightStrong,n.lineHeight,n.colorText)}}),o=["className"],r=function(t){var n=t.className,i=L()(t,o),m=l(),H=m.cx,F=m.styles;return(0,d.jsx)("h2",p()({className:H(F.root,n)},i))},a=c;a.Breadcrumb=v,a.Title=r,a.Header=M,a.Content=K,a.Footer=Q},86346:function(De,q,e){e.d(q,{Q:function(){return Oe}});var J=e(26068),p=e.n(J),re=e(67825),L=e.n(re),E=e(75271),_=e(53649),d=e.n(_),T=e(3772),$,k,ee,W,v,z=(0,T.kc)(function(oe){var j=oe.css,M=oe.token,A=oe.prefixCls;return{root:j($||($=d()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),M.fontFamily,M.colorText,M.colorBgContainer,M.borderRadius*2,M.boxShadowTertiary),bordered:j(k||(k=d()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),M.colorBorder),hoverable:j(ee||(ee=d()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),M.motionDurationMid,M.motionDurationMid,M.boxShadow),text:j(W||(W=d()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),M.colorTextSecondary),error:j(v||(v=d()([`
      color: `,`;
    `])),M.colorErrorText)}}),b=e(52676),S=["className","bordered","hoverable","children"],u=function(j){var M=j.className,A=j.bordered,de=A===void 0?!1:A,X=j.hoverable,ce=X===void 0?!0:X,c=j.children,h=L()(j,S),l=z(),o=l.cx,r=l.styles;return(0,b.jsx)("div",p()(p()({className:o(r.root,de&&r.bordered,ce&&r.hoverable,M)},h),{},{children:c}))},y=e(38590),g,G=(0,T.kc)(function(oe){var j=oe.css,M=oe.token;return{root:j(g||(g=d()([`
      padding: 12px 24px 20px;
    `])))}}),f=["className","children"],x=function(j){var M=j.className,A=j.children,de=L()(j,f),X=G(),ce=X.styles,c=X.cx;return(0,b.jsx)(y.Z,p()(p()({className:c(ce.root,M),gap:20,vertical:!0},de),{},{children:A}))},C=e(26345),I,K=(0,T.kc)(function(oe){var j=oe.css,M=oe.token,A=oe.prefixCls,de=70;return{root:j(I||(I=d()([`
      &.`,`-descriptions {
        .`,`-descriptions-row {
          & > td {
            padding-top: 4px !important;
            padding-bottom: 4px !important;
          }
          .`,`-descriptions-item {
            &-container {
              .`,`-descriptions-item-label {
                overflow: hidden;
                width: `,`px;
                white-space: nowrap;
              }
              .`,`-descriptions-item-content {
                overflow: hidden;
                display: inline-block;

                width: calc(100% - `,`px);

                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
        }
      }
    `])),A,A,A,A,de,A,de)}}),Q=["className","colon","column","size"],D=function(j){var M=j.className,A=j.colon,de=A===void 0?!1:A,X=j.column,ce=X===void 0?2:X,c=j.size,h=c===void 0?"small":c,l=L()(j,Q),o=K(),r=o.cx,a=o.styles;return(0,b.jsx)(C.Z,p()({className:r(a.root,M),colon:de,column:ce,size:h},l))},w=e(27046),se=e(79214),te=e(159),Y=e(22622),V=e(250),P=e(94729),U,Z,pe,N,B,xe,je,R,he,Se=(0,T.kc)(function(oe,j){var M=oe.css,A=oe.token,de=oe.prefixCls,X=j.divider,ce=X===void 0?!0:X,c=j.iconBg,h=c===void 0?!0:c;return{root:M(U||(U=d()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),ce?20:0,ce&&M(Z||(Z=d()([`
          border-bottom: 1px solid `,`;
        `])),A.colorSplit)),icon:M(pe||(pe=d()([`
        &.`,`-avatar {
          color: `,`;
          `,`
          &.`,`-avatar-square {
            border-radius: 10px;
          }
          .anticon {
            font-size: 40px;
          }
        }
      `])),de,A.colorPrimary,h&&M(N||(N=d()([`
            background-color: `,`;
          `])),A.colorBgLayout),de),titleBox:M(B||(B=d()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),A.marginXXS),title:M(xe||(xe=d()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),A.fontWeightStrong),description:M(je||(je=d()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),de,A.colorTextSecondary),extra:M(R||(R=d()([`
        margin-top: -4px;
      `]))),rightButtons:M(he||(he=d()([`
        justify-content: flex-end;
      `])))}}),O=["className","icon","title","description","extra","divider"],ne=["className","shape","size"],be=["children"],Ee=P.C.Paragraph,me=function(j){var M=j.className,A=j.icon,de=j.title,X=j.description,ce=j.extra,c=j.divider,h=L()(j,O),l=Se({divider:c,iconBg:!(A!=null&&A.src)}),o=l.styles,r=l.cx,a=A||{},s=a.className,t=a.shape,n=t===void 0?"square":t,i=a.size,m=i===void 0?72:i,H=L()(a,ne),F=ce||{},ae=F.children,ie=L()(F,be);return(0,b.jsxs)(y.Z,p()(p()({className:r(o.root,M),gap:20},h),{},{children:[A&&(0,b.jsx)(y.Z,{children:(0,b.jsx)(se.C,p()({className:r(o.icon,s),shape:n,size:m},H))}),(0,b.jsxs)(y.Z,{flex:"1",vertical:!0,children:[(0,b.jsxs)(y.Z,{className:o.titleBox,gap:4,children:[(0,b.jsx)("div",{className:o.title,children:de}),ce&&(0,b.jsx)(y.Z,{align:"flex-start",className:o.extra,justify:"flex-end",onClick:function(fe){return fe.stopPropagation()},children:(0,b.jsx)(te.Z,p()(p()({},ie),{},{children:ae||(0,b.jsx)(Y.ZP,{icon:(0,b.jsx)(w.Z,{icon:V.Z}),size:"small",type:"text"})}))})]}),X&&(0,b.jsx)(Ee,{className:o.description,ellipsis:{rows:2},children:X})]})]}))},Oe=u;Oe.Header=me,Oe.Content=x,Oe.Descriptions=D},46119:function(De,q,e){e.d(q,{q:function(){return g}});var J=e(26068),p=e.n(J),re=e(67825),L=e.n(re),E=e(27046),_=e(62272),d=e(62701),T=e(1718),$=e(65933),k=e(75271),ee=e(53649),W=e.n(ee),v=e(3772),z,b,S=(0,v.kc)(function(G){var f=G.css,x=G.token,C=G.prefixCls;return{root:f(z||(z=W()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),C,C,C),tooltip:f(b||(b=W()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),x.colorTextTertiary)}},{hashPriority:"low"}),u=e(52676),y=["tooltip","className","status","text","color"],g=function(f){var x=f.tooltip,C=f.className,I=f.status,K=f.text,Q=f.color,D=L()(f,y),w=S(),se=w.cx,te=w.styles;return(0,u.jsxs)(_.Z,p()(p()({className:se(te.root,C),size:"small"},D),{},{children:[(0,u.jsx)(d.Z,{status:I,text:K,color:Q}),x&&(0,u.jsx)(T.Z,{className:te.tooltip,title:x,children:(0,u.jsx)(E.Z,{icon:$.Z})})]}))}},94729:function(De,q,e){e.d(q,{Z:function(){return u}});var J=e(26068),p=e.n(J),re=e(48305),L=e.n(re),E=e(67825),_=e.n(E),d=e(60399),T=e(1718),$=e(28026),k=e.n($),ee=e(81792),W=e.n(ee),v=e(18342),z=e(75271),b=e(52676),S=["time","format","relativeTime","tooltip"];k().extend(W());var u=d.Z,y=function(f){return k()(f?new Date(f):new Date).fromNow()},g=function(f){var x,C=f.time,I=f.format,K=f.relativeTime,Q=K===void 0?!0:K,D=f.tooltip,w=_()(f,S),se=(0,z.useState)(y(C)),te=L()(se,2),Y=te[0],V=te[1],P=(0,z.useCallback)(function(N){var B=k()(),xe=k()(N),je=B.diff(xe);if(je>0&&je<60*60*1e3)return setInterval(function(){V(y(N))},60*1e3)},[]);(0,z.useEffect)(function(){var N;return Q&&(N=P(new Date(C))),function(){N&&clearInterval(N)}},[Q,P,C]),(0,z.useEffect)(function(){if(Q){var N=y(C);N!==Y&&(V(N),P(new Date(C)))}},[C,Q,Y,P]);var U=k()(C).format(I||"YYYY-MM-DD HH:mm:ss"),Z=Q?Y:U,pe=(x=D==null?void 0:D.title)!==null&&x!==void 0?x:Q?U:void 0;return pe&&(0,v.Z)(w,"ellipsis.tooltip.title",void 0),(0,b.jsx)(T.Z,p()(p()({},D||{}),{},{title:pe,children:(0,b.jsx)(u.Text,p()(p()({},w),{},{children:Z}))}))};u.Time=g,q.C=u},15094:function(De,q,e){e.d(q,{_:function(){return J}});var J={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}}},82846:function(De,q,e){e.d(q,{J:function(){return v}});var J=e(48305),p=e.n(J),re=e(67825),L=e.n(re),E=e(75271),_=function(){try{var S,u;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((S=window)===null||S===void 0?void 0:S.SpeechRecognition)||((u=window)===null||u===void 0?void 0:u.webkitSpeechRecognition)}catch(y){}},d=function(){try{var S,u;return(globalThis==null?void 0:globalThis.speechSynthesis)||((S=window)===null||S===void 0?void 0:S.speechSynthesis)||((u=window)===null||u===void 0?void 0:u.webkitSpeechSynthesis)}catch(y){}},T=function(){try{var S,u;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((S=window)===null||S===void 0?void 0:S.SpeechSynthesisUtterance)||((u=window)===null||u===void 0?void 0:u.webkitSpeechSynthesisUtterance)}catch(y){}},$=_(),k=d(),ee=T(),W=["voice","rate","pitch"],v=function(S,u){var y=u.voice,g=u.rate,G=u.pitch,f=L()(u,W),x=(0,E.useState)(k==null?void 0:k.getVoices()),C=p()(x,2),I=C[0],K=C[1],Q=(0,E.useState)(S),D=p()(Q,2),w=D[0],se=D[1],te=(0,E.useState)(!1),Y=p()(te,2),V=Y[0],P=Y[1],U=(0,E.useMemo)(function(){if(ee){var N=new ee(w);return N.voice=I.find(function(B){return B.name===y}),N.onstart=function(){return P(!0)},N.onend=function(){return P(!1)},G&&(N.pitch=G*10),g&&(N.rate=g*10),N}},[w,I,g,G,y]);(0,E.useEffect)(function(){k&&(k.onvoiceschanged=function(){K(k==null?void 0:k.getVoices())},k.onstart=function(){return P(!0)},k.onend=function(){return P(!1)})},[]);var Z=(0,E.useCallback)(function(){var N;f==null||(N=f.onStart)===null||N===void 0||N.call(f),k==null||k.speak(U)},[f,U]),pe=(0,E.useCallback)(function(){var N,B;f==null||(N=f.onStop)===null||N===void 0||N.call(f),(B=speechSynthesis)===null||B===void 0||B.cancel(),P(!1)},[f]);return{isLoading:V,setText:se,start:Z,stop:pe}},z=null}}]);
