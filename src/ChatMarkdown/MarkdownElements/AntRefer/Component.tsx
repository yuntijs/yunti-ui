import { Icon, Tag } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { AtSign } from 'lucide-react';
import { PropsWithChildren, memo } from 'react';

const useStyles = createStyles(({ css, token }) => ({
  tagBox: css`
    color: ${token.colorPrimary};
    background-color: ${token.colorPrimaryBg};
  `,
}));

const Render = memo<PropsWithChildren>(({ children }) => {
  const { styles } = useStyles();

  return (
    <Tag className={styles.tagBox} color="geekblue" icon={<Icon icon={AtSign} />}>
      {children}
    </Tag>
  );
});

export default Render;
