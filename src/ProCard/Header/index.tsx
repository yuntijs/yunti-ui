import { MoreOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex } from 'antd';
import type { AvatarProps, DropDownProps } from 'antd';
import React from 'react';

import Typography from '@/Typography';

import { useStyles } from './style';

const { Paragraph } = Typography;

export interface ProCardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 图标 src 路径或者详细配置 */
  icon?: AvatarProps;
  /** 标题 */
  title?: React.ReactNode;
  /** 描述 */
  description?: React.ReactNode;
  /** 右侧扩展区域 */
  extra?: DropDownProps;
  /** 控制 header 与 content 的分割线 */
  divider?: boolean;
}

export const ProCardHeader: React.FC<ProCardHeaderProps> = props => {
  const { className, icon, title, description, extra, divider, ...otherProps } = props;
  const { styles, cx } = useStyles({ divider, iconBg: !icon?.src });

  const { className: iconClassName, shape = 'square', size = 72, ...otherIconProps } = icon || {};
  const { children: extraChildren, ...otherExtraProps } = extra || {};

  return (
    <Flex className={cx(styles.root, className)} gap={20} {...otherProps}>
      {icon && (
        <Flex>
          <Avatar
            className={cx(styles.icon, iconClassName)}
            shape={shape}
            size={size}
            {...otherIconProps}
          />
        </Flex>
      )}
      <Flex className={styles.titleBox} flex="1" vertical>
        <Flex gap={4}>
          <div className={styles.title}>{title}</div>
          {extra && (
            <Flex
              align="flex-start"
              className={styles.extra}
              justify="flex-end"
              onClick={e => e.stopPropagation()}
            >
              <Dropdown {...otherExtraProps}>
                {extraChildren || <Button icon={<MoreOutlined />} size="small" type="text" />}
              </Dropdown>
            </Flex>
          )}
        </Flex>
        {description && (
          <Paragraph className={styles.description} ellipsis={{ rows: 2 }}>
            {description}
          </Paragraph>
        )}
      </Flex>
    </Flex>
  );
};
