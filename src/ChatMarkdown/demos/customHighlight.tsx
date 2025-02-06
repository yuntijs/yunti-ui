import { ActionIcon } from '@lobehub/ui';
import { ChatMarkdown } from '@yuntijs/ui';
import { AlertCircleIcon } from 'lucide-react';

const code = `\`\`\`tsx
export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}
\`\`\`
`;

export default () => {
  return (
    <ChatMarkdown
      componentProps={{
        highlight: {
          actionsRender: ({ content, actionIconSize, language, originalNode }) => {
            return (
              <>
                {originalNode}
                <ActionIcon
                  icon={AlertCircleIcon}
                  onClick={() => alert(language + content)}
                  size={actionIconSize}
                />
              </>
            );
          },
        },
      }}
      fullFeaturedCodeBlock
    >
      {code}
    </ChatMarkdown>
  );
};
