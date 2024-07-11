---
nav: Components
group: Data Display
title: ProCard
---

Pro Card, include Header, Content and Descriptions.

## Usage

```jsx | pure
import { ReadOutlined } from '@ant-design/icons';
import { Badge, ProCard, Typography } from '@yuntijs/ui';

const { Time } = Typography;

const ProCardDemo = () => {
  return (
    <ProCard style={{ width: 520 }}>
      <ProCard.Header
        title="我是标题"
        description="我是描述"
        extra={{ menu: { items: [{ key: 'edit', label: '编辑' }] } }}
        icon={{
          icon: <ReadOutlined />,
        }}
      />
      <ProCard.Content>
        <ProCard.Descriptions
          items={[
            {
              key: 'status',
              label: '状态',
              children: <Badge status="success" text="已发布" />,
            },
            {
              key: 'publishTime',
              label: '发布时间',
              children: <Time relativeTime={false} time={new Date().toISOString()} />,
            },
          ]}
        />
      </ProCard.Content>
    </ProCard>
  );
};

export default ProCardDemo;
```

### Demo

<code src="./demos/index.tsx"></code>

### Bordered demo

<code src="./demos/Bordered.tsx"></code>

## API

待补充

<!-- <API id="Page"></API> -->
