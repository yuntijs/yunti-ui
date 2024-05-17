import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Divider as AntdDivider, type DividerProps as AntdDividerProps, Space } from 'antd';
import React, { useState } from 'react';

import { useStyles } from './style';

export interface CustomDividerProps {
  /**
   * @description type of the divider
   * @default 'default'
   */
  mode?: 'expanded' | 'line' | 'default';
  /**
   * @description Default whether to expand. This parameter is available only when mode is expanded
   * @default 'false'
   */
  defaultOpen?: boolean;
  /**
   * @description Expand content. This parameter is available only when mode is expanded
   * @default '-'
   */
  content?: React.ReactNode;
  /**
   * @description The position of icon. This parameter is available only when mode is expanded and default
   * @default 'left'
   */
  iconPlacement?: 'left' | 'right';
  /**
   * @description custom open icon. This parameter is available only when mode is expanded
   * @default '-'
   */
  openIcon?: React.ReactNode;
  /**
   * @description custom close icon. This parameter is available only when mode is expanded
   * @default '-'
   */
  closeIcon?: React.ReactNode;
}
export interface DividerProps extends AntdDividerProps, CustomDividerProps {}

export const Divider: React.FC<DividerProps> = props => {
  const { mode, content, defaultOpen, iconPlacement, openIcon, closeIcon, type, ...otherProps } =
    props;

  const { styles } = useStyles({});

  const canExpanded = mode === 'expanded';
  const [open, setOpen] = useState<boolean | undefined>(defaultOpen);

  const closeIconDom = closeIcon ? closeIcon : <MinusSquareOutlined />;
  const openIconDom = openIcon ? openIcon : <PlusSquareOutlined />;
  const iconDom = canExpanded && <span>{open ? closeIconDom : openIconDom}</span>;
  if (mode === 'line' || type === 'vertical') {
    return <AntdDivider type={type} {...otherProps} />;
  }
  return (
    <>
      <AntdDivider type={type} {...otherProps}>
        <span
          className={canExpanded ? styles.custom : ''}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Space size={6}>
            {iconPlacement !== 'right' && iconDom}
            <span>{props.children}</span>
            {iconPlacement === 'right' && iconDom}
          </Space>
        </span>
      </AntdDivider>
      {canExpanded && <div style={{ display: open ? 'block' : 'none' }}>{content}</div>}
    </>
  );
};

export default Divider;
