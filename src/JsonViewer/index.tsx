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

const { Text } = Typography;

export interface JsonViewerProps extends JsonViewProps {
  /**
   * @description The type of the json block
   * @default 'block'
   */
  type?: 'ghost' | 'block' | 'pure';
  fullFeatured?: boolean;
  /**
   * Only workded when fullFeatured=true
   */
  title?: string;
  /**
   * Only workded when fullFeatured=true
   */
  icon?: ReactNode;
}

export const JsonViewer: React.FC<JsonViewerProps> = ({
  type = 'block',
  fullFeatured = false,
  title = 'json',
  icon,
  className,
  collapseStringMode = 'directly',
  collapsed = 2,
  dark,
  // displayArrayIndex = true,
  displaySize = 'collapsed',
  ignoreLargeArray = false,
  matchesURL = true,
  src,
  theme = 'default',
  style,
  ...props
}) => {
  const { isDarkMode } = useThemeMode();
  const { styles, cx } = useStyles(fullFeatured ? 'block' : type);
  const [expand, setExpand] = useState(true);
  const jsonString = useMemo(() => stringify(src), [src]);
  const JsonViewEle = (
    <JsonView
      collapseStringMode={collapseStringMode}
      collapsed={collapsed}
      dark={dark ?? isDarkMode}
      // displayArrayIndex={displayArrayIndex}
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
        <Flex align={'center'} className={styles.header} justify={'space-between'}>
          <ActionIcon
            icon={expand ? ChevronDown : ChevronRight}
            onClick={() => setExpand(!expand)}
            size={{ blockSize: 24, fontSize: 14, strokeWidth: 3 }}
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
          <CopyButton
            content={jsonString}
            placement="left"
            size={{ blockSize: 24, fontSize: 14, strokeWidth: 2 }}
          />
        </Flex>
      )}
      <Flex
        className={styles.content}
        flex={1}
        style={expand ? {} : { height: 0, padding: 0, overflow: 'hidden' }}
      >
        {JsonViewEle}
      </Flex>
    </Flex>
  );
};
