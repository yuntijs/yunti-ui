"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[39270],{12644:function(Ee,te,e){e.d(te,{h:function(){return y}});var G=e(57724),p=e.n(G),se=e(26068),N=e.n(se),D=e(67825),ne=e.n(D),i=e(62272),w=e(22622),X=e(159),T=e(75271),oe=e(52676),K=["items","onClick","size"],v=["key","label"],R=["key","label"],y=function(u){var x=u.items,g=x===void 0?[]:x,Q=u.onClick,f=Q===void 0?function(){}:Q,j=u.size,P=ne()(u,K);if(g.length<=2)return(0,oe.jsx)(i.Z,N()(N()({align:"end",size:12},P),{},{children:g.map(function(q){var H=q.key,L=q.label,W=ne()(q,v);return(0,oe.jsx)(w.ZP,N()(N()({onClick:function(ge){return f(H,ge)},size:j},W),{},{children:L}),H)})}));var I=p()(g),V=I[0],ae=I.slice(1),E=V,M=E.key,ie=E.label,re=ne()(E,R);return(0,oe.jsx)(X.Z.Button,N()(N()(N()({onClick:function(H){return f(M,H)}},re),{},{menu:{onClick:function(H){var L=H.key,W=H.domEvent;return f(L,W)},items:ae},overlayStyle:{minWidth:100},size:j},P),{},{children:ie}),M)}},79213:function(Ee,te,e){e.d(te,{w:function(){return y}});var G=e(26068),p=e.n(G),se=e(67825),N=e.n(se),D=e(62250),ne=e(75271),i=e(53649),w=e.n(i),X=e(3772),T,oe=(0,X.kc)(function(S){var u=S.css,x=S.token,g=S.prefixCls;return{root:u(T||(T=w()([`
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
    `])),x.margin,g,x.paddingSM,x.paddingSM,x.paddingSM,x.fontSize,x.padding,x.padding,x.paddingSM,x.paddingSM,g,x.paddingXXS,x.colorBgContainer,x.paddingXXS,x.padding)}}),K=e(52676),v=["className","variant"],R=D.Z.Group,y=function(u){var x=u.className,g=u.variant,Q=N()(u,v),f=oe(),j=f.styles,P=f.cx;return(0,K.jsx)(R,p()({className:P(j.root,x),collapsible:g!=="pure",variant:g},Q))}},94456:function(Ee,te,e){e.d(te,{E_:function(){return i},iV:function(){return w},nc:function(){return T},nB:function(){return oe}});var G=e(75271),p=e(56264),se="https://unpkg.com",N="https://registry.npmmirror.com",D=function(v){var R=v.pkg,y=v.version,S=y===void 0?"latest":y,u=v.path,x=v.proxy;switch(x){case"unpkg":return(0,p.Z)(se,"".concat(R,"@").concat(S),u);default:return(0,p.Z)(N,R,S,"files",u)}},ne=e(52676),i=(0,G.createContext)(null),w=(0,G.memo)(function(K){var v=K.children,R=K.config;return(0,ne.jsx)(i.Provider,{value:R,children:v})}),X=function(v){var R=v.pkg,y=v.version,S=v.path;return D({path:S,pkg:R,proxy:"aliyun",version:y})},T=function(){var v=(0,G.useContext)(i);return v?(v==null?void 0:v.proxy)!=="custom"?function(R){var y=R.pkg,S=R.version,u=R.path;return D({path:u,pkg:y,proxy:v.proxy,version:S})}:(v==null?void 0:v.customCdnFn)||X:X},oe=function(){var v=(0,G.useContext)(i);return v==null?void 0:v.Link}},26345:function(Ee,te,e){e.d(te,{w:function(){return g},Z:function(){return Q}});var G=e(26068),p=e.n(G),se=e(67825),N=e.n(se),D=e(85743),ne=e(75271),i=e(53649),w=e.n(i),X=e(3772),T,oe,K,v,R,y,S=(0,X.kc)(function(f,j){var P=f.css,I=f.token,V=f.prefixCls,ae=j.borderedBottom,E=j.borderedBottomDashed,M=j.borderedTop,ie=j.borderedTopDashed,re=j.size,q={small:"".concat(I.paddingXS,"px ").concat(I.padding,"px"),middle:"".concat(I.padding,"px ").concat(I.paddingLG,"px"),default:"".concat(I.paddingSM,"px ").concat(I.paddingLG,"px")},H=ae||E;return{custom:P(T||(T=w()([`
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
      `])),V,V,H&&re&&P(oe||(oe=w()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),V,V,q[re],V),ae&&P(K||(K=w()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),V,I.colorSplit),E&&P(v||(v=w()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),V,I.colorSplit),M&&P(R||(R=w()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),V,I.colorSplit),ie&&P(y||(y=w()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),V,I.colorSplit))}},{hashPriority:"low"}),u=e(52676),x=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],g=function(j){var P=j.className,I=j.borderedBottom,V=j.borderedBottomDashed,ae=j.borderedTop,E=j.borderedTopDashed,M=N()(j,x),ie=S({borderedBottom:I,borderedBottomDashed:V,borderedTop:ae,borderedTopDashed:E,size:M.size}),re=ie.styles,q=ie.cx;return(0,u.jsx)(D.Z,p()(p()({},M),{},{className:q(re.custom,P)}))},Q=g;g.Item=D.Z.Item},82227:function(Ee,te,e){e.d(te,{i:function(){return g},Z:function(){return Q}});var G=e(26068),p=e.n(G),se=e(48305),N=e.n(se),D=e(67825),ne=e.n(D),i=e(30657),w=e(19728),X=e(13761),T=e(62272),oe=e(75271),K=e(53649),v=e.n(K),R=e(3772),y,S=(0,R.kc)(function(f){var j=f.css,P=f.token;return{custom:j(y||(y=v()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),P.colorPrimary,P.colorPrimaryHover)}},{hashPriority:"low"}),u=e(52676),x=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],g=function(j){var P=j.mode,I=P===void 0?"line":P,V=j.content,ae=j.defaultOpen,E=j.iconPlacement,M=E===void 0?"left":E,ie=j.openIcon,re=j.closeIcon,q=j.type,H=ne()(j,x),L=S({}),W=L.styles,Z=I==="expanded",ge=(0,oe.useState)(ae),A=N()(ge,2),F=A[0],je=A[1],ke=re||(0,u.jsx)(i.Z,{}),U=ie||(0,u.jsx)(w.Z,{}),be=Z&&(0,u.jsx)("span",{children:F?ke:U});return I==="line"||q==="vertical"?(0,u.jsx)(X.Z,p()({type:q},H)):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(X.Z,p()(p()({type:q},H),{},{children:(0,u.jsx)("span",{className:Z?W.custom:"",onClick:function(){je(!F)},children:(0,u.jsxs)(T.Z,{size:6,children:[M!=="right"&&be,(0,u.jsx)("span",{children:V}),M==="right"&&be]})})})),Z&&(0,u.jsx)("div",{style:{display:F?"block":"none"},children:j.children})]})},Q=g},65784:function(Ee,te,e){e.d(te,{E:function(){return be}});var G=e(90228),p=e.n(G),se=e(87999),N=e.n(se),D=e(26068),ne=e.n(D),i=e(15558),w=e.n(i),X=e(67825),T=e.n(X),oe=e(3467),K=e(27046),v=e(28562),R=e(1718),y=e(22622),S=e(37805),u=e(38590),x=e(14539),g=e(75271),Q=e(79213),f=e(82092),j=e.n(f),P=e(48305),I=e.n(P),V=e(335),ae=e.n(V),E="__YUNTI_FORM_COLLAPSE_LIST_FIELD_KEY_PATH",M=function(O,_){var fe=[],Se=ae()(O.entries()),ye;try{for(Se.s();!(ye=Se.n()).done;){var xe=I()(ye.value,2),ee=xe[0],b=xe[1];ee===O.length-1?(fe.push(b),_&&fe.push(_)):fe.push(b,"children")}}catch(k){Se.e(k)}finally{Se.f()}return fe},ie=function(O){return O.join("-")},re=function(O){var _=v.Z.useFormInstance(),fe=(0,g.useState)([]),Se=I()(fe,2),ye=Se[0],xe=Se[1],ee=(0,g.useCallback)(function(k){var B=[],J=function $(C,l,h){return C||(C=j()({},E,[])),C[E]=[].concat(w()(h),[l]),C.children&&Array.isArray(C.children)&&(B.push(ie(C[E])),C.children=C.children.map(function(r,o){return $(r,o,C[E])})),C};return{dataSource:(k==null?void 0:k.map(function($,C){return J($,C,[])}))||[],allExpandRowKeys:B}},[]),b=(0,g.useCallback)(function(k,B){var J=B[E];return{add:function(C,l){var h=M(J),r=[O].concat(w()(h),["children"]),o=_.getFieldValue(r)||[];o.push(void 0),o.splice(l!=null?l:o.length,C),_.setFieldValue(r,o),xe(w()(new Set([].concat(w()(ye),[ie(J)]))))},remove:function(C){if(J.length<=1)return k.remove(C);var l=[O].concat(w()(M(J).slice(0,-1))),h=_.getFieldValue(l)||[],r=[];Array.isArray(C)?r.push.apply(r,w()(C)):r.push(C);var o=h.filter(function(c,a){return!r.includes(a)});_.setFieldValue(l,o.length>0?o:void 0)},move:function(C,l){if(J.length<=1)return k.move(C,l);var h=[O].concat(w()(M(J).slice(0,-1))),r=_.getFieldValue(h)||[];if(C<0||l<0||C>=r.length||l>=r.length){console.warn(new Error("\u7D22\u5F15\u8D85\u51FA\u6570\u7EC4\u8303\u56F4"));return}var o=[r[l],r[C]];r[C]=o[0],r[l]=o[1],_.setFieldValue(h,r)}}},[ye,_,O]);return{expandedRowKeys:ye,setExpandedRowKeys:xe,fieldsToDataSource:ee,getFormListOperation:b}},q=e(53649),H=e.n(q),L=e(3772),W,Z,ge,A=(0,L.kc)(function(Ce){var O=Ce.css,_=Ce.token,fe=Ce.prefixCls;return{empty:O(W||(W=H()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),_.paddingXS,_.paddingSM,_.colorTextTertiary),list:O(Z||(Z=H()([`
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
    `])),fe,fe,_.colorTextTertiary,fe,_.marginXS,fe),noFormItem:O(ge||(ge=H()([`
      height: `,`px;
      color: `,`;
    `])),_.controlHeight,_.colorTextTertiary)}}),F=e(52676),je=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style","defaultExpandAllRows","indentSize","rowHoverable"],ke=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width","className"],U=["key"],be=function(O){var _=O.extra,fe=O.expandIcon,Se=O.icon,ye=O.title,xe=O.variant,ee=O.defaultActive,b=O.empty,k=b===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":b,B=O.columns,J=B===void 0?[]:B,$=O.disabled,C=O.readOnly,l=O.addOneFieldDefault,h=O.disableRemoveWhenOneField,r=O.maxFileds,o=O.name,c=O.addParams,a=O.className,d=O.onRemove,t=O.fieldRemoveButton,n=t===void 0?!0:t,s=O.style,m=O.defaultExpandAllRows,Y=O.indentSize,z=O.rowHoverable,le=z===void 0?!0:z,ce=T()(O,je),Te=A(),me=Te.cx,ve=Te.styles,de=(0,g.useRef)(),ue=v.Z.useFormInstance(),pe=v.Z.useWatch(o,ue),Oe=re(o),Le=Oe.expandedRowKeys,ze=Oe.setExpandedRowKeys,Ne=Oe.fieldsToDataSource,we=Oe.getFormListOperation,Ie=(0,g.useMemo)(function(){return Ne(pe)},[pe,Ne]),Be=Ie.dataSource;(0,g.useEffect)(function(){var De=ue.getFieldValue(o),Pe=Ne(De),Me=Pe.allExpandRowKeys;m&&ze(Me)},[m,Ne,ue,o,ze]);var He=(0,g.useCallback)(function(){if(!c)return[];var De=typeof c=="function"?c():c;return[De.defaultValue,De.insertIndex]},[c]),Qe=(0,g.useCallback)(function(De){var Pe=ue.getFieldValue([o,De]);return d==null?void 0:d(Pe)},[ue,o,d]);return(0,g.useEffect)(function(){var De;if(l&&(!(ue!=null&&ue.getFieldValue(o))||(ue==null||(De=ue.getFieldValue(o))===null||De===void 0?void 0:De.length)===0)){var Pe;(Pe=de.current)===null||Pe===void 0||Pe.call.apply(Pe,[de].concat(w()(He())))}},[l,He,ue,o]),(0,F.jsx)(Q.w,{extra:_===void 0?o&&!C&&(0,F.jsx)(R.Z,{title:r&&"\u6700\u591A\u6DFB\u52A0 ".concat(r," \u9879"),children:(0,F.jsx)(y.ZP,{disabled:$||!!(r&&(pe==null?void 0:pe.length)===r),icon:(0,F.jsx)(oe.Z,{}),onClick:function(Pe){var Me;Pe.stopPropagation(),(Me=de.current)===null||Me===void 0||Me.call.apply(Me,[de].concat(w()(He())))},size:"small",type:"text"})}):_,className:a,expandIcon:fe,icon:Se,title:ye,variant:xe,defaultActive:ee,style:s,children:o?(0,F.jsx)(v.Z.List,ne()(ne()({name:o},ce),{},{children:function(Pe,Me){var Ye=Me.add,Ae=Me.remove;return de.current=Ye,(0,F.jsx)(S.Z,{className:ve.list,columns:[].concat(w()(J.map(function(he){var Fe=he.label,Ke=he.name,Ze=he.render,Ue=he.dependencies,Re=he.rules,Je=he.align,We=he.ellipsis,ot=he.fixed,Ve=he.responsive,st=he.shouldCellUpdate,it=he.width,qe=he.className,at=T()(he,ke);return{title:Fe,dataIndex:Ke,align:Je,ellipsis:We,fixed:ot,responsive:Ve,shouldCellUpdate:st,width:it,render:function(ut,rt,$e){var _e=Pe[$e]||{},et=_e.name,tt=rt[E],nt=M(tt).slice(0,-1),lt=_e.key,dt=T()(_e,U),Ge=Ze==null?void 0:Ze(et!=null?et:tt.at(-1),$e,we(Me,rt),nt);if(!Ge&&!at.noStyle)return(0,F.jsx)(u.Z,{align:"center",className:me(ve.noFormItem,qe),children:"\u65E0\u9700\u8BBE\u7F6E"});if(!Ke)return(0,F.jsx)(u.Z,{align:"center",className:me(ve.noFormItem,qe),children:Ge});var Xe={readOnly:C,disabled:$};return C===!0&&(Xe.showCount=!1,Xe.variant="borderless",Xe.placeholder="-"),(0,F.jsx)(v.Z.Item,ne()(ne()(ne()({className:qe},dt),{},{dependencies:typeof Ue=="function"?Ue(nt,$e):Ue,name:M(tt,Ke),rules:typeof Re=="function"?Re(nt,$e):Re},at),{},{children:Ge&&g.cloneElement(Ge,Xe)}),lt)}}})),[!C&&n!==!1&&{title:"",dataIndex:"del",render:function(Fe,Ke,Ze){var Ue=Pe[Ze];if(Ue){var Re=Ue.name;return(0,F.jsx)(v.Z.Item,{children:(0,F.jsx)(y.ZP,{disabled:$||h&&Pe.length===1,icon:(0,F.jsx)(K.Z,{icon:x.Z}),onClick:N()(p()().mark(function Je(){var We;return p()().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:return Ve.next=2,Qe(Re);case 2:We=Ve.sent,We!==!1&&Ae(Re);case 4:case"end":return Ve.stop()}},Je)})),type:"text"})})}}}]).filter(function(he){return!!he}),dataSource:Be,expandable:{expandedRowKeys:Le,columnTitle:(0,F.jsx)("h1",{children:"columnTitle"}),onExpandedRowsChange:function(Fe){ze(Fe)}},indentSize:Y,locale:{emptyText:k},pagination:!1,rowHoverable:le,rowKey:function(Fe){return ie(Fe[E])},size:"small"})}})):(0,F.jsx)("div",{className:ve.empty,children:k})})}},62719:function(Ee,te,e){e.d(te,{E:function(){return p.E},l:function(){return se}});var G=e(28562),p=e(65784),se=G.Z;se.CollapseList=p.E},17853:function(Ee,te,e){e.d(te,{EL:function(){return J},oP:function(){return C}});var G=e(26068),p=e.n(G),se=e(67825),N=e.n(se),D=e(76417),ne=e(92946),i=e(43728),w=e(75271),X=e(48305),T=e.n(X),oe=e(17394),K=e(98721),v=e(97601),R=e(68537),y=e(90142),S=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"],u=e(27046),x=e(71795),g=e(5312),Q=e(90228),f=e.n(Q),j=e(87999),P=e.n(j),I=e(38794),V=e(76940),ae=e(49505),E=e(15094),M=function(h){var r=h?"dark":"light",o=E._.gray[r][11],c=E._.gray[r][7],a=h?E._.red[r][9]:E._.volcano[r][9],d=h?E._.gold[r][9]:E._.orange[r][9],t=h?E._.lime[r][9]:E._.green[r][9],n=h?E._.blue[r][9]:E._.geekblue[r][9];return{colors:{"editor.foreground":o},name:r,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:t},enumMember:{foreground:n},macro:{foreground:t},"parameter.label:dart":{foreground:c},"property:dart":{foreground:t},tomlArrayKey:{foreground:a},"variable.constant":{foreground:t},"variable.defaultLibrary":{foreground:a},"variable:dart":{foreground:t}},tokenColors:[{scope:"meta.embedded",settings:{foreground:c}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:o}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:n}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:t}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:o}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:c}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:a}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:a}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:c}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:d}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:a}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:o}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:n}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:o}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:n}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:t}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:c}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:c}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:a}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:d}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:t}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:o}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:o}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:c}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:c}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:d}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:a}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:t}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:a}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:a}},{name:"java source",scope:"source.java",settings:{foreground:o}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:c}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:d}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:a}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:n}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:o}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:n}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:n}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:n}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:t}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:n}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:t}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:o}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:t}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:n}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:a}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:a}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:o}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:t}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:n}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:o}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:t}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:d}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:c}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:n}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:n}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:n}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:o}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:n}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:n}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:c}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:n}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:n}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:n}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:t}},{name:"python type",scope:"support.type.python",settings:{foreground:n}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:n}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:t}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:c}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:d}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:t}},{name:"Operators",scope:"keyword.operator",settings:{foreground:c}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:n}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:n}},{name:"Keywords",scope:"keyword",settings:{foreground:n}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:a}},{name:"Variables",scope:"variable",settings:{foreground:o}},{name:"Variables",scope:"variable.c",settings:{foreground:c}},{name:"Language variables",scope:"variable.language",settings:{foreground:a}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:c}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:a}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:n}},{name:"Packages",scope:"token.package",settings:{foreground:c}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:d}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:a}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:a}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:a}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:a}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:o}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:a}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:n}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:t}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:d}},{name:"Storage",scope:"storage",settings:{foreground:n}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:n}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:n}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:a}},{name:"Support",scope:"support.function",settings:{foreground:n}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:o}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:c}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:t}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:c}},{name:"Strings",scope:"string",settings:{foreground:t}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:n}},{name:"Integers",scope:"constant.numeric",settings:{foreground:t}},{name:"Constants",scope:"constant",settings:{foreground:t}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:t}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:o}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:t}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:d}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:t}},{name:"Selector",scope:"meta.selector",settings:{foreground:n}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:a}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:d}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:o}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:t}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:a}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:n}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:o}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:c}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:o}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:d}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:d}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:o}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:o}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:c}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:o}},{name:"Broken",scope:"invalid.broken",settings:{foreground:o}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:o}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:t}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:o}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:n}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:n}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:a}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:n}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:n}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:c}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:c}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:a}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:a}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:d}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:c}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:t}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:t}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:d}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:n}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:n}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:n}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:n}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:d}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:n}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:c}},{name:"brace function",scope:"function.brace",settings:{foreground:c}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:c}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:n}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:n}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:n}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:t}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:t}},{name:"sass selector",scope:"selector.sass",settings:{foreground:o}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:a}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:c}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:a}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:o}},{scope:"token.info-token",settings:{foreground:d}},{scope:"token.warn-token",settings:{foreground:t}},{scope:"token.error-token",settings:{foreground:a}},{scope:"token.debug-token",settings:{foreground:n}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:n}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:c}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:n}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:d}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:a}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:o}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:o}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:t}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:t}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:t}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:t}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:n}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:a}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:n}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:a}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:n}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:t}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:n}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:o}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:n}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:a}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:o}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:n}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:o}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:t}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:o}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:a}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:a}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:d}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:o}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:t}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:a}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:n}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:o}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:a}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:a}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:n}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:o}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:n}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:n}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:c}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:t}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:c}},{name:"link",scope:["constant.character.xi"],settings:{foreground:d}},{name:"accent",scope:["accent.xi"],settings:{foreground:d}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:t}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:o}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:c}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:a}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:o}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:c}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:c}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:c}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:c}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:n}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:a}},{scope:["entity.name.variable.field.cs"],settings:{foreground:o}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:o}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:t}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:a}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:c}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:a}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:o}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:a}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:o}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:c}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:n}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:t}},{scope:["constant.character.escape"],settings:{foreground:n}},{scope:["string.regexp"],settings:{foreground:o}},{scope:["log.info"],settings:{foreground:t}},{scope:["log.warning"],settings:{foreground:a}},{scope:["log.error"],settings:{foreground:o}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:r}},ie="txt",re=[ie],q,H=function(){var l=P()(f()().mark(function h(r){var o,c;return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(o=q,c=r.toLowerCase(),!(o&&re.includes(c))){d.next=4;break}return d.abrupt("return",o);case 4:return S.includes(c)&&!re.includes(c)&&re.push(c),d.next=7,(0,V.e$)({langs:re,themes:[M(!0),M(!1)]});case 7:return o=d.sent,q=o,d.abrupt("return",o);case 10:case"end":return d.stop()}},h)}));return function(r){return l.apply(this,arguments)}}(),L=function(h,r,o){return(0,ae.ZP)([r==null?void 0:r.toLowerCase(),o?"dark":"light",h].join("-"),P()(f()().mark(function c(){var a,d,t;return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a=r.toLowerCase(),s.next=4,H(a);case 4:return d=s.sent,t=d==null?void 0:d.codeToHtml(h,{lang:S.includes(a)?a:ie,theme:o?"dark":"light",transformers:[(0,I.hu)(),(0,I.d0)(),(0,I.dY)(),(0,I.Eu)(),(0,I.p4)()]}),s.abrupt("return",t);case 9:return s.prev=9,s.t0=s.catch(0),s.abrupt("return","");case 12:case"end":return s.stop()}},c,null,[[0,9]])})),{revalidateOnFocus:!1})},W=e(53649),Z=e.n(W),ge=e(3772),A,F,je,ke=(0,ge.kc)(function(l){var h=l.css,r=l.token,o=l.cx,c=l.prefixCls,a=l.stylish,d="".concat(c,"-highlighter");return{loading:o(a.blur,h(A||(A=Z()([`
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
      `])),r.fontFamilyCode,r.colorTextTertiary,r.borderRadius)),shiki:o("".concat(d,"-shiki"),h(F||(F=Z()([`
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
      `])),r.colorFillTertiary,r.colorWarningBg,r.colorErrorBg,r.colorFillTertiary,r.colorBorderSecondary,r.borderRadius,r.colorErrorBg,r.colorErrorText,r.colorSuccessBg,r.colorSuccessText)),unshiki:h(je||(je=Z()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),r.colorTextDescription)}}),U=e(52676),be=(0,w.memo)(function(l){var h=l.children,r=l.language,o=l.className,c=l.style,a=ke(),d=a.styles,t=a.cx,n=(0,x.r)(),s=n.isDarkMode,m=L(h.trim(),r,s),Y=m.data,z=m.isLoading;return(0,U.jsxs)(U.Fragment,{children:[z||!Y?(0,U.jsx)("div",{className:t(d.unshiki,o),style:c,children:(0,U.jsx)("pre",{children:(0,U.jsx)("div",{children:h.trim()})})}):(0,U.jsx)("div",{className:t(d.shiki,o),dangerouslySetInnerHTML:{__html:Y},style:c}),z&&(0,U.jsx)(y.D,{align:"center",className:d.loading,gap:8,horizontal:!0,justify:"center",children:(0,U.jsx)(u.Z,{icon:g.Z,spin:!0})})]})}),Ce,O,_,fe,Se,ye,xe,ee,b=(0,ge.kc)(function(l,h){var r=l.token,o=l.css,c=l.cx,a=l.prefixCls,d=l.stylish,t="".concat(a,"-highlighter"),n="".concat(t,"-hover-btn"),s="".concat(t,"-hover-lang"),m=o(Ce||(Ce=Z()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),h==="block"?r.colorFillTertiary:"transparent",h==="block"?"transparent":r.colorBorder,h==="block"?r.colorFillTertiary:r.colorFillQuaternary);return{button:c(n,o(O||(O=Z()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),h==="pure"?0:"12px",h==="pure"?0:"12px")),container:c(t,h!=="pure"&&m,o(_||(_=Z()([`
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
        `])),r.borderRadius,r.motionEaseOut,n,s,h==="pure"?0:"16px")),header:o(fe||(fe=Z()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),r.colorFillQuaternary),lang:c(s,d.blur,o(Se||(Se=Z()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),r.fontFamilyCode,r.colorTextSecondary)),nowrap:o(ye||(ye=Z()([`
        code {
          text-wrap: nowrap !important;
        }
      `]))),scroller:o(xe||(xe=Z()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:o(ee||(ee=Z()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),r.colorTextDescription,a,r.colorTextDescription)}}),k=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],B=S.map(function(l){return{label:l,value:l.toLowerCase()}}),J=(0,w.memo)(function(l){var h=l.children,r=l.language,o=r===void 0?"markdown":r,c=l.className,a=l.style,d=l.allowChangeLanguage,t=d===void 0?!1:d,n=l.fileName,s=l.icon,m=l.contentStyle,Y=N()(l,k),z=(0,w.useState)(!0),le=T()(z,2),ce=le[0],Te=le[1],me=(0,w.useState)(o||"markdown"),ve=T()(me,2),de=ve[0],ue=ve[1],pe=b("block"),Oe=pe.styles,Le=pe.cx,ze=Le(Oe.container,c);return(0,U.jsxs)("div",p()(p()({className:ze,"data-code-type":"highlighter",style:a},Y),{},{children:[(0,U.jsxs)(y.D,{align:"center",className:Oe.header,horizontal:!0,justify:"space-between",children:[(0,U.jsx)(oe.Z,{icon:ce?v.Z:R.Z,onClick:function(){return Te(!ce)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),t&&!n?(0,U.jsx)(K.default,{className:Oe.select,onSelect:ue,options:B,size:"small",suffixIcon:!1,value:de.toLowerCase(),variant:"borderless"}):(0,U.jsxs)(y.D,{align:"center",className:Oe.select,gap:2,horizontal:!0,children:[s,(0,U.jsx)("span",{children:n||de})]}),(0,U.jsx)(ne.Z,{content:h,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,U.jsx)(be,{language:de==null?void 0:de.toLowerCase(),style:ce?m:p()(p()({},m),{},{height:0,overflow:"hidden"}),children:h})]}))}),$=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap"],C=(0,w.memo)(function(l){var h=l.fullFeatured,r=l.copyButtonSize,o=r===void 0?"site":r,c=l.children,a=l.language,d=l.className,t=l.style,n=l.copyable,s=n===void 0?!0:n,m=l.showLanguage,Y=m===void 0?!0:m,z=l.type,le=z===void 0?"block":z,ce=l.spotlight,Te=l.allowChangeLanguage,me=l.fileName,ve=l.icon,de=l.contentStyle,ue=l.wrap,pe=N()(l,$),Oe=b(le),Le=Oe.styles,ze=Oe.cx,Ne=ze(Le.container,!ue&&Le.nowrap,d);return h?(0,U.jsx)(J,p()(p()({allowChangeLanguage:Te,className:d,contentStyle:de,fileName:me,icon:ve,language:a,style:t},pe),{},{children:c})):(0,U.jsxs)("div",p()(p()({className:Ne,"data-code-type":"highlighter",style:t},pe),{},{children:[ce&&(0,U.jsx)(D.Z,{size:240}),s&&(0,U.jsx)(ne.Z,{className:Le.button,content:c,placement:"left",size:o}),Y&&a&&(0,U.jsx)(i.Z,{className:Le.lang,children:a.toLowerCase()}),(0,U.jsx)("div",{className:Le.scroller,children:(0,U.jsx)(be,{language:a==null?void 0:a.toLowerCase(),style:de,children:c})})]}))})},33985:function(Ee,te,e){e.d(te,{h:function(){return q},P:function(){return R.Pz}});var G=e(26068),p=e.n(G),se=e(48305),N=e.n(se),D=e(67825),ne=e.n(D),i=e(17394),w=e(92946),X=e(38590),T=e(71795),oe=e(97601),K=e(68537),v=e(75271),R=e(2998),y=e(86590),S=e(4643),u=e(94729),x=e(53649),g=e.n(x),Q=e(3772),f,j,P,I,V,ae,E=(0,Q.kc)(function(H,L){var W=H.token,Z=H.css,ge=H.cx,A=H.prefixCls,F="".concat(A,"-json-viewer"),je=L==="block",ke=Z(f||(f=g()([`
      background-color: `,`;

      &:hover {
        background-color: `,`;
      }
    `])),je?W.colorFillTertiary:"transparent",je?W.colorFillTertiary:W.colorFillQuaternary);return{container:ge(F,L!=="pure"&&ke,Z(j||(j=g()([`
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
        `])),W.borderRadius,W.motionEaseOut)),content:Z(P||(P=g()([`
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),L==="pure"?0:W.padding),header:Z(I||(I=g()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),W.colorFillQuaternary),title:Z(V||(V=g()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),W.margin),titleText:Z(ae||(ae=g()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),W.fontSize,A,W.colorTextDescription)}}),M=e(52676),ie=["type","fullFeatured","title","icon","contentStyle","classNames","className","collapseStringMode","collapsed","dark","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],re=u.C.Text,q=function(L){var W=L.type,Z=W===void 0?"block":W,ge=L.fullFeatured,A=ge===void 0?!1:ge,F=L.title,je=F===void 0?"json":F,ke=L.icon,U=L.contentStyle,be=L.classNames,Ce=L.className,O=L.collapseStringMode,_=O===void 0?"directly":O,fe=L.collapsed,Se=fe===void 0?2:fe,ye=L.dark,xe=L.displaySize,ee=xe===void 0?"collapsed":xe,b=L.ignoreLargeArray,k=b===void 0?!1:b,B=L.matchesURL,J=B===void 0?!0:B,$=L.src,C=L.theme,l=C===void 0?"default":C,h=L.style,r=ne()(L,ie),o=(0,T.r)(),c=o.isDarkMode,a=E(A?"block":Z),d=a.styles,t=a.cx,n=(0,v.useState)(!0),s=N()(n,2),m=s[0],Y=s[1],z=(0,v.useMemo)(function(){return(0,R.Pz)($)},[$]),le=(0,M.jsx)(R.ZP,p()({collapseStringMode:_,collapsed:Se,dark:ye!=null?ye:c,displaySize:ee,ignoreLargeArray:k,matchesURL:J,src:$,theme:l},r));return(0,M.jsxs)(X.Z,{className:t(d.container,Ce),style:h,vertical:!0,children:[A&&(0,M.jsxs)(X.Z,{align:"center",className:t(d.header,be==null?void 0:be.header),justify:"space-between",children:[(0,M.jsx)(i.Z,{icon:m?oe.Z:K.Z,onClick:function(){return Y(!m)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),(0,M.jsxs)(X.Z,{align:"center",className:d.title,flex:1,gap:2,justify:"center",title:je,children:[ke,(0,M.jsx)(X.Z,{className:d.titleText,children:(0,M.jsx)(re,{ellipsis:!0,children:je})})]}),(0,M.jsx)(w.Z,{content:z,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,M.jsx)(X.Z,{className:t(d.content,be==null?void 0:be.content),flex:1,style:m?U:p()(p()({},U),{},{height:0,maxHeight:0,padding:0,overflow:"hidden"}),children:le})]})}},40305:function(Ee,te,e){e.d(te,{T:function(){return a}});var G=e(26068),p=e.n(G),se=e(67825),N=e.n(se),D=e(75271),ne=e(87902),i=e(52676),w=["to","children"],X=function(t){var n=t.to,s=t.children,m=N()(t,w);return(0,i.jsx)("a",p()(p()({href:"#".concat(n)},m),{},{children:s}))},T=(0,D.createContext)({loading:!1,Link:X}),oe=["to","Link","children"],K=function(t){var n=t.to,s=t.Link,m=t.children,Y=N()(t,oe);return s?(0,i.jsx)(s,p()(p()({to:n},Y),{},{children:m})):(0,i.jsx)("a",p()(p()({href:"#".concat(n)},Y),{},{children:m}))},v=function(t){var n=(0,D.useContext)(T),s=n.Link,m=n.breadcrumb;(0,D.useEffect)(function(){var z;m==null||(z=m.setItems)===null||z===void 0||z.call(m,t.items)},[m,t.items]);var Y=(0,D.useCallback)(function(z,le,ce,Te){var me,ve,de=z.href?z.href===((me=ce.at(-1))===null||me===void 0?void 0:me.href):z.path===((ve=ce.at(-1))===null||ve===void 0?void 0:ve.path);if(de)return(0,i.jsx)("span",{children:z.title});var ue=z.href?z.href:"/".concat(Te.join("/"));return(0,i.jsx)(K,{Link:s,to:ue,children:z.title})},[s]);return(0,i.jsx)(ne.Z,p()({itemRender:Y},t))},R=e(10780),y=e(22622),S=e(91488),u=e(38590),x=e(53649),g=e.n(x),Q=e(3772),f,j=(0,Q.kc)(function(d){var t=d.css,n=d.token;return{root:t(f||(f=g()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),P=["className","children"],I={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},V=function(t){var n=t.className,s=t.children,m=N()(t,P),Y=j(),z=Y.styles,le=Y.cx,ce=(0,D.useContext)(T),Te=ce.loading,me=ce.breadcrumb,ve=ce.Link,de=ce.status,ue=(0,D.useCallback)(function(){if(de){var pe;return(0,i.jsx)(R.ZP,{extra:(0,i.jsx)(ve,{to:me==null||(pe=me.items)===null||pe===void 0||(pe=pe[0])===null||pe===void 0?void 0:pe.path,children:(0,i.jsx)(y.ZP,{type:"primary",children:"Go Back"})}),status:de,subTitle:I[de],title:de})}return s},[de,s,ve,me==null?void 0:me.items]);return Te?(0,i.jsx)(S.Z,{active:!0,className:le(z.root,n)}):(0,i.jsx)(u.Z,p()(p()({className:le(z.root,n),gap:20,vertical:!0},m),{},{children:ue()}))},ae=function(){return(0,i.jsx)(i.Fragment,{})},E=e(48305),M=e.n(E),ie=e(335),re=e.n(ie),q=e(1718),H=e(12644),L=e(82227),W=e(46119),Z=e(94729),ge=e(79214),A=["shape","size","src"],F=function(t){if(typeof t=="number")return t;switch(t){case"small":return 40;case"large":return 88;default:return 64}},je=function(t){var n=t.shape,s=n===void 0?"square":n,m=t.size,Y=t.src,z=N()(t,A),le=(0,D.useMemo)(function(){return F(m)},[m]);return(0,i.jsx)(ge.C,p()({shape:s,size:le,src:Y},z))},ke,U,be,Ce,O,_,fe,Se,ye,xe=(0,Q.kc)(function(d,t){var n=d.css,s=d.token,m=d.prefixCls,Y=t.bordered,z=Y===void 0?!1:Y,le=t.divider,ce=le===void 0?!0:le;return{root:z?n(ke||(ke=g()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),s.marginXS,s.padding,s.colorBgBase,s.borderRadius,s.boxShadowTertiary):n(U||(U=g()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),s.paddingXS,s.marginXS,ce&&n(be||(be=g()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),s.paddingLG,s.colorSplit)),icon:n(Ce||(Ce=g()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),m,m,s.colorPrimary,m),titleBox:n(O||(O=g()([`
        margin-bottom: `,`px;
      `])),s.marginSM),subTitle:n(_||(_=g()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),s.marginXXS,m,s.fontSize,s.colorTextSecondary),title:n(fe||(fe=g()([`
        font-size: `,`px;
        font-weight: 700;
      `])),s.fontSizeHeading5),descriptions:n(Se||(Se=g()([`
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
      `])),s.marginXXS,s.fontSize,s.colorTextSecondary,m,m,s.fontSize,m,s.fontSize,s.colorTextSecondary),rightButtons:n(ye||(ye=g()([`
        justify-content: flex-end;
      `])))}}),ee=["className","classNames","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],b=Z.C.Paragraph,k=function(t){var n=t.className,s=t.classNames,m=t.icon,Y=t.title,z=t.titleRender,le=t.subTitle,ce=t.status,Te=t.descriptions,me=Te===void 0?[]:Te,ve=t.descriptionsRender,de=t.extraContent,ue=de===void 0?{}:de,pe=t.extraContentRender,Oe=t.bordered,Le=t.divider,ze=N()(t,ee),Ne=xe({bordered:Oe,divider:Le}),we=Ne.styles,Ie=Ne.cx,Be=(0,D.useMemo)(function(){return!m||typeof m=="string"?{src:m,size:le?"large":"default"}:(le&&m.size===void 0&&(m.size="large"),m)},[m,le]),He=(0,D.useMemo)(function(){var Ae=(0,i.jsx)("span",{className:Ie(we.title,s==null?void 0:s.title),children:Y});return z?z(Ae):Ae},[s==null?void 0:s.title,Ie,we.title,Y,z]),Qe=(0,D.useMemo)(function(){var Ae=[],he=re()(me.filter(function(We){return!!We}).entries()),Fe;try{for(he.s();!(Fe=he.n()).done;){var Ke=M()(Fe.value,2),Ze=Ke[0],Ue=Ke[1],Re=Ue.icon,Je=Ue.text;(ce||Ze>=1)&&Ae.push((0,i.jsx)(L.Z,{dashed:!1,type:"vertical"},"divider-".concat(Ze))),Ae.push((0,i.jsxs)(u.Z,{align:"center",gap:4,children:[Re&&(0,i.jsx)(q.Z,{title:Re.tooltip,children:Re.content}),(0,i.jsx)("span",{children:Je})]},"desc-".concat(Ze)))}}catch(We){he.e(We)}finally{he.f()}return ve?ve(Ae):Ae},[me,ve,ce]),De=(0,D.useMemo)(function(){if(!ue&&!pe)return null;var Ae=(0,i.jsx)(H.h,p()({className:we.rightButtons},ue));return pe?pe(Ae):Ae},[ue,pe,we.rightButtons]),Pe=(0,D.useContext)(T),Me=Pe.loading,Ye=Pe.status;return Me?(0,i.jsxs)(u.Z,{className:Ie(we.root,n),gap:20,children:[(0,i.jsx)(u.Z,{children:(0,i.jsx)(S.Z.Avatar,{active:!0,className:we.icon,shape:Be==null?void 0:Be.shape,size:F(Be==null?void 0:Be.size)})}),(0,i.jsxs)(u.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,i.jsxs)("div",{className:we.titleBox,children:[(0,i.jsx)(S.Z.Input,{active:!0,size:25}),le&&(0,i.jsx)("div",{className:Ie(we.subTitle,n),children:(0,i.jsx)(S.Z.Input,{active:!0,size:18})})]}),(0,i.jsx)(S.Z.Input,{active:!0,size:18})]}),(0,i.jsx)(u.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,i.jsx)(S.Z.Button,{active:!0})})]}):Ye?null:(0,i.jsxs)(u.Z,p()(p()({className:Ie(we.root,n),gap:20},ze),{},{children:[Be&&(0,i.jsx)(u.Z,{children:(0,i.jsx)(je,p()({className:we.icon},Be))}),(0,i.jsxs)(u.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,i.jsxs)(u.Z,{className:Ie(we.titleBox,s==null?void 0:s.titleWrapper),vertical:!0,children:[He,le&&(0,i.jsx)(b,{className:Ie(we.subTitle,s==null?void 0:s.subTitle),ellipsis:{rows:2},children:le})]}),(0,i.jsxs)(u.Z,{align:"center",className:Ie(we.descriptions,s==null?void 0:s.descriptions),gap:4,children:[ce&&(0,i.jsx)(W.q,p()({},ce)),Qe]})]}),(0,i.jsx)(u.Z,{align:"center",className:s==null?void 0:s.extraContent,flex:"1",justify:"flex-end",children:De})]}))},B=e(94456),J,$=(0,Q.kc)(function(d){var t=d.css,n=d.token;return{root:t(J||(J=g()([`
      width: inherit;
      height: 100%;
      min-height: inherit;
      padding: `,"px ","px ",`px;
    `])),n.padding,n.paddingLG,n.paddingXL)}}),C=["loading","className","children","Link","status","gap"],l=function(t){var n=(0,B.nB)(),s=t.loading,m=t.className,Y=t.children,z=t.Link,le=z===void 0?n||X:z,ce=t.status,Te=t.gap,me=Te===void 0?16:Te,ve=N()(t,C),de=$(ve),ue=de.styles,pe=de.cx,Oe=(0,D.useState)([]),Le=M()(Oe,2),ze=Le[0],Ne=Le[1];return(0,i.jsx)(u.Z,p()(p()({className:pe(ue.root,m),gap:me,vertical:!0},ve),{},{children:(0,i.jsx)(T.Provider,{value:{loading:s,Link:le,breadcrumb:{items:ze,setItems:Ne},status:ce},children:Y})}))},h,r=(0,Q.kc)(function(d){var t=d.css,n=d.token;return{root:t(h||(h=g()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),n.fontFamily,n.fontWeightStrong,n.lineHeight,n.colorText)}}),o=["className"],c=function(t){var n=t.className,s=N()(t,o),m=r(),Y=m.cx,z=m.styles;return(0,i.jsx)("h2",p()({className:Y(z.root,n)},s))},a=l;a.Breadcrumb=v,a.Title=c,a.Header=k,a.Content=V,a.Footer=ae},86346:function(Ee,te,e){e.d(te,{Q:function(){return xe}});var G=e(26068),p=e.n(G),se=e(67825),N=e.n(se),D=e(75271),ne=e(53649),i=e.n(ne),w=e(3772),X,T,oe,K,v,R=(0,w.kc)(function(ee){var b=ee.css,k=ee.token,B=ee.prefixCls;return{root:b(X||(X=i()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),k.fontFamily,k.colorText,k.colorBgContainer,k.borderRadius*2,k.boxShadowTertiary),bordered:b(T||(T=i()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),k.colorBorder),hoverable:b(oe||(oe=i()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),k.motionDurationMid,k.motionDurationMid,k.boxShadow),text:b(K||(K=i()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),k.colorTextSecondary),error:b(v||(v=i()([`
      color: `,`;
    `])),k.colorErrorText)}}),y=e(52676),S=["className","bordered","hoverable","children"],u=function(b){var k=b.className,B=b.bordered,J=B===void 0?!1:B,$=b.hoverable,C=$===void 0?!0:$,l=b.children,h=N()(b,S),r=R(),o=r.cx,c=r.styles;return(0,y.jsx)("div",p()(p()({className:o(c.root,J&&c.bordered,C&&c.hoverable,k)},h),{},{children:l}))},x=e(38590),g,Q=(0,w.kc)(function(ee){var b=ee.css,k=ee.token;return{root:b(g||(g=i()([`
      padding: 12px 24px 20px;
    `])))}}),f=["className","children"],j=function(b){var k=b.className,B=b.children,J=N()(b,f),$=Q(),C=$.styles,l=$.cx;return(0,y.jsx)(x.Z,p()(p()({className:l(C.root,k),gap:20,vertical:!0},J),{},{children:B}))},P=e(26345),I,V=(0,w.kc)(function(ee){var b=ee.css,k=ee.token,B=ee.prefixCls,J=70;return{root:b(I||(I=i()([`
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
    `])),B,B,B,B,J,B,J)}}),ae=["className","colon","column","size"],E=function(b){var k=b.className,B=b.colon,J=B===void 0?!1:B,$=b.column,C=$===void 0?2:$,l=b.size,h=l===void 0?"small":l,r=N()(b,ae),o=V(),c=o.cx,a=o.styles;return(0,y.jsx)(P.Z,p()({className:c(a.root,k),colon:J,column:C,size:h},r))},M=e(27046),ie=e(79214),re=e(159),q=e(22622),H=e(250),L=e(94729),W,Z,ge,A,F,je,ke,U,be,Ce=(0,w.kc)(function(ee,b){var k=ee.css,B=ee.token,J=ee.prefixCls,$=b.divider,C=$===void 0?!0:$,l=b.iconBg,h=l===void 0?!0:l;return{root:k(W||(W=i()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),C?20:0,C&&k(Z||(Z=i()([`
          border-bottom: 1px solid `,`;
        `])),B.colorSplit)),icon:k(ge||(ge=i()([`
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
      `])),J,B.colorPrimary,h&&k(A||(A=i()([`
            background-color: `,`;
          `])),B.colorBgLayout),J),titleBox:k(F||(F=i()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),B.marginXXS),title:k(je||(je=i()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),B.fontWeightStrong),description:k(ke||(ke=i()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),J,B.colorTextSecondary),extra:k(U||(U=i()([`
        margin-top: -4px;
      `]))),rightButtons:k(be||(be=i()([`
        justify-content: flex-end;
      `])))}}),O=["className","icon","title","description","extra","divider"],_=["className","shape","size"],fe=["children"],Se=L.C.Paragraph,ye=function(b){var k=b.className,B=b.icon,J=b.title,$=b.description,C=b.extra,l=b.divider,h=N()(b,O),r=Ce({divider:l,iconBg:!(B!=null&&B.src)}),o=r.styles,c=r.cx,a=B||{},d=a.className,t=a.shape,n=t===void 0?"square":t,s=a.size,m=s===void 0?72:s,Y=N()(a,_),z=C||{},le=z.children,ce=N()(z,fe);return(0,y.jsxs)(x.Z,p()(p()({className:c(o.root,k),gap:20},h),{},{children:[B&&(0,y.jsx)(x.Z,{children:(0,y.jsx)(ie.C,p()({className:c(o.icon,d),shape:n,size:m},Y))}),(0,y.jsxs)(x.Z,{flex:"1",vertical:!0,children:[(0,y.jsxs)(x.Z,{className:o.titleBox,gap:4,children:[(0,y.jsx)("div",{className:o.title,children:J}),C&&(0,y.jsx)(x.Z,{align:"flex-start",className:o.extra,justify:"flex-end",onClick:function(me){return me.stopPropagation()},children:(0,y.jsx)(re.Z,p()(p()({},ce),{},{children:le||(0,y.jsx)(q.ZP,{icon:(0,y.jsx)(M.Z,{icon:H.Z}),size:"small",type:"text"})}))})]}),$&&(0,y.jsx)(Se,{className:o.description,ellipsis:{rows:2},children:$})]})]}))},xe=u;xe.Header=ye,xe.Content=j,xe.Descriptions=E},46119:function(Ee,te,e){e.d(te,{q:function(){return g}});var G=e(26068),p=e.n(G),se=e(67825),N=e.n(se),D=e(27046),ne=e(62272),i=e(62701),w=e(1718),X=e(65933),T=e(75271),oe=e(53649),K=e.n(oe),v=e(3772),R,y,S=(0,v.kc)(function(Q){var f=Q.css,j=Q.token,P=Q.prefixCls;return{root:f(R||(R=K()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),P,P,P),tooltip:f(y||(y=K()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),j.colorTextTertiary)}},{hashPriority:"low"}),u=e(52676),x=["tooltip","className","status","text","color"],g=function(f){var j=f.tooltip,P=f.className,I=f.status,V=f.text,ae=f.color,E=N()(f,x),M=S(),ie=M.cx,re=M.styles;return(0,u.jsxs)(ne.Z,p()(p()({className:ie(re.root,P),size:"small"},E),{},{children:[(0,u.jsx)(i.Z,{status:I,text:V,color:ae}),j&&(0,u.jsx)(w.Z,{className:re.tooltip,title:j,children:(0,u.jsx)(D.Z,{icon:X.Z})})]}))}},94729:function(Ee,te,e){e.d(te,{Z:function(){return u}});var G=e(26068),p=e.n(G),se=e(48305),N=e.n(se),D=e(67825),ne=e.n(D),i=e(60399),w=e(1718),X=e(28026),T=e.n(X),oe=e(81792),K=e.n(oe),v=e(18342),R=e(75271),y=e(52676),S=["time","format","relativeTime","tooltip"];T().extend(K());var u=i.Z,x=function(f){return T()(f?new Date(f):new Date).fromNow()},g=function(f){var j,P=f.time,I=f.format,V=f.relativeTime,ae=V===void 0?!0:V,E=f.tooltip,M=ne()(f,S),ie=(0,R.useState)(x(P)),re=N()(ie,2),q=re[0],H=re[1],L=(0,R.useCallback)(function(A){var F=T()(),je=T()(A),ke=F.diff(je);if(ke>0&&ke<60*60*1e3)return setInterval(function(){H(x(A))},60*1e3)},[]);(0,R.useEffect)(function(){var A;return ae&&(A=L(new Date(P))),function(){A&&clearInterval(A)}},[ae,L,P]),(0,R.useEffect)(function(){if(ae){var A=x(P);A!==q&&(H(A),L(new Date(P)))}},[P,ae,q,L]);var W=T()(P).format(I||"YYYY-MM-DD HH:mm:ss"),Z=ae?q:W,ge=(j=E==null?void 0:E.title)!==null&&j!==void 0?j:ae?W:void 0;return ge&&(0,v.Z)(M,"ellipsis.tooltip.title",void 0),(0,y.jsx)(w.Z,p()(p()({},E||{}),{},{title:ge,children:(0,y.jsx)(u.Text,p()(p()({},M),{},{children:Z}))}))};u.Time=g,te.C=u},15094:function(Ee,te,e){e.d(te,{_:function(){return G}});var G={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}}},82846:function(Ee,te,e){e.d(te,{J:function(){return v}});var G=e(48305),p=e.n(G),se=e(67825),N=e.n(se),D=e(75271),ne=function(){try{var S,u;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((S=window)===null||S===void 0?void 0:S.SpeechRecognition)||((u=window)===null||u===void 0?void 0:u.webkitSpeechRecognition)}catch(x){}},i=function(){try{var S,u;return(globalThis==null?void 0:globalThis.speechSynthesis)||((S=window)===null||S===void 0?void 0:S.speechSynthesis)||((u=window)===null||u===void 0?void 0:u.webkitSpeechSynthesis)}catch(x){}},w=function(){try{var S,u;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((S=window)===null||S===void 0?void 0:S.SpeechSynthesisUtterance)||((u=window)===null||u===void 0?void 0:u.webkitSpeechSynthesisUtterance)}catch(x){}},X=ne(),T=i(),oe=w(),K=["voice","rate","pitch"],v=function(S,u){var x=u.voice,g=u.rate,Q=u.pitch,f=N()(u,K),j=(0,D.useState)(T==null?void 0:T.getVoices()),P=p()(j,2),I=P[0],V=P[1],ae=(0,D.useState)(S),E=p()(ae,2),M=E[0],ie=E[1],re=(0,D.useState)(!1),q=p()(re,2),H=q[0],L=q[1],W=(0,D.useMemo)(function(){if(oe){var A=new oe(M);return A.voice=I.find(function(F){return F.name===x}),A.onstart=function(){return L(!0)},A.onend=function(){return L(!1)},Q&&(A.pitch=Q*10),g&&(A.rate=g*10),A}},[M,I,g,Q,x]);(0,D.useEffect)(function(){T&&(T.onvoiceschanged=function(){V(T==null?void 0:T.getVoices())},T.onstart=function(){return L(!0)},T.onend=function(){return L(!1)})},[]);var Z=(0,D.useCallback)(function(){var A;f==null||(A=f.onStart)===null||A===void 0||A.call(f),T==null||T.speak(W)},[f,W]),ge=(0,D.useCallback)(function(){var A,F;f==null||(A=f.onStop)===null||A===void 0||A.call(f),(F=speechSynthesis)===null||F===void 0||F.cancel(),L(!1)},[f]);return{isLoading:H,setText:ie,start:Z,stop:ge}},R=null}}]);
