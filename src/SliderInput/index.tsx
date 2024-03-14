import { Col, ColProps, InputNumber, Row, Slider } from 'antd';
import type { InputNumberProps, SliderSingleProps } from 'antd';
import React, { useState } from 'react';

export interface SliderInputProps {
  /** The current value */
  value?: number;
  /** The initial value */
  defaultValue?: number;
  /** The min value */
  min?: number;
  /** The max value */
  max?: number;
  /** The number to which the current value is increased or decreased. It can be an integer or decimal */
  step?: number;
  /** Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time [horizontal, vertical] */
  gutter?: number;
  /**
   * @description Slider layout, like <Col> component. Set span offset value like {span: 3, offset: 12} or sm: {span: 3, offset: 12}
   * @type ColProps
   * @default { span: 12 }
   */
  sliderCol?: ColProps;
  /**
   * @description The layout for input controls, same as sliderCol, see https://ant.design/components/grid#row for detail
   * @type ColProps
   * @default { span: 5 }
   */
  inputCol?: ColProps;
  /** The label text displayed before (on the left side of) the input field */
  addonAfter?: React.ReactNode;
  /** The label text displayed before (on the left side of) the input field */
  addonBefore?: React.ReactNode;
  /** placeholder  */
  placeholder?: string;
  /** The callback triggered when the value is changed */
  onChange?: (value: number) => void;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
  /**
   * @description the props of slider, see https://ant.design/components/slider#api for detail
   * @type SliderSingleProps
   * @default {}
   */
  sliderProps?: SliderSingleProps;
  /**
   * @description the props of input, see https://ant.design/components/input-number#api for detail
   * @type InputNumberProps
   * @default {}
   */
  inputProps?: InputNumberProps;
}

export const SliderInput: React.FC<SliderInputProps> = ({
  value,
  defaultValue,
  min = 0,
  max,
  step,
  gutter = 16,
  sliderCol = { span: 12 },
  inputCol = { span: 5 },
  addonAfter,
  addonBefore,
  placeholder,
  onChange,
  style,
  className,
  sliderProps = {},
  inputProps = {},
}) => {
  const [number, setNumber] = useState<number>();

  const onNumberChange = (newNumber: number) => {
    if (Number.isNaN(newNumber)) {
      return;
    }
    setNumber(newNumber);
    onChange?.(newNumber);
  };

  return (
    <Row className={className} gutter={gutter} style={style}>
      <Col {...sliderCol}>
        <Slider
          {...sliderProps}
          defaultValue={defaultValue}
          max={max}
          min={min}
          onChange={onNumberChange}
          step={step}
          value={value || number}
        />
      </Col>
      <Col {...inputCol}>
        <InputNumber
          {...inputProps}
          addonAfter={addonAfter}
          addonBefore={addonBefore}
          defaultValue={defaultValue}
          max={max}
          min={min}
          onChange={onNumberChange as InputNumberProps['onChange']}
          placeholder={placeholder}
          step={step}
          value={value || number}
        />
      </Col>
    </Row>
  );
};
