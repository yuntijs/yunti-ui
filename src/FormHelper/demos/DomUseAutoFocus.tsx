import { useAutoFocus } from '@yuntijs/ui';
import React, { useEffect, useState } from 'react';

import FormContent from './components/FormContent';
import RenderContainer from './components/RenderContainer';

type IDomUseAutoFocus = Record<string, never>;

const FormContentWrapper = () => {
  const [fomDom, setFormDom] = useState<HTMLElement | null>(null);
  useEffect(() => {
    //  <Form id="form123"> in FormContent
    setFormDom(document.querySelector('#form123') as HTMLElement);
  }, []);
  useAutoFocus(fomDom);
  return <FormContent />;
};

const DomUseAutoFocus: React.FC<IDomUseAutoFocus> = () => {
  return (
    <RenderContainer>
      <FormContentWrapper />
    </RenderContainer>
  );
};
export default DomUseAutoFocus;
