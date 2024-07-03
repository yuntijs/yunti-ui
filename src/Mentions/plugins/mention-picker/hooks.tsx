import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useMemo } from 'react';

import type { MentionOption } from '../../types';
import { INSERT_MENTION_COMMAND } from '../mention-node';
import { MentionMenuOption } from './utils';

export const useOptions = (allOptions: MentionOption[], queryString: string | null) => {
  const [editor] = useLexicalComposerContext();
  const options = useMemo(() => {
    const menuOptions = allOptions.map(
      o =>
        new MentionMenuOption(o.value, o.label, {
          icon: o.icon,
          onSelect: () => {
            editor.dispatchCommand(INSERT_MENTION_COMMAND, o.value);
          },
          disabled: o.disabled,
          data: o.data,
          extraElement: o.extraElement,
          keywords: o.keywords,
          keyboardShortcut: o.keyboardShortcut,
        })
    );
    if (!queryString) {
      return menuOptions;
    }
    const regex = new RegExp(queryString, 'i');
    return menuOptions.filter(
      o => regex.test(o.label) || o.keywords?.some(keyword => regex.test(keyword))
    );
  }, [allOptions, queryString, editor]);

  return {
    options,
  };
};
