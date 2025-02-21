import { Alert as AntdAlert, type AlertProps as AntdAlertProps } from 'antd';
import React from 'react';

import { useStyles } from './style';

export interface CustomAlertProps {
  /** border type of Alert */
  bordered?: 'dashed' | 'solid' | 'none';
}
export interface AlertProps extends AntdAlertProps, CustomAlertProps {}

type ComposedAlertProps = React.FC<AlertProps> & {
  ErrorBoundary: typeof AntdAlert.ErrorBoundary;
};

export const Alert: ComposedAlertProps = props => {
  const { bordered = 'dashed', className, ...otherProps } = props;

  const { styles, cx } = useStyles({ bordered });

  return <AntdAlert {...otherProps} className={cx(styles.custom, className)} />;
};
Alert.ErrorBoundary = AntdAlert.ErrorBoundary;

export default Alert;
