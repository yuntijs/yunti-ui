import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { Icon } from '@lobehub/ui';
import { Flex, Tooltip } from 'antd';
import { CircleAlert } from 'lucide-react';
import React, { memo, useEffect } from 'react';

import { useOptionsMap } from '@/Mentions/provider';

import { useSelectOrDelete } from '../../hooks';
import { MentionNode } from './node';
import { useStyles } from './style';
import { DELETE_MENTION_COMMAND } from './utils';

export interface MentionNodeComponentProps {
  nodeKey: string;
  variable: string;
}

export const MentionNodeComponent: React.FC<MentionNodeComponentProps> = memo(
  ({ nodeKey, variable }) => {
    const optionsMap = useOptionsMap();
    const [editor] = useLexicalComposerContext();
    const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_MENTION_COMMAND);
    const option = optionsMap?.[variable];
    const { styles } = useStyles({ isSelected, isError: !option || !!option.error });

    useEffect(() => {
      if (!editor.hasNodes([MentionNode])) {
        throw new Error('MentionsNodePlugin: MentionNode not registered on editor');
      }
    }, [editor]);

    const Item = (
      <Flex className={styles.root} ref={ref}>
        <Flex align="center" gap={2}>
          {(!option || option.error) && <Icon className={styles.error} icon={CircleAlert} />}
          {option?.icon && <Flex>{option.icon}</Flex>}
          <Flex
            className={styles.text}
            gap={2}
            title={option?.selectedLabel || option?.label || variable}
          >
            <span>{option?.selectedLabel || option?.label || variable}</span>
          </Flex>
        </Flex>
      </Flex>
    );

    if (option?.error) {
      return <Tooltip title={option?.error}>{Item}</Tooltip>;
    }

    return Item;
  }
);
