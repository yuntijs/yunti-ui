!function(){"use strict";var t="/yunti-ui/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"@yuntijs/ui","b":"webpack","f":[["nm__dumi-theme-yunti__dist__layouts__DemoLayout__index.4d0bb5c6.async.js",532],["3164.b60e7971.async.js",3164],["8584.3ccae0b6.async.js",8584],["MonacoEditor__index.md.e7b10154.async.js",12236],["Drawer__index.md.b2dcaec1.async.js",13179],["ChatItem__index.md.2cd0be6f.async.js",13573],["Tree__index.md.4c67a2b4.async.js",14075],["Status__index.md.1867d6ad.async.js",17415],["nm__dumi-theme-yunti__dist__layouts__DocLayout__index.3b4b94c9.async.js",20190],["SelectCard__index.md.9769d69a.async.js",20341],["WaveformIcon__index.md.f16ec94c.async.js",20859],["21412.444201b2.async.js",21412],["23595.256a403b.async.js",23595],["Card__index.md.9b233014.async.js",23696],["Logo__index.md.abedc3d9.async.js",23848],["LogViewer__index.md.1a02b33f.async.js",24224],["Alert__index.md.2b569861.async.js",29242],["FormHelper__index.md.0f38d93e.async.js",30779],["Mentions__index.md.356fd938.async.js",32517],["32813.1401d88c.async.js",32813],["SliderInput__index.md.ef152e38.async.js",33725],["Typography__index.md.8ef01d93.async.js",35062],["Table__index.md.46840c7c.async.js",37701],["Divider__index.md.583ca662.async.js",41534],["EditableMessage__index.md.f27a5196.async.js",48773],["notification__index.md.2ec43d3b.async.js",51722],["docs__index.md.5197468c.async.js",56935],["Descriptions__index.md.dbbabf0a.async.js",60336],["Dropdown__index.md.718b0788.async.js",62683],["docs__changelog.md.97a0150a.async.js",65793],["ConfigProvider__index.md.6eb2865d.async.js",67298],["69083.d7a7c9ce.async.js",69083],["Radio__index.md.68e9225f.async.js",69927],["Modal__index.md.92344842.async.js",76499],["nm__dumi-theme-yunti__dist__layouts__GlobalLayout.c13b89c6.async.js",77581],["nm__dumi__dist__client__pages__Demo__index.76b5b0e9.async.js",81009],["ChatInputArea__index.md.e9508498.async.js",81885],["dumi__tmp-production__dumi__theme__ContextWrapper.e3dabe36.async.js",81923],["Breadcrumb__index.md.a58bfd13.async.js",84594],["DragPanel__index.md.ecc8ab25.async.js",84984],["Highlighter__index.md.26d408c2.async.js",85021],["useSpeechSynthes__index.md.526ca4a7.async.js",86660],["Form__index.md.cf3d75ef.async.js",88386],["88533.dc6a6ff3.async.js",88533],["CollapseGroup__index.md.fb8dc4a5.async.js",89611],["ProCard__index.md.51138556.async.js",90859],["nm__dumi__dist__client__pages__404.64c46ea6.async.js",93065],["93822.02b63560.async.js",93822],["94572.c68feb40.async.js",94572],["Page__index.md.dbc5eb5b.async.js",99553]],"r":{"/*":[46,2,8,11,12,19,31,47,34,1,37,43,48],"/":[26,2,8,11,12,19,31,47,34,1,37,43,48],"/changelog":[29,2,8,11,12,19,31,47,34,1,37,43,48],"/~demos/:id":[35,0,2,31,47,34,1,12,37,43,48],"/components/alert":[16,2,8,11,12,19,31,47,34,1,37,43,48],"/components/breadcrumb":[38,2,8,11,12,19,31,47,34,1,37,43,48],"/components/card":[13,2,8,11,12,19,31,47,34,1,37,43,48],"/components/chat-input-area":[36,2,8,11,12,19,31,47,34,1,37,43,48],"/components/chat-item":[5,2,8,11,12,19,31,47,34,1,37,43,48],"/components/collapse-group":[44,2,8,11,12,19,31,47,34,1,37,43,48],"/components/config-provider":[30,2,8,11,12,19,31,47,34,1,37,43,48],"/components/descriptions":[27,2,8,11,12,19,31,47,34,1,37,43,48],"/components/divider":[23,2,8,11,12,19,31,47,34,1,37,43,48],"/components/drag-panel":[39,2,8,11,12,19,31,47,34,1,37,43,48],"/components/drawer":[4,2,8,11,12,19,31,47,34,1,37,43,48],"/components/dropdown":[28,2,8,11,12,19,31,47,34,1,37,43,48],"/components/editable-message":[24,2,8,11,12,19,31,47,34,1,37,43,48],"/components/form":[42,2,8,11,12,19,31,47,34,1,37,43,48],"/components/form-helper":[17,2,8,11,12,19,31,47,34,1,37,43,48],"/components/highlighter":[40,2,8,11,12,19,31,47,34,1,37,43,48],"/components/logo":[14,2,8,11,12,19,31,47,34,1,37,43,48],"/components/log-viewer":[15,2,8,11,12,19,31,47,34,1,37,43,48],"/components/mentions":[18,2,8,11,12,19,31,47,34,1,37,43,48],"/components/modal":[33,2,8,11,12,19,31,47,34,1,37,43,48],"/components/monaco-editor":[3,2,8,11,12,19,31,47,34,1,37,43,48],"/components/notification":[25,2,8,11,12,19,31,47,34,1,37,43,48],"/components/page":[49,2,8,11,12,19,31,47,34,1,37,43,48],"/components/pro-card":[45,2,8,11,12,19,31,47,34,1,37,43,48],"/components/radio":[32,2,8,11,12,19,31,47,34,1,37,43,48],"/components/select-card":[9,2,8,11,12,19,31,47,34,1,37,43,48],"/components/slider-input":[20,2,8,11,12,19,31,47,34,1,37,43,48],"/components/status":[7,2,8,11,12,19,31,47,34,1,37,43,48],"/components/table":[22,2,8,11,12,19,31,47,34,1,37,43,48],"/components/tree":[6,2,8,11,12,19,31,47,34,1,37,43,48],"/components/typography":[21,2,8,11,12,19,31,47,34,1,37,43,48],"/components/use-speech-synthes":[41,2,8,11,12,19,31,47,34,1,37,43,48],"/components/waveform-icon":[10,2,8,11,12,19,31,47,34,1,37,43,48]}},{publicPath:"/yunti-ui/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();