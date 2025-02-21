import { Form, type FormItemProps } from 'antd';
import React, { memo, useEffect, useState } from 'react';

import { FormCollapseListOperation } from './hooks';
import { type ListFieldValue } from './utils';

export interface FormCollapseListFieldsWatcherProps
  extends Pick<FormCollapseListOperation, 'update'> {
  name: FormItemProps['name'];
}
export const FormCollapseListFieldsWatcher: React.FC<FormCollapseListFieldsWatcherProps> = memo(
  ({ name, update }) => {
    const rows = Form.useWatch<ListFieldValue[]>(name);
    const [preRowsCount, setPreRowsCount] = useState(0);
    useEffect(() => {
      if (rows?.length !== preRowsCount) {
        update();
        setPreRowsCount(rows?.length);
      }
    }, [preRowsCount, rows, update]);

    return null;
  }
);
