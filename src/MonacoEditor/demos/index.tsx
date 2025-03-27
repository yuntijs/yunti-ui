import { StrictMode } from 'react';

import { MonacoEditor } from '../index';
import { jsValue } from './data';

export default () => {
  return (
    <StrictMode>
      <MonacoEditor
        defaultValue={jsValue}
        height={200}
        language="javascript"
        onChange={next => {
          // eslint-disable-next-line no-console
          console.log(next);
        }}
        onFullScreenChange={isFullScreen => {
          console.warn(isFullScreen);
        }}
        supportFullScreen={true}
        width={740}
      />
    </StrictMode>
  );
};
