"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7538],{61316:function(k,B,u){u.d(B,{Z:function(){return _}});var L=u(49781),W=u(72961),N=u(19829),h=u(16069),K=u(52136),S=u(5321),T=u(15396),Z=u(75555),I=u(16426),w,P,C,E,t;function e(y,c){return c||(c=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(c)}}))}var r=(0,Z.kc)(function(y,c){var i=y.token,v=y.css,O=y.stylish,a=y.prefixCls,d=c.fullscreen,g=c.headerHeight;return{container:v(w||(w=e([`
        cursor: pointer;
        width: `,`px;
        height: `,`px;
        border-radius: `,`px;
      `])),i.controlHeight,i.controlHeight,i.borderRadius),drawer:v(P||(P=e([`
        &.`,`-drawer-content {
          background: transparent;
        }

        .`,`-drawer-body {
          display: flex;
          flex-direction: column;
        }
      `])),a,a),drawerRoot:v(C||(C=e([`
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
      `])),d?0:g+1,a,O.blur,(0,I.m4)(i.colorBgLayout,.5)),fillRect:v(E||(E=e([`
        flex: 1;
        width: 100%;
        border-block-start: none;
      `]))),menu:v(t||(t=e([`
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
      `])),d?g:0,a,a,i.colorText,i.colorFill,a,a,i.colorText,a,i.colorFillSecondary,a,i.borderRadius,i.colorText,i.colorFillSecondary,a,i.colorFillSecondary,i.borderRadius,a,i.colorBgLayout,i.colorText,i.colorBgLayout,i.colorText)}}),n=u(69979);function o(y){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},o(y)}var l=["items","openKeys","selectedKeys","opened","setOpened","className","headerHeight","onClick","iconProps","size","variant","rootClassName","fullscreen","drawerProps"];function s(y,c){var i=Object.keys(y);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(y);c&&(v=v.filter(function(O){return Object.getOwnPropertyDescriptor(y,O).enumerable})),i.push.apply(i,v)}return i}function m(y){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?s(Object(i),!0).forEach(function(v){b(y,v,i[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach(function(v){Object.defineProperty(y,v,Object.getOwnPropertyDescriptor(i,v))})}return y}function b(y,c,i){return c=f(c),c in y?Object.defineProperty(y,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):y[c]=i,y}function f(y){var c=p(y,"string");return o(c)=="symbol"?c:String(c)}function p(y,c){if(o(y)!="object"||!y)return y;var i=y[Symbol.toPrimitive];if(i!==void 0){var v=i.call(y,c||"default");if(o(v)!="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(y)}function j(y,c){if(y==null)return{};var i=D(y,c),v,O;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(y);for(O=0;O<a.length;O++)v=a[O],!(c.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(y,v)&&(i[v]=y[v])}return i}function D(y,c){if(y==null)return{};var i={},v=Object.keys(y),O,a;for(a=0;a<v.length;a++)O=v[a],!(c.indexOf(O)>=0)&&(i[O]=y[O]);return i}var R=(0,K.memo)(function(y){var c=y.items,i=y.openKeys,v=y.selectedKeys,O=y.opened,a=y.setOpened,d=y.className,g=y.headerHeight,x=g===void 0?64:g,A=y.onClick,M=y.iconProps,H=y.size,U=y.variant,z=y.rootClassName,G=y.fullscreen,$=y.drawerProps,J=j(y,l),F=r({fullscreen:G,headerHeight:x}),Q=F.cx,V=F.styles;return(0,n.jsxs)(S.Z,m(m({className:Q(V.container,d),onClick:function(){a(!O)}},J),{},{children:[(0,n.jsx)(T.Z,m({icon:O?N.Z:h.Z,size:H,variant:U},M)),(0,n.jsxs)(L.Z,m(m({closeIcon:void 0,open:O,placement:"left",width:"100vw"},$),{},{className:V.drawer,rootClassName:Q(V.drawerRoot,z),styles:{body:{padding:0},header:{display:"none"}},children:[(0,n.jsx)(W.Z,{className:V.menu,items:c,mode:"inline",onClick:A,openKeys:i,selectedKeys:v}),(0,n.jsx)("div",{className:V.fillRect})]}))]}))});R.displayName="Burger";var _=R},79757:function(k,B,u){var L=u(2991),W=u(52136),N=u(96063),h=u(68662),K=u(69979);function S(n){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},S(n)}var T=["children","iconProps","menu"],Z=["items"];function I(n,o){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);o&&(s=s.filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable})),l.push.apply(l,s)}return l}function w(n){for(var o=1;o<arguments.length;o++){var l=arguments[o]!=null?arguments[o]:{};o%2?I(Object(l),!0).forEach(function(s){P(n,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):I(Object(l)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(l,s))})}return n}function P(n,o,l){return o=C(o),o in n?Object.defineProperty(n,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[o]=l,n}function C(n){var o=E(n,"string");return S(o)=="symbol"?o:String(o)}function E(n,o){if(S(n)!="object"||!n)return n;var l=n[Symbol.toPrimitive];if(l!==void 0){var s=l.call(n,o||"default");if(S(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function t(n,o){if(n==null)return{};var l=e(n,o),s,m;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(n);for(m=0;m<b.length;m++)s=b[m],!(o.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(l[s]=n[s])}return l}function e(n,o){if(n==null)return{};var l={},s=Object.keys(n),m,b;for(b=0;b<s.length;b++)m=s[b],!(o.indexOf(m)>=0)&&(l[m]=n[m]);return l}var r=(0,W.memo)(function(n){var o=n.children,l=n.iconProps,s=n.menu,m=t(n,T),b=s.items,f=t(s,Z),p=(0,W.useMemo)(function(){return b.map(function(j){return(0,h.J)(j)})},[b]);return(0,K.jsx)(N.jS,{config:w({size:"small"},l),children:(0,K.jsx)(L.Z,w(w({menu:w(w({},f),{},{items:p})},m),{},{children:o}))})});r.displayName="Dropdown",B.Z=r},87426:function(k,B,u){u.d(B,{Z:function(){return y}});var L=u(55443),W=u(35576),N=u(38334),h=u(52136),K=u(82187),S=u.n(K),T=function(i){var v=i.prefixCls,O=i.icon,a=i.title,d=i.items,g=d===void 0?[]:d,x=i.style,A=i.className;return h.createElement("div",{className:S()("".concat(v,"-column"),A),style:x},(a||O)&&h.createElement("h2",null,O&&h.createElement("span",{className:"".concat(v,"-column-icon")},O),a),g.map(function(M,H){var U=M.LinkComponent||"a";return h.createElement("div",{className:S()("".concat(v,"-item"),M.className),style:M.style,key:H},h.createElement(U,{href:M.url,to:typeof U!="string"?M.url:void 0,target:M.openExternal?"_blank":void 0,rel:M.openExternal?"noopener noreferrer":void 0},M.icon&&h.createElement("span",{className:"".concat(v,"-item-icon")},M.icon),M.title),M.description&&h.createElement(h.Fragment,null,h.createElement("span",{className:"".concat(v,"-item-separator")},"-"),h.createElement("span",{className:"".concat(v,"-item-description")},M.description)))}))},Z=T,I=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],w=function(i){var v=i.prefixCls,O=v===void 0?"rc-footer":v,a=i.className,d=i.style,g=i.bottom,x=i.columns,A=i.maxColumnsPerRow,M=i.backgroundColor,H=i.columnLayout,U=i.theme,z=U===void 0?"dark":U,G=(0,N.Z)(i,I),$=S()("".concat(O),a,(0,W.Z)({},"".concat(O,"-").concat(z),!!z)),J=typeof A=="number"&&A>0;return h.createElement("footer",(0,L.Z)((0,L.Z)({},G),{},{className:$,style:(0,L.Z)((0,L.Z)({},d),{},{backgroundColor:M})}),h.createElement("section",{className:"".concat(O,"-container")},x&&x.length>0&&h.createElement("section",{className:"".concat(O,"-columns"),style:{justifyContent:H,flexWrap:J?"wrap":void 0}},x.map(function(F,Q){var V=F.title,q=F.icon,ee=F.style,te=F.className,ne=F.items,re=ne===void 0?[]:ne,oe=(0,L.Z)({},ee);return J&&(oe.flex="0 0 ".concat(100/(A+1)+.1,"%")),h.createElement(Z,{key:Q,prefixCls:O,title:V,icon:q,items:re,style:oe,className:te})}))),g&&h.createElement("section",{className:"".concat(O,"-bottom")},h.createElement("div",{className:"".concat(O,"-bottom-container")},g)))},P=w,C=u(75033),E=u(75555),t,e;function r(c,i){return i||(i=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(i)}}))}var n=(0,E.kc)(function(c,i){var v=c.css,O=c.responsive,a=c.token,d=i.isEmpty,g=i.contentMaxWidth,x="rc-footer";return{footer:v(t||(t=r([`
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
      `])),a.colorTextSecondary,a.colorBgLayout,x,a.colorTextTertiary,a.colorLinkHover,x,g,d?"0":"60px 0 20px",a.colorText,a.colorTextDescription,g,O.mobile,x),root:v(e||(e=r([`
        grid-area: footer;
        align-self: stretch;
        color: `,`;
        border-block-start: 1px solid `,`;

        `,` {
          flex-direction: column;
          border: none;
        }
      `])),a.colorTextDescription,a.colorSplit,O.mobile)}}),o=u(69979);function l(c){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},l(c)}var s=["columns","bottom","theme","contentMaxWidth","children"];function m(c,i){var v=Object.keys(c);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(c);i&&(O=O.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),v.push.apply(v,O)}return v}function b(c){for(var i=1;i<arguments.length;i++){var v=arguments[i]!=null?arguments[i]:{};i%2?m(Object(v),!0).forEach(function(O){f(c,O,v[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(v)):m(Object(v)).forEach(function(O){Object.defineProperty(c,O,Object.getOwnPropertyDescriptor(v,O))})}return c}function f(c,i,v){return i=p(i),i in c?Object.defineProperty(c,i,{value:v,enumerable:!0,configurable:!0,writable:!0}):c[i]=v,c}function p(c){var i=j(c,"string");return l(i)=="symbol"?i:String(i)}function j(c,i){if(l(c)!="object"||!c)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var O=v.call(c,i||"default");if(l(O)!="object")return O;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(c)}function D(c,i){if(c==null)return{};var v=R(c,i),O,a;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(c);for(a=0;a<d.length;a++)O=d[a],!(i.indexOf(O)>=0)&&Object.prototype.propertyIsEnumerable.call(c,O)&&(v[O]=c[O])}return v}function R(c,i){if(c==null)return{};var v={},O=Object.keys(c),a,d;for(d=0;d<O.length;d++)a=O[d],!(i.indexOf(a)>=0)&&(v[a]=c[a]);return v}var _=(0,h.memo)(function(c){var i=c.columns,v=c.bottom,O=c.theme,a=c.contentMaxWidth,d=a===void 0?960:a,g=c.children,x=D(c,s),A=!i||(i==null?void 0:i.length)===0,M=n({contentMaxWidth:d,isEmpty:A}),H=M.styles;return(0,o.jsxs)(C.D,b(b({as:"section",className:H.root,width:"100%"},x),{},{children:[(0,o.jsx)(P,{bottom:v,className:H.footer,columns:i,theme:O}),g]}))});_.displayName="Footer";var y=_},40288:function(k,B,u){u.d(B,{Z:function(){return l}});var L=u(52136),W=u(75033),N=u(75555),h=u(83873),K;function S(s,m){return m||(m=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(m)}}))}var T=(0,N.kc)(function(s,m){var b=s.css,f=m.rows,p=m.maxItemWidth,j=m.gap;return b(K||(K=S([`
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
    `])),f,(0,h.Z)(p)?p:"".concat(p,"px"),(0,h.Z)(j)?j:"".concat(j,"px"))}),Z=u(69979);function I(s){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},I(s)}var w=["className","gap","rows","children","maxItemWidth","ref"];function P(s,m){var b=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);m&&(f=f.filter(function(p){return Object.getOwnPropertyDescriptor(s,p).enumerable})),b.push.apply(b,f)}return b}function C(s){for(var m=1;m<arguments.length;m++){var b=arguments[m]!=null?arguments[m]:{};m%2?P(Object(b),!0).forEach(function(f){E(s,f,b[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(b)):P(Object(b)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(b,f))})}return s}function E(s,m,b){return m=t(m),m in s?Object.defineProperty(s,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):s[m]=b,s}function t(s){var m=e(s,"string");return I(m)=="symbol"?m:String(m)}function e(s,m){if(I(s)!="object"||!s)return s;var b=s[Symbol.toPrimitive];if(b!==void 0){var f=b.call(s,m||"default");if(I(f)!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(s)}function r(s,m){if(s==null)return{};var b=n(s,m),f,p;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(s);for(p=0;p<j.length;p++)f=j[p],!(m.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(s,f)&&(b[f]=s[f])}return b}function n(s,m){if(s==null)return{};var b={},f=Object.keys(s),p,j;for(j=0;j<f.length;j++)p=f[j],!(m.indexOf(p)>=0)&&(b[p]=s[p]);return b}var o=(0,L.memo)(function(s){var m=s.className,b=s.gap,f=b===void 0?"1em":b,p=s.rows,j=p===void 0?3:p,D=s.children,R=s.maxItemWidth,_=R===void 0?240:R,y=s.ref,c=r(s,w),i=T({gap:f,maxItemWidth:_,rows:j}),v=i.cx,O=i.styles;return(0,Z.jsx)(W.D,C(C({className:v(O,m),gap:f,ref:y},c),{},{children:D}))});o.displayName="Grid";var l=o},67695:function(k,B,u){u.d(B,{Z:function(){return b}});var L=u(7807),W=u(52136),N=u(75033),h=u(75555),K=u(16426),S,T,Z;function I(f,p){return p||(p=f.slice(0)),Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(p)}}))}var w=(0,h.kc)(function(f){var p=f.css,j=f.responsive,D=f.token;return{left:p(S||(S=I([`
    z-index: 10;
  `]))),right:p(T||(T=I([`
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
  `])),j.mobile,D.colorBorder),root:p(Z||(Z=I([`
    grid-area: head;
    align-self: stretch;

    width: 100%;
    height: 64px;
    padding-block: 0;
    padding-inline: 24px;

    background-color: `,`;
    border-block-end: 1px solid `,`;

    `,` {
      padding-block: 0;
      padding-inline: 12px;
    }
  `])),(0,K.m4)(D.colorBgLayout,.4),D.colorBorderSecondary,j.mobile)}}),P=u(69979);function C(f){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},C(f)}var E=["actionsClassName","navClassName","logoClassName","nav","logo","actions","actionsStyle","logoStyle","navStyle","className","children","ref"];function t(f,p){var j=Object.keys(f);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(f);p&&(D=D.filter(function(R){return Object.getOwnPropertyDescriptor(f,R).enumerable})),j.push.apply(j,D)}return j}function e(f){for(var p=1;p<arguments.length;p++){var j=arguments[p]!=null?arguments[p]:{};p%2?t(Object(j),!0).forEach(function(D){r(f,D,j[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(j)):t(Object(j)).forEach(function(D){Object.defineProperty(f,D,Object.getOwnPropertyDescriptor(j,D))})}return f}function r(f,p,j){return p=n(p),p in f?Object.defineProperty(f,p,{value:j,enumerable:!0,configurable:!0,writable:!0}):f[p]=j,f}function n(f){var p=o(f,"string");return C(p)=="symbol"?p:String(p)}function o(f,p){if(C(f)!="object"||!f)return f;var j=f[Symbol.toPrimitive];if(j!==void 0){var D=j.call(f,p||"default");if(C(D)!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return(p==="string"?String:Number)(f)}function l(f,p){if(f==null)return{};var j=s(f,p),D,R;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(f);for(R=0;R<_.length;R++)D=_[R],!(p.indexOf(D)>=0)&&Object.prototype.propertyIsEnumerable.call(f,D)&&(j[D]=f[D])}return j}function s(f,p){if(f==null)return{};var j={},D=Object.keys(f),R,_;for(_=0;_<D.length;_++)R=D[_],!(p.indexOf(R)>=0)&&(j[R]=f[R]);return j}var m=(0,W.memo)(function(f){var p=f.actionsClassName,j=f.navClassName,D=f.logoClassName,R=f.nav,_=f.logo,y=f.actions,c=f.actionsStyle,i=f.logoStyle,v=f.navStyle,O=f.className,a=f.children,d=f.ref,g=l(f,E),x=(0,L.F)(),A=x.mobile,M=w(),H=M.cx,U=M.styles;return(0,P.jsx)(N.D,e(e({align:"center",as:"section",className:H(U.root,O),distribution:"space-between",horizontal:!0,ref:d,width:"auto"},g),{},{children:A?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(N.D,{className:p,style:e({flex:0},v),children:[R,a]}),(0,P.jsx)(N.D,{className:H(U.left,D),horizontal:!0,style:e({flex:1,overflow:"hidden"},i),children:_}),(0,P.jsx)(N.D,{className:p,style:e({flex:0},c),children:y})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(N.D,{className:H(U.left,D),horizontal:!0,style:e({flex:0},i),children:_}),(0,P.jsxs)(N.D,{className:j,style:e({flex:1,marginLeft:48,overflow:"hidden"},v),children:[R,a]}),(0,P.jsxs)(N.D,{className:H(U.right,p),flex:1,horizontal:!0,justify:"space-between",style:c,children:[(0,P.jsx)("div",{}),(0,P.jsx)(N.D,{align:"center",gap:8,horizontal:!0,children:y})]})]})}))});m.displayName="Header";var b=m},21436:function(k,B,u){var L=u(54725),W=u(47443),N=u(52136),h=u(97399),K=u(69979);function S(r){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(r)}var T=["ref","variant","shadow","className"];function Z(r,n){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);n&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),o.push.apply(o,l)}return o}function I(r){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?Z(Object(o),!0).forEach(function(l){w(r,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):Z(Object(o)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(o,l))})}return r}function w(r,n,o){return n=P(n),n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r}function P(r){var n=C(r,"string");return S(n)=="symbol"?n:String(n)}function C(r,n){if(S(r)!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var l=o.call(r,n||"default");if(S(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function E(r,n){if(r==null)return{};var o=t(r,n),l,s;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(r);for(s=0;s<m.length;s++)l=m[s],!(n.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(o[l]=r[l])}return o}function t(r,n){if(r==null)return{};var o={},l=Object.keys(r),s,m;for(m=0;m<l.length;m++)s=l[m],!(n.indexOf(s)>=0)&&(o[s]=r[s]);return o}var e=(0,N.memo)(function(r){var n=r.ref,o=r.variant,l=r.shadow,s=r.className,m=E(r,T),b=(0,h.y)(),f=b.styles,p=b.cx,j=b.theme,D=(0,N.useMemo)(function(){return(0,W.j)(f.root,{defaultVariants:{shadow:!1},variants:{variant:{filled:f.filled,outlined:f.outlined,borderless:f.borderless,underlined:null},shadow:{false:null,true:f.shadow}}})},[f]);return(0,K.jsx)(L.Z,I({className:p(D({shadow:l,variant:o||(j.isDarkMode?"filled":"outlined")}),s),ref:n,variant:o||(j.isDarkMode?"filled":"outlined")},m))});e.displayName="Input",B.Z=e},89223:function(k,B,u){var L=u(52136),W=u(64271),N=u(69979);function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}var K=["children","className"];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?S(Object(r),!0).forEach(function(n){Z(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Z(t,e,r){return e=I(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){var e=w(t,"string");return h(e)=="symbol"?e:String(e)}function w(t,e){if(h(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(h(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P(t,e){if(t==null)return{};var r=C(t,e),n,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function C(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,l;for(l=0;l<n.length;l++)o=n[l],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}var E=(0,L.memo)(function(t){var e=t.children,r=t.className,n=P(t,K),o=(0,W.y)(),l=o.cx,s=o.styles;return(0,N.jsx)("footer",T(T({className:l(s.footer,r)},n),{},{children:e}))});E.displayName="LayoutFooter",B.Z=E},22172:function(k,B,u){var L=u(52136),W=u(64271),N=u(69979);function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}var K=["headerHeight","children","className","style"];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?S(Object(r),!0).forEach(function(n){Z(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Z(t,e,r){return e=I(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){var e=w(t,"string");return h(e)=="symbol"?e:String(e)}function w(t,e){if(h(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(h(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P(t,e){if(t==null)return{};var r=C(t,e),n,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function C(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,l;for(l=0;l<n.length;l++)o=n[l],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}var E=(0,L.memo)(function(t){var e=t.headerHeight,r=t.children,n=t.className,o=t.style,l=P(t,K),s=(0,W.y)(e),m=s.cx,b=s.styles;return(0,N.jsx)("header",T(T({className:m(b.header,n),style:T({height:e},o)},l),{},{children:r}))});E.displayName="LayoutHeader",B.Z=E},32562:function(k,B,u){var L=u(52136),W=u(64271),N=u(69979);function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}var K=["children","className"];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?S(Object(r),!0).forEach(function(n){Z(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Z(t,e,r){return e=I(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){var e=w(t,"string");return h(e)=="symbol"?e:String(e)}function w(t,e){if(h(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(h(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P(t,e){if(t==null)return{};var r=C(t,e),n,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function C(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,l;for(l=0;l<n.length;l++)o=n[l],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}var E=(0,L.memo)(function(t){var e=t.children,r=t.className,n=P(t,K),o=(0,W.y)(),l=o.cx,s=o.styles;return(0,N.jsx)("main",T(T({className:l(s.main,r)},n),{},{children:e}))});E.displayName="LayoutMain",B.Z=E},52192:function(k,B,u){var L=u(52136),W=u(64271),N=u(69979);function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}var K=["headerHeight","children","className","style"];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?S(Object(r),!0).forEach(function(n){Z(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Z(t,e,r){return e=I(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){var e=w(t,"string");return h(e)=="symbol"?e:String(e)}function w(t,e){if(h(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(h(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P(t,e){if(t==null)return{};var r=C(t,e),n,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function C(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,l;for(l=0;l<n.length;l++)o=n[l],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}var E=(0,L.memo)(function(t){var e=t.headerHeight,r=t.children,n=t.className,o=t.style,l=P(t,K),s=(0,W.y)(e),m=s.cx,b=s.styles;return(0,N.jsx)("aside",T(T({className:m(b.aside,n),style:T({top:e},o)},l),{},{children:r}))});E.displayName="LayoutSidebar",B.Z=E},31261:function(k,B,u){var L=u(52136),W=u(64271),N=u(69979);function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}var K=["headerHeight","children","className"];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?S(Object(r),!0).forEach(function(n){Z(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Z(t,e,r){return e=I(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){var e=w(t,"string");return h(e)=="symbol"?e:String(e)}function w(t,e){if(h(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(h(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P(t,e){if(t==null)return{};var r=C(t,e),n,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function C(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,l;for(l=0;l<n.length;l++)o=n[l],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}var E=(0,L.memo)(function(t){var e=t.headerHeight,r=t.children,n=t.className,o=P(t,K),l=(0,W.y)(e),s=l.cx,m=l.styles;return(0,N.jsx)("div",T(T({className:s(m.asideInner,n)},o),{},{children:r}))});E.displayName="LayoutSidebarInner",B.Z=E},25675:function(k,B,u){var L=u(52136),W=u(64271),N=u(69979);function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}var K=["tocWidth","style","className","children"];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?S(Object(r),!0).forEach(function(n){Z(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Z(t,e,r){return e=I(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){var e=w(t,"string");return h(e)=="symbol"?e:String(e)}function w(t,e){if(h(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(h(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P(t,e){if(t==null)return{};var r=C(t,e),n,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function C(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,l;for(l=0;l<n.length;l++)o=n[l],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}var E=(0,L.memo)(function(t){var e=t.tocWidth,r=t.style,n=t.className,o=t.children,l=P(t,K),s=(0,W.y)(),m=s.cx,b=s.styles;return(0,N.jsx)("nav",T(T({className:m(b.toc,n),style:e?T({width:e},r):r},l),{},{children:o}))});E.displayName="LayoutToc",B.Z=E},33459:function(k,B,u){u.d(B,{ZP:function(){return m}});var L=u(7807),W=u(52136),N=u(59110),h=u(89223),K=u(22172),S=u(32562),T=u(52192),Z=u(31261),I=u(25675),w=u(64271),P=u(69979);function C(b,f){return n(b)||r(b,f)||t(b,f)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(b,f){if(b){if(typeof b=="string")return e(b,f);var p=Object.prototype.toString.call(b).slice(8,-1);if(p==="Object"&&b.constructor&&(p=b.constructor.name),p==="Map"||p==="Set")return Array.from(b);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return e(b,f)}}function e(b,f){(f==null||f>b.length)&&(f=b.length);for(var p=0,j=new Array(f);p<f;p++)j[p]=b[p];return j}function r(b,f){var p=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(p!=null){var j,D,R,_,y=[],c=!0,i=!1;try{if(R=(p=p.call(b)).next,f===0){if(Object(p)!==p)return;c=!1}else for(;!(c=(j=R.call(p)).done)&&(y.push(j.value),y.length!==f);c=!0);}catch(v){i=!0,D=v}finally{try{if(!c&&p.return!=null&&(_=p.return(),Object(_)!==_))return}finally{if(i)throw D}}return y}}function n(b){if(Array.isArray(b))return b}var o=(0,W.memo)(function(b){var f=b.helmet,p=b.headerHeight,j=p===void 0?64:p,D=b.header,R=b.footer,_=b.sidebar,y=b.asideWidth,c=b.toc,i=b.children,v=b.tocWidth,O=(0,w.y)(j),a=O.styles,d=(0,L.F)(),g=d.mobile,x=d.laptop,A=(0,W.useState)(!0),M=C(A,2),H=M[0],U=M[1];return(0,W.useEffect)(function(){U(!!x)},[x]),(0,P.jsxs)(P.Fragment,{children:[f,D&&(0,P.jsxs)(K.Z,{headerHeight:j,children:[D,g&&c&&(0,P.jsx)(I.Z,{children:c})]}),(0,P.jsxs)(S.Z,{children:[!g&&!_&&(0,P.jsx)("nav",{style:{width:v}}),!g&&_&&(0,P.jsx)(T.Z,{headerHeight:j,children:(0,P.jsx)(N.ZP,{expand:H,maxWidth:y,onExpandChange:U,placement:"left",children:(0,P.jsx)(Z.Z,{headerHeight:j,children:_})})}),(0,P.jsx)("section",{className:a.content,children:i}),!g&&c&&(0,P.jsx)(I.Z,{tocWidth:v,children:c})]}),R&&(0,P.jsx)(h.Z,{children:R})]})}),l=o,s=l;s.Footer=h.Z,s.Header=K.Z,s.Toc=I.Z,s.Sidebar=T.Z,s.SidebarInner=Z.Z,s.Main=S.Z;var m=s},64271:function(k,B,u){u.d(B,{y:function(){return P}});var L=u(75555),W,N,h,K,S,T,Z,I;function w(C,E){return E||(E=C.slice(0)),Object.freeze(Object.defineProperties(C,{raw:{value:Object.freeze(E)}}))}var P=(0,L.kc)(function(C,E){var t=C.cx,e=C.css,r=C.stylish;return{app:e(W||(W=w([`
      overflow: hidden auto;
      height: 100dvh;
    `]))),aside:e(N||(N=w([`
      position: sticky;
      z-index: 2;
      height: 100%;
    `]))),asideInner:e(h||(h=w([`
      overflow: hidden auto;
      width: 100%;
      height: calc(100dvh - `,`px);
    `])),E),content:e(K||(K=w([`
      position: relative;
      flex: 1;
      max-width: 100%;
    `]))),footer:e(S||(S=w([`
      position: relative;
      max-width: 100%;
    `]))),header:t(r.blur,e(T||(T=w([`
        position: sticky;
        z-index: 999;
        inset-block-start: 0;
        max-width: 100%;
      `])))),main:e(Z||(Z=w([`
      position: relative;
      display: flex;
      align-items: stretch;
      max-width: 100vw;
    `]))),toc:e(I||(I=w([""])))}})},68662:function(k,B,u){u.d(B,{J:function(){return t}});var L=u(52136),W=u(75716),N=u(69979);function h(e){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},h(e)}var K=["children"],S=["children","icon"];function T(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function Z(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?T(Object(n),!0).forEach(function(o){I(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function I(e,r,n){return r=w(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function w(e){var r=P(e,"string");return h(r)=="symbol"?r:String(r)}function P(e,r){if(h(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,r||"default");if(h(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function C(e,r){if(e==null)return{};var n=E(e,r),o,l;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)o=s[l],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function E(e,r){if(e==null)return{};var n={},o=Object.keys(e),l,s;for(s=0;s<o.length;s++)l=o[s],!(r.indexOf(l)>=0)&&(n[l]=e[l]);return n}var t=function e(r){switch(r==null?void 0:r.type){case"divider":return r;case"group":{var n=r.children,o=C(r,K);return Z({children:n?n==null?void 0:n.map(function(f){return e(f)}):void 0},o)}default:{var l=r,s=l.children,m=l.icon,b=C(l,S);return Z({children:s?s==null?void 0:s.map(function(f){return e(f)}):void 0,icon:m?(0,L.isValidElement)(m)?m:(0,N.jsx)(W.Z,{icon:m,size:"small"}):void 0},b)}}}},73394:function(k,B,u){u.d(B,{Z:function(){return O}});var L=u(97642),W=u(12486),N=u(52136),h=u(43880),K=u(6680),S=u(48499),T=u(75716),Z=u(21436),I=u(67368),w=u(75555),P,C,E;function t(a,d){return d||(d=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(d)}}))}var e=(0,w.kc)(function(a){var d=a.css,g=a.token,x=a.stylish,A=a.cx;return{icon:d(P||(P=t([`
    color: `,`;
  `])),g.colorTextPlaceholder),search:d(C||(C=t([`
    position: relative;
    max-width: 100%;
  `]))),tag:A(x.blur,d(E||(E=t([`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 6px;
      transform: translateY(-50%);

      color: `,`;

      kbd {
        color: inherit;
      }
    `])),g.colorTextDescription))}}),r=u(69979);function n(a){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},n(a)}var o=["defaultValue","spotlight","className","value","onInputChange","placeholder","enableShortKey","shortKey","onSearch","loading","style","onChange","onBlur","onPressEnter","onFocus","styles","classNames"];function l(a,d){var g=Object.keys(a);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(a);d&&(x=x.filter(function(A){return Object.getOwnPropertyDescriptor(a,A).enumerable})),g.push.apply(g,x)}return g}function s(a){for(var d=1;d<arguments.length;d++){var g=arguments[d]!=null?arguments[d]:{};d%2?l(Object(g),!0).forEach(function(x){m(a,x,g[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(g)):l(Object(g)).forEach(function(x){Object.defineProperty(a,x,Object.getOwnPropertyDescriptor(g,x))})}return a}function m(a,d,g){return d=b(d),d in a?Object.defineProperty(a,d,{value:g,enumerable:!0,configurable:!0,writable:!0}):a[d]=g,a}function b(a){var d=f(a,"string");return n(d)=="symbol"?d:String(d)}function f(a,d){if(n(a)!="object"||!a)return a;var g=a[Symbol.toPrimitive];if(g!==void 0){var x=g.call(a,d||"default");if(n(x)!="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(a)}function p(a,d){return y(a)||_(a,d)||D(a,d)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(a,d){if(a){if(typeof a=="string")return R(a,d);var g=Object.prototype.toString.call(a).slice(8,-1);if(g==="Object"&&a.constructor&&(g=a.constructor.name),g==="Map"||g==="Set")return Array.from(a);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return R(a,d)}}function R(a,d){(d==null||d>a.length)&&(d=a.length);for(var g=0,x=new Array(d);g<d;g++)x[g]=a[g];return x}function _(a,d){var g=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(g!=null){var x,A,M,H,U=[],z=!0,G=!1;try{if(M=(g=g.call(a)).next,d===0){if(Object(g)!==g)return;z=!1}else for(;!(z=(x=M.call(g)).done)&&(U.push(x.value),U.length!==d);z=!0);}catch($){G=!0,A=$}finally{try{if(!z&&g.return!=null&&(H=g.return(),Object(H)!==H))return}finally{if(G)throw A}}return U}}function y(a){if(Array.isArray(a))return a}function c(a,d){if(a==null)return{};var g=i(a,d),x,A;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(a);for(A=0;A<M.length;A++)x=M[A],!(d.indexOf(x)>=0)&&Object.prototype.propertyIsEnumerable.call(a,x)&&(g[x]=a[x])}return g}function i(a,d){if(a==null)return{};var g={},x=Object.keys(a),A,M;for(M=0;M<x.length;M++)A=x[M],!(d.indexOf(A)>=0)&&(g[A]=a[A]);return g}var v=(0,N.memo)(function(a){var d=a.defaultValue,g=d===void 0?"":d,x=a.spotlight,A=a.className,M=a.value,H=a.onInputChange,U=a.placeholder,z=a.enableShortKey,G=a.shortKey,$=G===void 0?"mod+k":G,J=a.onSearch,F=a.loading,Q=a.style,V=a.onChange,q=a.onBlur,ee=a.onPressEnter,te=a.onFocus,ne=a.styles,re=ne===void 0?{}:ne,oe=re.input,ve=re.shortKey,le=a.classNames,ce=le===void 0?{}:le,he=ce.input,ge=ce.shortKey,Oe=c(a,o),je=(0,K.Z)(g,{defaultValue:g,onChange:H,value:M}),se=p(je,2),ie=se[0],ue=se[1],Pe=(0,N.useState)(!0),fe=p(Pe,2),xe=fe[0],ye=fe[1],pe=e(),ae=pe.styles,me=pe.cx,de=(0,N.useRef)(null),be=(0,N.useMemo)(function(){return $.includes("+")?$:"mod+".concat($)},[$]);return(0,h.y1)(be,function(){var X;z&&((X=de.current)===null||X===void 0||X.focus())},{enableOnFormTags:!0,enabled:!!z&&!!$,preventDefault:!0}),(0,r.jsxs)("div",{className:me(ae.search,A),style:Q,children:[x&&(0,r.jsx)(I.Z,{}),(0,r.jsx)(Z.Z,s({allowClear:!0,className:he,onBlur:function(Y){q==null||q(Y),ue(Y.target.value),ye(!0)},onChange:function(Y){ue(Y.target.value),V==null||V(Y)},onFocus:function(Y){te==null||te(Y),ye(!1)},onPressEnter:function(Y){ee==null||ee(Y),J==null||J(ie)},placeholder:U!=null?U:"Type keywords...",prefix:(0,r.jsx)(T.Z,{className:ae.icon,icon:F?L.Z:W.Z,size:"small",spin:F,style:{marginRight:4}}),ref:de,style:oe,value:ie},Oe)),z&&xe&&!ie&&(0,r.jsx)(S.Z,{className:me(ae.tag,ge),compact:!0,keys:be,style:ve})]})});v.displayName="SearchBar";var O=v},17300:function(k,B,u){var L=u(75791),W=u(71776),N=u(47168),h=u(90536),K=u(52136),S=u(75033),T=u(15396),Z=u(79757),I=u(75716),w=u(69979),P={auto:W.Z,dark:N.Z,light:h.Z},C=(0,K.memo)(function(E){var t=E.size,e=t===void 0?"middle":t,r=E.themeMode,n=E.onThemeSwitch,o=E.type,l=o===void 0?"icon":o,s=E.labels,m=s===void 0?{auto:"System",dark:"Dark",light:"Light"}:s,b=E.className,f=E.variant,p=E.style,j=(0,K.useMemo)(function(){return[{icon:P.auto,key:"auto",label:m.auto},{icon:P.light,key:"light",label:m.light},{icon:P.dark,key:"dark",label:m.dark}]},[m]);return l==="select"?(0,w.jsx)(L.default,{className:b,defaultValue:r,onChange:n,options:j.map(function(D){return{label:(0,w.jsxs)(S.D,{align:"center",gap:8,horizontal:!0,children:[(0,w.jsx)(I.Z,{icon:D.icon}),D.label]}),value:D.key}}),style:p,variant:f}):(0,w.jsx)(Z.Z,{menu:{items:j,onClick:function(R){return n(R.key)}},trigger:["click"],children:(0,w.jsx)(T.Z,{className:b,icon:P[r],size:e,style:p,variant:f})})});C.displayName="ThemeSwitch",B.Z=C},88935:function(k,B,u){u.d(B,{Z:function(){return _}});var L=u(74074),W=u(52136),N=u(44325),h=u(20470),K=u(26806),S=u(55917),T=u(6680),Z=u(15396),I=u(75555),w=u(16426),P,C,E,t;function e(y,c){return c||(c=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(c)}}))}var r=(0,I.kc)(function(y,c){var i=y.token,v=y.stylish,O=y.responsive,a=y.cx,d=y.css,g=y.prefixCls,x=c.tocWidth,A=c.headerHeight,M=36;return{anchor:a(v.blur,d(P||(P=e([`
          overflow: hidden auto;
          max-height: 60dvh !important;
        `])))),container:d(C||(C=e([`
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
      `])),A+64,x,O.mobile,i.colorTextDescription),expand:a(v.blur,d(E||(E=e([`
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
            padding-inline: 16px 8px !important;
          }
        `])),(0,w.m4)(i.colorBgLayout,.5),i.colorSplit,i.boxShadowSecondary,g,g)),mobileCtn:d(t||(t=e([`
        width: 100%;
        height: `,`px;

        .`,`-collapse-expand-icon {
          color: `,`;
        }
      `])),M,g,i.colorTextQuaternary)}}),n=function(c){return c.map(function(i){var v;return{children:(v=i.children)===null||v===void 0?void 0:v.map(function(O){return{href:"#".concat(O.id),key:O.id,title:O==null?void 0:O.title}}),href:"#".concat(i.id),key:i.id,title:i.title}})},o=u(69979);function l(y,c){return p(y)||f(y,c)||m(y,c)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(y,c){if(y){if(typeof y=="string")return b(y,c);var i=Object.prototype.toString.call(y).slice(8,-1);if(i==="Object"&&y.constructor&&(i=y.constructor.name),i==="Map"||i==="Set")return Array.from(y);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return b(y,c)}}function b(y,c){(c==null||c>y.length)&&(c=y.length);for(var i=0,v=new Array(c);i<c;i++)v[i]=y[i];return v}function f(y,c){var i=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(i!=null){var v,O,a,d,g=[],x=!0,A=!1;try{if(a=(i=i.call(y)).next,c===0){if(Object(i)!==i)return;x=!1}else for(;!(x=(v=a.call(i)).done)&&(g.push(v.value),g.length!==c);x=!0);}catch(M){A=!0,O=M}finally{try{if(!x&&i.return!=null&&(d=i.return(),Object(d)!==d))return}finally{if(A)throw O}}return g}}function p(y){if(Array.isArray(y))return y}var j=(0,W.memo)(function(y){var c=y.items,i=y.activeKey,v=y.onChange,O=y.getContainer,a=y.headerHeight,d=a===void 0?64:a,g=y.tocWidth,x=g===void 0?176:g,A=(0,T.Z)("",{onChange:v,value:i}),M=l(A,2),H=M[0],U=M[1],z=r({headerHeight:d,tocWidth:x}),G=z.styles,$=c.find(function(F){return F.id===H}),J=(0,W.useMemo)(function(){return n(c)},[c]);return(0,o.jsx)(N.ZP,{theme:{token:{fontSize:12,sizeStep:3}},children:(0,o.jsx)("section",{className:G.mobileCtn,children:(0,o.jsx)(h.Z,{bordered:!1,className:G.expand,expandIcon:function(Q){var V=Q.isActive;return(0,o.jsx)(Z.Z,{icon:V?K.Z:S.Z,size:"small"})},expandIconPosition:"end",ghost:!0,children:(0,o.jsx)(h.Z.Panel,{forceRender:!0,header:$?$.title:"TOC",children:(0,o.jsx)(N.ZP,{theme:{token:{fontSize:14,sizeStep:4}},children:(0,o.jsx)(L.Z,{getContainer:O,items:J,onChange:function(Q){U(Q.replace("#",""))},targetOffset:d+48})})},"toc")})})})});j.displayName="TocMobile";var D=j,R=(0,W.memo)(function(y){var c=y.activeKey,i=y.items,v=y.getContainer,O=y.isMobile,a=y.headerHeight,d=a===void 0?64:a,g=y.tocWidth,x=g===void 0?176:g,A=r({headerHeight:d,tocWidth:x}),M=A.styles,H=A.cx;return O?(0,o.jsx)(D,{activeKey:c,getContainer:v,headerHeight:d,items:i}):(0,o.jsxs)("section",{className:H(M.container,M.anchor),children:[(0,o.jsx)("h4",{children:"Table of Contents"}),(0,o.jsx)(L.Z,{getContainer:v,items:n(i),targetOffset:d+12})]})});R.displayName="Toc";var _=R},83873:function(k,B,u){var L=u(33918),W=u(56052),N=u(13795),h="[object String]";function K(S){return typeof S=="string"||!(0,W.Z)(S)&&(0,N.Z)(S)&&(0,L.Z)(S)==h}B.Z=K}}]);
