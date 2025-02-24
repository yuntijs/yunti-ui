import { Icon, Markdown } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import { PropsWithChildren, memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token, isDarkMode }) => ({
  container: css`
    padding-block: 12px;
    color: ${token.colorTextSecondary};
  `,
  titlebox: css`
    cursor: pointer;

    min-width: 140px;
    max-width: 230px;
    padding: 8px 12px;

    font-size: 12px;
    color: ${token.colorText};

    background: ${isDarkMode ? token.colorFillTertiary : '#f3f5fc'};
    border-radius: 8px;
  `,
}));

export interface ThinkProps {
  second?: number;
  done?: boolean;
}

const mProps = {
  fontSize: 13,
  lineHeight: 1.625,
  headerMultiple: 0.2,
  marginMultiple: 0.6,
};

const Render = memo<PropsWithChildren<ThinkProps>>(({ children, second, done }) => {
  const { styles, theme } = useStyles();

  const [showDetail, setShowDetail] = useState(true);

  return (
    <Flexbox className={styles.container}>
      <Flexbox
        className={styles.titlebox}
        distribution={'space-between'}
        flex={1}
        horizontal
        onClick={() => {
          setShowDetail(!showDetail);
        }}
      >
        <Flexbox gap={8} horizontal>
          <Icon color={theme.purple} icon={Sparkles} />
          {done ? `已深度思考${second ? '（用时 ' + second + ' s）' : ''} ` : '思考中...'}
        </Flexbox>
        <Icon icon={showDetail ? ChevronDown : ChevronRight} />
      </Flexbox>
      {showDetail && <Markdown {...mProps}>{children as string}</Markdown>}
    </Flexbox>
  );
});

export default Render;
