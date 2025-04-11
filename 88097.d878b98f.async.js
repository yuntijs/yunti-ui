"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[88097],{88097:function(a,e,t){t.r(e);const n=Object.freeze(JSON.parse('{"displayName":"WGSL","name":"wgsl","patterns":[{"include":"#line_comments"},{"include":"#block_comments"},{"include":"#keywords"},{"include":"#attributes"},{"include":"#functions"},{"include":"#function_calls"},{"include":"#constants"},{"include":"#types"},{"include":"#variables"},{"include":"#punctuation"}],"repository":{"attributes":{"patterns":[{"captures":{"1":{"name":"keyword.operator.attribute.at"},"2":{"name":"entity.name.attribute.wgsl"}},"match":"(@)([A-Za-z_]+)","name":"meta.attribute.wgsl"}]},"block_comments":{"patterns":[{"match":"/\\\\*\\\\*/","name":"comment.block.wgsl"},{"begin":"/\\\\*\\\\*","end":"\\\\*/","name":"comment.block.documentation.wgsl","patterns":[{"include":"#block_comments"}]},{"begin":"/\\\\*(?!\\\\*)","end":"\\\\*/","name":"comment.block.wgsl","patterns":[{"include":"#block_comments"}]}]},"constants":{"patterns":[{"match":"(-?\\\\b[0-9][0-9]*\\\\.[0-9][0-9]*)([eE][+\\\\-]?[0-9]+)?\\\\b","name":"constant.numeric.float.wgsl"},{"match":"-?\\\\b0x\\\\h+\\\\b|\\\\b0\\\\b|-?\\\\b[1-9][0-9]*\\\\b","name":"constant.numeric.decimal.wgsl"},{"match":"\\\\b(?:0x\\\\h+u\\\\b|0u\\\\b|[1-9][0-9]*u\\\\b)","name":"constant.numeric.decimal.wgsl"},{"match":"\\\\b(true|false)\\\\b","name":"constant.language.boolean.wgsl"}]},"function_calls":{"patterns":[{"begin":"([A-Za-z0-9_]+)(\\\\()","beginCaptures":{"1":{"name":"entity.name.function.wgsl"},"2":{"name":"punctuation.brackets.round.wgsl"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.brackets.round.wgsl"}},"name":"meta.function.call.wgsl","patterns":[{"include":"#line_comments"},{"include":"#block_comments"},{"include":"#keywords"},{"include":"#attributes"},{"include":"#function_calls"},{"include":"#constants"},{"include":"#types"},{"include":"#variables"},{"include":"#punctuation"}]}]},"functions":{"patterns":[{"begin":"\\\\b(fn)\\\\s+([A-Za-z0-9_]+)((\\\\()|(<))","beginCaptures":{"1":{"name":"keyword.other.fn.wgsl"},"2":{"name":"entity.name.function.wgsl"},"4":{"name":"punctuation.brackets.round.wgsl"}},"end":"\\\\{","endCaptures":{"0":{"name":"punctuation.brackets.curly.wgsl"}},"name":"meta.function.definition.wgsl","patterns":[{"include":"#line_comments"},{"include":"#block_comments"},{"include":"#keywords"},{"include":"#attributes"},{"include":"#function_calls"},{"include":"#constants"},{"include":"#types"},{"include":"#variables"},{"include":"#punctuation"}]}]},"keywords":{"patterns":[{"match":"\\\\b(bitcast|block|break|case|continue|continuing|default|discard|else|elseif|enable|fallthrough|for|function|if|loop|private|read|read_write|return|storage|switch|uniform|while|workgroup|write)\\\\b","name":"keyword.control.wgsl"},{"match":"\\\\b(asm|const|do|enum|handle|mat|premerge|regardless|typedef|unless|using|vec|void)\\\\b","name":"keyword.control.wgsl"},{"match":"\\\\b(let|var)\\\\b","name":"keyword.other.wgsl storage.type.wgsl"},{"match":"\\\\b(type)\\\\b","name":"keyword.declaration.type.wgsl storage.type.wgsl"},{"match":"\\\\b(enum)\\\\b","name":"keyword.declaration.enum.wgsl storage.type.wgsl"},{"match":"\\\\b(struct)\\\\b","name":"keyword.declaration.struct.wgsl storage.type.wgsl"},{"match":"\\\\bfn\\\\b","name":"keyword.other.fn.wgsl"},{"match":"([\\\\^|]|\\\\|\\\\||&&|<<|>>|!)(?!=)","name":"keyword.operator.logical.wgsl"},{"match":"&(?![\\\\&=])","name":"keyword.operator.borrow.and.wgsl"},{"match":"(\\\\+=|-=|\\\\*=|/=|%=|\\\\^=|&=|\\\\|=|<<=|>>=)","name":"keyword.operator.assignment.wgsl"},{"match":"(?<![<>])=(?![=>])","name":"keyword.operator.assignment.equal.wgsl"},{"match":"(=(=)?(?!>)|!=|<=|(?<!=)>=)","name":"keyword.operator.comparison.wgsl"},{"match":"(([+%]|(\\\\*(?!\\\\w)))(?!=))|(-(?!>))|(/(?!/))","name":"keyword.operator.math.wgsl"},{"match":"\\\\.(?!\\\\.)","name":"keyword.operator.access.dot.wgsl"},{"match":"->","name":"keyword.operator.arrow.skinny.wgsl"}]},"line_comments":{"match":"\\\\s*//.*","name":"comment.line.double-slash.wgsl"},"punctuation":{"patterns":[{"match":",","name":"punctuation.comma.wgsl"},{"match":"[{}]","name":"punctuation.brackets.curly.wgsl"},{"match":"[()]","name":"punctuation.brackets.round.wgsl"},{"match":";","name":"punctuation.semi.wgsl"},{"match":"[\\\\[\\\\]]","name":"punctuation.brackets.square.wgsl"},{"match":"(?<![=\\\\-])[<>]","name":"punctuation.brackets.angle.wgsl"}]},"types":{"name":"storage.type.wgsl","patterns":[{"match":"\\\\b(bool|i32|u32|f32)\\\\b","name":"storage.type.wgsl"},{"match":"\\\\b(i64|u64|f64)\\\\b","name":"storage.type.wgsl"},{"match":"\\\\b(vec(?:2i|3i|4i|2u|3u|4u|2f|3f|4f|2h|3h|4h))\\\\b","name":"storage.type.wgsl"},{"match":"\\\\b(mat(?:2x2f|2x3f|2x4f|3x2f|3x3f|3x4f|4x2f|4x3f|4x4f|2x2h|2x3h|2x4h|3x2h|3x3h|3x4h|4x2h|4x3h|4x4h))\\\\b","name":"storage.type.wgsl"},{"match":"\\\\b(vec[2-4]|mat[2-4]x[2-4])\\\\b","name":"storage.type.wgsl"},{"match":"\\\\b(atomic)\\\\b","name":"storage.type.wgsl"},{"match":"\\\\b(array)\\\\b","name":"storage.type.wgsl"},{"match":"\\\\b([A-Z][A-Za-z0-9]*)\\\\b","name":"entity.name.type.wgsl"}]},"variables":{"patterns":[{"match":"\\\\b(?<!(?<!\\\\.)\\\\.)(?:r#(?!(crate|[Ss]elf|super)))?[a-z0-9_]+\\\\b","name":"variable.other.wgsl"}]}},"scopeName":"source.wgsl"}'));e.default=[n]}}]);
