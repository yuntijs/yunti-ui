import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }) => {
    return {
      root: css`
        padding: ${token.padding}px;
        background-color: ${token.colorBgBase};
        border-radius: ${token.borderRadius}px;
        box-shadow: ${token.boxShadowTertiary};
      `,
    };
  },
  { hashPriority: 'low' }
);
