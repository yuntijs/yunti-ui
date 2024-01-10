!(function(){"use strict";var xn=Object.defineProperty,Sn=Object.defineProperties;var On=Object.getOwnPropertyDescriptors;var Be=Object.getOwnPropertySymbols;var kr=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable;var Tr=(C,b,o)=>b in C?xn(C,b,{enumerable:!0,configurable:!0,writable:!0,value:o}):C[b]=o,Y=(C,b)=>{for(var o in b||(b={}))kr.call(b,o)&&Tr(C,o,b[o]);if(Be)for(var o of Be(b))Pr.call(b,o)&&Tr(C,o,b[o]);return C},or=(C,b)=>Sn(C,On(b));var ar=(C,b)=>{var o={};for(var a in C)kr.call(C,a)&&b.indexOf(a)<0&&(o[a]=C[a]);if(C!=null&&Be)for(var a of Be(C))b.indexOf(a)<0&&Pr.call(C,a)&&(o[a]=C[a]);return o};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6325],{92942:function(C,b,o){o.d(b,{E_:function(){return M},nc:function(){return H}});var a=o(50959),w=o(56264),i="https://unpkg.com",E="https://registry.npmmirror.com",I=function(l){var O=l.pkg,P=l.version,v=P===void 0?"latest":P,_=l.path,h=l.proxy;switch(h){case"unpkg":return(0,w.Z)(i,"".concat(O,"@").concat(v),_);default:return(0,w.Z)(E,O,v,"files",_)}},$=o(11527),M=(0,a.createContext)(null),F=null,V=function(l){var O=l.pkg,P=l.version,v=l.path;return I({path:v,pkg:O,proxy:"aliyun",version:P})},H=function(){var l=(0,a.useContext)(M);return l?(l==null?void 0:l.proxy)!=="custom"?function(O){var P=O.pkg,v=O.version,_=O.path;return I({path:_,pkg:P,proxy:l.proxy,version:v})}:(l==null?void 0:l.customCdnFn)||V:V},W=null},43721:function(C,b,o){o.d(b,{Z:function(){return bn}});var a=o(25940),w=o(48385),i=o(50959),E=o(85022),I=o.n(E),$=o(88069),M=o(87037),F=o(61644),V=o(72648);const H=i.createContext({});var J=i.createContext({message:{},notification:{},modal:{}}),l=o(75034);const O=r=>{const{componentCls:t,colorText:n,fontSize:e,lineHeight:c,fontFamily:p}=r;return{[t]:{color:n,fontSize:e,lineHeight:c,fontFamily:p}}},P=()=>({});var v=(0,l.I$)("App",O,P);const _=()=>i.useContext(J),h=r=>{const{prefixCls:t,children:n,className:e,rootClassName:c,message:p,notification:D,style:K,component:z="div"}=r,{getPrefixCls:ee}=(0,i.useContext)($.E_),oe=ee("app",t),[te,ge,me]=v(oe),de=I()(ge,oe,e,c,me),Q=(0,i.useContext)(H),fe=i.useMemo(()=>({message:Object.assign(Object.assign({},Q.message),p),notification:Object.assign(Object.assign({},Q.notification),D)}),[p,D,Q.message,Q.notification]),[Cr,pn]=(0,M.Z)(fe.message),[_r,gn]=(0,V.Z)(fe.notification),[wr,mn]=(0,F.Z)(),vn=i.useMemo(()=>({message:Cr,notification:_r,modal:wr}),[Cr,_r,wr]),hn=z===!1?i.Fragment:z,yn={className:de,style:K};return te(i.createElement(J.Provider,{value:vn},i.createElement(H.Provider,{value:fe},i.createElement(hn,Object.assign({},z===!1?void 0:yn),mn,pn,gn,n))))};h.useApp=_;var y=h,u=o(77764),f=o(92942),d=function(t){var n=document.createElement("link");return n.rel="stylesheet",n.href=t,n},s=(0,i.memo)(function(r){var t=r.url,n=(0,i.useRef)(!1);return(0,i.useEffect)(function(){if(!n.current){n.current=!0;var e=d(t);document.head.append(e)}},[]),null}),A=s,m=o(42804),U,R,T,N,B,L,G,k,j,S=function(t){var n=t.css,e=t.token,c=t.isDarkMode,p=(0,u.F4)(U||(U=(0,m.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `]))),D=c?e.cyan9A:e.cyan11A,K=c?e.cyan2A:e.cyan6A;return{blur:n(R||(R=(0,m.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:n(T||(T=(0,m.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:n(N||(N=(0,m.Z)([`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          background-color: `,`;
          border-radius: 4px;
          transition: background-color 500ms `,`;
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `])),e.colorFill,e.motionEaseOut),gradientAnimation:n(B||(B=(0,m.Z)([`
      background-image: linear-gradient(
        -45deg,
        `,`,
        `,`,
        `,`,
        `,`
      );
      background-size: 400% 400%;
      border-radius: inherit;
      animation: 5s `,` 5s ease infinite;
    `])),e.gold,e.magenta,e.geekblue,e.cyan,p),markdown:n(L||(L=(0,m.Z)([`
      color: `,`;

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 600;
      }

      p {
        margin-block: 0 0;
        font-size: 14px;
        line-height: 2;
        color: `,`;

        + * {
          margin-block-end: 1em;
        }

        &:not(:last-child) {
          margin-bottom: 1.5em;
        }
      }

      blockquote {
        margin: 16px 0;
        padding: 0 12px;

        p {
          font-style: italic;
          color: `,`;
        }
      }

      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;
        border-radius: `,`px;

        > code {
          padding: 0 !important;
          background: unset !important;
          border: none !important;
          border-radius: unset !important;
        }
      }

      *:not([data-code-type='highlighter'], pre) code {
        padding: 2px 6px;

        font-size: `,`px;
        color: `,`;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      table {
        border-spacing: 0;

        width: 100%;
        margin-block: 1em 1em;
        margin-inline: 0 0;
        padding: 8px;

        border: 1px solid `,`;
        border-radius: `,`px;

        code {
          display: inline-flex;
        }
      }

      th,
      td {
        padding-block: 10px 10px;
        padding-inline: 16px 16px;
      }

      thead {
        tr {
          th {
            background: `,`;

            &:first-child {
              border-top-left-radius: `,`px;
              border-bottom-left-radius: `,`px;
            }

            &:last-child {
              border-top-right-radius: `,`px;
              border-bottom-right-radius: `,`px;
            }
          }
        }
      }

      > ul > li {
        list-style-type: disc;
      }

      > ol,
      > ul {
        > li {
          margin-left: 24px;
          line-height: 1.8;

          &::marker {
            color: `,` !important;
          }
        }
      }

      ol,
      ul {
        > li::marker {
          color: `,`;
        }
      }

      details {
        margin-bottom: 1em;
        padding: 12px 16px;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        transition: all 400ms `,`;
      }

      details[open] {
        summary {
          padding-bottom: 12px;
          border-bottom: 1px solid `,`;
        }
      }
    `])),e.colorText,e.colorText,e.colorTextDescription,e.colorLink,e.colorLinkHover,e.colorLinkActive,e.borderRadius,e.fontSizeSM,D,K,c?e.cyan1A:e.cyan6A,e.borderRadiusSM,e.colorBorderSecondary,e.borderRadius,e.colorFillTertiary,e.borderRadius,e.borderRadius,e.borderRadius,e.borderRadius,c?e.cyan9A:e.cyan10A,e.colorTextDescription,e.colorFillTertiary,e.colorBorderSecondary,e.borderRadiusLG,e.motionEaseOut,e.colorBorder),markdownInChat:n(G||(G=(0,m.Z)([`
      h1 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.6em;
      }

      h2 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.4em;
      }

      h3 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.2em;
      }

      h4 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.1em;
      }

      h5 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1em;
      }

      > *:last-child {
        margin-bottom: 0 !important;
      }

      p {
        line-height: 1.8 !important;
        white-space: pre-wrap !important;

        + * {
          margin-block-end: 0.5em !important;
        }

        &:not(:last-child) {
          margin-bottom: 1em !important;
        }
      }
    `]))),noScrollbar:n(k||(k=(0,m.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:n(j||(j=(0,m.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),e.colorTextSecondary,e.colorText)}},g=o(90885),x=o(30994);function X(r,t,n){var e=-1,c=r.length;t<0&&(t=-t>c?0:c+t),n=n>c?c:n,n<0&&(n+=c),c=t>n?0:n-t>>>0,t>>>=0;for(var p=Array(c);++e<c;)p[e]=r[e+t];return p}var ae=X;function We(r,t,n){var e=r.length;return n=n===void 0?e:n,!t&&n>=e?r:ae(r,t,n)}var Se=We,Je="\\ud800-\\udfff",Oe="\\u0300-\\u036f",je="\\ufe20-\\ufe2f",Ge="\\u20d0-\\u20ff",Ke=Oe+je+Ge,$e="\\ufe0e\\ufe0f",Ce="\\u200d",_e=RegExp("["+Ce+Je+Ke+$e+"]");function ie(r){return _e.test(r)}var we=ie;function Te(r){return r.split("")}var Ve=Te,ve="\\ud800-\\udfff",ke="\\u0300-\\u036f",Pe="\\ufe20-\\ufe2f",Ae="\\u20d0-\\u20ff",Ye=ke+Pe+Ae,Xe="\\ufe0e\\ufe0f",Qe="["+ve+"]",he="["+Ye+"]",ye="\\ud83c[\\udffb-\\udfff]",qe="(?:"+he+"|"+ye+")",Ee="[^"+ve+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",er="\\u200d",De=qe+"?",Ie="["+Xe+"]?",rr="(?:"+er+"(?:"+[Ee,Re,Ze].join("|")+")"+Ie+De+")*",nr=Ie+De+rr,Z="(?:"+[Ee+he+"?",he,Re,Ze,Qe].join("|")+")",re=RegExp(ye+"(?="+ye+")|"+Z+nr,"g");function ce(r){return r.match(re)||[]}var tr=ce;function be(r){return we(r)?tr(r):Ve(r)}var Me=be;function Ar(r){return function(t){t=(0,x.Z)(t);var n=we(t)?Me(t):void 0,e=n?n[0]:t.charAt(0),c=n?Se(n,1).join(""):t.slice(1);return e[r]()+c}}var Er=Ar,Rr=Er("toUpperCase"),Zr=Rr;function Dr(r){return Zr((0,x.Z)(r).toLowerCase())}var ir=Dr,Ir=o(51741),Mr=(0,Ir.Z)(function(r,t,n){return t=t.toLowerCase(),r+(n?ir(t):t)}),Lr=Mr,q=o(46600);function cr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function Le(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):cr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function sr(r,t){var n=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=Ur(r))||t&&r&&typeof r.length=="number"){n&&(r=n);var e=0,c=function(){};return{s:c,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(ee){throw ee},f:c}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var p=!0,D=!1,K;return{s:function(){n=n.call(r)},n:function(){var ee=n.next();return p=ee.done,ee},e:function(ee){D=!0,K=ee},f:function(){try{!p&&n.return!=null&&n.return()}finally{if(D)throw K}}}}function Ur(r,t){if(r){if(typeof r=="string")return lr(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lr(r,t)}}function lr(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var zr=function(t){var n,e=t.name,c=t.scale,p=t.appearance;return n={},(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)(n,"".concat(e,"Bg"),c["".concat(p,"A")][1]),"".concat(e,"BgHover"),c["".concat(p,"A")][2]),"".concat(e,"Border"),c[p][4]),"".concat(e,"BorderSecondary"),c[p][3]),"".concat(e,"BorderHover"),c[p][5]),"".concat(e,"Hover"),c[p][10]),"".concat(e),c[p][9]),"".concat(e,"Active"),c[p][7]),"".concat(e,"TextHover"),c["".concat(p,"A")][10]),"".concat(e,"Text"),c["".concat(p,"A")][9]),(0,a.Z)(n,"".concat(e,"TextActive"),c["".concat(p,"A")][7])},Fr=function(t){var n=t.name,e=t.scale,c=t.appearance,p={},D=sr(e[c].entries()),K;try{for(D.s();!(K=D.n()).done;){var z=(0,g.Z)(K.value,2),ee=z[0],oe=z[1];ee===0||ee===12||(p["".concat(n).concat(ee)]=oe)}}catch(fe){D.e(fe)}finally{D.f()}var te=sr(e["".concat(c,"A")].entries()),ge;try{for(te.s();!(ge=te.n()).done;){var me=(0,g.Z)(ge.value,2),de=me[0],Q=me[1];de===0||de===12||(p["".concat(n).concat(de,"A")]=Q)}}catch(fe){te.e(fe)}finally{te.f()}return Le(Le({},p),zr({appearance:c,name:n,scale:e}))},Hr=function(t){for(var n=t.isDarkMode,e={},c=0,p=Object.entries(q._);c<p.length;c++){var D=(0,g.Z)(p[c],2),K=D[0],z=D[1];e=Le(Le({},e),Fr({appearance:n?"dark":"light",name:Lr(K),scale:z}))}return e},ne=function(t){var n=t.type,e=t.scale,c=t.appearance,p=ir(n),D=c==="dark";return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"color".concat(p,"Bg"),e[c][1]),"color".concat(p,"BgHover"),e[c][2]),"color".concat(p,"Border"),e[c][4]),"color".concat(p,"BorderHover"),e[c][D?5:3]),"color".concat(p,"Hover"),e[c][D?10:8]),"color".concat(p),e[c][9]),"color".concat(p,"Active"),e[c][D?7:10]),"color".concat(p,"TextHover"),e[c][D?10:8]),"color".concat(p,"Text"),e[c][9]),"color".concat(p,"TextActive"),e[c][D?7:10])},Ue=function(t){var n=t.scale,e=t.appearance;return{colorBgContainer:e==="dark"?n[e][1]:n[e][0],colorBgElevated:e==="dark"?n[e][2]:n[e][0],colorBgLayout:e==="dark"?n[e][0]:n[e][1],colorBgMask:n.lightA[8],colorBgSpotlight:n[e][5],colorBorder:n[e][4],colorBorderSecondary:n[e][3],colorFill:n["".concat(e,"A")][3],colorFillQuaternary:n["".concat(e,"A")][0],colorFillSecondary:n["".concat(e,"A")][2],colorFillTertiary:n["".concat(e,"A")][1],colorText:n[e][12],colorTextQuaternary:n[e][6],colorTextSecondary:n[e][10],colorTextTertiary:n[e][8]}},ur={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}};function dr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function se(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):dr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Nr=ne({appearance:"dark",scale:q._.bnw,type:"Primary"}),fr=Ue({appearance:"dark",scale:q._.gray}),Br=ne({appearance:"dark",scale:q._.lime,type:"Success"}),Wr=ne({appearance:"dark",scale:q._.gold,type:"Warning"}),Jr=ne({appearance:"dark",scale:q._.red,type:"Error"}),ze=ne({appearance:"dark",scale:q._.blue,type:"Info"}),Gr=se(se(se(se(se(se(se({},Nr),fr),Br),Wr),Jr),ze),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:ze.colorInfoText,colorLinkActive:ze.colorInfoTextActive,colorLinkHover:ze.colorInfoTextHover,colorTextLightSolid:fr.colorBgLayout}),Kr=Gr;function br(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function Fe(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?br(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):br(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var $r=function(t,n){var e=t.primaryColor,c=t.neutralColor,p={},D={},K=q._[e];K&&(p=ne({appearance:"dark",scale:K,type:"Primary"}));var z=ur[c];return z&&(D=Ue({appearance:"dark",scale:z})),Fe(Fe(Fe(Fe({},n),Kr),p),D)};function pr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function le(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):pr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Vr=ne({appearance:"light",scale:q._.bnw,type:"Primary"}),gr=Ue({appearance:"light",scale:q._.gray}),Yr=ne({appearance:"light",scale:q._.green,type:"Success"}),Xr=ne({appearance:"light",scale:q._.orange,type:"Warning"}),Qr=ne({appearance:"light",scale:q._.volcano,type:"Error"}),He=ne({appearance:"light",scale:q._.geekblue,type:"Info"}),qr=le(le(le(le(le(le(le({},Vr),gr),Yr),Xr),Qr),He),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:He.colorInfoText,colorLinkActive:He.colorInfoTextActive,colorLinkHover:He.colorInfoTextHover,colorTextLightSolid:gr.colorBgLayout}),en=qr;function mr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function Ne(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):mr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var rn=function(t,n){var e=t.primaryColor,c=t.neutralColor,p={},D={},K=q._[e];K&&(p=ne({appearance:"light",scale:K,type:"Primary"}));var z=ur[c];return z&&(D=Ue({appearance:"light",scale:z})),Ne(Ne(Ne(Ne({},n),en),p),D)},vr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',nn='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',hr='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',tn="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",on={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[nn,hr,vr].join(","),fontFamilyCode:[tn,hr,vr].join(",")};function yr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function xr(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):yr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var an=function(t){var n=t.neutralColor,e=t.appearance,c=t.primaryColor,p=e==="dark";return{algorithm:p?$r:rn,token:xr(xr({},on),{},{neutralColor:n,primaryColor:c})}},xe=o(24110),Sr,cn=function(r){return(0,u.iv)(Sr||(Sr=(0,m.Z)([`
  .`,`-checkbox-inner:after {
    border-color: `,` !important;
  }

  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary:not(:disabled) {
    color: `,` !important;

    &:hover {
      color: `,` !important;
    }

    &:active {
      color: `,` !important;
    }
  }

  .`,`-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding: 4px 8px;

    color: `,` !important;

    background-color: `,` !important;
    border-radius: `,`px !important;
  }

  .`,`-tooltip-arrow {
    &::before,
    &::after {
      background: `,` !important;
    }
  }

  .`,`-switch-handle::before {
    background: `,` !important;
  }

  .`,`-image-preview-close,
    .`,"-image-preview-switch-right,.",`-image-preview-switch-left {
    `,`;
    border-radius: `,`px;
    background: `,`;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .`,`-dropdown {
    .`,`-dropdown-menu {
      border: 1px solid `,`;
      border-radius: `,`px !important;
      box-shadow: `,`;
    }
  }

  @media (max-width: 575px) {
    .`,`-tooltip {
      display: none !important;
    }
  }
`])),r.prefixCls,(0,xe.XV)(r.colorPrimary),r.prefixCls,r.prefixCls,(0,xe.XV)(r.colorPrimary),(0,xe.XV)(r.colorPrimary),(0,xe.XV)(r.colorPrimaryActive),r.prefixCls,r.colorBgLayout,r.colorText,r.borderRadiusSM,r.prefixCls,r.colorText,r.prefixCls,r.colorBgContainer,r.prefixCls,r.prefixCls,r.prefixCls,r.stylish.blur,r.borderRadiusLG,(0,xe.m4)(r.colorBgMask,.1),r.prefixCls,r.prefixCls,r.colorBorderSecondary,r.borderRadius,r.boxShadowSecondary,r.prefixCls)},Or,sn=function(r){return(0,u.iv)(Or||(Or=(0,m.Z)([`
  html,
  body {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;

    overflow-x: hidden;
    overflow-y: auto;

    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    vertical-align: baseline;

    color-scheme: dark;
    background-color: `,`;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    overflow-x: hidden;
    height: 100vh;
  }

  #root {
    min-height: 100vh;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  p {
    word-wrap: break-word;
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    box-sizing: border-box;
    vertical-align: baseline;
  }

  @media only screen and (min-width: 574px) {
    * {
      ::-webkit-scrollbar {
        cursor: pointer;
        width: 4px;
        height: 4px;
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-color: transparent;
        border-radius: 2px;
        transition: background-color 500ms `,`;

        &:hover {
          background-color: `,`;
        }
      }

      ::-webkit-scrollbar-corner {
        display: none;
        width: 0;
        height: 0;
      }

      &:hover {
        ::-webkit-scrollbar-thumb {
          background-color: `,`;
        }
      }
    }
  }
`])),r.fontFamily,r.fontSize,r.colorTextBase,r.colorBgLayout,r.fontFamilyCode,r.fontFamilyCode,r.yellow9,r.motionEaseOut,r.colorText,r.colorFill)},ln=(0,u.vJ)(function(r){var t=r.theme;return[sn(t),cn(t)]}),un=ln,ue=o(11527),dn=["children","customStylish","customToken","enableWebfonts","webfonts","customTheme"];function jr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),n.push.apply(n,e)}return n}function pe(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):jr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var fn=(0,i.memo)(function(r){var t=r.children,n=r.customStylish,e=r.customToken,c=r.enableWebfonts,p=c===void 0?!0:c,D=r.webfonts,K=r.customTheme,z=K===void 0?{}:K,ee=(0,w.Z)(r,dn),oe=(0,f.nc)(),te=D||[oe({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),oe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),oe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),oe({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ge=(0,i.useCallback)(function(Q){return pe(pe({},S(Q)),n==null?void 0:n(Q))},[n]),me=(0,i.useCallback)(function(Q){return pe(pe({},Hr(Q)),e==null?void 0:e(Q))},[e]),de=(0,i.useCallback)(function(Q){return an({appearance:Q,neutralColor:z.neutralColor,primaryColor:z.primaryColor})},[z.primaryColor,z.neutralColor]);return(0,ue.jsxs)(ue.Fragment,{children:[p&&(te==null?void 0:te.length)>0&&te.map(function(Q){return(0,ue.jsx)(A,{url:Q},Q)}),(0,ue.jsx)(u.V9,{speedy:!0,children:(0,ue.jsxs)(u.f6,pe(pe({customStylish:ge,customToken:me},ee),{},{theme:de,children:[(0,ue.jsx)(un,{}),(0,ue.jsx)(y,{style:{minHeight:"inherit",width:"inherit"},children:t})]}))})]})}),bn=fn},98853:function(C,b,o){var a=o(50538),w=o(50959),i=o(11527),E=(0,w.memo)(function(){return(0,i.jsxs)(a.ql,{children:[(0,i.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,i.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,i.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,i.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,i.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,i.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,i.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,i.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,i.jsx)("meta",{content:"#000000",name:"theme-color"})]})});b.Z=E},92267:function(C,b,o){o.d(b,{f:function(){return i}});var a=o(47679),w=o(6522),i=(0,a.Ue)()((0,w.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(C){C.exports=function b(o,a){if(o===a)return!0;if(o&&a&&typeof o=="object"&&typeof a=="object"){if(o.constructor!==a.constructor)return!1;var w,i,E;if(Array.isArray(o)){if(w=o.length,w!=a.length)return!1;for(i=w;i--!==0;)if(!b(o[i],a[i]))return!1;return!0}if(o.constructor===RegExp)return o.source===a.source&&o.flags===a.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===a.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===a.toString();if(E=Object.keys(o),w=E.length,w!==Object.keys(a).length)return!1;for(i=w;i--!==0;)if(!Object.prototype.hasOwnProperty.call(a,E[i]))return!1;for(i=w;i--!==0;){var I=E[i];if(!b(o[I],a[I]))return!1}return!0}return o!==o&&a!==a}},2179:function(C,b,o){var a=o(50959),w=o(4322);function i(H,W){return H===W&&(H!==0||1/H===1/W)||H!==H&&W!==W}var E=typeof Object.is=="function"?Object.is:i,I=w.useSyncExternalStore,$=a.useRef,M=a.useEffect,F=a.useMemo,V=a.useDebugValue;b.useSyncExternalStoreWithSelector=function(H,W,J,l,O){var P=$(null);if(P.current===null){var v={hasValue:!1,value:null};P.current=v}else v=P.current;P=F(function(){function h(s){if(!y){if(y=!0,u=s,s=l(s),O!==void 0&&v.hasValue){var A=v.value;if(O(A,s))return f=A}return f=s}if(A=f,E(u,s))return A;var m=l(s);return O!==void 0&&O(A,m)?A:(u=s,f=m)}var y=!1,u,f,d=J===void 0?null:J;return[function(){return h(W())},d===null?void 0:function(){return h(d())}]},[W,J,l,O]);var _=I(H,P[0],P[1]);return M(function(){v.hasValue=!0,v.value=_},[_]),V(_),_}},7231:function(C,b,o){C.exports=o(2179)},66711:function(C,b,o){var a=o(99615),w=a.Z.Symbol;b.Z=w},28019:function(C,b){function o(a,w){for(var i=-1,E=a==null?0:a.length,I=Array(E);++i<E;)I[i]=w(a[i],i,a);return I}b.Z=o},33918:function(C,b,o){o.d(b,{Z:function(){return v}});var a=o(66711),w=Object.prototype,i=w.hasOwnProperty,E=w.toString,I=a.Z?a.Z.toStringTag:void 0;function $(_){var h=i.call(_,I),y=_[I];try{_[I]=void 0;var u=!0}catch(d){}var f=E.call(_);return u&&(h?_[I]=y:delete _[I]),f}var M=$,F=Object.prototype,V=F.toString;function H(_){return V.call(_)}var W=H,J="[object Null]",l="[object Undefined]",O=a.Z?a.Z.toStringTag:void 0;function P(_){return _==null?_===void 0?l:J:O&&O in Object(_)?M(_):W(_)}var v=P},51741:function(C,b,o){o.d(b,{Z:function(){return nr}});function a(Z,re,ce,tr){var be=-1,Me=Z==null?0:Z.length;for(tr&&Me&&(ce=Z[++be]);++be<Me;)ce=re(ce,Z[be],be,Z);return ce}var w=a;function i(Z){return function(re){return Z==null?void 0:Z[re]}}var E=i,I={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},$=E(I),M=$,F=o(30994),V=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,H="\\u0300-\\u036f",W="\\ufe20-\\ufe2f",J="\\u20d0-\\u20ff",l=H+W+J,O="["+l+"]",P=RegExp(O,"g");function v(Z){return Z=(0,F.Z)(Z),Z&&Z.replace(V,M).replace(P,"")}var _=v,h=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function y(Z){return Z.match(h)||[]}var u=y,f=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function d(Z){return f.test(Z)}var s=d,A="\\ud800-\\udfff",m="\\u0300-\\u036f",U="\\ufe20-\\ufe2f",R="\\u20d0-\\u20ff",T=m+U+R,N="\\u2700-\\u27bf",B="a-z\\xdf-\\xf6\\xf8-\\xff",L="\\xac\\xb1\\xd7\\xf7",G="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",k="\\u2000-\\u206f",j=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",S="A-Z\\xc0-\\xd6\\xd8-\\xde",g="\\ufe0e\\ufe0f",x=L+G+k+j,X="['\u2019]",ae="["+x+"]",We="["+T+"]",Se="\\d+",Je="["+N+"]",Oe="["+B+"]",je="[^"+A+x+Se+N+B+S+"]",Ge="\\ud83c[\\udffb-\\udfff]",Ke="(?:"+We+"|"+Ge+")",$e="[^"+A+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",_e="[\\ud800-\\udbff][\\udc00-\\udfff]",ie="["+S+"]",we="\\u200d",Te="(?:"+Oe+"|"+je+")",Ve="(?:"+ie+"|"+je+")",ve="(?:"+X+"(?:d|ll|m|re|s|t|ve))?",ke="(?:"+X+"(?:D|LL|M|RE|S|T|VE))?",Pe=Ke+"?",Ae="["+g+"]?",Ye="(?:"+we+"(?:"+[$e,Ce,_e].join("|")+")"+Ae+Pe+")*",Xe="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Qe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",he=Ae+Pe+Ye,ye="(?:"+[Je,Ce,_e].join("|")+")"+he,qe=RegExp([ie+"?"+Oe+"+"+ve+"(?="+[ae,ie,"$"].join("|")+")",Ve+"+"+ke+"(?="+[ae,ie+Te,"$"].join("|")+")",ie+"?"+Te+"+"+ve,ie+"+"+ke,Qe,Xe,Se,ye].join("|"),"g");function Ee(Z){return Z.match(qe)||[]}var Re=Ee;function Ze(Z,re,ce){return Z=(0,F.Z)(Z),re=ce?void 0:re,re===void 0?s(Z)?Re(Z):u(Z):Z.match(re)||[]}var er=Ze,De="['\u2019]",Ie=RegExp(De,"g");function rr(Z){return function(re){return w(er(_(re).replace(Ie,"")),Z,"")}}var nr=rr},97889:function(C,b){var o=typeof global=="object"&&global&&global.Object===Object&&global;b.Z=o},99615:function(C,b,o){var a=o(97889),w=typeof self=="object"&&self&&self.Object===Object&&self,i=a.Z||w||Function("return this")();b.Z=i},56052:function(C,b){var o=Array.isArray;b.Z=o},13795:function(C,b){function o(a){return a!=null&&typeof a=="object"}b.Z=o},30994:function(C,b,o){o.d(b,{Z:function(){return P}});var a=o(66711),w=o(28019),i=o(56052),E=o(33918),I=o(13795),$="[object Symbol]";function M(v){return typeof v=="symbol"||(0,I.Z)(v)&&(0,E.Z)(v)==$}var F=M,V=1/0,H=a.Z?a.Z.prototype:void 0,W=H?H.toString:void 0;function J(v){if(typeof v=="string")return v;if((0,i.Z)(v))return(0,w.Z)(v,J)+"";if(F(v))return W?W.call(v):"";var _=v+"";return _=="0"&&1/v==-V?"-0":_}var l=J;function O(v){return v==null?"":l(v)}var P=O},56264:function(C,b,o){o.d(b,{Z:function(){return w}});function a(i){var E=[];if(i.length===0)return"";if(typeof i[0]!="string")throw new TypeError("Url must be a string. Received "+i[0]);if(i[0].match(/^[^/:]+:\/*$/)&&i.length>1){var I=i.shift();i[0]=I+i[0]}i[0].match(/^file:\/\/\//)?i[0]=i[0].replace(/^([^/:]+):\/*/,"$1:///"):i[0]=i[0].replace(/^([^/:]+):\/*/,"$1://");for(var $=0;$<i.length;$++){var M=i[$];if(typeof M!="string")throw new TypeError("Url must be a string. Received "+M);M!==""&&($>0&&(M=M.replace(/^[\/]+/,"")),$<i.length-1?M=M.replace(/[\/]+$/,""):M=M.replace(/[\/]+$/,"/"),E.push(M))}var F=E.join("/");F=F.replace(/\/(\?|&|#[^!])/g,"$1");var V=F.split("?");return F=V.shift()+(V.length>0?"?":"")+V.join("&"),F}function w(){var i;return typeof arguments[0]=="object"?i=arguments[0]:i=[].slice.call(arguments),a(i)}},47679:function(C,b,o){o.d(b,{Ue:function(){return W}});const a=l=>{let O;const P=new Set,v=(f,d)=>{const s=typeof f=="function"?f(O):f;if(!Object.is(s,O)){const A=O;O=(d!=null?d:typeof s!="object"||s===null)?s:Object.assign({},O,s),P.forEach(m=>m(O,A))}},_=()=>O,u={setState:v,getState:_,subscribe:f=>(P.add(f),()=>P.delete(f)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),P.clear()}};return O=l(v,_,u),u},w=l=>l?a(l):a;var i=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),w(l)),E=o(50959),I=o(7231);const{useDebugValue:$}=E,{useSyncExternalStoreWithSelector:M}=I;let F=!1;function V(l,O=l.getState,P){P&&!F&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),F=!0);const v=M(l.subscribe,l.getState,l.getServerState||l.getState,O,P);return $(v),v}const H=l=>{typeof l!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const O=typeof l=="function"?w(l):l,P=(v,_)=>V(O,v,_);return Object.assign(P,O),P},W=l=>l?H(l):H;var J=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),W(l))},6522:function(C,b,o){o.d(b,{mW:function(){return M},tJ:function(){return _}});const a=(h,y)=>(u,f,d)=>(d.dispatch=s=>(u(A=>h(A,s),!1,s),s),d.dispatchFromDevtools=!0,Y({dispatch:(...s)=>d.dispatch(...s)},y)),w=null,i=new Map,E=h=>{const y=i.get(h);return y?Object.fromEntries(Object.entries(y.stores).map(([u,f])=>[u,f.getState()])):{}},I=(h,y,u)=>{if(h===void 0)return{type:"untracked",connection:y.connect(u)};const f=i.get(u.name);if(f)return Y({type:"tracked",store:h},f);const d={connection:y.connect(u),stores:{}};return i.set(u.name,d),Y({type:"tracked",store:h},d)},M=(h,y={})=>(u,f,d)=>{const k=y,{enabled:s,anonymousActionType:A,store:m}=k,U=ar(k,["enabled","anonymousActionType","store"]);let R;try{R=(s!=null?s:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(S){}if(!R)return s&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),h(u,f,d);const j=I(m,R,U),{connection:T}=j,N=ar(j,["connection"]);let B=!0;d.setState=(S,g,x)=>{const X=u(S,g);if(!B)return X;const ae=x===void 0?{type:A||"anonymous"}:typeof x=="string"?{type:x}:x;return m===void 0?(T==null||T.send(ae,f()),X):(T==null||T.send(or(Y({},ae),{type:`${m}/${ae.type}`}),or(Y({},E(U.name)),{[m]:d.getState()})),X)};const L=(...S)=>{const g=B;B=!1,u(...S),B=g},G=h(d.setState,f,d);if(N.type==="untracked"?T==null||T.init(G):(N.stores[N.store]=d,T==null||T.init(Object.fromEntries(Object.entries(N.stores).map(([S,g])=>[S,S===N.store?G:g.getState()])))),d.dispatchFromDevtools&&typeof d.dispatch=="function"){let S=!1;const g=d.dispatch;d.dispatch=(...x)=>{x[0].type==="__setState"&&!S&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),S=!0),g(...x)}}return T.subscribe(S=>{var g;switch(S.type){case"ACTION":if(typeof S.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return F(S.payload,x=>{if(x.type==="__setState"){if(m===void 0){L(x.state);return}Object.keys(x.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const X=x.state[m];if(X==null)return;JSON.stringify(d.getState())!==JSON.stringify(X)&&L(X);return}d.dispatchFromDevtools&&typeof d.dispatch=="function"&&d.dispatch(x)});case"DISPATCH":switch(S.payload.type){case"RESET":return L(G),m===void 0?T==null?void 0:T.init(d.getState()):T==null?void 0:T.init(E(U.name));case"COMMIT":if(m===void 0){T==null||T.init(d.getState());return}return T==null?void 0:T.init(E(U.name));case"ROLLBACK":return F(S.state,x=>{if(m===void 0){L(x),T==null||T.init(d.getState());return}L(x[m]),T==null||T.init(E(U.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return F(S.state,x=>{if(m===void 0){L(x);return}JSON.stringify(d.getState())!==JSON.stringify(x[m])&&L(x[m])});case"IMPORT_STATE":{const{nextLiftedState:x}=S.payload,X=(g=x.computedStates.slice(-1)[0])==null?void 0:g.state;if(!X)return;L(m===void 0?X:X[m]),T==null||T.send(null,x);return}case"PAUSE_RECORDING":return B=!B}return}}),G},F=(h,y)=>{let u;try{u=JSON.parse(h)}catch(f){console.error("[zustand devtools middleware] Could not parse the received json",f)}u!==void 0&&y(u)},V=h=>(y,u,f)=>{const d=f.subscribe;return f.subscribe=(A,m,U)=>{let R=A;if(m){const T=(U==null?void 0:U.equalityFn)||Object.is;let N=A(f.getState());R=B=>{const L=A(B);if(!T(N,L)){const G=N;m(N=L,G)}},U!=null&&U.fireImmediately&&m(N,N)}return d(R)},h(y,u,f)},H=null,W=(h,y)=>(...u)=>Object.assign({},h,y(...u));function J(h,y){let u;try{u=h()}catch(d){return}return{getItem:d=>{var s;const A=U=>U===null?null:JSON.parse(U,y==null?void 0:y.reviver),m=(s=u.getItem(d))!=null?s:null;return m instanceof Promise?m.then(A):A(m)},setItem:(d,s)=>u.setItem(d,JSON.stringify(s,y==null?void 0:y.replacer)),removeItem:d=>u.removeItem(d)}}const l=h=>y=>{try{const u=h(y);return u instanceof Promise?u:{then(f){return l(f)(u)},catch(f){return this}}}catch(u){return{then(f){return this},catch(f){return l(f)(u)}}}},O=(h,y)=>(u,f,d)=>{let s=Y({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:j=>j,version:0,merge:(j,S)=>Y(Y({},S),j)},y),A=!1;const m=new Set,U=new Set;let R;try{R=s.getStorage()}catch(j){}if(!R)return h((...j)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),u(...j)},f,d);const T=l(s.serialize),N=()=>{const j=s.partialize(Y({},f()));let S;const g=T({state:j,version:s.version}).then(x=>R.setItem(s.name,x)).catch(x=>{S=x});if(S)throw S;return g},B=d.setState;d.setState=(j,S)=>{B(j,S),N()};const L=h((...j)=>{u(...j),N()},f,d);let G;const k=()=>{var j;if(!R)return;A=!1,m.forEach(g=>g(f()));const S=((j=s.onRehydrateStorage)==null?void 0:j.call(s,f()))||void 0;return l(R.getItem.bind(R))(s.name).then(g=>{if(g)return s.deserialize(g)}).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==s.version){if(s.migrate)return s.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var x;return G=s.merge(g,(x=f())!=null?x:L),u(G,!0),N()}).then(()=>{S==null||S(G,void 0),A=!0,U.forEach(g=>g(G))}).catch(g=>{S==null||S(void 0,g)})};return d.persist={setOptions:j=>{s=Y(Y({},s),j),j.getStorage&&(R=j.getStorage())},clearStorage:()=>{R==null||R.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>k(),hasHydrated:()=>A,onHydrate:j=>(m.add(j),()=>{m.delete(j)}),onFinishHydration:j=>(U.add(j),()=>{U.delete(j)})},k(),G||L},P=(h,y)=>(u,f,d)=>{let s=Y({storage:J(()=>localStorage),partialize:k=>k,version:0,merge:(k,j)=>Y(Y({},j),k)},y),A=!1;const m=new Set,U=new Set;let R=s.storage;if(!R)return h((...k)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),u(...k)},f,d);const T=()=>{const k=s.partialize(Y({},f()));return R.setItem(s.name,{state:k,version:s.version})},N=d.setState;d.setState=(k,j)=>{N(k,j),T()};const B=h((...k)=>{u(...k),T()},f,d);let L;const G=()=>{var k,j;if(!R)return;A=!1,m.forEach(g=>{var x;return g((x=f())!=null?x:B)});const S=((j=s.onRehydrateStorage)==null?void 0:j.call(s,(k=f())!=null?k:B))||void 0;return l(R.getItem.bind(R))(s.name).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==s.version){if(s.migrate)return s.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var x;return L=s.merge(g,(x=f())!=null?x:B),u(L,!0),T()}).then(()=>{S==null||S(L,void 0),L=f(),A=!0,U.forEach(g=>g(L))}).catch(g=>{S==null||S(void 0,g)})};return d.persist={setOptions:k=>{s=Y(Y({},s),k),k.storage&&(R=k.storage)},clearStorage:()=>{R==null||R.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>G(),hasHydrated:()=>A,onHydrate:k=>(m.add(k),()=>{m.delete(k)}),onFinishHydration:k=>(U.add(k),()=>{U.delete(k)})},s.skipHydration||G(),L||B},_=(h,y)=>"getStorage"in y||"serialize"in y||"deserialize"in y?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),O(h,y)):P(h,y)}}]);
}());