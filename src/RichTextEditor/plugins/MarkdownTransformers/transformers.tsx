import type { ListType } from '@lexical/list';
import {
  $createListItemNode,
  $createListNode,
  $isListItemNode,
  $isListNode,
  ListItemNode,
  ListNode,
} from '@lexical/list';
import type { ElementTransformer } from '@lexical/markdown';
import { $getState, $setState, ElementNode, createState } from 'lexical';

const ORDERED_LIST_REGEX = /^(\s*)(\d+)\.\s/;
const UNORDERED_LIST_REGEX = /^(\s*)[*+-]\s/;
const CHECK_LIST_REGEX = /^(\s*)(?:[*+-]\s)?\s?(\[(\s|x)?])\s/i;

const listMarkerState = createState('mdListMarker', {
  parse: v => (typeof v === 'string' && /^[*+-]$/.test(v) ? v : '-'),
});

const LIST_INDENT_SIZE = 2;

function getIndent(whitespaces: string): number {
  const tabs = whitespaces.match(/\t/g);
  const spaces = whitespaces.match(/ /g);

  let indent = 0;
  if (tabs) {
    indent += tabs.length;
  }

  if (spaces) {
    indent += Math.floor(spaces.length / LIST_INDENT_SIZE);
  }

  return indent;
}

const listReplace = (listType: ListType): ElementTransformer['replace'] => {
  return (parentNode, children, match, isImport) => {
    const previousNode = parentNode.getPreviousSibling();
    const nextNode = parentNode.getNextSibling();
    const listItem = $createListItemNode(listType === 'check' ? match[3] === 'x' : undefined);
    const firstMatchChar = match[0].trim()[0];
    const listMarker =
      (listType === 'bullet' || listType === 'check') &&
      firstMatchChar === listMarkerState.parse(firstMatchChar)
        ? firstMatchChar
        : undefined;
    if ($isListNode(nextNode) && nextNode.getListType() === listType) {
      if (listMarker) {
        $setState(nextNode, listMarkerState, listMarker);
      }
      const firstChild = nextNode.getFirstChild();
      if (firstChild === null) {
        // should never happen, but let's handle gracefully, just in case.
        nextNode.append(listItem);
      } else {
        firstChild.insertBefore(listItem);
      }
      parentNode.remove();
    } else if ($isListNode(previousNode) && previousNode.getListType() === listType) {
      if (listMarker) {
        $setState(previousNode, listMarkerState, listMarker);
      }
      previousNode.append(listItem);
      parentNode.remove();
    } else {
      const list = $createListNode(listType, listType === 'number' ? Number(match[2]) : undefined);
      if (listMarker) {
        $setState(list, listMarkerState, listMarker);
      }
      list.append(listItem);
      parentNode.replace(list);
    }
    listItem.append(...children);
    if (!isImport) {
      listItem.select(0, 0);
    }
    const indent = getIndent(match[1]);
    if (indent) {
      listItem.setIndent(indent);
    }
  };
};

const $listExport = (
  listNode: ListNode,
  exportChildren: (node: ElementNode) => string,
  depth: number
): string => {
  const output = [];
  const children = listNode.getChildren();
  let index = 0;
  for (const listItemNode of children) {
    if ($isListItemNode(listItemNode)) {
      if (listItemNode.getChildrenSize() === 1) {
        const firstChild = listItemNode.getFirstChild();
        if ($isListNode(firstChild)) {
          output.push($listExport(firstChild, exportChildren, depth + 1));
          continue;
        }
      }
      const indent = ' '.repeat(depth * LIST_INDENT_SIZE);
      const listType = listNode.getListType();
      const listMarker = $getState(listNode, listMarkerState);
      let prefix = listMarker + ' ';
      if (listType === 'number') {
        prefix = `${listNode.getStart() + index}. `;
      } else if (listType === 'check') {
        prefix = `${listMarker} [${listItemNode.getChecked() ? 'x' : ' '}] `;
      }
      // const prefix =
      //   listType === 'number'
      //     ? `${listNode.getStart() + index}. `
      //     : listType === 'check'
      //       ? `${listMarker} [${listItemNode.getChecked() ? 'x' : ' '}] `
      //       : listMarker + ' ';
      output.push(indent + prefix + exportChildren(listItemNode));
      index++;
    }
  }

  return output.join('\n');
};

export const UNORDERED_LIST: ElementTransformer = {
  dependencies: [ListNode, ListItemNode],
  export: (node, exportChildren) => {
    return $isListNode(node) ? $listExport(node, exportChildren, 0) : null;
  },
  regExp: UNORDERED_LIST_REGEX,
  replace: listReplace('bullet'),
  type: 'element',
};

export const ORDERED_LIST: ElementTransformer = {
  dependencies: [ListNode, ListItemNode],
  export: (node, exportChildren) => {
    return $isListNode(node) ? $listExport(node, exportChildren, 0) : null;
  },
  regExp: ORDERED_LIST_REGEX,
  replace: listReplace('number'),
  type: 'element',
};

export const CHECK_LIST: ElementTransformer = {
  dependencies: [ListNode, ListItemNode],
  export: (node, exportChildren) => {
    return $isListNode(node) ? $listExport(node, exportChildren, 0) : null;
  },
  regExp: CHECK_LIST_REGEX,
  replace: listReplace('check'),
  type: 'element',
};
