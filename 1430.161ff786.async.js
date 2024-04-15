"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1430],{61430:function(i,e,n){n.r(e),n.d(e,{default:function(){return t}});var t=[Object.freeze({displayName:"Swift",name:"swift",patterns:[{include:"#root"}],repository:{"async-throws":{captures:{1:{name:"invalid.illegal.await-must-precede-throws.swift"},2:{name:"storage.modifier.exception.swift"},3:{name:"storage.modifier.async.swift"}},match:"\\b(?:(throws\\s+async|rethrows\\s+async)|(throws|rethrows)|(async))\\b"},attributes:{patterns:[{begin:"((@)available)(\\()",beginCaptures:{1:{name:"storage.modifier.attribute.swift"},2:{name:"punctuation.definition.attribute.swift"},3:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.attribute.available.swift",patterns:[{captures:{1:{name:"keyword.other.platform.os.swift"},2:{name:"constant.numeric.swift"}},match:"\\b(swift|(?:iOS|macOS|OSX|watchOS|tvOS|UIKitForMac)(?:ApplicationExtension)?)\\b(?:\\s+([0-9]+(?:\\.[0-9]+)*\\b))?"},{begin:"\\b(introduced|deprecated|obsoleted)\\s*(:)\\s*",beginCaptures:{1:{name:"keyword.other.swift"},2:{name:"punctuation.separator.key-value.swift"}},end:"(?!\\G)",patterns:[{match:"\\b[0-9]+(?:\\.[0-9]+)*\\b",name:"constant.numeric.swift"}]},{begin:'\\b(message|renamed)\\s*(:)\\s*(?=")',beginCaptures:{1:{name:"keyword.other.swift"},2:{name:"punctuation.separator.key-value.swift"}},end:"(?!\\G)",patterns:[{include:"#literals"}]},{captures:{1:{name:"keyword.other.platform.all.swift"},2:{name:"keyword.other.swift"},3:{name:"invalid.illegal.character-not-allowed-here.swift"}},match:"(?:(\\*)|\\b(deprecated|unavailable|noasync)\\b)\\s*(.*?)(?=[,)])"}]},{begin:"((@)objc)(\\()",beginCaptures:{1:{name:"storage.modifier.attribute.swift"},2:{name:"punctuation.definition.attribute.swift"},3:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.attribute.objc.swift",patterns:[{captures:{1:{name:"invalid.illegal.missing-colon-after-selector-piece.swift"}},match:"\\w*(?::(?:\\w*:)*(\\w*))?",name:"entity.name.function.swift"}]},{begin:"(@)(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)",beginCaptures:{0:{name:"storage.modifier.attribute.swift"},1:{name:"punctuation.definition.attribute.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"}},comment:"any other attribute",end:"(?!\\G\\()",name:"meta.attribute.swift",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.arguments.attribute.swift",patterns:[{include:"#expressions"}]}]}]},"builtin-functions":{patterns:[{comment:"Member functions in the standard library in Swift 3 which may be used with trailing closures and no parentheses",match:"(?<=\\.)(?:s(?:ort(?:ed)?|plit)|contains|index|partition|f(?:i(?:lter|rst)|orEach|latMap)|with(?:MutableCharacters|CString|U(?:nsafe(?:Mutable(?:BufferPointer|Pointer(?:s|To(?:Header|Elements)))|BufferPointer)|TF8Buffer))|m(?:in|a(?:p|x)))(?=\\s*[({])\\b",name:"support.function.swift"},{comment:"Member functions in the standard library in Swift 3",match:"(?<=\\.)(?:s(?:ymmetricDifference|t(?:oreBytes|arts|ride)|ortInPlace|u(?:ccessor|ffix|btract(?:ing|InPlace|WithOverflow)?)|quareRoot|amePosition)|h(?:oldsUnique(?:Reference|OrPinnedReference)|as(?:Suffix|Prefix))|ne(?:gate(?:d)?|xt)|c(?:o(?:untByEnumerating|py(?:Bytes)?)|lamp(?:ed)?|reate)|t(?:o(?:IntMax|Opaque|UIntMax)|ake(?:RetainedValue|UnretainedValue)|r(?:uncatingRemainder|a(?:nscodedLength|ilSurrogate)))|i(?:s(?:MutableAndUniquelyReferenced(?:OrPinned)?|S(?:trictSu(?:perset(?:Of)?|bset(?:Of)?)|u(?:perset(?:Of)?|bset(?:Of)?))|Continuation|T(?:otallyOrdered|railSurrogate)|Disjoint(?:With)?|Unique(?:Reference|lyReferenced(?:OrPinned)?)|Equal|Le(?:ss(?:ThanOrEqualTo)?|adSurrogate))|n(?:sert(?:ContentsOf)?|tersect(?:ion|InPlace)?|itialize(?:Memory|From)?|dex(?:Of|ForKey)))|o(?:verlaps|bjectAt)|d(?:i(?:stance(?:To)?|vide(?:d|WithOverflow)?)|e(?:s(?:cendant|troy)|code(?:CString)?|initialize|alloc(?:ate(?:Capacity)?)?)|rop(?:First|Last))|u(?:n(?:ion(?:InPlace)?|derestimateCount|wrappedOrError)|p(?:date(?:Value)?|percased))|join(?:ed|WithSeparator)|p(?:op(?:First|Last)|ass(?:Retained|Unretained)|re(?:decessor|fix))|e(?:scape(?:d)?|n(?:code|umerate(?:d)?)|lementsEqual|xclusiveOr(?:InPlace)?)|f(?:orm(?:Remainder|S(?:ymmetricDifference|quareRoot)|TruncatingRemainder|In(?:tersection|dex)|Union)|latten|rom(?:CString(?:RepairingIllFormedUTF8)?|Opaque))|w(?:i(?:thMemoryRebound|dth)|rite(?:To)?)|l(?:o(?:wercased|ad)|e(?:adSurrogate|xicographical(?:Compare|lyPrecedes)))|a(?:ss(?:ign(?:BackwardFrom|From)?|umingMemoryBound)|d(?:d(?:ing(?:Product)?|Product|WithOverflow)?|vanced(?:By)?)|utorelease|ppend(?:ContentsOf)?|lloc(?:ate)?|bs)|r(?:ound(?:ed)?|e(?:serveCapacity|tain|duce|place(?:Range|Subrange)?|verse(?:d)?|quest(?:NativeBuffer|UniqueMutableBackingBuffer)|lease|m(?:ove(?:Range|Subrange|Value(?:ForKey)?|First|Last|A(?:tIndex|ll))?|ainder(?:WithOverflow)?)))|ge(?:nerate|t(?:Objects|Element))|m(?:in(?:imum(?:Magnitude)?|Element)|ove(?:Initialize(?:Memory|BackwardFrom|From)?|Assign(?:From)?)?|ultipl(?:y(?:WithOverflow)?|ied)|easure|a(?:ke(?:Iterator|Description)|x(?:imum(?:Magnitude)?|Element)))|bindMemory)(?=\\s*\\()",name:"support.function.swift"},{comment:"Member functions in the standard library in Swift 2 only",match:"(?<=\\.)(?:s(?:uperclassMirror|amePositionIn|tartsWith)|nextObject|c(?:haracterAtIndex|o(?:untByEnumeratingWithState|pyWithZone)|ustom(?:Mirror|PlaygroundQuickLook))|is(?:EmptyInput|ASCII)|object(?:Enumerator|ForKey|AtIndex)|join|put|keyEnumerator|withUnsafeMutablePointerToValue|length|getMirror|m(?:oveInitializeAssignFrom|ember))(?=\\s*\\()",name:"support.function.swift"}]},"builtin-global-functions":{patterns:[{begin:"\\b(type)(\\()\\s*(of)(:)",beginCaptures:{1:{name:"support.function.dynamic-type.swift"},2:{name:"punctuation.definition.arguments.begin.swift"},3:{name:"support.variable.parameter.swift"},4:{name:"punctuation.separator.argument-label.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},patterns:[{include:"#expressions"}]},{comment:"Global functions available in Swift 3 which may be used with trailing closures and no parentheses",match:"\\b(?:anyGenerator|autoreleasepool)(?=\\s*[({])\\b",name:"support.function.swift"},{comment:"Global functions available in Swift 3",match:"\\b(?:s(?:tride(?:of(?:Value)?)?|izeof(?:Value)?|equence|wap)|numericCast|transcode|is(?:UniquelyReferenced(?:NonObjC)?|KnownUniquelyReferenced)|zip|d(?:ump|ebugPrint)|unsafe(?:BitCast|Downcast|Unwrap|Address(?:Of)?)|pr(?:int|econdition(?:Failure)?)|fatalError|with(?:Unsafe(?:MutablePointer|Pointer)|ExtendedLifetime|VaList)|a(?:ssert(?:ionFailure)?|lignof(?:Value)?|bs)|re(?:peatElement|adLine)|getVaList|m(?:in|ax))(?=\\s*\\()",name:"support.function.swift"},{comment:"Global functions available in Swift 2 only",match:"\\b(?:s(?:ort|uffix|pli(?:ce|t))|insert|overlaps|d(?:istance|rop(?:First|Last))|join|prefix|extend|withUnsafe(?:MutablePointers|Pointers)|lazy|advance|re(?:flect|move(?:Range|Last|A(?:tIndex|ll))))(?=\\s*\\()",name:"support.function.swift"}]},"builtin-properties":{patterns:[{comment:"The simpler (?<=\\bProcess\\.|\\bCommandLine\\.) breaks VS Code / Atom, see https://github.com/textmate/swift.tmbundle/issues/29",match:"(?<=^Process\\.|\\WProcess\\.|^CommandLine\\.|\\WCommandLine\\.)(arguments|argc|unsafeArgv)",name:"support.variable.swift"},{comment:"Properties in the standard library in Swift 3",match:"(?<=\\.)(?:s(?:t(?:artIndex|ri(?:ngValue|de))|i(?:ze|gn(?:BitIndex|ificand(?:Bit(?:Count|Pattern)|Width)?|alingNaN)?)|u(?:perclassMirror|mmary|bscriptBaseAddress))|h(?:eader|as(?:hValue|PointerRepresentation))|n(?:ulTerminatedUTF8|ext(?:Down|Up)|a(?:n|tiveOwner))|c(?:haracters|ount(?:TrailingZeros)?|ustom(?:Mirror|PlaygroundQuickLook)|apacity)|i(?:s(?:S(?:ign(?:Minus|aling(?:NaN)?)|ubnormal)|N(?:ormal|aN)|Canonical|Infinite|Zero|Empty|Finite|ASCII)|n(?:dices|finity)|dentity)|owner|de(?:scription|bugDescription)|u(?:n(?:safelyUnwrapped|icodeScalar(?:s)?|derestimatedCount)|tf(?:16|8(?:Start|C(?:String|odeUnitCount))?)|intValue|ppercaseString|lp(?:OfOne)?)|p(?:i|ointee)|e(?:ndIndex|lements|xponent(?:Bit(?:Count|Pattern))?)|value(?:s)?|keys|quietNaN|f(?:irst(?:ElementAddress(?:IfContiguous)?)?|loatingPointClass)|l(?:ittleEndian|owercaseString|eastNo(?:nzeroMagnitude|rmalMagnitude)|a(?:st|zy))|a(?:l(?:ignment|l(?:ocatedElementCount|Zeros))|rray(?:PropertyIsNativeTypeChecked)?)|ra(?:dix|wValue)|greatestFiniteMagnitude|m(?:in|emory|ax)|b(?:yteS(?:ize|wapped)|i(?:nade|tPattern|gEndian)|uffer|ase(?:Address)?))\\b",name:"support.variable.swift"},{comment:"Properties in the standard library in Swift 2 only",match:"(?<=\\.)(?:boolValue|disposition|end|objectIdentifier|quickLookObject|start|valueType)\\b",name:"support.variable.swift"},{comment:"Enum cases in the standard library - note that there is some overlap between these and the properties",match:"(?<=\\.)(?:s(?:calarValue|i(?:ze|gnalingNaN)|o(?:und|me)|uppressed|prite|et)|n(?:one|egative(?:Subnormal|Normal|Infinity|Zero))|c(?:ol(?:or|lection)|ustomized)|t(?:o(?:NearestOr(?:Even|AwayFromZero)|wardZero)|uple|ext)|i(?:nt|mage)|optional|d(?:ictionary|o(?:uble|wn))|u(?:Int|p|rl)|p(?:o(?:sitive(?:Subnormal|Normal|Infinity|Zero)|int)|lus)|e(?:rror|mptyInput)|view|quietNaN|float|a(?:ttributedString|wayFromZero)|r(?:ectangle|ange)|generated|minus|b(?:ool|ezierPath))\\b",name:"support.variable.swift"}]},"builtin-types":{comment:"Types provided in the standard library",patterns:[{include:"#builtin-types-builtin-class-type"},{include:"#builtin-types-builtin-enum-type"},{include:"#builtin-types-builtin-protocol-type"},{include:"#builtin-types-builtin-struct-type"},{include:"#builtin-types-builtin-typealias"},{match:"\\bAny\\b",name:"support.type.any.swift"}]},"builtin-types-builtin-class-type":{comment:"Builtin class types",match:"\\b(Managed(Buffer|ProtoBuffer)|NonObjectiveCBase|AnyGenerator)\\b",name:"support.class.swift"},"builtin-types-builtin-enum-type":{patterns:[{comment:"CommandLine is an enum, but it acts like a constant",match:"\\b(?:CommandLine|Process(?=\\.))\\b",name:"support.constant.swift"},{comment:"The return type of a function that never returns",match:"\\bNever\\b",name:"support.constant.never.swift"},{comment:"Enum types in the standard library in Swift 3",match:"\\b(?:ImplicitlyUnwrappedOptional|Representation|MemoryLayout|FloatingPointClassification|SetIndexRepresentation|SetIteratorRepresentation|FloatingPointRoundingRule|UnicodeDecodingResult|Optional|DictionaryIndexRepresentation|AncestorRepresentation|DisplayStyle|PlaygroundQuickLook|Never|FloatingPointSign|Bit|DictionaryIteratorRepresentation)\\b",name:"support.type.swift"},{comment:"Enum types in the standard library in Swift 2 only",match:"\\b(?:MirrorDisposition|QuickLookObject)\\b",name:"support.type.swift"}]},"builtin-types-builtin-protocol-type":{patterns:[{comment:"Protocols in the standard library in Swift 3",match:"\\b(?:Ra(?:n(?:domAccess(?:Collection|Indexable)|geReplaceable(?:Collection|Indexable))|wRepresentable)|M(?:irrorPath|utable(?:Collection|Indexable))|Bi(?:naryFloatingPoint|twiseOperations|directional(?:Collection|Indexable))|S(?:tr(?:ideable|eamable)|igned(?:Number|Integer)|e(?:tAlgebra|quence))|Hashable|C(?:o(?:llection|mparable)|ustom(?:Reflectable|StringConvertible|DebugStringConvertible|PlaygroundQuickLookable|LeafReflectable)|VarArg)|TextOutputStream|I(?:n(?:teger(?:Arithmetic)?|dexable(?:Base)?)|teratorProtocol)|OptionSet|Un(?:signedInteger|icodeCodec)|E(?:quatable|rror|xpressibleBy(?:BooleanLiteral|String(?:Interpolation|Literal)|NilLiteral|IntegerLiteral|DictionaryLiteral|UnicodeScalarLiteral|ExtendedGraphemeClusterLiteral|FloatLiteral|ArrayLiteral))|FloatingPoint|L(?:osslessStringConvertible|azy(?:SequenceProtocol|CollectionProtocol))|A(?:nyObject|bsoluteValuable))\\b",name:"support.type.swift"},{comment:"Protocols in the standard library in Swift 2 only",match:"\\b(?:Ran(?:domAccessIndexType|geReplaceableCollectionType)|GeneratorType|M(?:irror(?:Type|PathType)|utable(?:Sliceable|CollectionType))|B(?:i(?:twiseOperationsType|directionalIndexType)|oolean(?:Type|LiteralConvertible))|S(?:tring(?:InterpolationConvertible|LiteralConvertible)|i(?:nkType|gned(?:NumberType|IntegerType))|e(?:tAlgebraType|quenceType)|liceable)|NilLiteralConvertible|C(?:ollectionType|VarArgType)|Inte(?:rvalType|ger(?:Type|LiteralConvertible|ArithmeticType))|O(?:utputStreamType|ptionSetType)|DictionaryLiteralConvertible|Un(?:signedIntegerType|icode(?:ScalarLiteralConvertible|CodecType))|E(?:rrorType|xten(?:sibleCollectionType|dedGraphemeClusterLiteralConvertible))|F(?:orwardIndexType|loat(?:ingPointType|LiteralConvertible))|A(?:nyCollectionType|rrayLiteralConvertible))\\b",name:"support.type.swift"}]},"builtin-types-builtin-struct-type":{patterns:[{comment:"Structs in the standard library in Swift 3",match:"\\b(?:R(?:e(?:peat(?:ed)?|versed(?:RandomAccess(?:Collection|Index)|Collection|Index))|an(?:domAccessSlice|ge(?:Replaceable(?:RandomAccessSlice|BidirectionalSlice|Slice)|Generator)?))|Generator(?:Sequence|OfOne)|M(?:irror|utable(?:Ran(?:domAccessSlice|geReplaceable(?:RandomAccessSlice|BidirectionalSlice|Slice))|BidirectionalSlice|Slice)|anagedBufferPointer)|B(?:idirectionalSlice|ool)|S(?:t(?:aticString|ri(?:ng|deT(?:hrough(?:Generator|Iterator)?|o(?:Generator|Iterator)?)))|et(?:I(?:ndex|terator))?|lice)|HalfOpenInterval|C(?:haracter(?:View)?|o(?:ntiguousArray|untable(?:Range|ClosedRange)|llectionOfOne)|OpaquePointer|losed(?:Range(?:I(?:ndex|terator))?|Interval)|VaListPointer)|I(?:n(?:t(?:16|8|32|64)?|d(?:ices|ex(?:ing(?:Generator|Iterator))?))|terator(?:Sequence|OverOne)?)|Zip2(?:Sequence|Iterator)|O(?:paquePointer|bjectIdentifier)|D(?:ictionary(?:I(?:ndex|terator)|Literal)?|ouble|efault(?:RandomAccessIndices|BidirectionalIndices|Indices))|U(?:n(?:safe(?:RawPointer|Mutable(?:RawPointer|BufferPointer|Pointer)|BufferPointer(?:Generator|Iterator)?|Pointer)|icodeScalar(?:View)?|foldSequence|managed)|TF(?:16(?:View)?|8(?:View)?|32)|Int(?:16|8|32|64)?)|Join(?:Generator|ed(?:Sequence|Iterator))|PermutationGenerator|E(?:numerate(?:Generator|Sequence|d(?:Sequence|Iterator))|mpty(?:Generator|Collection|Iterator))|Fl(?:oat(?:80)?|atten(?:Generator|BidirectionalCollection(?:Index)?|Sequence|Collection(?:Index)?|Iterator))|L(?:egacyChildren|azy(?:RandomAccessCollection|Map(?:RandomAccessCollection|Generator|BidirectionalCollection|Sequence|Collection|Iterator)|BidirectionalCollection|Sequence|Collection|Filter(?:Generator|BidirectionalCollection|Sequence|Collection|I(?:ndex|terator))))|A(?:ny(?:RandomAccessCollection|Generator|BidirectionalCollection|Sequence|Hashable|Collection|I(?:ndex|terator))|utoreleasingUnsafeMutablePointer|rray(?:Slice)?))\\b",name:"support.type.swift"},{comment:"Structs in the standard library in Swift 2 only",match:"\\b(?:R(?:everse(?:RandomAccess(?:Collection|Index)|Collection|Index)|awByte)|Map(?:Generator|Sequence|Collection)|S(?:inkOf|etGenerator)|Zip2Generator|DictionaryGenerator|Filter(?:Generator|Sequence|Collection(?:Index)?)|LazyForwardCollection|Any(?:RandomAccessIndex|BidirectionalIndex|Forward(?:Collection|Index)))\\b",name:"support.type.swift"}]},"builtin-types-builtin-typealias":{patterns:[{comment:"Typealiases in the standard library in Swift 3",match:"\\b(?:Raw(?:Significand|Exponent|Value)|B(?:ooleanLiteralType|uffer|ase)|S(?:t(?:orage|r(?:i(?:ngLiteralType|de)|eam(?:1|2)))|ubSequence)|NativeBuffer|C(?:hild(?:ren)?|Bool|S(?:hort|ignedChar)|odeUnit|Char(?:16|32)?|Int|Double|Unsigned(?:Short|Char|Int|Long(?:Long)?)|Float|WideChar|Long(?:Long)?)|I(?:n(?:t(?:Max|egerLiteralType)|d(?:ices|ex(?:Distance)?))|terator)|Distance|U(?:n(?:icodeScalar(?:Type|Index|View|LiteralType)|foldFirstSequence)|TF(?:16(?:Index|View)|8Index)|IntMax)|E(?:lement(?:s)?|x(?:tendedGraphemeCluster(?:Type|LiteralType)|ponent))|V(?:oid|alue)|Key|Float(?:32|LiteralType|64)|AnyClass)\\b",name:"support.type.swift"},{comment:"Typealiases in the standard library in Swift 2 only",match:"\\b(?:Generator|PlaygroundQuickLook|UWord|Word)\\b",name:"support.type.swift"}]},"code-block":{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.scope.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.scope.end.swift"}},patterns:[{include:"$self"}]},comments:{patterns:[{captures:{1:{name:"punctuation.definition.comment.swift"}},match:"\\A^(#!).*$\\n?",name:"comment.line.number-sign.swift"},{begin:"/\\*\\*(?!/)",beginCaptures:{0:{name:"punctuation.definition.comment.begin.swift"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.swift"}},name:"comment.block.documentation.swift",patterns:[{include:"#comments-nested"}]},{begin:"/\\*:",beginCaptures:{0:{name:"punctuation.definition.comment.begin.swift"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.swift"}},name:"comment.block.documentation.playground.swift",patterns:[{include:"#comments-nested"}]},{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.swift"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.swift"}},name:"comment.block.swift",patterns:[{include:"#comments-nested"}]},{match:"\\*/",name:"invalid.illegal.unexpected-end-of-block-comment.swift"},{begin:"(^[ \\t]+)?(?=//)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.swift"}},end:"(?!\\G)",patterns:[{begin:"///",beginCaptures:{0:{name:"punctuation.definition.comment.swift"}},end:"$",name:"comment.line.triple-slash.documentation.swift"},{begin:"//:",beginCaptures:{0:{name:"punctuation.definition.comment.swift"}},end:"$",name:"comment.line.double-slash.documentation.swift"},{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.swift"}},end:"$",name:"comment.line.double-slash.swift"}]}]},"comments-nested":{begin:"/\\*",end:"\\*/",patterns:[{include:"#comments-nested"}]},"compiler-control":{patterns:[{begin:"^\\s*(#)(if|elseif)\\s+(false)\\b.*?(?=$|//|/\\*)",beginCaptures:{0:{name:"meta.preprocessor.conditional.swift"},1:{name:"punctuation.definition.preprocessor.swift"},2:{name:"keyword.control.import.preprocessor.conditional.swift"},3:{name:"constant.language.boolean.swift"}},contentName:"comment.block.preprocessor.swift",end:"(?=^\\s*(#(elseif|else|endif)\\b))"},{begin:"^\\s*(#)(if|elseif)\\s+",captures:{1:{name:"punctuation.definition.preprocessor.swift"},2:{name:"keyword.control.import.preprocessor.conditional.swift"}},end:"(?=\\s*(?://|/\\*))|$",name:"meta.preprocessor.conditional.swift",patterns:[{match:"(&&|\\|\\|)",name:"keyword.operator.logical.swift"},{match:"\\b(true|false)\\b",name:"constant.language.boolean.swift"},{captures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"},3:{name:"support.constant.platform.architecture.swift"},4:{name:"punctuation.definition.parameters.end.swift"}},match:"\\b(arch)\\s*(\\()\\s*(?:(arm|arm64|powerpc64|powerpc64le|i386|x86_64|s390x)|\\w+)\\s*(\\))"},{captures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"},3:{name:"support.constant.platform.os.swift"},4:{name:"punctuation.definition.parameters.end.swift"}},match:"\\b(os)\\s*(\\()\\s*(?:(macOS|OSX|iOS|tvOS|watchOS|Android|Linux|FreeBSD|Windows|PS4)|\\w+)\\s*(\\))"},{captures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"},3:{name:"entity.name.type.module.swift"},4:{name:"punctuation.definition.parameters.end.swift"}},match:"\\b(canImport)\\s*(\\()([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)(\\))"},{begin:"\\b(targetEnvironment)\\s*(\\()",beginCaptures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"}},end:"(\\))|$",endCaptures:{1:{name:"punctuation.definition.parameters.end.swift"}},patterns:[{match:"\\b(simulator|UIKitForMac)\\b",name:"support.constant.platform.environment.swift"}]},{begin:"\\b(swift|compiler)\\s*(\\()",beginCaptures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"}},end:"(\\))|$",endCaptures:{1:{name:"punctuation.definition.parameters.end.swift"}},patterns:[{match:">=|<",name:"keyword.operator.comparison.swift"},{match:"\\b[0-9]+(?:\\.[0-9]+)*\\b",name:"constant.numeric.swift"}]}]},{captures:{1:{name:"punctuation.definition.preprocessor.swift"},2:{name:"keyword.control.import.preprocessor.conditional.swift"},3:{patterns:[{match:"\\S+",name:"invalid.illegal.character-not-allowed-here.swift"}]}},match:"^\\s*(#)(else|endif)(.*?)(?=$|//|/\\*)",name:"meta.preprocessor.conditional.swift"},{captures:{1:{name:"punctuation.definition.preprocessor.swift"},2:{name:"keyword.control.import.preprocessor.sourcelocation.swift"},4:{name:"punctuation.definition.parameters.begin.swift"},5:{patterns:[{begin:'(file)\\s*(:)\\s*(?=")',beginCaptures:{1:{name:"support.variable.parameter.swift"},2:{name:"punctuation.separator.key-value.swift"}},end:"(?!\\G)",patterns:[{include:"#literals"}]},{captures:{1:{name:"support.variable.parameter.swift"},2:{name:"punctuation.separator.key-value.swift"},3:{name:"constant.numeric.integer.swift"}},match:"(line)\\s*(:)\\s*([0-9]+)"},{match:",",name:"punctuation.separator.parameters.swift"},{match:"\\S+",name:"invalid.illegal.character-not-allowed-here.swift"}]},6:{name:"punctuation.definition.parameters.begin.swift"},7:{patterns:[{match:"\\S+",name:"invalid.illegal.character-not-allowed-here.swift"}]}},match:"^\\s*(#)(sourceLocation)((\\()([^)]*)(\\)))(.*?)(?=$|//|/\\*)",name:"meta.preprocessor.sourcelocation.swift"}]},conditionals:{patterns:[{begin:"(?<!\\.)\\b(if|guard|switch|for)\\b",beginCaptures:{1:{patterns:[{include:"#keywords"}]}},end:"(?=\\{)",patterns:[{include:"#expressions-without-trailing-closures"}]},{begin:"(?<!\\.)\\b(while)\\b",beginCaptures:{1:{patterns:[{include:"#keywords"}]}},comment:"while can be the end of a repeat-while statement so doesn't necessarily have braces after it",end:"(?=\\{)|$",patterns:[{include:"#expressions-without-trailing-closures"}]}]},declarations:{patterns:[{include:"#declarations-function"},{include:"#declarations-function-initializer"},{include:"#declarations-function-subscript"},{include:"#declarations-typed-variable-declaration"},{include:"#declarations-import"},{include:"#declarations-operator"},{include:"#declarations-precedencegroup"},{include:"#declarations-protocol"},{include:"#declarations-type"},{include:"#declarations-extension"},{include:"#declarations-typealias"},{include:"#declarations-macro"}]},"declarations-available-types":{patterns:[{include:"#comments"},{include:"#builtin-types"},{include:"#attributes"},{match:"\\basync\\b",name:"storage.modifier.async.swift"},{match:"\\b(?:throws|rethrows)\\b",name:"storage.modifier.exception.swift"},{match:"\\bsome\\b",name:"keyword.other.operator.type.opaque.swift"},{match:"\\bany\\b",name:"keyword.other.operator.type.existential.swift"},{match:"\\b(?:repeat|each)\\b",name:"keyword.control.loop.swift"},{match:"\\b(?:inout|isolated|borrowing|consuming)\\b",name:"storage.modifier.swift"},{match:"\\bSelf\\b",name:"variable.language.swift"},{captures:{1:{name:"keyword.operator.type.function.swift"}},match:"(?<![/=\\-+!*%<>&|\\^~.])(->)(?![/=\\-+!*%<>&|\\^~.])"},{captures:{1:{name:"keyword.operator.type.composition.swift"}},comment:"Swift 3: A & B",match:"(?<![/=\\-+!*%<>&|\\^~.])(&)(?![/=\\-+!*%<>&|\\^~.])"},{match:"[?!]",name:"keyword.operator.type.optional.swift"},{match:"\\.\\.\\.",name:"keyword.operator.function.variadic-parameter.swift"},{comment:"Swift 2: protocol<A, B>",match:"\\bprotocol\\b",name:"keyword.other.type.composition.swift"},{match:"(?<=\\.)(?:Protocol|Type)\\b",name:"keyword.other.type.metatype.swift"},{include:"#declarations-available-types-tuple-type"},{include:"#declarations-available-types-collection-type"},{include:"#declarations-generic-argument-clause"}]},"declarations-available-types-collection-type":{begin:"\\[",beginCaptures:{0:{name:"punctuation.section.collection-type.begin.swift"}},comment:"array and dictionary types [Value] and [Key: Value]",end:"\\]|(?=[>){}])",endCaptures:{0:{name:"punctuation.section.collection-type.end.swift"}},patterns:[{include:"#declarations-available-types"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.key-value.swift"}},end:"(?=\\]|[>){}])",patterns:[{match:":",name:"invalid.illegal.extra-colon-in-dictionary-type.swift"},{include:"#declarations-available-types"}]}]},"declarations-available-types-tuple-type":{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.tuple-type.begin.swift"}},end:"\\)|(?=[>\\]{}])",endCaptures:{0:{name:"punctuation.section.tuple-type.end.swift"}},patterns:[{include:"#declarations-available-types"}]},"declarations-extension":{begin:"\\b(extension)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",beginCaptures:{1:{name:"storage.type.$1.swift"},2:{name:"entity.name.type.swift",patterns:[{include:"#declarations-available-types"}]},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})",name:"meta.definition.type.$1.swift",patterns:[{include:"#comments"},{comment:"SE-0143: Conditional Conformances",include:"#declarations-generic-where-clause"},{include:"#declarations-inheritance-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.type.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.type.end.swift"}},name:"meta.definition.type.body.swift",patterns:[{include:"$self"}]}]},"declarations-function":{begin:`(?x)
\\b
(func)
\\s+
(
(?<q>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)
| (?:
(
(?<oph>
[/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]
)
(
\\g<oph>
| (?<opc>
[\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)*
)
| ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )
)
)
\\s*
(?=\\(|<)`,beginCaptures:{1:{name:"storage.type.function.swift"},2:{name:"entity.name.function.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})|$(?# functions in protocol declarations or generated interfaces have no body)",name:"meta.definition.function.swift",patterns:[{include:"#comments"},{include:"#declarations-generic-parameter-clause"},{include:"#declarations-parameter-clause"},{include:"#declarations-function-result"},{include:"#async-throws"},{comment:"Swift 3: generic constraints after the parameters and return type",include:"#declarations-generic-where-clause"},{begin:"(\\{)",beginCaptures:{1:{name:"punctuation.section.function.begin.swift"}},end:"(\\})",endCaptures:{1:{name:"punctuation.section.function.end.swift"}},name:"meta.definition.function.body.swift",patterns:[{include:"$self"}]}]},"declarations-function-initializer":{begin:"(?<!\\.)\\b(init[?!]*(?# only one is valid, but we want the in\u21E5 snippet to produce something that looks good))\\s*(?=\\(|<)",beginCaptures:{1:{name:"storage.type.function.swift",patterns:[{match:"(?<=[?!])[?!]+",name:"invalid.illegal.character-not-allowed-here.swift"}]}},end:"(?<=\\})|$",name:"meta.definition.function.initializer.swift",patterns:[{include:"#comments"},{include:"#declarations-generic-parameter-clause"},{include:"#declarations-parameter-clause"},{include:"#async-throws"},{comment:"Swift 3: generic constraints after the parameters and return type",include:"#declarations-generic-where-clause"},{begin:"(\\{)",beginCaptures:{1:{name:"punctuation.section.function.begin.swift"}},end:"(\\})",endCaptures:{1:{name:"punctuation.section.function.end.swift"}},name:"meta.definition.function.body.swift",patterns:[{include:"$self"}]}]},"declarations-function-result":{begin:"(?<![/=\\-+!*%<>&|\\^~.])(->)(?![/=\\-+!*%<>&|\\^~.])\\s*",beginCaptures:{1:{name:"keyword.operator.function-result.swift"}},end:"(?!\\G)(?=\\{|\\bwhere\\b|;|=)|$",name:"meta.function-result.swift",patterns:[{include:"#declarations-available-types"}]},"declarations-function-subscript":{begin:"(?<!\\.)\\b(subscript)\\s*(?=\\(|<)",beginCaptures:{1:{name:"storage.type.function.swift"}},end:"(?<=\\})|$",name:"meta.definition.function.subscript.swift",patterns:[{include:"#comments"},{include:"#declarations-generic-parameter-clause"},{include:"#declarations-parameter-clause"},{include:"#declarations-function-result"},{include:"#async-throws"},{include:"#declarations-generic-where-clause"},{begin:"(\\{)",beginCaptures:{1:{name:"punctuation.section.function.begin.swift"}},end:"(\\})",endCaptures:{1:{name:"punctuation.section.function.end.swift"}},name:"meta.definition.function.body.swift",patterns:[{include:"$self"}]}]},"declarations-generic-argument-clause":{begin:"<",beginCaptures:{0:{name:"punctuation.separator.generic-argument-clause.begin.swift"}},end:">|(?=[)\\]{}])",endCaptures:{0:{name:"punctuation.separator.generic-argument-clause.end.swift"}},name:"meta.generic-argument-clause.swift",patterns:[{include:"#declarations-available-types"}]},"declarations-generic-parameter-clause":{begin:"<",beginCaptures:{0:{name:"punctuation.separator.generic-parameter-clause.begin.swift"}},end:">|(?=[^\\w\\d:<>\\s,=&`])(?# characters besides these are never valid in a generic param list -- even if it's not really a valid clause, we should stop trying to parse it if we see one of them.)",endCaptures:{0:{name:"punctuation.separator.generic-parameter-clause.end.swift"}},name:"meta.generic-parameter-clause.swift",patterns:[{include:"#comments"},{comment:"Swift 2: constraints inside the generic param list",include:"#declarations-generic-where-clause"},{match:"\\beach\\b",name:"keyword.control.loop.swift"},{captures:{1:{name:"variable.language.generic-parameter.swift"}},match:"\\b((?!\\d)\\w[\\w\\d]*)\\b"},{match:",",name:"punctuation.separator.generic-parameters.swift"},{begin:"(:)\\s*",beginCaptures:{1:{name:"punctuation.separator.generic-parameter-constraint.swift"}},end:"(?=[,>]|(?!\\G)\\bwhere\\b)",name:"meta.generic-parameter-constraint.swift",patterns:[{begin:"\\G",end:"(?=[,>]|(?!\\G)\\bwhere\\b)",name:"entity.other.inherited-class.swift",patterns:[{include:"#declarations-type-identifier"},{include:"#declarations-type-operators"}]}]}]},"declarations-generic-where-clause":{begin:"\\b(where)\\b\\s*",beginCaptures:{1:{name:"keyword.other.generic-constraint-introducer.swift"}},end:"(?!\\G)$|(?=[>{};\\n]|//|/\\*)",name:"meta.generic-where-clause.swift",patterns:[{include:"#comments"},{include:"#declarations-generic-where-clause-requirement-list"}]},"declarations-generic-where-clause-requirement-list":{begin:"\\G|,\\s*",end:"(?=[,>{};\\n]|//|/\\*)",patterns:[{include:"#comments"},{include:"#constraint"},{include:"#declarations-available-types"},{begin:"(?<![/=\\-+!*%<>&|\\^~.])(==)(?![/=\\-+!*%<>&|\\^~.])",beginCaptures:{1:{name:"keyword.operator.generic-constraint.same-type.swift"}},end:"(?=\\s*[,>{};\\n]|//|/\\*)",name:"meta.generic-where-clause.same-type-requirement.swift",patterns:[{include:"#declarations-available-types"}]},{begin:"(?<![/=\\-+!*%<>&|\\^~.])(:)(?![/=\\-+!*%<>&|\\^~.])",beginCaptures:{1:{name:"keyword.operator.generic-constraint.conforms-to.swift"}},end:"(?=\\s*[,>{};\\n]|//|/\\*)",name:"meta.generic-where-clause.conformance-requirement.swift",patterns:[{begin:"\\G\\s*",contentName:"entity.other.inherited-class.swift",end:"(?=\\s*[,>{};\\n]|//|/\\*)",patterns:[{include:"#declarations-available-types"}]}]}]},"declarations-import":{begin:"(?<!\\.)\\b(import)\\s+",beginCaptures:{1:{name:"keyword.control.import.swift"}},end:"(;)|$\\n?|(?=//|/\\*)",endCaptures:{1:{name:"punctuation.terminator.statement.swift"}},name:"meta.import.swift",patterns:[{begin:"\\G(?!;|$|//|/\\*)(?:(typealias|struct|class|actor|enum|protocol|var|func)\\s+)?",beginCaptures:{1:{name:"storage.modifier.swift"}},end:"(?=;|$|//|/\\*)",patterns:[{captures:{1:{name:"punctuation.definition.identifier.swift"},2:{name:"punctuation.definition.identifier.swift"}},match:`(?x)
(?<=\\G|\\.)
(?<q>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)`,name:"entity.name.type.swift"},{match:`(?x)
(?<=\\G|\\.)
\\$[0-9]+`,name:"entity.name.type.swift"},{captures:{1:{patterns:[{match:"\\.",name:"invalid.illegal.dot-not-allowed-here.swift"}]}},match:`(?x)
(?<=\\G|\\.)
(?:
(
(?<oph>
[/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]
)
(
\\g<oph>
| (?<opc>
[\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)*
)
| ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )
)
(?=\\.|;|$|//|/\\*|\\s)`,name:"entity.name.type.swift"},{match:"\\.",name:"punctuation.separator.import.swift"},{begin:"(?!\\s*(;|$|//|/\\*))",end:"(?=\\s*(;|$|//|/\\*))",name:"invalid.illegal.character-not-allowed-here.swift"}]}]},"declarations-inheritance-clause":{begin:"(:)(?=\\s*\\{)|(:)\\s*",beginCaptures:{1:{name:"invalid.illegal.empty-inheritance-clause.swift"},2:{name:"punctuation.separator.inheritance-clause.swift"}},end:"(?!\\G)$|(?=[={}]|(?!\\G)\\bwhere\\b)",name:"meta.inheritance-clause.swift",patterns:[{begin:"\\bclass\\b",beginCaptures:{0:{name:"storage.type.class.swift"}},end:"(?=[={}]|(?!\\G)\\bwhere\\b)",patterns:[{include:"#comments"},{include:"#declarations-inheritance-clause-more-types"}]},{begin:"\\G",end:"(?!\\G)$|(?=[={}]|(?!\\G)\\bwhere\\b)",patterns:[{include:"#comments"},{include:"#declarations-inheritance-clause-inherited-type"},{include:"#declarations-inheritance-clause-more-types"},{include:"#declarations-type-operators"}]}]},"declarations-inheritance-clause-inherited-type":{begin:"(?=[`\\p{L}_])",end:"(?!\\G)",name:"entity.other.inherited-class.swift",patterns:[{include:"#declarations-type-identifier"}]},"declarations-inheritance-clause-more-types":{begin:",\\s*",end:"(?!\\G)(?!//|/\\*)|(?=[,={}]|(?!\\G)\\bwhere\\b)",name:"meta.inheritance-list.more-types",patterns:[{include:"#comments"},{include:"#declarations-inheritance-clause-inherited-type"},{include:"#declarations-inheritance-clause-more-types"},{include:"#declarations-type-operators"}]},"declarations-macro":{begin:`(?x)
\\b
(macro)
\\s+
((?<q>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))
\\s*
(?=\\(|<|=)`,beginCaptures:{1:{name:"storage.type.function.swift"},2:{name:"entity.name.function.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"$|(?=;|//|/\\*|\\}|=)",name:"meta.definition.macro.swift",patterns:[{include:"#comments"},{include:"#declarations-generic-parameter-clause"},{include:"#declarations-parameter-clause"},{include:"#declarations-function-result"},{include:"#async-throws"},{comment:"Swift 3: generic constraints after the parameters and return type",include:"#declarations-generic-where-clause"}]},"declarations-operator":{begin:`(?x)
(?:
\\b(prefix|infix|postfix)
\\s+
)?
\\b
(operator)
\\s+
(
(
(?<oph>
[/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]
)
(
\\g<oph>
| \\.
| (?<opc>
[\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)*+
)
| ( \\. ( \\g<oph> | \\g<opc> | \\. )++ )
)
\\s*`,beginCaptures:{1:{name:"storage.modifier.swift"},2:{name:"storage.type.function.operator.swift"},3:{name:"entity.name.function.operator.swift"},4:{comment:"workaround for https://github.com/microsoft/vscode-textmate/issues/140#issuecomment-1793610346",name:"entity.name.function.operator.swift",patterns:[{match:"\\.",name:"invalid.illegal.dot-not-allowed-here.swift"}]}},end:"(;)|$\\n?|(?=//|/\\*)",endCaptures:{1:{name:"punctuation.terminator.statement.swift"}},name:"meta.definition.operator.swift",patterns:[{include:"#declarations-operator-swift2"},{include:"#declarations-operator-swift3"},{match:"((?!$|;|//|/\\*)\\S)+",name:"invalid.illegal.character-not-allowed-here.swift"}]},"declarations-operator-swift2":{begin:"\\G(\\{)",beginCaptures:{1:{name:"punctuation.definition.operator.begin.swift"}},end:"(\\})",endCaptures:{1:{name:"punctuation.definition.operator.end.swift"}},patterns:[{include:"#comments"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"keyword.other.operator.associativity.swift"}},match:"\\b(associativity)\\s+(left|right)\\b"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"constant.numeric.integer.swift"}},match:"\\b(precedence)\\s+([0-9]+)\\b"},{captures:{1:{name:"storage.modifier.swift"}},match:"\\b(assignment)\\b"}]},"declarations-operator-swift3":{captures:{2:{name:"entity.other.inherited-class.swift",patterns:[{include:"#declarations-types-precedencegroup"}]},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},match:"\\G(:)\\s*((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))"},"declarations-parameter-clause":{begin:"(\\()",beginCaptures:{1:{name:"punctuation.definition.parameters.begin.swift"}},end:"(\\))(?:\\s*(async)\\b)?",endCaptures:{1:{name:"punctuation.definition.parameters.end.swift"},2:{name:"storage.modifier.async.swift"}},name:"meta.parameter-clause.swift",patterns:[{include:"#declarations-parameter-list"}]},"declarations-parameter-list":{patterns:[{captures:{1:{name:"entity.name.function.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"variable.parameter.function.swift"},5:{name:"punctuation.definition.identifier.swift"},6:{name:"punctuation.definition.identifier.swift"}},comment:"External parameter labels are considered part of the function name",match:"((?<q1>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q1>))\\s+((?<q2>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q2>))(?=\\s*:)"},{captures:{1:{name:"variable.parameter.function.swift"},2:{name:"entity.name.function.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},comment:"If no external label is given, the name is both the external label and the internal variable name",match:"(((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)))(?=\\s*:)"},{begin:":\\s*(?!\\s)",end:"(?=[,)])",patterns:[{include:"#declarations-available-types"},{match:":",name:"invalid.illegal.extra-colon-in-parameter-list.swift"},{begin:"=",beginCaptures:{0:{name:"keyword.operator.assignment.swift"}},comment:"a parameter's default value",end:"(?=[,)])",patterns:[{include:"#expressions"}]}]}]},"declarations-precedencegroup":{begin:"\\b(precedencegroup)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(?=\\{)",beginCaptures:{1:{name:"storage.type.precedencegroup.swift"},2:{name:"entity.name.type.precedencegroup.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?!\\G)",name:"meta.definition.precedencegroup.swift",patterns:[{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.precedencegroup.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.precedencegroup.end.swift"}},patterns:[{include:"#comments"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"entity.other.inherited-class.swift",patterns:[{include:"#declarations-types-precedencegroup"}]},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},match:"\\b(higherThan|lowerThan)\\s*:\\s*((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"keyword.other.operator.associativity.swift"}},match:"\\b(associativity)\\b(?:\\s*:\\s*(right|left|none)\\b)?"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"constant.language.boolean.swift"}},match:"\\b(assignment)\\b(?:\\s*:\\s*(true|false)\\b)?"}]}]},"declarations-protocol":{begin:"\\b(protocol)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",beginCaptures:{1:{name:"storage.type.$1.swift"},2:{name:"entity.name.type.$1.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})",name:"meta.definition.type.protocol.swift",patterns:[{include:"#comments"},{include:"#declarations-inheritance-clause"},{comment:"SE-0142: Permit where clauses to constrain associated types",include:"#declarations-generic-where-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.type.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.type.end.swift"}},name:"meta.definition.type.body.swift",patterns:[{include:"#declarations-protocol-protocol-method"},{include:"#declarations-protocol-protocol-initializer"},{include:"#declarations-protocol-associated-type"},{include:"$self"}]}]},"declarations-protocol-associated-type":{begin:"\\b(associatedtype)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",beginCaptures:{1:{name:"keyword.other.declaration-specifier.swift"},2:{name:"variable.language.associatedtype.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?!\\G)$|(?=[;}]|$)",name:"meta.definition.associatedtype.swift",patterns:[{include:"#declarations-inheritance-clause"},{comment:"SE-0142: Permit where clauses to constrain associated types",include:"#declarations-generic-where-clause"},{include:"#declarations-typealias-assignment"}]},"declarations-protocol-protocol-initializer":{begin:"(?<!\\.)\\b(init[?!]*(?# only one is valid, but we want the in\u21E5 snippet to produce something that looks good))\\s*(?=\\(|<)",beginCaptures:{1:{name:"storage.type.function.swift",patterns:[{match:"(?<=[?!])[?!]+",name:"invalid.illegal.character-not-allowed-here.swift"}]}},end:"$|(?=;|//|/\\*|\\})",name:"meta.definition.function.initializer.swift",patterns:[{include:"#comments"},{include:"#declarations-generic-parameter-clause"},{include:"#declarations-parameter-clause"},{include:"#async-throws"},{comment:"Swift 3: generic constraints after the parameters and return type",include:"#declarations-generic-where-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.function.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.function.end.swift"}},name:"invalid.illegal.function-body-not-allowed-in-protocol.swift",patterns:[{include:"$self"}]}]},"declarations-protocol-protocol-method":{begin:`(?x)
\\b
(func)
\\s+
(
(?<q>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)
| (?:
(
(?<oph>
[/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]
)
(
\\g<oph>
| (?<opc>
[\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)*
)
| ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )
)
)
\\s*
(?=\\(|<)`,beginCaptures:{1:{name:"storage.type.function.swift"},2:{name:"entity.name.function.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"$|(?=;|//|/\\*|\\})",name:"meta.definition.function.swift",patterns:[{include:"#comments"},{include:"#declarations-generic-parameter-clause"},{include:"#declarations-parameter-clause"},{include:"#declarations-function-result"},{include:"#async-throws"},{comment:"Swift 3: generic constraints after the parameters and return type",include:"#declarations-generic-where-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.function.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.function.end.swift"}},name:"invalid.illegal.function-body-not-allowed-in-protocol.swift",patterns:[{include:"$self"}]}]},"declarations-type":{patterns:[{begin:"\\b(class(?!\\s+(?:func|var|let)\\b)|struct|actor)\\b\\s*((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",beginCaptures:{1:{name:"storage.type.$1.swift"},2:{name:"entity.name.type.$1.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})",name:"meta.definition.type.$1.swift",patterns:[{include:"#comments"},{include:"#declarations-generic-parameter-clause"},{comment:"Swift 3: generic constraints after the generic param list",include:"#declarations-generic-where-clause"},{include:"#declarations-inheritance-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.type.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.type.end.swift"}},name:"meta.definition.type.body.swift",patterns:[{include:"$self"}]}]},{include:"#declarations-type-enum"}]},"declarations-type-enum":{begin:"\\b(enum)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",beginCaptures:{1:{name:"storage.type.$1.swift"},2:{name:"entity.name.type.$1.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})",name:"meta.definition.type.$1.swift",patterns:[{include:"#comments"},{include:"#declarations-generic-parameter-clause"},{comment:"Swift 3: generic constraints after the generic param list",include:"#declarations-generic-where-clause"},{include:"#declarations-inheritance-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.type.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.type.end.swift"}},name:"meta.definition.type.body.swift",patterns:[{include:"#declarations-type-enum-enum-case-clause"},{include:"$self"}]}]},"declarations-type-enum-associated-values":{begin:"\\G\\(",beginCaptures:{0:{name:"punctuation.definition.parameters.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.swift"}},patterns:[{include:"#comments"},{begin:`(?x)
(?:(_)|((?<q1>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*\\k<q1>))
\\s+
(((?<q2>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*\\k<q2>))
\\s*(:)`,beginCaptures:{1:{name:"entity.name.function.swift"},2:{name:"invalid.illegal.distinct-labels-not-allowed.swift"},5:{name:"variable.parameter.function.swift"},7:{name:"punctuation.separator.argument-label.swift"}},end:"(?=[,)\\]])",patterns:[{include:"#declarations-available-types"}]},{begin:"(((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*\\k<q>))\\s*(:)",beginCaptures:{1:{name:"entity.name.function.swift"},2:{name:"variable.parameter.function.swift"},4:{name:"punctuation.separator.argument-label.swift"}},end:"(?=[,)\\]])",patterns:[{include:"#declarations-available-types"}]},{begin:"(?![,)\\]])(?=\\S)",comment:"an element without a label (i.e. anything else)",end:"(?=[,)\\]])",patterns:[{include:"#declarations-available-types"},{match:":",name:"invalid.illegal.extra-colon-in-parameter-list.swift"}]}]},"declarations-type-enum-enum-case":{begin:"(?x)((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",beginCaptures:{1:{name:"variable.other.enummember.swift"}},end:"(?<=\\))|(?![=(])",patterns:[{include:"#comments"},{include:"#declarations-type-enum-associated-values"},{include:"#declarations-type-enum-raw-value-assignment"}]},"declarations-type-enum-enum-case-clause":{begin:"\\b(case)\\b\\s*",beginCaptures:{1:{name:"storage.type.enum.case.swift"}},end:"(?=[;}])|(?!\\G)(?!//|/\\*)(?=[^\\s,])",patterns:[{include:"#comments"},{include:"#declarations-type-enum-enum-case"},{include:"#declarations-type-enum-more-cases"}]},"declarations-type-enum-more-cases":{begin:",\\s*",end:"(?!\\G)(?!//|/\\*)(?=[;}]|[^\\s,])",name:"meta.enum-case.more-cases",patterns:[{include:"#comments"},{include:"#declarations-type-enum-enum-case"},{include:"#declarations-type-enum-more-cases"}]},"declarations-type-enum-raw-value-assignment":{begin:"(=)\\s*",beginCaptures:{1:{name:"keyword.operator.assignment.swift"}},end:"(?!\\G)",patterns:[{include:"#comments"},{include:"#literals"}]},"declarations-type-identifier":{begin:"((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",beginCaptures:{1:{name:"meta.type-name.swift",patterns:[{include:"#builtin-types"}]},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"}},end:"(?!<)",patterns:[{begin:"(?=<)",end:"(?!\\G)",patterns:[{include:"#declarations-generic-argument-clause"}]}]},"declarations-type-operators":{patterns:[{captures:{1:{name:"keyword.operator.type.composition.swift"}},comment:"Swift 3: A & B",match:"(?<![/=\\-+!*%<>&|\\^~.])(&)(?![/=\\-+!*%<>&|\\^~.])"},{captures:{1:{name:"keyword.operator.type.requirement-suppression.swift"}},comment:"SE-0390: Noncopyable structs and enums",match:"(?<![/=\\-+!*%<>&|\\^~.])(~)(?![/=\\-+!*%<>&|\\^~.])"}]},"declarations-typealias":{begin:"\\b(typealias)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",beginCaptures:{1:{name:"keyword.other.declaration-specifier.swift"},2:{name:"entity.name.type.typealias.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?!\\G)$|(?=;|//|/\\*|$)",name:"meta.definition.typealias.swift",patterns:[{begin:"\\G(?=<)",end:"(?!\\G)",patterns:[{include:"#declarations-generic-parameter-clause"}]},{include:"#declarations-typealias-assignment"}]},"declarations-typealias-assignment":{begin:"(=)\\s*",beginCaptures:{1:{name:"keyword.operator.assignment.swift"}},end:"(?!\\G)$|(?=;|//|/\\*|$)",patterns:[{include:"#declarations-available-types"}]},"declarations-typed-variable-declaration":{begin:`(?x)
\\b(?:(async)\\s+)?(let|var)\\b\\s+
(?<q>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)\\s*
:`,beginCaptures:{1:{name:"storage.modifier.async.swift"},2:{name:"keyword.other.declaration-specifier.swift"}},end:"(?=$|[={])",patterns:[{include:"#declarations-available-types"}]},"declarations-types-precedencegroup":{patterns:[{comment:"Precedence groups in the standard library",match:"\\b(?:BitwiseShift|Assignment|RangeFormation|Casting|Addition|NilCoalescing|Comparison|LogicalConjunction|LogicalDisjunction|Default|Ternary|Multiplication|FunctionArrow)Precedence\\b",name:"support.type.swift"}]},expressions:{comment:"trailing closures need to be parsed before other member references",patterns:[{include:"#expressions-without-trailing-closures-or-member-references"},{include:"#expressions-trailing-closure"},{include:"#member-reference"}]},"expressions-trailing-closure":{patterns:[{captures:{1:{name:"support.function.any-method.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"}},comment:"foo { body } -- a call with a trailing closure and no argument clause",match:"(#?(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))(?=\\s*\\{)",name:"meta.function-call.trailing-closure-only.swift"},{captures:{1:{name:"support.function.any-method.trailing-closure-label.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.separator.argument-label.swift"}},comment:"foo: { body } -- labeled-trailing-closure (SE-0279)",match:"((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(:)(?=\\s*\\{)"}]},"expressions-without-trailing-closures":{patterns:[{include:"#expressions-without-trailing-closures-or-member-references"},{include:"#member-references"}]},"expressions-without-trailing-closures-or-member-references":{patterns:[{include:"#comments"},{include:"#code-block"},{include:"#attributes"},{include:"#expressions-without-trailing-closures-or-member-references-closure-parameter"},{include:"#literals"},{include:"#operators"},{include:"#builtin-types"},{include:"#builtin-functions"},{include:"#builtin-global-functions"},{include:"#builtin-properties"},{include:"#expressions-without-trailing-closures-or-member-references-compound-name"},{include:"#conditionals"},{include:"#keywords"},{include:"#expressions-without-trailing-closures-or-member-references-availability-condition"},{include:"#expressions-without-trailing-closures-or-member-references-function-or-macro-call-expression"},{include:"#expressions-without-trailing-closures-or-member-references-macro-expansion"},{include:"#expressions-without-trailing-closures-or-member-references-subscript-expression"},{include:"#expressions-without-trailing-closures-or-member-references-parenthesized-expression"},{match:"\\b_\\b",name:"support.variable.discard-value.swift"}]},"expressions-without-trailing-closures-or-member-references-availability-condition":{begin:"\\B(#(?:un)?available)(\\()",beginCaptures:{1:{name:"support.function.availability-condition.swift"},2:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},patterns:[{captures:{1:{name:"keyword.other.platform.os.swift"},2:{name:"constant.numeric.swift"}},match:"\\s*\\b((?:iOS|macOS|OSX|watchOS|tvOS|UIKitForMac)(?:ApplicationExtension)?)\\b(?:\\s+([0-9]+(?:\\.[0-9]+)*\\b))"},{captures:{1:{name:"keyword.other.platform.all.swift"},2:{name:"invalid.illegal.character-not-allowed-here.swift"}},match:"(\\*)\\s*(.*?)(?=[,)])"},{match:"[^\\s,)]+",name:"invalid.illegal.character-not-allowed-here.swift"}]},"expressions-without-trailing-closures-or-member-references-closure-parameter":{match:"\\$[0-9]+",name:"variable.language.closure-parameter.swift"},"expressions-without-trailing-closures-or-member-references-compound-name":{captures:{1:{name:"entity.name.function.compound-name.swift"},2:{name:"punctuation.definition.entity.swift"},3:{name:"punctuation.definition.entity.swift"},4:{patterns:[{captures:{1:{name:"punctuation.definition.entity.swift"},2:{name:"punctuation.definition.entity.swift"}},match:"(?<q>`?)(?!_:)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>):",name:"entity.name.function.compound-name.swift"}]}},comment:"a reference to a function with disambiguating argument labels, such as foo(_:), foo(bar:), etc.",match:`(?x)
((?<q1>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q1>))
\\(
(
(
((?<q2>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q2>))
:
)+
)
\\)`},"expressions-without-trailing-closures-or-member-references-expression-element-list":{patterns:[{include:"#comments"},{begin:"((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(:)",beginCaptures:{1:{name:"support.function.any-method.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.separator.argument-label.swift"}},comment:"an element with a label",end:"(?=[,)\\]])",patterns:[{include:"#expressions"}]},{begin:"(?![,)\\]])(?=\\S)",comment:"an element without a label (i.e. anything else)",end:"(?=[,)\\]])",patterns:[{include:"#expressions"}]}]},"expressions-without-trailing-closures-or-member-references-function-or-macro-call-expression":{patterns:[{begin:"(#?(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(\\()",beginCaptures:{1:{name:"support.function.any-method.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.arguments.begin.swift"}},comment:"foo(args) -- a call whose callee is a highlightable name",end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.function-call.swift",patterns:[{include:"#expressions-without-trailing-closures-or-member-references-expression-element-list"}]},{begin:"(?<=[`\\])}>\\p{L}_\\p{N}\\p{M}])\\s*(\\()",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.swift"}},comment:"[Int](args) -- a call whose callee is a more complicated expression",end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.function-call.swift",patterns:[{include:"#expressions-without-trailing-closures-or-member-references-expression-element-list"}]}]},"expressions-without-trailing-closures-or-member-references-macro-expansion":{match:"(#(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",name:"support.function.any-method.swift"},"expressions-without-trailing-closures-or-member-references-parenthesized-expression":{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.tuple.begin.swift"}},comment:'correctly matching closure expressions is too hard (depends on trailing "in") so we just tack on some basics to the end of parenthesized-expression',end:"(\\))\\s*((?:\\b(?:async|throws|rethrows)\\s)*)",endCaptures:{1:{name:"punctuation.section.tuple.end.swift"},2:{patterns:[{match:"\\brethrows\\b",name:"invalid.illegal.rethrows-only-allowed-on-function-declarations.swift"},{include:"#async-throws"}]}},patterns:[{include:"#expressions-without-trailing-closures-or-member-references-expression-element-list"}]},"expressions-without-trailing-closures-or-member-references-subscript-expression":{begin:"(?<=[`\\p{L}_\\p{N}\\p{M}])\\s*(\\[)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.subscript-expression.swift",patterns:[{include:"#expressions-without-trailing-closures-or-member-references-expression-element-list"}]},keywords:{patterns:[{match:"(?<!\\.)\\b(?:if|else|guard|where|switch|case|default|fallthrough)\\b",name:"keyword.control.branch.swift"},{match:"(?<!\\.)\\b(?:continue|break|fallthrough|return)\\b",name:"keyword.control.transfer.swift"},{match:"(?<!\\.)\\b(?:while|for|in|each)\\b",name:"keyword.control.loop.swift"},{match:"\\bany\\b(?=\\s*`?[\\p{L}_])",name:"keyword.other.operator.type.existential.swift"},{captures:{1:{name:"keyword.control.loop.swift"},2:{name:"punctuation.whitespace.trailing.repeat.swift"}},comment:"extra scopes for repeat-while snippet",match:"(?<!\\.)\\b(repeat)\\b(\\s*)"},{match:"(?<!\\.)\\bdefer\\b",name:"keyword.control.defer.swift"},{captures:{1:{name:"invalid.illegal.try-must-precede-await.swift"},2:{name:"keyword.control.await.swift"}},match:"(?<!\\.)\\b(?:(await\\s+try)|(await))\\b"},{match:"(?<!\\.)\\b(?:catch|throw|try)\\b|\\btry[?!]\\B",name:"keyword.control.exception.swift"},{match:"(?<!\\.)\\b(?:throws|rethrows)\\b",name:"storage.modifier.exception.swift"},{captures:{1:{name:"keyword.control.exception.swift"},2:{name:"punctuation.whitespace.trailing.do.swift"}},comment:"extra scopes for do-catch snippet",match:"(?<!\\.)\\b(do)\\b(\\s*)"},{captures:{1:{name:"storage.modifier.async.swift"},2:{name:"keyword.other.declaration-specifier.swift"}},match:"(?<!\\.)\\b(?:(async)\\s+)?(let|var)\\b"},{match:"(?<!\\.)\\b(?:associatedtype|operator|typealias)\\b",name:"keyword.other.declaration-specifier.swift"},{match:"(?<!\\.)\\b(class|enum|extension|precedencegroup|protocol|struct|actor)\\b(?=\\s*`?[\\p{L}_])",name:"storage.type.$1.swift"},{match:"(?<!\\.)\\b(?:inout|static|final|lazy|mutating|nonmutating|optional|indirect|required|override|dynamic|convenience|infix|prefix|postfix|distributed|nonisolated|borrowing|consuming)\\b",name:"storage.modifier.swift"},{match:"\\binit[?!]|\\binit\\b|(?<!\\.)\\b(?:func|deinit|subscript|didSet|get|set|willSet)\\b",name:"storage.type.function.swift"},{match:"(?<!\\.)\\b(?:fileprivate|private|internal|public|open|package)\\b",name:"keyword.other.declaration-specifier.accessibility.swift"},{comment:"matches weak, unowned, unowned(safe), unowned(unsafe)",match:"(?<!\\.)\\bunowned\\((?:safe|unsafe)\\)|(?<!\\.)\\b(?:weak|unowned)\\b",name:"keyword.other.capture-specifier.swift"},{captures:{1:{name:"keyword.other.type.swift"},2:{name:"keyword.other.type.metatype.swift"}},match:"(?<=\\.)(?:(dynamicType|self)|(Protocol|Type))\\b"},{match:"(?<!\\.)\\b(?:super|self|Self)\\b",name:"variable.language.swift"},{match:"\\B(?:#file|#filePath|#fileID|#line|#column|#function|#dsohandle)\\b|\\b(?:__FILE__|__LINE__|__COLUMN__|__FUNCTION__|__DSO_HANDLE__)\\b",name:"support.variable.swift"},{match:"(?<!\\.)\\bimport\\b",name:"keyword.control.import.swift"},{comment:'SE-0366: "consume behaves as a contextual keyword. In order to avoid interfering with existing code that calls functions named consume, the operand to consume must begin with another identifier, and must consist of an identifier or postfix expression"',match:"(?<!\\.)\\bconsume(?=\\s+`?[\\p{L}_])",name:"keyword.control.consume.swift"},{comment:'SE-0377: "copy is a contextual keyword, parsed as an operator if it is immediately followed by an identifier on the same line, like the consume x operator before it"',match:"(?<!\\.)\\bcopy(?=\\s+`?[\\p{L}_])",name:"keyword.control.copy.swift"}]},literals:{patterns:[{include:"#literals-boolean"},{include:"#literals-numeric"},{include:"#literals-string"},{match:"\\bnil\\b",name:"constant.language.nil.swift"},{comment:'object "literals" used in playgrounds',match:"\\B#(colorLiteral|imageLiteral|fileLiteral)\\b",name:"support.function.object-literal.swift"},{match:"\\B#externalMacro\\b",name:"support.function.builtin-macro.swift"},{match:"\\B#keyPath\\b",name:"support.function.key-path.swift"},{begin:"\\B(#selector)(\\()(?:\\s*(getter|setter)\\s*(:))?",beginCaptures:{1:{name:"support.function.selector-reference.swift"},2:{name:"punctuation.definition.arguments.begin.swift"},3:{name:"support.variable.parameter.swift"},4:{name:"punctuation.separator.argument-label.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},patterns:[{include:"#expressions"}]},{include:"#literals-regular-expression-literal"}]},"literals-boolean":{match:"\\b(true|false)\\b",name:"constant.language.boolean.swift"},"literals-numeric":{patterns:[{comment:"0.1, -4_2.5, 6.022e23, 10E-5",match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)[0-9][0-9_]*(?=\\.[0-9]|[eE])(?:\\.[0-9][0-9_]*)?(?:[eE][-+]?[0-9][0-9_]*)?\\b(?!\\.[0-9])",name:"constant.numeric.float.decimal.swift"},{comment:"-0x1.ap2_3, 0x31p-4",match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)(0x[0-9a-fA-F][0-9a-fA-F_]*)(?:\\.[0-9a-fA-F][0-9a-fA-F_]*)?[pP][-+]?[0-9][0-9_]*\\b(?!\\.[0-9])",name:"constant.numeric.float.hexadecimal.swift"},{comment:"0x1p, 0x1p_2, 0x1.5pa, 0x1.1p+1f, 0x1pz",match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)(0x[0-9a-fA-F][0-9a-fA-F_]*)(?:\\.[0-9a-fA-F][0-9a-fA-F_]*)?(?:[pP][-+]?\\w*)\\b(?!\\.[0-9])",name:"invalid.illegal.numeric.float.invalid-exponent.swift"},{comment:"0x1.5w (note that 0x1.f may be a valid expression)",match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)(0x[0-9a-fA-F][0-9a-fA-F_]*)\\.[0-9][\\w.]*",name:"invalid.illegal.numeric.float.missing-exponent.swift"},{comment:"-.5, .2f (note that 1.-.5 may be a valid expression)",match:"(?<=\\s|^)\\-?\\.[0-9][\\w.]*",name:"invalid.illegal.numeric.float.missing-leading-zero.swift"},{comment:"0b_0_1, 0x_1p+3q",match:"(\\B\\-|\\b)0[box]_[0-9a-fA-F_]*(?:[pPeE][+-]?\\w+)?[\\w.]+",name:"invalid.illegal.numeric.leading-underscore.swift"},{comment:"tuple positional member: not really a numeric literal, but not invalid",match:"(?<=[\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)[0-9]+\\b"},{comment:"0b010, 0b1_0",match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)0b[01][01_]*\\b(?!\\.[0-9])",name:"constant.numeric.integer.binary.swift"},{comment:"0o1, 0o7_3",match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)0o[0-7][0-7_]*\\b(?!\\.[0-9])",name:"constant.numeric.integer.octal.swift"},{comment:"02, 3_456",match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)[0-9][0-9_]*\\b(?!\\.[0-9])",name:"constant.numeric.integer.decimal.swift"},{comment:"0x4, 0xF_7",match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)0x[0-9a-fA-F][0-9a-fA-F_]*\\b(?!\\.[0-9])",name:"constant.numeric.integer.hexadecimal.swift"},{match:"(\\B\\-|\\b)[0-9][\\w.]*",name:"invalid.illegal.numeric.other.swift"}]},"literals-regular-expression-literal":{comment:"SE-0354 & SE-0355",patterns:[{begin:"(#+)/\\n",end:"/\\1",name:"string.regexp.block.swift",patterns:[{include:"#literals-regular-expression-literal-regex-guts"},{include:"#literals-regular-expression-literal-line-comment"}]},{captures:{0:{patterns:[{include:"#literals-regular-expression-literal-regex-guts"}]},1:{name:"punctuation.definition.string.begin.regexp.swift"},12:{name:"punctuation.definition.string.end.regexp.swift"},13:{name:"invalid.illegal.returns-not-allowed.regexp"}},comment:`Single-line regular expression literals must be matched all in one go
 in order to avoid ambiguities with operators, and to adhere to certain
 parsing rules in SE-0354/SE-0355, such as:
 - A regex literal will not be parsed if it contains an unbalanced ).
 - A regex may end with a space only if it began with an escaped space`,match:`(?x)
(((\\#+)?)/)
(?(3)|(?!/))
(?(3)|(?!\\s))
(\\\\\\s)?
(?<guts>
(?>
(?:
\\\\Q
(?:(?!\\\\E)(?!/\\2).)*+
(?:\\\\E

| (?(3)|(?<!\\s))(?=/\\2)
)
| \\\\.
| \\(\\?\\#[^)]*\\)
| \\(\\?

\\{(?<g1>\\{)?+(?<g2>\\{)?+(?<g3>\\{)?+(?<g4>\\{)?+(?<g5>\\{)?+
.+?
\\}(?(<g1>)\\})(?(<g2>)\\})(?(<g3>)\\})(?(<g4>)\\})(?(<g5>)\\})
(?:\\[(?!\\d)\\w+\\])?
[X<>]?
\\)
| (?<class>\\[ (?:\\\\. | [^\\[\\]] | \\g<class>)+ \\])
| \\(\\g<guts>?+\\)
| (?:(?!/\\2)[^()\\[\\\\])+
)+
)
)?+
# may end with a space only if it is an extended literal or contains only a single escaped space
(?(3)|(?(5)(?<!\\s)))
(/\\2)
| \\#+/.+(\\n)`,name:"string.regexp.line.swift"}]},"literals-regular-expression-literal-backreference-or-subpattern":{comment:"These patterns are separated to work around issues like https://github.com/microsoft/vscode-textmate/issues/164",patterns:[{captures:{1:{name:"constant.character.escape.backslash.regexp"},2:{name:"variable.other.group-name.regexp"},3:{name:"keyword.operator.recursion-level.regexp"},4:{name:"constant.numeric.integer.decimal.regexp"},5:{name:"constant.numeric.integer.decimal.regexp"},6:{name:"keyword.operator.recursion-level.regexp"},7:{name:"constant.numeric.integer.decimal.regexp"},8:{name:"constant.character.escape.backslash.regexp"}},comment:"'\\g{' NamedOrNumberRef '}'",match:"(?x)(\\\\g\\{) (?: ((?!\\d)\\w+) (?:([+-])(\\d+))? | ([+-]?\\d+) (?:([+-])(\\d+))? ) (\\})"},{captures:{1:{name:"constant.character.escape.backslash.regexp"},2:{name:"constant.numeric.integer.decimal.regexp"},3:{name:"keyword.operator.recursion-level.regexp"},4:{name:"constant.numeric.integer.decimal.regexp"}},comment:"'\\g' NumberRef",match:"(?x)(\\\\g) ([+-]?\\d+) (?:([+-])(\\d+))?"},{captures:{1:{name:"constant.character.escape.backslash.regexp"},3:{name:"variable.other.group-name.regexp"},4:{name:"keyword.operator.recursion-level.regexp"},5:{name:"constant.numeric.integer.decimal.regexp"},6:{name:"constant.numeric.integer.decimal.regexp"},7:{name:"keyword.operator.recursion-level.regexp"},8:{name:"constant.numeric.integer.decimal.regexp"},9:{name:"constant.character.escape.backslash.regexp"}},comment:`'\\k<' NamedOrNumberRef '>'
 "\\k'" NamedOrNumberRef "'"
 '\\g<' NamedOrNumberRef '>'
 "\\g'" NamedOrNumberRef "'"`,match:"(?x)(\\\\[gk](<)|\\\\[gk]') (?: ((?!\\d)\\w+) (?:([+-])(\\d+))? | ([+-]?\\d+) (?:([+-])(\\d+))? ) ((?(2)>|'))"},{captures:{1:{name:"constant.character.escape.backslash.regexp"},2:{name:"variable.other.group-name.regexp"},3:{name:"keyword.operator.recursion-level.regexp"},4:{name:"constant.numeric.integer.decimal.regexp"},5:{name:"constant.character.escape.backslash.regexp"}},comment:"'\\k{' NamedRef '}'",match:"(?x)(\\\\k\\{) ((?!\\d)\\w+) (?:([+-])(\\d+))? (\\})"},{match:"\\\\[1-9][0-9]+",name:"keyword.other.back-reference.regexp"},{captures:{1:{name:"keyword.other.back-reference.regexp"},2:{name:"variable.other.group-name.regexp"},3:{name:"keyword.operator.recursion-level.regexp"},4:{name:"constant.numeric.integer.decimal.regexp"},5:{name:"keyword.other.back-reference.regexp"}},comment:"'(?P=' NamedRef ')'",match:"(?x)(\\(\\?(?:P[=>]|&)) ((?!\\d)\\w+) (?:([+-])(\\d+))? (\\))"},{match:"\\(\\?R\\)",name:"keyword.other.back-reference.regexp"},{captures:{1:{name:"keyword.other.back-reference.regexp"},2:{name:"constant.numeric.integer.decimal.regexp"},3:{name:"keyword.operator.recursion-level.regexp"},4:{name:"constant.numeric.integer.decimal.regexp"},5:{name:"keyword.other.back-reference.regexp"}},comment:"'(?' NumberRef ')'",match:"(?x)(\\(\\?) ([+-]?\\d+) (?:([+-])(\\d+))? (\\))"}]},"literals-regular-expression-literal-backtracking-directive-or-global-matching-option":{captures:{1:{name:"keyword.control.directive.regexp"},2:{name:"keyword.control.directive.regexp"},3:{name:"keyword.control.directive.regexp"},4:{name:"variable.language.tag.regexp"},5:{name:"keyword.control.directive.regexp"},6:{name:"keyword.operator.assignment.regexp"},7:{name:"constant.numeric.integer.decimal.regexp"},8:{name:"keyword.control.directive.regexp"},9:{name:"keyword.control.directive.regexp"}},match:`(?x)
(\\(\\*)
(?:
(ACCEPT|FAIL|F|MARK(?=:)|(?=:)|COMMIT|PRUNE|SKIP|THEN)
(?:(:)([^)]+))?
| (?:(LIMIT_(?:DEPTH|HEAP|MATCH))(=)(\\d+))
| (
CRLF | CR | ANYCRLF | ANY | LF | NUL
| BSR_ANYCRLF | BSR_UNICODE
| NOTEMPTY_ATSTART | NOTEMPTY
| NO_AUTO_POSSESS | NO_DOTSTAR_ANCHOR
| NO_JIT | NO_START_OPT | UTF | UCP
)
)
(\\))`},"literals-regular-expression-literal-callout":{captures:{1:{name:"punctuation.definition.group.regexp"},2:{name:"keyword.control.callout.regexp"},3:{name:"constant.numeric.integer.decimal.regexp"},4:{name:"entity.name.function.callout.regexp"},5:{name:"entity.name.function.callout.regexp"},6:{name:"entity.name.function.callout.regexp"},7:{name:"entity.name.function.callout.regexp"},8:{name:"entity.name.function.callout.regexp"},9:{name:"entity.name.function.callout.regexp"},10:{name:"entity.name.function.callout.regexp"},11:{name:"entity.name.function.callout.regexp"},12:{name:"punctuation.definition.group.regexp"},13:{name:"punctuation.definition.group.regexp"},14:{name:"keyword.control.callout.regexp"},15:{name:"entity.name.function.callout.regexp"},16:{name:"variable.language.tag-name.regexp"},17:{name:"punctuation.definition.group.regexp"},18:{name:"punctuation.definition.group.regexp"},19:{name:"keyword.control.callout.regexp"},26:{name:"variable.language.tag-name.regexp"},27:{name:"keyword.control.callout.regexp"},28:{name:"punctuation.definition.group.regexp"}},match:`(?x)
# PCRECallout
(\\()(?<keyw>\\?C)
(?:
(?<num>\\d+)
| \`(?<name>(?:[^\`]|\`\`)*)\`
| '(?<name>(?:[^']|'')*)'
| "(?<name>(?:[^"]|"")*)"
| \\^(?<name>(?:[^\\^]|\\^\\^)*)\\^
| %(?<name>(?:[^%]|%%)*)%
| \\#(?<name>(?:[^#]|\\#\\#)*)\\#
| \\$(?<name>(?:[^$]|\\$\\$)*)\\$
| \\{(?<name>(?:[^}]|\\}\\})*)\\}
)?
(\\))
# NamedCallout
| (\\()(?<keyw>\\*)
(?<name>(?!\\d)\\w+)
(?:\\[(?<tag>(?!\\d)\\w+)\\])?
(?:\\{ [^,}]+ (?:,[^,}]+)* \\})?
(\\))
# InterpolatedCallout
| (\\()(?<keyw>\\?)

(\\{(?<g1>\\{)?+(?<g2>\\{)?+(?<g3>\\{)?+(?<g4>\\{)?+(?<g5>\\{)?+) .+? \\}(?(<g1>)\\})(?(<g2>)\\})(?(<g3>)\\})(?(<g4>)\\})(?(<g5>)\\})
(?:\\[(?<tag>(?!\\d)\\w+)\\])?
(?<keyw>[X<>]?)
(\\))`,name:"meta.callout.regexp"},"literals-regular-expression-literal-character-properties":{captures:{1:{name:"support.variable.character-property.regexp"},2:{name:"punctuation.definition.character-class.regexp"},3:{name:"support.variable.character-property.regexp"},4:{name:"punctuation.definition.character-class.regexp"}},match:`(?x)
\\\\[pP]\\{ ([\\s\\w-]+(?:=[\\s\\w-]+)?) \\}
| (\\[:) ([\\s\\w-]+(?:=[\\s\\w-]+)?) (:\\])`,name:"constant.other.character-class.set.regexp"},"literals-regular-expression-literal-custom-char-class":{patterns:[{begin:"(\\[)(\\^)?",beginCaptures:{1:{name:"punctuation.definition.character-class.regexp"},2:{name:"keyword.operator.negation.regexp"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.character-class.regexp"}},name:"constant.other.character-class.set.regexp",patterns:[{include:"#literals-regular-expression-literal-custom-char-class-members"}]}]},"literals-regular-expression-literal-custom-char-class-members":{comment:"TODO: should also include atoms?",patterns:[{comment:"\\b inside a character class represents a backspace",match:"\\\\b",name:"constant.character.escape.backslash.regexp"},{include:"#literals-regular-expression-literal-custom-char-class"},{include:"#literals-regular-expression-literal-quote"},{include:"#literals-regular-expression-literal-set-operators"},{include:"#literals-regular-expression-literal-unicode-scalars"},{include:"#literals-regular-expression-literal-character-properties"}]},"literals-regular-expression-literal-group-option-toggle":{comment:'A matching option sequence may be part of an "isolated group" which has an implicit scope that wraps the remaining elements of the current group',match:`(?x)
\\(\\?
(?:
\\^(?:[iJmnsUxwDPSW]|xx|y\\{[gw]\\})*
| (?:[iJmnsUxwDPSW]|xx|y\\{[gw]\\})+
| (?:[iJmnsUxwDPSW]|xx|y\\{[gw]\\})* - (?:[iJmnsUxwDPSW]|xx|y\\{[gw]\\})*
)
\\)`,name:"keyword.other.option-toggle.regexp"},"literals-regular-expression-literal-group-or-conditional":{patterns:[{begin:"(\\()(\\?~)",beginCaptures:{1:{name:"punctuation.definition.group.regexp"},2:{name:"keyword.control.conditional.absent.regexp"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.group.regexp"}},name:"meta.group.absent.regexp",patterns:[{include:"#literals-regular-expression-literal-regex-guts"}]},{begin:`(?x)
# KnownConditionalStart
(\\() (?<cond>\\?\\()
(?:
(?<NumberRef> (?<num>[+-]?\\d+)(?:(?<op>[+-])(?<num>\\d+))? )
| (?<cond>R) \\g<NumberRef>?
| (?<cond>R&) (?<NamedRef> (?<name>(?!\\d)\\w+) (?:(?<op>[+-])(?<num>\\d+))? )
| (?<cond><) (?:\\g<NamedRef>|\\g<NumberRef>) (?<cond>>)
| (?<cond>') (?:\\g<NamedRef>|\\g<NumberRef>) (?<cond>')
| (?<cond>DEFINE)
| (?<cond>VERSION)(?<compar>>?=)(?<num>\\d+\\.\\d+)
)
(?<cond>\\))
| (\\()(?<cond>\\?)(?=\\()`,beginCaptures:{1:{name:"punctuation.definition.group.regexp"},2:{name:"keyword.control.conditional.regexp"},4:{name:"constant.numeric.integer.decimal.regexp"},5:{name:"keyword.operator.recursion-level.regexp"},6:{name:"constant.numeric.integer.decimal.regexp"},7:{name:"keyword.control.conditional.regexp"},8:{name:"keyword.control.conditional.regexp"},10:{name:"variable.other.group-name.regexp"},11:{name:"keyword.operator.recursion-level.regexp"},12:{name:"constant.numeric.integer.decimal.regexp"},13:{name:"keyword.control.conditional.regexp"},14:{name:"keyword.control.conditional.regexp"},15:{name:"keyword.control.conditional.regexp"},16:{name:"keyword.control.conditional.regexp"},17:{name:"keyword.control.conditional.regexp"},18:{name:"keyword.control.conditional.regexp"},19:{name:"keyword.operator.comparison.regexp"},20:{name:"constant.numeric.integer.decimal.regexp"},21:{name:"keyword.control.conditional.regexp"},22:{name:"punctuation.definition.group.regexp"},23:{name:"keyword.control.conditional.regexp"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.group.regexp"}},name:"meta.group.conditional.regexp",patterns:[{include:"#literals-regular-expression-literal-regex-guts"}]},{begin:`(?x)
(\\()
(

(\\?)
(?:
([:|>=!*] | <[=!*])

| P?< (?:((?!\\d)\\w+) (-))? ((?!\\d)\\w+) >
| ' (?:((?!\\d)\\w+) (-))? ((?!\\d)\\w+) '

| (?:
\\^(?:[iJmnsUxwDPSW]|xx|y\\{[gw]\\})*
| (?:[iJmnsUxwDPSW]|xx|y\\{[gw]\\})+
| (?:[iJmnsUxwDPSW]|xx|y\\{[gw]\\})* - (?:[iJmnsUxwDPSW]|xx|y\\{[gw]\\})*
):
)

| \\*(
atomic
|pla|positive_lookahead
|nla|negative_lookahead
|plb|positive_lookbehind
|nlb|negative_lookbehind
|napla|non_atomic_positive_lookahead
|naplb|non_atomic_positive_lookbehind
|sr|script_run
|asr|atomic_script_run
):
)?+`,beginCaptures:{1:{name:"punctuation.definition.group.regexp"},2:{name:"keyword.other.group-options.regexp"},3:{name:"punctuation.definition.group.regexp"},4:{name:"punctuation.definition.group.regexp"},5:{name:"variable.other.group-name.regexp"},6:{name:"keyword.operator.balancing-group.regexp"},7:{name:"variable.other.group-name.regexp"},8:{name:"variable.other.group-name.regexp"},9:{name:"keyword.operator.balancing-group.regexp"},10:{name:"variable.other.group-name.regexp"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.group.regexp"}},name:"meta.group.regexp",patterns:[{include:"#literals-regular-expression-literal-regex-guts"}]}]},"literals-regular-expression-literal-line-comment":{captures:{1:{name:"punctuation.definition.comment.regexp"}},match:"(\\#).*$",name:"comment.line.regexp"},"literals-regular-expression-literal-quote":{begin:"\\\\Q",beginCaptures:{0:{name:"constant.character.escape.backslash.regexp"}},end:"\\\\E|(\\n)",endCaptures:{0:{name:"constant.character.escape.backslash.regexp"},1:{name:"invalid.illegal.returns-not-allowed.regexp"}},name:"string.quoted.other.regexp.swift"},"literals-regular-expression-literal-regex-guts":{patterns:[{include:"#literals-regular-expression-literal-quote"},{begin:"\\(\\?\\#",beginCaptures:{0:{name:"punctuation.definition.comment.begin.regexp"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.comment.end.regexp"}},name:"comment.block.regexp"},{begin:"<\\{",beginCaptures:{0:{name:"punctuation.section.embedded.begin.regexp"}},end:"\\}>",endCaptures:{0:{name:"punctuation.section.embedded.end.regexp"}},name:"meta.embedded.expression.regexp"},{include:"#literals-regular-expression-literal-unicode-scalars"},{include:"#literals-regular-expression-literal-character-properties"},{match:"[$^]|\\\\[AbBGyYzZ]|\\\\K",name:"keyword.control.anchor.regexp"},{include:"#literals-regular-expression-literal-backtracking-directive-or-global-matching-option"},{include:"#literals-regular-expression-literal-callout"},{include:"#literals-regular-expression-literal-backreference-or-subpattern"},{match:"\\.|\\\\[CdDhHNORsSvVwWX]",name:"constant.character.character-class.regexp"},{match:"\\\\c.",name:"constant.character.entity.control-character.regexp"},{match:"\\\\[^c]",name:"constant.character.escape.backslash.regexp"},{match:"\\|",name:"keyword.operator.or.regexp"},{match:"[*+?]",name:"keyword.operator.quantifier.regexp"},{match:"\\{\\s*\\d+\\s*(?:,\\s*\\d*\\s*)?\\}|\\{\\s*,\\s*\\d+\\s*\\}",name:"keyword.operator.quantifier.regexp"},{include:"#literals-regular-expression-literal-custom-char-class"},{include:"#literals-regular-expression-literal-group-option-toggle"},{include:"#literals-regular-expression-literal-group-or-conditional"}]},"literals-regular-expression-literal-set-operators":{patterns:[{match:"&&",name:"keyword.operator.intersection.regexp.swift"},{match:"--",name:"keyword.operator.subtraction.regexp.swift"},{match:"\\~\\~",name:"keyword.operator.symmetric-difference.regexp.swift"}]},"literals-regular-expression-literal-unicode-scalars":{match:`(?x)
\\\\u\\{\\s*(?:[0-9a-fA-F]+\\s*)+\\}
| \\\\u[0-9a-fA-F]{4}
| \\\\x\\{[0-9a-fA-F]+\\}
| \\\\x[0-9a-fA-F]{0,2}
| \\\\U[0-9a-fA-F]{8}
| \\\\o\\{[0-7]+\\}
| \\\\0[0-7]{0,3}
| \\\\N\\{(?:U\\+[0-9a-fA-F]{1,8} | [\\s\\w-]+)\\}`,name:"constant.character.numeric.regexp"},"literals-string":{patterns:[{begin:'"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.swift"}},comment:"SE-0168: Multi-Line String Literals",end:'"""(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.block.swift",patterns:[{match:'\\G.+(?=""")|\\G.+',name:"invalid.illegal.content-after-opening-delimiter.swift"},{match:"\\\\\\s*\\n",name:"constant.character.escape.newline.swift"},{include:"#literals-string-string-guts"},{comment:'Allow \\("""...""") to appear inside a block string',match:'\\S((?!\\\\\\().)*(?=""")',name:"invalid.illegal.content-before-closing-delimiter.swift"}]},{begin:'#"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.swift"}},end:'"""#(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.block.raw.swift",patterns:[{match:'\\G.+(?=""")|\\G.+',name:"invalid.illegal.content-after-opening-delimiter.swift"},{match:"\\\\#\\s*\\n",name:"constant.character.escape.newline.swift"},{include:"#literals-string-raw-string-guts"},{comment:'Allow \\("""...""") to appear inside a block string',match:'\\S((?!\\\\#\\().)*(?=""")',name:"invalid.illegal.content-before-closing-delimiter.swift"}]},{begin:'(##+)"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.swift"}},end:'"""\\1(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.block.raw.swift",patterns:[{match:'\\G.+(?=""")|\\G.+',name:"invalid.illegal.content-after-opening-delimiter.swift"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.swift"}},end:'"(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.single-line.swift",patterns:[{match:"\\r|\\n",name:"invalid.illegal.returns-not-allowed.swift"},{include:"#literals-string-string-guts"}]},{begin:'(##+)"',beginCaptures:{0:{name:"punctuation.definition.string.begin.raw.swift"}},comment:"SE-0168: raw string literals (more than one #, grammar limitations prevent us from supporting escapes)",end:'"\\1(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.raw.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.single-line.raw.swift",patterns:[{match:"\\r|\\n",name:"invalid.illegal.returns-not-allowed.swift"}]},{begin:'#"',beginCaptures:{0:{name:"punctuation.definition.string.begin.raw.swift"}},comment:"SE-0168: raw string literals (one #, escapes supported)",end:'"#(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.raw.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.single-line.raw.swift",patterns:[{match:"\\r|\\n",name:"invalid.illegal.returns-not-allowed.swift"},{include:"#literals-string-raw-string-guts"}]}]},"literals-string-raw-string-guts":{comment:"the same as #string-guts but with # in escapes",patterns:[{match:`\\\\#[0\\\\tnr"']`,name:"constant.character.escape.swift"},{match:"\\\\#u\\{[0-9a-fA-F]{1,8}\\}",name:"constant.character.escape.unicode.swift"},{begin:"\\\\#\\(",beginCaptures:{0:{name:"punctuation.section.embedded.begin.swift"}},contentName:"source.swift",end:"(\\))",endCaptures:{0:{name:"punctuation.section.embedded.end.swift"},1:{name:"source.swift"}},name:"meta.embedded.line.swift",patterns:[{include:"$self"},{begin:"\\(",comment:"Nested parens",end:"\\)"}]},{match:"\\\\#.",name:"invalid.illegal.escape-not-recognized"}]},"literals-string-string-guts":{patterns:[{match:`\\\\[0\\\\tnr"']`,name:"constant.character.escape.swift"},{match:"\\\\u\\{[0-9a-fA-F]{1,8}\\}",name:"constant.character.escape.unicode.swift"},{begin:"\\\\\\(",beginCaptures:{0:{name:"punctuation.section.embedded.begin.swift"}},contentName:"source.swift",end:"(\\))",endCaptures:{0:{name:"punctuation.section.embedded.end.swift"},1:{name:"source.swift"}},name:"meta.embedded.line.swift",patterns:[{include:"$self"},{begin:"\\(",comment:"Nested parens",end:"\\)"}]},{match:"\\\\.",name:"invalid.illegal.escape-not-recognized"}]},"member-reference":{patterns:[{captures:{1:{name:"variable.other.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"}},match:"(?<=\\.)((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))"}]},operators:{patterns:[{comment:"Type casting",match:"\\b(is\\b|as([!?]\\B|\\b))",name:"keyword.operator.type-casting.swift"},{begin:`(?x)
(?=
(?<oph>
[/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]
)
| \\.
(
\\g<oph>
| \\.
| [\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)`,comment:"This rule helps us speed up the matching.",end:"(?!\\G)",patterns:[{captures:{0:{patterns:[{match:"\\G(\\+\\+|\\-\\-)$",name:"keyword.operator.increment-or-decrement.swift"},{match:"\\G(\\+|\\-)$",name:"keyword.operator.arithmetic.unary.swift"},{match:"\\G!$",name:"keyword.operator.logical.not.swift"},{match:"\\G~$",name:"keyword.operator.bitwise.not.swift"},{match:".+",name:"keyword.operator.custom.prefix.swift"}]}},comment:"Prefix unary operator",match:`(?x)
\\G

(?<=^|[\\s(\\[{,;:])
(
(?!(//|/\\*|\\*/))
(
[/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]

| [\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)++
(?![\\s)\\]},;:]|\\z)`},{captures:{0:{patterns:[{match:"\\G(\\+\\+|\\-\\-)$",name:"keyword.operator.increment-or-decrement.swift"},{match:"\\G!$",name:"keyword.operator.increment-or-decrement.swift"},{match:".+",name:"keyword.operator.custom.postfix.swift"}]}},comment:"Postfix unary operator",match:`(?x)
\\G

(?<!^|[\\s(\\[{,;:])
(
(?!(//|/\\*|\\*/))
(
[/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]

| [\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)++
(?=[\\s)\\]},;:]|\\z)`},{captures:{0:{patterns:[{match:"\\G=$",name:"keyword.operator.assignment.swift"},{match:"\\G(\\+|\\-|\\*|/|%|<<|>>|&|\\^|\\||&&|\\|\\|)=$",name:"keyword.operator.assignment.compound.swift"},{match:"\\G(\\+|\\-|\\*|/)$",name:"keyword.operator.arithmetic.swift"},{match:"\\G&(\\+|\\-|\\*)$",name:"keyword.operator.arithmetic.overflow.swift"},{match:"\\G%$",name:"keyword.operator.arithmetic.remainder.swift"},{match:"\\G(==|!=|>|<|>=|<=|~=)$",name:"keyword.operator.comparison.swift"},{match:"\\G\\?\\?$",name:"keyword.operator.coalescing.swift"},{match:"\\G(&&|\\|\\|)$",name:"keyword.operator.logical.swift"},{match:"\\G(&|\\||\\^|<<|>>)$",name:"keyword.operator.bitwise.swift"},{match:"\\G(===|!==)$",name:"keyword.operator.bitwise.swift"},{match:"\\G\\?$",name:"keyword.operator.ternary.swift"},{match:".+",name:"keyword.operator.custom.infix.swift"}]}},comment:"Infix operator",match:`(?x)
\\G

(
(?!(//|/\\*|\\*/))
(
[/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]

| [\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)++`},{captures:{0:{patterns:[{match:".+",name:"keyword.operator.custom.prefix.dot.swift"}]}},comment:"Dot prefix unary operator",match:`(?x)
\\G

(?<=^|[\\s(\\[{,;:])
\\.
(
(?!(//|/\\*|\\*/))
(
\\.
| [/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]

| [\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)++
(?![\\s)\\]},;:]|\\z)`},{captures:{0:{patterns:[{match:".+",name:"keyword.operator.custom.postfix.dot.swift"}]}},comment:"Dot postfix unary operator",match:`(?x)
\\G

(?<!^|[\\s(\\[{,;:])
\\.
(
(?!(//|/\\*|\\*/))
(
\\.
| [/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]

| [\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)++
(?=[\\s)\\]},;:]|\\z)`},{captures:{0:{patterns:[{match:"\\G\\.\\.[.<]$",name:"keyword.operator.range.swift"},{match:".+",name:"keyword.operator.custom.infix.dot.swift"}]}},comment:"Dot infix operator",match:`(?x)
\\G

\\.
(
(?!(//|/\\*|\\*/))
(
\\.
| [/=\\-+!*%<>&|^~?]
| [\\x{00A1}-\\x{00A7}]
| [\\x{00A9}\\x{00AB}]
| [\\x{00AC}\\x{00AE}]
| [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
| [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
| [\\x{2030}-\\x{203E}]
| [\\x{2041}-\\x{2053}]
| [\\x{2055}-\\x{205E}]
| [\\x{2190}-\\x{23FF}]
| [\\x{2500}-\\x{2775}]
| [\\x{2794}-\\x{2BFF}]
| [\\x{2E00}-\\x{2E7F}]
| [\\x{3001}-\\x{3003}]
| [\\x{3008}-\\x{3030}]

| [\\x{0300}-\\x{036F}]
| [\\x{1DC0}-\\x{1DFF}]
| [\\x{20D0}-\\x{20FF}]
| [\\x{FE00}-\\x{FE0F}]
| [\\x{FE20}-\\x{FE2F}]
| [\\x{E0100}-\\x{E01EF}]
)
)++`}]},{match:":",name:"keyword.operator.ternary.swift"}]},root:{patterns:[{include:"#compiler-control"},{include:"#declarations"},{include:"#expressions"}]}},scopeName:"source.swift"})]}}]);
