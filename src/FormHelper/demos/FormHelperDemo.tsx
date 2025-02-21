import { FormHelper } from '@yuntijs/ui';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';

const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={setOpen.bind('', !open)}>Click me!</Button>
      {open && (
        <FormHelper>
          <Form>
            <Form.Item>
              <Input />
            </Form.Item>
          </Form>
        </FormHelper>
      )}
    </>
  );
};
export default Test;
