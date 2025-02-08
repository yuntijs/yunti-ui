"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[72848],{83771:function(re,Q,u){u.d(Q,{Z:function(){return N}});var R=u(94388),Z=u(8377),D=u(94644),E=u(82014);const L=(0,E.Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var F=u(75271),$=u(40863),G=u(17394),B=u(3772),A=u(76863),W,T,j,h,v;function O(a,p){return p||(p=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(p)}}))}var P=(0,B.kc)(function(a,p){var c=a.token,S=a.css,C=a.stylish,i=a.prefixCls,d=p.fullscreen,b=p.headerHeight;return{container:S(W||(W=O([`
        cursor: pointer;
        width: `,`px;
        height: `,`px;
        border-radius: `,`px;
      `])),c.controlHeight,c.controlHeight,c.borderRadius),drawer:S(T||(T=O([`
        &.`,`-drawer-content {
          background: transparent;
        }

        .`,`-drawer-body {
          display: flex;
          flex-direction: column;
        }
      `])),i,i),drawerRoot:S(j||(j=O([`
        inset-block-start: `,`px;

        :focus-visible {
          outline: none;
        }

        .`,`-drawer {
          &-mask {
            `,`;
            background-color: `,`;
          }

          &-content-wrapper {
            box-shadow: none;
          }
        }
      `])),d?0:b+1,i,C.blur,(0,A.m4)(c.colorBgLayout,.5)),fillRect:S(h||(h=O([`
        flex: 1;
        width: 100%;
        border-block-start: none;
      `]))),menu:S(v||(v=O([`
        padding-block-start: `,`px;
        background: transparent;
        border-inline-end: transparent !important;

        > .`,"-menu-item-only-child, .",`-menu-submenu-title {
          width: 100%;
          margin: 0 !important;
          border-block-start: none;
          border-radius: 0;

          &:active {
            color: `,`;
            background-color: `,`;
          }
        }

        .`,`-menu-item-only-child:first-child {
          border-block-start: none;
        }

        .`,`-menu-submenu-title[aria-expanded='true'] {
          a {
            font-weight: 600;
            color: `,` !important;
          }
        }

        .`,`-menu-item-group-title {
          padding-block: 8px;

          font-size: 12px;
          font-weight: 500;
          line-height: 1;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;

          background: `,`;
        }

        .`,`-menu-item {
          width: calc(100% - 16px) !important;
          margin: 8px !important;
          border-radius: `,`px;

          &:hover,
          &:active {
            color: `,` !important;
            background: `,` !important;
          }
        }

        .`,`-menu-item-active {
          width: calc(100% - 16px) !important;
          margin: 8px !important;
          background: `,`;
          border-radius: `,`px;
        }

        .`,`-menu-item-selected {
          font-weight: 600;
          color: `,`;
          background: `,`;

          &:hover,
          &:active {
            color: `,` !important;
            background: `,` !important;
          }
        }
      `])),d?b:0,i,i,c.colorText,c.colorFill,i,i,c.colorText,i,c.colorFillSecondary,i,c.borderRadius,c.colorText,c.colorFillSecondary,i,c.colorFillSecondary,c.borderRadius,i,c.colorBgLayout,c.colorText,c.colorBgLayout,c.colorText)}}),k=u(52676);function V(a){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},V(a)}var m=["items","openKeys","selectedKeys","opened","setOpened","className","headerHeight","onClick","iconProps","rootClassName","fullscreen","drawerProps"];function r(a,p){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(a);p&&(S=S.filter(function(C){return Object.getOwnPropertyDescriptor(a,C).enumerable})),c.push.apply(c,S)}return c}function t(a){for(var p=1;p<arguments.length;p++){var c=arguments[p]!=null?arguments[p]:{};p%2?r(Object(c),!0).forEach(function(S){n(a,S,c[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach(function(S){Object.defineProperty(a,S,Object.getOwnPropertyDescriptor(c,S))})}return a}function n(a,p,c){return p=e(p),p in a?Object.defineProperty(a,p,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[p]=c,a}function e(a){var p=o(a,"string");return V(p)=="symbol"?p:String(p)}function o(a,p){if(V(a)!="object"||!a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var S=c.call(a,p||"default");if(V(S)!="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return(p==="string"?String:Number)(a)}function s(a,p){if(a==null)return{};var c=y(a,p),S,C;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(C=0;C<i.length;C++)S=i[C],!(p.indexOf(S)>=0)&&Object.prototype.propertyIsEnumerable.call(a,S)&&(c[S]=a[S])}return c}function y(a,p){if(a==null)return{};var c={},S=Object.keys(a),C,i;for(i=0;i<S.length;i++)C=S[i],!(p.indexOf(C)>=0)&&(c[C]=a[C]);return c}var x=(0,F.memo)(function(a){var p=a.items,c=a.openKeys,S=a.selectedKeys,C=a.opened,i=a.setOpened,d=a.className,b=a.headerHeight,w=b===void 0?64:b,I=a.onClick,M=a.iconProps,X=a.rootClassName,Y=a.fullscreen,q=a.drawerProps,te=s(a,m),_=P({fullscreen:Y,headerHeight:w}),l=_.cx,g=_.styles;return(0,k.jsxs)($.Z,t(t({className:l(g.container,d),onClick:function(){i(!C)}},te),{},{children:[(0,k.jsx)(G.Z,t({icon:C?D.Z:L,size:"site"},M)),(0,k.jsxs)(R.Z,t(t({closeIcon:void 0,open:C,placement:"left",width:"100vw"},q),{},{className:g.drawer,rootClassName:l(g.drawerRoot,X),styles:{body:{padding:0},header:{display:"none"}},children:[(0,k.jsx)(Z.Z,{className:g.menu,items:p,mode:"inline",onClick:I,openKeys:c,selectedKeys:S}),(0,k.jsx)("div",{className:g.fillRect})]}))]}))}),N=x},69548:function(re,Q,u){u.d(Q,{Z:function(){return V}});var R=u(88598),Z=u(30985),D=u(58424),E=u(75271),L=u(82187),F=u.n(L),$=function(r){var t=r.prefixCls,n=r.icon,e=r.title,o=r.items,s=o===void 0?[]:o,y=r.style,x=r.className;return E.createElement("div",{className:F()("".concat(t,"-column"),x),style:y},(e||n)&&E.createElement("h2",null,n&&E.createElement("span",{className:"".concat(t,"-column-icon")},n),e),s.map(function(N,a){var p=N.LinkComponent||"a";return E.createElement("div",{className:F()("".concat(t,"-item"),N.className),style:N.style,key:a},E.createElement(p,{href:N.url,to:typeof p!="string"?N.url:void 0,target:N.openExternal?"_blank":void 0,rel:N.openExternal?"noopener noreferrer":void 0},N.icon&&E.createElement("span",{className:"".concat(t,"-item-icon")},N.icon),N.title),N.description&&E.createElement(E.Fragment,null,E.createElement("span",{className:"".concat(t,"-item-separator")},"-"),E.createElement("span",{className:"".concat(t,"-item-description")},N.description)))}))},G=$,B=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],A=function(r){var t=r.prefixCls,n=t===void 0?"rc-footer":t,e=r.className,o=r.style,s=r.bottom,y=r.columns,x=r.maxColumnsPerRow,N=r.backgroundColor,a=r.columnLayout,p=r.theme,c=p===void 0?"dark":p,S=(0,D.Z)(r,B),C=F()("".concat(n),e,(0,Z.Z)({},"".concat(n,"-").concat(c),!!c)),i=typeof x=="number"&&x>0;return E.createElement("footer",(0,R.Z)((0,R.Z)({},S),{},{className:C,style:(0,R.Z)((0,R.Z)({},o),{},{backgroundColor:N})}),E.createElement("section",{className:"".concat(n,"-container")},y&&y.length>0&&E.createElement("section",{className:"".concat(n,"-columns"),style:{justifyContent:a,flexWrap:i?"wrap":void 0}},y.map(function(d,b){var w=d.title,I=d.icon,M=d.style,X=d.className,Y=d.items,q=Y===void 0?[]:Y,te=(0,R.Z)({},M);return i&&(te.flex="0 0 ".concat(100/(x+1)+.1,"%")),E.createElement(G,{key:b,prefixCls:n,title:w,icon:I,items:q,style:te,className:X})}))),s&&E.createElement("section",{className:"".concat(n,"-bottom")},E.createElement("div",{className:"".concat(n,"-bottom-container")},s)))},W=A,T=u(3772),j,h;function v(m,r){return r||(r=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(r)}}))}var O=(0,T.kc)(function(m,r){var t=m.css,n=m.responsive,e=m.token,o=r.isEmpty,s=r.contentMaxWidth,y="rc-footer";return{container:t(j||(j=v([`
        grid-area: footer;
        align-self: stretch;

        color: `,`;
        text-align: center;

        border-block-start: 1px solid `,`;

        `,` {
          flex-direction: column;
          border: none;
        }
      `])),e.colorTextDescription,e.colorSplit,n.mobile),footer:t(h||(h=v([`
        font-size: 14px;
        line-height: 1.5;
        color: `,`;
        background-color: `,`;

        &.`,` {
          a {
            color: `,`;
            text-decoration: none;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .`,` {
          &-container {
            width: 100%;
            max-width: `,`px;
            margin: auto;
            padding: `,`;
          }

          &-columns {
            display: flex;
            justify-content: space-around;
          }

          &-column {
            text-align: start;

            h2 {
              position: relative;

              margin-block: 0;
              margin-inline: auto;

              font-size: 16px;
              font-weight: 500;
              color: `,`;
            }

            &-icon {
              position: relative;
              inset-block-start: -1px;

              display: inline-block;

              width: 22px;
              margin-inline-end: 0.5em;

              text-align: center;
              vertical-align: middle;

              > span,
              > svg,
              img {
                display: block;
                width: 100%;
              }
            }
          }

          &-item {
            margin-block: 12px;
            margin-inline: 0;

            &-icon {
              position: relative;
              inset-block-start: -1px;

              display: inline-block;

              width: 16px;
              margin-inline-end: 0.4em;

              text-align: center;
              vertical-align: middle;

              > span,
              > svg,
              img {
                display: block;
                width: 100%;
              }
            }

            &-separator {
              margin-block: 0;
              margin-inline: 0.3em;
            }
          }

          &-bottom {
            color: `,`;

            &-container {
              width: 100%;
              max-width: `,`px;
              margin-block: 0;
              margin-inline: auto;
              padding-block: 16px;
              padding-inline: 0;

              line-height: 32px;
              text-align: center;
            }
          }

          &-light {
            color: rgba(0, 0, 0, 85%);
            background-color: transparent;

            h2,
            a {
              color: rgba(0, 0, 0, 85%);
            }
          }

          &-light &-bottom-container {
            border-block-start-color: #e8e8e8;
          }

          &-light &-item-separator,
          &-light &-item-description {
            color: rgba(0, 0, 0, 45%);
          }
        }

        `,` {
          .`,` {
            &-container {
              padding-block: 40px;
              padding-inline: 0;
            }

            &-columns {
              display: block;
            }

            &-column {
              display: block;
              margin-block-end: 40px;
              text-align: center;

              &:last-child {
                margin-block-end: 0;
              }
            }
          }
        }
      `])),e.colorTextSecondary,e.colorBgLayout,y,e.colorTextTertiary,e.colorLinkHover,y,s,o?"0":"60px 0 20px",e.colorText,e.colorTextDescription,s,n.mobile,y)}}),P=u(52676),k=(0,E.memo)(function(m){var r=m.columns,t=m.bottom,n=m.theme,e=m.contentMaxWidth,o=e===void 0?960:e,s=!r||(r==null?void 0:r.length)===0,y=O({contentMaxWidth:o,isEmpty:s}),x=y.styles;return(0,P.jsx)("section",{className:x.container,children:(0,P.jsx)(W,{bottom:t,className:x.footer,columns:r,theme:n})})}),V=k},57350:function(re,Q,u){u.d(Q,{Z:function(){return n}});var R=u(46092),Z=u(75271),D=u(17586),E=u(3772),L=u(76863),F,$,G,B;function A(e,o){return o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}}))}var W=(0,E.kc)(function(e){var o=e.css,s=e.responsive,y=e.token,x=e.cx;return{content:o(F||(F=A([`
    height: 64px;
    padding-block: 0;
    padding-inline: 24px;

    background-color: `,`;
    border-block-end: 1px solid `,`;

    `,` {
      padding-block: 0;
      padding-inline: 12px;
    }
  `])),(0,L.m4)(y.colorBgLayout,.4),y.colorSplit,s.mobile),header:x(o($||($=A([`
    grid-area: head;
    align-self: stretch;
    width: 100%;
  `])))),left:o(G||(G=A([`
    z-index: 10;
  `]))),right:o(B||(B=A([`
    z-index: 10;

    &-aside {
      display: flex;
      align-items: center;

      `,` {
        justify-content: center;

        margin-block: 8px;
        margin-inline: 16px;
        padding-block-start: 24px;

        border-block-start: 1px solid `,`;
      }
    }
  `])),s.mobile,y.colorBorder)}}),T=u(52676);function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},j(e)}var h=["actionsClassName","navClassName","logoClassName","nav","logo","actions","actionsStyle","logoStyle","navStyle","className"];function v(e,o){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(e);o&&(y=y.filter(function(x){return Object.getOwnPropertyDescriptor(e,x).enumerable})),s.push.apply(s,y)}return s}function O(e){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?v(Object(s),!0).forEach(function(y){P(e,y,s[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach(function(y){Object.defineProperty(e,y,Object.getOwnPropertyDescriptor(s,y))})}return e}function P(e,o,s){return o=k(o),o in e?Object.defineProperty(e,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[o]=s,e}function k(e){var o=V(e,"string");return j(o)=="symbol"?o:String(o)}function V(e,o){if(j(e)!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var y=s.call(e,o||"default");if(j(y)!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}function m(e,o){if(e==null)return{};var s=r(e,o),y,x;if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(e);for(x=0;x<N.length;x++)y=N[x],!(o.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(e,y)&&(s[y]=e[y])}return s}function r(e,o){if(e==null)return{};var s={},y=Object.keys(e),x,N;for(N=0;N<y.length;N++)x=y[N],!(o.indexOf(x)>=0)&&(s[x]=e[x]);return s}var t=(0,Z.memo)(function(e){var o=e.actionsClassName,s=e.navClassName,y=e.logoClassName,x=e.nav,N=e.logo,a=e.actions,p=e.actionsStyle,c=e.logoStyle,S=e.navStyle,C=e.className,i=m(e,h),d=(0,R.F)(),b=d.mobile,w=W(),I=w.cx,M=w.styles;return(0,T.jsx)("section",O(O({className:I(M.header,C)},i),{},{children:(0,T.jsx)(D.D,{align:"center",className:M.content,distribution:"space-between",horizontal:!0,width:"auto",children:b?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(D.D,{className:o,style:O({flex:0},S),children:x}),(0,T.jsx)(D.D,{className:I(M.left,y),horizontal:!0,style:O({flex:1,overflow:"hidden"},c),children:N}),(0,T.jsx)(D.D,{className:o,style:O({flex:0},p),children:a})]}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(D.D,{className:I(M.left,y),horizontal:!0,style:O({flex:0},c),children:N}),(0,T.jsx)(D.D,{className:s,style:O({flex:1,marginLeft:48,overflow:"hidden"},S),children:x}),(0,T.jsxs)(D.D,{className:I(M.right,o),flex:1,horizontal:!0,justify:"space-between",style:p,children:[(0,T.jsx)("div",{}),(0,T.jsx)(D.D,{align:"center",gap:8,horizontal:!0,children:a})]})]})})}))}),n=t},65994:function(re,Q,u){u.d(Q,{D4:function(){return q},NC:function(){return w},Ku:function(){return I},N_:function(){return M},vK:function(){return X},gn:function(){return Y},ZP:function(){return _}});var R=u(46092),Z=u(75271),D=u(84694),E=u(3772),L,F,$,G,B,A,W,T,j,h;function v(l,g){return g||(g=l.slice(0)),Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(g)}}))}var O=(0,E.kc)(function(l,g){var f=l.css,z=l.stylish,H=l.responsive,K=f(L||(L=v([`
    pointer-events: none;
    content: '';
    user-select: none;

    position: absolute;
    z-index: -1;
    inset-block: -1px `,`;
    inset-inline: 0;
  `])),H.mobile?"-25%":"-50%");return{app:f(F||(F=v([`
      overflow: hidden auto;
      height: 100dvh;
    `]))),aside:f($||($=v([`
      position: sticky;
      z-index: 2;
      height: 100%;
    `]))),asideInner:f(G||(G=v([`
      overflow: hidden auto;
      width: 100%;
      height: calc(100dvh - `,`px);
    `])),g),content:f(B||(B=v([`
      position: relative;
      flex: 1;
      max-width: 100%;
    `]))),footer:f(A||(A=v([`
      position: relative;
      max-width: 100%;
    `]))),glass:f(W||(W=v([`
      z-index: 0;

      &::before {
        `,`;
        `,`;
        mask-image: linear-gradient(to bottom, black `,`px, transparent);
      }

      &::after {
        `,`;
      }
    `])),z.blur,K,g,K),header:f(T||(T=v([`
      position: sticky;
      z-index: 999;
      inset-block-start: 0;
      max-width: 100%;
    `]))),main:f(j||(j=v([`
      position: relative;
      display: flex;
      align-items: stretch;
      max-width: 100vw;
    `]))),toc:f(h||(h=v([""])))}}),P=u(52676);function k(l){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},k(l)}var V=["headerHeight","children","className","style"],m=["children","className"],r=["headerHeight","children","className","style"],t=["headerHeight","children","className"],n=["tocWidth","style","className","children"],e=["children","className"];function o(l,g){return a(l)||N(l,g)||y(l,g)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(l,g){if(l){if(typeof l=="string")return x(l,g);var f=Object.prototype.toString.call(l).slice(8,-1);if(f==="Object"&&l.constructor&&(f=l.constructor.name),f==="Map"||f==="Set")return Array.from(l);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return x(l,g)}}function x(l,g){(g==null||g>l.length)&&(g=l.length);for(var f=0,z=new Array(g);f<g;f++)z[f]=l[f];return z}function N(l,g){var f=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(f!=null){var z,H,K,U,ee=[],J=!0,ae=!1;try{if(K=(f=f.call(l)).next,g===0){if(Object(f)!==f)return;J=!1}else for(;!(J=(z=K.call(f)).done)&&(ee.push(z.value),ee.length!==g);J=!0);}catch(oe){ae=!0,H=oe}finally{try{if(!J&&f.return!=null&&(U=f.return(),Object(U)!==U))return}finally{if(ae)throw H}}return ee}}function a(l){if(Array.isArray(l))return l}function p(l,g){var f=Object.keys(l);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(l);g&&(z=z.filter(function(H){return Object.getOwnPropertyDescriptor(l,H).enumerable})),f.push.apply(f,z)}return f}function c(l){for(var g=1;g<arguments.length;g++){var f=arguments[g]!=null?arguments[g]:{};g%2?p(Object(f),!0).forEach(function(z){S(l,z,f[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(f)):p(Object(f)).forEach(function(z){Object.defineProperty(l,z,Object.getOwnPropertyDescriptor(f,z))})}return l}function S(l,g,f){return g=C(g),g in l?Object.defineProperty(l,g,{value:f,enumerable:!0,configurable:!0,writable:!0}):l[g]=f,l}function C(l){var g=i(l,"string");return k(g)=="symbol"?g:String(g)}function i(l,g){if(k(l)!="object"||!l)return l;var f=l[Symbol.toPrimitive];if(f!==void 0){var z=f.call(l,g||"default");if(k(z)!="object")return z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(g==="string"?String:Number)(l)}function d(l,g){if(l==null)return{};var f=b(l,g),z,H;if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(l);for(H=0;H<K.length;H++)z=K[H],!(g.indexOf(z)>=0)&&Object.prototype.propertyIsEnumerable.call(l,z)&&(f[z]=l[z])}return f}function b(l,g){if(l==null)return{};var f={},z=Object.keys(l),H,K;for(K=0;K<z.length;K++)H=z[K],!(g.indexOf(H)>=0)&&(f[H]=l[H]);return f}var w=(0,Z.memo)(function(l){var g=l.headerHeight,f=l.children,z=l.className,H=l.style,K=d(l,V),U=O(g),ee=U.cx,J=U.styles;return(0,P.jsxs)("header",c(c({className:ee(J.header,z),style:c({height:g},H)},K),{},{children:[(0,P.jsx)("div",{className:J.glass}),f]}))}),I=(0,Z.memo)(function(l){var g=l.children,f=l.className,z=d(l,m),H=O(),K=H.cx,U=H.styles;return(0,P.jsx)("main",c(c({className:K(U.main,f)},z),{},{children:g}))}),M=(0,Z.memo)(function(l){var g=l.headerHeight,f=l.children,z=l.className,H=l.style,K=d(l,r),U=O(g),ee=U.cx,J=U.styles;return(0,P.jsx)("aside",c(c({className:ee(J.aside,z),style:c({top:g},H)},K),{},{children:f}))}),X=(0,Z.memo)(function(l){var g=l.headerHeight,f=l.children,z=l.className,H=d(l,t),K=O(g),U=K.cx,ee=K.styles;return(0,P.jsx)("div",c(c({className:U(ee.asideInner,z)},H),{},{children:f}))}),Y=(0,Z.memo)(function(l){var g=l.tocWidth,f=l.style,z=l.className,H=l.children,K=d(l,n),U=O(),ee=U.cx,J=U.styles;return(0,P.jsx)("nav",c(c({className:ee(J.toc,z),style:g?c({width:g},f):f},K),{},{children:H}))}),q=(0,Z.memo)(function(l){var g=l.children,f=l.className,z=d(l,e),H=O(),K=H.cx,U=H.styles;return(0,P.jsx)("footer",c(c({className:K(U.footer,f)},z),{},{children:g}))}),te=(0,Z.memo)(function(l){var g=l.helmet,f=l.headerHeight,z=f===void 0?64:f,H=l.header,K=l.footer,U=l.sidebar,ee=l.asideWidth,J=l.toc,ae=l.children,oe=l.tocWidth,ce=O(z),he=ce.styles,ue=(0,R.F)(),le=ue.mobile,de=ue.laptop,me=(0,Z.useState)(!0),se=o(me,2),pe=se[0],ye=se[1];return(0,Z.useEffect)(function(){ye(!!de)},[de]),(0,P.jsxs)(P.Fragment,{children:[g,H&&(0,P.jsxs)(w,{headerHeight:z,children:[H,le&&J&&(0,P.jsx)(Y,{children:J})]}),(0,P.jsxs)(I,{children:[!le&&!U&&(0,P.jsx)("nav",{style:{width:oe}}),!le&&U&&(0,P.jsx)(M,{headerHeight:z,children:(0,P.jsx)(D.Z,{expand:pe,maxWidth:ee,onExpandChange:ye,placement:"left",children:(0,P.jsx)(X,{headerHeight:z,children:U})})}),(0,P.jsx)("section",{className:he.content,children:ae}),!le&&J&&(0,P.jsx)(Y,{tocWidth:oe,children:J})]}),K&&(0,P.jsx)(q,{children:K})]})}),_=te},94606:function(re,Q,u){u.d(Q,{Z:function(){return T}});var R=u(46316),Z=u(52676);function D(j){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},D(j)}var E=["children","className","fontSize","headerMultiple","marginMultiple","lineHeight"];function L(j,h){var v=Object.keys(j);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(j);h&&(O=O.filter(function(P){return Object.getOwnPropertyDescriptor(j,P).enumerable})),v.push.apply(v,O)}return v}function F(j){for(var h=1;h<arguments.length;h++){var v=arguments[h]!=null?arguments[h]:{};h%2?L(Object(v),!0).forEach(function(O){$(j,O,v[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(j,Object.getOwnPropertyDescriptors(v)):L(Object(v)).forEach(function(O){Object.defineProperty(j,O,Object.getOwnPropertyDescriptor(v,O))})}return j}function $(j,h,v){return h=G(h),h in j?Object.defineProperty(j,h,{value:v,enumerable:!0,configurable:!0,writable:!0}):j[h]=v,j}function G(j){var h=B(j,"string");return D(h)=="symbol"?h:String(h)}function B(j,h){if(D(j)!="object"||!j)return j;var v=j[Symbol.toPrimitive];if(v!==void 0){var O=v.call(j,h||"default");if(D(O)!="object")return O;throw new TypeError("@@toPrimitive must return a primitive value.")}return(h==="string"?String:Number)(j)}function A(j,h){if(j==null)return{};var v=W(j,h),O,P;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(j);for(P=0;P<k.length;P++)O=k[P],!(h.indexOf(O)>=0)&&Object.prototype.propertyIsEnumerable.call(j,O)&&(v[O]=j[O])}return v}function W(j,h){if(j==null)return{};var v={},O=Object.keys(j),P,k;for(k=0;k<O.length;k++)P=O[k],!(h.indexOf(P)>=0)&&(v[P]=j[P]);return v}var T=function(h){var v=h.children,O=h.className,P=h.fontSize,k=h.headerMultiple,V=h.marginMultiple,m=h.lineHeight,r=A(h,E),t=(0,R.y)({fontSize:P,headerMultiple:k,lineHeight:m,marginMultiple:V}),n=t.cx,e=t.styles;return(0,Z.jsx)("article",F(F({className:n(e.__root,e.a,e.blockquote,e.code,e.details,e.header,e.hr,e.img,e.kbd,e.list,e.p,e.pre,e.strong,e.table,e.video,O)},r),{},{children:v}))}},985:function(re,Q,u){u.d(Q,{Z:function(){return C}});var R=u(65289),Z=u(82014);const D=(0,Z.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var E=u(75271),L=u(65720),F=u(27046),$=u(6751),G=u(43728),B=u(76417),A=u(3772),W,T,j,h;function v(i,d){return d||(d=i.slice(0)),Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(d)}}))}var O=(0,A.kc)(function(i){var d=i.css,b=i.token,w=i.stylish,I=i.cx;return{icon:d(W||(W=v([`
    color: `,`;
  `])),b.colorTextPlaceholder),input:d(T||(T=v([`
    position: relative;
    padding-block: 0;
    padding-inline: 12px 8px;
  `]))),search:d(j||(j=v([`
    position: relative;
    max-width: 100%;
  `]))),tag:I(w.blur,d(h||(h=v([`
      pointer-events: none;

      position: absolute;
      z-index: 5;
      inset-block-start: 50%;
      inset-inline-end: 0;
      transform: translateY(-50%);

      color: `,`;
    `])),b.colorTextDescription))}}),P=u(52676);function k(i){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},k(i)}var V=["defaultValue","spotlight","className","value","onInputChange","placeholder","enableShortKey","shortKey","onSearch","loading","style","onChange","onBlur","onPressEnter","onFocus","styles","classNames"];function m(i,d){var b=Object.keys(i);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(i);d&&(w=w.filter(function(I){return Object.getOwnPropertyDescriptor(i,I).enumerable})),b.push.apply(b,w)}return b}function r(i){for(var d=1;d<arguments.length;d++){var b=arguments[d]!=null?arguments[d]:{};d%2?m(Object(b),!0).forEach(function(w){t(i,w,b[w])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(b)):m(Object(b)).forEach(function(w){Object.defineProperty(i,w,Object.getOwnPropertyDescriptor(b,w))})}return i}function t(i,d,b){return d=n(d),d in i?Object.defineProperty(i,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):i[d]=b,i}function n(i){var d=e(i,"string");return k(d)=="symbol"?d:String(d)}function e(i,d){if(k(i)!="object"||!i)return i;var b=i[Symbol.toPrimitive];if(b!==void 0){var w=b.call(i,d||"default");if(k(w)!="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(i)}function o(i,d){return a(i)||N(i,d)||y(i,d)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(i,d){if(i){if(typeof i=="string")return x(i,d);var b=Object.prototype.toString.call(i).slice(8,-1);if(b==="Object"&&i.constructor&&(b=i.constructor.name),b==="Map"||b==="Set")return Array.from(i);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return x(i,d)}}function x(i,d){(d==null||d>i.length)&&(d=i.length);for(var b=0,w=new Array(d);b<d;b++)w[b]=i[b];return w}function N(i,d){var b=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(b!=null){var w,I,M,X,Y=[],q=!0,te=!1;try{if(M=(b=b.call(i)).next,d===0){if(Object(b)!==b)return;q=!1}else for(;!(q=(w=M.call(b)).done)&&(Y.push(w.value),Y.length!==d);q=!0);}catch(_){te=!0,I=_}finally{try{if(!q&&b.return!=null&&(X=b.return(),Object(X)!==X))return}finally{if(te)throw I}}return Y}}function a(i){if(Array.isArray(i))return i}function p(i,d){if(i==null)return{};var b=c(i,d),w,I;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(i);for(I=0;I<M.length;I++)w=M[I],!(d.indexOf(w)>=0)&&Object.prototype.propertyIsEnumerable.call(i,w)&&(b[w]=i[w])}return b}function c(i,d){if(i==null)return{};var b={},w=Object.keys(i),I,M;for(M=0;M<w.length;M++)I=w[M],!(d.indexOf(I)>=0)&&(b[I]=i[I]);return b}var S=(0,E.memo)(function(i){var d=i.defaultValue,b=i.spotlight,w=i.className,I=i.value,M=i.onInputChange,X=i.placeholder,Y=i.enableShortKey,q=i.shortKey,te=q===void 0?"f":q,_=i.onSearch,l=i.loading,g=i.style,f=i.onChange,z=i.onBlur,H=i.onPressEnter,K=i.onFocus,U=i.styles,ee=U===void 0?{}:U,J=ee.input,ae=ee.shortKey,oe=i.classNames,ce=oe===void 0?{}:oe,he=ce.input,ue=ce.shortKey,le=p(i,V),de=(0,L.Z)(d,{defaultValue:d,onChange:M,value:I}),me=o(de,2),se=me[0],pe=me[1],ye=(0,E.useState)("Ctrl"),je=o(ye,2),we=je[0],Ne=je[1],Ce=(0,E.useState)(!0),Oe=o(Ce,2),ze=Oe[0],ge=Oe[1],Se=O(),be=Se.styles,ve=Se.cx,Pe=(0,E.useRef)(null);return(0,E.useEffect)(function(){var ie;if(Y){var ne=/(mac|iphone|ipod|ipad)/i.test(typeof navigator=="undefined"?"":(ie=navigator)===null||ie===void 0?void 0:ie.platform);ne&&Ne("\u2318");var ke=function(fe){if((ne?fe.metaKey:fe.ctrlKey)&&fe.key===te){var xe;fe.preventDefault(),(xe=Pe.current)===null||xe===void 0||xe.focus()}};return document.addEventListener("keydown",ke),function(){return document.removeEventListener("keydown",ke)}}},[]),(0,P.jsxs)("div",{className:ve(be.search,w),style:g,children:[b&&(0,P.jsx)(B.Z,{}),(0,P.jsx)($.I,r({allowClear:!0,className:ve(be.input,he),onBlur:function(ne){z==null||z(ne),pe(ne.target.value),ne.target.value||ge(!0)},onChange:function(ne){f==null||f(ne),pe(ne.target.value),ne.target.value?ge(!1):(ge(!0),_==null||_(ne.target.value))},onFocus:function(ne){K==null||K(ne),ge(!1)},onPressEnter:function(ne){H==null||H(ne),_==null||_(se)},placeholder:X!=null?X:"Type keywords...",prefix:(0,P.jsx)(F.Z,{className:be.icon,icon:l?R.Z:D,size:"small",spin:l,style:{marginRight:4}}),ref:Pe,style:J,value:I},le)),Y&&ze&&!se&&(0,P.jsxs)(G.Z,{className:ve(be.tag,ue),style:ae,children:[we," ",te.toUpperCase()]})]})}),C=S},77314:function(re,Q,u){u.d(Q,{Z:function(){return h}});var R=u(98721),Z=u(159),D=u(82014);const E=(0,D.Z)("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);const L=(0,D.Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);const F=(0,D.Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);var $=u(75271),G=u(17586),B=u(17394),A=u(27046),W=u(52676),T={auto:E,dark:L,light:F},j=(0,$.memo)(function(v){var O=v.size,P=O===void 0?"site":O,k=v.themeMode,V=v.onThemeSwitch,m=v.type,r=m===void 0?"icon":m,t=v.labels,n=t===void 0?{auto:"System",dark:"Dark",light:"Light"}:t,e=v.className,o=v.style,s=(0,$.useMemo)(function(){return[{icon:(0,W.jsx)(A.Z,{icon:T.auto,size:"small"}),key:"auto",label:n.auto},{icon:(0,W.jsx)(A.Z,{icon:T.light,size:"small"}),key:"light",label:n.light},{icon:(0,W.jsx)(A.Z,{icon:T.dark,size:"small"}),key:"dark",label:n.dark}]},[n]);if(r==="select")return(0,W.jsx)(R.default,{className:e,defaultValue:k,onChange:V,options:s.map(function(x){return{label:(0,W.jsxs)(G.D,{direction:"horizontal",gap:8,children:[x.icon,x.label]}),value:x.key}}),style:o});var y={items:s,onClick:function(N){return V(N.key)}};return(0,W.jsx)(Z.Z,{menu:y,trigger:["click"],children:(0,W.jsx)(B.Z,{className:e,icon:T[k],size:P,style:o})})}),h=j},64068:function(re,Q,u){u.d(Q,{Z:function(){return N}});var R=u(71477),Z=u(75271),D=u(98639),E=u(40765),L=u(82014);const F=(0,L.Z)("PanelTopClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);const $=(0,L.Z)("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);var G=u(65720),B=u(17394),A=u(3772),W=u(76863),T,j,h,v;function O(a,p){return p||(p=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(p)}}))}var P=(0,A.kc)(function(a,p){var c=a.token,S=a.stylish,C=a.responsive,i=a.cx,d=a.css,b=a.prefixCls,w=p.tocWidth,I=p.headerHeight,M=36;return{anchor:i(S.blur,d(T||(T=O([`
          overflow: hidden auto;
          max-height: 60dvh !important;
        `])))),container:d(j||(j=O([`
        position: sticky;
        inset-block-start: `,`px;

        overscroll-behavior: contain;
        grid-area: toc;

        width: `,`px;
        margin-inline-end: 24px;

        border-radius: 3px;

        -webkit-overflow-scrolling: touch;

        `,` {
          position: relative;
          inset-inline-start: 0;
          width: 100%;
          margin-block-start: 0;
        }

        > h4 {
          margin-block: 0 8px;
          margin-inline: 0;

          font-size: 12px;
          line-height: 1;
          color: `,`;
        }
      `])),I+64,w,C.mobile,c.colorTextDescription),expand:i(S.blur,d(h||(h=O([`
          width: 100%;

          background-color: `,`;
          border-block-end: 1px solid `,`;
          border-radius: 0;
          box-shadow: `,`;

          .`,`-collapse-content {
            overflow: auto;
          }

          .`,`-collapse-header {
            z-index: 10;
            padding-block: 8px !important;
            padding-inline: 16px !important;
          }
        `])),(0,W.m4)(c.colorBgLayout,.5),c.colorSplit,c.boxShadowSecondary,b,b)),mobileCtn:d(v||(v=O([`
        width: 100%;
        height: `,`px;

        .`,`-collapse-expand-icon {
          color: `,`;
        }
      `])),M,b,c.colorTextQuaternary)}}),k=u(52676);function V(a,p){return e(a)||n(a,p)||r(a,p)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,p){if(a){if(typeof a=="string")return t(a,p);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return t(a,p)}}function t(a,p){(p==null||p>a.length)&&(p=a.length);for(var c=0,S=new Array(p);c<p;c++)S[c]=a[c];return S}function n(a,p){var c=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var S,C,i,d,b=[],w=!0,I=!1;try{if(i=(c=c.call(a)).next,p===0){if(Object(c)!==c)return;w=!1}else for(;!(w=(S=i.call(c)).done)&&(b.push(S.value),b.length!==p);w=!0);}catch(M){I=!0,C=M}finally{try{if(!w&&c.return!=null&&(d=c.return(),Object(d)!==d))return}finally{if(I)throw C}}return b}}function e(a){if(Array.isArray(a))return a}var o=function(p){return p.map(function(c){var S;return{children:(S=c.children)===null||S===void 0?void 0:S.map(function(C){return{href:"#".concat(C.id),key:C.id,title:C==null?void 0:C.title}}),href:"#".concat(c.id),key:c.id,title:c.title}})},s=(0,Z.memo)(function(a){var p=a.items,c=a.activeKey,S=a.onChange,C=a.getContainer,i=a.headerHeight,d=i===void 0?64:i,b=a.tocWidth,w=b===void 0?176:b,I=(0,G.Z)("",{onChange:S,value:c}),M=V(I,2),X=M[0],Y=M[1],q=P({headerHeight:d,tocWidth:w}),te=q.styles,_=p.find(function(l){return l.id===X});return(0,k.jsx)(D.ZP,{theme:{token:{fontSize:12,sizeStep:3}},children:(0,k.jsx)("section",{className:te.mobileCtn,children:(0,k.jsx)(E.Z,{bordered:!1,className:te.expand,expandIcon:function(g){var f=g.isActive;return f?(0,k.jsx)(B.Z,{icon:F,size:{blockSize:24,borderRadius:3,fontSize:16,strokeWidth:1}}):(0,k.jsx)(B.Z,{icon:$,size:{blockSize:24,borderRadius:3,fontSize:16,strokeWidth:1}})},expandIconPosition:"end",ghost:!0,children:(0,k.jsx)(E.Z.Panel,{forceRender:!0,header:_?_.title:"TOC",children:(0,k.jsx)(D.ZP,{theme:{token:{fontSize:14,sizeStep:4}},children:(0,k.jsx)(R.Z,{getContainer:C,items:o(p),onChange:function(g){Y(g.replace("#",""))},targetOffset:d+48})})},"toc")})})})}),y=s,x=(0,Z.memo)(function(a){var p=a.activeKey,c=a.items,S=a.getContainer,C=a.isMobile,i=a.headerHeight,d=i===void 0?64:i,b=a.tocWidth,w=b===void 0?176:b,I=P({headerHeight:d,tocWidth:w}),M=I.styles,X=I.cx;return C?(0,k.jsx)(y,{activeKey:p,getContainer:S,headerHeight:d,items:c}):(0,k.jsxs)("section",{className:X(M.container,M.anchor),children:[(0,k.jsx)("h4",{children:"Table of Contents"}),(0,k.jsx)(R.Z,{getContainer:S,items:o(c),targetOffset:d+12})]})}),N=x},37854:function(re,Q,u){u.d(Q,{Z:function(){return t}});var R=u(75271),Z=u(17586),D=u(3772),E,L,F,$,G;function B(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var A=(0,D.kc)(function(n){var e=n.cx,o=n.isDarkMode,s=n.css,y=n.responsive,x=(0,D.F4)(E||(E=B([`
  0% {
    background-position: 50% 50%, 50% 50%;
  }
  100% {
    background-position: 350% 50%, 350% 50%;
  }
`]))),N=s(L||(L=B([`
    background-image: repeating-linear-gradient(
        100deg,
        rgb(0, 0, 0) 0%,
        rgb(0, 0, 0) 7%,
        rgba(0, 0, 0, 0%) 10%,
        rgba(0, 0, 0, 0%) 12%,
        rgb(0, 0, 0) 16%
      ),
      repeating-linear-gradient(
        100deg,
        rgb(59, 130, 246) 10%,
        rgb(165, 180, 252) 15%,
        rgb(147, 197, 253) 20%,
        rgb(221, 214, 254) 25%,
        rgb(96, 165, 250) 30%
      );
  `]))),a=s(F||(F=B([`
    background-image: repeating-linear-gradient(
        100deg,
        rgb(255, 255, 255) 0%,
        rgb(255, 255, 255) 7%,
        rgba(0, 0, 0, 0%) 10%,
        rgba(0, 0, 0, 0%) 12%,
        rgb(255, 255, 255) 16%
      ),
      repeating-linear-gradient(
        100deg,
        rgb(59, 130, 246) 10%,
        rgb(165, 180, 252) 15%,
        rgb(147, 197, 253) 20%,
        rgb(221, 214, 254) 25%,
        rgb(96, 165, 250) 30%
      );
  `]))),p=o?N:a;return{bg:e(p,s($||($=B([`
        pointer-events: none;
        will-change: transform;

        position: absolute;
        inset: -10px;

        max-height: 100vh;

        opacity: `,`;
        background-position:
          50% 50%,
          50% 50%;
        background-size: 300%, 200%;
        filter: blur(10px) invert(`,`);

        animation: `,` 100s linear infinite;

        mask-image: radial-gradient(at 100% 0, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0%) 70%);

        &::after {
          `,`;
          position: absolute;

          content: '';

          inset: 0;

          animation: `,` 100s linear infinite;

          mix-blend-mode: difference;
          background-attachment: fixed;
          background-size: 200%, 100%;
        }

        `,` {
          transform: scale(2);
          max-height: 25vh;
        }
      `])),o?.3:.6,o?0:1,x,p,x,y.mobile)),wrapper:s(G||(G=B([`
      position: absolute;
      z-index: 0;
      inset: 0;
      overflow: hidden;
    `])))}}),W=u(52676);function T(n){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(n)}var j=["children"];function h(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(y){return Object.getOwnPropertyDescriptor(n,y).enumerable})),o.push.apply(o,s)}return o}function v(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?h(Object(o),!0).forEach(function(s){O(n,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(o,s))})}return n}function O(n,e,o){return e=P(e),e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function P(n){var e=k(n,"string");return T(e)=="symbol"?e:String(e)}function k(n,e){if(T(n)!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var s=o.call(n,e||"default");if(T(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function V(n,e){if(n==null)return{};var o=m(n,e),s,y;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(n);for(y=0;y<x.length;y++)s=x[y],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(o[s]=n[s])}return o}function m(n,e){if(n==null)return{};var o={},s=Object.keys(n),y,x;for(x=0;x<s.length;x++)y=s[x],!(e.indexOf(y)>=0)&&(o[y]=n[y]);return o}var r=(0,R.memo)(function(n){var e=n.children,o=V(n,j),s=A(),y=s.styles;return(0,W.jsxs)(Z.D,v(v({},o),{},{children:[(0,W.jsx)(Z.D,{className:y.wrapper,children:(0,W.jsx)("div",{className:y.bg})}),(0,W.jsx)(Z.D,{flex:1,style:{zIndex:1},width:"100%",children:e})]}))}),t=r},9328:function(re,Q,u){u.d(Q,{Z:function(){return m}});var R=u(52676),Z=u(75271);function D({id:r,host:t,repo:n,repoId:e,category:o,categoryId:s,mapping:y,term:x,strict:N,reactionsEnabled:a,emitMetadata:p,inputPosition:c,theme:S,lang:C,loading:i}){const[d,b]=(0,Z.useState)(!1);return(0,Z.useEffect)(()=>{d||u.e(95956).then(u.bind(u,95956)).then(()=>b(!0))},[]),d?(0,R.jsx)("giscus-widget",{id:r,host:t,repo:n,repoid:e,category:o,categoryid:s,mapping:y,term:x,strict:N,reactionsenabled:a,emitmetadata:p,inputposition:c,theme:S,lang:C,loading:i}):null}var E=u(3772),L=u(76863),F;function $(r,t){return t||(t=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(t)}}))}var G=function(){var t=(0,E.Fg)(),n=t.colorText,e=t.colorTextSecondary,o=t.colorTextTertiary,s=t.colorError,y=t.colorWarning,x=t.colorSuccess,N=t.colorInfo,a=t.isDarkMode?"https://github.com/images/modules/pulls/progressive-disclosure-line-dark.svg":"https://github.com/images/modules/pulls/progressive-disclosure-line.svg",p=t.isDarkMode?"https://github.githubassets.com/images/mona-loading-dark.gif":"https://github.githubassets.com/images/mona-loading-default.gif",c=(0,E.iv)(F||(F=$([`
    main {
      --color-prettylights-syntax-comment: `,`;
      --color-prettylights-syntax-constant: `,`;
      --color-prettylights-syntax-entity: `,`;
      --color-prettylights-syntax-storage-modifier-import: `,`;
      --color-prettylights-syntax-entity-tag: `,`;
      --color-prettylights-syntax-keyword: `,`;
      --color-prettylights-syntax-string: `,`;
      --color-prettylights-syntax-variable: `,`;
      --color-prettylights-syntax-brackethighlighter-unmatched: `,`;
      --color-prettylights-syntax-invalid-illegal-text: `,`;
      --color-prettylights-syntax-invalid-illegal-bg: `,`;
      --color-prettylights-syntax-carriage-return-text: `,`;
      --color-prettylights-syntax-carriage-return-bg: `,`;
      --color-prettylights-syntax-string-regexp: `,`;
      --color-prettylights-syntax-markup-list: `,`;
      --color-prettylights-syntax-markup-heading: `,`;
      --color-prettylights-syntax-markup-italic: `,`;
      --color-prettylights-syntax-markup-bold: `,`;
      --color-prettylights-syntax-markup-deleted-text: `,`;
      --color-prettylights-syntax-markup-deleted-bg: `,`;
      --color-prettylights-syntax-markup-inserted-text: `,`;
      --color-prettylights-syntax-markup-inserted-bg: `,`;
      --color-prettylights-syntax-markup-changed-text: `,`;
      --color-prettylights-syntax-markup-changed-bg: `,`;
      --color-prettylights-syntax-markup-ignored-text: `,`;
      --color-prettylights-syntax-markup-ignored-bg: `,`;
      --color-prettylights-syntax-meta-diff-range: `,`;
      --color-prettylights-syntax-brackethighlighter-angle: `,`;
      --color-prettylights-syntax-sublimelinter-gutter-mark: `,`;
      --color-prettylights-syntax-constant-other-reference-link: `,`;
      --color-btn-text: `,`;
      --color-btn-bg: `,`;
      --color-btn-border: `,`;
      --color-btn-shadow: 0 0 transparent;
      --color-btn-inset-shadow: 0 0 transparent;
      --color-btn-hover-bg: `,`;
      --color-btn-hover-border: `,`;
      --color-btn-active-bg: `,`;
      --color-btn-active-border: `,`;
      --color-btn-selected-bg: `,`;
      --color-btn-primary-text: `,`;
      --color-btn-primary-bg: `,`;
      --color-btn-primary-border: `,`;
      --color-btn-primary-shadow: 0 0 transparent;
      --color-btn-primary-inset-shadow: 0 0 transparent;
      --color-btn-primary-hover-bg: `,`;
      --color-btn-primary-hover-border: `,`;
      --color-btn-primary-selected-bg: `,`;
      --color-btn-primary-selected-shadow: 0 0 transparent;
      --color-btn-primary-disabled-text: `,`;
      --color-btn-primary-disabled-bg: `,`;
      --color-btn-primary-disabled-border: `,`;
      --color-action-list-item-default-hover-bg: `,`;
      --color-segmented-control-bg: `,`;
      --color-segmented-control-button-bg: transparent;
      --color-segmented-control-button-selected-border: `,`;
      --color-fg-default: `,`;
      --color-fg-muted: `,`;
      --color-fg-subtle: `,`;
      --color-canvas-default: transparent;
      --color-canvas-overlay: `,`;
      --color-canvas-inset: transparent;
      --color-canvas-subtle: `,`;
      --color-border-default: `,`;
      --color-border-muted: `,`;
      --color-neutral-muted: `,`;
      --color-neutral-subtle: `,`;
      --color-accent-fg: `,`;
      --color-accent-emphasis: `,`;
      --color-accent-muted: `,`;
      --color-accent-subtle: `,`;
      --color-success-fg: `,`;
      --color-attention-fg: `,`;
      --color-attention-muted: `,`;
      --color-attention-subtle: `,`;
      --color-danger-fg: `,`;
      --color-danger-muted: `,`;
      --color-danger-subtle: `,`;
      --color-primer-shadow-inset: 0 0 transparent;
      --color-scale-gray-7: `,`;
      --color-scale-blue-8: `,`;
      --color-social-reaction-bg-hover: `,`;
      --color-social-reaction-bg-reacted-hover: `,`;

      .markdown pre {
        color: `,`;
      }

      .pagination-loader-container {
        background-image: url(`,`);
      }

      .gsc-pagination-button {
        background-color: var(--color-btn-bg);
      }

      .gsc-reactions-popover {
        width: 170px;

        > .m-2 {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
      }

      .gsc-emoji-button.has-reacted {
        border-color: `,`;
        border-radius: `,`px;
      }

      .gsc-loading-image {
        background-image: url(`,`);
      }
    }
  `])),o,x,y,s,N,N,x,s,s,e,(0,L.m4)(s,.4),e,(0,L.m4)(s,.6),x,y,N,e,e,e,(0,L.m4)(s,.2),x,(0,L.m4)(x,.2),y,(0,L.m4)(s,.2),e,(0,L.m4)(N,.2),y,e,o,N,t.colorText,t.colorFillTertiary,t.colorBorderSecondary,t.colorFillSecondary,t.colorBorder,t.colorFillSecondary,t.colorBorder,t.colorFillSecondary,(0,L.XV)(t.colorPrimary),t.colorPrimary,t.colorPrimaryBorder,t.colorPrimaryHover,t.colorPrimaryBorderHover,t.colorPrimaryActive,(0,L.m4)((0,L.XV)(t.colorPrimary),.5),(0,L.m4)(t.colorPrimary,.5),(0,L.m4)(t.colorPrimaryBorder,.5),t.colorFillQuaternary,t.colorFillTertiary,t.colorBorder,t.colorText,t.colorTextSecondary,t.colorTextQuaternary,t.colorBgElevated,t.colorFillQuaternary,t.colorBorder,t.colorBorderSecondary,t.colorFillQuaternary,t.colorFillTertiary,t.colorInfo,t.colorInfoBorderHover,t.colorInfoBorder,t.colorInfoBg,t.colorSuccess,t.colorWarning,t.colorWarningBorder,t.colorWarningBg,t.colorError,t.colorErrorBorder,t.colorErrorBg,t.colorBgContainer,t.colorInfoBg,t.colorFillSecondary,t.colorInfoBgHover,n,a,t.colorInfoBorderHover,t.borderRadius,p),S=c.styles;return(0,Z.useMemo)(function(){return"data:text/css;base64,".concat(btoa(S))},[S])},B=function(t){return["zh_CN","zh_TW"].includes(t)?t.replace("_","-"):t==="zh_HK"?"zh-TW":t.split("_")[0]};function A(r){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(r)}var W=["style","className","reactionsEnabled","mapping","lang","inputPosition","id","loading","emitMetadata"];function T(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,e)}return n}function j(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(e){h(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function h(r,t,n){return t=v(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function v(r){var t=O(r,"string");return A(t)=="symbol"?t:String(t)}function O(r,t){if(A(r)!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var e=n.call(r,t||"default");if(A(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function P(r,t){if(r==null)return{};var n=k(r,t),e,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(o=0;o<s.length;o++)e=s[o],!(t.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(r,e)&&(n[e]=r[e])}return n}function k(r,t){if(r==null)return{};var n={},e=Object.keys(r),o,s;for(s=0;s<e.length;s++)o=e[s],!(t.indexOf(o)>=0)&&(n[o]=r[o]);return n}var V=(0,Z.memo)(function(r){var t=r.style,n=r.className,e=r.reactionsEnabled,o=e===void 0?"1":e,s=r.mapping,y=s===void 0?"title":s,x=r.lang,N=x===void 0?"en_US":x,a=r.inputPosition,p=a===void 0?"top":a,c=r.id,S=c===void 0?"giscus":c,C=r.loading,i=C===void 0?"lazy":C,d=r.emitMetadata,b=d===void 0?"0":d,w=P(r,W),I=G();return(0,R.jsx)("div",{className:n,style:t,children:(0,R.jsx)(D,j({emitMetadata:b,id:S,inputPosition:p,lang:B(N),loading:i,mapping:y,reactionsEnabled:o,theme:I},w))})}),m=V},78983:function(re,Q,u){u.d(Q,{Z:function(){return V}});var R=u(22622),Z=u(75271),D=u(3772),E,L;function F(m,r){return r||(r=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(r)}}))}var $=(0,D.kc)(function(m,r){var t=m.cx,n=m.css,e=m.token,o=m.isDarkMode,s=m.stylish,y;switch(r){case"large":{y=e.borderRadiusLG;break}case"middle":{y=e.borderRadius;break}case"small":{y=e.borderRadiusSM;break}default:{y=e.borderRadius;break}}return{button:t(s.gradientAnimation,n(E||(E=F([`
          position: relative;
          z-index: 1;
          border: none;
          border-radius: `,`px !important;

          &::before {
            content: '';

            position: absolute;
            z-index: -1;
            inset-block-start: 1px;
            inset-inline-start: 1px;

            width: calc(100% - 2px);
            height: calc(100% - 2px);

            background: `,`;
            border-radius: `,`px;
          }

          &:hover {
            background: `,` !important;
          }
        `])),y,e.colorBgLayout,y-1,e.colorPrimary)),glow:n(L||(L=F([`
        `,`
        position: absolute;
        z-index: -2;
        inset-block-start: 0;
        inset-inline-start: 0;

        width: 100%;
        height: 100%;

        opacity: `,`;
        filter: blur(`,`em);
        border-radius: inherit;
      `])),s.gradientAnimation,o?.5:.3,o?1.5:1)}}),G=u(52676);function B(m){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},B(m)}var A=["glow","children","className","size"];function W(m,r){var t=Object.keys(m);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(m);r&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(m,e).enumerable})),t.push.apply(t,n)}return t}function T(m){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?W(Object(t),!0).forEach(function(n){j(m,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(n){Object.defineProperty(m,n,Object.getOwnPropertyDescriptor(t,n))})}return m}function j(m,r,t){return r=h(r),r in m?Object.defineProperty(m,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):m[r]=t,m}function h(m){var r=v(m,"string");return B(r)=="symbol"?r:String(r)}function v(m,r){if(B(m)!="object"||!m)return m;var t=m[Symbol.toPrimitive];if(t!==void 0){var n=t.call(m,r||"default");if(B(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(m)}function O(m,r){if(m==null)return{};var t=P(m,r),n,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(m);for(e=0;e<o.length;e++)n=o[e],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(m,n)&&(t[n]=m[n])}return t}function P(m,r){if(m==null)return{};var t={},n=Object.keys(m),e,o;for(o=0;o<n.length;o++)e=n[o],!(r.indexOf(e)>=0)&&(t[e]=m[e]);return t}var k=(0,Z.memo)(function(m){var r=m.glow,t=r===void 0?!0:r,n=m.children,e=m.className,o=m.size,s=o===void 0?"large":o,y=O(m,A),x=$(s),N=x.styles,a=x.cx;return(0,G.jsxs)(R.ZP,T(T({className:a(N.button,e),size:s},y),{},{children:[t&&(0,G.jsx)("div",{className:N.glow}),n]}))}),V=k},1393:function(re,Q,u){u.d(Q,{Z:function(){return t}});var R=u(22622),Z=u(98639),D=u(46092),E=u(82014);const L=(0,E.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);var F=u(75271),$=u(17586),G=u(40863),B=u(36162),A=u(27046),W=u(37854),T=u(78983),j=u(3772),h,v,O,P;function k(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var V=(0,j.kc)(function(n){var e=n.css,o=n.responsive,s=n.token,y=n.stylish;return{actions:e(h||(h=k([`
    margin-block-start: 24px;

    button {
      padding-inline: 32px !important;
      font-weight: 500;
    }

    `,` {
      flex-direction: column;
      gap: 16px;
      width: 100%;
      margin-block-start: 24px;

      button {
        width: 100%;
      }
    }
  `])),o.mobile),container:e(v||(v=k([`
    position: relative;
    box-sizing: border-box;
    text-align: center;
  `]))),desc:e(O||(O=k([`
    margin-block-start: 0;
    font-size: `,`px;
    color: `,`;
    text-align: center;

    `,` {
      margin-block: 24px;
      margin-inline: 16px;
      font-size: `,`px;
    }
  `])),s.fontSizeHeading3,s.colorTextSecondary,o.mobile,s.fontSizeHeading5),title:e(P||(P=k([`
    z-index: 10;

    margin: 0;

    font-size: min(100px, 10vw);
    line-height: 1.2;
    text-align: center;

    b {
      `,`
      position: relative;
      z-index: 5;
      background-clip: text;

      -webkit-text-fill-color: transparent;

      &::selection {
        -webkit-text-fill-color: #000 !important;
      }
    }

    `,` {
      font-size: 64px;
    }
  `])),y.gradientAnimation,o.mobile)}}),m=u(52676),r=(0,F.memo)(function(n){var e=n.title,o=n.description,s=n.actions,y=n.Link,x=V(),N=x.styles,a=(0,D.F)(),p=a.mobile,c=y||B.Z,S=(0,F.useCallback)(function(){return!!(s!=null&&s.length)&&(0,m.jsx)($.D,{className:N.actions,gap:16,horizontal:!0,justify:"center",children:s.map(function(C,i){var d=C.text,b=C.link,w=C.openExternal,I=C.icon,M=C.type,X=I==="Github"?(0,m.jsx)(A.Z,{icon:L}):I,Y=M==="primary"?(0,m.jsx)(T.Z,{block:p,icon:X,size:"large",children:d},i):(0,m.jsx)(R.ZP,{block:p,icon:X,size:"large",type:"primary",children:d},i);return w?(0,m.jsx)(B.Z,{href:b,target:w?"_blank":void 0,children:Y},d):(0,m.jsx)(c,{to:b,children:Y},d)})})},[s]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(W.Z,{}),(0,m.jsx)(Z.ZP,{theme:{token:{fontSize:16}},children:(0,m.jsx)($.D,{align:"center",style:{zIndex:1},children:(0,m.jsx)($.D,{className:N.container,distribution:"center",horizontal:!0,children:(0,m.jsxs)(G.Z,{children:[e&&(0,m.jsx)(G.Z,{as:"h1",className:N.title,dangerouslySetInnerHTML:{__html:e},gap:"0.25em",horizontal:!0,wrap:"wrap"}),o&&(0,m.jsx)("p",{className:N.desc,dangerouslySetInnerHTML:{__html:o}}),(0,m.jsx)(S,{})]})})})})]})}),t=r}}]);
