import { createStyles } from 'antd-style';

import { ModalProps } from './index';

export const useStyles = createStyles(
  ({ css, prefixCls }, { borderd = true, footer }: ModalProps) => {
    const noFooter = footer === null || (Array.isArray(footer) && footer.length === 0);
    const borderdStyle = css`
      .${prefixCls}-modal-header::after {
        content: ' ';

        position: absolute;
        top: 56px;
        left: 0;

        width: 100%;
        height: 1px;

        background: rgba(5, 5, 5, 0.06);
      }
      .${prefixCls}-modal-body {
        margin-top: 40px;
        margin-bottom: ${noFooter ? 0 : '40px'};
      }
      .${prefixCls}-modal-body::after {
        content: ' ';

        position: absolute;
        bottom: 72px;
        left: 0;

        width: 100%;
        height: ${noFooter ? 0 : '1px'};

        background: rgba(5, 5, 5, 0.06);
      }
    `;
    return {
      custom: css`
        ${borderd && borderdStyle}
      `,
    };
  },
  { hashPriority: 'low' }
);
