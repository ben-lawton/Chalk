// STUB (WP0): shape tool factory (called at import time by tools/index.ts, so it must not throw). WP3 owns and replaces this file.
import type { ShapeKind, Tool } from '../types';

export function createShapeTool(kind: ShapeKind): Tool {
  return { id: kind, cursor: 'crosshair', onPointerDown() { throw new Error('TODO(WP3): createShapeTool'); }, onPointerMove() {}, onPointerUp() {} };
}
