import { Flex } from 'antd';
import React from 'react';

import { PageContext } from './PageContext';
import { useStyles } from './style';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
}

export const Page: React.FC<PageProps> = props => {
  const { loading, className, children, ...otherProps } = props;
  const { styles, cx } = useStyles(otherProps);

  return (
    <Flex className={cx(styles.root, className)} gap={16} vertical {...otherProps}>
      <PageContext.Provider value={{ loading }}>{children}</PageContext.Provider>
    </Flex>
  );
};
