// STUB (WP0): arrow binding, targets and re-routing. WP1 owns and replaces this file.
import type { ArrowElement, Binding, BindableElement, ChalkElement, Point } from '../types';

export function indexById(_elements: readonly ChalkElement[]): Map<string, ChalkElement> { throw new Error('TODO(WP1): indexById'); }
export function findBindTarget(
  _elements: readonly ChalkElement[], _p: Point, _zoom: number, _exclude?: readonly (string | null | undefined)[],
): BindableElement | null { throw new Error('TODO(WP1): findBindTarget'); }
export function chooseFixedPoint(_target: BindableElement, _p: Point, _precise: boolean): [number, number] { throw new Error('TODO(WP1): chooseFixedPoint'); }
export function focusPoint(_target: BindableElement, _b: Binding): Point { throw new Error('TODO(WP1): focusPoint'); }
export function resolveArrow(_a: ArrowElement, _byId: ReadonlyMap<string, ChalkElement>): ArrowElement { throw new Error('TODO(WP1): resolveArrow'); }
export function updateBoundArrows(_elements: readonly ChalkElement[], _changedIds: ReadonlySet<string> | null): readonly ChalkElement[] { throw new Error('TODO(WP1): updateBoundArrows'); }
export function arrowsBoundTo(_elements: readonly ChalkElement[], _id: string): ArrowElement[] { throw new Error('TODO(WP1): arrowsBoundTo'); }
export function unbindFrom(_elements: readonly ChalkElement[], _ids: ReadonlySet<string>): readonly ChalkElement[] { throw new Error('TODO(WP1): unbindFrom'); }
