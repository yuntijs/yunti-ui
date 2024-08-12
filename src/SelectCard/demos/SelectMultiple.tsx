import { SelectCard } from '@yuntijs/ui';

const SelectWithImgDemo = () => {
  return (
    <SelectCard
      defaultValue={['antd', 'yunti-ui']}
      multiple
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
        { label: 'test', description: 'test desc', value: 'test' },
      ]}
    />
  );
};

export default SelectWithImgDemo;
