/* eslint-disable no-console */
import { Icon } from '@lobehub/ui';
import { CLEAR_EDITOR_COMMAND, Divider, Flex, Mentions, MentionsEditor } from '@yuntijs/ui';
import { Files, Smile } from 'lucide-react';
import { useRef, useState } from 'react';

export default () => {
  const ref = useRef<MentionsEditor>(null);
  const [value, setValue] = useState('');
  const triggers = ['@', '#'];

  return (
    <Flex style={{ width: '100%' }} vertical>
      <Mentions
        autoSize={{
          minRows: 3,
          maxRows: 5,
        }}
        defaultValue="👋，I'm {{1.zhang}}"
        onPressEnter={value => {
          setValue(value);
          ref.current?.dispatchCommand(CLEAR_EDITOR_COMMAND, void 0);
        }}
        onTrigger={trigger => console.log('trigger =>', trigger)}
        options={[
          {
            label: 'zhang',
            value: '1.zhang',
            icon: <Icon icon={Smile} />,
          },
          {
            label: 'src',
            value: 'src',
            icon: <Icon icon={Files} />,
            children: [
              {
                label: 'index.tsx',
                value: 'index.tsx',
              },
              {
                label: 'index.css',
                selectedLabel: 'index.css',
                value: 'index.css',
              },
            ],
          },
        ]}
        preTriggerChars=".*"
        ref={ref}
        triggers={triggers}
      />
      <Divider />
      <pre>{value}</pre>
    </Flex>
  );
};
