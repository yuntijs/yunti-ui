import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { ButtonGroup, Table, TableProps, Tag } from '@yuntijs/ui';
import { useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  tags: string[];
  description: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
    age: 32,
    tags: ['nice', 'developer'],
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    tags: ['loser'],
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: '3',
    name: 'Not Expandable',
    age: 29,
    description: 'This not expandable',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    tags: ['cool', 'teacher'],
  },
];

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

export default () => {
  const store = useCreateStore();
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total] = useState<number>(data.length);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading] = useState(false);

  const [filters, setFilters] = useState<Filters>({});
  const [soter, setSorter] = useState<Sorts>({});

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
      render: text => text,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: soter.columnKey === 'age' ? soter.order : null,
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      filters: [
        { text: 'nice', value: 'nice' },
        { text: 'cool', value: 'cool' },
      ],
      filteredValue: filters.tags || null,
      onFilter: (value, record) => record.tags.includes(value as string),
      width: 200,
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: 130,
      render: (_, record) => (
        <ButtonGroup
          items={[
            {
              key: 'delete',
              label: '删除',
            },
            {
              key: 'detail',
              label: '详情',
            },
          ]}
          maxItems={1}
          onClick={key => {
            console.warn('click', key, record);
          }}
        />
      ),
    },
  ];
  const handlePaginationChange = (newCurrent: number, newPageSize: number) => {
    setCurrent(newCurrent);
    setPageSize(newPageSize);
  };
  const handleTableChange: TableProps<DataType>['onChange'] = (
    pagination,
    newFilters,
    newSoter
  ) => {
    setCurrent(pagination.current || 0);
    setPageSize(pagination.pageSize || 0);
    setFilters(newFilters);
    setSorter(newSoter as Sorts);
  };
  const control: TableProps | any = useControls(
    {
      bordered: false,
      loading: false,
      rowHoverable: false,
      showHeader: true,
      showSorterTooltip: true,
      sticky: false,
      virtual: false,
      size: {
        options: ['large', 'middle', 'small'],
        value: 'large',
      },
      tableLayout: {
        options: ['auto', 'fixed'],
        value: 'auto',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        loading={loading}
        onChange={handleTableChange}
        pagination={{
          current,
          onChange: handlePaginationChange,
          onShowSizeChange: handlePaginationChange,
          pageSize,
          showTotal: newTotal => `共计 ${newTotal} 条`,
          total,
        }}
        rowSelection={{
          selectedRowKeys,
          onChange: (newSelectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(newSelectedRowKeys);
          },
        }}
        {...control}
      />
    </StoryBook>
  );
};
