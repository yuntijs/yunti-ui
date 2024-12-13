"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[89479],{89479:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var o=[Object.freeze({displayName:"Nextflow",name:"nextflow",patterns:[{include:"#nfl-rules"}],repository:{"implicit-variables":{patterns:[{match:"(?<=[^\\.\\w]|^)(params|nextflow|workflow|launchDir|moduleDir|projectDir|workDir)\\b",name:"variable.language.nextflow"}]},"include-statement":{patterns:[{match:"^\\b(include)\\b",name:"keyword.nextflow"},{match:"\\b(from)\\b",name:"keyword.nextflow"}]},"nfl-rules":{patterns:[{include:"#process-def"},{include:"#workflow-def"},{include:"#code-block"},{include:"#include-statement"},{include:"#implicit-variables"},{begin:"(\\w*\\()",beginCaptures:{1:{patterns:[{include:"source.nextflow-groovy"}]}},comment:"method call and parens",end:"\\)",patterns:[{include:"#nfl-rules"}]},{begin:"{",comment:"braces",end:"}",patterns:[{include:"#nfl-rules"}]},{include:"source.nextflow-groovy"}]},"process-body":{patterns:[{match:"(?:accelerator|afterScript|beforeScript|cache|cpus|conda|container|containerOptions|clusterOptions|debug|disk|echo|errorStrategy|executor|ext|label|machineType|maxErrors|maxForks|maxRetries|memory|module|penv|pod|publishDir|queue|resourceLabels|scratch|stageInMode|stageOutMode|storeDir|tag|time)\\b",name:"entity.name.function.nextflow"},{match:"(?:input|output|when|script|shell|exec):",name:"constant.block.nextflow"},{match:"\\b(tuple|set|path|file|val|stdout)(\\(|\\s)",name:"entity.name.function.nextflow"},{include:"#implicit-variables"},{begin:"(\\w*\\()",beginCaptures:{1:{patterns:[{include:"source.nextflow-groovy"}]}},comment:"method call and parens",end:"\\)",patterns:[{include:"#process-body"}]},{begin:"{",comment:"braces",end:"}",patterns:[{include:"#process-body"}]},{include:"source.nextflow-groovy#comments"},{include:"source.nextflow-groovy#support-functions"},{include:"source.nextflow-groovy#keyword"},{include:"source.nextflow-groovy#values"},{include:"source.nextflow-groovy#anonymous-classes-and-new"},{include:"source.nextflow-groovy#types"},{include:"source.nextflow-groovy#parens"},{include:"source.nextflow-groovy#closures"},{include:"source.nextflow-groovy#braces"}]},"process-def":{begin:`^\\s*(process)\\s+(\\w+|"[^"]+"|'[^']+')\\s*{`,beginCaptures:{1:{name:"keyword.nextflow"},2:{name:"function.nextflow"}},end:"}",name:"process.nextflow",patterns:[{include:"#process-body"}]},"workflow-body":{patterns:[{include:"#implicit-variables"},{match:"(?:take|main|emit):",name:"constant.block.nextflow"},{match:"(?<=[\\s\\.])(branch|buffer|close|collate|collect|collectFile|combine|concat|count|countBy|cross|distinct|dump|filter|first|flatMap|flatten|groupTuple|ifEmpty|join|last|map|max|merge|min|mix|multiMap|randomSample|reduce|set|splitCsv|splitFasta|splitFastq|splitText|sum|take|tap|toInteger|toList|toSortedList|transpose|unique|until|view)(?=[{\\(\\s])",name:"entity.name.function.nextflow"},{captures:{1:{name:"keyword.nextflow"},2:{name:"entity.name.function.nextflow"}},comment:"Channel factory single line",match:"\\b((?:C|c)hannel\\.)((fromList|fromPath|fromFilePairs|fromSRA|from|of|empty|value|watchPath)\\W)?"},{begin:"\\b((?:C|c)hannel)\\s*$",beginCaptures:{1:{name:"keyword.nextflow"}},comment:"Channel factory multi-line",end:"(^\\s*)(?:(\\.)(fromList|fromPath|fromFilePairs|fromSRA|from|of|empty|value|watchPath)\\W)?",endCaptures:{1:{name:"keyword.nextflow"},2:{name:"keyword.nextflow"},3:{name:"entity.name.function.nextflow"}}},{begin:"(\\w*\\()",beginCaptures:{1:{patterns:[{include:"source.nextflow-groovy"}]}},comment:"method call and parens",end:"\\)",patterns:[{include:"#workflow-body"}]},{begin:"{",comment:"braces",end:"}",patterns:[{include:"#workflow-body"}]},{include:"source.nextflow-groovy#comments"},{include:"source.nextflow-groovy#support-functions"},{include:"source.nextflow-groovy#keyword"},{include:"source.nextflow-groovy#values"},{include:"source.nextflow-groovy#anonymous-classes-and-new"},{include:"source.nextflow-groovy#types"},{include:"source.nextflow-groovy#parens"},{include:"source.nextflow-groovy#closures"},{include:"source.nextflow-groovy#braces"}]},"workflow-def":{begin:`^\\s*(workflow)(?:\\s+(\\w+|"[^"]+"|'[^']+'))?\\s*{`,beginCaptures:{1:{name:"keyword.nextflow"},2:{name:"constant.nextflow"}},end:"}",name:"workflow.nextflow",patterns:[{include:"#workflow-body"}]}},scopeName:"source.nextflow",aliases:["nf"]})]}}]);
