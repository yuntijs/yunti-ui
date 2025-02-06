import { JsonViewer } from '@yuntijs/ui';

import { largeJson } from './data/large-json';

export default () => {
  return <JsonViewer src={largeJson} />;
};
