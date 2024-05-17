/**
 * compact: true
 */

/* eslint-disable no-console */
import {
  ClockCircleOutlined,
  PlusOutlined,
  ReloadOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Input, Page, Space } from '@yuntijs/ui';

import { List } from './List';
import { useStyles } from './style';

const { Breadcrumb, Header, Content } = Page;

const PageDemo = () => {
  const { styles } = useStyles();

  return (
    <Page className={styles.root}>
      <Breadcrumb items={[{ title: '插件列表', path: '/plugins' }, { title: '插件详情' }]} />
      <Header
        descriptions={[
          {
            icon: {
              content: <UserOutlined />,
              tooltip: '创建者',
            },
            text: '张萝卜',
          },
          {
            icon: {
              content: <ClockCircleOutlined />,
              tooltip: '更新时间',
            },
            text: '2024-05-16 17:36:09',
          },
        ]}
        extraContent={{
          items: [
            {
              key: 'edit',
              label: '编辑',
            },
            {
              key: 'delete',
              label: '删除',
              danger: true,
            },
            {
              key: 'test',
              label: '测试',
            },
          ],
          onClick: (key, e) => console.log('key', key, e),
        }}
        icon={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
        status={{
          status: 'processing',
          text: '运行中',
          title: '插件运行正常',
        }}
        title="我是一个插件"
        titleRender={title => (
          <Space>
            {title} <StarOutlined />
          </Space>
        )}
      />
      <Content>
        <Space size={12}>
          <Button icon={<PlusOutlined />} type="primary">
            创建
          </Button>
          <Button icon={<ReloadOutlined />}>刷新</Button>
          <Input.Search placeholder="请输入关键字搜索" />
        </Space>
        <List />
      </Content>
    </Page>
  );
};

export default PageDemo;
