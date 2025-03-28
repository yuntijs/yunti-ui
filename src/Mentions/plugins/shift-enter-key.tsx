import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { CAN_USE_BEFORE_INPUT, IS_APPLE_WEBKIT, IS_IOS, IS_SAFARI } from '@lexical/utils';
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  INSERT_PARAGRAPH_COMMAND,
  KEY_ENTER_COMMAND,
} from 'lexical';
import React, { useEffect } from 'react';

import type { MentionsProps } from '..';

export interface ShiftEnterKeyPluginProps {
  onPressEnter: Required<MentionsProps>['onPressEnter'];
}
export const ShiftEnterKeyPlugin: React.FC<ShiftEnterKeyPluginProps> = ({ onPressEnter }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // https://github.com/facebook/lexical/discussions/4464#discussioncomment-5833227
    editor.registerCommand<KeyboardEvent | null>(
      KEY_ENTER_COMMAND,
      event => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) {
          return false;
        }
        if (event !== null) {
          // If we have beforeinput, then we can avoid blocking
          // the default behavior. This ensures that the iOS can
          // intercept that we're actually inserting a paragraph,
          // and autocomplete, autocapitalize etc work as intended.
          // This can also cause a strange performance issue in
          // Safari, where there is a noticeable pause due to
          // preventing the key down of enter.
          if ((IS_IOS || IS_SAFARI || IS_APPLE_WEBKIT) && CAN_USE_BEFORE_INPUT) {
            return false;
          }
          event.preventDefault();
          if (event.shiftKey) {
            return editor.dispatchCommand(INSERT_PARAGRAPH_COMMAND, void 0);
          }
        }
        event?.preventDefault();
        const text = editor.read(() => $getRoot().getTextContent());
        const value = text.replaceAll('\n\n', '\n');
        onPressEnter(value, { event });
        return true;
      },
      // 优先级要低于 MentionPickerPlugin
      COMMAND_PRIORITY_LOW
    );
  }, [editor, onPressEnter]);

  return null;
};
