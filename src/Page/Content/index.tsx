import type { FlexProps } from 'antd';
import { Flex, Skeleton } from 'antd';
import React, { useContext } from 'react';

import { PageContext } from '../PageContext';
import { useStyles } from './style';

// export interface PageContentProps extends FlexProps {

// };

export type PageContentProps = FlexProps;

export const PageContent: React.FC<PageContentProps> = props => {
  const { className, children, ...otherProps } = props;
  const { styles, cx } = useStyles();

  const { loading } = useContext(PageContext);

  if (loading) {
    return <Skeleton active className={cx(styles.root, className)} />;
  }

  return (
    <Flex className={cx(styles.root, className)} gap={20} vertical {...otherProps}>
      {children}
    </Flex>
  );
};
