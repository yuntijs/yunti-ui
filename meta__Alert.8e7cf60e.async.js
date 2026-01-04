"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[625],{41453:function(d,t,n){n.r(t),n.d(t,{StoryBook:function(){return s.ZP},useControls:function(){return o.useControls},useCreateStore:function(){return o.useCreateStore}});var s=n(16896),o=n(95165)},42969:function(d,t,n){n.r(t),n.d(t,{demos:function(){return b}});var s=n(90228),o=n.n(s),y=n(87999),p=n.n(y),r=n(52136),c=n(77371),f=n(99630),h=n(41453),b={"alert-demo-demos":{component:r.memo(r.lazy(function(){return n.e(5031).then(n.bind(n,34026))})),asset:{type:"BLOCK",id:"alert-demo-demos",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:n(17034).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"},antd:{type:"NPM",value:"5.27.3"}},entry:"index.tsx"},context:{"@yuntijs/ui":c,antd:f},renderOpts:{compile:function(){var i=p()(o()().mark(function a(){var u,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,m));case 3:case"end":return e.stop()}},a)}));function l(){return i.apply(this,arguments)}return l}()}},"alert-demo-playground":{component:r.memo(r.lazy(function(){return n.e(5031).then(n.bind(n,84658))})),asset:{type:"BLOCK",id:"alert-demo-playground",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:n(1241).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":h,"@yuntijs/ui":c},renderOpts:{compile:function(){var i=p()(o()().mark(function a(){var u,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,m));case 3:case"end":return e.stop()}},a)}));function l(){return i.apply(this,arguments)}return l}()}}}},67015:function(d,t,n){n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Alert",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Alert } from '@yuntijs/ui';

export default () => {
  return (
    <Alert
      message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution."
      showIcon
      type="info"
    />
  );
};
`,paraId:1,tocIndex:1}]},1241:function(d,t){t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import type { AlertProps } from '@yuntijs/ui';
import { Alert } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: AlertProps | any = useControls(
    {
      message: 'YuntiUI',
      description:
        'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
      showIcon: true,
      type: {
        options: ['success', 'info', 'warning', 'error'],
        value: 'info',
      },
      bordered: {
        options: ['dashed', 'solid', 'none'],
        value: 'dashed',
      },
      closable: false,
      banner: false,
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Alert {...control} />
    </StoryBook>
  );
};
`},17034:function(d,t){t.Z=`import { Alert } from '@yuntijs/ui';
import { Button, Space } from 'antd';

export default () => {
  return (
    <Space direction="vertical">
      <Alert
        action={
          <Button size="small" type="text">
            UNDO
          </Button>
        }
        closable
        description="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        message="YuntiUI"
        showIcon
        type="info"
      />
      <Alert
        message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        showIcon
        type="info"
      />
      <Alert
        message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        showIcon
        type="success"
      />
      <Alert
        message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        showIcon
        type="warning"
      />
      <Alert
        message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        showIcon
        type="error"
      />
    </Space>
  );
};
`}}]);
