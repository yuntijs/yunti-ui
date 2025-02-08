import { Form, type FormListOperation } from 'antd';
import type { StoreValue } from 'antd/es/form/interface';
import React, { useCallback, useState } from 'react';

import { FIELD_KEY_PATH, ListFieldValue, getFieldPath, toRowKey } from './utils';

export const useFormCollapseListHooks = (name: string) => {
  const form = Form.useFormInstance();
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly React.Key[]>([]);

  const fieldsToDataSource = useCallback((fields: [ListFieldValue]) => {
    const allExpandRowKeys: React.Key[] = [];
    const _setFieldPath = (field: ListFieldValue, index: number, path: number[]) => {
      if (!field) {
        // eslint-disable-next-line no-param-reassign
        field = {
          [FIELD_KEY_PATH]: [],
        };
      }
      field[FIELD_KEY_PATH] = [...path, index];
      if (field.children && Array.isArray(field.children)) {
        allExpandRowKeys.push(toRowKey(field[FIELD_KEY_PATH]));
        field.children = field.children.map((item, index) =>
          _setFieldPath(item, index, field[FIELD_KEY_PATH]!)
        );
      }
      return field;
    };
    return {
      dataSource: fields?.map((field, index) => _setFieldPath(field, index, [])) || [],
      allExpandRowKeys,
    };
  }, []);

  const getFormListOperation = useCallback(
    (operation: FormListOperation, record: ListFieldValue): FormListOperation => {
      const fieldKeyPath = record[FIELD_KEY_PATH];
      return {
        add: (defaultValue?: StoreValue, insertIndex?: number) => {
          const fieldPath = getFieldPath(fieldKeyPath);
          const fieldName = [name, ...fieldPath, 'children'];
          const fieldValue: any[] = form.getFieldValue(fieldName) || [];
          fieldValue.push(undefined);
          fieldValue.splice(insertIndex ?? fieldValue.length, defaultValue);
          form.setFieldValue(fieldName, fieldValue);
          setExpandedRowKeys([...new Set([...expandedRowKeys, toRowKey(fieldKeyPath)])]);
        },
        remove: (index: number | number[]) => {
          if (fieldKeyPath.length <= 1) {
            return operation.remove(index);
          }
          const fieldName = [name, ...getFieldPath(fieldKeyPath).slice(0, -1)];
          const fieldValue: any[] = form.getFieldValue(fieldName) || [];
          const indexs: number[] = [];
          if (Array.isArray(index)) {
            indexs.push(...index);
          } else {
            indexs.push(index);
          }
          const newFieldValue = fieldValue.filter((_, _index) => !indexs.includes(_index));
          form.setFieldValue(fieldName, newFieldValue.length > 0 ? newFieldValue : undefined);
        },
        move: (from: number, to: number) => {
          if (fieldKeyPath.length <= 1) {
            return operation.move(from, to);
          }
          const fieldName = [name, ...getFieldPath(fieldKeyPath).slice(0, -1)];
          const fieldValue: any[] = form.getFieldValue(fieldName) || [];
          // 检查索引是否有效
          if (from < 0 || to < 0 || from >= fieldValue.length || to >= fieldValue.length) {
            console.warn(new Error('索引超出数组范围'));
            return;
          }
          // 使用数组解构交换两个元素
          [fieldValue[from], fieldValue[to]] = [fieldValue[to], fieldValue[from]];
          form.setFieldValue(fieldName, fieldValue);
        },
      };
    },
    [expandedRowKeys, form, name]
  );

  return {
    expandedRowKeys,
    setExpandedRowKeys,
    fieldsToDataSource,
    getFormListOperation,
  };
};
