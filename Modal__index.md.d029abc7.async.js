"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6499],{33988:function(i,n,_){_.r(n);var o=_(92866),r=_(17621),m=_(11684),a=_(33521),c=_(70532),h=_(78232),d=_(35211),t=_(34940),u=_(52136),s=_(77919),e=_(69979);function l(){return(0,e.jsx)(d.DumiPage,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(t.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,e.jsxs)("p",{children:[s.texts[0].value,(0,e.jsx)("a",{href:"https://ant.design/components/modal-cn/",children:s.texts[1].value}),s.texts[2].value]}),(0,e.jsxs)("h3",{id:"simple-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#simple-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Simple usage"]}),(0,e.jsx)(a.Z,{lang:"jsx",children:s.texts[3].value})]}),(0,e.jsx)(d.DumiDemo,{demo:{id:"modal-demo-demos"},previewerProps:{center:!0,filename:"src/Modal/demos/index.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"modalmethod-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#modalmethod-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Modal.method usage"]})}),(0,e.jsx)(d.DumiDemo,{demo:{id:"modal-demo-method"},previewerProps:{center:!0,filename:"src/Modal/demos/Method.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"playground",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#playground",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Playground"]})}),(0,e.jsx)(d.DumiDemo,{demo:{id:"modal-demo-playground"},previewerProps:{nopadding:!0,filename:"src/Modal/demos/Playground.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"apis",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#apis",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"APIs"]})}),(0,e.jsx)(o.Z,{})]})})})}n.default=l},1618:function(){},77919:function(i,n,_){_.r(n),_.d(n,{texts:function(){return o}});const o=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Modal",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState < boolean > false;
  const [confirmLoading, setConfirmLoading] = useState < boolean > false;
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="YuntiUI Modal"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
        onOk={() => {
          setConfirmLoading(true);
        }}
      >
        The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully
        compatible with Antd components, and it is recommended to use antd-style as the default
        css-in-js styling solution.
      </Modal>
    </>
  );
};
`,paraId:1,tocIndex:1}]}}]);
