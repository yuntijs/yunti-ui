import { Icon } from '@lobehub/ui';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ThemeProps, useHighlight } from '@/hooks/useHighlight';
import { DivProps } from '@/types';

import { useStyles } from './style';

export interface SyntaxHighlighterProps extends DivProps {
  children: string;
  language: string;
  enableTransformer?: boolean;
  theme?: ThemeProps;
}

export const SyntaxHighlighter = memo<SyntaxHighlighterProps>(
  ({ children, language, enableTransformer, theme, className, style }) => {
    const { styles, cx } = useStyles({ theme });

    const { data, isLoading } = useHighlight(children.trim(), language, enableTransformer, theme);

    return (
      <>
        {isLoading || !data ? (
          <div className={cx(styles.shiki, className)} style={style}>
            <pre>
              <div>{children.trim()}</div>
            </pre>
          </div>
        ) : (
          <div
            className={cx(styles.shiki, className)}
            dangerouslySetInnerHTML={{
              __html: data as string,
            }}
            style={style}
          />
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
