import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token, prefixCls }) => {
    return {
      root: css`
        padding: 16px 24px;
        background-color: ${token.colorBgBase};
        border-radius: ${token.borderRadius}px;
        box-shadow: ${token.boxShadowTertiary};
      `,
      icon: css`
        width: 64px;
        height: 64px;
        border-radius: ${token.borderRadiusLG}px;
      `,
      title: css`
        font-size: ${token.fontSizeHeading5}px;
        font-weight: 700;
      `,
      descriptions: css`
        font-size: ${token.fontSize}px;
        color: ${token.colorTextSecondary};
        .${prefixCls}-badge.${prefixCls}-badge-status {
          font-size: ${token.fontSize}px;
          & > .${prefixCls}-badge-status-text {
            font-size: ${token.fontSize}px;
            color: ${token.colorTextSecondary};
          }
        }
      `,
      rightButtons: css`
        justify-content: flex-end;
      `,
    };
  },
  { hashPriority: 'low' }
);
