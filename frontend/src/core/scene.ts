// STUB (WP0): element creation and pure scene operations. WP1 owns and replaces this file.
import type {
  ArrowElement, Binding, ChalkElement, EndpointId, HandleId, Point, Rect, ReorderDir, ShapeElement, ShapeKind, Style, TextElement,
} from '../types';

export function createShape(_kind: ShapeKind, _r: Rect, _style: Style): ShapeElement { throw new Error('TODO(WP1): createShape'); }
export function createText(_at: Point, _text: string, _style: Style): TextElement { throw new Error('TODO(WP1): createText'); }
export function createArrow(_start: Point, _end: Point, _style: Style): ArrowElement { throw new Error('TODO(WP1): createArrow'); }
export function getElement(_elements: readonly ChalkElement[], _id: string): ChalkElement | undefined { throw new Error('TODO(WP1): getElement'); }
export function getElementText(_el: ChalkElement): string { throw new Error('TODO(WP1): getElementText'); }
export function addElements(_elements: readonly ChalkElement[], _els: readonly ChalkElement[]): readonly ChalkElement[] { throw new Error('TODO(WP1): addElements'); }
export function replaceElement(_elements: readonly ChalkElement[], _el: ChalkElement): readonly ChalkElement[] { throw new Error('TODO(WP1): replaceElement'); }
export function removeElements(_elements: readonly ChalkElement[], _ids: readonly string[]): readonly ChalkElement[] { throw new Error('TODO(WP1): removeElements'); }
export function moveElements(_base: readonly ChalkElement[], _ids: readonly string[], _dx: number, _dy: number): readonly ChalkElement[] { throw new Error('TODO(WP1): moveElements'); }
export function resizeElements(
  _base: readonly ChalkElement[], _ids: readonly string[], _handle: HandleId, _pointer: Point, _mods: { shift: boolean; alt: boolean },
): readonly ChalkElement[] { throw new Error('TODO(WP1): resizeElements'); }
export function shapeRectFromDrag(_origin: Point, _p: Point, _mods: { shift: boolean; alt: boolean }): Rect { throw new Error('TODO(WP1): shapeRectFromDrag'); }
export function duplicateElements(
  _elements: readonly ChalkElement[], _ids: readonly string[], _offset: Point,
): { elements: readonly ChalkElement[]; newIds: string[] } { throw new Error('TODO(WP1): duplicateElements'); }
export function cloneWithNewIds(_els: readonly ChalkElement[], _offset: Point): ChalkElement[] { throw new Error('TODO(WP1): cloneWithNewIds'); }
export function reorderElements(_elements: readonly ChalkElement[], _ids: readonly string[], _dir: ReorderDir): readonly ChalkElement[] { throw new Error('TODO(WP1): reorderElements'); }
export function applyStyleToElements(_elements: readonly ChalkElement[], _ids: readonly string[], _patch: Partial<Style>): readonly ChalkElement[] { throw new Error('TODO(WP1): applyStyleToElements'); }
export function setElementText(_elements: readonly ChalkElement[], _id: string, _text: string): readonly ChalkElement[] { throw new Error('TODO(WP1): setElementText'); }
export function setArrowEndpoint(
  _elements: readonly ChalkElement[], _arrowId: string, _which: EndpointId, _point: Point, _binding: Binding | null,
): readonly ChalkElement[] { throw new Error('TODO(WP1): setArrowEndpoint'); }
export function fitShapeToLabel(_el: ShapeElement): ShapeElement { throw new Error('TODO(WP1): fitShapeToLabel'); }
