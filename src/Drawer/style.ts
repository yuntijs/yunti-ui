import { createStyles } from 'antd-style';

import { DrawerProps } from './index';

export const useStyles = createStyles(
  ({ css, prefixCls }, { closeIcon, closeIconPlacement, extra }: DrawerProps) => {
    const rightCloseIconStyle = css`
      .${prefixCls}-drawer-header-title {
        flex-direction: row-reverse;
      }
      .${prefixCls}-drawer-close {
        flex-direction: row-reverse;
        margin-right: -10px !important;
      }
      ${!(closeIcon === null || closeIcon === false) &&
      css`
        .${prefixCls}-drawer-extra {
          position: absolute;
          right: 45px;
        }
      `}
    `;
    return {
      custom: css`
        ${(!closeIconPlacement ||
          closeIconPlacement === 'right' ||
          (closeIconPlacement === 'auto' && !extra)) &&
        rightCloseIconStyle}
      `,
    };
  },
  { hashPriority: 'low' }
);
