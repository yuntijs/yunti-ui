import { createStyles, keyframes } from 'antd-style';
import type { Variant } from 'antd/es/config-provider';

/**
 * styles from https://github.com/alibaba/lowcode-plugins/blob/main/packages/base-monaco-editor/src/index.scss
 */
export const useStyles = createStyles(
  (
    { css, token, prefixCls },
    {
      minimapEnabled = false,
      isFullScreen = false,
      diff = false,
      variant = 'outlined',
    }: { minimapEnabled?: boolean; isFullScreen?: boolean; diff?: boolean; variant?: Variant }
  ) => {
    const dots = keyframes`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `;

    const getBgColor = () => {
      switch (variant) {
        case 'outlined': {
          return token.colorBgBase;
        }
        case 'filled': {
          return token.colorFillTertiary;
        }
        default: {
          return 'transparent';
        }
      }
    };

    return {
      base: css`
        position: relative;

        box-sizing: content-box;
        min-height: 100px;

        background-color: ${getBgColor()};
        border: 1px solid ${variant === 'outlined' ? token.colorBorder : 'transparent'};
        border-radius: ${token.borderRadius}px;
        &:hover {
          border-color: ${variant === 'outlined' ? token.colorPrimaryHover : 'transparent'};
          ${variant === 'filled' &&
          css`
            background-color: ${token.colorFillSecondary};
          `}
        }

        &.ve-focused {
          ${variant === 'filled' &&
          css`
            background-color: ${token.colorBgBase};
          `}
          ${variant !== 'borderless' &&
          css`
            border-color: ${token.colorPrimaryActive};
          `}
        }

        &.ve-outline {
          border: 1px solid var(--color-field-border, rgba(31, 56, 88, 0.05)) !important;
        }

        & > .react-monaco-editor-container {
          width: 100%;
          height: 100%;
          min-height: 100px;
          background: transparent;

          ${isFullScreen &&
          css`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto !important;
            height: auto !important;
          `}

          .monaco-editor,
          .monaco-editor-background,
          .monaco-editor .inputarea.ime-input,
          .monaco-editor .margin {
            ${!isFullScreen &&
            css`
              background-color: transparent;
            `}
          }

          & > .monaco-editor {
            border-radius: ${token.borderRadius}px;
            outline: none;
            .overflow-guard,
            .margin {
              border-top-left-radius: ${token.borderRadius}px;
              border-bottom-left-radius: ${token.borderRadius}px;
            }
            .monaco-scrollable-element {
              border-top-right-radius: ${token.borderRadius}px;
              border-bottom-right-radius: ${token.borderRadius}px;
            }
          }
          .monaco-diff-editor {
            border-radius: ${token.borderRadius}px;
            & > .gutter {
              outline: none;
            }
            & > .original > .monaco-editor {
              border-top-left-radius: ${token.borderRadius}px;
              border-bottom-left-radius: ${token.borderRadius}px;
              outline: none;
              .overflow-guard,
              .margin {
                border-top-left-radius: ${token.borderRadius}px;
                border-bottom-left-radius: ${token.borderRadius}px;
              }
            }
            & > .modified > .monaco-editor {
              outline: none;
            }
            .diffViewport {
              border-top-right-radius: ${token.borderRadius - 1}px;
              border-bottom-right-radius: ${token.borderRadius - 1}px;
              outline: none;
            }
          }
        }

        .syntaxTips {
          position: absolute;
          bottom: 0;
          left: 0;

          box-sizing: border-box;
          width: 100%;
          max-height: 0;
          margin: 0;
          padding: 10px 30px;

          color: ${token.colorErrorText};

          background: ${token.colorErrorBg};

          transition: 0.2s ease max-height;
        }

        .syntaxTips:hover {
          overflow: auto;
          max-height: 50%;
        }

        .syntaxTips .infoIcon {
          position: absolute;
          top: 2px;
          right: 5px;
          transform: rotateY(180deg);

          width: 20px;
          height: 16px;
        }
      `,
      fullScreenBtn: css`
        &.${prefixCls}-btn {
          position: absolute;
          top: 20px;
          color: ${token.colorTextSecondary};
          transition: none;
          ${isFullScreen
            ? css`
                z-index: 9999;
                right: ${diff ? 64 : 138}px;
              `
            : css`
                right: ${minimapEnabled || diff ? 64 : 20}px;
              `}
        }
      `,
      loading: css`
        position: absolute;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: ${token.fontSizeSM}px;
        color: ${token.colorTextTertiary};

        background-color: transparent;

        &::after {
          content: '';
          width: 16px;
          /* display: inline; */
          animation: ${dots} steps(3) 1s infinite;
        }
      `,
    };
  },
  { hashPriority: 'low' }
);
