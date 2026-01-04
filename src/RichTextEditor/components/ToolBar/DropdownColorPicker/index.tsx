import { Dropdown } from 'antd';

import ColorPicker from './ColorPicker';

type Props = {
  disabled?: boolean;
  children: React.ReactNode;
  color: string;
  onChange?: (color: string, skipHistoryStack: boolean) => void;
};

export default function DropdownColorPicker({
  disabled = false,
  color,
  onChange,
  children,
}: Props) {
  return (
    <Dropdown
      disabled={disabled}
      popupRender={() => <ColorPicker color={color} onChange={onChange} />}
      trigger={['click']}
    >
      {children}
    </Dropdown>
  );
}
