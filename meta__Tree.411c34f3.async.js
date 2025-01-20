(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[10923],{1234:function(u,e,n){var t={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(r){if(!n.o(t,r))return Promise.resolve().then(function(){var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i});var l=t[r],a=l[0];return n.e(l[1]).then(function(){return n.t(a,19)})}o.keys=function(){return Object.keys(t)},o.id=1234,u.exports=o},62989:function(u,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return m}});var t=n(90228),o=n.n(t),r=n(87999),l=n.n(r),a=n(75271),i=n(42847),_=n(71983),m={"tree-demo-demos":{component:a.memo(a.lazy(function(){return n.e(14354).then(n.bind(n,95880))})),asset:{type:"BLOCK",id:"tree-demo-demos",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:n(66234).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.81"}},entry:"index.tsx"},context:{"@lobehub/ui":i,"@yuntijs/ui":_},renderOpts:{compile:function(){var f=l()(o()().mark(function y(){var d,p=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(74807).then(n.bind(n,74807));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,p));case 3:case"end":return s.stop()}},y)}));function c(){return f.apply(this,arguments)}return c}()}}}},79592:function(u,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"Antd Document",paraId:0}]},66234:function(u,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
