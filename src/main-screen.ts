import { init as initRunScreen, prepareRun, startRun } from './run';
import { init as initThree } from './three';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webgl-canvas')!,
  exitBtn: document.querySelector<HTMLButtonElement>('#exitBtn')!,
  endRunScreenOK: document.querySelector('#endRunScreen button.ok')!,
};

export function init() {
  initThree(el.main);
  initRunScreen();
  el.canvas.addEventListener('touchstart', startPlaying);
  el.endRunScreenOK.addEventListener('click', showMainScreen);

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
  el.exitBtn.disabled = false;
  prepareRun();
}
