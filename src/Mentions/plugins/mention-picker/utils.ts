import { MenuOption } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import React from 'react';

export interface MentionMenuOptionInitParams {
  label: string;
  value: string;
  title?: string;
  data?: any;
  icon?: React.ReactElement;
  extraElement?: React.ReactElement;
  keywords?: Array<string>;
  keyboardShortcut?: string;
  disabled?: boolean;
  /** 指定触发这个选项的 triggers，指定后会根据指定的 triggers 进行筛选 */
  triggers?: string[];
  onSelect: (queryString: string) => void;
  isChild?: boolean;
  children?: MentionMenuOptionInitParams[];
}

export class MentionMenuOption extends MenuOption {
  label: string;
  value: string;
  htmlTitle?: string;
  // for Tree, the same as label
  title: string;
  // for Tree, the same as value
  key: string;
  icon?: React.ReactElement;
  extraElement?: React.ReactElement;
  keywords: Array<string>;
  keyboardShortcut?: string;
  onSelect: (queryString: string) => void;
  disabled?: boolean;
  triggers?: string[];
  data?: any;
  children?: MentionMenuOption[];
  isChild?: boolean;

  constructor({
    label,
    value,
    title,
    data,
    icon,
    extraElement,
    keywords,
    keyboardShortcut,
    disabled,
    triggers,
    onSelect,
    children,
    isChild,
  }: MentionMenuOptionInitParams) {
    super(value);
    this.value = value;
    this.label = label;
    this.htmlTitle = title;
    this.title = label;
    this.key = value;
    this.keywords = keywords || [];
    this.icon = icon;
    this.extraElement = extraElement;
    this.keyboardShortcut = keyboardShortcut;
    this.onSelect = onSelect.bind(this);
    this.disabled = disabled;
    this.triggers = triggers;
    this.data = data;
    this.isChild = isChild ?? false;
    this.children = children?.map(m => {
      return new MentionMenuOption({
        ...m,
        isChild: true,
      });
    });
  }
}
