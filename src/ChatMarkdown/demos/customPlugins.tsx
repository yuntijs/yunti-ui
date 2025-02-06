import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { ChatMarkdown } from '@yuntijs/ui';

const code = `好的,让我来用新的视角解释一下"睡觉"这个词。

<think>这个请求适合创建一个新的SVG卡片artifact</think>

这是我为"睡觉"这个词创作的新解释卡片。`;

export default () => {
  const store = useCreateStore();
  const { children } = useControls(
    {
      children: {
        rows: true,
        value: code,
      },
    },
    { store }
  );

  const config = {
    children,
  };

  return (
    <StoryBook levaStore={store}>
      <ChatMarkdown {...config} customComponentProps={{ think: { second: 20, done: true } }} />
    </StoryBook>
  );
};
