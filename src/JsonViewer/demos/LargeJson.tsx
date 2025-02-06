import { JsonViewer } from '@yuntijs/ui';

import { largeJson } from './data/large-json';

export default () => {
  return (
    <JsonViewer
      fullFeatured
      src={largeJson}
      style={{ height: 520 }}
      title="I'm a large json, has a long long long long long long long long long long long long long long long long long title"
    />
  );
};
