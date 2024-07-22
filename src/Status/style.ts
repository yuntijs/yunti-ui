import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token, prefixCls }) => {
    return {
      root: css`
        .${prefixCls}-badge.${prefixCls}-badge-status {
          .${prefixCls}-badge-status-dot {
            width: 8px;
            height: 8px;
          }
        }
      `,
      tooltip: css`
        &.anticon {
          cursor: help;
          color: ${token.colorTextTertiary};
        }
      `,
    };
  },
  { hashPriority: 'low' }
);
