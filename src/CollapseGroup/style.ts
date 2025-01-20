import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      margin-bottom: ${token.margin}px;
      .${prefixCls}-collapse {
        &-header {
          padding: 0 !important;
          &-text {
            flex: 1 !important;
            padding: ${token.paddingSM}px ${token.paddingSM}px ${token.paddingSM}px 0;
            & > * {
              font-size: ${token.fontSize}px;
              /* font-weight: unset; */
            }
          }
        }
        &-expand-icon {
          cursor: pointer;
          padding: ${token.padding}px 0 ${token.padding}px ${token.paddingSM}px;
        }
        &-extra {
          padding-right: ${token.paddingSM}px;
        }
        &-item > .${prefixCls}-collapse-content {
          padding: ${token.paddingXXS}px 0;
          background-color: ${token.colorBgContainer};
        }
        &-content {
          &-box {
            padding: ${token.paddingXXS}px ${token.padding}px !important;
          }
        }
      }
    `,
  };
});
