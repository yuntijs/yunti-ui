"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[52433],{10673:function(M,n,e){e.r(n);var r=e(18423),a=e(75713),_=e(3772),s=e(96947),t=e(34224),u=e(32904),i=e(55471),l=e(52676),d=[{description:"Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.",icon:s.Z,title:"Themeable"},{description:"voids unnecessary styles props at runtime, making it more performant than other UI libraries.",icon:t.Z,title:"Fast"},{description:"Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.",icon:u.Z,title:"Light & Dark UI"}],o=`import { ThemeProvider, Button } from '@yuntijs/ui'

export default () => (
  <ThemeProvider>
    <Button>Hello YuntiJS</Button>
  </ThemeProvider>
)`;n.default=function(){var D=(0,_.Fg)();return(0,l.jsxs)(i.Z,{gap:16,children:[(0,l.jsxs)(i.Z,{children:[(0,l.jsx)("h2",{style:{fontSize:20},children:"\u2601\uFE0F Start building your CloudNative web app now"}),(0,l.jsxs)("div",{style:{color:D.colorTextDescription,textAlign:"center"},children:["The YuntiUI components are inspired by"," ",(0,l.jsx)("a",{href:"(https://ui.lobehub.com",rel:"noreferrer",target:"_blank",children:"LobeUI"})," ","and developed based on"," ",(0,l.jsx)("a",{href:"https://ant.design/components/overview",rel:"noreferrer",target:"_blank",children:"Antd components"}),", fully compatible with Antd components, ",(0,l.jsx)("br",{}),"and it is recommended to use"," ",(0,l.jsx)("a",{href:"https://ant-design.github.io/antd-style",rel:"noreferrer",target:"_blank",children:"antd-style"})," ","as the default css-in-js styling solution."]})]}),(0,l.jsx)(r.ZP,{language:"tsx",style:{maxWidth:"60%"},type:"ghost",children:o}),(0,l.jsx)(a.Z,{items:d})]})}},59356:function(M,n,e){e.r(n);var r=e(26068),a=e.n(r),_=e(84522),s=e(3409),t=e(65784),u=e(98829),i=e(28562),l=e(53115),d=e(52676);n.default=function(){var o=(0,_.useCreateStore)(),D=(0,_.useControls)({name:"outputs",title:"\u8F93\u51FA\u53D8\u91CF",fieldRemoveButton:!0,readOnly:!1,defaultActive:!0,disabled:!1,addOneFiledDefault:!0,disableRemoveWhenOneField:!0,maxFileds:10,empty:"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0",variant:{options:["default","block","ghost","pure"],value:"default"}},{store:o});return(0,d.jsx)(s.ZP,{levaStore:o,style:{width:"100%"},children:(0,d.jsx)(i.Z,{style:{width:"100%",height:"100%"},children:(0,d.jsx)(t.E,a()({columns:[{label:"\u53D8\u91CF\u540D",name:"key",width:"40%",render:function(){return(0,d.jsx)(u.Z,{maxLength:30,placeholder:"\u8F93\u5165\u53D8\u91CF\u540D",showCount:!0})}},{label:"\u53D8\u91CF\u503C",name:"value",width:"45%",render:function(){return(0,d.jsx)(u.Z,{placeholder:"\u8F93\u5165\u53D8\u91CF\u503C"})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53D8\u91CF\u503C"}]}],icon:l.Z},D))})})}},25822:function(M,n,e){e.r(n);var r=e(335),a=e.n(r),_=e(15558),s=e.n(_),t=e(48305),u=e.n(t),i=e(3467),l=e(57837),d=e(54424),o=e(62719),D=e(38590),E=e(98829),v=e(62272),O=e(1718),m=e(22622),y=e(4615),P=e(82227),h=e(33985),j=e(53115),C=e(75271),T=e(53193),c=e(52676),L=o.l.CollapseList,F={outputs:[{name:"class",value:"claas1",children:[{name:"c1",value:"c1",children:[{name:"c11",value:"c11"}]}]},{name:"namespace",value:"ns1"}]};n.default=function(){var f=(0,T.useStyles)(),I=f.styles,g=o.l.useForm(),U=u()(g,1),R=U[0],z=(0,C.useState)(F),H=u()(z,2),J=H[0],Q=H[1],Y=o.l.useWatch("outputs",R);return(0,c.jsxs)(D.Z,{gap:6,style:{width:"100%"},vertical:!0,children:[(0,c.jsx)(o.l,{form:R,id:"form11",initialValues:F,onValuesChange:function(B,K){return Q(K)},variant:"filled",children:(0,c.jsx)(L,{columns:[{dependencies:function(B){return[["outputs"].concat(s()(B),["value"])]},label:"\u53D8\u91CF\u540D",name:"name",render:function(){return(0,c.jsx)(E.Z,{maxLength:30,placeholder:"\u8F93\u5165\u53D8\u91CF\u540D",showCount:!0})},rules:function(B,K){return[{whitespace:!0,required:!0,message:"\u8BF7\u8F93\u5165\u53D8\u91CF\u540D"},function(p){var b=p.getFieldValue;return{validator:function(N,x){var A=b(["outputs"].concat(s()(B)));return A!=null&&A.some(function(Z,V){return V!==K&&Z.name===x})?Promise.reject(new Error("\u53D8\u91CF\u540D\u4E0D\u80FD\u91CD\u590D")):Promise.resolve()}}}]}},{label:"\u53D8\u91CF\u503C",name:"value",render:function(){return(0,c.jsx)(E.Z,{placeholder:"\u8F93\u5165\u53D8\u91CF\u503C",style:{width:360}})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53D8\u91CF\u503C"}]},{className:I.operation,render:function(B,K,p,b){return(0,c.jsxs)(v.Z,{size:"small",children:[(0,c.jsx)(O.Z,{title:"\u6DFB\u52A0\u53F6\u5B50\u8282\u70B9",children:(0,c.jsx)(m.ZP,{icon:(0,c.jsx)(i.Z,{}),onClick:function(){p.add()},type:"text"})}),(0,c.jsx)(y.Z,{content:(0,c.jsx)(o.l,{onFieldsChange:function(N){var x=a()(N),A;try{for(x.s();!(A=x.n()).done;){var Z=A.value;R.setFieldValue(Z.name,Z.value)}}catch(V){x.e(V)}finally{x.f()}},children:(0,c.jsx)(o.l.Item,{name:["outputs"].concat(s()(b),[K,"desc"]),children:(0,c.jsx)(E.Z.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"})})}),title:"\u63CF\u8FF0",trigger:"click",children:(0,c.jsx)(m.ZP,{icon:(0,c.jsx)(l.Z,{}),type:"text"})}),(0,c.jsx)(m.ZP,{disabled:Y.length===1,icon:(0,c.jsx)(d.Z,{}),onClick:function(){return p.remove(B)},type:"text"})]})}}],defaultExpandAllRows:!0,fieldRemoveButton:!1,icon:j.Z,indentSize:16,name:"outputs",title:"\u8F93\u51FA\u53D8\u91CF",variant:"block"})}),(0,c.jsx)(P.i,{content:"Form value \u503C",dashed:!0,mode:"expanded",orientation:"left",orientationMargin:0,children:(0,c.jsx)(h.h,{collapsed:!1,src:J})})]})}},58809:function(M,n,e){e.r(n);var r=e(48305),a=e.n(r),_=e(62719),s=e(38590),t=e(98829),u=e(82227),i=e(17853),l=e(53115),d=e(75271),o=e(52676),D=_.l.CollapseList;n.default=function(){var E=[{key:"class",value:"claas1"},{key:"namespace",value:"ns1"}],v=(0,d.useState)({outputs:E}),O=a()(v,2),m=O[0],y=O[1];return(0,o.jsxs)(s.Z,{gap:6,style:{width:"100%"},vertical:!0,children:[(0,o.jsx)(_.l,{onValuesChange:function(h,j){return y(j)},variant:"filled",children:(0,o.jsx)(D,{columns:[{dependencies:function(h){return[["outputs",h.name,"value"]]},label:"\u53D8\u91CF\u540D",name:"key",render:function(){return(0,o.jsx)(t.Z,{maxLength:30,placeholder:"\u8F93\u5165\u53D8\u91CF\u540D",showCount:!0})},rules:function(h,j){return[{whitespace:!0,required:!0,message:"\u8BF7\u8F93\u5165\u53D8\u91CF\u540D"},function(C){var T=C.getFieldValue;return{validator:function(L,F){var f=T("outputs");return f!=null&&f.some(function(I,g){return g!==j&&I.key===F})?Promise.reject(new Error("\u53D8\u91CF\u540D\u4E0D\u80FD\u91CD\u590D")):Promise.resolve()}}}]}},{label:"\u53D8\u91CF\u503C",name:"value",render:function(){return(0,o.jsx)(t.Z,{placeholder:"\u8F93\u5165\u53D8\u91CF\u503C",style:{width:360}})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53D8\u91CF\u503C"}]}],icon:l.Z,initialValue:E,name:"outputs",title:"\u8F93\u51FA\u53D8\u91CF",variant:"block"})}),(0,o.jsx)(u.i,{content:"Form value \u503C",dashed:!0,mode:"expanded",orientation:"left",orientationMargin:0,children:(0,o.jsx)(i.oP,{language:"json",children:JSON.stringify(m,null,2)})})]})}},99918:function(M,n,e){e.r(n);var r=e(44787),a=e(40305),_=e(95946),s=e(52676),t=a.T.Header,u=function(){var l=(0,_.useStyles)(),d=l.styles;return(0,s.jsx)(a.T,{className:d.root,children:(0,s.jsx)(t,{bordered:!0,descriptions:[{icon:{content:(0,s.jsx)(r.Z,{}),tooltip:"\u521B\u5EFA\u8005"},text:"\u5F20\u841D\u535C"},{text:"2024-05-16 17:36:09"}],extraContent:{items:[{key:"debug",label:"\u8C03\u8BD5"},{key:"import",label:"\u5BFC\u5165"},{key:"export",label:"\u5BFC\u51FA"},{type:"divider"},{key:"group",label:"group",type:"group",children:[{key:"group-item-1",label:"1st menu item"},{key:"group-item-2",label:"2nd menu item"}]},{type:"divider"},{key:"edit",label:"\u7F16\u8F91"},{key:"delete",label:"\u5220\u9664",danger:!0},{type:"divider"},{key:"submenu",label:"sub menu",children:[{key:"submenu-item-1",label:"1st menu item"},{key:"submenu-item-2",label:"2nd menu item"}]}]},icon:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",status:{status:"processing",text:"\u8FD0\u884C\u4E2D",tooltip:"\u63D2\u4EF6\u8FD0\u884C\u6B63\u5E38"},title:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6"})})};n.default=u},77725:function(M,n,e){e.r(n);var r=e(40305),a=e(95946),_=e(52676),s=r.T.Breadcrumb,t=r.T.Header,u=r.T.Content,i=function(){var d=(0,a.useStyles)(),o=d.styles;return(0,_.jsxs)(r.T,{className:o.root,status:404,children:[(0,_.jsx)(s,{items:[{title:"\u63D2\u4EF6\u5217\u8868",href:"/plugins"},{title:"\u5929\u6C14\u63D2\u4EF6",href:"/plugins/detail/plugin-1"},{title:"\u67E5\u8BE2 15 \u65E5\u5929\u6C14"}]}),(0,_.jsx)(t,{icon:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",title:"\u5929\u6C14\u63D2\u4EF6"}),(0,_.jsx)(u,{children:(0,_.jsx)(_.Fragment,{})})]})};n.default=i},14053:function(M,n,e){e.r(n);var r=e(48305),a=e.n(r),_=e(3467),s=e(70581),t=e(40305),u=e(62272),i=e(22622),l=e(98829),d=e(75271),o=e(12299),D=e(95946),E=e(52676),v=t.T.Title,O=t.T.Content,m=function(){var P=(0,D.useStyles)(),h=P.styles,j=(0,d.useState)(!0),C=a()(j,2),T=C[0],c=C[1];return(0,d.useEffect)(function(){var L=setTimeout(function(){return c(!1)},1500);return function(){return clearTimeout(L)}},[]),(0,E.jsxs)(t.T,{className:h.root,loading:T,children:[(0,E.jsx)(v,{children:"\u63D2\u4EF6"}),(0,E.jsxs)(O,{children:[(0,E.jsxs)(u.Z,{size:12,children:[(0,E.jsx)(i.ZP,{icon:(0,E.jsx)(_.Z,{}),type:"primary",children:"\u521B\u5EFA"}),(0,E.jsx)(i.ZP,{icon:(0,E.jsx)(s.Z,{}),children:"\u5237\u65B0"}),(0,E.jsx)(l.Z.Search,{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22"})]}),(0,E.jsx)(o.Table,{})]})]})};n.default=m},72231:function(M,n,e){e.r(n);var r=e(40305),a=e(95946),_=e(52676),s=r.T.Breadcrumb,t=r.T.Header,u=r.T.Content,i=function(){var d=(0,a.useStyles)(),o=d.styles;return(0,_.jsxs)(r.T,{className:o.root,loading:!0,children:[(0,_.jsx)(s,{items:[{title:"\u63D2\u4EF6\u5217\u8868",path:"/plugins"},{title:"\u63D2\u4EF6\u8BE6\u60C5"}]}),(0,_.jsx)(t,{icon:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",subTitle:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6\u7684\u63CF\u8FF0",title:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6"}),(0,_.jsx)(u,{children:(0,_.jsx)(_.Fragment,{})})]})};n.default=i},90288:function(M,n,e){e.r(n);var r=e(48305),a=e.n(r),_=e(44787),s=e(4404),t=e(61404),u=e(3467),i=e(70581),l=e(40305),d=e(62272),o=e(22622),D=e(98829),E=e(75271),v=e(12299),O=e(95946),m=e(52676),y=l.T.Breadcrumb,P=l.T.Header,h=l.T.Content,j=function(){var T=(0,O.useStyles)(),c=T.styles,L=(0,E.useState)(!0),F=a()(L,2),f=F[0],I=F[1];return(0,E.useEffect)(function(){var g=setTimeout(function(){return I(!1)},1500);return function(){return clearTimeout(g)}},[]),(0,m.jsxs)(l.T,{className:c.root,loading:f,children:[(0,m.jsx)(y,{items:[{title:"\u63D2\u4EF6\u5217\u8868",path:"/plugins"},{title:"\u63D2\u4EF6\u8BE6\u60C5"}]}),(0,m.jsx)(P,{classNames:{titleWrapper:"custom-title-wrapper"},descriptions:[{icon:{content:(0,m.jsx)(_.Z,{}),tooltip:"\u521B\u5EFA\u8005"},text:"\u5F20\u841D\u535C"},{icon:{content:(0,m.jsx)(s.Z,{}),tooltip:"\u66F4\u65B0\u65F6\u95F4"},text:"2024-05-16 17:36:09"}],extraContent:{items:[{key:"edit",label:"\u7F16\u8F91",type:"primary"},{key:"delete",label:"\u5220\u9664",danger:!0}],onClick:function(U,R){return console.log("key",U,R)}},icon:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},status:{status:"processing",text:"\u8FD0\u884C\u4E2D",title:"\u63D2\u4EF6\u8FD0\u884C\u6B63\u5E38"},subTitle:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6\u7684\u63CF\u8FF0",title:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6",titleRender:function(U){return(0,m.jsxs)(d.Z,{children:[U," ",(0,m.jsx)(t.Z,{})]})}}),(0,m.jsxs)(h,{children:[(0,m.jsxs)(d.Z,{size:12,children:[(0,m.jsx)(o.ZP,{icon:(0,m.jsx)(u.Z,{}),type:"primary",children:"\u521B\u5EFA"}),(0,m.jsx)(o.ZP,{icon:(0,m.jsx)(i.Z,{}),children:"\u5237\u65B0"}),(0,m.jsx)(D.Z.Search,{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22"})]}),(0,m.jsx)(v.Table,{})]})]})};n.default=j},88200:function(M,n,e){e.r(n);var r=e(94729),a=e(86346),_=e(38590),s=e(52107),t=e(52676),u=r.Z.Time,i=function(){return(0,t.jsxs)(a.Q,{bordered:!0,hoverable:!1,style:{width:420},children:[(0,t.jsx)(a.Q.Header,{description:"\u6211\u662F\u63CF\u8FF0",icon:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},title:"\u6211\u662F\u6807\u9898"}),(0,t.jsx)(a.Q.Content,{children:(0,t.jsx)(a.Q.Descriptions,{column:2,items:[{key:"creator",label:"\u521B\u5EFA\u8005",children:"Luobo Zhang"},{key:"tags",contentStyle:{width:"100%"},children:(0,t.jsxs)(_.Z,{gap:4,justify:"flex-end",children:[(0,t.jsx)(s.Z,{color:"geekblue",children:"LLM"}),(0,t.jsx)(s.Z,{color:"green",children:"Embedding"})]})},{key:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4",children:(0,t.jsx)(u,{relativeTime:!1,time:new Date().toISOString()})}]})})]})};n.default=i},34402:function(M,n,e){e.r(n);var r=e(34906),a=e(94729),_=e(86346),s=e(62701),t=e(62951),u=e(52676),i=a.Z.Time,l=function(){var o=(0,t.useStyles)(),D=o.styles;return(0,u.jsx)("div",{className:D.root,children:(0,u.jsxs)(_.Q,{onClick:function(v){return console.log("card clicked =>",v)},style:{width:520},children:[(0,u.jsx)(_.Q.Header,{description:"\u6211\u662F\u7279\u522B\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u7684\u63CF\u8FF0",extra:{menu:{items:[{key:"edit",label:"\u7F16\u8F91"},{key:"delete",label:"\u5220\u9664",danger:!0}],onClick:function(v){var O=v.key;console.log("key =>",O)}}},icon:{icon:(0,u.jsx)(r.Z,{})},title:"\u6211\u662F\u7279\u522B\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u7684\u6807\u9898"}),(0,u.jsx)(_.Q.Content,{children:(0,u.jsx)(_.Q.Descriptions,{items:[{key:"status",label:"\u72B6\u6001",children:(0,u.jsx)(s.Z,{status:"success",text:"\u5DF2\u53D1\u5E03"})},{key:"publishTime",label:"\u53D1\u5E03\u65F6\u95F4",children:(0,u.jsx)(i,{relativeTime:!1,time:new Date().toISOString()})},{key:"creator",label:"\u521B\u5EFA\u8005",children:"Luobo Zhang"},{key:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4",children:(0,u.jsx)(i,{relativeTime:!1,time:new Date().toISOString()})}]})})]})})};n.default=l},95321:function(M,n,e){e.r(n);var r=e(49567),a=e(84522),_=e(3409),s=e(27046),t=e(82846),u=e(22622),i=e(98829),l=e(41585),d=e(85090),o=e(90142),D=e(52676),E="\u8FD9\u662F\u4E00\u6BB5\u4F7F\u7528 Speech Synthes \u7684\u8BED\u97F3\u6F14\u793A",v=function(m){var y={};return m==null||m.forEach(function(P){return y[(P==null?void 0:P.label)||(P==null?void 0:P.value)]=P==null?void 0:P.value}),y};n.default=function(){var O=(0,a.useCreateStore)(),m=(0,a.useControls)({pitch:{max:1,min:-1,step:.1,value:0},rate:{max:1,min:-1,step:.1,value:0},voice:{options:v(new r.H().voiceOptions),value:"\u5A77\u5A77"}},{store:O}),y=(0,t.J)(E,m),P=y.setText,h=y.isLoading,j=y.start,C=y.stop;return(0,D.jsx)(_.ZP,{levaStore:O,children:(0,D.jsxs)(o.D,{gap:8,children:[h?(0,D.jsx)(u.ZP,{block:!0,icon:(0,D.jsx)(s.Z,{icon:l.Z}),onClick:C,children:"Stop"}):(0,D.jsx)(u.ZP,{block:!0,icon:(0,D.jsx)(s.Z,{icon:d.Z}),onClick:j,type:"primary",children:"Speak"}),(0,D.jsx)(i.Z.TextArea,{defaultValue:E,onChange:function(c){return P(c.target.value)}})]})})}},53193:function(M,n,e){e.r(n),e.d(n,{useStyles:function(){return t}});var r=e(53649),a=e.n(r),_=e(3772),s,t=(0,_.kc)(function(u){var i=u.css,l=u.token,d=u.prefixCls;return{operation:i(s||(s=a()([`
      justify-content: flex-end;
    `])))}})},12299:function(M,n,e){e.r(n),e.d(n,{Table:function(){return l}});var r=e(52107),a=e(62272),_=e(37805),s=e(75271),t=e(52676),u=[{title:"\u59D3\u540D",dataIndex:"name",key:"name",render:function(o){return(0,t.jsx)("a",{children:o})}},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u5730\u5740",dataIndex:"address",key:"address"},{title:"\u6807\u7B7E",key:"tags",dataIndex:"tags",render:function(o,D){var E=D.tags;return(0,t.jsx)(t.Fragment,{children:E.map(function(v){var O=v.length>5?"geekblue":"green";return v==="loser"&&(O="volcano"),(0,t.jsx)(r.Z,{color:O,children:v.toUpperCase()},v)})})}},{title:"\u64CD\u4F5C",key:"action",render:function(o,D){return(0,t.jsxs)(a.Z,{size:"middle",children:[(0,t.jsxs)("a",{children:["Invite ",D.name]}),(0,t.jsx)("a",{children:"Delete"})]})}}],i=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"]}],l=function(){return(0,t.jsx)(_.Z,{columns:u,dataSource:i})}},95946:function(M,n,e){e.r(n),e.d(n,{useStyles:function(){return t}});var r=e(53649),a=e.n(r),_=e(3772),s,t=(0,_.kc)(function(u){var i=u.css,l=u.token;return{root:i(s||(s=a()([`
      background-color: `,`;
    `])),l.colorBgLayout)}})},62951:function(M,n,e){e.r(n),e.d(n,{useStyles:function(){return t}});var r=e(53649),a=e.n(r),_=e(3772),s,t=(0,_.kc)(function(u){var i=u.css,l=u.token,d=u.prefixCls;return{root:i(s||(s=a()([`
      padding: 40px 24px;
      background: `,`;
    `])),l.colorBgLayout)}})}}]);
