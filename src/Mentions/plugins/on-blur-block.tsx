import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { BLUR_COMMAND, COMMAND_PRIORITY_EDITOR, FOCUS_COMMAND, KEY_ESCAPE_COMMAND } from 'lexical';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { CLEAR_HIDE_MENU_TIMEOUT } from './mention-node';

type OnBlurBlockPluginProps = {
  onBlur?: () => void;
  onFocus?: () => void;
};
export const OnBlurBlockPlugin: FC<OnBlurBlockPluginProps> = ({ onBlur, onFocus }) => {
  const [editor] = useLexicalComposerContext();

  const ref = useRef<any>(null);

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        CLEAR_HIDE_MENU_TIMEOUT,
        () => {
          if (ref.current) {
            clearTimeout(ref.current);
            ref.current = null;
          }
          return true;
        },
        COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand(
        BLUR_COMMAND,
        (_payload: any, _editor: any) => {
          ref.current = setTimeout(() => {
            editor.dispatchCommand(
              KEY_ESCAPE_COMMAND,
              new KeyboardEvent('keydown', { key: 'Escape' })
            );
          }, 200);

          if (onBlur) onBlur();

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand(
        FOCUS_COMMAND,
        () => {
          if (onFocus) onFocus();
          return true;
        },
        COMMAND_PRIORITY_EDITOR
      )
    );
  }, [editor, onBlur, onFocus]);

  return null;
};
