import { withFormHelper } from '@yuntijs/ui';
import React from 'react';

import FormContent from './components/FormContent';
import RenderContainer from './components/RenderContainer';

const HocFormHelper: React.FC<Record<string, never>> = () => {
  const FormContentWrapper = withFormHelper()(FormContent);
  return (
    <RenderContainer>
      <FormContentWrapper />
    </RenderContainer>
  );
};
export default HocFormHelper;
