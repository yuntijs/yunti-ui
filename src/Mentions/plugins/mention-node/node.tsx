import type { LexicalNode, NodeKey, SerializedLexicalNode } from 'lexical';
import { DecoratorNode } from 'lexical';
import React from 'react';

import type { MentionsOptionsMap } from '../../types';
import { MentionNodeComponent } from './component';

export type SerializedNode = SerializedLexicalNode & {
  variable: string;
  optionsMap: MentionsOptionsMap;
};

export class MentionNode extends DecoratorNode<JSX.Element> {
  __variable: string;
  __optionsMap: MentionsOptionsMap;

  static getType(): string {
    return 'mention-node';
  }

  static clone(node: MentionNode): MentionNode {
    return new MentionNode(node.__variable, node.__optionsMap);
  }

  isInline(): boolean {
    return true;
  }

  constructor(variable: string, optionsMap: MentionsOptionsMap, key?: NodeKey) {
    super(key);

    this.__variable = variable;
    this.__optionsMap = optionsMap;
  }

  createDOM(): HTMLElement {
    const div = document.createElement('div');
    div.style.display = 'inline-flex';
    div.style.alignItems = 'center';
    div.style.verticalAlign = 'middle';
    // div.style['align-items'] = 'center';
    // div.style['vertical-align'] = 'middle';

    return div;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): JSX.Element {
    return (
      <MentionNodeComponent
        nodeKey={this.getKey()}
        optionsMap={this.__optionsMap}
        variable={this.__variable}
      />
    );
  }

  static importJSON(serializedNode: SerializedNode): MentionNode {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const node = $createMentionNode(serializedNode.variable, serializedNode.optionsMap);

    return node;
  }

  exportJSON(): SerializedNode {
    return {
      type: 'mention-node',
      version: 1,
      variable: this.getVariable(),
      optionsMap: this.getOptionsMap(),
    };
  }

  getVariable(): string {
    const self = this.getLatest();
    return self.__variable;
  }

  getOptionsMap(): MentionsOptionsMap {
    const self = this.getLatest();
    return self.__optionsMap;
  }

  getTextContent(): string {
    return `{{${this.getVariable()}}}`;
  }
}

export function $createMentionNode(
  variable: string,
  workflowNodesMap: MentionsOptionsMap
): MentionNode {
  return new MentionNode(variable, workflowNodesMap);
}

export function $isMentionNode(
  node: MentionNode | LexicalNode | null | undefined
): node is MentionNode {
  return node instanceof MentionNode;
}
