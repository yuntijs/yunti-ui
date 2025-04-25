import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { FullFeaturedHighlighterProps, Highlighter } from '@yuntijs/ui';

import { themeMap } from '@/hooks/themeMap';

const code = `export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}`;

export default () => {
  const store = useCreateStore();
  const options: FullFeaturedHighlighterProps | any = useControls(
    {
      fileName: '',
      children: {
        rows: true,
        value: code,
      },
      language: 'tsx',
      allowChangeLanguage: false,
      theme: {
        options: themeMap,
        value: 'slack-ochin',
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Highlighter fullFeatured {...options} style={{ ...options.style, width: '100%' }} />
    </StoryBook>
  );
};
