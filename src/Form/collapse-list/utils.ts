import type { NamePath } from 'antd/es/form/interface';

export const FIELD_KEY_PATH = '__YUNTI_FORM_COLLAPSE_LIST_FIELD_KEY_PATH';
export interface ListFieldValue {
  [key: string]: any;
  [FIELD_KEY_PATH]: number[];
  children?: ListFieldValue[];
}
export type FieldPath = NamePath<any>;

export const getFieldPath = (fieldKeyPath: number[], fieldName?: string) => {
  const fieldPath: FieldPath = [];
  for (const [index, key] of fieldKeyPath.entries()) {
    if (index === fieldKeyPath.length - 1) {
      fieldPath.push(key);
      if (fieldName) {
        fieldPath.push(fieldName);
      }
    } else {
      fieldPath.push(key, 'children');
    }
  }
  return fieldPath;
};

export const toRowKey = (keyPath: number[]) => keyPath.join('-');
