import { memo } from 'react';

import { ThemeProps } from '@/hooks/useHighlight';
import { DivProps } from '@/types';

import { StaticRenderer } from './StaticRenderer';
import StreamRenderer from './StreamRenderer';

export interface SyntaxHighlighterProps extends DivProps {
  children: string;
  language: string;
  enableTransformer?: boolean;
  theme?: ThemeProps;
  animated?: boolean;
}

export const SyntaxHighlighter = memo<SyntaxHighlighterProps>(
  ({ children, animated, ...props }) => {
    if (animated) {
      return <StreamRenderer {...props}>{children}</StreamRenderer>;
    }
    return <StaticRenderer {...props}>{children}</StaticRenderer>;
  }
);
