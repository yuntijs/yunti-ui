import { Icon } from '@lobehub/ui';
import { Button } from 'antd';
import type { Variant } from 'antd/es/config-provider';
import { Maximize2, Minimize2 } from 'lucide-react';
import type { IDisposable, editor } from 'monaco-editor';
import React, { LegacyRef, useCallback, useEffect, useMemo, useRef } from 'react';

import {
  IDiffMonacoEditorProps,
  INITIAL_OPTIONS,
  ISingleMonacoEditorProps,
  WORD_EDITOR_INITIALIZING,
  useEditor,
  useFullScreen,
} from './helper';
import { useStyles } from './style';

export * from './controller';
export * from './monaco';

function noop() {}

const SingleMonacoEditor: React.FC<ISingleMonacoEditorProps & { variant?: Variant }> = props => {
  const {
    onChange,
    onBlur,
    enableOutline,
    width,
    height,
    language,
    supportFullScreen,
    onFullScreenChange,
  } = props;
  const onChangeRef = useRef(onChange);
  const onBlurRef = useRef(onBlur);

  const { isEditorReady, focused, loading, containerRef, monacoRef, editorRef, valueRef } =
    useEditor<editor.IStandaloneCodeEditor>('single', props);
  const subscriptionRef = useRef<IDisposable>();
  const subscriptionBlurRef = useRef<IDisposable>();

  const { isFullScreen, fullScreen } = useFullScreen(editorRef?.current);
  const { cx, styles } = useStyles({
    isFullScreen,
    minimapEnabled: props.options?.minimap?.enabled,
    variant: props.variant,
  });

  const className = cx(styles.base, props.className, {
    've-focused': focused,
    've-outline': enableOutline,
  });

  const style = useMemo(() => ({ width, height }), [width, height]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    onBlurRef.current = onBlur;
  }, [onBlur]);

  useEffect(() => {
    if (isEditorReady) {
      const editorInstance = editorRef.current;
      subscriptionRef.current?.dispose();
      subscriptionRef.current = editorInstance?.onDidChangeModelContent(event => {
        const editorValue = editorInstance?.getModel()?.getValue();

        if (valueRef.current !== editorValue) {
          onChangeRef.current?.(editorValue!, event);
        }
      });
      subscriptionBlurRef.current?.dispose();
      subscriptionBlurRef.current = editorInstance?.onDidBlurEditorText(event => {
        const editorValue = editorInstance?.getModel()?.getValue();
        onBlurRef.current?.(editorValue!, event);
      });
    }
  }, [editorRef, isEditorReady, subscriptionRef, valueRef]);

  useEffect(() => {
    return () => {
      const editorInstance = editorRef.current;
      subscriptionRef.current?.dispose();
      subscriptionBlurRef.current?.dispose();
      editorInstance?.getModel()?.dispose();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      editorRef.current?.dispose();
    };
  }, [editorRef]);

  useEffect(() => {
    if (!isEditorReady) {
      return;
    }

    const model = editorRef.current?.getModel();
    if (model) {
      monacoRef.current?.editor.setModelLanguage(model, language!);
    }
  }, [editorRef, isEditorReady, language, monacoRef]);

  const fullScreenChange = useCallback(() => {
    onFullScreenChange?.(!isFullScreen);
    fullScreen();
  }, [fullScreen, isFullScreen, onFullScreenChange]);

  return (
    <div className={className} style={props.style}>
      {loading && <span className={cx(styles.loading, 'loading')}>{WORD_EDITOR_INITIALIZING}</span>}
      <div
        className="react-monaco-editor-container"
        ref={containerRef as LegacyRef<HTMLDivElement>}
        style={style}
      >
        {supportFullScreen && (
          <Button
            className={styles.fullScreenBtn}
            icon={<Icon icon={isFullScreen ? Minimize2 : Maximize2} />}
            onClick={fullScreenChange}
            size="small"
            type="text"
          />
        )}
      </div>
    </div>
  );
};

const DiffMonacoEditor: React.FC<IDiffMonacoEditorProps & { variant?: Variant }> = props => {
  const {
    enableOutline,
    width,
    height,
    language,
    onChange,
    original,
    supportFullScreen,
    onFullScreenChange,
  } = props;
  const onChangeRef = useRef(onChange);

  const { isEditorReady, focused, loading, containerRef, monacoRef, editorRef, valueRef } =
    useEditor<editor.IStandaloneDiffEditor>('diff', props);

  const { isFullScreen, fullScreen } = useFullScreen();

  const { cx, styles } = useStyles({
    isFullScreen,
    diff: true,
    variant: props.variant,
  });

  const className = cx(styles.base, props.className, {
    've-focused': focused,
    've-outline': enableOutline,
  });
  const style = useMemo(() => ({ width, height }), [width, height]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (!isEditorReady) {
      return;
    }
    editorRef.current.getModel()?.original.setValue(original ?? '');

    const { modified } = editorRef.current.getModel() || {};
    modified?.onDidChangeContent(event => {
      const editorValue = modified.getValue();
      if (valueRef.current !== editorValue) {
        onChangeRef.current?.(editorValue, event);
      }
    });
  }, [editorRef, isEditorReady, original, valueRef]);

  useEffect(() => {
    return () => {
      editorRef.current?.getModel()?.original?.dispose();
      editorRef.current?.getModel()?.modified?.dispose();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      editorRef.current?.dispose();
    };
  }, [editorRef]);

  useEffect(() => {
    if (!isEditorReady) {
      return;
    }

    const { original: originalModel, modified: modifiedModel } =
      editorRef.current?.getModel() || {};

    monacoRef.current?.editor.setModelLanguage(originalModel!, language!);
    monacoRef.current?.editor.setModelLanguage(modifiedModel!, language!);
  }, [editorRef, isEditorReady, language, monacoRef]);

  const fullScreenChange = useCallback(() => {
    onFullScreenChange?.(!isFullScreen);
    fullScreen();
  }, [fullScreen, isFullScreen, onFullScreenChange]);

  return (
    <div className={className} style={props.style}>
      {loading && <span className={cx(styles.loading, 'loading')}>{WORD_EDITOR_INITIALIZING}</span>}
      <div
        className="react-monaco-editor-container react-monaco-editor-diff-container"
        ref={containerRef as LegacyRef<HTMLDivElement>}
        style={style}
      >
        {supportFullScreen && (
          <Button
            className={styles.fullScreenBtn}
            icon={<Icon icon={isFullScreen ? Minimize2 : Maximize2} />}
            onClick={fullScreenChange}
            size="small"
            type="text"
          />
        )}
      </div>
    </div>
  );
};

const DiffMonacoEditorComponent = Object.assign(DiffMonacoEditor, {
  displayName: 'DiffMonacoEditor',
  default: {
    width: '100%',
    height: 150,
    defaultValue: '',
    language: 'javascript',
    options: INITIAL_OPTIONS,
    editorDidMount: noop,
    editorWillMount: noop,
    onChange: noop,
    requireConfig: {},
  },
});

export const SingleMonacoEditorComponent = Object.assign(SingleMonacoEditor, {
  displayName: 'SingleMonacoEditor',
  default: {
    width: '100%',
    height: 150,
    defaultValue: '',
    language: 'javascript',
    options: INITIAL_OPTIONS,
    editorDidMount: noop,
    editorWillMount: noop,
    onChange: noop,

    requireConfig: {},
  },
  MonacoDiffEditor: DiffMonacoEditorComponent,
});

export default SingleMonacoEditorComponent;
