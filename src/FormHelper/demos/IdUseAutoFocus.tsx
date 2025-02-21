import { useAutoFocus } from '@yuntijs/ui';
import React from 'react';

import FormContent from './components/FormContent';
import RenderContainer from './components/RenderContainer';

const FormContentWrapper = () => {
  // <Form id="form123"> in FormContent
  useAutoFocus('form123');
  return <FormContent />;
};

const IdUseAutoFocus: React.FC<Record<string, never>> = () => {
  return (
    <RenderContainer>
      <FormContentWrapper />
    </RenderContainer>
  );
};
export default IdUseAutoFocus;
