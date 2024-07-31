---
nav: Components
group: Data Entry
title: Mentions
---

## Usage

Based on [lexical editor](https://lexical.dev/), inspired by [Dify](https://github.com/langgenius/dify) and [lexical-beautiful-mentions](https://github.com/sodenn/lexical-beautiful-mentions).

### Simple usage

```tsx | pure
import { Icon } from '@lobehub/ui';
import { Mentions } from '@yuntijs/ui';
import { Smile } from 'lucide-react';

export default () => {
  return (
    <Mentions
      autoSize={{
        minRows: 3,
      }}
      defaultValue="👋，I'm {{1.zhang}}"
      options={[{ label: 'zhang', value: '1.zhang', icon: <Icon icon={Smile} /> }]}
      triggers={['@']}
    />
  );
};
```

<code src="./demos/index.tsx" center></code>

### Single line

<code src="./demos/SingleLine.tsx" center></code>

### Playground

<code src="./demos/Playground.tsx" center></code>

## APIs

<API></API>
