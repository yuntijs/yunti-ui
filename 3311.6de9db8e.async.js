"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3311],{14431:function(Oe,ue,e){e.d(ue,{h:function(){return L}});var de=e(57724),a=e.n(de),be=e(26068),U=e.n(be),B=e(67825),ve=e.n(B),r=e(78305),R=e(56214),fe=e(2991),z=e(52136),ge=e(69979),w=["items","onClick","size"],O=["key","label"],M=["key","label"],L=function(c){var ne=c.items,j=ne===void 0?[]:ne,_=c.onClick,i=_===void 0?function(){}:_,g=c.size,P=ve()(c,w);if(j.length<=2)return(0,ge.jsx)(r.Z,U()(U()({align:"end",size:12},P),{},{children:j.map(function(x){var D=x.key,f=x.label,X=ve()(x,O);return(0,ge.jsx)(R.ZP,U()(U()({onClick:function(d){return i(D,d)},size:g},X),{},{children:f}),D)})}));var H=a()(j),Q=H[0],le=H.slice(1),te=Q,s=te.key,S=te.label,h=ve()(te,M);return(0,ge.jsx)(fe.Z.Button,U()(U()(U()({onClick:function(D){return i(s,D)}},h),{},{menu:{onClick:function(D){var f=D.key,X=D.domEvent;return i(f,X)},items:le},overlayStyle:{minWidth:100},size:g},P),{},{children:S}),s)}},4049:function(Oe,ue,e){e.d(ue,{w:function(){return ne}});var de=e(26068),a=e.n(de),be=e(67825),U=e.n(be),B=e(84228),ve=e(15396),r=e(71723),R=e(30296),fe=e(52136),z=e(53649),ge=e.n(z),w=e(75555),O,M=(0,w.kc)(function(j,_){var i=j.css,g=j.token,P=j.prefixCls,H=_.collapsible;return{root:i(O||(O=ge()([`
        overflow: hidden;
        margin-bottom: `,`px;
        .`,`-collapse {
          &-header {
            align-items: center !important;
            padding: 0 !important;
            &-text {
              flex: 1 !important;
              padding: `,"px ","px ",`px
                `,`px;
              & > div > div {
                font-size: `,`px;
                font-weight: unset;
              }
            }
          }
          &-expand-icon {
            cursor: pointer;
            padding: `,"px 0 ","px ",`px !important;
          }
          &-extra {
            padding-right: `,`px;
          }
          &-item > .`,`-collapse-content {
            padding: `,`px 0;
          }
          &-content {
            &-box {
              padding: `,"px ",`px !important;
            }
          }
        }
      `])),g.margin,P,g.paddingSM,g.paddingSM,g.paddingSM,H===!1?g.paddingSM:0,g.fontSize,g.padding,g.padding,g.paddingSM,g.paddingSM,P,g.paddingXXS,g.paddingXXS,g.padding)}}),L=e(69979),y=["className","variant","collapsible","expandIcon"],c=B.ZP.Group,ne=function(_){var i=_.className,g=_.variant,P=g===void 0?"filled":g,H=_.collapsible,Q=H===void 0?!0:H,le=_.expandIcon,te=le===void 0?function(D){return(0,L.jsx)(ve.Z,{icon:D.isActive?r.Z:R.Z,size:"small"})}:le,s=U()(_,y),S=M({collapsible:Q}),h=S.styles,x=S.cx;return(0,L.jsx)(c,a()({className:x(h.root,i),collapsible:Q,expandIcon:te,variant:P},s))}},58177:function(Oe,ue,e){e.d(ue,{E_:function(){return r},iV:function(){return R},nc:function(){return z},nB:function(){return ge}});var de=e(52136),a=e(56264),be="https://unpkg.com",U="https://registry.npmmirror.com",B=function(O){var M=O.pkg,L=O.version,y=L===void 0?"latest":L,c=O.path,ne=O.proxy;switch(ne){case"unpkg":return(0,a.Z)(be,"".concat(M,"@").concat(y),c);default:return(0,a.Z)(U,M,y,"files",c)}},ve=e(69979),r=(0,de.createContext)(null),R=(0,de.memo)(function(w){var O=w.children,M=w.config;return(0,ve.jsx)(r.Provider,{value:M,children:O})}),fe=function(O){var M=O.pkg,L=O.version,y=O.path;return B({path:y,pkg:M,proxy:"aliyun",version:L})},z=function(){var O=(0,de.useContext)(r);return O?(O==null?void 0:O.proxy)!=="custom"?function(M){var L=M.pkg,y=M.version,c=M.path;return B({path:c,pkg:L,proxy:O.proxy,version:y})}:(O==null?void 0:O.customCdnFn)||fe:fe},ge=function(){var O=(0,de.useContext)(r);return O==null?void 0:O.Link}},64302:function(Oe,ue,e){e.d(ue,{w:function(){return j},Z:function(){return _}});var de=e(26068),a=e.n(de),be=e(67825),U=e.n(be),B=e(17733),ve=e(52136),r=e(53649),R=e.n(r),fe=e(75555),z,ge,w,O,M,L,y=(0,fe.kc)(function(i,g){var P=i.css,H=i.token,Q=i.prefixCls,le=g.borderedBottom,te=g.borderedBottomDashed,s=g.borderedTop,S=g.borderedTopDashed,h=g.size,x={small:"".concat(H.paddingXS,"px ").concat(H.padding,"px"),middle:"".concat(H.padding,"px ").concat(H.paddingLG,"px"),default:"".concat(H.paddingSM,"px ").concat(H.paddingLG,"px")},D=le||te;return{custom:P(z||(z=R()([`
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
      `])),Q,Q,D&&h&&P(ge||(ge=R()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),Q,Q,x[h],Q),le&&P(w||(w=R()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),Q,H.colorSplit),te&&P(O||(O=R()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),Q,H.colorSplit),s&&P(M||(M=R()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),Q,H.colorSplit),S&&P(L||(L=R()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),Q,H.colorSplit))}},{hashPriority:"low"}),c=e(69979),ne=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],j=function(g){var P=g.className,H=g.borderedBottom,Q=g.borderedBottomDashed,le=g.borderedTop,te=g.borderedTopDashed,s=U()(g,ne),S=y({borderedBottom:H,borderedBottomDashed:Q,borderedTop:le,borderedTopDashed:te,size:s.size}),h=S.styles,x=S.cx;return(0,c.jsx)(B.Z,a()(a()({},s),{},{className:x(h.custom,P)}))},_=j;j.Item=B.Z.Item},46129:function(Oe,ue,e){e.d(ue,{i:function(){return j},Z:function(){return _}});var de=e(26068),a=e.n(de),be=e(48305),U=e.n(be),B=e(67825),ve=e.n(B),r=e(31646),R=e(28121),fe=e(52436),z=e(78305),ge=e(52136),w=e(53649),O=e.n(w),M=e(75555),L,y=(0,M.kc)(function(i){var g=i.css,P=i.token;return{custom:g(L||(L=O()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),P.colorPrimary,P.colorPrimaryHover)}},{hashPriority:"low"}),c=e(69979),ne=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],j=function(g){var P=g.mode,H=P===void 0?"line":P,Q=g.content,le=g.defaultOpen,te=g.iconPlacement,s=te===void 0?"left":te,S=g.openIcon,h=g.closeIcon,x=g.type,D=ve()(g,ne),f=y({}),X=f.styles,me=H==="expanded",d=(0,ge.useState)(le),l=U()(d,2),b=l[0],N=l[1],$=h||(0,c.jsx)(r.Z,{}),F=S||(0,c.jsx)(R.Z,{}),T=me&&(0,c.jsx)("span",{children:b?$:F});return H==="line"||x==="vertical"?(0,c.jsx)(fe.Z,a()({type:x},D)):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(fe.Z,a()(a()({type:x},D),{},{children:(0,c.jsx)("span",{className:me?X.custom:"",onClick:function(){N(!b)},children:(0,c.jsxs)(z.Z,{size:6,children:[s!=="right"&&T,(0,c.jsx)("span",{children:Q}),s==="right"&&T]})})})),me&&(0,c.jsx)("div",{style:{display:b?"block":"none"},children:g.children})]})},_=j},29463:function(Oe,ue,e){e.d(ue,{E:function(){return q}});var de=e(90228),a=e.n(de),be=e(87999),U=e.n(be),B=e(26068),ve=e.n(B),r=e(15558),R=e.n(r),fe=e(67825),z=e.n(fe),ge=e(31759),w=e.n(ge),O=e(55159),M=e(75716),L=e(69554),y=e(4617),c=e(56214),ne=e(67943),j=e(659),_=e(60260),i=e(52136),g=e(96207),P=e(4049),H=e(48305),Q=e.n(H),le=(0,i.memo)(function(n){var u=n.name,v=n.update,I=L.Z.useWatch(u),ae=(0,i.useState)(0),Y=Q()(ae,2),ce=Y[0],ee=Y[1];return(0,i.useEffect)(function(){(I==null?void 0:I.length)!==ce&&(v(),ee(I==null?void 0:I.length))},[ce,I,v]),null}),te=e(335),s=e.n(te),S=e(82092),h=e.n(S),x=e(54834),D="__YUNTI_FORM_COLLAPSE_LIST_FIELD_KEY_PATH",f=function(u){return u.join("-")},X=["Input","InputNumber","AutoComplete","Mentions","Radio","RadioGroup","CheckBox","CheckBoxGroup","Rate","Slider","Switch"],me=function(u,v,I){var ae,Y=L.Z.useFormInstance(),ce=(0,i.useState)([]),ee=Q()(ce,2),xe=ee[0],E=ee[1],re=(0,i.useState)([]),J=Q()(re,2),k=J[0],t=J[1],p=(0,i.useCallback)(function(){return E(Y.getFieldValue(u))},[Y,u]),o=(ae=(0,i.useMemo)(function(){return I.find(function(V){return!!V.name&&!V.noStyle})},[I]))===null||ae===void 0?void 0:ae.name,A=(0,i.useCallback)(function(V){if(!u)return{dataSource:[],allExpandRowKeys:[]};var oe=[],ye=function se(pe,W,Pe){var G=(0,x.Z)(pe);return G||(G=h()({},D,[])),G[D]=[].concat(R()(Pe),[W]),G[v]&&Array.isArray(G[v])&&(oe.push(f(G[D])),G[v]=G[v].map(function(Ce,Me){return se(Ce,Me,G[D])})),G};return{dataSource:(V==null?void 0:V.map(function(se,pe){return ye(se,pe,[])}))||[],allExpandRowKeys:oe}},[v,u]),m=(0,i.useCallback)(function(V,oe){var ye=[],se=s()(V.entries()),pe;try{for(se.s();!(pe=se.n()).done;){var W=Q()(pe.value,2),Pe=W[0],G=W[1];Pe===V.length-1?(ye.push(G),oe&&ye.push(oe)):ye.push(G,v)}}catch(Ce){se.e(Ce)}finally{se.f()}return ye},[v]),K=(0,i.useCallback)(function(V,oe){var ye=oe[D];return{add:function(pe,W){var Pe=m(ye),G=[u].concat(R()(Pe),[v]),Ce=(0,x.Z)(Y.getFieldValue(G))||[],Me=W!=null?W:Ce.length;if(Ce.splice(Me,0,pe),Y.setFieldValue(G,Ce),o){var ke=[].concat(R()(G),[Me,o]);setTimeout(function(){Y.focusField(ke)},200)}t(R()(new Set([].concat(R()(k),[f(ye)])))),p()},remove:function(pe){if(ye.length<=1){V.remove(pe),p();return}var W=[u].concat(R()(m(ye).slice(0,-1))),Pe=(0,x.Z)(Y.getFieldValue(W))||[],G=[];Array.isArray(pe)?G.push.apply(G,R()(pe)):G.push(pe);var Ce=Pe.filter(function(Me,ke){return!G.includes(ke)});Y.setFieldValue(W,Ce.length>0?Ce:void 0),p()},move:function(pe,W){if(ye.length<=1)return V.move(pe,W);var Pe=[u].concat(R()(m(ye).slice(0,-1))),G=(0,x.Z)(Y.getFieldValue(Pe))||[];if(pe<0||W<0||pe>=G.length||W>=G.length){console.warn(new Error("\u7D22\u5F15\u8D85\u51FA\u6570\u7EC4\u8303\u56F4"));return}var Ce=[G[W],G[pe]];G[pe]=Ce[0],G[W]=Ce[1],Y.setFieldValue(Pe,G),p()},update:function(){return p()}}},[v,k,o,Y,m,u,p]);return{values:xe,updateValues:p,expandedRowKeys:k,setExpandedRowKeys:t,fieldValuesToDataSource:A,getFieldPath:m,getFormListOperation:K,firstColumnFormItemName:o}},d=e(53649),l=e.n(d),b=e(75555),N,$,F,T,Z=(0,b.kc)(function(n){var u=n.css,v=n.token,I=n.prefixCls;return{empty:u(N||(N=l()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),v.paddingXS,v.paddingSM,v.colorTextTertiary),list:u($||($=l()([`
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
    `])),I,I,v.colorTextTertiary,I,v.marginXS,I),noFormItem:u(F||(F=l()([`
      height: `,`px;
      color: `,`;
    `])),v.controlHeight,v.colorTextTertiary),readOnlyItem:u(T||(T=l()([`
      height: `,`px;
      color: `,`;
    `])),v.controlHeight,v.colorTextBase)}}),C=e(69979),ie=["collapsible","extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style","defaultExpandAllRows","indentSize","childrenColumnName","rowHoverable"],he=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width","className"],Se=["key"],Te=g.C.Text,je=function(u){var v=u.id,I=u.value;return w()(I)==="object"?(console.warn("".concat(v," => ").concat(I)),"-"):(0,C.jsx)("span",{children:I})},q=(0,i.memo)(function(n){var u=n.collapsible,v=n.extra,I=n.expandIcon,ae=n.icon,Y=n.title,ce=n.variant,ee=n.defaultActive,xe=n.empty,E=xe===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":xe,re=n.columns,J=re===void 0?[]:re,k=n.disabled,t=n.readOnly,p=n.addOneFieldDefault,o=n.disableRemoveWhenOneField,A=n.maxFileds,m=n.name,K=n.addParams,V=n.className,oe=n.onRemove,ye=n.fieldRemoveButton,se=ye===void 0?!0:ye,pe=n.style,W=n.defaultExpandAllRows,Pe=n.indentSize,G=Pe===void 0?16:Pe,Ce=n.childrenColumnName,Me=Ce===void 0?"children":Ce,ke=n.rowHoverable,Qe=ke===void 0?!0:ke,De=z()(n,ie),Fe=Z(),Ie=Fe.cx,He=Fe.styles,$e=(0,i.useRef)(null),Le=L.Z.useFormInstance(),ze=me(m,Me,J),Ve=ze.values,We=ze.updateValues,Ae=ze.expandedRowKeys,Ke=ze.setExpandedRowKeys,Ge=ze.fieldValuesToDataSource,an=ze.getFormListOperation,Je=ze.getFieldPath,we=ze.firstColumnFormItemName,en=(0,i.useMemo)(function(){return Ge(Ve)},[Ge,Ve]),Xe=en.dataSource,nn=(0,i.useMemo)(function(){return Xe==null?void 0:Xe.some(function(Re){return Re[Me]})},[Me,Xe]);(0,i.useEffect)(function(){We()},[We,t]),(0,i.useEffect)(function(){var Re=Le.getFieldValue(m),Ne=Ge(Re),Ze=Ne.allExpandRowKeys;W&&Ke(Ze)},[W,Ge,Le,m,Ke]);var cn=(0,i.useCallback)(function(){if(!K)return[];var Re=typeof K=="function"?K():K;return[Re.defaultValue,Re.insertIndex]},[K]),Sn=(0,i.useCallback)(function(Re){var Ne=Le.getFieldValue([m,Re]);return oe==null?void 0:oe(Ne)},[Le,m,oe]);return(0,i.useEffect)(function(){var Re;if(p&&(!(Le!=null&&Le.getFieldValue(m))||(Le==null||(Re=Le.getFieldValue(m))===null||Re===void 0?void 0:Re.length)===0)){var Ne;(Ne=$e.current)===null||Ne===void 0||Ne.call.apply(Ne,[$e].concat(R()(cn()))),setTimeout(function(){Le.focusField([m,0,we])},200)}},[p,cn,Le,m,we,We]),(0,C.jsxs)(P.w,{extra:v===void 0?m&&!t&&(0,C.jsx)(y.Z,{title:A&&"\u6700\u591A\u6DFB\u52A0 ".concat(A," \u9879"),children:(0,C.jsx)(c.ZP,{disabled:k||!!(A&&(Ve==null?void 0:Ve.length)===A),icon:(0,C.jsx)(O.Z,{}),onClick:function(Ne){var Ze;Ne.stopPropagation(),(Ze=$e.current)===null||Ze===void 0||Ze.call.apply(Ze,[$e].concat(R()(cn()))),setTimeout(function(){Le.focusField([m,Le.getFieldValue(m).length-1,we])},200)},size:"small",type:"text"})}):v,className:V,collapsible:u,expandIcon:I,icon:ae,title:Y,variant:ce,defaultActive:ee,style:pe,children:[!nn&&(0,C.jsx)(le,{name:m,update:We}),m?(0,C.jsx)(L.Z.List,ve()(ve()({name:m},De),{},{children:function(Ne,Ze){var Tn=Ze.add,Pn=Ze.remove;return $e.current=function(Ee,Ue){Tn(Ee,Ue),We()},(0,C.jsx)(ne.Z,{className:He.list,columns:[].concat(R()(J.map(function(Ee){var Ue=Ee.label,rn=Ee.name,tn=Ee.render,_e=Ee.dependencies,qe=Ee.rules,un=Ee.align,on=Ee.ellipsis,yn=Ee.fixed,Ye=Ee.responsive,Cn=Ee.shouldCellUpdate,En=Ee.width,ln=Ee.className,On=z()(Ee,he);return{title:Ue,dataIndex:rn,align:un,ellipsis:on,fixed:yn,responsive:Ye,shouldCellUpdate:Cn,width:En,render:function(vn,xn,sn){var mn=Ne[sn]||{},hn=mn.name,pn=xn[D],bn=[m].concat(R()(Je(pn))),jn=bn.slice(0,-1),Ln=mn.key,Mn=z()(mn,Se),Be=tn==null?void 0:tn(hn!=null?hn:pn.at(-1),sn,an(Ze,xn),bn);if(!rn)return(0,C.jsx)(j.Z,{align:"center",className:Ie(He.noFormItem,ln),children:Be});if(Be!==void 0&&w()(Be)!=="object")return(0,C.jsx)(j.Z,{align:"center",className:Ie(He.noFormItem,ln),children:Be.toString()});var dn={};if(k!==void 0&&(dn.disabled=k),t===!0){var fn,gn;if(dn.disabled=!0,Be!=null&&(fn=Be.props)!==null&&fn!==void 0&&fn.showCount&&(dn.showCount=void 0),X.includes(Be==null||(gn=Be.type)===null||gn===void 0?void 0:gn.displayName))return(0,C.jsx)(j.Z,{align:"center",className:Ie(He.readOnlyItem,ln),children:vn!=null?vn:(0,C.jsx)(Te,{type:"secondary",children:"-"})})}return(0,C.jsx)(L.Z.Item,ve()(ve()(ve()({className:ln},Mn),{},{dependencies:typeof _e=="function"?_e(jn,sn):_e,name:Je(pn,rn),rules:typeof qe=="function"?qe(jn,sn):qe},On),{},{children:Be?i.cloneElement(Be,dn):(0,C.jsx)(je,{})}),Ln)}}})),[!t&&se!==!1&&{title:"",dataIndex:"del",render:function(Ue,rn,tn){var _e=Ne[tn];if(_e){var qe=_e.name;return(0,C.jsx)(L.Z.Item,{children:(0,C.jsx)(c.ZP,{disabled:k||o&&Ne.length===1,icon:(0,C.jsx)(M.Z,{icon:_.Z}),onClick:U()(a()().mark(function un(){var on;return a()().wrap(function(Ye){for(;;)switch(Ye.prev=Ye.next){case 0:return Ye.next=2,Sn(qe);case 2:on=Ye.sent,on!==!1&&(Pn(qe),We());case 4:case"end":return Ye.stop()}},un)})),type:"text"})})}}}]).filter(function(Ee){return!!Ee}),dataSource:Xe,expandable:{expandedRowKeys:Ae,childrenColumnName:Me,onExpandedRowsChange:function(Ue){Ke(Ue)}},indentSize:G,locale:{emptyText:E},pagination:!1,rowHoverable:Qe,rowKey:function(Ue){return f(Ue[D])},size:"small"})}})):(0,C.jsx)("div",{className:He.empty,children:E})]})})},10114:function(Oe,ue,e){e.d(ue,{E:function(){return a.E},l:function(){return be}});var de=e(69554),a=e(29463),be=de.Z;be.CollapseList=a.E},75244:function(Oe,ue,e){e.d(ue,{d:function(){return te}});var de=e(26068),a=e.n(de),be=e(67825),U=e.n(be),B=e(52136),ve=e(91265),r=e(53649),R=e.n(r),fe=e(75555),z,ge,w,O=(0,fe.kc)(function(s,S){var h=s.css,x=s.token,D=s.cx,f=s.prefixCls,X=s.stylish,me=S.theme,d="".concat(f,"-highlighter");return{loading:D(X.blur,h(z||(z=R()([`
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
        `])),x.fontFamilyCode,x.colorTextTertiary,x.borderRadius)),shiki:D("".concat(d,"-shiki"),h(ge||(ge=R()([`
          overflow: hidden;
          height: 100%;
          margin: 0;
          padding: 0;

          & > pre {
            height: 100%;
            overflow: auto;
            margin: 0;
            padding: 0;
            `,`

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
        `])),!me&&h(w||(w=R()([`
              background: none !important;
            `]))),x.colorFillTertiary,x.colorWarningBg,x.colorErrorBg,x.colorFillTertiary,x.colorBorderSecondary,x.borderRadius,x.colorErrorBg,x.colorErrorText,x.colorSuccessBg,x.colorSuccessText))}}),M=e(69979),L=(0,B.memo)(function(s){var S,h=s.children,x=s.language,D=s.enableTransformer,f=s.theme,X=s.className,me=s.style,d=O({theme:f}),l=d.styles,b=d.cx,N=(S=h==null?void 0:h.trim())!==null&&S!==void 0?S:"",$=(0,ve.X1)(N,x,D,f),F=typeof $=="string"&&$.length>0;return(0,M.jsx)("div",{className:b(l.shiki,X),dangerouslySetInnerHTML:{__html:F?$:"<pre><code>".concat((0,ve.Xv)(N),"</code></pre>")},dir:"ltr",style:me})}),y=e(48305),c=e.n(y),ne=e(19172),j=function(S,h){return!S||!h?S:h[S.toLowerCase()]||S},_=function(S){for(var h={},x=0,D=Object.entries(S);x<D.length;x++){var f=c()(D[x],2),X=f[0],me=f[1],d=X.replaceAll(/-([a-z])/g,function(l,b){return b.toUpperCase()});h[d]=me}return h},i=function(S,h){var x=S.htmlStyle||(0,ne.Vl)(S),D=_(x);if(!h)return a()({},D);var f=a()({},D);return f.color&&typeof f.color=="string"&&(f.color=j(f.color,h)),f.backgroundColor&&typeof f.backgroundColor=="string"&&(f.backgroundColor=j(f.backgroundColor,h)),f},g=(0,B.memo)(function(s){var S=s.token,h=s.replacements;return(0,M.jsx)("span",{style:i(S,h),children:S.content},S.content)},function(s,S){return s.token===S.token}),P=(0,B.memo)(function(s){var S=s.line,h=s.replacements;return S.length===0?(0,M.jsx)("span",{className:"line",children:(0,M.jsx)("span",{children:"\xA0"})}):(0,M.jsx)("span",{className:"line",children:S.map(function(x,D){return(0,M.jsx)(g,{replacements:h,token:x},"token-".concat(D))})})},function(s,S){return s.line===S.line}),H=(0,B.memo)(function(s){var S,h,x,D=s.children,f=s.className,X=s.enableTransformer,me=s.fallbackClassName,d=s.language,l=s.style,b=s.theme,N=O({theme:b}),$=N.styles,F=N.cx,T=D!=null?D:"",Z=(0,B.useRef)(null),C=(0,ve.Vf)(T,d,X,b),ie=C==null?void 0:C.lines,he=C==null?void 0:C.colorReplacements,Se=(S=ie==null?void 0:ie.length)!==null&&S!==void 0?S:0,Te=Se>0&&(h=ie==null||(x=ie[Se-1])===null||x===void 0?void 0:x.reduce(function(q,n){var u,v;return q+((u=(v=n.content)===null||v===void 0?void 0:v.length)!==null&&u!==void 0?u:0)},0))!==null&&h!==void 0?h:0,je=(0,B.useRef)(0);return(0,B.useEffect)(function(){if(!(!Z.current||Se===0))return je.current&&cancelAnimationFrame(je.current),je.current=requestAnimationFrame(function(){Z.current&&(Z.current.scrollTop=Z.current.scrollHeight)}),function(){je.current&&cancelAnimationFrame(je.current)}},[Se,Te]),!ie||ie.length===0?(0,M.jsx)("div",{className:F($.shiki,me),dir:"ltr",style:l,children:(0,M.jsx)("pre",{children:(0,M.jsx)("code",{children:T})})}):(0,M.jsx)("div",{className:F($.shiki,f),dir:"ltr",style:l,children:(0,M.jsx)("pre",{ref:Z,tabIndex:0,children:(0,M.jsx)("code",{style:{display:"flex",flexDirection:"column"},children:ie.map(function(q,n){return(0,M.jsx)(P,{line:q,replacements:he},"line-".concat(n))})})})})});H.displayName="StreamRenderer";var Q=H,le=["children","animated"],te=(0,B.memo)(function(s){var S=s.children,h=s.animated,x=U()(s,le);return h?(0,M.jsx)(Q,a()(a()({},x),{},{children:S})):(0,M.jsx)(L,a()(a()({},x),{},{children:S}))})},35371:function(Oe,ue,e){e.d(ue,{EL:function(){return f},oP:function(){return me}});var de=e(26068),a=e.n(de),be=e(67825),U=e.n(be),B=e(20683),ve=e(84229),r=e(67368),R=e(52136),fe=e(48305),z=e.n(fe),ge=e(15396),w=e(75791),O=e(71723),M=e(30296),L=e(75033),y=e(29672),c=e(75244),ne=e(53649),j=e.n(ne),_=e(75555),i,g,P,H,Q,le,te,s,S=(0,_.kc)(function(d,l){var b=d.token,N=d.css,$=d.cx,F=d.prefixCls,T=d.stylish,Z=l.variant,C=l.expand,ie="".concat(F,"-highlighter"),he="".concat(ie,"-hover-btn"),Se="".concat(ie,"-hover-lang"),Te=N(i||(i=j()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),Z==="filled"?b.colorFillTertiary:"transparent",Z==="filled"?"transparent":b.colorBorder,Z==="filled"?b.colorFillTertiary:b.colorFillQuaternary);return{button:$(he,N(g||(g=j()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),Z==="borderless"?0:"12px",Z==="borderless"?0:"12px")),container:$(ie,Z!=="borderless"&&Te,N(P||(P=j()([`
          position: relative;

          overflow: hidden;

          height: `,`;

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
            height: 100%;
            margin: 0 !important;
            padding: `,` !important;
          }
        `])),C?"100%":"auto !important",b.borderRadius,b.motionEaseOut,he,Se,Z==="borderless"?0:"16px")),header:N(H||(H=j()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),b.colorFillQuaternary),lang:$(Se,T.blur,N(Q||(Q=j()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),b.fontFamilyCode,b.colorTextSecondary)),wrap:N(le||(le=j()([`
        pre {
          white-space: break-spaces;
        }
      `]))),scroller:N(te||(te=j()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:N(s||(s=j()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),b.colorTextDescription,F,b.colorTextDescription)}}),h=e(69979),x=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle","enableTransformer","theme","animated","wrap"],D=y.Q.map(function(d){return{label:d,value:d.toLowerCase()}}),f=(0,R.memo)(function(d){var l=d.children,b=d.language,N=b===void 0?"markdown":b,$=d.className,F=d.style,T=d.allowChangeLanguage,Z=T===void 0?!1:T,C=d.fileName,ie=d.icon,he=d.contentStyle,Se=d.enableTransformer,Te=d.theme,je=d.animated,q=d.wrap,n=U()(d,x),u=(0,R.useState)(!0),v=z()(u,2),I=v[0],ae=v[1],Y=(0,R.useState)(N||"markdown"),ce=z()(Y,2),ee=ce[0],xe=ce[1],E=S({variant:"filled",expand:I}),re=E.styles,J=E.cx,k=J(re.container,q&&re.wrap,$);return(0,R.useEffect)(function(){xe(N)},[N]),(0,h.jsxs)(L.D,a()(a()({className:k,"data-code-type":"highlighter",style:F},n),{},{children:[(0,h.jsxs)(L.D,{align:"center",className:re.header,horizontal:!0,justify:"space-between",children:[(0,h.jsx)(ge.Z,{icon:I?O.Z:M.Z,onClick:function(){return ae(!I)},size:"small"}),Z&&!C?(0,h.jsx)(w.default,{className:re.select,onSelect:xe,options:D,size:"small",suffixIcon:!1,value:ee.toLowerCase(),variant:"borderless"}):(0,h.jsxs)(L.D,{align:"center",className:re.select,gap:2,horizontal:!0,children:[ie,(0,h.jsx)("span",{children:C||ee})]}),(0,h.jsx)(B.Z,{content:l,size:"small"})]}),(0,h.jsx)(c.d,{animated:je,enableTransformer:Se,language:ee==null?void 0:ee.toLowerCase(),style:I?a()(a()({},he),{},{flex:1}):a()(a()({},he),{},{height:0,overflow:"hidden"}),theme:Te,children:l})]}))}),X=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","variant","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap","enableTransformer","theme","animated"],me=(0,R.memo)(function(d){var l=d.fullFeatured,b=d.copyButtonSize,N=b===void 0?"small":b,$=d.children,F=d.language,T=d.className,Z=d.style,C=d.copyable,ie=C===void 0?!0:C,he=d.showLanguage,Se=he===void 0?!0:he,Te=d.variant,je=Te===void 0?"filled":Te,q=d.spotlight,n=d.allowChangeLanguage,u=d.fileName,v=d.icon,I=d.contentStyle,ae=d.wrap,Y=d.enableTransformer,ce=d.theme,ee=d.animated,xe=U()(d,X),E=S({variant:je}),re=E.styles,J=E.cx,k=J(re.container,ae&&re.wrap,T);return l?(0,h.jsx)(f,a()(a()({allowChangeLanguage:n,animated:ee,className:T,contentStyle:I,fileName:u,icon:v,language:F,style:Z,theme:ce,wrap:ae},xe),{},{children:$})):(0,h.jsxs)("div",a()(a()({className:k,"data-code-type":"highlighter",style:Z},xe),{},{children:[q&&(0,h.jsx)(r.Z,{size:240}),ie&&(0,h.jsx)(B.Z,{className:re.button,content:$,size:N}),Se&&F&&(0,h.jsx)(ve.Z,{className:re.lang,children:F.toLowerCase()}),(0,h.jsx)("div",{className:re.scroller,children:(0,h.jsx)(c.d,{animated:ee,enableTransformer:Y,language:F==null?void 0:F.toLowerCase(),style:I,theme:ce,children:$})})]}))})},65756:function(Oe,ue,e){e.d(ue,{h:function(){return x},P:function(){return M.Pz}});var de=e(26068),a=e.n(de),be=e(48305),U=e.n(be),B=e(67825),ve=e.n(B),r=e(15396),R=e(20683),fe=e(659),z=e(23856),ge=e(71723),w=e(30296),O=e(52136),M=e(24837),L=e(67735),y=e(26601),c=e(96207),ne=e(53649),j=e.n(ne),_=e(75555),i,g,P,H,Q,le,te=(0,_.kc)(function(D,f){var X=D.token,me=D.css,d=D.cx,l=D.prefixCls,b=f.expand,N=f.variant,$="".concat(l,"-json-viewer"),F=N==="filled",T=me(i||(i=j()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),F?X.colorFillTertiary:"transparent",F?"transparent":X.colorBorder,F?X.colorFillTertiary:X.colorFillQuaternary);return{container:d($,N!=="borderless"&&T,me(g||(g=j()([`
          position: relative;

          overflow: hidden;

          height: `,`;

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
        `])),b?"100%":"auto !important",X.borderRadius,X.motionEaseOut)),content:me(P||(P=j()([`
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),N==="borderless"?0:X.padding),header:me(H||(H=j()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),X.colorFillQuaternary),title:me(Q||(Q=j()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),X.margin),titleText:me(le||(le=j()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),X.fontSize,l,X.colorTextDescription)}}),s=e(69979),S=["variant","fullFeatured","title","icon","contentStyle","classNames","className","collapseStringMode","collapsed","dark","displayArrayIndex","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],h=c.C.Text,x=function(f){var X=f.variant,me=X===void 0?"filled":X,d=f.fullFeatured,l=d===void 0?!1:d,b=f.title,N=b===void 0?"json":b,$=f.icon,F=f.contentStyle,T=f.classNames,Z=f.className,C=f.collapseStringMode,ie=C===void 0?"directly":C,he=f.collapsed,Se=he===void 0?2:he,Te=f.dark,je=f.displayArrayIndex,q=je===void 0?!1:je,n=f.displaySize,u=n===void 0?"collapsed":n,v=f.ignoreLargeArray,I=v===void 0?!1:v,ae=f.matchesURL,Y=ae===void 0?!0:ae,ce=f.src,ee=f.theme,xe=ee===void 0?"default":ee,E=f.style,re=ve()(f,S),J=(0,z.r)(),k=J.isDarkMode,t=(0,O.useState)(!0),p=U()(t,2),o=p[0],A=p[1],m=te({expand:o,variant:l?"filled":me}),K=m.styles,V=m.cx,oe=(0,O.useMemo)(function(){return(0,M.Pz)(ce)},[ce]),ye=(0,s.jsx)(M.ZP,a()({collapseStringMode:ie,collapsed:Se,dark:Te!=null?Te:k,displayArrayIndex:q,displaySize:u,ignoreLargeArray:I,matchesURL:Y,src:ce,theme:xe},re));return(0,s.jsxs)(fe.Z,{className:V(K.container,Z),style:E,vertical:!0,children:[l&&(0,s.jsxs)(fe.Z,{align:"center",className:V(K.header,T==null?void 0:T.header),justify:"space-between",children:[(0,s.jsx)(r.Z,{icon:o?ge.Z:w.Z,onClick:function(){return A(!o)},size:"small"}),(0,s.jsxs)(fe.Z,{align:"center",className:K.title,flex:1,gap:2,justify:"center",title:N,children:[$,(0,s.jsx)(fe.Z,{className:K.titleText,children:(0,s.jsx)(h,{ellipsis:!0,children:N})})]}),(0,s.jsx)(R.Z,{content:oe,size:"small"})]}),(0,s.jsx)(fe.Z,{className:V(K.content,T==null?void 0:T.content),flex:1,style:o?F:a()(a()({},F),{},{height:0,maxHeight:0,padding:0,overflow:"hidden"}),children:ye})]})}},4855:function(Oe,ue,e){e.d(ue,{T:function(){return J}});var de=e(26068),a=e.n(de),be=e(67825),U=e.n(be),B=e(52136),ve=e(39813),r=e(69979),R=["to","children"],fe=function(t){var p=t.to,o=t.children,A=U()(t,R);return(0,r.jsx)("a",a()(a()({href:"#".concat(p)},A),{},{children:o}))},z=(0,B.createContext)({loading:!1,Link:fe}),ge=["to","Link","children"],w=function(t){var p=t.to,o=t.Link,A=t.children,m=U()(t,ge);return o?(0,r.jsx)(o,a()(a()({to:p},m),{},{children:A})):(0,r.jsx)("a",a()(a()({href:"#".concat(p)},m),{},{children:A}))},O=function(t){var p=(0,B.useContext)(z),o=p.Link,A=p.breadcrumb;(0,B.useEffect)(function(){var K;A==null||(K=A.setItems)===null||K===void 0||K.call(A,t.items)},[A,t.items]);var m=(0,B.useCallback)(function(K,V,oe,ye){var se,pe,W=K.href?K.href===((se=oe.at(-1))===null||se===void 0?void 0:se.href):K.path===((pe=oe.at(-1))===null||pe===void 0?void 0:pe.path);if(W)return(0,r.jsx)("span",{children:K.title});var Pe=K.href?K.href:"/".concat(ye.join("/"));return(0,r.jsx)(w,{Link:o,to:Pe,children:K.title})},[o]);return(0,r.jsx)(ve.Z,a()({itemRender:m},t))},M=e(39402),L=e(56214),y=e(10180),c=e(659),ne=e(53649),j=e.n(ne),_=e(75555),i,g=(0,_.kc)(function(k){var t=k.css,p=k.token;return{root:t(i||(i=j()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),P=["className","children"],H={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},Q=function(t){var p=t.className,o=t.children,A=U()(t,P),m=g(),K=m.styles,V=m.cx,oe=(0,B.useContext)(z),ye=oe.loading,se=oe.breadcrumb,pe=oe.Link,W=oe.status,Pe=(0,B.useCallback)(function(){if(W){var G;return(0,r.jsx)(M.ZP,{extra:(0,r.jsx)(pe,{to:se==null||(G=se.items)===null||G===void 0||(G=G[0])===null||G===void 0?void 0:G.path,children:(0,r.jsx)(L.ZP,{type:"primary",children:"Go Back"})}),status:W,subTitle:H[W],title:W})}return o},[W,o,pe,se==null?void 0:se.items]);return ye?(0,r.jsx)(y.Z,{active:!0,className:V(K.root,p)}):(0,r.jsx)(c.Z,a()(a()({className:V(K.root,p),gap:20,vertical:!0},A),{},{children:Pe()}))},le=function(){return(0,r.jsx)(r.Fragment,{})},te=e(48305),s=e.n(te),S=e(335),h=e.n(S),x=e(4617),D=e(14431),f=e(46129),X=e(99907),me=e(96207),d=e(90294),l=["shape","size","src"],b=function(t){if(typeof t=="number")return t;switch(t){case"small":return 40;case"large":return 88;default:return 64}},N=function(t){var p=t.shape,o=p===void 0?"square":p,A=t.size,m=t.src,K=U()(t,l),V=(0,B.useMemo)(function(){return b(A)},[A]);return(0,r.jsx)(d.Z,a()({shape:o,size:V,src:m},K))},$,F,T,Z,C,ie,he,Se,Te,je=(0,_.kc)(function(k,t){var p=k.css,o=k.token,A=k.prefixCls,m=t.bordered,K=m===void 0?!1:m,V=t.divider,oe=V===void 0?!0:V;return{root:K?p($||($=j()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),o.marginXS,o.padding,o.colorBgBase,o.borderRadius,o.boxShadowTertiary):p(F||(F=j()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),o.paddingXS,o.marginXS,oe&&p(T||(T=j()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),o.paddingLG,o.colorSplit)),icon:p(Z||(Z=j()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),A,A,o.colorPrimary,A),titleBox:p(C||(C=j()([`
        margin-bottom: `,`px;
      `])),o.marginSM),subTitle:p(ie||(ie=j()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),o.marginXXS,A,o.fontSize,o.colorTextSecondary),title:p(he||(he=j()([`
        font-size: `,`px;
        font-weight: 700;
      `])),o.fontSizeHeading5),descriptions:p(Se||(Se=j()([`
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
      `])),o.marginXXS,o.fontSize,o.colorTextSecondary,A,A,o.fontSize,A,o.fontSize,o.colorTextSecondary),rightButtons:p(Te||(Te=j()([`
        justify-content: flex-end;
      `])))}}),q=["className","classNames","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],n=me.C.Paragraph,u=function(t){var p=t.className,o=t.classNames,A=t.icon,m=t.title,K=t.titleRender,V=t.subTitle,oe=t.status,ye=t.descriptions,se=ye===void 0?[]:ye,pe=t.descriptionsRender,W=t.extraContent,Pe=W===void 0?{}:W,G=t.extraContentRender,Ce=t.bordered,Me=t.divider,ke=U()(t,q),Qe=je({bordered:Ce,divider:Me}),De=Qe.styles,Fe=Qe.cx,Ie=(0,B.useMemo)(function(){return!A||typeof A=="string"?{src:A,size:V?"large":"default"}:(V&&A.size===void 0&&(A.size="large"),A)},[A,V]),He=(0,B.useMemo)(function(){var Ae=(0,r.jsx)("span",{className:Fe(De.title,o==null?void 0:o.title),children:m});return K?K(Ae):Ae},[o==null?void 0:o.title,Fe,De.title,m,K]),$e=(0,B.useMemo)(function(){var Ae=[],Ke=h()(se.filter(function(nn){return!!nn}).entries()),Ge;try{for(Ke.s();!(Ge=Ke.n()).done;){var an=s()(Ge.value,2),Je=an[0],we=an[1],en=we.icon,Xe=we.text;(oe||Je>=1)&&Ae.push((0,r.jsx)(f.Z,{dashed:!1,type:"vertical"},"divider-".concat(Je))),Ae.push((0,r.jsxs)(c.Z,{align:"center",gap:4,children:[en&&(0,r.jsx)(x.Z,{title:en.tooltip,children:en.content}),(0,r.jsx)("span",{children:Xe})]},"desc-".concat(Je)))}}catch(nn){Ke.e(nn)}finally{Ke.f()}return pe?pe(Ae):Ae},[se,pe,oe]),Le=(0,B.useMemo)(function(){if(!Pe&&!G)return null;var Ae=(0,r.jsx)(D.h,a()({className:De.rightButtons},Pe));return G?G(Ae):Ae},[Pe,G,De.rightButtons]),ze=(0,B.useContext)(z),Ve=ze.loading,We=ze.status;return Ve?(0,r.jsxs)(c.Z,{className:Fe(De.root,p),gap:20,children:[(0,r.jsx)(c.Z,{children:(0,r.jsx)(y.Z.Avatar,{active:!0,className:De.icon,shape:Ie==null?void 0:Ie.shape,size:b(Ie==null?void 0:Ie.size)})}),(0,r.jsxs)(c.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,r.jsxs)("div",{className:De.titleBox,children:[(0,r.jsx)(y.Z.Input,{active:!0,size:25}),V&&(0,r.jsx)("div",{className:Fe(De.subTitle,p),children:(0,r.jsx)(y.Z.Input,{active:!0,size:18})})]}),(0,r.jsx)(y.Z.Input,{active:!0,size:18})]}),(0,r.jsx)(c.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,r.jsx)(y.Z.Button,{active:!0})})]}):We?null:(0,r.jsxs)(c.Z,a()(a()({className:Fe(De.root,p),gap:20},ke),{},{children:[Ie&&(0,r.jsx)(c.Z,{children:(0,r.jsx)(N,a()({className:De.icon},Ie))}),(0,r.jsxs)(c.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,r.jsxs)(c.Z,{className:Fe(De.titleBox,o==null?void 0:o.titleWrapper),vertical:!0,children:[He,V&&(0,r.jsx)(n,{className:Fe(De.subTitle,o==null?void 0:o.subTitle),ellipsis:{rows:2},children:V})]}),(0,r.jsxs)(c.Z,{align:"center",className:Fe(De.descriptions,o==null?void 0:o.descriptions),gap:4,children:[oe&&(0,r.jsx)(X.q,a()({},oe)),$e]})]}),(0,r.jsx)(c.Z,{align:"center",className:o==null?void 0:o.extraContent,flex:"1",justify:"flex-end",children:Le})]}))},v=e(58177),I,ae=(0,_.kc)(function(k){var t=k.css,p=k.token;return{root:t(I||(I=j()([`
      width: inherit;
      height: 100%;
      min-height: inherit;
      padding: `,"px ","px ",`px;
    `])),p.padding,p.paddingLG,p.paddingXL)}}),Y=["loading","className","children","Link","status","gap"],ce=function(t){var p=(0,v.nB)(),o=t.loading,A=t.className,m=t.children,K=t.Link,V=K===void 0?p||fe:K,oe=t.status,ye=t.gap,se=ye===void 0?16:ye,pe=U()(t,Y),W=ae(pe),Pe=W.styles,G=W.cx,Ce=(0,B.useState)([]),Me=s()(Ce,2),ke=Me[0],Qe=Me[1];return(0,r.jsx)(c.Z,a()(a()({className:G(Pe.root,A),gap:se,vertical:!0},pe),{},{children:(0,r.jsx)(z.Provider,{value:{loading:o,Link:V,breadcrumb:{items:ke,setItems:Qe},status:oe},children:m})}))},ee,xe=(0,_.kc)(function(k){var t=k.css,p=k.token;return{root:t(ee||(ee=j()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),p.fontFamily,p.fontWeightStrong,p.lineHeight,p.colorText)}}),E=["className"],re=function(t){var p=t.className,o=U()(t,E),A=xe(),m=A.cx,K=A.styles;return(0,r.jsx)("h2",a()({className:m(K.root,p)},o))},J=ce;J.Breadcrumb=O,J.Title=re,J.Header=u,J.Content=Q,J.Footer=le},40629:function(Oe,ue,e){e.d(ue,{Q:function(){return je}});var de=e(26068),a=e.n(de),be=e(67825),U=e.n(be),B=e(52136),ve=e(53649),r=e.n(ve),R=e(75555),fe,z,ge,w,O,M=(0,R.kc)(function(q){var n=q.css,u=q.token,v=q.prefixCls;return{root:n(fe||(fe=r()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),u.fontFamily,u.colorText,u.colorBgContainer,u.borderRadius*2,u.boxShadowTertiary),bordered:n(z||(z=r()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),u.colorBorder),hoverable:n(ge||(ge=r()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),u.motionDurationMid,u.motionDurationMid,u.boxShadow),text:n(w||(w=r()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),u.colorTextSecondary),error:n(O||(O=r()([`
      color: `,`;
    `])),u.colorErrorText)}}),L=e(69979),y=["className","bordered","hoverable","children"],c=function(n){var u=n.className,v=n.bordered,I=v===void 0?!1:v,ae=n.hoverable,Y=ae===void 0?!0:ae,ce=n.children,ee=U()(n,y),xe=M(),E=xe.cx,re=xe.styles;return(0,L.jsx)("div",a()(a()({className:E(re.root,I&&re.bordered,Y&&re.hoverable,u)},ee),{},{children:ce}))},ne=e(659),j,_=(0,R.kc)(function(q){var n=q.css,u=q.token;return{root:n(j||(j=r()([`
      padding: 12px 24px 20px;
    `])))}}),i=["className","children"],g=function(n){var u=n.className,v=n.children,I=U()(n,i),ae=_(),Y=ae.styles,ce=ae.cx;return(0,L.jsx)(ne.Z,a()(a()({className:ce(Y.root,u),gap:20,vertical:!0},I),{},{children:v}))},P=e(64302),H,Q=(0,R.kc)(function(q){var n=q.css,u=q.token,v=q.prefixCls,I=70;return{root:n(H||(H=r()([`
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
    `])),v,v,v,v,I,v,I)}}),le=["className","colon","column","size"],te=function(n){var u=n.className,v=n.colon,I=v===void 0?!1:v,ae=n.column,Y=ae===void 0?2:ae,ce=n.size,ee=ce===void 0?"small":ce,xe=U()(n,le),E=Q(),re=E.cx,J=E.styles;return(0,L.jsx)(P.Z,a()({className:re(J.root,u),colon:I,column:Y,size:ee},xe))},s=e(75716),S=e(90294),h=e(2991),x=e(56214),D=e(98075),f=e(96207),X,me,d,l,b,N,$,F,T,Z=(0,R.kc)(function(q,n){var u=q.css,v=q.token,I=q.prefixCls,ae=n.divider,Y=ae===void 0?!0:ae,ce=n.iconBg,ee=ce===void 0?!0:ce;return{root:u(X||(X=r()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),Y?20:0,Y&&u(me||(me=r()([`
          border-bottom: 1px solid `,`;
        `])),v.colorSplit)),icon:u(d||(d=r()([`
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
      `])),I,v.colorPrimary,ee&&u(l||(l=r()([`
            background-color: `,`;
          `])),v.colorBgLayout),I),titleBox:u(b||(b=r()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),v.marginXXS),title:u(N||(N=r()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),v.fontWeightStrong),description:u($||($=r()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),I,v.colorTextSecondary),extra:u(F||(F=r()([`
        margin-top: -4px;
      `]))),rightButtons:u(T||(T=r()([`
        justify-content: flex-end;
      `])))}}),C=["className","icon","title","description","extra","divider"],ie=["className","shape","size"],he=["children"],Se=f.C.Paragraph,Te=function(n){var u=n.className,v=n.icon,I=n.title,ae=n.description,Y=n.extra,ce=n.divider,ee=U()(n,C),xe=Z({divider:ce,iconBg:!(v!=null&&v.src)}),E=xe.styles,re=xe.cx,J=v||{},k=J.className,t=J.shape,p=t===void 0?"square":t,o=J.size,A=o===void 0?72:o,m=U()(J,ie),K=Y||{},V=K.children,oe=U()(K,he);return(0,L.jsxs)(ne.Z,a()(a()({className:re(E.root,u),gap:20},ee),{},{children:[v&&(0,L.jsx)(ne.Z,{children:(0,L.jsx)(S.Z,a()({className:re(E.icon,k),shape:p,size:A},m))}),(0,L.jsxs)(ne.Z,{flex:"1",vertical:!0,children:[(0,L.jsxs)(ne.Z,{className:E.titleBox,gap:4,children:[(0,L.jsx)("div",{className:E.title,children:I}),Y&&(0,L.jsx)(ne.Z,{align:"flex-start",className:E.extra,justify:"flex-end",onClick:function(se){return se.stopPropagation()},children:(0,L.jsx)(h.Z,a()(a()({},oe),{},{children:V||(0,L.jsx)(x.ZP,{icon:(0,L.jsx)(s.Z,{icon:D.Z}),size:"small",type:"text"})}))})]}),ae&&(0,L.jsx)(Se,{className:E.description,ellipsis:{rows:2},children:ae})]})]}))},je=c;je.Header=Te,je.Content=g,je.Descriptions=te},99907:function(Oe,ue,e){e.d(ue,{q:function(){return j}});var de=e(26068),a=e.n(de),be=e(67825),U=e.n(be),B=e(75716),ve=e(78305),r=e(84164),R=e(4617),fe=e(22936),z=e(52136),ge=e(53649),w=e.n(ge),O=e(75555),M,L,y=(0,O.kc)(function(_){var i=_.css,g=_.token,P=_.prefixCls;return{root:i(M||(M=w()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),P,P,P),tooltip:i(L||(L=w()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),g.colorTextTertiary)}},{hashPriority:"low"}),c=e(69979),ne=["tooltip","className","status","text","color"],j=function(i){var g=i.tooltip,P=i.className,H=i.status,Q=i.text,le=i.color,te=U()(i,ne),s=y(),S=s.cx,h=s.styles;return(0,c.jsxs)(ve.Z,a()(a()({className:S(h.root,P),size:"small"},te),{},{children:[(0,c.jsx)(r.Z,{status:H,text:Q,color:le}),g&&(0,c.jsx)(R.Z,{className:h.tooltip,title:g,children:(0,c.jsx)(B.Z,{icon:fe.Z})})]}))}},96207:function(Oe,ue,e){e.d(ue,{Z:function(){return c}});var de=e(26068),a=e.n(de),be=e(48305),U=e.n(be),B=e(67825),ve=e.n(B),r=e(50259),R=e(4617),fe=e(17888),z=e.n(fe),ge=e(87),w=e.n(ge),O=e(18342),M=e(52136),L=e(69979),y=["time","format","relativeTime","tooltip"];z().extend(w());var c=r.Z,ne=function(i){return z()(i?new Date(i):new Date).fromNow()},j=function(i){var g,P=i.time,H=i.format,Q=i.relativeTime,le=Q===void 0?!0:Q,te=i.tooltip,s=ve()(i,y),S=(0,M.useState)(ne(P)),h=U()(S,2),x=h[0],D=h[1],f=(0,M.useCallback)(function(l){var b=z()(),N=z()(l),$=b.diff(N);if($>0&&$<60*60*1e3)return setInterval(function(){D(ne(l))},60*1e3)},[]);(0,M.useEffect)(function(){var l;return le&&(l=f(new Date(P))),function(){l&&clearInterval(l)}},[le,f,P]),(0,M.useEffect)(function(){if(le){var l=ne(P);l!==x&&(D(l),f(new Date(P)))}},[P,le,x,f]);var X=z()(P).format(H||"YYYY-MM-DD HH:mm:ss"),me=le?x:X,d=(g=te==null?void 0:te.title)!==null&&g!==void 0?g:le?X:void 0;return d&&(0,O.Z)(s,"ellipsis.tooltip.title",void 0),(0,L.jsx)(R.Z,a()(a()({},te||{}),{},{title:d,children:(0,L.jsx)(c.Text,a()(a()({},s),{},{children:me}))}))};c.Time=j,ue.C=c},29672:function(Oe,ue,e){e.d(ue,{Q:function(){return de}});var de=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","shellsession","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"]},31182:function(Oe,ue,e){e.r(ue),e.d(ue,{themeMap:function(){return de}});var de=["catppuccin-latte","everforest-light","github-light","github-light-default","github-light-high-contrast","gruvbox-light-hard","gruvbox-light-medium","gruvbox-light-soft","kanagawa-lotus","light-plus","material-theme-lighter","min-light","one-light","rose-pine-dawn","slack-ochin","snazzy-light","solarized-light","vitesse-light","andromeeda","aurora-x","ayu-dark","catppuccin-frappe","catppuccin-macchiato","catppuccin-mocha","dark-plus","dracula","dracula-soft","everforest-dark","github-dark","github-dark-default","github-dark-dimmed","github-dark-high-contrast","gruvbox-dark-hard","gruvbox-dark-medium","gruvbox-dark-soft","houston","kanagawa-dragon","kanagawa-wave","laserwave","material-theme","material-theme-darker","material-theme-ocean","material-theme-palenight","min-dark","monokai","night-owl","nord","one-dark-pro","plastic","poimandres","red","rose-pine","rose-pine-moon","slack-dark","solarized-dark","synthwave-84","tokyo-night","vesper","vitesse-black","vitesse-dark"]},91265:function(Oe,ue,e){e.d(ue,{AY:function(){return i},GS:function(){return g},QU:function(){return j.Q},T1:function(){return te},VE:function(){return le},Vf:function(){return me},X1:function(){return X},Xv:function(){return h},lq:function(){return f},xM:function(){return _.themeMap}});var de=e(90228),a=e.n(de),be=e(87999),U=e.n(be),B=e(26068),ve=e.n(B),r=e(48305),R=e.n(r),fe=e(335),z=e.n(fe),ge=e(15558),w=e.n(ge),O=e(19733),M=e(23856),L=e(75555),y=e(52136),c=e(72642),ne=e(142),j=e(29672),_=e(31182),i="txt",g=1e4,P=new Map,H=1e3,Q=function(){if(P.size>H){var l=Math.floor(H*.2),b=w()(P.keys()).slice(0,l),N=z()(b),$;try{for(N.s();!($=N.n()).done;){var F=$.value;P.delete(F)}}catch(T){N.e(T)}finally{N.f()}}},le=function(){return Promise.all([e.e(5958),e.e(3912)]).then(e.bind(e,3912)).then(function(l){return l.codeToHtml})},te=le(),s=function(){return typeof window=="undefined"?Promise.resolve(null):Promise.all([e.e(5958),e.e(3912)]).then(e.bind(e,3912))},S=s(),h=function(l){return l.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")},x=function(l){if(l.length===0)return[[]];var b=[[]],N=b[0],$=function(){N=[],b.push(N)},F=z()(l),T;try{for(F.s();!(T=F.n()).done;){var Z,C=T.value,ie=(Z=C.content)!==null&&Z!==void 0?Z:"";if(ie===`
`){$();continue}if(!ie.includes(`
`)){N.push(C);continue}var he=ie.split(`
`),Se=z()(he.entries()),Te;try{for(Se.s();!(Te=Se.n()).done;){var je=R()(Te.value,2),q=je[0],n=je[1];n&&N.push(ve()(ve()({},C),{},{content:n})),q<he.length-1&&$()}}catch(u){Se.e(u)}finally{Se.f()}}}catch(u){F.e(u)}finally{F.f()}return b.length===0?[[]]:b},D=function(l,b){if(!(!l&&!b))return{backgroundColor:l,color:b}},f=function(l,b,N){var $=(0,M.r)(),F=$.isDarkMode,T=(0,L.Fg)(),Z=l.toLowerCase(),C=(0,y.useMemo)(function(){return j.Q.includes(Z)?Z:i},[Z]),ie=(0,y.useMemo)(function(){return _.themeMap.includes(N)?N:void 0},[N]),he=(0,y.useMemo)(function(){if(b)return[(0,O.hu)(),(0,O.d0)(),(0,O.dY)(),(0,O.Eu)(),(0,O.p4)()]},[b]),Se=(0,y.useMemo)(function(){return{"slack-dark":{"#4ec9b0":T.yellow,"#569cd6":T.colorError,"#6a9955":T.gray,"#9cdcfe":T.colorText,"#b5cea8":T.purple10,"#c586c0":T.colorInfo,"#ce9178":T.colorSuccess,"#dcdcaa":T.colorWarning,"#e6e6e6":T.colorText},"slack-ochin":{"#002339":T.colorText,"#0991b6":T.colorError,"#174781":T.purple10,"#2f86d2":T.colorText,"#357b42":T.gray,"#7b30d0":T.colorInfo,"#7eb233":T.colorWarningTextActive,"#a44185":T.colorSuccess,"#dc3eb7":T.yellow11}}},[T]),Te=(0,y.useMemo)(function(){return ie||(Z==="md"?F?"catppuccin-mocha":"catppuccin-latte":Z==="shellsession"?F?"material-theme-darker":"material-theme-lighter":Z==="diff"?F?"slack-dark":"github-light":F?"slack-dark":"slack-ochin")},[F,Z,ie]);return{colorReplacements:Se,matchedLanguage:C,shikiTheme:Te,transformers:he}},X=function(l,b,N,$){var F=f(b,N,$),T=F.colorReplacements,Z=F.matchedLanguage,C=F.shikiTheme,ie=F.transformers,he=(0,y.useMemo)(function(){var n=l.length<g?l:ne.V8.hashStr(l);return[Z,C,n].join("-")},[l,Z,C]),Se=(0,y.useState)(),Te=R()(Se,2),je=Te[0],q=Te[1];return(0,y.useEffect)(function(){if(!he){q(void 0);return}var n=P.get(he);if(n){n.then(function(v){q(v)}).catch(function(){});return}var u=U()(a()().mark(function v(){var I,ae,Y,ce,ee;return a()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,E.next=3,te;case 3:return I=E.sent,E.next=6,I(l,{colorReplacements:T,lang:Z,theme:C,transformers:ie});case 6:return ae=E.sent,E.abrupt("return",ae);case 10:return E.prev=10,E.t0=E.catch(0),console.warn("\u9AD8\u7EA7\u6E32\u67D3\u5931\u8D25:",E.t0),E.prev=13,E.next=16,te;case 16:return Y=E.sent,E.next=19,Y(l,{lang:Z,theme:C});case 19:return ce=E.sent,E.abrupt("return",ce);case 23:return E.prev=23,E.t1=E.catch(13),ee='<pre class="fallback"><code>'.concat(h(l),"</code></pre>"),E.abrupt("return",ee);case 27:case"end":return E.stop()}},v,null,[[0,10],[13,23]])}))();P.set(he,u),Q(),u.then(function(v){P.get(he)===u&&q(v)}).catch(function(){P.get(he)===u&&P.delete(he)})},[he,l,Z,C,ie,T]),je||""},me=function(l,b,N,$){var F=f(b,N,$),T=F.colorReplacements,Z=F.matchedLanguage,C=F.shikiTheme,ie=(0,y.useState)(),he=R()(ie,2),Se=he[0],Te=he[1],je=(0,y.useRef)(null),q=(0,y.useRef)(""),n=(0,y.useRef)(l),u=(0,y.useRef)(void 0),v=(0,y.useRef)(T[C]),I=(0,y.useRef)([[]]),ae=(0,y.useRef)("");(0,y.useEffect)(function(){n.current=l},[l]),(0,y.useEffect)(function(){v.current=T[C]},[T,C]);var Y=(0,y.useCallback)(function(ee){var xe=I.current,E=ee.length,re=xe.length;if(E!==re||E===0){I.current=ee,Te({colorReplacements:v.current,lines:ee,preStyle:u.current});return}for(var J=!1,k=[],t=0;t<E;t++){var p=ee[t],o=xe[t];if(o===p){k[t]=o;continue}if(!o||o.length!==p.length){k[t]=p,J=!0;continue}var A=!1,m=z()(p.entries()),K;try{for(m.s();!(K=m.n()).done;){var V=R()(K.value,2),oe=V[0],ye=V[1];if(o[oe]!==ye){A=!0;break}}}catch(se){m.e(se)}finally{m.f()}A?(k[t]=p,J=!0):k[t]=o}J&&(I.current=k,Te({colorReplacements:v.current,lines:k,preStyle:u.current}))},[]),ce=(0,y.useCallback)(function(){var ee=U()(a()().mark(function xe(E){var re,J,k,t,p,o,A,m,K,V,oe,ye,se=arguments;return a()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(re=se.length>1&&se[1]!==void 0?se[1]:!1,J=je.current,J){W.next=4;break}return W.abrupt("return");case 4:if(re&&(J.clear(),q.current=""),k=q.current,t=E,p=!re&&E.startsWith(k),p?t=E.slice(k.length):re||J.clear(),q.current=E,t){W.next=20;break}if(o=J.tokensStable,A=J.tokensUnstable,m=o.length+A.length,m!==0){W.next=17;break}return Y([[]]),W.abrupt("return");case 17:return K=function(){return o.length===0?A:A.length===0?o:[].concat(w()(o),w()(A))},Y(x(K())),W.abrupt("return");case 20:return W.prev=20,W.next=23,J.enqueue(t);case 23:V=J.tokensStable,oe=J.tokensUnstable,ye=function(){return V.length===0?oe:oe.length===0?V:[].concat(w()(V),w()(oe))},Y(x(ye())),W.next=32;break;case 29:W.prev=29,W.t0=W.catch(20),console.error("Streaming highlighting failed:",W.t0);case 32:case"end":return W.stop()}},xe,null,[[20,29]])}));return function(xe){return ee.apply(this,arguments)}}(),[Y]);return(0,y.useEffect)(function(){var ee="".concat(Z,"-").concat(C);if(!(ae.current===ee&&je.current)){var xe=!1;return U()(a()().mark(function E(){var re,J,k,t,p,o;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,S;case 2:if(re=m.sent,!(!re||xe)){m.next=5;break}return m.abrupt("return");case 5:return m.prev=5,m.next=8,re.getSingletonHighlighter({langs:Z?[Z]:[],themes:[C]});case 8:if(J=m.sent,!(!J||xe)){m.next=11;break}return m.abrupt("return");case 11:if(ae.current!==ee&&((k=je.current)===null||k===void 0||k.clear(),t=new c.r({highlighter:J,lang:Z,theme:C}),je.current=t,ae.current=ee,q.current="",I.current=[[]],p=J.getTheme(C),u.current=D(p==null?void 0:p.bg,p==null?void 0:p.fg)),o=n.current,!o){m.next=18;break}return m.next=16,ce(o,!0);case 16:m.next=19;break;case 18:Y([[]]);case 19:m.next=25;break;case 21:m.prev=21,m.t0=m.catch(5),console.error("Streaming highlighter initialization failed:",m.t0),ae.current="";case 25:case"end":return m.stop()}},E,null,[[5,21]])}))(),function(){xe=!0}}},[Z,Y,C,ce]),(0,y.useEffect)(function(){je.current&&ce(l)},[l,ce]),Se}},29837:function(Oe,ue,e){e.d(ue,{J:function(){return O}});var de=e(48305),a=e.n(de),be=e(67825),U=e.n(be),B=e(52136),ve=function(){try{var y,c;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((y=window)===null||y===void 0?void 0:y.SpeechRecognition)||((c=window)===null||c===void 0?void 0:c.webkitSpeechRecognition)}catch(ne){}},r=function(){try{var y,c;return(globalThis==null?void 0:globalThis.speechSynthesis)||((y=window)===null||y===void 0?void 0:y.speechSynthesis)||((c=window)===null||c===void 0?void 0:c.webkitSpeechSynthesis)}catch(ne){}},R=function(){try{var y,c;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((y=window)===null||y===void 0?void 0:y.SpeechSynthesisUtterance)||((c=window)===null||c===void 0?void 0:c.webkitSpeechSynthesisUtterance)}catch(ne){}},fe=ve(),z=r(),ge=R(),w=["voice","rate","pitch"],O=function(y,c){var ne=c.voice,j=c.rate,_=c.pitch,i=U()(c,w),g=(0,B.useState)(z==null?void 0:z.getVoices()),P=a()(g,2),H=P[0],Q=P[1],le=(0,B.useState)(y),te=a()(le,2),s=te[0],S=te[1],h=(0,B.useState)(!1),x=a()(h,2),D=x[0],f=x[1],X=(0,B.useMemo)(function(){if(ge){var l=new ge(s);return l.voice=H.find(function(b){return b.name===ne}),l.onstart=function(){return f(!0)},l.onend=function(){return f(!1)},_&&(l.pitch=_*10),j&&(l.rate=j*10),l}},[s,H,j,_,ne]);(0,B.useEffect)(function(){z&&(z.onvoiceschanged=function(){Q(z==null?void 0:z.getVoices())},z.onstart=function(){return f(!0)},z.onend=function(){return f(!1)})},[]);var me=(0,B.useCallback)(function(){var l;i==null||(l=i.onStart)===null||l===void 0||l.call(i),z==null||z.speak(X)},[i,X]),d=(0,B.useCallback)(function(){var l,b;i==null||(l=i.onStop)===null||l===void 0||l.call(i),(b=speechSynthesis)===null||b===void 0||b.cancel(),f(!1)},[i]);return{isLoading:D,setText:S,start:me,stop:d}},M=null}}]);
