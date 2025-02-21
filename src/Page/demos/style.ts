import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    root: css`
      background-color: ${token.colorBgLayout};
    `,
  };
});
