import React from 'react';

import { useStyles } from './style';

export interface ProCardProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
  hoverable?: boolean;
}
export const ProCard: React.FC<ProCardProps> = ({
  className,
  bordered = false,
  hoverable = true,
  children,
  ...otherProps
}) => {
  const { cx, styles } = useStyles();

  return (
    <div
      className={cx(
        styles.root,
        bordered && styles.bordered,
        hoverable && styles.hoverable,
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
