"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2529,6358,229,4212],{76358:function(r,n,e){e.r(n),e.d(n,{default:function(){return i}});var t=e(51703);const a=Object.freeze({displayName:"GLSL",fileTypes:["vs","fs","gs","vsh","fsh","gsh","vshader","fshader","gshader","vert","frag","geom","f.glsl","v.glsl","g.glsl"],foldingStartMarker:"/\\*\\*|\\{\\s*$",foldingStopMarker:"\\*\\*/|^\\s*\\}",name:"glsl",patterns:[{match:"\\b(break|case|continue|default|discard|do|else|for|if|return|switch|while)\\b",name:"keyword.control.glsl"},{match:"\\b(void|bool|int|uint|float|vec2|vec3|vec4|bvec2|bvec3|bvec4|ivec2|ivec2|ivec3|uvec2|uvec2|uvec3|mat2|mat3|mat4|mat2x2|mat2x3|mat2x4|mat3x2|mat3x3|mat3x4|mat4x2|mat4x3|mat4x4|sampler[1|2|3]D|samplerCube|sampler2DRect|sampler[1|2]DShadow|sampler2DRectShadow|sampler[1|2]DArray|sampler[1|2]DArrayShadow|samplerBuffer|sampler2DMS|sampler2DMSArray|struct|isampler[1|2|3]D|isamplerCube|isampler2DRect|isampler[1|2]DArray|isamplerBuffer|isampler2DMS|isampler2DMSArray|usampler[1|2|3]D|usamplerCube|usampler2DRect|usampler[1|2]DArray|usamplerBuffer|usampler2DMS|usampler2DMSArray)\\b",name:"storage.type.glsl"},{match:"\\b(attribute|centroid|const|flat|in|inout|invariant|noperspective|out|smooth|uniform|varying)\\b",name:"storage.modifier.glsl"},{match:"\\b(gl_BackColor|gl_BackLightModelProduct|gl_BackLightProduct|gl_BackMaterial|gl_BackSecondaryColor|gl_ClipDistance|gl_ClipPlane|gl_ClipVertex|gl_Color|gl_DepthRange|gl_DepthRangeParameters|gl_EyePlaneQ|gl_EyePlaneR|gl_EyePlaneS|gl_EyePlaneT|gl_Fog|gl_FogCoord|gl_FogFragCoord|gl_FogParameters|gl_FragColor|gl_FragCoord|gl_FragDat|gl_FragDept|gl_FrontColor|gl_FrontFacing|gl_FrontLightModelProduct|gl_FrontLightProduct|gl_FrontMaterial|gl_FrontSecondaryColor|gl_InstanceID|gl_Layer|gl_LightModel|gl_LightModelParameters|gl_LightModelProducts|gl_LightProducts|gl_LightSource|gl_LightSourceParameters|gl_MaterialParameters|gl_ModelViewMatrix|gl_ModelViewMatrixInverse|gl_ModelViewMatrixInverseTranspose|gl_ModelViewMatrixTranspose|gl_ModelViewProjectionMatrix|gl_ModelViewProjectionMatrixInverse|gl_ModelViewProjectionMatrixInverseTranspose|gl_ModelViewProjectionMatrixTranspose|gl_MultiTexCoord[0-7]|gl_Normal|gl_NormalMatrix|gl_NormalScale|gl_ObjectPlaneQ|gl_ObjectPlaneR|gl_ObjectPlaneS|gl_ObjectPlaneT|gl_Point|gl_PointCoord|gl_PointParameters|gl_PointSize|gl_Position|gl_PrimitiveIDIn|gl_ProjectionMatrix|gl_ProjectionMatrixInverse|gl_ProjectionMatrixInverseTranspose|gl_ProjectionMatrixTranspose|gl_SecondaryColor|gl_TexCoord|gl_TextureEnvColor|gl_TextureMatrix|gl_TextureMatrixInverse|gl_TextureMatrixInverseTranspose|gl_TextureMatrixTranspose|gl_Vertex|gl_VertexIDh)\\b",name:"support.variable.glsl"},{match:"\\b(gl_MaxClipPlanes|gl_MaxCombinedTextureImageUnits|gl_MaxDrawBuffers|gl_MaxFragmentUniformComponents|gl_MaxLights|gl_MaxTextureCoords|gl_MaxTextureImageUnits|gl_MaxTextureUnits|gl_MaxVaryingFloats|gl_MaxVertexAttribs|gl_MaxVertexTextureImageUnits|gl_MaxVertexUniformComponents)\\b",name:"support.constant.glsl"},{match:"\\b(abs|acos|all|any|asin|atan|ceil|clamp|cos|cross|degrees|dFdx|dFdy|distance|dot|equal|exp|exp2|faceforward|floor|fract|ftransform|fwidth|greaterThan|greaterThanEqual|inversesqrt|length|lessThan|lessThanEqual|log|log2|matrixCompMult|max|min|mix|mod|noise[1-4]|normalize|not|notEqual|outerProduct|pow|radians|reflect|refract|shadow1D|shadow1DLod|shadow1DProj|shadow1DProjLod|shadow2D|shadow2DLod|shadow2DProj|shadow2DProjLod|sign|sin|smoothstep|sqrt|step|tan|texture1D|texture1DLod|texture1DProj|texture1DProjLod|texture2D|texture2DLod|texture2DProj|texture2DProjLod|texture3D|texture3DLod|texture3DProj|texture3DProjLod|textureCube|textureCubeLod|transpose)\\b",name:"support.function.glsl"},{match:"\\b(asm|double|enum|extern|goto|inline|long|short|sizeof|static|typedef|union|unsigned|volatile)\\b",name:"invalid.illegal.glsl"},{include:"source.c"}],scopeName:"source.glsl",embeddedLangs:["c"]});var i=[...t.default,a]},42529:function(r,n,e){e.r(n),e.d(n,{default:function(){return u}});var t=e(51703),a=e(80378),i=e(50229),m=e(72430),o=e(83622),s=e(76358),c=e(5307);const d=Object.freeze({displayName:"Nim",fileTypes:["nim"],name:"nim",patterns:[{begin:"[ \\t]*##\\[",contentName:"comment.block.doc-comment.content.nim",end:"\\]##",name:"comment.block.doc-comment.nim",patterns:[{include:"#multilinedoccomment",name:"comment.block.doc-comment.nested.nim"}]},{begin:"[ \\t]*#\\[",contentName:"comment.block.content.nim",end:"\\]#",name:"comment.block.nim",patterns:[{include:"#multilinecomment",name:"comment.block.nested.nim"}]},{begin:"(^[ \\t]+)?(?=##)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.nim"}},end:"(?!\\G)",patterns:[{begin:"##",beginCaptures:{0:{name:"punctuation.definition.comment.nim"}},end:"\\n",name:"comment.line.number-sign.doc-comment.nim"}]},{begin:"(^[ \\t]+)?(?=#[^\\[])",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.nim"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.nim"}},end:"\\n",name:"comment.line.number-sign.nim"}]},{comment:"A nim procedure or method",name:"meta.proc.nim",patterns:[{begin:"\\b(proc|method|template|macro|iterator|converter|func)\\s+\\`?([^\\:\\{\\s\\`\\*\\(]*)\\`?(\\s*\\*)?\\s*(?=\\(|\\=|:|\\[|\\n|\\{)",captures:{1:{name:"keyword.other"},2:{name:"entity.name.function.nim"},3:{name:"keyword.control.export"}},end:"\\)",patterns:[{include:"source.nim"}]}]},{begin:'discard """',comment:"A discarded triple string literal comment",end:'"""(?!")',name:"comment.line.discarded.nim"},{include:"#float_literal"},{include:"#integer_literal"},{comment:"Operator as function name",match:"(?<=\\`)[^\\` ]+(?=\\`)",name:"entity.name.function.nim"},{captures:{1:{name:"keyword.control.export"}},comment:"Export qualifier.",match:"\\b\\s*(\\*)(?:\\s*(?=[,:])|\\s+(?=[=]))"},{captures:{1:{name:"support.type.nim"},2:{name:"keyword.control.export"}},comment:"Export qualifier following a type def.",match:"\\b([A-Z]\\w+)(\\*)"},{include:"#string_literal"},{comment:"Language Constants.",match:"\\b(true|false|Inf|NegInf|NaN|nil)\\b",name:"constant.language.nim"},{comment:"Keywords that affect program control flow or scope.",match:"\\b(block|break|case|continue|do|elif|else|end|except|finally|for|if|raise|return|try|when|while|yield)\\b",name:"keyword.control.nim"},{comment:"Keyword boolean operators for expressions.",match:"(\\b(and|in|is|isnot|not|notin|or|xor)\\b)",name:"keyword.boolean.nim"},{comment:"Generic operators for expressions.",match:"(=|\\+|-|\\*|/|<|>|@|\\$|~|&|%|!|\\?|\\^|\\.|:|\\\\)+",name:"keyword.operator.nim"},{comment:"Other keywords.",match:"(\\b(addr|as|asm|atomic|bind|cast|const|converter|concept|defer|discard|distinct|div|enum|export|from|import|include|let|mod|mixin|object|of|ptr|ref|shl|shr|static|type|using|var|tuple|iterator|macro|func|method|proc|template)\\b)",name:"keyword.other.nim"},{comment:"Invalid and unused keywords.",match:"(\\b(generic|interface|lambda|out|shared)\\b)",name:"invalid.illegal.invalid-keyword.nim"},{comment:"Common functions",match:"\\b(new|await|assert|echo|defined|declared|newException|countup|countdown|high|low)\\b",name:"keyword.other.common.function.nim"},{comment:"Built-in, concrete types.",match:"\\b(((uint|int)(8|16|32|64)?)|float(32|64)?|bool|string|auto|cstring|char|byte|tobject|typedesc|stmt|expr|any|untyped|typed)\\b",name:"storage.type.concrete.nim"},{comment:"Built-in, generic types.",match:"\\b(range|array|seq|set|pointer)\\b",name:"storage.type.generic.nim"},{comment:"Special types.",match:"\\b(openarray|varargs|void)\\b",name:"storage.type.generic.nim"},{comment:"Other constants.",match:"\\b[A-Z][A-Z0-9_]+\\b",name:"support.constant.nim"},{comment:"Other types.",match:"\\b[A-Z]\\w+\\b",name:"support.type.nim"},{comment:"Function call.",match:"\\b\\w+\\b(?=(\\[([a-zA-Z0-9_,]|\\s)+\\])?\\()",name:"support.function.any-method.nim"},{comment:"Function call (no parenthesis).",match:"(?!(openarray|varargs|void|range|array|seq|set|pointer|new|await|assert|echo|defined|declared|newException|countup|countdown|high|low|((uint|int)(8|16|32|64)?)|float(32|64)?|bool|string|auto|cstring|char|byte|tobject|typedesc|stmt|expr|any|untyped|typed|addr|as|asm|atomic|bind|cast|const|converter|concept|defer|discard|distinct|div|enum|export|from|import|include|let|mod|mixin|object|of|ptr|ref|shl|shr|static|type|using|var|tuple|iterator|macro|func|method|proc|template|and|in|is|isnot|not|notin|or|xor|proc|method|template|macro|iterator|converter|func|true|false|Inf|NegInf|NaN|nil|block|break|case|continue|do|elif|else|end|except|finally|for|if|raise|return|try|when|while|yield)\\b)\\w+\\s+(?!(and|in|is|isnot|not|notin|or|xor|[^a-zA-Z0-9_\"'`(-+]+)\\b)(?=[a-zA-Z0-9_\"'`(-+])",name:"support.function.any-method.nim"},{begin:'(^\\s*)?(?=\\{\\.emit: ?""")',beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.nim"}},end:"(?!\\G)(\\s*$\\n?)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.nim"}},patterns:[{begin:'\\{\\.(emit:) ?(""")',captures:{1:{name:"keyword.other.nim"},2:{name:"punctuation.section.embedded.begin.nim"}},contentName:"source.c",end:'(")""(?!")(\\.{0,1}\\})?',endCaptures:{0:{name:"punctuation.section.embedded.end.nim"},1:{name:"source.c"}},name:"meta.embedded.block.c",patterns:[{begin:"\\`",end:"\\`",name:"keyword.operator.nim"},{include:"source.c"}]}]},{begin:"\\{\\.",beginCaptures:{0:{name:"punctuation.pragma.start.nim"}},end:"\\.?\\}",endCaptures:{0:{name:"punctuation.pragma.end.nim"}},patterns:[{begin:"\\b([[:alpha:]]\\w*)(?:\\s|\\s*:)",beginCaptures:{1:{name:"meta.preprocessor.pragma.nim"}},end:"(?=\\.?\\}|,)",patterns:[{include:"source.nim"}]},{begin:"\\b([[:alpha:]]\\w*)\\(",beginCaptures:{1:{name:"meta.preprocessor.pragma.nim"}},end:"\\)",patterns:[{include:"source.nim"}]},{captures:{1:{name:"meta.preprocessor.pragma.nim"}},match:"\\b([[:alpha:]]\\w*)(?=\\.?\\}|,)"},{begin:'\\b([[:alpha:]]\\w*)(""")',beginCaptures:{1:{name:"meta.preprocessor.pragma.nim"},2:{name:"punctuation.definition.string.begin.nim"}},end:'"""(?!")',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.triple.raw.nim"},{begin:'\\b([[:alpha:]]\\w*)(")',beginCaptures:{1:{name:"meta.preprocessor.pragma.nim"},2:{name:"punctuation.definition.string.begin.nim"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.double.raw.nim"},{begin:"\\b(hint\\[\\w+\\]):",beginCaptures:{1:{name:"meta.preprocessor.pragma.nim"}},end:"(?=\\.?\\}|,)",patterns:[{include:"source.nim"}]},{match:",",name:"punctuation.separator.comma.nim"}]},{begin:'(^\\s*)?(?=asm """)',beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.nim"}},end:"(?!\\G)(\\s*$\\n?)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.nim"}},patterns:[{begin:'(asm) (""")',captures:{1:{name:"keyword.other.nim"},2:{name:"punctuation.section.embedded.begin.nim"}},contentName:"source.asm",end:'(")""(?!")',endCaptures:{0:{name:"punctuation.section.embedded.end.nim"},1:{name:"source.asm"}},name:"meta.embedded.block.asm",patterns:[{begin:"\\`",end:"\\`",name:"keyword.operator.nim"},{include:"source.asm"}]}]},{captures:{1:{name:"storage.type.function.nim"},2:{name:"keyword.operator.nim"}},comment:"tmpl specifier",match:'(tmpl(i)?)(?=( (html|xml|js|css|glsl|md))?""")'},{begin:'(^\\s*)?(?=html""")',beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.nim"}},end:"(?!\\G)(\\s*$\\n?)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.nim"}},patterns:[{begin:'(html)(""")',captures:{1:{name:"keyword.other.nim"},2:{name:"punctuation.section.embedded.begin.nim"}},contentName:"text.html",end:'(")""(?!")',endCaptures:{0:{name:"punctuation.section.embedded.end.nim"},1:{name:"text.html"}},name:"meta.embedded.block.html",patterns:[{begin:"(?<!\\$)(\\$)\\(",captures:{1:{name:"keyword.operator.nim"}},end:"\\)",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)\\{",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"\\}",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"(\\{|\\n)",endCaptures:{1:{name:"plain"}},patterns:[{include:"source.nim"}]},{match:"(?<!\\$)(\\$\\w+)",name:"keyword.operator.nim"},{include:"text.html.basic"}]}]},{begin:'(^\\s*)?(?=xml""")',beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.nim"}},end:"(?!\\G)(\\s*$\\n?)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.nim"}},patterns:[{begin:'(xml)(""")',captures:{1:{name:"keyword.other.nim"},2:{name:"punctuation.section.embedded.begin.nim"}},contentName:"text.xml",end:'(")""(?!")',endCaptures:{0:{name:"punctuation.section.embedded.end.nim"},1:{name:"text.xml"}},name:"meta.embedded.block.xml",patterns:[{begin:"(?<!\\$)(\\$)\\(",captures:{1:{name:"keyword.operator.nim"}},end:"\\)",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)\\{",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"\\}",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"(\\{|\\n)",endCaptures:{1:{name:"plain"}},patterns:[{include:"source.nim"}]},{match:"(?<!\\$)(\\$\\w+)",name:"keyword.operator.nim"},{include:"text.xml"}]}]},{begin:'(^\\s*)?(?=js""")',beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.nim"}},end:"(?!\\G)(\\s*$\\n?)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.nim"}},patterns:[{begin:'(js)(""")',captures:{1:{name:"keyword.other.nim"},2:{name:"punctuation.section.embedded.begin.nim"}},contentName:"source.js",end:'(")""(?!")',endCaptures:{0:{name:"punctuation.section.embedded.end.nim"},1:{name:"source.js"}},name:"meta.embedded.block.js",patterns:[{begin:"(?<!\\$)(\\$)\\(",captures:{1:{name:"keyword.operator.nim"}},end:"\\)",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)\\{",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"\\}",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"(\\{|\\n)",endCaptures:{1:{name:"plain"}},patterns:[{include:"source.nim"}]},{match:"(?<!\\$)(\\$\\w+)",name:"keyword.operator.nim"},{include:"source.js"}]}]},{begin:'(^\\s*)?(?=css""")',beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.nim"}},end:"(?!\\G)(\\s*$\\n?)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.nim"}},patterns:[{begin:'(css)(""")',captures:{1:{name:"keyword.other.nim"},2:{name:"punctuation.section.embedded.begin.nim"}},contentName:"source.css",end:'(")""(?!")',endCaptures:{0:{name:"punctuation.section.embedded.end.nim"},1:{name:"source.css"}},name:"meta.embedded.block.css",patterns:[{begin:"(?<!\\$)(\\$)\\(",captures:{1:{name:"keyword.operator.nim"}},end:"\\)",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)\\{",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"\\}",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"(\\{|\\n)",endCaptures:{1:{name:"plain"}},patterns:[{include:"source.nim"}]},{match:"(?<!\\$)(\\$\\w+)",name:"keyword.operator.nim"},{include:"source.css"}]}]},{begin:'(^\\s*)?(?=glsl""")',beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.nim"}},end:"(?!\\G)(\\s*$\\n?)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.nim"}},patterns:[{begin:'(glsl)(""")',captures:{1:{name:"keyword.other.nim"},2:{name:"punctuation.section.embedded.begin.nim"}},contentName:"source.glsl",end:'(")""(?!")',endCaptures:{0:{name:"punctuation.section.embedded.end.nim"},1:{name:"source.glsl"}},name:"meta.embedded.block.glsl",patterns:[{begin:"(?<!\\$)(\\$)\\(",captures:{1:{name:"keyword.operator.nim"}},end:"\\)",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)\\{",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"\\}",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"(\\{|\\n)",endCaptures:{1:{name:"plain"}},patterns:[{include:"source.nim"}]},{match:"(?<!\\$)(\\$\\w+)",name:"keyword.operator.nim"},{include:"source.glsl"}]}]},{begin:'(^\\s*)?(?=md""")',beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.nim"}},end:"(?!\\G)(\\s*$\\n?)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.nim"}},patterns:[{begin:'(md)(""")',captures:{1:{name:"keyword.other.nim"},2:{name:"punctuation.section.embedded.begin.nim"}},contentName:"text.html.markdown",end:'(")""(?!")',endCaptures:{0:{name:"punctuation.section.embedded.end.nim"},1:{name:"text.html.markdown"}},name:"meta.embedded.block.html.markdown",patterns:[{begin:"(?<!\\$)(\\$)\\(",captures:{1:{name:"keyword.operator.nim"}},end:"\\)",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)\\{",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"\\}",patterns:[{include:"source.nim"}]},{begin:"(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )",captures:{1:{name:"keyword.operator.nim"},2:{name:"keyword.operator.nim"}},end:"(\\{|\\n)",endCaptures:{1:{name:"plain"}},patterns:[{include:"source.nim"}]},{match:"(?<!\\$)(\\$\\w+)",name:"keyword.operator.nim"},{include:"text.html.markdown"}]}]}],repository:{char_escapes:{patterns:[{match:"\\\\[cC]|\\\\[rR]",name:"constant.character.escape.carriagereturn.nim"},{match:"\\\\[lL]|\\\\[nN]",name:"constant.character.escape.linefeed.nim"},{match:"\\\\[fF]",name:"constant.character.escape.formfeed.nim"},{match:"\\\\[tT]",name:"constant.character.escape.tabulator.nim"},{match:"\\\\[vV]",name:"constant.character.escape.verticaltabulator.nim"},{match:'\\\\\\"',name:"constant.character.escape.double-quote.nim"},{match:"\\\\'",name:"constant.character.escape.single-quote.nim"},{match:"\\\\[0-9]+",name:"constant.character.escape.chardecimalvalue.nim"},{match:"\\\\[aA]",name:"constant.character.escape.alert.nim"},{match:"\\\\[bB]",name:"constant.character.escape.backspace.nim"},{match:"\\\\[eE]",name:"constant.character.escape.escape.nim"},{match:"\\\\[xX]\\h\\h",name:"constant.character.escape.hex.nim"},{match:"\\\\\\\\",name:"constant.character.escape.backslash.nim"}]},extended_string_quoted_double_raw:{begin:'\\b(\\w+)(")',beginCaptures:{1:{name:"support.function.any-method.nim"},2:{name:"punctuation.definition.string.begin.nim"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.double.raw.nim",patterns:[{include:"#raw_string_escapes"}]},extended_string_quoted_triple_raw:{begin:'\\b(\\w+)(""")',beginCaptures:{1:{name:"support.function.any-method.nim"},2:{name:"punctuation.definition.string.begin.nim"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.triple.raw.nim"},float_literal:{patterns:[{match:"\\b\\d[_\\d]*((\\.\\d[_\\d]*([eE][\\+\\-]?\\d[_\\d]*)?)|([eE][\\+\\-]?\\d[_\\d]*))('([fF](32|64|128)|[fFdD]))?",name:"constant.numeric.float.decimal.nim"},{match:"\\b0[xX]\\h[_\\h]*'([fF](32|64|128)|[fFdD])",name:"constant.numeric.float.hexadecimal.nim"},{match:"\\b0o[0-7][_0-7]*'([fF](32|64|128)|[fFdD])",name:"constant.numeric.float.octal.nim"},{match:"\\b0(b|B)[01][_01]*'([fF](32|64|128)|[fFdD])",name:"constant.numeric.float.binary.nim"},{match:"\\b(\\d[_\\d]*)'([fF](32|64|128)|[fFdD])",name:"constant.numeric.float.decimal.nim"}]},fmt_interpolation:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.template-expression.begin.nim"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.template-expression.end.nim"}},name:"meta.template.expression.nim",patterns:[{begin:":",end:"(?=\\})",name:"meta.template.format-specifier.nim"},{include:"source.nim"}]},fmt_string:{begin:'\\b(fmt)(")',beginCaptures:{1:{name:"support.function.any-method.nim"},2:{name:"punctuation.definition.string.begin.nim"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.double.raw.nim",patterns:[{match:'(?<!")"(?!")',name:"invalid.illegal.nim"},{include:"#raw_string_escapes"},{include:"#fmt_interpolation"}]},fmt_string_call:{begin:'(fmt)\\((?=")',beginCaptures:{1:{name:"support.function.any-method.nim"}},end:"\\)",patterns:[{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.nim"}},end:'"(?=\\))',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.double.nim",patterns:[{match:'"',name:"invalid.illegal.nim"},{include:"#string_escapes"},{include:"#fmt_interpolation"}]}]},fmt_string_operator:{begin:'(&)(")',beginCaptures:{1:{name:"keyword.operator.nim"},2:{name:"punctuation.definition.string.begin.nim"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.double.nim",patterns:[{match:'"',name:"invalid.illegal.nim"},{include:"#string_escapes"},{include:"#fmt_interpolation"}]},fmt_string_triple:{begin:'\\b(fmt)(""")',beginCaptures:{1:{name:"support.function.any-method.nim"},2:{name:"punctuation.definition.string.begin.nim"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.triple.raw.nim",patterns:[{include:"#fmt_interpolation"}]},fmt_string_triple_operator:{begin:'(&)(""")',beginCaptures:{1:{name:"keyword.operator.nim"},2:{name:"punctuation.definition.string.begin.nim"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.triple.raw.nim",patterns:[{include:"#fmt_interpolation"}]},integer_literal:{patterns:[{match:"\\b(0[xX]\\h[_\\h]*)('(([iIuU](8|16|32|64))|[uU]))?",name:"constant.numeric.integer.hexadecimal.nim"},{match:"\\b(0o[0-7][_0-7]*)('(([iIuU](8|16|32|64))|[uU]))?",name:"constant.numeric.integer.octal.nim"},{match:"\\b(0(b|B)[01][_01]*)('(([iIuU](8|16|32|64))|[uU]))?",name:"constant.numeric.integer.binary.nim"},{match:"\\b(\\d[_\\d]*)('(([iIuU](8|16|32|64))|[uU]))?",name:"constant.numeric.integer.decimal.nim"}]},multilinecomment:{begin:"#\\[",end:"\\]#",patterns:[{include:"#multilinecomment"}]},multilinedoccomment:{begin:"##\\[",end:"\\]##",patterns:[{include:"#multilinedoccomment"}]},raw_string_escapes:{captures:{1:{name:"constant.character.escape.double-quote.nim"}},match:'[^"]("")'},string_escapes:{patterns:[{match:"\\\\[pP]",name:"constant.character.escape.newline.nim"},{match:"\\\\[uU]\\h\\h\\h\\h",name:"constant.character.escape.hex.nim"},{match:"\\\\[uU]\\{\\h+\\}",name:"constant.character.escape.hex.nim"},{include:"#char_escapes"}]},string_literal:{patterns:[{include:"#fmt_string_triple"},{include:"#fmt_string_triple_operator"},{include:"#extended_string_quoted_triple_raw"},{include:"#string_quoted_triple_raw"},{include:"#fmt_string_operator"},{include:"#fmt_string"},{include:"#fmt_string_call"},{include:"#string_quoted_double_raw"},{include:"#extended_string_quoted_double_raw"},{include:"#string_quoted_single"},{include:"#string_quoted_triple"},{include:"#string_quoted_double"}]},string_quoted_double:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.nim"}},comment:"Double Quoted String",end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.double.nim",patterns:[{include:"#string_escapes"}]},string_quoted_double_raw:{begin:'\\br"',beginCaptures:{0:{name:"punctuation.definition.string.begin.nim"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.double.raw.nim",patterns:[{include:"#raw_string_escapes"}]},string_quoted_single:{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.nim"}},comment:"Single quoted character literal",end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.single.nim",patterns:[{include:"#char_escapes"},{match:"([^']{2,}?)",name:"invalid.illegal.character.nim"}]},string_quoted_triple:{begin:'"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.nim"}},comment:"Triple Quoted String",end:'"""(?!")',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.triple.nim"},string_quoted_triple_raw:{begin:'r"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.nim"}},comment:"Raw Triple Quoted String",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.nim"}},name:"string.quoted.triple.raw.nim"}},scopeName:"source.nim",embeddedLangs:["c","html","xml","javascript","css","glsl","markdown"]});var u=[...t.default,...a.default,...i.default,...m.default,...o.default,...s.default,...c.default,d]},50229:function(r,n,e){e.r(n),e.d(n,{default:function(){return i}});var t=e(20257);const a=Object.freeze({displayName:"XML",name:"xml",patterns:[{begin:"(<\\?)\\s*([-_a-zA-Z0-9]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"}},end:"(\\?>)",name:"meta.tag.preprocessor.xml",patterns:[{match:" ([a-zA-Z-]+)",name:"entity.other.attribute-name.xml"},{include:"#doublequotedString"},{include:"#singlequotedString"}]},{begin:"(<!)(DOCTYPE)\\s+([:a-zA-Z_][:a-zA-Z0-9_.-]*)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.doctype.xml"},3:{name:"variable.language.documentroot.xml"}},end:"\\s*(>)",name:"meta.tag.sgml.doctype.xml",patterns:[{include:"#internalSubset"}]},{include:"#comments"},{begin:"(<)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(?=(\\s[^>]*)?></\\2>)",beginCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"},3:{name:"entity.name.tag.namespace.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(>)(</)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(>)",endCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"punctuation.definition.tag.xml"},3:{name:"entity.name.tag.xml"},4:{name:"entity.name.tag.namespace.xml"},5:{name:"punctuation.separator.namespace.xml"},6:{name:"entity.name.tag.localname.xml"},7:{name:"punctuation.definition.tag.xml"}},name:"meta.tag.no-content.xml",patterns:[{include:"#tagStuff"}]},{begin:"(</?)(?:([-\\w\\.]+)((:)))?([-\\w\\.:]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.namespace.xml"},3:{name:"entity.name.tag.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(/?>)",name:"meta.tag.xml",patterns:[{include:"#tagStuff"}]},{include:"#entity"},{include:"#bare-ampersand"},{begin:"<%@",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java-props.embedded.xml",patterns:[{match:"page|include|taglib",name:"keyword.other.page-props.xml"}]},{begin:"<%[!=]?(?!--)",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"(?!--)%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java.embedded.xml",patterns:[{include:"source.java"}]},{begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"]]>",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.unquoted.cdata.xml"}],repository:{EntityDecl:{begin:"(<!)(ENTITY)\\s+(%\\s+)?([:a-zA-Z_][:a-zA-Z0-9_.-]*)(\\s+(?:SYSTEM|PUBLIC)\\s+)?",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.entity.xml"},3:{name:"punctuation.definition.entity.xml"},4:{name:"variable.language.entity.xml"},5:{name:"keyword.other.entitytype.xml"}},end:"(>)",patterns:[{include:"#doublequotedString"},{include:"#singlequotedString"}]},"bare-ampersand":{match:"&",name:"invalid.illegal.bad-ampersand.xml"},comments:{patterns:[{begin:"<%--",captures:{0:{name:"punctuation.definition.comment.xml"},end:"--%>",name:"comment.block.xml"}},{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.xml"}},end:"-->",name:"comment.block.xml",patterns:[{begin:"--(?!>)",captures:{0:{name:"invalid.illegal.bad-comments-or-CDATA.xml"}}}]}]},doublequotedString:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.double.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},entity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(&)([:a-zA-Z_][:a-zA-Z0-9_.-]*|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.xml"},internalSubset:{begin:"(\\[)",captures:{1:{name:"punctuation.definition.constant.xml"}},end:"(\\])",name:"meta.internalsubset.xml",patterns:[{include:"#EntityDecl"},{include:"#parameterEntity"},{include:"#comments"}]},parameterEntity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(%)([:a-zA-Z_][:a-zA-Z0-9_.-]*)(;)",name:"constant.character.parameter-entity.xml"},singlequotedString:{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.single.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},tagStuff:{patterns:[{captures:{1:{name:"entity.other.attribute-name.namespace.xml"},2:{name:"entity.other.attribute-name.xml"},3:{name:"punctuation.separator.namespace.xml"},4:{name:"entity.other.attribute-name.localname.xml"}},match:"(?:^|\\s+)(?:([-\\w.]+)((:)))?([-\\w.:]+)\\s*="},{include:"#doublequotedString"},{include:"#singlequotedString"}]}},scopeName:"text.xml",embeddedLangs:["java"]});var i=[...t.default,a]}}]);
