import { App, Button, Space } from '@yuntijs/ui';

const SHARED_CONTENT = (
  <div>
    The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully
    compatible with Antd components, and it is recommended to use antd-style as the default
    css-in-js styling solution.
  </div>
);

const MethodDemoInner = () => {
  const { modal } = App.useApp();
  return (
    <Space wrap>
      <Button
        onClick={() => {
          modal.info({ title: 'YuntiUI modal.info', content: SHARED_CONTENT, onOk() {} });
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          modal.success({ title: 'YuntiUI modal.success', content: SHARED_CONTENT, onOk() {} });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          modal.error({ title: 'YuntiUI modal.error', content: SHARED_CONTENT, onOk() {} });
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          modal.warning({ title: 'YuntiUI modal.warning', content: SHARED_CONTENT, onOk() {} });
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          modal.confirm({ title: 'YuntiUI modal.confirm', content: SHARED_CONTENT, onOk() {} });
        }}
      >
        Confirm
      </Button>
    </Space>
  );
};

export default () => (
  <App>
    <MethodDemoInner />
  </App>
);
