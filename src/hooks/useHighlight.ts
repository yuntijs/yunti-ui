import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import { useTheme, useThemeMode } from 'antd-style';
import { useMemo } from 'react';
import type { codeToHtml } from 'shiki';
import useSWR, { SWRResponse } from 'swr';
import { Md5 } from 'ts-md5';

import { languageMap } from './languageMap';
import { themeMap } from './themeMap';

export const FALLBACK_LANG = 'txt';

// 应用级缓存，避免重复计算
const MD5_LENGTH_THRESHOLD = 10_000; // 超过该长度使用异步MD5

// 颜色替换映射类型
type ColorReplacements = {
  [themeName: string]: {
    [color: string]: string;
  };
};

// 懒加载 shiki
const loadShiki = (): Promise<typeof codeToHtml> => import('shiki').then(mod => mod.codeToHtml);
const shikiPromise: Promise<typeof codeToHtml> = loadShiki();

// 辅助函数：安全的HTML转义
const escapeHtml = (str: string): string => {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
};

// 主高亮组件
export const useHighlight = (
  text: string,
  lang: string,
  enableTransformer?: boolean,
  theme?: string
): SWRResponse<string, Error> => {
  const { isDarkMode } = useThemeMode();
  const antTheme = useTheme();
  const language = lang.toLowerCase();

  // 匹配支持的语言
  const matchedLanguage = useMemo(
    () => (languageMap.includes(language as any) ? language : FALLBACK_LANG),
    [language]
  );
  // 匹配支持的主题
  const matchedTheme = useMemo(() => (themeMap.includes(theme!) ? theme : undefined), [theme]);

  // 优化 transformer 创建
  const transformers = useMemo(() => {
    if (!enableTransformer) return;
    return [
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
      transformerNotationFocus(),
      transformerNotationErrorLevel(),
    ];
  }, [enableTransformer]);

  // 优化颜色替换配置
  const colorReplacements = useMemo(
    (): ColorReplacements => ({
      'slack-dark': {
        '#4ec9b0': antTheme.yellow,
        '#569cd6': antTheme.colorError,
        '#6a9955': antTheme.gray,
        '#9cdcfe': antTheme.colorText,
        '#b5cea8': antTheme.purple10,
        '#c586c0': antTheme.colorInfo,
        '#ce9178': antTheme.colorSuccess,
        '#dcdcaa': antTheme.colorWarning,
        '#e6e6e6': antTheme.colorText,
      },
      'slack-ochin': {
        '#002339': antTheme.colorText,
        '#0991b6': antTheme.colorError,
        '#174781': antTheme.purple10,
        '#2f86d2': antTheme.colorText,
        '#357b42': antTheme.gray,
        '#7b30d0': antTheme.colorInfo,
        '#7eb233': antTheme.colorWarningTextActive,
        '#a44185': antTheme.colorSuccess,
        '#dc3eb7': antTheme.yellow11,
      },
    }),
    [antTheme]
  );

  // 构建 shiki 主题
  const shikiTheme = useMemo(() => {
    if (matchedTheme) {
      return matchedTheme;
    }
    if (language === 'md') {
      return isDarkMode ? 'catppuccin-mocha' : 'catppuccin-latte';
    }
    if (language === 'shellsession') {
      return isDarkMode ? 'material-theme-darker' : 'material-theme-lighter';
    }
    return isDarkMode ? 'slack-dark' : 'slack-ochin';
  }, [isDarkMode, language, matchedTheme]);

  // 构建缓存键
  const cacheKey = useMemo((): string | null => {
    // 长文本使用 hash
    const hash = text.length < MD5_LENGTH_THRESHOLD ? text : Md5.hashStr(text);
    return [matchedLanguage, shikiTheme, hash].join('-');
  }, [text, matchedLanguage, shikiTheme]);

  // 使用SWR获取高亮HTML
  return useSWR(
    cacheKey,
    async (): Promise<string> => {
      try {
        // 尝试完整渲染
        const codeToHtml = await shikiPromise;
        const html = await codeToHtml(text, {
          colorReplacements,
          lang: matchedLanguage,
          theme: shikiTheme,
          transformers,
        });

        return html;
      } catch (error) {
        console.warn('高级渲染失败:', error);

        try {
          // 尝试简单渲染 (不使用转换器)
          const codeToHtml = await shikiPromise;
          const html = await codeToHtml(text, {
            lang: matchedLanguage,
            theme: shikiTheme,
          });
          return html;
        } catch {
          // 最终降级到纯文本
          const fallbackHtml = `<pre class="fallback"><code>${escapeHtml(text)}</code></pre>`;
          return fallbackHtml;
        }
      }
    },
    {
      dedupingInterval: 3000, // 3秒内相同请求只执行一次
      errorRetryCount: 2, // 最多重试2次
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
};

export { languageMap } from './languageMap';
export { themeMap } from './themeMap';

export { escapeHtml, loadShiki, MD5_LENGTH_THRESHOLD, shikiPromise };
