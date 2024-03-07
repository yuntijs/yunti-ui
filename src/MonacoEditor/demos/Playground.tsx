import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { MonacoEditor, MonacoEditorProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: MonacoEditorProps | any = useControls(
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
        value: 'json',
      },
      theme: {
        options: ['vs', 'vs-dark', 'hc-light', 'hc-black'],
        value: '',
      },
      supportFullScreen: true,
      enableOutline: false,
      width: '400px',
      height: '440px',
      value: {
        rows: true,
        value: JSON.stringify(
          {
            type: 'team',
            test: {
              testPage: 'tools/testing/run-tests.htm',
              enabled: true,
            },
            search: {
              excludeFolders: [
                '.git',
                'node_modules',
                'tools/bin',
                'tools/counts',
                'tools/policheck',
                'tools/tfs_build_extensions',
                'tools/testing/jscoverage',
                'tools/testing/qunit',
                'tools/testing/chutzpah',
                'server.net',
              ],
            },
          },
          null,
          2
        ),
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <MonacoEditor {...control} />
    </StoryBook>
  );
};
