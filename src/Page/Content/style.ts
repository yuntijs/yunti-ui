import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }) => {
    return {
      root: css`
        width: 100%;
      `,
    };
  },
  { hashPriority: 'low' }
);
