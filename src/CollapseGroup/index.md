---
nav: Components
group: Data Display
title: CollapseGroup
---

## Usage

Based on [lobehub ui FormGroup](https://github.com/lobehub/lobe-ui/blob/master/src/Form/components/FormGroup.tsx).

```tsx | pure
import { CollapseGroup } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  return (
    <CollapseGroup icon={VariableIcon} title="输出变量">
      我是收起来的内容
    </CollapseGroup>
  );
};
```

<code src="./demos/index.tsx" center></code>

## Playground

<code src="./demos/Playground.tsx" center></code>

## APIs

<API></API>
