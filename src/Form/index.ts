import { Form as AntForm } from 'antd';

import { FormCollapseList } from './collapse-list';

export * from './collapse-list';
export type {
  FormInstance,
  FormItemProps,
  FormListFieldData,
  FormListOperation,
  FormProps,
  FormRule,
} from 'antd';

export type FormType = typeof AntForm & {
  CollapseList: typeof FormCollapseList;
};

export const Form = AntForm as FormType;
Form.CollapseList = FormCollapseList;
