"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1422],{54376:function(a,n,e){e.r(n);var d=e(92866),l=e(17621),m=e(11684),r=e(33521),c=e(70532),h=e(78232),s=e(35211),u=e(34940),o=e(52136),i=e(91161),_=e(69979);function t(){return(0,_.jsx)(s.DumiPage,{children:(0,_.jsx)(o.Suspense,{fallback:(0,_.jsx)(u.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"usage",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,_.jsxs)("p",{children:[i.texts[0].value,(0,_.jsx)("a",{href:"https://github.com/YYsuni/react18-json-view",children:i.texts[1].value}),i.texts[2].value]}),(0,_.jsxs)("h3",{id:"simple-usage",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#simple-usage",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Simple usage"]}),(0,_.jsx)(r.Z,{lang:"tsx",children:i.texts[3].value})]}),(0,_.jsx)(s.DumiDemo,{demo:{id:"jsonviewer-demo-demos"},previewerProps:{filename:"src/JsonViewer/demos/index.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h3",{id:"full-featured",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#full-featured",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Full Featured"]})}),(0,_.jsx)(s.DumiDemo,{demo:{id:"jsonviewer-demo-largejson"},previewerProps:{filename:"src/JsonViewer/demos/LargeJson.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h2",{id:"playground",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#playground",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Playground"]})}),(0,_.jsx)(s.DumiDemo,{demo:{id:"jsonviewer-demo-playground"},previewerProps:{filename:"src/JsonViewer/demos/Playground.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h2",{id:"apis",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#apis",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"APIs"]})}),(0,_.jsx)(d.Z,{})]})})})}n.default=t},1618:function(){},91161:function(a,n,e){e.r(n),e.d(n,{texts:function(){return d}});const d=[{value:"A JSON viewer, based on ",paraId:0,tocIndex:0},{value:"react18-json-view",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { JsonViewer } from '@yuntijs/ui';

export default () => {
  return (
    <JsonViewer
      src={{
        minRows: 3,
        string: 'string',
        number: 123456,
        boolean: false,
        obj: {
          k1: 123,
          k2: '123',
          k3: false,
          nested: {
            k4: 'nested',
          },
        },
        arr: ['string', 123456, false, null],
      }}
    />
  );
};
`,paraId:1,tocIndex:1}]}}]);
