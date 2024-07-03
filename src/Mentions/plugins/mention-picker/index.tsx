import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import type { MenuRenderFn } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { LexicalTypeaheadMenuPlugin } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import type { TextNode } from 'lexical';
import React, { memo, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

import { DEFAULT_PUNCTUATION, PRE_TRIGGER_CHARS } from '@/Mentions/constants';

import { useCheckForMentionMatch } from '../../hooks';
import type { MentionOption } from '../../types';
import { useOptions } from './hooks';
import { MentionMenu } from './menu';
import { useStyles } from './style';
import { type MentionMenuOption } from './utils';

export interface MentionPickerPluginProps {
  options?: MentionOption[];
  /**
   * The characters that trigger the mention menu. Needed to tell the plugin
   * when to call the query function.
   */
  triggers: string[];
  /**
   * If `true`, mentions can contain spaces.
   * @default true
   */
  allowSpaces?: boolean;
  /**
   * Regular expression that matches punctuation characters when looking for
   * mentions.
   *
   * In addition to spaces, these characters can appear directly after a mention.
   * E.g. `@John!` or `@John,`.
   * @default \.,\*\?\$\|#{}\(\)\^\[\]\/!%'\"~=<>_:;
   */
  punctuation?: string;
  /**
   * Regular expression that matches characters that can appear directly
   * before the trigger character.
   * @default \(
   */
  preTriggerChars?: string;
  /**
   * When mention selected, this func will be called
   */
  onSelect?: (
    option: MentionMenuOption,
    trigger: string | null,
    queryString: string | null
  ) => void;
}
export const MentionPickerPlugin: React.FC<MentionPickerPluginProps> = memo(
  ({
    triggers,
    options: allOptions = [],
    allowSpaces = true,
    punctuation = DEFAULT_PUNCTUATION,
    preTriggerChars = PRE_TRIGGER_CHARS,
    onSelect,
  }: MentionPickerPluginProps) => {
    const { styles } = useStyles({});
    const [editor] = useLexicalComposerContext();
    const { trigger, checkForMentionMatch } = useCheckForMentionMatch(triggers, {
      punctuation,
      preTriggerChars,
      allowSpaces,
    });

    const [queryString, setQueryString] = useState<string | null>(null);

    const { options } = useOptions(allOptions, queryString);

    const onSelectOption = useCallback(
      (
        selectedOption: MentionMenuOption,
        nodeToRemove: TextNode | null,
        closeMenu: () => void,
        matchingString: string
      ) => {
        onSelect?.(selectedOption, trigger, queryString);

        editor.update(() => {
          if (nodeToRemove && selectedOption?.key) {
            nodeToRemove.remove();
          }

          if (selectedOption?.onSelect) {
            selectedOption.onSelect(matchingString);
          }

          closeMenu();
        });
      },
      [editor, onSelect, queryString, trigger]
    );

    const renderMenu = useCallback<MenuRenderFn<MentionMenuOption>>(
      (anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => {
        if (anchorElementRef.current) {
          return ReactDOM.createPortal(
            <div className={styles.menuOverlay} role="menu">
              <MentionMenu
                onClick={(index, option) => {
                  if (option.disabled) return;
                  setHighlightedIndex(index);
                  selectOptionAndCleanUp(option);
                }}
                onMouseEnter={(index, option) => {
                  if (option.disabled) return;
                  setHighlightedIndex(index);
                }}
                options={options}
                queryString={queryString}
                selectedIndex={selectedIndex}
              />
            </div>,
            anchorElementRef.current
          );
        }

        return null;
      },
      [options, queryString, styles.menuOverlay]
    );

    return (
      <LexicalTypeaheadMenuPlugin
        anchorClassName={styles.anchor}
        menuRenderFn={renderMenu}
        onQueryChange={setQueryString}
        onSelectOption={onSelectOption}
        options={options}
        triggerFn={checkForMentionMatch}
      />
    );
  }
);
