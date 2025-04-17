import type { EntityMatch } from '@lexical/text';
import type { LexicalNode, TextNode } from 'lexical';
import { $createParagraphNode, $getRoot, $isTextNode, $selectAll, createCommand } from 'lexical';

import { CustomTextNode } from './plugins/custom-text/node';
import { $convertToMentionNodes } from './plugins/mention-converter';

export const INSERT_MENTION_COMMAND = createCommand('INSERT_MENTION_COMMAND');
export const DELETE_MENTION_COMMAND = createCommand('DELETE_MENTION_COMMAND');
export const CLEAR_HIDE_MENU_TIMEOUT = createCommand('CLEAR_HIDE_MENU_TIMEOUT');
export const UPDATE_MENTIONS_OPTIONS = createCommand('UPDATE_MENTIONS_OPTIONS');

export const decoratorTransform = (
  node: CustomTextNode,
  getMatch: (text: string) => null | EntityMatch,
  createNode: (textNode: TextNode) => LexicalNode
) => {
  if (!node.isSimpleText()) {
    return;
  }

  const prevSibling = node.getPreviousSibling();
  let text = node.getTextContent();
  let currentNode = node;
  let match: EntityMatch | null;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    match = getMatch(text);
    let nextText = match === null ? '' : text.slice(match.end);
    text = nextText;

    if (nextText === '') {
      const nextSibling = currentNode.getNextSibling();

      if ($isTextNode(nextSibling)) {
        nextText = currentNode.getTextContent() + nextSibling.getTextContent();
        const nextMatch = getMatch(nextText);

        if (nextMatch === null) {
          nextSibling.markDirty();
          return;
        } else if (nextMatch.start !== 0) {
          return;
        }
      }
    } else {
      const nextMatch = getMatch(nextText);

      if (nextMatch !== null && nextMatch.start === 0) {
        return;
      }
    }

    if (match === null) {
      return;
    }

    if (match.start === 0 && $isTextNode(prevSibling) && prevSibling.isTextEntity()) {
      continue;
    }

    let nodeToReplace: TextNode;

    if (match.start === 0) {
      [nodeToReplace, currentNode] = currentNode.splitText(match.end);
    } else {
      [, nodeToReplace, currentNode] = currentNode.splitText(match.start, match.end);
    }

    const replacementNode = createNode(nodeToReplace);
    nodeToReplace.replace(replacementNode);

    // eslint-disable-next-line eqeqeq
    if (currentNode == null) {
      return;
    }
  }
};

export interface TextToEditorStateOptions {
  /** 光标位置，默认为 end */
  cursor?: 'start' | 'end' | 'all';
}
export function textToEditorState(
  initialValue: string,
  triggers: string[],
  options?: TextToEditorStateOptions
) {
  return () => {
    const root = $getRoot();
    root.clear();
    const paragraph = $createParagraphNode();
    paragraph.append(...$convertToMentionNodes(initialValue, triggers));
    root.append(paragraph);

    const { cursor } = options || { cursor: 'end' };
    if (!cursor || cursor === 'end') {
      // 👇 把光标移动到文本末尾
      const lastNode = paragraph.getLastDescendant();
      if ($isTextNode(lastNode)) {
        lastNode.select(); // 选中并聚焦尾部
      }
    }
    if (cursor === 'all') {
      $selectAll();
    }
  };
}
