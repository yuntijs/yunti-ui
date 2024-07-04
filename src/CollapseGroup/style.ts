import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      margin-bottom: ${token.margin}px;
      .${prefixCls}-collapse {
        &-header {
          padding: 0 !important;
          &-text {
            padding: ${token.paddingSM}px ${token.paddingSM}px ${token.paddingSM}px 0;
            & > * {
              font-size: ${token.fontSize}px;
              /* font-weight: unset; */
            }
          }
        }
        &-expand-icon {
          padding: ${token.padding}px 0 ${token.padding}px ${token.paddingSM}px;
        }
        &-extra {
          padding-right: ${token.paddingSM}px;
        }
        &-content {
          padding: ${token.paddingXS}px 0;
          background-color: ${token.colorBgContainer};
        }
      }
    `,
  };
});
