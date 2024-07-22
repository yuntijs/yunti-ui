import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Highlighter, HighlighterProps } from '@yuntijs/ui';

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
        options: ['site', 'large', 'normal', 'small'],
        value: 'site',
      },
      language: 'tsx',
      showLanguage: true,
      spotlight: false,
      type: {
        options: ['ghost', 'block', 'pure'],
        value: 'block',
      },
      fullFeatured: false,
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Highlighter {...options} style={{ ...options.style, width: '100%' }} />
    </StoryBook>
  );
};
