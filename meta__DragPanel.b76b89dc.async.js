"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9558],{31121:function(u,e,n){n.r(e),n.d(e,{demos:function(){return d}});var r=n(90228),a=n.n(r),l=n(87999),s=n.n(l),o=n(75271),P=n(10965),d={"dragpanel-demo-demos":{component:o.memo(o.lazy(function(){return n.e(5630).then(n.bind(n,24224))})),asset:{type:"BLOCK",id:"dragpanel-demo-demos",refAtomIds:["DragPanel"],dependencies:{"index.tsx":{type:"FILE",value:n(31667).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.65"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(15474),react:n(75271)},renderOpts:{compile:function(){var i=s()(a()().mark(function p(){var _,y=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7358).then(n.bind(n,97358));case 2:return t.abrupt("return",(_=t.sent).default.apply(_,y));case 3:case"end":return t.stop()}},p)}));function m(){return i.apply(this,arguments)}return m}()}}}},19972:function(u,e,n){n.r(e),n.d(e,{texts:function(){return a}});var r=n(10965);const a=[{value:"Based on ",paraId:0,tocIndex:0},{value:"antd drawer",paraId:0,tocIndex:0},{value:" and ",paraId:0,tocIndex:0},{value:"react-draggable",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { DragPanel } from '@yuntijs/ui';

export default () => {
  return (
    <DragPanel open styles={{ wrapper: { height: 320 } }} title="\u5355\u8282\u70B9\u8C03\u8BD5">
      \u6211\u662F panel \u7684\u5185\u5BB9
    </DragPanel>
  );
};
`,paraId:1,tocIndex:0}]},31667:function(u,e){e.Z=`import { Button, DragPanel } from '@yuntijs/ui';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} type="primary">
        \u6253\u5F00 DragPanel
      </Button>
      <DragPanel
        onClose={() => setOpen(false)}
        open={open}
        styles={{ wrapper: { height: 320 } }}
        title="\u5355\u8282\u70B9\u8C03\u8BD5"
      >
        \u6211\u662F panel \u7684\u5185\u5BB9
      </DragPanel>
    </>
  );
};
`}}]);
