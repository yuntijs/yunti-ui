/* eslint-disable no-console */
import { ButtonGroup, ButtonGroupItem } from '@yuntijs/ui';

const ButtonGroupMoreItemsDemo = () => {
  const items: ButtonGroupItem[] = [
    {
      key: 'debug',
      label: '调试',
    },
    {
      key: 'import',
      label: '导入',
    },
    {
      key: 'export',
      label: '导出',
    },
    {
      type: 'divider',
    },
    {
      key: 'group',
      label: 'group',
      type: 'group',
      children: [
        {
          key: 'group-item-1',
          label: '1st menu item',
        },
        {
          key: 'group-item-2',
          label: '2nd menu item',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'edit',
      label: '编辑',
    },
    {
      key: 'delete',
      label: '删除',
      danger: true,
    },
    {
      type: 'divider',
    },
    {
      key: 'submenu',
      label: 'sub menu',
      children: [
        {
          key: 'submenu-item-1',
          label: '1st menu item',
        },
        {
          key: 'submenu-item-2',
          label: '2nd menu item',
        },
      ],
    },
  ];

  return <ButtonGroup items={items} onClick={(key, e) => console.log(key, e)} size="large" />;
};

export default ButtonGroupMoreItemsDemo;
