"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2394],{3214:function(w,C,n){n.d(C,{Z:function(){return Pe}});var l=n(12027),y=n(51151),x=n(50959),W=n(43773),d=n(88829),I=n(4377),z=n(33918),S=n(56052),N=n(13795),P="[object String]";function c(e){return typeof e=="string"||!(0,S.Z)(e)&&(0,N.Z)(e)&&(0,z.Z)(e)==P}var h=c,o=n(33743),t=n(11527),D=["className","gap","rows","children","maxItemWidth"],L,ce=(0,I.kc)(function(e,i){var a=e.css,m=i.rows,r=i.maxItemWidth,s=i.gap;return{container:a(L||(L=(0,d.Z)([`
        --rows: `,`;
        --max-item-width: `,`;
        --gap: `,`;

        display: grid !important;
        grid-template-columns: repeat(
          auto-fill,
          minmax(
            max(var(--max-item-width), calc((100% - var(--gap) * (var(--rows) - 1)) / var(--rows))),
            1fr
          )
        );
      `])),m,h(r)?r:"".concat(r,"px"),h(s)?s:"".concat(s,"px"))}}),de=(0,x.forwardRef)(function(e,i){var a=e.className,m=e.gap,r=m===void 0?"1em":m,s=e.rows,g=s===void 0?3:s,u=e.children,v=e.maxItemWidth,f=v===void 0?240:v,b=(0,y.Z)(e,D),j=ce({gap:r,maxItemWidth:f,rows:g}),O=j.cx,Z=j.styles;return(0,t.jsx)(o.D,(0,l.Z)((0,l.Z)({className:O(Z.container,a),gap:r,ref:i},b),{},{children:u}))}),me=de,U=n(87859),F,$,H,G,K="hover-card",X=(0,I.kc)(function(e,i){var a=e.css,m=e.responsive,r=e.token,s=e.isDarkMode,g=i.size,u=i.borderRadius;return{container:a(F||(F=(0,d.Z)([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),K),content:a($||($=(0,d.Z)([`
      z-index: 2;

      flex-grow: 1;

      height: 100%;
      margin: 1px;

      background: `,`;
      border-radius: `,`px;
    `])),r.colorBgContainer,u-1),grid:a(H||(H=(0,d.Z)([`
      display: grid;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),m.mobile),itemContainer:a(G||(G=(0,d.Z)([`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;

      background: `,`;
      border-radius: `,`px;

      &::before,
      &::after {
        content: '';

        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;

        width: 100%;
        height: 100%;

        opacity: 0;
        border-radius: inherit;

        transition: opacity 500ms;
      }

      &::before {
        pointer-events: none;
        user-select: none;
        z-index: 3;
        background: radial-gradient(
          `,`px circle at var(--mouse-x) var(--mouse-y),
          `,`,
          transparent 40%
        );
      }

      &::after {
        z-index: 1;
        background: radial-gradient(
          `,`px circle at var(--mouse-x) var(--mouse-y),
          `,`,
          transparent 40%
        );
      }

      :hover::before {
        opacity: 1;
      }
    `])),(0,U.m4)(r.colorBorderSecondary,.75),u,g,(0,U.m4)(r.colorTextBase,s?.06:.02),g*.75,(0,U.m4)(r.colorTextBase,s?.4:.2))}}),ue=["children","className","style","borderRadius","size"],ve=(0,x.memo)(function(e){var i=e.children,a=e.className,m=e.style,r=e.borderRadius,s=e.size,g=(0,y.Z)(e,ue),u=X({borderRadius:r,size:s}),v=u.styles,f=u.cx;return(0,t.jsx)(o.D,(0,l.Z)((0,l.Z)({className:f(v.itemContainer,a),style:(0,l.Z)({borderRadius:r},m)},g),{},{children:(0,t.jsx)(o.D,{className:v.content,children:i})}))}),pe=ve,xe=["items","renderItem","maxItemWidth","className","columns","gap","style","size","borderRadius","spotlight"],he=(0,x.memo)(function(e){var i=e.items,a=e.renderItem,m=e.maxItemWidth,r=e.className,s=e.columns,g=s===void 0?3:s,u=e.gap,v=u===void 0?"1em":u,f=e.style,b=e.size,j=b===void 0?800:b,O=e.borderRadius,Z=O===void 0?12:O,E=e.spotlight,p=E===void 0?!0:E,T=(0,y.Z)(e,xe),M=X({borderRadius:Z,size:j}),ie=M.styles,De=M.cx,k=(0,x.useRef)(null);return(0,x.useEffect)(function(){if(k.current&&p){var B=function(se){var A=(0,W.Z)(document.querySelectorAll(".".concat(K))),oe;try{for(A.s();!(oe=A.n()).done;){var _=oe.value,le=_.getBoundingClientRect(),Se=se.clientX-le.left,Me=se.clientY-le.top;_.style.setProperty("--mouse-x","".concat(Se,"px")),_.style.setProperty("--mouse-y","".concat(Me,"px"))}}catch(Re){A.e(Re)}finally{A.f()}};return k.current.addEventListener("mousemove",B),function(){var R;(R=k.current)===null||R===void 0||R.removeEventListener("mousemove",B)}}},[]),(0,t.jsx)(me,(0,l.Z)((0,l.Z)({className:De(ie.container,ie.grid,r),gap:v,maxItemWidth:m,ref:k,rows:g,style:f},T),{},{children:i.map(function(B,R){return(0,t.jsx)(pe,{borderRadius:Z,className:K,size:j,children:(0,t.jsx)(a,(0,l.Z)({},B))},R)})}))}),ge=he,Y=n(67269),ye=n(92635),fe=n(244),be=n(29517),J,Q,V,q,ee,ne,te,re,ae,je=(0,I.kc)(function(e,i){var a=e.token,m=e.prefixCls,r=e.css,s=e.cx,g=i.rowNum,u=i.hasLink,v="".concat(m,"-features"),f="".concat(v,"-cover"),b="".concat(v,"-description"),j="".concat(v,"-title"),O="".concat(v,"-img"),Z=20,E=function(M){return r(J||(J=(0,d.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),M,M,M*(22/24))},p=r(Q||(Q=(0,d.Z)([`
      transition: all `," ",`;
    `])),a.motionDurationSlow,a.motionEaseInOutCirc);return{cell:r(V||(V=(0,d.Z)([`
        overflow: hidden;
      `]))),container:r(q||(q=(0,d.Z)([`
        `,`;
        position: relative;
        z-index: 1;

        padding: 24px;
        height: 228px;
        max-height: 228px;

        overflow: hidden;

        p {
          font-size: 16px;
          line-height: 1.2;
          text-align: start;
          word-break: break-word;
        }

        &:hover {
          .`,` {
            width: 100%;
            height: `,`px;
            padding: 0;
            background: `,`;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),p,f,Z*g,a.colorFillContent,O,E(100),b,j,u?14:20),desc:s(b,p,r(ee||(ee=(0,d.Z)([`
          pointer-events: none;
          color: `,`;

          quotient {
            position: relative;

            display: block;

            margin-block: 12px;
            margin-inline: 0;
            padding-inline-start: 12px;

            color: `,`;
          }
        `])),a.colorTextSecondary,a.colorTextDescription)),img:s(O,p,r(ne||(ne=(0,d.Z)([`
          `,`;
          color: `,`;
        `])),E(20),a.colorText)),imgContainer:s(f,p,r(te||(te=(0,d.Z)([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),E(24),a.borderRadius)),link:r(re||(re=(0,d.Z)([`
        `,`;
        margin-block-start: 24px;
      `])),p),title:s(j,p,r(ae||(ae=(0,d.Z)([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),a.lineHeightHeading3,a.colorText))}}),Ce=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"],Oe=(0,x.memo)(function(e){var i=e.image,a=e.className,m=e.title,r=e.style;return i.startsWith("http")?(0,t.jsx)(be.Z,{alt:m,className:a,src:i,style:r}):(0,t.jsx)(Y.Z,{className:a,style:r,children:i})}),Ze=(0,x.memo)(function(e){var i=e.style,a=e.className,m=e.row,r=e.column,s=e.description,g=e.image,u=e.title,v=e.link,f=e.icon,b=e.imageStyle,j=e.openExternal,O=(0,y.Z)(e,Ce),Z=m||7,E=je({hasLink:!!v,rowNum:Z}),p=E.styles,T=E.cx;return(0,t.jsx)("div",(0,l.Z)((0,l.Z)({className:T(p.container,a),style:(0,l.Z)({gridColumn:"span ".concat(r||1),gridRow:"span ".concat(Z)},i)},O),{},{children:(0,t.jsxs)("div",{className:p.cell,children:[g||f&&(0,t.jsxs)(Y.Z,{className:p.imgContainer,style:b,children:[f&&(0,t.jsx)(fe.Z,{className:p.img,icon:f}),g&&(0,t.jsx)(Oe,{className:p.img,image:g,title:u})]}),u&&(0,t.jsx)(o.D,{align:"center",as:"h3",className:p.title,gap:8,horizontal:!0,children:u}),s&&(0,t.jsx)("p",{className:p.desc,dangerouslySetInnerHTML:{__html:s}}),v&&(0,t.jsx)("div",{className:p.link,children:(0,t.jsx)(ye.Z,{href:v,rel:"noreferrer",target:j?"_blank":void 0,children:"Read More"})})]})}))}),Ee=Ze,Ne=["items","className","itemClassName","itemStyle","maxWidth","style"],Ie=(0,x.memo)(function(e){var i=e.items,a=e.className,m=e.itemClassName,r=e.itemStyle,s=e.maxWidth,g=s===void 0?960:s,u=e.style,v=(0,y.Z)(e,Ne);if(i!=null&&i.length)return(0,t.jsx)(ge,(0,l.Z)({className:a,items:i,renderItem:function(b){return(0,t.jsx)(Ee,(0,l.Z)({className:m,style:r},b),b.title)},style:(0,l.Z)({maxWidth:g},u)},v))}),Pe=Ie},29517:function(w,C,n){var l=n(51151),y=n(12027),x=n(50959),W=n(79412),d=n(11527),I=["unoptimized"],z=function(P){return(0,x.forwardRef)(function(c,h){return(0,x.createElement)(P,(0,y.Z)((0,y.Z)({},c),{},{ref:h}))})},S=(0,x.forwardRef)(function(N,P){var c=N.unoptimized,h=(0,l.Z)(N,I),o=(0,x.useContext)(W.E_),t=(o==null?void 0:o.imgAs)||"img",D=(0,x.useMemo)(function(){return z(t)},[t]);return(0,d.jsx)(D,(0,y.Z)({ref:P,unoptimized:c===void 0?o==null?void 0:o.imgUnoptimized:c},h))});C.Z=S},38804:function(w,C,n){n.d(C,{Z:function(){return y}});var l=n(11011);const y=(0,l.Z)("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]])},4010:function(w,C,n){n.d(C,{Z:function(){return y}});var l=n(11011);const y=(0,l.Z)("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]])},81057:function(w,C,n){var l=n(25940),y=n(48385),x=n(98833),W=n(79086),d=n(50959),I=n(11527),z=["children","className","prefixCls"];function S(c,h){var o=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);h&&(t=t.filter(function(D){return Object.getOwnPropertyDescriptor(c,D).enumerable})),o.push.apply(o,t)}return o}function N(c){for(var h=1;h<arguments.length;h++){var o=arguments[h]!=null?arguments[h]:{};h%2?S(Object(o),!0).forEach(function(t){(0,l.Z)(c,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach(function(t){Object.defineProperty(c,t,Object.getOwnPropertyDescriptor(o,t))})}return c}var P=(0,d.forwardRef)(function(c,h){var o=c.children,t=c.className,D=c.prefixCls,L=(0,y.Z)(c,z);return(0,I.jsx)(x.Z,N(N({ref:h,internalClassName:"".concat((0,W.Gn)(D),"-center"),className:t},L),{},{align:"center",justify:"center",children:o}))});C.Z=P}}]);
