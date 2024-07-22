import { Icon } from '@lobehub/ui';
import { Badge, BadgeProps, Space, Tooltip } from 'antd';
import { Info } from 'lucide-react';
import React from 'react';

import { useStyles } from './style';

export interface StatusProps
  extends Pick<BadgeProps, 'className' | 'color' | 'status' | 'style' | 'text'> {
  tooltip?: React.ReactNode;
  title?: string;
}
export const Status: React.FC<StatusProps> = ({
  tooltip,
  className,
  status,
  text,
  color,
  ...props
}) => {
  const { cx, styles } = useStyles();
  return (
    <Space className={cx(styles.root, className)} size="small" {...props}>
      <Badge {...{ status, text, color }} />
      {tooltip && (
        <Tooltip className={styles.tooltip} title={tooltip}>
          <Icon icon={Info} />
        </Tooltip>
      )}
    </Space>
  );
};
