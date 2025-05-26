import { useResponsive } from 'antd-style';
import { type ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { EditableMessage, EditableMessageProps } from '@/EditableMessage';

import { useStyles } from '../style';
import { ChatItemProps } from '../type';

export interface MessageContentProps {
  editing?: ChatItemProps['editing'];
  fontSize?: number;
  message?: ReactNode;
  messageExtra?: ChatItemProps['messageExtra'];
  onChange?: ChatItemProps['onChange'];
  onDoubleClick?: ChatItemProps['onDoubleClick'];
  onEditingChange?: ChatItemProps['onEditingChange'];
  placement?: ChatItemProps['placement'];
  primary?: ChatItemProps['primary'];
  renderMessage?: ChatItemProps['renderMessage'];
  text?: ChatItemProps['text'];
  variant?: ChatItemProps['variant'];
  markdownProps?: EditableMessageProps['markdownProps'];
  markdownClassname?: string;
}

const MessageContent = memo<MessageContentProps>(
  ({
    editing,
    onChange,
    onEditingChange,
    text,
    message,
    placement,
    messageExtra,
    renderMessage,
    variant,
    primary,
    onDoubleClick,
    fontSize,
    markdownProps,
    markdownClassname,
  }) => {
    const { cx, styles } = useStyles({ editing, placement, primary, variant });
    const { mobile } = useResponsive();

    const content = (
      <EditableMessage
        classNames={{ input: styles.editingInput, markdown: markdownClassname }}
        editButtonSize={'small'}
        editing={editing}
        fontSize={fontSize}
        fullFeaturedCodeBlock
        markdownProps={markdownProps}
        onChange={onChange}
        onEditingChange={onEditingChange}
        openModal={mobile ? editing : undefined}
        text={text}
        value={message ? String(message).trim() : ''}
      />
    );
    const messageContent = renderMessage ? renderMessage(content) : content;

    return (
      <Flexbox
        className={cx(styles.message, editing && styles.editingContainer)}
        onDoubleClick={onDoubleClick}
      >
        {messageContent}
        {messageExtra && !editing ? (
          <div className={styles.messageExtra}>{messageExtra}</div>
        ) : null}
      </Flexbox>
    );
  }
);

export default MessageContent;
