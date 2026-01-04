import { memo } from 'react';

import { ThemeProps, escapeHtml, useStaticHighlight } from '@/hooks/useHighlight';
import { DivProps } from '@/types';

import { useStyles } from './style';

export interface StaticRendererProps extends DivProps {
  children: string;
  language: string;
  enableTransformer?: boolean;
  theme?: ThemeProps;
}

export const StaticRenderer = memo<StaticRendererProps>(
  ({ children, language, enableTransformer, theme, className, style }) => {
    const { styles, cx } = useStyles({ theme });
    const safeChildren = children?.trim() ?? '';

    const data = useStaticHighlight(safeChildren, language, enableTransformer, theme);

    const hasData = typeof data === 'string' && data.length > 0;

    return (
      <div
        className={cx(styles.shiki, className)}
        dangerouslySetInnerHTML={{
          __html: hasData ? data : `<pre><code>${escapeHtml(safeChildren)}</code></pre>`,
        }}
        dir="ltr"
        style={style}
      />
    );
  }
);
