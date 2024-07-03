import { MenuOption } from '@lexical/react/LexicalTypeaheadMenuPlugin';

export class MentionMenuOption extends MenuOption {
  label: string;
  value: string;
  icon?: JSX.Element;
  extraElement?: JSX.Element;
  keywords: Array<string>;
  keyboardShortcut?: string;
  onSelect: (queryString: string) => void;
  disabled?: boolean;
  data?: any;

  constructor(
    value: string,
    label: string,
    options: {
      icon?: JSX.Element;
      extraElement?: JSX.Element;
      keywords?: Array<string>;
      keyboardShortcut?: string;
      onSelect: (queryString: string) => void;
      disabled?: boolean;
      data?: any;
    }
  ) {
    super(value);
    this.value = value;
    this.label = label;
    this.keywords = options.keywords || [];
    this.icon = options.icon;
    this.extraElement = options.extraElement;
    this.keyboardShortcut = options.keyboardShortcut;
    this.onSelect = options.onSelect.bind(this);
    this.disabled = options.disabled;
    this.data = options.data;
  }
}
