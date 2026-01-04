"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[4554],{41453:function(a,o,n){n.r(o),n.d(o,{StoryBook:function(){return i.ZP},useControls:function(){return e.useControls},useCreateStore:function(){return e.useCreateStore}});var i=n(16896),e=n(95165)},1259:function(a,o,n){n.r(o),n.d(o,{demos:function(){return g}});var i=n(90228),e=n.n(i),f=n(87999),c=n.n(f),u=n(52136),p=n(77371),y=n(41453),g={"notification-demo-demos":{component:u.memo(u.lazy(function(){return n.e(6173).then(n.bind(n,45283))})),asset:{type:"BLOCK",id:"notification-demo-demos",refAtomIds:["notification"],dependencies:{"index.tsx":{type:"FILE",value:n(33871).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":p},renderOpts:{compile:function(){var r=c()(e()().mark(function d(){var s,m=arguments;return e()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(6768).then(n.bind(n,6768));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},d)}));function l(){return r.apply(this,arguments)}return l}()}},"notification-demo-playground":{component:u.memo(u.lazy(function(){return n.e(6173).then(n.bind(n,3452))})),asset:{type:"BLOCK",id:"notification-demo-playground",refAtomIds:["notification"],dependencies:{"index.tsx":{type:"FILE",value:n(27512).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":y,"@yuntijs/ui":p},renderOpts:{compile:function(){var r=c()(e()().mark(function d(){var s,m=arguments;return e()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(6768).then(n.bind(n,6768));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},d)}));function l(){return r.apply(this,arguments)}return l}()}}}},94851:function(a,o,n){n.r(o),n.d(o,{texts:function(){return i}});const i=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Notification",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:"Note\uFF1A Pages that use notification need to be wrapped by the app component, otherwise the notification style may be problematic",paraId:1,tocIndex:1},{value:`import { App, Button, notification } from '@yuntijs/ui';

export default () => {
  return (
    <App>
      <Button
        onClick={() => {
          notification.warnings({
            message: 'YuntiUI nitification',
            description: 'Prompt notification message globally.',
            errors: [
              {
                name: 'YuntiUI',
                message:
                  'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
              },
            ],
          });
        }}
      >
        Open
      </Button>
    </App>
  );
};
`,paraId:2,tocIndex:1}]},27512:function(a,o){o.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { App, Button, NotificationArgsProps, notification } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: NotificationArgsProps | any = useControls(
    {
      message: 'YuntiUI nitification',
      description: 'Prompt notification message globally.',
      duration: 4.5,
      key: 'notification',
      placement: {
        options: ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'],
        value: 'topRight',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <App>
        <Button
          onClick={() => {
            notification.warnings({
              ...control,
              errors: [
                {
                  name: 'YuntiUI',
                  message:
                    'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
                },
              ],
            });
          }}
        >
          Open
        </Button>
      </App>
    </StoryBook>
  );
};
`},33871:function(a,o){o.Z=`import { App, Button, Space, notification } from '@yuntijs/ui';

export default () => {
  return (
    <App>
      <Space>
        <Button
          onClick={() => {
            notification.success({
              message: 'YuntiUI notification success',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          success
        </Button>
        <Button
          onClick={() => {
            notification.info({
              message: 'YuntiUI notification info',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          info
        </Button>
        <Button
          onClick={() => {
            notification.warning({
              message: 'YuntiUI notification warning',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          warning
        </Button>
        <Button
          onClick={() => {
            notification.warn({
              message: 'YuntiUI notification warn',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          warn
        </Button>
        <Button
          onClick={() => {
            notification.error({
              message: 'YuntiUI notification error',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          error
        </Button>
        <Button
          onClick={() => {
            notification.warnings({
              message: 'YuntiUI notification warnings',
              description: 'Prompt notification message globally.',
              errors: [
                {
                  name: 'YuntiUI',
                  message:
                    'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
                },
              ],
            });
          }}
        >
          warnings
        </Button>
        <Button
          onClick={() => {
            notification.warns({
              message: 'YuntiUI notification warns',
              description: 'Prompt notification message globally.',
              errors: [
                {
                  name: 'YuntiUI',
                  message:
                    'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
                },
              ],
            });
          }}
        >
          warns
        </Button>
      </Space>
    </App>
  );
};
`}}]);
