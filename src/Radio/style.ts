import { createStyles } from 'antd-style';

import { RadioGroupProps } from './index';

export const useStyles = createStyles(
  ({ css, token, prefixCls }, { size, segmented }: RadioGroupProps) => {
    const gap = (() => {
      if (!segmented) {
        return 0;
      }
      if (segmented !== true) {
        return segmented.gap;
      }
      return true;
    })();

    const borderRadius = (() => {
      if (!segmented) {
        return;
      }
      if (segmented !== true) {
        return segmented.borderRadius;
      }
      return true;
    })();

    const getGapSize = () => {
      const gapSizeMap = {
        small: token.sizeSM,
        middle: token.size,
        large: token.sizeLG,
      };
      if (typeof gap === 'string') {
        return gapSizeMap[gap];
      }
      if (gap === true) {
        return size ? gapSizeMap[size] : gapSizeMap['middle'];
      }
      if (!gap) {
        return 0;
      }
      return gap;
    };

    const getBorderRadius = () => {
      const borderRadiusSizeMap = {
        small: token.controlHeightSM,
        middle: token.controlHeight,
        large: token.controlHeightLG,
      };
      if (borderRadius === true) {
        return size ? borderRadiusSizeMap[size] : borderRadiusSizeMap['middle'];
      }
      if (borderRadius || borderRadius === 0) {
        return borderRadius;
      }
    };
    const borderRadiusStyle =
      getBorderRadius() &&
      css`
        label {
          border-inline-start-width: 1px !important;
          border-radius: ${getBorderRadius()}px !important;
        }
        label::before {
          display: none !important;
        }
      `;
    const gapStyle = css`
      label {
        margin-right: ${getGapSize()}px !important;
      }
      label:last-child {
        margin-right: 0 !important;
      }
    `;
    const noBorderd = segmented === true || (segmented && !segmented.bordered);
    return {
      custom: css`
        ${borderRadiusStyle}
        ${gapStyle}
        ${noBorderd &&
        css`
          .${prefixCls}-radio-button-wrapper {
            border: none !important;
          }
          .${prefixCls}-radio-button-wrapper-checked {
            border: 1px solid ${token.colorPrimary} !important;
          }
        `}
      `,
    };
  },
  { hashPriority: 'low' }
);
