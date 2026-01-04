"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1348],{41453:function(r,e,n){n.r(e),n.d(e,{StoryBook:function(){return o.ZP},useControls:function(){return u.useControls},useCreateStore:function(){return u.useCreateStore}});var o=n(16896),u=n(95165)},28270:function(r,e,n){n.r(e),n.d(e,{demos:function(){return _}});var o=n(90228),u=n.n(o),m=n(87999),l=n.n(m),s=n(52136),a=n(41453),d=n(77371),_={"breadcrumb-demo-demos":{component:s.memo(s.lazy(function(){return n.e(7307).then(n.bind(n,42301))})),asset:{type:"BLOCK",id:"breadcrumb-demo-demos",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:n(64416).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":a,"@yuntijs/ui":d},renderOpts:{compile:function(){var y=l()(u()().mark(function c(){var i,b=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(6768).then(n.bind(n,6768));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,b));case 3:case"end":return t.stop()}},c)}));function p(){return y.apply(this,arguments)}return p}()}}}},66127:function(r,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"Antd Document",paraId:0}]},64416:function(r,e){e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import type { BreadcrumbProps } from '@yuntijs/ui';
import { Breadcrumb } from '@yuntijs/ui';

const items = [
  {
    path: '/apps',
    title: 'Application List',
  },
  {
    path: '/detail/app-1',
    title: 'Detail',
  },
  {
    path: '/versions',
    title: 'Version',
  },
];

export default () => {
  const store = useCreateStore();
  const control: BreadcrumbProps | any = useControls(
    {
      separator: '/',
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Breadcrumb {...control} items={items} />
    </StoryBook>
  );
};
`}}]);
