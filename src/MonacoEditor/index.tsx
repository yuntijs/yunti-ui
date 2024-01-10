import { SingleMonacoEditorComponent } from '@alilc/lowcode-plugin-base-monaco-editor';
import type {
  IDiffMonacoEditorProps,
  IEditorInstance,
  IGeneralManacoEditorProps,
  ISingleMonacoEditorProps,
} from '@alilc/lowcode-plugin-base-monaco-editor/lib/helper';
import type { editor as IEditor } from 'monaco-editor';
import React, { useMemo, useState } from 'react';

import { useCdnFn } from '..';

export * from '@alilc/lowcode-plugin-base-monaco-editor/es/controller';
export * from '@alilc/lowcode-plugin-base-monaco-editor/es/monaco';

export interface BaseMonacoEditorProps extends IGeneralManacoEditorProps {
  /** Should the editor be read only. See also domReadOnly. Defaults to false. */
  readOnly?: boolean;
  /** Control the rendering of line numbers. Defaults to on. */
  lineNumbers?: 'on' | 'off' | 'relative' | 'interval' | ((lineNumber: number) => string);
  /** Control the wrapping of the editor.  Defaults to off. */
  wordWrap?: 'off' | 'on' | 'wordWrapColumn' | 'bounded';
  /** Enable custom contextmenu. Defaults to true. */
  contextmenu?: boolean;
  /** Enable the rendering of the minimap. Defaults to false. */
  minimapEnabled?: boolean;
  /** Control the version of monaco-editor be loaded. Defaults to 0.45.0 */
  version?: string;
  /** An event emitted when the content of the current model has changed. */
  onChange?: (input: string, event: any) => void;
}

export const BaseMonacoEditor: React.FC<
  BaseMonacoEditorProps & {
    /** Only for BaseMonacoEditor. */
    type?: 'single' | 'diff';
  }
> = props => {
  const {
    type = 'single',
    editorDidMount,
    readOnly = false,
    lineNumbers = 'on',
    wordWrap = 'off',
    contextmenu = true,
    minimapEnabled = false,
    version = '0.45.0',
    requireConfig: requireConfigFromProps = {},
    options,
    onChange,
    ...otherProps
  } = props;

  const [editorInstance, setEditorInstance] = useState<IEditorInstance>();
  const handleEditorDidMount: BaseMonacoEditorProps['editorDidMount'] = (monaco, editor) => {
    setEditorInstance(editor);
    editorDidMount?.(monaco, editor);
    // add onChange event for diff editor
    if (type === 'diff') {
      const { modified } = editor.getModel() as IEditor.IDiffEditorModel;
      modified.onDidChangeContent(event => {
        onChange?.(modified.getValue(), event);
      });
    }
  };

  // @Todo: auto change light/dark theme
  const editorOptions = useMemo(() => {
    const newOps = Object.assign({}, options, {
      readOnly,
      lineNumbers,
      wordWrap,
      contextmenu,
      minimap:
        minimapEnabled === undefined
          ? options?.minimap
          : Object.assign({}, options?.minimap, {
              enabled: minimapEnabled,
            }),
    });
    editorInstance?.updateOptions(newOps);
    return newOps;
  }, [readOnly, lineNumbers, wordWrap, contextmenu, minimapEnabled, options]);

  const genCdnUrl = useCdnFn();

  const requireConfig = useMemo(() => {
    return Object.assign({}, requireConfigFromProps, {
      paths: {
        vs: genCdnUrl({
          path: 'min/vs',
          pkg: 'monaco-editor',
          version,
        }),
        ...requireConfigFromProps.paths,
      },
    });
  }, [requireConfigFromProps, version]);

  const Editor =
    type === 'diff' ? SingleMonacoEditorComponent.MonacoDiffEditor : SingleMonacoEditorComponent;
  return (
    <Editor
      editorDidMount={handleEditorDidMount}
      onChange={onChange}
      options={editorOptions}
      requireConfig={requireConfig}
      {...otherProps}
    />
  );
};

export type MonacoEditorProps = ISingleMonacoEditorProps & BaseMonacoEditorProps;

export const MonacoEditor: React.FC<MonacoEditorProps> = props => {
  return <BaseMonacoEditor {...props} type="single" />;
};

export type MonacoDiffEditorProps = IDiffMonacoEditorProps &
  BaseMonacoEditorProps & {
    /** Render the differences in one editor. Defaults to off, render the differences in two side-by-side editors */
    inlineView?: 'on' | 'off' | 'auto';
  };

export const MonacoDiffEditor: React.FC<MonacoDiffEditorProps> = props => {
  const { inlineView = 'off', options, ...otherProps } = props;
  return (
    <BaseMonacoEditor
      options={Object.assign(
        {
          useInlineViewWhenSpaceIsLimited: inlineView === 'on' || inlineView === 'auto',
          renderSideBySide: inlineView === 'off' || inlineView === 'auto',
        },
        options
      )}
      {...otherProps}
      type="diff"
    />
  );
};
