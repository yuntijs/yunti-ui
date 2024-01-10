/**
 * iframe: true
 * compact: true
 */
import { MonacoEditor } from '@yuntijs/ui';

import { jsValue } from './data';

export default () => {
  return (
    <div
      style={{
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        height: '100vh',
      }}
    >
      <MonacoEditor
        defaultValue={jsValue}
        height={200}
        language="javascript"
        onChange={next => {
          // eslint-disable-next-line no-console
          console.log(next);
        }}
        version="0.19.3"
        width={740}
      />
    </div>
  );
};
