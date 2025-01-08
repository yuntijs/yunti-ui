(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[91348],{69143:function(r,e,n){var t={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(u){if(!n.o(t,u))return Promise.resolve().then(function(){var m=new Error("Cannot find module '"+u+"'");throw m.code="MODULE_NOT_FOUND",m});var i=t[u],a=i[0];return n.e(i[1]).then(function(){return n.t(a,19)})}o.keys=function(){return Object.keys(t)},o.id=69143,r.exports=o},12101:function(r,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return d}});var t=n(90228),o=n.n(t),u=n(87999),i=n.n(u),a=n(75271),m=n(17724),l=n(71983),d={"breadcrumb-demo-demos":{component:a.memo(a.lazy(function(){return n.e(47307).then(n.bind(n,57457))})),asset:{type:"BLOCK",id:"breadcrumb-demo-demos",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:n(91028).Z},"@lobehub/ui":{type:"NPM",value:"1.153.16"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.77"}},entry:"index.tsx"},context:{"@lobehub/ui":m,"@yuntijs/ui":l},renderOpts:{compile:function(){var p=i()(o()().mark(function j(){var _,y=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(74807).then(n.bind(n,74807));case 2:return s.abrupt("return",(_=s.sent).default.apply(_,y));case 3:case"end":return s.stop()}},j)}));function c(){return p.apply(this,arguments)}return c}()}}}},25556:function(r,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"Antd Document",paraId:0}]},91028:function(r,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
