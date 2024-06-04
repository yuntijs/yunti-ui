!(function(){"use strict";var bt=Object.defineProperty,mt=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var zr=Object.getOwnPropertySymbols;var ft=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable;var dt=(W,F,d)=>F in W?bt(W,F,{enumerable:!0,configurable:!0,writable:!0,value:d}):W[F]=d,ne=(W,F)=>{for(var d in F||(F={}))ft.call(F,d)&&dt(W,d,F[d]);if(zr)for(var d of zr(F))pt.call(F,d)&&dt(W,d,F[d]);return W},hn=(W,F)=>mt(W,gt(F));var vn=(W,F)=>{var d={};for(var l in W)ft.call(W,l)&&F.indexOf(l)<0&&(d[l]=W[l]);if(W!=null&&zr)for(var l of zr(W))F.indexOf(l)<0&&pt.call(W,l)&&(d[l]=W[l]);return d};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3076],{45281:function(W,F,d){d.d(F,{E_:function(){return ue},nc:function(){return D}});var l=d(50959),_=d(56264),w="https://unpkg.com",$="https://registry.npmmirror.com",P=function(g){var j=g.pkg,H=g.version,N=H===void 0?"latest":H,q=g.path,k=g.proxy;switch(k){case"unpkg":return(0,_.Z)(w,"".concat(j,"@").concat(N),q);default:return(0,_.Z)($,j,N,"files",q)}},be=d(11527),ue=(0,l.createContext)(null),te=null,ae=function(g){var j=g.pkg,H=g.version,N=g.path;return P({path:N,pkg:j,proxy:"aliyun",version:H})},D=function(){var g=(0,l.useContext)(ue);return g?(g==null?void 0:g.proxy)!=="custom"?function(j){var H=j.pkg,N=j.version,q=j.path;return P({path:q,pkg:H,proxy:g.proxy,version:N})}:(g==null?void 0:g.customCdnFn)||ae:ae},Y=null},14904:function(W,F,d){d.d(F,{Z:function(){return lt}});var l=d(35194),_=d(50446),w=d(66872),$=d(55345),P=d(50959),be=d(45281),ue=function(p){var c=document.createElement("link");return c.rel="stylesheet",c.href=p,c},te=(0,P.memo)(function(i){var p=i.url,c=(0,P.useRef)(!1);return(0,P.useEffect)(function(){if(!c.current){c.current=!0;var u=ue(p);document.head.append(u)}},[]),null}),ae=te,D=d(86910),Y,K,g,j,H,N,q,k,z=function(p){var c=p.css,u=p.token,m=p.isDarkMode,S=(0,$.F4)(Y||(Y=(0,D.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:c(K||(K=(0,D.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:c(g||(g=(0,D.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:c(j||(j=(0,D.Z)([`
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
    `])),u.colorFill,u.motionEaseOut),gradientAnimation:c(H||(H=(0,D.Z)([`
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
    `])),u.gold,u.magenta,u.geekblue,u.cyan,S),markdown:c(N||(N=(0,D.Z)([`
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
    `])),u.colorTextSecondary,u.colorTextDescription,u.fontFamilyCode,u.colorFillSecondary,u.colorBorderSecondary,u.borderRadius,u.fontFamily,u.colorBgLayout,m?u.colorText:"#333",m?u.colorTextSecondary:"#000",m?u.colorTextSecondary:"#000",u.colorTextSecondary,u.colorBorder,u.colorBorderSecondary,u.colorFillTertiary,u.colorBorderSecondary,u.borderRadius,u.fontFamily,u.colorTextSecondary,u.colorTextSecondary,u.motionEaseOut,u.colorBorder,u.colorFillTertiary,u.borderRadius,u.colorBorderSecondary,u.colorFillQuaternary,u.colorBorderSecondary,u.fontFamilyCode),noScrollbar:c(q||(q=(0,D.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:c(k||(k=(0,D.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),u.colorTextSecondary,u.colorText)}},x=d(30309),y=d(53145),f=d(68185),o=d(99757);function M(i,p,c){var u=-1,m=i.length;p<0&&(p=-p>m?0:m+p),c=c>m?m:c,c<0&&(c+=m),m=p>c?0:c-p>>>0,p>>>=0;for(var S=Array(m);++u<m;)S[u]=i[u+p];return S}var T=M;function J(i,p,c){var u=i.length;return c=c===void 0?u:c,!p&&c>=u?i:T(i,p,c)}var B=J,O="\\ud800-\\udfff",ee="\\u0300-\\u036f",re="\\ufe20-\\ufe2f",G="\\u20d0-\\u20ff",X=ee+re+G,L="\\ufe0e\\ufe0f",I="\\u200d",A=RegExp("["+I+O+X+L+"]");function v(i){return A.test(i)}var C=v;function oe(i){return i.split("")}var Ae=oe,er="\\ud800-\\udfff",rr="\\u0300-\\u036f",yn="\\ufe20-\\ufe2f",xn="\\u20d0-\\u20ff",Ir=rr+yn+xn,ve="\\ufe0e\\ufe0f",Rr="["+er+"]",Pe="["+Ir+"]",Be="\\ud83c[\\udffb-\\udfff]",Sn="(?:"+Pe+"|"+Be+")",Fr="[^"+er+"]",Or="(?:\\ud83c[\\udde6-\\uddff]){2}",He="[\\ud800-\\udbff][\\udc00-\\udfff]",nr="\\u200d",tr=Sn+"?",jr="["+ve+"]?",Er="(?:"+nr+"(?:"+[Fr,Or,He].join("|")+")"+jr+tr+")*",wn=jr+tr+Er,Zr="(?:"+[Fr+Pe+"?",Pe,Or,He,Rr].join("|")+")",Cn=RegExp(Be+"(?="+Be+")|"+Zr+wn,"g");function Lr(i){return i.match(Cn)||[]}var kn=Lr;function ar(i){return C(i)?kn(i):Ae(i)}var Tn=ar;function An(i){return function(p){p=(0,o.Z)(p);var c=C(p)?Tn(p):void 0,u=c?c[0]:p.charAt(0),m=c?B(c,1).join(""):p.slice(1);return u[i]()+m}}var zn=An,Mr=zn("toUpperCase"),Pr=Mr;function or(i){return Pr((0,o.Z)(i).toLowerCase())}var Hr=or;function Wr(i,p,c,u){var m=-1,S=i==null?0:i.length;for(u&&S&&(c=i[++m]);++m<S;)c=p(c,i[m],m,i);return c}var Dr=Wr;function ir(i){return function(p){return i==null?void 0:i[p]}}var Ur=ir,Br={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},$r=Ur(Br),Nr=$r,In=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rn="\\u0300-\\u036f",Fn="\\ufe20-\\ufe2f",_r="\\u20d0-\\u20ff",ur=Rn+Fn+_r,sr="["+ur+"]",On=RegExp(sr,"g");function jn(i){return i=(0,o.Z)(i),i&&i.replace(In,Nr).replace(On,"")}var lr=jn,En=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Zn(i){return i.match(En)||[]}var Jr=Zn,Gr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ln(i){return Gr.test(i)}var Yr=Ln,cr="\\ud800-\\udfff",Mn="\\u0300-\\u036f",Pn="\\ufe20-\\ufe2f",$e="\\u20d0-\\u20ff",Qr=Mn+Pn+$e,ze="\\u2700-\\u27bf",Ne="a-z\\xdf-\\xf6\\xf8-\\xff",Xr="\\xac\\xb1\\xd7\\xf7",Kr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",qr="\\u2000-\\u206f",Vr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",dr="A-Z\\xc0-\\xd6\\xd8-\\xde",_e="\\ufe0e\\ufe0f",fr=Xr+Kr+qr+Vr,pr="['\u2019]",br="["+fr+"]",ye="["+Qr+"]",mr="\\d+",me="["+ze+"]",gr="["+Ne+"]",We="[^"+cr+fr+mr+ze+Ne+dr+"]",Ce="\\ud83c[\\udffb-\\udfff]",Je="(?:"+ye+"|"+Ce+")",en="[^"+cr+"]",je="(?:\\ud83c[\\udde6-\\uddff]){2}",Ge="[\\ud800-\\udbff][\\udc00-\\udfff]",ke="["+dr+"]",De="\\u200d",Te="(?:"+gr+"|"+We+")",rn="(?:"+ke+"|"+We+")",hr="(?:"+pr+"(?:d|ll|m|re|s|t|ve))?",vr="(?:"+pr+"(?:D|LL|M|RE|S|T|VE))?",yr=Je+"?",le="["+_e+"]?",xr="(?:"+De+"(?:"+[en,je,Ge].join("|")+")"+le+yr+")*",se="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",nn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Hn=le+yr+xr,Wn="(?:"+[me,je,Ge].join("|")+")"+Hn,Dn=RegExp([ke+"?"+gr+"+"+hr+"(?="+[br,ke,"$"].join("|")+")",rn+"+"+vr+"(?="+[br,ke+Te,"$"].join("|")+")",ke+"?"+Te+"+"+hr,ke+"+"+vr,nn,se,mr,Wn].join("|"),"g");function Ie(i){return i.match(Dn)||[]}var tn=Ie;function Un(i,p,c){return i=(0,o.Z)(i),p=c?void 0:p,p===void 0?Yr(i)?tn(i):Jr(i):i.match(p)||[]}var Bn=Un,an="['\u2019]",$n=RegExp(an,"g");function Nn(i){return function(p){return Dr(Bn(lr(p).replace($n,"")),i,"")}}var Ye=Nn,Sr=Ye(function(i,p,c){return p=p.toLowerCase(),i+(c?Hr(p):p)}),_n=Sr,ie=d(82795),Jn=function(p){var c,u=p.name,m=p.scale,S=p.appearance;return c={},(0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)(c,"".concat(u,"Bg"),m["".concat(S,"A")][1]),"".concat(u,"BgHover"),m["".concat(S,"A")][2]),"".concat(u,"Border"),m[S][4]),"".concat(u,"BorderSecondary"),m[S][3]),"".concat(u,"BorderHover"),m[S][5]),"".concat(u,"Hover"),m[S][10]),"".concat(u),m[S][9]),"".concat(u,"Active"),m[S][7]),"".concat(u,"TextHover"),m["".concat(S,"A")][10]),"".concat(u,"Text"),m["".concat(S,"A")][9]),(0,f.Z)(c,"".concat(u,"TextActive"),m["".concat(S,"A")][7])},on=function(p){var c=p.name,u=p.scale,m=p.appearance,S={},Q=(0,y.Z)(u[m].entries()),ce;try{for(Q.s();!(ce=Q.n()).done;){var fe=(0,x.Z)(ce.value,2),Le=fe[0],Me=fe[1];Le===0||Le===12||(S["".concat(c).concat(Le)]=Me)}}catch(Ue){Q.e(Ue)}finally{Q.f()}var Fe=(0,y.Z)(u["".concat(m,"A")].entries()),qe;try{for(Fe.s();!(qe=Fe.n()).done;){var Ve=(0,x.Z)(qe.value,2),xe=Ve[0],Oe=Ve[1];xe===0||xe===12||(S["".concat(c).concat(xe,"A")]=Oe)}}catch(Ue){Fe.e(Ue)}finally{Fe.f()}return(0,l.Z)((0,l.Z)({},S),Jn({appearance:m,name:c,scale:u}))},Gn=function(p){for(var c=p.isDarkMode,u={},m=0,S=Object.entries(ie._);m<S.length;m++){var Q=(0,x.Z)(S[m],2),ce=Q[0],fe=Q[1];u=(0,l.Z)((0,l.Z)({},u),on({appearance:c?"dark":"light",name:_n(ce),scale:fe}))}return u},de=function(p){var c=p.type,u=p.scale,m=p.appearance,S=Hr(c),Q=m==="dark";return(0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)({},"color".concat(S,"Bg"),u[m][1]),"color".concat(S,"BgHover"),u[m][2]),"color".concat(S,"Border"),u[m][4]),"color".concat(S,"BorderHover"),u[m][Q?5:3]),"color".concat(S,"Hover"),u[m][Q?10:8]),"color".concat(S),u[m][9]),"color".concat(S,"Active"),u[m][Q?7:10]),"color".concat(S,"TextHover"),u[m][Q?10:8]),"color".concat(S,"Text"),u[m][9]),"color".concat(S,"TextActive"),u[m][Q?7:10])},Qe=function(p){var c=p.scale,u=p.appearance;return{colorBgContainer:u==="dark"?c[u][1]:c[u][0],colorBgElevated:u==="dark"?c[u][2]:c[u][0],colorBgLayout:u==="dark"?c[u][0]:c[u][1],colorBgMask:c.lightA[8],colorBgSpotlight:c[u][5],colorBorder:c[u][4],colorBorderSecondary:c[u][3],colorFill:c["".concat(u,"A")][3],colorFillQuaternary:c["".concat(u,"A")][0],colorFillSecondary:c["".concat(u,"A")][2],colorFillTertiary:c["".concat(u,"A")][1],colorText:c[u][12],colorTextQuaternary:c[u][6],colorTextSecondary:c[u][10],colorTextTertiary:c[u][8]}},wr={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},un=de({appearance:"dark",scale:ie._.bnw,type:"Primary"}),Xe=Qe({appearance:"dark",scale:ie._.gray}),sn=de({appearance:"dark",scale:ie._.lime,type:"Success"}),Yn=de({appearance:"dark",scale:ie._.gold,type:"Warning"}),Qn=de({appearance:"dark",scale:ie._.red,type:"Error"}),Ee=de({appearance:"dark",scale:ie._.blue,type:"Info"}),Cr=(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},un),Xe),sn),Yn),Qn),Ee),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Ee.colorInfoText,colorLinkActive:Ee.colorInfoTextActive,colorLinkHover:Ee.colorInfoTextHover,colorTextLightSolid:Xe.colorBgLayout}),ln=Cr,Xn=function(p,c){var u=p.primaryColor,m=p.neutralColor,S={},Q={},ce=ie._[u];ce&&(S=de({appearance:"dark",scale:ce,type:"Primary"}));var fe=wr[m];return fe&&(Q=Qe({appearance:"dark",scale:fe})),(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},c),ln),S),Q)},cn=de({appearance:"light",scale:ie._.bnw,type:"Primary"}),dn=Qe({appearance:"light",scale:ie._.gray}),Kn=de({appearance:"light",scale:ie._.green,type:"Success"}),fn=de({appearance:"light",scale:ie._.orange,type:"Warning"}),qn=de({appearance:"light",scale:ie._.volcano,type:"Error"}),Ke=de({appearance:"light",scale:ie._.geekblue,type:"Info"}),pn=(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},cn),dn),Kn),fn),qn),Ke),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Ke.colorInfoText,colorLinkActive:Ke.colorInfoTextActive,colorLinkHover:Ke.colorInfoTextHover,colorTextLightSolid:dn.colorBgLayout}),Vn=pn,et=function(p,c){var u=p.primaryColor,m=p.neutralColor,S={},Q={},ce=ie._[u];ce&&(S=de({appearance:"light",scale:ce,type:"Primary"}));var fe=wr[m];return fe&&(Q=Qe({appearance:"light",scale:fe})),(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},c),Vn),S),Q)},kr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',rt='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',bn='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',mn="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",nt={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[rt,bn,kr].join(","),fontFamilyCode:[mn,bn,kr].join(",")},tt=function(p){var c=p.neutralColor,u=p.appearance,m=p.primaryColor,S=u==="dark";return{algorithm:S?Xn:et,token:(0,l.Z)((0,l.Z)({},nt),{},{neutralColor:c,primaryColor:m})}},Ze=d(79366),gn,at=function(i){return(0,$.iv)(gn||(gn=(0,D.Z)([`
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
`])),i.prefixCls,(0,Ze.XV)(i.colorPrimary),i.prefixCls,i.prefixCls,(0,Ze.XV)(i.colorPrimary),(0,Ze.XV)(i.colorPrimary),(0,Ze.XV)(i.colorPrimaryActive),i.prefixCls,i.colorBgLayout,i.colorText,i.borderRadiusSM,i.prefixCls,i.colorText,i.prefixCls,i.colorBgContainer,i.prefixCls,i.prefixCls,i.prefixCls,i.stylish.blur,i.borderRadiusLG,(0,Ze.m4)(i.colorBgMask,.1),i.prefixCls,i.colorBorderSecondary,i.boxShadowSecondary,i.prefixCls,i.colorBorderSecondary,i.borderRadius,i.boxShadowSecondary)},Tr,ot=function(i){return(0,$.iv)(Tr||(Tr=(0,D.Z)([`
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
`])),i.isDarkMode?"dark":"light",i.fontFamily,i.fontSize,i.colorTextBase,i.colorBgLayout,i.fontFamilyCode,i.fontFamilyCode,i.yellow9,i.colorFill)},it=(0,$.vJ)(function(i){var p=i.theme;return[ot(p),at(p)]}),ut=it,Re=d(11527),st=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],Ar=(0,P.memo)(function(i){var p=i.children,c=i.customStylish,u=i.customToken,m=i.enableWebfonts,S=m===void 0?!0:m,Q=i.enableGlobalStyle,ce=Q===void 0?!0:Q,fe=i.webfonts,Le=i.customTheme,Me=Le===void 0?{}:Le,Fe=i.className,qe=i.style,Ve=(0,_.Z)(i,st),xe=(0,be.nc)(),Oe=fe||[xe({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),xe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),xe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),xe({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],Ue=(0,P.useCallback)(function(r){return(0,l.Z)((0,l.Z)({},z(r)),c==null?void 0:c(r))},[c]),ct=(0,P.useCallback)(function(r){return(0,l.Z)((0,l.Z)({},Gn(r)),u==null?void 0:u(r))},[u]),e=(0,P.useCallback)(function(r){return tt({appearance:r,neutralColor:Me.neutralColor,primaryColor:Me.primaryColor})},[Me.primaryColor,Me.neutralColor]);return(0,Re.jsxs)(Re.Fragment,{children:[S&&(Oe==null?void 0:Oe.length)>0&&Oe.map(function(r){return(0,Re.jsx)(ae,{url:r},r)}),(0,Re.jsx)($.V9,{speedy:!0,children:(0,Re.jsxs)($.f6,(0,l.Z)((0,l.Z)({customStylish:Ue,customToken:ct},Ve),{},{theme:e,children:[ce&&(0,Re.jsx)(ut,{}),(0,Re.jsx)(w.Z,{className:Fe,style:(0,l.Z)({minHeight:"inherit",width:"inherit"},qe),children:p})]}))})]})});Ar.displayName="LobeThemeProvider";var lt=Ar},14140:function(W,F,d){var l=d(52106),_=d(50959),w=d(11527),$=(0,_.memo)(function(){return(0,w.jsxs)(l.ql,{children:[(0,w.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,w.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,w.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,w.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,w.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,w.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,w.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,w.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,w.jsx)("meta",{content:"#000000",name:"theme-color"})]})});F.Z=$},75653:function(W,F,d){d.d(F,{f:function(){return w}});var l=d(47679),_=d(6522),w=(0,l.Ue)()((0,_.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(W){W.exports=function F(d,l){if(d===l)return!0;if(d&&l&&typeof d=="object"&&typeof l=="object"){if(d.constructor!==l.constructor)return!1;var _,w,$;if(Array.isArray(d)){if(_=d.length,_!=l.length)return!1;for(w=_;w--!==0;)if(!F(d[w],l[w]))return!1;return!0}if(d.constructor===RegExp)return d.source===l.source&&d.flags===l.flags;if(d.valueOf!==Object.prototype.valueOf)return d.valueOf()===l.valueOf();if(d.toString!==Object.prototype.toString)return d.toString()===l.toString();if($=Object.keys(d),_=$.length,_!==Object.keys(l).length)return!1;for(w=_;w--!==0;)if(!Object.prototype.hasOwnProperty.call(l,$[w]))return!1;for(w=_;w--!==0;){var P=$[w];if(!F(d[P],l[P]))return!1}return!0}return d!==d&&l!==l}},79366:function(W,F,d){d.d(F,{XV:function(){return ln},m4:function(){return Te}});var l=d(91010),_=d(50269),w=d(62968);function $(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,(0,w.Z)(e,r)}var P=d(72693);function be(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch(r){return typeof e=="function"}}var ue=d(22935);function te(e,r,n){if((0,ue.Z)())return Reflect.construct.apply(null,arguments);var t=[null];t.push.apply(t,r);var a=new(e.bind.apply(e,t));return n&&(0,w.Z)(a,n.prototype),a}function ae(e){var r=typeof Map=="function"?new Map:void 0;return ae=function(t){if(t===null||!be(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r!="undefined"){if(r.has(t))return r.get(t);r.set(t,a)}function a(){return te(t,arguments,(0,P.Z)(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),(0,w.Z)(a,t)},ae(e)}function D(){var e;return e=arguments.length-1,e<0||arguments.length<=e?void 0:arguments[e]}function Y(e){return-e}function K(e,r){return e+r}function g(e,r){return e-r}function j(e,r){return e*r}function H(e,r){return e/r}function N(){return Math.max.apply(Math,arguments)}function q(){return Math.min.apply(Math,arguments)}function k(){return Array.of.apply(Array,arguments)}var z={symbols:{"*":{infix:{symbol:"*",f:j,notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"*",regSymbol:"\\*"},"/":{infix:{symbol:"/",f:H,notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"/",regSymbol:"/"},"+":{infix:{symbol:"+",f:K,notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"+",f:D,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"+",regSymbol:"\\+"},"-":{infix:{symbol:"-",f:g,notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"-",f:Y,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"-",regSymbol:"-"},",":{infix:{symbol:",",f:k,notation:"infix",precedence:1,rightToLeft:0,argCount:2},symbol:",",regSymbol:","},"(":{prefix:{symbol:"(",f:D,notation:"prefix",precedence:0,rightToLeft:0,argCount:1},symbol:"(",regSymbol:"\\("},")":{postfix:{symbol:")",f:void 0,notation:"postfix",precedence:0,rightToLeft:0,argCount:1},symbol:")",regSymbol:"\\)"},min:{func:{symbol:"min",f:q,notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"min",regSymbol:"min\\b"},max:{func:{symbol:"max",f:N,notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"max",regSymbol:"max\\b"}}},x=null,y={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function f(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=r[0],a=[],s;for(s=1;s<r.length;s+=1)a.push(r[s]);return a.forEach(function(b){t=t.replace(/%[a-z]/,b)}),t}var o=function(e){$(r,e);function r(n){var t;if(!0)t=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this;else var a,s,b;return(0,_.Z)(t)}return r}(ae(Error)),M=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function T(e){var r={};return r.symbols=e?_extends({},x.symbols,e.symbols):_extends({},x.symbols),r}function J(e,r){var n,t=e.pop();return r.push(t.f.apply(t,(n=[]).concat.apply(n,r.splice(-t.argCount)))),t.precedence}function B(e,r){var n=T(r),t,a=[n.symbols["("].prefix],s=[],b=new RegExp("\\d+(?:\\.\\d+)?|"+Object.keys(n.symbols).map(function(pe){return n.symbols[pe]}).sort(function(pe,we){return we.symbol.length-pe.symbol.length}).map(function(pe){return pe.regSymbol}).join("|")+"|(\\S)","g");b.lastIndex=0;var h=!1;do{t=b.exec(e);var R=t||[")",void 0],Z=R[0],V=R[1],E=n.symbols[Z],U=E&&!E.prefix&&!E.func,ge=!E||!E.postfix&&!E.infix;if(V||(h?ge:U))throw new o(37,t?t.index:e.length,e);if(h){var he=E.postfix||E.infix;do{var Se=a[a.length-1];if((he.precedence-Se.precedence||Se.rightToLeft)>0)break}while(J(a,s));h=he.notation==="postfix",he.symbol!==")"&&(a.push(he),h&&J(a,s))}else if(E){if(a.push(E.prefix||E.func),E.func&&(t=b.exec(e),!t||t[0]!=="("))throw new o(38,t?t.index:e.length,e)}else s.push(+Z),h=!0}while(t&&a.length);if(a.length)throw new o(39,t?t.index:e.length,e);if(t)throw new o(40,t?t.index:e.length,e);return s.pop()}function O(e){return e.split("").reverse().join("")}function ee(e,r){var n=O(e),t=n.match(M);if(t&&!t.every(function(s){return s===t[0]}))throw new o(41);var a=O(n.replace(M,""));return""+B(a,r)+(t?O(t[0]):"")}var re=/--[\S]*/g;function G(e,r){if(!e||!e.match(re))throw new o(73);var n;if(typeof document!="undefined"&&document.documentElement!==null&&(n=getComputedStyle(document.documentElement).getPropertyValue(e)),n)return n.trim();if(r)return r;throw new o(74)}function X(e){return e.charAt(0).toUpperCase()+e.slice(1)}var L=null;function I(e,r){if(!e)return r.toLowerCase();var n=e.split("-");if(n.length>1)return n.splice(1,0,r),n.reduce(function(a,s){return""+a+X(s)});var t=e.replace(/([a-z])([A-Z])/g,"$1"+r+"$2");return e===t?""+e+r:t}function A(e,r){for(var n={},t=0;t<r.length;t+=1)(r[t]||r[t]===0)&&(n[I(e,L[t])]=r[t]);return n}function v(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];var a=n[0],s=n[1],b=s===void 0?a:s,h=n[2],R=h===void 0?a:h,Z=n[3],V=Z===void 0?b:Z,E=[a,b,R,V];return A(e,E)}function C(e,r){return e.substr(-r.length)===r}var oe=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function Ae(e){if(typeof e!="string")return e;var r=e.match(oe);return r?parseFloat(e):e}var er=function(r){return function(n,t){t===void 0&&(t="16px");var a=n,s=t;if(typeof n=="string"){if(!C(n,"px"))throw new o(69,r,n);a=Ae(n)}if(typeof t=="string"){if(!C(t,"px"))throw new o(70,r,t);s=Ae(t)}if(typeof a=="string")throw new o(71,n,r);if(typeof s=="string")throw new o(72,t,r);return""+a/s+r}},rr=er,yn=rr("em"),xn=null,Ir=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function ve(e){if(typeof e!="string")return[e,""];var r=e.match(Ir);return r?[parseFloat(e),r[2]]:[e,void 0]}function Rr(e,r){if(typeof e!="object"||e===null)throw new o(75,typeof e);var n={};return Object.keys(e).forEach(function(t){typeof e[t]=="object"&&e[t]!==null?n[t]=Rr(e[t],r):!r||r&&(r===t||r.indexOf(t)>=0)?n[t]=e[t]+" !important":n[t]=e[t]}),n}var Pe={minorSecond:1.067,majorSecond:1.125,minorThird:1.2,majorThird:1.25,perfectFourth:1.333,augFourth:1.414,perfectFifth:1.5,minorSixth:1.6,goldenSection:1.618,majorSixth:1.667,minorSeventh:1.778,majorSeventh:1.875,octave:2,majorTenth:2.5,majorEleventh:2.667,majorTwelfth:3,doubleOctave:4};function Be(e){return Pe[e]}function Sn(e,r,n){if(r===void 0&&(r="1em"),n===void 0&&(n=1.333),typeof e!="number")throw new o(42);if(typeof n=="string"&&!Pe[n])throw new o(43);var t=typeof r=="string"?ve(r):[r,""],a=t[0],s=t[1],b=typeof n=="string"?Be(n):n;if(typeof a=="string")throw new o(44,r);return""+a*Math.pow(b,e)+(s||"")}var Fr=rr("rem"),Or=null,He=16;function nr(e){var r=ve(e);if(r[1]==="px")return parseFloat(e);if(r[1]==="%")return parseFloat(e)/100*He;throw new o(78,r[1])}function tr(){if(typeof document!="undefined"&&document.documentElement!==null){var e=getComputedStyle(document.documentElement).fontSize;return e?nr(e):He}return He}function jr(e,r){var n=ve(e);if(n[1]!=="rem"&&n[1]!=="")throw new o(77,n[1]);var t=r?nr(r):tr();return n[0]*t+"px"}var Er={back:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",circ:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",cubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",expo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",quad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",quart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",quint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",sine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)"};function wn(e){return Er[e.toLowerCase().trim()]}var Zr={back:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",circ:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",cubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",expo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",quad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",quart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",quint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",sine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"};function Cn(e){return Zr[e.toLowerCase().trim()]}var Lr={back:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",cubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",circ:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",expo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",quad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",quart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",quint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",sine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)"};function kn(e){return Lr[e.toLowerCase().trim()]}function ar(e,r,n,t){n===void 0&&(n="320px"),t===void 0&&(t="1200px");var a=ve(e),s=a[0],b=a[1],h=ve(r),R=h[0],Z=h[1],V=ve(n),E=V[0],U=V[1],ge=ve(t),he=ge[0],Se=ge[1];if(typeof E!="number"||typeof he!="number"||!U||!Se||U!==Se)throw new o(47);if(typeof s!="number"||typeof R!="number"||b!==Z)throw new o(48);if(b!==U||Z!==Se)throw new o(76);var pe=(s-R)/(E-he),we=R-pe*he;return"calc("+we.toFixed(2)+(b||"")+" + "+(100*pe).toFixed(2)+"vw)"}function Tn(e){var r;e===void 0&&(e="&");var n=e+"::after";return r={},r[n]={clear:"both",content:'""',display:"table"},r}function An(e){return e===void 0&&(e=0),{position:"absolute",top:e,right:e,bottom:e,left:e}}function zn(e,r){r===void 0&&(r=1);var n={display:"inline-block",maxWidth:e||"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"};return r>1?_extends({},n,{WebkitBoxOrient:"vertical",WebkitLineClamp:r,display:"-webkit-box",whiteSpace:"normal"}):n}function Mr(e,r){var n=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Pr(e))||r&&e&&typeof e.length=="number"){n&&(e=n);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pr(e,r){if(e){if(typeof e=="string")return or(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return or(e,r)}}function or(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Hr(e,r,n){if(r===void 0&&(r="320px"),n===void 0&&(n="1200px"),!Array.isArray(e)&&typeof e!="object"||e===null)throw new o(49);if(Array.isArray(e)){for(var t={},a={},s=Mr(e),b;!(b=s()).done;){var h,R,Z=b.value;if(!Z.prop||!Z.fromSize||!Z.toSize)throw new o(50);a[Z.prop]=Z.fromSize,t["@media (min-width: "+r+")"]=_extends({},t["@media (min-width: "+r+")"],(h={},h[Z.prop]=ar(Z.fromSize,Z.toSize,r,n),h)),t["@media (min-width: "+n+")"]=_extends({},t["@media (min-width: "+n+")"],(R={},R[Z.prop]=Z.toSize,R))}return _extends({},a,t)}else{var V,E,U;if(!e.prop||!e.fromSize||!e.toSize)throw new o(51);return U={},U[e.prop]=e.fromSize,U["@media (min-width: "+r+")"]=(V={},V[e.prop]=ar(e.fromSize,e.toSize,r,n),V),U["@media (min-width: "+n+")"]=(E={},E[e.prop]=e.toSize,E),U}}var Wr=/^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i,Dr={woff:"woff",woff2:"woff2",ttf:"truetype",otf:"opentype",eot:"embedded-opentype",svg:"svg",svgz:"svg"};function ir(e,r){return r?' format("'+Dr[e]+'")':""}function Ur(e){return!!e.replace(/\s+/g," ").match(Wr)}function Br(e,r,n){if(Ur(e))return'url("'+e+'")'+ir(r[0],n);var t=r.map(function(a){return'url("'+e+"."+a+'")'+ir(a,n)});return t.join(", ")}function $r(e){var r=e.map(function(n){return'local("'+n+'")'});return r.join(", ")}function Nr(e,r,n,t){var a=[];return r&&a.push($r(r)),e&&a.push(Br(e,n,t)),a.join(", ")}function In(e){var r=e.fontFamily,n=e.fontFilePath,t=e.fontStretch,a=e.fontStyle,s=e.fontVariant,b=e.fontWeight,h=e.fileFormats,R=h===void 0?["eot","woff2","woff","ttf","svg"]:h,Z=e.formatHint,V=Z===void 0?!1:Z,E=e.localFonts,U=E===void 0?[r]:E,ge=e.unicodeRange,he=e.fontDisplay,Se=e.fontVariationSettings,pe=e.fontFeatureSettings;if(!r)throw new o(55);if(!n&&!U)throw new o(52);if(U&&!Array.isArray(U))throw new o(53);if(!Array.isArray(R))throw new o(54);var we={"@font-face":{fontFamily:r,src:Nr(n,U,R,V),unicodeRange:ge,fontStretch:t,fontStyle:a,fontVariant:s,fontWeight:b,fontDisplay:he,fontVariationSettings:Se,fontFeatureSettings:pe}};return JSON.parse(JSON.stringify(we))}function Rn(){return{textIndent:"101%",overflow:"hidden",whiteSpace:"nowrap"}}function Fn(){return{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}}function _r(e){return e===void 0&&(e=1.3),`
    @media only screen and (-webkit-min-device-pixel-ratio: `+e+`),
    only screen and (min--moz-device-pixel-ratio: `+e+`),
    only screen and (-o-min-device-pixel-ratio: `+e+`/1),
    only screen and (min-resolution: `+Math.round(e*96)+`dpi),
    only screen and (min-resolution: `+e+`dppx)
  `}function ur(e){for(var r="",n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];for(var s=0;s<e.length;s+=1)if(r+=e[s],s===t.length-1&&t[s]){var b=t.filter(function(h){return!!h});b.length>1?(r=r.slice(0,-1),r+=", "+t[s]):b.length===1&&(r+=""+t[s])}else t[s]&&(r+=t[s]+" ");return r.trim()}var sr;function On(e){var r=e.colorStops,n=e.fallback,t=e.toDirection,a=t===void 0?"":t;if(!r||r.length<2)throw new o(56);return{backgroundColor:n||r[0].replace(/,\s+/g,",").split(" ")[0].replace(/,(?=\S)/g,", "),backgroundImage:ur(sr||(sr=_taggedTemplateLiteralLoose(["linear-gradient(","",")"])),a,r.join(", ").replace(/,(?=\S)/g,", "))}}function jn(){var e;return[(e={html:{lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:"0"},main:{display:"block"},h1:{fontSize:"2em",margin:"0.67em 0"},hr:{boxSizing:"content-box",height:"0",overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{backgroundColor:"transparent"},"abbr[title]":{borderBottom:"none",textDecoration:"underline"}},e[`b,
    strong`]={fontWeight:"bolder"},e[`code,
    kbd,
    samp`]={fontFamily:"monospace, monospace",fontSize:"1em"},e.small={fontSize:"80%"},e[`sub,
    sup`]={fontSize:"75%",lineHeight:"0",position:"relative",verticalAlign:"baseline"},e.sub={bottom:"-0.25em"},e.sup={top:"-0.5em"},e.img={borderStyle:"none"},e[`button,
    input,
    optgroup,
    select,
    textarea`]={fontFamily:"inherit",fontSize:"100%",lineHeight:"1.15",margin:"0"},e[`button,
    input`]={overflow:"visible"},e[`button,
    select`]={textTransform:"none"},e[`button,
    html [type="button"],
    [type="reset"],
    [type="submit"]`]={WebkitAppearance:"button"},e[`button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner`]={borderStyle:"none",padding:"0"},e[`button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring`]={outline:"1px dotted ButtonText"},e.fieldset={padding:"0.35em 0.625em 0.75em"},e.legend={boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:"0",whiteSpace:"normal"},e.progress={verticalAlign:"baseline"},e.textarea={overflow:"auto"},e[`[type="checkbox"],
    [type="radio"]`]={boxSizing:"border-box",padding:"0"},e[`[type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button`]={height:"auto"},e['[type="search"]']={WebkitAppearance:"textfield",outlineOffset:"-2px"},e['[type="search"]::-webkit-search-decoration']={WebkitAppearance:"none"},e["::-webkit-file-upload-button"]={WebkitAppearance:"button",font:"inherit"},e.details={display:"block"},e.summary={display:"list-item"},e.template={display:"none"},e["[hidden]"]={display:"none"},e),{"abbr[title]":{textDecoration:"underline dotted"}}]}var lr;function En(e){var r=e.colorStops,n=e.extent,t=n===void 0?"":n,a=e.fallback,s=e.position,b=s===void 0?"":s,h=e.shape,R=h===void 0?"":h;if(!r||r.length<2)throw new o(57);return{backgroundColor:a||r[0].split(" ")[0],backgroundImage:ur(lr||(lr=_taggedTemplateLiteralLoose(["radial-gradient(","","","",")"])),b,R,t,r.join(", "))}}function Zn(e,r,n,t,a){var s;if(n===void 0&&(n="png"),a===void 0&&(a="_2x"),!e)throw new o(58);var b=n.replace(/^\./,""),h=t?t+"."+b:""+e+a+"."+b;return s={backgroundImage:"url("+e+"."+b+")"},s[_r()]=_extends({backgroundImage:"url("+h+")"},r?{backgroundSize:r}:{}),s}var Jr={easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeInCirc:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",easeInCubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",easeInExpo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",easeInQuad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",easeInQuart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)",easeOutBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",easeOutCubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",easeOutCirc:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",easeOutExpo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",easeOutQuad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",easeOutQuart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",easeInOutCirc:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",easeInOutCubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",easeInOutExpo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",easeInOutQuad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",easeInOutQuart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"};function Gr(e){return Jr[e]}function Ln(e){return Gr(e)}var Yr=function(r,n,t){var a=""+t[0]+(t[1]||""),s=""+t[0]/2+(t[1]||""),b=""+n[0]+(n[1]||""),h=""+n[0]/2+(n[1]||"");switch(r){case"top":return"0 "+s+" "+b+" "+s;case"topLeft":return a+" "+b+" 0 0";case"left":return h+" "+a+" "+h+" 0";case"bottomLeft":return a+" 0 0 "+b;case"bottom":return b+" "+s+" 0 "+s;case"bottomRight":return"0 0 "+a+" "+b;case"right":return h+" 0 "+h+" "+a;case"topRight":default:return"0 "+a+" "+b+" 0"}},cr=function(r,n){switch(r){case"top":case"bottomRight":return{borderBottomColor:n};case"right":case"bottomLeft":return{borderLeftColor:n};case"bottom":case"topLeft":return{borderTopColor:n};case"left":case"topRight":return{borderRightColor:n};default:throw new o(59)}};function Mn(e){var r=e.pointingDirection,n=e.height,t=e.width,a=e.foregroundColor,s=e.backgroundColor,b=s===void 0?"transparent":s,h=ve(t),R=ve(n);if(isNaN(R[0])||isNaN(h[0]))throw new o(60);return _extends({width:"0",height:"0",borderColor:b},cr(r,a),{borderStyle:"solid",borderWidth:Yr(r,R,h)})}function Pn(e){e===void 0&&(e="break-word");var r=e==="break-word"?"break-all":e;return{overflowWrap:e,wordWrap:e,wordBreak:r}}function $e(e){return Math.round(e*255)}function Qr(e,r,n){return $e(e)+","+$e(r)+","+$e(n)}function ze(e,r,n,t){if(t===void 0&&(t=Qr),r===0)return t(n,n,n);var a=(e%360+360)%360/60,s=(1-Math.abs(2*n-1))*r,b=s*(1-Math.abs(a%2-1)),h=0,R=0,Z=0;a>=0&&a<1?(h=s,R=b):a>=1&&a<2?(h=b,R=s):a>=2&&a<3?(R=s,Z=b):a>=3&&a<4?(R=b,Z=s):a>=4&&a<5?(h=b,Z=s):a>=5&&a<6&&(h=s,Z=b);var V=n-s/2,E=h+V,U=R+V,ge=Z+V;return t(E,U,ge)}var Ne={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Xr(e){if(typeof e!="string")return e;var r=e.toLowerCase();return Ne[r]?"#"+Ne[r]:e}var Kr=/^#[a-fA-F0-9]{6}$/,qr=/^#[a-fA-F0-9]{8}$/,Vr=/^#[a-fA-F0-9]{3}$/,dr=/^#[a-fA-F0-9]{4}$/,_e=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,fr=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,pr=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,br=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function ye(e){if(typeof e!="string")throw new o(3);var r=Xr(e);if(r.match(Kr))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(qr)){var n=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:n}}if(r.match(Vr))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(dr)){var t=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:t}}var a=_e.exec(r);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var s=fr.exec(r.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var b=pr.exec(r);if(b){var h=parseInt(""+b[1],10),R=parseInt(""+b[2],10)/100,Z=parseInt(""+b[3],10)/100,V="rgb("+ze(h,R,Z)+")",E=_e.exec(V);if(!E)throw new o(4,r,V);return{red:parseInt(""+E[1],10),green:parseInt(""+E[2],10),blue:parseInt(""+E[3],10)}}var U=br.exec(r.substring(0,50));if(U){var ge=parseInt(""+U[1],10),he=parseInt(""+U[2],10)/100,Se=parseInt(""+U[3],10)/100,pe="rgb("+ze(ge,he,Se)+")",we=_e.exec(pe);if(!we)throw new o(4,r,pe);return{red:parseInt(""+we[1],10),green:parseInt(""+we[2],10),blue:parseInt(""+we[3],10),alpha:parseFloat(""+U[4])>1?parseFloat(""+U[4])/100:parseFloat(""+U[4])}}throw new o(5)}function mr(e){var r=e.red/255,n=e.green/255,t=e.blue/255,a=Math.max(r,n,t),s=Math.min(r,n,t),b=(a+s)/2;if(a===s)return e.alpha!==void 0?{hue:0,saturation:0,lightness:b,alpha:e.alpha}:{hue:0,saturation:0,lightness:b};var h,R=a-s,Z=b>.5?R/(2-a-s):R/(a+s);switch(a){case r:h=(n-t)/R+(n<t?6:0);break;case n:h=(t-r)/R+2;break;default:h=(r-n)/R+4;break}return h*=60,e.alpha!==void 0?{hue:h,saturation:Z,lightness:b,alpha:e.alpha}:{hue:h,saturation:Z,lightness:b}}function me(e){return mr(ye(e))}var gr=function(r){return r.length===7&&r[1]===r[2]&&r[3]===r[4]&&r[5]===r[6]?"#"+r[1]+r[3]+r[5]:r},We=gr;function Ce(e){var r=e.toString(16);return r.length===1?"0"+r:r}function Je(e){return Ce(Math.round(e*255))}function en(e,r,n){return We("#"+Je(e)+Je(r)+Je(n))}function je(e,r,n){return ze(e,r,n,en)}function Ge(e,r,n){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number")return je(e,r,n);if(typeof e=="object"&&r===void 0&&n===void 0)return je(e.hue,e.saturation,e.lightness);throw new o(1)}function ke(e,r,n,t){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?je(e,r,n):"rgba("+ze(e,r,n)+","+t+")";if(typeof e=="object"&&r===void 0&&n===void 0&&t===void 0)return e.alpha>=1?je(e.hue,e.saturation,e.lightness):"rgba("+ze(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new o(2)}function De(e,r,n){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number")return We("#"+Ce(e)+Ce(r)+Ce(n));if(typeof e=="object"&&r===void 0&&n===void 0)return We("#"+Ce(e.red)+Ce(e.green)+Ce(e.blue));throw new o(6)}function Te(e,r,n,t){if(typeof e=="string"&&typeof r=="number"){var a=ye(e);return"rgba("+a.red+","+a.green+","+a.blue+","+r+")"}else{if(typeof e=="number"&&typeof r=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?De(e,r,n):"rgba("+e+","+r+","+n+","+t+")";if(typeof e=="object"&&r===void 0&&n===void 0&&t===void 0)return e.alpha>=1?De(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new o(7)}var rn=function(r){return typeof r.red=="number"&&typeof r.green=="number"&&typeof r.blue=="number"&&(typeof r.alpha!="number"||typeof r.alpha=="undefined")},hr=function(r){return typeof r.red=="number"&&typeof r.green=="number"&&typeof r.blue=="number"&&typeof r.alpha=="number"},vr=function(r){return typeof r.hue=="number"&&typeof r.saturation=="number"&&typeof r.lightness=="number"&&(typeof r.alpha!="number"||typeof r.alpha=="undefined")},yr=function(r){return typeof r.hue=="number"&&typeof r.saturation=="number"&&typeof r.lightness=="number"&&typeof r.alpha=="number"};function le(e){if(typeof e!="object")throw new o(8);if(hr(e))return Te(e);if(rn(e))return De(e);if(yr(e))return ke(e);if(vr(e))return Ge(e);throw new o(8)}function xr(e,r,n){return function(){var a=n.concat(Array.prototype.slice.call(arguments));return a.length>=r?e.apply(this,a):xr(e,r,a)}}function se(e){return xr(e,e.length,[])}function nn(e,r){if(r==="transparent")return r;var n=me(r);return le((0,l.Z)({},n,{hue:n.hue+parseFloat(e)}))}var Hn=se(nn),Wn=null;function Dn(e){if(e==="transparent")return e;var r=me(e);return le(_extends({},r,{hue:(r.hue+180)%360}))}function Ie(e,r,n){return Math.max(e,Math.min(r,n))}function tn(e,r){if(r==="transparent")return r;var n=me(r);return le((0,l.Z)({},n,{lightness:Ie(0,1,n.lightness-parseFloat(e))}))}var Un=se(tn),Bn=null;function an(e,r){if(r==="transparent")return r;var n=me(r);return le((0,l.Z)({},n,{saturation:Ie(0,1,n.saturation-parseFloat(e))}))}var $n=se(an),Nn=null;function Ye(e){if(e==="transparent")return 0;var r=ye(e),n=Object.keys(r).map(function(b){var h=r[b]/255;return h<=.03928?h/12.92:Math.pow((h+.055)/1.055,2.4)}),t=n[0],a=n[1],s=n[2];return parseFloat((.2126*t+.7152*a+.0722*s).toFixed(3))}function Sr(e,r){var n=Ye(e),t=Ye(r);return parseFloat((n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)).toFixed(2))}function _n(e){return e==="transparent"?e:le(_extends({},me(e),{saturation:0}))}function ie(e){if(typeof e=="object"&&typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number")return e.alpha&&typeof e.alpha=="number"?ke({hue:e.hue,saturation:e.saturation,lightness:e.lightness,alpha:e.alpha}):Ge({hue:e.hue,saturation:e.saturation,lightness:e.lightness});throw new o(45)}function Jn(e){if(e==="transparent")return e;var r=ye(e);return le(_extends({},r,{red:255-r.red,green:255-r.green,blue:255-r.blue}))}function on(e,r){if(r==="transparent")return r;var n=me(r);return le((0,l.Z)({},n,{lightness:Ie(0,1,n.lightness+parseFloat(e))}))}var Gn=se(on),de=null;function Qe(e,r){var n=Sr(e,r);return{AA:n>=4.5,AALarge:n>=3,AAA:n>=7,AAALarge:n>=4.5}}function wr(e,r,n){if(r==="transparent")return n;if(n==="transparent")return r;if(e===0)return n;var t=ye(r),a=(0,l.Z)({},t,{alpha:typeof t.alpha=="number"?t.alpha:1}),s=ye(n),b=(0,l.Z)({},s,{alpha:typeof s.alpha=="number"?s.alpha:1}),h=a.alpha-b.alpha,R=parseFloat(e)*2-1,Z=R*h===-1?R:R+h,V=1+R*h,E=(Z/V+1)/2,U=1-E,ge={red:Math.floor(a.red*E+b.red*U),green:Math.floor(a.green*E+b.green*U),blue:Math.floor(a.blue*E+b.blue*U),alpha:a.alpha*parseFloat(e)+b.alpha*(1-parseFloat(e))};return Te(ge)}var un=se(wr),Xe=un;function sn(e,r){if(r==="transparent")return r;var n=ye(r),t=typeof n.alpha=="number"?n.alpha:1,a=(0,l.Z)({},n,{alpha:Ie(0,1,(t*100+parseFloat(e)*100)/100)});return Te(a)}var Yn=se(sn),Qn=null,Ee="#000",Cr="#fff";function ln(e,r,n,t){r===void 0&&(r=Ee),n===void 0&&(n=Cr),t===void 0&&(t=!0);var a=Ye(e)>.179,s=a?r:n;return!t||Sr(e,s)>=4.5?s:a?Ee:Cr}function Xn(e){if(typeof e=="object"&&typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number")return typeof e.alpha=="number"?Te({red:e.red,green:e.green,blue:e.blue,alpha:e.alpha}):De({red:e.red,green:e.green,blue:e.blue});throw new o(46)}function cn(e,r){if(r==="transparent")return r;var n=me(r);return le((0,l.Z)({},n,{saturation:Ie(0,1,n.saturation+parseFloat(e))}))}var dn=se(cn),Kn=null;function fn(e,r){return r==="transparent"?r:le((0,l.Z)({},me(r),{hue:parseFloat(e)}))}var qn=se(fn),Ke=null;function pn(e,r){return r==="transparent"?r:le((0,l.Z)({},me(r),{lightness:parseFloat(e)}))}var Vn=se(pn),et=null;function kr(e,r){return r==="transparent"?r:le((0,l.Z)({},me(r),{saturation:parseFloat(e)}))}var rt=se(kr),bn=null;function mn(e,r){return r==="transparent"?r:Xe(parseFloat(e),"rgb(0, 0, 0)",r)}var nt=se(mn),tt=null;function Ze(e,r){return r==="transparent"?r:Xe(parseFloat(e),"rgb(255, 255, 255)",r)}var gn=se(Ze),at=null;function Tr(e,r){if(r==="transparent")return r;var n=ye(r),t=typeof n.alpha=="number"?n.alpha:1,a=(0,l.Z)({},n,{alpha:Ie(0,1,+(t*100-parseFloat(e)*100).toFixed(2)/100)});return Te(a)}var ot=se(Tr),it=null;function ut(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=Array.isArray(r[0]);if(!t&&r.length>8)throw new o(64);var a=r.map(function(s){if(t&&!Array.isArray(s)||!t&&Array.isArray(s))throw new o(65);if(Array.isArray(s)&&s.length>8)throw new o(66);return Array.isArray(s)?s.join(" "):s}).join(", ");return{animation:a}}function Re(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return{backgroundImage:r.join(", ")}}function st(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return{background:r.join(", ")}}var Ar=null;function lt(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];if(typeof e=="string"&&Ar.indexOf(e)>=0){var a;return a={},a["border"+X(e)+"Width"]=n[0],a["border"+X(e)+"Style"]=n[1],a["border"+X(e)+"Color"]=n[2],a}else return n.unshift(e),{borderWidth:n[0],borderStyle:n[1],borderColor:n[2]}}function i(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return v.apply(void 0,["borderColor"].concat(r))}function p(e,r){var n=X(e);if(!r&&r!==0)throw new o(62);if(n==="Top"||n==="Bottom"){var t;return t={},t["border"+n+"RightRadius"]=r,t["border"+n+"LeftRadius"]=r,t}if(n==="Left"||n==="Right"){var a;return a={},a["borderTop"+n+"Radius"]=r,a["borderBottom"+n+"Radius"]=r,a}throw new o(63)}function c(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return v.apply(void 0,["borderStyle"].concat(r))}function u(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return v.apply(void 0,["borderWidth"].concat(r))}function m(e,r){var n=r?":"+r:"";return e(n)}function S(e,r,n){if(!r)throw new o(67);if(e.length===0)return m(r,null);for(var t=[],a=0;a<e.length;a+=1){if(n&&n.indexOf(e[a])<0)throw new o(68);t.push(m(r,e[a]))}return t=t.join(","),t}var Q=null;function ce(e){return"button"+e+`,
  input[type="button"]`+e+`,
  input[type="reset"]`+e+`,
  input[type="submit"]`+e}function fe(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return S(r,ce,Q)}function Le(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return v.apply(void 0,["margin"].concat(r))}function Me(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return v.apply(void 0,["padding"].concat(r))}var Fe=null;function qe(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];return Fe.indexOf(e)>=0&&e?_extends({},v.apply(void 0,[""].concat(n)),{position:e}):v.apply(void 0,["",e].concat(n))}function Ve(e,r){return r===void 0&&(r=e),{height:e,width:r}}var xe=null;function Oe(e){return'input[type="color"]'+e+`,
    input[type="date"]`+e+`,
    input[type="datetime"]`+e+`,
    input[type="datetime-local"]`+e+`,
    input[type="email"]`+e+`,
    input[type="month"]`+e+`,
    input[type="number"]`+e+`,
    input[type="password"]`+e+`,
    input[type="search"]`+e+`,
    input[type="tel"]`+e+`,
    input[type="text"]`+e+`,
    input[type="time"]`+e+`,
    input[type="url"]`+e+`,
    input[type="week"]`+e+`,
    input:not([type])`+e+`,
    textarea`+e}function Ue(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return S(r,Oe,xe)}function ct(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];if(Array.isArray(r[0])&&r.length===2){var t=r[1];if(typeof t!="string")throw new o(61);var a=r[0].map(function(s){return s+" "+t}).join(", ");return{transition:a}}else return{transition:r.join(", ")}}},2179:function(W,F,d){var l=d(50959),_=d(4322);function w(D,Y){return D===Y&&(D!==0||1/D===1/Y)||D!==D&&Y!==Y}var $=typeof Object.is=="function"?Object.is:w,P=_.useSyncExternalStore,be=l.useRef,ue=l.useEffect,te=l.useMemo,ae=l.useDebugValue;F.useSyncExternalStoreWithSelector=function(D,Y,K,g,j){var H=be(null);if(H.current===null){var N={hasValue:!1,value:null};H.current=N}else N=H.current;H=te(function(){function k(o){if(!z){if(z=!0,x=o,o=g(o),j!==void 0&&N.hasValue){var M=N.value;if(j(M,o))return y=M}return y=o}if(M=y,$(x,o))return M;var T=g(o);return j!==void 0&&j(M,T)?M:(x=o,y=T)}var z=!1,x,y,f=K===void 0?null:K;return[function(){return k(Y())},f===null?void 0:function(){return k(f())}]},[Y,K,g,j]);var q=P(D,H[0],H[1]);return ue(function(){N.hasValue=!0,N.value=q},[q]),ae(q),q}},7231:function(W,F,d){W.exports=d(2179)},53145:function(W,F,d){d.d(F,{Z:function(){return _}});var l=d(50666);function _(w,$){var P=typeof Symbol!="undefined"&&w[Symbol.iterator]||w["@@iterator"];if(!P){if(Array.isArray(w)||(P=(0,l.Z)(w))||$&&w&&typeof w.length=="number"){P&&(w=P);var be=0,ue=function(){};return{s:ue,n:function(){return be>=w.length?{done:!0}:{done:!1,value:w[be++]}},e:function(K){throw K},f:ue}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var te=!0,ae=!1,D;return{s:function(){P=P.call(w)},n:function(){var K=P.next();return te=K.done,K},e:function(K){ae=!0,D=K},f:function(){try{!te&&P.return!=null&&P.return()}finally{if(ae)throw D}}}}},47679:function(W,F,d){d.d(F,{Ue:function(){return Y}});const l=g=>{let j;const H=new Set,N=(y,f)=>{const o=typeof y=="function"?y(j):y;if(!Object.is(o,j)){const M=j;j=(f!=null?f:typeof o!="object"||o===null)?o:Object.assign({},j,o),H.forEach(T=>T(j,M))}},q=()=>j,x={setState:N,getState:q,subscribe:y=>(H.add(y),()=>H.delete(y)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),H.clear()}};return j=g(N,q,x),x},_=g=>g?l(g):l;var w=g=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),_(g)),$=d(50959),P=d(7231);const{useDebugValue:be}=$,{useSyncExternalStoreWithSelector:ue}=P;let te=!1;function ae(g,j=g.getState,H){H&&!te&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),te=!0);const N=ue(g.subscribe,g.getState,g.getServerState||g.getState,j,H);return be(N),N}const D=g=>{typeof g!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const j=typeof g=="function"?_(g):g,H=(N,q)=>ae(j,N,q);return Object.assign(H,j),H},Y=g=>g?D(g):D;var K=g=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),Y(g))},6522:function(W,F,d){d.d(F,{mW:function(){return ue},tJ:function(){return q}});const l=(k,z)=>(x,y,f)=>(f.dispatch=o=>(x(M=>k(M,o),!1,o),o),f.dispatchFromDevtools=!0,ne({dispatch:(...o)=>f.dispatch(...o)},z)),_=null,w=new Map,$=k=>{const z=w.get(k);return z?Object.fromEntries(Object.entries(z.stores).map(([x,y])=>[x,y.getState()])):{}},P=(k,z,x)=>{if(k===void 0)return{type:"untracked",connection:z.connect(x)};const y=w.get(x.name);if(y)return ne({type:"tracked",store:k},y);const f={connection:z.connect(x),stores:{}};return w.set(x.name,f),ne({type:"tracked",store:k},f)},ue=(k,z={})=>(x,y,f)=>{const L=z,{enabled:o,anonymousActionType:M,store:T}=L,J=vn(L,["enabled","anonymousActionType","store"]);let B;try{B=(o!=null?o:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(A){}if(!B)return o&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),k(x,y,f);const I=P(T,B,J),{connection:O}=I,ee=vn(I,["connection"]);let re=!0;f.setState=(A,v,C)=>{const oe=x(A,v);if(!re)return oe;const Ae=C===void 0?{type:M||"anonymous"}:typeof C=="string"?{type:C}:C;return T===void 0?(O==null||O.send(Ae,y()),oe):(O==null||O.send(hn(ne({},Ae),{type:`${T}/${Ae.type}`}),hn(ne({},$(J.name)),{[T]:f.getState()})),oe)};const G=(...A)=>{const v=re;re=!1,x(...A),re=v},X=k(f.setState,y,f);if(ee.type==="untracked"?O==null||O.init(X):(ee.stores[ee.store]=f,O==null||O.init(Object.fromEntries(Object.entries(ee.stores).map(([A,v])=>[A,A===ee.store?X:v.getState()])))),f.dispatchFromDevtools&&typeof f.dispatch=="function"){let A=!1;const v=f.dispatch;f.dispatch=(...C)=>{C[0].type==="__setState"&&!A&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),A=!0),v(...C)}}return O.subscribe(A=>{var v;switch(A.type){case"ACTION":if(typeof A.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return te(A.payload,C=>{if(C.type==="__setState"){if(T===void 0){G(C.state);return}Object.keys(C.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const oe=C.state[T];if(oe==null)return;JSON.stringify(f.getState())!==JSON.stringify(oe)&&G(oe);return}f.dispatchFromDevtools&&typeof f.dispatch=="function"&&f.dispatch(C)});case"DISPATCH":switch(A.payload.type){case"RESET":return G(X),T===void 0?O==null?void 0:O.init(f.getState()):O==null?void 0:O.init($(J.name));case"COMMIT":if(T===void 0){O==null||O.init(f.getState());return}return O==null?void 0:O.init($(J.name));case"ROLLBACK":return te(A.state,C=>{if(T===void 0){G(C),O==null||O.init(f.getState());return}G(C[T]),O==null||O.init($(J.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return te(A.state,C=>{if(T===void 0){G(C);return}JSON.stringify(f.getState())!==JSON.stringify(C[T])&&G(C[T])});case"IMPORT_STATE":{const{nextLiftedState:C}=A.payload,oe=(v=C.computedStates.slice(-1)[0])==null?void 0:v.state;if(!oe)return;G(T===void 0?oe:oe[T]),O==null||O.send(null,C);return}case"PAUSE_RECORDING":return re=!re}return}}),X},te=(k,z)=>{let x;try{x=JSON.parse(k)}catch(y){console.error("[zustand devtools middleware] Could not parse the received json",y)}x!==void 0&&z(x)},ae=k=>(z,x,y)=>{const f=y.subscribe;return y.subscribe=(M,T,J)=>{let B=M;if(T){const O=(J==null?void 0:J.equalityFn)||Object.is;let ee=M(y.getState());B=re=>{const G=M(re);if(!O(ee,G)){const X=ee;T(ee=G,X)}},J!=null&&J.fireImmediately&&T(ee,ee)}return f(B)},k(z,x,y)},D=null,Y=(k,z)=>(...x)=>Object.assign({},k,z(...x));function K(k,z){let x;try{x=k()}catch(f){return}return{getItem:f=>{var o;const M=J=>J===null?null:JSON.parse(J,z==null?void 0:z.reviver),T=(o=x.getItem(f))!=null?o:null;return T instanceof Promise?T.then(M):M(T)},setItem:(f,o)=>x.setItem(f,JSON.stringify(o,z==null?void 0:z.replacer)),removeItem:f=>x.removeItem(f)}}const g=k=>z=>{try{const x=k(z);return x instanceof Promise?x:{then(y){return g(y)(x)},catch(y){return this}}}catch(x){return{then(y){return this},catch(y){return g(y)(x)}}}},j=(k,z)=>(x,y,f)=>{let o=ne({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:I=>I,version:0,merge:(I,A)=>ne(ne({},A),I)},z),M=!1;const T=new Set,J=new Set;let B;try{B=o.getStorage()}catch(I){}if(!B)return k((...I)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),x(...I)},y,f);const O=g(o.serialize),ee=()=>{const I=o.partialize(ne({},y()));let A;const v=O({state:I,version:o.version}).then(C=>B.setItem(o.name,C)).catch(C=>{A=C});if(A)throw A;return v},re=f.setState;f.setState=(I,A)=>{re(I,A),ee()};const G=k((...I)=>{x(...I),ee()},y,f);let X;const L=()=>{var I;if(!B)return;M=!1,T.forEach(v=>v(y()));const A=((I=o.onRehydrateStorage)==null?void 0:I.call(o,y()))||void 0;return g(B.getItem.bind(B))(o.name).then(v=>{if(v)return o.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==o.version){if(o.migrate)return o.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var C;return X=o.merge(v,(C=y())!=null?C:G),x(X,!0),ee()}).then(()=>{A==null||A(X,void 0),M=!0,J.forEach(v=>v(X))}).catch(v=>{A==null||A(void 0,v)})};return f.persist={setOptions:I=>{o=ne(ne({},o),I),I.getStorage&&(B=I.getStorage())},clearStorage:()=>{B==null||B.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>L(),hasHydrated:()=>M,onHydrate:I=>(T.add(I),()=>{T.delete(I)}),onFinishHydration:I=>(J.add(I),()=>{J.delete(I)})},L(),X||G},H=(k,z)=>(x,y,f)=>{let o=ne({storage:K(()=>localStorage),partialize:L=>L,version:0,merge:(L,I)=>ne(ne({},I),L)},z),M=!1;const T=new Set,J=new Set;let B=o.storage;if(!B)return k((...L)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),x(...L)},y,f);const O=()=>{const L=o.partialize(ne({},y()));return B.setItem(o.name,{state:L,version:o.version})},ee=f.setState;f.setState=(L,I)=>{ee(L,I),O()};const re=k((...L)=>{x(...L),O()},y,f);let G;const X=()=>{var L,I;if(!B)return;M=!1,T.forEach(v=>{var C;return v((C=y())!=null?C:re)});const A=((I=o.onRehydrateStorage)==null?void 0:I.call(o,(L=y())!=null?L:re))||void 0;return g(B.getItem.bind(B))(o.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==o.version){if(o.migrate)return o.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var C;return G=o.merge(v,(C=y())!=null?C:re),x(G,!0),O()}).then(()=>{A==null||A(G,void 0),G=y(),M=!0,J.forEach(v=>v(G))}).catch(v=>{A==null||A(void 0,v)})};return f.persist={setOptions:L=>{o=ne(ne({},o),L),L.storage&&(B=L.storage)},clearStorage:()=>{B==null||B.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>X(),hasHydrated:()=>M,onHydrate:L=>(T.add(L),()=>{T.delete(L)}),onFinishHydration:L=>(J.add(L),()=>{J.delete(L)})},o.skipHydration||X(),G||re},q=(k,z)=>"getStorage"in z||"serialize"in z||"deserialize"in z?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),j(k,z)):H(k,z)}}]);
}());