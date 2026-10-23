// STUB (WP0): static-layer scene drawing and canvas text placement. WP2 owns and replaces this file.
import type { ChalkElement, TextLayout, Viewport } from '../types';

export interface SceneRenderOptions {
  viewport: Viewport; dpr: number; width: number; height: number; // css px of the target
  background: string | null;   // null = transparent
  grid: boolean;
  hiddenTextId: string | null; // element whose text/label is being edited: not drawn
}

export function drawScene(_ctx: CanvasRenderingContext2D, _elements: readonly ChalkElement[], _o: SceneRenderOptions): void { throw new Error('TODO(WP2): drawScene'); }
export function drawTextLayout(_ctx: CanvasRenderingContext2D, _layout: TextLayout, _color: string): void { throw new Error('TODO(WP2): drawTextLayout'); }
export function clearTextMetricsCache(): void { throw new Error('TODO(WP2): clearTextMetricsCache'); }
