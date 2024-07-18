import { Icon } from '@lobehub/ui';
import { useThemeMode } from 'antd-style';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useHighlight } from '@/hooks/useHighlight';
import { DivProps } from '@/types';

import { useStyles } from './style';

export interface SyntaxHighlighterProps extends DivProps {
  children: string;
  language: string;
}

export const SyntaxHighlighter = memo<SyntaxHighlighterProps>(
  ({ children, language, className, style }) => {
    const { styles, cx } = useStyles();
    const { isDarkMode } = useThemeMode();

    const { data, isLoading } = useHighlight(children.trim(), language, isDarkMode);

    return (
      <>
        {isLoading || !data ? (
          <div className={cx(styles.unshiki, className)} style={style}>
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
