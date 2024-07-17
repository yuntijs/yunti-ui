import { PlusOutlined } from '@ant-design/icons';
import { Icon } from '@lobehub/ui';
import { Button, Flex, Form, Table, Tooltip } from 'antd';
import type { FormItemProps, FormListFieldData, FormListOperation, TableColumnProps } from 'antd';
import { FormListProps as AntFormListProps } from 'antd/es/form';
import { Trash2 } from 'lucide-react';
import React, { useCallback, useEffect, useRef } from 'react';

import { CollapseGroup, CollapseGroupProps } from '../../CollapseGroup';
import { useStyles } from './style';

export interface FormCollapseListColumnItem
  extends Omit<
    FormItemProps,
    'dependencies' | 'rules' | 'tooltip' | 'labelAlign' | 'labelCol' | 'colon' | 'children'
  > {
  render?: (field: FormListFieldData, index: number) => React.ReactElement;
  rules?:
    | FormItemProps['rules']
    | ((field: FormListFieldData, index: number) => FormItemProps['rules']);
  dependencies?:
    | FormItemProps['dependencies']
    | ((field: FormListFieldData, index: number) => FormItemProps['dependencies']);
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
  ...formListProps
}) => {
  const { styles } = useStyles();
  const listAdd = useRef<FormListOperation['add']>();
  const form = Form.useFormInstance();
  const fieldsWatch = Form.useWatch(name, form);

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
          {(fields, { add, remove }) => {
            listAdd.current = add;

            // @Todo: support sort
            return (
              <Table
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
                        render: (_text: string, _record: any, index: number) => {
                          const { key, name, ...restField } = fields[index];
                          const children = fieldRender?.(fields[index], index);
                          if (!children && !itemProps.noStyle) {
                            return (
                              <Flex align="center" className={styles.noFormItem}>
                                无需设置
                              </Flex>
                            );
                          }
                          if (!itemName) {
                            return (
                              <Flex align="center" className={styles.noFormItem}>
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
                              key={key}
                              {...restField}
                              dependencies={
                                typeof dependencies === 'function'
                                  ? dependencies(fields[index], index)
                                  : dependencies
                              }
                              name={[name, itemName]}
                              rules={
                                typeof rules === 'function' ? rules(fields[index], index) : rules
                              }
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
                          const { name: fieldName } = fields[index];
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
                dataSource={fields}
                locale={{ emptyText: empty }}
                pagination={false}
                rowHoverable={false}
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
