import { ActionIcon, CopyButton } from '@lobehub/ui';
import { Flex } from 'antd';
import { useThemeMode } from 'antd-style';
import { ChevronDown, ChevronRight } from 'lucide-react';
import React, { ReactNode, useMemo, useState } from 'react';
import type { JsonViewProps } from 'react18-json-view';
import JsonView, { stringify } from 'react18-json-view';
import 'react18-json-view/src/dark.css';
import 'react18-json-view/src/style.css';

import Typography from '@/Typography';

import { useStyles } from './style';

export { stringify } from 'react18-json-view';

const { Text } = Typography;

export interface JsonViewerProps extends JsonViewProps {
  /**
   * @description The variant of the code block
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'borderless';
  fullFeatured?: boolean;
  /**
   * Only workded when fullFeatured=true
   */
  title?: string;
  /**
   * Only workded when fullFeatured=true
   */
  icon?: ReactNode;
  /**
   * The style of the json content
   */
  contentStyle?: React.CSSProperties;
  classNames?: {
    header?: string;
    content?: string;
  };
}

export const JsonViewer: React.FC<JsonViewerProps> = ({
  variant = 'filled',
  fullFeatured = false,
  title = 'json',
  icon,
  contentStyle,
  classNames,
  className,
  collapseStringMode = 'directly',
  collapsed = 2,
  dark,
  displayArrayIndex = false,
  displaySize = 'collapsed',
  ignoreLargeArray = false,
  matchesURL = true,
  src,
  theme = 'default',
  style,
  ...props
}) => {
  const { isDarkMode } = useThemeMode();
  const [expand, setExpand] = useState(true);
  const { styles, cx } = useStyles({ expand, variant: fullFeatured ? 'filled' : variant });
  const jsonString = useMemo(() => stringify(src), [src]);
  const JsonViewEle = (
    <JsonView
      collapseStringMode={collapseStringMode}
      collapsed={collapsed}
      dark={dark ?? isDarkMode}
      displayArrayIndex={displayArrayIndex}
      displaySize={displaySize}
      ignoreLargeArray={ignoreLargeArray}
      matchesURL={matchesURL}
      src={src}
      theme={theme}
      {...props}
    />
  );
  return (
    <Flex className={cx(styles.container, className)} style={style} vertical>
      {fullFeatured && (
        <Flex
          align={'center'}
          className={cx(styles.header, classNames?.header)}
          justify={'space-between'}
        >
          <ActionIcon
            icon={expand ? ChevronDown : ChevronRight}
            onClick={() => setExpand(!expand)}
            size="small"
          />
          <Flex
            align={'center'}
            className={styles.title}
            flex={1}
            gap={2}
            justify="center"
            title={title}
          >
            {icon}
            <Flex className={styles.titleText}>
              <Text ellipsis>{title}</Text>
            </Flex>
          </Flex>
          <CopyButton content={jsonString} size="small" />
        </Flex>
      )}
      <Flex
        className={cx(styles.content, classNames?.content)}
        flex={1}
        style={
          expand
            ? contentStyle
            : { ...contentStyle, height: 0, maxHeight: 0, padding: 0, overflow: 'hidden' }
        }
      >
        {JsonViewEle}
      </Flex>
    </Flex>
  );
};
