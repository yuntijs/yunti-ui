import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    table: css`
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
    `,
  };
});
