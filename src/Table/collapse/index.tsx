import { Table } from 'antd';
import type { TableProps } from 'antd';
import React from 'react';

import { CollapseGroup, CollapseGroupProps } from '../../CollapseGroup';
import { useStyles } from './style';

export interface CollapseTableProps
  extends Omit<TableProps, 'title'>,
    Pick<CollapseGroupProps, 'icon' | 'title' | 'variant' | 'defaultActive' | 'extra'> {
  rootStyle?: React.CSSProperties;
  rootClassName?: string;
}

export const CollapseTable: React.FC<CollapseTableProps> = ({
  rootStyle,
  rootClassName,
  icon,
  title,
  variant,
  defaultActive,
  extra,
  className,
  ...tableProps
}) => {
  const { cx, styles } = useStyles();

  return (
    <CollapseGroup
      className={rootClassName}
      style={rootStyle}
      {...{ icon, title, variant, defaultActive, extra }}
    >
      <Table
        className={cx(styles.table, className)}
        pagination={false}
        rowHoverable={false}
        size="small"
        {...tableProps}
      />
    </CollapseGroup>
  );
};
