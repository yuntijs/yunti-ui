import { Space, Typography } from '@yuntijs/ui';

export default () => {
  return (
    <Space direction="vertical">
      <Typography.Link>Link</Typography.Link>
      <Typography.Text>Text</Typography.Text>
      <Typography.Title level={3}>Title</Typography.Title>
      <Typography.Paragraph>
        Paragraph:The YuntiUI components are inspired by LobeUI and developed based on Antd
        components, fully compatible with Antd components, and it is recommended to use antd-style
        as the default css-in-js styling solution.
      </Typography.Paragraph>
      <Typography.Time format="YYYY-MM-DD hh:mm:ss" relativeTime={true} time="2024-04-15" />
      <Typography.Time format="YYYY-MM-DD hh:mm:ss" relativeTime={false} time="2024-04-15" />
      <Typography.Time format="YYYY-MM-DD" relativeTime={false} time="2024-04-15" />
      <Typography.Time
        format="YYYY-MM-DD"
        relativeTime={false}
        time="2024-04-15"
        tooltip={{ title: undefined }}
      />
      <Typography.Time
        format="YYYY-MM-DD"
        relativeTime={false}
        time="2024-04-15"
        tooltip={{ title: '2024-04-15 15:00' }}
      />
      <Typography.Time
        ellipsis={{
          tooltip: {
            title: '2024-04-15 15:00',
          },
        }}
        format="YYYY-MM-DD"
        relativeTime={false}
        style={{ width: 50 }}
        time="2024-04-15"
        tooltip={{ title: undefined }}
      />
    </Space>
  );
};
