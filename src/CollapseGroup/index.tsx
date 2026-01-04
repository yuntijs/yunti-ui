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
  variant = 'filled',
  collapsible = true,
  expandIcon = panelProps => (
    <ActionIcon icon={panelProps.isActive ? ChevronDown : ChevronRight} size="small" />
  ),
  ...otherProps
}) => {
  const { styles, cx } = useStyles({ collapsible });

  return (
    <FormGroup
      className={cx(styles.root, className)}
      collapsible={collapsible}
      expandIcon={expandIcon}
      variant={variant}
      {...otherProps}
    />
  );
};
