import { Icon } from '@lobehub/ui';
import { LazyLog, ScrollFollow } from '@melloware/react-logviewer';
import { ArrowDown, ArrowUp, TextSearch } from 'lucide-react';
import React from 'react';
import { DivProps } from 'react-layout-kit';

import { useStyles } from './style';
import type { LazyLogProps } from './types';

export interface LogViewerProps
  extends Omit<LazyLogProps, 'iconFilterLines' | 'iconFindNext' | 'iconFindPrevious'>,
    Pick<DivProps, 'className' | 'id' | 'style'> {
  //
}
export const LogViewer: React.FC<LogViewerProps> = ({
  className,
  id,
  style,
  height,
  onScroll,
  ...props
}) => {
  const { cx, styles } = useStyles();

  return (
    <div className={cx(styles.root, className)} id={id} style={{ height, ...style }}>
      <ScrollFollow
        render={({ follow, onScroll: onFollowScroll }) => (
          <LazyLog
            {...props}
            follow={follow}
            height={height}
            iconFilterLines={<Icon className={styles.searchBarIcon} icon={TextSearch} />}
            iconFindNext={<Icon className={styles.searchBarIcon} icon={ArrowDown} />}
            iconFindPrevious={<Icon className={styles.searchBarIcon} icon={ArrowUp} />}
            onScroll={args => {
              onFollowScroll(args);
              onScroll?.(args);
            }}
          />
        )}
        startFollowing
      />
    </div>
  );
};
