"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[40119],{12644:function(Se,Y,e){e.d(Y,{h:function(){return S}});var H=e(57724),u=e.n(H),re=e(26068),A=e.n(re),M=e(67825),te=e.n(M),r=e(62272),E=e(22622),q=e(159),T=e(75271),oe=e(52676),J=["items","onClick","size"],y=["key","label"],I=["key","label"],S=function(l){var B=l.items,x=B===void 0?[]:B,R=l.onClick,d=R===void 0?function(){}:R,g=l.size,C=te()(l,J);if(x.length<=2)return(0,oe.jsx)(r.Z,A()(A()({align:"end",size:12},C),{},{children:x.map(function(P){var p=P.key,t=P.label,i=te()(P,y);return(0,oe.jsx)(E.ZP,A()(A()({onClick:function(a){return d(p,a)},size:g},i),{},{children:t}),p)})}));var N=u()(x),F=N[0],$=N.slice(1),K=F,w=K.key,se=K.label,k=te()(K,I);return(0,oe.jsx)(q.Z.Button,A()(A()(A()({onClick:function(p){return d(w,p)}},k),{},{menu:{onClick:function(p){var t=p.key,i=p.domEvent;return d(t,i)},items:$},overlayStyle:{minWidth:100},size:g},C),{},{children:se}),w)}},79213:function(Se,Y,e){e.d(Y,{w:function(){return B}});var H=e(26068),u=e.n(H),re=e(67825),A=e.n(re),M=e(62250),te=e(17394),r=e(97601),E=e(68537),q=e(75271),T=e(53649),oe=e.n(T),J=e(3772),y,I=(0,J.kc)(function(x,R){var d=x.css,g=x.token,C=x.prefixCls,N=R.collapsible;return{root:d(y||(y=oe()([`
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
      `])),g.margin,C,g.paddingSM,g.paddingSM,g.paddingSM,N===!1?g.paddingSM:0,g.fontSize,g.padding,g.padding,g.paddingSM,g.paddingSM,C,g.paddingXXS,g.colorBgContainer,g.paddingXXS,g.padding)}}),S=e(52676),L=["className","variant","collapsible","expandIcon"],l=M.Z.Group,B=function(R){var d=R.className,g=R.variant,C=R.collapsible,N=R.expandIcon,F=N===void 0?function(k){return(0,S.jsx)(te.Z,{icon:k.isActive?r.Z:E.Z,size:{blockSize:24,fontSize:14,strokeWidth:3}})}:N,$=A()(R,L),K=I({collapsible:C}),w=K.styles,se=K.cx;return(0,S.jsx)(l,u()({className:se(w.root,d),collapsible:g==="pure"?!1:C,expandIcon:F,variant:g},$))}},94456:function(Se,Y,e){e.d(Y,{E_:function(){return r},iV:function(){return E},nc:function(){return T},nB:function(){return oe}});var H=e(75271),u=e(56264),re="https://unpkg.com",A="https://registry.npmmirror.com",M=function(y){var I=y.pkg,S=y.version,L=S===void 0?"latest":S,l=y.path,B=y.proxy;switch(B){case"unpkg":return(0,u.Z)(re,"".concat(I,"@").concat(L),l);default:return(0,u.Z)(A,I,L,"files",l)}},te=e(52676),r=(0,H.createContext)(null),E=(0,H.memo)(function(J){var y=J.children,I=J.config;return(0,te.jsx)(r.Provider,{value:I,children:y})}),q=function(y){var I=y.pkg,S=y.version,L=y.path;return M({path:L,pkg:I,proxy:"aliyun",version:S})},T=function(){var y=(0,H.useContext)(r);return y?(y==null?void 0:y.proxy)!=="custom"?function(I){var S=I.pkg,L=I.version,l=I.path;return M({path:l,pkg:S,proxy:y.proxy,version:L})}:(y==null?void 0:y.customCdnFn)||q:q},oe=function(){var y=(0,H.useContext)(r);return y==null?void 0:y.Link}},26345:function(Se,Y,e){e.d(Y,{w:function(){return x},Z:function(){return R}});var H=e(26068),u=e.n(H),re=e(67825),A=e.n(re),M=e(85743),te=e(75271),r=e(53649),E=e.n(r),q=e(3772),T,oe,J,y,I,S,L=(0,q.kc)(function(d,g){var C=d.css,N=d.token,F=d.prefixCls,$=g.borderedBottom,K=g.borderedBottomDashed,w=g.borderedTop,se=g.borderedTopDashed,k=g.size,P={small:"".concat(N.paddingXS,"px ").concat(N.padding,"px"),middle:"".concat(N.padding,"px ").concat(N.paddingLG,"px"),default:"".concat(N.paddingSM,"px ").concat(N.paddingLG,"px")},p=$||K;return{custom:C(T||(T=E()([`
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
      `])),F,F,p&&k&&C(oe||(oe=E()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),F,F,P[k],F),$&&C(J||(J=E()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),F,N.colorSplit),K&&C(y||(y=E()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),F,N.colorSplit),w&&C(I||(I=E()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),F,N.colorSplit),se&&C(S||(S=E()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),F,N.colorSplit))}},{hashPriority:"low"}),l=e(52676),B=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],x=function(g){var C=g.className,N=g.borderedBottom,F=g.borderedBottomDashed,$=g.borderedTop,K=g.borderedTopDashed,w=A()(g,B),se=L({borderedBottom:N,borderedBottomDashed:F,borderedTop:$,borderedTopDashed:K,size:w.size}),k=se.styles,P=se.cx;return(0,l.jsx)(M.Z,u()(u()({},w),{},{className:P(k.custom,C)}))},R=x;x.Item=M.Z.Item},82227:function(Se,Y,e){e.d(Y,{i:function(){return x},Z:function(){return R}});var H=e(26068),u=e.n(H),re=e(48305),A=e.n(re),M=e(67825),te=e.n(M),r=e(30657),E=e(19728),q=e(13761),T=e(62272),oe=e(75271),J=e(53649),y=e.n(J),I=e(3772),S,L=(0,I.kc)(function(d){var g=d.css,C=d.token;return{custom:g(S||(S=y()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),C.colorPrimary,C.colorPrimaryHover)}},{hashPriority:"low"}),l=e(52676),B=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],x=function(g){var C=g.mode,N=C===void 0?"line":C,F=g.content,$=g.defaultOpen,K=g.iconPlacement,w=K===void 0?"left":K,se=g.openIcon,k=g.closeIcon,P=g.type,p=te()(g,B),t=L({}),i=t.styles,s=N==="expanded",a=(0,oe.useState)($),o=A()(a,2),n=o[0],ne=o[1],z=k||(0,l.jsx)(r.Z,{}),ce=se||(0,l.jsx)(E.Z,{}),ue=s&&(0,l.jsx)("span",{children:n?z:ce});return N==="line"||P==="vertical"?(0,l.jsx)(q.Z,u()({type:P},p)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(q.Z,u()(u()({type:P},p),{},{children:(0,l.jsx)("span",{className:s?i.custom:"",onClick:function(){ne(!n)},children:(0,l.jsxs)(T.Z,{size:6,children:[w!=="right"&&ue,(0,l.jsx)("span",{children:F}),w==="right"&&ue]})})})),s&&(0,l.jsx)("div",{style:{display:n?"block":"none"},children:g.children})]})},R=x},58724:function(Se,Y,e){e.d(Y,{E:function(){return ke}});var H=e(90228),u=e.n(H),re=e(87999),A=e.n(re),M=e(26068),te=e.n(M),r=e(15558),E=e.n(r),q=e(67825),T=e.n(q),oe=e(31759),J=e.n(oe),y=e(3467),I=e(27046),S=e(28562),L=e(1718),l=e(22622),B=e(37805),x=e(38590),R=e(14539),d=e(75271),g=e(94729),C=e(79213),N=e(48305),F=e.n(N),$=(0,d.memo)(function(b){var m=b.name,v=b.update,j=S.Z.useWatch(m),G=(0,d.useState)(0),U=F()(G,2),de=U[0],ie=U[1];return(0,d.useEffect)(function(){(j==null?void 0:j.length)!==de&&(v(),ie(j==null?void 0:j.length))},[de,j,v]),null}),K=e(335),w=e.n(K),se=e(82092),k=e.n(se),P=e(54834),p="__YUNTI_FORM_COLLAPSE_LIST_FIELD_KEY_PATH",t=function(m){return m.join("-")},i=function(m,v,j){var G,U=S.Z.useFormInstance(),de=(0,d.useState)([]),ie=F()(de,2),ge=ie[0],he=ie[1],ve=(0,d.useState)([]),xe=F()(ve,2),fe=xe[0],V=xe[1],c=(0,d.useCallback)(function(){return he(U.getFieldValue(m))},[U,m]),O=(G=(0,d.useMemo)(function(){return j.find(function(D){return!!D.name&&!D.noStyle})},[j]))===null||G===void 0?void 0:G.name,f=(0,d.useCallback)(function(D){if(!m)return{dataSource:[],allExpandRowKeys:[]};var _=[],Q=function me(W,ee,pe){var Z=(0,P.Z)(W);return Z||(Z=k()({},p,[])),Z[p]=[].concat(E()(pe),[ee]),Z[v]&&Array.isArray(Z[v])&&(_.push(t(Z[p])),Z[v]=Z[v].map(function(le,we){return me(le,we,Z[p])})),Z};return{dataSource:(D==null?void 0:D.map(function(me,W){return Q(me,W,[])}))||[],allExpandRowKeys:_}},[v,m]),h=(0,d.useCallback)(function(D,_){var Q=[],me=w()(D.entries()),W;try{for(me.s();!(W=me.n()).done;){var ee=F()(W.value,2),pe=ee[0],Z=ee[1];pe===D.length-1?(Q.push(Z),_&&Q.push(_)):Q.push(Z,v)}}catch(le){me.e(le)}finally{me.f()}return Q},[v]),ae=(0,d.useCallback)(function(D,_){var Q=_[p];return{add:function(W,ee){var pe=h(Q),Z=[m].concat(E()(pe),[v]),le=(0,P.Z)(U.getFieldValue(Z))||[],we=ee!=null?ee:le.length;if(le.splice(we,0,W),U.setFieldValue(Z,le),O){var Ie=[].concat(E()(Z),[we,O]);setTimeout(function(){U.focusField(Ie)},200)}V(E()(new Set([].concat(E()(fe),[t(Q)])))),c()},remove:function(W){if(Q.length<=1){D.remove(W),c();return}var ee=[m].concat(E()(h(Q).slice(0,-1))),pe=(0,P.Z)(U.getFieldValue(ee))||[],Z=[];Array.isArray(W)?Z.push.apply(Z,E()(W)):Z.push(W);var le=pe.filter(function(we,Ie){return!Z.includes(Ie)});U.setFieldValue(ee,le.length>0?le:void 0),c()},move:function(W,ee){if(Q.length<=1)return D.move(W,ee);var pe=[m].concat(E()(h(Q).slice(0,-1))),Z=(0,P.Z)(U.getFieldValue(pe))||[];if(W<0||ee<0||W>=Z.length||ee>=Z.length){console.warn(new Error("\u7D22\u5F15\u8D85\u51FA\u6570\u7EC4\u8303\u56F4"));return}var le=[Z[ee],Z[W]];Z[W]=le[0],Z[ee]=le[1],U.setFieldValue(pe,Z),c()},update:function(){return c()}}},[v,fe,O,U,h,m,c]);return{values:ge,updateValues:c,expandedRowKeys:fe,setExpandedRowKeys:V,fieldValuesToDataSource:f,getFieldPath:h,getFormListOperation:ae,firstColumnFormItemName:O}},s=e(53649),a=e.n(s),o=e(3772),n,ne,z,ce,ue=(0,o.kc)(function(b){var m=b.css,v=b.token,j=b.prefixCls;return{empty:m(n||(n=a()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),v.paddingXS,v.paddingSM,v.colorTextTertiary),list:m(ne||(ne=a()([`
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
    `])),j,j,v.colorTextTertiary,j,v.marginXS,j),noFormItem:m(z||(z=a()([`
      height: `,`px;
      color: `,`;
    `])),v.controlHeight,v.colorTextTertiary),readOnlyItem:m(ce||(ce=a()([`
      height: `,`px;
      color: `,`;
    `])),v.controlHeight,v.colorTextBase)}}),X=e(52676),ye=["collapsible","extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style","defaultExpandAllRows","indentSize","childrenColumnName","rowHoverable"],Pe=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width","className"],je=["key"],Ne=g.C.Text,Oe=function(m){var v=m.id,j=m.value;return J()(j)==="object"?(console.warn("".concat(v," => ").concat(j)),"-"):(0,X.jsx)("span",{children:j})},ke=(0,d.memo)(function(b){var m=b.collapsible,v=b.extra,j=b.expandIcon,G=b.icon,U=b.title,de=b.variant,ie=b.defaultActive,ge=b.empty,he=ge===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":ge,ve=b.columns,xe=ve===void 0?[]:ve,fe=b.disabled,V=b.readOnly,c=b.addOneFieldDefault,O=b.disableRemoveWhenOneField,f=b.maxFileds,h=b.name,ae=b.addParams,D=b.className,_=b.onRemove,Q=b.fieldRemoveButton,me=Q===void 0?!0:Q,W=b.style,ee=b.defaultExpandAllRows,pe=b.indentSize,Z=pe===void 0?16:pe,le=b.childrenColumnName,we=le===void 0?"children":le,Ie=b.rowHoverable,Ye=Ie===void 0?!0:Ie,$e=T()(b,ye),Ce=ue(),Ae=Ce.cx,Ee=Ce.styles,Ve=(0,d.useRef)(),Te=S.Z.useFormInstance(),Fe=i(h,we,xe),Re=Fe.values,Ue=Fe.updateValues,st=Fe.expandedRowKeys,Le=Fe.setExpandedRowKeys,Ze=Fe.fieldValuesToDataSource,et=Fe.getFormListOperation,qe=Fe.getFieldPath,Ke=Fe.firstColumnFormItemName,tt=(0,d.useMemo)(function(){return Ze(Re)},[Ze,Re]),Be=tt.dataSource,it=(0,d.useMemo)(function(){return Be==null?void 0:Be.some(function(De){return De[we]})},[we,Be]);(0,d.useEffect)(function(){Ue()},[Ue,V]),(0,d.useEffect)(function(){var De=Te.getFieldValue(h),Me=Ze(De),ze=Me.allExpandRowKeys;ee&&Le(ze)},[ee,Ze,Te,h,Le]);var He=(0,d.useCallback)(function(){if(!ae)return[];var De=typeof ae=="function"?ae():ae;return[De.defaultValue,De.insertIndex]},[ae]),bt=(0,d.useCallback)(function(De){var Me=Te.getFieldValue([h,De]);return _==null?void 0:_(Me)},[Te,h,_]);return(0,d.useEffect)(function(){var De;if(c&&(!(Te!=null&&Te.getFieldValue(h))||(Te==null||(De=Te.getFieldValue(h))===null||De===void 0?void 0:De.length)===0)){var Me;(Me=Ve.current)===null||Me===void 0||Me.call.apply(Me,[Ve].concat(E()(He()))),setTimeout(function(){Te.focusField([h,0,Ke])},200)}},[c,He,Te,h,Ke,Ue]),(0,X.jsxs)(C.w,{extra:v===void 0?h&&!V&&(0,X.jsx)(L.Z,{title:f&&"\u6700\u591A\u6DFB\u52A0 ".concat(f," \u9879"),children:(0,X.jsx)(l.ZP,{disabled:fe||!!(f&&(Re==null?void 0:Re.length)===f),icon:(0,X.jsx)(y.Z,{}),onClick:function(Me){var ze;Me.stopPropagation(),(ze=Ve.current)===null||ze===void 0||ze.call.apply(ze,[Ve].concat(E()(He()))),setTimeout(function(){Te.focusField([h,Te.getFieldValue(h).length-1,Ke])},200)},size:"small",type:"text"})}):v,className:D,collapsible:m,expandIcon:j,icon:G,title:U,variant:de,defaultActive:ie,style:W,children:[!it&&(0,X.jsx)($,{name:h,update:Ue}),h?(0,X.jsx)(S.Z.List,te()(te()({name:h},$e),{},{children:function(Me,ze){var yt=ze.add,xt=ze.remove;return Ve.current=function(be,We){yt(be,We),Ue()},(0,X.jsx)(B.Z,{className:Ee.list,columns:[].concat(E()(xe.map(function(be){var We=be.label,nt=be.name,_e=be.render,Ge=be.dependencies,Qe=be.rules,lt=be.align,ot=be.ellipsis,gt=be.fixed,Je=be.responsive,jt=be.shouldCellUpdate,St=be.width,at=be.className,kt=T()(be,Pe);return{title:We,dataIndex:nt,align:lt,ellipsis:ot,fixed:gt,responsive:Je,shouldCellUpdate:jt,width:St,render:function(dt,ft,rt){var ct=Me[rt]||{},ut=ct.name,pt=ft[p],mt=[h].concat(E()(qe(pt))),vt=mt.slice(0,-1),Ct=ct.key,Tt=T()(ct,je),Xe=_e==null?void 0:_e(ut!=null?ut:pt.at(-1),rt,et(ze,ft),mt);if(!nt)return(0,X.jsx)(x.Z,{align:"center",className:Ae(Ee.noFormItem,at),children:Xe});if(Xe!==void 0&&J()(Xe)!=="object")return(0,X.jsx)(x.Z,{align:"center",className:Ae(Ee.noFormItem,at),children:Xe.toString()});var ht={};return fe!==void 0&&(ht.disabled=fe),V===!0?(0,X.jsx)(x.Z,{align:"center",className:Ae(Ee.readOnlyItem,at),children:dt!=null?dt:(0,X.jsx)(Ne,{type:"secondary",children:"-"})}):(0,X.jsx)(S.Z.Item,te()(te()(te()({className:at},Tt),{},{dependencies:typeof Ge=="function"?Ge(vt,rt):Ge,name:qe(pt,nt),rules:typeof Qe=="function"?Qe(vt,rt):Qe},kt),{},{children:Xe?d.cloneElement(Xe,ht):(0,X.jsx)(Oe,{})}),Ct)}}})),[!V&&me!==!1&&{title:"",dataIndex:"del",render:function(We,nt,_e){var Ge=Me[_e];if(Ge){var Qe=Ge.name;return(0,X.jsx)(S.Z.Item,{children:(0,X.jsx)(l.ZP,{disabled:fe||O&&Me.length===1,icon:(0,X.jsx)(I.Z,{icon:R.Z}),onClick:A()(u()().mark(function lt(){var ot;return u()().wrap(function(Je){for(;;)switch(Je.prev=Je.next){case 0:return Je.next=2,bt(Qe);case 2:ot=Je.sent,ot!==!1&&(xt(Qe),Ue());case 4:case"end":return Je.stop()}},lt)})),type:"text"})})}}}]).filter(function(be){return!!be}),dataSource:Be,expandable:{expandedRowKeys:st,childrenColumnName:we,onExpandedRowsChange:function(We){Le(We)}},indentSize:Z,locale:{emptyText:he},pagination:!1,rowHoverable:Ye,rowKey:function(We){return t(We[p])},size:"small"})}})):(0,X.jsx)("div",{className:Ee.empty,children:he})]})})},62719:function(Se,Y,e){e.d(Y,{E:function(){return u.E},l:function(){return re}});var H=e(28562),u=e(58724),re=H.Z;re.CollapseList=u.E},90858:function(Se,Y,e){e.d(Y,{d:function(){return se}});var H=e(27046),u=e(71795),re=e(5312),A=e(75271),M=e(90142),te=e(90228),r=e.n(te),E=e(87999),q=e.n(E),T=e(38794),oe=e(76940),J=e(49505),y=e(15094),I=function(P){var p=P?"dark":"light",t=y._.gray[p][11],i=y._.gray[p][7],s=P?y._.red[p][9]:y._.volcano[p][9],a=P?y._.gold[p][9]:y._.orange[p][9],o=P?y._.lime[p][9]:y._.green[p][9],n=P?y._.blue[p][9]:y._.geekblue[p][9];return{colors:{"editor.foreground":t},name:p,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:o},enumMember:{foreground:n},macro:{foreground:o},"parameter.label:dart":{foreground:i},"property:dart":{foreground:o},tomlArrayKey:{foreground:s},"variable.constant":{foreground:o},"variable.defaultLibrary":{foreground:s},"variable:dart":{foreground:o}},tokenColors:[{scope:"meta.embedded",settings:{foreground:i}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:t}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:n}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:o}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:t}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:i}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:s}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:s}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:i}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:a}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:s}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:t}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:n}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:t}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:n}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:o}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:i}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:i}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:s}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:a}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:o}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:t}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:t}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:i}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:i}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:a}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:s}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:o}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:s}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:s}},{name:"java source",scope:"source.java",settings:{foreground:t}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:i}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:a}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:s}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:n}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:t}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:n}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:n}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:n}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:o}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:n}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:o}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:t}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:o}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:n}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:s}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:s}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:t}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:o}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:n}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:t}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:o}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:a}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:i}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:n}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:n}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:n}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:t}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:n}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:n}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:i}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:n}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:n}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:n}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:o}},{name:"python type",scope:"support.type.python",settings:{foreground:n}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:n}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:o}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:i}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:a}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:o}},{name:"Operators",scope:"keyword.operator",settings:{foreground:i}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:n}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:n}},{name:"Keywords",scope:"keyword",settings:{foreground:n}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:s}},{name:"Variables",scope:"variable",settings:{foreground:t}},{name:"Variables",scope:"variable.c",settings:{foreground:i}},{name:"Language variables",scope:"variable.language",settings:{foreground:s}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:i}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:s}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:n}},{name:"Packages",scope:"token.package",settings:{foreground:i}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:a}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:s}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:s}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:s}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:s}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:t}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:s}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:n}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:o}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:a}},{name:"Storage",scope:"storage",settings:{foreground:n}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:n}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:n}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:s}},{name:"Support",scope:"support.function",settings:{foreground:n}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:t}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:i}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:o}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:i}},{name:"Strings",scope:"string",settings:{foreground:o}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:n}},{name:"Integers",scope:"constant.numeric",settings:{foreground:o}},{name:"Constants",scope:"constant",settings:{foreground:o}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:o}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:t}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:o}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:a}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:o}},{name:"Selector",scope:"meta.selector",settings:{foreground:n}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:s}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:a}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:t}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:o}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:s}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:n}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:t}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:t}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:a}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:t}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:t}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:i}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:t}},{name:"Broken",scope:"invalid.broken",settings:{foreground:t}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:t}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:o}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:t}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:n}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:n}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:s}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:n}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:n}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:i}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:i}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:s}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:s}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:a}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:i}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:o}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:o}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:a}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:n}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:n}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:n}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:n}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:a}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:n}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:i}},{name:"brace function",scope:"function.brace",settings:{foreground:i}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:i}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:n}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:n}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:n}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:o}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:o}},{name:"sass selector",scope:"selector.sass",settings:{foreground:t}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:s}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:i}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:s}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:t}},{scope:"token.info-token",settings:{foreground:a}},{scope:"token.warn-token",settings:{foreground:o}},{scope:"token.error-token",settings:{foreground:s}},{scope:"token.debug-token",settings:{foreground:n}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:n}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:i}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:n}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:a}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:s}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:t}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:t}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:o}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:o}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:o}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:o}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:n}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:s}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:n}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:s}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:n}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:o}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:n}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:t}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:n}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:s}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:t}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:n}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:t}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:o}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:t}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:s}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:s}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:a}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:t}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:o}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:s}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:n}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:t}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:s}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:s}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:n}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:t}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:n}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:n}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:i}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:o}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:i}},{name:"link",scope:["constant.character.xi"],settings:{foreground:a}},{name:"accent",scope:["accent.xi"],settings:{foreground:a}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:o}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:t}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:i}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:s}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:t}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:i}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:i}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:i}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:i}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:n}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:s}},{scope:["entity.name.variable.field.cs"],settings:{foreground:t}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:t}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:o}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:s}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:i}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:s}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:t}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:s}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:t}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:i}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:n}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:o}},{scope:["constant.character.escape"],settings:{foreground:n}},{scope:["string.regexp"],settings:{foreground:t}},{scope:["log.info"],settings:{foreground:o}},{scope:["log.warning"],settings:{foreground:s}},{scope:["log.error"],settings:{foreground:t}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:p}},S=e(34731),L="txt",l=[L],B,x=function(){var k=q()(r()().mark(function P(p){var t,i;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t=B,i=p.toLowerCase(),!(t&&l.includes(i))){a.next=4;break}return a.abrupt("return",t);case 4:return S.Q.includes(i)&&!l.includes(i)&&l.push(i),a.next=7,(0,oe.e$)({langs:l,themes:[I(!0),I(!1),"catppuccin-latte","catppuccin-mocha"]});case 7:return t=a.sent,B=t,a.abrupt("return",t);case 10:case"end":return a.stop()}},P)}));return function(p){return k.apply(this,arguments)}}(),R=function(P,p,t){return(0,J.ZP)([p==null?void 0:p.toLowerCase(),t?"dark":"light",P].join("-"),q()(r()().mark(function i(){var s,a,o,n;return r()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.prev=0,s=p.toLowerCase(),a=t?"dark":"light",s==="md"&&(a=t?"catppuccin-mocha":"catppuccin-latte"),z.next=6,x(s);case 6:return o=z.sent,n=o==null?void 0:o.codeToHtml(P,{lang:S.Q.includes(s)?s:L,theme:a,transformers:[(0,T.hu)(),(0,T.d0)(),(0,T.dY)(),(0,T.Eu)(),(0,T.p4)()]}),z.abrupt("return",n);case 11:return z.prev=11,z.t0=z.catch(0),z.abrupt("return","");case 14:case"end":return z.stop()}},i,null,[[0,11]])})),{revalidateOnFocus:!1})},d=e(53649),g=e.n(d),C=e(3772),N,F,$,K=(0,C.kc)(function(k){var P=k.css,p=k.token,t=k.cx,i=k.prefixCls,s=k.stylish,a="".concat(i,"-highlighter");return{loading:t(s.blur,P(N||(N=g()([`
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
      `])),p.fontFamilyCode,p.colorTextTertiary,p.borderRadius)),shiki:t("".concat(a,"-shiki"),P(F||(F=g()([`
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
      `])),p.colorFillTertiary,p.colorWarningBg,p.colorErrorBg,p.colorFillTertiary,p.colorBorderSecondary,p.borderRadius,p.colorErrorBg,p.colorErrorText,p.colorSuccessBg,p.colorSuccessText)),unshiki:P($||($=g()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),p.colorTextDescription)}}),w=e(52676),se=(0,A.memo)(function(k){var P=k.children,p=k.language,t=k.className,i=k.style,s=K(),a=s.styles,o=s.cx,n=(0,u.r)(),ne=n.isDarkMode,z=R(P.trim(),p,ne),ce=z.data,ue=z.isLoading;return(0,w.jsxs)(w.Fragment,{children:[ue||!ce?(0,w.jsx)("div",{className:o(a.unshiki,t),style:i,children:(0,w.jsx)("pre",{children:(0,w.jsx)("div",{children:P.trim()})})}):(0,w.jsx)("div",{className:o(a.shiki,t),dangerouslySetInnerHTML:{__html:ce},style:i}),ue&&(0,w.jsx)(M.D,{align:"center",className:a.loading,gap:8,horizontal:!0,justify:"center",children:(0,w.jsx)(H.Z,{icon:re.Z,spin:!0})})]})})},22435:function(Se,Y,e){e.d(Y,{EL:function(){return t},oP:function(){return s}});var H=e(26068),u=e.n(H),re=e(67825),A=e.n(re),M=e(76417),te=e(92946),r=e(43728),E=e(75271),q=e(48305),T=e.n(q),oe=e(17394),J=e(98721),y=e(97601),I=e(68537),S=e(90142),L=e(34731),l=e(90858),B=e(53649),x=e.n(B),R=e(3772),d,g,C,N,F,$,K,w,se=(0,R.kc)(function(a,o){var n=a.token,ne=a.css,z=a.cx,ce=a.prefixCls,ue=a.stylish,X="".concat(ce,"-highlighter"),ye="".concat(X,"-hover-btn"),Pe="".concat(X,"-hover-lang"),je=ne(d||(d=x()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),o==="block"?n.colorFillTertiary:"transparent",o==="block"?"transparent":n.colorBorder,o==="block"?n.colorFillTertiary:n.colorFillQuaternary);return{button:z(ye,ne(g||(g=x()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),o==="pure"?0:"12px",o==="pure"?0:"12px")),container:z(X,o!=="pure"&&je,ne(C||(C=x()([`
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
        `])),n.borderRadius,n.motionEaseOut,ye,Pe,o==="pure"?0:"16px")),header:ne(N||(N=x()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),n.colorFillQuaternary),lang:z(Pe,ue.blur,ne(F||(F=x()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),n.fontFamilyCode,n.colorTextSecondary)),nowrap:ne($||($=x()([`
        code {
          text-wrap: nowrap !important;
        }
      `]))),scroller:ne(K||(K=x()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:ne(w||(w=x()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),n.colorTextDescription,ce,n.colorTextDescription)}}),k=e(52676),P=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],p=L.Q.map(function(a){return{label:a,value:a.toLowerCase()}}),t=(0,E.memo)(function(a){var o=a.children,n=a.language,ne=n===void 0?"markdown":n,z=a.className,ce=a.style,ue=a.allowChangeLanguage,X=ue===void 0?!1:ue,ye=a.fileName,Pe=a.icon,je=a.contentStyle,Ne=A()(a,P),Oe=(0,E.useState)(!0),ke=T()(Oe,2),b=ke[0],m=ke[1],v=(0,E.useState)(ne||"markdown"),j=T()(v,2),G=j[0],U=j[1],de=se("block"),ie=de.styles,ge=de.cx,he=ge(ie.container,z);return(0,k.jsxs)("div",u()(u()({className:he,"data-code-type":"highlighter",style:ce},Ne),{},{children:[(0,k.jsxs)(S.D,{align:"center",className:ie.header,horizontal:!0,justify:"space-between",children:[(0,k.jsx)(oe.Z,{icon:b?y.Z:I.Z,onClick:function(){return m(!b)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),X&&!ye?(0,k.jsx)(J.default,{className:ie.select,onSelect:U,options:p,size:"small",suffixIcon:!1,value:G.toLowerCase(),variant:"borderless"}):(0,k.jsxs)(S.D,{align:"center",className:ie.select,gap:2,horizontal:!0,children:[Pe,(0,k.jsx)("span",{children:ye||G})]}),(0,k.jsx)(te.Z,{content:o,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,k.jsx)(l.d,{language:G==null?void 0:G.toLowerCase(),style:b?je:u()(u()({},je),{},{height:0,overflow:"hidden"}),children:o})]}))}),i=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap"],s=(0,E.memo)(function(a){var o=a.fullFeatured,n=a.copyButtonSize,ne=n===void 0?"site":n,z=a.children,ce=a.language,ue=a.className,X=a.style,ye=a.copyable,Pe=ye===void 0?!0:ye,je=a.showLanguage,Ne=je===void 0?!0:je,Oe=a.type,ke=Oe===void 0?"block":Oe,b=a.spotlight,m=a.allowChangeLanguage,v=a.fileName,j=a.icon,G=a.contentStyle,U=a.wrap,de=A()(a,i),ie=se(ke),ge=ie.styles,he=ie.cx,ve=he(ge.container,!U&&ge.nowrap,ue);return o?(0,k.jsx)(t,u()(u()({allowChangeLanguage:m,className:ue,contentStyle:G,fileName:v,icon:j,language:ce,style:X},de),{},{children:z})):(0,k.jsxs)("div",u()(u()({className:ve,"data-code-type":"highlighter",style:X},de),{},{children:[b&&(0,k.jsx)(M.Z,{size:240}),Pe&&(0,k.jsx)(te.Z,{className:ge.button,content:z,placement:"left",size:ne}),Ne&&ce&&(0,k.jsx)(r.Z,{className:ge.lang,children:ce.toLowerCase()}),(0,k.jsx)("div",{className:ge.scroller,children:(0,k.jsx)(l.d,{language:ce==null?void 0:ce.toLowerCase(),style:G,children:z})})]}))})},33985:function(Se,Y,e){e.d(Y,{h:function(){return P},P:function(){return I.Pz}});var H=e(26068),u=e.n(H),re=e(48305),A=e.n(re),M=e(67825),te=e.n(M),r=e(17394),E=e(92946),q=e(38590),T=e(71795),oe=e(97601),J=e(68537),y=e(75271),I=e(2998),S=e(86590),L=e(4643),l=e(94729),B=e(53649),x=e.n(B),R=e(3772),d,g,C,N,F,$,K=(0,R.kc)(function(p,t){var i=p.token,s=p.css,a=p.cx,o=p.prefixCls,n="".concat(o,"-json-viewer"),ne=t==="block",z=s(d||(d=x()([`
      background-color: `,`;

      &:hover {
        background-color: `,`;
      }
    `])),ne?i.colorFillTertiary:"transparent",ne?i.colorFillTertiary:i.colorFillQuaternary);return{container:a(n,t!=="pure"&&z,s(g||(g=x()([`
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
        `])),i.borderRadius,i.motionEaseOut)),content:s(C||(C=x()([`
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),t==="pure"?0:i.padding),header:s(N||(N=x()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),i.colorFillQuaternary),title:s(F||(F=x()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),i.margin),titleText:s($||($=x()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),i.fontSize,o,i.colorTextDescription)}}),w=e(52676),se=["type","fullFeatured","title","icon","contentStyle","classNames","className","collapseStringMode","collapsed","dark","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],k=l.C.Text,P=function(t){var i=t.type,s=i===void 0?"block":i,a=t.fullFeatured,o=a===void 0?!1:a,n=t.title,ne=n===void 0?"json":n,z=t.icon,ce=t.contentStyle,ue=t.classNames,X=t.className,ye=t.collapseStringMode,Pe=ye===void 0?"directly":ye,je=t.collapsed,Ne=je===void 0?2:je,Oe=t.dark,ke=t.displaySize,b=ke===void 0?"collapsed":ke,m=t.ignoreLargeArray,v=m===void 0?!1:m,j=t.matchesURL,G=j===void 0?!0:j,U=t.src,de=t.theme,ie=de===void 0?"default":de,ge=t.style,he=te()(t,se),ve=(0,T.r)(),xe=ve.isDarkMode,fe=K(o?"block":s),V=fe.styles,c=fe.cx,O=(0,y.useState)(!0),f=A()(O,2),h=f[0],ae=f[1],D=(0,y.useMemo)(function(){return(0,I.Pz)(U)},[U]),_=(0,w.jsx)(I.ZP,u()({collapseStringMode:Pe,collapsed:Ne,dark:Oe!=null?Oe:xe,displaySize:b,ignoreLargeArray:v,matchesURL:G,src:U,theme:ie},he));return(0,w.jsxs)(q.Z,{className:c(V.container,X),style:ge,vertical:!0,children:[o&&(0,w.jsxs)(q.Z,{align:"center",className:c(V.header,ue==null?void 0:ue.header),justify:"space-between",children:[(0,w.jsx)(r.Z,{icon:h?oe.Z:J.Z,onClick:function(){return ae(!h)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),(0,w.jsxs)(q.Z,{align:"center",className:V.title,flex:1,gap:2,justify:"center",title:ne,children:[z,(0,w.jsx)(q.Z,{className:V.titleText,children:(0,w.jsx)(k,{ellipsis:!0,children:ne})})]}),(0,w.jsx)(E.Z,{content:D,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,w.jsx)(q.Z,{className:c(V.content,ue==null?void 0:ue.content),flex:1,style:h?ce:u()(u()({},ce),{},{height:0,maxHeight:0,padding:0,overflow:"hidden"}),children:_})]})}},40305:function(Se,Y,e){e.d(Y,{T:function(){return fe}});var H=e(26068),u=e.n(H),re=e(67825),A=e.n(re),M=e(75271),te=e(87902),r=e(52676),E=["to","children"],q=function(c){var O=c.to,f=c.children,h=A()(c,E);return(0,r.jsx)("a",u()(u()({href:"#".concat(O)},h),{},{children:f}))},T=(0,M.createContext)({loading:!1,Link:q}),oe=["to","Link","children"],J=function(c){var O=c.to,f=c.Link,h=c.children,ae=A()(c,oe);return f?(0,r.jsx)(f,u()(u()({to:O},ae),{},{children:h})):(0,r.jsx)("a",u()(u()({href:"#".concat(O)},ae),{},{children:h}))},y=function(c){var O=(0,M.useContext)(T),f=O.Link,h=O.breadcrumb;(0,M.useEffect)(function(){var D;h==null||(D=h.setItems)===null||D===void 0||D.call(h,c.items)},[h,c.items]);var ae=(0,M.useCallback)(function(D,_,Q,me){var W,ee,pe=D.href?D.href===((W=Q.at(-1))===null||W===void 0?void 0:W.href):D.path===((ee=Q.at(-1))===null||ee===void 0?void 0:ee.path);if(pe)return(0,r.jsx)("span",{children:D.title});var Z=D.href?D.href:"/".concat(me.join("/"));return(0,r.jsx)(J,{Link:f,to:Z,children:D.title})},[f]);return(0,r.jsx)(te.Z,u()({itemRender:ae},c))},I=e(10780),S=e(22622),L=e(91488),l=e(38590),B=e(53649),x=e.n(B),R=e(3772),d,g=(0,R.kc)(function(V){var c=V.css,O=V.token;return{root:c(d||(d=x()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),C=["className","children"],N={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},F=function(c){var O=c.className,f=c.children,h=A()(c,C),ae=g(),D=ae.styles,_=ae.cx,Q=(0,M.useContext)(T),me=Q.loading,W=Q.breadcrumb,ee=Q.Link,pe=Q.status,Z=(0,M.useCallback)(function(){if(pe){var le;return(0,r.jsx)(I.ZP,{extra:(0,r.jsx)(ee,{to:W==null||(le=W.items)===null||le===void 0||(le=le[0])===null||le===void 0?void 0:le.path,children:(0,r.jsx)(S.ZP,{type:"primary",children:"Go Back"})}),status:pe,subTitle:N[pe],title:pe})}return f},[pe,f,ee,W==null?void 0:W.items]);return me?(0,r.jsx)(L.Z,{active:!0,className:_(D.root,O)}):(0,r.jsx)(l.Z,u()(u()({className:_(D.root,O),gap:20,vertical:!0},h),{},{children:Z()}))},$=function(){return(0,r.jsx)(r.Fragment,{})},K=e(48305),w=e.n(K),se=e(335),k=e.n(se),P=e(1718),p=e(12644),t=e(82227),i=e(46119),s=e(94729),a=e(79214),o=["shape","size","src"],n=function(c){if(typeof c=="number")return c;switch(c){case"small":return 40;case"large":return 88;default:return 64}},ne=function(c){var O=c.shape,f=O===void 0?"square":O,h=c.size,ae=c.src,D=A()(c,o),_=(0,M.useMemo)(function(){return n(h)},[h]);return(0,r.jsx)(a.C,u()({shape:f,size:_,src:ae},D))},z,ce,ue,X,ye,Pe,je,Ne,Oe,ke=(0,R.kc)(function(V,c){var O=V.css,f=V.token,h=V.prefixCls,ae=c.bordered,D=ae===void 0?!1:ae,_=c.divider,Q=_===void 0?!0:_;return{root:D?O(z||(z=x()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),f.marginXS,f.padding,f.colorBgBase,f.borderRadius,f.boxShadowTertiary):O(ce||(ce=x()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),f.paddingXS,f.marginXS,Q&&O(ue||(ue=x()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),f.paddingLG,f.colorSplit)),icon:O(X||(X=x()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),h,h,f.colorPrimary,h),titleBox:O(ye||(ye=x()([`
        margin-bottom: `,`px;
      `])),f.marginSM),subTitle:O(Pe||(Pe=x()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),f.marginXXS,h,f.fontSize,f.colorTextSecondary),title:O(je||(je=x()([`
        font-size: `,`px;
        font-weight: 700;
      `])),f.fontSizeHeading5),descriptions:O(Ne||(Ne=x()([`
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
      `])),f.marginXXS,f.fontSize,f.colorTextSecondary,h,h,f.fontSize,h,f.fontSize,f.colorTextSecondary),rightButtons:O(Oe||(Oe=x()([`
        justify-content: flex-end;
      `])))}}),b=["className","classNames","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],m=s.C.Paragraph,v=function(c){var O=c.className,f=c.classNames,h=c.icon,ae=c.title,D=c.titleRender,_=c.subTitle,Q=c.status,me=c.descriptions,W=me===void 0?[]:me,ee=c.descriptionsRender,pe=c.extraContent,Z=pe===void 0?{}:pe,le=c.extraContentRender,we=c.bordered,Ie=c.divider,Ye=A()(c,b),$e=ke({bordered:we,divider:Ie}),Ce=$e.styles,Ae=$e.cx,Ee=(0,M.useMemo)(function(){return!h||typeof h=="string"?{src:h,size:_?"large":"default"}:(_&&h.size===void 0&&(h.size="large"),h)},[h,_]),Ve=(0,M.useMemo)(function(){var Le=(0,r.jsx)("span",{className:Ae(Ce.title,f==null?void 0:f.title),children:ae});return D?D(Le):Le},[f==null?void 0:f.title,Ae,Ce.title,ae,D]),Te=(0,M.useMemo)(function(){var Le=[],Ze=k()(W.filter(function(He){return!!He}).entries()),et;try{for(Ze.s();!(et=Ze.n()).done;){var qe=w()(et.value,2),Ke=qe[0],tt=qe[1],Be=tt.icon,it=tt.text;(Q||Ke>=1)&&Le.push((0,r.jsx)(t.Z,{dashed:!1,type:"vertical"},"divider-".concat(Ke))),Le.push((0,r.jsxs)(l.Z,{align:"center",gap:4,children:[Be&&(0,r.jsx)(P.Z,{title:Be.tooltip,children:Be.content}),(0,r.jsx)("span",{children:it})]},"desc-".concat(Ke)))}}catch(He){Ze.e(He)}finally{Ze.f()}return ee?ee(Le):Le},[W,ee,Q]),Fe=(0,M.useMemo)(function(){if(!Z&&!le)return null;var Le=(0,r.jsx)(p.h,u()({className:Ce.rightButtons},Z));return le?le(Le):Le},[Z,le,Ce.rightButtons]),Re=(0,M.useContext)(T),Ue=Re.loading,st=Re.status;return Ue?(0,r.jsxs)(l.Z,{className:Ae(Ce.root,O),gap:20,children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(L.Z.Avatar,{active:!0,className:Ce.icon,shape:Ee==null?void 0:Ee.shape,size:n(Ee==null?void 0:Ee.size)})}),(0,r.jsxs)(l.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,r.jsxs)("div",{className:Ce.titleBox,children:[(0,r.jsx)(L.Z.Input,{active:!0,size:25}),_&&(0,r.jsx)("div",{className:Ae(Ce.subTitle,O),children:(0,r.jsx)(L.Z.Input,{active:!0,size:18})})]}),(0,r.jsx)(L.Z.Input,{active:!0,size:18})]}),(0,r.jsx)(l.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,r.jsx)(L.Z.Button,{active:!0})})]}):st?null:(0,r.jsxs)(l.Z,u()(u()({className:Ae(Ce.root,O),gap:20},Ye),{},{children:[Ee&&(0,r.jsx)(l.Z,{children:(0,r.jsx)(ne,u()({className:Ce.icon},Ee))}),(0,r.jsxs)(l.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,r.jsxs)(l.Z,{className:Ae(Ce.titleBox,f==null?void 0:f.titleWrapper),vertical:!0,children:[Ve,_&&(0,r.jsx)(m,{className:Ae(Ce.subTitle,f==null?void 0:f.subTitle),ellipsis:{rows:2},children:_})]}),(0,r.jsxs)(l.Z,{align:"center",className:Ae(Ce.descriptions,f==null?void 0:f.descriptions),gap:4,children:[Q&&(0,r.jsx)(i.q,u()({},Q)),Te]})]}),(0,r.jsx)(l.Z,{align:"center",className:f==null?void 0:f.extraContent,flex:"1",justify:"flex-end",children:Fe})]}))},j=e(94456),G,U=(0,R.kc)(function(V){var c=V.css,O=V.token;return{root:c(G||(G=x()([`
      width: inherit;
      height: 100%;
      min-height: inherit;
      padding: `,"px ","px ",`px;
    `])),O.padding,O.paddingLG,O.paddingXL)}}),de=["loading","className","children","Link","status","gap"],ie=function(c){var O=(0,j.nB)(),f=c.loading,h=c.className,ae=c.children,D=c.Link,_=D===void 0?O||q:D,Q=c.status,me=c.gap,W=me===void 0?16:me,ee=A()(c,de),pe=U(ee),Z=pe.styles,le=pe.cx,we=(0,M.useState)([]),Ie=w()(we,2),Ye=Ie[0],$e=Ie[1];return(0,r.jsx)(l.Z,u()(u()({className:le(Z.root,h),gap:W,vertical:!0},ee),{},{children:(0,r.jsx)(T.Provider,{value:{loading:f,Link:_,breadcrumb:{items:Ye,setItems:$e},status:Q},children:ae})}))},ge,he=(0,R.kc)(function(V){var c=V.css,O=V.token;return{root:c(ge||(ge=x()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),O.fontFamily,O.fontWeightStrong,O.lineHeight,O.colorText)}}),ve=["className"],xe=function(c){var O=c.className,f=A()(c,ve),h=he(),ae=h.cx,D=h.styles;return(0,r.jsx)("h2",u()({className:ae(D.root,O)},f))},fe=ie;fe.Breadcrumb=y,fe.Title=xe,fe.Header=v,fe.Content=F,fe.Footer=$},86346:function(Se,Y,e){e.d(Y,{Q:function(){return ke}});var H=e(26068),u=e.n(H),re=e(67825),A=e.n(re),M=e(75271),te=e(53649),r=e.n(te),E=e(3772),q,T,oe,J,y,I=(0,E.kc)(function(b){var m=b.css,v=b.token,j=b.prefixCls;return{root:m(q||(q=r()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),v.fontFamily,v.colorText,v.colorBgContainer,v.borderRadius*2,v.boxShadowTertiary),bordered:m(T||(T=r()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),v.colorBorder),hoverable:m(oe||(oe=r()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),v.motionDurationMid,v.motionDurationMid,v.boxShadow),text:m(J||(J=r()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),v.colorTextSecondary),error:m(y||(y=r()([`
      color: `,`;
    `])),v.colorErrorText)}}),S=e(52676),L=["className","bordered","hoverable","children"],l=function(m){var v=m.className,j=m.bordered,G=j===void 0?!1:j,U=m.hoverable,de=U===void 0?!0:U,ie=m.children,ge=A()(m,L),he=I(),ve=he.cx,xe=he.styles;return(0,S.jsx)("div",u()(u()({className:ve(xe.root,G&&xe.bordered,de&&xe.hoverable,v)},ge),{},{children:ie}))},B=e(38590),x,R=(0,E.kc)(function(b){var m=b.css,v=b.token;return{root:m(x||(x=r()([`
      padding: 12px 24px 20px;
    `])))}}),d=["className","children"],g=function(m){var v=m.className,j=m.children,G=A()(m,d),U=R(),de=U.styles,ie=U.cx;return(0,S.jsx)(B.Z,u()(u()({className:ie(de.root,v),gap:20,vertical:!0},G),{},{children:j}))},C=e(26345),N,F=(0,E.kc)(function(b){var m=b.css,v=b.token,j=b.prefixCls,G=70;return{root:m(N||(N=r()([`
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
    `])),j,j,j,j,G,j,G)}}),$=["className","colon","column","size"],K=function(m){var v=m.className,j=m.colon,G=j===void 0?!1:j,U=m.column,de=U===void 0?2:U,ie=m.size,ge=ie===void 0?"small":ie,he=A()(m,$),ve=F(),xe=ve.cx,fe=ve.styles;return(0,S.jsx)(C.Z,u()({className:xe(fe.root,v),colon:G,column:de,size:ge},he))},w=e(27046),se=e(79214),k=e(159),P=e(22622),p=e(250),t=e(94729),i,s,a,o,n,ne,z,ce,ue,X=(0,E.kc)(function(b,m){var v=b.css,j=b.token,G=b.prefixCls,U=m.divider,de=U===void 0?!0:U,ie=m.iconBg,ge=ie===void 0?!0:ie;return{root:v(i||(i=r()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),de?20:0,de&&v(s||(s=r()([`
          border-bottom: 1px solid `,`;
        `])),j.colorSplit)),icon:v(a||(a=r()([`
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
      `])),G,j.colorPrimary,ge&&v(o||(o=r()([`
            background-color: `,`;
          `])),j.colorBgLayout),G),titleBox:v(n||(n=r()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),j.marginXXS),title:v(ne||(ne=r()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),j.fontWeightStrong),description:v(z||(z=r()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),G,j.colorTextSecondary),extra:v(ce||(ce=r()([`
        margin-top: -4px;
      `]))),rightButtons:v(ue||(ue=r()([`
        justify-content: flex-end;
      `])))}}),ye=["className","icon","title","description","extra","divider"],Pe=["className","shape","size"],je=["children"],Ne=t.C.Paragraph,Oe=function(m){var v=m.className,j=m.icon,G=m.title,U=m.description,de=m.extra,ie=m.divider,ge=A()(m,ye),he=X({divider:ie,iconBg:!(j!=null&&j.src)}),ve=he.styles,xe=he.cx,fe=j||{},V=fe.className,c=fe.shape,O=c===void 0?"square":c,f=fe.size,h=f===void 0?72:f,ae=A()(fe,Pe),D=de||{},_=D.children,Q=A()(D,je);return(0,S.jsxs)(B.Z,u()(u()({className:xe(ve.root,v),gap:20},ge),{},{children:[j&&(0,S.jsx)(B.Z,{children:(0,S.jsx)(se.C,u()({className:xe(ve.icon,V),shape:O,size:h},ae))}),(0,S.jsxs)(B.Z,{flex:"1",vertical:!0,children:[(0,S.jsxs)(B.Z,{className:ve.titleBox,gap:4,children:[(0,S.jsx)("div",{className:ve.title,children:G}),de&&(0,S.jsx)(B.Z,{align:"flex-start",className:ve.extra,justify:"flex-end",onClick:function(W){return W.stopPropagation()},children:(0,S.jsx)(k.Z,u()(u()({},Q),{},{children:_||(0,S.jsx)(P.ZP,{icon:(0,S.jsx)(w.Z,{icon:p.Z}),size:"small",type:"text"})}))})]}),U&&(0,S.jsx)(Ne,{className:ve.description,ellipsis:{rows:2},children:U})]})]}))},ke=l;ke.Header=Oe,ke.Content=g,ke.Descriptions=K},46119:function(Se,Y,e){e.d(Y,{q:function(){return x}});var H=e(26068),u=e.n(H),re=e(67825),A=e.n(re),M=e(27046),te=e(62272),r=e(62701),E=e(1718),q=e(65933),T=e(75271),oe=e(53649),J=e.n(oe),y=e(3772),I,S,L=(0,y.kc)(function(R){var d=R.css,g=R.token,C=R.prefixCls;return{root:d(I||(I=J()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),C,C,C),tooltip:d(S||(S=J()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),g.colorTextTertiary)}},{hashPriority:"low"}),l=e(52676),B=["tooltip","className","status","text","color"],x=function(d){var g=d.tooltip,C=d.className,N=d.status,F=d.text,$=d.color,K=A()(d,B),w=L(),se=w.cx,k=w.styles;return(0,l.jsxs)(te.Z,u()(u()({className:se(k.root,C),size:"small"},K),{},{children:[(0,l.jsx)(r.Z,{status:N,text:F,color:$}),g&&(0,l.jsx)(E.Z,{className:k.tooltip,title:g,children:(0,l.jsx)(M.Z,{icon:q.Z})})]}))}},94729:function(Se,Y,e){e.d(Y,{Z:function(){return l}});var H=e(26068),u=e.n(H),re=e(48305),A=e.n(re),M=e(67825),te=e.n(M),r=e(60399),E=e(1718),q=e(28026),T=e.n(q),oe=e(81792),J=e.n(oe),y=e(18342),I=e(75271),S=e(52676),L=["time","format","relativeTime","tooltip"];T().extend(J());var l=r.Z,B=function(d){return T()(d?new Date(d):new Date).fromNow()},x=function(d){var g,C=d.time,N=d.format,F=d.relativeTime,$=F===void 0?!0:F,K=d.tooltip,w=te()(d,L),se=(0,I.useState)(B(C)),k=A()(se,2),P=k[0],p=k[1],t=(0,I.useCallback)(function(o){var n=T()(),ne=T()(o),z=n.diff(ne);if(z>0&&z<60*60*1e3)return setInterval(function(){p(B(o))},60*1e3)},[]);(0,I.useEffect)(function(){var o;return $&&(o=t(new Date(C))),function(){o&&clearInterval(o)}},[$,t,C]),(0,I.useEffect)(function(){if($){var o=B(C);o!==P&&(p(o),t(new Date(C)))}},[C,$,P,t]);var i=T()(C).format(N||"YYYY-MM-DD HH:mm:ss"),s=$?P:i,a=(g=K==null?void 0:K.title)!==null&&g!==void 0?g:$?i:void 0;return a&&(0,y.Z)(w,"ellipsis.tooltip.title",void 0),(0,S.jsx)(E.Z,u()(u()({},K||{}),{},{title:a,children:(0,S.jsx)(l.Text,u()(u()({},w),{},{children:s}))}))};l.Time=x,Y.C=l},34731:function(Se,Y,e){e.d(Y,{Q:function(){return H}});var H=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"]},15094:function(Se,Y,e){e.d(Y,{_:function(){return H}});var H={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}}},82846:function(Se,Y,e){e.d(Y,{J:function(){return y}});var H=e(48305),u=e.n(H),re=e(67825),A=e.n(re),M=e(75271),te=function(){try{var L,l;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((L=window)===null||L===void 0?void 0:L.SpeechRecognition)||((l=window)===null||l===void 0?void 0:l.webkitSpeechRecognition)}catch(B){}},r=function(){try{var L,l;return(globalThis==null?void 0:globalThis.speechSynthesis)||((L=window)===null||L===void 0?void 0:L.speechSynthesis)||((l=window)===null||l===void 0?void 0:l.webkitSpeechSynthesis)}catch(B){}},E=function(){try{var L,l;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((L=window)===null||L===void 0?void 0:L.SpeechSynthesisUtterance)||((l=window)===null||l===void 0?void 0:l.webkitSpeechSynthesisUtterance)}catch(B){}},q=te(),T=r(),oe=E(),J=["voice","rate","pitch"],y=function(L,l){var B=l.voice,x=l.rate,R=l.pitch,d=A()(l,J),g=(0,M.useState)(T==null?void 0:T.getVoices()),C=u()(g,2),N=C[0],F=C[1],$=(0,M.useState)(L),K=u()($,2),w=K[0],se=K[1],k=(0,M.useState)(!1),P=u()(k,2),p=P[0],t=P[1],i=(0,M.useMemo)(function(){if(oe){var o=new oe(w);return o.voice=N.find(function(n){return n.name===B}),o.onstart=function(){return t(!0)},o.onend=function(){return t(!1)},R&&(o.pitch=R*10),x&&(o.rate=x*10),o}},[w,N,x,R,B]);(0,M.useEffect)(function(){T&&(T.onvoiceschanged=function(){F(T==null?void 0:T.getVoices())},T.onstart=function(){return t(!0)},T.onend=function(){return t(!1)})},[]);var s=(0,M.useCallback)(function(){var o;d==null||(o=d.onStart)===null||o===void 0||o.call(d),T==null||T.speak(i)},[d,i]),a=(0,M.useCallback)(function(){var o,n;d==null||(o=d.onStop)===null||o===void 0||o.call(d),(n=speechSynthesis)===null||n===void 0||n.cancel(),t(!1)},[d]);return{isLoading:p,setText:se,start:s,stop:a}},I=null}}]);
