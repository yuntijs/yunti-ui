import { ReactNode, createContext, memo, useContext } from 'react';

import { MentionsOptionsMap } from './types';

interface Value {
  optionsMap: MentionsOptionsMap;
}

export const MentionsConfigContext = createContext<Value | null>(null);

export const MentionsConfigProvider = memo<{ children: ReactNode; value: Value }>(
  ({ children, value }) => {
    return (
      <MentionsConfigContext.Provider value={value}>{children}</MentionsConfigContext.Provider>
    );
  }
);

export const useOptionsMap = () => {
  const config = useContext(MentionsConfigContext);

  return config?.optionsMap;
};
