import { Icon } from '@lobehub/ui';
import { LazyLog, ScrollFollow } from '@melloware/react-logviewer';
import { ArrowDown, ArrowUp, TextSearch } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { DivProps } from 'react-layout-kit';

import { useStyles } from './style';
import type { LazyLogProps } from './types';

export interface LogViewerProps
  extends Omit<LazyLogProps, 'iconFilterLines' | 'iconFindNext' | 'iconFindPrevious'>,
    Pick<DivProps, 'className' | 'id' | 'style'> {
  /**
   * Timed refresh, in ms, only takes effect when url is specified and not websocket
   */
  refreshInterval?: number;
}
export const LogViewer: React.FC<LogViewerProps> = ({
  className,
  id,
  style,
  height,
  onScroll,
  url: urlFromProps,
  websocket,
  refreshInterval,
  ...props
}) => {
  const { cx, styles } = useStyles();
  const [urlHash, setUrlHash] = useState(0);

  useEffect(() => {
    let intervalTimeout: NodeJS.Timeout;
    if (urlFromProps && !websocket && refreshInterval) {
      intervalTimeout = setInterval(() => {
        setUrlHash(hash => hash + 1);
      }, refreshInterval);
    }
    return () => {
      clearInterval(intervalTimeout);
    };
  }, [refreshInterval, urlFromProps, websocket]);

  const url = useMemo(() => `${urlFromProps}#${urlHash}`, [urlFromProps, urlHash]);

  return (
    <div className={cx(styles.root, className)} id={id} style={{ height, ...style }}>
      <ScrollFollow
        render={({ follow, onScroll: onFollowScroll }) => (
          <LazyLog
            url={url}
            websocket={websocket}
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
