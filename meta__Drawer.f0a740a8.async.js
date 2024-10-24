(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1524],{59168:function(a,t,n){var s={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function u(o){if(!n.o(s,o))return Promise.resolve().then(function(){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r});var l=s[o],d=l[0];return n.e(l[1]).then(function(){return n.t(d,19)})}u.keys=function(){return Object.keys(s)},u.id=59168,a.exports=u},49871:function(a,t,n){"use strict";var s;n.r(t),n.d(t,{demos:function(){return h}});var u=n(90228),o=n.n(u),l=n(87999),d=n.n(l),r=n(75271),j=n(99559),f=n(25144),_=n(59806),h={"drawer-demo-demos":{component:r.memo(r.lazy(function(){return n.e(7496).then(n.bind(n,93619))})),asset:{type:"BLOCK",id:"drawer-demo-demos",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(38824).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.70"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":f,react:s||(s=n.t(r,2))},renderOpts:{compile:function(){var m=d()(o()().mark(function c(){var i,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7423).then(n.bind(n,7423));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,y));case 3:case"end":return e.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}},"drawer-demo-playground":{component:r.memo(r.lazy(function(){return n.e(7496).then(n.bind(n,59478))})),asset:{type:"BLOCK",id:"drawer-demo-playground",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(31675).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.70"}},entry:"index.tsx"},context:{"@lobehub/ui":_,"@yuntijs/ui":f},renderOpts:{compile:function(){var m=d()(o()().mark(function c(){var i,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7423).then(n.bind(n,7423));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,y));case 3:case"end":return e.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}}}},68181:function(a,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return u}});var s=n(99559);const u=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Drawer",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Button, Drawer, Flex, Space } from '@yuntijs/ui';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="YuntiUI Drawer"
        onClose={onClose}
        open={open}
        extra={<Button>Action</Button>}
        footer={
          <Flex justify="flex-end" gap={16}>
            <Button>\u53D6\u6D88</Button>
            <Button type="primary">\u786E\u5B9A</Button>
          </Flex>
        }
      >
        <p>
          The YuntiUI components are inspired by LobeUI and developed based on Antd components,
          fully compatible with Antd components, and it is recommended to use antd-style as the
          default css-in-js styling solution.
        </p>
      </Drawer>
    </div>
  );
};
`,paraId:1,tocIndex:1}]},31675:function(a,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { DrawerProps } from '@yuntijs/ui';
import { Drawer } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: DrawerProps | any = useControls(
    {
      open: true,
      extra: 'extra',
      footer: 'A panel that slides out from the edge of the screen.',
      title: 'YuntiUI Drawer',
      width: 378,
      height: 378,
      placement: {
        options: ['top', 'right', 'left', 'bootom'],
        value: 'right',
      },
      size: {
        options: ['default', 'large'],
        value: 'default',
      },
      closeIconPlacement: {
        options: ['right', 'left', 'auto'],
        value: 'right',
      },
      mask: true,
      maskClosable: true,
      autoFocus: true,
      destroyOnClose: false,
      forceRender: false,
      keyboard: true,
      zIndex: 1000,
      children:
        'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Drawer open={true} {...control} getContainer={false} />
    </StoryBook>
  );
};
`},38824:function(a,t){"use strict";t.Z=`import { Button, Drawer, Flex } from '@yuntijs/ui';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={showDrawer} type="primary">
        Open
      </Button>
      <Drawer
        extra={<Button>Action</Button>}
        footer={
          <Flex gap={16} justify="flex-end">
            <Button>\u53D6\u6D88</Button>
            <Button type="primary">\u786E\u5B9A</Button>
          </Flex>
        }
        onClose={onClose}
        open={open}
        title="YuntiUI Drawer"
      >
        <p>
          The YuntiUI components are inspired by LobeUI and developed based on Antd components,
          fully compatible with Antd components, and it is recommended to use antd-style as the
          default css-in-js styling solution.
        </p>
      </Drawer>
    </div>
  );
};
`}}]);
