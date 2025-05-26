import type { LexicalNode, NodeKey, SerializedLexicalNode } from 'lexical';
import { DecoratorNode } from 'lexical';
import React from 'react';

// import type { MentionsOptionsMap } from '../../types';
import { MentionNodeComponent } from './component';

export type SerializedNode = SerializedLexicalNode & {
  variable: string;
};

export class MentionNode extends DecoratorNode<React.ReactElement> {
  __variable: string;

  static getType(): string {
    return 'mention-node';
  }

  static clone(node: MentionNode): MentionNode {
    return new MentionNode(node.__variable, node.__key);
  }

  isInline(): boolean {
    return true;
  }

  // constructor(variable: string, optionsMap?: MentionsOptionsMap, key?: NodeKey) {
  constructor(variable: string, key?: NodeKey) {
    super(key);

    this.__variable = variable;
  }

  createDOM(): HTMLElement {
    const div = document.createElement('div');
    div.style.display = 'inline-flex';
    div.style.alignItems = 'center';
    div.style.verticalAlign = 'middle';
    return div;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): React.ReactElement {
    return <MentionNodeComponent nodeKey={this.getKey()} variable={this.__variable} />;
  }

  static importJSON(serializedNode: SerializedNode): MentionNode {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const node = $createMentionNode(serializedNode.variable);

    return node;
  }

  exportJSON(): SerializedNode {
    return {
      type: 'mention-node',
      version: 1,
      variable: this.getVariable(),
    };
  }

  getVariable(): string {
    const self = this.getLatest();
    return self.__variable;
  }

  getTextContent(): string {
    return `{{${this.getVariable()}}}`;
  }
}

export function $createMentionNode(variable: string): MentionNode {
  return new MentionNode(variable);
}

export function $isMentionNode(
  node: MentionNode | LexicalNode | null | undefined
): node is MentionNode {
  return node instanceof MentionNode;
}
