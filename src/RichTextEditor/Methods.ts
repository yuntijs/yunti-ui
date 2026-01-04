import { useImperativeHandle } from 'react';

import { useActions } from './hooks/useActions';
import { RichTextEditorMethods } from './types';

export const Methods: React.FC<{ mdxRef: React.ForwardedRef<RichTextEditorMethods> }> = ({
  mdxRef,
}) => {
  const { getValue, initiateValue, handleClear, handleFocus } = useActions();

  useImperativeHandle(mdxRef, () => {
    return {
      getMarkdown: getValue,
      setMarkdown: markdown => {
        handleClear();
        initiateValue(markdown);
      },
      insertMarkdown: initiateValue,
      focus: handleFocus,
      clearMarkdown: handleClear,
    };
  }, [getValue, handleClear, handleFocus, initiateValue]);
  return null;
};
