import { Alert } from '@yuntijs/ui';
import { Button, Space } from 'antd';

export default () => {
  return (
    <Space direction="vertical">
      <Alert
        action={
          <Button size="small" type="text">
            UNDO
          </Button>
        }
        closable
        description="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        message="YuntiUI"
        showIcon
        type="info"
      />
      <Alert
        message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        showIcon
        type="info"
      />
      <Alert
        message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        showIcon
        type="success"
      />
      <Alert
        message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        showIcon
        type="warning"
      />
      <Alert
        message="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        showIcon
        type="error"
      />
    </Space>
  );
};
