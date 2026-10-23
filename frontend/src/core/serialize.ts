// STUB (WP0): scene file parsing, migrations and defensive restore. WP1 owns and replaces this file.
import type { ChalkElement, SceneFile, Style } from '../types';

export class SceneParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SceneParseError';
  }
}
export const MIGRATIONS: Record<number, (file: Record<string, unknown>) => Record<string, unknown>> = {};

export function toSceneFile(_elements: readonly ChalkElement[]): SceneFile { throw new Error('TODO(WP1): toSceneFile'); }
export function parseSceneFile(_input: unknown): ChalkElement[] { throw new Error('TODO(WP1): parseSceneFile'); }
export function restoreElements(_raw: readonly unknown[]): ChalkElement[] { throw new Error('TODO(WP1): restoreElements'); }
export function restoreStyle(_raw: unknown): Style { throw new Error('TODO(WP1): restoreStyle'); }
