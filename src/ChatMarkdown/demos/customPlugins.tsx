import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { ChatMarkdown } from '@yuntijs/ui';

const code = `<think>
嗯，用户发来了一个查询，内容是“3+3=?”。看起来这是一个简单的数学问题。首先，我需要确认用户的需求是什么。他们可能是在测试我的计算能力，或者想确认一个简单的加法是否正确。

考虑到用户之前提到过解析文件，可能他们希望我能够处理文件相关的问题。但这次的问题明显是数学题，所以可能他们想切换到另一个主题。也有可能是他们想看看我是否能够处理不同类型的问题，包括简单的计算。

接下来，我需要评估我的能力范围。作为一个通用的AI，我能够处理基本的算术运算，包括加法、减法、乘法和除法。所以，3+3=6应该是正确的答案。不过，我应该确保我的回答准确无误，避免任何计算错误。

另外，用户可能是在测试我的反应速度和准确性。所以，我应该快速且准确地给出答案，同时保持友好和专业的语气。这样可以提升用户体验，让他们感到满意。

最后，考虑到用户可能后续还会问更多问题，我应该准备好处理各种类型的问题，包括复杂的数学题、编程问题、数据分析等，以展示我的广泛知识和能力。

</think>

3 + 3 = 6`;

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
