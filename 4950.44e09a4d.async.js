(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[4950],{76639:function(we){(function(ae,P){we.exports=P()})(this,function(){"use strict";return function(ae,P){var he=P.prototype,M=he.format;he.format=function(s){var I=this,W=this.$locale();if(!this.isValid())return M.bind(this)(s);var V=this.$utils(),A=(s||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(N){switch(N){case"Q":return Math.ceil((I.$M+1)/3);case"Do":return W.ordinal(I.$D);case"gggg":return I.weekYear();case"GGGG":return I.isoWeekYear();case"wo":return W.ordinal(I.week(),"W");case"w":case"ww":return V.s(I.week(),N==="w"?1:2,"0");case"W":case"WW":return V.s(I.isoWeek(),N==="W"?1:2,"0");case"k":case"kk":return V.s(String(I.$H===0?24:I.$H),N==="k"?1:2,"0");case"X":return Math.floor(I.$d.getTime()/1e3);case"x":return I.$d.getTime();case"z":return"["+I.offsetName()+"]";case"zzz":return"["+I.offsetName("long")+"]";default:return N}});return M.bind(this)(A)}}})},80998:function(we){(function(ae,P){we.exports=P()})(this,function(){"use strict";var ae={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},P=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,he=/\d/,M=/\d\d/,s=/\d\d?/,I=/\d*[^-_:/,()\s\d]+/,W={},V=function(k){return(k=+k)+(k>68?1900:2e3)},A=function(k){return function(_){this[k]=+_}},N=[/[+-]\d\d:?(\d\d)?|Z/,function(k){(this.zone||(this.zone={})).offset=function(_){if(!_||_==="Z")return 0;var L=_.match(/([+-]|\d\d)/g),Y=60*L[1]+(+L[2]||0);return Y===0?0:L[0]==="+"?-Y:Y}(k)}],g=function(k){var _=W[k];return _&&(_.indexOf?_:_.s.concat(_.f))},fe=function(k,_){var L,Y=W.meridiem;if(Y){for(var j=1;j<=24;j+=1)if(k.indexOf(Y(j,0,_))>-1){L=j>12;break}}else L=k===(_?"pm":"PM");return L},Ae={A:[I,function(k){this.afternoon=fe(k,!1)}],a:[I,function(k){this.afternoon=fe(k,!0)}],Q:[he,function(k){this.month=3*(k-1)+1}],S:[he,function(k){this.milliseconds=100*+k}],SS:[M,function(k){this.milliseconds=10*+k}],SSS:[/\d{3}/,function(k){this.milliseconds=+k}],s:[s,A("seconds")],ss:[s,A("seconds")],m:[s,A("minutes")],mm:[s,A("minutes")],H:[s,A("hours")],h:[s,A("hours")],HH:[s,A("hours")],hh:[s,A("hours")],D:[s,A("day")],DD:[M,A("day")],Do:[I,function(k){var _=W.ordinal,L=k.match(/\d+/);if(this.day=L[0],_)for(var Y=1;Y<=31;Y+=1)_(Y).replace(/\[|\]/g,"")===k&&(this.day=Y)}],w:[s,A("week")],ww:[M,A("week")],M:[s,A("month")],MM:[M,A("month")],MMM:[I,function(k){var _=g("months"),L=(g("monthsShort")||_.map(function(Y){return Y.slice(0,3)})).indexOf(k)+1;if(L<1)throw new Error;this.month=L%12||L}],MMMM:[I,function(k){var _=g("months").indexOf(k)+1;if(_<1)throw new Error;this.month=_%12||_}],Y:[/[+-]?\d+/,A("year")],YY:[M,function(k){this.year=V(k)}],YYYY:[/\d{4}/,A("year")],Z:N,ZZ:N};function De(k){var _,L;_=k,L=W&&W.formats;for(var Y=(k=_.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(oe,le,$){var z=$&&$.toUpperCase();return le||L[$]||ae[$]||L[z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(ee,te,re){return te||re.slice(1)})})).match(P),j=Y.length,G=0;G<j;G+=1){var ke=Y[G],ce=Ae[ke],X=ce&&ce[0],U=ce&&ce[1];Y[G]=U?{regex:X,parser:U}:ke.replace(/^\[|\]$/g,"")}return function(oe){for(var le={},$=0,z=0;$<j;$+=1){var ee=Y[$];if(typeof ee=="string")z+=ee.length;else{var te=ee.regex,re=ee.parser,pe=oe.slice(z),be=te.exec(pe)[0];re.call(le,be),oe=oe.replace(be,"")}}return function(me){var We=me.afternoon;if(We!==void 0){var Q=me.hours;We?Q<12&&(me.hours+=12):Q===12&&(me.hours=0),delete me.afternoon}}(le),le}}return function(k,_,L){L.p.customParseFormat=!0,k&&k.parseTwoDigitYear&&(V=k.parseTwoDigitYear);var Y=_.prototype,j=Y.parse;Y.parse=function(G){var ke=G.date,ce=G.utc,X=G.args;this.$u=ce;var U=X[1];if(typeof U=="string"){var oe=X[2]===!0,le=X[3]===!0,$=oe||le,z=X[2];le&&(z=X[2]),W=this.$locale(),!oe&&z&&(W=L.Ls[z]),this.$d=function(pe,be,me,We){try{if(["x","X"].indexOf(be)>-1)return new Date((be==="X"?1e3:1)*pe);var Q=De(be)(pe),Le=Q.year,Ee=Q.month,tt=Q.day,rt=Q.hours,st=Q.minutes,it=Q.seconds,nt=Q.milliseconds,Xe=Q.zone,$e=Q.week,Ye=new Date,Fe=tt||(Le||Ee?1:Ye.getDate()),Oe=Le||Ye.getFullYear(),Ce=0;Le&&!Ee||(Ce=Ee>0?Ee-1:Ye.getMonth());var Se,Pe=rt||0,Ve=st||0,Be=it||0,Re=nt||0;return Xe?new Date(Date.UTC(Oe,Ce,Fe,Pe,Ve,Be,Re+60*Xe.offset*1e3)):me?new Date(Date.UTC(Oe,Ce,Fe,Pe,Ve,Be,Re)):(Se=new Date(Oe,Ce,Fe,Pe,Ve,Be,Re),$e&&(Se=We(Se).week($e).toDate()),Se)}catch(mt){return new Date("")}}(ke,U,ce,L),this.init(),z&&z!==!0&&(this.$L=this.locale(z).$L),$&&ke!=this.format(U)&&(this.$d=new Date("")),W={}}else if(U instanceof Array)for(var ee=U.length,te=1;te<=ee;te+=1){X[1]=U[te-1];var re=L.apply(this,X);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}te===ee&&(this.$d=new Date(""))}else j.call(this,G)}}})},88462:function(we){(function(ae,P){we.exports=P()})(this,function(){"use strict";var ae="day";return function(P,he,M){var s=function(V){return V.add(4-V.isoWeekday(),ae)},I=he.prototype;I.isoWeekYear=function(){return s(this).year()},I.isoWeek=function(V){if(!this.$utils().u(V))return this.add(7*(V-this.isoWeek()),ae);var A,N,g,fe,Ae=s(this),De=(A=this.isoWeekYear(),N=this.$u,g=(N?M.utc:M)().year(A).startOf("year"),fe=4-g.isoWeekday(),g.isoWeekday()>4&&(fe+=7),g.add(fe,ae));return Ae.diff(De,"week")+1},I.isoWeekday=function(V){return this.$utils().u(V)?this.day()||7:this.day(this.day()%7?V:V-7)};var W=I.startOf;I.startOf=function(V,A){var N=this.$utils(),g=!!N.u(A)||A;return N.p(V)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):W.bind(this)(V,A)}}})},74950:function(we,ae,P){"use strict";P.d(ae,{diagram:function(){return Zt}});var he=P(68072),M=P(28081),s=P(99177),I=P(80357),W=P(17888),V=P(88462),A=P(80998),N=P(76639),g=P(17135),fe=function(){var e=(0,s.eW)(function(w,l,d,f){for(d=d||{},f=w.length;f--;d[w[f]]=l);return d},"o"),i=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],o=[1,27],a=[1,28],m=[1,29],h=[1,30],J=[1,31],ue=[1,32],de=[1,33],O=[1,34],Z=[1,9],ge=[1,10],se=[1,11],ie=[1,12],E=[1,13],ze=[1,14],Ne=[1,15],Ue=[1,16],je=[1,19],Ge=[1,20],Ze=[1,21],He=[1,22],Ke=[1,23],y=[1,25],x=[1,35],b={trace:(0,s.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,s.eW)(function(l,d,f,u,p,t,c){var r=t.length-1;switch(p){case 1:return t[r-1];case 2:this.$=[];break;case 3:t[r-1].push(t[r]),this.$=t[r-1];break;case 4:case 5:this.$=t[r];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(t[r].substr(11)),this.$=t[r].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=t[r].substr(18);break;case 19:u.TopAxis(),this.$=t[r].substr(8);break;case 20:u.setAxisFormat(t[r].substr(11)),this.$=t[r].substr(11);break;case 21:u.setTickInterval(t[r].substr(13)),this.$=t[r].substr(13);break;case 22:u.setExcludes(t[r].substr(9)),this.$=t[r].substr(9);break;case 23:u.setIncludes(t[r].substr(9)),this.$=t[r].substr(9);break;case 24:u.setTodayMarker(t[r].substr(12)),this.$=t[r].substr(12);break;case 27:u.setDiagramTitle(t[r].substr(6)),this.$=t[r].substr(6);break;case 28:this.$=t[r].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=t[r].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(t[r].substr(8)),this.$=t[r].substr(8);break;case 33:u.addTask(t[r-1],t[r]),this.$="task";break;case 34:this.$=t[r-1],u.setClickEvent(t[r-1],t[r],null);break;case 35:this.$=t[r-2],u.setClickEvent(t[r-2],t[r-1],t[r]);break;case 36:this.$=t[r-2],u.setClickEvent(t[r-2],t[r-1],null),u.setLink(t[r-2],t[r]);break;case 37:this.$=t[r-3],u.setClickEvent(t[r-3],t[r-2],t[r-1]),u.setLink(t[r-3],t[r]);break;case 38:this.$=t[r-2],u.setClickEvent(t[r-2],t[r],null),u.setLink(t[r-2],t[r-1]);break;case 39:this.$=t[r-3],u.setClickEvent(t[r-3],t[r-1],t[r]),u.setLink(t[r-3],t[r-2]);break;case 40:this.$=t[r-1],u.setLink(t[r-1],t[r]);break;case 41:case 47:this.$=t[r-1]+" "+t[r];break;case 42:case 43:case 45:this.$=t[r-2]+" "+t[r-1]+" "+t[r];break;case 44:case 46:this.$=t[r-3]+" "+t[r-2]+" "+t[r-1]+" "+t[r];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(i,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:o,14:a,15:m,16:h,17:J,18:ue,19:18,20:de,21:O,22:Z,23:ge,24:se,25:ie,26:E,27:ze,28:Ne,29:Ue,30:je,31:Ge,33:Ze,35:He,36:Ke,37:24,38:y,40:x},e(i,[2,7],{1:[2,1]}),e(i,[2,3]),{9:36,11:17,12:n,13:o,14:a,15:m,16:h,17:J,18:ue,19:18,20:de,21:O,22:Z,23:ge,24:se,25:ie,26:E,27:ze,28:Ne,29:Ue,30:je,31:Ge,33:Ze,35:He,36:Ke,37:24,38:y,40:x},e(i,[2,5]),e(i,[2,6]),e(i,[2,17]),e(i,[2,18]),e(i,[2,19]),e(i,[2,20]),e(i,[2,21]),e(i,[2,22]),e(i,[2,23]),e(i,[2,24]),e(i,[2,25]),e(i,[2,26]),e(i,[2,27]),{32:[1,37]},{34:[1,38]},e(i,[2,30]),e(i,[2,31]),e(i,[2,32]),{39:[1,39]},e(i,[2,8]),e(i,[2,9]),e(i,[2,10]),e(i,[2,11]),e(i,[2,12]),e(i,[2,13]),e(i,[2,14]),e(i,[2,15]),e(i,[2,16]),{41:[1,40],43:[1,41]},e(i,[2,4]),e(i,[2,28]),e(i,[2,29]),e(i,[2,33]),e(i,[2,34],{42:[1,42],43:[1,43]}),e(i,[2,40],{41:[1,44]}),e(i,[2,35],{43:[1,45]}),e(i,[2,36]),e(i,[2,38],{42:[1,46]}),e(i,[2,37]),e(i,[2,39])],defaultActions:{},parseError:(0,s.eW)(function(l,d){if(d.recoverable)this.trace(l);else{var f=new Error(l);throw f.hash=d,f}},"parseError"),parse:(0,s.eW)(function(l){var d=this,f=[0],u=[],p=[null],t=[],c=this.table,r="",S=0,D=0,C=0,H=2,F=1,lt=t.slice.call(arguments,1),B=Object.create(this.lexer),xe={yy:{}};for(var ut in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ut)&&(xe.yy[ut]=this.yy[ut]);B.setInput(l,xe.yy),xe.yy.lexer=B,xe.yy.parser=this,typeof B.yylloc=="undefined"&&(B.yylloc={});var dt=B.yylloc;t.push(dt);var Ht=B.options&&B.options.ranges;typeof xe.yy.parseError=="function"?this.parseError=xe.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Kt(q){f.length=f.length-2*q,p.length=p.length-q,t.length=t.length-q}(0,s.eW)(Kt,"popStack");function Dt(){var q;return q=u.pop()||B.lex()||F,typeof q!="number"&&(q instanceof Array&&(u=q,q=u.pop()),q=d.symbols_[q]||q),q}(0,s.eW)(Dt,"lex");for(var K,ft,_e,ne,Xt,ht,Ie={},qe,ve,Wt,et;;){if(_e=f[f.length-1],this.defaultActions[_e]?ne=this.defaultActions[_e]:((K===null||typeof K=="undefined")&&(K=Dt()),ne=c[_e]&&c[_e][K]),typeof ne=="undefined"||!ne.length||!ne[0]){var kt="";et=[];for(qe in c[_e])this.terminals_[qe]&&qe>H&&et.push("'"+this.terminals_[qe]+"'");B.showPosition?kt="Parse error on line "+(S+1)+`:
`+B.showPosition()+`
Expecting `+et.join(", ")+", got '"+(this.terminals_[K]||K)+"'":kt="Parse error on line "+(S+1)+": Unexpected "+(K==F?"end of input":"'"+(this.terminals_[K]||K)+"'"),this.parseError(kt,{text:B.match,token:this.terminals_[K]||K,line:B.yylineno,loc:dt,expected:et})}if(ne[0]instanceof Array&&ne.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_e+", token: "+K);switch(ne[0]){case 1:f.push(K),p.push(B.yytext),t.push(B.yylloc),f.push(ne[1]),K=null,ft?(K=ft,ft=null):(D=B.yyleng,r=B.yytext,S=B.yylineno,dt=B.yylloc,C>0&&C--);break;case 2:if(ve=this.productions_[ne[1]][1],Ie.$=p[p.length-ve],Ie._$={first_line:t[t.length-(ve||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(ve||1)].first_column,last_column:t[t.length-1].last_column},Ht&&(Ie._$.range=[t[t.length-(ve||1)].range[0],t[t.length-1].range[1]]),ht=this.performAction.apply(Ie,[r,D,S,xe.yy,ne[1],p,t].concat(lt)),typeof ht!="undefined")return ht;ve&&(f=f.slice(0,-1*ve*2),p=p.slice(0,-1*ve),t=t.slice(0,-1*ve)),f.push(this.productions_[ne[1]][0]),p.push(Ie.$),t.push(Ie._$),Wt=c[f[f.length-2]][f[f.length-1]],f.push(Wt);break;case 3:return!0}}return!0},"parse")},T=function(){var w={EOF:1,parseError:(0,s.eW)(function(d,f){if(this.yy.parser)this.yy.parser.parseError(d,f);else throw new Error(d)},"parseError"),setInput:(0,s.eW)(function(l,d){return this.yy=d||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,s.eW)(function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var d=l.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},"input"),unput:(0,s.eW)(function(l){var d=l.length,f=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===u.length?this.yylloc.first_column:0)+u[u.length-f.length].length-f[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:(0,s.eW)(function(){return this._more=!0,this},"more"),reject:(0,s.eW)(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:(0,s.eW)(function(l){this.unput(this.match.slice(l))},"less"),pastInput:(0,s.eW)(function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,s.eW)(function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,s.eW)(function(){var l=this.pastInput(),d=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:(0,s.eW)(function(l,d){var f,u,p;if(this.options.backtrack_lexer&&(p={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(p.yylloc.range=this.yylloc.range.slice(0))),u=l[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],f=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var t in p)this[t]=p[t];return!1}return!1},"test_match"),next:(0,s.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,d,f,u;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),t=0;t<p.length;t++)if(f=this._input.match(this.rules[p[t]]),f&&(!d||f[0].length>d[0].length)){if(d=f,u=t,this.options.backtrack_lexer){if(l=this.test_match(f,p[t]),l!==!1)return l;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(l=this.test_match(d,p[u]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,s.eW)(function(){var d=this.next();return d||this.lex()},"lex"),begin:(0,s.eW)(function(d){this.conditionStack.push(d)},"begin"),popState:(0,s.eW)(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,s.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,s.eW)(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:(0,s.eW)(function(d){this.begin(d)},"pushState"),stateStackSize:(0,s.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,s.eW)(function(d,f,u,p){var t=p;switch(u){case 0:return this.begin("open_directive"),"open_directive";break;case 1:return this.begin("acc_title"),31;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),33;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return w}();b.lexer=T;function v(){this.yy={}}return(0,s.eW)(v,"Parser"),v.prototype=b,b.Parser=v,new v}();fe.parser=fe;var Ae=fe;W.extend(V),W.extend(A),W.extend(N);var De={friday:5,saturday:6},k="",_="",L=void 0,Y="",j=[],G=[],ke=new Map,ce=[],X=[],U="",oe="",le=["active","done","crit","milestone","vert"],$=[],z=!1,ee=!1,te="sunday",re="saturday",pe=0,be=(0,s.eW)(function(){ce=[],X=[],U="",$=[],Qe=0,ct=void 0,Je=void 0,R=[],k="",_="",oe="",L=void 0,Y="",j=[],G=[],z=!1,ee=!1,pe=0,ke=new Map,(0,M.ZH)(),te="sunday",re="saturday"},"clear"),me=(0,s.eW)(function(e){_=e},"setAxisFormat"),We=(0,s.eW)(function(){return _},"getAxisFormat"),Q=(0,s.eW)(function(e){L=e},"setTickInterval"),Le=(0,s.eW)(function(){return L},"getTickInterval"),Ee=(0,s.eW)(function(e){Y=e},"setTodayMarker"),tt=(0,s.eW)(function(){return Y},"getTodayMarker"),rt=(0,s.eW)(function(e){k=e},"setDateFormat"),st=(0,s.eW)(function(){z=!0},"enableInclusiveEndDates"),it=(0,s.eW)(function(){return z},"endDatesAreInclusive"),nt=(0,s.eW)(function(){ee=!0},"enableTopAxis"),Xe=(0,s.eW)(function(){return ee},"topAxisEnabled"),$e=(0,s.eW)(function(e){oe=e},"setDisplayMode"),Ye=(0,s.eW)(function(){return oe},"getDisplayMode"),Fe=(0,s.eW)(function(){return k},"getDateFormat"),Oe=(0,s.eW)(function(e){j=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),Ce=(0,s.eW)(function(){return j},"getIncludes"),Se=(0,s.eW)(function(e){G=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),Pe=(0,s.eW)(function(){return G},"getExcludes"),Ve=(0,s.eW)(function(){return ke},"getLinks"),Be=(0,s.eW)(function(e){U=e,ce.push(e)},"addSection"),Re=(0,s.eW)(function(){return ce},"getSections"),mt=(0,s.eW)(function(){let e=Tt();const i=10;let n=0;for(;!e&&n<i;)e=Tt(),n++;return X=R,X},"getTasks"),yt=(0,s.eW)(function(e,i,n,o){const a=e.format(i.trim()),m=e.format("YYYY-MM-DD");return o.includes(a)||o.includes(m)?!1:n.includes("weekends")&&(e.isoWeekday()===De[re]||e.isoWeekday()===De[re]+1)||n.includes(e.format("dddd").toLowerCase())?!0:n.includes(a)||n.includes(m)},"isInvalidDate"),Et=(0,s.eW)(function(e){te=e},"setWeekday"),Ct=(0,s.eW)(function(){return te},"getWeekday"),St=(0,s.eW)(function(e){re=e},"setWeekend"),gt=(0,s.eW)(function(e,i,n,o){if(!n.length||e.manualEndTime)return;let a;e.startTime instanceof Date?a=W(e.startTime):a=W(e.startTime,i,!0),a=a.add(1,"d");let m;e.endTime instanceof Date?m=W(e.endTime):m=W(e.endTime,i,!0);const[h,J]=Mt(a,m,i,n,o);e.endTime=h.toDate(),e.renderEndTime=J},"checkTaskDates"),Mt=(0,s.eW)(function(e,i,n,o,a){let m=!1,h=null;for(;e<=i;)m||(h=i.toDate()),m=yt(e,n,o,a),m&&(i=i.add(1,"d")),e=e.add(1,"d");return[i,h]},"fixTaskDates"),at=(0,s.eW)(function(e,i,n){n=n.trim();const a=new RegExp("^after\\s+(?<ids>[\\d\\w- ]+)").exec(n);if(a!==null){let h=null;for(const ue of a.groups.ids.split(" ")){let de=Te(ue);de!==void 0&&(!h||de.endTime>h.endTime)&&(h=de)}if(h)return h.endTime;const J=new Date;return J.setHours(0,0,0,0),J}let m=W(n,i.trim(),!0);if(m.isValid())return m.toDate();{s.cM.debug("Invalid date:"+n),s.cM.debug("With date format:"+i.trim());const h=new Date(n);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+n);return h}},"getStartDate"),vt=(0,s.eW)(function(e){const i=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return i!==null?[Number.parseFloat(i[1]),i[2]]:[NaN,"ms"]},"parseDuration"),pt=(0,s.eW)(function(e,i,n,o=!1){n=n.trim();const m=new RegExp("^until\\s+(?<ids>[\\d\\w- ]+)").exec(n);if(m!==null){let O=null;for(const ge of m.groups.ids.split(" ")){let se=Te(ge);se!==void 0&&(!O||se.startTime<O.startTime)&&(O=se)}if(O)return O.startTime;const Z=new Date;return Z.setHours(0,0,0,0),Z}let h=W(n,i.trim(),!0);if(h.isValid())return o&&(h=h.add(1,"d")),h.toDate();let J=W(e);const[ue,de]=vt(n);if(!Number.isNaN(ue)){const O=J.add(ue,de);O.isValid()&&(J=O)}return J.toDate()},"getEndDate"),Qe=0,Me=(0,s.eW)(function(e){return e===void 0?(Qe=Qe+1,"task"+Qe):e},"parseId"),It=(0,s.eW)(function(e,i){let n;i.substr(0,1)===":"?n=i.substr(1,i.length):n=i;const o=n.split(","),a={};ot(o,a,le);for(let h=0;h<o.length;h++)o[h]=o[h].trim();let m="";switch(o.length){case 1:a.id=Me(),a.startTime=e.endTime,m=o[0];break;case 2:a.id=Me(),a.startTime=at(void 0,k,o[0]),m=o[1];break;case 3:a.id=Me(o[0]),a.startTime=at(void 0,k,o[1]),m=o[2];break;default:}return m&&(a.endTime=pt(a.startTime,k,m,z),a.manualEndTime=W(m,"YYYY-MM-DD",!0).isValid(),gt(a,k,G,j)),a},"compileData"),At=(0,s.eW)(function(e,i){let n;i.substr(0,1)===":"?n=i.substr(1,i.length):n=i;const o=n.split(","),a={};ot(o,a,le);for(let m=0;m<o.length;m++)o[m]=o[m].trim();switch(o.length){case 1:a.id=Me(),a.startTime={type:"prevTaskEnd",id:e},a.endTime={data:o[0]};break;case 2:a.id=Me(),a.startTime={type:"getStartDate",startData:o[0]},a.endTime={data:o[1]};break;case 3:a.id=Me(o[0]),a.startTime={type:"getStartDate",startData:o[1]},a.endTime={data:o[2]};break;default:}return a},"parseData"),ct,Je,R=[],bt={},Lt=(0,s.eW)(function(e,i){const n={section:U,type:U,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:i},task:e,classes:[]},o=At(Je,i);n.raw.startTime=o.startTime,n.raw.endTime=o.endTime,n.id=o.id,n.prevTaskId=Je,n.active=o.active,n.done=o.done,n.crit=o.crit,n.milestone=o.milestone,n.vert=o.vert,n.order=pe,pe++;const a=R.push(n);Je=n.id,bt[n.id]=a-1},"addTask"),Te=(0,s.eW)(function(e){const i=bt[e];return R[i]},"findTaskById"),Yt=(0,s.eW)(function(e,i){const n={section:U,type:U,description:e,task:e,classes:[]},o=It(ct,i);n.startTime=o.startTime,n.endTime=o.endTime,n.id=o.id,n.active=o.active,n.done=o.done,n.crit=o.crit,n.milestone=o.milestone,n.vert=o.vert,ct=n,X.push(n)},"addTaskOrg"),Tt=(0,s.eW)(function(){const e=(0,s.eW)(function(n){const o=R[n];let a="";switch(R[n].raw.startTime.type){case"prevTaskEnd":{const m=Te(o.prevTaskId);o.startTime=m.endTime;break}case"getStartDate":a=at(void 0,k,R[n].raw.startTime.startData),a&&(R[n].startTime=a);break}return R[n].startTime&&(R[n].endTime=pt(R[n].startTime,k,R[n].raw.endTime.data,z),R[n].endTime&&(R[n].processed=!0,R[n].manualEndTime=W(R[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),gt(R[n],k,G,j))),R[n].processed},"compileTask");let i=!0;for(const[n,o]of R.entries())e(n),i=i&&o.processed;return i},"compileTasks"),Ft=(0,s.eW)(function(e,i){let n=i;(0,M.nV)().securityLevel!=="loose"&&(n=(0,I.N)(i)),e.split(",").forEach(function(o){Te(o)!==void 0&&(_t(o,()=>{window.open(n,"_self")}),ke.set(o,n))}),xt(e,"clickable")},"setLink"),xt=(0,s.eW)(function(e,i){e.split(",").forEach(function(n){let o=Te(n);o!==void 0&&o.classes.push(i)})},"setClass"),Ot=(0,s.eW)(function(e,i,n){if((0,M.nV)().securityLevel!=="loose"||i===void 0)return;let o=[];if(typeof n=="string"){o=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let m=0;m<o.length;m++){let h=o[m].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),o[m]=h}}o.length===0&&o.push(e),Te(e)!==void 0&&_t(e,()=>{he.w8.runFunc(i,...o)})},"setClickFun"),_t=(0,s.eW)(function(e,i){$.push(function(){const n=document.querySelector(`[id="${e}"]`);n!==null&&n.addEventListener("click",function(){i()})},function(){const n=document.querySelector(`[id="${e}-text"]`);n!==null&&n.addEventListener("click",function(){i()})})},"pushFun"),Pt=(0,s.eW)(function(e,i,n){e.split(",").forEach(function(o){Ot(o,i,n)}),xt(e,"clickable")},"setClickEvent"),Vt=(0,s.eW)(function(e){$.forEach(function(i){i(e)})},"bindFunctions"),Bt={getConfig:(0,s.eW)(()=>(0,M.nV)().gantt,"getConfig"),clear:be,setDateFormat:rt,getDateFormat:Fe,enableInclusiveEndDates:st,endDatesAreInclusive:it,enableTopAxis:nt,topAxisEnabled:Xe,setAxisFormat:me,getAxisFormat:We,setTickInterval:Q,getTickInterval:Le,setTodayMarker:Ee,getTodayMarker:tt,setAccTitle:M.GN,getAccTitle:M.eu,setDiagramTitle:M.g2,getDiagramTitle:M.Kr,setDisplayMode:$e,getDisplayMode:Ye,setAccDescription:M.U$,getAccDescription:M.Mx,addSection:Be,getSections:Re,getTasks:mt,addTask:Lt,findTaskById:Te,addTaskOrg:Yt,setIncludes:Oe,getIncludes:Ce,setExcludes:Se,getExcludes:Pe,setClickEvent:Pt,setLink:Ft,getLinks:Ve,bindFunctions:Vt,parseDuration:vt,isInvalidDate:yt,setWeekday:Et,getWeekday:Ct,setWeekend:St};function ot(e,i,n){let o=!0;for(;o;)o=!1,n.forEach(function(a){const m="^\\s*"+a+"\\s*$",h=new RegExp(m);e[0].match(h)&&(i[a]=!0,e.shift(1),o=!0)})}(0,s.eW)(ot,"getTaskTags");var Rt=(0,s.eW)(function(){s.cM.debug("Something is calling, setConf, remove the call")},"setConf"),wt={monday:g.Ox9,tuesday:g.YDX,wednesday:g.EFj,thursday:g.Igq,friday:g.y2j,saturday:g.LqH,sunday:g.Zyz},zt=(0,s.eW)((e,i)=>{let n=[...e].map(()=>-1/0),o=[...e].sort((m,h)=>m.startTime-h.startTime||m.order-h.order),a=0;for(const m of o)for(let h=0;h<n.length;h++)if(m.startTime>=n[h]){n[h]=m.endTime,m.order=h+i,h>a&&(a=h);break}return a},"getMaxIntersections"),ye,Nt=(0,s.eW)(function(e,i,n,o){const a=(0,M.nV)().gantt,m=(0,M.nV)().securityLevel;let h;m==="sandbox"&&(h=(0,g.Ys)("#i"+i));const J=m==="sandbox"?(0,g.Ys)(h.nodes()[0].contentDocument.body):(0,g.Ys)("body"),ue=m==="sandbox"?h.nodes()[0].contentDocument:document,de=ue.getElementById(i);ye=de.parentElement.offsetWidth,ye===void 0&&(ye=1200),a.useWidth!==void 0&&(ye=a.useWidth);const O=o.db.getTasks();let Z=[];for(const y of O)Z.push(y.type);Z=Ke(Z);const ge={};let se=2*a.topPadding;if(o.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const y={};for(const b of O)y[b.section]===void 0?y[b.section]=[b]:y[b.section].push(b);let x=0;for(const b of Object.keys(y)){const T=zt(y[b],x)+1;x+=T,se+=T*(a.barHeight+a.barGap),ge[b]=T}}else{se+=O.length*(a.barHeight+a.barGap);for(const y of Z)ge[y]=O.filter(x=>x.type===y).length}de.setAttribute("viewBox","0 0 "+ye+" "+se);const ie=J.select(`[id="${i}"]`),E=(0,g.Xf)().domain([(0,g.VV$)(O,function(y){return y.startTime}),(0,g.Fp7)(O,function(y){return y.endTime})]).rangeRound([0,ye-a.leftPadding-a.rightPadding]);function ze(y,x){const b=y.startTime,T=x.startTime;let v=0;return b>T?v=1:b<T&&(v=-1),v}(0,s.eW)(ze,"taskCompare"),O.sort(ze),Ne(O,ye,se),(0,M.v2)(ie,se,ye,a.useMaxWidth),ie.append("text").text(o.db.getDiagramTitle()).attr("x",ye/2).attr("y",a.titleTopMargin).attr("class","titleText");function Ne(y,x,b){const T=a.barHeight,v=T+a.barGap,w=a.topPadding,l=a.leftPadding,d=(0,g.BYU)().domain([0,Z.length]).range(["#00B9FA","#F95002"]).interpolate(g.JHv);je(v,w,l,x,b,y,o.db.getExcludes(),o.db.getIncludes()),Ge(l,w,x,b),Ue(y,v,w,l,T,d,x,b),Ze(v,w,l,T,d),He(l,w,x,b)}(0,s.eW)(Ne,"makeGantt");function Ue(y,x,b,T,v,w,l){y.sort((c,r)=>c.vert===r.vert?0:c.vert?1:-1);const f=[...new Set(y.map(c=>c.order))].map(c=>y.find(r=>r.order===c));ie.append("g").selectAll("rect").data(f).enter().append("rect").attr("x",0).attr("y",function(c,r){return r=c.order,r*x+b-2}).attr("width",function(){return l-a.rightPadding/2}).attr("height",x).attr("class",function(c){for(const[r,S]of Z.entries())if(c.type===S)return"section section"+r%a.numberSectionStyles;return"section section0"}).enter();const u=ie.append("g").selectAll("rect").data(y).enter(),p=o.db.getLinks();if(u.append("rect").attr("id",function(c){return c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?E(c.startTime)+T+.5*(E(c.endTime)-E(c.startTime))-.5*v:E(c.startTime)+T}).attr("y",function(c,r){return r=c.order,c.vert?a.gridLineStartPadding:r*x+b}).attr("width",function(c){return c.milestone?v:c.vert?.08*v:E(c.renderEndTime||c.endTime)-E(c.startTime)}).attr("height",function(c){return c.vert?O.length*(a.barHeight+a.barGap)+a.barHeight*2:v}).attr("transform-origin",function(c,r){return r=c.order,(E(c.startTime)+T+.5*(E(c.endTime)-E(c.startTime))).toString()+"px "+(r*x+b+.5*v).toString()+"px"}).attr("class",function(c){const r="task";let S="";c.classes.length>0&&(S=c.classes.join(" "));let D=0;for(const[H,F]of Z.entries())c.type===F&&(D=H%a.numberSectionStyles);let C="";return c.active?c.crit?C+=" activeCrit":C=" active":c.done?c.crit?C=" doneCrit":C=" done":c.crit&&(C+=" crit"),C.length===0&&(C=" task"),c.milestone&&(C=" milestone "+C),c.vert&&(C=" vert "+C),C+=D,C+=" "+S,r+C}),u.append("text").attr("id",function(c){return c.id+"-text"}).text(function(c){return c.task}).attr("font-size",a.fontSize).attr("x",function(c){let r=E(c.startTime),S=E(c.renderEndTime||c.endTime);if(c.milestone&&(r+=.5*(E(c.endTime)-E(c.startTime))-.5*v,S=r+v),c.vert)return E(c.startTime)+T;const D=this.getBBox().width;return D>S-r?S+D+1.5*a.leftPadding>l?r+T-5:S+T+5:(S-r)/2+r+T}).attr("y",function(c,r){return c.vert?a.gridLineStartPadding+O.length*(a.barHeight+a.barGap)+60:(r=c.order,r*x+a.barHeight/2+(a.fontSize/2-2)+b)}).attr("text-height",v).attr("class",function(c){const r=E(c.startTime);let S=E(c.endTime);c.milestone&&(S=r+v);const D=this.getBBox().width;let C="";c.classes.length>0&&(C=c.classes.join(" "));let H=0;for(const[lt,B]of Z.entries())c.type===B&&(H=lt%a.numberSectionStyles);let F="";return c.active&&(c.crit?F="activeCritText"+H:F="activeText"+H),c.done?c.crit?F=F+" doneCritText"+H:F=F+" doneText"+H:c.crit&&(F=F+" critText"+H),c.milestone&&(F+=" milestoneText"),c.vert&&(F+=" vertText"),D>S-r?S+D+1.5*a.leftPadding>l?C+" taskTextOutsideLeft taskTextOutside"+H+" "+F:C+" taskTextOutsideRight taskTextOutside"+H+" "+F+" width-"+D:C+" taskText taskText"+H+" "+F+" width-"+D}),(0,M.nV)().securityLevel==="sandbox"){let c;c=(0,g.Ys)("#i"+i);const r=c.nodes()[0].contentDocument;u.filter(function(S){return p.has(S.id)}).each(function(S){var D=r.querySelector("#"+S.id),C=r.querySelector("#"+S.id+"-text");const H=D.parentNode;var F=r.createElement("a");F.setAttribute("xlink:href",p.get(S.id)),F.setAttribute("target","_top"),H.appendChild(F),F.appendChild(D),F.appendChild(C)})}}(0,s.eW)(Ue,"drawRects");function je(y,x,b,T,v,w,l,d){if(l.length===0&&d.length===0)return;let f,u;for(const{startTime:D,endTime:C}of w)(f===void 0||D<f)&&(f=D),(u===void 0||C>u)&&(u=C);if(!f||!u)return;if(W(u).diff(W(f),"year")>5){s.cM.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const p=o.db.getDateFormat(),t=[];let c=null,r=W(f);for(;r.valueOf()<=u;)o.db.isInvalidDate(r,p,l,d)?c?c.end=r:c={start:r,end:r}:c&&(t.push(c),c=null),r=r.add(1,"d");ie.append("g").selectAll("rect").data(t).enter().append("rect").attr("id",D=>"exclude-"+D.start.format("YYYY-MM-DD")).attr("x",D=>E(D.start.startOf("day"))+b).attr("y",a.gridLineStartPadding).attr("width",D=>E(D.end.endOf("day"))-E(D.start.startOf("day"))).attr("height",v-x-a.gridLineStartPadding).attr("transform-origin",function(D,C){return(E(D.start)+b+.5*(E(D.end)-E(D.start))).toString()+"px "+(C*y+.5*v).toString()+"px"}).attr("class","exclude-range")}(0,s.eW)(je,"drawExcludeDays");function Ge(y,x,b,T){var p;const v=o.db.getDateFormat(),w=o.db.getAxisFormat();let l;w?l=w:v==="D"?l="%d":l=(p=a.axisFormat)!=null?p:"%Y-%m-%d";let d=(0,g.LLu)(E).tickSize(-T+x+a.gridLineStartPadding).tickFormat((0,g.i$Z)(l));const u=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(o.db.getTickInterval()||a.tickInterval);if(u!==null){const t=u[1],c=u[2],r=o.db.getWeekday()||a.weekday;switch(c){case"millisecond":d.ticks(g.U8T.every(t));break;case"second":d.ticks(g.S1K.every(t));break;case"minute":d.ticks(g.Z_i.every(t));break;case"hour":d.ticks(g.WQD.every(t));break;case"day":d.ticks(g.rr1.every(t));break;case"week":d.ticks(wt[r].every(t));break;case"month":d.ticks(g.F0B.every(t));break}}if(ie.append("g").attr("class","grid").attr("transform","translate("+y+", "+(T-50)+")").call(d).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),o.db.topAxisEnabled()||a.topAxis){let t=(0,g.F5q)(E).tickSize(-T+x+a.gridLineStartPadding).tickFormat((0,g.i$Z)(l));if(u!==null){const c=u[1],r=u[2],S=o.db.getWeekday()||a.weekday;switch(r){case"millisecond":t.ticks(g.U8T.every(c));break;case"second":t.ticks(g.S1K.every(c));break;case"minute":t.ticks(g.Z_i.every(c));break;case"hour":t.ticks(g.WQD.every(c));break;case"day":t.ticks(g.rr1.every(c));break;case"week":t.ticks(wt[S].every(c));break;case"month":t.ticks(g.F0B.every(c));break}}ie.append("g").attr("class","grid").attr("transform","translate("+y+", "+x+")").call(t).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(0,s.eW)(Ge,"makeGrid");function Ze(y,x){let b=0;const T=Object.keys(ge).map(v=>[v,ge[v]]);ie.append("g").selectAll("text").data(T).enter().append(function(v){const w=v[0].split(M.SY.lineBreakRegex),l=-(w.length-1)/2,d=ue.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("dy",l+"em");for(const[f,u]of w.entries()){const p=ue.createElementNS("http://www.w3.org/2000/svg","tspan");p.setAttribute("alignment-baseline","central"),p.setAttribute("x","10"),f>0&&p.setAttribute("dy","1em"),p.textContent=u,d.appendChild(p)}return d}).attr("x",10).attr("y",function(v,w){if(w>0)for(let l=0;l<w;l++)return b+=T[w-1][1],v[1]*y/2+b*y+x;else return v[1]*y/2+x}).attr("font-size",a.sectionFontSize).attr("class",function(v){for(const[w,l]of Z.entries())if(v[0]===l)return"sectionTitle sectionTitle"+w%a.numberSectionStyles;return"sectionTitle"})}(0,s.eW)(Ze,"vertLabels");function He(y,x,b,T){const v=o.db.getTodayMarker();if(v==="off")return;const w=ie.append("g").attr("class","today"),l=new Date,d=w.append("line");d.attr("x1",E(l)+y).attr("x2",E(l)+y).attr("y1",a.titleTopMargin).attr("y2",T-a.titleTopMargin).attr("class","today"),v!==""&&d.attr("style",v.replace(/,/g,";"))}(0,s.eW)(He,"drawToday");function Ke(y){const x={},b=[];for(let T=0,v=y.length;T<v;++T)Object.prototype.hasOwnProperty.call(x,y[T])||(x[y[T]]=!0,b.push(y[T]));return b}(0,s.eW)(Ke,"checkUnique")},"draw"),Ut={setConf:Rt,draw:Nt},jt=(0,s.eW)(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
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
    font-family: ${e.fontFamily};
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
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
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

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
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
    font-family: ${e.fontFamily};
  }
`,"getStyles"),Gt=jt,Zt={parser:Ae,db:Bt,renderer:Ut,styles:Gt}}}]);
