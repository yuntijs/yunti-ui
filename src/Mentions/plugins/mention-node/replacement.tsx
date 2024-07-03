import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import type { TextNode } from 'lexical';
import { $applyNodeReplacement } from 'lexical';
import React, { memo, useCallback, useEffect } from 'react';

import { MentionsOptionsMap } from '../../types';
import { decoratorTransform } from '../../utils';
import { CustomTextNode } from '../custom-text/node';
import { $createMentionNode, MentionNode } from './node';
import { MENTION_REGEX } from './utils';

export interface MentionNodePluginReplacementProps {
  optionsMap: MentionsOptionsMap;
  onInsert?: () => void;
}

export const MentionNodePluginReplacement: React.FC<MentionNodePluginReplacementProps> = memo(
  ({ optionsMap, onInsert }) => {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      if (!editor.hasNodes([MentionNode]))
        throw new Error('MentionNodePlugin: MentionNode not registered on editor');
    }, [editor]);

    const createMentionNode = useCallback(
      (textNode: TextNode): MentionNode => {
        if (onInsert) onInsert();

        const nodePathString = textNode.getTextContent().slice(2, -2);
        return $applyNodeReplacement($createMentionNode(nodePathString, optionsMap));
      },
      [onInsert, optionsMap]
    );

    const getMatch = useCallback((text: string) => {
      const matchArr = MENTION_REGEX.exec(text);

      if (matchArr === null) return null;

      const startOffset = matchArr.index;
      const endOffset = startOffset + matchArr[0].length;
      return {
        end: endOffset,
        start: startOffset,
      };
    }, []);

    const transformListener = useCallback(
      (textNode: any) => {
        return decoratorTransform(textNode, getMatch, createMentionNode);
      },
      [createMentionNode, getMatch]
    );

    useEffect(() => {
      MENTION_REGEX.lastIndex = 0;
      return mergeRegister(editor.registerNodeTransform(CustomTextNode, transformListener));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
  }
);
