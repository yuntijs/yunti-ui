"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[749],{83345:function(G,C,e){e.d(C,{Z:function(){return z}});var s=e(28484),x=e(46060),g=e(75271),Z=e(59296),D=e(55471),M=e(90142),b=e(94614),R=e(92277),y=e(82857),c=e(62504),a=e(92462),d,r,i,f,E,H,X,p,W,F=(0,a.kc)(function(n,u){var o=n.token,L=n.prefixCls,v=n.css,O=n.cx,T=u.rowNum,B=u.hasLink,P="".concat(L,"-features"),K="".concat(P,"-cover"),A="".concat(P,"-description"),$="".concat(P,"-title"),Y="".concat(P,"-img"),w=20,S=function(k){return v(d||(d=(0,c.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),k,k,k*(22/24))},l=v(r||(r=(0,c.Z)([`
      transition: all `," ",`;
    `])),o.motionDurationSlow,o.motionEaseInOutCirc);return{cell:v(i||(i=(0,c.Z)([`
        overflow: hidden;
      `]))),container:v(f||(f=(0,c.Z)([`
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
      `])),l,K,w*T,o.colorFillContent,Y,S(100),A,$,B?14:20),desc:O(A,l,v(E||(E=(0,c.Z)([`
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
        `])),o.colorTextSecondary,o.colorTextDescription)),img:O(Y,l,v(H||(H=(0,c.Z)([`
          `,`;
          color: `,`;
        `])),S(20),o.colorText)),imgContainer:O(K,l,v(X||(X=(0,c.Z)([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),S(24),o.borderRadius)),link:v(p||(p=(0,c.Z)([`
        `,`;
        margin-block-start: 24px;
      `])),l),title:O($,l,v(W||(W=(0,c.Z)([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),o.lineHeightHeading3,o.colorText))}}),m=e(52676),t=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"],h=(0,g.memo)(function(n){var u=n.image,o=n.className,L=n.title,v=n.style;return u.startsWith("http")?(0,m.jsx)(y.Z,{alt:L,className:o,src:u,style:v}):(0,m.jsx)(D.Z,{className:o,style:v,children:u})}),N=(0,g.memo)(function(n){var u=n.style,o=n.className,L=n.row,v=n.column,O=n.description,T=n.image,B=n.title,P=n.link,K=n.icon,A=n.imageStyle,$=n.openExternal,Y=(0,x.Z)(n,t),w=L||7,S=F({hasLink:!!P,rowNum:w}),l=S.styles,J=S.cx;return(0,m.jsx)("div",(0,s.Z)((0,s.Z)({className:J(l.container,o),style:(0,s.Z)({gridColumn:"span ".concat(v||1),gridRow:"span ".concat(w)},u)},Y),{},{children:(0,m.jsxs)("div",{className:l.cell,children:[T||K&&(0,m.jsxs)(D.Z,{className:l.imgContainer,style:A,children:[K&&(0,m.jsx)(R.Z,{className:l.img,icon:K}),T&&(0,m.jsx)(h,{className:l.img,image:T,title:B})]}),B&&(0,m.jsx)(M.D,{align:"center",as:"h3",className:l.title,gap:8,horizontal:!0,children:B}),O&&(0,m.jsx)("p",{className:l.desc,dangerouslySetInnerHTML:{__html:O}}),P&&(0,m.jsx)("div",{className:l.link,children:(0,m.jsx)(b.Z,{href:P,rel:"noreferrer",target:$?"_blank":void 0,children:"Read More"})})]})}))}),U=N,j=["items","className","itemClassName","itemStyle","maxWidth","style"],I=(0,g.memo)(function(n){var u=n.items,o=n.className,L=n.itemClassName,v=n.itemStyle,O=n.maxWidth,T=O===void 0?960:O,B=n.style,P=(0,x.Z)(n,j);if(u!=null&&u.length)return(0,m.jsx)(Z.Z,(0,s.Z)({className:o,items:u,renderItem:function(A){return(0,m.jsx)(U,(0,s.Z)({className:L,style:v},A),A.title)},style:(0,s.Z)({maxWidth:T},B)},P))}),z=I},54030:function(G,C,e){e.d(C,{Z:function(){return X}});var s=e(28484),x=e(46060),g=e(62504),Z=e(92462),D=e(33918),M=e(56052),b=e(13795),R="[object String]";function y(p){return typeof p=="string"||!(0,M.Z)(p)&&(0,b.Z)(p)&&(0,D.Z)(p)==R}var c=y,a=e(75271),d=e(90142),r=e(52676),i=["className","gap","rows","children","maxItemWidth"],f,E=(0,Z.kc)(function(p,W){var F=p.css,m=W.rows,t=W.maxItemWidth,h=W.gap;return{container:F(f||(f=(0,g.Z)([`
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
      `])),m,c(t)?t:"".concat(t,"px"),c(h)?h:"".concat(h,"px"))}}),H=(0,a.forwardRef)(function(p,W){var F=p.className,m=p.gap,t=m===void 0?"1em":m,h=p.rows,N=h===void 0?3:h,U=p.children,j=p.maxItemWidth,I=j===void 0?240:j,z=(0,x.Z)(p,i),n=E({gap:t,maxItemWidth:I,rows:N}),u=n.cx,o=n.styles;return(0,r.jsx)(d.D,(0,s.Z)((0,s.Z)({className:u(o.container,F),gap:t,ref:W},z),{},{children:U}))}),X=H},82857:function(G,C,e){var s=e(46060),x=e(28484),g=e(75271),Z=e(19634),D=e(52676),M=["unoptimized"],b=function(c){return(0,g.forwardRef)(function(a,d){return(0,g.createElement)(c,(0,x.Z)((0,x.Z)({},a),{},{ref:d}))})},R=(0,g.forwardRef)(function(y,c){var a=y.unoptimized,d=(0,s.Z)(y,M),r=(0,g.useContext)(Z.E_),i=(r==null?void 0:r.imgAs)||"img",f=(0,g.useMemo)(function(){return b(i)},[i]);return(0,D.jsx)(f,(0,x.Z)({ref:c,unoptimized:a===void 0?r==null?void 0:r.imgUnoptimized:a},d))});C.Z=R},59296:function(G,C,e){e.d(C,{Z:function(){return m}});var s=e(28484),x=e(5552),g=e(46060),Z=e(75271),D=e(54030),M=e(90142),b=e(62504),R=e(92462),y=e(31573),c,a,d,r,i="hover-card",f=(0,R.kc)(function(t,h){var N=t.css,U=t.responsive,j=t.token,I=t.isDarkMode,z=h.size,n=h.borderRadius;return{container:N(c||(c=(0,b.Z)([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),i),content:N(a||(a=(0,b.Z)([`
      z-index: 2;

      flex-grow: 1;

      height: 100%;
      margin: 1px;

      background: `,`;
      border-radius: `,`px;
    `])),j.colorBgContainer,n-1),grid:N(d||(d=(0,b.Z)([`
      display: grid;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),U.mobile),itemContainer:N(r||(r=(0,b.Z)([`
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
    `])),(0,y.m4)(j.colorBorderSecondary,.75),n,z,(0,y.m4)(j.colorTextBase,I?.06:.02),z*.75,(0,y.m4)(j.colorTextBase,I?.4:.2))}}),E=e(52676),H=["children","className","style","borderRadius","size"],X=(0,Z.memo)(function(t){var h=t.children,N=t.className,U=t.style,j=t.borderRadius,I=t.size,z=(0,g.Z)(t,H),n=f({borderRadius:j,size:I}),u=n.styles,o=n.cx;return(0,E.jsx)(M.D,(0,s.Z)((0,s.Z)({className:o(u.itemContainer,N),style:(0,s.Z)({borderRadius:j},U)},z),{},{children:(0,E.jsx)(M.D,{className:u.content,children:h})}))}),p=X,W=["items","renderItem","maxItemWidth","className","columns","gap","style","size","borderRadius","spotlight"],F=(0,Z.memo)(function(t){var h=t.items,N=t.renderItem,U=t.maxItemWidth,j=t.className,I=t.columns,z=I===void 0?3:I,n=t.gap,u=n===void 0?"1em":n,o=t.style,L=t.size,v=L===void 0?800:L,O=t.borderRadius,T=O===void 0?12:O,B=t.spotlight,P=B===void 0?!0:B,K=(0,g.Z)(t,W),A=f({borderRadius:T,size:v}),$=A.styles,Y=A.cx,w=(0,Z.useRef)(null);return(0,Z.useEffect)(function(){if(w.current&&P){var S=function(J){var k=(0,x.Z)(document.querySelectorAll(".".concat(i))),V;try{for(k.s();!(V=k.n()).done;){var Q=V.value,q=Q.getBoundingClientRect(),_=J.clientX-q.left,ee=J.clientY-q.top;Q.style.setProperty("--mouse-x","".concat(_,"px")),Q.style.setProperty("--mouse-y","".concat(ee,"px"))}}catch(ne){k.e(ne)}finally{k.f()}};return w.current.addEventListener("mousemove",S),function(){var l;(l=w.current)===null||l===void 0||l.removeEventListener("mousemove",S)}}},[]),(0,E.jsx)(D.Z,(0,s.Z)((0,s.Z)({className:Y($.container,$.grid,j),gap:u,maxItemWidth:U,ref:w,rows:z,style:o},K),{},{children:h.map(function(S,l){return(0,E.jsx)(p,{borderRadius:T,className:i,size:v,children:(0,E.jsx)(N,(0,s.Z)({},S))},l)})}))}),m=F},39779:function(G,C,e){e.d(C,{Z:function(){return x}});var s=e(93279);const x=(0,s.Z)("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]])},17155:function(G,C,e){e.d(C,{Z:function(){return x}});var s=e(93279);const x=(0,s.Z)("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]])},55471:function(G,C,e){var s=e(55250),x=e(46060),g=e(47981),Z=e(26325),D=e(75271),M=e(52676),b=["children","className","prefixCls"];function R(a,d){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);d&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),r.push.apply(r,i)}return r}function y(a){for(var d=1;d<arguments.length;d++){var r=arguments[d]!=null?arguments[d]:{};d%2?R(Object(r),!0).forEach(function(i){(0,s.Z)(a,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(r,i))})}return a}var c=(0,D.forwardRef)(function(a,d){var r=a.children,i=a.className,f=a.prefixCls,E=(0,x.Z)(a,b);return(0,M.jsx)(g.Z,y(y({ref:d,internalClassName:"".concat((0,Z.Gn)(f),"-center"),className:i},E),{},{align:"center",justify:"center",children:r}))});C.Z=c}}]);
