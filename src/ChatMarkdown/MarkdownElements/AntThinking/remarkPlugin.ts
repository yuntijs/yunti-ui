import { toMarkdown } from 'mdast-util-to-markdown';
import { SKIP, visit } from 'unist-util-visit';

export const remarkCaptureThink = () => {
  return (tree: any) => {
    visit(tree, 'html', (node, index, parent) => {
      if (node.value === '<think>') {
        const startIndex = index as number;
        let endIndex = startIndex + 1;
        let hasCloseTag = false;

        // 查找闭合标签
        while (endIndex < parent.children.length) {
          const sibling = parent.children[endIndex];
          if (sibling.type === 'html' && sibling.value === '</think>') {
            hasCloseTag = true;
            break;
          }
          endIndex++;
        }

        // 计算需要删除的节点范围
        const deleteCount = hasCloseTag
          ? endIndex - startIndex + 1
          : parent.children.length - startIndex;

        // 提取内容节点
        const contentNodes = parent.children.slice(
          startIndex + 1,
          hasCloseTag ? endIndex : undefined
        );

        // 转换为 Markdown 字符串
        const content = contentNodes
          .map((n: any) => {
            // fix https://github.com/lobehub/lobe-chat/issues/5668
            if (n.type === 'paragraph') {
              return n.children.map((child: any) => child.value).join('');
            }

            return toMarkdown(n);
          })
          .join('\n\n')
          .trim();

        // 创建自定义节点
        const thinkNode = {
          data: {
            hChildren: [{ type: 'text', value: content }],
            hName: 'think',
          },
          position: node.position,
          type: 'thinkBlock',
        };

        // 替换原始节点
        parent.children.splice(startIndex, deleteCount, thinkNode);

        // 跳过已处理的节点
        return [SKIP, startIndex + 1];
      }
    });
  };
};
