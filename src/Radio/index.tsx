import { Radio as AntdRadio, type RadioGroupProps as AntdRadioGroupProps, RadioProps } from 'antd';
import AntdGroup from 'antd/es/radio/group';
import type { RadioRef } from 'antd/es/radio/interface';
import React from 'react';

import { useStyles } from './style';

export interface CustomRadioProps {
  /**
   * @description Set the button style is similar to the Segmented component
   * @default 'false'
   */
  segmented?:
    | {
        /**
         * @description Set the spacing between buttons
         * @default 'true'
         */
        gap?: 'small' | 'middle' | 'large' | number | boolean;
        /**
         * @description Set border-radius of buttons
         * @default 'true'
         */
        borderRadius?: number | boolean;
        /**
         * @description Sets whether the button's border is displayed
         * @default 'false'
         */
        bordered?: boolean;
      }
    | boolean;
}

export interface RadioGroupProps extends AntdRadioGroupProps, CustomRadioProps {}

type RadioType = React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<RadioRef>> & {
  Group: typeof Group;
  Button: typeof AntdRadio.Button;
};
export const Radio = AntdRadio as RadioType;

const Group: React.FC<RadioGroupProps> = props => {
  const { className, ...otherProps } = props;
  if (otherProps.segmented) {
    otherProps.optionType = 'button';
  }
  const { styles, cx } = useStyles(otherProps);

  return <AntdGroup {...otherProps} className={cx(styles.custom, className)} />;
};
Radio.Group = Group;

export default Radio;

export { type RadioChangeEvent, type RadioProps } from 'antd';
