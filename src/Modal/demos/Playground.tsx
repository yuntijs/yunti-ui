import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { ModalProps } from '@yuntijs/ui';
import { Button, Modal } from '@yuntijs/ui';
import { useState } from 'react';

export default () => {
  const store = useCreateStore();
  const [open, setOpen] = useState<boolean>(false);
  const control: ModalProps | any = useControls(
    {
      width: 520,
      title: 'YuntiUI Modal',
      children:
        'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
      cancelText: '取消',
      okText: '确定',
      okType: 'primary',
      confirmLoading: false,
      mask: true,
      maskClosable: true,
      centered: false,
      keyboard: true,
      focusTriggerAfterClose: true,
      destroyOnClose: false,
      zIndex: 1000,
      borderd: true,
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        {...control}
        onCancel={() => setOpen(false)}
        onOk={() => {
          setOpen(false);
        }}
        open={open}
      />
    </StoryBook>
  );
};
