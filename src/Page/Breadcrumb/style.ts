import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css }) => {
    return {
      root: css`
        padding: 20px 20px 32px;
      `,
    };
  },
  { hashPriority: 'low' }
);
