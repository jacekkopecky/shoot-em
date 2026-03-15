import * as THREE from 'three';

import * as dim from '../dimensions';
import { logFps } from '../log';
import { render, scene, timer } from '../three';
import { createTrack, createTrackDecorations, moveTrackDecorations } from '../three-resources';

import {
  awardsGroup,
  setupAwards,
  toggleEndRunScreen,
  updateAwardsView,
  updateEndRunScreen,
} from './awards';
import { bulletsGroup, movePlayerBullets, setupBullets } from './bullets';
import { dyingGroup, moveAndSweepDyingGroup, setupDyingGroup } from './dying';
import { moveObjects, objectsGroup, setupObjects } from './objects';
import {
  checkPlayersHit,
  playersGroup,
  playerShoot,
  setupPlayers,
  updatePlayerPosition,
} from './players';

import { disposeAnimations, updateAnimations } from './utils/animations';
import { TouchHandler } from './utils/touch-handler';

let handler: TouchHandler;

const trackDecorationsGroup = new THREE.Group();

let playing = false;
let ending = false;
let fullscreenPaused = false;

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webglCanvas')!,
  exitBtn: document.querySelector<HTMLButtonElement>('#exitBtn')!,
};

/**
 * First-time initialization.
 */
export function init() {
  setupScene();

  handler = new TouchHandler(el.canvas, {
    initialX: 0.5,
    speedUp: 1 + dim.FINGER_WIDTH_PERCENT / 100,
    onMove: updatePlayerPosition,
  });
  updateTouchHandlerEnabled();

  el.main.addEventListener('fullscreenchange', () => {
    toggleFullscreenPause(document.fullscreenElement == null);
  });

  el.exitBtn.addEventListener('click', (e) => {
    if (playing) {
      endRun(true);
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
      el.exitBtn.disabled = true;
    }
  });
}

function updateTouchHandlerEnabled() {
  handler.toggle(playing && !ending && !fullscreenPaused);
}

function setupScene() {
  scene.clear();
  scene.background = new THREE.Color(0xb0c0d0);

  scene.fog = new THREE.Fog(
    scene.background,
    dim.cameraToTrackEndLength - dim.trackLength * 0.2,
    dim.cameraToTrackEndLength,
  );

  // lights
  const skylight = new THREE.HemisphereLight(0xffffff, 0xb97a20, 1);
  scene.add(skylight);

  const sunlight = new THREE.DirectionalLight(0xffffff, 3);
  sunlight.position.set(10, 10, 5);
  scene.add(sunlight);

  scene.add(awardsGroup);
  scene.add(objectsGroup);
  scene.add(playersGroup);
  scene.add(bulletsGroup);
  scene.add(dyingGroup);
  scene.add(trackDecorationsGroup);

  scene.add(createTrack());
  createTrackDecorations(trackDecorationsGroup);
}

/**
 * make objects, reset in-run scores, show
 */
export function prepareRun() {
  disposeAnimations();

  setupAwards();
  setupObjects();
  setupPlayers();
  setupBullets();
  setupDyingGroup();

  playing = false;
  updateTouchHandlerEnabled();

  render();
}

export function startRun() {
  playing = true;
  ending = false;
  updateTouchHandlerEnabled();
  handler.setCurrentX(0.5);
  animationFrame();
}

function endRun(immediate = false) {
  if (!playing || ending) return;
  ending = true;
  updateTouchHandlerEnabled();
  updateEndRunScreen();

  setTimeout(
    () => {
      toggleEndRunScreen(true);

      setTimeout(() => {
        playing = false;
      }, 1000);
    },
    immediate ? 0 : 1000,
  );
}

function toggleFullscreenPause(value: boolean) {
  fullscreenPaused = value;
  updateTouchHandlerEnabled();
  // update timer so if we're restarting animation, only a bit of time will have passed
  timer.update();
}

function isGameFinished() {
  return (
    objectsGroup.children.length === 0 ||
    (playersGroup.children.length === 0 && dyingGroup.children.length === 0)
  );
}

// const fpsDivider = 10;
// let fpsLimiter = fpsDivider - 1;

function animationFrame(ms?: number) {
  if (playing) requestAnimationFrame(animationFrame);

  // fpsLimiter = (fpsLimiter + 1) % fpsDivider;
  // if (fpsLimiter > 0) return;

  timer.update(ms);
  if (fullscreenPaused) return;

  if (ms != null) {
    const delta = timer.getDelta();
    updateAnimations(delta);
    moveObjects(delta);
    moveTrackDecorations(trackDecorationsGroup, delta);
    checkPlayersHit();
    playerShoot(delta);
    movePlayerBullets(delta);
    moveAndSweepDyingGroup(delta);
    updateAwardsView(delta);

    if (isGameFinished()) {
      endRun();
    }
  }
  render();
  logFps(ms, `${objectsGroup.children.length}: `);
}
