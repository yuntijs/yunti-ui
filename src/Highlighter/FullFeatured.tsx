import { ActionIcon, CopyButton } from '@lobehub/ui';
import { Select, type SelectProps } from 'antd';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ReactNode, memo, useEffect, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ThemeProps, languageMap } from '@/hooks/useHighlight';
import { DivProps } from '@/types';

import { SyntaxHighlighter } from './SyntaxHighlighter';
import { useStyles } from './style';

export interface FullFeaturedHighlighterProps extends DivProps {
  allowChangeLanguage?: boolean;
  /**
   * @description The code content to be highlighted
   */
  children: string;
  fileName?: string;
  icon?: ReactNode;
  /**
   * @description The language of the code content
   */
  language: string;
  contentStyle?: React.CSSProperties;
  enableTransformer?: boolean;
  theme?: ThemeProps;
}

const options: SelectProps['options'] = languageMap.map(item => ({
  label: item,
  value: item.toLowerCase(),
}));

export const FullFeaturedHighlighter = memo<FullFeaturedHighlighterProps>(
  ({
    children,
    language = 'markdown',
    className,
    style,
    allowChangeLanguage = false,
    fileName,
    icon,
    contentStyle,
    enableTransformer,
    theme,
    ...rest
  }) => {
    const [expand, setExpand] = useState(true);
    const [lang, setLang] = useState(language || 'markdown');
    const { styles, cx } = useStyles({ variant: 'filled', expand });
    const container = cx(styles.container, className);

    useEffect(() => {
      setLang(language);
    }, [language]);

    return (
      <Flexbox className={container} data-code-type="highlighter" style={style} {...rest}>
        <Flexbox align={'center'} className={styles.header} horizontal justify={'space-between'}>
          <ActionIcon
            icon={expand ? ChevronDown : ChevronRight}
            onClick={() => setExpand(!expand)}
            size="small"
          />
          {allowChangeLanguage && !fileName ? (
            <Select
              className={styles.select}
              onSelect={setLang}
              options={options}
              size={'small'}
              suffixIcon={false}
              value={lang.toLowerCase()}
              variant={'borderless'}
            />
          ) : (
            <Flexbox align={'center'} className={styles.select} gap={2} horizontal>
              {icon}
              <span>{fileName || lang}</span>
            </Flexbox>
          )}

          <CopyButton content={children} size="small" />
        </Flexbox>
        <SyntaxHighlighter
          enableTransformer={enableTransformer}
          language={lang?.toLowerCase()}
          style={
            expand
              ? { ...contentStyle, flex: 1 }
              : { ...contentStyle, height: 0, overflow: 'hidden' }
          }
          theme={theme}
        >
          {children}
        </SyntaxHighlighter>
      </Flexbox>
    );
  }
);

export * from './SyntaxHighlighter';
