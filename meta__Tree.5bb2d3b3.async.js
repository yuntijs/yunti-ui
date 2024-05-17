(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[923],{34862:function(u,e,n){var t={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(r){if(!n.o(t,r))return Promise.resolve().then(function(){var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i});var l=t[r],a=l[0];return n.e(l[1]).then(function(){return n.t(a,19)})}o.keys=function(){return Object.keys(t)},o.id=34862,u.exports=o},62402:function(u,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return i}});var t=n(90228),o=n.n(t),r=n(87999),l=n.n(r),a=n(75271),i={"tree-demo-demos":{component:a.memo(a.lazy(function(){return n.e(4354).then(n.bind(n,47135))})),asset:{type:"BLOCK",id:"tree-demo-demos",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:n(61690).Z},"@lobehub/ui":{type:"NPM",value:"1.138.25"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.19"}},entry:"index.tsx"},context:{"@lobehub/ui":n(60174),"@yuntijs/ui":n(75843)},renderOpts:{compile:function(){var m=l()(o()().mark(function f(){var d,c=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(8648).then(n.bind(n,78648));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,c));case 3:case"end":return s.stop()}},f)}));function _(){return m.apply(this,arguments)}return _}()}}}},91645:function(u,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"Antd Document",paraId:0}]},61690:function(u,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
