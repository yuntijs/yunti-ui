import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Highlighter, HighlighterProps } from '@yuntijs/ui';

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
  const options: HighlighterProps | any = useControls(
    {
      children: {
        rows: true,
        value: code,
      },
      copyable: true,
      copyButtonSize: {
        options: ['large', 'normal', 'small'],
        value: 'small',
      },
      language: 'tsx',
      showLanguage: true,
      spotlight: false,
      fullFeatured: false,
      wrap: false,
      theme: {
        options: themeMap,
        value: 'slack-ochin',
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Highlighter {...options} style={{ ...options.style, width: '100%' }} />
    </StoryBook>
  );
};
