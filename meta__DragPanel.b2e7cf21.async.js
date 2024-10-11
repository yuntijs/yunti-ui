"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9558],{50711:function(_,e,n){var a;n.r(e),n.d(e,{demos:function(){return m}});var u=n(90228),o=n.n(u),s=n(87999),d=n.n(s),r=n(75271),D=n(79620),i=n(25144),m={"dragpanel-demo-demos":{component:r.memo(r.lazy(function(){return n.e(5630).then(n.bind(n,26746))})),asset:{type:"BLOCK",id:"dragpanel-demo-demos",refAtomIds:["DragPanel"],dependencies:{"index.tsx":{type:"FILE",value:n(88372).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.68"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":i,react:a||(a=n.t(r,2))},renderOpts:{compile:function(){var p=d()(o()().mark(function P(){var l,c=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7423).then(n.bind(n,7423));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},P)}));function y(){return p.apply(this,arguments)}return y}()}}}},75238:function(_,e,n){n.r(e),n.d(e,{texts:function(){return u}});var a=n(79620);const u=[{value:"Based on ",paraId:0,tocIndex:0},{value:"antd drawer",paraId:0,tocIndex:0},{value:" and ",paraId:0,tocIndex:0},{value:"react-draggable",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { DragPanel } from '@yuntijs/ui';

export default () => {
  return (
    <DragPanel open styles={{ wrapper: { height: 320 } }} title="\u5355\u8282\u70B9\u8C03\u8BD5">
      \u6211\u662F panel \u7684\u5185\u5BB9
    </DragPanel>
  );
};
`,paraId:1,tocIndex:0}]},88372:function(_,e){e.Z=`import { Button, DragPanel } from '@yuntijs/ui';
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
