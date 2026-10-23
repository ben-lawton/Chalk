// STUB (WP0): typed HTTP client for /api. ApiError is complete; api methods reject. WP5 owns and replaces this file.
import type { Board, BoardCreateRequest, BoardSummary, BoardUpdateRequest, HealthResponse } from '../types';

export class ApiError extends Error {
  readonly status: number;
  readonly body: unknown;
  constructor(status: number, body: unknown, message?: string) {
    super(message ?? `HTTP ${status}`);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}

export interface Api {
  health(): Promise<HealthResponse>;
  listBoards(): Promise<BoardSummary[]>;
  getBoard(id: string): Promise<Board>;
  createBoard(body: BoardCreateRequest): Promise<Board>;
  updateBoard(id: string, body: BoardUpdateRequest, opts?: { keepalive?: boolean }): Promise<BoardSummary>;
  deleteBoard(id: string): Promise<void>;
}

const todo = (name: string): Promise<never> => Promise.reject(new Error(`TODO(WP5): api.${name}`));

export const api: Api = {
  health: () => todo('health'),
  listBoards: () => todo('listBoards'),
  getBoard: () => todo('getBoard'),
  createBoard: () => todo('createBoard'),
  updateBoard: () => todo('updateBoard'),
  deleteBoard: () => todo('deleteBoard'),
};
