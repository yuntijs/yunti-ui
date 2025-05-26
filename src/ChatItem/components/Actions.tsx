import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useStyles } from '../style';
import { ChatItemProps } from '../type';

export interface ActionsProps {
  actions: ChatItemProps['actions'];
  editing?: boolean;
  placement?: ChatItemProps['placement'];
  variant?: ChatItemProps['variant'];
}

const Actions = memo<ActionsProps>(({ actions, placement, variant, editing }) => {
  const { styles } = useStyles({ editing, placement, variant });

  return (
    <Flexbox align={'flex-start'} className={styles.actions} role="menubar">
      {actions}
    </Flexbox>
  );
});

export default Actions;
