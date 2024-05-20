import { Flex } from 'antd';
import React, { useState } from 'react';

import type { PageBreadcrumbProps } from './Breadcrumb';
import { DefaultLink, PageContext, PageContextValue } from './PageContext';
import { useStyles } from './style';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  status?: PageContextValue['status'];
  Link?: PageContextValue['Link'];
}

export const Page: React.FC<PageProps> = props => {
  const { loading, className, children, Link = DefaultLink, status, ...otherProps } = props;
  const { styles, cx } = useStyles(otherProps);
  const [breadcrumbItems, setBreadcrumbItems] = useState<PageBreadcrumbProps['items']>([]);

  return (
    <Flex className={cx(styles.root, className)} gap={16} vertical {...otherProps}>
      <PageContext.Provider
        value={{
          loading,
          Link,
          breadcrumb: { items: breadcrumbItems, setItems: setBreadcrumbItems },
          status,
        }}
      >
        {children}
      </PageContext.Provider>
    </Flex>
  );
};
