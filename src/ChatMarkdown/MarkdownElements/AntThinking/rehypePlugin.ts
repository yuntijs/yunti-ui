import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

// eslint-disable-next-line unicorn/consistent-function-scoping
const rehypePlugin = () => (tree: Node) => {
  visit(tree, 'element', (node: any, index, parent) => {
    if (node.type === 'element' && node.tagName === 'p') {
      const children = node.children || [];
      const openTagIndex = children.findIndex(
        (child: any) => child.type === 'raw' && child.value === '<think>'
      );
      const closeTagIndex = children.findIndex(
        (child: any) => child.type === 'raw' && child.value === '</think>'
      );

      if (openTagIndex !== -1 && closeTagIndex !== -1 && closeTagIndex > openTagIndex) {
        const content = children.slice(openTagIndex + 1, closeTagIndex);
        const thinkNode = {
          children: content,
          properties: {},
          tagName: 'think',
          type: 'element',
        };

        // Replace the entire paragraph with our new thinkNode node
        parent.children.splice(index, 1, thinkNode);
        return index; // Skip processing the newly inserted node
      }
    }
  });
};

export default rehypePlugin;
