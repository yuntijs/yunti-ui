import { createStyles } from 'antd-style';

import type { SelectCardProps } from '.';

export const getNumberBySize = (size: SelectCardProps['size']) => {
  switch (size) {
    case 'small': {
      return {
        cardWidth: 144,
        imgHeight: 32,
      };
    }
    case 'large': {
      return {
        cardWidth: 200,
        imgHeight: 64,
      };
    }
    default: {
      return {
        cardWidth: 168,
        imgHeight: 40,
      };
    }
  }
};

export const useStyles = createStyles(
  ({ css, token, prefixCls }, { disabled, size }: Pick<SelectCardProps, 'disabled' | 'size'>) => {
    const { cardWidth } = getNumberBySize(size);

    return {
      option: css`
        position: relative;

        border: 1px solid ${token.colorBorder};
        border-radius: ${token.borderRadius}px;

        cursor: ${disabled ? 'not-allowed' : 'pointer'};

        padding: ${token.padding}px;

        transition: all ${token.motionDurationFast};

        width: ${cardWidth}px;
        min-height: 108px;

        ${disabled &&
        css`
          background-color: ${token.colorBgContainerDisabled};
          .${prefixCls}-typography {
            color: ${token.colorTextDisabled};
            &.${prefixCls}-typography-secondary {
              color: ${token.colorTextDisabled};
            }
          }
        `}

        ${!disabled &&
        css`
          &:hover {
            border-color: ${token.colorPrimaryBorderHover};
          }
        `}

        div.${prefixCls}-typography {
          margin-bottom: 0;
        }
      `,
      optionSelected: css`
        border-color: ${token.colorPrimary};
        &:hover {
          border-color: ${token.colorPrimaryActive};
        }
      `,
      check: css`
        position: absolute;
        right: ${token.marginXS}px;
        bottom: ${token.marginXS}px;
        color: ${token.colorPrimary};
      `,
    };
  }
);
