// STUB (WP0): app boot (fonts, test hook, React root, input, persistence), stubs wrapped in try/catch. WP4 owns and replaces this file.
import '@fontsource/caveat/400.css';
import './ui/styles.css';
import { createRoot } from 'react-dom/client';
import { FONT_LOAD_TIMEOUT_MS } from './constants';
import { clearTextCache } from './core/text';
import { remeasureText } from './state/actions';
import { installTestHook } from './testing/testHook';
import { attachKeyboard } from './input/keyboard';
import { attachClipboard } from './input/clipboard';
import { startAutosave } from './persistence/autosave';
import { initBoards } from './persistence/boards';
import { App } from './ui/App';

function attempt(name: string, fn: () => void): void {
  try {
    fn();
  } catch (err) {
    console.warn(`boot: ${name} failed`, err);
  }
}

async function boot(): Promise<void> {
  // 1. fonts (never block longer than FONT_LOAD_TIMEOUT_MS)
  try {
    await Promise.race([document.fonts.load('24px Caveat'), new Promise((r) => setTimeout(r, FONT_LOAD_TIMEOUT_MS))]);
  } catch {
    // font loading is best effort
  }
  document.fonts?.addEventListener?.('loadingdone', () => {
    clearTextCache();
    attempt('remeasureText', remeasureText);
  });
  // 2. test hook, 3. React (NO StrictMode), 4. input + persistence
  attempt('installTestHook', installTestHook);
  createRoot(document.getElementById('root')!).render(<App />);
  attempt('attachKeyboard', () => { attachKeyboard(); });
  attempt('attachClipboard', () => { attachClipboard(); });
  attempt('startAutosave', () => { startAutosave(); });
  initBoards().catch((err: unknown) => console.warn('boot: initBoards failed', err));
}

void boot();
