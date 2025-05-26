import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  (
    { token, css, cx, prefixCls },
    { expand, variant }: { expand: boolean; variant: 'filled' | 'outlined' | 'borderless' }
  ) => {
    const prefix = `${prefixCls}-json-viewer`;

    const isFilled = variant === 'filled';

    const typeStylish = css`
      background-color: ${isFilled ? token.colorFillTertiary : 'transparent'};
      border: 1px solid ${isFilled ? 'transparent' : token.colorBorder};

      &:hover {
        background-color: ${isFilled ? token.colorFillTertiary : token.colorFillQuaternary};
      }
    `;

    return {
      container: cx(
        prefix,
        variant !== 'borderless' && typeStylish,
        css`
          position: relative;

          overflow: hidden;

          height: ${expand ? '100%' : 'auto !important'};

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
        cursor: text;
        user-select: text;

        overflow: auto;

        width: 100%;
        height: 100%;
        padding: ${variant === 'borderless' ? 0 : token.padding}px;
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
