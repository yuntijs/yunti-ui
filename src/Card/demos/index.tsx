import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from '@yuntijs/ui';

export default () => {
  return (
    <Card
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      bordered={true}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      extra="extra"
      hoverable={true}
      loading={false}
      title="YuntiUI Card"
    >
      The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully
      compatible with Antd components, and it is recommended to use antd-style as the default
      css-in-js styling solution.
    </Card>
  );
};
