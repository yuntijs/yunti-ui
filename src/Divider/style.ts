import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }) => {
    return {
      custom: css`
        cursor: pointer;
        color: ${token.colorPrimary};
        &:hover {
          color: ${token.colorPrimaryHover};
        }
      `,
    };
  },
  { hashPriority: 'low' }
);
