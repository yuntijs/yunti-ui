import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex, Typography } from '@yuntijs/ui';
import type { MenuProps } from '@yuntijs/ui';
import { Divider } from 'antd';

const { Text } = Typography;

export default () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <a href="https://botnow.cn" rel="noopener noreferrer" target="_blank">
          <Flex align="center" gap="small">
            <Avatar size={16} />
            <span>Botnow</span>
          </Flex>
        </a>
      ),
      key: 'botnow',
    },
    {
      label: (
        <a href="https://lingwu.cn" rel="noopener noreferrer" target="_blank">
          <Flex align="center" gap="small">
            <Avatar size={16} />
            <span>灵小悟</span>
          </Flex>
        </a>
      ),
      key: 'lingwu',
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      popupRender={menu => (
        <Flex vertical>
          <Text style={{ fontSize: 12, padding: '10px 16px 4px' }} type="secondary">
            已发布平台
          </Text>
          <Divider style={{ margin: 0 }} />
          {menu}
          <Divider style={{ margin: 0 }} />
          <Flex align="center" justify="center" style={{ fontSize: 12, padding: '8px 16px' }}>
            <Button icon={<PlusOutlined />} type="primary">
              添加
            </Button>
          </Flex>
        </Flex>
      )}
    >
      <Button icon={<DownOutlined />} iconPlacement="end">
        <Flex align="center" gap="small">
          <Avatar size={16} />
          <span>Botnow</span>
        </Flex>
      </Button>
    </Dropdown>
  );
};
