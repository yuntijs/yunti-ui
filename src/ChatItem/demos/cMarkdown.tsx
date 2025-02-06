import { ActionIconGroup, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { ChatItem, ChatItemProps } from '@yuntijs/ui';
import { useState } from 'react';

import { content3 } from '../../EditableMessage/demos/data';
import { avatar, dropdownMenu, items } from './data';

export default () => {
  const [edit, setEdit] = useState(false);
  const store = useCreateStore();
  const control: ChatItemProps | any = useControls(
    {
      loading: false,
      message: {
        rows: true,
        value: content3,
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
        markdownProps={{
          fontSize: 15,
          lineHeight: 1.625,
          headerMultiple: 0,
          customComponentProps: {
            think: { second: 20, done: true },
          },
        }}
        onEditingChange={setEdit}
      />
    </StoryBook>
  );
};
