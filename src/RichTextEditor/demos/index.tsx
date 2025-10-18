import { Button, RichTextEditor, RichTextEditorMethods, Space, message } from '@yuntijs/ui';
import React, { useCallback, useState } from 'react';

const complexMarkdownContentToInsert = `
### List

* hello
* world
  * indented
  * more
* back

1. more
2. more

- [x] Walk the dog
- [ ] Watch movie
- [ ] Have dinner with family

... an all empty list

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible.
> The idea is that a Markdown-formatted document should be publishable as-is, as plain text,
> without looking like it’s been marked up with tags or formatting instructions.

### Table

| Syntax      | Description   | Profit |
| ----------- | ------------- | ------:|
| Header      | Title         | 50     |
| Paragraph   | Text *italic*   | 70     |
`;

export default () => {
  const ref = React.useRef<RichTextEditorMethods>(null);
  const [value, setValue] = useState('# hi');
  const [editable, setEditable] = useState(true);

  const handleSet = useCallback(() => {
    ref.current?.setMarkdown('# hi');
  }, []);

  const handleGet = useCallback(() => {
    const a = ref.current?.getMarkdown();
    message.info(a);
  }, []);

  const handleClear = useCallback(() => {
    ref.current?.clearMarkdown();
  }, []);

  const handleFocus = useCallback(() => {
    ref.current?.focus();
  }, []);

  return (
    <>
      <Space style={{ marginBottom: 10 }}>
        <Button onClick={handleSet}>重置</Button>
        <Button onClick={handleGet}>获取</Button>
        <Button onClick={handleClear}>清空</Button>
        <Button onClick={handleFocus}>Focus</Button>
        <Button onClick={() => setEditable(pre => !pre)}>
          {editable ? '可编辑状态' : '只读状态'}
        </Button>
      </Space>
      <RichTextEditor
        defaultValue={complexMarkdownContentToInsert}
        onChange={setValue}
        readOnly={!editable}
        ref={ref}
        showToolbar={true}
        value={value}
        variant="borderless"
      />
    </>
  );
};
