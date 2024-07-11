import type { FlexProps } from 'antd';
import { Flex } from 'antd';
import React from 'react';

import { useStyles } from './style';

export type ProCardContentProps = FlexProps;

export const ProCardContent: React.FC<ProCardContentProps> = props => {
  const { className, children, ...otherProps } = props;
  const { styles, cx } = useStyles();

  return (
    <Flex className={cx(styles.root, className)} gap={20} vertical {...otherProps}>
      {children}
    </Flex>
  );
};
