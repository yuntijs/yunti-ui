import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }) => {
    return {
      root: css`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: ${token.padding}px ${token.paddingLG}px ${token.paddingXL}px;
      `,
    };
  },
  { hashPriority: 'low' }
);
