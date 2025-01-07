---
nav: Components
group: Navigation
title: ButtonGroup
---

按钮组，多于 2 个 item，会自动收缩到下拉菜单按钮中.

## Usage

```jsx | pure
import { StarOutlined } from '@ant-design/icons';
import { Button, Input, Page, Space } from '@yuntijs/ui';
import { Link } from 'react-router';

const { Breadcrumb, Header, Content } = Page;

const ButtonGroupPage = () => {
  return (
    <ButtonGroup
      items={[
        {
          key: 'edit',
          label: '编辑',
          type: 'primary',
        },
        {
          key: 'delete',
          label: '删除',
          danger: true,
        },
      ]}
      onClick={(key, e) => console.log(key, e)}
    />
  );
};
export default ButtonGroupPage;
```

### Button case

> `<=` 2 个 item，直接渲染为按钮

<code src="./demos/index.tsx"></code>

### Dropdown Button case

> `>` 2 个 item，渲染为下拉按钮

<code src="./demos/MoreItems.tsx"></code>

## API

待补充

<!-- <API id="Page"></API> -->
