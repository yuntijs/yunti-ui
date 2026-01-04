"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9534],{40990:function(nt,ye,m){m.d(ye,{Z:function(){return Ve}});var b=m(52136),de=m(40288),z=m(75033),K=m(75555),k=m(16426),Z,$,B,M;function N(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var D="hover-card",H=(0,K.kc)(function(e,t){var n=e.css,r=e.responsive,i=e.token,o=e.isDarkMode,u=t.size,l=t.borderRadius;return{container:n(Z||(Z=N([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),D),content:n($||($=N([`
      z-index: 2;

      flex-grow: 1;

      height: 100%;
      margin: 1px;

      background: `,`;
      border-radius: `,`px;
    `])),i.colorBgContainer,l-1),grid:n(B||(B=N([`
      display: grid;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),r.mobile),itemContainer:n(M||(M=N([`
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
    `])),(0,k.m4)(i.colorBorderSecondary,.75),l,u,(0,k.m4)(i.colorTextBase,o?.06:.02),u*.75,(0,k.m4)(i.colorTextBase,o?.4:.2))}}),s=m(69979);function x(e){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(e)}var be=["children","className","style","borderRadius","size"];function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ve(e,t,n){return t=ge(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e){var t=he(e,"string");return x(t)=="symbol"?t:String(t)}function he(e,t){if(x(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(x(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Oe(e,t){if(e==null)return{};var n=je(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function je(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var G=(0,b.memo)(function(e){var t=e.children,n=e.className,r=e.style,i=e.borderRadius,o=e.size,u=Oe(e,be),l=H({borderRadius:i,size:o}),a=l.styles,c=l.cx;return(0,s.jsx)(z.D,R(R({className:c(a.itemContainer,n),style:R({borderRadius:i},r)},u),{},{children:(0,s.jsx)(z.D,{className:a.content,children:t})}))});G.displayName="SpotlightCardItem";var xe=G;function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}var Se=["items","renderItem","maxItemWidth","className","columns","gap","style","size","borderRadius","spotlight"];function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?X(Object(n),!0).forEach(function(r){Pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pe(e,t,n){return t=we(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(e){var t=Ne(e,"string");return S(t)=="symbol"?t:String(t)}function Ne(e,t){if(S(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(S(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ce(e,t){var n=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ie(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){n=n.call(e)},n:function(){var c=n.next();return o=c.done,c},e:function(c){u=!0,l=c},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(u)throw l}}}}function Ie(e,t){if(e){if(typeof e=="string")return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}}function Y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ee(e,t){if(e==null)return{};var n=Fe(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Fe(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var J=(0,b.memo)(function(e){var t=e.items,n=e.renderItem,r=e.maxItemWidth,i=e.className,o=e.columns,u=o===void 0?3:o,l=e.gap,a=l===void 0?"1em":l,c=e.style,f=e.size,v=f===void 0?800:f,g=e.borderRadius,h=g===void 0?12:g,d=e.spotlight,p=d===void 0?!0:d,C=Ee(e,Se),O=H({borderRadius:h,size:v}),ue=O.styles,qe=O.cx,I=(0,b.useRef)(null);return(0,b.useEffect)(function(){if(I.current&&p){var E=function(pe){var F=Ce(document.querySelectorAll(".".concat(D))),me;try{for(F.s();!(me=F.n()).done;){var A=me.value,fe=A.getBoundingClientRect(),_e=pe.clientX-fe.left,et=pe.clientY-fe.top;A.style.setProperty("--mouse-x","".concat(_e,"px")),A.style.setProperty("--mouse-y","".concat(et,"px"))}}catch(tt){F.e(tt)}finally{F.f()}};return I.current.addEventListener("mousemove",E),function(){var j;(j=I.current)===null||j===void 0||j.removeEventListener("mousemove",E)}}},[]),(0,s.jsx)(de.Z,W(W({className:qe(ue.container,ue.grid,i),gap:a,maxItemWidth:r,ref:I,rows:u,style:c},C),{},{children:t.map(function(E,j){return(0,s.jsx)(xe,{borderRadius:h,className:D,size:v,children:(0,s.jsx)(n,W({},E))},j)})}))});J.displayName="SpotlightCard";var ze=J,Q=m(5321),ke=m(47187),De=m(75716),Re=m(15323),We=m(14071),V,q,_,ee,te,ne,re,ie,oe;function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Te=(0,K.kc)(function(e,t){var n=e.token,r=e.prefixCls,i=e.css,o=e.cx,u=t.rowNum,l=t.hasLink,a="".concat(r,"-features"),c="".concat(a,"-cover"),f="".concat(a,"-description"),v="".concat(a,"-title"),g="".concat(a,"-img"),h=20,d=function(O){return i(V||(V=y([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),O,O,O*(22/24))},p=i(q||(q=y([`
      transition: all `," ",`;
    `])),n.motionDurationSlow,n.motionEaseInOutCirc);return{cell:i(_||(_=y([`
        overflow: hidden;
      `]))),container:o(p,i(ee||(ee=y([`
          position: relative;
          z-index: 1;

          overflow: hidden;

          height: 228px;
          max-height: 228px;
          padding: 24px;

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
        `])),c,h*u,n.colorFillContent,g,d(100),f,v,l?14:20)),desc:o(f,p,i(te||(te=y([`
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
        `])),n.colorTextSecondary,n.colorTextDescription)),img:o(g,p,i(ne||(ne=y([`
          `,`;
          color: `,`;
        `])),d(20),n.colorText)),imgContainer:o(c,p,i(re||(re=y([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),d(24),n.borderRadius)),link:i(ie||(ie=y([`
        `,`;
        margin-block-start: 24px;
      `])),p),title:o(v,p,i(oe||(oe=y([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),n.lineHeightHeading3,n.colorText))}});function P(e){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(e)}var Le=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"];function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ae(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ae(e,t,n){return t=Ke(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ke(e){var t=Ze(e,"string");return P(t)=="symbol"?t:String(t)}function Ze(e,t){if(P(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(P(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $e(e,t){if(e==null)return{};var n=Be(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Be(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Me=(0,b.memo)(function(e){var t=e.image,n=e.className,r=e.title,i=e.style;return t.startsWith("http")?(0,s.jsx)(Re.Z,{alt:r,className:n,src:t,style:i}):(0,s.jsx)(Q.Z,{className:n,style:i,children:t})}),le=(0,b.memo)(function(e){var t=e.style,n=e.className,r=e.row,i=e.column,o=e.description,u=e.image,l=e.title,a=e.link,c=e.icon,f=e.imageStyle,v=e.openExternal,g=$e(e,Le),h=r||7,d=Te({hasLink:!!a,rowNum:h}),p=d.styles,C=d.cx;return(0,s.jsx)("div",T(T({className:C(p.container,n),style:T({gridColumn:"span ".concat(i||1),gridRow:"span ".concat(h)},t)},g),{},{children:(0,s.jsxs)("div",{className:p.cell,children:[u||c&&(0,s.jsxs)(Q.Z,{className:p.imgContainer,style:f,children:[c&&(0,s.jsx)(De.Z,{className:p.img,icon:c}),u&&(0,s.jsx)(Me,{className:p.img,image:u,title:l})]}),l&&(0,s.jsx)(z.D,{align:"center",as:"h3",className:p.title,gap:8,horizontal:!0,children:l}),o&&(0,s.jsx)(We.Z,{className:p.desc,ellipsis:{rows:4},children:o}),a&&(0,s.jsx)("div",{className:p.link,children:(0,s.jsx)(ke.Z,{href:a,rel:"noreferrer",target:v?"_blank":void 0,children:"Read More"})})]})}))});le.displayName="FeatureItem";var He=le;function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(e)}var Ue=["items","className","itemClassName","itemStyle","maxWidth","style"];function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?se(Object(n),!0).forEach(function(r){Ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ge(e,t,n){return t=Xe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xe(e){var t=Ye(e,"string");return w(t)=="symbol"?t:String(t)}function Ye(e,t){if(w(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(w(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Je(e,t){if(e==null)return{};var n=Qe(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qe(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var ce=(0,b.memo)(function(e){var t=e.items,n=e.className,r=e.itemClassName,i=e.itemStyle,o=e.maxWidth,u=o===void 0?960:o,l=e.style,a=Je(e,Ue);if(t!=null&&t.length)return(0,s.jsx)(ze,L({className:n,items:t,renderItem:function(f){return(0,s.jsx)(He,L({className:r,style:i},f),f.title)},style:L({maxWidth:u},l)},a))});ce.displayName="Features";var Ve=ce}}]);
