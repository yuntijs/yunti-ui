import type { SsmlOptions } from '@lobehub/tts/es/core/utils/genSSML';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { SpeechSynthesis, SpeechSynthesisUtterance } from './const/polyfill';

export interface SpeechSynthesOptions extends Pick<SsmlOptions, 'voice' | 'rate' | 'pitch'> {
  onStart?: () => void;
  onStop?: () => void;
}
export const useSpeechSynthes = (
  defaultText: string,
  { voice, rate, pitch, ...options }: SpeechSynthesOptions
) => {
  const [voiceList, setVoiceList] = useState(SpeechSynthesis?.getVoices());
  const [text, setText] = useState<string>(defaultText);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const speechSynthesisUtterance = useMemo(() => {
    if (!SpeechSynthesisUtterance) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voiceList.find((item: any) => item.name === voice) as any;
    utterance.onstart = () => setIsLoading(true);
    utterance.onend = () => setIsLoading(false);
    if (pitch) utterance.pitch = pitch * 10;
    if (rate) utterance.rate = rate * 10;
    return utterance;
  }, [text, voiceList, rate, pitch, voice]);

  useEffect(() => {
    if (!SpeechSynthesis) return;

    SpeechSynthesis.onvoiceschanged = () => {
      setVoiceList(SpeechSynthesis?.getVoices());
    };
    SpeechSynthesis.onstart = () => setIsLoading(true);
    SpeechSynthesis.onend = () => setIsLoading(false);
  }, []);

  const handleStart = useCallback(() => {
    options?.onStart?.();
    SpeechSynthesis?.speak(speechSynthesisUtterance);
  }, [options, speechSynthesisUtterance]);

  const handleStop = useCallback(() => {
    options?.onStop?.();
    speechSynthesis?.cancel();
    setIsLoading(false);
  }, [options]);

  return {
    isLoading,
    setText,
    start: handleStart,
    stop: handleStop,
  };
};

export default useSpeechSynthes;
