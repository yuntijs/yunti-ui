"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[859],{20090:function(r,n,e){e.r(n);var s=e(92866),l=e(17621),m=e(11684),o=e(33521),c=e(70532),h=e(78232),d=e(35211),t=e(34940),a=e(52136),i=e(42831),_=e(69979);function u(){return(0,_.jsx)(d.DumiPage,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(t.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsx)("p",{children:i.texts[0].value}),(0,_.jsxs)("h2",{id:"usage",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,_.jsx)(o.Z,{lang:"jsx",children:i.texts[1].value}),(0,_.jsxs)("h3",{id:"demo",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#demo",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Demo"]})]}),(0,_.jsx)(d.DumiDemo,{demo:{id:"src-pro-card-demo-demos"},previewerProps:{compact:!0,filename:"src/ProCard/demos/index.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h3",{id:"bordered-demo",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#bordered-demo",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Bordered demo"]})}),(0,_.jsx)(d.DumiDemo,{demo:{id:"src-pro-card-demo-bordered"},previewerProps:{filename:"src/ProCard/demos/Bordered.tsx"}}),(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"api",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,_.jsx)("p",{children:i.texts[2].value})]})]})})})}n.default=u},1618:function(){},42831:function(r,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"Pro Card, include Header, Content and Descriptions.",paraId:0},{value:`import { ReadOutlined } from '@ant-design/icons';
import { Badge, ProCard, Typography } from '@yuntijs/ui';

const { Time } = Typography;

const ProCardDemo = () => {
  return (
    <ProCard style={{ width: 520 }}>
      <ProCard.Header
        title="\u6211\u662F\u6807\u9898"
        description="\u6211\u662F\u63CF\u8FF0"
        extra={{ menu: { items: [{ key: 'edit', label: '\u7F16\u8F91' }] } }}
        icon={{
          icon: <ReadOutlined />,
        }}
      />
      <ProCard.Content>
        <ProCard.Descriptions
          items={[
            {
              key: 'status',
              label: '\u72B6\u6001',
              children: <Badge status="success" text="\u5DF2\u53D1\u5E03" />,
            },
            {
              key: 'publishTime',
              label: '\u53D1\u5E03\u65F6\u95F4',
              children: <Time relativeTime={false} time={new Date().toISOString()} />,
            },
          ]}
        />
      </ProCard.Content>
    </ProCard>
  );
};

export default ProCardDemo;
`,paraId:1,tocIndex:0},{value:"\u5F85\u8865\u5145",paraId:2,tocIndex:3}]}}]);
