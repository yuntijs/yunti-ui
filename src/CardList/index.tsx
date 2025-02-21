import { List } from 'antd';
import React from 'react';

import { CardListItem } from './Item';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

export const CardList: React.FC = () => {
  return (
    <List
      dataSource={data}
      grid={{
        column: 3,
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      renderItem={item => (
        <List.Item>
          <CardListItem>Card content</CardListItem>
        </List.Item>
      )}
    />
  );
};
