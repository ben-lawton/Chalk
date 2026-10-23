// STUB (WP0): select tool state machine. WP3 owns and replaces this file.
import type { Tool } from '../types';

export const selectTool: Tool = {
  id: 'select', cursor: 'default',
  onPointerDown() { throw new Error('TODO(WP3): selectTool'); },
  onPointerMove() {},
  onPointerUp() {},
};
