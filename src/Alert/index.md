---
nav: Components
group: Feedback
title: Alert
description: Display warning messages that require attention.
---

## Usage

based on antd [Alert](https://ant.design/components/alert-cn/) component.

### Simple usage

```jsx | pure
import { Alert } from '@yuntijs/ui';

export default () => {
  return (
    <Alert
      message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution."
      showIcon
      type="info"
    />
  );
};
```

<code src="./demos/index.tsx" center></code>

## Playground

<code src="./demos/Playground.tsx" nopadding></code>

## APIs

<API></API>
