(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7151],{59168:function(s,t,n){var l={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function a(d){if(!n.o(l,d))return Promise.resolve().then(function(){var p=new Error("Cannot find module '"+d+"'");throw p.code="MODULE_NOT_FOUND",p});var i=l[d],o=i[0];return n.e(i[1]).then(function(){return n.t(o,19)})}a.keys=function(){return Object.keys(l)},a.id=59168,s.exports=a},18038:function(s,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return h}});var l=n(90228),a=n.n(l),d=n(87999),i=n.n(d),o=n(75271),p=n(90143),h={"table-demo-demos":{component:o.memo(o.lazy(function(){return n.e(1561).then(n.bind(n,42713))})),asset:{type:"BLOCK",id:"table-demo-demos",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:n(44562).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.64"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(15474),react:n(75271)},renderOpts:{compile:function(){var u=i()(a()().mark(function g(){var r,m=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7358).then(n.bind(n,97358));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},g)}));function c(){return u.apply(this,arguments)}return c}()}},"table-demo-collapsetable":{component:o.memo(o.lazy(function(){return n.e(1561).then(n.bind(n,51379))})),asset:{type:"BLOCK",id:"table-demo-collapsetable",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:n(5044).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.64"},"lucide-react":{type:"NPM",value:"0.417.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(15474),"lucide-react":n(68068),react:n(75271)},renderOpts:{compile:function(){var u=i()(a()().mark(function g(){var r,m=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7358).then(n.bind(n,97358));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},g)}));function c(){return u.apply(this,arguments)}return c}()}},"table-demo-playground":{component:o.memo(o.lazy(function(){return n.e(1561).then(n.bind(n,66098))})),asset:{type:"BLOCK",id:"table-demo-playground",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:n(22777).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.64"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@lobehub/ui":n(59806),"@yuntijs/ui":n(15474),react:n(75271)},renderOpts:{compile:function(){var u=i()(a()().mark(function g(){var r,m=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7358).then(n.bind(n,97358));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},g)}));function c(){return u.apply(this,arguments)}return c}()}}}},58024:function(s,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return a}});var l=n(90143);const a=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Table",paraId:0,tocIndex:0},{value:" component, add a ",paraId:0,tocIndex:0},{value:"CollapseTable",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Space, Table, Tag } from 'antd';
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
`,paraId:1,tocIndex:1},{value:"CollapseTable",paraId:2}]},5044:function(s,t){"use strict";t.Z=`import { CollapseTable, Typography } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';
import React from 'react';

const { Text } = Typography;

export default () => {
  return (
    <CollapseTable
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
      variant="block"
    />
  );
};
`},22777:function(s,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},44562:function(s,t){"use strict";t.Z=`import { Dropdown, Table, TableProps, Tag } from '@yuntijs/ui';
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
