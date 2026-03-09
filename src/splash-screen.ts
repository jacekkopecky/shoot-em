/**
 * This is the code that controls fullscreen behaviour and lets the game know when it can work.
 */

import { end, start } from './game-screen.js';

const useFullscreen = false;

if (useFullscreen) {
  document.body.classList.add('fs');
}

const el = {
  startBtn: document.querySelector('#startBtn')!,
  endBtn: document.querySelector('#exitBtn')!,
  main: document.querySelector('main')!,
};

export function init() {
  if (useFullscreen) {
    document.body.addEventListener('keyup', handleTopLevelSpaceKey);
    el.startBtn.addEventListener('click', goFullscreen);
    el.endBtn.addEventListener('click', exit);

    el.main.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        start();
      } else {
        end();
      }
    });
  } else {
    start();
  }
}

function goFullscreen() {
  el.main.requestFullscreen();
  start();
}

function exit() {
  document.exitFullscreen();
}

function handleTopLevelSpaceKey(e: KeyboardEvent): void {
  if (e.key === ' ' && !document.fullscreenElement) {
    goFullscreen();
  }
}
