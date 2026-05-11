---
nav: Components
group: Other
title: ThemeProvider
description: A drop-in replacement for `@lobehub/ui`'s ThemeProvider that lets your `colorPrimary` actually win.
---

## Why

`@lobehub/ui`'s `ThemeProvider` ships its own `lightAlgorithm` / `darkAlgorithm` that **spreads a hardcoded primary palette (a black/grey ramp) over antd's calculated `mapToken`**. This means any `theme.token.colorPrimary` you pass is silently overridden — only the components you've explicitly overridden via `theme.components.<X>.colorPrimary` get your brand colour. Custom components that read `token.colorPrimary` directly (like `SelectCard`, `Page.Header`, `Highlighter`) still render with the lobehub black.

`@yuntijs/ui`'s `ThemeProvider` is a thin wrapper around `antd-style`'s `ThemeProvider` that:

- Defaults to antd's **own** `defaultAlgorithm` / `darkAlgorithm` (picked from the current `appearance`)
- Forwards every other prop (`appearance` / `themeMode` / `customToken` / `customStylish` / etc.) untouched
- Lets you pass your own `algorithm` in `theme` if you need to customise further (the default is only applied when `theme.algorithm` is absent)

There is no lobehub palette mixed in, so the seed token you provide flows through to every downstream consumer — antd components, `antd-style` `createStyles`, and yunti-ui's own custom components.

## Usage

```tsx | pure
import { App, ThemeProvider } from '@yuntijs/ui';

export default function Root({ children }) {
  return (
    <ThemeProvider
      theme={{
        token: {
          colorPrimary: '#3B82F6',
          colorInfo: '#3B82F6',
          colorLink: '#3B82F6',
        },
        components: {
          Button: { controlHeight: 34 },
        },
      }}
    >
      <App>{children}</App>
    </ThemeProvider>
  );
}
```

Migrating from `@lobehub/ui`:

```diff
- import { ThemeProvider } from '@lobehub/ui';
+ import { ThemeProvider } from '@yuntijs/ui';
```

The prop shape is the same as `antd-style`'s `ThemeProvider` (which is what `@lobehub/ui` extends). The only behavioural difference is the algorithm default — you should remove any workarounds where you overrode `colorPrimary` on every individual component (`Button`, `Select`, `Pagination`, etc.) just to fight the lobehub override.

## Dark mode

Pass `appearance="dark"` to force dark mode, or `themeMode="auto"` to follow the OS. The internal algorithm flips between antd's `defaultAlgorithm` and `darkAlgorithm` automatically — your `token.colorPrimary` is reused as the seed in both modes, and antd derives a full hover/active/border/bg palette for each appearance.

If you want different brand colours per mode (e.g. brighten the primary for dark), pass `theme` as a function:

```tsx | pure
<ThemeProvider
  appearance={appearance}
  theme={appearance => ({
    token: {
      colorPrimary: appearance === 'dark' ? '#60A5FA' : '#3B82F6',
    },
  })}
>
  {children}
</ThemeProvider>
```

The demo below inherits the docs page's appearance via `useTheme()` from `@yuntijs/ui`, so toggle the docs site theme to see it flip.

<code src="./demos/index.tsx"></code>

## APIs

<API></API>
