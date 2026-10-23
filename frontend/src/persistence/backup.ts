// STUB (WP0): localStorage backup of unsaved work. WP5 owns and replaces this file.
import type { SceneFile } from '../types';

export interface BoardBackup { boardId: string; baseVersion: number; savedAt: string; name: string; scene: SceneFile }

export function writeBackup(_b: BoardBackup): void { throw new Error('TODO(WP5): writeBackup'); }
export function readBackup(_boardId: string): BoardBackup | null { throw new Error('TODO(WP5): readBackup'); }
export function clearBackup(_boardId: string): void { throw new Error('TODO(WP5): clearBackup'); }
