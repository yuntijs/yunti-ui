(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[76835],{85848:function(i,t,n){var s={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function u(a){if(!n.o(s,a))return Promise.resolve().then(function(){var o=new Error("Cannot find module '"+a+"'");throw o.code="MODULE_NOT_FOUND",o});var f=s[a],l=f[0];return n.e(f[1]).then(function(){return n.t(l,19)})}u.keys=function(){return Object.keys(s)},u.id=85848,i.exports=u},30470:function(i,t,n){"use strict";var s;n.r(t),n.d(t,{demos:function(){return b}});var u=n(90228),a=n.n(u),f=n(87999),l=n.n(f),o=n(75271),y=n(71983),v=n(90831),b={"modal-demo-demos":{component:o.memo(o.lazy(function(){return n.e(55682).then(n.bind(n,11559))})),asset:{type:"BLOCK",id:"modal-demo-demos",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:n(66758).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.79"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":y,react:s||(s=n.t(o,2))},renderOpts:{compile:function(){var r=l()(a()().mark(function c(){var d,p=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,p));case 3:case"end":return e.stop()}},c)}));function m(){return r.apply(this,arguments)}return m}()}},"modal-demo-method":{component:o.memo(o.lazy(function(){return n.e(55682).then(n.bind(n,92179))})),asset:{type:"BLOCK",id:"modal-demo-method",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:n(44295).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.79"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var r=l()(a()().mark(function c(){var d,p=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,p));case 3:case"end":return e.stop()}},c)}));function m(){return r.apply(this,arguments)}return m}()}},"modal-demo-playground":{component:o.memo(o.lazy(function(){return n.e(55682).then(n.bind(n,7015))})),asset:{type:"BLOCK",id:"modal-demo-playground",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:n(61266).Z},"@lobehub/ui":{type:"NPM",value:"1.153.16"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.79"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@lobehub/ui":v,"@yuntijs/ui":y,react:s||(s=n.t(o,2))},renderOpts:{compile:function(){var r=l()(a()().mark(function c(){var d,p=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,p));case 3:case"end":return e.stop()}},c)}));function m(){return r.apply(this,arguments)}return m}()}}}},62427:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Modal",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState < boolean > false;
  const [confirmLoading, setConfirmLoading] = useState < boolean > false;
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="YuntiUI Modal"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
        onOk={() => {
          setConfirmLoading(true);
        }}
      >
        The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully
        compatible with Antd components, and it is recommended to use antd-style as the default
        css-in-js styling solution.
      </Modal>
    </>
  );
};
`,paraId:1,tocIndex:1}]},44295:function(i,t){"use strict";t.Z=`import { Button, Modal, Space } from '@yuntijs/ui';

export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          Modal.info({
            title: 'YuntiUI Modal.info',
            content: (
              <div>
                The YuntiUI components are inspired by LobeUI and developed based on Antd
                components, fully compatible with Antd components, and it is recommended to use
                antd-style as the default css-in-js styling solution.
              </div>
            ),
            onOk() {},
          });
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          Modal.success({
            title: 'YuntiUI Modal.success',
            content: (
              <div>
                The YuntiUI components are inspired by LobeUI and developed based on Antd
                components, fully compatible with Antd components, and it is recommended to use
                antd-style as the default css-in-js styling solution.
              </div>
            ),
            onOk() {},
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          Modal.error({
            title: 'YuntiUI Modal.error',
            content: (
              <div>
                The YuntiUI components are inspired by LobeUI and developed based on Antd
                components, fully compatible with Antd components, and it is recommended to use
                antd-style as the default css-in-js styling solution.
              </div>
            ),
            onOk() {},
          });
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          Modal.warning({
            title: 'YuntiUI Modal.warning',
            content: (
              <div>
                The YuntiUI components are inspired by LobeUI and developed based on Antd
                components, fully compatible with Antd components, and it is recommended to use
                antd-style as the default css-in-js styling solution.
              </div>
            ),
            onOk() {},
          });
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          Modal.warn({
            title: 'YuntiUI Modal.warn',
            content: (
              <div>
                The YuntiUI components are inspired by LobeUI and developed based on Antd
                components, fully compatible with Antd components, and it is recommended to use
                antd-style as the default css-in-js styling solution.
              </div>
            ),
            onOk() {},
          });
        }}
      >
        Warn
      </Button>
      <Button
        onClick={() => {
          Modal.confirm({
            title: 'YuntiUI Modal.confirm',
            content: (
              <div>
                The YuntiUI components are inspired by LobeUI and developed based on Antd
                components, fully compatible with Antd components, and it is recommended to use
                antd-style as the default css-in-js styling solution.
              </div>
            ),
            onOk() {},
          });
        }}
      >
        Confirm
      </Button>
    </Space>
  );
};
`},61266:function(i,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { ModalProps } from '@yuntijs/ui';
import { Button, Modal } from '@yuntijs/ui';
import { useState } from 'react';

export default () => {
  const store = useCreateStore();
  const [open, setOpen] = useState<boolean>(false);
  const control: ModalProps | any = useControls(
    {
      width: 520,
      title: 'YuntiUI Modal',
      children:
        'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
      cancelText: '\u53D6\u6D88',
      okText: '\u786E\u5B9A',
      okType: 'primary',
      confirmLoading: false,
      mask: true,
      maskClosable: true,
      centered: false,
      keyboard: true,
      focusTriggerAfterClose: true,
      destroyOnClose: false,
      zIndex: 1000,
      borderd: true,
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        {...control}
        onCancel={() => setOpen(false)}
        onOk={() => {
          setOpen(false);
        }}
        open={open}
      />
    </StoryBook>
  );
};
`},66758:function(i,t){"use strict";t.Z=`import { Button, Modal } from '@yuntijs/ui';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
        onOk={() => {
          setConfirmLoading(true);
        }}
        open={open}
        title="YuntiUI Modal"
      >
        The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully
        compatible with Antd components, and it is recommended to use antd-style as the default
        css-in-js styling solution.
      </Modal>
    </>
  );
};
`}}]);
