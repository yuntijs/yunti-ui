import { WaveformIcon, useTheme } from '@yuntijs/ui';

export default () => {
  const token = useTheme();
  return <WaveformIcon height={25} lineColor={token.colorPrimary} width={40} />;
};
