// STUB (WP0): arrow and line tools. WP3 owns and replaces this file.
import type { Tool } from '../types';

export const arrowTool: Tool = {
  id: 'arrow', cursor: 'crosshair',
  onPointerDown() { throw new Error('TODO(WP3): arrowTool'); },
  onPointerMove() {},
  onPointerUp() {},
};
export const lineTool: Tool = {
  id: 'line', cursor: 'crosshair',
  onPointerDown() { throw new Error('TODO(WP3): lineTool'); },
  onPointerMove() {},
  onPointerUp() {},
};
