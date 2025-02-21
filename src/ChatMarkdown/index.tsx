import { Markdown, type MarkdownProps } from '@lobehub/ui';
import React, { useMemo } from 'react';

import { markdownElements } from './MarkdownElements';
import { ThinkProps } from './MarkdownElements/AntThinking/Component';
import { normalizeThinkTags } from './utils';

export interface ChatMarkdownProps extends MarkdownProps {
  customComponentProps?: {
    think?: Partial<ThinkProps>;
    [k: string]: any;
  };
}

const defaultRemarkPlugins = markdownElements.map(element => element.remarkPlugins);

export const ChatMarkdown: React.FC<ChatMarkdownProps> = ({
  components = {},
  remarkPlugins = [],
  customComponentProps,
  children,
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
  const allRemarkPlugins = useMemo(
    () => [...defaultRemarkPlugins, ...remarkPlugins],
    [remarkPlugins]
  );
  return (
    <Markdown components={allComponents} remarkPlugins={allRemarkPlugins} {...props}>
      {normalizeThinkTags(children)}
    </Markdown>
  );
};
