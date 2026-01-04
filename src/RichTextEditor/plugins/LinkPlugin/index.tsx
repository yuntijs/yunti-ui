import { LinkPlugin as LexicalLinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import type { JSX } from 'react';

import { validateUrl } from '../../utils/url';

type Props = {
  hasLinkAttributes?: boolean;
};

export default function LinkPlugin({ hasLinkAttributes = false }: Props): JSX.Element {
  return (
    <LexicalLinkPlugin
      attributes={
        hasLinkAttributes
          ? {
              rel: 'noopener noreferrer',
              target: '_blank',
            }
          : undefined
      }
      validateUrl={validateUrl}
    />
  );
}
