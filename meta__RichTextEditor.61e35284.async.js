"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[584],{10998:function(u,t,n){var e;n.r(t),n.d(t,{demos:function(){return h}});var a=n(90228),s=n.n(a),l=n(87999),i=n.n(l),r=n(52136),c=n(77371),m=n(55383),h={"richtexteditor-demo-demos":{component:r.memo(r.lazy(function(){return n.e(2043).then(n.bind(n,26861))})),asset:{type:"BLOCK",id:"richtexteditor-demo-demos",refAtomIds:["RichTextEditor"],dependencies:{"index.tsx":{type:"FILE",value:n(12582).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"},"antd-style":{type:"NPM",value:"3.7.1"},react:{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":c,"antd-style":m,react:e||(e=n.t(r,2))},renderOpts:{compile:function(){var f=i()(s()().mark(function v(){var d,_=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(6768).then(n.bind(n,6768));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,_));case 3:case"end":return o.stop()}},v)}));function y(){return f.apply(this,arguments)}return y}()}}}},55383:function(u,t,n){n.r(t),n.d(t,{StyleProvider:function(){return e.V9},ThemeProvider:function(){return e.f6},createGlobalStyle:function(){return e.vJ},createInstance:function(){return e.Fs},createStyles:function(){return e.kc},createStylish:function(){return e.Yz},css:function(){return e.iv},cx:function(){return e.cx},extractStaticStyle:function(){return e.Y2},injectGlobal:function(){return e.hi},keyframes:function(){return e.F4},setupStyled:function(){return e.Us},styleManager:function(){return e.Rr},useAntdStylish:function(){return a.n},useAntdTheme:function(){return s.A},useAntdToken:function(){return l.S},useResponsive:function(){return i.F},useTheme:function(){return e.Fg},useThemeMode:function(){return r.r}});var e=n(75555),a=n(79171),s=n(83047),l=n(46117),i=n(7807),r=n(23856)},3073:function(u,t,n){n.r(t),n.d(t,{texts:function(){return e}});const e=[]},12582:function(u,t){t.Z=`import { Button, RichTextEditor, RichTextEditorMethods, Space, message } from '@yuntijs/ui';
import { createStyles } from 'antd-style';
import React, { useCallback, useState } from 'react';

const complexMarkdownContentToInsert = \`
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

> The overriding design goal for Markdown\u2019s formatting syntax is to make it as readable as possible.
> The idea is that a Markdown-formatted document should be publishable as-is, as plain text,
> without looking like it\u2019s been marked up with tags or formatting instructions.

### Table

| Syntax      | Description   | Profit |
| ----------- | ------------- | ------:|
| Header      | Title         | 50     |
| Paragraph   | Text *italic*   | 70     |


1. **\u57FA\u672C\u4FE1\u606F**\uFF1A
   - **\u7EA7\u522B**\uFF1A\u4E2D\u5927\u578BSUV
   - **\u80FD\u6E90\u7C7B\u578B**\uFF1A\u7EAF\u7535\u52A8
2. **\u57FA\u672C\u4FE1\u606F**\uFF1A
   - **\u7EA7\u522B**\uFF1A\u4E2D\u5927\u578BSUV
   - **\u80FD\u6E90\u7C7B\u578B**\uFF1A\u7EAF\u7535\u52A8
\`;

export const useStyles = createStyles(({ css, token }) => {
  return {
    box: css\`
      height: 500px;
    \`,
    toolbar: css\`
      background-color: \${token.colorBgContainer};
    \`,
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
        <Button onClick={handleSet}>\u91CD\u7F6E</Button>
        <Button onClick={handleGet}>\u83B7\u53D6</Button>
        <Button onClick={handleClear}>\u6E05\u7A7A</Button>
        <Button onClick={handleFocus}>Focus</Button>
        <Button onClick={() => setEditable(pre => !pre)}>
          {editable ? '\u53EF\u7F16\u8F91\u72B6\u6001' : '\u53EA\u8BFB\u72B6\u6001'}
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
`}}]);
