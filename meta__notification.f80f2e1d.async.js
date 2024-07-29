(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[4554],{37442:function(a,o,n){var i={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function e(u){if(!n.o(i,u))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d});var r=i[u],s=r[0];return n.e(r[1]).then(function(){return n.t(s,19)})}e.keys=function(){return Object.keys(i)},e.id=37442,a.exports=e},82170:function(a,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return y}});var i=n(90228),e=n.n(i),u=n(87999),r=n.n(u),s=n(50959),d=n(3774),y={"notification-demo-demos":{component:s.memo(s.lazy(function(){return n.e(6173).then(n.bind(n,18590))})),asset:{type:"BLOCK",id:"notification-demo-demos",refAtomIds:["notification"],dependencies:{"index.tsx":{type:"FILE",value:n(11744).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.54"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(63408)},renderOpts:{compile:function(){var m=r()(e()().mark(function p(){var l,f=arguments;return e()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(8896).then(n.bind(n,68896));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,f));case 3:case"end":return t.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}},"notification-demo-playground":{component:s.memo(s.lazy(function(){return n.e(6173).then(n.bind(n,43297))})),asset:{type:"BLOCK",id:"notification-demo-playground",refAtomIds:["notification"],dependencies:{"index.tsx":{type:"FILE",value:n(25030).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.54"}},entry:"index.tsx"},context:{"@lobehub/ui":n(12658),"@yuntijs/ui":n(63408)},renderOpts:{compile:function(){var m=r()(e()().mark(function p(){var l,f=arguments;return e()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(8896).then(n.bind(n,68896));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,f));case 3:case"end":return t.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}}}},53076:function(a,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return e}});var i=n(3774);const e=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Notification",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:"Note\uFF1A Pages that use notification need to be wrapped by the app component, otherwise the notification style may be problematic",paraId:1,tocIndex:1},{value:`import { App, Button, notification } from '@yuntijs/ui';

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
`,paraId:2,tocIndex:1}]},25030:function(a,o){"use strict";o.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},11744:function(a,o){"use strict";o.Z=`import { App, Button, Space, notification } from '@yuntijs/ui';

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
