import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import type { JSX } from 'react';

import { useStyles } from '../style';

type Props = {
  className?: string;
  placeholderClassName?: string;
  placeholder: string;
  variant?: 'outlined' | 'filled' | 'borderless';
  disabled?: boolean;
};

export default function LexicalContentEditable({
  className,
  placeholder,
  placeholderClassName,
  variant = 'outlined',
  disabled,
}: Props): JSX.Element {
  const { styles, cx } = useStyles({ autoSize: { minRows: 1 }, code: false });

  return (
    <ContentEditable
      aria-placeholder={placeholder}
      className={cx(
        {
          [styles.root]: true,
          [styles.filled]: variant === 'filled',
          [styles.borderless]: variant === 'borderless',
          [styles.disabled]: disabled,
        },
        className
      )}
      placeholder={
        <div className={cx(styles.placeholder, placeholderClassName)}>
          {placeholder || `请输入`}
        </div>
      }
    />
  );
}
