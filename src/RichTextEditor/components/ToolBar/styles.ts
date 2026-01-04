import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    barWrapper: css`
      position: sticky;
      z-index: 99;
      top: 0;
      left: 0;

      width: 100%;
      padding: 4px;

      background-color: ${token.colorBgContainer};
      border: 1px solid ${token.colorBorderSecondary};
      border-radius: ${token.borderRadius}px;
    `,
    divider: css`
      height: 20px;
      margin: 0 4px;
    `,
  };
});
