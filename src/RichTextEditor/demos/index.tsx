import { Button, RichTextEditor, RichTextEditorMethods, Space, message } from '@yuntijs/ui';
import { createStyles } from 'antd-style';
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


1. **基本信息**：
   - **级别**：中大型SUV
   - **能源类型**：纯电动
2. **基本信息**：
   - **级别**：中大型SUV
   - **能源类型**：纯电动
`;

export const useStyles = createStyles(({ css, token }) => {
  return {
    box: css`
      height: 500px;
    `,
    toolbar: css`
      background-color: ${token.colorBgContainer};
    `,
  };
});

export default () => {
  const ref = React.useRef<RichTextEditorMethods>(null);
  const [value, setValue] = useState('# hi');
  const [editable, setEditable] = useState(true);
  const { styles } = useStyles();

  const handleSet = useCallback(() => {
    ref.current?.setMarkdown('# hi');
  }, []);

  const handleGet = useCallback(() => {
    const a = ref.current?.getMarkdown();
    // eslint-disable-next-line no-console
    console.log(a);
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
        classname={styles.box}
        defaultValue={complexMarkdownContentToInsert}
        onChange={setValue}
        readOnly={!editable}
        ref={ref}
        showToolbar={true}
        toolbarProps={{
          classname: styles.toolbar,
        }}
        value={value}
        variant="borderless"
      />
    </>
  );
};
