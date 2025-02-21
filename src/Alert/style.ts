import { createStyles } from 'antd-style';

import { CustomAlertProps } from './index';

export const useStyles = createStyles(
  ({ css }, { bordered = 'dashed' }: CustomAlertProps) => {
    return {
      custom: css`
        border-style: ${bordered} !important;
      `,
    };
  },
  { hashPriority: 'low' }
);
