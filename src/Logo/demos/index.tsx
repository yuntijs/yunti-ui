import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Logo, LogoProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: LogoProps | any = useControls(
    {
      size: {
        max: 240,
        min: 16,
        step: 4,
        value: 64,
      },
      type: {
        options: ['img', 'text', 'combine'],
        value: 'img',
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Logo {...control} />
    </StoryBook>
  );
};
