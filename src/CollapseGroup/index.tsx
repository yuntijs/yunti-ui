import { FormGroupProps, Form as LobeForm } from '@lobehub/ui';
import React from 'react';

import { useStyles } from './style';

const FormGroup = LobeForm.Group;

export type CollapseGroupProps = Omit<
  FormGroupProps,
  'items' | 'activeKey' | 'defaultActiveKey' | 'accordion' | 'expandIconPosition'
>;

export const CollapseGroup: React.FC<CollapseGroupProps> = ({
  className,
  variant,
  ...otherProps
}) => {
  const { styles, cx } = useStyles();

  return (
    <FormGroup
      className={cx(styles.root, className)}
      collapsible={variant !== 'pure'}
      variant={variant}
      {...otherProps}
    />
  );
};
