(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1524],{37442:function(u,t,n){var r={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(a){if(!n.o(r,a))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d});var i=r[a],s=i[0];return n.e(i[1]).then(function(){return n.t(s,19)})}o.keys=function(){return Object.keys(r)},o.id=37442,u.exports=o},79097:function(u,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return f}});var r=n(90228),o=n.n(r),a=n(87999),i=n.n(a),s=n(50959),d=n(3351),f={"drawer-demo-demos":{component:s.memo(s.lazy(function(){return n.e(7496).then(n.bind(n,24490))})),asset:{type:"BLOCK",id:"drawer-demo-demos",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(93662).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.55"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(63408),react:n(50959)},renderOpts:{compile:function(){var m=i()(o()().mark(function c(){var l,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8896).then(n.bind(n,68896));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,y));case 3:case"end":return e.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}},"drawer-demo-playground":{component:s.memo(s.lazy(function(){return n.e(7496).then(n.bind(n,2651))})),asset:{type:"BLOCK",id:"drawer-demo-playground",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(39486).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.55"}},entry:"index.tsx"},context:{"@lobehub/ui":n(12658),"@yuntijs/ui":n(63408)},renderOpts:{compile:function(){var m=i()(o()().mark(function c(){var l,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8896).then(n.bind(n,68896));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,y));case 3:case"end":return e.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}}}},1034:function(u,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var r=n(3351);const o=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Drawer",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Button, Drawer, Flex, Space } from '@yuntijs/ui';
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
`,paraId:1,tocIndex:1}]},39486:function(u,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},93662:function(u,t){"use strict";t.Z=`import { Button, Drawer, Flex } from '@yuntijs/ui';
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
