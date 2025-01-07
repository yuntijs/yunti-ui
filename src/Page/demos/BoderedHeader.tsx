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
          {
            text: '2024-05-16 17:36:09',
          },
        ]}
        extraContent={{
          items: [
            {
              key: 'debug',
              label: '调试',
            },
            {
              key: 'import',
              label: '导入',
            },
            {
              key: 'export',
              label: '导出',
            },
            {
              type: 'divider',
            },
            {
              key: 'group',
              label: 'group',
              type: 'group',
              children: [
                {
                  key: 'group-item-1',
                  label: '1st menu item',
                },
                {
                  key: 'group-item-2',
                  label: '2nd menu item',
                },
              ],
            },
            {
              type: 'divider',
            },
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
              type: 'divider',
            },
            {
              key: 'submenu',
              label: 'sub menu',
              children: [
                {
                  key: 'submenu-item-1',
                  label: '1st menu item',
                },
                {
                  key: 'submenu-item-2',
                  label: '2nd menu item',
                },
              ],
            },
          ],
        }}
        icon="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        status={{
          status: 'processing',
          text: '运行中',
          tooltip: '插件运行正常',
        }}
        title="我是一个插件"
      />
    </Page>
  );
};

export default PageBorderedHeaderDemo;
