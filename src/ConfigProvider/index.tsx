import { useCdnFn as useLobeCdnFn } from '@lobehub/ui';
import { ElementType, ReactNode, createContext, memo, useContext } from 'react';

import type { PageContextValue } from '@/Page/PageContext';
import { CDN, CdnApi, genCdnUrl } from '@/utils/genCdnUrl';

type CdnFn = ({ pkg, version, path }: CdnApi) => string;
export interface Config {
  customCdnFn?: CdnFn;
  imgAs?: ElementType;
  proxy?: CDN | 'custom';
  Link?: PageContextValue['Link'];
}

export const ConfigContext = createContext<Config | null>(null);

export const ConfigProvider = memo<{ children: ReactNode; config: Config }>(
  ({ children, config }) => {
    return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
  }
);

/**
 * 资源地址生成函数。
 *
 * 本 Provider **没配** cdn 相关项时，回落到 `@lobehub/ui` 的 `useCdnFn` —— 我们的组件大量
 * 混用两个库，应用侧因此只需挂一层 `<ConfigProvider>`（lobe 的那层）就能同时改写两边的
 * 资源地址；否则漏挂一层就是「图标好了但编辑器仍去公网」这种一半生效的状态。
 *
 * 反过来（本 Provider 内部再包一层 lobe 的）走不通：lobe 的 `ConfigProvider` 把 `motion`
 * 定成了必填 prop，那样得凭空造一个 motion 组件并转发。
 *
 * 已经给本 Provider 传了 `proxy` / `customCdnFn` 的用法完全不变。
 */
export const useCdnFn = (): CdnFn => {
  const config = useContext(ConfigContext);
  // hooks 不能条件调用：先无条件取 lobe 的，再决定用不用。
  const lobeCdnFn = useLobeCdnFn();

  if (!config?.proxy && !config?.customCdnFn) return lobeCdnFn;
  if (config.proxy !== 'custom') {
    return ({ pkg, version, path }) =>
      genCdnUrl({ path, pkg, proxy: config.proxy as any, version });
  }
  return config.customCdnFn || lobeCdnFn;
};

export const useLink = () => {
  const config = useContext(ConfigContext);

  return config?.Link;
};
