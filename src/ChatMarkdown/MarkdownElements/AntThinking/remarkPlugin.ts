import { SKIP, visit } from 'unist-util-visit';

export const remarkCaptureThink = () => {
  return (tree: any, file: any) => {
    // 完整原始 markdown 文本。<think> 内容直接从这里按偏移量切出原文,
    // 不再走 mdast「解析 → 再序列化」的往返 —— 那种做法一旦内容里出现
    // toMarkdown 不认识的节点(inlineMath / table 等)就会整体报错。
    const source = String(file?.value ?? '');

    visit(tree, 'html', (node, index, parent) => {
      if (node.value === '<think>') {
        const startIndex = index as number;
        let endIndex = startIndex + 1;
        let closeNode: any;

        // 查找闭合标签
        while (endIndex < parent.children.length) {
          const sibling = parent.children[endIndex];
          if (sibling.type === 'html' && sibling.value === '</think>') {
            closeNode = sibling;
            break;
          }
          endIndex++;
        }

        // 计算需要删除的节点范围
        const deleteCount = closeNode
          ? endIndex - startIndex + 1
          : parent.children.length - startIndex;

        // 直接从原始文本里切出 <think> 与 </think> 之间的内容,原样保留
        const contentStart = node.position?.end?.offset;
        const contentEnd = closeNode ? closeNode.position?.start?.offset : source.length;
        const content =
          typeof contentStart === 'number' && typeof contentEnd === 'number'
            ? source.slice(contentStart, contentEnd).trim()
            : '';

        // 创建自定义节点
        const thinkNode = {
          data: {
            hChildren: [{ type: 'text', value: content || ' ' }],
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
