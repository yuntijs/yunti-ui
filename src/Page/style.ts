import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }) => {
    return {
      root: css`
        width: inherit;
        height: 100%;
        min-height: inherit;
        padding: 20px 20px 32px;
      `,
      content: css`
        padding: 16px 24px;
        background-color: ${token.colorBgBase};
        border-radius: ${token.borderRadius}px;
        box-shadow: ${token.boxShadowTertiary};
      `,
    };
  },
  { hashPriority: 'low' }
);
