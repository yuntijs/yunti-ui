import { createContext } from 'react';

export interface PageContextValue {
  loading?: boolean;
}

export const PageContext = createContext<PageContextValue>({ loading: false });
