"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1722],{73199:function(o,n,e){e.r(n);var t=e(92866),l=e(17621),c=e(11684),d=e(33521),m=e(70532),p=e(78232),s=e(35211),a=e(34940),u=e(52136),i=e(94851),_=e(69979);function r(){return(0,_.jsx)(s.DumiPage,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(a.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"usage",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,_.jsxs)("p",{children:[i.texts[0].value,(0,_.jsx)("a",{href:"https://ant.design/components/notification-cn/",children:i.texts[1].value}),i.texts[2].value]}),(0,_.jsxs)("h3",{id:"simple-usage",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#simple-usage",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Simple usage"]}),(0,_.jsx)("p",{children:(0,_.jsx)("strong",{children:i.texts[3].value})}),(0,_.jsx)(d.Z,{lang:"jsx",children:i.texts[4].value})]}),(0,_.jsx)(s.DumiDemo,{demo:{id:"notification-demo-demos"},previewerProps:{center:!0,filename:"src/notification/demos/index.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h2",{id:"playground",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#playground",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Playground"]})}),(0,_.jsx)(s.DumiDemo,{demo:{id:"notification-demo-playground"},previewerProps:{nopadding:!0,filename:"src/notification/demos/Playground.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h2",{id:"apis",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#apis",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"APIs"]})}),(0,_.jsx)(t.Z,{})]})})})}n.default=r},1618:function(){},94851:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Notification",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:"Note\uFF1A Pages that use notification need to be wrapped by the app component, otherwise the notification style may be problematic",paraId:1,tocIndex:1},{value:`import { App, Button, notification } from '@yuntijs/ui';

export default () => {
  return (
    <App>
      <Button
        onClick={() => {
          notification.warnings({
            message: 'YuntiUI nitification',
            description: 'Prompt notification message globally.',
            errors: [
              {
                name: 'YuntiUI',
                message:
                  'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
              },
            ],
          });
        }}
      >
        Open
      </Button>
    </App>
  );
};
`,paraId:2,tocIndex:1}]}}]);
