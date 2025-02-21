import { MinusSquareOutlined, PlusSquareOutlined, WarningFilled } from '@ant-design/icons';
import {
  notification as AntdNotification,
  type NotificationArgsProps as AntdNotificationArgsProps,
  Collapse,
  Typography,
} from 'antd';
import React, { isValidElement, useState } from 'react';

const { Panel } = Collapse;
const { Link, Paragraph, Text } = Typography;

export interface NotificationArgsProps extends AntdNotificationArgsProps {
  /** 如果不为空，则会以折叠面板的形式展示描述，展开后展示报错内容，可用来展示报错详情 */
  detail?: Record<string, any>;
  descKey?: string;
  errors?: Error[];
}
const NOTICE_MAP: { [key: string]: NotificationArgsProps[] } = {};
const setNoticeMap = (key: string, noticeProps: NotificationArgsProps) => {
  if (!NOTICE_MAP[key]) {
    NOTICE_MAP[key] = [];
  }
  NOTICE_MAP[key].push(noticeProps);
};
const removeNoticeMap = (key: string) => {
  delete NOTICE_MAP[key];
};

const reactNodeToString = function (reactNode: React.ReactNode): string {
  let string = '';
  if (typeof reactNode === 'string') {
    string = reactNode;
  } else if (typeof reactNode === 'number') {
    string = reactNode.toString();
  } else if (Array.isArray(reactNode)) {
    for (const child of reactNode) {
      string += reactNodeToString(child);
    }
  } else if (isValidElement(reactNode)) {
    string += reactNodeToString(reactNode.props.children);
  }
  return string;
};

const Message = (props: { noticeKey: string; message: React.ReactNode }) => {
  const { noticeKey: key, message } = props;
  const count = NOTICE_MAP[key]?.length || 0;
  return (
    <>
      {message}
      {count > 1 && ` (${count})`}
    </>
  );
};

const Description = (props: { noticeKey: string }) => {
  const { noticeKey: key } = props;
  const [activePanels, setActivePanels] = useState<string | string[]>();
  const descMap: { [key: string]: NotificationArgsProps } = {};
  for (const noticeProps of NOTICE_MAP[key]) {
    const descKey = reactNodeToString(noticeProps.description);
    noticeProps.descKey = descKey;
    descMap[descKey] = noticeProps;
  }
  return (
    <Collapse
      accordion
      activeKey={activePanels}
      className="yunti-notification-collapse"
      expandIcon={({ isActive }) => {
        return (
          <span className="yunti-notification-collapse-expand-icon">
            {isActive ? (
              <Link className="yunti-notification-link">
                <MinusSquareOutlined title="点击关闭错误详情" />
              </Link>
            ) : (
              <PlusSquareOutlined title="点击查看错误详情" />
            )}
          </span>
        );
      }}
      ghost
      onChange={keys => {
        setActivePanels(keys);
      }}
    >
      {Object.values(descMap).map(({ descKey, description, detail }) => (
        <Panel
          header={
            <Text ellipsis={{ tooltip: false }} style={{ width: 250 }}>
              {description}
            </Text>
          }
          key={descKey as string}
        >
          <Paragraph
            className="yunti-notification-collapse-content-p"
            copyable={{ text: JSON.stringify(detail, null, 2) }}
            type="secondary"
          >
            <pre>{JSON.stringify(detail, null, 2)}</pre>
          </Paragraph>
        </Panel>
      ))}
    </Collapse>
  );
};

const notice = (args: NotificationArgsProps) => {
  const { detail, message, description, onClose: onCloseFromProps, className, ...restArgs } = args;
  const key = reactNodeToString(message);
  setNoticeMap(key, args);
  const onClose = () => {
    onCloseFromProps?.();
    removeNoticeMap(key);
  };
  if (args.type === 'warning' && !args.icon) {
    restArgs.icon = <WarningFilled style={{ color: '#ff7d00' }} />;
  }
  if (!detail) {
    return AntdNotification.open({
      key,
      message: <Message message={message} noticeKey={key} />,
      description,
      onClose,
      className: `yunti-notification ${className}`,
      ...restArgs,
    });
  }
  return AntdNotification.open({
    key,
    message: <Message message={message} noticeKey={key} />,
    description: <Description noticeKey={key} />,
    onClose,
    className: `yunti-notification ${className}`,
    ...restArgs,
  });
};

const warnsFun = (args: NotificationArgsProps) => {
  if ((args?.errors?.length || 0) > 0) {
    if (args?.errors || [])
      for (const item of args?.errors || []) {
        notice({
          detail: item,
          description: item.message,
          ...args,
          type: 'warning',
        });
      }
  } else {
    notice({ ...args, type: 'warning' });
  }
};
export const notification = {
  ...AntdNotification,
  success: (args: NotificationArgsProps) => notice({ ...args, type: 'success' }),
  info: (args: NotificationArgsProps) => notice({ ...args, type: 'info' }),
  warning: (args: NotificationArgsProps) => notice({ ...args, type: 'warning' }),
  warn: (args: NotificationArgsProps) => notice({ ...args, type: 'warning' }),
  error: (args: NotificationArgsProps) => notice({ ...args, type: 'error' }),
  warnings: warnsFun,
  warns: warnsFun,
};

export default notification;

export { NotificationGlobalStyle } from './style';
