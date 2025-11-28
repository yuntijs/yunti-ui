'use client';

import { CopyButton, type CopyButtonProps, Tag } from '@lobehub/ui';
import { Spotlight } from '@lobehub/ui/awesome';
import React, { ReactNode, memo } from 'react';

import { ThemeProps } from '@/hooks/useHighlight';
import { DivProps } from '@/types';

import { FullFeaturedHighlighter } from './FullFeatured';
import { SyntaxHighlighter } from './SyntaxHighlighter';
import { useStyles } from './style';

export interface HighlighterProps extends DivProps {
  allowChangeLanguage?: boolean;
  /**
   * @description The code content to be highlighted
   */
  children: string;
  copyButtonSize?: CopyButtonProps['size'];
  /**
   * @description Whether to show the copy button
   * @default true
   */
  copyable?: boolean;
  fileName?: string;
  fullFeatured?: boolean;
  icon?: ReactNode;
  /**
   * @description The language of the code content
   */
  language: string;
  /**
   * @description Whether to show language tag
   * @default true
   */
  showLanguage?: boolean;
  /**
   * @description Whether add spotlight background
   * @default false
   */
  spotlight?: boolean;
  /**
   * @description The variant of the code block
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'borderless';
  /**
   * @description The style of the code content
   */
  contentStyle?: React.CSSProperties;
  /**
   * @description Control text wrap
   * @default false
   */
  wrap?: boolean;
  enableTransformer?: boolean;
  theme?: ThemeProps;
  animated?: boolean;
}

export const Highlighter = memo<HighlighterProps>(
  ({
    fullFeatured,
    copyButtonSize = 'small',
    children,
    language,
    className,
    style,
    copyable = true,
    showLanguage = true,
    variant = 'filled',
    spotlight,
    allowChangeLanguage,
    fileName,
    icon,
    contentStyle,
    wrap,
    enableTransformer,
    theme,
    animated,
    ...rest
  }) => {
    const { styles, cx } = useStyles({ variant });
    const container = cx(styles.container, wrap && styles.wrap, className);

    if (fullFeatured)
      return (
        <FullFeaturedHighlighter
          allowChangeLanguage={allowChangeLanguage}
          animated={animated}
          className={className}
          contentStyle={contentStyle}
          fileName={fileName}
          icon={icon}
          language={language}
          style={style}
          theme={theme}
          {...rest}
        >
          {children}
        </FullFeaturedHighlighter>
      );

    return (
      <div className={container} data-code-type="highlighter" style={style} {...rest}>
        {spotlight && <Spotlight size={240} />}
        {copyable && (
          <CopyButton className={styles.button} content={children} size={copyButtonSize} />
        )}
        {showLanguage && language && <Tag className={styles.lang}>{language.toLowerCase()}</Tag>}
        <div className={styles.scroller}>
          <SyntaxHighlighter
            animated={animated}
            enableTransformer={enableTransformer}
            language={language?.toLowerCase()}
            style={contentStyle}
            theme={theme}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
);

export * from './FullFeatured';
export * from './SyntaxHighlighter';
