(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3135],{59168:function(s,o,n){var i={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function t(l){if(!n.o(i,l))return Promise.resolve().then(function(){var v=new Error("Cannot find module '"+l+"'");throw v.code="MODULE_NOT_FOUND",v});var r=i[l],u=r[0];return n.e(r[1]).then(function(){return n.t(u,19)})}t.keys=function(){return Object.keys(i)},t.id=59168,s.exports=t},40443:function(s,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return h}});var i=n(90228),t=n.n(i),l=n(87999),r=n.n(l),u=n(75271),v=n(33654),c=n(15474),b=n(59806),h={"radio-demo-demos":{component:u.memo(u.lazy(function(){return n.e(7075).then(n.bind(n,29417))})),asset:{type:"BLOCK",id:"radio-demo-demos",refAtomIds:["Radio"],dependencies:{"index.tsx":{type:"FILE",value:n(9507).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.67"}},entry:"index.tsx"},context:{"@yuntijs/ui":c},renderOpts:{compile:function(){var d=r()(t()().mark(function m(){var a,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7423).then(n.bind(n,7423));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},m)}));function p(){return d.apply(this,arguments)}return p}()}},"radio-demo-segmented":{component:u.memo(u.lazy(function(){return n.e(7075).then(n.bind(n,86143))})),asset:{type:"BLOCK",id:"radio-demo-segmented",refAtomIds:["Radio"],dependencies:{"index.tsx":{type:"FILE",value:n(19182).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.67"}},entry:"index.tsx"},context:{"@yuntijs/ui":c},renderOpts:{compile:function(){var d=r()(t()().mark(function m(){var a,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7423).then(n.bind(n,7423));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},m)}));function p(){return d.apply(this,arguments)}return p}()}},"radio-demo-playground":{component:u.memo(u.lazy(function(){return n.e(7075).then(n.bind(n,52718))})),asset:{type:"BLOCK",id:"radio-demo-playground",refAtomIds:["Radio"],dependencies:{"index.tsx":{type:"FILE",value:n(45482).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.67"}},entry:"index.tsx"},context:{"@lobehub/ui":b,"@yuntijs/ui":c},renderOpts:{compile:function(){var d=r()(t()().mark(function m(){var a,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7423).then(n.bind(n,7423));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},m)}));function p(){return d.apply(this,arguments)}return p}()}}}},9702:function(s,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return t}});var i=n(33654);const t=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Radio } from '@yuntijs/ui';

export default () => {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  return <Radio.Group options={options} defaultValue={options[0].value} />;
};
`,paraId:1,tocIndex:1},{value:"Set the button style is similar to the Segmented component, Generally used for in-page navigation",paraId:2,tocIndex:2}]},45482:function(s,o){"use strict";o.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},19182:function(s,o){"use strict";o.Z=`import { Radio, Space } from '@yuntijs/ui';

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
`},9507:function(s,o){"use strict";o.Z=`import { Radio, Space } from '@yuntijs/ui';

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
