import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

// eslint-disable-next-line unicorn/consistent-function-scoping
const rehypePlugin = () => (tree: Node) => {
  visit(tree, 'element', (node: any, index, parent) => {
    if (node.type === 'element' && node.tagName === 'p') {
      const children = node.children || [];
      const openTagIndex = children.findIndex(
        (child: any) => child.type === 'raw' && child.value === '<refer>'
      );
      const closeTagIndex = children.findIndex(
        (child: any) => child.type === 'raw' && child.value === '</refer>'
      );

      if (openTagIndex !== -1 && closeTagIndex !== -1 && closeTagIndex > openTagIndex) {
        const content = children.slice(openTagIndex + 1, closeTagIndex);
        const referNode = {
          children: content,
          properties: {},
          tagName: 'refer',
          type: 'element',
        };

        // Replace the entire paragraph with our new referNode node
        parent.children.splice(index, 1, referNode);
        return index; // Skip processing the newly inserted node
      }
    }
  });
};

export default rehypePlugin;
