"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[923],{41453:function(u,e,n){n.r(e),n.d(e,{StoryBook:function(){return o.ZP},useControls:function(){return r.useControls},useCreateStore:function(){return r.useCreateStore}});var o=n(16896),r=n(95165)},46610:function(u,e,n){n.r(e),n.d(e,{demos:function(){return _}});var o=n(90228),r=n.n(o),a=n(87999),i=n.n(a),s=n(52136),d=n(41453),m=n(77371),_={"tree-demo-demos":{component:s.memo(s.lazy(function(){return n.e(4354).then(n.bind(n,99867))})),asset:{type:"BLOCK",id:"tree-demo-demos",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:n(9475).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":d,"@yuntijs/ui":m},renderOpts:{compile:function(){var y=i()(r()().mark(function c(){var l,p=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(6768).then(n.bind(n,6768));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,p));case 3:case"end":return t.stop()}},c)}));function f(){return y.apply(this,arguments)}return f}()}}}},83661:function(u,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"Antd Document",paraId:0}]},9475:function(u,e){e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import type { TreeDataNode, TreeProps } from '@yuntijs/ui';
import { Tree } from '@yuntijs/ui';

const treeData: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1677ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

export default () => {
  const store = useCreateStore();
  const control: TreeProps | any = useControls(
    {
      showLine: false,
      multiple: false,
      checkable: false,
      disabled: false,
      selectable: true,
      blockNode: false,
      draggable: false,
      checkStrictly: false,
      autoExpandParent: false,
      defaultExpandAll: true,
      defaultExpandParent: true,
      showIcon: false,
      icon: 'icon ',
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Tree {...control} treeData={treeData}></Tree>
    </StoryBook>
  );
};
`}}]);
