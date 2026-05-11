---
nav: Components
group: Feedback
title: Modal
description: Display a modal dialog box, providing a title, content area, and action buttons.
---

## Usage

based on antd [Modal](https://ant.design/components/modal-cn/) component.

### Simple usage

```jsx | pureimport { Button, Modal } from '@yuntijs/ui';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState < boolean > false;
  const [confirmLoading, setConfirmLoading] = useState < boolean > false;
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="YuntiUI Modal"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
        onOk={() => {
          setConfirmLoading(true);
        }}
      >
        The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully
        compatible with Antd components, and it is recommended to use antd-style as the default
        css-in-js styling solution.
      </Modal>
    </>
  );
};
```

<code src="./demos/index.tsx" center></code>

### Modal method usage

:::warning{title=Deprecated static methods}
`Modal.info`、`Modal.success`、`Modal.error`、`Modal.warning`、`Modal.warn`、`Modal.confirm`、`Modal.destroyAll`、`Modal.config` 等静态方法已废弃，它们无法获取 `ConfigProvider` 的上下文（主题、locale、prefixCls 等）。

请改用 `App.useApp().modal`，下面的 demo 已切换到该用法。
:::

<code src="./demos/Method.tsx" center></code>

## Playground

<code src="./demos/Playground.tsx" nopadding></code>

## APIs

<API></API>
