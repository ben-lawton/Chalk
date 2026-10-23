// STUB (WP0): pure model of which style-panel sections show. WP4 owns and replaces this file.
import type { AppState, Style } from '../types';

export interface PanelSections {
  stroke: boolean; background: boolean; fill: boolean; strokeWidth: boolean; strokeStyle: boolean;
  roughness: boolean; edges: boolean; arrowheads: boolean; fontSize: boolean; fontFamily: boolean; textAlign: boolean;
  opacity: boolean; layers: boolean;
}
export interface PanelModel { visible: boolean; sections: PanelSections; values: Style }

export function getPanelModel(_s: Pick<AppState, 'elements' | 'selectedIds' | 'tool' | 'currentStyle'>): PanelModel { throw new Error('TODO(WP4): getPanelModel'); }
