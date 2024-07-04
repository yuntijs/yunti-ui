---
nav: Components
group: Feedback
title: DragPanel
---

## Usage

Based on [antd drawer](https://ant.design/components/drawer) and [react-draggable](https://github.com/react-grid-layout/react-draggable).

```tsx | pure
import { DragPanel } from '@yuntijs/ui';

export default () => {
  return (
    <DragPanel open styles={{ wrapper: { height: 320 } }} title="单节点调试">
      我是 panel 的内容
    </DragPanel>
  );
};
```

<code src="./demos/index.tsx" center></code>

## APIs

<API></API>
