import { $isListNode, ListNode } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isHeadingNode } from '@lexical/rich-text';
import { $findMatchingParent, $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import { ActionIcon } from '@lobehub/ui';
import { Divider, Flex } from 'antd';
import {
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_LOW,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from 'lexical';
import {
  Bold,
  Code,
  Italic,
  List,
  ListOrdered,
  MessageSquareQuote,
  Redo,
  SquareCheck,
  SquareCode,
  Strikethrough,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  Underline,
  Undo,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { RichTextToolbarProps } from '../../types';
import { BlockFormatDropDown } from './BlockFormatDropDown';
import { useStyles } from './styles';
import {
  BLOCK_TYPE,
  formatBulletList,
  formatCheckList,
  formatCode,
  formatNumberedList,
  formatQuote,
} from './utils';

export const Toolbar: React.FC<RichTextToolbarProps> = ({
  size = { blockSize: 26, size: 18 },
  gap = 2,
  classname,
}) => {
  const { styles, cx } = useStyles();
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [blockType, setBlockType] = useState(BLOCK_TYPE.PARAGRAPH);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsCode(selection.hasFormat('code'));

      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : $findMatchingParent(anchorNode, e => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if ($isListNode(element)) {
        const parentList = $getNearestNodeOfType(anchorNode, ListNode);
        const type = parentList ? parentList.getListType() : element.getListType();
        setBlockType(type as BLOCK_TYPE);
      } else if (element) {
        const type = $isHeadingNode(element) ? element.getTag() : element.getType();
        setBlockType(type as BLOCK_TYPE);
      }
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }: any) => {
        editorState.read(
          () => {
            $updateToolbar();
          },
          { editor }
        );
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload: any, _newEditor: any) => {
          $updateToolbar();
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload: any) => {
          setCanUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload: any) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_LOW
      )
    );
  }, [editor, $updateToolbar]);

  return (
    <Flex
      align="center"
      className={cx(styles.barWrapper, classname)}
      gap={gap}
      ref={toolbarRef}
      wrap
    >
      <ActionIcon
        disabled={!canUndo}
        icon={Undo}
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, void 0)}
        size={size}
      />
      <ActionIcon
        disabled={!canRedo}
        icon={Redo}
        onClick={() => editor.dispatchCommand(REDO_COMMAND, void 0)}
        size={size}
      />
      <Divider className={styles.divider} type="vertical" />
      <BlockFormatDropDown blockType={blockType} editor={editor} />
      <Divider className={styles.divider} type="vertical" />
      <ActionIcon
        active={isBold}
        icon={Bold}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
        size={size}
        title="Bold"
      />
      <ActionIcon
        active={isItalic}
        icon={Italic}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
        size={size}
        title="Ttalic"
      />
      <ActionIcon
        active={isUnderline}
        icon={Underline}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
        size={size}
        title="Underline"
      />
      <ActionIcon
        active={isStrikethrough}
        icon={Strikethrough}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')}
        size={size}
        title="Strikethrough"
      />
      <ActionIcon
        active={isCode}
        icon={Code}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')}
        size={size}
        title="Inline code"
      />
      <Divider className={styles.divider} type="vertical" />
      <ActionIcon
        active={blockType === BLOCK_TYPE.BULLET}
        icon={List}
        onClick={() => formatBulletList(editor, blockType)}
        size={size}
        title="Bullet List"
      />
      <ActionIcon
        active={blockType === BLOCK_TYPE.NUMBER}
        icon={ListOrdered}
        onClick={() => formatNumberedList(editor, blockType)}
        size={size}
        title="Numbered List"
      />
      <ActionIcon
        active={blockType === BLOCK_TYPE.CHECK}
        icon={SquareCheck}
        onClick={() => formatCheckList(editor, blockType)}
        size={size}
        title="Check List"
      />
      <ActionIcon
        active={blockType === BLOCK_TYPE.QUOTE}
        icon={MessageSquareQuote}
        onClick={() => formatQuote(editor, blockType)}
        size={size}
        title="Quote"
      />
      <ActionIcon
        active={blockType === BLOCK_TYPE.CODE}
        icon={SquareCode}
        onClick={() => formatCode(editor, blockType)}
        size={size}
        title="Code Block"
      />
      <Divider className={styles.divider} type="vertical" />
      <ActionIcon
        icon={TextAlignStart}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
        size={size}
      />
      <ActionIcon
        icon={TextAlignCenter}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
        size={size}
      />
      <ActionIcon
        icon={TextAlignEnd}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
        size={size}
      />
      <ActionIcon
        icon={TextAlignJustify}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
        size={size}
      />
    </Flex>
  );
};
