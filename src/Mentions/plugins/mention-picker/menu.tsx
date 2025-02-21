import { Empty } from 'antd';
import React, { memo } from 'react';

import { MentionMenuItem } from './menu-item';
import { useStyles } from './style';
import { MentionMenuOption } from './utils';

export interface MentionMenuProps {
  selectedIndex?: number | null;
  options: MentionMenuOption[];
  onClick?: (index: number, option: MentionMenuOption) => void;
  onMouseEnter?: (index: number, option: MentionMenuOption) => void;
  queryString: string | null;
}

export const MentionMenu: React.FC<MentionMenuProps> = memo(
  ({ selectedIndex, options, onClick, onMouseEnter, queryString }) => {
    const { styles } = useStyles({});
    return (
      <>
        {options.length === 0 && (
          <Empty className={styles.menuEmpty} image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
        {options.map((option, index: number) => (
          <MentionMenuItem
            index={index}
            isSelected={selectedIndex === index}
            key={option.key}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            option={option}
            queryString={queryString}
          />
        ))}
      </>
    );
  }
);
