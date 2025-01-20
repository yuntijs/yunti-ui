import { CollapseTable, Space, Typography } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';
import React from 'react';

const { Text } = Typography;

type DataType = {
  key: string;
  type: string;
  desc: string;
};

export default () => {
  return (
    <CollapseTable<DataType>
      columns={[
        {
          title: '变量名',
          dataIndex: 'key',
        },
        {
          title: '变量类型',
          dataIndex: 'type',
          render: text => <Text code>{text}</Text>,
        },
        {
          title: '描述',
          dataIndex: 'desc',
          render: (text, row) => (
            <Space>
              <span>{row.key}</span>
              <span>{text}</span>
            </Space>
          ),
        },
      ]}
      dataSource={[
        {
          key: 'answer',
          type: 'string',
          desc: '大模型生成的回答',
        },
        {
          key: 'file',
          type: 'blob',
          desc: '大模型生成的文件',
        },
      ]}
      icon={VariableIcon}
      rootStyle={{ width: '100%' }}
      title="输出变量"
      variant="block"
    />
  );
};
