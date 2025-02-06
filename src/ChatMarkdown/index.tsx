import { Markdown, type MarkdownProps } from '@lobehub/ui';
import React, { useMemo } from 'react';

import { markdownElements } from './MarkdownElements';
import { ThinkProps } from './MarkdownElements/AntThinking/Component';

export interface ChatMarkdownProps extends MarkdownProps {
  customComponentProps?: {
    think?: Partial<ThinkProps>;
    [k: string]: any;
  };
}

const defaultRehypePlugins = markdownElements.map(element => element.rehypePlugin);

export const ChatMarkdown: React.FC<ChatMarkdownProps> = ({
  components = {},
  rehypePlugins = [],
  customComponentProps,
  ...props
}) => {
  const allComponents = useMemo(() => {
    const defaultComponents = Object.fromEntries(
      markdownElements.map(element => [
        element.tag,
        (aprops: any) => <element.Component {...aprops} {...customComponentProps?.[element.tag]} />,
      ])
    );
    return { ...defaultComponents, ...components };
  }, [components, customComponentProps]);
  const allRehypePlugins = useMemo(
    () => [...defaultRehypePlugins, ...rehypePlugins],
    [rehypePlugins]
  );
  return <Markdown components={allComponents} rehypePlugins={allRehypePlugins} {...props} />;
};
