import * as Three from 'three';

import { cameraToTrackEndLength, objectSpeedPerSecond, trackLength } from './dimensions.js';
import { log } from './log.js';
import { camera, dispose, renderer, setupThree } from './three.js';
import { createObject, createTrack } from './three-resources.js';
import { TouchHandler } from './touch-handler.js';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webgl-canvas')!,
};

const N = 1000;
const START_BEYOND = false;

let handler: TouchHandler | null = null;

export function start() {
  if (!handler) {
    handler = new TouchHandler(el.main, {
      initialX: 50,
      onMove: updatePlayerPosition,
    });
    el.canvas.addEventListener('click', () => togglePlaying());
    setupThree(el.main);
    setupScene();
    setupObjects();
  }
}

function isPlaying() {
  return el.canvas.classList.contains('playing');
}

function togglePlaying(value?: boolean) {
  const playing = value ?? !isPlaying();
  el.canvas.classList.toggle('playing', playing);
  handler?.toggle(playing);

  if (!playing) {
    setupObjects();
  } else {
    lastTimeMs = null;
    requestAnimationFrame(moveObjectsOnAnimationFrame);
  }
}

let lastTimeMs: number | null = null;
let scene: Three.Scene;
let objectsGroup: Three.Group;

function setupScene() {
  if (scene) return;

  scene = new Three.Scene();
  scene.background = new Three.Color(0xb0b0b0);

  scene.fog = new Three.Fog(
    scene.background,
    cameraToTrackEndLength - trackLength * 0.2,
    cameraToTrackEndLength,
  );

  scene.add(createTrack());

  const player = createObject('player');
  scene.add(player);
}

function setupObjects() {
  if (objectsGroup) {
    scene.remove(objectsGroup);
    dispose(objectsGroup);
  }

  objectsGroup = new Three.Group();
  scene.add(objectsGroup);

  for (let i = 0; i < N; i++) {
    const x = Math.random() * 80 - 40;
    const y = -(trackLength / N) * i - (START_BEYOND ? trackLength : 50);

    const obj = createObject('object');
    obj.position.x = x;
    obj.position.z = y;
    objectsGroup.add(obj);
  }
}

let frames = 0;
function moveObjectsOnAnimationFrame(ms: number) {
  if (isPlaying()) {
    if (lastTimeMs != null) {
      const msElapsed = ms - lastTimeMs;
      const delta = (objectSpeedPerSecond * msElapsed) / 1000;

      objectsGroup.position.z += delta;
      renderer.render(scene, camera);

      frames += 1;
      if (lastTimeMs % 1000 > ms % 1000) {
        log(`${N}: ${frames}`);
        frames = 0;
      }
    }
    lastTimeMs = ms;
    requestAnimationFrame(moveObjectsOnAnimationFrame);
  }
}

export function end() {
  handler?.shutdown();
  handler = null;
  togglePlaying(false);
}

function updatePlayerPosition(playerX: number) {
  // todo move player, take into account playerMargin
}
