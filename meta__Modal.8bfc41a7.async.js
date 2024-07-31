(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6835],{59168:function(i,t,n){var a={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(l){if(!n.o(a,l))return Promise.resolve().then(function(){var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f});var u=a[l],s=u[0];return n.e(u[1]).then(function(){return n.t(s,19)})}o.keys=function(){return Object.keys(a)},o.id=59168,i.exports=o},97258:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return h}});var a=n(90228),o=n.n(a),l=n(87999),u=n.n(l),s=n(75271),f=n(76670),h={"modal-demo-demos":{component:s.memo(s.lazy(function(){return n.e(5682).then(n.bind(n,54384))})),asset:{type:"BLOCK",id:"modal-demo-demos",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:n(80448).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.57"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(63233),react:n(75271)},renderOpts:{compile:function(){var r=u()(o()().mark(function c(){var d,p=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7358).then(n.bind(n,97358));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,p));case 3:case"end":return e.stop()}},c)}));function m(){return r.apply(this,arguments)}return m}()}},"modal-demo-method":{component:s.memo(s.lazy(function(){return n.e(5682).then(n.bind(n,46086))})),asset:{type:"BLOCK",id:"modal-demo-method",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:n(45802).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.57"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(63233)},renderOpts:{compile:function(){var r=u()(o()().mark(function c(){var d,p=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7358).then(n.bind(n,97358));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,p));case 3:case"end":return e.stop()}},c)}));function m(){return r.apply(this,arguments)}return m}()}},"modal-demo-playground":{component:s.memo(s.lazy(function(){return n.e(5682).then(n.bind(n,64568))})),asset:{type:"BLOCK",id:"modal-demo-playground",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:n(85194).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.57"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@lobehub/ui":n(95836),"@yuntijs/ui":n(63233),react:n(75271)},renderOpts:{compile:function(){var r=u()(o()().mark(function c(){var d,p=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7358).then(n.bind(n,97358));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,p));case 3:case"end":return e.stop()}},c)}));function m(){return r.apply(this,arguments)}return m}()}}}},59905:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var a=n(76670);const o=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Modal",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { useState } from 'react';

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
`,paraId:1,tocIndex:1}]},45802:function(i,t){"use strict";t.Z=`import { Button, Modal, Space } from '@yuntijs/ui';

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
`},85194:function(i,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},80448:function(i,t){"use strict";t.Z=`import { Button, Modal } from '@yuntijs/ui';
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
