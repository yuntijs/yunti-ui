"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7940],{41453:function(r,e,n){n.r(e),n.d(e,{StoryBook:function(){return u.ZP},useControls:function(){return o.useControls},useCreateStore:function(){return o.useCreateStore}});var u=n(16896),o=n(95165)},14451:function(r,e,n){n.r(e),n.d(e,{demos:function(){return v}});var u=n(90228),o=n.n(u),f=n(87999),p=n.n(f),a=n(52136),y=n(77371),c=n(41453),v={"status-demo-demos":{component:a.memo(a.lazy(function(){return n.e(2002).then(n.bind(n,99635))})),asset:{type:"BLOCK",id:"status-demo-demos",refAtomIds:["Status"],dependencies:{"index.tsx":{type:"FILE",value:n(5088).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var l=p()(o()().mark(function d(){var s,m=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(6768).then(n.bind(n,6768));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},d)}));function i(){return l.apply(this,arguments)}return i}()}},"status-demo-playground":{component:a.memo(a.lazy(function(){return n.e(2002).then(n.bind(n,13787))})),asset:{type:"BLOCK",id:"status-demo-playground",refAtomIds:["Status"],dependencies:{"index.tsx":{type:"FILE",value:n(86253).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":c,"@yuntijs/ui":y},renderOpts:{compile:function(){var l=p()(o()().mark(function d(){var s,m=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(6768).then(n.bind(n,6768));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},d)}));function i(){return l.apply(this,arguments)}return i}()}}}},77946:function(r,e,n){n.r(e),n.d(e,{texts:function(){return u}});const u=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Badge",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Status } from '@yuntijs/ui';

export default () => {
  //
  return <Status status="processing" text="\u6784\u5EFA\u4E2D" tooltip="\u9636\u6BB5\uFF1A1/4" />;
};
`,paraId:1,tocIndex:1}]},86253:function(r,e){e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Status, StatusProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const options: StatusProps | any = useControls(
    {
      status: {
        options: ['success', 'processing', 'error', 'default', 'warning'],
        value: 'processing',
      },
      text: '\u6784\u5EFA\u4E2D',
      tooltip: '\u9636\u6BB5\uFF1A1/4',
      color: {
        options: [
          'blue',
          'purple',
          'cyan',
          'green',
          'magenta',
          'pink',
          'red',
          'orange',
          'yellow',
          'volcano',
          'geekblue',
          'lime',
          'gold',
        ],
        value: '',
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Status {...options} />
    </StoryBook>
  );
};
`},5088:function(r,e){e.Z=`import { Status } from '@yuntijs/ui';

export default () => {
  return <Status status="processing" text="\u6784\u5EFA\u4E2D" title="\u6A21\u578B\u6784\u5EFA\u4E2D" tooltip="\u9636\u6BB5\uFF1A1/4" />;
};
`}}]);
