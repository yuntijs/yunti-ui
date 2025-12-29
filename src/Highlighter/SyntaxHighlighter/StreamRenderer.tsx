import { getTokenStyleObject } from '@shikijs/core';
import type { CSSProperties } from 'react';
import { memo } from 'react';
import type { ThemedToken } from 'shiki';

import { ThemeProps, useStreamHighlight } from '@/hooks/useHighlight';

import { useStyles } from './style';

interface StreamRendererProps {
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
  if (!replacements) return { ...baseStyle, whiteSpace: 'pre' };

  const style: CSSProperties = {
    ...baseStyle,
    whiteSpace: 'pre',
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
          <span style={{ whiteSpace: 'pre' }}>{'\u00A0'}</span>
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

    const result = useStreamHighlight(safeChildren, language, enableTransformer, theme);

    const lines = result?.lines;
    const replacements = result?.colorReplacements;

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
        <pre tabIndex={0}>
          <code style={{ display: 'flex', flexDirection: 'column', whiteSpace: 'pre' }}>
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
