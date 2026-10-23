// STUB (WP0): interactive-layer overlay drawing (hover, selection, handles). WP2 owns and replaces this file.
import type { ChalkElement, Interaction, Viewport } from '../types';

export interface OverlayInput {
  elements: readonly ChalkElement[]; selectedIds: readonly string[]; viewport: Viewport;
  interaction: Interaction; editingId: string | null; dpr: number; width: number; height: number;
}

export function drawOverlay(_ctx: CanvasRenderingContext2D, _input: OverlayInput): void { throw new Error('TODO(WP2): drawOverlay'); }
