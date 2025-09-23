import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import React, { useEffect } from 'react';

export const EditablePlugin: React.FC<{ editable: boolean }> = ({ editable }) => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.setEditable(editable);
  }, [editable, editor]);

  return null;
};
