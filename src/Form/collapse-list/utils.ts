import type { NamePath } from 'antd/es/form/interface';

export const FIELD_KEY_PATH = '__YUNTI_FORM_COLLAPSE_LIST_FIELD_KEY_PATH';

export type ListFieldValue<K extends string = 'children'> = {
  /** 子数据 */
  [P in K]?: ListFieldValue[];
} & {
  [key: string]: any;
  [FIELD_KEY_PATH]: number[];
};
export type FieldPath = NamePath<any>;

export const toRowKey = (keyPath: number[]) => keyPath.join('-');
