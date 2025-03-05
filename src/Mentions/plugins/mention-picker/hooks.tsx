import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { escapeRegExp } from 'lodash-es';
import { useCallback, useMemo } from 'react';

import type { MentionOption } from '../../types';
import { INSERT_MENTION_COMMAND } from '../mention-node';
import { MentionMenuOption, MentionMenuOptionInitParams } from './utils';

const filterOptionWithChildren = (
  option: MentionMenuOption,
  filterOption: (option: MentionMenuOption) => boolean
): MentionMenuOption => {
  option.children = option.children?.filter(o => {
    if (!o.children) {
      return filterOption(o);
    }
    const newO = filterOptionWithChildren(o, filterOption);
    return filterOption(o) || (newO.children || []).length > 0;
  });
  return option;
};

export const useOptions = (allOptions: MentionOption[], queryString: string | null) => {
  const [editor] = useLexicalComposerContext();

  const filterOption = useCallback(
    (option: MentionOption) => {
      const regex = new RegExp(escapeRegExp(queryString!), 'i');
      return (
        regex.test(option.label) || option.keywords?.some(keyword => regex.test(keyword)) || false
      );
    },
    [queryString]
  );

  const options = useMemo(() => {
    const _addOnselect = (option: MentionOption) => {
      const menuOption: MentionMenuOptionInitParams = {
        ...option,
        title: option.title || option.selectedLabel,
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
    return menuOptions
      .map(o => {
        if (!o.children) {
          return o;
        }
        return filterOptionWithChildren(o, filterOption);
      })
      .filter(o => {
        return filterOption(o) || (o.children || []).length > 0;
      });
  }, [allOptions, queryString, editor, filterOption]);

  return {
    options,
  };
};
