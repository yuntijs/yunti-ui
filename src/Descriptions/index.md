---
nav: Components
group: Data Display
title: Descriptions
description: Display multiple read-only fields in a group.
---

## Usage

based on antd [Descriptions](https://ant.design/components/descriptions-cn/) component.

### Simple usage

```jsx | pure
import { Descriptions } from '@yuntijs/ui';

export default () => {
  return (
    <Descriptions
      title="YuntiUI"
      column={2}
      colon={false}
      styles={{
        label: {
          width: 120,
        },
      }}
      items={[
        {
          key: 'Themeable',
          label: 'Themeable',
          children: 'Customize default themes',
        },
        {
          key: 'Fast',
          label: 'Fast',
          children: 'voids unnecessary styles props',
        },
        {
          key: 'Light & Dark UI',
          label: 'Light & Dark UI',
          children: 'Automatic dark mode recognition',
        },
      ]}
    />
  );
};
```

<code src="./demos/index.tsx" center></code>

## Playground

<code src="./demos/Playground.tsx" nopadding></code>

## APIs

<API></API>
