import { createCommand } from 'lexical';

export const INSERT_MENTION_COMMAND = createCommand('INSERT_MENTION_COMMAND');
export const DELETE_MENTION_COMMAND = createCommand('DELETE_MENTION_COMMAND');
export const CLEAR_HIDE_MENU_TIMEOUT = createCommand('CLEAR_HIDE_MENU_TIMEOUT');

// export const MENTION_REGEX = /{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi;
// export const MENTION_REGEX = /{{(.+?)}}/g;
// {{plugin-m67m66l8-794.json."id"}}
// {{plugin-m67m66l8-794.json."tags"[0]."id"}}
// export const MENTION_REGEX = /{{([\w-]{1,50}(\."?[_a-z][\w"[\]]*){1,10})}}/gi;
export const MENTION_REGEX = /{{[^.}]+\.(.+?)}}/gi;
