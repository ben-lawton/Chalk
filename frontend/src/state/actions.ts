// STUB (WP0): command entry points for UI, keyboard and clipboard. WP3 owns and replaces this file.
import type { ChalkElement, Point, ReorderDir, ShapeKind, Snapshot, Style, ToolId } from '../types';

export function setTool(_tool: ToolId): void { throw new Error('TODO(WP3): setTool'); }
export function toggleToolLock(): void { throw new Error('TODO(WP3): toggleToolLock'); }
export function finishCreation(): void { throw new Error('TODO(WP3): finishCreation'); }
export function selectAll(): void { throw new Error('TODO(WP3): selectAll'); }
export function clearSelection(): void { throw new Error('TODO(WP3): clearSelection'); }
export function deleteSelection(): void { throw new Error('TODO(WP3): deleteSelection'); }
export function duplicateSelection(): void { throw new Error('TODO(WP3): duplicateSelection'); }
export function copySelection(): string | null { throw new Error('TODO(WP3): copySelection'); }
export function cutSelection(): string | null { throw new Error('TODO(WP3): cutSelection'); }
export function pasteText(_text: string): boolean { throw new Error('TODO(WP3): pasteText'); }
export function pasteClipboard(): boolean { throw new Error('TODO(WP3): pasteClipboard'); }
export function nudgeSelection(_dx: number, _dy: number): void { throw new Error('TODO(WP3): nudgeSelection'); }
export function reorderSelection(_dir: ReorderDir): void { throw new Error('TODO(WP3): reorderSelection'); }
export function applyStyle(_patch: Partial<Style>, _mergeKey?: string): void { throw new Error('TODO(WP3): applyStyle'); }
export function placeShape(_kind: ShapeKind, _screen: Point): string { throw new Error('TODO(WP3): placeShape'); }
export function replaceScene(_elements: readonly ChalkElement[]): void { throw new Error('TODO(WP3): replaceScene'); }
export function startEditing(_id: string, _before?: Snapshot): void { throw new Error('TODO(WP3): startEditing'); }
export function createTextAt(_world: Point): string { throw new Error('TODO(WP3): createTextAt'); }
export function updateEditingText(_text: string): void { throw new Error('TODO(WP3): updateEditingText'); }
export function commitEditing(): void { throw new Error('TODO(WP3): commitEditing'); }
export function editSelection(): boolean { throw new Error('TODO(WP3): editSelection'); }
export function undo(): void { throw new Error('TODO(WP3): undo'); }
export function redo(): void { throw new Error('TODO(WP3): redo'); }
export function zoomIn(): void { throw new Error('TODO(WP3): zoomIn'); }
export function zoomOut(): void { throw new Error('TODO(WP3): zoomOut'); }
export function resetZoom(): void { throw new Error('TODO(WP3): resetZoom'); }
export function zoomToFit(_opts?: { maxZoom?: number }): void { throw new Error('TODO(WP3): zoomToFit'); }
export function zoomToSelection(): void { throw new Error('TODO(WP3): zoomToSelection'); }
export function openDialog(_d: 'boards' | 'help'): void { throw new Error('TODO(WP3): openDialog'); }
export function closeDialog(): void { throw new Error('TODO(WP3): closeDialog'); }
export function remeasureText(): void { throw new Error('TODO(WP3): remeasureText'); }
