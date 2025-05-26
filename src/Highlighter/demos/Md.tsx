import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Highlighter, HighlighterProps } from '@yuntijs/ui';

import { content } from '../../EditableMessage/demos/data';

export default () => {
  const store = useCreateStore();
  const options: HighlighterProps | any = useControls(
    {
      children: {
        rows: true,
        value: content,
      },
      copyable: true,
      copyButtonSize: {
        options: ['large', 'normal', 'small'],
        value: 'small',
      },
      language: 'md',
      showLanguage: true,
      spotlight: false,
      variant: {
        options: ['filled', 'outlined', 'borderless'],
        value: 'filled',
      },
      fullFeatured: false,
      wrap: false,
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Highlighter {...options} style={{ ...options.style, width: '100%' }} />
    </StoryBook>
  );
};
