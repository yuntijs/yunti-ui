import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import type { MenuRenderFn } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { LexicalTypeaheadMenuPlugin } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { ConfigProvider, Tree } from 'antd';
import type { TextNode } from 'lexical';
import { flatMap } from 'lodash-es';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { DEFAULT_PUNCTUATION, PRE_TRIGGER_CHARS } from '@/Mentions/constants';

import { useCheckForMentionMatch } from '../../hooks';
import type { MentionOption } from '../../types';
import { CLEAR_HIDE_MENU_TIMEOUT } from '../mention-node';
import { useOptions } from './hooks';
import { MentionMenu } from './menu';
import { MentionMenuItem } from './menu-item';
import { useStyles } from './style';
import { type MentionMenuOption } from './utils';

export interface MentionPickerPluginProps {
  /** The className of menu overlay */
  overlayClassName?: string;
  /** The options of menu */
  options?: MentionOption[];
  /**
   * The characters that trigger the mention menu. Needed to tell the plugin
   * when to call the query function.
   */
  triggers: string[];
  /**
   * If `true`, mentions can contain spaces.
   * @default true
   */
  allowSpaces?: boolean;
  /**
   * Regular expression that matches punctuation characters when looking for
   * mentions.
   *
   * In addition to spaces, these characters can appear directly after a mention.
   * E.g. `@John!` or `@John,`.
   * @default \.,\*\?\$\|#{}\(\)\^\[\]\/!%'\"~=<>_:;
   */
  punctuation?: string;
  /**
   * Regular expression that matches characters that can appear directly
   * before the trigger character.
   * @default \(
   */
  preTriggerChars?: string;
  /**
   * When mention selected, this func will be called
   */
  onSelect?: (
    option: MentionMenuOption,
    trigger: string | null,
    queryString: string | null
  ) => void;
}
export const MentionPickerPlugin: React.FC<MentionPickerPluginProps> = memo(
  ({
    overlayClassName,
    triggers,
    options: allOptions = [],
    allowSpaces = true,
    punctuation = DEFAULT_PUNCTUATION,
    preTriggerChars = PRE_TRIGGER_CHARS,
    onSelect,
  }: MentionPickerPluginProps) => {
    const { cx, styles } = useStyles({});
    const [editor] = useLexicalComposerContext();
    const { trigger, checkForMentionMatch } = useCheckForMentionMatch(triggers, {
      punctuation,
      preTriggerChars,
      allowSpaces,
    });

    const [queryString, setQueryString] = useState<string | null>(null);

    const { options } = useOptions(allOptions, queryString);

    const flatOptions = useMemo(() => {
      const _flattenTree = (nodes: MentionMenuOption[]): MentionMenuOption[] => {
        return flatMap(nodes, node => [
          node,
          ...(node.children ? _flattenTree(node.children) : []),
        ]);
      };
      return _flattenTree(options);
    }, [options]);

    const onSelectOption = useCallback(
      (
        selectedOption: MentionMenuOption,
        nodeToRemove: TextNode | null,
        closeMenu: () => void,
        matchingString: string
      ) => {
        onSelect?.(selectedOption, trigger, queryString);

        editor.update(() => {
          if (nodeToRemove && selectedOption?.key) {
            nodeToRemove.remove();
          }

          if (selectedOption?.onSelect) {
            selectedOption.onSelect(matchingString);
          }

          closeMenu();
        });
      },
      [editor, onSelect, queryString, trigger]
    );

    const preSelectedIndex = useRef<number>();
    const handleDisabledItem = useCallback(
      (itemProps: Parameters<MenuRenderFn<MentionMenuOption>>['1']) => {
        const { selectedIndex, setHighlightedIndex } = itemProps;
        if (selectedIndex !== null) {
          if (flatOptions[selectedIndex]?.disabled) {
            let newIndex: number | null = selectedIndex;
            // 如果是最后一项，则回到第一项
            if (selectedIndex === flatOptions.length - 1) {
              newIndex = flatOptions.length === 1 ? null : 0;
              // @ts-ignore
              setHighlightedIndex(newIndex);
            } else if (selectedIndex !== preSelectedIndex.current) {
              if (selectedIndex > (preSelectedIndex.current ?? 0)) {
                newIndex++;
              } else {
                newIndex--;
              }
              setHighlightedIndex(newIndex);
            }
          }
          preSelectedIndex.current = selectedIndex;
        }
      },
      [flatOptions]
    );

    const renderMenuTree = useCallback(
      (itemProps: Parameters<MenuRenderFn<MentionMenuOption>>['1']) => {
        const { selectedIndex, selectOptionAndCleanUp } = itemProps;
        handleDisabledItem(itemProps);

        return (
          <ConfigProvider
            theme={{
              components: {
                Tree: {
                  indentSize: 16,
                  lineHeight: 32,
                  titleHeight: 32,
                  paddingXS: 0,
                  nodeHoverBg: 'transparent',
                },
              },
            }}
          >
            <Tree
              blockNode
              defaultExpandAll
              onExpand={(_keys, { nativeEvent }) => {
                nativeEvent.stopPropagation();
                // 阻止 menu-picker 隐藏
                editor.dispatchCommand(CLEAR_HIDE_MENU_TIMEOUT, {});
              }}
              onSelect={(_keys, info) => {
                selectOptionAndCleanUp(info.node);
              }}
              titleRender={option => (
                <MentionMenuItem
                  isSelected={flatOptions[selectedIndex!]?.value === option.value}
                  option={option}
                  queryString={queryString}
                  showIcon={!option.isChild}
                />
              )}
              treeData={options}
            />
          </ConfigProvider>
        );
      },
      [handleDisabledItem, options, editor, flatOptions, queryString]
    );

    const renderMenu = useCallback<MenuRenderFn<MentionMenuOption>>(
      (anchorElementRef, itemProps, _matchingString) => {
        const { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex } = itemProps;
        handleDisabledItem(itemProps);

        if (anchorElementRef.current) {
          return ReactDOM.createPortal(
            <div className={cx(styles.menuOverlay, overlayClassName)} role="menu">
              {options.some(o => (o.children || []).length > 0) ? (
                renderMenuTree(itemProps)
              ) : (
                <MentionMenu
                  onClick={(index, option) => {
                    if (option.disabled) return;
                    setHighlightedIndex(index);
                    selectOptionAndCleanUp(option);
                  }}
                  onMouseEnter={(index, option) => {
                    if (option.disabled) return;
                    setHighlightedIndex(index);
                  }}
                  options={options}
                  queryString={queryString}
                  selectedIndex={selectedIndex}
                />
              )}
            </div>,
            anchorElementRef.current
          );
        }

        return null;
      },
      [
        cx,
        handleDisabledItem,
        options,
        overlayClassName,
        queryString,
        renderMenuTree,
        styles.menuOverlay,
      ]
    );

    return (
      <LexicalTypeaheadMenuPlugin
        anchorClassName={styles.anchor}
        menuRenderFn={renderMenu}
        onQueryChange={setQueryString}
        onSelectOption={onSelectOption}
        options={flatOptions}
        triggerFn={checkForMentionMatch}
      />
    );
  }
);
