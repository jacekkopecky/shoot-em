/**
 * This is the code that controls fullscreen behaviour and the splash screen.
 */

import { init as initMainScreen } from './main-screen';

let useFullscreen = true;

// @ts-expect-error because import.meta.env is not normally known but vite provides it
if (import.meta.env.DEV) {
  if (window.location.host.includes('localhost')) useFullscreen = false;
}

const el = {
  startBtn: document.querySelector('#startBtn')!,
  exitBtn: document.querySelector('#exitBtn')!,
  main: document.querySelector('main')!,
};

export function init() {
  initMainScreen();

  document.body.classList.toggle('using-fullscreen', useFullscreen);

  if (useFullscreen) {
    document.body.addEventListener('keyup', handleTopLevelSpaceKey);
    el.startBtn.addEventListener('click', goFullscreen);
    el.exitBtn.addEventListener('click', exit);
  }

  // disable context menu
  document.addEventListener('contextmenu', (e) => e.preventDefault());
}

async function goFullscreen() {
  await el.main.requestFullscreen();
}

function exit() {
  document.exitFullscreen();
}

function handleTopLevelSpaceKey(e: KeyboardEvent): void {
  if (e.key === ' ' && !document.fullscreenElement) {
    goFullscreen();
  }
}
