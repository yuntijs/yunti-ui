import { MonacoEditor } from '@yuntijs/ui';
import { Segmented, Space } from 'antd';
import { useState } from 'react';

export default () => {
  const [files, setFiles] = useState<
    Record<string, { name: string; language: string; value: string }>
  >({
    'a.json': {
      name: 'a.json',
      language: 'json',
      value: '{ "a": 1 }',
    },
    'b.js': {
      name: 'b.js',
      language: 'javascript',
      value: 'var a = 1',
    },
    'c.sql': {
      name: 'c.sql',
      language: 'sql',
      value: 'SELECT * from table where id = 1',
    },
  });
  const [fileName, setFileName] = useState('a.json');
  const file = files[fileName];

  return (
    <Space direction="vertical" size="large">
      <Segmented
        onChange={value => setFileName(value as string)}
        options={Object.keys(files)}
        value={fileName}
      />
      <MonacoEditor
        defaultValue={file.value}
        height={40}
        language={file.language}
        onChange={next => {
          setFiles(v => ({
            ...v,
            [file.name]: {
              ...v[file.name],
              value: next,
            },
          }));
        }}
        path={file.name}
        saveViewState={true}
        width={600}
      />
    </Space>
  );
};
