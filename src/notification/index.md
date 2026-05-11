---
nav: Components
group: Feedback
title: Notification
description: Prompt notification message globally.
---

:::warning{title=Deprecated}
The `notification` export from `@yuntijs/ui` is **deprecated** and will be removed in a future major version.

- antd v6 已经内置支持 description 富内容、堆叠展示等能力，原先封装的功能均已不再必要。
- 静态方法（`notification.open`、`notification.success` 等）无法获取 `ConfigProvider` 的上下文（主题、locale、prefixCls 等），导致样式与配置不一致。

请改用 `App.useApp().notification`，它绑定了外层 `<App />` 的上下文。

```tsx | pure
import { App, Button } from '@yuntijs/ui';

const MyComponent = () => {
  const { notification } = App.useApp();
  return (
    <Button
      onClick={() =>
        notification.success({
          message: 'YuntiUI notification',
          description: 'Prompt notification message globally.',
        })
      }
    >
      Notify
    </Button>
  );
};

export default () => (
  <App>
    <MyComponent />
  </App>
);
```

The same migration applies to `message` and `Modal.<method>` (`Modal.info`, `Modal.confirm`, …) — use `App.useApp().message` and `App.useApp().modal` instead.
:::

## Usage

based on antd [Notification](https://ant.design/components/notification-cn/) component.

### Simple usage (deprecated)

**Note: Pages that use notification need to be wrapped by the app component, otherwise the notification style may be problematic**

```jsx | pure
import { App, Button, notification } from '@yuntijs/ui';

export default () => {
  return (
    <App>
      <Button
        onClick={() => {
          notification.warnings({
            title: 'YuntiUI nitification',
            description: 'Prompt notification message globally.',
            errors: [
              {
                name: 'YuntiUI',
                message:
                  'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
              },
            ],
          });
        }}
      >
        Open
      </Button>
    </App>
  );
};
```

<code src="./demos/index.tsx" center></code>

## Playground

<code src="./demos/Playground.tsx" nopadding></code>

## APIs

<API></API>
