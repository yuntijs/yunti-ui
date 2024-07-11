import { Flex, ProCard, Tag, Typography } from '@yuntijs/ui';

const { Time } = Typography;

const ProCardBorderedDemo = () => {
  return (
    <ProCard bordered hoverable={false} style={{ width: 420 }}>
      <ProCard.Header
        description="我是描述"
        icon={{
          src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }}
        title="我是标题"
      />
      <ProCard.Content>
        <ProCard.Descriptions
          column={2}
          items={[
            {
              key: 'creator',
              label: '创建者',
              children: 'Luobo Zhang',
            },
            {
              key: 'tags',
              contentStyle: {
                width: '100%',
              },
              children: (
                <Flex gap={4} justify="flex-end">
                  <Tag color="geekblue">LLM</Tag>
                  <Tag color="green">Embedding</Tag>
                </Flex>
              ),
            },
            {
              key: 'updateTime',
              label: '更新时间',
              children: <Time relativeTime={false} time={new Date().toISOString()} />,
            },
          ]}
        />
      </ProCard.Content>
    </ProCard>
  );
};

export default ProCardBorderedDemo;
