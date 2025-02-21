import { App as AntdApp, type AppProps as AntdAppProps } from 'antd';
import React from 'react';

import { NotificationGlobalStyle } from '../notification';

export type AppProps = AntdAppProps;

export const App: React.FC<AppProps> & {
  useApp: typeof AntdApp.useApp;
} = props => {
  const { children, ...otherProps } = props;
  return (
    <AntdApp {...otherProps}>
      <NotificationGlobalStyle />
      {children}
    </AntdApp>
  );
};

App.useApp = AntdApp.useApp;
export default App;
