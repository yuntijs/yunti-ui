!(function(){"use strict";var Y=Object.defineProperty;var y=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var $=(s,n,r)=>n in s?Y(s,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[n]=r,b=(s,n)=>{for(var r in n||(n={}))X.call(n,r)&&$(s,r,n[r]);if(y)for(var r of y(n))J.call(n,r)&&$(s,r,n[r]);return s};var w=(s,n,r)=>new Promise((P,f)=>{var p=c=>{try{h(r.next(c))}catch(k){f(k)}},t=c=>{try{h(r.throw(c))}catch(k){f(k)}},h=c=>c.done?P(c.value):Promise.resolve(c.value).then(p,t);h((r=r.apply(s,n)).next())});(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[71285],{23265:function(s,n,r){r.d(n,{A:function(){return f}});var P=r(95895);function f(p,t){var h,c,k;p.accDescr&&((h=t.setAccDescription)==null||h.call(t,p.accDescr)),p.accTitle&&((c=t.setAccTitle)==null||c.call(t,p.accTitle)),p.title&&((k=t.setDiagramTitle)==null||k.call(t,p.title))}(0,P.eW)(f,"populateCommonDb")},71285:function(s,n,r){r.d(n,{diagram:function(){return N}});var P=r(23265),f=r(35934),p=r(21065),t=r(95895),h=r(99290),c={packet:[]},k=structuredClone(c),T=t.vZ.packet,M=(0,t.eW)(()=>{const e=(0,f.Rb)(b(b({},T),(0,t.iE)().packet));return e.showBits&&(e.paddingY+=10),e},"getConfig"),A=(0,t.eW)(()=>k.packet,"getPacket"),F=(0,t.eW)(e=>{e.length>0&&k.packet.push(e)},"pushWord"),O=(0,t.eW)(()=>{(0,t.ZH)(),k=structuredClone(c)},"clear"),x={pushWord:F,getPacket:A,getConfig:M,clear:O,setAccTitle:t.GN,getAccTitle:t.eu,setDiagramTitle:t.g2,getDiagramTitle:t.Kr,getAccDescription:t.Mx,setAccDescription:t.U$},S=1e4,z=(0,t.eW)(e=>{(0,P.A)(e,x);let a=-1,i=[],_=1;const{bitsPerRow:u}=x.getConfig();for(let{start:l,end:o,label:m}of e.blocks){if(o&&o<l)throw new Error(`Packet block ${l} - ${o} is invalid. End must be greater than start.`);if(l!==a+1)throw new Error(`Packet block ${l} - ${o!=null?o:l} is not contiguous. It should start from ${a+1}.`);for(a=o!=null?o:l,t.cM.debug(`Packet block ${l} - ${a} with label ${m}`);i.length<=u+1&&x.getPacket().length<S;){const[E,g]=I({start:l,end:o,label:m},_,u);if(i.push(E),E.end+1===_*u&&(x.pushWord(i),i=[],_++),!g)break;({start:l,end:o,label:m}=g)}}x.pushWord(i)},"populate"),I=(0,t.eW)((e,a,i)=>{if(e.end===void 0&&(e.end=e.start),e.start>e.end)throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);return e.end+1<=a*i?[e,void 0]:[{start:e.start,end:a*i-1,label:e.label},{start:a*i,end:e.end,label:e.label}]},"getNextFittingBlock"),K={parse:(0,t.eW)(e=>w(this,null,function*(){const a=yield(0,h.Qc)("packet",e);t.cM.debug(a),z(a)}),"parse")},L=(0,t.eW)((e,a,i,_)=>{const u=_.db,l=u.getConfig(),{rowHeight:o,paddingY:m,bitWidth:E,bitsPerRow:g}=l,B=u.getPacket(),d=u.getDiagramTitle(),C=o+m,v=C*(B.length+1)-(d?0:o),D=E*g+2,W=(0,p.P)(a);W.attr("viewbox",`0 0 ${D} ${v}`),(0,t.v2)(W,v,D,l.useMaxWidth);for(const[Z,G]of B.entries())R(W,G,Z,l);W.append("text").text(d).attr("x",D/2).attr("y",v-C/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),R=(0,t.eW)((e,a,i,{rowHeight:_,paddingX:u,paddingY:l,bitWidth:o,bitsPerRow:m,showBits:E})=>{const g=e.append("g"),B=i*(_+l)+l;for(const d of a){const C=d.start%m*o+1,v=(d.end-d.start+1)*o-u;if(g.append("rect").attr("x",C).attr("y",B).attr("width",v).attr("height",_).attr("class","packetBlock"),g.append("text").attr("x",C+v/2).attr("y",B+_/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(d.label),!E)continue;const D=d.end===d.start,W=B-2;g.append("text").attr("x",C+(D?v/2:0)).attr("y",W).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",D?"middle":"start").text(d.start),D||g.append("text").attr("x",C+v).attr("y",W).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(d.end)}},"drawWord"),U={draw:L},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},H=(0,t.eW)(({packet:e}={})=>{const a=(0,f.Rb)(j,e);return`
	.packetByte {
		font-size: ${a.byteFontSize};
	}
	.packetByte.start {
		fill: ${a.startByteColor};
	}
	.packetByte.end {
		fill: ${a.endByteColor};
	}
	.packetLabel {
		fill: ${a.labelColor};
		font-size: ${a.labelFontSize};
	}
	.packetTitle {
		fill: ${a.titleColor};
		font-size: ${a.titleFontSize};
	}
	.packetBlock {
		stroke: ${a.blockStrokeColor};
		stroke-width: ${a.blockStrokeWidth};
		fill: ${a.blockFillColor};
	}
	`},"styles"),N={parser:K,db:x,renderer:U,styles:H}}}]);
}());