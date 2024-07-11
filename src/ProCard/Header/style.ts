import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  (
    { css, token, prefixCls },
    { divider = true, iconBg = true }: { divider?: boolean; iconBg?: boolean }
  ) => {
    return {
      root: css`
        padding: 24px 20px ${divider ? 20 : 0}px 24px;
        ${divider &&
        css`
          border-bottom: 1px solid ${token.colorSplit};
        `}
      `,
      icon: css`
        &.${prefixCls}-avatar {
          color: ${token.colorPrimary};
          ${iconBg &&
          css`
            background-color: ${token.colorBgLayout};
          `}
          &.${prefixCls}-avatar-square {
            border-radius: 10px;
          }
          .anticon {
            font-size: 40px;
          }
        }
      `,
      titleBox: css`
        margin-right: 4px;
        margin-bottom: ${token.marginXXS}px;
      `,
      title: css`
        overflow: hidden;
        display: inline-block;
        flex: 1;

        width: 100px;

        font-size: 16px;
        font-weight: ${token.fontWeightStrong};
        text-overflow: ellipsis;
        white-space: nowrap;
      `,
      description: css`
        margin-right: 4px;
        &.${prefixCls}-typography {
          margin-bottom: 0 !important;
          font-size: 12px;
          color: ${token.colorTextSecondary};
        }
      `,
      extra: css`
        margin-top: -4px;
      `,
      rightButtons: css`
        justify-content: flex-end;
      `,
    };
  },
  { hashPriority: 'low' }
);
