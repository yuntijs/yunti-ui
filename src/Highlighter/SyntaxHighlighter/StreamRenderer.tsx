import { Icon } from '@lobehub/ui';
import { getTokenStyleObject } from '@shikijs/core';
import { Loader2 } from 'lucide-react';
import type { CSSProperties } from 'react';
import { memo, useEffect, useRef } from 'react';
import { Flexbox } from 'react-layout-kit';
import type { BuiltinTheme, ThemedToken } from 'shiki';

import { useHighlight } from '@/hooks/useHighlight';

import { useStyles } from './style';

interface StreamRendererProps {
  children: string;
  className?: string;
  enableTransformer?: boolean;
  fallbackClassName?: string;
  language: string;
  style?: CSSProperties;
  theme?: BuiltinTheme;
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
  ({ children, className, enableTransformer, language, style, theme }) => {
    const { styles, cx } = useStyles({ theme });
    const { streaming, isLoading } = useHighlight(
      children,
      language,
      enableTransformer,
      theme,
      true
    );
    const containerRef = useRef<HTMLDivElement>(null);

    const lines = streaming?.lines;
    const replacements = streaming?.colorReplacements;

    useEffect(() => {
      if (containerRef.current && (lines?.length || 0) > 0) {
        containerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    }, [lines?.length]);

    return (
      <>
        {isLoading || !lines || lines.length === 0 ? (
          <div className={cx(styles.shiki, className)} style={style}>
            <pre>
              <div>{children.trim()}</div>
            </pre>
          </div>
        ) : (
          <div className={cx(styles.shiki, className)} dir="ltr" style={style}>
            <pre tabIndex={0}>
              <code
                ref={containerRef}
                style={{ display: 'flex', flexDirection: 'column', whiteSpace: 'pre' }}
              >
                {lines.map((line, index) => (
                  <TokenLine key={`line-${index}`} line={line} replacements={replacements} />
                ))}
              </code>
            </pre>
          </div>
        )}
        {isLoading && (
          <Flexbox
            align={'center'}
            className={styles.loading}
            gap={8}
            horizontal
            justify={'center'}
          >
            <Icon icon={Loader2} spin />
          </Flexbox>
        )}
      </>
    );
  }
);

StreamRenderer.displayName = 'StreamRenderer';

export default StreamRenderer;
