import { Button, Dropdown, Space } from 'antd';
import type { ButtonProps } from 'antd';
import type { ItemType } from 'antd/es/menu/interface';
import React from 'react';

export type ButtonType = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: ButtonProps['type'];
};

export type ButtonItem = ButtonType | ItemType;

export interface HeaderButtonGroupProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'> {
  onClick?: (
    key: string,
    e: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>
  ) => void;
  items?: ButtonItem[];
}

export const HeaderButtonGroup: React.FC<HeaderButtonGroupProps> = props => {
  const { items = [], onClick = () => {}, ...otherProps } = props;

  if (items.length <= 2) {
    return (
      <Space align="end" size={12} {...otherProps}>
        {(items as ButtonType[]).map(({ key, label, ...btnProps }) => (
          <Button key={key} onClick={e => onClick(key!, e)} {...btnProps}>
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
      {...otherProps}
    >
      {firstLabel}
    </Dropdown.Button>
  );
};
