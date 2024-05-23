import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  (
    { css, token, prefixCls },
    { bordered = false, divider = true }: { bordered?: boolean; divider?: boolean }
  ) => {
    return {
      root: bordered
        ? css`
            padding: ${token.padding}px;
            background-color: ${token.colorBgBase};
            border-radius: ${token.borderRadius}px;
            box-shadow: ${token.boxShadowTertiary};
          `
        : css`
            padding-top: ${token.paddingXS}px;
            ${divider &&
            css`
              padding-bottom: ${token.paddingLG}px;
              border-bottom: 1px solid ${token.colorSplit};
            `}
          `,
      icon: css`
        &.${prefixCls}-avatar.${prefixCls}-avatar-square {
          border-radius: 10px;
        }
        .${prefixCls}-skeleton-avatar {
          border-radius: 10px;
        }
      `,
      titleBox: css`
        margin-bottom: ${token.marginSM}px;
      `,
      subTitle: css`
        margin-top: ${token.marginXXS}px;
        &.${prefixCls}-typography {
          margin-bottom: 0 !important;
          font-size: ${token.fontSize}px;
          color: ${token.colorTextSecondary};
        }
      `,
      title: css`
        font-size: ${token.fontSizeHeading5}px;
        font-weight: 700;
      `,
      descriptions: css`
        margin-bottom: ${token.marginXXS}px;
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
