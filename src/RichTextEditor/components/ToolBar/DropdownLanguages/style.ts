import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    dropdownLang: css`
      overflow-y: auto;
      height: 200px;
      font-size: ${token.fontSizeSM}px !important;

      .ant-dropdown-menu-item {
        font-size: ${token.fontSizeSM}px !important;
      }
    `,
  };
});
