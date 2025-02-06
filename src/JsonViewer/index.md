---
nav: Components
group: Data Display
title: JsonViewer
---

## Usage

A JSON viewer, based on [react18-json-view](https://github.com/YYsuni/react18-json-view).

### Simple usage

```tsx | pure
import { JsonViewer } from '@yuntijs/ui';

export default () => {
  return (
    <JsonViewer
      src={{
        minRows: 3,
        string: 'string',
        number: 123456,
        boolean: false,
        obj: {
          k1: 123,
          k2: '123',
          k3: false,
          nested: {
            k4: 'nested',
          },
        },
        arr: ['string', 123456, false, null],
      }}
    />
  );
};
```

<code src="./demos/index.tsx"></code>

### Full Featured

<code src="./demos/LargeJson.tsx"></code>

## Playground

<code src="./demos/Playground.tsx"></code>

## APIs

<API></API>
