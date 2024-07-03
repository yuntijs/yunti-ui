import { createCommand } from 'lexical';

export const INSERT_MENTION_COMMAND = createCommand('INSERT_MENTION_COMMAND');
export const DELETE_MENTION_COMMAND = createCommand('DELETE_MENTION_COMMAND');
export const CLEAR_HIDE_MENU_TIMEOUT = createCommand('CLEAR_HIDE_MENU_TIMEOUT');
export const UPDATE_MENTIONS_OPTIONS = createCommand('UPDATE_MENTIONS_OPTIONS');

export const MENTION_REGEX = /{{([\w-]{1,50}(\.[_a-z]\w{0,29}){1,10})}}/gi;
