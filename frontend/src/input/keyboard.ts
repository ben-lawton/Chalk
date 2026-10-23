// STUB (WP0): keyboard shortcuts and the SHORTCUTS table. WP3 owns and replaces this file.
import type { ShortcutInfo } from '../types';

export type KeyLike = Pick<KeyboardEvent, 'key' | 'code' | 'ctrlKey' | 'metaKey' | 'shiftKey' | 'altKey' | 'repeat'> & { target: EventTarget | null };

export function handleKeyDown(_e: KeyLike): boolean { throw new Error('TODO(WP3): handleKeyDown'); }
export function attachKeyboard(): () => void { throw new Error('TODO(WP3): attachKeyboard'); }
export const SHORTCUTS: readonly ShortcutInfo[] = [];
