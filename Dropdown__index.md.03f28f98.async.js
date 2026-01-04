"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2683],{60710:function(t,n,e){e.r(n);var d=e(92866),l=e(17621),c=e(11684),i=e(33521),m=e(70532),p=e(78232),o=e(35211),r=e(34940),u=e(52136),s=e(54843),_=e(69979);function a(){return(0,_.jsx)(o.DumiPage,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(r.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"usage",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,_.jsxs)("p",{children:[s.texts[0].value,(0,_.jsx)("a",{href:"https://ant.design/components/dropdown-cn/",children:s.texts[1].value}),s.texts[2].value]}),(0,_.jsxs)("h3",{id:"simple-usage",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#simple-usage",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Simple usage"]}),(0,_.jsx)(i.Z,{lang:"tsx",children:s.texts[3].value})]}),(0,_.jsx)(o.DumiDemo,{demo:{id:"dropdown-demo-demos"},previewerProps:{center:!0,filename:"src/Dropdown/demos/index.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h3",{id:"use-popuprender",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#use-popuprender",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"use ",(0,_.jsx)("code",{children:s.texts[4].value})]})}),(0,_.jsx)(o.DumiDemo,{demo:{id:"dropdown-demo-popuprender"},previewerProps:{center:!0,filename:"src/Dropdown/demos/PopupRender.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h2",{id:"apis",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#apis",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"APIs"]})}),(0,_.jsx)(d.Z,{})]})})})}n.default=a},1618:function(){},54843:function(t,n,e){e.r(n),e.d(n,{texts:function(){return d}});const d=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Dropdown",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { DownOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex, Typography } from '@yuntijs/ui';
import type { MenuProps } from '@yuntijs/ui';

const { Text } = Typography;

export default () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <a href="https://botnow.cn" rel="noopener noreferrer" target="_blank">
          Botnow
        </a>
      ),
      key: 'botnow',
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      menuExtra={{
        divider: true,
        content: (
          <Text style={{ fontSize: 12 }} type="secondary">
            \u5DF2\u53D1\u5E03\u5E73\u53F0
          </Text>
        ),
      }}
    >
      <Button icon={<DownOutlined />} iconPosition="end">
        <Flex align="center" gap="small">
          <Avatar size={16} />
          <span>Botnow</span>
        </Flex>
      </Button>
    </Dropdown>
  );
};
`,paraId:1,tocIndex:1},{value:"popupRender",paraId:2}]}}]);
