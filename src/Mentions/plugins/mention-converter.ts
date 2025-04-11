/**
 * source:
 * https://github.com/sodenn/lexical-beautiful-mentions/blob/8d2c8fbfaa63fe0100ac9f6c4bcb61e816d14a30/plugin/src/mention-converter.ts
 */
import {
  $createTextNode,
  $getRoot,
  $isElementNode,
  $isTextNode,
  LexicalNode,
  TextNode,
} from 'lexical';

import { DEFAULT_PUNCTUATION, LENGTH_LIMIT, TRIGGERS, VALID_CHARS } from '../constants';
import { $createMentionNode } from './mention-node';

interface MentionEntry {
  type: 'mention-node';
  trigger: string;
  value: string;
}

interface TextEntry {
  type: 'custom-text';
  value: string;
}

type Entry = MentionEntry | TextEntry;

function findMentions(text: string, triggers: string[], punctuation: string) {
  const regex = new RegExp(
    '(?<=\\s|^|\\()' +
      TRIGGERS(triggers) +
      '((?:' +
      VALID_CHARS(triggers, punctuation) +
      '){1,' +
      LENGTH_LIMIT +
      '})',
    'g'
  );
  const matches: { value: string; index: number }[] = [];
  let match;
  regex.lastIndex = 0;
  while ((match = regex.exec(text)) !== null) {
    matches.push({
      value: match[0],
      index: match.index,
    });
  }
  return matches;
}

export function convertToMentionEntries(
  text: string,
  triggers: string[],
  punctuation: string
): Entry[] {
  const matches = findMentions(text, triggers, punctuation);

  const result: Entry[] = [];
  let lastIndex = 0;

  for (const { value, index } of matches) {
    // Add text before mention
    if (index > lastIndex) {
      // eslint-disable-next-line unicorn/prefer-string-slice
      const textBeforeMention = text.substring(lastIndex, index);
      result.push({ type: 'custom-text', value: textBeforeMention });
    }
    // Add mention
    const triggerRegExp = triggers.find(trigger => new RegExp(trigger).test(value));

    const match = triggerRegExp && new RegExp(triggerRegExp).exec(value);
    if (!match) {
      // should never happen since we only find mentions with the given triggers
      throw new Error('No trigger found for mention');
    }
    const trigger = match[0];

    result.push({
      type: 'mention-node',
      value: value.slice(trigger.length),
      trigger,
    });
    // Update lastIndex
    lastIndex = index + value.length;
  }

  // Add text after last mention
  if (lastIndex < text.length) {
    const textAfterMentions = text.slice(Math.max(0, lastIndex));
    result.push({ type: 'custom-text', value: textAfterMentions });
  }

  return result;
}

/**
 * Utility function that takes a string or a text nodes and converts it to a
 * list of mention and text nodes.
 *
 * 🚨 Only works for mentions without spaces. Ensure spaces are disabled
 *  via the `allowSpaces` prop.
 */
export function $convertToMentionNodes(
  textOrNode: string | TextNode,
  triggers: string[],
  punctuation = DEFAULT_PUNCTUATION
) {
  const text = typeof textOrNode === 'string' ? textOrNode : textOrNode.getTextContent();
  const entries = convertToMentionEntries(text, triggers, punctuation);
  const nodes: LexicalNode[] = [];
  for (const entry of entries) {
    if (entry.type === 'custom-text') {
      const textNode = $createTextNode(entry.value);
      if (typeof textOrNode !== 'string') {
        textNode.setFormat(textOrNode.getFormat());
      }
      nodes.push(textNode);
    } else {
      nodes.push($createMentionNode(entry.value));
    }
  }
  return nodes;
}

/**
 * Transforms text nodes containing mention strings into mention nodes.
 *
 *  🚨 Only works for mentions without spaces. Ensure spaces are disabled
 *  via the `allowSpaces` prop.
 */
export function $transformTextToMentionNodes(
  triggers: string[],
  punctuation = DEFAULT_PUNCTUATION
) {
  const root = $getRoot();
  const nodes = root.getChildren();

  const traverseNodes = (nodes: LexicalNode[]) => {
    for (const node of nodes) {
      if ($isTextNode(node)) {
        const newNodes = $convertToMentionNodes(node, triggers, punctuation);
        if (newNodes.length > 1) {
          const parent = node.getParent();
          const index = node.getIndexWithinParent();
          parent?.splice(index, 1, newNodes);
        }
      } else if ($isElementNode(node)) {
        traverseNodes(node.getChildren());
      }
    }
  };

  traverseNodes(nodes);
}
