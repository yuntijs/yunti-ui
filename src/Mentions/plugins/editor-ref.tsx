import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import React, { useImperativeHandle } from 'react';

import { MentionsEditor } from '../types';

export const EditorRefPlugin: React.FC<{ editorRef?: React.ForwardedRef<MentionsEditor> }> = ({
  editorRef,
}) => {
  const [editor] = useLexicalComposerContext();
  useImperativeHandle(editorRef, () => editor);

  return null;
};
