import React from 'react';

import Descriptions, { DescriptionsProps } from '@/Descriptions';

import { useStyles } from './style';

export type ProCardDescriptionsProps = Omit<DescriptionsProps, 'title' | 'bordered' | 'layout'>;
export const ProCardDescriptions: React.FC<ProCardDescriptionsProps> = ({
  className,
  colon = false,
  column = 2,
  size = 'small',
  ...otherProps
}) => {
  const { cx, styles } = useStyles();
  return (
    <Descriptions
      className={cx(styles.root, className)}
      {...{ colon, column, size }}
      {...otherProps}
    />
  );
};
