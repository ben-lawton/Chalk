// STUB (WP0): text tool. WP3 owns and replaces this file.
import type { Tool } from '../types';

export const textTool: Tool = {
  id: 'text', cursor: 'text',
  onPointerDown() { throw new Error('TODO(WP3): textTool'); },
  onPointerMove() {},
  onPointerUp() {},
};
