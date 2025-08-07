import { AntDesignOutlined } from '@ant-design/icons';
import { Icon } from '@lobehub/ui';
import { Flex, Segmented, SelectCard, SelectCardProps } from '@yuntijs/ui';
import { Smile } from 'lucide-react';
import { useState } from 'react';

const smileIcon = <Icon icon={Smile} />;

const SelectWithImgDemo = () => {
  const [size, setSize] = useState<SelectCardProps['size']>('small');
  const [checkIcon, setCheckIcon] = useState<any>(smileIcon);

  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="small">
        <div>size:</div>
        <Segmented<SelectCardProps['size']>
          onChange={value => setSize(value)}
          options={['small', 'middle', 'large']}
          value={size}
        />
      </Flex>
      <Flex align="center" gap="small">
        <div>checkIcon:</div>
        <Segmented
          onChange={value => setCheckIcon(value)}
          options={[
            {
              key: 'hide',
              label: '隐藏',
              value: null,
            },
            {
              key: 'smile',
              label: '笑脸',
              value: smileIcon,
            },
          ]}
          value={checkIcon}
        />
      </Flex>
      <SelectCard
        checkIcon={checkIcon}
        defaultValue={'antd'}
        options={[
          {
            label: 'Ant Design',
            img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            value: 'antd',
          },
          {
            label: 'Lobehub UI',
            img: 'https://registry.npmmirror.com/@lobehub/assets-logo/1.2.0/files/assets/logo-3d.webp',
            value: 'lobehub-ui',
          },
          {
            label: 'YuntiJS UI',
            img: 'https://avatars.githubusercontent.com/u/148947838',
            value: 'yunti-ui',
          },
          {
            label: 'icon',
            icon: <AntDesignOutlined />,
            iconStyle: { backgroundColor: '#1677ff' },
            value: 'icon',
          },
        ]}
        size={size}
      />
    </Flex>
  );
};

export default SelectWithImgDemo;
