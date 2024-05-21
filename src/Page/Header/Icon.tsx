import { Avatar } from 'antd';
import React, { useMemo } from 'react';

export interface HeaderIconProps {
  /** 样式名 */
  className?: string;
  /** 图像无法显示时的替代文本	 */
  alt?: string;
  /** 图标的形状，默认为 square */
  shape?: 'circle' | 'square';
  /** 设置图标的大小 */
  size?: number | 'large' | 'small' | 'default';
  /** 图标的资源地址或者图片元素 */
  src: React.ReactNode;
  /** 样式 */
  style?: React.CSSProperties;
}

export const getIconSize = (size: HeaderIconProps['size']) => {
  if (typeof size === 'number') {
    return size;
  }
  switch (size) {
    case 'small': {
      return 40;
    }
    case 'large': {
      return 104;
    }
    default: {
      return 64;
    }
  }
};

export const HeaderIcon: React.FC<HeaderIconProps> = props => {
  const { shape = 'square', size, src, ...otherProps } = props;
  const sizeNumber = useMemo(() => {
    return getIconSize(size);
  }, [size]);
  return <Avatar shape={shape} size={sizeNumber} src={src} {...otherProps} />;
};
