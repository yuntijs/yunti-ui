"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3179],{10956:function(i,n,_){_.r(n);var t=_(92866),l=_(17621),c=_(11684),o=_(33521),m=_(70532),p=_(78232),d=_(35211),a=_(34940),u=_(52136),s=_(450),e=_(69979);function r(){return(0,e.jsx)(d.DumiPage,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(a.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,e.jsxs)("p",{children:[s.texts[0].value,(0,e.jsx)("a",{href:"https://ant.design/components/drawer-cn/",children:s.texts[1].value}),s.texts[2].value]}),(0,e.jsxs)("h3",{id:"simple-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#simple-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Simple usage"]}),(0,e.jsx)(o.Z,{lang:"jsx",children:s.texts[3].value})]}),(0,e.jsx)(d.DumiDemo,{demo:{id:"drawer-demo-demos"},previewerProps:{center:!0,filename:"src/Drawer/demos/index.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"playground",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#playground",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Playground"]})}),(0,e.jsx)(d.DumiDemo,{demo:{id:"drawer-demo-playground"},previewerProps:{nopadding:!0,filename:"src/Drawer/demos/Playground.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"apis",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#apis",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"APIs"]})}),(0,e.jsx)(t.Z,{})]})})})}n.default=r},1618:function(){},450:function(i,n,_){_.r(n),_.d(n,{texts:function(){return t}});const t=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Drawer",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Button, Drawer, Flex, Space } from '@yuntijs/ui';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="YuntiUI Drawer"
        onClose={onClose}
        open={open}
        extra={<Button>Action</Button>}
        footer={
          <Flex justify="flex-end" gap={16}>
            <Button>\u53D6\u6D88</Button>
            <Button type="primary">\u786E\u5B9A</Button>
          </Flex>
        }
      >
        <p>
          The YuntiUI components are inspired by LobeUI and developed based on Antd components,
          fully compatible with Antd components, and it is recommended to use antd-style as the
          default css-in-js styling solution.
        </p>
      </Drawer>
    </div>
  );
};
`,paraId:1,tocIndex:1}]}}]);
