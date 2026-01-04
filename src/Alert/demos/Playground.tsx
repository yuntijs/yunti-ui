import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
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
