import { ActionIconGroup, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { useState } from 'react';

import ChatItem, { ChatItemProps } from '..';
import { content } from '../../EditableMessage/demos/data';
import { avatar, dropdownMenu, items } from './data';

export default () => {
  const [edit, setEdit] = useState(false);
  const store = useCreateStore();
  const control: ChatItemProps | any = useControls(
    {
      loading: false,
      message: {
        rows: true,
        value: content,
      },
      placement: {
        options: ['left', 'right'],
        value: 'left',
      },
      primary: false,
      showTitle: false,
      time: 1_686_538_950_084,
      type: {
        options: ['block', 'pure'],
        value: 'block',
      },
      markdownProps: {
        fontSize: 15,
        lineHeight: 1.625,
        headerMultiple: 0,
      },
      markdownClassname: 'customMarkdown',
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <ChatItem
        {...control}
        actions={
          <ActionIconGroup
            dropdownMenu={dropdownMenu}
            items={items}
            onActionClick={action => {
              if (action.key === 'edit') {
                setEdit(true);
              }
            }}
            type="ghost"
          />
        }
        avatar={avatar}
        editing={edit}
        onEditingChange={setEdit}
      />
    </StoryBook>
  );
};
