---
nav: Components
group: Data Display
title: Card
description: A container for displaying information.
---

## Usage

based on antd [Card](https://ant.design/components/card-cn/) component.

### Simple usage

```jsx | pure
import { Card } from '@yuntijs/ui';

export default () => {
  return (
    <Card
      title= 'YuntiUI Card'
      bordered={true}
      loading={false}
      hoverable={true}
    >
    The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.
    </Children>
  );
};
```

<code src="./demos/index.tsx" center></code>

### Card.Meta usage

<code src="./demos/Meta.tsx" center></code>

### Card.Grid usage

<code src="./demos/Grid.tsx" center></code>

### Card.Tab usage

<code src="./demos/Tab.tsx" center></code>

## Playground

<code src="./demos/Playground.tsx" nopadding></code>

## APIs

<API></API>
