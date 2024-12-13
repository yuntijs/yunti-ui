"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3515],{3515:function(t,e,n){n.r(e);const a=Object.freeze(JSON.parse('{"displayName":"Fluent","name":"fluent","patterns":[{"include":"#comment"},{"include":"#message"},{"include":"#wrong-line"}],"repository":{"attributes":{"begin":"\\\\s*(\\\\.[a-zA-Z][a-zA-Z0-9_-]*\\\\s*=\\\\s*)","beginCaptures":{"1":{"name":"support.class.attribute-begin.fluent"}},"end":"^(?=\\\\s*[^\\\\.])","patterns":[{"include":"#placeable"}]},"comment":{"match":"^##?#?\\\\s.*$","name":"comment.fluent"},"function-comma":{"match":",","name":"support.function.function-comma.fluent"},"function-named-argument":{"begin":"([a-zA-Z0-9]+:)\\\\s*([\\"a-zA-Z0-9]+)","beginCaptures":{"1":{"name":"support.function.named-argument.name.fluent"},"2":{"name":"variable.other.named-argument.value.fluent"}},"end":"(?=\\\\)|,|\\\\s)","name":"variable.other.named-argument.fluent"},"function-positional-argument":{"match":"\\\\$[a-zA-Z0-9_-]+","name":"variable.other.function.positional-argument.fluent"},"invalid-placeable-string-missing-end-quote":{"match":"\\"[^\\"]+$","name":"invalid.illegal.wrong-placeable-missing-end-quote.fluent"},"invalid-placeable-wrong-placeable-missing-end":{"match":"([^}A-Z]*$|[^-][^>]$)\\\\b","name":"invalid.illegal.wrong-placeable-missing-end.fluent"},"message":{"begin":"^(-?[a-zA-Z][a-zA-Z0-9_-]*\\\\s*=\\\\s*)","beginCaptures":{"1":{"name":"support.class.message-identifier.fluent"}},"contentName":"string.fluent","end":"^(?=\\\\S)","patterns":[{"include":"#attributes"},{"include":"#placeable"}]},"placeable":{"begin":"({)","beginCaptures":{"1":{"name":"keyword.placeable.begin.fluent"}},"contentName":"variable.other.placeable.content.fluent","end":"(})","endCaptures":{"1":{"name":"keyword.placeable.end.fluent"}},"patterns":[{"include":"#placeable-string"},{"include":"#placeable-function"},{"include":"#placeable-reference-or-number"},{"include":"#selector"},{"include":"#invalid-placeable-wrong-placeable-missing-end"},{"include":"#invalid-placeable-string-missing-end-quote"},{"include":"#invalid-placeable-wrong-function-name"}]},"placeable-function":{"begin":"([A-Z][A-Z0-9_-]*\\\\()","beginCaptures":{"1":{"name":"support.function.placeable-function.call.begin.fluent"}},"contentName":"string.placeable-function.fluent","end":"(\\\\))","endCaptures":{"1":{"name":"support.function.placeable-function.call.end.fluent"}},"patterns":[{"include":"#function-comma"},{"include":"#function-positional-argument"},{"include":"#function-named-argument"}]},"placeable-reference-or-number":{"match":"((-|\\\\$)[a-zA-Z0-9_-]+|[a-zA-Z][a-zA-Z0-9_-]*|\\\\d+)","name":"variable.other.placeable.reference-or-number.fluent"},"placeable-string":{"begin":"(\\")(?=[^\\\\n]*\\")","beginCaptures":{"1":{"name":"variable.other.placeable-string-begin.fluent"}},"contentName":"string.placeable-string-content.fluent","end":"(\\")","endCaptures":{"1":{"name":"variable.other.placeable-string-end.fluent"}}},"selector":{"begin":"(->)","beginCaptures":{"1":{"name":"support.function.selector.begin.fluent"}},"contentName":"string.selector.content.fluent","end":"^(?=\\\\s*})","patterns":[{"include":"#selector-item"}]},"selector-item":{"begin":"(\\\\s*\\\\*?\\\\[)([a-zA-Z0-9_-]+)(\\\\]\\\\s*)","beginCaptures":{"1":{"name":"support.function.selector-item.begin.fluent"},"2":{"name":"variable.other.selector-item.begin.fluent"},"3":{"name":"support.function.selector-item.begin.fluent"}},"contentName":"string.selector-item.content.fluent","end":"^(?=(\\\\s*})|(\\\\s*\\\\[)|(\\\\s*\\\\*))","patterns":[{"include":"#placeable"}]},"wrong-line":{"match":".*","name":"invalid.illegal.wrong-line.fluent"}},"scopeName":"source.ftl","aliases":["ftl"]}'));e.default=[a]}}]);
