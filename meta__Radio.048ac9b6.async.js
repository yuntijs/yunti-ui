(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[43135],{69143:function(s,o,n){var i={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function t(l){if(!n.o(i,l))return Promise.resolve().then(function(){var v=new Error("Cannot find module '"+l+"'");throw v.code="MODULE_NOT_FOUND",v});var r=i[l],u=r[0];return n.e(r[1]).then(function(){return n.t(u,19)})}t.keys=function(){return Object.keys(i)},t.id=69143,s.exports=t},19071:function(s,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return h}});var i=n(90228),t=n.n(i),l=n(87999),r=n.n(l),u=n(75271),v=n(40192),c=n(39776),b=n(17724),h={"radio-demo-demos":{component:u.memo(u.lazy(function(){return n.e(87075).then(n.bind(n,95024))})),asset:{type:"BLOCK",id:"radio-demo-demos",refAtomIds:["Radio"],dependencies:{"index.tsx":{type:"FILE",value:n(80372).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.76"}},entry:"index.tsx"},context:{"@yuntijs/ui":c},renderOpts:{compile:function(){var d=r()(t()().mark(function m(){var a,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},m)}));function p(){return d.apply(this,arguments)}return p}()}},"radio-demo-segmented":{component:u.memo(u.lazy(function(){return n.e(87075).then(n.bind(n,6087))})),asset:{type:"BLOCK",id:"radio-demo-segmented",refAtomIds:["Radio"],dependencies:{"index.tsx":{type:"FILE",value:n(78774).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.76"}},entry:"index.tsx"},context:{"@yuntijs/ui":c},renderOpts:{compile:function(){var d=r()(t()().mark(function m(){var a,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},m)}));function p(){return d.apply(this,arguments)}return p}()}},"radio-demo-playground":{component:u.memo(u.lazy(function(){return n.e(87075).then(n.bind(n,39679))})),asset:{type:"BLOCK",id:"radio-demo-playground",refAtomIds:["Radio"],dependencies:{"index.tsx":{type:"FILE",value:n(61356).Z},"@lobehub/ui":{type:"NPM",value:"1.153.16"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.76"}},entry:"index.tsx"},context:{"@lobehub/ui":b,"@yuntijs/ui":c},renderOpts:{compile:function(){var d=r()(t()().mark(function m(){var a,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},m)}));function p(){return d.apply(this,arguments)}return p}()}}}},1731:function(s,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return t}});var i=n(40192);const t=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Radio } from '@yuntijs/ui';

export default () => {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  return <Radio.Group options={options} defaultValue={options[0].value} />;
};
`,paraId:1,tocIndex:1},{value:"Set the button style is similar to the Segmented component, Generally used for in-page navigation",paraId:2,tocIndex:2}]},61356:function(s,o){"use strict";o.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Radio, RadioGroupProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  const control: RadioGroupProps | any = useControls(
    {
      defaultValue: options[0].value,
      disabled: false,
      optionType: {
        options: ['default', 'button'],
        value: 'default',
      },
      buttonStyle: {
        options: ['outline', 'solid'],
        value: 'outline',
      },
      segmented: false,
      size: {
        options: ['large', 'middle', 'small'],
        value: 'middle',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Radio.Group {...control} options={options} />
    </StoryBook>
  );
};
`},78774:function(s,o){"use strict";o.Z=`import { Radio, Space } from '@yuntijs/ui';

export default () => {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  return (
    <Space direction="vertical">
      <Radio.Group
        defaultValue={options[0].value}
        optionType="button"
        options={options}
        segmented={{
          bordered: true,
          borderRadius: 15,
          gap: 15,
        }}
      />
      <Radio.Group
        defaultValue={options[0].value}
        optionType="button"
        options={options}
        segmented={true}
      />
      <Radio.Group
        buttonStyle="solid"
        defaultValue={options[0].value}
        optionType="button"
        options={options}
        segmented={{
          bordered: true,
          borderRadius: 15,
          gap: 15,
        }}
      />
      <Radio.Group
        buttonStyle="solid"
        defaultValue={options[0].value}
        optionType="button"
        options={options}
        segmented={true}
      />
    </Space>
  );
};
`},80372:function(s,o){"use strict";o.Z=`import { Radio, Space } from '@yuntijs/ui';

export default () => {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  return (
    <Space direction="vertical">
      <Radio.Group defaultValue={options[0].value} options={options} />
      <Radio.Group defaultValue={options[0].value} optionType="button" options={options} />
      <Radio.Group
        buttonStyle="solid"
        defaultValue={options[0].value}
        optionType="button"
        options={options}
      />
    </Space>
  );
};
`}}]);
