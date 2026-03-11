import { init as initRunScreen, prepareRun, startRun } from './run.js';
import { init as initThree } from './three.js';

const el = {
  main: document.querySelector('main')!,
};

export function init() {
  initThree(el.main);
  initRunScreen();
  el.main.addEventListener('click', startPlaying);

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
