import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ token, css, cx, prefixCls }, type: 'ghost' | 'block' | 'pure') => {
    const prefix = `${prefixCls}-json-viewer`;

    const isBlock = type === 'block';

    const typeStylish = css`
      background-color: ${isBlock ? token.colorFillTertiary : 'transparent'};

      &:hover {
        background-color: ${isBlock ? token.colorFillTertiary : token.colorFillQuaternary};
      }
    `;

    return {
      container: cx(
        prefix,
        type !== 'pure' && typeStylish,
        css`
          position: relative;
          overflow: hidden;
          border-radius: ${token.borderRadius}px;
          transition: background-color 100ms ${token.motionEaseOut};
          &:hover {
            .json-view {
              /* show root copy always when hover */
              & > .json-view--copy:first-of-type {
                display: inline !important;
              }
            }
          }
        `
      ),
      content: css`
        overflow: auto;
        width: 100%;
        height: 100%;
        padding: ${type === 'pure' ? 0 : token.padding}px;
      `,
      header: css`
        padding-block: 4px;
        padding-inline: 8px;
        background: ${token.colorFillQuaternary};
      `,
      title: css`
        user-select: none;
        overflow: hidden;
        margin: 0 ${token.margin}px;
      `,
      titleText: css`
        overflow: hidden;
        font-size: ${token.fontSize}px;
        .${prefixCls}-typography {
          color: ${token.colorTextDescription};
        }
      `,
    };
  }
);
