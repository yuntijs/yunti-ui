(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[16723],{1234:function(i,t,n){var u={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function l(r){if(!n.o(u,r))return Promise.resolve().then(function(){var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o});var y=u[r],a=y[0];return n.e(y[1]).then(function(){return n.t(a,19)})}l.keys=function(){return Object.keys(u)},l.id=1234,i.exports=l},16662:function(i,t,n){"use strict";var u;n.r(t),n.d(t,{demos:function(){return j}});var l=n(90228),r=n.n(l),y=n(87999),a=n.n(y),o=n(75271),c=n(71983),I=n(63651),h=n(87780),j={"sliderinput-demo-demos":{component:o.memo(o.lazy(function(){return n.e(91053).then(n.bind(n,49357))})),asset:{type:"BLOCK",id:"sliderinput-demo-demos",refAtomIds:["SliderInput"],dependencies:{"index.tsx":{type:"FILE",value:n(53987).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.89"}},entry:"index.tsx"},context:{"@yuntijs/ui":c},renderOpts:{compile:function(){var d=a()(r()().mark(function p(){var s,f=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,f));case 3:case"end":return e.stop()}},p)}));function m(){return d.apply(this,arguments)}return m}()}},"sliderinput-demo-form":{component:o.memo(o.lazy(function(){return n.e(91053).then(n.bind(n,46246))})),asset:{type:"BLOCK",id:"sliderinput-demo-form",refAtomIds:["SliderInput"],dependencies:{"index.tsx":{type:"FILE",value:n(73631).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.89"},antd:{type:"NPM",value:"5.23.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":c,antd:I,react:u||(u=n.t(o,2))},renderOpts:{compile:function(){var d=a()(r()().mark(function p(){var s,f=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,f));case 3:case"end":return e.stop()}},p)}));function m(){return d.apply(this,arguments)}return m}()}},"sliderinput-demo-playground":{component:o.memo(o.lazy(function(){return n.e(91053).then(n.bind(n,108))})),asset:{type:"BLOCK",id:"sliderinput-demo-playground",refAtomIds:["SliderInput"],dependencies:{"index.tsx":{type:"FILE",value:n(33221).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.89"}},entry:"index.tsx"},context:{"@lobehub/ui":h,"@yuntijs/ui":c},renderOpts:{compile:function(){var d=a()(r()().mark(function p(){var s,f=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,f));case 3:case"end":return e.stop()}},p)}));function m(){return d.apply(this,arguments)}return m}()}}}},21879:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return u}});const u=[{value:"A Slider and Input component for displaying current value and intervals in range.",paraId:0}]},73631:function(i,t){"use strict";t.Z=`import { SliderInput } from '@yuntijs/ui';
import { Button, Divider, Form } from 'antd';
import { useState } from 'react';

const SliderInputFormDemo = () => {
  const [values, setValues] = useState({});
  return (
    <>
      <Form
        colon={false}
        initialValues={{
          CPU: 4,
          memory: 16,
          GPU: 0,
        }}
        labelAlign="left"
        labelCol={{ flex: '110px' }}
        labelWrap
        name="slider"
        onFinish={formValues => setValues(formValues)}
        wrapperCol={{ flex: 1 }}
      >
        <Form.Item label="CPU" name="CPU" rules={[{ required: true }]}>
          <SliderInput addonAfter="\u6838" max={16} min={0.01} step={0.01} />
        </Form.Item>

        <Form.Item label="\u5185\u5B58" name="memory" rules={[{ required: true }]}>
          <SliderInput addonAfter="GB" max={256} min={0.5} step={0.5} />
        </Form.Item>

        <Form.Item label="GPU" name="GPU" rules={[{ required: true }]}>
          <SliderInput addonAfter="\u9897" max={10} min={0} step={1} />
        </Form.Item>

        <Form.Item label=" ">
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left" plain>
        Form values
      </Divider>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </>
  );
};

export default SliderInputFormDemo;
`},33221:function(i,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { SliderInput, SliderInputProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const controls: SliderInputProps | any = useControls(
    {
      min: 0.1,
      max: 16,
      step: 0.01,
      gutter: 16,
      defaultValue: 4,
      addonAfter: '\u6838',
      addonBefore: '',
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <SliderInput inputCol={{ span: 7 }} style={{ width: '100%' }} {...controls} />
    </StoryBook>
  );
};
`},53987:function(i,t){"use strict";t.Z=`import { SliderInput } from '@yuntijs/ui';

const SliderInputDemo = () => {
  return <SliderInput addonAfter="\u6838" max={16} min={0.01} placeholder="CPU" step={0.01} />;
};

export default SliderInputDemo;
`}}]);
