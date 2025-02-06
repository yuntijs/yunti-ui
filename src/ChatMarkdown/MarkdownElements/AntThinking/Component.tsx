import { Icon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import { PropsWithChildren, memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token, isDarkMode }) => ({
  container: css`
    cursor: pointer;
    padding-block: 12px;
    padding-block-end: 6px;
    color: ${token.colorTextTertiary};
  `,
  titlebox: css`
    padding: 8px;
    color: ${token.colorTextSecondary};
    background: ${token.colorFillTertiary};
    border-radius: 8px;

    &:hover {
      background: ${isDarkMode ? '' : token.colorFillSecondary};
    }
  `,
  title: css`
    overflow: hidden;
    display: box;
    -webkit-box-orient: vertical;

    font-size: 12px;
    text-overflow: ellipsis;

    -webkit-line-clamp: 1;
  `,
}));

export interface ThinkProps {
  second?: number;
  done?: boolean;
}

const Render = memo<PropsWithChildren<ThinkProps>>(({ children, second, done }) => {
  const { styles, theme } = useStyles();

  const [showDetail, setShowDetail] = useState(true);

  return (
    <Flexbox
      className={styles.container}
      gap={16}
      onClick={() => {
        setShowDetail(!showDetail);
      }}
      width={'100%'}
    >
      <Flexbox className={styles.titlebox} distribution={'space-between'} flex={1} horizontal>
        <Flexbox gap={8} horizontal>
          <Icon color={theme.purple} icon={Sparkles} />
          {done ? `已深度思考（用时 ${second || 0} 秒）` : '思考中...'}
        </Flexbox>
        <Icon icon={showDetail ? ChevronDown : ChevronRight} />
      </Flexbox>
      {showDetail && children}
    </Flexbox>
  );
});

export default Render;
