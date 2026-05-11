# CLAUDE.md

Project-specific notes for AI coding agents working on **`@yuntijs/ui`**, a React component library built on antd v6 and `@lobehub/ui`.

## Tech stack

- **React 19**, **TypeScript** (strict), **pnpm** (workspaces enabled)
- **antd v6** (peer dep `antd >=6`) — major upgrade from v4/v5; many deprecations apply (see below)
- **antd-style** — `createStyles` is the CSS-in-JS layer; always pull `prefixCls` from its context, never hardcode `ant-`
- **dumi** — docs site + demo runner (`dumi dev` / `dumi build`)
- **father** — library build (`father build`), outputs to `es/` (ESM) and `umd/`
- **@yuntijs/lint** — shared eslint/stylelint/prettier/commitlint config
- **vitest** — test runner (most components do not have tests yet)

## Common commands

| What                       | Command                                           |
| -------------------------- | ------------------------------------------------- |
| Start docs/demo dev server | `npm run dev` (alias of `dumi dev`)               |
| Build library              | `npm run build` (father)                          |
| Type-check only            | `npm run type-check` (uses `tsconfig-check.json`) |
| Lint (no fix)              | `npm run lint`                                    |
| Auto-fix lint              | `npm run lint-fix`                                |
| Tests                      | `npm run test`                                    |

> `npm run ci` runs lint + type-check — use this before declaring a task complete.

## Repo layout

```
src/
  <ComponentName>/
    index.tsx       # component implementation
    index.md        # dumi doc page (frontmatter: nav/group/title/description)
    style.ts        # createStyles(...) hook
    demos/          # .tsx demos referenced from index.md via <code src=...>
  utils/constants.ts  # exports `prefixCls = 'yunti-ui'`
  index.ts          # public entry — re-exports everything (antd, @lobehub/ui, antd-style)
```

- Path aliases: `@/*` → `src/*`, `@yuntijs/ui` → `src` (use them; demos import from `@yuntijs/ui`)
- Some components are **pure custom** (DragPanel, JsonViewer, Logo, MonacoEditor, ProCard, …)
- Some are **antd wrappers** (Alert, Card, Divider, Drawer, Modal, Form, Table, …) — usually adding custom props/styles
- Some are **@lobehub/ui wrappers** (ChatInputArea, ChatItem, ChatMarkdown, EditableMessage, Highlighter, RichTextEditor)
- Anything that's just a passthrough is one-liner: e.g. `src/Card/index.tsx` is `export { Card, type CardProps } from 'antd';` — don't over-engineer

## Component conventions

When adding/modifying a component:

1. **Custom props go in a separate interface** and merge with antd's:
   ```ts
   export interface CustomFooProps {
     /* … */
   }
   export interface FooProps extends AntdFooProps, CustomFooProps {}
   ```
2. **JSDoc props** with `@description` and `@default` — they feed dumi's `<API>` table.
3. **Styles**: use `createStyles` from `antd-style`, destructure `{ css, token, prefixCls, cx }`. Never hardcode `ant-` or color values — go through `token` and `prefixCls`.
4. **Export** the component from `src/index.ts` (look at the section comments: `~ custom antd`, `~ custom @lobehub/ui`, etc. — add to the right group).
5. **Docs** in `index.md` with a Simple usage code block, `<code src="./demos/index.tsx">` for the visual demo, and `<API></API>` at the bottom.

## antd v6 migration gotchas

The codebase finished migrating from antd v5 to v6 in early 2026. Watch out for these (and **don't reintroduce them** when writing new code):

| Component         | Old (deprecated)                                    | New                                            |
| ----------------- | --------------------------------------------------- | ---------------------------------------------- |
| Card              | `bordered={true/false}`                             | `variant="outlined"/"borderless"`              |
| Alert             | `message`                                           | `title`                                        |
| Divider           | `type="horizontal"\|"vertical"`                     | `orientation="horizontal"\|"vertical"`         |
| Divider           | `orientation="left/right/center"` (title placement) | `titlePlacement="left/right/center/start/end"` |
| Divider           | `orientationMargin`                                 | `styles={{ content: { margin } }}`             |
| Space             | `direction`                                         | `orientation`                                  |
| Space             | `split`                                             | `separator`                                    |
| Tabs              | `destroyInactiveTabPane`                            | `destroyOnHidden`                              |
| Image             | `rootClassName`                                     | `classNames.root`                              |
| Notification args | `message`                                           | `title`                                        |

### Internal classNames changed in v6 (when writing global selectors)

If you write CSS that targets antd's internal DOM:

- `.ant-collapse-header-text` → `.ant-collapse-title`
- `.ant-collapse-content > .ant-collapse-content-box` → `.ant-collapse-panel > .ant-collapse-body`
- `.ant-notification-notice-message` → `.ant-notification-notice-title`

(Most antd internal classes are unchanged — drawer, avatar, badge, table, typography, dropdown-menu, etc.)

## Static API → `App.useApp()` migration

`notification`, `message`, and `Modal.<method>` static APIs are **deprecated** (marked with `@deprecated` JSDoc). They don't pick up `ConfigProvider` context (theme/locale/prefixCls), so styles diverge.

**Always** use the hook form from the `<App />` context:

```tsx
import { App } from '@yuntijs/ui';

const MyComponent = () => {
  const { message, notification, modal } = App.useApp();
  // message.success(...), notification.error(...), modal.confirm(...)
};

const Root = () => (
  <App>
    <MyComponent />
  </App>
);
```

What's deprecated:

- `notification` (the entire `src/notification` module — our wrapper used to add `detail`/`errors` features; antd v6 supports them natively)
- `message` (re-exported from antd via `src/index.ts`)
- `Modal.info`, `Modal.success`, `Modal.error`, `Modal.warning`, `Modal.warn`, `Modal.confirm`, `Modal.destroyAll`, `Modal.config`
- **Not deprecated**: the `<Modal />` component itself, `Modal.useModal()`, `<App />`, `App.useApp()`

When writing new demos, use `App.useApp()`. Keep deprecated forms only when intentionally illustrating the legacy API (and add a visible `Alert type="warning"` banner in the demo).

## Commit & PR conventions

- Follow **conventional commits** (yunti-lint): `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `revert`, `build`, `ci`
- Subject in **English**, concise, no trailing "Generated with …" footer
- **Never** mix unrelated changes — dep bumps go in their own `chore:` commit, separate from `feat:`/`fix:` work
- `husky` runs `lint-staged` on commit; if hooks fail, fix the root cause — don't pass `--no-verify`
- `semantic-release` reads commit types to compute the next version; current line is `3.0.0-beta.x`

## Things to NOT do

- Don't add JSDoc `@deprecated` and a "removed" comment for the same thing — pick one
- Don't hardcode color values, spacing, or `ant-` prefixes in styles
- Don't re-export antd components by importing them and re-typing — use `export { X } from 'antd'`
- Don't bypass the deprecation: if you find static `Modal.info(...)` or static `message.xxx(...)` in new code, fix it to use `App.useApp()`
- Don't run destructive git ops (`reset --hard`, `push --force`, `branch -D`) without explicit user confirmation

## Useful references

- antd v6 docs: <https://ant.design/components/overview>
- antd-style: <https://ant-design.github.io/antd-style>
- dumi: <https://d.umijs.org>
- father: <https://github.com/umijs/father>
- Internal lint preset: `@yuntijs/lint` (controls eslint/stylelint/prettier/commitlint)
