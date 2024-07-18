import { MoreOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Flex } from 'antd';
import React from 'react';

import { Card, CardProps } from '@/Card';
import { Typography } from '@/Typography';

const { Text } = Typography;

export type CardListItemProps = CardProps;
export const CardListItem: React.FC<CardListItemProps> = ({ children }) => {
  return (
    <Card
      // hoverable
      // bordered={false}
      extra={
        <Dropdown.Button
          icon={<MoreOutlined />}
          menu={{ items: [{ key: 'edit', label: '编辑' }] }}
          size="small"
          type="text"
        />
      }
      title={
        <Flex>
          <Avatar shape="square" size={72} />
          <Flex vertical>
            <Text strong>我是标题</Text>
            <Text type="secondary">我是描述信息</Text>
          </Flex>
        </Flex>
      }
    >
      {children}
    </Card>
  );
};
