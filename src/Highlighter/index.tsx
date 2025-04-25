'use client';

import { CopyButton, type CopyButtonProps, Spotlight, Tag } from '@lobehub/ui';
import React, { ReactNode, memo } from 'react';

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
   * @description The type of the code block
   * @default 'block'
   */
  type?: 'ghost' | 'block' | 'pure';
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
  theme?: string;
}

export const Highlighter = memo<HighlighterProps>(
  ({
    fullFeatured,
    copyButtonSize = 'site',
    children,
    language,
    className,
    style,
    copyable = true,
    showLanguage = true,
    type = 'block',
    spotlight,
    allowChangeLanguage,
    fileName,
    icon,
    contentStyle,
    wrap,
    enableTransformer,
    theme,
    ...rest
  }) => {
    const { styles, cx } = useStyles(type);
    const container = cx(styles.container, wrap && styles.wrap, className);

    if (fullFeatured)
      return (
        <FullFeaturedHighlighter
          allowChangeLanguage={allowChangeLanguage}
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
          <CopyButton
            className={styles.button}
            content={children}
            placement="left"
            size={copyButtonSize}
          />
        )}
        {showLanguage && language && <Tag className={styles.lang}>{language.toLowerCase()}</Tag>}
        <div className={styles.scroller}>
          <SyntaxHighlighter
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
