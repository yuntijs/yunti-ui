import { Flex } from 'antd';
import { FlexProps } from 'antd/lib';
import React, { useState } from 'react';

import { useLink } from '@/ConfigProvider';

import type { PageBreadcrumbProps } from './Breadcrumb';
import { DefaultLink, PageContext, PageContextValue } from './PageContext';
import { useStyles } from './style';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement>, Pick<FlexProps, 'gap'> {
  loading?: boolean;
  status?: PageContextValue['status'];
  Link?: PageContextValue['Link'];
}

export const Page: React.FC<PageProps> = props => {
  const LinkFromRootConfigProvider = useLink();
  const {
    loading,
    className,
    children,
    Link = LinkFromRootConfigProvider || DefaultLink,
    status,
    gap = 16,
    ...otherProps
  } = props;
  const { styles, cx } = useStyles(otherProps);
  const [breadcrumbItems, setBreadcrumbItems] = useState<PageBreadcrumbProps['items']>([]);

  return (
    <Flex className={cx(styles.root, className)} gap={gap} vertical {...otherProps}>
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
