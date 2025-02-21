import { SpeechSynthesisTTS } from '@lobehub/tts';
import { Icon, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { useSpeechSynthes } from '@yuntijs/ui';
import { Button, Input, SelectProps } from 'antd';
import { StopCircle, Volume2 } from 'lucide-react';
import { Flexbox } from 'react-layout-kit';

const defaultText = '这是一段使用 Speech Synthes 的语音演示';

const genLevaOptions = (options: SelectProps['options']) => {
  const data: any = {};
  // eslint-disable-next-line unicorn/no-array-for-each
  options?.forEach((item: any) => (data[item?.label || item?.value] = item?.value));
  return data;
};

export default () => {
  const store = useCreateStore();
  const options: any = useControls(
    {
      pitch: {
        max: 1,
        min: -1,
        step: 0.1,
        value: 0,
      },
      rate: {
        max: 1,
        min: -1,
        step: 0.1,
        value: 0,
      },
      voice: {
        options: genLevaOptions(new SpeechSynthesisTTS().voiceOptions),
        value: '婷婷',
      },
    },
    { store }
  );
  const { setText, isLoading, start, stop } = useSpeechSynthes(defaultText, options);
  return (
    <StoryBook levaStore={store}>
      <Flexbox gap={8}>
        {isLoading ? (
          <Button block icon={<Icon icon={StopCircle} />} onClick={stop}>
            Stop
          </Button>
        ) : (
          <Button block icon={<Icon icon={Volume2} />} onClick={start} type={'primary'}>
            Speak
          </Button>
        )}
        <Input.TextArea defaultValue={defaultText} onChange={e => setText(e.target.value)} />
      </Flexbox>
    </StoryBook>
  );
};
