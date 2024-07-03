import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { $insertNodes, COMMAND_PRIORITY_EDITOR } from 'lexical';
import React, { memo, useEffect } from 'react';

import { MentionsOptionsMap } from '../../types';
import { $createMentionNode, MentionNode } from './node';
import {
  CLEAR_HIDE_MENU_TIMEOUT,
  DELETE_MENTION_COMMAND,
  INSERT_MENTION_COMMAND,
  UPDATE_MENTIONS_OPTIONS,
} from './utils';

export * from './node';
export * from './replacement';
export * from './utils';

export interface MentionNodePluginProps {
  onInsert?: () => void;
  onDelete?: () => void;
  optionsMap: MentionsOptionsMap;
}
export const MentionNodePlugin: React.FC<MentionNodePluginProps> = memo(
  ({ optionsMap, onInsert, onDelete }) => {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      editor.update(() => {
        editor.dispatchCommand(UPDATE_MENTIONS_OPTIONS, optionsMap);
      });
    }, [editor, optionsMap]);

    useEffect(() => {
      if (!editor.hasNodes([MentionNode]))
        throw new Error('MentionsNodePlugin: MentionNode not registered on editor');

      return mergeRegister(
        editor.registerCommand(
          INSERT_MENTION_COMMAND,
          (variable: string) => {
            // eslint-disable-next-line unicorn/no-useless-undefined
            editor.dispatchCommand(CLEAR_HIDE_MENU_TIMEOUT, undefined);
            const mentionNode = $createMentionNode(variable, optionsMap);

            $insertNodes([mentionNode]);
            if (onInsert) onInsert();

            return true;
          },
          COMMAND_PRIORITY_EDITOR
        ),
        editor.registerCommand(
          DELETE_MENTION_COMMAND,
          () => {
            if (onDelete) onDelete();

            return true;
          },
          COMMAND_PRIORITY_EDITOR
        )
      );
    }, [editor, onInsert, onDelete, optionsMap]);

    return null;
  }
);
MentionNodePlugin.displayName = 'MentionNodePlugin';
