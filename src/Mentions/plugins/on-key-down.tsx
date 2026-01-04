import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { COMMAND_PRIORITY_LOW, KEY_DOWN_COMMAND } from 'lexical';
import React, { useEffect, useRef } from 'react';

import type { MentionsProps } from '..';

export interface OnKeyDownPluginProps {
  onKeyDown: Required<MentionsProps>['onKeyDown'];
}
export const OnKeyDownPlugin: React.FC<OnKeyDownPluginProps> = ({ onKeyDown }) => {
  const [editor] = useLexicalComposerContext();
  const onKeyDownRef = useRef(onKeyDown);

  useEffect(() => {
    onKeyDownRef.current = onKeyDown;
  }, [onKeyDown]);

  useEffect(() => {
    // https://github.com/facebook/lexical/discussions/4464#discussioncomment-5833227
    editor.registerCommand<KeyboardEvent | null>(
      KEY_DOWN_COMMAND,
      (event: any) => {
        // 这里把 onKeyDown 放在下一次事件循环中触发，是为了避免跟 Lexical 还未结束的输入等事务发生冲突
        if (window.queueMicrotask === undefined) {
          setTimeout(() => {
            onKeyDownRef.current(event);
          }, 0);
        } else {
          queueMicrotask(() => {
            onKeyDownRef.current(event);
          });
        }
        return false;
      },
      COMMAND_PRIORITY_LOW
    );
  }, [editor]);

  return null;
};
