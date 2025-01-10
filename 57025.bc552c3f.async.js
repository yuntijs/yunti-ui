(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[57025],{79771:function(we){(function(oe,F){we.exports=F()})(this,function(){"use strict";return function(oe,F){var he=F.prototype,t=he.format;he.format=function(V){var p=this,N=this.$locale();if(!this.isValid())return t.bind(this)(V);var Y=this.$utils(),S=(V||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(y){switch(y){case"Q":return Math.ceil((p.$M+1)/3);case"Do":return N.ordinal(p.$D);case"gggg":return p.weekYear();case"GGGG":return p.isoWeekYear();case"wo":return N.ordinal(p.week(),"W");case"w":case"ww":return Y.s(p.week(),y==="w"?1:2,"0");case"W":case"WW":return Y.s(p.isoWeek(),y==="W"?1:2,"0");case"k":case"kk":return Y.s(String(p.$H===0?24:p.$H),y==="k"?1:2,"0");case"X":return Math.floor(p.$d.getTime()/1e3);case"x":return p.$d.getTime();case"z":return"["+p.offsetName()+"]";case"zzz":return"["+p.offsetName("long")+"]";default:return y}});return t.bind(this)(S)}}})},30156:function(we){(function(oe,F){we.exports=F()})(this,function(){"use strict";var oe={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},F=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,he=/\d/,t=/\d\d/,V=/\d\d?/,p=/\d*[^-_:/,()\s\d]+/,N={},Y=function(g){return(g=+g)+(g>68?1900:2e3)},S=function(g){return function(w){this[g]=+w}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var I=w.match(/([+-]|\d\d)/g),M=60*I[1]+(+I[2]||0);return M===0?0:I[0]==="+"?-M:M}(g)}],H=function(g){var w=N[g];return w&&(w.indexOf?w:w.s.concat(w.f))},pe=function(g,w){var I,M=N.meridiem;if(M){for(var U=1;U<=24;U+=1)if(g.indexOf(M(U,0,w))>-1){I=U>12;break}}else I=g===(w?"pm":"PM");return I},De={A:[p,function(g){this.afternoon=pe(g,!1)}],a:[p,function(g){this.afternoon=pe(g,!0)}],Q:[he,function(g){this.month=3*(g-1)+1}],S:[he,function(g){this.milliseconds=100*+g}],SS:[t,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[V,S("seconds")],ss:[V,S("seconds")],m:[V,S("minutes")],mm:[V,S("minutes")],H:[V,S("hours")],h:[V,S("hours")],HH:[V,S("hours")],hh:[V,S("hours")],D:[V,S("day")],DD:[t,S("day")],Do:[p,function(g){var w=N.ordinal,I=g.match(/\d+/);if(this.day=I[0],w)for(var M=1;M<=31;M+=1)w(M).replace(/\[|\]/g,"")===g&&(this.day=M)}],w:[V,S("week")],ww:[t,S("week")],M:[V,S("month")],MM:[t,S("month")],MMM:[p,function(g){var w=H("months"),I=(H("monthsShort")||w.map(function(M){return M.slice(0,3)})).indexOf(g)+1;if(I<1)throw new Error;this.month=I%12||I}],MMMM:[p,function(g){var w=H("months").indexOf(g)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,S("year")],YY:[t,function(g){this.year=Y(g)}],YYYY:[/\d{4}/,S("year")],Z:y,ZZ:y};function X(g){var w,I;w=g,I=N&&N.formats;for(var M=(g=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(fe,se,z){var j=z&&z.toUpperCase();return se||I[z]||oe[z]||I[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(ie,$,le){return $||le.slice(1)})})).match(F),U=M.length,q=0;q<U;q+=1){var ke=M[q],re=De[ke],R=re&&re[0],J=re&&re[1];M[q]=J?{regex:R,parser:J}:ke.replace(/^\[|\]$/g,"")}return function(fe){for(var se={},z=0,j=0;z<U;z+=1){var ie=M[z];if(typeof ie=="string")j+=ie.length;else{var $=ie.regex,le=ie.parser,We=fe.slice(j),be=$.exec(We)[0];le.call(se,be),fe=fe.replace(be,"")}}return function(me){var Ee=me.afternoon;if(Ee!==void 0){var Q=me.hours;Ee?Q<12&&(me.hours+=12):Q===12&&(me.hours=0),delete me.afternoon}}(se),se}}return function(g,w,I){I.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(Y=g.parseTwoDigitYear);var M=w.prototype,U=M.parse;M.parse=function(q){var ke=q.date,re=q.utc,R=q.args;this.$u=re;var J=R[1];if(typeof J=="string"){var fe=R[2]===!0,se=R[3]===!0,z=fe||se,j=R[2];se&&(j=R[2]),N=this.$locale(),!fe&&j&&(N=I.Ls[j]),this.$d=function(We,be,me,Ee){try{if(["x","X"].indexOf(be)>-1)return new Date((be==="X"?1e3:1)*We);var Q=X(be)(We),Le=Q.year,Ce=Q.month,tt=Q.day,rt=Q.hours,st=Q.minutes,it=Q.seconds,nt=Q.milliseconds,Xe=Q.zone,Qe=Q.week,Ye=new Date,Fe=tt||(Le||Ce?1:Ye.getDate()),Oe=Le||Ye.getFullYear(),Se=0;Le&&!Ce||(Se=Ce>0?Ce-1:Ye.getMonth());var Me,Pe=rt||0,Ve=st||0,Be=it||0,Re=nt||0;return Xe?new Date(Date.UTC(Oe,Se,Fe,Pe,Ve,Be,Re+60*Xe.offset*1e3)):me?new Date(Date.UTC(Oe,Se,Fe,Pe,Ve,Be,Re)):(Me=new Date(Oe,Se,Fe,Pe,Ve,Be,Re),Qe&&(Me=Ee(Me).week(Qe).toDate()),Me)}catch(at){return new Date("")}}(ke,J,re,I),this.init(),j&&j!==!0&&(this.$L=this.locale(j).$L),z&&ke!=this.format(J)&&(this.$d=new Date("")),N={}}else if(J instanceof Array)for(var ie=J.length,$=1;$<=ie;$+=1){R[1]=J[$-1];var le=I.apply(this,R);if(le.isValid()){this.$d=le.$d,this.$L=le.$L,this.init();break}$===ie&&(this.$d=new Date(""))}else U.call(this,q)}}})},78881:function(we){(function(oe,F){we.exports=F()})(this,function(){"use strict";var oe="day";return function(F,he,t){var V=function(Y){return Y.add(4-Y.isoWeekday(),oe)},p=he.prototype;p.isoWeekYear=function(){return V(this).year()},p.isoWeek=function(Y){if(!this.$utils().u(Y))return this.add(7*(Y-this.isoWeek()),oe);var S,y,H,pe,De=V(this),X=(S=this.isoWeekYear(),y=this.$u,H=(y?t.utc:t)().year(S).startOf("year"),pe=4-H.isoWeekday(),H.isoWeekday()>4&&(pe+=7),H.add(pe,oe));return De.diff(X,"week")+1},p.isoWeekday=function(Y){return this.$utils().u(Y)?this.day()||7:this.day(this.day()%7?Y:Y-7)};var N=p.startOf;p.startOf=function(Y,S){var y=this.$utils(),H=!!y.u(S)||S;return y.p(Y)==="isoweek"?H?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):N.bind(this)(Y,S)}}})},57025:function(we,oe,F){"use strict";F.d(oe,{diagram:function(){return Zt}});var he=F(35934),t=F(95895),V=F(40560),p=F(16483),N=F(78881),Y=F(30156),S=F(79771),y=F(76e3),H=function(){var e=(0,t.eW)(function(W,o,u,f){for(u=u||{},f=W.length;f--;u[W[f]]=o);return u},"o"),s=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],a=[1,27],c=[1,28],m=[1,29],h=[1,30],ee=[1,31],ue=[1,32],de=[1,33],O=[1,34],Z=[1,9],ge=[1,10],ne=[1,11],ae=[1,12],C=[1,13],ze=[1,14],Ne=[1,15],Ue=[1,16],je=[1,19],Ze=[1,20],Ke=[1,21],Ge=[1,22],He=[1,23],v=[1,25],_=[1,35],T={trace:(0,t.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,t.eW)(function(o,u,f,d,b,i,l){var r=i.length-1;switch(b){case 1:return i[r-1];case 2:this.$=[];break;case 3:i[r-1].push(i[r]),this.$=i[r-1];break;case 4:case 5:this.$=i[r];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(i[r].substr(11)),this.$=i[r].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=i[r].substr(18);break;case 19:d.TopAxis(),this.$=i[r].substr(8);break;case 20:d.setAxisFormat(i[r].substr(11)),this.$=i[r].substr(11);break;case 21:d.setTickInterval(i[r].substr(13)),this.$=i[r].substr(13);break;case 22:d.setExcludes(i[r].substr(9)),this.$=i[r].substr(9);break;case 23:d.setIncludes(i[r].substr(9)),this.$=i[r].substr(9);break;case 24:d.setTodayMarker(i[r].substr(12)),this.$=i[r].substr(12);break;case 27:d.setDiagramTitle(i[r].substr(6)),this.$=i[r].substr(6);break;case 28:this.$=i[r].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=i[r].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(i[r].substr(8)),this.$=i[r].substr(8);break;case 33:d.addTask(i[r-1],i[r]),this.$="task";break;case 34:this.$=i[r-1],d.setClickEvent(i[r-1],i[r],null);break;case 35:this.$=i[r-2],d.setClickEvent(i[r-2],i[r-1],i[r]);break;case 36:this.$=i[r-2],d.setClickEvent(i[r-2],i[r-1],null),d.setLink(i[r-2],i[r]);break;case 37:this.$=i[r-3],d.setClickEvent(i[r-3],i[r-2],i[r-1]),d.setLink(i[r-3],i[r]);break;case 38:this.$=i[r-2],d.setClickEvent(i[r-2],i[r],null),d.setLink(i[r-2],i[r-1]);break;case 39:this.$=i[r-3],d.setClickEvent(i[r-3],i[r-1],i[r]),d.setLink(i[r-3],i[r-2]);break;case 40:this.$=i[r-1],d.setLink(i[r-1],i[r]);break;case 41:case 47:this.$=i[r-1]+" "+i[r];break;case 42:case 43:case 45:this.$=i[r-2]+" "+i[r-1]+" "+i[r];break;case 44:case 46:this.$=i[r-3]+" "+i[r-2]+" "+i[r-1]+" "+i[r];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:a,14:c,15:m,16:h,17:ee,18:ue,19:18,20:de,21:O,22:Z,23:ge,24:ne,25:ae,26:C,27:ze,28:Ne,29:Ue,30:je,31:Ze,33:Ke,35:Ge,36:He,37:24,38:v,40:_},e(s,[2,7],{1:[2,1]}),e(s,[2,3]),{9:36,11:17,12:n,13:a,14:c,15:m,16:h,17:ee,18:ue,19:18,20:de,21:O,22:Z,23:ge,24:ne,25:ae,26:C,27:ze,28:Ne,29:Ue,30:je,31:Ze,33:Ke,35:Ge,36:He,37:24,38:v,40:_},e(s,[2,5]),e(s,[2,6]),e(s,[2,17]),e(s,[2,18]),e(s,[2,19]),e(s,[2,20]),e(s,[2,21]),e(s,[2,22]),e(s,[2,23]),e(s,[2,24]),e(s,[2,25]),e(s,[2,26]),e(s,[2,27]),{32:[1,37]},{34:[1,38]},e(s,[2,30]),e(s,[2,31]),e(s,[2,32]),{39:[1,39]},e(s,[2,8]),e(s,[2,9]),e(s,[2,10]),e(s,[2,11]),e(s,[2,12]),e(s,[2,13]),e(s,[2,14]),e(s,[2,15]),e(s,[2,16]),{41:[1,40],43:[1,41]},e(s,[2,4]),e(s,[2,28]),e(s,[2,29]),e(s,[2,33]),e(s,[2,34],{42:[1,42],43:[1,43]}),e(s,[2,40],{41:[1,44]}),e(s,[2,35],{43:[1,45]}),e(s,[2,36]),e(s,[2,38],{42:[1,46]}),e(s,[2,37]),e(s,[2,39])],defaultActions:{},parseError:(0,t.eW)(function(o,u){if(u.recoverable)this.trace(o);else{var f=new Error(o);throw f.hash=u,f}},"parseError"),parse:(0,t.eW)(function(o){var u=this,f=[0],d=[],b=[null],i=[],l=this.table,r="",A=0,D=0,E=0,K=2,L=1,ut=i.slice.call(arguments,1),P=Object.create(this.lexer),xe={yy:{}};for(var dt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,dt)&&(xe.yy[dt]=this.yy[dt]);P.setInput(o,xe.yy),xe.yy.lexer=P,xe.yy.parser=this,typeof P.yylloc=="undefined"&&(P.yylloc={});var ft=P.yylloc;i.push(ft);var Kt=P.options&&P.options.ranges;typeof xe.yy.parseError=="function"?this.parseError=xe.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Gt(te){f.length=f.length-2*te,b.length=b.length-te,i.length=i.length-te}(0,t.eW)(Gt,"popStack");function wt(){var te;return te=d.pop()||P.lex()||L,typeof te!="number"&&(te instanceof Array&&(d=te,te=d.pop()),te=u.symbols_[te]||te),te}(0,t.eW)(wt,"lex");for(var G,ht,_e,ce,Ht,kt,Ae={},$e,ve,Dt,et;;){if(_e=f[f.length-1],this.defaultActions[_e]?ce=this.defaultActions[_e]:((G===null||typeof G=="undefined")&&(G=wt()),ce=l[_e]&&l[_e][G]),typeof ce=="undefined"||!ce.length||!ce[0]){var mt="";et=[];for($e in l[_e])this.terminals_[$e]&&$e>K&&et.push("'"+this.terminals_[$e]+"'");P.showPosition?mt="Parse error on line "+(A+1)+`:
`+P.showPosition()+`
Expecting `+et.join(", ")+", got '"+(this.terminals_[G]||G)+"'":mt="Parse error on line "+(A+1)+": Unexpected "+(G==L?"end of input":"'"+(this.terminals_[G]||G)+"'"),this.parseError(mt,{text:P.match,token:this.terminals_[G]||G,line:P.yylineno,loc:ft,expected:et})}if(ce[0]instanceof Array&&ce.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_e+", token: "+G);switch(ce[0]){case 1:f.push(G),b.push(P.yytext),i.push(P.yylloc),f.push(ce[1]),G=null,ht?(G=ht,ht=null):(D=P.yyleng,r=P.yytext,A=P.yylineno,ft=P.yylloc,E>0&&E--);break;case 2:if(ve=this.productions_[ce[1]][1],Ae.$=b[b.length-ve],Ae._$={first_line:i[i.length-(ve||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(ve||1)].first_column,last_column:i[i.length-1].last_column},Kt&&(Ae._$.range=[i[i.length-(ve||1)].range[0],i[i.length-1].range[1]]),kt=this.performAction.apply(Ae,[r,D,A,xe.yy,ce[1],b,i].concat(ut)),typeof kt!="undefined")return kt;ve&&(f=f.slice(0,-1*ve*2),b=b.slice(0,-1*ve),i=i.slice(0,-1*ve)),f.push(this.productions_[ce[1]][0]),b.push(Ae.$),i.push(Ae._$),Dt=l[f[f.length-2]][f[f.length-1]],f.push(Dt);break;case 3:return!0}}return!0},"parse")},x=function(){var W={EOF:1,parseError:(0,t.eW)(function(u,f){if(this.yy.parser)this.yy.parser.parseError(u,f);else throw new Error(u)},"parseError"),setInput:(0,t.eW)(function(o,u){return this.yy=u||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,t.eW)(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var u=o.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:(0,t.eW)(function(o){var u=o.length,f=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===d.length?this.yylloc.first_column:0)+d[d.length-f.length].length-f[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:(0,t.eW)(function(){return this._more=!0,this},"more"),reject:(0,t.eW)(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:(0,t.eW)(function(o){this.unput(this.match.slice(o))},"less"),pastInput:(0,t.eW)(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,t.eW)(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,t.eW)(function(){var o=this.pastInput(),u=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:(0,t.eW)(function(o,u){var f,d,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),d=o[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],f=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var i in b)this[i]=b[i];return!1}return!1},"test_match"),next:(0,t.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,u,f,d;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),i=0;i<b.length;i++)if(f=this._input.match(this.rules[b[i]]),f&&(!u||f[0].length>u[0].length)){if(u=f,d=i,this.options.backtrack_lexer){if(o=this.test_match(f,b[i]),o!==!1)return o;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(o=this.test_match(u,b[d]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,t.eW)(function(){var u=this.next();return u||this.lex()},"lex"),begin:(0,t.eW)(function(u){this.conditionStack.push(u)},"begin"),popState:(0,t.eW)(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,t.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,t.eW)(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:(0,t.eW)(function(u){this.begin(u)},"pushState"),stateStackSize:(0,t.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,t.eW)(function(u,f,d,b){var i=b;switch(d){case 0:return this.begin("open_directive"),"open_directive";break;case 1:return this.begin("acc_title"),31;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),33;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return W}();T.lexer=x;function k(){this.yy={}}return(0,t.eW)(k,"Parser"),k.prototype=T,T.Parser=k,new k}();H.parser=H;var pe=H;p.extend(N),p.extend(Y),p.extend(S);var De={friday:5,saturday:6},X="",g="",w=void 0,I="",M=[],U=[],q=new Map,ke=[],re=[],R="",J="",fe=["active","done","crit","milestone"],se=[],z=!1,j=!1,ie="sunday",$="saturday",le=0,We=(0,t.eW)(function(){ke=[],re=[],R="",se=[],qe=0,ot=void 0,Je=void 0,B=[],X="",g="",J="",w=void 0,I="",M=[],U=[],z=!1,j=!1,le=0,q=new Map,(0,t.ZH)(),ie="sunday",$="saturday"},"clear"),be=(0,t.eW)(function(e){g=e},"setAxisFormat"),me=(0,t.eW)(function(){return g},"getAxisFormat"),Ee=(0,t.eW)(function(e){w=e},"setTickInterval"),Q=(0,t.eW)(function(){return w},"getTickInterval"),Le=(0,t.eW)(function(e){I=e},"setTodayMarker"),Ce=(0,t.eW)(function(){return I},"getTodayMarker"),tt=(0,t.eW)(function(e){X=e},"setDateFormat"),rt=(0,t.eW)(function(){z=!0},"enableInclusiveEndDates"),st=(0,t.eW)(function(){return z},"endDatesAreInclusive"),it=(0,t.eW)(function(){j=!0},"enableTopAxis"),nt=(0,t.eW)(function(){return j},"topAxisEnabled"),Xe=(0,t.eW)(function(e){J=e},"setDisplayMode"),Qe=(0,t.eW)(function(){return J},"getDisplayMode"),Ye=(0,t.eW)(function(){return X},"getDateFormat"),Fe=(0,t.eW)(function(e){M=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),Oe=(0,t.eW)(function(){return M},"getIncludes"),Se=(0,t.eW)(function(e){U=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),Me=(0,t.eW)(function(){return U},"getExcludes"),Pe=(0,t.eW)(function(){return q},"getLinks"),Ve=(0,t.eW)(function(e){R=e,ke.push(e)},"addSection"),Be=(0,t.eW)(function(){return ke},"getSections"),Re=(0,t.eW)(function(){let e=bt();const s=10;let n=0;for(;!e&&n<s;)e=bt(),n++;return re=B,re},"getTasks"),at=(0,t.eW)(function(e,s,n,a){return a.includes(e.format(s.trim()))?!1:n.includes("weekends")&&(e.isoWeekday()===De[$]||e.isoWeekday()===De[$]+1)||n.includes(e.format("dddd").toLowerCase())?!0:n.includes(e.format(s.trim()))},"isInvalidDate"),Wt=(0,t.eW)(function(e){ie=e},"setWeekday"),Et=(0,t.eW)(function(){return ie},"getWeekday"),Ct=(0,t.eW)(function(e){$=e},"setWeekend"),yt=(0,t.eW)(function(e,s,n,a){if(!n.length||e.manualEndTime)return;let c;e.startTime instanceof Date?c=p(e.startTime):c=p(e.startTime,s,!0),c=c.add(1,"d");let m;e.endTime instanceof Date?m=p(e.endTime):m=p(e.endTime,s,!0);const[h,ee]=St(c,m,s,n,a);e.endTime=h.toDate(),e.renderEndTime=ee},"checkTaskDates"),St=(0,t.eW)(function(e,s,n,a,c){let m=!1,h=null;for(;e<=s;)m||(h=s.toDate()),m=at(e,n,a,c),m&&(s=s.add(1,"d")),e=e.add(1,"d");return[s,h]},"fixTaskDates"),ct=(0,t.eW)(function(e,s,n){n=n.trim();const c=new RegExp("^after\\s+(?<ids>[\\d\\w- ]+)").exec(n);if(c!==null){let h=null;for(const ue of c.groups.ids.split(" ")){let de=Te(ue);de!==void 0&&(!h||de.endTime>h.endTime)&&(h=de)}if(h)return h.endTime;const ee=new Date;return ee.setHours(0,0,0,0),ee}let m=p(n,s.trim(),!0);if(m.isValid())return m.toDate();{t.cM.debug("Invalid date:"+n),t.cM.debug("With date format:"+s.trim());const h=new Date(n);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+n);return h}},"getStartDate"),gt=(0,t.eW)(function(e){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},"parseDuration"),vt=(0,t.eW)(function(e,s,n,a=!1){n=n.trim();const m=new RegExp("^until\\s+(?<ids>[\\d\\w- ]+)").exec(n);if(m!==null){let O=null;for(const ge of m.groups.ids.split(" ")){let ne=Te(ge);ne!==void 0&&(!O||ne.startTime<O.startTime)&&(O=ne)}if(O)return O.startTime;const Z=new Date;return Z.setHours(0,0,0,0),Z}let h=p(n,s.trim(),!0);if(h.isValid())return a&&(h=h.add(1,"d")),h.toDate();let ee=p(e);const[ue,de]=gt(n);if(!Number.isNaN(ue)){const O=ee.add(ue,de);O.isValid()&&(ee=O)}return ee.toDate()},"getEndDate"),qe=0,Ie=(0,t.eW)(function(e){return e===void 0?(qe=qe+1,"task"+qe):e},"parseId"),Mt=(0,t.eW)(function(e,s){let n;s.substr(0,1)===":"?n=s.substr(1,s.length):n=s;const a=n.split(","),c={};lt(a,c,fe);for(let h=0;h<a.length;h++)a[h]=a[h].trim();let m="";switch(a.length){case 1:c.id=Ie(),c.startTime=e.endTime,m=a[0];break;case 2:c.id=Ie(),c.startTime=ct(void 0,X,a[0]),m=a[1];break;case 3:c.id=Ie(a[0]),c.startTime=ct(void 0,X,a[1]),m=a[2];break;default:}return m&&(c.endTime=vt(c.startTime,X,m,z),c.manualEndTime=p(m,"YYYY-MM-DD",!0).isValid(),yt(c,X,U,M)),c},"compileData"),It=(0,t.eW)(function(e,s){let n;s.substr(0,1)===":"?n=s.substr(1,s.length):n=s;const a=n.split(","),c={};lt(a,c,fe);for(let m=0;m<a.length;m++)a[m]=a[m].trim();switch(a.length){case 1:c.id=Ie(),c.startTime={type:"prevTaskEnd",id:e},c.endTime={data:a[0]};break;case 2:c.id=Ie(),c.startTime={type:"getStartDate",startData:a[0]},c.endTime={data:a[1]};break;case 3:c.id=Ie(a[0]),c.startTime={type:"getStartDate",startData:a[1]},c.endTime={data:a[2]};break;default:}return c},"parseData"),ot,Je,B=[],pt={},At=(0,t.eW)(function(e,s){const n={section:R,type:R,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:e,classes:[]},a=It(Je,s);n.raw.startTime=a.startTime,n.raw.endTime=a.endTime,n.id=a.id,n.prevTaskId=Je,n.active=a.active,n.done=a.done,n.crit=a.crit,n.milestone=a.milestone,n.order=le,le++;const c=B.push(n);Je=n.id,pt[n.id]=c-1},"addTask"),Te=(0,t.eW)(function(e){const s=pt[e];return B[s]},"findTaskById"),Lt=(0,t.eW)(function(e,s){const n={section:R,type:R,description:e,task:e,classes:[]},a=Mt(ot,s);n.startTime=a.startTime,n.endTime=a.endTime,n.id=a.id,n.active=a.active,n.done=a.done,n.crit=a.crit,n.milestone=a.milestone,ot=n,re.push(n)},"addTaskOrg"),bt=(0,t.eW)(function(){const e=(0,t.eW)(function(n){const a=B[n];let c="";switch(B[n].raw.startTime.type){case"prevTaskEnd":{const m=Te(a.prevTaskId);a.startTime=m.endTime;break}case"getStartDate":c=ct(void 0,X,B[n].raw.startTime.startData),c&&(B[n].startTime=c);break}return B[n].startTime&&(B[n].endTime=vt(B[n].startTime,X,B[n].raw.endTime.data,z),B[n].endTime&&(B[n].processed=!0,B[n].manualEndTime=p(B[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),yt(B[n],X,U,M))),B[n].processed},"compileTask");let s=!0;for(const[n,a]of B.entries())e(n),s=s&&a.processed;return s},"compileTasks"),Yt=(0,t.eW)(function(e,s){let n=s;(0,t.nV)().securityLevel!=="loose"&&(n=(0,V.N)(s)),e.split(",").forEach(function(a){Te(a)!==void 0&&(xt(a,()=>{window.open(n,"_self")}),q.set(a,n))}),Tt(e,"clickable")},"setLink"),Tt=(0,t.eW)(function(e,s){e.split(",").forEach(function(n){let a=Te(n);a!==void 0&&a.classes.push(s)})},"setClass"),Ft=(0,t.eW)(function(e,s,n){if((0,t.nV)().securityLevel!=="loose"||s===void 0)return;let a=[];if(typeof n=="string"){a=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let m=0;m<a.length;m++){let h=a[m].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),a[m]=h}}a.length===0&&a.push(e),Te(e)!==void 0&&xt(e,()=>{he.w8.runFunc(s,...a)})},"setClickFun"),xt=(0,t.eW)(function(e,s){se.push(function(){const n=document.querySelector(`[id="${e}"]`);n!==null&&n.addEventListener("click",function(){s()})},function(){const n=document.querySelector(`[id="${e}-text"]`);n!==null&&n.addEventListener("click",function(){s()})})},"pushFun"),Ot=(0,t.eW)(function(e,s,n){e.split(",").forEach(function(a){Ft(a,s,n)}),Tt(e,"clickable")},"setClickEvent"),Pt=(0,t.eW)(function(e){se.forEach(function(s){s(e)})},"bindFunctions"),Vt={getConfig:(0,t.eW)(()=>(0,t.nV)().gantt,"getConfig"),clear:We,setDateFormat:tt,getDateFormat:Ye,enableInclusiveEndDates:rt,endDatesAreInclusive:st,enableTopAxis:it,topAxisEnabled:nt,setAxisFormat:be,getAxisFormat:me,setTickInterval:Ee,getTickInterval:Q,setTodayMarker:Le,getTodayMarker:Ce,setAccTitle:t.GN,getAccTitle:t.eu,setDiagramTitle:t.g2,getDiagramTitle:t.Kr,setDisplayMode:Xe,getDisplayMode:Qe,setAccDescription:t.U$,getAccDescription:t.Mx,addSection:Ve,getSections:Be,getTasks:Re,addTask:At,findTaskById:Te,addTaskOrg:Lt,setIncludes:Fe,getIncludes:Oe,setExcludes:Se,getExcludes:Me,setClickEvent:Ot,setLink:Yt,getLinks:Pe,bindFunctions:Pt,parseDuration:gt,isInvalidDate:at,setWeekday:Wt,getWeekday:Et,setWeekend:Ct};function lt(e,s,n){let a=!0;for(;a;)a=!1,n.forEach(function(c){const m="^\\s*"+c+"\\s*$",h=new RegExp(m);e[0].match(h)&&(s[c]=!0,e.shift(1),a=!0)})}(0,t.eW)(lt,"getTaskTags");var Bt=(0,t.eW)(function(){t.cM.debug("Something is calling, setConf, remove the call")},"setConf"),_t={monday:y.Ox9,tuesday:y.YDX,wednesday:y.EFj,thursday:y.Igq,friday:y.y2j,saturday:y.LqH,sunday:y.Zyz},Rt=(0,t.eW)((e,s)=>{let n=[...e].map(()=>-1/0),a=[...e].sort((m,h)=>m.startTime-h.startTime||m.order-h.order),c=0;for(const m of a)for(let h=0;h<n.length;h++)if(m.startTime>=n[h]){n[h]=m.endTime,m.order=h+s,h>c&&(c=h);break}return c},"getMaxIntersections"),ye,zt=(0,t.eW)(function(e,s,n,a){const c=(0,t.nV)().gantt,m=(0,t.nV)().securityLevel;let h;m==="sandbox"&&(h=(0,y.Ys)("#i"+s));const ee=m==="sandbox"?(0,y.Ys)(h.nodes()[0].contentDocument.body):(0,y.Ys)("body"),ue=m==="sandbox"?h.nodes()[0].contentDocument:document,de=ue.getElementById(s);ye=de.parentElement.offsetWidth,ye===void 0&&(ye=1200),c.useWidth!==void 0&&(ye=c.useWidth);const O=a.db.getTasks();let Z=[];for(const v of O)Z.push(v.type);Z=He(Z);const ge={};let ne=2*c.topPadding;if(a.db.getDisplayMode()==="compact"||c.displayMode==="compact"){const v={};for(const T of O)v[T.section]===void 0?v[T.section]=[T]:v[T.section].push(T);let _=0;for(const T of Object.keys(v)){const x=Rt(v[T],_)+1;_+=x,ne+=x*(c.barHeight+c.barGap),ge[T]=x}}else{ne+=O.length*(c.barHeight+c.barGap);for(const v of Z)ge[v]=O.filter(_=>_.type===v).length}de.setAttribute("viewBox","0 0 "+ye+" "+ne);const ae=ee.select(`[id="${s}"]`),C=(0,y.Xf)().domain([(0,y.VV$)(O,function(v){return v.startTime}),(0,y.Fp7)(O,function(v){return v.endTime})]).rangeRound([0,ye-c.leftPadding-c.rightPadding]);function ze(v,_){const T=v.startTime,x=_.startTime;let k=0;return T>x?k=1:T<x&&(k=-1),k}(0,t.eW)(ze,"taskCompare"),O.sort(ze),Ne(O,ye,ne),(0,t.v2)(ae,ne,ye,c.useMaxWidth),ae.append("text").text(a.db.getDiagramTitle()).attr("x",ye/2).attr("y",c.titleTopMargin).attr("class","titleText");function Ne(v,_,T){const x=c.barHeight,k=x+c.barGap,W=c.topPadding,o=c.leftPadding,u=(0,y.BYU)().domain([0,Z.length]).range(["#00B9FA","#F95002"]).interpolate(y.JHv);je(k,W,o,_,T,v,a.db.getExcludes(),a.db.getIncludes()),Ze(o,W,_,T),Ue(v,k,W,o,x,u,_,T),Ke(k,W,o,x,u),Ge(o,W,_,T)}(0,t.eW)(Ne,"makeGantt");function Ue(v,_,T,x,k,W,o){const f=[...new Set(v.map(l=>l.order))].map(l=>v.find(r=>r.order===l));ae.append("g").selectAll("rect").data(f).enter().append("rect").attr("x",0).attr("y",function(l,r){return r=l.order,r*_+T-2}).attr("width",function(){return o-c.rightPadding/2}).attr("height",_).attr("class",function(l){for(const[r,A]of Z.entries())if(l.type===A)return"section section"+r%c.numberSectionStyles;return"section section0"});const d=ae.append("g").selectAll("rect").data(v).enter(),b=a.db.getLinks();if(d.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?C(l.startTime)+x+.5*(C(l.endTime)-C(l.startTime))-.5*k:C(l.startTime)+x}).attr("y",function(l,r){return r=l.order,r*_+T}).attr("width",function(l){return l.milestone?k:C(l.renderEndTime||l.endTime)-C(l.startTime)}).attr("height",k).attr("transform-origin",function(l,r){return r=l.order,(C(l.startTime)+x+.5*(C(l.endTime)-C(l.startTime))).toString()+"px "+(r*_+T+.5*k).toString()+"px"}).attr("class",function(l){const r="task";let A="";l.classes.length>0&&(A=l.classes.join(" "));let D=0;for(const[K,L]of Z.entries())l.type===L&&(D=K%c.numberSectionStyles);let E="";return l.active?l.crit?E+=" activeCrit":E=" active":l.done?l.crit?E=" doneCrit":E=" done":l.crit&&(E+=" crit"),E.length===0&&(E=" task"),l.milestone&&(E=" milestone "+E),E+=D,E+=" "+A,r+E}),d.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",c.fontSize).attr("x",function(l){let r=C(l.startTime),A=C(l.renderEndTime||l.endTime);l.milestone&&(r+=.5*(C(l.endTime)-C(l.startTime))-.5*k),l.milestone&&(A=r+k);const D=this.getBBox().width;return D>A-r?A+D+1.5*c.leftPadding>o?r+x-5:A+x+5:(A-r)/2+r+x}).attr("y",function(l,r){return r=l.order,r*_+c.barHeight/2+(c.fontSize/2-2)+T}).attr("text-height",k).attr("class",function(l){const r=C(l.startTime);let A=C(l.endTime);l.milestone&&(A=r+k);const D=this.getBBox().width;let E="";l.classes.length>0&&(E=l.classes.join(" "));let K=0;for(const[ut,P]of Z.entries())l.type===P&&(K=ut%c.numberSectionStyles);let L="";return l.active&&(l.crit?L="activeCritText"+K:L="activeText"+K),l.done?l.crit?L=L+" doneCritText"+K:L=L+" doneText"+K:l.crit&&(L=L+" critText"+K),l.milestone&&(L+=" milestoneText"),D>A-r?A+D+1.5*c.leftPadding>o?E+" taskTextOutsideLeft taskTextOutside"+K+" "+L:E+" taskTextOutsideRight taskTextOutside"+K+" "+L+" width-"+D:E+" taskText taskText"+K+" "+L+" width-"+D}),(0,t.nV)().securityLevel==="sandbox"){let l;l=(0,y.Ys)("#i"+s);const r=l.nodes()[0].contentDocument;d.filter(function(A){return b.has(A.id)}).each(function(A){var D=r.querySelector("#"+A.id),E=r.querySelector("#"+A.id+"-text");const K=D.parentNode;var L=r.createElement("a");L.setAttribute("xlink:href",b.get(A.id)),L.setAttribute("target","_top"),K.appendChild(L),L.appendChild(D),L.appendChild(E)})}}(0,t.eW)(Ue,"drawRects");function je(v,_,T,x,k,W,o,u){if(o.length===0&&u.length===0)return;let f,d;for(const{startTime:D,endTime:E}of W)(f===void 0||D<f)&&(f=D),(d===void 0||E>d)&&(d=E);if(!f||!d)return;if(p(d).diff(p(f),"year")>5){t.cM.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const b=a.db.getDateFormat(),i=[];let l=null,r=p(f);for(;r.valueOf()<=d;)a.db.isInvalidDate(r,b,o,u)?l?l.end=r:l={start:r,end:r}:l&&(i.push(l),l=null),r=r.add(1,"d");ae.append("g").selectAll("rect").data(i).enter().append("rect").attr("id",function(D){return"exclude-"+D.start.format("YYYY-MM-DD")}).attr("x",function(D){return C(D.start)+T}).attr("y",c.gridLineStartPadding).attr("width",function(D){const E=D.end.add(1,"day");return C(E)-C(D.start)}).attr("height",k-_-c.gridLineStartPadding).attr("transform-origin",function(D,E){return(C(D.start)+T+.5*(C(D.end)-C(D.start))).toString()+"px "+(E*v+.5*k).toString()+"px"}).attr("class","exclude-range")}(0,t.eW)(je,"drawExcludeDays");function Ze(v,_,T,x){let k=(0,y.LLu)(C).tickSize(-x+_+c.gridLineStartPadding).tickFormat((0,y.i$Z)(a.db.getAxisFormat()||c.axisFormat||"%Y-%m-%d"));const o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval()||c.tickInterval);if(o!==null){const u=o[1],f=o[2],d=a.db.getWeekday()||c.weekday;switch(f){case"millisecond":k.ticks(y.U8T.every(u));break;case"second":k.ticks(y.S1K.every(u));break;case"minute":k.ticks(y.Z_i.every(u));break;case"hour":k.ticks(y.WQD.every(u));break;case"day":k.ticks(y.rr1.every(u));break;case"week":k.ticks(_t[d].every(u));break;case"month":k.ticks(y.F0B.every(u));break}}if(ae.append("g").attr("class","grid").attr("transform","translate("+v+", "+(x-50)+")").call(k).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),a.db.topAxisEnabled()||c.topAxis){let u=(0,y.F5q)(C).tickSize(-x+_+c.gridLineStartPadding).tickFormat((0,y.i$Z)(a.db.getAxisFormat()||c.axisFormat||"%Y-%m-%d"));if(o!==null){const f=o[1],d=o[2],b=a.db.getWeekday()||c.weekday;switch(d){case"millisecond":u.ticks(y.U8T.every(f));break;case"second":u.ticks(y.S1K.every(f));break;case"minute":u.ticks(y.Z_i.every(f));break;case"hour":u.ticks(y.WQD.every(f));break;case"day":u.ticks(y.rr1.every(f));break;case"week":u.ticks(_t[b].every(f));break;case"month":u.ticks(y.F0B.every(f));break}}ae.append("g").attr("class","grid").attr("transform","translate("+v+", "+_+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(0,t.eW)(Ze,"makeGrid");function Ke(v,_){let T=0;const x=Object.keys(ge).map(k=>[k,ge[k]]);ae.append("g").selectAll("text").data(x).enter().append(function(k){const W=k[0].split(t.SY.lineBreakRegex),o=-(W.length-1)/2,u=ue.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",o+"em");for(const[f,d]of W.entries()){const b=ue.createElementNS("http://www.w3.org/2000/svg","tspan");b.setAttribute("alignment-baseline","central"),b.setAttribute("x","10"),f>0&&b.setAttribute("dy","1em"),b.textContent=d,u.appendChild(b)}return u}).attr("x",10).attr("y",function(k,W){if(W>0)for(let o=0;o<W;o++)return T+=x[W-1][1],k[1]*v/2+T*v+_;else return k[1]*v/2+_}).attr("font-size",c.sectionFontSize).attr("class",function(k){for(const[W,o]of Z.entries())if(k[0]===o)return"sectionTitle sectionTitle"+W%c.numberSectionStyles;return"sectionTitle"})}(0,t.eW)(Ke,"vertLabels");function Ge(v,_,T,x){const k=a.db.getTodayMarker();if(k==="off")return;const W=ae.append("g").attr("class","today"),o=new Date,u=W.append("line");u.attr("x1",C(o)+v).attr("x2",C(o)+v).attr("y1",c.titleTopMargin).attr("y2",x-c.titleTopMargin).attr("class","today"),k!==""&&u.attr("style",k.replace(/,/g,";"))}(0,t.eW)(Ge,"drawToday");function He(v){const _={},T=[];for(let x=0,k=v.length;x<k;++x)Object.prototype.hasOwnProperty.call(_,v[x])||(_[v[x]]=!0,T.push(v[x]));return T}(0,t.eW)(He,"checkUnique")},"draw"),Nt={setConf:Bt,draw:zt},Ut=(0,t.eW)(e=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,"getStyles"),jt=Ut,Zt={parser:pe,db:Vt,renderer:Nt,styles:jt}}}]);
