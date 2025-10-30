import { CheckOutlined } from '@ant-design/icons';
import { getCodeLanguageOptions } from '@lexical/code';
import { ActionIcon, ActionIconSize } from '@lobehub/ui';
import { Dropdown, Space } from 'antd';
import { LexicalEditor } from 'lexical';
import { SquareCode } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

import { BLOCK_TYPE, formatCode } from '../utils';
import { useStyles } from './style';

type Props = {
  size?: ActionIconSize;
  editor: LexicalEditor;
  blockType: BLOCK_TYPE;
  value: string;
  onChange: (v: string) => void;
};

export default function DropdownLanguages({ size, editor, blockType, value, onChange }: Props) {
  const { styles } = useStyles();
  const [open, setOpen] = useState(false);
  const handleChange = useCallback(
    (v: string) => {
      formatCode(editor, blockType);
      onChange(v);
    },
    [blockType, editor, onChange]
  );

  const items = useMemo(
    () =>
      getCodeLanguageOptions()?.map(([k, v]) => ({
        key: k,
        label: (
          <Space>
            {v}
            {value === k ? <CheckOutlined /> : null}
          </Space>
        ),
      })),
    [value]
  );

  const handleOpen = useCallback(
    (_open: boolean, _info: { source: 'trigger' | 'menu' }) => {
      if (blockType !== BLOCK_TYPE.CODE) {
        return;
      }
      if (_info.source === 'menu') {
        return;
      }
      setOpen(_open);
    },
    [blockType]
  );

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        multiple: false,
        selectedKeys: [value],
        activeKey: value,
        onSelect: d => handleChange(d.key),
        className: styles.dropdownLang,
      }}
      onOpenChange={handleOpen}
      open={open}
      placement="bottom"
      trigger={['hover']}
    >
      <ActionIcon
        active={blockType === BLOCK_TYPE.CODE}
        icon={SquareCode}
        onClick={() => formatCode(editor, blockType)}
        size={size}
        title="Code Block"
      />
    </Dropdown>
  );
}
