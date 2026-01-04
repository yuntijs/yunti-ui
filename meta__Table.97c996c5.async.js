"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7151],{41453:function(l,t,n){n.r(t),n.d(t,{StoryBook:function(){return a.ZP},useControls:function(){return g.useControls},useCreateStore:function(){return g.useCreateStore}});var a=n(16896),g=n(95165)},69263:function(l,t,n){var a;n.r(t),n.d(t,{demos:function(){return T}});var g=n(90228),s=n.n(g),h=n(87999),p=n.n(h),o=n(52136),m=n(77371),b=n(44282),S=n(41453),T={"table-demo-demos":{component:o.memo(o.lazy(function(){return n.e(1561).then(n.bind(n,22547))})),asset:{type:"BLOCK",id:"table-demo-demos",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:n(64969).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0"},react:{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":m,react:a||(a=n.t(o,2))},renderOpts:{compile:function(){var i=p()(s()().mark(function u(){var r,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,c));case 3:case"end":return e.stop()}},u)}));function d(){return i.apply(this,arguments)}return d}()}},"table-demo-collapsetable":{component:o.memo(o.lazy(function(){return n.e(1561).then(n.bind(n,43434))})),asset:{type:"BLOCK",id:"table-demo-collapsetable",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:n(50988).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0"},"lucide-react":{type:"NPM",value:"0.544.0"},react:{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":m,"lucide-react":b,react:a||(a=n.t(o,2))},renderOpts:{compile:function(){var i=p()(s()().mark(function u(){var r,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,c));case 3:case"end":return e.stop()}},u)}));function d(){return i.apply(this,arguments)}return d}()}},"table-demo-playground":{component:o.memo(o.lazy(function(){return n.e(1561).then(n.bind(n,31132))})),asset:{type:"BLOCK",id:"table-demo-playground",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:n(86417).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0"},react:{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":S,"@yuntijs/ui":m,react:a||(a=n.t(o,2))},renderOpts:{compile:function(){var i=p()(s()().mark(function u(){var r,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,c));case 3:case"end":return e.stop()}},u)}));function d(){return i.apply(this,arguments)}return d}()}}}},38325:function(l,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Table",paraId:0,tocIndex:0},{value:" component, add a ",paraId:0,tocIndex:0},{value:"CollapseTable",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
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
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;
`,paraId:1,tocIndex:1},{value:"CollapseTable",paraId:2}]},50988:function(l,t){t.Z=`import { CollapseTable, Space, Typography } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';
import React from 'react';

const { Text } = Typography;

type DataType = {
  key: string;
  type: string;
  desc: string;
};

export default () => {
  return (
    <CollapseTable<DataType>
      columns={[
        {
          title: '\u53D8\u91CF\u540D',
          dataIndex: 'key',
        },
        {
          title: '\u53D8\u91CF\u7C7B\u578B',
          dataIndex: 'type',
          render: text => <Text code>{text}</Text>,
        },
        {
          title: '\u63CF\u8FF0',
          dataIndex: 'desc',
          render: (text, row) => (
            <Space>
              <span>{row.key}</span>
              <span>{text}</span>
            </Space>
          ),
        },
      ]}
      dataSource={[
        {
          key: 'answer',
          type: 'string',
          desc: '\u5927\u6A21\u578B\u751F\u6210\u7684\u56DE\u7B54',
        },
        {
          key: 'file',
          type: 'blob',
          desc: '\u5927\u6A21\u578B\u751F\u6210\u7684\u6587\u4EF6',
        },
      ]}
      icon={VariableIcon}
      rootStyle={{ width: '100%' }}
      title="\u8F93\u51FA\u53D8\u91CF"
      variant="filled"
    />
  );
};
`},86417:function(l,t){t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Dropdown, Table, TableProps, Tag } from '@yuntijs/ui';
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
        <Dropdown.Button
          menu={{
            items: [
              {
                key: 'detail',
                label: '\u8BE6\u60C5',
              },
            ],
            onClick: ({ key }) => {
              console.warn('click', key, record);
            },
          }}
          onClick={() => {
            console.warn('\u5220\u9664', record);
          }}
          overlayStyle={{
            width: 100,
          }}
        >
          \u5220\u9664
        </Dropdown.Button>
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
          showTotal: newTotal => \`\u5171\u8BA1 \${newTotal} \u6761\`,
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
`},64969:function(l,t){t.Z=`import { Dropdown, Table, TableProps, Tag } from '@yuntijs/ui';
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
        <Dropdown.Button
          menu={{
            items: [
              {
                key: 'detail',
                label: '\u8BE6\u60C5',
              },
            ],
            onClick: ({ key }) => {
              console.warn('click', key, record);
            },
          }}
          onClick={() => {
            console.warn('\u5220\u9664', record);
          }}
          overlayStyle={{
            width: 100,
          }}
        >
          \u5220\u9664
        </Dropdown.Button>
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

  return (
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
        showTotal: newTotal => \`\u5171\u8BA1 \${newTotal} \u6761\`,
        total,
      }}
      rowSelection={{
        selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[]) => {
          setSelectedRowKeys(newSelectedRowKeys);
        },
      }}
    />
  );
};
`}}]);
