import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { MonacoDiffEditor, MonacoDiffEditorProps } from '@yuntijs/ui';

import { original, value } from '../data/diff';

export default () => {
  const store = useCreateStore();
  const control: MonacoDiffEditorProps = useControls(
    {
      readOnly: false,
      lineNumbers: {
        options: ['on', 'off', 'relative', 'interval'],
        value: 'on',
      },
      wordWrap: {
        options: ['off', 'on', 'wordWrapColumn', 'bounded'],
        value: 'off',
      },
      contextmenu: true,
      minimapEnabled: false,
      language: {
        options: ['css', 'html', 'javascript', 'json', 'typescript', 'yaml'],
        value: 'javascript',
      },
      theme: {
        options: ['vs', 'vs-dark', 'hc-light', 'hc-black'],
        value: '',
      },
      supportFullScreen: true,
      enableOutline: false,
      width: '400px',
      height: '560px',
      original: {
        rows: true,
        value: original,
      },
      value: {
        rows: true,
        value,
      },
      inlineView: {
        options: ['off', 'on', 'auto'],
        value: 'auto',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <MonacoDiffEditor {...control} />
    </StoryBook>
  );
};
