import { Button } from 'antd';
import React, { useState } from 'react';

interface IRenderContainer {
  children: React.ReactNode;
}

const RenderContainer: React.FC<IRenderContainer> = props => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={setOpen.bind('', !open)}>Click me!</Button>
      <br />
      <br />
      {open && props.children}
    </>
  );
};
export default RenderContainer;
