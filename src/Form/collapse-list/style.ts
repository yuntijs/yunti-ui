import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    empty: css`
      padding: ${token.paddingXS}px ${token.paddingSM}px;
      color: ${token.colorTextTertiary};
    `,
    list: css`
      .${prefixCls}-table {
        &-thead {
          & > tr > th {
            font-weight: normal;
            color: ${token.colorTextTertiary};
            background-color: unset;
            &::before {
              display: none;
            }
          }
        }
        &-tbody {
          & > tr:last-child {
            & > td {
              border-bottom-color: transparent;
            }
          }
        }
        &-cell {
          vertical-align: top;
        }
      }
      .${prefixCls}-form {
        &-item {
          margin-bottom: 0;
        }
      }
    `,
    noFormItem: css`
      height: ${token.controlHeight}px;
      color: ${token.colorTextTertiary};
    `,
  };
});
