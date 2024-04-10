import { Form, Input, InputNumber, Radio, Select, Switch } from 'antd';
import React from 'react';

const FormContent: React.FC<Record<string, never>> = () => {
  return (
    <Form id="form123" initialValues={{ select: '' }}>
      <div>
        <input id="originRadio" type="radio" value="111" />
        <label htmlFor="originRadio">HTML native radio</label>
      </div>
      <Form.Item label="select" name={'select'}>
        <Select disabled placeholder="hello select" showSearch>
          <Select.Option>123</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="switch" name="inputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Radio">
        <Radio>123</Radio>
      </Form.Item>
      <Form.Item label="switch" name="enabled">
        <Switch />
      </Form.Item>
      <Form.Item label="password">
        <Input.Password placeholder="hello" />
      </Form.Item>
      <Form.Item label="username">
        <Input placeholder="hello" />
      </Form.Item>
    </Form>
  );
};
export default FormContent;
