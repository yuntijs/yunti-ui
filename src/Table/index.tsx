import { Table as AntdTable, TableProps, Tooltip } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import React, { useMemo } from 'react';

import { CollapseTable } from './collapse';

export * from './collapse';
export {
  type TableColumnGroupType,
  type TableColumnProps,
  type TableColumnsType,
  type TableColumnType,
  type TablePaginationConfig,
  type TableProps,
} from 'antd';

type YuntiTable = <RecordType extends AnyObject = AnyObject>(
  props: TableProps<RecordType>
) => React.ReactElement;

export const Table: YuntiTable & {
  displayName?: typeof AntdTable.displayName;
  SELECTION_COLUMN: typeof AntdTable.SELECTION_COLUMN;
  EXPAND_COLUMN: typeof AntdTable.EXPAND_COLUMN;
  SELECTION_ALL: typeof AntdTable.SELECTION_ALL;
  SELECTION_INVERT: typeof AntdTable.SELECTION_INVERT;
  SELECTION_NONE: typeof AntdTable.SELECTION_NONE;
  Column: typeof AntdTable.Column;
  ColumnGroup: typeof AntdTable.ColumnGroup;
  Summary: typeof AntdTable.Summary;
  Collapse: typeof CollapseTable;
} = <RecordType extends AnyObject = AnyObject>(props: TableProps<RecordType>) => {
  const { columns, ...otherProps } = props;

  const formatColumns = useMemo(() => {
    return columns?.map(item => {
      if (item.render) {
        return item;
      }

      if (
        (item.ellipsis && item.ellipsis !== true && item.ellipsis.showTitle) ||
        item.ellipsis === true
      ) {
        const tooltipProps = item.ellipsis === true ? {} : item.ellipsis;

        return {
          ...item,
          ellipsis: { showTitle: false },
          render: (text: any) =>
            text || text === 0 ? (
              <Tooltip {...tooltipProps} placement="topLeft" title={text}>
                {text}
              </Tooltip>
            ) : (
              '-'
            ),
        };
      }

      if (!item.render) {
        item.render = text => text ?? '-';
      }

      return item;
    });
  }, [columns]);

  return <AntdTable<RecordType> {...otherProps} columns={formatColumns} />;
};

Table.displayName = 'Table';
Table.SELECTION_COLUMN = AntdTable.SELECTION_COLUMN;
Table.EXPAND_COLUMN = AntdTable.EXPAND_COLUMN;
Table.SELECTION_ALL = AntdTable.SELECTION_ALL;
Table.SELECTION_INVERT = AntdTable.SELECTION_INVERT;
Table.SELECTION_NONE = AntdTable.SELECTION_NONE;
Table.Column = AntdTable.Column;
Table.ColumnGroup = AntdTable.ColumnGroup;
Table.Summary = AntdTable.Summary;
Table.Collapse = CollapseTable;

export default Table;
