import React, { ComponentType, FC, useRef } from 'react';

import { useAutoFocus } from './autoFocus';

export { useAutoFocus } from './autoFocus';
// Component
export type FormHelperProps = {
  children: React.ReactNode;
  autoFocus?: boolean;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const FormHelper: React.FC<FormHelperProps> = props => {
  const { autoFocus = true } = props;

  const ref = useRef(null);
  useAutoFocus(autoFocus ? ref : undefined);
  return (
    <div
      className={props.className}
      id={props.id}
      ref={ref}
      style={props.style ?? { display: props.className ? undefined : 'contents' }}
    >
      {props.children}
    </div>
  );
};

// HOC
type FormHelperConfig = Omit<FormHelperProps, 'children'>;

export const withFormHelper =
  (formHelperConfig?: FormHelperConfig) =>
  <P extends Record<string, never>>(WrappedComponent: ComponentType<P>): FC<P> => {
    const HocComponent: FC<P> = props => {
      return (
        <FormHelper {...(formHelperConfig || {})}>
          <WrappedComponent {...props} />
        </FormHelper>
      );
    };
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    HocComponent.displayName = `withFormHelper(${displayName})`;
    return HocComponent;
  };

export { FormHelper };
