import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { CardProps } from '@yuntijs/ui';
import { Card } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: CardProps | any = useControls(
    {
      title: 'YuntiUI Card',
      extra: 'extra',
      bordered: true,
      loading: false,
      hoverable: true,
      children:
        'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
      type: {
        options: ['inner'],
        value: 'default',
      },
      size: {
        options: ['default', 'small'],
        value: 'default',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Card {...control} />
    </StoryBook>
  );
};
