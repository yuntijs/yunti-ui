"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[56242],{38019:function(r,e,_){_.r(e);var u=_(94572),t=_(904),n=_(52676);e.default=function(){return(0,n.jsx)(u.MonacoDiffEditor,{height:"300px",language:"javascript",onChange:function(a){console.log(a)},original:t.original,supportFullScreen:!0,value:t.value,width:"740px"})}},89078:function(r,e,_){_.r(e);var u=_(26068),t=_.n(u),n=_(32313),o=_(33763),a=_(94572),l=_(904),s=_(52676);e.default=function(){var i=(0,n.useCreateStore)(),E=(0,n.useControls)({readOnly:!1,lineNumbers:{options:["on","off","relative","interval"],value:"on"},wordWrap:{options:["off","on","wordWrapColumn","bounded"],value:"off"},contextmenu:!0,minimapEnabled:!1,language:{options:["css","html","javascript","json","typescript","yaml"],value:"javascript"},theme:{options:["vs","vs-dark","hc-light","hc-black"],value:""},supportFullScreen:!0,enableOutline:!1,width:"400px",height:"560px",original:{rows:!0,value:l.original},value:{rows:!0,value:l.value},inlineView:{options:["off","on","auto"],value:"auto"}},{store:i});return(0,s.jsx)(o.ZP,{levaStore:i,children:(0,s.jsx)(a.MonacoDiffEditor,t()({},E))})}},386:function(r,e,_){_.r(e);var u=_(82092),t=_.n(u),n=_(26068),o=_.n(n),a=_(48305),l=_.n(a),s=_(94572),i=_(57179),E=_(43869),h=_(75271),m=_(52676);e.default=function(){var j=(0,h.useState)({"a.json":{name:"a.json",language:"json",value:'{ "a": 1 }'},"b.js":{name:"b.js",language:"javascript",value:"var a = 1"},"c.sql":{name:"c.sql",language:"sql",value:"SELECT * from table where id = 1"}}),f=l()(j,2),M=f[0],g=f[1],c=(0,h.useState)("a.json"),O=l()(c,2),P=O[0],C=O[1],d=M[P];return(0,m.jsxs)(i.Z,{direction:"vertical",size:"large",children:[(0,m.jsx)(E.Z,{onChange:function(v){return C(v)},options:Object.keys(M),value:P}),(0,m.jsx)(s.MonacoEditor,{defaultValue:d.value,height:40,language:d.language,onChange:function(v){g(function(D){return o()(o()({},D),{},t()({},d.name,o()(o()({},D[d.name]),{},{value:v})))})},path:d.name,saveViewState:!0,width:600})]})}},76078:function(r,e,_){_.r(e);var u=_(26068),t=_.n(u),n=_(32313),o=_(33763),a=_(94572),l=_(52676);e.default=function(){var s=(0,n.useCreateStore)(),i=(0,n.useControls)({readOnly:!1,lineNumbers:{options:["on","off","relative","interval"],value:"on"},wordWrap:{options:["off","on","wordWrapColumn","bounded"],value:"off"},contextmenu:!0,minimapEnabled:!1,language:{options:["css","html","javascript","json","typescript","yaml"],value:"json"},theme:{options:["vs","vs-dark","hc-light","hc-black"],value:""},supportFullScreen:!0,enableOutline:!1,width:"400px",height:"440px",value:{rows:!0,value:JSON.stringify({type:"team",test:{testPage:"tools/testing/run-tests.htm",enabled:!0},search:{excludeFolders:[".git","node_modules","tools/bin","tools/counts","tools/policheck","tools/tfs_build_extensions","tools/testing/jscoverage","tools/testing/qunit","tools/testing/chutzpah","server.net"]}},null,2)}},{store:s});return(0,l.jsx)(o.ZP,{levaStore:s,children:(0,l.jsx)(a.MonacoEditor,t()({},i))})}},50313:function(r,e,_){_.r(e);var u=_(94572),t=_(2255),n=_(52676);e.default=function(){return(0,n.jsx)("div",{style:{padding:24,display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:(0,n.jsx)(u.MonacoEditor,{defaultValue:t.jsValue,height:200,language:"javascript",onChange:function(a){console.log(a)},version:"0.19.3",width:740})})}},54212:function(r,e,_){_.r(e);var u=_(94572),t=_(2255),n=_(52676);e.default=function(){return(0,n.jsx)(u.MonacoEditor,{defaultValue:t.jsValue,height:200,language:"javascript",onChange:function(a){console.log(a)},supportFullScreen:!0,width:740})}}}]);
