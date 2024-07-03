/* eslint-disable unicorn/no-useless-undefined */
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import type { MenuTextMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { useLexicalNodeSelection } from '@lexical/react/useLexicalNodeSelection';
import { mergeRegister } from '@lexical/utils';
import type { LexicalCommand } from 'lexical';
import {
  $getNodeByKey,
  $getSelection,
  $isDecoratorNode,
  $isNodeSelection,
  COMMAND_PRIORITY_LOW,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
} from 'lexical';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Dispatch, RefObject, SetStateAction } from 'react';

import { LENGTH_LIMIT, TRIGGERS, VALID_CHARS, VALID_JOINS } from './constants';

export type UseSelectOrDeleteHanlder = (
  nodeKey: string,
  command: LexicalCommand<undefined>
) => [RefObject<HTMLDivElement>, boolean];
export const useSelectOrDelete: UseSelectOrDeleteHanlder = (
  nodeKey: string,
  command: LexicalCommand<undefined>
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [editor] = useLexicalComposerContext();
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey);

  const handleDelete = useCallback(
    (event: KeyboardEvent) => {
      const selection = $getSelection();
      const nodes = selection?.getNodes();
      if (!isSelected && nodes?.length === 1) {
        editor.dispatchCommand(command, undefined);
      }

      if (isSelected && $isNodeSelection(selection)) {
        event.preventDefault();
        const node = $getNodeByKey(nodeKey);
        if ($isDecoratorNode(node)) {
          if (command) {
            editor.dispatchCommand(command, undefined);
          }

          node.remove();
          return true;
        }
      }

      return false;
    },
    [isSelected, nodeKey, command, editor]
  );

  const handleSelect = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      clearSelection();
      setSelected(true);
    },
    [setSelected, clearSelection]
  );

  useEffect(() => {
    const ele = ref.current;

    if (ele) ele.addEventListener('click', handleSelect);

    return () => {
      if (ele) ele.removeEventListener('click', handleSelect);
    };
  }, [handleSelect]);
  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(KEY_DELETE_COMMAND, handleDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_BACKSPACE_COMMAND, handleDelete, COMMAND_PRIORITY_LOW)
    );
  }, [editor, clearSelection, handleDelete]);

  return [ref, isSelected];
};

export type UseTriggerHandler = () => [
  RefObject<HTMLDivElement>,
  boolean,
  Dispatch<SetStateAction<boolean>>,
];
export const useTrigger: UseTriggerHandler = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setOpen(v => !v);
  }, []);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (trigger) trigger.addEventListener('click', handleOpen);

    return () => {
      if (trigger) trigger.removeEventListener('click', handleOpen);
    };
  }, [handleOpen]);

  return [triggerRef, open, setOpen];
};

// Regex used to trigger the mention menu.
function createMentionsRegex(
  triggers: string[],
  preTriggerChars: string,
  punctuation: string,
  allowSpaces: boolean
) {
  return new RegExp(
    (preTriggerChars ? `(^|\\s|${preTriggerChars})(` : '(^|\\s)(') +
      TRIGGERS(triggers) +
      '((?:' +
      VALID_CHARS(triggers, punctuation) +
      (allowSpaces ? VALID_JOINS(punctuation) : '') +
      '){0,' +
      LENGTH_LIMIT +
      '})' +
      ')$'
  );
}

export function checkForMentions(
  text: string,
  triggers: string[],
  preTriggerChars: string,
  punctuation: string,
  allowSpaces: boolean
): MenuTextMatch | null {
  const match = createMentionsRegex(triggers, preTriggerChars, punctuation, allowSpaces).exec(text);
  if (match !== null) {
    // The strategy ignores leading whitespace, but we need to know its
    // length to add it to the leadOffset
    const maybeLeadingWhitespace = match[1];
    const matchingStringWithTrigger = match[2];
    const matchingString = match[3];
    if (matchingStringWithTrigger.length > 0) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString: matchingString,
        replaceableString: matchingStringWithTrigger,
      };
    }
  }
  return null;
}

export const useCheckForMentionMatch = (
  triggers: string[],
  {
    punctuation,
    preTriggerChars,
    allowSpaces,
  }: { punctuation: string; preTriggerChars: string; allowSpaces: boolean }
) => {
  const [trigger, setTrigger] = useState<string | null>(null);

  const checkForMentionMatch = useCallback(
    (text: string) => {
      // Don't show the menu if the next character is a word character
      // const selectionInfo = $getSelectionInfo(triggers, punctuation);
      // if (selectionInfo?.isTextNode && selectionInfo.wordCharAfterCursor) {
      //   return null;
      // }

      const queryMatch = checkForMentions(
        text,
        triggers,
        preTriggerChars,
        punctuation,
        allowSpaces
      );

      if (queryMatch) {
        const { replaceableString, matchingString } = queryMatch;
        const index = replaceableString.lastIndexOf(matchingString);
        const trigger =
          index === -1
            ? replaceableString
            : replaceableString.slice(0, Math.max(0, index)) +
              replaceableString.slice(Math.max(0, index + matchingString.length));
        setTrigger(trigger || null);
        if (queryMatch.replaceableString) {
          return queryMatch;
        }
      } else {
        setTrigger(null);
      }

      return null;
    },
    [preTriggerChars, allowSpaces, punctuation, triggers]
  );

  return {
    trigger,
    checkForMentionMatch,
  };
};
