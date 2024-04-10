import { useAutoFocus } from '@yuntijs/ui';
import React, { useRef } from 'react';

import FormContent from './components/FormContent';
import RenderContainer from './components/RenderContainer';

const FormContentWrapper = () => {
  const divRef = useRef(null);
  useAutoFocus(divRef);
  // ⚠️warning The form instance obtained through the ref of the Ant Design's Form component does not take effect. You need to pass the ref of native HTML tags like div or span.
  return (
    <div ref={divRef}>
      <FormContent />
    </div>
  );
};

const RefUseAutoFocus: React.FC<Record<string, never>> = () => {
  return (
    <RenderContainer>
      <FormContentWrapper />
    </RenderContainer>
  );
};
export default RefUseAutoFocus;
