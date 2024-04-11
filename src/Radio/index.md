---
nav: Components
group: Data Entry
title: Radio
description: Used to select a single state from multiple options.
---

## Usage

based on antd [Radio](https://ant.design/components/radio-cn/) component.

### Simple usage

```jsx | pure
import { Radio } from '@yuntijs/ui';

export default () => {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  return <Radio.Group options={options} defaultValue={options[0].value} />;
};
```

<code src="./demos/index.tsx" center></code>

### Segmented usage

**Set the button style is similar to the Segmented component, Generally used for in-page navigation**

<code src="./demos/Segmented.tsx" center></code>

## Playground

<code src="./demos/Playground.tsx" nopadding></code>

## APIs

<API></API>
