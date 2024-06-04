import { Badge, Flex, Skeleton, Tooltip } from 'antd';
import type { BadgeProps } from 'antd';
import React, { useContext, useMemo } from 'react';

import Divider from '@/Divider';
import Typography from '@/Typography';

import { PageContext } from '../PageContext';
import { HeaderButtonGroup, type HeaderButtonGroupProps } from './ButtonGroup';
import { HeaderIcon, HeaderIconProps, getIconSize } from './Icon';
import { useStyles } from './style';

const { Paragraph } = Typography;

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 是否有边框，默认没有 */
  bordered?: boolean;
  /** 状态 */
  status?: {
    status: BadgeProps['status'];
    text: BadgeProps['text'];
    title?: BadgeProps['title'];
  };
  /** 图标 src 路径或者详细配置 */
  icon?: string | HeaderIconProps;
  /** 标题 */
  title?: React.ReactNode;
  /** 标题自定义渲染 */
  titleRender?: (titleElement: React.ReactNode) => React.ReactNode;
  /** 副标题：例如描述等 */
  subTitle?: React.ReactNode;
  /** 描述列表 */
  descriptions?: {
    icon?: {
      content: React.ReactNode;
      // @Todo
      // tooltip: string | TooltipProps;
      tooltip?: string;
    };
    text: React.ReactNode;
  }[];
  /** 描述列表自定义渲染 */
  descriptionsRender?: (descriptionsElement: React.ReactNode) => React.ReactNode;
  /** 右侧扩展区域 */
  extraContent?: HeaderButtonGroupProps;
  /** 右侧扩展区域自定义渲染 */
  extraContentRender?: (buttonsElement: React.ReactNode) => React.ReactNode;
  /** 控制 header 与 content 的分割线，当 bordered 为 true 时，divider 自动设置为 false */
  divider?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = props => {
  const {
    className,
    icon,
    title,
    titleRender,
    subTitle,
    status,
    descriptions = [],
    descriptionsRender,
    extraContent = {},
    extraContentRender,
    bordered,
    divider,
    ...otherProps
  } = props;
  const { styles, cx } = useStyles({ bordered, divider });

  const iconProps = useMemo(() => {
    if (!icon || typeof icon === 'string') {
      return { src: icon, size: subTitle ? 'large' : 'default' } as HeaderIconProps;
    }
    if (subTitle && icon.size === undefined) {
      icon.size = 'large';
    }
    return icon;
  }, [icon, subTitle]);

  const TitleNode = useMemo(() => {
    const titleElement = <span className={styles.title}>{title}</span>;
    if (titleRender) {
      return titleRender(titleElement);
    }
    return titleElement;
  }, [styles.title, title, titleRender]);

  const DescriptionsNode = useMemo(() => {
    const descriptionsElement: React.ReactNode[] = [];
    for (const [index, desc] of descriptions.entries()) {
      const { icon: descIcon, text } = desc;
      if (status || index >= 1) {
        descriptionsElement.push(
          <Divider dashed={false} key={`divider-${index}`} type="vertical" />
        );
      }
      descriptionsElement.push(
        <Flex gap={4} key={`desc-${index}`}>
          {descIcon && <Tooltip title={descIcon.tooltip}>{descIcon.content}</Tooltip>}
          <span>{text}</span>
        </Flex>
      );
    }
    if (descriptionsRender) {
      return descriptionsRender(descriptionsElement);
    }
    return descriptionsElement;
  }, [descriptions, descriptionsRender, status]);

  const ExtraContentNode = useMemo(() => {
    if (!extraContent && !extraContentRender) {
      return null;
    }
    const buttons = <HeaderButtonGroup className={styles.rightButtons} {...extraContent} />;
    if (extraContentRender) {
      return extraContentRender(buttons);
    }
    return buttons;
  }, [extraContent, extraContentRender, styles.rightButtons]);

  const { loading, status: pageStatus } = useContext(PageContext);

  if (loading) {
    return (
      <Flex className={cx(styles.root, className)} gap={20}>
        <Flex>
          <Skeleton.Avatar
            active
            className={styles.icon}
            shape={iconProps?.shape}
            size={getIconSize(iconProps?.size)}
          />
        </Flex>
        <Flex flex="2" justify="space-between" vertical>
          <div className={styles.titleBox}>
            <Skeleton.Input active size={25 as any} />
            {subTitle && (
              <div className={styles.subTitle}>
                <Skeleton.Input active size={18 as any} />
              </div>
            )}
          </div>
          <Skeleton.Input active size={18 as any} />
        </Flex>
        <Flex align="center" flex="0 0 140px" justify="flex-end">
          <Skeleton.Button active />
        </Flex>
      </Flex>
    );
  }

  if (pageStatus) {
    return null;
  }

  return (
    <Flex className={cx(styles.root, className)} gap={20} {...otherProps}>
      {iconProps && (
        <Flex>
          <HeaderIcon className={styles.icon} {...iconProps} />
        </Flex>
      )}
      <Flex flex="2" justify="space-between" vertical>
        <Flex className={styles.titleBox} vertical>
          {TitleNode}
          {subTitle && (
            <Paragraph className={styles.subTitle} ellipsis={{ rows: 2 }}>
              {subTitle}
            </Paragraph>
          )}
        </Flex>
        {/* @Todo: change to use https://ant.design/components/space-cn#space-demo-split */}
        <Flex align="center" className={styles.descriptions} gap={4}>
          {status && <Badge size="small" {...status} />}
          {DescriptionsNode}
        </Flex>
      </Flex>
      <Flex align="center" flex="1" justify="flex-end">
        {ExtraContentNode}
      </Flex>
    </Flex>
  );
};
