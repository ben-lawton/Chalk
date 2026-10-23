// STUB (WP0): inline SVG icons. WP4 owns and replaces this file.
import type { ToolId } from '../types';

export type IconName = 'hand' | 'select' | 'arrow' | 'line' | 'text' | 'lock' | 'unlock' | 'undo' | 'redo' | 'menu'
  | 'help' | 'zoomIn' | 'zoomOut' | 'fit' | 'trash' | 'duplicate' | 'front' | 'back' | 'forward' | 'backward' | 'close';

export function Icon(_props: { name: IconName; size?: number }) {
  return null;
}
export function ToolIcon(_props: { tool: ToolId; size?: number }) {
  return null;
}
