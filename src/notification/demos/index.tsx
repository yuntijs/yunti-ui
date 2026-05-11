import { Alert, App, Button, Space, notification } from '@yuntijs/ui';

/** @deprecated Use `App.useApp().notification` instead. */
export default () => {
  return (
    <App>
      <Alert
        description="此 demo 演示的是已废弃的静态 API。请改用 App.useApp().notification 来获取绑定 ConfigProvider 上下文的实例。"
        showIcon
        style={{ marginBottom: 12 }}
        title="Deprecated"
        type="warning"
      />
      <Space>
        <Button
          onClick={() => {
            notification.success({
              title: 'YuntiUI notification success',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          success
        </Button>
        <Button
          onClick={() => {
            notification.info({
              title: 'YuntiUI notification info',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          info
        </Button>
        <Button
          onClick={() => {
            notification.warning({
              title: 'YuntiUI notification warning',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          warning
        </Button>
        <Button
          onClick={() => {
            notification.warn({
              title: 'YuntiUI notification warn',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          warn
        </Button>
        <Button
          onClick={() => {
            notification.error({
              title: 'YuntiUI notification error',
              description: 'Prompt notification message globally.',
            });
          }}
        >
          error
        </Button>
        <Button
          onClick={() => {
            notification.warnings({
              title: 'YuntiUI notification warnings',
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
              title: 'YuntiUI notification warns',
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
