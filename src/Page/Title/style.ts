import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    root: css`
      margin: 0;

      font-family: ${token.fontFamily};
      font-size: 16px;
      font-weight: ${token.fontWeightStrong};
      line-height: ${token.lineHeight};
      color: ${token.colorText};
    `,
  };
});
