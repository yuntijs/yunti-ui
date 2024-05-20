import type { ExceptionStatusType } from 'antd/es/result';
import React, { createContext } from 'react';

import { BreadcrumbLinkProps, PageBreadcrumbProps } from './Breadcrumb';

export interface PageContextValue {
  loading?: boolean;
  /** Link component */
  Link: typeof React.Component | React.FC<any>;
  breadcrumb?: {
    items?: PageBreadcrumbProps['items'];
    setItems?: (items?: PageBreadcrumbProps['items']) => void;
  };
  status?: ExceptionStatusType;
}

export const DefaultLink: React.FC<Omit<BreadcrumbLinkProps, 'Link'>> = props => {
  const { to, children, ...otherProps } = props;
  return (
    <a href={`#${to}`} {...otherProps}>
      {children}
    </a>
  );
};

export const PageContext = createContext<PageContextValue>({ loading: false, Link: DefaultLink });
