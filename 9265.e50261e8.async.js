!(function(){"use strict";var K=(W,f,a)=>new Promise((m,o)=>{var s=i=>{try{p(a.next(i))}catch(l){o(l)}},e=i=>{try{p(a.throw(i))}catch(l){o(l)}},p=i=>i.done?m(i.value):Promise.resolve(i.value).then(s,e);p((a=a.apply(W,f)).next())});(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9265],{23265:function(W,f,a){a.d(f,{A:function(){return o}});var m=a(95895);function o(s,e){var p,i,l;s.accDescr&&((p=e.setAccDescription)==null||p.call(e,s.accDescr)),s.accTitle&&((i=e.setAccTitle)==null||i.call(e,s.accTitle)),s.title&&((l=e.setDiagramTitle)==null||l.call(e,s.title))}(0,m.eW)(o,"populateCommonDb")},9265:function(W,f,a){a.d(f,{diagram:function(){return te}});var m=a(23265),o=a(35934),s=a(21065),e=a(95895),p=a(99290),i=a(76e3),l=e.vZ.pie,A={sections:new Map,showData:!1,config:l},E=A.sections,P=A.showData,U=structuredClone(l),j=(0,e.eW)(()=>structuredClone(U),"getConfig"),N=(0,e.eW)(()=>{E=new Map,P=A.showData,(0,e.ZH)()},"clear"),z=(0,e.eW)(({label:t,value:n})=>{E.has(t)||(E.set(t,n),e.cM.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),Z=(0,e.eW)(()=>E,"getSections"),H=(0,e.eW)(t=>{P=t},"setShowData"),V=(0,e.eW)(()=>P,"getShowData"),$={getConfig:j,clear:N,setDiagramTitle:e.g2,getDiagramTitle:e.Kr,setAccTitle:e.GN,getAccTitle:e.eu,setAccDescription:e.U$,getAccDescription:e.Mx,addSection:z,getSections:Z,setShowData:H,getShowData:V},J=(0,e.eW)((t,n)=>{(0,m.A)(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),Q={parse:(0,e.eW)(t=>K(this,null,function*(){const n=yield(0,p.Qc)("pie",t);e.cM.debug(n),J(n,$)}),"parse")},X=(0,e.eW)(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),b=X,Y=(0,e.eW)(t=>{const n=[...t.entries()].map(u=>({label:u[0],value:u[1]})).sort((u,g)=>g.value-u.value);return(0,i.ve8)().value(u=>u.value)(n)},"createPieArcs"),q=(0,e.eW)((t,n,ae,u)=>{e.cM.debug(`rendering pie chart
`+t);const g=u.db,R=(0,e.nV)(),k=(0,o.Rb)(g.getConfig(),R.pie),I=40,_=18,C=4,h=450,M=h,y=(0,s.P)(n),D=y.append("g");D.attr("transform","translate("+M/2+","+h/2+")");const{themeVariables:c}=R;let[T]=(0,o.VG)(c.pieOuterStrokeWidth);T!=null||(T=2);const L=k.textPosition,x=Math.min(M,h)/2-I,ie=(0,i.Nb1)().innerRadius(0).outerRadius(x),re=(0,i.Nb1)().innerRadius(x*L).outerRadius(x*L);D.append("circle").attr("cx",0).attr("cy",0).attr("r",x+T/2).attr("class","pieOuterCircle");const B=g.getSections(),w=Y(B),ne=[c.pie1,c.pie2,c.pie3,c.pie4,c.pie5,c.pie6,c.pie7,c.pie8,c.pie9,c.pie10,c.pie11,c.pie12],v=(0,i.PKp)(ne);D.selectAll("mySlices").data(w).enter().append("path").attr("d",ie).attr("fill",r=>v(r.data.label)).attr("class","pieCircle");let F=0;B.forEach(r=>{F+=r}),D.selectAll("mySlices").data(w).enter().append("text").text(r=>(r.data.value/F*100).toFixed(0)+"%").attr("transform",r=>"translate("+re.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),D.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-(h-50)/2).attr("class","pieTitleText");const O=D.selectAll(".legend").data(v.domain()).enter().append("g").attr("class","legend").attr("transform",(r,d)=>{const S=_+C,se=S*v.domain().length/2,le=12*_,oe=d*S-se;return"translate("+le+","+oe+")"});O.append("rect").attr("width",_).attr("height",_).style("fill",v).style("stroke",v),O.data(w).append("text").attr("x",_+C).attr("y",_-C).text(r=>{const{label:d,value:S}=r.data;return g.getShowData()?`${d} [${S}]`:d});const ce=Math.max(...O.selectAll("text").nodes().map(r=>{var d;return(d=r==null?void 0:r.getBoundingClientRect().width)!=null?d:0})),G=M+I+_+C+ce;y.attr("viewBox",`0 0 ${G} ${h}`),(0,e.v2)(y,h,G,k.useMaxWidth)},"draw"),ee={draw:q},te={parser:Q,db:$,renderer:ee,styles:b}}}]);
}());