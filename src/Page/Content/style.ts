import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }) => {
    return {
      root: css`
        padding-top: ${token.paddingXS}px;
      `,
    };
  },
  { hashPriority: 'low' }
);
