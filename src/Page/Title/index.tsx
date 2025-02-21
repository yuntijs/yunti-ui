import React from 'react';

import { useStyles } from './style';

export interface PageTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}
export const PageTitle: React.FC<PageTitleProps> = ({ className, ...otherProps }) => {
  const { cx, styles } = useStyles();
  return <h2 className={cx(styles.root, className)} {...otherProps} />;
};
