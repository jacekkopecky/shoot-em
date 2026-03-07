import { log } from './log.js';
import { TouchHandler } from './touch-handler.js';

const el = {
  track: document.querySelector<HTMLElement>('#track')!,
  player: document.querySelector<HTMLElement>('#player')!,
  objects: document.querySelector<HTMLElement>('#objects')!,
  hazePlanes: document.querySelector<HTMLElement>('#hazePlanes')!,
  main: document.querySelector('main')!,
};

const playerMargin = 10;
let playerX = 50;

export function init() {
  // todo drop this
  start();

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
      },
    });
    el.track.addEventListener('click', togglePlaying);
    setupObjects();
    setupHazePlanes();
  }
}

const MAX_OBJECT_INITIAL_Y_VH = 260;
const OBJECT_SPEED_VHPS = 10;
const N = 120;

const objects: { el: HTMLElement; x: number; y: number }[] = [];

function isPlaying() {
  return el.track.classList.contains('playing');
}

function togglePlaying() {
  const playing = !isPlaying();
  el.track.classList.toggle('playing', playing);
  handler?.toggle(playing);

  if (!playing) {
    setupObjects();
  } else {
    lastTimeMs = null;
    requestAnimationFrame(moveObjectsOnAnimationFrame);
  }
}

let lastTimeMs: number | null = null;
function setupObjects() {
  el.objects.textContent = '';
  objects.length = 0;

  for (let i = 0; i < N; i++) {
    const x = Math.random() * 80 - 40;
    const y = (MAX_OBJECT_INITIAL_Y_VH / N) * i - MAX_OBJECT_INITIAL_Y_VH;

    const objDiv = document.createElement('div');

    const charDiv = document.createElement('div');
    // charDiv.textContent = String(i + 1);
    charDiv.textContent = '😀';

    // const charDiv = document.createElement('img');
    // charDiv.src = 'https://jacekkopecky.github.io/jewel-board/svgs/1x2-aqua.svg';
    // charDiv.src = 'https://equations.jacek.cz/cherries.47ab7f9b.png';
    // charDiv.width = 30;

    objDiv.append(charDiv);
    setObjectElPosition(objDiv, x, y);
    el.objects.append(objDiv);
    objects.push({ el: objDiv, x, y });
  }
}

const N_HAZE_STEPS = 9;
const HAZE_DEPTH_VH = 80;

function setupHazePlanes() {
  el.hazePlanes.textContent = '';

  // building haze planes from front to back so incoming stuff will come from the haze
  for (let i = 0; i <= N_HAZE_STEPS; i++) {
    const y = (HAZE_DEPTH_VH * (N_HAZE_STEPS - i)) / N_HAZE_STEPS;

    const hazeLineDiv = document.createElement('div');
    const hazeDiv = document.createElement('div');

    const opacity = 1 / (N_HAZE_STEPS + 1 - i);
    hazeDiv.style.opacity = String(opacity);

    hazeLineDiv.append(hazeDiv);
    setObjectElPosition(hazeLineDiv, 0, y);
    el.hazePlanes.append(hazeLineDiv);
  }
}

function setObjectElPosition(objDiv: HTMLElement, x: number, y: number) {
  objDiv.style.transform = `translate(${x}%, ${y}vh)`;
}

let frames = 0;
function moveObjectsOnAnimationFrame(ms: number) {
  if (isPlaying()) {
    if (lastTimeMs != null) {
      const msElapsed = ms - lastTimeMs;
      for (const obj of objects) {
        obj.y += (OBJECT_SPEED_VHPS * msElapsed) / 1000;
        setObjectElPosition(obj.el, obj.x, obj.y);
      }

      frames += 1;
      if (lastTimeMs % 1000 > ms % 1000) {
        log(String(frames));
        frames = 0;
      }
    }
    lastTimeMs = ms;
    requestAnimationFrame(moveObjectsOnAnimationFrame);
  }
}

function end() {
  handler?.shutdown();
  handler = null;
}

function updateView() {
  el.player.style.transform = `translateX(${playerX - 50}%)`;
}
