import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    operation: css`
      justify-content: flex-end;
    `,
  };
});
