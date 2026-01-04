import { Highlighter } from '@lobehub/ui';
import { Features, FeaturesProps } from '@lobehub/ui/awesome';
import { useTheme } from 'antd-style';
import { MoonStar, Palette, Zap } from 'lucide-react';
import { Center } from 'react-layout-kit';

const items: FeaturesProps['items'] = [
  {
    description:
      'Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.',
    icon: Palette,
    title: 'Themeable',
  },
  {
    description:
      'voids unnecessary styles props at runtime, making it more performant than other UI libraries.',
    icon: Zap,
    title: 'Fast',
  },
  {
    description:
      'Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.',
    icon: MoonStar,
    title: 'Light & Dark UI',
  },
];

const example = `import { ThemeProvider, Button } from '@yuntijs/ui'

export default () => (
  <ThemeProvider>
    <Button>Hello YuntiJS</Button>
  </ThemeProvider>
)`;

export default () => {
  const theme = useTheme();
  return (
    <Center gap={16}>
      <Center>
        <h2 style={{ fontSize: 20 }}>☁️ Start building your CloudNative web app now</h2>
        <div style={{ color: theme.colorTextDescription, textAlign: 'center' }}>
          The YuntiUI components are inspired by{' '}
          <a href={'(https://ui.lobehub.com'} rel="noreferrer" target={'_blank'}>
            LobeUI
          </a>{' '}
          and developed based on{' '}
          <a href={'https://ant.design/components/overview'} rel="noreferrer" target={'_blank'}>
            Antd components
          </a>
          , fully compatible with Antd components, <br />
          and it is recommended to use{' '}
          <a href={'https://ant-design.github.io/antd-style'} rel="noreferrer" target={'_blank'}>
            antd-style
          </a>{' '}
          as the default css-in-js styling solution.
        </div>
      </Center>
      <Highlighter language={'tsx'} style={{ maxWidth: '60%' }} variant="filled">
        {example}
      </Highlighter>
      <Features items={items} />
    </Center>
  );
};
