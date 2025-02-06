import { JsonViewer } from '@yuntijs/ui';

export default () => {
  return (
    <JsonViewer
      src={{
        minRows: 3,
        string: 'string',
        number: 123_456,
        boolean: false,
        obj: {
          k1: 123,
          k2: '123',
          k3: false,
          nested: {
            k4: 'nested',
          },
        },
        arr: ['string', 123_456, false, null],
      }}
    />
  );
};
