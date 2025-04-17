/* eslint-disable no-console */
import { Icon } from '@lobehub/ui';
import { CLEAR_EDITOR_COMMAND, Divider, Flex, Mentions, MentionsEditor } from '@yuntijs/ui';
import { Files, Smile, Users } from 'lucide-react';
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
        defaultValue="👋，I'm {{@1.zhang}}"
        onPressEnter={value => {
          setValue(value);
          ref.current?.dispatchCommand(CLEAR_EDITOR_COMMAND, void 0);
        }}
        onTrigger={trigger => console.log('trigger =>', trigger)}
        options={[
          {
            label: 'zhang',
            value: '@1.zhang',
            triggers: ['@'],
            icon: <Icon icon={Smile} />,
          },
          {
            label: 'yang',
            value: '@2.yang',
            triggers: ['@'],
            icon: <Icon icon={Users} />,
          },
          {
            label: 'src',
            value: 'src',
            triggers: ['#'],
            icon: <Icon icon={Files} />,
            children: [
              {
                label: 'index.tsx',
                value: '#src/index.tsx',
                triggers: ['#'],
              },
              {
                label: 'index.css',
                value: '#src/index.css',
                triggers: ['#'],
              },
              {
                label: '.npmrc',
                value: '#src/.npmrc',
                triggers: ['#'],
              },
              {
                label: '.state.json',
                value: '#src/state.json',
                triggers: ['#'],
              },
              {
                label: '测试.xlsx',
                value: '#src/test/测试/嗯嗯/啦啦/测试.xlsx',
                triggers: ['#'],
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
