"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[40119],{12644:function(Pe,X,e){e.d(X,{h:function(){return S}});var H=e(57724),d=e.n(H),re=e(26068),A=e.n(re),N=e(67825),ee=e.n(N),r=e(62272),w=e(22622),Y=e(159),T=e(75271),oe=e(52676),Q=["items","onClick","size"],m=["key","label"],I=["key","label"],S=function(l){var R=l.items,p=R===void 0?[]:R,U=l.onClick,v=U===void 0?function(){}:U,g=l.size,k=ee()(l,Q);if(p.length<=2)return(0,oe.jsx)(r.Z,A()(A()({align:"end",size:12},k),{},{children:p.map(function(E){var f=E.key,t=E.label,i=ee()(E,m);return(0,oe.jsx)(w.ZP,A()(A()({onClick:function(a){return v(f,a)},size:g},i),{},{children:t}),f)})}));var M=d()(p),V=M[0],J=M.slice(1),W=V,P=W.key,$=W.label,h=ee()(W,I);return(0,oe.jsx)(Y.Z.Button,A()(A()(A()({onClick:function(f){return v(P,f)}},h),{},{menu:{onClick:function(f){var t=f.key,i=f.domEvent;return v(t,i)},items:J},overlayStyle:{minWidth:100},size:g},k),{},{children:$}),P)}},79213:function(Pe,X,e){e.d(X,{w:function(){return R}});var H=e(26068),d=e.n(H),re=e(67825),A=e.n(re),N=e(62250),ee=e(17394),r=e(97601),w=e(68537),Y=e(75271),T=e(53649),oe=e.n(T),Q=e(3772),m,I=(0,Q.kc)(function(p,U){var v=p.css,g=p.token,k=p.prefixCls,M=U.collapsible;return{root:v(m||(m=oe()([`
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
      `])),g.margin,k,g.paddingSM,g.paddingSM,g.paddingSM,M===!1?g.paddingSM:0,g.fontSize,g.padding,g.padding,g.paddingSM,g.paddingSM,k,g.paddingXXS,g.colorBgContainer,g.paddingXXS,g.padding)}}),S=e(52676),L=["className","variant","collapsible","expandIcon"],l=N.Z.Group,R=function(U){var v=U.className,g=U.variant,k=U.collapsible,M=U.expandIcon,V=M===void 0?function(h){return(0,S.jsx)(ee.Z,{icon:h.isActive?r.Z:w.Z,size:{blockSize:24,fontSize:14,strokeWidth:3}})}:M,J=A()(U,L),W=I({collapsible:k}),P=W.styles,$=W.cx;return(0,S.jsx)(l,d()({className:$(P.root,v),collapsible:g==="pure"?!1:k,expandIcon:V,variant:g},J))}},94456:function(Pe,X,e){e.d(X,{E_:function(){return r},iV:function(){return w},nc:function(){return T},nB:function(){return oe}});var H=e(75271),d=e(56264),re="https://unpkg.com",A="https://registry.npmmirror.com",N=function(m){var I=m.pkg,S=m.version,L=S===void 0?"latest":S,l=m.path,R=m.proxy;switch(R){case"unpkg":return(0,d.Z)(re,"".concat(I,"@").concat(L),l);default:return(0,d.Z)(A,I,L,"files",l)}},ee=e(52676),r=(0,H.createContext)(null),w=(0,H.memo)(function(Q){var m=Q.children,I=Q.config;return(0,ee.jsx)(r.Provider,{value:I,children:m})}),Y=function(m){var I=m.pkg,S=m.version,L=m.path;return N({path:L,pkg:I,proxy:"aliyun",version:S})},T=function(){var m=(0,H.useContext)(r);return m?(m==null?void 0:m.proxy)!=="custom"?function(I){var S=I.pkg,L=I.version,l=I.path;return N({path:l,pkg:S,proxy:m.proxy,version:L})}:(m==null?void 0:m.customCdnFn)||Y:Y},oe=function(){var m=(0,H.useContext)(r);return m==null?void 0:m.Link}},26345:function(Pe,X,e){e.d(X,{w:function(){return p},Z:function(){return U}});var H=e(26068),d=e.n(H),re=e(67825),A=e.n(re),N=e(85743),ee=e(75271),r=e(53649),w=e.n(r),Y=e(3772),T,oe,Q,m,I,S,L=(0,Y.kc)(function(v,g){var k=v.css,M=v.token,V=v.prefixCls,J=g.borderedBottom,W=g.borderedBottomDashed,P=g.borderedTop,$=g.borderedTopDashed,h=g.size,E={small:"".concat(M.paddingXS,"px ").concat(M.padding,"px"),middle:"".concat(M.padding,"px ").concat(M.paddingLG,"px"),default:"".concat(M.paddingSM,"px ").concat(M.paddingLG,"px")},f=J||W;return{custom:k(T||(T=w()([`
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
      `])),V,V,f&&h&&k(oe||(oe=w()([`
          .`,"-descriptions-item-label, .",`-descriptions-item-content {
            padding: `,`;
          }
          .`,`-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `])),V,V,E[h],V),J&&k(Q||(Q=w()([`
          .`,`-descriptions-item {
            border-bottom: 1px solid `,`;
          }
        `])),V,M.colorSplit),W&&k(m||(m=w()([`
          .`,`-descriptions-item {
            border-bottom: 1px dashed `,`;
          }
        `])),V,M.colorSplit),P&&k(I||(I=w()([`
          .`,`-descriptions-item {
            border-top: 1px solid `,`;
          }
        `])),V,M.colorSplit),$&&k(S||(S=w()([`
          .`,`-descriptions-item {
            border-top: 1px dashed `,`;
          }
        `])),V,M.colorSplit))}},{hashPriority:"low"}),l=e(52676),R=["className","borderedBottom","borderedBottomDashed","borderedTop","borderedTopDashed"],p=function(g){var k=g.className,M=g.borderedBottom,V=g.borderedBottomDashed,J=g.borderedTop,W=g.borderedTopDashed,P=A()(g,R),$=L({borderedBottom:M,borderedBottomDashed:V,borderedTop:J,borderedTopDashed:W,size:P.size}),h=$.styles,E=$.cx;return(0,l.jsx)(N.Z,d()(d()({},P),{},{className:E(h.custom,k)}))},U=p;p.Item=N.Z.Item},82227:function(Pe,X,e){e.d(X,{i:function(){return p},Z:function(){return U}});var H=e(26068),d=e.n(H),re=e(48305),A=e.n(re),N=e(67825),ee=e.n(N),r=e(30657),w=e(19728),Y=e(13761),T=e(62272),oe=e(75271),Q=e(53649),m=e.n(Q),I=e(3772),S,L=(0,I.kc)(function(v){var g=v.css,k=v.token;return{custom:g(S||(S=m()([`
        cursor: pointer;
        color: `,`;
        &:hover {
          color: `,`;
        }
      `])),k.colorPrimary,k.colorPrimaryHover)}},{hashPriority:"low"}),l=e(52676),R=["mode","content","defaultOpen","iconPlacement","openIcon","closeIcon","type"],p=function(g){var k=g.mode,M=k===void 0?"line":k,V=g.content,J=g.defaultOpen,W=g.iconPlacement,P=W===void 0?"left":W,$=g.openIcon,h=g.closeIcon,E=g.type,f=ee()(g,R),t=L({}),i=t.styles,s=M==="expanded",a=(0,oe.useState)(J),o=A()(a,2),n=o[0],ae=o[1],j=h||(0,l.jsx)(r.Z,{}),ge=$||(0,l.jsx)(w.Z,{}),ce=s&&(0,l.jsx)("span",{children:n?j:ge});return M==="line"||E==="vertical"?(0,l.jsx)(Y.Z,d()({type:E},f)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Y.Z,d()(d()({type:E},f),{},{children:(0,l.jsx)("span",{className:s?i.custom:"",onClick:function(){ae(!n)},children:(0,l.jsxs)(T.Z,{size:6,children:[P!=="right"&&ce,(0,l.jsx)("span",{children:V}),P==="right"&&ce]})})})),s&&(0,l.jsx)("div",{style:{display:n?"block":"none"},children:g.children})]})},U=p},65784:function(Pe,X,e){e.d(X,{E:function(){return Oe}});var H=e(90228),d=e.n(H),re=e(87999),A=e.n(re),N=e(26068),ee=e.n(N),r=e(15558),w=e.n(r),Y=e(67825),T=e.n(Y),oe=e(3467),Q=e(27046),m=e(28562),I=e(1718),S=e(22622),L=e(37805),l=e(38590),R=e(14539),p=e(75271),U=e(94729),v=e(79213),g=e(335),k=e.n(g),M=e(82092),V=e.n(M),J=e(48305),W=e.n(J),P=e(54834),$="__YUNTI_FORM_COLLAPSE_LIST_FIELD_KEY_PATH",h=function(ue){return ue.join("-")},E=function(ue,G,me){var q,x=m.Z.useFormInstance(),F=(0,p.useState)([]),B=W()(F,2),te=B[0],se=B[1],fe=(0,p.useState)([]),ie=W()(fe,2),le=ie[0],ve=ie[1],de=(0,p.useCallback)(function(){return se(x.getFieldValue(ue))},[x,ue]),je=(q=(0,p.useMemo)(function(){return me.find(function(b){return!!b.name&&!b.noStyle})},[me]))===null||q===void 0?void 0:q.name,he=(0,p.useCallback)(function(b){if(!ue)return{dataSource:[],allExpandRowKeys:[]};var c=[],y=function K(C,Z,ne){var z=(0,P.Z)(C);return z||(z=V()({},$,[])),z[$]=[].concat(w()(ne),[Z]),z[G]&&Array.isArray(z[G])&&(c.push(h(z[$])),z[G]=z[G].map(function(_,be){return K(_,be,z[$])})),z};return{dataSource:(b==null?void 0:b.map(function(K,C){return y(K,C,[])}))||[],allExpandRowKeys:c}},[G,ue]),O=(0,p.useCallback)(function(b,c){var y=[],K=k()(b.entries()),C;try{for(K.s();!(C=K.n()).done;){var Z=W()(C.value,2),ne=Z[0],z=Z[1];ne===b.length-1?(y.push(z),c&&y.push(c)):y.push(z,G)}}catch(_){K.e(_)}finally{K.f()}return y},[G]),u=(0,p.useCallback)(function(b,c){var y=c[$];return{add:function(C,Z){var ne=O(y),z=[ue].concat(w()(ne),[G]),_=(0,P.Z)(x.getFieldValue(z))||[],be=Z!=null?Z:_.length;if(_.splice(be,0,C),x.setFieldValue(z,_),je){var ye=[].concat(w()(z),[be,je]);setTimeout(function(){x.focusField(ye)},200)}ve(w()(new Set([].concat(w()(le),[h(y)])))),de()},remove:function(C){if(y.length<=1){b.remove(C),de();return}var Z=[ue].concat(w()(O(y).slice(0,-1))),ne=(0,P.Z)(x.getFieldValue(Z))||[],z=[];Array.isArray(C)?z.push.apply(z,w()(C)):z.push(C);var _=ne.filter(function(be,ye){return!z.includes(ye)});x.setFieldValue(Z,_.length>0?_:void 0),de()},move:function(C,Z){if(y.length<=1)return b.move(C,Z);var ne=[ue].concat(w()(O(y).slice(0,-1))),z=(0,P.Z)(x.getFieldValue(ne))||[];if(C<0||Z<0||C>=z.length||Z>=z.length){console.warn(new Error("\u7D22\u5F15\u8D85\u51FA\u6570\u7EC4\u8303\u56F4"));return}var _=[z[Z],z[C]];z[C]=_[0],z[Z]=_[1],x.setFieldValue(ne,z),de()},update:function(){return de()}}},[G,le,je,x,O,ue,de]);return{values:te,updateValues:de,expandedRowKeys:le,setExpandedRowKeys:ve,fieldValuesToDataSource:he,getFieldPath:O,getFormListOperation:u,firstColumnFormItemName:je}},f=e(53649),t=e.n(f),i=e(3772),s,a,o,n,ae=(0,i.kc)(function(D){var ue=D.css,G=D.token,me=D.prefixCls;return{empty:ue(s||(s=t()([`
      padding: `,"px ",`px;
      color: `,`;
    `])),G.paddingXS,G.paddingSM,G.colorTextTertiary),list:ue(a||(a=t()([`
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
    `])),me,me,G.colorTextTertiary,me,G.marginXS,me),noFormItem:ue(o||(o=t()([`
      height: `,`px;
      color: `,`;
    `])),G.controlHeight,G.colorTextTertiary),readOnlyItem:ue(n||(n=t()([`
      height: `,`px;
      color: `,`;
    `])),G.controlHeight,G.colorTextBase)}}),j=e(52676),ge=["collapsible","extra","expandIcon","icon","title","variant","defaultActive","empty","columns","disabled","readOnly","addOneFieldDefault","disableRemoveWhenOneField","maxFileds","name","addParams","className","onRemove","fieldRemoveButton","style","defaultExpandAllRows","indentSize","childrenColumnName","rowHoverable"],ce=["label","name","render","dependencies","rules","align","ellipsis","fixed","responsive","shouldCellUpdate","width","className"],Se=["key"],ke=U.C.Text,Oe=(0,p.memo)(function(D){var ue=D.collapsible,G=D.extra,me=D.expandIcon,q=D.icon,x=D.title,F=D.variant,B=D.defaultActive,te=D.empty,se=te===void 0?"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0 ":te,fe=D.columns,ie=fe===void 0?[]:fe,le=D.disabled,ve=D.readOnly,de=D.addOneFieldDefault,je=D.disableRemoveWhenOneField,he=D.maxFileds,O=D.name,u=D.addParams,b=D.className,c=D.onRemove,y=D.fieldRemoveButton,K=y===void 0?!0:y,C=D.style,Z=D.defaultExpandAllRows,ne=D.indentSize,z=ne===void 0?16:ne,_=D.childrenColumnName,be=_===void 0?"children":_,ye=D.rowHoverable,Me=ye===void 0?!0:ye,we=T()(D,ge),Ue=ae(),Fe=Ue.cx,Ie=Ue.styles,Ae=(0,p.useRef)(),pe=m.Z.useFormInstance(),Te=E(O,be,ie),Le=Te.values,Be=Te.updateValues,ot=Te.expandedRowKeys,Je=Te.setExpandedRowKeys,Ze=Te.fieldValuesToDataSource,at=Te.getFormListOperation,Xe=Te.getFieldPath,De=Te.firstColumnFormItemName,Ve=(0,p.useMemo)(function(){return Ze(Le)},[Ze,Le]),Ye=Ve.dataSource;(0,p.useEffect)(function(){Be()},[Be,ve]),(0,p.useEffect)(function(){var Ee=pe.getFieldValue(O),Ce=Ze(Ee),Ne=Ce.allExpandRowKeys;Z&&Je(Ne)},[Z,Ze,pe,O,Je]);var We=(0,p.useCallback)(function(){if(!u)return[];var Ee=typeof u=="function"?u():u;return[Ee.defaultValue,Ee.insertIndex]},[u]),$e=(0,p.useCallback)(function(Ee){var Ce=pe.getFieldValue([O,Ee]);return c==null?void 0:c(Ce)},[pe,O,c]);return(0,p.useEffect)(function(){var Ee;if(de&&(!(pe!=null&&pe.getFieldValue(O))||(pe==null||(Ee=pe.getFieldValue(O))===null||Ee===void 0?void 0:Ee.length)===0)){var Ce;(Ce=Ae.current)===null||Ce===void 0||Ce.call.apply(Ce,[Ae].concat(w()(We()))),setTimeout(function(){pe.focusField([O,0,De])},200)}},[de,We,pe,O,De,Be]),(0,j.jsx)(v.w,{extra:G===void 0?O&&!ve&&(0,j.jsx)(I.Z,{title:he&&"\u6700\u591A\u6DFB\u52A0 ".concat(he," \u9879"),children:(0,j.jsx)(S.ZP,{disabled:le||!!(he&&(Le==null?void 0:Le.length)===he),icon:(0,j.jsx)(oe.Z,{}),onClick:function(Ce){var Ne;Ce.stopPropagation(),(Ne=Ae.current)===null||Ne===void 0||Ne.call.apply(Ne,[Ae].concat(w()(We()))),setTimeout(function(){pe.focusField([O,pe.getFieldValue(O).length-1,De])},200)},size:"small",type:"text"})}):G,className:b,collapsible:ue,expandIcon:me,icon:q,title:x,variant:F,defaultActive:B,style:C,children:O?(0,j.jsx)(m.Z.List,ee()(ee()({name:O},we),{},{children:function(Ce,Ne){var Ge=Ne.add,vt=Ne.remove;return Ae.current=function(xe,ze){Ge(xe,ze),Be()},(0,j.jsx)(L.Z,{className:Ie.list,columns:[].concat(w()(ie.map(function(xe){var ze=xe.label,qe=xe.name,Qe=xe.render,Ke=xe.dependencies,He=xe.rules,rt=xe.align,_e=xe.ellipsis,ct=xe.fixed,Re=xe.responsive,ht=xe.shouldCellUpdate,bt=xe.width,et=xe.className,ut=T()(xe,ce);return{title:ze,dataIndex:qe,align:rt,ellipsis:_e,fixed:ct,responsive:Re,shouldCellUpdate:ht,width:bt,render:function(st,pt,tt){var it=Ce[tt]||{},lt=it.name,dt=pt[$],gt=[O].concat(w()(Xe(dt))),ft=gt.slice(0,-1),yt=it.key,xt=T()(it,Se),nt=Qe==null?void 0:Qe(lt!=null?lt:dt.at(-1),tt,at(Ne,pt),gt);if(!nt&&!ut.noStyle)return(0,j.jsx)(l.Z,{align:"center",className:Fe(Ie.noFormItem,et),children:"\u65E0\u9700\u8BBE\u7F6E"});if(!qe)return(0,j.jsx)(l.Z,{align:"center",className:Fe(Ie.noFormItem,et),children:nt});var mt={};return le!==void 0&&(mt.disabled=le),ve===!0?(0,j.jsx)(l.Z,{align:"center",className:Fe(Ie.readOnlyItem,et),children:st!=null?st:(0,j.jsx)(ke,{type:"secondary",children:"-"})}):(0,j.jsx)(m.Z.Item,ee()(ee()(ee()({className:et},xt),{},{dependencies:typeof Ke=="function"?Ke(ft,tt):Ke,name:Xe(dt,qe),rules:typeof He=="function"?He(ft,tt):He},ut),{},{children:nt&&p.cloneElement(nt,mt)}),yt)}}})),[!ve&&K!==!1&&{title:"",dataIndex:"del",render:function(ze,qe,Qe){var Ke=Ce[Qe];if(Ke){var He=Ke.name;return(0,j.jsx)(m.Z.Item,{children:(0,j.jsx)(S.ZP,{disabled:le||je&&Ce.length===1,icon:(0,j.jsx)(Q.Z,{icon:R.Z}),onClick:A()(d()().mark(function rt(){var _e;return d()().wrap(function(Re){for(;;)switch(Re.prev=Re.next){case 0:return Re.next=2,$e(He);case 2:_e=Re.sent,_e!==!1&&(vt(He),Be());case 4:case"end":return Re.stop()}},rt)})),type:"text"})})}}}]).filter(function(xe){return!!xe}),dataSource:Ye,expandable:{expandedRowKeys:ot,childrenColumnName:be,onExpandedRowsChange:function(ze){Je(ze)}},indentSize:z,locale:{emptyText:se},pagination:!1,rowHoverable:Me,rowKey:function(ze){return h(ze[$])},size:"small"})}})):(0,j.jsx)("div",{className:Ie.empty,children:se})})})},62719:function(Pe,X,e){e.d(X,{E:function(){return d.E},l:function(){return re}});var H=e(28562),d=e(65784),re=H.Z;re.CollapseList=d.E},90858:function(Pe,X,e){e.d(X,{d:function(){return $}});var H=e(27046),d=e(71795),re=e(5312),A=e(75271),N=e(90142),ee=e(90228),r=e.n(ee),w=e(87999),Y=e.n(w),T=e(38794),oe=e(76940),Q=e(49505),m=e(15094),I=function(E){var f=E?"dark":"light",t=m._.gray[f][11],i=m._.gray[f][7],s=E?m._.red[f][9]:m._.volcano[f][9],a=E?m._.gold[f][9]:m._.orange[f][9],o=E?m._.lime[f][9]:m._.green[f][9],n=E?m._.blue[f][9]:m._.geekblue[f][9];return{colors:{"editor.foreground":t},name:f,semanticHighlighting:!0,semanticTokenColors:{"annotation:dart":{foreground:o},enumMember:{foreground:n},macro:{foreground:o},"parameter.label:dart":{foreground:i},"property:dart":{foreground:o},tomlArrayKey:{foreground:s},"variable.constant":{foreground:o},"variable.defaultLibrary":{foreground:s},"variable:dart":{foreground:o}},tokenColors:[{scope:"meta.embedded",settings:{foreground:i}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:t}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:n}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:o}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:t}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:i}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:s}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:s}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:i}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:a}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:s}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:t}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:n}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:t}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:n}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:o}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:i}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:i}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:s}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:a}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:o}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:t}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:t}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:i}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:i}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:a}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:s}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:o}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:s}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:s}},{name:"java source",scope:"source.java",settings:{foreground:t}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:i}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:a}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:s}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:n}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:t}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:n}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:n}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:n}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:o}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:n}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:o}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:t}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:o}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:n}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:s}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:s}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:t}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:o}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:n}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:t}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:o}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:a}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:i}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:n}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:n}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:n}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:t}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:n}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:n}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:i}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:n}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:n}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:n}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:o}},{name:"python type",scope:"support.type.python",settings:{foreground:n}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:n}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:o}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:i}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:a}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:o}},{name:"Operators",scope:"keyword.operator",settings:{foreground:i}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:n}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:n}},{name:"Keywords",scope:"keyword",settings:{foreground:n}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:s}},{name:"Variables",scope:"variable",settings:{foreground:t}},{name:"Variables",scope:"variable.c",settings:{foreground:i}},{name:"Language variables",scope:"variable.language",settings:{foreground:s}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:i}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:s}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:n}},{name:"Packages",scope:"token.package",settings:{foreground:i}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:a}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:s}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:s}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:s}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:s}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:t}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:s}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:n}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:o}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:a}},{name:"Storage",scope:"storage",settings:{foreground:n}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:n}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:n}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:s}},{name:"Support",scope:"support.function",settings:{foreground:n}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:t}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:i}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:o}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:i}},{name:"Strings",scope:"string",settings:{foreground:o}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:n}},{name:"Integers",scope:"constant.numeric",settings:{foreground:o}},{name:"Constants",scope:"constant",settings:{foreground:o}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:o}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:t}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:o}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:a}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:o}},{name:"Selector",scope:"meta.selector",settings:{foreground:n}},{name:"Headings",scope:"markup.heading",settings:{fontStyle:"bold"}},{name:"FencedCode",scope:"punctuation.definition.markdown, fenced_code.block.language.markdown",settings:{foreground:s}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:a}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:t}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:o}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:s}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:n}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:t}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:i}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:t}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:a}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:s}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:a}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:n}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:t}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:n}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:t}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:i}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:t}},{name:"Broken",scope:"invalid.broken",settings:{foreground:t}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:t}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:o}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:o}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:n}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:t}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:n}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:n}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:s}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:n}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:n}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:i}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:i}},{name:"php illegal.non-undefined-typehinted",scope:"invalid.illegal.non-undefined-typehinted.php",settings:{foreground:s}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:s}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:a}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:i}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:o}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:o}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:a}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:n}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:n}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:n}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:n}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:a}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:n}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:i}},{name:"brace function",scope:"function.brace",settings:{foreground:i}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:i}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:n}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:n}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:n}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:o}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:o}},{name:"sass selector",scope:"selector.sass",settings:{foreground:t}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:s}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:i}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:s}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:t}},{scope:"token.info-token",settings:{foreground:a}},{scope:"token.warn-token",settings:{foreground:o}},{scope:"token.error-token",settings:{foreground:s}},{scope:"token.debug-token",settings:{foreground:n}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:n}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:i}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:n}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:a}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:s}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:t}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:t}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:o}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:o}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:o}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:o}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:n}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:s}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:n}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:s}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:n}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:o}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:n}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:t}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:n}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:s}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:t}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:n}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:t}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:o}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:t}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:s}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:s}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:a}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:t}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:o}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:s}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:n}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:t}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:s}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:s}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:n}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:t}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:n}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:n}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:i}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:o}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:i}},{name:"link",scope:["constant.character.xi"],settings:{foreground:a}},{name:"accent",scope:["accent.xi"],settings:{foreground:a}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:o}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:t}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:i}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:s}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:t}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:i}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{fontStyle:"italic",foreground:i}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:i}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:i}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:n}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:s}},{scope:["entity.name.variable.field.cs"],settings:{foreground:t}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:t}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:o}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:s}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:i}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:s}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:t}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:s}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:t}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:i}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:n}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:o}},{scope:["constant.character.escape"],settings:{foreground:n}},{scope:["string.regexp"],settings:{foreground:t}},{scope:["log.info"],settings:{foreground:o}},{scope:["log.warning"],settings:{foreground:s}},{scope:["log.error"],settings:{foreground:t}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],type:f}},S=e(34731),L="txt",l=[L],R,p=function(){var h=Y()(r()().mark(function E(f){var t,i;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t=R,i=f.toLowerCase(),!(t&&l.includes(i))){a.next=4;break}return a.abrupt("return",t);case 4:return S.Q.includes(i)&&!l.includes(i)&&l.push(i),a.next=7,(0,oe.e$)({langs:l,themes:[I(!0),I(!1),"catppuccin-latte","catppuccin-mocha"]});case 7:return t=a.sent,R=t,a.abrupt("return",t);case 10:case"end":return a.stop()}},E)}));return function(f){return h.apply(this,arguments)}}(),U=function(E,f,t){return(0,Q.ZP)([f==null?void 0:f.toLowerCase(),t?"dark":"light",E].join("-"),Y()(r()().mark(function i(){var s,a,o,n;return r()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.prev=0,s=f.toLowerCase(),a=t?"dark":"light",s==="md"&&(a=t?"catppuccin-mocha":"catppuccin-latte"),j.next=6,p(s);case 6:return o=j.sent,n=o==null?void 0:o.codeToHtml(E,{lang:S.Q.includes(s)?s:L,theme:a,transformers:[(0,T.hu)(),(0,T.d0)(),(0,T.dY)(),(0,T.Eu)(),(0,T.p4)()]}),j.abrupt("return",n);case 11:return j.prev=11,j.t0=j.catch(0),j.abrupt("return","");case 14:case"end":return j.stop()}},i,null,[[0,11]])})),{revalidateOnFocus:!1})},v=e(53649),g=e.n(v),k=e(3772),M,V,J,W=(0,k.kc)(function(h){var E=h.css,f=h.token,t=h.cx,i=h.prefixCls,s=h.stylish,a="".concat(i,"-highlighter");return{loading:t(s.blur,E(M||(M=g()([`
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
      `])),f.fontFamilyCode,f.colorTextTertiary,f.borderRadius)),shiki:t("".concat(a,"-shiki"),E(V||(V=g()([`
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
      `])),f.colorFillTertiary,f.colorWarningBg,f.colorErrorBg,f.colorFillTertiary,f.colorBorderSecondary,f.borderRadius,f.colorErrorBg,f.colorErrorText,f.colorSuccessBg,f.colorSuccessText)),unshiki:E(J||(J=g()([`
      overflow: auto;
      margin: 0;
      padding: 0;
      color: `,`;
    `])),f.colorTextDescription)}}),P=e(52676),$=(0,A.memo)(function(h){var E=h.children,f=h.language,t=h.className,i=h.style,s=W(),a=s.styles,o=s.cx,n=(0,d.r)(),ae=n.isDarkMode,j=U(E.trim(),f,ae),ge=j.data,ce=j.isLoading;return(0,P.jsxs)(P.Fragment,{children:[ce||!ge?(0,P.jsx)("div",{className:o(a.unshiki,t),style:i,children:(0,P.jsx)("pre",{children:(0,P.jsx)("div",{children:E.trim()})})}):(0,P.jsx)("div",{className:o(a.shiki,t),dangerouslySetInnerHTML:{__html:ge},style:i}),ce&&(0,P.jsx)(N.D,{align:"center",className:a.loading,gap:8,horizontal:!0,justify:"center",children:(0,P.jsx)(H.Z,{icon:re.Z,spin:!0})})]})})},22435:function(Pe,X,e){e.d(X,{EL:function(){return t},oP:function(){return s}});var H=e(26068),d=e.n(H),re=e(67825),A=e.n(re),N=e(76417),ee=e(92946),r=e(43728),w=e(75271),Y=e(48305),T=e.n(Y),oe=e(17394),Q=e(98721),m=e(97601),I=e(68537),S=e(90142),L=e(34731),l=e(90858),R=e(53649),p=e.n(R),U=e(3772),v,g,k,M,V,J,W,P,$=(0,U.kc)(function(a,o){var n=a.token,ae=a.css,j=a.cx,ge=a.prefixCls,ce=a.stylish,Se="".concat(ge,"-highlighter"),ke="".concat(Se,"-hover-btn"),Oe="".concat(Se,"-hover-lang"),D=ae(v||(v=p()([`
      background-color: `,`;
      border: 1px solid `,`;

      &:hover {
        background-color: `,`;
      }
    `])),o==="block"?n.colorFillTertiary:"transparent",o==="block"?"transparent":n.colorBorder,o==="block"?n.colorFillTertiary:n.colorFillQuaternary);return{button:j(ke,ae(g||(g=p()([`
          position: absolute;
          z-index: 2;
          inset-block-start: `,`;
          inset-inline-end: `,`;

          opacity: 0;
        `])),o==="pure"?0:"12px",o==="pure"?0:"12px")),container:j(Se,o!=="pure"&&D,ae(k||(k=p()([`
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
        `])),n.borderRadius,n.motionEaseOut,ke,Oe,o==="pure"?0:"16px")),header:ae(M||(M=p()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),n.colorFillQuaternary),lang:j(Oe,ce.blur,ae(V||(V=p()([`
          position: absolute;
          z-index: 2;
          inset-block-end: 12px;
          inset-inline-end: 4px;

          font-family: `,`;
          color: `,`;

          opacity: 0;

          transition: opacity 0.1s;
        `])),n.fontFamilyCode,n.colorTextSecondary)),nowrap:ae(J||(J=p()([`
        code {
          text-wrap: nowrap !important;
        }
      `]))),scroller:ae(W||(W=p()([`
        overflow: auto;
        width: 100%;
        height: 100%;
      `]))),select:ae(P||(P=p()([`
        user-select: none;
        font-size: 14px;
        color: `,`;
        .`,`-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: `,`;
          text-align: center;
        }
      `])),n.colorTextDescription,ge,n.colorTextDescription)}}),h=e(52676),E=["children","language","className","style","allowChangeLanguage","fileName","icon","contentStyle"],f=L.Q.map(function(a){return{label:a,value:a.toLowerCase()}}),t=(0,w.memo)(function(a){var o=a.children,n=a.language,ae=n===void 0?"markdown":n,j=a.className,ge=a.style,ce=a.allowChangeLanguage,Se=ce===void 0?!1:ce,ke=a.fileName,Oe=a.icon,D=a.contentStyle,ue=A()(a,E),G=(0,w.useState)(!0),me=T()(G,2),q=me[0],x=me[1],F=(0,w.useState)(ae||"markdown"),B=T()(F,2),te=B[0],se=B[1],fe=$("block"),ie=fe.styles,le=fe.cx,ve=le(ie.container,j);return(0,h.jsxs)("div",d()(d()({className:ve,"data-code-type":"highlighter",style:ge},ue),{},{children:[(0,h.jsxs)(S.D,{align:"center",className:ie.header,horizontal:!0,justify:"space-between",children:[(0,h.jsx)(oe.Z,{icon:q?m.Z:I.Z,onClick:function(){return x(!q)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),Se&&!ke?(0,h.jsx)(Q.default,{className:ie.select,onSelect:se,options:f,size:"small",suffixIcon:!1,value:te.toLowerCase(),variant:"borderless"}):(0,h.jsxs)(S.D,{align:"center",className:ie.select,gap:2,horizontal:!0,children:[Oe,(0,h.jsx)("span",{children:ke||te})]}),(0,h.jsx)(ee.Z,{content:o,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,h.jsx)(l.d,{language:te==null?void 0:te.toLowerCase(),style:q?D:d()(d()({},D),{},{height:0,overflow:"hidden"}),children:o})]}))}),i=["fullFeatured","copyButtonSize","children","language","className","style","copyable","showLanguage","type","spotlight","allowChangeLanguage","fileName","icon","contentStyle","wrap"],s=(0,w.memo)(function(a){var o=a.fullFeatured,n=a.copyButtonSize,ae=n===void 0?"site":n,j=a.children,ge=a.language,ce=a.className,Se=a.style,ke=a.copyable,Oe=ke===void 0?!0:ke,D=a.showLanguage,ue=D===void 0?!0:D,G=a.type,me=G===void 0?"block":G,q=a.spotlight,x=a.allowChangeLanguage,F=a.fileName,B=a.icon,te=a.contentStyle,se=a.wrap,fe=A()(a,i),ie=$(me),le=ie.styles,ve=ie.cx,de=ve(le.container,!se&&le.nowrap,ce);return o?(0,h.jsx)(t,d()(d()({allowChangeLanguage:x,className:ce,contentStyle:te,fileName:F,icon:B,language:ge,style:Se},fe),{},{children:j})):(0,h.jsxs)("div",d()(d()({className:de,"data-code-type":"highlighter",style:Se},fe),{},{children:[q&&(0,h.jsx)(N.Z,{size:240}),Oe&&(0,h.jsx)(ee.Z,{className:le.button,content:j,placement:"left",size:ae}),ue&&ge&&(0,h.jsx)(r.Z,{className:le.lang,children:ge.toLowerCase()}),(0,h.jsx)("div",{className:le.scroller,children:(0,h.jsx)(l.d,{language:ge==null?void 0:ge.toLowerCase(),style:te,children:j})})]}))})},33985:function(Pe,X,e){e.d(X,{h:function(){return E},P:function(){return I.Pz}});var H=e(26068),d=e.n(H),re=e(48305),A=e.n(re),N=e(67825),ee=e.n(N),r=e(17394),w=e(92946),Y=e(38590),T=e(71795),oe=e(97601),Q=e(68537),m=e(75271),I=e(2998),S=e(86590),L=e(4643),l=e(94729),R=e(53649),p=e.n(R),U=e(3772),v,g,k,M,V,J,W=(0,U.kc)(function(f,t){var i=f.token,s=f.css,a=f.cx,o=f.prefixCls,n="".concat(o,"-json-viewer"),ae=t==="block",j=s(v||(v=p()([`
      background-color: `,`;

      &:hover {
        background-color: `,`;
      }
    `])),ae?i.colorFillTertiary:"transparent",ae?i.colorFillTertiary:i.colorFillQuaternary);return{container:a(n,t!=="pure"&&j,s(g||(g=p()([`
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
        `])),i.borderRadius,i.motionEaseOut)),content:s(k||(k=p()([`
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: `,`px;
      `])),t==="pure"?0:i.padding),header:s(M||(M=p()([`
        padding-block: 4px;
        padding-inline: 8px;
        background: `,`;
      `])),i.colorFillQuaternary),title:s(V||(V=p()([`
        user-select: none;
        overflow: hidden;
        margin: 0 `,`px;
      `])),i.margin),titleText:s(J||(J=p()([`
        overflow: hidden;
        font-size: `,`px;
        .`,`-typography {
          color: `,`;
        }
      `])),i.fontSize,o,i.colorTextDescription)}}),P=e(52676),$=["type","fullFeatured","title","icon","contentStyle","classNames","className","collapseStringMode","collapsed","dark","displaySize","ignoreLargeArray","matchesURL","src","theme","style"],h=l.C.Text,E=function(t){var i=t.type,s=i===void 0?"block":i,a=t.fullFeatured,o=a===void 0?!1:a,n=t.title,ae=n===void 0?"json":n,j=t.icon,ge=t.contentStyle,ce=t.classNames,Se=t.className,ke=t.collapseStringMode,Oe=ke===void 0?"directly":ke,D=t.collapsed,ue=D===void 0?2:D,G=t.dark,me=t.displaySize,q=me===void 0?"collapsed":me,x=t.ignoreLargeArray,F=x===void 0?!1:x,B=t.matchesURL,te=B===void 0?!0:B,se=t.src,fe=t.theme,ie=fe===void 0?"default":fe,le=t.style,ve=ee()(t,$),de=(0,T.r)(),je=de.isDarkMode,he=W(o?"block":s),O=he.styles,u=he.cx,b=(0,m.useState)(!0),c=A()(b,2),y=c[0],K=c[1],C=(0,m.useMemo)(function(){return(0,I.Pz)(se)},[se]),Z=(0,P.jsx)(I.ZP,d()({collapseStringMode:Oe,collapsed:ue,dark:G!=null?G:je,displaySize:q,ignoreLargeArray:F,matchesURL:te,src:se,theme:ie},ve));return(0,P.jsxs)(Y.Z,{className:u(O.container,Se),style:le,vertical:!0,children:[o&&(0,P.jsxs)(Y.Z,{align:"center",className:u(O.header,ce==null?void 0:ce.header),justify:"space-between",children:[(0,P.jsx)(r.Z,{icon:y?oe.Z:Q.Z,onClick:function(){return K(!y)},size:{blockSize:24,fontSize:14,strokeWidth:3}}),(0,P.jsxs)(Y.Z,{align:"center",className:O.title,flex:1,gap:2,justify:"center",title:ae,children:[j,(0,P.jsx)(Y.Z,{className:O.titleText,children:(0,P.jsx)(h,{ellipsis:!0,children:ae})})]}),(0,P.jsx)(w.Z,{content:C,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}})]}),(0,P.jsx)(Y.Z,{className:u(O.content,ce==null?void 0:ce.content),flex:1,style:y?ge:d()(d()({},ge),{},{height:0,maxHeight:0,padding:0,overflow:"hidden"}),children:Z})]})}},40305:function(Pe,X,e){e.d(X,{T:function(){return he}});var H=e(26068),d=e.n(H),re=e(67825),A=e.n(re),N=e(75271),ee=e(87902),r=e(52676),w=["to","children"],Y=function(u){var b=u.to,c=u.children,y=A()(u,w);return(0,r.jsx)("a",d()(d()({href:"#".concat(b)},y),{},{children:c}))},T=(0,N.createContext)({loading:!1,Link:Y}),oe=["to","Link","children"],Q=function(u){var b=u.to,c=u.Link,y=u.children,K=A()(u,oe);return c?(0,r.jsx)(c,d()(d()({to:b},K),{},{children:y})):(0,r.jsx)("a",d()(d()({href:"#".concat(b)},K),{},{children:y}))},m=function(u){var b=(0,N.useContext)(T),c=b.Link,y=b.breadcrumb;(0,N.useEffect)(function(){var C;y==null||(C=y.setItems)===null||C===void 0||C.call(y,u.items)},[y,u.items]);var K=(0,N.useCallback)(function(C,Z,ne,z){var _,be,ye=C.href?C.href===((_=ne.at(-1))===null||_===void 0?void 0:_.href):C.path===((be=ne.at(-1))===null||be===void 0?void 0:be.path);if(ye)return(0,r.jsx)("span",{children:C.title});var Me=C.href?C.href:"/".concat(z.join("/"));return(0,r.jsx)(Q,{Link:c,to:Me,children:C.title})},[c]);return(0,r.jsx)(ee.Z,d()({itemRender:K},u))},I=e(10780),S=e(22622),L=e(91488),l=e(38590),R=e(53649),p=e.n(R),U=e(3772),v,g=(0,U.kc)(function(O){var u=O.css,b=O.token;return{root:u(v||(v=p()([`
        width: 100%;
      `])))}},{hashPriority:"low"}),k=["className","children"],M={403:"Sorry, you are not authorized to access this page.",404:"Sorry, the page you visited does not exist.",500:"Sorry, something went wrong."},V=function(u){var b=u.className,c=u.children,y=A()(u,k),K=g(),C=K.styles,Z=K.cx,ne=(0,N.useContext)(T),z=ne.loading,_=ne.breadcrumb,be=ne.Link,ye=ne.status,Me=(0,N.useCallback)(function(){if(ye){var we;return(0,r.jsx)(I.ZP,{extra:(0,r.jsx)(be,{to:_==null||(we=_.items)===null||we===void 0||(we=we[0])===null||we===void 0?void 0:we.path,children:(0,r.jsx)(S.ZP,{type:"primary",children:"Go Back"})}),status:ye,subTitle:M[ye],title:ye})}return c},[ye,c,be,_==null?void 0:_.items]);return z?(0,r.jsx)(L.Z,{active:!0,className:Z(C.root,b)}):(0,r.jsx)(l.Z,d()(d()({className:Z(C.root,b),gap:20,vertical:!0},y),{},{children:Me()}))},J=function(){return(0,r.jsx)(r.Fragment,{})},W=e(48305),P=e.n(W),$=e(335),h=e.n($),E=e(1718),f=e(12644),t=e(82227),i=e(46119),s=e(94729),a=e(79214),o=["shape","size","src"],n=function(u){if(typeof u=="number")return u;switch(u){case"small":return 40;case"large":return 88;default:return 64}},ae=function(u){var b=u.shape,c=b===void 0?"square":b,y=u.size,K=u.src,C=A()(u,o),Z=(0,N.useMemo)(function(){return n(y)},[y]);return(0,r.jsx)(a.C,d()({shape:c,size:Z,src:K},C))},j,ge,ce,Se,ke,Oe,D,ue,G,me=(0,U.kc)(function(O,u){var b=O.css,c=O.token,y=O.prefixCls,K=u.bordered,C=K===void 0?!1:K,Z=u.divider,ne=Z===void 0?!0:Z;return{root:C?b(j||(j=p()([`
            margin-bottom: `,`px;
            padding: `,`px;

            background-color: `,`;
            border-radius: `,`px;
            box-shadow: `,`;
          `])),c.marginXS,c.padding,c.colorBgBase,c.borderRadius,c.boxShadowTertiary):b(ge||(ge=p()([`
            padding-top: `,`px;
            margin-bottom: `,`px;
            `,`
          `])),c.paddingXS,c.marginXS,ne&&b(ce||(ce=p()([`
              padding-bottom: `,`px;
              border-bottom: 1px solid `,`;
            `])),c.paddingLG,c.colorSplit)),icon:b(Se||(Se=p()([`
        &.`,"-avatar.",`-avatar-square {
          color: `,`;
          border-radius: 10px;
        }
        .`,`-skeleton-avatar {
          border-radius: 10px;
        }
      `])),y,y,c.colorPrimary,y),titleBox:b(ke||(ke=p()([`
        margin-bottom: `,`px;
      `])),c.marginSM),subTitle:b(Oe||(Oe=p()([`
        margin-top: `,`px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: `,`px;
          color: `,`;
        }
      `])),c.marginXXS,y,c.fontSize,c.colorTextSecondary),title:b(D||(D=p()([`
        font-size: `,`px;
        font-weight: 700;
      `])),c.fontSizeHeading5),descriptions:b(ue||(ue=p()([`
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
      `])),c.marginXXS,c.fontSize,c.colorTextSecondary,y,y,c.fontSize,y,c.fontSize,c.colorTextSecondary),rightButtons:b(G||(G=p()([`
        justify-content: flex-end;
      `])))}}),q=["className","classNames","icon","title","titleRender","subTitle","status","descriptions","descriptionsRender","extraContent","extraContentRender","bordered","divider"],x=s.C.Paragraph,F=function(u){var b=u.className,c=u.classNames,y=u.icon,K=u.title,C=u.titleRender,Z=u.subTitle,ne=u.status,z=u.descriptions,_=z===void 0?[]:z,be=u.descriptionsRender,ye=u.extraContent,Me=ye===void 0?{}:ye,we=u.extraContentRender,Ue=u.bordered,Fe=u.divider,Ie=A()(u,q),Ae=me({bordered:Ue,divider:Fe}),pe=Ae.styles,Te=Ae.cx,Le=(0,N.useMemo)(function(){return!y||typeof y=="string"?{src:y,size:Z?"large":"default"}:(Z&&y.size===void 0&&(y.size="large"),y)},[y,Z]),Be=(0,N.useMemo)(function(){var De=(0,r.jsx)("span",{className:Te(pe.title,c==null?void 0:c.title),children:K});return C?C(De):De},[c==null?void 0:c.title,Te,pe.title,K,C]),ot=(0,N.useMemo)(function(){var De=[],Ve=h()(_.filter(function(Ge){return!!Ge}).entries()),Ye;try{for(Ve.s();!(Ye=Ve.n()).done;){var We=P()(Ye.value,2),$e=We[0],Ee=We[1],Ce=Ee.icon,Ne=Ee.text;(ne||$e>=1)&&De.push((0,r.jsx)(t.Z,{dashed:!1,type:"vertical"},"divider-".concat($e))),De.push((0,r.jsxs)(l.Z,{align:"center",gap:4,children:[Ce&&(0,r.jsx)(E.Z,{title:Ce.tooltip,children:Ce.content}),(0,r.jsx)("span",{children:Ne})]},"desc-".concat($e)))}}catch(Ge){Ve.e(Ge)}finally{Ve.f()}return be?be(De):De},[_,be,ne]),Je=(0,N.useMemo)(function(){if(!Me&&!we)return null;var De=(0,r.jsx)(f.h,d()({className:pe.rightButtons},Me));return we?we(De):De},[Me,we,pe.rightButtons]),Ze=(0,N.useContext)(T),at=Ze.loading,Xe=Ze.status;return at?(0,r.jsxs)(l.Z,{className:Te(pe.root,b),gap:20,children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(L.Z.Avatar,{active:!0,className:pe.icon,shape:Le==null?void 0:Le.shape,size:n(Le==null?void 0:Le.size)})}),(0,r.jsxs)(l.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,r.jsxs)("div",{className:pe.titleBox,children:[(0,r.jsx)(L.Z.Input,{active:!0,size:25}),Z&&(0,r.jsx)("div",{className:Te(pe.subTitle,b),children:(0,r.jsx)(L.Z.Input,{active:!0,size:18})})]}),(0,r.jsx)(L.Z.Input,{active:!0,size:18})]}),(0,r.jsx)(l.Z,{align:"center",flex:"0 0 140px",justify:"flex-end",children:(0,r.jsx)(L.Z.Button,{active:!0})})]}):Xe?null:(0,r.jsxs)(l.Z,d()(d()({className:Te(pe.root,b),gap:20},Ie),{},{children:[Le&&(0,r.jsx)(l.Z,{children:(0,r.jsx)(ae,d()({className:pe.icon},Le))}),(0,r.jsxs)(l.Z,{flex:"2",justify:"space-between",vertical:!0,children:[(0,r.jsxs)(l.Z,{className:Te(pe.titleBox,c==null?void 0:c.titleWrapper),vertical:!0,children:[Be,Z&&(0,r.jsx)(x,{className:Te(pe.subTitle,c==null?void 0:c.subTitle),ellipsis:{rows:2},children:Z})]}),(0,r.jsxs)(l.Z,{align:"center",className:Te(pe.descriptions,c==null?void 0:c.descriptions),gap:4,children:[ne&&(0,r.jsx)(i.q,d()({},ne)),ot]})]}),(0,r.jsx)(l.Z,{align:"center",className:c==null?void 0:c.extraContent,flex:"1",justify:"flex-end",children:Je})]}))},B=e(94456),te,se=(0,U.kc)(function(O){var u=O.css,b=O.token;return{root:u(te||(te=p()([`
      width: inherit;
      height: 100%;
      min-height: inherit;
      padding: `,"px ","px ",`px;
    `])),b.padding,b.paddingLG,b.paddingXL)}}),fe=["loading","className","children","Link","status","gap"],ie=function(u){var b=(0,B.nB)(),c=u.loading,y=u.className,K=u.children,C=u.Link,Z=C===void 0?b||Y:C,ne=u.status,z=u.gap,_=z===void 0?16:z,be=A()(u,fe),ye=se(be),Me=ye.styles,we=ye.cx,Ue=(0,N.useState)([]),Fe=P()(Ue,2),Ie=Fe[0],Ae=Fe[1];return(0,r.jsx)(l.Z,d()(d()({className:we(Me.root,y),gap:_,vertical:!0},be),{},{children:(0,r.jsx)(T.Provider,{value:{loading:c,Link:Z,breadcrumb:{items:Ie,setItems:Ae},status:ne},children:K})}))},le,ve=(0,U.kc)(function(O){var u=O.css,b=O.token;return{root:u(le||(le=p()([`
      margin: 0;

      font-family: `,`;
      font-size: 16px;
      font-weight: `,`;
      line-height: `,`;
      color: `,`;
    `])),b.fontFamily,b.fontWeightStrong,b.lineHeight,b.colorText)}}),de=["className"],je=function(u){var b=u.className,c=A()(u,de),y=ve(),K=y.cx,C=y.styles;return(0,r.jsx)("h2",d()({className:K(C.root,b)},c))},he=ie;he.Breadcrumb=m,he.Title=je,he.Header=F,he.Content=V,he.Footer=J},86346:function(Pe,X,e){e.d(X,{Q:function(){return me}});var H=e(26068),d=e.n(H),re=e(67825),A=e.n(re),N=e(75271),ee=e(53649),r=e.n(ee),w=e(3772),Y,T,oe,Q,m,I=(0,w.kc)(function(q){var x=q.css,F=q.token,B=q.prefixCls;return{root:x(Y||(Y=r()([`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: `,`;
      color: `,`;

      background: `,`;
      border-radius: `,`px;
      box-shadow: `,`;
    `])),F.fontFamily,F.colorText,F.colorBgContainer,F.borderRadius*2,F.boxShadowTertiary),bordered:x(T||(T=r()([`
      border: 1px solid `,`;
      box-shadow: none;
    `])),F.colorBorder),hoverable:x(oe||(oe=r()([`
      cursor: pointer;
      transition:
        box-shadow `,`,
        border-color `,`;
      &:hover {
        border-color: transparent;
        box-shadow: `,`;
      }
    `])),F.motionDurationMid,F.motionDurationMid,F.boxShadow),text:x(Q||(Q=r()([`
      overflow: hidden;
      display: inline-block;

      max-width: 200px;

      color: `,`;
      text-overflow: ellipsis;
      white-space: nowrap;
    `])),F.colorTextSecondary),error:x(m||(m=r()([`
      color: `,`;
    `])),F.colorErrorText)}}),S=e(52676),L=["className","bordered","hoverable","children"],l=function(x){var F=x.className,B=x.bordered,te=B===void 0?!1:B,se=x.hoverable,fe=se===void 0?!0:se,ie=x.children,le=A()(x,L),ve=I(),de=ve.cx,je=ve.styles;return(0,S.jsx)("div",d()(d()({className:de(je.root,te&&je.bordered,fe&&je.hoverable,F)},le),{},{children:ie}))},R=e(38590),p,U=(0,w.kc)(function(q){var x=q.css,F=q.token;return{root:x(p||(p=r()([`
      padding: 12px 24px 20px;
    `])))}}),v=["className","children"],g=function(x){var F=x.className,B=x.children,te=A()(x,v),se=U(),fe=se.styles,ie=se.cx;return(0,S.jsx)(R.Z,d()(d()({className:ie(fe.root,F),gap:20,vertical:!0},te),{},{children:B}))},k=e(26345),M,V=(0,w.kc)(function(q){var x=q.css,F=q.token,B=q.prefixCls,te=70;return{root:x(M||(M=r()([`
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
    `])),B,B,B,B,te,B,te)}}),J=["className","colon","column","size"],W=function(x){var F=x.className,B=x.colon,te=B===void 0?!1:B,se=x.column,fe=se===void 0?2:se,ie=x.size,le=ie===void 0?"small":ie,ve=A()(x,J),de=V(),je=de.cx,he=de.styles;return(0,S.jsx)(k.Z,d()({className:je(he.root,F),colon:te,column:fe,size:le},ve))},P=e(27046),$=e(79214),h=e(159),E=e(22622),f=e(250),t=e(94729),i,s,a,o,n,ae,j,ge,ce,Se=(0,w.kc)(function(q,x){var F=q.css,B=q.token,te=q.prefixCls,se=x.divider,fe=se===void 0?!0:se,ie=x.iconBg,le=ie===void 0?!0:ie;return{root:F(i||(i=r()([`
        padding: 24px 20px `,`px 24px;
        `,`
      `])),fe?20:0,fe&&F(s||(s=r()([`
          border-bottom: 1px solid `,`;
        `])),B.colorSplit)),icon:F(a||(a=r()([`
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
      `])),te,B.colorPrimary,le&&F(o||(o=r()([`
            background-color: `,`;
          `])),B.colorBgLayout),te),titleBox:F(n||(n=r()([`
        margin-right: 4px;
        margin-bottom: `,`px;
      `])),B.marginXXS),title:F(ae||(ae=r()([`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: `,`;
        text-overflow: ellipsis;
        white-space: nowrap;
      `])),B.fontWeightStrong),description:F(j||(j=r()([`
        margin-right: 4px;
        &.`,`-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: `,`;
        }
      `])),te,B.colorTextSecondary),extra:F(ge||(ge=r()([`
        margin-top: -4px;
      `]))),rightButtons:F(ce||(ce=r()([`
        justify-content: flex-end;
      `])))}}),ke=["className","icon","title","description","extra","divider"],Oe=["className","shape","size"],D=["children"],ue=t.C.Paragraph,G=function(x){var F=x.className,B=x.icon,te=x.title,se=x.description,fe=x.extra,ie=x.divider,le=A()(x,ke),ve=Se({divider:ie,iconBg:!(B!=null&&B.src)}),de=ve.styles,je=ve.cx,he=B||{},O=he.className,u=he.shape,b=u===void 0?"square":u,c=he.size,y=c===void 0?72:c,K=A()(he,Oe),C=fe||{},Z=C.children,ne=A()(C,D);return(0,S.jsxs)(R.Z,d()(d()({className:je(de.root,F),gap:20},le),{},{children:[B&&(0,S.jsx)(R.Z,{children:(0,S.jsx)($.C,d()({className:je(de.icon,O),shape:b,size:y},K))}),(0,S.jsxs)(R.Z,{flex:"1",vertical:!0,children:[(0,S.jsxs)(R.Z,{className:de.titleBox,gap:4,children:[(0,S.jsx)("div",{className:de.title,children:te}),fe&&(0,S.jsx)(R.Z,{align:"flex-start",className:de.extra,justify:"flex-end",onClick:function(_){return _.stopPropagation()},children:(0,S.jsx)(h.Z,d()(d()({},ne),{},{children:Z||(0,S.jsx)(E.ZP,{icon:(0,S.jsx)(P.Z,{icon:f.Z}),size:"small",type:"text"})}))})]}),se&&(0,S.jsx)(ue,{className:de.description,ellipsis:{rows:2},children:se})]})]}))},me=l;me.Header=G,me.Content=g,me.Descriptions=W},46119:function(Pe,X,e){e.d(X,{q:function(){return p}});var H=e(26068),d=e.n(H),re=e(67825),A=e.n(re),N=e(27046),ee=e(62272),r=e(62701),w=e(1718),Y=e(65933),T=e(75271),oe=e(53649),Q=e.n(oe),m=e(3772),I,S,L=(0,m.kc)(function(U){var v=U.css,g=U.token,k=U.prefixCls;return{root:v(I||(I=Q()([`
        .`,"-badge.",`-badge-status {
          .`,`-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `])),k,k,k),tooltip:v(S||(S=Q()([`
        &.anticon {
          cursor: help;
          color: `,`;
        }
      `])),g.colorTextTertiary)}},{hashPriority:"low"}),l=e(52676),R=["tooltip","className","status","text","color"],p=function(v){var g=v.tooltip,k=v.className,M=v.status,V=v.text,J=v.color,W=A()(v,R),P=L(),$=P.cx,h=P.styles;return(0,l.jsxs)(ee.Z,d()(d()({className:$(h.root,k),size:"small"},W),{},{children:[(0,l.jsx)(r.Z,{status:M,text:V,color:J}),g&&(0,l.jsx)(w.Z,{className:h.tooltip,title:g,children:(0,l.jsx)(N.Z,{icon:Y.Z})})]}))}},94729:function(Pe,X,e){e.d(X,{Z:function(){return l}});var H=e(26068),d=e.n(H),re=e(48305),A=e.n(re),N=e(67825),ee=e.n(N),r=e(60399),w=e(1718),Y=e(28026),T=e.n(Y),oe=e(81792),Q=e.n(oe),m=e(18342),I=e(75271),S=e(52676),L=["time","format","relativeTime","tooltip"];T().extend(Q());var l=r.Z,R=function(v){return T()(v?new Date(v):new Date).fromNow()},p=function(v){var g,k=v.time,M=v.format,V=v.relativeTime,J=V===void 0?!0:V,W=v.tooltip,P=ee()(v,L),$=(0,I.useState)(R(k)),h=A()($,2),E=h[0],f=h[1],t=(0,I.useCallback)(function(o){var n=T()(),ae=T()(o),j=n.diff(ae);if(j>0&&j<60*60*1e3)return setInterval(function(){f(R(o))},60*1e3)},[]);(0,I.useEffect)(function(){var o;return J&&(o=t(new Date(k))),function(){o&&clearInterval(o)}},[J,t,k]),(0,I.useEffect)(function(){if(J){var o=R(k);o!==E&&(f(o),t(new Date(k)))}},[k,J,E,t]);var i=T()(k).format(M||"YYYY-MM-DD HH:mm:ss"),s=J?E:i,a=(g=W==null?void 0:W.title)!==null&&g!==void 0?g:J?i:void 0;return a&&(0,m.Z)(P,"ellipsis.tooltip.title",void 0),(0,S.jsx)(w.Z,d()(d()({},W||{}),{},{title:a,children:(0,S.jsx)(l.Text,d()(d()({},P),{},{children:s}))}))};l.Time=p,X.C=l},34731:function(Pe,X,e){e.d(X,{Q:function(){return H}});var H=["abap","actionscript-3","ada","apache","apex","apl","applescript","ara","asm","astro","awk","ballerina","bat","beancount","berry","bibtex","bicep","blade","c","cadence","clarity","clojure","cmake","cobol","codeql","coffee","cpp","crystal","csharp","css","cue","cypher","d","dart","dax","diff","docker","dream-maker","elixir","elm","erb","erlang","fish","fsharp","gdresource","gdscript","gdshader","gherkin","git-commit","git-rebase","glimmer-js","glimmer-ts","glsl","gnuplot","go","graphql","groovy","hack","haml","handlebars","haskell","hcl","hjson","hlsl","html","http","imba","ini","java","javascript","jinja-html","jison","json","json5","jsonc","jsonl","jsonnet","jssm","jsx","julia","kotlin","kusto","latex","less","liquid","lisp","logo","lua","make","markdown","marko","matlab","mdc","mdx","mermaid","mojo","narrat","nextflow","nginx","nim","nix","objective-c","objective-cpp","ocaml","pascal","perl","php","plsql","postcss","powerquery","powershell","prisma","prolog","proto","pug","puppet","purescript","python","r","raku","razor","reg","rel","riscv","rst","ruby","rust","sas","sass","scala","scheme","scss","shaderlab","shellscript","shellsession","smalltalk","solidity","sparql","splunk","sql","ssh-config","stata","stylus","svelte","swift","system-verilog","tasl","tcl","tex","toml","tsx","turtle","twig","typescript","v","vb","verilog","vhdl","viml","vue","vue-html","vyper","wasm","wenyan","wgsl","wolfram","xml","xsl","yaml","zenscript","zig","bash","batch","be","c#","cdc","clj","cmd","console","cql","cs","dockerfile","erl","f#","fs","fsl","gjs","gts","hbs","hs","jade","js","kql","makefile","md","nar","nf","objc","perl6","properties","ps","ps1","py","ql","rb","rs","sh","shader","shell","spl","styl","ts","vim","vimscript","vy","yml","zsh","\u6587\u8A00"]},15094:function(Pe,X,e){e.d(X,{_:function(){return H}});var H={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}}},82846:function(Pe,X,e){e.d(X,{J:function(){return m}});var H=e(48305),d=e.n(H),re=e(67825),A=e.n(re),N=e(75271),ee=function(){try{var L,l;return(globalThis==null?void 0:globalThis.SpeechRecognition)||((L=window)===null||L===void 0?void 0:L.SpeechRecognition)||((l=window)===null||l===void 0?void 0:l.webkitSpeechRecognition)}catch(R){}},r=function(){try{var L,l;return(globalThis==null?void 0:globalThis.speechSynthesis)||((L=window)===null||L===void 0?void 0:L.speechSynthesis)||((l=window)===null||l===void 0?void 0:l.webkitSpeechSynthesis)}catch(R){}},w=function(){try{var L,l;return(globalThis==null?void 0:globalThis.SpeechSynthesisUtterance)||((L=window)===null||L===void 0?void 0:L.SpeechSynthesisUtterance)||((l=window)===null||l===void 0?void 0:l.webkitSpeechSynthesisUtterance)}catch(R){}},Y=ee(),T=r(),oe=w(),Q=["voice","rate","pitch"],m=function(L,l){var R=l.voice,p=l.rate,U=l.pitch,v=A()(l,Q),g=(0,N.useState)(T==null?void 0:T.getVoices()),k=d()(g,2),M=k[0],V=k[1],J=(0,N.useState)(L),W=d()(J,2),P=W[0],$=W[1],h=(0,N.useState)(!1),E=d()(h,2),f=E[0],t=E[1],i=(0,N.useMemo)(function(){if(oe){var o=new oe(P);return o.voice=M.find(function(n){return n.name===R}),o.onstart=function(){return t(!0)},o.onend=function(){return t(!1)},U&&(o.pitch=U*10),p&&(o.rate=p*10),o}},[P,M,p,U,R]);(0,N.useEffect)(function(){T&&(T.onvoiceschanged=function(){V(T==null?void 0:T.getVoices())},T.onstart=function(){return t(!0)},T.onend=function(){return t(!1)})},[]);var s=(0,N.useCallback)(function(){var o;v==null||(o=v.onStart)===null||o===void 0||o.call(v),T==null||T.speak(i)},[v,i]),a=(0,N.useCallback)(function(){var o,n;v==null||(o=v.onStop)===null||o===void 0||o.call(v),(n=speechSynthesis)===null||n===void 0||n.cancel(),t(!1)},[v]);return{isLoading:f,setText:$,start:s,stop:a}},I=null}}]);
