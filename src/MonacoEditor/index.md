---
nav: Components
group: Data Entry
title: MonacoEditor
---

## Usage

based on [@alilc/lowcode-plugin-base-monaco-editor](https://github.com/alibaba/lowcode-plugins/blob/main/packages/base-monaco-editor/) and [react-monaco-editor](https://github.com/react-monaco-editor/react-monaco-editor).

### Simple usage

```jsx | pure
import { MonacoEditor } from '@yuntijs/ui';

export default () => {
  return (
    <MonacoEditor
      defaultValue={`const myEditor = monaco.editor.create(document.getElementById("container"), {
  language: "javascript",
  automaticLayout: true,
});`}
      height={200}
      language="javascript"
      onChange={next => {
        // eslint-disable-next-line no-console
        console.log(next);
      }}
      supportFullScreen={true}
      width={740}
    />
  );
};
```

<code src="./demos/index.tsx" center></code>

### Specify monaco version to 0.19.3

<code src="./demos/SpecifyVersion.tsx" center></code>

### Diff Editor

<code src="./demos/DiffEditor.tsx" center></code>

### Multi Model Saving Scrolling States

<code src="./demos/MultiModel.tsx" center></code>

## Playground

### BaseMonacoEditor

<code src="./demos/playground/index.tsx" center></code>

### DiffMonacoEditor

<code src="./demos/playground/DiffEditor2.tsx" center></code>

## APIs

- `width` width of editor. Defaults to `100%`.

- `height` height of editor. Defaults to `100%`.

- `value` value of the auto created model in the editor.

- `original` value of the original model in the diff editor.

- `defaultValue` the initial value of the auto created model in the editor.

- `language` the initial language of the auto created model in the editor.

- `theme` the theme of the editor. Defaults to `vs`, also supports `vs-dark`, `hc-light`, `hc-black`.

- `readOnly` Should the editor be read only. See also domReadOnly. Defaults to false.

- `lineNumbers` Control the rendering of line numbers. If it is a function, it will be invoked when rendering a line number and the return value will be rendered. Otherwise, if it is a truthy, line numbers will be rendered normally (equivalent of using an identity function). Otherwise, line numbers will not be rendered. Defaults to on.

- `wordWrap`

- `options` refer to [Monaco interface IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html), diff editor see [IStandaloneDiffEditorConstructionOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneDiffEditorConstructionOptions.html)

- `path` path of the current model, useful when creating a multi-model editor

- `requireConfig` [config passing to require](https://github.com/suren-atoyan/monaco-react#loader-config), can be used to upgrade monaco-editor.

- `overrideServices` refer to [Monaco Interface IEditorOverrideServices](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOverrideServices.html). It depends on Monaco's internal implementations and may change over time, check github [issue](https://github.com/Microsoft/monaco-editor/issues/935#issuecomment-402174095) for more details.

- `onChange(input, event)` an event emitted when the content of the current model has changed.

- `editorWillMount(monaco)` an event emitted before the editor mounted (similar to `componentWillMount` of React).

- `editorDidMount(editor, monaco)` an event emitted when the editor has been mounted (similar to `componentDidMount` of React).

- `editorWillUnmount(editor, monaco)` an event emitted before the editor unmount (similar to `componentWillUnmount` of React).

### All props

#### basic props

<API id="BaseMonacoEditor"></API>

#### more props

<API id="MonacoDiffEditor"></API>
