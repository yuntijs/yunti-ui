import loader, { Monaco } from '@monaco-editor/loader';
import { isEqual } from 'lodash-es';

import { genCdnUrl } from '@/utils/genCdnUrl';

import { DEFAULT_MONACO_VERSION } from './const';
import { EditorMeta, controller } from './controller';

/**
 * 没传 requireConfig 时的兜底路径。正常路径是 `MonacoEditor` 用 `useCdnFn()` 算好再传进来
 * （所以这里实际走不到），但仍从 DEFAULT_MONACO_VERSION 拼 —— 别把「只有一个版本」
 * 这条不变量押在一个随时可能被走到的分支上。
 */
const fallbackRequireConfig = () => ({
  paths: {
    vs: genCdnUrl({ path: 'min/vs', pkg: 'monaco-editor', version: DEFAULT_MONACO_VERSION }),
  },
});

export const getSingletonMonaco = (() => {
  let monaco: Monaco;
  let prevOptions: any;
  return async (options?: any) => {
    if (!monaco || !isEqual(prevOptions, options)) {
      const hasConfig = Object.keys(options || {}).length > 0;
      loader.config(hasConfig ? options : fallbackRequireConfig());
      // eslint-disable-next-line require-atomic-updates
      monaco = await loader.init();
      // eslint-disable-next-line require-atomic-updates
      prevOptions = options;
    }
    return monaco;
  };
})();

export const getCommonMonaco = (config: any): Promise<Monaco> => {
  loader.config(config || fallbackRequireConfig());
  return loader.init();
};

export function getMonaco(config?: any) {
  const hasConfig = Object.keys(config || {}).length > 0;
  const monacoConfig = hasConfig ? config : undefined;
  return controller.getMeta().singleton
    ? getSingletonMonaco(monacoConfig)
    : getCommonMonaco(monacoConfig);
}

export function configure(config: EditorMeta) {
  controller.updateMeta(config);
}
