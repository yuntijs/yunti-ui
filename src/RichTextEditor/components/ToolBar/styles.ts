import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    wrapper: css`
      width: 100%;
      padding: 4px;
      border: 1px solid ${token.colorBorderSecondary};
      border-radius: ${token.borderRadiusLG};
    `,
    divider: css`
      height: 20px;
      margin: 0 4px;
    `,
  };
});
