(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[57025],{18557:function(De){(function(ne,Y){De.exports=Y()})(this,function(){"use strict";return function(ne,Y){var ae=Y.prototype,t=ae.format;ae.format=function(G){var v=this,fe=this.$locale();if(!this.isValid())return t.bind(this)(G);var _=this.$utils(),H=(G||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(y){switch(y){case"Q":return Math.ceil((v.$M+1)/3);case"Do":return fe.ordinal(v.$D);case"gggg":return v.weekYear();case"GGGG":return v.isoWeekYear();case"wo":return fe.ordinal(v.week(),"W");case"w":case"ww":return _.s(v.week(),y==="w"?1:2,"0");case"W":case"WW":return _.s(v.isoWeek(),y==="W"?1:2,"0");case"k":case"kk":return _.s(String(v.$H===0?24:v.$H),y==="k"?1:2,"0");case"X":return Math.floor(v.$d.getTime()/1e3);case"x":return v.$d.getTime();case"z":return"["+v.offsetName()+"]";case"zzz":return"["+v.offsetName("long")+"]";default:return y}});return t.bind(this)(H)}}})},27931:function(De){(function(ne,Y){De.exports=Y()})(this,function(){"use strict";var ne={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Y=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,ae=/\d\d/,t=/\d\d?/,G=/\d*[^-_:/,()\s\d]+/,v={},fe=function(k){return(k=+k)+(k>68?1900:2e3)},_=function(k){return function(D){this[k]=+D}},H=[/[+-]\d\d:?(\d\d)?|Z/,function(k){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var I=D.match(/([+-]|\d\d)/g),A=60*I[1]+(+I[2]||0);return A===0?0:I[0]==="+"?-A:A}(k)}],y=function(k){var D=v[k];return D&&(D.indexOf?D:D.s.concat(D.f))},X=function(k,D){var I,A=v.meridiem;if(A){for(var R=1;R<=24;R+=1)if(k.indexOf(A(R,0,D))>-1){I=R>12;break}}else I=k===(D?"pm":"PM");return I},Te={A:[G,function(k){this.afternoon=X(k,!1)}],a:[G,function(k){this.afternoon=X(k,!0)}],S:[/\d/,function(k){this.milliseconds=100*+k}],SS:[ae,function(k){this.milliseconds=10*+k}],SSS:[/\d{3}/,function(k){this.milliseconds=+k}],s:[t,_("seconds")],ss:[t,_("seconds")],m:[t,_("minutes")],mm:[t,_("minutes")],H:[t,_("hours")],h:[t,_("hours")],HH:[t,_("hours")],hh:[t,_("hours")],D:[t,_("day")],DD:[ae,_("day")],Do:[G,function(k){var D=v.ordinal,I=k.match(/\d+/);if(this.day=I[0],D)for(var A=1;A<=31;A+=1)D(A).replace(/\[|\]/g,"")===k&&(this.day=A)}],M:[t,_("month")],MM:[ae,_("month")],MMM:[G,function(k){var D=y("months"),I=(y("monthsShort")||D.map(function(A){return A.slice(0,3)})).indexOf(k)+1;if(I<1)throw new Error;this.month=I%12||I}],MMMM:[G,function(k){var D=y("months").indexOf(k)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,_("year")],YY:[ae,function(k){this.year=fe(k)}],YYYY:[/\d{4}/,_("year")],Z:H,ZZ:H};function We(k){var D,I;D=k,I=v&&v.formats;for(var A=(k=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(oe,le,K){var V=K&&K.toUpperCase();return le||I[K]||ne[K]||I[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function($,ee,te){return ee||te.slice(1)})})).match(Y),R=A.length,z=0;z<R;z+=1){var he=A[z],ce=Te[he],Z=ce&&ce[0],B=ce&&ce[1];A[z]=B?{regex:Z,parser:B}:he.replace(/^\[|\]$/g,"")}return function(oe){for(var le={},K=0,V=0;K<R;K+=1){var $=A[K];if(typeof $=="string")V+=$.length;else{var ee=$.regex,te=$.parser,ve=oe.slice(V),pe=ee.exec(ve)[0];te.call(le,pe),oe=oe.replace(pe,"")}}return function(ke){var q=ke.afternoon;if(q!==void 0){var be=ke.hours;q?be<12&&(ke.hours+=12):be===12&&(ke.hours=0),delete ke.afternoon}}(le),le}}return function(k,D,I){I.p.customParseFormat=!0,k&&k.parseTwoDigitYear&&(fe=k.parseTwoDigitYear);var A=D.prototype,R=A.parse;A.parse=function(z){var he=z.date,ce=z.utc,Z=z.args;this.$u=ce;var B=Z[1];if(typeof B=="string"){var oe=Z[2]===!0,le=Z[3]===!0,K=oe||le,V=Z[2];le&&(V=Z[2]),v=this.$locale(),!oe&&V&&(v=I.Ls[V]),this.$d=function(ve,pe,ke){try{if(["x","X"].indexOf(pe)>-1)return new Date((pe==="X"?1e3:1)*ve);var q=We(pe)(ve),be=q.year,Ee=q.month,Qe=q.day,Je=q.hours,$e=q.minutes,et=q.seconds,tt=q.milliseconds,Ke=q.zone,Ie=new Date,Ae=Qe||(be||Ee?1:Ie.getDate()),Le=be||Ie.getFullYear(),Ce=0;be&&!Ee||(Ce=Ee>0?Ee-1:Ie.getMonth());var Ye=Je||0,Fe=$e||0,Oe=et||0,Pe=tt||0;return Ke?new Date(Date.UTC(Le,Ce,Ae,Ye,Fe,Oe,Pe+60*Ke.offset*1e3)):ke?new Date(Date.UTC(Le,Ce,Ae,Ye,Fe,Oe,Pe)):new Date(Le,Ce,Ae,Ye,Fe,Oe,Pe)}catch(dt){return new Date("")}}(he,B,ce),this.init(),V&&V!==!0&&(this.$L=this.locale(V).$L),K&&he!=this.format(B)&&(this.$d=new Date("")),v={}}else if(B instanceof Array)for(var $=B.length,ee=1;ee<=$;ee+=1){Z[1]=B[ee-1];var te=I.apply(this,Z);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}ee===$&&(this.$d=new Date(""))}else R.call(this,z)}}})},4829:function(De){(function(ne,Y){De.exports=Y()})(this,function(){"use strict";var ne="day";return function(Y,ae,t){var G=function(_){return _.add(4-_.isoWeekday(),ne)},v=ae.prototype;v.isoWeekYear=function(){return G(this).year()},v.isoWeek=function(_){if(!this.$utils().u(_))return this.add(7*(_-this.isoWeek()),ne);var H,y,X,Te,We=G(this),k=(H=this.isoWeekYear(),y=this.$u,X=(y?t.utc:t)().year(H).startOf("year"),Te=4-X.isoWeekday(),X.isoWeekday()>4&&(Te+=7),X.add(Te,ne));return We.diff(k,"week")+1},v.isoWeekday=function(_){return this.$utils().u(_)?this.day()||7:this.day(this.day()%7?_:_-7)};var fe=v.startOf;v.startOf=function(_,H){var y=this.$utils(),X=!!y.u(H)||H;return y.p(_)==="isoweek"?X?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):fe.bind(this)(_,H)}}})},57025:function(De,ne,Y){"use strict";Y.d(ne,{diagram:function(){return Zt}});var ae=Y(35934),t=Y(95895),G=Y(40560),v=Y(28026),fe=Y(4829),_=Y(27931),H=Y(18557),y=Y(76e3),X=function(){var e=(0,t.eW)(function(E,o,u,f){for(u=u||{},f=E.length;f--;u[E[f]]=o);return u},"o"),s=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],a=[1,27],c=[1,28],g=[1,29],h=[1,30],Q=[1,31],ue=[1,32],de=[1,33],F=[1,34],N=[1,9],ye=[1,10],re=[1,11],se=[1,12],S=[1,13],Ve=[1,14],Be=[1,15],Re=[1,16],ze=[1,19],Ne=[1,20],Ue=[1,21],je=[1,22],Ze=[1,23],p=[1,25],w=[1,35],T={trace:(0,t.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,t.eW)(function(o,u,f,d,b,i,l){var r=i.length-1;switch(b){case 1:return i[r-1];case 2:this.$=[];break;case 3:i[r-1].push(i[r]),this.$=i[r-1];break;case 4:case 5:this.$=i[r];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(i[r].substr(11)),this.$=i[r].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=i[r].substr(18);break;case 19:d.TopAxis(),this.$=i[r].substr(8);break;case 20:d.setAxisFormat(i[r].substr(11)),this.$=i[r].substr(11);break;case 21:d.setTickInterval(i[r].substr(13)),this.$=i[r].substr(13);break;case 22:d.setExcludes(i[r].substr(9)),this.$=i[r].substr(9);break;case 23:d.setIncludes(i[r].substr(9)),this.$=i[r].substr(9);break;case 24:d.setTodayMarker(i[r].substr(12)),this.$=i[r].substr(12);break;case 27:d.setDiagramTitle(i[r].substr(6)),this.$=i[r].substr(6);break;case 28:this.$=i[r].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=i[r].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(i[r].substr(8)),this.$=i[r].substr(8);break;case 33:d.addTask(i[r-1],i[r]),this.$="task";break;case 34:this.$=i[r-1],d.setClickEvent(i[r-1],i[r],null);break;case 35:this.$=i[r-2],d.setClickEvent(i[r-2],i[r-1],i[r]);break;case 36:this.$=i[r-2],d.setClickEvent(i[r-2],i[r-1],null),d.setLink(i[r-2],i[r]);break;case 37:this.$=i[r-3],d.setClickEvent(i[r-3],i[r-2],i[r-1]),d.setLink(i[r-3],i[r]);break;case 38:this.$=i[r-2],d.setClickEvent(i[r-2],i[r],null),d.setLink(i[r-2],i[r-1]);break;case 39:this.$=i[r-3],d.setClickEvent(i[r-3],i[r-1],i[r]),d.setLink(i[r-3],i[r-2]);break;case 40:this.$=i[r-1],d.setLink(i[r-1],i[r]);break;case 41:case 47:this.$=i[r-1]+" "+i[r];break;case 42:case 43:case 45:this.$=i[r-2]+" "+i[r-1]+" "+i[r];break;case 44:case 46:this.$=i[r-3]+" "+i[r-2]+" "+i[r-1]+" "+i[r];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:a,14:c,15:g,16:h,17:Q,18:ue,19:18,20:de,21:F,22:N,23:ye,24:re,25:se,26:S,27:Ve,28:Be,29:Re,30:ze,31:Ne,33:Ue,35:je,36:Ze,37:24,38:p,40:w},e(s,[2,7],{1:[2,1]}),e(s,[2,3]),{9:36,11:17,12:n,13:a,14:c,15:g,16:h,17:Q,18:ue,19:18,20:de,21:F,22:N,23:ye,24:re,25:se,26:S,27:Ve,28:Be,29:Re,30:ze,31:Ne,33:Ue,35:je,36:Ze,37:24,38:p,40:w},e(s,[2,5]),e(s,[2,6]),e(s,[2,17]),e(s,[2,18]),e(s,[2,19]),e(s,[2,20]),e(s,[2,21]),e(s,[2,22]),e(s,[2,23]),e(s,[2,24]),e(s,[2,25]),e(s,[2,26]),e(s,[2,27]),{32:[1,37]},{34:[1,38]},e(s,[2,30]),e(s,[2,31]),e(s,[2,32]),{39:[1,39]},e(s,[2,8]),e(s,[2,9]),e(s,[2,10]),e(s,[2,11]),e(s,[2,12]),e(s,[2,13]),e(s,[2,14]),e(s,[2,15]),e(s,[2,16]),{41:[1,40],43:[1,41]},e(s,[2,4]),e(s,[2,28]),e(s,[2,29]),e(s,[2,33]),e(s,[2,34],{42:[1,42],43:[1,43]}),e(s,[2,40],{41:[1,44]}),e(s,[2,35],{43:[1,45]}),e(s,[2,36]),e(s,[2,38],{42:[1,46]}),e(s,[2,37]),e(s,[2,39])],defaultActions:{},parseError:(0,t.eW)(function(o,u){if(u.recoverable)this.trace(o);else{var f=new Error(o);throw f.hash=u,f}},"parseError"),parse:(0,t.eW)(function(o){var u=this,f=[0],d=[],b=[null],i=[],l=this.table,r="",M=0,W=0,C=0,U=2,L=1,nt=i.slice.call(arguments,1),O=Object.create(this.lexer),_e={yy:{}};for(var at in this.yy)Object.prototype.hasOwnProperty.call(this.yy,at)&&(_e.yy[at]=this.yy[at]);O.setInput(o,_e.yy),_e.yy.lexer=O,_e.yy.parser=this,typeof O.yylloc=="undefined"&&(O.yylloc={});var ct=O.yylloc;i.push(ct);var Kt=O.options&&O.options.ranges;typeof _e.yy.parseError=="function"?this.parseError=_e.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Gt(J){f.length=f.length-2*J,b.length=b.length-J,i.length=i.length-J}(0,t.eW)(Gt,"popStack");function Tt(){var J;return J=d.pop()||O.lex()||L,typeof J!="number"&&(J instanceof Array&&(d=J,J=d.pop()),J=u.symbols_[J]||J),J}(0,t.eW)(Tt,"lex");for(var j,ot,we,ie,Ht,lt,Me={},Xe,ge,xt,qe;;){if(we=f[f.length-1],this.defaultActions[we]?ie=this.defaultActions[we]:((j===null||typeof j=="undefined")&&(j=Tt()),ie=l[we]&&l[we][j]),typeof ie=="undefined"||!ie.length||!ie[0]){var ut="";qe=[];for(Xe in l[we])this.terminals_[Xe]&&Xe>U&&qe.push("'"+this.terminals_[Xe]+"'");O.showPosition?ut="Parse error on line "+(M+1)+`:
`+O.showPosition()+`
Expecting `+qe.join(", ")+", got '"+(this.terminals_[j]||j)+"'":ut="Parse error on line "+(M+1)+": Unexpected "+(j==L?"end of input":"'"+(this.terminals_[j]||j)+"'"),this.parseError(ut,{text:O.match,token:this.terminals_[j]||j,line:O.yylineno,loc:ct,expected:qe})}if(ie[0]instanceof Array&&ie.length>1)throw new Error("Parse Error: multiple actions possible at state: "+we+", token: "+j);switch(ie[0]){case 1:f.push(j),b.push(O.yytext),i.push(O.yylloc),f.push(ie[1]),j=null,ot?(j=ot,ot=null):(W=O.yyleng,r=O.yytext,M=O.yylineno,ct=O.yylloc,C>0&&C--);break;case 2:if(ge=this.productions_[ie[1]][1],Me.$=b[b.length-ge],Me._$={first_line:i[i.length-(ge||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(ge||1)].first_column,last_column:i[i.length-1].last_column},Kt&&(Me._$.range=[i[i.length-(ge||1)].range[0],i[i.length-1].range[1]]),lt=this.performAction.apply(Me,[r,W,M,_e.yy,ie[1],b,i].concat(nt)),typeof lt!="undefined")return lt;ge&&(f=f.slice(0,-1*ge*2),b=b.slice(0,-1*ge),i=i.slice(0,-1*ge)),f.push(this.productions_[ie[1]][0]),b.push(Me.$),i.push(Me._$),xt=l[f[f.length-2]][f[f.length-1]],f.push(xt);break;case 3:return!0}}return!0},"parse")},x=function(){var E={EOF:1,parseError:(0,t.eW)(function(u,f){if(this.yy.parser)this.yy.parser.parseError(u,f);else throw new Error(u)},"parseError"),setInput:(0,t.eW)(function(o,u){return this.yy=u||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,t.eW)(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var u=o.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:(0,t.eW)(function(o){var u=o.length,f=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===d.length?this.yylloc.first_column:0)+d[d.length-f.length].length-f[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:(0,t.eW)(function(){return this._more=!0,this},"more"),reject:(0,t.eW)(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:(0,t.eW)(function(o){this.unput(this.match.slice(o))},"less"),pastInput:(0,t.eW)(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,t.eW)(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,t.eW)(function(){var o=this.pastInput(),u=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:(0,t.eW)(function(o,u){var f,d,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),d=o[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],f=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var i in b)this[i]=b[i];return!1}return!1},"test_match"),next:(0,t.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,u,f,d;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),i=0;i<b.length;i++)if(f=this._input.match(this.rules[b[i]]),f&&(!u||f[0].length>u[0].length)){if(u=f,d=i,this.options.backtrack_lexer){if(o=this.test_match(f,b[i]),o!==!1)return o;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(o=this.test_match(u,b[d]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,t.eW)(function(){var u=this.next();return u||this.lex()},"lex"),begin:(0,t.eW)(function(u){this.conditionStack.push(u)},"begin"),popState:(0,t.eW)(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,t.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,t.eW)(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:(0,t.eW)(function(u){this.begin(u)},"pushState"),stateStackSize:(0,t.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,t.eW)(function(u,f,d,b){var i=b;switch(d){case 0:return this.begin("open_directive"),"open_directive";break;case 1:return this.begin("acc_title"),31;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),33;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return E}();T.lexer=x;function m(){this.yy={}}return(0,t.eW)(m,"Parser"),m.prototype=T,T.Parser=m,new m}();X.parser=X;var Te=X;v.extend(fe),v.extend(_),v.extend(H);var We={friday:5,saturday:6},k="",D="",I=void 0,A="",R=[],z=[],he=new Map,ce=[],Z=[],B="",oe="",le=["active","done","crit","milestone"],K=[],V=!1,$=!1,ee="sunday",te="saturday",ve=0,pe=(0,t.eW)(function(){ce=[],Z=[],B="",K=[],Ge=0,st=void 0,He=void 0,P=[],k="",D="",oe="",I=void 0,A="",R=[],z=[],V=!1,$=!1,ve=0,he=new Map,(0,t.ZH)(),ee="sunday",te="saturday"},"clear"),ke=(0,t.eW)(function(e){D=e},"setAxisFormat"),q=(0,t.eW)(function(){return D},"getAxisFormat"),be=(0,t.eW)(function(e){I=e},"setTickInterval"),Ee=(0,t.eW)(function(){return I},"getTickInterval"),Qe=(0,t.eW)(function(e){A=e},"setTodayMarker"),Je=(0,t.eW)(function(){return A},"getTodayMarker"),$e=(0,t.eW)(function(e){k=e},"setDateFormat"),et=(0,t.eW)(function(){V=!0},"enableInclusiveEndDates"),tt=(0,t.eW)(function(){return V},"endDatesAreInclusive"),Ke=(0,t.eW)(function(){$=!0},"enableTopAxis"),Ie=(0,t.eW)(function(){return $},"topAxisEnabled"),Ae=(0,t.eW)(function(e){oe=e},"setDisplayMode"),Le=(0,t.eW)(function(){return oe},"getDisplayMode"),Ce=(0,t.eW)(function(){return k},"getDateFormat"),Ye=(0,t.eW)(function(e){R=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),Fe=(0,t.eW)(function(){return R},"getIncludes"),Oe=(0,t.eW)(function(e){z=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),Pe=(0,t.eW)(function(){return z},"getExcludes"),dt=(0,t.eW)(function(){return he},"getLinks"),_t=(0,t.eW)(function(e){B=e,ce.push(e)},"addSection"),wt=(0,t.eW)(function(){return ce},"getSections"),Dt=(0,t.eW)(function(){let e=gt();const s=10;let n=0;for(;!e&&n<s;)e=gt(),n++;return Z=P,Z},"getTasks"),ft=(0,t.eW)(function(e,s,n,a){return a.includes(e.format(s.trim()))?!1:n.includes("weekends")&&(e.isoWeekday()===We[te]||e.isoWeekday()===We[te]+1)||n.includes(e.format("dddd").toLowerCase())?!0:n.includes(e.format(s.trim()))},"isInvalidDate"),Wt=(0,t.eW)(function(e){ee=e},"setWeekday"),Et=(0,t.eW)(function(){return ee},"getWeekday"),Ct=(0,t.eW)(function(e){te=e},"setWeekend"),ht=(0,t.eW)(function(e,s,n,a){if(!n.length||e.manualEndTime)return;let c;e.startTime instanceof Date?c=v(e.startTime):c=v(e.startTime,s,!0),c=c.add(1,"d");let g;e.endTime instanceof Date?g=v(e.endTime):g=v(e.endTime,s,!0);const[h,Q]=St(c,g,s,n,a);e.endTime=h.toDate(),e.renderEndTime=Q},"checkTaskDates"),St=(0,t.eW)(function(e,s,n,a,c){let g=!1,h=null;for(;e<=s;)g||(h=s.toDate()),g=ft(e,n,a,c),g&&(s=s.add(1,"d")),e=e.add(1,"d");return[s,h]},"fixTaskDates"),rt=(0,t.eW)(function(e,s,n){n=n.trim();const c=new RegExp("^after\\s+(?<ids>[\\d\\w- ]+)").exec(n);if(c!==null){let h=null;for(const ue of c.groups.ids.split(" ")){let de=xe(ue);de!==void 0&&(!h||de.endTime>h.endTime)&&(h=de)}if(h)return h.endTime;const Q=new Date;return Q.setHours(0,0,0,0),Q}let g=v(n,s.trim(),!0);if(g.isValid())return g.toDate();{t.cM.debug("Invalid date:"+n),t.cM.debug("With date format:"+s.trim());const h=new Date(n);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+n);return h}},"getStartDate"),kt=(0,t.eW)(function(e){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},"parseDuration"),mt=(0,t.eW)(function(e,s,n,a=!1){n=n.trim();const g=new RegExp("^until\\s+(?<ids>[\\d\\w- ]+)").exec(n);if(g!==null){let F=null;for(const ye of g.groups.ids.split(" ")){let re=xe(ye);re!==void 0&&(!F||re.startTime<F.startTime)&&(F=re)}if(F)return F.startTime;const N=new Date;return N.setHours(0,0,0,0),N}let h=v(n,s.trim(),!0);if(h.isValid())return a&&(h=h.add(1,"d")),h.toDate();let Q=v(e);const[ue,de]=kt(n);if(!Number.isNaN(ue)){const F=Q.add(ue,de);F.isValid()&&(Q=F)}return Q.toDate()},"getEndDate"),Ge=0,Se=(0,t.eW)(function(e){return e===void 0?(Ge=Ge+1,"task"+Ge):e},"parseId"),Mt=(0,t.eW)(function(e,s){let n;s.substr(0,1)===":"?n=s.substr(1,s.length):n=s;const a=n.split(","),c={};it(a,c,le);for(let h=0;h<a.length;h++)a[h]=a[h].trim();let g="";switch(a.length){case 1:c.id=Se(),c.startTime=e.endTime,g=a[0];break;case 2:c.id=Se(),c.startTime=rt(void 0,k,a[0]),g=a[1];break;case 3:c.id=Se(a[0]),c.startTime=rt(void 0,k,a[1]),g=a[2];break;default:}return g&&(c.endTime=mt(c.startTime,k,g,V),c.manualEndTime=v(g,"YYYY-MM-DD",!0).isValid(),ht(c,k,z,R)),c},"compileData"),It=(0,t.eW)(function(e,s){let n;s.substr(0,1)===":"?n=s.substr(1,s.length):n=s;const a=n.split(","),c={};it(a,c,le);for(let g=0;g<a.length;g++)a[g]=a[g].trim();switch(a.length){case 1:c.id=Se(),c.startTime={type:"prevTaskEnd",id:e},c.endTime={data:a[0]};break;case 2:c.id=Se(),c.startTime={type:"getStartDate",startData:a[0]},c.endTime={data:a[1]};break;case 3:c.id=Se(a[0]),c.startTime={type:"getStartDate",startData:a[1]},c.endTime={data:a[2]};break;default:}return c},"parseData"),st,He,P=[],yt={},At=(0,t.eW)(function(e,s){const n={section:B,type:B,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:e,classes:[]},a=It(He,s);n.raw.startTime=a.startTime,n.raw.endTime=a.endTime,n.id=a.id,n.prevTaskId=He,n.active=a.active,n.done=a.done,n.crit=a.crit,n.milestone=a.milestone,n.order=ve,ve++;const c=P.push(n);He=n.id,yt[n.id]=c-1},"addTask"),xe=(0,t.eW)(function(e){const s=yt[e];return P[s]},"findTaskById"),Lt=(0,t.eW)(function(e,s){const n={section:B,type:B,description:e,task:e,classes:[]},a=Mt(st,s);n.startTime=a.startTime,n.endTime=a.endTime,n.id=a.id,n.active=a.active,n.done=a.done,n.crit=a.crit,n.milestone=a.milestone,st=n,Z.push(n)},"addTaskOrg"),gt=(0,t.eW)(function(){const e=(0,t.eW)(function(n){const a=P[n];let c="";switch(P[n].raw.startTime.type){case"prevTaskEnd":{const g=xe(a.prevTaskId);a.startTime=g.endTime;break}case"getStartDate":c=rt(void 0,k,P[n].raw.startTime.startData),c&&(P[n].startTime=c);break}return P[n].startTime&&(P[n].endTime=mt(P[n].startTime,k,P[n].raw.endTime.data,V),P[n].endTime&&(P[n].processed=!0,P[n].manualEndTime=v(P[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),ht(P[n],k,z,R))),P[n].processed},"compileTask");let s=!0;for(const[n,a]of P.entries())e(n),s=s&&a.processed;return s},"compileTasks"),Yt=(0,t.eW)(function(e,s){let n=s;(0,t.nV)().securityLevel!=="loose"&&(n=(0,G.N)(s)),e.split(",").forEach(function(a){xe(a)!==void 0&&(pt(a,()=>{window.open(n,"_self")}),he.set(a,n))}),vt(e,"clickable")},"setLink"),vt=(0,t.eW)(function(e,s){e.split(",").forEach(function(n){let a=xe(n);a!==void 0&&a.classes.push(s)})},"setClass"),Ft=(0,t.eW)(function(e,s,n){if((0,t.nV)().securityLevel!=="loose"||s===void 0)return;let a=[];if(typeof n=="string"){a=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let g=0;g<a.length;g++){let h=a[g].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),a[g]=h}}a.length===0&&a.push(e),xe(e)!==void 0&&pt(e,()=>{ae.w8.runFunc(s,...a)})},"setClickFun"),pt=(0,t.eW)(function(e,s){K.push(function(){const n=document.querySelector(`[id="${e}"]`);n!==null&&n.addEventListener("click",function(){s()})},function(){const n=document.querySelector(`[id="${e}-text"]`);n!==null&&n.addEventListener("click",function(){s()})})},"pushFun"),Ot=(0,t.eW)(function(e,s,n){e.split(",").forEach(function(a){Ft(a,s,n)}),vt(e,"clickable")},"setClickEvent"),Pt=(0,t.eW)(function(e){K.forEach(function(s){s(e)})},"bindFunctions"),Vt={getConfig:(0,t.eW)(()=>(0,t.nV)().gantt,"getConfig"),clear:pe,setDateFormat:$e,getDateFormat:Ce,enableInclusiveEndDates:et,endDatesAreInclusive:tt,enableTopAxis:Ke,topAxisEnabled:Ie,setAxisFormat:ke,getAxisFormat:q,setTickInterval:be,getTickInterval:Ee,setTodayMarker:Qe,getTodayMarker:Je,setAccTitle:t.GN,getAccTitle:t.eu,setDiagramTitle:t.g2,getDiagramTitle:t.Kr,setDisplayMode:Ae,getDisplayMode:Le,setAccDescription:t.U$,getAccDescription:t.Mx,addSection:_t,getSections:wt,getTasks:Dt,addTask:At,findTaskById:xe,addTaskOrg:Lt,setIncludes:Ye,getIncludes:Fe,setExcludes:Oe,getExcludes:Pe,setClickEvent:Ot,setLink:Yt,getLinks:dt,bindFunctions:Pt,parseDuration:kt,isInvalidDate:ft,setWeekday:Wt,getWeekday:Et,setWeekend:Ct};function it(e,s,n){let a=!0;for(;a;)a=!1,n.forEach(function(c){const g="^\\s*"+c+"\\s*$",h=new RegExp(g);e[0].match(h)&&(s[c]=!0,e.shift(1),a=!0)})}(0,t.eW)(it,"getTaskTags");var Bt=(0,t.eW)(function(){t.cM.debug("Something is calling, setConf, remove the call")},"setConf"),bt={monday:y.Ox9,tuesday:y.YDX,wednesday:y.EFj,thursday:y.Igq,friday:y.y2j,saturday:y.LqH,sunday:y.Zyz},Rt=(0,t.eW)((e,s)=>{let n=[...e].map(()=>-1/0),a=[...e].sort((g,h)=>g.startTime-h.startTime||g.order-h.order),c=0;for(const g of a)for(let h=0;h<n.length;h++)if(g.startTime>=n[h]){n[h]=g.endTime,g.order=h+s,h>c&&(c=h);break}return c},"getMaxIntersections"),me,zt=(0,t.eW)(function(e,s,n,a){const c=(0,t.nV)().gantt,g=(0,t.nV)().securityLevel;let h;g==="sandbox"&&(h=(0,y.Ys)("#i"+s));const Q=g==="sandbox"?(0,y.Ys)(h.nodes()[0].contentDocument.body):(0,y.Ys)("body"),ue=g==="sandbox"?h.nodes()[0].contentDocument:document,de=ue.getElementById(s);me=de.parentElement.offsetWidth,me===void 0&&(me=1200),c.useWidth!==void 0&&(me=c.useWidth);const F=a.db.getTasks();let N=[];for(const p of F)N.push(p.type);N=Ze(N);const ye={};let re=2*c.topPadding;if(a.db.getDisplayMode()==="compact"||c.displayMode==="compact"){const p={};for(const T of F)p[T.section]===void 0?p[T.section]=[T]:p[T.section].push(T);let w=0;for(const T of Object.keys(p)){const x=Rt(p[T],w)+1;w+=x,re+=x*(c.barHeight+c.barGap),ye[T]=x}}else{re+=F.length*(c.barHeight+c.barGap);for(const p of N)ye[p]=F.filter(w=>w.type===p).length}de.setAttribute("viewBox","0 0 "+me+" "+re);const se=Q.select(`[id="${s}"]`),S=(0,y.Xf)().domain([(0,y.VV$)(F,function(p){return p.startTime}),(0,y.Fp7)(F,function(p){return p.endTime})]).rangeRound([0,me-c.leftPadding-c.rightPadding]);function Ve(p,w){const T=p.startTime,x=w.startTime;let m=0;return T>x?m=1:T<x&&(m=-1),m}(0,t.eW)(Ve,"taskCompare"),F.sort(Ve),Be(F,me,re),(0,t.v2)(se,re,me,c.useMaxWidth),se.append("text").text(a.db.getDiagramTitle()).attr("x",me/2).attr("y",c.titleTopMargin).attr("class","titleText");function Be(p,w,T){const x=c.barHeight,m=x+c.barGap,E=c.topPadding,o=c.leftPadding,u=(0,y.BYU)().domain([0,N.length]).range(["#00B9FA","#F95002"]).interpolate(y.JHv);ze(m,E,o,w,T,p,a.db.getExcludes(),a.db.getIncludes()),Ne(o,E,w,T),Re(p,m,E,o,x,u,w,T),Ue(m,E,o,x,u),je(o,E,w,T)}(0,t.eW)(Be,"makeGantt");function Re(p,w,T,x,m,E,o){const f=[...new Set(p.map(l=>l.order))].map(l=>p.find(r=>r.order===l));se.append("g").selectAll("rect").data(f).enter().append("rect").attr("x",0).attr("y",function(l,r){return r=l.order,r*w+T-2}).attr("width",function(){return o-c.rightPadding/2}).attr("height",w).attr("class",function(l){for(const[r,M]of N.entries())if(l.type===M)return"section section"+r%c.numberSectionStyles;return"section section0"});const d=se.append("g").selectAll("rect").data(p).enter(),b=a.db.getLinks();if(d.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?S(l.startTime)+x+.5*(S(l.endTime)-S(l.startTime))-.5*m:S(l.startTime)+x}).attr("y",function(l,r){return r=l.order,r*w+T}).attr("width",function(l){return l.milestone?m:S(l.renderEndTime||l.endTime)-S(l.startTime)}).attr("height",m).attr("transform-origin",function(l,r){return r=l.order,(S(l.startTime)+x+.5*(S(l.endTime)-S(l.startTime))).toString()+"px "+(r*w+T+.5*m).toString()+"px"}).attr("class",function(l){const r="task";let M="";l.classes.length>0&&(M=l.classes.join(" "));let W=0;for(const[U,L]of N.entries())l.type===L&&(W=U%c.numberSectionStyles);let C="";return l.active?l.crit?C+=" activeCrit":C=" active":l.done?l.crit?C=" doneCrit":C=" done":l.crit&&(C+=" crit"),C.length===0&&(C=" task"),l.milestone&&(C=" milestone "+C),C+=W,C+=" "+M,r+C}),d.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",c.fontSize).attr("x",function(l){let r=S(l.startTime),M=S(l.renderEndTime||l.endTime);l.milestone&&(r+=.5*(S(l.endTime)-S(l.startTime))-.5*m),l.milestone&&(M=r+m);const W=this.getBBox().width;return W>M-r?M+W+1.5*c.leftPadding>o?r+x-5:M+x+5:(M-r)/2+r+x}).attr("y",function(l,r){return r=l.order,r*w+c.barHeight/2+(c.fontSize/2-2)+T}).attr("text-height",m).attr("class",function(l){const r=S(l.startTime);let M=S(l.endTime);l.milestone&&(M=r+m);const W=this.getBBox().width;let C="";l.classes.length>0&&(C=l.classes.join(" "));let U=0;for(const[nt,O]of N.entries())l.type===O&&(U=nt%c.numberSectionStyles);let L="";return l.active&&(l.crit?L="activeCritText"+U:L="activeText"+U),l.done?l.crit?L=L+" doneCritText"+U:L=L+" doneText"+U:l.crit&&(L=L+" critText"+U),l.milestone&&(L+=" milestoneText"),W>M-r?M+W+1.5*c.leftPadding>o?C+" taskTextOutsideLeft taskTextOutside"+U+" "+L:C+" taskTextOutsideRight taskTextOutside"+U+" "+L+" width-"+W:C+" taskText taskText"+U+" "+L+" width-"+W}),(0,t.nV)().securityLevel==="sandbox"){let l;l=(0,y.Ys)("#i"+s);const r=l.nodes()[0].contentDocument;d.filter(function(M){return b.has(M.id)}).each(function(M){var W=r.querySelector("#"+M.id),C=r.querySelector("#"+M.id+"-text");const U=W.parentNode;var L=r.createElement("a");L.setAttribute("xlink:href",b.get(M.id)),L.setAttribute("target","_top"),U.appendChild(L),L.appendChild(W),L.appendChild(C)})}}(0,t.eW)(Re,"drawRects");function ze(p,w,T,x,m,E,o,u){if(o.length===0&&u.length===0)return;let f,d;for(const{startTime:W,endTime:C}of E)(f===void 0||W<f)&&(f=W),(d===void 0||C>d)&&(d=C);if(!f||!d)return;if(v(d).diff(v(f),"year")>5){t.cM.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const b=a.db.getDateFormat(),i=[];let l=null,r=v(f);for(;r.valueOf()<=d;)a.db.isInvalidDate(r,b,o,u)?l?l.end=r:l={start:r,end:r}:l&&(i.push(l),l=null),r=r.add(1,"d");se.append("g").selectAll("rect").data(i).enter().append("rect").attr("id",function(W){return"exclude-"+W.start.format("YYYY-MM-DD")}).attr("x",function(W){return S(W.start)+T}).attr("y",c.gridLineStartPadding).attr("width",function(W){const C=W.end.add(1,"day");return S(C)-S(W.start)}).attr("height",m-w-c.gridLineStartPadding).attr("transform-origin",function(W,C){return(S(W.start)+T+.5*(S(W.end)-S(W.start))).toString()+"px "+(C*p+.5*m).toString()+"px"}).attr("class","exclude-range")}(0,t.eW)(ze,"drawExcludeDays");function Ne(p,w,T,x){let m=(0,y.LLu)(S).tickSize(-x+w+c.gridLineStartPadding).tickFormat((0,y.i$Z)(a.db.getAxisFormat()||c.axisFormat||"%Y-%m-%d"));const o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval()||c.tickInterval);if(o!==null){const u=o[1],f=o[2],d=a.db.getWeekday()||c.weekday;switch(f){case"millisecond":m.ticks(y.U8T.every(u));break;case"second":m.ticks(y.S1K.every(u));break;case"minute":m.ticks(y.Z_i.every(u));break;case"hour":m.ticks(y.WQD.every(u));break;case"day":m.ticks(y.rr1.every(u));break;case"week":m.ticks(bt[d].every(u));break;case"month":m.ticks(y.F0B.every(u));break}}if(se.append("g").attr("class","grid").attr("transform","translate("+p+", "+(x-50)+")").call(m).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),a.db.topAxisEnabled()||c.topAxis){let u=(0,y.F5q)(S).tickSize(-x+w+c.gridLineStartPadding).tickFormat((0,y.i$Z)(a.db.getAxisFormat()||c.axisFormat||"%Y-%m-%d"));if(o!==null){const f=o[1],d=o[2],b=a.db.getWeekday()||c.weekday;switch(d){case"millisecond":u.ticks(y.U8T.every(f));break;case"second":u.ticks(y.S1K.every(f));break;case"minute":u.ticks(y.Z_i.every(f));break;case"hour":u.ticks(y.WQD.every(f));break;case"day":u.ticks(y.rr1.every(f));break;case"week":u.ticks(bt[b].every(f));break;case"month":u.ticks(y.F0B.every(f));break}}se.append("g").attr("class","grid").attr("transform","translate("+p+", "+w+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(0,t.eW)(Ne,"makeGrid");function Ue(p,w){let T=0;const x=Object.keys(ye).map(m=>[m,ye[m]]);se.append("g").selectAll("text").data(x).enter().append(function(m){const E=m[0].split(t.SY.lineBreakRegex),o=-(E.length-1)/2,u=ue.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",o+"em");for(const[f,d]of E.entries()){const b=ue.createElementNS("http://www.w3.org/2000/svg","tspan");b.setAttribute("alignment-baseline","central"),b.setAttribute("x","10"),f>0&&b.setAttribute("dy","1em"),b.textContent=d,u.appendChild(b)}return u}).attr("x",10).attr("y",function(m,E){if(E>0)for(let o=0;o<E;o++)return T+=x[E-1][1],m[1]*p/2+T*p+w;else return m[1]*p/2+w}).attr("font-size",c.sectionFontSize).attr("class",function(m){for(const[E,o]of N.entries())if(m[0]===o)return"sectionTitle sectionTitle"+E%c.numberSectionStyles;return"sectionTitle"})}(0,t.eW)(Ue,"vertLabels");function je(p,w,T,x){const m=a.db.getTodayMarker();if(m==="off")return;const E=se.append("g").attr("class","today"),o=new Date,u=E.append("line");u.attr("x1",S(o)+p).attr("x2",S(o)+p).attr("y1",c.titleTopMargin).attr("y2",x-c.titleTopMargin).attr("class","today"),m!==""&&u.attr("style",m.replace(/,/g,";"))}(0,t.eW)(je,"drawToday");function Ze(p){const w={},T=[];for(let x=0,m=p.length;x<m;++x)Object.prototype.hasOwnProperty.call(w,p[x])||(w[p[x]]=!0,T.push(p[x]));return T}(0,t.eW)(Ze,"checkUnique")},"draw"),Nt={setConf:Bt,draw:zt},Ut=(0,t.eW)(e=>`
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
`,"getStyles"),jt=Ut,Zt={parser:Te,db:Vt,renderer:Nt,styles:jt}}}]);
