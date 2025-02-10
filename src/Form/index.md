---
nav: Components
group: Data Entry
title: Form
---

## Usage

Based on [antd form](https://ant.design/components/form), add `Form.CollapseList` component.

### `Form`

see <https://ant.design/components/form> .

### `Form.CollapseList`

#### Simple usage

```tsx | pure
import { Form, Input } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

const FormCollapseList = Form.CollapseList;
interface FieldType {
  outputs?: {
    key: string;
    value: string;
  }[];
}

export default () => {
  const outputs = [
    {
      key: 'class',
      value: 'claas1',
    },
    {
      key: 'namespace',
      value: 'ns1',
    },
  ];
  return (
    <Form
      onValuesChange={(_, values) => console.log('values =>', values)}
      style={{ width: '100%' }}
      variant="filled"
    >
      <FormCollapseList
        columns={[
          {
            label: '变量名',
            name: 'key',
            render: () => <Input maxLength={30} placeholder="输入变量名" showCount />,
          },
          {
            label: '变量值',
            name: 'value',
            render: () => <Input placeholder="输入变量值" style={{ width: 360 }} />,
            rules: [{ required: true, message: '请输入变量值' }],
          },
        ]}
        icon={VariableIcon}
        initialValue={outputs}
        name="outputs"
        title="输出变量"
        variant="block"
      />
    </Form>
  );
};
```

<code src="./demos/index.tsx" center></code>

#### Tree input usage

支持树形展示和输入，当数据中有 `children` 字段时会自动展示为树形表格，，如果不需要或配置为其他字段可以用 `childrenColumnName` 进行配置。在 column render 属性中返回了 operation，与 `Form.List` 的 operation 用法一致。

可以通过设置 `indentSize` 以控制每一层的缩进宽度。

设置 `defaultExpandAllRows` 可控制初始时，是否展开所有行。

```tsx | pure
<FormCollapseList
  columns={[
    {
      render: (fieldName, index, operation, fieldPath) => {
        return (
          <Space size="small">
            <Button
              icon={<PlusOutlined />}
              // 添加叶子节点
              onClick={() => operation.add()}
              type="text"
            />
            <Button
              icon={<DeleteOutlined />}
              // 删除当前节点
              onClick={() => operation.remove(fieldName)}
              type="text"
            />
          </Space>
        );
      },
    },
  ]}
/>
```

<code src="./demos/Tree.tsx" center></code>

## Playground

### `Form.CollapseList`

<code src="./demos/Playground.tsx" center></code>

## APIs

### `Form`

see <https://ant.design/components/form#api>

### `Form.CollapseList`

<API id="FormCollapseList"></API>
