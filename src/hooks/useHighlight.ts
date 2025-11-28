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
import useSWR, { SWRResponse } from 'swr';
import { Md5 } from 'ts-md5';

import { languageMap } from './languageMap';
import { themeMap } from './themeMap';

export const FALLBACK_LANG = 'txt';

export type ThemeProps = (typeof themeMap)[number];

// 应用级缓存，避免重复计算
const MD5_LENGTH_THRESHOLD = 10_000; // 超过该长度使用异步MD5

// 颜色替换映射类型
type ColorReplacements = {
  [themeName: string]: {
    [color: string]: string;
  };
};

type StreamingHighlightResult = {
  colorReplacements?: Record<string, string>;
  lines: ThemedToken[][];
  preStyle?: CSSProperties;
};

type UseHighlightResponse = SWRResponse<string, Error> & {
  colorReplacements?: ColorReplacements;
  streaming?: StreamingHighlightResult;
};

type StreamingOptions = {
  colorReplacements?: Record<string, string>;
  enabled?: boolean;
  language: string;
  theme: string;
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

const useStreamingHighlighter = (
  text: string,
  options: StreamingOptions
): StreamingHighlightResult | undefined => {
  const { colorReplacements, enabled, language, theme } = options;
  const [result, setResult] = useState<StreamingHighlightResult>();
  const tokenizerRef = useRef<ShikiStreamTokenizer | null>(null);
  const previousTextRef = useRef('');
  const latestTextRef = useRef(text);
  // eslint-disable-next-line unicorn/no-useless-undefined
  const preStyleRef = useRef<CSSProperties | undefined>(undefined);
  const colorReplacementsRef = useRef(colorReplacements);
  const linesRef = useRef<ThemedToken[][]>([[]]);

  useEffect(() => {
    latestTextRef.current = text;
  }, [text]);

  useEffect(() => {
    colorReplacementsRef.current = colorReplacements;
  }, [colorReplacements]);

  const setStreamingResult = useCallback((rawLines: ThemedToken[][]) => {
    const previousLines = linesRef.current;

    const mergedLines = rawLines.map((line, index) => {
      const previousLine = previousLines[index];
      if (
        previousLine &&
        previousLine.length === line.length &&
        previousLine.every((token, tokenIndex) => token === line[tokenIndex])
      ) {
        return previousLine;
      }
      return line;
    });

    linesRef.current = mergedLines;

    setResult({
      colorReplacements: colorReplacementsRef.current,
      lines: mergedLines,
      preStyle: preStyleRef.current,
    });
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
        const mergedTokens = [...tokenizer.tokensStable, ...tokenizer.tokensUnstable];
        setStreamingResult(mergedTokens.length > 0 ? tokensToLineTokens(mergedTokens) : [[]]);
        return;
      }

      try {
        await tokenizer.enqueue(chunk);
        const mergedTokens = [...tokenizer.tokensStable, ...tokenizer.tokensUnstable];
        setStreamingResult(tokensToLineTokens(mergedTokens));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Streaming highlighting failed:', error);
      }
    },
    [setStreamingResult]
  );

  useEffect(() => {
    if (!enabled) {
      tokenizerRef.current?.clear();
      tokenizerRef.current = null;
      previousTextRef.current = '';
      preStyleRef.current = undefined;
      linesRef.current = [[]];
      // eslint-disable-next-line unicorn/no-useless-undefined
      setResult(undefined);
      return;
    }

    let cancelled = false;

    (async () => {
      const mod = await shikiModulePromise;
      if (!mod || cancelled) return;

      try {
        const highlighter = await mod.getSingletonHighlighter({
          langs: language ? [language] : [],
          themes: [theme],
        });

        if (!highlighter || cancelled) return;

        const tokenizer = new ShikiStreamTokenizer({
          highlighter,
          lang: language,
          theme,
        });

        tokenizerRef.current = tokenizer;
        previousTextRef.current = '';
        linesRef.current = [[]];

        const themeInfo = highlighter.getTheme(theme);
        preStyleRef.current = createPreStyle(themeInfo?.bg, themeInfo?.fg);

        const currentText = latestTextRef.current;
        if (currentText) {
          await updateTokens(currentText, true);
        } else {
          setStreamingResult([[]]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Streaming highlighter initialization failed:', error);
      }
    })();

    return () => {
      cancelled = true;
      tokenizerRef.current?.clear();
      tokenizerRef.current = null;
      previousTextRef.current = '';
    };
  }, [enabled, language, setStreamingResult, theme, updateTokens]);

  useEffect(() => {
    if (!enabled) return;
    if (!tokenizerRef.current) return;
    updateTokens(text);
  }, [enabled, text, updateTokens]);

  return result;
};

// 主高亮组件
export const useHighlight = (
  text: string,
  lang: string,
  enableTransformer?: boolean,
  theme?: ThemeProps,
  streaming?: boolean
): UseHighlightResponse => {
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
  const response = useSWR(
    streaming ? null : cacheKey,
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

  const effectiveTheme = isDarkMode ? 'slack-dark' : 'slack-ochin';
  const streamingResult = useStreamingHighlighter(text, {
    colorReplacements: shikiTheme ? undefined : colorReplacements[effectiveTheme],
    enabled: streaming,
    language: matchedLanguage,
    theme: effectiveTheme,
  });

  return {
    ...response,
    colorReplacements,
    streaming: streamingResult,
  };
};

export { languageMap } from './languageMap';
export { themeMap } from './themeMap';

export { escapeHtml, loadShiki, MD5_LENGTH_THRESHOLD, shikiPromise };
