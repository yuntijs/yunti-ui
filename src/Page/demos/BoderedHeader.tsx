/**
 * compact: true
 */
import { UserOutlined } from '@ant-design/icons';
import { Page } from '@yuntijs/ui';

import { useStyles } from './style';

const { Header } = Page;

const PageBorderedHeaderDemo = () => {
  const { styles } = useStyles();
  return (
    <Page className={styles.root}>
      <Header
        bordered
        descriptions={[
          {
            icon: {
              content: <UserOutlined />,
              tooltip: '创建者',
            },
            text: '张萝卜',
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
        }}
        icon="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        status={{
          status: 'processing',
          text: '运行中',
          title: '插件运行正常',
        }}
        title="我是一个插件"
      />
    </Page>
  );
};

export default PageBorderedHeaderDemo;
