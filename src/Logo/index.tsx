import { useTheme } from 'antd-style';
import { type ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { DivProps } from '@/types';

import { Divider } from './Divider';
import { LogoImg } from './LogoImg';
import { LogoText } from './LogoText';
import { useStyles } from './style';

export interface LogoProps extends DivProps {
  /**
   * @description Additional React Node to be rendered next to the logo
   */
  extra?: ReactNode;
  /**
   * @description Size of the logo in pixels
   * @default 32
   */
  size?: number;
  /**
   * @description Type of the logo to be rendered
   * @default 'img'
   */
  type?: 'img' | 'text' | 'combine';
}

export const Logo = memo<LogoProps>(
  ({ type = 'img', size = 32, style, extra, className, ...rest }) => {
    const theme = useTheme();
    const { styles } = useStyles();
    let logoComponent: ReactNode;

    switch (type) {
      case 'text': {
        logoComponent = (
          <LogoText
            className={className}
            height={size}
            style={style}
            width={size * 2.9375}
            {...rest}
          />
        );
        break;
      }
      case 'combine': {
        logoComponent = (
          <>
            <LogoImg height={size} style={style} width={size} {...rest} />
            <LogoText style={{ height: size, marginLeft: Math.round(size / 4), width: 'auto' }} />
          </>
        );
        break;
      }
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case 'img':
      default: {
        logoComponent = <LogoImg height={size} style={style} width={size} {...rest} />;
        break;
      }
    }

    if (!extra) return logoComponent;

    const extraSize = Math.round((size / 3) * 1.9);

    return (
      <Flexbox align={'center'} className={className} horizontal style={style} {...rest}>
        {logoComponent}
        <Divider style={{ color: theme.colorFill, height: extraSize, width: extraSize }} />
        <div className={styles.extraTitle} style={{ fontSize: extraSize }}>
          {extra}
        </div>
      </Flexbox>
    );
  }
);
