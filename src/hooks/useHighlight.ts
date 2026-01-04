import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import { useTheme, useThemeMode } from 'antd-style';
import { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ThemedToken, codeToHtml } from 'shiki';
import { ShikiStreamTokenizer } from 'shiki-stream';
import { Md5 } from 'ts-md5';

import { languageMap } from './languageMap';
import { themeMap } from './themeMap';

export const FALLBACK_LANG = 'txt';

export type ThemeProps = (typeof themeMap)[number];

// ============ 常量和工具函数 ============

const MD5_LENGTH_THRESHOLD = 10_000;

// 应用级缓存
const highlightCache = new Map<string, Promise<string>>();
const MAX_CACHE_SIZE = 1000;

const cleanupCache = () => {
  if (highlightCache.size > MAX_CACHE_SIZE) {
    const entriesToRemove = Math.floor(MAX_CACHE_SIZE * 0.2);
    const keysToRemove = [...highlightCache.keys()].slice(0, entriesToRemove);
    for (const key of keysToRemove) {
      highlightCache.delete(key);
    }
  }
};

// 颜色替换映射类型
type ColorReplacements = {
  [themeName: string]: {
    [color: string]: string;
  };
};

type ShikiModule = typeof import('shiki');

// 懒加载 shiki
const loadShiki = (): Promise<typeof codeToHtml> => import('shiki').then(mod => mod.codeToHtml);
const shikiPromise: Promise<typeof codeToHtml> = loadShiki();
const loadShikiModule = (): Promise<ShikiModule | null> => {
  if (typeof window === 'undefined') return Promise.resolve(null);
  return import('shiki');
};
const shikiModulePromise = loadShikiModule();

// 辅助函数：安全的HTML转义
const escapeHtml = (str: string): string => {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
};

const tokensToLineTokens = (tokens: ThemedToken[]): ThemedToken[][] => {
  if (tokens.length === 0) return [[]];

  const lines: ThemedToken[][] = [[]];
  let currentLine = lines[0];

  const startNewLine = () => {
    currentLine = [];
    lines.push(currentLine);
  };

  for (const token of tokens) {
    const content = token.content ?? '';

    if (content === '\n') {
      startNewLine();
      continue;
    }

    if (!content.includes('\n')) {
      currentLine.push(token);
      continue;
    }

    const segments = content.split('\n');
    for (const [index, segment] of segments.entries()) {
      if (segment) {
        currentLine.push({
          ...token,
          content: segment,
        });
      }

      if (index < segments.length - 1) {
        startNewLine();
      }
    }
  }

  if (lines.length === 0) return [[]];

  return lines;
};

const createPreStyle = (bg?: string, fg?: string): CSSProperties | undefined => {
  if (!bg && !fg) return undefined;
  return {
    backgroundColor: bg,
    color: fg,
  };
};

// ============ 类型定义 ============

export type StreamingHighlightResult = {
  colorReplacements?: Record<string, string>;
  lines: ThemedToken[][];
  preStyle?: CSSProperties;
};

export type UseStaticHighlightResponse = string;

export type UseStreamHighlightResponse = StreamingHighlightResult | undefined;

export type HighlightConfig = {
  colorReplacements: ColorReplacements;
  matchedLanguage: string;
  shikiTheme: string;
  transformers?: ReturnType<typeof transformerNotationDiff>[];
};

// ============ useHighlightConfig Hook ============

/**
 * 共享的高亮配置 hook
 * 处理主题、语言匹配、颜色替换等通用逻辑
 */
export const useHighlightConfig = (
  lang: string,
  enableTransformer?: boolean,
  theme?: ThemeProps
): HighlightConfig => {
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
    if (language === 'diff') {
      return isDarkMode ? 'slack-dark' : 'github-light';
    }
    return isDarkMode ? 'slack-dark' : 'slack-ochin';
  }, [isDarkMode, language, matchedTheme]);

  return {
    colorReplacements,
    matchedLanguage,
    shikiTheme,
    transformers,
  };
};

// ============ useStaticHighlight Hook ============

/**
 * 静态高亮 hook
 * 将代码转换为高亮 HTML 字符串
 */
export const useStaticHighlight = (
  text: string,
  lang: string,
  enableTransformer?: boolean,
  theme?: ThemeProps
): UseStaticHighlightResponse => {
  const { colorReplacements, matchedLanguage, shikiTheme, transformers } = useHighlightConfig(
    lang,
    enableTransformer,
    theme
  );

  // 构建缓存键
  const cacheKey = useMemo((): string => {
    const hash = text.length < MD5_LENGTH_THRESHOLD ? text : Md5.hashStr(text);
    return [matchedLanguage, shikiTheme, hash].join('-');
  }, [text, matchedLanguage, shikiTheme]);

  const [data, setData] = useState<string | undefined>();

  useEffect(() => {
    if (!cacheKey) {
      // eslint-disable-next-line unicorn/no-useless-undefined
      setData(undefined);
      return;
    }

    // 检查缓存
    const cachedPromise = highlightCache.get(cacheKey);
    if (cachedPromise) {
      cachedPromise
        .then(html => {
          setData(html);
        })
        .catch(() => {
          // 静默处理错误，已在创建时处理
        });
      return;
    }

    // 创建新的高亮 Promise
    const highlightPromise = (async (): Promise<string> => {
      try {
        const codeToHtmlFn = await shikiPromise;
        const html = await codeToHtmlFn(text, {
          colorReplacements,
          lang: matchedLanguage,
          theme: shikiTheme,
          transformers,
        });
        return html;
      } catch (error_) {
        console.warn('高级渲染失败:', error_);

        try {
          const codeToHtmlFn = await shikiPromise;
          const html = await codeToHtmlFn(text, {
            lang: matchedLanguage,
            theme: shikiTheme,
          });
          return html;
        } catch {
          const fallbackHtml = `<pre class="fallback"><code>${escapeHtml(text)}</code></pre>`;
          return fallbackHtml;
        }
      }
    })();

    // 缓存 Promise
    highlightCache.set(cacheKey, highlightPromise);
    cleanupCache();

    // 处理结果
    highlightPromise
      .then(html => {
        // 仅当缓存仍然有效时更新
        if (highlightCache.get(cacheKey) === highlightPromise) {
          setData(html);
        }
      })
      .catch(() => {
        // 从缓存中移除失败的 Promise
        if (highlightCache.get(cacheKey) === highlightPromise) {
          highlightCache.delete(cacheKey);
        }
      });
  }, [cacheKey, text, matchedLanguage, shikiTheme, transformers, colorReplacements]);

  return data || '';
};

// ============ useStreamHighlight Hook ============

/**
 * 流式高亮 hook
 * 用于实时流式渲染代码高亮
 */
export const useStreamHighlight = (
  text: string,
  lang: string,
  enableTransformer?: boolean,
  theme?: ThemeProps
): UseStreamHighlightResponse => {
  const { colorReplacements, matchedLanguage, shikiTheme } = useHighlightConfig(
    lang,
    enableTransformer,
    theme
  );

  const [result, setResult] = useState<StreamingHighlightResult>();
  const tokenizerRef = useRef<ShikiStreamTokenizer | null>(null);
  const previousTextRef = useRef('');
  const latestTextRef = useRef(text);
  // eslint-disable-next-line unicorn/no-useless-undefined
  const preStyleRef = useRef<CSSProperties | undefined>(undefined);
  const colorReplacementsRef = useRef(colorReplacements[shikiTheme]);
  const linesRef = useRef<ThemedToken[][]>([[]]);
  // 缓存 highlighter key，避免不必要的 tokenizer 重建
  const highlighterKeyRef = useRef<string>('');

  useEffect(() => {
    latestTextRef.current = text;
  }, [text]);

  useEffect(() => {
    colorReplacementsRef.current = colorReplacements[shikiTheme];
  }, [colorReplacements, shikiTheme]);

  const setStreamingResult = useCallback((rawLines: ThemedToken[][]) => {
    const previousLines = linesRef.current;
    const newLinesLength = rawLines.length;
    const prevLinesLength = previousLines.length;

    // 快速路径：如果长度不同或为空，直接使用新的 lines
    if (newLinesLength !== prevLinesLength || newLinesLength === 0) {
      linesRef.current = rawLines;
      setResult({
        colorReplacements: colorReplacementsRef.current,
        lines: rawLines,
        preStyle: preStyleRef.current,
      });
      return;
    }

    // 优化比较：只检查有变化的行
    let hasChanges = false;
    const mergedLines: ThemedToken[][] = [];

    for (let i = 0; i < newLinesLength; i++) {
      const newLine = rawLines[i];
      const prevLine = previousLines[i];

      // 快速引用相等检查
      if (prevLine === newLine) {
        mergedLines[i] = prevLine;
        continue;
      }

      // 长度检查
      if (!prevLine || prevLine.length !== newLine.length) {
        mergedLines[i] = newLine;
        hasChanges = true;
        continue;
      }

      // 深度比较只对可能变化的行
      let lineChanged = false;
      for (const [j, newToken] of newLine.entries()) {
        if (prevLine[j] !== newToken) {
          lineChanged = true;
          break;
        }
      }

      if (lineChanged) {
        mergedLines[i] = newLine;
        hasChanges = true;
      } else {
        mergedLines[i] = prevLine;
      }
    }

    // 只有实际变化时才更新状态
    if (hasChanges) {
      linesRef.current = mergedLines;
      setResult({
        colorReplacements: colorReplacementsRef.current,
        lines: mergedLines,
        preStyle: preStyleRef.current,
      });
    }
  }, []);

  const updateTokens = useCallback(
    async (nextText: string, forceReset = false) => {
      const tokenizer = tokenizerRef.current;
      if (!tokenizer) return;

      if (forceReset) {
        tokenizer.clear();
        previousTextRef.current = '';
      }

      const previousText = previousTextRef.current;
      let chunk = nextText;
      const canAppend = !forceReset && nextText.startsWith(previousText);

      if (canAppend) {
        chunk = nextText.slice(previousText.length);
      } else if (!forceReset) {
        tokenizer.clear();
      }

      previousTextRef.current = nextText;

      if (!chunk) {
        const stableTokens = tokenizer.tokensStable;
        const unstableTokens = tokenizer.tokensUnstable;
        const totalLength = stableTokens.length + unstableTokens.length;

        if (totalLength === 0) {
          setStreamingResult([[]]);
          return;
        }

        // 优化：只在必要时创建合并数组
        const getMergedTokens = () => {
          if (stableTokens.length === 0) return unstableTokens;
          if (unstableTokens.length === 0) return stableTokens;
          return [...stableTokens, ...unstableTokens];
        };

        setStreamingResult(tokensToLineTokens(getMergedTokens()));
        return;
      }

      try {
        await tokenizer.enqueue(chunk);
        const stableTokens = tokenizer.tokensStable;
        const unstableTokens = tokenizer.tokensUnstable;
        const getMergedTokens = () => {
          if (stableTokens.length === 0) return unstableTokens;
          if (unstableTokens.length === 0) return stableTokens;
          return [...stableTokens, ...unstableTokens];
        };
        setStreamingResult(tokensToLineTokens(getMergedTokens()));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Streaming highlighting failed:', error);
      }
    },
    [setStreamingResult]
  );

  useEffect(() => {
    // 如果 language/theme 组合没有变化，跳过
    const currentKey = `${matchedLanguage}-${shikiTheme}`;
    if (highlighterKeyRef.current === currentKey && tokenizerRef.current) {
      return;
    }

    let cancelled = false;

    (async () => {
      const mod = await shikiModulePromise;
      if (!mod || cancelled) return;

      try {
        const highlighter = await mod.getSingletonHighlighter({
          langs: matchedLanguage ? [matchedLanguage] : [],
          themes: [shikiTheme],
        });

        if (!highlighter || cancelled) return;

        // 只在 key 变化时创建新的 tokenizer
        if (highlighterKeyRef.current !== currentKey) {
          // 清理旧的 tokenizer
          tokenizerRef.current?.clear();

          const tokenizer = new ShikiStreamTokenizer({
            highlighter,
            lang: matchedLanguage,
            theme: shikiTheme,
          });

          tokenizerRef.current = tokenizer;
          highlighterKeyRef.current = currentKey;
          previousTextRef.current = '';
          linesRef.current = [[]];

          const themeInfo = highlighter.getTheme(shikiTheme);
          preStyleRef.current = createPreStyle(themeInfo?.bg, themeInfo?.fg);
        }

        const currentText = latestTextRef.current;
        if (currentText) {
          await updateTokens(currentText, true);
        } else {
          setStreamingResult([[]]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Streaming highlighter initialization failed:', error);
        // 重置错误时的 key
        highlighterKeyRef.current = '';
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [matchedLanguage, setStreamingResult, shikiTheme, updateTokens]);

  useEffect(() => {
    if (!tokenizerRef.current) return;
    updateTokens(text);
  }, [text, updateTokens]);

  return result;
};

// ============ 导出 ============

export { languageMap } from './languageMap';
export { themeMap } from './themeMap';

export { escapeHtml, loadShiki, MD5_LENGTH_THRESHOLD, shikiPromise };
