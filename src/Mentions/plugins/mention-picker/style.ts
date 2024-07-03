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

        width: 240px;
        max-height: 320px;
        margin-top: ${token.marginXXS}px;

        background: ${token.colorBgElevated};
        border-radius: ${token.borderRadius}px;
        box-shadow: ${token.boxShadow};
      `,
      menuItem: css`
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        pointer-events: ${disabled ? 'none' : 'all'};

        padding: ${token.paddingSM / 2}px ${token.paddingSM}px;

        position: relative;

        border-radius: ${token.borderRadius}px;

        color: ${disabled ? token.colorTextDisabled : token.colorText};
        font-size: ${token.fontSize}px;
        line-height: ${token.lineHeight};
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
