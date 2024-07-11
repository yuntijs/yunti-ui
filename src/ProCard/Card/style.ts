import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      position: relative;

      overflow: hidden;

      margin: 0;
      padding: 0;

      font-family: ${token.fontFamily};
      color: ${token.colorText};

      background: ${token.colorBgContainer};
      border-radius: ${token.borderRadius * 2}px;
      box-shadow: ${token.boxShadowTertiary};
    `,
    bordered: css`
      border: 1px solid ${token.colorBorder};
      box-shadow: none;
    `,
    hoverable: css`
      cursor: pointer;
      transition:
        box-shadow ${token.motionDurationMid},
        border-color ${token.motionDurationMid};
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
