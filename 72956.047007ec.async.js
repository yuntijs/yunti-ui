"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[72956],{72956:function(gt,$e,K){K.d($e,{diagram:function(){return dt}});var t=K(95895),X=K(76e3),Oe=K(94303),Le=K(22123),ae=function(){var e=(0,t.eW)(function(O,r,a,l){for(a=a||{},l=O.length;l--;a[O[l]]=r);return a},"o"),i=[1,3],c=[1,4],d=[1,5],u=[1,6],_=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],f=[1,18],h=[2,7],o=[1,22],E=[1,23],R=[1,24],I=[1,25],S=[1,26],w=[1,27],W=[1,20],v=[1,28],A=[1,29],D=[62,63],me=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],be=[1,47],ke=[1,48],Ie=[1,49],Se=[1,50],Te=[1,51],Ne=[1,52],ve=[1,53],L=[53,54],F=[1,64],P=[1,60],Y=[1,61],U=[1,62],B=[1,63],Q=[1,65],Z=[1,69],J=[1,70],ee=[1,67],te=[1,68],T=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],ce={trace:(0,t.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:(0,t.eW)(function(r,a,l,n,p,s,z){var g=s.length-1;switch(p){case 4:this.$=s[g].trim(),n.setAccTitle(this.$);break;case 5:case 6:this.$=s[g].trim(),n.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:n.addRequirement(s[g-3],s[g-4]);break;case 14:n.setNewReqId(s[g-2]);break;case 15:n.setNewReqText(s[g-2]);break;case 16:n.setNewReqRisk(s[g-2]);break;case 17:n.setNewReqVerifyMethod(s[g-2]);break;case 20:this.$=n.RequirementType.REQUIREMENT;break;case 21:this.$=n.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=n.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=n.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=n.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=n.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=n.RiskLevel.LOW_RISK;break;case 27:this.$=n.RiskLevel.MED_RISK;break;case 28:this.$=n.RiskLevel.HIGH_RISK;break;case 29:this.$=n.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=n.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=n.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=n.VerifyType.VERIFY_TEST;break;case 33:n.addElement(s[g-3]);break;case 34:n.setNewElementType(s[g-2]);break;case 35:n.setNewElementDocRef(s[g-2]);break;case 38:n.addRelationship(s[g-2],s[g],s[g-4]);break;case 39:n.addRelationship(s[g-2],s[g-4],s[g]);break;case 40:this.$=n.Relationships.CONTAINS;break;case 41:this.$=n.Relationships.COPIES;break;case 42:this.$=n.Relationships.DERIVES;break;case 43:this.$=n.Relationships.SATISFIES;break;case 44:this.$=n.Relationships.VERIFIES;break;case 45:this.$=n.Relationships.REFINES;break;case 46:this.$=n.Relationships.TRACES;break}},"anonymous"),table:[{3:1,4:2,6:i,9:c,11:d,13:u},{1:[3]},{3:8,4:2,5:[1,7],6:i,9:c,11:d,13:u},{5:[1,9]},{10:[1,10]},{12:[1,11]},e(_,[2,6]),{3:12,4:2,6:i,9:c,11:d,13:u},{1:[2,2]},{4:17,5:f,7:13,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:E,33:R,34:I,35:S,36:w,44:W,62:v,63:A},e(_,[2,4]),e(_,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:f,7:31,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:E,33:R,34:I,35:S,36:w,44:W,62:v,63:A},{4:17,5:f,7:32,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:E,33:R,34:I,35:S,36:w,44:W,62:v,63:A},{4:17,5:f,7:33,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:E,33:R,34:I,35:S,36:w,44:W,62:v,63:A},{4:17,5:f,7:34,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:E,33:R,34:I,35:S,36:w,44:W,62:v,63:A},{4:17,5:f,7:35,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:E,33:R,34:I,35:S,36:w,44:W,62:v,63:A},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},e(D,[2,20]),e(D,[2,21]),e(D,[2,22]),e(D,[2,23]),e(D,[2,24]),e(D,[2,25]),e(me,[2,49]),e(me,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:be,56:ke,57:Ie,58:Se,59:Te,60:Ne,61:ve},{52:54,55:be,56:ke,57:Ie,58:Se,59:Te,60:Ne,61:ve},{5:[1,55]},{5:[1,56]},{53:[1,57]},e(L,[2,40]),e(L,[2,41]),e(L,[2,42]),e(L,[2,43]),e(L,[2,44]),e(L,[2,45]),e(L,[2,46]),{54:[1,58]},{5:F,20:59,21:P,24:Y,26:U,28:B,30:Q},{5:Z,30:J,46:66,47:ee,49:te},{23:71,62:v,63:A},{23:72,62:v,63:A},e(T,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:F,20:77,21:P,24:Y,26:U,28:B,30:Q},e(T,[2,19]),e(T,[2,33]),{22:[1,78]},{22:[1,79]},{5:Z,30:J,46:80,47:ee,49:te},e(T,[2,37]),e(T,[2,38]),e(T,[2,39]),{23:81,62:v,63:A},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},e(T,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},e(T,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:F,20:106,21:P,24:Y,26:U,28:B,30:Q},{5:F,20:107,21:P,24:Y,26:U,28:B,30:Q},{5:F,20:108,21:P,24:Y,26:U,28:B,30:Q},{5:F,20:109,21:P,24:Y,26:U,28:B,30:Q},{5:Z,30:J,46:110,47:ee,49:te},{5:Z,30:J,46:111,47:ee,49:te},e(T,[2,14]),e(T,[2,15]),e(T,[2,16]),e(T,[2,17]),e(T,[2,34]),e(T,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:(0,t.eW)(function(r,a){if(a.recoverable)this.trace(r);else{var l=new Error(r);throw l.hash=a,l}},"parseError"),parse:(0,t.eW)(function(r){var a=this,l=[0],n=[],p=[null],s=[],z=this.table,g="",re=0,xe=0,we=0,pt=2,Ae=1,ft=s.slice.call(arguments,1),m=Object.create(this.lexer),M={yy:{}};for(var he in this.yy)Object.prototype.hasOwnProperty.call(this.yy,he)&&(M.yy[he]=this.yy[he]);m.setInput(r,M.yy),M.yy.lexer=m,M.yy.parser=this,typeof m.yylloc=="undefined"&&(m.yylloc={});var ue=m.yylloc;s.push(ue);var yt=m.options&&m.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Et(N){l.length=l.length-2*N,p.length=p.length-N,s.length=s.length-N}(0,t.eW)(Et,"popStack");function We(){var N;return N=n.pop()||m.lex()||Ae,typeof N!="number"&&(N instanceof Array&&(n=N,N=n.pop()),N=a.symbols_[N]||N),N}(0,t.eW)(We,"lex");for(var b,de,q,x,Rt,_e,H={},ne,V,Ve,se;;){if(q=l[l.length-1],this.defaultActions[q]?x=this.defaultActions[q]:((b===null||typeof b=="undefined")&&(b=We()),x=z[q]&&z[q][b]),typeof x=="undefined"||!x.length||!x[0]){var pe="";se=[];for(ne in z[q])this.terminals_[ne]&&ne>pt&&se.push("'"+this.terminals_[ne]+"'");m.showPosition?pe="Parse error on line "+(re+1)+`:
`+m.showPosition()+`
Expecting `+se.join(", ")+", got '"+(this.terminals_[b]||b)+"'":pe="Parse error on line "+(re+1)+": Unexpected "+(b==Ae?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(pe,{text:m.match,token:this.terminals_[b]||b,line:m.yylineno,loc:ue,expected:se})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+q+", token: "+b);switch(x[0]){case 1:l.push(b),p.push(m.yytext),s.push(m.yylloc),l.push(x[1]),b=null,de?(b=de,de=null):(xe=m.yyleng,g=m.yytext,re=m.yylineno,ue=m.yylloc,we>0&&we--);break;case 2:if(V=this.productions_[x[1]][1],H.$=p[p.length-V],H._$={first_line:s[s.length-(V||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(V||1)].first_column,last_column:s[s.length-1].last_column},yt&&(H._$.range=[s[s.length-(V||1)].range[0],s[s.length-1].range[1]]),_e=this.performAction.apply(H,[g,xe,re,M.yy,x[1],p,s].concat(ft)),typeof _e!="undefined")return _e;V&&(l=l.slice(0,-1*V*2),p=p.slice(0,-1*V),s=s.slice(0,-1*V)),l.push(this.productions_[x[1]][0]),p.push(H.$),s.push(H._$),Ve=z[l[l.length-2]][l[l.length-1]],l.push(Ve);break;case 3:return!0}}return!0},"parse")},_t=function(){var O={EOF:1,parseError:(0,t.eW)(function(a,l){if(this.yy.parser)this.yy.parser.parseError(a,l);else throw new Error(a)},"parseError"),setInput:(0,t.eW)(function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,t.eW)(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:(0,t.eW)(function(r){var a=r.length,l=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===n.length?this.yylloc.first_column:0)+n[n.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:(0,t.eW)(function(){return this._more=!0,this},"more"),reject:(0,t.eW)(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:(0,t.eW)(function(r){this.unput(this.match.slice(r))},"less"),pastInput:(0,t.eW)(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,t.eW)(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,t.eW)(function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:(0,t.eW)(function(r,a){var l,n,p;if(this.options.backtrack_lexer&&(p={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(p.yylloc.range=this.yylloc.range.slice(0))),n=r[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],l=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var s in p)this[s]=p[s];return!1}return!1},"test_match"),next:(0,t.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,l,n;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),s=0;s<p.length;s++)if(l=this._input.match(this.rules[p[s]]),l&&(!a||l[0].length>a[0].length)){if(a=l,n=s,this.options.backtrack_lexer){if(r=this.test_match(l,p[s]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,p[n]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,t.eW)(function(){var a=this.next();return a||this.lex()},"lex"),begin:(0,t.eW)(function(a){this.conditionStack.push(a)},"begin"),popState:(0,t.eW)(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,t.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,t.eW)(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:(0,t.eW)(function(a){this.begin(a)},"pushState"),stateStackSize:(0,t.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,t.eW)(function(a,l,n,p){var s=p;switch(n){case 0:return"title";case 1:return this.begin("acc_title"),9;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),11;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 48:this.popState();break;case 49:return"qString";case 50:return l.yytext=l.yytext.trim(),62;break}},"anonymous"),rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};return O}();ce.lexer=_t;function ie(){this.yy={}}return(0,t.eW)(ie,"Parser"),ie.prototype=ce,ce.Parser=ie,new ie}();ae.parser=ae;var Me=ae,le=[],k={},j=new Map,$={},G=new Map,qe={REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},Ce={LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},De={VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},Fe={CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},Pe=(0,t.eW)((e,i)=>(j.has(e)||j.set(e,{name:e,type:i,id:k.id,text:k.text,risk:k.risk,verifyMethod:k.verifyMethod}),k={},j.get(e)),"addRequirement"),Ye=(0,t.eW)(()=>j,"getRequirements"),Ue=(0,t.eW)(e=>{k!==void 0&&(k.id=e)},"setNewReqId"),Be=(0,t.eW)(e=>{k!==void 0&&(k.text=e)},"setNewReqText"),Qe=(0,t.eW)(e=>{k!==void 0&&(k.risk=e)},"setNewReqRisk"),He=(0,t.eW)(e=>{k!==void 0&&(k.verifyMethod=e)},"setNewReqVerifyMethod"),Ke=(0,t.eW)(e=>(G.has(e)||(G.set(e,{name:e,type:$.type,docRef:$.docRef}),t.cM.info("Added new requirement: ",e)),$={},G.get(e)),"addElement"),je=(0,t.eW)(()=>G,"getElements"),Ge=(0,t.eW)(e=>{$!==void 0&&($.type=e)},"setNewElementType"),ze=(0,t.eW)(e=>{$!==void 0&&($.docRef=e)},"setNewElementDocRef"),Xe=(0,t.eW)((e,i,c)=>{le.push({type:e,src:i,dst:c})},"addRelationship"),Ze=(0,t.eW)(()=>le,"getRelationships"),Je=(0,t.eW)(()=>{le=[],k={},j=new Map,$={},G=new Map,(0,t.ZH)()},"clear"),et={RequirementType:qe,RiskLevel:Ce,VerifyType:De,Relationships:Fe,getConfig:(0,t.eW)(()=>(0,t.nV)().req,"getConfig"),addRequirement:Pe,getRequirements:Ye,setNewReqId:Ue,setNewReqText:Be,setNewReqRisk:Qe,setNewReqVerifyMethod:He,setAccTitle:t.GN,getAccTitle:t.eu,setAccDescription:t.U$,getAccDescription:t.Mx,addElement:Ke,getElements:je,setNewElementType:Ge,setNewElementDocRef:ze,addRelationship:Xe,getRelationships:Ze,clear:Je},tt=(0,t.eW)(e=>`

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }

`,"getStyles"),it=tt,oe={CONTAINS:"contains",ARROW:"arrow"},rt=(0,t.eW)((e,i)=>{let c=e.append("defs").append("marker").attr("id",oe.CONTAINS+"_line_ending").attr("refX",0).attr("refY",i.line_height/2).attr("markerWidth",i.line_height).attr("markerHeight",i.line_height).attr("orient","auto").append("g");c.append("circle").attr("cx",i.line_height/2).attr("cy",i.line_height/2).attr("r",i.line_height/2).attr("fill","none"),c.append("line").attr("x1",0).attr("x2",i.line_height).attr("y1",i.line_height/2).attr("y2",i.line_height/2).attr("stroke-width",1),c.append("line").attr("y1",0).attr("y2",i.line_height).attr("x1",i.line_height/2).attr("x2",i.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",oe.ARROW+"_line_ending").attr("refX",i.line_height).attr("refY",.5*i.line_height).attr("markerWidth",i.line_height).attr("markerHeight",i.line_height).attr("orient","auto").append("path").attr("d",`M0,0
      L${i.line_height},${i.line_height/2}
      M${i.line_height},${i.line_height/2}
      L0,${i.line_height}`).attr("stroke-width",1)},"insertLineEndings"),fe={ReqMarkers:oe,insertLineEndings:rt},y={},ye=0,Ee=(0,t.eW)((e,i)=>e.insert("rect","#"+i).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",y.rect_min_width+"px").attr("height",y.rect_min_height+"px"),"newRectNode"),ge=(0,t.eW)((e,i,c)=>{let d=y.rect_min_width/2,u=e.append("text").attr("class","req reqLabel reqTitle").attr("id",i).attr("x",d).attr("y",y.rect_padding).attr("dominant-baseline","hanging"),_=0;c.forEach(E=>{_==0?u.append("tspan").attr("text-anchor","middle").attr("x",y.rect_min_width/2).attr("dy",0).text(E):u.append("tspan").attr("text-anchor","middle").attr("x",y.rect_min_width/2).attr("dy",y.line_height*.75).text(E),_++});let f=1.5*y.rect_padding,h=_*y.line_height*.75,o=f+h;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",y.rect_min_width).attr("y1",o).attr("y2",o),{titleNode:u,y:o}},"newTitleNode"),Re=(0,t.eW)((e,i,c,d)=>{let u=e.append("text").attr("class","req reqLabel").attr("id",i).attr("x",y.rect_padding).attr("y",d).attr("dominant-baseline","hanging"),_=0;const f=30;let h=[];return c.forEach(o=>{let E=o.length;for(;E>f&&_<3;){let R=o.substring(0,f);o=o.substring(f,o.length),E=o.length,h[h.length]=R,_++}if(_==3){let R=h[h.length-1];h[h.length-1]=R.substring(0,R.length-4)+"..."}else h[h.length]=o;_=0}),h.forEach(o=>{u.append("tspan").attr("x",y.rect_padding).attr("dy",y.line_height).text(o)}),u},"newBodyNode"),nt=(0,t.eW)((e,i,c,d)=>{const u=i.node().getTotalLength(),_=i.node().getPointAtLength(u*.5),f="rel"+ye;ye++;const o=e.append("text").attr("class","req relationshipLabel").attr("id",f).attr("x",_.x).attr("y",_.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(d).node().getBBox();e.insert("rect","#"+f).attr("class","req reqLabelBox").attr("x",_.x-o.width/2).attr("y",_.y-o.height/2).attr("width",o.width).attr("height",o.height).attr("fill","white").attr("fill-opacity","85%")},"addEdgeLabel"),st=(0,t.eW)(function(e,i,c,d,u){const _=c.edge(C(i.src),C(i.dst)),f=(0,X.jvg)().x(function(o){return o.x}).y(function(o){return o.y}),h=e.insert("path","#"+d).attr("class","er relationshipLine").attr("d",f(_.points)).attr("fill","none");i.type==u.db.Relationships.CONTAINS?h.attr("marker-start","url("+t.SY.getUrl(y.arrowMarkerAbsolute)+"#"+i.type+"_line_ending)"):(h.attr("stroke-dasharray","10,7"),h.attr("marker-end","url("+t.SY.getUrl(y.arrowMarkerAbsolute)+"#"+fe.ReqMarkers.ARROW+"_line_ending)")),nt(e,h,y,`<<${i.type}>>`)},"drawRelationshipFromLayout"),at=(0,t.eW)((e,i,c)=>{e.forEach((d,u)=>{u=C(u),t.cM.info("Added new requirement: ",u);const _=c.append("g").attr("id",u),f="req-"+u,h=Ee(_,f);let o=[],E=ge(_,u+"_title",[`<<${d.type}>>`,`${d.name}`]);o.push(E.titleNode);let R=Re(_,u+"_body",[`Id: ${d.id}`,`Text: ${d.text}`,`Risk: ${d.risk}`,`Verification: ${d.verifyMethod}`],E.y);o.push(R);const I=h.node().getBBox();i.setNode(u,{width:I.width,height:I.height,shape:"rect",id:u})})},"drawReqs"),lt=(0,t.eW)((e,i,c)=>{e.forEach((d,u)=>{const _=C(u),f=c.append("g").attr("id",_),h="element-"+_,o=Ee(f,h);let E=[],R=ge(f,h+"_title",["<<Element>>",`${u}`]);E.push(R.titleNode);let I=Re(f,h+"_body",[`Type: ${d.type||"Not Specified"}`,`Doc Ref: ${d.docRef||"None"}`],R.y);E.push(I);const S=o.node().getBBox();i.setNode(_,{width:S.width,height:S.height,shape:"rect",id:_})})},"drawElements"),ot=(0,t.eW)((e,i)=>(e.forEach(function(c){let d=C(c.src),u=C(c.dst);i.setEdge(d,u,{relationship:c})}),e),"addRelationships"),ct=(0,t.eW)(function(e,i){i.nodes().forEach(function(c){c!==void 0&&i.node(c)!==void 0&&(e.select("#"+c),e.select("#"+c).attr("transform","translate("+(i.node(c).x-i.node(c).width/2)+","+(i.node(c).y-i.node(c).height/2)+" )"))})},"adjustEntities"),C=(0,t.eW)(e=>e.replace(/\s/g,"").replace(/\./g,"_"),"elementString"),ht=(0,t.eW)((e,i,c,d)=>{y=(0,t.nV)().requirement;const u=y.securityLevel;let _;u==="sandbox"&&(_=(0,X.Ys)("#i"+i));const h=(u==="sandbox"?(0,X.Ys)(_.nodes()[0].contentDocument.body):(0,X.Ys)("body")).select(`[id='${i}']`);fe.insertLineEndings(h,y);const o=new Le.k({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:y.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});let E=d.db.getRequirements(),R=d.db.getElements(),I=d.db.getRelationships();at(E,o,h),lt(R,o,h),ot(I,o),(0,Oe.bK)(o),ct(h,o),I.forEach(function(A){st(h,A,o,i,d)});const S=y.rect_padding,w=h.node().getBBox(),W=w.width+S*2,v=w.height+S*2;(0,t.v2)(h,v,W,y.useMaxWidth),h.attr("viewBox",`${w.x-S} ${w.y-S} ${W} ${v}`)},"draw"),ut={draw:ht},dt={parser:Me,db:et,renderer:ut,styles:it}}}]);
