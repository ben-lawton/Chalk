// STUB (WP0): board lifecycle (init, open, create, delete, rename, conflict resolution). WP5 owns and replaces this file.
import type { Board, BoardSummary, ChalkElement } from '../types';

export function initBoards(): Promise<void> { return Promise.reject(new Error('TODO(WP5): initBoards')); }
export function openBoard(_id: string, _opts?: { skipFlush?: boolean }): Promise<void> { return Promise.reject(new Error('TODO(WP5): openBoard')); }
export function createBoard(_name?: string): Promise<void> { return Promise.reject(new Error('TODO(WP5): createBoard')); }
export function deleteBoard(_id: string): Promise<void> { return Promise.reject(new Error('TODO(WP5): deleteBoard')); }
export function listBoards(): Promise<BoardSummary[]> { return Promise.reject(new Error('TODO(WP5): listBoards')); }
export function renameBoard(_name: string): void { throw new Error('TODO(WP5): renameBoard'); }
export function resolveConflict(_choice: 'reload' | 'overwrite'): Promise<void> { return Promise.reject(new Error('TODO(WP5): resolveConflict')); }
export function loadIntoState(_board: Board, _opts?: { elements?: ChalkElement[] }): void { throw new Error('TODO(WP5): loadIntoState'); }
