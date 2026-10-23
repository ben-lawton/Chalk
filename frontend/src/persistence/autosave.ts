// STUB (WP0): debounced autosave with conflict handling. WP5 owns and replaces this file.
import type { ChalkElement } from '../types';

export function startAutosave(): () => void { throw new Error('TODO(WP5): startAutosave'); }
export function markClean(_elements?: readonly ChalkElement[], _name?: string): void { throw new Error('TODO(WP5): markClean'); }
export function isDirty(): boolean { throw new Error('TODO(WP5): isDirty'); }
export function flushSave(_opts?: { keepalive?: boolean }): Promise<void> { return Promise.reject(new Error('TODO(WP5): flushSave')); }
export function forceSave(): Promise<void> { return Promise.reject(new Error('TODO(WP5): forceSave')); }
export function resetAutosaveForTests(): void { throw new Error('TODO(WP5): resetAutosaveForTests'); }
