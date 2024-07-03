export interface MentionOption {
  label: string;
  value: string;
  data?: any;
  icon?: JSX.Element;
  extraElement?: JSX.Element;
  keywords?: Array<string>;
  keyboardShortcut?: string;
  error?: string;
  disabled?: boolean;
}

export type MentionsOptionsMap = Record<string, MentionOption>;

export interface AutoSize {
  minRows?: number;
  maxRows?: number;
}
