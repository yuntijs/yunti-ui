(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[1348],{59168:function(s,e,n){var o={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function t(r){if(!n.o(o,r))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a});var _=o[r],i=_[0];return n.e(_[1]).then(function(){return n.t(i,19)})}t.keys=function(){return Object.keys(o)},t.id=59168,s.exports=t},28847:function(s,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return p}});var o=n(90228),t=n.n(o),r=n(87999),_=n.n(r),i=n(75271),a=n(80617),d=n(59806),l=n(25144),p={"breadcrumb-demo-demos":{component:i.memo(i.lazy(function(){return n.e(7307).then(n.bind(n,51570))})),asset:{type:"BLOCK",id:"breadcrumb-demo-demos",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:n(54517).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.69"}},entry:"index.tsx"},context:{"@lobehub/ui":d,"@yuntijs/ui":l},renderOpts:{compile:function(){var c=_()(t()().mark(function j(){var m,h=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n.e(7423).then(n.bind(n,7423));case 2:return u.abrupt("return",(m=u.sent).default.apply(m,h));case 3:case"end":return u.stop()}},j)}));function y(){return c.apply(this,arguments)}return y}()}}}},31490:function(s,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});var o=n(80617);const t=[{value:"Antd Document",paraId:0}]},54517:function(s,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
