import { getTokenStyleObject } from '@shikijs/core';
import type { CSSProperties } from 'react';
import { memo, useEffect, useRef } from 'react';
import type { ThemedToken } from 'shiki';

import { ThemeProps, useStreamHighlight } from '@/hooks/useHighlight';

import { useStyles } from './style';

export interface StreamRendererProps {
  children: string;
  className?: string;
  enableTransformer?: boolean;
  fallbackClassName?: string;
  language: string;
  style?: CSSProperties;
  theme?: ThemeProps;
}

const applyColorReplacement = (color?: string, replacements?: Record<string, string>) => {
  if (!color || !replacements) return color;
  return replacements[color.toLowerCase()] || color;
};

const normalizeStyleKeys = (style: Record<string, string | number>): CSSProperties => {
  const normalized: CSSProperties = {};
  for (const [key, value] of Object.entries(style)) {
    const normalizedKey = key.replaceAll(/-([a-z])/g, (_, char) => char.toUpperCase());
    (normalized as Record<string, string | number>)[normalizedKey] = value;
  }
  return normalized;
};

const getTokenInlineStyle = (
  token: ThemedToken,
  replacements?: Record<string, string>
): CSSProperties => {
  const rawStyle = token.htmlStyle || getTokenStyleObject(token);
  const baseStyle = normalizeStyleKeys(rawStyle);
  if (!replacements) return { ...baseStyle };

  const style: CSSProperties = {
    ...baseStyle,
  };

  if (style.color && typeof style.color === 'string') {
    style.color = applyColorReplacement(style.color, replacements);
  }
  if (style.backgroundColor && typeof style.backgroundColor === 'string') {
    style.backgroundColor = applyColorReplacement(style.backgroundColor, replacements);
  }

  return style;
};

const TokenSpan = memo(
  ({ token, replacements }: { replacements?: Record<string, string>; token: ThemedToken }) => {
    return (
      <span key={token.content} style={getTokenInlineStyle(token, replacements)}>
        {token.content}
      </span>
    );
  },
  (prev, next) => prev.token === next.token
);

const TokenLine = memo(
  ({ line, replacements }: { line: ThemedToken[]; replacements?: Record<string, string> }) => {
    if (line.length === 0) {
      return (
        <span className="line">
          <span>{'\u00A0'}</span>
        </span>
      );
    }

    return (
      <span className="line">
        {line.map((token, tokenIndex) => (
          <TokenSpan key={`token-${tokenIndex}`} replacements={replacements} token={token} />
        ))}
      </span>
    );
  },
  (prev, next) => prev.line === next.line
);

const StreamRenderer = memo<StreamRendererProps>(
  ({ children, className, enableTransformer, fallbackClassName, language, style, theme }) => {
    const { styles, cx } = useStyles({ theme });
    const safeChildren = children ?? '';
    const preRef = useRef<HTMLPreElement>(null);

    const result = useStreamHighlight(safeChildren, language, enableTransformer, theme);

    const lines = result?.lines;
    const replacements = result?.colorReplacements;

    const linesCount = lines?.length ?? 0;
    // 计算最后一行的内容长度，用于 wrap 模式下折行时也能触发滚动
    const lastLineContentLength =
      linesCount > 0
        ? (lines?.[linesCount - 1]?.reduce((acc, token) => acc + (token.content?.length ?? 0), 0) ??
          0)
        : 0;
    const rafIdRef = useRef<number>(0);

    // 流式输出时自动滚动（使用 RAF 节流，每帧最多执行一次）
    useEffect(() => {
      if (!preRef.current || linesCount === 0) return;

      // 取消上一次未执行的 RAF
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        if (!preRef.current) return;
        preRef.current.scrollTop = preRef.current.scrollHeight;
      });

      return () => {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
      };
    }, [linesCount, lastLineContentLength]);

    if (!lines || lines.length === 0) {
      return (
        <div className={cx(styles.shiki, fallbackClassName)} dir="ltr" style={style}>
          <pre>
            <code>{safeChildren}</code>
          </pre>
        </div>
      );
    }

    return (
      <div className={cx(styles.shiki, className)} dir="ltr" style={style}>
        <pre ref={preRef} tabIndex={0}>
          <code style={{ display: 'flex', flexDirection: 'column' }}>
            {lines.map((line, index) => (
              <TokenLine key={`line-${index}`} line={line} replacements={replacements} />
            ))}
          </code>
        </pre>
      </div>
    );
  }
);

StreamRenderer.displayName = 'StreamRenderer';

export default StreamRenderer;
