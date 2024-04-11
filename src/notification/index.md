---
nav: Components
group: Feedback
title: Notification
description: Prompt notification message globally.
---

## Usage

based on antd [Notification](https://ant.design/components/notification-cn/) component.

### Simple usage

**Note： Pages that use notification need to be wrapped by the app component, otherwise the notification style may be problematic**

```jsx | pure
import { App, Button, notification } from '@yuntijs/ui';

export default () => {
  return (
    <App>
      <Button
        onClick={() => {
          notification.warnings({
            message: 'YuntiUI nitification',
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
