import type { MentionMenuOptionInitParams } from './plugins/mention-picker/utils';

export interface MentionOption extends Omit<MentionMenuOptionInitParams, 'onSelect' | 'children'> {
  /** 选中后展示的 label 名称，不指定则直接使用 label */
  selectedLabel?: string;
  error?: string;
  children?: MentionOption[];
}

export type MentionsOptionsMap = Record<string, MentionOption>;

export interface AutoSize {
  minRows?: number;
  maxRows?: number;
}

export type { LexicalEditor as MentionsEditor, EditorState as MentionsEditorState } from 'lexical';
