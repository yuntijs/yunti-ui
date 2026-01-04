"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9553],{24943:function(d,s,a){a.r(s);var t=a(92866),u=a(17621),c=a(11684),i=a(33521),m=a(70532),p=a(78232),_=a(35211),r=a(34940),o=a(52136),n=a(65604),e=a(69979);function l(){return(0,e.jsx)(_.DumiPage,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsxs)("h2",{id:"usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,e.jsx)(i.Z,{lang:"jsx",children:n.texts[1].value}),(0,e.jsxs)("h3",{id:"detail-page",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#detail-page",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Detail page"]})]}),(0,e.jsx)(_.DumiDemo,{demo:{id:"src-page-demo-demos"},previewerProps:{compact:!0,filename:"src/Page/demos/index.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"list-page",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#list-page",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"List page"]})}),(0,e.jsx)(_.DumiDemo,{demo:{id:"src-page-demo-list"},previewerProps:{compact:!0,filename:"src/Page/demos/List.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"loading-sample",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#loading-sample",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Loading sample"]})}),(0,e.jsx)(_.DumiDemo,{demo:{id:"src-page-demo-loading"},previewerProps:{compact:!0,filename:"src/Page/demos/Loading.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"border-header-sample",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#border-header-sample",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Border Header sample"]})}),(0,e.jsx)(_.DumiDemo,{demo:{id:"src-page-demo-boderedheader"},previewerProps:{compact:!0,filename:"src/Page/demos/BoderedHeader.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"error-status-sample",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#error-status-sample",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Error status sample"]}),(0,e.jsxs)("p",{children:[n.texts[2].value,(0,e.jsx)("code",{children:n.texts[3].value}),n.texts[4].value,(0,e.jsx)("code",{children:n.texts[5].value}),n.texts[6].value,(0,e.jsx)("code",{children:n.texts[7].value}),n.texts[8].value,(0,e.jsx)("code",{children:n.texts[9].value}),n.texts[10].value,(0,e.jsx)("code",{children:n.texts[11].value}),n.texts[12].value,(0,e.jsx)("code",{children:n.texts[13].value}),n.texts[14].value,(0,e.jsx)("code",{children:n.texts[15].value}),n.texts[16].value]})]}),(0,e.jsx)(_.DumiDemo,{demo:{id:"src-page-demo-errorstatus"},previewerProps:{compact:!0,filename:"src/Page/demos/ErrorStatus.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsx)("p",{children:n.texts[17].value})]})]})})})}s.default=l},1618:function(){},65604:function(d,s,a){a.r(s),a.d(s,{texts:function(){return t}});const t=[{value:"Page container, include Breadcrumb, Header, Content and Footer.",paraId:0},{value:`import { StarOutlined } from '@ant-design/icons';
import { Button, Input, Page, Space } from '@yuntijs/ui';
import { Link } from 'react-router';

const { Breadcrumb, Header, Content } = Page;

const IndexPage = () => {
  return (
    <Page Link={Link}>
      <Breadcrumb items={[{ title: '\u63D2\u4EF6\u5217\u8868', path: '/plugins' }, { title: '\u63D2\u4EF6' }] />
      <Header
        // \u652F\u6301\u6307\u5B9A Header \u5404\u4E2A\u6A21\u5757\u7684 className
        classNames={{
          titleWrapper: 'custom-title-wrapper'
        }}
        descriptions={[
          {
            icon: {
              content: <UserOutlined />,
              tooltip: '\u521B\u5EFA\u8005',
            },
            text: '\u5F20\u841D\u535C',
          },
        ]}
        extraContent={{
          items: [
            {
              key: 'delete',
              label: '\u5220\u9664',
              danger: true,
            },
          ],
          onClick: (key, e) => console.log('key', key, e),
        }}
        icon={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
        status={{
          status: 'processing',
          text: '\u8FD0\u884C\u4E2D',
        }}
        subTitle="\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6\u7684\u63CF\u8FF0"
        title="\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6"
      />
      <Content>
        <Space size={12}>
          <Button icon={<PlusOutlined />} type="primary">
            \u521B\u5EFA
          </Button>
          <Button icon={<ReloadOutlined />}>\u5237\u65B0</Button>
          <Input.Search placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22" />
        </Space>
        {/* ... */}
      </Content>
    </Page>
  );
};
export default IndexPage;
`,paraId:1,tocIndex:0},{value:"When specify ",paraId:2,tocIndex:5},{value:"status",paraId:2,tocIndex:5},{value:" of ",paraId:2,tocIndex:5},{value:"Page",paraId:2,tocIndex:5},{value:", the ",paraId:2,tocIndex:5},{value:"Content",paraId:2,tocIndex:5},{value:" will be rendered as ",paraId:2,tocIndex:5},{value:"Result",paraId:2,tocIndex:5},{value:". Support ",paraId:2,tocIndex:5},{value:"403",paraId:2,tocIndex:5},{value:", ",paraId:2,tocIndex:5},{value:"404",paraId:2,tocIndex:5},{value:" and ",paraId:2,tocIndex:5},{value:"500",paraId:2,tocIndex:5},{value:".",paraId:2,tocIndex:5},{value:"\u5F85\u8865\u5145",paraId:3,tocIndex:6}]}}]);
