import { SliderInput } from '@yuntijs/ui';
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
          <SliderInput addonAfter="核" max={16} min={0.01} step={0.01} />
        </Form.Item>

        <Form.Item label="内存" name="memory" rules={[{ required: true }]}>
          <SliderInput addonAfter="GB" max={256} min={0.5} step={0.5} />
        </Form.Item>

        <Form.Item label="GPU" name="GPU" rules={[{ required: true }]}>
          <SliderInput addonAfter="颗" max={10} min={0} step={1} />
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
