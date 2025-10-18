import { $isListNode, ListNode } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isHeadingNode } from '@lexical/rich-text';
import { $getSelectionStyleValueForProperty, $patchStyleText } from '@lexical/selection';
import { $findMatchingParent, $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import { ActionIcon, ActionIconSize } from '@lobehub/ui';
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
  HISTORIC_TAG,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from 'lexical';
import {
  Bold,
  Code,
  Italic,
  Redo,
  Strikethrough,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  Underline,
  Undo,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import AColorSvg from '@/RichTextEditor/images/AColorSvg';
import FontBgColorSvg from '@/RichTextEditor/images/FontBgColorSvg';

import { BlockFormatDropDown } from './BlockFormatDropDown';
import DropdownColorPicker from './DropdownColorPicker';
import { FontDropDown } from './FontDropDown';
import { FontSizeInput } from './FontSizeInput';
import { useStyles } from './styles';
import { BLOCK_TYPE } from './utils';

interface ToolBarProps {
  size?: ActionIconSize;
  gap?: number;
}

export const Toolbar: React.FC<ToolBarProps> = ({
  size = { blockSize: 26, size: 18 },
  gap = 2,
}) => {
  const { styles } = useStyles();
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [fontSize, setFontSize] = useState(15);
  const [fontColor, setFontColor] = useState('#000');
  const [fontFam, setFontFamily] = useState('Arial');
  const [bgColor, setBgColor] = useState('#fff');
  const [blockType, setBlockType] = useState(BLOCK_TYPE.PARAGRAPH);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsCode(selection.hasFormat('code'));
      setFontColor($getSelectionStyleValueForProperty(selection, 'color', '#000'));
      setBgColor($getSelectionStyleValueForProperty(selection, 'background-color', '#fff'));
      setFontFamily($getSelectionStyleValueForProperty(selection, 'font-family', 'Arial'));

      // const node = getSelectedNode(selection);
      // const parent = node.getParent();
      // const _isLink = $isLinkNode(parent) || $isLinkNode(node);
      // setIsLink(_isLink);

      const fontSize = $getSelectionStyleValueForProperty(selection, 'font-size', '15px');
      setFontSize(Number(fontSize?.slice(0, -2)));

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

  const applyStyleText = useCallback(
    (styles: Record<string, string>, skipHistoryStack?: boolean) => {
      editor.update(
        () => {
          const selection = $getSelection();
          if (selection !== null) {
            $patchStyleText(selection, styles);
          }
        },
        skipHistoryStack ? { tag: HISTORIC_TAG } : {}
      );
    },
    [editor]
  );

  const onFontColorSelect = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ color: value }, skipHistoryStack);
    },
    [applyStyleText]
  );

  const onBgColorSelect = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ 'background-color': value }, skipHistoryStack);
    },
    [applyStyleText]
  );

  return (
    <Flex align="center" className={styles.wrapper} gap={gap} ref={toolbarRef} wrap>
      <ActionIcon
        disabled={!canUndo}
        icon={Undo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, null);
        }}
        size={size}
      />
      <ActionIcon
        disabled={!canRedo}
        icon={Redo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, null);
        }}
        size={size}
      />
      <Divider className={styles.divider} type="vertical" />
      <BlockFormatDropDown blockType={blockType} editor={editor} />
      <Divider className={styles.divider} type="vertical" />
      <FontDropDown editor={editor} value={fontFam} />
      <Divider className={styles.divider} type="vertical" />
      <FontSizeInput disabled={false} editor={editor} selectionFontSize={fontSize} />
      <Divider className={styles.divider} type="vertical" />
      <ActionIcon
        active={isBold}
        icon={Bold}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
        size={size}
      />
      <ActionIcon
        active={isItalic}
        icon={Italic}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
        size={size}
      />
      <ActionIcon
        active={isUnderline}
        icon={Underline}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
        size={size}
      />
      <ActionIcon
        active={isStrikethrough}
        icon={Strikethrough}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
        size={size}
      />
      <ActionIcon
        active={isCode}
        icon={Code}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code');
        }}
        size={size}
      />
      <Divider className={styles.divider} type="vertical" />
      <DropdownColorPicker color={fontColor} onChange={onFontColorSelect}>
        <ActionIcon icon={<AColorSvg />} size={size} />
      </DropdownColorPicker>
      <DropdownColorPicker color={bgColor} onChange={onBgColorSelect}>
        <ActionIcon icon={<FontBgColorSvg />} size={size} />
      </DropdownColorPicker>
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
