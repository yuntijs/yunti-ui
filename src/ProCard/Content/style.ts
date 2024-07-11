import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }) => {
    return {
      root: css`
        padding: 12px 24px 20px;
      `,
    };
  },
  { hashPriority: 'low' }
);
