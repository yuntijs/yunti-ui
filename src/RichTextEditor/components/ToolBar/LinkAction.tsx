import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import { ActionIcon, ActionIconSize } from '@lobehub/ui';
import { LexicalEditor } from 'lexical';
import { Link } from 'lucide-react';
import React, { useCallback } from 'react';

import { sanitizeUrl } from '@/RichTextEditor/utils/url';

interface PROP {
  editor: LexicalEditor;
  isLink: boolean;
  disabled?: boolean;
  size?: ActionIconSize;
}

export const LinkAction: React.FC<PROP> = ({ editor, isLink, size }) => {
  const insertLink = useCallback(() => {
    if (isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl('https://'));
    }
  }, [editor, isLink]);
  return <ActionIcon active={isLink} icon={Link} onClick={insertLink} size={size} />;
};
