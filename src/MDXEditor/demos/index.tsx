import '@mdxeditor/editor/style.css';
import { Button, MDXEditor, MDXEditorMethods, Space, message } from '@yuntijs/ui';
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

* [x] Walk the dog
* [ ] Watch movie
* [ ] Have dinner with family

... an all empty list

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible.
> The idea is that a Markdown-formatted document should be publishable as-is, as plain text,
> without looking like it’s been marked up with tags or formatting instructions.

* [ ] Walk the dog
* [ ] Watch movie
* [ ] Have dinner with family

### Table

| Syntax      | Description   | Profit |
| ----------- | ------------- | ------:|
| Header      | Title         | 50     |
| Paragraph   | Text *italic*   | 70     |
`;

export default () => {
  const ref = React.useRef<MDXEditorMethods>(null);
  const [value, setValue] = useState('# hi');

  const handleSet = useCallback(() => {
    ref.current?.setMarkdown(complexMarkdownContentToInsert);
  }, []);

  const handleGet = useCallback(() => {
    const a = ref.current?.getMarkdown();
    message.info(a);
  }, []);

  const handleFocus = useCallback(() => {
    ref.current?.focus();
  }, []);

  return (
    <>
      <Space>
        <Button onClick={handleSet}>重置</Button>
        <Button onClick={handleGet}>获取</Button>
        <Button onClick={handleFocus}>Focus</Button>
      </Space>
      <MDXEditor autoFocus={true} onChange={setValue} ref={ref} value={value} />
    </>
  );
};
