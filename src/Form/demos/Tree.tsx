import { DeleteOutlined, FileDoneOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Divider,
  Flex,
  Form,
  Input,
  JsonViewer,
  Popover,
  Space,
  Tooltip,
} from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';
import { useState } from 'react';

import { useStyles } from './style';

const FormCollapseList = Form.CollapseList;
interface FieldType {
  outputs?: {
    name: string;
    value: string;
    items?: FieldType['outputs'];
  }[];
}

const initialValues: FieldType = {
  outputs: [
    {
      name: 'class',
      value: 'claas1',
      items: [
        {
          name: 'c1',
          value: 'c1',
          items: [
            {
              name: 'c11',
              value: 'c11',
            },
          ],
        },
      ],
    },
    {
      name: 'namespace',
      value: 'ns1',
    },
  ],
};

export default () => {
  const { styles } = useStyles();
  const [form] = Form.useForm();

  const [values, setValues] = useState<FieldType>(initialValues);
  const outputs = Form.useWatch<[FieldType]>('outputs', form);

  return (
    <Flex gap={6} style={{ width: '100%' }} vertical>
      <Form
        form={form}
        id="form11"
        initialValues={initialValues}
        onValuesChange={(_, values) => setValues(values)}
        variant="filled"
      >
        <FormCollapseList
          childrenColumnName="items"
          columns={[
            {
              dependencies: parentFieldPath => [['outputs', ...parentFieldPath, 'value']],
              label: '变量名',
              name: 'name',
              render: () => <Input maxLength={30} placeholder="输入变量名" showCount />,
              rules: (parentFieldPath, index) => [
                { whitespace: true, required: true, message: '请输入变量名' },
                ({ getFieldValue }) => ({
                  validator(_rule, value) {
                    const vars: FieldType['outputs'] = getFieldValue([
                      'outputs',
                      ...parentFieldPath,
                    ]);
                    if (vars?.some((v, vIndex) => vIndex !== index && v?.name === value)) {
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
              render: () => <Input placeholder="输入变量值" />,
              rules: [{ required: true, message: '请输入变量值' }],
            },
            {
              className: styles.operation,
              render: (fieldName, _index, operation, fieldPath) => {
                return (
                  <Space size="small">
                    <Tooltip title="添加叶子节点">
                      <Button
                        icon={<PlusOutlined />}
                        onClick={() => {
                          operation.add({ name: 'key' });
                        }}
                        type="text"
                      />
                    </Tooltip>
                    <Popover
                      content={
                        <Form
                          onFieldsChange={changedFields => {
                            for (const field of changedFields) {
                              form.setFieldValue(field.name, field.value);
                            }
                          }}
                        >
                          <Form.Item name={['outputs', ...fieldPath, 'desc']}>
                            <Input.TextArea placeholder="请输入描述" />
                          </Form.Item>
                        </Form>
                      }
                      title="描述"
                      trigger="click"
                    >
                      <Button icon={<FileDoneOutlined />} type="text" />
                    </Popover>
                    <Button
                      disabled={outputs.length === 1 && fieldPath.lengh === 1}
                      icon={<DeleteOutlined />}
                      onClick={() => operation.remove(fieldName)}
                      type="text"
                    />
                  </Space>
                );
              },
            },
          ]}
          defaultExpandAllRows
          fieldRemoveButton={false}
          icon={VariableIcon}
          indentSize={16}
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
        <JsonViewer collapsed={false} src={values} />
      </Divider>
    </Flex>
  );
};
