export const DEFAULT_PUNCTUATION = '\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%\'"~=<>_:;';

// Makes it possible to use brackets before the trigger: (@mention)
export const PRE_TRIGGER_CHARS = '\\(';

// Strings that can trigger the mention menu.
export const TRIGGERS = (triggers: string[]) => '(?:' + triggers.join('|') + ')';

// Chars we expect to see in a mention (non-space, non-punctuation).
export const VALID_CHARS = (triggers: string[], punctuation: string) => {
  const lookahead = triggers.length === 0 ? '' : '(?!' + triggers.join('|') + ')';
  return lookahead + '[^\\s' + punctuation + ']';
};

// Non-standard series of chars. Each series must be preceded and followed by
// a valid char.
export const VALID_JOINS = (punctuation: string) =>
  '(?:' +
  '\\.[ |$]|' + // E.g. "r. " in "Mr. Smith"
  '\\s|' + // E.g. " " in "Josh Duck"
  '[' +
  punctuation +
  ']|' + // E.g. "-' in "Salier-Hellendag"
  ')';

export const LENGTH_LIMIT = 75;
