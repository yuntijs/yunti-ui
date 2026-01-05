import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import type { ButtonProps } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { ItemType } from 'antd/es/menu/interface';
import React from 'react';

export type ButtonType = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
  ghost?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?:
    | boolean
    | {
        delay?: number;
      };
  type?: ButtonProps['type'];
};

export type ButtonGroupItem = ButtonType | ItemType;

export interface ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'> {
  onClick?: (
    key: string,
    e: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>
  ) => void;
  items?: ButtonGroupItem[];
  size?: SizeType;
  /**
   * @description 当按钮数量超过此值时，使用下拉菜单
   * @default 2
   */
  maxItems?: number;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const { items = [], onClick = () => {}, size, maxItems = 2, ...otherProps } = props;

  if (items.length <= maxItems) {
    return (
      <Space align="end" size={12} {...otherProps}>
        {(items as ButtonType[]).map(({ key, label, ...btnProps }) => (
          <Button key={key} onClick={e => onClick(key!, e)} size={size} {...btnProps}>
            {label}
          </Button>
        ))}
      </Space>
    );
  }
  const [firstButton, ...menuItems] = items;
  const { key: firstKey, label: firstLabel, ...btnProps } = firstButton as ButtonType;
  return (
    <Space.Compact {...otherProps}>
      <Button key={firstKey} onClick={e => onClick(firstKey!, e)} size={size} {...btnProps}>
        {firstLabel}
      </Button>
      <Dropdown
        menu={{
          onClick: ({ key, domEvent }) => onClick(key, domEvent),
          items: menuItems as ItemType[],
        }}
        placement="bottomRight"
        styles={{
          root: {
            minWidth: 100,
          },
        }}
      >
        <Button icon={<EllipsisOutlined />} size={size} />
      </Dropdown>
    </Space.Compact>
  );
};
