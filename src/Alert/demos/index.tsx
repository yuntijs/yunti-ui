import { Alert } from '@yuntijs/ui';
import { Button, Space } from 'antd';

export default () => {
  return (
    <Space orientation="vertical">
      <Alert
        action={
          <Button size="small" type="text">
            UNDO
          </Button>
        }
        closable
        description="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        showIcon
        title="YuntiUI"
        type="info"
      />
      <Alert
        showIcon
        title="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        type="info"
      />
      <Alert
        showIcon
        title="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        type="success"
      />
      <Alert
        showIcon
        title="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        type="warning"
      />
      <Alert
        showIcon
        title="The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components,
        and it is recommended to use antd-style as the default css-in-js styling solution."
        type="error"
      />
    </Space>
  );
};
