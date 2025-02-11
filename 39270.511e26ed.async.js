"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[39270],{12644:function(we,se,e){e.d(se,{h:function(){return j}});var q=e(57724),u=e.n(q),de=e(26068),I=e.n(de),D=e(67825),te=e.n(D),i=e(62272),C=e(22622),ne=e(159),T=e(75271),ie=e(52676),Y=["items","onClick","size"],y=["key","label"],B=["key","label"],j=function(d){var W=d.items,m=W===void 0?[]:W,U=d.onClick,b=U===void 0?function(){}:U,f=d.size,S=te()(d,Y);if(m.length<=2)return(0,ie.jsx)(i.Z,I()(I()({align:"end",size:12},S),{},{children:m.map(function(oe){var ae=oe.key,k=oe.label,X=te()(oe,y);return(0,ie.jsx)(C.ZP,I()(I()({onClick:function(ve){return b(ae,ve)},size:f},X),{},{children:k}),ae)})}));var E=u()(m),J=E[0],_=E.slice(1),L=J,N=L.key,$=L.label,G=te()(L,B);return(0,ie.jsx)(ne.Z.Button,I()(I()(I()({onClick:function(ae){return b(N,ae)}},G),{},{menu:{onClick:function(ae){var k=ae.key,X=ae.domEvent;return b(k,X)},items:_},overlayStyle:{minWidth:100},size:f},S),{},{children:$}),N)}},79213:function(we,se,e){e.d(se,{w:function(){return W}});var q=e(26068),u=e.n(q),de=e(67825),I=e.n(de),D=e(62250),te=e(17394),i=e(97601),C=e(68537),ne=e(75271),T=e(53649),ie=e.n(T),Y=e(3772),y,B=(0,Y.kc)(function(m,U){var b=m.css,f=m.token,S=m.prefixCls,E=U.collapsible;return{root:b(y||(y=ie()([`
        margin-bottom: `,`px;
        .`,`-collapse {
          &-header {
            padding: 0 !important;
            &-text {
              flex: 1 !important;
              padding: `,"px ","px ",`px
                `,`px;
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
      `])),f.margin,S,f.paddingSM,f.paddingSM,f.paddingSM,E===!1?f.paddingSM:0,f.fontSize,f.padding,f.padding,f.paddingSM,f.paddingSM,S,f.paddingXXS,f.colorBgContainer,f.paddingXXS,f.padding)}}),j=e(52676),P=["className","variant","collapsible","expandIcon"],d=D.Z.Group,W=function(U){var b=U.className,f=U.variant,S=U.collapsible,E=U.expandIcon,J=E===void 0?function(G){return(0,j.jsx)(te.Z,{icon:G.isActive?i.Z:C.Z,size:{blockSize:24,fontSize:14,strokeWidth:3}})}:E,_=I()(U,P),L=B({collapsible:S}),N=L.styles,$=L.cx;return(0,j.jsx)(d,u()({className:$(N.root,b),collapsible:f==="pure"?!1:S,expandIcon:J,variant:f},_))}},94456:function(we,se,e){e.d(se,{E_:function(){return i},iV:function(){return C},nc:function(){return T},nB:function(){return ie}});var q=e(75271),u=e(56264),de="https://unpkg.com",I="https://registry.npmmirror.com",D=function(y){var B=y.pkg,j=y.version,P=j===void 0?"latest":j,d=y.path,W=y.proxy;switch(W){case"unpkg":return(0,u.Z)(de,"".concat(B,"@").concat(P),d);default:return(0,u.Z)(I,B,P,"files",d)}},te=e(52676),i=(0,q.createContext)(null),C=(0,q.memo)(function(Y){var y=Y.children,B=Y.config;return(0,te.jsx)(i.Provider,{value:B,children:y})}),ne=function(y){var B=y.pkg,j=y.version,P=y.path;return D({path:P,pkg:B,proxy:"aliyun",version:j})},T=function(){var y=(0,q.useContext)(i);return y?(y==null?void 0:y.proxy)!=="custom"?function(B){var j=B.pkg,P=B.version,d=B.path;return D({path:d,pkg:j,proxy:y.proxy,version:P})}:(y==null?void 0:y.customCdnFn)||ne:ne},ie=function(){var y=(0,q.useContext)(i);return y==null?void 0:y.Link}},26345:function(we,se,e){e.d(se,{w:function(){return m},Z:function(){return U}});var q=e(26068),u=e.n(q),de=e(67825),I=e.n(de),D=e(85743),te=e(75271),i=e(53649),C=e.n(i),ne=e(3772),T,ie,Y,y,B,j,P=(0,ne.kc)(function(b,f){var S=b.css,E=b.token,J=b.prefixCls,_=f.borderedBottom,L=f.borderedBottomDashed,N=f.borderedTop,$=f.borderedTopDashed,G=f.size,oe={small:"".concat(E.paddingXS,"px ").concat(E.padding,"px"),middle:"".concat(E.padding,"px ").concat(E.paddingLG,"px"),default:"".concat(E.paddingSM,"px ").concat(E.paddingLG,"px")},ae=_||L;return{custom:S(T||(T=C()([`
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
      `])),J,J,ae&&G&&S(ie||(ie=C()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),J,J,oe[G],J),_&&S(Y||(Y=C()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),J,E.colorSplit),L&&S(y||(y=C()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),J,E.colorSplit),N&&S(B||(B=C()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),J,E.colorSplit),$&&S(j||(j=C()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),J,E.colorSplit))}},{hashPriority:"low"}),d=e(52676),W=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],m=function(f){var S=f.className,E=f.borderedBottom,J=f.borderedBottomDashed,_=f.borderedTop,L=f.borderedTopDashed,N=I()(f,W),$=P({borderedBottom:E,borderedBottomDashed:J,borderedTop:_,borderedTopDashed:L,size:N.size}),G=$.styles,oe=$.cx;return(0,d.jsx)(D.Z,u()(u()({},N),{},{className:oe(G.custom,S)}))},U=m;m.Item=D.Z.Item},82227:function(we,se,e){e.d(se,{i:function(){return m},Z:function(){return U}});var q=e(26068),u=e.n(q),de=e(48305),I=e.n(de),D=e(67825),te=e.n(D),i=e(30657),C=e(19728),ne=e(13761),T=e(62272),ie=e(75271),Y=e(53649),y=e.n(Y),B=e(3772),j,P=(0,B.kc)(function(b){var f=b.css,S=b.token;return{custom:f(j||(j=y()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),S.colorPrimary,S.colorPrimaryHover)}},{hashPriority:"low"}),d=e(52676),W=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],m=function(f){var S=f.mode,E=S===void 0?"line":S,J=f.content,_=f.defaultOpen,L=f.iconPlacement,N=L===void 0?"left":L,$=f.openIcon,G=f.closeIcon,oe=f.type,ae=te()(f,W),k=P({}),X=k.styles,K=E==="expanded",ve=(0,ie.useState)(_),M=I()(ve,2),ce=M[0],Se=M[1],ee=G||(0,d.jsx)(i.Z,{}),H=$||(0,d.jsx)(C.Z,{}),xe=K&&(0,d.jsx)("span",{children:ce?ee:H});return E==="line"||oe==="vertical"?(0,d.jsx)(ne.Z,u()({type:oe},ae)):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ne.Z,u()(u()({type:oe},ae),{},{children:(0,d.jsx)("span",{className:K?X.custom:"",onClick:function(){Se(!ce)},children:(0,d.jsxs)(T.Z,{size:6,children:[N!=="right"&&xe,(0,d.jsx)("span",{children:J}),N==="right"&&xe]})})})),K&&(0,d.jsx)("div",{style:{display:ce?"block":"none"},children:f.children})]})},U=m},65784:function(we,se,e){e.d(se,{E:function(){return ze}});var q=e(90228),u=e.n(q),de=e(87999),I=e.n(de),D=e(26068),te=e.n(D),i=e(15558),C=e.n(i),ne=e(67825),T=e.n(ne),ie=e(3467),Y=e(27046),y=e(28562),B=e(1718),j=e(22622),P=e(37805),d=e(38590),W=e(14539),m=e(75271),U=e(94729),b=e(79213),f=e(335),S=e.n(f),E=e(82092),J=e.n(E),_=e(48305),L=e.n(_),N=e(54834),$="__YUNTI_FORM_COLLAPSE_LIST_FIELD_KEY_PATH",G=function(pe){return pe.join("-")},oe=function(pe,Q,he){var re,h=y.Z.useFormInstance(),z=(0,m.useState)([]),Z=L()(z,2),ge=Z[0],fe=Z[1],be=(0,m.useState)([]),p=L()(be,2),x=p[0],c=p[1],o=(0,m.useCallback)(function(){return fe(h.getFieldValue(pe))},[h,pe]),l=(re=(0,m.useMemo)(function(){return he.find(function(n){return!!n.name&&!n.noStyle})},[he]))===null||re===void 0?void 0:re.name,s=(0,m.useCallback)(function(n){if(!pe)return{dataSource:[],allExpandRowKeys:[]};var r=[],g=function A(v,O,R){var w=(0,N.Z)(v);return w||(w=J()({},$,[])),w[$]=[].concat(C()(R),[O]),w[Q]&&Array.isArray(w[Q])&&(r.push(G(w[$])),w[Q]=w[Q].map(function(V,me){return A(V,me,w[$])})),w};return{dataSource:(n==null?void 0:n.map(function(A,v){return g(A,v,[])}))||[],allExpandRowKeys:r}},[Q,pe]),a=(0,m.useCallback)(function(n,r){var g=[],A=S()(n.entries()),v;try{for(A.s();!(v=A.n()).done;){var O=L()(v.value,2),R=O[0],w=O[1];R===n.length-1?(g.push(w),r&&g.push(r)):g.push(w,Q)}}catch(V){A.e(V)}finally{A.f()}return g},[Q]),t=(0,m.useCallback)(function(n,r){var g=r[$];return{add:function(v,O){var R=a(g),w=[pe].concat(C()(R),[Q]),V=(0,N.Z)(h.getFieldValue(w))||[],me=O!=null?O:V.length;if(V.splice(me,0,v),h.setFieldValue(w,V),l){var le=[].concat(C()(w),[me,l]);setTimeout(function(){h.focusField(le)},200)}c(C()(new Set([].concat(C()(x),[G(g)])))),o()},remove:function(v){if(g.length<=1){n.remove(v),o();return}var O=[pe].concat(C()(a(g).slice(0,-1))),R=(0,N.Z)(h.getFieldValue(O))||[],w=[];Array.isArray(v)?w.push.apply(w,C()(v)):w.push(v);var V=R.filter(function(me,le){return!w.includes(le)});h.setFieldValue(O,V.length>0?V:void 0),o()},move:function(v,O){if(g.length<=1)return n.move(v,O);var R=[pe].concat(C()(a(g).slice(0,-1))),w=(0,N.Z)(h.getFieldValue(R))||[];if(v<0||O<0||v>=w.length||O>=w.length){console.warn(new Error("\u7D22\u5F15\u8D85\u51FA\u6570\u7EC4\u8303\u56F4"));return}var V=[w[O],w[v]];w[v]=V[0],w[O]=V[1],h.setFieldValue(R,w),o()}}},[Q,x,l,h,a,pe,o]);return{values:ge,updateValues:o,expandedRowKeys:x,setExpandedRowKeys:c,fieldValuesToDataSource:s,getFieldPath:a,getFormListOperation:t,firstColumnFormItemName:l}},ae=e(53649),k=e.n(ae),X=e(3772),K,ve,M,ce,Se=(0,X.kc)(function(F){var pe=F.css,Q=F.token,he=F.prefixCls;return{empty:pe(K||(K=k()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),Q.paddingXS,Q.paddingSM,Q.colorTextTertiary),list:pe(ve||(ve=k()([`
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
    `])),he,he,Q.colorTextTertiary,he,Q.marginXS,he),noFormItem:pe(M||(M=k()([`
      height: `,`px;
      color: `,`;
    `])),Q.controlHeight,Q.colorTextTertiary),readOnlyItem:pe(ce||(ce=k()([`
      height: `,`px;
      color: `,`;
    `])),Q.controlHeight,Q.colorTextBase)}}),ee=e(52676),H=["collapsible","extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style","defaultExpandAllRows","indentSize","childrenColumnName","rowHoverable"],xe=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width","className"],Ae=["key"],Ie=U.C.Text,ze=(0,m.memo)(function(F){var pe=F.collapsible,Q=F.extra,he=F.expandIcon,re=F.icon,h=F.title,z=F.variant,Z=F.defaultActive,ge=F.empty,fe=ge===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":ge,be=F.columns,p=be===void 0?[]:be,x=F.disabled,c=F.readOnly,o=F.addOneFieldDefault,l=F.disableRemoveWhenOneField,s=F.maxFileds,a=F.name,t=F.addParams,n=F.className,r=F.onRemove,g=F.fieldRemoveButton,A=g===void 0?!0:g,v=F.style,O=F.defaultExpandAllRows,R=F.indentSize,w=R===void 0?16:R,V=F.childrenColumnName,me=V===void 0?"children":V,le=F.rowHoverable,Pe=le===void 0?!0:le,ye=T()(F,H),Ee=Se(),Te=Ee.cx,Ne=Ee.styles,Me=(0,m.useRef)(),ue=y.Z.useFormInstance(),Ce=oe(a,me,p),Le=Ce.values,Ze=Ce.updateValues,ot=Ce.expandedRowKeys,Je=Ce.setExpandedRowKeys,Re=Ce.fieldValuesToDataSource,at=Ce.getFormListOperation,Qe=Ce.getFieldPath,De=Ce.firstColumnFormItemName,Ve=(0,m.useMemo)(function(){return Re(Le)},[Re,Le]),Ye=Ve.dataSource;(0,m.useEffect)(function(){Ze()},[Ze,c]),(0,m.useEffect)(function(){var Oe=ue.getFieldValue(a),ke=Re(Oe),Fe=ke.allExpandRowKeys;O&&Je(Fe)},[O,Re,ue,a,Je]);var We=(0,m.useCallback)(function(){if(!t)return[];var Oe=typeof t=="function"?t():t;return[Oe.defaultValue,Oe.insertIndex]},[t]),$e=(0,m.useCallback)(function(Oe){var ke=ue.getFieldValue([a,Oe]);return r==null?void 0:r(ke)},[ue,a,r]);return(0,m.useEffect)(function(){var Oe;if(o&&(!(ue!=null&&ue.getFieldValue(a))||(ue==null||(Oe=ue.getFieldValue(a))===null||Oe===void 0?void 0:Oe.length)===0)){var ke;(ke=Me.current)===null||ke===void 0||ke.call.apply(ke,[Me].concat(C()(We()))),setTimeout(function(){ue.focusField([a,0,De])},200)}},[o,We,ue,a,De,Ze]),(0,ee.jsx)(b.w,{extra:Q===void 0?a&&!c&&(0,ee.jsx)(B.Z,{title:s&&"\u6700\u591A\u6DFB\u52A0 ".concat(s," \u9879"),children:(0,ee.jsx)(j.ZP,{disabled:x||!!(s&&(Le==null?void 0:Le.length)===s),icon:(0,ee.jsx)(ie.Z,{}),onClick:function(ke){var Fe;ke.stopPropagation(),(Fe=Me.current)===null||Fe===void 0||Fe.call.apply(Fe,[Me].concat(C()(We()))),setTimeout(function(){ue.focusField([a,ue.getFieldValue(a).length-1,De])},200)},size:"small",type:"text"})}):Q,className:n,collapsible:pe,expandIcon:he,icon:re,title:h,variant:z,defaultActive:Z,style:v,children:a?(0,ee.jsx)(y.Z.List,te()(te()({name:a},ye),{},{children:function(ke,Fe){var Ge=Fe.add,vt=Fe.remove;return Me.current=function(je,Be){Ge(je,Be),Ze()},(0,ee.jsx)(P.Z,{className:Ne.list,columns:[].concat(C()(p.map(function(je){var Be=je.label,qe=je.name,Xe=je.render,Ke=je.dependencies,He=je.rules,rt=je.align,_e=je.ellipsis,ct=je.fixed,Ue=je.responsive,bt=je.shouldCellUpdate,ht=je.width,et=je.className,ut=T()(je,xe);return{title:Be,dataIndex:qe,align:rt,ellipsis:_e,fixed:ct,responsive:Ue,shouldCellUpdate:bt,width:ht,render:function(st,pt,tt){var it=ke[tt]||{},lt=it.name,dt=pt[$],gt=[a].concat(C()(Qe(dt))),ft=gt.slice(0,-1),yt=it.key,xt=T()(it,Ae),nt=Xe==null?void 0:Xe(lt!=null?lt:dt.at(-1),tt,at(Fe,pt),gt);if(!nt&&!ut.noStyle)return(0,ee.jsx)(d.Z,{align:"center",className:Te(Ne.noFormItem,et),children:"\u65E0\u9700\u8BBE\u7F6E"});if(!qe)return(0,ee.jsx)(d.Z,{align:"center",className:Te(Ne.noFormItem,et),children:nt});var mt={};return x!==void 0&&(mt.disabled=x),c===!0?(0,ee.jsx)(d.Z,{align:"center",className:Te(Ne.readOnlyItem,et),children:st!=null?st:(0,ee.jsx)(Ie,{type:"secondary",children:"-"})}):(0,ee.jsx)(y.Z.Item,te()(te()(te()({className:et},xt),{},{dependencies:typeof Ke=="function"?Ke(ft,tt):Ke,name:Qe(dt,qe),rules:typeof He=="function"?He(ft,tt):He},ut),{},{children:nt&&m.cloneElement(nt,mt)}),yt)}}})),[!c&&A!==!1&&{title:"",dataIndex:"del",render:function(Be,qe,Xe){var Ke=ke[Xe];if(Ke){var He=Ke.name;return(0,ee.jsx)(y.Z.Item,{children:(0,ee.jsx)(j.ZP,{disabled:x||l&&ke.length===1,icon:(0,ee.jsx)(Y.Z,{icon:W.Z}),onClick:I()(u()().mark(function rt(){var _e;return u()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:return Ue.next=2,$e(He);case 2:_e=Ue.sent,_e!==!1&&(vt(He),Ze());case 4:case"end":return Ue.stop()}},rt)})),type:"text"})})}}}]).filter(function(je){return!!je}),dataSource:Ye,expandable:{expandedRowKeys:ot,childrenColumnName:me,onExpandedRowsChange:function(Be){Je(Be)}},indentSize:w,locale:{emptyText:fe},pagination:!1,rowHoverable:Pe,rowKey:function(Be){return G(Be[$])},size:"small"})}})):(0,ee.jsx)("div",{className:Ne.empty,children:fe})})})},62719:function(we,se,e){e.d(se,{E:function(){return u.E},l:function(){return de}});var q=e(28562),u=e(65784),de=q.Z;de.CollapseList=u.E},17853:function(we,se,e){e.d(se,{EL:function(){return ge},oP:function(){return be}});var q=e(26068),u=e.n(q),de=e(67825),I=e.n(de),D=e(76417),te=e(92946),i=e(43728),C=e(75271),ne=e(48305),T=e.n(ne),ie=e(17394),Y=e(98721),y=e(97601),B=e(68537),j=e(90142),P=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"],d=e(27046),W=e(71795),m=e(5312),U=e(90228),b=e.n(U),f=e(87999),S=e.n(f),E=e(38794),J=e(76940),_=e(49505),L=e(15094),N=function(x){var c=x?"dark":"light",o=L._.gray[c][11],l=L._.gray[c][7],s=x?L._.red[c][9]:L._.volcano[c][9],a=x?L._.gold[c][9]:L._.orange[c][9],t=x?L._.lime[c][9]:L._.green[c][9],n=x?L._.blue[c][9]:L._.geekblue[c][9];return{colors:{"editor.foreground":o},name:c,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:t},enumMember:{foreground:n},macro:{foreground:t},"parameter.label:dart":{foreground:l},"property:dart":{foreground:t},tomlArrayKey:{foreground:s},"variable.constant":{foreground:t},"variable.defaultLibrary":{foreground:s},"variable:dart":{foreground:t}},tokenColors:[{scope:"meta.embedded",settings:{foreground:l}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:o}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:n}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:t}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:o}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:l}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:s}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:s}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:l}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:a}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:s}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:o}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:n}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:o}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:n}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:t}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:l}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:l}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:s}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:a}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:t}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:o}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:o}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:l}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:l}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:a}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:s}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:t}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:s}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:s}},{name:"java source",scope:"source.java",settings:{foreground:o}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:l}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:a}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:s}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:n}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:o}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:n}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:n}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:n}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:t}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:n}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:t}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:o}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:t}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:n}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:s}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:s}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:o}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:t}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:n}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:o}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:t}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:a}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:l}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:n}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:n}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:n}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:o}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:n}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:n}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:l}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:n}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:n}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:n}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:t}},{name:"python type",scope:"support.type.python",settings:{foreground:n}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:n}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:t}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:l}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:a}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:t}},{name:"Operators",scope:"keyword.operator",settings:{foreground:l}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:n}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:n}},{name:"Keywords",scope:"keyword",settings:{foreground:n}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:s}},{name:"Variables",scope:"variable",settings:{foreground:o}},{name:"Variables",scope:"variable.c",settings:{foreground:l}},{name:"Language variables",scope:"variable.language",settings:{foreground:s}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:l}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:s}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:n}},{name:"Packages",scope:"token.package",settings:{foreground:l}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:a}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:s}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:s}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:s}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:s}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:o}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:s}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:n}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:t}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:a}},{name:"Storage",scope:"storage",settings:{foreground:n}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:n}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:n}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:s}},{name:"Support",scope:"support.function",settings:{foreground:n}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:o}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:l}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:t}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:l}},{name:"Strings",scope:"string",settings:{foreground:t}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:n}},{name:"Integers",scope:"constant.numeric",settings:{foreground:t}},{name:"Constants",scope:"constant",settings:{foreground:t}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:t}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:o}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:t}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:a}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:t}},{name:"Selector",scope:"meta.selector",settings:{foreground:n}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:s}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:a}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:o}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:t}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:s}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:n}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:o}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:o}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:a}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:o}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:o}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:l}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:o}},{name:"Broken",scope:"invalid.broken",settings:{foreground:o}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:o}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:t}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:o}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:n}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:n}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:s}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:n}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:n}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:l}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:l}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:s}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:s}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:a}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:l}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:t}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:t}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:a}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:n}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:n}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:n}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:n}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:a}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:n}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:l}},{name:"brace function",scope:"function.brace",settings:{foreground:l}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:l}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:n}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:n}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:n}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:t}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:t}},{name:"sass selector",scope:"selector.sass",settings:{foreground:o}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:s}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:l}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:s}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:o}},{scope:"token.info-token",settings:{foreground:a}},{scope:"token.warn-token",settings:{foreground:t}},{scope:"token.error-token",settings:{foreground:s}},{scope:"token.debug-token",settings:{foreground:n}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:n}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:l}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:n}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:a}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:s}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:o}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:o}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:t}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:t}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:t}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:t}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:n}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:s}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:n}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:s}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:n}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:t}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:n}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:o}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:n}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:s}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:o}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:n}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:o}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:t}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:o}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:s}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:s}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:a}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:o}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:t}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:s}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:n}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:o}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:s}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:s}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:n}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:o}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:n}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:n}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:l}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:t}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:l}},{name:"link",scope:["constant.character.xi"],settings:{foreground:a}},{name:"accent",scope:["accent.xi"],settings:{foreground:a}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:t}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:o}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:l}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:s}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:o}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:l}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:l}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:l}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:l}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:n}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:s}},{scope:["entity.name.variable.field.cs"],settings:{foreground:o}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:o}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:t}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:s}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:l}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:s}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:o}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:s}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:o}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:l}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:n}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:t}},{scope:["constant.character.escape"],settings:{foreground:n}},{scope:["string.regexp"],settings:{foreground:o}},{scope:["log.info"],settings:{foreground:t}},{scope:["log.warning"],settings:{foreground:s}},{scope:["log.error"],settings:{foreground:o}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:c}},$="txt",G=[$],oe,ae=function(){var p=S()(b()().mark(function x(c){var o,l;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(o=oe,l=c.toLowerCase(),!(o&&G.includes(l))){a.next=4;break}return a.abrupt("return",o);case 4:return P.includes(l)&&!G.includes(l)&&G.push(l),a.next=7,(0,J.e$)({langs:G,themes:[N(!0),N(!1)]});case 7:return o=a.sent,oe=o,a.abrupt("return",o);case 10:case"end":return a.stop()}},x)}));return function(c){return p.apply(this,arguments)}}(),k=function(x,c,o){return(0,_.ZP)([c==null?void 0:c.toLowerCase(),o?"dark":"light",x].join("-"),S()(b()().mark(function l(){var s,a,t;return b()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s=c.toLowerCase(),r.next=4,ae(s);case 4:return a=r.sent,t=a==null?void 0:a.codeToHtml(x,{lang:P.includes(s)?s:$,theme:o?"dark":"light",transformers:[(0,E.hu)(),(0,E.d0)(),(0,E.dY)(),(0,E.Eu)(),(0,E.p4)()]}),r.abrupt("return",t);case 9:return r.prev=9,r.t0=r.catch(0),r.abrupt("return","");case 12:case"end":return r.stop()}},l,null,[[0,9]])})),{revalidateOnFocus:!1})},X=e(53649),K=e.n(X),ve=e(3772),M,ce,Se,ee=(0,ve.kc)(function(p){var x=p.css,c=p.token,o=p.cx,l=p.prefixCls,s=p.stylish,a="".concat(l,"-highlighter");return{loading:o(s.blur,x(M||(M=K()([`
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
      `])),c.fontFamilyCode,c.colorTextTertiary,c.borderRadius)),shiki:o("".concat(a,"-shiki"),x(ce||(ce=K()([`
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
      `])),c.colorFillTertiary,c.colorWarningBg,c.colorErrorBg,c.colorFillTertiary,c.colorBorderSecondary,c.borderRadius,c.colorErrorBg,c.colorErrorText,c.colorSuccessBg,c.colorSuccessText)),unshiki:x(Se||(Se=K()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),c.colorTextDescription)}}),H=e(52676),xe=(0,C.memo)(function(p){var x=p.children,c=p.language,o=p.className,l=p.style,s=ee(),a=s.styles,t=s.cx,n=(0,W.r)(),r=n.isDarkMode,g=k(x.trim(),c,r),A=g.data,v=g.isLoading;return(0,H.jsxs)(H.Fragment,{children:[v||!A?(0,H.jsx)("div",{className:t(a.unshiki,o),style:l,children:(0,H.jsx)("pre",{children:(0,H.jsx)("div",{children:x.trim()})})}):(0,H.jsx)("div",{className:t(a.shiki,o),dangerouslySetInnerHTML:{__html:A},style:l}),v&&(0,H.jsx)(j.D,{align:"center",className:a.loading,gap:8,horizontal:!0,justify:"center",children:(0,H.jsx)(d.Z,{icon:m.Z,spin:!0})})]})}),Ae,Ie,ze,F,pe,Q,he,re,h=(0,ve.kc)(function(p,x){var c=p.token,o=p.css,l=p.cx,s=p.prefixCls,a=p.stylish,t="".concat(s,"-highlighter"),n="".concat(t,"-hover-btn"),r="".concat(t,"-hover-lang"),g=o(Ae||(Ae=K()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),x==="block"?c.colorFillTertiary:"transparent",x==="block"?"transparent":c.colorBorder,x==="block"?c.colorFillTertiary:c.colorFillQuaternary);return{button:l(n,o(Ie||(Ie=K()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),x==="pure"?0:"12px",x==="pure"?0:"12px")),container:l(t,x!=="pure"&&g,o(ze||(ze=K()([`
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
        `])),c.borderRadius,c.motionEaseOut,n,r,x==="pure"?0:"16px")),header:o(F||(F=K()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),c.colorFillQuaternary),lang:l(r,a.blur,o(pe||(pe=K()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),c.fontFamilyCode,c.colorTextSecondary)),nowrap:o(Q||(Q=K()([`
        code {
          text-wrap: nowrap !important;
        }
      `]))),scroller:o(he||(he=K()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:o(re||(re=K()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),c.colorTextDescription,s,c.colorTextDescription)}}),z=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],Z=P.map(function(p){return{label:p,value:p.toLowerCase()}}),ge=(0,C.memo)(function(p){var x=p.children,c=p.language,o=c===void 0?"markdown":c,l=p.className,s=p.style,a=p.allowChangeLanguage,t=a===void 0?!1:a,n=p.fileName,r=p.icon,g=p.contentStyle,A=I()(p,z),v=(0,C.useState)(!0),O=T()(v,2),R=O[0],w=O[1],V=(0,C.useState)(o||"markdown"),me=T()(V,2),le=me[0],Pe=me[1],ye=h("block"),Ee=ye.styles,Te=ye.cx,Ne=Te(Ee.container,l);return(0,H.jsxs)("div",u()(u()({className:Ne,"data-code-type":"highlighter",style:s},A),{},{children:[(0,H.jsxs)(j.D,{align:"center",className:Ee.header,horizontal:!0,justify:"space-between",children:[(0,H.jsx)(ie.Z,{icon:R?y.Z:B.Z,onClick:function(){return w(!R)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),t&&!n?(0,H.jsx)(Y.default,{className:Ee.select,onSelect:Pe,options:Z,size:"small",suffixIcon:!1,value:le.toLowerCase(),variant:"borderless"}):(0,H.jsxs)(j.D,{align:"center",className:Ee.select,gap:2,horizontal:!0,children:[r,(0,H.jsx)("span",{children:n||le})]}),(0,H.jsx)(te.Z,{content:x,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,H.jsx)(xe,{language:le==null?void 0:le.toLowerCase(),style:R?g:u()(u()({},g),{},{height:0,overflow:"hidden"}),children:x})]}))}),fe=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap"],be=(0,C.memo)(function(p){var x=p.fullFeatured,c=p.copyButtonSize,o=c===void 0?"site":c,l=p.children,s=p.language,a=p.className,t=p.style,n=p.copyable,r=n===void 0?!0:n,g=p.showLanguage,A=g===void 0?!0:g,v=p.type,O=v===void 0?"block":v,R=p.spotlight,w=p.allowChangeLanguage,V=p.fileName,me=p.icon,le=p.contentStyle,Pe=p.wrap,ye=I()(p,fe),Ee=h(O),Te=Ee.styles,Ne=Ee.cx,Me=Ne(Te.container,!Pe&&Te.nowrap,a);return x?(0,H.jsx)(ge,u()(u()({allowChangeLanguage:w,className:a,contentStyle:le,fileName:V,icon:me,language:s,style:t},ye),{},{children:l})):(0,H.jsxs)("div",u()(u()({className:Me,"data-code-type":"highlighter",style:t},ye),{},{children:[R&&(0,H.jsx)(D.Z,{size:240}),r&&(0,H.jsx)(te.Z,{className:Te.button,content:l,placement:"left",size:o}),A&&s&&(0,H.jsx)(i.Z,{className:Te.lang,children:s.toLowerCase()}),(0,H.jsx)("div",{className:Te.scroller,children:(0,H.jsx)(xe,{language:s==null?void 0:s.toLowerCase(),style:le,children:l})})]}))})},33985:function(we,se,e){e.d(se,{h:function(){return oe},P:function(){return B.Pz}});var q=e(26068),u=e.n(q),de=e(48305),I=e.n(de),D=e(67825),te=e.n(D),i=e(17394),C=e(92946),ne=e(38590),T=e(71795),ie=e(97601),Y=e(68537),y=e(75271),B=e(2998),j=e(86590),P=e(4643),d=e(94729),W=e(53649),m=e.n(W),U=e(3772),b,f,S,E,J,_,L=(0,U.kc)(function(ae,k){var X=ae.token,K=ae.css,ve=ae.cx,M=ae.prefixCls,ce="".concat(M,"-json-viewer"),Se=k==="block",ee=K(b||(b=m()([`
      background-color: `,`;

      &:hover {
        background-color: `,`;
      }
    `])),Se?X.colorFillTertiary:"transparent",Se?X.colorFillTertiary:X.colorFillQuaternary);return{container:ve(ce,k!=="pure"&&ee,K(f||(f=m()([`
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
        `])),X.borderRadius,X.motionEaseOut)),content:K(S||(S=m()([`
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),k==="pure"?0:X.padding),header:K(E||(E=m()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),X.colorFillQuaternary),title:K(J||(J=m()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),X.margin),titleText:K(_||(_=m()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),X.fontSize,M,X.colorTextDescription)}}),N=e(52676),$=["type","fullFeatured","title","icon","contentStyle","classNames","className","collapseStringMode","collapsed","dark","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],G=d.C.Text,oe=function(k){var X=k.type,K=X===void 0?"block":X,ve=k.fullFeatured,M=ve===void 0?!1:ve,ce=k.title,Se=ce===void 0?"json":ce,ee=k.icon,H=k.contentStyle,xe=k.classNames,Ae=k.className,Ie=k.collapseStringMode,ze=Ie===void 0?"directly":Ie,F=k.collapsed,pe=F===void 0?2:F,Q=k.dark,he=k.displaySize,re=he===void 0?"collapsed":he,h=k.ignoreLargeArray,z=h===void 0?!1:h,Z=k.matchesURL,ge=Z===void 0?!0:Z,fe=k.src,be=k.theme,p=be===void 0?"default":be,x=k.style,c=te()(k,$),o=(0,T.r)(),l=o.isDarkMode,s=L(M?"block":K),a=s.styles,t=s.cx,n=(0,y.useState)(!0),r=I()(n,2),g=r[0],A=r[1],v=(0,y.useMemo)(function(){return(0,B.Pz)(fe)},[fe]),O=(0,N.jsx)(B.ZP,u()({collapseStringMode:ze,collapsed:pe,dark:Q!=null?Q:l,displaySize:re,ignoreLargeArray:z,matchesURL:ge,src:fe,theme:p},c));return(0,N.jsxs)(ne.Z,{className:t(a.container,Ae),style:x,vertical:!0,children:[M&&(0,N.jsxs)(ne.Z,{align:"center",className:t(a.header,xe==null?void 0:xe.header),justify:"space-between",children:[(0,N.jsx)(i.Z,{icon:g?ie.Z:Y.Z,onClick:function(){return A(!g)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),(0,N.jsxs)(ne.Z,{align:"center",className:a.title,flex:1,gap:2,justify:"center",title:Se,children:[ee,(0,N.jsx)(ne.Z,{className:a.titleText,children:(0,N.jsx)(G,{ellipsis:!0,children:Se})})]}),(0,N.jsx)(C.Z,{content:v,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,N.jsx)(ne.Z,{className:t(a.content,xe==null?void 0:xe.content),flex:1,style:g?H:u()(u()({},H),{},{height:0,maxHeight:0,padding:0,overflow:"hidden"}),children:O})]})}},40305:function(we,se,e){e.d(se,{T:function(){return s}});var q=e(26068),u=e.n(q),de=e(67825),I=e.n(de),D=e(75271),te=e(87902),i=e(52676),C=["to","children"],ne=function(t){var n=t.to,r=t.children,g=I()(t,C);return(0,i.jsx)("a",u()(u()({href:"#".concat(n)},g),{},{children:r}))},T=(0,D.createContext)({loading:!1,Link:ne}),ie=["to","Link","children"],Y=function(t){var n=t.to,r=t.Link,g=t.children,A=I()(t,ie);return r?(0,i.jsx)(r,u()(u()({to:n},A),{},{children:g})):(0,i.jsx)("a",u()(u()({href:"#".concat(n)},A),{},{children:g}))},y=function(t){var n=(0,D.useContext)(T),r=n.Link,g=n.breadcrumb;(0,D.useEffect)(function(){var v;g==null||(v=g.setItems)===null||v===void 0||v.call(g,t.items)},[g,t.items]);var A=(0,D.useCallback)(function(v,O,R,w){var V,me,le=v.href?v.href===((V=R.at(-1))===null||V===void 0?void 0:V.href):v.path===((me=R.at(-1))===null||me===void 0?void 0:me.path);if(le)return(0,i.jsx)("span",{children:v.title});var Pe=v.href?v.href:"/".concat(w.join("/"));return(0,i.jsx)(Y,{Link:r,to:Pe,children:v.title})},[r]);return(0,i.jsx)(te.Z,u()({itemRender:A},t))},B=e(10780),j=e(22622),P=e(91488),d=e(38590),W=e(53649),m=e.n(W),U=e(3772),b,f=(0,U.kc)(function(a){var t=a.css,n=a.token;return{root:t(b||(b=m()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),S=["className","children"],E={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},J=function(t){var n=t.className,r=t.children,g=I()(t,S),A=f(),v=A.styles,O=A.cx,R=(0,D.useContext)(T),w=R.loading,V=R.breadcrumb,me=R.Link,le=R.status,Pe=(0,D.useCallback)(function(){if(le){var ye;return(0,i.jsx)(B.ZP,{extra:(0,i.jsx)(me,{to:V==null||(ye=V.items)===null||ye===void 0||(ye=ye[0])===null||ye===void 0?void 0:ye.path,children:(0,i.jsx)(j.ZP,{type:"primary",children:"Go Back"})}),status:le,subTitle:E[le],title:le})}return r},[le,r,me,V==null?void 0:V.items]);return w?(0,i.jsx)(P.Z,{active:!0,className:O(v.root,n)}):(0,i.jsx)(d.Z,u()(u()({className:O(v.root,n),gap:20,vertical:!0},g),{},{children:Pe()}))},_=function(){return(0,i.jsx)(i.Fragment,{})},L=e(48305),N=e.n(L),$=e(335),G=e.n($),oe=e(1718),ae=e(12644),k=e(82227),X=e(46119),K=e(94729),ve=e(79214),M=["shape","size","src"],ce=function(t){if(typeof t=="number")return t;switch(t){case"small":return 40;case"large":return 88;default:return 64}},Se=function(t){var n=t.shape,r=n===void 0?"square":n,g=t.size,A=t.src,v=I()(t,M),O=(0,D.useMemo)(function(){return ce(g)},[g]);return(0,i.jsx)(ve.C,u()({shape:r,size:O,src:A},v))},ee,H,xe,Ae,Ie,ze,F,pe,Q,he=(0,U.kc)(function(a,t){var n=a.css,r=a.token,g=a.prefixCls,A=t.bordered,v=A===void 0?!1:A,O=t.divider,R=O===void 0?!0:O;return{root:v?n(ee||(ee=m()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),r.marginXS,r.padding,r.colorBgBase,r.borderRadius,r.boxShadowTertiary):n(H||(H=m()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),r.paddingXS,r.marginXS,R&&n(xe||(xe=m()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),r.paddingLG,r.colorSplit)),icon:n(Ae||(Ae=m()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),g,g,r.colorPrimary,g),titleBox:n(Ie||(Ie=m()([`
        margin-bottom: `,`px;
      `])),r.marginSM),subTitle:n(ze||(ze=m()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),r.marginXXS,g,r.fontSize,r.colorTextSecondary),title:n(F||(F=m()([`
        font-size: `,`px;
        font-weight: 700;
      `])),r.fontSizeHeading5),descriptions:n(pe||(pe=m()([`
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
      `])),r.marginXXS,r.fontSize,r.colorTextSecondary,g,g,r.fontSize,g,r.fontSize,r.colorTextSecondary),rightButtons:n(Q||(Q=m()([`
        justify-content: flex-end;
      `])))}}),re=["className","classNames","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],h=K.C.Paragraph,z=function(t){var n=t.className,r=t.classNames,g=t.icon,A=t.title,v=t.titleRender,O=t.subTitle,R=t.status,w=t.descriptions,V=w===void 0?[]:w,me=t.descriptionsRender,le=t.extraContent,Pe=le===void 0?{}:le,ye=t.extraContentRender,Ee=t.bordered,Te=t.divider,Ne=I()(t,re),Me=he({bordered:Ee,divider:Te}),ue=Me.styles,Ce=Me.cx,Le=(0,D.useMemo)(function(){return!g||typeof g=="string"?{src:g,size:O?"large":"default"}:(O&&g.size===void 0&&(g.size="large"),g)},[g,O]),Ze=(0,D.useMemo)(function(){var De=(0,i.jsx)("span",{className:Ce(ue.title,r==null?void 0:r.title),children:A});return v?v(De):De},[r==null?void 0:r.title,Ce,ue.title,A,v]),ot=(0,D.useMemo)(function(){var De=[],Ve=G()(V.filter(function(Ge){return!!Ge}).entries()),Ye;try{for(Ve.s();!(Ye=Ve.n()).done;){var We=N()(Ye.value,2),$e=We[0],Oe=We[1],ke=Oe.icon,Fe=Oe.text;(R||$e>=1)&&De.push((0,i.jsx)(k.Z,{dashed:!1,type:"vertical"},"divider-".concat($e))),De.push((0,i.jsxs)(d.Z,{align:"center",gap:4,children:[ke&&(0,i.jsx)(oe.Z,{title:ke.tooltip,children:ke.content}),(0,i.jsx)("span",{children:Fe})]},"desc-".concat($e)))}}catch(Ge){Ve.e(Ge)}finally{Ve.f()}return me?me(De):De},[V,me,R]),Je=(0,D.useMemo)(function(){if(!Pe&&!ye)return null;var De=(0,i.jsx)(ae.h,u()({className:ue.rightButtons},Pe));return ye?ye(De):De},[Pe,ye,ue.rightButtons]),Re=(0,D.useContext)(T),at=Re.loading,Qe=Re.status;return at?(0,i.jsxs)(d.Z,{className:Ce(ue.root,n),gap:20,children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(P.Z.Avatar,{active:!0,className:ue.icon,shape:Le==null?void 0:Le.shape,size:ce(Le==null?void 0:Le.size)})}),(0,i.jsxs)(d.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,i.jsxs)("div",{className:ue.titleBox,children:[(0,i.jsx)(P.Z.Input,{active:!0,size:25}),O&&(0,i.jsx)("div",{className:Ce(ue.subTitle,n),children:(0,i.jsx)(P.Z.Input,{active:!0,size:18})})]}),(0,i.jsx)(P.Z.Input,{active:!0,size:18})]}),(0,i.jsx)(d.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,i.jsx)(P.Z.Button,{active:!0})})]}):Qe?null:(0,i.jsxs)(d.Z,u()(u()({className:Ce(ue.root,n),gap:20},Ne),{},{children:[Le&&(0,i.jsx)(d.Z,{children:(0,i.jsx)(Se,u()({className:ue.icon},Le))}),(0,i.jsxs)(d.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,i.jsxs)(d.Z,{className:Ce(ue.titleBox,r==null?void 0:r.titleWrapper),vertical:!0,children:[Ze,O&&(0,i.jsx)(h,{className:Ce(ue.subTitle,r==null?void 0:r.subTitle),ellipsis:{rows:2},children:O})]}),(0,i.jsxs)(d.Z,{align:"center",className:Ce(ue.descriptions,r==null?void 0:r.descriptions),gap:4,children:[R&&(0,i.jsx)(X.q,u()({},R)),ot]})]}),(0,i.jsx)(d.Z,{align:"center",className:r==null?void 0:r.extraContent,flex:"1",justify:"flex-end",children:Je})]}))},Z=e(94456),ge,fe=(0,U.kc)(function(a){var t=a.css,n=a.token;return{root:t(ge||(ge=m()([`
      width: inherit;
      height: 100%;
      min-height: inherit;
      padding: `,"px ","px ",`px;
    `])),n.padding,n.paddingLG,n.paddingXL)}}),be=["loading","className","children","Link","status","gap"],p=function(t){var n=(0,Z.nB)(),r=t.loading,g=t.className,A=t.children,v=t.Link,O=v===void 0?n||ne:v,R=t.status,w=t.gap,V=w===void 0?16:w,me=I()(t,be),le=fe(me),Pe=le.styles,ye=le.cx,Ee=(0,D.useState)([]),Te=N()(Ee,2),Ne=Te[0],Me=Te[1];return(0,i.jsx)(d.Z,u()(u()({className:ye(Pe.root,g),gap:V,vertical:!0},me),{},{children:(0,i.jsx)(T.Provider,{value:{loading:r,Link:O,breadcrumb:{items:Ne,setItems:Me},status:R},children:A})}))},x,c=(0,U.kc)(function(a){var t=a.css,n=a.token;return{root:t(x||(x=m()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),n.fontFamily,n.fontWeightStrong,n.lineHeight,n.colorText)}}),o=["className"],l=function(t){var n=t.className,r=I()(t,o),g=c(),A=g.cx,v=g.styles;return(0,i.jsx)("h2",u()({className:A(v.root,n)},r))},s=p;s.Breadcrumb=y,s.Title=l,s.Header=z,s.Content=J,s.Footer=_},86346:function(we,se,e){e.d(se,{Q:function(){return he}});var q=e(26068),u=e.n(q),de=e(67825),I=e.n(de),D=e(75271),te=e(53649),i=e.n(te),C=e(3772),ne,T,ie,Y,y,B=(0,C.kc)(function(re){var h=re.css,z=re.token,Z=re.prefixCls;return{root:h(ne||(ne=i()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),z.fontFamily,z.colorText,z.colorBgContainer,z.borderRadius*2,z.boxShadowTertiary),bordered:h(T||(T=i()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),z.colorBorder),hoverable:h(ie||(ie=i()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),z.motionDurationMid,z.motionDurationMid,z.boxShadow),text:h(Y||(Y=i()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),z.colorTextSecondary),error:h(y||(y=i()([`
      color: `,`;
    `])),z.colorErrorText)}}),j=e(52676),P=["className","bordered","hoverable","children"],d=function(h){var z=h.className,Z=h.bordered,ge=Z===void 0?!1:Z,fe=h.hoverable,be=fe===void 0?!0:fe,p=h.children,x=I()(h,P),c=B(),o=c.cx,l=c.styles;return(0,j.jsx)("div",u()(u()({className:o(l.root,ge&&l.bordered,be&&l.hoverable,z)},x),{},{children:p}))},W=e(38590),m,U=(0,C.kc)(function(re){var h=re.css,z=re.token;return{root:h(m||(m=i()([`
      padding: 12px 24px 20px;
    `])))}}),b=["className","children"],f=function(h){var z=h.className,Z=h.children,ge=I()(h,b),fe=U(),be=fe.styles,p=fe.cx;return(0,j.jsx)(W.Z,u()(u()({className:p(be.root,z),gap:20,vertical:!0},ge),{},{children:Z}))},S=e(26345),E,J=(0,C.kc)(function(re){var h=re.css,z=re.token,Z=re.prefixCls,ge=70;return{root:h(E||(E=i()([`
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
    `])),Z,Z,Z,Z,ge,Z,ge)}}),_=["className","colon","column","size"],L=function(h){var z=h.className,Z=h.colon,ge=Z===void 0?!1:Z,fe=h.column,be=fe===void 0?2:fe,p=h.size,x=p===void 0?"small":p,c=I()(h,_),o=J(),l=o.cx,s=o.styles;return(0,j.jsx)(S.Z,u()({className:l(s.root,z),colon:ge,column:be,size:x},c))},N=e(27046),$=e(79214),G=e(159),oe=e(22622),ae=e(250),k=e(94729),X,K,ve,M,ce,Se,ee,H,xe,Ae=(0,C.kc)(function(re,h){var z=re.css,Z=re.token,ge=re.prefixCls,fe=h.divider,be=fe===void 0?!0:fe,p=h.iconBg,x=p===void 0?!0:p;return{root:z(X||(X=i()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),be?20:0,be&&z(K||(K=i()([`
          border-bottom: 1px solid `,`;
        `])),Z.colorSplit)),icon:z(ve||(ve=i()([`
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
      `])),ge,Z.colorPrimary,x&&z(M||(M=i()([`
            background-color: `,`;
          `])),Z.colorBgLayout),ge),titleBox:z(ce||(ce=i()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),Z.marginXXS),title:z(Se||(Se=i()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),Z.fontWeightStrong),description:z(ee||(ee=i()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),ge,Z.colorTextSecondary),extra:z(H||(H=i()([`
        margin-top: -4px;
      `]))),rightButtons:z(xe||(xe=i()([`
        justify-content: flex-end;
      `])))}}),Ie=["className","icon","title","description","extra","divider"],ze=["className","shape","size"],F=["children"],pe=k.C.Paragraph,Q=function(h){var z=h.className,Z=h.icon,ge=h.title,fe=h.description,be=h.extra,p=h.divider,x=I()(h,Ie),c=Ae({divider:p,iconBg:!(Z!=null&&Z.src)}),o=c.styles,l=c.cx,s=Z||{},a=s.className,t=s.shape,n=t===void 0?"square":t,r=s.size,g=r===void 0?72:r,A=I()(s,ze),v=be||{},O=v.children,R=I()(v,F);return(0,j.jsxs)(W.Z,u()(u()({className:l(o.root,z),gap:20},x),{},{children:[Z&&(0,j.jsx)(W.Z,{children:(0,j.jsx)($.C,u()({className:l(o.icon,a),shape:n,size:g},A))}),(0,j.jsxs)(W.Z,{flex:"1",vertical:!0,children:[(0,j.jsxs)(W.Z,{className:o.titleBox,gap:4,children:[(0,j.jsx)("div",{className:o.title,children:ge}),be&&(0,j.jsx)(W.Z,{align:"flex-start",className:o.extra,justify:"flex-end",onClick:function(V){return V.stopPropagation()},children:(0,j.jsx)(G.Z,u()(u()({},R),{},{children:O||(0,j.jsx)(oe.ZP,{icon:(0,j.jsx)(N.Z,{icon:ae.Z}),size:"small",type:"text"})}))})]}),fe&&(0,j.jsx)(pe,{className:o.description,ellipsis:{rows:2},children:fe})]})]}))},he=d;he.Header=Q,he.Content=f,he.Descriptions=L},46119:function(we,se,e){e.d(se,{q:function(){return m}});var q=e(26068),u=e.n(q),de=e(67825),I=e.n(de),D=e(27046),te=e(62272),i=e(62701),C=e(1718),ne=e(65933),T=e(75271),ie=e(53649),Y=e.n(ie),y=e(3772),B,j,P=(0,y.kc)(function(U){var b=U.css,f=U.token,S=U.prefixCls;return{root:b(B||(B=Y()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),S,S,S),tooltip:b(j||(j=Y()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),f.colorTextTertiary)}},{hashPriority:"low"}),d=e(52676),W=["tooltip","className","status","text","color"],m=function(b){var f=b.tooltip,S=b.className,E=b.status,J=b.text,_=b.color,L=I()(b,W),N=P(),$=N.cx,G=N.styles;return(0,d.jsxs)(te.Z,u()(u()({className:$(G.root,S),size:"small"},L),{},{children:[(0,d.jsx)(i.Z,{status:E,text:J,color:_}),f&&(0,d.jsx)(C.Z,{className:G.tooltip,title:f,children:(0,d.jsx)(D.Z,{icon:ne.Z})})]}))}},94729:function(we,se,e){e.d(se,{Z:function(){return d}});var q=e(26068),u=e.n(q),de=e(48305),I=e.n(de),D=e(67825),te=e.n(D),i=e(60399),C=e(1718),ne=e(28026),T=e.n(ne),ie=e(81792),Y=e.n(ie),y=e(18342),B=e(75271),j=e(52676),P=["time","format","relativeTime","tooltip"];T().extend(Y());var d=i.Z,W=function(b){return T()(b?new Date(b):new Date).fromNow()},m=function(b){var f,S=b.time,E=b.format,J=b.relativeTime,_=J===void 0?!0:J,L=b.tooltip,N=te()(b,P),$=(0,B.useState)(W(S)),G=I()($,2),oe=G[0],ae=G[1],k=(0,B.useCallback)(function(M){var ce=T()(),Se=T()(M),ee=ce.diff(Se);if(ee>0&&ee<60*60*1e3)return setInterval(function(){ae(W(M))},60*1e3)},[]);(0,B.useEffect)(function(){var M;return _&&(M=k(new Date(S))),function(){M&&clearInterval(M)}},[_,k,S]),(0,B.useEffect)(function(){if(_){var M=W(S);M!==oe&&(ae(M),k(new Date(S)))}},[S,_,oe,k]);var X=T()(S).format(E||"YYYY-MM-DD HH:mm:ss"),K=_?oe:X,ve=(f=L==null?void 0:L.title)!==null&&f!==void 0?f:_?X:void 0;return ve&&(0,y.Z)(N,"ellipsis.tooltip.title",void 0),(0,j.jsx)(C.Z,u()(u()({},L||{}),{},{title:ve,children:(0,j.jsx)(d.Text,u()(u()({},N),{},{children:K}))}))};d.Time=m,se.C=d},15094:function(we,se,e){e.d(se,{_:function(){return q}});var q={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}}},82846:function(we,se,e){e.d(se,{J:function(){return y}});var q=e(48305),u=e.n(q),de=e(67825),I=e.n(de),D=e(75271),te=function(){try{var P,d;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((P=window)===null||P===void 0?void 0:P.SpeechRecognition)||((d=window)===null||d===void 0?void 0:d.webkitSpeechRecognition)}catch(W){}},i=function(){try{var P,d;return(globalThis==null?void 0:globalThis.speechSynthesis)||((P=window)===null||P===void 0?void 0:P.speechSynthesis)||((d=window)===null||d===void 0?void 0:d.webkitSpeechSynthesis)}catch(W){}},C=function(){try{var P,d;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((P=window)===null||P===void 0?void 0:P.SpeechSynthesisUtterance)||((d=window)===null||d===void 0?void 0:d.webkitSpeechSynthesisUtterance)}catch(W){}},ne=te(),T=i(),ie=C(),Y=["voice","rate","pitch"],y=function(P,d){var W=d.voice,m=d.rate,U=d.pitch,b=I()(d,Y),f=(0,D.useState)(T==null?void 0:T.getVoices()),S=u()(f,2),E=S[0],J=S[1],_=(0,D.useState)(P),L=u()(_,2),N=L[0],$=L[1],G=(0,D.useState)(!1),oe=u()(G,2),ae=oe[0],k=oe[1],X=(0,D.useMemo)(function(){if(ie){var M=new ie(N);return M.voice=E.find(function(ce){return ce.name===W}),M.onstart=function(){return k(!0)},M.onend=function(){return k(!1)},U&&(M.pitch=U*10),m&&(M.rate=m*10),M}},[N,E,m,U,W]);(0,D.useEffect)(function(){T&&(T.onvoiceschanged=function(){J(T==null?void 0:T.getVoices())},T.onstart=function(){return k(!0)},T.onend=function(){return k(!1)})},[]);var K=(0,D.useCallback)(function(){var M;b==null||(M=b.onStart)===null||M===void 0||M.call(b),T==null||T.speak(X)},[b,X]),ve=(0,D.useCallback)(function(){var M,ce;b==null||(M=b.onStop)===null||M===void 0||M.call(b),(ce=speechSynthesis)===null||ce===void 0||ce.cancel(),k(!1)},[b]);return{isLoading:ae,setText:$,start:K,stop:ve}},B=null}}]);
