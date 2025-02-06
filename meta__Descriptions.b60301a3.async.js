(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[80266],{1234:function(i,t,n){var s={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(u){if(!n.o(s,u))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a});var l=s[u],r=l[0];return n.e(l[1]).then(function(){return n.t(r,19)})}o.keys=function(){return Object.keys(s)},o.id=1234,i.exports=o},83435:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return f}});var s=n(90228),o=n.n(s),u=n(87999),l=n.n(u),r=n(75271),a=n(71983),h=n(87780),f={"descriptions-demo-demos":{component:r.memo(r.lazy(function(){return n.e(41117).then(n.bind(n,84513))})),asset:{type:"BLOCK",id:"descriptions-demo-demos",refAtomIds:["Descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(62472).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.93"}},entry:"index.tsx"},context:{"@yuntijs/ui":a},renderOpts:{compile:function(){var m=l()(o()().mark(function p(){var d,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,y));case 3:case"end":return e.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}},"descriptions-demo-playground":{component:r.memo(r.lazy(function(){return n.e(41117).then(n.bind(n,5157))})),asset:{type:"BLOCK",id:"descriptions-demo-playground",refAtomIds:["Descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(61721).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.93"}},entry:"index.tsx"},context:{"@lobehub/ui":h,"@yuntijs/ui":a},renderOpts:{compile:function(){var m=l()(o()().mark(function p(){var d,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,y));case 3:case"end":return e.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}}}},82152:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Descriptions",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Descriptions } from '@yuntijs/ui';

export default () => {
  return (
    <Descriptions
      title="YuntiUI"
      column={2}
      colon={false}
      labelStyle={{ width: 120 }}
      items={[
        {
          key: 'Themeable',
          label: 'Themeable',
          children: 'Customize default themes',
        },
        {
          key: 'Fast',
          label: 'Fast',
          children: 'voids unnecessary styles props',
        },
        {
          key: 'Light & Dark UI',
          label: 'Light & Dark UI',
          children: 'Automatic dark mode recognition',
        },
      ]}
    />
  );
};
`,paraId:1,tocIndex:1}]},61721:function(i,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { DescriptionsProps } from '@yuntijs/ui';
import { Descriptions } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: DescriptionsProps | any = useControls(
    {
      title: 'YuntiUI',
      bordered: false,
      colon: false,
      column: 1,
      extra: 'extra',
      layout: {
        options: ['horizontal', 'vertical'],
        value: 'horizontal',
      },
      size: {
        options: ['default', 'middle', 'small'],
        value: 'default',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Descriptions
        {...control}
        items={[
          {
            key: 'Themeable',
            label: 'Themeable',
            children: 'Customize default themes',
          },
          {
            key: 'Fast',
            label: 'Fast',
            children: 'voids unnecessary styles props',
          },
          {
            key: 'Light & Dark UI',
            label: 'Light & Dark UI',
            children: 'Automatic dark mode recognition',
          },
        ]}
      />
    </StoryBook>
  );
};
`},62472:function(i,t){"use strict";t.Z=`import { Descriptions } from '@yuntijs/ui';

export default () => {
  return (
    <Descriptions
      colon={false}
      column={2}
      items={[
        {
          key: 'Themeable',
          label: 'Themeable',
          children: 'Customize default themes',
        },
        {
          key: 'Fast',
          label: 'Fast',
          children: 'voids unnecessary styles props',
        },
        {
          key: 'Light & Dark UI',
          label: 'Light & Dark UI',
          children: 'Automatic dark mode recognition',
        },
      ]}
      labelStyle={{ width: 120 }}
      title="YuntiUI"
    />
  );
};
`}}]);
