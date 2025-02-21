import { DropDownProps as AntDropDownProps, Dropdown as AntDropdown, Flex } from 'antd';
import React, { useCallback } from 'react';

import { useStyles } from './style';

export interface DropdownProps extends AntDropDownProps {
  menuExtra?: {
    position?: 'top' | 'bottom';
    divider?: boolean;
    content: React.ReactNode;
  };
}

const YuntiDropdown: React.FC<DropdownProps> = ({ menuExtra, dropdownRender, ...props }) => {
  const { position = 'top', divider = false, content } = menuExtra || {};
  const { styles } = useStyles({ divider, position });
  const handleDropdownRender = useCallback(
    (menu: React.ReactNode) => {
      const borderLessMenu = React.cloneElement(menu as React.ReactElement, {
        style: { boxShadow: 'none', border: 'none' },
      });
      if (!content) {
        if (dropdownRender) {
          return (
            <Flex className={styles.menuWrapper} vertical>
              {dropdownRender(borderLessMenu)}
            </Flex>
          );
        }
        return menu;
      }
      const extra = (
        <Flex align="center" className={styles.menuExtra}>
          {content}
        </Flex>
      );
      return (
        <Flex className={styles.menuWrapper} vertical>
          {position === 'top' && extra}
          {borderLessMenu}
          {position === 'bottom' && extra}
        </Flex>
      );
    },
    [content, dropdownRender, position, styles.menuExtra, styles.menuWrapper]
  );

  return <AntDropdown dropdownRender={handleDropdownRender} {...props} />;
};

export type DropDownProps = DropdownProps;
export type { DropdownButtonProps, DropdownButtonType } from 'antd/es/dropdown';

export const Dropdown = YuntiDropdown as typeof YuntiDropdown & {
  Button: typeof AntDropdown.Button;
};
Dropdown.Button = AntDropdown.Button;
