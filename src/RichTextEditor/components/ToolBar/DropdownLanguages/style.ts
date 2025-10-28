import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    dropdownLang: css`
      overflow-y: auto;

      height: 200px;
      padding: ${token.paddingXXS}px ${token.paddingSM}px;

      background-color: ${token.colorBgElevated};
      border-radius: ${token.borderRadius}px;
    `,
    btn: css`
      justify-content: left;
      font-size: ${token.fontSizeSM}px;
      color: ${token.colorTextSecondary};
    `,
    activeBtn: css`
      background-color: ${token.colorFillSecondary};
    `,
  };
});
