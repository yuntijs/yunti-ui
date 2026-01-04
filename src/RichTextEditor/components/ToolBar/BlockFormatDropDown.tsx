import { Icon } from '@lobehub/ui';
import { Dropdown, Flex } from 'antd';
import { useTheme } from 'antd-style';
import { LexicalEditor } from 'lexical';
import { ChevronDown, Heading1, Heading2, Heading3, Logs } from 'lucide-react';
import { useCallback, useMemo } from 'react';

import { BLOCK_TYPE, formatHeading, formatParagraph } from './utils';

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
            <span>Paragraph</span>
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
        {items.find(d => d.key === blockType)?.label || items[0].label}
        <Icon color={token.colorTextQuaternary} icon={ChevronDown} size={18} />
      </Flex>
    </Dropdown>
  );
};
