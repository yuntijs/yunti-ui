import { createStyles } from 'antd-style';

import { DescriptionsProps } from './index';

export const useStyles = createStyles(
  (
    { css, token, prefixCls },
    {
      borderedBottom,
      borderedBottomDashed,
      borderedTop,
      borderedTopDashed,
      size,
    }: DescriptionsProps
  ) => {
    const descriptionsContentPadding = {
      small: `${token.paddingXS}px ${token.padding}px`,
      middle: `${token.padding}px ${token.paddingLG}px`,
      default: `${token.paddingSM}px ${token.paddingLG}px`,
    };
    const hasCustomSizeStyle = borderedBottom || borderedBottomDashed;
    return {
      custom: css`
        .${prefixCls}-descriptions-item-content {
          align-items: center !important;
        }
        .${prefixCls}-descriptions-row > td {
          padding-top: 8px !important;
          padding-bottom: 8px !important;
        }
        ${hasCustomSizeStyle &&
        size &&
        css`
          .${prefixCls}-descriptions-item-label, .${prefixCls}-descriptions-item-content {
            padding: ${descriptionsContentPadding[size]};
          }
          .${prefixCls}-descriptions-item {
            padding-bottom: 0 !important;
          }
          table {
            border-spacing: 0 !important;
          }
        `}
        ${borderedBottom &&
        css`
          .${prefixCls}-descriptions-item {
            border-bottom: 1px solid ${token.colorSplit};
          }
        `}
        ${borderedBottomDashed &&
        css`
          .${prefixCls}-descriptions-item {
            border-bottom: 1px dashed ${token.colorSplit};
          }
        `}
        ${borderedTop &&
        css`
          .${prefixCls}-descriptions-item {
            border-top: 1px solid ${token.colorSplit};
          }
        `}
        ${borderedTopDashed &&
        css`
          .${prefixCls}-descriptions-item {
            border-top: 1px dashed ${token.colorSplit};
          }
        `}
      `,
    };
  },
  { hashPriority: 'low' }
);
