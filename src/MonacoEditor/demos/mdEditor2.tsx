import { MonacoEditor2 } from '@yuntijs/ui';

import { content } from '../../EditableMessage/demos/data';

export default () => {
  return (
    <MonacoEditor2
      defaultValue={content}
      enableOutline={false}
      height={400}
      language="markdown"
      onBlur={v => {
        // eslint-disable-next-line no-console
        console.log(v);
      }}
      options={{
        fontSize: 13,
        lineNumbers: 'off',
        renderLineHighlight: 'none',
        quickSuggestions: false,
        occurrencesHighlight: 'off',
        selectionHighlight: false,
        matchBrackets: 'never',
        wordWrap: 'on',
      }}
      placeholder="### this is placeholder"
      theme="vs"
      variant="borderless"
      width={740}
    />
  );
};
