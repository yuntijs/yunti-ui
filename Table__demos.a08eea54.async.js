"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1561],{97356:function(B,u,e){e.r(u);var m=e(73376),r=e(67744),v=e(50959),a=e(11527),i=m.Typography.Text;u.default=function(){return(0,a.jsx)(m.CollapseTable,{columns:[{title:"\u53D8\u91CF\u540D",dataIndex:"key"},{title:"\u53D8\u91CF\u7C7B\u578B",dataIndex:"type",render:function(h){return(0,a.jsx)(i,{code:!0,children:h})}},{title:"\u63CF\u8FF0",dataIndex:"desc"}],dataSource:[{key:"answer",type:"string",desc:"\u5927\u6A21\u578B\u751F\u6210\u7684\u56DE\u7B54"},{key:"file",type:"blob",desc:"\u5927\u6A21\u578B\u751F\u6210\u7684\u6587\u4EF6"}],icon:r.Z,rootStyle:{width:"100%"},title:"\u8F93\u51FA\u53D8\u91CF",variant:"block"})}},30791:function(B,u,e){e.r(u);var m=e(77117),r=e.n(m),v=e(28152),a=e.n(v),i=e(20441),f=e(14785),h=e(73376),_=e(50959),c=e(11527),E=[{key:"1",name:"The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.",age:32,tags:["nice","developer"],description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{key:"2",name:"Jim Green",age:42,tags:["loser"],description:"My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."},{key:"3",name:"Not Expandable",age:29,description:"This not expandable",tags:["cool","teacher"]},{key:"4",name:"Joe Black",age:32,description:"My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",tags:["cool","teacher"]}];u.default=function(){var P=(0,i.WQ)(),x=(0,_.useState)(1),M=a()(x,2),T=M[0],D=M[1],K=(0,_.useState)(10),O=a()(K,2),U=O[0],b=O[1],W=(0,_.useState)(E.length),N=a()(W,1),z=N[0],F=(0,_.useState)([]),I=a()(F,2),J=I[0],w=I[1],G=(0,_.useState)(!1),V=a()(G,1),Y=V[0],A=(0,_.useState)({}),k=a()(A,2),Z=k[0],H=k[1],j=(0,_.useState)({}),R=a()(j,2),l=R[0],n=R[1],o=[{title:"Name",dataIndex:"name",key:"name",ellipsis:!0,render:function(t){return t}},{title:"Age",dataIndex:"age",key:"age",sorter:function(t,s){return t.age-s.age},sortOrder:l.columnKey==="age"?l.order:null},{title:"Tags",key:"tags",dataIndex:"tags",filters:[{text:"nice",value:"nice"},{text:"cool",value:"cool"}],filteredValue:Z.tags||null,onFilter:function(t,s){return s.tags.includes(t)},width:200,render:function(t,s){var C=s.tags;return(0,c.jsx)(c.Fragment,{children:C.map(function(p){var L=p.length>5?"geekblue":"green";return p==="loser"&&(L="volcano"),(0,c.jsx)(h.Tag,{color:L,children:p.toUpperCase()},p)})})}},{title:"Action",key:"action",width:130,render:function(t,s){return(0,c.jsx)(h.Dropdown.Button,{menu:{items:[{key:"detail",label:"\u8BE6\u60C5"}],onClick:function(p){var L=p.key;console.warn("click",L,s)}},onClick:function(){console.warn("\u5220\u9664",s)},overlayStyle:{width:100},children:"\u5220\u9664"})}}],y=function(t,s){D(t),b(s)},g=function(t,s,C){D(t.current||0),b(t.pageSize||0),H(s),n(C)},S=(0,i.M4)({bordered:!1,loading:!1,rowHoverable:!1,showHeader:!0,showSorterTooltip:!0,sticky:!1,virtual:!1,size:{options:["large","middle","small"],value:"large"},tableLayout:{options:["auto","fixed"],value:"auto"}},{store:P});return(0,c.jsx)(f.ZP,{levaStore:P,children:(0,c.jsx)(h.Table,r()({columns:o,dataSource:E,expandable:{expandedRowRender:function(t){return(0,c.jsx)("p",{style:{margin:0},children:t.description})},rowExpandable:function(t){return t.name!=="Not Expandable"}},loading:Y,onChange:g,pagination:{current:T,onChange:y,onShowSizeChange:y,pageSize:U,showTotal:function(t){return"\u5171\u8BA1 ".concat(t," \u6761")},total:z},rowSelection:{selectedRowKeys:J,onChange:function(t){w(t)}}},S))})}},11156:function(B,u,e){e.r(u);var m=e(28152),r=e.n(m),v=e(73376),a=e(50959),i=e(11527),f=[{key:"1",name:"The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.",age:32,tags:["nice","developer"],description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{key:"2",name:"Jim Green",age:42,tags:["loser"],description:"My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."},{key:"3",name:"Not Expandable",age:29,description:"This not expandable",tags:["cool","teacher"]},{key:"4",name:"Joe Black",age:32,description:"My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",tags:["cool","teacher"]}];u.default=function(){var h=(0,a.useState)(1),_=r()(h,2),c=_[0],E=_[1],P=(0,a.useState)(10),x=r()(P,2),M=x[0],T=x[1],D=(0,a.useState)(f.length),K=r()(D,1),O=K[0],U=(0,a.useState)([]),b=r()(U,2),W=b[0],N=b[1],z=(0,a.useState)(!1),F=r()(z,1),I=F[0],J=(0,a.useState)({}),w=r()(J,2),G=w[0],V=w[1],Y=(0,a.useState)({}),A=r()(Y,2),k=A[0],Z=A[1],H=[{title:"Name",dataIndex:"name",key:"name",ellipsis:!0,render:function(n){return n}},{title:"Age",dataIndex:"age",key:"age",sorter:function(n,o){return n.age-o.age},sortOrder:k.columnKey==="age"?k.order:null},{title:"Tags",key:"tags",dataIndex:"tags",filters:[{text:"nice",value:"nice"},{text:"cool",value:"cool"}],filteredValue:G.tags||null,onFilter:function(n,o){return o.tags.includes(n)},width:200,render:function(n,o){var y=o.tags;return(0,i.jsx)(i.Fragment,{children:y.map(function(g){var S=g.length>5?"geekblue":"green";return g==="loser"&&(S="volcano"),(0,i.jsx)(v.Tag,{color:S,children:g.toUpperCase()},g)})})}},{title:"Action",key:"action",width:130,render:function(n,o){return(0,i.jsx)(v.Dropdown.Button,{menu:{items:[{key:"detail",label:"\u8BE6\u60C5"}],onClick:function(g){var S=g.key;console.warn("click",S,o)}},onClick:function(){console.warn("\u5220\u9664",o)},overlayStyle:{width:100},children:"\u5220\u9664"})}}],j=function(n,o){E(n),T(o)},R=function(n,o,y){E(n.current||0),T(n.pageSize||0),V(o),Z(y)};return(0,i.jsx)(v.Table,{columns:H,dataSource:f,expandable:{expandedRowRender:function(n){return(0,i.jsx)("p",{style:{margin:0},children:n.description})},rowExpandable:function(n){return n.name!=="Not Expandable"}},loading:I,onChange:R,pagination:{current:c,onChange:j,onShowSizeChange:j,pageSize:M,showTotal:function(n){return"\u5171\u8BA1 ".concat(n," \u6761")},total:O},rowSelection:{selectedRowKeys:W,onChange:function(n){N(n)}}})}},67744:function(B,u,e){e.d(u,{Z:function(){return r}});var m=e(11011);const r=(0,m.Z)("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]])}}]);
