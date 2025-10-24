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
import { ConfigProvider } from 'antd';
import { EditorState } from 'lexical';
import React, { Fragment, useCallback, useEffect, useMemo, useRef } from 'react';

import LexicalContentEditable from './components/ContentEditable';
import { useActions } from './hooks/useActions';
import LexicalAutoLinkPlugin from './plugins/AutoLinkPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import { EditablePlugin } from './plugins/EditablePlugin';
import LinkPlugin from './plugins/LinkPlugin';
import { PLAYGROUND_TRANSFORMERS } from './plugins/MarkdownTransformers';
import { RichTextEditorProps } from './types';

export const Editor: React.FC<Omit<RichTextEditorProps, 'toolBarProps' | 'classname'>> = ({
  placeholder = '',
  onChange,
  defaultValue,
  readOnly,
  disabled: customDisabled,
  variant,
}) => {
  const { initiateValue, handleFocus } = useActions();
  const floatingAnchorElem = useRef<HTMLDivElement | null>(null);

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

  const { componentDisabled } = ConfigProvider.useConfig();
  const disabled = useMemo(
    () => customDisabled ?? componentDisabled,
    [componentDisabled, customDisabled]
  );
  const editable = useMemo(() => !readOnly && !disabled, [disabled, readOnly]);

  return (
    <Fragment>
      <RichTextPlugin
        ErrorBoundary={LexicalErrorBoundary}
        contentEditable={
          <div ref={floatingAnchorElem}>
            <LexicalContentEditable
              disabled={disabled}
              placeholder={placeholder}
              variant={variant}
            />
          </div>
        }
      />
      <MarkdownShortcutPlugin transformers={PLAYGROUND_TRANSFORMERS} />
      <AutoFocusPlugin defaultSelection="rootEnd" />
      <ClearEditorPlugin />
      <HashtagPlugin />
      <ListPlugin hasStrictIndent={false} />
      <CheckListPlugin />
      <TablePlugin />
      <ClickableLinkPlugin />
      <LinkPlugin hasLinkAttributes={false} />
      <HorizontalRulePlugin />
      <HistoryPlugin />
      <LexicalAutoLinkPlugin />
      <CodeHighlightPlugin />
      <TabIndentationPlugin maxIndent={7} />
      <EditablePlugin editable={editable} />
      <OnChangePlugin onChange={handleChange} />
      <SelectionAlwaysOnDisplay />
      {/* {floatingAnchorElem.current ? (
        <CodeActionMenuPlugin anchorElem={floatingAnchorElem.current} />
      ) : null} */}
    </Fragment>
  );
};
