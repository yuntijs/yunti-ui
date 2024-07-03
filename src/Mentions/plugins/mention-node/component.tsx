import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { Icon } from '@lobehub/ui';
import { Flex, Tooltip } from 'antd';
import { COMMAND_PRIORITY_EDITOR } from 'lexical';
import { CircleAlert } from 'lucide-react';
import React, { memo, useEffect, useState } from 'react';

import { useSelectOrDelete } from '../../hooks';
import { MentionsOptionsMap } from '../../types';
import { MentionNode } from './node';
import { useStyles } from './style';
import { DELETE_MENTION_COMMAND, UPDATE_MENTIONS_OPTIONS } from './utils';

export interface MentionNodeComponentProps {
  nodeKey: string;
  variable: string;
  optionsMap: MentionsOptionsMap;
}

export const MentionNodeComponent: React.FC<MentionNodeComponentProps> = memo(
  ({ nodeKey, variable, optionsMap = {} }) => {
    const [editor] = useLexicalComposerContext();
    const [ref, isSelected] = useSelectOrDelete(nodeKey, DELETE_MENTION_COMMAND);
    const [localMentionsOptionsMap, setLocalMentionsOptionsMap] =
      useState<MentionsOptionsMap>(optionsMap);
    const option = localMentionsOptionsMap?.[variable];
    const { styles } = useStyles({ isSelected, isError: !option || !!option.error });

    useEffect(() => {
      if (!editor.hasNodes([MentionNode]))
        throw new Error('MentionsNodePlugin: MentionNode not registered on editor');

      return mergeRegister(
        editor.registerCommand(
          UPDATE_MENTIONS_OPTIONS,
          (newOptionsMap: MentionsOptionsMap) => {
            setLocalMentionsOptionsMap(newOptionsMap);

            return true;
          },
          COMMAND_PRIORITY_EDITOR
        )
      );
    }, [editor]);

    const Item = (
      <Flex className={styles.root} ref={ref}>
        <Flex align="center" gap={2}>
          {(!option || option.error) && <Icon className={styles.error} icon={CircleAlert} />}
          {option?.icon && <Flex>{option.icon}</Flex>}
          <Flex className={styles.text} gap={2} title={option?.label || variable}>
            <span>{option?.label || variable}</span>
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
