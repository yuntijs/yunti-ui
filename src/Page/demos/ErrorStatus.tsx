/**
 * compact: true
 */
import { Page } from '@yuntijs/ui';

import { useStyles } from './style';

const { Breadcrumb, Header, Content } = Page;

const PageErrorStatusDemo = () => {
  const { styles } = useStyles();
  return (
    <Page className={styles.root} status={404}>
      <Breadcrumb
        items={[
          { title: '插件列表', href: '/plugins' },
          { title: '天气插件', href: '/plugins/detail/plugin-1' },
          { title: '查询 15 日天气' },
        ]}
      />
      <Header
        icon="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        title="天气插件"
      />
      <Content>
        <></>
      </Content>
    </Page>
  );
};

export default PageErrorStatusDemo;
