import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { JsonViewer, JsonViewerProps } from '@yuntijs/ui';

import { largeJson } from './data/large-json';

export default () => {
  const store = useCreateStore();
  const options: JsonViewerProps | any = useControls(
    {
      type: {
        options: ['ghost', 'block', 'pure'],
        value: 'block',
      },
      theme: {
        options: ['default', 'a11y', 'github', 'vscode', 'atom', 'winter-is-coming'],
        value: 'default',
      },
      fullFeatured: false,
      title: 'json',
      collapseStringMode: {
        options: ['directly', 'word', 'address'],
        value: 'directly',
      },
      collapsed: {
        options: [0, 1, 2, 3, true, false],
        value: 2,
      },
      displaySize: {
        options: [true, false, 0, 1, 2, 3, 'collapsed', 'expanded'],
        value: 'collapsed',
      },
      matchesURL: true,
      displayArrayIndex: true,
      ignoreLargeArray: false,
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <JsonViewer {...options} src={largeJson} style={{ ...options.style, width: '100%' }} />
    </StoryBook>
  );
};
