import { log } from './log.js';
import { TouchHandler } from './touch-handler.js';

const el = {
  player: document.querySelector<HTMLElement>('#player')!,
  main: document.querySelector('main')!,
};

const playerMargin = 10;
let playerX = 50;

export function init() {
  el.main.addEventListener('fullscreenchange', (e) => {
    if (document.fullscreenElement) {
      start();
    } else {
      end();
    }
  });
}

let handler: TouchHandler | null = null;

function start() {
  if (!handler) {
    handler = new TouchHandler(el.main, {
      initialX: playerX,
      marginX: playerMargin,
      onMove(currX) {
        playerX = currX;
        updateView();
        log(`${currX}`);
      },
    });
  }
}

function end() {
  handler?.shutdown();
  handler = null;
}

function updateView() {
  el.player.style.transform = `translateX(${playerX - 50}%)`;
}
