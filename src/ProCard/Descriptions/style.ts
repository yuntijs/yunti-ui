import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  const lableWidth = 70;
  return {
    root: css`
      &.${prefixCls}-descriptions {
        .${prefixCls}-descriptions-row {
          & > td {
            padding-top: 4px !important;
            padding-bottom: 4px !important;
          }
          .${prefixCls}-descriptions-item {
            &-container {
              .${prefixCls}-descriptions-item-label {
                overflow: hidden;
                width: ${lableWidth}px;
                white-space: nowrap;
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
      }
    `,
  };
});
