!(function(){"use strict";var mt=Object.defineProperty,gt=Object.defineProperties;var ht=Object.getOwnPropertyDescriptors;var at=Object.getOwnPropertySymbols;var ft=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var ut=(z,k,p)=>k in z?mt(z,k,{enumerable:!0,configurable:!0,writable:!0,value:p}):z[k]=p,I=(z,k)=>{for(var p in k||(k={}))ft.call(k,p)&&ut(z,p,k[p]);if(at)for(var p of at(k))dt.call(k,p)&&ut(z,p,k[p]);return z},J=(z,k)=>gt(z,ht(k));var lt=(z,k)=>{var p={};for(var r in z)ft.call(z,r)&&k.indexOf(r)<0&&(p[r]=z[r]);if(z!=null&&at)for(var r of at(z))k.indexOf(r)<0&&dt.call(z,r)&&(p[r]=z[r]);return p};var rt=(z,k,p)=>new Promise((r,M)=>{var a=W=>{try{N(p.next(W))}catch(H){M(H)}},B=W=>{try{N(p.throw(W))}catch(H){M(H)}},N=W=>W.done?r(W.value):Promise.resolve(W.value).then(a,B);N((p=p.apply(z,k)).next())});(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1123],{8995:function(z,k,p){p.d(k,{Z:function(){return R}});var r=p(12027),M=p(51151),a=p(50959),B=p(62213),N=p(67269),W=p(33743),H=p(70107),G=p(84605),Y=p(11644),j=p(88829),$=p(26254),V,K,Q,nt,q,it,ot,b,c,l=(0,$.kc)(function(h,t){var e=h.token,n=h.prefixCls,o=h.css,d=h.cx,x=t.rowNum,g=t.hasLink,y="".concat(n,"-features"),v="".concat(y,"-cover"),w="".concat(y,"-description"),O="".concat(y,"-title"),S="".concat(y,"-img"),L=20,A=function(T){return o(V||(V=(0,j.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),T,T,T*(22/24))},P=o(K||(K=(0,j.Z)([`
      transition: all `," ",`;
    `])),e.motionDurationSlow,e.motionEaseInOutCirc);return{cell:o(Q||(Q=(0,j.Z)([`
        overflow: hidden;
      `]))),container:o(nt||(nt=(0,j.Z)([`
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
      `])),P,v,L*x,e.colorFillContent,S,A(100),w,O,g?14:20),desc:d(w,P,o(q||(q=(0,j.Z)([`
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
        `])),e.colorTextSecondary,e.colorTextDescription)),img:d(S,P,o(it||(it=(0,j.Z)([`
          `,`;
          color: `,`;
        `])),A(20),e.colorText)),imgContainer:d(v,P,o(ot||(ot=(0,j.Z)([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),A(24),e.borderRadius)),link:o(b||(b=(0,j.Z)([`
        `,`;
        margin-block-start: 24px;
      `])),P),title:d(O,P,o(c||(c=(0,j.Z)([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),e.lineHeightHeading3,e.colorText))}}),i=p(11527),s=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"],f=(0,a.memo)(function(h){var t=h.image,e=h.className,n=h.title,o=h.style;return t.startsWith("http")?(0,i.jsx)(Y.Z,{alt:n,className:e,src:t,style:o}):(0,i.jsx)(N.Z,{className:e,style:o,children:t})}),m=(0,a.memo)(function(h){var t=h.style,e=h.className,n=h.row,o=h.column,d=h.description,x=h.image,g=h.title,y=h.link,v=h.icon,w=h.imageStyle,O=h.openExternal,S=(0,M.Z)(h,s),L=n||7,A=l({hasLink:!!y,rowNum:L}),P=A.styles,Z=A.cx;return(0,i.jsx)("div",(0,r.Z)((0,r.Z)({className:Z(P.container,e),style:(0,r.Z)({gridColumn:"span ".concat(o||1),gridRow:"span ".concat(L)},t)},S),{},{children:(0,i.jsxs)("div",{className:P.cell,children:[x||v&&(0,i.jsxs)(N.Z,{className:P.imgContainer,style:w,children:[v&&(0,i.jsx)(G.Z,{className:P.img,icon:v}),x&&(0,i.jsx)(f,{className:P.img,image:x,title:g})]}),g&&(0,i.jsx)(W.D,{align:"center",as:"h3",className:P.title,gap:8,horizontal:!0,children:g}),d&&(0,i.jsx)("p",{className:P.desc,dangerouslySetInnerHTML:{__html:d}}),y&&(0,i.jsx)("div",{className:P.link,children:(0,i.jsx)(H.Z,{href:y,rel:"noreferrer",target:O?"_blank":void 0,children:"Read More"})})]})}))}),C=m,E=["items","className","itemClassName","itemStyle","maxWidth","style"],u=(0,a.memo)(function(h){var t=h.items,e=h.className,n=h.itemClassName,o=h.itemStyle,d=h.maxWidth,x=d===void 0?960:d,g=h.style,y=(0,M.Z)(h,E);if(t!=null&&t.length)return(0,i.jsx)(B.Z,(0,r.Z)({className:e,items:t,renderItem:function(w){return(0,i.jsx)(C,(0,r.Z)({className:n,style:o},w),w.title)},style:(0,r.Z)({maxWidth:x},g)},y))}),R=u},37827:function(z,k,p){p.d(k,{Z:function(){return ot}});var r=p(12027),M=p(51151),a=p(88829),B=p(26254),N=p(33918),W=p(56052),H=p(13795),G="[object String]";function Y(b){return typeof b=="string"||!(0,W.Z)(b)&&(0,H.Z)(b)&&(0,N.Z)(b)==G}var j=Y,$=p(50959),V=p(33743),K=p(11527),Q=["className","gap","rows","children","maxItemWidth"],nt,q=(0,B.kc)(function(b,c){var l=b.css,i=c.rows,s=c.maxItemWidth,f=c.gap;return{container:l(nt||(nt=(0,a.Z)([`
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
      `])),i,j(s)?s:"".concat(s,"px"),j(f)?f:"".concat(f,"px"))}}),it=(0,$.forwardRef)(function(b,c){var l=b.className,i=b.gap,s=i===void 0?"1em":i,f=b.rows,m=f===void 0?3:f,C=b.children,E=b.maxItemWidth,u=E===void 0?240:E,R=(0,M.Z)(b,Q),h=q({gap:s,maxItemWidth:u,rows:m}),t=h.cx,e=h.styles;return(0,K.jsx)(V.D,(0,r.Z)((0,r.Z)({className:t(e.container,l),gap:s,ref:c},R),{},{children:C}))}),ot=it},11644:function(z,k,p){var r=p(51151),M=p(12027),a=p(50959),B=p(6530),N=p(11527),W=["unoptimized"],H=function(j){return(0,a.forwardRef)(function($,V){return(0,a.createElement)(j,(0,M.Z)((0,M.Z)({},$),{},{ref:V}))})},G=(0,a.forwardRef)(function(Y,j){var $=Y.unoptimized,V=(0,r.Z)(Y,W),K=(0,a.useContext)(B.E_),Q=(K==null?void 0:K.imgAs)||"img",nt=(0,a.useMemo)(function(){return H(Q)},[Q]);return(0,N.jsx)(nt,(0,M.Z)({ref:j,unoptimized:$===void 0?K==null?void 0:K.imgUnoptimized:$},V))});k.Z=G},62213:function(z,k,p){p.d(k,{Z:function(){return i}});var r=p(12027),M=p(43773),a=p(51151),B=p(50959),N=p(37827),W=p(33743),H=p(88829),G=p(26254),Y=p(24151),j,$,V,K,Q="hover-card",nt=(0,G.kc)(function(s,f){var m=s.css,C=s.responsive,E=s.token,u=s.isDarkMode,R=f.size,h=f.borderRadius;return{container:m(j||(j=(0,H.Z)([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),Q),content:m($||($=(0,H.Z)([`
      z-index: 2;

      flex-grow: 1;

      height: 100%;
      margin: 1px;

      background: `,`;
      border-radius: `,`px;
    `])),E.colorBgContainer,h-1),grid:m(V||(V=(0,H.Z)([`
      display: grid;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),C.mobile),itemContainer:m(K||(K=(0,H.Z)([`
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
    `])),(0,Y.m4)(E.colorBorderSecondary,.75),h,R,(0,Y.m4)(E.colorTextBase,u?.06:.02),R*.75,(0,Y.m4)(E.colorTextBase,u?.4:.2))}}),q=p(11527),it=["children","className","style","borderRadius","size"],ot=(0,B.memo)(function(s){var f=s.children,m=s.className,C=s.style,E=s.borderRadius,u=s.size,R=(0,a.Z)(s,it),h=nt({borderRadius:E,size:u}),t=h.styles,e=h.cx;return(0,q.jsx)(W.D,(0,r.Z)((0,r.Z)({className:e(t.itemContainer,m),style:(0,r.Z)({borderRadius:E},C)},R),{},{children:(0,q.jsx)(W.D,{className:t.content,children:f})}))}),b=ot,c=["items","renderItem","maxItemWidth","className","columns","gap","style","size","borderRadius","spotlight"],l=(0,B.memo)(function(s){var f=s.items,m=s.renderItem,C=s.maxItemWidth,E=s.className,u=s.columns,R=u===void 0?3:u,h=s.gap,t=h===void 0?"1em":h,e=s.style,n=s.size,o=n===void 0?800:n,d=s.borderRadius,x=d===void 0?12:d,g=s.spotlight,y=g===void 0?!0:g,v=(0,a.Z)(s,c),w=nt({borderRadius:x,size:o}),O=w.styles,S=w.cx,L=(0,B.useRef)(null);return(0,B.useEffect)(function(){if(L.current&&y){var A=function(Z){var T=(0,M.Z)(document.querySelectorAll(".".concat(Q))),D;try{for(T.s();!(D=T.n()).done;){var F=D.value,U=F.getBoundingClientRect(),tt=Z.clientX-U.left,X=Z.clientY-U.top;F.style.setProperty("--mouse-x","".concat(tt,"px")),F.style.setProperty("--mouse-y","".concat(X,"px"))}}catch(et){T.e(et)}finally{T.f()}};return L.current.addEventListener("mousemove",A),function(){var P;(P=L.current)===null||P===void 0||P.removeEventListener("mousemove",A)}}},[]),(0,q.jsx)(N.Z,(0,r.Z)((0,r.Z)({className:S(O.container,O.grid,E),gap:t,maxItemWidth:C,ref:L,rows:R,style:e},v),{},{children:f.map(function(A,P){return(0,q.jsx)(b,{borderRadius:x,className:Q,size:o,children:(0,q.jsx)(m,(0,r.Z)({},A))},P)})}))}),i=l},38804:function(z,k,p){p.d(k,{Z:function(){return M}});var r=p(11011);const M=(0,r.Z)("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]])},4010:function(z,k,p){p.d(k,{Z:function(){return M}});var r=p(11011);const M=(0,r.Z)("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]])},67744:function(z,k,p){p.d(k,{Z:function(){return M}});var r=p(11011);const M=(0,r.Z)("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]])},43773:function(z,k,p){p.d(k,{Z:function(){return M}});var r=p(27930);function M(a,B){var N=typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(!N){if(Array.isArray(a)||(N=(0,r.Z)(a))||B&&a&&typeof a.length=="number"){N&&(a=N);var W=0,H=function(){};return{s:H,n:function(){return W>=a.length?{done:!0}:{done:!1,value:a[W++]}},e:function(V){throw V},f:H}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var G,Y=!0,j=!1;return{s:function(){N=N.call(a)},n:function(){var V=N.next();return Y=V.done,V},e:function(V){j=!0,G=V},f:function(){try{Y||N.return==null||N.return()}finally{if(j)throw G}}}}},65070:function(z,k,p){p.d(k,{Cp:function(){return $},RR:function(){return G},US:function(){return B},cv:function(){return q},dp:function(){return b},dr:function(){return ot},oo:function(){return a},uY:function(){return it},x7:function(){return N}});var r=p(29912);function M(c,l,i){let{reference:s,floating:f}=c;const m=(0,r.Qq)(l),C=(0,r.Wh)(l),E=(0,r.I4)(C),u=(0,r.k3)(l),R=m==="y",h=s.x+s.width/2-f.width/2,t=s.y+s.height/2-f.height/2,e=s[E]/2-f[E]/2;let n;switch(u){case"top":n={x:h,y:s.y-f.height};break;case"bottom":n={x:h,y:s.y+s.height};break;case"right":n={x:s.x+s.width,y:t};break;case"left":n={x:s.x-f.width,y:t};break;default:n={x:s.x,y:s.y}}switch((0,r.hp)(l)){case"start":n[C]-=e*(i&&R?-1:1);break;case"end":n[C]+=e*(i&&R?-1:1);break}return n}const a=(c,l,i)=>rt(this,null,function*(){const{placement:s="bottom",strategy:f="absolute",middleware:m=[],platform:C}=i,E=m.filter(Boolean),u=yield C.isRTL==null?void 0:C.isRTL(l);let R=yield C.getElementRects({reference:c,floating:l,strategy:f}),{x:h,y:t}=M(R,s,u),e=s,n={},o=0;for(let d=0;d<E.length;d++){const{name:x,fn:g}=E[d],{x:y,y:v,data:w,reset:O}=yield g({x:h,y:t,initialPlacement:s,placement:e,strategy:f,middlewareData:n,rects:R,platform:C,elements:{reference:c,floating:l}});if(h=y!=null?y:h,t=v!=null?v:t,n=J(I({},n),{[x]:I(I({},n[x]),w)}),O&&o<=50){o++,typeof O=="object"&&(O.placement&&(e=O.placement),O.rects&&(R=O.rects===!0?yield C.getElementRects({reference:c,floating:l,strategy:f}):O.rects),{x:h,y:t}=M(R,e,u)),d=-1;continue}}return{x:h,y:t,placement:e,strategy:f,middlewareData:n}});function B(c,l){return rt(this,null,function*(){var i;l===void 0&&(l={});const{x:s,y:f,platform:m,rects:C,elements:E,strategy:u}=c,{boundary:R="clippingAncestors",rootBoundary:h="viewport",elementContext:t="floating",altBoundary:e=!1,padding:n=0}=(0,r.ku)(l,c),o=(0,r.yd)(n),x=E[e?t==="floating"?"reference":"floating":t],g=(0,r.JB)(yield m.getClippingRect({element:(i=yield m.isElement==null?void 0:m.isElement(x))==null||i?x:x.contextElement||(yield m.getDocumentElement==null?void 0:m.getDocumentElement(E.floating)),boundary:R,rootBoundary:h,strategy:u})),y=t==="floating"?J(I({},C.floating),{x:s,y:f}):C.reference,v=yield m.getOffsetParent==null?void 0:m.getOffsetParent(E.floating),w=(yield m.isElement==null?void 0:m.isElement(v))?(yield m.getScale==null?void 0:m.getScale(v))||{x:1,y:1}:{x:1,y:1},O=(0,r.JB)(m.convertOffsetParentRelativeRectToViewportRelativeRect?yield m.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:v,strategy:u}):y);return{top:(g.top-O.top+o.top)/w.y,bottom:(O.bottom-g.bottom+o.bottom)/w.y,left:(g.left-O.left+o.left)/w.x,right:(O.right-g.right+o.right)/w.x}})}const N=c=>({name:"arrow",options:c,fn(i){return rt(this,null,function*(){const{x:s,y:f,placement:m,rects:C,platform:E,elements:u,middlewareData:R}=i,{element:h,padding:t=0}=(0,r.ku)(c,i)||{};if(h==null)return{};const e=(0,r.yd)(t),n={x:s,y:f},o=(0,r.Wh)(m),d=(0,r.I4)(o),x=yield E.getDimensions(h),g=o==="y",y=g?"top":"left",v=g?"bottom":"right",w=g?"clientHeight":"clientWidth",O=C.reference[d]+C.reference[o]-n[o]-C.floating[d],S=n[o]-C.reference[o],L=yield E.getOffsetParent==null?void 0:E.getOffsetParent(h);let A=L?L[w]:0;(!A||!(yield E.isElement==null?void 0:E.isElement(L)))&&(A=u.floating[w]||C.floating[d]);const P=O/2-S/2,Z=A/2-x[d]/2-1,T=(0,r.VV)(e[y],Z),D=(0,r.VV)(e[v],Z),F=T,U=A-x[d]-D,tt=A/2-x[d]/2+P,X=(0,r.uZ)(F,tt,U),et=!R.arrow&&(0,r.hp)(m)!=null&&tt!=X&&C.reference[d]/2-(tt<F?T:D)-x[d]/2<0,_=et?tt<F?tt-F:tt-U:0;return{[o]:n[o]+_,data:I({[o]:X,centerOffset:tt-X-_},et&&{alignmentOffset:_}),reset:et}})}});function W(c,l,i){return(c?[...i.filter(f=>getAlignment(f)===c),...i.filter(f=>getAlignment(f)!==c)]:i.filter(f=>getSide(f)===f)).filter(f=>c?getAlignment(f)===c||(l?getOppositeAlignmentPlacement(f)!==f:!1):!0)}const H=function(c){return c===void 0&&(c={}),{name:"autoPlacement",options:c,fn(i){return rt(this,null,function*(){var s,f,m;const{rects:C,middlewareData:E,placement:u,platform:R,elements:h}=i,T=evaluate(c,i),{crossAxis:t=!1,alignment:e,allowedPlacements:n=placements,autoAlignment:o=!0}=T,d=lt(T,["crossAxis","alignment","allowedPlacements","autoAlignment"]),x=e!==void 0||n===placements?W(e||null,o,n):n,g=yield B(i,d),y=((s=E.autoPlacement)==null?void 0:s.index)||0,v=x[y];if(v==null)return{};const w=getAlignmentSides(v,C,yield R.isRTL==null?void 0:R.isRTL(h.floating));if(u!==v)return{reset:{placement:x[0]}};const O=[g[getSide(v)],g[w[0]],g[w[1]]],S=[...((f=E.autoPlacement)==null?void 0:f.overflows)||[],{placement:v,overflows:O}],L=x[y+1];if(L)return{data:{index:y+1,overflows:S},reset:{placement:L}};const A=S.map(D=>{const F=getAlignment(D.placement);return[D.placement,F&&t?D.overflows.slice(0,2).reduce((U,tt)=>U+tt,0):D.overflows[0],D.overflows]}).sort((D,F)=>D[1]-F[1]),Z=((m=A.filter(D=>D[2].slice(0,getAlignment(D[0])?2:3).every(F=>F<=0))[0])==null?void 0:m[0])||A[0][0];return Z!==u?{data:{index:y+1,overflows:S},reset:{placement:Z}}:{}})}}},G=function(c){return c===void 0&&(c={}),{name:"flip",options:c,fn(i){return rt(this,null,function*(){var s,f;const{placement:m,middlewareData:C,rects:E,initialPlacement:u,platform:R,elements:h}=i,F=(0,r.ku)(c,i),{mainAxis:t=!0,crossAxis:e=!0,fallbackPlacements:n,fallbackStrategy:o="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:x=!0}=F,g=lt(F,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]);if((s=C.arrow)!=null&&s.alignmentOffset)return{};const y=(0,r.k3)(m),v=(0,r.k3)(u)===u,w=yield R.isRTL==null?void 0:R.isRTL(h.floating),O=n||(v||!x?[(0,r.pw)(u)]:(0,r.gy)(u));!n&&d!=="none"&&O.push(...(0,r.KX)(u,x,d,w));const S=[u,...O],L=yield B(i,g),A=[];let P=((f=C.flip)==null?void 0:f.overflows)||[];if(t&&A.push(L[y]),e){const U=(0,r.i8)(m,E,w);A.push(L[U[0]],L[U[1]])}if(P=[...P,{placement:m,overflows:A}],!A.every(U=>U<=0)){var Z,T;const U=(((Z=C.flip)==null?void 0:Z.index)||0)+1,tt=S[U];if(tt)return{data:{index:U,overflows:P},reset:{placement:tt}};let X=(T=P.filter(et=>et.overflows[0]<=0).sort((et,_)=>et.overflows[1]-_.overflows[1])[0])==null?void 0:T.placement;if(!X)switch(o){case"bestFit":{var D;const et=(D=P.map(_=>[_.placement,_.overflows.filter(st=>st>0).reduce((st,ct)=>st+ct,0)]).sort((_,st)=>_[1]-st[1])[0])==null?void 0:D[0];et&&(X=et);break}case"initialPlacement":X=u;break}if(m!==X)return{reset:{placement:X}}}return{}})}}};function Y(c,l){return{top:c.top-l.height,right:c.right-l.width,bottom:c.bottom-l.height,left:c.left-l.width}}function j(c){return r.mA.some(l=>c[l]>=0)}const $=function(c){return c===void 0&&(c={}),{name:"hide",options:c,fn(i){return rt(this,null,function*(){const{rects:s}=i,C=(0,r.ku)(c,i),{strategy:f="referenceHidden"}=C,m=lt(C,["strategy"]);switch(f){case"referenceHidden":{const E=yield B(i,J(I({},m),{elementContext:"reference"})),u=Y(E,s.reference);return{data:{referenceHiddenOffsets:u,referenceHidden:j(u)}}}case"escaped":{const E=yield B(i,J(I({},m),{altBoundary:!0})),u=Y(E,s.floating);return{data:{escapedOffsets:u,escaped:j(u)}}}default:return{}}})}}};function V(c){const l=min(...c.map(m=>m.left)),i=min(...c.map(m=>m.top)),s=max(...c.map(m=>m.right)),f=max(...c.map(m=>m.bottom));return{x:l,y:i,width:s-l,height:f-i}}function K(c){const l=c.slice().sort((f,m)=>f.y-m.y),i=[];let s=null;for(let f=0;f<l.length;f++){const m=l[f];!s||m.y-s.y>s.height/2?i.push([m]):i[i.length-1].push(m),s=m}return i.map(f=>rectToClientRect(V(f)))}const Q=function(c){return c===void 0&&(c={}),{name:"inline",options:c,fn(i){return rt(this,null,function*(){const{placement:s,elements:f,rects:m,platform:C,strategy:E}=i,{padding:u=2,x:R,y:h}=evaluate(c,i),t=Array.from((yield C.getClientRects==null?void 0:C.getClientRects(f.reference))||[]),e=K(t),n=rectToClientRect(V(t)),o=getPaddingObject(u);function d(){if(e.length===2&&e[0].left>e[1].right&&R!=null&&h!=null)return e.find(g=>R>g.left-o.left&&R<g.right+o.right&&h>g.top-o.top&&h<g.bottom+o.bottom)||n;if(e.length>=2){if(getSideAxis(s)==="y"){const T=e[0],D=e[e.length-1],F=getSide(s)==="top",U=T.top,tt=D.bottom,X=F?T.left:D.left,et=F?T.right:D.right,_=et-X,st=tt-U;return{top:U,bottom:tt,left:X,right:et,width:_,height:st,x:X,y:U}}const g=getSide(s)==="left",y=max(...e.map(T=>T.right)),v=min(...e.map(T=>T.left)),w=e.filter(T=>g?T.left===v:T.right===y),O=w[0].top,S=w[w.length-1].bottom,L=v,A=y,P=A-L,Z=S-O;return{top:O,bottom:S,left:L,right:A,width:P,height:Z,x:L,y:O}}return n}const x=yield C.getElementRects({reference:{getBoundingClientRect:d},floating:f.floating,strategy:E});return m.reference.x!==x.reference.x||m.reference.y!==x.reference.y||m.reference.width!==x.reference.width||m.reference.height!==x.reference.height?{reset:{rects:x}}:{}})}}};function nt(c,l){return rt(this,null,function*(){const{placement:i,platform:s,elements:f}=c,m=yield s.isRTL==null?void 0:s.isRTL(f.floating),C=(0,r.k3)(i),E=(0,r.hp)(i),u=(0,r.Qq)(i)==="y",R=["left","top"].includes(C)?-1:1,h=m&&u?-1:1,t=(0,r.ku)(l,c);let{mainAxis:e,crossAxis:n,alignmentAxis:o}=typeof t=="number"?{mainAxis:t,crossAxis:0,alignmentAxis:null}:I({mainAxis:0,crossAxis:0,alignmentAxis:null},t);return E&&typeof o=="number"&&(n=E==="end"?o*-1:o),u?{x:n*h,y:e*R}:{x:e*R,y:n*h}})}const q=function(c){return c===void 0&&(c=0),{name:"offset",options:c,fn(i){return rt(this,null,function*(){var s,f;const{x:m,y:C,placement:E,middlewareData:u}=i,R=yield nt(i,c);return E===((s=u.offset)==null?void 0:s.placement)&&(f=u.arrow)!=null&&f.alignmentOffset?{}:{x:m+R.x,y:C+R.y,data:J(I({},R),{placement:E})}})}}},it=function(c){return c===void 0&&(c={}),{name:"shift",options:c,fn(i){return rt(this,null,function*(){const{x:s,y:f,placement:m}=i,g=(0,r.ku)(c,i),{mainAxis:C=!0,crossAxis:E=!1,limiter:u={fn:y=>{let{x:v,y:w}=y;return{x:v,y:w}}}}=g,R=lt(g,["mainAxis","crossAxis","limiter"]),h={x:s,y:f},t=yield B(i,R),e=(0,r.Qq)((0,r.k3)(m)),n=(0,r.Rn)(e);let o=h[n],d=h[e];if(C){const y=n==="y"?"top":"left",v=n==="y"?"bottom":"right",w=o+t[y],O=o-t[v];o=(0,r.uZ)(w,o,O)}if(E){const y=e==="y"?"top":"left",v=e==="y"?"bottom":"right",w=d+t[y],O=d-t[v];d=(0,r.uZ)(w,d,O)}const x=u.fn(J(I({},i),{[n]:o,[e]:d}));return J(I({},x),{data:{x:x.x-s,y:x.y-f}})})}}},ot=function(c){return c===void 0&&(c={}),{options:c,fn(l){const{x:i,y:s,placement:f,rects:m,middlewareData:C}=l,{offset:E=0,mainAxis:u=!0,crossAxis:R=!0}=(0,r.ku)(c,l),h={x:i,y:s},t=(0,r.Qq)(f),e=(0,r.Rn)(t);let n=h[e],o=h[t];const d=(0,r.ku)(E,l),x=typeof d=="number"?{mainAxis:d,crossAxis:0}:I({mainAxis:0,crossAxis:0},d);if(u){const v=e==="y"?"height":"width",w=m.reference[e]-m.floating[v]+x.mainAxis,O=m.reference[e]+m.reference[v]-x.mainAxis;n<w?n=w:n>O&&(n=O)}if(R){var g,y;const v=e==="y"?"width":"height",w=["top","left"].includes((0,r.k3)(f)),O=m.reference[t]-m.floating[v]+(w&&((g=C.offset)==null?void 0:g[t])||0)+(w?0:x.crossAxis),S=m.reference[t]+m.reference[v]+(w?0:((y=C.offset)==null?void 0:y[t])||0)-(w?x.crossAxis:0);o<O?o=O:o>S&&(o=S)}return{[e]:n,[t]:o}}}},b=function(c){return c===void 0&&(c={}),{name:"size",options:c,fn(i){return rt(this,null,function*(){const{placement:s,rects:f,platform:m,elements:C}=i,L=(0,r.ku)(c,i),{apply:E=()=>{}}=L,u=lt(L,["apply"]),R=yield B(i,u),h=(0,r.k3)(s),t=(0,r.hp)(s),e=(0,r.Qq)(s)==="y",{width:n,height:o}=f.floating;let d,x;h==="top"||h==="bottom"?(d=h,x=t===((yield m.isRTL==null?void 0:m.isRTL(C.floating))?"start":"end")?"left":"right"):(x=h,d=t==="end"?"top":"bottom");const g=o-R[d],y=n-R[x],v=!i.middlewareData.shift;let w=g,O=y;if(e){const A=n-R.left-R.right;O=t||v?(0,r.VV)(y,A):A}else{const A=o-R.top-R.bottom;w=t||v?(0,r.VV)(g,A):A}if(v&&!t){const A=(0,r.Fp)(R.left,0),P=(0,r.Fp)(R.right,0),Z=(0,r.Fp)(R.top,0),T=(0,r.Fp)(R.bottom,0);e?O=n-2*(A!==0||P!==0?A+P:(0,r.Fp)(R.left,R.right)):w=o-2*(Z!==0||T!==0?Z+T:(0,r.Fp)(R.top,R.bottom))}yield E(J(I({},i),{availableWidth:O,availableHeight:w}));const S=yield m.getDimensions(C.floating);return n!==S.width||o!==S.height?{reset:{rects:!0}}:{}})}}}},49734:function(z,k,p){p.d(k,{Me:function(){return R},oo:function(){return h}});var r=p(29912),M=p(65070),a=p(43050);function B(t){const e=(0,a.Dx)(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const d=(0,a.Re)(t),x=d?t.offsetWidth:n,g=d?t.offsetHeight:o,y=(0,r.NM)(n)!==x||(0,r.NM)(o)!==g;return y&&(n=x,o=g),{width:n,height:o,$:y}}function N(t){return(0,a.kK)(t)?t:t.contextElement}function W(t){const e=N(t);if(!(0,a.Re)(e))return(0,r.ze)(1);const n=e.getBoundingClientRect(),{width:o,height:d,$:x}=B(e);let g=(x?(0,r.NM)(n.width):n.width)/o,y=(x?(0,r.NM)(n.height):n.height)/d;return(!g||!Number.isFinite(g))&&(g=1),(!y||!Number.isFinite(y))&&(y=1),{x:g,y}}const H=(0,r.ze)(0);function G(t){const e=(0,a.Jj)(t);return!(0,a.Pf)()||!e.visualViewport?H:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Y(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==(0,a.Jj)(t)?!1:e}function j(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const d=t.getBoundingClientRect(),x=N(t);let g=(0,r.ze)(1);e&&(o?(0,a.kK)(o)&&(g=W(o)):g=W(t));const y=Y(x,n,o)?G(x):(0,r.ze)(0);let v=(d.left+y.x)/g.x,w=(d.top+y.y)/g.y,O=d.width/g.x,S=d.height/g.y;if(x){const L=(0,a.Jj)(x),A=o&&(0,a.kK)(o)?(0,a.Jj)(o):o;let P=L.frameElement;for(;P&&o&&A!==L;){const Z=W(P),T=P.getBoundingClientRect(),D=(0,a.Dx)(P),F=T.left+(P.clientLeft+parseFloat(D.paddingLeft))*Z.x,U=T.top+(P.clientTop+parseFloat(D.paddingTop))*Z.y;v*=Z.x,w*=Z.y,O*=Z.x,S*=Z.y,v+=F,w+=U,P=(0,a.Jj)(P).frameElement}}return(0,r.JB)({width:O,height:S,x:v,y:w})}function $(t){let{rect:e,offsetParent:n,strategy:o}=t;const d=(0,a.Re)(n),x=(0,a.tF)(n);if(n===x)return e;let g={scrollLeft:0,scrollTop:0},y=(0,r.ze)(1);const v=(0,r.ze)(0);if((d||!d&&o!=="fixed")&&(((0,a.wk)(n)!=="body"||(0,a.ao)(x))&&(g=(0,a.Lw)(n)),(0,a.Re)(n))){const w=j(n);y=W(n),v.x=w.x+n.clientLeft,v.y=w.y+n.clientTop}return{width:e.width*y.x,height:e.height*y.y,x:e.x*y.x-g.scrollLeft*y.x+v.x,y:e.y*y.y-g.scrollTop*y.y+v.y}}function V(t){return Array.from(t.getClientRects())}function K(t){return j((0,a.tF)(t)).left+(0,a.Lw)(t).scrollLeft}function Q(t){const e=(0,a.tF)(t),n=(0,a.Lw)(t),o=t.ownerDocument.body,d=(0,r.Fp)(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),x=(0,r.Fp)(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let g=-n.scrollLeft+K(t);const y=-n.scrollTop;return(0,a.Dx)(o).direction==="rtl"&&(g+=(0,r.Fp)(e.clientWidth,o.clientWidth)-d),{width:d,height:x,x:g,y}}function nt(t,e){const n=(0,a.Jj)(t),o=(0,a.tF)(t),d=n.visualViewport;let x=o.clientWidth,g=o.clientHeight,y=0,v=0;if(d){x=d.width,g=d.height;const w=(0,a.Pf)();(!w||w&&e==="fixed")&&(y=d.offsetLeft,v=d.offsetTop)}return{width:x,height:g,x:y,y:v}}function q(t,e){const n=j(t,!0,e==="fixed"),o=n.top+t.clientTop,d=n.left+t.clientLeft,x=(0,a.Re)(t)?W(t):(0,r.ze)(1),g=t.clientWidth*x.x,y=t.clientHeight*x.y,v=d*x.x,w=o*x.y;return{width:g,height:y,x:v,y:w}}function it(t,e,n){let o;if(e==="viewport")o=nt(t,n);else if(e==="document")o=Q((0,a.tF)(t));else if((0,a.kK)(e))o=q(e,n);else{const d=G(t);o=J(I({},e),{x:e.x-d.x,y:e.y-d.y})}return(0,r.JB)(o)}function ot(t,e){const n=(0,a.Ow)(t);return n===e||!(0,a.kK)(n)||(0,a.Py)(n)?!1:(0,a.Dx)(n).position==="fixed"||ot(n,e)}function b(t,e){const n=e.get(t);if(n)return n;let o=(0,a.Kx)(t,[],!1).filter(y=>(0,a.kK)(y)&&(0,a.wk)(y)!=="body"),d=null;const x=(0,a.Dx)(t).position==="fixed";let g=x?(0,a.Ow)(t):t;for(;(0,a.kK)(g)&&!(0,a.Py)(g);){const y=(0,a.Dx)(g),v=(0,a.hT)(g);!v&&y.position==="fixed"&&(d=null),(x?!v&&!d:!v&&y.position==="static"&&!!d&&["absolute","fixed"].includes(d.position)||(0,a.ao)(g)&&!v&&ot(t,g))?o=o.filter(O=>O!==g):d=y,g=(0,a.Ow)(g)}return e.set(t,o),o}function c(t){let{element:e,boundary:n,rootBoundary:o,strategy:d}=t;const g=[...n==="clippingAncestors"?b(e,this._c):[].concat(n),o],y=g[0],v=g.reduce((w,O)=>{const S=it(e,O,d);return w.top=(0,r.Fp)(S.top,w.top),w.right=(0,r.VV)(S.right,w.right),w.bottom=(0,r.VV)(S.bottom,w.bottom),w.left=(0,r.Fp)(S.left,w.left),w},it(e,y,d));return{width:v.right-v.left,height:v.bottom-v.top,x:v.left,y:v.top}}function l(t){return B(t)}function i(t,e,n){const o=(0,a.Re)(e),d=(0,a.tF)(e),x=n==="fixed",g=j(t,!0,x,e);let y={scrollLeft:0,scrollTop:0};const v=(0,r.ze)(0);if(o||!o&&!x)if(((0,a.wk)(e)!=="body"||(0,a.ao)(d))&&(y=(0,a.Lw)(e)),o){const w=j(e,!0,x,e);v.x=w.x+e.clientLeft,v.y=w.y+e.clientTop}else d&&(v.x=K(d));return{x:g.left+y.scrollLeft-v.x,y:g.top+y.scrollTop-v.y,width:g.width,height:g.height}}function s(t,e){return!(0,a.Re)(t)||(0,a.Dx)(t).position==="fixed"?null:e?e(t):t.offsetParent}function f(t,e){const n=(0,a.Jj)(t);if(!(0,a.Re)(t))return n;let o=s(t,e);for(;o&&(0,a.Ze)(o)&&(0,a.Dx)(o).position==="static";)o=s(o,e);return o&&((0,a.wk)(o)==="html"||(0,a.wk)(o)==="body"&&(0,a.Dx)(o).position==="static"&&!(0,a.hT)(o))?n:o||(0,a.gQ)(t)||n}const m=function(t){return rt(this,null,function*(){let{reference:e,floating:n,strategy:o}=t;const d=this.getOffsetParent||f,x=this.getDimensions;return{reference:i(e,yield d(n),o),floating:I({x:0,y:0},yield x(n))}})};function C(t){return(0,a.Dx)(t).direction==="rtl"}const E={convertOffsetParentRelativeRectToViewportRelativeRect:$,getDocumentElement:a.tF,getClippingRect:c,getOffsetParent:f,getElementRects:m,getClientRects:V,getDimensions:l,getScale:W,isElement:a.kK,isRTL:C};function u(t,e){let n=null,o;const d=(0,a.tF)(t);function x(){clearTimeout(o),n&&n.disconnect(),n=null}function g(y,v){y===void 0&&(y=!1),v===void 0&&(v=1),x();const{left:w,top:O,width:S,height:L}=t.getBoundingClientRect();if(y||e(),!S||!L)return;const A=(0,r.GW)(O),P=(0,r.GW)(d.clientWidth-(w+S)),Z=(0,r.GW)(d.clientHeight-(O+L)),T=(0,r.GW)(w),F={rootMargin:-A+"px "+-P+"px "+-Z+"px "+-T+"px",threshold:(0,r.Fp)(0,(0,r.VV)(1,v))||1};let U=!0;function tt(X){const et=X[0].intersectionRatio;if(et!==v){if(!U)return g();et?g(!1,et):o=setTimeout(()=>{g(!1,1e-7)},100)}U=!1}try{n=new IntersectionObserver(tt,J(I({},F),{root:d.ownerDocument}))}catch(X){n=new IntersectionObserver(tt,F)}n.observe(t)}return g(!0),x}function R(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:d=!0,ancestorResize:x=!0,elementResize:g=typeof ResizeObserver=="function",layoutShift:y=typeof IntersectionObserver=="function",animationFrame:v=!1}=o,w=N(t),O=d||x?[...w?(0,a.Kx)(w):[],...(0,a.Kx)(e)]:[];O.forEach(D=>{d&&D.addEventListener("scroll",n,{passive:!0}),x&&D.addEventListener("resize",n)});const S=w&&y?u(w,n):null;let L=-1,A=null;g&&(A=new ResizeObserver(D=>{let[F]=D;F&&F.target===w&&A&&(A.unobserve(e),cancelAnimationFrame(L),L=requestAnimationFrame(()=>{A&&A.observe(e)})),n()}),w&&!v&&A.observe(w),A.observe(e));let P,Z=v?j(t):null;v&&T();function T(){const D=j(t);Z&&(D.x!==Z.x||D.y!==Z.y||D.width!==Z.width||D.height!==Z.height)&&n(),Z=D,P=requestAnimationFrame(T)}return n(),()=>{O.forEach(D=>{d&&D.removeEventListener("scroll",n),x&&D.removeEventListener("resize",n)}),S&&S(),A&&A.disconnect(),A=null,v&&cancelAnimationFrame(P)}}const h=(t,e,n)=>{const o=new Map,d=I({platform:E},n),x=J(I({},d.platform),{_c:o});return(0,M.oo)(t,e,J(I({},d),{platform:x}))}},60565:function(z,k,p){p.d(k,{Cp:function(){return ot},RR:function(){return nt},YF:function(){return j},cv:function(){return V},dp:function(){return q},dr:function(){return Q},uY:function(){return K},x7:function(){return c}});var r=p(49734),M=p(65070),a=p(50959),B=p(10422),N=typeof document!="undefined"?a.useLayoutEffect:a.useEffect;function W(l,i){if(l===i)return!0;if(typeof l!=typeof i)return!1;if(typeof l=="function"&&l.toString()===i.toString())return!0;let s,f,m;if(l&&i&&typeof l=="object"){if(Array.isArray(l)){if(s=l.length,s!==i.length)return!1;for(f=s;f--!==0;)if(!W(l[f],i[f]))return!1;return!0}if(m=Object.keys(l),s=m.length,s!==Object.keys(i).length)return!1;for(f=s;f--!==0;)if(!{}.hasOwnProperty.call(i,m[f]))return!1;for(f=s;f--!==0;){const C=m[f];if(!(C==="_owner"&&l.$$typeof)&&!W(l[C],i[C]))return!1}return!0}return l!==l&&i!==i}function H(l){return typeof window=="undefined"?1:(l.ownerDocument.defaultView||window).devicePixelRatio||1}function G(l,i){const s=H(l);return Math.round(i*s)/s}function Y(l){const i=a.useRef(l);return N(()=>{i.current=l}),i}function j(l){l===void 0&&(l={});const{placement:i="bottom",strategy:s="absolute",middleware:f=[],platform:m,elements:{reference:C,floating:E}={},transform:u=!0,whileElementsMounted:R,open:h}=l,[t,e]=a.useState({x:0,y:0,strategy:s,placement:i,middlewareData:{},isPositioned:!1}),[n,o]=a.useState(f);W(n,f)||o(f);const[d,x]=a.useState(null),[g,y]=a.useState(null),v=a.useCallback(_=>{_!==L.current&&(L.current=_,x(_))},[]),w=a.useCallback(_=>{_!==A.current&&(A.current=_,y(_))},[]),O=C||d,S=E||g,L=a.useRef(null),A=a.useRef(null),P=a.useRef(t),Z=R!=null,T=Y(R),D=Y(m),F=a.useCallback(()=>{if(!L.current||!A.current)return;const _={placement:i,strategy:s,middleware:n};D.current&&(_.platform=D.current),(0,r.oo)(L.current,A.current,_).then(st=>{const ct=J(I({},st),{isPositioned:!0});U.current&&!W(P.current,ct)&&(P.current=ct,B.flushSync(()=>{e(ct)}))})},[n,i,s,D]);N(()=>{h===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,e(_=>J(I({},_),{isPositioned:!1})))},[h]);const U=a.useRef(!1);N(()=>(U.current=!0,()=>{U.current=!1}),[]),N(()=>{if(O&&(L.current=O),S&&(A.current=S),O&&S){if(T.current)return T.current(O,S,F);F()}},[O,S,F,T,Z]);const tt=a.useMemo(()=>({reference:L,floating:A,setReference:v,setFloating:w}),[v,w]),X=a.useMemo(()=>({reference:O,floating:S}),[O,S]),et=a.useMemo(()=>{const _={position:s,left:0,top:0};if(!X.floating)return _;const st=G(X.floating,t.x),ct=G(X.floating,t.y);return u?I(J(I({},_),{transform:"translate("+st+"px, "+ct+"px)"}),H(X.floating)>=1.5&&{willChange:"transform"}):{position:s,left:st,top:ct}},[s,u,X.floating,t.x,t.y]);return a.useMemo(()=>J(I({},t),{update:F,refs:tt,elements:X,floatingStyles:et}),[t,F,tt,X,et])}const $=l=>{function i(s){return{}.hasOwnProperty.call(s,"current")}return{name:"arrow",options:l,fn(s){const{element:f,padding:m}=typeof l=="function"?l(s):l;return f&&i(f)?f.current!=null?(0,M.x7)({element:f.current,padding:m}).fn(s):{}:f?(0,M.x7)({element:f,padding:m}).fn(s):{}}}},V=(l,i)=>J(I({},(0,M.cv)(l)),{options:[l,i]}),K=(l,i)=>J(I({},(0,M.uY)(l)),{options:[l,i]}),Q=(l,i)=>J(I({},(0,M.dr)(l)),{options:[l,i]}),nt=(l,i)=>J(I({},(0,M.RR)(l)),{options:[l,i]}),q=(l,i)=>J(I({},(0,M.dp)(l)),{options:[l,i]}),it=(l,i)=>J(I({},autoPlacement$1(l)),{options:[l,i]}),ot=(l,i)=>J(I({},(0,M.Cp)(l)),{options:[l,i]}),b=(l,i)=>J(I({},inline$1(l)),{options:[l,i]}),c=(l,i)=>J(I({},$(l)),{options:[l,i]})},29912:function(z,k,p){p.d(k,{Fp:function(){return N},GW:function(){return H},I4:function(){return q},JB:function(){return E},KX:function(){return s},NM:function(){return W},Qq:function(){return it},Rn:function(){return nt},VV:function(){return B},Wh:function(){return ot},gy:function(){return c},hp:function(){return Q},i8:function(){return b},k3:function(){return K},ku:function(){return V},mA:function(){return r},pw:function(){return f},uZ:function(){return $},yd:function(){return C},ze:function(){return G}});const r=["top","right","bottom","left"],M=null,a=null,B=Math.min,N=Math.max,W=Math.round,H=Math.floor,G=u=>({x:u,y:u}),Y={left:"right",right:"left",bottom:"top",top:"bottom"},j={start:"end",end:"start"};function $(u,R,h){return N(u,B(R,h))}function V(u,R){return typeof u=="function"?u(R):u}function K(u){return u.split("-")[0]}function Q(u){return u.split("-")[1]}function nt(u){return u==="x"?"y":"x"}function q(u){return u==="y"?"height":"width"}function it(u){return["top","bottom"].includes(K(u))?"y":"x"}function ot(u){return nt(it(u))}function b(u,R,h){h===void 0&&(h=!1);const t=Q(u),e=ot(u),n=q(e);let o=e==="x"?t===(h?"end":"start")?"right":"left":t==="start"?"bottom":"top";return R.reference[n]>R.floating[n]&&(o=f(o)),[o,f(o)]}function c(u){const R=f(u);return[l(u),R,l(R)]}function l(u){return u.replace(/start|end/g,R=>j[R])}function i(u,R,h){const t=["left","right"],e=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(u){case"top":case"bottom":return h?R?e:t:R?t:e;case"left":case"right":return R?n:o;default:return[]}}function s(u,R,h,t){const e=Q(u);let n=i(K(u),h==="start",t);return e&&(n=n.map(o=>o+"-"+e),R&&(n=n.concat(n.map(l)))),n}function f(u){return u.replace(/left|right|bottom|top/g,R=>Y[R])}function m(u){return I({top:0,right:0,bottom:0,left:0},u)}function C(u){return typeof u!="number"?m(u):{top:u,right:u,bottom:u,left:u}}function E(u){return J(I({},u),{top:u.y,left:u.x,right:u.x+u.width,bottom:u.y+u.height})}},43050:function(z,k,p){p.d(k,{Dx:function(){return Q},Jj:function(){return M},Kx:function(){return ot},Lw:function(){return nt},Ow:function(){return q},Pf:function(){return V},Py:function(){return K},Re:function(){return W},Ze:function(){return Y},ao:function(){return G},gQ:function(){return $},hT:function(){return j},kK:function(){return N},tF:function(){return a},wk:function(){return r}});function r(b){return B(b)?(b.nodeName||"").toLowerCase():"#document"}function M(b){var c;return(b==null||(c=b.ownerDocument)==null?void 0:c.defaultView)||window}function a(b){var c;return(c=(B(b)?b.ownerDocument:b.document)||window.document)==null?void 0:c.documentElement}function B(b){return b instanceof Node||b instanceof M(b).Node}function N(b){return b instanceof Element||b instanceof M(b).Element}function W(b){return b instanceof HTMLElement||b instanceof M(b).HTMLElement}function H(b){return typeof ShadowRoot=="undefined"?!1:b instanceof ShadowRoot||b instanceof M(b).ShadowRoot}function G(b){const{overflow:c,overflowX:l,overflowY:i,display:s}=Q(b);return/auto|scroll|overlay|hidden|clip/.test(c+i+l)&&!["inline","contents"].includes(s)}function Y(b){return["table","td","th"].includes(r(b))}function j(b){const c=V(),l=Q(b);return l.transform!=="none"||l.perspective!=="none"||(l.containerType?l.containerType!=="normal":!1)||!c&&(l.backdropFilter?l.backdropFilter!=="none":!1)||!c&&(l.filter?l.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(l.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(l.contain||"").includes(i))}function $(b){let c=q(b);for(;W(c)&&!K(c);){if(j(c))return c;c=q(c)}return null}function V(){return typeof CSS=="undefined"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(b){return["html","body","#document"].includes(r(b))}function Q(b){return M(b).getComputedStyle(b)}function nt(b){return N(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:{scrollLeft:b.pageXOffset,scrollTop:b.pageYOffset}}function q(b){if(r(b)==="html")return b;const c=b.assignedSlot||b.parentNode||H(b)&&b.host||a(b);return H(c)?c.host:c}function it(b){const c=q(b);return K(c)?b.ownerDocument?b.ownerDocument.body:b.body:W(c)&&G(c)?c:it(c)}function ot(b,c,l){var i;c===void 0&&(c=[]),l===void 0&&(l=!0);const s=it(b),f=s===((i=b.ownerDocument)==null?void 0:i.body),m=M(s);return f?c.concat(m,m.visualViewport||[],G(s)?s:[],m.frameElement&&l?ot(m.frameElement):[]):c.concat(s,ot(s,[],l))}}}]);
}());