import { Flex } from 'antd';
import { escapeRegExp } from 'lodash-es';
import React, { memo, useEffect, useMemo, useRef } from 'react';

import Typography from '@/Typography';

import { useStyles } from './style';
import { MentionMenuOption } from './utils';

const { Text } = Typography;

export interface MentionMenuItemProps {
  index?: number;
  isSelected: boolean;
  onClick?: (index: number, option: MentionMenuOption) => void;
  onMouseEnter?: (index: number, option: MentionMenuOption) => void;
  option: MentionMenuOption;
  queryString: string | null;
  showIcon?: boolean;
}
export const MentionMenuItem: React.FC<MentionMenuItemProps> = memo(
  ({ index, isSelected, onClick, onMouseEnter, option, queryString, showIcon = true }) => {
    const { styles } = useStyles({ isSelected, disabled: option.disabled });
    const label = option.label;
    const { before, middle, after } = useMemo(() => {
      let before = label;
      let middle = '';
      let after = '';
      if (queryString) {
        const regex = new RegExp(escapeRegExp(queryString), 'i');
        const match = regex.exec(option.label);

        if (match) {
          before = label.slice(0, Math.max(0, match.index));
          middle = match[0];
          after = label.slice(Math.max(0, match.index + match[0].length));
        }
      }
      return {
        before,
        middle,
        after,
      };
    }, [option.label, queryString, label]);

    const ref = useRef<HTMLDivElement>(null);

    // 自动滚动
    useEffect(() => {
      if (isSelected) {
        ref?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }, [isSelected]);

    useEffect(() => {
      option.setRefElement(ref?.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Flex
        align="center"
        className={styles.menuItem}
        gap={4}
        key={option.key}
        onClick={() => onClick?.(index!, option)}
        onMouseEnter={() => onMouseEnter?.(index!, option)}
        ref={ref}
        tabIndex={-1}
        title={option.htmlTitle || option.label}
      >
        {showIcon && <Flex className={styles.menuItemIcon}>{option.icon}</Flex>}
        <div className={styles.menuItemLabel}>
          {before}
          <Text mark>{middle}</Text>
          {after}
        </div>
        <Flex>{option.extraElement}</Flex>
      </Flex>
    );
  }
);
MentionMenuItem.displayName = 'MentionMenuItem';
