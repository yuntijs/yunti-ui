// 预处理函数：确保 think 标签前后有两个换行符
export const normalizeThinkTags = (markdown: string) => {
  const reg1 = new RegExp('([^\\n])\\s*<think>', 'g');
  const reg2 = new RegExp('<think>\\s*([^\\n])', 'g');
  const reg3 = new RegExp('([^\\n])\\s*<\\/think>', 'g');
  const reg4 = new RegExp('<\\/think>\\s*([^\\n])', 'g');
  const reg5 = new RegExp('\\n{3,}', 'g');
  return (
    (markdown || '')
      // 确保 <think> 标签前后有两个换行符
      .replaceAll(reg1, '$1\n\n<think>')
      .replaceAll(reg2, '<think>\n\n$1')
      // 确保 </think> 标签前后有两个换行符
      .replaceAll(reg3, '$1\n\n</think>')
      .replaceAll(reg4, '</think>\n\n$1')
      // 处理可能产生的多余换行符
      .replaceAll(reg5, '\n\n')
  );
};
