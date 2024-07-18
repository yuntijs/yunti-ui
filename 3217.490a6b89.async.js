!(function(){"use strict";var lr=Object.defineProperty,sr=Object.defineProperties;var cr=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var He=(Z,k,o)=>k in Z?lr(Z,k,{enumerable:!0,configurable:!0,writable:!0,value:o}):Z[k]=o,M=(Z,k)=>{for(var o in k||(k={}))We.call(k,o)&&He(Z,o,k[o]);if(me)for(var o of me(k))Je.call(k,o)&&He(Z,o,k[o]);return Z},pe=(Z,k)=>sr(Z,cr(k));var ve=(Z,k)=>{var o={};for(var r in Z)We.call(Z,r)&&k.indexOf(r)<0&&(o[r]=Z[r]);if(Z!=null&&me)for(var r of me(Z))k.indexOf(r)<0&&Je.call(Z,r)&&(o[r]=Z[r]);return o};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3217],{35950:function(Z,k,o){o.d(k,{E_:function(){return $},nc:function(){return R}});var r=o(50959),z=o(56264),y="https://unpkg.com",I="https://registry.npmmirror.com",L=function(s){var S=s.pkg,T=s.version,A=T===void 0?"latest":T,F=s.path,g=s.proxy;switch(g){case"unpkg":return(0,z.Z)(y,"".concat(S,"@").concat(A),F);default:return(0,z.Z)(I,S,A,"files",F)}},ee=o(11527),$=(0,r.createContext)(null),X=null,V=function(s){var S=s.pkg,T=s.version,A=s.path;return L({path:A,pkg:S,proxy:"aliyun",version:T})},R=function(){var s=(0,r.useContext)($);return s?(s==null?void 0:s.proxy)!=="custom"?function(S){var T=S.pkg,A=S.version,F=S.path;return L({path:F,pkg:T,proxy:s.proxy,version:A})}:(s==null?void 0:s.customCdnFn)||V:V},N=null},88249:function(Z,k,o){o.d(k,{Z:function(){return tr}});var r=o(12027),z=o(51151),y=o(73320),I=o(4377),L=o(50959),ee=o(35950),$=function(l){var i=document.createElement("link");return i.rel="stylesheet",i.href=l,i},X=(0,L.memo)(function(n){var l=n.url,i=(0,L.useRef)(!1);return(0,L.useEffect)(function(){if(!i.current){i.current=!0;var e=$(l);document.head.append(e)}},[]),null}),V=X,R=o(88829),N,J,s,S,T,A,F,g,m=function(l){var i=l.css,e=l.token,d=l.isDarkMode,b=(0,I.F4)(N||(N=(0,R.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:i(J||(J=(0,R.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:i(s||(s=(0,R.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:i(S||(S=(0,R.Z)([`
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
    `])),e.colorFill,e.motionEaseOut),gradientAnimation:i(T||(T=(0,R.Z)([`
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
    `])),e.gold,e.magenta,e.geekblue,e.cyan,b),markdown:i(A||(A=(0,R.Z)([`
      --lobe-markdown-font-size: 16px;
      --lobe-markdown-header-multiple: 1;
      --lobe-markdown-margin-multiple: 1.5;

      position: relative;

      width: 100%;

      font-size: var(--lobe-markdown-font-size);
      line-height: 1.6;
      word-break: break-word;

      p {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        line-height: 1.6;
        letter-spacing: 0.02em;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin-block: max(
          calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.5em),
          var(--lobe-markdown-font-size)
        );
        font-weight: 600;
      }

      h1 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h2 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple))
        );
      }

      h3 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h4 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
        );
      }

      h5 {
        font-size: calc(var(--lobe-markdown-font-size) * 1);
      }

      li {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      ul,
      ol {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline-start: 1em;
        list-style-position: outside;

        li {
          margin-inline-start: 1em;
        }
      }

      ol {
        li {
          &::marker {
            color: `,`;
          }
        }
      }

      ul {
        list-style-type: none;

        li {
          &::before {
            content: '-';
            display: inline-block;
            margin-inline: -1em 0.5em;
            color: `,`;
          }
        }
      }

      strong {
        font-weight: 600;
      }

      code:not(:has(span)) {
        display: inline-block;

        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        line-height: 1;
        word-break: break-word;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      kbd {
        cursor: default;
        user-select: none;

        transform: translateY(-0.2em);

        display: inline-block;

        min-width: 1em;
        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        font-weight: 500;
        line-height: 1;
        color: `,`;
        text-align: center;

        background: `,`;
        border: 1px solid `,`;
        border-radius: 0.25em;
        box-shadow: 0 2px 0 1px `,`;

        &:hover {
          transform: translateY(0);
          box-shadow: none;
        }
      }

      blockquote {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline: 0;
        padding-block: 0;
        padding-inline: 1em;

        color: `,`;

        border-inline-start: solid 4px `,`;
      }

      hr {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);

        border-color: `,`;
        border-style: dashed;
        border-width: 1px;
        border-block-start: none;
        border-inline-start: none;
        border-inline-end: none;
      }

      details {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        padding-block: 0.75em;
        padding-inline: 1em;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        summary {
          cursor: pointer;
          display: flex;
          align-items: center;
          list-style: none;

          &::before {
            content: '';

            position: absolute;
            inset-inline-end: 1.25em;
            transform: rotateZ(-45deg);

            display: block;

            width: 0.4em;
            height: 0.4em;

            font-family: `,`;

            border-block-end: 1.5px solid `,`;
            border-inline-end: 1.5px solid `,`;

            transition: transform 200ms `,`;
          }
        }

        &[open] {
          padding-block-end: 0;

          summary {
            padding-block-end: 12px;
            border-block-end: 1px dashed `,`;

            &::before {
              transform: rotateZ(45deg);
            }
          }
        }
      }

      img,
      video {
        max-width: 100%;
      }

      table {
        overflow: hidden;
        display: table;
        border-spacing: 0;
        border-collapse: collapse;

        box-sizing: border-box;
        width: 100%;
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

        text-align: start;
        overflow-wrap: break-word;

        background: `,`;
        border-radius: `,`px;
        box-shadow: inset 0 0 0 1px `,`;
      }

      thead {
        background: `,`;
      }

      tr {
        box-shadow: inset 0 -1px 0 `,`;
      }

      th,
      td {
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
        vertical-align: top;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;

        > code {
          padding: 0 !important;

          font-family: `,`;
          font-size: 0.875em;
          line-height: 1.6;

          border: none !important;
        }
      }
    `])),e.colorTextSecondary,e.colorTextDescription,e.fontFamilyCode,e.colorFillSecondary,e.colorBorderSecondary,e.borderRadius,e.fontFamily,e.colorBgLayout,d?e.colorText:"#333",d?e.colorTextSecondary:"#000",d?e.colorTextSecondary:"#000",e.colorTextSecondary,e.colorBorder,e.colorBorderSecondary,e.colorFillTertiary,e.colorBorderSecondary,e.borderRadius,e.fontFamily,e.colorTextSecondary,e.colorTextSecondary,e.motionEaseOut,e.colorBorder,e.colorFillTertiary,e.borderRadius,e.colorBorderSecondary,e.colorFillQuaternary,e.colorBorderSecondary,e.fontFamilyCode),noScrollbar:i(F||(F=(0,R.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:i(g||(g=(0,R.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),e.colorTextSecondary,e.colorText)}},u=o(17789),c=o(43773),t=o(32041),a=o(31927);function E(n,l,i,e){var d=-1,b=n==null?0:n.length;for(e&&b&&(i=n[++d]);++d<b;)i=l(i,n[d],d,n);return i}var p=E;function P(n){return function(l){return n==null?void 0:n[l]}}var O=P,C={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},_=O(C),U=_,j=o(99757),B=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,w="\\u0300-\\u036f",x="\\ufe20-\\ufe2f",v="\\u20d0-\\u20ff",f=w+x+v,h="["+f+"]",W=RegExp(h,"g");function le(n){return n=(0,j.Z)(n),n&&n.replace(B,U).replace(W,"")}var Ge=le,Ye=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Ke(n){return n.match(Ye)||[]}var Xe=Ke,$e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Qe(n){return $e.test(n)}var Ve=Qe,he="\\ud800-\\udfff",qe="\\u0300-\\u036f",en="\\ufe20-\\ufe2f",nn="\\u20d0-\\u20ff",rn=qe+en+nn,xe="\\u2700-\\u27bf",ye="a-z\\xdf-\\xf6\\xf8-\\xff",on="\\xac\\xb1\\xd7\\xf7",tn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",an="\\u2000-\\u206f",ln=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",sn="\\ufe0e\\ufe0f",ke=on+tn+an+ln,Ce="['\u2019]",we="["+ke+"]",cn="["+rn+"]",Te="\\d+",un="["+xe+"]",Ee="["+ye+"]",Ze="[^"+he+ke+Te+xe+ye+Se+"]",dn="\\ud83c[\\udffb-\\udfff]",fn="(?:"+cn+"|"+dn+")",bn="[^"+he+"]",Oe="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",re="["+Se+"]",gn="\\u200d",je="(?:"+Ee+"|"+Ze+")",mn="(?:"+re+"|"+Ze+")",Ie="(?:"+Ce+"(?:d|ll|m|re|s|t|ve))?",Re="(?:"+Ce+"(?:D|LL|M|RE|S|T|VE))?",Pe=fn+"?",ze="["+sn+"]?",pn="(?:"+gn+"(?:"+[bn,Oe,Ae].join("|")+")"+ze+Pe+")*",vn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",hn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",xn=ze+Pe+pn,yn="(?:"+[un,Oe,Ae].join("|")+")"+xn,Sn=RegExp([re+"?"+Ee+"+"+Ie+"(?="+[we,re,"$"].join("|")+")",mn+"+"+Re+"(?="+[we,re+je,"$"].join("|")+")",re+"?"+je+"+"+Ie,re+"+"+Re,hn,vn,Te,yn].join("|"),"g");function kn(n){return n.match(Sn)||[]}var Cn=kn;function wn(n,l,i){return n=(0,j.Z)(n),l=i?void 0:l,l===void 0?Ve(n)?Cn(n):Xe(n):n.match(l)||[]}var Tn=wn,En="['\u2019]",Zn=RegExp(En,"g");function On(n){return function(l){return p(Tn(Ge(l).replace(Zn,"")),n,"")}}var An=On,jn=An(function(n,l,i){return l=l.toLowerCase(),n+(i?(0,a.Z)(l):l)}),In=jn,H=o(20337),Rn=function(l){var i,e=l.name,d=l.scale,b=l.appearance;return i={},(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)(i,"".concat(e,"Bg"),d["".concat(b,"A")][1]),"".concat(e,"BgHover"),d["".concat(b,"A")][2]),"".concat(e,"Border"),d[b][4]),"".concat(e,"BorderSecondary"),d[b][3]),"".concat(e,"BorderHover"),d[b][5]),"".concat(e,"Hover"),d[b][10]),"".concat(e),d[b][9]),"".concat(e,"Active"),d[b][7]),"".concat(e,"TextHover"),d["".concat(b,"A")][10]),"".concat(e,"Text"),d["".concat(b,"A")][9]),(0,t.Z)(i,"".concat(e,"TextActive"),d["".concat(b,"A")][7])},Pn=function(l){var i=l.name,e=l.scale,d=l.appearance,b={},D=(0,c.Z)(e[d].entries()),Y;try{for(D.s();!(Y=D.n()).done;){var K=(0,u.Z)(Y.value,2),oe=K[0],te=K[1];oe===0||oe===12||(b["".concat(i).concat(oe)]=te)}}catch(ce){D.e(ce)}finally{D.f()}var ae=(0,c.Z)(e["".concat(d,"A")].entries()),be;try{for(ae.s();!(be=ae.n()).done;){var ge=(0,u.Z)(be.value,2),q=ge[0],ie=ge[1];q===0||q===12||(b["".concat(i).concat(q,"A")]=ie)}}catch(ce){ae.e(ce)}finally{ae.f()}return(0,r.Z)((0,r.Z)({},b),Rn({appearance:d,name:i,scale:e}))},zn=function(l){for(var i=l.isDarkMode,e={},d=0,b=Object.entries(H._);d<b.length;d++){var D=(0,u.Z)(b[d],2),Y=D[0],K=D[1];e=(0,r.Z)((0,r.Z)({},e),Pn({appearance:i?"dark":"light",name:In(Y),scale:K}))}return e},G=function(l){var i=l.type,e=l.scale,d=l.appearance,b=(0,a.Z)(i),D=d==="dark";return(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},"color".concat(b,"Bg"),e[d][1]),"color".concat(b,"BgHover"),e[d][2]),"color".concat(b,"Border"),e[d][4]),"color".concat(b,"BorderHover"),e[d][D?5:3]),"color".concat(b,"Hover"),e[d][D?10:8]),"color".concat(b),e[d][9]),"color".concat(b,"Active"),e[d][D?7:10]),"color".concat(b,"TextHover"),e[d][D?10:8]),"color".concat(b,"Text"),e[d][9]),"color".concat(b,"TextActive"),e[d][D?7:10])},ue=function(l){var i=l.scale,e=l.appearance;return{colorBgContainer:e==="dark"?i[e][1]:i[e][0],colorBgElevated:e==="dark"?i[e][2]:i[e][0],colorBgLayout:e==="dark"?i[e][0]:i[e][1],colorBgMask:i.lightA[8],colorBgSpotlight:i[e][5],colorBorder:i[e][4],colorBorderSecondary:i[e][3],colorFill:i["".concat(e,"A")][3],colorFillQuaternary:i["".concat(e,"A")][0],colorFillSecondary:i["".concat(e,"A")][2],colorFillTertiary:i["".concat(e,"A")][1],colorText:i[e][12],colorTextQuaternary:i[e][6],colorTextSecondary:i[e][10],colorTextTertiary:i[e][8]}},De={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},Dn=G({appearance:"dark",scale:H._.bnw,type:"Primary"}),Le=ue({appearance:"dark",scale:H._.gray}),Ln=G({appearance:"dark",scale:H._.lime,type:"Success"}),Fn=G({appearance:"dark",scale:H._.gold,type:"Warning"}),_n=G({appearance:"dark",scale:H._.red,type:"Error"}),de=G({appearance:"dark",scale:H._.blue,type:"Info"}),Mn=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},Dn),Le),Ln),Fn),_n),de),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:de.colorInfoText,colorLinkActive:de.colorInfoTextActive,colorLinkHover:de.colorInfoTextHover,colorTextLightSolid:Le.colorBgLayout}),Un=Mn,Bn=function(l,i){var e=l.primaryColor,d=l.neutralColor,b={},D={},Y=H._[e];Y&&(b=G({appearance:"dark",scale:Y,type:"Primary"}));var K=De[d];return K&&(D=ue({appearance:"dark",scale:K})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},i),Un),b),D)},Nn=G({appearance:"light",scale:H._.bnw,type:"Primary"}),Fe=ue({appearance:"light",scale:H._.gray}),Hn=G({appearance:"light",scale:H._.green,type:"Success"}),Wn=G({appearance:"light",scale:H._.orange,type:"Warning"}),Jn=G({appearance:"light",scale:H._.volcano,type:"Error"}),fe=G({appearance:"light",scale:H._.geekblue,type:"Info"}),Gn=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},Nn),Fe),Hn),Wn),Jn),fe),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:fe.colorInfoText,colorLinkActive:fe.colorInfoTextActive,colorLinkHover:fe.colorInfoTextHover,colorTextLightSolid:Fe.colorBgLayout}),Yn=Gn,Kn=function(l,i){var e=l.primaryColor,d=l.neutralColor,b={},D={},Y=H._[e];Y&&(b=G({appearance:"light",scale:Y,type:"Primary"}));var K=De[d];return K&&(D=ue({appearance:"light",scale:K})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},i),Yn),b),D)},_e='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',Xn='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',Me='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',$n="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",Qn={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[Xn,Me,_e].join(","),fontFamilyCode:[$n,Me,_e].join(",")},Vn=function(l){var i=l.neutralColor,e=l.appearance,d=l.primaryColor,b=e==="dark";return{algorithm:b?Bn:Kn,token:(0,r.Z)((0,r.Z)({},Qn),{},{neutralColor:i,primaryColor:d})}},se=o(87859),Ue,qn=function(n){return(0,I.iv)(Ue||(Ue=(0,R.Z)([`
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
    padding-block: 4px;
    padding-inline: 8px;

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

  .`,`-popover-inner {
    border: 1px solid `,`;
    box-shadow: `,`;
  }

  ul.`,`-dropdown-menu {
    border: 1px solid `,`;
    border-radius: `,`px !important;
    box-shadow: `,`;
  }
`])),n.prefixCls,(0,se.XV)(n.colorPrimary),n.prefixCls,n.prefixCls,(0,se.XV)(n.colorPrimary),(0,se.XV)(n.colorPrimary),(0,se.XV)(n.colorPrimaryActive),n.prefixCls,n.colorBgLayout,n.colorText,n.borderRadiusSM,n.prefixCls,n.colorText,n.prefixCls,n.colorBgContainer,n.prefixCls,n.prefixCls,n.prefixCls,n.stylish.blur,n.borderRadiusLG,(0,se.m4)(n.colorBgMask,.1),n.prefixCls,n.colorBorderSecondary,n.boxShadowSecondary,n.prefixCls,n.colorBorderSecondary,n.borderRadius,n.boxShadowSecondary)},Be,er=function(n){return(0,I.iv)(Be||(Be=(0,R.Z)([`
  :root {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;
  }

  html {
    overscroll-behavior: none;
    color-scheme: `,`;
  }

  body {
    overflow: hidden auto;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    word-wrap: break-word;
    vertical-align: baseline;

    background-color: `,`;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    scrollbar-color: `,` transparent;
    scrollbar-width: thin;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`])),n.isDarkMode?"dark":"light",n.fontFamily,n.fontSize,n.colorTextBase,n.colorBgLayout,n.fontFamilyCode,n.fontFamilyCode,n.yellow9,n.colorFill)},nr=(0,I.vJ)(function(n){var l=n.theme;return[er(l),qn(l)]}),rr=nr,ne=o(11527),or=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],Ne=(0,L.memo)(function(n){var l=n.children,i=n.customStylish,e=n.customToken,d=n.enableWebfonts,b=d===void 0?!0:d,D=n.enableGlobalStyle,Y=D===void 0?!0:D,K=n.webfonts,oe=n.customTheme,te=oe===void 0?{}:oe,ae=n.className,be=n.style,ge=(0,z.Z)(n,or),q=(0,ee.nc)(),ie=K||[q({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),q({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),q({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),q({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ce=(0,L.useCallback)(function(Q){return(0,r.Z)((0,r.Z)({},m(Q)),i==null?void 0:i(Q))},[i]),ar=(0,L.useCallback)(function(Q){return(0,r.Z)((0,r.Z)({},zn(Q)),e==null?void 0:e(Q))},[e]),ir=(0,L.useCallback)(function(Q){return Vn({appearance:Q,neutralColor:te.neutralColor,primaryColor:te.primaryColor})},[te.primaryColor,te.neutralColor]);return(0,ne.jsxs)(ne.Fragment,{children:[b&&(ie==null?void 0:ie.length)>0&&ie.map(function(Q){return(0,ne.jsx)(V,{url:Q},Q)}),(0,ne.jsx)(I.V9,{speedy:!0,children:(0,ne.jsxs)(I.f6,(0,r.Z)((0,r.Z)({customStylish:ce,customToken:ar},ge),{},{theme:ir,children:[Y&&(0,ne.jsx)(rr,{}),(0,ne.jsx)(y.Z,{className:ae,style:(0,r.Z)({minHeight:"inherit",width:"inherit"},be),children:l})]}))})]})});Ne.displayName="LobeThemeProvider";var tr=Ne},84899:function(Z,k,o){var r=o(78342),z=o(50959),y=o(11527),I=(0,z.memo)(function(){return(0,y.jsxs)(r.ql,{children:[(0,y.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,y.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,y.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,y.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,y.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,y.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,y.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,y.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,y.jsx)("meta",{content:"#000000",name:"theme-color"})]})});k.Z=I},32418:function(Z,k,o){o.d(k,{f:function(){return y}});var r=o(63783),z=o(51304),y=(0,r.Ue)()((0,z.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(Z){Z.exports=function k(o,r){if(o===r)return!0;if(o&&r&&typeof o=="object"&&typeof r=="object"){if(o.constructor!==r.constructor)return!1;var z,y,I;if(Array.isArray(o)){if(z=o.length,z!=r.length)return!1;for(y=z;y--!==0;)if(!k(o[y],r[y]))return!1;return!0}if(o.constructor===RegExp)return o.source===r.source&&o.flags===r.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===r.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===r.toString();if(I=Object.keys(o),z=I.length,z!==Object.keys(r).length)return!1;for(y=z;y--!==0;)if(!Object.prototype.hasOwnProperty.call(r,I[y]))return!1;for(y=z;y--!==0;){var L=I[y];if(!k(o[L],r[L]))return!1}return!0}return o!==o&&r!==r}},2179:function(Z,k,o){var r=o(50959),z=o(4322);function y(R,N){return R===N&&(R!==0||1/R===1/N)||R!==R&&N!==N}var I=typeof Object.is=="function"?Object.is:y,L=z.useSyncExternalStore,ee=r.useRef,$=r.useEffect,X=r.useMemo,V=r.useDebugValue;k.useSyncExternalStoreWithSelector=function(R,N,J,s,S){var T=ee(null);if(T.current===null){var A={hasValue:!1,value:null};T.current=A}else A=T.current;T=X(function(){function g(a){if(!m){if(m=!0,u=a,a=s(a),S!==void 0&&A.hasValue){var E=A.value;if(S(E,a))return c=E}return c=a}if(E=c,I(u,a))return E;var p=s(a);return S!==void 0&&S(E,p)?E:(u=a,c=p)}var m=!1,u,c,t=J===void 0?null:J;return[function(){return g(N())},t===null?void 0:function(){return g(t())}]},[N,J,s,S]);var F=L(R,T[0],T[1]);return $(function(){A.hasValue=!0,A.value=F},[F]),V(F),F}},7231:function(Z,k,o){Z.exports=o(2179)},63783:function(Z,k,o){o.d(k,{Ue:function(){return N}});const r=s=>{let S;const T=new Set,A=(c,t)=>{const a=typeof c=="function"?c(S):c;if(!Object.is(a,S)){const E=S;S=(t!=null?t:typeof a!="object"||a===null)?a:Object.assign({},S,a),T.forEach(p=>p(S,E))}},F=()=>S,u={setState:A,getState:F,subscribe:c=>(T.add(c),()=>T.delete(c)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),T.clear()}};return S=s(A,F,u),u},z=s=>s?r(s):r;var y=s=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),z(s)),I=o(50959),L=o(7231);const{useDebugValue:ee}=I,{useSyncExternalStoreWithSelector:$}=L;let X=!1;function V(s,S=s.getState,T){T&&!X&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),X=!0);const A=$(s.subscribe,s.getState,s.getServerState||s.getState,S,T);return ee(A),A}const R=s=>{typeof s!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const S=typeof s=="function"?z(s):s,T=(A,F)=>V(S,A,F);return Object.assign(T,S),T},N=s=>s?R(s):R;var J=s=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),N(s))},51304:function(Z,k,o){o.d(k,{mW:function(){return $},tJ:function(){return F}});const r=(g,m)=>(u,c,t)=>(t.dispatch=a=>(u(E=>g(E,a),!1,a),a),t.dispatchFromDevtools=!0,M({dispatch:(...a)=>t.dispatch(...a)},m)),z=null,y=new Map,I=g=>{const m=y.get(g);return m?Object.fromEntries(Object.entries(m.stores).map(([u,c])=>[u,c.getState()])):{}},L=(g,m,u)=>{if(g===void 0)return{type:"untracked",connection:m.connect(u)};const c=y.get(u.name);if(c)return M({type:"tracked",store:g},c);const t={connection:m.connect(u),stores:{}};return y.set(u.name,t),M({type:"tracked",store:g},t)},$=(g,m={})=>(u,c,t)=>{const w=m,{enabled:a,anonymousActionType:E,store:p}=w,P=ve(w,["enabled","anonymousActionType","store"]);let O;try{O=(a!=null?a:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(v){}if(!O)return a&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),g(u,c,t);const x=L(p,O,P),{connection:C}=x,_=ve(x,["connection"]);let U=!0;t.setState=(v,f,h)=>{const W=u(v,f);if(!U)return W;const le=h===void 0?{type:E||"anonymous"}:typeof h=="string"?{type:h}:h;return p===void 0?(C==null||C.send(le,c()),W):(C==null||C.send(pe(M({},le),{type:`${p}/${le.type}`}),pe(M({},I(P.name)),{[p]:t.getState()})),W)};const j=(...v)=>{const f=U;U=!1,u(...v),U=f},B=g(t.setState,c,t);if(_.type==="untracked"?C==null||C.init(B):(_.stores[_.store]=t,C==null||C.init(Object.fromEntries(Object.entries(_.stores).map(([v,f])=>[v,v===_.store?B:f.getState()])))),t.dispatchFromDevtools&&typeof t.dispatch=="function"){let v=!1;const f=t.dispatch;t.dispatch=(...h)=>{h[0].type==="__setState"&&!v&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),v=!0),f(...h)}}return C.subscribe(v=>{var f;switch(v.type){case"ACTION":if(typeof v.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return X(v.payload,h=>{if(h.type==="__setState"){if(p===void 0){j(h.state);return}Object.keys(h.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const W=h.state[p];if(W==null)return;JSON.stringify(t.getState())!==JSON.stringify(W)&&j(W);return}t.dispatchFromDevtools&&typeof t.dispatch=="function"&&t.dispatch(h)});case"DISPATCH":switch(v.payload.type){case"RESET":return j(B),p===void 0?C==null?void 0:C.init(t.getState()):C==null?void 0:C.init(I(P.name));case"COMMIT":if(p===void 0){C==null||C.init(t.getState());return}return C==null?void 0:C.init(I(P.name));case"ROLLBACK":return X(v.state,h=>{if(p===void 0){j(h),C==null||C.init(t.getState());return}j(h[p]),C==null||C.init(I(P.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return X(v.state,h=>{if(p===void 0){j(h);return}JSON.stringify(t.getState())!==JSON.stringify(h[p])&&j(h[p])});case"IMPORT_STATE":{const{nextLiftedState:h}=v.payload,W=(f=h.computedStates.slice(-1)[0])==null?void 0:f.state;if(!W)return;j(p===void 0?W:W[p]),C==null||C.send(null,h);return}case"PAUSE_RECORDING":return U=!U}return}}),B},X=(g,m)=>{let u;try{u=JSON.parse(g)}catch(c){console.error("[zustand devtools middleware] Could not parse the received json",c)}u!==void 0&&m(u)},V=g=>(m,u,c)=>{const t=c.subscribe;return c.subscribe=(E,p,P)=>{let O=E;if(p){const C=(P==null?void 0:P.equalityFn)||Object.is;let _=E(c.getState());O=U=>{const j=E(U);if(!C(_,j)){const B=_;p(_=j,B)}},P!=null&&P.fireImmediately&&p(_,_)}return t(O)},g(m,u,c)},R=null,N=(g,m)=>(...u)=>Object.assign({},g,m(...u));function J(g,m){let u;try{u=g()}catch(t){return}return{getItem:t=>{var a;const E=P=>P===null?null:JSON.parse(P,m==null?void 0:m.reviver),p=(a=u.getItem(t))!=null?a:null;return p instanceof Promise?p.then(E):E(p)},setItem:(t,a)=>u.setItem(t,JSON.stringify(a,m==null?void 0:m.replacer)),removeItem:t=>u.removeItem(t)}}const s=g=>m=>{try{const u=g(m);return u instanceof Promise?u:{then(c){return s(c)(u)},catch(c){return this}}}catch(u){return{then(c){return this},catch(c){return s(c)(u)}}}},S=(g,m)=>(u,c,t)=>{let a=M({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:x=>x,version:0,merge:(x,v)=>M(M({},v),x)},m),E=!1;const p=new Set,P=new Set;let O;try{O=a.getStorage()}catch(x){}if(!O)return g((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),u(...x)},c,t);const C=s(a.serialize),_=()=>{const x=a.partialize(M({},c()));let v;const f=C({state:x,version:a.version}).then(h=>O.setItem(a.name,h)).catch(h=>{v=h});if(v)throw v;return f},U=t.setState;t.setState=(x,v)=>{U(x,v),_()};const j=g((...x)=>{u(...x),_()},c,t);let B;const w=()=>{var x;if(!O)return;E=!1,p.forEach(f=>f(c()));const v=((x=a.onRehydrateStorage)==null?void 0:x.call(a,c()))||void 0;return s(O.getItem.bind(O))(a.name).then(f=>{if(f)return a.deserialize(f)}).then(f=>{if(f)if(typeof f.version=="number"&&f.version!==a.version){if(a.migrate)return a.migrate(f.state,f.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return f.state}).then(f=>{var h;return B=a.merge(f,(h=c())!=null?h:j),u(B,!0),_()}).then(()=>{v==null||v(B,void 0),E=!0,P.forEach(f=>f(B))}).catch(f=>{v==null||v(void 0,f)})};return t.persist={setOptions:x=>{a=M(M({},a),x),x.getStorage&&(O=x.getStorage())},clearStorage:()=>{O==null||O.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>w(),hasHydrated:()=>E,onHydrate:x=>(p.add(x),()=>{p.delete(x)}),onFinishHydration:x=>(P.add(x),()=>{P.delete(x)})},w(),B||j},T=(g,m)=>(u,c,t)=>{let a=M({storage:J(()=>localStorage),partialize:w=>w,version:0,merge:(w,x)=>M(M({},x),w)},m),E=!1;const p=new Set,P=new Set;let O=a.storage;if(!O)return g((...w)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),u(...w)},c,t);const C=()=>{const w=a.partialize(M({},c()));return O.setItem(a.name,{state:w,version:a.version})},_=t.setState;t.setState=(w,x)=>{_(w,x),C()};const U=g((...w)=>{u(...w),C()},c,t);let j;const B=()=>{var w,x;if(!O)return;E=!1,p.forEach(f=>{var h;return f((h=c())!=null?h:U)});const v=((x=a.onRehydrateStorage)==null?void 0:x.call(a,(w=c())!=null?w:U))||void 0;return s(O.getItem.bind(O))(a.name).then(f=>{if(f)if(typeof f.version=="number"&&f.version!==a.version){if(a.migrate)return a.migrate(f.state,f.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return f.state}).then(f=>{var h;return j=a.merge(f,(h=c())!=null?h:U),u(j,!0),C()}).then(()=>{v==null||v(j,void 0),j=c(),E=!0,P.forEach(f=>f(j))}).catch(f=>{v==null||v(void 0,f)})};return t.persist={setOptions:w=>{a=M(M({},a),w),w.storage&&(O=w.storage)},clearStorage:()=>{O==null||O.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>B(),hasHydrated:()=>E,onHydrate:w=>(p.add(w),()=>{p.delete(w)}),onFinishHydration:w=>(P.add(w),()=>{P.delete(w)})},a.skipHydration||B(),j||U},F=(g,m)=>"getStorage"in m||"serialize"in m||"deserialize"in m?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),S(g,m)):T(g,m)}}]);
}());