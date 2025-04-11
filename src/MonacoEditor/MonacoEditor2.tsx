import { Monaco } from '@monaco-editor/loader';
import Editor, { loader } from '@monaco-editor/react';
import type { EditorProps } from '@monaco-editor/react';
import { Spin } from 'antd';
import type { Variant } from 'antd/es/config-provider';
import type { editor as IEditor } from 'monaco-editor';
import { useEffect, useRef, useState } from 'react';

import { useCdnFn } from '@/ConfigProvider';

import { useStyles } from './base/style';

export interface EditorProps2 extends EditorProps {
  onBlur?: (input: string, event: any) => void;
  placeholder?: string;
  variant?: Variant;
  enableOutline?: boolean;
  version?: string;
}

export const MonacoEditor2: React.FC<EditorProps2> = ({
  language,
  theme,
  placeholder,
  variant,
  onBlur,
  enableOutline,
  className,
  version = '0.52.2',
  options = {},
  onMount,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const editorRef = useRef<IEditor.IStandaloneCodeEditor | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [configed, setConfiged] = useState(false);

  const { cx, styles } = useStyles({
    minimapEnabled: options?.minimap?.enabled,
    variant,
  });
  const classnames = cx(styles.base, className, {
    've-focused': isFocus,
    've-outline': enableOutline,
  });
  const genCdnUrl = useCdnFn();
  useEffect(() => {
    loader.config({
      paths: {
        vs: genCdnUrl({
          path: 'min/vs',
          pkg: 'monaco-editor',
          version,
        }),
      },
    });
    setConfiged(true);
  }, [genCdnUrl, version]);

  const handleEditorDidMount = (editor: IEditor.IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editor;
    editor.onDidFocusEditorText(() => {
      setIsFocus(true);
    });
    editor.onDidBlurEditorText(event => {
      setIsFocus(false);
      const value = editorRef.current?.getModel()?.getValue();
      onBlur?.(value ?? '', event);
    });

    monaco.editor.setTheme('default-theme'); // Fix: sometimes not load the default theme
    onMount?.(editor, monaco);
    setIsMounted(true);
  };

  return (
    <Spin spinning={!configed}>
      {configed ? (
        <Editor
          className={classnames}
          language={language || 'text'}
          onMount={handleEditorDidMount}
          options={{
            domReadOnly: true,
            quickSuggestions: false,
            minimap: { enabled: false },
            lineNumbersMinChars: 1, // would change line num width
            wordWrap: 'on', // auto line wrap
            unicodeHighlight: {
              ambiguousCharacters: false,
            },
            placeholder,
            ...options,
          }}
          theme={isMounted ? theme : 'default-theme'} // sometimes not load the default theme
          {...props}
        />
      ) : null}
    </Spin>
  );
};
