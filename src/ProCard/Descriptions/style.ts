import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token, prefixCls }) => {
    const lableWidth = 70;
    return {
      root: css`
        &.${prefixCls}-descriptions {
          /* .${prefixCls}-descriptions-row {
            border-bottom: 1px dashed ${token.colorSplit};
          } */
          .${prefixCls}-descriptions-item {
            &-container {
              .${prefixCls}-descriptions-item-label {
                width: ${lableWidth}px;
              }
              .${prefixCls}-descriptions-item-content {
                overflow: hidden;
                display: inline-block;

                width: calc(100% - ${lableWidth}px);

                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
        }
      `,
    };
  },
  { hashPriority: 'low' }
);
