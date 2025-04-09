import { type InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ConfigProvider } from 'antd';
// @Todo: 升级 0.25.0 后，ops-console 使用的时候出现了只输入 / 无法触发的问题
import { $getRoot, TextNode } from 'lexical';
import React, { forwardRef, useMemo } from 'react';

import { isBrowser } from '@/utils/tools';

import { CustomTextNode } from './plugins/custom-text/node';
import { EditablePlugin } from './plugins/editable';
import { EditorRefPlugin } from './plugins/editor-ref';
import {
  MentionNode,
  MentionNodePlugin,
  MentionNodePluginReplacement,
} from './plugins/mention-node';
import { MentionPickerPlugin, type MentionPickerPluginProps } from './plugins/mention-picker';
import { OnBlurBlockPlugin } from './plugins/on-blur-block';
import { ShiftEnterKeyPlugin } from './plugins/shift-enter-key';
import { MentionsConfigProvider } from './provider';
import { useStyles } from './style';
import {
  AutoSize,
  MentionOption,
  MentionsEditor,
  MentionsEditorState,
  MentionsOptionsMap,
} from './types';
import { textToEditorState } from './utils';

export * from './types';
export * from './utils';

export interface MentionsProps extends MentionPickerPluginProps {
  className?: string;
  classNames?: {
    wrapper?: string;
    menuOverlay?: string;
  };
  wrapperClassname?: string;
  placeholder?: React.ReactNode;
  style?: React.CSSProperties;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (text: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  /**
   * 按下回车的回调，指定后会改变回车的默认行为，换行需要使用 shift + enter
   */
  onPressEnter?: (value: string, { event }: { event: KeyboardEvent | null }) => void;
  /**
   * 用户输入 trigger 后的回调
   */
  onTrigger?: (trigger: string) => void;
  variant?: 'outlined' | 'filled' | 'borderless';
  autoSize?: AutoSize;
  code?: boolean;
  getPopContainer?: () => HTMLElement;
}

export const Mentions = forwardRef<MentionsEditor, MentionsProps>(
  (
    {
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
      onPressEnter,
      onTrigger,
    },
    ref
  ) => {
    const { componentDisabled } = ConfigProvider.useConfig();
    const { styles, cx } = useStyles({ autoSize, code });

    const disabled = useMemo(
      () => customDisabled ?? componentDisabled,
      [componentDisabled, customDisabled]
    );
    const editable = useMemo(() => !readOnly && !disabled, [disabled, readOnly]);
    const initialConfig = useMemo<InitialConfigType>(
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
        editorState: textToEditorState(value || defaultValue || '', triggers),
        onError: (error: Error) => {
          throw error;
        },
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );

    const handleEditorChange = (editorState: MentionsEditorState) => {
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
                onOpen={resolution =>
                  onTrigger?.(resolution.match?.replaceableString ?? triggers[0])
                }
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
            <EditorRefPlugin editorRef={ref} />
            {onPressEnter && <ShiftEnterKeyPlugin onPressEnter={onPressEnter} />}
          </div>
        </MentionsConfigProvider>
      </LexicalComposer>
    );
  }
);
