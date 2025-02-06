import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { ChatMarkdown, MarkdownProps } from '@yuntijs/ui';

import { code } from './data';

export default () => {
  const store = useCreateStore();
  const options: MarkdownProps | any = useControls(
    {
      allowHtml: true,
      children: {
        rows: true,
        value: code,
      },
      fullFeaturedCodeBlock: true,
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <ChatMarkdown
        componentProps={{
          highlight: {
            enableTransformer: true,
          },
        }}
        {...options}
      />
    </StoryBook>
  );
};
