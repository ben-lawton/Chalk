// STUB (WP0): rough.js drawable generation and caches. WP2 owns and replaces this file.
import type { Drawable } from 'roughjs/bin/core';
import type { ChalkElement, Point } from '../types';

export function drawOrigin(_el: ChalkElement): Point { throw new Error('TODO(WP2): drawOrigin'); }
export function shapeKey(_el: ChalkElement): string { throw new Error('TODO(WP2): shapeKey'); }
export function getDrawables(_el: ChalkElement): readonly Drawable[] { throw new Error('TODO(WP2): getDrawables'); }
export function arrowheadPoints(_tip: Point, _from: Point, _size: number, _angleDeg: number): [Point, Point] { throw new Error('TODO(WP2): arrowheadPoints'); }
export function clearDrawableCache(): void { throw new Error('TODO(WP2): clearDrawableCache'); }
