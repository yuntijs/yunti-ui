import { DownOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex, Typography } from '@yuntijs/ui';
import type { MenuProps } from '@yuntijs/ui';

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
      menuExtra={{
        divider: true,
        content: (
          <Text style={{ fontSize: 12 }} type="secondary">
            已发布平台
          </Text>
        ),
      }}
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
