/* eslint-disable no-nested-ternary */
import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  (
    { cx, css, token, isDarkMode, responsive },
    {
      placement,
      variant,
      title,
      primary,
      avatarSize,
      editing,
      time,
      isLatest,
    }: {
      avatarSize?: number;
      editing?: boolean;
      placement?: 'left' | 'right';
      primary?: boolean;
      showTitle?: boolean;
      time?: number;
      title?: string;
      variant?: 'bubble' | 'docs';
      isLatest?: boolean;
    }
  ) => {
    const blockStylish = css`
      padding-block: 4px;
      padding-inline: 8px;

      background-color: ${primary
        ? isDarkMode
          ? token.colorFill
          : '#F6F6F6'
        : isDarkMode
          ? token.colorFillSecondary
          : token.colorBgContainer};
      border-radius: ${token.borderRadius}px;

      transition: background-color 100ms ${token.motionEaseOut};
    `;

    const pureStylish = css`
      padding-block-start: ${title ? 0 : '6px'};
    `;

    const pureContainerStylish = css`
      margin-block-end: -16px;
      transition: background-color 100ms ${token.motionEaseOut};
    `;

    const typeStylish = variant === 'bubble' ? blockStylish : pureStylish;

    const editingStylish =
      editing &&
      css`
        width: 100%;
      `;

    const insetInline = placement === 'right' ? '-4px unset' : 'unset -4px';
    return {
      actions: cx(
        css`
          flex: none;
          align-self: ${placement === 'left' ? 'flex-start' : 'flex-end'};
          justify-content: ${placement === 'left' ? 'flex-end' : 'flex-start'};
        `,
        editing &&
          css`
            pointer-events: none !important;
            opacity: 0 !important;
          `
      ),
      avatarContainer: css`
        position: relative;
        flex: none;
        width: ${avatarSize}px;
        height: ${avatarSize}px;
      `,
      avatarGroupContainer: css`
        width: ${avatarSize}px;
      `,
      container: cx(
        variant === 'docs' && pureContainerStylish,
        css`
          position: relative;
          width: 100%;
          max-width: 100vw;
          padding: 16px;

          time {
            display: inline-block;
            padding: 0 8px;
            white-space: nowrap;
          }

          div[role='menubar'] {
            display: flex;
            padding-inline: 8px;
          }

          time,
          div[role='menubar'] {
            pointer-events: ${isLatest ? 'unset' : 'none'};
            opacity: ${isLatest ? 1 : 0};
            transition: opacity 200ms ${token.motionEaseOut};
          }

          &:hover {
            time,
            div[role='menubar'] {
              pointer-events: unset;
              opacity: 1;
            }
          }

          ${responsive.mobile} {
            padding-block: ${variant === 'docs' ? '12px' : '6px'};
            padding-inline: 8px;
          }
        `
      ),
      editingContainer: cx(
        editingStylish,
        css`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid ${token.colorBorderSecondary};

          &:active,
          &:hover {
            border-color: ${token.colorBorder};
          }
        `,
        variant === 'docs' &&
          css`
            background: ${token.colorFillQuaternary};
            border-radius: ${token.borderRadius}px;
          `
      ),
      editingInput: css`
        width: 100%;
      `,
      errorContainer: css`
        position: relative;
        overflow: hidden;
        width: 100%;
      `,

      loading: css`
        position: absolute;
        inset-block-end: 0;
        inset-inline: ${insetInline};

        width: 16px;
        height: 16px;

        color: ${token.colorBgLayout};

        background: ${token.colorPrimary};
        border-radius: 50%;
      `,
      message: cx(
        typeStylish,
        css`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          ${responsive.mobile} {
            width: 100%;
          }
        `
      ),
      messageContainer: cx(
        editingStylish,
        css`
          position: relative;
          overflow: hidden;
          max-width: 96%;
          margin-block-start: ${time ? -16 : 0}px;

          ${responsive.mobile} {
            overflow-x: auto;
          }
        `
      ),
      messageContent: cx(
        editingStylish,
        css`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          ${responsive.mobile} {
            flex-direction: column !important;
          }
        `
      ),
      messageExtra: cx('message-extra'),
      name: css`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: ${token.colorTextDescription};
        text-align: ${placement === 'left' ? 'left' : 'right'};
      `,
    };
  }
);
