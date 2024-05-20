import type { FlexProps } from 'antd';
import { Button, Flex, Result, Skeleton } from 'antd';
import React, { useCallback, useContext } from 'react';

import { PageContext } from '../PageContext';
import { useStyles } from './style';

export type PageContentProps = FlexProps;

const STATUS_TITLE_MAP = {
  '403': 'Sorry, you are not authorized to access this page.',
  '404': 'Sorry, the page you visited does not exist.',
  '500': 'Sorry, something went wrong.',
};

export const PageContent: React.FC<PageContentProps> = props => {
  const { className, children, ...otherProps } = props;
  const { styles, cx } = useStyles();

  const { loading, breadcrumb, Link, status } = useContext(PageContext);

  const renderChildren = useCallback(() => {
    if (status) {
      return (
        <Result
          extra={
            <Link to={breadcrumb?.items?.[0]?.path}>
              <Button type="primary">Go Back</Button>
            </Link>
          }
          status={status}
          subTitle={STATUS_TITLE_MAP[status]}
          title={status}
        />
      );
    }
    return children;
  }, [status, children, breadcrumb]);

  if (loading) {
    return <Skeleton active className={cx(styles.root, className)} />;
  }

  return (
    <Flex className={cx(styles.root, className)} gap={20} vertical {...otherProps}>
      {renderChildren()}
    </Flex>
  );
};
