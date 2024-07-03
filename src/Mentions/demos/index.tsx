import { Icon } from '@lobehub/ui';
import { Mentions } from '@yuntijs/ui';
import { Carrot, Cloud, Smile } from 'lucide-react';

export default () => {
  return (
    <Mentions
      autoSize={{
        minRows: 3,
      }}
      defaultValue="👋，I'm {{1.zhang}}"
      options={[
        { label: 'zhang', value: '1.zhang', icon: <Icon icon={Smile} /> },
        {
          label: 'luobo',
          value: '2.luobo',
          icon: <Icon icon={Carrot} />,
          error: '选我触发错误样式',
        },
        { label: 'yunti', value: '3.yunti', icon: <Icon icon={Cloud} /> },
      ]}
      preTriggerChars=".*"
      triggers={['@']}
    />
  );
};
