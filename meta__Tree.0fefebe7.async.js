(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[923],{59168:function(u,e,n){var o={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function t(s){if(!n.o(o,s))return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l});var a=o[s],i=a[0];return n.e(a[1]).then(function(){return n.t(i,19)})}t.keys=function(){return Object.keys(o)},t.id=59168,u.exports=t},86246:function(u,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return y}});var o=n(90228),t=n.n(o),s=n(87999),a=n.n(s),i=n(75271),l=n(98670),d=n(59806),m=n(25144),y={"tree-demo-demos":{component:i.memo(i.lazy(function(){return n.e(4354).then(n.bind(n,91209))})),asset:{type:"BLOCK",id:"tree-demo-demos",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:n(57367).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.68"}},entry:"index.tsx"},context:{"@lobehub/ui":d,"@yuntijs/ui":m},renderOpts:{compile:function(){var f=a()(t()().mark(function p(){var _,h=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7423).then(n.bind(n,7423));case 2:return r.abrupt("return",(_=r.sent).default.apply(_,h));case 3:case"end":return r.stop()}},p)}));function c(){return f.apply(this,arguments)}return c}()}}}},80298:function(u,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});var o=n(98670);const t=[{value:"Antd Document",paraId:0}]},57367:function(u,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
