import { Icon } from '@lobehub/ui';
import { Avatar, Flex, SelectProps, Typography } from 'antd';
import { Check } from 'lucide-react';
import { useMergedState } from 'rc-util';
import React, { useCallback, useMemo } from 'react';

import { getNumberBySize, useStyles } from './style';

const { Text, Paragraph } = Typography;

type RawValue = string | number;
type Value = RawValue | RawValue[];
export interface SelectCardOption {
  value: RawValue;
  img?: React.ReactNode;
  icon?: React.ReactNode;
  iconStyle?: React.CSSProperties;
  label?: React.ReactNode;
  description?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface SelectCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'> {
  defaultValue?: Value;
  value?: Value;
  onChange?: (value: Value) => void;
  multiple?: boolean;
  disabled?: boolean;
  options: SelectCardOption[];
  size?: SelectProps['size'];
  optionRender?: (
    Option: React.ReactNode,
    option: SelectCardOption,
    index: number
  ) => React.ReactNode;
  classNames?: {
    card?: string;
    icon?: string;
  };
  styles?: {
    card?: React.CSSProperties;
    icon?: React.CSSProperties;
  };
}

export const SelectCard = React.forwardRef<HTMLDivElement, SelectCardProps>((props, ref) => {
  const {
    defaultValue,
    value,
    onChange,
    multiple = false,
    disabled = false,
    options = [],
    classNames,
    styles: stylesFromProps,
    size = 'middle',
    optionRender,
    ...otherProps
  } = props;
  const isImg = useMemo(() => options.some(o => !!o.img || !!o.icon), [options]);
  const { cx, styles } = useStyles({ disabled, size });
  const { imgHeight } = useMemo(() => getNumberBySize(size), [size]);

  const formatValue = useCallback(
    (v?: Value) => {
      if (!multiple) {
        return v;
      }
      if (Array.isArray(v)) {
        return v;
      }
      return v === undefined ? [] : [v];
    },
    [multiple]
  );

  const [currentValue, setCurrentValue] = useMergedState(formatValue(defaultValue)!, {
    defaultValue: formatValue(defaultValue),
    value,
    onChange,
  });

  const onSelect = useCallback(
    (v: RawValue) => {
      if (disabled) {
        return;
      }
      if (!multiple) {
        setCurrentValue(v);
        return;
      }
      if ((currentValue as RawValue[]).includes(v)) {
        setCurrentValue((currentValue as RawValue[]).filter(cv => cv !== v));
        return;
      }
      setCurrentValue([...(currentValue as RawValue[]), v]);
    },
    [currentValue, disabled, multiple, setCurrentValue]
  );

  const isSelected = useCallback(
    (v: RawValue) => (multiple ? (currentValue as RawValue[]).includes(v) : currentValue === v),
    [currentValue, multiple]
  );

  const renderOption = useCallback(
    (o: SelectCardOption, index: number) => {
      const selected = isSelected(o.value);
      const Option = (
        <Flex
          align={isImg ? 'center' : 'flex-start'}
          className={cx(styles.option, selected && styles.optionSelected, classNames?.card)}
          gap="small"
          key={o.value}
          onClick={() => onSelect(o.value)}
          style={{ ...stylesFromProps?.card, ...o.style }}
          vertical
        >
          {isImg && (
            <Avatar
              className={classNames?.icon}
              icon={o.icon}
              shape="square"
              size={imgHeight}
              src={o.img}
              style={{ ...stylesFromProps?.icon, ...o.iconStyle }}
            />
          )}
          {o.label && (
            <Text ellipsis strong>
              {o.label}
            </Text>
          )}
          {!isImg && o.description && (
            <Paragraph ellipsis={{ rows: 2 }} type="secondary">
              {o.description}
            </Paragraph>
          )}
          {multiple && selected && <Icon className={styles.check} icon={Check} />}
        </Flex>
      );
      return optionRender ? optionRender(Option, o, index) : Option;
    },
    [
      classNames?.card,
      classNames?.icon,
      cx,
      imgHeight,
      isImg,
      isSelected,
      multiple,
      onSelect,
      optionRender,
      styles.check,
      styles.option,
      styles.optionSelected,
      stylesFromProps?.card,
      stylesFromProps?.icon,
    ]
  );

  return (
    <Flex gap="large" ref={ref} wrap {...otherProps}>
      {options.map((o, index) => renderOption(o, index))}
    </Flex>
  );
});
