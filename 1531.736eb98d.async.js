"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1531],{3214:function(W,j,n){n.d(j,{Z:function(){return Pe}});var o=n(12027),p=n(51151),h=n(50959),z=n(43773),d=n(88829),I=n(4377),k=n(33918),D=n(56052),N=n(13795),P="[object String]";function c(e){return typeof e=="string"||!(0,D.Z)(e)&&(0,N.Z)(e)&&(0,k.Z)(e)==P}var g=c,l=n(33743),t=n(11527),M=["className","gap","rows","children","maxItemWidth"],L,ce=(0,I.kc)(function(e,i){var a=e.css,m=i.rows,r=i.maxItemWidth,s=i.gap;return{container:a(L||(L=(0,d.Z)([`
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
      `])),m,g(r)?r:"".concat(r,"px"),g(s)?s:"".concat(s,"px"))}}),de=(0,h.forwardRef)(function(e,i){var a=e.className,m=e.gap,r=m===void 0?"1em":m,s=e.rows,y=s===void 0?3:s,u=e.children,v=e.maxItemWidth,f=v===void 0?240:v,b=(0,p.Z)(e,M),O=ce({gap:r,maxItemWidth:f,rows:y}),C=O.cx,Z=O.styles;return(0,t.jsx)(l.D,(0,o.Z)((0,o.Z)({className:C(Z.container,a),gap:r,ref:i},b),{},{children:u}))}),me=de,A=n(87859),F,$,H,G,U="hover-card",V=(0,I.kc)(function(e,i){var a=e.css,m=e.responsive,r=e.token,s=e.isDarkMode,y=i.size,u=i.borderRadius;return{container:a(F||(F=(0,d.Z)([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),U),content:a($||($=(0,d.Z)([`
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
    `])),(0,A.m4)(r.colorBorderSecondary,.75),u,y,(0,A.m4)(r.colorTextBase,s?.06:.02),y*.75,(0,A.m4)(r.colorTextBase,s?.4:.2))}}),ue=["children","className","style","borderRadius","size"],ve=(0,h.memo)(function(e){var i=e.children,a=e.className,m=e.style,r=e.borderRadius,s=e.size,y=(0,p.Z)(e,ue),u=V({borderRadius:r,size:s}),v=u.styles,f=u.cx;return(0,t.jsx)(l.D,(0,o.Z)((0,o.Z)({className:f(v.itemContainer,a),style:(0,o.Z)({borderRadius:r},m)},y),{},{children:(0,t.jsx)(l.D,{className:v.content,children:i})}))}),pe=ve,xe=["items","renderItem","maxItemWidth","className","columns","gap","style","size","borderRadius","spotlight"],he=(0,h.memo)(function(e){var i=e.items,a=e.renderItem,m=e.maxItemWidth,r=e.className,s=e.columns,y=s===void 0?3:s,u=e.gap,v=u===void 0?"1em":u,f=e.style,b=e.size,O=b===void 0?800:b,C=e.borderRadius,Z=C===void 0?12:C,E=e.spotlight,x=E===void 0?!0:E,w=(0,p.Z)(e,xe),S=V({borderRadius:Z,size:O}),ie=S.styles,Me=S.cx,T=(0,h.useRef)(null);return(0,h.useEffect)(function(){if(T.current&&x){var _=function(se){var B=(0,z.Z)(document.querySelectorAll(".".concat(U))),oe;try{for(B.s();!(oe=B.n()).done;){var K=oe.value,le=K.getBoundingClientRect(),De=se.clientX-le.left,Se=se.clientY-le.top;K.style.setProperty("--mouse-x","".concat(De,"px")),K.style.setProperty("--mouse-y","".concat(Se,"px"))}}catch(Re){B.e(Re)}finally{B.f()}};return T.current.addEventListener("mousemove",_),function(){var R;(R=T.current)===null||R===void 0||R.removeEventListener("mousemove",_)}}},[]),(0,t.jsx)(me,(0,o.Z)((0,o.Z)({className:Me(ie.container,ie.grid,r),gap:v,maxItemWidth:m,ref:T,rows:y,style:f},w),{},{children:i.map(function(_,R){return(0,t.jsx)(pe,{borderRadius:Z,className:U,size:O,children:(0,t.jsx)(a,(0,o.Z)({},_))},R)})}))}),ge=he,X=n(67269),ye=n(92635),fe=n(244),be=n(29517),Y,J,Q,q,ee,ne,te,re,ae,je=(0,I.kc)(function(e,i){var a=e.token,m=e.prefixCls,r=e.css,s=e.cx,y=i.rowNum,u=i.hasLink,v="".concat(m,"-features"),f="".concat(v,"-cover"),b="".concat(v,"-description"),O="".concat(v,"-title"),C="".concat(v,"-img"),Z=20,E=function(S){return r(Y||(Y=(0,d.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),S,S,S*(22/24))},x=r(J||(J=(0,d.Z)([`
      transition: all `," ",`;
    `])),a.motionDurationSlow,a.motionEaseInOutCirc);return{cell:r(Q||(Q=(0,d.Z)([`
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
      `])),x,f,Z*y,a.colorFillContent,C,E(100),b,O,u?14:20),desc:s(b,x,r(ee||(ee=(0,d.Z)([`
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
        `])),a.colorTextSecondary,a.colorTextDescription)),img:s(C,x,r(ne||(ne=(0,d.Z)([`
          `,`;
          color: `,`;
        `])),E(20),a.colorText)),imgContainer:s(f,x,r(te||(te=(0,d.Z)([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),E(24),a.borderRadius)),link:r(re||(re=(0,d.Z)([`
        `,`;
        margin-block-start: 24px;
      `])),x),title:s(O,x,r(ae||(ae=(0,d.Z)([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),a.lineHeightHeading3,a.colorText))}}),Oe=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"],Ce=(0,h.memo)(function(e){var i=e.image,a=e.className,m=e.title,r=e.style;return i.startsWith("http")?(0,t.jsx)(be.Z,{alt:m,className:a,src:i,style:r}):(0,t.jsx)(X.Z,{className:a,style:r,children:i})}),Ze=(0,h.memo)(function(e){var i=e.style,a=e.className,m=e.row,r=e.column,s=e.description,y=e.image,u=e.title,v=e.link,f=e.icon,b=e.imageStyle,O=e.openExternal,C=(0,p.Z)(e,Oe),Z=m||7,E=je({hasLink:!!v,rowNum:Z}),x=E.styles,w=E.cx;return(0,t.jsx)("div",(0,o.Z)((0,o.Z)({className:w(x.container,a),style:(0,o.Z)({gridColumn:"span ".concat(r||1),gridRow:"span ".concat(Z)},i)},C),{},{children:(0,t.jsxs)("div",{className:x.cell,children:[y||f&&(0,t.jsxs)(X.Z,{className:x.imgContainer,style:b,children:[f&&(0,t.jsx)(fe.Z,{className:x.img,icon:f}),y&&(0,t.jsx)(Ce,{className:x.img,image:y,title:u})]}),u&&(0,t.jsx)(l.D,{align:"center",as:"h3",className:x.title,gap:8,horizontal:!0,children:u}),s&&(0,t.jsx)("p",{className:x.desc,dangerouslySetInnerHTML:{__html:s}}),v&&(0,t.jsx)("div",{className:x.link,children:(0,t.jsx)(ye.Z,{href:v,rel:"noreferrer",target:O?"_blank":void 0,children:"Read More"})})]})}))}),Ee=Ze,Ne=["items","className","itemClassName","itemStyle","maxWidth","style"],Ie=(0,h.memo)(function(e){var i=e.items,a=e.className,m=e.itemClassName,r=e.itemStyle,s=e.maxWidth,y=s===void 0?960:s,u=e.style,v=(0,p.Z)(e,Ne);if(i!=null&&i.length)return(0,t.jsx)(ge,(0,o.Z)({className:a,items:i,renderItem:function(b){return(0,t.jsx)(Ee,(0,o.Z)({className:m,style:r},b),b.title)},style:(0,o.Z)({maxWidth:y},u)},v))}),Pe=Ie},29517:function(W,j,n){var o=n(51151),p=n(12027),h=n(50959),z=n(79412),d=n(11527),I=["unoptimized"],k=function(P){return(0,h.forwardRef)(function(c,g){return(0,h.createElement)(P,(0,p.Z)((0,p.Z)({},c),{},{ref:g}))})},D=(0,h.forwardRef)(function(N,P){var c=N.unoptimized,g=(0,o.Z)(N,I),l=(0,h.useContext)(z.E_),t=(l==null?void 0:l.imgAs)||"img",M=(0,h.useMemo)(function(){return k(t)},[t]);return(0,d.jsx)(M,(0,p.Z)({ref:P,unoptimized:c===void 0?l==null?void 0:l.imgUnoptimized:c},g))});j.Z=D},38804:function(W,j,n){n.d(j,{Z:function(){return p}});var o=n(11011);const p=(0,o.Z)("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]])},4010:function(W,j,n){n.d(j,{Z:function(){return p}});var o=n(11011);const p=(0,o.Z)("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]])},67744:function(W,j,n){n.d(j,{Z:function(){return p}});var o=n(11011);const p=(0,o.Z)("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]])},81057:function(W,j,n){var o=n(25940),p=n(48385),h=n(98833),z=n(79086),d=n(50959),I=n(11527),k=["children","className","prefixCls"];function D(c,g){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);g&&(t=t.filter(function(M){return Object.getOwnPropertyDescriptor(c,M).enumerable})),l.push.apply(l,t)}return l}function N(c){for(var g=1;g<arguments.length;g++){var l=arguments[g]!=null?arguments[g]:{};g%2?D(Object(l),!0).forEach(function(t){(0,o.Z)(c,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):D(Object(l)).forEach(function(t){Object.defineProperty(c,t,Object.getOwnPropertyDescriptor(l,t))})}return c}var P=(0,d.forwardRef)(function(c,g){var l=c.children,t=c.className,M=c.prefixCls,L=(0,p.Z)(c,k);return(0,I.jsx)(h.Z,N(N({ref:g,internalClassName:"".concat((0,z.Gn)(M),"-center"),className:t},L),{},{align:"center",justify:"center",children:l}))});j.Z=P}}]);
