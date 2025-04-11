import { MonacoEditor, Tabs } from '@yuntijs/ui';

export default () => (
  <Tabs
    destroyInactiveTabPane
    items={[
      {
        label: 'test1',
        key: 'test1',
        children: (
          <MonacoEditor
            defaultValue="var a = 'test1'"
            height="300px"
            language="javascript"
            width="500px"
          />
        ),
      },
      {
        label: 'test2',
        key: 'test2',
        children: (
          <MonacoEditor
            defaultValue="var a = 'test2'"
            height="300px"
            language="javascript"
            width="500px"
          />
        ),
      },
      {
        label: 'test3',
        key: 'test3',
        children: (
          <MonacoEditor
            defaultValue="var a = 'test3'"
            height="300px"
            language="javascript"
            width="500px"
          />
        ),
      },
    ]}
  />
);
