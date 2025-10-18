import { $patchStyleText } from '@lexical/selection';
import { Icon } from '@lobehub/ui';
import { Dropdown, Flex, Typography } from 'antd';
import { useTheme } from 'antd-style';
import { $getSelection, LexicalEditor } from 'lexical';
import { ChevronDown, Type } from 'lucide-react';
import { useCallback, useMemo } from 'react';

const FONT_FAMILY_OPTIONS: [string, string][] = [
  ['Arial', 'Arial'],
  ['Courier New', 'Courier New'],
  ['Georgia', 'Georgia'],
  ['Times New Roman', 'Times New Roman'],
  ['Trebuchet MS', 'Trebuchet MS'],
  ['Verdana', 'Verdana'],
];

interface PROPS {
  editor: LexicalEditor;
  value: string;
  disabled?: boolean;
}

export const FontDropDown: React.FC<PROPS> = ({ editor, disabled = false, value }) => {
  const token = useTheme();
  const handleClick = useCallback(
    (option: string) => {
      editor.update(() => {
        const selection = $getSelection();
        if (selection !== null) {
          $patchStyleText(selection, {
            ['font-family']: option,
          });
        }
      });
    },
    [editor]
  );

  const items = useMemo(
    () =>
      FONT_FAMILY_OPTIONS.map(([k, v]) => ({
        key: k,
        label: v,
      })),
    []
  );

  const onClick = useCallback(
    ({ key }: any) => {
      handleClick(key);
    },
    [handleClick]
  );

  return (
    <Dropdown disabled={disabled} menu={{ items, onClick, activeKey: value }} trigger={['click']}>
      <Flex align="center" gap={0}>
        <Flex align="center" gap={8}>
          <Icon color={token.colorTextTertiary} icon={Type} size={16} />
          <Typography.Text ellipsis style={{ width: 50 }}>
            {items.find(d => d.key === value)?.label || value}
          </Typography.Text>
        </Flex>
        <Icon color={token.colorTextQuaternary} icon={ChevronDown} size={18} />
      </Flex>
    </Dropdown>
  );
};
