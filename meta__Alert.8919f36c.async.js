(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[80625],{72239:function(u,t,n){var s={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(r){if(!n.o(s,r))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a});var d=s[r],i=d[0];return n.e(d[1]).then(function(){return n.t(i,19)})}o.keys=function(){return Object.keys(s)},o.id=72239,u.exports=o},16513:function(u,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return b}});var s=n(90228),o=n.n(s),r=n(87999),d=n.n(r),i=n(75271),a=n(71983),f=n(45464),h=n(16911),b={"alert-demo-demos":{component:i.memo(i.lazy(function(){return n.e(25031).then(n.bind(n,59475))})),asset:{type:"BLOCK",id:"alert-demo-demos",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:n(5098).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.103"},antd:{type:"NPM",value:"5.23.4"}},entry:"index.tsx"},context:{"@yuntijs/ui":a,antd:f},renderOpts:{compile:function(){var m=d()(o()().mark(function c(){var l,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(92074).then(n.bind(n,92074));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,y));case 3:case"end":return e.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}},"alert-demo-playground":{component:i.memo(i.lazy(function(){return n.e(25031).then(n.bind(n,24492))})),asset:{type:"BLOCK",id:"alert-demo-playground",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:n(64320).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.103"}},entry:"index.tsx"},context:{"@lobehub/ui":h,"@yuntijs/ui":a},renderOpts:{compile:function(){var m=d()(o()().mark(function c(){var l,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(92074).then(n.bind(n,92074));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,y));case 3:case"end":return e.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}}}},23501:function(u,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Alert",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Alert } from '@yuntijs/ui';

export default () => {
  return (
    <Alert
      message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution."
      showIcon
      type="info"
    />
  );
};
`,paraId:1,tocIndex:1}]},64320:function(u,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},5098:function(u,t){"use strict";t.Z=`import { Alert } from '@yuntijs/ui';
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
