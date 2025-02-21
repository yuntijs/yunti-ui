import {
  Descriptions as AntdDescriptions,
  type DescriptionsProps as AntdDescriptionsProps,
} from 'antd';
import React from 'react';

import { useStyles } from './style';

export interface CustomDescriptionsProps {
  borderedBottom?: boolean;
  borderedBottomDashed?: boolean;
  borderedTop?: boolean;
  borderedTopDashed?: boolean;
}
export interface DescriptionsProps extends AntdDescriptionsProps, CustomDescriptionsProps {}

export const Descriptions: React.FC<DescriptionsProps> & {
  Item: typeof AntdDescriptions.Item;
} = props => {
  const {
    className,
    borderedBottom,
    borderedBottomDashed,
    borderedTop,
    borderedTopDashed,
    ...otherProps
  } = props;
  const { styles, cx } = useStyles({
    borderedBottom,
    borderedBottomDashed,
    borderedTop,
    borderedTopDashed,
    size: otherProps.size,
  });
  return <AntdDescriptions {...otherProps} className={cx(styles.custom, className)} />;
};

export default Descriptions;
Descriptions.Item = AntdDescriptions.Item;
