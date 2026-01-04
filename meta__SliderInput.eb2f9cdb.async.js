"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6723],{41453:function(s,t,n){n.r(t),n.d(t,{StoryBook:function(){return o.ZP},useControls:function(){return p.useControls},useCreateStore:function(){return p.useCreateStore}});var o=n(16896),p=n(95165)},91570:function(s,t,n){var o;n.r(t),n.d(t,{demos:function(){return P}});var p=n(90228),l=n.n(p),c=n(87999),y=n.n(c),u=n(52136),f=n(77371),I=n(99630),h=n(41453),P={"sliderinput-demo-demos":{component:u.memo(u.lazy(function(){return n.e(1053).then(n.bind(n,72427))})),asset:{type:"BLOCK",id:"sliderinput-demo-demos",refAtomIds:["SliderInput"],dependencies:{"index.tsx":{type:"FILE",value:n(13509).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":f},renderOpts:{compile:function(){var i=y()(l()().mark(function m(){var r,d=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},m)}));function a(){return i.apply(this,arguments)}return a}()}},"sliderinput-demo-form":{component:u.memo(u.lazy(function(){return n.e(1053).then(n.bind(n,33172))})),asset:{type:"BLOCK",id:"sliderinput-demo-form",refAtomIds:["SliderInput"],dependencies:{"index.tsx":{type:"FILE",value:n(35490).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0"},antd:{type:"NPM",value:"5.27.3"},react:{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":f,antd:I,react:o||(o=n.t(u,2))},renderOpts:{compile:function(){var i=y()(l()().mark(function m(){var r,d=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},m)}));function a(){return i.apply(this,arguments)}return a}()}},"sliderinput-demo-playground":{component:u.memo(u.lazy(function(){return n.e(1053).then(n.bind(n,23112))})),asset:{type:"BLOCK",id:"sliderinput-demo-playground",refAtomIds:["SliderInput"],dependencies:{"index.tsx":{type:"FILE",value:n(90696).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":h,"@yuntijs/ui":f},renderOpts:{compile:function(){var i=y()(l()().mark(function m(){var r,d=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},m)}));function a(){return i.apply(this,arguments)}return a}()}}}},2985:function(s,t,n){n.r(t),n.d(t,{texts:function(){return o}});const o=[{value:"A Slider and Input component for displaying current value and intervals in range.",paraId:0}]},35490:function(s,t){t.Z=`import { SliderInput } from '@yuntijs/ui';
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
`},90696:function(s,t){t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
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
`},13509:function(s,t){t.Z=`import { SliderInput } from '@yuntijs/ui';

const SliderInputDemo = () => {
  return <SliderInput addonAfter="\u6838" max={16} min={0.01} placeholder="CPU" step={0.01} />;
};

export default SliderInputDemo;
`}}]);
