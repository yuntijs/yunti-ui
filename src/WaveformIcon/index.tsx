import { createStyles, keyframes } from 'antd-style';
import React from 'react';

const useStyles = createStyles(({ css }, props: WaveformIconProps) => {
  const dance1 = keyframes`
    0% {
        transform: scaleY(0.4)
    }
    50% {
      transform: scaleY(0.2)
    }
    100% {
      transform: scaleY(0.5)
    }
  `;
  const dance2 = keyframes`
    0% {
        transform: scaleY(0.7)
    }
    50% {
      transform: scaleY(0.4)
    }
    100% {
      transform: scaleY(0.7)
    }
  `;
  const dance3 = keyframes`
    0% {
        transform: scaleY(0.9)
    }
    50% {
      transform: scaleY(0.7)
    }
    100% {
      transform: scaleY(0.9)
    }
  `;
  return {
    box: css`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: ${props.width || 34}px;
      height: ${props.height || 22}px;

      background-color: ${props.bgColor || 'transparent'};
    `,
    line: css`
      display: inline-block;

      width: 3px;
      height: 90%;

      background-color: ${props.lineColor || '#000'};
      border: none;
      border-radius: 30%;
    `,
    animate1: css`
      animation: ${dance1} 500ms ease-in infinite alternate;
    `,
    animate2: css`
      animation: ${dance2} 500ms ease-out infinite alternate;
    `,
    animate3: css`
      animation: ${dance3} 500ms ease-in infinite alternate;
    `,
  };
});

interface WaveformIconProps {
  height?: number;
  width?: number;
  lineColor?: string;
  bgColor?: string;
}

export const WaveformIcon: React.FC<WaveformIconProps> = ({
  height,
  width,
  lineColor,
  bgColor,
}) => {
  const { styles, cx } = useStyles({ height, width, lineColor, bgColor });

  return (
    <div className={styles.box}>
      <div className={cx(styles.line, styles.animate1)}></div>
      <div className={cx(styles.line, styles.animate2)}></div>
      <div className={cx(styles.line, styles.animate3)}></div>
      <div className={cx(styles.line, styles.animate2)}></div>
      <div className={cx(styles.line, styles.animate1)}></div>
      <div className={cx(styles.line, styles.animate2)}></div>
      <div className={cx(styles.line, styles.animate1)}></div>
    </div>
  );
};
