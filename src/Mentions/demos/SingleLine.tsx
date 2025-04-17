import { Icon } from '@lobehub/ui';
import {
  Button,
  CLEAR_EDITOR_COMMAND,
  Flex,
  Mentions,
  MentionsEditor,
  message,
  textToEditorState,
} from '@yuntijs/ui';
import { Carrot, Cloud, Smile } from 'lucide-react';
import { useRef } from 'react';

export default () => {
  const ref = useRef<MentionsEditor>(null);

  return (
    <Flex style={{ width: '100%' }} vertical>
      <Mentions
        autoSize={{
          minRows: 1,
        }}
        defaultValue="👋，I'm {{1.zhang}}"
        onKeyDown={e => {
          if (e?.key === 'Tab') {
            e.preventDefault();
            message.info('你按了 Tab 键');
          }
        }}
        options={[
          {
            label: 'zhang',
            value: '1.zhang',
            icon: <Icon icon={Smile} />,
          },
          {
            label: 'luobo',
            value: '2.luobo',
            icon: <Icon icon={Carrot} />,
            disabled: true,
          },
          {
            label: 'yunti',
            value: '3.yunti',
            icon: <Icon icon={Cloud} />,
          },
        ]}
        preTriggerChars=".*"
        ref={ref}
        triggers={['@']}
      />
      <Flex gap="small">
        <Button
          onClick={() => {
            ref.current?.focus();
          }}
        >
          focus
        </Button>
        <Button
          onClick={() => {
            ref.current?.update(
              textToEditorState("👋，I'm {{3.yunti}} ~", ['@'], { cursor: 'all' })
            );
          }}
        >
          set
        </Button>
        <Button
          onClick={() => {
            ref.current?.dispatchCommand(CLEAR_EDITOR_COMMAND, void 0);
          }}
        >
          clear
        </Button>
      </Flex>
    </Flex>
  );
};
