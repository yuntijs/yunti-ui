"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[266],{41453:function(u,t,n){n.r(t),n.d(t,{StoryBook:function(){return s.ZP},useControls:function(){return o.useControls},useCreateStore:function(){return o.useCreateStore}});var s=n(16896),o=n(95165)},87812:function(u,t,n){n.r(t),n.d(t,{demos:function(){return f}});var s=n(90228),o=n.n(s),p=n(87999),c=n.n(p),i=n(52136),y=n(77371),h=n(41453),f={"descriptions-demo-demos":{component:i.memo(i.lazy(function(){return n.e(1117).then(n.bind(n,47741))})),asset:{type:"BLOCK",id:"descriptions-demo-demos",refAtomIds:["Descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(44783).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var l=c()(o()().mark(function d(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},d)}));function a(){return l.apply(this,arguments)}return a}()}},"descriptions-demo-playground":{component:i.memo(i.lazy(function(){return n.e(1117).then(n.bind(n,52225))})),asset:{type:"BLOCK",id:"descriptions-demo-playground",refAtomIds:["Descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(27295).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":h,"@yuntijs/ui":y},renderOpts:{compile:function(){var l=c()(o()().mark(function d(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},d)}));function a(){return l.apply(this,arguments)}return a}()}}}},43001:function(u,t,n){n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Descriptions",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Descriptions } from '@yuntijs/ui';

export default () => {
  return (
    <Descriptions
      title="YuntiUI"
      column={2}
      colon={false}
      labelStyle={{ width: 120 }}
      items={[
        {
          key: 'Themeable',
          label: 'Themeable',
          children: 'Customize default themes',
        },
        {
          key: 'Fast',
          label: 'Fast',
          children: 'voids unnecessary styles props',
        },
        {
          key: 'Light & Dark UI',
          label: 'Light & Dark UI',
          children: 'Automatic dark mode recognition',
        },
      ]}
    />
  );
};
`,paraId:1,tocIndex:1}]},27295:function(u,t){t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import type { DescriptionsProps } from '@yuntijs/ui';
import { Descriptions } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: DescriptionsProps | any = useControls(
    {
      title: 'YuntiUI',
      bordered: false,
      colon: false,
      column: 1,
      extra: 'extra',
      layout: {
        options: ['horizontal', 'vertical'],
        value: 'horizontal',
      },
      size: {
        options: ['default', 'middle', 'small'],
        value: 'default',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Descriptions
        {...control}
        items={[
          {
            key: 'Themeable',
            label: 'Themeable',
            children: 'Customize default themes',
          },
          {
            key: 'Fast',
            label: 'Fast',
            children: 'voids unnecessary styles props',
          },
          {
            key: 'Light & Dark UI',
            label: 'Light & Dark UI',
            children: 'Automatic dark mode recognition',
          },
        ]}
      />
    </StoryBook>
  );
};
`},44783:function(u,t){t.Z=`import { Descriptions } from '@yuntijs/ui';

export default () => {
  return (
    <Descriptions
      colon={false}
      column={2}
      items={[
        {
          key: 'Themeable',
          label: 'Themeable',
          children: 'Customize default themes',
        },
        {
          key: 'Fast',
          label: 'Fast',
          children: 'voids unnecessary styles props',
        },
        {
          key: 'Light & Dark UI',
          label: 'Light & Dark UI',
          children: 'Automatic dark mode recognition',
        },
      ]}
      labelStyle={{ width: 120 }}
      title="YuntiUI"
    />
  );
};
`}}]);
