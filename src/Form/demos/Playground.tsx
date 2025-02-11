import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { FormCollapseList, FormCollapseListProps, Input } from '@yuntijs/ui';
import { Form, Select } from 'antd';
import { VariableIcon } from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const control: FormCollapseListProps | any = useControls(
    {
      name: 'outputs',
      title: '输出变量',
      fieldRemoveButton: true,
      readOnly: false,
      defaultActive: true,
      disabled: false,
      addOneFiledDefault: true,
      disableRemoveWhenOneField: true,
      maxFileds: 10,
      empty: '点击右上角 + 添加',
      variant: {
        options: ['default', 'block', 'ghost', 'pure'],
        value: 'default',
      },
      collapsible: true,
    },
    { store }
  );
  return (
    <StoryBook levaStore={store} style={{ width: '100%' }}>
      <Form style={{ width: '100%', height: '100%' }}>
        <FormCollapseList
          columns={[
            {
              label: '变量名',
              name: 'key',
              render: () => <Input maxLength={30} placeholder="输入变量名" showCount />,
            },
            {
              label: '类型',
              name: 'type',
              width: 120,
              render: () => <Select options={[{ value: 'string' }, { value: 'number' }]} />,
            },
            {
              label: '变量值',
              name: 'value',
              render: () => <Input placeholder="输入变量值" />,
              rules: [{ required: true, message: '请输入变量值' }],
            },
          ]}
          icon={VariableIcon}
          {...control}
        />
      </Form>
    </StoryBook>
  );
};
