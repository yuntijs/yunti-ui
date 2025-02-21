---
nav: Components
group: Navigation
title: Dropdown
description: A dropdown list.
---

## Usage

based on antd [Dropdown](https://ant.design/components/dropdown-cn/) component.

### Simple usage

```tsx | pure
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex, Typography } from '@yuntijs/ui';
import type { MenuProps } from '@yuntijs/ui';

const { Text } = Typography;

export default () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <a href="https://botnow.cn" rel="noopener noreferrer" target="_blank">
          Botnow
        </a>
      ),
      key: 'botnow',
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      menuExtra={{
        divider: true,
        content: (
          <Text style={{ fontSize: 12 }} type="secondary">
            已发布平台
          </Text>
        ),
      }}
    >
      <Button icon={<DownOutlined />} iconPosition="end">
        <Flex align="center" gap="small">
          <Avatar size={16} />
          <span>Botnow</span>
        </Flex>
      </Button>
    </Dropdown>
  );
};
```

<code src="./demos/index.tsx" center></code>

### use `dropdownRender`

<code src="./demos/DropdownRender.tsx" center></code>

## APIs

<API></API>
