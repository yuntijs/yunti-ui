import { Icon } from '@lobehub/ui';
import { Dropdown, Flex } from 'antd';
import { useTheme } from 'antd-style';
import { LexicalEditor } from 'lexical';
import {
  ChevronDown,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Logs,
  MessageSquareQuote,
  SquareCheck,
} from 'lucide-react';
import { useCallback, useMemo } from 'react';

import {
  BLOCK_TYPE,
  formatBulletList,
  formatCheckList,
  formatCode,
  formatHeading,
  formatNumberedList,
  formatParagraph,
  formatQuote,
} from './utils';

interface BlockFormatDropDownProps {
  blockType: BLOCK_TYPE;
  editor: LexicalEditor;
  disabled?: boolean;
}

export const BlockFormatDropDown: React.FC<BlockFormatDropDownProps> = ({
  editor,
  blockType,
  disabled = false,
}) => {
  const token = useTheme();
  const onClick = useCallback(
    ({ key }: any) => {
      switch (key) {
        case BLOCK_TYPE.PARAGRAPH: {
          formatParagraph(editor);
          break;
        }
        case BLOCK_TYPE.H1: {
          formatHeading(editor, blockType, 'h1');
          break;
        }
        case BLOCK_TYPE.H2: {
          formatHeading(editor, blockType, 'h2');
          break;
        }
        case BLOCK_TYPE.H3: {
          formatHeading(editor, blockType, 'h3');
          break;
        }
        case BLOCK_TYPE.BULLET: {
          formatBulletList(editor, blockType);
          break;
        }
        case BLOCK_TYPE.NUMBER: {
          formatNumberedList(editor, blockType);
          break;
        }
        case BLOCK_TYPE.CHECK: {
          formatCheckList(editor, blockType);
          break;
        }
        case BLOCK_TYPE.QUOTE: {
          formatQuote(editor, blockType);
          break;
        }
        case BLOCK_TYPE.CODE: {
          formatCode(editor, blockType);
          break;
        }
        default: {
          break;
        }
      }
    },
    [blockType, editor]
  );

  const items = useMemo(
    () => [
      {
        label: (
          <Flex align="center" gap={10}>
            <Icon color={token.colorTextTertiary} icon={Logs} size={16} />
            <span>Normal</span>
          </Flex>
        ),
        key: BLOCK_TYPE.PARAGRAPH,
      },
      {
        label: (
          <Flex align="center" gap={10}>
            <Icon color={token.colorTextTertiary} icon={Heading1} size={16} />
            <span>Heading 1</span>
          </Flex>
        ),
        key: BLOCK_TYPE.H1,
      },
      {
        label: (
          <Flex align="center" gap={10}>
            <Icon color={token.colorTextTertiary} icon={Heading2} size={16} />
            <span>Heading 2</span>
          </Flex>
        ),
        key: BLOCK_TYPE.H2,
      },
      {
        label: (
          <Flex align="center" gap={10}>
            <Icon color={token.colorTextTertiary} icon={Heading3} size={16} />
            <span>Heading 3</span>
          </Flex>
        ),
        key: BLOCK_TYPE.H3,
      },
      {
        label: (
          <Flex align="center" gap={10}>
            <Icon color={token.colorTextTertiary} icon={List} size={16} />
            <span>Bullet List</span>
          </Flex>
        ),
        key: BLOCK_TYPE.BULLET,
      },
      {
        label: (
          <Flex align="center" gap={10}>
            <Icon color={token.colorTextTertiary} icon={ListOrdered} size={16} />
            <span>Numbered List</span>
          </Flex>
        ),
        key: BLOCK_TYPE.NUMBER,
      },
      {
        label: (
          <Flex align="center" gap={10}>
            <Icon color={token.colorTextTertiary} icon={SquareCheck} size={16} />
            <span>Check List</span>
          </Flex>
        ),
        key: BLOCK_TYPE.CHECK,
      },
      {
        label: (
          <Flex align="center" gap={10}>
            <Icon color={token.colorTextTertiary} icon={MessageSquareQuote} size={16} />
            <span>Quote</span>
          </Flex>
        ),
        key: BLOCK_TYPE.QUOTE,
      },
      {
        label: (
          <Flex align="center" gap={10}>
            <Icon color={token.colorTextTertiary} icon={Code} size={16} />
            <span>Code Block</span>
          </Flex>
        ),
        key: BLOCK_TYPE.CODE,
      },
    ],
    [token]
  );

  return (
    <Dropdown
      disabled={disabled}
      menu={{ items, onClick, activeKey: blockType }}
      trigger={['click']}
    >
      <Flex align="center" gap={16}>
        {items.find(d => d.key === blockType)?.label || blockType}
        <Icon color={token.colorTextQuaternary} icon={ChevronDown} size={18} />
      </Flex>
    </Dropdown>
  );
};
