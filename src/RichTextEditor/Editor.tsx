'use client';

import { $convertToMarkdownString } from '@lexical/markdown';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import { ClickableLinkPlugin } from '@lexical/react/LexicalClickableLinkPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { SelectionAlwaysOnDisplay } from '@lexical/react/LexicalSelectionAlwaysOnDisplay';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { EditorState } from 'lexical';
import React, { Fragment, useCallback, useEffect } from 'react';

import LexicalContentEditable from './components/ContentEditable';
import { useActions } from './hooks/useActions';
import { EditablePlugin } from './plugins/EditablePlugin';
import { PLAYGROUND_TRANSFORMERS } from './plugins/MarkdownTransformers';
import { RichTextEditorProps } from './types';

export const Editor: React.FC<RichTextEditorProps> = ({
  placeholder = '',
  onChange,
  defaultValue,
  editable = true,
  variant,
}) => {
  const { initiateValue, handleFocus } = useActions();

  useEffect(() => {
    if (defaultValue) {
      initiateValue(defaultValue);
      handleFocus();
    }
  }, [defaultValue, handleFocus, initiateValue]);

  const handleChange = useCallback(
    (editorState: EditorState) => {
      editorState.read(() => {
        const md = $convertToMarkdownString(PLAYGROUND_TRANSFORMERS, undefined, false);
        onChange?.(md);
      });
    },
    [onChange]
  );

  return (
    <Fragment>
      <RichTextPlugin
        ErrorBoundary={LexicalErrorBoundary}
        contentEditable={<LexicalContentEditable placeholder={placeholder} variant={variant} />}
      />
      <MarkdownShortcutPlugin />
      <AutoFocusPlugin />
      <ClearEditorPlugin />
      <HashtagPlugin />
      <ListPlugin />
      <CheckListPlugin />
      <TablePlugin />
      <ClickableLinkPlugin />
      <HorizontalRulePlugin />
      <HistoryPlugin />
      <TabIndentationPlugin maxIndent={7} />
      <EditablePlugin editable={editable} />
      <OnChangePlugin onChange={handleChange} />
      <SelectionAlwaysOnDisplay />
    </Fragment>
  );
};
