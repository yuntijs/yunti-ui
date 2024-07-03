!(function(){"use strict";var Qn=Object.defineProperty,qn=Object.defineProperties;var eo=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable;var Qe=(w,C,l)=>C in w?Qn(w,C,{enumerable:!0,configurable:!0,writable:!0,value:l}):w[C]=l,L=(w,C)=>{for(var l in C||(C={}))qe.call(C,l)&&Qe(w,l,C[l]);if(me)for(var l of me(C))er.call(C,l)&&Qe(w,l,C[l]);return w},he=(w,C)=>qn(w,eo(C));var ye=(w,C)=>{var l={};for(var o in w)qe.call(w,o)&&C.indexOf(o)<0&&(l[o]=w[o]);if(w!=null&&me)for(var o of me(w))C.indexOf(o)<0&&er.call(w,o)&&(l[o]=w[o]);return l};(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1502],{26646:function(w,C,l){l.d(C,{Z:function(){return Xn}});var o=l(12027),z=l(51151),S=l(73320),Z=l(4377),W=l(50959),ee=l(79412),Q=function(a){var n=document.createElement("link");return n.rel="stylesheet",n.href=a,n},K=(0,W.memo)(function(e){var a=e.url,n=(0,W.useRef)(!1);return(0,W.useEffect)(function(){if(!n.current){n.current=!0;var r=Q(a);document.head.append(r)}},[]),null}),re=K,R=l(88829),B,V,y,A,j,D,H,h,g=function(a){var n=a.css,r=a.token,s=a.isDarkMode,f=(0,Z.F4)(B||(B=(0,R.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:n(V||(V=(0,R.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:n(y||(y=(0,R.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:n(A||(A=(0,R.Z)([`
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
    `])),r.colorFill,r.motionEaseOut),gradientAnimation:n(j||(j=(0,R.Z)([`
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
    `])),r.gold,r.magenta,r.geekblue,r.cyan,f),markdown:n(D||(D=(0,R.Z)([`
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
    `])),r.colorTextSecondary,r.colorTextDescription,r.fontFamilyCode,r.colorFillSecondary,r.colorBorderSecondary,r.borderRadius,r.fontFamily,r.colorBgLayout,s?r.colorText:"#333",s?r.colorTextSecondary:"#000",s?r.colorTextSecondary:"#000",r.colorTextSecondary,r.colorBorder,r.colorBorderSecondary,r.colorFillTertiary,r.colorBorderSecondary,r.borderRadius,r.fontFamily,r.colorTextSecondary,r.colorTextSecondary,r.motionEaseOut,r.colorBorder,r.colorFillTertiary,r.borderRadius,r.colorBorderSecondary,r.colorFillQuaternary,r.colorBorderSecondary,r.fontFamilyCode),noScrollbar:n(H||(H=(0,R.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:n(h||(h=(0,R.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),r.colorTextSecondary,r.colorText)}},u=l(17789),c=l(43773),t=l(32041),i=l(99757);function T(e,a,n){var r=-1,s=e.length;a<0&&(a=-a>s?0:s+a),n=n>s?s:n,n<0&&(n+=s),s=a>n?0:n-a>>>0,a>>>=0;for(var f=Array(s);++r<s;)f[r]=e[r+a];return f}var m=T;function O(e,a,n){var r=e.length;return n=n===void 0?r:n,!a&&n>=r?e:m(e,a,n)}var _=O,x="\\ud800-\\udfff",P="\\u0300-\\u036f",M="\\ufe20-\\ufe2f",E="\\u20d0-\\u20ff",F=P+M+E,k="\\ufe0e\\ufe0f",v="\\u200d",p=RegExp("["+v+x+F+k+"]");function d(e){return p.test(e)}var b=d;function N(e){return e.split("")}var le=N,xe="\\ud800-\\udfff",rr="\\u0300-\\u036f",nr="\\ufe20-\\ufe2f",or="\\u20d0-\\u20ff",tr=rr+nr+or,ar="\\ufe0e\\ufe0f",ir="["+xe+"]",pe="["+tr+"]",ve="\\ud83c[\\udffb-\\udfff]",lr="(?:"+pe+"|"+ve+")",Se="[^"+xe+"]",ke="(?:\\ud83c[\\udde6-\\uddff]){2}",Ce="[\\ud800-\\udbff][\\udc00-\\udfff]",sr="\\u200d",Te=lr+"?",we="["+ar+"]?",cr="(?:"+sr+"(?:"+[Se,ke,Ce].join("|")+")"+we+Te+")*",ur=we+Te+cr,dr="(?:"+[Se+pe+"?",pe,ke,Ce,ir].join("|")+")",fr=RegExp(ve+"(?="+ve+")|"+dr+ur,"g");function br(e){return e.match(fr)||[]}var gr=br;function mr(e){return b(e)?gr(e):le(e)}var pr=mr;function vr(e){return function(a){a=(0,i.Z)(a);var n=b(a)?pr(a):void 0,r=n?n[0]:a.charAt(0),s=n?_(n,1).join(""):a.slice(1);return r[e]()+s}}var hr=vr,yr=hr("toUpperCase"),xr=yr;function Sr(e){return xr((0,i.Z)(e).toLowerCase())}var _e=Sr;function kr(e,a,n,r){var s=-1,f=e==null?0:e.length;for(r&&f&&(n=e[++s]);++s<f;)n=a(n,e[s],s,e);return n}var Cr=kr;function Tr(e){return function(a){return e==null?void 0:e[a]}}var wr=Tr,_r={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ar=wr(_r),Er=Ar,Or=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Zr="\\u0300-\\u036f",Rr="\\ufe20-\\ufe2f",jr="\\u20d0-\\u20ff",Ir=Zr+Rr+jr,zr="["+Ir+"]",Pr=RegExp(zr,"g");function Dr(e){return e=(0,i.Z)(e),e&&e.replace(Or,Er).replace(Pr,"")}var Lr=Dr,Mr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Fr(e){return e.match(Mr)||[]}var Wr=Fr,Ur=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Br(e){return Ur.test(e)}var Hr=Br,Ae="\\ud800-\\udfff",Nr="\\u0300-\\u036f",Jr="\\ufe20-\\ufe2f",Gr="\\u20d0-\\u20ff",Yr=Nr+Jr+Gr,Ee="\\u2700-\\u27bf",Oe="a-z\\xdf-\\xf6\\xf8-\\xff",Kr="\\xac\\xb1\\xd7\\xf7",Xr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Vr="\\u2000-\\u206f",$r=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ze="A-Z\\xc0-\\xd6\\xd8-\\xde",Qr="\\ufe0e\\ufe0f",Re=Kr+Xr+Vr+$r,je="['\u2019]",Ie="["+Re+"]",qr="["+Yr+"]",ze="\\d+",en="["+Ee+"]",Pe="["+Oe+"]",De="[^"+Ae+Re+ze+Ee+Oe+Ze+"]",rn="\\ud83c[\\udffb-\\udfff]",nn="(?:"+qr+"|"+rn+")",on="[^"+Ae+"]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Me="[\\ud800-\\udbff][\\udc00-\\udfff]",ne="["+Ze+"]",tn="\\u200d",Fe="(?:"+Pe+"|"+De+")",an="(?:"+ne+"|"+De+")",We="(?:"+je+"(?:d|ll|m|re|s|t|ve))?",Ue="(?:"+je+"(?:D|LL|M|RE|S|T|VE))?",Be=nn+"?",He="["+Qr+"]?",ln="(?:"+tn+"(?:"+[on,Le,Me].join("|")+")"+He+Be+")*",sn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",cn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",un=He+Be+ln,dn="(?:"+[en,Le,Me].join("|")+")"+un,fn=RegExp([ne+"?"+Pe+"+"+We+"(?="+[Ie,ne,"$"].join("|")+")",an+"+"+Ue+"(?="+[Ie,ne+Fe,"$"].join("|")+")",ne+"?"+Fe+"+"+We,ne+"+"+Ue,cn,sn,ze,dn].join("|"),"g");function bn(e){return e.match(fn)||[]}var gn=bn;function mn(e,a,n){return e=(0,i.Z)(e),a=n?void 0:a,a===void 0?Hr(e)?gn(e):Wr(e):e.match(a)||[]}var pn=mn,vn="['\u2019]",hn=RegExp(vn,"g");function yn(e){return function(a){return Cr(pn(Lr(a).replace(hn,"")),e,"")}}var xn=yn,Sn=xn(function(e,a,n){return a=a.toLowerCase(),e+(n?_e(a):a)}),kn=Sn,U=l(79832),Cn=function(a){var n,r=a.name,s=a.scale,f=a.appearance;return n={},(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)(n,"".concat(r,"Bg"),s["".concat(f,"A")][1]),"".concat(r,"BgHover"),s["".concat(f,"A")][2]),"".concat(r,"Border"),s[f][4]),"".concat(r,"BorderSecondary"),s[f][3]),"".concat(r,"BorderHover"),s[f][5]),"".concat(r,"Hover"),s[f][10]),"".concat(r),s[f][9]),"".concat(r,"Active"),s[f][7]),"".concat(r,"TextHover"),s["".concat(f,"A")][10]),"".concat(r,"Text"),s["".concat(f,"A")][9]),(0,t.Z)(n,"".concat(r,"TextActive"),s["".concat(f,"A")][7])},Tn=function(a){var n=a.name,r=a.scale,s=a.appearance,f={},I=(0,c.Z)(r[s].entries()),G;try{for(I.s();!(G=I.n()).done;){var Y=(0,u.Z)(G.value,2),oe=Y[0],te=Y[1];oe===0||oe===12||(f["".concat(n).concat(oe)]=te)}}catch(ce){I.e(ce)}finally{I.f()}var ae=(0,c.Z)(r["".concat(s,"A")].entries()),be;try{for(ae.s();!(be=ae.n()).done;){var ge=(0,u.Z)(be.value,2),$=ge[0],ie=ge[1];$===0||$===12||(f["".concat(n).concat($,"A")]=ie)}}catch(ce){ae.e(ce)}finally{ae.f()}return(0,o.Z)((0,o.Z)({},f),Cn({appearance:s,name:n,scale:r}))},wn=function(a){for(var n=a.isDarkMode,r={},s=0,f=Object.entries(U._);s<f.length;s++){var I=(0,u.Z)(f[s],2),G=I[0],Y=I[1];r=(0,o.Z)((0,o.Z)({},r),Tn({appearance:n?"dark":"light",name:kn(G),scale:Y}))}return r},J=function(a){var n=a.type,r=a.scale,s=a.appearance,f=_e(n),I=s==="dark";return(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},"color".concat(f,"Bg"),r[s][1]),"color".concat(f,"BgHover"),r[s][2]),"color".concat(f,"Border"),r[s][4]),"color".concat(f,"BorderHover"),r[s][I?5:3]),"color".concat(f,"Hover"),r[s][I?10:8]),"color".concat(f),r[s][9]),"color".concat(f,"Active"),r[s][I?7:10]),"color".concat(f,"TextHover"),r[s][I?10:8]),"color".concat(f,"Text"),r[s][9]),"color".concat(f,"TextActive"),r[s][I?7:10])},ue=function(a){var n=a.scale,r=a.appearance;return{colorBgContainer:r==="dark"?n[r][1]:n[r][0],colorBgElevated:r==="dark"?n[r][2]:n[r][0],colorBgLayout:r==="dark"?n[r][0]:n[r][1],colorBgMask:n.lightA[8],colorBgSpotlight:n[r][5],colorBorder:n[r][4],colorBorderSecondary:n[r][3],colorFill:n["".concat(r,"A")][3],colorFillQuaternary:n["".concat(r,"A")][0],colorFillSecondary:n["".concat(r,"A")][2],colorFillTertiary:n["".concat(r,"A")][1],colorText:n[r][12],colorTextQuaternary:n[r][6],colorTextSecondary:n[r][10],colorTextTertiary:n[r][8]}},Ne={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},_n=J({appearance:"dark",scale:U._.bnw,type:"Primary"}),Je=ue({appearance:"dark",scale:U._.gray}),An=J({appearance:"dark",scale:U._.lime,type:"Success"}),En=J({appearance:"dark",scale:U._.gold,type:"Warning"}),On=J({appearance:"dark",scale:U._.red,type:"Error"}),de=J({appearance:"dark",scale:U._.blue,type:"Info"}),Zn=(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},_n),Je),An),En),On),de),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:de.colorInfoText,colorLinkActive:de.colorInfoTextActive,colorLinkHover:de.colorInfoTextHover,colorTextLightSolid:Je.colorBgLayout}),Rn=Zn,jn=function(a,n){var r=a.primaryColor,s=a.neutralColor,f={},I={},G=U._[r];G&&(f=J({appearance:"dark",scale:G,type:"Primary"}));var Y=Ne[s];return Y&&(I=ue({appearance:"dark",scale:Y})),(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},n),Rn),f),I)},In=J({appearance:"light",scale:U._.bnw,type:"Primary"}),Ge=ue({appearance:"light",scale:U._.gray}),zn=J({appearance:"light",scale:U._.green,type:"Success"}),Pn=J({appearance:"light",scale:U._.orange,type:"Warning"}),Dn=J({appearance:"light",scale:U._.volcano,type:"Error"}),fe=J({appearance:"light",scale:U._.geekblue,type:"Info"}),Ln=(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},In),Ge),zn),Pn),Dn),fe),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:fe.colorInfoText,colorLinkActive:fe.colorInfoTextActive,colorLinkHover:fe.colorInfoTextHover,colorTextLightSolid:Ge.colorBgLayout}),Mn=Ln,Fn=function(a,n){var r=a.primaryColor,s=a.neutralColor,f={},I={},G=U._[r];G&&(f=J({appearance:"light",scale:G,type:"Primary"}));var Y=Ne[s];return Y&&(I=ue({appearance:"light",scale:Y})),(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},n),Mn),f),I)},Ye='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',Wn='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',Ke='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',Un="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",Bn={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[Wn,Ke,Ye].join(","),fontFamilyCode:[Un,Ke,Ye].join(",")},Hn=function(a){var n=a.neutralColor,r=a.appearance,s=a.primaryColor,f=r==="dark";return{algorithm:f?jn:Fn,token:(0,o.Z)((0,o.Z)({},Bn),{},{neutralColor:n,primaryColor:s})}},se=l(87859),Xe,Nn=function(e){return(0,Z.iv)(Xe||(Xe=(0,R.Z)([`
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
`])),e.prefixCls,(0,se.XV)(e.colorPrimary),e.prefixCls,e.prefixCls,(0,se.XV)(e.colorPrimary),(0,se.XV)(e.colorPrimary),(0,se.XV)(e.colorPrimaryActive),e.prefixCls,e.colorBgLayout,e.colorText,e.borderRadiusSM,e.prefixCls,e.colorText,e.prefixCls,e.colorBgContainer,e.prefixCls,e.prefixCls,e.prefixCls,e.stylish.blur,e.borderRadiusLG,(0,se.m4)(e.colorBgMask,.1),e.prefixCls,e.colorBorderSecondary,e.boxShadowSecondary,e.prefixCls,e.colorBorderSecondary,e.borderRadius,e.boxShadowSecondary)},Ve,Jn=function(e){return(0,Z.iv)(Ve||(Ve=(0,R.Z)([`
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
`])),e.isDarkMode?"dark":"light",e.fontFamily,e.fontSize,e.colorTextBase,e.colorBgLayout,e.fontFamilyCode,e.fontFamilyCode,e.yellow9,e.colorFill)},Gn=(0,Z.vJ)(function(e){var a=e.theme;return[Jn(a),Nn(a)]}),Yn=Gn,q=l(11527),Kn=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],$e=(0,W.memo)(function(e){var a=e.children,n=e.customStylish,r=e.customToken,s=e.enableWebfonts,f=s===void 0?!0:s,I=e.enableGlobalStyle,G=I===void 0?!0:I,Y=e.webfonts,oe=e.customTheme,te=oe===void 0?{}:oe,ae=e.className,be=e.style,ge=(0,z.Z)(e,Kn),$=(0,ee.nc)(),ie=Y||[$({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),$({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),$({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),$({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ce=(0,W.useCallback)(function(X){return(0,o.Z)((0,o.Z)({},g(X)),n==null?void 0:n(X))},[n]),Vn=(0,W.useCallback)(function(X){return(0,o.Z)((0,o.Z)({},wn(X)),r==null?void 0:r(X))},[r]),$n=(0,W.useCallback)(function(X){return Hn({appearance:X,neutralColor:te.neutralColor,primaryColor:te.primaryColor})},[te.primaryColor,te.neutralColor]);return(0,q.jsxs)(q.Fragment,{children:[f&&(ie==null?void 0:ie.length)>0&&ie.map(function(X){return(0,q.jsx)(re,{url:X},X)}),(0,q.jsx)(Z.V9,{speedy:!0,children:(0,q.jsxs)(Z.f6,(0,o.Z)((0,o.Z)({customStylish:ce,customToken:Vn},ge),{},{theme:$n,children:[G&&(0,q.jsx)(Yn,{}),(0,q.jsx)(S.Z,{className:ae,style:(0,o.Z)({minHeight:"inherit",width:"inherit"},be),children:a})]}))})]})});$e.displayName="LobeThemeProvider";var Xn=$e},84899:function(w,C,l){var o=l(78342),z=l(50959),S=l(11527),Z=(0,z.memo)(function(){return(0,S.jsxs)(o.ql,{children:[(0,S.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,S.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,S.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,S.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,S.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,S.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,S.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,S.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,S.jsx)("meta",{content:"#000000",name:"theme-color"})]})});C.Z=Z},32418:function(w,C,l){l.d(C,{f:function(){return S}});var o=l(63783),z=l(51304),S=(0,o.Ue)()((0,z.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(w){w.exports=function C(l,o){if(l===o)return!0;if(l&&o&&typeof l=="object"&&typeof o=="object"){if(l.constructor!==o.constructor)return!1;var z,S,Z;if(Array.isArray(l)){if(z=l.length,z!=o.length)return!1;for(S=z;S--!==0;)if(!C(l[S],o[S]))return!1;return!0}if(l.constructor===RegExp)return l.source===o.source&&l.flags===o.flags;if(l.valueOf!==Object.prototype.valueOf)return l.valueOf()===o.valueOf();if(l.toString!==Object.prototype.toString)return l.toString()===o.toString();if(Z=Object.keys(l),z=Z.length,z!==Object.keys(o).length)return!1;for(S=z;S--!==0;)if(!Object.prototype.hasOwnProperty.call(o,Z[S]))return!1;for(S=z;S--!==0;){var W=Z[S];if(!C(l[W],o[W]))return!1}return!0}return l!==l&&o!==o}},2179:function(w,C,l){var o=l(50959),z=l(4322);function S(R,B){return R===B&&(R!==0||1/R===1/B)||R!==R&&B!==B}var Z=typeof Object.is=="function"?Object.is:S,W=z.useSyncExternalStore,ee=o.useRef,Q=o.useEffect,K=o.useMemo,re=o.useDebugValue;C.useSyncExternalStoreWithSelector=function(R,B,V,y,A){var j=ee(null);if(j.current===null){var D={hasValue:!1,value:null};j.current=D}else D=j.current;j=K(function(){function h(i){if(!g){if(g=!0,u=i,i=y(i),A!==void 0&&D.hasValue){var T=D.value;if(A(T,i))return c=T}return c=i}if(T=c,Z(u,i))return T;var m=y(i);return A!==void 0&&A(T,m)?T:(u=i,c=m)}var g=!1,u,c,t=V===void 0?null:V;return[function(){return h(B())},t===null?void 0:function(){return h(t())}]},[B,V,y,A]);var H=W(R,j[0],j[1]);return Q(function(){D.hasValue=!0,D.value=H},[H]),re(H),H}},7231:function(w,C,l){w.exports=l(2179)},63783:function(w,C,l){l.d(C,{Ue:function(){return B}});const o=y=>{let A;const j=new Set,D=(c,t)=>{const i=typeof c=="function"?c(A):c;if(!Object.is(i,A)){const T=A;A=(t!=null?t:typeof i!="object"||i===null)?i:Object.assign({},A,i),j.forEach(m=>m(A,T))}},H=()=>A,u={setState:D,getState:H,subscribe:c=>(j.add(c),()=>j.delete(c)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),j.clear()}};return A=y(D,H,u),u},z=y=>y?o(y):o;var S=y=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),z(y)),Z=l(50959),W=l(7231);const{useDebugValue:ee}=Z,{useSyncExternalStoreWithSelector:Q}=W;let K=!1;function re(y,A=y.getState,j){j&&!K&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),K=!0);const D=Q(y.subscribe,y.getState,y.getServerState||y.getState,A,j);return ee(D),D}const R=y=>{typeof y!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const A=typeof y=="function"?z(y):y,j=(D,H)=>re(A,D,H);return Object.assign(j,A),j},B=y=>y?R(y):R;var V=y=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),B(y))},51304:function(w,C,l){l.d(C,{mW:function(){return Q},tJ:function(){return H}});const o=(h,g)=>(u,c,t)=>(t.dispatch=i=>(u(T=>h(T,i),!1,i),i),t.dispatchFromDevtools=!0,L({dispatch:(...i)=>t.dispatch(...i)},g)),z=null,S=new Map,Z=h=>{const g=S.get(h);return g?Object.fromEntries(Object.entries(g.stores).map(([u,c])=>[u,c.getState()])):{}},W=(h,g,u)=>{if(h===void 0)return{type:"untracked",connection:g.connect(u)};const c=S.get(u.name);if(c)return L({type:"tracked",store:h},c);const t={connection:g.connect(u),stores:{}};return S.set(u.name,t),L({type:"tracked",store:h},t)},Q=(h,g={})=>(u,c,t)=>{const k=g,{enabled:i,anonymousActionType:T,store:m}=k,O=ye(k,["enabled","anonymousActionType","store"]);let _;try{_=(i!=null?i:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(p){}if(!_)return i&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),h(u,c,t);const v=W(m,_,O),{connection:x}=v,P=ye(v,["connection"]);let M=!0;t.setState=(p,d,b)=>{const N=u(p,d);if(!M)return N;const le=b===void 0?{type:T||"anonymous"}:typeof b=="string"?{type:b}:b;return m===void 0?(x==null||x.send(le,c()),N):(x==null||x.send(he(L({},le),{type:`${m}/${le.type}`}),he(L({},Z(O.name)),{[m]:t.getState()})),N)};const E=(...p)=>{const d=M;M=!1,u(...p),M=d},F=h(t.setState,c,t);if(P.type==="untracked"?x==null||x.init(F):(P.stores[P.store]=t,x==null||x.init(Object.fromEntries(Object.entries(P.stores).map(([p,d])=>[p,p===P.store?F:d.getState()])))),t.dispatchFromDevtools&&typeof t.dispatch=="function"){let p=!1;const d=t.dispatch;t.dispatch=(...b)=>{b[0].type==="__setState"&&!p&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),p=!0),d(...b)}}return x.subscribe(p=>{var d;switch(p.type){case"ACTION":if(typeof p.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return K(p.payload,b=>{if(b.type==="__setState"){if(m===void 0){E(b.state);return}Object.keys(b.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const N=b.state[m];if(N==null)return;JSON.stringify(t.getState())!==JSON.stringify(N)&&E(N);return}t.dispatchFromDevtools&&typeof t.dispatch=="function"&&t.dispatch(b)});case"DISPATCH":switch(p.payload.type){case"RESET":return E(F),m===void 0?x==null?void 0:x.init(t.getState()):x==null?void 0:x.init(Z(O.name));case"COMMIT":if(m===void 0){x==null||x.init(t.getState());return}return x==null?void 0:x.init(Z(O.name));case"ROLLBACK":return K(p.state,b=>{if(m===void 0){E(b),x==null||x.init(t.getState());return}E(b[m]),x==null||x.init(Z(O.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return K(p.state,b=>{if(m===void 0){E(b);return}JSON.stringify(t.getState())!==JSON.stringify(b[m])&&E(b[m])});case"IMPORT_STATE":{const{nextLiftedState:b}=p.payload,N=(d=b.computedStates.slice(-1)[0])==null?void 0:d.state;if(!N)return;E(m===void 0?N:N[m]),x==null||x.send(null,b);return}case"PAUSE_RECORDING":return M=!M}return}}),F},K=(h,g)=>{let u;try{u=JSON.parse(h)}catch(c){console.error("[zustand devtools middleware] Could not parse the received json",c)}u!==void 0&&g(u)},re=h=>(g,u,c)=>{const t=c.subscribe;return c.subscribe=(T,m,O)=>{let _=T;if(m){const x=(O==null?void 0:O.equalityFn)||Object.is;let P=T(c.getState());_=M=>{const E=T(M);if(!x(P,E)){const F=P;m(P=E,F)}},O!=null&&O.fireImmediately&&m(P,P)}return t(_)},h(g,u,c)},R=null,B=(h,g)=>(...u)=>Object.assign({},h,g(...u));function V(h,g){let u;try{u=h()}catch(t){return}return{getItem:t=>{var i;const T=O=>O===null?null:JSON.parse(O,g==null?void 0:g.reviver),m=(i=u.getItem(t))!=null?i:null;return m instanceof Promise?m.then(T):T(m)},setItem:(t,i)=>u.setItem(t,JSON.stringify(i,g==null?void 0:g.replacer)),removeItem:t=>u.removeItem(t)}}const y=h=>g=>{try{const u=h(g);return u instanceof Promise?u:{then(c){return y(c)(u)},catch(c){return this}}}catch(u){return{then(c){return this},catch(c){return y(c)(u)}}}},A=(h,g)=>(u,c,t)=>{let i=L({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:v=>v,version:0,merge:(v,p)=>L(L({},p),v)},g),T=!1;const m=new Set,O=new Set;let _;try{_=i.getStorage()}catch(v){}if(!_)return h((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),u(...v)},c,t);const x=y(i.serialize),P=()=>{const v=i.partialize(L({},c()));let p;const d=x({state:v,version:i.version}).then(b=>_.setItem(i.name,b)).catch(b=>{p=b});if(p)throw p;return d},M=t.setState;t.setState=(v,p)=>{M(v,p),P()};const E=h((...v)=>{u(...v),P()},c,t);let F;const k=()=>{var v;if(!_)return;T=!1,m.forEach(d=>d(c()));const p=((v=i.onRehydrateStorage)==null?void 0:v.call(i,c()))||void 0;return y(_.getItem.bind(_))(i.name).then(d=>{if(d)return i.deserialize(d)}).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==i.version){if(i.migrate)return i.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return d.state}).then(d=>{var b;return F=i.merge(d,(b=c())!=null?b:E),u(F,!0),P()}).then(()=>{p==null||p(F,void 0),T=!0,O.forEach(d=>d(F))}).catch(d=>{p==null||p(void 0,d)})};return t.persist={setOptions:v=>{i=L(L({},i),v),v.getStorage&&(_=v.getStorage())},clearStorage:()=>{_==null||_.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>k(),hasHydrated:()=>T,onHydrate:v=>(m.add(v),()=>{m.delete(v)}),onFinishHydration:v=>(O.add(v),()=>{O.delete(v)})},k(),F||E},j=(h,g)=>(u,c,t)=>{let i=L({storage:V(()=>localStorage),partialize:k=>k,version:0,merge:(k,v)=>L(L({},v),k)},g),T=!1;const m=new Set,O=new Set;let _=i.storage;if(!_)return h((...k)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),u(...k)},c,t);const x=()=>{const k=i.partialize(L({},c()));return _.setItem(i.name,{state:k,version:i.version})},P=t.setState;t.setState=(k,v)=>{P(k,v),x()};const M=h((...k)=>{u(...k),x()},c,t);let E;const F=()=>{var k,v;if(!_)return;T=!1,m.forEach(d=>{var b;return d((b=c())!=null?b:M)});const p=((v=i.onRehydrateStorage)==null?void 0:v.call(i,(k=c())!=null?k:M))||void 0;return y(_.getItem.bind(_))(i.name).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==i.version){if(i.migrate)return i.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return d.state}).then(d=>{var b;return E=i.merge(d,(b=c())!=null?b:M),u(E,!0),x()}).then(()=>{p==null||p(E,void 0),E=c(),T=!0,O.forEach(d=>d(E))}).catch(d=>{p==null||p(void 0,d)})};return t.persist={setOptions:k=>{i=L(L({},i),k),k.storage&&(_=k.storage)},clearStorage:()=>{_==null||_.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>F(),hasHydrated:()=>T,onHydrate:k=>(m.add(k),()=>{m.delete(k)}),onFinishHydration:k=>(O.add(k),()=>{O.delete(k)})},i.skipHydration||F(),E||M},H=(h,g)=>"getStorage"in g||"serialize"in g||"deserialize"in g?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),A(h,g)):j(h,g)}}]);
}());