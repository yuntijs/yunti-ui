"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[40119],{12644:function(Ce,ne,e){e.d(ne,{h:function(){return h}});var J=e(57724),r=e.n(J),le=e(26068),C=e.n(le),F=e(67825),q=e.n(F),n=e(62272),O=e(22622),_=e(159),j=e(75271),ee=e(52676),G=["items","onClick","size"],b=["key","label"],R=["key","label"],h=function(o){var U=o.items,c=U===void 0?[]:U,A=o.onClick,t=A===void 0?function(){}:A,i=o.size,y=q()(o,G);if(c.length<=2)return(0,ee.jsx)(n.Z,C()(C()({align:"end",size:12},y),{},{children:c.map(function(B){var E=B.key,x=B.label,f=q()(B,b);return(0,ee.jsx)(O.ZP,C()(C()({onClick:function(v){return t(E,v)},size:i},f),{},{children:x}),E)})}));var S=r()(c),W=S[0],z=S.slice(1),D=W,p=D.key,V=D.label,T=q()(D,R);return(0,ee.jsx)(_.Z.Button,C()(C()(C()({onClick:function(E){return t(p,E)}},T),{},{menu:{onClick:function(E){var x=E.key,f=E.domEvent;return t(x,f)},items:z},overlayStyle:{minWidth:100},size:i},y),{},{children:V}),p)}},79213:function(Ce,ne,e){e.d(ne,{w:function(){return U}});var J=e(26068),r=e.n(J),le=e(67825),C=e.n(le),F=e(62250),q=e(17394),n=e(97601),O=e(68537),_=e(75271),j=e(53649),ee=e.n(j),G=e(3772),b,R=(0,G.kc)(function(c,A){var t=c.css,i=c.token,y=c.prefixCls,S=A.collapsible;return{root:t(b||(b=ee()([`
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
      `])),i.margin,y,i.paddingSM,i.paddingSM,i.paddingSM,S===!1?i.paddingSM:0,i.fontSize,i.padding,i.padding,i.paddingSM,i.paddingSM,y,i.paddingXXS,i.colorBgContainer,i.paddingXXS,i.padding)}}),h=e(52676),L=["className","variant","collapsible","expandIcon"],o=F.Z.Group,U=function(A){var t=A.className,i=A.variant,y=A.collapsible,S=A.expandIcon,W=S===void 0?function(T){return(0,h.jsx)(q.Z,{icon:T.isActive?n.Z:O.Z,size:{blockSize:24,fontSize:14,strokeWidth:3}})}:S,z=C()(A,L),D=R({collapsible:y}),p=D.styles,V=D.cx;return(0,h.jsx)(o,r()({className:V(p.root,t),collapsible:i==="pure"?!1:y,expandIcon:W,variant:i},z))}},94456:function(Ce,ne,e){e.d(ne,{E_:function(){return n},iV:function(){return O},nc:function(){return j},nB:function(){return ee}});var J=e(75271),r=e(56264),le="https://unpkg.com",C="https://registry.npmmirror.com",F=function(b){var R=b.pkg,h=b.version,L=h===void 0?"latest":h,o=b.path,U=b.proxy;switch(U){case"unpkg":return(0,r.Z)(le,"".concat(R,"@").concat(L),o);default:return(0,r.Z)(C,R,L,"files",o)}},q=e(52676),n=(0,J.createContext)(null),O=(0,J.memo)(function(G){var b=G.children,R=G.config;return(0,q.jsx)(n.Provider,{value:R,children:b})}),_=function(b){var R=b.pkg,h=b.version,L=b.path;return F({path:L,pkg:R,proxy:"aliyun",version:h})},j=function(){var b=(0,J.useContext)(n);return b?(b==null?void 0:b.proxy)!=="custom"?function(R){var h=R.pkg,L=R.version,o=R.path;return F({path:o,pkg:h,proxy:b.proxy,version:L})}:(b==null?void 0:b.customCdnFn)||_:_},ee=function(){var b=(0,J.useContext)(n);return b==null?void 0:b.Link}},26345:function(Ce,ne,e){e.d(ne,{w:function(){return c},Z:function(){return A}});var J=e(26068),r=e.n(J),le=e(67825),C=e.n(le),F=e(85743),q=e(75271),n=e(53649),O=e.n(n),_=e(3772),j,ee,G,b,R,h,L=(0,_.kc)(function(t,i){var y=t.css,S=t.token,W=t.prefixCls,z=i.borderedBottom,D=i.borderedBottomDashed,p=i.borderedTop,V=i.borderedTopDashed,T=i.size,B={small:"".concat(S.paddingXS,"px ").concat(S.padding,"px"),middle:"".concat(S.padding,"px ").concat(S.paddingLG,"px"),default:"".concat(S.paddingSM,"px ").concat(S.paddingLG,"px")},E=z||D;return{custom:y(j||(j=O()([`
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
      `])),W,W,E&&T&&y(ee||(ee=O()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),W,W,B[T],W),z&&y(G||(G=O()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),W,S.colorSplit),D&&y(b||(b=O()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),W,S.colorSplit),p&&y(R||(R=O()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),W,S.colorSplit),V&&y(h||(h=O()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),W,S.colorSplit))}},{hashPriority:"low"}),o=e(52676),U=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],c=function(i){var y=i.className,S=i.borderedBottom,W=i.borderedBottomDashed,z=i.borderedTop,D=i.borderedTopDashed,p=C()(i,U),V=L({borderedBottom:S,borderedBottomDashed:W,borderedTop:z,borderedTopDashed:D,size:p.size}),T=V.styles,B=V.cx;return(0,o.jsx)(F.Z,r()(r()({},p),{},{className:B(T.custom,y)}))},A=c;c.Item=F.Z.Item},82227:function(Ce,ne,e){e.d(ne,{i:function(){return c},Z:function(){return A}});var J=e(26068),r=e.n(J),le=e(48305),C=e.n(le),F=e(67825),q=e.n(F),n=e(30657),O=e(19728),_=e(13761),j=e(62272),ee=e(75271),G=e(53649),b=e.n(G),R=e(3772),h,L=(0,R.kc)(function(t){var i=t.css,y=t.token;return{custom:i(h||(h=b()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),y.colorPrimary,y.colorPrimaryHover)}},{hashPriority:"low"}),o=e(52676),U=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],c=function(i){var y=i.mode,S=y===void 0?"line":y,W=i.content,z=i.defaultOpen,D=i.iconPlacement,p=D===void 0?"left":D,V=i.openIcon,T=i.closeIcon,B=i.type,E=q()(i,U),x=L({}),f=x.styles,ie=S==="expanded",v=(0,ee.useState)(z),m=C()(v,2),M=m[0],re=m[1],H=T||(0,o.jsx)(n.Z,{}),me=V||(0,o.jsx)(O.Z,{}),ve=ie&&(0,o.jsx)("span",{children:M?H:me});return S==="line"||B==="vertical"?(0,o.jsx)(_.Z,r()({type:B},E)):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_.Z,r()(r()({type:B},E),{},{children:(0,o.jsx)("span",{className:ie?f.custom:"",onClick:function(){re(!M)},children:(0,o.jsxs)(j.Z,{size:6,children:[p!=="right"&&ve,(0,o.jsx)("span",{children:W}),p==="right"&&ve]})})})),ie&&(0,o.jsx)("div",{style:{display:M?"block":"none"},children:i.children})]})},A=c},58724:function(Ce,ne,e){e.d(ne,{E:function(){return se}});var J=e(90228),r=e.n(J),le=e(87999),C=e.n(le),F=e(26068),q=e.n(F),n=e(15558),O=e.n(n),_=e(67825),j=e.n(_),ee=e(31759),G=e.n(ee),b=e(3467),R=e(27046),h=e(28562),L=e(1718),o=e(22622),U=e(37805),c=e(38590),A=e(14539),t=e(75271),i=e(94729),y=e(79213),S=e(48305),W=e.n(S),z=(0,t.memo)(function(a){var u=a.name,d=a.update,P=h.Z.useWatch(u),te=(0,t.useState)(0),$=W()(te,2),de=$[0],ce=$[1];return(0,t.useEffect)(function(){(P==null?void 0:P.length)!==de&&(d(),ce(P==null?void 0:P.length))},[de,P,d]),null}),D=e(335),p=e.n(D),V=e(82092),T=e.n(V),B=e(54834),E="__YUNTI_FORM_COLLAPSE_LIST_FIELD_KEY_PATH",x=function(u){return u.join("-")},f=["Input","InputNumber","AutoComplete","Mentions","Radio","RadioGroup","CheckBox","CheckBoxGroup","Rate","Slider","Switch"],ie=function(u,d,P){var te,$=h.Z.useFormInstance(),de=(0,t.useState)([]),ce=W()(de,2),xe=ce[0],pe=ce[1],Se=(0,t.useState)([]),ge=W()(Se,2),k=ge[0],l=ge[1],g=(0,t.useCallback)(function(){return pe($.getFieldValue(u))},[$,u]),s=(te=(0,t.useMemo)(function(){return P.find(function(X){return!!X.name&&!X.noStyle})},[P]))===null||te===void 0?void 0:te.name,N=(0,t.useCallback)(function(X){if(!u)return{dataSource:[],allExpandRowKeys:[]};var ae=[],ue=function oe(Q,w,he){var Z=(0,B.Z)(Q);return Z||(Z=T()({},E,[])),Z[E]=[].concat(O()(he),[w]),Z[d]&&Array.isArray(Z[d])&&(ae.push(x(Z[E])),Z[d]=Z[d].map(function(fe,Ne){return oe(fe,Ne,Z[E])})),Z};return{dataSource:(X==null?void 0:X.map(function(oe,Q){return ue(oe,Q,[])}))||[],allExpandRowKeys:ae}},[d,u]),I=(0,t.useCallback)(function(X,ae){var ue=[],oe=p()(X.entries()),Q;try{for(oe.s();!(Q=oe.n()).done;){var w=W()(Q.value,2),he=w[0],Z=w[1];he===X.length-1?(ue.push(Z),ae&&ue.push(ae)):ue.push(Z,d)}}catch(fe){oe.e(fe)}finally{oe.f()}return ue},[d]),K=(0,t.useCallback)(function(X,ae){var ue=ae[E];return{add:function(Q,w){var he=I(ue),Z=[u].concat(O()(he),[d]),fe=(0,B.Z)($.getFieldValue(Z))||[],Ne=w!=null?w:fe.length;if(fe.splice(Ne,0,Q),$.setFieldValue(Z,fe),s){var Ae=[].concat(O()(Z),[Ne,s]);setTimeout(function(){$.focusField(Ae)},200)}l(O()(new Set([].concat(O()(k),[x(ue)])))),g()},remove:function(Q){if(ue.length<=1){X.remove(Q),g();return}var w=[u].concat(O()(I(ue).slice(0,-1))),he=(0,B.Z)($.getFieldValue(w))||[],Z=[];Array.isArray(Q)?Z.push.apply(Z,O()(Q)):Z.push(Q);var fe=he.filter(function(Ne,Ae){return!Z.includes(Ae)});$.setFieldValue(w,fe.length>0?fe:void 0),g()},move:function(Q,w){if(ue.length<=1)return X.move(Q,w);var he=[u].concat(O()(I(ue).slice(0,-1))),Z=(0,B.Z)($.getFieldValue(he))||[];if(Q<0||w<0||Q>=Z.length||w>=Z.length){console.warn(new Error("\u7D22\u5F15\u8D85\u51FA\u6570\u7EC4\u8303\u56F4"));return}var fe=[Z[w],Z[Q]];Z[Q]=fe[0],Z[w]=fe[1],$.setFieldValue(he,Z),g()},update:function(){return g()}}},[d,k,s,$,I,u,g]);return{values:xe,updateValues:g,expandedRowKeys:k,setExpandedRowKeys:l,fieldValuesToDataSource:N,getFieldPath:I,getFormListOperation:K,firstColumnFormItemName:s}},v=e(53649),m=e.n(v),M=e(3772),re,H,me,ve,je=(0,M.kc)(function(a){var u=a.css,d=a.token,P=a.prefixCls;return{empty:u(re||(re=m()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),d.paddingXS,d.paddingSM,d.colorTextTertiary),list:u(H||(H=m()([`
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
    `])),P,P,d.colorTextTertiary,P,d.marginXS,P),noFormItem:u(me||(me=m()([`
      height: `,`px;
      color: `,`;
    `])),d.controlHeight,d.colorTextTertiary),readOnlyItem:u(ve||(ve=m()([`
      height: `,`px;
      color: `,`;
    `])),d.controlHeight,d.colorTextBase)}}),Y=e(52676),Oe=["collapsible","extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style","defaultExpandAllRows","indentSize","childrenColumnName","rowHoverable"],be=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width","className"],Fe=["key"],Ee=i.C.Text,Te=function(u){var d=u.id,P=u.value;return G()(P)==="object"?(console.warn("".concat(d," => ").concat(P)),"-"):(0,Y.jsx)("span",{children:P})},se=(0,t.memo)(function(a){var u=a.collapsible,d=a.extra,P=a.expandIcon,te=a.icon,$=a.title,de=a.variant,ce=a.defaultActive,xe=a.empty,pe=xe===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":xe,Se=a.columns,ge=Se===void 0?[]:Se,k=a.disabled,l=a.readOnly,g=a.addOneFieldDefault,s=a.disableRemoveWhenOneField,N=a.maxFileds,I=a.name,K=a.addParams,X=a.className,ae=a.onRemove,ue=a.fieldRemoveButton,oe=ue===void 0?!0:ue,Q=a.style,w=a.defaultExpandAllRows,he=a.indentSize,Z=he===void 0?16:he,fe=a.childrenColumnName,Ne=fe===void 0?"children":fe,Ae=a.rowHoverable,Qe=Ae===void 0?!0:Ae,Le=j()(a,Oe),Be=je(),Ie=Be.cx,He=Be.styles,$e=(0,t.useRef)(),Pe=h.Z.useFormInstance(),Re=ie(I,Ne,ge),Ve=Re.values,Ke=Re.updateValues,Ze=Re.expandedRowKeys,Ue=Re.setExpandedRowKeys,Ge=Re.fieldValuesToDataSource,an=Re.getFormListOperation,Je=Re.getFieldPath,we=Re.firstColumnFormItemName,en=(0,t.useMemo)(function(){return Ge(Ve)},[Ge,Ve]),Xe=en.dataSource,nn=(0,t.useMemo)(function(){return Xe==null?void 0:Xe.some(function(De){return De[Ne]})},[Ne,Xe]);(0,t.useEffect)(function(){Ke()},[Ke,l]),(0,t.useEffect)(function(){var De=Pe.getFieldValue(I),Me=Ge(De),We=Me.allExpandRowKeys;w&&Ue(We)},[w,Ge,Pe,I,Ue]);var cn=(0,t.useCallback)(function(){if(!K)return[];var De=typeof K=="function"?K():K;return[De.defaultValue,De.insertIndex]},[K]),Sn=(0,t.useCallback)(function(De){var Me=Pe.getFieldValue([I,De]);return ae==null?void 0:ae(Me)},[Pe,I,ae]);return(0,t.useEffect)(function(){var De;if(g&&(!(Pe!=null&&Pe.getFieldValue(I))||(Pe==null||(De=Pe.getFieldValue(I))===null||De===void 0?void 0:De.length)===0)){var Me;(Me=$e.current)===null||Me===void 0||Me.call.apply(Me,[$e].concat(O()(cn()))),setTimeout(function(){Pe.focusField([I,0,we])},200)}},[g,cn,Pe,I,we,Ke]),(0,Y.jsxs)(y.w,{extra:d===void 0?I&&!l&&(0,Y.jsx)(L.Z,{title:N&&"\u6700\u591A\u6DFB\u52A0 ".concat(N," \u9879"),children:(0,Y.jsx)(o.ZP,{disabled:k||!!(N&&(Ve==null?void 0:Ve.length)===N),icon:(0,Y.jsx)(b.Z,{}),onClick:function(Me){var We;Me.stopPropagation(),(We=$e.current)===null||We===void 0||We.call.apply(We,[$e].concat(O()(cn()))),setTimeout(function(){Pe.focusField([I,Pe.getFieldValue(I).length-1,we])},200)},size:"small",type:"text"})}):d,className:X,collapsible:u,expandIcon:P,icon:te,title:$,variant:de,defaultActive:ce,style:Q,children:[!nn&&(0,Y.jsx)(z,{name:I,update:Ke}),I?(0,Y.jsx)(h.Z.List,q()(q()({name:I},Le),{},{children:function(Me,We){var Tn=We.add,Pn=We.remove;return $e.current=function(ye,ke){Tn(ye,ke),Ke()},(0,Y.jsx)(U.Z,{className:He.list,columns:[].concat(O()(ge.map(function(ye){var ke=ye.label,on=ye.name,tn=ye.render,qe=ye.dependencies,_e=ye.rules,un=ye.align,rn=ye.ellipsis,fn=ye.fixed,Ye=ye.responsive,Cn=ye.shouldCellUpdate,On=ye.width,ln=ye.className,En=j()(ye,be);return{title:ke,dataIndex:on,align:un,ellipsis:rn,fixed:fn,responsive:Ye,shouldCellUpdate:Cn,width:On,render:function(vn,yn,sn){var mn=Me[sn]||{},pn=mn.name,hn=yn[E],jn=[I].concat(O()(Je(hn))),bn=jn.slice(0,-1),Nn=mn.key,Ln=j()(mn,Fe),ze=tn==null?void 0:tn(pn!=null?pn:hn.at(-1),sn,an(We,yn),jn);if(!on)return(0,Y.jsx)(c.Z,{align:"center",className:Ie(He.noFormItem,ln),children:ze});if(ze!==void 0&&G()(ze)!=="object")return(0,Y.jsx)(c.Z,{align:"center",className:Ie(He.noFormItem,ln),children:ze.toString()});var dn={};if(k!==void 0&&(dn.disabled=k),l===!0){var gn,xn;if(dn.disabled=!0,ze!=null&&(gn=ze.props)!==null&&gn!==void 0&&gn.showCount&&(dn.showCount=void 0),f.includes(ze==null||(xn=ze.type)===null||xn===void 0?void 0:xn.displayName))return(0,Y.jsx)(c.Z,{align:"center",className:Ie(He.readOnlyItem,ln),children:vn!=null?vn:(0,Y.jsx)(Ee,{type:"secondary",children:"-"})})}return(0,Y.jsx)(h.Z.Item,q()(q()(q()({className:ln},Ln),{},{dependencies:typeof qe=="function"?qe(bn,sn):qe,name:Je(hn,on),rules:typeof _e=="function"?_e(bn,sn):_e},En),{},{children:ze?t.cloneElement(ze,dn):(0,Y.jsx)(Te,{})}),Nn)}}})),[!l&&oe!==!1&&{title:"",dataIndex:"del",render:function(ke,on,tn){var qe=Me[tn];if(qe){var _e=qe.name;return(0,Y.jsx)(h.Z.Item,{children:(0,Y.jsx)(o.ZP,{disabled:k||s&&Me.length===1,icon:(0,Y.jsx)(R.Z,{icon:A.Z}),onClick:C()(r()().mark(function un(){var rn;return r()().wrap(function(Ye){for(;;)switch(Ye.prev=Ye.next){case 0:return Ye.next=2,Sn(_e);case 2:rn=Ye.sent,rn!==!1&&(Pn(_e),Ke());case 4:case"end":return Ye.stop()}},un)})),type:"text"})})}}}]).filter(function(ye){return!!ye}),dataSource:Xe,expandable:{expandedRowKeys:Ze,childrenColumnName:Ne,onExpandedRowsChange:function(ke){Ue(ke)}},indentSize:Z,locale:{emptyText:pe},pagination:!1,rowHoverable:Qe,rowKey:function(ke){return x(ke[E])},size:"small"})}})):(0,Y.jsx)("div",{className:He.empty,children:pe})]})})},62719:function(Ce,ne,e){e.d(ne,{E:function(){return r.E},l:function(){return le}});var J=e(28562),r=e(58724),le=J.Z;le.CollapseList=r.E},37541:function(Ce,ne,e){e.d(ne,{d:function(){return W}});var J=e(27046),r=e(71795),le=e(5312),C=e(75271),F=e(90142),q=e(90228),n=e.n(q),O=e(87999),_=e.n(O),j=e(75614),ee=e(3772),G=e(13014),b=e(49505),R=e(142),h=e(34731),L="txt",o=function(D,p,V){var T=(0,r.r)(),B=T.isDarkMode,E=p.toLowerCase(),x=(0,C.useMemo)(function(){return h.Q.includes(E)?E:L},[E]),f=(0,ee.Fg)(),ie=(0,C.useMemo)(function(){if(V)return[(0,j.hu)(),(0,j.d0)(),(0,j.dY)(),(0,j.Eu)(),(0,j.p4)()]},[V]),v=(0,C.useMemo)(function(){return R.V8.hashStr(D)},[D]),m=(0,C.useMemo)(function(){return E==="md"?B?"catppuccin-mocha":"catppuccin-latte":B?"slack-dark":"slack-ochin"},[B,E]);return(0,b.ZP)([x,B?"d":"l",v].join("-"),_()(n()().mark(function M(){return n()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.prev=0,H.abrupt("return",(0,G.CZ)(D,{colorReplacements:{"slack-dark":{"#4ec9b0":f.yellow,"#569cd6":f.colorError,"#6a9955":f.gray,"#9cdcfe":f.colorText,"#b5cea8":f.purple10,"#c586c0":f.colorInfo,"#ce9178":f.colorSuccess,"#dcdcaa":f.colorWarning,"#e6e6e6":f.colorText},"slack-ochin":{"#002339":f.colorText,"#0991b6":f.colorError,"#174781":f.purple10,"#2f86d2":f.colorText,"#357b42":f.gray,"#7b30d0":f.colorInfo,"#7eb233":f.colorWarningTextActive,"#a44185":f.colorSuccess,"#dc3eb7":f.yellow11}},lang:x,theme:m,transformers:ie}));case 4:return H.prev=4,H.t0=H.catch(0),console.warn("shiki Highlight error:",H.t0),H.abrupt("return",D);case 8:case"end":return H.stop()}},M,null,[[0,4]])})))},U=e(53649),c=e.n(U),A,t,i,y=(0,ee.kc)(function(z){var D=z.css,p=z.token,V=z.cx,T=z.prefixCls,B=z.stylish,E="".concat(T,"-highlighter");return{loading:V(B.blur,D(A||(A=c()([`
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
      `])),p.fontFamilyCode,p.colorTextTertiary,p.borderRadius)),shiki:V("".concat(E,"-shiki"),D(t||(t=c()([`
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
      `])),p.colorFillTertiary,p.colorWarningBg,p.colorErrorBg,p.colorFillTertiary,p.colorBorderSecondary,p.borderRadius,p.colorErrorBg,p.colorErrorText,p.colorSuccessBg,p.colorSuccessText)),unshiki:D(i||(i=c()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),p.colorTextDescription)}}),S=e(52676),W=(0,C.memo)(function(z){var D=z.children,p=z.language,V=z.className,T=z.style,B=y(),E=B.styles,x=B.cx,f=(0,r.r)(),ie=f.isDarkMode,v=o(D.trim(),p,ie),m=v.data,M=v.isLoading;return(0,S.jsxs)(S.Fragment,{children:[M||!m?(0,S.jsx)("div",{className:x(E.unshiki,V),style:T,children:(0,S.jsx)("pre",{children:(0,S.jsx)("div",{children:D.trim()})})}):(0,S.jsx)("div",{className:x(E.shiki,V),dangerouslySetInnerHTML:{__html:m},style:T}),M&&(0,S.jsx)(F.D,{align:"center",className:E.loading,gap:8,horizontal:!0,justify:"center",children:(0,S.jsx)(J.Z,{icon:le.Z,spin:!0})})]})})},22435:function(Ce,ne,e){e.d(ne,{EL:function(){return x},oP:function(){return ie}});var J=e(26068),r=e.n(J),le=e(67825),C=e.n(le),F=e(76417),q=e(92946),n=e(43728),O=e(75271),_=e(48305),j=e.n(_),ee=e(17394),G=e(98721),b=e(97601),R=e(68537),h=e(90142),L=e(34731),o=e(37541),U=e(53649),c=e.n(U),A=e(3772),t,i,y,S,W,z,D,p,V=(0,A.kc)(function(v,m){var M=v.token,re=v.css,H=v.cx,me=v.prefixCls,ve=v.stylish,je="".concat(me,"-highlighter"),Y="".concat(je,"-hover-btn"),Oe="".concat(je,"-hover-lang"),be=re(t||(t=c()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),m==="block"?M.colorFillTertiary:"transparent",m==="block"?"transparent":M.colorBorder,m==="block"?M.colorFillTertiary:M.colorFillQuaternary);return{button:H(Y,re(i||(i=c()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),m==="pure"?0:"12px",m==="pure"?0:"12px")),container:H(je,m!=="pure"&&be,re(y||(y=c()([`
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
        `])),M.borderRadius,M.motionEaseOut,Y,Oe,m==="pure"?0:"16px")),header:re(S||(S=c()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),M.colorFillQuaternary),lang:H(Oe,ve.blur,re(W||(W=c()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),M.fontFamilyCode,M.colorTextSecondary)),nowrap:re(z||(z=c()([`
        code {
          text-wrap: nowrap !important;
        }
      `]))),scroller:re(D||(D=c()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:re(p||(p=c()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),M.colorTextDescription,me,M.colorTextDescription)}}),T=e(52676),B=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],E=L.Q.map(function(v){return{label:v,value:v.toLowerCase()}}),x=(0,O.memo)(function(v){var m=v.children,M=v.language,re=M===void 0?"markdown":M,H=v.className,me=v.style,ve=v.allowChangeLanguage,je=ve===void 0?!1:ve,Y=v.fileName,Oe=v.icon,be=v.contentStyle,Fe=C()(v,B),Ee=(0,O.useState)(!0),Te=j()(Ee,2),se=Te[0],a=Te[1],u=(0,O.useState)(re||"markdown"),d=j()(u,2),P=d[0],te=d[1],$=V("block"),de=$.styles,ce=$.cx,xe=ce(de.container,H);return(0,T.jsxs)("div",r()(r()({className:xe,"data-code-type":"highlighter",style:me},Fe),{},{children:[(0,T.jsxs)(h.D,{align:"center",className:de.header,horizontal:!0,justify:"space-between",children:[(0,T.jsx)(ee.Z,{icon:se?b.Z:R.Z,onClick:function(){return a(!se)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),je&&!Y?(0,T.jsx)(G.default,{className:de.select,onSelect:te,options:E,size:"small",suffixIcon:!1,value:P.toLowerCase(),variant:"borderless"}):(0,T.jsxs)(h.D,{align:"center",className:de.select,gap:2,horizontal:!0,children:[Oe,(0,T.jsx)("span",{children:Y||P})]}),(0,T.jsx)(q.Z,{content:m,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,T.jsx)(o.d,{language:P==null?void 0:P.toLowerCase(),style:se?be:r()(r()({},be),{},{height:0,overflow:"hidden"}),children:m})]}))}),f=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap"],ie=(0,O.memo)(function(v){var m=v.fullFeatured,M=v.copyButtonSize,re=M===void 0?"site":M,H=v.children,me=v.language,ve=v.className,je=v.style,Y=v.copyable,Oe=Y===void 0?!0:Y,be=v.showLanguage,Fe=be===void 0?!0:be,Ee=v.type,Te=Ee===void 0?"block":Ee,se=v.spotlight,a=v.allowChangeLanguage,u=v.fileName,d=v.icon,P=v.contentStyle,te=v.wrap,$=C()(v,f),de=V(Te),ce=de.styles,xe=de.cx,pe=xe(ce.container,!te&&ce.nowrap,ve);return m?(0,T.jsx)(x,r()(r()({allowChangeLanguage:a,className:ve,contentStyle:P,fileName:u,icon:d,language:me,style:je},$),{},{children:H})):(0,T.jsxs)("div",r()(r()({className:pe,"data-code-type":"highlighter",style:je},$),{},{children:[se&&(0,T.jsx)(F.Z,{size:240}),Oe&&(0,T.jsx)(q.Z,{className:ce.button,content:H,placement:"left",size:re}),Fe&&me&&(0,T.jsx)(n.Z,{className:ce.lang,children:me.toLowerCase()}),(0,T.jsx)("div",{className:ce.scroller,children:(0,T.jsx)(o.d,{language:me==null?void 0:me.toLowerCase(),style:P,children:H})})]}))})},33985:function(Ce,ne,e){e.d(ne,{h:function(){return B},P:function(){return R.Pz}});var J=e(26068),r=e.n(J),le=e(48305),C=e.n(le),F=e(67825),q=e.n(F),n=e(17394),O=e(92946),_=e(38590),j=e(71795),ee=e(97601),G=e(68537),b=e(75271),R=e(2998),h=e(86590),L=e(4643),o=e(94729),U=e(53649),c=e.n(U),A=e(3772),t,i,y,S,W,z,D=(0,A.kc)(function(E,x){var f=E.token,ie=E.css,v=E.cx,m=E.prefixCls,M="".concat(m,"-json-viewer"),re=x==="block",H=ie(t||(t=c()([`
      background-color: `,`;

      &:hover {
        background-color: `,`;
      }
    `])),re?f.colorFillTertiary:"transparent",re?f.colorFillTertiary:f.colorFillQuaternary);return{container:v(M,x!=="pure"&&H,ie(i||(i=c()([`
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
        `])),f.borderRadius,f.motionEaseOut)),content:ie(y||(y=c()([`
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),x==="pure"?0:f.padding),header:ie(S||(S=c()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),f.colorFillQuaternary),title:ie(W||(W=c()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),f.margin),titleText:ie(z||(z=c()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),f.fontSize,m,f.colorTextDescription)}}),p=e(52676),V=["type","fullFeatured","title","icon","contentStyle","classNames","className","collapseStringMode","collapsed","dark","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],T=o.C.Text,B=function(x){var f=x.type,ie=f===void 0?"block":f,v=x.fullFeatured,m=v===void 0?!1:v,M=x.title,re=M===void 0?"json":M,H=x.icon,me=x.contentStyle,ve=x.classNames,je=x.className,Y=x.collapseStringMode,Oe=Y===void 0?"directly":Y,be=x.collapsed,Fe=be===void 0?2:be,Ee=x.dark,Te=x.displaySize,se=Te===void 0?"collapsed":Te,a=x.ignoreLargeArray,u=a===void 0?!1:a,d=x.matchesURL,P=d===void 0?!0:d,te=x.src,$=x.theme,de=$===void 0?"default":$,ce=x.style,xe=q()(x,V),pe=(0,j.r)(),Se=pe.isDarkMode,ge=D(m?"block":ie),k=ge.styles,l=ge.cx,g=(0,b.useState)(!0),s=C()(g,2),N=s[0],I=s[1],K=(0,b.useMemo)(function(){return(0,R.Pz)(te)},[te]),X=(0,p.jsx)(R.ZP,r()({collapseStringMode:Oe,collapsed:Fe,dark:Ee!=null?Ee:Se,displaySize:se,ignoreLargeArray:u,matchesURL:P,src:te,theme:de},xe));return(0,p.jsxs)(_.Z,{className:l(k.container,je),style:ce,vertical:!0,children:[m&&(0,p.jsxs)(_.Z,{align:"center",className:l(k.header,ve==null?void 0:ve.header),justify:"space-between",children:[(0,p.jsx)(n.Z,{icon:N?ee.Z:G.Z,onClick:function(){return I(!N)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),(0,p.jsxs)(_.Z,{align:"center",className:k.title,flex:1,gap:2,justify:"center",title:re,children:[H,(0,p.jsx)(_.Z,{className:k.titleText,children:(0,p.jsx)(T,{ellipsis:!0,children:re})})]}),(0,p.jsx)(O.Z,{content:K,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,p.jsx)(_.Z,{className:l(k.content,ve==null?void 0:ve.content),flex:1,style:N?me:r()(r()({},me),{},{height:0,maxHeight:0,padding:0,overflow:"hidden"}),children:X})]})}},40305:function(Ce,ne,e){e.d(ne,{T:function(){return ge}});var J=e(26068),r=e.n(J),le=e(67825),C=e.n(le),F=e(75271),q=e(87902),n=e(52676),O=["to","children"],_=function(l){var g=l.to,s=l.children,N=C()(l,O);return(0,n.jsx)("a",r()(r()({href:"#".concat(g)},N),{},{children:s}))},j=(0,F.createContext)({loading:!1,Link:_}),ee=["to","Link","children"],G=function(l){var g=l.to,s=l.Link,N=l.children,I=C()(l,ee);return s?(0,n.jsx)(s,r()(r()({to:g},I),{},{children:N})):(0,n.jsx)("a",r()(r()({href:"#".concat(g)},I),{},{children:N}))},b=function(l){var g=(0,F.useContext)(j),s=g.Link,N=g.breadcrumb;(0,F.useEffect)(function(){var K;N==null||(K=N.setItems)===null||K===void 0||K.call(N,l.items)},[N,l.items]);var I=(0,F.useCallback)(function(K,X,ae,ue){var oe,Q,w=K.href?K.href===((oe=ae.at(-1))===null||oe===void 0?void 0:oe.href):K.path===((Q=ae.at(-1))===null||Q===void 0?void 0:Q.path);if(w)return(0,n.jsx)("span",{children:K.title});var he=K.href?K.href:"/".concat(ue.join("/"));return(0,n.jsx)(G,{Link:s,to:he,children:K.title})},[s]);return(0,n.jsx)(q.Z,r()({itemRender:I},l))},R=e(10780),h=e(22622),L=e(91488),o=e(38590),U=e(53649),c=e.n(U),A=e(3772),t,i=(0,A.kc)(function(k){var l=k.css,g=k.token;return{root:l(t||(t=c()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),y=["className","children"],S={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},W=function(l){var g=l.className,s=l.children,N=C()(l,y),I=i(),K=I.styles,X=I.cx,ae=(0,F.useContext)(j),ue=ae.loading,oe=ae.breadcrumb,Q=ae.Link,w=ae.status,he=(0,F.useCallback)(function(){if(w){var Z;return(0,n.jsx)(R.ZP,{extra:(0,n.jsx)(Q,{to:oe==null||(Z=oe.items)===null||Z===void 0||(Z=Z[0])===null||Z===void 0?void 0:Z.path,children:(0,n.jsx)(h.ZP,{type:"primary",children:"Go Back"})}),status:w,subTitle:S[w],title:w})}return s},[w,s,Q,oe==null?void 0:oe.items]);return ue?(0,n.jsx)(L.Z,{active:!0,className:X(K.root,g)}):(0,n.jsx)(o.Z,r()(r()({className:X(K.root,g),gap:20,vertical:!0},N),{},{children:he()}))},z=function(){return(0,n.jsx)(n.Fragment,{})},D=e(48305),p=e.n(D),V=e(335),T=e.n(V),B=e(1718),E=e(12644),x=e(82227),f=e(46119),ie=e(94729),v=e(79214),m=["shape","size","src"],M=function(l){if(typeof l=="number")return l;switch(l){case"small":return 40;case"large":return 88;default:return 64}},re=function(l){var g=l.shape,s=g===void 0?"square":g,N=l.size,I=l.src,K=C()(l,m),X=(0,F.useMemo)(function(){return M(N)},[N]);return(0,n.jsx)(v.C,r()({shape:s,size:X,src:I},K))},H,me,ve,je,Y,Oe,be,Fe,Ee,Te=(0,A.kc)(function(k,l){var g=k.css,s=k.token,N=k.prefixCls,I=l.bordered,K=I===void 0?!1:I,X=l.divider,ae=X===void 0?!0:X;return{root:K?g(H||(H=c()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),s.marginXS,s.padding,s.colorBgBase,s.borderRadius,s.boxShadowTertiary):g(me||(me=c()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),s.paddingXS,s.marginXS,ae&&g(ve||(ve=c()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),s.paddingLG,s.colorSplit)),icon:g(je||(je=c()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),N,N,s.colorPrimary,N),titleBox:g(Y||(Y=c()([`
        margin-bottom: `,`px;
      `])),s.marginSM),subTitle:g(Oe||(Oe=c()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),s.marginXXS,N,s.fontSize,s.colorTextSecondary),title:g(be||(be=c()([`
        font-size: `,`px;
        font-weight: 700;
      `])),s.fontSizeHeading5),descriptions:g(Fe||(Fe=c()([`
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
      `])),s.marginXXS,s.fontSize,s.colorTextSecondary,N,N,s.fontSize,N,s.fontSize,s.colorTextSecondary),rightButtons:g(Ee||(Ee=c()([`
        justify-content: flex-end;
      `])))}}),se=["className","classNames","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],a=ie.C.Paragraph,u=function(l){var g=l.className,s=l.classNames,N=l.icon,I=l.title,K=l.titleRender,X=l.subTitle,ae=l.status,ue=l.descriptions,oe=ue===void 0?[]:ue,Q=l.descriptionsRender,w=l.extraContent,he=w===void 0?{}:w,Z=l.extraContentRender,fe=l.bordered,Ne=l.divider,Ae=C()(l,se),Qe=Te({bordered:fe,divider:Ne}),Le=Qe.styles,Be=Qe.cx,Ie=(0,F.useMemo)(function(){return!N||typeof N=="string"?{src:N,size:X?"large":"default"}:(X&&N.size===void 0&&(N.size="large"),N)},[N,X]),He=(0,F.useMemo)(function(){var Ze=(0,n.jsx)("span",{className:Be(Le.title,s==null?void 0:s.title),children:I});return K?K(Ze):Ze},[s==null?void 0:s.title,Be,Le.title,I,K]),$e=(0,F.useMemo)(function(){var Ze=[],Ue=T()(oe.filter(function(nn){return!!nn}).entries()),Ge;try{for(Ue.s();!(Ge=Ue.n()).done;){var an=p()(Ge.value,2),Je=an[0],we=an[1],en=we.icon,Xe=we.text;(ae||Je>=1)&&Ze.push((0,n.jsx)(x.Z,{dashed:!1,type:"vertical"},"divider-".concat(Je))),Ze.push((0,n.jsxs)(o.Z,{align:"center",gap:4,children:[en&&(0,n.jsx)(B.Z,{title:en.tooltip,children:en.content}),(0,n.jsx)("span",{children:Xe})]},"desc-".concat(Je)))}}catch(nn){Ue.e(nn)}finally{Ue.f()}return Q?Q(Ze):Ze},[oe,Q,ae]),Pe=(0,F.useMemo)(function(){if(!he&&!Z)return null;var Ze=(0,n.jsx)(E.h,r()({className:Le.rightButtons},he));return Z?Z(Ze):Ze},[he,Z,Le.rightButtons]),Re=(0,F.useContext)(j),Ve=Re.loading,Ke=Re.status;return Ve?(0,n.jsxs)(o.Z,{className:Be(Le.root,g),gap:20,children:[(0,n.jsx)(o.Z,{children:(0,n.jsx)(L.Z.Avatar,{active:!0,className:Le.icon,shape:Ie==null?void 0:Ie.shape,size:M(Ie==null?void 0:Ie.size)})}),(0,n.jsxs)(o.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,n.jsxs)("div",{className:Le.titleBox,children:[(0,n.jsx)(L.Z.Input,{active:!0,size:25}),X&&(0,n.jsx)("div",{className:Be(Le.subTitle,g),children:(0,n.jsx)(L.Z.Input,{active:!0,size:18})})]}),(0,n.jsx)(L.Z.Input,{active:!0,size:18})]}),(0,n.jsx)(o.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,n.jsx)(L.Z.Button,{active:!0})})]}):Ke?null:(0,n.jsxs)(o.Z,r()(r()({className:Be(Le.root,g),gap:20},Ae),{},{children:[Ie&&(0,n.jsx)(o.Z,{children:(0,n.jsx)(re,r()({className:Le.icon},Ie))}),(0,n.jsxs)(o.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,n.jsxs)(o.Z,{className:Be(Le.titleBox,s==null?void 0:s.titleWrapper),vertical:!0,children:[He,X&&(0,n.jsx)(a,{className:Be(Le.subTitle,s==null?void 0:s.subTitle),ellipsis:{rows:2},children:X})]}),(0,n.jsxs)(o.Z,{align:"center",className:Be(Le.descriptions,s==null?void 0:s.descriptions),gap:4,children:[ae&&(0,n.jsx)(f.q,r()({},ae)),$e]})]}),(0,n.jsx)(o.Z,{align:"center",className:s==null?void 0:s.extraContent,flex:"1",justify:"flex-end",children:Pe})]}))},d=e(94456),P,te=(0,A.kc)(function(k){var l=k.css,g=k.token;return{root:l(P||(P=c()([`
      width: inherit;
      height: 100%;
      min-height: inherit;
      padding: `,"px ","px ",`px;
    `])),g.padding,g.paddingLG,g.paddingXL)}}),$=["loading","className","children","Link","status","gap"],de=function(l){var g=(0,d.nB)(),s=l.loading,N=l.className,I=l.children,K=l.Link,X=K===void 0?g||_:K,ae=l.status,ue=l.gap,oe=ue===void 0?16:ue,Q=C()(l,$),w=te(Q),he=w.styles,Z=w.cx,fe=(0,F.useState)([]),Ne=p()(fe,2),Ae=Ne[0],Qe=Ne[1];return(0,n.jsx)(o.Z,r()(r()({className:Z(he.root,N),gap:oe,vertical:!0},Q),{},{children:(0,n.jsx)(j.Provider,{value:{loading:s,Link:X,breadcrumb:{items:Ae,setItems:Qe},status:ae},children:I})}))},ce,xe=(0,A.kc)(function(k){var l=k.css,g=k.token;return{root:l(ce||(ce=c()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),g.fontFamily,g.fontWeightStrong,g.lineHeight,g.colorText)}}),pe=["className"],Se=function(l){var g=l.className,s=C()(l,pe),N=xe(),I=N.cx,K=N.styles;return(0,n.jsx)("h2",r()({className:I(K.root,g)},s))},ge=de;ge.Breadcrumb=b,ge.Title=Se,ge.Header=u,ge.Content=W,ge.Footer=z},86346:function(Ce,ne,e){e.d(ne,{Q:function(){return Te}});var J=e(26068),r=e.n(J),le=e(67825),C=e.n(le),F=e(75271),q=e(53649),n=e.n(q),O=e(3772),_,j,ee,G,b,R=(0,O.kc)(function(se){var a=se.css,u=se.token,d=se.prefixCls;return{root:a(_||(_=n()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),u.fontFamily,u.colorText,u.colorBgContainer,u.borderRadius*2,u.boxShadowTertiary),bordered:a(j||(j=n()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),u.colorBorder),hoverable:a(ee||(ee=n()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),u.motionDurationMid,u.motionDurationMid,u.boxShadow),text:a(G||(G=n()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),u.colorTextSecondary),error:a(b||(b=n()([`
      color: `,`;
    `])),u.colorErrorText)}}),h=e(52676),L=["className","bordered","hoverable","children"],o=function(a){var u=a.className,d=a.bordered,P=d===void 0?!1:d,te=a.hoverable,$=te===void 0?!0:te,de=a.children,ce=C()(a,L),xe=R(),pe=xe.cx,Se=xe.styles;return(0,h.jsx)("div",r()(r()({className:pe(Se.root,P&&Se.bordered,$&&Se.hoverable,u)},ce),{},{children:de}))},U=e(38590),c,A=(0,O.kc)(function(se){var a=se.css,u=se.token;return{root:a(c||(c=n()([`
      padding: 12px 24px 20px;
    `])))}}),t=["className","children"],i=function(a){var u=a.className,d=a.children,P=C()(a,t),te=A(),$=te.styles,de=te.cx;return(0,h.jsx)(U.Z,r()(r()({className:de($.root,u),gap:20,vertical:!0},P),{},{children:d}))},y=e(26345),S,W=(0,O.kc)(function(se){var a=se.css,u=se.token,d=se.prefixCls,P=70;return{root:a(S||(S=n()([`
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
    `])),d,d,d,d,P,d,P)}}),z=["className","colon","column","size"],D=function(a){var u=a.className,d=a.colon,P=d===void 0?!1:d,te=a.column,$=te===void 0?2:te,de=a.size,ce=de===void 0?"small":de,xe=C()(a,z),pe=W(),Se=pe.cx,ge=pe.styles;return(0,h.jsx)(y.Z,r()({className:Se(ge.root,u),colon:P,column:$,size:ce},xe))},p=e(27046),V=e(79214),T=e(159),B=e(22622),E=e(250),x=e(94729),f,ie,v,m,M,re,H,me,ve,je=(0,O.kc)(function(se,a){var u=se.css,d=se.token,P=se.prefixCls,te=a.divider,$=te===void 0?!0:te,de=a.iconBg,ce=de===void 0?!0:de;return{root:u(f||(f=n()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),$?20:0,$&&u(ie||(ie=n()([`
          border-bottom: 1px solid `,`;
        `])),d.colorSplit)),icon:u(v||(v=n()([`
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
      `])),P,d.colorPrimary,ce&&u(m||(m=n()([`
            background-color: `,`;
          `])),d.colorBgLayout),P),titleBox:u(M||(M=n()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),d.marginXXS),title:u(re||(re=n()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),d.fontWeightStrong),description:u(H||(H=n()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),P,d.colorTextSecondary),extra:u(me||(me=n()([`
        margin-top: -4px;
      `]))),rightButtons:u(ve||(ve=n()([`
        justify-content: flex-end;
      `])))}}),Y=["className","icon","title","description","extra","divider"],Oe=["className","shape","size"],be=["children"],Fe=x.C.Paragraph,Ee=function(a){var u=a.className,d=a.icon,P=a.title,te=a.description,$=a.extra,de=a.divider,ce=C()(a,Y),xe=je({divider:de,iconBg:!(d!=null&&d.src)}),pe=xe.styles,Se=xe.cx,ge=d||{},k=ge.className,l=ge.shape,g=l===void 0?"square":l,s=ge.size,N=s===void 0?72:s,I=C()(ge,Oe),K=$||{},X=K.children,ae=C()(K,be);return(0,h.jsxs)(U.Z,r()(r()({className:Se(pe.root,u),gap:20},ce),{},{children:[d&&(0,h.jsx)(U.Z,{children:(0,h.jsx)(V.C,r()({className:Se(pe.icon,k),shape:g,size:N},I))}),(0,h.jsxs)(U.Z,{flex:"1",vertical:!0,children:[(0,h.jsxs)(U.Z,{className:pe.titleBox,gap:4,children:[(0,h.jsx)("div",{className:pe.title,children:P}),$&&(0,h.jsx)(U.Z,{align:"flex-start",className:pe.extra,justify:"flex-end",onClick:function(oe){return oe.stopPropagation()},children:(0,h.jsx)(T.Z,r()(r()({},ae),{},{children:X||(0,h.jsx)(B.ZP,{icon:(0,h.jsx)(p.Z,{icon:E.Z}),size:"small",type:"text"})}))})]}),te&&(0,h.jsx)(Fe,{className:pe.description,ellipsis:{rows:2},children:te})]})]}))},Te=o;Te.Header=Ee,Te.Content=i,Te.Descriptions=D},46119:function(Ce,ne,e){e.d(ne,{q:function(){return c}});var J=e(26068),r=e.n(J),le=e(67825),C=e.n(le),F=e(27046),q=e(62272),n=e(62701),O=e(1718),_=e(65933),j=e(75271),ee=e(53649),G=e.n(ee),b=e(3772),R,h,L=(0,b.kc)(function(A){var t=A.css,i=A.token,y=A.prefixCls;return{root:t(R||(R=G()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),y,y,y),tooltip:t(h||(h=G()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),i.colorTextTertiary)}},{hashPriority:"low"}),o=e(52676),U=["tooltip","className","status","text","color"],c=function(t){var i=t.tooltip,y=t.className,S=t.status,W=t.text,z=t.color,D=C()(t,U),p=L(),V=p.cx,T=p.styles;return(0,o.jsxs)(q.Z,r()(r()({className:V(T.root,y),size:"small"},D),{},{children:[(0,o.jsx)(n.Z,{status:S,text:W,color:z}),i&&(0,o.jsx)(O.Z,{className:T.tooltip,title:i,children:(0,o.jsx)(F.Z,{icon:_.Z})})]}))}},94729:function(Ce,ne,e){e.d(ne,{Z:function(){return o}});var J=e(26068),r=e.n(J),le=e(48305),C=e.n(le),F=e(67825),q=e.n(F),n=e(60399),O=e(1718),_=e(28026),j=e.n(_),ee=e(81792),G=e.n(ee),b=e(18342),R=e(75271),h=e(52676),L=["time","format","relativeTime","tooltip"];j().extend(G());var o=n.Z,U=function(t){return j()(t?new Date(t):new Date).fromNow()},c=function(t){var i,y=t.time,S=t.format,W=t.relativeTime,z=W===void 0?!0:W,D=t.tooltip,p=q()(t,L),V=(0,R.useState)(U(y)),T=C()(V,2),B=T[0],E=T[1],x=(0,R.useCallback)(function(m){var M=j()(),re=j()(m),H=M.diff(re);if(H>0&&H<60*60*1e3)return setInterval(function(){E(U(m))},60*1e3)},[]);(0,R.useEffect)(function(){var m;return z&&(m=x(new Date(y))),function(){m&&clearInterval(m)}},[z,x,y]),(0,R.useEffect)(function(){if(z){var m=U(y);m!==B&&(E(m),x(new Date(y)))}},[y,z,B,x]);var f=j()(y).format(S||"YYYY-MM-DD HH:mm:ss"),ie=z?B:f,v=(i=D==null?void 0:D.title)!==null&&i!==void 0?i:z?f:void 0;return v&&(0,b.Z)(p,"ellipsis.tooltip.title",void 0),(0,h.jsx)(O.Z,r()(r()({},D||{}),{},{title:v,children:(0,h.jsx)(o.Text,r()(r()({},p),{},{children:ie}))}))};o.Time=c,ne.C=o},34731:function(Ce,ne,e){e.d(ne,{Q:function(){return J}});var J=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"]},82846:function(Ce,ne,e){e.d(ne,{J:function(){return b}});var J=e(48305),r=e.n(J),le=e(67825),C=e.n(le),F=e(75271),q=function(){try{var L,o;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((L=window)===null||L===void 0?void 0:L.SpeechRecognition)||((o=window)===null||o===void 0?void 0:o.webkitSpeechRecognition)}catch(U){}},n=function(){try{var L,o;return(globalThis==null?void 0:globalThis.speechSynthesis)||((L=window)===null||L===void 0?void 0:L.speechSynthesis)||((o=window)===null||o===void 0?void 0:o.webkitSpeechSynthesis)}catch(U){}},O=function(){try{var L,o;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((L=window)===null||L===void 0?void 0:L.SpeechSynthesisUtterance)||((o=window)===null||o===void 0?void 0:o.webkitSpeechSynthesisUtterance)}catch(U){}},_=q(),j=n(),ee=O(),G=["voice","rate","pitch"],b=function(L,o){var U=o.voice,c=o.rate,A=o.pitch,t=C()(o,G),i=(0,F.useState)(j==null?void 0:j.getVoices()),y=r()(i,2),S=y[0],W=y[1],z=(0,F.useState)(L),D=r()(z,2),p=D[0],V=D[1],T=(0,F.useState)(!1),B=r()(T,2),E=B[0],x=B[1],f=(0,F.useMemo)(function(){if(ee){var m=new ee(p);return m.voice=S.find(function(M){return M.name===U}),m.onstart=function(){return x(!0)},m.onend=function(){return x(!1)},A&&(m.pitch=A*10),c&&(m.rate=c*10),m}},[p,S,c,A,U]);(0,F.useEffect)(function(){j&&(j.onvoiceschanged=function(){W(j==null?void 0:j.getVoices())},j.onstart=function(){return x(!0)},j.onend=function(){return x(!1)})},[]);var ie=(0,F.useCallback)(function(){var m;t==null||(m=t.onStart)===null||m===void 0||m.call(t),j==null||j.speak(f)},[t,f]),v=(0,F.useCallback)(function(){var m,M;t==null||(m=t.onStop)===null||m===void 0||m.call(t),(M=speechSynthesis)===null||M===void 0||M.cancel(),x(!1)},[t]);return{isLoading:E,setText:V,start:ie,stop:v}},R=null}}]);
