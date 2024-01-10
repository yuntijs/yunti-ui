/**
 * iframe: true
 * compact: true
 */
import { MonacoEditor } from '@yuntijs/ui';

export default () => {
  return (
    <div style={{ padding: 24 }}>
      <MonacoEditor
        defaultValue={`import { MonacoEditor } from '@yuntijs/ui';

  export default () => {
    return (
      <MonacoEditor
        defaultValue={\`const value = function hello() {
    alert('Hello world! Monaco version is 0.33.0');
  }\`}
        language="javascript"
        onChange={(next) => {
          // eslint-disable-next-line no-console
          console.log(next);
        }}
        version="0.33.0"
      />
    )
  };`}
        editorDidMount={(monaco, editor) => {
          // eslint-disable-next-line no-console
          console.log(monaco, editor);
        }}
        height={240}
        language="javascript"
        onChange={next => {
          // eslint-disable-next-line no-console
          console.log(next);
        }}
        version="0.19.3"
      />
    </div>
  );
};
