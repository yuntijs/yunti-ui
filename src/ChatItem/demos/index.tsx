import { ActionIconGroup } from '@lobehub/ui';
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { ChatItem, ChatItemProps } from '@yuntijs/ui';
import { useState } from 'react';

import { avatar, dropdownMenu, items } from './data';

export default () => {
  const [edit, setEdit] = useState(false);
  const store = useCreateStore();
  const control: ChatItemProps | any = useControls(
    {
      loading: false,
      message: {
        rows: true,
        value:
          "要使用 dayjs 的 fromNow 函数，需要先安装 dayjs 库并在代码中引入它。然后，可以使用以下语法来获取当前时间与给定时间之间的相对时间：\n\n```javascript\ndayjs().fromNow();\ndayjs('2021-05-01').fromNow();\n```",
      },
      placement: {
        options: ['left', 'right'],
        value: 'left',
      },
      primary: false,
      showTitle: false,
      time: 1_686_538_950_084,
      variant: {
        options: ['bubble', 'docs'],
        value: 'bubble',
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <ChatItem
        {...control}
        actions={
          <ActionIconGroup
            items={items}
            menu={dropdownMenu}
            onActionClick={action => {
              if (action.key === 'edit') {
                setEdit(true);
              }
            }}
            variant="outlined"
          />
        }
        avatar={avatar}
        editing={edit}
        hideAvatar={true}
        isLatest={true}
        onEditingChange={setEdit}
      />
      <ChatItem
        {...control}
        actions={
          <ActionIconGroup
            items={items}
            menu={dropdownMenu}
            onActionClick={action => {
              if (action.key === 'edit') {
                setEdit(true);
              }
            }}
            variant="outlined"
          />
        }
        avatar={avatar}
        editing={edit}
        hideAvatar={true}
        isLatest={true}
        onEditingChange={setEdit}
        placement="right"
        primary={true}
      />
    </StoryBook>
  );
};
