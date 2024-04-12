import { Radio, Space } from '@yuntijs/ui';

export default () => {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  return (
    <Space direction="vertical">
      <Radio.Group defaultValue={options[0].value} options={options} />
      <Radio.Group defaultValue={options[0].value} optionType="button" options={options} />
      <Radio.Group
        buttonStyle="solid"
        defaultValue={options[0].value}
        optionType="button"
        options={options}
      />
    </Space>
  );
};
