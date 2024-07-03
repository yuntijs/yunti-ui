import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  (
    { css, token, prefixCls },
    { isSelected, isError }: { isSelected?: boolean; isError?: boolean }
  ) => {
    const getColors = () => {
      if (isError) {
        if (isSelected) {
          return {
            background: token.colorErrorBgActive,
            border: token.colorErrorBorderHover,
            color: token.colorErrorTextActive,
          };
        }
        return {
          background: token.colorErrorBg,
          border: token.colorErrorBorder,
          color: token.colorErrorText,
        };
      }
      if (isSelected) {
        return {
          // background: token.colorInfoBgHover,
          background: token.colorInfoBg,
          border: token.colorInfoBorder,
          // color: token.colorInfoTextActive,
          color: token.colorInfoText,
        };
      }
      return {
        background: token.colorFillTertiary,
        border: 'transparent',
        color: token.colorInfoText,
      };
    };
    const { background, border, color } = getColors();
    return {
      root: css`
        margin: 1px 2px;
        padding: 0 4px;

        font-family: ${token.fontFamilyCode};
        color: ${color};

        background-color: ${background};
        border: 1px solid ${border};
        border-radius: ${token.borderRadius}px;
      `,
      text: css`
        overflow: hidden;
        display: inline-block;

        max-width: 200px;

        color: ${token.colorTextSecondary};
        text-overflow: ellipsis;
        white-space: nowrap;
      `,
      error: css`
        color: ${token.colorErrorText};
      `,
    };
  }
);
