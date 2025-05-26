import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Status, StatusProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const options: StatusProps | any = useControls(
    {
      status: {
        options: ['success', 'processing', 'error', 'default', 'warning'],
        value: 'processing',
      },
      text: '构建中',
      tooltip: '阶段：1/4',
      color: {
        options: [
          'blue',
          'purple',
          'cyan',
          'green',
          'magenta',
          'pink',
          'red',
          'orange',
          'yellow',
          'volcano',
          'geekblue',
          'lime',
          'gold',
        ],
        value: '',
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Status {...options} />
    </StoryBook>
  );
};
