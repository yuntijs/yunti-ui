import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      position: relative;

      min-width: 320px;
      margin: 0;
      padding: 0;

      font-family: ${token.fontFamily};
      color: ${token.colorText};

      background: ${token.colorBgContainer};
      border-radius: ${token.borderRadiusLG}px;
      box-shadow: ${token.boxShadowTertiary};
    `,
    bordered: css`
      border: 1px solid ${token.colorBorder};
      box-shadow: none;
    `,
    hoverable: css`
      &:hover {
        border-color: transparent;
        box-shadow: ${token.boxShadow};
      }
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
});
