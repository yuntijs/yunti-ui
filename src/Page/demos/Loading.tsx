/**
 * compact: true
 */
import { Page } from '@yuntijs/ui';

import { useStyles } from './style';

const { Breadcrumb, Header, Content } = Page;

const PageDemo = () => {
  const { styles } = useStyles();
  return (
    <Page className={styles.root} loading>
      <Breadcrumb items={[{ title: '插件列表', path: '/plugins' }, { title: '插件详情' }]} />
      <Header
        icon="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        title="我是一个插件"
      />
      <Content>
        <></>
      </Content>
    </Page>
  );
};

export default PageDemo;
