export interface RichTextEditorMethods {
  /**
   * Gets the current markdown value.
   */
  getMarkdown: () => string;

  /**
   * Updates the markdown value of the editor.
   */
  setMarkdown: (value: string) => void;

  /**
   * Inserts markdown at the current cursor position. Use the focus if necessary.
   */
  insertMarkdown: (value: string) => void;

  clearMarkdown: () => void;

  /**
   * Sets focus on input
   */
  focus: (
    callbackFn?: (() => void) | undefined,
    opts?: {
      defaultSelection?: 'rootStart' | 'rootEnd';
      preventScroll?: boolean;
    }
  ) => void;
}

export interface RichTextEditorProps {
  placeholder?: string;
  onChange?: (md: string) => void;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
  showToolbar?: boolean;
  disabled?: boolean;
  variant?: 'outlined' | 'filled' | 'borderless';
  classNames?: {
    wrapper?: string;
  };
}
