import { init as initRunScreen, prepareRun, startRun } from './run.js';
import { init as initThree } from './three.js';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webgl-canvas')!,
};

export function init() {
  initThree(el.main);
  initRunScreen();
  el.canvas.addEventListener('touchstart', startPlaying);

  showMainScreen();
}

export function startPlaying() {
  if (!el.main.classList.contains('run')) {
    el.main.classList.add('run');
    startRun();
  }
}

export function showMainScreen() {
  el.main.classList.remove('run');
  prepareRun();
}
