import { ActionIcon, FormGroupProps, Form as LobeForm } from '@lobehub/ui';
import { ChevronDown, ChevronRight } from 'lucide-react';
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
  collapsible,
  expandIcon = panelProps => (
    <ActionIcon
      icon={panelProps.isActive ? ChevronDown : ChevronRight}
      size={{ blockSize: 24, fontSize: 14, strokeWidth: 3 }}
    />
  ),
  ...otherProps
}) => {
  const { styles, cx } = useStyles({ collapsible });

  return (
    <FormGroup
      className={cx(styles.root, className)}
      collapsible={variant === 'pure' ? false : collapsible}
      expandIcon={expandIcon}
      variant={variant}
      {...otherProps}
    />
  );
};
