import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  (
    { css, token, prefixCls },
    { isSelected, disabled }: { isSelected?: boolean; disabled?: boolean }
  ) => {
    const selectedBg = css`
      background-color: ${token.colorFillTertiary};
    `;
    return {
      anchor: css`
        z-index: 9999;
      `,
      menuEmpty: css`
        padding: ${token.padding}px;
      `,
      menuOverlay: css`
        overflow: auto;

        width: 260px;
        max-height: 360px;
        margin-top: ${token.marginXXS}px;
        padding: ${token.paddingXXS}px;

        background: ${token.colorBgElevated};
        border-radius: ${token.borderRadius}px;
        box-shadow: ${token.boxShadow};
        .${prefixCls}-tree {
          &-switcher {
            margin: 2px 0;
          }
        }
      `,
      menuItem: css`
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        pointer-events: ${disabled ? 'none' : 'all'};

        padding: 0 ${token.paddingXS}px;
        margin: 2px;

        position: relative;

        border-radius: ${token.borderRadius}px;

        color: ${disabled ? token.colorTextDisabled : token.colorText};
        font-size: ${token.fontSize}px;
        line-height: 32px;
        ${isSelected && selectedBg}
        &:hover {
          ${selectedBg}
        }
      `,
      menuItemIcon: css`
        color: ${token.colorInfoText};
      `,
      menuItemLabel: css`
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      `,
    };
  }
);
