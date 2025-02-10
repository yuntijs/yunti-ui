import { Form, type FormListOperation } from 'antd';
import type { StoreValue } from 'antd/es/form/interface';
import { cloneDeep } from 'lodash-es';
import React, { useCallback, useMemo, useState } from 'react';

import type { FormCollapseListColumn } from '.';
import { FIELD_KEY_PATH, FieldPath, ListFieldValue, toRowKey } from './utils';

export const useFormCollapseListHooks = (
  name: string,
  childrenColumnName: string,
  columns: FormCollapseListColumn[]
) => {
  const form = Form.useFormInstance();
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly React.Key[]>([]);

  const firstColumnFormItemName = useMemo(
    () => columns.find(item => !!item.name && !item.noStyle),
    [columns]
  )?.name;

  const fieldsToDataSource = useCallback(
    (fields: [ListFieldValue]) => {
      if (!name) {
        return {
          dataSource: [],
          allExpandRowKeys: [],
        };
      }
      const allExpandRowKeys: React.Key[] = [];
      const _setFieldPath = (field: ListFieldValue, index: number, path: number[]) => {
        let item = cloneDeep(field);
        if (!item) {
          item = {
            [FIELD_KEY_PATH]: [],
          };
        }
        item[FIELD_KEY_PATH] = [...path, index];
        if (item[childrenColumnName] && Array.isArray(item[childrenColumnName])) {
          allExpandRowKeys.push(toRowKey(item[FIELD_KEY_PATH]));
          item[childrenColumnName] = (item[childrenColumnName] as ListFieldValue[]).map(
            (child, index) => _setFieldPath(child, index, item[FIELD_KEY_PATH]!)
          );
        }
        return item;
      };
      return {
        dataSource: fields?.map((field, index) => _setFieldPath(field, index, [])) || [],
        allExpandRowKeys,
      };
    },
    [childrenColumnName, name]
  );

  const getFieldPath = useCallback(
    (fieldKeyPath: number[], fieldName?: string) => {
      const fieldPath: FieldPath = [];
      for (const [index, key] of fieldKeyPath.entries()) {
        if (index === fieldKeyPath.length - 1) {
          fieldPath.push(key);
          if (fieldName) {
            fieldPath.push(fieldName);
          }
        } else {
          fieldPath.push(key, childrenColumnName);
        }
      }
      return fieldPath;
    },
    [childrenColumnName]
  );

  const getFormListOperation = useCallback(
    (operation: FormListOperation, record: ListFieldValue): FormListOperation => {
      const fieldKeyPath = record[FIELD_KEY_PATH];
      return {
        add: (defaultValue?: StoreValue, insertIndex?: number) => {
          const fieldPath = getFieldPath(fieldKeyPath);
          const fieldName = [name, ...fieldPath, childrenColumnName];
          const fieldValue: any[] = cloneDeep(form.getFieldValue(fieldName)) || [];
          const index = insertIndex ?? fieldValue.length;
          fieldValue.splice(index, 0, defaultValue);
          form.setFieldValue(fieldName, fieldValue);
          if (firstColumnFormItemName) {
            const fileNamePath = [...fieldName, index, firstColumnFormItemName];
            // Scroll and focus new item which is just added
            setTimeout(() => {
              form.focusField(fileNamePath);
            }, 200);
          }
          setExpandedRowKeys([...new Set([...expandedRowKeys, toRowKey(fieldKeyPath)])]);
        },
        remove: (index: number | number[]) => {
          if (fieldKeyPath.length <= 1) {
            return operation.remove(index);
          }
          const fieldName = [name, ...getFieldPath(fieldKeyPath).slice(0, -1)];
          const fieldValue: any[] = cloneDeep(form.getFieldValue(fieldName)) || [];
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
          const fieldValue: any[] = cloneDeep(form.getFieldValue(fieldName)) || [];
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
    [childrenColumnName, expandedRowKeys, firstColumnFormItemName, form, getFieldPath, name]
  );

  return {
    expandedRowKeys,
    setExpandedRowKeys,
    fieldsToDataSource,
    getFieldPath,
    getFormListOperation,
    // 首个表单输入列 (用于新增表达后 foucs 等)
    firstColumnFormItemName,
  };
};
