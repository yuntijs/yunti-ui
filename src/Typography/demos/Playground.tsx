import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import type { TypographyProps } from '@yuntijs/ui';
import { Typography } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: TypographyProps | any = useControls(
    {
      time: '2024-04-15',
      format: 'YYYY-MM-DD hh:mm:ss',
      relativeTime: true,
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Typography.Time {...control} />
    </StoryBook>
  );
};
