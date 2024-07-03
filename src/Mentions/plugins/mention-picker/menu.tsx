import { Empty } from 'antd';
import React, { memo } from 'react';

import { MentionMenuItem } from './menu-item';
import { useStyles } from './style';

export interface MentionMenuProps {
  selectedIndex: number | null;
  options: any[];
  onClick: (index: number, option: any) => void;
  onMouseEnter: (index: number, option: any) => void;
  queryString: string | null;
}

export const MentionMenu: React.FC<MentionMenuProps> = memo(
  ({ selectedIndex, options, onClick, onMouseEnter, queryString }) => {
    const { styles } = useStyles({});
    return (
      <>
        {options.length === 0 && <Empty className={styles.menuEmpty} />}
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
