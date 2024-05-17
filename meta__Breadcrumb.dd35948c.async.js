(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1348],{34862:function(r,e,n){var t={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(u){if(!n.o(t,u))return Promise.resolve().then(function(){var m=new Error("Cannot find module '"+u+"'");throw m.code="MODULE_NOT_FOUND",m});var i=t[u],a=i[0];return n.e(i[1]).then(function(){return n.t(a,19)})}o.keys=function(){return Object.keys(t)},o.id=34862,r.exports=o},89943:function(r,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return m}});var t=n(90228),o=n.n(t),u=n(87999),i=n.n(u),a=n(75271),m={"breadcrumb-demo-demos":{component:a.memo(a.lazy(function(){return n.e(7307).then(n.bind(n,68148))})),asset:{type:"BLOCK",id:"breadcrumb-demo-demos",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:n(20500).Z},"@lobehub/ui":{type:"NPM",value:"1.138.25"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.20"}},entry:"index.tsx"},context:{"@lobehub/ui":n(60174),"@yuntijs/ui":n(75843)},renderOpts:{compile:function(){var l=i()(o()().mark(function p(){var d,c=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(8648).then(n.bind(n,78648));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,c));case 3:case"end":return s.stop()}},p)}));function _(){return l.apply(this,arguments)}return _}()}}}},20334:function(r,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"Antd Document",paraId:0}]},20500:function(r,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
