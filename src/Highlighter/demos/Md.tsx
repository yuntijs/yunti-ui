import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
        options: ['site', 'large', 'normal', 'small'],
        value: 'site',
      },
      language: 'md',
      showLanguage: true,
      spotlight: false,
      type: {
        options: ['ghost', 'block', 'pure'],
        value: 'block',
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
