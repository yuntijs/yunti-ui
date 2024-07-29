import { MonacoDiffEditor } from '@yuntijs/ui';

import { original, value } from './data/diff';

export default () => {
  return (
    <MonacoDiffEditor
      height="300px"
      language="javascript"
      onChange={input => {
        // eslint-disable-next-line no-console
        console.log(input);
      }}
      original={original}
      supportFullScreen
      value={value}
      width="740px"
    />
  );
};
