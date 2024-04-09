---
nav: Components
group: Layout
title: Divider
description: A divider line separates different content.
---

## Usage

based on antd [Divider](https://ant.design/components/divider-cn/) component.

### Simple usage

```jsx | pure
import { Divider } from '@yuntijs/ui';

export default () => {
  return (
    <Divider
      mode="expanded"
      defaultOpen={true}
      content={
        <div>
          The YuntiUI components are inspired by LobeUI and developed based on Antd components,
          fully compatible with Antd components, and it is recommended to use antd-style as the
          default css-in-js styling solution.
        </div>
      }
      iconPlacement="left"
      orientation="left"
      orientationMargin={0}
      dashed={true}
    >
      YuntiUI
    </Divider>
  );
};
```

<code src="./demos/index.tsx" center></code>

## Playground

<code src="./demos/Playground.tsx" nopadding></code>

## APIs

<API></API>
