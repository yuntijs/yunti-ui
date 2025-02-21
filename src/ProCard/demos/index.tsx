/**
 * compact: true
 */

/* eslint-disable no-console */
import { ReadOutlined } from '@ant-design/icons';
import { Badge, ProCard, Typography } from '@yuntijs/ui';

import { useStyles } from './style';

const { Time } = Typography;

const ProCardDemo = () => {
  const { styles } = useStyles();
  return (
    <div className={styles.root}>
      <ProCard onClick={e => console.log('card clicked =>', e)} style={{ width: 520 }}>
        <ProCard.Header
          description="我是特别长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的描述"
          extra={{
            menu: {
              items: [
                { key: 'edit', label: '编辑' },
                { key: 'delete', label: '删除', danger: true },
              ],
              onClick: ({ key }) => {
                console.log('key =>', key);
              },
            },
          }}
          icon={{
            icon: <ReadOutlined />,
          }}
          title="我是特别长长长长长长长长长长长长长长长长长长长长长长的标题"
        />
        <ProCard.Content>
          <ProCard.Descriptions
            items={[
              {
                key: 'status',
                label: '状态',
                children: <Badge status="success" text="已发布" />,
              },
              {
                key: 'publishTime',
                label: '发布时间',
                children: <Time relativeTime={false} time={new Date().toISOString()} />,
              },
              {
                key: 'creator',
                label: '创建者',
                children: 'Luobo Zhang',
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
    </div>
  );
};

export default ProCardDemo;
