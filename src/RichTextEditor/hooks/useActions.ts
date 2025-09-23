import { $convertFromMarkdownString, $convertToMarkdownString } from '@lexical/markdown';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { CLEAR_EDITOR_COMMAND } from 'lexical';
import { EditorFocusOptions } from 'lexical/LexicalEditor';
import { useCallback } from 'react';

import { PLAYGROUND_TRANSFORMERS } from '../plugins/MarkdownTransformers';

const shouldPreserveNewLinesInMarkdown = false;

export function useActions() {
  const [editor] = useLexicalComposerContext();

  const handleClear = useCallback(() => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
    editor.focus();
  }, [editor]);

  const handleEditable = useCallback(
    (isEditable: boolean) => {
      editor.setEditable(isEditable);
    },
    [editor]
  );

  const initiateValue = useCallback(
    (defaultValue: string) => {
      if (!defaultValue) return;
      editor.update(() => {
        $convertFromMarkdownString(
          defaultValue,
          PLAYGROUND_TRANSFORMERS,
          undefined,
          shouldPreserveNewLinesInMarkdown
        );
      });
    },
    [editor]
  );

  const getValue = useCallback(() => {
    const text = editor.getEditorState().read(() => {
      const md = $convertToMarkdownString(
        PLAYGROUND_TRANSFORMERS,
        undefined,
        shouldPreserveNewLinesInMarkdown
      );
      return md;
    });
    return text;
  }, [editor]);

  const handleFocus = useCallback(
    (callbackFn?: () => void, options?: EditorFocusOptions) => {
      editor.focus(callbackFn, options || { defaultSelection: 'rootEnd' });
    },
    [editor]
  );

  return {
    handleClear,
    handleEditable,
    initiateValue,
    getValue,
    handleFocus,
  };
}
