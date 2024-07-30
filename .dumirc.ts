import { defineConfig } from 'dumi';

import { homepage, name } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig = {
  logo: 'https://avatars.githubusercontent.com/u/148947838',
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
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOK7a7Ac4CcBHb',
    repo: 'yuntijs/yunti-ui',
    repoId: 'R_kgDOK7a7AQ',
  },
  name: 'UI',
  sidebarGroupModePath: ['/components'],
  nav: [
    { link: '/components/chat-input-area', title: 'Components' },
    { link: '/changelog', title: 'Changelog' },
    { link: 'https://ui.lobehub.com/', title: 'LobeHub UI' },
    { link: 'https://ant.design/components/overview', title: 'Antd Components' },
    { link: 'https://lucide.dev/icons', title: 'Lucide Icons' },
    { link: 'https://ant-design.github.io/antd-style', title: 'CSSinJS' },
  ],
  socialLinks: {
    // discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
  title: 'Yunti UI',
  sitemap: {
    hostname: 'https://yuntijs.github.io/yunti-ui',
  },
};

export default defineConfig({
  apiParser: {},
  base: isProduction ? '/yunti-ui/' : '/',
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://avatars.githubusercontent.com/u/148947838?s=64&v=4'],
  locales: [{ id: 'en-US', name: 'English' }],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  publicPath: '/yunti-ui/',
  outputPath: './dist/yunti-ui/',
  resolve: {
    entryFile: './src/index.ts',
  },
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  exportStatic: {
    // 忽略预渲染失败的错误
    ignorePreRenderError: true,
  },
  ...(isProduction ? { ssr: { builder: 'webpack' } } : {}),
});
