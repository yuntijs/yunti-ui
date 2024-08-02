(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1348],{59168:function(s,e,n){var o={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function t(u){if(!n.o(o,u))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a});var i=o[u],_=i[0];return n.e(i[1]).then(function(){return n.t(_,19)})}t.keys=function(){return Object.keys(o)},t.id=59168,s.exports=t},93219:function(s,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return d}});var o=n(90228),t=n.n(o),u=n(87999),i=n.n(u),_=n(75271),a=n(15872),d={"breadcrumb-demo-demos":{component:_.memo(_.lazy(function(){return n.e(7307).then(n.bind(n,30371))})),asset:{type:"BLOCK",id:"breadcrumb-demo-demos",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:n(83004).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.59"}},entry:"index.tsx"},context:{"@lobehub/ui":n(59806),"@yuntijs/ui":n(82426)},renderOpts:{compile:function(){var l=i()(t()().mark(function c(){var m,y=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(9321).then(n.bind(n,19321));case 2:return r.abrupt("return",(m=r.sent).default.apply(m,y));case 3:case"end":return r.stop()}},c)}));function p(){return l.apply(this,arguments)}return p}()}}}},30453:function(s,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});var o=n(15872);const t=[{value:"Antd Document",paraId:0}]},83004:function(s,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
