import { CollapseGroup } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  return (
    <CollapseGroup icon={VariableIcon} style={{ width: '100%' }} title="输出变量">
      我是收起来的内容
    </CollapseGroup>
  );
};
