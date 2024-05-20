import React, { useCallback, useContext, useEffect } from 'react';

import { Breadcrumb } from '../../Breadcrumb';
import type { BreadcrumbProps } from '../../Breadcrumb';
import { PageContext, PageContextValue } from '../PageContext';

export type PageBreadcrumbProps = BreadcrumbProps;

export interface BreadcrumbLinkProps extends React.HtmlHTMLAttributes<HTMLElement> {
  to: string;
  Link?: PageContextValue['Link'];
}
const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = props => {
  const { to, Link, children, ...otherProps } = props;
  if (Link) {
    return (
      <Link to={to} {...otherProps}>
        {children}
      </Link>
    );
  }
  return (
    <a href={`#${to}`} {...otherProps}>
      {children}
    </a>
  );
};

export const PageBreadcrumb: React.FC<PageBreadcrumbProps> = props => {
  const { Link, breadcrumb } = useContext(PageContext);

  useEffect(() => {
    breadcrumb?.setItems?.(props.items);
  }, [props.items]);

  // @ts-ignore
  const itemRender = useCallback<BreadcrumbProps['itemRender']>(
    (currentRoute, params, items, paths) => {
      const isLast = currentRoute.path === items.at(-1)?.path;
      if (isLast) {
        return <span>{currentRoute.title}</span>;
      }

      const to = `/${paths.join('/')}`;
      return (
        <BreadcrumbLink Link={Link} to={to}>
          {currentRoute.title}
        </BreadcrumbLink>
      );
    },
    [Link]
  );

  return <Breadcrumb itemRender={itemRender} {...props} />;
};
