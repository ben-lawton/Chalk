// STUB (WP0): canvas setup and frame scheduling. WP2 owns and replaces this file.

export interface FrameScheduler { request(): void; cancel(): void }

export function setupCanvas(_canvas: HTMLCanvasElement, _cssW: number, _cssH: number, _dpr: number): CanvasRenderingContext2D { throw new Error('TODO(WP2): setupCanvas'); }
export function createFrameScheduler(_draw: () => void): FrameScheduler { throw new Error('TODO(WP2): createFrameScheduler'); }
export function whenRendered(): Promise<void> { return Promise.reject(new Error('TODO(WP2): whenRendered')); }
