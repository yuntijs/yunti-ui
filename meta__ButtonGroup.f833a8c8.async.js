"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[93340],{21781:function(i,t,n){n.r(t),n.d(t,{demos:function(){return c}});var d=n(90228),u=n.n(d),_=n(87999),p=n.n(_),r=n(75271),b=n(64057),y=n(39776),c={"buttongroup-demo-demos":{component:r.memo(r.lazy(function(){return n.e(14303).then(n.bind(n,31967))})),asset:{type:"BLOCK",id:"buttongroup-demo-demos",refAtomIds:["ButtonGroup"],dependencies:{"index.tsx":{type:"FILE",value:n(64860).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.76"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var l=p()(u()().mark(function a(){var o,s=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,s));case 3:case"end":return e.stop()}},a)}));function m(){return l.apply(this,arguments)}return m}()}},"buttongroup-demo-moreitems":{component:r.memo(r.lazy(function(){return n.e(14303).then(n.bind(n,89766))})),asset:{type:"BLOCK",id:"buttongroup-demo-moreitems",refAtomIds:["ButtonGroup"],dependencies:{"index.tsx":{type:"FILE",value:n(92925).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.76"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var l=p()(u()().mark(function a(){var o,s=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,s));case 3:case"end":return e.stop()}},a)}));function m(){return l.apply(this,arguments)}return m}()}}}},76582:function(i,t,n){n.r(t),n.d(t,{texts:function(){return u}});var d=n(64057);const u=[{value:"\u6309\u94AE\u7EC4\uFF0C\u591A\u4E8E 2 \u4E2A item\uFF0C\u4F1A\u81EA\u52A8\u6536\u7F29\u5230\u4E0B\u62C9\u83DC\u5355\u6309\u94AE\u4E2D.",paraId:0},{value:`import { StarOutlined } from '@ant-design/icons';
import { Button, Input, Page, Space } from '@yuntijs/ui';
import { Link } from 'react-router';

const { Breadcrumb, Header, Content } = Page;

const ButtonGroupPage = () => {
  return (
    <ButtonGroup
      items={[
        {
          key: 'edit',
          label: '\u7F16\u8F91',
          type: 'primary',
        },
        {
          key: 'delete',
          label: '\u5220\u9664',
          danger: true,
        },
      ]}
      onClick={(key, e) => console.log(key, e)}
    />
  );
};
export default ButtonGroupPage;
`,paraId:1,tocIndex:0},{value:"<=",paraId:2,tocIndex:1},{value:" 2 \u4E2A item\uFF0C\u76F4\u63A5\u6E32\u67D3\u4E3A\u6309\u94AE",paraId:2,tocIndex:1},{value:">",paraId:3,tocIndex:2},{value:" 2 \u4E2A item\uFF0C\u6E32\u67D3\u4E3A\u4E0B\u62C9\u6309\u94AE",paraId:3,tocIndex:2},{value:"\u5F85\u8865\u5145",paraId:4,tocIndex:3}]},92925:function(i,t){t.Z=`/* eslint-disable no-console */
import { ButtonGroup, ButtonGroupItem } from '@yuntijs/ui';

const ButtonGroupMoreItemsDemo = () => {
  const items: ButtonGroupItem[] = [
    {
      key: 'debug',
      label: '\u8C03\u8BD5',
    },
    {
      key: 'import',
      label: '\u5BFC\u5165',
    },
    {
      key: 'export',
      label: '\u5BFC\u51FA',
    },
    {
      type: 'divider',
    },
    {
      key: 'group',
      label: 'group',
      type: 'group',
      children: [
        {
          key: 'group-item-1',
          label: '1st menu item',
        },
        {
          key: 'group-item-2',
          label: '2nd menu item',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'edit',
      label: '\u7F16\u8F91',
    },
    {
      key: 'delete',
      label: '\u5220\u9664',
      danger: true,
    },
    {
      type: 'divider',
    },
    {
      key: 'submenu',
      label: 'sub menu',
      children: [
        {
          key: 'submenu-item-1',
          label: '1st menu item',
        },
        {
          key: 'submenu-item-2',
          label: '2nd menu item',
        },
      ],
    },
  ];

  return <ButtonGroup items={items} onClick={(key, e) => console.log(key, e)} size="large" />;
};

export default ButtonGroupMoreItemsDemo;
`},64860:function(i,t){t.Z=`/* eslint-disable no-console */
import { ButtonGroup } from '@yuntijs/ui';

const ButtonGroupDemo = () => {
  return (
    <ButtonGroup
      items={[
        {
          key: 'edit',
          label: '\u7F16\u8F91',
          type: 'primary',
        },
        {
          key: 'delete',
          label: '\u5220\u9664',
          danger: true,
        },
      ]}
      onClick={(key, e) => console.log(key, e)}
    />
  );
};

export default ButtonGroupDemo;
`}}]);
