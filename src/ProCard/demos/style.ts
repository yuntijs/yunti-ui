import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      padding: 40px 24px;
      background: ${token.colorBgLayout};
    `,
  };
});
