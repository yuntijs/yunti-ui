import { Badge, Flex, Skeleton, Tooltip } from 'antd';
import type { BadgeProps } from 'antd';
import React, { useCallback, useContext } from 'react';

import Divider from '@/Divider';

import { PageContext } from '../PageContext';
import { HeaderButtonGroup, type HeaderButtonGroupProps } from './ButtonGroup';
import { useStyles } from './style';

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 状态 */
  status?: {
    status: BadgeProps['status'];
    text: BadgeProps['text'];
    title?: BadgeProps['title'];
  };
  /** 图标地址 */
  icon?: string;
  /** 标题 */
  title: React.ReactNode;
  /** 标题自定义渲染 */
  titleRender?: (titleElement: React.ReactNode) => React.ReactNode;
  /** 描述列表 */
  descriptions?: {
    icon: {
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
}

export const PageHeader: React.FC<PageHeaderProps> = props => {
  const {
    className,
    icon,
    title,
    titleRender,
    status,
    descriptions = [],
    descriptionsRender,
    extraContent = {},
    extraContentRender,
    ...otherProps
  } = props;
  const { styles, cx } = useStyles();

  const renderTitle = useCallback(() => {
    const titleElement = <span className={styles.title}>{title}</span>;
    if (titleRender) {
      return titleRender(titleElement);
    }
    return titleElement;
  }, [title, titleRender]);

  const renderDescriptions = useCallback(() => {
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
          <Tooltip title={descIcon?.tooltip}>{descIcon?.content}</Tooltip>
          <span>{text}</span>
        </Flex>
      );
    }
    if (descriptionsRender) {
      return descriptionsRender(descriptionsElement);
    }
    return descriptionsElement;
  }, [title, titleRender]);

  const renderExtraContent = useCallback(() => {
    if (!extraContent && !extraContentRender) {
      return null;
    }
    const buttons = <HeaderButtonGroup className={styles.rightButtons} {...extraContent} />;
    if (extraContentRender) {
      return extraContentRender(buttons);
    }
    return buttons;
  }, [extraContent, extraContentRender]);

  const { loading } = useContext(PageContext);

  if (loading) {
    return (
      <Flex className={cx(styles.root, className)} gap={20}>
        <Skeleton.Avatar active shape="square" size={64} />
        <Flex flex="2" justify="space-between" vertical>
          <Skeleton.Input active size={25 as any} />
          <Skeleton.Input active size={18 as any} />
        </Flex>
        <Flex align="center" flex="0 0 140px" justify="flex-end">
          <Skeleton.Button active />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex className={cx(styles.root, className)} gap={20} {...otherProps}>
      {icon && <img alt="icon" className={styles.icon} src={icon} />}
      <Flex className={styles.content} flex="2" justify="space-between" vertical>
        <div className={styles.titleBox}>{renderTitle()}</div>
        <Flex align="center" className={styles.descriptions} gap={4}>
          {status && <Badge size="small" {...status} />}
          {renderDescriptions()}
        </Flex>
      </Flex>
      <Flex align="center" flex="1" justify="flex-end">
        {renderExtraContent()}
      </Flex>
    </Flex>
  );
};
