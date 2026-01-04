"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7701],{1235:function(t,a,n){n.r(a);var d=n(92866),u=n(17621),c=n(11684),o=n(33521),m=n(70532),p=n(78232),s=n(35211),i=n(34940),l=n(52136),_=n(38325),e=n(69979);function r(){return(0,e.jsx)(s.DumiPage,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,e.jsxs)("p",{children:[_.texts[0].value,(0,e.jsx)("a",{href:"https://ant.design/components/table-cn/",children:_.texts[1].value}),_.texts[2].value,(0,e.jsx)("code",{children:_.texts[3].value}),_.texts[4].value]}),(0,e.jsxs)("h3",{id:"simple-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#simple-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Simple usage"]}),(0,e.jsx)(o.Z,{lang:"tsx",children:_.texts[5].value})]}),(0,e.jsx)(s.DumiDemo,{demo:{id:"table-demo-demos"},previewerProps:{center:!0,filename:"src/Table/demos/index.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"collapsetable",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#collapsetable",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("code",{children:_.texts[6].value})]})}),(0,e.jsx)(s.DumiDemo,{demo:{id:"table-demo-collapsetable"},previewerProps:{center:!0,filename:"src/Table/demos/CollapseTable.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"playground",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#playground",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Playground"]})}),(0,e.jsx)(s.DumiDemo,{demo:{id:"table-demo-playground"},previewerProps:{nopadding:!0,filename:"src/Table/demos/Playground.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"apis",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#apis",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"APIs"]})}),(0,e.jsx)(d.Z,{})]})})})}a.default=r},1618:function(){},38325:function(t,a,n){n.r(a),n.d(a,{texts:function(){return d}});const d=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Table",paraId:0,tocIndex:0},{value:" component, add a ",paraId:0,tocIndex:0},{value:"CollapseTable",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Space, Table, Tag } from 'antd';
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
`,paraId:1,tocIndex:1},{value:"CollapseTable",paraId:2}]}}]);
