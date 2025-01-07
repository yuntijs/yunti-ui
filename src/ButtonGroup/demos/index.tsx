/* eslint-disable no-console */
import { ButtonGroup } from '@yuntijs/ui';

const ButtonGroupDemo = () => {
  return (
    <ButtonGroup
      items={[
        {
          key: 'edit',
          label: '编辑',
          type: 'primary',
        },
        {
          key: 'delete',
          label: '删除',
          danger: true,
        },
      ]}
      onClick={(key, e) => console.log(key, e)}
    />
  );
};

export default ButtonGroupDemo;
