import { defineConfig } from 'dumi';

import { homepage, name } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/action-icon',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description: 'Yunti UI is an open-source UI component library for building Cloud Native web apps',
  footer: 'Made with ☁️ by YuntiJS',

  // giscus: {
  //   category: 'Q&A',
  //   categoryId: 'DIC_kwDOJloKoM4CXsCu',
  //   repo: 'yuntijs/yunti-ui',
  //   repoId: 'R_kgDOJloKoA',
  // },
  name: 'UI',
  nav: [
    { link: '/components/action-icon', title: 'Components' },
    { link: 'https://ant.design/components/overview', mode: 'override', title: 'AntdComponents' },
    { link: '/colors', title: 'Colors' },
    { link: 'https://lucide.dev/icons', mode: 'override', title: 'Icons' },
    { link: 'https://ant-design.github.io/antd-style', mode: 'override', title: 'CSSinJS' },
    { link: '/changelog', title: 'Changelog' },
  ],
  socialLinks: {
    // discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
  title: 'Yunti UI',
};

export default defineConfig({
  apiParser: isProduction ? {} : false,
  base: '/',
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://avatars.githubusercontent.com/u/148947838?s=64&v=4'],
  locales: [{ id: 'en-US', name: 'English' }],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  publicPath: '/',
  resolve: isProduction
    ? {
        entryFile: './src/index.ts',
      }
    : undefined,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Yunti UI',
});
