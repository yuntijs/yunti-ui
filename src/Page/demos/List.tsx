/**
 * compact: true
 */

/* eslint-disable no-console */
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Input, Page, Space } from '@yuntijs/ui';
import { useEffect, useState } from 'react';

import { Table } from './Table';
import { useStyles } from './style';

const { Title, Content } = Page;

const ListPageDemo = () => {
  const { styles } = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Page className={styles.root} loading={loading}>
      <Title>插件</Title>
      <Content>
        <Space size={12}>
          <Button icon={<PlusOutlined />} type="primary">
            创建
          </Button>
          <Button icon={<ReloadOutlined />}>刷新</Button>
          <Input.Search placeholder="请输入关键字搜索" />
        </Space>
        <Table />
      </Content>
    </Page>
  );
};

export default ListPageDemo;
