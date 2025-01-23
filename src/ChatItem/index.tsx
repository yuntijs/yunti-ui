'use client';

import Actions from '@lobehub/ui/es/chat/ChatItem/components/Actions';
import Avatar from '@lobehub/ui/es/chat/ChatItem/components/Avatar';
import BorderSpacing from '@lobehub/ui/es/chat/ChatItem/components/BorderSpacing';
import ErrorContent from '@lobehub/ui/es/chat/ChatItem/components/ErrorContent';
import Title from '@lobehub/ui/es/chat/ChatItem/components/Title';
import { useResponsive } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import MessageContent from './components/MessageContent';
import { useStyles } from './style';
import { ChatItemProps } from './type';

const MOBILE_AVATAR_SIZE = 32;

export const ChatItem = memo<ChatItemProps>(
  ({
    avatarAddon,
    onAvatarClick,
    avatarProps,
    actions,
    className,
    primary,
    loading,
    message,
    placement = 'left',
    type = 'block',
    avatar,
    error,
    showTitle,
    time,
    editing,
    onChange,
    onEditingChange,
    messageExtra,
    renderMessage,
    text,
    errorMessage,
    onDoubleClick,
    fontSize,
    markdownProps,
    markdownClassname,
    isLatest,
    ...rest
  }) => {
    const { mobile } = useResponsive();
    const { cx, styles } = useStyles({
      editing,
      placement,
      primary,
      showTitle,
      time,
      title: avatar.title,
      type,
      isLatest,
    });

    return (
      <Flexbox
        className={cx(styles.container, className)}
        direction={placement === 'left' ? 'horizontal' : 'horizontal-reverse'}
        gap={mobile ? 6 : 12}
        {...rest}
      >
        <Avatar
          {...avatarProps}
          addon={avatarAddon}
          avatar={avatar}
          loading={loading}
          onClick={onAvatarClick}
          placement={placement}
          size={mobile ? MOBILE_AVATAR_SIZE : undefined}
        />
        <Flexbox
          align={placement === 'left' ? 'flex-start' : 'flex-end'}
          className={styles.messageContainer}
        >
          <Title avatar={avatar} placement={placement} showTitle={showTitle} time={time} />
          <Flexbox
            align={placement === 'left' ? 'flex-start' : 'flex-end'}
            className={styles.messageContent}
            direction={
              // eslint-disable-next-line no-nested-ternary
              type === 'block'
                ? placement === 'left'
                  ? 'horizontal'
                  : 'horizontal-reverse'
                : 'vertical'
            }
            gap={8}
          >
            {error ? (
              <ErrorContent error={error} message={errorMessage} placement={placement} />
            ) : (
              <MessageContent
                editing={editing}
                fontSize={fontSize}
                markdownClassname={markdownClassname}
                markdownProps={markdownProps}
                message={message}
                messageExtra={messageExtra}
                onChange={onChange}
                onDoubleClick={onDoubleClick}
                onEditingChange={onEditingChange}
                placement={placement}
                primary={primary}
                renderMessage={renderMessage}
                text={text}
                type={type}
              />
            )}
            <Actions actions={actions} editing={editing} placement={placement} type={type} />
          </Flexbox>
        </Flexbox>
        {mobile && type === 'block' && <BorderSpacing borderSpacing={MOBILE_AVATAR_SIZE} />}
      </Flexbox>
    );
  }
);

export type { ChatItemProps } from './type';
