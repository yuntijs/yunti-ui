import { Icon } from '@lobehub/ui';
import { LazyLog, ScrollFollow } from '@melloware/react-logviewer';
import { ArrowDown, ArrowUp, LoaderCircle, TextSearch } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DivProps } from 'react-layout-kit';

import { useStyles } from './style';
import type { LazyLogProps } from './types';

export interface LogViewerProps
  extends Omit<
      LazyLogProps,
      'iconFilterLines' | 'iconFindNext' | 'iconFindPrevious' | 'loadingComponent'
    >,
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
  onLoad,
  onError,
  ...props
}) => {
  const { cx, styles } = useStyles();
  const [urlHash, setUrlHash] = useState(0);
  const [loading, setLoading] = useState(false);
  const [followAfterLoaded, setFollowAfterLoaded] = useState(false);
  const setLoadingTimeout = useRef<NodeJS.Timeout>();
  const setFollowAfterLoadedTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      clearTimeout(setLoadingTimeout.current);
      clearTimeout(setFollowAfterLoadedTimeout.current);
    };
  }, []);

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

  const url = useMemo(() => {
    if (!urlFromProps) {
      return urlFromProps;
    }
    // workaround for onLoad exec twice
    setLoadingTimeout.current = setTimeout(() => {
      setLoading(true);
      setLoadingTimeout.current = undefined;
    }, 50);

    return `${urlFromProps}#${urlHash}`;
  }, [urlFromProps, urlHash]);

  const handleOnLoad: LogViewerProps['onLoad'] = useCallback(() => {
    // if has log line clear setLoading timeout
    if (document.querySelector('.react-lazylog .log-line')) {
      clearTimeout(setLoadingTimeout.current);
    }
    setLoading(false);

    // scroll to bottom
    setFollowAfterLoaded(true);
    setFollowAfterLoadedTimeout.current = setTimeout(() => setFollowAfterLoaded(false), 100);

    onLoad?.();
  }, [onLoad]);

  const handleOnError: LogViewerProps['onError'] = useCallback(
    (error: any) => {
      setLoading(false);
      clearTimeout(setLoadingTimeout.current);
      onError?.(error);
    },
    [onError]
  );

  return (
    <div className={cx(styles.root, className)} id={id} style={{ height, ...style }}>
      <ScrollFollow
        render={({ follow, onScroll: onFollowScroll }) => (
          <LazyLog
            url={url}
            websocket={websocket}
            {...props}
            follow={followAfterLoaded || follow}
            height={height}
            iconFilterLines={<Icon className={styles.searchBarIcon} icon={TextSearch} />}
            iconFindNext={<Icon className={styles.searchBarIcon} icon={ArrowDown} />}
            iconFindPrevious={<Icon className={styles.searchBarIcon} icon={ArrowUp} />}
            onError={handleOnError}
            onLoad={handleOnLoad}
            onScroll={args => {
              onFollowScroll(args);
              onScroll?.(args);
            }}
          />
        )}
        startFollowing
      />
      {loading && (
        <>
          <div className={styles.loaderText}>loading ...</div>
          <Icon className={styles.loaderIcon} icon={LoaderCircle} spin />
        </>
      )}
    </div>
  );
};
