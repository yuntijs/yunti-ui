import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { CollapseGroup, CollapseGroupProps } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const control: CollapseGroupProps | any = useControls(
    {
      title: '输出变量',
      defaultActive: true,
      variant: {
        options: ['default', 'block', 'ghost', 'pure'],
        value: 'default',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store} style={{ width: '100%' }}>
      <CollapseGroup icon={VariableIcon} style={{ width: '100%' }} {...control}>
        我是收起来的内容
      </CollapseGroup>
    </StoryBook>
  );
};
