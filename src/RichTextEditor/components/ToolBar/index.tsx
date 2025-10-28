import { $isCodeNode } from '@lexical/code';
import { $isListNode, ListNode } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isHeadingNode } from '@lexical/rich-text';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import { ActionIcon } from '@lobehub/ui';
import { Divider, Flex } from 'antd';
import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_LOW,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  NodeKey,
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
import DropdownLanguages from './DropdownLanguages';
import { useStyles } from './styles';
import {
  $findTopLevelElement,
  BLOCK_TYPE,
  formatBulletList,
  formatCheckList,
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
  const [language, setLanguage] = useState('');
  const [selectedElementKey, setSelectedElementKey] = useState<NodeKey | null>(null);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsCode(selection.hasFormat('code'));

      const anchorNode = selection.anchor.getNode();
      const element = $findTopLevelElement(anchorNode);
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);

      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getListType() : element.getListType();
          setBlockType(type as BLOCK_TYPE);
        } else if (element) {
          if ($isCodeNode(element)) {
            const language = element.getLanguage();
            setLanguage(language || '');
          }
          const type = $isHeadingNode(element) ? element.getTag() : element.getType();
          setBlockType(type as BLOCK_TYPE);
        }
      }
    }
    if ($isNodeSelection(selection)) {
      const nodes = selection.getNodes();
      for (const selectedNode of nodes) {
        const parentList = $getNearestNodeOfType<ListNode>(selectedNode, ListNode);
        if (parentList) {
          const type = parentList.getListType();
          setBlockType(type as BLOCK_TYPE);
        } else {
          const selectedElement = $findTopLevelElement(selectedNode);
          if ($isCodeNode(selectedElement)) {
            const language = selectedElement.getLanguage();
            setLanguage(language || '');
            setBlockType(BLOCK_TYPE.CODE);
          }
        }
      }
    }
  }, [editor]);

  const onCodeLanguageSelect = useCallback(
    (value: string) => {
      editor.update(() => {
        if (selectedElementKey !== null) {
          const node = $getNodeByKey(selectedElementKey);
          if ($isCodeNode(node)) {
            node.setLanguage(value);
          }
        }
      });
    },
    [editor, selectedElementKey]
  );

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
      <DropdownLanguages
        blockType={blockType}
        editor={editor}
        onChange={onCodeLanguageSelect}
        size={size}
        value={language}
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
