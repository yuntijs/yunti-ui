import { SelectCard } from '@yuntijs/ui';

const SelectCardDemo = () => {
  return (
    <SelectCard
      options={[
        {
          label: '加载适配器',
          description: '模型将使用微调后的额外插件来增强模型的能力',
          value: 'adapter',
        },
        { label: 'test1', description: 'test1 desc', value: 'test1' },
        { label: 'test2', description: 'test2 desc', value: 'test2' },
      ]}
    />
  );
};

export default SelectCardDemo;
