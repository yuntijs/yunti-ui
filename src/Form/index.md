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

## Playground

### `Form.CollapseList`

<code src="./demos/Playground.tsx" center></code>

## APIs

### `Form`

see <https://ant.design/components/form#api>

### `Form.CollapseList`

<API id="FormCollapseList"></API>
