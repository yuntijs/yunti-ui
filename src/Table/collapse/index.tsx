import { Table } from 'antd';
import type { TableProps } from 'antd';
import type { AnyObject } from 'antd/es/_util/type';
import React from 'react';

import { CollapseGroup, CollapseGroupProps } from '../../CollapseGroup';
import { useStyles } from './style';

export interface CollapseTableProps<RecordType = AnyObject>
  extends Omit<TableProps<RecordType>, 'title'>,
    Pick<CollapseGroupProps, 'icon' | 'title' | 'variant' | 'defaultActive' | 'extra'> {
  rootStyle?: React.CSSProperties;
  rootClassName?: string;
}

export const CollapseTable = <RecordType extends AnyObject = AnyObject>({
  rootStyle,
  rootClassName,
  icon,
  title,
  variant,
  defaultActive,
  extra,
  className,
  ...tableProps
}: CollapseTableProps<RecordType>) => {
  const { cx, styles } = useStyles();

  return (
    <CollapseGroup
      className={rootClassName}
      style={rootStyle}
      {...{ icon, title, variant, defaultActive, extra }}
    >
      <Table<RecordType>
        className={cx(styles.table, className)}
        pagination={false}
        rowHoverable={false}
        size="small"
        {...tableProps}
      />
    </CollapseGroup>
  );
};
