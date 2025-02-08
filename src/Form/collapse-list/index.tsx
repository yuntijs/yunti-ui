import { PlusOutlined } from '@ant-design/icons';
import { Icon } from '@lobehub/ui';
import { Button, Flex, Form, Table, Tooltip } from 'antd';
import type { FormItemProps, FormListOperation, TableColumnProps } from 'antd';
import type { FormListProps as AntFormListProps } from 'antd/es/form';
import { Trash2 } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import { CollapseGroup, CollapseGroupProps } from '../../CollapseGroup';
import { useFormCollapseListHooks } from './hooks';
import { useStyles } from './style';
import { FIELD_KEY_PATH, FieldPath, ListFieldValue, getFieldPath, toRowKey } from './utils';

export interface FormCollapseListColumnItem
  extends Omit<
    FormItemProps,
    'dependencies' | 'rules' | 'tooltip' | 'labelAlign' | 'labelCol' | 'colon' | 'children'
  > {
  render?: (
    fieldName: number,
    index: number,
    operation: FormListOperation,
    fieldPath: FieldPath
  ) => React.ReactElement;
  rules?:
    | FormItemProps['rules']
    | ((fieldPath: FieldPath, index: number) => FormItemProps['rules']);
  dependencies?:
    | FormItemProps['dependencies']
    | ((fieldPath: FieldPath, index: number) => FormItemProps['dependencies']);
}

export interface FormListOperationAddParams {
  defaultValue?: any;
  insertIndex?: number;
}
export interface FormCollapseListColumn
  extends FormCollapseListColumnItem,
    Pick<
      TableColumnProps<any>,
      'align' | 'ellipsis' | 'fixed' | 'responsive' | 'shouldCellUpdate' | 'width'
    > {
  //
}
export interface FormCollapseListProps
  extends Omit<AntFormListProps, 'name' | 'children'>,
    Pick<
      CollapseGroupProps,
      | 'className'
      | 'extra'
      | 'expandIcon'
      | 'icon'
      | 'title'
      | 'variant'
      | 'defaultActive'
      | 'style'
    > {
  /** 字段名 */
  name?: FormItemProps['name'];
  /** 表单列为空时展示的空内容 */
  empty?: React.ReactNode;
  /** 表单列配置 */
  columns?: FormCollapseListColumn[];
  /** 新增表单项的参数 */
  addParams?: FormListOperationAddParams | (() => FormListOperationAddParams);
  /** 是否禁用 */
  disabled?: boolean;
  /** 只读模式 */
  readOnly?: boolean;
  /** 默认添加一个 field */
  addOneFieldDefault?: boolean;
  /** 当只有一个 field 时禁用移除 */
  disableRemoveWhenOneField?: boolean;
  /** 限制最大 fields 数量 */
  maxFileds?: number;
  /** 删除时调用，返回 false 时取消删除 */
  onRemove?: (values: any) => boolean | void | Promise<boolean | void>;
  /** 是否启用表单项删除按钮，默认为启用 */
  fieldRemoveButton?: boolean;
  /** [树形数据] 初始时，是否展开所有行 */
  defaultExpandAllRows?: boolean;
  /** [树形数据] 每层缩进的宽度，以 px 为单位, 默认为 15 */
  indentSize?: number;
  /** 表格行是否开启 hover 交互, 默认为启用 */
  rowHoverable?: boolean;
}

export const FormCollapseList: React.FC<FormCollapseListProps> = ({
  extra,
  expandIcon,
  icon,
  title,
  variant,
  defaultActive,
  empty = '点击右上角 + 添加 ',
  columns = [],
  disabled,
  readOnly,
  addOneFieldDefault,
  disableRemoveWhenOneField,
  maxFileds,
  name,
  addParams,
  className,
  onRemove,
  fieldRemoveButton = true,
  style,
  defaultExpandAllRows,
  indentSize,
  rowHoverable = true,
  ...formListProps
}) => {
  const { cx, styles } = useStyles();
  const listAdd = useRef<FormListOperation['add']>();
  const form = Form.useFormInstance();
  const fieldsWatch = Form.useWatch<[ListFieldValue]>(name, form);
  const { expandedRowKeys, setExpandedRowKeys, fieldsToDataSource, getFormListOperation } =
    useFormCollapseListHooks(name);
  const { dataSource } = useMemo(
    () => fieldsToDataSource(fieldsWatch),
    [fieldsWatch, fieldsToDataSource]
  );

  useEffect(() => {
    const fields = form.getFieldValue(name);
    const { allExpandRowKeys } = fieldsToDataSource(fields);
    if (defaultExpandAllRows) {
      setExpandedRowKeys(allExpandRowKeys);
    }
  }, [defaultExpandAllRows, fieldsToDataSource, form, name, setExpandedRowKeys]);

  const getAddParams = useCallback<() => Parameters<FormListOperation['add']>>(() => {
    if (!addParams) {
      return [];
    }
    const params = typeof addParams === 'function' ? addParams() : addParams;
    return [params.defaultValue, params.insertIndex];
  }, [addParams]);

  const handleOnRemove = useCallback(
    (fieldName: number) => {
      const values = form.getFieldValue([name, fieldName]);
      return onRemove?.(values);
    },
    [form, name, onRemove]
  );

  useEffect(() => {
    if (
      addOneFieldDefault &&
      (!form?.getFieldValue(name) || form?.getFieldValue(name)?.length === 0)
    ) {
      listAdd.current?.(...getAddParams());
    }
  }, [addOneFieldDefault, getAddParams, form, name]);

  return (
    <CollapseGroup
      extra={
        extra === undefined
          ? name &&
            !readOnly && (
              <Tooltip title={maxFileds && `最多添加 ${maxFileds} 项`}>
                <Button
                  disabled={disabled || !!(maxFileds && fieldsWatch?.length === maxFileds)}
                  icon={<PlusOutlined />}
                  onClick={e => {
                    e.stopPropagation();
                    listAdd.current?.(...getAddParams());
                  }}
                  size="small"
                  type="text"
                />
              </Tooltip>
            )
          : extra
      }
      {...{ className, expandIcon, icon, title, variant, defaultActive, style }}
    >
      {name ? (
        <Form.List name={name} {...formListProps}>
          {(fields, operation) => {
            const { add, remove } = operation;
            listAdd.current = add;

            // @Todo: support sort
            return (
              <Table<ListFieldValue>
                className={styles.list}
                columns={
                  [
                    ...columns.map(
                      ({
                        label,
                        name: itemName,
                        render: fieldRender,
                        dependencies,
                        rules,
                        align,
                        ellipsis,
                        fixed,
                        responsive,
                        shouldCellUpdate,
                        width,
                        className,
                        ...itemProps
                      }) => ({
                        title: label,
                        dataIndex: itemName,
                        align,
                        ellipsis,
                        fixed,
                        responsive,
                        shouldCellUpdate,
                        width,
                        render: (_text: string, record: ListFieldValue, index: number) => {
                          const field = fields[index] || {};
                          const fieldName = field.name;
                          const fieldKeyPath = record[FIELD_KEY_PATH];
                          const fieldPath = getFieldPath(fieldKeyPath).slice(0, -1);
                          const { key, ...restField } = field;
                          const children = fieldRender?.(
                            fieldName ?? fieldKeyPath.at(-1),
                            index,
                            getFormListOperation(operation, record),
                            fieldPath
                          );
                          if (!children && !itemProps.noStyle) {
                            return (
                              <Flex align="center" className={cx(styles.noFormItem, className)}>
                                无需设置
                              </Flex>
                            );
                          }
                          if (!itemName) {
                            return (
                              <Flex align="center" className={cx(styles.noFormItem, className)}>
                                {children}
                              </Flex>
                            );
                          }
                          const chidrenProps: Record<string, any> = {
                            readOnly,
                            disabled,
                          };
                          if (readOnly === true) {
                            chidrenProps.showCount = false;
                            chidrenProps.variant = 'borderless';
                            chidrenProps.placeholder = '-';
                          }
                          return (
                            <Form.Item
                              className={className}
                              key={key}
                              {...restField}
                              dependencies={
                                typeof dependencies === 'function'
                                  ? dependencies(fieldPath, index)
                                  : dependencies
                              }
                              name={getFieldPath(fieldKeyPath, itemName)}
                              // label={getFieldPath(fieldKeyPath, itemName).join('/')}
                              rules={typeof rules === 'function' ? rules(fieldPath, index) : rules}
                              {...itemProps}
                            >
                              {children && React.cloneElement(children, chidrenProps)}
                            </Form.Item>
                          );
                        },
                      })
                    ),
                    !readOnly &&
                      fieldRemoveButton !== false && {
                        title: '',
                        dataIndex: 'del',
                        render: (_text: string, _record: any, index: number) => {
                          const field = fields[index];
                          if (!field) {
                            return;
                          }
                          const { name: fieldName } = field;
                          return (
                            <Form.Item>
                              <Button
                                disabled={
                                  disabled || (disableRemoveWhenOneField && fields.length === 1)
                                }
                                icon={<Icon icon={Trash2} />}
                                onClick={async () => {
                                  const isRemove = await handleOnRemove(fieldName);
                                  if (isRemove !== false) {
                                    remove(fieldName);
                                  }
                                }}
                                type="text"
                              />
                            </Form.Item>
                          );
                        },
                      },
                  ].filter(c => !!c) as TableColumnProps<any>[]
                }
                dataSource={dataSource}
                expandable={{
                  expandedRowKeys,
                  columnTitle: <h1>columnTitle</h1>,
                  onExpandedRowsChange: expandedKeys => {
                    setExpandedRowKeys(expandedKeys);
                  },
                }}
                indentSize={indentSize}
                locale={{ emptyText: empty }}
                pagination={false}
                rowHoverable={rowHoverable}
                rowKey={row => toRowKey(row[FIELD_KEY_PATH])}
                size="small"
              />
            );
          }}
        </Form.List>
      ) : (
        <div className={styles.empty}>{empty}</div>
      )}
    </CollapseGroup>
  );
};
