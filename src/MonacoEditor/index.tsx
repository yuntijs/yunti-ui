import type { Monaco } from '@monaco-editor/loader';
import { useThemeMode } from 'antd-style';
import type { Variant } from 'antd/es/config-provider';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { themeMap } from '@/hooks/themeMap';

import { useCdnFn } from '../ConfigProvider';
import { SingleMonacoEditorComponent } from './base';
import type {
  IDiffMonacoEditorProps,
  IEditorInstance,
  IGeneralManacoEditorProps,
  ISingleMonacoEditorProps,
} from './base/helper';

// @Todo: Controller SSR error: https://github.com/alibaba/lowcode-plugins/blob/main/packages/base-monaco-editor/src/controller.ts#L33
export { type EditorMeta, Controller as MonacoController } from './base/controller';

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
  /** Variants of Editor, Defaults to outlined.  */
  variant?: Variant;
}

export const BaseMonacoEditor: React.FC<
  BaseMonacoEditorProps & {
    /** Only for BaseMonacoEditor. */
    type?: 'single' | 'diff';
    /** Is show fullscreen button */
    supportFullScreen?: boolean;
  }
> = props => {
  const {
    type = 'single',
    editorDidMount,
    readOnly = false,
    lineNumbers = 'on',
    wordWrap = 'off',
    contextmenu = true,
    language,
    theme: themeFromProps,
    minimapEnabled = false,
    version = '0.52.2',
    requireConfig: requireConfigFromProps = {},
    options,
    className,
    supportFullScreen,
    ...otherProps
  } = props;

  const editorDidMountRef = useRef(editorDidMount);
  useEffect(() => {
    editorDidMountRef.current = editorDidMount;
  }, [editorDidMount]);

  const { isDarkMode } = useThemeMode();
  const theme = useMemo(() => {
    if (themeFromProps && themeMap.includes(themeFromProps)) {
      return themeFromProps;
    }
    if (language && ['md', 'markdown'].includes(language)) {
      return isDarkMode ? 'catppuccin-mocha' : 'catppuccin-latte';
    }
    if (language && ['shellsession', 'console'].includes(language)) {
      return isDarkMode ? 'material-theme-darker' : 'material-theme-lighter';
    }
    return isDarkMode ? 'slack-dark' : 'slack-ochin';
  }, [language, isDarkMode, themeFromProps]);

  const [editorInstance, setEditorInstance] = useState<IEditorInstance>();
  const handleEditorDidMount = useCallback((monaco: Monaco, editor: IEditorInstance) => {
    setEditorInstance(editor);
    editorDidMountRef.current?.(monaco, editor);
  }, []);

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
  }, [options, readOnly, lineNumbers, wordWrap, contextmenu, minimapEnabled, editorInstance]);

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
  }, [genCdnUrl, requireConfigFromProps, version]);

  if (type !== 'diff') {
    return (
      <SingleMonacoEditorComponent
        className={className}
        editorDidMount={handleEditorDidMount}
        language={language}
        options={editorOptions}
        requireConfig={requireConfig}
        supportFullScreen={editorInstance && supportFullScreen}
        theme={theme}
        {...otherProps}
      />
    );
  }

  return (
    <SingleMonacoEditorComponent.MonacoDiffEditor
      className={className}
      editorDidMount={handleEditorDidMount}
      language={language}
      options={editorOptions}
      requireConfig={requireConfig}
      supportFullScreen={editorInstance && supportFullScreen}
      theme={theme}
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
