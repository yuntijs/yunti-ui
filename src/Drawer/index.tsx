import { Drawer as AntdDrawer, type DrawerProps as AntdDrawerProps } from 'antd';
import React from 'react';

import { useStyles } from './style';

interface CustomDrawerProps {
  /**
   * @description The placement of the close icon. When the value is auto and extra if present, the close button is left, and right if not.
   * @default 'right'
   */
  closeIconPlacement?: 'left' | 'right' | 'auto';
}

export interface DrawerProps extends AntdDrawerProps, CustomDrawerProps {}

export const Drawer: React.FC<DrawerProps> = props => {
  const { className, ...otherProps } = props;

  const { styles, cx } = useStyles(otherProps);

  return <AntdDrawer {...otherProps} className={cx(styles.custom, className)} />;
};

export default Drawer;
