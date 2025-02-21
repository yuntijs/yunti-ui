import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { ChatMarkdown, MarkdownProps } from '@yuntijs/ui';

import { content } from './data';

const thinking = `<thinking>
this is a thinking
<thinking>
`;
export default () => {
  const store = useCreateStore();
  const options: MarkdownProps | any = useControls(
    {
      children: {
        rows: true,
        value: thinking + '\n\n' + content,
      },
      variant: {
        options: ['normal', 'chat'],
        value: 'chat',
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <ChatMarkdown {...options} />
    </StoryBook>
  );
};
