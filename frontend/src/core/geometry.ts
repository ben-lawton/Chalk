// STUB (WP0): bounds, hit testing and handles. WP1 owns and replaces this file.
import type {
  ArrowElement, BindableElement, ChalkElement, EndpointId, HandleId, HandleMode, HitResult, Outline, Point, Rect, Viewport,
} from '../types';

export function getBounds(_el: ChalkElement): Rect { throw new Error('TODO(WP1): getBounds'); }
export function getCommonBounds(_els: readonly ChalkElement[]): Rect | null { throw new Error('TODO(WP1): getCommonBounds'); }
export function isBindable(_el: ChalkElement): _el is BindableElement { throw new Error('TODO(WP1): isBindable'); }
export function getOutline(_el: BindableElement): Outline { throw new Error('TODO(WP1): getOutline'); }
export function isPointInsideOutline(_o: Outline, _p: Point): boolean { throw new Error('TODO(WP1): isPointInsideOutline'); }
export function distanceToOutline(_o: Outline, _p: Point): number { throw new Error('TODO(WP1): distanceToOutline'); }
export function rayExit(_o: Outline, _origin: Point, _dir: Point): Point | null { throw new Error('TODO(WP1): rayExit'); }
export function hitTolerance(_el: ChalkElement, _zoom: number): number { throw new Error('TODO(WP1): hitTolerance'); }
export function hitTestElement(_el: ChalkElement, _p: Point, _zoom: number): 'strong' | 'hollow' | null { throw new Error('TODO(WP1): hitTestElement'); }
export function hitTest(_elements: readonly ChalkElement[], _p: Point, _zoom: number): HitResult | null { throw new Error('TODO(WP1): hitTest'); }
export function elementsInRect(_elements: readonly ChalkElement[], _r: Rect): string[] { throw new Error('TODO(WP1): elementsInRect'); }
export function getHandleMode(_elements: readonly ChalkElement[], _selectedIds: readonly string[]): HandleMode { throw new Error('TODO(WP1): getHandleMode'); }
export function getSelectionBox(_elements: readonly ChalkElement[], _selectedIds: readonly string[]): Rect | null { throw new Error('TODO(WP1): getSelectionBox'); }
export function handlePoint(_box: Rect, _handle: HandleId): Point { throw new Error('TODO(WP1): handlePoint'); }
export function getHandlePositions(_box: Rect, _v: Viewport, _mode: 'box' | 'text'): Partial<Record<HandleId, Point>> { throw new Error('TODO(WP1): getHandlePositions'); }
export function hitHandle(_box: Rect, _screen: Point, _v: Viewport, _mode: 'box' | 'text'): HandleId | null { throw new Error('TODO(WP1): hitHandle'); }
export function hitEndpoint(_a: ArrowElement, _screen: Point, _v: Viewport): EndpointId | null { throw new Error('TODO(WP1): hitEndpoint'); }
export const HANDLE_CURSORS: Record<HandleId, string> = {
  nw: 'nwse-resize', se: 'nwse-resize', ne: 'nesw-resize', sw: 'nesw-resize',
  n: 'ns-resize', s: 'ns-resize', e: 'ew-resize', w: 'ew-resize',
};
