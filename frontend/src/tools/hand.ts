// STUB (WP0): hand (pan) tool. WP3 owns and replaces this file.
import type { Tool } from '../types';

export const handTool: Tool = {
  id: 'hand', cursor: 'grab',
  onPointerDown() { throw new Error('TODO(WP3): handTool'); },
  onPointerMove() {},
  onPointerUp() {},
};
