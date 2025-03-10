import { MonacoEditor } from '@yuntijs/ui';

import { content } from '../../EditableMessage/demos/data';

export default () => {
  return (
    <MonacoEditor
      contextmenu={false}
      defaultValue={content}
      enableOutline={false}
      height={'calc(100vh - 80px)'}
      language="markdown"
      lineNumbers="off"
      minimapEnabled={false}
      onBlur={v => {
        // eslint-disable-next-line no-console
        console.log(v);
      }}
      options={{
        fontSize: 13,
        renderLineHighlight: 'none',
        quickSuggestions: false,
        occurrencesHighlight: 'off',
        selectionHighlight: false,
        matchBrackets: 'never',
      }}
      supportFullScreen={false}
      theme="vs"
      variant="borderless"
      width={740}
      wordWrap="wordWrapColumn"
    />
  );
};
