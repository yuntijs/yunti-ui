import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
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
