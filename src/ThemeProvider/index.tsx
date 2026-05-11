'use client';

import { type ThemeConfig, theme as antdTheme } from 'antd';
import {
  ThemeProvider as AntdStyleThemeProvider,
  type ThemeProviderProps as AntdStyleThemeProviderProps,
  type ThemeAppearance,
} from 'antd-style';
import React, { memo, useCallback } from 'react';

type AntdStyleTheme = ThemeConfig | ((appearance: ThemeAppearance) => ThemeConfig | undefined);

export interface ThemeProviderProps<
  T = Record<string, any>,
  S = Record<string, string>,
> extends Omit<AntdStyleThemeProviderProps<T, S>, 'theme'> {
  /**
   * antd theme config, or a function that receives the current appearance.
   *
   * Unlike `@lobehub/ui`'s ThemeProvider, the default algorithm here is antd's
   * own `defaultAlgorithm` / `darkAlgorithm` (no hardcoded primary palette), so
   * any `token.colorPrimary` you set actually wins downstream. Pass `algorithm`
   * yourself to customise further (it will not be overridden if provided).
   */
  theme?: AntdStyleTheme;
}

export const ThemeProvider = memo<React.PropsWithChildren<ThemeProviderProps>>(
  ({ theme, children, ...rest }) => {
    const themeFn = useCallback(
      (appearance: ThemeAppearance): ThemeConfig => {
        const baseTheme: ThemeConfig =
          (typeof theme === 'function' ? theme(appearance) : theme) ?? {};
        const algorithm =
          appearance === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm;
        return {
          ...baseTheme,
          algorithm: baseTheme.algorithm ?? algorithm,
        };
      },
      [theme]
    );

    return (
      <AntdStyleThemeProvider theme={themeFn} {...rest}>
        {children}
      </AntdStyleThemeProvider>
    );
  }
);

ThemeProvider.displayName = 'YuntiThemeProvider';

export default ThemeProvider;
