import { App, Button, Space, notification } from '@yuntijs/ui';

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
