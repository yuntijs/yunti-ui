import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { SliderInput, SliderInputProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const controls: SliderInputProps | any = useControls(
    {
      min: 0.1,
      max: 16,
      step: 0.01,
      gutter: 16,
      defaultValue: 4,
      addonAfter: '核',
      addonBefore: '',
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <SliderInput inputCol={{ span: 7 }} style={{ width: '100%' }} {...controls} />
    </StoryBook>
  );
};
