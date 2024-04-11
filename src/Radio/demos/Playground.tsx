import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Radio, RadioGroupProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  const control: RadioGroupProps | any = useControls(
    {
      defaultValue: options[0].value,
      disabled: false,
      optionType: {
        options: ['default', 'button'],
        value: 'default',
      },
      buttonStyle: {
        options: ['outline', 'solid'],
        value: 'outline',
      },
      segmented: false,
      size: {
        options: ['large', 'middle', 'small'],
        value: 'middle',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Radio.Group {...control} options={options} />
    </StoryBook>
  );
};
