import { createStyles, keyframes } from 'antd-style';

import fullScreenCancelIcon from './assets/img/full-screen-cancel-icon.png';
import fullScreenIcon from './assets/img/full-screen-icon.png';

/**
 * styles from https://github.com/alibaba/lowcode-plugins/blob/main/packages/base-monaco-editor/src/index.scss
 */
export const useStyles = createStyles(
  (
    { css, token },
    {
      minimapEnabled = false,
      isFullScreen = false,
    }: { minimapEnabled?: boolean; isFullScreen?: boolean }
  ) => {
    const dots = keyframes`
      0% { content: '.'; }
      20% { content: '..'; }
      40% { content: '...'; }
      60% { content: '....'; }
      80% { content: '.....'; }
    `;

    const fullScreenStyle = css`
      .base-monaco-full-screen-icon,
      .base-monaco-full-screen-icon-cancel {
        cursor: pointer;

        position: absolute;

        width: 20px;
        height: 20px;

        background-size: 20px 20px;
      }

      .base-monaco-full-screen-icon {
        top: 40px;
        right: ${minimapEnabled ? '64px' : '20px'};
        background-image: url(${fullScreenIcon});
      }

      .base-monaco-full-screen-icon-cancel {
        z-index: 9999;
        top: 10px;
        right: 138px;
        background-image: url(${fullScreenCancelIcon});
      }
    `;
    return {
      base: css`
        position: relative;

        box-sizing: content-box;
        width: 100%;
        min-height: 100px;

        border: 1px solid ${token.colorBorder};
        border-radius: ${token.borderRadius}px;
        &:hover {
          border-color: var(--color-field-border-hover, rgba(31, 56, 88, 0.1));
        }
        &.ve-focused {
          border-color: var(--color-field-border-active, rgba(31, 56, 88, 0.15));
        }
        &.ve-outline {
          border: 1px solid var(--color-field-border, rgba(31, 56, 88, 0.05)) !important;
        }

        .react-monaco-editor-container {
          width: 100%;
          height: 100%;
          min-height: 100px;
          background: transparent;
          & > .monaco-editor {
            border-radius: ${token.borderRadius}px;
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
            & > .original > .monaco-editor {
              border-top-left-radius: ${token.borderRadius}px;
              border-bottom-left-radius: ${token.borderRadius}px;
              .overflow-guard,
              .margin {
                border-top-left-radius: ${token.borderRadius}px;
                border-bottom-left-radius: ${token.borderRadius}px;
              }
            }
            .diffViewport {
              border-top-right-radius: ${token.borderRadius - 1}px;
              border-bottom-right-radius: ${token.borderRadius - 1}px;
            }
          }
        }

        ${fullScreenStyle}

        .loading {
          position: absolute;
          inset: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--color-text, rgba(0, 0, 0, 0.3));

          background-color: transparent;

          &::after {
            content: '';
            display: inline;
            animation: ${dots} steps(3) 1s infinite;
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

          color: red;

          background: rgba(255, 234, 234, 0.8);

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
      diff: css`
        position: relative;
        box-sizing: content-box;

        .react-monaco-editor-container {
          ${isFullScreen &&
          css`
            position: fixed;
            z-index: 9998;
            inset: 0;

            width: auto;
            height: auto;
          `}
        }

        ${fullScreenStyle}

        .base-monaco-full-screen-icon {
          right: 64px;
        }

        .base-monaco-full-screen-icon-cancel {
          position: fixed;
          right: 64px;
        }
      `,
    };
  },
  { hashPriority: 'low' }
);
