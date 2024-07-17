import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { FormCollapseList, FormCollapseListProps, Input } from '@yuntijs/ui';
import { Form } from 'antd';
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
              width: '40%',
              render: () => <Input maxLength={30} placeholder="输入变量名" showCount />,
            },
            {
              label: '变量值',
              name: 'value',
              width: '45%',
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
