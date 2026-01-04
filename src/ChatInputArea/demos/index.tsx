import { ActionIcon } from '@lobehub/ui';
import { TokenTag } from '@lobehub/ui/chat';
import { ChatInputActionBar, ChatInputArea, ChatSendButton } from '@yuntijs/ui';
import { Eraser, Languages } from 'lucide-react';
import { Flexbox } from 'react-layout-kit';

export default () => {
  return (
    <Flexbox style={{ height: 150, position: 'relative' }}>
      <div style={{ flex: 1 }}></div>
      <ChatInputArea
        autoSize={{ minRows: 1, maxRows: 4 }}
        bottomAddons={<ChatSendButton />}
        topAddons={
          <ChatInputActionBar
            leftAddons={
              <>
                <ActionIcon icon={Languages} />
                <ActionIcon icon={Eraser} />
                <TokenTag maxValue={5000} value={1000} />
              </>
            }
          />
        }
      />
    </Flexbox>
  );
};
