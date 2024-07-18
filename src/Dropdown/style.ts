import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }, { divider, position }: { divider?: boolean; position?: 'top' | 'bottom' }) => {
    return {
      menuWrapper: css`
        background-color: ${token.colorBgElevated};
        border-radius: ${token.borderRadiusLG}px;
        box-shadow: ${token.boxShadowSecondary};
      `,
      menuExtra: css`
        padding: 10px 16px 4px;
        ${divider &&
        (position === 'top'
          ? css`
              border-bottom: 1px solid ${token.colorSplit};
            `
          : css`
              border-top: 1px solid ${token.colorSplit};
            `)}
      `,
    };
  },
  { hashPriority: 'low' }
);
