(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[44554],{72239:function(a,o,n){var i={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function e(u){if(!n.o(i,u))return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l});var r=i[u],s=r[0];return n.e(r[1]).then(function(){return n.t(s,19)})}e.keys=function(){return Object.keys(i)},e.id=72239,a.exports=e},69854:function(a,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return g}});var i=n(90228),e=n.n(i),u=n(87999),r=n.n(u),s=n(75271),l=n(71983),y=n(16911),g={"notification-demo-demos":{component:s.memo(s.lazy(function(){return n.e(16173).then(n.bind(n,53785))})),asset:{type:"BLOCK",id:"notification-demo-demos",refAtomIds:["notification"],dependencies:{"index.tsx":{type:"FILE",value:n(23699).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.105"}},entry:"index.tsx"},context:{"@yuntijs/ui":l},renderOpts:{compile:function(){var m=r()(e()().mark(function p(){var d,f=arguments;return e()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(92074).then(n.bind(n,92074));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,f));case 3:case"end":return t.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}},"notification-demo-playground":{component:s.memo(s.lazy(function(){return n.e(16173).then(n.bind(n,54048))})),asset:{type:"BLOCK",id:"notification-demo-playground",refAtomIds:["notification"],dependencies:{"index.tsx":{type:"FILE",value:n(95595).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.105"}},entry:"index.tsx"},context:{"@lobehub/ui":y,"@yuntijs/ui":l},renderOpts:{compile:function(){var m=r()(e()().mark(function p(){var d,f=arguments;return e()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(92074).then(n.bind(n,92074));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,f));case 3:case"end":return t.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}}}},94619:function(a,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return i}});const i=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Notification",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:"Note\uFF1A Pages that use notification need to be wrapped by the app component, otherwise the notification style may be problematic",paraId:1,tocIndex:1},{value:`import { App, Button, notification } from '@yuntijs/ui';

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
`,paraId:2,tocIndex:1}]},95595:function(a,o){"use strict";o.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},23699:function(a,o){"use strict";o.Z=`import { App, Button, Space, notification } from '@yuntijs/ui';

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
