<a name="readme-top"></a>

<div align="center">

<h1>Yunti UI</h1>

☁️ Yunti UI is an open-source UI component library for building Cloud Native web apps

English ・ [简体中文](./README.zh-CN.md) ・ [Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

<!-- SHIELD GROUP -->

[![][npm-release-shield]][npm-release-link]

<!-- [![][vercel-shield]][vercel-link] -->

[![][npm-downloads-shield]][npm-downloads-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

<!-- [![][banner]][vercel-link] -->

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [📦 Installation](#-installation)
  - [Compile with NextJS](#compile-with-nextjs)
- [☁️ Usage](#️-usage)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)

####

</details>

## 📦 Installation

> \[!IMPORTANT]\
> This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

To install Yunti UI, run the following command:

```bash
pnpm add @yuntijs/ui
```

### Compile with NextJS

> \[!NOTE]\
> By work correct with nextjs ssr, add `transpilePackages: ['@yuntijs/ui']` to `next.config.js`. For example:

```js
// next.config.js
const nextConfig = {
  // ...other config

  transpilePackages: ['@yuntijs/ui'],
};
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ☁️ Usage

> \[!NOTE]\
> The YuntiUI components are inspired by [LobeUI](https://ui.lobehub.com) and developed based on [Antd](https://ant.design/components/overview/), fully compatible with Antd components,
> and it is recommended to use [antd-style](https://ant-design.github.io/antd-style/) as the default css-in-js styling solution.

```tsx
import { ConfigProvider } from '@yuntijs/ui';
import { Logo } from 'antd';

export default () => (
  <ConfigProvider>
    <Logo />
  </ConfigProvider>
);
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][codespaces-shield]][codespaces-link]

Or clone it for local development:

```bash
git clone https://github.com/yuntijs/yunti-ui.git
cd yunti-ui
pnpm install
pnpm dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][contributors-contrib]][contributors-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

<details><summary><h4>📝 License</h4></summary>

[![][fossa-license-shield]][fossa-license-link]

</details>

Copyright © 2023 [YuntiJS][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

<!-- [vercel-link]: https://ui.yuntijs.com -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[codespaces-link]: https://codespaces.new/yuntijs/yunti-ui
[codespaces-shield]: https://github.com/codespaces/badge.svg
[contributors-contrib]: https://contrib.rocks/image?repo=yuntijs/yunti-ui
[contributors-link]: https://github.com/yuntijs/yunti-ui/graphs/contributors
[fossa-license-link]: https://app.fossa.com/projects/git%2Bgithub.com%2Fyuntijs%2Fyunti-ui
[fossa-license-shield]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fyuntijs%2Fyunti-ui.svg?type=large
[github-action-release-link]: https://github.com/actions/workflows/yuntijs/yunti-ui/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/yuntijs/yunti-ui/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/actions/workflows/yuntijs/yunti-ui/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/yuntijs/yunti-ui/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-contributors-link]: https://github.com/yuntijs/yunti-ui/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/yuntijs/yunti-ui?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/yuntijs/yunti-ui/network/members
[github-forks-shield]: https://img.shields.io/github/forks/yuntijs/yunti-ui?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/yuntijs/yunti-ui/issues
[github-issues-shield]: https://img.shields.io/github/issues/yuntijs/yunti-ui?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/yuntijs/yunti-ui/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/yuntijs/yunti-ui?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/yuntijs/yunti-ui/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/yuntijs/yunti-ui?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/yuntijs/yunti-ui/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/yuntijs/yunti-ui?color=ffcb47&labelColor=black&style=flat-square
[npm-downloads-link]: https://www.npmjs.com/package/@yuntijs/ui
[npm-downloads-shield]: https://img.shields.io/npm/dt/@yuntijs/ui?labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@yuntijs/ui
[npm-release-shield]: https://img.shields.io/npm/v/@yuntijs/ui?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/yuntijs/yunti-ui/pulls
[pr-welcome-shield]: https://img.shields.io/badge/☁️_pr_welcome-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/yuntijs
