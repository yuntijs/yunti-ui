import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ConfigProvider } from 'antd';
// @Todo: 升级 0.25.0 后，ops-console 使用的时候出现了只输入 / 无法触发的问题
import type { EditorState } from 'lexical';
import { $getRoot, TextNode } from 'lexical';
import React, { useMemo } from 'react';

import { isBrowser } from '@/utils/tools';

import { OnBlurBlockPlugin } from './plugins/OnBlurBlockPlugin';
import { CustomTextNode } from './plugins/custom-text/node';
import { EditablePlugin } from './plugins/editable';
import {
  MentionNode,
  MentionNodePlugin,
  MentionNodePluginReplacement,
} from './plugins/mention-node';
import { MentionPickerPlugin, type MentionPickerPluginProps } from './plugins/mention-picker';
import { MentionsConfigProvider } from './provider';
import { useStyles } from './style';
import type { AutoSize, MentionOption, MentionsOptionsMap } from './types';
import { textToEditorState } from './utils';

export interface MentionsProps extends MentionPickerPluginProps {
  className?: string;
  classNames?: {
    wrapper?: string;
    menuOverlay?: string;
  };
  wrapperClassname?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (text: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  variant?: 'outlined' | 'filled' | 'borderless';
  autoSize?: AutoSize;
  code?: boolean;
  getPopContainer?: () => HTMLElement;
}

export const Mentions: React.FC<MentionsProps> = ({
  className,
  classNames,
  placeholder,
  style,
  value,
  defaultValue,
  readOnly = false,
  disabled: customDisabled,
  onChange,
  onBlur,
  onFocus,
  variant = 'outlined',
  options = [],
  autoSize,
  triggers = ['@'],
  allowSpaces,
  punctuation,
  preTriggerChars,
  onSelect,
  code = false,
  getPopContainer,
}) => {
  const { componentDisabled } = ConfigProvider.useConfig();
  const { styles, cx } = useStyles({ autoSize, code });

  const disabled = useMemo(
    () => customDisabled ?? componentDisabled,
    [componentDisabled, customDisabled]
  );
  const editable = useMemo(() => !readOnly && !disabled, [disabled, readOnly]);
  const initialConfig = useMemo(
    () => ({
      namespace: 'mentions',
      nodes: [
        CustomTextNode,
        {
          replace: TextNode,
          with: (node: TextNode) => new CustomTextNode(node.__text),
        },
        MentionNode,
      ],
      editorState: textToEditorState(value || defaultValue || ''),
      onError: (error: Error) => {
        throw error;
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleEditorChange = (editorState: EditorState) => {
    const text = editorState.read(() => $getRoot().getTextContent());
    onChange?.(text.replaceAll('\n\n', '\n'));
  };

  // @Todo: set value when value change
  // useEffect(() => {
  //   //
  // }, [value])

  const optionsMap = useMemo(() => {
    const buildMap = (_options: MentionOption[], parentIcon?: JSX.Element) => {
      return _options.reduce((acc, option) => {
        acc[option.value] = option;
        if (!acc[option.value].icon) {
          acc[option.value].icon = parentIcon;
        }

        if (option.children && option.children.length > 0) {
          const childrenMap = buildMap(option.children, option.icon);
          Object.assign(acc, childrenMap);
        }

        return acc;
      }, {} as MentionsOptionsMap);
    };
    return buildMap(options);
  }, [options]);

  const parent = useMemo(() => {
    if (!isBrowser) {
      return;
    }
    if (getPopContainer) {
      return getPopContainer();
    }
    if (document.fullscreenElement) {
      return document.fullscreenElement as HTMLElement;
    }
  }, [getPopContainer]);

  if (!isBrowser) {
    return (
      <div className={cx(styles.wrapper, classNames?.wrapper)}>
        <div
          className={cx(
            {
              [styles.root]: true,
              [styles.filled]: variant === 'filled',
              [styles.borderless]: variant === 'borderless',
              [styles.disabled]: disabled,
            },
            className
          )}
          style={style || {}}
        />
        <div className={styles.placeholder}>
          {placeholder || `输入 ${triggers.join(' 或 ')} 插入引用`}
        </div>
      </div>
    );
  }

  return (
    <LexicalComposer initialConfig={{ ...initialConfig, editable }}>
      <MentionsConfigProvider value={{ optionsMap }}>
        <div className={cx(styles.wrapper, classNames?.wrapper)}>
          <RichTextPlugin
            ErrorBoundary={LexicalErrorBoundary}
            contentEditable={
              <ContentEditable
                className={cx(
                  {
                    [styles.root]: true,
                    [styles.filled]: variant === 'filled',
                    [styles.borderless]: variant === 'borderless',
                    [styles.disabled]: disabled,
                  },
                  className
                )}
                style={style || {}}
              />
            }
            placeholder={
              <div className={styles.placeholder}>
                {placeholder || `输入 ${triggers.join(' 或 ')} 插入引用`}
              </div>
            }
          />
          {editable && (
            <MentionPickerPlugin
              allowSpaces={allowSpaces}
              onSelect={onSelect}
              options={options}
              overlayClassName={classNames?.menuOverlay}
              parent={parent}
              preTriggerChars={preTriggerChars}
              punctuation={punctuation}
              triggers={triggers}
            />
          )}
          <MentionNodePlugin />
          <MentionNodePluginReplacement />
          <HistoryPlugin />
          <OnChangePlugin onChange={handleEditorChange} />
          <OnBlurBlockPlugin onBlur={onBlur} onFocus={onFocus} />
          <EditablePlugin editable={editable} />
        </div>
      </MentionsConfigProvider>
    </LexicalComposer>
  );
};
