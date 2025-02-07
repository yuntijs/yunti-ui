// 预处理函数：确保 think 标签前后有两个换行符
export const normalizeThinkTags = (markdown: string) => {
  return (
    markdown
      // 确保 <think> 标签前后有两个换行符
      .replaceAll(/([^\n])\s*<think>/g, '$1\n\n<think>')
      .replaceAll(/<think>\s*([^\n])/g, '<think>\n\n$1')
      // 确保 </think> 标签前后有两个换行符
      .replaceAll(/([^\n])\s*<\/think>/g, '$1\n\n</think>')
      .replaceAll(/<\/think>\s*([^\n])/g, '</think>\n\n$1')
      // 处理可能产生的多余换行符
      .replaceAll(/\n{3,}/g, '\n\n')
  );
};
