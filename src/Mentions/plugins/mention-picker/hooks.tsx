import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { escapeRegExp } from 'lodash-es';
import { useMemo } from 'react';

import type { MentionOption } from '../../types';
import { INSERT_MENTION_COMMAND } from '../mention-node';
import { MentionMenuOption, MentionMenuOptionInitParams } from './utils';

export const useOptions = (allOptions: MentionOption[], queryString: string | null) => {
  const [editor] = useLexicalComposerContext();
  const options = useMemo(() => {
    const _addOnselect = (option: MentionOption) => {
      const menuOption: MentionMenuOptionInitParams = {
        ...option,
        children: undefined,
        onSelect: () => {
          editor.dispatchCommand(INSERT_MENTION_COMMAND, option.value);
        },
      };
      if (option.children) {
        menuOption.children = option.children.map(o => _addOnselect(o));
      }
      return menuOption;
    };
    const menuOptions = allOptions.map(o => new MentionMenuOption(_addOnselect(o)));
    if (!queryString) {
      return menuOptions;
    }
    const regex = new RegExp(escapeRegExp(queryString), 'i');
    return menuOptions.filter(
      o => regex.test(o.label) || o.keywords?.some(keyword => regex.test(keyword))
    );
  }, [allOptions, queryString, editor]);

  return {
    options,
  };
};
