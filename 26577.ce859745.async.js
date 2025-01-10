"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[26577],{12644:function(ke,$,e){e.d($,{h:function(){return b}});var J=e(57724),d=e.n(J),ne=e(26068),T=e.n(ne),O=e(67825),G=e.n(O),s=e(43356),N=e(71170),oe=e(5053),k=e(75271),X=e(52676),F=["items","onClick","size"],m=["key","label"],I=["key","label"],b=function(c){var y=c.items,x=y===void 0?[]:y,K=c.onClick,g=K===void 0?function(){}:K,v=c.size,S=G()(c,F);if(x.length<=2)return(0,X.jsx)(s.Z,T()(T()({align:"end",size:12},S),{},{children:x.map(function(V){var re=V.key,_=V.label,P=G()(V,m);return(0,X.jsx)(N.ZP,T()(T()({onClick:function(ce){return g(re,ce)},size:v},P),{},{children:_}),re)})}));var L=d()(x),W=L[0],Q=L.slice(1),M=W,w=M.key,se=M.label,Y=G()(M,I);return(0,X.jsx)(oe.Z.Button,T()(T()(T()({onClick:function(re){return g(w,re)}},Y),{},{menu:{onClick:function(re){var _=re.key,P=re.domEvent;return g(_,P)},items:Q},overlayStyle:{minWidth:100},size:v},S),{},{children:se}),w)}},79213:function(ke,$,e){e.d($,{w:function(){return b}});var J=e(26068),d=e.n(J),ne=e(67825),T=e.n(ne),O=e(19556),G=e(75271),s=e(53649),N=e.n(s),oe=e(47512),k,X=(0,oe.kc)(function(h){var c=h.css,y=h.token,x=h.prefixCls;return{root:c(k||(k=N()([`
      margin-bottom: `,`px;
      .`,`-collapse {
        &-header {
          padding: 0 !important;
          &-text {
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
    `])),y.margin,x,y.paddingSM,y.paddingSM,y.paddingSM,y.fontSize,y.padding,y.padding,y.paddingSM,y.paddingSM,x,y.paddingXXS,y.colorBgContainer,y.paddingXXS,y.padding)}}),F=e(52676),m=["className","variant"],I=O.Z.Group,b=function(c){var y=c.className,x=c.variant,K=T()(c,m),g=X(),v=g.styles,S=g.cx;return(0,F.jsx)(I,d()({className:S(v.root,y),collapsible:x!=="pure",variant:x},K))}},94456:function(ke,$,e){e.d($,{E_:function(){return s},iV:function(){return N},nc:function(){return k},nB:function(){return X}});var J=e(75271),d=e(56264),ne="https://unpkg.com",T="https://registry.npmmirror.com",O=function(m){var I=m.pkg,b=m.version,h=b===void 0?"latest":b,c=m.path,y=m.proxy;switch(y){case"unpkg":return(0,d.Z)(ne,"".concat(I,"@").concat(h),c);default:return(0,d.Z)(T,I,h,"files",c)}},G=e(52676),s=(0,J.createContext)(null),N=(0,J.memo)(function(F){var m=F.children,I=F.config;return(0,G.jsx)(s.Provider,{value:I,children:m})}),oe=function(m){var I=m.pkg,b=m.version,h=m.path;return O({path:h,pkg:I,proxy:"aliyun",version:b})},k=function(){var m=(0,J.useContext)(s);return m?(m==null?void 0:m.proxy)!=="custom"?function(I){var b=I.pkg,h=I.version,c=I.path;return O({path:c,pkg:b,proxy:m.proxy,version:h})}:(m==null?void 0:m.customCdnFn)||oe:oe},X=function(){var m=(0,J.useContext)(s);return m==null?void 0:m.Link}},26345:function(ke,$,e){e.d($,{w:function(){return x},Z:function(){return K}});var J=e(26068),d=e.n(J),ne=e(67825),T=e.n(ne),O=e(51866),G=e(75271),s=e(53649),N=e.n(s),oe=e(47512),k,X,F,m,I,b,h=(0,oe.kc)(function(g,v){var S=g.css,L=g.token,W=g.prefixCls,Q=v.borderedBottom,M=v.borderedBottomDashed,w=v.borderedTop,se=v.borderedTopDashed,Y=v.size,V={small:"".concat(L.paddingXS,"px ").concat(L.padding,"px"),middle:"".concat(L.padding,"px ").concat(L.paddingLG,"px"),default:"".concat(L.paddingSM,"px ").concat(L.paddingLG,"px")},re=Q||M;return{custom:S(k||(k=N()([`
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
      `])),W,W,re&&Y&&S(X||(X=N()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),W,W,V[Y],W),Q&&S(F||(F=N()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),W,L.colorSplit),M&&S(m||(m=N()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),W,L.colorSplit),w&&S(I||(I=N()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),W,L.colorSplit),se&&S(b||(b=N()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),W,L.colorSplit))}},{hashPriority:"low"}),c=e(52676),y=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],x=function(v){var S=v.className,L=v.borderedBottom,W=v.borderedBottomDashed,Q=v.borderedTop,M=v.borderedTopDashed,w=T()(v,y),se=h({borderedBottom:L,borderedBottomDashed:W,borderedTop:Q,borderedTopDashed:M,size:w.size}),Y=se.styles,V=se.cx;return(0,c.jsx)(O.Z,d()(d()({},w),{},{className:V(Y.custom,S)}))},K=x;x.Item=O.Z.Item},82227:function(ke,$,e){e.d($,{i:function(){return x},Z:function(){return K}});var J=e(26068),d=e.n(J),ne=e(48305),T=e.n(ne),O=e(67825),G=e.n(O),s=e(30657),N=e(19728),oe=e(64263),k=e(43356),X=e(75271),F=e(53649),m=e.n(F),I=e(47512),b,h=(0,I.kc)(function(g){var v=g.css,S=g.token;return{custom:v(b||(b=m()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),S.colorPrimary,S.colorPrimaryHover)}},{hashPriority:"low"}),c=e(52676),y=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],x=function(v){var S=v.mode,L=S===void 0?"line":S,W=v.content,Q=v.defaultOpen,M=v.iconPlacement,w=M===void 0?"left":M,se=v.openIcon,Y=v.closeIcon,V=v.type,re=G()(v,y),_=h({}),P=_.styles,Z=L==="expanded",ce=(0,X.useState)(Q),A=T()(ce,2),le=A[0],Se=A[1],he=Y||(0,c.jsx)(s.Z,{}),R=se||(0,c.jsx)(N.Z,{}),ye=Z&&(0,c.jsx)("span",{children:le?he:R});return L==="line"||V==="vertical"?(0,c.jsx)(oe.Z,d()({type:V},re)):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(oe.Z,d()(d()({type:V},re),{},{children:(0,c.jsx)("span",{className:Z?P.custom:"",onClick:function(){Se(!le)},children:(0,c.jsxs)(k.Z,{size:6,children:[w!=="right"&&ye,(0,c.jsx)("span",{children:W}),w==="right"&&ye]})})})),Z&&(0,c.jsx)("div",{style:{display:le?"block":"none"},children:v.children})]})},K=x},45894:function(ke,$,e){e.d($,{E:function(){return re}});var J=e(90228),d=e.n(J),ne=e(87999),T=e.n(ne),O=e(26068),G=e.n(O),s=e(15558),N=e.n(s),oe=e(67825),k=e.n(oe),X=e(3467),F=e(60477),m=e(10061),I=e(56995),b=e(71170),h=e(97912),c=e(44923),y=e(14539),x=e(75271),K=e(79213),g=e(53649),v=e.n(g),S=e(47512),L,W,Q,M=(0,S.kc)(function(_){var P=_.css,Z=_.token,ce=_.prefixCls;return{empty:P(L||(L=v()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),Z.paddingXS,Z.paddingSM,Z.colorTextTertiary),list:P(W||(W=v()([`
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
          }
        }
      }
      .`,`-form {
        &-item {
          margin-bottom: 0;
        }
      }
    `])),ce,ce,Z.colorTextTertiary,ce),noFormItem:P(Q||(Q=v()([`
      height: `,`px;
      color: `,`;
    `])),Z.controlHeight,Z.colorTextTertiary)}}),w=e(52676),se=["extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style"],Y=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width"],V=["key","name"],re=function(P){var Z=P.extra,ce=P.expandIcon,A=P.icon,le=P.title,Se=P.variant,he=P.defaultActive,R=P.empty,ye=R===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":R,Pe=P.columns,we=Pe===void 0?[]:Pe,Oe=P.disabled,Ce=P.readOnly,Te=P.addOneFieldDefault,De=P.disableRemoveWhenOneField,xe=P.maxFileds,U=P.name,j=P.addParams,B=P.className,z=P.onRemove,ie=P.fieldRemoveButton,ue=ie===void 0?!0:ie,me=P.style,p=k()(P,se),C=M(),u=C.styles,o=(0,x.useRef)(),i=m.Z.useFormInstance(),a=m.Z.useWatch(U,i),l=(0,x.useCallback)(function(){if(!j)return[];var t=typeof j=="function"?j():j;return[t.defaultValue,t.insertIndex]},[j]),n=(0,x.useCallback)(function(t){var r=i.getFieldValue([U,t]);return z==null?void 0:z(r)},[i,U,z]);return(0,x.useEffect)(function(){var t;if(Te&&(!(i!=null&&i.getFieldValue(U))||(i==null||(t=i.getFieldValue(U))===null||t===void 0?void 0:t.length)===0)){var r;(r=o.current)===null||r===void 0||r.call.apply(r,[o].concat(N()(l())))}},[Te,l,i,U]),(0,w.jsx)(K.w,{extra:Z===void 0?U&&!Ce&&(0,w.jsx)(I.Z,{title:xe&&"\u6700\u591A\u6DFB\u52A0 ".concat(xe," \u9879"),children:(0,w.jsx)(b.ZP,{disabled:Oe||!!(xe&&(a==null?void 0:a.length)===xe),icon:(0,w.jsx)(X.Z,{}),onClick:function(r){var f;r.stopPropagation(),(f=o.current)===null||f===void 0||f.call.apply(f,[o].concat(N()(l())))},size:"small",type:"text"})}):Z,className:B,expandIcon:ce,icon:A,title:le,variant:Se,defaultActive:he,style:me,children:U?(0,w.jsx)(m.Z.List,G()(G()({name:U},p),{},{children:function(r,f){var H=f.add,D=f.remove;return o.current=H,(0,w.jsx)(h.Z,{className:u.list,columns:[].concat(N()(we.map(function(E){var ee=E.label,pe=E.name,te=E.render,ae=E.dependencies,q=E.rules,fe=E.align,de=E.ellipsis,ge=E.fixed,je=E.responsive,Ee=E.shouldCellUpdate,Le=E.width,be=k()(E,Y);return{title:ee,dataIndex:pe,align:fe,ellipsis:de,fixed:ge,responsive:je,shouldCellUpdate:Ee,width:Le,render:function(Ne,Je,Ae){var Ie=r[Ae],ze=Ie.key,Ze=Ie.name,Re=k()(Ie,V),ve=te==null?void 0:te(r[Ae],Ae);if(!ve&&!be.noStyle)return(0,w.jsx)(c.Z,{align:"center",className:u.noFormItem,children:"\u65E0\u9700\u8BBE\u7F6E"});if(!pe)return(0,w.jsx)(c.Z,{align:"center",className:u.noFormItem,children:ve});var Be={readOnly:Ce,disabled:Oe};return Ce===!0&&(Be.showCount=!1,Be.variant="borderless",Be.placeholder="-"),(0,w.jsx)(m.Z.Item,G()(G()(G()({},Re),{},{dependencies:typeof ae=="function"?ae(r[Ae],Ae):ae,name:[Ze,pe],rules:typeof q=="function"?q(r[Ae],Ae):q},be),{},{children:ve&&x.cloneElement(ve,Be)}),ze)}}})),[!Ce&&ue!==!1&&{title:"",dataIndex:"del",render:function(ee,pe,te){var ae=r[te].name;return(0,w.jsx)(m.Z.Item,{children:(0,w.jsx)(b.ZP,{disabled:Oe||De&&r.length===1,icon:(0,w.jsx)(F.Z,{icon:y.Z}),onClick:T()(d()().mark(function q(){var fe;return d()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:return ge.next=2,n(ae);case 2:fe=ge.sent,fe!==!1&&D(ae);case 4:case"end":return ge.stop()}},q)})),type:"text"})})}}]).filter(function(E){return!!E}),dataSource:r,locale:{emptyText:ye},pagination:!1,rowHoverable:!1,size:"small"})}})):(0,w.jsx)("div",{className:u.empty,children:ye})})}},62719:function(ke,$,e){e.d($,{E:function(){return d.E},l:function(){return ne}});var J=e(10061),d=e(45894),ne=J.Z;ne.CollapseList=d.E},17853:function(ke,$,e){e.d($,{EL:function(){return ie},oP:function(){return me}});var J=e(26068),d=e.n(J),ne=e(67825),T=e.n(ne),O=e(56588),G=e(81107),s=e(53573),N=e(75271),oe=e(48305),k=e.n(oe),X=e(16713),F=e(35092),m=e(97601),I=e(68537),b=e(90142),h=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"],c=e(60477),y=e(33592),x=e(5312),K=e(90228),g=e.n(K),v=e(87999),S=e.n(v),L=e(38794),W=e(76940),Q=e(49505),M=e(15094),w=function(C){var u=C?"dark":"light",o=M._.gray[u][11],i=M._.gray[u][7],a=C?M._.red[u][9]:M._.volcano[u][9],l=C?M._.gold[u][9]:M._.orange[u][9],n=C?M._.lime[u][9]:M._.green[u][9],t=C?M._.blue[u][9]:M._.geekblue[u][9];return{colors:{"editor.foreground":o},name:u,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:n},enumMember:{foreground:t},macro:{foreground:n},"parameter.label:dart":{foreground:i},"property:dart":{foreground:n},tomlArrayKey:{foreground:a},"variable.constant":{foreground:n},"variable.defaultLibrary":{foreground:a},"variable:dart":{foreground:n}},tokenColors:[{scope:"meta.embedded",settings:{foreground:i}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:o}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:t}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:n}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:o}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:i}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:a}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:a}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:i}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:l}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:a}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:o}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:t}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:o}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:t}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:n}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:i}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:i}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:a}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:l}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:n}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:o}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:o}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:i}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:i}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:l}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:a}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:n}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:a}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:a}},{name:"java source",scope:"source.java",settings:{foreground:o}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:i}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:l}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:a}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:t}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:o}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:t}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:t}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:t}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:n}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:t}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:n}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:o}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:n}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:t}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:a}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:a}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:o}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:n}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:t}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:o}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:n}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:l}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:i}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:t}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:t}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:t}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:o}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:t}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:t}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:i}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:t}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:t}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:t}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:n}},{name:"python type",scope:"support.type.python",settings:{foreground:t}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:t}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:n}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:i}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:l}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:n}},{name:"Operators",scope:"keyword.operator",settings:{foreground:i}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:t}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:t}},{name:"Keywords",scope:"keyword",settings:{foreground:t}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:a}},{name:"Variables",scope:"variable",settings:{foreground:o}},{name:"Variables",scope:"variable.c",settings:{foreground:i}},{name:"Language variables",scope:"variable.language",settings:{foreground:a}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:i}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:a}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:t}},{name:"Packages",scope:"token.package",settings:{foreground:i}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:l}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:a}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:a}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:a}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:a}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:o}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:a}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:t}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:n}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:l}},{name:"Storage",scope:"storage",settings:{foreground:t}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:t}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:t}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:a}},{name:"Support",scope:"support.function",settings:{foreground:t}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:o}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:i}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:n}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:i}},{name:"Strings",scope:"string",settings:{foreground:n}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:t}},{name:"Integers",scope:"constant.numeric",settings:{foreground:n}},{name:"Constants",scope:"constant",settings:{foreground:n}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:n}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:o}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:n}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:l}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:n}},{name:"Selector",scope:"meta.selector",settings:{foreground:t}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:a}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:l}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:o}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:n}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:a}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:t}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:o}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:o}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:l}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:t}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:o}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:t}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:o}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:i}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:o}},{name:"Broken",scope:"invalid.broken",settings:{foreground:o}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:o}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:n}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:n}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:o}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:t}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:t}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:a}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:t}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:t}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:i}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:i}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:a}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:a}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:l}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:i}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:n}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:n}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:l}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:t}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:t}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:t}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:t}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:l}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:t}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:i}},{name:"brace function",scope:"function.brace",settings:{foreground:i}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:i}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:t}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:t}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:t}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:n}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:n}},{name:"sass selector",scope:"selector.sass",settings:{foreground:o}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:a}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:i}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:a}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:o}},{scope:"token.info-token",settings:{foreground:l}},{scope:"token.warn-token",settings:{foreground:n}},{scope:"token.error-token",settings:{foreground:a}},{scope:"token.debug-token",settings:{foreground:t}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:t}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:i}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:t}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:l}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:a}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:o}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:o}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:n}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:n}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:n}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:n}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:t}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:a}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:t}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:a}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:t}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:n}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:t}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:o}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:t}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:a}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:o}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:t}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:o}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:n}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:o}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:a}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:a}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:l}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:o}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:n}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:a}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:t}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:o}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:a}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:a}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:t}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:o}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:t}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:t}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:i}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:n}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:i}},{name:"link",scope:["constant.character.xi"],settings:{foreground:l}},{name:"accent",scope:["accent.xi"],settings:{foreground:l}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:n}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:o}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:i}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:a}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:o}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:i}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:i}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:i}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:i}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:t}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:a}},{scope:["entity.name.variable.field.cs"],settings:{foreground:o}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:o}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:n}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:a}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:i}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:a}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:o}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:a}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:o}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:i}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:t}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:n}},{scope:["constant.character.escape"],settings:{foreground:t}},{scope:["string.regexp"],settings:{foreground:o}},{scope:["log.info"],settings:{foreground:n}},{scope:["log.warning"],settings:{foreground:a}},{scope:["log.error"],settings:{foreground:o}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:u}},se="txt",Y=[se],V,re=function(){var p=S()(g()().mark(function C(u){var o,i;return g()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(o=V,i=u.toLowerCase(),!(o&&Y.includes(i))){l.next=4;break}return l.abrupt("return",o);case 4:return h.includes(i)&&!Y.includes(i)&&Y.push(i),l.next=7,(0,W.e$)({langs:Y,themes:[w(!0),w(!1)]});case 7:return o=l.sent,V=o,l.abrupt("return",o);case 10:case"end":return l.stop()}},C)}));return function(u){return p.apply(this,arguments)}}(),_=function(C,u,o){return(0,Q.ZP)([u==null?void 0:u.toLowerCase(),o?"dark":"light",C].join("-"),S()(g()().mark(function i(){var a,l,n;return g()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=u.toLowerCase(),r.next=4,re(a);case 4:return l=r.sent,n=l==null?void 0:l.codeToHtml(C,{lang:h.includes(a)?a:se,theme:o?"dark":"light",transformers:[(0,L.hu)(),(0,L.d0)(),(0,L.dY)(),(0,L.Eu)(),(0,L.p4)()]}),r.abrupt("return",n);case 9:return r.prev=9,r.t0=r.catch(0),r.abrupt("return","");case 12:case"end":return r.stop()}},i,null,[[0,9]])})),{revalidateOnFocus:!1})},P=e(53649),Z=e.n(P),ce=e(47512),A,le,Se,he=(0,ce.kc)(function(p){var C=p.css,u=p.token,o=p.cx,i=p.prefixCls,a=p.stylish,l="".concat(i,"-highlighter");return{loading:o(a.blur,C(A||(A=Z()([`
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
      `])),u.fontFamilyCode,u.colorTextTertiary,u.borderRadius)),shiki:o("".concat(l,"-shiki"),C(le||(le=Z()([`
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
      `])),u.colorFillTertiary,u.colorWarningBg,u.colorErrorBg,u.colorFillTertiary,u.colorBorderSecondary,u.borderRadius,u.colorErrorBg,u.colorErrorText,u.colorSuccessBg,u.colorSuccessText)),unshiki:C(Se||(Se=Z()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),u.colorTextDescription)}}),R=e(52676),ye=(0,N.memo)(function(p){var C=p.children,u=p.language,o=p.className,i=p.style,a=he(),l=a.styles,n=a.cx,t=(0,y.r)(),r=t.isDarkMode,f=_(C.trim(),u,r),H=f.data,D=f.isLoading;return(0,R.jsxs)(R.Fragment,{children:[D||!H?(0,R.jsx)("div",{className:n(l.unshiki,o),style:i,children:(0,R.jsx)("pre",{children:(0,R.jsx)("div",{children:C.trim()})})}):(0,R.jsx)("div",{className:n(l.shiki,o),dangerouslySetInnerHTML:{__html:H},style:i}),D&&(0,R.jsx)(b.D,{align:"center",className:l.loading,gap:8,horizontal:!0,justify:"center",children:(0,R.jsx)(c.Z,{icon:x.Z,spin:!0})})]})}),Pe,we,Oe,Ce,Te,De,xe,U,j=(0,ce.kc)(function(p,C){var u=p.token,o=p.css,i=p.cx,a=p.prefixCls,l=p.stylish,n="".concat(a,"-highlighter"),t="".concat(n,"-hover-btn"),r="".concat(n,"-hover-lang"),f=o(Pe||(Pe=Z()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),C==="block"?u.colorFillTertiary:"transparent",C==="block"?"transparent":u.colorBorder,C==="block"?u.colorFillTertiary:u.colorFillQuaternary);return{button:i(t,o(we||(we=Z()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),C==="pure"?0:"12px",C==="pure"?0:"12px")),container:i(n,C!=="pure"&&f,o(Oe||(Oe=Z()([`
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
        `])),u.borderRadius,u.motionEaseOut,t,r,C==="pure"?0:"16px")),header:o(Ce||(Ce=Z()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),u.colorFillQuaternary),lang:i(r,l.blur,o(Te||(Te=Z()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),u.fontFamilyCode,u.colorTextSecondary)),nowrap:o(De||(De=Z()([`
        code {
          text-wrap: nowrap !important;
        }
      `]))),scroller:o(xe||(xe=Z()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:o(U||(U=Z()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),u.colorTextDescription,a,u.colorTextDescription)}}),B=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],z=h.map(function(p){return{label:p,value:p.toLowerCase()}}),ie=(0,N.memo)(function(p){var C=p.children,u=p.language,o=u===void 0?"markdown":u,i=p.className,a=p.style,l=p.allowChangeLanguage,n=l===void 0?!1:l,t=p.fileName,r=p.icon,f=p.contentStyle,H=T()(p,B),D=(0,N.useState)(!0),E=k()(D,2),ee=E[0],pe=E[1],te=(0,N.useState)(o||"markdown"),ae=k()(te,2),q=ae[0],fe=ae[1],de=j("block"),ge=de.styles,je=de.cx,Ee=je(ge.container,i);return(0,R.jsxs)("div",d()(d()({className:Ee,"data-code-type":"highlighter",style:a},H),{},{children:[(0,R.jsxs)(b.D,{align:"center",className:ge.header,horizontal:!0,justify:"space-between",children:[(0,R.jsx)(X.Z,{icon:ee?m.Z:I.Z,onClick:function(){return pe(!ee)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),n&&!t?(0,R.jsx)(F.default,{className:ge.select,onSelect:fe,options:z,size:"small",suffixIcon:!1,value:q.toLowerCase(),variant:"borderless"}):(0,R.jsxs)(b.D,{align:"center",className:ge.select,gap:2,horizontal:!0,children:[r,(0,R.jsx)("span",{children:t||q})]}),(0,R.jsx)(G.Z,{content:C,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,R.jsx)(ye,{language:q==null?void 0:q.toLowerCase(),style:ee?f:d()(d()({},f),{},{height:0,overflow:"hidden"}),children:C})]}))}),ue=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap"],me=(0,N.memo)(function(p){var C=p.fullFeatured,u=p.copyButtonSize,o=u===void 0?"site":u,i=p.children,a=p.language,l=p.className,n=p.style,t=p.copyable,r=t===void 0?!0:t,f=p.showLanguage,H=f===void 0?!0:f,D=p.type,E=D===void 0?"block":D,ee=p.spotlight,pe=p.allowChangeLanguage,te=p.fileName,ae=p.icon,q=p.contentStyle,fe=p.wrap,de=T()(p,ue),ge=j(E),je=ge.styles,Ee=ge.cx,Le=Ee(je.container,!fe&&je.nowrap,l);return C?(0,R.jsx)(ie,d()(d()({allowChangeLanguage:pe,className:l,contentStyle:q,fileName:te,icon:ae,language:a,style:n},de),{},{children:i})):(0,R.jsxs)("div",d()(d()({className:Le,"data-code-type":"highlighter",style:n},de),{},{children:[ee&&(0,R.jsx)(O.Z,{size:240}),r&&(0,R.jsx)(G.Z,{className:je.button,content:i,placement:"left",size:o}),H&&a&&(0,R.jsx)(s.Z,{className:je.lang,children:a.toLowerCase()}),(0,R.jsx)("div",{className:je.scroller,children:(0,R.jsx)(ye,{language:a==null?void 0:a.toLowerCase(),style:q,children:i})})]}))})},40305:function(ke,$,e){e.d($,{T:function(){return a}});var J=e(26068),d=e.n(J),ne=e(67825),T=e.n(ne),O=e(75271),G=e(77789),s=e(52676),N=["to","children"],oe=function(n){var t=n.to,r=n.children,f=T()(n,N);return(0,s.jsx)("a",d()(d()({href:"#".concat(t)},f),{},{children:r}))},k=(0,O.createContext)({loading:!1,Link:oe}),X=["to","Link","children"],F=function(n){var t=n.to,r=n.Link,f=n.children,H=T()(n,X);return r?(0,s.jsx)(r,d()(d()({to:t},H),{},{children:f})):(0,s.jsx)("a",d()(d()({href:"#".concat(t)},H),{},{children:f}))},m=function(n){var t=(0,O.useContext)(k),r=t.Link,f=t.breadcrumb;(0,O.useEffect)(function(){var D;f==null||(D=f.setItems)===null||D===void 0||D.call(f,n.items)},[f,n.items]);var H=(0,O.useCallback)(function(D,E,ee,pe){var te,ae,q=D.href?D.href===((te=ee.at(-1))===null||te===void 0?void 0:te.href):D.path===((ae=ee.at(-1))===null||ae===void 0?void 0:ae.path);if(q)return(0,s.jsx)("span",{children:D.title});var fe=D.href?D.href:"/".concat(pe.join("/"));return(0,s.jsx)(F,{Link:r,to:fe,children:D.title})},[r]);return(0,s.jsx)(G.Z,d()({itemRender:H},n))},I=e(46504),b=e(71170),h=e(99021),c=e(44923),y=e(53649),x=e.n(y),K=e(47512),g,v=(0,K.kc)(function(l){var n=l.css,t=l.token;return{root:n(g||(g=x()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),S=["className","children"],L={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},W=function(n){var t=n.className,r=n.children,f=T()(n,S),H=v(),D=H.styles,E=H.cx,ee=(0,O.useContext)(k),pe=ee.loading,te=ee.breadcrumb,ae=ee.Link,q=ee.status,fe=(0,O.useCallback)(function(){if(q){var de;return(0,s.jsx)(I.ZP,{extra:(0,s.jsx)(ae,{to:te==null||(de=te.items)===null||de===void 0||(de=de[0])===null||de===void 0?void 0:de.path,children:(0,s.jsx)(b.ZP,{type:"primary",children:"Go Back"})}),status:q,subTitle:L[q],title:q})}return r},[q,r,ae,te==null?void 0:te.items]);return pe?(0,s.jsx)(h.Z,{active:!0,className:E(D.root,t)}):(0,s.jsx)(c.Z,d()(d()({className:E(D.root,t),gap:20,vertical:!0},f),{},{children:fe()}))},Q=function(){return(0,s.jsx)(s.Fragment,{})},M=e(48305),w=e.n(M),se=e(335),Y=e.n(se),V=e(56995),re=e(12644),_=e(82227),P=e(46119),Z=e(94729),ce=e(46847),A=["shape","size","src"],le=function(n){if(typeof n=="number")return n;switch(n){case"small":return 40;case"large":return 88;default:return 64}},Se=function(n){var t=n.shape,r=t===void 0?"square":t,f=n.size,H=n.src,D=T()(n,A),E=(0,O.useMemo)(function(){return le(f)},[f]);return(0,s.jsx)(ce.C,d()({shape:r,size:E,src:H},D))},he,R,ye,Pe,we,Oe,Ce,Te,De,xe=(0,K.kc)(function(l,n){var t=l.css,r=l.token,f=l.prefixCls,H=n.bordered,D=H===void 0?!1:H,E=n.divider,ee=E===void 0?!0:E;return{root:D?t(he||(he=x()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),r.marginXS,r.padding,r.colorBgBase,r.borderRadius,r.boxShadowTertiary):t(R||(R=x()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),r.paddingXS,r.marginXS,ee&&t(ye||(ye=x()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),r.paddingLG,r.colorSplit)),icon:t(Pe||(Pe=x()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),f,f,r.colorPrimary,f),titleBox:t(we||(we=x()([`
        margin-bottom: `,`px;
      `])),r.marginSM),subTitle:t(Oe||(Oe=x()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),r.marginXXS,f,r.fontSize,r.colorTextSecondary),title:t(Ce||(Ce=x()([`
        font-size: `,`px;
        font-weight: 700;
      `])),r.fontSizeHeading5),descriptions:t(Te||(Te=x()([`
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
      `])),r.marginXXS,r.fontSize,r.colorTextSecondary,f,f,r.fontSize,f,r.fontSize,r.colorTextSecondary),rightButtons:t(De||(De=x()([`
        justify-content: flex-end;
      `])))}}),U=["className","classNames","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],j=Z.C.Paragraph,B=function(n){var t=n.className,r=n.classNames,f=n.icon,H=n.title,D=n.titleRender,E=n.subTitle,ee=n.status,pe=n.descriptions,te=pe===void 0?[]:pe,ae=n.descriptionsRender,q=n.extraContent,fe=q===void 0?{}:q,de=n.extraContentRender,ge=n.bordered,je=n.divider,Ee=T()(n,U),Le=xe({bordered:ge,divider:je}),be=Le.styles,Me=Le.cx,Ne=(0,O.useMemo)(function(){return!f||typeof f=="string"?{src:f,size:E?"large":"default"}:(E&&f.size===void 0&&(f.size="large"),f)},[f,E]),Je=(0,O.useMemo)(function(){var ve=(0,s.jsx)("span",{className:Me(be.title,r==null?void 0:r.title),children:H});return D?D(ve):ve},[r==null?void 0:r.title,Me,be.title,H,D]),Ae=(0,O.useMemo)(function(){var ve=[],Be=Y()(te.filter(function(We){return!!We}).entries()),Ke;try{for(Be.s();!(Ke=Be.n()).done;){var He=w()(Ke.value,2),Ue=He[0],Ve=He[1],Fe=Ve.icon,$e=Ve.text;(ee||Ue>=1)&&ve.push((0,s.jsx)(_.Z,{dashed:!1,type:"vertical"},"divider-".concat(Ue))),ve.push((0,s.jsxs)(c.Z,{align:"center",gap:4,children:[Fe&&(0,s.jsx)(V.Z,{title:Fe.tooltip,children:Fe.content}),(0,s.jsx)("span",{children:$e})]},"desc-".concat(Ue)))}}catch(We){Be.e(We)}finally{Be.f()}return ae?ae(ve):ve},[te,ae,ee]),Ie=(0,O.useMemo)(function(){if(!fe&&!de)return null;var ve=(0,s.jsx)(re.h,d()({className:be.rightButtons},fe));return de?de(ve):ve},[fe,de,be.rightButtons]),ze=(0,O.useContext)(k),Ze=ze.loading,Re=ze.status;return Ze?(0,s.jsxs)(c.Z,{className:Me(be.root,t),gap:20,children:[(0,s.jsx)(c.Z,{children:(0,s.jsx)(h.Z.Avatar,{active:!0,className:be.icon,shape:Ne==null?void 0:Ne.shape,size:le(Ne==null?void 0:Ne.size)})}),(0,s.jsxs)(c.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,s.jsxs)("div",{className:be.titleBox,children:[(0,s.jsx)(h.Z.Input,{active:!0,size:25}),E&&(0,s.jsx)("div",{className:Me(be.subTitle,t),children:(0,s.jsx)(h.Z.Input,{active:!0,size:18})})]}),(0,s.jsx)(h.Z.Input,{active:!0,size:18})]}),(0,s.jsx)(c.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,s.jsx)(h.Z.Button,{active:!0})})]}):Re?null:(0,s.jsxs)(c.Z,d()(d()({className:Me(be.root,t),gap:20},Ee),{},{children:[Ne&&(0,s.jsx)(c.Z,{children:(0,s.jsx)(Se,d()({className:be.icon},Ne))}),(0,s.jsxs)(c.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,s.jsxs)(c.Z,{className:Me(be.titleBox,r==null?void 0:r.titleWrapper),vertical:!0,children:[Je,E&&(0,s.jsx)(j,{className:Me(be.subTitle,r==null?void 0:r.subTitle),ellipsis:{rows:2},children:E})]}),(0,s.jsxs)(c.Z,{align:"center",className:Me(be.descriptions,r==null?void 0:r.descriptions),gap:4,children:[ee&&(0,s.jsx)(P.q,d()({},ee)),Ae]})]}),(0,s.jsx)(c.Z,{align:"center",className:r==null?void 0:r.extraContent,flex:"1",justify:"flex-end",children:Ie})]}))},z=e(94456),ie,ue=(0,K.kc)(function(l){var n=l.css,t=l.token;return{root:n(ie||(ie=x()([`
      width: inherit;
      height: 100%;
      min-height: inherit;
      padding: `,"px ","px ",`px;
    `])),t.padding,t.paddingLG,t.paddingXL)}}),me=["loading","className","children","Link","status","gap"],p=function(n){var t=(0,z.nB)(),r=n.loading,f=n.className,H=n.children,D=n.Link,E=D===void 0?t||oe:D,ee=n.status,pe=n.gap,te=pe===void 0?16:pe,ae=T()(n,me),q=ue(ae),fe=q.styles,de=q.cx,ge=(0,O.useState)([]),je=w()(ge,2),Ee=je[0],Le=je[1];return(0,s.jsx)(c.Z,d()(d()({className:de(fe.root,f),gap:te,vertical:!0},ae),{},{children:(0,s.jsx)(k.Provider,{value:{loading:r,Link:E,breadcrumb:{items:Ee,setItems:Le},status:ee},children:H})}))},C,u=(0,K.kc)(function(l){var n=l.css,t=l.token;return{root:n(C||(C=x()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),t.fontFamily,t.fontWeightStrong,t.lineHeight,t.colorText)}}),o=["className"],i=function(n){var t=n.className,r=T()(n,o),f=u(),H=f.cx,D=f.styles;return(0,s.jsx)("h2",d()({className:H(D.root,t)},r))},a=p;a.Breadcrumb=m,a.Title=i,a.Header=B,a.Content=W,a.Footer=Q},86346:function(ke,$,e){e.d($,{Q:function(){return xe}});var J=e(26068),d=e.n(J),ne=e(67825),T=e.n(ne),O=e(75271),G=e(53649),s=e.n(G),N=e(47512),oe,k,X,F,m,I=(0,N.kc)(function(U){var j=U.css,B=U.token,z=U.prefixCls;return{root:j(oe||(oe=s()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),B.fontFamily,B.colorText,B.colorBgContainer,B.borderRadius*2,B.boxShadowTertiary),bordered:j(k||(k=s()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),B.colorBorder),hoverable:j(X||(X=s()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),B.motionDurationMid,B.motionDurationMid,B.boxShadow),text:j(F||(F=s()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),B.colorTextSecondary),error:j(m||(m=s()([`
      color: `,`;
    `])),B.colorErrorText)}}),b=e(52676),h=["className","bordered","hoverable","children"],c=function(j){var B=j.className,z=j.bordered,ie=z===void 0?!1:z,ue=j.hoverable,me=ue===void 0?!0:ue,p=j.children,C=T()(j,h),u=I(),o=u.cx,i=u.styles;return(0,b.jsx)("div",d()(d()({className:o(i.root,ie&&i.bordered,me&&i.hoverable,B)},C),{},{children:p}))},y=e(44923),x,K=(0,N.kc)(function(U){var j=U.css,B=U.token;return{root:j(x||(x=s()([`
      padding: 12px 24px 20px;
    `])))}}),g=["className","children"],v=function(j){var B=j.className,z=j.children,ie=T()(j,g),ue=K(),me=ue.styles,p=ue.cx;return(0,b.jsx)(y.Z,d()(d()({className:p(me.root,B),gap:20,vertical:!0},ie),{},{children:z}))},S=e(26345),L,W=(0,N.kc)(function(U){var j=U.css,B=U.token,z=U.prefixCls,ie=70;return{root:j(L||(L=s()([`
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
    `])),z,z,z,z,ie,z,ie)}}),Q=["className","colon","column","size"],M=function(j){var B=j.className,z=j.colon,ie=z===void 0?!1:z,ue=j.column,me=ue===void 0?2:ue,p=j.size,C=p===void 0?"small":p,u=T()(j,Q),o=W(),i=o.cx,a=o.styles;return(0,b.jsx)(S.Z,d()({className:i(a.root,B),colon:ie,column:me,size:C},u))},w=e(60477),se=e(46847),Y=e(5053),V=e(71170),re=e(250),_=e(94729),P,Z,ce,A,le,Se,he,R,ye,Pe=(0,N.kc)(function(U,j){var B=U.css,z=U.token,ie=U.prefixCls,ue=j.divider,me=ue===void 0?!0:ue,p=j.iconBg,C=p===void 0?!0:p;return{root:B(P||(P=s()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),me?20:0,me&&B(Z||(Z=s()([`
          border-bottom: 1px solid `,`;
        `])),z.colorSplit)),icon:B(ce||(ce=s()([`
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
      `])),ie,z.colorPrimary,C&&B(A||(A=s()([`
            background-color: `,`;
          `])),z.colorBgLayout),ie),titleBox:B(le||(le=s()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),z.marginXXS),title:B(Se||(Se=s()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),z.fontWeightStrong),description:B(he||(he=s()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),ie,z.colorTextSecondary),extra:B(R||(R=s()([`
        margin-top: -4px;
      `]))),rightButtons:B(ye||(ye=s()([`
        justify-content: flex-end;
      `])))}}),we=["className","icon","title","description","extra","divider"],Oe=["className","shape","size"],Ce=["children"],Te=_.C.Paragraph,De=function(j){var B=j.className,z=j.icon,ie=j.title,ue=j.description,me=j.extra,p=j.divider,C=T()(j,we),u=Pe({divider:p,iconBg:!(z!=null&&z.src)}),o=u.styles,i=u.cx,a=z||{},l=a.className,n=a.shape,t=n===void 0?"square":n,r=a.size,f=r===void 0?72:r,H=T()(a,Oe),D=me||{},E=D.children,ee=T()(D,Ce);return(0,b.jsxs)(y.Z,d()(d()({className:i(o.root,B),gap:20},C),{},{children:[z&&(0,b.jsx)(y.Z,{children:(0,b.jsx)(se.C,d()({className:i(o.icon,l),shape:t,size:f},H))}),(0,b.jsxs)(y.Z,{flex:"1",vertical:!0,children:[(0,b.jsxs)(y.Z,{className:o.titleBox,gap:4,children:[(0,b.jsx)("div",{className:o.title,children:ie}),me&&(0,b.jsx)(y.Z,{align:"flex-start",className:o.extra,justify:"flex-end",onClick:function(te){return te.stopPropagation()},children:(0,b.jsx)(Y.Z,d()(d()({},ee),{},{children:E||(0,b.jsx)(V.ZP,{icon:(0,b.jsx)(w.Z,{icon:re.Z}),size:"small",type:"text"})}))})]}),ue&&(0,b.jsx)(Te,{className:o.description,ellipsis:{rows:2},children:ue})]})]}))},xe=c;xe.Header=De,xe.Content=v,xe.Descriptions=M},46119:function(ke,$,e){e.d($,{q:function(){return x}});var J=e(26068),d=e.n(J),ne=e(67825),T=e.n(ne),O=e(60477),G=e(43356),s=e(1088),N=e(56995),oe=e(65933),k=e(75271),X=e(53649),F=e.n(X),m=e(47512),I,b,h=(0,m.kc)(function(K){var g=K.css,v=K.token,S=K.prefixCls;return{root:g(I||(I=F()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),S,S,S),tooltip:g(b||(b=F()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),v.colorTextTertiary)}},{hashPriority:"low"}),c=e(52676),y=["tooltip","className","status","text","color"],x=function(g){var v=g.tooltip,S=g.className,L=g.status,W=g.text,Q=g.color,M=T()(g,y),w=h(),se=w.cx,Y=w.styles;return(0,c.jsxs)(G.Z,d()(d()({className:se(Y.root,S),size:"small"},M),{},{children:[(0,c.jsx)(s.Z,{status:L,text:W,color:Q}),v&&(0,c.jsx)(N.Z,{className:Y.tooltip,title:v,children:(0,c.jsx)(O.Z,{icon:oe.Z})})]}))}},94729:function(ke,$,e){e.d($,{Z:function(){return c}});var J=e(26068),d=e.n(J),ne=e(48305),T=e.n(ne),O=e(67825),G=e.n(O),s=e(83293),N=e(56995),oe=e(28026),k=e.n(oe),X=e(81792),F=e.n(X),m=e(18342),I=e(75271),b=e(52676),h=["time","format","relativeTime","tooltip"];k().extend(F());var c=s.Z,y=function(g){return k()(g?new Date(g):new Date).fromNow()},x=function(g){var v,S=g.time,L=g.format,W=g.relativeTime,Q=W===void 0?!0:W,M=g.tooltip,w=G()(g,h),se=(0,I.useState)(y(S)),Y=T()(se,2),V=Y[0],re=Y[1],_=(0,I.useCallback)(function(A){var le=k()(),Se=k()(A),he=le.diff(Se);if(he>0&&he<60*60*1e3)return setInterval(function(){re(y(A))},60*1e3)},[]);(0,I.useEffect)(function(){var A;return Q&&(A=_(new Date(S))),function(){A&&clearInterval(A)}},[Q,_,S]),(0,I.useEffect)(function(){if(Q){var A=y(S);A!==V&&(re(A),_(new Date(S)))}},[S,Q,V,_]);var P=k()(S).format(L||"YYYY-MM-DD HH:mm:ss"),Z=Q?V:P,ce=(v=M==null?void 0:M.title)!==null&&v!==void 0?v:Q?P:void 0;return ce&&(0,m.Z)(w,"ellipsis.tooltip.title",void 0),(0,b.jsx)(N.Z,d()(d()({},M||{}),{},{title:ce,children:(0,b.jsx)(c.Text,d()(d()({},w),{},{children:Z}))}))};c.Time=x,$.C=c},15094:function(ke,$,e){e.d($,{_:function(){return J}});var J={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}}},82846:function(ke,$,e){e.d($,{J:function(){return m}});var J=e(48305),d=e.n(J),ne=e(67825),T=e.n(ne),O=e(75271),G=function(){try{var h,c;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((h=window)===null||h===void 0?void 0:h.SpeechRecognition)||((c=window)===null||c===void 0?void 0:c.webkitSpeechRecognition)}catch(y){}},s=function(){try{var h,c;return(globalThis==null?void 0:globalThis.speechSynthesis)||((h=window)===null||h===void 0?void 0:h.speechSynthesis)||((c=window)===null||c===void 0?void 0:c.webkitSpeechSynthesis)}catch(y){}},N=function(){try{var h,c;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((h=window)===null||h===void 0?void 0:h.SpeechSynthesisUtterance)||((c=window)===null||c===void 0?void 0:c.webkitSpeechSynthesisUtterance)}catch(y){}},oe=G(),k=s(),X=N(),F=["voice","rate","pitch"],m=function(h,c){var y=c.voice,x=c.rate,K=c.pitch,g=T()(c,F),v=(0,O.useState)(k==null?void 0:k.getVoices()),S=d()(v,2),L=S[0],W=S[1],Q=(0,O.useState)(h),M=d()(Q,2),w=M[0],se=M[1],Y=(0,O.useState)(!1),V=d()(Y,2),re=V[0],_=V[1],P=(0,O.useMemo)(function(){if(X){var A=new X(w);return A.voice=L.find(function(le){return le.name===y}),A.onstart=function(){return _(!0)},A.onend=function(){return _(!1)},K&&(A.pitch=K*10),x&&(A.rate=x*10),A}},[w,L,x,K,y]);(0,O.useEffect)(function(){k&&(k.onvoiceschanged=function(){W(k==null?void 0:k.getVoices())},k.onstart=function(){return _(!0)},k.onend=function(){return _(!1)})},[]);var Z=(0,O.useCallback)(function(){var A;g==null||(A=g.onStart)===null||A===void 0||A.call(g),k==null||k.speak(P)},[g,P]),ce=(0,O.useCallback)(function(){var A,le;g==null||(A=g.onStop)===null||A===void 0||A.call(g),(le=speechSynthesis)===null||le===void 0||le.cancel(),_(!1)},[g]);return{isLoading:re,setText:se,start:Z,stop:ce}},I=null}}]);
