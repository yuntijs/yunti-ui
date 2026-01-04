import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { useThemeMode } from 'antd-style';
import React from 'react';

import { Editor } from './Editor';
import { Methods } from './Methods';
import { Toolbar } from './components/ToolBar';
import PlaygroundNodes from './nodes/PlaygroundNodes';
import { useStyles } from './style';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import { RichTextEditorMethods, RichTextEditorProps } from './types';

export type { RichTextEditorMethods, RichTextEditorProps } from './types';

export const RichTextEditor = React.forwardRef<RichTextEditorMethods, RichTextEditorProps>(
  ({ showToolbar, classname, toolbarProps, ...props }, ref) => {
    const { styles, cx } = useStyles({ autoSize: { minRows: 1 }, code: false });
    const { isDarkMode } = useThemeMode();

    const initialConfig = {
      namespace: 'RichTextEditor',
      nodes: [...PlaygroundNodes],
      onError: (error: Error) => {
        throw error;
      },
      theme: PlaygroundEditorTheme,
    };

    return (
      <LexicalComposer initialConfig={initialConfig}>
        <div className={cx(styles.wrapper, classname)} data-theme={isDarkMode ? 'dark' : 'light'}>
          {showToolbar ? <Toolbar {...toolbarProps} /> : null}
          <Editor {...props} />
          <Methods mdxRef={ref} />
        </div>
      </LexicalComposer>
    );
  }
);
