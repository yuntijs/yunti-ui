import { LexicalComposer } from '@lexical/react/LexicalComposer';
import React from 'react';

import { Editor } from './Editor';
import { Methods } from './Methods';
import PlaygroundNodes from './nodes/PlaygroundNodes';
import { useStyles } from './style';
import { RichTextEditorMethods, RichTextEditorProps } from './types';

export { RichTextEditorMethods, RichTextEditorProps } from './types';

export const RichTextEditor = React.forwardRef<RichTextEditorMethods, RichTextEditorProps>(
  ({ ...props }, ref) => {
    const { styles, cx } = useStyles({ autoSize: { minRows: 1 }, code: false });

    const initialConfig = {
      namespace: 'RichTextEditor',
      nodes: [...PlaygroundNodes],
      onError: (error: Error) => {
        throw error;
      },
    };

    return (
      <LexicalComposer initialConfig={initialConfig}>
        <div className={cx(styles.wrapper, props?.classNames?.wrapper)}>
          <Editor {...props} />
          <Methods mdxRef={ref} />
        </div>
      </LexicalComposer>
    );
  }
);
