import { Button, DragPanel } from '@yuntijs/ui';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} type="primary">
        打开 DragPanel
      </Button>
      <DragPanel
        onClose={() => setOpen(false)}
        open={open}
        styles={{ wrapper: { height: 320 } }}
        title="单节点调试"
      >
        我是 panel 的内容
      </DragPanel>
    </>
  );
};
