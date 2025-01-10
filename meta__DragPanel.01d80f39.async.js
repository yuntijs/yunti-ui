"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[99558],{86351:function(r,e,n){var a;n.r(e),n.d(e,{demos:function(){return m}});var s=n(90228),o=n.n(s),_=n(87999),d=n.n(_),u=n(75271),i=n(71983),m={"dragpanel-demo-demos":{component:u.memo(u.lazy(function(){return n.e(45630).then(n.bind(n,66899))})),asset:{type:"BLOCK",id:"dragpanel-demo-demos",refAtomIds:["DragPanel"],dependencies:{"index.tsx":{type:"FILE",value:n(9647).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.80"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":i,react:a||(a=n.t(u,2))},renderOpts:{compile:function(){var p=d()(o()().mark(function c(){var l,P=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(74807).then(n.bind(n,74807));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,P));case 3:case"end":return t.stop()}},c)}));function y(){return p.apply(this,arguments)}return y}()}}}},64060:function(r,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"Based on ",paraId:0,tocIndex:0},{value:"antd drawer",paraId:0,tocIndex:0},{value:" and ",paraId:0,tocIndex:0},{value:"react-draggable",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { DragPanel } from '@yuntijs/ui';

export default () => {
  return (
    <DragPanel open styles={{ wrapper: { height: 320 } }} title="\u5355\u8282\u70B9\u8C03\u8BD5">
      \u6211\u662F panel \u7684\u5185\u5BB9
    </DragPanel>
  );
};
`,paraId:1,tocIndex:0}]},9647:function(r,e){e.Z=`import { Button, DragPanel } from '@yuntijs/ui';
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
