"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9104],{41453:function(d,t,n){n.r(t),n.d(t,{StoryBook:function(){return i.ZP},useControls:function(){return o.useControls},useCreateStore:function(){return o.useCreateStore}});var i=n(16896),o=n(95165)},85904:function(d,t,n){n.r(t),n.d(t,{demos:function(){return c}});var i=n(90228),o=n.n(i),y=n(87999),v=n.n(y),u=n(52136),p=n(77371),f=n(41453),c={"divider-demo-demos":{component:u.memo(u.lazy(function(){return n.e(137).then(n.bind(n,92326))})),asset:{type:"BLOCK",id:"divider-demo-demos",refAtomIds:["Divider"],dependencies:{"index.tsx":{type:"FILE",value:n(31280).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@yuntijs/ui":p},renderOpts:{compile:function(){var s=v()(o()().mark(function l(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},l)}));function a(){return s.apply(this,arguments)}return a}()}},"divider-demo-playground":{component:u.memo(u.lazy(function(){return n.e(137).then(n.bind(n,8788))})),asset:{type:"BLOCK",id:"divider-demo-playground",refAtomIds:["Divider"],dependencies:{"index.tsx":{type:"FILE",value:n(83399).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":f,"@yuntijs/ui":p},renderOpts:{compile:function(){var s=v()(o()().mark(function l(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},l)}));function a(){return s.apply(this,arguments)}return a}()}}}},73621:function(d,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Divider",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Divider } from '@yuntijs/ui';

export default () => {
  return (
    <Divider
      mode="expanded"
      defaultOpen={true}
      content={
        <div>
          The YuntiUI components are inspired by LobeUI and developed based on Antd components,
          fully compatible with Antd components, and it is recommended to use antd-style as the
          default css-in-js styling solution.
        </div>
      }
      iconPlacement="left"
      orientation="left"
      orientationMargin={0}
      dashed={true}
    >
      YuntiUI
    </Divider>
  );
};
`,paraId:1,tocIndex:1}]},83399:function(d,t){t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import type { DividerProps } from '@yuntijs/ui';
import { Divider } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: DividerProps | any = useControls(
    {
      mode: {
        options: ['expanded', 'line', 'default'],
        value: 'line',
      },
      defaultOpen: false,
      content: 'content',
      iconPlacement: {
        options: ['left', 'right'],
        value: 'left',
      },
      type: {
        options: ['horizontal', 'vertical'],
        value: 'horizontal',
      },
      orientation: {
        options: ['left', 'right', 'center'],
        value: 'left',
      },
      orientationMargin: 10,
      children: '',
      dashed: false,
      plain: false,
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Divider {...control} />
    </StoryBook>
  );
};
`},31280:function(d,t){t.Z=`import { Divider } from '@yuntijs/ui';

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <div>
        <Divider mode="line" type="horizontal" />
      </div>
      <div>
        \u5206\u5272\u7EBF\u5DE6\u4FA7
        <Divider mode="line" type="vertical" />
        \u5206\u5272\u7EBF\u53F3\u4FA7
      </div>

      <div>
        <Divider
          content="YuntiUI"
          dashed={true}
          defaultOpen={true}
          iconPlacement="left"
          mode="expanded"
          orientation="left"
          orientationMargin={0}
        >
          <div>
            The YuntiUI components are inspired by LobeUI and developed based on Antd components,
            fully compatible with Antd components, and it is recommended to use antd-style as the
            default css-in-js styling solution.
          </div>
        </Divider>
      </div>

      <div>
        <Divider
          dashed={true}
          defaultOpen={true}
          iconPlacement="left"
          mode="default"
          orientation="left"
          orientationMargin={0}
        >
          YuntiUI
        </Divider>
      </div>
    </div>
  );
};
`}}]);
