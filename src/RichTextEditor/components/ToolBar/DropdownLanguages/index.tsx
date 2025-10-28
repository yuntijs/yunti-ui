import { ActionIcon, ActionIconSize } from '@lobehub/ui';
import { Dropdown } from 'antd';
import { LexicalEditor } from 'lexical';
import { SquareCode } from 'lucide-react';
import { useCallback } from 'react';

import { BLOCK_TYPE, formatCode } from '../utils';
import LangSelector from './LangSelector';

type Props = {
  size?: ActionIconSize;
  editor: LexicalEditor;
  blockType: BLOCK_TYPE;
  value: string;
  onChange: (v: string) => void;
};

export default function DropdownLanguages({ size, editor, blockType, value, onChange }: Props) {
  const handleChange = useCallback(
    (v: string) => {
      formatCode(editor, blockType);
      onChange(v);
    },
    [blockType, editor, onChange]
  );

  return (
    <Dropdown
      mouseLeaveDelay={3}
      popupRender={() =>
        blockType === BLOCK_TYPE.CODE ? (
          <LangSelector onChange={handleChange} value={value} />
        ) : (
          <div></div>
        )
      }
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
