!(function(){"use strict";var it=Object.defineProperty;var b=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var B=($,h,l)=>h in $?it($,h,{enumerable:!0,configurable:!0,writable:!0,value:l}):$[h]=l,L=($,h)=>{for(var l in h||(h={}))ot.call(h,l)&&B($,l,h[l]);if(b)for(var l of b(h))lt.call(h,l)&&B($,l,h[l]);return $};var S=($,h,l)=>new Promise((A,C)=>{var x=v=>{try{s(l.next(v))}catch(g){C(g)}},u=v=>{try{s(l.throw(v))}catch(g){C(g)}},s=v=>v.done?A(v.value):Promise.resolve(v.value).then(x,u);s((l=l.apply($,h)).next())});(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7520],{91626:function($,h,l){l.d(h,{A:function(){return C}});var A=l(99177);function C(x,u){var s,v,g;x.accDescr&&((s=u.setAccDescription)==null||s.call(u,x.accDescr)),x.accTitle&&((v=u.setAccTitle)==null||v.call(u,x.accTitle)),x.title&&((g=u.setDiagramTitle)==null||g.call(u,x.title))}(0,A.eW)(C,"populateCommonDb")},77520:function($,h,l){l.d(h,{diagram:function(){return nt}});var A=l(20857),C=l(91626),x=l(68072),u=l(28081),s=l(99177),v=l(7853),g={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},O={axes:[],curves:[],options:g},M=structuredClone(O),F=u.vZ.radar,j=(0,s.eW)(()=>(0,x.Rb)(L(L({},F),(0,u.iE)().radar)),"getConfig"),D=(0,s.eW)(()=>M.axes,"getAxes"),U=(0,s.eW)(()=>M.curves,"getCurves"),G=(0,s.eW)(()=>M.options,"getOptions"),K=(0,s.eW)(a=>{M.axes=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name}})},"setAxes"),z=(0,s.eW)(a=>{M.curves=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name,entries:H(t.entries)}})},"setCurves"),H=(0,s.eW)(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=D();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(n=>{var o;return((o=n.axis)==null?void 0:o.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),J=(0,s.eW)(a=>{var e,r,n,o,c,i,d,p,_,m;const t=a.reduce((f,y)=>(f[y.name]=y,f),{});M.options={showLegend:(r=(e=t.showLegend)==null?void 0:e.value)!=null?r:g.showLegend,ticks:(o=(n=t.ticks)==null?void 0:n.value)!=null?o:g.ticks,max:(i=(c=t.max)==null?void 0:c.value)!=null?i:g.max,min:(p=(d=t.min)==null?void 0:d.value)!=null?p:g.min,graticule:(m=(_=t.graticule)==null?void 0:_.value)!=null?m:g.graticule}},"setOptions"),V=(0,s.eW)(()=>{(0,u.ZH)(),M=structuredClone(O)},"clear"),W={getAxes:D,getCurves:U,getOptions:G,setAxes:K,setCurves:z,setOptions:J,getConfig:j,clear:V,setAccTitle:u.GN,getAccTitle:u.eu,setDiagramTitle:u.g2,getDiagramTitle:u.Kr,getAccDescription:u.Mx,setAccDescription:u.U$},Z=(0,s.eW)(a=>{(0,C.A)(a,W);const{axes:t,curves:e,options:r}=a;W.setAxes(t),W.setCurves(e),W.setOptions(r)},"populate"),N={parse:(0,s.eW)(a=>S(this,null,function*(){const t=yield(0,v.Qc)("radar",a);s.cM.debug(t),Z(t)}),"parse")},X=(0,s.eW)((a,t,e,r)=>{var w;const n=r.db,o=n.getAxes(),c=n.getCurves(),i=n.getOptions(),d=n.getConfig(),p=n.getDiagramTitle(),_=(0,A.P)(t),m=Y(_,d),f=(w=i.max)!=null?w:Math.max(...c.map(T=>Math.max(...T.entries))),y=i.min,E=Math.min(d.width,d.height)/2;Q(m,o,E,i.ticks,i.graticule),q(m,o,E,d),R(m,o,c,y,f,i.graticule,d),I(m,c,i.showLegend,d),m.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-d.height/2-d.marginTop)},"draw"),Y=(0,s.eW)((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,n={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r),a.append("g").attr("transform",`translate(${n.x}, ${n.y})`)},"drawFrame"),Q=(0,s.eW)((a,t,e,r,n)=>{if(n==="circle")for(let o=0;o<r;o++){const c=e*(o+1)/r;a.append("circle").attr("r",c).attr("class","radarGraticule")}else if(n==="polygon"){const o=t.length;for(let c=0;c<r;c++){const i=e*(c+1)/r,d=t.map((p,_)=>{const m=2*_*Math.PI/o-Math.PI/2,f=i*Math.cos(m),y=i*Math.sin(m);return`${f},${y}`}).join(" ");a.append("polygon").attr("points",d).attr("class","radarGraticule")}}},"drawGraticule"),q=(0,s.eW)((a,t,e,r)=>{const n=t.length;for(let o=0;o<n;o++){const c=t[o].label,i=2*o*Math.PI/n-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(i)).attr("y2",e*r.axisScaleFactor*Math.sin(i)).attr("class","radarAxisLine"),a.append("text").text(c).attr("x",e*r.axisLabelFactor*Math.cos(i)).attr("y",e*r.axisLabelFactor*Math.sin(i)).attr("class","radarAxisLabel")}},"drawAxes");function R(a,t,e,r,n,o,c){const i=t.length,d=Math.min(c.width,c.height)/2;e.forEach((p,_)=>{if(p.entries.length!==i)return;const m=p.entries.map((f,y)=>{const E=2*Math.PI*y/i-Math.PI/2,w=P(f,r,n,d),T=w*Math.cos(E),st=w*Math.sin(E);return{x:T,y:st}});o==="circle"?a.append("path").attr("d",k(m,c.curveTension)).attr("class",`radarCurve-${_}`):o==="polygon"&&a.append("polygon").attr("points",m.map(f=>`${f.x},${f.y}`).join(" ")).attr("class",`radarCurve-${_}`)})}(0,s.eW)(R,"drawCurves");function P(a,t,e,r){const n=Math.min(Math.max(a,t),e);return r*(n-t)/(e-t)}(0,s.eW)(P,"relativeRadius");function k(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let n=0;n<e;n++){const o=a[(n-1+e)%e],c=a[n],i=a[(n+1)%e],d=a[(n+2)%e],p={x:c.x+(i.x-o.x)*t,y:c.y+(i.y-o.y)*t},_={x:i.x-(d.x-c.x)*t,y:i.y-(d.y-c.y)*t};r+=` C${p.x},${p.y} ${_.x},${_.y} ${i.x},${i.y}`}return`${r} Z`}(0,s.eW)(k,"closedRoundCurve");function I(a,t,e,r){if(!e)return;const n=(r.width/2+r.marginRight)*3/4,o=-(r.height/2+r.marginTop)*3/4,c=20;t.forEach((i,d)=>{const p=a.append("g").attr("transform",`translate(${n}, ${o+d*c})`);p.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${d}`),p.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(i.label)})}(0,s.eW)(I,"drawLegend");var tt={draw:X},et=(0,s.eW)((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const n=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${n};
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
		}
		`}return e},"genIndexStyles"),at=(0,s.eW)(a=>{const t=(0,u.xN)(),e=(0,u.iE)(),r=(0,x.Rb)(t,e.themeVariables),n=(0,x.Rb)(r.radar,a);return{themeVariables:r,radarOptions:n}},"buildRadarStyleOptions"),rt=(0,s.eW)(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=at(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${et(t,e)}
	`},"styles"),nt={parser:N,db:W,renderer:tt,styles:rt}}}]);
}());