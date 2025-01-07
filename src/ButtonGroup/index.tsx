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
}

export const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const { items = [], onClick = () => {}, size, ...otherProps } = props;

  if (items.length <= 2) {
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
    <Dropdown.Button
      key={firstKey}
      onClick={e => onClick(firstKey!, e)}
      {...btnProps}
      menu={{
        onClick: ({ key, domEvent }) => onClick(key, domEvent),
        items: menuItems as ItemType[],
      }}
      overlayStyle={{
        minWidth: 100,
      }}
      size={size}
      {...otherProps}
    >
      {firstLabel}
    </Dropdown.Button>
  );
};
