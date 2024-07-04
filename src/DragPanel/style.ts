import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      overflow: hidden;
    `,
    wrapper: css`
      width: 640px !important;
      margin: ${token.marginLG}px;
      box-shadow: none !important;
    `,
    content: css`
      overflow: hidden;
      border-radius: ${token.borderRadiusLG}px;
      box-shadow: ${token.boxShadowSecondary};
    `,
    dragWrapper: css`
      width: 100%;
      height: 100%;
    `,
    dragHandle: css`
      cursor: move;
    `,
  };
});
