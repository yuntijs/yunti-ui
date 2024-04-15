"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[4809],{34809:function(r,e,a){a.r(e),a.d(e,{default:function(){return n}});var n=[Object.freeze({displayName:"Raku",name:"raku",patterns:[{begin:"^=begin",end:"^=end",name:"comment.block.perl"},{begin:"(^[ \\t]+)?(?=#)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.perl"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.perl"}},end:"\\n",name:"comment.line.number-sign.perl"}]},{captures:{1:{name:"storage.type.class.perl.6"},3:{name:"entity.name.type.class.perl.6"}},match:"(class|enum|grammar|knowhow|module|package|role|slang|subset)(\\s+)(((?:::|')?(?:([a-zA-Z_\\x{C0}-\\x{FF}\\$])([a-zA-Z0-9_\\x{C0}-\\x{FF}\\\\$]|[\\-'][a-zA-Z0-9_\\x{C0}-\\x{FF}\\$])*))+)",name:"meta.class.perl.6"},{begin:"(?<=\\s)'",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.single.perl",patterns:[{match:"\\\\['\\\\]",name:"constant.character.escape.perl"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.double.perl",patterns:[{match:'\\\\[abtnfre"\\\\]',name:"constant.character.escape.perl"}]},{begin:"q(q|to|heredoc)*\\s*:?(q|to|heredoc)*\\s*/(.+)/",end:"\\3",name:"string.quoted.single.heredoc.perl"},{begin:"(q|Q)(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*:?(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*{{",end:"}}",name:"string.quoted.double.heredoc.brace.perl",patterns:[{include:"#qq_brace_string_content"}]},{begin:"(q|Q)(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*:?(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*\\(\\(",end:"\\)\\)",name:"string.quoted.double.heredoc.paren.perl",patterns:[{include:"#qq_paren_string_content"}]},{begin:"(q|Q)(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*:?(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*\\[\\[",end:"\\]\\]",name:"string.quoted.double.heredoc.bracket.perl",patterns:[{include:"#qq_bracket_string_content"}]},{begin:"(q|Q)(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*:?(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*{",end:"}",name:"string.quoted.single.heredoc.brace.perl",patterns:[{include:"#qq_brace_string_content"}]},{begin:"(q|Q)(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*:?(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*/",end:"/",name:"string.quoted.single.heredoc.slash.perl",patterns:[{include:"#qq_slash_string_content"}]},{begin:"(q|Q)(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*:?(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*\\(",end:"\\)",name:"string.quoted.single.heredoc.paren.perl",patterns:[{include:"#qq_paren_string_content"}]},{begin:"(q|Q)(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*:?(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*\\[",end:"\\]",name:"string.quoted.single.heredoc.bracket.perl",patterns:[{include:"#qq_bracket_string_content"}]},{begin:"(q|Q)(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*:?(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*'",end:"'",name:"string.quoted.single.heredoc.single.perl",patterns:[{include:"#qq_single_string_content"}]},{begin:'(q|Q)(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*:?(x|exec|w|words|ww|quotewords|v|val|q|single|qq|double|s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash|regexp|substr|trans|codes|p|path)*\\s*"',end:'"',name:"string.quoted.single.heredoc.double.perl",patterns:[{include:"#qq_double_string_content"}]},{match:"\\b\\$\\w+\\b",name:"variable.other.perl"},{match:"\\b(macro|sub|submethod|method|multi|proto|only|rule|token|regex|category)\\b",name:"storage.type.declare.routine.perl"},{match:"\\b(self)\\b",name:"variable.language.perl"},{match:"\\b(use|require)\\b",name:"keyword.other.include.perl"},{match:"\\b(if|else|elsif|unless)\\b",name:"keyword.control.conditional.perl"},{match:"\\b(let|my|our|state|temp|has|constant)\\b",name:"storage.type.variable.perl"},{match:"\\b(for|loop|repeat|while|until|gather|given)\\b",name:"keyword.control.repeat.perl"},{match:"\\b(take|do|when|next|last|redo|return|contend|maybe|defer|default|exit|make|continue|break|goto|leave|async|lift)\\b",name:"keyword.control.flowcontrol.perl"},{match:"\\b(is|as|but|trusts|of|returns|handles|where|augment|supersede)\\b",name:"storage.modifier.type.constraints.perl"},{match:"\\b(BEGIN|CHECK|INIT|START|FIRST|ENTER|LEAVE|KEEP|UNDO|NEXT|LAST|PRE|POST|END|CATCH|CONTROL|TEMP)\\b",name:"meta.function.perl"},{match:"\\b(die|fail|try|warn)\\b",name:"keyword.control.control-handlers.perl"},{match:"\\b(prec|irs|ofs|ors|export|deep|binary|unary|reparsed|rw|parsed|cached|readonly|defequiv|will|ref|copy|inline|tighter|looser|equiv|assoc|required)\\b",name:"storage.modifier.perl"},{match:"\\b(NaN|Inf)\\b",name:"constant.numeric.perl"},{match:"\\b(oo|fatal)\\b",name:"keyword.other.pragma.perl"},{match:"\\b(Object|Any|Junction|Whatever|Capture|MatchSignature|Proxy|Matcher|Package|Module|ClassGrammar|Scalar|Array|Hash|KeyHash|KeySet|KeyBagPair|List|Seq|Range|Set|Bag|Mapping|Void|UndefFailure|Exception|Code|Block|Routine|Sub|MacroMethod|Submethod|Regex|Str|str|Blob|Char|ByteCodepoint|Grapheme|StrPos|StrLen|Version|NumComplex|num|complex|Bit|bit|bool|True|FalseIncreasing|Decreasing|Ordered|Callable|AnyCharPositional|Associative|Ordering|KeyExtractorComparator|OrderingPair|IO|KitchenSink|RoleInt|int|int1|int2|int4|int8|int16|int32|int64Rat|rat|rat1|rat2|rat4|rat8|rat16|rat32|rat64Buf|buf|buf1|buf2|buf4|buf8|buf16|buf32|buf64UInt|uint|uint1|uint2|uint4|uint8|uint16|uint32uint64|Abstraction|utf8|utf16|utf32)\\b",name:"support.type.perl6"},{match:"\\b(div|xx|x|mod|also|leg|cmp|before|after|eq|ne|le|lt|not|gt|ge|eqv|ff|fff|and|andthen|or|xor|orelse|extra|lcm|gcd)\\b",name:"keyword.operator.perl"},{match:"(\\$|@|%|&)(\\*|:|!|\\^|~|=|\\?|(<(?=.+>)))?([a-zA-Z_\\x{C0}-\\x{FF}\\$])([a-zA-Z0-9_\\x{C0}-\\x{FF}\\$]|[\\-'][a-zA-Z0-9_\\x{C0}-\\x{FF}\\$])*",name:"variable.other.identifier.perl.6"},{match:"\\b(eager|hyper|substr|index|rindex|grep|map|sort|join|lines|hints|chmod|split|reduce|min|max|reverse|truncate|zip|cat|roundrobin|classify|first|sum|keys|values|pairs|defined|delete|exists|elems|end|kv|any|all|one|wrap|shape|key|value|name|pop|push|shift|splice|unshift|floor|ceiling|abs|exp|log|log10|rand|sign|sqrt|sin|cos|tan|round|strand|roots|cis|unpolar|polar|atan2|pick|chop|p5chop|chomp|p5chomp|lc|lcfirst|uc|ucfirst|capitalize|normalize|pack|unpack|quotemeta|comb|samecase|sameaccent|chars|nfd|nfc|nfkd|nfkc|printf|sprintf|caller|evalfile|run|runinstead|nothing|want|bless|chr|ord|gmtime|time|eof|localtime|gethost|getpw|chroot|getlogin|getpeername|kill|fork|wait|perl|graphs|codes|bytes|clone|print|open|read|write|readline|say|seek|close|opendir|readdir|slurp|spurt|shell|run|pos|fmt|vec|link|unlink|symlink|uniq|pair|asin|atan|sec|cosec|cotan|asec|acosec|acotan|sinh|cosh|tanh|asinh|done|acos|acosh|atanh|sech|cosech|cotanh|sech|acosech|acotanh|asech|ok|nok|plan_ok|dies_ok|lives_ok|skip|todo|pass|flunk|force_todo|use_ok|isa_ok|diag|is_deeply|isnt|like|skip_rest|unlike|cmp_ok|eval_dies_ok|nok_error|eval_lives_ok|approx|is_approx|throws_ok|version_lt|plan|EVAL|succ|pred|times|nonce|once|signature|new|connect|operator|undef|undefine|sleep|from|to|infix|postfix|prefix|circumfix|postcircumfix|minmax|lazy|count|unwrap|getc|pi|e|context|void|quasi|body|each|contains|rewinddir|subst|can|isa|flush|arity|assuming|rewind|callwith|callsame|nextwith|nextsame|attr|eval_elsewhere|none|srand|trim|trim_start|trim_end|lastcall|WHAT|WHERE|HOW|WHICH|VAR|WHO|WHENCE|ACCEPTS|REJECTS|not|true|iterator|by|re|im|invert|flip|gist|flat|tree|is-prime|throws_like|trans)\\b",name:"support.function.perl"}],repository:{qq_brace_string_content:{begin:"{",end:"}",patterns:[{include:"#qq_brace_string_content"}]},qq_bracket_string_content:{begin:"\\[",end:"\\]",patterns:[{include:"#qq_bracket_string_content"}]},qq_double_string_content:{begin:'"',end:'"',patterns:[{include:"#qq_double_string_content"}]},qq_paren_string_content:{begin:"\\(",end:"\\)",patterns:[{include:"#qq_paren_string_content"}]},qq_single_string_content:{begin:"'",end:"'",patterns:[{include:"#qq_single_string_content"}]},qq_slash_string_content:{begin:"\\\\/",end:"\\\\/",patterns:[{include:"#qq_slash_string_content"}]}},scopeName:"source.perl.6",aliases:["perl6"]})]}}]);
