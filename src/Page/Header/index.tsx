import { Flex, Skeleton, Tooltip } from 'antd';
import React, { useContext, useMemo } from 'react';

import { ButtonGroup, type ButtonGroupProps } from '@/ButtonGroup';
import Divider from '@/Divider';
import { Status, StatusProps } from '@/Status';
import Typography from '@/Typography';

import { PageContext } from '../PageContext';
import { HeaderIcon, HeaderIconProps, getIconSize } from './Icon';
import { useStyles } from './style';

const { Paragraph } = Typography;

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 是否有边框，默认没有 */
  bordered?: boolean;
  /** 状态 */
  status?: StatusProps;
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
  extraContent?: ButtonGroupProps;
  /** 右侧扩展区域自定义渲染 */
  extraContentRender?: (buttonsElement: React.ReactNode) => React.ReactNode;
  /** 控制 header 与 content 的分割线，当 bordered 为 true 时，divider 自动设置为 false */
  divider?: boolean;
  /** PageHeader 各个模块的 className */
  classNames?: {
    titleWrapper?: string;
    title?: string;
    subTitle?: string;
    descriptions?: string;
    extraContent?: string;
  };
}

export const PageHeader: React.FC<PageHeaderProps> = props => {
  const {
    className,
    classNames,
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
    const titleElement = <span className={cx(styles.title, classNames?.title)}>{title}</span>;
    if (titleRender) {
      return titleRender(titleElement);
    }
    return titleElement;
  }, [classNames?.title, cx, styles.title, title, titleRender]);

  const DescriptionsNode = useMemo(() => {
    const descriptionsElement: React.ReactNode[] = [];
    for (const [index, desc] of descriptions.filter(d => !!d).entries()) {
      const { icon: descIcon, text } = desc;
      if (status || index >= 1) {
        descriptionsElement.push(
          <Divider dashed={false} key={`divider-${index}`} type="vertical" />
        );
      }
      descriptionsElement.push(
        <Flex align="center" gap={4} key={`desc-${index}`}>
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
    const buttons = <ButtonGroup className={styles.rightButtons} {...extraContent} />;
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
              <div className={cx(styles.subTitle, className)}>
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
        <Flex className={cx(styles.titleBox, classNames?.titleWrapper)} vertical>
          {TitleNode}
          {subTitle && (
            <Paragraph className={cx(styles.subTitle, classNames?.subTitle)} ellipsis={{ rows: 2 }}>
              {subTitle}
            </Paragraph>
          )}
        </Flex>
        {/* @Todo: change to use https://ant.design/components/space-cn#space-demo-split */}
        <Flex align="center" className={cx(styles.descriptions, classNames?.descriptions)} gap={4}>
          {status && <Status {...status} />}
          {DescriptionsNode}
        </Flex>
      </Flex>
      <Flex align="center" className={classNames?.extraContent} flex="1" justify="flex-end">
        {ExtraContentNode}
      </Flex>
    </Flex>
  );
};
