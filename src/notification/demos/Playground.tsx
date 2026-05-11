import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Alert, App, Button, NotificationArgsProps, notification } from '@yuntijs/ui';

/** @deprecated Use `App.useApp().notification` instead. */
export default () => {
  const store = useCreateStore();
  const control: NotificationArgsProps | any = useControls(
    {
      title: 'YuntiUI nitification',
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
        <Alert
          description="此 demo 演示的是已废弃的静态 API。请改用 App.useApp().notification 来获取绑定 ConfigProvider 上下文的实例。"
          showIcon
          style={{ marginBottom: 12 }}
          title="Deprecated"
          type="warning"
        />
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
