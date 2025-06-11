import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token, prefixCls }, { collapsible }: { collapsible?: boolean }) => {
    return {
      root: css`
        overflow: hidden;
        margin-bottom: ${token.margin}px;
        .${prefixCls}-collapse {
          &-header {
            align-items: center !important;
            padding: 0 !important;
            &-text {
              flex: 1 !important;
              padding: ${token.paddingSM}px ${token.paddingSM}px ${token.paddingSM}px
                ${collapsible === false ? token.paddingSM : 0}px;
              & > div > div {
                font-size: ${token.fontSize}px;
                font-weight: unset;
              }
            }
          }
          &-expand-icon {
            cursor: pointer;
            padding: ${token.padding}px 0 ${token.padding}px ${token.paddingSM}px !important;
          }
          &-extra {
            padding-right: ${token.paddingSM}px;
          }
          &-item > .${prefixCls}-collapse-content {
            padding: ${token.paddingXXS}px 0;
          }
          &-content {
            &-box {
              padding: ${token.paddingXXS}px ${token.padding}px !important;
            }
          }
        }
      `,
    };
  }
);
