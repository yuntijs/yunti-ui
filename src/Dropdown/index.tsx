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

const YuntiDropdown: React.FC<DropdownProps> = ({ menuExtra, popupRender, ...props }) => {
  const { position = 'top', divider = false, content } = menuExtra || {};
  const { styles, cx } = useStyles({ divider, position });
  const handlePopupRender = useCallback(
    (menu: React.ReactNode) => {
      const borderLessMenu = React.cloneElement(
        menu as React.ReactElement<{
          className?: string;
        }>,
        {
          className: cx(styles.menu),
        }
      );
      if (!content) {
        if (popupRender) {
          return (
            <Flex className={styles.menuWrapper} vertical>
              {popupRender(borderLessMenu)}
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
    [content, cx, popupRender, position, styles.menu, styles.menuExtra, styles.menuWrapper]
  );

  return <AntDropdown popupRender={handlePopupRender} {...props} />;
};

export type DropDownProps = DropdownProps;
export type { DropdownButtonProps, DropdownButtonType } from 'antd/es/dropdown';

export const Dropdown = YuntiDropdown as typeof YuntiDropdown & {
  Button: typeof AntDropdown.Button;
};
Dropdown.Button = AntDropdown.Button;
