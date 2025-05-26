import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { EditableMessage } from '@yuntijs/ui';
import { button } from 'leva';
import { useState } from 'react';

import { content2 } from './data';

export default () => {
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEdit] = useState(false);
  const store = useCreateStore();

  useControls(
    {
      editing: button(() => {
        setEdit(true);
      }),
      openModal: button(() => {
        setOpenModal(true);
      }),
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <EditableMessage
        editing={editing}
        onEditingChange={setEdit}
        onOpenChange={setOpenModal}
        openModal={openModal}
        value={content2}
      />
    </StoryBook>
  );
};
