// STUB (WP0): PNG and JSON export/import. WP2 owns and replaces this file.
import type { ChalkElement, Rect } from '../types';

export function computeExportFrame(_elements: readonly ChalkElement[], _o?: { scale?: number; padding?: number }): { bounds: Rect; scale: number } | null { throw new Error('TODO(WP2): computeExportFrame'); }
export function renderToCanvas(_elements: readonly ChalkElement[], _o?: { scale?: number; padding?: number; background?: string | null }): HTMLCanvasElement | null { throw new Error('TODO(WP2): renderToCanvas'); }
export function exportPngBlob(_elements: readonly ChalkElement[], _o?: { scale?: number; padding?: number; background?: string | null }): Promise<Blob | null> { return Promise.reject(new Error('TODO(WP2): exportPngBlob')); }
export function exportPng(_elements: readonly ChalkElement[], _name: string): Promise<boolean> { return Promise.reject(new Error('TODO(WP2): exportPng')); }
export function exportSceneJson(_elements: readonly ChalkElement[], _name: string): void { throw new Error('TODO(WP2): exportSceneJson'); }
export function importSceneJson(_file: File): Promise<ChalkElement[]> { return Promise.reject(new Error('TODO(WP2): importSceneJson')); }
export function downloadBlob(_blob: Blob, _filename: string): void { throw new Error('TODO(WP2): downloadBlob'); }
export function safeFileName(_name: string): string { throw new Error('TODO(WP2): safeFileName'); }
