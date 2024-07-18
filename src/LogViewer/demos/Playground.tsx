/**
 * compact: true
 */
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { LogViewer, LogViewerProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const options: LogViewerProps | any = useControls(
    {
      caseInsensitive: true,
      enableHotKeys: true,
      enableSearch: true,
      enableSearchNavigation: true,
      enableGutters: false,
      enableLineNumbers: true,
      enableLinks: false,
      enableMultilineHighlight: true,
      extraLines: 1,
      height: 520,
      selectableLines: true,
      text: {
        rows: true,
        value: '',
      },
      url: 'https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log',
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <LogViewer {...options} />
    </StoryBook>
  );
};
