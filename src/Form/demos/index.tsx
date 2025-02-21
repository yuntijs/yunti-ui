import { Divider, Flex, Form, Highlighter, Input } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';
import { useState } from 'react';

const FormCollapseList = Form.CollapseList;
interface FieldType {
  outputs?: {
    key: string;
    value: string;
    test: string;
  }[];
}

export default () => {
  const outputs = [
    {
      key: 'class',
      value: 'claas1',
      test: 'test1',
    },
    {
      key: 'namespace',
      value: 'ns1',
      test: 'test2',
    },
  ];

  const [values, setValues] = useState<FieldType>({ outputs });
  const [form] = Form.useForm();

  return (
    <Flex gap={6} style={{ width: '100%' }} vertical>
      <Form form={form} onValuesChange={(_, values) => setValues(values)} variant="filled">
        <FormCollapseList
          columns={[
            {
              dependencies: field => [['outputs', field.name, 'value']],
              label: '变量名',
              name: 'key',
              render: () => <Input maxLength={30} placeholder="输入变量名" showCount />,
              rules: (_field, index) => [
                { whitespace: true, required: true, message: '请输入变量名' },
                ({ getFieldValue }) => ({
                  validator(_rule, value) {
                    const vars: FieldType['outputs'] = getFieldValue('outputs');
                    if (vars?.some((v, vIndex) => vIndex !== index && v.key === value)) {
                      return Promise.reject(new Error('变量名不能重复'));
                    }
                    return Promise.resolve();
                  },
                }),
              ],
            },
            {
              label: '变量值',
              name: 'value',
              render: () => <Input placeholder="输入变量值" style={{ width: 360 }} />,
              rules: [{ required: true, message: '请输入变量值' }],
            },
            {
              label: 'test',
              name: 'test',
            },
            {
              label: 'test2',
              name: 'test2',
              render: () => '无需设置',
            },
          ]}
          icon={VariableIcon}
          initialValue={outputs}
          name="outputs"
          title="输出变量"
          variant="block"
        />
      </Form>
      <Divider
        content="Form value 值"
        dashed
        mode="expanded"
        orientation="left"
        orientationMargin={0}
      >
        <Highlighter language="json">{JSON.stringify(values, null, 2)}</Highlighter>
      </Divider>
    </Flex>
  );
};
